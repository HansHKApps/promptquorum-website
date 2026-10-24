// Genva Review: Free On-Device AI Image Generator for iPhone
// Slug: genva-review
// Category: Image & Video Generation
// Sub-segment competitors (image generation): draw-things-review (closest, iPhone/iPad/Mac), diffusionbee-review, easy-diffusion-review.
// Sources: the US App Store listing (id 6795853918, via the iTunes lookup API and the listing page) and the developer site appaxis.ca,
// checked 2026-10-24 — no hands-on use. Third-party pointer: siliconshelf.app (auto-detected on-device/offline tags, untested).
// Last upstream update 2026-10-14 (version 1.0.0) => no stale warning (owner rule 2026-10-16).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Image & Video Generation',
    heroImage: '/images/genva-review-hero-en.webp',
    title: 'Genva Review: Free On-Device AI Image Generator for iPhone',
    seoTitle: 'Genva Review: On-Device AI Image Generator for iPhone',
    intro: 'Genva is an iPhone and iPad app by AppAxis Inc. that, according to its App Store listing, generates images on the device from a text prompt or a photo, restyles photos and upscales pictures, using models that are downloaded once and then work offline. This review reflects the App Store listing and the developer website, checked on 24 October 2026; PromptQuorum did not test the app hands-on.',
    metaDescription: 'Genva review: free iPhone and iPad app that generates images on-device after one model download. Features, pricing, privacy label, unverified claims.',
    twitterDescription: 'Genva review: iPhone and iPad image generator that runs on-device, with text to image, photo restyling and upscaling. What the listing states and what stays unverified.',
    audience: 'iPhone and iPad owners who want to generate images without a cloud queue and need to know what the listing states, what is only the developer\'s claim and what is unknown.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Genva review',
    targetKeywords: [
      'genva review',
      'genva ai imagery on device',
      'ai image generator iphone offline',
      'on-device image generation ios',
      'appaxis genva',
      'genva vs draw things',
      'text to image app iphone no cloud',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
    ],
    leadAnswerBlock: '**Genva is a free iPhone and iPad app that, by its App Store listing, turns text prompts and photos into images on the device, using models you download once.** It launched as version 1.0.0 on 14 October 2026, so it has no ratings and no track record yet.',
    quickAnswerTop: {
      en: {
        question: 'Does Genva really generate images offline on an iPhone?',
        answer: 'The App Store listing says generation runs on-device with the Apple Neural Engine after a one-time model download, and that prompts stay on the phone. PromptQuorum did not test this, and the models are not named.',
        bullets: [
          'Three modes: text to image, image to image and upscaling to 1024 or 2048.',
          'Free tier of 3 generations a day; unlimited use needs a yearly subscription or a Lifetime purchase.',
          'App Privacy label: Data Not Collected, which is the developer\'s own declaration.',
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
        label: 'What Is Genva?',
        anchor: 'what-is-genva',
      },
      {
        label: 'Get It',
        anchor: 'get-it',
      },
      {
        label: 'Plans and Pricing',
        anchor: 'plans-and-pricing',
      },
      {
        label: 'Features',
        anchor: 'key-features',
      },
      {
        label: 'Privacy and Data Flow',
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
            text: 'Genva is a new iPhone and iPad app that generates and upscales images on the device using downloadable models.',
          },
          {
            type: 'plain-terms',
            text: 'You install the 37.5 MB app, download a model once, and then type a prompt or pick a photo; the listing says the work happens on your phone with no cloud queue.',
          },
        ],
        items: [
          'Platform: iPhone and iPad only, iOS 17.0 or later; no Android, Mac or web version was found.',
          'Version: 1.0.0, released 14 October 2026 and not updated since; the listing shows no ratings yet.',
          'Developer: AppAxis Inc., whose website is a general software-agency page with nothing about Genva.',
          'Language: the interface is English only.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the App Store listing and the developer website, checked on 24 October 2026. It involved no hands-on use, benchmarking or network analysis.',
          },
        ],
      },
      overview: {
        id: 'what-is-genva',
        title: 'What Is Genva?',
        content: [
          '**According to its App Store listing, Genva is an AI image generator that runs on the iPhone or iPad itself instead of on a server.** You describe a scene, style or mood, choose a model for artistic, photoreal or portrait work, and generate with the Apple Neural Engine; the listing says there is no cloud queue.',
          'The app is published by AppAxis Inc. in the Entertainment and Photo & Video categories. The listing describes three jobs: text to image, image to image (restyle, relight or vary a photo with a prompt) and upscaling. This review covers only the iOS app.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Genva is a normal App Store download: open the listing, tap Get, and download a model inside the app.** No Google Play, Mac or web version was found.',
        ],
        columns: [
          'Platform',
          'Where to get it',
        ],
        rows: [
          {
            Platform: 'iPhone and iPad',
            'Where to get it': '[Genva on the App Store](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918) (free, iOS 17.0+, 37.5 MB)',
          },
          {
            Platform: 'Website',
            'Where to get it': '[appaxis.ca](https://appaxis.ca) (developer site)',
          },
        ],
        note: 'Version reviewed: 1.0.0, released on the App Store on 14 October 2026 (last update the same day). The models are separate downloads whose size is not stated. No privacy-policy page was found on the listing or on the developer site, so no policy row is shown. No terminal or technical setup is needed.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Plans and Pricing',
        content: [
          '**Genva is freemium: 3 free generations a day, then a yearly subscription or a one-time Lifetime purchase unlocks unlimited on-device generations.** The listing shows no prices, so none are stated here; check the in-app purchase screen before paying.',
        ],
        columns: [
          'Plan',
          'Price',
          'What it includes',
        ],
        rows: [
          {
            Plan: 'Free',
            Price: 'Free',
            'What it includes': '3 generations a day',
          },
          {
            Plan: 'Yearly subscription',
            Price: 'Not shown',
            'What it includes': 'Unlimited on-device generations',
          },
          {
            Plan: 'Lifetime purchase',
            Price: 'Not shown',
            'What it includes': 'Unlimited, one-time payment',
          },
        ],
        note: 'According to the listing, subscriptions are managed or cancelled in your Apple ID settings. Prices differ by storefront and were not read for this review.',
      },
      features: {
        id: 'key-features',
        title: 'Features',
        content: [
          '**Genva offers three generation modes plus prompt controls, all described in its App Store listing.** The items below come from that listing; none were tested.',
        ],
        items: [
          '**Text to image.** Describe a scene, style or mood and generate it on the device.',
          '**Image to image.** Restyle, relight or vary a photo with a prompt.',
          '**Upscale.** Sharpen a picture and export it at 1024 or 2048.',
          '**Controls.** Negative prompts, filters and styles; results save to an in-app Assets library and to Photos.',
          '**Models.** You choose between models aimed at artistic, photoreal or portrait work and download each once; the listing does not name them.',
        ],
        note: 'The listing mentions no video generation, inpainting or local API.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**The App Store shows a "Data Not Collected" privacy label, which is the developer\'s own declaration to Apple.** The listing also says prompts stay on the phone and that generation needs no cloud queue.',
          'No privacy-policy page was found on the listing or on appaxis.ca, and the source of the model downloads is not stated. Purchases are billed through your Apple ID, according to the listing.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum did not inspect the app\'s network traffic, so the on-device and no-collection statements are the developer\'s claims.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**iPhone owners who want to try local image generation without a computer.**',
          '**People who want to restyle or upscale photos on the device.**',
          '**Readers who prefer a free tier to test before paying.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**On-device claim.** Whether generation really stays on the phone, including during the model download, was not tested.',
          '**Models.** No model name, size, license or source is stated, so output quality and usage rights are unknown.',
          '**Prices.** The subscription and Lifetime prices do not appear on the listing.',
          '**Developer.** The AppAxis website is a generic agency page; no policy, support page or product page for Genva was found.',
          '**Hands-on quality.** Speed, image quality, device requirements, battery use and heat were not tested.',
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
            App: '[Draw Things](/power-local-llm/draw-things-review)',
            Platforms: 'iPhone, iPad, Mac',
            'Price / license': 'Freemium / closed source',
            'Key difference': 'The closest alternative: native local image generation on Apple devices, with optional cloud compute',
          },
          {
            App: '[DiffusionBee](/power-local-llm/diffusionbee-review)',
            Platforms: 'Mac',
            'Price / license': 'Free / AGPL-3.0',
            'Key difference': 'Packaged one-click Mac app for local Stable Diffusion; no iPhone version',
          },
          {
            App: '[Easy Diffusion](/power-local-llm/easy-diffusion-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price / license': 'Free / custom license',
            'Key difference': 'One-click Stable Diffusion installer with a browser UI, for computers',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own page. Unlike these, Genva is a new 1.0.0 app with no ratings yet.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Genva need an internet connection?',
            a: 'The listing says models are downloaded once and can then be used offline. This was not tested, and the download size is not stated.',
          },
          {
            q: 'Can Genva restyle or upscale my own photos?',
            a: 'Yes, according to the listing: image to image restyles or varies a photo with a prompt, and upscaling exports at 1024 or 2048.',
          },
          {
            q: 'Which iPhone does Genva need?',
            a: 'The listing names only iOS 17.0 or later; it states no minimum RAM, chip or free storage, so check your free space before downloading a model.',
          },
          {
            q: 'Can I use the images commercially?',
            a: 'The listing says nothing about image rights or model licenses, so the terms are unknown; read the app\'s terms before commercial use.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Genva is a new, free-to-try iPhone image generator whose listing promises on-device generation, photo restyling and upscaling. Those claims are untested here, the models and prices are not disclosed and the app has no ratings. It suits curious iPhone owners who are comfortable trying a 1.0.0 release; anyone who needs a documented track record should start with [Draw Things](/power-local-llm/draw-things-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Genva on the App Store](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918) — description, version, release date, size, requirements and privacy label, checked 24 October 2026.',
          '[AppAxis](https://appaxis.ca) — developer website, checked 24 October 2026.',
          '[Genva on SiliconShelf](https://siliconshelf.app/apps/genva-ai-imagery-on-device/) — third-party directory entry that surfaced the app; its on-device and offline tags are auto-detected, not tested.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Draw Things Review](/power-local-llm/draw-things-review) — native local image generation for iPhone, iPad and Mac.',
          '[DiffusionBee Review](/power-local-llm/diffusionbee-review) — a one-click Mac app for local Stable Diffusion.',
          '[Easy Diffusion Review](/power-local-llm/easy-diffusion-review) — a one-click Stable Diffusion installer with a browser UI.',
          '[Local AI Image Generation vs Cloud](/power-local-llm/local-ai-image-generation-vs-cloud) — when local generation beats a cloud service.',
          '[Local LLM Images and Video Compared](/power-local-llm/local-llm-images-video-compared) — the category comparison.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Genva Review: Free On-Device AI Image Generator for iPhone',
      description: 'Genva review: free iPhone and iPad image generator that runs on-device after a one-time model download. What the App Store listing states and what stays unverified.',
      url: 'https://promptquorum.com/power-local-llm/genva-review',
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
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'People evaluating an on-device AI image generator for iPhone',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Genva',
        },
        {
          '@type': 'Thing',
          name: 'On-device AI image generation',
        },
        {
          '@type': 'Thing',
          name: 'iPhone image generator',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://promptquorum.com/power-local-llm/genva-review',
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
          item: 'https://promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://promptquorum.com/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Genva Review',
          item: 'https://promptquorum.com/power-local-llm/genva-review',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/genva-review-hero-de.webp',
    title: 'Genva-Rezension: Kostenloser On-Device-Bildgenerator für das iPhone',
    seoTitle: 'Genva-Rezension: On-Device-Bildgenerator fürs iPhone',
    intro: 'Genva ist eine iPhone- und iPad-App von AppAxis Inc., die laut ihrem App-Store-Eintrag Bilder direkt auf dem Gerät aus einem Text oder einem Foto erzeugt, Fotos umgestaltet und Bilder hochskaliert – mit Modellen, die einmal heruntergeladen werden und dann offline funktionieren. Diese Rezension beruht auf dem App-Store-Eintrag und der Entwickler-Website, geprüft am 24. Oktober 2026; PromptQuorum hat die App nicht praktisch getestet.',
    metaDescription: 'Genva-Rezension: kostenlose iPhone- und iPad-App erzeugt Bilder nach Modell-Download auf dem Gerät. Funktionen, Preise, Datenschutz, Ungeprüftes.',
    twitterDescription: 'Genva-Rezension: Bildgenerator für iPhone und iPad, der auf dem Gerät läuft – mit Text-zu-Bild, Foto-Umgestaltung und Hochskalierung. Was der Eintrag angibt und was ungeprüft bleibt.',
    audience: 'iPhone- und iPad-Nutzer, die Bilder ohne Cloud-Warteschlange erzeugen möchten und wissen müssen, was der Eintrag angibt, was nur der Entwickler behauptet und was unbekannt ist.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Genva Rezension',
    targetKeywords: [
      'genva rezension',
      'genva ai imagery on device',
      'ki bildgenerator iphone offline',
      'bildgenerierung auf dem gerät ios',
      'appaxis genva',
      'genva vs draw things',
      'text-zu-bild app iphone ohne cloud',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
    ],
    leadAnswerBlock: '**Genva ist eine kostenlose iPhone- und iPad-App, die laut App-Store-Eintrag Texte und Fotos direkt auf dem Gerät in Bilder umwandelt – mit Modellen, die man einmal herunterlädt.** Sie erschien am 14. Oktober 2026 als Version 1.0.0 und hat daher weder Bewertungen noch eine Erfolgsbilanz.',
    quickAnswerTop: {
      de: {
        question: 'Erzeugt Genva Bilder wirklich offline auf dem iPhone?',
        answer: 'Laut App-Store-Eintrag läuft die Erzeugung nach einem einmaligen Modell-Download auf dem Gerät mit der Apple Neural Engine, und Prompts bleiben auf dem Telefon. PromptQuorum hat das nicht getestet, und die Modelle werden nicht genannt.',
        bullets: [
          'Drei Modi: Text-zu-Bild, Bild-zu-Bild und Hochskalieren auf 1024 oder 2048.',
          'Kostenlos sind 3 Erzeugungen pro Tag; unbegrenzte Nutzung erfordert ein Jahresabo oder einen Lifetime-Kauf.',
          'Datenschutz-Label der App: „Daten werden nicht erfasst“ – eine Angabe des Entwicklers selbst.',
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
        label: 'Was ist Genva?',
        anchor: 'what-is-genva',
      },
      {
        label: 'Bezugsquelle',
        anchor: 'get-it',
      },
      {
        label: 'Tarife und Preise',
        anchor: 'plans-and-pricing',
      },
      {
        label: 'Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Datenschutz und Datenfluss',
        anchor: 'privacy',
      },
      {
        label: 'Für wen sich der Dienst eignet',
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
            text: 'Genva ist eine neue iPhone- und iPad-App, die Bilder mit herunterladbaren Modellen direkt auf dem Gerät erzeugt und hochskaliert.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die 37,5 MB große App, laden einmal ein Modell herunter und geben dann einen Prompt ein oder wählen ein Foto; laut Eintrag läuft die Arbeit auf Ihrem Telefon, ohne Cloud-Warteschlange.',
          },
        ],
        items: [
          'Plattform: nur iPhone und iPad ab iOS 17.0; eine Android-, Mac- oder Web-Version wurde nicht gefunden.',
          'Version: 1.0.0, veröffentlicht am 14. Oktober 2026 und seither nicht aktualisiert; der Eintrag zeigt noch keine Bewertungen.',
          'Entwickler: AppAxis Inc., dessen Website eine allgemeine Softwareagentur-Seite ohne Hinweis auf Genva ist.',
          'Sprache: Die Oberfläche ist nur auf Englisch verfügbar.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension beruht auf dem App-Store-Eintrag und der Entwickler-Website, geprüft am 24. Oktober 2026. Sie umfasste keine praktische Nutzung, Benchmarks oder Netzwerkanalyse.',
          },
        ],
      },
      overview: {
        id: 'what-is-genva',
        title: 'Was ist Genva?',
        content: [
          '**Laut App-Store-Eintrag ist Genva ein KI-Bildgenerator, der auf dem iPhone oder iPad selbst läuft statt auf einem Server.** Sie beschreiben eine Szene, einen Stil oder eine Stimmung, wählen ein Modell für künstlerische, fotorealistische oder Porträt-Motive und erzeugen mit der Apple Neural Engine; laut Eintrag gibt es keine Cloud-Warteschlange.',
          'Die App wird von AppAxis Inc. in den Kategorien Unterhaltung sowie Foto & Video veröffentlicht. Der Eintrag beschreibt drei Aufgaben: Text-zu-Bild, Bild-zu-Bild (ein Foto per Prompt umgestalten, neu ausleuchten oder variieren) und Hochskalieren. Diese Rezension behandelt nur die iOS-App.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Genva ist ein gewöhnlicher App-Store-Download: Eintrag öffnen, „Laden“ tippen und in der App ein Modell herunterladen.** Eine Version für Google Play, Mac oder Web wurde nicht gefunden.',
        ],
        columns: [
          'Plattform',
          'Bezugsquelle',
        ],
        rows: [
          {
            Plattform: 'iPhone und iPad',
            Bezugsquelle: '[Genva im App Store](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918) (kostenlos, ab iOS 17.0, 37,5 MB)',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[appaxis.ca](https://appaxis.ca) (Entwickler-Website)',
          },
        ],
        note: 'Geprüfte Version: 1.0.0, am 14. Oktober 2026 im App Store erschienen (letztes Update am selben Tag). Die Modelle sind separate Downloads, deren Größe nicht angegeben ist. Weder im Eintrag noch auf der Entwickler-Website wurde eine Datenschutzerklärung gefunden, daher gibt es keine entsprechende Zeile. Ein Terminal oder technisches Setup ist nicht nötig.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Tarife und Preise',
        content: [
          '**Genva ist Freemium: 3 kostenlose Erzeugungen pro Tag, danach schaltet ein Jahresabo oder ein einmaliger Lifetime-Kauf unbegrenzte Erzeugungen auf dem Gerät frei.** Der Eintrag nennt keine Preise, daher stehen hier keine; prüfen Sie den In-App-Kaufbildschirm, bevor Sie zahlen.',
        ],
        columns: [
          'Tarif',
          'Preis',
          'Enthalten',
        ],
        rows: [
          {
            Tarif: 'Kostenlos',
            Preis: 'Gratis',
            Enthalten: '3 Erzeugungen pro Tag',
          },
          {
            Tarif: 'Jahresabo',
            Preis: 'Nicht angegeben',
            Enthalten: 'Unbegrenzte Erzeugungen auf dem Gerät',
          },
          {
            Tarif: 'Lifetime-Kauf',
            Preis: 'Nicht angegeben',
            Enthalten: 'Unbegrenzt, einmalige Zahlung',
          },
        ],
        note: 'Laut Eintrag werden Abos in den Apple-ID-Einstellungen verwaltet oder gekündigt. Die Preise unterscheiden sich je nach Store und wurden für diese Rezension nicht ausgelesen.',
      },
      features: {
        id: 'key-features',
        title: 'Funktionen',
        content: [
          '**Genva bietet drei Erzeugungsmodi plus Prompt-Einstellungen, alle im App-Store-Eintrag beschrieben.** Die folgenden Punkte stammen aus diesem Eintrag; keiner wurde getestet.',
        ],
        items: [
          '**Text-zu-Bild.** Eine Szene, einen Stil oder eine Stimmung beschreiben und auf dem Gerät erzeugen.',
          '**Bild-zu-Bild.** Ein Foto per Prompt umgestalten, neu ausleuchten oder variieren.',
          '**Hochskalieren.** Ein Bild schärfen und mit 1024 oder 2048 exportieren.',
          '**Einstellungen.** Negative Prompts, Filter und Stile; Ergebnisse werden in einer App-Bibliothek („Assets“) und in Fotos gespeichert.',
          '**Modelle.** Sie wählen zwischen Modellen für künstlerische, fotorealistische oder Porträt-Motive und laden jedes einmal herunter; der Eintrag nennt sie nicht.',
        ],
        note: 'Der Eintrag erwähnt weder Videoerzeugung noch Inpainting oder eine lokale API.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Der App Store zeigt das Datenschutz-Label „Daten werden nicht erfasst“, eine Erklärung des Entwicklers gegenüber Apple.** Der Eintrag sagt außerdem, dass Prompts auf dem Telefon bleiben und die Erzeugung keine Cloud-Warteschlange braucht.',
          'Weder im Eintrag noch auf appaxis.ca wurde eine Datenschutzerklärung gefunden, und die Quelle der Modell-Downloads wird nicht genannt. Käufe werden laut Eintrag über Ihre Apple-ID abgerechnet.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum hat den Netzwerkverkehr der App nicht untersucht; die Aussagen zu On-Device-Verarbeitung und fehlender Datenerfassung sind daher Angaben des Entwicklers.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich der Dienst eignet',
        items: [
          '**iPhone-Nutzer, die lokale Bilderzeugung ohne Computer ausprobieren möchten.**',
          '**Menschen, die Fotos auf dem Gerät umgestalten oder hochskalieren wollen.**',
          '**Leser, die vor dem Bezahlen lieber eine kostenlose Stufe testen.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**On-Device-Aussage.** Ob die Erzeugung wirklich auf dem Telefon bleibt, auch während des Modell-Downloads, wurde nicht getestet.',
          '**Modelle.** Weder Name, Größe, Lizenz noch Quelle der Modelle werden genannt; Bildqualität und Nutzungsrechte sind daher unbekannt.',
          '**Preise.** Die Preise für Abo und Lifetime-Kauf stehen nicht im Eintrag.',
          '**Entwickler.** Die AppAxis-Website ist eine allgemeine Agentur-Seite; weder Richtlinie noch Support- oder Produktseite zu Genva wurden gefunden.',
          '**Praxisqualität.** Geschwindigkeit, Bildqualität, Geräteanforderungen, Akkuverbrauch und Hitze wurden nicht getestet.',
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
          'Wesentlicher Unterschied',
        ],
        rows: [
          {
            App: '[Draw Things](/de/power-local-llm/draw-things-review)',
            Plattformen: 'iPhone, iPad, Mac',
            'Preis / Lizenz': 'Freemium / Closed Source',
            'Wesentlicher Unterschied': 'Die nächste Alternative: native lokale Bilderzeugung auf Apple-Geräten, mit optionaler Cloud-Rechenleistung',
          },
          {
            App: '[DiffusionBee](/de/power-local-llm/diffusionbee-review)',
            Plattformen: 'Mac',
            'Preis / Lizenz': 'Kostenlos / AGPL-3.0',
            'Wesentlicher Unterschied': 'Fertig verpackte Ein-Klick-Mac-App für lokales Stable Diffusion; keine iPhone-Version',
          },
          {
            App: '[Easy Diffusion](/de/power-local-llm/easy-diffusion-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / eigene Lizenz',
            'Wesentlicher Unterschied': 'Ein-Klick-Installer für Stable Diffusion mit Browser-Oberfläche, für Computer',
          },
        ],
        note: 'Details der Wettbewerber ändern sich oft; prüfen Sie aktuellen Preis, Lizenz und Plattformen auf der jeweiligen Seite. Anders als diese ist Genva eine neue 1.0.0-App ohne Bewertungen.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Braucht Genva eine Internetverbindung?',
            a: 'Laut Eintrag werden Modelle einmal heruntergeladen und lassen sich danach offline nutzen. Das wurde nicht getestet, und die Download-Größe ist nicht angegeben.',
          },
          {
            q: 'Kann Genva meine eigenen Fotos umgestalten oder hochskalieren?',
            a: 'Ja, laut Eintrag: Bild-zu-Bild gestaltet ein Foto per Prompt um oder variiert es, und das Hochskalieren exportiert mit 1024 oder 2048.',
          },
          {
            q: 'Welches iPhone braucht Genva?',
            a: 'Der Eintrag nennt nur iOS 17.0 oder neuer; Mindest-RAM, Chip oder freier Speicher werden nicht angegeben – prüfen Sie daher Ihren freien Speicher vor dem Modell-Download.',
          },
          {
            q: 'Darf ich die Bilder kommerziell nutzen?',
            a: 'Der Eintrag sagt nichts zu Bildrechten oder Modelllizenzen, die Bedingungen sind also unbekannt; lesen Sie vor kommerzieller Nutzung die Nutzungsbedingungen der App.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Genva ist ein neuer, kostenlos testbarer iPhone-Bildgenerator, dessen Eintrag Erzeugung auf dem Gerät, Foto-Umgestaltung und Hochskalierung verspricht. Diese Aussagen wurden hier nicht getestet, Modelle und Preise sind nicht offengelegt, und die App hat keine Bewertungen. Sie eignet sich für neugierige iPhone-Nutzer, die eine 1.0.0-Version ausprobieren möchten; wer eine dokumentierte Erfolgsbilanz braucht, beginnt besser mit [Draw Things](/de/power-local-llm/draw-things-review).',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Genva im App Store](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918) — Beschreibung, Version, Veröffentlichungsdatum, Größe, Anforderungen und Datenschutz-Label, geprüft am 24. Oktober 2026.',
          '[AppAxis](https://appaxis.ca) — Entwickler-Website, geprüft am 24. Oktober 2026.',
          '[Genva auf SiliconShelf](https://siliconshelf.app/apps/genva-ai-imagery-on-device/) — Verzeichniseintrag eines Dritten, über den die App auffiel; die Tags „On-device“ und „Offline“ sind automatisch erkannt, nicht getestet.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Draw Things Rezension](/de/power-local-llm/draw-things-review) — native lokale Bilderzeugung für iPhone, iPad und Mac.',
          '[DiffusionBee Rezension](/de/power-local-llm/diffusionbee-review) — eine Ein-Klick-Mac-App für lokales Stable Diffusion.',
          '[Easy Diffusion Rezension](/de/power-local-llm/easy-diffusion-review) — ein Ein-Klick-Installer für Stable Diffusion mit Browser-Oberfläche.',
          '[Lokale KI-Bilderzeugung vs. Cloud](/de/power-local-llm/local-ai-image-generation-vs-cloud) — wann lokale Erzeugung einen Cloud-Dienst schlägt.',
          '[Lokale KI für Bild und Video im Vergleich](/de/power-local-llm/local-llm-images-video-compared) — der Kategorievergleich.',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/genva-review-hero-es.webp',
    title: 'Reseña de Genva: generador de imágenes con IA gratis en el iPhone',
    seoTitle: 'Reseña de Genva: generador de imágenes IA en iPhone',
    intro: 'Genva es una app para iPhone y iPad de AppAxis Inc. que, según su ficha de App Store, genera imágenes en el propio dispositivo a partir de un texto o una foto, cambia el estilo de las fotos y amplía imágenes, con modelos que se descargan una vez y luego funcionan sin conexión. Esta reseña refleja la ficha de App Store y el sitio del desarrollador, consultados el 24 de octubre de 2026; PromptQuorum no probó la app en la práctica.',
    metaDescription: 'Reseña de Genva: app gratis para iPhone y iPad que genera imágenes en el dispositivo tras una descarga. Funciones, precios, privacidad y lo no verificado.',
    twitterDescription: 'Reseña de Genva: generador de imágenes para iPhone y iPad que funciona en el dispositivo, con texto a imagen, cambio de estilo de fotos y ampliación. Qué indica la ficha y qué sigue sin verificar.',
    audience: 'Personas con iPhone o iPad que quieren generar imágenes sin cola en la nube y necesitan saber qué indica la ficha, qué es solo una afirmación del desarrollador y qué se desconoce.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña Genva',
    targetKeywords: [
      'reseña genva',
      'genva ai imagery on device',
      'generador de imágenes ia iphone sin conexión',
      'generación de imágenes en el dispositivo ios',
      'appaxis genva',
      'genva vs draw things',
      'app texto a imagen iphone sin nube',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
    ],
    leadAnswerBlock: '**Genva es una app gratuita para iPhone y iPad que, según su ficha de App Store, convierte textos y fotos en imágenes en el propio dispositivo, con modelos que se descargan una vez.** Salió como versión 1.0.0 el 14 de octubre de 2026, así que aún no tiene valoraciones ni historial.',
    quickAnswerTop: {
      es: {
        question: '¿Genva genera de verdad imágenes sin conexión en el iPhone?',
        answer: 'La ficha de App Store dice que la generación se ejecuta en el dispositivo con el Apple Neural Engine tras una descarga única del modelo, y que los prompts se quedan en el teléfono. PromptQuorum no lo probó, y los modelos no se nombran.',
        bullets: [
          'Tres modos: texto a imagen, imagen a imagen y ampliación a 1024 o 2048.',
          'Nivel gratuito de 3 generaciones al día; el uso ilimitado requiere una suscripción anual o una compra Lifetime.',
          'Etiqueta de privacidad: «Datos no recopilados», una declaración del propio desarrollador.',
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
        label: '¿Qué es Genva?',
        anchor: 'what-is-genva',
      },
      {
        label: 'Cómo obtenerlo',
        anchor: 'get-it',
      },
      {
        label: 'Planes y precios',
        anchor: 'plans-and-pricing',
      },
      {
        label: 'Funciones',
        anchor: 'key-features',
      },
      {
        label: 'Privacidad y flujo de datos',
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
            text: 'Genva es una app nueva para iPhone y iPad que genera y amplía imágenes en el dispositivo con modelos descargables.',
          },
          {
            type: 'plain-terms',
            text: 'Instalas la app de 37,5 MB, descargas un modelo una vez y luego escribes un prompt o eliges una foto; según la ficha, el trabajo ocurre en tu teléfono, sin cola en la nube.',
          },
        ],
        items: [
          'Plataforma: solo iPhone y iPad con iOS 17.0 o posterior; no se encontró versión para Android, Mac ni web.',
          'Versión: 1.0.0, publicada el 14 de octubre de 2026 y sin actualizaciones desde entonces; la ficha aún no muestra valoraciones.',
          'Desarrollador: AppAxis Inc., cuyo sitio es una página genérica de agencia de software sin nada sobre Genva.',
          'Idioma: la interfaz solo está en inglés.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en la ficha de App Store y el sitio del desarrollador, consultados el 24 de octubre de 2026. No incluyó uso práctico, pruebas de rendimiento ni análisis de red.',
          },
        ],
      },
      overview: {
        id: 'what-is-genva',
        title: '¿Qué es Genva?',
        content: [
          '**Según su ficha de App Store, Genva es un generador de imágenes con IA que se ejecuta en el propio iPhone o iPad en lugar de en un servidor.** Describes una escena, un estilo o un ambiente, eliges un modelo artístico, fotorrealista o de retratos y generas con el Apple Neural Engine; la ficha indica que no hay cola en la nube.',
          'La app la publica AppAxis Inc. en las categorías Entretenimiento y Foto y vídeo. La ficha describe tres tareas: texto a imagen, imagen a imagen (cambiar el estilo, la iluminación o crear una variante de una foto con un prompt) y ampliación. Esta reseña cubre solo la app de iOS.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerlo',
        content: [
          '**Genva se descarga como cualquier app de App Store: abre la ficha, toca Obtener y descarga un modelo dentro de la app.** No se encontró versión para Google Play, Mac ni web.',
        ],
        columns: [
          'Plataforma',
          'Dónde obtenerlo',
        ],
        rows: [
          {
            Plataforma: 'iPhone y iPad',
            'Dónde obtenerlo': '[Genva en App Store](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918) (gratis, iOS 17.0+, 37,5 MB)',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde obtenerlo': '[appaxis.ca](https://appaxis.ca) (sitio del desarrollador)',
          },
        ],
        note: 'Versión revisada: 1.0.0, publicada en App Store el 14 de octubre de 2026 (última actualización el mismo día). Los modelos son descargas aparte cuyo tamaño no se indica. No se encontró página de política de privacidad ni en la ficha ni en el sitio del desarrollador, por lo que no hay fila de política. No hace falta terminal ni configuración técnica.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Planes y precios',
        content: [
          '**Genva es freemium: 3 generaciones gratis al día; después, una suscripción anual o una compra Lifetime única desbloquea generaciones ilimitadas en el dispositivo.** La ficha no muestra precios, así que aquí no se indica ninguno; revisa la pantalla de compras dentro de la app antes de pagar.',
        ],
        columns: [
          'Plan',
          'Precio',
          'Qué incluye',
        ],
        rows: [
          {
            Plan: 'Gratis',
            Precio: 'Gratis',
            'Qué incluye': '3 generaciones al día',
          },
          {
            Plan: 'Suscripción anual',
            Precio: 'No indicado',
            'Qué incluye': 'Generaciones ilimitadas en el dispositivo',
          },
          {
            Plan: 'Compra Lifetime',
            Precio: 'No indicado',
            'Qué incluye': 'Ilimitado, pago único',
          },
        ],
        note: 'Según la ficha, las suscripciones se gestionan o cancelan en los ajustes del ID de Apple. Los precios varían según la tienda y no se consultaron para esta reseña.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones',
        content: [
          '**Genva ofrece tres modos de generación y controles de prompt, todos descritos en su ficha de App Store.** Los puntos siguientes proceden de esa ficha; ninguno se probó.',
        ],
        items: [
          '**Texto a imagen.** Describe una escena, un estilo o un ambiente y genéralo en el dispositivo.',
          '**Imagen a imagen.** Cambia el estilo, la iluminación o crea una variante de una foto con un prompt.',
          '**Ampliación.** Afina una imagen y expórtala a 1024 o 2048.',
          '**Controles.** Prompts negativos, filtros y estilos; los resultados se guardan en una biblioteca «Assets» de la app y en Fotos.',
          '**Modelos.** Eliges entre modelos artísticos, fotorrealistas o de retratos y descargas cada uno una vez; la ficha no los nombra.',
        ],
        note: 'La ficha no menciona generación de vídeo, inpainting ni API local.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**App Store muestra la etiqueta de privacidad «Datos no recopilados», que es la declaración del propio desarrollador a Apple.** La ficha también dice que los prompts se quedan en el teléfono y que la generación no necesita cola en la nube.',
          'No se encontró página de política de privacidad ni en la ficha ni en appaxis.ca, y no se indica el origen de las descargas de modelos. Según la ficha, las compras se cobran a través de tu ID de Apple.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum no inspeccionó el tráfico de red de la app, por lo que las afirmaciones sobre el procesamiento en el dispositivo y la ausencia de recopilación son del desarrollador.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Personas con iPhone que quieren probar la generación local de imágenes sin ordenador.**',
          '**Quienes desean cambiar el estilo o ampliar fotos en el dispositivo.**',
          '**Lectores que prefieren probar un nivel gratuito antes de pagar.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Procesamiento en el dispositivo.** No se probó si la generación se queda realmente en el teléfono, incluida la descarga del modelo.',
          '**Modelos.** No se indican nombre, tamaño, licencia ni origen, por lo que se desconocen la calidad de las imágenes y los derechos de uso.',
          '**Precios.** Los precios de la suscripción y de la compra Lifetime no aparecen en la ficha.',
          '**Desarrollador.** El sitio de AppAxis es una página genérica de agencia; no se encontró política, página de soporte ni página de producto de Genva.',
          '**Calidad en la práctica.** No se probaron velocidad, calidad de imagen, requisitos del dispositivo, consumo de batería ni calentamiento.',
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
            App: '[Draw Things](/es/power-local-llm/draw-things-review)',
            Plataformas: 'iPhone, iPad, Mac',
            'Precio / licencia': 'Freemium / código cerrado',
            'Diferencia clave': 'La alternativa más cercana: generación local nativa en dispositivos Apple, con cómputo en la nube opcional',
          },
          {
            App: '[DiffusionBee](/es/power-local-llm/diffusionbee-review)',
            Plataformas: 'Mac',
            'Precio / licencia': 'Gratis / AGPL-3.0',
            'Diferencia clave': 'App de Mac empaquetada con un clic para Stable Diffusion local; sin versión para iPhone',
          },
          {
            App: '[Easy Diffusion](/es/power-local-llm/easy-diffusion-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / licencia propia',
            'Diferencia clave': 'Instalador de Stable Diffusion con un clic y interfaz web, para ordenadores',
          },
        ],
        note: 'Los detalles de la competencia cambian a menudo; confirma el precio, la licencia y las plataformas actuales en la página de cada app. A diferencia de estas, Genva es una app nueva 1.0.0 sin valoraciones.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Necesita Genva conexión a internet?',
            a: 'La ficha dice que los modelos se descargan una vez y luego se pueden usar sin conexión. No se probó, y no se indica el tamaño de la descarga.',
          },
          {
            q: '¿Puede Genva cambiar el estilo o ampliar mis propias fotos?',
            a: 'Sí, según la ficha: imagen a imagen cambia el estilo de una foto o crea una variante con un prompt, y la ampliación exporta a 1024 o 2048.',
          },
          {
            q: '¿Qué iPhone necesita Genva?',
            a: 'La ficha solo cita iOS 17.0 o posterior; no indica RAM mínima, chip ni almacenamiento libre, así que revisa tu espacio libre antes de descargar un modelo.',
          },
          {
            q: '¿Puedo usar las imágenes con fines comerciales?',
            a: 'La ficha no dice nada sobre derechos de las imágenes ni licencias de los modelos, así que se desconocen las condiciones; lee los términos de la app antes de un uso comercial.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Genva es un generador de imágenes para iPhone nuevo y gratuito de probar, cuya ficha promete generación en el dispositivo, cambio de estilo de fotos y ampliación. Esas afirmaciones no se probaron aquí, los modelos y los precios no se revelan y la app no tiene valoraciones. Encaja con quienes tienen un iPhone y quieren probar una versión 1.0.0; quien necesite un historial documentado debería empezar por [Draw Things](/es/power-local-llm/draw-things-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Genva en App Store](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918) — descripción, versión, fecha de lanzamiento, tamaño, requisitos y etiqueta de privacidad, consultados el 24 de octubre de 2026.',
          '[AppAxis](https://appaxis.ca) — sitio del desarrollador, consultado el 24 de octubre de 2026.',
          '[Genva en SiliconShelf](https://siliconshelf.app/apps/genva-ai-imagery-on-device/) — ficha de un directorio de terceros en la que apareció la app; sus etiquetas «en el dispositivo» y «sin conexión» son de detección automática, no probadas.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Draw Things](/es/power-local-llm/draw-things-review) — generación local nativa de imágenes para iPhone, iPad y Mac.',
          '[Reseña de DiffusionBee](/es/power-local-llm/diffusionbee-review) — una app de Mac con un clic para Stable Diffusion local.',
          '[Reseña de Easy Diffusion](/es/power-local-llm/easy-diffusion-review) — un instalador de Stable Diffusion con un clic y interfaz web.',
          '[Generación local de imágenes con IA frente a la nube](/es/power-local-llm/local-ai-image-generation-vs-cloud) — cuándo la generación local supera a un servicio en la nube.',
          '[IA local para imagen y vídeo: comparativa](/es/power-local-llm/local-llm-images-video-compared) — la comparativa de la categoría.',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/genva-review-hero-fr.webp',
    title: 'Test de Genva : générateur d\'images IA gratuit sur l\'iPhone',
    seoTitle: 'Test de Genva : générateur d\'images IA sur iPhone',
    intro: 'Genva est une application iPhone et iPad d\'AppAxis Inc. qui, selon sa fiche App Store, génère des images sur l\'appareil à partir d\'un texte ou d\'une photo, retouche le style des photos et agrandit les images, avec des modèles téléchargés une seule fois puis utilisables hors ligne. Ce test repose sur la fiche App Store et le site du développeur, consultés le 24 octobre 2026 ; PromptQuorum n\'a pas testé l\'application en pratique.',
    metaDescription: 'Test de Genva : app gratuite iPhone et iPad qui génère des images sur l\'appareil après un téléchargement. Fonctions, tarifs, confidentialité, non vérifié.',
    twitterDescription: 'Test de Genva : générateur d\'images pour iPhone et iPad qui fonctionne sur l\'appareil, avec texte vers image, retouche de photos et upscaling. Ce que dit la fiche et ce qui reste non vérifié.',
    audience: 'Les propriétaires d\'iPhone et d\'iPad qui veulent générer des images sans file d\'attente cloud et ont besoin de savoir ce que la fiche indique, ce qui relève de la seule affirmation du développeur et ce qui reste inconnu.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Genva',
    targetKeywords: [
      'test genva',
      'genva ai imagery on device',
      'générateur d\'images ia iphone hors ligne',
      'génération d\'images sur l\'appareil ios',
      'appaxis genva',
      'genva vs draw things',
      'application texte vers image iphone sans cloud',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
    ],
    leadAnswerBlock: '**Genva est une application gratuite pour iPhone et iPad qui, selon sa fiche App Store, transforme des textes et des photos en images sur l\'appareil, avec des modèles téléchargés une seule fois.** Lancée en version 1.0.0 le 14 octobre 2026, elle n\'a encore ni avis ni historique.',
    quickAnswerTop: {
      fr: {
        question: 'Genva génère-t-elle vraiment des images hors ligne sur iPhone ?',
        answer: 'La fiche App Store indique que la génération s\'exécute sur l\'appareil avec l\'Apple Neural Engine après un téléchargement unique du modèle, et que les prompts restent sur le téléphone. PromptQuorum ne l\'a pas testé, et les modèles ne sont pas nommés.',
        bullets: [
          'Trois modes : texte vers image, image vers image et upscaling en 1024 ou 2048.',
          'Offre gratuite de 3 générations par jour ; l\'usage illimité exige un abonnement annuel ou un achat Lifetime.',
          'Étiquette de confidentialité : « Données non collectées », déclaration du développeur lui-même.',
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
        label: 'Qu\'est-ce qu\'Genva ?',
        anchor: 'what-is-genva',
      },
      {
        label: 'Où le trouver',
        anchor: 'get-it',
      },
      {
        label: 'Offres et tarifs',
        anchor: 'plans-and-pricing',
      },
      {
        label: 'Fonctionnalités',
        anchor: 'key-features',
      },
      {
        label: 'Confidentialité et flux de données',
        anchor: 'privacy',
      },
      {
        label: 'À qui il convient',
        anchor: 'who-should-use',
      },
      {
        label: 'Ce que nous n\'avons pas pu vérifier',
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
        label: 'Lectures complémentaires',
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
            text: 'Genva est une nouvelle application iPhone et iPad qui génère et agrandit des images sur l\'appareil avec des modèles téléchargeables.',
          },
          {
            type: 'plain-terms',
            text: 'Vous installez l\'application de 37,5 Mo, téléchargez un modèle une fois, puis saisissez un prompt ou choisissez une photo ; selon la fiche, le travail s\'effectue sur votre téléphone, sans file d\'attente cloud.',
          },
        ],
        items: [
          'Plateforme : iPhone et iPad uniquement, iOS 17.0 ou version ultérieure ; aucune version Android, Mac ou web trouvée.',
          'Version : 1.0.0, publiée le 14 octobre 2026 et non mise à jour depuis ; la fiche n\'affiche encore aucun avis.',
          'Développeur : AppAxis Inc., dont le site est une page d\'agence logicielle générale sans mention de Genva.',
          'Langue : l\'interface n\'existe qu\'en anglais.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test repose sur la fiche App Store et le site du développeur, consultés le 24 octobre 2026. Il n\'a comporté ni utilisation pratique, ni benchmark, ni analyse du réseau.',
          },
        ],
      },
      overview: {
        id: 'what-is-genva',
        title: 'Qu\'est-ce qu\'Genva ?',
        content: [
          '**Selon sa fiche App Store, Genva est un générateur d\'images IA qui s\'exécute sur l\'iPhone ou l\'iPad lui-même plutôt que sur un serveur.** Vous décrivez une scène, un style ou une ambiance, choisissez un modèle orienté artistique, photoréaliste ou portrait, puis générez avec l\'Apple Neural Engine ; la fiche indique qu\'il n\'y a pas de file d\'attente cloud.',
          'L\'application est publiée par AppAxis Inc. dans les catégories Divertissement et Photo et vidéo. La fiche décrit trois tâches : texte vers image, image vers image (modifier le style, l\'éclairage ou la variante d\'une photo par prompt) et upscaling. Ce test ne couvre que l\'application iOS.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où le trouver',
        content: [
          '**Genva se télécharge comme n\'importe quelle app de l\'App Store : ouvrez la fiche, touchez Obtenir, puis téléchargez un modèle dans l\'application.** Aucune version Google Play, Mac ou web n\'a été trouvée.',
        ],
        columns: [
          'Plateforme',
          'Où le trouver',
        ],
        rows: [
          {
            Plateforme: 'iPhone et iPad',
            'Où le trouver': '[Genva sur l\'App Store](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918) (gratuit, iOS 17.0+, 37,5 Mo)',
          },
          {
            Plateforme: 'Site web',
            'Où le trouver': '[appaxis.ca](https://appaxis.ca) (site du développeur)',
          },
        ],
        note: 'Version testée : 1.0.0, publiée sur l\'App Store le 14 octobre 2026 (dernière mise à jour le même jour). Les modèles sont des téléchargements distincts dont la taille n\'est pas indiquée. Aucune page de politique de confidentialité n\'a été trouvée sur la fiche ni sur le site du développeur ; il n\'y a donc pas de ligne correspondante. Aucun terminal ni configuration technique n\'est nécessaire.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Offres et tarifs',
        content: [
          '**Genva est freemium : 3 générations gratuites par jour, puis un abonnement annuel ou un achat Lifetime unique débloque des générations illimitées sur l\'appareil.** La fiche n\'affiche aucun prix, donc aucun n\'est indiqué ici ; vérifiez l\'écran d\'achat intégré avant de payer.',
        ],
        columns: [
          'Offre',
          'Prix',
          'Contenu',
        ],
        rows: [
          {
            Offre: 'Gratuit',
            Prix: 'Gratuit',
            Contenu: '3 générations par jour',
          },
          {
            Offre: 'Abonnement annuel',
            Prix: 'Non indiqué',
            Contenu: 'Générations illimitées sur l\'appareil',
          },
          {
            Offre: 'Achat Lifetime',
            Prix: 'Non indiqué',
            Contenu: 'Illimité, paiement unique',
          },
        ],
        note: 'Selon la fiche, les abonnements se gèrent ou s\'annulent dans les réglages de l\'identifiant Apple. Les prix varient selon le store et n\'ont pas été relevés pour ce test.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctionnalités',
        content: [
          '**Genva propose trois modes de génération et des réglages de prompt, tous décrits dans sa fiche App Store.** Les éléments ci-dessous viennent de cette fiche ; aucun n\'a été testé.',
        ],
        items: [
          '**Texte vers image.** Décrivez une scène, un style ou une ambiance et générez-la sur l\'appareil.',
          '**Image vers image.** Modifiez le style, l\'éclairage ou la variante d\'une photo par prompt.',
          '**Upscaling.** Affinez une image et exportez-la en 1024 ou 2048.',
          '**Réglages.** Prompts négatifs, filtres et styles ; les résultats sont enregistrés dans une bibliothèque « Assets » de l\'application et dans Photos.',
          '**Modèles.** Vous choisissez entre des modèles orientés artistique, photoréaliste ou portrait et téléchargez chacun une fois ; la fiche ne les nomme pas.',
        ],
        note: 'La fiche ne mentionne ni génération vidéo, ni inpainting, ni API locale.',
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**L\'App Store affiche l\'étiquette de confidentialité « Données non collectées », qui est la déclaration du développeur à Apple.** La fiche précise aussi que les prompts restent sur le téléphone et que la génération n\'exige aucune file d\'attente cloud.',
          'Aucune page de politique de confidentialité n\'a été trouvée sur la fiche ni sur appaxis.ca, et la source des téléchargements de modèles n\'est pas indiquée. Selon la fiche, les achats sont facturés via votre identifiant Apple.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum n\'a pas inspecté le trafic réseau de l\'application ; les affirmations sur le traitement sur l\'appareil et l\'absence de collecte sont donc celles du développeur.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il convient',
        items: [
          '**Les propriétaires d\'iPhone qui veulent essayer la génération d\'images locale sans ordinateur.**',
          '**Les personnes qui veulent retoucher le style ou agrandir des photos sur l\'appareil.**',
          '**Les lecteurs qui préfèrent tester une offre gratuite avant de payer.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Traitement sur l\'appareil.** Que la génération reste réellement sur le téléphone, y compris pendant le téléchargement du modèle, n\'a pas été testé.',
          '**Modèles.** Ni nom, ni taille, ni licence, ni source ne sont indiqués ; la qualité des images et les droits d\'usage sont donc inconnus.',
          '**Prix.** Les prix de l\'abonnement et de l\'achat Lifetime n\'apparaissent pas sur la fiche.',
          '**Développeur.** Le site d\'AppAxis est une page d\'agence générique ; aucune politique, page d\'assistance ou page produit pour Genva n\'a été trouvée.',
          '**Qualité en pratique.** Vitesse, qualité d\'image, exigences de l\'appareil, consommation de batterie et chauffe n\'ont pas été testées.',
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
            Application: '[Draw Things](/fr/power-local-llm/draw-things-review)',
            Plateformes: 'iPhone, iPad, Mac',
            'Prix / licence': 'Freemium / code fermé',
            'Différence clé': 'L\'alternative la plus proche : génération d\'images locale native sur appareils Apple, avec calcul cloud optionnel',
          },
          {
            Application: '[DiffusionBee](/fr/power-local-llm/diffusionbee-review)',
            Plateformes: 'Mac',
            'Prix / licence': 'Gratuit / AGPL-3.0',
            'Différence clé': 'Application Mac packagée en un clic pour Stable Diffusion local ; pas de version iPhone',
          },
          {
            Application: '[Easy Diffusion](/fr/power-local-llm/easy-diffusion-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuit / licence personnalisée',
            'Différence clé': 'Installeur Stable Diffusion en un clic avec interface web, pour ordinateurs',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez prix, licence et plateformes actuels sur la page de chaque application. Contrairement à celles-ci, Genva est une nouvelle application 1.0.0 sans avis.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Genva a-t-elle besoin d\'une connexion internet ?',
            a: 'La fiche indique que les modèles sont téléchargés une fois puis utilisables hors ligne. Ce n\'a pas été testé, et la taille du téléchargement n\'est pas indiquée.',
          },
          {
            q: 'Genva peut-elle retoucher ou agrandir mes propres photos ?',
            a: 'Oui, selon la fiche : image vers image modifie ou décline une photo par prompt, et l\'upscaling exporte en 1024 ou 2048.',
          },
          {
            q: 'Quel iPhone faut-il pour Genva ?',
            a: 'La fiche ne cite que iOS 17.0 ou version ultérieure ; elle n\'indique ni RAM minimale, ni puce, ni espace libre : vérifiez votre stockage avant de télécharger un modèle.',
          },
          {
            q: 'Puis-je utiliser les images à titre commercial ?',
            a: 'La fiche ne dit rien des droits sur les images ni des licences des modèles ; les conditions sont donc inconnues. Lisez les conditions de l\'application avant tout usage commercial.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Genva est un nouveau générateur d\'images pour iPhone, gratuit à essayer, dont la fiche promet une génération sur l\'appareil, la retouche de photos et l\'upscaling. Ces affirmations n\'ont pas été testées ici, les modèles et les prix ne sont pas divulgués et l\'application n\'a pas d\'avis. Elle convient aux propriétaires d\'iPhone curieux prêts à essayer une version 1.0.0 ; qui a besoin d\'un historique documenté devrait commencer par [Draw Things](/fr/power-local-llm/draw-things-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Genva sur l\'App Store](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918) — description, version, date de sortie, taille, prérequis et étiquette de confidentialité, consultés le 24 octobre 2026.',
          '[AppAxis](https://appaxis.ca) — site du développeur, consulté le 24 octobre 2026.',
          '[Genva sur SiliconShelf](https://siliconshelf.app/apps/genva-ai-imagery-on-device/) — fiche d\'un annuaire tiers qui a fait apparaître l\'application ; ses étiquettes « sur l\'appareil » et « hors ligne » sont détectées automatiquement, non testées.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Test de Draw Things](/fr/power-local-llm/draw-things-review) — génération d\'images locale native pour iPhone, iPad et Mac.',
          '[Test de DiffusionBee](/fr/power-local-llm/diffusionbee-review) — une application Mac en un clic pour Stable Diffusion local.',
          '[Test d\'Easy Diffusion](/fr/power-local-llm/easy-diffusion-review) — un installeur Stable Diffusion en un clic avec interface web.',
          '[Génération d\'images IA locale ou cloud](/fr/power-local-llm/local-ai-image-generation-vs-cloud) — quand la génération locale l\'emporte sur un service cloud.',
          '[IA locale pour l\'image et la vidéo : comparatif](/fr/power-local-llm/local-llm-images-video-compared) — le comparatif de la catégorie.',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/genva-review-hero-ja.webp',
    title: 'Genvaレビュー：iPhoneで使える無料のオンデバイスAI画像生成アプリ',
    seoTitle: 'Genvaレビュー：iPhoneのオンデバイスAI画像生成',
    intro: 'Genvaは、AppAxis Inc.が提供するiPhone・iPad向けアプリです。App Storeの掲載情報によると、テキストや写真からデバイス上で画像を生成し、写真のスタイル変更や画像のアップスケールもでき、モデルは一度ダウンロードするとオフラインで使えます。このレビューは2026年10月24日に確認したApp Storeの掲載情報と開発元サイトに基づいており、PromptQuorumは実際には試していません。',
    metaDescription: 'Genvaレビュー：モデルを一度ダウンロードすればデバイス上で画像を生成できる無料のiPhone・iPadアプリ。機能、料金、プライバシー表示、未確認の点を解説。',
    twitterDescription: 'Genvaレビュー：デバイス上で動くiPhone・iPad向け画像生成アプリ。テキストから画像、写真のスタイル変更、アップスケール。掲載情報の内容と未確認の点。',
    audience: 'クラウドの待ち行列なしで画像を生成したいiPhone・iPadユーザーで、掲載情報が示す内容、開発元の主張にすぎない点、不明な点を知りたい方。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Genva レビュー',
    targetKeywords: [
      'genva レビュー',
      'genva ai imagery on device',
      'iphone ai画像生成 オフライン',
      'ios オンデバイス画像生成',
      'appaxis genva',
      'genva draw things 比較',
      'iphone テキストから画像 クラウド不要',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
    ],
    leadAnswerBlock: '**Genvaは、App Storeの掲載情報によると、一度ダウンロードしたモデルを使い、テキストや写真をデバイス上で画像に変える無料のiPhone・iPadアプリです。** 2026年10月14日にバージョン1.0.0として公開されたばかりで、評価も実績もまだありません。',
    quickAnswerTop: {
      ja: {
        question: 'GenvaはiPhoneで本当にオフラインで画像を生成できますか？',
        answer: 'App Storeの掲載情報では、モデルを一度ダウンロードした後はApple Neural Engineでデバイス上で生成され、プロンプトは端末内にとどまるとされています。PromptQuorumは検証しておらず、モデル名も明記されていません。',
        bullets: [
          '3つのモード：テキストから画像、画像から画像、1024または2048へのアップスケール。',
          '無料枠は1日3回で、無制限に使うには年間サブスクリプションか買い切りのLifetimeが必要。',
          'アプリのプライバシー表示は「データ収集なし」で、開発元自身の申告。',
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
        label: 'Genvaとは?',
        anchor: 'what-is-genva',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: 'プランと料金',
        anchor: 'plans-and-pricing',
      },
      {
        label: '機能',
        anchor: 'key-features',
      },
      {
        label: 'プライバシーとデータの流れ',
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
        label: '競合と代替アプリ',
        anchor: 'vs-alternatives',
      },
      {
        label: 'よくある質問',
        anchor: 'faq',
      },
      {
        label: '結論',
        anchor: 'verdict',
      },
      {
        label: '出典',
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
            text: 'Genvaは、ダウンロード型モデルを使ってデバイス上で画像の生成とアップスケールを行う、新しいiPhone・iPadアプリです。',
          },
          {
            type: 'plain-terms',
            text: '37.5 MBのアプリをインストールし、モデルを一度ダウンロードしたら、プロンプトを入力するか写真を選ぶだけです。掲載情報では、処理は端末上で行われ、クラウドの待ち行列はありません。',
          },
        ],
        items: [
          '対応環境：iPhoneとiPadのみ（iOS 17.0以降）。Android、Mac、ウェブ版は見つかりませんでした。',
          'バージョン：1.0.0、2026年10月14日公開で以降の更新はなし。掲載情報にはまだ評価がありません。',
          '開発元：AppAxis Inc.。サイトは一般的なソフトウェア会社のページで、Genvaの記載はありません。',
          '言語：インターフェースは英語のみです。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月24日に確認したApp Storeの掲載情報と開発元サイトに基づいています。実際の使用、ベンチマーク、ネットワーク解析は行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-genva',
        title: 'Genvaとは?',
        content: [
          '**App Storeの掲載情報によると、GenvaはサーバーではなくiPhoneやiPad自体で動作するAI画像生成アプリです。** 場面、スタイル、雰囲気を言葉で指定し、アート向け・フォトリアル向け・ポートレート向けのモデルを選んでApple Neural Engineで生成します。掲載情報では、クラウドの待ち行列はないとされています。',
          'アプリはAppAxis Inc.がエンタテインメントと写真/ビデオのカテゴリで公開しています。掲載情報が示す機能は3つで、テキストから画像、画像から画像（プロンプトで写真のスタイル・ライティングの変更やバリエーション作成）、アップスケールです。このレビューが扱うのはiOSアプリのみです。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**GenvaはApp Storeから通常どおりダウンロードできます。掲載ページを開き「入手」をタップして、アプリ内でモデルをダウンロードします。** Google Play、Mac、ウェブ版は見つかりませんでした。',
        ],
        columns: [
          'プラットフォーム',
          '入手先',
        ],
        rows: [
          {
            'プラットフォーム': 'iPhoneとiPad',
            '入手先': '[App StoreのGenva](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918)（無料、iOS 17.0以降、37.5 MB）',
          },
          {
            'プラットフォーム': 'ウェブサイト',
            '入手先': '[appaxis.ca](https://appaxis.ca)（開発元サイト）',
          },
        ],
        note: '確認したバージョン：1.0.0、2026年10月14日にApp Storeで公開（最終更新も同日）。モデルは別途ダウンロードで、サイズは明記されていません。掲載情報にも開発元サイトにもプライバシーポリシーのページは見つからなかったため、該当する行は設けていません。ターミナルや技術的な設定は不要です。',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'プランと料金',
        content: [
          '**Genvaはフリーミアムです。無料で1日3回まで生成でき、その後は年間サブスクリプションか買い切りのLifetimeで、デバイス上での生成が無制限になります。** 掲載情報には価格が表示されていないため、ここでは記載しません。支払う前にアプリ内の購入画面で確認してください。',
        ],
        columns: [
          'プラン',
          '価格',
          '含まれる内容',
        ],
        rows: [
          {
            'プラン': '無料',
            '価格': '無料',
            '含まれる内容': '1日3回まで生成',
          },
          {
            'プラン': '年間サブスクリプション',
            '価格': '記載なし',
            '含まれる内容': 'デバイス上で無制限に生成',
          },
          {
            'プラン': 'Lifetime（買い切り）',
            '価格': '記載なし',
            '含まれる内容': '無制限、一回払い',
          },
        ],
        note: '掲載情報によると、サブスクリプションはApple IDの設定で管理・解約できます。価格はストアごとに異なり、このレビューでは確認していません。',
      },
      features: {
        id: 'key-features',
        title: '機能',
        content: [
          '**Genvaには3つの生成モードとプロンプト設定があり、いずれもApp Storeの掲載情報に記載されています。** 以下は掲載情報に基づく内容で、どれも検証していません。',
        ],
        items: [
          '**テキストから画像。** 場面・スタイル・雰囲気を言葉で指定し、デバイス上で生成します。',
          '**画像から画像。** プロンプトで写真のスタイルやライティングを変えたり、バリエーションを作ったりします。',
          '**アップスケール。** 画像をシャープにし、1024または2048で書き出します。',
          '**設定。** ネガティブプロンプト、フィルター、スタイル。結果はアプリ内のAssetsライブラリと写真アプリに保存されます。',
          '**モデル。** アート向け、フォトリアル向け、ポートレート向けのモデルから選び、それぞれ一度ダウンロードします。掲載情報にモデル名はありません。',
        ],
        note: '掲載情報には、動画生成、インペインティング、ローカルAPIの記載はありません。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**App Storeには「データ収集なし」というプライバシー表示がありますが、これは開発元自身によるAppleへの申告です。** 掲載情報には、プロンプトは端末内にとどまり、生成にクラウドの待ち行列は不要とも書かれています。',
          '掲載情報にも appaxis.ca にもプライバシーポリシーのページは見つからず、モデルのダウンロード元も明記されていません。掲載情報によると、購入はApple IDで決済されます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorumはアプリの通信を調べていないため、デバイス上での処理とデータ非収集に関する記述は開発元の主張です。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**パソコンなしでローカル画像生成を試したいiPhoneユーザー。**',
          '**写真のスタイル変更やアップスケールを端末上で行いたい人。**',
          '**支払う前に無料枠で試したい人。**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**デバイス上での処理。** モデルのダウンロード中も含め、生成が本当に端末内にとどまるかは検証していません。',
          '**モデル。** モデル名、サイズ、ライセンス、入手元が明記されておらず、画質や利用権は不明です。',
          '**価格。** サブスクリプションとLifetimeの価格は掲載情報に表示されていません。',
          '**開発元。** AppAxisのサイトは一般的な会社ページで、ポリシー、サポートページ、Genvaの製品ページは見つかりませんでした。',
          '**実使用の品質。** 速度、画質、端末要件、バッテリー消費、発熱は検証していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: [
          'アプリ',
          'プラットフォーム',
          '価格 / ライセンス',
          '主な違い',
        ],
        rows: [
          {
            'アプリ': '[Draw Things](/ja/power-local-llm/draw-things-review)',
            'プラットフォーム': 'iPhone、iPad、Mac',
            '価格 / ライセンス': 'フリーミアム / クローズドソース',
            '主な違い': '最も近い代替アプリ。Apple製デバイスでネイティブにローカル画像生成でき、クラウド計算は任意',
          },
          {
            'アプリ': '[DiffusionBee](/ja/power-local-llm/diffusionbee-review)',
            'プラットフォーム': 'Mac',
            '価格 / ライセンス': '無料 / AGPL-3.0',
            '主な違い': 'ローカルのStable DiffusionをワンクリックでMacに導入できるアプリ。iPhone版なし',
          },
          {
            'アプリ': '[Easy Diffusion](/ja/power-local-llm/easy-diffusion-review)',
            'プラットフォーム': 'Windows、macOS、Linux',
            '価格 / ライセンス': '無料 / 独自ライセンス',
            '主な違い': 'ブラウザUI付きのStable Diffusionワンクリックインストーラー（パソコン向け）',
          },
        ],
        note: '競合の詳細は変わりやすいため、各アプリのページで最新の価格・ライセンス・対応プラットフォームを確認してください。これらと異なり、Genvaは評価のない新しい1.0.0のアプリです。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Genvaにはインターネット接続が必要ですか？',
            a: '掲載情報では、モデルは一度ダウンロードすればオフラインで使えるとされています。検証はしておらず、ダウンロードサイズも明記されていません。',
          },
          {
            q: '自分の写真のスタイル変更やアップスケールはできますか？',
            a: '掲載情報によるとできます。画像から画像でプロンプトによる写真のスタイル変更やバリエーション作成ができ、アップスケールは1024または2048で書き出します。',
          },
          {
            q: 'どのiPhoneが必要ですか？',
            a: '掲載情報にはiOS 17.0以降としか書かれておらず、最小RAM、チップ、空き容量の記載はありません。モデルをダウンロードする前に空き容量を確認してください。',
          },
          {
            q: '生成した画像は商用利用できますか？',
            a: '掲載情報には画像の権利やモデルのライセンスの記載がなく、条件は不明です。商用利用の前にアプリの利用規約を確認してください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: 'Genvaは、デバイス上での生成、写真のスタイル変更、アップスケールを掲げる、無料で試せる新しいiPhone向け画像生成アプリです。これらの主張はここでは検証しておらず、モデルや価格は公開されておらず、評価もありません。1.0.0版を気軽に試したい好奇心旺盛なiPhoneユーザー向けで、実績の記録が必要な方は[Draw Things](/ja/power-local-llm/draw-things-review)から始めるとよいでしょう。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[App StoreのGenva](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918) — 説明、バージョン、公開日、サイズ、要件、プライバシー表示。2026年10月24日確認。',
          '[AppAxis](https://appaxis.ca) — 開発元サイト。2026年10月24日確認。',
          '[SiliconShelfのGenva](https://siliconshelf.app/apps/genva-ai-imagery-on-device/) — このアプリを見つけるきっかけになった第三者ディレクトリの掲載。「オンデバイス」「オフライン」のタグは自動検出で、検証されていません。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Draw Thingsレビュー](/ja/power-local-llm/draw-things-review) — iPhone・iPad・Mac向けのネイティブなローカル画像生成アプリ。',
          '[DiffusionBeeレビュー](/ja/power-local-llm/diffusionbee-review) — ローカルのStable DiffusionをMacでワンクリック導入できるアプリ。',
          '[Easy Diffusionレビュー](/ja/power-local-llm/easy-diffusion-review) — ブラウザUI付きのStable Diffusionワンクリックインストーラー。',
          '[ローカルAI画像生成とクラウドの比較](/ja/power-local-llm/local-ai-image-generation-vs-cloud) — ローカル生成がクラウドサービスに勝る場面。',
          '[ローカルAIの画像・動画生成アプリ比較](/ja/power-local-llm/local-llm-images-video-compared) — カテゴリ全体の比較。',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/genva-review-hero-pt.webp',
    title: 'Análise do Genva: gerador de imagens com IA grátis para iPhone',
    seoTitle: 'Análise do Genva: gerador de imagens com IA no iPhone',
    intro: 'O Genva é um app para iPhone e iPad da AppAxis Inc. que, segundo sua página na App Store, gera imagens no próprio aparelho a partir de um texto ou de uma foto, muda o estilo de fotos e amplia imagens, com modelos que são baixados uma vez e depois funcionam offline. Esta análise reflete a página da App Store e o site do desenvolvedor, consultados em 24 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription: 'Análise do Genva: app grátis para iPhone e iPad que gera imagens no aparelho após um download. Recursos, preços, privacidade e o que não foi verificado.',
    twitterDescription: 'Análise do Genva: gerador de imagens para iPhone e iPad que roda no aparelho, com texto para imagem, mudança de estilo de fotos e upscale. O que a página afirma e o que segue não verificado.',
    audience: 'Quem tem iPhone ou iPad, quer gerar imagens sem fila na nuvem e precisa saber o que a página afirma, o que é apenas alegação do desenvolvedor e o que é desconhecido.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise Genva',
    targetKeywords: [
      'análise genva',
      'genva ai imagery on device',
      'gerador de imagens ia iphone offline',
      'geração de imagens no aparelho ios',
      'appaxis genva',
      'genva vs draw things',
      'app texto para imagem iphone sem nuvem',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
    ],
    leadAnswerBlock: '**O Genva é um app gratuito para iPhone e iPad que, segundo sua página na App Store, transforma textos e fotos em imagens no próprio aparelho, com modelos baixados uma vez.** Foi lançado como versão 1.0.0 em 14 de outubro de 2026, por isso ainda não tem avaliações nem histórico.',
    quickAnswerTop: {
      pt: {
        question: 'O Genva realmente gera imagens offline no iPhone?',
        answer: 'A página da App Store diz que a geração roda no aparelho com o Apple Neural Engine após um download único do modelo, e que os prompts ficam no celular. A PromptQuorum não testou isso, e os modelos não são nomeados.',
        bullets: [
          'Três modos: texto para imagem, imagem para imagem e upscale para 1024 ou 2048.',
          'Camada gratuita de 3 gerações por dia; o uso ilimitado exige assinatura anual ou compra Lifetime.',
          'Rótulo de privacidade: «Dados não coletados», declaração do próprio desenvolvedor.',
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
        label: 'O que é o Genva?',
        anchor: 'what-is-genva',
      },
      {
        label: 'Como obter',
        anchor: 'get-it',
      },
      {
        label: 'Planos e preços',
        anchor: 'plans-and-pricing',
      },
      {
        label: 'Recursos',
        anchor: 'key-features',
      },
      {
        label: 'Privacidade e fluxo de dados',
        anchor: 'privacy',
      },
      {
        label: 'Para quem é indicado',
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
        label: 'Veredito',
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
            text: 'O Genva é um app novo para iPhone e iPad que gera e amplia imagens no aparelho usando modelos baixáveis.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala o app de 37,5 MB, baixa um modelo uma vez e depois digita um prompt ou escolhe uma foto; segundo a página, o trabalho acontece no seu celular, sem fila na nuvem.',
          },
        ],
        items: [
          'Plataforma: somente iPhone e iPad com iOS 17.0 ou superior; não foi encontrada versão para Android, Mac ou web.',
          'Versão: 1.0.0, lançada em 14 de outubro de 2026 e sem atualizações desde então; a página ainda não mostra avaliações.',
          'Desenvolvedor: AppAxis Inc., cujo site é uma página genérica de agência de software sem nada sobre o Genva.',
          'Idioma: a interface está disponível apenas em inglês.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na página da App Store e no site do desenvolvedor, consultados em 24 de outubro de 2026. Não incluiu uso prático, benchmarks nem análise de rede.',
          },
        ],
      },
      overview: {
        id: 'what-is-genva',
        title: 'O que é o Genva?',
        content: [
          '**Segundo sua página na App Store, o Genva é um gerador de imagens com IA que roda no próprio iPhone ou iPad, e não em um servidor.** Você descreve uma cena, um estilo ou um clima, escolhe um modelo artístico, fotorrealista ou de retratos e gera com o Apple Neural Engine; a página diz que não há fila na nuvem.',
          'O app é publicado pela AppAxis Inc. nas categorias Entretenimento e Foto e vídeo. A página descreve três tarefas: texto para imagem, imagem para imagem (mudar o estilo, a iluminação ou criar uma variação de uma foto com um prompt) e upscale. Esta análise cobre apenas o app para iOS.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O Genva é um download comum da App Store: abra a página, toque em Obter e baixe um modelo dentro do app.** Não foi encontrada versão para Google Play, Mac ou web.',
        ],
        columns: [
          'Plataforma',
          'Onde obter',
        ],
        rows: [
          {
            Plataforma: 'iPhone e iPad',
            'Onde obter': '[Genva na App Store](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918) (grátis, iOS 17.0+, 37,5 MB)',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[appaxis.ca](https://appaxis.ca) (site do desenvolvedor)',
          },
        ],
        note: 'Versão analisada: 1.0.0, lançada na App Store em 14 de outubro de 2026 (última atualização no mesmo dia). Os modelos são downloads separados, com tamanho não informado. Nenhuma página de política de privacidade foi encontrada na página do app nem no site do desenvolvedor, por isso não há linha de política. Não é preciso terminal nem configuração técnica.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Planos e preços',
        content: [
          '**O Genva é freemium: 3 gerações grátis por dia; depois, uma assinatura anual ou uma compra Lifetime única libera gerações ilimitadas no aparelho.** A página não mostra preços, então nenhum é informado aqui; confira a tela de compras dentro do app antes de pagar.',
        ],
        columns: [
          'Plano',
          'Preço',
          'O que inclui',
        ],
        rows: [
          {
            Plano: 'Grátis',
            'Preço': 'Grátis',
            'O que inclui': '3 gerações por dia',
          },
          {
            Plano: 'Assinatura anual',
            'Preço': 'Não informado',
            'O que inclui': 'Gerações ilimitadas no aparelho',
          },
          {
            Plano: 'Compra Lifetime',
            'Preço': 'Não informado',
            'O que inclui': 'Ilimitado, pagamento único',
          },
        ],
        note: 'Segundo a página, as assinaturas são gerenciadas ou canceladas nos ajustes do ID Apple. Os preços variam conforme a loja e não foram consultados para esta análise.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos',
        content: [
          '**O Genva oferece três modos de geração e controles de prompt, todos descritos em sua página da App Store.** Os itens abaixo vêm dessa página; nenhum foi testado.',
        ],
        items: [
          '**Texto para imagem.** Descreva uma cena, um estilo ou um clima e gere no aparelho.',
          '**Imagem para imagem.** Mude o estilo, a iluminação ou crie uma variação de uma foto com um prompt.',
          '**Upscale.** Melhore a nitidez de uma imagem e exporte em 1024 ou 2048.',
          '**Controles.** Prompts negativos, filtros e estilos; os resultados são salvos em uma biblioteca «Assets» do app e em Fotos.',
          '**Modelos.** Você escolhe entre modelos artísticos, fotorrealistas ou de retratos e baixa cada um uma vez; a página não os nomeia.',
        ],
        note: 'A página não menciona geração de vídeo, inpainting nem API local.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**A App Store mostra o rótulo de privacidade «Dados não coletados», que é a declaração do próprio desenvolvedor à Apple.** A página também diz que os prompts ficam no celular e que a geração dispensa fila na nuvem.',
          'Nenhuma página de política de privacidade foi encontrada na página do app nem em appaxis.ca, e a origem dos downloads dos modelos não é informada. Segundo a página, as compras são cobradas pelo seu ID Apple.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A PromptQuorum não inspecionou o tráfego de rede do app, portanto as afirmações sobre processamento no aparelho e ausência de coleta são alegações do desenvolvedor.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Donos de iPhone que querem experimentar geração local de imagens sem computador.**',
          '**Pessoas que querem mudar o estilo ou ampliar fotos no aparelho.**',
          '**Leitores que preferem testar uma camada gratuita antes de pagar.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Processamento no aparelho.** Não foi testado se a geração realmente fica no celular, inclusive durante o download do modelo.',
          '**Modelos.** Nome, tamanho, licença e origem não são informados; a qualidade das imagens e os direitos de uso são desconhecidos.',
          '**Preços.** Os preços da assinatura e da compra Lifetime não aparecem na página.',
          '**Desenvolvedor.** O site da AppAxis é uma página genérica de agência; não foram encontradas política, página de suporte nem página de produto do Genva.',
          '**Qualidade na prática.** Velocidade, qualidade das imagens, requisitos do aparelho, consumo de bateria e aquecimento não foram testados.',
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
            App: '[Draw Things](/pt/power-local-llm/draw-things-review)',
            Plataformas: 'iPhone, iPad, Mac',
            'Preço / licença': 'Freemium / código fechado',
            'Diferença principal': 'A alternativa mais próxima: geração local nativa em aparelhos Apple, com computação em nuvem opcional',
          },
          {
            App: '[DiffusionBee](/pt/power-local-llm/diffusionbee-review)',
            Plataformas: 'Mac',
            'Preço / licença': 'Grátis / AGPL-3.0',
            'Diferença principal': 'App de Mac empacotado em um clique para Stable Diffusion local; sem versão para iPhone',
          },
          {
            App: '[Easy Diffusion](/pt/power-local-llm/easy-diffusion-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / licença própria',
            'Diferença principal': 'Instalador de Stable Diffusion em um clique com interface web, para computadores',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app. Ao contrário destes, o Genva é um app novo 1.0.0 sem avaliações.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Genva precisa de conexão com a internet?',
            a: 'A página diz que os modelos são baixados uma vez e depois podem ser usados offline. Isso não foi testado, e o tamanho do download não é informado.',
          },
          {
            q: 'O Genva pode mudar o estilo ou ampliar minhas próprias fotos?',
            a: 'Sim, segundo a página: imagem para imagem muda o estilo ou cria uma variação de uma foto com um prompt, e o upscale exporta em 1024 ou 2048.',
          },
          {
            q: 'Qual iPhone o Genva exige?',
            a: 'A página cita apenas iOS 17.0 ou superior; não informa RAM mínima, chip nem armazenamento livre, então confira seu espaço livre antes de baixar um modelo.',
          },
          {
            q: 'Posso usar as imagens comercialmente?',
            a: 'A página não diz nada sobre direitos das imagens nem licenças dos modelos, então os termos são desconhecidos; leia os termos do app antes de qualquer uso comercial.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O Genva é um gerador de imagens para iPhone novo e gratuito para testar, cuja página promete geração no aparelho, mudança de estilo de fotos e upscale. Essas afirmações não foram testadas aqui, os modelos e os preços não são divulgados e o app não tem avaliações. Serve a donos de iPhone curiosos que aceitam testar uma versão 1.0.0; quem precisa de um histórico documentado deve começar pelo [Draw Things](/pt/power-local-llm/draw-things-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Genva na App Store](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918) — descrição, versão, data de lançamento, tamanho, requisitos e rótulo de privacidade, consultados em 24 de outubro de 2026.',
          '[AppAxis](https://appaxis.ca) — site do desenvolvedor, consultado em 24 de outubro de 2026.',
          '[Genva no SiliconShelf](https://siliconshelf.app/apps/genva-ai-imagery-on-device/) — entrada de um diretório de terceiros em que o app apareceu; as tags «no aparelho» e «offline» são detectadas automaticamente, não testadas.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Draw Things](/pt/power-local-llm/draw-things-review) — geração local nativa de imagens para iPhone, iPad e Mac.',
          '[Análise do DiffusionBee](/pt/power-local-llm/diffusionbee-review) — um app de Mac em um clique para Stable Diffusion local.',
          '[Análise do Easy Diffusion](/pt/power-local-llm/easy-diffusion-review) — um instalador de Stable Diffusion em um clique com interface web.',
          '[Geração local de imagens com IA vs. nuvem](/pt/power-local-llm/local-ai-image-generation-vs-cloud) — quando a geração local vence um serviço na nuvem.',
          '[IA local para imagem e vídeo: comparativo](/pt/power-local-llm/local-llm-images-video-compared) — o comparativo da categoria.',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/genva-review-hero-ar.webp',
    title: 'مراجعة Genva: مولّد صور بالذكاء الاصطناعي مجاني يعمل على جهاز iPhone',
    seoTitle: 'مراجعة Genva: مولّد صور بالذكاء الاصطناعي على iPhone',
    intro: 'Genva تطبيق لأجهزة iPhone وiPad من AppAxis Inc. يولّد الصور على الجهاز نفسه من وصف نصي أو صورة، ويغيّر نمط الصور ويكبّرها، وذلك بحسب صفحته في App Store، باستخدام نماذج تُنزَّل مرة واحدة ثم تعمل دون اتصال. تستند هذه المراجعة إلى صفحة App Store وموقع المطوّر اللذين جرى الاطلاع عليهما في 24 أكتوبر 2026؛ ولم تجرّب PromptQuorum التطبيق عملياً.',
    metaDescription: 'مراجعة Genva: تطبيق مجاني لـ iPhone وiPad يولّد الصور على الجهاز بعد تنزيل النموذج مرة واحدة. الميزات والأسعار وملصق الخصوصية والادعاءات غير المتحقق منها.',
    twitterDescription: 'مراجعة Genva: مولّد صور لـ iPhone وiPad يعمل على الجهاز، مع تحويل النص إلى صورة وتغيير نمط الصور وتكبيرها. ما تذكره الصفحة وما لم يُتحقق منه.',
    audience: 'مستخدمو iPhone وiPad الراغبون في توليد الصور دون طابور سحابي، ويحتاجون إلى معرفة ما تذكره الصفحة وما هو مجرد ادعاء من المطوّر وما هو مجهول.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Genva',
    targetKeywords: [
      'مراجعة genva',
      'genva ai imagery on device',
      'مولد صور بالذكاء الاصطناعي iphone دون اتصال',
      'توليد الصور على الجهاز ios',
      'appaxis genva',
      'genva مقابل draw things',
      'تطبيق تحويل النص إلى صورة iphone دون سحابة',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
    ],
    leadAnswerBlock: '**Genva تطبيق مجاني لأجهزة iPhone وiPad يحوّل النصوص والصور إلى صور جديدة على الجهاز نفسه، بحسب صفحته في App Store، باستخدام نماذج تُنزَّل مرة واحدة.** صدر بالإصدار 1.0.0 في 14 أكتوبر 2026، فلا توجد له تقييمات ولا سجل استخدام بعد.',
    quickAnswerTop: {
      ar: {
        question: 'هل يولّد Genva الصور فعلاً دون اتصال على iPhone؟',
        answer: 'تذكر صفحة App Store أن التوليد يعمل على الجهاز عبر Apple Neural Engine بعد تنزيل النموذج مرة واحدة، وأن الأوامر النصية تبقى على الهاتف. لم تختبر PromptQuorum ذلك، ولا تُذكر أسماء النماذج.',
        bullets: [
          'ثلاثة أوضاع: النص إلى صورة، والصورة إلى صورة، والتكبير إلى 1024 أو 2048.',
          'مستوى مجاني بواقع 3 عمليات توليد يومياً؛ الاستخدام غير المحدود يتطلب اشتراكاً سنوياً أو شراء Lifetime لمرة واحدة.',
          'ملصق خصوصية التطبيق: «لا يتم جمع البيانات»، وهو إقرار من المطوّر نفسه.',
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
        label: 'ما هو Genva؟',
        anchor: 'what-is-genva',
      },
      {
        label: 'كيف تحصل عليه',
        anchor: 'get-it',
      },
      {
        label: 'الخطط والأسعار',
        anchor: 'plans-and-pricing',
      },
      {
        label: 'الميزات',
        anchor: 'key-features',
      },
      {
        label: 'الخصوصية وتدفق البيانات',
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
            text: 'Genva تطبيق جديد لـ iPhone وiPad يولّد الصور ويكبّرها على الجهاز باستخدام نماذج قابلة للتنزيل.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّت التطبيق (37.5 ميغابايت)، وتنزّل نموذجاً مرة واحدة، ثم تكتب وصفاً أو تختار صورة؛ وتقول الصفحة إن العمل يتم على هاتفك دون طابور سحابي.',
          },
        ],
        items: [
          'المنصة: iPhone وiPad فقط بنظام iOS 17.0 أو أحدث؛ لم يُعثر على إصدار لـ Android أو Mac أو الويب.',
          'الإصدار: 1.0.0، صدر في 14 أكتوبر 2026 ولم يُحدَّث منذ ذلك الحين؛ ولا تعرض الصفحة تقييمات بعد.',
          'المطوّر: AppAxis Inc.، وموقعه صفحة عامة لشركة برمجيات لا تذكر Genva.',
          'اللغة: الواجهة بالإنجليزية فقط.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة App Store وموقع المطوّر اللذين جرى الاطلاع عليهما في 24 أكتوبر 2026. ولم تشمل استخداماً عملياً أو اختبارات أداء أو تحليلاً لحركة الشبكة.',
          },
        ],
      },
      overview: {
        id: 'what-is-genva',
        title: 'ما هو Genva؟',
        content: [
          '**بحسب صفحته في App Store، Genva مولّد صور بالذكاء الاصطناعي يعمل على جهاز iPhone أو iPad نفسه بدلاً من خادم.** تصف مشهداً أو نمطاً أو أجواءً، وتختار نموذجاً فنياً أو واقعياً أو للصور الشخصية، ثم تولّد الصورة عبر Apple Neural Engine؛ وتذكر الصفحة أنه لا يوجد طابور سحابي.',
          'ينشر التطبيق AppAxis Inc. في فئتي الترفيه والصور والفيديو. وتصف الصفحة ثلاث مهام: النص إلى صورة، والصورة إلى صورة (تغيير نمط الصورة أو إضاءتها أو إنشاء نسخة منها بأمر نصي)، والتكبير. تتناول هذه المراجعة تطبيق iOS فقط.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**Genva تنزيل عادي من App Store: افتح الصفحة، واضغط «احصل»، ثم نزّل نموذجاً داخل التطبيق.** لم يُعثر على إصدار لـ Google Play أو Mac أو الويب.',
        ],
        columns: [
          'المنصة',
          'مكان الحصول عليه',
        ],
        rows: [
          {
            'المنصة': 'iPhone وiPad',
            'مكان الحصول عليه': '[Genva في App Store](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918) (مجاني، iOS 17.0 فأحدث، 37.5 ميغابايت)',
          },
          {
            'المنصة': 'الموقع الإلكتروني',
            'مكان الحصول عليه': '[appaxis.ca](https://appaxis.ca) (موقع المطوّر)',
          },
        ],
        note: 'الإصدار الذي روجع: 1.0.0، صدر في App Store بتاريخ 14 أكتوبر 2026 (وآخر تحديث في اليوم نفسه). النماذج تنزيلات منفصلة لم يُذكر حجمها. لم يُعثر على صفحة سياسة خصوصية في صفحة التطبيق ولا في موقع المطوّر، لذا لا يوجد صف للسياسة. لا حاجة إلى طرفية أو إعداد تقني.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'الخطط والأسعار',
        content: [
          '**Genva بنموذج فريميوم: 3 عمليات توليد مجانية يومياً، ثم يفتح اشتراك سنوي أو شراء Lifetime لمرة واحدة التوليد غير المحدود على الجهاز.** لا تعرض الصفحة أسعاراً، لذا لا نذكر أي سعر هنا؛ راجع شاشة الشراء داخل التطبيق قبل الدفع.',
        ],
        columns: [
          'الخطة',
          'السعر',
          'ما تشمله',
        ],
        rows: [
          {
            'الخطة': 'مجاني',
            'السعر': 'مجاناً',
            'ما تشمله': '3 عمليات توليد يومياً',
          },
          {
            'الخطة': 'اشتراك سنوي',
            'السعر': 'غير معروض',
            'ما تشمله': 'توليد غير محدود على الجهاز',
          },
          {
            'الخطة': 'شراء Lifetime',
            'السعر': 'غير معروض',
            'ما تشمله': 'غير محدود، دفعة واحدة',
          },
        ],
        note: 'بحسب الصفحة، تُدار الاشتراكات أو تُلغى من إعدادات Apple ID. تختلف الأسعار حسب المتجر ولم يُطّلع عليها في هذه المراجعة.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات',
        content: [
          '**يقدّم Genva ثلاثة أوضاع توليد وعناصر تحكم في الأوامر النصية، وكلها موصوفة في صفحته في App Store.** البنود أدناه مأخوذة من تلك الصفحة؛ ولم يُختبر أي منها.',
        ],
        items: [
          '**النص إلى صورة.** صف مشهداً أو نمطاً أو أجواءً وولّده على الجهاز.',
          '**الصورة إلى صورة.** غيّر نمط صورة أو إضاءتها أو أنشئ نسخة منها بأمر نصي.',
          '**التكبير.** حسّن حدة الصورة وصدّرها بدقة 1024 أو 2048.',
          '**عناصر التحكم.** أوامر نصية سلبية ومرشحات وأنماط؛ وتُحفظ النتائج في مكتبة Assets داخل التطبيق وفي تطبيق الصور.',
          '**النماذج.** تختار بين نماذج فنية أو واقعية أو للصور الشخصية وتنزّل كل نموذج مرة واحدة؛ ولا تذكر الصفحة أسماءها.',
        ],
        note: 'لا تذكر الصفحة توليد الفيديو أو الإكمال الداخلي للصور (inpainting) أو واجهة برمجية محلية.',
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**يعرض App Store ملصق الخصوصية «لا يتم جمع البيانات»، وهو إقرار من المطوّر نفسه لشركة Apple.** وتذكر الصفحة أيضاً أن الأوامر النصية تبقى على الهاتف وأن التوليد لا يحتاج إلى طابور سحابي.',
          'لم يُعثر على صفحة سياسة خصوصية في صفحة التطبيق ولا في appaxis.ca، ولم يُذكر مصدر تنزيل النماذج. وبحسب الصفحة، تُحاسَب المشتريات عبر Apple ID الخاص بك.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'لم تفحص PromptQuorum حركة الشبكة للتطبيق، لذا فإن ما يُقال عن المعالجة على الجهاز وعدم جمع البيانات هو ادعاء من المطوّر.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو iPhone الذين يريدون تجربة توليد الصور محلياً دون حاسوب.**',
          '**من يريدون تغيير نمط الصور أو تكبيرها على الجهاز.**',
          '**القرّاء الذين يفضّلون تجربة مستوى مجاني قبل الدفع.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**ادعاء المعالجة على الجهاز.** لم يُختبر ما إذا كان التوليد يبقى فعلاً على الهاتف، بما في ذلك أثناء تنزيل النموذج.',
          '**النماذج.** لا يُذكر اسم النموذج أو حجمه أو ترخيصه أو مصدره، لذا فجودة الصور وحقوق الاستخدام مجهولة.',
          '**الأسعار.** لا تظهر أسعار الاشتراك وشراء Lifetime في الصفحة.',
          '**المطوّر.** موقع AppAxis صفحة عامة لشركة؛ ولم يُعثر على سياسة أو صفحة دعم أو صفحة منتج خاصة بـ Genva.',
          '**الجودة عملياً.** لم تُختبر السرعة وجودة الصور ومتطلبات الجهاز واستهلاك البطارية والحرارة.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: [
          'التطبيق',
          'المنصات',
          'السعر / الترخيص',
          'الفرق الرئيسي',
        ],
        rows: [
          {
            'التطبيق': '[Draw Things](/ar/power-local-llm/draw-things-review)',
            'المنصات': 'iPhone وiPad وMac',
            'السعر / الترخيص': 'فريميوم / مغلق المصدر',
            'الفرق الرئيسي': 'أقرب بديل: توليد صور محلي أصلي على أجهزة Apple، مع حوسبة سحابية اختيارية',
          },
          {
            'التطبيق': '[DiffusionBee](/ar/power-local-llm/diffusionbee-review)',
            'المنصات': 'Mac',
            'السعر / الترخيص': 'مجاني / AGPL-3.0',
            'الفرق الرئيسي': 'تطبيق Mac جاهز بنقرة واحدة لـ Stable Diffusion محلياً؛ بلا إصدار لـ iPhone',
          },
          {
            'التطبيق': '[Easy Diffusion](/ar/power-local-llm/easy-diffusion-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الترخيص': 'مجاني / ترخيص خاص',
            'الفرق الرئيسي': 'مثبّت Stable Diffusion بنقرة واحدة مع واجهة متصفح، للحواسيب',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيراً؛ تأكد من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق. وعلى خلافها، Genva تطبيق جديد بالإصدار 1.0.0 بلا تقييمات.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يحتاج Genva إلى اتصال بالإنترنت؟',
            a: 'تذكر الصفحة أن النماذج تُنزَّل مرة واحدة ثم يمكن استخدامها دون اتصال. لم يُختبر ذلك، ولم يُذكر حجم التنزيل.',
          },
          {
            q: 'هل يستطيع Genva تغيير نمط صوري الخاصة أو تكبيرها؟',
            a: 'نعم بحسب الصفحة: الصورة إلى صورة تغيّر نمط الصورة أو تنشئ نسخة منها بأمر نصي، والتكبير يصدّر بدقة 1024 أو 2048.',
          },
          {
            q: 'أي iPhone يتطلبه Genva؟',
            a: 'تذكر الصفحة iOS 17.0 أو أحدث فقط؛ ولا تذكر حداً أدنى للذاكرة أو المعالج أو المساحة الحرة، فتحقق من المساحة الحرة قبل تنزيل نموذج.',
          },
          {
            q: 'هل يمكنني استخدام الصور تجارياً؟',
            a: 'لا تذكر الصفحة شيئاً عن حقوق الصور أو تراخيص النماذج، لذا فالشروط مجهولة؛ اقرأ شروط التطبيق قبل أي استخدام تجاري.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Genva مولّد صور جديد لـ iPhone يمكن تجربته مجاناً، وتعد صفحته بتوليد على الجهاز وتغيير نمط الصور وتكبيرها. لم تُختبر هذه الادعاءات هنا، والنماذج والأسعار غير معلنة، وليس للتطبيق تقييمات. يناسب مستخدمي iPhone الفضوليين الراغبين في تجربة إصدار 1.0.0؛ ومن يحتاج إلى سجل موثّق فليبدأ بـ [Draw Things](/ar/power-local-llm/draw-things-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Genva في App Store](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918) — الوصف والإصدار وتاريخ الصدور والحجم والمتطلبات وملصق الخصوصية، جرى الاطلاع عليها في 24 أكتوبر 2026.',
          '[AppAxis](https://appaxis.ca) — موقع المطوّر، جرى الاطلاع عليه في 24 أكتوبر 2026.',
          '[Genva على SiliconShelf](https://siliconshelf.app/apps/genva-ai-imagery-on-device/) — إدراج في دليل تابع لجهة خارجية ظهر فيه التطبيق؛ وسما «على الجهاز» و«دون اتصال» فيه مكتشفان تلقائياً ولم يُختبرا.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Draw Things](/ar/power-local-llm/draw-things-review) — توليد صور محلي أصلي لأجهزة iPhone وiPad وMac.',
          '[مراجعة DiffusionBee](/ar/power-local-llm/diffusionbee-review) — تطبيق Mac بنقرة واحدة لـ Stable Diffusion محلياً.',
          '[مراجعة Easy Diffusion](/ar/power-local-llm/easy-diffusion-review) — مثبّت Stable Diffusion بنقرة واحدة مع واجهة متصفح.',
          '[توليد الصور بالذكاء الاصطناعي محلياً مقابل السحابة](/ar/power-local-llm/local-ai-image-generation-vs-cloud) — متى يتفوق التوليد المحلي على الخدمة السحابية.',
          '[مقارنة تطبيقات الصور والفيديو بالذكاء الاصطناعي المحلي](/ar/power-local-llm/local-llm-images-video-compared) — المقارنة الشاملة للفئة.',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/genva-review-hero-zh.webp',
    title: 'Genva 评测：适用于 iPhone 的免费设备端 AI 图像生成应用',
    seoTitle: 'Genva 评测：iPhone 设备端 AI 图像生成应用',
    intro: 'Genva 是 AppAxis Inc. 推出的 iPhone 和 iPad 应用。根据其 App Store 页面，它可以在设备上根据文字提示或照片生成图像、改变照片风格并放大图片，模型只需下载一次，之后即可离线使用。本评测基于 2026 年 10 月 24 日查看的 App Store 页面和开发者网站，PromptQuorum 没有实际试用该应用。',
    metaDescription: 'Genva 评测：一次性下载模型后即可在设备上生成图像的免费 iPhone 和 iPad 应用。功能、价格、隐私标签，以及哪些说法未经验证。',
    twitterDescription: 'Genva 评测：在设备上运行的 iPhone 和 iPad 图像生成应用，支持文生图、照片风格转换和放大。App Store 页面的说法与未经验证之处。',
    audience: '希望不经云端排队就生成图像的 iPhone 和 iPad 用户，他们需要了解页面写了什么、哪些只是开发者的说法、哪些尚不清楚。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Genva 评测',
    targetKeywords: [
      'genva 评测',
      'genva ai imagery on device',
      'iphone ai 图像生成 离线',
      'ios 设备端图像生成',
      'appaxis genva',
      'genva 对比 draw things',
      'iphone 文生图 应用 无需云端',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
    ],
    leadAnswerBlock: '**Genva 是一款免费的 iPhone 和 iPad 应用，根据其 App Store 页面，它使用只需下载一次的模型，在设备上把文字和照片变成图像。** 它于 2026 年 10 月 14 日以 1.0.0 版本发布，目前还没有评分，也没有使用记录。',
    quickAnswerTop: {
      zh: {
        question: 'Genva 真的能在 iPhone 上离线生成图像吗？',
        answer: 'App Store 页面称，一次性下载模型后，生成会借助 Apple Neural Engine 在设备上运行，提示词保留在手机上。PromptQuorum 没有测试这一点，页面也没有说明具体使用哪些模型。',
        bullets: [
          '三种模式：文生图、图生图，以及放大到 1024 或 2048。',
          '免费额度为每天 3 次生成；无限使用需要年度订阅或一次性买断的 Lifetime。',
          '应用隐私标签为“未收集数据”，这是开发者自己的声明。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '快速解答',
        anchor: 'quick-answer',
      },
      {
        label: 'Genva 是什么？',
        anchor: 'what-is-genva',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '套餐与价格',
        anchor: 'plans-and-pricing',
      },
      {
        label: '功能',
        anchor: 'key-features',
      },
      {
        label: '隐私与数据流向',
        anchor: 'privacy',
      },
      {
        label: '适合哪些人使用',
        anchor: 'who-should-use',
      },
      {
        label: '我们无法核实的内容',
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
        label: '延伸阅读',
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
            text: 'Genva 是一款新的 iPhone 和 iPad 应用，使用可下载的模型在设备上生成并放大图像。',
          },
          {
            type: 'plain-terms',
            text: '安装 37.5 MB 的应用，下载一次模型，然后输入提示词或选一张照片；根据页面，处理在你的手机上完成，没有云端排队。',
          },
        ],
        items: [
          '平台：仅限 iPhone 和 iPad，需 iOS 17.0 或更高版本；未发现 Android、Mac 或网页版。',
          '版本：1.0.0，2026 年 10 月 14 日发布，此后未更新；页面暂无评分。',
          '开发者：AppAxis Inc.，其网站是一个通用的软件公司页面，没有提到 Genva。',
          '语言：界面仅提供英文。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026 年 10 月 24 日查看的 App Store 页面和开发者网站，未进行实际使用、基准测试或网络分析。',
          },
        ],
      },
      overview: {
        id: 'what-is-genva',
        title: 'Genva 是什么？',
        content: [
          '**根据 App Store 页面，Genva 是一款直接在 iPhone 或 iPad 上运行、而不是在服务器上运行的 AI 图像生成应用。** 你描述场景、风格或氛围，选择偏艺术、写实或人像的模型，再用 Apple Neural Engine 生成；页面称没有云端排队。',
          '该应用由 AppAxis Inc. 发布，分类为娱乐和摄影与录像。页面描述了三项功能：文生图、图生图（用提示词改变照片的风格、光线或生成变体）和放大。本评测只涉及 iOS 应用。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Genva 是普通的 App Store 下载：打开页面，点按“获取”，再在应用内下载模型。** 未发现 Google Play、Mac 或网页版。',
        ],
        columns: [
          '平台',
          '获取方式',
        ],
        rows: [
          {
            '平台': 'iPhone 和 iPad',
            '获取方式': '[App Store 上的 Genva](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918)（免费，iOS 17.0 及以上，37.5 MB）',
          },
          {
            '平台': '网站',
            '获取方式': '[appaxis.ca](https://appaxis.ca)（开发者网站）',
          },
        ],
        note: '评测版本：1.0.0，2026 年 10 月 14 日在 App Store 发布（最近一次更新也在同一天）。模型需单独下载，大小未说明。在 App Store 页面和开发者网站上都没有找到隐私政策页面，因此没有相应一行。无需终端或技术设置。',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: '套餐与价格',
        content: [
          '**Genva 采用免费增值模式：每天 3 次免费生成，之后年度订阅或一次性买断的 Lifetime 可解锁无限次设备端生成。** 页面未显示价格，因此此处不列出；付款前请查看应用内购买界面。',
        ],
        columns: [
          '套餐',
          '价格',
          '包含内容',
        ],
        rows: [
          {
            '套餐': '免费',
            '价格': '免费',
            '包含内容': '每天 3 次生成',
          },
          {
            '套餐': '年度订阅',
            '价格': '未显示',
            '包含内容': '无限次设备端生成',
          },
          {
            '套餐': 'Lifetime 买断',
            '价格': '未显示',
            '包含内容': '无限次，一次性付费',
          },
        ],
        note: '根据页面，订阅可在 Apple ID 设置中管理或取消。价格因商店而异，本评测未查看。',
      },
      features: {
        id: 'key-features',
        title: '功能',
        content: [
          '**Genva 提供三种生成模式和提示词控制，均在其 App Store 页面中说明。** 以下内容来自该页面，均未经测试。',
        ],
        items: [
          '**文生图。** 描述场景、风格或氛围，在设备上生成。',
          '**图生图。** 用提示词改变照片的风格、光线，或生成变体。',
          '**放大。** 让图片更清晰，并以 1024 或 2048 导出。',
          '**控制项。** 负面提示词、滤镜和风格；结果保存到应用内的 Assets 资料库和“照片”。',
          '**模型。** 可在偏艺术、写实或人像的模型之间选择，每个只需下载一次；页面没有给出模型名称。',
        ],
        note: '页面没有提到视频生成、局部重绘或本地 API。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**App Store 显示“未收集数据”的隐私标签，这是开发者向 Apple 作出的声明。** 页面还称提示词保留在手机上，生成不需要云端排队。',
          '在 App Store 页面和 appaxis.ca 上都没有找到隐私政策页面，模型下载的来源也未说明。根据页面，购买通过你的 Apple ID 结算。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum 没有检查该应用的网络流量，因此关于设备端处理和不收集数据的说法属于开发者的声明。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人使用',
        items: [
          '**想不用电脑就体验本地图像生成的 iPhone 用户。**',
          '**想在设备上改变照片风格或放大照片的人。**',
          '**希望先用免费额度试用再决定付费的读者。**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**设备端说法。** 生成（包括模型下载期间）是否真的只在手机上进行，未经测试。',
          '**模型。** 没有说明模型名称、大小、许可证或来源，因此画质和使用权限不明。',
          '**价格。** 订阅和 Lifetime 的价格没有出现在页面上。',
          '**开发者。** AppAxis 的网站是通用的公司页面；没有找到 Genva 的政策、支持页面或产品页面。',
          '**实际表现。** 速度、画质、设备要求、耗电和发热均未测试。',
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
            '应用': '[Draw Things](/zh/power-local-llm/draw-things-review)',
            '平台': 'iPhone、iPad、Mac',
            '价格 / 许可证': '免费增值 / 闭源',
            '主要区别': '最接近的替代品：在 Apple 设备上原生本地生成图像，可选云端算力',
          },
          {
            '应用': '[DiffusionBee](/zh/power-local-llm/diffusionbee-review)',
            '平台': 'Mac',
            '价格 / 许可证': '免费 / AGPL-3.0',
            '主要区别': '一键安装的本地 Stable Diffusion Mac 应用；没有 iPhone 版',
          },
          {
            '应用': '[Easy Diffusion](/zh/power-local-llm/easy-diffusion-review)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费 / 自定义许可证',
            '主要区别': '带浏览器界面的 Stable Diffusion 一键安装程序，面向电脑',
          },
        ],
        note: '竞品信息变化较快，请在各应用页面确认最新的价格、许可证和平台。与它们不同，Genva 是一款尚无评分的新 1.0.0 应用。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Genva 需要联网吗？',
            a: '页面称模型只需下载一次，之后可离线使用。这一点未经测试，下载大小也未说明。',
          },
          {
            q: 'Genva 能改变或放大我自己的照片吗？',
            a: '根据页面可以：图生图可用提示词改变照片风格或生成变体，放大功能可导出 1024 或 2048。',
          },
          {
            q: 'Genva 需要什么型号的 iPhone？',
            a: '页面只写了 iOS 17.0 或更高版本，没有说明最低内存、芯片或可用存储空间，因此下载模型前请先检查剩余空间。',
          },
          {
            q: '生成的图像可以商用吗？',
            a: '页面没有提到图像权利或模型许可证，因此条款不明；商用前请先阅读应用的使用条款。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Genva 是一款新的、可免费试用的 iPhone 图像生成应用，页面承诺设备端生成、照片风格转换和放大。这些说法在此未经测试，模型和价格未公开，应用也没有评分。它适合愿意尝试 1.0.0 版本的好奇的 iPhone 用户；需要有据可查的使用记录的人，建议先看 [Draw Things](/zh/power-local-llm/draw-things-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[App Store 上的 Genva](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918) — 说明、版本、发布日期、大小、要求和隐私标签，2026 年 10 月 24 日查看。',
          '[AppAxis](https://appaxis.ca) — 开发者网站，2026 年 10 月 24 日查看。',
          '[SiliconShelf 上的 Genva](https://siliconshelf.app/apps/genva-ai-imagery-on-device/) — 发现该应用的第三方目录条目；其“设备端”和“离线”标签为自动检测，未经测试。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[Draw Things 评测](/zh/power-local-llm/draw-things-review) — 面向 iPhone、iPad 和 Mac 的原生本地图像生成应用。',
          '[DiffusionBee 评测](/zh/power-local-llm/diffusionbee-review) — 一键安装的本地 Stable Diffusion Mac 应用。',
          '[Easy Diffusion 评测](/zh/power-local-llm/easy-diffusion-review) — 带浏览器界面的 Stable Diffusion 一键安装程序。',
          '[本地 AI 图像生成与云端对比](/zh/power-local-llm/local-ai-image-generation-vs-cloud) — 本地生成何时胜过云服务。',
          '[本地 AI 图像与视频生成应用对比](/zh/power-local-llm/local-llm-images-video-compared) — 本类别的整体对比。',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/genva-review-hero-ko.webp',
    title: 'Genva 리뷰: iPhone에서 쓰는 무료 온디바이스 AI 이미지 생성 앱',
    seoTitle: 'Genva 리뷰: iPhone 온디바이스 AI 이미지 생성 앱',
    intro: 'Genva는 AppAxis Inc.의 iPhone·iPad 앱입니다. App Store 페이지에 따르면 텍스트나 사진으로 기기에서 직접 이미지를 생성하고, 사진 스타일을 바꾸고, 이미지를 업스케일하며, 모델은 한 번 내려받으면 오프라인에서 쓸 수 있습니다. 이 리뷰는 2026년 10월 24일에 확인한 App Store 페이지와 개발사 웹사이트를 바탕으로 하며, PromptQuorum은 앱을 직접 써 보지 않았습니다.',
    metaDescription: 'Genva 리뷰: 모델을 한 번 내려받으면 기기에서 이미지를 생성하는 무료 iPhone·iPad 앱. 기능, 가격, 개인정보 라벨과 확인되지 않은 주장을 정리했습니다.',
    twitterDescription: 'Genva 리뷰: 기기에서 작동하는 iPhone·iPad 이미지 생성 앱. 텍스트→이미지, 사진 스타일 변환, 업스케일. 페이지가 밝힌 내용과 확인되지 않은 부분.',
    audience: '클라우드 대기열 없이 이미지를 생성하고 싶은 iPhone·iPad 사용자로, 페이지가 밝힌 내용, 개발사의 주장에 불과한 부분, 알 수 없는 부분을 알아야 하는 분.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Genva 리뷰',
    targetKeywords: [
      'genva 리뷰',
      'genva ai imagery on device',
      'iphone ai 이미지 생성 오프라인',
      'ios 온디바이스 이미지 생성',
      'appaxis genva',
      'genva draw things 비교',
      'iphone 텍스트 이미지 변환 앱 클라우드 없이',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
    ],
    leadAnswerBlock: '**Genva는 App Store 페이지에 따르면 한 번 내려받은 모델로 텍스트와 사진을 기기에서 이미지로 바꿔 주는 무료 iPhone·iPad 앱입니다.** 2026년 10월 14일 버전 1.0.0으로 출시되어 아직 평점도 이용 기록도 없습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Genva는 정말 iPhone에서 오프라인으로 이미지를 생성할까요?',
        answer: 'App Store 페이지는 모델을 한 번 내려받은 뒤에는 Apple Neural Engine으로 기기에서 생성하며 프롬프트가 휴대폰에 남는다고 설명합니다. PromptQuorum은 이를 테스트하지 않았고, 모델 이름도 밝혀져 있지 않습니다.',
        bullets: [
          '세 가지 모드: 텍스트→이미지, 이미지→이미지, 1024 또는 2048로 업스케일.',
          '무료는 하루 3회 생성이며, 무제한 사용에는 연간 구독 또는 일회성 Lifetime 구매가 필요합니다.',
          '앱 개인정보 라벨은 "데이터 수집 안 함"이며, 개발사 스스로의 신고입니다.',
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
        label: 'Genva란 무엇인가?',
        anchor: 'what-is-genva',
      },
      {
        label: '어디서 받나요?',
        anchor: 'get-it',
      },
      {
        label: '요금제와 가격',
        anchor: 'plans-and-pricing',
      },
      {
        label: '기능',
        anchor: 'key-features',
      },
      {
        label: '개인정보와 데이터 흐름',
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
        label: '경쟁 앱과 대안',
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
        label: '관련 읽을거리',
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
            text: 'Genva는 내려받은 모델로 기기에서 이미지를 생성하고 업스케일하는 새로운 iPhone·iPad 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '37.5 MB 앱을 설치하고 모델을 한 번 내려받은 뒤 프롬프트를 입력하거나 사진을 고르면 됩니다. 페이지에 따르면 작업은 휴대폰에서 이루어지며 클라우드 대기열이 없습니다.',
          },
        ],
        items: [
          '플랫폼: iPhone과 iPad 전용(iOS 17.0 이상). Android, Mac, 웹 버전은 찾지 못했습니다.',
          '버전: 1.0.0, 2026년 10월 14일 출시 후 업데이트 없음. 페이지에는 아직 평점이 없습니다.',
          '개발사: AppAxis Inc. 웹사이트는 일반적인 소프트웨어 회사 페이지로 Genva 언급이 없습니다.',
          '언어: 인터페이스는 영어만 지원합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 24일에 확인한 App Store 페이지와 개발사 웹사이트를 바탕으로 합니다. 직접 사용, 벤치마크, 네트워크 분석은 하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-genva',
        title: 'Genva란 무엇인가?',
        content: [
          '**App Store 페이지에 따르면 Genva는 서버가 아니라 iPhone이나 iPad 자체에서 실행되는 AI 이미지 생성 앱입니다.** 장면, 스타일, 분위기를 설명하고 예술용·사실적 이미지용·인물용 모델 중에서 골라 Apple Neural Engine으로 생성합니다. 페이지는 클라우드 대기열이 없다고 밝힙니다.',
          '앱은 AppAxis Inc.가 엔터테인먼트와 사진 및 비디오 카테고리로 배포합니다. 페이지가 설명하는 기능은 세 가지로, 텍스트→이미지, 이미지→이미지(프롬프트로 사진의 스타일·조명을 바꾸거나 변형 만들기), 업스케일입니다. 이 리뷰는 iOS 앱만 다룹니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**Genva는 일반적인 App Store 다운로드입니다. 페이지를 열고 받기를 누른 뒤 앱 안에서 모델을 내려받습니다.** Google Play, Mac, 웹 버전은 찾지 못했습니다.',
        ],
        columns: [
          '플랫폼',
          '받는 곳',
        ],
        rows: [
          {
            '플랫폼': 'iPhone 및 iPad',
            '받는 곳': '[App Store의 Genva](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918) (무료, iOS 17.0 이상, 37.5 MB)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[appaxis.ca](https://appaxis.ca) (개발사 사이트)',
          },
        ],
        note: '확인한 버전: 1.0.0, 2026년 10월 14일 App Store 출시(마지막 업데이트도 같은 날). 모델은 별도 다운로드이며 크기는 밝혀져 있지 않습니다. App Store 페이지와 개발사 사이트 어디에서도 개인정보 처리방침 페이지를 찾지 못해 해당 행은 두지 않았습니다. 터미널이나 기술적 설정은 필요 없습니다.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: '요금제와 가격',
        content: [
          '**Genva는 프리미엄 모델입니다. 하루 3회는 무료로 생성할 수 있고, 이후에는 연간 구독 또는 일회성 Lifetime 구매로 기기에서 무제한 생성을 쓸 수 있습니다.** 페이지에 가격이 표시되어 있지 않아 여기에는 적지 않습니다. 결제 전에 앱 내 구매 화면을 확인하세요.',
        ],
        columns: [
          '요금제',
          '가격',
          '포함 내용',
        ],
        rows: [
          {
            '요금제': '무료',
            '가격': '무료',
            '포함 내용': '하루 3회 생성',
          },
          {
            '요금제': '연간 구독',
            '가격': '표시 없음',
            '포함 내용': '기기에서 무제한 생성',
          },
          {
            '요금제': 'Lifetime 구매',
            '가격': '표시 없음',
            '포함 내용': '무제한, 일회성 결제',
          },
        ],
        note: '페이지에 따르면 구독은 Apple ID 설정에서 관리하거나 해지할 수 있습니다. 가격은 스토어마다 다르며 이 리뷰에서는 확인하지 않았습니다.',
      },
      features: {
        id: 'key-features',
        title: '기능',
        content: [
          '**Genva는 세 가지 생성 모드와 프롬프트 설정을 제공하며, 모두 App Store 페이지에 설명되어 있습니다.** 아래 내용은 해당 페이지에서 가져왔으며 어느 것도 테스트하지 않았습니다.',
        ],
        items: [
          '**텍스트→이미지.** 장면, 스타일, 분위기를 설명하면 기기에서 생성합니다.',
          '**이미지→이미지.** 프롬프트로 사진의 스타일·조명을 바꾸거나 변형을 만듭니다.',
          '**업스케일.** 이미지를 선명하게 하고 1024 또는 2048로 내보냅니다.',
          '**설정.** 네거티브 프롬프트, 필터, 스타일. 결과는 앱 내 Assets 라이브러리와 사진 앱에 저장됩니다.',
          '**모델.** 예술용·사실적 이미지용·인물용 모델 중에서 고르고 각각 한 번씩 내려받습니다. 페이지에 모델 이름은 없습니다.',
        ],
        note: '페이지에는 동영상 생성, 인페인팅, 로컬 API에 대한 언급이 없습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 데이터 흐름',
        content: [
          '**App Store에는 "데이터 수집 안 함" 개인정보 라벨이 표시되는데, 이는 개발사가 Apple에 한 신고입니다.** 페이지는 프롬프트가 휴대폰에 남고 생성에 클라우드 대기열이 필요 없다고도 밝힙니다.',
          'App Store 페이지와 appaxis.ca 어디에서도 개인정보 처리방침 페이지를 찾지 못했고, 모델 다운로드 출처도 밝혀져 있지 않습니다. 페이지에 따르면 구매는 Apple ID로 결제됩니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum은 앱의 네트워크 트래픽을 검사하지 않았으므로, 기기 내 처리와 데이터 비수집에 관한 설명은 개발사의 주장입니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**컴퓨터 없이 로컬 이미지 생성을 체험해 보고 싶은 iPhone 사용자.**',
          '**기기에서 사진 스타일을 바꾸거나 업스케일하고 싶은 사람.**',
          '**결제 전에 무료 구간으로 먼저 써 보고 싶은 독자.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**기기 내 처리 주장.** 모델 다운로드 중을 포함해 생성이 정말 휴대폰에만 머무는지는 테스트하지 않았습니다.',
          '**모델.** 모델 이름, 크기, 라이선스, 출처가 밝혀져 있지 않아 이미지 품질과 사용 권리를 알 수 없습니다.',
          '**가격.** 구독과 Lifetime 가격이 페이지에 나와 있지 않습니다.',
          '**개발사.** AppAxis 웹사이트는 일반 회사 페이지이며, Genva의 정책·지원·제품 페이지는 찾지 못했습니다.',
          '**실사용 품질.** 속도, 이미지 품질, 기기 요건, 배터리 사용량, 발열은 테스트하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: [
          '앱',
          '플랫폼',
          '가격 / 라이선스',
          '핵심 차이',
        ],
        rows: [
          {
            '앱': '[Draw Things](/ko/power-local-llm/draw-things-review)',
            '플랫폼': 'iPhone, iPad, Mac',
            '가격 / 라이선스': '프리미엄 / 비공개 소스',
            '핵심 차이': '가장 가까운 대안: Apple 기기에서 네이티브로 로컬 이미지 생성, 클라우드 연산은 선택',
          },
          {
            '앱': '[DiffusionBee](/ko/power-local-llm/diffusionbee-review)',
            '플랫폼': 'Mac',
            '가격 / 라이선스': '무료 / AGPL-3.0',
            '핵심 차이': '원클릭으로 설치하는 로컬 Stable Diffusion Mac 앱. iPhone 버전 없음',
          },
          {
            '앱': '[Easy Diffusion](/ko/power-local-llm/easy-diffusion-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / 자체 라이선스',
            '핵심 차이': '브라우저 UI가 있는 Stable Diffusion 원클릭 설치 프로그램(컴퓨터용)',
          },
        ],
        note: '경쟁 앱의 세부 사항은 자주 바뀌므로 각 앱 페이지에서 최신 가격, 라이선스, 플랫폼을 확인하세요. 이들과 달리 Genva는 아직 평점이 없는 새로운 1.0.0 앱입니다.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Genva에는 인터넷 연결이 필요한가요?',
            a: '페이지는 모델을 한 번 내려받으면 오프라인에서 쓸 수 있다고 밝힙니다. 테스트하지 않았으며 다운로드 크기도 밝혀져 있지 않습니다.',
          },
          {
            q: '내 사진의 스타일을 바꾸거나 업스케일할 수 있나요?',
            a: '페이지에 따르면 가능합니다. 이미지→이미지는 프롬프트로 사진 스타일을 바꾸거나 변형을 만들고, 업스케일은 1024 또는 2048로 내보냅니다.',
          },
          {
            q: '어떤 iPhone이 필요한가요?',
            a: '페이지에는 iOS 17.0 이상만 적혀 있고 최소 RAM, 칩, 여유 저장 공간은 없습니다. 모델을 내려받기 전에 여유 공간을 확인하세요.',
          },
          {
            q: '생성한 이미지를 상업적으로 써도 되나요?',
            a: '페이지에는 이미지 권리나 모델 라이선스에 대한 언급이 없어 조건을 알 수 없습니다. 상업적 사용 전에 앱의 이용 약관을 읽어 보세요.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'Genva는 기기 내 생성, 사진 스타일 변환, 업스케일을 내세우는 새로운 무료 체험형 iPhone 이미지 생성 앱입니다. 이 주장들은 여기서 테스트하지 않았고, 모델과 가격은 공개되지 않았으며, 평점도 없습니다. 1.0.0 버전을 가볍게 써 보고 싶은 호기심 많은 iPhone 사용자에게 어울리며, 검증된 이용 기록이 필요하다면 [Draw Things](/ko/power-local-llm/draw-things-review)부터 시작하는 것이 좋습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 Genva](https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918) — 설명, 버전, 출시일, 크기, 요건, 개인정보 라벨. 2026년 10월 24일 확인.',
          '[AppAxis](https://appaxis.ca) — 개발사 웹사이트. 2026년 10월 24일 확인.',
          '[SiliconShelf의 Genva](https://siliconshelf.app/apps/genva-ai-imagery-on-device/) — 이 앱을 발견하게 된 제3자 디렉터리 항목. "온디바이스"·"오프라인" 태그는 자동 감지된 것으로 테스트되지 않았습니다.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Draw Things 리뷰](/ko/power-local-llm/draw-things-review) — iPhone, iPad, Mac용 네이티브 로컬 이미지 생성 앱.',
          '[DiffusionBee 리뷰](/ko/power-local-llm/diffusionbee-review) — 로컬 Stable Diffusion을 원클릭으로 쓰는 Mac 앱.',
          '[Easy Diffusion 리뷰](/ko/power-local-llm/easy-diffusion-review) — 브라우저 UI가 있는 Stable Diffusion 원클릭 설치 프로그램.',
          '[로컬 AI 이미지 생성 vs 클라우드](/ko/power-local-llm/local-ai-image-generation-vs-cloud) — 로컬 생성이 클라우드 서비스를 앞서는 경우.',
          '[로컬 AI 이미지·동영상 생성 앱 비교](/ko/power-local-llm/local-llm-images-video-compared) — 카테고리 전체 비교.',
        ],
      },
    },
  },
}

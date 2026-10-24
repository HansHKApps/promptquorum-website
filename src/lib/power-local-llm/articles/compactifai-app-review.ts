// CompactifAI APP Review: Free Chat App with Offline and Cloud Models (Multiverse Computing)
// Slug: compactifai-app-review
// Companion to: lm-mini-review, pocketpal-ai-review, private-mind-review, enchanted-review, best-local-llm-apps-iphone-2026
// Sources (all read 2026-10-24, no hands-on use, app not installed): App Store listing id6749544702 (raw HTML + iTunes lookup API: v2.10.0 released
// 2026-09-08, first release 2026-03-02, iOS/iPadOS 16.4+, 84.1 MB, English only, privacy label "Data Not Collected", no ratings), Google Play listing
// com.multiversecomputing.compactifaizoo (v2.10.4, "Updated on Sep 11, 2026", 5K+ downloads) and its data-safety page, multiversecomputing.com/compactifai-app,
// the maker's launch announcement of 2026-03-03 and its blog post of 2025-11-10, and multiversecomputing.com/privacy-policy.
// The request came from the site owner, not from the maker: no maker comment exists and no founder-review badge is set.
// Last upstream update 2026-09-11 (Google Play) => no stale warning. Locality is hybrid (maker: compressed on-device models + API cloud models); the
// current v2.10 store text mentions only API models, which the review states as an unresolved conflict. Maker performance claims are attributed, never stated as fact.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-10-24',
      dateModified: '2026-10-24',
      next_refresh_due: '2027-04-24',
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/compactifai-app-review-hero-en.webp',
      title: 'CompactifAI APP Review: Free Chat App with Offline and Cloud Models',
      seoTitle: 'CompactifAI APP Review: Offline and Cloud AI on Phone',
      intro: 'CompactifAI APP is a free chat app for iPhone, iPad and Android from Multiverse Computing, a Spain-based company focused on compressed AI models. According to the maker, it can run compressed models on the device without internet or use larger models through the company\'s cloud API. This review reflects the store listings, the maker\'s website and its announcements, as checked on 24 October 2026.',
      metaDescription: 'CompactifAI APP review: free iPhone and Android chat app with offline and cloud models. What runs on the phone and what is still unverified.',
      twitterDescription: 'CompactifAI APP review: a free, closed-source chat app that mixes compressed on-device models with the maker\'s cloud API. What the sources confirm, what current store text leaves out and what is unverified.',
      audience: 'iPhone, iPad and Android users who want to know whether CompactifAI APP really works offline, which parts run in the cloud and what the sources confirm and do not.',
      readTime: '6 min read',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'CompactifAI APP review',
      targetKeywords: [
        'compactifai app review',
        'compactifai app',
        'multiverse computing app',
        'offline ai app iphone',
        'compressed ai models on phone',
        'quasar 438b app',
        'compactifai app vs pocketpal',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Android',
      ],
      leadAnswerBlock: '**CompactifAI APP is a free, closed-source chat app from Multiverse Computing that, according to the maker, combines compressed on-device models with cloud models from its own API.** **The current store text (version 2.10) describes only the API models, so what runs on the phone today is unverified.**',
      quickAnswerTop: {
        en: {
          question: 'Does CompactifAI APP keep my chats on my phone?',
          answer: 'Only partly, according to the maker: on-device models work offline, while API models send requests to Multiverse Computing\'s servers. The App Store label says "Data Not Collected", Google Play lists some collected data, and nothing was tested.',
          bullets: [
            'Free on the [App Store](https://apps.apple.com/us/app/compactifai/id6749544702) and [Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo).',
            'The version 2.10 release notes name two API models: Quasar 438B and GLM 5.3.',
            'Availability is limited by region; the maker\'s site tells readers to contact it if the app is missing in their country.',
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
          label: 'What Is CompactifAI APP?',
          anchor: 'what-is-compactifai-app',
        },
        {
          label: 'Where Your Chats Run',
          anchor: 'where-it-runs',
        },
        {
          label: 'Get It',
          anchor: 'get-it',
        },
        {
          label: 'Pricing',
          anchor: 'pricing',
        },
        {
          label: 'Features Listed by the Maker',
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
              text: 'CompactifAI APP is a free, closed-source chat app for iPhone, iPad and Android from Multiverse Computing that offers compressed models for offline use and larger models through the maker\'s cloud API.',
            },
            {
              type: 'plain-terms',
              text: 'You install it from the App Store or Google Play and pick a model. Some models are meant to run on the phone itself; others are hosted by Multiverse Computing and need an internet connection.',
            },
          ],
          items: [
            'Maker: Multiverse Computing, headquartered in Donostia, Spain; the App Store shows a first release on 2 March 2026 and the launch announcement is dated 3 March 2026.',
            'Reach: Google Play shows 5K+ downloads; the US App Store listing shows no ratings yet.',
            'Platforms: iPhone and iPad (iOS and iPadOS 16.4 or later) and Android; the App Store lists English as the only language.',
            'Website: the maker\'s [CompactifAI APP page](https://multiversecomputing.com/compactifai-app) links both stores.',
          ],
          callouts: [
            {
              type: 'note',
              text: 'This review is based on the store listings, Apple\'s lookup data, the maker\'s website and its published announcements, checked on 24 October 2026. It involved no installation, hands-on use, network inspection or benchmarking.',
            },
          ],
        },
        overview: {
          id: 'what-is-compactifai-app',
          title: 'What Is CompactifAI APP?',
          content: [
            '**CompactifAI APP is Multiverse Computing\'s mobile chat app for trying the company\'s own models.** The store text says it brings the maker\'s portfolio of models "together in one streamlined and intuitive interface" so users can compare them and choose one per task. The App Store shows the seller as MULTIVERSE COMPUTING SL. and the title "CompactifAI".',
            'CompactifAI is also the name of the company\'s model-compression technology and of its separate cloud API; the app is a third product that lists models available on that API.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'Where Your Chats Run',
          content: [
            '**CompactifAI APP is hybrid, not purely local: according to the maker, where a chat runs depends on which model you use.**',
          ],
          items: [
            '**On the phone (maker statements).** The website says the models are "optimized to run locally on your device — even without an internet connection", and the March 2026 announcement says users can download models and work fully offline. A November 2025 blog post from the maker describes an on-device Llama 3.1 8B Slim model in a demo. No list of the on-device models in version 2.10 was found.',
            '**In the cloud.** The announcement says users can switch to cloud models through the API, and the version 2.10 store text says the app gives access to Multiverse Computing\'s models "through our API", naming Quasar 438B and GLM 5.3. Requests to those models go to the maker\'s API.',
            '**Routing.** The announcement describes "smart query routing" between on-device and API models. The 2.10 store text speaks of choosing among models and does not say whether automatic routing still exists.',
          ],
          note: 'The current App Store and Google Play descriptions do not mention offline use at all. The offline claims come from the maker\'s website and announcements, and this review did not install the app to test them.',
        },
        getIt: {
          id: 'get-it',
          title: 'Get It',
          columns: [
            'Platform',
            'Where to get it',
          ],
          rows: [
            {
              Platform: 'iPhone and iPad',
              'Where to get it': '[App Store](https://apps.apple.com/us/app/compactifai/id6749544702) (free download, iOS or iPadOS 16.4 or later)',
            },
            {
              Platform: 'Android',
              'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo) (free download, 5K+ downloads)',
            },
            {
              Platform: 'Website',
              'Where to get it': '[CompactifAI APP page](https://multiversecomputing.com/compactifai-app) (links both stores)',
            },
            {
              Platform: 'Privacy policy',
              'Where to get it': '[Privacy policy](https://multiversecomputing.com/privacy-policy) (general policy, no date shown)',
            },
          ],
          note: 'Version reviewed: 2.10.4 on Google Play, last updated on 11 September 2026; the App Store shows 2.10.0, released on 8 September 2026. A lookup by app ID found the App Store listing in the US, German, French, Spanish, Japanese, Korean, Brazilian, UK, Canadian, Australian and Indian storefronts, but not in the Saudi or Chinese ones. The maker\'s site tells readers to contact it if the app is not available in their region.',
        },
        pricing: {
          id: 'pricing',
          title: 'Pricing',
          content: [
            '**The app is a free download on both stores, and no subscription, paid tier or in-app purchase was found in the sources checked.**',
            'The listings do not say what, if anything, using the API-hosted models costs.',
          ],
        },
        features: {
          id: 'key-features',
          title: 'Features Listed by the Maker',
          content: [
            '**Everything below comes from the store text, release notes and announcements; none of it was tested.**',
          ],
          items: [
            '**Model access.** One interface for the maker\'s models. Version 2.10.0 added Quasar 438B, which the maker calls its flagship reasoning model, and GLM 5.3, and now lists every chat model on Multiverse Computing\'s API, with new ones added as released.',
            '**Interface.** Redesigned onboarding and model selection in version 2.10.0, plus "faster, more consistent responses".',
            '**Maker claims.** The March 2026 announcement says the compression technology shrinks models by up to 95% with a precision loss of 2-3%, and the 2.10 release notes call Quasar 438B "Europe\'s best-scoring AI model according to independent benchmarks by Artificial Analysis". Both are the maker\'s statements; PromptQuorum did not check them.',
          ],
          note: 'The installed build is the final authority on what works.',
        },
        privacy: {
          id: 'privacy',
          title: 'Privacy and Data Flow',
          content: [
            '**The two stores describe data collection differently.** The App Store privacy label says "Data Not Collected". The Google Play data-safety form says the app may collect name and email address (for app functionality and account management) and may share crash logs and approximate location with third parties for analytics; it adds that data is encrypted in transit and that deletion can be requested.',
            'The privacy policy linked from the App Store is the company\'s general policy for its website and mobile apps, and it does not describe this app\'s on-device or API data flow separately.',
          ],
          callouts: [
            {
              type: 'note',
              text: 'The app is closed source, so none of these statements can be checked in code, and PromptQuorum has not inspected network traffic. Anyone using the API models should assume the prompts leave the phone, and should confirm in the app which data stays on it.',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Who Should Use It',
          items: [
            '**Phone users who want to try Multiverse Computing\'s models** in one free app and compare several.',
            '**Readers interested in model compression,** the company\'s specialty, who accept that the on-device part is unverified.',
            '**People who may need AI with weak connectivity,** the use case the maker names, but only after confirming in the installed app that a model really runs offline.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'What We Could Not Verify',
          items: [
            '**Hands-on behavior.** The app was not installed, so answer quality, speed, battery use and offline operation were not tested.',
            '**The on-device models in version 2.10.** The listings name no local model, download size, storage need or device requirement.',
            '**Routing and model choice.** Whether the app picks between local and API models automatically, or the user does, is not stated for version 2.10.',
            '**Accounts.** The Google Play form lists name and email for account management; whether an account is required is not stated.',
            '**Independent feedback.** The US App Store listing shows no ratings, so no public user reports on the iPhone version were found.',
            '**Source code and languages.** No public repository was found, and the App Store lists English as the only language.',
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
              App: '[LM Mini](/power-local-llm/lm-mini-review)',
              Platforms: 'iOS, iPadOS, macOS',
              'Price / license': 'Free + purchases / Closed source',
              'Key difference': 'On-device models plus your own LM Studio or Ollama server',
            },
            {
              App: '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
              Platforms: 'iOS, Android',
              'Price / license': 'Free / MIT',
              'Key difference': 'Open-source on-device chat with its own model library',
            },
            {
              App: '[Private Mind](/power-local-llm/private-mind-review)',
              Platforms: 'iOS, Android',
              'Price / license': 'Free / MIT',
              'Key difference': 'Open-source offline chat with on-device document Q&A',
            },
            {
              App: '[Enchanted](/power-local-llm/enchanted-review)',
              Platforms: 'iOS, macOS',
              'Price / license': 'Free / Apache 2.0',
              'Key difference': 'Ollama-only client with no models of its own',
            },
          ],
          note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
        },
        faq: {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'Is CompactifAI APP the same as the CompactifAI API?',
              a: 'No. The API is the maker\'s separate developer service for compressed models; the app is a free mobile client whose 2.10 release notes say it lists every chat model on that API.',
            },
            {
              q: 'Which languages does CompactifAI APP support?',
              a: 'The App Store lists English only. For Quasar 438B, the store text says English and Spanish.',
            },
            {
              q: 'How does it differ from open-source offline phone apps?',
              a: 'It is closed source and built around the maker\'s own models, whereas apps such as PocketPal AI and Private Mind are open source and let you download models from public libraries.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Verdict',
          content: 'CompactifAI APP is an actively updated, free phone client from a company that specializes in compressed models. Its limits are a closed-source codebase, current store text that describes API models but not offline use, an unlisted on-device model set and no independent tests. It suits readers who want to try Multiverse Computing\'s models; anyone who needs a fully on-device, open-source app should compare [Private Mind](/power-local-llm/private-mind-review) or [PocketPal AI](/power-local-llm/pocketpal-ai-review).',
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[CompactifAI on the App Store](https://apps.apple.com/us/app/compactifai/id6749544702) — description, release notes, privacy label, size and compatibility, checked 24 October 2026.',
            '[CompactifAI on Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo) — description, version, update date and download count, checked 24 October 2026.',
            '[Google Play data-safety page](https://play.google.com/store/apps/datasafety?id=com.multiversecomputing.compactifaizoo) — collected and shared data types, checked 24 October 2026.',
            '[Multiverse Computing CompactifAI APP page](https://multiversecomputing.com/compactifai-app) — the maker\'s offline claim and region note.',
            '[Launch announcement, 3 March 2026](https://multiversecomputing.com/resources/introducing-compactifai-app-bringing-offline-ai-to-edge-devices) — offline and cloud modes, query routing and compression figures (maker statements).',
            '[Maker blog post, 10 November 2025](https://multiversecomputing.com/resources/30-000-feet-above-the-cloud-compactifai-s-ai-unplugged-moment) — on-device and cloud model demo (maker statements).',
            '[Apple lookup data for CompactifAI](https://itunes.apple.com/lookup?id=6749544702&country=us) — version, release dates, size and supported devices, checked 24 October 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[LM Mini Review](/power-local-llm/lm-mini-review) — a closed-source iPhone and iPad chat app that mixes on-device models with your own server.',
            '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
            '[Private Mind Review](/power-local-llm/private-mind-review) — a free, MIT-licensed offline chat app for iPhone and Android.',
            '[Enchanted Review](/power-local-llm/enchanted-review) — a free, Apache-2.0 Ollama client for iPhone and Mac.',
            '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the broader iPhone roundup.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'CompactifAI APP Review: Free Chat App with Offline and Cloud Models',
        description: 'CompactifAI APP review: a free, closed-source chat app that mixes compressed on-device models with the maker\'s cloud API. What the sources confirm, what current store text leaves out and what is unverified.',
        url: 'https://www.promptquorum.com/power-local-llm/compactifai-app-review',
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
          audienceType: 'iPhone, iPad and Android users evaluating a hybrid local AI chat app',
        },
        about: [
          {
            '@type': 'Thing',
            name: 'CompactifAI APP',
          },
          {
            '@type': 'Thing',
            name: 'On-device AI',
          },
          {
            '@type': 'Thing',
            name: 'Multiverse Computing',
          },
        ],
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.promptquorum.com/power-local-llm/compactifai-app-review',
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
            name: 'CompactifAI APP Review',
            item: 'https://www.promptquorum.com/power-local-llm/compactifai-app-review',
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
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/compactifai-app-review-hero-de.webp',
      title: 'CompactifAI-APP-Rezension: Kostenlose Chat-App mit Offline- und Cloud-Modellen',
      seoTitle: 'CompactifAI-APP-Rezension: KI offline und in der Cloud',
      intro: 'CompactifAI APP ist eine kostenlose Chat-App für iPhone, iPad und Android von Multiverse Computing, einem Unternehmen mit Sitz in Spanien, das sich auf komprimierte KI-Modelle konzentriert. Laut Hersteller kann sie komprimierte Modelle ohne Internet auf dem Gerät ausführen oder größere Modelle über die Cloud-API des Unternehmens nutzen. Diese Rezension gibt die Store-Einträge, die Website des Herstellers und seine Ankündigungen wieder, wie am 24. Oktober 2026 geprüft.',
      metaDescription: 'CompactifAI-APP-Rezension: kostenlose Chat-App für iPhone und Android mit Offline- und Cloud-Modellen. Was läuft auf dem Telefon, was ist ungeprüft?',
      twitterDescription: 'CompactifAI-APP-Rezension: eine kostenlose, nicht quelloffene Chat-App, die komprimierte Modelle auf dem Gerät mit der Cloud-API des Herstellers verbindet. Was die Quellen bestätigen, was der aktuelle Store-Text auslässt und was ungeprüft ist.',
      audience: 'iPhone-, iPad- und Android-Nutzer, die wissen möchten, ob CompactifAI APP wirklich offline funktioniert, welche Teile in der Cloud laufen und was die Quellen bestätigen und was nicht.',
      readTime: '6 Min. Lesezeit',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'CompactifAI APP Rezension',
      targetKeywords: [
        'compactifai app test',
        'compactifai app',
        'multiverse computing app',
        'offline ki app iphone',
        'komprimierte ki modelle auf dem handy',
        'quasar 438b app',
        'compactifai app vs pocketpal',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Android',
      ],
      leadAnswerBlock: '**CompactifAI APP ist eine kostenlose, nicht quelloffene Chat-App von Multiverse Computing, die laut Hersteller komprimierte Modelle auf dem Gerät mit Cloud-Modellen aus der eigenen API verbindet.** **Der aktuelle Store-Text (Version 2.10) beschreibt nur die API-Modelle; was heute auf dem Telefon läuft, ist daher ungeprüft.**',
      quickAnswerTop: {
        de: {
          question: 'Bleiben meine Chats auf meinem Telefon?',
          answer: 'Laut Hersteller nur teilweise: Modelle auf dem Gerät arbeiten offline, API-Modelle senden Anfragen an die Server von Multiverse Computing. Das App-Store-Label lautet „Daten werden nicht erfasst“, Google Play nennt einige erfasste Daten, und nichts davon wurde getestet.',
          bullets: [
            'Kostenlos im [App Store](https://apps.apple.com/de/app/compactifai/id6749544702) und bei [Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo).',
            'Die Versionshinweise zu 2.10 nennen zwei API-Modelle: Quasar 438B und GLM 5.3.',
            'Die Verfügbarkeit ist regional begrenzt; die Website des Herstellers rät, ihn zu kontaktieren, wenn die App im eigenen Land fehlt.',
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
          label: 'Was ist CompactifAI APP?',
          anchor: 'what-is-compactifai-app',
        },
        {
          label: 'Wo Ihre Chats laufen',
          anchor: 'where-it-runs',
        },
        {
          label: 'Bezugsquelle',
          anchor: 'get-it',
        },
        {
          label: 'Preise',
          anchor: 'pricing',
        },
        {
          label: 'Vom Hersteller genannte Funktionen',
          anchor: 'key-features',
        },
        {
          label: 'Datenschutz und Datenfluss',
          anchor: 'privacy',
        },
        {
          label: 'Für wen sich die App eignet',
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
              text: 'CompactifAI APP ist eine kostenlose, nicht quelloffene Chat-App für iPhone, iPad und Android von Multiverse Computing, die komprimierte Modelle für die Offline-Nutzung und größere Modelle über die Cloud-API des Herstellers bietet.',
            },
            {
              type: 'plain-terms',
              text: 'Sie installieren die App aus dem App Store oder von Google Play und wählen ein Modell. Manche Modelle sollen auf dem Telefon selbst laufen; andere werden von Multiverse Computing gehostet und brauchen eine Internetverbindung.',
            },
          ],
          items: [
            'Hersteller: Multiverse Computing mit Hauptsitz in Donostia, Spanien; der App Store zeigt eine erste Version am 2. März 2026, und die Markteinführung wurde am 3. März 2026 angekündigt.',
            'Verbreitung: Google Play zeigt mehr als 5.000 Downloads; der Eintrag im US-App-Store zeigt noch keine Bewertungen.',
            'Plattformen: iPhone und iPad (iOS und iPadOS 16.4 und neuer) sowie Android; der App Store nennt Englisch als einzige Sprache.',
            'Website: Die [CompactifAI-APP-Seite](https://multiversecomputing.com/compactifai-app) des Herstellers verlinkt beide Stores.',
          ],
          callouts: [
            {
              type: 'note',
              text: 'Diese Rezension beruht auf den Store-Einträgen, den Abfragedaten von Apple, der Website des Herstellers und seinen veröffentlichten Ankündigungen, geprüft am 24. Oktober 2026. Installation, praktische Tests, Netzwerkanalysen oder Benchmarks gab es nicht.',
            },
          ],
        },
        overview: {
          id: 'what-is-compactifai-app',
          title: 'Was ist CompactifAI APP?',
          content: [
            '**CompactifAI APP ist die mobile Chat-App von Multiverse Computing, um die eigenen Modelle des Unternehmens auszuprobieren.** Laut Store-Text bringt sie das Modellportfolio des Herstellers „in einer schlanken und intuitiven Oberfläche zusammen“, damit Nutzer Modelle vergleichen und je Aufgabe eines wählen können. Der App Store nennt als Anbieter MULTIVERSE COMPUTING SL. und als Titel „CompactifAI“.',
            'CompactifAI ist außerdem der Name der Modellkompressionstechnik des Unternehmens und seiner separaten Cloud-API; die App ist ein drittes Produkt, das Modelle dieser API auflistet.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'Wo Ihre Chats laufen',
          content: [
            '**CompactifAI APP arbeitet hybrid und nicht rein lokal: Laut Hersteller hängt es vom verwendeten Modell ab, wo ein Chat läuft.**',
          ],
          items: [
            '**Auf dem Telefon (Angaben des Herstellers).** Die Website sagt, die Modelle seien „optimiert, um lokal auf Ihrem Gerät zu laufen — auch ohne Internetverbindung“, und die Ankündigung vom März 2026 besagt, Nutzer könnten Modelle herunterladen und vollständig offline arbeiten. Ein Blogbeitrag des Herstellers vom November 2025 beschreibt in einer Demo ein Modell Llama 3.1 8B Slim auf dem Gerät. Eine Liste der Modelle auf dem Gerät in Version 2.10 wurde nicht gefunden.',
            '**In der Cloud.** Die Ankündigung sagt, Nutzer könnten über die API auf Cloud-Modelle wechseln, und der Store-Text zu Version 2.10 sagt, die App biete Zugriff auf die Modelle von Multiverse Computing „über unsere API“ und nennt Quasar 438B und GLM 5.3. Anfragen an diese Modelle gehen an die API des Herstellers.',
            '**Routing.** Die Ankündigung beschreibt ein „intelligentes Routing von Anfragen“ zwischen Modellen auf dem Gerät und API-Modellen. Der Store-Text zu 2.10 spricht von der Auswahl zwischen Modellen und sagt nicht, ob es das automatische Routing noch gibt.',
          ],
          note: 'Die aktuellen Beschreibungen im App Store und bei Google Play erwähnen die Offline-Nutzung überhaupt nicht. Die Offline-Angaben stammen von der Website und den Ankündigungen des Herstellers, und diese Rezension hat die App nicht installiert, um sie zu testen.',
        },
        getIt: {
          id: 'get-it',
          title: 'Bezugsquelle',
          columns: [
            'Plattform',
            'Bezugsquelle',
          ],
          rows: [
            {
              Plattform: 'iPhone und iPad',
              Bezugsquelle: '[App Store](https://apps.apple.com/de/app/compactifai/id6749544702) (kostenloser Download, iOS oder iPadOS 16.4 und neuer)',
            },
            {
              Plattform: 'Android',
              Bezugsquelle: '[Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo) (kostenloser Download, mehr als 5.000 Downloads)',
            },
            {
              Plattform: 'Website',
              Bezugsquelle: '[CompactifAI-APP-Seite](https://multiversecomputing.com/compactifai-app) (verlinkt beide Stores)',
            },
            {
              Plattform: 'Datenschutzerklärung',
              Bezugsquelle: '[Datenschutzerklärung](https://multiversecomputing.com/privacy-policy) (allgemein, ohne Datum)',
            },
          ],
          note: 'Geprüfte Version: 2.10.4 bei Google Play, zuletzt aktualisiert am 11. September 2026; der App Store zeigt 2.10.0, veröffentlicht am 8. September 2026. Eine Abfrage per App-ID fand den App-Store-Eintrag in den Storefronts der USA, Deutschlands, Frankreichs, Spaniens, Japans, Koreas, Brasiliens, des Vereinigten Königreichs, Kanadas, Australiens und Indiens, nicht aber in denen Saudi-Arabiens und Chinas. Die Website des Herstellers rät, ihn zu kontaktieren, wenn die App in der eigenen Region nicht verfügbar ist.',
        },
        pricing: {
          id: 'pricing',
          title: 'Preise',
          content: [
            '**Die App ist in beiden Stores ein kostenloser Download; in den geprüften Quellen fand sich weder ein Abo noch eine Bezahlstufe oder ein In-App-Kauf.**',
            'Die Einträge sagen nicht, ob und was die Nutzung der über die API gehosteten Modelle kostet.',
          ],
        },
        features: {
          id: 'key-features',
          title: 'Vom Hersteller genannte Funktionen',
          content: [
            '**Alles Folgende stammt aus dem Store-Text, den Versionshinweisen und den Ankündigungen; nichts davon wurde getestet.**',
          ],
          items: [
            '**Modellzugriff.** Eine Oberfläche für die Modelle des Herstellers. Version 2.10.0 ergänzte Quasar 438B, das der Hersteller als sein Flaggschiff-Reasoning-Modell bezeichnet, sowie GLM 5.3 und listet nun jedes Chat-Modell der API von Multiverse Computing auf, neue jeweils nach Veröffentlichung.',
            '**Oberfläche.** Überarbeitetes Onboarding und überarbeitete Modellauswahl in Version 2.10.0 sowie „schnellere, konsistentere Antworten“.',
            '**Behauptungen des Herstellers.** Die Ankündigung vom März 2026 sagt, die Kompressionstechnik verkleinere Modelle um bis zu 95 % bei einem Genauigkeitsverlust von 2–3 %, und die Versionshinweise zu 2.10 nennen Quasar 438B „Europas bestbewertetes KI-Modell laut unabhängigen Benchmarks von Artificial Analysis“. Beides sind Aussagen des Herstellers; PromptQuorum hat sie nicht überprüft.',
          ],
          note: 'Maßgeblich dafür, was funktioniert, ist die installierte Version.',
        },
        privacy: {
          id: 'privacy',
          title: 'Datenschutz und Datenfluss',
          content: [
            '**Die beiden Stores beschreiben die Datenerfassung unterschiedlich.** Das Datenschutzlabel im App Store lautet „Daten werden nicht erfasst“. Das Datensicherheitsformular bei Google Play sagt, die App könne Name und E-Mail-Adresse erfassen (für App-Funktionen und Kontoverwaltung) und Absturzprotokolle sowie ungefähre Standortdaten zu Analysezwecken an Dritte weitergeben; zusätzlich sind die Daten bei der Übertragung verschlüsselt, und die Löschung kann beantragt werden.',
            'Die im App Store verlinkte Datenschutzerklärung ist die allgemeine Erklärung des Unternehmens für seine Website und mobilen Apps und beschreibt den Datenfluss dieser App auf dem Gerät oder über die API nicht gesondert.',
          ],
          callouts: [
            {
              type: 'note',
              text: 'Die App ist nicht quelloffen, daher lässt sich keine dieser Angaben im Code prüfen, und PromptQuorum hat den Netzwerkverkehr nicht untersucht. Wer die API-Modelle nutzt, sollte davon ausgehen, dass die Eingaben das Telefon verlassen, und in der App prüfen, welche Daten auf dem Gerät bleiben.',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Für wen sich die App eignet',
          items: [
            '**Telefonnutzer, die die Modelle von Multiverse Computing ausprobieren möchten,** in einer kostenlosen App und im Vergleich mehrerer Modelle.',
            '**Leser, die sich für Modellkompression interessieren,** die Spezialität des Unternehmens, und akzeptieren, dass der Teil auf dem Gerät ungeprüft ist.',
            '**Menschen, die KI bei schwacher Verbindung brauchen könnten,** der vom Hersteller genannte Anwendungsfall, aber erst nachdem sie in der installierten App bestätigt haben, dass ein Modell wirklich offline läuft.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Was wir nicht überprüfen konnten',
          items: [
            '**Praktisches Verhalten.** Die App wurde nicht installiert; Antwortqualität, Geschwindigkeit, Akkuverbrauch und Offline-Betrieb wurden daher nicht getestet.',
            '**Die Modelle auf dem Gerät in Version 2.10.** Die Einträge nennen weder ein lokales Modell noch Downloadgröße, Speicherbedarf oder Geräteanforderungen.',
            '**Routing und Modellwahl.** Ob die App selbst zwischen lokalen und API-Modellen wählt oder der Nutzer, wird für Version 2.10 nicht gesagt.',
            '**Konten.** Das Formular bei Google Play nennt Name und E-Mail für die Kontoverwaltung; ob ein Konto erforderlich ist, wird nicht gesagt.',
            '**Unabhängige Rückmeldungen.** Der US-App-Store-Eintrag zeigt keine Bewertungen, daher wurden keine öffentlichen Nutzerberichte zur iPhone-Version gefunden.',
            '**Quellcode und Sprachen.** Ein öffentliches Repository wurde nicht gefunden, und der App Store nennt Englisch als einzige Sprache.',
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
              App: '[LM Mini](/de/power-local-llm/lm-mini-review)',
              Plattformen: 'iOS, iPadOS, macOS',
              'Preis / Lizenz': 'Kostenlos + Käufe / Closed Source',
              'Wesentlicher Unterschied': 'Modelle auf dem Gerät plus Ihr eigener LM-Studio- oder Ollama-Server',
            },
            {
              App: '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
              Plattformen: 'iOS, Android',
              'Preis / Lizenz': 'Kostenlos / MIT',
              'Wesentlicher Unterschied': 'Quelloffener Chat auf dem Gerät mit eigener Modellbibliothek',
            },
            {
              App: '[Private Mind](/de/power-local-llm/private-mind-review)',
              Plattformen: 'iOS, Android',
              'Preis / Lizenz': 'Kostenlos / MIT',
              'Wesentlicher Unterschied': 'Quelloffener Offline-Chat mit Dokumentenfragen auf dem Gerät',
            },
            {
              App: '[Enchanted](/de/power-local-llm/enchanted-review)',
              Plattformen: 'iOS, macOS',
              'Preis / Lizenz': 'Kostenlos / Apache 2.0',
              'Wesentlicher Unterschied': 'Reiner Ollama-Client ohne eigene Modelle',
            },
          ],
          note: 'Angaben zu Wettbewerbern ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen jeder App im jeweiligen Eintrag.',
        },
        faq: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Ist CompactifAI APP dasselbe wie die CompactifAI-API?',
              a: 'Nein. Die API ist der separate Entwicklerdienst des Herstellers für komprimierte Modelle; die App ist ein kostenloser mobiler Client, der laut Versionshinweisen zu 2.10 jedes Chat-Modell dieser API auflistet.',
            },
            {
              q: 'Welche Sprachen unterstützt CompactifAI APP?',
              a: 'Der App Store nennt nur Englisch. Für Quasar 438B nennt der Store-Text Englisch und Spanisch.',
            },
            {
              q: 'Wie unterscheidet sie sich von quelloffenen Offline-Apps für das Telefon?',
              a: 'Sie ist nicht quelloffen und auf die eigenen Modelle des Herstellers ausgerichtet, während Apps wie PocketPal AI und Private Mind quelloffen sind und das Laden von Modellen aus öffentlichen Bibliotheken erlauben.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Fazit',
          content: 'CompactifAI APP ist ein aktiv gepflegter, kostenloser Telefon-Client eines Unternehmens, das auf komprimierte Modelle spezialisiert ist. Grenzen sind der nicht quelloffene Code, ein aktueller Store-Text, der API-Modelle, aber keine Offline-Nutzung beschreibt, ein nicht aufgeführter Satz von Modellen auf dem Gerät und fehlende unabhängige Tests. Die App eignet sich für Leser, die die Modelle von Multiverse Computing ausprobieren möchten; wer eine vollständig auf dem Gerät laufende, quelloffene App braucht, sollte [Private Mind](/de/power-local-llm/private-mind-review) oder [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) vergleichen.',
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            '[CompactifAI im App Store](https://apps.apple.com/us/app/compactifai/id6749544702) — Beschreibung, Versionshinweise, Datenschutzlabel, Größe und Kompatibilität, geprüft am 24. Oktober 2026.',
            '[CompactifAI bei Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo) — Beschreibung, Version, Aktualisierungsdatum und Downloadzahl, geprüft am 24. Oktober 2026.',
            '[Datensicherheitsseite bei Google Play](https://play.google.com/store/apps/datasafety?id=com.multiversecomputing.compactifaizoo) — erfasste und weitergegebene Datentypen, geprüft am 24. Oktober 2026.',
            '[CompactifAI-APP-Seite von Multiverse Computing](https://multiversecomputing.com/compactifai-app) — Offline-Angabe des Herstellers und Hinweis zur Region.',
            '[Ankündigung der Markteinführung, 3. März 2026](https://multiversecomputing.com/resources/introducing-compactifai-app-bringing-offline-ai-to-edge-devices) — Offline- und Cloud-Modus, Routing von Anfragen und Kompressionswerte (Angaben des Herstellers).',
            '[Blogbeitrag des Herstellers, 10. November 2025](https://multiversecomputing.com/resources/30-000-feet-above-the-cloud-compactifai-s-ai-unplugged-moment) — Demo mit Modellen auf dem Gerät und in der Cloud (Angaben des Herstellers).',
            '[Apple-Abfragedaten zu CompactifAI](https://itunes.apple.com/lookup?id=6749544702&country=us) — Version, Veröffentlichungsdaten, Größe und unterstützte Geräte, geprüft am 24. Oktober 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Artikel',
          items: [
            '[LM-Mini-Rezension](/de/power-local-llm/lm-mini-review) — eine nicht quelloffene Chat-App für iPhone und iPad, die Modelle auf dem Gerät mit Ihrem eigenen Server verbindet.',
            '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener Chat-Client auf dem Gerät für iOS und Android.',
            '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine kostenlose Offline-Chat-App unter MIT-Lizenz für iPhone und Android.',
            '[Enchanted-Rezension](/de/power-local-llm/enchanted-review) — ein kostenloser Ollama-Client unter Apache 2.0 für iPhone und Mac.',
            '[Die besten lokalen LLM-Apps für das iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — die breitere Übersicht für das iPhone.',
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
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/compactifai-app-review-hero-es.webp',
      title: 'Reseña de CompactifAI APP: app de chat gratuita con modelos sin conexión y en la nube',
      seoTitle: 'Reseña de CompactifAI APP: IA sin conexión y en la nube',
      intro: 'CompactifAI APP es una app de chat gratuita para iPhone, iPad y Android de Multiverse Computing, una empresa con sede en España centrada en modelos de IA comprimidos. Según el fabricante, puede ejecutar modelos comprimidos en el dispositivo sin internet o usar modelos más grandes a través de la API en la nube de la empresa. Esta reseña refleja las fichas de las tiendas, el sitio web del fabricante y sus anuncios, comprobados el 24 de octubre de 2026.',
      metaDescription: 'Reseña de CompactifAI APP: app de chat gratuita para iPhone y Android con modelos sin conexión y en la nube. Qué corre en el móvil y qué no se verificó.',
      twitterDescription: 'Reseña de CompactifAI APP: una app de chat gratuita y de código cerrado que combina modelos comprimidos en el dispositivo con la API en la nube del fabricante. Qué confirman las fuentes, qué omite el texto actual de las tiendas y qué no está verificado.',
      audience: 'Usuarios de iPhone, iPad y Android que quieren saber si CompactifAI APP funciona de verdad sin conexión, qué partes se ejecutan en la nube y qué confirman y qué no las fuentes.',
      readTime: '6 min de lectura',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'reseña de CompactifAI APP',
      targetKeywords: [
        'compactifai app reseña',
        'compactifai app',
        'multiverse computing app',
        'app de ia sin conexión iphone',
        'modelos de ia comprimidos en el móvil',
        'quasar 438b app',
        'compactifai app vs pocketpal',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Android',
      ],
      leadAnswerBlock: '**CompactifAI APP es una app de chat gratuita y de código cerrado de Multiverse Computing que, según el fabricante, combina modelos comprimidos en el dispositivo con modelos en la nube de su propia API.** **El texto actual de las tiendas (versión 2.10) describe solo los modelos de la API, así que lo que se ejecuta hoy en el móvil no está verificado.**',
      quickAnswerTop: {
        es: {
          question: '¿CompactifAI APP mantiene mis chats en mi móvil?',
          answer: 'Solo en parte, según el fabricante: los modelos en el dispositivo funcionan sin conexión, mientras que los modelos de la API envían las solicitudes a los servidores de Multiverse Computing. La etiqueta de la App Store dice «Datos no recopilados», Google Play indica algunos datos recopilados y no se probó nada.',
          bullets: [
            'Gratis en la [App Store](https://apps.apple.com/es/app/compactifai/id6749544702) y en [Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo).',
            'Las notas de la versión 2.10 nombran dos modelos de la API: Quasar 438B y GLM 5.3.',
            'La disponibilidad está limitada por región; el sitio del fabricante invita a contactarlo si la app no aparece en tu país.',
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
          label: '¿Qué es CompactifAI APP?',
          anchor: 'what-is-compactifai-app',
        },
        {
          label: 'Dónde se ejecutan tus chats',
          anchor: 'where-it-runs',
        },
        {
          label: 'Cómo obtenerla',
          anchor: 'get-it',
        },
        {
          label: 'Precios',
          anchor: 'pricing',
        },
        {
          label: 'Funciones indicadas por el fabricante',
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
              text: 'CompactifAI APP es una app de chat gratuita y de código cerrado para iPhone, iPad y Android de Multiverse Computing que ofrece modelos comprimidos para uso sin conexión y modelos más grandes mediante la API en la nube del fabricante.',
            },
            {
              type: 'plain-terms',
              text: 'La instalas desde la App Store o Google Play y eliges un modelo. Algunos modelos están pensados para ejecutarse en el propio móvil; otros los aloja Multiverse Computing y necesitan conexión a internet.',
            },
          ],
          items: [
            'Fabricante: Multiverse Computing, con sede en Donostia (España); la App Store muestra un primer lanzamiento el 2 de marzo de 2026 y el anuncio de lanzamiento es del 3 de marzo de 2026.',
            'Alcance: Google Play muestra más de 5.000 descargas; la ficha de la App Store de EE. UU. aún no muestra valoraciones.',
            'Plataformas: iPhone y iPad (iOS y iPadOS 16.4 o posterior) y Android; la App Store indica el inglés como único idioma.',
            'Sitio web: la [página de CompactifAI APP](https://multiversecomputing.com/compactifai-app) del fabricante enlaza ambas tiendas.',
          ],
          callouts: [
            {
              type: 'note',
              text: 'Esta reseña se basa en las fichas de las tiendas, los datos de consulta de Apple, el sitio web del fabricante y sus anuncios publicados, comprobados el 24 de octubre de 2026. No incluyó instalación, uso práctico, inspección de red ni pruebas de rendimiento.',
            },
          ],
        },
        overview: {
          id: 'what-is-compactifai-app',
          title: '¿Qué es CompactifAI APP?',
          content: [
            '**CompactifAI APP es la app de chat móvil de Multiverse Computing para probar los modelos propios de la empresa.** Según el texto de la tienda, reúne el catálogo de modelos del fabricante «en una interfaz sencilla e intuitiva» para que los usuarios los comparen y elijan uno por tarea. La App Store muestra como vendedor a MULTIVERSE COMPUTING SL. y como título «CompactifAI».',
            'CompactifAI es también el nombre de la tecnología de compresión de modelos de la empresa y de su API en la nube, que es un servicio aparte; la app es un tercer producto que lista modelos disponibles en esa API.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'Dónde se ejecutan tus chats',
          content: [
            '**CompactifAI APP es híbrida, no puramente local: según el fabricante, dónde se ejecuta un chat depende del modelo que uses.**',
          ],
          items: [
            '**En el móvil (declaraciones del fabricante).** El sitio web dice que los modelos están «optimizados para ejecutarse localmente en tu dispositivo, incluso sin conexión a internet», y el anuncio de marzo de 2026 indica que los usuarios pueden descargar modelos y trabajar totalmente sin conexión. Una entrada del blog del fabricante de noviembre de 2025 describe, en una demostración, un modelo Llama 3.1 8B Slim en el dispositivo. No se encontró una lista de los modelos en el dispositivo de la versión 2.10.',
            '**En la nube.** El anuncio dice que los usuarios pueden cambiar a modelos en la nube a través de la API, y el texto de la tienda de la versión 2.10 dice que la app da acceso a los modelos de Multiverse Computing «a través de nuestra API», con Quasar 438B y GLM 5.3 como ejemplos. Las solicitudes a esos modelos van a la API del fabricante.',
            '**Enrutamiento.** El anuncio describe un «enrutamiento inteligente de consultas» entre modelos en el dispositivo y modelos de la API. El texto de la tienda de la 2.10 habla de elegir entre modelos y no dice si el enrutamiento automático sigue existiendo.',
          ],
          note: 'Las descripciones actuales de la App Store y de Google Play no mencionan el uso sin conexión. Las afirmaciones sobre el uso sin conexión proceden del sitio web y los anuncios del fabricante, y esta reseña no instaló la app para comprobarlas.',
        },
        getIt: {
          id: 'get-it',
          title: 'Cómo obtenerla',
          columns: [
            'Plataforma',
            'Dónde obtenerla',
          ],
          rows: [
            {
              Plataforma: 'iPhone y iPad',
              'Dónde obtenerla': '[App Store](https://apps.apple.com/es/app/compactifai/id6749544702) (descarga gratuita, iOS o iPadOS 16.4 o posterior)',
            },
            {
              Plataforma: 'Android',
              'Dónde obtenerla': '[Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo) (descarga gratuita, más de 5.000 descargas)',
            },
            {
              Plataforma: 'Sitio web',
              'Dónde obtenerla': '[Página de CompactifAI APP](https://multiversecomputing.com/compactifai-app) (enlaza ambas tiendas)',
            },
            {
              Plataforma: 'Política de privacidad',
              'Dónde obtenerla': '[Política de privacidad](https://multiversecomputing.com/privacy-policy) (general, sin fecha)',
            },
          ],
          note: 'Versión revisada: 2.10.4 en Google Play, actualizada por última vez el 11 de septiembre de 2026; la App Store muestra la 2.10.0, publicada el 8 de septiembre de 2026. Una consulta por ID de app encontró la ficha de la App Store en las tiendas de EE. UU., Alemania, Francia, España, Japón, Corea, Brasil, Reino Unido, Canadá, Australia e India, pero no en las de Arabia Saudí y China. El sitio del fabricante invita a contactarlo si la app no está disponible en tu región.',
        },
        pricing: {
          id: 'pricing',
          title: 'Precios',
          content: [
            '**La app es una descarga gratuita en ambas tiendas, y en las fuentes revisadas no se encontró ninguna suscripción, nivel de pago ni compra dentro de la app.**',
            'Las fichas no dicen si usar los modelos alojados en la API tiene algún coste ni cuál.',
          ],
        },
        features: {
          id: 'key-features',
          title: 'Funciones indicadas por el fabricante',
          content: [
            '**Todo lo siguiente procede del texto de las tiendas, las notas de versión y los anuncios; nada se probó.**',
          ],
          items: [
            '**Acceso a modelos.** Una interfaz para los modelos del fabricante. La versión 2.10.0 añadió Quasar 438B, que el fabricante presenta como su modelo de razonamiento insignia, y GLM 5.3, y ahora lista todos los modelos de chat de la API de Multiverse Computing, con los nuevos añadidos a medida que se publican.',
            '**Interfaz.** Incorporación y selección de modelos rediseñadas en la versión 2.10.0, además de «respuestas más rápidas y consistentes».',
            '**Afirmaciones del fabricante.** El anuncio de marzo de 2026 dice que la tecnología de compresión reduce los modelos hasta un 95 % con una pérdida de precisión del 2-3 %, y las notas de la 2.10 describen Quasar 438B como «el modelo de IA mejor puntuado de Europa según los benchmarks independientes de Artificial Analysis». Ambas son declaraciones del fabricante; PromptQuorum no las comprobó.',
          ],
          note: 'La versión instalada es la que decide qué funciona.',
        },
        privacy: {
          id: 'privacy',
          title: 'Privacidad y flujo de datos',
          content: [
            '**Las dos tiendas describen la recopilación de datos de forma distinta.** La etiqueta de privacidad de la App Store dice «Datos no recopilados». El formulario de seguridad de datos de Google Play dice que la app puede recopilar nombre y correo electrónico (para las funciones de la app y la gestión de la cuenta) y puede compartir registros de fallos y ubicación aproximada con terceros con fines de análisis; añade que los datos se cifran en tránsito y que se puede solicitar su eliminación.',
            'La política de privacidad enlazada desde la App Store es la política general de la empresa para su sitio web y sus apps móviles, y no describe por separado el flujo de datos de esta app, ni en el dispositivo ni a través de la API.',
          ],
          callouts: [
            {
              type: 'note',
              text: 'La app es de código cerrado, así que ninguna de estas afirmaciones se puede comprobar en el código, y PromptQuorum no ha inspeccionado el tráfico de red. Quien use los modelos de la API debe asumir que sus consultas salen del móvil y comprobar en la app qué datos se quedan en él.',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Para quién es',
          items: [
            '**Usuarios de móvil que quieren probar los modelos de Multiverse Computing** en una sola app gratuita y comparar varios.',
            '**Lectores interesados en la compresión de modelos,** la especialidad de la empresa, que aceptan que la parte en el dispositivo no está verificada.',
            '**Personas que podrían necesitar IA con mala conectividad,** el caso de uso que menciona el fabricante, pero solo después de confirmar en la app instalada que un modelo funciona de verdad sin conexión.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Lo que no pudimos verificar',
          items: [
            '**Comportamiento en la práctica.** No se instaló la app, así que no se probaron la calidad de las respuestas, la velocidad, el consumo de batería ni el funcionamiento sin conexión.',
            '**Los modelos en el dispositivo de la versión 2.10.** Las fichas no nombran ningún modelo local, tamaño de descarga, espacio necesario ni requisito de dispositivo.',
            '**Enrutamiento y elección de modelo.** Para la versión 2.10 no se indica si la app elige sola entre modelos locales y de la API o lo hace el usuario.',
            '**Cuentas.** El formulario de Google Play cita nombre y correo para la gestión de la cuenta; no se indica si hace falta una cuenta.',
            '**Opiniones independientes.** La ficha de la App Store de EE. UU. no muestra valoraciones, así que no se encontraron opiniones públicas de usuarios sobre la versión de iPhone.',
            '**Código fuente e idiomas.** No se encontró un repositorio público, y la App Store indica el inglés como único idioma.',
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
              App: '[LM Mini](/es/power-local-llm/lm-mini-review)',
              Plataformas: 'iOS, iPadOS, macOS',
              'Precio / licencia': 'Gratis + compras / código cerrado',
              'Diferencia clave': 'Modelos en el dispositivo más tu propio servidor LM Studio u Ollama',
            },
            {
              App: '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
              Plataformas: 'iOS, Android',
              'Precio / licencia': 'Gratis / MIT',
              'Diferencia clave': 'Chat de código abierto en el dispositivo con su propia biblioteca de modelos',
            },
            {
              App: '[Private Mind](/es/power-local-llm/private-mind-review)',
              Plataformas: 'iOS, Android',
              'Precio / licencia': 'Gratis / MIT',
              'Diferencia clave': 'Chat sin conexión de código abierto con preguntas sobre documentos en el dispositivo',
            },
            {
              App: '[Enchanted](/es/power-local-llm/enchanted-review)',
              Plataformas: 'iOS, macOS',
              'Precio / licencia': 'Gratis / Apache 2.0',
              'Diferencia clave': 'Cliente solo para Ollama, sin modelos propios',
            },
          ],
          note: 'Los datos de los competidores cambian a menudo; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
        },
        faq: {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            {
              q: '¿CompactifAI APP es lo mismo que la API de CompactifAI?',
              a: 'No. La API es el servicio para desarrolladores del fabricante para modelos comprimidos; la app es un cliente móvil gratuito que, según las notas de la 2.10, lista todos los modelos de chat de esa API.',
            },
            {
              q: '¿Qué idiomas admite CompactifAI APP?',
              a: 'La App Store indica solo inglés. Para Quasar 438B, el texto de la tienda menciona inglés y español.',
            },
            {
              q: '¿En qué se diferencia de las apps sin conexión de código abierto para móvil?',
              a: 'Es de código cerrado y gira en torno a los modelos propios del fabricante, mientras que apps como PocketPal AI y Private Mind son de código abierto y permiten descargar modelos de bibliotecas públicas.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Veredicto',
          content: 'CompactifAI APP es un cliente móvil gratuito y actualizado con frecuencia, de una empresa especializada en modelos comprimidos. Sus límites son un código cerrado, un texto actual de las tiendas que describe modelos de API pero no el uso sin conexión, un conjunto de modelos en el dispositivo sin listar y la falta de pruebas independientes. Encaja con quienes quieren probar los modelos de Multiverse Computing; quien necesite una app de código abierto que funcione por completo en el dispositivo debería comparar [Private Mind](/es/power-local-llm/private-mind-review) o [PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            '[CompactifAI en la App Store](https://apps.apple.com/us/app/compactifai/id6749544702) — descripción, notas de versión, etiqueta de privacidad, tamaño y compatibilidad, comprobados el 24 de octubre de 2026.',
            '[CompactifAI en Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo) — descripción, versión, fecha de actualización y número de descargas, comprobados el 24 de octubre de 2026.',
            '[Página de seguridad de los datos de Google Play](https://play.google.com/store/apps/datasafety?id=com.multiversecomputing.compactifaizoo) — tipos de datos recopilados y compartidos, comprobados el 24 de octubre de 2026.',
            '[Página de CompactifAI APP de Multiverse Computing](https://multiversecomputing.com/compactifai-app) — afirmación del fabricante sobre el uso sin conexión y nota sobre regiones.',
            '[Anuncio de lanzamiento del 3 de marzo de 2026](https://multiversecomputing.com/resources/introducing-compactifai-app-bringing-offline-ai-to-edge-devices) — modos sin conexión y en la nube, enrutamiento de consultas y cifras de compresión (declaraciones del fabricante).',
            '[Entrada del blog del fabricante del 10 de noviembre de 2025](https://multiversecomputing.com/resources/30-000-feet-above-the-cloud-compactifai-s-ai-unplugged-moment) — demostración con modelos en el dispositivo y en la nube (declaraciones del fabricante).',
            '[Datos de consulta de Apple sobre CompactifAI](https://itunes.apple.com/lookup?id=6749544702&country=us) — versión, fechas de publicación, tamaño y dispositivos compatibles, comprobados el 24 de octubre de 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[Reseña de LM Mini](/es/power-local-llm/lm-mini-review) — una app de chat de código cerrado para iPhone y iPad que combina modelos en el dispositivo con tu propio servidor.',
            '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat gratuito y de código abierto en el dispositivo para iOS y Android.',
            '[Reseña de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat sin conexión gratuita, con licencia MIT, para iPhone y Android.',
            '[Reseña de Enchanted](/es/power-local-llm/enchanted-review) — un cliente de Ollama gratuito, con licencia Apache 2.0, para iPhone y Mac.',
            '[Las mejores apps de LLM locales para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — el panorama más amplio para iPhone.',
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
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/compactifai-app-review-hero-fr.webp',
      title: 'Test de CompactifAI APP : appli de chat gratuite avec modèles hors ligne et cloud',
      seoTitle: 'Test de CompactifAI APP : IA hors ligne et cloud',
      intro: 'CompactifAI APP est une appli de chat gratuite pour iPhone, iPad et Android de Multiverse Computing, une entreprise basée en Espagne et spécialisée dans les modèles d’IA compressés. Selon l’éditeur, elle peut exécuter des modèles compressés sur l’appareil sans connexion ou utiliser des modèles plus grands via l’API cloud de l’entreprise. Ce test reflète les fiches des stores, le site de l’éditeur et ses annonces, vérifiés le 24 octobre 2026.',
      metaDescription: 'Test de CompactifAI APP : appli de chat gratuite iPhone et Android, modèles hors ligne et cloud. Ce qui tourne sur le mobile et ce qui reste non vérifié.',
      twitterDescription: 'Test de CompactifAI APP : une appli de chat gratuite, à code fermé, qui associe des modèles compressés sur l’appareil et l’API cloud de l’éditeur. Ce que confirment les sources, ce que le texte actuel des stores omet et ce qui n’est pas vérifié.',
      audience: 'Utilisateurs d’iPhone, d’iPad et d’Android qui veulent savoir si CompactifAI APP fonctionne vraiment hors ligne, quelles parties tournent dans le cloud et ce que les sources confirment ou non.',
      readTime: '6 min de lecture',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'test CompactifAI APP',
      targetKeywords: [
        'compactifai app avis',
        'compactifai app',
        'multiverse computing app',
        'ia hors ligne iphone',
        'modèles d’ia compressés sur téléphone',
        'quasar 438b app',
        'compactifai app vs pocketpal',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Android',
      ],
      leadAnswerBlock: '**CompactifAI APP est une appli de chat gratuite, à code fermé, de Multiverse Computing qui, selon l’éditeur, associe des modèles compressés sur l’appareil et des modèles cloud issus de sa propre API.** **Le texte actuel des stores (version 2.10) ne décrit que les modèles de l’API ; ce qui tourne aujourd’hui sur le téléphone n’est donc pas vérifié.**',
      quickAnswerTop: {
        fr: {
          question: 'CompactifAI APP garde-t-elle mes conversations sur mon téléphone ?',
          answer: 'Seulement en partie, selon l’éditeur : les modèles sur l’appareil fonctionnent hors ligne, tandis que les modèles de l’API envoient les requêtes aux serveurs de Multiverse Computing. L’étiquette de l’App Store indique « Aucune donnée collectée », Google Play mentionne certaines données collectées, et rien n’a été testé.',
          bullets: [
            'Gratuite sur l’[App Store](https://apps.apple.com/fr/app/compactifai/id6749544702) et sur [Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo).',
            'Les notes de la version 2.10 citent deux modèles de l’API : Quasar 438B et GLM 5.3.',
            'La disponibilité est limitée selon les régions ; le site de l’éditeur invite à le contacter si l’appli est absente dans votre pays.',
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
          label: 'Qu’est-ce que CompactifAI APP ?',
          anchor: 'what-is-compactifai-app',
        },
        {
          label: 'Où tournent vos conversations',
          anchor: 'where-it-runs',
        },
        {
          label: 'Où la télécharger',
          anchor: 'get-it',
        },
        {
          label: 'Tarifs',
          anchor: 'pricing',
        },
        {
          label: 'Fonctions indiquées par l’éditeur',
          anchor: 'key-features',
        },
        {
          label: 'Confidentialité et flux de données',
          anchor: 'privacy',
        },
        {
          label: 'À qui elle convient',
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
              text: 'CompactifAI APP est une appli de chat gratuite, à code fermé, pour iPhone, iPad et Android de Multiverse Computing, qui propose des modèles compressés pour un usage hors ligne et des modèles plus grands via l’API cloud de l’éditeur.',
            },
            {
              type: 'plain-terms',
              text: 'Vous l’installez depuis l’App Store ou Google Play et choisissez un modèle. Certains modèles sont conçus pour tourner sur le téléphone lui-même ; d’autres sont hébergés par Multiverse Computing et exigent une connexion internet.',
            },
          ],
          items: [
            'Éditeur : Multiverse Computing, dont le siège est à Donostia (Espagne) ; l’App Store indique une première version le 2 mars 2026 et l’annonce de lancement date du 3 mars 2026.',
            'Audience : Google Play affiche plus de 5 000 téléchargements ; la fiche de l’App Store américain n’affiche encore aucune note.',
            'Plateformes : iPhone et iPad (iOS et iPadOS 16.4 ou ultérieur) et Android ; l’App Store indique l’anglais comme seule langue.',
            'Site web : la [page CompactifAI APP](https://multiversecomputing.com/compactifai-app) de l’éditeur renvoie vers les deux stores.',
          ],
          callouts: [
            {
              type: 'note',
              text: 'Ce test repose sur les fiches des stores, les données de consultation d’Apple, le site de l’éditeur et ses annonces publiées, vérifiés le 24 octobre 2026. Il n’a impliqué ni installation, ni utilisation concrète, ni analyse du réseau, ni benchmark.',
            },
          ],
        },
        overview: {
          id: 'what-is-compactifai-app',
          title: 'Qu’est-ce que CompactifAI APP ?',
          content: [
            '**CompactifAI APP est l’appli de chat mobile de Multiverse Computing pour essayer les modèles de l’entreprise.** Selon le texte du store, elle réunit le portefeuille de modèles de l’éditeur « dans une interface fluide et intuitive » afin de comparer les modèles et d’en choisir un par tâche. L’App Store indique comme vendeur MULTIVERSE COMPUTING SL. et comme titre « CompactifAI ».',
            'CompactifAI est aussi le nom de la technologie de compression de modèles de l’entreprise et de son API cloud distincte ; l’appli est un troisième produit qui liste des modèles disponibles sur cette API.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'Où tournent vos conversations',
          content: [
            '**CompactifAI APP est hybride, pas purement locale : selon l’éditeur, l’endroit où tourne une conversation dépend du modèle utilisé.**',
          ],
          items: [
            '**Sur le téléphone (déclarations de l’éditeur).** Le site affirme que les modèles sont « optimisés pour tourner localement sur votre appareil — même sans connexion internet », et l’annonce de mars 2026 indique que les utilisateurs peuvent télécharger des modèles et travailler entièrement hors ligne. Un article de blog de l’éditeur de novembre 2025 décrit, dans une démonstration, un modèle Llama 3.1 8B Slim sur l’appareil. Aucune liste des modèles sur l’appareil de la version 2.10 n’a été trouvée.',
            '**Dans le cloud.** L’annonce indique que les utilisateurs peuvent passer à des modèles cloud via l’API, et le texte du store pour la version 2.10 dit que l’appli donne accès aux modèles de Multiverse Computing « via notre API », en citant Quasar 438B et GLM 5.3. Les requêtes vers ces modèles partent vers l’API de l’éditeur.',
            '**Routage.** L’annonce décrit un « routage intelligent des requêtes » entre modèles sur l’appareil et modèles de l’API. Le texte du store pour la 2.10 parle de choisir parmi les modèles et ne dit pas si le routage automatique existe encore.',
          ],
          note: 'Les descriptions actuelles de l’App Store et de Google Play ne mentionnent pas du tout l’usage hors ligne. Les affirmations sur le hors ligne viennent du site et des annonces de l’éditeur, et ce test n’a pas installé l’appli pour les vérifier.',
        },
        getIt: {
          id: 'get-it',
          title: 'Où la télécharger',
          columns: [
            'Plateforme',
            'Où la trouver',
          ],
          rows: [
            {
              Plateforme: 'iPhone et iPad',
              'Où la trouver': '[App Store](https://apps.apple.com/fr/app/compactifai/id6749544702) (téléchargement gratuit, iOS ou iPadOS 16.4 ou ultérieur)',
            },
            {
              Plateforme: 'Android',
              'Où la trouver': '[Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo) (téléchargement gratuit, plus de 5 000 téléchargements)',
            },
            {
              Plateforme: 'Site web',
              'Où la trouver': '[Page CompactifAI APP](https://multiversecomputing.com/compactifai-app) (renvoie vers les deux stores)',
            },
            {
              Plateforme: 'Politique de confidentialité',
              'Où la trouver': '[Politique de confidentialité](https://multiversecomputing.com/privacy-policy) (générale, sans date)',
            },
          ],
          note: 'Version testée : 2.10.4 sur Google Play, mise à jour pour la dernière fois le 11 septembre 2026 ; l’App Store affiche la 2.10.0, publiée le 8 septembre 2026. Une recherche par identifiant a trouvé la fiche de l’App Store dans les boutiques des États-Unis, d’Allemagne, de France, d’Espagne, du Japon, de Corée, du Brésil, du Royaume-Uni, du Canada, d’Australie et d’Inde, mais pas dans celles d’Arabie saoudite et de Chine. Le site de l’éditeur invite à le contacter si l’appli n’est pas disponible dans votre région.',
        },
        pricing: {
          id: 'pricing',
          title: 'Tarifs',
          content: [
            '**L’appli se télécharge gratuitement sur les deux stores, et aucun abonnement, palier payant ou achat intégré n’a été trouvé dans les sources vérifiées.**',
            'Les fiches ne disent pas si l’utilisation des modèles hébergés via l’API coûte quelque chose, ni combien.',
          ],
        },
        features: {
          id: 'key-features',
          title: 'Fonctions indiquées par l’éditeur',
          content: [
            '**Tout ce qui suit provient du texte des stores, des notes de version et des annonces ; rien n’a été testé.**',
          ],
          items: [
            '**Accès aux modèles.** Une interface pour les modèles de l’éditeur. La version 2.10.0 a ajouté Quasar 438B, que l’éditeur présente comme son modèle de raisonnement phare, et GLM 5.3, et liste désormais tous les modèles de chat de l’API de Multiverse Computing, les nouveaux étant ajoutés à leur sortie.',
            '**Interface.** Intégration et choix du modèle repensés dans la version 2.10.0, ainsi que des « réponses plus rapides et plus cohérentes ».',
            '**Affirmations de l’éditeur.** L’annonce de mars 2026 indique que la technologie de compression réduit les modèles jusqu’à 95 % avec une perte de précision de 2 à 3 %, et les notes de la 2.10 décrivent Quasar 438B comme « le modèle d’IA européen le mieux classé selon les benchmarks indépendants d’Artificial Analysis ». Ce sont des déclarations de l’éditeur ; PromptQuorum ne les a pas vérifiées.',
          ],
          note: 'La version installée fait foi pour ce qui fonctionne.',
        },
        privacy: {
          id: 'privacy',
          title: 'Confidentialité et flux de données',
          content: [
            '**Les deux stores décrivent la collecte de données différemment.** L’étiquette de confidentialité de l’App Store indique « Aucune donnée collectée ». Le formulaire de sécurité des données de Google Play indique que l’appli peut collecter le nom et l’adresse e-mail (pour les fonctions de l’appli et la gestion du compte) et peut partager des journaux de plantage et une position approximative avec des tiers à des fins d’analyse ; il précise que les données sont chiffrées en transit et que leur suppression peut être demandée.',
            'La politique de confidentialité liée depuis l’App Store est la politique générale de l’entreprise pour son site web et ses applis mobiles ; elle ne décrit pas séparément le flux de données de cette appli, sur l’appareil ou via l’API.',
          ],
          callouts: [
            {
              type: 'note',
              text: 'L’appli est à code fermé : aucune de ces déclarations ne peut être vérifiée dans le code, et PromptQuorum n’a pas inspecté le trafic réseau. Toute personne qui utilise les modèles de l’API doit partir du principe que ses requêtes quittent le téléphone, et vérifier dans l’appli quelles données restent dessus.',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'À qui elle convient',
          items: [
            '**Les utilisateurs de téléphone qui veulent essayer les modèles de Multiverse Computing** dans une seule appli gratuite et en comparer plusieurs.',
            '**Les lecteurs intéressés par la compression de modèles,** spécialité de l’entreprise, qui acceptent que la partie sur l’appareil ne soit pas vérifiée.',
            '**Les personnes qui pourraient avoir besoin d’IA avec une connexion faible,** le cas d’usage cité par l’éditeur, mais seulement après avoir confirmé dans l’appli installée qu’un modèle tourne réellement hors ligne.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Ce que nous n’avons pas pu vérifier',
          items: [
            '**Comportement en conditions réelles.** L’appli n’a pas été installée ; la qualité des réponses, la vitesse, la consommation de batterie et le fonctionnement hors ligne n’ont donc pas été testés.',
            '**Les modèles sur l’appareil dans la version 2.10.** Les fiches ne nomment aucun modèle local, ni taille de téléchargement, ni espace requis, ni appareil minimal.',
            '**Routage et choix du modèle.** Les sources ne disent pas, pour la version 2.10, si l’appli choisit seule entre modèles locaux et modèles de l’API ou si c’est l’utilisateur.',
            '**Comptes.** Le formulaire de Google Play cite le nom et l’e-mail pour la gestion du compte ; l’obligation d’avoir un compte n’est pas précisée.',
            '**Retours indépendants.** La fiche de l’App Store américain n’affiche aucune note ; aucun avis public d’utilisateur sur la version iPhone n’a été trouvé.',
            '**Code source et langues.** Aucun dépôt public n’a été trouvé, et l’App Store indique l’anglais comme seule langue.',
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
              Application: '[LM Mini](/fr/power-local-llm/lm-mini-review)',
              Plateformes: 'iOS, iPadOS, macOS',
              'Prix / licence': 'Gratuit + achats / code fermé',
              'Différence clé': 'Modèles sur l’appareil plus votre propre serveur LM Studio ou Ollama',
            },
            {
              Application: '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
              Plateformes: 'iOS, Android',
              'Prix / licence': 'Gratuit / MIT',
              'Différence clé': 'Chat open source sur l’appareil avec sa propre bibliothèque de modèles',
            },
            {
              Application: '[Private Mind](/fr/power-local-llm/private-mind-review)',
              Plateformes: 'iOS, Android',
              'Prix / licence': 'Gratuit / MIT',
              'Différence clé': 'Chat hors ligne open source avec questions-réponses sur documents sur l’appareil',
            },
            {
              Application: '[Enchanted](/fr/power-local-llm/enchanted-review)',
              Plateformes: 'iOS, macOS',
              'Prix / licence': 'Gratuit / Apache 2.0',
              'Différence clé': 'Client Ollama uniquement, sans modèles propres',
            },
          ],
          note: 'Les informations sur les concurrents changent souvent ; vérifiez le prix, la licence et les plateformes de chaque appli sur sa propre fiche.',
        },
        faq: {
          id: 'faq',
          title: 'Questions fréquentes',
          faqs: [
            {
              q: 'CompactifAI APP est-elle la même chose que l’API CompactifAI ?',
              a: 'Non. L’API est le service développeur distinct de l’éditeur pour les modèles compressés ; l’appli est un client mobile gratuit qui, selon les notes de la 2.10, liste tous les modèles de chat de cette API.',
            },
            {
              q: 'Quelles langues CompactifAI APP prend-elle en charge ?',
              a: 'L’App Store n’indique que l’anglais. Pour Quasar 438B, le texte du store mentionne l’anglais et l’espagnol.',
            },
            {
              q: 'En quoi diffère-t-elle des applis hors ligne open source pour téléphone ?',
              a: 'Elle est à code fermé et construite autour des modèles de l’éditeur, alors que des applis comme PocketPal AI et Private Mind sont open source et permettent de télécharger des modèles depuis des bibliothèques publiques.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Verdict',
          content: 'CompactifAI APP est un client mobile gratuit et mis à jour activement, signé d’une entreprise spécialisée dans les modèles compressés. Ses limites : un code fermé, un texte de store actuel qui décrit des modèles d’API mais pas l’usage hors ligne, un jeu de modèles sur l’appareil non listé et l’absence de tests indépendants. Elle convient aux lecteurs qui veulent essayer les modèles de Multiverse Computing ; ceux qui ont besoin d’une appli open source entièrement sur l’appareil devraient comparer [Private Mind](/fr/power-local-llm/private-mind-review) ou [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[CompactifAI sur l’App Store](https://apps.apple.com/us/app/compactifai/id6749544702) — description, notes de version, étiquette de confidentialité, taille et compatibilité, vérifiés le 24 octobre 2026.',
            '[CompactifAI sur Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo) — description, version, date de mise à jour et nombre de téléchargements, vérifiés le 24 octobre 2026.',
            '[Page de sécurité des données de Google Play](https://play.google.com/store/apps/datasafety?id=com.multiversecomputing.compactifaizoo) — types de données collectées et partagées, vérifiés le 24 octobre 2026.',
            '[Page CompactifAI APP de Multiverse Computing](https://multiversecomputing.com/compactifai-app) — affirmation de l’éditeur sur le hors ligne et mention des régions.',
            '[Annonce de lancement du 3 mars 2026](https://multiversecomputing.com/resources/introducing-compactifai-app-bringing-offline-ai-to-edge-devices) — modes hors ligne et cloud, routage des requêtes et chiffres de compression (déclarations de l’éditeur).',
            '[Article de blog de l’éditeur du 10 novembre 2025](https://multiversecomputing.com/resources/30-000-feet-above-the-cloud-compactifai-s-ai-unplugged-moment) — démonstration avec modèles sur l’appareil et dans le cloud (déclarations de l’éditeur).',
            '[Données de consultation Apple pour CompactifAI](https://itunes.apple.com/lookup?id=6749544702&country=us) — version, dates de publication, taille et appareils pris en charge, vérifiés le 24 octobre 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures complémentaires',
          items: [
            '[Test de LM Mini](/fr/power-local-llm/lm-mini-review) — une appli de chat à code fermé pour iPhone et iPad qui associe modèles sur l’appareil et votre propre serveur.',
            '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat gratuit et open source sur l’appareil pour iOS et Android.',
            '[Test de Private Mind](/fr/power-local-llm/private-mind-review) — une appli de chat hors ligne gratuite, sous licence MIT, pour iPhone et Android.',
            '[Test d’Enchanted](/fr/power-local-llm/enchanted-review) — un client Ollama gratuit, sous licence Apache 2.0, pour iPhone et Mac.',
            '[Les meilleures applis de LLM locaux pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le panorama plus large pour iPhone.',
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
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/compactifai-app-review-hero-ja.webp',
      title: 'CompactifAI APPレビュー:オフラインとクラウドのモデルに対応する無料チャットアプリ',
      seoTitle: 'CompactifAI APPレビュー:オフラインとクラウドのAI',
      intro: 'CompactifAI APPは、スペインに拠点を置き圧縮AIモデルに注力するMultiverse Computingが提供する、iPhone・iPad・Android向けの無料チャットアプリです。開発元によれば、圧縮モデルをインターネットなしで端末上で実行することも、同社のクラウドAPI経由でより大きなモデルを使うこともできます。本レビューは、2026年10月24日に確認したストアの掲載情報、開発元のウェブサイト、公式発表をもとにしています。',
      metaDescription: 'CompactifAI APPレビュー:オフラインとクラウドのモデルに対応した無料のiPhone・Androidチャットアプリ。端末上で動く範囲と未検証の点を解説します。',
      twitterDescription: 'CompactifAI APPレビュー:端末上の圧縮モデルと開発元のクラウドAPIを組み合わせる、無料でソース非公開のチャットアプリ。情報源が確認していること、現在のストア説明に載っていないこと、未検証の点を解説します。',
      audience: 'CompactifAI APPが本当にオフラインで動くのか、どこまでがクラウドで動くのか、情報源が何を確認し何を確認していないのかを知りたいiPhone・iPad・Androidユーザー向けです。',
      readTime: '6分で読める',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'CompactifAI APPレビュー',
      targetKeywords: [
        'compactifai app レビュー',
        'compactifai app',
        'multiverse computing アプリ',
        'オフライン ai アプリ iphone',
        'スマホ 圧縮 aiモデル',
        'quasar 438b app',
        'compactifai app vs pocketpal',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Android',
      ],
      leadAnswerBlock: '**CompactifAI APPは、Multiverse Computingが提供する無料でソース非公開のチャットアプリで、開発元によれば、端末上の圧縮モデルと自社APIのクラウドモデルを組み合わせています。** **現在のストア説明(バージョン2.10)はAPI経由のモデルしか記載していないため、今日スマートフォン上で何が動くのかは未検証です。**',
      quickAnswerTop: {
        ja: {
          question: 'CompactifAI APPでのチャットはスマートフォン内にとどまりますか?',
          answer: '開発元によれば一部のみです。端末上のモデルはオフラインで動作し、APIモデルはMultiverse Computingのサーバーにリクエストを送ります。App Storeの表示は「データ収集なし」、Google Playは一部の収集データを記載しており、いずれも検証していません。',
          bullets: [
            '[App Store](https://apps.apple.com/jp/app/compactifai/id6749544702)と[Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo)で無料です。',
            'バージョン2.10のリリースノートには、APIモデルとしてQuasar 438BとGLM 5.3が挙がっています。',
            '提供地域は限られており、開発元のサイトは、自国で見つからない場合は問い合わせるよう案内しています。',
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
          label: 'CompactifAI APPとは?',
          anchor: 'what-is-compactifai-app',
        },
        {
          label: 'チャットが動く場所',
          anchor: 'where-it-runs',
        },
        {
          label: '入手方法',
          anchor: 'get-it',
        },
        {
          label: '料金',
          anchor: 'pricing',
        },
        {
          label: '開発元が挙げている機能',
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
              text: 'CompactifAI APPは、Multiverse ComputingのiPhone・iPad・Android向け無料・ソース非公開のチャットアプリで、オフライン用の圧縮モデルと、開発元のクラウドAPI経由のより大きなモデルを提供します。',
            },
            {
              type: 'plain-terms',
              text: 'App StoreまたはGoogle Playからインストールし、モデルを選びます。端末上で動作する想定のモデルもあれば、Multiverse Computingがホストし、インターネット接続が必要なモデルもあります。',
            },
          ],
          items: [
            '開発元:スペインのドノスティアに本社を置くMultiverse Computing。App Storeの初回リリースは2026年3月2日で、ローンチの発表は2026年3月3日付です。',
            '利用状況:Google Playのダウンロード数は5,000以上。米国App Storeの掲載にはまだ評価がありません。',
            '対応プラットフォーム:iPhoneとiPad(iOS・iPadOS 16.4以降)およびAndroid。App Storeの対応言語は英語のみです。',
            'ウェブサイト:開発元の[CompactifAI APPページ](https://multiversecomputing.com/compactifai-app)から両ストアへリンクしています。',
          ],
          callouts: [
            {
              type: 'note',
              text: '本レビューは、2026年10月24日に確認したストアの掲載情報、Appleの検索データ、開発元のウェブサイトと公開済みの発表に基づいています。インストール、実機での使用、通信の解析、ベンチマークは行っていません。',
            },
          ],
        },
        overview: {
          id: 'what-is-compactifai-app',
          title: 'CompactifAI APPとは?',
          content: [
            '**CompactifAI APPは、Multiverse Computing自社のモデルを試せるモバイル向けチャットアプリです。** ストアの説明によれば、開発元のモデル群を「シンプルで直感的な1つのインターフェース」にまとめ、モデルを比較してタスクごとに選べるようにしています。App Storeの販売元はMULTIVERSE COMPUTING SL.、タイトルは「CompactifAI」です。',
            'CompactifAIは、同社のモデル圧縮技術と、別サービスのクラウドAPIの名称でもあります。このアプリは3つ目の製品で、そのAPIで利用できるモデルを一覧表示します。',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'チャットが動く場所',
          content: [
            '**CompactifAI APPは純粋なローカル型ではなくハイブリッド型です。開発元によれば、チャットがどこで動くかは使うモデルによって決まります。**',
          ],
          items: [
            '**スマートフォン上(開発元の説明)。** ウェブサイトは、モデルが「インターネット接続がなくても、端末上でローカルに動作するよう最適化されている」としており、2026年3月の発表は、ユーザーがモデルをダウンロードして完全オフラインで使えるとしています。2025年11月の開発元ブログ記事は、デモで端末上のLlama 3.1 8B Slimモデルを紹介しています。バージョン2.10で端末上にあるモデルの一覧は見つかりませんでした。',
            '**クラウド上。** 発表では、ユーザーはAPI経由でクラウドモデルに切り替えられるとしています。バージョン2.10のストア説明は、アプリが「当社のAPI経由」でMultiverse Computingのモデルを利用できるとし、Quasar 438BとGLM 5.3を挙げています。これらのモデルへのリクエストは、開発元のAPIに送られます。',
            '**ルーティング。** 発表は、端末上のモデルとAPIモデルの間で「スマートなクエリルーティング」を行うと説明しています。2.10のストア説明はモデルを選ぶことには触れていますが、自動ルーティングがまだあるかどうかは記載していません。',
          ],
          note: '現在のApp StoreとGoogle Playの説明には、オフライン利用への言及が一切ありません。オフラインに関する記述は開発元のウェブサイトと発表によるもので、本レビューはアプリをインストールして確かめてはいません。',
        },
        getIt: {
          id: 'get-it',
          title: '入手方法',
          columns: [
            'プラットフォーム',
            '入手先',
          ],
          rows: [
            {
              'プラットフォーム': 'iPhone・iPad',
              '入手先': '[App Store](https://apps.apple.com/jp/app/compactifai/id6749544702)(無料ダウンロード、iOS・iPadOS 16.4以降)',
            },
            {
              'プラットフォーム': 'Android',
              '入手先': '[Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo)(無料ダウンロード、5,000以上のダウンロード)',
            },
            {
              'プラットフォーム': 'ウェブサイト',
              '入手先': '[CompactifAI APPページ](https://multiversecomputing.com/compactifai-app)(両ストアへのリンクあり)',
            },
            {
              'プラットフォーム': 'プライバシーポリシー',
              '入手先': '[プライバシーポリシー](https://multiversecomputing.com/privacy-policy)(一般的な方針、日付表示なし)',
            },
          ],
          note: '確認したバージョン:Google Playで2.10.4、最終更新は2026年9月11日。App Storeは2.10.0で、2026年9月8日にリリースされています。アプリIDでの検索では、App Storeの掲載は米国、ドイツ、フランス、スペイン、日本、韓国、ブラジル、英国、カナダ、オーストラリア、インドのストアで見つかりましたが、サウジアラビアと中国のストアでは見つかりませんでした。開発元のサイトは、お住まいの地域でアプリを利用できない場合は問い合わせるよう案内しています。',
        },
        pricing: {
          id: 'pricing',
          title: '料金',
          content: [
            '**アプリは両ストアで無料でダウンロードでき、確認した情報源にはサブスクリプション、有料プラン、アプリ内課金は見当たりませんでした。**',
            'API上でホストされるモデルの利用に費用がかかるかどうか、かかる場合の金額は、掲載情報には記載がありません。',
          ],
        },
        features: {
          id: 'key-features',
          title: '開発元が挙げている機能',
          content: [
            '**以下はすべてストアの説明、リリースノート、発表に基づくもので、いずれも検証していません。**',
          ],
          items: [
            '**モデルへのアクセス。** 開発元のモデルを1つのインターフェースで利用できます。バージョン2.10.0では、開発元が主力の推論モデルと呼ぶQuasar 438BとGLM 5.3が追加され、Multiverse ComputingのAPIにあるすべてのチャットモデルが一覧に表示され、新しいモデルはリリースされ次第追加されます。',
            '**インターフェース。** バージョン2.10.0でオンボーディングとモデル選択が刷新され、「より高速で一貫した応答」も挙げられています。',
            '**開発元の主張。** 2026年3月の発表は、圧縮技術によりモデルを最大95%小さくでき、精度の低下は2〜3%としています。また2.10のリリースノートは、Quasar 438Bを「Artificial Analysisの独立ベンチマークで欧州最高スコアのAIモデル」と呼んでいます。いずれも開発元の主張であり、PromptQuorumは確認していません。',
          ],
          note: '実際に何が動くかは、インストールしたビルドが最終的な判断材料です。',
        },
        privacy: {
          id: 'privacy',
          title: 'プライバシーとデータの流れ',
          content: [
            '**2つのストアでデータ収集の説明が異なります。** App Storeのプライバシー表示は「データ収集なし」です。Google Playのデータセーフティ欄は、アプリが名前とメールアドレスを収集する場合があり(アプリの機能とアカウント管理のため)、クラッシュログと大まかな位置情報を分析目的で第三者と共有する場合があるとしています。また、データは転送中に暗号化され、削除を依頼できるとも記載しています。',
            'App Storeからリンクされているプライバシーポリシーは、同社のウェブサイトとモバイルアプリを対象とする一般的な方針で、このアプリの端末上またはAPI経由のデータの流れを個別には説明していません。',
          ],
          callouts: [
            {
              type: 'note',
              text: 'このアプリはソース非公開のため、これらの記述をコードで確認することはできず、PromptQuorumは通信の解析も行っていません。APIモデルを使う場合は、入力内容がスマートフォンの外に出るものと考え、端末内にとどまるデータをアプリ内で確認してください。',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: '向いている人',
          items: [
            '**Multiverse Computingのモデルを試したいスマートフォンユーザー。** 1つの無料アプリで複数のモデルを比較できます。',
            '**同社の専門分野であるモデル圧縮に関心がある読者。** 端末上の部分が未検証である点は受け入れる必要があります。',
            '**通信環境が弱い場所でAIが必要になりそうな人。** 開発元が挙げる利用場面ですが、インストール後のアプリでモデルが本当にオフラインで動くことを確認してからにしてください。',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: '確認できなかった点',
          items: [
            '**実機での挙動。** アプリをインストールしていないため、回答の質、速度、バッテリー消費、オフライン動作は検証していません。',
            '**バージョン2.10の端末上のモデル。** 掲載情報には、ローカルモデル名、ダウンロードサイズ、必要な空き容量、対応端末の要件の記載がありません。',
            '**ルーティングとモデルの選択。** バージョン2.10で、アプリがローカルモデルとAPIモデルを自動で選ぶのか、ユーザーが選ぶのかは記載がありません。',
            '**アカウント。** Google Playの記載は、アカウント管理のために名前とメールアドレスを挙げていますが、アカウントが必須かどうかは記載がありません。',
            '**第三者の評価。** 米国App Storeの掲載には評価がなく、iPhone版に関する公開のユーザーレビューは見つかりませんでした。',
            '**ソースコードと言語。** 公開リポジトリは見つからず、App Storeの対応言語は英語のみです。',
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
              'アプリ': '[LM Mini](/ja/power-local-llm/lm-mini-review)',
              'プラットフォーム': 'iOS・iPadOS・macOS',
              '価格 / ライセンス': '無料+課金 / ソース非公開',
              '主な違い': '端末上のモデルに加え、自分のLM StudioやOllamaサーバーにも接続',
            },
            {
              'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
              'プラットフォーム': 'iOS・Android',
              '価格 / ライセンス': '無料 / MIT',
              '主な違い': '独自のモデルライブラリを持つオープンソースの端末内チャット',
            },
            {
              'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
              'プラットフォーム': 'iOS・Android',
              '価格 / ライセンス': '無料 / MIT',
              '主な違い': '端末内の文書Q&Aを備えたオープンソースのオフラインチャット',
            },
            {
              'アプリ': '[Enchanted](/ja/power-local-llm/enchanted-review)',
              'プラットフォーム': 'iOS・macOS',
              '価格 / ライセンス': '無料 / Apache 2.0',
              '主な違い': '独自モデルを持たないOllama専用クライアント',
            },
          ],
          note: '競合の情報は頻繁に変わります。各アプリの最新の価格、ライセンス、対応プラットフォームは、それぞれの掲載ページで確認してください。',
        },
        faq: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            {
              q: 'CompactifAI APPはCompactifAI APIと同じものですか?',
              a: 'いいえ。APIは開発元が提供する、圧縮モデル向けの別の開発者向けサービスです。アプリは無料のモバイルクライアントで、2.10のリリースノートによれば、そのAPIのすべてのチャットモデルを一覧表示します。',
            },
            {
              q: 'CompactifAI APPはどの言語に対応していますか?',
              a: 'App Storeの対応言語は英語のみです。Quasar 438Bについては、ストアの説明が英語とスペイン語に触れています。',
            },
            {
              q: 'オープンソースのオフライン用スマホアプリとはどう違いますか?',
              a: 'ソース非公開で、開発元自身のモデルを中心に作られています。一方、PocketPal AIやPrivate Mindはオープンソースで、公開ライブラリからモデルをダウンロードできます。',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: '結論',
          content: 'CompactifAI APPは、圧縮モデルを専門とする企業による、活発に更新されている無料のスマートフォン用クライアントです。限界は、ソース非公開であること、現在のストア説明がAPIモデルには触れてもオフライン利用には触れていないこと、端末上のモデルが一覧化されていないこと、第三者による検証がないことです。Multiverse Computingのモデルを試したい読者に向いています。端末内で完結するオープンソースのアプリが必要な場合は、[Private Mind](/ja/power-local-llm/private-mind-review)や[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)を比較してください。',
        },
        sources: {
          id: 'sources',
          title: '出典',
          items: [
            '[App StoreのCompactifAI](https://apps.apple.com/us/app/compactifai/id6749544702) — 説明、リリースノート、プライバシー表示、サイズ、互換性。2026年10月24日確認。',
            '[Google PlayのCompactifAI](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo) — 説明、バージョン、更新日、ダウンロード数。2026年10月24日確認。',
            '[Google Playのデータセーフティページ](https://play.google.com/store/apps/datasafety?id=com.multiversecomputing.compactifaizoo) — 収集・共有されるデータの種類。2026年10月24日確認。',
            '[Multiverse ComputingのCompactifAI APPページ](https://multiversecomputing.com/compactifai-app) — 開発元のオフラインに関する記述と地域に関する案内。',
            '[ローンチの発表(2026年3月3日)](https://multiversecomputing.com/resources/introducing-compactifai-app-bringing-offline-ai-to-edge-devices) — オフラインとクラウドのモード、クエリルーティング、圧縮の数値(開発元の主張)。',
            '[開発元のブログ記事(2025年11月10日)](https://multiversecomputing.com/resources/30-000-feet-above-the-cloud-compactifai-s-ai-unplugged-moment) — 端末上モデルとクラウドモデルのデモ(開発元の主張)。',
            '[CompactifAIに関するAppleの検索データ](https://itunes.apple.com/lookup?id=6749544702&country=us) — バージョン、リリース日、サイズ、対応端末。2026年10月24日確認。',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '関連記事',
          items: [
            '[LM Miniレビュー](/ja/power-local-llm/lm-mini-review) — 端末上のモデルと自分のサーバーを組み合わせる、ソース非公開のiPhone・iPad向けチャットアプリ。',
            '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けの、無料でオープンソースの端末内チャットクライアント。',
            '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — iPhoneとAndroid向けの、MITライセンスの無料オフラインチャットアプリ。',
            '[Enchantedレビュー](/ja/power-local-llm/enchanted-review) — iPhoneとMac向けの、Apache 2.0ライセンスの無料Ollamaクライアント。',
            '[iPhone向けローカルLLMアプリのおすすめ(2026年版)](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone向けのより幅広い比較。',
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
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/compactifai-app-review-hero-pt.webp',
      title: 'Análise do CompactifAI APP: app de chat gratuito com modelos offline e na nuvem',
      seoTitle: 'Análise do CompactifAI APP: IA offline e na nuvem',
      intro: 'O CompactifAI APP é um app de chat gratuito para iPhone, iPad e Android da Multiverse Computing, empresa sediada na Espanha e focada em modelos de IA comprimidos. Segundo o fabricante, ele pode executar modelos comprimidos no aparelho sem internet ou usar modelos maiores pela API em nuvem da empresa. Esta análise reflete as páginas das lojas, o site do fabricante e seus comunicados, conferidos em 24 de outubro de 2026.',
      metaDescription: 'Análise do CompactifAI APP: app de chat gratuito para iPhone e Android com modelos offline e na nuvem. O que roda no celular e o que não foi verificado.',
      twitterDescription: 'Análise do CompactifAI APP: um app de chat gratuito e de código fechado que combina modelos comprimidos no aparelho com a API em nuvem do fabricante. O que as fontes confirmam, o que o texto atual das lojas omite e o que não foi verificado.',
      audience: 'Usuários de iPhone, iPad e Android que querem saber se o CompactifAI APP realmente funciona offline, quais partes rodam na nuvem e o que as fontes confirmam e o que não confirmam.',
      readTime: '6 min de leitura',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'análise do CompactifAI APP',
      targetKeywords: [
        'compactifai app análise',
        'compactifai app',
        'multiverse computing app',
        'app de ia offline iphone',
        'modelos de ia comprimidos no celular',
        'quasar 438b app',
        'compactifai app vs pocketpal',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Android',
      ],
      leadAnswerBlock: '**O CompactifAI APP é um app de chat gratuito e de código fechado da Multiverse Computing que, segundo o fabricante, combina modelos comprimidos no aparelho com modelos na nuvem da própria API.** **O texto atual das lojas (versão 2.10) descreve apenas os modelos da API; por isso, o que roda hoje no celular não foi verificado.**',
      quickAnswerTop: {
        pt: {
          question: 'O CompactifAI APP mantém meus chats no meu celular?',
          answer: 'Só em parte, segundo o fabricante: os modelos no aparelho funcionam offline, enquanto os modelos da API enviam as solicitações aos servidores da Multiverse Computing. O rótulo da App Store diz «Dados não coletados», o Google Play lista alguns dados coletados e nada disso foi testado.',
          bullets: [
            'Grátis na [App Store](https://apps.apple.com/br/app/compactifai/id6749544702) e no [Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo).',
            'As notas da versão 2.10 citam dois modelos da API: Quasar 438B e GLM 5.3.',
            'A disponibilidade é limitada por região; o site do fabricante orienta a entrar em contato se o app não aparecer no seu país.',
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
          label: 'O que é o CompactifAI APP?',
          anchor: 'what-is-compactifai-app',
        },
        {
          label: 'Onde seus chats rodam',
          anchor: 'where-it-runs',
        },
        {
          label: 'Como obter',
          anchor: 'get-it',
        },
        {
          label: 'Preços',
          anchor: 'pricing',
        },
        {
          label: 'Recursos indicados pelo fabricante',
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
              text: 'O CompactifAI APP é um app de chat gratuito e de código fechado para iPhone, iPad e Android da Multiverse Computing, que oferece modelos comprimidos para uso offline e modelos maiores pela API em nuvem do fabricante.',
            },
            {
              type: 'plain-terms',
              text: 'Você instala o app pela App Store ou pelo Google Play e escolhe um modelo. Alguns modelos foram feitos para rodar no próprio celular; outros são hospedados pela Multiverse Computing e exigem conexão com a internet.',
            },
          ],
          items: [
            'Fabricante: Multiverse Computing, com sede em Donostia, Espanha; a App Store mostra um primeiro lançamento em 2 de março de 2026, e o anúncio de lançamento é de 3 de março de 2026.',
            'Alcance: o Google Play mostra mais de 5.000 downloads; a página da App Store dos EUA ainda não mostra avaliações.',
            'Plataformas: iPhone e iPad (iOS e iPadOS 16.4 ou posterior) e Android; a App Store lista o inglês como único idioma.',
            'Site: a [página do CompactifAI APP](https://multiversecomputing.com/compactifai-app) do fabricante tem links para as duas lojas.',
          ],
          callouts: [
            {
              type: 'note',
              text: 'Esta análise se baseia nas páginas das lojas, nos dados de consulta da Apple, no site do fabricante e em seus comunicados publicados, conferidos em 24 de outubro de 2026. Não houve instalação, uso prático, inspeção de rede nem benchmarks.',
            },
          ],
        },
        overview: {
          id: 'what-is-compactifai-app',
          title: 'O que é o CompactifAI APP?',
          content: [
            '**O CompactifAI APP é o app de chat móvel da Multiverse Computing para experimentar os modelos da própria empresa.** Segundo o texto da loja, ele reúne o portfólio de modelos do fabricante «em uma interface simples e intuitiva» para que os usuários comparem os modelos e escolham um por tarefa. A App Store mostra como vendedor a MULTIVERSE COMPUTING SL. e como título «CompactifAI».',
            'CompactifAI também é o nome da tecnologia de compressão de modelos da empresa e de sua API em nuvem, que é um serviço separado; o app é um terceiro produto que lista modelos disponíveis nessa API.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'Onde seus chats rodam',
          content: [
            '**O CompactifAI APP é híbrido, não puramente local: segundo o fabricante, onde um chat roda depende do modelo que você usa.**',
          ],
          items: [
            '**No celular (declarações do fabricante).** O site diz que os modelos são «otimizados para rodar localmente no seu aparelho — mesmo sem conexão com a internet», e o anúncio de março de 2026 diz que os usuários podem baixar modelos e trabalhar totalmente offline. Um post do blog do fabricante de novembro de 2025 descreve, em uma demonstração, um modelo Llama 3.1 8B Slim no aparelho. Não foi encontrada uma lista dos modelos no aparelho da versão 2.10.',
            '**Na nuvem.** O anúncio diz que os usuários podem alternar para modelos na nuvem pela API, e o texto da loja da versão 2.10 diz que o app dá acesso aos modelos da Multiverse Computing «por meio da nossa API», citando Quasar 438B e GLM 5.3. As solicitações a esses modelos vão para a API do fabricante.',
            '**Roteamento.** O anúncio descreve um «roteamento inteligente de consultas» entre modelos no aparelho e modelos da API. O texto da loja da 2.10 fala em escolher entre modelos e não diz se o roteamento automático ainda existe.',
          ],
          note: 'As descrições atuais da App Store e do Google Play não mencionam o uso offline. As afirmações sobre o uso offline vêm do site e dos comunicados do fabricante, e esta análise não instalou o app para testá-las.',
        },
        getIt: {
          id: 'get-it',
          title: 'Como obter',
          columns: [
            'Plataforma',
            'Onde obter',
          ],
          rows: [
            {
              Plataforma: 'iPhone e iPad',
              'Onde obter': '[App Store](https://apps.apple.com/br/app/compactifai/id6749544702) (download gratuito, iOS ou iPadOS 16.4 ou posterior)',
            },
            {
              Plataforma: 'Android',
              'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo) (download gratuito, mais de 5.000 downloads)',
            },
            {
              Plataforma: 'Site',
              'Onde obter': '[Página do CompactifAI APP](https://multiversecomputing.com/compactifai-app) (com links para as duas lojas)',
            },
            {
              Plataforma: 'Política de privacidade',
              'Onde obter': '[Política de privacidade](https://multiversecomputing.com/privacy-policy) (geral, sem data)',
            },
          ],
          note: 'Versão analisada: 2.10.4 no Google Play, atualizada pela última vez em 11 de setembro de 2026; a App Store mostra a 2.10.0, lançada em 8 de setembro de 2026. Uma consulta pelo ID do app encontrou a página da App Store nas lojas dos EUA, Alemanha, França, Espanha, Japão, Coreia, Brasil, Reino Unido, Canadá, Austrália e Índia, mas não nas da Arábia Saudita e da China. O site do fabricante orienta a entrar em contato se o app não estiver disponível na sua região.',
        },
        pricing: {
          id: 'pricing',
          title: 'Preços',
          content: [
            '**O app é um download gratuito nas duas lojas, e nenhuma assinatura, plano pago ou compra dentro do app foi encontrado nas fontes consultadas.**',
            'As páginas não dizem se usar os modelos hospedados na API tem algum custo nem qual.',
          ],
        },
        features: {
          id: 'key-features',
          title: 'Recursos indicados pelo fabricante',
          content: [
            '**Tudo o que segue vem do texto das lojas, das notas de versão e dos comunicados; nada foi testado.**',
          ],
          items: [
            '**Acesso a modelos.** Uma interface para os modelos do fabricante. A versão 2.10.0 incluiu o Quasar 438B, que o fabricante chama de seu modelo de raciocínio principal, e o GLM 5.3, e agora lista todos os modelos de chat da API da Multiverse Computing, com os novos adicionados conforme são lançados.',
            '**Interface.** Integração inicial e seleção de modelos redesenhadas na versão 2.10.0, além de «respostas mais rápidas e consistentes».',
            '**Afirmações do fabricante.** O anúncio de março de 2026 diz que a tecnologia de compressão reduz modelos em até 95 % com perda de precisão de 2-3 %, e as notas da 2.10 chamam o Quasar 438B de «o modelo de IA mais bem pontuado da Europa segundo benchmarks independentes da Artificial Analysis». Ambas são declarações do fabricante; a PromptQuorum não as verificou.',
          ],
          note: 'A versão instalada é a palavra final sobre o que funciona.',
        },
        privacy: {
          id: 'privacy',
          title: 'Privacidade e fluxo de dados',
          content: [
            '**As duas lojas descrevem a coleta de dados de forma diferente.** O rótulo de privacidade da App Store diz «Dados não coletados». O formulário de segurança de dados do Google Play diz que o app pode coletar nome e e-mail (para as funções do app e a gestão da conta) e pode compartilhar registros de falhas e localização aproximada com terceiros para análises; acrescenta que os dados são criptografados em trânsito e que a exclusão pode ser solicitada.',
            'A política de privacidade ligada pela App Store é a política geral da empresa para o site e os apps móveis e não descreve separadamente o fluxo de dados deste app, seja no aparelho ou pela API.',
          ],
          callouts: [
            {
              type: 'note',
              text: 'O app é de código fechado, então nenhuma dessas declarações pode ser verificada no código, e a PromptQuorum não inspecionou o tráfego de rede. Quem usa os modelos da API deve presumir que as consultas saem do celular e conferir no app quais dados ficam nele.',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Para quem é indicado',
          items: [
            '**Usuários de celular que querem experimentar os modelos da Multiverse Computing** em um único app gratuito e comparar vários.',
            '**Leitores interessados em compressão de modelos,** a especialidade da empresa, que aceitam que a parte no aparelho não foi verificada.',
            '**Pessoas que podem precisar de IA com conexão fraca,** o caso de uso citado pelo fabricante, mas só depois de confirmar no app instalado que um modelo realmente roda offline.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'O que não conseguimos verificar',
          items: [
            '**Comportamento na prática.** O app não foi instalado; por isso, qualidade das respostas, velocidade, consumo de bateria e funcionamento offline não foram testados.',
            '**Os modelos no aparelho da versão 2.10.** As páginas não citam nenhum modelo local, tamanho de download, espaço necessário ou requisito de aparelho.',
            '**Roteamento e escolha de modelo.** Para a versão 2.10, não se diz se o app escolhe sozinho entre modelos locais e da API ou se é o usuário.',
            '**Contas.** O formulário do Google Play cita nome e e-mail para a gestão da conta; não se diz se uma conta é obrigatória.',
            '**Opiniões independentes.** A página da App Store dos EUA não mostra avaliações, e por isso não foram encontrados relatos públicos de usuários sobre a versão para iPhone.',
            '**Código-fonte e idiomas.** Nenhum repositório público foi encontrado, e a App Store lista o inglês como único idioma.',
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
              App: '[LM Mini](/pt/power-local-llm/lm-mini-review)',
              Plataformas: 'iOS, iPadOS, macOS',
              'Preço / licença': 'Grátis + compras / código fechado',
              'Diferença principal': 'Modelos no aparelho mais seu próprio servidor LM Studio ou Ollama',
            },
            {
              App: '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
              Plataformas: 'iOS, Android',
              'Preço / licença': 'Grátis / MIT',
              'Diferença principal': 'Chat de código aberto no aparelho com biblioteca própria de modelos',
            },
            {
              App: '[Private Mind](/pt/power-local-llm/private-mind-review)',
              Plataformas: 'iOS, Android',
              'Preço / licença': 'Grátis / MIT',
              'Diferença principal': 'Chat offline de código aberto com perguntas sobre documentos no aparelho',
            },
            {
              App: '[Enchanted](/pt/power-local-llm/enchanted-review)',
              Plataformas: 'iOS, macOS',
              'Preço / licença': 'Grátis / Apache 2.0',
              'Diferença principal': 'Cliente apenas para Ollama, sem modelos próprios',
            },
          ],
          note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais de cada app na própria página.',
        },
        faq: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            {
              q: 'O CompactifAI APP é o mesmo que a API do CompactifAI?',
              a: 'Não. A API é o serviço separado do fabricante para desenvolvedores, voltado a modelos comprimidos; o app é um cliente móvel gratuito que, segundo as notas da 2.10, lista todos os modelos de chat dessa API.',
            },
            {
              q: 'Quais idiomas o CompactifAI APP aceita?',
              a: 'A App Store lista apenas o inglês. Para o Quasar 438B, o texto da loja menciona inglês e espanhol.',
            },
            {
              q: 'Em que ele difere dos apps offline de código aberto para celular?',
              a: 'Ele é de código fechado e gira em torno dos modelos do próprio fabricante, enquanto apps como PocketPal AI e Private Mind são de código aberto e permitem baixar modelos de bibliotecas públicas.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Veredito',
          content: 'O CompactifAI APP é um cliente móvel gratuito e atualizado com frequência, de uma empresa especializada em modelos comprimidos. Seus limites são o código fechado, um texto atual das lojas que descreve modelos de API, mas não o uso offline, um conjunto de modelos no aparelho sem lista e a falta de testes independentes. Serve para quem quer experimentar os modelos da Multiverse Computing; quem precisa de um app de código aberto que funcione totalmente no aparelho deve comparar o [Private Mind](/pt/power-local-llm/private-mind-review) ou o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
        },
        sources: {
          id: 'sources',
          title: 'Fontes',
          items: [
            '[CompactifAI na App Store](https://apps.apple.com/us/app/compactifai/id6749544702) — descrição, notas de versão, rótulo de privacidade, tamanho e compatibilidade, conferidos em 24 de outubro de 2026.',
            '[CompactifAI no Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo) — descrição, versão, data de atualização e número de downloads, conferidos em 24 de outubro de 2026.',
            '[Página de segurança dos dados do Google Play](https://play.google.com/store/apps/datasafety?id=com.multiversecomputing.compactifaizoo) — tipos de dados coletados e compartilhados, conferidos em 24 de outubro de 2026.',
            '[Página do CompactifAI APP da Multiverse Computing](https://multiversecomputing.com/compactifai-app) — afirmação do fabricante sobre o uso offline e aviso sobre regiões.',
            '[Anúncio de lançamento de 3 de março de 2026](https://multiversecomputing.com/resources/introducing-compactifai-app-bringing-offline-ai-to-edge-devices) — modos offline e na nuvem, roteamento de consultas e números de compressão (declarações do fabricante).',
            '[Post do blog do fabricante de 10 de novembro de 2025](https://multiversecomputing.com/resources/30-000-feet-above-the-cloud-compactifai-s-ai-unplugged-moment) — demonstração com modelos no aparelho e na nuvem (declarações do fabricante).',
            '[Dados de consulta da Apple sobre o CompactifAI](https://itunes.apple.com/lookup?id=6749544702&country=us) — versão, datas de lançamento, tamanho e aparelhos compatíveis, conferidos em 24 de outubro de 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Leituras relacionadas',
          items: [
            '[Análise do LM Mini](/pt/power-local-llm/lm-mini-review) — um app de chat de código fechado para iPhone e iPad que combina modelos no aparelho com o seu próprio servidor.',
            '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat gratuito e de código aberto no aparelho para iOS e Android.',
            '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline gratuito, com licença MIT, para iPhone e Android.',
            '[Análise do Enchanted](/pt/power-local-llm/enchanted-review) — um cliente Ollama gratuito, com licença Apache 2.0, para iPhone e Mac.',
            '[Melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — a visão geral mais ampla para iPhone.',
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
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/compactifai-app-review-hero-ar.webp',
      title: 'مراجعة CompactifAI APP: تطبيق دردشة مجاني بنماذج دون اتصال وسحابية',
      seoTitle: 'مراجعة CompactifAI APP: ذكاء اصطناعي دون اتصال وسحابي',
      intro: 'CompactifAI APP تطبيق دردشة مجاني لأجهزة iPhone وiPad وAndroid من Multiverse Computing، وهي شركة مقرها إسبانيا تركّز على نماذج الذكاء الاصطناعي المضغوطة. وبحسب الشركة المصنّعة، يمكنه تشغيل نماذج مضغوطة على الجهاز دون إنترنت أو استخدام نماذج أكبر عبر واجهة API السحابية للشركة. تعكس هذه المراجعة صفحات المتاجر وموقع الشركة المصنّعة وإعلاناتها، كما جرى التحقق منها في 24 أكتوبر 2026.',
      metaDescription: 'مراجعة CompactifAI APP: تطبيق دردشة مجاني لـ iPhone وAndroid بنماذج دون اتصال وسحابية. ما الذي يعمل على الهاتف وما الذي لم يُتحقق منه.',
      twitterDescription: 'مراجعة CompactifAI APP: تطبيق دردشة مجاني ومغلق المصدر يجمع نماذج مضغوطة على الجهاز مع واجهة API السحابية للشركة. ما تؤكده المصادر وما يغفله نص المتجر الحالي وما لم يُتحقق منه.',
      audience: 'مستخدمو iPhone وiPad وAndroid الذين يريدون معرفة هل يعمل CompactifAI APP فعلًا دون اتصال، وأي أجزائه تعمل في السحابة، وما الذي تؤكده المصادر وما الذي لا تؤكده.',
      readTime: '6 دقائق للقراءة',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'مراجعة CompactifAI APP',
      targetKeywords: [
        'مراجعة compactifai app',
        'compactifai app',
        'تطبيق multiverse computing',
        'تطبيق ذكاء اصطناعي دون اتصال iphone',
        'نماذج ذكاء اصطناعي مضغوطة على الهاتف',
        'quasar 438b app',
        'compactifai app vs pocketpal',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Android',
      ],
      leadAnswerBlock: '**CompactifAI APP تطبيق دردشة مجاني ومغلق المصدر من Multiverse Computing، يجمع بحسب الشركة المصنّعة بين نماذج مضغوطة على الجهاز ونماذج سحابية من واجهة API الخاصة بها.** **يصف نص المتجر الحالي (الإصدار 2.10) نماذج API فقط، لذا لم يُتحقق مما يعمل على الهاتف اليوم.**',
      quickAnswerTop: {
        ar: {
          question: 'هل يُبقي CompactifAI APP محادثاتي على هاتفي؟',
          answer: 'بحسب الشركة المصنّعة، جزئيًا فقط: النماذج على الجهاز تعمل دون اتصال، بينما ترسل نماذج API الطلبات إلى خوادم Multiverse Computing. تقول بطاقة App Store «لم تُجمع بيانات»، وتسرد Google Play بعض البيانات المجمَّعة، ولم يُختبر أي من ذلك.',
          bullets: [
            'مجاني على [App Store](https://apps.apple.com/us/app/compactifai/id6749544702) و[Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo).',
            'تذكر ملاحظات الإصدار 2.10 نموذجَي API هما Quasar 438B وGLM 5.3.',
            'التوفر محدود بحسب المنطقة؛ ويدعو موقع الشركة المصنّعة إلى التواصل معها إذا لم يظهر التطبيق في بلدك.',
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
          label: 'ما هو CompactifAI APP؟',
          anchor: 'what-is-compactifai-app',
        },
        {
          label: 'أين تعمل محادثاتك',
          anchor: 'where-it-runs',
        },
        {
          label: 'كيف تحصل عليه',
          anchor: 'get-it',
        },
        {
          label: 'الأسعار',
          anchor: 'pricing',
        },
        {
          label: 'الميزات التي تذكرها الشركة المصنّعة',
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
              text: 'CompactifAI APP تطبيق دردشة مجاني ومغلق المصدر لأجهزة iPhone وiPad وAndroid من Multiverse Computing، يقدّم نماذج مضغوطة للاستخدام دون اتصال ونماذج أكبر عبر واجهة API السحابية للشركة المصنّعة.',
            },
            {
              type: 'plain-terms',
              text: 'تثبّت التطبيق من App Store أو Google Play ثم تختار نموذجًا. بعض النماذج مصمّمة للعمل على الهاتف نفسه، وأخرى تستضيفها Multiverse Computing وتحتاج إلى اتصال بالإنترنت.',
            },
          ],
          items: [
            'الشركة المصنّعة: Multiverse Computing ومقرها الرئيسي في دونوستيا بإسبانيا؛ يعرض App Store أول إصدار في 2 مارس 2026، وتاريخ إعلان الإطلاق 3 مارس 2026.',
            'الانتشار: تعرض Google Play أكثر من 5,000 تنزيل؛ ولا تعرض صفحة App Store الأمريكي أي تقييمات بعد.',
            'المنصات: iPhone وiPad (iOS وiPadOS 16.4 أو أحدث) وAndroid؛ ويذكر App Store الإنجليزية لغةً وحيدة.',
            'الموقع: [صفحة CompactifAI APP](https://multiversecomputing.com/compactifai-app) لدى الشركة المصنّعة تضع روابط المتجرين.',
          ],
          callouts: [
            {
              type: 'note',
              text: 'تستند هذه المراجعة إلى صفحات المتاجر وبيانات الاستعلام من Apple وموقع الشركة المصنّعة وإعلاناتها المنشورة، كما جرى التحقق منها في 24 أكتوبر 2026. ولم يتضمن العمل تثبيتًا ولا استخدامًا عمليًا ولا فحصًا للشبكة ولا اختبارات أداء.',
            },
          ],
        },
        overview: {
          id: 'what-is-compactifai-app',
          title: 'ما هو CompactifAI APP؟',
          content: [
            '**CompactifAI APP هو تطبيق الدردشة المحمول من Multiverse Computing لتجربة نماذج الشركة نفسها.** وبحسب نص المتجر، يجمع محفظة نماذج الشركة المصنّعة «في واجهة واحدة مبسّطة وبديهية» ليقارن المستخدمون بين النماذج ويختاروا واحدًا لكل مهمة. يعرض App Store البائع باسم MULTIVERSE COMPUTING SL. والعنوان «CompactifAI».',
            'CompactifAI هو أيضًا اسم تقنية ضغط النماذج لدى الشركة وواجهة API السحابية المنفصلة؛ والتطبيق منتج ثالث يسرد النماذج المتاحة على تلك الواجهة.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'أين تعمل محادثاتك',
          content: [
            '**CompactifAI APP هجين وليس محليًا بالكامل: بحسب الشركة المصنّعة، يعتمد مكان تشغيل المحادثة على النموذج الذي تستخدمه.**',
          ],
          items: [
            '**على الهاتف (أقوال الشركة المصنّعة).** يقول الموقع إن النماذج «مُحسَّنة للعمل محليًا على جهازك — حتى دون اتصال بالإنترنت»، ويقول إعلان مارس 2026 إن بإمكان المستخدمين تنزيل النماذج والعمل دون اتصال بالكامل. وتصف تدوينة للشركة المصنّعة من نوفمبر 2025 نموذج Llama 3.1 8B Slim على الجهاز ضمن عرض توضيحي. لم يُعثر على قائمة بالنماذج الموجودة على الجهاز في الإصدار 2.10.',
            '**في السحابة.** يقول الإعلان إن بإمكان المستخدمين التبديل إلى نماذج سحابية عبر API، ويقول نص المتجر للإصدار 2.10 إن التطبيق يتيح الوصول إلى نماذج Multiverse Computing «عبر واجهة API الخاصة بنا»، مع ذكر Quasar 438B وGLM 5.3. وتذهب الطلبات الموجّهة إلى هذه النماذج إلى واجهة API الخاصة بالشركة المصنّعة.',
            '**التوجيه.** يصف الإعلان «توجيهًا ذكيًا للاستعلامات» بين النماذج على الجهاز ونماذج API. ويتحدث نص المتجر للإصدار 2.10 عن الاختيار بين النماذج ولا يذكر هل ما زال التوجيه التلقائي موجودًا.',
          ],
          note: 'لا يذكر وصف App Store وGoogle Play الحالي الاستخدام دون اتصال إطلاقًا. وتأتي الادعاءات المتعلقة بالعمل دون اتصال من موقع الشركة المصنّعة وإعلاناتها، ولم تثبّت هذه المراجعة التطبيق لاختبارها.',
        },
        getIt: {
          id: 'get-it',
          title: 'كيف تحصل عليه',
          columns: [
            'المنصة',
            'مكان الحصول عليه',
          ],
          rows: [
            {
              'المنصة': 'iPhone وiPad',
              'مكان الحصول عليه': '[App Store](https://apps.apple.com/us/app/compactifai/id6749544702) (تنزيل مجاني، iOS أو iPadOS 16.4 أو أحدث)',
            },
            {
              'المنصة': 'Android',
              'مكان الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo) (تنزيل مجاني، أكثر من 5,000 تنزيل)',
            },
            {
              'المنصة': 'الموقع الإلكتروني',
              'مكان الحصول عليه': '[صفحة CompactifAI APP](https://multiversecomputing.com/compactifai-app) (تضع روابط المتجرين)',
            },
            {
              'المنصة': 'سياسة الخصوصية',
              'مكان الحصول عليه': '[سياسة الخصوصية](https://multiversecomputing.com/privacy-policy) (عامة، دون تاريخ)',
            },
          ],
          note: 'الإصدار الذي روجع: 2.10.4 على Google Play، وآخر تحديث له في 11 سبتمبر 2026؛ ويعرض App Store الإصدار 2.10.0 الذي صدر في 8 سبتمبر 2026. وجد الاستعلام بمعرّف التطبيق صفحة App Store في متاجر الولايات المتحدة وألمانيا وفرنسا وإسبانيا واليابان وكوريا والبرازيل والمملكة المتحدة وكندا وأستراليا والهند، ولم يجدها في متجرَي السعودية والصين. يدعو موقع الشركة المصنّعة إلى التواصل معها إذا لم يكن التطبيق متاحًا في منطقتك.',
        },
        pricing: {
          id: 'pricing',
          title: 'الأسعار',
          content: [
            '**التطبيق تنزيل مجاني في المتجرين، ولم يُعثر في المصادر التي روجعت على اشتراك أو مستوى مدفوع أو عملية شراء داخل التطبيق.**',
            'لا تذكر الصفحات هل يترتب على استخدام النماذج المستضافة عبر API أي تكلفة ولا مقدارها.',
          ],
        },
        features: {
          id: 'key-features',
          title: 'الميزات التي تذكرها الشركة المصنّعة',
          content: [
            '**كل ما يلي مصدره نص المتجر وملاحظات الإصدار والإعلانات؛ ولم يُختبر منه شيء.**',
          ],
          items: [
            '**الوصول إلى النماذج.** واجهة واحدة لنماذج الشركة المصنّعة. أضاف الإصدار 2.10.0 النموذج Quasar 438B الذي تصفه الشركة بأنه نموذج الاستدلال الرائد لديها، والنموذج GLM 5.3، وأصبح يسرد كل نماذج الدردشة على واجهة API لدى Multiverse Computing، مع إضافة الجديد منها عند إصداره.',
            '**الواجهة.** إعادة تصميم التهيئة الأولى واختيار النماذج في الإصدار 2.10.0، إضافة إلى «استجابات أسرع وأكثر اتساقًا».',
            '**ادعاءات الشركة المصنّعة.** يقول إعلان مارس 2026 إن تقنية الضغط تقلّص النماذج حتى 95% مع فقدان في الدقة بنسبة 2-3%، وتصف ملاحظات الإصدار 2.10 النموذج Quasar 438B بأنه «النموذج الأعلى تقييمًا في أوروبا وفق اختبارات مستقلة أجرتها Artificial Analysis». وكلاهما من أقوال الشركة المصنّعة؛ ولم تتحقق منهما PromptQuorum.',
          ],
          note: 'النسخة المثبّتة هي المرجع النهائي لما يعمل فعلًا.',
        },
        privacy: {
          id: 'privacy',
          title: 'الخصوصية وتدفق البيانات',
          content: [
            '**يصف المتجران جمع البيانات بطريقة مختلفة.** تقول بطاقة الخصوصية في App Store «لم تُجمع بيانات». ويقول نموذج أمان البيانات في Google Play إن التطبيق قد يجمع الاسم والبريد الإلكتروني (لوظائف التطبيق وإدارة الحساب) وقد يشارك سجلات الأعطال والموقع التقريبي مع أطراف ثالثة لأغراض التحليلات؛ ويضيف أن البيانات مشفّرة أثناء النقل وأنه يمكن طلب حذفها.',
            'سياسة الخصوصية المرتبطة من App Store هي سياسة الشركة العامة لموقعها وتطبيقاتها للجوال، ولا تصف تدفق بيانات هذا التطبيق على الجهاز أو عبر API بشكل منفصل.',
          ],
          callouts: [
            {
              type: 'note',
              text: 'التطبيق مغلق المصدر، فلا يمكن التحقق من أي من هذه الأقوال في الشيفرة، ولم تفحص PromptQuorum حركة الشبكة. على من يستخدم نماذج API أن يفترض أن مدخلاته تغادر الهاتف، وأن يتحقق داخل التطبيق من البيانات التي تبقى عليه.',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'لمن يناسب',
          items: [
            '**مستخدمو الهاتف الراغبون في تجربة نماذج Multiverse Computing** في تطبيق مجاني واحد ومقارنة عدة نماذج.',
            '**القراء المهتمون بضغط النماذج،** وهو تخصص الشركة، ممن يقبلون أن الجزء الموجود على الجهاز لم يُتحقق منه.',
            '**من قد يحتاجون إلى الذكاء الاصطناعي مع ضعف الاتصال،** وهي حالة الاستخدام التي تذكرها الشركة المصنّعة، لكن بعد التأكد داخل التطبيق المثبّت من أن نموذجًا ما يعمل فعلًا دون اتصال.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'ما لم نتمكن من التحقق منه',
          items: [
            '**السلوك العملي.** لم يُثبَّت التطبيق، لذا لم تُختبر جودة الإجابات ولا السرعة ولا استهلاك البطارية ولا العمل دون اتصال.',
            '**النماذج على الجهاز في الإصدار 2.10.** لا تذكر الصفحات أي نموذج محلي ولا حجم التنزيل ولا المساحة المطلوبة ولا متطلبات الجهاز.',
            '**التوجيه واختيار النموذج.** لا يُذكر للإصدار 2.10 هل يختار التطبيق تلقائيًا بين النماذج المحلية ونماذج API أم يختار المستخدم.',
            '**الحسابات.** يسرد نموذج Google Play الاسم والبريد الإلكتروني لإدارة الحساب؛ ولا يُذكر هل الحساب مطلوب.',
            '**الآراء المستقلة.** لا تعرض صفحة App Store الأمريكي أي تقييمات، لذا لم يُعثر على تقارير عامة من المستخدمين عن نسخة iPhone.',
            '**الشيفرة المصدرية واللغات.** لم يُعثر على مستودع عام، ويذكر App Store الإنجليزية لغةً وحيدة.',
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
              'التطبيق': '[LM Mini](/ar/power-local-llm/lm-mini-review)',
              'المنصات': 'iOS وiPadOS وmacOS',
              'السعر / الترخيص': 'مجاني + مشتريات / مغلق المصدر',
              'الفرق الرئيسي': 'نماذج على الجهاز مع خادم LM Studio أو Ollama الخاص بك',
            },
            {
              'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
              'المنصات': 'iOS وAndroid',
              'السعر / الترخيص': 'مجاني / MIT',
              'الفرق الرئيسي': 'دردشة مفتوحة المصدر على الجهاز مع مكتبة نماذج خاصة بها',
            },
            {
              'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
              'المنصات': 'iOS وAndroid',
              'السعر / الترخيص': 'مجاني / MIT',
              'الفرق الرئيسي': 'دردشة دون اتصال مفتوحة المصدر مع أسئلة وأجوبة عن المستندات على الجهاز',
            },
            {
              'التطبيق': '[Enchanted](/ar/power-local-llm/enchanted-review)',
              'المنصات': 'iOS وmacOS',
              'السعر / الترخيص': 'مجاني / Apache 2.0',
              'الفرق الرئيسي': 'عميل Ollama فقط دون نماذج خاصة به',
            },
          ],
          note: 'تتغير تفاصيل المنافسين كثيرًا؛ تحقق من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
        },
        faq: {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            {
              q: 'هل CompactifAI APP هو نفسه واجهة CompactifAI API؟',
              a: 'لا. واجهة API هي خدمة المطوّرين المنفصلة لدى الشركة المصنّعة للنماذج المضغوطة؛ أما التطبيق فعميل جوال مجاني تقول ملاحظات الإصدار 2.10 إنه يسرد كل نماذج الدردشة على تلك الواجهة.',
            },
            {
              q: 'ما اللغات التي يدعمها CompactifAI APP؟',
              a: 'يذكر App Store الإنجليزية فقط. وبالنسبة إلى Quasar 438B يذكر نص المتجر الإنجليزية والإسبانية.',
            },
            {
              q: 'ما الفرق بينه وبين تطبيقات الهاتف المفتوحة المصدر التي تعمل دون اتصال؟',
              a: 'هو مغلق المصدر ومبني حول نماذج الشركة المصنّعة نفسها، بينما تطبيقات مثل PocketPal AI وPrivate Mind مفتوحة المصدر وتتيح تنزيل النماذج من مكتبات عامة.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'الخلاصة',
          content: 'CompactifAI APP عميل هاتف مجاني ومحدَّث باستمرار من شركة متخصصة في النماذج المضغوطة. حدوده هي الشيفرة المغلقة، ونص متجر حالي يصف نماذج API دون الاستخدام دون اتصال، ومجموعة نماذج على الجهاز غير مدرجة، وغياب الاختبارات المستقلة. يناسب القراء الراغبين في تجربة نماذج Multiverse Computing؛ ومن يحتاج إلى تطبيق مفتوح المصدر يعمل بالكامل على الجهاز فعليه مقارنة [Private Mind](/ar/power-local-llm/private-mind-review) أو [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
        },
        sources: {
          id: 'sources',
          title: 'المصادر',
          items: [
            '[CompactifAI على App Store](https://apps.apple.com/us/app/compactifai/id6749544702) — الوصف وملاحظات الإصدار وبطاقة الخصوصية والحجم والتوافق، جرى التحقق منها في 24 أكتوبر 2026.',
            '[CompactifAI على Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo) — الوصف والإصدار وتاريخ التحديث وعدد التنزيلات، جرى التحقق منها في 24 أكتوبر 2026.',
            '[صفحة أمان البيانات في Google Play](https://play.google.com/store/apps/datasafety?id=com.multiversecomputing.compactifaizoo) — أنواع البيانات المجمَّعة والمشارَكة، جرى التحقق منها في 24 أكتوبر 2026.',
            '[صفحة CompactifAI APP لدى Multiverse Computing](https://multiversecomputing.com/compactifai-app) — ادعاء الشركة المصنّعة بشأن العمل دون اتصال وملاحظة المناطق.',
            '[إعلان الإطلاق، 3 مارس 2026](https://multiversecomputing.com/resources/introducing-compactifai-app-bringing-offline-ai-to-edge-devices) — وضعا العمل دون اتصال والسحابة وتوجيه الاستعلامات وأرقام الضغط (أقوال الشركة المصنّعة).',
            '[تدوينة الشركة المصنّعة، 10 نوفمبر 2025](https://multiversecomputing.com/resources/30-000-feet-above-the-cloud-compactifai-s-ai-unplugged-moment) — عرض توضيحي لنماذج على الجهاز وسحابية (أقوال الشركة المصنّعة).',
            '[بيانات استعلام Apple عن CompactifAI](https://itunes.apple.com/lookup?id=6749544702&country=us) — الإصدار وتواريخ الإصدار والحجم والأجهزة المدعومة، جرى التحقق منها في 24 أكتوبر 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            '[مراجعة LM Mini](/ar/power-local-llm/lm-mini-review) — تطبيق دردشة مغلق المصدر لـ iPhone وiPad يجمع نماذج على الجهاز مع خادمك الخاص.',
            '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر على الجهاز لنظامَي iOS وAndroid.',
            '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مجاني دون اتصال بترخيص MIT لـ iPhone وAndroid.',
            '[مراجعة Enchanted](/ar/power-local-llm/enchanted-review) — عميل Ollama مجاني بترخيص Apache 2.0 لـ iPhone وMac.',
            '[أفضل تطبيقات LLM المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — استعراض أوسع لتطبيقات iPhone.',
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
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/compactifai-app-review-hero-zh.webp',
      title: 'CompactifAI APP 评测：支持离线与云端模型的免费聊天应用',
      seoTitle: 'CompactifAI APP 评测：离线与云端 AI 聊天应用',
      intro: 'CompactifAI APP 是 Multiverse Computing 推出的 iPhone、iPad 和 Android 免费聊天应用，该公司总部位于西班牙，专注于压缩 AI 模型。据开发方介绍，它既可以在设备上无需联网运行压缩模型，也可以通过公司的云端 API 使用更大的模型。本评测基于应用商店页面、开发方官网及其公告，核查日期为 2026 年 10 月 24 日。',
      metaDescription: 'CompactifAI APP 评测：Multiverse Computing 推出的免费 iPhone 和 Android 聊天应用，支持离线与云端模型。手机上实际运行什么，哪些尚未核实。',
      twitterDescription: 'CompactifAI APP 评测：一款免费、闭源的聊天应用，将设备端压缩模型与开发方的云端 API 结合。资料能确认什么，当前商店文案遗漏了什么，哪些尚未核实。',
      audience: '想知道 CompactifAI APP 是否真能离线使用、哪些部分在云端运行，以及资料确认了什么、没有确认什么的 iPhone、iPad 和 Android 用户。',
      readTime: '阅读约6分钟',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'CompactifAI APP 评测',
      targetKeywords: [
        'compactifai app 评测',
        'compactifai app',
        'multiverse computing 应用',
        '离线 ai 应用 iphone',
        '手机压缩 ai 模型',
        'quasar 438b app',
        'compactifai app vs pocketpal',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Android',
      ],
      leadAnswerBlock: '**CompactifAI APP 是 Multiverse Computing 推出的免费闭源聊天应用，据开发方介绍，它把设备端压缩模型与自家 API 的云端模型结合在一起。** **当前商店文案（2.10 版）只描述了 API 模型，因此如今手机上实际运行什么尚未核实。**',
      quickAnswerTop: {
        zh: {
          question: 'CompactifAI APP 会把我的聊天内容留在手机上吗？',
          answer: '据开发方介绍只是部分如此：设备端模型可离线工作，而 API 模型会把请求发送到 Multiverse Computing 的服务器。App Store 标签显示“未收集数据”，Google Play 则列出了部分收集的数据，以上均未经测试。',
          bullets: [
            '在 [App Store](https://apps.apple.com/us/app/compactifai/id6749544702) 和 [Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo) 免费获取。',
            '2.10 版更新说明提到两个 API 模型：Quasar 438B 和 GLM 5.3。',
            '供应范围受地区限制；开发方官网建议所在国家找不到该应用的用户联系开发方。',
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
          label: 'CompactifAI APP 是什么？',
          anchor: 'what-is-compactifai-app',
        },
        {
          label: '你的聊天在哪里运行',
          anchor: 'where-it-runs',
        },
        {
          label: '获取方式',
          anchor: 'get-it',
        },
        {
          label: '价格',
          anchor: 'pricing',
        },
        {
          label: '开发方列出的功能',
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
              text: 'CompactifAI APP 是 Multiverse Computing 推出的 iPhone、iPad 和 Android 免费闭源聊天应用，提供可离线使用的压缩模型，以及通过开发方云端 API 调用的更大模型。',
            },
            {
              type: 'plain-terms',
              text: '你可以从 App Store 或 Google Play 安装，然后选择模型。部分模型设计为在手机本机运行；其他模型由 Multiverse Computing 托管，需要联网。',
            },
          ],
          items: [
            '开发方：Multiverse Computing，总部位于西班牙多诺斯蒂亚；App Store 显示首次发布于 2026 年 3 月 2 日，上线公告的日期为 2026 年 3 月 3 日。',
            '覆盖范围：Google Play 显示下载量超过 5,000 次；美国 App Store 页面暂无评分。',
            '平台：iPhone 和 iPad（iOS 与 iPadOS 16.4 或更高版本）以及 Android；App Store 只列出英语一种语言。',
            '网站：开发方的 [CompactifAI APP 页面](https://multiversecomputing.com/compactifai-app)链接了两大应用商店。',
          ],
          callouts: [
            {
              type: 'note',
              text: '本评测基于应用商店页面、Apple 查询数据、开发方官网及其已发布的公告，核查日期为 2026 年 10 月 24 日。过程中未进行安装、实际使用、网络流量检查或基准测试。',
            },
          ],
        },
        overview: {
          id: 'what-is-compactifai-app',
          title: 'CompactifAI APP 是什么？',
          content: [
            '**CompactifAI APP 是 Multiverse Computing 的移动聊天应用，用来试用该公司自家的模型。** 据商店文案，它把开发方的模型组合“汇集在一个简洁直观的界面中”，方便用户比较模型并按任务选择。App Store 显示的卖家是 MULTIVERSE COMPUTING SL.，标题为“CompactifAI”。',
            'CompactifAI 同时也是该公司模型压缩技术和独立云端 API 的名称；这款应用是第三个产品，列出该 API 上可用的模型。',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: '你的聊天在哪里运行',
          content: [
            '**CompactifAI APP 是混合型而非纯本地：据开发方介绍，聊天在哪里运行取决于你使用的模型。**',
          ],
          items: [
            '**在手机上（开发方的说法）。** 官网称这些模型“经过优化，可在你的设备上本地运行，即使没有网络连接”，2026 年 3 月的公告称用户可以下载模型并完全离线工作。开发方 2025 年 11 月的一篇博客文章在演示中介绍了设备端的 Llama 3.1 8B Slim 模型。未找到 2.10 版设备端模型的清单。',
            '**在云端。** 公告称用户可以通过 API 切换到云端模型，2.10 版商店文案称应用可“通过我们的 API”访问 Multiverse Computing 的模型，并点名了 Quasar 438B 和 GLM 5.3。对这些模型的请求会发送到开发方的 API。',
            '**路由。** 公告描述了设备端模型与 API 模型之间的“智能查询路由”。2.10 版商店文案谈到在模型之间做选择，没有说明自动路由是否仍然存在。',
          ],
          note: '当前 App Store 和 Google Play 的说明完全没有提到离线使用。关于离线的说法来自开发方的官网和公告，本评测没有安装该应用来测试这些说法。',
        },
        getIt: {
          id: 'get-it',
          title: '获取方式',
          columns: [
            '平台',
            '获取方式',
          ],
          rows: [
            {
              '平台': 'iPhone 和 iPad',
              '获取方式': '[App Store](https://apps.apple.com/us/app/compactifai/id6749544702)（免费下载，iOS 或 iPadOS 16.4 或更高版本）',
            },
            {
              '平台': 'Android',
              '获取方式': '[Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo)（免费下载，下载量超过 5,000 次）',
            },
            {
              '平台': '网站',
              '获取方式': '[CompactifAI APP 页面](https://multiversecomputing.com/compactifai-app)（链接两大应用商店）',
            },
            {
              '平台': '隐私政策',
              '获取方式': '[隐私政策](https://multiversecomputing.com/privacy-policy)（通用政策，未显示日期）',
            },
          ],
          note: '评测版本：Google Play 上的 2.10.4，最近更新于 2026 年 9 月 11 日；App Store 显示 2.10.0，发布于 2026 年 9 月 8 日。按应用 ID 查询，美国、德国、法国、西班牙、日本、韩国、巴西、英国、加拿大、澳大利亚和印度的 App Store 区域能找到该应用，沙特阿拉伯和中国的区域则找不到。开发方官网建议所在地区无法获取该应用时联系开发方。',
        },
        pricing: {
          id: 'pricing',
          title: '价格',
          content: [
            '**该应用在两大商店均可免费下载，在已查阅的资料中未发现订阅、付费档位或应用内购买。**',
            '商店页面没有说明使用托管在 API 上的模型是否收费、收费多少。',
          ],
        },
        features: {
          id: 'key-features',
          title: '开发方列出的功能',
          content: [
            '**以下内容均来自商店文案、更新说明和公告，均未经测试。**',
          ],
          items: [
            '**模型访问。** 在一个界面中使用开发方的模型。2.10.0 版新增了 Quasar 438B（开发方称其为旗舰推理模型）和 GLM 5.3，并列出 Multiverse Computing API 上的所有聊天模型，新模型发布后会陆续加入。',
            '**界面。** 2.10.0 版重新设计了新手引导和模型选择，并提到“响应更快、更稳定”。',
            '**开发方的说法。** 2026 年 3 月的公告称，压缩技术可将模型缩小最多 95%，精度损失为 2-3%；2.10 版更新说明称 Quasar 438B 是“根据 Artificial Analysis 独立基准测试，欧洲得分最高的 AI 模型”。两者均为开发方的说法，PromptQuorum 未核实。',
          ],
          note: '实际可用的功能以安装后的版本为准。',
        },
        privacy: {
          id: 'privacy',
          title: '隐私与数据流向',
          content: [
            '**两大商店对数据收集的描述不同。** App Store 隐私标签显示“未收集数据”。Google Play 的数据安全表单称，该应用可能收集姓名和电子邮件地址（用于应用功能和账号管理），并可能出于分析目的向第三方共享崩溃日志和大致位置；表单还说明数据在传输中加密，并且可以申请删除。',
            'App Store 所链接的隐私政策是公司针对官网和移动应用的通用政策，没有单独说明这款应用在设备端或通过 API 的数据流向。',
          ],
          callouts: [
            {
              type: 'note',
              text: '该应用为闭源，上述说法都无法在代码中核对，PromptQuorum 也没有检查网络流量。使用 API 模型的用户应假定输入内容会离开手机，并在应用中确认哪些数据留在设备上。',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: '适合哪些人使用',
          items: [
            '**想试用 Multiverse Computing 模型的手机用户**，可在一个免费应用中比较多个模型。',
            '**对模型压缩感兴趣的读者**（这是该公司的专长），并接受设备端部分尚未核实。',
            '**可能在网络较差时需要 AI 的人**（开发方提到的使用场景），但需先在已安装的应用中确认某个模型确实能离线运行。',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: '我们无法核实的内容',
          items: [
            '**实际使用表现。** 未安装该应用，因此未测试回答质量、速度、耗电和离线运行。',
            '**2.10 版的设备端模型。** 商店页面没有列出任何本地模型、下载大小、存储需求或设备要求。',
            '**路由与模型选择。** 2.10 版中是应用自动在本地模型与 API 模型之间选择，还是由用户选择，资料中没有说明。',
            '**账号。** Google Play 表单列出姓名和电子邮件用于账号管理；是否必须注册账号并未说明。',
            '**独立反馈。** 美国 App Store 页面暂无评分，因此没有找到关于 iPhone 版的公开用户反馈。',
            '**源代码与语言。** 未找到公开代码仓库，App Store 只列出英语一种语言。',
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
              '应用': '[LM Mini](/zh/power-local-llm/lm-mini-review)',
              '平台': 'iOS、iPadOS、macOS',
              '价格 / 许可证': '免费 + 内购 / 闭源',
              '主要区别': '设备端模型，外加你自己的 LM Studio 或 Ollama 服务器',
            },
            {
              '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
              '平台': 'iOS、Android',
              '价格 / 许可证': '免费 / MIT',
              '主要区别': '开源的设备端聊天，自带模型库',
            },
            {
              '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
              '平台': 'iOS、Android',
              '价格 / 许可证': '免费 / MIT',
              '主要区别': '开源离线聊天，支持设备端文档问答',
            },
            {
              '应用': '[Enchanted](/zh/power-local-llm/enchanted-review)',
              '平台': 'iOS、macOS',
              '价格 / 许可证': '免费 / Apache 2.0',
              '主要区别': '仅支持 Ollama 的客户端，不自带模型',
            },
          ],
          note: '竞品信息变化频繁；请在各应用自己的页面上确认当前的价格、许可证和平台。',
        },
        faq: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            {
              q: 'CompactifAI APP 与 CompactifAI API 是同一个东西吗？',
              a: '不是。API 是开发方面向开发者、针对压缩模型的独立服务；应用是免费的移动客户端，据 2.10 版更新说明，它会列出该 API 上的所有聊天模型。',
            },
            {
              q: 'CompactifAI APP 支持哪些语言？',
              a: 'App Store 只列出英语。关于 Quasar 438B，商店文案提到英语和西班牙语。',
            },
            {
              q: '它与开源的离线手机应用有何不同？',
              a: '它是闭源的，围绕开发方自家的模型构建；而 PocketPal AI 和 Private Mind 等应用是开源的，可以从公共模型库下载模型。',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: '结论',
          content: 'CompactifAI APP 是一家专注压缩模型的公司推出的、持续更新的免费手机客户端。它的局限是：代码闭源，当前商店文案描述了 API 模型却未提及离线使用，设备端模型集合未列出，也没有独立测试。它适合想试用 Multiverse Computing 模型的读者；需要完全在设备上运行的开源应用的用户，应对比 [Private Mind](/zh/power-local-llm/private-mind-review) 或 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)。',
        },
        sources: {
          id: 'sources',
          title: '来源',
          items: [
            '[App Store 上的 CompactifAI](https://apps.apple.com/us/app/compactifai/id6749544702) — 说明、更新说明、隐私标签、大小与兼容性，核查于 2026 年 10 月 24 日。',
            '[Google Play 上的 CompactifAI](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo) — 说明、版本、更新日期和下载量，核查于 2026 年 10 月 24 日。',
            '[Google Play 数据安全页面](https://play.google.com/store/apps/datasafety?id=com.multiversecomputing.compactifaizoo) — 收集与共享的数据类型，核查于 2026 年 10 月 24 日。',
            '[Multiverse Computing 的 CompactifAI APP 页面](https://multiversecomputing.com/compactifai-app) — 开发方关于离线的说法和地区提示。',
            '[上线公告，2026 年 3 月 3 日](https://multiversecomputing.com/resources/introducing-compactifai-app-bringing-offline-ai-to-edge-devices) — 离线与云端模式、查询路由和压缩数据（开发方的说法）。',
            '[开发方博客文章，2025 年 11 月 10 日](https://multiversecomputing.com/resources/30-000-feet-above-the-cloud-compactifai-s-ai-unplugged-moment) — 设备端与云端模型演示（开发方的说法）。',
            '[Apple 提供的 CompactifAI 查询数据](https://itunes.apple.com/lookup?id=6749544702&country=us) — 版本、发布日期、大小和支持的设备，核查于 2026 年 10 月 24 日。',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '延伸阅读',
          items: [
            '[LM Mini 评测](/zh/power-local-llm/lm-mini-review) — 一款闭源的 iPhone 和 iPad 聊天应用，把设备端模型与你自己的服务器结合起来。',
            '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 适用于 iOS 和 Android 的免费开源设备端聊天客户端。',
            '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 适用于 iPhone 和 Android 的免费 MIT 许可离线聊天应用。',
            '[Enchanted 评测](/zh/power-local-llm/enchanted-review) — 适用于 iPhone 和 Mac 的免费 Apache 2.0 Ollama 客户端。',
            '[2026 年适用于 iPhone 的最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 更广泛的 iPhone 应用盘点。',
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
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/compactifai-app-review-hero-ko.webp',
      title: 'CompactifAI APP 리뷰: 오프라인·클라우드 모델을 쓰는 무료 채팅 앱',
      seoTitle: 'CompactifAI APP 리뷰: 오프라인·클라우드 AI',
      intro: 'CompactifAI APP은 스페인에 본사를 둔 압축 AI 모델 전문 기업 Multiverse Computing의 iPhone, iPad, Android용 무료 채팅 앱입니다. 제조사에 따르면 압축 모델을 인터넷 없이 기기에서 실행하거나, 회사의 클라우드 API를 통해 더 큰 모델을 사용할 수 있습니다. 이 리뷰는 2026년 10월 24일에 확인한 스토어 페이지, 제조사 웹사이트와 공식 발표를 바탕으로 합니다.',
      metaDescription: 'CompactifAI APP 리뷰: 오프라인·클라우드 모델을 쓰는 무료 iPhone·Android 채팅 앱. 휴대폰에서 실제로 실행되는 범위와 미검증 사항을 정리했습니다.',
      twitterDescription: 'CompactifAI APP 리뷰: 기기 내 압축 모델과 제조사의 클라우드 API를 결합한 무료 클로즈드 소스 채팅 앱. 자료가 확인한 내용, 현재 스토어 문구에 빠진 내용, 미검증 사항을 정리했습니다.',
      audience: 'CompactifAI APP이 정말 오프라인에서 작동하는지, 어떤 부분이 클라우드에서 실행되는지, 자료가 무엇을 확인하고 무엇을 확인하지 않았는지 알고 싶은 iPhone, iPad, Android 사용자를 위한 글입니다.',
      readTime: '6분 읽기',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'CompactifAI APP 리뷰',
      targetKeywords: [
        'compactifai app 리뷰',
        'compactifai app',
        'multiverse computing 앱',
        '오프라인 ai 앱 iphone',
        '휴대폰 압축 ai 모델',
        'quasar 438b app',
        'compactifai app vs pocketpal',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Android',
      ],
      leadAnswerBlock: '**CompactifAI APP은 Multiverse Computing의 무료 클로즈드 소스 채팅 앱으로, 제조사에 따르면 기기 내 압축 모델과 자체 API의 클라우드 모델을 함께 제공합니다.** **현재 스토어 문구(버전 2.10)는 API 모델만 설명하므로, 지금 휴대폰에서 실제로 무엇이 실행되는지는 확인되지 않았습니다.**',
      quickAnswerTop: {
        ko: {
          question: 'CompactifAI APP은 내 대화를 휴대폰에만 보관하나요?',
          answer: '제조사에 따르면 일부만 그렇습니다. 기기 내 모델은 오프라인에서 작동하지만, API 모델은 Multiverse Computing 서버로 요청을 보냅니다. App Store 표시는 “데이터 수집 안 함”이고 Google Play는 일부 수집 데이터를 나열하고 있으며, 이 중 어느 것도 직접 테스트하지 않았습니다.',
          bullets: [
            '[App Store](https://apps.apple.com/kr/app/compactifai/id6749544702)와 [Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo)에서 무료입니다.',
            '버전 2.10 릴리스 노트에는 API 모델로 Quasar 438B와 GLM 5.3이 언급되어 있습니다.',
            '제공 지역이 제한되어 있으며, 제조사 사이트는 자국에서 앱이 보이지 않으면 문의하라고 안내합니다.',
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
          label: 'CompactifAI APP이란 무엇인가?',
          anchor: 'what-is-compactifai-app',
        },
        {
          label: '채팅이 실행되는 위치',
          anchor: 'where-it-runs',
        },
        {
          label: '어디서 받나요?',
          anchor: 'get-it',
        },
        {
          label: '가격',
          anchor: 'pricing',
        },
        {
          label: '제조사가 밝힌 기능',
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
              text: 'CompactifAI APP은 Multiverse Computing의 iPhone, iPad, Android용 무료 클로즈드 소스 채팅 앱으로, 오프라인용 압축 모델과 제조사 클라우드 API를 통한 더 큰 모델을 제공합니다.',
            },
            {
              type: 'plain-terms',
              text: 'App Store 또는 Google Play에서 설치한 뒤 모델을 고릅니다. 일부 모델은 휴대폰에서 직접 실행되도록 만들어졌고, 나머지는 Multiverse Computing이 호스팅하여 인터넷 연결이 필요합니다.',
            },
          ],
          items: [
            '제조사: 스페인 도노스티아에 본사를 둔 Multiverse Computing. App Store에는 최초 릴리스가 2026년 3월 2일로 표시되며, 출시 발표는 2026년 3월 3일자입니다.',
            '이용 규모: Google Play의 다운로드 수는 5,000회 이상이며, 미국 App Store 페이지에는 아직 평점이 없습니다.',
            '플랫폼: iPhone과 iPad(iOS·iPadOS 16.4 이상) 및 Android. App Store는 영어만 지원 언어로 표시합니다.',
            '웹사이트: 제조사의 [CompactifAI APP 페이지](https://multiversecomputing.com/compactifai-app)에서 두 스토어로 연결됩니다.',
          ],
          callouts: [
            {
              type: 'note',
              text: '이 리뷰는 2026년 10월 24일에 확인한 스토어 페이지, Apple 조회 데이터, 제조사 웹사이트와 공개된 발표를 바탕으로 합니다. 설치, 직접 사용, 네트워크 점검, 벤치마크는 하지 않았습니다.',
            },
          ],
        },
        overview: {
          id: 'what-is-compactifai-app',
          title: 'CompactifAI APP이란 무엇인가?',
          content: [
            '**CompactifAI APP은 Multiverse Computing이 자사 모델을 써 볼 수 있도록 만든 모바일 채팅 앱입니다.** 스토어 문구에 따르면 제조사의 모델 포트폴리오를 “간결하고 직관적인 하나의 인터페이스”로 모아, 사용자가 모델을 비교하고 작업마다 하나를 고를 수 있게 합니다. App Store에는 판매자가 MULTIVERSE COMPUTING SL., 제목이 “CompactifAI”로 표시됩니다.',
            'CompactifAI는 이 회사의 모델 압축 기술과 별도의 클라우드 API 이름이기도 합니다. 이 앱은 세 번째 제품으로, 해당 API에서 쓸 수 있는 모델을 나열합니다.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: '채팅이 실행되는 위치',
          content: [
            '**CompactifAI APP은 순수 로컬이 아니라 하이브리드입니다. 제조사에 따르면 채팅이 어디서 실행되는지는 사용하는 모델에 따라 달라집니다.**',
          ],
          items: [
            '**휴대폰에서(제조사 설명).** 웹사이트는 모델이 “인터넷 연결이 없어도 기기에서 로컬로 실행되도록 최적화”되어 있다고 하며, 2026년 3월 발표는 사용자가 모델을 내려받아 완전히 오프라인으로 쓸 수 있다고 합니다. 제조사의 2025년 11월 블로그 글은 데모에서 기기 내 Llama 3.1 8B Slim 모델을 소개합니다. 버전 2.10의 기기 내 모델 목록은 찾지 못했습니다.',
            '**클라우드에서.** 발표는 사용자가 API를 통해 클라우드 모델로 전환할 수 있다고 하며, 버전 2.10 스토어 문구는 앱이 “당사 API를 통해” Multiverse Computing의 모델에 접근하게 해 준다며 Quasar 438B와 GLM 5.3을 언급합니다. 이 모델들에 대한 요청은 제조사의 API로 전송됩니다.',
            '**라우팅.** 발표는 기기 내 모델과 API 모델 사이의 “스마트 쿼리 라우팅”을 설명합니다. 2.10 스토어 문구는 모델 중에서 고르는 것을 언급할 뿐, 자동 라우팅이 아직 있는지는 밝히지 않습니다.',
          ],
          note: '현재 App Store와 Google Play의 설명에는 오프라인 사용에 대한 언급이 전혀 없습니다. 오프라인 관련 주장은 제조사의 웹사이트와 발표에서 나온 것이며, 이 리뷰는 앱을 설치해 확인하지 않았습니다.',
        },
        getIt: {
          id: 'get-it',
          title: '어디서 받나요?',
          columns: [
            '플랫폼',
            '받는 곳',
          ],
          rows: [
            {
              '플랫폼': 'iPhone·iPad',
              '받는 곳': '[App Store](https://apps.apple.com/kr/app/compactifai/id6749544702)(무료 다운로드, iOS·iPadOS 16.4 이상)',
            },
            {
              '플랫폼': 'Android',
              '받는 곳': '[Google Play](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo)(무료 다운로드, 다운로드 5,000회 이상)',
            },
            {
              '플랫폼': '웹사이트',
              '받는 곳': '[CompactifAI APP 페이지](https://multiversecomputing.com/compactifai-app)(두 스토어로 연결)',
            },
            {
              '플랫폼': '개인정보 처리방침',
              '받는 곳': '[개인정보 처리방침](https://multiversecomputing.com/privacy-policy)(일반 방침, 날짜 표시 없음)',
            },
          ],
          note: '확인한 버전: Google Play 2.10.4, 마지막 업데이트 2026년 9월 11일. App Store는 2.10.0이며 2026년 9월 8일에 출시되었습니다. 앱 ID로 조회한 결과 App Store 페이지는 미국, 독일, 프랑스, 스페인, 일본, 한국, 브라질, 영국, 캐나다, 호주, 인도 스토어에서 확인되었지만 사우디아라비아와 중국 스토어에서는 확인되지 않았습니다. 제조사 사이트는 거주 지역에서 앱을 받을 수 없으면 문의하라고 안내합니다.',
        },
        pricing: {
          id: 'pricing',
          title: '가격',
          content: [
            '**앱은 두 스토어에서 무료로 내려받을 수 있으며, 확인한 자료에서는 구독, 유료 등급, 앱 내 구입을 찾지 못했습니다.**',
            '스토어 페이지에는 API에서 호스팅되는 모델을 쓰는 데 비용이 드는지, 든다면 얼마인지 나와 있지 않습니다.',
          ],
        },
        features: {
          id: 'key-features',
          title: '제조사가 밝힌 기능',
          content: [
            '**아래 내용은 모두 스토어 문구, 릴리스 노트, 발표에서 가져온 것이며 직접 테스트하지 않았습니다.**',
          ],
          items: [
            '**모델 접근.** 제조사의 모델을 하나의 인터페이스에서 쓸 수 있습니다. 버전 2.10.0에서 제조사가 대표 추론 모델이라 부르는 Quasar 438B와 GLM 5.3이 추가되었고, 이제 Multiverse Computing API의 모든 채팅 모델을 나열하며 새 모델은 출시되는 대로 추가됩니다.',
            '**인터페이스.** 버전 2.10.0에서 온보딩과 모델 선택 화면이 새로 디자인되었고 “더 빠르고 일관된 응답”도 언급됩니다.',
            '**제조사의 주장.** 2026년 3월 발표는 압축 기술로 모델을 최대 95% 줄이면서 정밀도 손실이 2~3%라고 하며, 2.10 릴리스 노트는 Quasar 438B를 “Artificial Analysis의 독립 벤치마크 기준 유럽 최고 점수의 AI 모델”이라고 부릅니다. 둘 다 제조사의 주장이며 PromptQuorum은 확인하지 않았습니다.',
          ],
          note: '실제로 무엇이 작동하는지는 설치한 빌드가 최종 기준입니다.',
        },
        privacy: {
          id: 'privacy',
          title: '개인정보와 데이터 흐름',
          content: [
            '**두 스토어는 데이터 수집을 서로 다르게 설명합니다.** App Store 개인정보 보호 표시는 “데이터 수집 안 함”입니다. Google Play 데이터 보안 양식은 앱이 이름과 이메일 주소를 수집할 수 있으며(앱 기능과 계정 관리 목적), 충돌 로그와 대략적인 위치를 분석 목적으로 제3자와 공유할 수 있다고 밝힙니다. 또한 전송 중 데이터는 암호화되며 삭제를 요청할 수 있다고 덧붙입니다.',
            'App Store에 연결된 개인정보 처리방침은 회사의 웹사이트와 모바일 앱에 대한 일반 방침이며, 이 앱의 기기 내 또는 API를 통한 데이터 흐름을 따로 설명하지 않습니다.',
          ],
          callouts: [
            {
              type: 'note',
              text: '이 앱은 클로즈드 소스이므로 위 진술을 코드로 확인할 수 없고, PromptQuorum도 네트워크 트래픽을 점검하지 않았습니다. API 모델을 쓰는 경우 입력 내용이 휴대폰 밖으로 나간다고 보고, 어떤 데이터가 기기에 남는지 앱에서 확인하세요.',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: '이런 분께 적합합니다',
          items: [
            '**Multiverse Computing의 모델을 써 보고 싶은 휴대폰 사용자.** 무료 앱 하나에서 여러 모델을 비교할 수 있습니다.',
            '**회사의 전문 분야인 모델 압축에 관심 있는 독자.** 기기 내 부분이 검증되지 않았다는 점을 받아들일 수 있어야 합니다.',
            '**연결이 약한 환경에서 AI가 필요할 수 있는 분.** 제조사가 내세우는 사용 사례이지만, 설치한 앱에서 모델이 실제로 오프라인에서 실행되는지 먼저 확인해야 합니다.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: '확인하지 못한 사항',
          items: [
            '**실제 동작.** 앱을 설치하지 않았으므로 응답 품질, 속도, 배터리 소모, 오프라인 작동은 테스트하지 않았습니다.',
            '**버전 2.10의 기기 내 모델.** 스토어 페이지에는 로컬 모델 이름, 다운로드 크기, 필요 저장 공간, 기기 요구 사항이 나와 있지 않습니다.',
            '**라우팅과 모델 선택.** 버전 2.10에서 앱이 로컬 모델과 API 모델 중에서 자동으로 고르는지, 사용자가 고르는지는 밝혀져 있지 않습니다.',
            '**계정.** Google Play 양식은 계정 관리용으로 이름과 이메일을 나열하지만, 계정이 필수인지는 밝히지 않습니다.',
            '**독립적인 의견.** 미국 App Store 페이지에는 평점이 없어 iPhone 버전에 대한 공개 사용자 후기를 찾지 못했습니다.',
            '**소스 코드와 언어.** 공개 저장소를 찾지 못했고, App Store는 영어만 지원 언어로 표시합니다.',
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
              '앱': '[LM Mini](/ko/power-local-llm/lm-mini-review)',
              '플랫폼': 'iOS, iPadOS, macOS',
              '가격 / 라이선스': '무료 + 앱 내 구입 / 클로즈드 소스',
              '핵심 차이': '기기 내 모델에 더해 직접 운영하는 LM Studio·Ollama 서버 연결',
            },
            {
              '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
              '플랫폼': 'iOS, Android',
              '가격 / 라이선스': '무료 / MIT',
              '핵심 차이': '자체 모델 라이브러리를 갖춘 오픈소스 기기 내 채팅',
            },
            {
              '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)',
              '플랫폼': 'iOS, Android',
              '가격 / 라이선스': '무료 / MIT',
              '핵심 차이': '기기 내 문서 질의응답을 갖춘 오픈소스 오프라인 채팅',
            },
            {
              '앱': '[Enchanted](/ko/power-local-llm/enchanted-review)',
              '플랫폼': 'iOS, macOS',
              '가격 / 라이선스': '무료 / Apache 2.0',
              '핵심 차이': '자체 모델이 없는 Ollama 전용 클라이언트',
            },
          ],
          note: '경쟁 앱의 정보는 자주 바뀌므로, 각 앱의 최신 가격·라이선스·플랫폼은 해당 앱의 페이지에서 확인하세요.',
        },
        faq: {
          id: 'faq',
          title: '자주 묻는 질문',
          faqs: [
            {
              q: 'CompactifAI APP은 CompactifAI API와 같은 것인가요?',
              a: '아닙니다. API는 제조사가 압축 모델용으로 제공하는 별도의 개발자 서비스이고, 앱은 2.10 릴리스 노트에 따르면 그 API의 모든 채팅 모델을 나열하는 무료 모바일 클라이언트입니다.',
            },
            {
              q: 'CompactifAI APP은 어떤 언어를 지원하나요?',
              a: 'App Store는 영어만 표시합니다. Quasar 438B에 대해서는 스토어 문구가 영어와 스페인어를 언급합니다.',
            },
            {
              q: '오픈소스 오프라인 휴대폰 앱과는 어떻게 다른가요?',
              a: '클로즈드 소스이며 제조사 자체 모델을 중심으로 만들어졌습니다. 반면 PocketPal AI나 Private Mind 같은 앱은 오픈소스이고 공개 라이브러리에서 모델을 내려받을 수 있습니다.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: '결론',
          content: 'CompactifAI APP은 압축 모델 전문 기업이 꾸준히 업데이트하는 무료 휴대폰 클라이언트입니다. 한계는 클로즈드 소스라는 점, 현재 스토어 문구가 API 모델만 설명하고 오프라인 사용은 언급하지 않는다는 점, 기기 내 모델 구성이 공개되지 않았다는 점, 독립적인 테스트가 없다는 점입니다. Multiverse Computing의 모델을 써 보고 싶은 독자에게 적합하며, 기기 안에서 완전히 동작하는 오픈소스 앱이 필요하다면 [Private Mind](/ko/power-local-llm/private-mind-review)나 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)를 비교해 보세요.',
        },
        sources: {
          id: 'sources',
          title: '출처',
          items: [
            '[App Store의 CompactifAI](https://apps.apple.com/us/app/compactifai/id6749544702) — 설명, 릴리스 노트, 개인정보 보호 표시, 크기, 호환성. 2026년 10월 24일 확인.',
            '[Google Play의 CompactifAI](https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo) — 설명, 버전, 업데이트 날짜, 다운로드 수. 2026년 10월 24일 확인.',
            '[Google Play 데이터 보안 페이지](https://play.google.com/store/apps/datasafety?id=com.multiversecomputing.compactifaizoo) — 수집·공유되는 데이터 유형. 2026년 10월 24일 확인.',
            '[Multiverse Computing의 CompactifAI APP 페이지](https://multiversecomputing.com/compactifai-app) — 제조사의 오프라인 관련 주장과 지역 안내.',
            '[출시 발표, 2026년 3월 3일](https://multiversecomputing.com/resources/introducing-compactifai-app-bringing-offline-ai-to-edge-devices) — 오프라인·클라우드 모드, 쿼리 라우팅, 압축 수치(제조사 주장).',
            '[제조사 블로그 글, 2025년 11월 10일](https://multiversecomputing.com/resources/30-000-feet-above-the-cloud-compactifai-s-ai-unplugged-moment) — 기기 내·클라우드 모델 데모(제조사 주장).',
            '[CompactifAI에 대한 Apple 조회 데이터](https://itunes.apple.com/lookup?id=6749544702&country=us) — 버전, 출시일, 크기, 지원 기기. 2026년 10월 24일 확인.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '관련 읽을거리',
          items: [
            '[LM Mini 리뷰](/ko/power-local-llm/lm-mini-review) — 기기 내 모델과 직접 운영하는 서버를 결합한 iPhone·iPad용 클로즈드 소스 채팅 앱.',
            '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 Android용 무료 오픈소스 기기 내 채팅 클라이언트.',
            '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — iPhone과 Android용 무료 MIT 라이선스 오프라인 채팅 앱.',
            '[Enchanted 리뷰](/ko/power-local-llm/enchanted-review) — iPhone과 Mac용 무료 Apache 2.0 Ollama 클라이언트.',
            '[2026년 iPhone용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone용 앱을 더 폭넓게 정리한 글.',
          ],
        },
      },
    },
}

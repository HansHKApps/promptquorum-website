// LM Mini Review: iPhone and iPad Chat App for On-Device and Home-Server AI
// Slug: lm-mini-review
// Companion to: enchanted-review, pocketpal-ai-review, private-mind-review, anythingllm-mobile-review, lm-studio-review,
// ollama-review, best-local-llm-apps-iphone-2026
// Sources: App Store listing id6751125309 (US storefront HTML, version history and reviews; DE/FR/ES/JP/BR/KR storefronts for
// in-app purchase prices), Apple iTunes lookup API, the developer's privacy policy (last updated 2025-08-16) and the SiliconShelf
// directory page — read 2026-10-24. No hands-on use. The request came from the site owner, not from the developer: no maker comment exists.
// Last upstream update 2026-10-19 (v1.10.4) => no stale warning. Locality is hybrid (on-device + own server + remote relay + optional cloud).

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
      heroImage: '/images/lm-mini-review-hero-en.webp',
      title: 'LM Mini Review: iPhone Chat App for On-Device and Home-Server AI',
      seoTitle: 'LM Mini Review: On-Device and Home-Server AI for iPhone',
      intro:
        'LM Mini is a free chat app for iPhone, iPad and Mac from the developer Sultan Haider. According to its App Store listing it can run models on the device, connect to LM Studio, Ollama, Jan AI or oMLX on your own computer, or reach that computer remotely. This review reflects the store listing and the developer\'s privacy policy, as checked on 24 October 2026.',
      metaDescription:
        'LM Mini review: free iPhone and iPad chat app with on-device models, LM Studio and Ollama links and remote access. Where chats run, what the policy says.',
      twitterDescription:
        'LM Mini review: a free, closed-source chat app for iPhone and iPad that mixes on-device models, your own LM Studio or Ollama server and optional cloud APIs. Where your chats actually run, and what is unverified.',
      audience:
        'iPhone and iPad owners who want to know whether LM Mini is really local, which of its modes keep chats on their own hardware, and what the sources confirm and do not.',
      readTime: '6 min read',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'LM Mini review',
      targetKeywords: [
        'lm mini app review',
        'lm mini iphone',
        'lm studio iphone app',
        'ollama client for iphone',
        'on-device ai chat ios',
        'lm mini connect',
        'lm mini vs enchanted',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock:
        '**LM Mini is a closed-source chat app for iPhone and iPad that combines on-device models with a connection to LM Studio, Ollama, Jan AI or oMLX on your own computer.** **Its privacy policy dates from August 2025 and describes only the LM Studio connection, so check what the app does today before sending sensitive chats.**',
      quickAnswerTop: {
        en: {
          question: 'Does LM Mini keep my chats on my own devices?',
          answer:
            'According to the listing, mostly yes: on-device models need no internet after the download, and connected mode talks to a computer you run. Optional cloud APIs send requests to the provider you pick, and none of this was tested.',
          bullets: [
            'Free on the [App Store](https://apps.apple.com/us/app/lm-mini/id6751125309), for iOS or iPadOS 16.0 or later and macOS 14.0 or later.',
            'Apple Intelligence chat with no download since version 1.10.4, on supported iOS 26 and macOS 26 devices.',
            'A paid tier is sold as in-app purchases: monthly, yearly or lifetime.',
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
          label: 'What Is LM Mini?',
          anchor: 'what-is-lm-mini',
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
          label: 'Features Listed by the Developer',
          anchor: 'key-features',
        },
        {
          label: 'Privacy Policy and Data Flow',
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
              text:
                'LM Mini is a closed-source iPhone, iPad and Mac chat app that can run models on the device, connect to a model server on your own computer, or reach that computer remotely.',
            },
            {
              type: 'plain-terms',
              text:
                'You install it from the App Store and pick a mode: download a model to the phone, point the app at LM Studio, Ollama, Jan AI or oMLX on your network, or use the developer\'s remote service. Cloud providers such as OpenAI are optional extras.',
            },
          ],
          items: [
            'Developer: Sultan Haider, who published the first release on 20 September 2025; version 1.10.4 followed on 19 October 2026, and the listing shows 25 releases since July 2026.',
            'Reach: the US App Store shows 4.5 stars from 152 ratings, a modest but real track record.',
            'Platforms: iOS and iPadOS 16.0 or later and macOS 14.0 or later, plus an Apple Watch app; no Android build was found.',
            'Website: the listing links no developer website, and the only public developer page found is the privacy policy.',
          ],
          callouts: [
            {
              type: 'note',
              text:
                'This review is based on the App Store listing, Apple\'s lookup data and the developer\'s privacy policy, checked on 24 October 2026. It involved no hands-on use, network inspection or benchmarking.',
            },
          ],
        },
        overview: {
          id: 'what-is-lm-mini',
          title: 'What Is LM Mini?',
          content: [
            '**LM Mini is a chat client for local and remote language models on Apple devices.** The App Store subtitle is "AI Chat for Ollama & LM Studio", and the listing describes one app for "phone-side models and your desktop local setup".',
            'The developer is listed as Sultan Haider; the App Store shows no company name or website, and the listing names no affiliation with LM Studio, Ollama, Jan AI or oMLX.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'Where Your Chats Run',
          content: [
            '**LM Mini is hybrid, not purely local: the listing describes four paths, and where a chat runs depends on the mode you pick.**',
          ],
          items: [
            '**On the phone.** You download a model and chat with no internet. The listing says phone models are smaller than hosted ones and that speed depends on the device. Apple Intelligence chat uses the model built into the device and needs no download.',
            '**On your own computer.** The app connects to LM Studio, Ollama, Jan AI or oMLX over Wi-Fi or USB; the model then runs on that computer, not on the phone.',
            '**Through LM Mini Connect.** A remote mode for reaching your computer away from home, "encrypted with your key". How the traffic is routed is not described.',
            '**In the cloud, if you add it.** Optional API providers such as OpenAI, OpenRouter, Mistral, DeepSeek and Google Gemini receive your requests, and web search through SearXNG sends queries to a search server. Optional encrypted cloud backups also exist.',
          ],
          note:
            'The SiliconShelf directory tags LM Mini "on-device" and "offline" by keyword and says it did not test them; this review did not either.',
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
              'Where to get it':
                '[App Store](https://apps.apple.com/us/app/lm-mini/id6751125309) (free download, iOS or iPadOS 16.0 or later)',
            },
            {
              Platform: 'Mac',
              'Where to get it':
                'Same App Store listing (macOS 14.0 or later); it does not say whether this is a native Mac build',
            },
            {
              Platform: 'Website',
              'Where to get it': 'No official website found; the App Store listing links none',
            },
            {
              Platform: 'Privacy policy',
              'Where to get it':
                '[LM Mini privacy policy](https://neuro9.net/LMMini/privacy.html) (last updated 16 August 2025)',
            },
          ],
          note:
            'Version reviewed: 1.10.4, released on 19 October 2026. Connected mode needs LM Studio, Ollama, Jan AI or oMLX running on a computer. The 1.10.4 notes add Apple Intelligence chat, a simpler setup that shows servers found on Wi-Fi, a choice between bubble and full-width chat style, and an improved Pro page.',
        },
        pricing: {
          id: 'pricing',
          title: 'Pricing',
          content: [
            '**The app is a free download with a paid tier sold as in-app purchases: $4.99 per month, $29.99 per year or $119.99 once for lifetime access, as shown on the [US App Store](https://apps.apple.com/us/app/lm-mini/id6751125309).**',
            'The listing does not say which features need a purchase. Prices differ by storefront.',
          ],
        },
        features: {
          id: 'key-features',
          title: 'Features Listed by the Developer',
          content: [
            '**Everything below comes from the App Store description and release notes; none of it was tested.**',
          ],
          items: [
            '**Chat.** Conversation history with folders and context-usage tracking, personas, group chat with up to five models, memory, on-device semantic search across chats and background generation.',
            '**Models and servers.** Download and run on-device models, connect to custom servers with custom headers, manage and download models on LM Studio from the phone, and import chats from LM Studio.',
            '**Voice and images.** Voice chat with Kokoro, and image generation through ComfyUI and Automatic1111.',
            '**Tools and search.** Web search through SearXNG and MCP tool calling; since version 1.10.3, LM Studio MCP tools are also available from Siri and Shortcuts.',
            '**Apple devices.** An Apple Watch app since version 1.10.0, and Apple Intelligence chat since version 1.10.4.',
          ],
          note: 'The installed build is the final authority on what works.',
        },
        privacy: {
          id: 'privacy',
          title: 'Privacy Policy and Data Flow',
          content: [
            '**The privacy policy says the app does not collect, store or transmit personal data to external servers or third parties, and that all processing happens between your device and your local LM Studio server.** It lists chat history, settings and server connection details as stored on the device and names no analytics or advertising services.',
            'The policy was last updated on 16 August 2025, five weeks before the first release, and it does not mention on-device models, Ollama, Jan AI, oMLX, LM Mini Connect, cloud API providers or encrypted cloud backups. The App Store privacy label says "Data Not Collected" and notes that Apple has not verified it; the description adds that requests to optional cloud providers go to the provider you pick.',
          ],
          callouts: [
            {
              type: 'note',
              text:
                'The app is closed source, so none of these statements can be checked in code, and PromptQuorum has not inspected network traffic. Anyone using cloud APIs, LM Mini Connect or cloud backups should confirm in the app which data leaves the device.',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Who Should Use It',
          items: [
            '**iPhone and iPad owners who already run LM Studio, Ollama, Jan AI or oMLX.** One app covers the home server and, when away from it, the phone-side models.',
            '**People who want to try on-device models without a server.** Download a model, or use Apple Intelligence on supported devices.',
            '**Users of ComfyUI, Automatic1111 or MCP tools** who want them inside a phone chat client.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'What We Could Not Verify',
          items: [
            '**Hands-on behavior.** This review did not time answers, test offline use or measure battery and storage.',
            '**The on-device runtime and models.** The listing names no inference engine, model list or storage need for on-device mode.',
            '**How LM Mini Connect works.** The listing says it is encrypted with a key you control; it does not describe the route the traffic takes.',
            '**What the paid tier unlocks.** The listing does not separate free from paid features.',
            '**Setup friction.** Two public App Store reviews describe problems: one reports that iOS never asked for local network access (March 2026), the other says a desktop companion app is required, which the developer rejects (July 2026).',
            '**Source code and Mac build.** The app is closed source with no public repository found, and the listing does not say whether the Mac version is native or the iPad app running on a Mac.',
            '**Languages.** The listing shows English as the only language, although the release notes mention German and Russian voices.',
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
              App: '[Enchanted](/power-local-llm/enchanted-review)',
              Platforms: 'iOS, macOS',
              'Price / license': 'Free / Apache 2.0',
              'Key difference': 'Ollama-only client with no models of its own',
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
              App: '[AnythingLLM Mobile](/power-local-llm/anythingllm-mobile-review)',
              Platforms: 'iOS, Android',
              'Price / license': 'Free / MIT',
              'Key difference': 'Remote access to your local AnythingLLM workspace',
            },
          ],
          note:
            'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
        },
        faq: {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'Does LM Mini run on Android?',
              a:
                'No Android build was found; the listing covers iPhone, iPad, Mac, Apple Watch and Apple Vision devices only.',
            },
            {
              q: 'What is Apple Intelligence chat in LM Mini?',
              a:
                'Added in version 1.10.4, it chats with the model built into the device, with no download, on supported iOS 26 and macOS 26 devices. It is separate from downloaded models and from your own server.',
            },
            {
              q: 'Where does LM Mini store API keys?',
              a:
                'The version 1.10.3 release notes say API keys, tokens and server headers are now kept in the Keychain / Keystore instead of plain settings.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Verdict',
          content:
            'LM Mini is a feature-rich, actively updated iPhone and iPad client that treats "local" as a spectrum: models on the phone, models on your own computer, a remote route to it and optional cloud APIs. Its limits are a closed-source codebase, a privacy policy that describes only the LM Studio connection and an unexplained remote service. It suits readers who already run LM Studio, Ollama or Jan AI; anyone who needs a fully on-device, open-source app should compare [Private Mind](/power-local-llm/private-mind-review) or [PocketPal AI](/power-local-llm/pocketpal-ai-review).',
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[LM Mini on the App Store](https://apps.apple.com/us/app/lm-mini/id6751125309) — description, version history, in-app purchases, privacy label and ratings, checked 24 October 2026.',
            '[LM Mini privacy policy](https://neuro9.net/LMMini/privacy.html) — data handling; last updated 16 August 2025.',
            '[Apple lookup data for LM Mini](https://itunes.apple.com/lookup?id=6751125309&country=us) — version, release dates, supported devices and file size, checked 24 October 2026.',
            '[LM Mini on SiliconShelf](https://siliconshelf.app/apps/lm-mini/) — a third-party directory summary that tags the app "on-device" and "offline" by keyword and says it did not test it.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Enchanted Review](/power-local-llm/enchanted-review) — a free, Apache-2.0 Ollama client for iPhone and Mac.',
            '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
            '[Private Mind Review](/power-local-llm/private-mind-review) — a free, MIT-licensed offline chat app for iPhone and Android.',
            '[AnythingLLM Mobile Review](/power-local-llm/anythingllm-mobile-review) — a mobile client for a local AnythingLLM workspace.',
            '[LM Studio Review](/power-local-llm/lm-studio-review) — the desktop app LM Mini connects to.',
            '[Ollama Review](/power-local-llm/ollama-review) — the local model server LM Mini can use.',
            '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the broader iPhone roundup.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'LM Mini Review: iPhone Chat App for On-Device and Home-Server AI',
        description:
          'LM Mini review: a free, closed-source chat app for iPhone and iPad that mixes on-device models, your own LM Studio or Ollama server and optional cloud APIs. Where your chats actually run, and what is unverified.',
        url: 'https://www.promptquorum.com/power-local-llm/lm-mini-review',
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
          audienceType: 'iPhone and iPad users evaluating a hybrid local AI chat app',
        },
        about: [
          {
            '@type': 'Thing',
            name: 'LM Mini',
          },
          {
            '@type': 'Thing',
            name: 'On-device AI',
          },
          {
            '@type': 'Thing',
            name: 'iPhone',
          },
        ],
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.promptquorum.com/power-local-llm/lm-mini-review',
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
            name: 'LM Mini Review',
            item: 'https://www.promptquorum.com/power-local-llm/lm-mini-review',
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
      heroImage: '/images/lm-mini-review-hero-de.webp',
      title:
        'LM-Mini-Rezension: iPhone-Chat-App für KI auf dem Gerät und am Heimserver',
      seoTitle: 'LM-Mini-Rezension: KI auf dem Gerät und am Heimserver',
      intro:
        'LM Mini ist eine kostenlose Chat-App für iPhone, iPad und Mac des Entwicklers Sultan Haider. Laut App-Store-Eintrag kann sie Modelle auf dem Gerät ausführen, sich mit LM Studio, Ollama, Jan AI oder oMLX auf Ihrem eigenen Computer verbinden oder diesen Computer aus der Ferne erreichen. Diese Rezension gibt den Store-Eintrag und die Datenschutzerklärung des Entwicklers wieder, wie am 24. Oktober 2026 geprüft.',
      metaDescription:
        'LM-Mini-Rezension: kostenlose iPhone- und iPad-Chat-App mit Modellen auf dem Gerät, LM Studio, Ollama und Fernzugriff. Wo Chats laufen, was die Policy sagt',
      twitterDescription:
        'LM-Mini-Rezension: eine kostenlose, nicht quelloffene Chat-App für iPhone und iPad, die Modelle auf dem Gerät, Ihren eigenen LM-Studio- oder Ollama-Server und optionale Cloud-APIs verbindet. Wo Ihre Chats wirklich laufen und was ungeprüft ist.',
      audience:
        'iPhone- und iPad-Nutzer, die wissen möchten, ob LM Mini wirklich lokal arbeitet, welche Modi Chats auf der eigenen Hardware halten und was die Quellen bestätigen und was nicht.',
      readTime: '6 Min. Lesezeit',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'LM Mini Rezension',
      targetKeywords: [
        'lm mini app test',
        'lm mini iphone',
        'lm studio app für iphone',
        'ollama client iphone',
        'ki chat auf dem gerät ios',
        'lm mini connect',
        'lm mini vs enchanted',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock:
        '**LM Mini ist eine nicht quelloffene Chat-App für iPhone und iPad, die Modelle auf dem Gerät mit einer Verbindung zu LM Studio, Ollama, Jan AI oder oMLX auf Ihrem eigenen Computer kombiniert.** **Die Datenschutzerklärung stammt vom August 2025 und beschreibt nur die Verbindung zu LM Studio; prüfen Sie daher, was die App heute tut, bevor Sie sensible Chats senden.**',
      quickAnswerTop: {
        de: {
          question: 'Bleiben meine Chats auf meinen eigenen Geräten?',
          answer:
            'Laut Eintrag größtenteils ja: Modelle auf dem Gerät brauchen nach dem Download kein Internet, und der verbundene Modus spricht nur mit einem Computer, den Sie selbst betreiben. Optionale Cloud-APIs senden Anfragen an den von Ihnen gewählten Anbieter; nichts davon wurde getestet.',
          bullets: [
            'Kostenlos im [App Store](https://apps.apple.com/de/app/lm-mini/id6751125309), für iOS oder iPadOS 16.0 und neuer sowie macOS 14.0 und neuer.',
            'Seit Version 1.10.4 Chat mit Apple Intelligence ohne Download, auf unterstützten iOS-26- und macOS-26-Geräten.',
            'Eine Bezahlstufe wird als In-App-Kauf angeboten: monatlich, jährlich oder lebenslang.',
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
          label: 'Was ist LM Mini?',
          anchor: 'what-is-lm-mini',
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
          label: 'Vom Entwickler genannte Funktionen',
          anchor: 'key-features',
        },
        {
          label: 'Datenschutzerklärung und Datenfluss',
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
              text:
                'LM Mini ist eine nicht quelloffene Chat-App für iPhone, iPad und Mac, die Modelle auf dem Gerät ausführen, sich mit einem Modellserver auf Ihrem eigenen Computer verbinden oder diesen Computer aus der Ferne erreichen kann.',
            },
            {
              type: 'plain-terms',
              text:
                'Sie installieren die App aus dem App Store und wählen einen Modus: ein Modell auf das Telefon laden, die App auf LM Studio, Ollama, Jan AI oder oMLX in Ihrem Netzwerk richten oder den Fernzugriffsdienst des Entwicklers nutzen. Cloud-Anbieter wie OpenAI sind optionale Extras.',
            },
          ],
          items: [
            'Entwickler: Sultan Haider, der die erste Version am 20. September 2025 veröffentlicht hat; Version 1.10.4 folgte am 19. Oktober 2026, und der Eintrag zeigt 25 Versionen seit Juli 2026.',
            'Verbreitung: Der US-App-Store zeigt 4,5 Sterne bei 152 Bewertungen, eine bescheidene, aber reale Erfolgsbilanz.',
            'Plattformen: iOS und iPadOS 16.0 und neuer sowie macOS 14.0 und neuer, dazu eine Apple-Watch-App; ein Android-Build wurde nicht gefunden.',
            'Website: Der Eintrag verlinkt keine Entwickler-Website, und die einzige gefundene öffentliche Entwicklerseite ist die Datenschutzerklärung.',
          ],
          callouts: [
            {
              type: 'note',
              text:
                'Diese Rezension beruht auf dem App-Store-Eintrag, den Abfragedaten von Apple und der Datenschutzerklärung des Entwicklers, geprüft am 24. Oktober 2026. Praktische Tests, Netzwerkanalysen oder Benchmarks gab es nicht.',
            },
          ],
        },
        overview: {
          id: 'what-is-lm-mini',
          title: 'Was ist LM Mini?',
          content: [
            '**LM Mini ist ein Chat-Client für lokale und entfernte Sprachmodelle auf Apple-Geräten.** Der Untertitel lautet im US-App-Store „AI Chat for Ollama & LM Studio“ und im deutschen „Lokale und Remote-KI“, und der Eintrag beschreibt eine App für „Modelle auf dem Telefon und Ihre lokale Desktop-Umgebung“.',
            'Als Entwickler ist Sultan Haider angegeben; der App Store nennt weder ein Unternehmen noch eine Website, und der Eintrag nennt keine Verbindung zu LM Studio, Ollama, Jan AI oder oMLX.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'Wo Ihre Chats laufen',
          content: [
            '**LM Mini arbeitet hybrid und nicht rein lokal: Der Eintrag beschreibt vier Wege, und wo ein Chat läuft, hängt vom gewählten Modus ab.**',
          ],
          items: [
            '**Auf dem Telefon.** Sie laden ein Modell herunter und chatten ohne Internet. Laut Eintrag sind Modelle auf dem Telefon kleiner als gehostete, und die Geschwindigkeit hängt vom Gerät ab. Der Chat mit Apple Intelligence nutzt das im Gerät eingebaute Modell und braucht keinen Download.',
            '**Auf Ihrem eigenen Computer.** Die App verbindet sich per WLAN oder USB mit LM Studio, Ollama, Jan AI oder oMLX; das Modell läuft dann auf diesem Computer, nicht auf dem Telefon.',
            '**Über LM Mini Connect.** Ein Fernzugriffsmodus, um Ihren Computer von unterwegs zu erreichen, „verschlüsselt mit Ihrem Schlüssel“. Wie der Datenverkehr geleitet wird, ist nicht beschrieben.',
            '**In der Cloud, wenn Sie sie hinzufügen.** Optionale API-Anbieter wie OpenAI, OpenRouter, Mistral, DeepSeek und Google Gemini erhalten Ihre Anfragen, und die Websuche über SearXNG sendet Suchanfragen an einen Suchserver. Optional gibt es außerdem verschlüsselte Cloud-Backups.',
          ],
          note:
            'Das Verzeichnis SiliconShelf kennzeichnet LM Mini per Stichwort als „on-device“ und „offline“ und gibt an, dies nicht getestet zu haben; diese Rezension hat es ebenfalls nicht getestet.',
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
              Bezugsquelle:
                '[App Store](https://apps.apple.com/de/app/lm-mini/id6751125309) (kostenloser Download, iOS oder iPadOS 16.0 und neuer)',
            },
            {
              Plattform: 'Mac',
              Bezugsquelle:
                'Derselbe App-Store-Eintrag (macOS 14.0 und neuer); er sagt nicht, ob es ein natives Mac-Build ist',
            },
            {
              Plattform: 'Website',
              Bezugsquelle:
                'Keine offizielle Website gefunden; der App-Store-Eintrag verlinkt keine',
            },
            {
              Plattform: 'Datenschutzerklärung',
              Bezugsquelle:
                '[Datenschutzerklärung von LM Mini](https://neuro9.net/LMMini/privacy.html) (zuletzt aktualisiert am 16. August 2025)',
            },
          ],
          note:
            'Geprüfte Version: 1.10.4, veröffentlicht am 19. Oktober 2026. Der verbundene Modus setzt voraus, dass LM Studio, Ollama, Jan AI oder oMLX auf einem Computer läuft. Die Hinweise zu 1.10.4 nennen Chat mit Apple Intelligence, eine einfachere Einrichtung, die im WLAN gefundene Server anzeigt, die Wahl zwischen Sprechblasen- und Vollbreiten-Chat sowie eine überarbeitete Pro-Seite.',
        },
        pricing: {
          id: 'pricing',
          title: 'Preise',
          content: [
            '**Der Download ist kostenlos, eine Bezahlstufe wird als In-App-Kauf verkauft: 5,99 € pro Monat, 34,99 € pro Jahr oder 129,99 € einmalig für lebenslangen Zugriff, wie im [deutschen App Store](https://apps.apple.com/de/app/lm-mini/id6751125309) angezeigt.**',
            'Der Eintrag sagt nicht, welche Funktionen einen Kauf erfordern. Die Preise unterscheiden sich je nach Storefront.',
          ],
        },
        features: {
          id: 'key-features',
          title: 'Vom Entwickler genannte Funktionen',
          content: [
            '**Alles Folgende stammt aus der App-Store-Beschreibung und den Versionshinweisen; nichts davon wurde getestet.**',
          ],
          items: [
            '**Chat.** Verlauf mit Ordnern und Anzeige der Kontextnutzung, Personas, Gruppenchat mit bis zu fünf Modellen, Gedächtnis, semantische Suche über Chats auf dem Gerät und Generierung im Hintergrund.',
            '**Modelle und Server.** Modelle auf dem Gerät laden und ausführen, eigene Server mit benutzerdefinierten Headern anbinden, Modelle in LM Studio vom Telefon aus verwalten und herunterladen sowie Chats aus LM Studio importieren.',
            '**Sprache und Bilder.** Sprachchat mit Kokoro sowie Bildgenerierung über ComfyUI und Automatic1111.',
            '**Werkzeuge und Suche.** Websuche über SearXNG und MCP-Werkzeugaufrufe; seit Version 1.10.3 stehen die MCP-Werkzeuge von LM Studio auch in Siri und Kurzbefehlen zur Verfügung.',
            '**Apple-Geräte.** Eine Apple-Watch-App seit Version 1.10.0 und Chat mit Apple Intelligence seit Version 1.10.4.',
          ],
          note: 'Maßgeblich dafür, was funktioniert, ist die installierte Version.',
        },
        privacy: {
          id: 'privacy',
          title: 'Datenschutzerklärung und Datenfluss',
          content: [
            '**Laut Datenschutzerklärung erhebt, speichert oder überträgt die App keine personenbezogenen Daten an externe Server oder Dritte, und die gesamte Verarbeitung findet zwischen Ihrem Gerät und Ihrem lokalen LM-Studio-Server statt.** Chatverlauf, Einstellungen und Serververbindungsdaten werden demnach auf dem Gerät gespeichert; Analyse- oder Werbedienste werden nicht genannt.',
            'Die Erklärung wurde zuletzt am 16. August 2025 aktualisiert, fünf Wochen vor der ersten Version, und erwähnt weder Modelle auf dem Gerät noch Ollama, Jan AI, oMLX, LM Mini Connect, Cloud-API-Anbieter oder verschlüsselte Cloud-Backups. Das Datenschutzlabel im App Store lautet „Daten werden nicht erfasst“ mit dem Hinweis, dass Apple dies nicht geprüft hat; die Beschreibung ergänzt, dass Anfragen an optionale Cloud-Anbieter an den von Ihnen gewählten Anbieter gehen.',
          ],
          callouts: [
            {
              type: 'note',
              text:
                'Die App ist nicht quelloffen, daher lässt sich keine dieser Angaben im Code prüfen, und PromptQuorum hat den Netzwerkverkehr nicht untersucht. Wer Cloud-APIs, LM Mini Connect oder Cloud-Backups nutzt, sollte in der App prüfen, welche Daten das Gerät verlassen.',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Für wen sich die App eignet',
          items: [
            '**iPhone- und iPad-Nutzer, die bereits LM Studio, Ollama, Jan AI oder oMLX betreiben.** Eine App deckt den Heimserver und, wenn Sie unterwegs sind, die Modelle auf dem Telefon ab.',
            '**Alle, die Modelle auf dem Gerät ohne Server ausprobieren möchten.** Laden Sie ein Modell herunter oder nutzen Sie Apple Intelligence auf unterstützten Geräten.',
            '**Nutzer von ComfyUI, Automatic1111 oder MCP-Werkzeugen,** die diese in einem Chat-Client auf dem Telefon einsetzen möchten.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Was wir nicht überprüfen konnten',
          items: [
            '**Praktisches Verhalten.** Diese Rezension hat weder Antwortzeiten gemessen noch die Offline-Nutzung getestet oder Akku- und Speicherverbrauch ermittelt.',
            '**Laufzeit und Modelle auf dem Gerät.** Der Eintrag nennt weder eine Inferenz-Engine noch eine Modellliste oder einen Speicherbedarf für den Modus auf dem Gerät.',
            '**Funktionsweise von LM Mini Connect.** Laut Eintrag ist die Verbindung mit einem von Ihnen kontrollierten Schlüssel verschlüsselt; welchen Weg der Datenverkehr nimmt, wird nicht beschrieben.',
            '**Was die Bezahlstufe freischaltet.** Der Eintrag trennt kostenlose und kostenpflichtige Funktionen nicht.',
            '**Einrichtungshürden.** Zwei öffentliche App-Store-Bewertungen schildern Probleme: Eine berichtet, iOS habe nie nach dem Zugriff auf das lokale Netzwerk gefragt (März 2026), die andere behauptet, eine Desktop-Begleit-App sei nötig, was der Entwickler zurückweist (Juli 2026).',
            '**Quellcode und Mac-Build.** Die App ist nicht quelloffen, ein öffentliches Repository wurde nicht gefunden, und der Eintrag sagt nicht, ob die Mac-Version nativ ist oder die iPad-App auf dem Mac läuft.',
            '**Sprachen.** Der Eintrag nennt nur Englisch, obwohl die Versionshinweise deutsche und russische Stimmen erwähnen.',
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
              App: '[Enchanted](/de/power-local-llm/enchanted-review)',
              Plattformen: 'iOS, macOS',
              'Preis / Lizenz': 'Kostenlos / Apache 2.0',
              'Wesentlicher Unterschied': 'Reiner Ollama-Client ohne eigene Modelle',
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
              App: '[AnythingLLM Mobile](/de/power-local-llm/anythingllm-mobile-review)',
              Plattformen: 'iOS, Android',
              'Preis / Lizenz': 'Kostenlos / MIT',
              'Wesentlicher Unterschied': 'Fernzugriff auf Ihren lokalen AnythingLLM-Workspace',
            },
          ],
          note:
            'Angaben zu Wettbewerbern ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen jeder App im jeweiligen Eintrag.',
        },
        faq: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Läuft LM Mini auf Android?',
              a:
                'Ein Android-Build wurde nicht gefunden; der Eintrag deckt nur iPhone, iPad, Mac, Apple Watch und Apple Vision ab.',
            },
            {
              q: 'Was ist der Chat mit Apple Intelligence in LM Mini?',
              a:
                'Er wurde mit Version 1.10.4 ergänzt und chattet ohne Download mit dem im Gerät eingebauten Modell, auf unterstützten iOS-26- und macOS-26-Geräten. Er ist unabhängig von heruntergeladenen Modellen und von Ihrem eigenen Server.',
            },
            {
              q: 'Wo speichert LM Mini API-Schlüssel?',
              a:
                'Laut Versionshinweisen zu 1.10.3 werden API-Schlüssel, Tokens und Server-Header jetzt im Keychain / Keystore statt in einfachen Einstellungen gespeichert.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Fazit',
          content:
            'LM Mini ist ein funktionsreicher, aktiv gepflegter Client für iPhone und iPad, der „lokal“ als Spektrum versteht: Modelle auf dem Telefon, Modelle auf dem eigenen Computer, ein Fernzugriff darauf und optionale Cloud-APIs. Grenzen sind der nicht quelloffene Code, eine Datenschutzerklärung, die nur die LM-Studio-Verbindung beschreibt, und ein nicht erklärter Fernzugriffsdienst. Die App eignet sich für Leser, die bereits LM Studio, Ollama oder Jan AI betreiben; wer eine vollständig auf dem Gerät laufende, quelloffene App braucht, sollte [Private Mind](/de/power-local-llm/private-mind-review) oder [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) vergleichen.',
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            '[LM Mini im App Store](https://apps.apple.com/us/app/lm-mini/id6751125309) — Beschreibung, Versionsverlauf, In-App-Käufe, Datenschutzlabel und Bewertungen, geprüft am 24. Oktober 2026.',
            '[Datenschutzerklärung von LM Mini](https://neuro9.net/LMMini/privacy.html) — Datenverarbeitung; zuletzt aktualisiert am 16. August 2025.',
            '[Apple-Abfragedaten zu LM Mini](https://itunes.apple.com/lookup?id=6751125309&country=us) — Version, Veröffentlichungsdaten, unterstützte Geräte und Dateigröße, geprüft am 24. Oktober 2026.',
            '[LM Mini bei SiliconShelf](https://siliconshelf.app/apps/lm-mini/) — eine Zusammenfassung eines Drittanbieter-Verzeichnisses, das die App per Stichwort als „on-device“ und „offline“ kennzeichnet und angibt, sie nicht getestet zu haben.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Artikel',
          items: [
            '[Enchanted-Rezension](/de/power-local-llm/enchanted-review) — ein kostenloser Ollama-Client unter Apache 2.0 für iPhone und Mac.',
            '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener Chat-Client auf dem Gerät für iOS und Android.',
            '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine kostenlose Offline-Chat-App unter MIT-Lizenz für iPhone und Android.',
            '[AnythingLLM-Mobile-Rezension](/de/power-local-llm/anythingllm-mobile-review) — ein mobiler Client für einen lokalen AnythingLLM-Workspace.',
            '[LM-Studio-Rezension](/de/power-local-llm/lm-studio-review) — die Desktop-App, mit der sich LM Mini verbindet.',
            '[Ollama-Rezension](/de/power-local-llm/ollama-review) — der lokale Modellserver, den LM Mini nutzen kann.',
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
      heroImage: '/images/lm-mini-review-hero-es.webp',
      title:
        'Reseña de LM Mini: app de chat para iPhone con IA en el dispositivo y en tu servidor',
      seoTitle: 'Reseña de LM Mini: IA en el dispositivo y servidor propio',
      intro:
        'LM Mini es una app de chat gratuita para iPhone, iPad y Mac del desarrollador Sultan Haider. Según su ficha de la App Store, puede ejecutar modelos en el dispositivo, conectarse a LM Studio, Ollama, Jan AI u oMLX en tu propio ordenador o acceder a ese ordenador de forma remota. Esta reseña refleja la ficha de la tienda y la política de privacidad del desarrollador, consultadas el 24 de octubre de 2026.',
      metaDescription:
        'Reseña de LM Mini: app de chat gratuita para iPhone y iPad con modelos en el dispositivo, LM Studio, Ollama y acceso remoto. Dónde corren tus chats.',
      twitterDescription:
        'Reseña de LM Mini: una app de chat gratuita y de código cerrado para iPhone y iPad que combina modelos en el dispositivo, tu propio servidor LM Studio u Ollama y APIs en la nube opcionales. Dónde se ejecutan realmente tus chats y qué no está verificado.',
      audience:
        'Propietarios de iPhone y iPad que quieren saber si LM Mini es realmente local, qué modos mantienen los chats en su propio hardware y qué confirman y qué no confirman las fuentes.',
      readTime: '6 min de lectura',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'reseña de LM Mini',
      targetKeywords: [
        'reseña lm mini app',
        'lm mini iphone',
        'app de lm studio para iphone',
        'cliente de ollama para iphone',
        'chat con ia en el dispositivo ios',
        'lm mini connect',
        'lm mini vs enchanted',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock:
        '**LM Mini es una app de chat de código cerrado para iPhone y iPad que combina modelos en el dispositivo con una conexión a LM Studio, Ollama, Jan AI u oMLX en tu propio ordenador.** **Su política de privacidad es de agosto de 2025 y solo describe la conexión con LM Studio, así que comprueba qué hace la app hoy antes de enviar chats sensibles.**',
      quickAnswerTop: {
        es: {
          question: '¿LM Mini mantiene mis chats en mis propios dispositivos?',
          answer:
            'Según la ficha, en su mayor parte sí: los modelos en el dispositivo no necesitan internet tras la descarga y el modo conectado solo habla con un ordenador que tú gestionas. Las APIs en la nube opcionales envían las solicitudes al proveedor que elijas; nada de esto se probó.',
          bullets: [
            'Gratis en la [App Store](https://apps.apple.com/es/app/lm-mini/id6751125309), para iOS o iPadOS 16.0 o posterior y macOS 14.0 o posterior.',
            'Chat con Apple Intelligence sin descarga desde la versión 1.10.4, en dispositivos compatibles con iOS 26 y macOS 26.',
            'Un nivel de pago se vende como compra dentro de la app: mensual, anual o de por vida.',
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
          label: '¿Qué es LM Mini?',
          anchor: 'what-is-lm-mini',
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
          label: 'Funciones indicadas por el desarrollador',
          anchor: 'key-features',
        },
        {
          label: 'Política de privacidad y flujo de datos',
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
              text:
                'LM Mini es una app de chat de código cerrado para iPhone, iPad y Mac que puede ejecutar modelos en el dispositivo, conectarse a un servidor de modelos en tu propio ordenador o acceder a ese ordenador de forma remota.',
            },
            {
              type: 'plain-terms',
              text:
                'La instalas desde la App Store y eliges un modo: descargar un modelo al teléfono, apuntar la app a LM Studio, Ollama, Jan AI u oMLX en tu red o usar el servicio remoto del desarrollador. Los proveedores en la nube como OpenAI son extras opcionales.',
            },
          ],
          items: [
            'Desarrollador: Sultan Haider, que publicó la primera versión el 20 de septiembre de 2025; la versión 1.10.4 llegó el 19 de octubre de 2026 y la ficha muestra 25 versiones desde julio de 2026.',
            'Alcance: la App Store de EE. UU. muestra 4,5 estrellas con 152 valoraciones, un historial modesto pero real.',
            'Plataformas: iOS y iPadOS 16.0 o posterior y macOS 14.0 o posterior, además de una app para Apple Watch; no se encontró ninguna versión para Android.',
            'Sitio web: la ficha no enlaza ningún sitio del desarrollador, y la única página pública del desarrollador que se encontró es la política de privacidad.',
          ],
          callouts: [
            {
              type: 'note',
              text:
                'Esta reseña se basa en la ficha de la App Store, los datos de consulta de Apple y la política de privacidad del desarrollador, consultados el 24 de octubre de 2026. No incluyó uso práctico, inspección de red ni pruebas de rendimiento.',
            },
          ],
        },
        overview: {
          id: 'what-is-lm-mini',
          title: '¿Qué es LM Mini?',
          content: [
            '**LM Mini es un cliente de chat para modelos de lenguaje locales y remotos en dispositivos Apple.** El subtítulo en la App Store de EE. UU. es «AI Chat for Ollama & LM Studio» y en la española «IA local y acceso remoto»; la ficha describe una sola app para «modelos en el teléfono y tu configuración local de escritorio».',
            'Como desarrollador figura Sultan Haider; la App Store no muestra empresa ni sitio web, y la ficha no indica ninguna relación con LM Studio, Ollama, Jan AI u oMLX.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'Dónde se ejecutan tus chats',
          content: [
            '**LM Mini es híbrida, no puramente local: la ficha describe cuatro vías, y dónde se ejecuta un chat depende del modo que elijas.**',
          ],
          items: [
            '**En el teléfono.** Descargas un modelo y chateas sin internet. La ficha dice que los modelos del teléfono son más pequeños que los alojados y que la velocidad depende del dispositivo. El chat con Apple Intelligence usa el modelo integrado en el dispositivo y no requiere descarga.',
            '**En tu propio ordenador.** La app se conecta a LM Studio, Ollama, Jan AI u oMLX por Wi‑Fi o USB; el modelo se ejecuta entonces en ese ordenador, no en el teléfono.',
            '**Mediante LM Mini Connect.** Un modo remoto para llegar a tu ordenador fuera de casa, «cifrado con tu clave». No se describe cómo se enruta el tráfico.',
            '**En la nube, si la añades.** Los proveedores de API opcionales, como OpenAI, OpenRouter, Mistral, DeepSeek y Google Gemini, reciben tus solicitudes, y la búsqueda web con SearXNG envía las consultas a un servidor de búsqueda. También existen copias de seguridad cifradas en la nube opcionales.',
          ],
          note:
            'El directorio SiliconShelf etiqueta LM Mini como «on-device» y «offline» por palabra clave y dice que no lo probó; esta reseña tampoco.',
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
              'Dónde obtenerla':
                '[App Store](https://apps.apple.com/es/app/lm-mini/id6751125309) (descarga gratuita, iOS o iPadOS 16.0 o posterior)',
            },
            {
              Plataforma: 'Mac',
              'Dónde obtenerla':
                'La misma ficha de la App Store (macOS 14.0 o posterior); no indica si es una versión nativa para Mac',
            },
            {
              Plataforma: 'Sitio web',
              'Dónde obtenerla':
                'No se encontró un sitio web oficial; la ficha de la App Store no enlaza ninguno',
            },
            {
              Plataforma: 'Política de privacidad',
              'Dónde obtenerla':
                '[Política de privacidad de LM Mini](https://neuro9.net/LMMini/privacy.html) (última actualización: 16 de agosto de 2025)',
            },
          ],
          note:
            'Versión revisada: 1.10.4, publicada el 19 de octubre de 2026. El modo conectado requiere LM Studio, Ollama, Jan AI u oMLX en un ordenador. Las notas de 1.10.4 añaden el chat con Apple Intelligence, una configuración más sencilla que muestra los servidores encontrados en la red Wi‑Fi, la opción entre chat con burbujas o a ancho completo y una página Pro mejorada.',
        },
        pricing: {
          id: 'pricing',
          title: 'Precios',
          content: [
            '**La descarga es gratuita y el nivel de pago se vende como compras dentro de la app: 5,99 € al mes, 34,99 € al año o 129,99 € una sola vez para acceso de por vida, según la [App Store de España](https://apps.apple.com/es/app/lm-mini/id6751125309).**',
            'La ficha no indica qué funciones requieren una compra. Los precios varían según la tienda.',
          ],
        },
        features: {
          id: 'key-features',
          title: 'Funciones indicadas por el desarrollador',
          content: [
            '**Todo lo siguiente procede de la descripción de la App Store y de las notas de versión; nada se probó.**',
          ],
          items: [
            '**Chat.** Historial de conversaciones con carpetas y seguimiento del uso de contexto, personas, chat en grupo con hasta cinco modelos, memoria, búsqueda semántica en el dispositivo entre chats y generación en segundo plano.',
            '**Modelos y servidores.** Descargar y ejecutar modelos en el dispositivo, conectarse a servidores personalizados con cabeceras personalizadas, gestionar y descargar modelos en LM Studio desde el teléfono e importar chats de LM Studio.',
            '**Voz e imágenes.** Chat de voz con Kokoro y generación de imágenes mediante ComfyUI y Automatic1111.',
            '**Herramientas y búsqueda.** Búsqueda web con SearXNG y llamadas a herramientas MCP; desde la versión 1.10.3, las herramientas MCP de LM Studio también están disponibles desde Siri y Atajos.',
            '**Dispositivos Apple.** Una app para Apple Watch desde la versión 1.10.0 y chat con Apple Intelligence desde la versión 1.10.4.',
          ],
          note: 'La versión instalada es la que decide qué funciona.',
        },
        privacy: {
          id: 'privacy',
          title: 'Política de privacidad y flujo de datos',
          content: [
            '**La política de privacidad dice que la app no recopila, almacena ni transmite datos personales a servidores externos ni a terceros, y que todo el procesamiento ocurre entre tu dispositivo y tu servidor local de LM Studio.** Indica que el historial de chats, los ajustes y los datos de conexión al servidor se guardan en el dispositivo y no menciona servicios de analítica ni de publicidad.',
            'La política se actualizó por última vez el 16 de agosto de 2025, cinco semanas antes de la primera versión, y no menciona los modelos en el dispositivo, Ollama, Jan AI, oMLX, LM Mini Connect, los proveedores de API en la nube ni las copias de seguridad cifradas en la nube. La etiqueta de privacidad de la App Store dice «Datos no recopilados» y señala que Apple no la ha verificado; la descripción añade que las solicitudes a proveedores en la nube opcionales van al proveedor que elijas.',
          ],
          callouts: [
            {
              type: 'note',
              text:
                'La app es de código cerrado, así que ninguna de estas afirmaciones puede comprobarse en el código, y PromptQuorum no ha inspeccionado el tráfico de red. Quien use APIs en la nube, LM Mini Connect o copias de seguridad en la nube debería confirmar en la app qué datos salen del dispositivo.',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Para quién es',
          items: [
            '**Propietarios de iPhone y iPad que ya usan LM Studio, Ollama, Jan AI u oMLX.** Una sola app cubre el servidor doméstico y, cuando estás fuera, los modelos del teléfono.',
            '**Quienes quieren probar modelos en el dispositivo sin un servidor.** Descarga un modelo o usa Apple Intelligence en dispositivos compatibles.',
            '**Usuarios de ComfyUI, Automatic1111 o herramientas MCP** que quieren tenerlos dentro de un cliente de chat para el teléfono.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Lo que no pudimos verificar',
          items: [
            '**Comportamiento en uso real.** Esta reseña no midió tiempos de respuesta, no probó el uso sin conexión ni midió batería y almacenamiento.',
            '**El motor y los modelos en el dispositivo.** La ficha no nombra ningún motor de inferencia, lista de modelos ni necesidad de almacenamiento para el modo en el dispositivo.',
            '**Cómo funciona LM Mini Connect.** La ficha dice que está cifrado con una clave que controlas; no describe la ruta que sigue el tráfico.',
            '**Qué desbloquea el nivel de pago.** La ficha no separa las funciones gratuitas de las de pago.',
            '**Dificultades de configuración.** Dos reseñas públicas de la App Store describen problemas: una cuenta que iOS nunca pidió acceso a la red local (marzo de 2026) y otra afirma que hace falta una app de escritorio complementaria, algo que el desarrollador rechaza (julio de 2026).',
            '**Código fuente y versión para Mac.** La app es de código cerrado y no se encontró un repositorio público, y la ficha no indica si la versión para Mac es nativa o la app de iPad ejecutándose en un Mac.',
            '**Idiomas.** La ficha muestra solo inglés, aunque las notas de versión mencionan voces en alemán y ruso.',
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
              App: '[Enchanted](/es/power-local-llm/enchanted-review)',
              Plataformas: 'iOS, macOS',
              'Precio / licencia': 'Gratis / Apache 2.0',
              'Diferencia clave': 'Cliente solo para Ollama, sin modelos propios',
            },
            {
              App: '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
              Plataformas: 'iOS, Android',
              'Precio / licencia': 'Gratis / MIT',
              'Diferencia clave':
                'Chat de código abierto en el dispositivo con biblioteca de modelos propia',
            },
            {
              App: '[Private Mind](/es/power-local-llm/private-mind-review)',
              Plataformas: 'iOS, Android',
              'Precio / licencia': 'Gratis / MIT',
              'Diferencia clave':
                'Chat sin conexión de código abierto con preguntas sobre documentos en el dispositivo',
            },
            {
              App: '[AnythingLLM Mobile](/es/power-local-llm/anythingllm-mobile-review)',
              Plataformas: 'iOS, Android',
              'Precio / licencia': 'Gratis / MIT',
              'Diferencia clave': 'Acceso remoto a tu espacio de trabajo local de AnythingLLM',
            },
          ],
          note:
            'Los datos de los competidores cambian a menudo; confirma el precio, la licencia y las plataformas actuales en la ficha de cada app.',
        },
        faq: {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            {
              q: '¿LM Mini funciona en Android?',
              a:
                'No se encontró ninguna versión para Android; la ficha cubre solo iPhone, iPad, Mac, Apple Watch y Apple Vision.',
            },
            {
              q: '¿Qué es el chat con Apple Intelligence en LM Mini?',
              a:
                'Se añadió en la versión 1.10.4 y conversa con el modelo integrado en el dispositivo, sin descarga, en dispositivos compatibles con iOS 26 y macOS 26. Es independiente de los modelos descargados y de tu propio servidor.',
            },
            {
              q: '¿Dónde guarda LM Mini las claves de API?',
              a:
                'Las notas de la versión 1.10.3 dicen que las claves de API, los tokens y las cabeceras del servidor ahora se guardan en el Keychain / Keystore en lugar de en los ajustes normales.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Veredicto',
          content:
            'LM Mini es un cliente para iPhone y iPad con muchas funciones y actualizaciones frecuentes que trata lo «local» como un espectro: modelos en el teléfono, modelos en tu propio ordenador, una vía remota hacia él y APIs en la nube opcionales. Sus límites son un código cerrado, una política de privacidad que solo describe la conexión con LM Studio y un servicio remoto sin explicar. Encaja con quienes ya usan LM Studio, Ollama o Jan AI; quien necesite una app de código abierto que funcione por completo en el dispositivo debería comparar [Private Mind](/es/power-local-llm/private-mind-review) o [PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            '[LM Mini en la App Store](https://apps.apple.com/us/app/lm-mini/id6751125309) — descripción, historial de versiones, compras dentro de la app, etiqueta de privacidad y valoraciones, consultados el 24 de octubre de 2026.',
            '[Política de privacidad de LM Mini](https://neuro9.net/LMMini/privacy.html) — tratamiento de datos; última actualización: 16 de agosto de 2025.',
            '[Datos de consulta de Apple sobre LM Mini](https://itunes.apple.com/lookup?id=6751125309&country=us) — versión, fechas de publicación, dispositivos compatibles y tamaño del archivo, consultados el 24 de octubre de 2026.',
            '[LM Mini en SiliconShelf](https://siliconshelf.app/apps/lm-mini/) — resumen de un directorio de terceros que etiqueta la app como «on-device» y «offline» por palabra clave y dice que no la probó.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[Reseña de Enchanted](/es/power-local-llm/enchanted-review) — un cliente de Ollama gratuito con licencia Apache 2.0 para iPhone y Mac.',
            '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat gratuito y de código abierto en el dispositivo para iOS y Android.',
            '[Reseña de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat sin conexión gratuita con licencia MIT para iPhone y Android.',
            '[Reseña de AnythingLLM Mobile](/es/power-local-llm/anythingllm-mobile-review) — un cliente móvil para un espacio de trabajo local de AnythingLLM.',
            '[Reseña de LM Studio](/es/power-local-llm/lm-studio-review) — la app de escritorio a la que se conecta LM Mini.',
            '[Reseña de Ollama](/es/power-local-llm/ollama-review) — el servidor de modelos local que LM Mini puede usar.',
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
      heroImage: '/images/lm-mini-review-hero-fr.webp',
      title:
        'Test de LM Mini : appli de chat pour iPhone avec IA sur l’appareil et sur votre serveur',
      seoTitle: 'Test de LM Mini : IA sur l’appareil et serveur perso',
      intro:
        'LM Mini est une appli de chat gratuite pour iPhone, iPad et Mac du développeur Sultan Haider. Selon sa fiche App Store, elle peut exécuter des modèles sur l’appareil, se connecter à LM Studio, Ollama, Jan AI ou oMLX sur votre propre ordinateur, ou accéder à cet ordinateur à distance. Ce test reflète la fiche de la boutique et la politique de confidentialité du développeur, consultées le 24 octobre 2026.',
      metaDescription:
        'Test de LM Mini : appli de chat gratuite pour iPhone et iPad avec modèles sur l’appareil, LM Studio, Ollama et accès distant. Où tournent vos chats ?',
      twitterDescription:
        'Test de LM Mini : une appli de chat gratuite et fermée pour iPhone et iPad qui associe modèles sur l’appareil, votre propre serveur LM Studio ou Ollama et API cloud facultatives. Où vos chats tournent vraiment, et ce qui reste à vérifier.',
      audience:
        'Les utilisateurs d’iPhone et d’iPad qui veulent savoir si LM Mini est vraiment locale, quels modes gardent les chats sur leur propre matériel, et ce que les sources confirment ou non.',
      readTime: '6 min de lecture',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'test LM Mini',
      targetKeywords: [
        'avis appli lm mini',
        'lm mini iphone',
        'appli lm studio iphone',
        'client ollama iphone',
        'chat ia sur l’appareil ios',
        'lm mini connect',
        'lm mini vs enchanted',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock:
        '**LM Mini est une appli de chat à code fermé pour iPhone et iPad qui associe des modèles sur l’appareil à une connexion vers LM Studio, Ollama, Jan AI ou oMLX sur votre propre ordinateur.** **Sa politique de confidentialité date d’août 2025 et ne décrit que la connexion à LM Studio : vérifiez ce que l’appli fait aujourd’hui avant d’y envoyer des chats sensibles.**',
      quickAnswerTop: {
        fr: {
          question: 'LM Mini garde-t-elle mes chats sur mes propres appareils ?',
          answer:
            'D’après la fiche, en grande partie oui : les modèles sur l’appareil n’ont plus besoin d’internet après le téléchargement, et le mode connecté ne parle qu’à un ordinateur que vous gérez. Les API cloud facultatives envoient les requêtes au fournisseur que vous choisissez ; rien de tout cela n’a été testé.',
          bullets: [
            'Gratuite sur l’[App Store](https://apps.apple.com/fr/app/lm-mini/id6751125309), pour iOS ou iPadOS 16.0 et versions ultérieures, et macOS 14.0 et versions ultérieures.',
            'Chat avec Apple Intelligence sans téléchargement depuis la version 1.10.4, sur les appareils compatibles avec iOS 26 et macOS 26.',
            'Un niveau payant est vendu en achat intégré : mensuel, annuel ou à vie.',
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
          label: 'Qu’est-ce que LM Mini ?',
          anchor: 'what-is-lm-mini',
        },
        {
          label: 'Où tournent vos chats',
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
          label: 'Fonctions indiquées par le développeur',
          anchor: 'key-features',
        },
        {
          label: 'Politique de confidentialité et flux de données',
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
              text:
                'LM Mini est une appli de chat à code fermé pour iPhone, iPad et Mac qui peut exécuter des modèles sur l’appareil, se connecter à un serveur de modèles sur votre propre ordinateur ou accéder à cet ordinateur à distance.',
            },
            {
              type: 'plain-terms',
              text:
                'Vous l’installez depuis l’App Store et choisissez un mode : télécharger un modèle sur le téléphone, pointer l’appli vers LM Studio, Ollama, Jan AI ou oMLX sur votre réseau, ou utiliser le service d’accès à distance du développeur. Les fournisseurs cloud comme OpenAI sont des options.',
            },
          ],
          items: [
            'Développeur : Sultan Haider, qui a publié la première version le 20 septembre 2025 ; la version 1.10.4 a suivi le 19 octobre 2026, et la fiche affiche 25 versions depuis juillet 2026.',
            'Audience : l’App Store américain affiche 4,5 étoiles pour 152 notes, un parcours modeste mais réel.',
            'Plateformes : iOS et iPadOS 16.0 et versions ultérieures et macOS 14.0 et versions ultérieures, plus une appli Apple Watch ; aucune version Android n’a été trouvée.',
            'Site web : la fiche ne renvoie vers aucun site du développeur, et la seule page publique du développeur trouvée est la politique de confidentialité.',
          ],
          callouts: [
            {
              type: 'note',
              text:
                'Ce test repose sur la fiche App Store, les données de recherche d’Apple et la politique de confidentialité du développeur, consultées le 24 octobre 2026. Il n’a comporté ni usage concret, ni inspection du réseau, ni mesures de performance.',
            },
          ],
        },
        overview: {
          id: 'what-is-lm-mini',
          title: 'Qu’est-ce que LM Mini ?',
          content: [
            '**LM Mini est un client de chat pour modèles de langage locaux et distants sur appareils Apple.** Le sous-titre est « AI Chat for Ollama & LM Studio » sur l’App Store américain et « IA locale et à distance » sur le français ; la fiche décrit une seule appli pour « les modèles sur le téléphone et votre configuration locale de bureau ».',
            'Le développeur indiqué est Sultan Haider ; l’App Store n’affiche ni société ni site web, et la fiche ne mentionne aucun lien avec LM Studio, Ollama, Jan AI ou oMLX.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'Où tournent vos chats',
          content: [
            '**LM Mini est hybride, pas purement locale : la fiche décrit quatre voies, et l’endroit où tourne un chat dépend du mode choisi.**',
          ],
          items: [
            '**Sur le téléphone.** Vous téléchargez un modèle et discutez sans internet. La fiche précise que les modèles du téléphone sont plus petits que les modèles hébergés et que la vitesse dépend de l’appareil. Le chat avec Apple Intelligence utilise le modèle intégré à l’appareil et ne demande aucun téléchargement.',
            '**Sur votre propre ordinateur.** L’appli se connecte à LM Studio, Ollama, Jan AI ou oMLX par Wi‑Fi ou USB ; le modèle tourne alors sur cet ordinateur, pas sur le téléphone.',
            '**Via LM Mini Connect.** Un mode à distance pour joindre votre ordinateur hors de chez vous, « chiffré avec votre clé ». Le chemin emprunté par le trafic n’est pas décrit.',
            '**Dans le cloud, si vous l’ajoutez.** Les fournisseurs d’API facultatifs, comme OpenAI, OpenRouter, Mistral, DeepSeek et Google Gemini, reçoivent vos requêtes, et la recherche web via SearXNG envoie les requêtes à un serveur de recherche. Des sauvegardes cloud chiffrées facultatives existent aussi.',
          ],
          note:
            'L’annuaire SiliconShelf qualifie LM Mini d’« on-device » et d’« offline » par mot-clé et indique ne pas l’avoir testée ; ce test ne l’a pas fait non plus.',
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
              'Où la trouver':
                '[App Store](https://apps.apple.com/fr/app/lm-mini/id6751125309) (téléchargement gratuit, iOS ou iPadOS 16.0 et versions ultérieures)',
            },
            {
              Plateforme: 'Mac',
              'Où la trouver':
                'Même fiche App Store (macOS 14.0 et ultérieures) ; version Mac native non précisée',
            },
            {
              Plateforme: 'Site web',
              'Où la trouver': 'Aucun site officiel trouvé ; la fiche App Store n’en indique aucun',
            },
            {
              Plateforme: 'Politique de confidentialité',
              'Où la trouver':
                '[Politique de confidentialité de LM Mini](https://neuro9.net/LMMini/privacy.html) (dernière mise à jour le 16 août 2025)',
            },
          ],
          note:
            'Version testée : 1.10.4, publiée le 19 octobre 2026. Le mode connecté exige LM Studio, Ollama, Jan AI ou oMLX sur un ordinateur. Les notes de la 1.10.4 ajoutent le chat avec Apple Intelligence, une configuration plus simple qui affiche les serveurs trouvés sur le Wi‑Fi, le choix entre style bulles et pleine largeur, et une page Pro améliorée.',
        },
        pricing: {
          id: 'pricing',
          title: 'Tarifs',
          content: [
            '**Le téléchargement est gratuit et un niveau payant est vendu en achats intégrés : 5,99 € par mois, 34,99 € par an ou 129,99 € une seule fois pour un accès à vie, selon l’[App Store français](https://apps.apple.com/fr/app/lm-mini/id6751125309).**',
            'La fiche ne précise pas quelles fonctions nécessitent un achat. Les prix varient selon la boutique.',
          ],
        },
        features: {
          id: 'key-features',
          title: 'Fonctions indiquées par le développeur',
          content: [
            '**Tout ce qui suit provient de la description App Store et des notes de version ; rien n’a été testé.**',
          ],
          items: [
            '**Chat.** Historique des conversations avec dossiers et suivi de l’usage du contexte, personas, chat de groupe avec jusqu’à cinq modèles, mémoire, recherche sémantique sur l’appareil dans les chats et génération en arrière-plan.',
            '**Modèles et serveurs.** Télécharger et exécuter des modèles sur l’appareil, se connecter à des serveurs personnalisés avec des en-têtes personnalisés, gérer et télécharger des modèles dans LM Studio depuis le téléphone, et importer des chats depuis LM Studio.',
            '**Voix et images.** Chat vocal avec Kokoro et génération d’images via ComfyUI et Automatic1111.',
            '**Outils et recherche.** Recherche web via SearXNG et appel d’outils MCP ; depuis la version 1.10.3, les outils MCP de LM Studio sont aussi disponibles depuis Siri et Raccourcis.',
            '**Appareils Apple.** Une appli Apple Watch depuis la version 1.10.0 et le chat avec Apple Intelligence depuis la version 1.10.4.',
          ],
          note: 'La version installée fait foi pour ce qui fonctionne.',
        },
        privacy: {
          id: 'privacy',
          title: 'Politique de confidentialité et flux de données',
          content: [
            '**La politique de confidentialité indique que l’appli ne collecte, ne stocke ni ne transmet de données personnelles à des serveurs externes ou à des tiers, et que tout le traitement a lieu entre votre appareil et votre serveur LM Studio local.** Elle précise que l’historique des chats, les réglages et les informations de connexion au serveur restent sur l’appareil et ne cite aucun service d’analyse ou de publicité.',
            'Elle a été mise à jour pour la dernière fois le 16 août 2025, cinq semaines avant la première version, et ne mentionne ni les modèles sur l’appareil, ni Ollama, Jan AI, oMLX, LM Mini Connect, les fournisseurs d’API cloud ou les sauvegardes cloud chiffrées. L’étiquette de confidentialité de l’App Store indique « Données non collectées » et précise qu’Apple ne l’a pas vérifiée ; la description ajoute que les requêtes vers les fournisseurs cloud facultatifs vont au fournisseur que vous choisissez.',
          ],
          callouts: [
            {
              type: 'note',
              text:
                'L’appli étant à code fermé, aucune de ces affirmations ne peut être vérifiée dans le code, et PromptQuorum n’a pas inspecté le trafic réseau. Quiconque utilise des API cloud, LM Mini Connect ou les sauvegardes cloud devrait vérifier dans l’appli quelles données quittent l’appareil.',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'À qui elle convient',
          items: [
            '**Les utilisateurs d’iPhone et d’iPad qui font déjà tourner LM Studio, Ollama, Jan AI ou oMLX.** Une seule appli couvre le serveur maison et, hors de chez vous, les modèles du téléphone.',
            '**Ceux qui veulent essayer des modèles sur l’appareil sans serveur.** Téléchargez un modèle ou utilisez Apple Intelligence sur les appareils compatibles.',
            '**Les utilisateurs de ComfyUI, d’Automatic1111 ou d’outils MCP** qui souhaitent les retrouver dans un client de chat sur téléphone.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Ce que nous n’avons pas pu vérifier',
          items: [
            '**Le comportement à l’usage.** Ce test n’a pas chronométré les réponses, testé l’usage hors ligne ni mesuré la batterie et le stockage.',
            '**Le moteur et les modèles sur l’appareil.** La fiche ne nomme ni moteur d’inférence, ni liste de modèles, ni besoin de stockage pour le mode sur l’appareil.',
            '**Le fonctionnement de LM Mini Connect.** La fiche dit qu’il est chiffré avec une clé que vous contrôlez ; elle ne décrit pas le chemin suivi par le trafic.',
            '**Ce que débloque le niveau payant.** La fiche ne distingue pas les fonctions gratuites des fonctions payantes.',
            '**Difficultés de configuration.** Deux avis publics sur l’App Store décrivent des problèmes : l’un signale qu’iOS n’a jamais demandé l’accès au réseau local (mars 2026), l’autre affirme qu’une appli de bureau complémentaire est nécessaire, ce que le développeur dément (juillet 2026).',
            '**Code source et version Mac.** L’appli est à code fermé, aucun dépôt public n’a été trouvé, et la fiche ne dit pas si la version Mac est native ou l’appli iPad exécutée sur un Mac.',
            '**Langues.** La fiche n’indique que l’anglais, bien que les notes de version mentionnent des voix allemandes et russes.',
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
              Application: '[Enchanted](/fr/power-local-llm/enchanted-review)',
              Plateformes: 'iOS, macOS',
              'Prix / licence': 'Gratuit / Apache 2.0',
              'Différence clé': 'Client réservé à Ollama, sans modèles propres',
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
              'Différence clé':
                'Chat hors ligne open source avec questions sur documents sur l’appareil',
            },
            {
              Application: '[AnythingLLM Mobile](/fr/power-local-llm/anythingllm-mobile-review)',
              Plateformes: 'iOS, Android',
              'Prix / licence': 'Gratuit / MIT',
              'Différence clé': 'Accès à distance à votre espace de travail AnythingLLM local',
            },
          ],
          note:
            'Les informations sur les concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels sur la fiche de chaque appli.',
        },
        faq: {
          id: 'faq',
          title: 'Questions fréquentes',
          faqs: [
            {
              q: 'LM Mini fonctionne-t-elle sur Android ?',
              a:
                'Aucune version Android n’a été trouvée ; la fiche ne couvre que l’iPhone, l’iPad, le Mac, l’Apple Watch et l’Apple Vision.',
            },
            {
              q: 'Qu’est-ce que le chat avec Apple Intelligence dans LM Mini ?',
              a:
                'Ajouté dans la version 1.10.4, il discute avec le modèle intégré à l’appareil, sans téléchargement, sur les appareils compatibles avec iOS 26 et macOS 26. Il est distinct des modèles téléchargés et de votre propre serveur.',
            },
            {
              q: 'Où LM Mini stocke-t-elle les clés d’API ?',
              a:
                'Les notes de la version 1.10.3 indiquent que les clés d’API, les jetons et les en-têtes de serveur sont désormais conservés dans le Keychain / Keystore plutôt que dans les réglages ordinaires.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Verdict',
          content:
            'LM Mini est un client riche en fonctions et régulièrement mis à jour pour iPhone et iPad, qui traite le « local » comme un spectre : modèles sur le téléphone, modèles sur votre propre ordinateur, une voie d’accès à distance et des API cloud facultatives. Ses limites sont un code fermé, une politique de confidentialité qui ne décrit que la connexion à LM Studio et un service à distance non expliqué. Elle convient à ceux qui font déjà tourner LM Studio, Ollama ou Jan AI ; qui veut une appli open source entièrement sur l’appareil comparera [Private Mind](/fr/power-local-llm/private-mind-review) ou [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[LM Mini sur l’App Store](https://apps.apple.com/us/app/lm-mini/id6751125309) — description, historique des versions, achats intégrés, étiquette de confidentialité et notes, consultés le 24 octobre 2026.',
            '[Politique de confidentialité de LM Mini](https://neuro9.net/LMMini/privacy.html) — traitement des données ; dernière mise à jour le 16 août 2025.',
            '[Données de recherche Apple sur LM Mini](https://itunes.apple.com/lookup?id=6751125309&country=us) — version, dates de publication, appareils compatibles et taille du fichier, consultés le 24 octobre 2026.',
            '[LM Mini sur SiliconShelf](https://siliconshelf.app/apps/lm-mini/) — résumé d’un annuaire tiers qui qualifie l’appli d’« on-device » et d’« offline » par mot-clé et indique ne pas l’avoir testée.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures complémentaires',
          items: [
            '[Test d’Enchanted](/fr/power-local-llm/enchanted-review) — un client Ollama gratuit sous licence Apache 2.0 pour iPhone et Mac.',
            '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat gratuit et open source sur l’appareil pour iOS et Android.',
            '[Test de Private Mind](/fr/power-local-llm/private-mind-review) — une appli de chat hors ligne gratuite sous licence MIT pour iPhone et Android.',
            '[Test d’AnythingLLM Mobile](/fr/power-local-llm/anythingllm-mobile-review) — un client mobile pour un espace de travail AnythingLLM local.',
            '[Test de LM Studio](/fr/power-local-llm/lm-studio-review) — l’appli de bureau à laquelle LM Mini se connecte.',
            '[Test d’Ollama](/fr/power-local-llm/ollama-review) — le serveur de modèles local que LM Mini peut utiliser.',
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
      heroImage: '/images/lm-mini-review-hero-ja.webp',
      title: 'LM Miniレビュー:端末内AIと自宅サーバーAIに対応するiPhoneチャットアプリ',
      seoTitle: 'LM Miniレビュー:端末内AIと自宅サーバーAI対応',
      intro:
        'LM Miniは、開発者Sultan Haiderが提供する、iPhone・iPad・Mac向けの無料チャットアプリです。App Storeの掲載情報によれば、端末上でモデルを実行できるほか、自分のコンピューター上のLM Studio、Ollama、Jan AI、oMLXに接続したり、そのコンピューターにリモートで接続したりできます。本レビューは、2026年10月24日に確認したストアの掲載情報と開発者のプライバシーポリシーに基づいています。',
      metaDescription:
        'LM Miniレビュー:端末内モデル、LM Studio・Ollama接続、リモート接続に対応する無料のiPhone・iPadチャットアプリ。チャットの処理場所とプライバシーポリシーを解説します。',
      twitterDescription:
        'LM Miniレビュー:端末内モデル、自分のLM StudioやOllamaサーバー、任意のクラウドAPIを組み合わせる、無料でソース非公開のiPhone・iPad向けチャットアプリ。チャットが実際にどこで処理されるか、未検証の点を解説します。',
      audience:
        'LM Miniが本当にローカルなのか、どのモードでチャットが自分のハードウェア内にとどまるのか、情報源が何を確認し何を確認していないのかを知りたいiPhone・iPadユーザー向けです。',
      readTime: '6分で読める',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'LM Miniレビュー',
      targetKeywords: [
        'lm mini アプリ レビュー',
        'lm mini iphone',
        'lm studio iphone アプリ',
        'ollama iphone クライアント',
        '端末内 ai チャット ios',
        'lm mini connect',
        'lm mini enchanted 比較',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock:
        '**LM Miniは、端末内モデルと、自分のコンピューター上のLM Studio・Ollama・Jan AI・oMLXへの接続を組み合わせた、ソース非公開のiPhone・iPad向けチャットアプリです。** **プライバシーポリシーは2025年8月のもので、LM Studioへの接続しか説明していません。機密性の高いチャットを送る前に、現在のアプリの動作を確認してください。**',
      quickAnswerTop: {
        ja: {
          question: 'LM Miniはチャットを自分のデバイス内にとどめてくれますか?',
          answer:
            '掲載情報によれば、ほぼそのとおりです。端末内モデルはダウンロード後にインターネットが不要で、接続モードは自分で運用するコンピューターとだけ通信します。任意のクラウドAPIは選んだ事業者に送信されます。いずれも検証はしていません。',
          bullets: [
            '[App Store](https://apps.apple.com/jp/app/lm-mini/id6751125309)で無料。iOS・iPadOS 16.0以降、macOS 14.0以降が対象です。',
            'バージョン1.10.4から、対応するiOS 26・macOS 26端末でダウンロード不要のApple Intelligenceチャットを利用できます。',
            '有料プランはアプリ内課金で、月額・年額・買い切りがあります。',
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
          label: 'LM Miniとは?',
          anchor: 'what-is-lm-mini',
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
          label: '開発者が挙げている機能',
          anchor: 'key-features',
        },
        {
          label: 'プライバシーポリシーとデータの流れ',
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
              text:
                'LM Miniは、端末上でモデルを実行したり、自分のコンピューター上のモデルサーバーに接続したり、そのコンピューターにリモート接続したりできる、ソース非公開のiPhone・iPad・Mac向けチャットアプリです。',
            },
            {
              type: 'plain-terms',
              text:
                'App Storeからインストールし、モードを選びます。スマートフォンにモデルをダウンロードする、ネットワーク上のLM Studio・Ollama・Jan AI・oMLXに接続する、または開発者のリモートサービスを使う、のいずれかです。OpenAIなどのクラウド事業者は任意の追加です。',
            },
          ],
          items: [
            '開発者:Sultan Haider。初回リリースは2025年9月20日で、バージョン1.10.4は2026年10月19日に公開されました。掲載情報には2026年7月以降の25回のリリースが載っています。',
            '実績:米国App Storeでは152件の評価で星4.5と、規模は小さいものの実績があります。',
            '対応プラットフォーム:iOS・iPadOS 16.0以降、macOS 14.0以降、Apple Watchアプリ。Android版は見つかりませんでした。',
            'ウェブサイト:掲載情報に開発者のサイトへのリンクはなく、見つかった公開ページはプライバシーポリシーだけです。',
          ],
          callouts: [
            {
              type: 'note',
              text:
                '本レビューは、2026年10月24日に確認したApp Storeの掲載情報、Appleの検索データ、開発者のプライバシーポリシーに基づいています。実機での使用、通信の検査、ベンチマークは行っていません。',
            },
          ],
        },
        overview: {
          id: 'what-is-lm-mini',
          title: 'LM Miniとは?',
          content: [
            '**LM Miniは、Apple製デバイスでローカルおよびリモートの言語モデルを使うためのチャットクライアントです。** 米国App Storeのサブタイトルは「AI Chat for Ollama & LM Studio」で、説明文は「スマートフォン上のモデルと、デスクトップのローカル環境」を一つのアプリで扱うと述べています。',
            '開発者はSultan Haiderと表示されています。App Storeに会社名やウェブサイトはなく、掲載情報にLM Studio、Ollama、Jan AI、oMLXとの提携関係の記載もありません。',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'チャットが動く場所',
          content: [
            '**LM Miniは純粋なローカルではなくハイブリッドです。掲載情報には4つの経路があり、チャットがどこで動くかは選ぶモードによって決まります。**',
          ],
          items: [
            '**スマートフォン上。** モデルをダウンロードすれば、インターネットなしでチャットできます。掲載情報によれば、スマートフォン上のモデルはホスト型より小さく、速度は端末次第です。Apple Intelligenceチャットは端末内蔵のモデルを使い、ダウンロードは不要です。',
            '**自分のコンピューター上。** Wi-FiまたはUSBでLM Studio、Ollama、Jan AI、oMLXに接続します。この場合、モデルが動くのはスマートフォンではなくそのコンピューターです。',
            '**LM Mini Connect経由。** 外出先から自分のコンピューターに接続するリモートモードで、「あなたの鍵で暗号化」されると説明されています。通信がどう中継されるかは記載がありません。',
            '**追加した場合のクラウド。** OpenAI、OpenRouter、Mistral、DeepSeek、Google Geminiなどの任意のAPI事業者がリクエストを受け取ります。SearXNGによるウェブ検索は検索サーバーにクエリを送ります。暗号化されたクラウドバックアップも任意で利用できます。',
          ],
          note:
            'ディレクトリサイトSiliconShelfは、キーワード判定でLM Miniに「on-device」「offline」のタグを付け、検証はしていないと述べています。本レビューも検証していません。',
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
              '入手先':
                '[App Store](https://apps.apple.com/jp/app/lm-mini/id6751125309)(無料ダウンロード、iOS・iPadOS 16.0以降)',
            },
            {
              'プラットフォーム': 'Mac',
              '入手先': '同じApp Storeの掲載ページ(macOS 14.0以降)。Mac専用ビルドかどうかは記載がありません',
            },
            {
              'プラットフォーム': 'ウェブサイト',
              '入手先': '公式サイトは見つかりませんでした。App Storeの掲載情報にもリンクはありません',
            },
            {
              'プラットフォーム': 'プライバシーポリシー',
              '入手先':
                '[LM Miniのプライバシーポリシー](https://neuro9.net/LMMini/privacy.html)(最終更新:2025年8月16日)',
            },
          ],
          note:
            '確認したバージョン:1.10.4(2026年10月19日公開)。接続モードには、コンピューター上で動くLM Studio、Ollama、Jan AI、oMLXが必要です。1.10.4のリリースノートには、Apple Intelligenceチャット、Wi-Fi上で見つかったサーバーを表示する簡単なセットアップ、吹き出しと全幅のチャットスタイルの選択、改善されたProページが挙げられています。',
        },
        pricing: {
          id: 'pricing',
          title: '料金',
          content: [
            '**ダウンロードは無料で、有料プランはアプリ内課金として提供されています。[日本のApp Store](https://apps.apple.com/jp/app/lm-mini/id6751125309)の表示では、月額¥800、年額¥5,000、買い切り(永続利用)¥20,000です。**',
            'どの機能が課金対象かは掲載情報に記載がありません。価格はストアごとに異なります。',
          ],
        },
        features: {
          id: 'key-features',
          title: '開発者が挙げている機能',
          content: [
            '**以下はすべてApp Storeの説明文とリリースノートに基づくもので、動作は確認していません。**',
          ],
          items: [
            '**チャット。** フォルダ付きの会話履歴とコンテキスト使用量の表示、ペルソナ、最大5モデルでのグループチャット、メモリ、チャット横断の端末内セマンティック検索、バックグラウンド生成。',
            '**モデルとサーバー。** 端末内モデルのダウンロードと実行、カスタムヘッダー付きのカスタムサーバーへの接続、スマートフォンからのLM Studioのモデル管理とダウンロード、LM Studioからのチャットのインポート。',
            '**音声と画像。** Kokoroによる音声チャット、ComfyUIとAutomatic1111による画像生成。',
            '**ツールと検索。** SearXNGによるウェブ検索とMCPツール呼び出し。バージョン1.10.3以降は、LM StudioのMCPツールをSiriやショートカットからも使えます。',
            '**Appleデバイス。** バージョン1.10.0からApple Watchアプリ、バージョン1.10.4からApple Intelligenceチャットに対応します。',
          ],
          note: '実際に何が動くかは、インストールしたビルドが最終的な基準です。',
        },
        privacy: {
          id: 'privacy',
          title: 'プライバシーポリシーとデータの流れ',
          content: [
            '**プライバシーポリシーによれば、アプリは個人データを外部サーバーや第三者に収集・保存・送信せず、処理はすべて端末とローカルのLM Studioサーバーの間で行われます。** チャット履歴、設定、サーバー接続情報は端末に保存されるとあり、分析や広告のサービスには触れていません。',
            'ポリシーの最終更新は2025年8月16日で、初回リリースの5週間前です。端末内モデル、Ollama、Jan AI、oMLX、LM Mini Connect、クラウドAPI事業者、暗号化クラウドバックアップへの言及はありません。App Storeのプライバシーラベルは「データ収集なし」で、Appleは未検証と注記しています。説明文は、任意のクラウド事業者へのリクエストは選んだ事業者に送られると補足しています。',
          ],
          callouts: [
            {
              type: 'note',
              text:
                'アプリはソース非公開のため、これらの記述をコードで確認することはできず、PromptQuorumも通信を検査していません。クラウドAPI、LM Mini Connect、クラウドバックアップを使う場合は、どのデータが端末の外に出るかをアプリ内で確認してください。',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: '向いている人',
          items: [
            '**すでにLM Studio、Ollama、Jan AI、oMLXを動かしているiPhone・iPadユーザー。** 一つのアプリで、自宅サーバーと、外出時のスマートフォン上のモデルの両方をカバーできます。',
            '**サーバーなしで端末内モデルを試したい人。** モデルをダウンロードするか、対応端末ならApple Intelligenceを使えます。',
            '**ComfyUI、Automatic1111、MCPツールを使う人。** それらをスマートフォンのチャットクライアントで使いたい場合に向いています。',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: '確認できなかった点',
          items: [
            '**実際の動作。** 本レビューでは、応答時間の計測、オフライン動作の確認、バッテリーやストレージの測定を行っていません。',
            '**端末内のランタイムとモデル。** 端末内モードの推論エンジン、モデル一覧、必要容量は掲載情報に記載がありません。',
            '**LM Mini Connectの仕組み。** 自分が管理する鍵で暗号化されると書かれていますが、通信の経路は説明されていません。',
            '**有料プランで何が使えるか。** 無料機能と有料機能は掲載情報で区別されていません。',
            '**セットアップの難しさ。** App Storeの公開レビュー2件が問題を挙げています。1件はiOSがローカルネットワークへのアクセスを一度も求めなかったという報告(2026年3月)、もう1件はデスクトップ用の補助アプリが必要だという主張で、開発者は否定しています(2026年7月)。',
            '**ソースコードとMac版。** アプリはソース非公開で公開リポジトリは見つからず、Mac版がネイティブか、MacでiPad用アプリを動かすものかも記載がありません。',
            '**言語。** 掲載情報の言語は英語のみですが、リリースノートにはドイツ語とロシア語の音声への言及があります。',
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
              'アプリ': '[Enchanted](/ja/power-local-llm/enchanted-review)',
              'プラットフォーム': 'iOS、macOS',
              '価格 / ライセンス': '無料 / Apache 2.0',
              '主な違い': '独自モデルを持たないOllama専用クライアント',
            },
            {
              'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
              'プラットフォーム': 'iOS、Android',
              '価格 / ライセンス': '無料 / MIT',
              '主な違い': '独自のモデルライブラリを持つオープンソースの端末内チャット',
            },
            {
              'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
              'プラットフォーム': 'iOS、Android',
              '価格 / ライセンス': '無料 / MIT',
              '主な違い': '端末内で文書に質問できるオープンソースのオフラインチャット',
            },
            {
              'アプリ': '[AnythingLLM Mobile](/ja/power-local-llm/anythingllm-mobile-review)',
              'プラットフォーム': 'iOS、Android',
              '価格 / ライセンス': '無料 / MIT',
              '主な違い': 'ローカルのAnythingLLMワークスペースへのリモートアクセス',
            },
          ],
          note: '競合アプリの情報は頻繁に変わります。価格、ライセンス、対応プラットフォームは各アプリの掲載ページで確認してください。',
        },
        faq: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            {
              q: 'LM MiniはAndroidで動きますか?',
              a:
                'Android版は見つかりませんでした。掲載情報が対象とするのはiPhone、iPad、Mac、Apple Watch、Apple Visionのみです。',
            },
            {
              q: 'LM MiniのApple Intelligenceチャットとは何ですか?',
              a:
                'バージョン1.10.4で追加された機能で、対応するiOS 26・macOS 26端末で、ダウンロードなしに端末内蔵のモデルとチャットできます。ダウンロードしたモデルや自分のサーバーとは別の機能です。',
            },
            {
              q: 'LM MiniはAPIキーをどこに保存しますか?',
              a:
                'バージョン1.10.3のリリースノートによれば、APIキー、トークン、サーバーヘッダーは通常の設定ではなく、Keychain / Keystoreに保存されるようになりました。',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: '結論',
          content:
            'LM Miniは、機能が豊富で更新も活発なiPhone・iPad向けクライアントで、「ローカル」を段階的なものとして扱っています。スマートフォン上のモデル、自分のコンピューター上のモデル、そこへのリモート経路、任意のクラウドAPIです。制約は、ソース非公開であること、プライバシーポリシーがLM Studioへの接続しか説明していないこと、リモートサービスの説明がないことです。すでにLM Studio、Ollama、Jan AIを使っている人に向いています。完全に端末内で動くオープンソースのアプリが必要なら、[Private Mind](/ja/power-local-llm/private-mind-review)や[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と比べてください。',
        },
        sources: {
          id: 'sources',
          title: '出典',
          items: [
            '[App StoreのLM Mini](https://apps.apple.com/us/app/lm-mini/id6751125309) — 説明文、バージョン履歴、アプリ内課金、プライバシーラベル、評価(2026年10月24日確認)。',
            '[LM Miniのプライバシーポリシー](https://neuro9.net/LMMini/privacy.html) — データの扱い(最終更新:2025年8月16日)。',
            '[LM MiniのApple検索データ](https://itunes.apple.com/lookup?id=6751125309&country=us) — バージョン、公開日、対応デバイス、ファイルサイズ(2026年10月24日確認)。',
            '[SiliconShelfのLM Mini](https://siliconshelf.app/apps/lm-mini/) — キーワード判定で「on-device」「offline」のタグを付け、検証はしていないと述べる第三者ディレクトリの要約。',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '関連記事',
          items: [
            '[Enchantedレビュー](/ja/power-local-llm/enchanted-review) — iPhoneとMac向けの無料のApache 2.0 Ollamaクライアント。',
            '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けの無料のオープンソース端末内チャットクライアント。',
            '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — iPhoneとAndroid向けの無料のMITライセンスのオフラインチャットアプリ。',
            '[AnythingLLM Mobileレビュー](/ja/power-local-llm/anythingllm-mobile-review) — ローカルのAnythingLLMワークスペース用モバイルクライアント。',
            '[LM Studioレビュー](/ja/power-local-llm/lm-studio-review) — LM Miniが接続するデスクトップアプリ。',
            '[Ollamaレビュー](/ja/power-local-llm/ollama-review) — LM Miniが利用できるローカルモデルサーバー。',
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
      heroImage: '/images/lm-mini-review-hero-pt.webp',
      title:
        'Análise do LM Mini: app de chat para iPhone com IA no aparelho e no seu servidor',
      seoTitle: 'Análise do LM Mini: IA no aparelho e em servidor próprio',
      intro:
        'O LM Mini é um app de chat gratuito para iPhone, iPad e Mac do desenvolvedor Sultan Haider. Segundo a página da App Store, ele pode executar modelos no aparelho, conectar-se ao LM Studio, Ollama, Jan AI ou oMLX no seu próprio computador ou acessar esse computador remotamente. Esta análise reflete a página da loja e a política de privacidade do desenvolvedor, consultadas em 24 de outubro de 2026.',
      metaDescription:
        'Análise do LM Mini: app de chat gratuito para iPhone e iPad com modelos no aparelho, LM Studio, Ollama e acesso remoto. Onde seus chats rodam.',
      twitterDescription:
        'Análise do LM Mini: um app de chat gratuito e de código fechado para iPhone e iPad que combina modelos no aparelho, seu próprio servidor LM Studio ou Ollama e APIs de nuvem opcionais. Onde seus chats realmente rodam e o que não foi verificado.',
      audience:
        'Usuários de iPhone e iPad que querem saber se o LM Mini é mesmo local, quais modos mantêm os chats no próprio hardware e o que as fontes confirmam e não confirmam.',
      readTime: '6 min de leitura',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'análise do LM Mini',
      targetKeywords: [
        'análise app lm mini',
        'lm mini iphone',
        'app lm studio para iphone',
        'cliente ollama para iphone',
        'chat com ia no aparelho ios',
        'lm mini connect',
        'lm mini vs enchanted',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock:
        '**O LM Mini é um app de chat de código fechado para iPhone e iPad que combina modelos no aparelho com uma conexão ao LM Studio, Ollama, Jan AI ou oMLX no seu próprio computador.** **A política de privacidade é de agosto de 2025 e descreve apenas a conexão com o LM Studio; por isso, confira o que o app faz hoje antes de enviar chats sensíveis.**',
      quickAnswerTop: {
        pt: {
          question: 'O LM Mini mantém meus chats nos meus próprios dispositivos?',
          answer:
            'Segundo a página, em grande parte sim: modelos no aparelho não precisam de internet após o download, e o modo conectado fala apenas com um computador que você mesmo opera. APIs de nuvem opcionais enviam as solicitações ao provedor que você escolher; nada disso foi testado.',
          bullets: [
            'Grátis na [App Store](https://apps.apple.com/br/app/lm-mini/id6751125309), para iOS ou iPadOS 16.0 ou posterior e macOS 14.0 ou posterior.',
            'Chat com Apple Intelligence sem download desde a versão 1.10.4, em aparelhos compatíveis com iOS 26 e macOS 26.',
            'Um plano pago é vendido como compra no app: mensal, anual ou vitalício.',
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
          label: 'O que é o LM Mini?',
          anchor: 'what-is-lm-mini',
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
          label: 'Recursos indicados pelo desenvolvedor',
          anchor: 'key-features',
        },
        {
          label: 'Política de privacidade e fluxo de dados',
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
              text:
                'O LM Mini é um app de chat de código fechado para iPhone, iPad e Mac que pode executar modelos no aparelho, conectar-se a um servidor de modelos no seu próprio computador ou acessar esse computador remotamente.',
            },
            {
              type: 'plain-terms',
              text:
                'Você instala pela App Store e escolhe um modo: baixar um modelo para o celular, apontar o app para o LM Studio, Ollama, Jan AI ou oMLX na sua rede ou usar o serviço remoto do desenvolvedor. Provedores de nuvem como a OpenAI são extras opcionais.',
            },
          ],
          items: [
            'Desenvolvedor: Sultan Haider, que publicou a primeira versão em 20 de setembro de 2025; a versão 1.10.4 veio em 19 de outubro de 2026, e a página mostra 25 versões desde julho de 2026.',
            'Alcance: a App Store dos EUA mostra 4,5 estrelas em 152 avaliações, um histórico modesto, mas real.',
            'Plataformas: iOS e iPadOS 16.0 ou posterior e macOS 14.0 ou posterior, além de um app para Apple Watch; nenhuma versão para Android foi encontrada.',
            'Site: a página não tem link para um site do desenvolvedor, e a única página pública do desenvolvedor encontrada é a política de privacidade.',
          ],
          callouts: [
            {
              type: 'note',
              text:
                'Esta análise se baseia na página da App Store, nos dados de consulta da Apple e na política de privacidade do desenvolvedor, consultados em 24 de outubro de 2026. Não envolveu uso prático, inspeção de rede nem testes de desempenho.',
            },
          ],
        },
        overview: {
          id: 'what-is-lm-mini',
          title: 'O que é o LM Mini?',
          content: [
            '**O LM Mini é um cliente de chat para modelos de linguagem locais e remotos em dispositivos Apple.** O subtítulo na App Store dos EUA é “AI Chat for Ollama & LM Studio”, e a página descreve um único app para “modelos no celular e sua configuração local no desktop”.',
            'O desenvolvedor listado é Sultan Haider; a App Store não mostra empresa nem site, e a página não cita vínculo com LM Studio, Ollama, Jan AI ou oMLX.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'Onde seus chats rodam',
          content: [
            '**O LM Mini é híbrido, não puramente local: a página descreve quatro caminhos, e o lugar onde um chat roda depende do modo escolhido.**',
          ],
          items: [
            '**No celular.** Você baixa um modelo e conversa sem internet. A página diz que os modelos do celular são menores que os hospedados e que a velocidade depende do aparelho. O chat com Apple Intelligence usa o modelo integrado ao aparelho e dispensa download.',
            '**No seu próprio computador.** O app se conecta ao LM Studio, Ollama, Jan AI ou oMLX por Wi‑Fi ou USB; o modelo roda então nesse computador, não no celular.',
            '**Pelo LM Mini Connect.** Um modo remoto para alcançar seu computador fora de casa, “criptografado com a sua chave”. Não se descreve como o tráfego é encaminhado.',
            '**Na nuvem, se você a adicionar.** Provedores de API opcionais, como OpenAI, OpenRouter, Mistral, DeepSeek e Google Gemini, recebem suas solicitações, e a busca na web via SearXNG envia as consultas a um servidor de busca. Também há backups criptografados na nuvem, opcionais.',
          ],
          note:
            'O diretório SiliconShelf marca o LM Mini como “on-device” e “offline” por palavra-chave e diz que não o testou; esta análise também não.',
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
              'Onde obter':
                '[App Store](https://apps.apple.com/br/app/lm-mini/id6751125309) (download gratuito, iOS ou iPadOS 16.0 ou posterior)',
            },
            {
              Plataforma: 'Mac',
              'Onde obter':
                'Mesma página da App Store (macOS 14.0 ou posterior); ela não diz se é uma versão nativa para Mac',
            },
            {
              Plataforma: 'Site',
              'Onde obter':
                'Nenhum site oficial encontrado; a página da App Store não tem link para nenhum',
            },
            {
              Plataforma: 'Política de privacidade',
              'Onde obter':
                '[Política de privacidade do LM Mini](https://neuro9.net/LMMini/privacy.html) (última atualização em 16 de agosto de 2025)',
            },
          ],
          note:
            'Versão analisada: 1.10.4, lançada em 19 de outubro de 2026. O modo conectado exige LM Studio, Ollama, Jan AI ou oMLX rodando em um computador. As notas da 1.10.4 incluem o chat com Apple Intelligence, uma configuração mais simples que mostra os servidores encontrados no Wi‑Fi, a escolha entre estilo de balões e largura total e uma página Pro aprimorada.',
        },
        pricing: {
          id: 'pricing',
          title: 'Preços',
          content: [
            '**O download é gratuito e um plano pago é vendido como compras no app: R$ 29,90 por mês, R$ 199,90 por ano ou R$ 799,90 uma única vez para acesso vitalício, conforme a [App Store do Brasil](https://apps.apple.com/br/app/lm-mini/id6751125309).**',
            'A página não diz quais recursos exigem uma compra. Os preços variam conforme a loja.',
          ],
        },
        features: {
          id: 'key-features',
          title: 'Recursos indicados pelo desenvolvedor',
          content: [
            '**Tudo o que segue vem da descrição da App Store e das notas de versão; nada foi testado.**',
          ],
          items: [
            '**Chat.** Histórico de conversas com pastas e acompanhamento do uso de contexto, personas, chat em grupo com até cinco modelos, memória, busca semântica no aparelho entre chats e geração em segundo plano.',
            '**Modelos e servidores.** Baixar e executar modelos no aparelho, conectar a servidores personalizados com cabeçalhos personalizados, gerenciar e baixar modelos no LM Studio pelo celular e importar chats do LM Studio.',
            '**Voz e imagens.** Chat de voz com Kokoro e geração de imagens via ComfyUI e Automatic1111.',
            '**Ferramentas e busca.** Busca na web via SearXNG e chamada de ferramentas MCP; desde a versão 1.10.3, as ferramentas MCP do LM Studio também ficam disponíveis na Siri e em Atalhos.',
            '**Dispositivos Apple.** Um app para Apple Watch desde a versão 1.10.0 e chat com Apple Intelligence desde a versão 1.10.4.',
          ],
          note: 'A versão instalada é que decide o que funciona.',
        },
        privacy: {
          id: 'privacy',
          title: 'Política de privacidade e fluxo de dados',
          content: [
            '**A política de privacidade diz que o app não coleta, armazena nem transmite dados pessoais a servidores externos ou terceiros, e que todo o processamento ocorre entre o seu aparelho e o seu servidor local do LM Studio.** Ela indica que histórico de chats, configurações e dados de conexão com o servidor ficam no aparelho e não cita serviços de análise ou publicidade.',
            'A política foi atualizada pela última vez em 16 de agosto de 2025, cinco semanas antes da primeira versão, e não menciona modelos no aparelho, Ollama, Jan AI, oMLX, LM Mini Connect, provedores de API na nuvem nem backups criptografados na nuvem. O rótulo de privacidade da App Store diz “Dados não coletados” e observa que a Apple não o verificou; a descrição acrescenta que as solicitações a provedores de nuvem opcionais vão ao provedor que você escolher.',
          ],
          callouts: [
            {
              type: 'note',
              text:
                'O app é de código fechado, então nenhuma dessas afirmações pode ser verificada no código, e a PromptQuorum não inspecionou o tráfego de rede. Quem usar APIs de nuvem, o LM Mini Connect ou backups na nuvem deve confirmar no app quais dados saem do aparelho.',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Para quem é indicado',
          items: [
            '**Usuários de iPhone e iPad que já usam LM Studio, Ollama, Jan AI ou oMLX.** Um único app cobre o servidor de casa e, quando você está fora, os modelos do celular.',
            '**Quem quer testar modelos no aparelho sem servidor.** Baixe um modelo ou use a Apple Intelligence em aparelhos compatíveis.',
            '**Usuários de ComfyUI, Automatic1111 ou ferramentas MCP** que querem tudo isso em um cliente de chat no celular.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'O que não conseguimos verificar',
          items: [
            '**Comportamento no uso real.** Esta análise não cronometrou respostas, não testou o uso offline nem mediu bateria e armazenamento.',
            '**O mecanismo e os modelos no aparelho.** A página não nomeia mecanismo de inferência, lista de modelos nem necessidade de armazenamento para o modo no aparelho.',
            '**Como funciona o LM Mini Connect.** A página diz que ele é criptografado com uma chave que você controla; não descreve o caminho que o tráfego percorre.',
            '**O que o plano pago libera.** A página não separa recursos gratuitos de pagos.',
            '**Atrito na configuração.** Duas avaliações públicas da App Store descrevem problemas: uma relata que o iOS nunca pediu acesso à rede local (março de 2026) e outra afirma que um app complementar para desktop é necessário, o que o desenvolvedor nega (julho de 2026).',
            '**Código-fonte e versão para Mac.** O app é de código fechado, nenhum repositório público foi encontrado, e a página não diz se a versão para Mac é nativa ou o app de iPad rodando no Mac.',
            '**Idiomas.** A página mostra apenas inglês, embora as notas de versão mencionem vozes em alemão e russo.',
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
              App: '[Enchanted](/pt/power-local-llm/enchanted-review)',
              Plataformas: 'iOS, macOS',
              'Preço / licença': 'Grátis / Apache 2.0',
              'Diferença principal': 'Cliente apenas para Ollama, sem modelos próprios',
            },
            {
              App: '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
              Plataformas: 'iOS, Android',
              'Preço / licença': 'Grátis / MIT',
              'Diferença principal': 'Chat de código aberto no aparelho com biblioteca de modelos própria',
            },
            {
              App: '[Private Mind](/pt/power-local-llm/private-mind-review)',
              Plataformas: 'iOS, Android',
              'Preço / licença': 'Grátis / MIT',
              'Diferença principal':
                'Chat offline de código aberto com perguntas sobre documentos no aparelho',
            },
            {
              App: '[AnythingLLM Mobile](/pt/power-local-llm/anythingllm-mobile-review)',
              Plataformas: 'iOS, Android',
              'Preço / licença': 'Grátis / MIT',
              'Diferença principal': 'Acesso remoto ao seu workspace local do AnythingLLM',
            },
          ],
          note:
            'Os dados dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app.',
        },
        faq: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            {
              q: 'O LM Mini funciona no Android?',
              a:
                'Nenhuma versão para Android foi encontrada; a página cobre apenas iPhone, iPad, Mac, Apple Watch e Apple Vision.',
            },
            {
              q: 'O que é o chat com Apple Intelligence no LM Mini?',
              a:
                'Adicionado na versão 1.10.4, ele conversa com o modelo integrado ao aparelho, sem download, em aparelhos compatíveis com iOS 26 e macOS 26. É separado dos modelos baixados e do seu próprio servidor.',
            },
            {
              q: 'Onde o LM Mini guarda as chaves de API?',
              a:
                'As notas da versão 1.10.3 dizem que chaves de API, tokens e cabeçalhos de servidor agora ficam no Keychain / Keystore, e não em configurações simples.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Veredito',
          content:
            'O LM Mini é um cliente para iPhone e iPad rico em recursos e atualizado com frequência, que trata o “local” como um espectro: modelos no celular, modelos no seu próprio computador, um caminho remoto até ele e APIs de nuvem opcionais. Seus limites são o código fechado, uma política de privacidade que descreve apenas a conexão com o LM Studio e um serviço remoto sem explicação. Serve a quem já usa LM Studio, Ollama ou Jan AI; quem precisa de um app de código aberto totalmente no aparelho deve comparar [Private Mind](/pt/power-local-llm/private-mind-review) ou [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
        },
        sources: {
          id: 'sources',
          title: 'Fontes',
          items: [
            '[LM Mini na App Store](https://apps.apple.com/us/app/lm-mini/id6751125309) — descrição, histórico de versões, compras no app, rótulo de privacidade e avaliações, consultados em 24 de outubro de 2026.',
            '[Política de privacidade do LM Mini](https://neuro9.net/LMMini/privacy.html) — tratamento de dados; última atualização em 16 de agosto de 2025.',
            '[Dados de consulta da Apple sobre o LM Mini](https://itunes.apple.com/lookup?id=6751125309&country=us) — versão, datas de lançamento, dispositivos compatíveis e tamanho do arquivo, consultados em 24 de outubro de 2026.',
            '[LM Mini no SiliconShelf](https://siliconshelf.app/apps/lm-mini/) — resumo de um diretório de terceiros que marca o app como “on-device” e “offline” por palavra-chave e diz que não o testou.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Leituras relacionadas',
          items: [
            '[Análise do Enchanted](/pt/power-local-llm/enchanted-review) — um cliente Ollama gratuito sob licença Apache 2.0 para iPhone e Mac.',
            '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat gratuito e de código aberto no aparelho para iOS e Android.',
            '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline gratuito sob licença MIT para iPhone e Android.',
            '[Análise do AnythingLLM Mobile](/pt/power-local-llm/anythingllm-mobile-review) — um cliente móvel para um workspace local do AnythingLLM.',
            '[Análise do LM Studio](/pt/power-local-llm/lm-studio-review) — o app de desktop ao qual o LM Mini se conecta.',
            '[Análise do Ollama](/pt/power-local-llm/ollama-review) — o servidor de modelos local que o LM Mini pode usar.',
            '[Melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama mais amplo para iPhone.',
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
      heroImage: '/images/lm-mini-review-hero-ar.webp',
      title:
        'مراجعة LM Mini: تطبيق دردشة لـ iPhone بذكاء اصطناعي على الجهاز وعلى خادمك المنزلي',
      seoTitle: 'مراجعة LM Mini: ذكاء اصطناعي على الجهاز وعلى خادمك',
      intro:
        'LM Mini تطبيق دردشة مجاني لأجهزة iPhone وiPad وMac من المطوّر Sultan Haider. وفق صفحته في App Store، يستطيع تشغيل النماذج على الجهاز، أو الاتصال بـ LM Studio أو Ollama أو Jan AI أو oMLX على حاسوبك الخاص، أو الوصول إلى ذلك الحاسوب عن بُعد. تعكس هذه المراجعة صفحة المتجر وسياسة الخصوصية لدى المطوّر، كما جرى الاطلاع عليهما في 24 أكتوبر 2026.',
      metaDescription:
        'مراجعة LM Mini: تطبيق دردشة مجاني لـ iPhone وiPad بنماذج على الجهاز واتصال بـ LM Studio وOllama ووصول عن بُعد. أين تعمل الدردشات وماذا تقول سياسة الخصوصية.',
      twitterDescription:
        'مراجعة LM Mini: تطبيق دردشة مجاني ومغلق المصدر لـ iPhone وiPad يجمع بين نماذج على الجهاز وخادم LM Studio أو Ollama الخاص بك وواجهات API سحابية اختيارية. أين تعمل محادثاتك فعلاً وما الذي لم يُتحقق منه.',
      audience:
        'مستخدمو iPhone وiPad الذين يريدون معرفة ما إذا كان LM Mini محلياً حقاً، وأي أوضاعه تُبقي المحادثات على أجهزتهم، وما الذي تؤكده المصادر وما لا تؤكده.',
      readTime: '6 دقائق للقراءة',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'مراجعة LM Mini',
      targetKeywords: [
        'مراجعة تطبيق lm mini',
        'lm mini iphone',
        'تطبيق lm studio للآيفون',
        'عميل ollama للآيفون',
        'دردشة ذكاء اصطناعي على الجهاز ios',
        'lm mini connect',
        'lm mini مقابل enchanted',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock:
        '**LM Mini تطبيق دردشة مغلق المصدر لـ iPhone وiPad يجمع بين نماذج على الجهاز واتصال بـ LM Studio أو Ollama أو Jan AI أو oMLX على حاسوبك الخاص.** **سياسة الخصوصية تعود إلى أغسطس 2025 وتصف الاتصال بـ LM Studio وحده، لذا تحقّق مما يفعله التطبيق اليوم قبل إرسال محادثات حساسة.**',
      quickAnswerTop: {
        ar: {
          question: 'هل يُبقي LM Mini محادثاتي على أجهزتي الخاصة؟',
          answer:
            'وفق الصفحة، في الغالب نعم: النماذج على الجهاز لا تحتاج إلى الإنترنت بعد التنزيل، والوضع المتصل يتحدث فقط مع حاسوب تديره بنفسك. أما واجهات API السحابية الاختيارية فترسل الطلبات إلى المزوّد الذي تختاره، ولم يُختبر أي من ذلك.',
          bullets: [
            'مجاني على [App Store](https://apps.apple.com/us/app/lm-mini/id6751125309)، لنظام iOS أو iPadOS 16.0 أو أحدث ونظام macOS 14.0 أو أحدث.',
            'دردشة Apple Intelligence دون تنزيل منذ الإصدار 1.10.4، على أجهزة iOS 26 وmacOS 26 المدعومة.',
            'تُباع فئة مدفوعة كمشتريات داخل التطبيق: شهرياً أو سنوياً أو مدى الحياة.',
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
          label: 'ما هو LM Mini؟',
          anchor: 'what-is-lm-mini',
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
          label: 'الميزات التي يذكرها المطوّر',
          anchor: 'key-features',
        },
        {
          label: 'سياسة الخصوصية وتدفق البيانات',
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
              text:
                'LM Mini تطبيق دردشة مغلق المصدر لأجهزة iPhone وiPad وMac، يستطيع تشغيل النماذج على الجهاز، أو الاتصال بخادم نماذج على حاسوبك الخاص، أو الوصول إلى ذلك الحاسوب عن بُعد.',
            },
            {
              type: 'plain-terms',
              text:
                'تثبّته من App Store ثم تختار وضعاً: تنزيل نموذج إلى الهاتف، أو توجيه التطبيق إلى LM Studio أو Ollama أو Jan AI أو oMLX في شبكتك، أو استخدام خدمة الوصول عن بُعد لدى المطوّر. أما مزوّدو السحابة مثل OpenAI فهم إضافات اختيارية.',
            },
          ],
          items: [
            'المطوّر: Sultan Haider، الذي نشر الإصدار الأول في 20 سبتمبر 2025؛ وتبعه الإصدار 1.10.4 في 19 أكتوبر 2026، وتعرض الصفحة 25 إصداراً منذ يوليو 2026.',
            'الانتشار: يعرض App Store الأمريكي 4.5 نجوم من 152 تقييماً، وهو سجل متواضع لكنه حقيقي.',
            'المنصات: iOS وiPadOS 16.0 أو أحدث وmacOS 14.0 أو أحدث، إضافة إلى تطبيق Apple Watch؛ ولم يُعثر على نسخة Android.',
            'الموقع: لا تتضمن الصفحة رابطاً لموقع المطوّر، والصفحة العامة الوحيدة للمطوّر التي وُجدت هي سياسة الخصوصية.',
          ],
          callouts: [
            {
              type: 'note',
              text:
                'تستند هذه المراجعة إلى صفحة App Store وبيانات الاستعلام من Apple وسياسة الخصوصية لدى المطوّر، كما جرى الاطلاع عليها في 24 أكتوبر 2026. ولم يُجرَ استخدام فعلي أو فحص للشبكة أو اختبارات أداء.',
            },
          ],
        },
        overview: {
          id: 'what-is-lm-mini',
          title: 'ما هو LM Mini؟',
          content: [
            '**LM Mini عميل دردشة لنماذج اللغة المحلية والبعيدة على أجهزة Apple.** العنوان الفرعي في App Store الأمريكي هو “AI Chat for Ollama & LM Studio”، وتصف الصفحة تطبيقاً واحداً لـ “النماذج على الهاتف وإعدادك المحلي على سطح المكتب”.',
            'المطوّر المذكور هو Sultan Haider؛ ولا يعرض App Store اسم شركة أو موقعاً، ولا تذكر الصفحة أي ارتباط بـ LM Studio أو Ollama أو Jan AI أو oMLX.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'أين تعمل محادثاتك',
          content: [
            '**LM Mini هجين وليس محلياً بالكامل: تصف الصفحة أربعة مسارات، ويعتمد مكان تشغيل المحادثة على الوضع الذي تختاره.**',
          ],
          items: [
            '**على الهاتف.** تنزّل نموذجاً وتدردش دون إنترنت. تقول الصفحة إن نماذج الهاتف أصغر من النماذج المستضافة وإن السرعة تعتمد على الجهاز. وتستخدم دردشة Apple Intelligence النموذج المدمج في الجهاز ولا تحتاج إلى تنزيل.',
            '**على حاسوبك الخاص.** يتصل التطبيق بـ LM Studio أو Ollama أو Jan AI أو oMLX عبر Wi‑Fi أو USB؛ ويعمل النموذج حينها على ذلك الحاسوب لا على الهاتف.',
            '**عبر LM Mini Connect.** وضع بعيد للوصول إلى حاسوبك خارج المنزل، “مشفّر بمفتاحك”. ولا يُوصف كيف يُوجَّه الاتصال.',
            '**في السحابة، إن أضفتها.** يتلقى مزوّدو API الاختياريون مثل OpenAI وOpenRouter وMistral وDeepSeek وGoogle Gemini طلباتك، وترسل عمليات البحث في الويب عبر SearXNG الاستعلامات إلى خادم بحث. وتتوفر أيضاً نسخ احتياطية سحابية مشفّرة اختيارية.',
          ],
          note:
            'يصنّف دليل SiliconShelf تطبيق LM Mini بوسمَي “on-device” و“offline” حسب الكلمات المفتاحية ويذكر أنه لم يختبره؛ وهذه المراجعة لم تختبره أيضاً.',
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
              'مكان الحصول عليه':
                '[App Store](https://apps.apple.com/us/app/lm-mini/id6751125309) (تنزيل مجاني، iOS أو iPadOS 16.0 أو أحدث)',
            },
            {
              'المنصة': 'Mac',
              'مكان الحصول عليه':
                'صفحة App Store نفسها (macOS 14.0 أو أحدث)؛ ولا تذكر ما إذا كانت نسخة أصلية لـ Mac',
            },
            {
              'المنصة': 'الموقع الإلكتروني',
              'مكان الحصول عليه': 'لم يُعثر على موقع رسمي؛ ولا تتضمن صفحة App Store أي رابط',
            },
            {
              'المنصة': 'سياسة الخصوصية',
              'مكان الحصول عليه':
                '[سياسة الخصوصية لـ LM Mini](https://neuro9.net/LMMini/privacy.html) (آخر تحديث: 16 أغسطس 2025)',
            },
          ],
          note:
            'الإصدار الذي روجع: 1.10.4، صدر في 19 أكتوبر 2026. يتطلب الوضع المتصل تشغيل LM Studio أو Ollama أو Jan AI أو oMLX على حاسوب. وتضيف ملاحظات 1.10.4 دردشة Apple Intelligence، وإعداداً أبسط يعرض الخوادم المكتشفة على Wi‑Fi، وخيار نمط الدردشة بين الفقاعات والعرض الكامل، وصفحة Pro محسّنة.',
        },
        pricing: {
          id: 'pricing',
          title: 'الأسعار',
          content: [
            '**التنزيل مجاني وتُباع فئة مدفوعة كمشتريات داخل التطبيق: 4.99 دولاراً شهرياً أو 29.99 دولاراً سنوياً أو 119.99 دولاراً مرة واحدة للوصول مدى الحياة، كما يعرضها [App Store الأمريكي](https://apps.apple.com/us/app/lm-mini/id6751125309).**',
            'لا تذكر الصفحة أي الميزات تتطلب شراءً. وتختلف الأسعار باختلاف المتجر.',
          ],
        },
        features: {
          id: 'key-features',
          title: 'الميزات التي يذكرها المطوّر',
          content: [
            '**كل ما يلي مصدره وصف App Store وملاحظات الإصدارات، ولم يُختبر منه شيء.**',
          ],
          items: [
            '**الدردشة.** سجل محادثات مع مجلدات وتتبّع لاستخدام السياق، وشخصيات، ودردشة جماعية مع ما يصل إلى خمسة نماذج، وذاكرة، وبحث دلالي على الجهاز عبر المحادثات، وتوليد في الخلفية.',
            '**النماذج والخوادم.** تنزيل النماذج وتشغيلها على الجهاز، والاتصال بخوادم مخصصة برؤوس مخصصة، وإدارة نماذج LM Studio وتنزيلها من الهاتف، واستيراد المحادثات من LM Studio.',
            '**الصوت والصور.** دردشة صوتية عبر Kokoro، وتوليد الصور عبر ComfyUI وAutomatic1111.',
            '**الأدوات والبحث.** بحث في الويب عبر SearXNG واستدعاء أدوات MCP؛ ومنذ الإصدار 1.10.3 أصبحت أدوات MCP في LM Studio متاحة أيضاً من Siri والاختصارات.',
            '**أجهزة Apple.** تطبيق Apple Watch منذ الإصدار 1.10.0، ودردشة Apple Intelligence منذ الإصدار 1.10.4.',
          ],
          note: 'النسخة المثبّتة هي المرجع النهائي لما يعمل فعلاً.',
        },
        privacy: {
          id: 'privacy',
          title: 'سياسة الخصوصية وتدفق البيانات',
          content: [
            '**تقول سياسة الخصوصية إن التطبيق لا يجمع بيانات شخصية ولا يخزّنها ولا ينقلها إلى خوادم خارجية أو أطراف ثالثة، وإن كل المعالجة تجري بين جهازك وخادم LM Studio المحلي لديك.** وتذكر أن سجل المحادثات والإعدادات وتفاصيل الاتصال بالخادم تُخزَّن على الجهاز، ولا تسمّي أي خدمات تحليلات أو إعلانات.',
            'آخر تحديث للسياسة كان في 16 أغسطس 2025، أي قبل الإصدار الأول بخمسة أسابيع، ولا تذكر النماذج على الجهاز ولا Ollama ولا Jan AI ولا oMLX ولا LM Mini Connect ولا مزوّدي API السحابية ولا النسخ الاحتياطية السحابية المشفّرة. وتقول بطاقة الخصوصية في App Store “لا تُجمع بيانات” مع ملاحظة أن Apple لم تتحقق منها؛ وتضيف الصفحة أن الطلبات إلى مزوّدي السحابة الاختياريين تذهب إلى المزوّد الذي تختاره.',
          ],
          callouts: [
            {
              type: 'note',
              text:
                'التطبيق مغلق المصدر، لذا لا يمكن التحقق من هذه العبارات في الشيفرة، ولم تفحص PromptQuorum حركة الشبكة. على من يستخدم واجهات API السحابية أو LM Mini Connect أو النسخ الاحتياطية السحابية أن يتأكد داخل التطبيق من البيانات التي تغادر الجهاز.',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'لمن يناسب',
          items: [
            '**مستخدمو iPhone وiPad الذين يشغّلون بالفعل LM Studio أو Ollama أو Jan AI أو oMLX.** يغطي تطبيق واحد الخادم المنزلي، ونماذج الهاتف عندما تكون بعيداً عنه.',
            '**من يريد تجربة نماذج على الجهاز دون خادم.** نزّل نموذجاً أو استخدم Apple Intelligence على الأجهزة المدعومة.',
            '**مستخدمو ComfyUI أو Automatic1111 أو أدوات MCP** الذين يريدونها داخل عميل دردشة على الهاتف.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'ما لم نتمكن من التحقق منه',
          items: [
            '**السلوك في الاستخدام الفعلي.** لم تقِس هذه المراجعة زمن الإجابات ولم تختبر الاستخدام دون اتصال ولم تقس البطارية والتخزين.',
            '**بيئة التشغيل والنماذج على الجهاز.** لا تذكر الصفحة محرك استدلال ولا قائمة نماذج ولا حاجة تخزينية لوضع الجهاز.',
            '**طريقة عمل LM Mini Connect.** تقول الصفحة إنه مشفّر بمفتاح تتحكم فيه؛ ولا تصف المسار الذي تسلكه الحركة.',
            '**ما تفتحه الفئة المدفوعة.** لا تفصل الصفحة الميزات المجانية عن المدفوعة.',
            '**صعوبات الإعداد.** يصف تقييمان عامان في App Store مشكلات: أحدهما يفيد بأن iOS لم يطلب قط الإذن بالوصول إلى الشبكة المحلية (مارس 2026)، والآخر يقول إن تطبيقاً مساعداً لسطح المكتب مطلوب، وهو ما ينفيه المطوّر (يوليو 2026).',
            '**الشيفرة المصدرية ونسخة Mac.** التطبيق مغلق المصدر ولم يُعثر على مستودع عام، ولا تذكر الصفحة ما إذا كانت نسخة Mac أصلية أم تطبيق iPad يعمل على Mac.',
            '**اللغات.** تعرض الصفحة الإنجليزية لغةً وحيدة، مع أن ملاحظات الإصدارات تذكر أصواتاً ألمانية وروسية.',
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
              'التطبيق': '[Enchanted](/ar/power-local-llm/enchanted-review)',
              'المنصات': 'iOS وmacOS',
              'السعر / الترخيص': 'مجاني / Apache 2.0',
              'الفرق الرئيسي': 'عميل لـ Ollama فقط دون نماذج خاصة به',
            },
            {
              'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
              'المنصات': 'iOS وAndroid',
              'السعر / الترخيص': 'مجاني / MIT',
              'الفرق الرئيسي': 'دردشة مفتوحة المصدر على الجهاز بمكتبة نماذج خاصة',
            },
            {
              'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
              'المنصات': 'iOS وAndroid',
              'السعر / الترخيص': 'مجاني / MIT',
              'الفرق الرئيسي': 'دردشة دون اتصال مفتوحة المصدر مع أسئلة عن المستندات على الجهاز',
            },
            {
              'التطبيق': '[AnythingLLM Mobile](/ar/power-local-llm/anythingllm-mobile-review)',
              'المنصات': 'iOS وAndroid',
              'السعر / الترخيص': 'مجاني / MIT',
              'الفرق الرئيسي': 'وصول عن بُعد إلى مساحة AnythingLLM المحلية لديك',
            },
          ],
          note:
            'تتغير تفاصيل المنافسين كثيراً؛ تأكد من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق.',
        },
        faq: {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            {
              q: 'هل يعمل LM Mini على Android؟',
              a:
                'لم يُعثر على نسخة Android؛ وتغطي الصفحة أجهزة iPhone وiPad وMac وApple Watch وApple Vision فقط.',
            },
            {
              q: 'ما هي دردشة Apple Intelligence في LM Mini؟',
              a:
                'أُضيفت في الإصدار 1.10.4 وتدردش مع النموذج المدمج في الجهاز دون تنزيل، على أجهزة iOS 26 وmacOS 26 المدعومة. وهي منفصلة عن النماذج المنزّلة وعن خادمك الخاص.',
            },
            {
              q: 'أين يخزّن LM Mini مفاتيح API؟',
              a:
                'تقول ملاحظات الإصدار 1.10.3 إن مفاتيح API والرموز ورؤوس الخادم تُحفظ الآن في Keychain / Keystore بدلاً من الإعدادات العادية.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'الخلاصة',
          content:
            'LM Mini عميل غني بالميزات ومحدَّث باستمرار لـ iPhone وiPad، يتعامل مع “المحلي” كطيف: نماذج على الهاتف، ونماذج على حاسوبك الخاص، ومسار بعيد إليه، وواجهات API سحابية اختيارية. حدوده هي الشيفرة المغلقة، وسياسة خصوصية تصف اتصال LM Studio وحده، وخدمة وصول بعيد دون شرح. يناسب القراء الذين يشغّلون بالفعل LM Studio أو Ollama أو Jan AI؛ ومن يحتاج تطبيقاً مفتوح المصدر يعمل كلياً على الجهاز فليقارن [Private Mind](/ar/power-local-llm/private-mind-review) أو [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
        },
        sources: {
          id: 'sources',
          title: 'المصادر',
          items: [
            '[LM Mini على App Store](https://apps.apple.com/us/app/lm-mini/id6751125309) — الوصف وسجل الإصدارات والمشتريات داخل التطبيق وبطاقة الخصوصية والتقييمات، بتاريخ 24 أكتوبر 2026.',
            '[سياسة الخصوصية لـ LM Mini](https://neuro9.net/LMMini/privacy.html) — معالجة البيانات؛ آخر تحديث: 16 أغسطس 2025.',
            '[بيانات استعلام Apple عن LM Mini](https://itunes.apple.com/lookup?id=6751125309&country=us) — الإصدار وتواريخ الصدور والأجهزة المدعومة وحجم الملف، بتاريخ 24 أكتوبر 2026.',
            '[LM Mini على SiliconShelf](https://siliconshelf.app/apps/lm-mini/) — ملخص من دليل تابع لجهة خارجية يصنّف التطبيق بوسمَي “on-device” و“offline” حسب الكلمات المفتاحية ويذكر أنه لم يختبره.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            '[مراجعة Enchanted](/ar/power-local-llm/enchanted-review) — عميل Ollama مجاني بترخيص Apache 2.0 لـ iPhone وMac.',
            '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر على الجهاز لنظامَي iOS وAndroid.',
            '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مجاني دون اتصال بترخيص MIT لـ iPhone وAndroid.',
            '[مراجعة AnythingLLM Mobile](/ar/power-local-llm/anythingllm-mobile-review) — عميل جوال لمساحة AnythingLLM المحلية.',
            '[مراجعة LM Studio](/ar/power-local-llm/lm-studio-review) — تطبيق سطح المكتب الذي يتصل به LM Mini.',
            '[مراجعة Ollama](/ar/power-local-llm/ollama-review) — خادم النماذج المحلي الذي يستطيع LM Mini استخدامه.',
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
      heroImage: '/images/lm-mini-review-hero-zh.webp',
      title: 'LM Mini 评测：支持设备端与家用服务器 AI 的 iPhone 聊天应用',
      seoTitle: 'LM Mini 评测：设备端与家用服务器 AI 的 iPhone 应用',
      intro:
        'LM Mini 是开发者 Sultan Haider 推出的免费聊天应用，适用于 iPhone、iPad 和 Mac。根据 App Store 页面，它可以在设备上运行模型，连接你自己电脑上的 LM Studio、Ollama、Jan AI 或 oMLX，也可以远程访问那台电脑。本评测基于 2026 年 10 月 24 日查看的商店页面和开发者的隐私政策。',
      metaDescription:
        'LM Mini 评测：免费的 iPhone 和 iPad 聊天应用，支持设备端模型、LM Studio 与 Ollama 连接及远程访问。聊天在哪里运行，隐私政策怎么说。',
      twitterDescription:
        'LM Mini 评测：一款免费、闭源的 iPhone 和 iPad 聊天应用，把设备端模型、你自己的 LM Studio 或 Ollama 服务器和可选云端 API 结合在一起。聊天究竟在哪里运行，哪些内容尚未核实。',
      audience:
        '想知道 LM Mini 是否真正本地化、哪些模式能让聊天留在自己硬件上、以及来源确认了什么又没有确认什么的 iPhone 和 iPad 用户。',
      readTime: '阅读约6分钟',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'LM Mini 评测',
      targetKeywords: [
        'lm mini 应用评测',
        'lm mini iphone',
        'lm studio iphone 应用',
        'ollama iphone 客户端',
        '设备端 ai 聊天 ios',
        'lm mini connect',
        'lm mini 对比 enchanted',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock:
        '**LM Mini 是一款闭源的 iPhone 和 iPad 聊天应用，把设备端模型与你自己电脑上的 LM Studio、Ollama、Jan AI 或 oMLX 连接结合在一起。** **它的隐私政策写于 2025 年 8 月，只描述了与 LM Studio 的连接，因此在发送敏感聊天内容前，请先确认应用现在的实际行为。**',
      quickAnswerTop: {
        zh: {
          question: 'LM Mini 会把我的聊天留在自己的设备上吗？',
          answer:
            '根据页面说明，大体上会：设备端模型下载后无需联网，连接模式只与你自己运行的电脑通信。可选的云端 API 会把请求发给你选择的服务商。以上内容均未经测试。',
          bullets: [
            '在 [App Store](https://apps.apple.com/us/app/lm-mini/id6751125309) 免费下载，需要 iOS 或 iPadOS 16.0 及以上、macOS 14.0 及以上。',
            '自 1.10.4 版起，在支持的 iOS 26 和 macOS 26 设备上可使用无需下载的 Apple Intelligence 聊天。',
            '付费档位以应用内购买出售：按月、按年或买断。',
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
          label: 'LM Mini 是什么？',
          anchor: 'what-is-lm-mini',
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
          label: '开发者列出的功能',
          anchor: 'key-features',
        },
        {
          label: '隐私政策与数据流向',
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
              text:
                'LM Mini 是一款闭源的 iPhone、iPad 和 Mac 聊天应用，可以在设备上运行模型、连接你自己电脑上的模型服务器，或远程访问那台电脑。',
            },
            {
              type: 'plain-terms',
              text:
                '从 App Store 安装后选择一种模式：把模型下载到手机、让应用连接你网络中的 LM Studio、Ollama、Jan AI 或 oMLX，或使用开发者的远程服务。OpenAI 等云端服务商是可选的附加项。',
            },
          ],
          items: [
            '开发者：Sultan Haider，首个版本发布于 2025 年 9 月 20 日；1.10.4 版发布于 2026 年 10 月 19 日，页面显示自 2026 年 7 月起共有 25 次发布。',
            '口碑：美国 App Store 显示 152 个评分、平均 4.5 星，规模不大但确有记录。',
            '平台：iOS 和 iPadOS 16.0 及以上、macOS 14.0 及以上，另有 Apple Watch 应用；未发现 Android 版本。',
            '网站：页面没有链接到开发者网站，找到的唯一公开开发者页面是隐私政策。',
          ],
          callouts: [
            {
              type: 'note',
              text:
                '本评测基于 2026 年 10 月 24 日查看的 App Store 页面、Apple 的查询数据和开发者的隐私政策。未进行实际使用、网络检查或基准测试。',
            },
          ],
        },
        overview: {
          id: 'what-is-lm-mini',
          title: 'LM Mini 是什么？',
          content: [
            '**LM Mini 是适用于 Apple 设备的聊天客户端，可连接本地和远程语言模型。** 美国 App Store 的副标题是 “AI Chat for Ollama & LM Studio”，说明文字称这是一款同时覆盖“手机端模型和你的桌面本地环境”的应用。',
            '开发者标注为 Sultan Haider；App Store 未显示公司名称或网站，页面也没有提到与 LM Studio、Ollama、Jan AI 或 oMLX 的任何关联。',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: '你的聊天在哪里运行',
          content: [
            '**LM Mini 是混合型而非纯本地：页面描述了四条路径，聊天在哪里运行取决于你选择的模式。**',
          ],
          items: [
            '**在手机上。** 下载模型后即可无网络聊天。页面指出，手机端模型比托管模型小，速度取决于设备。Apple Intelligence 聊天使用设备内置模型，无需下载。',
            '**在你自己的电脑上。** 应用通过 Wi‑Fi 或 USB 连接 LM Studio、Ollama、Jan AI 或 oMLX；此时模型运行在那台电脑上，而不是手机上。',
            '**通过 LM Mini Connect。** 一种在外出时访问自己电脑的远程模式，“用你的密钥加密”。流量如何中转没有说明。',
            '**在云端（如果你添加）。** OpenAI、OpenRouter、Mistral、DeepSeek 和 Google Gemini 等可选 API 服务商会收到你的请求，通过 SearXNG 的网页搜索会把查询发送到搜索服务器。此外还有可选的加密云备份。',
          ],
          note:
            'SiliconShelf 目录通过关键词给 LM Mini 打上 “on-device” 和 “offline” 标签，并表示未做测试；本评测同样没有测试。',
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
              '获取方式':
                '[App Store](https://apps.apple.com/us/app/lm-mini/id6751125309)（免费下载，iOS 或 iPadOS 16.0 及以上）',
            },
            {
              '平台': 'Mac',
              '获取方式': '同一个 App Store 页面（macOS 14.0 及以上）；页面未说明是否为原生 Mac 版本',
            },
            {
              '平台': '网站',
              '获取方式': '未找到官方网站；App Store 页面也没有链接',
            },
            {
              '平台': '隐私政策',
              '获取方式':
                '[LM Mini 隐私政策](https://neuro9.net/LMMini/privacy.html)（最后更新于 2025 年 8 月 16 日）',
            },
          ],
          note:
            '评测版本：1.10.4，发布于 2026 年 10 月 19 日。连接模式需要电脑上运行 LM Studio、Ollama、Jan AI 或 oMLX。1.10.4 的更新说明包括 Apple Intelligence 聊天、能显示 Wi‑Fi 中已发现服务器的更简单设置、气泡与全宽聊天样式可选，以及改进的 Pro 页面。',
        },
        pricing: {
          id: 'pricing',
          title: '价格',
          content: [
            '**下载免费，付费档位以应用内购买出售：按月 $4.99、按年 $29.99，或一次性 $119.99 买断，以[美国 App Store](https://apps.apple.com/us/app/lm-mini/id6751125309) 的显示为准。**',
            '页面没有说明哪些功能需要购买。不同商店的价格不同。',
          ],
        },
        features: {
          id: 'key-features',
          title: '开发者列出的功能',
          content: [
            '**以下内容全部来自 App Store 说明和更新说明，均未经测试。**',
          ],
          items: [
            '**聊天。** 带文件夹的对话历史和上下文用量显示、角色设定、最多五个模型的群聊、记忆、跨聊天的设备端语义搜索，以及后台生成。',
            '**模型与服务器。** 下载并运行设备端模型，连接带自定义请求头的自定义服务器，在手机上管理和下载 LM Studio 的模型，并从 LM Studio 导入聊天。',
            '**语音与图像。** 使用 Kokoro 的语音聊天，以及通过 ComfyUI 和 Automatic1111 生成图像。',
            '**工具与搜索。** 通过 SearXNG 的网页搜索和 MCP 工具调用；自 1.10.3 版起，LM Studio 的 MCP 工具也可从 Siri 和快捷指令使用。',
            '**Apple 设备。** 自 1.10.0 版起提供 Apple Watch 应用，自 1.10.4 版起提供 Apple Intelligence 聊天。',
          ],
          note: '实际可用的功能以安装的版本为准。',
        },
        privacy: {
          id: 'privacy',
          title: '隐私政策与数据流向',
          content: [
            '**隐私政策称，应用不会收集、存储或向外部服务器及第三方传输个人数据，所有处理都发生在你的设备与你本地的 LM Studio 服务器之间。** 政策说聊天记录、设置和服务器连接信息保存在设备上，并未提到任何分析或广告服务。',
            '该政策最后更新于 2025 年 8 月 16 日，比首个版本早五周，其中没有提到设备端模型、Ollama、Jan AI、oMLX、LM Mini Connect、云端 API 服务商或加密云备份。App Store 的隐私标签显示“未收集数据”，并注明 Apple 未对此核实；说明文字补充称，发往可选云端服务商的请求会发送到你选择的服务商。',
          ],
          callouts: [
            {
              type: 'note',
              text:
                '该应用为闭源，这些说法无法通过代码核对，PromptQuorum 也没有检查网络流量。使用云端 API、LM Mini Connect 或云备份的用户，应在应用内确认哪些数据会离开设备。',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: '适合哪些人使用',
          items: [
            '**已经在运行 LM Studio、Ollama、Jan AI 或 oMLX 的 iPhone 和 iPad 用户。** 一个应用既覆盖家里的服务器，也覆盖外出时手机上的模型。',
            '**想在没有服务器的情况下尝试设备端模型的人。** 下载一个模型，或在支持的设备上使用 Apple Intelligence。',
            '**使用 ComfyUI、Automatic1111 或 MCP 工具的用户**，希望在手机聊天客户端中使用它们。',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: '我们无法核实的内容',
          items: [
            '**实际使用表现。** 本评测没有计时响应、测试离线使用，也没有测量电量和存储占用。',
            '**设备端运行时和模型。** 页面没有说明设备端模式使用的推理引擎、模型列表或所需存储空间。',
            '**LM Mini Connect 的工作方式。** 页面称其用你掌握的密钥加密，但没有描述流量走的路径。',
            '**付费档位解锁什么。** 页面没有区分免费功能和付费功能。',
            '**设置上的麻烦。** App Store 上有两条公开评论提到问题：一条称 iOS 从未请求本地网络访问权限（2026 年 3 月），另一条称需要桌面配套应用，开发者对此予以否认（2026 年 7 月）。',
            '**源代码与 Mac 版本。** 应用为闭源，未找到公开仓库，页面也没有说明 Mac 版是原生版本还是在 Mac 上运行的 iPad 应用。',
            '**语言。** 页面只列出英语，但更新说明提到了德语和俄语语音。',
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
              '应用': '[Enchanted](/zh/power-local-llm/enchanted-review)',
              '平台': 'iOS、macOS',
              '价格 / 许可证': '免费 / Apache 2.0',
              '主要区别': '仅支持 Ollama 的客户端，自身不带模型',
            },
            {
              '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
              '平台': 'iOS、Android',
              '价格 / 许可证': '免费 / MIT',
              '主要区别': '带自有模型库的开源设备端聊天',
            },
            {
              '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
              '平台': 'iOS、Android',
              '价格 / 许可证': '免费 / MIT',
              '主要区别': '支持设备端文档问答的开源离线聊天',
            },
            {
              '应用': '[AnythingLLM Mobile](/zh/power-local-llm/anythingllm-mobile-review)',
              '平台': 'iOS、Android',
              '价格 / 许可证': '免费 / MIT',
              '主要区别': '远程访问你的本地 AnythingLLM 工作区',
            },
          ],
          note: '竞品信息变化很快；请在各应用自己的页面上确认当前的价格、许可证和平台。',
        },
        faq: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            {
              q: 'LM Mini 能在 Android 上运行吗？',
              a: '未发现 Android 版本；页面只覆盖 iPhone、iPad、Mac、Apple Watch 和 Apple Vision。',
            },
            {
              q: 'LM Mini 的 Apple Intelligence 聊天是什么？',
              a:
                '它在 1.10.4 版中加入，可在支持的 iOS 26 和 macOS 26 设备上，无需下载就与设备内置模型聊天。它独立于已下载的模型和你自己的服务器。',
            },
            {
              q: 'LM Mini 把 API 密钥存放在哪里？',
              a: '1.10.3 版的更新说明称，API 密钥、令牌和服务器请求头现在保存在 Keychain / Keystore 中，而不是普通设置里。',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: '结论',
          content:
            'LM Mini 是一款功能丰富、更新活跃的 iPhone 和 iPad 客户端，把“本地”当作一个光谱来对待：手机上的模型、你自己电脑上的模型、通往它的远程路径，以及可选的云端 API。它的局限在于代码闭源、隐私政策只描述了 LM Studio 连接，以及远程服务缺少说明。它适合已经在运行 LM Studio、Ollama 或 Jan AI 的读者；如果需要完全在设备上运行的开源应用，可以对比 [Private Mind](/zh/power-local-llm/private-mind-review) 或 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)。',
        },
        sources: {
          id: 'sources',
          title: '来源',
          items: [
            '[App Store 上的 LM Mini](https://apps.apple.com/us/app/lm-mini/id6751125309) — 说明、版本历史、应用内购买、隐私标签和评分，查看于 2026 年 10 月 24 日。',
            '[LM Mini 隐私政策](https://neuro9.net/LMMini/privacy.html) — 数据处理方式；最后更新于 2025 年 8 月 16 日。',
            '[Apple 提供的 LM Mini 查询数据](https://itunes.apple.com/lookup?id=6751125309&country=us) — 版本、发布日期、支持的设备和文件大小，查看于 2026 年 10 月 24 日。',
            '[SiliconShelf 上的 LM Mini](https://siliconshelf.app/apps/lm-mini/) — 第三方目录的摘要，通过关键词给应用打上 “on-device” 和 “offline” 标签，并表示未做测试。',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '延伸阅读',
          items: [
            '[Enchanted 评测](/zh/power-local-llm/enchanted-review) — 适用于 iPhone 和 Mac 的免费 Apache 2.0 Ollama 客户端。',
            '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 适用于 iOS 和 Android 的免费开源设备端聊天客户端。',
            '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 适用于 iPhone 和 Android 的免费 MIT 许可离线聊天应用。',
            '[AnythingLLM Mobile 评测](/zh/power-local-llm/anythingllm-mobile-review) — 用于本地 AnythingLLM 工作区的移动客户端。',
            '[LM Studio 评测](/zh/power-local-llm/lm-studio-review) — LM Mini 所连接的桌面应用。',
            '[Ollama 评测](/zh/power-local-llm/ollama-review) — LM Mini 可以使用的本地模型服务器。',
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
      heroImage: '/images/lm-mini-review-hero-ko.webp',
      title: 'LM Mini 리뷰: 기기 내 AI와 홈 서버 AI를 지원하는 iPhone 채팅 앱',
      seoTitle: 'LM Mini 리뷰: 기기 내·홈 서버 AI iPhone 앱',
      intro:
        'LM Mini는 개발자 Sultan Haider가 만든 iPhone, iPad, Mac용 무료 채팅 앱입니다. App Store 소개에 따르면 기기에서 모델을 실행하거나, 직접 운영하는 컴퓨터의 LM Studio, Ollama, Jan AI, oMLX에 연결하거나, 그 컴퓨터에 원격으로 접속할 수 있습니다. 이 리뷰는 2026년 10월 24일에 확인한 스토어 소개와 개발자의 개인정보 처리방침을 바탕으로 합니다.',
      metaDescription:
        'LM Mini 리뷰: 기기 내 모델, LM Studio·Ollama 연결, 원격 접속을 지원하는 무료 iPhone·iPad 채팅 앱. 채팅이 실행되는 위치와 개인정보 처리방침을 살펴봅니다.',
      twitterDescription:
        'LM Mini 리뷰: 기기 내 모델, 직접 운영하는 LM Studio·Ollama 서버, 선택형 클라우드 API를 함께 쓰는 무료 클로즈드 소스 iPhone·iPad 채팅 앱. 채팅이 실제로 실행되는 위치와 확인되지 않은 사항을 정리했습니다.',
      audience:
        'LM Mini가 정말 로컬인지, 어떤 모드에서 채팅이 자신의 하드웨어에 머무는지, 출처가 무엇을 확인하고 무엇을 확인하지 않는지 알고 싶은 iPhone·iPad 사용자를 위한 글입니다.',
      readTime: '6분 읽기',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'LM Mini 리뷰',
      targetKeywords: [
        'lm mini 앱 리뷰',
        'lm mini iphone',
        'lm studio iphone 앱',
        'ollama iphone 클라이언트',
        '기기 내 ai 채팅 ios',
        'lm mini connect',
        'lm mini enchanted 비교',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock:
        '**LM Mini는 기기 내 모델과 직접 운영하는 컴퓨터의 LM Studio, Ollama, Jan AI, oMLX 연결을 결합한 클로즈드 소스 iPhone·iPad 채팅 앱입니다.** **개인정보 처리방침은 2025년 8월 자료로 LM Studio 연결만 설명하므로, 민감한 채팅을 보내기 전에 앱이 현재 어떻게 동작하는지 확인하시기 바랍니다.**',
      quickAnswerTop: {
        ko: {
          question: 'LM Mini는 내 채팅을 내 기기에만 두나요?',
          answer:
            '소개 내용에 따르면 대체로 그렇습니다. 기기 내 모델은 다운로드 후 인터넷이 필요 없고, 연결 모드는 직접 운영하는 컴퓨터하고만 통신합니다. 선택형 클라우드 API는 선택한 제공업체로 요청을 보내며, 이 중 어느 것도 테스트하지 않았습니다.',
          bullets: [
            '[App Store](https://apps.apple.com/kr/app/lm-mini/id6751125309)에서 무료이며 iOS·iPadOS 16.0 이상, macOS 14.0 이상을 지원합니다.',
            '버전 1.10.4부터 지원되는 iOS 26·macOS 26 기기에서 다운로드 없이 Apple Intelligence 채팅을 쓸 수 있습니다.',
            '유료 등급은 앱 내 구입으로 판매되며 월간, 연간, 평생 이용권이 있습니다.',
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
          label: 'LM Mini란 무엇인가?',
          anchor: 'what-is-lm-mini',
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
          label: '개발자가 밝힌 기능',
          anchor: 'key-features',
        },
        {
          label: '개인정보 처리방침과 데이터 흐름',
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
              text:
                'LM Mini는 기기에서 모델을 실행하거나, 직접 운영하는 컴퓨터의 모델 서버에 연결하거나, 그 컴퓨터에 원격으로 접속할 수 있는 클로즈드 소스 iPhone·iPad·Mac 채팅 앱입니다.',
            },
            {
              type: 'plain-terms',
              text:
                'App Store에서 설치한 뒤 모드를 고릅니다. 휴대폰에 모델을 내려받거나, 네트워크의 LM Studio, Ollama, Jan AI, oMLX에 연결하거나, 개발자의 원격 서비스를 사용합니다. OpenAI 같은 클라우드 제공업체는 선택 사항입니다.',
            },
          ],
          items: [
            '개발자: Sultan Haider이며 첫 버전은 2025년 9월 20일에 출시되었고, 버전 1.10.4는 2026년 10월 19일에 나왔습니다. 소개 페이지에는 2026년 7월 이후 25개 버전이 표시됩니다.',
            '이용 실적: 미국 App Store에서 평점 152개에 별 4.5개로, 규모는 작지만 실제 이용 기록이 있습니다.',
            '플랫폼: iOS·iPadOS 16.0 이상과 macOS 14.0 이상, 그리고 Apple Watch 앱이 있으며 Android 버전은 찾지 못했습니다.',
            '웹사이트: 소개 페이지에 개발자 웹사이트 링크가 없고, 찾은 공개 페이지는 개인정보 처리방침뿐입니다.',
          ],
          callouts: [
            {
              type: 'note',
              text:
                '이 리뷰는 2026년 10월 24일에 확인한 App Store 소개, Apple의 조회 데이터, 개발자의 개인정보 처리방침을 바탕으로 합니다. 직접 사용, 네트워크 점검, 벤치마크는 하지 않았습니다.',
            },
          ],
        },
        overview: {
          id: 'what-is-lm-mini',
          title: 'LM Mini란 무엇인가?',
          content: [
            '**LM Mini는 Apple 기기에서 로컬 및 원격 언어 모델을 쓰는 채팅 클라이언트입니다.** 미국 App Store의 부제는 “AI Chat for Ollama & LM Studio”이고, 설명문은 “휴대폰의 모델과 데스크톱 로컬 환경”을 하나의 앱으로 다룬다고 소개합니다.',
            '개발자는 Sultan Haider로 표시되며, App Store에는 회사명이나 웹사이트가 없고 소개 페이지에도 LM Studio, Ollama, Jan AI, oMLX와의 관계는 나와 있지 않습니다.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: '채팅이 실행되는 위치',
          content: [
            '**LM Mini는 순수한 로컬이 아니라 하이브리드입니다. 소개 페이지에는 네 가지 경로가 있으며, 채팅이 어디서 실행되는지는 고른 모드에 따라 달라집니다.**',
          ],
          items: [
            '**휴대폰에서.** 모델을 내려받으면 인터넷 없이 채팅합니다. 소개 페이지에 따르면 휴대폰 모델은 호스팅 모델보다 작고 속도는 기기에 따라 다릅니다. Apple Intelligence 채팅은 기기에 내장된 모델을 쓰며 다운로드가 필요 없습니다.',
            '**직접 운영하는 컴퓨터에서.** 앱이 Wi‑Fi 또는 USB로 LM Studio, Ollama, Jan AI, oMLX에 연결하며, 이때 모델은 휴대폰이 아니라 그 컴퓨터에서 실행됩니다.',
            '**LM Mini Connect를 통해.** 외출 중에도 자신의 컴퓨터에 접속하는 원격 모드로, “내 키로 암호화”된다고 소개됩니다. 트래픽이 어떻게 전달되는지는 설명되어 있지 않습니다.',
            '**추가한 경우의 클라우드.** OpenAI, OpenRouter, Mistral, DeepSeek, Google Gemini 같은 선택형 API 제공업체가 요청을 받으며, SearXNG를 통한 웹 검색은 검색 서버로 쿼리를 보냅니다. 암호화된 클라우드 백업도 선택 사항으로 있습니다.',
          ],
          note:
            'SiliconShelf 디렉터리는 키워드 기준으로 LM Mini에 “on-device”와 “offline” 태그를 붙이고 테스트하지 않았다고 밝힙니다. 이 리뷰도 테스트하지 않았습니다.',
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
              '받는 곳':
                '[App Store](https://apps.apple.com/kr/app/lm-mini/id6751125309) (무료 다운로드, iOS·iPadOS 16.0 이상)',
            },
            {
              '플랫폼': 'Mac',
              '받는 곳': '같은 App Store 페이지(macOS 14.0 이상)이며, 네이티브 Mac 빌드인지는 나와 있지 않습니다',
            },
            {
              '플랫폼': '웹사이트',
              '받는 곳': '공식 웹사이트를 찾지 못했습니다. App Store 소개에도 링크가 없습니다',
            },
            {
              '플랫폼': '개인정보 처리방침',
              '받는 곳':
                '[LM Mini 개인정보 처리방침](https://neuro9.net/LMMini/privacy.html) (최종 업데이트: 2025년 8월 16일)',
            },
          ],
          note:
            '확인한 버전: 1.10.4(2026년 10월 19일 출시). 연결 모드에는 컴퓨터에서 실행 중인 LM Studio, Ollama, Jan AI 또는 oMLX가 필요합니다. 1.10.4 릴리스 노트에는 Apple Intelligence 채팅, Wi‑Fi에서 찾은 서버를 보여 주는 더 간단한 설정, 말풍선과 전체 너비 중 채팅 스타일 선택, 개선된 Pro 페이지가 포함되어 있습니다.',
        },
        pricing: {
          id: 'pricing',
          title: '가격',
          content: [
            '**다운로드는 무료이며 유료 등급은 앱 내 구입으로 판매됩니다. [한국 App Store](https://apps.apple.com/kr/app/lm-mini/id6751125309)에는 월간 ₩7,700, 연간 ₩49,000, 평생 이용권 ₩199,000으로 표시됩니다.**',
            '어떤 기능이 구입을 요구하는지는 소개 페이지에 나와 있지 않습니다. 가격은 스토어마다 다릅니다.',
          ],
        },
        features: {
          id: 'key-features',
          title: '개발자가 밝힌 기능',
          content: [
            '**아래 내용은 모두 App Store 설명과 릴리스 노트에서 가져온 것이며, 직접 테스트하지 않았습니다.**',
          ],
          items: [
            '**채팅.** 폴더가 있는 대화 기록과 컨텍스트 사용량 표시, 페르소나, 최대 5개 모델의 그룹 채팅, 메모리, 채팅 전체에 대한 기기 내 의미 검색, 백그라운드 생성.',
            '**모델과 서버.** 기기 내 모델 다운로드와 실행, 사용자 지정 헤더가 있는 사용자 지정 서버 연결, 휴대폰에서 LM Studio 모델 관리와 다운로드, LM Studio 채팅 가져오기.',
            '**음성과 이미지.** Kokoro 음성 채팅, ComfyUI와 Automatic1111을 통한 이미지 생성.',
            '**도구와 검색.** SearXNG를 통한 웹 검색과 MCP 도구 호출이 있으며, 버전 1.10.3부터 LM Studio의 MCP 도구를 Siri와 단축어에서도 쓸 수 있습니다.',
            '**Apple 기기.** 버전 1.10.0부터 Apple Watch 앱, 버전 1.10.4부터 Apple Intelligence 채팅을 지원합니다.',
          ],
          note: '실제로 무엇이 동작하는지는 설치한 빌드가 최종 기준입니다.',
        },
        privacy: {
          id: 'privacy',
          title: '개인정보 처리방침과 데이터 흐름',
          content: [
            '**개인정보 처리방침에 따르면 앱은 개인 데이터를 외부 서버나 제3자에게 수집·저장·전송하지 않으며, 모든 처리는 기기와 로컬 LM Studio 서버 사이에서 이루어집니다.** 채팅 기록, 설정, 서버 연결 정보는 기기에 저장된다고 하며 분석이나 광고 서비스는 언급하지 않습니다.',
            '방침의 최종 업데이트는 2025년 8월 16일로 첫 출시보다 5주 앞서며, 기기 내 모델, Ollama, Jan AI, oMLX, LM Mini Connect, 클라우드 API 제공업체, 암호화된 클라우드 백업은 언급하지 않습니다. App Store 개인정보 라벨은 “데이터 수집 없음”이며 Apple이 이를 확인하지 않았다고 표시합니다. 설명문은 선택형 클라우드 제공업체로의 요청이 사용자가 고른 제공업체로 간다고 덧붙입니다.',
          ],
          callouts: [
            {
              type: 'note',
              text:
                '앱이 클로즈드 소스여서 이 진술들을 코드로 확인할 수 없으며, PromptQuorum도 네트워크 트래픽을 점검하지 않았습니다. 클라우드 API, LM Mini Connect, 클라우드 백업을 사용한다면 어떤 데이터가 기기 밖으로 나가는지 앱에서 확인하시기 바랍니다.',
            },
          ],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: '이런 분께 적합합니다',
          items: [
            '**이미 LM Studio, Ollama, Jan AI, oMLX를 운영하는 iPhone·iPad 사용자.** 앱 하나로 집의 서버와, 밖에 있을 때의 휴대폰 모델을 모두 다룹니다.',
            '**서버 없이 기기 내 모델을 시험해 보고 싶은 분.** 모델을 내려받거나 지원 기기에서 Apple Intelligence를 쓰면 됩니다.',
            '**ComfyUI, Automatic1111, MCP 도구를 쓰는 분**으로, 이를 휴대폰 채팅 클라이언트에서 쓰고 싶은 경우입니다.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: '확인하지 못한 사항',
          items: [
            '**실제 사용 동작.** 이 리뷰는 응답 시간을 재거나 오프라인 사용을 테스트하거나 배터리와 저장 공간을 측정하지 않았습니다.',
            '**기기 내 런타임과 모델.** 소개 페이지에는 기기 내 모드의 추론 엔진, 모델 목록, 필요한 저장 공간이 나와 있지 않습니다.',
            '**LM Mini Connect의 작동 방식.** 사용자가 관리하는 키로 암호화된다고 하지만 트래픽이 거치는 경로는 설명되어 있지 않습니다.',
            '**유료 등급이 여는 기능.** 소개 페이지는 무료 기능과 유료 기능을 구분하지 않습니다.',
            '**설정의 어려움.** App Store 공개 리뷰 두 건이 문제를 지적합니다. 하나는 iOS가 로컬 네트워크 접근 권한을 한 번도 묻지 않았다는 내용(2026년 3월)이고, 다른 하나는 데스크톱 보조 앱이 필요하다는 주장으로 개발자가 이를 부인했습니다(2026년 7월).',
            '**소스 코드와 Mac 빌드.** 앱은 클로즈드 소스이고 공개 저장소를 찾지 못했으며, Mac 버전이 네이티브인지 Mac에서 실행되는 iPad 앱인지도 나와 있지 않습니다.',
            '**언어.** 소개 페이지의 언어는 영어뿐이지만 릴리스 노트에는 독일어와 러시아어 음성이 언급됩니다.',
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
              '앱': '[Enchanted](/ko/power-local-llm/enchanted-review)',
              '플랫폼': 'iOS, macOS',
              '가격 / 라이선스': '무료 / Apache 2.0',
              '핵심 차이': '자체 모델이 없는 Ollama 전용 클라이언트',
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
              '핵심 차이': '기기 내 문서 질의응답을 지원하는 오픈소스 오프라인 채팅',
            },
            {
              '앱': '[AnythingLLM Mobile](/ko/power-local-llm/anythingllm-mobile-review)',
              '플랫폼': 'iOS, Android',
              '가격 / 라이선스': '무료 / MIT',
              '핵심 차이': '로컬 AnythingLLM 워크스페이스에 원격 접속',
            },
          ],
          note: '경쟁 앱의 정보는 자주 바뀝니다. 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 소개 페이지에서 확인하시기 바랍니다.',
        },
        faq: {
          id: 'faq',
          title: '자주 묻는 질문',
          faqs: [
            {
              q: 'LM Mini는 Android에서 실행되나요?',
              a:
                'Android 빌드는 찾지 못했습니다. 소개 페이지는 iPhone, iPad, Mac, Apple Watch, Apple Vision 기기만 다룹니다.',
            },
            {
              q: 'LM Mini의 Apple Intelligence 채팅이란 무엇인가요?',
              a:
                '버전 1.10.4에서 추가되었으며, 지원되는 iOS 26·macOS 26 기기에서 다운로드 없이 기기에 내장된 모델과 채팅합니다. 내려받은 모델이나 직접 운영하는 서버와는 별개입니다.',
            },
            {
              q: 'LM Mini는 API 키를 어디에 저장하나요?',
              a:
                '버전 1.10.3 릴리스 노트에 따르면 API 키, 토큰, 서버 헤더는 이제 일반 설정이 아니라 Keychain / Keystore에 보관됩니다.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: '결론',
          content:
            'LM Mini는 기능이 풍부하고 업데이트가 활발한 iPhone·iPad 클라이언트로, “로컬”을 하나의 스펙트럼으로 다룹니다. 휴대폰의 모델, 직접 운영하는 컴퓨터의 모델, 거기로 가는 원격 경로, 선택형 클라우드 API입니다. 한계는 클로즈드 소스 코드, LM Studio 연결만 설명하는 개인정보 처리방침, 설명이 없는 원격 서비스입니다. 이미 LM Studio, Ollama, Jan AI를 쓰는 독자에게 적합하며, 전부 기기 안에서 도는 오픈소스 앱이 필요하다면 [Private Mind](/ko/power-local-llm/private-mind-review)나 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)를 비교해 보시기 바랍니다.',
        },
        sources: {
          id: 'sources',
          title: '출처',
          items: [
            '[App Store의 LM Mini](https://apps.apple.com/us/app/lm-mini/id6751125309) — 설명, 버전 기록, 앱 내 구입, 개인정보 라벨, 평점. 2026년 10월 24일 확인.',
            '[LM Mini 개인정보 처리방침](https://neuro9.net/LMMini/privacy.html) — 데이터 처리 방식. 최종 업데이트: 2025년 8월 16일.',
            '[Apple의 LM Mini 조회 데이터](https://itunes.apple.com/lookup?id=6751125309&country=us) — 버전, 출시일, 지원 기기, 파일 크기. 2026년 10월 24일 확인.',
            '[SiliconShelf의 LM Mini](https://siliconshelf.app/apps/lm-mini/) — 키워드 기준으로 앱에 “on-device”와 “offline” 태그를 붙이고 테스트하지 않았다고 밝히는 제3자 디렉터리의 요약.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '관련 읽을거리',
          items: [
            '[Enchanted 리뷰](/ko/power-local-llm/enchanted-review) — iPhone과 Mac용 무료 Apache 2.0 Ollama 클라이언트.',
            '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 Android용 무료 오픈소스 기기 내 채팅 클라이언트.',
            '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — iPhone과 Android용 무료 MIT 라이선스 오프라인 채팅 앱.',
            '[AnythingLLM Mobile 리뷰](/ko/power-local-llm/anythingllm-mobile-review) — 로컬 AnythingLLM 워크스페이스용 모바일 클라이언트.',
            '[LM Studio 리뷰](/ko/power-local-llm/lm-studio-review) — LM Mini가 연결하는 데스크톱 앱.',
            '[Ollama 리뷰](/ko/power-local-llm/ollama-review) — LM Mini가 사용할 수 있는 로컬 모델 서버.',
            '[2026년 iPhone용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone용 앱을 더 폭넓게 정리한 글.',
          ],
        },
      },
    },
}

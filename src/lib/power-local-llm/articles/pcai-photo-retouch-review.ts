// pcAI Photo Retouch Review: Offline Photo Restoration and Art Styles on iPhone and Mac
// Slug: pcai-photo-retouch-review
// Companion to: real-esrgan-ai-image-upscaler-review, draw-things-review, diffusionbee-review, best-local-llm-apps-iphone-2026
// Sources: the App Store listing (de/us/jp/br/kr/es/fr storefronts) and the developer's pages at apps.h53d.xyz, checked 2026-10-16 — no hands-on testing.
// Last upstream update 2026-02-20 (v1.1.0): the stale-app warning callout in the TL;DR is intentional (owner rule 2026-10-16) — keep it until a newer release is verified.
// Per-storefront IAP prices (Pro Light / Pro Infinity / Starry Night Style): US $0.99/$3.99/$1.99, DE+ES+FR EUR 0,99/3,99/1,99, JP ¥150/¥600/¥300, BR R$ 6,90/24,90/12,90, KR ₩1,100/5,500/3,300; ZH and AR use the US prices (the Chinese storefront returned 404).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Image & Video Generation',
    heroImage: '/images/pcai-photo-retouch-review-hero-en.webp',
    title: 'pcAI Photo Retouch Review: Offline Photo Restoration and Art Styles on iPhone and Mac',
    seoTitle: 'pcAI Photo Retouch Review: On-Device AI Photo App',
    intro: 'pcAI Photo Retouch is a photo-editing app for iPhone, iPad, Mac and Apple Vision that restores old photos and applies sketch, oil-painting and Van Gogh "Starry Night" styles, using an AI model that its developer says runs entirely on the device. It is published on the App Store by [维 艾 (Wei Ai)](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html). This review is based on the App Store listing and the developer\'s own pages, checked on 16 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription: 'pcAI Photo Retouch review: free-to-install iPhone and Mac app that restores old photos with on-device AI. No update since February 2026, untested.',
    twitterDescription: 'pcAI Photo Retouch review: iPhone and Mac photo restoration and art styles with on-device AI. Free to install, in-app purchases, no update since February 2026, not yet tested.',
    audience: 'iPhone, iPad and Mac owners who are curious about an offline photo-restoration app and want to know what the sources confirm, what the developer only claims, and how recently the app was updated.',
    readTime: '5 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'pcAI Photo Retouch review',
    targetKeywords: [
      'pcai photo retouch review',
      'local ai photo retouch',
      'offline photo restoration iphone',
      'on-device ai photo editor mac',
      'restore old photos ai iphone',
      'starry night photo filter app',
      'ai photo retouch app store',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Vision', 'Neural Engine', 'Core ML'],
    leadAnswerBlock: '**pcAI Photo Retouch is a free-to-install iPhone, iPad and Mac app that restores old photos and applies art styles, with an AI that its developer says runs entirely on the device.** Extra features are sold as in-app purchases, the source code is not published, and the model is not named.',
    quickAnswerTop: {
      en: {
        question: 'Is pcAI Photo Retouch free, and does it work offline?',
        answer: 'It is free to install, with in-app purchases for extra features. Per the developer, it needs no account or internet connection, and the AI processing happens on the device.',
        bullets: [
          'Sharpens and brightens photos, and applies sketch, oil-painting and "Starry Night" styles.',
          'Apple devices only, distributed through the App Store.',
          'The App Store privacy label says no data is collected; Apple notes that it has not verified this.',
          'Version 1.1.0 (state of the listing on 16 October 2026).',
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
        label: 'What Is pcAI Photo Retouch?',
        anchor: 'what-is-pcai-photo-retouch',
      },
      {
        label: 'Get It',
        anchor: 'get-it',
      },
      {
        label: 'Features Confirmed by the Sources',
        anchor: 'key-features',
      },
      {
        label: 'Privacy and On-Device Processing',
        anchor: 'privacy',
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
            text: 'pcAI Photo Retouch is a closed-source photo app from a single publisher, free to install, whose AI model its developer says runs on the device.',
          },
          {
            type: 'plain-terms',
            text: 'You load a photo and tap a button; the app sharpens it or repaints it in a chosen style on your own device, without an account or an upload, according to the developer.',
          },
        ],
        items: [
          'Publisher: listed on the App Store as 维 艾 (Wei Ai, copyright "aiwei"); no source repository or license text was found.',
          'AI: the developer\'s page says processing runs on the Neural Engine through Core ML; no model is named.',
          'Cost: free to install; three in-app purchases are listed (Pro Light, Pro Infinity and Starry Night Style).',
          'Reputation: the App Store listing shows no ratings yet.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'No update since 20 February 2026. The App Store lists version 1.1.0 from that date as the latest release, so the app may be unmaintained. Check the listing for a newer version before relying on it. Everything on this page is the developer\'s own description; PromptQuorum has not tested the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-pcai-photo-retouch',
        title: 'What Is pcAI Photo Retouch?',
        content: [
          '**pcAI Photo Retouch is a photo-editing app for iPhone, iPad, Mac and Apple Vision that, according to its developer, applies its AI on the device instead of in the cloud.** The developer\'s [app page](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html) describes it as made for content creators, real estate agents and casual photographers, and says it needs no account, login or settings: you tap a button and see the result.',
          'The app has three names: the German App Store title is "Lokale KI Foto Retusche: pcAI", the other storefronts checked show "Local AI Photo Retouch: pcAI", and the developer\'s site calls it "pcAI Photo Retouch". All three refer to the same App Store ID, 6751140211.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**The app is available only through the App Store; no Android, Windows or web version is listed.**',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            Platform: 'iPhone, iPad',
            'Where to get it': '[App Store](https://apps.apple.com/us/app/id6751140211), iOS/iPadOS 16.0+',
          },
          {
            Platform: 'Mac',
            'Where to get it': '[App Store](https://apps.apple.com/us/app/id6751140211), macOS 12.0+',
          },
          {
            Platform: 'Apple Vision',
            'Where to get it': '[App Store](https://apps.apple.com/us/app/id6751140211), visionOS 1.0+',
          },
          {
            Platform: 'In-app purchases (US store)',
            'Where to get it': 'Pro Light $0.99, Pro Infinity $3.99, Starry Night Style $1.99',
          },
          {
            Platform: 'Website',
            'Where to get it': '[pcAI Photo Retouch page](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html)',
          },
          {
            Platform: 'Privacy policy',
            'Where to get it': '[Privacy policy](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html)',
          },
          {
            Platform: 'Source code',
            'Where to get it': 'Not published',
          },
        ],
        note: 'Version as verified on 16 October 2026: 1.1.0, last updated on 20 February 2026; the download is 34.9 MB and the app is free to install.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the App Store description or the developer\'s pages; none has been independently tested.**',
        ],
        items: [
          '**Photo restoration.** Restores old photos to a clearer look with AI sharpening, and lists a brightness-enhancement step.',
          '**Art styles.** Sketch, oil painting and Van Gogh "Starry Night" styles; the free version includes some style transfer, while the Starry Night style is sold as a one-time purchase.',
          '**Export and sharing.** Unlimited original-size export is free; sharing edited images and flexible export sizes are described as subscription features.',
          '**Workflow.** Unlimited photo loading and replacement; version 1.0.2 let styles be applied directly without an extra click, and version 1.0.1 added adaptive image sizing on macOS.',
          '**Languages.** The interface is available in English, German and Simplified Chinese.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and On-Device Processing',
        content: [
          '**The App Store privacy section says the developer collects no data; Apple notes that it has not verified this.** The developer\'s privacy policy, effective 20 February 2026, says the app does not collect, store or transmit personal data, has no user accounts, never uploads images to a server, and uses no advertising SDKs, analytics SDKs or third-party AI services.',
          '**All features are described as running offline on the device, so photos stay on it unless you share them yourself.** The policy does not mention in-app purchases.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the developer\'s declarations, not audit results, and the source code is not published. PromptQuorum has not inspected the app\'s network traffic.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Source code and license.** No public repository or license text was found, so the privacy claims cannot be checked against code.',
          '**Model and quality.** Core ML and the Neural Engine are named, but no model, size or training source is; PromptQuorum did not run the app, so restoration quality, speed and battery use are unknown, and no chip or RAM requirement is stated beyond the operating-system versions.',
          '**What the purchases unlock.** The description mentions subscription features for sharing and multi-size export, but the listing names three purchases without saying which one unlocks what or which one renews.',
          '**Independent feedback.** The listing shows no ratings yet, and no third-party reviews were found.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            App: '[Real-ESRGAN](/power-local-llm/real-esrgan-ai-image-upscaler-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price / license': 'Free / Apache-2.0',
            'Key difference': 'Open-source image upscaler you run on a computer; no art styles',
          },
          {
            App: '[Draw Things](/power-local-llm/draw-things-review)',
            Platforms: 'macOS, iOS',
            'Price / license': 'Freemium / closed source',
            'Key difference': 'On-device image generator for iPhone and Mac; creates images rather than retouching photos',
          },
          {
            App: '[DiffusionBee](/power-local-llm/diffusionbee-review)',
            Platforms: 'macOS',
            'Price / license': 'Free / AGPL-3.0',
            'Key difference': 'Packaged Stable Diffusion generator for Mac; no iPhone version',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Why don\'t the support and policy links in the App Store open the current pages?',
            a: 'The App Store lists older github.io addresses for support and the privacy policy; they now show only a notice that the pages moved to [apps.h53d.xyz](https://apps.h53d.xyz/), which is where the links above point.',
          },
          {
            q: 'Does the developer make other apps?',
            a: 'The developer\'s site lists 15 other apps, among them STEP Reviewer, 3D Model Viewer, DXF Assistant and CutoutCraft.',
          },
          {
            q: 'How does it compare with Real-ESRGAN?',
            a: 'Real-ESRGAN is an open-source upscaler you run on a computer, whereas pcAI Photo Retouch is a closed-source iPhone and Mac app that also applies art styles; the sources do not allow a quality comparison.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'pcAI Photo Retouch is a simple idea packaged as a store app: restore an old photo or restyle it on the device, free to install, with a few in-app purchases. It is also an unproven and possibly unmaintained one: no update since 20 February 2026, one publisher, no published source, an unnamed model and no ratings yet. It suits iPhone and Mac owners who want to try offline photo restoration at low cost and can live with an app that may not receive fixes; anyone who needs an open-source, auditable tool should compare [Real-ESRGAN](/power-local-llm/real-esrgan-ai-image-upscaler-review) first and check the App Store page for a newer release before buying anything.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Local AI Photo Retouch: pcAI on the App Store](https://apps.apple.com/us/app/id6751140211) — description, version history, in-app purchases, privacy label and compatibility, checked 16 October 2026 on the US, German, Japanese, Brazilian, Korean, Spanish and French storefronts.',
          '[pcAI Photo Retouch app page](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html) — features, intended users and the Core ML statement.',
          '[Support page](https://apps.h53d.xyz/apps/pcai-photo-retouch/support.html) — contact details and platform statement.',
          '[Privacy policy](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html) — data statements, effective 20 February 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Real-ESRGAN Review](/power-local-llm/real-esrgan-ai-image-upscaler-review) — an open-source AI image upscaler for desktop.',
          '[Draw Things Review](/power-local-llm/draw-things-review) — on-device image generation for iPhone and Mac.',
          '[DiffusionBee Review](/power-local-llm/diffusionbee-review) — a packaged local Stable Diffusion app for Mac.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the broader iPhone roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'pcAI Photo Retouch Review: Offline Photo Restoration and Art Styles on iPhone and Mac',
      description: 'pcAI Photo Retouch review: iPhone and Mac app that restores old photos and applies art styles with an on-device AI. Privacy declarations, in-app purchases, no update since February 2026, and what the sources do not confirm.',
      url: 'https://promptquorum.com/power-local-llm/pcai-photo-retouch-review',
      inLanguage: 'en',
      datePublished: '2026-10-16',
      dateModified: '2026-10-16',
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
        audienceType: 'iPhone and Mac owners evaluating an offline photo-restoration app',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'pcAI Photo Retouch',
        },
        {
          '@type': 'Thing',
          name: 'On-device AI',
        },
        {
          '@type': 'Thing',
          name: 'Photo restoration',
        },
        {
          '@type': 'Thing',
          name: 'Mac and iPhone apps',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://promptquorum.com/power-local-llm/pcai-photo-retouch-review',
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
          name: 'pcAI Photo Retouch Review',
          item: 'https://promptquorum.com/power-local-llm/pcai-photo-retouch-review',
        },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Image & Video Generation',
    heroImage: '/images/pcai-photo-retouch-review-hero-de.webp',
    title: 'pcAI Photo Retouch im Test: Foto-Restaurierung und Kunststile offline auf iPhone und Mac',
    seoTitle: 'pcAI Photo Retouch im Test: Foto-App mit KI auf dem Gerät',
    intro: 'pcAI Photo Retouch ist eine Foto-App für iPhone, iPad, Mac und Apple Vision, die alte Fotos restauriert und Stile wie Skizze, Ölgemälde und Van Goghs „Sternennacht“ anwendet, mit einem KI-Modell, das laut Entwickler vollständig auf dem Gerät läuft. Herausgeber im App Store ist [维 艾 (Wei Ai)](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html). Dieser Test beruht auf dem App-Store-Eintrag und den eigenen Seiten des Entwicklers, geprüft am 16. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription: 'pcAI Photo Retouch im Test: kostenlose iPhone- und Mac-App, die alte Fotos mit KI auf dem Gerät restauriert. Seit Februar 2026 ohne Update, ungetestet.',
    twitterDescription: 'pcAI Photo Retouch im Test: Foto-Restaurierung und Kunststile für iPhone und Mac mit KI auf dem Gerät. Kostenlos installierbar, In-App-Käufe, seit Februar 2026 ohne Update, noch nicht getestet.',
    audience: 'Besitzer von iPhone, iPad und Mac, die sich für eine Offline-App zur Foto-Restaurierung interessieren und wissen möchten, was die Quellen bestätigen, was der Entwickler nur behauptet und wie aktuell die App ist.',
    readTime: '5 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'pcAI Photo Retouch Test',
    targetKeywords: [
      'pcai photo retouch test',
      'lokale ki foto retusche',
      'alte fotos restaurieren iphone',
      'ki foto bearbeitung offline mac',
      'foto retusche app ohne cloud',
      'sternennacht foto filter app',
      'pcai app store',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Vision', 'Neural Engine', 'Core ML'],
    leadAnswerBlock: '**pcAI Photo Retouch ist eine kostenlos installierbare App für iPhone, iPad und Mac, die alte Fotos restauriert und Kunststile anwendet; die KI läuft laut Entwickler vollständig auf dem Gerät.** Zusätzliche Funktionen gibt es als In-App-Käufe, der Quellcode ist nicht veröffentlicht, und das Modell wird nicht genannt.',
    quickAnswerTop: {
      de: {
        question: 'Ist pcAI Photo Retouch kostenlos, und funktioniert die App offline?',
        answer: 'Die App ist kostenlos installierbar, für zusätzliche Funktionen gibt es In-App-Käufe. Laut Entwickler braucht sie weder ein Konto noch eine Internetverbindung, und die KI-Verarbeitung findet auf dem Gerät statt.',
        bullets: [
          'Schärft und hellt Fotos auf und wendet Stile wie Skizze, Ölgemälde und „Sternennacht“ an.',
          'Nur für Apple-Geräte, erhältlich über den App Store.',
          'Das Datenschutzlabel im App Store erklärt, dass keine Daten erhoben werden; Apple weist darauf hin, dass es diese Angabe nicht geprüft hat.',
          'Version 1.1.0 (Stand des Eintrags am 16. Oktober 2026).',
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
        label: 'Was ist pcAI Photo Retouch?',
        anchor: 'what-is-pcai-photo-retouch',
      },
      {
        label: 'Bezugsquellen',
        anchor: 'get-it',
      },
      {
        label: 'Von den Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Datenschutz und Verarbeitung auf dem Gerät',
        anchor: 'privacy',
      },
      {
        label: 'Was sich nicht überprüfen ließ',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Konkurrenten und Alternativen',
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
            text: 'pcAI Photo Retouch ist eine kostenlos installierbare Foto-App eines einzelnen Herausgebers ohne veröffentlichten Quellcode, deren KI-Modell laut Entwickler auf dem Gerät läuft.',
          },
          {
            type: 'plain-terms',
            text: 'Sie laden ein Foto und tippen auf eine Schaltfläche; die App schärft es oder malt es in einem gewählten Stil neu, laut Entwickler auf Ihrem eigenen Gerät, ohne Konto und ohne Upload.',
          },
        ],
        items: [
          'Herausgeber: im App Store als 维 艾 (Wei Ai, Copyright „aiwei“) geführt; ein Quellcode-Repository oder ein Lizenztext wurde nicht gefunden.',
          'KI: Laut Seite des Entwicklers läuft die Verarbeitung über Core ML auf der Neural Engine; ein Modell wird nicht genannt.',
          'Kosten: kostenlos installierbar; aufgeführt sind drei In-App-Käufe (Pro Light, Pro Infinity und Starry Night Style).',
          'Ruf: Der App-Store-Eintrag zeigt noch keine Bewertungen.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Seit dem 20. Februar 2026 kein Update. Der App Store nennt Version 1.1.0 von diesem Datum als neueste Version, die App wird daher möglicherweise nicht mehr gepflegt. Prüfen Sie den Eintrag auf eine neuere Version, bevor Sie sich darauf verlassen. Alle Angaben auf dieser Seite stammen aus der Beschreibung des Entwicklers; PromptQuorum hat die App nicht getestet.',
          },
        ],
      },
      overview: {
        id: 'what-is-pcai-photo-retouch',
        title: 'Was ist pcAI Photo Retouch?',
        content: [
          '**pcAI Photo Retouch ist eine Foto-App für iPhone, iPad, Mac und Apple Vision, die ihre KI laut Entwickler auf dem Gerät statt in der Cloud ausführt.** Die [App-Seite](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html) des Entwicklers nennt als Zielgruppe Content-Ersteller, Immobilienmakler und Gelegenheitsfotografen und gibt an, dass weder Konto noch Anmeldung oder Einstellungen nötig sind: Sie tippen auf eine Schaltfläche und sehen das Ergebnis.',
          'Die App trägt drei Namen: Im deutschen App Store heißt sie „Lokale KI Foto Retusche: pcAI“, in den übrigen geprüften Stores „Local AI Photo Retouch: pcAI“, und die Website des Entwicklers nennt sie „pcAI Photo Retouch“. Alle drei gehören zur selben App-Store-ID 6751140211.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquellen',
        content: [
          '**Die App gibt es nur im App Store; eine Version für Android, Windows oder Web ist nicht aufgeführt.**',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            Plattform: 'iPhone, iPad',
            Bezugsquelle: '[App Store](https://apps.apple.com/de/app/id6751140211), iOS/iPadOS 16.0+',
          },
          {
            Plattform: 'Mac',
            Bezugsquelle: '[App Store](https://apps.apple.com/de/app/id6751140211), macOS 12.0+',
          },
          {
            Plattform: 'Apple Vision',
            Bezugsquelle: '[App Store](https://apps.apple.com/de/app/id6751140211), visionOS 1.0+',
          },
          {
            Plattform: 'In-App-Käufe (deutscher Store)',
            Bezugsquelle: 'Pro Light 0,99 €, Pro Infinity 3,99 €, Starry Night Style 1,99 €',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[Seite zu pcAI Photo Retouch](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html)',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[Datenschutzerklärung](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html)',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: 'Nicht veröffentlicht',
          },
        ],
        note: 'Geprüfte Version am 16. Oktober 2026: 1.1.0, zuletzt am 20. Februar 2026 aktualisiert; der Download ist 34,9 MB groß, die App ist kostenlos installierbar.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Alle folgenden Punkte stammen aus der App-Store-Beschreibung oder den Seiten des Entwicklers; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Foto-Restaurierung.** Stellt alte Fotos mit KI-Schärfung klarer dar und nennt zusätzlich eine Aufhellungsfunktion.',
          '**Kunststile.** Stile wie Skizze, Ölgemälde und Van Goghs „Sternennacht“; die kostenlose Version enthält teilweise Stilübertragung, der Stil „Sternennacht“ wird als einmaliger Kauf angeboten.',
          '**Export und Teilen.** Der Export in Originalgröße ist unbegrenzt kostenlos; das Teilen bearbeiteter Bilder und flexible Exportgrößen werden als Abo-Funktionen beschrieben.',
          '**Ablauf.** Unbegrenztes Laden und Ersetzen von Fotos; Version 1.0.2 wendet Stile direkt ohne zusätzlichen Klick an, Version 1.0.1 brachte eine automatische Bildgrößenanpassung unter macOS.',
          '**Sprachen.** Die Oberfläche gibt es auf Englisch, Deutsch und in vereinfachtem Chinesisch.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Verarbeitung auf dem Gerät',
        content: [
          '**Der Datenschutzabschnitt im App Store erklärt, dass der Entwickler keine Daten erhebt; Apple weist darauf hin, dass es diese Angabe nicht geprüft hat.** Die Datenschutzerklärung des Entwicklers, gültig ab dem 20. Februar 2026, besagt, dass die App keine personenbezogenen Daten erhebt, speichert oder überträgt, keine Benutzerkonten hat, Bilder nie auf einen Server hochlädt und weder Werbe-SDKs noch Analyse-SDKs oder KI-Dienste Dritter verwendet.',
          '**Alle Funktionen laufen laut Beschreibung offline auf dem Gerät, die Fotos bleiben also dort, solange Sie sie nicht selbst teilen.** Die Erklärung erwähnt In-App-Käufe nicht.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Angaben des Entwicklers, keine Auditergebnisse, und der Quellcode ist nicht veröffentlicht. PromptQuorum hat den Netzwerkverkehr der App nicht geprüft.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was sich nicht überprüfen ließ',
        items: [
          '**Quellcode und Lizenz.** Es wurden weder ein öffentliches Repository noch ein Lizenztext gefunden, die Datenschutzangaben lassen sich also nicht am Code prüfen.',
          '**Modell und Qualität.** Core ML und die Neural Engine werden genannt, ein Modell, seine Größe oder die Trainingsquelle dagegen nicht; PromptQuorum hat die App nicht ausgeführt, daher sind Qualität der Restaurierung, Tempo und Akkuverbrauch unbekannt, und über die Betriebssystemversionen hinaus werden weder Chip- noch RAM-Anforderungen genannt.',
          '**Was die Käufe freischalten.** Die Beschreibung erwähnt Abo-Funktionen zum Teilen und für Exporte in mehreren Größen, der Eintrag nennt aber drei Käufe, ohne zu sagen, welcher was freischaltet oder welcher sich verlängert.',
          '**Unabhängige Rückmeldungen.** Der Eintrag zeigt noch keine Bewertungen, und Testberichte Dritter wurden nicht gefunden.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Konkurrenten und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wesentlicher Unterschied'],
        rows: [
          {
            App: '[Real-ESRGAN](/de/power-local-llm/real-esrgan-ai-image-upscaler-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / Apache-2.0',
            'Wesentlicher Unterschied': 'Quelloffener Bild-Upscaler für den Computer; keine Kunststile',
          },
          {
            App: '[Draw Things](/de/power-local-llm/draw-things-review)',
            Plattformen: 'macOS, iOS',
            'Preis / Lizenz': 'Freemium / Closed Source',
            'Wesentlicher Unterschied': 'Bildgenerator auf dem Gerät für iPhone und Mac; erzeugt Bilder, statt Fotos zu retuschieren',
          },
          {
            App: '[DiffusionBee](/de/power-local-llm/diffusionbee-review)',
            Plattformen: 'macOS',
            'Preis / Lizenz': 'Kostenlos / AGPL-3.0',
            'Wesentlicher Unterschied': 'Fertig verpackter Stable-Diffusion-Generator für den Mac; keine iPhone-Version',
          },
        ],
        note: 'Angaben zu Konkurrenten ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen im jeweiligen Eintrag der App.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Warum öffnen die Support- und Datenschutz-Links im App Store nicht die aktuellen Seiten?',
            a: 'Der App Store verweist auf ältere github.io-Adressen für Support und Datenschutzerklärung; diese zeigen nur noch einen Hinweis, dass die Seiten nach [apps.h53d.xyz](https://apps.h53d.xyz/) umgezogen sind, worauf die Links oben verweisen.',
          },
          {
            q: 'Hat der Entwickler weitere Apps?',
            a: 'Die Website des Entwicklers führt 15 weitere Apps auf, darunter STEP Reviewer, 3D Model Viewer, DXF Assistant und CutoutCraft.',
          },
          {
            q: 'Wie schneidet sie im Vergleich zu Real-ESRGAN ab?',
            a: 'Real-ESRGAN ist ein quelloffener Upscaler für den Computer, während pcAI Photo Retouch eine App für iPhone und Mac ohne offenen Quellcode ist, die zusätzlich Kunststile anwendet; einen Qualitätsvergleich erlauben die Quellen nicht.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'pcAI Photo Retouch ist eine einfache Idee als Store-App: ein altes Foto auf dem Gerät restaurieren oder umstylen, kostenlos installierbar, mit einigen In-App-Käufen. Zugleich ist sie unerprobt und möglicherweise nicht mehr gepflegt: kein Update seit dem 20. Februar 2026, ein einzelner Herausgeber, kein veröffentlichter Quellcode, ein nicht genanntes Modell und noch keine Bewertungen. Sie eignet sich für iPhone- und Mac-Nutzer, die Foto-Restaurierung offline günstig ausprobieren möchten und mit einer App leben können, die womöglich keine Korrekturen mehr erhält; wer ein quelloffenes, nachprüfbares Werkzeug braucht, sollte zuerst [Real-ESRGAN](/de/power-local-llm/real-esrgan-ai-image-upscaler-review) vergleichen und vor einem Kauf die App-Store-Seite auf eine neuere Version prüfen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Lokale KI Foto Retusche: pcAI im App Store](https://apps.apple.com/de/app/id6751140211) — Beschreibung, Versionsverlauf, In-App-Käufe, Datenschutzlabel und Kompatibilität, am 16. Oktober 2026 in den Stores für die USA, Deutschland, Japan, Brasilien, Korea, Spanien und Frankreich geprüft.',
          '[App-Seite zu pcAI Photo Retouch](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html) — Funktionen, Zielgruppe und die Aussage zu Core ML.',
          '[Support-Seite](https://apps.h53d.xyz/apps/pcai-photo-retouch/support.html) — Kontaktdaten und Angaben zu Plattformen.',
          '[Datenschutzerklärung](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html) — Aussagen zu Daten, gültig ab dem 20. Februar 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Real-ESRGAN im Test](/de/power-local-llm/real-esrgan-ai-image-upscaler-review) — ein quelloffener KI-Bild-Upscaler für den Desktop.',
          '[Draw Things im Test](/de/power-local-llm/draw-things-review) — Bildgenerierung auf dem Gerät für iPhone und Mac.',
          '[DiffusionBee im Test](/de/power-local-llm/diffusionbee-review) — eine fertig verpackte lokale Stable-Diffusion-App für den Mac.',
          '[Die besten lokalen LLM-Apps für das iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — der breitere iPhone-Überblick.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Image & Video Generation',
    heroImage: '/images/pcai-photo-retouch-review-hero-es.webp',
    title: 'Análisis de pcAI Photo Retouch: restauración de fotos y estilos artísticos sin conexión en iPhone y Mac',
    seoTitle: 'Análisis de pcAI Photo Retouch: app de fotos con IA local',
    intro: 'pcAI Photo Retouch es una app de edición de fotos para iPhone, iPad, Mac y Apple Vision que restaura fotos antiguas y aplica estilos de boceto, óleo y «La noche estrellada» de Van Gogh, con un modelo de IA que según su desarrollador se ejecuta por completo en el dispositivo. La publica en la App Store [维 艾 (Wei Ai)](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html). Este análisis se basa en la ficha de la App Store y en las páginas del propio desarrollador, consultadas el 16 de octubre de 2026; PromptQuorum no ha probado la app.',
    metaDescription: 'Análisis de pcAI Photo Retouch: app para iPhone y Mac que restaura fotos antiguas con IA local. Sin actualizaciones desde febrero de 2026, sin probar.',
    twitterDescription: 'Análisis de pcAI Photo Retouch: restauración de fotos y estilos artísticos en iPhone y Mac con IA en el dispositivo. Gratuita de instalar, compras integradas, sin actualizaciones desde febrero de 2026, sin probar.',
    audience: 'Usuarios de iPhone, iPad y Mac interesados en una app de restauración de fotos sin conexión que quieren saber qué confirman las fuentes, qué solo afirma el desarrollador y cuándo se actualizó por última vez.',
    readTime: '5 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análisis pcAI Photo Retouch',
    targetKeywords: [
      'análisis pcai photo retouch',
      'retoque de fotos con ia local',
      'restaurar fotos antiguas iphone',
      'editor de fotos con ia sin conexión mac',
      'app de retoque fotográfico sin nube',
      'filtro noche estrellada app',
      'pcai app store',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Vision', 'Neural Engine', 'Core ML'],
    leadAnswerBlock: '**pcAI Photo Retouch es una app para iPhone, iPad y Mac, gratuita de instalar, que restaura fotos antiguas y aplica estilos artísticos; según su desarrollador, la IA se ejecuta por completo en el dispositivo.** Las funciones adicionales se venden como compras integradas, el código fuente no está publicado y el modelo no se nombra.',
    quickAnswerTop: {
      es: {
        question: '¿Es gratis pcAI Photo Retouch y funciona sin conexión?',
        answer: 'Es gratuita de instalar y ofrece compras integradas para funciones adicionales. Según el desarrollador, no necesita cuenta ni conexión a internet, y la IA procesa las fotos en el dispositivo.',
        bullets: [
          'Enfoca e ilumina fotos y aplica estilos de boceto, óleo y «La noche estrellada».',
          'Solo para dispositivos Apple, a través de la App Store.',
          'La etiqueta de privacidad de la App Store indica que no se recopilan datos; Apple señala que no ha verificado esa información.',
          'Versión 1.1.0 (estado de la ficha el 16 de octubre de 2026).',
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
        label: '¿Qué es pcAI Photo Retouch?',
        anchor: 'what-is-pcai-photo-retouch',
      },
      {
        label: 'Cómo conseguirla',
        anchor: 'get-it',
      },
      {
        label: 'Funciones confirmadas por las fuentes',
        anchor: 'key-features',
      },
      {
        label: 'Privacidad y procesamiento en el dispositivo',
        anchor: 'privacy',
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
            text: 'pcAI Photo Retouch es una app de fotos de código cerrado de un único editor, gratuita de instalar, cuyo modelo de IA según su desarrollador se ejecuta en el dispositivo.',
          },
          {
            type: 'plain-terms',
            text: 'Cargas una foto y pulsas un botón; según el desarrollador, la app la enfoca o la repinta en el estilo elegido en tu propio dispositivo, sin cuenta ni subida de archivos.',
          },
        ],
        items: [
          'Editor: figura en la App Store como 维 艾 (Wei Ai, copyright «aiwei»); no se encontró ningún repositorio de código ni texto de licencia.',
          'IA: la página del desarrollador indica que el procesamiento se ejecuta en el Neural Engine mediante Core ML; no se nombra ningún modelo.',
          'Coste: gratuita de instalar; se listan tres compras integradas (Pro Light, Pro Infinity y Starry Night Style).',
          'Reputación: la ficha de la App Store aún no muestra valoraciones.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Sin actualizaciones desde el 20 de febrero de 2026. La App Store indica la versión 1.1.0 de esa fecha como la más reciente, por lo que la app podría estar sin mantenimiento. Comprueba en la ficha si hay una versión más nueva antes de confiar en ella. Todo lo que aparece en esta página es la descripción del propio desarrollador; PromptQuorum no ha probado la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-pcai-photo-retouch',
        title: '¿Qué es pcAI Photo Retouch?',
        content: [
          '**pcAI Photo Retouch es una app de edición de fotos para iPhone, iPad, Mac y Apple Vision que, según su desarrollador, ejecuta la IA en el dispositivo y no en la nube.** La [página de la app](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html) del desarrollador la presenta para creadores de contenido, agentes inmobiliarios y fotógrafos aficionados, y afirma que no requiere cuenta, inicio de sesión ni ajustes: pulsas un botón y ves el resultado.',
          'La app tiene tres nombres: en la App Store alemana se titula «Lokale KI Foto Retusche: pcAI», en las demás tiendas consultadas aparece como «Local AI Photo Retouch: pcAI» y el sitio del desarrollador la llama «pcAI Photo Retouch». Los tres corresponden al mismo ID de la App Store, 6751140211.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirla',
        content: [
          '**La app solo está disponible en la App Store; no figura ninguna versión para Android, Windows ni web.**',
        ],
        columns: ['Plataforma', 'Dónde conseguirla'],
        rows: [
          {
            Plataforma: 'iPhone, iPad',
            'Dónde conseguirla': '[App Store](https://apps.apple.com/es/app/id6751140211), iOS/iPadOS 16.0 o posterior',
          },
          {
            Plataforma: 'Mac',
            'Dónde conseguirla': '[App Store](https://apps.apple.com/es/app/id6751140211), macOS 12.0 o posterior',
          },
          {
            Plataforma: 'Apple Vision',
            'Dónde conseguirla': '[App Store](https://apps.apple.com/es/app/id6751140211), visionOS 1.0 o posterior',
          },
          {
            Plataforma: 'Compras integradas (tienda de España)',
            'Dónde conseguirla': 'Pro Light 0,99 €, Pro Infinity 3,99 €, Starry Night Style 1,99 €',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': '[Página de pcAI Photo Retouch](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html)',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirla': '[Política de privacidad](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html)',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirla': 'No publicado',
          },
        ],
        note: 'Versión verificada el 16 de octubre de 2026: 1.1.0, actualizada por última vez el 20 de febrero de 2026; la descarga ocupa 34.9 MB y la app es gratuita de instalar.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todo lo que sigue procede de la descripción de la App Store o de las páginas del desarrollador; nada se ha probado de forma independiente.**',
        ],
        items: [
          '**Restauración de fotos.** Devuelve un aspecto más nítido a las fotos antiguas con enfoque por IA y menciona además un paso de mejora de brillo.',
          '**Estilos artísticos.** Estilos de boceto, óleo y «La noche estrellada» de Van Gogh; la versión gratuita incluye algo de transferencia de estilo, mientras que el estilo «La noche estrellada» se vende como compra única.',
          '**Exportación y uso compartido.** La exportación en tamaño original es gratuita e ilimitada; compartir las imágenes editadas y elegir el tamaño de exportación se describen como funciones de suscripción.',
          '**Flujo de trabajo.** Carga y sustitución ilimitadas de fotos; la versión 1.0.2 permite aplicar los estilos directamente sin un clic adicional y la 1.0.1 añadió el ajuste automático del tamaño de imagen en macOS.',
          '**Idiomas.** La interfaz está disponible en inglés, alemán y chino simplificado.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y procesamiento en el dispositivo',
        content: [
          '**La sección de privacidad de la App Store indica que el desarrollador no recopila datos; Apple señala que no ha verificado esa información.** La política de privacidad del desarrollador, en vigor desde el 20 de febrero de 2026, afirma que la app no recopila, almacena ni transmite datos personales, no tiene cuentas de usuario, nunca sube imágenes a un servidor y no usa SDK de publicidad, SDK de analítica ni servicios de IA de terceros.',
          '**Todas las funciones se describen como ejecutadas sin conexión en el dispositivo, así que las fotos permanecen en él salvo que las compartas tú.** La política no menciona las compras integradas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del desarrollador, no resultados de una auditoría, y el código fuente no está publicado. PromptQuorum no ha inspeccionado el tráfico de red de la app.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Código fuente y licencia.** No se encontró ningún repositorio público ni texto de licencia, así que las afirmaciones de privacidad no pueden contrastarse con el código.',
          '**Modelo y calidad.** Se nombran Core ML y el Neural Engine, pero no el modelo, su tamaño ni su origen de entrenamiento; PromptQuorum no ejecutó la app, por lo que se desconocen la calidad de la restauración, la velocidad y el consumo de batería, y no se indica ningún requisito de chip ni de RAM más allá de las versiones del sistema operativo.',
          '**Qué desbloquean las compras.** La descripción menciona funciones de suscripción para compartir y exportar en varios tamaños, pero la ficha lista tres compras sin decir cuál desbloquea qué ni cuál se renueva.',
          '**Opiniones independientes.** La ficha aún no muestra valoraciones y no se encontraron análisis de terceros.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            App: '[Real-ESRGAN](/es/power-local-llm/real-esrgan-ai-image-upscaler-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / Apache-2.0',
            'Diferencia clave': 'Escalador de imágenes de código abierto para ordenador; sin estilos artísticos',
          },
          {
            App: '[Draw Things](/es/power-local-llm/draw-things-review)',
            Plataformas: 'macOS, iOS',
            'Precio / licencia': 'Freemium / código cerrado',
            'Diferencia clave': 'Generador de imágenes en el dispositivo para iPhone y Mac; crea imágenes en lugar de retocar fotos',
          },
          {
            App: '[DiffusionBee](/es/power-local-llm/diffusionbee-review)',
            Plataformas: 'macOS',
            'Precio / licencia': 'Gratis / AGPL-3.0',
            'Diferencia clave': 'Generador de Stable Diffusion empaquetado para Mac; sin versión para iPhone',
          },
        ],
        note: 'Los datos de los competidores cambian a menudo; confirma el precio, la licencia y las plataformas actuales en la ficha de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Por qué los enlaces de soporte y privacidad de la App Store no abren las páginas actuales?',
            a: 'La App Store enlaza direcciones antiguas de github.io para el soporte y la política de privacidad; ahora solo muestran un aviso de que las páginas se han trasladado a [apps.h53d.xyz](https://apps.h53d.xyz/), que es adonde apuntan los enlaces de arriba.',
          },
          {
            q: '¿El desarrollador tiene otras apps?',
            a: 'El sitio del desarrollador lista otras 15 apps, entre ellas STEP Reviewer, 3D Model Viewer, DXF Assistant y CutoutCraft.',
          },
          {
            q: '¿Cómo se compara con Real-ESRGAN?',
            a: 'Real-ESRGAN es un escalador de código abierto que se ejecuta en un ordenador, mientras que pcAI Photo Retouch es una app de código cerrado para iPhone y Mac que además aplica estilos artísticos; las fuentes no permiten comparar la calidad.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'pcAI Photo Retouch es una idea sencilla empaquetada como app de tienda: restaurar o cambiar el estilo de una foto antigua en el dispositivo, gratuita de instalar y con algunas compras integradas. También es una app sin trayectoria y posiblemente sin mantenimiento: sin actualizaciones desde el 20 de febrero de 2026, un único editor, sin código fuente publicado, un modelo sin nombrar y aún sin valoraciones. Encaja con usuarios de iPhone y Mac que quieran probar la restauración de fotos sin conexión a bajo coste y puedan convivir con una app que quizá no reciba correcciones; quien necesite una herramienta de código abierto y auditable debería comparar primero [Real-ESRGAN](/es/power-local-llm/real-esrgan-ai-image-upscaler-review) y comprobar en la App Store si hay una versión más reciente antes de comprar nada.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Local AI Photo Retouch: pcAI en la App Store](https://apps.apple.com/es/app/id6751140211) — descripción, historial de versiones, compras integradas, etiqueta de privacidad y compatibilidad, consultados el 16 de octubre de 2026 en las tiendas de EE. UU., Alemania, Japón, Brasil, Corea, España y Francia.',
          '[Página de la app pcAI Photo Retouch](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html) — funciones, usuarios previstos y la declaración sobre Core ML.',
          '[Página de soporte](https://apps.h53d.xyz/apps/pcai-photo-retouch/support.html) — datos de contacto y declaración de plataformas.',
          '[Política de privacidad](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html) — declaraciones sobre datos, en vigor desde el 20 de febrero de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de Real-ESRGAN](/es/power-local-llm/real-esrgan-ai-image-upscaler-review) — un escalador de imágenes con IA de código abierto para escritorio.',
          '[Análisis de Draw Things](/es/power-local-llm/draw-things-review) — generación de imágenes en el dispositivo para iPhone y Mac.',
          '[Análisis de DiffusionBee](/es/power-local-llm/diffusionbee-review) — una app local de Stable Diffusion empaquetada para Mac.',
          '[Las mejores apps de LLM locales para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — el panorama más amplio para iPhone.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Image & Video Generation',
    heroImage: '/images/pcai-photo-retouch-review-hero-fr.webp',
    title: 'Test de pcAI Photo Retouch : restauration de photos et styles artistiques hors ligne sur iPhone et Mac',
    seoTitle: 'Test de pcAI Photo Retouch : appli photo avec IA locale',
    intro: 'pcAI Photo Retouch est une application de retouche photo pour iPhone, iPad, Mac et Apple Vision qui restaure les vieilles photos et applique des styles croquis, peinture à l\'huile et « La Nuit étoilée » de Van Gogh, avec un modèle d\'IA qui, selon son développeur, s\'exécute entièrement sur l\'appareil. Elle est publiée sur l\'App Store par [维 艾 (Wei Ai)](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html). Ce test repose sur la fiche de l\'App Store et sur les pages du développeur, consultées le 16 octobre 2026 ; PromptQuorum n\'a pas testé l\'application.',
    metaDescription: 'Test de pcAI Photo Retouch : appli iPhone et Mac qui restaure les vieilles photos avec une IA locale. Sans mise à jour depuis février 2026, non testée.',
    twitterDescription: 'Test de pcAI Photo Retouch : restauration de photos et styles artistiques sur iPhone et Mac avec une IA sur l\'appareil. Gratuite à installer, achats intégrés, sans mise à jour depuis février 2026, non testée.',
    audience: 'Utilisateurs d\'iPhone, d\'iPad et de Mac curieux d\'une appli de restauration de photos hors ligne, qui veulent savoir ce que confirment les sources, ce que le développeur affirme seulement et depuis quand l\'appli n\'a pas été mise à jour.',
    readTime: '5 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test pcAI Photo Retouch',
    targetKeywords: [
      'test pcai photo retouch',
      'retouche photo ia locale',
      'restaurer vieilles photos iphone',
      'éditeur photo ia hors ligne mac',
      'appli retouche photo sans cloud',
      'filtre nuit étoilée appli',
      'pcai app store',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Vision', 'Neural Engine', 'Core ML'],
    leadAnswerBlock: '**pcAI Photo Retouch est une application iPhone, iPad et Mac, gratuite à installer, qui restaure les vieilles photos et applique des styles artistiques ; selon son développeur, l\'IA s\'exécute entièrement sur l\'appareil.** Les fonctions supplémentaires sont vendues en achats intégrés, le code source n\'est pas publié et le modèle n\'est pas nommé.',
    quickAnswerTop: {
      fr: {
        question: 'pcAI Photo Retouch est-elle gratuite et fonctionne-t-elle hors ligne ?',
        answer: 'Elle est gratuite à installer, avec des achats intégrés pour les fonctions supplémentaires. Selon le développeur, elle n\'exige ni compte ni connexion internet, et le traitement par l\'IA se fait sur l\'appareil.',
        bullets: [
          'Accentue et éclaircit les photos et applique des styles croquis, peinture à l\'huile et « La Nuit étoilée ».',
          'Appareils Apple uniquement, via l\'App Store.',
          'L\'étiquette de confidentialité de l\'App Store indique qu\'aucune donnée n\'est collectée ; Apple précise ne pas avoir vérifié cette information.',
          'Version 1.1.0 (état de la fiche au 16 octobre 2026).',
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
        label: 'Qu\'est-ce que pcAI Photo Retouch ?',
        anchor: 'what-is-pcai-photo-retouch',
      },
      {
        label: 'Où la télécharger',
        anchor: 'get-it',
      },
      {
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features',
      },
      {
        label: 'Confidentialité et traitement sur l\'appareil',
        anchor: 'privacy',
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
            text: 'pcAI Photo Retouch est une application photo à code fermé d\'un seul éditeur, gratuite à installer, dont le modèle d\'IA s\'exécute, selon son développeur, sur l\'appareil.',
          },
          {
            type: 'plain-terms',
            text: 'Vous chargez une photo et touchez un bouton ; selon le développeur, l\'application l\'accentue ou la repeint dans le style choisi sur votre propre appareil, sans compte ni envoi de fichiers.',
          },
        ],
        items: [
          'Éditeur : indiqué sur l\'App Store comme 维 艾 (Wei Ai, copyright « aiwei ») ; aucun dépôt de code source ni texte de licence n\'a été trouvé.',
          'IA : la page du développeur indique que le traitement s\'exécute sur le Neural Engine via Core ML ; aucun modèle n\'est nommé.',
          'Coût : gratuite à installer ; trois achats intégrés sont listés (Pro Light, Pro Infinity et Starry Night Style).',
          'Réputation : la fiche de l\'App Store n\'affiche encore aucune note.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Aucune mise à jour depuis le 20 février 2026. L\'App Store indique la version 1.1.0 de cette date comme la plus récente ; l\'application n\'est peut-être plus maintenue. Vérifiez sur la fiche si une version plus récente existe avant de vous y fier. Tout ce qui figure sur cette page est la description du développeur lui-même ; PromptQuorum n\'a pas testé l\'application.',
          },
        ],
      },
      overview: {
        id: 'what-is-pcai-photo-retouch',
        title: 'Qu\'est-ce que pcAI Photo Retouch ?',
        content: [
          '**pcAI Photo Retouch est une application de retouche photo pour iPhone, iPad, Mac et Apple Vision qui, selon son développeur, exécute son IA sur l\'appareil plutôt que dans le cloud.** La [page de l\'application](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html) du développeur la destine aux créateurs de contenu, aux agents immobiliers et aux photographes occasionnels, et affirme qu\'elle ne demande ni compte, ni connexion, ni réglages : vous touchez un bouton et voyez le résultat.',
          'L\'application porte trois noms : sur l\'App Store allemand elle s\'intitule « Lokale KI Foto Retusche: pcAI », sur les autres boutiques consultées « Local AI Photo Retouch: pcAI », et le site du développeur l\'appelle « pcAI Photo Retouch ». Les trois correspondent au même identifiant App Store, 6751140211.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**L\'application n\'est disponible que sur l\'App Store ; aucune version Android, Windows ou web n\'est indiquée.**',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            Plateforme: 'iPhone, iPad',
            'Où la trouver': '[App Store](https://apps.apple.com/fr/app/id6751140211), iOS/iPadOS 16.0 ou ultérieur',
          },
          {
            Plateforme: 'Mac',
            'Où la trouver': '[App Store](https://apps.apple.com/fr/app/id6751140211), macOS 12.0 ou ultérieur',
          },
          {
            Plateforme: 'Apple Vision',
            'Où la trouver': '[App Store](https://apps.apple.com/fr/app/id6751140211), visionOS 1.0 ou ultérieur',
          },
          {
            Plateforme: 'Achats intégrés (boutique française)',
            'Où la trouver': 'Pro Light 0,99 €, Pro Infinity 3,99 €, Starry Night Style 1,99 €',
          },
          {
            Plateforme: 'Site web',
            'Où la trouver': '[Page de pcAI Photo Retouch](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html)',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où la trouver': '[Politique de confidentialité](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html)',
          },
          {
            Plateforme: 'Code source',
            'Où la trouver': 'Non publié',
          },
        ],
        note: 'Version vérifiée le 16 octobre 2026 : 1.1.0, mise à jour pour la dernière fois le 20 février 2026 ; le téléchargement pèse 34.9 Mo et l\'application est gratuite à installer.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Tout ce qui suit provient de la description de l\'App Store ou des pages du développeur ; rien n\'a été testé de façon indépendante.**',
        ],
        items: [
          '**Restauration de photos.** Redonne de la netteté aux vieilles photos grâce à l\'accentuation par IA et mentionne en plus une étape d\'amélioration de la luminosité.',
          '**Styles artistiques.** Styles croquis, peinture à l\'huile et « La Nuit étoilée » de Van Gogh ; la version gratuite inclut un peu de transfert de style, tandis que le style « La Nuit étoilée » est vendu en achat unique.',
          '**Export et partage.** L\'export en taille d\'origine est gratuit et illimité ; le partage des images retouchées et les tailles d\'export flexibles sont décrits comme des fonctions d\'abonnement.',
          '**Utilisation.** Chargement et remplacement de photos sans limite ; la version 1.0.2 applique les styles directement sans clic supplémentaire et la 1.0.1 a ajouté l\'adaptation automatique de la taille d\'image sur macOS.',
          '**Langues.** L\'interface est disponible en anglais, en allemand et en chinois simplifié.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et traitement sur l\'appareil',
        content: [
          '**La section confidentialité de l\'App Store indique que le développeur ne collecte aucune donnée ; Apple précise ne pas avoir vérifié cette information.** La politique de confidentialité du développeur, en vigueur depuis le 20 février 2026, affirme que l\'application ne collecte, ne stocke ni ne transmet de données personnelles, n\'a pas de comptes utilisateur, n\'envoie jamais d\'images à un serveur et n\'utilise ni SDK publicitaire, ni SDK d\'analyse, ni service d\'IA tiers.',
          '**Toutes les fonctions sont décrites comme s\'exécutant hors ligne sur l\'appareil, de sorte que les photos y restent tant que vous ne les partagez pas vous-même.** La politique ne mentionne pas les achats intégrés.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations du développeur, pas des résultats d\'audit, et le code source n\'est pas publié. PromptQuorum n\'a pas inspecté le trafic réseau de l\'application.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Code source et licence.** Aucun dépôt public ni texte de licence n\'a été trouvé ; les déclarations de confidentialité ne peuvent donc pas être confrontées au code.',
          '**Modèle et qualité.** Core ML et le Neural Engine sont nommés, mais ni le modèle, ni sa taille, ni l\'origine de son entraînement ; PromptQuorum n\'a pas exécuté l\'application, la qualité de la restauration, la vitesse et la consommation de batterie restent donc inconnues, et aucune exigence de puce ou de RAM n\'est indiquée en dehors des versions du système d\'exploitation.',
          '**Ce que débloquent les achats.** La description mentionne des fonctions d\'abonnement pour le partage et l\'export en plusieurs tailles, mais la fiche liste trois achats sans préciser lequel débloque quoi ni lequel se renouvelle.',
          '**Avis indépendants.** La fiche n\'affiche encore aucune note et aucun test de tiers n\'a été trouvé.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Appli', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            Appli: '[Real-ESRGAN](/fr/power-local-llm/real-esrgan-ai-image-upscaler-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuit / Apache-2.0',
            'Différence clé': 'Outil d\'agrandissement d\'images open source pour ordinateur ; sans styles artistiques',
          },
          {
            Appli: '[Draw Things](/fr/power-local-llm/draw-things-review)',
            Plateformes: 'macOS, iOS',
            'Prix / licence': 'Freemium / code fermé',
            'Différence clé': 'Générateur d\'images sur l\'appareil pour iPhone et Mac ; crée des images au lieu de retoucher des photos',
          },
          {
            Appli: '[DiffusionBee](/fr/power-local-llm/diffusionbee-review)',
            Plateformes: 'macOS',
            'Prix / licence': 'Gratuit / AGPL-3.0',
            'Différence clé': 'Générateur Stable Diffusion prêt à l\'emploi pour Mac ; pas de version iPhone',
          },
        ],
        note: 'Les informations sur les concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels sur la fiche de chaque appli.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Pourquoi les liens d\'assistance et de confidentialité de l\'App Store n\'ouvrent-ils pas les pages actuelles ?',
            a: 'L\'App Store renvoie vers d\'anciennes adresses github.io pour l\'assistance et la politique de confidentialité ; elles n\'affichent plus qu\'un avis indiquant que les pages ont déménagé vers [apps.h53d.xyz](https://apps.h53d.xyz/), là où pointent les liens ci-dessus.',
          },
          {
            q: 'Le développeur propose-t-il d\'autres applications ?',
            a: 'Le site du développeur liste 15 autres applications, dont STEP Reviewer, 3D Model Viewer, DXF Assistant et CutoutCraft.',
          },
          {
            q: 'Comment se compare-t-elle à Real-ESRGAN ?',
            a: 'Real-ESRGAN est un outil d\'agrandissement open source exécuté sur ordinateur, tandis que pcAI Photo Retouch est une application iPhone et Mac à code fermé qui applique en plus des styles artistiques ; les sources ne permettent pas de comparer la qualité.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'pcAI Photo Retouch est une idée simple sous forme d\'application de boutique : restaurer ou restyliser une vieille photo sur l\'appareil, gratuite à installer, avec quelques achats intégrés. C\'est aussi une application sans historique et peut-être plus maintenue : aucune mise à jour depuis le 20 février 2026, un seul éditeur, aucun code source publié, un modèle non nommé et encore aucune note. Elle convient aux utilisateurs d\'iPhone et de Mac qui veulent essayer la restauration de photos hors ligne à moindre coût et peuvent s\'accommoder d\'une appli qui ne recevra peut-être plus de correctifs ; qui a besoin d\'un outil open source et vérifiable devrait d\'abord comparer [Real-ESRGAN](/fr/power-local-llm/real-esrgan-ai-image-upscaler-review) et vérifier sur l\'App Store si une version plus récente existe avant tout achat.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Local AI Photo Retouch: pcAI sur l\'App Store](https://apps.apple.com/fr/app/id6751140211) — description, historique des versions, achats intégrés, étiquette de confidentialité et compatibilité, consultés le 16 octobre 2026 sur les boutiques des États-Unis, d\'Allemagne, du Japon, du Brésil, de Corée, d\'Espagne et de France.',
          '[Page de l\'application pcAI Photo Retouch](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html) — fonctions, utilisateurs visés et déclaration sur Core ML.',
          '[Page d\'assistance](https://apps.h53d.xyz/apps/pcai-photo-retouch/support.html) — coordonnées et déclaration sur les plateformes.',
          '[Politique de confidentialité](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html) — déclarations sur les données, en vigueur depuis le 20 février 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Real-ESRGAN](/fr/power-local-llm/real-esrgan-ai-image-upscaler-review) — un outil d\'agrandissement d\'images par IA open source pour ordinateur.',
          '[Test de Draw Things](/fr/power-local-llm/draw-things-review) — génération d\'images sur l\'appareil pour iPhone et Mac.',
          '[Test de DiffusionBee](/fr/power-local-llm/diffusionbee-review) — une appli locale Stable Diffusion prête à l\'emploi pour Mac.',
          '[Les meilleures applis de LLM locaux pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le panorama plus large pour iPhone.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Image & Video Generation',
    heroImage: '/images/pcai-photo-retouch-review-hero-ja.webp',
    title: 'pcAI Photo Retouchレビュー:iPhoneとMacでオフライン写真修復とアートスタイル',
    seoTitle: 'pcAI Photo Retouchレビュー:端末内AIの写真アプリ',
    intro: 'pcAI Photo Retouchは、iPhone、iPad、Mac、Apple Vision向けの写真編集アプリです。古い写真を修復し、スケッチ、油絵、ゴッホ「星月夜」風のスタイルを適用します。開発元によると、AIモデルは完全に端末内で動作します。App Storeでの公開元は[维 艾(Wei Ai)](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html)です。このレビューはApp Storeの掲載内容と開発元自身のページに基づいており、確認日は2026年10月16日です。PromptQuorumはアプリを実際には試していません。',
    metaDescription: 'pcAI Photo Retouchのレビュー。端末内AIで古い写真を修復する、無料でインストールできるiPhone・Mac向けアプリ。2026年2月以降は更新なし、未検証。',
    twitterDescription: 'pcAI Photo Retouchのレビュー。端末内AIによるiPhone・Macの写真修復とアートスタイル。無料インストール、アプリ内課金あり、2026年2月以降は更新なし、未検証。',
    audience: 'オフラインで使える写真修復アプリに関心があるiPhone・iPad・Macユーザーで、情報源が確認していること、開発元が主張しているだけのこと、最終更新がいつかを知りたい方。',
    readTime: '5分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'pcAI Photo Retouch レビュー',
    targetKeywords: [
      'pcai photo retouch レビュー',
      'ローカルAI 写真レタッチ',
      '古い写真 修復 iPhone',
      'オフライン AI 写真編集 Mac',
      'クラウド不要 写真レタッチ アプリ',
      '星月夜 フィルター アプリ',
      'pcai app store',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Vision', 'Neural Engine', 'Core ML'],
    leadAnswerBlock: '**pcAI Photo Retouchは、古い写真の修復とアートスタイルの適用ができる、無料でインストールできるiPhone・iPad・Mac向けアプリです。開発元によると、AIは完全に端末内で動作します。**追加機能はアプリ内課金で販売され、ソースコードは公開されておらず、モデル名も示されていません。',
    quickAnswerTop: {
      ja: {
        question: 'pcAI Photo Retouchは無料で、オフラインでも使えますか?',
        answer: 'インストールは無料で、追加機能はアプリ内課金です。開発元によると、アカウントもインターネット接続も不要で、AI処理は端末内で行われます。',
        bullets: [
          '写真をシャープにして明るくし、スケッチ・油絵・「星月夜」風のスタイルを適用できます。',
          'Apple製デバイス専用で、App Storeで配布されています。',
          'App Storeのプライバシー表示は「データ収集なし」ですが、Appleはこの情報を確認していないと注記しています。',
          'バージョン1.1.0(2026年10月16日時点の掲載内容)。',
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
        label: 'pcAI Photo Retouchとは',
        anchor: 'what-is-pcai-photo-retouch',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: '情報源で確認できた機能',
        anchor: 'key-features',
      },
      {
        label: 'プライバシーと端末内処理',
        anchor: 'privacy',
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
            text: 'pcAI Photo Retouchは、公開元が1者のみで無料でインストールできるクローズドソースの写真アプリで、開発元によるとAIモデルは端末内で動作します。',
          },
          {
            type: 'plain-terms',
            text: '写真を読み込んでボタンをタップすると、開発元によれば、アカウントもアップロードもなしに、端末上で写真を鮮明にしたり、選んだスタイルで描き直したりします。',
          },
        ],
        items: [
          '公開元:App Storeでは维 艾(Wei Ai、著作権表記「aiwei」)として掲載。ソースコードのリポジトリやライセンス文書は見つかりませんでした。',
          'AI:開発元のページによると、処理はCore ML経由でNeural Engine上で実行されます。モデル名は示されていません。',
          '費用:インストールは無料。アプリ内課金が3種類(Pro Light、Pro Infinity、Starry Night Style)掲載されています。',
          '評判:App Storeの掲載にはまだ評価がありません。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026年2月20日以降、更新がありません。App Storeはこの日付のバージョン1.1.0を最新としており、アプリは保守されていない可能性があります。頼る前に、掲載ページで新しいバージョンがないか確認してください。このページの内容はすべて開発元自身の説明に基づいており、PromptQuorumはアプリを試していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-pcai-photo-retouch',
        title: 'pcAI Photo Retouchとは',
        content: [
          '**pcAI Photo Retouchは、iPhone、iPad、Mac、Apple Vision向けの写真編集アプリで、開発元によるとAIをクラウドではなく端末内で実行します。**開発元の[アプリページ](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html)は、コンテンツクリエイター、不動産業者、カジュアルな写真愛好家向けとしており、アカウント、ログイン、設定は不要で、ボタンをタップするだけで結果が見られると説明しています。',
          'このアプリには3つの名称があります。ドイツのApp Storeでは「Lokale KI Foto Retusche: pcAI」、確認したその他のストアでは「Local AI Photo Retouch: pcAI」、開発元のサイトでは「pcAI Photo Retouch」です。3つとも同じApp Store ID(6751140211)を指します。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: ['**アプリはApp Storeでのみ入手できます。Android、Windows、Web版は掲載されていません。**'],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'iPhone・iPad',
            '入手先': '[App Store](https://apps.apple.com/jp/app/id6751140211)、iOS/iPadOS 16.0以降',
          },
          {
            'プラットフォーム': 'Mac',
            '入手先': '[App Store](https://apps.apple.com/jp/app/id6751140211)、macOS 12.0以降',
          },
          {
            'プラットフォーム': 'Apple Vision',
            '入手先': '[App Store](https://apps.apple.com/jp/app/id6751140211)、visionOS 1.0以降',
          },
          {
            'プラットフォーム': 'アプリ内課金(日本のストア)',
            '入手先': 'Pro Light ¥150、Pro Infinity ¥600、Starry Night Style ¥300',
          },
          {
            'プラットフォーム': 'ウェブサイト',
            '入手先': '[pcAI Photo Retouchのページ](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[プライバシーポリシー](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '非公開',
          },
        ],
        note: '2026年10月16日に確認したバージョン:1.1.0、最終更新は2026年2月20日。ダウンロードサイズは34.9 MBで、インストールは無料です。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: ['**以下はすべてApp Storeの説明または開発元のページに基づくもので、独自に検証したものはありません。**'],
        items: [
          '**写真の修復。**AIシャープ化で古い写真をより鮮明にし、明るさを補正する機能も記載されています。',
          '**アートスタイル。**スケッチ、油絵、ゴッホ「星月夜」風のスタイルを提供します。無料版にはスタイル変換が一部含まれ、「星月夜」スタイルは買い切りで販売されています。',
          '**書き出しと共有。**元サイズでの書き出しは無制限で無料です。編集した画像の共有と書き出しサイズの選択は、サブスクリプション機能として説明されています。',
          '**操作性。**写真の読み込みと入れ替えは無制限です。バージョン1.0.2で追加操作なしにスタイルを直接適用できるようになり、1.0.1でmacOSの画像サイズ自動調整が加わりました。',
          '**言語。**インターフェースは英語、ドイツ語、簡体字中国語に対応しています。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーと端末内処理',
        content: [
          '**App Storeのプライバシー欄では、開発元はデータを収集しないとされていますが、Appleはこの情報を確認していないと注記しています。**開発元のプライバシーポリシー(2026年2月20日施行)は、アプリが個人データを収集・保存・送信せず、ユーザーアカウントもなく、画像をサーバーにアップロードすることはなく、広告SDK、分析SDK、第三者のAIサービスを使わないとしています。',
          '**すべての機能は端末内でオフラインで動作すると説明されているため、自分で共有しない限り写真は端末の外に出ません。**ポリシーにはアプリ内課金への言及がありません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発元の申告であり、監査結果ではありません。ソースコードも公開されていません。PromptQuorumはアプリの通信を検査していません。',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**ソースコードとライセンス。**公開リポジトリもライセンス文書も見つからなかったため、プライバシーに関する申告をコードで検証できません。',
          '**モデルと品質。**Core MLとNeural Engineは挙げられていますが、モデル、サイズ、学習データの出所は示されていません。PromptQuorumはアプリを実行していないため、修復の品質、速度、バッテリー消費は不明で、OSのバージョン以外にチップやRAMの要件も記載がありません。',
          '**課金で何が使えるか。**説明にはサブスクリプションの共有機能と複数サイズの書き出し機能が出てきますが、掲載されている3つの課金について、どれが何を解放し、どれが自動更新なのかは書かれていません。',
          '**第三者の評価。**掲載にはまだ評価がなく、第三者によるレビューも見つかりませんでした。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応環境', '価格/ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Real-ESRGAN](/ja/power-local-llm/real-esrgan-ai-image-upscaler-review)',
            '対応環境': 'Windows、macOS、Linux',
            '価格/ライセンス': '無料/Apache-2.0',
            '主な違い': 'パソコンで動かすオープンソースの画像アップスケーラー。アートスタイルなし',
          },
          {
            'アプリ': '[Draw Things](/ja/power-local-llm/draw-things-review)',
            '対応環境': 'macOS、iOS',
            '価格/ライセンス': 'フリーミアム/クローズドソース',
            '主な違い': 'iPhone・Mac向けの端末内画像生成。写真のレタッチではなく画像を生成',
          },
          {
            'アプリ': '[DiffusionBee](/ja/power-local-llm/diffusionbee-review)',
            '対応環境': 'macOS',
            '価格/ライセンス': '無料/AGPL-3.0',
            '主な違い': 'Mac向けにパッケージ化されたStable Diffusionジェネレーター。iPhone版なし',
          },
        ],
        note: '競合の情報は変わりやすいため、価格、ライセンス、対応環境は各アプリの掲載ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'App Storeのサポートやプライバシーのリンクが、現在のページを開かないのはなぜですか?',
            a: 'App Storeは、サポートとプライバシーポリシーについて古いgithub.ioのアドレスを案内しています。そのページには、ページが[apps.h53d.xyz](https://apps.h53d.xyz/)に移転したというお知らせしか表示されません。上の表のリンクは移転先を指しています。',
          },
          {
            q: '開発元は他にもアプリを出していますか?',
            a: '開発元のサイトには、ほかに15本のアプリが掲載されており、STEP Reviewer、3D Model Viewer、DXF Assistant、CutoutCraftなどがあります。',
          },
          {
            q: 'Real-ESRGANとはどう違いますか?',
            a: 'Real-ESRGANはパソコンで動かすオープンソースのアップスケーラーです。pcAI Photo Retouchはクローズドソースのアプリで、iPhoneとMacで動作し、アートスタイルも適用できます。品質の比較は、情報源からはできません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'pcAI Photo Retouchは、古い写真を端末内で修復したり描き直したりする、シンプルな発想のストアアプリです。無料でインストールでき、アプリ内課金がいくつかあります。一方で実績がなく、保守されていない可能性もあります。2026年2月20日以降は更新がなく、公開元は1者のみで、ソースコードは非公開、モデル名も不明で、評価もまだありません。低コストでオフライン写真修復を試したく、修正が提供されないかもしれないアプリでも構わないiPhone・Macユーザーに向いています。オープンソースで検証もできるツールが必要な方は、まず[Real-ESRGAN](/ja/power-local-llm/real-esrgan-ai-image-upscaler-review)を比較し、購入前にApp Storeのページで新しいバージョンがないか確認してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[App StoreのLocal AI Photo Retouch: pcAI](https://apps.apple.com/jp/app/id6751140211) — 説明、バージョン履歴、アプリ内課金、プライバシー表示、対応環境。2026年10月16日に米国、ドイツ、日本、ブラジル、韓国、スペイン、フランスのストアで確認。',
          '[pcAI Photo Retouchのアプリページ](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html) — 機能、想定ユーザー、Core MLに関する記述。',
          '[サポートページ](https://apps.h53d.xyz/apps/pcai-photo-retouch/support.html) — 連絡先と対応環境の記述。',
          '[プライバシーポリシー](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html) — データに関する記述。2026年2月20日施行。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Real-ESRGANレビュー](/ja/power-local-llm/real-esrgan-ai-image-upscaler-review) — デスクトップ向けのオープンソースAI画像アップスケーラー。',
          '[Draw Thingsレビュー](/ja/power-local-llm/draw-things-review) — iPhoneとMacでの端末内画像生成。',
          '[DiffusionBeeレビュー](/ja/power-local-llm/diffusionbee-review) — Mac向けにパッケージ化されたローカルStable Diffusionアプリ。',
          '[iPhone向けおすすめローカルLLMアプリ2026](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone向けのより広い一覧。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Image & Video Generation',
    heroImage: '/images/pcai-photo-retouch-review-hero-pt.webp',
    title: 'Análise do pcAI Photo Retouch: restauração de fotos e estilos artísticos offline no iPhone e no Mac',
    seoTitle: 'Análise do pcAI Photo Retouch: app de fotos com IA local',
    intro: 'O pcAI Photo Retouch é um app de edição de fotos para iPhone, iPad, Mac e Apple Vision que restaura fotos antigas e aplica estilos de esboço, pintura a óleo e «A Noite Estrelada» de Van Gogh, usando um modelo de IA que, segundo o desenvolvedor, roda inteiramente no aparelho. Ele é publicado na App Store por [维 艾 (Wei Ai)](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html). Esta análise se baseia na página da App Store e nas páginas do próprio desenvolvedor, consultadas em 16 de outubro de 2026; a PromptQuorum não testou o app.',
    metaDescription: 'Análise do pcAI Photo Retouch: app para iPhone e Mac que restaura fotos antigas com IA no aparelho. Sem atualização desde fevereiro de 2026, não testado.',
    twitterDescription: 'Análise do pcAI Photo Retouch: restauração de fotos e estilos artísticos no iPhone e no Mac com IA no aparelho. Gratuito para instalar, compras no app, sem atualização desde fevereiro de 2026, não testado.',
    audience: 'Donos de iPhone, iPad e Mac curiosos sobre um app de restauração de fotos offline, que querem saber o que as fontes confirmam, o que o desenvolvedor apenas afirma e há quanto tempo o app não é atualizado.',
    readTime: '5 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise pcAI Photo Retouch',
    targetKeywords: [
      'análise pcai photo retouch',
      'retoque de fotos com ia local',
      'restaurar fotos antigas iphone',
      'editor de fotos com ia offline mac',
      'app de retoque de fotos sem nuvem',
      'filtro noite estrelada app',
      'pcai app store',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Vision', 'Neural Engine', 'Core ML'],
    leadAnswerBlock: '**O pcAI Photo Retouch é um app para iPhone, iPad e Mac, gratuito para instalar, que restaura fotos antigas e aplica estilos artísticos; segundo o desenvolvedor, a IA roda inteiramente no aparelho.** Recursos extras são vendidos como compras no app, o código-fonte não é publicado e o modelo não é nomeado.',
    quickAnswerTop: {
      pt: {
        question: 'O pcAI Photo Retouch é gratuito e funciona offline?',
        answer: 'Ele é gratuito para instalar, com compras no app para recursos extras. Segundo o desenvolvedor, não exige conta nem conexão com a internet, e o processamento da IA acontece no aparelho.',
        bullets: [
          'Aumenta a nitidez e o brilho das fotos e aplica estilos de esboço, pintura a óleo e «A Noite Estrelada».',
          'Somente em dispositivos Apple, pela App Store.',
          'O rótulo de privacidade da App Store informa que nenhum dado é coletado; a Apple observa que não verificou essa informação.',
          'Versão 1.1.0 (estado da página em 16 de outubro de 2026).',
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
        label: 'O que é o pcAI Photo Retouch?',
        anchor: 'what-is-pcai-photo-retouch',
      },
      {
        label: 'Onde baixar',
        anchor: 'get-it',
      },
      {
        label: 'Recursos confirmados pelas fontes',
        anchor: 'key-features',
      },
      {
        label: 'Privacidade e processamento no aparelho',
        anchor: 'privacy',
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
        label: 'Leitura relacionada',
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
            text: 'O pcAI Photo Retouch é um app de fotos de código fechado, de um único publicador e gratuito para instalar, cujo modelo de IA, segundo o desenvolvedor, roda no aparelho.',
          },
          {
            type: 'plain-terms',
            text: 'Você carrega uma foto e toca em um botão; segundo o desenvolvedor, o app deixa a imagem mais nítida ou a repinta no estilo escolhido no seu próprio aparelho, sem conta nem upload.',
          },
        ],
        items: [
          'Publicador: listado na App Store como 维 艾 (Wei Ai, copyright «aiwei»); nenhum repositório de código-fonte nem texto de licença foi encontrado.',
          'IA: a página do desenvolvedor diz que o processamento roda no Neural Engine por meio do Core ML; nenhum modelo é nomeado.',
          'Custo: gratuito para instalar; três compras no app são listadas (Pro Light, Pro Infinity e Starry Night Style).',
          'Reputação: a página da App Store ainda não mostra avaliações.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Sem atualização desde 20 de fevereiro de 2026. A App Store lista a versão 1.1.0 dessa data como a mais recente, então o app pode estar sem manutenção. Confira na página se há uma versão mais nova antes de depender dele. Tudo nesta página é a descrição do próprio desenvolvedor; a PromptQuorum não testou o app.',
          },
        ],
      },
      overview: {
        id: 'what-is-pcai-photo-retouch',
        title: 'O que é o pcAI Photo Retouch?',
        content: [
          '**O pcAI Photo Retouch é um app de edição de fotos para iPhone, iPad, Mac e Apple Vision que, segundo o desenvolvedor, executa a IA no aparelho em vez de na nuvem.** A [página do app](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html) do desenvolvedor o apresenta para criadores de conteúdo, corretores de imóveis e fotógrafos casuais e diz que não exige conta, login nem configurações: você toca em um botão e vê o resultado.',
          'O app tem três nomes: na App Store alemã ele se chama «Lokale KI Foto Retusche: pcAI», nas demais lojas consultadas aparece como «Local AI Photo Retouch: pcAI» e o site do desenvolvedor o chama de «pcAI Photo Retouch». Os três correspondem ao mesmo ID da App Store, 6751140211.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde baixar',
        content: [
          '**O app está disponível apenas na App Store; nenhuma versão para Android, Windows ou web é listada.**',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            Plataforma: 'iPhone, iPad',
            'Onde obter': '[App Store](https://apps.apple.com/br/app/id6751140211), iOS/iPadOS 16.0 ou posterior',
          },
          {
            Plataforma: 'Mac',
            'Onde obter': '[App Store](https://apps.apple.com/br/app/id6751140211), macOS 12.0 ou posterior',
          },
          {
            Plataforma: 'Apple Vision',
            'Onde obter': '[App Store](https://apps.apple.com/br/app/id6751140211), visionOS 1.0 ou posterior',
          },
          {
            Plataforma: 'Compras no app (loja brasileira)',
            'Onde obter': 'Pro Light R$ 6,90, Pro Infinity R$ 24,90, Starry Night Style R$ 12,90',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[Página do pcAI Photo Retouch](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html)',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html)',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': 'Não publicado',
          },
        ],
        note: 'Versão verificada em 16 de outubro de 2026: 1.1.0, atualizada pela última vez em 20 de fevereiro de 2026; o download tem 34.9 MB e o app é gratuito para instalar.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Tudo o que segue vem da descrição da App Store ou das páginas do desenvolvedor; nada foi testado de forma independente.**',
        ],
        items: [
          '**Restauração de fotos.** Devolve um aspecto mais nítido a fotos antigas com nitidez por IA e cita ainda uma etapa de realce de brilho.',
          '**Estilos artísticos.** Estilos de esboço, pintura a óleo e «A Noite Estrelada» de Van Gogh; a versão gratuita inclui alguma transferência de estilo, enquanto o estilo «A Noite Estrelada» é vendido como compra única.',
          '**Exportação e compartilhamento.** A exportação em tamanho original é gratuita e ilimitada; compartilhar as imagens editadas e escolher tamanhos de exportação são descritos como recursos de assinatura.',
          '**Fluxo de uso.** Carregamento e troca de fotos ilimitados; a versão 1.0.2 aplica os estilos diretamente, sem um clique extra, e a 1.0.1 acrescentou o ajuste automático do tamanho da imagem no macOS.',
          '**Idiomas.** A interface está disponível em inglês, alemão e chinês simplificado.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e processamento no aparelho',
        content: [
          '**A seção de privacidade da App Store informa que o desenvolvedor não coleta dados; a Apple observa que não verificou essa informação.** A política de privacidade do desenvolvedor, em vigor desde 20 de fevereiro de 2026, afirma que o app não coleta, armazena nem transmite dados pessoais, não tem contas de usuário, nunca envia imagens a um servidor e não usa SDKs de publicidade, SDKs de análise nem serviços de IA de terceiros.',
          '**Todos os recursos são descritos como executados offline no aparelho, então as fotos ficam nele, a menos que você mesmo as compartilhe.** A política não menciona as compras no app.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do desenvolvedor, não resultados de auditoria, e o código-fonte não é publicado. A PromptQuorum não inspecionou o tráfego de rede do app.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Código-fonte e licença.** Nenhum repositório público nem texto de licença foi encontrado, então as declarações de privacidade não podem ser conferidas no código.',
          '**Modelo e qualidade.** Core ML e o Neural Engine são citados, mas não o modelo, seu tamanho nem a origem do treinamento; a PromptQuorum não executou o app, de modo que a qualidade da restauração, a velocidade e o consumo de bateria são desconhecidos, e nenhum requisito de chip ou de RAM é informado além das versões do sistema operacional.',
          '**O que as compras liberam.** A descrição menciona recursos de assinatura para compartilhar e exportar em vários tamanhos, mas a página lista três compras sem dizer qual libera o quê nem qual é renovada.',
          '**Opiniões independentes.** A página ainda não mostra avaliações e nenhuma análise de terceiros foi encontrada.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            App: '[Real-ESRGAN](/pt/power-local-llm/real-esrgan-ai-image-upscaler-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / Apache-2.0',
            'Diferença principal': 'Ampliador de imagens de código aberto para computador; sem estilos artísticos',
          },
          {
            App: '[Draw Things](/pt/power-local-llm/draw-things-review)',
            Plataformas: 'macOS, iOS',
            'Preço / licença': 'Freemium / código fechado',
            'Diferença principal': 'Gerador de imagens no aparelho para iPhone e Mac; cria imagens em vez de retocar fotos',
          },
          {
            App: '[DiffusionBee](/pt/power-local-llm/diffusionbee-review)',
            Plataformas: 'macOS',
            'Preço / licença': 'Grátis / AGPL-3.0',
            'Diferença principal': 'Gerador Stable Diffusion empacotado para Mac; sem versão para iPhone',
          },
        ],
        note: 'Os dados dos concorrentes mudam com frequência; confirme o preço, a licença e as plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Por que os links de suporte e privacidade da App Store não abrem as páginas atuais?',
            a: 'A App Store aponta para endereços antigos do github.io para suporte e política de privacidade; eles agora mostram apenas um aviso de que as páginas foram movidas para [apps.h53d.xyz](https://apps.h53d.xyz/), para onde os links acima apontam.',
          },
          {
            q: 'O desenvolvedor tem outros apps?',
            a: 'O site do desenvolvedor lista outros 15 apps, entre eles STEP Reviewer, 3D Model Viewer, DXF Assistant e CutoutCraft.',
          },
          {
            q: 'Como ele se compara ao Real-ESRGAN?',
            a: 'O Real-ESRGAN é um ampliador de código aberto executado em um computador, enquanto o pcAI Photo Retouch é um app de código fechado para iPhone e Mac que também aplica estilos artísticos; as fontes não permitem comparar a qualidade.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'O pcAI Photo Retouch é uma ideia simples empacotada como app de loja: restaurar ou estilizar uma foto antiga no aparelho, gratuito para instalar e com algumas compras no app. Também é um app sem histórico e possivelmente sem manutenção: sem atualização desde 20 de fevereiro de 2026, um único publicador, sem código-fonte publicado, modelo não nomeado e ainda sem avaliações. Serve para quem usa iPhone e Mac e quer testar restauração de fotos offline a baixo custo e aceita um app que talvez não receba correções; quem precisa de uma ferramenta de código aberto e auditável deve comparar primeiro o [Real-ESRGAN](/pt/power-local-llm/real-esrgan-ai-image-upscaler-review) e conferir na App Store se há uma versão mais recente antes de comprar qualquer coisa.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Local AI Photo Retouch: pcAI na App Store](https://apps.apple.com/br/app/id6751140211) — descrição, histórico de versões, compras no app, rótulo de privacidade e compatibilidade, consultados em 16 de outubro de 2026 nas lojas dos EUA, da Alemanha, do Japão, do Brasil, da Coreia, da Espanha e da França.',
          '[Página do app pcAI Photo Retouch](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html) — recursos, público-alvo e a declaração sobre Core ML.',
          '[Página de suporte](https://apps.h53d.xyz/apps/pcai-photo-retouch/support.html) — dados de contato e declaração de plataformas.',
          '[Política de privacidade](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html) — declarações sobre dados, em vigor desde 20 de fevereiro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Análise do Real-ESRGAN](/pt/power-local-llm/real-esrgan-ai-image-upscaler-review) — um ampliador de imagens com IA de código aberto para desktop.',
          '[Análise do Draw Things](/pt/power-local-llm/draw-things-review) — geração de imagens no aparelho para iPhone e Mac.',
          '[Análise do DiffusionBee](/pt/power-local-llm/diffusionbee-review) — um app local de Stable Diffusion empacotado para Mac.',
          '[Os melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama mais amplo para iPhone.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Image & Video Generation',
    heroImage: '/images/pcai-photo-retouch-review-hero-ar.webp',
    title: 'مراجعة pcAI Photo Retouch: ترميم الصور وأنماط فنية دون اتصال على iPhone وMac',
    seoTitle: 'مراجعة pcAI Photo Retouch: تطبيق صور بذكاء على الجهاز',
    intro: 'pcAI Photo Retouch تطبيق لتحرير الصور على iPhone وiPad وMac وApple Vision، يرمّم الصور القديمة ويطبّق أنماط الرسم بالقلم والزيت و«الليلة المرصعة بالنجوم» لفان غوغ، بنموذج ذكاء اصطناعي يقول مطوّره إنه يعمل بالكامل على الجهاز. ينشره في App Store الناشر [维 艾 (Wei Ai)](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html). تستند هذه المراجعة إلى صفحة التطبيق في App Store وإلى صفحات المطوّر نفسه، وقد جرى التحقق منها في 16 أكتوبر 2026؛ ولم تجرّب PromptQuorum التطبيق عمليًا.',
    metaDescription: 'مراجعة pcAI Photo Retouch: تطبيق iPhone وMac مجاني التثبيت يرمّم الصور القديمة بذكاء اصطناعي على الجهاز. لا تحديث منذ فبراير 2026 وغير مُختبَر.',
    twitterDescription: 'مراجعة pcAI Photo Retouch: ترميم الصور وأنماط فنية على iPhone وMac بذكاء اصطناعي على الجهاز. مجاني التثبيت مع مشتريات داخل التطبيق، دون تحديث منذ فبراير 2026 وغير مُختبَر بعد.',
    audience: 'مستخدمو iPhone وiPad وMac المهتمون بتطبيق ترميم صور يعمل دون اتصال، ويريدون معرفة ما تؤكده المصادر وما يكتفي المطوّر بادعائه ومدى حداثة آخر تحديث للتطبيق.',
    readTime: '5 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة pcAI Photo Retouch',
    targetKeywords: [
      'مراجعة pcai photo retouch',
      'تنقيح الصور بالذكاء الاصطناعي المحلي',
      'ترميم الصور القديمة iPhone',
      'تحرير الصور بالذكاء الاصطناعي دون اتصال Mac',
      'تطبيق تنقيح صور دون سحابة',
      'فلتر الليلة المرصعة بالنجوم',
      'pcai app store',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Vision', 'Neural Engine', 'Core ML'],
    leadAnswerBlock: '**pcAI Photo Retouch تطبيق لأجهزة iPhone وiPad وMac، مجاني التثبيت، يرمّم الصور القديمة ويطبّق أنماطًا فنية، ويقول مطوّره إن الذكاء الاصطناعي فيه يعمل بالكامل على الجهاز.** الميزات الإضافية تُباع كمشتريات داخل التطبيق، والشيفرة المصدرية غير منشورة، ولم يُذكر اسم النموذج.',
    quickAnswerTop: {
      ar: {
        question: 'هل pcAI Photo Retouch مجاني، وهل يعمل دون اتصال؟',
        answer: 'تثبيته مجاني مع مشتريات داخل التطبيق للميزات الإضافية. ووفق المطوّر لا يحتاج إلى حساب أو اتصال بالإنترنت، وتتم معالجة الذكاء الاصطناعي على الجهاز.',
        bullets: [
          'يزيد حدّة الصور وسطوعها ويطبّق أنماط الرسم بالقلم والزيت و«الليلة المرصعة بالنجوم».',
          'لأجهزة Apple فقط، ويُوزَّع عبر App Store.',
          'تشير بطاقة الخصوصية في App Store إلى أنه لا تُجمع أي بيانات، وتنبّه Apple إلى أنها لم تتحقق من ذلك.',
          'الإصدار 1.1.0 (حالة الصفحة في 16 أكتوبر 2026).',
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
        label: 'ما هو pcAI Photo Retouch؟',
        anchor: 'what-is-pcai-photo-retouch',
      },
      {
        label: 'طريقة الحصول عليه',
        anchor: 'get-it',
      },
      {
        label: 'الميزات التي أكدتها المصادر',
        anchor: 'key-features',
      },
      {
        label: 'الخصوصية والمعالجة على الجهاز',
        anchor: 'privacy',
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
            text: 'pcAI Photo Retouch تطبيق صور مغلق المصدر من ناشر واحد، مجاني التثبيت، ويقول مطوّره إن نموذج الذكاء الاصطناعي فيه يعمل على الجهاز.',
          },
          {
            type: 'plain-terms',
            text: 'تحمّل صورة وتضغط زرًا؛ فيزيد التطبيق وضوحها أو يعيد رسمها بالنمط الذي تختاره على جهازك، وفق المطوّر، دون حساب ودون رفع.',
          },
        ],
        items: [
          'الناشر: مدرج في App Store باسم 维 艾 (Wei Ai، حقوق النشر «aiwei»)؛ ولم يُعثر على مستودع للشيفرة المصدرية أو نص ترخيص.',
          'الذكاء الاصطناعي: تذكر صفحة المطوّر أن المعالجة تعمل على Neural Engine عبر Core ML؛ ولا يُذكر اسم أي نموذج.',
          'التكلفة: التثبيت مجاني؛ وتُدرج ثلاث مشتريات داخل التطبيق (Pro Light وPro Infinity وStarry Night Style).',
          'السمعة: لا تعرض صفحة App Store أي تقييمات بعد.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'لا تحديث منذ 20 فبراير 2026. يدرج App Store الإصدار 1.1.0 من ذلك التاريخ بوصفه الأحدث، لذا قد يكون التطبيق غير مُصان. تحقق من الصفحة بحثًا عن إصدار أحدث قبل الاعتماد عليه. كل ما في هذه الصفحة هو وصف المطوّر نفسه؛ ولم تختبر PromptQuorum التطبيق.',
          },
        ],
      },
      overview: {
        id: 'what-is-pcai-photo-retouch',
        title: 'ما هو pcAI Photo Retouch؟',
        content: [
          '**pcAI Photo Retouch تطبيق لتحرير الصور على iPhone وiPad وMac وApple Vision، ينفّذ الذكاء الاصطناعي، وفق مطوّره، على الجهاز لا في السحابة.** تقدّمه [صفحة التطبيق](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html) لدى المطوّر لصنّاع المحتوى ووكلاء العقارات وهواة التصوير، وتذكر أنه لا يحتاج إلى حساب أو تسجيل دخول أو إعدادات: تضغط زرًا وترى النتيجة.',
          'للتطبيق ثلاثة أسماء: عنوانه في App Store الألماني «Lokale KI Foto Retusche: pcAI»، وفي المتاجر الأخرى التي فُحصت «Local AI Photo Retouch: pcAI»، ويسميه موقع المطوّر «pcAI Photo Retouch». وتشير جميعها إلى معرّف App Store نفسه، 6751140211.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'طريقة الحصول عليه',
        content: [
          '**التطبيق متاح عبر App Store فقط؛ ولا تُذكر نسخة لنظام Android أو Windows أو الويب.**',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'iPhone وiPad',
            'مكان الحصول عليه': '[App Store](https://apps.apple.com/us/app/id6751140211)، iOS/iPadOS 16.0 أو أحدث',
          },
          {
            'المنصة': 'Mac',
            'مكان الحصول عليه': '[App Store](https://apps.apple.com/us/app/id6751140211)، macOS 12.0 أو أحدث',
          },
          {
            'المنصة': 'Apple Vision',
            'مكان الحصول عليه': '[App Store](https://apps.apple.com/us/app/id6751140211)، visionOS 1.0 أو أحدث',
          },
          {
            'المنصة': 'المشتريات داخل التطبيق (المتجر الأمريكي)',
            'مكان الحصول عليه': 'Pro Light ‏$0.99 وPro Infinity ‏$3.99 وStarry Night Style ‏$1.99',
          },
          {
            'المنصة': 'الموقع الإلكتروني',
            'مكان الحصول عليه': '[صفحة pcAI Photo Retouch](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[سياسة الخصوصية](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مكان الحصول عليه': 'غير منشورة',
          },
        ],
        note: 'الإصدار الذي جرى التحقق منه في 16 أكتوبر 2026: 1.1.0، وآخر تحديث له في 20 فبراير 2026؛ حجم التنزيل 34.9 MB والتثبيت مجاني.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل ما يلي مأخوذ من وصف App Store أو من صفحات المطوّر؛ ولم يُختبر أي منه بصورة مستقلة.**',
        ],
        items: [
          '**ترميم الصور.** يمنح الصور القديمة مظهرًا أوضح عبر زيادة الحدّة بالذكاء الاصطناعي، ويذكر كذلك خطوة لتحسين السطوع.',
          '**الأنماط الفنية.** أنماط الرسم بالقلم والزيت و«الليلة المرصعة بالنجوم» لفان غوغ؛ وتتضمن النسخة المجانية بعض نقل الأنماط، بينما يُباع نمط «الليلة المرصعة بالنجوم» كشراء لمرة واحدة.',
          '**التصدير والمشاركة.** التصدير بالحجم الأصلي مجاني وغير محدود؛ أما مشاركة الصور المعدّلة وأحجام التصدير المرنة فتوصف بأنها ميزات اشتراك.',
          '**سير العمل.** تحميل الصور واستبدالها دون حدود؛ وأتاح الإصدار 1.0.2 تطبيق الأنماط مباشرة دون نقرة إضافية، وأضاف الإصدار 1.0.1 ضبطًا تلقائيًا لحجم الصورة على macOS.',
          '**اللغات.** الواجهة متاحة بالإنجليزية والألمانية والصينية المبسّطة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والمعالجة على الجهاز',
        content: [
          '**يذكر قسم الخصوصية في App Store أن المطوّر لا يجمع أي بيانات؛ وتنبّه Apple إلى أنها لم تتحقق من ذلك.** وتقول سياسة خصوصية المطوّر، السارية منذ 20 فبراير 2026، إن التطبيق لا يجمع بيانات شخصية ولا يخزّنها ولا ينقلها، وليس فيه حسابات مستخدمين، ولا يرفع الصور إلى أي خادم، ولا يستخدم حزم SDK للإعلانات أو التحليلات ولا خدمات ذكاء اصطناعي من أطراف ثالثة.',
          '**تُوصف جميع الميزات بأنها تعمل دون اتصال على الجهاز، فتبقى الصور عليه ما لم تشاركها بنفسك.** ولا تتطرق السياسة إلى المشتريات داخل التطبيق.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه إفادات من المطوّر وليست نتائج تدقيق، والشيفرة المصدرية غير منشورة. ولم تفحص PromptQuorum حركة الشبكة الخاصة بالتطبيق.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الشيفرة المصدرية والترخيص.** لم يُعثر على مستودع عام ولا على نص ترخيص، لذا لا يمكن التحقق من إفادات الخصوصية بمطابقتها مع الشيفرة.',
          '**النموذج والجودة.** يُذكر Core ML وNeural Engine، لكن لا يُذكر النموذج ولا حجمه ولا مصدر تدريبه؛ ولم تشغّل PromptQuorum التطبيق، فجودة الترميم والسرعة واستهلاك البطارية مجهولة، ولا تُذكر متطلبات للمعالج أو الذاكرة تتجاوز إصدارات نظام التشغيل.',
          '**ما الذي تفتحه المشتريات.** يذكر الوصف ميزات اشتراك للمشاركة والتصدير بأحجام متعددة، لكن الصفحة تدرج ثلاث مشتريات دون بيان أيّها يفتح ماذا وأيّها يتجدد تلقائيًا.',
          '**الآراء المستقلة.** لا تعرض الصفحة تقييمات بعد، ولم يُعثر على مراجعات من أطراف ثالثة.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الأبرز'],
        rows: [
          {
            'التطبيق': '[Real-ESRGAN](/ar/power-local-llm/real-esrgan-ai-image-upscaler-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الترخيص': 'مجاني / Apache-2.0',
            'الفرق الأبرز': 'أداة مفتوحة المصدر لتكبير الصور تعمل على الحاسوب؛ دون أنماط فنية',
          },
          {
            'التطبيق': '[Draw Things](/ar/power-local-llm/draw-things-review)',
            'المنصات': 'macOS وiOS',
            'السعر / الترخيص': 'مجاني جزئيًا / مغلق المصدر',
            'الفرق الأبرز': 'توليد صور على الجهاز لـ iPhone وMac؛ ينشئ صورًا بدل تنقيح الصور',
          },
          {
            'التطبيق': '[DiffusionBee](/ar/power-local-llm/diffusionbee-review)',
            'المنصات': 'macOS',
            'السعر / الترخيص': 'مجاني / AGPL-3.0',
            'الفرق الأبرز': 'مولّد Stable Diffusion مُعبّأ لنظام Mac؛ دون نسخة iPhone',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تحقق من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'لماذا لا تفتح روابط الدعم والخصوصية في App Store الصفحات الحالية؟',
            a: 'يشير App Store إلى عناوين github.io قديمة للدعم وسياسة الخصوصية؛ وهي تعرض الآن إشعارًا فقط بأن الصفحات انتقلت إلى [apps.h53d.xyz](https://apps.h53d.xyz/)، وهو ما تشير إليه الروابط أعلاه.',
          },
          {
            q: 'هل للمطوّر تطبيقات أخرى؟',
            a: 'يدرج موقع المطوّر 15 تطبيقًا آخر، منها STEP Reviewer وكذلك 3D Model Viewer وDXF Assistant وCutoutCraft.',
          },
          {
            q: 'كيف يقارن بـ Real-ESRGAN؟',
            a: 'Real-ESRGAN أداة مفتوحة المصدر لتكبير الصور تعمل على الحاسوب، أما pcAI Photo Retouch فتطبيق مغلق المصدر لأجهزة iPhone وMac ويطبّق كذلك أنماطًا فنية؛ ولا تتيح المصادر مقارنة الجودة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'pcAI Photo Retouch فكرة بسيطة في هيئة تطبيق متجر: ترميم صورة قديمة أو تغيير نمطها على الجهاز، بتثبيت مجاني ومع بعض المشتريات داخل التطبيق. وهو أيضًا تطبيق غير مجرَّب وربما غير مُصان: لا تحديث منذ 20 فبراير 2026، وناشر واحد، وشيفرة غير منشورة، ونموذج غير مسمّى، ولا تقييمات بعد. يناسب مستخدمي iPhone وMac الراغبين في تجربة ترميم الصور دون اتصال بتكلفة منخفضة والقادرين على التعايش مع تطبيق قد لا يتلقى إصلاحات؛ أما من يحتاج أداة مفتوحة المصدر وقابلة للتدقيق فعليه أن يقارن أولًا [Real-ESRGAN](/ar/power-local-llm/real-esrgan-ai-image-upscaler-review) وأن يتحقق في صفحة App Store من وجود إصدار أحدث قبل شراء أي شيء.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Local AI Photo Retouch: pcAI في App Store](https://apps.apple.com/us/app/id6751140211) — الوصف وسجل الإصدارات والمشتريات داخل التطبيق وبطاقة الخصوصية والتوافق، جرى التحقق منها في 16 أكتوبر 2026 في متاجر الولايات المتحدة وألمانيا واليابان والبرازيل وكوريا وإسبانيا وفرنسا.',
          '[صفحة تطبيق pcAI Photo Retouch](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html) — الميزات والمستخدمون المستهدفون والإفادة بشأن Core ML.',
          '[صفحة الدعم](https://apps.h53d.xyz/apps/pcai-photo-retouch/support.html) — بيانات الاتصال وإفادة المنصات.',
          '[سياسة الخصوصية](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html) — إفادات البيانات، سارية منذ 20 فبراير 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Real-ESRGAN](/ar/power-local-llm/real-esrgan-ai-image-upscaler-review) — أداة مفتوحة المصدر لتكبير الصور بالذكاء الاصطناعي لسطح المكتب.',
          '[مراجعة Draw Things](/ar/power-local-llm/draw-things-review) — توليد الصور على الجهاز لأجهزة iPhone وMac.',
          '[مراجعة DiffusionBee](/ar/power-local-llm/diffusionbee-review) — تطبيق Stable Diffusion محلي مُعبّأ لنظام Mac.',
          '[أفضل تطبيقات النماذج اللغوية المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — النظرة الأوسع على iPhone.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Image & Video Generation',
    heroImage: '/images/pcai-photo-retouch-review-hero-zh.webp',
    title: 'pcAI Photo Retouch评测:iPhone和Mac上的离线照片修复与艺术风格',
    seoTitle: 'pcAI Photo Retouch评测:设备端AI照片应用',
    intro: 'pcAI Photo Retouch是一款面向iPhone、iPad、Mac和Apple Vision的照片编辑应用,可修复老照片并应用素描、油画和梵高《星月夜》风格,开发者称其AI模型完全在设备上运行。它由[维 艾(Wei Ai)](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html)在App Store发布。本评测基于App Store页面和开发者自己的网页,核查日期为2026年10月16日;PromptQuorum没有实际测试这款应用。',
    metaDescription: 'pcAI Photo Retouch评测:可免费安装的iPhone和Mac应用,用设备端AI修复老照片并应用艺术风格。2026年2月起未更新,尚未经过实际测试。',
    twitterDescription: 'pcAI Photo Retouch评测:iPhone和Mac上基于设备端AI的照片修复与艺术风格。免费安装、含应用内购买,2026年2月起未更新,尚未测试。',
    audience: '对离线照片修复应用感兴趣的iPhone、iPad和Mac用户,想了解信息来源确认了什么、开发者只是声称了什么,以及应用最近一次更新是什么时候。',
    readTime: '阅读约5分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'pcAI Photo Retouch评测',
    targetKeywords: [
      'pcai photo retouch评测',
      '本地AI照片修图',
      'iPhone修复老照片',
      'Mac离线AI照片编辑',
      '无需云端的修图应用',
      '星月夜滤镜应用',
      'pcai app store',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Vision', 'Neural Engine', 'Core ML'],
    leadAnswerBlock: '**pcAI Photo Retouch是一款可免费安装的iPhone、iPad和Mac应用,可修复老照片并应用艺术风格,开发者称其AI完全在设备上运行。**额外功能通过应用内购买提供,源代码未公开,模型也未说明。',
    quickAnswerTop: {
      zh: {
        question: 'pcAI Photo Retouch免费吗?可以离线使用吗?',
        answer: '安装免费,额外功能需要应用内购买。据开发者称,它无需账号和网络连接,AI处理在设备上完成。',
        bullets: [
          '可锐化并提亮照片,并应用素描、油画和《星月夜》风格。',
          '仅限苹果设备,通过App Store获取。',
          'App Store隐私标签显示不收集数据;苹果注明未核实这一信息。',
          '版本1.1.0(2026年10月16日的页面状态)。',
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
        label: 'pcAI Photo Retouch是什么?',
        anchor: 'what-is-pcai-photo-retouch',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '信息来源确认的功能',
        anchor: 'key-features',
      },
      {
        label: '隐私与设备端处理',
        anchor: 'privacy',
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
        label: '信息来源',
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
            text: 'pcAI Photo Retouch是一款来自单一发布者、可免费安装的闭源照片应用,开发者称其AI模型在设备上运行。',
          },
          {
            type: 'plain-terms',
            text: '导入一张照片并点按按钮,据开发者称,应用会在你自己的设备上把照片变清晰,或按所选风格重绘,无需账号,也不上传。',
          },
        ],
        items: [
          '发布者:在App Store中显示为维 艾(Wei Ai,版权标注“aiwei”);未找到源代码仓库或许可证文本。',
          'AI:开发者网页称处理通过Core ML在Neural Engine上运行;未说明具体模型。',
          '费用:安装免费;列出三项应用内购买(Pro Light、Pro Infinity和Starry Night Style)。',
          '口碑:App Store页面暂无评分。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '自2026年2月20日起未更新。App Store将该日期发布的1.1.0版列为最新版本,因此应用可能已无人维护。在依赖它之前,请先在页面上查看是否有更新的版本。本页所有内容均来自开发者自己的描述;PromptQuorum没有测试这款应用。',
          },
        ],
      },
      overview: {
        id: 'what-is-pcai-photo-retouch',
        title: 'pcAI Photo Retouch是什么?',
        content: [
          '**pcAI Photo Retouch是一款面向iPhone、iPad、Mac和Apple Vision的照片编辑应用,据开发者称,它在设备上而不是云端运行AI。**开发者的[应用页面](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html)称其面向内容创作者、房产经纪人和普通摄影爱好者,并表示无需账号、登录或设置:点按按钮即可看到结果。',
          '这款应用有三个名称:德国App Store中为“Lokale KI Foto Retusche: pcAI”,其他已核查的商店中为“Local AI Photo Retouch: pcAI”,开发者网站称其为“pcAI Photo Retouch”。三者对应同一个App Store ID:6751140211。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: ['**应用仅通过App Store提供;未列出Android、Windows或网页版。**'],
        columns: ['平台', '获取途径'],
        rows: [
          {
            '平台': 'iPhone、iPad',
            '获取途径': '[App Store](https://apps.apple.com/us/app/id6751140211),iOS/iPadOS 16.0及以上',
          },
          {
            '平台': 'Mac',
            '获取途径': '[App Store](https://apps.apple.com/us/app/id6751140211),macOS 12.0及以上',
          },
          {
            '平台': 'Apple Vision',
            '获取途径': '[App Store](https://apps.apple.com/us/app/id6751140211),visionOS 1.0及以上',
          },
          {
            '平台': '应用内购买(美国商店)',
            '获取途径': 'Pro Light $0.99,Pro Infinity $3.99,Starry Night Style $1.99',
          },
          {
            '平台': '官网',
            '获取途径': '[pcAI Photo Retouch页面](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html)',
          },
          {
            '平台': '隐私政策',
            '获取途径': '[隐私政策](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html)',
          },
          {
            '平台': '源代码',
            '获取途径': '未公开',
          },
        ],
        note: '2026年10月16日核实的版本:1.1.0,最近一次更新为2026年2月20日;下载大小为34.9 MB,安装免费。',
      },
      features: {
        id: 'key-features',
        title: '信息来源确认的功能',
        content: ['**以下每一项都来自App Store描述或开发者网页,均未经过独立测试。**'],
        items: [
          '**照片修复。**通过AI锐化让老照片更清晰,并列出了提亮功能。',
          '**艺术风格。**提供素描、油画和梵高《星月夜》风格;免费版包含部分风格迁移,而《星月夜》风格作为一次性购买出售。',
          '**导出与分享。**原始尺寸导出免费且不限次数;分享编辑后的图片和灵活的导出尺寸被描述为订阅功能。',
          '**使用流程。**照片可不限次数地导入和替换;1.0.2版支持直接应用风格而无需多点一次,1.0.1版为macOS增加了图片尺寸自适应。',
          '**语言。**界面提供英语、德语和简体中文。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与设备端处理',
        content: [
          '**App Store隐私栏称开发者不收集任何数据;苹果注明未核实这一信息。**开发者的隐私政策(自2026年2月20日起生效)称,应用不收集、存储或传输个人数据,没有用户账号,从不把图片上传到服务器,也不使用广告SDK、分析SDK或第三方AI服务。',
          '**所有功能均被描述为在设备上离线运行,因此除非你自己分享,照片不会离开设备。**该政策没有提及应用内购买。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是开发者的声明,而非审计结果,源代码也未公开。PromptQuorum没有检查应用的网络流量。',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**源代码与许可证。**未找到公开仓库或许可证文本,因此无法用代码核对隐私方面的声明。',
          '**模型与质量。**文中提到了Core ML和Neural Engine,但没有说明模型、大小或训练来源;PromptQuorum没有运行这款应用,所以修复质量、速度和耗电情况均未知,除操作系统版本外也没有芯片或内存要求。',
          '**购买项解锁什么。**描述提到了用于分享和多尺寸导出的订阅功能,但页面列出的三项购买没有说明各自解锁什么、哪一项会自动续订。',
          '**独立反馈。**页面暂无评分,也未找到第三方评测。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格/许可证', '主要区别'],
        rows: [
          {
            '应用': '[Real-ESRGAN](/zh/power-local-llm/real-esrgan-ai-image-upscaler-review)',
            '平台': 'Windows、macOS、Linux',
            '价格/许可证': '免费/Apache-2.0',
            '主要区别': '在电脑上运行的开源图像放大工具;没有艺术风格',
          },
          {
            '应用': '[Draw Things](/zh/power-local-llm/draw-things-review)',
            '平台': 'macOS、iOS',
            '价格/许可证': '免费增值/闭源',
            '主要区别': '面向iPhone和Mac的设备端图像生成;生成图像而非修饰照片',
          },
          {
            '应用': '[DiffusionBee](/zh/power-local-llm/diffusionbee-review)',
            '平台': 'macOS',
            '价格/许可证': '免费/AGPL-3.0',
            '主要区别': '面向Mac的打包版Stable Diffusion生成器;没有iPhone版',
          },
        ],
        note: '竞品信息经常变化;请在各应用自己的页面上确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '为什么App Store里的支持和隐私链接打不开当前页面?',
            a: 'App Store列出的是旧的github.io地址,用于支持和隐私政策;这些页面现在只显示一条通知,说明页面已迁移到[apps.h53d.xyz](https://apps.h53d.xyz/),上面的链接指向的正是新地址。',
          },
          {
            q: '开发者还有其他应用吗?',
            a: '开发者网站还列出了另外15款应用,其中包括STEP Reviewer、3D Model Viewer、DXF Assistant和CutoutCraft。',
          },
          {
            q: '它和Real-ESRGAN相比如何?',
            a: 'Real-ESRGAN是在电脑上运行的开源放大工具,而pcAI Photo Retouch是面向iPhone和Mac的闭源应用,还能应用艺术风格;根据现有来源无法比较两者的画质。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'pcAI Photo Retouch是一个简单的想法做成的商店应用:在设备上修复老照片或为其换风格,可免费安装,带有几项应用内购买。它同时也是一款没有验证记录、可能已无人维护的应用:自2026年2月20日起未更新,发布者只有一个,源代码未公开,模型未说明,也还没有评分。它适合想以低成本试用离线照片修复、并能接受应用可能不再获得修复的iPhone和Mac用户;需要开源、可审查工具的人,应先对比[Real-ESRGAN](/zh/power-local-llm/real-esrgan-ai-image-upscaler-review),并在购买任何内容之前先到App Store页面查看是否有更新的版本。',
      },
      sources: {
        id: 'sources',
        title: '信息来源',
        items: [
          '[App Store上的Local AI Photo Retouch: pcAI](https://apps.apple.com/us/app/id6751140211) — 描述、版本历史、应用内购买、隐私标签和兼容性,2026年10月16日在美国、德国、日本、巴西、韩国、西班牙和法国商店核查。',
          '[pcAI Photo Retouch应用页面](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html) — 功能、目标用户以及关于Core ML的说明。',
          '[支持页面](https://apps.h53d.xyz/apps/pcai-photo-retouch/support.html) — 联系方式和平台说明。',
          '[隐私政策](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html) — 关于数据的声明,自2026年2月20日起生效。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Real-ESRGAN评测](/zh/power-local-llm/real-esrgan-ai-image-upscaler-review) — 面向桌面的开源AI图像放大工具。',
          '[Draw Things评测](/zh/power-local-llm/draw-things-review) — iPhone和Mac上的设备端图像生成。',
          '[DiffusionBee评测](/zh/power-local-llm/diffusionbee-review) — 面向Mac的打包版本地Stable Diffusion应用。',
          '[2026年iPhone最佳本地LLM应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 范围更广的iPhone汇总。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Image & Video Generation',
    heroImage: '/images/pcai-photo-retouch-review-hero-ko.webp',
    title: 'pcAI Photo Retouch 리뷰: iPhone·Mac의 오프라인 사진 복원과 아트 스타일',
    seoTitle: 'pcAI Photo Retouch 리뷰: 기기 내 AI 사진 앱',
    intro: 'pcAI Photo Retouch는 iPhone, iPad, Mac, Apple Vision용 사진 편집 앱으로, 오래된 사진을 복원하고 스케치, 유화, 반 고흐의 「별이 빛나는 밤」 스타일을 적용합니다. 개발자는 AI 모델이 전적으로 기기에서 실행된다고 밝힙니다. App Store 게시자는 [维 艾(Wei Ai)](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html)입니다. 이 리뷰는 App Store 등록 정보와 개발자의 자체 페이지를 바탕으로 하며 확인일은 2026년 10월 16일입니다. PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription: 'pcAI Photo Retouch 리뷰. 기기 내 AI로 오래된 사진을 복원하는 무료 설치 iPhone·Mac 앱. 2026년 2월 이후 업데이트 없음, 미검증.',
    twitterDescription: 'pcAI Photo Retouch 리뷰. 기기 내 AI로 iPhone·Mac에서 사진 복원과 아트 스타일을 제공합니다. 무료 설치, 인앱 구매, 2026년 2월 이후 업데이트 없음, 미검증.',
    audience: '오프라인 사진 복원 앱에 관심이 있는 iPhone, iPad, Mac 사용자 중 출처가 확인한 내용, 개발자가 주장만 하는 내용, 앱이 마지막으로 업데이트된 시점을 알고 싶은 분.',
    readTime: '5분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'pcAI Photo Retouch 리뷰',
    targetKeywords: [
      'pcai photo retouch 리뷰',
      '로컬 AI 사진 보정',
      'iPhone 오래된 사진 복원',
      '오프라인 AI 사진 편집 Mac',
      '클라우드 없는 사진 보정 앱',
      '별이 빛나는 밤 필터 앱',
      'pcai app store',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Vision', 'Neural Engine', 'Core ML'],
    leadAnswerBlock: '**pcAI Photo Retouch는 오래된 사진을 복원하고 아트 스타일을 적용하는, 무료로 설치할 수 있는 iPhone·iPad·Mac용 앱이며, 개발자는 AI가 전적으로 기기에서 실행된다고 밝힙니다.** 추가 기능은 인앱 구매로 판매되고, 소스 코드는 공개되지 않았으며, 모델 이름도 밝혀지지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'pcAI Photo Retouch는 무료이며 오프라인에서도 작동합니까?',
        answer: '설치는 무료이고 추가 기능은 인앱 구매입니다. 개발자에 따르면 계정도 인터넷 연결도 필요 없으며, AI 처리는 기기에서 이루어집니다.',
        bullets: [
          '사진을 선명하게 하고 밝게 하며, 스케치·유화·「별이 빛나는 밤」 스타일을 적용합니다.',
          'Apple 기기 전용이며 App Store로 배포됩니다.',
          'App Store 개인정보 라벨에는 수집하는 데이터가 없다고 표시되어 있으며, Apple은 이 정보를 확인하지 않았다고 밝힙니다.',
          '버전 1.1.0(2026년 10월 16일 기준 등록 정보).',
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
        label: 'pcAI Photo Retouch란?',
        anchor: 'what-is-pcai-photo-retouch',
      },
      {
        label: '구하는 방법',
        anchor: 'get-it',
      },
      {
        label: '출처로 확인된 기능',
        anchor: 'key-features',
      },
      {
        label: '개인정보 보호와 기기 내 처리',
        anchor: 'privacy',
      },
      {
        label: '확인하지 못한 내용',
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
            text: 'pcAI Photo Retouch는 게시자가 한 곳뿐인 무료 설치 클로즈드 소스 사진 앱으로, 개발자에 따르면 AI 모델이 기기에서 실행됩니다.',
          },
          {
            type: 'plain-terms',
            text: '사진을 불러와 버튼을 누르면, 개발자에 따르면 계정이나 업로드 없이 기기에서 사진을 선명하게 하거나 선택한 스타일로 다시 그려 줍니다.',
          },
        ],
        items: [
          '게시자: App Store에는 维 艾(Wei Ai, 저작권 표기 「aiwei」)로 표시되어 있으며, 소스 코드 저장소나 라이선스 문서는 찾지 못했습니다.',
          'AI: 개발자 페이지에 따르면 처리는 Core ML을 통해 Neural Engine에서 실행되며, 모델 이름은 밝혀져 있지 않습니다.',
          '비용: 설치는 무료이며 인앱 구매 3종(Pro Light, Pro Infinity, Starry Night Style)이 표시되어 있습니다.',
          '평판: App Store 등록 정보에는 아직 평점이 없습니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026년 2월 20일 이후 업데이트가 없습니다. App Store는 해당 날짜의 버전 1.1.0을 최신으로 표시하고 있어, 앱이 더 이상 관리되지 않을 수 있습니다. 의존하기 전에 등록 정보에서 더 새로운 버전이 있는지 확인하십시오. 이 페이지의 모든 내용은 개발자 자신의 설명에 따른 것이며, PromptQuorum은 앱을 테스트하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-pcai-photo-retouch',
        title: 'pcAI Photo Retouch란?',
        content: [
          '**pcAI Photo Retouch는 iPhone, iPad, Mac, Apple Vision용 사진 편집 앱으로, 개발자에 따르면 AI를 클라우드가 아니라 기기에서 실행합니다.** 개발자의 [앱 페이지](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html)는 콘텐츠 제작자, 부동산 중개인, 일반 사진 애호가를 대상으로 한다고 소개하며, 계정·로그인·설정이 필요 없고 버튼을 누르면 바로 결과를 볼 수 있다고 설명합니다.',
          '이 앱에는 이름이 세 가지 있습니다. 독일 App Store에서는 「Lokale KI Foto Retusche: pcAI」, 확인한 다른 스토어에서는 「Local AI Photo Retouch: pcAI」, 개발자 사이트에서는 「pcAI Photo Retouch」입니다. 세 이름 모두 같은 App Store ID(6751140211)를 가리킵니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '구하는 방법',
        content: ['**앱은 App Store에서만 받을 수 있으며, Android, Windows, 웹 버전은 표시되어 있지 않습니다.**'],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'iPhone, iPad',
            '받는 곳': '[App Store](https://apps.apple.com/kr/app/id6751140211), iOS/iPadOS 16.0 이상',
          },
          {
            '플랫폼': 'Mac',
            '받는 곳': '[App Store](https://apps.apple.com/kr/app/id6751140211), macOS 12.0 이상',
          },
          {
            '플랫폼': 'Apple Vision',
            '받는 곳': '[App Store](https://apps.apple.com/kr/app/id6751140211), visionOS 1.0 이상',
          },
          {
            '플랫폼': '인앱 구매(한국 스토어)',
            '받는 곳': 'Pro Light ₩1,100, Pro Infinity ₩5,500, Starry Night Style ₩3,300',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[pcAI Photo Retouch 페이지](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[개인정보 처리방침](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '공개되지 않음',
          },
        ],
        note: '2026년 10월 16일에 확인한 버전: 1.1.0, 마지막 업데이트는 2026년 2월 20일입니다. 다운로드 크기는 34.9 MB이며 설치는 무료입니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: ['**아래 내용은 모두 App Store 설명이나 개발자 페이지에서 가져온 것이며, 독립적으로 테스트한 항목은 없습니다.**'],
        items: [
          '**사진 복원.** AI 선명도 보정으로 오래된 사진을 더 또렷하게 만들며, 밝기를 높이는 단계도 언급되어 있습니다.',
          '**아트 스타일.** 스케치, 유화, 반 고흐 「별이 빛나는 밤」 스타일을 제공합니다. 무료 버전에는 일부 스타일 변환이 포함되고 「별이 빛나는 밤」 스타일은 1회성 구매로 판매됩니다.',
          '**내보내기와 공유.** 원본 크기 내보내기는 횟수 제한 없이 무료입니다. 편집한 이미지의 공유와 유연한 내보내기 크기는 구독 기능으로 설명되어 있습니다.',
          '**사용 흐름.** 사진 불러오기와 교체는 횟수 제한이 없습니다. 버전 1.0.2에서 추가 클릭 없이 스타일을 바로 적용할 수 있게 되었고, 1.0.1에서 macOS의 이미지 크기 자동 조정이 추가되었습니다.',
          '**언어.** 인터페이스는 영어, 독일어, 중국어 간체로 제공됩니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 기기 내 처리',
        content: [
          '**App Store 개인정보 항목에는 개발자가 데이터를 수집하지 않는다고 표시되어 있으며, Apple은 이 정보를 확인하지 않았다고 밝힙니다.** 2026년 2월 20일부터 시행된 개발자의 개인정보 처리방침은 앱이 개인 데이터를 수집·저장·전송하지 않고, 사용자 계정이 없으며, 이미지를 서버에 업로드하지 않고, 광고 SDK·분석 SDK·제3자 AI 서비스를 사용하지 않는다고 밝힙니다.',
          '**모든 기능은 기기에서 오프라인으로 실행된다고 설명되어 있으므로, 직접 공유하지 않는 한 사진은 기기 밖으로 나가지 않습니다.** 처리방침에는 인앱 구매에 대한 언급이 없습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발자의 선언이며 감사 결과가 아니고, 소스 코드도 공개되어 있지 않습니다. PromptQuorum은 앱의 네트워크 트래픽을 검사하지 않았습니다.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**소스 코드와 라이선스.** 공개 저장소나 라이선스 문서를 찾지 못해, 개인정보 관련 선언을 코드로 검증할 수 없습니다.',
          '**모델과 품질.** Core ML과 Neural Engine은 언급되지만 모델, 크기, 학습 출처는 밝혀져 있지 않습니다. PromptQuorum이 앱을 실행하지 않았으므로 복원 품질, 속도, 배터리 소모는 알 수 없으며, 운영체제 버전 외에 칩이나 RAM 요구 사항도 명시되어 있지 않습니다.',
          '**구매 항목이 여는 기능.** 설명에는 공유와 다중 크기 내보내기를 위한 구독 기능이 나오지만, 등록 정보에 표시된 구매 3종 중 어느 것이 무엇을 여는지, 어느 것이 자동 갱신되는지는 적혀 있지 않습니다.',
          '**독립적인 평가.** 등록 정보에는 아직 평점이 없고, 제3자 리뷰도 찾지 못했습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격/라이선스', '주요 차이'],
        rows: [
          {
            '앱': '[Real-ESRGAN](/ko/power-local-llm/real-esrgan-ai-image-upscaler-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격/라이선스': '무료/Apache-2.0',
            '주요 차이': '컴퓨터에서 실행하는 오픈소스 이미지 업스케일러. 아트 스타일 없음',
          },
          {
            '앱': '[Draw Things](/ko/power-local-llm/draw-things-review)',
            '플랫폼': 'macOS, iOS',
            '가격/라이선스': '프리미엄/클로즈드 소스',
            '주요 차이': 'iPhone·Mac용 기기 내 이미지 생성. 사진 보정이 아니라 이미지를 생성',
          },
          {
            '앱': '[DiffusionBee](/ko/power-local-llm/diffusionbee-review)',
            '플랫폼': 'macOS',
            '가격/라이선스': '무료/AGPL-3.0',
            '주요 차이': 'Mac용으로 패키징된 Stable Diffusion 생성기. iPhone 버전 없음',
          },
        ],
        note: '경쟁 앱의 정보는 자주 바뀌므로 현재 가격, 라이선스, 플랫폼은 각 앱의 등록 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'App Store의 지원 및 개인정보 링크가 현재 페이지를 열지 않는 이유는 무엇입니까?',
            a: 'App Store는 지원과 개인정보 처리방침에 대해 예전 github.io 주소를 안내합니다. 해당 페이지에는 페이지가 [apps.h53d.xyz](https://apps.h53d.xyz/)로 이전되었다는 안내만 표시되며, 위 표의 링크는 이전된 주소를 가리킵니다.',
          },
          {
            q: '개발자는 다른 앱도 만듭니까?',
            a: '개발자 사이트에는 다른 앱 15개가 나열되어 있으며, STEP Reviewer, 3D Model Viewer, DXF Assistant, CutoutCraft 등이 포함됩니다.',
          },
          {
            q: 'Real-ESRGAN과는 어떻게 다릅니까?',
            a: 'Real-ESRGAN은 컴퓨터에서 실행하는 오픈소스 업스케일러이고, pcAI Photo Retouch는 아트 스타일도 적용하는 iPhone·Mac용 클로즈드 소스 앱입니다. 출처만으로는 품질을 비교할 수 없습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'pcAI Photo Retouch는 오래된 사진을 기기에서 복원하거나 스타일을 바꾸는 단순한 아이디어를 스토어 앱으로 만든 것으로, 무료로 설치할 수 있고 인앱 구매가 몇 가지 있습니다. 동시에 검증되지 않았고 관리가 중단되었을 수도 있는 앱입니다. 2026년 2월 20일 이후 업데이트가 없고, 게시자는 한 곳이며, 소스는 공개되지 않았고, 모델 이름도 알 수 없으며, 평점도 아직 없습니다. 낮은 비용으로 오프라인 사진 복원을 시험해 보고 싶고 수정이 더 제공되지 않을 수 있는 앱도 감수할 수 있는 iPhone·Mac 사용자에게 적합합니다. 오픈소스이며 검증 가능한 도구가 필요하다면 먼저 [Real-ESRGAN](/ko/power-local-llm/real-esrgan-ai-image-upscaler-review)을 비교하고, 구매하기 전에 App Store 페이지에서 새 버전이 있는지 확인하십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 Local AI Photo Retouch: pcAI](https://apps.apple.com/kr/app/id6751140211) — 설명, 버전 기록, 인앱 구매, 개인정보 라벨, 호환성. 2026년 10월 16일 미국, 독일, 일본, 브라질, 한국, 스페인, 프랑스 스토어에서 확인.',
          '[pcAI Photo Retouch 앱 페이지](https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html) — 기능, 대상 사용자, Core ML 관련 설명.',
          '[지원 페이지](https://apps.h53d.xyz/apps/pcai-photo-retouch/support.html) — 연락처와 플랫폼 관련 설명.',
          '[개인정보 처리방침](https://apps.h53d.xyz/apps/pcai-photo-retouch/policy.html) — 데이터 관련 선언, 2026년 2월 20일부터 시행.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Real-ESRGAN 리뷰](/ko/power-local-llm/real-esrgan-ai-image-upscaler-review) — 데스크톱용 오픈소스 AI 이미지 업스케일러.',
          '[Draw Things 리뷰](/ko/power-local-llm/draw-things-review) — iPhone·Mac의 기기 내 이미지 생성.',
          '[DiffusionBee 리뷰](/ko/power-local-llm/diffusionbee-review) — Mac용으로 패키징된 로컬 Stable Diffusion 앱.',
          '[2026년 iPhone용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone용 더 폭넓은 정리.',
        ],
      },
    },
  },
}

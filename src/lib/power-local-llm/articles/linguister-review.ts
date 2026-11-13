// Linguist Review: open-source browser translator for Chrome and Firefox with a built-in offline mode
// Slug: linguister-review (product name "Linguist", website linguister.io)
// Companion to: on-device-ai-translator-review, translate-books-with-llms-review, sablate-review
// Facts verified 2026-11-13 against linguister.io (home, docs/guides/OfflineTranslation), the GitHub repo translate-tools/linguist (README, LICENSE, package.json,
// releases v7.1.0 of 2026-08-07, commits to main up to 2026-09-04, telemetry source in src/lib/telemetry) and the Firefox Add-ons API listing (listed version 7.0.5).
// Not hands-on tested. Stale-project warning is OFF (70 days since the last update on 2026-09-04).

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
    heroImage: '/images/linguister-review-hero-en.webp',
    title: 'Linguist Review: Open-Source Browser Translator With an Offline Mode',
    seoTitle: 'Linguist Review: Browser Translator With Offline Mode',
    intro: 'Linguist (website linguister.io) is a free, open-source browser extension for Chrome and Firefox that translates whole pages, selected text, subtitles and messages. A fresh install sends text to a cloud translator, but the extension also has a built-in offline translator and can connect to local servers such as LibreTranslate or Ollama. This review covers what the website, documentation, Firefox listing and GitHub repository say, where the local part starts and stops, and what stays unclear. It involved no hands-on testing.',
    metaDescription: 'Linguist review: free open-source translator extension for Chrome and Firefox with a built-in offline mode, cloud default and added telemetry. Not tested.',
    twitterDescription: 'Linguist review: free open-source page translator for Chrome and Firefox with an opt-in offline mode and local server support. Privacy, limits, alternatives.',
    audience: 'Chrome and Firefox users who want to translate web pages and text without defaulting to a cloud service — covers what runs locally, setup, privacy, limits and alternatives.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Linguist review',
    targetKeywords: [
      'linguist review',
      'linguister',
      'offline browser translator',
      'open source translate extension',
      'bergamot browser translation',
      'private page translator chrome firefox',
      'libretranslate browser extension',
    ],
    current_hardware_mentioned: [
      'Chrome',
      'Firefox',
      'NVIDIA GPU (optional, for a local LibreTranslate server)',
    ],
    leadAnswerBlock: '**Linguist is a free, open-source translator extension for Chrome and Firefox that is local only when you choose it:** the built-in Bergamot translator runs on your device, while the out-of-the-box translator is a free Google service. It suits readers of foreign-language sites who are willing to change one setting.',
    quickAnswerTop: {
      en: {
        question: 'Does Linguist translate on my device?',
        answer: 'Only after you switch it on. The documentation says the built-in offline translator, called Bergamot, translates on the device and is picked as the translation module on the preferences page. The version 7.1.0 release notes say the default is a free Google translator, so a fresh install sends the text to Google.',
        bullets: [
          'Translates entire pages by hotkey or rule, selected text, typed text, subtitles on Netflix and in video calls, and private messages.',
          'Reads original and translated text aloud and keeps a history plus a personal dictionary that the site says works offline.',
          'Custom translators connect cloud services such as ChatGPT, DeepL, DeepSeek and Gemini, or local ones such as Ollama and LibreTranslate.',
          "Image translation is not offered, by the maker's own choice.",
          'Chrome and Firefox from the stores; other browsers by manual install from GitHub Releases.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: 'Quick Answer',
        anchor: 'quick-answer',
      },
      {
        label: 'Get Linguist',
        anchor: 'get-it',
      },
      {
        label: 'Linguist at a Glance',
        anchor: 'at-a-glance',
      },
      {
        label: 'What Linguist Is',
        anchor: 'what-is-linguist',
      },
      {
        label: 'How to Get Started',
        anchor: 'how-to-get-started',
      },
      {
        label: 'Features',
        anchor: 'features',
      },
      {
        label: 'Translators and Offline Mode',
        anchor: 'translators-offline',
      },
      {
        label: 'Privacy, License and Cost',
        anchor: 'privacy',
      },
      {
        label: 'Trade-Offs: Benefits vs. Limitations',
        anchor: 'tradeoffs',
      },
      {
        label: 'Linguist vs. Alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Who Should Use Linguist',
        anchor: 'who-should-use',
      },
      {
        label: 'Who Should Not Use Linguist',
        anchor: 'who-should-not-use',
      },
      {
        label: 'FAQ',
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
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Linguist is a free, open-source browser extension that translates pages and text in the cloud by default and on your device when you select its built-in offline translator.',
          },
          {
            type: 'plain-terms',
            text: 'Think of a translate button with a dial: one position sends the words to Google, another keeps them on your computer or on a server you run yourself.',
          },
        ],
        items: [
          'Local claim: the Bergamot offline translator is built in and opt-in; local servers connect through custom translator modules; every cloud choice sends text out.',
          'License and maker: open source, developed by Robert Vitonsky per the LICENSE file, code in the GitHub organization translate-tools.',
          'Price: free per the website, which asks for donations.',
          'Maintenance: version 7.1.0 was released on 7 August 2026 and the main branch was last updated on 4 September 2026, so the project is still being developed.',
          'Gaps: no image translation, telemetry added in 7.1.0 although the site says it collects no user data, and a Firefox listing that showed an older version.',
        ],
      },
      getItLinguist: {
        id: 'get-it',
        title: 'Get Linguist',
        content: [
          '**Linguist installs from the browser stores, so no terminal is needed.** Pick the store for your browser, or download a package from the GitHub release page for other browsers.',
        ],
        columns: [
          'Platform',
          'Get It',
        ],
        rows: [
          {
            Platform: 'Chrome',
            'Get It': '[Install for Chrome](https://chrome.google.com/webstore/detail/gbefmodhlophhakmoecijeppjblibmie) — Chrome Web Store link from the official site',
          },
          {
            Platform: 'Firefox',
            'Get It': '[Install for Firefox](https://addons.mozilla.org/addon/linguist-translator/) — Firefox Add-ons',
          },
          {
            Platform: 'Other browsers',
            'Get It': '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — zip, .crx and .xpi packages for manual install',
          },
          {
            Platform: 'Offline setup',
            'Get It': '[Offline translation guide](https://linguister.io/docs/guides/OfflineTranslation) — Bergamot is built in; LibreTranslate runs through Docker',
          },
          {
            Platform: 'Website',
            'Get It': '[linguister.io](https://linguister.io/)',
          },
          {
            Platform: 'Source code',
            'Get It': '[github.com/translate-tools/linguist](https://github.com/translate-tools/linguist) — open source',
          },
        ],
        note: 'PromptQuorum found no separate privacy-policy page on the website. The Firefox listing showed version 7.0.5 when checked on 13 November 2026, so a store version can trail the GitHub release. On Android, the README describes Firefox Nightly with a custom add-on collection.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Linguist at a Glance',
        columns: [
          'Attribute',
          'Linguist',
        ],
        rows: [
          {
            Attribute: 'Platform',
            Linguist: 'Chrome and Firefox extension; other browsers by manual install',
          },
          {
            Attribute: 'Price',
            Linguist: 'Free; donations requested',
          },
          {
            Attribute: 'License',
            Linguist: 'Open source; GPL-3.0 per package.json, BSD-3-Clause per the LICENSE file',
          },
          {
            Attribute: 'Runs',
            Linguist: 'Cloud translators by default; opt-in offline Bergamot on the device; optional local servers',
          },
          {
            Attribute: 'Languages',
            Linguist: '130 per the README; more than 100 per the website (not verified)',
          },
          {
            Attribute: 'Offline use',
            Linguist: 'Offline translator and dictionary, per the website',
          },
          {
            Attribute: 'Image translation',
            Linguist: 'Not offered, per the website',
          },
          {
            Attribute: 'Telemetry',
            Linguist: 'Added in 7.1.0; the maker says no personal data or texts',
          },
        ],
        note: 'A missing statement on the site means unknown, not unsupported.',
      },
      whatIsLinguist: {
        id: 'what-is-linguist',
        title: 'What Linguist Is',
        content: [
          "**Linguist is a browser extension that replaces the browser's translate button with a configurable translation system.** It translates whole pages with a hotkey or automatic rules, selected text, typed text, subtitles and private messages, reads translations aloud and saves entries to a personal dictionary.",
          'The product is called Linguist, its website is linguister.io and the code lives in the GitHub organization translate-tools; the LICENSE file names Robert Vitonsky as copyright holder and the documentation footer names PrimeBits. Other tools share the name Linguist; this review covers linguister.io only.',
          'The review draws on the website, documentation, Firefox listing, GitHub repository and release notes. Translation quality, speed and stability were not tested and are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an install and one preference.** The steps follow the website and the offline guide.',
        ],
        numberedItems: [
          {
            title: 'Install the extension',
            whyItMatters: 'Add it from the Chrome Web Store or Firefox Add-ons, or install a package from GitHub Releases in developer mode.',
          },
          {
            title: 'Open the preferences',
            whyItMatters: 'Choose the translation module. A fresh install uses a free Google translator, per the 7.1.0 release notes; Bergamot and custom translators are selected here.',
          },
          {
            title: 'Translate',
            whyItMatters: 'Use the hotkey for a page, select text and press the translate button, or type into the toolbar popup; hover over translated text to see the original.',
          },
          {
            title: 'Optional: run a local server',
            whyItMatters: 'For LibreTranslate, follow the guide: start the Docker container, wait for the models to download, then add the LibreTranslate custom translator in the settings.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The feature set centres on translating what you read in the browser.** Everything below comes from the website, documentation and README.',
        ],
        items: [
          '**Page translation.** A hotkey or automatic rules by page language or domain; the extension changes only text nodes, so the layout stays intact, and it also works on pages behind logins.',
          '**Selected and typed text.** A translate button appears on selected text, and the popup takes typed text.',
          '**Subtitles and messages.** Subtitles on Netflix and in video calls, and private messages; the site also mentions real-time translation in Zoom, Google Meet and Microsoft Teams.',
          '**Speech.** Original and translated text can be read aloud; the documentation describes custom text-to-speech modules.',
          '**History and dictionary.** Every translation is saved to a searchable history and important entries go into a personal dictionary.',
          '**Built-in services.** Google, Yandex and Microsoft are listed on the website; the 7.1.0 release notes say the Microsoft translator no longer works.',
        ],
      },
      translators: {
        id: 'translators-offline',
        title: 'Translators and Offline Mode',
        content: [
          '**The offline translator is Bergamot, built in since version 5.0.** The documentation says you pick it as the translation module on the preferences page, and the website says translation then happens on the device and works without a connection. The README names the browsermt Bergamot project. PromptQuorum did not check which language pairs it covers or how its quality compares with cloud services.',
          '**Local servers are the second route.** A custom translator module connects Linguist to any service you deploy. The guide shows LibreTranslate in Docker, where models download on first start and an NVIDIA GPU is optional, and the website names Ollama. Cloud services such as ChatGPT, DeepL, DeepSeek and Gemini connect the same way and receive the text.',
          '**Default behaviour.** Per the 7.1.0 release notes, the default is a free Google translator with automatic fallback to another translator when the preferred one is down; the notes say the fallback is not switched on for users of Bergamot or a custom service. No RAM or GPU requirement is stated for the extension itself.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**What leaves your machine depends on the translator you pick.** With a cloud translator, including the default, the text of the page or selection goes to that provider. With Bergamot or a server you run, the website says the text stays on your device or network.',
          '**Telemetry arrived in version 7.1.0.** The release notes say it collects basic interaction events and translator errors and "does not collect any personal data or texts". The source code in the repository sends event names such as page translation changed or settings updated, a random ID stored in the extension, the browser language and the user agent to a server at events.vitonsky.net. The website and README still say the extension collects no user data, and the two statements are not reconciled. PromptQuorum found no off switch in the release notes and did not look for one in the app.',
          '**Permissions, license and cost.** The Firefox listing for version 7.0.5 shows access to all websites, which page translation needs, plus storage, tabs, context menus and scripting. The repository LICENSE file is BSD-3-Clause while package.json and the Firefox listing say GPL-3.0; the difference is unresolved. The extension is free and the website asks for donations.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: [
          'Benefit',
          'What it means in real use',
          'Limitation / caveat',
        ],
        rows: [
          {
            Benefit: 'Built-in offline translator',
            'What it means in real use': 'Pages and text can be translated on the device, even without a connection.',
            'Limitation / caveat': 'Opt-in; the default is a Google translator, and offline language coverage and quality were not checked.',
          },
          {
            Benefit: 'Your choice of backend',
            'What it means in real use': 'Google, Yandex, DeepL, ChatGPT, Ollama, LibreTranslate or your own module.',
            'Limitation / caveat': 'Local servers need setup; cloud choices send the text out.',
          },
          {
            Benefit: 'Free and open source',
            'What it means in real use': 'The website calls it free and the code is public.',
            'Limitation / caveat': 'The license files disagree and donations are requested.',
          },
          {
            Benefit: 'All-in-one translation',
            'What it means in real use': 'Pages, selections, typed text, subtitles, messages, speech and a dictionary in one extension.',
            'Limitation / caveat': 'No translation of text inside images, by design.',
          },
          {
            Benefit: 'Offline dictionary and history',
            'What it means in real use': 'Saved words stay available without a connection.',
            'Limitation / caveat': 'PromptQuorum found no sync feature described.',
          },
          {
            Benefit: 'Active development',
            'What it means in real use': 'Version 7.1.0 shipped on 7 August 2026.',
            'Limitation / caveat': 'It added telemetry, and the release notes say its Microsoft translator no longer works.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Linguist vs. Alternatives',
        content: [
          'These are the closest translation tools in the directory: an iPhone translator that runs models on the device and a tool for translating whole books and documents.',
        ],
        columns: [
          'App',
          'Platforms',
          'Price and license',
          'Role',
          'Key difference',
        ],
        rows: [
          {
            App: 'Linguist',
            Platforms: 'Chrome, Firefox',
            'Price and license': 'Free, open source',
            Role: 'Web page and text translation',
            'Key difference': 'Offline Bergamot built in; cloud by default',
          },
          {
            App: '[On-Device AI Translator](/power-local-llm/on-device-ai-translator-review)',
            Platforms: 'iPhone',
            'Price and license': 'Freemium, closed source',
            Role: 'Phone translation',
            'Key difference': 'Runs language models on the phone; no browser integration',
          },
          {
            App: '[TranslateBooksWithLLMs](/power-local-llm/translate-books-with-llms-review)',
            Platforms: 'Mac, Windows, Linux',
            'Price and license': 'Free, AGPL-3.0',
            Role: 'Book and document translation',
            'Key difference': 'Uses Ollama or cloud language models',
          },
        ],
        note: "Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project's own page before deciding.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Linguist',
        items: [
          '**Readers of foreign-language websites.** One hotkey or rule translates whole pages.',
          '**Privacy-minded readers who will change a setting.** Bergamot or a local server keeps text on your side, per the documentation.',
          '**Language learners and travelers.** The dictionary works offline and translations can be read aloud.',
          '**Self-hosters.** LibreTranslate or Ollama connect through custom translator modules.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Linguist',
        items: [
          '**Anyone who wants local processing out of the box.** A fresh install uses a Google translator.',
          '**Anyone who needs zero telemetry.** Version 7.1.0 added it, and no off switch was found in the notes.',
          '**People who need to translate text in images.** The website says this is not supported.',
          '**Users of other browsers.** Outside Chrome and Firefox it needs a manual developer-mode install.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Linguist work offline?',
            a: 'The website says the offline translator and the dictionary work without a connection, once you select Bergamot as the translation module. PromptQuorum did not test it offline.',
          },
          {
            q: 'Is my text sent to Google?',
            a: 'With the default translator, yes. With Bergamot or a local server, the documentation says the text stays on your side. Telemetry is a separate matter and is covered under privacy.',
          },
          {
            q: 'Is Linguist really free?',
            a: 'The website calls it free and open source and asks for donations; PromptQuorum found no paid plan.',
          },
          {
            q: 'Can I use Ollama or my own model?',
            a: 'Yes, through a custom translator module. The website names Ollama and LibreTranslate, and the maker keeps a list of translator bindings in the linguist-translators repository.',
          },
          {
            q: 'Who makes Linguist?',
            a: 'The code is in the GitHub organization translate-tools; the LICENSE file names Robert Vitonsky and the documentation footer names PrimeBits.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Linguist is a good fit if you read foreign-language sites in Chrome or Firefox and want a free, open-source translator where you decide whether the text goes to a cloud service, runs through Bergamot on your device or goes to a server you run. Version 7.1.0 is recent and the offline route is documented.',
          'The caveats are the default and the data: a fresh install uses Google, telemetry arrived in 7.1.0 next to a site that says it collects no user data, and the license files disagree. Switch the translation module before relying on it for private text.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Linguist website](https://linguister.io/) — features, FAQ and platforms.',
          '[Offline translation guide](https://linguister.io/docs/guides/OfflineTranslation) — Bergamot and LibreTranslate setup.',
          '[GitHub repository](https://github.com/translate-tools/linguist) — README, LICENSE file and source code.',
          '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — packages and the version 7.1.0 release notes.',
          '[Firefox Add-ons listing](https://addons.mozilla.org/addon/linguist-translator/) — listed version, permissions and license.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[On-Device AI Translator Review](/power-local-llm/on-device-ai-translator-review) — an iPhone translator that runs language models on the device.',
          '[TranslateBooksWithLLMs Review](/power-local-llm/translate-books-with-llms-review) — translating books and documents with Ollama or cloud models.',
          '[Sablate Review](/power-local-llm/sablate-review) — offline subtitles with Whisper and Argos translation on the computer.',
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
    heroImage: '/images/linguister-review-hero-de.webp',
    title: 'Linguist Rezension: Open-Source-Browserübersetzer mit Offline-Modus',
    seoTitle: 'Linguist Rezension: Browserübersetzer mit Offline-Modus',
    intro: 'Linguist (Website linguister.io) ist eine kostenlose Open-Source-Browsererweiterung für Chrome und Firefox, die ganze Seiten, markierten Text, Untertitel und Nachrichten übersetzt. Eine frische Installation schickt Text an einen Cloud-Übersetzer, doch die Erweiterung hat auch einen eingebauten Offline-Übersetzer und lässt sich an lokale Server wie LibreTranslate oder Ollama anbinden. Diese Rezension fasst zusammen, was Website, Dokumentation, Firefox-Eintrag und GitHub-Repository sagen, wo der lokale Teil beginnt und endet und was unklar bleibt. Es gab keinen praktischen Test.',
    metaDescription: 'Linguist Rezension: kostenlose Open-Source-Übersetzer-Erweiterung für Chrome und Firefox mit Offline-Modus, Cloud-Standard und Telemetrie. Nicht getestet.',
    twitterDescription: 'Linguist Rezension: kostenloser Open-Source-Seitenübersetzer für Chrome und Firefox mit optionalem Offline-Modus und Unterstützung für lokale Server. Datenschutz, Grenzen, Alternativen.',
    audience: 'Chrome- und Firefox-Nutzer, die Webseiten und Texte übersetzen möchten, ohne standardmäßig auf einen Cloud-Dienst zu setzen — behandelt, was lokal läuft, Einrichtung, Datenschutz, Grenzen und Alternativen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Linguist review',
    targetKeywords: [
      'linguist rezension',
      'linguister',
      'offline browser übersetzer',
      'open-source übersetzer erweiterung',
      'bergamot browser übersetzung',
      'privater seitenübersetzer chrome firefox',
      'libretranslate browser erweiterung',
    ],
    current_hardware_mentioned: [
      'Chrome',
      'Firefox',
      'NVIDIA-GPU (optional, für einen lokalen LibreTranslate-Server)',
    ],
    leadAnswerBlock: '**Linguist ist eine kostenlose Open-Source-Übersetzer-Erweiterung für Chrome und Firefox, die nur dann lokal arbeitet, wenn Sie es auswählen:** Der eingebaute Bergamot-Übersetzer läuft auf Ihrem Gerät, der werksseitige Übersetzer ist dagegen ein kostenloser Google-Dienst. Sie eignet sich für Leser fremdsprachiger Seiten, die bereit sind, eine Einstellung zu ändern.',
    quickAnswerTop: {
      de: {
        question: 'Übersetzt Linguist auf meinem Gerät?',
        answer: 'Erst nach dem Umschalten. Laut Dokumentation übersetzt der eingebaute Offline-Übersetzer namens Bergamot auf dem Gerät und wird auf der Einstellungsseite als Übersetzungsmodul gewählt. Die Versionshinweise zu 7.1.0 nennen als Standard einen kostenlosen Google-Übersetzer, eine frische Installation sendet den Text also an Google.',
        bullets: [
          'Übersetzt ganze Seiten per Tastenkürzel oder Regel, markierten Text, getippten Text, Untertitel bei Netflix und in Videoanrufen sowie private Nachrichten.',
          'Liest Original und Übersetzung vor und führt einen Verlauf sowie ein persönliches Wörterbuch, das laut Website offline funktioniert.',
          'Eigene Übersetzer binden Cloud-Dienste wie ChatGPT, DeepL, DeepSeek und Gemini oder lokale wie Ollama und LibreTranslate an.',
          'Bildübersetzung gibt es nicht, auf ausdrücklichen Wunsch der Entwickler.',
          'Chrome und Firefox aus den Stores; andere Browser per manueller Installation aus den GitHub Releases.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: 'Kurzantwort',
        anchor: 'quick-answer',
      },
      {
        label: 'Linguist herunterladen',
        anchor: 'get-it',
      },
      {
        label: 'Linguist im Überblick',
        anchor: 'at-a-glance',
      },
      {
        label: 'Was Linguist ist',
        anchor: 'what-is-linguist',
      },
      {
        label: 'Erste Schritte',
        anchor: 'how-to-get-started',
      },
      {
        label: 'Funktionen',
        anchor: 'features',
      },
      {
        label: 'Übersetzer und Offline-Modus',
        anchor: 'translators-offline',
      },
      {
        label: 'Datenschutz, Lizenz und Kosten',
        anchor: 'privacy',
      },
      {
        label: 'Abwägungen: Vorteile und Einschränkungen',
        anchor: 'tradeoffs',
      },
      {
        label: 'Linguist im Vergleich zu Alternativen',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Für wen Linguist geeignet ist',
        anchor: 'who-should-use',
      },
      {
        label: 'Für wen Linguist nicht geeignet ist',
        anchor: 'who-should-not-use',
      },
      {
        label: 'FAQ',
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
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Linguist ist eine kostenlose Open-Source-Browsererweiterung, die Seiten und Text standardmäßig in der Cloud übersetzt und auf Ihrem Gerät, wenn Sie den eingebauten Offline-Übersetzer wählen.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich eine Übersetzen-Taste mit Drehregler vor: Eine Stellung schickt die Wörter an Google, eine andere behält sie auf Ihrem Computer oder auf einem Server, den Sie selbst betreiben.',
          },
        ],
        items: [
          'Lokale Aussage: Der Bergamot-Offline-Übersetzer ist eingebaut und optional; lokale Server werden über eigene Übersetzermodule angebunden; jede Cloud-Wahl schickt Text nach außen.',
          'Lizenz und Hersteller: Open Source, entwickelt von Robert Vitonsky laut LICENSE-Datei, Code in der GitHub-Organisation translate-tools.',
          'Preis: laut Website kostenlos, mit Bitte um Spenden.',
          'Pflege: Version 7.1.0 erschien am 7. August 2026 und der Hauptzweig wurde zuletzt am 4. September 2026 aktualisiert, das Projekt wird also weiterentwickelt.',
          'Lücken: keine Bildübersetzung, Telemetrie seit 7.1.0, obwohl die Website angibt, keine Nutzerdaten zu erheben, und ein Firefox-Eintrag mit älterer Version.',
        ],
      },
      getItLinguist: {
        id: 'get-it',
        title: 'Linguist herunterladen',
        content: [
          '**Linguist wird über die Browser-Stores installiert, ein Terminal ist nicht nötig.** Wählen Sie den Store Ihres Browsers oder laden Sie für andere Browser ein Paket von der GitHub-Release-Seite herunter.',
        ],
        columns: [
          'Plattform',
          'Bezugsquelle',
        ],
        rows: [
          {
            Plattform: 'Chrome',
            Bezugsquelle: '[Für Chrome installieren](https://chrome.google.com/webstore/detail/gbefmodhlophhakmoecijeppjblibmie) — Link zum Chrome Web Store von der offiziellen Website',
          },
          {
            Plattform: 'Firefox',
            Bezugsquelle: '[Für Firefox installieren](https://addons.mozilla.org/addon/linguist-translator/) — Firefox-Add-ons',
          },
          {
            Plattform: 'Andere Browser',
            Bezugsquelle: '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — ZIP-, .crx- und .xpi-Pakete zur manuellen Installation',
          },
          {
            Plattform: 'Offline-Einrichtung',
            Bezugsquelle: '[Anleitung zur Offline-Übersetzung](https://linguister.io/docs/guides/OfflineTranslation) — Bergamot ist eingebaut; LibreTranslate läuft über Docker',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[linguister.io](https://linguister.io/)',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: '[github.com/translate-tools/linguist](https://github.com/translate-tools/linguist) — Open Source',
          },
        ],
        note: 'PromptQuorum fand auf der Website keine eigene Datenschutzerklärung. Der Firefox-Eintrag zeigte bei der Prüfung am 13. November 2026 die Version 7.0.5, ein Store-Stand kann also hinter dem GitHub-Release zurückliegen. Unter Android beschreibt die README Firefox Nightly mit einer eigenen Add-on-Sammlung.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Linguist im Überblick',
        columns: [
          'Merkmal',
          'Linguist',
        ],
        rows: [
          {
            Merkmal: 'Plattform',
            Linguist: 'Erweiterung für Chrome und Firefox; andere Browser per manueller Installation',
          },
          {
            Merkmal: 'Preis',
            Linguist: 'Kostenlos; Spenden erbeten',
          },
          {
            Merkmal: 'Lizenz',
            Linguist: 'Open Source; GPL-3.0 laut package.json, BSD-3-Clause laut LICENSE-Datei',
          },
          {
            Merkmal: 'Ausführung',
            Linguist: 'Standardmäßig Cloud-Übersetzer; optional Bergamot offline auf dem Gerät; optional lokale Server',
          },
          {
            Merkmal: 'Sprachen',
            Linguist: '130 laut README; mehr als 100 laut Website (nicht überprüft)',
          },
          {
            Merkmal: 'Offline-Nutzung',
            Linguist: 'Offline-Übersetzer und Wörterbuch, laut Website',
          },
          {
            Merkmal: 'Bildübersetzung',
            Linguist: 'Nicht vorhanden, laut Website',
          },
          {
            Merkmal: 'Telemetrie',
            Linguist: 'Seit 7.1.0; laut Hersteller keine personenbezogenen Daten oder Texte',
          },
        ],
        note: 'Eine fehlende Angabe auf der Website bedeutet unbekannt, nicht nicht unterstützt.',
      },
      whatIsLinguist: {
        id: 'what-is-linguist',
        title: 'Was Linguist ist',
        content: [
          '**Linguist ist eine Browsererweiterung, die die Übersetzen-Schaltfläche des Browsers durch ein konfigurierbares Übersetzungssystem ersetzt.** Sie übersetzt ganze Seiten per Tastenkürzel oder automatischen Regeln, markierten Text, getippten Text, Untertitel und private Nachrichten, liest Übersetzungen vor und speichert Einträge in einem persönlichen Wörterbuch.',
          'Das Produkt heißt Linguist, seine Website ist linguister.io und der Code liegt in der GitHub-Organisation translate-tools; die LICENSE-Datei nennt Robert Vitonsky als Inhaber des Urheberrechts, die Dokumentation nennt im Fußbereich PrimeBits. Auch andere Werkzeuge heißen Linguist; diese Rezension behandelt nur linguister.io.',
          'Die Rezension stützt sich auf Website, Dokumentation, Firefox-Eintrag, GitHub-Repository und Versionshinweise. Übersetzungsqualität, Geschwindigkeit und Stabilität wurden nicht getestet und werden hier nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus einer Installation und einer Einstellung.** Die Schritte folgen der Website und der Offline-Anleitung.',
        ],
        numberedItems: [
          {
            title: 'Erweiterung installieren',
            whyItMatters: 'Fügen Sie sie aus dem Chrome Web Store oder den Firefox-Add-ons hinzu oder installieren Sie ein Paket aus den GitHub Releases im Entwicklermodus.',
          },
          {
            title: 'Einstellungen öffnen',
            whyItMatters: 'Wählen Sie das Übersetzungsmodul. Eine frische Installation nutzt laut Versionshinweisen zu 7.1.0 einen kostenlosen Google-Übersetzer; Bergamot und eigene Übersetzer wählen Sie hier.',
          },
          {
            title: 'Übersetzen',
            whyItMatters: 'Nutzen Sie das Tastenkürzel für eine Seite, markieren Sie Text und drücken Sie die Übersetzen-Schaltfläche oder tippen Sie im Popup der Symbolleiste; fahren Sie über übersetzten Text, um das Original zu sehen.',
          },
          {
            title: 'Optional: lokalen Server betreiben',
            whyItMatters: 'Für LibreTranslate folgen Sie der Anleitung: Docker-Container starten, auf den Modell-Download warten und dann den benutzerdefinierten Übersetzer LibreTranslate in den Einstellungen hinzufügen.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Funktionsumfang dreht sich um das Übersetzen dessen, was Sie im Browser lesen.** Alles Folgende stammt aus Website, Dokumentation und README.',
        ],
        items: [
          '**Seitenübersetzung.** Ein Tastenkürzel oder automatische Regeln nach Seitensprache oder Domain; die Erweiterung ändert nur Textknoten, das Layout bleibt also erhalten, und sie funktioniert auch auf Seiten hinter Anmeldungen.',
          '**Markierter und getippter Text.** Bei markiertem Text erscheint eine Übersetzen-Schaltfläche, das Popup nimmt getippten Text entgegen.',
          '**Untertitel und Nachrichten.** Untertitel bei Netflix und in Videoanrufen sowie private Nachrichten; die Website erwähnt außerdem Echtzeitübersetzung in Zoom, Google Meet und Microsoft Teams.',
          '**Sprache.** Original und Übersetzung können vorgelesen werden; die Dokumentation beschreibt eigene Text-to-Speech-Module.',
          '**Verlauf und Wörterbuch.** Jede Übersetzung landet in einem durchsuchbaren Verlauf, wichtige Einträge kommen in ein persönliches Wörterbuch.',
          '**Eingebaute Dienste.** Die Website nennt Google, Yandex und Microsoft; laut Versionshinweisen zu 7.1.0 funktioniert der Microsoft-Übersetzer nicht mehr.',
        ],
      },
      translators: {
        id: 'translators-offline',
        title: 'Übersetzer und Offline-Modus',
        content: [
          '**Der Offline-Übersetzer ist Bergamot und seit Version 5.0 eingebaut.** Laut Dokumentation wählen Sie ihn auf der Einstellungsseite als Übersetzungsmodul, und laut Website erfolgt die Übersetzung dann auf dem Gerät und funktioniert ohne Verbindung. Die README nennt das Projekt Bergamot von browsermt. PromptQuorum hat nicht geprüft, welche Sprachpaare er abdeckt und wie seine Qualität im Vergleich zu Cloud-Diensten ausfällt.',
          '**Lokale Server sind der zweite Weg.** Ein benutzerdefiniertes Übersetzermodul verbindet Linguist mit jedem Dienst, den Sie selbst bereitstellen. Die Anleitung zeigt LibreTranslate in Docker, wobei die Modelle beim ersten Start geladen werden und eine NVIDIA-GPU optional ist, und die Website nennt Ollama. Cloud-Dienste wie ChatGPT, DeepL, DeepSeek und Gemini werden auf dieselbe Weise angebunden und erhalten den Text.',
          '**Standardverhalten.** Laut Versionshinweisen zu 7.1.0 ist der Standard ein kostenloser Google-Übersetzer mit automatischem Wechsel zu einem anderen Übersetzer, wenn der bevorzugte ausfällt; für Nutzer von Bergamot oder eines eigenen Dienstes ist dieser Wechsel laut Hinweisen nicht aktiviert. Für die Erweiterung selbst ist keine RAM- oder GPU-Anforderung angegeben.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Was Ihren Rechner verlässt, hängt vom gewählten Übersetzer ab.** Bei einem Cloud-Übersetzer, auch dem Standard, geht der Text der Seite oder Auswahl an diesen Anbieter. Bei Bergamot oder einem eigenen Server bleibt der Text laut Website auf Ihrem Gerät oder in Ihrem Netzwerk.',
          '**Telemetrie kam mit Version 7.1.0.** Laut Versionshinweisen erfasst sie grundlegende Interaktionsereignisse und Übersetzerfehler und „erfasst keine personenbezogenen Daten oder Texte“. Der Quellcode im Repository sendet Ereignisnamen wie „Seitenübersetzung geändert“ oder „Einstellungen aktualisiert“, eine zufällige, in der Erweiterung gespeicherte ID, die Browsersprache und den User-Agent an einen Server unter events.vitonsky.net. Website und README sagen weiterhin, die Erweiterung erhebe keine Nutzerdaten; beide Aussagen sind nicht in Einklang gebracht. PromptQuorum fand in den Versionshinweisen keinen Schalter zum Abschalten und suchte in der App nicht danach.',
          '**Berechtigungen, Lizenz und Kosten.** Der Firefox-Eintrag für Version 7.0.5 zeigt Zugriff auf alle Websites, den die Seitenübersetzung braucht, sowie Speicher, Tabs, Kontextmenüs und Skripte. Die LICENSE-Datei im Repository ist BSD-3-Clause, während package.json und der Firefox-Eintrag GPL-3.0 nennen; der Unterschied ist ungeklärt. Die Erweiterung ist kostenlos, die Website bittet um Spenden.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile und Einschränkungen',
        columns: [
          'Vorteil',
          'Was das im Alltag bedeutet',
          'Einschränkung / Hinweis',
        ],
        rows: [
          {
            Vorteil: 'Eingebauter Offline-Übersetzer',
            'Was das im Alltag bedeutet': 'Seiten und Text lassen sich auf dem Gerät übersetzen, auch ohne Verbindung.',
            'Einschränkung / Hinweis': 'Optional; der Standard ist ein Google-Übersetzer, Sprachabdeckung und Qualität offline wurden nicht geprüft.',
          },
          {
            Vorteil: 'Freie Wahl des Übersetzungsdienstes',
            'Was das im Alltag bedeutet': 'Google, Yandex, DeepL, ChatGPT, Ollama, LibreTranslate oder ein eigenes Modul.',
            'Einschränkung / Hinweis': 'Lokale Server brauchen Einrichtung; Cloud-Wahlen schicken den Text nach außen.',
          },
          {
            Vorteil: 'Kostenlos und Open Source',
            'Was das im Alltag bedeutet': 'Die Website nennt es kostenlos und der Code ist öffentlich.',
            'Einschränkung / Hinweis': 'Die Lizenzdateien widersprechen sich und es werden Spenden erbeten.',
          },
          {
            Vorteil: 'Alles in einem',
            'Was das im Alltag bedeutet': 'Seiten, Auswahl, getippter Text, Untertitel, Nachrichten, Sprache und Wörterbuch in einer Erweiterung.',
            'Einschränkung / Hinweis': 'Keine Übersetzung von Text in Bildern, absichtlich.',
          },
          {
            Vorteil: 'Offline-Wörterbuch und Verlauf',
            'Was das im Alltag bedeutet': 'Gespeicherte Wörter bleiben ohne Verbindung verfügbar.',
            'Einschränkung / Hinweis': 'PromptQuorum fand keine beschriebene Synchronisierung.',
          },
          {
            Vorteil: 'Aktive Entwicklung',
            'Was das im Alltag bedeutet': 'Version 7.1.0 erschien am 7. August 2026.',
            'Einschränkung / Hinweis': 'Sie brachte Telemetrie, und laut Versionshinweisen funktioniert der Microsoft-Übersetzer darin nicht mehr.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Linguist im Vergleich zu Alternativen',
        content: [
          'Das sind die nächsten Übersetzungswerkzeuge im Verzeichnis: ein iPhone-Übersetzer, der Modelle auf dem Gerät ausführt, und ein Werkzeug zum Übersetzen ganzer Bücher und Dokumente.',
        ],
        columns: [
          'App',
          'Plattformen',
          'Preis und Lizenz',
          'Rolle',
          'Wichtigster Unterschied',
        ],
        rows: [
          {
            App: 'Linguist',
            Plattformen: 'Chrome, Firefox',
            'Preis und Lizenz': 'Kostenlos, Open Source',
            Rolle: 'Übersetzung von Webseiten und Text',
            'Wichtigster Unterschied': 'Offline-Bergamot eingebaut; standardmäßig Cloud',
          },
          {
            App: '[On-Device AI Translator](/de/power-local-llm/on-device-ai-translator-review)',
            Plattformen: 'iPhone',
            'Preis und Lizenz': 'Freemium, Closed Source',
            Rolle: 'Übersetzung auf dem Telefon',
            'Wichtigster Unterschied': 'Führt Sprachmodelle auf dem Telefon aus; keine Browser-Integration',
          },
          {
            App: '[TranslateBooksWithLLMs](/de/power-local-llm/translate-books-with-llms-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis und Lizenz': 'Kostenlos, AGPL-3.0',
            Rolle: 'Übersetzung von Büchern und Dokumenten',
            'Wichtigster Unterschied': 'Nutzt Ollama oder Cloud-Sprachmodelle',
          },
        ],
        note: 'Angaben zu Plattformen, Preisen und Funktionen von Drittanbieter-Apps ändern sich häufig. Prüfen Sie die aktuellen Details auf der Seite des jeweiligen Projekts, bevor Sie entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen Linguist geeignet ist',
        items: [
          '**Leser fremdsprachiger Websites.** Ein Tastenkürzel oder eine Regel übersetzt ganze Seiten.',
          '**Datenschutzbewusste Leser, die eine Einstellung ändern.** Bergamot oder ein lokaler Server hält den Text laut Dokumentation bei Ihnen.',
          '**Sprachlernende und Reisende.** Das Wörterbuch funktioniert offline und Übersetzungen lassen sich vorlesen.',
          '**Selbst-Hoster.** LibreTranslate oder Ollama werden über eigene Übersetzermodule angebunden.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen Linguist nicht geeignet ist',
        items: [
          '**Alle, die lokale Verarbeitung ab Werk wollen.** Eine frische Installation nutzt einen Google-Übersetzer.',
          '**Alle, die keinerlei Telemetrie wollen.** Version 7.1.0 brachte sie, und in den Hinweisen fand sich kein Schalter zum Abschalten.',
          '**Alle, die Text in Bildern übersetzen müssen.** Die Website sagt, das werde nicht unterstützt.',
          '**Nutzer anderer Browser.** Außerhalb von Chrome und Firefox ist eine manuelle Installation im Entwicklermodus nötig.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert Linguist offline?',
            a: 'Laut Website funktionieren der Offline-Übersetzer und das Wörterbuch ohne Verbindung, sobald Sie Bergamot als Übersetzungsmodul wählen. PromptQuorum hat es nicht offline getestet.',
          },
          {
            q: 'Wird mein Text an Google gesendet?',
            a: 'Beim Standardübersetzer ja. Bei Bergamot oder einem lokalen Server bleibt der Text laut Dokumentation bei Ihnen. Telemetrie ist eine eigene Frage und wird unter Datenschutz behandelt.',
          },
          {
            q: 'Ist Linguist wirklich kostenlos?',
            a: 'Die Website nennt es kostenlos und Open Source und bittet um Spenden; PromptQuorum fand keinen kostenpflichtigen Tarif.',
          },
          {
            q: 'Kann ich Ollama oder ein eigenes Modell nutzen?',
            a: 'Ja, über ein benutzerdefiniertes Übersetzermodul. Die Website nennt Ollama und LibreTranslate, und der Hersteller pflegt im Repository linguist-translators eine Liste von Übersetzer-Anbindungen.',
          },
          {
            q: 'Wer entwickelt Linguist?',
            a: 'Der Code liegt in der GitHub-Organisation translate-tools; die LICENSE-Datei nennt Robert Vitonsky und die Dokumentation im Fußbereich PrimeBits.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Linguist passt, wenn Sie fremdsprachige Seiten in Chrome oder Firefox lesen und einen kostenlosen Open-Source-Übersetzer möchten, bei dem Sie entscheiden, ob der Text an einen Cloud-Dienst geht, über Bergamot auf Ihrem Gerät läuft oder an einen Server geht, den Sie selbst betreiben. Version 7.1.0 ist aktuell und der Offline-Weg ist dokumentiert.',
          'Die Vorbehalte betreffen Standard und Daten: Eine frische Installation nutzt Google, Telemetrie kam mit 7.1.0 neben einer Website, die keine Erhebung von Nutzerdaten angibt, und die Lizenzdateien widersprechen sich. Stellen Sie das Übersetzungsmodul um, bevor Sie sich bei privatem Text darauf verlassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Linguist](https://linguister.io/) — Funktionen, FAQ und Plattformen.',
          '[Anleitung zur Offline-Übersetzung](https://linguister.io/docs/guides/OfflineTranslation) — Einrichtung von Bergamot und LibreTranslate.',
          '[GitHub-Repository](https://github.com/translate-tools/linguist) — README, LICENSE-Datei und Quellcode.',
          '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — Pakete und die Versionshinweise zu 7.1.0.',
          '[Eintrag bei Firefox-Add-ons](https://addons.mozilla.org/addon/linguist-translator/) — gelistete Version, Berechtigungen und Lizenz.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[On-Device AI Translator Rezension](/de/power-local-llm/on-device-ai-translator-review) — ein iPhone-Übersetzer, der Sprachmodelle auf dem Gerät ausführt.',
          '[TranslateBooksWithLLMs Rezension](/de/power-local-llm/translate-books-with-llms-review) — Bücher und Dokumente mit Ollama oder Cloud-Modellen übersetzen.',
          '[Sablate Rezension](/de/power-local-llm/sablate-review) — Offline-Untertitel mit Whisper und Argos-Übersetzung auf dem Computer.',
          '[Das vollständige Local LLM Software Directory](/de/directory) — ein breiteres Verzeichnis lokaler KI-Werkzeuge über alle Plattformen.',
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
    heroImage: '/images/linguister-review-hero-fr.webp',
    title: 'Test de Linguist : traducteur de navigateur open source avec mode hors ligne',
    seoTitle: 'Test de Linguist : traducteur web avec mode hors ligne',
    intro: "Linguist (site linguister.io) est une extension de navigateur gratuite et open source pour Chrome et Firefox qui traduit des pages entières, du texte sélectionné, des sous-titres et des messages. Une installation neuve envoie le texte à un traducteur cloud, mais l'extension intègre aussi un traducteur hors ligne et peut se connecter à des serveurs locaux comme LibreTranslate ou Ollama. Ce test résume ce que disent le site, la documentation, la fiche Firefox et le dépôt GitHub, où commence et où s'arrête la partie locale, et ce qui reste flou. Il n'a donné lieu à aucun test pratique.",
    metaDescription: 'Test de Linguist : extension de traduction gratuite et open source pour Chrome et Firefox, mode hors ligne, cloud par défaut, télémétrie. Non testée.',
    twitterDescription: 'Test de Linguist : traducteur de pages gratuit et open source pour Chrome et Firefox avec mode hors ligne facultatif et serveurs locaux. Confidentialité, limites, alternatives.',
    audience: "Utilisateurs de Chrome et Firefox qui veulent traduire des pages web et du texte sans passer par défaut par un service cloud — couvre ce qui tourne en local, l'installation, la confidentialité, les limites et les alternatives.",
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Linguist review',
    targetKeywords: [
      'test linguist',
      'linguister',
      'traducteur de navigateur hors ligne',
      'extension de traduction open source',
      'traduction navigateur bergamot',
      'traducteur de pages privé chrome firefox',
      'extension navigateur libretranslate',
    ],
    current_hardware_mentioned: [
      'Chrome',
      'Firefox',
      'GPU NVIDIA (facultatif, pour un serveur LibreTranslate local)',
    ],
    leadAnswerBlock: "**Linguist est une extension de traduction gratuite et open source pour Chrome et Firefox qui n'est locale que si vous le choisissez :** le traducteur Bergamot intégré tourne sur votre appareil, alors que le traducteur actif dès l'installation est un service Google gratuit. Elle convient aux lecteurs de sites en langue étrangère prêts à changer un réglage.",
    quickAnswerTop: {
      fr: {
        question: 'Linguist traduit-il sur mon appareil ?',
        answer: "Seulement après activation. Selon la documentation, le traducteur hors ligne intégré, appelé Bergamot, traduit sur l'appareil et se choisit comme module de traduction dans la page des préférences. Les notes de la version 7.1.0 indiquent que le traducteur par défaut est un traducteur Google gratuit : une installation neuve envoie donc le texte à Google.",
        bullets: [
          'Traduit des pages entières par raccourci ou règle, du texte sélectionné, du texte saisi, les sous-titres sur Netflix et en appel vidéo, et les messages privés.',
          "Lit à voix haute le texte d'origine et sa traduction, et tient un historique ainsi qu'un dictionnaire personnel qui, selon le site, fonctionne hors ligne.",
          'Des traducteurs personnalisés relient des services cloud comme ChatGPT, DeepL, DeepSeek et Gemini, ou des services locaux comme Ollama et LibreTranslate.',
          "La traduction d'images n'est pas proposée, par choix des auteurs.",
          'Chrome et Firefox depuis les boutiques ; les autres navigateurs par installation manuelle depuis les GitHub Releases.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: 'Réponse rapide',
        anchor: 'quick-answer',
      },
      {
        label: 'Obtenir Linguist',
        anchor: 'get-it',
      },
      {
        label: "Linguist en un coup d'œil",
        anchor: 'at-a-glance',
      },
      {
        label: "Ce qu'est Linguist",
        anchor: 'what-is-linguist',
      },
      {
        label: 'Premiers pas',
        anchor: 'how-to-get-started',
      },
      {
        label: 'Fonctionnalités',
        anchor: 'features',
      },
      {
        label: 'Traducteurs et mode hors ligne',
        anchor: 'translators-offline',
      },
      {
        label: 'Confidentialité, licence et coût',
        anchor: 'privacy',
      },
      {
        label: 'Compromis : avantages et limites',
        anchor: 'tradeoffs',
      },
      {
        label: 'Linguist face aux alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Pour qui Linguist est adaptée',
        anchor: 'who-should-use',
      },
      {
        label: "Pour qui Linguist n'est pas adaptée",
        anchor: 'who-should-not-use',
      },
      {
        label: 'FAQ',
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
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Linguist est une extension de navigateur gratuite et open source qui traduit pages et texte dans le cloud par défaut, et sur votre appareil si vous choisissez son traducteur hors ligne intégré.',
          },
          {
            type: 'plain-terms',
            text: 'Imaginez un bouton Traduire avec un sélecteur : une position envoie les mots à Google, une autre les garde sur votre ordinateur ou sur un serveur que vous faites tourner vous-même.',
          },
        ],
        items: [
          "Affirmation locale : le traducteur hors ligne Bergamot est intégré et facultatif ; les serveurs locaux se branchent par des modules de traduction personnalisés ; tout choix cloud envoie le texte à l'extérieur.",
          "Licence et auteur : open source, développé par Robert Vitonsky selon le fichier LICENSE, code dans l'organisation GitHub translate-tools.",
          'Prix : gratuit selon le site, qui sollicite des dons.',
          'Maintenance : la version 7.1.0 est sortie le 7 août 2026 et la branche principale a été mise à jour le 4 septembre 2026, le projet reste donc développé.',
          "Lacunes : pas de traduction d'images, télémétrie ajoutée en 7.1.0 alors que le site dit ne collecter aucune donnée d'utilisateur, et une fiche Firefox qui affichait une version plus ancienne.",
        ],
      },
      getItLinguist: {
        id: 'get-it',
        title: 'Obtenir Linguist',
        content: [
          "**Linguist s'installe depuis les boutiques de navigateurs, aucun terminal n'est nécessaire.** Choisissez la boutique de votre navigateur, ou téléchargez un paquet depuis la page des versions GitHub pour les autres navigateurs.",
        ],
        columns: [
          'Plateforme',
          'Où la trouver',
        ],
        rows: [
          {
            Plateforme: 'Chrome',
            'Où la trouver': '[Installer pour Chrome](https://chrome.google.com/webstore/detail/gbefmodhlophhakmoecijeppjblibmie) — lien Chrome Web Store depuis le site officiel',
          },
          {
            Plateforme: 'Firefox',
            'Où la trouver': '[Installer pour Firefox](https://addons.mozilla.org/addon/linguist-translator/) — modules complémentaires Firefox',
          },
          {
            Plateforme: 'Autres navigateurs',
            'Où la trouver': '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — paquets zip, .crx et .xpi à installer manuellement',
          },
          {
            Plateforme: 'Configuration hors ligne',
            'Où la trouver': '[Guide de traduction hors ligne](https://linguister.io/docs/guides/OfflineTranslation) — Bergamot est intégré ; LibreTranslate tourne via Docker',
          },
          {
            Plateforme: 'Site web',
            'Où la trouver': '[linguister.io](https://linguister.io/)',
          },
          {
            Plateforme: 'Code source',
            'Où la trouver': '[github.com/translate-tools/linguist](https://github.com/translate-tools/linguist) — open source',
          },
        ],
        note: "PromptQuorum n'a trouvé aucune page de politique de confidentialité distincte sur le site. La fiche Firefox affichait la version 7.0.5 lors de la vérification du 13 novembre 2026 : la version d'une boutique peut donc être en retard sur la version GitHub. Sur Android, le README décrit Firefox Nightly avec une collection de modules personnalisée.",
      },
      atAGlance: {
        id: 'at-a-glance',
        title: "Linguist en un coup d'œil",
        columns: [
          'Attribut',
          'Linguist',
        ],
        rows: [
          {
            Attribut: 'Plateforme',
            Linguist: 'Extension Chrome et Firefox ; autres navigateurs par installation manuelle',
          },
          {
            Attribut: 'Prix',
            Linguist: 'Gratuit ; dons sollicités',
          },
          {
            Attribut: 'Licence',
            Linguist: 'Open source ; GPL-3.0 selon package.json, BSD-3-Clause selon le fichier LICENSE',
          },
          {
            Attribut: 'Exécution',
            Linguist: "Traducteurs cloud par défaut ; Bergamot hors ligne sur l'appareil en option ; serveurs locaux facultatifs",
          },
          {
            Attribut: 'Langues',
            Linguist: '130 selon le README ; plus de 100 selon le site (non vérifié)',
          },
          {
            Attribut: 'Usage hors ligne',
            Linguist: 'Traducteur hors ligne et dictionnaire, selon le site',
          },
          {
            Attribut: "Traduction d'images",
            Linguist: 'Non proposée, selon le site',
          },
          {
            Attribut: 'Télémétrie',
            Linguist: "Ajoutée en 7.1.0 ; selon l'auteur, ni données personnelles ni textes",
          },
        ],
        note: 'Une information absente du site signifie inconnue, pas non prise en charge.',
      },
      whatIsLinguist: {
        id: 'what-is-linguist',
        title: "Ce qu'est Linguist",
        content: [
          '**Linguist est une extension de navigateur qui remplace le bouton de traduction du navigateur par un système de traduction configurable.** Elle traduit des pages entières par raccourci ou règles automatiques, du texte sélectionné, du texte saisi, des sous-titres et des messages privés, lit les traductions à voix haute et enregistre des entrées dans un dictionnaire personnel.',
          "Le produit s'appelle Linguist, son site est linguister.io et le code se trouve dans l'organisation GitHub translate-tools ; le fichier LICENSE nomme Robert Vitonsky comme titulaire des droits et le pied de page de la documentation nomme PrimeBits. D'autres outils portent le nom Linguist ; ce test ne couvre que linguister.io.",
          "Le test s'appuie sur le site, la documentation, la fiche Firefox, le dépôt GitHub et les notes de version. La qualité de traduction, la vitesse et la stabilité n'ont pas été testées et ne sont pas notées ici.",
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          '**La mise en route se résume à une installation et un réglage.** Les étapes suivent le site et le guide hors ligne.',
        ],
        numberedItems: [
          {
            title: "Installer l'extension",
            whyItMatters: 'Ajoutez-la depuis le Chrome Web Store ou les modules Firefox, ou installez un paquet des GitHub Releases en mode développeur.',
          },
          {
            title: 'Ouvrir les préférences',
            whyItMatters: 'Choisissez le module de traduction. Une installation neuve utilise un traducteur Google gratuit, selon les notes de la version 7.1.0 ; Bergamot et les traducteurs personnalisés se sélectionnent ici.',
          },
          {
            title: 'Traduire',
            whyItMatters: "Utilisez le raccourci pour une page, sélectionnez du texte et appuyez sur le bouton de traduction, ou saisissez dans la fenêtre de la barre d'outils ; survolez le texte traduit pour voir l'original.",
          },
          {
            title: 'Facultatif : lancer un serveur local',
            whyItMatters: 'Pour LibreTranslate, suivez le guide : démarrez le conteneur Docker, attendez le téléchargement des modèles, puis ajoutez le traducteur personnalisé LibreTranslate dans les réglages.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Les fonctions tournent autour de la traduction de ce que vous lisez dans le navigateur.** Tout ce qui suit provient du site, de la documentation et du README.',
        ],
        items: [
          "**Traduction de pages.** Un raccourci ou des règles automatiques selon la langue de la page ou le domaine ; l'extension ne modifie que les nœuds de texte, la mise en page reste donc intacte, et elle fonctionne aussi sur les pages protégées par connexion.",
          '**Texte sélectionné et saisi.** Un bouton de traduction apparaît sur le texte sélectionné, et la fenêtre accepte du texte saisi.',
          '**Sous-titres et messages.** Sous-titres sur Netflix et en appel vidéo, et messages privés ; le site mentionne aussi la traduction en temps réel dans Zoom, Google Meet et Microsoft Teams.',
          "**Voix.** Le texte d'origine et sa traduction peuvent être lus à voix haute ; la documentation décrit des modules de synthèse vocale personnalisés.",
          '**Historique et dictionnaire.** Chaque traduction est enregistrée dans un historique consultable, et les entrées importantes vont dans un dictionnaire personnel.',
          '**Services intégrés.** Le site cite Google, Yandex et Microsoft ; selon les notes de la version 7.1.0, le traducteur Microsoft ne fonctionne plus.',
        ],
      },
      translators: {
        id: 'translators-offline',
        title: 'Traducteurs et mode hors ligne',
        content: [
          "**Le traducteur hors ligne est Bergamot, intégré depuis la version 5.0.** Selon la documentation, vous le choisissez comme module de traduction dans la page des préférences, et selon le site la traduction se fait alors sur l'appareil et fonctionne sans connexion. Le README cite le projet Bergamot de browsermt. PromptQuorum n'a pas vérifié quelles paires de langues il couvre ni comment sa qualité se compare à celle des services cloud.",
          "**Les serveurs locaux sont la seconde voie.** Un module de traduction personnalisé relie Linguist à n'importe quel service que vous déployez. Le guide montre LibreTranslate sous Docker, où les modèles se téléchargent au premier démarrage et où un GPU NVIDIA est facultatif, et le site cite Ollama. Des services cloud comme ChatGPT, DeepL, DeepSeek et Gemini se branchent de la même façon et reçoivent le texte.",
          "**Comportement par défaut.** Selon les notes de la version 7.1.0, le traducteur par défaut est un traducteur Google gratuit avec bascule automatique vers un autre traducteur quand le préféré est en panne ; les notes précisent que cette bascule n'est pas activée pour les utilisateurs de Bergamot ou d'un service personnalisé. Aucune exigence de RAM ou de GPU n'est indiquée pour l'extension elle-même.",
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          '**Ce qui quitte votre machine dépend du traducteur choisi.** Avec un traducteur cloud, y compris celui par défaut, le texte de la page ou de la sélection part chez ce fournisseur. Avec Bergamot ou un serveur que vous gérez, le site indique que le texte reste sur votre appareil ou votre réseau.',
          "**La télémétrie est arrivée avec la version 7.1.0.** Selon les notes de version, elle recueille des événements d'interaction de base et les erreurs de traducteur et « ne collecte aucune donnée personnelle ni aucun texte ». Le code source du dépôt envoie des noms d'événements comme page translation changed ou settings updated, un identifiant aléatoire stocké dans l'extension, la langue du navigateur et l'agent utilisateur à un serveur à l'adresse events.vitonsky.net. Le site et le README affirment toujours que l'extension ne collecte aucune donnée d'utilisateur ; ces deux affirmations ne sont pas conciliées. PromptQuorum n'a trouvé aucun interrupteur dans les notes de version et n'en a pas cherché dans l'application.",
          "**Autorisations, licence et coût.** La fiche Firefox de la version 7.0.5 montre un accès à tous les sites web, nécessaire à la traduction de pages, ainsi que le stockage, les onglets, les menus contextuels et les scripts. Le fichier LICENSE du dépôt est BSD-3-Clause alors que package.json et la fiche Firefox indiquent GPL-3.0 ; l'écart n'est pas résolu. L'extension est gratuite et le site sollicite des dons.",
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: [
          'Avantage',
          "Ce que cela donne à l'usage",
          'Limite / réserve',
        ],
        rows: [
          {
            Avantage: 'Traducteur hors ligne intégré',
            "Ce que cela donne à l'usage": "Pages et texte peuvent être traduits sur l'appareil, même sans connexion.",
            'Limite / réserve': "Facultatif ; le traducteur par défaut est celui de Google, et la couverture des langues et la qualité hors ligne n'ont pas été vérifiées.",
          },
          {
            Avantage: 'Choix du service de traduction',
            "Ce que cela donne à l'usage": 'Google, Yandex, DeepL, ChatGPT, Ollama, LibreTranslate ou votre propre module.',
            'Limite / réserve': "Les serveurs locaux demandent une installation ; les choix cloud envoient le texte à l'extérieur.",
          },
          {
            Avantage: 'Gratuit et open source',
            "Ce que cela donne à l'usage": 'Le site le dit gratuit et le code est public.',
            'Limite / réserve': 'Les fichiers de licence se contredisent et des dons sont sollicités.',
          },
          {
            Avantage: 'Tout-en-un',
            "Ce que cela donne à l'usage": 'Pages, sélections, texte saisi, sous-titres, messages, voix et dictionnaire dans une seule extension.',
            'Limite / réserve': 'Pas de traduction du texte contenu dans les images, par choix.',
          },
          {
            Avantage: 'Dictionnaire et historique hors ligne',
            "Ce que cela donne à l'usage": 'Les mots enregistrés restent disponibles sans connexion.',
            'Limite / réserve': "PromptQuorum n'a trouvé aucune synchronisation décrite.",
          },
          {
            Avantage: 'Développement actif',
            "Ce que cela donne à l'usage": 'La version 7.1.0 est sortie le 7 août 2026.',
            'Limite / réserve': 'Elle a ajouté la télémétrie, et selon les notes de version son traducteur Microsoft ne fonctionne plus.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Linguist face aux alternatives',
        content: [
          "Ce sont les outils de traduction les plus proches du répertoire : un traducteur pour iPhone qui exécute des modèles sur l'appareil et un outil pour traduire des livres et documents entiers.",
        ],
        columns: [
          'Application',
          'Plateformes',
          'Prix et licence',
          'Rôle',
          'Différence clé',
        ],
        rows: [
          {
            Application: 'Linguist',
            Plateformes: 'Chrome, Firefox',
            'Prix et licence': 'Gratuit, open source',
            'Rôle': 'Traduction de pages web et de texte',
            'Différence clé': 'Bergamot hors ligne intégré ; cloud par défaut',
          },
          {
            Application: '[On-Device AI Translator](/fr/power-local-llm/on-device-ai-translator-review)',
            Plateformes: 'iPhone',
            'Prix et licence': 'Freemium, code fermé',
            'Rôle': 'Traduction sur téléphone',
            'Différence clé': "Exécute des modèles de langage sur le téléphone ; pas d'intégration au navigateur",
          },
          {
            Application: '[TranslateBooksWithLLMs](/fr/power-local-llm/translate-books-with-llms-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix et licence': 'Gratuit, AGPL-3.0',
            'Rôle': 'Traduction de livres et de documents',
            'Différence clé': 'Utilise Ollama ou des modèles de langage cloud',
          },
        ],
        note: 'Les plateformes, les prix et les fonctions des applications tierces changent fréquemment. Vérifiez les détails actuels sur la page de chaque projet avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Linguist est adaptée',
        items: [
          '**Lecteurs de sites en langue étrangère.** Un raccourci ou une règle traduit des pages entières.',
          '**Lecteurs soucieux de confidentialité prêts à changer un réglage.** Bergamot ou un serveur local garde le texte chez vous, selon la documentation.',
          '**Apprenants en langues et voyageurs.** Le dictionnaire fonctionne hors ligne et les traductions peuvent être lues à voix haute.',
          '**Auto-hébergeurs.** LibreTranslate ou Ollama se branchent par des modules de traduction personnalisés.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: "Pour qui Linguist n'est pas adaptée",
        items: [
          "**Ceux qui veulent un traitement local dès l'installation.** Une installation neuve utilise un traducteur Google.",
          "**Ceux qui ne veulent aucune télémétrie.** La version 7.1.0 l'a ajoutée, et aucun interrupteur n'a été trouvé dans les notes.",
          "**Ceux qui doivent traduire du texte dans des images.** Le site indique que ce n'est pas pris en charge.",
          "**Les utilisateurs d'autres navigateurs.** En dehors de Chrome et Firefox, une installation manuelle en mode développeur est nécessaire.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Linguist fonctionne-t-il hors ligne ?',
            a: "Selon le site, le traducteur hors ligne et le dictionnaire fonctionnent sans connexion, une fois Bergamot choisi comme module de traduction. PromptQuorum ne l'a pas testé hors ligne.",
          },
          {
            q: 'Mon texte est-il envoyé à Google ?',
            a: 'Avec le traducteur par défaut, oui. Avec Bergamot ou un serveur local, la documentation indique que le texte reste chez vous. La télémétrie est une question distincte, traitée dans la confidentialité.',
          },
          {
            q: 'Linguist est-il vraiment gratuit ?',
            a: "Le site le dit gratuit et open source et sollicite des dons ; PromptQuorum n'a trouvé aucune offre payante.",
          },
          {
            q: 'Puis-je utiliser Ollama ou mon propre modèle ?',
            a: "Oui, via un module de traduction personnalisé. Le site cite Ollama et LibreTranslate, et l'auteur tient une liste de liaisons de traducteurs dans le dépôt linguist-translators.",
          },
          {
            q: 'Qui développe Linguist ?',
            a: "Le code est dans l'organisation GitHub translate-tools ; le fichier LICENSE nomme Robert Vitonsky et le pied de page de la documentation nomme PrimeBits.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Linguist convient si vous lisez des sites en langue étrangère dans Chrome ou Firefox et voulez un traducteur gratuit et open source où vous décidez si le texte va vers un service cloud, passe par Bergamot sur votre appareil ou part vers un serveur que vous gérez. La version 7.1.0 est récente et la voie hors ligne est documentée.',
          "Les réserves tiennent au réglage par défaut et aux données : une installation neuve utilise Google, la télémétrie est arrivée en 7.1.0 à côté d'un site qui dit ne collecter aucune donnée d'utilisateur, et les fichiers de licence se contredisent. Changez le module de traduction avant de vous y fier pour du texte privé.",
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Linguist](https://linguister.io/) — fonctions, FAQ et plateformes.',
          '[Guide de traduction hors ligne](https://linguister.io/docs/guides/OfflineTranslation) — mise en place de Bergamot et LibreTranslate.',
          '[Dépôt GitHub](https://github.com/translate-tools/linguist) — README, fichier LICENSE et code source.',
          '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — paquets et notes de la version 7.1.0.',
          '[Fiche des modules Firefox](https://addons.mozilla.org/addon/linguist-translator/) — version listée, autorisations et licence.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          "[Test de On-Device AI Translator](/fr/power-local-llm/on-device-ai-translator-review) — un traducteur pour iPhone qui exécute des modèles de langage sur l'appareil.",
          '[Test de TranslateBooksWithLLMs](/fr/power-local-llm/translate-books-with-llms-review) — traduire livres et documents avec Ollama ou des modèles cloud.',
          "[Test de Sablate](/fr/power-local-llm/sablate-review) — sous-titres hors ligne avec Whisper et la traduction Argos sur l'ordinateur.",
          "[Le répertoire complet des logiciels de LLM locaux](/fr/directory) — un répertoire plus large d'outils d'IA locale sur toutes les plateformes.",
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
    heroImage: '/images/linguister-review-hero-ja.webp',
    title: 'Linguistレビュー：オフラインモード付きのオープンソース翻訳ブラウザ拡張',
    seoTitle: 'Linguistレビュー：オフライン対応の翻訳拡張',
    intro: 'Linguist（公式サイトlinguister.io）は、ページ全体、選択したテキスト、字幕、メッセージを翻訳する、ChromeとFirefox向けの無料オープンソースのブラウザ拡張です。インストール直後はクラウドの翻訳サービスにテキストを送りますが、オフライン翻訳機能を内蔵しており、LibreTranslateやOllamaなどのローカルサーバーにも接続できます。このレビューでは、公式サイト、ドキュメント、Firefoxのアドオンページ、GitHubリポジトリが述べている内容、ローカル処理の範囲、不明な点を整理します。実機での検証は行っていません。',
    metaDescription: 'Linguistレビュー：ChromeとFirefox向けの無料オープンソース翻訳拡張。オフライン翻訳を内蔵し、初期設定はクラウド、v7.1.0でテレメトリが追加。実機検証なし。',
    twitterDescription: 'Linguistレビュー：ChromeとFirefox向けの無料オープンソース翻訳拡張。任意のオフラインモードとローカルサーバーに対応。プライバシー、制限、代替ツールを解説。',
    audience: 'クラウドサービスを既定にせずWebページやテキストを翻訳したいChrome・Firefoxユーザー向け。ローカルで動く範囲、設定、プライバシー、制限、代替ツールを扱います。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Linguist review',
    targetKeywords: [
      'linguist レビュー',
      'linguister',
      'オフライン 翻訳 ブラウザ拡張',
      'オープンソース 翻訳 拡張機能',
      'bergamot ブラウザ翻訳',
      'プライベート ページ翻訳 chrome firefox',
      'libretranslate ブラウザ拡張',
    ],
    current_hardware_mentioned: [
      'Chrome',
      'Firefox',
      'NVIDIA GPU（任意、ローカルのLibreTranslateサーバー用）',
    ],
    leadAnswerBlock: '**Linguistは、ChromeとFirefox向けの無料オープンソース翻訳拡張で、ローカル動作になるのは利用者が選んだときだけです。**内蔵のBergamot翻訳はお使いの端末で動きますが、初期状態の翻訳はGoogleの無料サービスです。外国語サイトを読み、設定を1つ変えてもよい人に向いています。',
    quickAnswerTop: {
      ja: {
        question: 'Linguistは自分の端末で翻訳しますか？',
        answer: '切り替えた後のみです。ドキュメントによると、内蔵のオフライン翻訳（Bergamot）は端末上で翻訳し、設定ページで翻訳モジュールとして選びます。バージョン7.1.0のリリースノートでは既定がGoogleの無料翻訳とされており、インストール直後のテキストはGoogleに送られます。',
        bullets: [
          'ページ全体（ホットキーやルール）、選択テキスト、入力テキスト、Netflixやビデオ通話の字幕、プライベートメッセージを翻訳します。',
          '原文と訳文を読み上げ、履歴と個人辞書を保存します。サイトによると辞書はオフラインでも使えます。',
          'カスタム翻訳でChatGPT、DeepL、DeepSeek、Geminiなどのクラウドや、Ollama、LibreTranslateなどのローカルサービスに接続できます。',
          '画像内の文字の翻訳は、開発者の方針により提供されていません。',
          'ChromeとFirefoxはストアから導入、他のブラウザはGitHub Releasesから手動で導入します。',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: 'クイックアンサー',
        anchor: 'quick-answer',
      },
      {
        label: 'Linguistの入手方法',
        anchor: 'get-it',
      },
      {
        label: 'Linguistの概要',
        anchor: 'at-a-glance',
      },
      {
        label: 'Linguistとは',
        anchor: 'what-is-linguist',
      },
      {
        label: 'はじめ方',
        anchor: 'how-to-get-started',
      },
      {
        label: '機能',
        anchor: 'features',
      },
      {
        label: '翻訳エンジンとオフラインモード',
        anchor: 'translators-offline',
      },
      {
        label: 'プライバシー・ライセンス・費用',
        anchor: 'privacy',
      },
      {
        label: 'メリットと制限',
        anchor: 'tradeoffs',
      },
      {
        label: 'Linguistと代替ツールの比較',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Linguistが向いている人',
        anchor: 'who-should-use',
      },
      {
        label: 'Linguistが向いていない人',
        anchor: 'who-should-not-use',
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
        id: 'key-takeaways',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Linguistは無料のオープンソースのブラウザ拡張で、ページとテキストを既定ではクラウドで翻訳し、内蔵のオフライン翻訳を選ぶと端末上で翻訳します。',
          },
          {
            type: 'plain-terms',
            text: 'ダイヤル付きの翻訳ボタンを想像してください。ある位置では言葉がGoogleに送られ、別の位置では自分のパソコンか自分で動かすサーバーにとどまります。',
          },
        ],
        items: [
          'ローカルの主張：Bergamotオフライン翻訳は内蔵で任意選択、ローカルサーバーはカスタム翻訳モジュールで接続、クラウドを選べばテキストは外部に送られます。',
          'ライセンスと開発元：オープンソース。LICENSEファイルによると開発者はRobert Vitonsky、コードはGitHub組織translate-toolsにあります。',
          '価格：公式サイトによると無料で、寄付を呼びかけています。',
          'メンテナンス：バージョン7.1.0は2026年8月7日に公開され、メインブランチは2026年9月4日に更新されたため、開発は続いています。',
          '不足点：画像翻訳なし、サイトはユーザーデータを収集しないと述べる一方で7.1.0でテレメトリを追加、Firefoxのページに表示された版が古いこと。',
        ],
      },
      getItLinguist: {
        id: 'get-it',
        title: 'Linguistの入手方法',
        content: [
          '**Linguistはブラウザのストアから導入でき、ターミナルは不要です。**お使いのブラウザのストアを選ぶか、他のブラウザ向けにはGitHubのリリースページからパッケージをダウンロードします。',
        ],
        columns: [
          'プラットフォーム',
          '入手先',
        ],
        rows: [
          {
            'プラットフォーム': 'Chrome',
            '入手先': '[Chromeに追加](https://chrome.google.com/webstore/detail/gbefmodhlophhakmoecijeppjblibmie) — 公式サイトからのChrome ウェブストアへのリンク',
          },
          {
            'プラットフォーム': 'Firefox',
            '入手先': '[Firefoxに追加](https://addons.mozilla.org/addon/linguist-translator/) — Firefoxアドオン',
          },
          {
            'プラットフォーム': 'その他のブラウザ',
            '入手先': '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — zip、.crx、.xpiパッケージを手動でインストール',
          },
          {
            'プラットフォーム': 'オフライン設定',
            '入手先': '[オフライン翻訳ガイド](https://linguister.io/docs/guides/OfflineTranslation) — Bergamotは内蔵、LibreTranslateはDockerで動かします',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手先': '[linguister.io](https://linguister.io/)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[github.com/translate-tools/linguist](https://github.com/translate-tools/linguist) — オープンソース',
          },
        ],
        note: 'PromptQuorumは、公式サイトに独立したプライバシーポリシーのページを見つけられませんでした。2026年11月13日の確認時、Firefoxのページはバージョン7.0.5を表示しており、ストアの版がGitHubのリリースより遅れることがあります。 AndroidについてREADMEは、Firefox Nightlyとカスタムアドオンコレクションの利用を説明しています。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Linguistの概要',
        columns: [
          '項目',
          'Linguist',
        ],
        rows: [
          {
            '項目': 'プラットフォーム',
            Linguist: 'ChromeとFirefoxの拡張機能、他のブラウザは手動インストール',
          },
          {
            '項目': '価格',
            Linguist: '無料、寄付を募集',
          },
          {
            '項目': 'ライセンス',
            Linguist: 'オープンソース。package.jsonはGPL-3.0、LICENSEファイルはBSD-3-Clause',
          },
          {
            '項目': '実行場所',
            Linguist: '既定はクラウド翻訳、任意で端末上のBergamotオフライン翻訳、ローカルサーバーも利用可',
          },
          {
            '項目': '言語',
            Linguist: 'READMEでは130、公式サイトでは100以上（未検証）',
          },
          {
            '項目': 'オフライン利用',
            Linguist: '公式サイトによるとオフライン翻訳と辞書が利用可',
          },
          {
            '項目': '画像翻訳',
            Linguist: '公式サイトによると非対応',
          },
          {
            '項目': 'テレメトリ',
            Linguist: '7.1.0で追加。開発者は個人データやテキストは収集しないと説明',
          },
        ],
        note: 'サイトに記載がない項目は、未対応ではなく不明という意味です。',
      },
      whatIsLinguist: {
        id: 'what-is-linguist',
        title: 'Linguistとは',
        content: [
          '**Linguistは、ブラウザの翻訳ボタンを設定可能な翻訳システムに置き換えるブラウザ拡張です。**ホットキーや自動ルールでページ全体を、さらに選択テキスト、入力テキスト、字幕、プライベートメッセージを翻訳し、訳文を読み上げ、個人辞書に保存できます。',
          '製品名はLinguist、公式サイトはlinguister.io、コードはGitHub組織translate-toolsにあります。LICENSEファイルの著作権者はRobert Vitonsky、ドキュメントのフッターにはPrimeBitsと記載されています。Linguistという名前の別ツールもありますが、このレビューが扱うのはlinguister.ioのみです。',
          'このレビューは、公式サイト、ドキュメント、Firefoxのアドオンページ、GitHubリポジトリ、リリースノートに基づきます。翻訳品質、速度、安定性は検証しておらず、評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'はじめ方',
        content: [
          '**セットアップは、インストールと設定1つです。**手順は公式サイトとオフラインガイドに沿っています。',
        ],
        numberedItems: [
          {
            title: '拡張機能をインストールする',
            whyItMatters: 'Chrome ウェブストアまたはFirefoxアドオンから追加するか、GitHub Releasesのパッケージを開発者モードでインストールします。',
          },
          {
            title: '設定を開く',
            whyItMatters: '翻訳モジュールを選びます。7.1.0のリリースノートによると、インストール直後はGoogleの無料翻訳を使います。Bergamotとカスタム翻訳はここで選びます。',
          },
          {
            title: '翻訳する',
            whyItMatters: 'ページにはホットキーを使い、テキストを選択して翻訳ボタンを押すか、ツールバーのポップアップに入力します。訳文にカーソルを合わせると原文が表示されます。',
          },
          {
            title: '任意：ローカルサーバーを動かす',
            whyItMatters: 'LibreTranslateはガイドに従い、Dockerコンテナを起動してモデルのダウンロードを待ち、設定でカスタム翻訳のLibreTranslateを追加します。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**機能は、ブラウザで読むものを翻訳することに集中しています。**以下はすべて公式サイト、ドキュメント、READMEによります。',
        ],
        items: [
          '**ページ翻訳。**ホットキー、またはページの言語やドメインごとの自動ルール。テキストノードだけを書き換えるためレイアウトは崩れず、ログインが必要なページでも使えます。',
          '**選択テキストと入力テキスト。**選択したテキストに翻訳ボタンが表示され、ポップアップでは入力したテキストを翻訳できます。',
          '**字幕とメッセージ。**Netflixやビデオ通話の字幕、プライベートメッセージに対応。サイトはZoom、Google Meet、Microsoft Teamsでのリアルタイム翻訳にも触れています。',
          '**音声。**原文と訳文を読み上げられ、ドキュメントにはカスタムの音声合成モジュールの説明があります。',
          '**履歴と辞書。**すべての翻訳が検索可能な履歴に保存され、重要なものは個人辞書に追加できます。',
          '**内蔵サービス。**サイトにはGoogle、Yandex、Microsoftが挙がっていますが、7.1.0のリリースノートによるとMicrosoft翻訳はすでに動作しません。',
        ],
      },
      translators: {
        id: 'translators-offline',
        title: '翻訳エンジンとオフラインモード',
        content: [
          '**オフライン翻訳はBergamotで、バージョン5.0から内蔵されています。**ドキュメントによると設定ページで翻訳モジュールとして選び、サイトによると翻訳は端末上で行われ、接続なしでも動きます。READMEはbrowsermtのBergamotプロジェクトを挙げています。対応する言語ペアや、クラウドサービスとの品質比較は、PromptQuorumは確認していません。',
          '**第二の道はローカルサーバーです。**カスタム翻訳モジュールを使えば、自分で用意した任意のサービスにLinguistを接続できます。ガイドはDocker上のLibreTranslateを例に挙げ、モデルは初回起動時にダウンロードされ、NVIDIA GPUは任意です。サイトはOllamaにも触れています。ChatGPT、DeepL、DeepSeek、Geminiといったクラウドサービスも同じ方法で接続でき、テキストはそれらに送られます。',
          '**既定の動作。**7.1.0のリリースノートによると、既定はGoogleの無料翻訳で、優先する翻訳が停止した場合は別の翻訳に自動で切り替わります。ただしBergamotやカスタムサービスの利用者には、この切り替えは有効にならないと記されています。拡張機能自体のRAMやGPUの要件は記載されていません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー・ライセンス・費用',
        content: [
          '**端末の外に出るものは、選んだ翻訳エンジンで決まります。**既定を含むクラウド翻訳では、ページや選択範囲のテキストがその提供元に送られます。Bergamotや自分で動かすサーバーでは、サイトによるとテキストは端末や自分のネットワークにとどまります。',
          '**テレメトリはバージョン7.1.0で追加されました。**リリースノートによると、基本的な操作イベントと翻訳エンジンのエラーを収集し、「個人データやテキストは収集しない」とされています。リポジトリのソースコードは、ページ翻訳の変更や設定の更新といったイベント名、拡張機能内に保存されるランダムなID、ブラウザの言語、ユーザーエージェントを、events.vitonsky.netのサーバーに送信します。サイトとREADMEは今もユーザーデータを収集しないと述べており、両者の説明は整合していません。PromptQuorumはリリースノートにオフにする設定を見つけられず、アプリ内でも確認していません。',
          '**権限、ライセンス、費用。**バージョン7.0.5のFirefoxのページには、ページ翻訳に必要なすべてのウェブサイトへのアクセスに加え、ストレージ、タブ、コンテキストメニュー、スクリプトが表示されています。リポジトリのLICENSEファイルはBSD-3-Clauseですが、package.jsonとFirefoxのページはGPL-3.0としており、違いは解消されていません。拡張機能は無料で、公式サイトは寄付を呼びかけています。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'メリットと制限',
        columns: [
          'メリット',
          '実際の使い勝手',
          '制限・注意点',
        ],
        rows: [
          {
            'メリット': '内蔵のオフライン翻訳',
            '実際の使い勝手': 'ページやテキストを端末上で、接続がなくても翻訳できます。',
            '制限・注意点': '任意選択で、既定はGoogle翻訳です。オフラインの対応言語と品質は未確認です。',
          },
          {
            'メリット': '翻訳エンジンを選べる',
            '実際の使い勝手': 'Google、Yandex、DeepL、ChatGPT、Ollama、LibreTranslate、自作モジュールから選べます。',
            '制限・注意点': 'ローカルサーバーには設定が必要で、クラウドを選ぶとテキストが外部に送られます。',
          },
          {
            'メリット': '無料でオープンソース',
            '実際の使い勝手': '公式サイトは無料とし、コードは公開されています。',
            '制限・注意点': 'ライセンスファイルの記載が食い違い、寄付も募っています。',
          },
          {
            'メリット': 'オールインワン',
            '実際の使い勝手': 'ページ、選択、入力、字幕、メッセージ、音声、辞書を1つの拡張で扱えます。',
            '制限・注意点': '画像内の文字は、設計上翻訳されません。',
          },
          {
            'メリット': 'オフラインの辞書と履歴',
            '実際の使い勝手': '保存した単語は接続がなくても使えます。',
            '制限・注意点': '同期機能の説明は見つかりませんでした。',
          },
          {
            'メリット': '活発な開発',
            '実際の使い勝手': 'バージョン7.1.0は2026年8月7日に公開されました。',
            '制限・注意点': 'テレメトリが追加され、リリースノートによると内蔵のMicrosoft翻訳は動作しなくなりました。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Linguistと代替ツールの比較',
        content: [
          'ディレクトリ内で最も近い翻訳ツールは、端末上でモデルを動かすiPhone翻訳アプリと、書籍や文書をまるごと翻訳するツールです。',
        ],
        columns: [
          'アプリ',
          '対応',
          '価格とライセンス',
          '役割',
          '主な違い',
        ],
        rows: [
          {
            'アプリ': 'Linguist',
            '対応': 'Chrome、Firefox',
            '価格とライセンス': '無料、オープンソース',
            '役割': 'Webページとテキストの翻訳',
            '主な違い': 'オフラインのBergamotを内蔵、既定はクラウド',
          },
          {
            'アプリ': '[On-Device AI Translator](/ja/power-local-llm/on-device-ai-translator-review)',
            '対応': 'iPhone',
            '価格とライセンス': 'フリーミアム、クローズドソース',
            '役割': 'スマートフォンでの翻訳',
            '主な違い': '言語モデルを端末上で実行、ブラウザ連携なし',
          },
          {
            'アプリ': '[TranslateBooksWithLLMs](/ja/power-local-llm/translate-books-with-llms-review)',
            '対応': 'Mac、Windows、Linux',
            '価格とライセンス': '無料、AGPL-3.0',
            '役割': '書籍・文書の翻訳',
            '主な違い': 'Ollamaまたはクラウドの言語モデルを利用',
          },
        ],
        note: 'サードパーティ製アプリの対応環境、価格、機能は頻繁に変わります。決める前に各プロジェクトの公式ページで最新情報をご確認ください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Linguistが向いている人',
        items: [
          '**外国語サイトを読む人。**ホットキーやルール1つでページ全体を翻訳します。',
          '**設定を変えてもよいプライバシー重視の人。**ドキュメントによると、Bergamotやローカルサーバーならテキストは手元にとどまります。',
          '**語学学習者や旅行者。**辞書はオフラインで使え、訳文を読み上げられます。',
          '**自前でサービスを運用する人。**LibreTranslateやOllamaをカスタム翻訳モジュールで接続できます。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Linguistが向いていない人',
        items: [
          '**最初からローカル処理を求める人。**インストール直後はGoogle翻訳を使います。',
          '**テレメトリを一切望まない人。**7.1.0で追加され、リリースノートにはオフにする設定が見つかりませんでした。',
          '**画像内の文字を翻訳したい人。**公式サイトは非対応としています。',
          '**他のブラウザを使う人。**ChromeとFirefox以外では、開発者モードでの手動インストールが必要です。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Linguistはオフラインで動きますか？',
            a: '公式サイトによると、翻訳モジュールにBergamotを選べば、オフライン翻訳と辞書は接続なしで動きます。PromptQuorumはオフラインでの動作を検証していません。',
          },
          {
            q: 'テキストはGoogleに送られますか？',
            a: '既定の翻訳では送られます。Bergamotやローカルサーバーでは、ドキュメントによるとテキストは手元にとどまります。テレメトリは別の問題で、プライバシーの項で扱っています。',
          },
          {
            q: 'Linguistは本当に無料ですか？',
            a: '公式サイトは無料のオープンソースとし、寄付を呼びかけています。PromptQuorumは有料プランを見つけませんでした。',
          },
          {
            q: 'Ollamaや自分のモデルを使えますか？',
            a: 'はい、カスタム翻訳モジュールを通じて使えます。サイトはOllamaとLibreTranslateを挙げ、開発者はlinguist-translatorsリポジトリで翻訳エンジン連携の一覧を管理しています。',
          },
          {
            q: 'Linguistは誰が作っていますか？',
            a: 'コードはGitHub組織translate-toolsにあり、LICENSEファイルはRobert Vitonsky、ドキュメントのフッターはPrimeBitsを挙げています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          'ChromeやFirefoxで外国語サイトを読み、テキストをクラウドに送るか、端末上のBergamotで処理するか、自分で動かすサーバーに送るかを自分で決められる、無料のオープンソース翻訳を求めるなら、Linguistは適しています。バージョン7.1.0は新しく、オフラインの手順も文書化されています。',
          '注意点は既定の設定とデータです。インストール直後はGoogleを使い、サイトがユーザーデータを収集しないと述べる一方で7.1.0でテレメトリが追加され、ライセンスファイルの記載も食い違っています。プライベートなテキストに使う前に、翻訳モジュールを切り替えてください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Linguist公式サイト](https://linguister.io/) — 機能、FAQ、対応プラットフォーム。',
          '[オフライン翻訳ガイド](https://linguister.io/docs/guides/OfflineTranslation) — BergamotとLibreTranslateの設定。',
          '[GitHubリポジトリ](https://github.com/translate-tools/linguist) — README、LICENSEファイル、ソースコード。',
          '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — パッケージとバージョン7.1.0のリリースノート。',
          '[Firefoxアドオンのページ](https://addons.mozilla.org/addon/linguist-translator/) — 掲載バージョン、権限、ライセンス。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[On-Device AI Translatorレビュー](/ja/power-local-llm/on-device-ai-translator-review) — 言語モデルを端末上で動かすiPhone翻訳アプリ。',
          '[TranslateBooksWithLLMsレビュー](/ja/power-local-llm/translate-books-with-llms-review) — Ollamaやクラウドモデルで書籍や文書を翻訳。',
          '[Sablateレビュー](/ja/power-local-llm/sablate-review) — WhisperとArgos翻訳をパソコン上で使うオフライン字幕。',
          '[Local LLM Software Directory全体](/ja/directory) — 全プラットフォームのローカルAIツールを集めた、より広いディレクトリ。',
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
    heroImage: '/images/linguister-review-hero-zh.webp',
    title: 'Linguist评测：带离线模式的开源浏览器翻译扩展',
    seoTitle: 'Linguist评测：带离线模式的免费开源翻译浏览器扩展',
    intro: 'Linguist（官网linguister.io）是一款适用于Chrome和Firefox的免费开源浏览器扩展，可翻译整个网页、选中文本、字幕和消息。刚安装时它会把文本发送给云端翻译服务，但扩展也内置了离线翻译器，并可连接LibreTranslate或Ollama等本地服务器。本评测梳理官网、文档、Firefox附加组件页面和GitHub仓库的说法，说明本地处理从哪里开始、到哪里结束，以及哪些地方仍不清楚。本次没有进行实际测试。',
    metaDescription: 'Linguist评测：适用于Chrome和Firefox的免费开源翻译扩展，内置离线模式，默认使用云端翻译，7.1.0版本新增遥测。未经实际测试。',
    twitterDescription: 'Linguist评测：适用于Chrome和Firefox的免费开源网页翻译扩展，可选离线模式并支持本地服务器。隐私、局限与替代方案。',
    audience: '希望翻译网页和文本、又不想默认使用云服务的Chrome和Firefox用户——涵盖哪些部分在本地运行、设置方法、隐私、局限与替代方案。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Linguist review',
    targetKeywords: [
      'linguist 评测',
      'linguister',
      '离线浏览器翻译',
      '开源翻译扩展',
      'bergamot 浏览器翻译',
      '隐私网页翻译 chrome firefox',
      'libretranslate 浏览器扩展',
    ],
    current_hardware_mentioned: [
      'Chrome',
      'Firefox',
      'NVIDIA GPU（可选，用于本地LibreTranslate服务器）',
    ],
    leadAnswerBlock: '**Linguist是一款适用于Chrome和Firefox的免费开源翻译扩展，只有在你主动选择时才在本地运行：**内置的Bergamot翻译器在你的设备上运行，而开箱即用的翻译器是Google的免费服务。它适合阅读外语网站、并愿意修改一项设置的读者。',
    quickAnswerTop: {
      zh: {
        question: 'Linguist会在我的设备上翻译吗？',
        answer: '只有在你切换之后。文档称，内置的离线翻译器Bergamot在设备上翻译，并在偏好设置页面中选为翻译模块。7.1.0版本的发布说明称默认翻译器是Google的免费翻译，因此刚安装时文本会发送给Google。',
        bullets: [
          '可通过快捷键或规则翻译整个网页，也可翻译选中文本、输入文本、Netflix和视频通话中的字幕以及私信。',
          '可朗读原文和译文，并保存历史记录和个人词典；官网称词典可离线使用。',
          '自定义翻译器可接入ChatGPT、DeepL、DeepSeek、Gemini等云服务，或Ollama、LibreTranslate等本地服务。',
          '不提供图片内文字的翻译，这是开发者的有意选择。',
          'Chrome和Firefox可从应用商店安装；其他浏览器需从GitHub Releases手动安装。',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: '快速解答',
        anchor: 'quick-answer',
      },
      {
        label: '获取Linguist',
        anchor: 'get-it',
      },
      {
        label: 'Linguist概览',
        anchor: 'at-a-glance',
      },
      {
        label: 'Linguist是什么',
        anchor: 'what-is-linguist',
      },
      {
        label: '入门步骤',
        anchor: 'how-to-get-started',
      },
      {
        label: '功能',
        anchor: 'features',
      },
      {
        label: '翻译器与离线模式',
        anchor: 'translators-offline',
      },
      {
        label: '隐私、许可与费用',
        anchor: 'privacy',
      },
      {
        label: '优势与局限',
        anchor: 'tradeoffs',
      },
      {
        label: 'Linguist与替代方案对比',
        anchor: 'vs-alternatives',
      },
      {
        label: '适合使用Linguist的人',
        anchor: 'who-should-use',
      },
      {
        label: '不适合使用Linguist的人',
        anchor: 'who-should-not-use',
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
        label: '资料来源',
        anchor: 'sources',
      },
      {
        label: '相关阅读',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Linguist是一款免费开源的浏览器扩展，默认在云端翻译网页和文本，选择内置离线翻译器后则在你的设备上翻译。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想成一个带旋钮的翻译按钮：一个档位把文字发送给Google，另一个档位让文字留在你的电脑或你自己运行的服务器上。',
          },
        ],
        items: [
          '本地说法：Bergamot离线翻译器已内置且需手动选择；本地服务器通过自定义翻译模块接入；任何云端选项都会把文本发送出去。',
          '许可证与开发者：开源，据LICENSE文件由Robert Vitonsky开发，代码位于GitHub组织translate-tools。',
          '价格：官网称免费，并呼吁捐赠。',
          '维护：7.1.0版本于2026年8月7日发布，主分支最近一次更新是2026年9月4日，项目仍在开发。',
          '不足：不支持图片翻译；官网称不收集用户数据，7.1.0却新增了遥测；Firefox页面显示的是较旧版本。',
        ],
      },
      getItLinguist: {
        id: 'get-it',
        title: '获取Linguist',
        content: [
          '**Linguist通过浏览器应用商店安装，无需终端。**选择你的浏览器对应的商店，其他浏览器则从GitHub发布页下载安装包。',
        ],
        columns: [
          '平台',
          '获取方式',
        ],
        rows: [
          {
            '平台': 'Chrome',
            '获取方式': '[安装到Chrome](https://chrome.google.com/webstore/detail/gbefmodhlophhakmoecijeppjblibmie) — 来自官网的Chrome网上应用店链接',
          },
          {
            '平台': 'Firefox',
            '获取方式': '[安装到Firefox](https://addons.mozilla.org/addon/linguist-translator/) — Firefox附加组件',
          },
          {
            '平台': '其他浏览器',
            '获取方式': '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — zip、.crx和.xpi安装包，手动安装',
          },
          {
            '平台': '离线设置',
            '获取方式': '[离线翻译指南](https://linguister.io/docs/guides/OfflineTranslation) — Bergamot已内置；LibreTranslate通过Docker运行',
          },
          {
            '平台': '官网',
            '获取方式': '[linguister.io](https://linguister.io/)',
          },
          {
            '平台': '源代码',
            '获取方式': '[github.com/translate-tools/linguist](https://github.com/translate-tools/linguist) — 开源',
          },
        ],
        note: 'PromptQuorum在官网上没有找到单独的隐私政策页面。2026年11月13日检查时，Firefox页面显示的是7.0.5版本，因此商店版本可能落后于GitHub发布版本。 关于Android，README介绍了通过Firefox Nightly和自定义附加组件集合安装。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Linguist概览',
        columns: [
          '属性',
          'Linguist',
        ],
        rows: [
          {
            '属性': '平台',
            Linguist: 'Chrome和Firefox扩展；其他浏览器需手动安装',
          },
          {
            '属性': '价格',
            Linguist: '免费；呼吁捐赠',
          },
          {
            '属性': '许可证',
            Linguist: '开源；package.json为GPL-3.0，LICENSE文件为BSD-3-Clause',
          },
          {
            '属性': '运行位置',
            Linguist: '默认使用云端翻译器；可选在设备上运行Bergamot离线翻译；也可选用本地服务器',
          },
          {
            '属性': '语言',
            Linguist: 'README称130种；官网称100多种（未验证）',
          },
          {
            '属性': '离线使用',
            Linguist: '官网称离线翻译器和词典可离线使用',
          },
          {
            '属性': '图片翻译',
            Linguist: '官网称不提供',
          },
          {
            '属性': '遥测',
            Linguist: '7.1.0新增；开发者称不含个人数据或文本',
          },
        ],
        note: '官网上没有提到的内容意味着未知，而不是不支持。',
      },
      whatIsLinguist: {
        id: 'what-is-linguist',
        title: 'Linguist是什么',
        content: [
          '**Linguist是一款浏览器扩展，用一套可配置的翻译系统取代浏览器自带的翻译按钮。**它可通过快捷键或自动规则翻译整个网页，也能翻译选中文本、输入文本、字幕和私信，朗读译文，并把条目保存到个人词典。',
          '产品名为Linguist，官网是linguister.io，代码位于GitHub组织translate-tools；LICENSE文件列出的版权所有者是Robert Vitonsky，文档页脚署名为PrimeBits。还有其他工具也叫Linguist，本评测只涉及linguister.io。',
          '本评测依据官网、文档、Firefox附加组件页面、GitHub仓库和发布说明。翻译质量、速度和稳定性未经测试，也不在此评分。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门步骤',
        content: [
          '**设置就是一次安装加一项偏好设置。**步骤依据官网和离线指南。',
        ],
        numberedItems: [
          {
            title: '安装扩展',
            whyItMatters: '从Chrome网上应用店或Firefox附加组件添加，或在开发者模式下安装GitHub Releases中的安装包。',
          },
          {
            title: '打开偏好设置',
            whyItMatters: '选择翻译模块。据7.1.0发布说明，刚安装时使用Google的免费翻译器；Bergamot和自定义翻译器在这里选择。',
          },
          {
            title: '开始翻译',
            whyItMatters: '网页用快捷键翻译，选中文本后点击翻译按钮，或在工具栏弹窗中输入文本；把鼠标悬停在译文上可查看原文。',
          },
          {
            title: '可选：运行本地服务器',
            whyItMatters: 'LibreTranslate请按指南操作：启动Docker容器，等待模型下载完成，然后在设置中添加自定义翻译器LibreTranslate。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**功能集中在翻译你在浏览器中阅读的内容。**以下内容均来自官网、文档和README。',
        ],
        items: [
          '**网页翻译。**通过快捷键，或按页面语言或域名设置的自动规则；扩展只修改文本节点，因此版面保持不变，在需要登录的页面上也能使用。',
          '**选中和输入文本。**选中文本后会出现翻译按钮，弹窗支持输入文本翻译。',
          '**字幕和消息。**支持Netflix和视频通话中的字幕以及私信；官网还提到在Zoom、Google Meet和Microsoft Teams中的实时翻译。',
          '**语音。**原文和译文可朗读；文档介绍了自定义语音合成模块。',
          '**历史和词典。**每次翻译都会保存到可搜索的历史记录，重要条目可加入个人词典。',
          '**内置服务。**官网列出Google、Yandex和Microsoft；据7.1.0发布说明，Microsoft翻译器已无法使用。',
        ],
      },
      translators: {
        id: 'translators-offline',
        title: '翻译器与离线模式',
        content: [
          '**离线翻译器是Bergamot，自5.0版本起内置。**文档称在偏好设置页面把它选为翻译模块，官网称此后翻译在设备上进行，无需联网。README提到了browsermt的Bergamot项目。PromptQuorum没有核实它支持哪些语言对，也没有比较其质量与云服务的差异。',
          '**第二条路是本地服务器。**自定义翻译模块可把Linguist连接到你部署的任何服务。指南以Docker中的LibreTranslate为例，模型在首次启动时下载，NVIDIA GPU为可选；官网还提到了Ollama。ChatGPT、DeepL、DeepSeek和Gemini等云服务以同样方式接入，并会收到文本。',
          '**默认行为。**据7.1.0发布说明，默认是Google的免费翻译器，当首选翻译器不可用时会自动切换到另一个；发布说明称，使用Bergamot或自定义服务的用户不会启用这种切换。扩展本身没有标明内存或GPU要求。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可与费用',
        content: [
          '**哪些内容离开你的设备，取决于你选择的翻译器。**使用云端翻译器（包括默认翻译器）时，网页或所选内容的文本会发送给该服务商。使用Bergamot或你自己运行的服务器时，官网称文本留在你的设备或网络内。',
          '**遥测是随7.1.0版本加入的。**发布说明称它收集基本的交互事件和翻译器错误，并且“不收集任何个人数据或文本”。仓库中的源代码会把页面翻译变更、设置更新等事件名称、保存在扩展中的随机ID、浏览器语言和用户代理发送到events.vitonsky.net的服务器。官网和README仍称扩展不收集用户数据，这两种说法并不一致。PromptQuorum在发布说明中没有找到关闭开关，也没有在应用内查找。',
          '**权限、许可证与费用。**7.0.5版本的Firefox页面显示可访问所有网站（网页翻译所需），以及存储、标签页、右键菜单和脚本权限。仓库的LICENSE文件是BSD-3-Clause，而package.json和Firefox页面写的是GPL-3.0，差异尚未厘清。扩展免费，官网呼吁捐赠。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优势与局限',
        columns: [
          '优势',
          '实际使用中的意义',
          '局限 / 注意事项',
        ],
        rows: [
          {
            '优势': '内置离线翻译器',
            '实际使用中的意义': '网页和文本可在设备上翻译，即使没有网络。',
            '局限 / 注意事项': '需手动选择，默认是Google翻译器；离线语言覆盖范围和质量未核实。',
          },
          {
            '优势': '可自选翻译后端',
            '实际使用中的意义': 'Google、Yandex、DeepL、ChatGPT、Ollama、LibreTranslate或你自己的模块。',
            '局限 / 注意事项': '本地服务器需要设置；选择云服务会把文本发送出去。',
          },
          {
            '优势': '免费且开源',
            '实际使用中的意义': '官网称免费，代码公开。',
            '局限 / 注意事项': '许可证文件说法不一，并呼吁捐赠。',
          },
          {
            '优势': '一体化翻译',
            '实际使用中的意义': '网页、选中文本、输入文本、字幕、消息、语音和词典集于一个扩展。',
            '局限 / 注意事项': '按设计不翻译图片内的文字。',
          },
          {
            '优势': '离线词典与历史',
            '实际使用中的意义': '保存的单词无需联网即可使用。',
            '局限 / 注意事项': 'PromptQuorum没有找到同步功能的说明。',
          },
          {
            '优势': '开发活跃',
            '实际使用中的意义': '7.1.0版本于2026年8月7日发布。',
            '局限 / 注意事项': '它新增了遥测，据发布说明，其中的Microsoft翻译器已无法使用。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Linguist与替代方案对比',
        content: [
          '以下是目录中最接近的翻译工具：一款在设备上运行模型的iPhone翻译应用，以及一款翻译整本书和文档的工具。',
        ],
        columns: [
          '应用',
          '平台',
          '价格与许可',
          '定位',
          '主要区别',
        ],
        rows: [
          {
            '应用': 'Linguist',
            '平台': 'Chrome、Firefox',
            '价格与许可': '免费，开源',
            '定位': '网页和文本翻译',
            '主要区别': '内置离线Bergamot；默认使用云端',
          },
          {
            '应用': '[On-Device AI Translator](/zh/power-local-llm/on-device-ai-translator-review)',
            '平台': 'iPhone',
            '价格与许可': '免费增值，闭源',
            '定位': '手机翻译',
            '主要区别': '在手机上运行语言模型；无浏览器集成',
          },
          {
            '应用': '[TranslateBooksWithLLMs](/zh/power-local-llm/translate-books-with-llms-review)',
            '平台': 'Mac、Windows、Linux',
            '价格与许可': '免费，AGPL-3.0',
            '定位': '书籍和文档翻译',
            '主要区别': '使用Ollama或云端语言模型',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。决定之前，请在各项目自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用Linguist的人',
        items: [
          '**阅读外语网站的读者。**一个快捷键或一条规则即可翻译整个网页。',
          '**重视隐私且愿意修改设置的读者。**据文档，使用Bergamot或本地服务器可让文本留在你这边。',
          '**语言学习者和旅行者。**词典可离线使用，译文可朗读。',
          '**自建服务的用户。**LibreTranslate或Ollama可通过自定义翻译模块接入。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用Linguist的人',
        items: [
          '**希望开箱即用就在本地处理的人。**刚安装时使用的是Google翻译器。',
          '**完全不想要遥测的人。**7.1.0新增了遥测，发布说明中未找到关闭开关。',
          '**需要翻译图片内文字的人。**官网称不支持。',
          '**使用其他浏览器的用户。**在Chrome和Firefox之外，需要在开发者模式下手动安装。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Linguist可以离线使用吗？',
            a: '官网称，把Bergamot选为翻译模块后，离线翻译器和词典无需联网即可使用。PromptQuorum没有在离线状态下测试。',
          },
          {
            q: '我的文本会发送给Google吗？',
            a: '使用默认翻译器时会。使用Bergamot或本地服务器时，文档称文本留在你这边。遥测是另一回事，见隐私部分。',
          },
          {
            q: 'Linguist真的免费吗？',
            a: '官网称它免费且开源，并呼吁捐赠；PromptQuorum没有找到付费方案。',
          },
          {
            q: '我可以使用Ollama或自己的模型吗？',
            a: '可以，通过自定义翻译模块。官网提到Ollama和LibreTranslate，开发者还在linguist-translators仓库中维护了翻译器接入列表。',
          },
          {
            q: '谁在开发Linguist？',
            a: '代码位于GitHub组织translate-tools；LICENSE文件署名Robert Vitonsky，文档页脚署名PrimeBits。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '如果你在Chrome或Firefox中阅读外语网站，并希望有一款免费开源的翻译器，由你决定文本发送给云服务、通过设备上的Bergamot处理，还是发送到你自己运行的服务器，Linguist是合适的选择。7.1.0版本较新，离线方案也有文档说明。',
          '需要注意的是默认设置和数据：刚安装时使用Google，7.1.0新增了遥测，而官网称不收集用户数据，许可证文件的说法也不一致。在用它处理隐私文本之前，请先切换翻译模块。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Linguist官网](https://linguister.io/) — 功能、常见问题和平台。',
          '[离线翻译指南](https://linguister.io/docs/guides/OfflineTranslation) — Bergamot和LibreTranslate的设置。',
          '[GitHub仓库](https://github.com/translate-tools/linguist) — README、LICENSE文件和源代码。',
          '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — 安装包和7.1.0版本发布说明。',
          '[Firefox附加组件页面](https://addons.mozilla.org/addon/linguist-translator/) — 所列版本、权限和许可证。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[On-Device AI Translator评测](/zh/power-local-llm/on-device-ai-translator-review) — 在设备上运行语言模型的iPhone翻译应用。',
          '[TranslateBooksWithLLMs评测](/zh/power-local-llm/translate-books-with-llms-review) — 用Ollama或云端模型翻译书籍和文档。',
          '[Sablate评测](/zh/power-local-llm/sablate-review) — 在电脑上用Whisper和Argos翻译生成离线字幕。',
          '[完整的Local LLM Software Directory](/zh/directory) — 涵盖各平台本地AI工具的更广泛目录。',
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
    heroImage: '/images/linguister-review-hero-es.webp',
    title: 'Reseña de Linguist: traductor de navegador de código abierto con modo sin conexión',
    seoTitle: 'Reseña de Linguist: traductor web con modo sin conexión',
    intro: 'Linguist (sitio linguister.io) es una extensión de navegador gratuita y de código abierto para Chrome y Firefox que traduce páginas completas, texto seleccionado, subtítulos y mensajes. Una instalación nueva envía el texto a un traductor en la nube, pero la extensión también incluye un traductor sin conexión y puede conectarse a servidores locales como LibreTranslate u Ollama. Esta reseña resume lo que dicen el sitio, la documentación, la ficha de Firefox y el repositorio de GitHub, dónde empieza y termina la parte local y qué sigue poco claro. No hubo pruebas prácticas.',
    metaDescription: 'Reseña de Linguist: extensión gratuita de código abierto para traducir en Chrome y Firefox, modo sin conexión, nube por defecto, telemetría. Sin probar.',
    twitterDescription: 'Reseña de Linguist: traductor de páginas gratuito y de código abierto para Chrome y Firefox con modo sin conexión opcional y servidores locales. Privacidad, límites y alternativas.',
    audience: 'Usuarios de Chrome y Firefox que quieren traducir páginas web y texto sin depender por defecto de un servicio en la nube — cubre qué se ejecuta en local, la configuración, la privacidad, los límites y las alternativas.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Linguist review',
    targetKeywords: [
      'reseña linguist',
      'linguister',
      'traductor de navegador sin conexión',
      'extensión de traducción de código abierto',
      'traducción en navegador bergamot',
      'traductor de páginas privado chrome firefox',
      'extensión de navegador libretranslate',
    ],
    current_hardware_mentioned: [
      'Chrome',
      'Firefox',
      'GPU NVIDIA (opcional, para un servidor LibreTranslate local)',
    ],
    leadAnswerBlock: '**Linguist es una extensión de traducción gratuita y de código abierto para Chrome y Firefox que solo es local si tú lo eliges:** el traductor Bergamot integrado se ejecuta en tu dispositivo, mientras que el traductor activo desde la instalación es un servicio gratuito de Google. Encaja con quienes leen sitios en otros idiomas y están dispuestos a cambiar un ajuste.',
    quickAnswerTop: {
      es: {
        question: '¿Linguist traduce en mi dispositivo?',
        answer: 'Solo después de activarlo. Según la documentación, el traductor sin conexión integrado, llamado Bergamot, traduce en el dispositivo y se elige como módulo de traducción en la página de preferencias. Las notas de la versión 7.1.0 dicen que el predeterminado es un traductor gratuito de Google, así que una instalación nueva envía el texto a Google.',
        bullets: [
          'Traduce páginas completas con atajo o regla, texto seleccionado, texto escrito, subtítulos en Netflix y en videollamadas, y mensajes privados.',
          'Lee en voz alta el original y la traducción y guarda un historial y un diccionario personal que, según el sitio, funciona sin conexión.',
          'Los traductores personalizados conectan servicios en la nube como ChatGPT, DeepL, DeepSeek y Gemini, o locales como Ollama y LibreTranslate.',
          'No ofrece traducción de imágenes, por decisión de sus autores.',
          'Chrome y Firefox desde las tiendas; otros navegadores mediante instalación manual desde GitHub Releases.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: 'Respuesta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'Conseguir Linguist',
        anchor: 'get-it',
      },
      {
        label: 'Linguist de un vistazo',
        anchor: 'at-a-glance',
      },
      {
        label: 'Qué es Linguist',
        anchor: 'what-is-linguist',
      },
      {
        label: 'Primeros pasos',
        anchor: 'how-to-get-started',
      },
      {
        label: 'Funciones',
        anchor: 'features',
      },
      {
        label: 'Traductores y modo sin conexión',
        anchor: 'translators-offline',
      },
      {
        label: 'Privacidad, licencia y coste',
        anchor: 'privacy',
      },
      {
        label: 'Equilibrio: ventajas y limitaciones',
        anchor: 'tradeoffs',
      },
      {
        label: 'Linguist frente a alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Quién debería usar Linguist',
        anchor: 'who-should-use',
      },
      {
        label: 'Quién no debería usar Linguist',
        anchor: 'who-should-not-use',
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
        id: 'key-takeaways',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Linguist es una extensión de navegador gratuita y de código abierto que traduce páginas y texto en la nube por defecto y en tu dispositivo cuando eliges su traductor sin conexión integrado.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un botón de traducir con una rueda: una posición envía las palabras a Google y otra las mantiene en tu ordenador o en un servidor que ejecutas tú.',
          },
        ],
        items: [
          'Afirmación local: el traductor sin conexión Bergamot viene integrado y es opcional; los servidores locales se conectan con módulos de traductor personalizados; cualquier opción en la nube envía el texto fuera.',
          'Licencia y autor: código abierto, desarrollado por Robert Vitonsky según el archivo LICENSE, con el código en la organización de GitHub translate-tools.',
          'Precio: gratis según el sitio, que pide donaciones.',
          'Mantenimiento: la versión 7.1.0 salió el 7 de agosto de 2026 y la rama principal se actualizó por última vez el 4 de septiembre de 2026, así que el proyecto sigue en desarrollo.',
          'Carencias: sin traducción de imágenes, telemetría añadida en 7.1.0 aunque el sitio dice no recopilar datos de usuario, y una ficha de Firefox que mostraba una versión anterior.',
        ],
      },
      getItLinguist: {
        id: 'get-it',
        title: 'Conseguir Linguist',
        content: [
          '**Linguist se instala desde las tiendas de navegadores, sin necesidad de terminal.** Elige la tienda de tu navegador o descarga un paquete de la página de versiones de GitHub para otros navegadores.',
        ],
        columns: [
          'Plataforma',
          'Dónde conseguirla',
        ],
        rows: [
          {
            Plataforma: 'Chrome',
            'Dónde conseguirla': '[Instalar en Chrome](https://chrome.google.com/webstore/detail/gbefmodhlophhakmoecijeppjblibmie) — enlace a Chrome Web Store desde el sitio oficial',
          },
          {
            Plataforma: 'Firefox',
            'Dónde conseguirla': '[Instalar en Firefox](https://addons.mozilla.org/addon/linguist-translator/) — complementos de Firefox',
          },
          {
            Plataforma: 'Otros navegadores',
            'Dónde conseguirla': '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — paquetes zip, .crx y .xpi para instalación manual',
          },
          {
            Plataforma: 'Configuración sin conexión',
            'Dónde conseguirla': '[Guía de traducción sin conexión](https://linguister.io/docs/guides/OfflineTranslation) — Bergamot viene integrado; LibreTranslate funciona con Docker',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': '[linguister.io](https://linguister.io/)',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirla': '[github.com/translate-tools/linguist](https://github.com/translate-tools/linguist) — código abierto',
          },
        ],
        note: 'PromptQuorum no encontró una página de política de privacidad aparte en el sitio. La ficha de Firefox mostraba la versión 7.0.5 al comprobarla el 13 de noviembre de 2026, así que la versión de una tienda puede ir por detrás de la de GitHub. En Android, el README describe Firefox Nightly con una colección de complementos personalizada.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Linguist de un vistazo',
        columns: [
          'Atributo',
          'Linguist',
        ],
        rows: [
          {
            Atributo: 'Plataforma',
            Linguist: 'Extensión para Chrome y Firefox; otros navegadores con instalación manual',
          },
          {
            Atributo: 'Precio',
            Linguist: 'Gratis; se piden donaciones',
          },
          {
            Atributo: 'Licencia',
            Linguist: 'Código abierto; GPL-3.0 según package.json, BSD-3-Clause según el archivo LICENSE',
          },
          {
            Atributo: 'Ejecución',
            Linguist: 'Traductores en la nube por defecto; Bergamot sin conexión en el dispositivo como opción; servidores locales opcionales',
          },
          {
            Atributo: 'Idiomas',
            Linguist: '130 según el README; más de 100 según el sitio (no verificado)',
          },
          {
            Atributo: 'Uso sin conexión',
            Linguist: 'Traductor sin conexión y diccionario, según el sitio',
          },
          {
            Atributo: 'Traducción de imágenes',
            Linguist: 'No ofrecida, según el sitio',
          },
          {
            Atributo: 'Telemetría',
            Linguist: 'Añadida en 7.1.0; según el autor, sin datos personales ni textos',
          },
        ],
        note: 'Un dato que falta en el sitio significa desconocido, no no compatible.',
      },
      whatIsLinguist: {
        id: 'what-is-linguist',
        title: 'Qué es Linguist',
        content: [
          '**Linguist es una extensión de navegador que sustituye el botón de traducir del navegador por un sistema de traducción configurable.** Traduce páginas completas con un atajo o reglas automáticas, texto seleccionado, texto escrito, subtítulos y mensajes privados, lee las traducciones en voz alta y guarda entradas en un diccionario personal.',
          'El producto se llama Linguist, su sitio es linguister.io y el código está en la organización de GitHub translate-tools; el archivo LICENSE nombra a Robert Vitonsky como titular de los derechos y el pie de la documentación nombra a PrimeBits. Otras herramientas comparten el nombre Linguist; esta reseña cubre solo linguister.io.',
          'La reseña se basa en el sitio, la documentación, la ficha de Firefox, el repositorio de GitHub y las notas de versión. La calidad de traducción, la velocidad y la estabilidad no se probaron y no se valoran aquí.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La puesta en marcha es una instalación y un ajuste.** Los pasos siguen el sitio y la guía sin conexión.',
        ],
        numberedItems: [
          {
            title: 'Instalar la extensión',
            whyItMatters: 'Añádela desde Chrome Web Store o los complementos de Firefox, o instala un paquete de GitHub Releases en modo desarrollador.',
          },
          {
            title: 'Abrir las preferencias',
            whyItMatters: 'Elige el módulo de traducción. Una instalación nueva usa un traductor gratuito de Google, según las notas de la versión 7.1.0; Bergamot y los traductores personalizados se eligen aquí.',
          },
          {
            title: 'Traducir',
            whyItMatters: 'Usa el atajo para una página, selecciona texto y pulsa el botón de traducir, o escribe en la ventana de la barra de herramientas; pasa el cursor sobre el texto traducido para ver el original.',
          },
          {
            title: 'Opcional: ejecutar un servidor local',
            whyItMatters: 'Para LibreTranslate, sigue la guía: inicia el contenedor de Docker, espera a que se descarguen los modelos y añade después el traductor personalizado LibreTranslate en los ajustes.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**Las funciones giran en torno a traducir lo que lees en el navegador.** Todo lo siguiente procede del sitio, la documentación y el README.',
        ],
        items: [
          '**Traducción de páginas.** Un atajo o reglas automáticas por idioma de la página o dominio; la extensión solo cambia nodos de texto, así que el diseño se mantiene, y también funciona en páginas tras un inicio de sesión.',
          '**Texto seleccionado y escrito.** Aparece un botón de traducir sobre el texto seleccionado y la ventana admite texto escrito.',
          '**Subtítulos y mensajes.** Subtítulos en Netflix y en videollamadas, y mensajes privados; el sitio también menciona traducción en tiempo real en Zoom, Google Meet y Microsoft Teams.',
          '**Voz.** El original y la traducción pueden leerse en voz alta; la documentación describe módulos de síntesis de voz personalizados.',
          '**Historial y diccionario.** Cada traducción se guarda en un historial con búsqueda y las entradas importantes pasan a un diccionario personal.',
          '**Servicios integrados.** El sitio cita Google, Yandex y Microsoft; según las notas de la versión 7.1.0, el traductor de Microsoft ya no funciona.',
        ],
      },
      translators: {
        id: 'translators-offline',
        title: 'Traductores y modo sin conexión',
        content: [
          '**El traductor sin conexión es Bergamot, integrado desde la versión 5.0.** Según la documentación, se elige como módulo de traducción en la página de preferencias, y según el sitio la traducción se hace entonces en el dispositivo y funciona sin conexión. El README nombra el proyecto Bergamot de browsermt. PromptQuorum no comprobó qué pares de idiomas cubre ni cómo se compara su calidad con la de los servicios en la nube.',
          '**Los servidores locales son la segunda vía.** Un módulo de traductor personalizado conecta Linguist con cualquier servicio que despliegues. La guía muestra LibreTranslate en Docker, donde los modelos se descargan en el primer inicio y una GPU NVIDIA es opcional, y el sitio nombra Ollama. Servicios en la nube como ChatGPT, DeepL, DeepSeek y Gemini se conectan igual y reciben el texto.',
          '**Comportamiento por defecto.** Según las notas de la versión 7.1.0, el predeterminado es un traductor gratuito de Google con cambio automático a otro traductor cuando el preferido falla; las notas dicen que ese cambio no se activa para quienes usan Bergamot o un servicio personalizado. No se indica ningún requisito de RAM ni de GPU para la propia extensión.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y coste',
        content: [
          '**Lo que sale de tu equipo depende del traductor que elijas.** Con un traductor en la nube, incluido el predeterminado, el texto de la página o de la selección va a ese proveedor. Con Bergamot o un servidor que tú ejecutas, el sitio dice que el texto se queda en tu dispositivo o tu red.',
          '**La telemetría llegó con la versión 7.1.0.** Según las notas de versión, recoge eventos básicos de interacción y errores de traductor y «no recopila datos personales ni textos». El código fuente del repositorio envía nombres de eventos como page translation changed o settings updated, un identificador aleatorio guardado en la extensión, el idioma del navegador y el agente de usuario a un servidor en events.vitonsky.net. El sitio y el README siguen diciendo que la extensión no recopila datos de usuario, y ambas afirmaciones no están conciliadas. PromptQuorum no encontró ningún interruptor en las notas de versión y no lo buscó en la aplicación.',
          '**Permisos, licencia y coste.** La ficha de Firefox de la versión 7.0.5 muestra acceso a todos los sitios web, que la traducción de páginas necesita, además de almacenamiento, pestañas, menús contextuales y scripts. El archivo LICENSE del repositorio es BSD-3-Clause mientras que package.json y la ficha de Firefox dicen GPL-3.0; la diferencia no está resuelta. La extensión es gratuita y el sitio pide donaciones.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Equilibrio: ventajas y limitaciones',
        columns: [
          'Ventaja',
          'Qué significa en el uso real',
          'Limitación / advertencia',
        ],
        rows: [
          {
            Ventaja: 'Traductor sin conexión integrado',
            'Qué significa en el uso real': 'Páginas y texto pueden traducirse en el dispositivo, incluso sin conexión.',
            'Limitación / advertencia': 'Opcional; el predeterminado es un traductor de Google, y la cobertura de idiomas y la calidad sin conexión no se comprobaron.',
          },
          {
            Ventaja: 'Elección del servicio de traducción',
            'Qué significa en el uso real': 'Google, Yandex, DeepL, ChatGPT, Ollama, LibreTranslate o tu propio módulo.',
            'Limitación / advertencia': 'Los servidores locales requieren configuración; las opciones en la nube envían el texto fuera.',
          },
          {
            Ventaja: 'Gratuita y de código abierto',
            'Qué significa en el uso real': 'El sitio la llama gratuita y el código es público.',
            'Limitación / advertencia': 'Los archivos de licencia se contradicen y se piden donaciones.',
          },
          {
            Ventaja: 'Todo en uno',
            'Qué significa en el uso real': 'Páginas, selecciones, texto escrito, subtítulos, mensajes, voz y un diccionario en una sola extensión.',
            'Limitación / advertencia': 'No traduce el texto dentro de imágenes, por diseño.',
          },
          {
            Ventaja: 'Diccionario e historial sin conexión',
            'Qué significa en el uso real': 'Las palabras guardadas siguen disponibles sin conexión.',
            'Limitación / advertencia': 'PromptQuorum no encontró ninguna sincronización descrita.',
          },
          {
            Ventaja: 'Desarrollo activo',
            'Qué significa en el uso real': 'La versión 7.1.0 salió el 7 de agosto de 2026.',
            'Limitación / advertencia': 'Añadió telemetría, y según las notas de versión su traductor de Microsoft ya no funciona.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Linguist frente a alternativas',
        content: [
          'Estas son las herramientas de traducción más cercanas del directorio: un traductor para iPhone que ejecuta modelos en el dispositivo y una herramienta para traducir libros y documentos enteros.',
        ],
        columns: [
          'App',
          'Plataformas',
          'Precio y licencia',
          'Papel',
          'Diferencia clave',
        ],
        rows: [
          {
            App: 'Linguist',
            Plataformas: 'Chrome, Firefox',
            'Precio y licencia': 'Gratis, código abierto',
            Papel: 'Traducción de páginas web y texto',
            'Diferencia clave': 'Bergamot sin conexión integrado; nube por defecto',
          },
          {
            App: '[On-Device AI Translator](/es/power-local-llm/on-device-ai-translator-review)',
            Plataformas: 'iPhone',
            'Precio y licencia': 'Freemium, código cerrado',
            Papel: 'Traducción en el teléfono',
            'Diferencia clave': 'Ejecuta modelos de lenguaje en el teléfono; sin integración con el navegador',
          },
          {
            App: '[TranslateBooksWithLLMs](/es/power-local-llm/translate-books-with-llms-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio y licencia': 'Gratis, AGPL-3.0',
            Papel: 'Traducción de libros y documentos',
            'Diferencia clave': 'Usa Ollama o modelos de lenguaje en la nube',
          },
        ],
        note: 'Las plataformas, precios y funciones de las apps de terceros cambian con frecuencia. Verifica los detalles actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Linguist',
        items: [
          '**Lectores de sitios en otros idiomas.** Un atajo o una regla traduce páginas completas.',
          '**Lectores atentos a la privacidad dispuestos a cambiar un ajuste.** Bergamot o un servidor local mantiene el texto de tu lado, según la documentación.',
          '**Estudiantes de idiomas y viajeros.** El diccionario funciona sin conexión y las traducciones pueden leerse en voz alta.',
          '**Quienes alojan sus propios servicios.** LibreTranslate u Ollama se conectan mediante módulos de traductor personalizados.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Linguist',
        items: [
          '**Quien quiera procesamiento local desde el principio.** Una instalación nueva usa un traductor de Google.',
          '**Quien no quiera ninguna telemetría.** La versión 7.1.0 la añadió y en las notas no se encontró ningún interruptor.',
          '**Quien necesite traducir texto dentro de imágenes.** El sitio dice que no es compatible.',
          '**Usuarios de otros navegadores.** Fuera de Chrome y Firefox hace falta una instalación manual en modo desarrollador.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Linguist funciona sin conexión?',
            a: 'Según el sitio, el traductor sin conexión y el diccionario funcionan sin conexión una vez que eliges Bergamot como módulo de traducción. PromptQuorum no lo probó sin conexión.',
          },
          {
            q: '¿Se envía mi texto a Google?',
            a: 'Con el traductor predeterminado, sí. Con Bergamot o un servidor local, la documentación dice que el texto se queda de tu lado. La telemetría es otra cuestión y se trata en la privacidad.',
          },
          {
            q: '¿Linguist es realmente gratuita?',
            a: 'El sitio la llama gratuita y de código abierto y pide donaciones; PromptQuorum no encontró ningún plan de pago.',
          },
          {
            q: '¿Puedo usar Ollama o mi propio modelo?',
            a: 'Sí, mediante un módulo de traductor personalizado. El sitio nombra Ollama y LibreTranslate, y el autor mantiene una lista de enlaces de traductores en el repositorio linguist-translators.',
          },
          {
            q: '¿Quién hace Linguist?',
            a: 'El código está en la organización de GitHub translate-tools; el archivo LICENSE nombra a Robert Vitonsky y el pie de la documentación nombra a PrimeBits.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Linguist encaja si lees sitios en otros idiomas en Chrome o Firefox y quieres un traductor gratuito y de código abierto donde decides si el texto va a un servicio en la nube, pasa por Bergamot en tu dispositivo o va a un servidor que ejecutas tú. La versión 7.1.0 es reciente y la vía sin conexión está documentada.',
          'Las reservas son el valor predeterminado y los datos: una instalación nueva usa Google, la telemetría llegó con 7.1.0 junto a un sitio que dice no recopilar datos de usuario, y los archivos de licencia se contradicen. Cambia el módulo de traducción antes de fiarte de ella para texto privado.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio de Linguist](https://linguister.io/) — funciones, preguntas frecuentes y plataformas.',
          '[Guía de traducción sin conexión](https://linguister.io/docs/guides/OfflineTranslation) — configuración de Bergamot y LibreTranslate.',
          '[Repositorio de GitHub](https://github.com/translate-tools/linguist) — README, archivo LICENSE y código fuente.',
          '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — paquetes y notas de la versión 7.1.0.',
          '[Ficha de complementos de Firefox](https://addons.mozilla.org/addon/linguist-translator/) — versión listada, permisos y licencia.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de On-Device AI Translator](/es/power-local-llm/on-device-ai-translator-review) — un traductor para iPhone que ejecuta modelos de lenguaje en el dispositivo.',
          '[Reseña de TranslateBooksWithLLMs](/es/power-local-llm/translate-books-with-llms-review) — traducir libros y documentos con Ollama o modelos en la nube.',
          '[Reseña de Sablate](/es/power-local-llm/sablate-review) — subtítulos sin conexión con Whisper y traducción Argos en el ordenador.',
          '[El Local LLM Software Directory completo](/es/directory) — un directorio más amplio de herramientas de IA local en todas las plataformas.',
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
    heroImage: '/images/linguister-review-hero-pt.webp',
    title: 'Análise do Linguist: tradutor de navegador de código aberto com modo offline',
    seoTitle: 'Análise do Linguist: tradutor web com modo offline',
    intro: 'O Linguist (site linguister.io) é uma extensão de navegador gratuita e de código aberto para Chrome e Firefox que traduz páginas inteiras, texto selecionado, legendas e mensagens. Uma instalação nova envia o texto a um tradutor na nuvem, mas a extensão também tem um tradutor offline integrado e pode se conectar a servidores locais como LibreTranslate ou Ollama. Esta análise resume o que dizem o site, a documentação, a página do Firefox e o repositório do GitHub, onde a parte local começa e termina e o que continua pouco claro. Não houve teste prático.',
    metaDescription: 'Análise do Linguist: extensão de tradução gratuita e de código aberto para Chrome e Firefox, modo offline, nuvem por padrão e telemetria. Não testado.',
    twitterDescription: 'Análise do Linguist: tradutor de páginas gratuito e de código aberto para Chrome e Firefox com modo offline opcional e servidores locais. Privacidade, limites e alternativas.',
    audience: 'Usuários de Chrome e Firefox que querem traduzir páginas e textos sem depender por padrão de um serviço na nuvem — cobre o que roda localmente, configuração, privacidade, limites e alternativas.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Linguist review',
    targetKeywords: [
      'análise linguist',
      'linguister',
      'tradutor de navegador offline',
      'extensão de tradução de código aberto',
      'tradução no navegador bergamot',
      'tradutor de páginas privado chrome firefox',
      'extensão de navegador libretranslate',
    ],
    current_hardware_mentioned: [
      'Chrome',
      'Firefox',
      'GPU NVIDIA (opcional, para um servidor LibreTranslate local)',
    ],
    leadAnswerBlock: '**O Linguist é uma extensão de tradução gratuita e de código aberto para Chrome e Firefox que só é local quando você escolhe:** o tradutor Bergamot integrado roda no seu dispositivo, enquanto o tradutor ativo logo após a instalação é um serviço gratuito do Google. Serve a quem lê sites em outros idiomas e aceita mudar uma configuração.',
    quickAnswerTop: {
      pt: {
        question: 'O Linguist traduz no meu dispositivo?',
        answer: 'Só depois de ativado. Segundo a documentação, o tradutor offline integrado, chamado Bergamot, traduz no dispositivo e é escolhido como módulo de tradução na página de preferências. As notas da versão 7.1.0 dizem que o padrão é um tradutor gratuito do Google, então uma instalação nova envia o texto ao Google.',
        bullets: [
          'Traduz páginas inteiras por atalho ou regra, texto selecionado, texto digitado, legendas na Netflix e em videochamadas, e mensagens privadas.',
          'Lê em voz alta o original e a tradução e mantém um histórico e um dicionário pessoal que, segundo o site, funciona offline.',
          'Tradutores personalizados conectam serviços na nuvem como ChatGPT, DeepL, DeepSeek e Gemini, ou locais como Ollama e LibreTranslate.',
          'Não oferece tradução de imagens, por escolha dos próprios autores.',
          'Chrome e Firefox pelas lojas; outros navegadores por instalação manual a partir do GitHub Releases.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: 'Resposta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'Obter o Linguist',
        anchor: 'get-it',
      },
      {
        label: 'Linguist em resumo',
        anchor: 'at-a-glance',
      },
      {
        label: 'O que é o Linguist',
        anchor: 'what-is-linguist',
      },
      {
        label: 'Primeiros passos',
        anchor: 'how-to-get-started',
      },
      {
        label: 'Recursos',
        anchor: 'features',
      },
      {
        label: 'Tradutores e modo offline',
        anchor: 'translators-offline',
      },
      {
        label: 'Privacidade, licença e custo',
        anchor: 'privacy',
      },
      {
        label: 'Prós e contras',
        anchor: 'tradeoffs',
      },
      {
        label: 'Linguist e as alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Para quem o Linguist serve',
        anchor: 'who-should-use',
      },
      {
        label: 'Para quem o Linguist não serve',
        anchor: 'who-should-not-use',
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
        label: 'Leitura relacionada',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Linguist é uma extensão de navegador gratuita e de código aberto que traduz páginas e texto na nuvem por padrão e no seu dispositivo quando você escolhe o tradutor offline integrado.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em um botão de traduzir com um seletor: uma posição envia as palavras ao Google, outra as mantém no seu computador ou em um servidor que você mesmo executa.',
          },
        ],
        items: [
          'Afirmação local: o tradutor offline Bergamot vem integrado e é opcional; servidores locais se conectam por módulos de tradutor personalizados; qualquer escolha na nuvem envia o texto para fora.',
          'Licença e autor: código aberto, desenvolvido por Robert Vitonsky segundo o arquivo LICENSE, com o código na organização do GitHub translate-tools.',
          'Preço: gratuito segundo o site, que pede doações.',
          'Manutenção: a versão 7.1.0 saiu em 7 de agosto de 2026 e o ramo principal foi atualizado pela última vez em 4 de setembro de 2026, então o projeto continua em desenvolvimento.',
          'Lacunas: sem tradução de imagens, telemetria adicionada na 7.1.0 embora o site diga não coletar dados de usuários, e uma página do Firefox que mostrava uma versão mais antiga.',
        ],
      },
      getItLinguist: {
        id: 'get-it',
        title: 'Obter o Linguist',
        content: [
          '**O Linguist se instala pelas lojas de navegadores, sem precisar de terminal.** Escolha a loja do seu navegador ou baixe um pacote da página de versões do GitHub para outros navegadores.',
        ],
        columns: [
          'Plataforma',
          'Onde obter',
        ],
        rows: [
          {
            Plataforma: 'Chrome',
            'Onde obter': '[Instalar no Chrome](https://chrome.google.com/webstore/detail/gbefmodhlophhakmoecijeppjblibmie) — link da Chrome Web Store no site oficial',
          },
          {
            Plataforma: 'Firefox',
            'Onde obter': '[Instalar no Firefox](https://addons.mozilla.org/addon/linguist-translator/) — extensões do Firefox',
          },
          {
            Plataforma: 'Outros navegadores',
            'Onde obter': '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — pacotes zip, .crx e .xpi para instalação manual',
          },
          {
            Plataforma: 'Configuração offline',
            'Onde obter': '[Guia de tradução offline](https://linguister.io/docs/guides/OfflineTranslation) — o Bergamot vem integrado; o LibreTranslate roda via Docker',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[linguister.io](https://linguister.io/)',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': '[github.com/translate-tools/linguist](https://github.com/translate-tools/linguist) — código aberto',
          },
        ],
        note: 'O PromptQuorum não encontrou uma página de política de privacidade separada no site. A página do Firefox mostrava a versão 7.0.5 na verificação de 13 de novembro de 2026, então a versão de uma loja pode ficar atrás da do GitHub. No Android, o README descreve o Firefox Nightly com uma coleção de extensões personalizada.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Linguist em resumo',
        columns: [
          'Atributo',
          'Linguist',
        ],
        rows: [
          {
            Atributo: 'Plataforma',
            Linguist: 'Extensão para Chrome e Firefox; outros navegadores por instalação manual',
          },
          {
            Atributo: 'Preço',
            Linguist: 'Gratuito; doações solicitadas',
          },
          {
            Atributo: 'Licença',
            Linguist: 'Código aberto; GPL-3.0 segundo o package.json, BSD-3-Clause segundo o arquivo LICENSE',
          },
          {
            Atributo: 'Execução',
            Linguist: 'Tradutores na nuvem por padrão; Bergamot offline no dispositivo como opção; servidores locais opcionais',
          },
          {
            Atributo: 'Idiomas',
            Linguist: '130 segundo o README; mais de 100 segundo o site (não verificado)',
          },
          {
            Atributo: 'Uso offline',
            Linguist: 'Tradutor offline e dicionário, segundo o site',
          },
          {
            Atributo: 'Tradução de imagens',
            Linguist: 'Não oferecida, segundo o site',
          },
          {
            Atributo: 'Telemetria',
            Linguist: 'Adicionada na 7.1.0; segundo o autor, sem dados pessoais nem textos',
          },
        ],
        note: 'Uma informação ausente no site significa desconhecido, não sem suporte.',
      },
      whatIsLinguist: {
        id: 'what-is-linguist',
        title: 'O que é o Linguist',
        content: [
          '**O Linguist é uma extensão de navegador que substitui o botão de traduzir do navegador por um sistema de tradução configurável.** Ele traduz páginas inteiras por atalho ou regras automáticas, texto selecionado, texto digitado, legendas e mensagens privadas, lê as traduções em voz alta e salva entradas em um dicionário pessoal.',
          'O produto se chama Linguist, seu site é linguister.io e o código fica na organização do GitHub translate-tools; o arquivo LICENSE cita Robert Vitonsky como titular dos direitos e o rodapé da documentação cita a PrimeBits. Outras ferramentas usam o nome Linguist; esta análise cobre apenas linguister.io.',
          'A análise se baseia no site, na documentação, na página do Firefox, no repositório do GitHub e nas notas de versão. Qualidade de tradução, velocidade e estabilidade não foram testadas e não são avaliadas aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração é uma instalação e uma preferência.** Os passos seguem o site e o guia offline.',
        ],
        numberedItems: [
          {
            title: 'Instalar a extensão',
            whyItMatters: 'Adicione-a pela Chrome Web Store ou pelas extensões do Firefox, ou instale um pacote do GitHub Releases no modo desenvolvedor.',
          },
          {
            title: 'Abrir as preferências',
            whyItMatters: 'Escolha o módulo de tradução. Uma instalação nova usa um tradutor gratuito do Google, segundo as notas da versão 7.1.0; o Bergamot e os tradutores personalizados são escolhidos aqui.',
          },
          {
            title: 'Traduzir',
            whyItMatters: 'Use o atalho para uma página, selecione texto e pressione o botão de traduzir, ou digite na janela da barra de ferramentas; passe o cursor sobre o texto traduzido para ver o original.',
          },
          {
            title: 'Opcional: executar um servidor local',
            whyItMatters: 'Para o LibreTranslate, siga o guia: inicie o contêiner Docker, aguarde o download dos modelos e depois adicione o tradutor personalizado LibreTranslate nas configurações.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**Os recursos giram em torno de traduzir o que você lê no navegador.** Tudo abaixo vem do site, da documentação e do README.',
        ],
        items: [
          '**Tradução de páginas.** Um atalho ou regras automáticas por idioma da página ou domínio; a extensão altera apenas nós de texto, então o layout permanece, e também funciona em páginas atrás de login.',
          '**Texto selecionado e digitado.** Um botão de traduzir aparece sobre o texto selecionado e a janela aceita texto digitado.',
          '**Legendas e mensagens.** Legendas na Netflix e em videochamadas, e mensagens privadas; o site também menciona tradução em tempo real no Zoom, Google Meet e Microsoft Teams.',
          '**Voz.** O original e a tradução podem ser lidos em voz alta; a documentação descreve módulos personalizados de síntese de voz.',
          '**Histórico e dicionário.** Cada tradução é salva em um histórico pesquisável e as entradas importantes vão para um dicionário pessoal.',
          '**Serviços integrados.** O site cita Google, Yandex e Microsoft; segundo as notas da versão 7.1.0, o tradutor da Microsoft não funciona mais.',
        ],
      },
      translators: {
        id: 'translators-offline',
        title: 'Tradutores e modo offline',
        content: [
          '**O tradutor offline é o Bergamot, integrado desde a versão 5.0.** Segundo a documentação, você o escolhe como módulo de tradução na página de preferências, e segundo o site a tradução passa então a ocorrer no dispositivo e funciona sem conexão. O README cita o projeto Bergamot da browsermt. O PromptQuorum não verificou quais pares de idiomas ele cobre nem como sua qualidade se compara à dos serviços na nuvem.',
          '**Servidores locais são o segundo caminho.** Um módulo de tradutor personalizado conecta o Linguist a qualquer serviço que você implante. O guia mostra o LibreTranslate no Docker, em que os modelos são baixados na primeira inicialização e uma GPU NVIDIA é opcional, e o site cita o Ollama. Serviços na nuvem como ChatGPT, DeepL, DeepSeek e Gemini se conectam do mesmo jeito e recebem o texto.',
          '**Comportamento padrão.** Segundo as notas da versão 7.1.0, o padrão é um tradutor gratuito do Google com troca automática para outro tradutor quando o preferido está fora do ar; as notas dizem que essa troca não é ativada para quem usa o Bergamot ou um serviço personalizado. Nenhum requisito de RAM ou GPU é indicado para a extensão em si.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custo',
        content: [
          '**O que sai do seu computador depende do tradutor escolhido.** Com um tradutor na nuvem, inclusive o padrão, o texto da página ou da seleção vai para esse provedor. Com o Bergamot ou um servidor que você executa, o site diz que o texto fica no seu dispositivo ou na sua rede.',
          '**A telemetria chegou com a versão 7.1.0.** Segundo as notas de versão, ela coleta eventos básicos de interação e erros de tradutores e «não coleta dados pessoais nem textos». O código-fonte no repositório envia nomes de eventos como page translation changed ou settings updated, um identificador aleatório guardado na extensão, o idioma do navegador e o user agent para um servidor em events.vitonsky.net. O site e o README ainda dizem que a extensão não coleta dados de usuários, e as duas afirmações não foram conciliadas. O PromptQuorum não encontrou um interruptor nas notas de versão e não o procurou no aplicativo.',
          '**Permissões, licença e custo.** A página do Firefox para a versão 7.0.5 mostra acesso a todos os sites, necessário para a tradução de páginas, além de armazenamento, abas, menus de contexto e scripts. O arquivo LICENSE do repositório é BSD-3-Clause, enquanto o package.json e a página do Firefox dizem GPL-3.0; a diferença não está resolvida. A extensão é gratuita e o site pede doações.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: [
          'Vantagem',
          'O que significa na prática',
          'Limitação / ressalva',
        ],
        rows: [
          {
            Vantagem: 'Tradutor offline integrado',
            'O que significa na prática': 'Páginas e texto podem ser traduzidos no dispositivo, mesmo sem conexão.',
            'Limitação / ressalva': 'Opcional; o padrão é um tradutor do Google, e a cobertura de idiomas e a qualidade offline não foram verificadas.',
          },
          {
            Vantagem: 'Escolha do serviço de tradução',
            'O que significa na prática': 'Google, Yandex, DeepL, ChatGPT, Ollama, LibreTranslate ou seu próprio módulo.',
            'Limitação / ressalva': 'Servidores locais exigem configuração; escolhas na nuvem enviam o texto para fora.',
          },
          {
            Vantagem: 'Gratuito e de código aberto',
            'O que significa na prática': 'O site o chama de gratuito e o código é público.',
            'Limitação / ressalva': 'Os arquivos de licença se contradizem e doações são solicitadas.',
          },
          {
            Vantagem: 'Tudo em um',
            'O que significa na prática': 'Páginas, seleções, texto digitado, legendas, mensagens, voz e um dicionário em uma só extensão.',
            'Limitação / ressalva': 'Não traduz texto dentro de imagens, por escolha de projeto.',
          },
          {
            Vantagem: 'Dicionário e histórico offline',
            'O que significa na prática': 'As palavras salvas continuam disponíveis sem conexão.',
            'Limitação / ressalva': 'O PromptQuorum não encontrou sincronização descrita.',
          },
          {
            Vantagem: 'Desenvolvimento ativo',
            'O que significa na prática': 'A versão 7.1.0 saiu em 7 de agosto de 2026.',
            'Limitação / ressalva': 'Ela adicionou telemetria, e segundo as notas de versão seu tradutor da Microsoft não funciona mais.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Linguist e as alternativas',
        content: [
          'Estas são as ferramentas de tradução mais próximas do diretório: um tradutor para iPhone que executa modelos no dispositivo e uma ferramenta para traduzir livros e documentos inteiros.',
        ],
        columns: [
          'App',
          'Plataformas',
          'Preço e licença',
          'Função',
          'Diferença principal',
        ],
        rows: [
          {
            App: 'Linguist',
            Plataformas: 'Chrome, Firefox',
            'Preço e licença': 'Gratuito, código aberto',
            'Função': 'Tradução de páginas web e texto',
            'Diferença principal': 'Bergamot offline integrado; nuvem por padrão',
          },
          {
            App: '[On-Device AI Translator](/pt/power-local-llm/on-device-ai-translator-review)',
            Plataformas: 'iPhone',
            'Preço e licença': 'Freemium, código fechado',
            'Função': 'Tradução no celular',
            'Diferença principal': 'Executa modelos de linguagem no celular; sem integração com o navegador',
          },
          {
            App: '[TranslateBooksWithLLMs](/pt/power-local-llm/translate-books-with-llms-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço e licença': 'Gratuito, AGPL-3.0',
            'Função': 'Tradução de livros e documentos',
            'Diferença principal': 'Usa Ollama ou modelos de linguagem na nuvem',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confira os dados atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Linguist serve',
        items: [
          '**Leitores de sites em outros idiomas.** Um atalho ou uma regra traduz páginas inteiras.',
          '**Leitores atentos à privacidade que aceitam mudar uma configuração.** O Bergamot ou um servidor local mantém o texto do seu lado, segundo a documentação.',
          '**Estudantes de idiomas e viajantes.** O dicionário funciona offline e as traduções podem ser lidas em voz alta.',
          '**Quem hospeda os próprios serviços.** LibreTranslate ou Ollama se conectam por módulos de tradutor personalizados.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Linguist não serve',
        items: [
          '**Quem quer processamento local já na instalação.** Uma instalação nova usa um tradutor do Google.',
          '**Quem não quer nenhuma telemetria.** A versão 7.1.0 a adicionou e nenhum interruptor foi encontrado nas notas.',
          '**Quem precisa traduzir texto dentro de imagens.** O site diz que isso não é suportado.',
          '**Usuários de outros navegadores.** Fora do Chrome e do Firefox é preciso uma instalação manual no modo desenvolvedor.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Linguist funciona offline?',
            a: 'Segundo o site, o tradutor offline e o dicionário funcionam sem conexão depois que você escolhe o Bergamot como módulo de tradução. O PromptQuorum não o testou offline.',
          },
          {
            q: 'Meu texto é enviado ao Google?',
            a: 'Com o tradutor padrão, sim. Com o Bergamot ou um servidor local, a documentação diz que o texto fica do seu lado. A telemetria é outra questão e é tratada em privacidade.',
          },
          {
            q: 'O Linguist é mesmo gratuito?',
            a: 'O site o chama de gratuito e de código aberto e pede doações; o PromptQuorum não encontrou nenhum plano pago.',
          },
          {
            q: 'Posso usar o Ollama ou meu próprio modelo?',
            a: 'Sim, por meio de um módulo de tradutor personalizado. O site cita o Ollama e o LibreTranslate, e o autor mantém uma lista de integrações de tradutores no repositório linguist-translators.',
          },
          {
            q: 'Quem faz o Linguist?',
            a: 'O código está na organização do GitHub translate-tools; o arquivo LICENSE cita Robert Vitonsky e o rodapé da documentação cita a PrimeBits.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O Linguist serve se você lê sites em outros idiomas no Chrome ou no Firefox e quer um tradutor gratuito e de código aberto em que você decide se o texto vai para um serviço na nuvem, passa pelo Bergamot no seu dispositivo ou vai para um servidor que você executa. A versão 7.1.0 é recente e o caminho offline está documentado.',
          'As ressalvas são o padrão e os dados: uma instalação nova usa o Google, a telemetria chegou com a 7.1.0 ao lado de um site que diz não coletar dados de usuários, e os arquivos de licença se contradizem. Troque o módulo de tradução antes de confiar nela para texto privado.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Linguist](https://linguister.io/) — recursos, perguntas frequentes e plataformas.',
          '[Guia de tradução offline](https://linguister.io/docs/guides/OfflineTranslation) — configuração do Bergamot e do LibreTranslate.',
          '[Repositório do GitHub](https://github.com/translate-tools/linguist) — README, arquivo LICENSE e código-fonte.',
          '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — pacotes e notas da versão 7.1.0.',
          '[Página de extensões do Firefox](https://addons.mozilla.org/addon/linguist-translator/) — versão listada, permissões e licença.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Análise do On-Device AI Translator](/pt/power-local-llm/on-device-ai-translator-review) — um tradutor para iPhone que executa modelos de linguagem no dispositivo.',
          '[Análise do TranslateBooksWithLLMs](/pt/power-local-llm/translate-books-with-llms-review) — traduzir livros e documentos com Ollama ou modelos na nuvem.',
          '[Análise do Sablate](/pt/power-local-llm/sablate-review) — legendas offline com Whisper e tradução Argos no computador.',
          '[O diretório completo de software de LLM local](/pt/directory) — um diretório mais amplo de ferramentas de IA local em todas as plataformas.',
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
    heroImage: '/images/linguister-review-hero-ar.webp',
    title: 'مراجعة Linguist: مترجم مفتوح المصدر للمتصفح مع وضع دون اتصال',
    seoTitle: 'مراجعة Linguist: مترجم متصفح بوضع دون اتصال',
    intro: 'Linguist (الموقع linguister.io) إضافة مجانية ومفتوحة المصدر للمتصفحين Chrome وFirefox تترجم الصفحات كاملة والنص المحدد والترجمات المصاحبة والرسائل. تُرسل النسخة المثبتة حديثًا النص إلى مترجم سحابي، لكن الإضافة تضم أيضًا مترجمًا مدمجًا يعمل دون اتصال ويمكنها الاتصال بخوادم محلية مثل LibreTranslate أو Ollama. تلخص هذه المراجعة ما يقوله الموقع والوثائق وصفحة Firefox ومستودع GitHub، وأين يبدأ الجزء المحلي وأين ينتهي، وما يبقى غير واضح. لم يُجرَ اختبار عملي.',
    metaDescription: 'مراجعة Linguist: إضافة ترجمة مجانية ومفتوحة المصدر لـ Chrome وFirefox بوضع دون اتصال مدمج، والسحابة افتراضيًا، وقياس عن بُعد أُضيف حديثًا. لم تُختبر.',
    twitterDescription: 'مراجعة Linguist: مترجم صفحات مجاني ومفتوح المصدر لـ Chrome وFirefox بوضع اختياري دون اتصال ودعم للخوادم المحلية. الخصوصية والحدود والبدائل.',
    audience: 'مستخدمو Chrome وFirefox الذين يريدون ترجمة صفحات الويب والنصوص دون الاعتماد افتراضيًا على خدمة سحابية — تغطي ما يعمل محليًا والإعداد والخصوصية والحدود والبدائل.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Linguist review',
    targetKeywords: [
      'مراجعة linguist',
      'linguister',
      'مترجم متصفح دون اتصال',
      'إضافة ترجمة مفتوحة المصدر',
      'ترجمة المتصفح bergamot',
      'مترجم صفحات خاص chrome firefox',
      'إضافة متصفح libretranslate',
    ],
    current_hardware_mentioned: [
      'Chrome',
      'Firefox',
      'معالج رسومات NVIDIA (اختياري، لخادم LibreTranslate محلي)',
    ],
    leadAnswerBlock: '**Linguist إضافة ترجمة مجانية ومفتوحة المصدر لـ Chrome وFirefox لا تعمل محليًا إلا إذا اخترت ذلك:** مترجم Bergamot المدمج يعمل على جهازك، أما المترجم الافتراضي فهو خدمة Google مجانية. تناسب قراء المواقع الأجنبية الراغبين في تغيير إعداد واحد.',
    quickAnswerTop: {
      ar: {
        question: 'هل يترجم Linguist على جهازي؟',
        answer: 'فقط بعد أن تفعّل ذلك. تقول الوثائق إن المترجم المدمج الذي يعمل دون اتصال، ويُسمى Bergamot، يترجم على الجهاز ويُختار وحدةَ ترجمة من صفحة التفضيلات. وتذكر ملاحظات الإصدار 7.1.0 أن الافتراضي هو مترجم Google مجاني، لذا فإن النسخة المثبتة حديثًا ترسل النص إلى Google.',
        bullets: [
          'يترجم الصفحات كاملة بالاختصار أو بقاعدة، والنص المحدد، والنص المكتوب، والترجمات المصاحبة في Netflix ومكالمات الفيديو، والرسائل الخاصة.',
          'يقرأ النص الأصلي والمترجم بصوت عالٍ ويحتفظ بسجل وقاموس شخصي يعمل دون اتصال بحسب الموقع.',
          'تربط المترجمات المخصصة خدمات سحابية مثل ChatGPT وDeepL وDeepSeek وGemini، أو خدمات محلية مثل Ollama وLibreTranslate.',
          'لا يوفر ترجمة الصور، بقرار من مطوريه.',
          'Chrome وFirefox من المتجرين؛ والمتصفحات الأخرى بتثبيت يدوي من GitHub Releases.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: 'الإجابة السريعة',
        anchor: 'quick-answer',
      },
      {
        label: 'الحصول على Linguist',
        anchor: 'get-it',
      },
      {
        label: 'Linguist في لمحة',
        anchor: 'at-a-glance',
      },
      {
        label: 'ما هو Linguist',
        anchor: 'what-is-linguist',
      },
      {
        label: 'البدء',
        anchor: 'how-to-get-started',
      },
      {
        label: 'الميزات',
        anchor: 'features',
      },
      {
        label: 'المترجمات والوضع دون اتصال',
        anchor: 'translators-offline',
      },
      {
        label: 'الخصوصية والترخيص والتكلفة',
        anchor: 'privacy',
      },
      {
        label: 'المزايا والقيود',
        anchor: 'tradeoffs',
      },
      {
        label: 'Linguist مقابل البدائل',
        anchor: 'vs-alternatives',
      },
      {
        label: 'لمن يناسب Linguist',
        anchor: 'who-should-use',
      },
      {
        label: 'لمن لا يناسب Linguist',
        anchor: 'who-should-not-use',
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
        id: 'key-takeaways',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Linguist إضافة متصفح مجانية ومفتوحة المصدر تترجم الصفحات والنصوص افتراضيًا في السحابة، وعلى جهازك عند اختيار مترجمها المدمج الذي يعمل دون اتصال.',
          },
          {
            type: 'plain-terms',
            text: 'تخيل زر ترجمة بمقبض: وضع واحد يرسل الكلمات إلى Google، ووضع آخر يُبقيها على حاسوبك أو على خادم تشغّله بنفسك.',
          },
        ],
        items: [
          'الادعاء المحلي: مترجم Bergamot المدمج اختياري؛ وتُربط الخوادم المحلية عبر وحدات مترجم مخصصة؛ وأي خيار سحابي يرسل النص إلى الخارج.',
          'الترخيص والمطور: مفتوح المصدر، طوّره Robert Vitonsky بحسب ملف LICENSE، والشيفرة في منظمة GitHub باسم translate-tools.',
          'السعر: مجاني بحسب الموقع الذي يطلب التبرعات.',
          'الصيانة: صدر الإصدار 7.1.0 في 7 أغسطس 2026 وحُدّث الفرع الرئيسي آخر مرة في 4 سبتمبر 2026، فالمشروع ما زال قيد التطوير.',
          'الثغرات: لا ترجمة للصور، وأُضيف قياس عن بُعد في 7.1.0 رغم قول الموقع إنه لا يجمع بيانات المستخدمين، وصفحة Firefox عرضت إصدارًا أقدم.',
        ],
      },
      getItLinguist: {
        id: 'get-it',
        title: 'الحصول على Linguist',
        content: [
          '**يُثبَّت Linguist من متاجر المتصفحات فلا حاجة إلى الطرفية.** اختر متجر متصفحك، أو نزّل حزمة من صفحة إصدارات GitHub للمتصفحات الأخرى.',
        ],
        columns: [
          'المنصة',
          'مصدر الحصول',
        ],
        rows: [
          {
            'المنصة': 'Chrome',
            'مصدر الحصول': '[التثبيت على Chrome](https://chrome.google.com/webstore/detail/gbefmodhlophhakmoecijeppjblibmie) — رابط متجر Chrome الإلكتروني من الموقع الرسمي',
          },
          {
            'المنصة': 'Firefox',
            'مصدر الحصول': '[التثبيت على Firefox](https://addons.mozilla.org/addon/linguist-translator/) — إضافات Firefox',
          },
          {
            'المنصة': 'متصفحات أخرى',
            'مصدر الحصول': '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — حزم zip و.crx و.xpi للتثبيت اليدوي',
          },
          {
            'المنصة': 'الإعداد دون اتصال',
            'مصدر الحصول': '[دليل الترجمة دون اتصال](https://linguister.io/docs/guides/OfflineTranslation) — Bergamot مدمج؛ وLibreTranslate يعمل عبر Docker',
          },
          {
            'المنصة': 'الموقع',
            'مصدر الحصول': '[linguister.io](https://linguister.io/)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مصدر الحصول': '[github.com/translate-tools/linguist](https://github.com/translate-tools/linguist) — مفتوح المصدر',
          },
        ],
        note: 'لم يجد PromptQuorum صفحة سياسة خصوصية منفصلة على الموقع. وعرضت صفحة Firefox الإصدار 7.0.5 عند الفحص في 13 نوفمبر 2026، لذا قد يتأخر إصدار المتجر عن إصدار GitHub. وعلى Android يصف README استخدام Firefox Nightly مع مجموعة إضافات مخصصة.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Linguist في لمحة',
        columns: [
          'الخاصية',
          'Linguist',
        ],
        rows: [
          {
            'الخاصية': 'المنصة',
            Linguist: 'إضافة لـ Chrome وFirefox؛ المتصفحات الأخرى بتثبيت يدوي',
          },
          {
            'الخاصية': 'السعر',
            Linguist: 'مجاني؛ التبرعات مطلوبة',
          },
          {
            'الخاصية': 'الترخيص',
            Linguist: 'مفتوح المصدر؛ GPL-3.0 بحسب package.json وBSD-3-Clause بحسب ملف LICENSE',
          },
          {
            'الخاصية': 'مكان التشغيل',
            Linguist: 'مترجمات سحابية افتراضيًا؛ وBergamot دون اتصال على الجهاز اختياريًا؛ وخوادم محلية اختيارية',
          },
          {
            'الخاصية': 'اللغات',
            Linguist: '130 بحسب README؛ وأكثر من 100 بحسب الموقع (لم يُتحقق منه)',
          },
          {
            'الخاصية': 'الاستخدام دون اتصال',
            Linguist: 'مترجم وقاموس دون اتصال بحسب الموقع',
          },
          {
            'الخاصية': 'ترجمة الصور',
            Linguist: 'غير متاحة بحسب الموقع',
          },
          {
            'الخاصية': 'القياس عن بُعد',
            Linguist: 'أُضيف في 7.1.0؛ ويقول المطور إنه لا يشمل بيانات شخصية أو نصوصًا',
          },
        ],
        note: 'غياب المعلومة عن الموقع يعني أنها غير معروفة، لا أنها غير مدعومة.',
      },
      whatIsLinguist: {
        id: 'what-is-linguist',
        title: 'ما هو Linguist',
        content: [
          '**Linguist إضافة متصفح تستبدل زر الترجمة في المتصفح بنظام ترجمة قابل للضبط.** تترجم الصفحات كاملة بالاختصار أو بقواعد تلقائية، والنص المحدد والنص المكتوب والترجمات المصاحبة والرسائل الخاصة، وتقرأ الترجمات بصوت عالٍ وتحفظ المدخلات في قاموس شخصي.',
          'اسم المنتج Linguist وموقعه linguister.io وشيفرته في منظمة GitHub باسم translate-tools؛ ويذكر ملف LICENSE اسم Robert Vitonsky صاحبًا لحقوق النشر، وتذكر تذييلة الوثائق اسم PrimeBits. وتحمل أدوات أخرى اسم Linguist؛ وتغطي هذه المراجعة linguister.io فقط.',
          'تستند المراجعة إلى الموقع والوثائق وصفحة Firefox ومستودع GitHub وملاحظات الإصدار. لم تُختبر جودة الترجمة ولا السرعة ولا الاستقرار ولا تُقيَّم هنا.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'البدء',
        content: [
          '**الإعداد تثبيت وتفضيل واحد.** تتبع الخطوات الموقع والدليل الخاص بالعمل دون اتصال.',
        ],
        numberedItems: [
          {
            title: 'ثبّت الإضافة',
            whyItMatters: 'أضفها من متجر Chrome الإلكتروني أو إضافات Firefox، أو ثبّت حزمة من GitHub Releases في وضع المطور.',
          },
          {
            title: 'افتح التفضيلات',
            whyItMatters: 'اختر وحدة الترجمة. تستخدم النسخة المثبتة حديثًا مترجم Google مجانيًا بحسب ملاحظات الإصدار 7.1.0؛ وتُختار هنا وحدة Bergamot والمترجمات المخصصة.',
          },
          {
            title: 'ترجم',
            whyItMatters: 'استخدم الاختصار لترجمة صفحة، أو حدد نصًا واضغط زر الترجمة، أو اكتب في نافذة شريط الأدوات؛ ومرّر المؤشر فوق النص المترجم لرؤية الأصل.',
          },
          {
            title: 'اختياري: شغّل خادمًا محليًا',
            whyItMatters: 'لاستخدام LibreTranslate اتبع الدليل: شغّل حاوية Docker وانتظر تنزيل النماذج ثم أضف المترجم المخصص LibreTranslate في الإعدادات.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**تدور الميزات حول ترجمة ما تقرؤه في المتصفح.** كل ما يلي مصدره الموقع والوثائق وREADME.',
        ],
        items: [
          '**ترجمة الصفحات.** باختصار أو بقواعد تلقائية حسب لغة الصفحة أو النطاق؛ وتغيّر الإضافة عقد النص فقط فيبقى التخطيط سليمًا، وتعمل أيضًا على الصفحات خلف تسجيل الدخول.',
          '**النص المحدد والمكتوب.** يظهر زر ترجمة فوق النص المحدد، وتقبل النافذة المنبثقة نصًا مكتوبًا.',
          '**الترجمات المصاحبة والرسائل.** ترجمات Netflix ومكالمات الفيديو المصاحبة والرسائل الخاصة؛ ويذكر الموقع أيضًا ترجمة فورية في Zoom وGoogle Meet وMicrosoft Teams.',
          '**الصوت.** يمكن قراءة النص الأصلي والمترجم بصوت عالٍ؛ وتصف الوثائق وحدات مخصصة لتحويل النص إلى كلام.',
          '**السجل والقاموس.** تُحفظ كل ترجمة في سجل قابل للبحث وتدخل المدخلات المهمة في قاموس شخصي.',
          '**الخدمات المدمجة.** يذكر الموقع Google وYandex وMicrosoft؛ وتقول ملاحظات الإصدار 7.1.0 إن مترجم Microsoft لم يعد يعمل.',
        ],
      },
      translators: {
        id: 'translators-offline',
        title: 'المترجمات والوضع دون اتصال',
        content: [
          '**المترجم الذي يعمل دون اتصال هو Bergamot، وهو مدمج منذ الإصدار 5.0.** تقول الوثائق إنك تختاره وحدةَ ترجمة من صفحة التفضيلات، ويقول الموقع إن الترجمة تجري حينئذ على الجهاز وتعمل دون اتصال. ويذكر README مشروع Bergamot التابع لـ browsermt. لم يتحقق PromptQuorum من أزواج اللغات التي يغطيها ولا من مقارنة جودته بالخدمات السحابية.',
          '**الخوادم المحلية هي الطريق الثاني.** تربط وحدة مترجم مخصصة Linguist بأي خدمة تنشرها بنفسك. يعرض الدليل LibreTranslate داخل Docker، حيث تُنزَّل النماذج عند أول تشغيل ومعالج رسومات NVIDIA اختياري، ويذكر الموقع Ollama. وتُربط الخدمات السحابية مثل ChatGPT وDeepL وDeepSeek وGemini بالطريقة نفسها وتتلقى النص.',
          '**السلوك الافتراضي.** بحسب ملاحظات الإصدار 7.1.0 الافتراضي هو مترجم Google مجاني مع تحويل تلقائي إلى مترجم آخر حين يتعطل المفضل؛ وتقول الملاحظات إن هذا التحويل لا يُفعَّل لمستخدمي Bergamot أو خدمة مخصصة. ولا يُذكر أي متطلب للذاكرة أو لمعالج الرسومات للإضافة نفسها.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**ما يغادر جهازك يعتمد على المترجم الذي تختاره.** مع مترجم سحابي، ومنه الافتراضي، يذهب نص الصفحة أو التحديد إلى ذلك المزوّد. ومع Bergamot أو خادم تشغّله بنفسك يقول الموقع إن النص يبقى على جهازك أو شبكتك.',
          '**وصل القياس عن بُعد مع الإصدار 7.1.0.** تقول ملاحظات الإصدار إنه يجمع أحداث تفاعل أساسية وأخطاء المترجمات و«لا يجمع أي بيانات شخصية أو نصوص». وترسل الشيفرة المصدرية في المستودع أسماء أحداث مثل تغيّر ترجمة الصفحة وتحديث الإعدادات، ومعرّفًا عشوائيًا مخزّنًا في الإضافة، ولغة المتصفح ووكيل المستخدم إلى خادم على events.vitonsky.net. ولا يزال الموقع وREADME يقولان إن الإضافة لا تجمع بيانات المستخدمين، والعبارتان غير متسقتين. لم يجد PromptQuorum مفتاح إيقاف في ملاحظات الإصدار ولم يبحث عنه في التطبيق.',
          '**الأذونات والترخيص والتكلفة.** تعرض صفحة Firefox للإصدار 7.0.5 صلاحية الوصول إلى كل المواقع التي تحتاجها ترجمة الصفحات، إضافة إلى التخزين والعلامات والقوائم السياقية والنصوص البرمجية. ملف LICENSE في المستودع هو BSD-3-Clause بينما يذكر package.json وصفحة Firefox الرخصة GPL-3.0؛ والفرق لم يُحسم. الإضافة مجانية ويطلب الموقع التبرعات.',
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
            'الميزة': 'مترجم مدمج يعمل دون اتصال',
            'ما تعنيه في الاستخدام الفعلي': 'يمكن ترجمة الصفحات والنصوص على الجهاز حتى دون اتصال.',
            'القيد / تنبيه': 'اختياري؛ والافتراضي مترجم Google، ولم تُفحص تغطية اللغات ولا الجودة دون اتصال.',
          },
          {
            'الميزة': 'حرية اختيار الخدمة',
            'ما تعنيه في الاستخدام الفعلي': 'Google أو Yandex أو DeepL أو ChatGPT أو Ollama أو LibreTranslate أو وحدتك الخاصة.',
            'القيد / تنبيه': 'الخوادم المحلية تحتاج إعدادًا؛ والخيارات السحابية ترسل النص إلى الخارج.',
          },
          {
            'الميزة': 'مجاني ومفتوح المصدر',
            'ما تعنيه في الاستخدام الفعلي': 'يصفه الموقع بأنه مجاني والشيفرة علنية.',
            'القيد / تنبيه': 'ملفا الترخيص متعارضان والتبرعات مطلوبة.',
          },
          {
            'الميزة': 'كل شيء في واحد',
            'ما تعنيه في الاستخدام الفعلي': 'صفحات وتحديدات ونصوص مكتوبة وترجمات مصاحبة ورسائل وصوت وقاموس في إضافة واحدة.',
            'القيد / تنبيه': 'لا ترجمة للنص داخل الصور، بحكم التصميم.',
          },
          {
            'الميزة': 'قاموس وسجل دون اتصال',
            'ما تعنيه في الاستخدام الفعلي': 'تبقى الكلمات المحفوظة متاحة دون اتصال.',
            'القيد / تنبيه': 'لم يجد PromptQuorum ميزة مزامنة موصوفة.',
          },
          {
            'الميزة': 'تطوير نشط',
            'ما تعنيه في الاستخدام الفعلي': 'صدر الإصدار 7.1.0 في 7 أغسطس 2026.',
            'القيد / تنبيه': 'أضاف قياسًا عن بُعد، وتقول ملاحظات الإصدار إن مترجم Microsoft فيه لم يعد يعمل.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Linguist مقابل البدائل',
        content: [
          'هذه أقرب أدوات الترجمة في الدليل: مترجم لهاتف iPhone يشغّل النماذج على الجهاز، وأداة لترجمة الكتب والمستندات كاملة.',
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
            'التطبيق': 'Linguist',
            'المنصات': 'Chrome وFirefox',
            'السعر والترخيص': 'مجاني، مفتوح المصدر',
            'الدور': 'ترجمة صفحات الويب والنصوص',
            'الفرق الرئيسي': 'Bergamot دون اتصال مدمج؛ والسحابة افتراضيًا',
          },
          {
            'التطبيق': '[On-Device AI Translator](/ar/power-local-llm/on-device-ai-translator-review)',
            'المنصات': 'iPhone',
            'السعر والترخيص': 'مجاني جزئيًا، مغلق المصدر',
            'الدور': 'الترجمة على الهاتف',
            'الفرق الرئيسي': 'يشغّل نماذج لغوية على الهاتف؛ دون تكامل مع المتصفح',
          },
          {
            'التطبيق': '[TranslateBooksWithLLMs](/ar/power-local-llm/translate-books-with-llms-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر والترخيص': 'مجاني، AGPL-3.0',
            'الدور': 'ترجمة الكتب والمستندات',
            'الفرق الرئيسي': 'يستخدم Ollama أو نماذج لغوية سحابية',
          },
        ],
        note: 'تتغير منصات التطبيقات الخارجية وأسعارها وميزاتها كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Linguist',
        items: [
          '**قراء المواقع الأجنبية.** اختصار أو قاعدة واحدة تترجم الصفحات كاملة.',
          '**القراء المهتمون بالخصوصية والمستعدون لتغيير إعداد.** يُبقي Bergamot أو الخادم المحلي النص لديك بحسب الوثائق.',
          '**متعلمو اللغات والمسافرون.** يعمل القاموس دون اتصال ويمكن قراءة الترجمات بصوت عالٍ.',
          '**من يستضيفون خدماتهم بأنفسهم.** يرتبط LibreTranslate أو Ollama عبر وحدات مترجم مخصصة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Linguist',
        items: [
          '**من يريد معالجة محلية منذ البداية.** تستخدم النسخة المثبتة حديثًا مترجم Google.',
          '**من لا يريد أي قياس عن بُعد.** أضافه الإصدار 7.1.0 ولم يُعثر على مفتاح إيقاف في الملاحظات.',
          '**من يحتاج إلى ترجمة النص داخل الصور.** يقول الموقع إن ذلك غير مدعوم.',
          '**مستخدمو المتصفحات الأخرى.** خارج Chrome وFirefox يلزم تثبيت يدوي في وضع المطور.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Linguist دون اتصال؟',
            a: 'يقول الموقع إن المترجم والقاموس يعملان دون اتصال بعد اختيار Bergamot وحدةَ ترجمة. لم يختبره PromptQuorum دون اتصال.',
          },
          {
            q: 'هل يُرسل نصي إلى Google؟',
            a: 'مع المترجم الافتراضي نعم. ومع Bergamot أو خادم محلي تقول الوثائق إن النص يبقى لديك. والقياس عن بُعد مسألة منفصلة تُعالج في قسم الخصوصية.',
          },
          {
            q: 'هل Linguist مجاني حقًا؟',
            a: 'يصفه الموقع بأنه مجاني ومفتوح المصدر ويطلب التبرعات؛ ولم يجد PromptQuorum أي خطة مدفوعة.',
          },
          {
            q: 'هل يمكنني استخدام Ollama أو نموذجي الخاص؟',
            a: 'نعم، عبر وحدة مترجم مخصصة. يذكر الموقع Ollama وLibreTranslate، ويحتفظ المطور بقائمة روابط المترجمات في مستودع linguist-translators.',
          },
          {
            q: 'من يصنع Linguist؟',
            a: 'الشيفرة في منظمة GitHub باسم translate-tools؛ ويذكر ملف LICENSE اسم Robert Vitonsky وتذكر تذييلة الوثائق اسم PrimeBits.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يناسبك Linguist إذا كنت تقرأ مواقع أجنبية في Chrome أو Firefox وتريد مترجمًا مجانيًا ومفتوح المصدر تقرر فيه هل يذهب النص إلى خدمة سحابية أم يُعالَج عبر Bergamot على جهازك أم يُرسل إلى خادم تشغّله بنفسك. الإصدار 7.1.0 حديث والمسار دون اتصال موثق.',
          'التحفظات تخص الإعداد الافتراضي والبيانات: النسخة المثبتة حديثًا تستخدم Google، ووصل القياس عن بُعد مع 7.1.0 إلى جانب موقع يقول إنه لا يجمع بيانات المستخدمين، وملفا الترخيص متعارضان. بدّل وحدة الترجمة قبل الاعتماد عليه مع نصوص خاصة.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Linguist](https://linguister.io/) — الميزات والأسئلة الشائعة والمنصات.',
          '[دليل الترجمة دون اتصال](https://linguister.io/docs/guides/OfflineTranslation) — إعداد Bergamot وLibreTranslate.',
          '[مستودع GitHub](https://github.com/translate-tools/linguist) — README وملف LICENSE والشيفرة المصدرية.',
          '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — الحزم وملاحظات الإصدار 7.1.0.',
          '[صفحة إضافات Firefox](https://addons.mozilla.org/addon/linguist-translator/) — الإصدار المعروض والأذونات والترخيص.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة On-Device AI Translator](/ar/power-local-llm/on-device-ai-translator-review) — مترجم لهاتف iPhone يشغّل نماذج لغوية على الجهاز.',
          '[مراجعة TranslateBooksWithLLMs](/ar/power-local-llm/translate-books-with-llms-review) — ترجمة الكتب والمستندات عبر Ollama أو نماذج سحابية.',
          '[مراجعة Sablate](/ar/power-local-llm/sablate-review) — ترجمات مصاحبة دون اتصال بـ Whisper وترجمة Argos على الحاسوب.',
          '[دليل Local LLM Software Directory الكامل](/ar/directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلية على كل المنصات.',
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
    heroImage: '/images/linguister-review-hero-ko.webp',
    title: 'Linguist 리뷰: 오프라인 모드를 갖춘 오픈 소스 브라우저 번역 확장',
    seoTitle: 'Linguist 리뷰: 오프라인 모드를 갖춘 번역 확장',
    intro: 'Linguist(웹사이트 linguister.io)는 웹페이지 전체, 선택한 텍스트, 자막, 메시지를 번역하는 Chrome·Firefox용 무료 오픈 소스 브라우저 확장입니다. 설치 직후에는 클라우드 번역 서비스로 텍스트를 보내지만, 오프라인 번역기를 내장하고 있고 LibreTranslate나 Ollama 같은 로컬 서버에도 연결할 수 있습니다. 이 리뷰는 웹사이트, 문서, Firefox 부가 기능 페이지, GitHub 저장소가 밝히는 내용과 로컬 처리의 범위, 불분명한 점을 정리합니다. 직접 테스트는 하지 않았습니다.',
    metaDescription: 'Linguist 리뷰: Chrome·Firefox용 무료 오픈 소스 번역 확장. 오프라인 모드 내장, 기본값은 클라우드, 7.1.0에서 원격 측정 추가. 직접 테스트하지 않았습니다.',
    twitterDescription: 'Linguist 리뷰: Chrome·Firefox용 무료 오픈 소스 페이지 번역 확장. 선택형 오프라인 모드와 로컬 서버 지원. 개인정보 보호, 한계, 대안을 정리했습니다.',
    audience: '클라우드 서비스를 기본으로 쓰지 않고 웹페이지와 텍스트를 번역하려는 Chrome·Firefox 사용자를 위한 글입니다. 로컬에서 실행되는 범위, 설정, 개인정보 보호, 한계, 대안을 다룹니다.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Linguist review',
    targetKeywords: [
      'linguist 리뷰',
      'linguister',
      '오프라인 브라우저 번역기',
      '오픈 소스 번역 확장',
      'bergamot 브라우저 번역',
      '개인정보 보호 페이지 번역 chrome firefox',
      'libretranslate 브라우저 확장',
    ],
    current_hardware_mentioned: [
      'Chrome',
      'Firefox',
      'NVIDIA GPU(선택, 로컬 LibreTranslate 서버용)',
    ],
    leadAnswerBlock: '**Linguist는 Chrome·Firefox용 무료 오픈 소스 번역 확장으로, 사용자가 선택할 때만 로컬로 동작합니다.** 내장 Bergamot 번역기는 사용자의 기기에서 실행되지만, 처음부터 켜져 있는 번역기는 Google의 무료 서비스입니다. 외국어 사이트를 읽으면서 설정 하나를 바꿀 의향이 있는 사람에게 맞습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Linguist는 내 기기에서 번역하나요?',
        answer: '전환한 뒤에만 그렇습니다. 문서에 따르면 내장 오프라인 번역기인 Bergamot은 기기에서 번역하며, 환경설정 페이지에서 번역 모듈로 선택합니다. 7.1.0 릴리스 노트는 기본값이 Google의 무료 번역기라고 밝히므로, 새로 설치하면 텍스트가 Google로 전송됩니다.',
        bullets: [
          '단축키나 규칙으로 페이지 전체를, 그 밖에 선택한 텍스트, 입력한 텍스트, Netflix와 화상 통화 자막, 개인 메시지를 번역합니다.',
          '원문과 번역문을 소리 내어 읽어 주고, 기록과 개인 사전을 저장합니다. 사이트에 따르면 사전은 오프라인에서도 작동합니다.',
          '사용자 지정 번역기로 ChatGPT, DeepL, DeepSeek, Gemini 같은 클라우드 서비스나 Ollama, LibreTranslate 같은 로컬 서비스를 연결할 수 있습니다.',
          '이미지 속 글자 번역은 개발자의 방침에 따라 제공되지 않습니다.',
          'Chrome과 Firefox는 스토어에서 설치하고, 다른 브라우저는 GitHub Releases에서 수동으로 설치합니다.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: '빠른 답변',
        anchor: 'quick-answer',
      },
      {
        label: 'Linguist 받기',
        anchor: 'get-it',
      },
      {
        label: 'Linguist 한눈에 보기',
        anchor: 'at-a-glance',
      },
      {
        label: 'Linguist이란',
        anchor: 'what-is-linguist',
      },
      {
        label: '시작하는 방법',
        anchor: 'how-to-get-started',
      },
      {
        label: '기능',
        anchor: 'features',
      },
      {
        label: '번역기와 오프라인 모드',
        anchor: 'translators-offline',
      },
      {
        label: '개인정보 보호, 라이선스, 비용',
        anchor: 'privacy',
      },
      {
        label: '장점과 한계',
        anchor: 'tradeoffs',
      },
      {
        label: 'Linguist과 대안 비교',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Linguist을 쓰면 좋은 사용자',
        anchor: 'who-should-use',
      },
      {
        label: 'Linguist을 쓰지 말아야 할 사용자',
        anchor: 'who-should-not-use',
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
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Linguist는 무료 오픈 소스 브라우저 확장으로, 페이지와 텍스트를 기본적으로 클라우드에서 번역하고 내장 오프라인 번역기를 고르면 기기에서 번역합니다.',
          },
          {
            type: 'plain-terms',
            text: '다이얼이 달린 번역 버튼을 떠올려 보세요. 한 위치에서는 단어가 Google로 가고, 다른 위치에서는 내 컴퓨터나 직접 운영하는 서버에 머뭅니다.',
          },
        ],
        items: [
          '로컬 주장: Bergamot 오프라인 번역기는 내장되어 있고 선택형이며, 로컬 서버는 사용자 지정 번역 모듈로 연결하고, 클라우드를 고르면 텍스트가 외부로 나갑니다.',
          '라이선스와 개발사: 오픈 소스이며, LICENSE 파일에 따르면 개발자는 Robert Vitonsky이고 코드는 GitHub 조직 translate-tools에 있습니다.',
          '가격: 웹사이트에 따르면 무료이며 기부를 요청합니다.',
          '유지 관리: 7.1.0 버전이 2026년 8월 7일에 나왔고 메인 브랜치는 2026년 9월 4일에 마지막으로 업데이트되어, 프로젝트는 계속 개발되고 있습니다.',
          '한계: 이미지 번역 없음, 사이트는 사용자 데이터를 수집하지 않는다고 하지만 7.1.0에서 원격 측정이 추가되었고, Firefox 페이지에는 더 오래된 버전이 표시되었습니다.',
        ],
      },
      getItLinguist: {
        id: 'get-it',
        title: 'Linguist 받기',
        content: [
          '**Linguist는 브라우저 스토어에서 설치하므로 터미널이 필요 없습니다.** 사용하는 브라우저의 스토어를 고르거나, 다른 브라우저는 GitHub 릴리스 페이지에서 패키지를 내려받으세요.',
        ],
        columns: [
          '플랫폼',
          '받는 곳',
        ],
        rows: [
          {
            '플랫폼': 'Chrome',
            '받는 곳': '[Chrome에 설치](https://chrome.google.com/webstore/detail/gbefmodhlophhakmoecijeppjblibmie) — 공식 사이트가 안내하는 Chrome 웹 스토어 링크',
          },
          {
            '플랫폼': 'Firefox',
            '받는 곳': '[Firefox에 설치](https://addons.mozilla.org/addon/linguist-translator/) — Firefox 부가 기능',
          },
          {
            '플랫폼': '다른 브라우저',
            '받는 곳': '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — zip, .crx, .xpi 패키지를 수동으로 설치',
          },
          {
            '플랫폼': '오프라인 설정',
            '받는 곳': '[오프라인 번역 가이드](https://linguister.io/docs/guides/OfflineTranslation) — Bergamot은 내장되어 있고 LibreTranslate는 Docker로 실행',
          },
          {
            '플랫폼': '공식 사이트',
            '받는 곳': '[linguister.io](https://linguister.io/)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[github.com/translate-tools/linguist](https://github.com/translate-tools/linguist) — 오픈 소스',
          },
        ],
        note: 'PromptQuorum은 웹사이트에서 별도의 개인정보 처리방침 페이지를 찾지 못했습니다. 2026년 11월 13일 확인 시 Firefox 페이지는 7.0.5 버전을 표시했으므로, 스토어 버전이 GitHub 릴리스보다 늦을 수 있습니다. Android의 경우 README는 Firefox Nightly와 사용자 지정 부가 기능 컬렉션을 설명합니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Linguist 한눈에 보기',
        columns: [
          '항목',
          'Linguist',
        ],
        rows: [
          {
            '항목': '플랫폼',
            Linguist: 'Chrome·Firefox 확장, 다른 브라우저는 수동 설치',
          },
          {
            '항목': '가격',
            Linguist: '무료, 기부 요청',
          },
          {
            '항목': '라이선스',
            Linguist: '오픈 소스. package.json은 GPL-3.0, LICENSE 파일은 BSD-3-Clause',
          },
          {
            '항목': '실행 위치',
            Linguist: '기본은 클라우드 번역기, 선택 시 기기에서 Bergamot 오프라인 번역, 로컬 서버도 선택 가능',
          },
          {
            '항목': '언어',
            Linguist: 'README는 130개, 웹사이트는 100개 이상(미검증)',
          },
          {
            '항목': '오프라인 사용',
            Linguist: '웹사이트에 따르면 오프라인 번역기와 사전 사용 가능',
          },
          {
            '항목': '이미지 번역',
            Linguist: '웹사이트에 따르면 미제공',
          },
          {
            '항목': '원격 측정',
            Linguist: '7.1.0에서 추가. 개발자는 개인 데이터나 텍스트는 수집하지 않는다고 설명',
          },
        ],
        note: '사이트에 언급이 없는 항목은 미지원이 아니라 알 수 없다는 뜻입니다.',
      },
      whatIsLinguist: {
        id: 'what-is-linguist',
        title: 'Linguist이란',
        content: [
          '**Linguist는 브라우저의 번역 버튼을 설정 가능한 번역 시스템으로 바꿔 주는 브라우저 확장입니다.** 단축키나 자동 규칙으로 페이지 전체를, 그 밖에 선택한 텍스트, 입력한 텍스트, 자막, 개인 메시지를 번역하고, 번역문을 소리 내어 읽어 주며, 항목을 개인 사전에 저장합니다.',
          '제품 이름은 Linguist, 웹사이트는 linguister.io이며 코드는 GitHub 조직 translate-tools에 있습니다. LICENSE 파일은 저작권자로 Robert Vitonsky를 적고 있고 문서 하단에는 PrimeBits가 표시됩니다. Linguist라는 이름을 쓰는 다른 도구도 있으나, 이 리뷰는 linguister.io만 다룹니다.',
          '이 리뷰는 웹사이트, 문서, Firefox 부가 기능 페이지, GitHub 저장소, 릴리스 노트를 바탕으로 합니다. 번역 품질, 속도, 안정성은 테스트하지 않았으며 여기서 평가하지 않습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 설치와 환경설정 하나로 끝납니다.** 단계는 웹사이트와 오프라인 가이드를 따랐습니다.',
        ],
        numberedItems: [
          {
            title: '확장 설치하기',
            whyItMatters: 'Chrome 웹 스토어나 Firefox 부가 기능에서 추가하거나, GitHub Releases의 패키지를 개발자 모드에서 설치하세요.',
          },
          {
            title: '환경설정 열기',
            whyItMatters: '번역 모듈을 고르세요. 7.1.0 릴리스 노트에 따르면 새로 설치하면 Google의 무료 번역기를 쓰며, Bergamot과 사용자 지정 번역기는 여기서 선택합니다.',
          },
          {
            title: '번역하기',
            whyItMatters: '페이지는 단축키로 번역하고, 텍스트를 선택해 번역 버튼을 누르거나 도구 모음 팝업에 입력하세요. 번역문에 마우스를 올리면 원문이 보입니다.',
          },
          {
            title: '선택: 로컬 서버 실행',
            whyItMatters: 'LibreTranslate는 가이드에 따라 Docker 컨테이너를 시작하고 모델 다운로드를 기다린 뒤, 설정에서 사용자 지정 번역기 LibreTranslate를 추가하세요.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**기능은 브라우저에서 읽는 내용을 번역하는 데 집중되어 있습니다.** 아래 내용은 모두 웹사이트, 문서, README에서 가져왔습니다.',
        ],
        items: [
          '**페이지 번역.** 단축키나 페이지 언어·도메인별 자동 규칙을 쓸 수 있습니다. 텍스트 노드만 바꾸므로 레이아웃이 유지되고, 로그인이 필요한 페이지에서도 작동합니다.',
          '**선택·입력 텍스트.** 선택한 텍스트 위에 번역 버튼이 나타나고, 팝업에서는 입력한 텍스트를 번역할 수 있습니다.',
          '**자막과 메시지.** Netflix와 화상 통화의 자막, 개인 메시지를 지원합니다. 사이트는 Zoom, Google Meet, Microsoft Teams의 실시간 번역도 언급합니다.',
          '**음성.** 원문과 번역문을 소리 내어 읽을 수 있고, 문서에는 사용자 지정 음성 합성 모듈이 설명되어 있습니다.',
          '**기록과 사전.** 모든 번역이 검색 가능한 기록에 저장되고, 중요한 항목은 개인 사전에 추가할 수 있습니다.',
          '**내장 서비스.** 웹사이트에는 Google, Yandex, Microsoft가 나와 있지만, 7.1.0 릴리스 노트에 따르면 Microsoft 번역기는 더 이상 작동하지 않습니다.',
        ],
      },
      translators: {
        id: 'translators-offline',
        title: '번역기와 오프라인 모드',
        content: [
          '**오프라인 번역기는 Bergamot이며 5.0 버전부터 내장되어 있습니다.** 문서에 따르면 환경설정 페이지에서 번역 모듈로 선택하고, 웹사이트에 따르면 그러면 번역이 기기에서 이루어져 연결 없이도 작동합니다. README는 browsermt의 Bergamot 프로젝트를 언급합니다. 어떤 언어 쌍을 지원하는지, 품질이 클라우드 서비스와 어떻게 비교되는지는 PromptQuorum이 확인하지 않았습니다.',
          '**두 번째 길은 로컬 서버입니다.** 사용자 지정 번역 모듈은 직접 배포한 모든 서비스에 Linguist를 연결합니다. 가이드는 Docker의 LibreTranslate를 예로 들며, 모델은 처음 시작할 때 내려받고 NVIDIA GPU는 선택 사항입니다. 웹사이트는 Ollama도 언급합니다. ChatGPT, DeepL, DeepSeek, Gemini 같은 클라우드 서비스도 같은 방식으로 연결되며 텍스트를 받습니다.',
          '**기본 동작.** 7.1.0 릴리스 노트에 따르면 기본값은 Google의 무료 번역기이고, 선호하는 번역기가 멈추면 다른 번역기로 자동 전환됩니다. 다만 Bergamot이나 사용자 지정 서비스를 쓰는 사용자에게는 이 전환이 켜지지 않는다고 적혀 있습니다. 확장 자체의 RAM이나 GPU 요구 사항은 명시되어 있지 않습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호, 라이선스, 비용',
        content: [
          '**내 컴퓨터를 떠나는 것은 선택한 번역기에 따라 다릅니다.** 기본값을 포함한 클라우드 번역기를 쓰면 페이지나 선택 영역의 텍스트가 해당 제공업체로 전송됩니다. Bergamot이나 직접 운영하는 서버를 쓰면 웹사이트에 따라 텍스트는 내 기기나 네트워크에 머뭅니다.',
          '**원격 측정은 7.1.0 버전에서 도입되었습니다.** 릴리스 노트는 기본적인 상호작용 이벤트와 번역기 오류를 수집하며 “개인 데이터나 텍스트는 수집하지 않는다”고 밝힙니다. 저장소의 소스 코드는 페이지 번역 변경, 설정 업데이트 같은 이벤트 이름, 확장 안에 저장된 무작위 ID, 브라우저 언어, 사용자 에이전트를 events.vitonsky.net 서버로 보냅니다. 웹사이트와 README는 여전히 사용자 데이터를 수집하지 않는다고 하며, 두 설명은 서로 조정되어 있지 않습니다. PromptQuorum은 릴리스 노트에서 끄는 스위치를 찾지 못했고 앱에서 찾아보지도 않았습니다.',
          '**권한, 라이선스, 비용.** 7.0.5 버전의 Firefox 페이지에는 페이지 번역에 필요한 모든 웹사이트 접근 권한과 함께 저장소, 탭, 컨텍스트 메뉴, 스크립트 권한이 표시됩니다. 저장소의 LICENSE 파일은 BSD-3-Clause이지만 package.json과 Firefox 페이지는 GPL-3.0이라고 하며, 차이는 해소되지 않았습니다. 확장은 무료이고 웹사이트는 기부를 요청합니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장점과 한계',
        columns: [
          '장점',
          '실제 사용에서의 의미',
          '한계 / 주의점',
        ],
        rows: [
          {
            '장점': '내장 오프라인 번역기',
            '실제 사용에서의 의미': '연결이 없어도 기기에서 페이지와 텍스트를 번역할 수 있습니다.',
            '한계 / 주의점': '선택형이며 기본값은 Google 번역기입니다. 오프라인 지원 언어와 품질은 확인하지 않았습니다.',
          },
          {
            '장점': '번역 엔진 선택',
            '실제 사용에서의 의미': 'Google, Yandex, DeepL, ChatGPT, Ollama, LibreTranslate 또는 직접 만든 모듈을 쓸 수 있습니다.',
            '한계 / 주의점': '로컬 서버는 설정이 필요하고, 클라우드를 고르면 텍스트가 외부로 나갑니다.',
          },
          {
            '장점': '무료 오픈 소스',
            '실제 사용에서의 의미': '웹사이트는 무료라고 하며 코드는 공개되어 있습니다.',
            '한계 / 주의점': '라이선스 파일의 내용이 서로 다르고 기부를 요청합니다.',
          },
          {
            '장점': '올인원 번역',
            '실제 사용에서의 의미': '페이지, 선택 영역, 입력 텍스트, 자막, 메시지, 음성, 사전을 하나의 확장에서 제공합니다.',
            '한계 / 주의점': '이미지 속 텍스트는 설계상 번역하지 않습니다.',
          },
          {
            '장점': '오프라인 사전과 기록',
            '실제 사용에서의 의미': '저장한 단어를 연결 없이도 쓸 수 있습니다.',
            '한계 / 주의점': '동기화 기능에 대한 설명은 찾지 못했습니다.',
          },
          {
            '장점': '활발한 개발',
            '실제 사용에서의 의미': '7.1.0 버전이 2026년 8월 7일에 나왔습니다.',
            '한계 / 주의점': '원격 측정이 추가되었고, 릴리스 노트에 따르면 내장 Microsoft 번역기는 작동하지 않게 되었습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Linguist과 대안 비교',
        content: [
          '디렉터리에서 가장 가까운 번역 도구는 기기에서 모델을 실행하는 iPhone 번역 앱과 책·문서 전체를 번역하는 도구입니다.',
        ],
        columns: [
          '앱',
          '플랫폼',
          '가격과 라이선스',
          '역할',
          '주요 차이',
        ],
        rows: [
          {
            '앱': 'Linguist',
            '플랫폼': 'Chrome, Firefox',
            '가격과 라이선스': '무료, 오픈 소스',
            '역할': '웹페이지와 텍스트 번역',
            '주요 차이': '오프라인 Bergamot 내장, 기본은 클라우드',
          },
          {
            '앱': '[On-Device AI Translator](/ko/power-local-llm/on-device-ai-translator-review)',
            '플랫폼': 'iPhone',
            '가격과 라이선스': '프리미엄 모델, 비공개 소스',
            '역할': '휴대폰 번역',
            '주요 차이': '휴대폰에서 언어 모델 실행, 브라우저 연동 없음',
          },
          {
            '앱': '[TranslateBooksWithLLMs](/ko/power-local-llm/translate-books-with-llms-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격과 라이선스': '무료, AGPL-3.0',
            '역할': '책·문서 번역',
            '주요 차이': 'Ollama 또는 클라우드 언어 모델 사용',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Linguist을 쓰면 좋은 사용자',
        items: [
          '**외국어 웹사이트를 읽는 사람.** 단축키나 규칙 하나로 페이지 전체를 번역합니다.',
          '**설정을 바꿀 의향이 있는 개인정보 중시 사용자.** 문서에 따르면 Bergamot이나 로컬 서버를 쓰면 텍스트가 내 쪽에 머뭅니다.',
          '**언어 학습자와 여행자.** 사전은 오프라인에서 작동하고 번역문을 소리 내어 읽을 수 있습니다.',
          '**직접 서비스를 운영하는 사람.** LibreTranslate나 Ollama를 사용자 지정 번역 모듈로 연결할 수 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Linguist을 쓰지 말아야 할 사용자',
        items: [
          '**처음부터 로컬 처리를 원하는 사람.** 새로 설치하면 Google 번역기를 씁니다.',
          '**원격 측정이 전혀 없기를 바라는 사람.** 7.1.0에서 추가되었고 릴리스 노트에서 끄는 스위치를 찾지 못했습니다.',
          '**이미지 속 텍스트를 번역해야 하는 사람.** 웹사이트는 지원하지 않는다고 밝힙니다.',
          '**다른 브라우저 사용자.** Chrome과 Firefox 외에는 개발자 모드에서 수동으로 설치해야 합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Linguist는 오프라인에서 작동하나요?',
            a: '웹사이트에 따르면 번역 모듈로 Bergamot을 선택하면 오프라인 번역기와 사전이 연결 없이 작동합니다. PromptQuorum은 오프라인에서 테스트하지 않았습니다.',
          },
          {
            q: '내 텍스트가 Google로 전송되나요?',
            a: '기본 번역기에서는 그렇습니다. Bergamot이나 로컬 서버에서는 문서에 따라 텍스트가 내 쪽에 머뭅니다. 원격 측정은 별개의 문제이며 개인정보 항목에서 다룹니다.',
          },
          {
            q: 'Linguist는 정말 무료인가요?',
            a: '웹사이트는 무료 오픈 소스라고 하며 기부를 요청합니다. PromptQuorum은 유료 요금제를 찾지 못했습니다.',
          },
          {
            q: 'Ollama나 내 모델을 쓸 수 있나요?',
            a: '네, 사용자 지정 번역 모듈을 통해 가능합니다. 웹사이트는 Ollama와 LibreTranslate를 언급하며, 개발자는 linguist-translators 저장소에 번역기 연동 목록을 관리합니다.',
          },
          {
            q: 'Linguist는 누가 만드나요?',
            a: '코드는 GitHub 조직 translate-tools에 있으며, LICENSE 파일은 Robert Vitonsky를, 문서 하단은 PrimeBits를 표시합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'Chrome이나 Firefox에서 외국어 사이트를 읽고, 텍스트를 클라우드로 보낼지 기기의 Bergamot으로 처리할지 직접 운영하는 서버로 보낼지 스스로 정할 수 있는 무료 오픈 소스 번역기를 원한다면 Linguist가 맞습니다. 7.1.0 버전은 최신이고 오프라인 경로도 문서화되어 있습니다.',
          '주의할 점은 기본값과 데이터입니다. 새로 설치하면 Google을 쓰고, 사이트가 사용자 데이터를 수집하지 않는다고 하는 가운데 7.1.0에서 원격 측정이 추가되었으며, 라이선스 파일의 내용도 서로 다릅니다. 민감한 텍스트에 쓰기 전에 번역 모듈을 바꾸세요.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Linguist 웹사이트](https://linguister.io/) — 기능, FAQ, 플랫폼.',
          '[오프라인 번역 가이드](https://linguister.io/docs/guides/OfflineTranslation) — Bergamot과 LibreTranslate 설정.',
          '[GitHub 저장소](https://github.com/translate-tools/linguist) — README, LICENSE 파일, 소스 코드.',
          '[GitHub Releases](https://github.com/translate-tools/linguist/releases) — 패키지와 7.1.0 버전 릴리스 노트.',
          '[Firefox 부가 기능 페이지](https://addons.mozilla.org/addon/linguist-translator/) — 표시된 버전, 권한, 라이선스.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[On-Device AI Translator 리뷰](/ko/power-local-llm/on-device-ai-translator-review) — 기기에서 언어 모델을 실행하는 iPhone 번역 앱.',
          '[TranslateBooksWithLLMs 리뷰](/ko/power-local-llm/translate-books-with-llms-review) — Ollama나 클라우드 모델로 책과 문서 번역.',
          '[Sablate 리뷰](/ko/power-local-llm/sablate-review) — 컴퓨터에서 Whisper와 Argos 번역으로 만드는 오프라인 자막.',
          '[전체 Local LLM Software Directory](/ko/directory) — 모든 플랫폼의 로컬 AI 도구를 모은 더 넓은 디렉터리.',
        ],
      },
    },
  },
}

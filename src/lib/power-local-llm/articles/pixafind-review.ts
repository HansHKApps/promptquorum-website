// PixaFind Review: desktop semantic search for files and photos with AI models that run on your own PC
// Slug: pixafind-review
// Companion to: stratosort-review, hyperlink-nexa-review, pixlstash-review
// Facts verified 2026-11-21 against pixafind.com (home, pricing, FAQ, downloads, privacy policy last updated 19 Nov 2026, contact) and GitHub Releases of Ishannaik/pixafind-releases (v0.7.40, 2026-11-21).
// No hands-on test by PromptQuorum. Stale-project warning is OFF (release published 2026-11-21). HQ country not stated by the maker.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/pixafind-review-hero-en.webp',
    title: 'PixaFind Review: Local AI Search for Your Files and Photos',
    seoTitle: 'PixaFind Review: Search Files and Photos by Meaning',
    intro: "PixaFind is a desktop app that finds documents, photos and code by what they mean instead of what they are called, using AI models that, per its website, run on your own computer. You type something like \"sunset at the beach\" or \"the contract with the 90-day notice clause\" and it returns matching files. This review covers the Windows, Mac and Linux builds, pricing, privacy, limits and alternatives; PromptQuorum read the maker's pages and release page but did not test the app.",
    metaDescription: 'PixaFind review: AI file and photo search by meaning for Windows, Mac and Linux, models on your PC per the maker. Free tier, pricing, privacy, limits.',
    twitterDescription: 'PixaFind review: find files and photos by describing them. Local AI search for Windows, Mac and Linux. Free tier, pricing, privacy, limits and alternatives.',
    audience: 'People with large folders of documents, photos and code who want to find files by describing them, without uploading them to a cloud service — covers install, pricing, privacy, limits and alternatives.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'PixaFind review',
    targetKeywords: [
      'pixafind review',
      'pixafind ai file search',
      'semantic file search windows',
      'local ai photo search',
      'search files by meaning offline',
      'ai desktop search windows mac linux',
      'private file search app',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Apple Silicon Mac',
      'Linux PC',
    ],
    leadAnswerBlock: "**PixaFind is a desktop app for Windows, Mac and Linux that finds documents, photos and code by meaning, with AI models that, per the maker, run on your computer and keep your files and index on it.** It has a free tier of 1 folder and 2,000 files and paid Pro, Team and Lifetime plans. The first launch downloads the models, the maker lists analytics and crash reports as on by default but switchable, and PromptQuorum did not test the app.",
    quickAnswerTop: {
      en: {
        question: 'Is PixaFind a local AI file search app?',
        answer: "According to the maker, yes: the website says the AI models run on your hardware and that your files and searches never leave your machine, and the privacy policy says the index is stored on the computer. The models are downloaded once from Hugging Face. The policy also lists usage counts, masked session recordings and crash reports that are on by default and can be switched off in Settings.",
        bullets: [
          'It searches by meaning across 76+ file formats, including PDF, Word, PowerPoint, Excel, EPUB, source code, emails and images.',
          'Free: 1 folder and 2,000 files, no account. Pro is $12 a month ($8 a month billed yearly); Lifetime is $249 once.',
          'Windows 10 or later, Apple Silicon Mac (not yet notarized by Apple) and Linux builds exist; the stated need is 4 GB of RAM and about 2 GB of disk.',
          'The desktop app is closed source, so the privacy claims cannot be checked in code.',
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get PixaFind', anchor: 'get-it' },
      { label: 'PixaFind at a Glance', anchor: 'at-a-glance' },
      { label: 'What PixaFind Is', anchor: 'what-is-pixafind' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features', anchor: 'features' },
      { label: 'Models and Hardware', anchor: 'models-hardware' },
      { label: 'Privacy, License and Cost', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'PixaFind vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use PixaFind', anchor: 'who-should-use' },
      { label: 'Who Should Not Use PixaFind', anchor: 'who-should-not-use' },
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
            text: 'PixaFind is a desktop app that indexes the folders you choose and then finds documents, photos and code from a plain-language description, with AI models that run on your own computer, per the maker.',
          },
          {
            type: 'plain-terms',
            text: 'Think of a search box that understands what you mean, so "photos of the beach at sunset" finds the pictures even if they are called IMG_4821.',
          },
        ],
        items: [
          'Local claim: the models and the index stay on the computer; the model download, update checks, licence sign-in and, unless switched off, analytics and crash reports use the internet.',
          'Maker: PixaLabs; no company address or country is stated on the pages PromptQuorum read.',
          'Maintenance: version 0.7.40 was released on 21 November 2026, so the project is actively developed, but it is still a 0.x version.',
          'Cost: free for 1 folder and 2,000 files; Pro, Team and a $249 Lifetime plan lift the limits.',
          'Gaps: closed source, no hands-on test by PromptQuorum, a Mac build that is not notarized and no mobile app.',
        ],
      },
      getItPixafind: {
        id: 'get-it',
        title: 'Get PixaFind',
        content: [
          '**PixaFind installs like any desktop app, so no terminal is needed on Windows or Linux.** Download the installer for your system from the official site; the AI models are downloaded inside the app on first launch.',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          {
            Platform: 'Windows',
            'Get It': '[Download for Windows](https://pixafind.com/download/win/) — Windows 10 or later, installer',
          },
          {
            Platform: 'Mac',
            'Get It': '[Download for Mac](https://pixafind.com/download/mac/) — Apple Silicon (M1 or newer); not notarized, see the site's note',
          },
          {
            Platform: 'Linux',
            'Get It': '[Download the AppImage](https://pixafind.com/download/linux_appimage/) (x86_64) or the [.deb package](https://pixafind.com/download/linux_deb/) for Ubuntu and Debian',
          },
          {
            Platform: 'Release page',
            'Get It': '[GitHub Releases](https://github.com/Ishannaik/pixafind-releases/releases) — installers, release dates and the update manifest',
          },
          {
            Platform: 'Website',
            'Get It': '[pixafind.com](https://pixafind.com/)',
          },
          {
            Platform: 'Privacy policy',
            'Get It': '[PixaFind privacy policy](https://pixafind.com/privacy/)',
          },
        ],
        note: 'The GitHub repository only hosts the release installers; the desktop app is closed source, per the website.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixaFind at a Glance',
        columns: ['Attribute', 'PixaFind'],
        rows: [
          { Attribute: 'Platform', PixaFind: 'Windows 10+, Apple Silicon Mac, Linux desktop' },
          { Attribute: 'Price', PixaFind: 'Free tier; Pro from $8 a month; $249 Lifetime' },
          { Attribute: 'License', PixaFind: 'Proprietary, closed source' },
          { Attribute: 'Runs', PixaFind: 'On your computer, per the maker; model download needs internet' },
          { Attribute: 'Memory', PixaFind: '4 GB RAM and about 2 GB disk; GPU optional on Windows' },
          { Attribute: 'Input types', PixaFind: '76+ formats: documents, code, emails, images' },
          { Attribute: 'Free limit', PixaFind: '1 folder and 2,000 files, no account' },
          { Attribute: 'Maker', PixaFind: 'PixaLabs' },
        ],
        note: 'A missing statement on the maker\'s site means unknown, not unsupported.',
      },
      whatIsPixafind: {
        id: 'what-is-pixafind',
        title: 'What PixaFind Is',
        content: [
          '**PixaFind is a search app that reads what is inside your files, not just their names.** You choose the folders to index, the app builds an index in the background at low priority, and a search box then returns documents, photos and code that match what you describe. Clicking an image can also find similar images.',
          'It does not chat with your files or reorganize them: it is a finder. If you want a folder sorted and renamed, or a chat over your documents, see the alternatives below.',
          'This review draws on the website, the privacy policy and the GitHub release page. PromptQuorum did not install or test PixaFind, so search quality, speed and the claim of results in under 100 milliseconds once indexed are the maker\'s statements.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an install, a model download and a folder choice.** The steps follow the website and the privacy policy.',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download the installer for your system from the Get PixaFind table above; on a Mac, follow the one-time step the site describes because the build is not notarized.',
          },
          {
            title: 'Let the models download',
            whyItMatters: 'On first launch the app downloads its AI models from Hugging Face, about 2 GB of disk space, which needs internet once.',
          },
          {
            title: 'Choose folders to index',
            whyItMatters: 'Pick only the folders you want searchable; the free tier covers 1 folder and 2,000 files.',
          },
          {
            title: 'Search in plain language',
            whyItMatters: 'Describe the file or photo you want and open the result; check Settings under Data and Privacy to review the optional analytics and crash reports.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The feature set centres on finding files by meaning.** Everything below comes from the maker\'s website and privacy policy.',
        ],
        items: [
          '**Semantic text search.** It reads inside 76+ formats, including PDF, Word, PowerPoint, Excel, EPUB, source code and emails, and matches meaning, not only keywords.',
          '**Image search.** Typing a description such as "sunset at the beach" finds matching photos, and a click on an image finds similar ones.',
          '**Background indexing.** Indexing runs at low priority; a GPU is optional on Windows. Per the maker, searches return in under 100 milliseconds once the index is built.',
          '**Folder control.** You choose which folders are indexed; the index is stored in the app data folder on your computer.',
          '**Several PCs.** Pro covers up to 3 PCs and Lifetime up to 2; Team adds seats with one bill.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Models and Hardware',
        content: [
          '**PixaFind ships its own AI models, downloaded from Hugging Face on first launch.** The website does not name them, so which models are used and how well they search are not documented here.',
          'The stated needs are 4 GB of RAM and about 2 GB of disk space, with the models running on the CPU or, optionally on Windows, the GPU. No speed or accuracy figures were reproduced by PromptQuorum.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**The privacy policy says PixaFind searches your files on your own computer and never uploads your files, photos or what is inside them.** The index stays in the app data folder. The website adds that no API key is needed.',
          'The policy also lists connections the app can make: the one-time model download from Hugging Face, an update check on GitHub (GitHub sees your IP address), and licence activation or sign-in, which sends the licence key, a one-way hash of the machine ID and the operating system. Usage counts (PostHog), masked session recordings (PostHog) and crash reports (Sentry) are on by default, can be switched off under Settings, Data and Privacy, and per the policy contain no search text or file contents. The policy was last updated on 19 November 2026.',
          'The desktop app is closed source, so none of this can be checked in code, and PromptQuorum did not inspect network traffic. Free covers 1 folder and 2,000 files with no account. Pro costs $12 a month or $8 a month billed yearly; Team is $15 per seat a month or $12 billed yearly with 3 seats minimum; Lifetime is $249 once for one person on up to 2 PCs.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            Benefit: 'Models on your computer',
            'What it means in real use': 'Searching can run without internet once the models are downloaded, per the maker.',
            'Limitation / caveat': 'The first download needs internet; PromptQuorum did not inspect network traffic.',
          },
          {
            Benefit: 'Search by meaning',
            'What it means in real use': 'Describe a file or photo instead of remembering its name.',
            'Limitation / caveat': 'Search quality was not tested here and the models are not named.',
          },
          {
            Benefit: 'Free tier',
            'What it means in real use': 'Try it on 1 folder and 2,000 files with no account.',
            'Limitation / caveat': 'Bigger libraries need Pro, Team or Lifetime.',
          },
          {
            Benefit: 'Three desktop systems',
            'What it means in real use': 'Builds exist for Windows, Apple Silicon Mac and Linux.',
            'Limitation / caveat': 'The Mac build is not notarized; no Intel Mac and no mobile app.',
          },
          {
            Benefit: 'Switchable analytics',
            'What it means in real use': 'Usage counts and crash reports can be turned off in Settings.',
            'Limitation / caveat': 'They are on by default, and the model download and update check are not described as switchable.',
          },
          {
            Benefit: 'Active development',
            'What it means in real use': 'Version 0.7.40 shipped on 21 November 2026.',
            'Limitation / caveat': 'Closed source and still a 0.x version, so the track record is short.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixaFind vs. Alternatives',
        content: [
          'These are the closest tools in the directory: one that sorts files and also searches them, one that searches and chats over local files, and one photo library with local AI search.',
        ],
        columns: ['App', 'Platforms', 'Price and license', 'Role', 'Key difference'],
        rows: [
          {
            App: 'PixaFind',
            Platforms: 'Windows, Mac, Linux',
            'Price and license': 'Free tier, proprietary',
            Role: 'Search files and photos by meaning',
            'Key difference': 'Finder only; free tier limited to 1 folder',
          },
          {
            App: '[StratoSort](/power-local-llm/stratosort-review)',
            Platforms: 'Windows, Mac, Linux',
            'Price and license': 'Free noncommercial, PolyForm NC',
            Role: 'File sorting, search and chat',
            'Key difference': 'Also renames and sorts; source-available',
          },
          {
            App: '[Hyperlink (Nexa AI)](/power-local-llm/hyperlink-nexa-review)',
            Platforms: 'Mac, Windows',
            'Price and license': 'Free, proprietary',
            Role: 'Local file search and chat',
            'Key difference': 'Answers questions from files; closed source',
          },
          {
            App: '[PixlStash](/power-local-llm/pixlstash-review)',
            Platforms: 'Windows, Mac, Linux',
            'Price and license': 'Free, GPL-3.0',
            Role: 'Image library with local AI search',
            'Key difference': 'Photos only; tagging and face search',
          },
        ],
        note: "Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project's own page before deciding.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use PixaFind',
        items: [
          '**People who cannot find files by name.** Describe a document or photo instead.',
          '**Privacy-minded desktop users.** The models and index stay on the computer, per the maker, with a free tier to try.',
          '**Windows users first.** The GPU option and the repository description focus on Windows.',
          '**People with mixed folders.** Documents, photos and code are searched in one place.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use PixaFind',
        items: [
          '**Anyone who needs open-source code.** The desktop app is closed source.',
          '**People who want a chat or a file sorter.** PixaFind finds files; it does not chat or reorganize.',
          '**Intel Mac and phone users.** Only Apple Silicon Macs and desktops are covered.',
          '**Anyone who needs zero network use.** Analytics and crash reports are on by default and need to be switched off.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does PixaFind work offline?',
            a: 'The website says yes once the AI models have downloaded. The first launch needs internet for the download, and update checks and licence sign-in also use the network. PromptQuorum did not test it offline.',
          },
          {
            q: 'Is PixaFind free?',
            a: 'There is a free tier for 1 folder and 2,000 files with no account. Pro costs $12 a month or $8 a month billed yearly, and a $249 Lifetime licence is a one-time payment.',
          },
          {
            q: 'Does PixaFind send my files to the cloud?',
            a: 'The privacy policy says it never uploads your files, photos or what is inside them. It lists default-on usage counts, masked session recordings and crash reports that can be switched off in Settings. The app is closed source, so PromptQuorum could not verify this.',
          },
          {
            q: 'Does it run on Mac and Linux?',
            a: 'Yes: an Apple Silicon Mac build (not yet notarized by Apple) and Linux AppImage and .deb builds exist, next to the Windows installer.',
          },
          {
            q: 'Who makes PixaFind?',
            a: 'The website says it is built by PixaLabs. The pages PromptQuorum read give no company address or country.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'PixaFind is a good fit if you want to find documents, photos and code on a Windows, Mac or Linux computer by describing them, with models that, per the maker, run on the machine, and a free tier to try it. It shipped a release on 21 November 2026.',
          'The caveats are closed source, default-on analytics that need switching off, a Mac build that is not notarized, a young 0.x version and claims PromptQuorum could not check. Try the free tier on one folder before indexing your archive.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[PixaFind website](https://pixafind.com/) — features, platforms, pricing and FAQ.',
          '[Privacy policy](https://pixafind.com/privacy/) — data handling, last updated 19 November 2026.',
          '[GitHub Releases](https://github.com/Ishannaik/pixafind-releases/releases) — installer assets and release date of version 0.7.40.',
          '[Contact page](https://pixafind.com/contact/) — maker contact details.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[StratoSort Review](/power-local-llm/stratosort-review) — an app that sorts files by content and adds search and chat.',
          '[Hyperlink (Nexa AI) Review](/power-local-llm/hyperlink-nexa-review) — local file search and chat for Mac and Windows.',
          '[PixlStash Review](/power-local-llm/pixlstash-review) — an image library with local AI search.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local AI tools across platforms.',
        ],
      },
    },
  },
}

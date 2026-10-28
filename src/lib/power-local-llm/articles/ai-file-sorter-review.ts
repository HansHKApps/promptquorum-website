// AI File Sorter Review: Local AI That Renames and Sorts Files
// Slug: ai-file-sorter-review
// Companion to: hyperlink-nexa-review, pixlstash-review
// Sources (all read 2026-10-28, no hands-on testing): filesorter.app (home, download, features, FAQ, pricing, about, changelog, macOS-open pages), the GitHub repo README, CHANGELOG
// and Releases API (hyperfield/ai-file-sorter: v1.9.2 published 2026-08-14, last push 2026-10-19, AGPL-3.0; the release lists no binary assets) and the Microsoft Store listing
// (9npk4dzd6r6s: update 2026-08-14, Windows 10 1809+, memory 750 MB min / 1 GB rec, 6 GB video memory rec; privacy-policy file = one sentence). The request came from the site owner
// (link from localhosted.com), not from the maker: no maker comment exists, no founder-review badge.
// filesorter.app has NO privacy-policy page (/privacy, /privacy-policy, /terms all 404; not in the sitemap). No RAM/VRAM minimum for the local models and no model download sizes
// are documented in README/FAQ/site; the review says so instead of guessing. The core app is free; a paid Windows Explorer extension (Microsoft Store) is a separate add-on.
// Last upstream update 2026-10-19 => no stale warning. Open: which service does the photo GPS place-name lookup; model licences; macOS builds are unsigned.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/ai-file-sorter-review-hero-en.webp',
    title: 'AI File Sorter Review: Local AI That Renames and Sorts Files',
    seoTitle: 'AI File Sorter Review: Local AI Renames and Sorts Files',
    intro:
      'AI File Sorter is a free, open-source desktop app for Windows, macOS and Linux that proposes folders and cleaner file names for messy files, using a built-in local model by default or your own OpenAI or Gemini account. Nothing is moved or renamed until you approve the suggestions. This review reflects its website, README, FAQ, release notes and Microsoft Store listing as checked on 28 October 2026.',
    metaDescription:
      'AI File Sorter review: free AGPL desktop app that suggests folders and file names with local models or your own API key. Install, privacy, undo and limits.',
    twitterDescription:
      'AI File Sorter review: a free, AGPL-licensed desktop app that proposes folders and file names with a local model or your own API key. Installers, hardware, privacy and what we could not verify.',
    audience:
      'People with cluttered Downloads, scan, screenshot or archive folders who want AI suggestions they can review, and who need to know what runs locally, what the sources leave open and how changes can be undone.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'AI File Sorter review',
    targetKeywords: [
      'ai file sorter review',
      'ai file organizer local',
      'rename files with ai offline',
      'ai file sorter gemma local model',
      'organize downloads folder with ai',
      'ai file sorter privacy undo',
    ],
    current_models_mentioned: ['Gemma 3 4B IT', 'Gemma 1.1 7B', 'Mistral 7B', 'LLaVA 1.6 Mistral 7B'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Vulkan', 'Apple Metal'],
    leadAnswerBlock:
      '**AI File Sorter (v1.9.2, released 14 August 2026) is a free, AGPL-3.0 desktop app for Windows, macOS and Linux that suggests folders and new names for messy files, using a local language model by default or, if you choose, your own OpenAI or Gemini account.** It changes nothing until you confirm in a review window, and the README documents a dry run and an undo. PromptQuorum has not run it.',
    quickAnswerTop: {
      en: {
        question: 'Does AI File Sorter work offline without uploading files?',
        answer:
          'Per its README and FAQ, yes when you pick a built-in or custom local model: files, file names, images and metadata stay on your computer and no telemetry is sent. Choosing ChatGPT, Gemini or a custom endpoint needs the internet and your own API account. PromptQuorum has not inspected network traffic.',
        bullets: [
          'Free, AGPL-3.0; installers for Windows 10 or later, macOS and Linux on [filesorter.app](https://filesorter.app/download/).',
          'Local models: Gemma 3 4B IT, Gemma 1.1 7B and Mistral 7B, or your own GGUF file.',
          'Nothing moves until you click Confirm & Sort; a dry run and Edit > Undo last run exist.',
          'Reads PDF, Office and text files, and pictures with a visual model; audio and video are renamed from embedded tags.',
          'No RAM figure is documented for the local models; the FAQ says about 6 GB of video memory speeds up image scanning.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is AI File Sorter?', anchor: 'what-is-ai-file-sorter' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Requirements', anchor: 'requirements' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Key Features', anchor: 'key-features' },
      { label: 'AI Features and Where They Run', anchor: 'ai-features' },
      { label: 'Data Flow and Privacy', anchor: 'privacy' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'What We Could Not Verify', anchor: 'who-should-not-use' },
      { label: 'Competitors and Alternatives', anchor: 'vs-alternatives' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AI File Sorter is an open-source desktop app that asks a local or remote language model to propose folders and file names for the files in a folder you choose, then applies them only after you approve.',
          },
          {
            type: 'plain-terms',
            text: 'You point the app at a messy folder such as Downloads, it suggests where each file belongs and what to call it, and you deselect any you do not want before anything is moved.',
          },
        ],
        items: [
          'Maintenance: the latest release, v1.9.2, came out on 14 August 2026 and the GitHub repository received a push on 19 October 2026, so no stale-project warning applies.',
          'Maker: the website credits HF Studio; the source is on GitHub under the user hyperfield.',
          'Cost: the core app is free; a separate Windows right-click extension is a paid Microsoft Store add-on, and donations are optional.',
          'Scope: it sorts and renames files; it is not a chat app, and the project lists duplicate detection and OCR for scanned PDFs as planned, not available.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the project\'s website, README, FAQ, release notes and Microsoft Store listing, checked on 28 October 2026. PromptQuorum has not installed AI File Sorter, so the quality of its suggestions, its speed and its undo behaviour are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-ai-file-sorter',
        title: 'What Is AI File Sorter?',
        content: [
          '**AI File Sorter is a desktop application that suggests categories, subfolders and cleaner names for the files in a folder you select, and moves or renames them after you confirm.** Its README describes it as a cross-platform tool for content-aware file organization and renaming; the source code is open under the AGPL-3.0 licence.',
          'Rather than relying only on fixed rules, the README says it combines the model\'s suggestions with optional whitelists, recent similar results and your approved review decisions. The website footer credits HF Studio as the publisher.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Get It',
        content: [
          '**AI File Sorter is installed like any desktop program: a Windows installer or portable build, macOS disk images, and Linux packages, all listed on the official download page.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'Windows', 'How to get it': 'Installer or portable build for Windows 10 or later on the [download page](https://filesorter.app/download/)' },
          { 'Option': 'Windows (Store)', 'How to get it': '[Microsoft Store](https://apps.microsoft.com/detail/9npk4dzd6r6s); per the download page, no CUDA support, Vulkan acceleration works' },
          { 'Option': 'macOS', 'How to get it': 'Disk images for Apple Silicon (M2 to M5, and M1) and Intel on the [download page](https://filesorter.app/download/); not signed with an Apple certificate, so [approve it once](https://filesorter.app/download/macos-open/)' },
          { 'Option': 'Linux', 'How to get it': 'Packages for Debian, Ubuntu, Fedora, Rocky and Arch on the [download page](https://filesorter.app/download/)' },
          { 'Option': 'Website', 'How to get it': '[filesorter.app](https://filesorter.app/)' },
          { 'Option': 'Privacy policy', 'How to get it': 'No page on the website; a [one-sentence statement](https://cdn.storeedgefd.dsx.mp.microsoft.com/eus2/privacy-policy-storage/92877400/00013788018020998399/1152921505700233027/privacy_policy_c70aeb11-d00c-4729-8362-6322790ef497.txt) is linked from the Microsoft Store listing' },
          { 'Option': 'Source code', 'How to get it': '[github.com/hyperfield/ai-file-sorter](https://github.com/hyperfield/ai-file-sorter)' },
        ],
        note: 'Version reviewed: v1.9.2, published on 14 August 2026 per the GitHub release; the Microsoft Store listing shows the same update date. The GitHub release lists no downloadable files, so installers come from the website, the Store and SourceForge. No terminal is needed; building from source requires a C++ toolchain and Qt 6.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**No RAM or VRAM minimum for the local models is documented in the README, FAQ or website; the figures that exist describe the app and optional GPU use.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          { 'Item': 'Operating system', 'What the sources say': 'Windows 10 version 1809 or later per the Microsoft Store listing; macOS and Linux builds on the download page. The README says macOS source builds target Apple Silicon on macOS 15 or later, while the download page also lists M1 and Intel disk images' },
          { 'Item': 'Memory', 'What the sources say': 'The Store listing gives 750 MB minimum and 1 GB recommended for the app itself; no figure is given for running the language models' },
          { 'Item': 'GPU', 'What the sources say': 'Optional. CUDA 12.x for NVIDIA or Vulkan 1.2 or later, plus Metal on Apple hardware; the app falls back to the CPU. The README says 8 GB or more of VRAM gives a smoother experience, while 4 GB often means partial offload or CPU fallback' },
          { 'Item': 'Image analysis', 'What the sources say': 'The FAQ says a discrete GPU with about 6 GB or more of video memory makes image scanning much faster, and that it can be much slower on the CPU' },
          { 'Item': 'Models', 'What the sources say': 'Downloaded from the Select LLM dialog into a storage folder you can change; download sizes are not stated in the pages read' },
          { 'Item': 'Hardware check', 'What the sources say': 'A built-in System compatibility check times a small workload and suggests a local model for your machine' },
        ],
        note: 'These figures come from the project and the Store listing; PromptQuorum did not measure memory use or speed on any hardware.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**These steps follow the README\'s "Safe First Run" advice; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download the build for your system from the download page; on macOS, approve the unsigned app once under Privacy & Security.',
          },
          {
            title: 'Choose a model',
            whyItMatters: 'Open Settings, then Select LLM, and download a local model, or enter your own OpenAI or Gemini key or a custom endpoint instead.',
          },
          {
            title: 'Try a small copy first',
            whyItMatters: 'Copy 20 to 50 files into a temporary folder, select it, tick the options you want and click Analyze.',
          },
          {
            title: 'Review, then apply',
            whyItMatters: 'Check the categories and suggested names, optionally run the dry run, click Confirm & Sort, and use Edit, then Undo last run, if you change your mind.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Key Features',
        content: [
          '**Every item below comes from the README, FAQ or website; none has been tested by PromptQuorum.**',
        ],
        items: [
          '**Categorization.** A category and optional subcategory per file, in a More refined or More consistent mode, with named whitelists in which each main category can have its own allowed subcategories.',
          '**Renaming.** Suggested names for pictures and documents, and names built from embedded tags for audio and video, such as year_artist_album_title.mp3; a rename-only mode leaves files in place.',
          '**Safety.** A review table with file previews, a dry run showing From and To paths, a saved undo plan, and project-folder protection that skips Unity, Unreal, Godot, Blender, Git and common source-code projects.',
          '**Memory.** A local SQLite cache and a separate store of your approved decisions, both with clear and reset tools under Settings.',
          '**Folders.** Local folders, synced cloud folders, external drives and mounted network shares; on a NAS you first map a drive letter on Windows or mount the share on Linux and macOS.',
          '**Languages.** Interface languages include German, French, Spanish, Korean and Simplified Chinese; the category and filename language depends on the model, and Gemma 1.1 7B is English-only.',
          '**Windows extension.** An optional paid right-click add-on in the Microsoft Store starts cleanups from File Explorer.',
        ],
        note: 'The project\'s FAQ lists OCR for scanned PDFs, duplicate detection and an include or ignore list for file types as planned, not available.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI Features and Where They Run',
        content: [
          '**A language model reads file names, folder context and, where supported, file contents, and proposes the category and the new name; the model can be local or remote.**',
        ],
        items: [
          '**Local text models.** Gemma 3 4B IT, Gemma 1.1 7B and Mistral 7B are built-in choices, and you can register your own GGUF file; they run on an embedded llama.cpp runtime.',
          '**Documents.** PDF, Word, Excel, PowerPoint, OpenDocument and plain-text formats are read and passed to the selected model; legacy .doc, .xls and .ppt files are not supported.',
          '**Pictures.** Two built-in visual backends, Gemma 3 4B IT as the default and LLaVA 1.6 Mistral 7B, each needing a model file and a matching mmproj file; custom visual models work the same way.',
          '**Audio and video.** Only embedded metadata is used; the FAQ says whole videos are not sent to a vision model.',
          '**Remote options.** ChatGPT with your own OpenAI key, Gemini with your own key, or a custom OpenAI-compatible endpoint such as LM Studio, Ollama or a gateway; the README says keys are stored in the app\'s local config.ini.',
          '**Learning.** Approved decisions are reused as hints in later runs; the README says this does not train or change the model.',
        ],
        note: 'These are the project\'s own statements. PromptQuorum did not test suggestion quality, speed or the model downloads.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The README says that with a local model your files, file names, images and metadata stay on your computer, no telemetry is sent, and an internet connection is needed only for a remote model.** The categorization cache is a local SQLite database next to config.ini that stores directory paths, file names, categories and suggested names.',
          'If you pick OpenAI, Gemini or a custom endpoint, the data goes to that service under your own account, so its policy applies. The only privacy text found for the app itself is a one-sentence statement linked from the Microsoft Store listing: it says no personal data is collected, stored or transmitted and that all processing stays on the device.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the project\'s declarations, not audit results. The website has no privacy page, and the one-sentence statement does not mention the remote-model option, update notifications or model downloads. The README says a cache holds place names looked up from photo GPS data but not which service performs that lookup. PromptQuorum has not inspected network traffic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**People with a cluttered Downloads, scans or screenshots folder** who want suggested folders and names they can approve row by row.',
          '**Privacy-minded users** who prefer a local model and can spare the disk space for model files.',
          '**Owners of external drives or NAS archives** who will mount them first and sort in small batches.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Quality and speed.** Suggestion accuracy, run time and the effect of different hardware were not tested.',
          '**Hardware needs.** No RAM minimum for the local models and no model download sizes appear in the pages read.',
          '**Undo.** The README describes Undo last run as best-effort, skipping conflicts and files that changed; it was not tried.',
          '**Privacy.** Only a one-sentence statement exists; see Data Flow and Privacy.',
          '**macOS.** The builds are not Apple-signed, and the supported macOS versions differ between the README and the download page.',
          '**Model licences.** The licences of the downloadable models were not reviewed.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        content: [
          'The directory has two other local file and image tools with a review, neither of which renames and moves files the same way.',
        ],
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Hyperlink (Nexa AI)](/power-local-llm/hyperlink-nexa-review)', 'Platforms': 'Windows, macOS', 'Price / license': 'Free / Proprietary', 'Key difference': 'Searches and answers questions across your local files instead of renaming or moving them' },
          { 'App': '[PixlStash](/power-local-llm/pixlstash-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / GPL-3.0', 'Key difference': 'Image library manager with local AI tagging and search; covers pictures only' },
        ],
        note: 'Confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What happens if I close AI File Sorter before confirming?',
            a: 'No files change, because analysis only prepares suggestions. The FAQ says saved results may be reused when you analyze the same folder again.',
          },
          {
            q: 'Can I use Ollama or LM Studio with it?',
            a: 'Yes, through the custom OpenAI-compatible option; the FAQ says Ollama is reached through its local server, usually at localhost:11434, and that LM Studio needs a vision-capable model for images.',
          },
          {
            q: 'Can it read scanned PDFs?',
            a: 'Not yet. The FAQ says scanned, image-only PDFs need OCR with another tool first, and that OCR support is planned.',
          },
          {
            q: 'Where are its settings and models stored?',
            a: 'Settings live in %APPDATA%\\AIFileSorter on Windows, ~/Library/Application Support/AIFileSorter on macOS and ~/.config/AIFileSorter on Linux; downloaded models sit in a separate llms folder that can be moved.',
          },
          {
            q: 'Does it keep running in the background?',
            a: 'No. The FAQ describes it as a batch tool you open, run, review and close, and says there is no low-resource or background-throttle mode.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'AI File Sorter is a free, actively updated way to get reviewable folder and filename suggestions for messy files, with a local model as the default and an undo documented. Against that, the sources give no RAM figure for the local models, scanned PDFs and duplicate detection are not supported, the macOS builds are unsigned, the only privacy statement is one sentence long, and none of the quality claims could be checked here. It suits people who want to tidy a folder in small, reviewed batches; anyone who needs guaranteed offline behaviour should confirm it with their own network monitoring.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[AI File Sorter website](https://filesorter.app/) — features, download, pricing, FAQ and changelog pages, checked 28 October 2026.',
          '[AI File Sorter on GitHub](https://github.com/hyperfield/ai-file-sorter) — README, release notes and commit activity, checked 28 October 2026.',
          '[AI File Sorter in the Microsoft Store](https://apps.microsoft.com/detail/9npk4dzd6r6s) — system requirements, update date and privacy statement, checked 28 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Hyperlink (Nexa AI) Review](/power-local-llm/hyperlink-nexa-review) — on-device assistant that searches and answers questions across local files.',
          '[PixlStash Review](/power-local-llm/pixlstash-review) — self-hosted image library manager with local AI tagging.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'AI File Sorter Review: Local AI That Renames and Sorts Files',
      description:
        'AI File Sorter review: a free, open-source desktop app that proposes folders and file names with a local model or your own API key. Installers, requirements, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/ai-file-sorter-review',
      inLanguage: 'en',
      datePublished: '2026-10-28',
      dateModified: '2026-10-28',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Desktop users evaluating an AI tool that renames and sorts files, locally or with their own API key' },
      about: [
        { '@type': 'Thing', name: 'AI File Sorter' },
        { '@type': 'Thing', name: 'AI file organization' },
        { '@type': 'Thing', name: 'Local LLM' },
        { '@type': 'Thing', name: 'File renaming' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/ai-file-sorter-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'AI File Sorter Review', item: 'https://www.promptquorum.com/power-local-llm/ai-file-sorter-review' },
      ],
    },
  },

  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/ai-file-sorter-review-hero-de.webp',
    title: 'AI-File-Sorter-Rezension: lokale KI zum Umbenennen und Sortieren',
    seoTitle: 'AI-File-Sorter-Rezension: lokale KI sortiert Dateien',
    intro:
      'AI File Sorter ist eine kostenlose, quelloffene Desktop-App für Windows, macOS und Linux, die für unordentliche Dateien Ordner und sauberere Dateinamen vorschlägt, standardmäßig mit einem eingebauten lokalen Modell oder mit Ihrem eigenen OpenAI- oder Gemini-Konto. Es wird nichts verschoben oder umbenannt, bevor Sie die Vorschläge bestätigen. Diese Rezension stützt sich auf Website, README, FAQ, Versionshinweise und Microsoft-Store-Eintrag, geprüft am 28. Oktober 2026.',
    metaDescription:
      'AI-File-Sorter-Rezension: kostenlose AGPL-Desktop-App, die Ordner und Dateinamen mit lokalen Modellen oder eigenem API-Schlüssel vorschlägt. Datenschutz.',
    twitterDescription:
      'AI-File-Sorter-Rezension: eine kostenlose, AGPL-lizenzierte Desktop-App, die Ordner und Dateinamen mit einem lokalen Modell oder Ihrem eigenen API-Schlüssel vorschlägt. Installer, Hardware, Datenschutz und was wir nicht überprüfen konnten.',
    audience:
      'Menschen mit überfüllten Ordnern für Downloads, Scans, Screenshots oder Archive, die KI-Vorschläge prüfen möchten und wissen müssen, was lokal läuft, was die Quellen offenlassen und wie sich Änderungen rückgängig machen lassen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'AI File Sorter Rezension',
    targetKeywords: [
      'ai file sorter rezension',
      'ki dateien ordnen lokal',
      'dateien mit ki umbenennen offline',
      'ai file sorter gemma lokales modell',
      'download-ordner mit ki aufräumen',
      'ai file sorter datenschutz rückgängig',
    ],
    current_models_mentioned: ['Gemma 3 4B IT', 'Gemma 1.1 7B', 'Mistral 7B', 'LLaVA 1.6 Mistral 7B'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Vulkan', 'Apple Metal'],
    leadAnswerBlock:
      '**AI File Sorter (v1.9.2, veröffentlicht am 14. August 2026) ist eine kostenlose Desktop-App unter AGPL-3.0 für Windows, macOS und Linux, die für unordentliche Dateien Ordner und neue Namen vorschlägt, standardmäßig mit einem lokalen Sprachmodell oder, wenn Sie es wählen, mit Ihrem eigenen OpenAI- oder Gemini-Konto.** Sie ändert nichts, bevor Sie in einem Prüffenster bestätigen, und die README beschreibt einen Probelauf und eine Rückgängig-Funktion. PromptQuorum hat die App nicht ausgeführt.',
    quickAnswerTop: {
      de: {
        question: 'Läuft AI File Sorter offline, ohne Dateien hochzuladen?',
        answer:
          'Laut README und FAQ ja, wenn Sie ein eingebautes oder eigenes lokales Modell wählen: Dateien, Dateinamen, Bilder und Metadaten bleiben auf Ihrem Computer, und es wird keine Telemetrie gesendet. ChatGPT, Gemini oder ein eigener Endpunkt benötigen Internet und Ihr eigenes API-Konto. PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
        bullets: [
          'Kostenlos, AGPL-3.0; Installer für Windows 10 oder neuer, macOS und Linux auf [filesorter.app](https://filesorter.app/download/).',
          'Lokale Modelle: Gemma 3 4B IT, Gemma 1.1 7B und Mistral 7B oder Ihre eigene GGUF-Datei.',
          'Nichts wird verschoben, bevor Sie auf Confirm & Sort klicken; ein Probelauf und Edit > Undo last run sind vorhanden.',
          'Liest PDF-, Office- und Textdateien sowie Bilder mit einem visuellen Modell; Audio und Video werden anhand eingebetteter Tags umbenannt.',
          'Für die lokalen Modelle ist kein RAM-Wert dokumentiert; laut FAQ beschleunigen etwa 6 GB Grafikspeicher das Scannen von Bildern.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist AI File Sorter?', anchor: 'what-is-ai-file-sorter' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Anforderungen', anchor: 'requirements' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Wichtige Funktionen', anchor: 'key-features' },
      { label: 'KI-Funktionen und wo sie laufen', anchor: 'ai-features' },
      { label: 'Datenfluss und Datenschutz', anchor: 'privacy' },
      { label: 'Für wen sich die Software eignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Wettbewerber und Alternativen', anchor: 'vs-alternatives' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AI File Sorter ist eine quelloffene Desktop-App, die ein lokales oder entferntes Sprachmodell Ordner und Dateinamen für die Dateien eines gewählten Ordners vorschlagen lässt und diese erst nach Ihrer Zustimmung umsetzt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie richten die App auf einen unordentlichen Ordner wie „Downloads“, sie schlägt vor, wohin jede Datei gehört und wie sie heißen sollte, und Sie entfernen die Vorschläge, die Sie nicht wollen, bevor etwas verschoben wird.',
          },
        ],
        items: [
          'Pflege: Das neueste Release, v1.9.2, erschien am 14. August 2026, und das GitHub-Repository erhielt am 19. Oktober 2026 einen Push; eine Warnung vor einem veralteten Projekt entfällt daher.',
          'Hersteller: Die Website nennt HF Studio; der Quellcode liegt auf GitHub beim Nutzer hyperfield.',
          'Kosten: Die Kern-App ist kostenlos; eine separate Windows-Erweiterung für das Kontextmenü ist ein kostenpflichtiges Zusatzangebot im Microsoft Store, Spenden sind freiwillig.',
          'Umfang: Sie sortiert und benennt Dateien um; sie ist keine Chat-App, und das Projekt führt Duplikaterkennung und OCR für gescannte PDFs als geplant, nicht als verfügbar auf.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf Website, README, FAQ, Versionshinweise und Microsoft-Store-Eintrag des Projekts, geprüft am 28. Oktober 2026. PromptQuorum hat AI File Sorter nicht installiert; Qualität der Vorschläge, Geschwindigkeit und Rückgängig-Verhalten werden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-ai-file-sorter',
        title: 'Was ist AI File Sorter?',
        content: [
          '**AI File Sorter ist eine Desktop-Anwendung, die für die Dateien eines gewählten Ordners Kategorien, Unterordner und sauberere Namen vorschlägt und sie nach Ihrer Bestätigung verschiebt oder umbenennt.** Die README beschreibt sie als plattformübergreifendes Werkzeug zum inhaltsbasierten Ordnen und Umbenennen von Dateien; der Quellcode ist unter der Lizenz AGPL-3.0 offen.',
          'Statt sich nur auf feste Regeln zu verlassen, kombiniert die App laut README die Vorschläge des Modells mit optionalen Whitelists, aktuellen ähnlichen Ergebnissen und Ihren bestätigten Prüfentscheidungen. Der Fußbereich der Website nennt HF Studio als Herausgeber.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Bezugsquelle',
        content: [
          '**AI File Sorter wird wie ein gewöhnliches Desktop-Programm installiert: als Windows-Installer oder portable Version, als macOS-Disk-Image und als Linux-Paket, jeweils auf der offiziellen Download-Seite.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          { 'Option': 'Windows', 'Bezug': 'Installer oder portable Version für Windows 10 oder neuer auf der [Download-Seite](https://filesorter.app/download/)' },
          { 'Option': 'Windows (Store)', 'Bezug': '[Microsoft Store](https://apps.microsoft.com/detail/9npk4dzd6r6s); laut Download-Seite ohne CUDA-Unterstützung, Vulkan-Beschleunigung funktioniert' },
          { 'Option': 'macOS', 'Bezug': 'Disk-Images für Apple Silicon (M2 bis M5 sowie M1) und Intel auf der [Download-Seite](https://filesorter.app/download/); nicht mit einem Apple-Zertifikat signiert, daher [einmalig freigeben](https://filesorter.app/download/macos-open/)' },
          { 'Option': 'Linux', 'Bezug': 'Pakete für Debian, Ubuntu, Fedora, Rocky und Arch auf der [Download-Seite](https://filesorter.app/download/)' },
          { 'Option': 'Website', 'Bezug': '[filesorter.app](https://filesorter.app/)' },
          { 'Option': 'Datenschutzerklärung', 'Bezug': 'Keine Seite auf der Website; eine [Erklärung aus einem Satz](https://cdn.storeedgefd.dsx.mp.microsoft.com/eus2/privacy-policy-storage/92877400/00013788018020998399/1152921505700233027/privacy_policy_c70aeb11-d00c-4729-8362-6322790ef497.txt) ist im Microsoft-Store-Eintrag verlinkt' },
          { 'Option': 'Quellcode', 'Bezug': '[github.com/hyperfield/ai-file-sorter](https://github.com/hyperfield/ai-file-sorter)' },
        ],
        note: 'Geprüfte Version: v1.9.2, laut GitHub-Release am 14. August 2026 veröffentlicht; der Microsoft-Store-Eintrag zeigt dasselbe Aktualisierungsdatum. Das GitHub-Release enthält keine herunterladbaren Dateien, die Installer stammen daher von der Website, aus dem Store und von SourceForge. Ein Terminal ist nicht nötig; der Bau aus dem Quellcode erfordert eine C++-Toolchain und Qt 6.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Für die lokalen Modelle ist in README, FAQ und Website weder ein RAM- noch ein VRAM-Minimum dokumentiert; die vorhandenen Angaben beschreiben die App und die optionale GPU-Nutzung.**',
        ],
        columns: ['Punkt', 'Angaben der Quellen'],
        rows: [
          { 'Punkt': 'Betriebssystem', 'Angaben der Quellen': 'Windows 10 Version 1809 oder neuer laut Microsoft-Store-Eintrag; macOS- und Linux-Builds auf der Download-Seite. Die README sagt, macOS-Quellcode-Builds zielten auf Apple Silicon mit macOS 15 oder neuer, während die Download-Seite auch Disk-Images für M1 und Intel aufführt' },
          { 'Punkt': 'Arbeitsspeicher', 'Angaben der Quellen': 'Der Store-Eintrag nennt 750 MB Minimum und 1 GB empfohlen für die App selbst; für den Betrieb der Sprachmodelle wird kein Wert genannt' },
          { 'Punkt': 'GPU', 'Angaben der Quellen': 'Optional. CUDA 12.x für NVIDIA oder Vulkan 1.2 oder neuer, dazu Metal auf Apple-Hardware; die App weicht auf die CPU aus. Laut README bietet 8 GB VRAM oder mehr ein flüssigeres Erlebnis, während 4 GB oft ein teilweises Auslagern oder einen Rückfall auf die CPU bedeuten' },
          { 'Punkt': 'Bildanalyse', 'Angaben der Quellen': 'Laut FAQ macht eine dedizierte GPU mit etwa 6 GB Grafikspeicher oder mehr das Scannen von Bildern deutlich schneller; auf der CPU kann es viel langsamer sein' },
          { 'Punkt': 'Modelle', 'Angaben der Quellen': 'Werden im Dialog „Select LLM“ in einen Speicherordner geladen, den Sie ändern können; Downloadgrößen werden in den gelesenen Seiten nicht genannt' },
          { 'Punkt': 'Hardware-Check', 'Angaben der Quellen': 'Ein eingebauter „System compatibility check“ misst eine kleine Last und schlägt ein lokales Modell für Ihren Rechner vor' },
        ],
        note: 'Diese Angaben stammen vom Projekt und aus dem Store-Eintrag; PromptQuorum hat weder Speicherbedarf noch Geschwindigkeit auf irgendeiner Hardware gemessen.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen dem Rat „Safe First Run“ aus der README; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie auf der Download-Seite die Version für Ihr System herunter; unter macOS geben Sie die nicht signierte App einmalig unter „Datenschutz & Sicherheit“ frei.',
          },
          {
            title: 'Modell wählen',
            whyItMatters: 'Öffnen Sie Settings und dann „Select LLM“ und laden Sie ein lokales Modell, oder tragen Sie stattdessen Ihren eigenen OpenAI- oder Gemini-Schlüssel oder einen eigenen Endpunkt ein.',
          },
          {
            title: 'Zuerst eine kleine Kopie testen',
            whyItMatters: 'Kopieren Sie 20 bis 50 Dateien in einen temporären Ordner, wählen Sie ihn aus, haken Sie die gewünschten Optionen an und klicken Sie auf Analyze.',
          },
          {
            title: 'Prüfen, dann anwenden',
            whyItMatters: 'Prüfen Sie Kategorien und vorgeschlagene Namen, starten Sie optional den Probelauf, klicken Sie auf Confirm & Sort und nutzen Sie bei Bedarf Edit, dann „Undo last run“.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Wichtige Funktionen',
        content: [
          '**Alles Folgende stammt aus README, FAQ oder Website; PromptQuorum hat nichts davon getestet.**',
        ],
        items: [
          '**Kategorisierung.** Eine Kategorie und optional eine Unterkategorie pro Datei, im Modus „More refined“ oder „More consistent“, mit benannten Whitelists, in denen jede Hauptkategorie eigene erlaubte Unterkategorien haben kann.',
          '**Umbenennen.** Vorgeschlagene Namen für Bilder und Dokumente sowie aus eingebetteten Tags gebildete Namen für Audio und Video, etwa year_artist_album_title.mp3; ein reiner Umbenennungsmodus lässt Dateien an Ort und Stelle.',
          '**Sicherheit.** Eine Prüftabelle mit Dateivorschau, ein Probelauf mit Von- und Nach-Pfaden, ein gespeicherter Rückgängig-Plan und ein Schutz für Projektordner, der Unity-, Unreal-, Godot-, Blender-, Git- und gängige Quellcode-Projekte überspringt.',
          '**Gedächtnis.** Ein lokaler SQLite-Cache und ein getrennter Speicher für Ihre bestätigten Entscheidungen, jeweils mit Lösch- und Zurücksetzen-Werkzeugen unter Settings.',
          '**Ordner.** Lokale Ordner, synchronisierte Cloud-Ordner, externe Laufwerke und eingebundene Netzwerkfreigaben; bei einem NAS ordnen Sie unter Windows zuerst einen Laufwerksbuchstaben zu oder binden die Freigabe unter Linux und macOS ein.',
          '**Sprachen.** Zu den Oberflächensprachen gehören Deutsch, Französisch, Spanisch, Koreanisch und vereinfachtes Chinesisch; die Sprache von Kategorien und Dateinamen hängt vom Modell ab, und Gemma 1.1 7B kann nur Englisch.',
          '**Windows-Erweiterung.** Ein optionales, kostenpflichtiges Kontextmenü-Zusatzprogramm im Microsoft Store startet Aufräumläufe aus dem Datei-Explorer.',
        ],
        note: 'Die FAQ des Projekts führt OCR für gescannte PDFs, Duplikaterkennung und eine Ein- oder Ausschlussliste für Dateitypen als geplant, nicht als verfügbar auf.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'KI-Funktionen und wo sie laufen',
        content: [
          '**Ein Sprachmodell liest Dateinamen, Ordnerkontext und, wo unterstützt, Dateiinhalte und schlägt Kategorie und neuen Namen vor; das Modell kann lokal oder entfernt laufen.**',
        ],
        items: [
          '**Lokale Textmodelle.** Gemma 3 4B IT, Gemma 1.1 7B und Mistral 7B sind eingebaute Auswahlmöglichkeiten, und Sie können eine eigene GGUF-Datei registrieren; sie laufen auf einer eingebetteten llama.cpp-Laufzeit.',
          '**Dokumente.** PDF-, Word-, Excel-, PowerPoint-, OpenDocument- und Klartextformate werden gelesen und an das gewählte Modell übergeben; ältere .doc-, .xls- und .ppt-Dateien werden nicht unterstützt.',
          '**Bilder.** Zwei eingebaute visuelle Backends, Gemma 3 4B IT als Standard und LLaVA 1.6 Mistral 7B, die jeweils eine Modelldatei und eine passende mmproj-Datei benötigen; eigene visuelle Modelle funktionieren genauso.',
          '**Audio und Video.** Es werden nur eingebettete Metadaten verwendet; laut FAQ werden ganze Videos nicht an ein Bildmodell gesendet.',
          '**Entfernte Optionen.** ChatGPT mit Ihrem eigenen OpenAI-Schlüssel, Gemini mit Ihrem eigenen Schlüssel oder ein eigener OpenAI-kompatibler Endpunkt wie LM Studio, Ollama oder ein Gateway; laut README werden Schlüssel in der lokalen config.ini der App gespeichert.',
          '**Lernen.** Bestätigte Entscheidungen werden in späteren Läufen als Hinweise wiederverwendet; laut README trainiert oder verändert das das Modell nicht.',
        ],
        note: 'Dies sind Aussagen des Projekts. PromptQuorum hat weder die Qualität der Vorschläge noch Geschwindigkeit oder Modell-Downloads getestet.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Laut README bleiben bei einem lokalen Modell Ihre Dateien, Dateinamen, Bilder und Metadaten auf Ihrem Computer, es wird keine Telemetrie gesendet, und eine Internetverbindung ist nur für ein entferntes Modell nötig.** Der Kategorisierungs-Cache ist eine lokale SQLite-Datenbank neben der config.ini, in der Verzeichnispfade, Dateinamen, Kategorien und vorgeschlagene Namen stehen.',
          'Wenn Sie OpenAI, Gemini oder einen eigenen Endpunkt wählen, gehen die Daten unter Ihrem eigenen Konto an diesen Dienst, es gilt also dessen Datenschutzerklärung. Der einzige für die App selbst gefundene Datenschutztext ist eine Erklärung aus einem Satz, die im Microsoft-Store-Eintrag verlinkt ist: Danach werden keine personenbezogenen Daten erhoben, gespeichert oder übertragen, und die gesamte Verarbeitung bleibt auf dem Gerät.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Erklärungen des Projekts, keine Prüfergebnisse. Die Website hat keine Datenschutzseite, und die Erklärung aus einem Satz erwähnt weder die Option mit entferntem Modell noch Update-Benachrichtigungen oder Modell-Downloads. Die README sagt, ein Cache speichere Ortsnamen, die aus GPS-Daten von Fotos nachgeschlagen wurden, nennt aber nicht, welcher Dienst diese Abfrage ausführt. PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die Software eignet',
        items: [
          '**Menschen mit einem überfüllten Ordner für Downloads, Scans oder Screenshots**, die vorgeschlagene Ordner und Namen Zeile für Zeile bestätigen möchten.',
          '**Datenschutzbewusste Nutzer**, die ein lokales Modell bevorzugen und Speicherplatz für die Modelldateien erübrigen können.',
          '**Besitzer externer Laufwerke oder NAS-Archive**, die diese zuerst einbinden und in kleinen Stapeln sortieren.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Qualität und Geschwindigkeit.** Treffsicherheit der Vorschläge, Laufzeit und der Einfluss unterschiedlicher Hardware wurden nicht getestet.',
          '**Hardwarebedarf.** In den gelesenen Seiten stehen weder ein RAM-Minimum für die lokalen Modelle noch Größen der Modell-Downloads.',
          '**Rückgängig machen.** Die README beschreibt „Undo last run“ als Bestmöglich-Verfahren, das Konflikte und geänderte Dateien überspringt; es wurde nicht ausprobiert.',
          '**Datenschutz.** Es gibt nur eine Erklärung aus einem Satz; siehe Datenfluss und Datenschutz.',
          '**macOS.** Die Builds sind nicht von Apple signiert, und die unterstützten macOS-Versionen unterscheiden sich zwischen README und Download-Seite.',
          '**Modelllizenzen.** Die Lizenzen der herunterladbaren Modelle wurden nicht geprüft.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        content: [
          'Das Verzeichnis enthält zwei weitere lokale Datei- und Bildwerkzeuge mit Rezension, von denen keines Dateien auf dieselbe Weise umbenennt und verschiebt.',
        ],
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          { 'App': '[Hyperlink (Nexa AI)](/de/power-local-llm/hyperlink-nexa-review)', 'Plattformen': 'Windows, macOS', 'Preis / Lizenz': 'Kostenlos / Proprietär', 'Wichtigster Unterschied': 'Durchsucht Ihre lokalen Dateien und beantwortet Fragen dazu, statt sie umzubenennen oder zu verschieben' },
          { 'App': '[PixlStash](/de/power-local-llm/pixlstash-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Kostenlos / GPL-3.0', 'Wichtigster Unterschied': 'Bildbibliotheks-Manager mit lokaler KI-Verschlagwortung und Suche; deckt nur Bilder ab' },
        ],
        note: 'Prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App auf ihrer eigenen Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was passiert, wenn ich AI File Sorter schließe, bevor ich bestätige?',
            a: 'Es ändern sich keine Dateien, denn die Analyse bereitet nur Vorschläge vor. Laut FAQ lassen sich gespeicherte Ergebnisse wiederverwenden, wenn Sie denselben Ordner erneut analysieren.',
          },
          {
            q: 'Kann ich Ollama oder LM Studio damit nutzen?',
            a: 'Ja, über die Option für einen eigenen OpenAI-kompatiblen Endpunkt; laut FAQ wird Ollama über seinen lokalen Server erreicht, meist unter localhost:11434, und LM Studio braucht für Bilder ein Modell mit Bildverständnis.',
          },
          {
            q: 'Kann die App gescannte PDFs lesen?',
            a: 'Noch nicht. Laut FAQ brauchen gescannte, nur aus Bildern bestehende PDFs zuerst OCR mit einem anderen Werkzeug; OCR-Unterstützung ist geplant.',
          },
          {
            q: 'Wo liegen Einstellungen und Modelle?',
            a: 'Die Einstellungen liegen unter Windows in %APPDATA%\\AIFileSorter, unter macOS in ~/Library/Application Support/AIFileSorter und unter Linux in ~/.config/AIFileSorter; heruntergeladene Modelle liegen in einem eigenen Ordner llms, der sich verschieben lässt.',
          },
          {
            q: 'Läuft die App dauerhaft im Hintergrund?',
            a: 'Nein. Die FAQ beschreibt sie als Batch-Werkzeug, das Sie öffnen, ausführen, prüfen und schließen, und nennt weder einen Sparmodus noch eine Hintergrund-Drosselung.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'AI File Sorter ist ein kostenloser, aktiv gepflegter Weg zu prüfbaren Ordner- und Dateinamensvorschlägen für unordentliche Dateien, mit einem lokalen Modell als Standard und einer dokumentierten Rückgängig-Funktion. Dagegen stehen fehlende RAM-Angaben für die lokalen Modelle, nicht unterstützte gescannte PDFs und Duplikaterkennung, nicht signierte macOS-Builds, eine Datenschutzerklärung von nur einem Satz und der Umstand, dass sich keine der Qualitätsangaben hier überprüfen ließ. Die App eignet sich für Menschen, die einen Ordner in kleinen, geprüften Stapeln aufräumen möchten; wer garantiertes Offline-Verhalten braucht, sollte es mit eigener Netzwerküberwachung bestätigen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[AI-File-Sorter-Website](https://filesorter.app/) — Seiten zu Funktionen, Download, Preisen, FAQ und Changelog, geprüft am 28. Oktober 2026.',
          '[AI File Sorter auf GitHub](https://github.com/hyperfield/ai-file-sorter) — README, Versionshinweise und Commit-Aktivität, geprüft am 28. Oktober 2026.',
          '[AI File Sorter im Microsoft Store](https://apps.microsoft.com/detail/9npk4dzd6r6s) — Systemanforderungen, Aktualisierungsdatum und Datenschutzerklärung, geprüft am 28. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Hyperlink-(Nexa-AI)-Rezension](/de/power-local-llm/hyperlink-nexa-review) — Assistent auf dem Gerät, der lokale Dateien durchsucht und Fragen dazu beantwortet.',
          '[PixlStash-Rezension](/de/power-local-llm/pixlstash-review) — selbst gehosteter Bildbibliotheks-Manager mit lokaler KI-Verschlagwortung.',
          '[Local-LLM-Software-Verzeichnis](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },

  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/ai-file-sorter-review-hero-es.webp',
    title: 'Reseña de AI File Sorter: IA local para renombrar y ordenar archivos',
    seoTitle: 'Reseña de AI File Sorter: IA local que ordena archivos',
    intro:
      'AI File Sorter es una aplicación de escritorio gratuita y de código abierto para Windows, macOS y Linux que propone carpetas y nombres de archivo más claros para archivos desordenados, por defecto con un modelo local integrado o con tu propia cuenta de OpenAI o Gemini. No se mueve ni se renombra nada hasta que apruebas las sugerencias. Esta reseña se basa en su sitio web, su README, sus preguntas frecuentes, sus notas de versión y su ficha de Microsoft Store, comprobados el 28 de octubre de 2026.',
    metaDescription:
      'Reseña de AI File Sorter: app de escritorio gratuita AGPL que propone carpetas y nombres con modelos locales o tu clave API. Privacidad y deshacer.',
    twitterDescription:
      'Reseña de AI File Sorter: una aplicación de escritorio gratuita con licencia AGPL que propone carpetas y nombres de archivo con un modelo local o tu propia clave API. Instaladores, hardware, privacidad y lo que no pudimos verificar.',
    audience:
      'Personas con carpetas de descargas, escaneos, capturas de pantalla o archivos históricos desordenadas que quieren sugerencias de IA para revisar, y que necesitan saber qué se ejecuta en local, qué dejan abierto las fuentes y cómo se pueden deshacer los cambios.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña AI File Sorter',
    targetKeywords: [
      'reseña ai file sorter',
      'ia para ordenar archivos en local',
      'renombrar archivos con ia sin conexión',
      'ai file sorter gemma modelo local',
      'ordenar la carpeta de descargas con ia',
      'ai file sorter privacidad deshacer',
    ],
    current_models_mentioned: ['Gemma 3 4B IT', 'Gemma 1.1 7B', 'Mistral 7B', 'LLaVA 1.6 Mistral 7B'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Vulkan', 'Apple Metal'],
    leadAnswerBlock:
      '**AI File Sorter (v1.9.2, publicada el 14 de agosto de 2026) es una aplicación de escritorio gratuita con licencia AGPL-3.0 para Windows, macOS y Linux que sugiere carpetas y nombres nuevos para archivos desordenados, por defecto con un modelo de lenguaje local o, si lo eliges, con tu propia cuenta de OpenAI o Gemini.** No cambia nada hasta que confirmas en una ventana de revisión, y el README documenta una simulación y una función de deshacer. PromptQuorum no la ha ejecutado.',
    quickAnswerTop: {
      es: {
        question: '¿AI File Sorter funciona sin conexión y sin subir archivos?',
        answer:
          'Según su README y sus preguntas frecuentes, sí cuando eliges un modelo local integrado o propio: archivos, nombres, imágenes y metadatos se quedan en tu equipo y no se envía telemetría. ChatGPT, Gemini o un endpoint personalizado requieren internet y tu propia cuenta de API. PromptQuorum no ha inspeccionado el tráfico de red.',
        bullets: [
          'Gratuita, AGPL-3.0; instaladores para Windows 10 o posterior, macOS y Linux en [filesorter.app](https://filesorter.app/download/).',
          'Modelos locales: Gemma 3 4B IT, Gemma 1.1 7B y Mistral 7B, o tu propio archivo GGUF.',
          'Nada se mueve hasta que pulsas Confirm & Sort; existen una simulación y Edit > Undo last run.',
          'Lee archivos PDF, de Office y de texto, e imágenes con un modelo visual; el audio y el vídeo se renombran con las etiquetas incrustadas.',
          'No hay una cifra de RAM documentada para los modelos locales; las preguntas frecuentes dicen que unos 6 GB de memoria de vídeo aceleran el análisis de imágenes.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es AI File Sorter?', anchor: 'what-is-ai-file-sorter' },
      { label: 'Dónde conseguirlo', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones principales', anchor: 'key-features' },
      { label: 'Funciones de IA y dónde se ejecutan', anchor: 'ai-features' },
      { label: 'Flujo de datos y privacidad', anchor: 'privacy' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Lo que no pudimos verificar', anchor: 'who-should-not-use' },
      { label: 'Competidores y alternativas', anchor: 'vs-alternatives' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AI File Sorter es una aplicación de escritorio de código abierto que pide a un modelo de lenguaje local o remoto que proponga carpetas y nombres de archivo para los archivos de una carpeta que eliges, y solo los aplica después de que lo apruebas.',
          },
          {
            type: 'plain-terms',
            text: 'Apuntas la aplicación a una carpeta desordenada como Descargas, ella sugiere dónde va cada archivo y cómo llamarlo, y desmarcas las sugerencias que no quieras antes de que se mueva nada.',
          },
        ],
        items: [
          'Mantenimiento: la última versión, v1.9.2, salió el 14 de agosto de 2026 y el repositorio de GitHub recibió un push el 19 de octubre de 2026, por lo que no se aplica ninguna advertencia de proyecto abandonado.',
          'Responsable: el sitio web menciona a HF Studio; el código fuente está en GitHub bajo el usuario hyperfield.',
          'Coste: la aplicación base es gratuita; una extensión de Windows para el menú contextual es un complemento de pago de Microsoft Store, y las donaciones son opcionales.',
          'Alcance: ordena y renombra archivos; no es una aplicación de chat, y el proyecto indica que la detección de duplicados y el OCR de PDF escaneados están previstos, no disponibles.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web, el README, las preguntas frecuentes, las notas de versión y la ficha de Microsoft Store del proyecto, comprobados el 28 de octubre de 2026. PromptQuorum no ha instalado AI File Sorter, así que no se evalúan la calidad de sus sugerencias, su velocidad ni el comportamiento de deshacer.',
          },
        ],
      },
      overview: {
        id: 'what-is-ai-file-sorter',
        title: '¿Qué es AI File Sorter?',
        content: [
          '**AI File Sorter es una aplicación de escritorio que sugiere categorías, subcarpetas y nombres más claros para los archivos de una carpeta que seleccionas, y los mueve o renombra después de que confirmas.** Su README la describe como una herramienta multiplataforma para organizar y renombrar archivos según su contenido; el código fuente es abierto bajo la licencia AGPL-3.0.',
          'En lugar de depender solo de reglas fijas, según el README combina las sugerencias del modelo con listas blancas opcionales, resultados similares recientes y tus decisiones de revisión aprobadas. El pie de página del sitio web indica a HF Studio como editor.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Dónde conseguirlo',
        content: [
          '**AI File Sorter se instala como cualquier programa de escritorio: instalador o versión portátil para Windows, imágenes de disco para macOS y paquetes para Linux, todos en la página oficial de descargas.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          { 'Opción': 'Windows', 'Cómo conseguirlo': 'Instalador o versión portátil para Windows 10 o posterior en la [página de descargas](https://filesorter.app/download/)' },
          { 'Opción': 'Windows (Store)', 'Cómo conseguirlo': '[Microsoft Store](https://apps.microsoft.com/detail/9npk4dzd6r6s); según la página de descargas, sin soporte de CUDA, la aceleración con Vulkan funciona' },
          { 'Opción': 'macOS', 'Cómo conseguirlo': 'Imágenes de disco para Apple Silicon (M2 a M5, y M1) e Intel en la [página de descargas](https://filesorter.app/download/); no están firmadas con un certificado de Apple, así que [apruébala una vez](https://filesorter.app/download/macos-open/)' },
          { 'Opción': 'Linux', 'Cómo conseguirlo': 'Paquetes para Debian, Ubuntu, Fedora, Rocky y Arch en la [página de descargas](https://filesorter.app/download/)' },
          { 'Opción': 'Sitio web', 'Cómo conseguirlo': '[filesorter.app](https://filesorter.app/)' },
          { 'Opción': 'Política de privacidad', 'Cómo conseguirlo': 'No hay página en el sitio web; una [declaración de una frase](https://cdn.storeedgefd.dsx.mp.microsoft.com/eus2/privacy-policy-storage/92877400/00013788018020998399/1152921505700233027/privacy_policy_c70aeb11-d00c-4729-8362-6322790ef497.txt) está enlazada desde la ficha de Microsoft Store' },
          { 'Opción': 'Código fuente', 'Cómo conseguirlo': '[github.com/hyperfield/ai-file-sorter](https://github.com/hyperfield/ai-file-sorter)' },
        ],
        note: 'Versión revisada: v1.9.2, publicada el 14 de agosto de 2026 según la versión de GitHub; la ficha de Microsoft Store muestra la misma fecha de actualización. La versión de GitHub no incluye archivos descargables, así que los instaladores vienen del sitio web, de la Store y de SourceForge. No hace falta terminal; compilar desde el código fuente requiere una cadena de herramientas de C++ y Qt 6.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**El README, las preguntas frecuentes y el sitio web no documentan un mínimo de RAM ni de VRAM para los modelos locales; las cifras que existen describen la aplicación y el uso opcional de la GPU.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          { 'Elemento': 'Sistema operativo', 'Qué dicen las fuentes': 'Windows 10 versión 1809 o posterior según la ficha de Microsoft Store; compilaciones de macOS y Linux en la página de descargas. El README dice que las compilaciones de macOS desde el código fuente apuntan a Apple Silicon con macOS 15 o posterior, mientras que la página de descargas también ofrece imágenes de disco para M1 e Intel' },
          { 'Elemento': 'Memoria', 'Qué dicen las fuentes': 'La ficha de la Store indica 750 MB como mínimo y 1 GB recomendado para la aplicación en sí; no se da ninguna cifra para ejecutar los modelos de lenguaje' },
          { 'Elemento': 'GPU', 'Qué dicen las fuentes': 'Opcional. CUDA 12.x para NVIDIA o Vulkan 1.2 o posterior, más Metal en hardware de Apple; la aplicación recurre a la CPU. Según el README, 8 GB o más de VRAM dan una experiencia más fluida, mientras que 4 GB suelen implicar una descarga parcial o recurrir a la CPU' },
          { 'Elemento': 'Análisis de imágenes', 'Qué dicen las fuentes': 'Según las preguntas frecuentes, una GPU dedicada con unos 6 GB o más de memoria de vídeo acelera mucho el escaneo de imágenes, y en la CPU puede ser mucho más lento' },
          { 'Elemento': 'Modelos', 'Qué dicen las fuentes': 'Se descargan desde el cuadro «Select LLM» a una carpeta de almacenamiento que puedes cambiar; los tamaños de descarga no aparecen en las páginas leídas' },
          { 'Elemento': 'Prueba de hardware', 'Qué dicen las fuentes': 'Un «System compatibility check» integrado mide una carga pequeña y sugiere un modelo local para tu equipo' },
        ],
        note: 'Estas cifras proceden del proyecto y de la ficha de la Store; PromptQuorum no midió el uso de memoria ni la velocidad en ningún hardware.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Estos pasos siguen el consejo «Safe First Run» del README; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Instala la aplicación',
            whyItMatters: 'Descarga la versión para tu sistema desde la página de descargas; en macOS, aprueba una vez la aplicación sin firmar en «Privacidad y seguridad».',
          },
          {
            title: 'Elige un modelo',
            whyItMatters: 'Abre Settings y luego «Select LLM» y descarga un modelo local, o introduce en su lugar tu propia clave de OpenAI o Gemini, o un endpoint personalizado.',
          },
          {
            title: 'Prueba primero con una copia pequeña',
            whyItMatters: 'Copia de 20 a 50 archivos a una carpeta temporal, selecciónala, marca las opciones que quieras y pulsa Analyze.',
          },
          {
            title: 'Revisa y luego aplica',
            whyItMatters: 'Comprueba las categorías y los nombres sugeridos, ejecuta si quieres la simulación, pulsa Confirm & Sort y usa Edit y después «Undo last run» si cambias de opinión.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones principales',
        content: [
          '**Cada elemento siguiente procede del README, de las preguntas frecuentes o del sitio web; PromptQuorum no ha probado ninguno.**',
        ],
        items: [
          '**Categorización.** Una categoría y, opcionalmente, una subcategoría por archivo, en modo «More refined» o «More consistent», con listas blancas con nombre en las que cada categoría principal puede tener sus propias subcategorías permitidas.',
          '**Renombrado.** Nombres sugeridos para imágenes y documentos, y nombres construidos a partir de las etiquetas incrustadas para audio y vídeo, como year_artist_album_title.mp3; un modo de solo renombrar deja los archivos donde están.',
          '**Seguridad.** Una tabla de revisión con vista previa de archivos, una simulación que muestra las rutas de origen y destino, un plan de deshacer guardado y una protección de carpetas de proyecto que omite proyectos de Unity, Unreal, Godot, Blender, Git y código fuente habituales.',
          '**Memoria.** Una caché SQLite local y un almacén aparte de tus decisiones aprobadas, ambos con herramientas para borrar y restablecer en Settings.',
          '**Carpetas.** Carpetas locales, carpetas sincronizadas en la nube, unidades externas y recursos de red montados; con un NAS, primero asignas una letra de unidad en Windows o montas el recurso en Linux y macOS.',
          '**Idiomas.** Los idiomas de la interfaz incluyen alemán, francés, español, coreano y chino simplificado; el idioma de las categorías y de los nombres depende del modelo, y Gemma 1.1 7B solo admite inglés.',
          '**Extensión de Windows.** Un complemento opcional de pago del menú contextual en Microsoft Store inicia limpiezas desde el Explorador de archivos.',
        ],
        note: 'Las preguntas frecuentes del proyecto indican que el OCR de PDF escaneados, la detección de duplicados y una lista para incluir o ignorar tipos de archivo están previstos, no disponibles.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Funciones de IA y dónde se ejecutan',
        content: [
          '**Un modelo de lenguaje lee los nombres de archivo, el contexto de las carpetas y, cuando es compatible, el contenido de los archivos, y propone la categoría y el nombre nuevo; el modelo puede ser local o remoto.**',
        ],
        items: [
          '**Modelos de texto locales.** Gemma 3 4B IT, Gemma 1.1 7B y Mistral 7B son opciones integradas, y puedes registrar tu propio archivo GGUF; se ejecutan en un runtime llama.cpp incorporado.',
          '**Documentos.** Los formatos PDF, Word, Excel, PowerPoint, OpenDocument y texto plano se leen y se pasan al modelo seleccionado; los archivos antiguos .doc, .xls y .ppt no son compatibles.',
          '**Imágenes.** Dos backends visuales integrados, Gemma 3 4B IT por defecto y LLaVA 1.6 Mistral 7B, que necesitan cada uno un archivo de modelo y un archivo mmproj correspondiente; los modelos visuales personalizados funcionan igual.',
          '**Audio y vídeo.** Solo se usan los metadatos incrustados; las preguntas frecuentes dicen que los vídeos completos no se envían a un modelo de visión.',
          '**Opciones remotas.** ChatGPT con tu propia clave de OpenAI, Gemini con tu propia clave, o un endpoint personalizado compatible con OpenAI como LM Studio, Ollama o una pasarela; según el README, las claves se guardan en el config.ini local de la aplicación.',
          '**Aprendizaje.** Las decisiones aprobadas se reutilizan como pistas en ejecuciones posteriores; según el README, esto no entrena ni modifica el modelo.',
        ],
        note: 'Son declaraciones del propio proyecto. PromptQuorum no probó la calidad de las sugerencias, la velocidad ni las descargas de modelos.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**El README dice que con un modelo local tus archivos, sus nombres, tus imágenes y sus metadatos se quedan en tu equipo, no se envía telemetría y solo hace falta conexión a internet para un modelo remoto.** La caché de categorización es una base de datos SQLite local junto a config.ini que guarda rutas de directorios, nombres de archivo, categorías y nombres sugeridos.',
          'Si eliges OpenAI, Gemini o un endpoint personalizado, los datos van a ese servicio bajo tu propia cuenta, así que se aplica su política. El único texto de privacidad encontrado para la propia aplicación es una declaración de una frase enlazada desde la ficha de Microsoft Store: dice que no se recopilan, almacenan ni transmiten datos personales y que todo el procesamiento se queda en el dispositivo.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del proyecto, no resultados de una auditoría. El sitio web no tiene página de privacidad, y la declaración de una frase no menciona la opción de modelo remoto, las notificaciones de actualización ni las descargas de modelos. El README dice que una caché guarda nombres de lugares obtenidos de los datos GPS de las fotos, pero no qué servicio realiza esa consulta. PromptQuorum no ha inspeccionado el tráfico de red.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Personas con una carpeta de descargas, escaneos o capturas desbordada** que quieren aprobar fila por fila las carpetas y nombres sugeridos.',
          '**Usuarios preocupados por la privacidad** que prefieren un modelo local y pueden dedicar espacio en disco a los archivos de modelos.',
          '**Propietarios de unidades externas o archivos en un NAS** que los montan primero y ordenan en lotes pequeños.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad y velocidad.** No se probaron la precisión de las sugerencias, el tiempo de ejecución ni el efecto de distintos equipos.',
          '**Necesidades de hardware.** Las páginas leídas no dan un mínimo de RAM para los modelos locales ni los tamaños de descarga de los modelos.',
          '**Deshacer.** El README describe «Undo last run» como un esfuerzo razonable que omite conflictos y archivos modificados; no se probó.',
          '**Privacidad.** Solo existe una declaración de una frase; consulta Flujo de datos y privacidad.',
          '**macOS.** Las compilaciones no están firmadas por Apple, y las versiones de macOS admitidas difieren entre el README y la página de descargas.',
          '**Licencias de los modelos.** No se revisaron las licencias de los modelos descargables.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        content: [
          'El directorio incluye otras dos herramientas locales de archivos e imágenes con reseña, y ninguna renombra ni mueve archivos del mismo modo.',
        ],
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[Hyperlink (Nexa AI)](/es/power-local-llm/hyperlink-nexa-review)', 'Plataformas': 'Windows, macOS', 'Precio / licencia': 'Gratis / Propietaria', 'Diferencia clave': 'Busca en tus archivos locales y responde preguntas sobre ellos en lugar de renombrarlos o moverlos' },
          { 'App': '[PixlStash](/es/power-local-llm/pixlstash-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / GPL-3.0', 'Diferencia clave': 'Gestor de biblioteca de imágenes con etiquetado y búsqueda con IA local; solo cubre imágenes' },
        ],
        note: 'Comprueba el precio, la licencia y las plataformas actuales de cada app en su propia página.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué pasa si cierro AI File Sorter antes de confirmar?',
            a: 'No cambia ningún archivo, porque el análisis solo prepara sugerencias. Según las preguntas frecuentes, los resultados guardados pueden reutilizarse cuando vuelves a analizar la misma carpeta.',
          },
          {
            q: '¿Puedo usarla con Ollama o LM Studio?',
            a: 'Sí, mediante la opción de endpoint personalizado compatible con OpenAI; según las preguntas frecuentes, a Ollama se accede a través de su servidor local, normalmente en localhost:11434, y LM Studio necesita un modelo con visión para las imágenes.',
          },
          {
            q: '¿Puede leer PDF escaneados?',
            a: 'Todavía no. Según las preguntas frecuentes, los PDF escaneados, formados solo por imágenes, necesitan antes un OCR con otra herramienta; el soporte de OCR está previsto.',
          },
          {
            q: '¿Dónde se guardan los ajustes y los modelos?',
            a: 'Los ajustes están en %APPDATA%\\AIFileSorter en Windows, en ~/Library/Application Support/AIFileSorter en macOS y en ~/.config/AIFileSorter en Linux; los modelos descargados están en una carpeta llms aparte que se puede mover.',
          },
          {
            q: '¿Se queda funcionando en segundo plano?',
            a: 'No. Las preguntas frecuentes la describen como una herramienta por lotes que abres, ejecutas, revisas y cierras, y dicen que no hay modo de bajo consumo ni limitación en segundo plano.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'AI File Sorter es una forma gratuita y con actualizaciones activas de obtener sugerencias revisables de carpetas y nombres para archivos desordenados, con un modelo local por defecto y una función de deshacer documentada. En contra, las fuentes no dan ninguna cifra de RAM para los modelos locales, los PDF escaneados y la detección de duplicados no son compatibles, las compilaciones de macOS no están firmadas, la única declaración de privacidad tiene una frase y no se pudo comprobar aquí ninguna de las afirmaciones de calidad. Encaja con quienes quieren ordenar una carpeta en lotes pequeños y revisados; quien necesite un funcionamiento sin conexión garantizado debería confirmarlo con su propia monitorización de red.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de AI File Sorter](https://filesorter.app/) — páginas de funciones, descarga, precios, preguntas frecuentes y registro de cambios, comprobadas el 28 de octubre de 2026.',
          '[AI File Sorter en GitHub](https://github.com/hyperfield/ai-file-sorter) — README, notas de versión y actividad de commits, comprobados el 28 de octubre de 2026.',
          '[AI File Sorter en Microsoft Store](https://apps.microsoft.com/detail/9npk4dzd6r6s) — requisitos del sistema, fecha de actualización y declaración de privacidad, comprobados el 28 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Hyperlink (Nexa AI)](/es/power-local-llm/hyperlink-nexa-review) — asistente en el dispositivo que busca en los archivos locales y responde preguntas sobre ellos.',
          '[Reseña de PixlStash](/es/power-local-llm/pixlstash-review) — gestor de biblioteca de imágenes autoalojado con etiquetado por IA local.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },

  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/ai-file-sorter-review-hero-fr.webp',
    title: 'Test d’AI File Sorter : une IA locale qui renomme et trie les fichiers',
    seoTitle: 'Test d’AI File Sorter : IA locale pour trier les fichiers',
    intro:
      'AI File Sorter est une application de bureau gratuite et open source pour Windows, macOS et Linux qui propose des dossiers et des noms de fichiers plus clairs pour des fichiers en désordre, par défaut avec un modèle local intégré ou avec votre propre compte OpenAI ou Gemini. Rien n’est déplacé ni renommé tant que vous n’avez pas validé les suggestions. Ce test s’appuie sur son site, son README, sa FAQ, ses notes de version et sa fiche Microsoft Store, vérifiés le 28 octobre 2026.',
    metaDescription:
      'Test d’AI File Sorter : appli gratuite AGPL qui propose dossiers et noms de fichiers avec un modèle local ou votre clé API. Confidentialité, annulation.',
    twitterDescription:
      'Test d’AI File Sorter : une application de bureau gratuite sous licence AGPL qui propose dossiers et noms de fichiers avec un modèle local ou votre propre clé API. Installateurs, matériel, confidentialité et ce que nous n’avons pas pu vérifier.',
    audience:
      'Personnes dont les dossiers Téléchargements, scans, captures d’écran ou archives sont encombrés, qui veulent des suggestions d’IA à relire, et qui doivent savoir ce qui s’exécute en local, ce que les sources laissent ouvert et comment annuler les changements.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test AI File Sorter',
    targetKeywords: [
      'test ai file sorter',
      'ia pour ranger ses fichiers en local',
      'renommer des fichiers avec ia hors ligne',
      'ai file sorter gemma modèle local',
      'ranger le dossier téléchargements avec ia',
      'ai file sorter confidentialité annuler',
    ],
    current_models_mentioned: ['Gemma 3 4B IT', 'Gemma 1.1 7B', 'Mistral 7B', 'LLaVA 1.6 Mistral 7B'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Vulkan', 'Apple Metal'],
    leadAnswerBlock:
      '**AI File Sorter (v1.9.2, publiée le 14 août 2026) est une application de bureau gratuite sous licence AGPL-3.0, pour Windows, macOS et Linux, qui propose des dossiers et de nouveaux noms pour des fichiers en désordre, par défaut avec un modèle de langage local ou, si vous le choisissez, avec votre propre compte OpenAI ou Gemini.** Elle ne modifie rien avant votre confirmation dans une fenêtre de relecture, et le README décrit un essai à blanc et une annulation. PromptQuorum ne l’a pas exécutée.',
    quickAnswerTop: {
      fr: {
        question: 'AI File Sorter fonctionne-t-il hors ligne, sans envoyer de fichiers ?',
        answer:
          'Selon son README et sa FAQ, oui avec un modèle local intégré ou personnalisé : fichiers, noms, images et métadonnées restent sur votre ordinateur et aucune télémétrie n’est envoyée. ChatGPT, Gemini ou un point d’accès personnalisé exigent Internet et votre propre compte API. PromptQuorum n’a pas inspecté le trafic réseau.',
        bullets: [
          'Gratuit, AGPL-3.0 ; installateurs pour Windows 10 ou plus récent, macOS et Linux sur [filesorter.app](https://filesorter.app/download/).',
          'Modèles locaux : Gemma 3 4B IT, Gemma 1.1 7B et Mistral 7B, ou votre propre fichier GGUF.',
          'Rien ne bouge avant le clic sur Confirm & Sort ; un essai à blanc et Edit > Undo last run existent.',
          'Lit les PDF, fichiers Office et textes, et les images avec un modèle visuel ; l’audio et la vidéo sont renommés d’après les balises intégrées.',
          'Aucune valeur de RAM n’est documentée pour les modèles locaux ; la FAQ indique qu’environ 6 Go de mémoire vidéo accélèrent l’analyse des images.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce qu’AI File Sorter ?', anchor: 'what-is-ai-file-sorter' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Prérequis', anchor: 'requirements' },
      { label: 'Premiers pas', anchor: 'getting-started' },
      { label: 'Fonctions principales', anchor: 'key-features' },
      { label: 'Fonctions d’IA et où elles s’exécutent', anchor: 'ai-features' },
      { label: 'Flux de données et confidentialité', anchor: 'privacy' },
      { label: 'À qui il s’adresse', anchor: 'who-should-use' },
      { label: 'Ce que nous n’avons pas pu vérifier', anchor: 'who-should-not-use' },
      { label: 'Concurrents et alternatives', anchor: 'vs-alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures associées', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AI File Sorter est une application de bureau open source qui demande à un modèle de langage local ou distant de proposer des dossiers et des noms de fichiers pour le dossier que vous choisissez, puis ne les applique qu’après votre accord.',
          },
          {
            type: 'plain-terms',
            text: 'Vous pointez l’application vers un dossier en désordre comme Téléchargements, elle suggère où chaque fichier doit aller et comment l’appeler, et vous décochez les suggestions dont vous ne voulez pas avant que quoi que ce soit soit déplacé.',
          },
        ],
        items: [
          'Maintenance : la dernière version, v1.9.2, est sortie le 14 août 2026 et le dépôt GitHub a reçu un push le 19 octobre 2026 ; aucun avertissement de projet abandonné ne s’applique.',
          'Éditeur : le site mentionne HF Studio ; le code source est sur GitHub chez l’utilisateur hyperfield.',
          'Coût : l’application de base est gratuite ; une extension Windows pour le menu contextuel est un module payant du Microsoft Store, et les dons sont facultatifs.',
          'Périmètre : elle trie et renomme des fichiers ; ce n’est pas une application de chat, et le projet classe la détection de doublons et l’OCR des PDF numérisés comme prévus, pas disponibles.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur le site, le README, la FAQ, les notes de version et la fiche Microsoft Store du projet, vérifiés le 28 octobre 2026. PromptQuorum n’a pas installé AI File Sorter ; la qualité des suggestions, la vitesse et le comportement de l’annulation ne sont donc pas évalués.',
          },
        ],
      },
      overview: {
        id: 'what-is-ai-file-sorter',
        title: 'Qu’est-ce qu’AI File Sorter ?',
        content: [
          '**AI File Sorter est une application de bureau qui suggère des catégories, des sous-dossiers et des noms plus clairs pour les fichiers d’un dossier que vous sélectionnez, puis les déplace ou les renomme après votre confirmation.** Son README la décrit comme un outil multiplateforme d’organisation et de renommage de fichiers selon leur contenu ; le code source est ouvert sous licence AGPL-3.0.',
          'Plutôt que de s’appuyer seulement sur des règles fixes, l’application associe, selon le README, les suggestions du modèle à des listes blanches facultatives, à des résultats similaires récents et à vos décisions de relecture validées. Le pied de page du site désigne HF Studio comme éditeur.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Où l’obtenir',
        content: [
          '**AI File Sorter s’installe comme n’importe quel logiciel de bureau : installateur ou version portable pour Windows, images disque pour macOS et paquets pour Linux, tous listés sur la page de téléchargement officielle.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          { 'Option': 'Windows', 'Comment l’obtenir': 'Installateur ou version portable pour Windows 10 ou plus récent sur la [page de téléchargement](https://filesorter.app/download/)' },
          { 'Option': 'Windows (Store)', 'Comment l’obtenir': '[Microsoft Store](https://apps.microsoft.com/detail/9npk4dzd6r6s) ; selon la page de téléchargement, sans prise en charge de CUDA, l’accélération Vulkan fonctionne' },
          { 'Option': 'macOS', 'Comment l’obtenir': 'Images disque pour Apple Silicon (M2 à M5, et M1) et Intel sur la [page de téléchargement](https://filesorter.app/download/) ; non signées avec un certificat Apple, donc [à autoriser une fois](https://filesorter.app/download/macos-open/)' },
          { 'Option': 'Linux', 'Comment l’obtenir': 'Paquets pour Debian, Ubuntu, Fedora, Rocky et Arch sur la [page de téléchargement](https://filesorter.app/download/)' },
          { 'Option': 'Site web', 'Comment l’obtenir': '[filesorter.app](https://filesorter.app/)' },
          { 'Option': 'Politique de confidentialité', 'Comment l’obtenir': 'Aucune page sur le site ; une [déclaration d’une phrase](https://cdn.storeedgefd.dsx.mp.microsoft.com/eus2/privacy-policy-storage/92877400/00013788018020998399/1152921505700233027/privacy_policy_c70aeb11-d00c-4729-8362-6322790ef497.txt) est liée depuis la fiche Microsoft Store' },
          { 'Option': 'Code source', 'Comment l’obtenir': '[github.com/hyperfield/ai-file-sorter](https://github.com/hyperfield/ai-file-sorter)' },
        ],
        note: 'Version testée : v1.9.2, publiée le 14 août 2026 selon la version GitHub ; la fiche Microsoft Store affiche la même date de mise à jour. La version GitHub ne propose aucun fichier à télécharger : les installateurs viennent du site, du Store et de SourceForge. Aucun terminal n’est nécessaire ; la compilation depuis le code source exige une chaîne d’outils C++ et Qt 6.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**Aucun minimum de RAM ou de VRAM pour les modèles locaux n’est documenté dans le README, la FAQ ou le site ; les chiffres existants décrivent l’application et l’usage facultatif du GPU.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          { 'Élément': 'Système d’exploitation', 'Ce que disent les sources': 'Windows 10 version 1809 ou plus récente selon la fiche Microsoft Store ; versions macOS et Linux sur la page de téléchargement. Le README indique que les compilations macOS depuis le code source visent Apple Silicon sous macOS 15 ou plus récent, alors que la page de téléchargement propose aussi des images disque pour M1 et Intel' },
          { 'Élément': 'Mémoire', 'Ce que disent les sources': 'La fiche du Store indique 750 Mo minimum et 1 Go recommandé pour l’application elle-même ; aucun chiffre n’est donné pour faire tourner les modèles de langage' },
          { 'Élément': 'GPU', 'Ce que disent les sources': 'Facultatif. CUDA 12.x pour NVIDIA ou Vulkan 1.2 ou plus récent, plus Metal sur matériel Apple ; l’application se rabat sur le CPU. Selon le README, 8 Go de VRAM ou plus offrent une expérience plus fluide, tandis que 4 Go signifient souvent un déchargement partiel ou un repli sur le CPU' },
          { 'Élément': 'Analyse d’images', 'Ce que disent les sources': 'Selon la FAQ, un GPU dédié avec environ 6 Go de mémoire vidéo ou plus accélère nettement l’analyse des images, qui peut être bien plus lente sur le CPU' },
          { 'Élément': 'Modèles', 'Ce que disent les sources': 'Téléchargés depuis la boîte de dialogue « Select LLM » dans un dossier de stockage modifiable ; les tailles de téléchargement ne sont pas indiquées dans les pages lues' },
          { 'Élément': 'Test du matériel', 'Ce que disent les sources': 'Un « System compatibility check » intégré mesure une petite charge de travail et suggère un modèle local adapté à votre machine' },
        ],
        note: 'Ces chiffres viennent du projet et de la fiche du Store ; PromptQuorum n’a mesuré ni l’usage mémoire ni la vitesse sur aucun matériel.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Ces étapes suivent le conseil « Safe First Run » du README ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Installer l’application',
            whyItMatters: 'Téléchargez la version pour votre système depuis la page de téléchargement ; sous macOS, autorisez une fois l’application non signée dans « Confidentialité et sécurité ».',
          },
          {
            title: 'Choisir un modèle',
            whyItMatters: 'Ouvrez Settings, puis « Select LLM », et téléchargez un modèle local, ou saisissez à la place votre propre clé OpenAI ou Gemini, ou un point d’accès personnalisé.',
          },
          {
            title: 'Essayer d’abord sur une petite copie',
            whyItMatters: 'Copiez 20 à 50 fichiers dans un dossier temporaire, sélectionnez-le, cochez les options voulues et cliquez sur Analyze.',
          },
          {
            title: 'Relire, puis appliquer',
            whyItMatters: 'Vérifiez les catégories et les noms suggérés, lancez au besoin l’essai à blanc, cliquez sur Confirm & Sort, et utilisez Edit, puis « Undo last run », si vous changez d’avis.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions principales',
        content: [
          '**Chaque élément ci-dessous provient du README, de la FAQ ou du site ; PromptQuorum n’en a testé aucun.**',
        ],
        items: [
          '**Catégorisation.** Une catégorie et, en option, une sous-catégorie par fichier, en mode « More refined » ou « More consistent », avec des listes blanches nommées où chaque catégorie principale peut avoir ses propres sous-catégories autorisées.',
          '**Renommage.** Noms suggérés pour les images et les documents, et noms construits à partir des balises intégrées pour l’audio et la vidéo, par exemple year_artist_album_title.mp3 ; un mode renommage seul laisse les fichiers en place.',
          '**Sécurité.** Un tableau de relecture avec aperçu des fichiers, un essai à blanc affichant les chemins de départ et d’arrivée, un plan d’annulation enregistré et une protection des dossiers de projet qui ignore les projets Unity, Unreal, Godot, Blender, Git et de code source courants.',
          '**Mémoire.** Un cache SQLite local et un stockage séparé de vos décisions validées, chacun avec des outils d’effacement et de réinitialisation dans Settings.',
          '**Dossiers.** Dossiers locaux, dossiers cloud synchronisés, disques externes et partages réseau montés ; pour un NAS, vous attribuez d’abord une lettre de lecteur sous Windows ou vous montez le partage sous Linux et macOS.',
          '**Langues.** Les langues de l’interface incluent l’allemand, le français, l’espagnol, le coréen et le chinois simplifié ; la langue des catégories et des noms dépend du modèle, et Gemma 1.1 7B ne gère que l’anglais.',
          '**Extension Windows.** Un module facultatif et payant du Microsoft Store pour le menu contextuel lance des nettoyages depuis l’Explorateur de fichiers.',
        ],
        note: 'La FAQ du projet classe l’OCR des PDF numérisés, la détection de doublons et une liste d’inclusion ou d’exclusion des types de fichiers comme prévus, pas disponibles.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Fonctions d’IA et où elles s’exécutent',
        content: [
          '**Un modèle de langage lit les noms de fichiers, le contexte des dossiers et, quand c’est pris en charge, le contenu des fichiers, puis propose la catégorie et le nouveau nom ; le modèle peut être local ou distant.**',
        ],
        items: [
          '**Modèles de texte locaux.** Gemma 3 4B IT, Gemma 1.1 7B et Mistral 7B sont des choix intégrés, et vous pouvez enregistrer votre propre fichier GGUF ; ils s’exécutent sur un runtime llama.cpp embarqué.',
          '**Documents.** Les formats PDF, Word, Excel, PowerPoint, OpenDocument et texte brut sont lus et transmis au modèle sélectionné ; les anciens fichiers .doc, .xls et .ppt ne sont pas pris en charge.',
          '**Images.** Deux moteurs visuels intégrés, Gemma 3 4B IT par défaut et LLaVA 1.6 Mistral 7B, qui exigent chacun un fichier de modèle et un fichier mmproj correspondant ; les modèles visuels personnalisés fonctionnent de la même façon.',
          '**Audio et vidéo.** Seules les métadonnées intégrées sont utilisées ; la FAQ indique que les vidéos entières ne sont pas envoyées à un modèle de vision.',
          '**Options distantes.** ChatGPT avec votre propre clé OpenAI, Gemini avec votre propre clé, ou un point d’accès personnalisé compatible OpenAI comme LM Studio, Ollama ou une passerelle ; selon le README, les clés sont stockées dans le fichier config.ini local de l’application.',
          '**Apprentissage.** Les décisions validées sont réutilisées comme indices lors des exécutions suivantes ; selon le README, cela n’entraîne ni ne modifie le modèle.',
        ],
        note: 'Ce sont les déclarations du projet. PromptQuorum n’a testé ni la qualité des suggestions, ni la vitesse, ni les téléchargements de modèles.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**Selon le README, avec un modèle local vos fichiers, leurs noms, vos images et vos métadonnées restent sur votre ordinateur, aucune télémétrie n’est envoyée, et une connexion Internet n’est nécessaire que pour un modèle distant.** Le cache de catégorisation est une base SQLite locale placée à côté de config.ini, qui enregistre les chemins de dossiers, les noms de fichiers, les catégories et les noms suggérés.',
          'Si vous choisissez OpenAI, Gemini ou un point d’accès personnalisé, les données partent vers ce service sous votre propre compte, et sa politique s’applique. Le seul texte de confidentialité trouvé pour l’application elle-même est une déclaration d’une phrase liée depuis la fiche Microsoft Store : elle dit qu’aucune donnée personnelle n’est collectée, stockée ni transmise et que tout le traitement reste sur l’appareil.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations du projet, pas des résultats d’audit. Le site n’a pas de page de confidentialité, et la déclaration d’une phrase ne mentionne ni l’option de modèle distant, ni les notifications de mise à jour, ni les téléchargements de modèles. Le README indique qu’un cache conserve des noms de lieux obtenus à partir des données GPS des photos, sans dire quel service effectue cette recherche. PromptQuorum n’a pas inspecté le trafic réseau.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Les personnes dont le dossier Téléchargements, scans ou captures d’écran déborde** et qui veulent valider dossiers et noms suggérés ligne par ligne.',
          '**Les utilisateurs soucieux de leur vie privée** qui préfèrent un modèle local et peuvent consacrer de l’espace disque aux fichiers de modèles.',
          '**Les propriétaires de disques externes ou d’archives NAS** qui les montent d’abord et trient par petits lots.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité et vitesse.** La justesse des suggestions, la durée d’exécution et l’effet de matériels différents n’ont pas été testés.',
          '**Besoins matériels.** Les pages lues ne donnent ni minimum de RAM pour les modèles locaux, ni tailles de téléchargement des modèles.',
          '**Annulation.** Le README décrit « Undo last run » comme un fonctionnement au mieux, qui ignore les conflits et les fichiers modifiés ; elle n’a pas été essayée.',
          '**Confidentialité.** Il n’existe qu’une déclaration d’une phrase ; voir Flux de données et confidentialité.',
          '**macOS.** Les versions ne sont pas signées par Apple, et les versions de macOS prises en charge diffèrent entre le README et la page de téléchargement.',
          '**Licences des modèles.** Les licences des modèles téléchargeables n’ont pas été examinées.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        content: [
          'Le répertoire compte deux autres outils locaux pour fichiers et images ayant un test, dont aucun ne renomme ni ne déplace les fichiers de la même façon.',
        ],
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[Hyperlink (Nexa AI)](/fr/power-local-llm/hyperlink-nexa-review)', 'Plateformes': 'Windows, macOS', 'Prix / licence': 'Gratuit / Propriétaire', 'Différence clé': 'Recherche dans vos fichiers locaux et répond à des questions à leur sujet au lieu de les renommer ou de les déplacer' },
          { 'Application': '[PixlStash](/fr/power-local-llm/pixlstash-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / GPL-3.0', 'Différence clé': 'Gestionnaire de bibliothèque d’images avec étiquetage et recherche par IA locale ; ne couvre que les images' },
        ],
        note: 'Vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre page.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Que se passe-t-il si je ferme AI File Sorter avant de confirmer ?',
            a: 'Aucun fichier ne change, car l’analyse ne fait que préparer des suggestions. Selon la FAQ, les résultats enregistrés peuvent être réutilisés quand vous analysez à nouveau le même dossier.',
          },
          {
            q: 'Puis-je l’utiliser avec Ollama ou LM Studio ?',
            a: 'Oui, via l’option de point d’accès personnalisé compatible OpenAI ; selon la FAQ, Ollama est joint par son serveur local, généralement sur localhost:11434, et LM Studio exige un modèle capable de traiter les images.',
          },
          {
            q: 'Peut-il lire des PDF numérisés ?',
            a: 'Pas encore. Selon la FAQ, les PDF numérisés, composés uniquement d’images, nécessitent d’abord un OCR avec un autre outil ; la prise en charge de l’OCR est prévue.',
          },
          {
            q: 'Où sont stockés les réglages et les modèles ?',
            a: 'Les réglages se trouvent dans %APPDATA%\\AIFileSorter sous Windows, ~/Library/Application Support/AIFileSorter sous macOS et ~/.config/AIFileSorter sous Linux ; les modèles téléchargés sont dans un dossier llms distinct, qui peut être déplacé.',
          },
          {
            q: 'Reste-t-elle active en arrière-plan ?',
            a: 'Non. La FAQ la décrit comme un outil par lots que l’on ouvre, lance, relit et ferme, et précise qu’il n’existe ni mode basse consommation ni limitation en arrière-plan.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'AI File Sorter est un moyen gratuit et activement mis à jour d’obtenir des suggestions de dossiers et de noms à relire pour des fichiers en désordre, avec un modèle local par défaut et une annulation documentée. En face, les sources ne donnent aucune valeur de RAM pour les modèles locaux, les PDF numérisés et la détection de doublons ne sont pas pris en charge, les versions macOS ne sont pas signées, la seule déclaration de confidentialité tient en une phrase, et aucune des affirmations de qualité n’a pu être vérifiée ici. Elle convient à ceux qui veulent ranger un dossier par petits lots relus ; qui exige un fonctionnement hors ligne garanti devrait le confirmer avec sa propre surveillance réseau.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site d’AI File Sorter](https://filesorter.app/) — pages fonctions, téléchargement, tarifs, FAQ et journal des modifications, vérifiées le 28 octobre 2026.',
          '[AI File Sorter sur GitHub](https://github.com/hyperfield/ai-file-sorter) — README, notes de version et activité des commits, vérifiés le 28 octobre 2026.',
          '[AI File Sorter sur le Microsoft Store](https://apps.microsoft.com/detail/9npk4dzd6r6s) — configuration requise, date de mise à jour et déclaration de confidentialité, vérifiées le 28 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test d’Hyperlink (Nexa AI)](/fr/power-local-llm/hyperlink-nexa-review) — assistant sur l’appareil qui recherche dans les fichiers locaux et répond à des questions à leur sujet.',
          '[Test de PixlStash](/fr/power-local-llm/pixlstash-review) — gestionnaire de bibliothèque d’images auto-hébergé avec étiquetage par IA locale.',
          '[Répertoire de logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
        ],
      },
    },
  },

  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/ai-file-sorter-review-hero-ja.webp',
    title: 'AI File Sorterレビュー：ローカルAIでファイルを整理・改名',
    seoTitle: 'AI File Sorterレビュー：ローカルAIでファイル整理',
    intro:
      'AI File Sorterは、Windows・macOS・Linux向けの無料のオープンソースのデスクトップアプリです。散らかったファイルに対し、フォルダーとわかりやすいファイル名を提案します。標準では内蔵のローカルモデルを使い、自分のOpenAIまたはGeminiアカウントも選べます。提案を承認するまで、ファイルは移動も改名もされません。本レビューは、公式サイト、README、FAQ、リリースノート、Microsoft Storeの掲載内容を2026年10月28日に確認した結果に基づきます。',
    metaDescription:
      'AI File Sorterのレビュー。ローカルモデルや自分のAPIキーでフォルダーとファイル名を提案する、無料のAGPLデスクトップアプリ。プライバシーと元に戻す機能。',
    twitterDescription:
      'AI File Sorterのレビュー。ローカルモデルまたは自分のAPIキーでフォルダーとファイル名を提案する、AGPLライセンスの無料デスクトップアプリ。インストーラー、ハードウェア、プライバシー、確認できなかった点を解説します。',
    audience:
      'ダウンロード、スキャン、スクリーンショット、アーカイブのフォルダーが散らかっていて、確認できるAI提案を使いたい方。ローカルで動く範囲、情報源が明らかにしていない点、変更を元に戻す方法を知りたい方に向けています。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'AI File Sorter レビュー',
    targetKeywords: [
      'ai file sorter レビュー',
      'ローカル ai ファイル整理',
      'ai ファイル名 変更 オフライン',
      'ai file sorter gemma ローカルモデル',
      'ダウンロードフォルダー ai 整理',
      'ai file sorter プライバシー 元に戻す',
    ],
    current_models_mentioned: ['Gemma 3 4B IT', 'Gemma 1.1 7B', 'Mistral 7B', 'LLaVA 1.6 Mistral 7B'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Vulkan', 'Apple Metal'],
    leadAnswerBlock:
      '**AI File Sorter（v1.9.2、2026年8月14日リリース）は、Windows・macOS・Linux向けの無料のAGPL-3.0デスクトップアプリで、散らかったファイルにフォルダーと新しい名前を提案します。標準ではローカルの言語モデルを使い、希望すれば自分のOpenAIまたはGeminiアカウントも使えます。** レビュー画面で確定するまで何も変更されず、READMEにはドライラン（試し実行）と元に戻す機能が記載されています。PromptQuorumは実行していません。',
    quickAnswerTop: {
      ja: {
        question: 'AI File Sorterはファイルをアップロードせずオフラインで動きますか？',
        answer:
          'READMEとFAQによれば、内蔵または自作のローカルモデルを選んだ場合は動きます。ファイル、ファイル名、画像、メタデータはPC内にとどまり、テレメトリーも送信されません。ChatGPT、Gemini、カスタムエンドポイントを選ぶとインターネットと自分のAPIアカウントが必要です。PromptQuorumはネットワーク通信を調べていません。',
        bullets: [
          '無料でAGPL-3.0。Windows 10以降、macOS、Linux用のインストーラーを[filesorter.app](https://filesorter.app/download/)で提供。',
          'ローカルモデルはGemma 3 4B IT、Gemma 1.1 7B、Mistral 7B、または自分のGGUFファイル。',
          'Confirm & Sortをクリックするまで何も移動せず、ドライランとEdit > Undo last runがあります。',
          'PDF、Office、テキストを読み、視覚モデルで画像も解析。音声と動画は埋め込みタグから改名します。',
          'ローカルモデル向けのRAMの目安は記載なし。FAQでは、約6 GBのビデオメモリで画像スキャンが速くなるとされています。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'AI File Sorterとは', anchor: 'what-is-ai-file-sorter' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '動作要件', anchor: 'requirements' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '主な機能', anchor: 'key-features' },
      { label: 'AI機能と実行場所', anchor: 'ai-features' },
      { label: 'データの流れとプライバシー', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかった点', anchor: 'who-should-not-use' },
      { label: '競合と代替ツール', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AI File Sorterは、選んだフォルダー内のファイルについて、ローカルまたはリモートの言語モデルにフォルダーとファイル名を提案させ、承認後にだけ適用するオープンソースのデスクトップアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'ダウンロードのような散らかったフォルダーを指定すると、各ファイルの置き場所と名前を提案してくれます。不要な提案は外してから適用するので、確認前に何かが移動することはありません。',
          },
        ],
        items: [
          'メンテナンス：最新リリースv1.9.2は2026年8月14日に公開され、GitHubリポジトリには2026年10月19日にプッシュがあったため、放置プロジェクトの警告は該当しません。',
          '提供元：公式サイトにはHF Studioと記載されており、ソースコードはGitHubのユーザーhyperfieldにあります。',
          '費用：本体は無料です。Windowsの右クリック拡張はMicrosoft Storeの有料アドオンで、寄付は任意です。',
          '対象範囲：ファイルの整理と改名が目的でチャットアプリではありません。重複ファイルの検出とスキャンPDFのOCRは、プロジェクト側で「提供済み」ではなく「予定」とされています。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、プロジェクトの公式サイト、README、FAQ、リリースノート、Microsoft Storeの掲載内容を2026年10月28日に確認した結果に基づきます。PromptQuorumはAI File Sorterをインストールしていないため、提案の質、速度、元に戻す動作は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-ai-file-sorter',
        title: 'AI File Sorterとは',
        content: [
          '**AI File Sorterは、選んだフォルダー内のファイルについてカテゴリー、サブフォルダー、わかりやすい名前を提案し、確認後に移動や改名を行うデスクトップアプリです。** READMEはこれを、内容を踏まえてファイルを整理・改名するクロスプラットフォームのツールと説明しており、ソースコードはAGPL-3.0ライセンスで公開されています。',
          'READMEによると、固定ルールだけに頼らず、モデルの提案に、任意のホワイトリスト、最近の類似結果、承認済みのレビュー判断を組み合わせます。公式サイトのフッターには、発行元としてHF Studioが記載されています。',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: '入手方法',
        content: [
          '**AI File Sorterは一般的なデスクトップソフトと同じようにインストールします。Windows用のインストーラーまたはポータブル版、macOS用のディスクイメージ、Linux用のパッケージが、公式のダウンロードページに並んでいます。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': 'Windows', '入手方法': 'Windows 10以降向けのインストーラーまたはポータブル版を[ダウンロードページ](https://filesorter.app/download/)で提供' },
          { '項目': 'Windows（ストア）', '入手方法': '[Microsoft Store](https://apps.microsoft.com/detail/9npk4dzd6r6s)。ダウンロードページによると、CUDAには非対応でVulkanによる高速化は動作' },
          { '項目': 'macOS', '入手方法': 'Apple Silicon（M2〜M5、およびM1）とIntel向けのディスクイメージを[ダウンロードページ](https://filesorter.app/download/)で提供。Appleの証明書で署名されていないため、[初回に許可](https://filesorter.app/download/macos-open/)が必要' },
          { '項目': 'Linux', '入手方法': 'Debian、Ubuntu、Fedora、Rocky、Arch向けのパッケージを[ダウンロードページ](https://filesorter.app/download/)で提供' },
          { '項目': '公式サイト', '入手方法': '[filesorter.app](https://filesorter.app/)' },
          { '項目': 'プライバシーポリシー', '入手方法': '公式サイトにページはなく、Microsoft Storeの掲載ページから[1文だけの声明](https://cdn.storeedgefd.dsx.mp.microsoft.com/eus2/privacy-policy-storage/92877400/00013788018020998399/1152921505700233027/privacy_policy_c70aeb11-d00c-4729-8362-6322790ef497.txt)にリンクされている' },
          { '項目': 'ソースコード', '入手方法': '[github.com/hyperfield/ai-file-sorter](https://github.com/hyperfield/ai-file-sorter)' },
        ],
        note: '確認したバージョンはv1.9.2で、GitHubのリリースによると2026年8月14日の公開です。Microsoft Storeの掲載ページにも同じ更新日が表示されています。GitHubのリリースにはダウンロード用ファイルがなく、インストーラーは公式サイト、ストア、SourceForgeから入手します。ターミナルは不要ですが、ソースからビルドするにはC++のツールチェーンとQt 6が必要です。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**ローカルモデル向けのRAMやVRAMの最小値は、README、FAQ、公式サイトのいずれにも記載がありません。存在する数値は、アプリ本体と任意のGPU利用に関するものです。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          { '項目': 'OS', '情報源の記載': 'Microsoft Storeの掲載ではWindows 10 バージョン1809以降。macOSとLinuxのビルドはダウンロードページにあります。READMEはmacOSのソースビルドをmacOS 15以降のApple Siliconが対象としていますが、ダウンロードページにはM1とIntel向けのディスクイメージもあります' },
          { '項目': 'メモリ', '情報源の記載': 'ストアの掲載ではアプリ本体について最小750 MB、推奨1 GB。言語モデルを動かす場合の数値は示されていません' },
          { '項目': 'GPU', '情報源の記載': '任意です。NVIDIAならCUDA 12.x、そうでなければVulkan 1.2以降、Apple製ハードウェアではMetalに対応し、使えない場合はCPUに切り替わります。READMEでは、8 GB以上のVRAMがあると快適で、4 GBでは一部のみGPUに載せるかCPUに切り替わることが多いとされています' },
          { '項目': '画像解析', '情報源の記載': 'FAQによると、約6 GB以上のビデオメモリを持つ単体GPUがあると画像スキャンが大幅に速くなり、CPUでは大幅に遅くなることがあります' },
          { '項目': 'モデル', '情報源の記載': '「Select LLM」ダイアログから、変更可能な保存先フォルダーにダウンロードします。ダウンロードサイズは確認したページに記載がありません' },
          { '項目': 'ハードウェア確認', '情報源の記載': '内蔵の「System compatibility check」が小さな処理を計測し、お使いのPCに合うローカルモデルを提案します' },
        ],
        note: 'これらの数値はプロジェクトとストアの掲載内容に基づきます。PromptQuorumは、どのハードウェアでもメモリ使用量や速度を測定していません。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**以下の手順はREADMEの「Safe First Run」の助言に沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: 'ダウンロードページからお使いのOS用のビルドを入手します。macOSでは、署名されていないアプリを「プライバシーとセキュリティ」で初回に許可します。',
          },
          {
            title: 'モデルを選ぶ',
            whyItMatters: 'Settingsから「Select LLM」を開いてローカルモデルをダウンロードするか、代わりに自分のOpenAIまたはGeminiのキー、あるいはカスタムエンドポイントを入力します。',
          },
          {
            title: 'まず小さなコピーで試す',
            whyItMatters: '20〜50個のファイルを一時フォルダーにコピーして選択し、必要なオプションにチェックを入れてAnalyzeをクリックします。',
          },
          {
            title: '確認してから適用する',
            whyItMatters: 'カテゴリーと提案された名前を確認し、必要ならドライランを実行してConfirm & Sortをクリックします。気が変わったらEditメニューから「Undo last run」を使います。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主な機能',
        content: [
          '**以下の項目はすべてREADME、FAQ、公式サイトの記載に基づくもので、PromptQuorumは実際には試していません。**',
        ],
        items: [
          '**分類。** ファイルごとにカテゴリーと任意のサブカテゴリーを提案します。「More refined」と「More consistent」の2モードがあり、名前付きホワイトリストでは、メインカテゴリーごとに許可するサブカテゴリーを設定できます。',
          '**改名。** 画像と文書には改名案を出し、音声と動画には埋め込みタグから year_artist_album_title.mp3 のような名前を作ります。改名のみのモードでは、ファイルは元の場所に残ります。',
          '**安全対策。** ファイルのプレビュー付きレビュー表、移動元と移動先を示すドライラン、保存される元に戻す計画、そしてUnity、Unreal、Godot、Blender、Git、一般的なソースコードのプロジェクトを除外するプロジェクトフォルダー保護があります。',
          '**記憶。** ローカルのSQLiteキャッシュと、承認した判断を別に保存するストアがあり、どちらもSettingsに消去とリセットのツールがあります。',
          '**フォルダー。** ローカルフォルダー、同期されたクラウドフォルダー、外付けドライブ、マウントしたネットワーク共有に対応します。NASの場合は、Windowsではドライブ文字を割り当て、LinuxとmacOSでは共有をマウントしてから使います。',
          '**言語。** 画面の表示言語にはドイツ語、フランス語、スペイン語、韓国語、簡体字中国語などがあります。カテゴリーとファイル名の言語はモデルに依存し、Gemma 1.1 7Bは英語のみです。',
          '**Windows拡張。** Microsoft Storeで提供される任意の有料アドオンで、エクスプローラーの右クリックから整理を開始できます。',
        ],
        note: 'プロジェクトのFAQでは、スキャンPDFのOCR、重複ファイルの検出、ファイル種別の対象・除外リストは、提供済みではなく予定とされています。',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI機能と実行場所',
        content: [
          '**言語モデルがファイル名、フォルダーの文脈、対応する場合はファイルの内容を読み取り、カテゴリーと新しい名前を提案します。モデルはローカルでもリモートでも構いません。**',
        ],
        items: [
          '**ローカルのテキストモデル。** Gemma 3 4B IT、Gemma 1.1 7B、Mistral 7Bが内蔵の選択肢で、自分のGGUFファイルも登録できます。これらは組み込みのllama.cppランタイム上で動作します。',
          '**文書。** PDF、Word、Excel、PowerPoint、OpenDocument、プレーンテキストを読み取って選択中のモデルに渡します。古い.doc、.xls、.pptは非対応です。',
          '**画像。** 内蔵の視覚バックエンドは2つで、標準のGemma 3 4B ITとLLaVA 1.6 Mistral 7Bです。どちらもモデルファイルと対応するmmprojファイルが必要で、カスタムの視覚モデルも同じ仕組みで使えます。',
          '**音声と動画。** 使うのは埋め込みメタデータだけで、FAQによれば動画全体が視覚モデルに送られることはありません。',
          '**リモートの選択肢。** 自分のOpenAIキーでのChatGPT、自分のキーでのGemini、またはLM Studio、Ollama、ゲートウェイなどのOpenAI互換カスタムエンドポイントを使えます。READMEによれば、キーはアプリのローカルなconfig.iniに保存されます。',
          '**学習。** 承認した判断は、以後の実行でヒントとして再利用されます。READMEによれば、モデルの学習や変更は行いません。',
        ],
        note: 'これらはプロジェクト自身の説明です。PromptQuorumは、提案の質、速度、モデルのダウンロードを試していません。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**READMEによると、ローカルモデルを使う場合、ファイル、ファイル名、画像、メタデータはPC内にとどまり、テレメトリーは送信されず、インターネット接続が必要なのはリモートモデルを使うときだけです。** 分類キャッシュはconfig.iniの隣に置かれるローカルのSQLiteデータベースで、ディレクトリのパス、ファイル名、カテゴリー、提案された名前が保存されます。',
          'OpenAI、Gemini、カスタムエンドポイントを選ぶと、データは自分のアカウントでそのサービスに送られ、そのサービスのポリシーが適用されます。アプリ自体について見つかったプライバシーに関する文章は、Microsoft Storeの掲載ページからリンクされた1文の声明だけで、個人データは収集・保存・送信されず、処理はすべて端末内で行われると述べています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはプロジェクト側の表明であり、監査結果ではありません。公式サイトにプライバシーのページはなく、1文の声明にはリモートモデルの選択肢、更新通知、モデルのダウンロードへの言及がありません。READMEには、写真のGPSデータから取得した地名をキャッシュするとありますが、その検索をどのサービスが行うかは書かれていません。PromptQuorumはネットワーク通信を調べていません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**ダウンロード、スキャン、スクリーンショットのフォルダーが散らかっている人**で、提案されたフォルダーと名前を1行ずつ承認したい方。',
          '**プライバシーを重視する人**で、ローカルモデルを好み、モデルファイル用のディスク容量を確保できる方。',
          '**外付けドライブやNASのアーカイブを持つ人**で、先にマウントしてから小分けにして整理する方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**質と速度。** 提案の精度、実行時間、ハードウェアによる違いは検証していません。',
          '**ハードウェア要件。** 確認したページには、ローカルモデル向けのRAMの最小値もモデルのダウンロードサイズも記載がありません。',
          '**元に戻す機能。** READMEは「Undo last run」を、競合や変更されたファイルをスキップするベストエフォートの機能と説明しています。試していません。',
          '**プライバシー。** 存在するのは1文の声明のみです。データの流れとプライバシーを参照してください。',
          '**macOS。** ビルドはAppleの署名がなく、対応するmacOSのバージョンがREADMEとダウンロードページで異なります。',
          '**モデルのライセンス。** ダウンロードできるモデルのライセンスは確認していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        content: [
          'ディレクトリには、レビュー済みのローカルのファイル・画像ツールがほかに2つありますが、どちらも同じ方法でファイルを改名・移動するわけではありません。',
        ],
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Hyperlink (Nexa AI)](/ja/power-local-llm/hyperlink-nexa-review)', '対応プラットフォーム': 'Windows、macOS', '価格／ライセンス': '無料／プロプライエタリ', '主な違い': 'ファイルを改名・移動せず、ローカルのファイルを検索してそれに関する質問に答える' },
          { 'アプリ': '[PixlStash](/ja/power-local-llm/pixlstash-review)', '対応プラットフォーム': 'Windows、macOS、Linux', '価格／ライセンス': '無料／GPL-3.0', '主な違い': 'ローカルAIでタグ付けと検索を行う画像ライブラリ管理ツール。対象は画像のみ' },
        ],
        note: '各アプリの最新の価格、ライセンス、対応プラットフォームは、それぞれの公式ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '確定する前にAI File Sorterを閉じるとどうなりますか？',
            a: 'ファイルは変更されません。解析は提案を準備するだけだからです。FAQによれば、同じフォルダーをもう一度解析すると、保存済みの結果が再利用されることがあります。',
          },
          {
            q: 'OllamaやLM Studioと組み合わせられますか？',
            a: 'はい。OpenAI互換のカスタムエンドポイントの選択肢を使います。FAQによれば、Ollamaはローカルサーバー（通常はlocalhost:11434）経由で接続し、LM Studioで画像を扱うには視覚対応モデルが必要です。',
          },
          {
            q: 'スキャンしたPDFは読み取れますか？',
            a: 'まだ読み取れません。FAQによれば、画像だけのスキャンPDFは、先に別のツールでOCRをかける必要があります。OCRへの対応は予定されています。',
          },
          {
            q: '設定とモデルはどこに保存されますか？',
            a: '設定は、Windowsでは%APPDATA%\\AIFileSorter、macOSでは~/Library/Application Support/AIFileSorter、Linuxでは~/.config/AIFileSorterにあります。ダウンロードしたモデルは別のllmsフォルダーに置かれ、移動もできます。',
          },
          {
            q: 'バックグラウンドで常に動き続けますか？',
            a: 'いいえ。FAQでは、開いて実行し、確認して閉じるバッチ型のツールと説明されており、省リソースモードやバックグラウンドでの負荷調整は提供されていません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'AI File Sorterは、散らかったファイルに対して確認できるフォルダーとファイル名の提案を得られる、無料で更新が活発な手段です。標準はローカルモデルで、元に戻す機能も記載されています。一方で、ローカルモデル向けのRAMの目安は示されておらず、スキャンPDFと重複検出は非対応で、macOS版は署名されておらず、プライバシーに関する声明は1文だけです。品質に関する主張は、ここでは確認できませんでした。フォルダーを小分けにして確認しながら整理したい人に向いています。確実なオフライン動作が必要な場合は、自分でネットワーク監視を行って確かめてください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[AI File Sorter公式サイト](https://filesorter.app/) — 機能、ダウンロード、料金、FAQ、変更履歴のページ。2026年10月28日に確認。',
          '[GitHubのAI File Sorter](https://github.com/hyperfield/ai-file-sorter) — README、リリースノート、コミット状況。2026年10月28日に確認。',
          '[Microsoft StoreのAI File Sorter](https://apps.microsoft.com/detail/9npk4dzd6r6s) — システム要件、更新日、プライバシーに関する声明。2026年10月28日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Hyperlink (Nexa AI)レビュー](/ja/power-local-llm/hyperlink-nexa-review) — ローカルのファイルを検索し、それに関する質問に答える端末内アシスタント。',
          '[PixlStashレビュー](/ja/power-local-llm/pixlstash-review) — ローカルAIでタグ付けを行う、セルフホスト型の画像ライブラリ管理ツール。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },

  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/ai-file-sorter-review-hero-pt.webp',
    title: 'Análise do AI File Sorter: IA local para renomear e organizar arquivos',
    seoTitle: 'Análise do AI File Sorter: IA local que organiza arquivos',
    intro:
      'O AI File Sorter é um aplicativo de desktop gratuito e de código aberto para Windows, macOS e Linux que sugere pastas e nomes de arquivo mais claros para arquivos bagunçados, por padrão com um modelo local integrado ou com a sua própria conta da OpenAI ou do Gemini. Nada é movido ou renomeado até você aprovar as sugestões. Esta análise se baseia no site, no README, nas perguntas frequentes, nas notas de versão e na página da Microsoft Store, verificados em 28 de outubro de 2026.',
    metaDescription:
      'Análise do AI File Sorter: app de desktop gratuito AGPL que sugere pastas e nomes com modelos locais ou sua chave de API. Privacidade, desfazer e limites.',
    twitterDescription:
      'Análise do AI File Sorter: um aplicativo de desktop gratuito com licença AGPL que sugere pastas e nomes de arquivo com um modelo local ou sua própria chave de API. Instaladores, hardware, privacidade e o que não conseguimos verificar.',
    audience:
      'Pessoas com pastas de downloads, digitalizações, capturas de tela ou arquivos antigos bagunçadas que querem sugestões de IA para revisar, e que precisam saber o que roda localmente, o que as fontes deixam em aberto e como desfazer as alterações.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise AI File Sorter',
    targetKeywords: [
      'análise ai file sorter',
      'ia para organizar arquivos localmente',
      'renomear arquivos com ia offline',
      'ai file sorter gemma modelo local',
      'organizar a pasta de downloads com ia',
      'ai file sorter privacidade desfazer',
    ],
    current_models_mentioned: ['Gemma 3 4B IT', 'Gemma 1.1 7B', 'Mistral 7B', 'LLaVA 1.6 Mistral 7B'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Vulkan', 'Apple Metal'],
    leadAnswerBlock:
      '**O AI File Sorter (v1.9.2, lançada em 14 de agosto de 2026) é um aplicativo de desktop gratuito, com licença AGPL-3.0, para Windows, macOS e Linux que sugere pastas e novos nomes para arquivos bagunçados, por padrão com um modelo de linguagem local ou, se você escolher, com a sua própria conta da OpenAI ou do Gemini.** Ele não altera nada até você confirmar em uma janela de revisão, e o README documenta uma simulação e a função de desfazer. A PromptQuorum não o executou.',
    quickAnswerTop: {
      pt: {
        question: 'O AI File Sorter funciona offline, sem enviar arquivos?',
        answer:
          'Segundo o README e as perguntas frequentes, sim, quando você escolhe um modelo local integrado ou próprio: arquivos, nomes, imagens e metadados ficam no seu computador e nenhuma telemetria é enviada. ChatGPT, Gemini ou um endpoint personalizado exigem internet e a sua própria conta de API. A PromptQuorum não inspecionou o tráfego de rede.',
        bullets: [
          'Gratuito, AGPL-3.0; instaladores para Windows 10 ou superior, macOS e Linux em [filesorter.app](https://filesorter.app/download/).',
          'Modelos locais: Gemma 3 4B IT, Gemma 1.1 7B e Mistral 7B, ou o seu próprio arquivo GGUF.',
          'Nada é movido até você clicar em Confirm & Sort; existem uma simulação e Edit > Undo last run.',
          'Lê PDF, arquivos do Office e de texto, e imagens com um modelo visual; áudio e vídeo são renomeados pelas tags incorporadas.',
          'Não há valor de RAM documentado para os modelos locais; as perguntas frequentes dizem que cerca de 6 GB de memória de vídeo aceleram a análise de imagens.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o AI File Sorter?', anchor: 'what-is-ai-file-sorter' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Principais recursos', anchor: 'key-features' },
      { label: 'Recursos de IA e onde eles rodam', anchor: 'ai-features' },
      { label: 'Fluxo de dados e privacidade', anchor: 'privacy' },
      { label: 'Para quem serve', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Concorrentes e alternativas', anchor: 'vs-alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O AI File Sorter é um aplicativo de desktop de código aberto que pede a um modelo de linguagem local ou remoto que proponha pastas e nomes de arquivo para os arquivos de uma pasta que você escolhe, e só os aplica depois da sua aprovação.',
          },
          {
            type: 'plain-terms',
            text: 'Você aponta o aplicativo para uma pasta bagunçada, como Downloads, ele sugere onde cada arquivo deve ficar e como chamá-lo, e você desmarca as sugestões que não quiser antes de qualquer coisa ser movida.',
          },
        ],
        items: [
          'Manutenção: a versão mais recente, v1.9.2, saiu em 14 de agosto de 2026 e o repositório do GitHub recebeu um push em 19 de outubro de 2026, portanto não se aplica nenhum aviso de projeto abandonado.',
          'Responsável: o site cita a HF Studio; o código-fonte está no GitHub, no usuário hyperfield.',
          'Custo: o aplicativo principal é gratuito; uma extensão do Windows para o menu de contexto é um complemento pago da Microsoft Store, e as doações são opcionais.',
          'Escopo: ele organiza e renomeia arquivos; não é um aplicativo de chat, e o projeto lista a detecção de duplicatas e o OCR de PDFs digitalizados como planejados, não disponíveis.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site, no README, nas perguntas frequentes, nas notas de versão e na página da Microsoft Store do projeto, verificados em 28 de outubro de 2026. A PromptQuorum não instalou o AI File Sorter, portanto a qualidade das sugestões, a velocidade e o comportamento do desfazer não são avaliados.',
          },
        ],
      },
      overview: {
        id: 'what-is-ai-file-sorter',
        title: 'O que é o AI File Sorter?',
        content: [
          '**O AI File Sorter é um aplicativo de desktop que sugere categorias, subpastas e nomes mais claros para os arquivos de uma pasta que você seleciona, e os move ou renomeia depois da sua confirmação.** O README o descreve como uma ferramenta multiplataforma para organizar e renomear arquivos com base no conteúdo; o código-fonte é aberto sob a licença AGPL-3.0.',
          'Em vez de depender apenas de regras fixas, segundo o README ele combina as sugestões do modelo com listas de permissão opcionais, resultados semelhantes recentes e as suas decisões de revisão aprovadas. O rodapé do site indica a HF Studio como publicadora.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Onde obter',
        content: [
          '**O AI File Sorter é instalado como qualquer programa de desktop: instalador ou versão portátil para Windows, imagens de disco para macOS e pacotes para Linux, todos na página oficial de download.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          { 'Opção': 'Windows', 'Onde obter': 'Instalador ou versão portátil para Windows 10 ou superior na [página de download](https://filesorter.app/download/)' },
          { 'Opção': 'Windows (Store)', 'Onde obter': '[Microsoft Store](https://apps.microsoft.com/detail/9npk4dzd6r6s); segundo a página de download, sem suporte a CUDA, a aceleração com Vulkan funciona' },
          { 'Opção': 'macOS', 'Onde obter': 'Imagens de disco para Apple Silicon (M2 a M5, e M1) e Intel na [página de download](https://filesorter.app/download/); não são assinadas com um certificado da Apple, então [aprove uma vez](https://filesorter.app/download/macos-open/)' },
          { 'Opção': 'Linux', 'Onde obter': 'Pacotes para Debian, Ubuntu, Fedora, Rocky e Arch na [página de download](https://filesorter.app/download/)' },
          { 'Opção': 'Site', 'Onde obter': '[filesorter.app](https://filesorter.app/)' },
          { 'Opção': 'Política de privacidade', 'Onde obter': 'Não há página no site; uma [declaração de uma frase](https://cdn.storeedgefd.dsx.mp.microsoft.com/eus2/privacy-policy-storage/92877400/00013788018020998399/1152921505700233027/privacy_policy_c70aeb11-d00c-4729-8362-6322790ef497.txt) está vinculada na página da Microsoft Store' },
          { 'Opção': 'Código-fonte', 'Onde obter': '[github.com/hyperfield/ai-file-sorter](https://github.com/hyperfield/ai-file-sorter)' },
        ],
        note: 'Versão analisada: v1.9.2, publicada em 14 de agosto de 2026 segundo a versão do GitHub; a página da Microsoft Store mostra a mesma data de atualização. A versão do GitHub não lista arquivos para baixar, então os instaladores vêm do site, da Store e do SourceForge. Não é preciso terminal; compilar a partir do código-fonte exige uma cadeia de ferramentas C++ e o Qt 6.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**O README, as perguntas frequentes e o site não documentam um mínimo de RAM nem de VRAM para os modelos locais; os valores que existem descrevem o aplicativo e o uso opcional da GPU.**',
        ],
        columns: ['Item', 'O que dizem as fontes'],
        rows: [
          { 'Item': 'Sistema operacional', 'O que dizem as fontes': 'Windows 10 versão 1809 ou superior segundo a página da Microsoft Store; versões para macOS e Linux na página de download. O README diz que as compilações do macOS a partir do código-fonte miram o Apple Silicon com macOS 15 ou superior, enquanto a página de download também oferece imagens de disco para M1 e Intel' },
          { 'Item': 'Memória', 'O que dizem as fontes': 'A página da Store informa 750 MB como mínimo e 1 GB recomendado para o próprio aplicativo; nenhum valor é dado para rodar os modelos de linguagem' },
          { 'Item': 'GPU', 'O que dizem as fontes': 'Opcional. CUDA 12.x para NVIDIA ou Vulkan 1.2 ou superior, mais Metal em hardware Apple; o aplicativo recorre à CPU. Segundo o README, 8 GB ou mais de VRAM dão uma experiência mais fluida, enquanto 4 GB costumam significar descarregamento parcial ou retorno à CPU' },
          { 'Item': 'Análise de imagens', 'O que dizem as fontes': 'Segundo as perguntas frequentes, uma GPU dedicada com cerca de 6 GB ou mais de memória de vídeo acelera bastante a leitura de imagens, e na CPU pode ser muito mais lento' },
          { 'Item': 'Modelos', 'O que dizem as fontes': 'Baixados na caixa de diálogo «Select LLM» para uma pasta de armazenamento que você pode mudar; os tamanhos dos downloads não aparecem nas páginas lidas' },
          { 'Item': 'Teste de hardware', 'O que dizem as fontes': 'Um «System compatibility check» integrado mede uma carga pequena e sugere um modelo local para o seu computador' },
        ],
        note: 'Esses valores vêm do projeto e da página da Store; a PromptQuorum não mediu o uso de memória nem a velocidade em nenhum hardware.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Estes passos seguem a dica «Safe First Run» do README; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Instale o aplicativo',
            whyItMatters: 'Baixe a versão para o seu sistema na página de download; no macOS, aprove uma vez o aplicativo sem assinatura em «Privacidade e Segurança».',
          },
          {
            title: 'Escolha um modelo',
            whyItMatters: 'Abra Settings e depois «Select LLM» e baixe um modelo local, ou informe no lugar disso a sua própria chave da OpenAI ou do Gemini, ou um endpoint personalizado.',
          },
          {
            title: 'Teste primeiro com uma cópia pequena',
            whyItMatters: 'Copie de 20 a 50 arquivos para uma pasta temporária, selecione-a, marque as opções desejadas e clique em Analyze.',
          },
          {
            title: 'Revise e depois aplique',
            whyItMatters: 'Confira as categorias e os nomes sugeridos, execute a simulação se quiser, clique em Confirm & Sort e use Edit e depois «Undo last run» se mudar de ideia.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Principais recursos',
        content: [
          '**Cada item abaixo vem do README, das perguntas frequentes ou do site; a PromptQuorum não testou nenhum deles.**',
        ],
        items: [
          '**Categorização.** Uma categoria e, opcionalmente, uma subcategoria por arquivo, no modo «More refined» ou «More consistent», com listas de permissão nomeadas em que cada categoria principal pode ter suas próprias subcategorias permitidas.',
          '**Renomeação.** Nomes sugeridos para imagens e documentos, e nomes montados a partir de tags incorporadas para áudio e vídeo, como year_artist_album_title.mp3; um modo só de renomear deixa os arquivos onde estão.',
          '**Segurança.** Uma tabela de revisão com pré-visualização dos arquivos, uma simulação que mostra os caminhos de origem e destino, um plano de desfazer salvo e uma proteção de pastas de projeto que ignora projetos Unity, Unreal, Godot, Blender, Git e de código-fonte comuns.',
          '**Memória.** Um cache SQLite local e um armazenamento separado das suas decisões aprovadas, ambos com ferramentas de limpeza e redefinição em Settings.',
          '**Pastas.** Pastas locais, pastas de nuvem sincronizadas, unidades externas e compartilhamentos de rede montados; com um NAS, você primeiro atribui uma letra de unidade no Windows ou monta o compartilhamento no Linux e no macOS.',
          '**Idiomas.** Os idiomas da interface incluem alemão, francês, espanhol, coreano e chinês simplificado; o idioma das categorias e dos nomes depende do modelo, e o Gemma 1.1 7B só entende inglês.',
          '**Extensão do Windows.** Um complemento opcional e pago do menu de contexto na Microsoft Store inicia limpezas a partir do Explorador de Arquivos.',
        ],
        note: 'As perguntas frequentes do projeto listam o OCR de PDFs digitalizados, a detecção de duplicatas e uma lista para incluir ou ignorar tipos de arquivo como planejados, não disponíveis.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Recursos de IA e onde eles rodam',
        content: [
          '**Um modelo de linguagem lê os nomes dos arquivos, o contexto das pastas e, onde há suporte, o conteúdo dos arquivos, e propõe a categoria e o novo nome; o modelo pode ser local ou remoto.**',
        ],
        items: [
          '**Modelos de texto locais.** Gemma 3 4B IT, Gemma 1.1 7B e Mistral 7B são opções integradas, e você pode registrar o seu próprio arquivo GGUF; eles rodam em um runtime llama.cpp incorporado.',
          '**Documentos.** Os formatos PDF, Word, Excel, PowerPoint, OpenDocument e texto simples são lidos e repassados ao modelo selecionado; os arquivos antigos .doc, .xls e .ppt não têm suporte.',
          '**Imagens.** Dois backends visuais integrados, Gemma 3 4B IT como padrão e LLaVA 1.6 Mistral 7B, cada um exigindo um arquivo de modelo e um arquivo mmproj correspondente; modelos visuais personalizados funcionam da mesma forma.',
          '**Áudio e vídeo.** Só os metadados incorporados são usados; as perguntas frequentes dizem que vídeos inteiros não são enviados a um modelo de visão.',
          '**Opções remotas.** ChatGPT com a sua própria chave da OpenAI, Gemini com a sua própria chave, ou um endpoint personalizado compatível com a OpenAI, como LM Studio, Ollama ou um gateway; segundo o README, as chaves ficam no config.ini local do aplicativo.',
          '**Aprendizado.** As decisões aprovadas são reaproveitadas como dicas em execuções futuras; segundo o README, isso não treina nem altera o modelo.',
        ],
        note: 'Estas são declarações do próprio projeto. A PromptQuorum não testou a qualidade das sugestões, a velocidade nem os downloads dos modelos.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**O README diz que, com um modelo local, seus arquivos, nomes de arquivo, imagens e metadados ficam no seu computador, nenhuma telemetria é enviada e uma conexão com a internet só é necessária para um modelo remoto.** O cache de categorização é um banco SQLite local ao lado do config.ini, que guarda caminhos de pastas, nomes de arquivo, categorias e nomes sugeridos.',
          'Se você escolher a OpenAI, o Gemini ou um endpoint personalizado, os dados vão para esse serviço sob a sua própria conta, e a política dele se aplica. O único texto de privacidade encontrado para o próprio aplicativo é uma declaração de uma frase vinculada na página da Microsoft Store: ela diz que nenhum dado pessoal é coletado, armazenado ou transmitido e que todo o processamento fica no dispositivo.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações do projeto, não resultados de auditoria. O site não tem página de privacidade, e a declaração de uma frase não menciona a opção de modelo remoto, as notificações de atualização nem os downloads de modelos. O README diz que um cache guarda nomes de lugares obtidos a partir dos dados de GPS das fotos, mas não qual serviço faz essa consulta. A PromptQuorum não inspecionou o tráfego de rede.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Pessoas com uma pasta de downloads, digitalizações ou capturas de tela transbordando** que querem aprovar linha a linha as pastas e os nomes sugeridos.',
          '**Usuários preocupados com privacidade** que preferem um modelo local e podem reservar espaço em disco para os arquivos de modelos.',
          '**Donos de unidades externas ou de arquivos em NAS** que os montam primeiro e organizam em lotes pequenos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade e velocidade.** A precisão das sugestões, o tempo de execução e o efeito de hardwares diferentes não foram testados.',
          '**Necessidades de hardware.** As páginas lidas não trazem um mínimo de RAM para os modelos locais nem os tamanhos de download dos modelos.',
          '**Desfazer.** O README descreve «Undo last run» como um esforço razoável que ignora conflitos e arquivos alterados; não foi testado.',
          '**Privacidade.** Existe apenas uma declaração de uma frase; veja Fluxo de dados e privacidade.',
          '**macOS.** As compilações não são assinadas pela Apple, e as versões do macOS compatíveis diferem entre o README e a página de download.',
          '**Licenças dos modelos.** As licenças dos modelos disponíveis para download não foram analisadas.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        content: [
          'O diretório tem outras duas ferramentas locais de arquivos e imagens com análise, e nenhuma delas renomeia e move arquivos do mesmo jeito.',
        ],
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[Hyperlink (Nexa AI)](/pt/power-local-llm/hyperlink-nexa-review)', 'Plataformas': 'Windows, macOS', 'Preço / licença': 'Grátis / Proprietária', 'Diferença principal': 'Pesquisa os seus arquivos locais e responde a perguntas sobre eles, em vez de renomeá-los ou movê-los' },
          { 'App': '[PixlStash](/pt/power-local-llm/pixlstash-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / GPL-3.0', 'Diferença principal': 'Gerenciador de biblioteca de imagens com marcação e busca por IA local; cobre apenas imagens' },
        ],
        note: 'Confirme o preço, a licença e as plataformas atuais de cada app na própria página dele.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que acontece se eu fechar o AI File Sorter antes de confirmar?',
            a: 'Nenhum arquivo muda, porque a análise apenas prepara sugestões. Segundo as perguntas frequentes, os resultados salvos podem ser reaproveitados quando você analisa a mesma pasta de novo.',
          },
          {
            q: 'Posso usá-lo com Ollama ou LM Studio?',
            a: 'Sim, pela opção de endpoint personalizado compatível com a OpenAI; segundo as perguntas frequentes, o Ollama é acessado pelo seu servidor local, geralmente em localhost:11434, e o LM Studio precisa de um modelo com visão para imagens.',
          },
          {
            q: 'Ele consegue ler PDFs digitalizados?',
            a: 'Ainda não. Segundo as perguntas frequentes, PDFs digitalizados, formados só por imagens, precisam antes de OCR com outra ferramenta; o suporte a OCR está planejado.',
          },
          {
            q: 'Onde ficam as configurações e os modelos?',
            a: 'As configurações ficam em %APPDATA%\\AIFileSorter no Windows, em ~/Library/Application Support/AIFileSorter no macOS e em ~/.config/AIFileSorter no Linux; os modelos baixados ficam em uma pasta llms separada, que pode ser movida.',
          },
          {
            q: 'Ele fica rodando em segundo plano?',
            a: 'Não. As perguntas frequentes o descrevem como uma ferramenta em lote que você abre, executa, revisa e fecha, e dizem que não há modo de baixo consumo nem limitação em segundo plano.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O AI File Sorter é um jeito gratuito e com atualizações ativas de obter sugestões revisáveis de pastas e nomes para arquivos bagunçados, com um modelo local como padrão e uma função de desfazer documentada. Em contrapartida, as fontes não dão nenhum valor de RAM para os modelos locais, PDFs digitalizados e detecção de duplicatas não têm suporte, as compilações do macOS não são assinadas, a única declaração de privacidade tem uma frase e nenhuma das afirmações de qualidade pôde ser verificada aqui. Ele serve para quem quer organizar uma pasta em lotes pequenos e revisados; quem precisa de funcionamento offline garantido deve confirmá-lo com o próprio monitoramento de rede.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do AI File Sorter](https://filesorter.app/) — páginas de recursos, download, preços, perguntas frequentes e registro de alterações, verificadas em 28 de outubro de 2026.',
          '[AI File Sorter no GitHub](https://github.com/hyperfield/ai-file-sorter) — README, notas de versão e atividade de commits, verificados em 28 de outubro de 2026.',
          '[AI File Sorter na Microsoft Store](https://apps.microsoft.com/detail/9npk4dzd6r6s) — requisitos do sistema, data de atualização e declaração de privacidade, verificados em 28 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Hyperlink (Nexa AI)](/pt/power-local-llm/hyperlink-nexa-review) — assistente no dispositivo que pesquisa os arquivos locais e responde a perguntas sobre eles.',
          '[Análise do PixlStash](/pt/power-local-llm/pixlstash-review) — gerenciador de biblioteca de imagens auto-hospedado com marcação por IA local.',
          '[Diretório de software para LLMs locais](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },

  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/ai-file-sorter-review-hero-ar.webp',
    title: 'مراجعة AI File Sorter: ذكاء اصطناعي محلي لإعادة تسمية الملفات وفرزها',
    seoTitle: 'مراجعة AI File Sorter: ذكاء اصطناعي محلي لفرز الملفات',
    intro:
      'AI File Sorter تطبيق سطح مكتب مجاني ومفتوح المصدر لأنظمة Windows وmacOS وLinux، يقترح مجلدات وأسماء ملفات أوضح للملفات غير المنظمة، افتراضيًا بنموذج محلي مدمج أو بحسابك الخاص في OpenAI أو Gemini. لا يُنقل أي ملف ولا يُعاد تسميته قبل أن توافق على الاقتراحات. تستند هذه المراجعة إلى موقع التطبيق وملف README والأسئلة الشائعة وملاحظات الإصدار وصفحته في Microsoft Store، وقد روجعت في 28 أكتوبر 2026.',
    metaDescription:
      'مراجعة AI File Sorter: تطبيق مجاني بترخيص AGPL يقترح المجلدات وأسماء الملفات بنماذج محلية أو بمفتاح API الخاص بك. الخصوصية والتراجع والحدود.',
    twitterDescription:
      'مراجعة AI File Sorter: تطبيق سطح مكتب مجاني بترخيص AGPL يقترح المجلدات وأسماء الملفات بنموذج محلي أو بمفتاح API الخاص بك. المثبّتات والعتاد والخصوصية وما لم نتمكن من التحقق منه.',
    audience:
      'أصحاب مجلدات التنزيلات أو المسح الضوئي أو لقطات الشاشة أو الأرشيف المزدحمة الذين يريدون اقتراحات ذكاء اصطناعي يمكنهم مراجعتها، ويحتاجون إلى معرفة ما يعمل محليًا وما تتركه المصادر مفتوحًا وكيف يمكن التراجع عن التغييرات.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة AI File Sorter',
    targetKeywords: [
      'مراجعة ai file sorter',
      'ذكاء اصطناعي لترتيب الملفات محليًا',
      'إعادة تسمية الملفات بالذكاء الاصطناعي دون اتصال',
      'ai file sorter نموذج gemma محلي',
      'ترتيب مجلد التنزيلات بالذكاء الاصطناعي',
      'ai file sorter الخصوصية والتراجع',
    ],
    current_models_mentioned: ['Gemma 3 4B IT', 'Gemma 1.1 7B', 'Mistral 7B', 'LLaVA 1.6 Mistral 7B'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Vulkan', 'Apple Metal'],
    leadAnswerBlock:
      '**AI File Sorter (الإصدار v1.9.2، صدر في 14 أغسطس 2026) تطبيق سطح مكتب مجاني بترخيص AGPL-3.0 لأنظمة Windows وmacOS وLinux، يقترح مجلدات وأسماء جديدة للملفات غير المنظمة، افتراضيًا بنموذج لغوي محلي أو، إن اخترت ذلك، بحسابك الخاص في OpenAI أو Gemini.** لا يغيّر شيئًا قبل أن تؤكد في نافذة المراجعة، ويوثّق ملف README تشغيلًا تجريبيًا وخاصية للتراجع. لم تشغّله PromptQuorum.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل AI File Sorter دون اتصال ودون رفع الملفات؟',
        answer:
          'وفق ملف README والأسئلة الشائعة، نعم عند اختيار نموذج محلي مدمج أو مخصص: تبقى الملفات وأسماؤها والصور والبيانات الوصفية على حاسوبك ولا تُرسل أي بيانات قياس. أما ChatGPT أو Gemini أو نقطة وصول مخصصة فتتطلب الإنترنت وحساب API خاصًا بك. لم تفحص PromptQuorum حركة الشبكة.',
        bullets: [
          'مجاني بترخيص AGPL-3.0؛ مثبّتات لنظام Windows 10 أو أحدث وmacOS وLinux على [filesorter.app](https://filesorter.app/download/).',
          'نماذج محلية: Gemma 3 4B IT وGemma 1.1 7B وMistral 7B، أو ملف GGUF الخاص بك.',
          'لا يُنقل شيء حتى تنقر على Confirm & Sort؛ ويوجد تشغيل تجريبي وEdit > Undo last run.',
          'يقرأ ملفات PDF وOffice والنصوص، والصور عبر نموذج بصري؛ ويُعاد تسمية الصوت والفيديو من الوسوم المضمّنة.',
          'لا توجد قيمة موثّقة للذاكرة RAM للنماذج المحلية؛ وتقول الأسئلة الشائعة إن نحو 6 GB من ذاكرة الفيديو تسرّع فحص الصور.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو AI File Sorter؟', anchor: 'what-is-ai-file-sorter' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات الرئيسية', anchor: 'key-features' },
      { label: 'ميزات الذكاء الاصطناعي وأين تعمل', anchor: 'ai-features' },
      { label: 'تدفق البيانات والخصوصية', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
      { label: 'المنافسون والبدائل', anchor: 'vs-alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AI File Sorter تطبيق سطح مكتب مفتوح المصدر يطلب من نموذج لغوي محلي أو بعيد اقتراح مجلدات وأسماء ملفات للملفات الموجودة في مجلد تختاره، ثم لا يطبّقها إلا بعد موافقتك.',
          },
          {
            type: 'plain-terms',
            text: 'توجّه التطبيق إلى مجلد غير منظم مثل التنزيلات، فيقترح أين يوضع كل ملف وبأي اسم، وتلغي تحديد الاقتراحات التي لا تريدها قبل نقل أي شيء.',
          },
        ],
        items: [
          'الصيانة: صدر أحدث إصدار، v1.9.2، في 14 أغسطس 2026، وتلقّى مستودع GitHub عملية دفع في 19 أكتوبر 2026، لذلك لا ينطبق تحذير المشروع المهجور.',
          'الجهة المطوّرة: يذكر الموقع HF Studio؛ والمصدر البرمجي على GitHub لدى المستخدم hyperfield.',
          'التكلفة: التطبيق الأساسي مجاني؛ أما إضافة قائمة النقر بزر الفأرة الأيمن في Windows فهي إضافة مدفوعة في Microsoft Store، والتبرعات اختيارية.',
          'النطاق: يفرز الملفات ويعيد تسميتها؛ وهو ليس تطبيق محادثة، ويصنّف المشروع اكتشاف التكرارات وOCR لملفات PDF الممسوحة ضوئيًا على أنهما مخطَّطان وليسا متاحين.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع المشروع وملف README والأسئلة الشائعة وملاحظات الإصدار وصفحة Microsoft Store، وقد روجعت في 28 أكتوبر 2026. لم تثبّت PromptQuorum تطبيق AI File Sorter، لذلك لا تُقيَّم جودة اقتراحاته ولا سرعته ولا سلوك التراجع فيه.',
          },
        ],
      },
      overview: {
        id: 'what-is-ai-file-sorter',
        title: 'ما هو AI File Sorter؟',
        content: [
          '**AI File Sorter تطبيق سطح مكتب يقترح فئات ومجلدات فرعية وأسماء أوضح لملفات المجلد الذي تحدده، ثم ينقلها أو يعيد تسميتها بعد تأكيدك.** يصفه ملف README بأنه أداة متعددة المنصات لتنظيم الملفات وإعادة تسميتها بحسب محتواها؛ والشيفرة المصدرية مفتوحة بترخيص AGPL-3.0.',
          'بدلًا من الاعتماد على قواعد ثابتة فقط، يجمع التطبيق وفق README بين اقتراحات النموذج وقوائم السماح الاختيارية والنتائج المشابهة الحديثة وقرارات المراجعة التي وافقت عليها. ويذكر تذييل الموقع HF Studio بوصفها الناشر.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت AI File Sorter مثل أي برنامج سطح مكتب: مثبّت أو نسخة محمولة لنظام Windows، وصور أقراص لنظام macOS، وحزم لنظام Linux، وكلها في صفحة التنزيل الرسمية.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          { 'الخيار': 'Windows', 'مصدر الحصول عليه': 'مثبّت أو نسخة محمولة لنظام Windows 10 أو أحدث في [صفحة التنزيل](https://filesorter.app/download/)' },
          { 'الخيار': 'Windows (المتجر)', 'مصدر الحصول عليه': '[Microsoft Store](https://apps.microsoft.com/detail/9npk4dzd6r6s)؛ وفق صفحة التنزيل لا يدعم CUDA، ويعمل التسريع عبر Vulkan' },
          { 'الخيار': 'macOS', 'مصدر الحصول عليه': 'صور أقراص لمعالجات Apple Silicon (من M2 إلى M5، وكذلك M1) ولمعالجات Intel في [صفحة التنزيل](https://filesorter.app/download/)؛ وهي غير موقّعة بشهادة من Apple، لذا [وافق عليه مرة واحدة](https://filesorter.app/download/macos-open/)' },
          { 'الخيار': 'Linux', 'مصدر الحصول عليه': 'حزم لتوزيعات Debian وUbuntu وFedora وRocky وArch في [صفحة التنزيل](https://filesorter.app/download/)' },
          { 'الخيار': 'الموقع', 'مصدر الحصول عليه': '[filesorter.app](https://filesorter.app/)' },
          { 'الخيار': 'سياسة الخصوصية', 'مصدر الحصول عليه': 'لا توجد صفحة على الموقع؛ و[بيان من جملة واحدة](https://cdn.storeedgefd.dsx.mp.microsoft.com/eus2/privacy-policy-storage/92877400/00013788018020998399/1152921505700233027/privacy_policy_c70aeb11-d00c-4729-8362-6322790ef497.txt) مرتبط من صفحة Microsoft Store' },
          { 'الخيار': 'الشيفرة المصدرية', 'مصدر الحصول عليه': '[github.com/hyperfield/ai-file-sorter](https://github.com/hyperfield/ai-file-sorter)' },
        ],
        note: 'الإصدار المراجَع: v1.9.2، صدر في 14 أغسطس 2026 وفق إصدار GitHub؛ وتعرض صفحة Microsoft Store تاريخ التحديث نفسه. لا يتضمن إصدار GitHub ملفات للتنزيل، لذا تأتي المثبّتات من الموقع ومن المتجر ومن SourceForge. لا حاجة إلى طرفية؛ أما البناء من الشيفرة المصدرية فيتطلب أدوات C++ وQt 6.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**لا يوثّق ملف README ولا الأسئلة الشائعة ولا الموقع حدًا أدنى للذاكرة RAM أو VRAM للنماذج المحلية؛ والأرقام الموجودة تصف التطبيق والاستخدام الاختياري لوحدة GPU.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          { 'البند': 'نظام التشغيل', 'ما تقوله المصادر': 'Windows 10 الإصدار 1809 أو أحدث وفق صفحة Microsoft Store؛ ونسخ macOS وLinux في صفحة التنزيل. يقول README إن بناء macOS من المصدر يستهدف Apple Silicon مع macOS 15 أو أحدث، بينما تعرض صفحة التنزيل أيضًا صور أقراص لمعالجي M1 وIntel' },
          { 'البند': 'الذاكرة', 'ما تقوله المصادر': 'تذكر صفحة المتجر 750 MB كحد أدنى و1 GB موصى به للتطبيق نفسه؛ ولا يُذكر رقم لتشغيل النماذج اللغوية' },
          { 'البند': 'وحدة GPU', 'ما تقوله المصادر': 'اختيارية. CUDA 12.x لبطاقات NVIDIA أو Vulkan 1.2 أو أحدث، إضافة إلى Metal على عتاد Apple؛ ويعود التطبيق إلى المعالج CPU. يقول README إن 8 GB أو أكثر من VRAM يمنحان تجربة أسلس، بينما تعني 4 GB غالبًا نقلًا جزئيًا إلى GPU أو الرجوع إلى CPU' },
          { 'البند': 'تحليل الصور', 'ما تقوله المصادر': 'تقول الأسئلة الشائعة إن وحدة GPU منفصلة بنحو 6 GB أو أكثر من ذاكرة الفيديو تسرّع فحص الصور كثيرًا، وإنه قد يكون أبطأ بكثير على CPU' },
          { 'البند': 'النماذج', 'ما تقوله المصادر': 'تُنزَّل من مربع الحوار «Select LLM» إلى مجلد تخزين يمكنك تغييره؛ ولا تُذكر أحجام التنزيل في الصفحات المقروءة' },
          { 'البند': 'فحص العتاد', 'ما تقوله المصادر': 'يقيس «System compatibility check» المدمج حملًا صغيرًا ويقترح نموذجًا محليًا مناسبًا لجهازك' },
        ],
        note: 'هذه الأرقام من المشروع ومن صفحة المتجر؛ ولم تقِس PromptQuorum استهلاك الذاكرة ولا السرعة على أي عتاد.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع هذه الخطوات نصيحة «Safe First Run» في README؛ ولم تنفذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل النسخة المناسبة لنظامك من صفحة التنزيل؛ وفي macOS وافق مرة واحدة على التطبيق غير الموقّع من «الخصوصية والأمان».',
          },
          {
            title: 'اختر نموذجًا',
            whyItMatters: 'افتح Settings ثم «Select LLM» ونزّل نموذجًا محليًا، أو أدخل بدلًا من ذلك مفتاح OpenAI أو Gemini الخاص بك أو نقطة وصول مخصصة.',
          },
          {
            title: 'جرّب أولًا نسخة صغيرة',
            whyItMatters: 'انسخ من 20 إلى 50 ملفًا إلى مجلد مؤقت، وحدده، وفعّل الخيارات التي تريدها، ثم انقر على Analyze.',
          },
          {
            title: 'راجع ثم طبّق',
            whyItMatters: 'تحقق من الفئات والأسماء المقترحة، وشغّل التجربة إن شئت، وانقر على Confirm & Sort، واستخدم Edit ثم «Undo last run» إن غيّرت رأيك.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات الرئيسية',
        content: [
          '**كل بند أدناه مأخوذ من README أو الأسئلة الشائعة أو الموقع؛ ولم تختبر PromptQuorum أيًّا منها.**',
        ],
        items: [
          '**التصنيف.** فئة واحدة وفئة فرعية اختيارية لكل ملف، بوضع «More refined» أو «More consistent»، مع قوائم سماح مسمّاة يمكن لكل فئة رئيسية فيها أن تملك فئاتها الفرعية المسموح بها.',
          '**إعادة التسمية.** أسماء مقترحة للصور والمستندات، وأسماء مبنية من الوسوم المضمّنة للصوت والفيديو مثل year_artist_album_title.mp3؛ ويترك وضع إعادة التسمية فقط الملفات في أماكنها.',
          '**الأمان.** جدول مراجعة مع معاينة للملفات، وتشغيل تجريبي يعرض مسارات المصدر والوجهة، وخطة تراجع محفوظة، وحماية لمجلدات المشاريع تتخطى مشاريع Unity وUnreal وGodot وBlender وGit ومشاريع الشيفرة المصدرية الشائعة.',
          '**الذاكرة.** ذاكرة تخزين مؤقت محلية بصيغة SQLite ومخزن منفصل لقراراتك المعتمدة، لكل منهما أدوات مسح وإعادة ضبط في Settings.',
          '**المجلدات.** مجلدات محلية ومجلدات سحابية متزامنة وأقراص خارجية ومشاركات شبكية مثبّتة؛ وفي حالة NAS تعيّن أولًا حرف قرص في Windows أو تثبّت المشاركة في Linux وmacOS.',
          '**اللغات.** تشمل لغات الواجهة الألمانية والفرنسية والإسبانية والكورية والصينية المبسطة؛ أما لغة الفئات والأسماء فتعتمد على النموذج، ويدعم Gemma 1.1 7B الإنجليزية فقط.',
          '**إضافة Windows.** إضافة اختيارية مدفوعة في Microsoft Store لقائمة النقر بزر الفأرة الأيمن تبدأ عمليات التنظيف من مستكشف الملفات.',
        ],
        note: 'تصنّف الأسئلة الشائعة للمشروع OCR لملفات PDF الممسوحة واكتشاف التكرارات وقائمة تضمين أو استثناء لأنواع الملفات على أنها مخطَّطة وليست متاحة.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'ميزات الذكاء الاصطناعي وأين تعمل',
        content: [
          '**يقرأ نموذج لغوي أسماء الملفات وسياق المجلدات، وحيث يُدعم يقرأ محتوى الملفات، ثم يقترح الفئة والاسم الجديد؛ ويمكن أن يكون النموذج محليًا أو بعيدًا.**',
        ],
        items: [
          '**نماذج النص المحلية.** Gemma 3 4B IT وGemma 1.1 7B وMistral 7B خيارات مدمجة، ويمكنك تسجيل ملف GGUF الخاص بك؛ وتعمل على بيئة تشغيل llama.cpp مضمّنة.',
          '**المستندات.** تُقرأ صيغ PDF وWord وExcel وPowerPoint وOpenDocument والنص العادي وتُمرَّر إلى النموذج المحدد؛ أما ملفات .doc و.xls و.ppt القديمة فغير مدعومة.',
          '**الصور.** واجهتان بصريتان مدمجتان، هما Gemma 3 4B IT افتراضيًا وLLaVA 1.6 Mistral 7B، وتحتاج كل منهما إلى ملف نموذج وملف mmproj مطابق؛ وتعمل النماذج البصرية المخصصة بالطريقة نفسها.',
          '**الصوت والفيديو.** تُستخدم البيانات الوصفية المضمّنة فقط؛ وتقول الأسئلة الشائعة إن مقاطع الفيديو الكاملة لا تُرسل إلى نموذج رؤية.',
          '**الخيارات البعيدة.** ChatGPT بمفتاح OpenAI الخاص بك، أو Gemini بمفتاحك الخاص، أو نقطة وصول مخصصة متوافقة مع OpenAI مثل LM Studio أو Ollama أو بوابة؛ ويقول README إن المفاتيح تُخزَّن في ملف config.ini المحلي للتطبيق.',
          '**التعلّم.** تُعاد الاستفادة من القرارات المعتمدة كتلميحات في التشغيلات اللاحقة؛ ويقول README إن ذلك لا يدرّب النموذج ولا يغيّره.',
        ],
        note: 'هذه تصريحات المشروع نفسه. لم تختبر PromptQuorum جودة الاقتراحات ولا السرعة ولا تنزيلات النماذج.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**يقول README إنه مع نموذج محلي تبقى ملفاتك وأسماؤها وصورك وبياناتها الوصفية على حاسوبك، ولا تُرسل بيانات قياس، ولا يلزم الاتصال بالإنترنت إلا للنموذج البعيد.** وذاكرة التصنيف المؤقتة قاعدة بيانات SQLite محلية بجوار config.ini تخزّن مسارات المجلدات وأسماء الملفات والفئات والأسماء المقترحة.',
          'إذا اخترت OpenAI أو Gemini أو نقطة وصول مخصصة فستذهب البيانات إلى تلك الخدمة تحت حسابك الخاص، وتنطبق سياستها. والنص الوحيد عن الخصوصية الذي وجدناه للتطبيق نفسه بيان من جملة واحدة مرتبط من صفحة Microsoft Store، ويقول إنه لا تُجمع بيانات شخصية ولا تُخزَّن ولا تُنقل، وإن المعالجة كلها تبقى على الجهاز.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات من المشروع وليست نتائج تدقيق. لا توجد على الموقع صفحة للخصوصية، ولا يذكر البيان ذو الجملة الواحدة خيار النموذج البعيد ولا إشعارات التحديث ولا تنزيلات النماذج. ويقول README إن ذاكرة مؤقتة تحتفظ بأسماء أماكن جُلبت من بيانات GPS في الصور، لكنه لا يحدد أي خدمة تجري هذا البحث. ولم تفحص PromptQuorum حركة الشبكة.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**أصحاب مجلد تنزيلات أو مسح ضوئي أو لقطات شاشة مزدحم** الذين يريدون الموافقة على المجلدات والأسماء المقترحة سطرًا سطرًا.',
          '**المهتمون بالخصوصية** الذين يفضّلون نموذجًا محليًا ويستطيعون تخصيص مساحة قرص لملفات النماذج.',
          '**أصحاب الأقراص الخارجية أو أرشيفات NAS** الذين يثبّتونها أولًا ويفرزون على دفعات صغيرة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة والسرعة.** لم تُختبر دقة الاقتراحات ولا زمن التشغيل ولا أثر اختلاف العتاد.',
          '**احتياجات العتاد.** لا تتضمن الصفحات المقروءة حدًا أدنى للذاكرة RAM للنماذج المحلية ولا أحجام تنزيل النماذج.',
          '**التراجع.** يصف README خاصية «Undo last run» بأنها بذل أقصى جهد، وتتخطى التعارضات والملفات التي تغيّرت؛ ولم تُجرَّب.',
          '**الخصوصية.** لا يوجد سوى بيان من جملة واحدة؛ راجع تدفق البيانات والخصوصية.',
          '**macOS.** النسخ غير موقّعة من Apple، وتختلف إصدارات macOS المدعومة بين README وصفحة التنزيل.',
          '**تراخيص النماذج.** لم تُراجَع تراخيص النماذج القابلة للتنزيل.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        content: [
          'يضم الدليل أداتين محليتين أخريين للملفات والصور لهما مراجعة، ولا تعيد أي منهما تسمية الملفات ونقلها بالطريقة نفسها.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[Hyperlink (Nexa AI)](/ar/power-local-llm/hyperlink-nexa-review)', 'المنصات': 'Windows وmacOS', 'السعر / الرخصة': 'مجاني / مملوك', 'الفرق الأبرز': 'يبحث في ملفاتك المحلية ويجيب عن الأسئلة المتعلقة بها بدلًا من إعادة تسميتها أو نقلها' },
          { 'التطبيق': '[PixlStash](/ar/power-local-llm/pixlstash-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الرخصة': 'مجاني / GPL-3.0', 'الفرق الأبرز': 'مدير لمكتبة الصور مع وسم وبحث بذكاء اصطناعي محلي؛ يغطي الصور فقط' },
        ],
        note: 'تحقق من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ماذا يحدث إذا أغلقت AI File Sorter قبل التأكيد؟',
            a: 'لا يتغير أي ملف، لأن التحليل يجهّز الاقتراحات فقط. وتقول الأسئلة الشائعة إن النتائج المحفوظة قد يُعاد استخدامها عند تحليل المجلد نفسه مرة أخرى.',
          },
          {
            q: 'هل يمكنني استخدام Ollama أو LM Studio معه؟',
            a: 'نعم، عبر خيار نقطة الوصول المخصصة المتوافقة مع OpenAI؛ وتقول الأسئلة الشائعة إن Ollama يُتاح عبر خادمه المحلي، وعادةً على localhost:11434، وإن LM Studio يحتاج إلى نموذج يدعم الرؤية للصور.',
          },
          {
            q: 'هل يستطيع قراءة ملفات PDF الممسوحة ضوئيًا؟',
            a: 'ليس بعد. تقول الأسئلة الشائعة إن ملفات PDF الممسوحة، المكوّنة من صور فقط، تحتاج أولًا إلى OCR بأداة أخرى، وإن دعم OCR مخطَّط له.',
          },
          {
            q: 'أين تُخزَّن الإعدادات والنماذج؟',
            a: 'توجد الإعدادات في %APPDATA%\\AIFileSorter على Windows، وفي ~/Library/Application Support/AIFileSorter على macOS، وفي ~/.config/AIFileSorter على Linux؛ وتوجد النماذج المنزَّلة في مجلد llms منفصل يمكن نقله.',
          },
          {
            q: 'هل يبقى يعمل في الخلفية؟',
            a: 'لا. تصفه الأسئلة الشائعة بأنه أداة دفعات تفتحها وتشغّلها وتراجعها ثم تغلقها، وتقول إنه لا يوجد وضع منخفض الاستهلاك ولا تقليل للأداء في الخلفية.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'AI File Sorter وسيلة مجانية ومحدَّثة بنشاط للحصول على اقتراحات قابلة للمراجعة لمجلدات وأسماء الملفات غير المنظمة، مع نموذج محلي افتراضي وخاصية تراجع موثّقة. في المقابل، لا تعطي المصادر أي رقم للذاكرة RAM للنماذج المحلية، ولا تُدعم ملفات PDF الممسوحة ولا اكتشاف التكرارات، ونسخ macOS غير موقّعة، والبيان الوحيد عن الخصوصية جملة واحدة، ولم يمكن التحقق هنا من أي ادعاء يخص الجودة. يناسب من يريدون ترتيب مجلد على دفعات صغيرة ومراجَعة؛ ومن يحتاج إلى عمل مضمون دون اتصال فعليه التأكد بمراقبة الشبكة بنفسه.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع AI File Sorter](https://filesorter.app/) — صفحات الميزات والتنزيل والأسعار والأسئلة الشائعة وسجل التغييرات، روجعت في 28 أكتوبر 2026.',
          '[AI File Sorter على GitHub](https://github.com/hyperfield/ai-file-sorter) — README وملاحظات الإصدار ونشاط الإيداعات، روجعت في 28 أكتوبر 2026.',
          '[AI File Sorter في Microsoft Store](https://apps.microsoft.com/detail/9npk4dzd6r6s) — متطلبات النظام وتاريخ التحديث وبيان الخصوصية، روجعت في 28 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Hyperlink (Nexa AI)](/ar/power-local-llm/hyperlink-nexa-review) — مساعد يعمل على الجهاز يبحث في الملفات المحلية ويجيب عن الأسئلة المتعلقة بها.',
          '[مراجعة PixlStash](/ar/power-local-llm/pixlstash-review) — مدير مكتبة صور مستضاف ذاتيًا مع وسم بذكاء اصطناعي محلي.',
          '[دليل برامج LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلي.',
        ],
      },
    },
  },

  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/ai-file-sorter-review-hero-zh.webp',
    title: 'AI File Sorter 评测：用本地 AI 重命名并整理文件',
    seoTitle: 'AI File Sorter 评测：本地 AI 整理文件',
    intro:
      'AI File Sorter 是一款适用于 Windows、macOS 和 Linux 的免费开源桌面应用，可为杂乱的文件建议文件夹和更清晰的文件名，默认使用内置本地模型，也可以使用你自己的 OpenAI 或 Gemini 账号。在你确认建议之前，不会移动或重命名任何文件。本评测依据其官网、README、FAQ、版本说明和 Microsoft Store 页面，核查日期为 2026 年 10 月 28 日。',
    metaDescription:
      'AI File Sorter 评测：免费的 AGPL 桌面应用，用本地模型或自己的 API 密钥建议文件夹和文件名。隐私、撤销与已知局限一览。',
    twitterDescription:
      'AI File Sorter 评测：一款免费、AGPL 许可的桌面应用，用本地模型或你自己的 API 密钥为文件建议文件夹和文件名。安装包、硬件、隐私，以及我们未能核实的内容。',
    audience:
      '下载、扫描件、截图或归档文件夹杂乱，希望获得可逐条审核的 AI 建议的用户；也适合想了解哪些功能在本地运行、资料中有哪些未明确之处、以及如何撤销更改的读者。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'AI File Sorter 评测',
    targetKeywords: [
      'ai file sorter 评测',
      '本地 ai 文件整理',
      '离线 ai 批量重命名文件',
      'ai file sorter gemma 本地模型',
      '用 ai 整理下载文件夹',
      'ai file sorter 隐私 撤销',
    ],
    current_models_mentioned: ['Gemma 3 4B IT', 'Gemma 1.1 7B', 'Mistral 7B', 'LLaVA 1.6 Mistral 7B'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Vulkan', 'Apple Metal'],
    leadAnswerBlock:
      '**AI File Sorter（v1.9.2，2026 年 8 月 14 日发布）是一款适用于 Windows、macOS 和 Linux 的免费 AGPL-3.0 桌面应用，可为杂乱的文件建议文件夹和新名称，默认使用本地语言模型，也可按你的选择使用你自己的 OpenAI 或 Gemini 账号。** 在你于审核窗口中确认之前，它不会更改任何内容，README 记载了试运行和撤销功能。PromptQuorum 未运行过该应用。',
    quickAnswerTop: {
      zh: {
        question: 'AI File Sorter 能离线运行且不上传文件吗？',
        answer:
          '根据 README 和 FAQ，选择内置或自定义本地模型时可以：文件、文件名、图片和元数据都留在你的电脑上，也不会发送遥测数据。选择 ChatGPT、Gemini 或自定义端点则需要联网和你自己的 API 账号。PromptQuorum 未检查网络流量。',
        bullets: [
          '免费，AGPL-3.0；Windows 10 及更高版本、macOS 和 Linux 的安装包见 [filesorter.app](https://filesorter.app/download/)。',
          '本地模型：Gemma 3 4B IT、Gemma 1.1 7B 和 Mistral 7B，或你自己的 GGUF 文件。',
          '点击 Confirm & Sort 之前不会移动任何文件；提供试运行和 Edit > Undo last run。',
          '可读取 PDF、Office 和文本文件，配合视觉模型还能分析图片；音频和视频根据内嵌标签重命名。',
          '本地模型没有文档化的内存（RAM）要求；FAQ 称约 6 GB 显存可加快图片扫描。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'AI File Sorter 是什么？', anchor: 'what-is-ai-file-sorter' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '运行要求', anchor: 'requirements' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '主要功能', anchor: 'key-features' },
      { label: 'AI 功能及运行位置', anchor: 'ai-features' },
      { label: '数据流向与隐私', anchor: 'privacy' },
      { label: '适合哪些人', anchor: 'who-should-use' },
      { label: '我们未能核实的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AI File Sorter 是一款开源桌面应用，它让本地或远程语言模型为你所选文件夹中的文件建议文件夹和文件名，并且只在你批准后才应用。',
          },
          {
            type: 'plain-terms',
            text: '你把应用指向一个杂乱的文件夹（比如“下载”），它会建议每个文件该放哪里、叫什么名字；你取消不想要的建议，之后才会真正移动文件。',
          },
        ],
        items: [
          '维护情况：最新版本 v1.9.2 于 2026 年 8 月 14 日发布，GitHub 仓库在 2026 年 10 月 19 日有推送，因此不适用“项目已停更”警告。',
          '开发方：官网署名 HF Studio；源代码位于 GitHub 用户 hyperfield 名下。',
          '费用：核心应用免费；Windows 右键菜单扩展是 Microsoft Store 中的付费附加组件，捐赠为自愿。',
          '范围：用于整理和重命名文件，不是聊天应用；项目将重复文件检测和扫描版 PDF 的 OCR 列为“计划中”，而非已提供。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测依据项目的官网、README、FAQ、版本说明和 Microsoft Store 页面，核查日期为 2026 年 10 月 28 日。PromptQuorum 未安装 AI File Sorter，因此不评估其建议质量、速度和撤销行为。',
          },
        ],
      },
      overview: {
        id: 'what-is-ai-file-sorter',
        title: 'AI File Sorter 是什么？',
        content: [
          '**AI File Sorter 是一款桌面应用，可为你所选文件夹中的文件建议类别、子文件夹和更清晰的名称，并在你确认后移动或重命名它们。** 其 README 将它描述为基于内容整理和重命名文件的跨平台工具；源代码以 AGPL-3.0 许可证开放。',
          '据 README，它并不只依赖固定规则，而是把模型的建议与可选的白名单、近期相似结果以及你已批准的审核决定结合起来。官网页脚署名 HF Studio 为发布方。',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: '获取方式',
        content: [
          '**AI File Sorter 的安装方式与普通桌面软件相同：Windows 安装包或便携版、macOS 磁盘映像和 Linux 软件包，均列在官方下载页上。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': 'Windows', '获取方式': '适用于 Windows 10 及更高版本的安装包或便携版，见[下载页](https://filesorter.app/download/)' },
          { '选项': 'Windows（应用商店）', '获取方式': '[Microsoft Store](https://apps.microsoft.com/detail/9npk4dzd6r6s)；据下载页，不支持 CUDA，但 Vulkan 加速可用' },
          { '选项': 'macOS', '获取方式': '适用于 Apple Silicon（M2 至 M5，以及 M1）和 Intel 的磁盘映像，见[下载页](https://filesorter.app/download/)；未使用 Apple 证书签名，需要[首次手动放行](https://filesorter.app/download/macos-open/)' },
          { '选项': 'Linux', '获取方式': '适用于 Debian、Ubuntu、Fedora、Rocky 和 Arch 的软件包，见[下载页](https://filesorter.app/download/)' },
          { '选项': '官网', '获取方式': '[filesorter.app](https://filesorter.app/)' },
          { '选项': '隐私政策', '获取方式': '官网没有专门页面；Microsoft Store 页面链接了一份[仅一句话的声明](https://cdn.storeedgefd.dsx.mp.microsoft.com/eus2/privacy-policy-storage/92877400/00013788018020998399/1152921505700233027/privacy_policy_c70aeb11-d00c-4729-8362-6322790ef497.txt)' },
          { '选项': '源代码', '获取方式': '[github.com/hyperfield/ai-file-sorter](https://github.com/hyperfield/ai-file-sorter)' },
        ],
        note: '评测版本：v1.9.2，据 GitHub 发布页于 2026 年 8 月 14 日发布；Microsoft Store 页面显示相同的更新日期。GitHub 发布页没有可下载文件，安装包来自官网、应用商店和 SourceForge。无需终端；从源代码构建则需要 C++ 工具链和 Qt 6。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**README、FAQ 和官网都没有给出本地模型的内存（RAM）或显存（VRAM）最低要求；现有数字描述的是应用本身和可选的 GPU 使用。**',
        ],
        columns: ['项目', '来源说明'],
        rows: [
          { '项目': '操作系统', '来源说明': '据 Microsoft Store 页面为 Windows 10 版本 1809 或更高；macOS 和 Linux 版本见下载页。README 称 macOS 源码构建面向 macOS 15 或更高版本的 Apple Silicon，而下载页同时提供 M1 和 Intel 的磁盘映像' },
          { '项目': '内存', '来源说明': '商店页面给出应用本身最低 750 MB、推荐 1 GB；没有给出运行语言模型所需的数字' },
          { '项目': 'GPU', '来源说明': '可选。NVIDIA 使用 CUDA 12.x，其他使用 Vulkan 1.2 或更高版本，Apple 硬件使用 Metal；不可用时回退到 CPU。README 称 8 GB 或更多显存体验更流畅，而 4 GB 往往意味着只能部分卸载到 GPU 或回退到 CPU' },
          { '项目': '图片分析', '来源说明': '据 FAQ，约 6 GB 或更多显存的独立 GPU 能大幅加快图片扫描，在 CPU 上可能慢得多' },
          { '项目': '模型', '来源说明': '通过“Select LLM”对话框下载到可更改的存储文件夹；所读页面没有给出下载大小' },
          { '项目': '硬件检测', '来源说明': '内置的“System compatibility check”会测试一个小负载，并为你的电脑推荐本地模型' },
        ],
        note: '这些数字来自项目和商店页面；PromptQuorum 未在任何硬件上测量内存占用或速度。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤遵循 README 中“Safe First Run”的建议；PromptQuorum 未实际运行过。**',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从下载页获取适合你系统的版本；在 macOS 上，需在“隐私与安全性”中首次放行这个未签名的应用。',
          },
          {
            title: '选择模型',
            whyItMatters: '打开 Settings，再打开“Select LLM”，下载本地模型；也可以改为输入你自己的 OpenAI 或 Gemini 密钥，或自定义端点。',
          },
          {
            title: '先用一小份副本试一试',
            whyItMatters: '把 20 到 50 个文件复制到临时文件夹，选中它，勾选需要的选项，然后点击 Analyze。',
          },
          {
            title: '先审核，再应用',
            whyItMatters: '检查类别和建议的名称，可选择先试运行，然后点击 Confirm & Sort；如果改变主意，可通过 Edit 菜单使用“Undo last run”。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主要功能',
        content: [
          '**以下各项均来自 README、FAQ 或官网；PromptQuorum 均未测试。**',
        ],
        items: [
          '**分类。** 为每个文件建议一个类别和可选的子类别，提供“More refined”和“More consistent”两种模式，并支持命名白名单，每个主类别可以有各自允许的子类别。',
          '**重命名。** 为图片和文档建议名称，并根据音频和视频的内嵌标签生成名称，例如 year_artist_album_title.mp3；仅重命名模式会让文件留在原处。',
          '**安全措施。** 带文件预览的审核表、显示源路径和目标路径的试运行、已保存的撤销计划，以及会跳过 Unity、Unreal、Godot、Blender、Git 和常见源代码项目的项目文件夹保护。',
          '**记忆。** 本地 SQLite 缓存，以及单独存放你已批准决定的存储，两者在 Settings 中都有清除和重置工具。',
          '**文件夹。** 支持本地文件夹、同步的云文件夹、外接硬盘和已挂载的网络共享；使用 NAS 时，Windows 上要先分配盘符，Linux 和 macOS 上要先挂载共享。',
          '**语言。** 界面语言包括德语、法语、西班牙语、韩语和简体中文；类别和文件名的语言取决于模型，Gemma 1.1 7B 仅支持英语。',
          '**Windows 扩展。** Microsoft Store 中的可选付费右键菜单附加组件，可从文件资源管理器启动整理。',
        ],
        note: '项目 FAQ 将扫描版 PDF 的 OCR、重复文件检测以及按文件类型包含或忽略的列表列为“计划中”，而非已提供。',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI 功能及运行位置',
        content: [
          '**语言模型读取文件名、文件夹上下文，以及（在支持时）文件内容，然后建议类别和新名称；模型可以在本地运行，也可以在远程运行。**',
        ],
        items: [
          '**本地文本模型。** Gemma 3 4B IT、Gemma 1.1 7B 和 Mistral 7B 是内置选项，你也可以注册自己的 GGUF 文件；它们运行在内嵌的 llama.cpp 运行时上。',
          '**文档。** 读取 PDF、Word、Excel、PowerPoint、OpenDocument 和纯文本格式并交给所选模型；旧版 .doc、.xls 和 .ppt 文件不受支持。',
          '**图片。** 内置两个视觉后端：默认的 Gemma 3 4B IT 和 LLaVA 1.6 Mistral 7B，各自需要一个模型文件和对应的 mmproj 文件；自定义视觉模型的用法相同。',
          '**音频和视频。** 只使用内嵌元数据；据 FAQ，整段视频不会发送给视觉模型。',
          '**远程选项。** 使用你自己 OpenAI 密钥的 ChatGPT、使用你自己密钥的 Gemini，或 LM Studio、Ollama、网关等兼容 OpenAI 的自定义端点；据 README，密钥保存在应用本地的 config.ini 中。',
          '**学习。** 已批准的决定会在之后的运行中作为提示被复用；据 README，这不会训练或改变模型。',
        ],
        note: '以上为项目自身的说法。PromptQuorum 未测试建议质量、速度或模型下载。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**据 README，使用本地模型时，你的文件、文件名、图片和元数据都留在你的电脑上，不会发送遥测数据，只有使用远程模型时才需要联网。** 分类缓存是 config.ini 旁边的本地 SQLite 数据库，保存目录路径、文件名、类别和建议的名称。',
          '如果你选择 OpenAI、Gemini 或自定义端点，数据会通过你自己的账号发送到该服务，适用该服务的政策。针对应用本身，我们只找到一份链接在 Microsoft Store 页面上的一句话声明：它称不会收集、存储或传输个人数据，所有处理都留在设备上。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是项目方的声明，不是审计结果。官网没有隐私页面，这份一句话声明也没有提到远程模型选项、更新通知或模型下载。README 称缓存会保存根据照片 GPS 数据查到的地名，但没有说明由哪个服务完成这一查询。PromptQuorum 未检查网络流量。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**下载、扫描件或截图文件夹堆积如山的人**，希望逐行批准建议的文件夹和名称。',
          '**注重隐私的用户**，更愿意使用本地模型，并能为模型文件腾出磁盘空间。',
          '**拥有外接硬盘或 NAS 归档的人**，会先挂载它们，再分小批整理。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**质量与速度。** 建议的准确度、运行时间以及不同硬件的影响均未测试。',
          '**硬件需求。** 所读页面既没有本地模型的内存最低要求，也没有模型下载大小。',
          '**撤销。** README 将“Undo last run”描述为尽力而为，会跳过冲突和已更改的文件；我们未试用。',
          '**隐私。** 只有一句话的声明；见“数据流向与隐私”。',
          '**macOS。** 构建未经 Apple 签名，README 与下载页所列的受支持 macOS 版本也不一致。',
          '**模型许可证。** 未审查可下载模型的许可证。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        content: [
          '目录中还有两款已有评测的本地文件和图片工具，但它们都不以同样的方式重命名和移动文件。',
        ],
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[Hyperlink (Nexa AI)](/zh/power-local-llm/hyperlink-nexa-review)', '平台': 'Windows、macOS', '价格 / 许可证': '免费 / 专有', '主要区别': '搜索你的本地文件并回答相关问题，而不是重命名或移动文件' },
          { '应用': '[PixlStash](/zh/power-local-llm/pixlstash-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / GPL-3.0', '主要区别': '带本地 AI 标签和搜索的图片库管理工具；只处理图片' },
        ],
        note: '请在各应用自己的页面上确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '确认之前关闭 AI File Sorter 会怎样？',
            a: '不会有任何文件被更改，因为分析只是准备建议。据 FAQ，再次分析同一文件夹时，已保存的结果可能会被复用。',
          },
          {
            q: '能配合 Ollama 或 LM Studio 使用吗？',
            a: '可以，使用自定义的 OpenAI 兼容端点选项；据 FAQ，Ollama 通过其本地服务器连接，通常是 localhost:11434，而 LM Studio 处理图片需要支持视觉的模型。',
          },
          {
            q: '能读取扫描版 PDF 吗？',
            a: '暂时不能。据 FAQ，只有图像的扫描版 PDF 需要先用其他工具做 OCR；OCR 支持已列入计划。',
          },
          {
            q: '设置和模型保存在哪里？',
            a: '设置在 Windows 上位于 %APPDATA%\\AIFileSorter，在 macOS 上位于 ~/Library/Application Support/AIFileSorter，在 Linux 上位于 ~/.config/AIFileSorter；下载的模型存放在单独的 llms 文件夹中，可以移动。',
          },
          {
            q: '它会一直在后台运行吗？',
            a: '不会。FAQ 将它描述为需要打开、运行、审核并关闭的批处理工具，并称目前没有低资源模式或后台限速功能。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'AI File Sorter 是一种免费、更新活跃的方式，可为杂乱的文件获得可审核的文件夹和文件名建议，默认使用本地模型，并有文档记载的撤销功能。不足之处在于：资料没有给出本地模型的内存数字，不支持扫描版 PDF 和重复文件检测，macOS 版本未签名，唯一的隐私声明只有一句话，且这里无法核实任何关于质量的说法。它适合想分小批、逐项审核来整理文件夹的人；需要确保离线运行的人，应通过自己的网络监控加以确认。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[AI File Sorter 官网](https://filesorter.app/) — 功能、下载、价格、FAQ 和更新日志页面，核查于 2026 年 10 月 28 日。',
          '[GitHub 上的 AI File Sorter](https://github.com/hyperfield/ai-file-sorter) — README、版本说明和提交活动，核查于 2026 年 10 月 28 日。',
          '[Microsoft Store 中的 AI File Sorter](https://apps.microsoft.com/detail/9npk4dzd6r6s) — 系统要求、更新日期和隐私声明，核查于 2026 年 10 月 28 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Hyperlink (Nexa AI) 评测](/zh/power-local-llm/hyperlink-nexa-review) — 在设备上搜索本地文件并回答相关问题的助手。',
          '[PixlStash 评测](/zh/power-local-llm/pixlstash-review) — 带本地 AI 标签的自托管图片库管理工具。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具完整目录。',
        ],
      },
    },
  },

  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/ai-file-sorter-review-hero-ko.webp',
    title: 'AI File Sorter 리뷰: 로컬 AI로 파일 이름 변경·정리',
    seoTitle: 'AI File Sorter 리뷰: 로컬 AI 파일 정리',
    intro:
      'AI File Sorter는 Windows, macOS, Linux용 무료 오픈소스 데스크톱 앱으로, 흩어진 파일에 대해 폴더와 더 알아보기 쉬운 파일 이름을 제안합니다. 기본적으로 내장 로컬 모델을 사용하며, 본인의 OpenAI 또는 Gemini 계정도 선택할 수 있습니다. 제안을 승인하기 전에는 파일을 이동하거나 이름을 바꾸지 않습니다. 이 리뷰는 공식 웹사이트, README, FAQ, 릴리스 노트, Microsoft Store 등록 정보를 2026년 10월 28일에 확인한 내용을 바탕으로 합니다.',
    metaDescription:
      'AI File Sorter 리뷰: 로컬 모델이나 본인의 API 키로 폴더와 파일 이름을 제안하는 무료 AGPL 데스크톱 앱. 개인정보, 실행 취소, 한계를 정리했습니다.',
    twitterDescription:
      'AI File Sorter 리뷰: 로컬 모델 또는 본인의 API 키로 폴더와 파일 이름을 제안하는 무료 AGPL 라이선스 데스크톱 앱. 설치 파일, 하드웨어, 개인정보, 확인하지 못한 사항을 다룹니다.',
    audience:
      '다운로드, 스캔, 스크린샷, 보관 폴더가 어수선해 검토할 수 있는 AI 제안을 원하는 분, 그리고 무엇이 로컬에서 실행되는지, 자료가 밝히지 않은 점은 무엇인지, 변경을 어떻게 되돌릴 수 있는지 알아야 하는 분을 위한 글입니다.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'AI File Sorter 리뷰',
    targetKeywords: [
      'ai file sorter 리뷰',
      '로컬 ai 파일 정리',
      'ai 파일 이름 변경 오프라인',
      'ai file sorter gemma 로컬 모델',
      '다운로드 폴더 ai 정리',
      'ai file sorter 개인정보 실행 취소',
    ],
    current_models_mentioned: ['Gemma 3 4B IT', 'Gemma 1.1 7B', 'Mistral 7B', 'LLaVA 1.6 Mistral 7B'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Vulkan', 'Apple Metal'],
    leadAnswerBlock:
      '**AI File Sorter(v1.9.2, 2026년 8월 14일 출시)는 Windows, macOS, Linux용 무료 AGPL-3.0 데스크톱 앱으로, 흩어진 파일에 폴더와 새 이름을 제안하며 기본적으로 로컬 언어 모델을 사용하고 원하면 본인의 OpenAI 또는 Gemini 계정도 사용할 수 있습니다.** 검토 창에서 확인하기 전에는 아무것도 바꾸지 않으며, README에는 시험 실행과 실행 취소 기능이 기재되어 있습니다. PromptQuorum은 실행해 보지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'AI File Sorter는 파일을 올리지 않고 오프라인으로 동작하나요?',
        answer:
          'README와 FAQ에 따르면 내장 또는 사용자 지정 로컬 모델을 선택했을 때는 그렇습니다. 파일, 파일 이름, 이미지, 메타데이터가 컴퓨터에 남고 텔레메트리도 전송되지 않습니다. ChatGPT, Gemini, 사용자 지정 엔드포인트를 선택하면 인터넷과 본인의 API 계정이 필요합니다. PromptQuorum은 네트워크 트래픽을 점검하지 않았습니다.',
        bullets: [
          '무료이며 AGPL-3.0입니다. Windows 10 이상, macOS, Linux용 설치 파일은 [filesorter.app](https://filesorter.app/download/)에 있습니다.',
          '로컬 모델은 Gemma 3 4B IT, Gemma 1.1 7B, Mistral 7B이며 본인의 GGUF 파일도 쓸 수 있습니다.',
          'Confirm & Sort를 누르기 전에는 아무것도 이동하지 않으며, 시험 실행과 Edit > Undo last run이 있습니다.',
          'PDF, Office, 텍스트 파일과 시각 모델을 쓴 이미지를 읽고, 오디오와 비디오는 내장 태그로 이름을 바꿉니다.',
          '로컬 모델의 RAM 요구량은 문서화되어 있지 않으며, FAQ는 약 6 GB의 비디오 메모리가 이미지 스캔을 빠르게 한다고 설명합니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'AI File Sorter란?', anchor: 'what-is-ai-file-sorter' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '주요 기능', anchor: 'key-features' },
      { label: 'AI 기능과 실행 위치', anchor: 'ai-features' },
      { label: '데이터 흐름과 개인정보', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 사항', anchor: 'who-should-not-use' },
      { label: '경쟁 제품과 대안', anchor: 'vs-alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AI File Sorter는 선택한 폴더의 파일에 대해 로컬 또는 원격 언어 모델이 폴더와 파일 이름을 제안하게 하고, 사용자가 승인한 뒤에만 적용하는 오픈소스 데스크톱 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '다운로드 폴더처럼 어수선한 폴더를 지정하면 각 파일을 어디에 두고 어떤 이름으로 바꿀지 제안하며, 원하지 않는 제안을 빼고 나서야 파일이 이동합니다.',
          },
        ],
        items: [
          '유지 관리: 최신 릴리스 v1.9.2는 2026년 8월 14일에 나왔고 GitHub 저장소에는 2026년 10월 19일에 푸시가 있었으므로, 방치된 프로젝트 경고는 해당하지 않습니다.',
          '개발사: 웹사이트에는 HF Studio가 표기되어 있으며, 소스 코드는 GitHub의 hyperfield 사용자 아래에 있습니다.',
          '비용: 핵심 앱은 무료입니다. Windows 우클릭 확장은 Microsoft Store의 유료 부가 기능이며 기부는 선택 사항입니다.',
          '범위: 파일을 정리하고 이름을 바꾸는 도구이며 채팅 앱이 아닙니다. 프로젝트는 중복 파일 감지와 스캔 PDF의 OCR을 제공 중이 아닌 계획 중으로 분류합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 프로젝트의 웹사이트, README, FAQ, 릴리스 노트, Microsoft Store 등록 정보를 2026년 10월 28일에 확인한 내용을 바탕으로 합니다. PromptQuorum은 AI File Sorter를 설치하지 않았으므로 제안의 품질, 속도, 실행 취소 동작은 평가하지 않습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-ai-file-sorter',
        title: 'AI File Sorter란?',
        content: [
          '**AI File Sorter는 선택한 폴더의 파일에 대해 카테고리, 하위 폴더, 더 알아보기 쉬운 이름을 제안하고, 사용자가 확인한 뒤 이동하거나 이름을 바꾸는 데스크톱 앱입니다.** README는 이를 내용에 기반해 파일을 정리하고 이름을 바꾸는 크로스 플랫폼 도구로 설명하며, 소스 코드는 AGPL-3.0 라이선스로 공개되어 있습니다.',
          'README에 따르면 고정 규칙에만 의존하지 않고, 모델의 제안에 선택적 화이트리스트, 최근의 유사한 결과, 승인한 검토 결정을 결합합니다. 웹사이트 하단에는 발행처로 HF Studio가 표기되어 있습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: '입수 방법',
        content: [
          '**AI File Sorter는 일반 데스크톱 프로그램처럼 설치합니다. Windows용 설치 파일 또는 포터블 버전, macOS용 디스크 이미지, Linux용 패키지가 공식 다운로드 페이지에 있습니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          { '옵션': 'Windows', '입수 방법': 'Windows 10 이상용 설치 파일 또는 포터블 버전을 [다운로드 페이지](https://filesorter.app/download/)에서 제공' },
          { '옵션': 'Windows(스토어)', '입수 방법': '[Microsoft Store](https://apps.microsoft.com/detail/9npk4dzd6r6s). 다운로드 페이지에 따르면 CUDA는 지원하지 않지만 Vulkan 가속은 동작' },
          { '옵션': 'macOS', '입수 방법': 'Apple Silicon(M2~M5 및 M1)과 Intel용 디스크 이미지를 [다운로드 페이지](https://filesorter.app/download/)에서 제공. Apple 인증서로 서명되지 않아 [처음에 한 번 허용](https://filesorter.app/download/macos-open/)해야 함' },
          { '옵션': 'Linux', '입수 방법': 'Debian, Ubuntu, Fedora, Rocky, Arch용 패키지를 [다운로드 페이지](https://filesorter.app/download/)에서 제공' },
          { '옵션': '웹사이트', '입수 방법': '[filesorter.app](https://filesorter.app/)' },
          { '옵션': '개인정보 처리방침', '입수 방법': '웹사이트에는 페이지가 없고, Microsoft Store 등록 정보에서 [한 문장짜리 설명](https://cdn.storeedgefd.dsx.mp.microsoft.com/eus2/privacy-policy-storage/92877400/00013788018020998399/1152921505700233027/privacy_policy_c70aeb11-d00c-4729-8362-6322790ef497.txt)으로 연결됨' },
          { '옵션': '소스 코드', '입수 방법': '[github.com/hyperfield/ai-file-sorter](https://github.com/hyperfield/ai-file-sorter)' },
        ],
        note: '확인한 버전은 v1.9.2이며 GitHub 릴리스에 따르면 2026년 8월 14일에 공개되었고, Microsoft Store 등록 정보에도 같은 업데이트 날짜가 표시됩니다. GitHub 릴리스에는 내려받을 파일이 없어 설치 파일은 웹사이트, 스토어, SourceForge에서 받습니다. 터미널은 필요 없으며, 소스에서 빌드하려면 C++ 툴체인과 Qt 6가 필요합니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**README, FAQ, 웹사이트 어디에도 로컬 모델의 RAM이나 VRAM 최소 사양은 문서화되어 있지 않으며, 존재하는 수치는 앱 자체와 선택적 GPU 사용에 관한 것입니다.**',
        ],
        columns: ['항목', '출처의 설명'],
        rows: [
          { '항목': '운영체제', '출처의 설명': 'Microsoft Store 등록 정보에는 Windows 10 버전 1809 이상. macOS와 Linux 빌드는 다운로드 페이지에 있습니다. README는 macOS 소스 빌드가 macOS 15 이상의 Apple Silicon을 대상으로 한다고 하지만, 다운로드 페이지에는 M1과 Intel용 디스크 이미지도 있습니다' },
          { '항목': '메모리', '출처의 설명': '스토어 등록 정보는 앱 자체에 최소 750 MB, 권장 1 GB를 제시하며, 언어 모델을 실행하는 데 필요한 수치는 제시하지 않습니다' },
          { '항목': 'GPU', '출처의 설명': '선택 사항입니다. NVIDIA는 CUDA 12.x, 그 밖에는 Vulkan 1.2 이상, Apple 하드웨어는 Metal을 지원하며 쓸 수 없으면 CPU로 전환합니다. README는 VRAM 8 GB 이상이면 더 부드럽고, 4 GB에서는 일부만 GPU로 넘기거나 CPU로 전환되는 경우가 많다고 설명합니다' },
          { '항목': '이미지 분석', '출처의 설명': 'FAQ에 따르면 약 6 GB 이상의 비디오 메모리를 가진 외장 GPU가 있으면 이미지 스캔이 크게 빨라지며, CPU에서는 훨씬 느릴 수 있습니다' },
          { '항목': '모델', '출처의 설명': '「Select LLM」 대화 상자에서 변경 가능한 저장 폴더로 내려받습니다. 내려받기 크기는 확인한 페이지에 나와 있지 않습니다' },
          { '항목': '하드웨어 점검', '출처의 설명': '내장 「System compatibility check」가 작은 작업을 측정하고 사용 중인 PC에 맞는 로컬 모델을 제안합니다' },
        ],
        note: '이 수치는 프로젝트와 스토어 등록 정보에서 가져온 것이며, PromptQuorum은 어떤 하드웨어에서도 메모리 사용량이나 속도를 측정하지 않았습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**이 단계는 README의 「Safe First Run」 조언을 따른 것이며, PromptQuorum은 실행해 보지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: '다운로드 페이지에서 사용 중인 시스템용 빌드를 받으세요. macOS에서는 서명되지 않은 앱을 「개인정보 보호 및 보안」에서 처음에 한 번 허용합니다.',
          },
          {
            title: '모델 선택',
            whyItMatters: 'Settings에서 「Select LLM」을 열어 로컬 모델을 내려받거나, 대신 본인의 OpenAI 또는 Gemini 키 혹은 사용자 지정 엔드포인트를 입력합니다.',
          },
          {
            title: '먼저 작은 복사본으로 시험',
            whyItMatters: '파일 20~50개를 임시 폴더에 복사해 선택하고, 원하는 옵션을 체크한 뒤 Analyze를 클릭합니다.',
          },
          {
            title: '검토한 뒤 적용',
            whyItMatters: '카테고리와 제안된 이름을 확인하고, 필요하면 시험 실행을 한 다음 Confirm & Sort를 클릭합니다. 마음이 바뀌면 Edit 메뉴의 「Undo last run」을 사용합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '주요 기능',
        content: [
          '**아래 항목은 모두 README, FAQ, 웹사이트에서 가져온 것이며, PromptQuorum이 직접 테스트한 것은 없습니다.**',
        ],
        items: [
          '**분류.** 파일마다 카테고리와 선택적 하위 카테고리를 제안하며 「More refined」와 「More consistent」 두 모드가 있고, 이름 붙인 화이트리스트에서는 주 카테고리마다 허용할 하위 카테고리를 따로 지정할 수 있습니다.',
          '**이름 변경.** 이미지와 문서에는 이름을 제안하고, 오디오와 비디오는 내장 태그로 year_artist_album_title.mp3 같은 이름을 만듭니다. 이름 변경 전용 모드에서는 파일이 제자리에 남습니다.',
          '**안전 장치.** 파일 미리 보기가 있는 검토 표, 원본과 대상 경로를 보여 주는 시험 실행, 저장되는 실행 취소 계획, Unity, Unreal, Godot, Blender, Git 및 일반적인 소스 코드 프로젝트를 건너뛰는 프로젝트 폴더 보호가 있습니다.',
          '**기억.** 로컬 SQLite 캐시와 승인한 결정을 따로 보관하는 저장소가 있으며, 둘 다 Settings에 삭제 및 초기화 도구가 있습니다.',
          '**폴더.** 로컬 폴더, 동기화된 클라우드 폴더, 외장 드라이브, 마운트한 네트워크 공유를 지원합니다. NAS는 Windows에서는 드라이브 문자를 먼저 할당하고 Linux와 macOS에서는 공유를 마운트해야 합니다.',
          '**언어.** 인터페이스 언어에는 독일어, 프랑스어, 스페인어, 한국어, 중국어 간체 등이 있습니다. 카테고리와 파일 이름의 언어는 모델에 따라 달라지며 Gemma 1.1 7B는 영어만 지원합니다.',
          '**Windows 확장.** Microsoft Store의 선택적 유료 우클릭 부가 기능으로, 파일 탐색기에서 정리를 시작할 수 있습니다.',
        ],
        note: '프로젝트 FAQ는 스캔 PDF의 OCR, 중복 파일 감지, 파일 형식 포함·제외 목록을 제공 중이 아닌 계획 중으로 분류합니다.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI 기능과 실행 위치',
        content: [
          '**언어 모델이 파일 이름, 폴더 맥락, 지원되는 경우 파일 내용을 읽고 카테고리와 새 이름을 제안하며, 모델은 로컬 또는 원격일 수 있습니다.**',
        ],
        items: [
          '**로컬 텍스트 모델.** Gemma 3 4B IT, Gemma 1.1 7B, Mistral 7B가 내장 선택지이며 본인의 GGUF 파일도 등록할 수 있습니다. 내장된 llama.cpp 런타임에서 실행됩니다.',
          '**문서.** PDF, Word, Excel, PowerPoint, OpenDocument, 일반 텍스트 형식을 읽어 선택한 모델에 전달하며, 오래된 .doc, .xls, .ppt 파일은 지원하지 않습니다.',
          '**이미지.** 내장 시각 백엔드는 기본인 Gemma 3 4B IT와 LLaVA 1.6 Mistral 7B 두 가지이며, 각각 모델 파일과 짝이 되는 mmproj 파일이 필요합니다. 사용자 지정 시각 모델도 같은 방식으로 동작합니다.',
          '**오디오와 비디오.** 내장 메타데이터만 사용하며, FAQ에 따르면 비디오 전체를 비전 모델로 보내지 않습니다.',
          '**원격 선택지.** 본인의 OpenAI 키로 쓰는 ChatGPT, 본인의 키로 쓰는 Gemini, 또는 LM Studio, Ollama, 게이트웨이 같은 OpenAI 호환 사용자 지정 엔드포인트가 있습니다. README에 따르면 키는 앱의 로컬 config.ini에 저장됩니다.',
          '**학습.** 승인한 결정은 이후 실행에서 힌트로 재사용되며, README에 따르면 모델을 학습시키거나 바꾸지 않습니다.',
        ],
        note: '이는 프로젝트 자체의 설명입니다. PromptQuorum은 제안의 품질, 속도, 모델 내려받기를 테스트하지 않았습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**README에 따르면 로컬 모델을 쓰면 파일, 파일 이름, 이미지, 메타데이터가 컴퓨터에 남고 텔레메트리는 전송되지 않으며, 인터넷 연결은 원격 모델을 쓸 때만 필요합니다.** 분류 캐시는 config.ini 옆에 있는 로컬 SQLite 데이터베이스로, 디렉터리 경로, 파일 이름, 카테고리, 제안된 이름을 저장합니다.',
          'OpenAI, Gemini 또는 사용자 지정 엔드포인트를 선택하면 본인의 계정으로 해당 서비스에 데이터가 전송되므로 그 서비스의 정책이 적용됩니다. 앱 자체에 대해 찾은 개인정보 관련 글은 Microsoft Store 등록 정보에서 연결된 한 문장짜리 설명뿐이며, 개인 데이터를 수집, 저장, 전송하지 않고 모든 처리는 기기에 남는다고 밝힙니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 프로젝트 측의 표명일 뿐 감사 결과가 아닙니다. 웹사이트에는 개인정보 페이지가 없고, 한 문장짜리 설명에는 원격 모델 옵션, 업데이트 알림, 모델 내려받기에 대한 언급이 없습니다. README는 사진의 GPS 데이터로 조회한 지명을 캐시에 보관한다고 하지만, 어떤 서비스가 그 조회를 수행하는지는 밝히지 않습니다. PromptQuorum은 네트워크 트래픽을 점검하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**다운로드, 스캔, 스크린샷 폴더가 넘치는 분**으로, 제안된 폴더와 이름을 한 줄씩 승인하고 싶은 경우.',
          '**개인정보를 중시하는 사용자**로, 로컬 모델을 선호하고 모델 파일에 쓸 디스크 공간을 낼 수 있는 경우.',
          '**외장 드라이브나 NAS 보관함을 가진 분**으로, 먼저 마운트한 뒤 작은 묶음으로 나눠 정리하는 경우.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**품질과 속도.** 제안의 정확도, 실행 시간, 하드웨어에 따른 차이는 테스트하지 않았습니다.',
          '**하드웨어 요구 사항.** 확인한 페이지에는 로컬 모델의 RAM 최소 사양도, 모델 내려받기 크기도 없습니다.',
          '**실행 취소.** README는 「Undo last run」을 충돌하거나 바뀐 파일을 건너뛰는 최선 노력 방식으로 설명하며, 직접 시험하지 않았습니다.',
          '**개인정보.** 한 문장짜리 설명만 있습니다. 데이터 흐름과 개인정보를 참고하세요.',
          '**macOS.** 빌드는 Apple 서명이 없으며, 지원하는 macOS 버전이 README와 다운로드 페이지에서 서로 다릅니다.',
          '**모델 라이선스.** 내려받을 수 있는 모델의 라이선스는 검토하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        content: [
          '디렉터리에는 리뷰가 있는 다른 로컬 파일·이미지 도구가 두 가지 더 있지만, 어느 쪽도 같은 방식으로 파일 이름을 바꾸고 이동하지는 않습니다.',
        ],
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          { '앱': '[Hyperlink (Nexa AI)](/ko/power-local-llm/hyperlink-nexa-review)', '플랫폼': 'Windows, macOS', '가격 / 라이선스': '무료 / 독점', '핵심 차이점': '파일 이름을 바꾸거나 이동하지 않고, 로컬 파일을 검색해 관련 질문에 답함' },
          { '앱': '[PixlStash](/ko/power-local-llm/pixlstash-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / GPL-3.0', '핵심 차이점': '로컬 AI로 태그를 붙이고 검색하는 이미지 라이브러리 관리 도구로, 이미지만 다룸' },
        ],
        note: '각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 공식 페이지에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '확인하기 전에 AI File Sorter를 닫으면 어떻게 되나요?',
            a: '분석은 제안만 준비하므로 파일은 바뀌지 않습니다. FAQ에 따르면 같은 폴더를 다시 분석할 때 저장된 결과가 재사용될 수 있습니다.',
          },
          {
            q: 'Ollama나 LM Studio와 함께 쓸 수 있나요?',
            a: '네, OpenAI 호환 사용자 지정 엔드포인트 옵션을 통해 가능합니다. FAQ에 따르면 Ollama는 로컬 서버(보통 localhost:11434)로 연결하며, LM Studio로 이미지를 처리하려면 비전을 지원하는 모델이 필요합니다.',
          },
          {
            q: '스캔한 PDF도 읽을 수 있나요?',
            a: '아직은 읽지 못합니다. FAQ에 따르면 이미지로만 된 스캔 PDF는 먼저 다른 도구로 OCR을 해야 하며, OCR 지원은 계획되어 있습니다.',
          },
          {
            q: '설정과 모델은 어디에 저장되나요?',
            a: '설정은 Windows에서는 %APPDATA%\\AIFileSorter, macOS에서는 ~/Library/Application Support/AIFileSorter, Linux에서는 ~/.config/AIFileSorter에 있습니다. 내려받은 모델은 별도의 llms 폴더에 있으며 옮길 수 있습니다.',
          },
          {
            q: '백그라운드에서 계속 실행되나요?',
            a: '아니요. FAQ는 열어서 실행하고 검토한 뒤 닫는 일괄 처리 도구로 설명하며, 저사양 모드나 백그라운드 부하 조절 기능은 없다고 밝힙니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'AI File Sorter는 어수선한 파일에 대해 검토할 수 있는 폴더와 파일 이름 제안을 얻는, 무료이며 활발히 업데이트되는 방법입니다. 기본값은 로컬 모델이고 실행 취소 기능이 문서화되어 있습니다. 반면 로컬 모델의 RAM 수치는 자료에 없고, 스캔 PDF와 중복 감지는 지원되지 않으며, macOS 빌드는 서명되어 있지 않고, 개인정보에 관한 설명은 한 문장뿐이며, 품질에 관한 주장은 여기서 확인할 수 없었습니다. 폴더를 작은 묶음으로 나누어 검토하며 정리하려는 분께 맞고, 오프라인 동작을 확실히 보장받아야 한다면 직접 네트워크 모니터링으로 확인해야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[AI File Sorter 웹사이트](https://filesorter.app/) — 기능, 다운로드, 가격, FAQ, 변경 내역 페이지, 2026년 10월 28일 확인.',
          '[GitHub의 AI File Sorter](https://github.com/hyperfield/ai-file-sorter) — README, 릴리스 노트, 커밋 활동, 2026년 10월 28일 확인.',
          '[Microsoft Store의 AI File Sorter](https://apps.microsoft.com/detail/9npk4dzd6r6s) — 시스템 요구 사항, 업데이트 날짜, 개인정보 관련 설명, 2026년 10월 28일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Hyperlink (Nexa AI) 리뷰](/ko/power-local-llm/hyperlink-nexa-review) — 로컬 파일을 검색하고 관련 질문에 답하는 온디바이스 어시스턴트.',
          '[PixlStash 리뷰](/ko/power-local-llm/pixlstash-review) — 로컬 AI 태깅을 갖춘 셀프 호스팅 이미지 라이브러리 관리 도구.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
}

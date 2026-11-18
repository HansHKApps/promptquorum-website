// Labelme Review: Image Annotation with Offline AI Models and AI Agent Access
// Slug: labelme-review
// Companion to: unsloth-review, llama-factory-review
// Sources (all read 2026-11-18, no hands-on testing): maker website, pricing, download and installation guide pages, changelog, privacy policy,
// license agreement (EULA), About page, GitHub repository, README and release v7.11.0; GitHub descriptions of CVAT, Label Studio and X-AnyLabeling.
// The request came from the site owner, not from the maker (no founder-review badge).
// Last upstream update 2026-11-17 (last commit; latest release v7.11.0 on 2026-11-14) => no stale warning.
// Theme: 'Productivity & Knowledge Tools' (closest existing canonical theme for a desktop data-preparation tool).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/labelme-review-hero-en.webp',
    title: 'Labelme Review: Image Annotation with Offline AI Models and AI Agent Access',
    seoTitle: 'Labelme Review: Image Annotation App, Offline AI, MCP',
    intro: 
      'Labelme is a desktop tool for drawing and editing annotations on images, such as polygons, rectangles and points, to prepare training data for computer-vision models. It comes in two forms: a free open-source Python package and a paid standalone app. The maker says AI models draft the shapes offline on your computer. This review is based on the maker\'s website and policies and on the GitHub repository and its releases, checked on 18 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription: 
      'Labelme is an image annotation tool with offline SAM AI and an MCP link for AI agents. Open-source package and paid app: license, pricing, privacy, limits.',
    twitterDescription: 
      'Labelme annotates images on your own computer, with offline SAM AI drafts and an MCP link for AI agents. Open-source package plus a paid app.',
    audience: 
      'Machine-learning engineers, researchers and teams who prepare image datasets for computer-vision models',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Labelme',
    targetKeywords: [
      'Labelme review',
      'Labelme image annotation',
      'Labelme SAM3',
      'Labelme pricing',
      'Labelme MCP',
      'Labelme privacy',
    ],
    current_models_mentioned: [],
    leadAnswerBlock: 
      '**Labelme is an image annotation tool for macOS, Windows and Linux that lets you draw shapes by hand or have offline AI models (SAM, SAM2, SAM3, YOLO-World) draft them, and it saves plain JSON files next to your images.** The source code is open source under GPL-3.0, and a paid standalone app adds an AI-agent connection and dataset export.',
    quickAnswerTop: {
      en: {
        question: 'What is Labelme and who is it for?',
        answer: 
          'Labelme is a desktop image annotation tool that turns your images into labeled training data, with optional AI drafting of the shapes. It suits people preparing datasets for computer-vision models who want their images to stay on their own machine.',
        bullets: [
          'Platforms: macOS (Apple Silicon and Intel), Windows x64, Linux x64.',
          'Two forms: a free open-source package (GPL-3.0) and a paid standalone app under the maker\'s license agreement.',
          'Seven shape tools, flags and notes; output is plain JSON.',
          'AI models named by the maker: SAM, SAM2, SAM3, EfficientSAM and YOLO-World, run on your computer.',
          'Connecting an AI agent can pass the open image and shape data to that agent\'s provider.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: 'TL;DR',
        anchor: 'tldr',
      },
      {
        label: 'Overview',
        anchor: 'overview',
      },
      {
        label: 'How to Get It',
        anchor: 'get-it',
      },
      {
        label: 'Requirements',
        anchor: 'requirements',
      },
      {
        label: 'Features',
        anchor: 'features',
      },
      {
        label: 'Privacy and Data Flow',
        anchor: 'privacy',
      },
      {
        label: 'Pricing and License',
        anchor: 'pricing',
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
        label: 'Alternatives',
        anchor: 'alternatives',
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
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 
              'Labelme is a desktop tool for marking objects in images, by hand or with AI-drafted outlines, and saving the result as JSON files for training computer-vision models.',
          },
          {
            type: 'plain-terms',
            text: 
              'Think of it as a drawing tool for telling a model what is in a picture. You click an object, drag a box or type a word, the AI sketches the outline, and you correct it.',
          },
        ],
        items: [
          'Version 7.11.0 is the latest release (14 November 2026), and the repository had a commit on 17 November 2026, so no stale-project warning applies.',
          'Downloading the standalone app needs a free labelme.io account sign-in, and the app runs as a 3-day trial until you enter a license key.',
          'The open-source package costs nothing but needs a Python setup; the standalone app is a one-time purchase.',
          'Per the privacy policy, the app uploads none of your images or annotations; model weights download on first use.',
          'PromptQuorum has not tested the app, and the sources state no RAM or GPU needs.',
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**Labelme is a graphical image annotation tool that stores each annotation as a JSON file beside its image.**',
          'According to the maker\'s site, Kentaro Wada wrote the first version in 2016 as a student at the University of Tokyo and still maintains it. The privacy policy and the license agreement name Kentaro Wada, trading as Labelme.io, as the operator. The repository describes the project as image annotation with Python, supporting polygon, rectangle, circle, line and point shapes. Its README also lists image flags, a video-annotation example, AI-assisted point-to-polygon annotation with SAM and EfficientSAM, and text-to-annotation with YOLO-World and SAM3.',
          'Version 7.11.0 was released on 14 November 2026 and is the latest GitHub release. Version 7 of the pip package needs Python 3.12 or newer and uses PySide6 (Qt6); a v6.3.x line receives critical fixes only, per the README.',
          'The maker positions the standalone app as the same Labelme, packaged so you skip the Python setup, with AI-agent access and dataset export added. These are maker statements. PromptQuorum did not run the app and did not measure annotation speed or model quality.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**The easiest route is the standalone app, a normal installer for macOS, Windows or Linux; a pip install of the open-source package also exists.**',
          'The download page lists a .dmg for Apple Silicon and Intel Macs, a Microsoft Store listing, an .msi installer and a portable EXE for Windows x64, and an AppImage for Linux x64. The installation guide marks downloads as sign-in required. Windows may show a "Windows protected your PC" warning; the maker says to confirm that the publisher includes "Kentaro Wada" and not to disable Windows Security. The GitHub repository lists no release assets (checked 18 November 2026), so the installers come from labelme.io.',
        ],
        columns: [
          'Platform',
          'How to get it',
        ],
        rows: [
          {
            Platform: '[macOS](https://labelme.io/download)',
            'How to get it': 'Download .dmg (Apple Silicon or Intel), move to Applications',
          },
          {
            Platform: '[Windows](https://labelme.io/download)',
            'How to get it': 'Microsoft Store, .msi installer or portable EXE',
          },
          {
            Platform: '[Linux](https://labelme.io/download)',
            'How to get it': 'AppImage: make it executable, then run it',
          },
          {
            Platform: '[Python](https://github.com/wkentaro/labelme)',
            'How to get it': 'Run pip install labelme in a terminal (Python 3.12+)',
          },
          {
            Platform: 'Website',
            'How to get it': '[labelme.io](https://labelme.io)',
          },
          {
            Platform: 'Privacy policy',
            'How to get it': '[labelme.io/privacy-policy](https://labelme.io/privacy-policy)',
          },
        ],
        note: 
          'The pip route needs a terminal and a Python 3.12 or newer environment; the standalone app needs neither.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**The maker does not state RAM, GPU or disk requirements for the app.**',
          'The installation guide says Labelme supports operating system versions that are not end-of-life. AI model weights download on first use, and no download sizes are given. An offline SAM3 pack exists for machines without internet access, per the same guide.',
        ],
        columns: [
          'Item',
          'Stated figure',
        ],
        rows: [
          {
            Item: 'Operating system',
            'Stated figure': 'macOS (Apple Silicon, Intel), Windows 64-bit, Linux 64-bit',
          },
          {
            Item: 'RAM',
            'Stated figure': 'Not stated',
          },
          {
            Item: 'GPU',
            'Stated figure': 'Not stated',
          },
          {
            Item: 'Disk and model size',
            'Stated figure': 'Not stated; weights download on first use',
          },
          {
            Item: 'Python (pip route)',
            'Stated figure': '3.12 to 3.14 for v7.x (README)',
          },
          {
            Item: 'Network',
            'Stated figure': 'Needed for sign-in download and model downloads',
          },
        ],
        note: 'The license check itself runs offline, according to the maker.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**Labelme combines manual shape tools with AI drafting, and keeps every result editable.** All items below are maker claims from the website, changelog and README.',
        ],
        items: [
          'Seven shape tools: polygon, rectangle, oriented rectangle, circle, point, line and line strip.',
          'AI drafting: click-to-polygon with SAM2, box-to-annotation and text-to-annotation with SAM3, and YOLO-World for text-prompt detection.',
          'Models named by the maker: SAM, SAM2, SAM3 and EfficientSAM for segmentation, plus YOLO-World.',
          'Flags for occluded or truncated shapes, notes, shape locking and a flag to mark an image as checked.',
          'Auto-saving to a JSON file beside each image, and keyboard shortcuts to move between images.',
          'An interface in 21 languages.',
          'Pro only: an MCP server so ChatGPT, Claude, Claude Code, Codex or Cursor can read, add, select and delete shapes on the open image. You approve each change, and one undo reverts it.',
          'Pro only: a command-line dataset toolkit with 10+ tools for batch annotation, review and export to YOLO, YOLO-OBB and Pascal VOC. It runs in a terminal and needs Python.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**Per its privacy policy, the app uploads none of your images or annotations, but several features use the network.**',
          'The policy, last updated 12 November 2026, says the app checks the license key offline and does not check for updates. It does go online to download the AI models you choose. The files come from a Cloudflare-hosted Labelme server or, as a fallback, from GitHub or Hugging Face, which see your IP address.',
          'If you connect an AI agent, the policy says the agent receives the open image, its file path, the annotation file path, the labels, and each shape\'s label, points, flags and description. The agent\'s provider governs that data, while an agent that runs locally keeps it on your computer.',
          'Application telemetry is opt-in. It covers app opens, trial status, Buy clicks, license activation and unexpected errors, goes to PostHog under a random ID, and can be switched off from the app menu. The website uses Google Analytics and PostHog, and sign-up stores referral details. Paddle processes payments as merchant of record. The operator is based in Japan, and its providers process data in other countries, including the United States.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing and License',
        content: [
          '**The open-source package is free under GPL-3.0, and the standalone app is a one-time purchase under the maker\'s license agreement.**',
        ],
        items: [
          'Open-source package: free, installed with pip. The maker says it has the same annotation tools and AI models as the app.',
          'Pro: $79 once, with one year of updates; the version you have keeps working after that. It adds the AI-agent connection, the dataset toolkit, a model-download mirror and email support, per the maker.',
          'Pro (Lifetime): $249 once, with every future update, major releases included.',
          'Team: $249 per seat for five or more seats that can be reassigned; quotes on request.',
          'Trial and refund: 3 days with no credit card, excluding the dataset toolkit; a full refund by email within 14 days of payment.',
        ],
        note: 
          'Prices are in US dollars on the maker\'s pricing page, checked 18 November 2026, and VAT may apply. One license covers one named person on all their own computers and allows commercial use for internal annotation work. The license agreement forbids reselling, redistributing and reverse engineering the app. It says GPL-3.0 applies to the source code and the PyPI package, not to the agreement, and that AI models are licensed separately; SAM 3 falls under Meta\'s SAM License, which has its own use restrictions. Governing law is Japanese, with Tokyo courts and a carve-out for consumers\' home courts.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**Labelme fits people who annotate images for computer-vision models and want to do it on their own computer.**',
        ],
        items: [
          'Machine-learning practitioners who want images kept off third-party annotation servers.',
          'Annotators who prefer correcting AI-drafted outlines to drawing every shape by hand.',
          'Users of ChatGPT, Claude or Claude Code who want an agent to edit shapes and accept that agent\'s provider handling the data.',
          'Python users who are happy with the free package and a terminal.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**Labelme is a poor fit in some situations, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: teams that need a shared web annotation server with task queues. The sources describe a single-user desktop tool and no collaboration server.',
          'Not a fit: air-gapped setups that cannot fetch the model weights or the offline pack first.',
          'Unverified: RAM, GPU and disk requirements and model download sizes. None are stated.',
          'Unverified: annotation speed and AI model accuracy. PromptQuorum measured neither.',
          'Unverified: which export formats the app offers without Pro. The README lists VOC and COCO export among the open-source features, while the maker\'s site says YOLO, YOLO-OBB and Pascal VOC export belong to the Pro toolkit.',
          'Unverified: the homepage figures of 920+ paid licenses and a 4.9 rating from 146 reviews are the maker\'s own statements and were not checked.',
          'Unverified: that the agent connection works with every listed agent, and how the Linux AppImage behaves on specific distributions.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Labelme vs Alternatives',
        itemHeadings: true,
        content: [
          '**Labelme is a single-user desktop annotator. PromptQuorum has not compared it hands-on with the alternatives below.** Their details come from their GitHub descriptions, checked 18 November 2026.',
        ],
        columns: [
          'Tool',
          'Noted in sources',
        ],
        rows: [
          {
            Tool: 'Labelme',
            'Noted in sources': 'Desktop app; GPL-3.0 package plus paid app',
          },
          {
            Tool: '[CVAT](https://www.cvat.ai)',
            'Noted in sources': 'MIT; image, video, audio and 3D annotation platform',
          },
          {
            Tool: '[Label Studio](https://labelstud.io)',
            'Noted in sources': 'Apache-2.0; multi-type data labeling tool',
          },
          {
            Tool: '[X-AnyLabeling](https://xanylabeling.com)',
            'Noted in sources': 'GPL-3.0; cross-platform desktop annotation app',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'What happens when the year of updates ends?',
            a: 
              'Nothing stops working. You keep every release from your year of updates, and the app checks the license key offline. You can buy another year or choose the lifetime plan, per the maker.',
          },
          {
            q: 'Do my images leave my computer?',
            a: 
              'Not through the app itself, according to the privacy policy. Model weights are downloaded, and an AI agent you connect may send the data to its provider unless it runs locally.',
          },
          {
            q: 'Can I use Labelme without an internet connection?',
            a: 
              'After the models are downloaded, the maker says it works offline. For air-gapped machines, it says to download the models on a connected computer first or to ask support for the offline pack.',
          },
          {
            q: 'Which AI agents can connect?',
            a: 
              'The maker lists ChatGPT, Claude, Claude Code, Codex and Cursor, connected from File, then Connect AI Agent, in the Pro app. The changelog says you approve each change.',
          },
          {
            q: 'Is the standalone app open source?',
            a: 
              'No. The source code and the PyPI package are GPL-3.0, but the app is distributed under the maker\'s license agreement, which forbids redistribution and reverse engineering.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Labelme is worth trying if you annotate images for computer-vision models and want the work and the AI models on your own machine.**',
          'It has a long track record, with a first version in 2016 and a repository commit on 17 November 2026. It also offers a free open-source route, offline AI drafting by the maker\'s account, and plain JSON output. The paid app removes the Python setup.',
          'The trade-offs are real. It is one user on one desktop, with no collaboration features described. Hardware needs and speed are unverified, the download requires a sign-in, and the agent features can pass image data to a cloud provider. PromptQuorum has not tested the app, so try the trial or the pip package on a few images before you buy.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Labelme website](https://labelme.io) — maker\'s description of the app, AI models, agents and offline use, checked 18 November 2026.',
          '[Pricing page](https://labelme.io/pricing) — plans, prices, trial, refund and license terms, checked 18 November 2026.',
          '[Download page](https://labelme.io/download) — per-OS downloads, version 7.11.0 and Windows notice, checked 18 November 2026.',
          '[Installation guide](https://www.labelme.io/docs/install-labelme-app) — install steps, sign-in, trial, model downloads and offline pack, checked 18 November 2026.',
          '[Changelog](https://labelme.io/changelog) — Pro AI-agent feature and shape tools, checked 18 November 2026.',
          '[Privacy policy](https://labelme.io/privacy-policy) — data flow, telemetry, agents, operator based in Japan, checked 18 November 2026.',
          '[License agreement](https://labelme.io/eula) — license scope, restrictions, model licenses and governing law, checked 18 November 2026.',
          '[About page](https://labelme.io/about) — maker background and open-source history, checked 18 November 2026.',
          '[Labelme GitHub repository](https://github.com/wkentaro/labelme) — project description, GPL-3.0 license, last commit and README, checked 18 November 2026.',
          '[Release v7.11.0](https://github.com/wkentaro/labelme/releases/tag/v7.11.0) — latest release version and date, checked 18 November 2026.',
          '[CVAT repository](https://github.com/cvat-ai/cvat), [Label Studio repository](https://github.com/HumanSignal/label-studio) and [X-AnyLabeling repository](https://github.com/CVHub520/X-AnyLabeling) — licenses and descriptions of the alternatives, checked 18 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Unsloth Review](/power-local-llm/unsloth-review) — Free fine-tuning for LLMs, images and audio, a typical next step after data preparation.',
          '[LLaMA-Factory Review](/power-local-llm/llama-factory-review) — Fine-tune 100+ LLMs through a web UI.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/labelme-review-hero-de.webp',
    title: 'Labelme-Rezension: Bildannotation mit Offline-KI-Modellen und KI-Agenten-Zugriff',
    seoTitle: 'Labelme-Rezension: Annotations-App, Offline-KI, MCP',
    intro: 
      'Labelme ist ein Desktop-Werkzeug, mit dem Sie Annotationen auf Bildern zeichnen und bearbeiten, etwa Polygone, Rechtecke und Punkte, um Trainingsdaten für Computer-Vision-Modelle vorzubereiten. Es gibt zwei Varianten: ein kostenloses Open-Source-Python-Paket und eine kostenpflichtige eigenständige App. Laut Hersteller entwerfen KI-Modelle die Formen offline auf Ihrem Computer. Diese Rezension stützt sich auf die Website und die Richtlinien des Herstellers sowie auf das GitHub-Repository und seine Releases, geprüft am 18. November 2026. PromptQuorum hat die App nicht selbst getestet.',
    metaDescription: 
      'Labelme annotiert Bilder lokal, mit Offline-KI (SAM) und MCP-Anbindung für KI-Agenten. Open-Source-Paket und Bezahl-App: Lizenz, Preise, Datenschutz.',
    twitterDescription: 
      'Labelme annotiert Bilder auf Ihrem Computer, mit Offline-KI-Entwürfen (SAM) und MCP-Anbindung für KI-Agenten. Open-Source-Paket plus Bezahl-App.',
    audience: 
      'Machine-Learning-Entwickler, Forschende und Teams, die Bilddatensätze für Computer-Vision-Modelle vorbereiten',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Labelme',
    targetKeywords: [
      'Labelme Rezension',
      'Labelme Bildannotation',
      'Labelme SAM3',
      'Labelme Preise',
      'Labelme MCP',
      'Labelme Datenschutz',
    ],
    current_models_mentioned: [],
    leadAnswerBlock: 
      '**Labelme ist ein Werkzeug zur Bildannotation für macOS, Windows und Linux: Sie zeichnen Formen von Hand oder lassen Offline-KI-Modelle (SAM, SAM2, SAM3, YOLO-World) sie entwerfen, und die Ergebnisse landen als einfache JSON-Dateien neben Ihren Bildern.** Der Quellcode ist unter GPL-3.0 quelloffen, und eine kostenpflichtige eigenständige App ergänzt eine KI-Agenten-Anbindung und den Datensatz-Export.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Labelme, und für wen ist es gedacht?',
        answer: 
          'Labelme ist ein Desktop-Werkzeug zur Bildannotation, das Ihre Bilder in beschriftete Trainingsdaten verwandelt, optional mit KI-Entwürfen für die Formen. Es eignet sich für Menschen, die Datensätze für Computer-Vision-Modelle vorbereiten und ihre Bilder auf dem eigenen Rechner behalten möchten.',
        bullets: [
          'Plattformen: macOS (Apple Silicon und Intel), Windows x64, Linux x64.',
          'Zwei Varianten: ein kostenloses Open-Source-Paket (GPL-3.0) und eine kostenpflichtige eigenständige App unter der Lizenzvereinbarung des Herstellers.',
          'Sieben Formwerkzeuge, Markierungen und Notizen; die Ausgabe ist einfaches JSON.',
          'Vom Hersteller genannte KI-Modelle: SAM, SAM2, SAM3, EfficientSAM und YOLO-World, die auf Ihrem Computer laufen.',
          'Wer einen KI-Agenten anbindet, gibt das geöffnete Bild und die Formdaten unter Umständen an dessen Anbieter weiter.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: 'Zusammenfassung',
        anchor: 'tldr',
      },
      {
        label: 'Überblick',
        anchor: 'overview',
      },
      {
        label: 'So bekommen Sie die App',
        anchor: 'get-it',
      },
      {
        label: 'Anforderungen',
        anchor: 'requirements',
      },
      {
        label: 'Funktionen',
        anchor: 'features',
      },
      {
        label: 'Datenschutz und Datenfluss',
        anchor: 'privacy',
      },
      {
        label: 'Preise und Lizenz',
        anchor: 'pricing',
      },
      {
        label: 'Für wen geeignet',
        anchor: 'who-should-use',
      },
      {
        label: 'Was wir nicht überprüfen konnten',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Alternativen',
        anchor: 'alternatives',
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
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 
              'Labelme ist ein Desktop-Werkzeug, mit dem Sie Objekte in Bildern von Hand oder mit KI-Entwürfen markieren und das Ergebnis als JSON-Dateien zum Training von Computer-Vision-Modellen speichern.',
          },
          {
            type: 'plain-terms',
            text: 
              'Stellen Sie es sich als Zeichenwerkzeug vor, mit dem Sie einem Modell zeigen, was auf einem Bild zu sehen ist. Sie klicken ein Objekt an, ziehen einen Rahmen oder tippen ein Wort, die KI skizziert die Umrisse, und Sie korrigieren sie.',
          },
        ],
        items: [
          'Version 7.11.0 ist das neueste Release (14. November 2026), und das Repository hatte am 17. November 2026 einen Commit, daher gilt keine Warnung vor einem verwaisten Projekt.',
          'Für den Download der eigenständigen App ist die Anmeldung mit einem kostenlosen labelme.io-Konto nötig, und die App läuft als 3-Tage-Test, bis Sie einen Lizenzschlüssel eingeben.',
          'Das Open-Source-Paket kostet nichts, verlangt aber eine Python-Einrichtung; die eigenständige App ist ein Einmalkauf.',
          'Laut Datenschutzerklärung lädt die App keines Ihrer Bilder und keine Ihrer Annotationen hoch; Modellgewichte werden bei der ersten Nutzung heruntergeladen.',
          'PromptQuorum hat die App nicht getestet, und die Quellen nennen keine Anforderungen an RAM oder GPU.',
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**Labelme ist ein grafisches Werkzeug zur Bildannotation, das jede Annotation als JSON-Datei neben dem zugehörigen Bild speichert.**',
          'Laut der Website des Herstellers schrieb Kentaro Wada die erste Version 2016 als Student an der Universität Tokio und pflegt das Projekt bis heute. Die Datenschutzerklärung und die Lizenzvereinbarung nennen Kentaro Wada, tätig unter dem Namen Labelme.io, als Betreiber. Das Repository beschreibt das Projekt als Bildannotation mit Python und unterstützt Polygone, Rechtecke, Kreise, Linien und Punkte. Die README nennt außerdem Bildmarkierungen, ein Beispiel zur Videoannotation, KI-gestützte Punkt-zu-Polygon-Annotation mit SAM und EfficientSAM sowie Text-zu-Annotation mit YOLO-World und SAM3.',
          'Version 7.11.0 erschien am 14. November 2026 und ist das neueste GitHub-Release. Version 7 des pip-Pakets benötigt Python 3.12 oder neuer und nutzt PySide6 (Qt6); laut README erhält ein Zweig v6.3.x nur kritische Korrekturen.',
          'Der Hersteller stellt die eigenständige App als dasselbe Labelme dar, verpackt, sodass Sie die Python-Einrichtung überspringen, und ergänzt um KI-Agenten-Zugriff und Datensatz-Export. Das sind Aussagen des Herstellers. PromptQuorum hat die App nicht ausgeführt und weder Annotationsgeschwindigkeit noch Modellqualität gemessen.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Am einfachsten ist die eigenständige App, ein normales Installationsprogramm für macOS, Windows oder Linux; zusätzlich gibt es eine pip-Installation des Open-Source-Pakets.**',
          'Die Download-Seite nennt eine .dmg für Macs mit Apple Silicon und Intel, einen Eintrag im Microsoft Store, ein .msi-Installationsprogramm und eine portable EXE für Windows x64 sowie ein AppImage für Linux x64. Laut Installationsanleitung ist für Downloads eine Anmeldung erforderlich. Windows zeigt möglicherweise die Warnung „Der Computer wurde durch Windows geschützt“; der Hersteller rät, zu prüfen, dass der Herausgeber „Kentaro Wada“ enthält, und Windows-Sicherheit nicht zu deaktivieren. Das GitHub-Repository listet keine Release-Dateien (geprüft am 18. November 2026), die Installationsprogramme kommen also von labelme.io.',
        ],
        columns: [
          'Plattform',
          'So bekommen Sie sie',
        ],
        rows: [
          {
            Plattform: '[macOS](https://labelme.io/download)',
            'So bekommen Sie sie': '.dmg laden (Apple Silicon oder Intel), in „Programme“ ziehen',
          },
          {
            Plattform: '[Windows](https://labelme.io/download)',
            'So bekommen Sie sie': 'Microsoft Store, .msi-Installer oder portable EXE',
          },
          {
            Plattform: '[Linux](https://labelme.io/download)',
            'So bekommen Sie sie': 'AppImage: ausführbar machen, dann starten',
          },
          {
            Plattform: '[Python](https://github.com/wkentaro/labelme)',
            'So bekommen Sie sie': 'pip install labelme im Terminal (Python 3.12+)',
          },
          {
            Plattform: 'Website',
            'So bekommen Sie sie': '[labelme.io](https://labelme.io)',
          },
          {
            Plattform: 'Datenschutzerklärung',
            'So bekommen Sie sie': '[labelme.io/privacy-policy](https://labelme.io/privacy-policy)',
          },
        ],
        note: 
          'Die pip-Variante braucht ein Terminal und eine Python-Umgebung ab Version 3.12; die eigenständige App braucht beides nicht.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**Der Hersteller nennt keine Anforderungen an RAM, GPU oder Speicherplatz für die App.**',
          'Laut Installationsanleitung unterstützt Labelme Betriebssystemversionen, deren Support nicht abgelaufen ist. KI-Modellgewichte werden bei der ersten Nutzung heruntergeladen, Downloadgrößen werden nicht angegeben. Für Rechner ohne Internetzugang gibt es laut derselben Anleitung ein Offline-Paket für SAM3.',
        ],
        columns: [
          'Punkt',
          'Angegebener Wert',
        ],
        rows: [
          {
            Punkt: 'Betriebssystem',
            'Angegebener Wert': 'macOS (Apple Silicon, Intel), Windows 64 Bit, Linux 64 Bit',
          },
          {
            Punkt: 'RAM',
            'Angegebener Wert': 'Nicht angegeben',
          },
          {
            Punkt: 'GPU',
            'Angegebener Wert': 'Nicht angegeben',
          },
          {
            Punkt: 'Speicher und Modellgröße',
            'Angegebener Wert': 'Nicht angegeben; Gewichte werden beim ersten Start geladen',
          },
          {
            Punkt: 'Python (pip-Weg)',
            'Angegebener Wert': '3.12 bis 3.14 für v7.x (README)',
          },
          {
            Punkt: 'Netzwerk',
            'Angegebener Wert': 'Nötig für den Download nach Anmeldung und für Modell-Downloads',
          },
        ],
        note: 'Die Lizenzprüfung selbst läuft laut Hersteller offline.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Labelme kombiniert manuelle Formwerkzeuge mit KI-Entwürfen und hält jedes Ergebnis bearbeitbar.** Alle folgenden Punkte sind Aussagen des Herstellers aus Website, Änderungsprotokoll und README.',
        ],
        items: [
          'Sieben Formwerkzeuge: Polygon, Rechteck, gedrehtes Rechteck, Kreis, Punkt, Linie und Linienzug.',
          'KI-Entwürfe: Klick-zu-Polygon mit SAM2, Rahmen-zu-Annotation und Text-zu-Annotation mit SAM3 sowie YOLO-World für die Erkennung per Texteingabe.',
          'Vom Hersteller genannte Modelle: SAM, SAM2, SAM3 und EfficientSAM für die Segmentierung sowie YOLO-World.',
          'Markierungen für verdeckte oder abgeschnittene Formen, Notizen, das Sperren von Formen und eine Markierung, mit der ein Bild als geprüft gilt.',
          'Automatisches Speichern in eine JSON-Datei neben jedem Bild und Tastenkürzel zum Wechseln zwischen Bildern.',
          'Eine Oberfläche in 21 Sprachen.',
          'Nur Pro: ein MCP-Server, über den ChatGPT, Claude, Claude Code, Codex oder Cursor Formen im geöffneten Bild lesen, hinzufügen, auswählen und löschen können. Sie bestätigen jede Änderung, und ein einziges Rückgängig macht sie rückgängig.',
          'Nur Pro: ein Kommandozeilen-Toolkit für Datensätze mit mehr als 10 Werkzeugen für Stapelannotation, Prüfung und Export nach YOLO, YOLO-OBB und Pascal VOC. Es läuft im Terminal und braucht Python.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Laut Datenschutzerklärung lädt die App keines Ihrer Bilder und keine Ihrer Annotationen hoch, doch mehrere Funktionen nutzen das Netzwerk.**',
          'Die Erklärung, zuletzt aktualisiert am 12. November 2026, sagt, dass die App den Lizenzschlüssel offline prüft und nicht nach Updates sucht. Sie geht aber online, um die von Ihnen gewählten KI-Modelle herunterzuladen. Die Dateien stammen von einem bei Cloudflare gehosteten Labelme-Server oder, als Ausweichlösung, von GitHub oder Hugging Face, die Ihre IP-Adresse sehen.',
          'Wenn Sie einen KI-Agenten anbinden, erhält dieser laut Erklärung das geöffnete Bild, dessen Dateipfad, den Pfad der Annotationsdatei, die Labels sowie Label, Punkte, Markierungen und Beschreibung jeder Form. Der Anbieter des Agenten bestimmt über diese Daten; ein Agent, der lokal läuft, behält sie auf Ihrem Computer.',
          'Die Telemetrie der Anwendung ist freiwillig. Sie umfasst das Öffnen der App, den Teststatus, Klicks auf „Kaufen“, die Lizenzaktivierung und unerwartete Fehler, geht unter einer zufälligen ID an PostHog und lässt sich im App-Menü abschalten. Die Website nutzt Google Analytics und PostHog, und bei der Registrierung werden Herkunftsangaben gespeichert. Paddle wickelt Zahlungen als Merchant of Record ab. Der Betreiber hat seinen Sitz in Japan, und seine Dienstleister verarbeiten Daten auch in anderen Ländern, darunter den USA.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Preise und Lizenz',
        content: [
          '**Das Open-Source-Paket ist unter GPL-3.0 kostenlos, und die eigenständige App ist ein Einmalkauf unter der Lizenzvereinbarung des Herstellers.**',
        ],
        items: [
          'Open-Source-Paket: kostenlos, Installation mit pip. Laut Hersteller bietet es dieselben Annotationswerkzeuge und KI-Modelle wie die App.',
          'Pro: 79 US-Dollar einmalig, mit einem Jahr Updates; die vorhandene Version läuft danach weiter. Laut Hersteller ergänzt es die KI-Agenten-Anbindung, das Datensatz-Toolkit, einen Spiegelserver für Modell-Downloads und E-Mail-Support.',
          'Pro (Lifetime): 249 US-Dollar einmalig, mit allen künftigen Updates, einschließlich großer Versionssprünge.',
          'Team: 249 US-Dollar pro Platz bei fünf oder mehr Plätzen, die neu zugewiesen werden können; Angebote auf Anfrage.',
          'Test und Erstattung: 3 Tage ohne Kreditkarte, ohne das Datensatz-Toolkit; volle Erstattung per E-Mail innerhalb von 14 Tagen nach der Zahlung.',
        ],
        note: 
          'Die Preise stehen in US-Dollar auf der Preisseite des Herstellers, geprüft am 18. November 2026, und es kann Mehrwertsteuer anfallen. Eine Lizenz gilt für eine namentlich genannte Person auf allen ihren eigenen Computern und erlaubt die kommerzielle Nutzung für interne Annotationsarbeit. Die Lizenzvereinbarung verbietet Weiterverkauf, Weitergabe und Reverse Engineering der App. Sie besagt, dass die GPL-3.0 für den Quellcode und das PyPI-Paket gilt, nicht für die Vereinbarung, und dass KI-Modelle gesondert lizenziert sind; SAM 3 unterliegt der SAM License von Meta mit eigenen Nutzungsbeschränkungen. Es gilt japanisches Recht mit Gerichtsstand Tokio und einer Ausnahme für den Heimatgerichtsstand von Verbrauchern.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**Labelme passt zu Menschen, die Bilder für Computer-Vision-Modelle annotieren und das auf dem eigenen Computer tun möchten.**',
        ],
        items: [
          'Machine-Learning-Praktiker, die ihre Bilder von Annotationsservern Dritter fernhalten möchten.',
          'Annotierende, die KI-entworfene Umrisse lieber korrigieren, als jede Form von Hand zu zeichnen.',
          'Nutzer von ChatGPT, Claude oder Claude Code, die einen Agenten Formen bearbeiten lassen möchten und akzeptieren, dass dessen Anbieter die Daten verarbeitet.',
          'Python-Nutzer, denen das kostenlose Paket und ein Terminal genügen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        content: [
          '**Labelme passt in manchen Situationen schlecht, und mehrere Angaben bleiben ungeprüft.**',
        ],
        items: [
          'Nicht geeignet: Teams, die einen gemeinsamen Web-Annotationsserver mit Aufgabenwarteschlangen brauchen. Die Quellen beschreiben ein Desktop-Werkzeug für eine Person und keinen Kollaborationsserver.',
          'Nicht geeignet: Umgebungen ohne Netzanbindung, die Modellgewichte oder das Offline-Paket nicht vorab beschaffen können.',
          'Ungeprüft: Anforderungen an RAM, GPU und Speicherplatz sowie Downloadgrößen der Modelle. Keine davon wird genannt.',
          'Ungeprüft: Annotationsgeschwindigkeit und Genauigkeit der KI-Modelle. PromptQuorum hat keines von beiden gemessen.',
          'Ungeprüft: welche Exportformate die App ohne Pro bietet. Die README führt VOC- und COCO-Export unter den Open-Source-Funktionen auf, während die Website des Herstellers den Export nach YOLO, YOLO-OBB und Pascal VOC dem Pro-Toolkit zuordnet.',
          'Ungeprüft: Die Zahlen auf der Startseite (mehr als 920 bezahlte Lizenzen, Bewertung 4,9 aus 146 Rezensionen) sind Angaben des Herstellers und wurden nicht überprüft.',
          'Ungeprüft: ob die Agenten-Anbindung mit jedem aufgeführten Agenten funktioniert und wie sich das Linux-AppImage auf einzelnen Distributionen verhält.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Labelme im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**Labelme ist ein Desktop-Annotationswerkzeug für eine Person. PromptQuorum hat es nicht praktisch mit den folgenden Alternativen verglichen.** Deren Angaben stammen aus ihren GitHub-Beschreibungen, geprüft am 18. November 2026.',
        ],
        columns: [
          'Werkzeug',
          'In den Quellen vermerkt',
        ],
        rows: [
          {
            Werkzeug: 'Labelme',
            'In den Quellen vermerkt': 'Desktop-App; GPL-3.0-Paket plus Bezahl-App',
          },
          {
            Werkzeug: '[CVAT](https://www.cvat.ai)',
            'In den Quellen vermerkt': 'MIT; Annotationsplattform für Bild, Video, Audio und 3D',
          },
          {
            Werkzeug: '[Label Studio](https://labelstud.io)',
            'In den Quellen vermerkt': 'Apache-2.0; Labeling-Werkzeug für viele Datentypen',
          },
          {
            Werkzeug: '[X-AnyLabeling](https://xanylabeling.com)',
            'In den Quellen vermerkt': 'GPL-3.0; plattformübergreifende Desktop-Annotations-App',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Was passiert, wenn das Jahr der Updates endet?',
            a: 
              'Nichts hört auf zu funktionieren. Sie behalten jedes Release aus Ihrem Update-Jahr, und die App prüft den Lizenzschlüssel offline. Laut Hersteller können Sie ein weiteres Jahr kaufen oder den Lifetime-Tarif wählen.',
          },
          {
            q: 'Verlassen meine Bilder meinen Computer?',
            a: 
              'Laut Datenschutzerklärung nicht durch die App selbst. Modellgewichte werden heruntergeladen, und ein angebundener KI-Agent kann die Daten an seinen Anbieter senden, sofern er nicht lokal läuft.',
          },
          {
            q: 'Kann ich Labelme ohne Internetverbindung nutzen?',
            a: 
              'Nach dem Download der Modelle funktioniert es laut Hersteller offline. Für Rechner ohne Netzanbindung rät der Hersteller, die Modelle zuerst auf einem verbundenen Computer zu laden oder beim Support das Offline-Paket anzufragen.',
          },
          {
            q: 'Welche KI-Agenten lassen sich anbinden?',
            a: 
              'Der Hersteller nennt ChatGPT, Claude, Claude Code, Codex und Cursor, angebunden in der Pro-App über Datei und dann „KI-Agent verbinden“. Laut Änderungsprotokoll bestätigen Sie jede Änderung.',
          },
          {
            q: 'Ist die eigenständige App Open Source?',
            a: 
              'Nein. Der Quellcode und das PyPI-Paket stehen unter GPL-3.0, die App wird aber unter der Lizenzvereinbarung des Herstellers vertrieben, die Weitergabe und Reverse Engineering verbietet.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**Labelme ist einen Versuch wert, wenn Sie Bilder für Computer-Vision-Modelle annotieren und Arbeit und KI-Modelle auf dem eigenen Rechner behalten möchten.**',
          'Es hat eine lange Geschichte, mit einer ersten Version 2016 und einem Commit im Repository am 17. November 2026. Dazu kommen ein kostenloser Open-Source-Weg, nach Angaben des Herstellers KI-Entwürfe offline und einfache JSON-Ausgabe. Die Bezahl-App erspart die Python-Einrichtung.',
          'Die Kompromisse sind real. Es ist ein Werkzeug für eine Person an einem Desktop, ohne beschriebene Funktionen für Zusammenarbeit. Hardwareanforderungen und Geschwindigkeit sind ungeprüft, der Download verlangt eine Anmeldung, und die Agenten-Funktionen können Bilddaten an einen Cloud-Anbieter weitergeben. PromptQuorum hat die App nicht getestet; probieren Sie den Test oder das pip-Paket an einigen Bildern aus, bevor Sie kaufen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Labelme-Website](https://labelme.io) — Beschreibung des Herstellers zu App, KI-Modellen, Agenten und Offline-Nutzung, geprüft am 18. November 2026.',
          '[Preisseite](https://labelme.io/pricing) — Tarife, Preise, Test, Erstattung und Lizenzbedingungen, geprüft am 18. November 2026.',
          '[Download-Seite](https://labelme.io/download) — Downloads je System, Version 7.11.0 und Windows-Hinweis, geprüft am 18. November 2026.',
          '[Installationsanleitung](https://www.labelme.io/docs/install-labelme-app) — Installationsschritte, Anmeldung, Test, Modell-Downloads und Offline-Paket, geprüft am 18. November 2026.',
          '[Änderungsprotokoll](https://labelme.io/changelog) — Pro-Funktion für KI-Agenten und Formwerkzeuge, geprüft am 18. November 2026.',
          '[Datenschutzerklärung](https://labelme.io/privacy-policy) — Datenfluss, Telemetrie, Agenten, Betreiber mit Sitz in Japan, geprüft am 18. November 2026.',
          '[Lizenzvereinbarung](https://labelme.io/eula) — Lizenzumfang, Einschränkungen, Modelllizenzen und anwendbares Recht, geprüft am 18. November 2026.',
          '[Seite „Über uns“](https://labelme.io/about) — Hintergrund des Herstellers und Open-Source-Geschichte, geprüft am 18. November 2026.',
          '[Labelme-GitHub-Repository](https://github.com/wkentaro/labelme) — Projektbeschreibung, GPL-3.0-Lizenz, letzter Commit und README, geprüft am 18. November 2026.',
          '[Release v7.11.0](https://github.com/wkentaro/labelme/releases/tag/v7.11.0) — Version und Datum des neuesten Releases, geprüft am 18. November 2026.',
          '[CVAT-Repository](https://github.com/cvat-ai/cvat), [Label-Studio-Repository](https://github.com/HumanSignal/label-studio) und [X-AnyLabeling-Repository](https://github.com/CVHub520/X-AnyLabeling) — Lizenzen und Beschreibungen der Alternativen, geprüft am 18. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Unsloth-Rezension](/de/power-local-llm/unsloth-review) — Kostenloses Fine-Tuning für LLMs, Bilder und Audio, ein typischer nächster Schritt nach der Datenvorbereitung.',
          '[LLaMA-Factory-Rezension](/de/power-local-llm/llama-factory-review) — Mehr als 100 LLMs per Weboberfläche feinabstimmen.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/labelme-review-hero-es.webp',
    title: 
      'Reseña de Labelme: anotación de imágenes con modelos de IA sin conexión y acceso para agentes de IA',
    seoTitle: 'Reseña de Labelme: app de anotación, IA offline, MCP',
    intro: 
      'Labelme es una herramienta de escritorio para dibujar y editar anotaciones en imágenes, como polígonos, rectángulos y puntos, y así preparar datos de entrenamiento para modelos de visión por computador. Existe en dos formas: un paquete de Python de código abierto y gratuito, y una app independiente de pago. El fabricante dice que los modelos de IA dibujan los borradores de las formas sin conexión en tu equipo. Esta reseña se basa en el sitio web y las políticas del fabricante, y en el repositorio de GitHub y sus versiones, consultados el 18 de noviembre de 2026. PromptQuorum no ha probado la app personalmente.',
    metaDescription: 
      'Labelme anota imágenes en tu equipo, con IA offline (SAM) y conexión MCP para agentes de IA. Paquete abierto y app de pago: licencia, precios y privacidad.',
    twitterDescription: 
      'Labelme anota imágenes en tu propio equipo, con borradores de IA sin conexión (SAM) y conexión MCP para agentes. Paquete abierto más app de pago.',
    audience: 
      'Ingenieros de aprendizaje automático, investigadores y equipos que preparan conjuntos de imágenes para modelos de visión por computador',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Labelme',
    targetKeywords: [
      'reseña de Labelme',
      'Labelme anotación de imágenes',
      'Labelme SAM3',
      'precios de Labelme',
      'Labelme MCP',
      'privacidad de Labelme',
    ],
    current_models_mentioned: [],
    leadAnswerBlock: 
      '**Labelme es una herramienta de anotación de imágenes para macOS, Windows y Linux que te permite dibujar formas a mano o pedir a modelos de IA sin conexión (SAM, SAM2, SAM3, YOLO-World) que las propongan, y guarda archivos JSON sencillos junto a tus imágenes.** El código fuente es abierto con licencia GPL-3.0, y una app independiente de pago añade una conexión con agentes de IA y la exportación de conjuntos de datos.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es Labelme y para quién es?',
        answer: 
          'Labelme es una herramienta de escritorio de anotación de imágenes que convierte tus imágenes en datos de entrenamiento etiquetados, con borradores opcionales de las formas hechos por IA. Es adecuada para quien prepara conjuntos de datos para modelos de visión por computador y quiere que sus imágenes se queden en su propio equipo.',
        bullets: [
          'Plataformas: macOS (Apple Silicon e Intel), Windows x64, Linux x64.',
          'Dos formas: un paquete de código abierto gratuito (GPL-3.0) y una app independiente de pago con el acuerdo de licencia del fabricante.',
          'Siete herramientas de formas, marcas y notas; la salida es JSON sencillo.',
          'Modelos de IA que cita el fabricante: SAM, SAM2, SAM3, EfficientSAM y YOLO-World, que se ejecutan en tu equipo.',
          'Al conectar un agente de IA, la imagen abierta y los datos de las formas pueden pasar al proveedor de ese agente.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: 'Puntos clave',
        anchor: 'tldr',
      },
      {
        label: 'Resumen',
        anchor: 'overview',
      },
      {
        label: 'Cómo conseguirla',
        anchor: 'get-it',
      },
      {
        label: 'Requisitos',
        anchor: 'requirements',
      },
      {
        label: 'Funciones',
        anchor: 'features',
      },
      {
        label: 'Privacidad y flujo de datos',
        anchor: 'privacy',
      },
      {
        label: 'Precios y licencia',
        anchor: 'pricing',
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
        label: 'Alternativas',
        anchor: 'alternatives',
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
              'Labelme es una herramienta de escritorio para marcar objetos en imágenes, a mano o con contornos propuestos por IA, y guardar el resultado como archivos JSON para entrenar modelos de visión por computador.',
          },
          {
            type: 'plain-terms',
            text: 
              'Piensa en ella como una herramienta de dibujo para decirle a un modelo qué hay en una imagen. Haces clic en un objeto, arrastras un recuadro o escribes una palabra, la IA esboza el contorno y tú lo corriges.',
          },
        ],
        items: [
          'La versión 7.11.0 es la más reciente (14 de noviembre de 2026) y el repositorio tuvo un commit el 17 de noviembre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Para descargar la app independiente hay que iniciar sesión con una cuenta gratuita de labelme.io, y la app funciona como prueba de 3 días hasta que introduces una clave de licencia.',
          'El paquete de código abierto no cuesta nada, pero requiere configurar Python; la app independiente es una compra única.',
          'Según la política de privacidad, la app no sube ninguna de tus imágenes ni anotaciones; los pesos de los modelos se descargan la primera vez que se usan.',
          'PromptQuorum no ha probado la app y las fuentes no indican requisitos de RAM ni de GPU.',
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**Labelme es una herramienta gráfica de anotación de imágenes que guarda cada anotación como un archivo JSON junto a su imagen.**',
          'Según el sitio del fabricante, Kentaro Wada escribió la primera versión en 2016 siendo estudiante en la Universidad de Tokio y sigue manteniéndola. La política de privacidad y el acuerdo de licencia nombran a Kentaro Wada, que opera bajo el nombre Labelme.io, como responsable. El repositorio describe el proyecto como anotación de imágenes con Python, con formas de polígono, rectángulo, círculo, línea y punto. Su README también menciona marcas de imagen, un ejemplo de anotación de vídeo, anotación asistida de punto a polígono con SAM y EfficientSAM, y de texto a anotación con YOLO-World y SAM3.',
          'La versión 7.11.0 se publicó el 14 de noviembre de 2026 y es la última versión de GitHub. La versión 7 del paquete pip requiere Python 3.12 o posterior y usa PySide6 (Qt6); según el README, la rama v6.3.x solo recibe correcciones críticas.',
          'El fabricante presenta la app independiente como el mismo Labelme, empaquetado para que te saltes la configuración de Python, con acceso para agentes de IA y exportación de conjuntos de datos añadidos. Son afirmaciones del fabricante. PromptQuorum no ejecutó la app ni midió la velocidad de anotación ni la calidad de los modelos.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirla',
        content: [
          '**La vía más fácil es la app independiente, un instalador normal para macOS, Windows o Linux; también existe una instalación con pip del paquete de código abierto.**',
          'La página de descarga ofrece un .dmg para Mac con Apple Silicon e Intel, una ficha de Microsoft Store, un instalador .msi y un EXE portátil para Windows x64, y un AppImage para Linux x64. La guía de instalación indica que las descargas requieren iniciar sesión. Windows puede mostrar el aviso «Windows protegió su PC»; el fabricante dice que se compruebe que el editor incluya «Kentaro Wada» y que no se desactive Seguridad de Windows. El repositorio de GitHub no lista archivos de versión (consultado el 18 de noviembre de 2026), así que los instaladores vienen de labelme.io.',
        ],
        columns: [
          'Plataforma',
          'Cómo conseguirla',
        ],
        rows: [
          {
            Plataforma: '[macOS](https://labelme.io/download)',
            'Cómo conseguirla': 'Descarga el .dmg (Apple Silicon o Intel) y muévelo a Aplicaciones',
          },
          {
            Plataforma: '[Windows](https://labelme.io/download)',
            'Cómo conseguirla': 'Microsoft Store, instalador .msi o EXE portátil',
          },
          {
            Plataforma: '[Linux](https://labelme.io/download)',
            'Cómo conseguirla': 'AppImage: hazlo ejecutable y ejecútalo',
          },
          {
            Plataforma: '[Python](https://github.com/wkentaro/labelme)',
            'Cómo conseguirla': 'Ejecuta pip install labelme en una terminal (Python 3.12+)',
          },
          {
            Plataforma: 'Sitio web',
            'Cómo conseguirla': '[labelme.io](https://labelme.io)',
          },
          {
            Plataforma: 'Política de privacidad',
            'Cómo conseguirla': '[labelme.io/privacy-policy](https://labelme.io/privacy-policy)',
          },
        ],
        note: 
          'La vía pip necesita una terminal y un entorno de Python 3.12 o posterior; la app independiente no necesita ninguno de los dos.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**El fabricante no indica requisitos de RAM, GPU ni disco para la app.**',
          'La guía de instalación dice que Labelme admite versiones de sistema operativo que no han llegado al final de su soporte. Los pesos de los modelos de IA se descargan la primera vez que se usan y no se dan tamaños de descarga. Según la misma guía, existe un paquete sin conexión de SAM3 para equipos sin acceso a internet.',
        ],
        columns: [
          'Elemento',
          'Cifra indicada',
        ],
        rows: [
          {
            Elemento: 'Sistema operativo',
            'Cifra indicada': 'macOS (Apple Silicon, Intel), Windows de 64 bits, Linux de 64 bits',
          },
          {
            Elemento: 'RAM',
            'Cifra indicada': 'No se indica',
          },
          {
            Elemento: 'GPU',
            'Cifra indicada': 'No se indica',
          },
          {
            Elemento: 'Disco y tamaño de modelos',
            'Cifra indicada': 'No se indica; los pesos se descargan al primer uso',
          },
          {
            Elemento: 'Python (vía pip)',
            'Cifra indicada': '3.12 a 3.14 para v7.x (README)',
          },
          {
            Elemento: 'Red',
            'Cifra indicada': 'Necesaria para la descarga con inicio de sesión y los modelos',
          },
        ],
        note: 'La comprobación de la licencia se hace sin conexión, según el fabricante.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**Labelme combina herramientas de formas manuales con borradores de IA y mantiene cada resultado editable.** Todos los puntos siguientes son afirmaciones del fabricante tomadas del sitio web, el registro de cambios y el README.',
        ],
        items: [
          'Siete herramientas de formas: polígono, rectángulo, rectángulo orientado, círculo, punto, línea y polilínea.',
          'Borradores de IA: clic a polígono con SAM2, recuadro a anotación y texto a anotación con SAM3, y YOLO-World para detección mediante texto.',
          'Modelos que cita el fabricante: SAM, SAM2, SAM3 y EfficientSAM para segmentación, además de YOLO-World.',
          'Marcas para formas ocultas o recortadas, notas, bloqueo de formas y una marca para indicar que una imagen está revisada.',
          'Guardado automático en un archivo JSON junto a cada imagen y atajos de teclado para pasar de una imagen a otra.',
          'Una interfaz en 21 idiomas.',
          'Solo Pro: un servidor MCP para que ChatGPT, Claude, Claude Code, Codex o Cursor puedan leer, añadir, seleccionar y eliminar formas en la imagen abierta. Tú apruebas cada cambio y un solo deshacer lo revierte.',
          'Solo Pro: un kit de herramientas de línea de comandos para conjuntos de datos, con más de 10 herramientas para anotación por lotes, revisión y exportación a YOLO, YOLO-OBB y Pascal VOC. Se ejecuta en una terminal y necesita Python.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**Según su política de privacidad, la app no sube ninguna de tus imágenes ni anotaciones, pero varias funciones usan la red.**',
          'La política, actualizada por última vez el 12 de noviembre de 2026, dice que la app comprueba la clave de licencia sin conexión y no busca actualizaciones. Sí se conecta para descargar los modelos de IA que elijas. Los archivos vienen de un servidor de Labelme alojado en Cloudflare o, como alternativa, de GitHub o Hugging Face, que ven tu dirección IP.',
          'Si conectas un agente de IA, la política dice que el agente recibe la imagen abierta, su ruta de archivo, la ruta del archivo de anotaciones, las etiquetas y, de cada forma, su etiqueta, puntos, marcas y descripción. El proveedor del agente rige esos datos, mientras que un agente que se ejecuta en local los mantiene en tu equipo.',
          'La telemetría de la aplicación es opcional. Abarca las aperturas de la app, el estado de la prueba, los clics en Comprar, la activación de la licencia y los errores inesperados, va a PostHog con un identificador aleatorio y puede desactivarse desde el menú de la app. El sitio web usa Google Analytics y PostHog, y al registrarse se guardan datos de procedencia. Paddle procesa los pagos como comerciante de registro. El responsable tiene su sede en Japón y sus proveedores tratan datos en otros países, entre ellos Estados Unidos.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Precios y licencia',
        content: [
          '**El paquete de código abierto es gratuito con licencia GPL-3.0, y la app independiente es una compra única con el acuerdo de licencia del fabricante.**',
        ],
        items: [
          'Paquete de código abierto: gratuito, se instala con pip. El fabricante dice que tiene las mismas herramientas de anotación y modelos de IA que la app.',
          'Pro: 79 USD una sola vez, con un año de actualizaciones; la versión que tienes sigue funcionando después. Según el fabricante, añade la conexión con agentes de IA, el kit de herramientas de conjuntos de datos, un espejo de descarga de modelos y soporte por correo.',
          'Pro (Lifetime): 249 USD una sola vez, con todas las actualizaciones futuras, incluidas las versiones mayores.',
          'Team: 249 USD por puesto, a partir de cinco puestos que se pueden reasignar; presupuestos a petición.',
          'Prueba y reembolso: 3 días sin tarjeta de crédito, sin el kit de herramientas de conjuntos de datos; reembolso completo por correo en los 14 días siguientes al pago.',
        ],
        note: 
          'Los precios están en dólares estadounidenses en la página de precios del fabricante, consultada el 18 de noviembre de 2026, y puede aplicarse IVA. Una licencia cubre a una persona con nombre en todos sus propios equipos y permite el uso comercial en trabajo de anotación interno. El acuerdo de licencia prohíbe revender, redistribuir y aplicar ingeniería inversa a la app. Dice que la GPL-3.0 se aplica al código fuente y al paquete de PyPI, no al acuerdo, y que los modelos de IA tienen licencia aparte; SAM 3 se rige por la SAM License de Meta, con sus propias restricciones de uso. La ley aplicable es la japonesa, con tribunales de Tokio y una excepción para los tribunales del domicilio del consumidor.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**Labelme encaja con quienes anotan imágenes para modelos de visión por computador y quieren hacerlo en su propio equipo.**',
        ],
        items: [
          'Profesionales del aprendizaje automático que quieren mantener sus imágenes fuera de servidores de anotación de terceros.',
          'Anotadores que prefieren corregir contornos propuestos por IA a dibujar cada forma a mano.',
          'Usuarios de ChatGPT, Claude o Claude Code que quieren que un agente edite formas y aceptan que el proveedor de ese agente trate los datos.',
          'Usuarios de Python a quienes les basta el paquete gratuito y una terminal.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**Labelme no encaja bien en algunas situaciones y varios detalles siguen sin verificar.**',
        ],
        items: [
          'No encaja: equipos que necesitan un servidor web de anotación compartido con colas de tareas. Las fuentes describen una herramienta de escritorio para una persona y ningún servidor de colaboración.',
          'No encaja: entornos aislados de la red que no pueden conseguir antes los pesos de los modelos o el paquete sin conexión.',
          'Sin verificar: requisitos de RAM, GPU y disco, y tamaños de descarga de los modelos. No se indica ninguno.',
          'Sin verificar: velocidad de anotación y precisión de los modelos de IA. PromptQuorum no midió ninguna de las dos.',
          'Sin verificar: qué formatos de exportación ofrece la app sin Pro. El README menciona la exportación VOC y COCO entre las funciones de código abierto, mientras que el sitio del fabricante dice que la exportación a YOLO, YOLO-OBB y Pascal VOC pertenece al kit Pro.',
          'Sin verificar: las cifras de la página de inicio (más de 920 licencias de pago y una valoración de 4.9 con 146 reseñas) son afirmaciones del fabricante y no se comprobaron.',
          'Sin verificar: que la conexión con agentes funcione con todos los agentes citados, y cómo se comporta el AppImage de Linux en distribuciones concretas.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Labelme frente a las alternativas',
        itemHeadings: true,
        content: [
          '**Labelme es un anotador de escritorio para una sola persona. PromptQuorum no lo ha comparado en la práctica con las alternativas siguientes.** Sus datos proceden de sus descripciones en GitHub, consultadas el 18 de noviembre de 2026.',
        ],
        columns: [
          'Herramienta',
          'Indicado en las fuentes',
        ],
        rows: [
          {
            Herramienta: 'Labelme',
            'Indicado en las fuentes': 'App de escritorio; paquete GPL-3.0 más app de pago',
          },
          {
            Herramienta: '[CVAT](https://www.cvat.ai)',
            'Indicado en las fuentes': 'MIT; plataforma de anotación de imagen, vídeo, audio y 3D',
          },
          {
            Herramienta: '[Label Studio](https://labelstud.io)',
            'Indicado en las fuentes': 'Apache-2.0; herramienta de etiquetado multitipo',
          },
          {
            Herramienta: '[X-AnyLabeling](https://xanylabeling.com)',
            'Indicado en las fuentes': 'GPL-3.0; app de anotación de escritorio multiplataforma',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué pasa cuando termina el año de actualizaciones?',
            a: 
              'No deja de funcionar nada. Conservas todas las versiones de tu año de actualizaciones y la app comprueba la clave de licencia sin conexión. Según el fabricante, puedes comprar otro año o elegir el plan de por vida.',
          },
          {
            q: '¿Salen mis imágenes de mi equipo?',
            a: 
              'No por la propia app, según la política de privacidad. Los pesos de los modelos se descargan, y un agente de IA que conectes puede enviar los datos a su proveedor salvo que se ejecute en local.',
          },
          {
            q: '¿Puedo usar Labelme sin conexión a internet?',
            a: 
              'Tras descargar los modelos, el fabricante dice que funciona sin conexión. Para equipos aislados de la red, dice que se descarguen primero los modelos en un equipo conectado o que se pida al soporte el paquete sin conexión.',
          },
          {
            q: '¿Qué agentes de IA se pueden conectar?',
            a: 
              'El fabricante cita ChatGPT, Claude, Claude Code, Codex y Cursor, que se conectan desde Archivo y luego Conectar agente de IA, en la app Pro. Según el registro de cambios, tú apruebas cada cambio.',
          },
          {
            q: '¿Es de código abierto la app independiente?',
            a: 
              'No. El código fuente y el paquete de PyPI tienen licencia GPL-3.0, pero la app se distribuye con el acuerdo de licencia del fabricante, que prohíbe la redistribución y la ingeniería inversa.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**Labelme merece una prueba si anotas imágenes para modelos de visión por computador y quieres mantener el trabajo y los modelos de IA en tu propio equipo.**',
          'Tiene una larga trayectoria, con una primera versión en 2016 y un commit en el repositorio el 17 de noviembre de 2026. Ofrece además una vía gratuita de código abierto, borradores de IA sin conexión según el fabricante y salida en JSON sencillo. La app de pago elimina la configuración de Python.',
          'Las contrapartidas son reales. Es una persona en un escritorio, sin funciones de colaboración descritas. Los requisitos de hardware y la velocidad están sin verificar, la descarga exige iniciar sesión y las funciones de agentes pueden pasar datos de imagen a un proveedor en la nube. PromptQuorum no ha probado la app, así que prueba el periodo de prueba o el paquete pip con unas pocas imágenes antes de comprar.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Labelme](https://labelme.io) — descripción del fabricante de la app, los modelos de IA, los agentes y el uso sin conexión, consultado el 18 de noviembre de 2026.',
          '[Página de precios](https://labelme.io/pricing) — planes, precios, prueba, reembolso y condiciones de licencia, consultada el 18 de noviembre de 2026.',
          '[Página de descarga](https://labelme.io/download) — descargas por sistema, versión 7.11.0 y aviso de Windows, consultada el 18 de noviembre de 2026.',
          '[Guía de instalación](https://www.labelme.io/docs/install-labelme-app) — pasos de instalación, inicio de sesión, prueba, descargas de modelos y paquete sin conexión, consultada el 18 de noviembre de 2026.',
          '[Registro de cambios](https://labelme.io/changelog) — función Pro para agentes de IA y herramientas de formas, consultado el 18 de noviembre de 2026.',
          '[Política de privacidad](https://labelme.io/privacy-policy) — flujo de datos, telemetría, agentes y responsable con sede en Japón, consultada el 18 de noviembre de 2026.',
          '[Acuerdo de licencia](https://labelme.io/eula) — alcance de la licencia, restricciones, licencias de modelos y ley aplicable, consultado el 18 de noviembre de 2026.',
          '[Página Acerca de](https://labelme.io/about) — trayectoria del fabricante e historia de código abierto, consultada el 18 de noviembre de 2026.',
          '[Repositorio de Labelme en GitHub](https://github.com/wkentaro/labelme) — descripción del proyecto, licencia GPL-3.0, último commit y README, consultado el 18 de noviembre de 2026.',
          '[Versión v7.11.0](https://github.com/wkentaro/labelme/releases/tag/v7.11.0) — versión y fecha de la última publicación, consultada el 18 de noviembre de 2026.',
          '[Repositorio de CVAT](https://github.com/cvat-ai/cvat), [repositorio de Label Studio](https://github.com/HumanSignal/label-studio) y [repositorio de X-AnyLabeling](https://github.com/CVHub520/X-AnyLabeling) — licencias y descripciones de las alternativas, consultados el 18 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Unsloth](/es/power-local-llm/unsloth-review) — Ajuste fino gratuito para LLM, imágenes y audio, un paso habitual después de preparar los datos.',
          '[Reseña de LLaMA-Factory](/es/power-local-llm/llama-factory-review) — Ajusta más de 100 LLM desde una interfaz web.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/labelme-review-hero-fr.webp',
    title: 'Test de Labelme : annotation d\'images avec modèles d\'IA hors ligne et accès pour agents IA',
    seoTitle: 'Test de Labelme : annotation d\'images, IA hors ligne, MCP',
    intro: 
      'Labelme est un outil de bureau pour dessiner et modifier des annotations sur des images, comme des polygones, des rectangles et des points, afin de préparer des données d\'entraînement pour des modèles de vision par ordinateur. Il existe sous deux formes : un paquet Python open source gratuit et une application autonome payante. L\'éditeur affirme que des modèles d\'IA proposent les formes hors ligne sur votre ordinateur. Ce test s\'appuie sur le site et les politiques de l\'éditeur ainsi que sur le dépôt GitHub et ses versions, consultés le 18 novembre 2026. PromptQuorum n\'a pas testé l\'application.',
    metaDescription: 
      'Labelme annote vos images en local, avec une IA hors ligne (SAM) et un lien MCP pour agents IA. Paquet open source et appli payante : licence, tarifs.',
    twitterDescription: 
      'Labelme annote les images sur votre ordinateur, avec des brouillons d\'IA hors ligne (SAM) et un lien MCP pour agents IA. Paquet open source et appli payante.',
    audience: 
      'Ingénieurs en apprentissage automatique, chercheurs et équipes qui préparent des jeux d\'images pour des modèles de vision par ordinateur',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Labelme',
    targetKeywords: [
      'test Labelme',
      'Labelme annotation d\'images',
      'Labelme SAM3',
      'tarifs Labelme',
      'Labelme MCP',
      'confidentialité Labelme',
    ],
    current_models_mentioned: [],
    leadAnswerBlock: 
      '**Labelme est un outil d\'annotation d\'images pour macOS, Windows et Linux : vous dessinez les formes à la main ou laissez des modèles d\'IA hors ligne (SAM, SAM2, SAM3, YOLO-World) les proposer, et il enregistre de simples fichiers JSON à côté de vos images.** Le code source est open source sous licence GPL-3.0, et une application autonome payante ajoute une connexion aux agents IA et l\'export de jeux de données.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce que Labelme, et à qui s\'adresse-t-il ?',
        answer: 
          'Labelme est un outil de bureau d\'annotation d\'images qui transforme vos images en données d\'entraînement étiquetées, avec des brouillons de formes par IA en option. Il convient à ceux qui préparent des jeux de données pour des modèles de vision par ordinateur et veulent garder leurs images sur leur propre machine.',
        bullets: [
          'Plateformes : macOS (Apple Silicon et Intel), Windows x64, Linux x64.',
          'Deux formes : un paquet open source gratuit (GPL-3.0) et une application autonome payante sous le contrat de licence de l\'éditeur.',
          'Sept outils de formes, des indicateurs et des notes ; la sortie est du JSON simple.',
          'Modèles d\'IA cités par l\'éditeur : SAM, SAM2, SAM3, EfficientSAM et YOLO-World, exécutés sur votre ordinateur.',
          'Connecter un agent IA peut transmettre l\'image ouverte et les données des formes au fournisseur de cet agent.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: 'Points clés',
        anchor: 'tldr',
      },
      {
        label: 'Présentation',
        anchor: 'overview',
      },
      {
        label: 'Comment l\'obtenir',
        anchor: 'get-it',
      },
      {
        label: 'Configuration requise',
        anchor: 'requirements',
      },
      {
        label: 'Fonctionnalités',
        anchor: 'features',
      },
      {
        label: 'Confidentialité et flux de données',
        anchor: 'privacy',
      },
      {
        label: 'Tarifs et licence',
        anchor: 'pricing',
      },
      {
        label: 'Pour qui',
        anchor: 'who-should-use',
      },
      {
        label: 'Ce que nous n\'avons pas pu vérifier',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Alternatives',
        anchor: 'alternatives',
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
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 
              'Labelme est un outil de bureau pour repérer des objets dans des images, à la main ou avec des contours proposés par IA, et enregistrer le résultat en fichiers JSON pour entraîner des modèles de vision par ordinateur.',
          },
          {
            type: 'plain-terms',
            text: 
              'Voyez-le comme un outil de dessin pour dire à un modèle ce qui figure sur une image. Vous cliquez sur un objet, tracez un cadre ou saisissez un mot, l\'IA esquisse le contour, et vous le corrigez.',
          },
        ],
        items: [
          'La version 7.11.0 est la dernière publiée (14 novembre 2026), et le dépôt a reçu un commit le 17 novembre 2026 : aucun avertissement de projet à l\'abandon ne s\'applique.',
          'Le téléchargement de l\'application autonome exige de se connecter avec un compte labelme.io gratuit, et l\'application fonctionne en essai de 3 jours jusqu\'à la saisie d\'une clé de licence.',
          'Le paquet open source ne coûte rien mais demande une installation de Python ; l\'application autonome est un achat unique.',
          'Selon la politique de confidentialité, l\'application ne téléverse aucune de vos images ni annotations ; les poids des modèles se téléchargent à la première utilisation.',
          'PromptQuorum n\'a pas testé l\'application, et les sources n\'indiquent aucun besoin en RAM ou en GPU.',
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**Labelme est un outil graphique d\'annotation d\'images qui enregistre chaque annotation dans un fichier JSON à côté de son image.**',
          'D\'après le site de l\'éditeur, Kentaro Wada a écrit la première version en 2016 alors qu\'il était étudiant à l\'université de Tokyo, et il la maintient toujours. La politique de confidentialité et le contrat de licence désignent Kentaro Wada, exerçant sous le nom Labelme.io, comme exploitant. Le dépôt décrit le projet comme de l\'annotation d\'images avec Python, avec des formes polygone, rectangle, cercle, ligne et point. Son README mentionne aussi des indicateurs d\'image, un exemple d\'annotation vidéo, l\'annotation assistée point vers polygone avec SAM et EfficientSAM, et texte vers annotation avec YOLO-World et SAM3.',
          'La version 7.11.0 est sortie le 14 novembre 2026 et c\'est la dernière version GitHub. La version 7 du paquet pip exige Python 3.12 ou plus récent et utilise PySide6 (Qt6) ; d\'après le README, une branche v6.3.x ne reçoit que des correctifs critiques.',
          'L\'éditeur présente l\'application autonome comme le même Labelme, empaqueté pour que vous évitiez l\'installation de Python, avec l\'accès pour agents IA et l\'export de jeux de données en plus. Ce sont des affirmations de l\'éditeur. PromptQuorum n\'a pas exécuté l\'application et n\'a mesuré ni la vitesse d\'annotation ni la qualité des modèles.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l\'obtenir',
        content: [
          '**Le plus simple est l\'application autonome, un installateur classique pour macOS, Windows ou Linux ; une installation du paquet open source avec pip existe aussi.**',
          'La page de téléchargement propose un .dmg pour les Mac Apple Silicon et Intel, une fiche Microsoft Store, un installateur .msi et un EXE portable pour Windows x64, et un AppImage pour Linux x64. Le guide d\'installation indique que les téléchargements exigent une connexion. Windows peut afficher l\'avertissement « Windows a protégé votre ordinateur » ; l\'éditeur conseille de vérifier que l\'éditeur inclut « Kentaro Wada » et de ne pas désactiver la Sécurité Windows. Le dépôt GitHub ne liste aucun fichier de version (consulté le 18 novembre 2026), les installateurs proviennent donc de labelme.io.',
        ],
        columns: [
          'Plateforme',
          'Comment l\'obtenir',
        ],
        rows: [
          {
            Plateforme: '[macOS](https://labelme.io/download)',
            'Comment l\'obtenir': 'Téléchargez le .dmg (Apple Silicon ou Intel), glissez-le dans Applications',
          },
          {
            Plateforme: '[Windows](https://labelme.io/download)',
            'Comment l\'obtenir': 'Microsoft Store, installateur .msi ou EXE portable',
          },
          {
            Plateforme: '[Linux](https://labelme.io/download)',
            'Comment l\'obtenir': 'AppImage : le rendre exécutable, puis le lancer',
          },
          {
            Plateforme: '[Python](https://github.com/wkentaro/labelme)',
            'Comment l\'obtenir': 'Exécutez pip install labelme dans un terminal (Python 3.12+)',
          },
          {
            Plateforme: 'Site web',
            'Comment l\'obtenir': '[labelme.io](https://labelme.io)',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Comment l\'obtenir': '[labelme.io/privacy-policy](https://labelme.io/privacy-policy)',
          },
        ],
        note: 
          'La voie pip demande un terminal et un environnement Python 3.12 ou plus récent ; l\'application autonome n\'exige ni l\'un ni l\'autre.',
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**L\'éditeur n\'indique aucune exigence de RAM, de GPU ni d\'espace disque pour l\'application.**',
          'Le guide d\'installation précise que Labelme prend en charge les versions de système d\'exploitation dont le support n\'est pas terminé. Les poids des modèles d\'IA se téléchargent à la première utilisation, sans taille de téléchargement indiquée. Selon le même guide, un paquet hors ligne pour SAM3 existe pour les machines sans accès à internet.',
        ],
        columns: [
          'Élément',
          'Chiffre indiqué',
        ],
        rows: [
          {
            'Élément': 'Système d\'exploitation',
            'Chiffre indiqué': 'macOS (Apple Silicon, Intel), Windows 64 bits, Linux 64 bits',
          },
          {
            'Élément': 'RAM',
            'Chiffre indiqué': 'Non indiqué',
          },
          {
            'Élément': 'GPU',
            'Chiffre indiqué': 'Non indiqué',
          },
          {
            'Élément': 'Disque et taille des modèles',
            'Chiffre indiqué': 'Non indiqué ; poids téléchargés à la première utilisation',
          },
          {
            'Élément': 'Python (voie pip)',
            'Chiffre indiqué': '3.12 à 3.14 pour v7.x (README)',
          },
          {
            'Élément': 'Réseau',
            'Chiffre indiqué': 'Nécessaire pour le téléchargement après connexion et les modèles',
          },
        ],
        note: 'La vérification de la licence se fait hors ligne, selon l\'éditeur.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Labelme associe des outils de formes manuels à des brouillons d\'IA et garde chaque résultat modifiable.** Tous les points ci-dessous sont des affirmations de l\'éditeur tirées du site, du journal des modifications et du README.',
        ],
        items: [
          'Sept outils de formes : polygone, rectangle, rectangle orienté, cercle, point, ligne et polyligne.',
          'Brouillons d\'IA : clic vers polygone avec SAM2, cadre vers annotation et texte vers annotation avec SAM3, et YOLO-World pour la détection par texte.',
          'Modèles cités par l\'éditeur : SAM, SAM2, SAM3 et EfficientSAM pour la segmentation, plus YOLO-World.',
          'Indicateurs pour les formes masquées ou tronquées, notes, verrouillage des formes et indicateur pour marquer une image comme vérifiée.',
          'Enregistrement automatique dans un fichier JSON à côté de chaque image, et raccourcis clavier pour passer d\'une image à l\'autre.',
          'Une interface en 21 langues.',
          'Pro uniquement : un serveur MCP permettant à ChatGPT, Claude, Claude Code, Codex ou Cursor de lire, ajouter, sélectionner et supprimer des formes sur l\'image ouverte. Vous approuvez chaque modification, et un seul annuler la révoque.',
          'Pro uniquement : une boîte à outils en ligne de commande pour les jeux de données, avec plus de 10 outils d\'annotation par lots, de revue et d\'export vers YOLO, YOLO-OBB et Pascal VOC. Elle s\'exécute dans un terminal et exige Python.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**Selon sa politique de confidentialité, l\'application ne téléverse aucune de vos images ni annotations, mais plusieurs fonctions utilisent le réseau.**',
          'La politique, mise à jour le 12 novembre 2026, indique que l\'application vérifie la clé de licence hors ligne et ne recherche pas de mises à jour. Elle se connecte en revanche pour télécharger les modèles d\'IA que vous choisissez. Les fichiers viennent d\'un serveur Labelme hébergé chez Cloudflare ou, en secours, de GitHub ou de Hugging Face, qui voient votre adresse IP.',
          'Si vous connectez un agent IA, la politique indique que l\'agent reçoit l\'image ouverte, son chemin de fichier, le chemin du fichier d\'annotations, les étiquettes ainsi que, pour chaque forme, son étiquette, ses points, ses indicateurs et sa description. Le fournisseur de l\'agent régit ces données, tandis qu\'un agent exécuté en local les garde sur votre ordinateur.',
          'La télémétrie de l\'application est facultative. Elle couvre les ouvertures de l\'application, l\'état de l\'essai, les clics sur Acheter, l\'activation de la licence et les erreurs inattendues, part vers PostHog sous un identifiant aléatoire et peut être désactivée depuis le menu de l\'application. Le site utilise Google Analytics et PostHog, et l\'inscription enregistre des informations de provenance. Paddle traite les paiements en tant que marchand officiel. L\'exploitant est établi au Japon, et ses prestataires traitent des données dans d\'autres pays, dont les États-Unis.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Tarifs et licence',
        content: [
          '**Le paquet open source est gratuit sous GPL-3.0, et l\'application autonome est un achat unique sous le contrat de licence de l\'éditeur.**',
        ],
        items: [
          'Paquet open source : gratuit, installé avec pip. L\'éditeur affirme qu\'il offre les mêmes outils d\'annotation et modèles d\'IA que l\'application.',
          'Pro : 79 $ US une seule fois, avec un an de mises à jour ; la version que vous avez continue de fonctionner ensuite. Selon l\'éditeur, il ajoute la connexion aux agents IA, la boîte à outils de jeux de données, un miroir de téléchargement des modèles et l\'assistance par e-mail.',
          'Pro (Lifetime) : 249 $ US une seule fois, avec toutes les mises à jour futures, versions majeures comprises.',
          'Team : 249 $ US par poste à partir de cinq postes réattribuables ; devis sur demande.',
          'Essai et remboursement : 3 jours sans carte bancaire, hors boîte à outils de jeux de données ; remboursement intégral par e-mail dans les 14 jours suivant le paiement.',
        ],
        note: 
          'Les prix sont en dollars américains sur la page de tarifs de l\'éditeur, consultée le 18 novembre 2026, et la TVA peut s\'appliquer. Une licence couvre une personne nommée sur tous ses propres ordinateurs et autorise l\'usage commercial pour un travail d\'annotation interne. Le contrat de licence interdit de revendre, de redistribuer et de décompiler l\'application. Il précise que la GPL-3.0 s\'applique au code source et au paquet PyPI, pas au contrat, et que les modèles d\'IA sont sous licence séparée ; SAM 3 relève de la SAM License de Meta, qui a ses propres restrictions d\'usage. Le droit applicable est japonais, avec les tribunaux de Tokyo et une exception pour les tribunaux du domicile du consommateur.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          '**Labelme convient à ceux qui annotent des images pour des modèles de vision par ordinateur et veulent le faire sur leur propre ordinateur.**',
        ],
        items: [
          'Les praticiens de l\'apprentissage automatique qui veulent garder leurs images hors des serveurs d\'annotation de tiers.',
          'Les annotateurs qui préfèrent corriger des contours proposés par IA plutôt que dessiner chaque forme à la main.',
          'Les utilisateurs de ChatGPT, Claude ou Claude Code qui veulent qu\'un agent modifie les formes et acceptent que le fournisseur de cet agent traite les données.',
          'Les utilisateurs de Python que le paquet gratuit et un terminal ne dérangent pas.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        content: [
          '**Labelme convient mal dans certains cas, et plusieurs points restent non vérifiés.**',
        ],
        items: [
          'Ne convient pas : les équipes qui ont besoin d\'un serveur web d\'annotation partagé avec files de tâches. Les sources décrivent un outil de bureau pour une seule personne et aucun serveur de collaboration.',
          'Ne convient pas : les environnements isolés du réseau qui ne peuvent pas récupérer au préalable les poids des modèles ou le paquet hors ligne.',
          'Non vérifié : les besoins en RAM, GPU et espace disque, et les tailles de téléchargement des modèles. Aucun n\'est indiqué.',
          'Non vérifié : la vitesse d\'annotation et la précision des modèles d\'IA. PromptQuorum n\'a mesuré ni l\'une ni l\'autre.',
          'Non vérifié : les formats d\'export proposés par l\'application sans Pro. Le README cite l\'export VOC et COCO parmi les fonctions open source, alors que le site de l\'éditeur rattache l\'export YOLO, YOLO-OBB et Pascal VOC à la boîte à outils Pro.',
          'Non vérifié : les chiffres de la page d\'accueil (plus de 920 licences payantes et une note de 4,9 sur 146 avis) sont des déclarations de l\'éditeur et n\'ont pas été contrôlés.',
          'Non vérifié : que la connexion aux agents fonctionne avec chaque agent cité, et le comportement de l\'AppImage Linux sur des distributions précises.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Labelme face aux alternatives',
        itemHeadings: true,
        content: [
          '**Labelme est un outil d\'annotation de bureau pour une seule personne. PromptQuorum ne l\'a pas comparé en pratique aux alternatives ci-dessous.** Leurs informations proviennent de leurs descriptions GitHub, consultées le 18 novembre 2026.',
        ],
        columns: [
          'Outil',
          'Noté dans les sources',
        ],
        rows: [
          {
            Outil: 'Labelme',
            'Noté dans les sources': 'Appli de bureau ; paquet GPL-3.0 plus appli payante',
          },
          {
            Outil: '[CVAT](https://www.cvat.ai)',
            'Noté dans les sources': 'MIT ; plateforme d\'annotation image, vidéo, audio, 3D',
          },
          {
            Outil: '[Label Studio](https://labelstud.io)',
            'Noté dans les sources': 'Apache-2.0 ; outil d\'étiquetage multi-types',
          },
          {
            Outil: '[X-AnyLabeling](https://xanylabeling.com)',
            'Noté dans les sources': 'GPL-3.0 ; appli d\'annotation de bureau multiplateforme',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Que se passe-t-il à la fin de l\'année de mises à jour ?',
            a: 
              'Rien ne cesse de fonctionner. Vous gardez chaque version de votre année de mises à jour, et l\'application vérifie la clé de licence hors ligne. Selon l\'éditeur, vous pouvez acheter une année de plus ou choisir l\'offre à vie.',
          },
          {
            q: 'Mes images quittent-elles mon ordinateur ?',
            a: 
              'Pas par l\'application elle-même, selon la politique de confidentialité. Les poids des modèles sont téléchargés, et un agent IA que vous connectez peut envoyer les données à son fournisseur, sauf s\'il s\'exécute en local.',
          },
          {
            q: 'Puis-je utiliser Labelme sans connexion internet ?',
            a: 
              'Une fois les modèles téléchargés, l\'éditeur affirme qu\'il fonctionne hors ligne. Pour les machines isolées du réseau, il conseille de télécharger d\'abord les modèles sur un ordinateur connecté ou de demander le paquet hors ligne à l\'assistance.',
          },
          {
            q: 'Quels agents IA peut-on connecter ?',
            a: 
              'L\'éditeur cite ChatGPT, Claude, Claude Code, Codex et Cursor, connectés depuis Fichier puis Connecter un agent IA, dans l\'application Pro. Selon le journal des modifications, vous approuvez chaque modification.',
          },
          {
            q: 'L\'application autonome est-elle open source ?',
            a: 
              'Non. Le code source et le paquet PyPI sont sous GPL-3.0, mais l\'application est distribuée sous le contrat de licence de l\'éditeur, qui interdit la redistribution et la décompilation.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Labelme mérite un essai si vous annotez des images pour des modèles de vision par ordinateur et voulez garder le travail et les modèles d\'IA sur votre propre machine.**',
          'Il a une longue histoire, avec une première version en 2016 et un commit dans le dépôt le 17 novembre 2026. Il offre aussi une voie open source gratuite, des brouillons d\'IA hors ligne selon l\'éditeur et une sortie JSON simple. L\'application payante supprime l\'installation de Python.',
          'Les compromis sont réels. C\'est une personne sur un poste de bureau, sans fonctions de collaboration décrites. Les besoins matériels et la vitesse ne sont pas vérifiés, le téléchargement exige une connexion, et les fonctions d\'agents peuvent transmettre des données d\'image à un fournisseur cloud. PromptQuorum n\'a pas testé l\'application : essayez l\'essai gratuit ou le paquet pip sur quelques images avant d\'acheter.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Labelme](https://labelme.io) — description par l\'éditeur de l\'application, des modèles d\'IA, des agents et de l\'usage hors ligne, consulté le 18 novembre 2026.',
          '[Page des tarifs](https://labelme.io/pricing) — offres, prix, essai, remboursement et conditions de licence, consultée le 18 novembre 2026.',
          '[Page de téléchargement](https://labelme.io/download) — téléchargements par système, version 7.11.0 et avis Windows, consultée le 18 novembre 2026.',
          '[Guide d\'installation](https://www.labelme.io/docs/install-labelme-app) — étapes d\'installation, connexion, essai, téléchargements de modèles et paquet hors ligne, consulté le 18 novembre 2026.',
          '[Journal des modifications](https://labelme.io/changelog) — fonction Pro pour agents IA et outils de formes, consulté le 18 novembre 2026.',
          '[Politique de confidentialité](https://labelme.io/privacy-policy) — flux de données, télémétrie, agents et exploitant établi au Japon, consultée le 18 novembre 2026.',
          '[Contrat de licence](https://labelme.io/eula) — étendue de la licence, restrictions, licences des modèles et droit applicable, consulté le 18 novembre 2026.',
          '[Page À propos](https://labelme.io/about) — parcours de l\'éditeur et histoire open source, consultée le 18 novembre 2026.',
          '[Dépôt GitHub de Labelme](https://github.com/wkentaro/labelme) — description du projet, licence GPL-3.0, dernier commit et README, consulté le 18 novembre 2026.',
          '[Version v7.11.0](https://github.com/wkentaro/labelme/releases/tag/v7.11.0) — version et date de la dernière publication, consultée le 18 novembre 2026.',
          '[Dépôt de CVAT](https://github.com/cvat-ai/cvat), [dépôt de Label Studio](https://github.com/HumanSignal/label-studio) et [dépôt de X-AnyLabeling](https://github.com/CVHub520/X-AnyLabeling) — licences et descriptions des alternatives, consultés le 18 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test d\'Unsloth](/fr/power-local-llm/unsloth-review) — Fine-tuning gratuit pour LLM, images et audio, une étape fréquente après la préparation des données.',
          '[Test de LLaMA-Factory](/fr/power-local-llm/llama-factory-review) — Ajustez plus de 100 LLM via une interface web.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d\'IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/labelme-review-hero-ja.webp',
    title: 'Labelmeレビュー：オフラインAIモデルとAIエージェント連携を備えた画像アノテーション',
    seoTitle: 'Labelmeレビュー：画像アノテーションとオフラインAI',
    intro: 
      'Labelmeは、画像にポリゴン、矩形、点などのアノテーションを描いて編集し、コンピュータビジョンモデル向けの学習データを用意するデスクトップツールです。無料のオープンソースPythonパッケージと、有料のスタンドアロンアプリの2種類があります。開発元によると、AIモデルがオフラインでお使いのコンピュータ上で図形の下書きを作ります。このレビューは、開発元のサイトとポリシー、GitHubリポジトリとそのリリースをもとに、2026年11月18日に確認した内容です。PromptQuorumはこのアプリを実際には試していません。',
    metaDescription: 'LabelmeはオフラインのSAM AIとAIエージェント向けMCP連携を備えた画像アノテーションツールです。オープンソース版と有料アプリのライセンス、価格、プライバシーを解説します。',
    twitterDescription: 'Labelmeは自分のコンピュータで画像にアノテーションを付けるツール。オフラインのSAMによる下書きとAIエージェント向けMCP連携を備え、オープンソース版と有料アプリがあります。',
    audience: 'コンピュータビジョンモデル向けの画像データセットを用意する機械学習エンジニア、研究者、チーム',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Labelme',
    targetKeywords: [
      'Labelme レビュー',
      'Labelme 画像アノテーション',
      'Labelme SAM3',
      'Labelme 価格',
      'Labelme MCP',
      'Labelme プライバシー',
    ],
    current_models_mentioned: [],
    leadAnswerBlock: 
      '**Labelmeは、macOS、Windows、Linux向けの画像アノテーションツールです。図形を手で描くことも、オフラインのAIモデル（SAM、SAM2、SAM3、YOLO-World）に下書きさせることもでき、結果は画像の横に単純なJSONファイルとして保存されます。** ソースコードはGPL-3.0のオープンソースで、有料のスタンドアロンアプリにはAIエージェント連携とデータセットのエクスポートが加わります。',
    quickAnswerTop: {
      ja: {
        question: 'Labelmeとは何で、どんな人向けですか？',
        answer: 
          'Labelmeは、画像をラベル付きの学習データに変えるデスクトップの画像アノテーションツールで、AIによる図形の下書きも任意で使えます。コンピュータビジョンモデル向けのデータセットを作り、画像を自分のマシンに置いておきたい人に向いています。',
        bullets: [
          'プラットフォーム：macOS（Apple SiliconとIntel）、Windows x64、Linux x64。',
          '2種類：無料のオープンソースパッケージ（GPL-3.0）と、開発元のライセンス契約に基づく有料のスタンドアロンアプリ。',
          '7種類の図形ツール、フラグ、メモ。出力は単純なJSON。',
          '開発元が挙げるAIモデル：SAM、SAM2、SAM3、EfficientSAM、YOLO-World。お使いのコンピュータ上で動作します。',
          'AIエージェントを接続すると、開いている画像と図形データがそのエージェントの提供元に渡ることがあります。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: '重要ポイント',
        anchor: 'tldr',
      },
      {
        label: '概要',
        anchor: 'overview',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: '動作要件',
        anchor: 'requirements',
      },
      {
        label: '機能',
        anchor: 'features',
      },
      {
        label: 'プライバシーとデータの流れ',
        anchor: 'privacy',
      },
      {
        label: '価格とライセンス',
        anchor: 'pricing',
      },
      {
        label: '向いている人',
        anchor: 'who-should-use',
      },
      {
        label: '確認できなかったこと',
        anchor: 'who-should-not-use',
      },
      {
        label: '代替ツール',
        anchor: 'alternatives',
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
            text: 'Labelmeは、画像内の物体を手作業またはAIの下書きでマークし、コンピュータビジョンモデルの学習用JSONファイルとして保存するデスクトップツールです。',
          },
          {
            type: 'plain-terms',
            text: '画像に何が写っているかをモデルに教えるための描画ツールだと考えてください。物体をクリックするか、枠をドラッグするか、単語を入力するとAIが輪郭を描き、それを人が修正します。',
          },
        ],
        items: [
          'バージョン7.11.0が最新リリース（2026年11月14日）で、リポジトリには2026年11月17日にコミットがあるため、放置プロジェクトの警告は該当しません。',
          'スタンドアロンアプリのダウンロードには無料のlabelme.ioアカウントでのサインインが必要で、ライセンスキーを入力するまで3日間の試用として動作します。',
          'オープンソースパッケージは無料ですがPythonの環境構築が必要で、スタンドアロンアプリは買い切りです。',
          'プライバシーポリシーによると、アプリは画像もアノテーションもアップロードしません。モデルの重みは初回利用時にダウンロードされます。',
          'PromptQuorumはアプリを試しておらず、情報源にRAMやGPUの要件の記載はありません。',
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**Labelmeは、各アノテーションを画像の横にJSONファイルとして保存するグラフィカルな画像アノテーションツールです。**',
          '開発元のサイトによると、Kentaro Wada氏は2016年に東京大学の学生として最初のバージョンを書き、今も保守しています。プライバシーポリシーとライセンス契約は、Labelme.ioの名で事業を行うKentaro Wada氏を運営者としています。リポジトリはこのプロジェクトをPythonによる画像アノテーションと説明し、ポリゴン、矩形、円、線、点の図形に対応するとしています。READMEには、画像フラグ、動画アノテーションの例、SAMとEfficientSAMによる点からポリゴンへのAI支援アノテーション、YOLO-WorldとSAM3によるテキストからのアノテーションも挙げられています。',
          'バージョン7.11.0は2026年11月14日にリリースされ、GitHubの最新リリースです。pipパッケージのバージョン7にはPython 3.12以降が必要で、PySide6（Qt6）を使います。READMEによると、v6.3.xの系統には重大な修正だけが提供されます。',
          '開発元は、スタンドアロンアプリを「Python環境の構築を省けるようにパッケージ化した同じLabelme」に、AIエージェント連携とデータセットのエクスポートを加えたものと位置づけています。これらは開発元の説明です。PromptQuorumはアプリを実行しておらず、アノテーション速度もモデル品質も測定していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**最も簡単なのは、macOS、Windows、Linux向けの通常のインストーラーで入れるスタンドアロンアプリです。オープンソースパッケージをpipでインストールする方法もあります。**',
          'ダウンロードページには、Apple SiliconとIntel Mac向けの.dmg、Microsoft Storeのページ、Windows x64向けの.msiインストーラーとポータブルEXE、Linux x64向けのAppImageが並んでいます。インストールガイドは、ダウンロードにサインインが必要としています。Windowsでは「WindowsによってPCが保護されました」という警告が出ることがあり、開発元は発行元に「Kentaro Wada」が含まれることを確認し、Windowsセキュリティは無効にしないよう案内しています。GitHubリポジトリにはリリースアセットが一覧されていない（2026年11月18日確認）ため、インストーラーはlabelme.ioから提供されます。',
        ],
        columns: [
          'プラットフォーム',
          '入手方法',
        ],
        rows: [
          {
            'プラットフォーム': '[macOS](https://labelme.io/download)',
            '入手方法': '.dmg（Apple SiliconまたはIntel）をダウンロードし、アプリケーションに移動',
          },
          {
            'プラットフォーム': '[Windows](https://labelme.io/download)',
            '入手方法': 'Microsoft Store、.msiインストーラー、またはポータブルEXE',
          },
          {
            'プラットフォーム': '[Linux](https://labelme.io/download)',
            '入手方法': 'AppImage：実行権限を付けて起動',
          },
          {
            'プラットフォーム': '[Python](https://github.com/wkentaro/labelme)',
            '入手方法': 'ターミナルでpip install labelme（Python 3.12以降）',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手方法': '[labelme.io](https://labelme.io)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手方法': '[labelme.io/privacy-policy](https://labelme.io/privacy-policy)',
          },
        ],
        note: 'pipの方法にはターミナルとPython 3.12以降の環境が必要です。スタンドアロンアプリはどちらも不要です。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**開発元は、アプリのRAM、GPU、ディスク容量の要件を示していません。**',
          'インストールガイドは、サポートが終了していないバージョンのOSに対応するとしています。AIモデルの重みは初回利用時にダウンロードされ、ダウンロードサイズは記載されていません。同じガイドによると、インターネットに接続できないマシン向けにSAM3のオフラインパックが用意されています。',
        ],
        columns: [
          '項目',
          '記載されている数値',
        ],
        rows: [
          {
            '項目': 'OS',
            '記載されている数値': 'macOS（Apple Silicon、Intel）、Windows 64ビット、Linux 64ビット',
          },
          {
            '項目': 'RAM',
            '記載されている数値': '記載なし',
          },
          {
            '項目': 'GPU',
            '記載されている数値': '記載なし',
          },
          {
            '項目': 'ディスクとモデルサイズ',
            '記載されている数値': '記載なし。重みは初回利用時にダウンロード',
          },
          {
            '項目': 'Python（pip利用時）',
            '記載されている数値': 'v7.xは3.12〜3.14（README）',
          },
          {
            '項目': 'ネットワーク',
            '記載されている数値': 'サインイン後のダウンロードとモデル取得に必要',
          },
        ],
        note: 'ライセンスの確認自体はオフラインで行われると開発元は説明しています。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**Labelmeは、手動の図形ツールとAIによる下書きを組み合わせ、どの結果も編集可能なままにします。** 以下はすべて、サイト、変更履歴、READMEにある開発元の説明です。',
        ],
        items: [
          '7種類の図形ツール：ポリゴン、矩形、回転矩形、円、点、線、折れ線。',
          'AIによる下書き：SAM2でクリックからポリゴン、SAM3で枠からのアノテーションとテキストからのアノテーション、YOLO-Worldでテキスト指定の検出。',
          '開発元が挙げるモデル：セグメンテーション用のSAM、SAM2、SAM3、EfficientSAMと、YOLO-World。',
          '隠れた図形や途切れた図形のフラグ、メモ、図形のロック、画像を確認済みにするフラグ。',
          '画像ごとに隣のJSONファイルへ自動保存。キーボードショートカットで画像を移動できます。',
          '21言語のインターフェース。',
          'Proのみ：ChatGPT、Claude、Claude Code、Codex、Cursorが開いている画像の図形を読み取り、追加、選択、削除できるMCPサーバー。変更は1件ずつ承認し、元に戻す操作は1回で済みます。',
          'Proのみ：バッチのアノテーション、レビュー、YOLO、YOLO-OBB、Pascal VOCへのエクスポートを行う10種類以上のツールを含むコマンドラインのデータセットツールキット。ターミナルで動作し、Pythonが必要です。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**プライバシーポリシーによると、アプリは画像もアノテーションもアップロードしませんが、複数の機能がネットワークを使います。**',
          '2026年11月12日に更新されたポリシーは、アプリがライセンスキーをオフラインで確認し、アップデートの確認は行わないとしています。一方、選択したAIモデルのダウンロードのためにはオンラインに接続します。ファイルはCloudflare上のLabelmeサーバーから、代替としてGitHubまたはHugging Faceから取得され、これらはお使いのIPアドレスを確認できます。',
          'AIエージェントを接続すると、エージェントは開いている画像、そのファイルパス、アノテーションファイルのパス、ラベル、そして各図形のラベル、点、フラグ、説明を受け取るとポリシーは述べています。そのデータはエージェントの提供元の方針に従い、ローカルで動くエージェントなら手元のコンピュータにとどまります。',
          'アプリのテレメトリーは任意です。アプリの起動、試用状態、購入ボタンのクリック、ライセンス認証、予期しないエラーが対象で、ランダムなIDでPostHogに送られ、アプリのメニューから止められます。サイトはGoogle AnalyticsとPostHogを使い、登録時には流入元の情報が保存されます。決済はPaddleが販売代行業者として処理します。運営者は日本を拠点とし、委託先は米国を含む他の国でもデータを処理します。',
        ],
      },
      pricing: {
        id: 'pricing',
        title: '価格とライセンス',
        content: [
          '**オープンソースパッケージはGPL-3.0で無料、スタンドアロンアプリは開発元のライセンス契約に基づく買い切りです。**',
        ],
        items: [
          'オープンソースパッケージ：無料でpipからインストール。開発元によると、アノテーションツールとAIモデルはアプリと同じです。',
          'Pro：一度きり79米ドルで、1年分のアップデートを含みます。その後も手元のバージョンは使い続けられます。開発元によると、AIエージェント連携、データセットツールキット、モデルのダウンロード用ミラー、メールサポートが加わります。',
          'Pro（Lifetime）：一度きり249米ドルで、メジャーリリースを含む今後のすべてのアップデートが付きます。',
          'Team：5席以上で1席249米ドル。席は再割り当てでき、見積もりは依頼に応じます。',
          '試用と返金：クレジットカード不要の3日間（データセットツールキットを除く）。支払いから14日以内にメールで依頼すれば全額返金。',
        ],
        note: 
          '価格は開発元の価格ページに米ドルで記載されたもので、2026年11月18日に確認しました。付加価値税がかかる場合があります。1つのライセンスは、記名された1人が自分のすべてのコンピュータで使え、社内のアノテーション作業での商用利用を認めています。ライセンス契約は、アプリの再販、再配布、リバースエンジニアリングを禁じています。GPL-3.0はソースコードとPyPIパッケージに適用され、この契約には適用されないこと、AIモデルは別にライセンスされることが記されており、SAM 3はMetaのSAM Licenseの下にあり、独自の利用制限があります。準拠法は日本法で、東京の裁判所を管轄とし、消費者の居住国の裁判所への例外があります。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**Labelmeは、コンピュータビジョンモデル用に画像をアノテーションし、それを自分のコンピュータで行いたい人に向いています。**',
        ],
        items: [
          '画像を第三者のアノテーションサーバーに置きたくない機械学習の実務者。',
          'すべての図形を手で描くより、AIが下書きした輪郭を修正したいアノテーション担当者。',
          'ChatGPT、Claude、Claude Codeのエージェントに図形を編集させたく、そのエージェントの提供元がデータを扱うことを受け入れられる人。',
          '無料のパッケージとターミナルで十分なPythonユーザー。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**Labelmeが合わない場面もあり、いくつかの点は未確認のままです。**',
        ],
        items: [
          '向かない：タスクキューを備えた共有のWebアノテーションサーバーが必要なチーム。情報源が説明しているのは1人用のデスクトップツールで、共同作業用サーバーの記載はありません。',
          '向かない：事前にモデルの重みやオフラインパックを入手できない、ネットワークから隔離された環境。',
          '未確認：RAM、GPU、ディスク容量の要件とモデルのダウンロードサイズ。いずれも記載がありません。',
          '未確認：アノテーションの速度とAIモデルの精度。PromptQuorumはどちらも測定していません。',
          '未確認：Proなしでアプリが提供するエクスポート形式。READMEはオープンソースの機能にVOCとCOCOのエクスポートを挙げていますが、開発元のサイトはYOLO、YOLO-OBB、Pascal VOCのエクスポートをProツールキットのものとしています。',
          '未確認：トップページの数字（920件超の有料ライセンス、146件のレビューで評価4.9）は開発元自身の発表で、確認していません。',
          '未確認：挙げられているすべてのエージェントでエージェント連携が動作するか、また特定のLinuxディストリビューションでAppImageがどう動くか。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Labelmeと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**Labelmeは1人用のデスクトップ型アノテーションツールです。PromptQuorumは、以下の代替ツールと実際に比較してはいません。** その内容は各GitHubの説明文によるもので、2026年11月18日に確認しました。',
        ],
        columns: [
          'ツール',
          '情報源での記載',
        ],
        rows: [
          {
            'ツール': 'Labelme',
            '情報源での記載': 'デスクトップアプリ。GPL-3.0パッケージと有料アプリ',
          },
          {
            'ツール': '[CVAT](https://www.cvat.ai)',
            '情報源での記載': 'MIT。画像・動画・音声・3Dのアノテーション基盤',
          },
          {
            'ツール': '[Label Studio](https://labelstud.io)',
            '情報源での記載': 'Apache-2.0。多種類のデータ向けラベリングツール',
          },
          {
            'ツール': '[X-AnyLabeling](https://xanylabeling.com)',
            '情報源での記載': 'GPL-3.0。クロスプラットフォームのデスクトップアプリ',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'アップデート期間の1年が終わるとどうなりますか？',
            a: 
              '使えなくなることはありません。アップデート期間中のリリースはすべて使い続けられ、アプリはライセンスキーをオフラインで確認します。開発元によると、もう1年分を購入するか、買い切りのLifetimeプランを選べます。',
          },
          {
            q: '画像はコンピュータの外に出ますか？',
            a: 'プライバシーポリシーによると、アプリ自体からは出ません。モデルの重みはダウンロードされ、接続したAIエージェントは、ローカルで動作しない限り、データを提供元に送ることがあります。',
          },
          {
            q: 'インターネット接続なしでLabelmeを使えますか？',
            a: 
              'モデルをダウンロードした後はオフラインで動作すると開発元は述べています。隔離された環境のマシンでは、接続できるコンピュータで先にモデルをダウンロードするか、サポートにオフラインパックを依頼するよう案内しています。',
          },
          {
            q: 'どのAIエージェントを接続できますか？',
            a: 
              '開発元はChatGPT、Claude、Claude Code、Codex、Cursorを挙げており、Proアプリの［ファイル］から［AIエージェントを接続］で接続します。変更履歴によると、変更は1件ずつ承認します。',
          },
          {
            q: 'スタンドアロンアプリはオープンソースですか？',
            a: 'いいえ。ソースコードとPyPIパッケージはGPL-3.0ですが、アプリは開発元のライセンス契約の下で配布され、再配布とリバースエンジニアリングが禁じられています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**Labelmeは、コンピュータビジョンモデル用に画像をアノテーションし、作業とAIモデルを自分のマシンにとどめたい人なら試す価値があります。**',
          '2016年に最初のバージョンが出た長い実績があり、リポジトリには2026年11月17日のコミットがあります。無料のオープンソースの入り口があり、開発元によればAIによる下書きはオフラインで動き、出力は単純なJSONです。有料アプリはPythonの環境構築を不要にします。',
          'トレードオフは現実的です。1人が1台のデスクトップで使うツールで、共同作業の機能は説明されていません。ハードウェア要件と速度は未確認で、ダウンロードにはサインインが必要、エージェント機能は画像データをクラウドの提供元に渡すことがあります。PromptQuorumはアプリを試していないため、購入前にトライアルかpipパッケージを数枚の画像で試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Labelme公式サイト](https://labelme.io) — 開発元によるアプリ、AIモデル、エージェント、オフライン利用の説明。2026年11月18日に確認。',
          '[価格ページ](https://labelme.io/pricing) — プラン、価格、試用、返金、ライセンス条件。2026年11月18日に確認。',
          '[ダウンロードページ](https://labelme.io/download) — OS別のダウンロード、バージョン7.11.0、Windowsの注意書き。2026年11月18日に確認。',
          '[インストールガイド](https://www.labelme.io/docs/install-labelme-app) — インストール手順、サインイン、試用、モデルのダウンロード、オフラインパック。2026年11月18日に確認。',
          '[変更履歴](https://labelme.io/changelog) — ProのAIエージェント機能と図形ツール。2026年11月18日に確認。',
          '[プライバシーポリシー](https://labelme.io/privacy-policy) — データの流れ、テレメトリー、エージェント、日本を拠点とする運営者。2026年11月18日に確認。',
          '[ライセンス契約](https://labelme.io/eula) — ライセンスの範囲、制限、モデルのライセンス、準拠法。2026年11月18日に確認。',
          '[About ページ](https://labelme.io/about) — 開発者の経歴とオープンソースの歴史。2026年11月18日に確認。',
          '[LabelmeのGitHubリポジトリ](https://github.com/wkentaro/labelme) — プロジェクトの説明、GPL-3.0ライセンス、最新コミット、README。2026年11月18日に確認。',
          '[リリースv7.11.0](https://github.com/wkentaro/labelme/releases/tag/v7.11.0) — 最新リリースのバージョンと日付。2026年11月18日に確認。',
          '[CVATのリポジトリ](https://github.com/cvat-ai/cvat)、[Label Studioのリポジトリ](https://github.com/HumanSignal/label-studio)、[X-AnyLabelingのリポジトリ](https://github.com/CVHub520/X-AnyLabeling) — 代替ツールのライセンスと説明。2026年11月18日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Unslothレビュー](/ja/power-local-llm/unsloth-review) — LLM、画像、音声向けの無料ファインチューニング。データ準備の次の段階として一般的です。',
          '[LLaMA-Factoryレビュー](/ja/power-local-llm/llama-factory-review) — 100以上のLLMをWeb UIでファインチューニング。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/labelme-review-hero-pt.webp',
    title: 'Análise do Labelme: anotação de imagens com modelos de IA offline e acesso para agentes de IA',
    seoTitle: 'Análise do Labelme: anotação de imagens, IA offline, MCP',
    intro: 
      'O Labelme é uma ferramenta de desktop para desenhar e editar anotações em imagens, como polígonos, retângulos e pontos, a fim de preparar dados de treinamento para modelos de visão computacional. Ele existe em duas formas: um pacote Python de código aberto e gratuito e um app independente pago. O fabricante diz que modelos de IA rascunham as formas offline no seu computador. Esta análise se baseia no site e nas políticas do fabricante e no repositório do GitHub e suas versões, consultados em 18 de novembro de 2026. A PromptQuorum não testou o app na prática.',
    metaDescription: 
      'O Labelme anota imagens no seu computador, com IA offline (SAM) e conexão MCP para agentes de IA. Pacote aberto e app pago: licença, preços e privacidade.',
    twitterDescription: 
      'O Labelme anota imagens no seu próprio computador, com rascunhos de IA offline (SAM) e conexão MCP para agentes. Pacote aberto mais app pago.',
    audience: 
      'Engenheiros de aprendizado de máquina, pesquisadores e equipes que preparam conjuntos de imagens para modelos de visão computacional',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Labelme',
    targetKeywords: [
      'análise do Labelme',
      'Labelme anotação de imagens',
      'Labelme SAM3',
      'preços do Labelme',
      'Labelme MCP',
      'privacidade do Labelme',
    ],
    current_models_mentioned: [],
    leadAnswerBlock: 
      '**O Labelme é uma ferramenta de anotação de imagens para macOS, Windows e Linux que permite desenhar formas à mão ou pedir a modelos de IA offline (SAM, SAM2, SAM3, YOLO-World) que as rascunhem, e salva arquivos JSON simples ao lado das suas imagens.** O código-fonte é aberto sob a licença GPL-3.0, e um app independente pago acrescenta uma conexão com agentes de IA e a exportação de conjuntos de dados.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o Labelme e para quem ele serve?',
        answer: 
          'O Labelme é uma ferramenta de desktop de anotação de imagens que transforma suas imagens em dados de treinamento rotulados, com rascunhos opcionais das formas feitos por IA. Serve para quem prepara conjuntos de dados para modelos de visão computacional e quer manter as imagens na própria máquina.',
        bullets: [
          'Plataformas: macOS (Apple Silicon e Intel), Windows x64, Linux x64.',
          'Duas formas: um pacote de código aberto gratuito (GPL-3.0) e um app independente pago sob o contrato de licença do fabricante.',
          'Sete ferramentas de formas, marcações e notas; a saída é JSON simples.',
          'Modelos de IA citados pelo fabricante: SAM, SAM2, SAM3, EfficientSAM e YOLO-World, executados no seu computador.',
          'Ao conectar um agente de IA, a imagem aberta e os dados das formas podem ir para o provedor desse agente.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: 'Pontos principais',
        anchor: 'tldr',
      },
      {
        label: 'Visão geral',
        anchor: 'overview',
      },
      {
        label: 'Como obter',
        anchor: 'get-it',
      },
      {
        label: 'Requisitos',
        anchor: 'requirements',
      },
      {
        label: 'Recursos',
        anchor: 'features',
      },
      {
        label: 'Privacidade e fluxo de dados',
        anchor: 'privacy',
      },
      {
        label: 'Preços e licença',
        anchor: 'pricing',
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
        label: 'Alternativas',
        anchor: 'alternatives',
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
              'O Labelme é uma ferramenta de desktop para marcar objetos em imagens, à mão ou com contornos rascunhados por IA, e salvar o resultado como arquivos JSON para treinar modelos de visão computacional.',
          },
          {
            type: 'plain-terms',
            text: 
              'Pense nele como uma ferramenta de desenho para dizer a um modelo o que há em uma imagem. Você clica em um objeto, arrasta uma caixa ou digita uma palavra, a IA esboça o contorno e você o corrige.',
          },
        ],
        items: [
          'A versão 7.11.0 é a mais recente (14 de novembro de 2026) e o repositório teve um commit em 17 de novembro de 2026, então não se aplica nenhum aviso de projeto abandonado.',
          'Baixar o app independente exige entrar com uma conta gratuita do labelme.io, e o app funciona como teste de 3 dias até você digitar uma chave de licença.',
          'O pacote de código aberto não custa nada, mas exige uma configuração de Python; o app independente é uma compra única.',
          'Segundo a política de privacidade, o app não envia nenhuma das suas imagens nem anotações; os pesos dos modelos são baixados no primeiro uso.',
          'A PromptQuorum não testou o app, e as fontes não indicam requisitos de RAM nem de GPU.',
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O Labelme é uma ferramenta gráfica de anotação de imagens que salva cada anotação como um arquivo JSON ao lado da imagem.**',
          'Segundo o site do fabricante, Kentaro Wada escreveu a primeira versão em 2016, quando era estudante na Universidade de Tóquio, e ainda a mantém. A política de privacidade e o contrato de licença apontam Kentaro Wada, atuando sob o nome Labelme.io, como operador. O repositório descreve o projeto como anotação de imagens com Python, com formas de polígono, retângulo, círculo, linha e ponto. O README também cita marcações de imagem, um exemplo de anotação de vídeo, anotação assistida de ponto para polígono com SAM e EfficientSAM e de texto para anotação com YOLO-World e SAM3.',
          'A versão 7.11.0 foi lançada em 14 de novembro de 2026 e é a versão mais recente do GitHub. A versão 7 do pacote pip exige Python 3.12 ou mais recente e usa PySide6 (Qt6); segundo o README, a linha v6.3.x recebe apenas correções críticas.',
          'O fabricante apresenta o app independente como o mesmo Labelme, empacotado para você pular a configuração do Python, com acesso para agentes de IA e exportação de conjuntos de dados acrescentados. Essas são afirmações do fabricante. A PromptQuorum não executou o app e não mediu a velocidade de anotação nem a qualidade dos modelos.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O caminho mais fácil é o app independente, um instalador comum para macOS, Windows ou Linux; também existe a instalação do pacote de código aberto com pip.**',
          'A página de download lista um .dmg para Macs com Apple Silicon e Intel, uma página na Microsoft Store, um instalador .msi e um EXE portátil para Windows x64 e um AppImage para Linux x64. O guia de instalação indica que os downloads exigem login. O Windows pode exibir o aviso «O Windows protegeu o computador»; o fabricante orienta conferir se o editor inclui «Kentaro Wada» e não desativar a Segurança do Windows. O repositório do GitHub não lista arquivos de versão (consultado em 18 de novembro de 2026), então os instaladores vêm do labelme.io.',
        ],
        columns: [
          'Plataforma',
          'Como obter',
        ],
        rows: [
          {
            Plataforma: '[macOS](https://labelme.io/download)',
            'Como obter': 'Baixe o .dmg (Apple Silicon ou Intel) e mova para Aplicativos',
          },
          {
            Plataforma: '[Windows](https://labelme.io/download)',
            'Como obter': 'Microsoft Store, instalador .msi ou EXE portátil',
          },
          {
            Plataforma: '[Linux](https://labelme.io/download)',
            'Como obter': 'AppImage: torne executável e execute',
          },
          {
            Plataforma: '[Python](https://github.com/wkentaro/labelme)',
            'Como obter': 'Execute pip install labelme no terminal (Python 3.12+)',
          },
          {
            Plataforma: 'Site',
            'Como obter': '[labelme.io](https://labelme.io)',
          },
          {
            Plataforma: 'Política de privacidade',
            'Como obter': '[labelme.io/privacy-policy](https://labelme.io/privacy-policy)',
          },
        ],
        note: 
          'O caminho pip exige um terminal e um ambiente Python 3.12 ou mais recente; o app independente não exige nenhum dos dois.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**O fabricante não informa requisitos de RAM, GPU nem disco para o app.**',
          'O guia de instalação diz que o Labelme oferece suporte a versões de sistema operacional que não chegaram ao fim do suporte. Os pesos dos modelos de IA são baixados no primeiro uso, sem tamanhos de download informados. Segundo o mesmo guia, há um pacote offline do SAM3 para máquinas sem acesso à internet.',
        ],
        columns: [
          'Item',
          'Valor informado',
        ],
        rows: [
          {
            Item: 'Sistema operacional',
            'Valor informado': 'macOS (Apple Silicon, Intel), Windows 64 bits, Linux 64 bits',
          },
          {
            Item: 'RAM',
            'Valor informado': 'Não informado',
          },
          {
            Item: 'GPU',
            'Valor informado': 'Não informado',
          },
          {
            Item: 'Disco e tamanho dos modelos',
            'Valor informado': 'Não informado; pesos baixados no primeiro uso',
          },
          {
            Item: 'Python (via pip)',
            'Valor informado': '3.12 a 3.14 para v7.x (README)',
          },
          {
            Item: 'Rede',
            'Valor informado': 'Necessária para o download após login e para os modelos',
          },
        ],
        note: 'A verificação da licença em si é feita offline, segundo o fabricante.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O Labelme combina ferramentas manuais de formas com rascunhos de IA e mantém cada resultado editável.** Todos os itens abaixo são afirmações do fabricante tiradas do site, do registro de alterações e do README.',
        ],
        items: [
          'Sete ferramentas de formas: polígono, retângulo, retângulo orientado, círculo, ponto, linha e polilinha.',
          'Rascunhos de IA: clique para polígono com o SAM2, caixa para anotação e texto para anotação com o SAM3, e o YOLO-World para detecção por texto.',
          'Modelos citados pelo fabricante: SAM, SAM2, SAM3 e EfficientSAM para segmentação, além do YOLO-World.',
          'Marcações para formas ocultas ou cortadas, notas, bloqueio de formas e uma marcação para indicar que uma imagem foi conferida.',
          'Salvamento automático em um arquivo JSON ao lado de cada imagem e atalhos de teclado para passar de uma imagem para outra.',
          'Uma interface em 21 idiomas.',
          'Somente Pro: um servidor MCP para que ChatGPT, Claude, Claude Code, Codex ou Cursor possam ler, adicionar, selecionar e excluir formas na imagem aberta. Você aprova cada alteração, e um único desfazer a reverte.',
          'Somente Pro: um kit de ferramentas de linha de comando para conjuntos de dados, com mais de 10 ferramentas para anotação em lote, revisão e exportação para YOLO, YOLO-OBB e Pascal VOC. Ele roda no terminal e exige Python.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**Segundo a política de privacidade, o app não envia nenhuma das suas imagens nem anotações, mas vários recursos usam a rede.**',
          'A política, atualizada pela última vez em 12 de novembro de 2026, diz que o app verifica a chave de licença offline e não procura atualizações. Ele se conecta, porém, para baixar os modelos de IA que você escolher. Os arquivos vêm de um servidor do Labelme hospedado na Cloudflare ou, como alternativa, do GitHub ou do Hugging Face, que veem o seu endereço IP.',
          'Se você conectar um agente de IA, a política diz que o agente recebe a imagem aberta, o caminho do arquivo, o caminho do arquivo de anotações, os rótulos e, de cada forma, o rótulo, os pontos, as marcações e a descrição. O provedor do agente rege esses dados, enquanto um agente que roda localmente os mantém no seu computador.',
          'A telemetria do aplicativo é opcional. Ela abrange aberturas do app, status do teste, cliques em Comprar, ativação da licença e erros inesperados, vai para o PostHog com um identificador aleatório e pode ser desligada no menu do app. O site usa Google Analytics e PostHog, e o cadastro guarda dados de origem. A Paddle processa os pagamentos como comerciante de registro. O operador está sediado no Japão, e seus provedores tratam dados em outros países, incluindo os Estados Unidos.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Preços e licença',
        content: [
          '**O pacote de código aberto é gratuito sob a GPL-3.0, e o app independente é uma compra única sob o contrato de licença do fabricante.**',
        ],
        items: [
          'Pacote de código aberto: gratuito, instalado com pip. O fabricante diz que ele tem as mesmas ferramentas de anotação e modelos de IA que o app.',
          'Pro: US$ 79 uma única vez, com um ano de atualizações; a versão que você tem continua funcionando depois. Segundo o fabricante, ele acrescenta a conexão com agentes de IA, o kit de ferramentas de conjuntos de dados, um espelho para download de modelos e suporte por e-mail.',
          'Pro (Lifetime): US$ 249 uma única vez, com todas as atualizações futuras, incluindo versões principais.',
          'Team: US$ 249 por assento, a partir de cinco assentos que podem ser reatribuídos; orçamentos sob consulta.',
          'Teste e reembolso: 3 dias sem cartão de crédito, sem o kit de ferramentas de conjuntos de dados; reembolso integral por e-mail em até 14 dias após o pagamento.',
        ],
        note: 
          'Os preços estão em dólares americanos na página de preços do fabricante, consultada em 18 de novembro de 2026, e pode incidir imposto. Uma licença cobre uma pessoa nomeada em todos os seus próprios computadores e permite uso comercial em trabalho interno de anotação. O contrato de licença proíbe revender, redistribuir e fazer engenharia reversa do app. Ele diz que a GPL-3.0 se aplica ao código-fonte e ao pacote do PyPI, não ao contrato, e que os modelos de IA têm licença separada; o SAM 3 fica sob a SAM License da Meta, com restrições de uso próprias. A lei aplicável é a japonesa, com foro em Tóquio e uma exceção para os tribunais do domicílio do consumidor.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O Labelme serve para quem anota imagens para modelos de visão computacional e quer fazer isso no próprio computador.**',
        ],
        items: [
          'Profissionais de aprendizado de máquina que querem manter as imagens longe de servidores de anotação de terceiros.',
          'Anotadores que preferem corrigir contornos rascunhados por IA a desenhar cada forma à mão.',
          'Usuários de ChatGPT, Claude ou Claude Code que querem que um agente edite formas e aceitam que o provedor desse agente trate os dados.',
          'Usuários de Python para quem o pacote gratuito e um terminal bastam.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O Labelme encaixa mal em algumas situações, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: equipes que precisam de um servidor web de anotação compartilhado, com filas de tarefas. As fontes descrevem uma ferramenta de desktop para uma pessoa e nenhum servidor de colaboração.',
          'Não serve: ambientes isolados da rede que não conseguem obter antes os pesos dos modelos ou o pacote offline.',
          'Não verificado: requisitos de RAM, GPU e disco e tamanhos de download dos modelos. Nenhum é informado.',
          'Não verificado: velocidade de anotação e precisão dos modelos de IA. A PromptQuorum não mediu nenhuma das duas.',
          'Não verificado: quais formatos de exportação o app oferece sem o Pro. O README lista a exportação VOC e COCO entre os recursos de código aberto, enquanto o site do fabricante diz que a exportação para YOLO, YOLO-OBB e Pascal VOC pertence ao kit Pro.',
          'Não verificado: os números da página inicial (mais de 920 licenças pagas e nota 4,9 em 146 avaliações) são declarações do fabricante e não foram conferidos.',
          'Não verificado: se a conexão com agentes funciona com todos os agentes citados e como o AppImage do Linux se comporta em distribuições específicas.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Labelme versus alternativas',
        itemHeadings: true,
        content: [
          '**O Labelme é um anotador de desktop para uma pessoa. A PromptQuorum não o comparou na prática com as alternativas abaixo.** Os dados delas vêm das descrições no GitHub, consultadas em 18 de novembro de 2026.',
        ],
        columns: [
          'Ferramenta',
          'Registrado nas fontes',
        ],
        rows: [
          {
            Ferramenta: 'Labelme',
            'Registrado nas fontes': 'App de desktop; pacote GPL-3.0 mais app pago',
          },
          {
            Ferramenta: '[CVAT](https://www.cvat.ai)',
            'Registrado nas fontes': 'MIT; plataforma de anotação de imagem, vídeo, áudio e 3D',
          },
          {
            Ferramenta: '[Label Studio](https://labelstud.io)',
            'Registrado nas fontes': 'Apache-2.0; ferramenta de rotulagem de vários tipos',
          },
          {
            Ferramenta: '[X-AnyLabeling](https://xanylabeling.com)',
            'Registrado nas fontes': 'GPL-3.0; app de anotação de desktop multiplataforma',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que acontece quando termina o ano de atualizações?',
            a: 
              'Nada deixa de funcionar. Você mantém todas as versões do seu ano de atualizações, e o app verifica a chave de licença offline. Segundo o fabricante, você pode comprar mais um ano ou escolher o plano vitalício.',
          },
          {
            q: 'Minhas imagens saem do meu computador?',
            a: 
              'Não pelo app em si, segundo a política de privacidade. Os pesos dos modelos são baixados, e um agente de IA que você conectar pode enviar os dados ao seu provedor, a menos que rode localmente.',
          },
          {
            q: 'Posso usar o Labelme sem conexão com a internet?',
            a: 
              'Depois de baixar os modelos, o fabricante diz que ele funciona offline. Para máquinas isoladas da rede, orienta baixar os modelos antes em um computador conectado ou pedir o pacote offline ao suporte.',
          },
          {
            q: 'Quais agentes de IA podem se conectar?',
            a: 
              'O fabricante cita ChatGPT, Claude, Claude Code, Codex e Cursor, conectados em Arquivo e depois Conectar agente de IA, no app Pro. Segundo o registro de alterações, você aprova cada alteração.',
          },
          {
            q: 'O app independente é de código aberto?',
            a: 
              'Não. O código-fonte e o pacote do PyPI são GPL-3.0, mas o app é distribuído sob o contrato de licença do fabricante, que proíbe redistribuição e engenharia reversa.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O Labelme vale um teste se você anota imagens para modelos de visão computacional e quer manter o trabalho e os modelos de IA na sua própria máquina.**',
          'Ele tem uma longa trajetória, com uma primeira versão em 2016 e um commit no repositório em 17 de novembro de 2026. Também oferece um caminho gratuito de código aberto, rascunhos de IA offline segundo o fabricante e saída em JSON simples. O app pago elimina a configuração do Python.',
          'As contrapartidas são reais. É uma pessoa em um desktop, sem recursos de colaboração descritos. Os requisitos de hardware e a velocidade não foram verificados, o download exige login e os recursos de agentes podem passar dados de imagem a um provedor na nuvem. A PromptQuorum não testou o app, então experimente o teste ou o pacote pip com algumas imagens antes de comprar.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Labelme](https://labelme.io) — descrição do fabricante sobre o app, os modelos de IA, os agentes e o uso offline, consultado em 18 de novembro de 2026.',
          '[Página de preços](https://labelme.io/pricing) — planos, preços, teste, reembolso e termos de licença, consultada em 18 de novembro de 2026.',
          '[Página de download](https://labelme.io/download) — downloads por sistema, versão 7.11.0 e aviso do Windows, consultada em 18 de novembro de 2026.',
          '[Guia de instalação](https://www.labelme.io/docs/install-labelme-app) — passos de instalação, login, teste, downloads de modelos e pacote offline, consultado em 18 de novembro de 2026.',
          '[Registro de alterações](https://labelme.io/changelog) — recurso Pro de agentes de IA e ferramentas de formas, consultado em 18 de novembro de 2026.',
          '[Política de privacidade](https://labelme.io/privacy-policy) — fluxo de dados, telemetria, agentes e operador sediado no Japão, consultada em 18 de novembro de 2026.',
          '[Contrato de licença](https://labelme.io/eula) — alcance da licença, restrições, licenças dos modelos e lei aplicável, consultado em 18 de novembro de 2026.',
          '[Página Sobre](https://labelme.io/about) — histórico do fabricante e história do código aberto, consultada em 18 de novembro de 2026.',
          '[Repositório do Labelme no GitHub](https://github.com/wkentaro/labelme) — descrição do projeto, licença GPL-3.0, último commit e README, consultado em 18 de novembro de 2026.',
          '[Versão v7.11.0](https://github.com/wkentaro/labelme/releases/tag/v7.11.0) — versão e data do lançamento mais recente, consultada em 18 de novembro de 2026.',
          '[Repositório do CVAT](https://github.com/cvat-ai/cvat), [repositório do Label Studio](https://github.com/HumanSignal/label-studio) e [repositório do X-AnyLabeling](https://github.com/CVHub520/X-AnyLabeling) — licenças e descrições das alternativas, consultados em 18 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Unsloth](/pt/power-local-llm/unsloth-review) — Ajuste fino gratuito para LLMs, imagens e áudio, um passo comum depois de preparar os dados.',
          '[Análise do LLaMA-Factory](/pt/power-local-llm/llama-factory-review) — Ajuste mais de 100 LLMs por uma interface web.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/labelme-review-hero-zh.webp',
    title: 'Labelme 评测：支持离线 AI 模型和 AI 智能体接入的图像标注工具',
    seoTitle: 'Labelme 评测：图像标注工具、离线 AI 与 MCP',
    intro: 
      'Labelme 是一款桌面工具，用来在图像上绘制和编辑多边形、矩形、点等标注，为计算机视觉模型准备训练数据。它有两种形式：免费的开源 Python 包，以及付费的独立应用。开发者称，AI 模型会在您的电脑上离线生成形状草稿。本评测依据开发者的网站和政策、GitHub 仓库及其版本发布，核对于 2026 年 11 月 18 日。PromptQuorum 没有实际测试过这款应用。',
    metaDescription: 'Labelme 是支持离线 SAM AI 和 AI 智能体 MCP 接入的图像标注工具。本文解读开源包与付费应用两种形式的许可证、价格、隐私政策和已知局限。',
    twitterDescription: 'Labelme 在您自己的电脑上标注图像，提供离线 SAM 草稿和面向 AI 智能体的 MCP 接入，分开源包和付费应用两种形式。',
    audience: '为计算机视觉模型准备图像数据集的机器学习工程师、研究人员和团队',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Labelme',
    targetKeywords: [
      'Labelme 评测',
      'Labelme 图像标注',
      'Labelme SAM3',
      'Labelme 价格',
      'Labelme MCP',
      'Labelme 隐私',
    ],
    current_models_mentioned: [],
    leadAnswerBlock: 
      '**Labelme 是适用于 macOS、Windows 和 Linux 的图像标注工具：您可以手动绘制形状，也可以让离线 AI 模型（SAM、SAM2、SAM3、YOLO-World）生成草稿，结果以普通 JSON 文件保存在图像旁边。** 源代码以 GPL-3.0 开源，付费独立应用则增加了 AI 智能体接入和数据集导出。',
    quickAnswerTop: {
      zh: {
        question: 'Labelme 是什么，适合谁用？',
        answer: 'Labelme 是桌面端图像标注工具，把您的图像变成带标签的训练数据，并可选用 AI 生成形状草稿。适合为计算机视觉模型准备数据集、又希望图像留在自己机器上的人。',
        bullets: [
          '平台：macOS（Apple Silicon 和 Intel）、Windows x64、Linux x64。',
          '两种形式：免费的开源包（GPL-3.0），以及遵循开发者许可协议的付费独立应用。',
          '七种形状工具、标记和备注；输出为普通 JSON。',
          '开发者列出的 AI 模型：SAM、SAM2、SAM3、EfficientSAM 和 YOLO-World，在您的电脑上运行。',
          '接入 AI 智能体后，打开的图像和形状数据可能会传给该智能体的提供方。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: '核心要点',
        anchor: 'tldr',
      },
      {
        label: '概览',
        anchor: 'overview',
      },
      {
        label: '如何获取',
        anchor: 'get-it',
      },
      {
        label: '系统要求',
        anchor: 'requirements',
      },
      {
        label: '功能',
        anchor: 'features',
      },
      {
        label: '隐私与数据流向',
        anchor: 'privacy',
      },
      {
        label: '价格与许可',
        anchor: 'pricing',
      },
      {
        label: '适合谁用',
        anchor: 'who-should-use',
      },
      {
        label: '我们无法核实的内容',
        anchor: 'who-should-not-use',
      },
      {
        label: '替代方案',
        anchor: 'alternatives',
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
            text: 'Labelme 是一款桌面工具，可手动或借助 AI 草稿标出图像中的物体，并把结果保存为 JSON 文件，用于训练计算机视觉模型。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作一支告诉模型图片里有什么的画笔。您点一下物体、拖一个框或输入一个词，AI 画出轮廓，再由您修正。',
          },
        ],
        items: [
          '最新版本为 7.11.0（2026 年 11 月 14 日发布），仓库在 2026 年 11 月 17 日仍有提交，因此不触发停更警告。',
          '下载独立应用需要用免费的 labelme.io 账号登录，应用在输入许可证密钥前以 3 天试用模式运行。',
          '开源包不收费，但需要配置 Python 环境；独立应用是一次性购买。',
          '根据隐私政策，应用不会上传您的任何图像或标注；模型权重在首次使用时下载。',
          'PromptQuorum 没有测试过这款应用，来源也没有给出内存或 GPU 要求。',
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**Labelme 是一款图形化图像标注工具，把每份标注保存为图像旁边的 JSON 文件。**',
          '据开发者网站介绍，Kentaro Wada 于 2016 年在东京大学读书时写出了第一个版本，至今仍在维护。隐私政策和许可协议把以 Labelme.io 名义经营的 Kentaro Wada 列为运营者。仓库把该项目描述为基于 Python 的图像标注，支持多边形、矩形、圆、线和点。其 README 还列出了图像标记、一个视频标注示例、用 SAM 和 EfficientSAM 实现的点到多边形 AI 辅助标注，以及用 YOLO-World 和 SAM3 实现的文本到标注。',
          '7.11.0 版于 2026 年 11 月 14 日发布，是 GitHub 上的最新版本。pip 包的第 7 版需要 Python 3.12 或更高版本并使用 PySide6（Qt6）；据 README，v6.3.x 分支只接收关键修复。',
          '开发者把独立应用定位为同一个 Labelme，经过打包可省去 Python 配置，并增加了 AI 智能体接入和数据集导出。这些是开发者的说法。PromptQuorum 没有运行该应用，也没有测量标注速度或模型质量。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**最简单的方式是独立应用，即适用于 macOS、Windows 或 Linux 的常规安装程序；也可以用 pip 安装开源包。**',
          '下载页列出了适用于 Apple Silicon 和 Intel Mac 的 .dmg、Microsoft Store 页面、Windows x64 的 .msi 安装程序和便携版 EXE，以及 Linux x64 的 AppImage。安装指南标明下载需要登录。Windows 可能弹出“Windows 已保护你的电脑”警告；开发者提示先确认发布者包含“Kentaro Wada”，且不要关闭 Windows 安全中心。GitHub 仓库没有列出发布附件（2026 年 11 月 18 日核对），所以安装程序来自 labelme.io。',
        ],
        columns: [
          '平台',
          '获取方式',
        ],
        rows: [
          {
            '平台': '[macOS](https://labelme.io/download)',
            '获取方式': '下载 .dmg（Apple Silicon 或 Intel），移入“应用程序”',
          },
          {
            '平台': '[Windows](https://labelme.io/download)',
            '获取方式': 'Microsoft Store、.msi 安装程序或便携版 EXE',
          },
          {
            '平台': '[Linux](https://labelme.io/download)',
            '获取方式': 'AppImage：加上可执行权限后运行',
          },
          {
            '平台': '[Python](https://github.com/wkentaro/labelme)',
            '获取方式': '在终端运行 pip install labelme（Python 3.12+）',
          },
          {
            '平台': '官网',
            '获取方式': '[labelme.io](https://labelme.io)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[labelme.io/privacy-policy](https://labelme.io/privacy-policy)',
          },
        ],
        note: 'pip 方式需要终端和 Python 3.12 或更高版本的环境；独立应用两者都不需要。',
      },
      requirements: {
        id: 'requirements',
        title: '系统要求',
        content: [
          '**开发者没有给出该应用的内存、GPU 或磁盘要求。**',
          '安装指南说，Labelme 支持尚未终止支持的操作系统版本。AI 模型权重在首次使用时下载，没有给出下载大小。据同一份指南，针对无法联网的机器提供 SAM3 离线包。',
        ],
        columns: [
          '项目',
          '给出的数字',
        ],
        rows: [
          {
            '项目': '操作系统',
            '给出的数字': 'macOS（Apple Silicon、Intel）、Windows 64 位、Linux 64 位',
          },
          {
            '项目': '内存',
            '给出的数字': '未说明',
          },
          {
            '项目': 'GPU',
            '给出的数字': '未说明',
          },
          {
            '项目': '磁盘与模型大小',
            '给出的数字': '未说明；权重首次使用时下载',
          },
          {
            '项目': 'Python（pip 方式）',
            '给出的数字': 'v7.x 为 3.12 至 3.14（README）',
          },
          {
            '项目': '网络',
            '给出的数字': '登录下载和下载模型时需要',
          },
        ],
        note: '据开发者称，许可证校验本身是离线进行的。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**Labelme 把手动形状工具与 AI 草稿结合起来，并让每个结果都可以编辑。** 以下各项均为开发者在网站、更新日志和 README 中的说法。',
        ],
        items: [
          '七种形状工具：多边形、矩形、旋转矩形、圆、点、线和折线。',
          'AI 草稿：用 SAM2 点击生成多边形，用 SAM3 实现框到标注和文本到标注，并用 YOLO-World 进行文本提示检测。',
          '开发者列出的模型：用于分割的 SAM、SAM2、SAM3 和 EfficientSAM，以及 YOLO-World。',
          '用于被遮挡或被截断形状的标记、备注、形状锁定，以及把图像标为已检查的标记。',
          '自动保存到每张图像旁边的 JSON 文件，并提供在图像之间切换的键盘快捷键。',
          '提供 21 种语言的界面。',
          '仅限 Pro：一个 MCP 服务器，让 ChatGPT、Claude、Claude Code、Codex 或 Cursor 能读取、添加、选择和删除当前图像上的形状。每项更改都需您批准，一次撤销即可还原。',
          '仅限 Pro：命令行数据集工具包，含 10 多个工具，用于批量标注、审核以及导出为 YOLO、YOLO-OBB 和 Pascal VOC。它在终端中运行，需要 Python。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**根据隐私政策，应用不会上传您的任何图像或标注，但有几项功能会用到网络。**',
          '该政策最后更新于 2026 年 11 月 12 日，称应用离线校验许可证密钥，也不检查更新。不过它会联网下载您选择的 AI 模型。文件来自托管在 Cloudflare 上的 Labelme 服务器，备用来源是 GitHub 或 Hugging Face，它们能看到您的 IP 地址。',
          '如果您接入 AI 智能体，政策称智能体会收到打开的图像、其文件路径、标注文件路径、标签，以及每个形状的标签、点、标记和描述。这些数据由智能体的提供方管辖；在本地运行的智能体则把数据留在您的电脑上。',
          '应用遥测是可选的。它涵盖应用打开、试用状态、购买按钮点击、许可证激活和意外错误，以随机 ID 发送给 PostHog，可在应用菜单中关闭。网站使用 Google Analytics 和 PostHog，注册时会保存来源信息。Paddle 作为登记商户处理付款。运营者位于日本，其服务商在包括美国在内的其他国家处理数据。',
        ],
      },
      pricing: {
        id: 'pricing',
        title: '价格与许可',
        content: [
          '**开源包以 GPL-3.0 免费提供，独立应用则是遵循开发者许可协议的一次性购买。**',
        ],
        items: [
          '开源包：免费，用 pip 安装。开发者称它的标注工具和 AI 模型与应用相同。',
          'Pro：一次性 79 美元，含一年更新；之后您已有的版本仍可继续使用。据开发者称，它增加了 AI 智能体接入、数据集工具包、模型下载镜像和邮件支持。',
          'Pro（Lifetime）：一次性 249 美元，含所有后续更新，包括大版本。',
          'Team：每席 249 美元，至少 5 席，席位可重新分配；可按需报价。',
          '试用与退款：3 天试用，无需信用卡，不含数据集工具包；付款后 14 天内通过邮件申请可全额退款。',
        ],
        note: 
          '价格为开发者价格页上的美元价格，核对于 2026 年 11 月 18 日，可能另加增值税。一份许可证覆盖一位具名用户在其自己所有电脑上使用，并允许用于内部标注工作的商业用途。许可协议禁止转售、再分发和逆向工程该应用。协议称 GPL-3.0 适用于源代码和 PyPI 包，不适用于协议本身，AI 模型另行授权；SAM 3 适用 Meta 的 SAM License，并有其自身的使用限制。适用日本法律，由东京法院管辖，消费者所在地法院的权利除外。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**Labelme 适合为计算机视觉模型标注图像、并希望在自己电脑上完成的人。**',
        ],
        items: [
          '希望图像不经过第三方标注服务器的机器学习从业者。',
          '更愿意修正 AI 草稿轮廓、而不是手绘每个形状的标注人员。',
          '想让智能体编辑形状、并接受该智能体提供方处理数据的 ChatGPT、Claude 或 Claude Code 用户。',
          '用免费包和终端就够了的 Python 用户。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        content: [
          '**Labelme 在某些情况下并不合适，还有若干细节没有核实。**',
        ],
        items: [
          '不适合：需要带任务队列的共享网页标注服务器的团队。来源描述的是单人使用的桌面工具，没有协作服务器。',
          '不适合：无法事先获取模型权重或离线包的隔离网络环境。',
          '未核实：内存、GPU 和磁盘要求以及模型下载大小。均未说明。',
          '未核实：标注速度和 AI 模型的准确度。PromptQuorum 两者都没有测量。',
          '未核实：不购买 Pro 时应用能导出哪些格式。README 把 VOC 和 COCO 导出列在开源功能中，而开发者网站称导出为 YOLO、YOLO-OBB 和 Pascal VOC 属于 Pro 工具包。',
          '未核实：首页上的数字（920 多份付费许可证、146 条评价平均 4.9 分）是开发者自己的说法，未经核对。',
          '未核实：智能体接入是否适用于所列的每一个智能体，以及 Linux AppImage 在具体发行版上的表现。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Labelme 与替代方案对比',
        itemHeadings: true,
        content: [
          '**Labelme 是单人使用的桌面标注工具。PromptQuorum 没有把它与下列替代方案做过实际对比。** 它们的信息来自各自的 GitHub 简介，核对于 2026 年 11 月 18 日。',
        ],
        columns: [
          '工具',
          '来源中的记载',
        ],
        rows: [
          {
            '工具': 'Labelme',
            '来源中的记载': '桌面应用；GPL-3.0 包加付费应用',
          },
          {
            '工具': '[CVAT](https://www.cvat.ai)',
            '来源中的记载': 'MIT；图像、视频、音频和 3D 标注平台',
          },
          {
            '工具': '[Label Studio](https://labelstud.io)',
            '来源中的记载': 'Apache-2.0；多类型数据标注工具',
          },
          {
            '工具': '[X-AnyLabeling](https://xanylabeling.com)',
            '来源中的记载': 'GPL-3.0；跨平台桌面标注应用',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '一年更新期结束后会怎样？',
            a: '不会有任何功能失效。您保留更新期内的所有版本，应用离线校验许可证密钥。据开发者称，您可以再买一年，或选择终身方案。',
          },
          {
            q: '我的图像会离开我的电脑吗？',
            a: '根据隐私政策，应用本身不会。模型权重会被下载，您接入的 AI 智能体则可能把数据发给其提供方，除非它在本地运行。',
          },
          {
            q: '没有网络时能用 Labelme 吗？',
            a: '开发者称，模型下载完成后可离线工作。对于隔离网络的机器，开发者建议先在联网电脑上下载模型，或向支持团队索取离线包。',
          },
          {
            q: '可以接入哪些 AI 智能体？',
            a: '开发者列出 ChatGPT、Claude、Claude Code、Codex 和 Cursor，在 Pro 应用中通过“文件”再选“连接 AI 智能体”接入。据更新日志，每项更改都需您批准。',
          },
          {
            q: '独立应用是开源的吗？',
            a: '不是。源代码和 PyPI 包采用 GPL-3.0，但应用按开发者的许可协议分发，协议禁止再分发和逆向工程。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果您为计算机视觉模型标注图像，并希望工作和 AI 模型都留在自己的机器上，Labelme 值得一试。**',
          '它有很长的历史，第一个版本出现于 2016 年，仓库在 2026 年 11 月 17 日仍有提交。它还提供免费的开源途径、据开发者称可离线运行的 AI 草稿，以及普通 JSON 输出。付费应用省去了 Python 配置。',
          '取舍也很明确。它是一个人在一台桌面电脑上使用，没有描述协作功能。硬件要求和速度未经核实，下载需要登录，智能体功能可能把图像数据交给云端提供方。PromptQuorum 没有测试过这款应用，所以购买前请先用试用版或 pip 包处理几张图像。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Labelme 官网](https://labelme.io) — 开发者对应用、AI 模型、智能体和离线使用的说明，核对于 2026 年 11 月 18 日。',
          '[价格页](https://labelme.io/pricing) — 方案、价格、试用、退款和许可条款，核对于 2026 年 11 月 18 日。',
          '[下载页](https://labelme.io/download) — 各系统下载、7.11.0 版和 Windows 提示，核对于 2026 年 11 月 18 日。',
          '[安装指南](https://www.labelme.io/docs/install-labelme-app) — 安装步骤、登录、试用、模型下载和离线包，核对于 2026 年 11 月 18 日。',
          '[更新日志](https://labelme.io/changelog) — Pro 的 AI 智能体功能和形状工具，核对于 2026 年 11 月 18 日。',
          '[隐私政策](https://labelme.io/privacy-policy) — 数据流向、遥测、智能体、位于日本的运营者，核对于 2026 年 11 月 18 日。',
          '[许可协议](https://labelme.io/eula) — 许可范围、限制、模型许可和适用法律，核对于 2026 年 11 月 18 日。',
          '[关于页面](https://labelme.io/about) — 开发者背景和开源历史，核对于 2026 年 11 月 18 日。',
          '[Labelme GitHub 仓库](https://github.com/wkentaro/labelme) — 项目简介、GPL-3.0 许可证、最新提交和 README，核对于 2026 年 11 月 18 日。',
          '[v7.11.0 版本发布](https://github.com/wkentaro/labelme/releases/tag/v7.11.0) — 最新版本号和日期，核对于 2026 年 11 月 18 日。',
          '[CVAT 仓库](https://github.com/cvat-ai/cvat)、[Label Studio 仓库](https://github.com/HumanSignal/label-studio)和 [X-AnyLabeling 仓库](https://github.com/CVHub520/X-AnyLabeling) — 替代方案的许可证和简介，核对于 2026 年 11 月 18 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Unsloth 评测](/zh/power-local-llm/unsloth-review) — 面向 LLM、图像和音频的免费微调，是数据准备之后的常见下一步。',
          '[LLaMA-Factory 评测](/zh/power-local-llm/llama-factory-review) — 通过网页界面微调 100 多个 LLM。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/labelme-review-hero-ar.webp',
    title: 'مراجعة Labelme: تعليق الصور بنماذج ذكاء اصطناعي دون اتصال ووصول لوكلاء الذكاء الاصطناعي',
    seoTitle: 'مراجعة Labelme: تعليق الصور، ذكاء اصطناعي دون اتصال، MCP',
    intro: 
      'Labelme أداة لسطح المكتب لرسم التعليقات التوضيحية على الصور وتحريرها، مثل المضلعات والمستطيلات والنقاط، لإعداد بيانات تدريب لنماذج الرؤية الحاسوبية. تأتي بشكلين: حزمة Python مفتوحة المصدر ومجانية، وتطبيق مستقل مدفوع. تقول الجهة المطوّرة إن نماذج الذكاء الاصطناعي ترسم مسودات الأشكال دون اتصال على حاسوبك. تستند هذه المراجعة إلى موقع الجهة المطوّرة وسياساتها ومستودع GitHub وإصداراته، وقد روجعت في 18 نوفمبر 2026. لم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription: 
      'Labelme أداة لتعليق الصور تعمل على حاسوبك مع ذكاء اصطناعي SAM دون اتصال وربط MCP لوكلاء الذكاء الاصطناعي. الترخيص والأسعار والخصوصية والحدود.',
    twitterDescription: 
      'Labelme يعلّق الصور على حاسوبك مع مسودات SAM دون اتصال وربط MCP لوكلاء الذكاء الاصطناعي. حزمة مفتوحة المصدر وتطبيق مدفوع.',
    audience: 'مهندسو تعلّم الآلة والباحثون والفرق الذين يعدّون مجموعات صور لنماذج الرؤية الحاسوبية',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Labelme',
    targetKeywords: [
      'مراجعة Labelme',
      'Labelme تعليق الصور',
      'Labelme SAM3',
      'أسعار Labelme',
      'Labelme MCP',
      'خصوصية Labelme',
    ],
    current_models_mentioned: [],
    leadAnswerBlock: 
      '**Labelme أداة لتعليق الصور على macOS وWindows وLinux، تتيح رسم الأشكال يدويًا أو جعل نماذج ذكاء اصطناعي تعمل دون اتصال (SAM وSAM2 وSAM3 وYOLO-World) ترسم مسودتها، وتحفظ ملفات JSON بسيطة بجانب صورك.** الشيفرة المصدرية مفتوحة بترخيص GPL-3.0، ويضيف تطبيق مستقل مدفوع ربطًا بوكلاء الذكاء الاصطناعي وتصدير مجموعات البيانات.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو Labelme ولمن هو؟',
        answer: 
          'Labelme أداة لسطح المكتب لتعليق الصور تحوّل صورك إلى بيانات تدريب موسومة، مع مسودات اختيارية للأشكال بالذكاء الاصطناعي. تناسب من يعدّون مجموعات بيانات لنماذج الرؤية الحاسوبية ويريدون بقاء صورهم على أجهزتهم.',
        bullets: [
          'المنصات: macOS (Apple Silicon وIntel) وWindows x64 وLinux x64.',
          'شكلان: حزمة مفتوحة المصدر مجانية (GPL-3.0) وتطبيق مستقل مدفوع بموجب اتفاقية ترخيص الجهة المطوّرة.',
          'سبع أدوات للأشكال وعلامات وملاحظات؛ المخرجات JSON بسيط.',
          'نماذج الذكاء الاصطناعي التي تذكرها الجهة المطوّرة: SAM وSAM2 وSAM3 وEfficientSAM وYOLO-World، وتعمل على حاسوبك.',
          'قد يؤدي ربط وكيل ذكاء اصطناعي إلى تمرير الصورة المفتوحة وبيانات الأشكال إلى مزوّد ذلك الوكيل.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: 'النقاط الرئيسية',
        anchor: 'tldr',
      },
      {
        label: 'نظرة عامة',
        anchor: 'overview',
      },
      {
        label: 'كيف تحصل عليه',
        anchor: 'get-it',
      },
      {
        label: 'المتطلبات',
        anchor: 'requirements',
      },
      {
        label: 'الميزات',
        anchor: 'features',
      },
      {
        label: 'الخصوصية وتدفق البيانات',
        anchor: 'privacy',
      },
      {
        label: 'الأسعار والترخيص',
        anchor: 'pricing',
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
        label: 'البدائل',
        anchor: 'alternatives',
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
              'Labelme أداة لسطح المكتب لتحديد الأشياء في الصور يدويًا أو بمسودات ترسمها الذكاء الاصطناعي، وحفظ النتيجة كملفات JSON لتدريب نماذج الرؤية الحاسوبية.',
          },
          {
            type: 'plain-terms',
            text: 
              'تخيّلها أداة رسم لتخبر النموذج بما في الصورة. تنقر على شيء أو تسحب مربعًا أو تكتب كلمة، فيرسم الذكاء الاصطناعي المحيط وتصحّحه أنت.',
          },
        ],
        items: [
          'الإصدار 7.11.0 هو الأحدث (14 نوفمبر 2026)، وكان للمستودع commit في 17 نوفمبر 2026، فلا ينطبق تحذير المشروع المهجور.',
          'تنزيل التطبيق المستقل يتطلب تسجيل الدخول بحساب labelme.io مجاني، ويعمل التطبيق كتجربة لمدة 3 أيام حتى تدخل مفتاح ترخيص.',
          'الحزمة مفتوحة المصدر بلا تكلفة لكنها تحتاج إلى إعداد Python؛ والتطبيق المستقل عملية شراء لمرة واحدة.',
          'بحسب سياسة الخصوصية، لا يرفع التطبيق أيًّا من صورك أو تعليقاتك؛ وتُنزَّل أوزان النماذج عند أول استخدام.',
          'لم تختبر PromptQuorum التطبيق، ولا تذكر المصادر متطلبات الذاكرة أو GPU.',
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**Labelme أداة رسومية لتعليق الصور تحفظ كل تعليق كملف JSON بجانب صورته.**',
          'بحسب موقع الجهة المطوّرة، كتب Kentaro Wada النسخة الأولى عام 2016 وهو طالب في جامعة طوكيو، وما زال يتولى صيانتها. تذكر سياسة الخصوصية واتفاقية الترخيص أن المشغّل هو Kentaro Wada الذي يعمل تحت اسم Labelme.io. يصف المستودع المشروع بأنه تعليق للصور باستخدام Python يدعم أشكال المضلع والمستطيل والدائرة والخط والنقطة. ويذكر ملف README أيضًا علامات الصور ومثالًا على تعليق الفيديو وتعليقًا بمساعدة الذكاء الاصطناعي من نقطة إلى مضلع عبر SAM وEfficientSAM ومن نص إلى تعليق عبر YOLO-World وSAM3.',
          'صدر الإصدار 7.11.0 في 14 نوفمبر 2026 وهو أحدث إصدار على GitHub. يتطلب الإصدار 7 من حزمة pip لغة Python 3.12 أو أحدث ويستخدم PySide6 (Qt6)؛ وبحسب README يتلقى فرع v6.3.x إصلاحات حرجة فقط.',
          'تقدّم الجهة المطوّرة التطبيق المستقل على أنه Labelme نفسه معبأً لتتجاوز إعداد Python، مع إضافة وصول وكلاء الذكاء الاصطناعي وتصدير مجموعات البيانات. هذه أقوال الجهة المطوّرة. لم تشغّل PromptQuorum التطبيق ولم تقس سرعة التعليق أو جودة النماذج.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**أسهل طريق هو التطبيق المستقل، وهو مثبّت عادي لـ macOS أو Windows أو Linux؛ كما يمكن تثبيت الحزمة مفتوحة المصدر عبر pip.**',
          'تعرض صفحة التنزيل ملف .dmg لأجهزة Mac بمعالج Apple Silicon وIntel، وصفحة في Microsoft Store، ومثبّت .msi وملف EXE محمولًا لنظام Windows x64، وملف AppImage لنظام Linux x64. يشير دليل التثبيت إلى أن التنزيلات تتطلب تسجيل الدخول. قد يعرض Windows تحذير «Windows protected your PC»؛ وتنصح الجهة المطوّرة بالتأكد من أن الناشر يتضمن «Kentaro Wada» وبعدم تعطيل أمان Windows. لا يعرض مستودع GitHub ملفات إصدار (روجع في 18 نوفمبر 2026)، لذا تأتي المثبّتات من labelme.io.',
        ],
        columns: [
          'المنصة',
          'كيفية الحصول عليه',
        ],
        rows: [
          {
            'المنصة': '[macOS](https://labelme.io/download)',
            'كيفية الحصول عليه': 'نزّل ملف .dmg (Apple Silicon أو Intel) وانقله إلى التطبيقات',
          },
          {
            'المنصة': '[Windows](https://labelme.io/download)',
            'كيفية الحصول عليه': 'Microsoft Store أو مثبّت .msi أو EXE محمول',
          },
          {
            'المنصة': '[Linux](https://labelme.io/download)',
            'كيفية الحصول عليه': 'AppImage: اجعله قابلًا للتنفيذ ثم شغّله',
          },
          {
            'المنصة': '[Python](https://github.com/wkentaro/labelme)',
            'كيفية الحصول عليه': 'شغّل pip install labelme في الطرفية (Python 3.12+)',
          },
          {
            'المنصة': 'الموقع الإلكتروني',
            'كيفية الحصول عليه': '[labelme.io](https://labelme.io)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'كيفية الحصول عليه': '[labelme.io/privacy-policy](https://labelme.io/privacy-policy)',
          },
        ],
        note: 
          'طريق pip يحتاج إلى طرفية وبيئة Python بإصدار 3.12 أو أحدث؛ أما التطبيق المستقل فلا يحتاج إلى أيٍّ منهما.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**لا تذكر الجهة المطوّرة متطلبات الذاكرة أو GPU أو القرص للتطبيق.**',
          'يقول دليل التثبيت إن Labelme يدعم إصدارات أنظمة التشغيل التي لم ينتهِ دعمها. تُنزَّل أوزان نماذج الذكاء الاصطناعي عند أول استخدام دون ذكر أحجام التنزيل. وبحسب الدليل نفسه تتوفر حزمة SAM3 دون اتصال للأجهزة التي لا تصل إلى الإنترنت.',
        ],
        columns: [
          'البند',
          'القيمة المذكورة',
        ],
        rows: [
          {
            'البند': 'نظام التشغيل',
            'القيمة المذكورة': 'macOS (Apple Silicon وIntel) وWindows 64 بت وLinux 64 بت',
          },
          {
            'البند': 'الذاكرة (RAM)',
            'القيمة المذكورة': 'غير مذكورة',
          },
          {
            'البند': 'GPU',
            'القيمة المذكورة': 'غير مذكور',
          },
          {
            'البند': 'القرص وحجم النماذج',
            'القيمة المذكورة': 'غير مذكور؛ تُنزَّل الأوزان عند أول استخدام',
          },
          {
            'البند': 'Python (طريق pip)',
            'القيمة المذكورة': '3.12 إلى 3.14 للإصدار v7.x (README)',
          },
          {
            'البند': 'الشبكة',
            'القيمة المذكورة': 'مطلوبة لتنزيل التطبيق بعد الدخول ولتنزيل النماذج',
          },
        ],
        note: 'يجري التحقق من الترخيص نفسه دون اتصال بحسب الجهة المطوّرة.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**يجمع Labelme بين أدوات الأشكال اليدوية ومسودات الذكاء الاصطناعي، ويبقي كل نتيجة قابلة للتحرير.** كل ما يلي أقوال للجهة المطوّرة من الموقع وسجل التغييرات وREADME.',
        ],
        items: [
          'سبع أدوات للأشكال: مضلع ومستطيل ومستطيل مائل ودائرة ونقطة وخط وخط متعدد القطع.',
          'مسودات الذكاء الاصطناعي: نقرة إلى مضلع مع SAM2، ومن مربع إلى تعليق ومن نص إلى تعليق مع SAM3، وYOLO-World للكشف بوصف نصي.',
          'النماذج التي تذكرها الجهة المطوّرة: SAM وSAM2 وSAM3 وEfficientSAM للتجزئة، إضافة إلى YOLO-World.',
          'علامات للأشكال المحجوبة أو المقطوعة، وملاحظات، وقفل الأشكال، وعلامة لتحديد الصورة على أنها روجعت.',
          'حفظ تلقائي في ملف JSON بجانب كل صورة، واختصارات لوحة مفاتيح للتنقل بين الصور.',
          'واجهة بـ 21 لغة.',
          'في Pro فقط: خادم MCP يتيح لـ ChatGPT وClaude وClaude Code وCodex وCursor قراءة الأشكال في الصورة المفتوحة وإضافتها وتحديدها وحذفها. توافق على كل تغيير، ويعيده تراجع واحد.',
          'في Pro فقط: حزمة أدوات بسطر الأوامر لمجموعات البيانات تضم أكثر من 10 أدوات للتعليق الدفعي والمراجعة والتصدير إلى YOLO وYOLO-OBB وPascal VOC. تعمل في الطرفية وتحتاج إلى Python.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**بحسب سياسة الخصوصية، لا يرفع التطبيق أيًّا من صورك أو تعليقاتك، لكن عدة ميزات تستخدم الشبكة.**',
          'تقول السياسة، المحدّثة آخر مرة في 12 نوفمبر 2026، إن التطبيق يتحقق من مفتاح الترخيص دون اتصال ولا يبحث عن تحديثات. لكنه يتصل بالإنترنت لتنزيل نماذج الذكاء الاصطناعي التي تختارها. تأتي الملفات من خادم Labelme المستضاف لدى Cloudflare أو، كبديل، من GitHub أو Hugging Face اللذين يريان عنوان IP الخاص بك.',
          'إذا ربطت وكيل ذكاء اصطناعي، تقول السياسة إن الوكيل يتلقى الصورة المفتوحة ومسار ملفها ومسار ملف التعليقات والتسميات، ولكل شكل تسميته ونقاطه وعلاماته ووصفه. يحكم مزوّد الوكيل هذه البيانات، بينما يُبقيها الوكيل الذي يعمل محليًا على حاسوبك.',
          'قياسات الاستخدام في التطبيق اختيارية. تشمل فتح التطبيق وحالة التجربة والنقر على الشراء وتفعيل الترخيص والأخطاء غير المتوقعة، وتُرسل إلى PostHog بمعرّف عشوائي، ويمكن إيقافها من قائمة التطبيق. يستخدم الموقع Google Analytics وPostHog، ويحفظ التسجيل بيانات المصدر. تعالج Paddle المدفوعات بصفتها التاجر المسجّل. يقع المشغّل في اليابان، وتعالج جهات الخدمة التابعة له البيانات في دول أخرى منها الولايات المتحدة.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'الأسعار والترخيص',
        content: [
          '**الحزمة مفتوحة المصدر مجانية بترخيص GPL-3.0، والتطبيق المستقل عملية شراء لمرة واحدة بموجب اتفاقية ترخيص الجهة المطوّرة.**',
        ],
        items: [
          'الحزمة مفتوحة المصدر: مجانية وتُثبَّت عبر pip. تقول الجهة المطوّرة إن فيها أدوات التعليق ونماذج الذكاء الاصطناعي نفسها الموجودة في التطبيق.',
          'Pro: 79 دولارًا أمريكيًا لمرة واحدة، مع سنة من التحديثات؛ وتستمر النسخة التي لديك في العمل بعد ذلك. بحسب الجهة المطوّرة يضيف الربط بوكلاء الذكاء الاصطناعي وحزمة أدوات مجموعات البيانات ومرآة لتنزيل النماذج ودعمًا عبر البريد.',
          'Pro (Lifetime): 249 دولارًا أمريكيًا لمرة واحدة، مع جميع التحديثات المستقبلية بما فيها الإصدارات الرئيسية.',
          'Team: 249 دولارًا أمريكيًا للمقعد الواحد بدءًا من خمسة مقاعد يمكن إعادة تعيينها؛ والعروض عند الطلب.',
          'التجربة والاسترداد: 3 أيام دون بطاقة ائتمان وبدون حزمة أدوات مجموعات البيانات؛ واسترداد كامل عبر البريد خلال 14 يومًا من الدفع.',
        ],
        note: 
          'الأسعار بالدولار الأمريكي في صفحة أسعار الجهة المطوّرة، روجعت في 18 نوفمبر 2026، وقد تُضاف ضريبة القيمة المضافة. يغطي الترخيص الواحد شخصًا مسمّى على جميع حواسيبه الخاصة ويسمح بالاستخدام التجاري في أعمال التعليق الداخلية. تمنع اتفاقية الترخيص إعادة بيع التطبيق وإعادة توزيعه والهندسة العكسية له. وتقول إن GPL-3.0 تنطبق على الشيفرة المصدرية وحزمة PyPI لا على الاتفاقية، وإن نماذج الذكاء الاصطناعي مرخّصة بشكل منفصل؛ ويخضع SAM 3 لرخصة SAM License من Meta ولها قيود استخدام خاصة. القانون الحاكم هو القانون الياباني مع محاكم طوكيو واستثناء لمحاكم موطن المستهلك.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب Labelme من يعلّقون الصور لنماذج الرؤية الحاسوبية ويريدون إنجاز ذلك على حاسوبهم.**',
        ],
        items: [
          'ممارسو تعلّم الآلة الذين يريدون إبقاء صورهم بعيدًا عن خوادم التعليق التابعة لجهات خارجية.',
          'المعلّقون الذين يفضّلون تصحيح محيطات ترسمها الذكاء الاصطناعي على رسم كل شكل يدويًا.',
          'مستخدمو ChatGPT أو Claude أو Claude Code الذين يريدون أن يعدّل وكيل الأشكال ويقبلون أن يعالج مزوّد ذلك الوكيل البيانات.',
          'مستخدمو Python الذين تكفيهم الحزمة المجانية وطرفية.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**لا يناسب Labelme بعض الحالات، وتبقى عدة تفاصيل غير متحقَّق منها.**',
        ],
        items: [
          'لا يناسب: الفرق التي تحتاج إلى خادم تعليق مشترك عبر الويب مع طوابير مهام. تصف المصادر أداة سطح مكتب لمستخدم واحد ولا تصف خادم تعاون.',
          'لا يناسب: البيئات المعزولة عن الشبكة التي لا تستطيع الحصول مسبقًا على أوزان النماذج أو الحزمة دون اتصال.',
          'غير متحقَّق منه: متطلبات الذاكرة وGPU والقرص وأحجام تنزيل النماذج. لا شيء منها مذكور.',
          'غير متحقَّق منه: سرعة التعليق ودقة نماذج الذكاء الاصطناعي. لم تقس PromptQuorum أيًّا منهما.',
          'غير متحقَّق منه: صيغ التصدير التي يقدمها التطبيق دون Pro. يذكر README تصدير VOC وCOCO ضمن ميزات المصدر المفتوح، بينما يقول موقع الجهة المطوّرة إن التصدير إلى YOLO وYOLO-OBB وPascal VOC جزء من حزمة Pro.',
          'غير متحقَّق منه: أرقام الصفحة الرئيسية (أكثر من 920 ترخيصًا مدفوعًا وتقييم 4.9 من 146 مراجعة) هي أقوال الجهة المطوّرة ولم يجرِ التحقق منها.',
          'غير متحقَّق منه: هل يعمل ربط الوكلاء مع كل وكيل مذكور، وكيف يتصرف AppImage على توزيعات Linux محددة.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Labelme مقابل البدائل',
        itemHeadings: true,
        content: [
          '**Labelme أداة تعليق لسطح المكتب لمستخدم واحد. لم تقارنه PromptQuorum عمليًا بالبدائل التالية.** مصدر تفاصيلها أوصافها على GitHub، وقد روجعت في 18 نوفمبر 2026.',
        ],
        columns: [
          'الأداة',
          'المذكور في المصادر',
        ],
        rows: [
          {
            'الأداة': 'Labelme',
            'المذكور في المصادر': 'تطبيق سطح مكتب؛ حزمة GPL-3.0 وتطبيق مدفوع',
          },
          {
            'الأداة': '[CVAT](https://www.cvat.ai)',
            'المذكور في المصادر': 'MIT؛ منصة تعليق للصور والفيديو والصوت و3D',
          },
          {
            'الأداة': '[Label Studio](https://labelstud.io)',
            'المذكور في المصادر': 'Apache-2.0؛ أداة وسم متعددة أنواع البيانات',
          },
          {
            'الأداة': '[X-AnyLabeling](https://xanylabeling.com)',
            'المذكور في المصادر': 'GPL-3.0؛ تطبيق تعليق متعدد المنصات لسطح المكتب',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ماذا يحدث عند انتهاء سنة التحديثات؟',
            a: 
              'لا يتوقف شيء عن العمل. تحتفظ بكل إصدار صدر خلال سنة تحديثاتك، ويتحقق التطبيق من مفتاح الترخيص دون اتصال. بحسب الجهة المطوّرة يمكنك شراء سنة أخرى أو اختيار الخطة مدى الحياة.',
          },
          {
            q: 'هل تغادر صوري حاسوبي؟',
            a: 
              'ليس عبر التطبيق نفسه بحسب سياسة الخصوصية. تُنزَّل أوزان النماذج، وقد يرسل وكيل الذكاء الاصطناعي الذي تربطه البيانات إلى مزوّده ما لم يعمل محليًا.',
          },
          {
            q: 'هل يمكنني استخدام Labelme دون اتصال بالإنترنت؟',
            a: 
              'بعد تنزيل النماذج تقول الجهة المطوّرة إنه يعمل دون اتصال. وللأجهزة المعزولة عن الشبكة تنصح بتنزيل النماذج أولًا على حاسوب متصل أو طلب الحزمة دون اتصال من الدعم.',
          },
          {
            q: 'ما وكلاء الذكاء الاصطناعي التي يمكن ربطها؟',
            a: 
              'تذكر الجهة المطوّرة ChatGPT وClaude وClaude Code وCodex وCursor، وتُربط من قائمة ملف ثم ربط وكيل الذكاء الاصطناعي في تطبيق Pro. بحسب سجل التغييرات توافق على كل تغيير.',
          },
          {
            q: 'هل التطبيق المستقل مفتوح المصدر؟',
            a: 
              'لا. الشيفرة المصدرية وحزمة PyPI بترخيص GPL-3.0، لكن التطبيق يوزَّع بموجب اتفاقية ترخيص الجهة المطوّرة التي تمنع إعادة التوزيع والهندسة العكسية.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق Labelme التجربة إذا كنت تعلّق الصور لنماذج الرؤية الحاسوبية وتريد إبقاء العمل ونماذج الذكاء الاصطناعي على جهازك.**',
          'له سجل طويل، بنسخة أولى عام 2016 وcommit في المستودع في 17 نوفمبر 2026. ويقدّم أيضًا طريقًا مجانيًا مفتوح المصدر ومسودات ذكاء اصطناعي تعمل دون اتصال بحسب الجهة المطوّرة ومخرجات JSON بسيطة. ويُغني التطبيق المدفوع عن إعداد Python.',
          'المقايضات حقيقية. هو مستخدم واحد على سطح مكتب واحد دون ميزات تعاون موصوفة. متطلبات العتاد والسرعة غير متحقَّق منها، والتنزيل يتطلب تسجيل الدخول، وقد تمرّر ميزات الوكلاء بيانات الصور إلى مزوّد سحابي. لم تختبر PromptQuorum التطبيق، فجرّب النسخة التجريبية أو حزمة pip على بضع صور قبل الشراء.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Labelme](https://labelme.io) — وصف الجهة المطوّرة للتطبيق ونماذج الذكاء الاصطناعي والوكلاء والاستخدام دون اتصال، روجع في 18 نوفمبر 2026.',
          '[صفحة الأسعار](https://labelme.io/pricing) — الخطط والأسعار والتجربة والاسترداد وشروط الترخيص، روجعت في 18 نوفمبر 2026.',
          '[صفحة التنزيل](https://labelme.io/download) — التنزيلات لكل نظام والإصدار 7.11.0 وتنبيه Windows، روجعت في 18 نوفمبر 2026.',
          '[دليل التثبيت](https://www.labelme.io/docs/install-labelme-app) — خطوات التثبيت وتسجيل الدخول والتجربة وتنزيل النماذج والحزمة دون اتصال، روجع في 18 نوفمبر 2026.',
          '[سجل التغييرات](https://labelme.io/changelog) — ميزة وكلاء الذكاء الاصطناعي في Pro وأدوات الأشكال، روجع في 18 نوفمبر 2026.',
          '[سياسة الخصوصية](https://labelme.io/privacy-policy) — تدفق البيانات وقياسات الاستخدام والوكلاء والمشغّل المقيم في اليابان، روجعت في 18 نوفمبر 2026.',
          '[اتفاقية الترخيص](https://labelme.io/eula) — نطاق الترخيص والقيود وتراخيص النماذج والقانون الحاكم، روجعت في 18 نوفمبر 2026.',
          '[صفحة حول](https://labelme.io/about) — خلفية الجهة المطوّرة وتاريخ المصدر المفتوح، روجعت في 18 نوفمبر 2026.',
          '[مستودع Labelme على GitHub](https://github.com/wkentaro/labelme) — وصف المشروع وترخيص GPL-3.0 وآخر commit وREADME، روجع في 18 نوفمبر 2026.',
          '[الإصدار v7.11.0](https://github.com/wkentaro/labelme/releases/tag/v7.11.0) — رقم أحدث إصدار وتاريخه، روجع في 18 نوفمبر 2026.',
          '[مستودع CVAT](https://github.com/cvat-ai/cvat) و[مستودع Label Studio](https://github.com/HumanSignal/label-studio) و[مستودع X-AnyLabeling](https://github.com/CVHub520/X-AnyLabeling) — تراخيص البدائل وأوصافها، روجعت في 18 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Unsloth](/ar/power-local-llm/unsloth-review) — ضبط دقيق مجاني لنماذج LLM والصور والصوت، وهو خطوة تالية شائعة بعد إعداد البيانات.',
          '[مراجعة LLaMA-Factory](/ar/power-local-llm/llama-factory-review) — ضبط دقيق لأكثر من 100 نموذج LLM عبر واجهة ويب.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/labelme-review-hero-ko.webp',
    title: 'Labelme 리뷰: 오프라인 AI 모델과 AI 에이전트 연동을 갖춘 이미지 어노테이션',
    seoTitle: 'Labelme 리뷰: 이미지 어노테이션, 오프라인 AI',
    intro: 
      'Labelme는 이미지에 다각형, 사각형, 점 같은 어노테이션을 그리고 편집해 컴퓨터 비전 모델용 학습 데이터를 준비하는 데스크톱 도구입니다. 무료 오픈소스 Python 패키지와 유료 독립 실행형 앱, 두 가지 형태가 있습니다. 제작사는 AI 모델이 사용자의 컴퓨터에서 오프라인으로 도형 초안을 만든다고 설명합니다. 이 리뷰는 제작사의 웹사이트와 정책, GitHub 저장소와 릴리스를 바탕으로 2026년 11월 18일에 확인한 내용입니다. PromptQuorum은 이 앱을 직접 테스트하지 않았습니다.',
    metaDescription: 'Labelme는 오프라인 SAM AI와 AI 에이전트용 MCP 연동을 갖춘 이미지 어노테이션 도구입니다. 오픈소스 패키지와 유료 앱의 라이선스, 가격, 개인정보를 정리했습니다.',
    twitterDescription: 'Labelme는 내 컴퓨터에서 이미지에 어노테이션을 붙이는 도구로, 오프라인 SAM 초안과 AI 에이전트용 MCP 연동을 제공합니다. 오픈소스 패키지와 유료 앱이 있습니다.',
    audience: '컴퓨터 비전 모델용 이미지 데이터셋을 준비하는 머신러닝 엔지니어, 연구자, 팀',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Labelme',
    targetKeywords: [
      'Labelme 리뷰',
      'Labelme 이미지 어노테이션',
      'Labelme SAM3',
      'Labelme 가격',
      'Labelme MCP',
      'Labelme 개인정보',
    ],
    current_models_mentioned: [],
    leadAnswerBlock: 
      '**Labelme는 macOS, Windows, Linux용 이미지 어노테이션 도구로, 도형을 손으로 그리거나 오프라인 AI 모델(SAM, SAM2, SAM3, YOLO-World)에 초안을 맡길 수 있으며, 결과를 이미지 옆에 일반 JSON 파일로 저장합니다.** 소스 코드는 GPL-3.0 오픈소스이고, 유료 독립 실행형 앱에는 AI 에이전트 연결과 데이터셋 내보내기가 추가됩니다.',
    quickAnswerTop: {
      ko: {
        question: 'Labelme는 무엇이며 누구를 위한 도구입니까?',
        answer: 
          'Labelme는 이미지를 라벨이 붙은 학습 데이터로 바꾸는 데스크톱 이미지 어노테이션 도구이며, 도형 초안을 AI에 맡기는 기능은 선택 사항입니다. 컴퓨터 비전 모델용 데이터셋을 준비하면서 이미지를 자신의 컴퓨터에 두고 싶은 분께 적합합니다.',
        bullets: [
          '플랫폼: macOS(Apple Silicon 및 Intel), Windows x64, Linux x64.',
          '두 가지 형태: 무료 오픈소스 패키지(GPL-3.0)와 제작사 라이선스 계약에 따른 유료 독립 실행형 앱.',
          '일곱 가지 도형 도구, 플래그, 메모. 출력은 일반 JSON입니다.',
          '제작사가 밝힌 AI 모델: SAM, SAM2, SAM3, EfficientSAM, YOLO-World. 사용자의 컴퓨터에서 실행됩니다.',
          'AI 에이전트를 연결하면 열려 있는 이미지와 도형 데이터가 해당 에이전트 제공자에게 전달될 수 있습니다.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: '핵심 내용',
        anchor: 'tldr',
      },
      {
        label: '개요',
        anchor: 'overview',
      },
      {
        label: '설치 방법',
        anchor: 'get-it',
      },
      {
        label: '요구 사항',
        anchor: 'requirements',
      },
      {
        label: '기능',
        anchor: 'features',
      },
      {
        label: '개인정보 보호와 데이터 흐름',
        anchor: 'privacy',
      },
      {
        label: '가격과 라이선스',
        anchor: 'pricing',
      },
      {
        label: '이런 분께 적합합니다',
        anchor: 'who-should-use',
      },
      {
        label: '확인하지 못한 내용',
        anchor: 'who-should-not-use',
      },
      {
        label: '대안',
        anchor: 'alternatives',
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
            text: 'Labelme는 이미지 속 물체를 손으로 또는 AI 초안으로 표시하고, 그 결과를 컴퓨터 비전 모델 학습용 JSON 파일로 저장하는 데스크톱 도구입니다.',
          },
          {
            type: 'plain-terms',
            text: '모델에게 그림에 무엇이 있는지 알려 주는 그리기 도구라고 생각하면 됩니다. 물체를 클릭하거나 상자를 끌거나 단어를 입력하면 AI가 윤곽을 그리고, 사용자가 이를 고칩니다.',
          },
        ],
        items: [
          '버전 7.11.0이 최신 릴리스(2026년 11월 14일)이고 저장소에 2026년 11월 17일 커밋이 있어, 방치된 프로젝트 경고는 해당되지 않습니다.',
          '독립 실행형 앱을 내려받으려면 무료 labelme.io 계정으로 로그인해야 하며, 라이선스 키를 입력하기 전까지 3일 체험판으로 동작합니다.',
          '오픈소스 패키지는 무료지만 Python 환경 설정이 필요하고, 독립 실행형 앱은 일회성 구매입니다.',
          '개인정보 처리방침에 따르면 앱은 이미지와 어노테이션을 업로드하지 않으며, 모델 가중치는 처음 사용할 때 내려받습니다.',
          'PromptQuorum은 앱을 테스트하지 않았고, 출처에는 RAM이나 GPU 요구 사항이 나와 있지 않습니다.',
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**Labelme는 각 어노테이션을 이미지 옆의 JSON 파일로 저장하는 그래픽 이미지 어노테이션 도구입니다.**',
          '제작사 웹사이트에 따르면 Kentaro Wada가 2016년 도쿄대학 학생이던 시절 첫 버전을 만들었고 지금도 유지보수하고 있습니다. 개인정보 처리방침과 라이선스 계약은 Labelme.io라는 이름으로 사업하는 Kentaro Wada를 운영자로 명시합니다. 저장소는 이 프로젝트를 Python 기반 이미지 어노테이션으로 소개하며 다각형, 사각형, 원, 선, 점 도형을 지원한다고 밝힙니다. README에는 이미지 플래그, 동영상 어노테이션 예제, SAM과 EfficientSAM으로 점에서 다각형을 만드는 AI 보조 어노테이션, YOLO-World와 SAM3를 쓰는 텍스트 기반 어노테이션도 나와 있습니다.',
          '버전 7.11.0은 2026년 11월 14일에 공개되었으며 GitHub 최신 릴리스입니다. pip 패키지 버전 7은 Python 3.12 이상이 필요하고 PySide6(Qt6)를 사용하며, README에 따르면 v6.3.x 계열은 중대한 수정만 받습니다.',
          '제작사는 독립 실행형 앱을 Python 설정을 건너뛰도록 패키징한 같은 Labelme에 AI 에이전트 연동과 데이터셋 내보내기를 더한 것으로 소개합니다. 이는 제작사의 설명입니다. PromptQuorum은 앱을 실행하지 않았고 어노테이션 속도나 모델 품질을 측정하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**가장 쉬운 방법은 macOS, Windows, Linux용 일반 설치 프로그램인 독립 실행형 앱이며, 오픈소스 패키지를 pip으로 설치하는 방법도 있습니다.**',
          '다운로드 페이지에는 Apple Silicon 및 Intel Mac용 .dmg, Microsoft Store 등록 페이지, Windows x64용 .msi 설치 프로그램과 포터블 EXE, Linux x64용 AppImage가 나열되어 있습니다. 설치 가이드는 다운로드에 로그인이 필요하다고 표시합니다. Windows에서 "Windows의 PC 보호" 경고가 나타날 수 있으며, 제작사는 게시자에 "Kentaro Wada"가 포함되어 있는지 확인하고 Windows 보안을 끄지 말라고 안내합니다. GitHub 저장소에는 릴리스 파일이 나열되어 있지 않아(2026년 11월 18일 확인) 설치 프로그램은 labelme.io에서 제공됩니다.',
        ],
        columns: [
          '플랫폼',
          '받는 방법',
        ],
        rows: [
          {
            '플랫폼': '[macOS](https://labelme.io/download)',
            '받는 방법': '.dmg(Apple Silicon 또는 Intel)를 내려받아 응용 프로그램 폴더로 이동',
          },
          {
            '플랫폼': '[Windows](https://labelme.io/download)',
            '받는 방법': 'Microsoft Store, .msi 설치 프로그램 또는 포터블 EXE',
          },
          {
            '플랫폼': '[Linux](https://labelme.io/download)',
            '받는 방법': 'AppImage: 실행 권한을 주고 실행',
          },
          {
            '플랫폼': '[Python](https://github.com/wkentaro/labelme)',
            '받는 방법': '터미널에서 pip install labelme 실행(Python 3.12 이상)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 방법': '[labelme.io](https://labelme.io)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 방법': '[labelme.io/privacy-policy](https://labelme.io/privacy-policy)',
          },
        ],
        note: 'pip 방식은 터미널과 Python 3.12 이상 환경이 필요하며, 독립 실행형 앱은 둘 다 필요하지 않습니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**제작사는 앱의 RAM, GPU, 디스크 요구 사항을 밝히지 않습니다.**',
          '설치 가이드는 Labelme가 지원 종료되지 않은 운영체제 버전을 지원한다고 설명합니다. AI 모델 가중치는 처음 사용할 때 내려받으며 내려받는 크기는 나와 있지 않습니다. 같은 가이드에 따르면 인터넷에 연결되지 않는 컴퓨터를 위한 SAM3 오프라인 팩이 있습니다.',
        ],
        columns: [
          '항목',
          '제시된 수치',
        ],
        rows: [
          {
            '항목': '운영체제',
            '제시된 수치': 'macOS(Apple Silicon, Intel), Windows 64비트, Linux 64비트',
          },
          {
            '항목': 'RAM',
            '제시된 수치': '기재 없음',
          },
          {
            '항목': 'GPU',
            '제시된 수치': '기재 없음',
          },
          {
            '항목': '디스크 및 모델 크기',
            '제시된 수치': '기재 없음, 가중치는 처음 사용 시 다운로드',
          },
          {
            '항목': 'Python(pip 방식)',
            '제시된 수치': 'v7.x는 3.12~3.14(README)',
          },
          {
            '항목': '네트워크',
            '제시된 수치': '로그인 후 다운로드와 모델 다운로드에 필요',
          },
        ],
        note: '제작사에 따르면 라이선스 확인 자체는 오프라인으로 이루어집니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**Labelme는 수동 도형 도구와 AI 초안을 결합하고 모든 결과를 편집 가능한 상태로 둡니다.** 아래 항목은 모두 웹사이트, 변경 내역, README에 나온 제작사의 설명입니다.',
        ],
        items: [
          '일곱 가지 도형 도구: 다각형, 사각형, 회전 사각형, 원, 점, 선, 연결선.',
          'AI 초안: SAM2로 클릭에서 다각형, SAM3로 상자에서 어노테이션과 텍스트에서 어노테이션, YOLO-World로 텍스트 프롬프트 탐지.',
          '제작사가 밝힌 모델: 분할용 SAM, SAM2, SAM3, EfficientSAM과 YOLO-World.',
          '가려진 도형이나 잘린 도형용 플래그, 메모, 도형 잠금, 이미지를 확인 완료로 표시하는 플래그.',
          '이미지마다 옆의 JSON 파일에 자동 저장하며, 이미지 간 이동을 위한 키보드 단축키가 있습니다.',
          '21개 언어 인터페이스.',
          'Pro 전용: ChatGPT, Claude, Claude Code, Codex, Cursor가 열려 있는 이미지의 도형을 읽고, 추가하고, 선택하고, 삭제할 수 있는 MCP 서버. 모든 변경을 사용자가 승인하며, 실행 취소 한 번으로 되돌릴 수 있습니다.',
          'Pro 전용: 일괄 어노테이션, 검토, YOLO, YOLO-OBB, Pascal VOC 내보내기를 위한 10개 이상의 도구로 이루어진 명령줄 데이터셋 툴킷. 터미널에서 실행되며 Python이 필요합니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**개인정보 처리방침에 따르면 앱은 이미지와 어노테이션을 업로드하지 않지만, 여러 기능이 네트워크를 사용합니다.**',
          '2026년 11월 12일에 마지막으로 갱신된 처리방침은 앱이 라이선스 키를 오프라인으로 확인하고 업데이트를 확인하지 않는다고 밝힙니다. 다만 사용자가 선택한 AI 모델을 내려받기 위해서는 온라인으로 연결합니다. 파일은 Cloudflare에 호스팅된 Labelme 서버에서, 대체 경로로는 GitHub 또는 Hugging Face에서 오며, 이들은 사용자의 IP 주소를 볼 수 있습니다.',
          'AI 에이전트를 연결하면 에이전트가 열려 있는 이미지, 그 파일 경로, 어노테이션 파일 경로, 라벨, 각 도형의 라벨, 점, 플래그, 설명을 받는다고 처리방침은 설명합니다. 그 데이터는 에이전트 제공자가 관리하며, 로컬에서 실행되는 에이전트는 데이터를 사용자의 컴퓨터에 남깁니다.',
          '앱 원격 측정은 선택 사항입니다. 앱 실행, 체험 상태, 구매 버튼 클릭, 라이선스 활성화, 예기치 않은 오류가 대상이며 임의의 ID로 PostHog에 전송되고 앱 메뉴에서 끌 수 있습니다. 웹사이트는 Google Analytics와 PostHog를 사용하고, 가입 시 유입 경로 정보가 저장됩니다. 결제는 Paddle이 판매 대행자로서 처리합니다. 운영자는 일본에 기반을 두고 있으며, 위탁 업체는 미국을 포함한 다른 나라에서도 데이터를 처리합니다.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: '가격과 라이선스',
        content: [
          '**오픈소스 패키지는 GPL-3.0으로 무료이고, 독립 실행형 앱은 제작사 라이선스 계약에 따른 일회성 구매입니다.**',
        ],
        items: [
          '오픈소스 패키지: 무료이며 pip으로 설치합니다. 제작사는 어노테이션 도구와 AI 모델이 앱과 같다고 설명합니다.',
          'Pro: 한 번에 79달러(USD)이며 1년간 업데이트가 포함되고, 이후에도 보유한 버전은 계속 작동합니다. 제작사에 따르면 AI 에이전트 연결, 데이터셋 툴킷, 모델 다운로드 미러, 이메일 지원이 추가됩니다.',
          'Pro(Lifetime): 한 번에 249달러(USD)이며 메이저 릴리스를 포함한 모든 향후 업데이트가 포함됩니다.',
          'Team: 5석 이상, 1석당 249달러(USD)이며 좌석은 재배정할 수 있고 견적은 요청 시 제공됩니다.',
          '체험과 환불: 신용카드 없이 3일간 체험(데이터셋 툴킷 제외), 결제 후 14일 이내에 이메일로 요청하면 전액 환불됩니다.',
        ],
        note: 
          '가격은 제작사 가격 페이지에 표시된 미국 달러 기준이며 2026년 11월 18일에 확인했고, 부가가치세가 붙을 수 있습니다. 라이선스 하나는 실명 사용자 1인이 본인의 모든 컴퓨터에서 쓸 수 있고, 내부 어노테이션 작업에 한해 상업적 사용을 허용합니다. 라이선스 계약은 앱의 재판매, 재배포, 리버스 엔지니어링을 금지합니다. 계약은 GPL-3.0이 소스 코드와 PyPI 패키지에 적용되고 계약 자체에는 적용되지 않으며, AI 모델은 별도로 라이선스된다고 밝힙니다. SAM 3는 Meta의 SAM License를 따르며 자체 사용 제한이 있습니다. 준거법은 일본법이고 관할은 도쿄 법원이며, 소비자의 거주지 법원 권리는 예외로 둡니다.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**Labelme는 컴퓨터 비전 모델용 이미지를 어노테이션하며 그 작업을 자신의 컴퓨터에서 하고 싶은 분께 맞습니다.**',
        ],
        items: [
          '이미지를 제3자 어노테이션 서버에 두고 싶지 않은 머신러닝 실무자.',
          '모든 도형을 손으로 그리기보다 AI가 그린 초안 윤곽을 고치는 쪽을 선호하는 어노테이터.',
          'ChatGPT, Claude, Claude Code 에이전트가 도형을 편집하게 하고 싶고, 해당 에이전트 제공자가 데이터를 처리하는 것을 받아들일 수 있는 사용자.',
          '무료 패키지와 터미널로 충분한 Python 사용자.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**Labelme가 맞지 않는 상황도 있으며, 확인하지 못한 세부 사항이 여럿 있습니다.**',
        ],
        items: [
          '적합하지 않음: 작업 대기열이 있는 공유 웹 어노테이션 서버가 필요한 팀. 출처는 1인용 데스크톱 도구를 설명할 뿐 협업 서버는 설명하지 않습니다.',
          '적합하지 않음: 모델 가중치나 오프라인 팩을 미리 구해 둘 수 없는 망 분리 환경.',
          '확인하지 못함: RAM, GPU, 디스크 요구 사항과 모델 다운로드 크기. 어느 것도 기재되어 있지 않습니다.',
          '확인하지 못함: 어노테이션 속도와 AI 모델의 정확도. PromptQuorum은 어느 쪽도 측정하지 않았습니다.',
          '확인하지 못함: Pro 없이 앱이 제공하는 내보내기 형식. README는 오픈소스 기능에 VOC와 COCO 내보내기를 나열하지만, 제작사 사이트는 YOLO, YOLO-OBB, Pascal VOC 내보내기가 Pro 툴킷에 속한다고 설명합니다.',
          '확인하지 못함: 홈페이지의 수치(유료 라이선스 920건 이상, 리뷰 146건 평점 4.9)는 제작사 자체 주장이며 확인하지 않았습니다.',
          '확인하지 못함: 에이전트 연결이 나열된 모든 에이전트에서 작동하는지, 그리고 특정 Linux 배포판에서 AppImage가 어떻게 동작하는지.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Labelme와 대안 비교',
        itemHeadings: true,
        content: [
          '**Labelme는 1인용 데스크톱 어노테이션 도구입니다. PromptQuorum은 아래 대안들과 직접 비교해 보지 않았습니다.** 대안의 정보는 각 GitHub 설명에서 가져왔으며 2026년 11월 18일에 확인했습니다.',
        ],
        columns: [
          '도구',
          '출처에 기재된 내용',
        ],
        rows: [
          {
            '도구': 'Labelme',
            '출처에 기재된 내용': '데스크톱 앱, GPL-3.0 패키지와 유료 앱',
          },
          {
            '도구': '[CVAT](https://www.cvat.ai)',
            '출처에 기재된 내용': 'MIT, 이미지·영상·오디오·3D 어노테이션 플랫폼',
          },
          {
            '도구': '[Label Studio](https://labelstud.io)',
            '출처에 기재된 내용': 'Apache-2.0, 다양한 데이터 유형 라벨링 도구',
          },
          {
            '도구': '[X-AnyLabeling](https://xanylabeling.com)',
            '출처에 기재된 내용': 'GPL-3.0, 크로스 플랫폼 데스크톱 어노테이션 앱',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '1년간의 업데이트 기간이 끝나면 어떻게 됩니까?',
            a: 
              '작동이 멈추는 것은 없습니다. 업데이트 기간 중 나온 모든 릴리스를 계속 사용할 수 있고, 앱은 라이선스 키를 오프라인으로 확인합니다. 제작사에 따르면 1년을 더 구매하거나 평생 플랜을 선택할 수 있습니다.',
          },
          {
            q: '제 이미지가 제 컴퓨터 밖으로 나갑니까?',
            a: '개인정보 처리방침에 따르면 앱 자체로는 나가지 않습니다. 모델 가중치는 내려받으며, 연결한 AI 에이전트는 로컬에서 실행되지 않는 한 데이터를 제공자에게 보낼 수 있습니다.',
          },
          {
            q: '인터넷 연결 없이 Labelme를 쓸 수 있습니까?',
            a: 
              '모델을 내려받은 뒤에는 오프라인으로 작동한다고 제작사는 밝힙니다. 망 분리 컴퓨터의 경우, 연결된 컴퓨터에서 모델을 먼저 내려받거나 지원팀에 오프라인 팩을 요청하라고 안내합니다.',
          },
          {
            q: '어떤 AI 에이전트를 연결할 수 있습니까?',
            a: 
              '제작사는 ChatGPT, Claude, Claude Code, Codex, Cursor를 제시하며, Pro 앱의 파일 메뉴에서 AI 에이전트 연결을 선택해 연결합니다. 변경 내역에 따르면 모든 변경을 사용자가 승인합니다.',
          },
          {
            q: '독립 실행형 앱은 오픈소스입니까?',
            a: '아니요. 소스 코드와 PyPI 패키지는 GPL-3.0이지만, 앱은 재배포와 리버스 엔지니어링을 금지하는 제작사 라이선스 계약에 따라 배포됩니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**컴퓨터 비전 모델용 이미지를 어노테이션하면서 작업과 AI 모델을 자신의 컴퓨터에 두고 싶다면 Labelme는 써 볼 만합니다.**',
          '2016년 첫 버전이 나온 오랜 이력이 있고, 저장소에는 2026년 11월 17일 커밋이 있습니다. 무료 오픈소스 경로, 제작사 설명에 따른 오프라인 AI 초안, 일반 JSON 출력도 제공합니다. 유료 앱은 Python 설정을 없애 줍니다.',
          '절충점도 분명합니다. 한 사람이 한 대의 데스크톱에서 쓰는 도구이고 협업 기능은 설명되어 있지 않습니다. 하드웨어 요구 사항과 속도는 확인하지 못했고, 다운로드에는 로그인이 필요하며, 에이전트 기능은 이미지 데이터를 클라우드 제공자에게 넘길 수 있습니다. PromptQuorum은 앱을 테스트하지 않았으므로 구매 전에 체험판이나 pip 패키지로 이미지 몇 장을 먼저 시험해 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Labelme 웹사이트](https://labelme.io) — 앱, AI 모델, 에이전트, 오프라인 사용에 대한 제작사의 설명, 2026년 11월 18일 확인.',
          '[가격 페이지](https://labelme.io/pricing) — 플랜, 가격, 체험, 환불, 라이선스 조건, 2026년 11월 18일 확인.',
          '[다운로드 페이지](https://labelme.io/download) — 운영체제별 다운로드, 버전 7.11.0, Windows 안내, 2026년 11월 18일 확인.',
          '[설치 가이드](https://www.labelme.io/docs/install-labelme-app) — 설치 단계, 로그인, 체험, 모델 다운로드, 오프라인 팩, 2026년 11월 18일 확인.',
          '[변경 내역](https://labelme.io/changelog) — Pro의 AI 에이전트 기능과 도형 도구, 2026년 11월 18일 확인.',
          '[개인정보 처리방침](https://labelme.io/privacy-policy) — 데이터 흐름, 원격 측정, 에이전트, 일본에 기반을 둔 운영자, 2026년 11월 18일 확인.',
          '[라이선스 계약](https://labelme.io/eula) — 라이선스 범위, 제한, 모델 라이선스, 준거법, 2026년 11월 18일 확인.',
          '[소개 페이지](https://labelme.io/about) — 제작자 배경과 오픈소스 역사, 2026년 11월 18일 확인.',
          '[Labelme GitHub 저장소](https://github.com/wkentaro/labelme) — 프로젝트 설명, GPL-3.0 라이선스, 최근 커밋, README, 2026년 11월 18일 확인.',
          '[릴리스 v7.11.0](https://github.com/wkentaro/labelme/releases/tag/v7.11.0) — 최신 릴리스 버전과 날짜, 2026년 11월 18일 확인.',
          '[CVAT 저장소](https://github.com/cvat-ai/cvat), [Label Studio 저장소](https://github.com/HumanSignal/label-studio), [X-AnyLabeling 저장소](https://github.com/CVHub520/X-AnyLabeling) — 대안의 라이선스와 설명, 2026년 11월 18일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Unsloth 리뷰](/ko/power-local-llm/unsloth-review) — LLM, 이미지, 오디오를 위한 무료 파인튜닝으로, 데이터 준비 다음에 흔히 거치는 단계입니다.',
          '[LLaMA-Factory 리뷰](/ko/power-local-llm/llama-factory-review) — 웹 UI로 100개 이상의 LLM을 파인튜닝합니다.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}

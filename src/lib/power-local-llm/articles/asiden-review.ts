// Asiden Review: Windows 11 AI Desktop Companion With Local and Optional Cloud AI
// Slug: asiden-review
// Companion to: backyard-ai-review-local-roleplay, risuai-review, castmates-review, sillytavern-vs-agnai-vs-risuai-roleplay
// Sources: asiden.ai (home page with download block and changelog, /pricing/, /system-requirements/, /how-it-works/, /privacy/, /terms/, /safety/),
// the installer's HTTP response headers at downloads.asiden.ai (size 4,089,671,512 bytes, Last-Modified 2026-10-18) and the Steam store page
// (store.steampowered.com/app/5130370, "Coming soon") — read 2026-10-24. The Itch.io listing sat behind a Cloudflare challenge and was not read.
// No hands-on use. Owner request, not a maker comment: no founder block, no founderReviewedDate.
// Last upstream update 2026-10-18 (v0.32.2) => no stale warning. Locality: hybrid (local by default, optional managed cloud via the maker's proxy).
// Version note: the changelog renders "v0.32.2" directly followed by "18 October 2026"; plain-text extraction reads "v0.32.218". It is v0.32.2 + day 18.
// Prices are USD only on the maker's site (no per-storefront prices exist), so all locales keep USD.
// Generated from per-locale data following docs/geo-translation.md (geo-translation: APPLIED).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-24",
    "dateModified": "2026-10-24",
    "next_refresh_due": "2027-04-24",
    "theme": "Creative & Roleplay",
    "heroImage": "/images/asiden-review-hero-en.webp",
    "title": "Asiden Review: Windows 11 AI Desktop Companion With Local and Optional Cloud AI",
    "seoTitle": "Asiden Review: Windows 11 AI Companion, Local or Cloud",
    "intro": "Asiden is an early-access AI desktop companion for Windows 11 from Asiden Labs Ltd, which its site describes as a solo developer. According to the maker, chat, memory, voice and screen vision run locally on an NVIDIA GPU, with optional paid cloud AI. This review reflects asiden.ai, its pricing, privacy and safety pages and its changelog, as checked on 24 October 2026.",
    "metaDescription": "Asiden review: Windows 11 AI desktop companion with 3D and Live2D characters, local chat and memory, and optional cloud AI. What is unverified.",
    "twitterDescription": "Asiden review: a closed-source Windows 11 AI companion for NVIDIA GPUs. What runs locally, what the optional cloud plans send off the PC, what it costs and what is unverified.",
    "audience": "Windows 11 users with an NVIDIA GPU who want to know what Asiden costs, what stays on the PC, what the cloud plans add and which claims the sources support.",
    "readTime": "6 min read",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Asiden review",
    "targetKeywords": [
      "asiden review",
      "asiden ai companion",
      "ai desktop companion windows 11",
      "local ai companion nvidia gpu",
      "ai companion with screen vision",
      "live2d ai companion windows",
      "asiden vs backyard ai"
    ],
    "current_models_mentioned": [
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "NVIDIA GPU",
      "Windows 11 PC"
    ],
    "leadAnswerBlock": "**Asiden is a closed-source, early-access Windows 11 companion app with 3D and Live2D characters that, according to its maker, keeps chat and memory on your PC by default.** **Local mode needs an NVIDIA GPU with 8 GB of VRAM, and the optional cloud features send data off the PC.**",
    "quickAnswerTop": {
      "en": {
        "question": "Does Asiden keep my conversations on my PC?",
        "answer": "According to the maker, yes in local mode: conversations, memories and on-screen context stay on the PC, and a cloud route is used only if you switch one on. Nothing was tested here.",
        "bullets": [
          "Windows 11 64-bit only, with a signed installer from [asiden.ai](https://asiden.ai); no Mac, Linux, phone or Windows 10 version.",
          "Local mode needs an NVIDIA GPU, 16 GB of RAM and a 4-19 GB model download on first run.",
          "The app is a one-off purchase; Plus and Premium cloud plans are optional monthly subscriptions."
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "Quick Answer",
        "anchor": "quick-answer"
      },
      {
        "label": "What Is Asiden?",
        "anchor": "what-is-asiden"
      },
      {
        "label": "Where Your Chats Run",
        "anchor": "where-it-runs"
      },
      {
        "label": "Get It",
        "anchor": "get-it"
      },
      {
        "label": "Pricing",
        "anchor": "pricing"
      },
      {
        "label": "Features Listed by the Developer",
        "anchor": "key-features"
      },
      {
        "label": "Privacy Policy and Data Flow",
        "anchor": "privacy"
      },
      {
        "label": "Who Should Use It",
        "anchor": "who-should-use"
      },
      {
        "label": "What We Could Not Verify",
        "anchor": "who-should-not-use"
      },
      {
        "label": "Competitors and Alternatives",
        "anchor": "vs-alternatives"
      },
      {
        "label": "Frequently Asked Questions",
        "anchor": "faq"
      },
      {
        "label": "Verdict",
        "anchor": "verdict"
      },
      {
        "label": "Sources",
        "anchor": "sources"
      },
      {
        "label": "Related Reading",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "TL;DR",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Asiden is a closed-source Windows 11 desktop companion that shows a 3D or Live2D character, remembers what you tell it and can look at your screen when you allow it."
          },
          {
            "type": "plain-terms",
            "text": "You buy a licence key, install a large signed Windows program, and it downloads one local language model sized for your graphics card. After setup, chat, memory, speech and screen vision can work offline; paid cloud plans add hosted models."
          }
        ],
        "items": [
          "Maker: Asiden Labs Ltd, a company registered in England and Wales, described on its own site as a solo developer; the product is early-access software.",
          "Pace: the changelog runs from version 0.24.0 on 7 September 2026 to version 0.32.2 on 18 October 2026.",
          "Characters: four signature companions (Mei, Lily, Jae and Sasha), ten further personality presets and a custom personality wizard; Lily and Sasha also have Live2D looks.",
          "Steam: a store page exists but lists the release as coming soon; the website and Itch.io editions can be bought now."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "This review is based on asiden.ai and its linked legal pages, the download server's response headers and the Steam store page, checked on 24 October 2026. It involved no hands-on use, network inspection or benchmarking."
          }
        ]
      },
      "overview": {
        "id": "what-is-asiden",
        "title": "What Is Asiden?",
        "content": [
          "**Asiden is a desktop companion for Windows 11: a named character that sits on your desktop, talks by text or voice, builds memories over time and can look at your screen when you choose.** The site presents four signature companions, Mei, Lily, Jae and Sasha, each with a short personality sketch, plus ten further personality presets and a wizard for writing your own.",
          "The maker is Asiden Labs Ltd (company number 17312549, registered in England and Wales). The app is for adults aged 18 or over; the safety page says it uses age self-certification, not age verification, and the terms prohibit explicit sexual content."
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "Where Your Chats Run",
        "content": [
          "**By default Asiden runs on your PC: the maker says local chat, memory, speech and screen vision keep your conversations and on-screen context on the machine, and cloud models are optional.**"
        ],
        "items": [
          "**Local model.** On first run the app measures your GPU and recommends one Gemma model for both chat and screen vision. The download is roughly 4-19 GB, and activation and that download need an internet connection.",
          "**Offline.** After activation and setup the maker says local chat, memories, voice and vision keep working without a connection; updates, downloads and web searches still need one.",
          "**Local voice and video.** Version 0.31.0 (9 October 2026) added Pocket, 23 male and female voices that run locally; version 0.26.0 added local video analysis with a compatible Gemma model.",
          "**Cloud, optional.** Plus and Premium add hosted chat, voice, vision and video, paid in Sparks; the privacy section below covers what those requests send."
        ],
        "note": "The site says performance depends on your PC and workload, and a large local model and a demanding game compete for the same graphics card. This review did not test speed, VRAM use or the effect on games."
      },
      "getIt": {
        "id": "get-it",
        "title": "Get It",
        "columns": [
          "Platform",
          "Where to get it"
        ],
        "rows": [
          {
            "Platform": "Windows 11 (64-bit)",
            "Where to get it": "[Signed installer](https://asiden.ai/#download), 4.09 GB; paid licence key needed"
          },
          {
            "Platform": "Steam",
            "Where to get it": "[Store page](https://store.steampowered.com/app/5130370/Asiden/) (release listed as coming soon)"
          },
          {
            "Platform": "Itch.io",
            "Where to get it": "[Itch.io page](https://daf1.itch.io/asiden) (linked from the site; not opened here)"
          },
          {
            "Platform": "Other systems",
            "Where to get it": "No Windows 10, Mac, Linux or phone version (per the site)"
          },
          {
            "Platform": "Minimum PC",
            "Where to get it": "16 GB RAM, NVIDIA GPU with 8 GB VRAM, 25 GB free"
          },
          {
            "Platform": "Recommended PC",
            "Where to get it": "32 GB RAM, NVIDIA GPU with 16 GB VRAM, 40 GB free"
          },
          {
            "Platform": "Website",
            "Where to get it": "[asiden.ai](https://asiden.ai)"
          },
          {
            "Platform": "Privacy policy",
            "Where to get it": "[Privacy Notice](https://asiden.ai/privacy/) (updated 8 October 2026)"
          }
        ],
        "note": "Version reviewed: 0.32.2, released on 18 October 2026, the newest changelog entry (a code-signing fix). The installer on the download server carries the same date, so this is the app's most recent update and no stale warning applies. Setup needs an internet connection; the published GPU requirement is NVIDIA, and the site says the app checks your hardware on first run."
      },
      "pricing": {
        "id": "pricing",
        "title": "Pricing",
        "content": [
          "**The app costs $10 once during early access: a purchase, not a subscription or trial, with unlimited local conversations afterwards.** The site calls this the early-access price and says it may change, while what you have already bought stays bought.",
          "Plus ($15 per month, 1,250 Sparks per paid renewal) and Premium ($30 per month, 3,000 Sparks) are optional and add managed cloud chat, voice, vision and video. Sparks pay for those cloud features; local use does not spend them. Paid cloud plans are capped at 100 subscribers during early access, and the site lists prices in US dollars only.",
          "The Steam edition is described as using prepaid Sparks bought through Steam instead of the website plans, and an Itch.io purchase already covers the local app."
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Features Listed by the Developer",
        "content": [
          "**Everything below comes from asiden.ai and its changelog; none of it was tested.**"
        ],
        "items": [
          "**Characters.** 3D models, Live2D looks for Lily and Sasha (version 0.32.0, 17 October 2026) and imported VRM models; appearance, personality and memories are separate settings.",
          "**Memory.** Distilled memories saved on your drive that you can inspect, correct, add to and reset per companion; the site warns that recall is not guaranteed to be correct.",
          "**Screen awareness.** Optional: snip a region or switch on ongoing vision in Settings. The site mentions game recognition and downloadable game wiki packs, with coverage varying by game.",
          "**Proactive chat.** Proactive Chattiness runs from Reserved to Non-stop, and Pause stops the companion listening, watching and replying.",
          "**Voice.** Push-to-talk or hands-free microphone input; cloud studio voices are limited to 30,000 characters per account each calendar month, and local voices remain available."
        ],
        "note": "The installed build is the final authority on what works."
      },
      "privacy": {
        "id": "privacy",
        "title": "Privacy Policy and Data Flow",
        "content": [
          "**The privacy notice (last updated 8 October 2026) says Asiden is local by default: local chat, memory and screen context stay on your PC, and information leaves it only when you choose a networked feature such as activation, purchase, cloud chat, cloud voice or cloud vision.**",
          "Managed cloud requests go through the maker's proxy, hosted on Microsoft Azure in the UK, to Venice AI or OpenRouter and a downstream model provider; cloud speech goes to ElevenLabs. The notice says the proxy is designed not to save prompt or reply content and that conversation content is not used to train the maker's own models, but also that this is not end-to-end encryption and that providers apply their own retention. A cloud request can include relevant saved memories and, if you enabled it, a selected screenshot. Local screen vision is off until you enable it, and cloud vision is off by default."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Asiden is closed source, so none of this can be checked in code, and PromptQuorum has not inspected network traffic. Companion chats can be personal: read what a cloud request can contain in the notice before switching cloud features on."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Who Should Use It",
        "items": [
          "**Windows 11 gamers and desktop users with an NVIDIA GPU of 8 GB VRAM or more** who want a character that comments on what they play or work on.",
          "**People who want local-first chat and memory** without a per-message fee and accept early-access software.",
          "**Users with weaker hardware who are comfortable with cloud AI** and would use Plus or Premium instead of the local model."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "What We Could Not Verify",
        "items": [
          "**Hands-on behavior.** Answer quality, voice quality, speed, VRAM use, offline operation and the effect on games were not tested.",
          "**Privacy in practice.** The statements come from the maker's notice and site; no network traffic was inspected and no independent audit was found.",
          "**AMD and Intel graphics.** The published requirement is an NVIDIA GPU; the site says only that the app measures your hardware on first run.",
          "**Itch.io listing.** It is linked from the site, but the page sat behind a bot check and was not read.",
          "**Steam edition.** The store page lists the release as coming soon, so the Steam version and its credit system cannot be checked yet.",
          "**Source and signing.** The app is closed source with no public repository; the installer is described as signed with a published checksum, but neither was verified here.",
          "**Safety features.** The safety page describes on-device crisis checks and a fixed response; how well they work was not tested, and the app is not a therapist or an emergency service."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "Competitors and Alternatives",
        "columns": [
          "App",
          "Platforms",
          "Price / license",
          "Key difference"
        ],
        "rows": [
          {
            "App": "[Backyard AI](/power-local-llm/backyard-ai-review-local-roleplay)",
            "Platforms": "Windows, macOS",
            "Price / license": "Freemium / Closed source",
            "Key difference": "Local character chat and roleplay desktop client"
          },
          {
            "App": "[RisuAI](/power-local-llm/risuai-review)",
            "Platforms": "Web, Windows, macOS, Linux",
            "Price / license": "Free / GPL 3.0",
            "Key difference": "Open-source roleplay chat frontend"
          },
          {
            "App": "[Castmates](/power-local-llm/castmates-review)",
            "Platforms": "iOS",
            "Price / license": "Freemium / Closed source",
            "Key difference": "Offline character chat on the iPhone"
          }
        ],
        "note": "Competitor details change often; confirm each app's current price, license and platforms on its own listing."
      },
      "faq": {
        "id": "faq",
        "title": "Frequently Asked Questions",
        "faqs": [
          {
            "q": "Can I use Asiden without a subscription?",
            "a": "Yes. The subscriptions only unlock managed cloud features, and the maker says cancelling leaves the app, local mode and your memories on your PC. Relevant memories may already have been included in past cloud requests."
          },
          {
            "q": "Is Asiden on Steam?",
            "a": "A Steam page exists but lists the release as coming soon. It describes a buy-once edition with optional prepaid cloud credits."
          },
          {
            "q": "Is Asiden suitable for children?",
            "a": "No. The maker says it is for adults aged 18 or over and relies on self-certification, not age verification."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Asiden is a young, frequently updated Windows 11 companion whose pitch is local chat and memory for a one-off price, with paid cloud AI as an option. Its limits are early-access status, a solo developer, closed source, an NVIDIA-only local mode, a very large download, and privacy and safety statements that come from the maker. It suits NVIDIA-equipped Windows users who want to try a persistent companion; anyone who needs open source or other platforms should compare [RisuAI](/power-local-llm/risuai-review) or [Backyard AI](/power-local-llm/backyard-ai-review-local-roleplay)."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Asiden website](https://asiden.ai) — product description, download block, requirements and changelog, checked 24 October 2026.",
          "[Asiden pricing](https://asiden.ai/pricing/) — app price, Plus and Premium plans, Sparks and early-access limits; updated 17 October 2026.",
          "[Asiden system requirements](https://asiden.ai/system-requirements/) — minimum and recommended PC and the first-run download; updated 10 September 2026.",
          "[Asiden Privacy Notice](https://asiden.ai/privacy/) — local and cloud data flow, providers and retention; last updated 8 October 2026.",
          "[Asiden Safety and Crisis Protocol](https://asiden.ai/safety/) — adult-only use and crisis handling; version 1.0, 1 August 2026.",
          "[Asiden Terms of Use](https://asiden.ai/terms/) — licence terms, version 2.11, 17 October 2026.",
          "[Asiden on Steam](https://store.steampowered.com/app/5130370/Asiden/) — store page showing the release as coming soon, checked 24 October 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[Backyard AI Review](/power-local-llm/backyard-ai-review-local-roleplay) — a local desktop client for character chat and roleplay.",
          "[RisuAI Review](/power-local-llm/risuai-review) — an open-source roleplay chat frontend.",
          "[Castmates Review](/power-local-llm/castmates-review) — an offline AI character chat app for the iPhone.",
          "[SillyTavern vs Agnai vs RisuAI](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — a comparison of local roleplay frontends."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Asiden Review: Windows 11 AI Desktop Companion With Local and Optional Cloud AI",
      "description": "Asiden review: a closed-source Windows 11 AI companion for NVIDIA GPUs. What runs locally, what the optional cloud plans send off the PC, what it costs and what is unverified.",
      "url": "https://www.promptquorum.com/power-local-llm/asiden-review",
      "inLanguage": "en",
      "datePublished": "2026-10-24",
      "dateModified": "2026-10-24",
      "author": {
        "@type": "Person",
        "name": "Hans Kuepper",
        "sameAs": "https://www.linkedin.com/in/hanskuepper/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "educationalLevel": "Beginner",
      "proficiencyLevel": "Beginner",
      "audience": {
        "@type": "Audience",
        "audienceType": "Windows 11 users evaluating a local AI desktop companion"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Asiden"
        },
        {
          "@type": "Thing",
          "name": "AI companion"
        },
        {
          "@type": "Thing",
          "name": "Windows 11"
        }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/power-local-llm/asiden-review"
      }
    },
    "breadcrumbSchema": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.promptquorum.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Power Local LLM",
          "item": "https://www.promptquorum.com/power-local-llm"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Asiden Review",
          "item": "https://www.promptquorum.com/power-local-llm/asiden-review"
        }
      ]
    }
  },
  de: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-24",
    "dateModified": "2026-10-24",
    "next_refresh_due": "2027-04-24",
    "theme": "Creative & Roleplay",
    "heroImage": "/images/asiden-review-hero-de.webp",
    "title": "Asiden-Rezension: KI-Desktop-Begleiter für Windows 11 mit lokaler und optionaler Cloud-KI",
    "seoTitle": "Asiden-Rezension: KI-Begleiter für Windows 11, lokal",
    "intro": "Asiden ist ein KI-Desktop-Begleiter für Windows 11 im Early Access von Asiden Labs Ltd, das sich auf seiner Website als Einzelentwickler beschreibt. Laut Hersteller laufen Chat, Gedächtnis, Stimme und Bildschirmverständnis lokal auf einer NVIDIA-GPU, optional mit kostenpflichtiger Cloud-KI. Diese Rezension gibt asiden.ai, die Seiten zu Preisen, Datenschutz und Sicherheit sowie das Änderungsprotokoll wieder, wie am 24. Oktober 2026 geprüft.",
    "metaDescription": "Asiden-Rezension: KI-Desktop-Begleiter für Windows 11 mit 3D- und Live2D-Figuren, lokalem Chat und Gedächtnis, optional Cloud-KI. Was ungeprüft bleibt.",
    "twitterDescription": "Asiden-Rezension: ein nicht quelloffener KI-Begleiter für Windows 11 mit NVIDIA-GPU. Was lokal läuft, was die optionalen Cloud-Tarife vom PC senden, was er kostet und was ungeprüft ist.",
    "audience": "Windows-11-Nutzer mit NVIDIA-GPU, die wissen möchten, was Asiden kostet, was auf dem PC bleibt, was die Cloud-Tarife hinzufügen und welche Angaben die Quellen stützen.",
    "readTime": "6 Min. Lesezeit",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Asiden Rezension",
    "targetKeywords": [
      "asiden test",
      "asiden ki begleiter",
      "ki desktop begleiter windows 11",
      "lokaler ki begleiter nvidia gpu",
      "ki begleiter mit bildschirmerkennung",
      "live2d ki begleiter windows",
      "asiden vs backyard ai"
    ],
    "current_models_mentioned": [
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "NVIDIA GPU",
      "Windows 11 PC"
    ],
    "leadAnswerBlock": "**Asiden ist eine nicht quelloffene Windows-11-Begleiter-App im Early Access mit 3D- und Live2D-Figuren, die laut Hersteller Chat und Gedächtnis standardmäßig auf Ihrem PC hält.** **Der lokale Modus braucht eine NVIDIA-GPU mit 8 GB VRAM, und die optionalen Cloud-Funktionen senden Daten vom PC weg.**",
    "quickAnswerTop": {
      "de": {
        "question": "Bleiben meine Gespräche bei Asiden auf meinem PC?",
        "answer": "Laut Hersteller ja, im lokalen Modus: Gespräche, Erinnerungen und Bildschirmkontext bleiben auf dem PC, und eine Cloud-Route wird nur genutzt, wenn Sie sie einschalten. Hier wurde nichts getestet.",
        "bullets": [
          "Nur Windows 11 (64 Bit), mit signiertem Installer von [asiden.ai](https://asiden.ai); keine Version für Mac, Linux, Smartphone oder Windows 10.",
          "Der lokale Modus braucht eine NVIDIA-GPU, 16 GB RAM und beim ersten Start einen Modell-Download von 4-19 GB.",
          "Die App ist ein Einmalkauf; die Cloud-Tarife Plus und Premium sind optionale Monatsabos."
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "Kurzantwort",
        "anchor": "quick-answer"
      },
      {
        "label": "Was ist Asiden?",
        "anchor": "what-is-asiden"
      },
      {
        "label": "Wo Ihre Chats laufen",
        "anchor": "where-it-runs"
      },
      {
        "label": "Bezugsquelle",
        "anchor": "get-it"
      },
      {
        "label": "Preise",
        "anchor": "pricing"
      },
      {
        "label": "Vom Entwickler genannte Funktionen",
        "anchor": "key-features"
      },
      {
        "label": "Datenschutzerklärung und Datenfluss",
        "anchor": "privacy"
      },
      {
        "label": "Für wen sich die App eignet",
        "anchor": "who-should-use"
      },
      {
        "label": "Was wir nicht überprüfen konnten",
        "anchor": "who-should-not-use"
      },
      {
        "label": "Wettbewerber und Alternativen",
        "anchor": "vs-alternatives"
      },
      {
        "label": "Häufig gestellte Fragen",
        "anchor": "faq"
      },
      {
        "label": "Fazit",
        "anchor": "verdict"
      },
      {
        "label": "Quellen",
        "anchor": "sources"
      },
      {
        "label": "Weiterführende Artikel",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "Zusammenfassung",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Asiden ist ein nicht quelloffener Desktop-Begleiter für Windows 11, der eine 3D- oder Live2D-Figur zeigt, sich merkt, was Sie ihm erzählen, und auf Wunsch Ihren Bildschirm ansehen kann."
          },
          {
            "type": "plain-terms",
            "text": "Sie kaufen einen Lizenzschlüssel, installieren ein großes signiertes Windows-Programm, und es lädt ein lokales Sprachmodell passend zu Ihrer Grafikkarte herunter. Nach der Einrichtung können Chat, Gedächtnis, Sprache und Bildschirmverständnis offline laufen; kostenpflichtige Cloud-Tarife ergänzen gehostete Modelle."
          }
        ],
        "items": [
          "Hersteller: Asiden Labs Ltd, eine in England und Wales eingetragene Gesellschaft, auf der eigenen Website als Einzelentwickler beschrieben; das Produkt ist Early-Access-Software.",
          "Tempo: Das Änderungsprotokoll reicht von Version 0.24.0 am 7. September 2026 bis Version 0.32.2 am 18. Oktober 2026.",
          "Figuren: vier Haupt-Begleiter (Mei, Lily, Jae und Sasha), zehn weitere Persönlichkeitsvorlagen und ein Assistent für eigene Persönlichkeiten; Lily und Sasha gibt es auch als Live2D-Varianten.",
          "Steam: Eine Store-Seite existiert, nennt die Veröffentlichung aber als „demnächst“; die Editionen von der Website und von Itch.io lassen sich schon kaufen."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Diese Rezension beruht auf asiden.ai und den verlinkten Rechtstexten, den Antwort-Headern des Download-Servers und der Steam-Store-Seite, geprüft am 24. Oktober 2026. Es gab keine praktische Nutzung, keine Netzwerkprüfung und keine Benchmarks."
          }
        ]
      },
      "overview": {
        "id": "what-is-asiden",
        "title": "Was ist Asiden?",
        "content": [
          "**Asiden ist ein Desktop-Begleiter für Windows 11: eine benannte Figur, die auf Ihrem Desktop sitzt, per Text oder Stimme spricht, mit der Zeit Erinnerungen aufbaut und auf Wunsch Ihren Bildschirm ansehen kann.** Die Website stellt vier Haupt-Begleiter vor, Mei, Lily, Jae und Sasha, jeweils mit einer kurzen Persönlichkeitsskizze, dazu zehn weitere Persönlichkeitsvorlagen und einen Assistenten, mit dem Sie eine eigene schreiben.",
          "Hersteller ist Asiden Labs Ltd (Handelsregisternummer 17312549, eingetragen in England und Wales). Die App richtet sich an Erwachsene ab 18 Jahren; laut Sicherheitsseite gibt es eine Selbstauskunft zum Alter statt einer Altersprüfung, und die Nutzungsbedingungen untersagen explizite sexuelle Inhalte."
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "Wo Ihre Chats laufen",
        "content": [
          "**Standardmäßig läuft Asiden auf Ihrem PC: Laut Hersteller halten lokaler Chat, Gedächtnis, Sprache und Bildschirmverständnis Ihre Gespräche und den Bildschirmkontext auf dem Rechner, Cloud-Modelle sind optional.**"
        ],
        "items": [
          "**Lokales Modell.** Beim ersten Start misst die App Ihre GPU und empfiehlt ein Gemma-Modell für Chat und Bildschirmverständnis zugleich. Der Download umfasst etwa 4-19 GB, und für Aktivierung und Download ist eine Internetverbindung nötig.",
          "**Offline.** Nach Aktivierung und Einrichtung funktionieren laut Hersteller lokaler Chat, Erinnerungen, Stimme und Bildverständnis ohne Verbindung; Updates, Downloads und Websuchen brauchen weiterhin eine.",
          "**Lokale Stimme und Video.** Version 0.31.0 (9. Oktober 2026) brachte Pocket, 23 männliche und weibliche Stimmen, die lokal laufen; Version 0.26.0 brachte lokale Videoanalyse mit einem kompatiblen Gemma-Modell.",
          "**Cloud, optional.** Plus und Premium ergänzen gehosteten Chat, Stimme, Bildverständnis und Video, bezahlt mit Sparks; was diese Anfragen senden, steht im Abschnitt zum Datenschutz weiter unten."
        ],
        "note": "Laut Website hängt die Leistung von Ihrem PC und Ihrer Auslastung ab, und ein großes lokales Modell und ein anspruchsvolles Spiel teilen sich dieselbe Grafikkarte. Diese Rezension hat weder Geschwindigkeit noch VRAM-Verbrauch oder die Auswirkung auf Spiele getestet."
      },
      "getIt": {
        "id": "get-it",
        "title": "Bezugsquelle",
        "columns": [
          "Plattform",
          "Bezugsquelle"
        ],
        "rows": [
          {
            "Plattform": "Windows 11 (64 Bit)",
            "Bezugsquelle": "[Signierter Installer](https://asiden.ai/#download), 4,09 GB; kostenpflichtiger Lizenzschlüssel nötig"
          },
          {
            "Plattform": "Steam",
            "Bezugsquelle": "[Store-Seite](https://store.steampowered.com/app/5130370/Asiden/) (Veröffentlichung „demnächst“)"
          },
          {
            "Plattform": "Itch.io",
            "Bezugsquelle": "[Itch.io-Seite](https://daf1.itch.io/asiden) (von der Website verlinkt; hier nicht geöffnet)"
          },
          {
            "Plattform": "Andere Systeme",
            "Bezugsquelle": "Keine Version für Windows 10, Mac, Linux oder Smartphone (laut Website)"
          },
          {
            "Plattform": "Mindest-PC",
            "Bezugsquelle": "16 GB RAM, NVIDIA-GPU mit 8 GB VRAM, 25 GB frei"
          },
          {
            "Plattform": "Empfohlener PC",
            "Bezugsquelle": "32 GB RAM, NVIDIA-GPU mit 16 GB VRAM, 40 GB frei"
          },
          {
            "Plattform": "Website",
            "Bezugsquelle": "[asiden.ai](https://asiden.ai)"
          },
          {
            "Plattform": "Datenschutzerklärung",
            "Bezugsquelle": "[Datenschutzhinweis](https://asiden.ai/privacy/) (Stand 8. Oktober 2026)"
          }
        ],
        "note": "Geprüfte Version: 0.32.2, veröffentlicht am 18. Oktober 2026, der neueste Eintrag im Änderungsprotokoll (eine Korrektur der Codesignatur). Der Installer auf dem Download-Server trägt dasselbe Datum; das ist also das jüngste Update der App, und es gilt keine Warnung vor fehlender Pflege. Die Einrichtung braucht eine Internetverbindung; als GPU-Anforderung ist NVIDIA veröffentlicht, und laut Website prüft die App beim ersten Start Ihre Hardware."
      },
      "pricing": {
        "id": "pricing",
        "title": "Preise",
        "content": [
          "**Die App kostet im Early Access einmalig 10 $: ein Kauf, kein Abo und keine Testversion, danach mit unbegrenzten lokalen Gesprächen.** Die Website nennt das den Early-Access-Preis und weist darauf hin, dass er sich ändern kann, während bereits Gekauftes gekauft bleibt.",
          "Plus (15 $ pro Monat, 1.250 Sparks pro bezahlter Verlängerung) und Premium (30 $ pro Monat, 3.000 Sparks) sind optional und ergänzen verwalteten Cloud-Chat, Stimme, Bildverständnis und Video. Sparks bezahlen diese Cloud-Funktionen; die lokale Nutzung verbraucht keine. Bezahlte Cloud-Tarife sind im Early Access auf 100 Abonnenten begrenzt, und die Website nennt Preise nur in US-Dollar.",
          "Die Steam-Edition soll vorausbezahlte, über Steam gekaufte Sparks statt der Website-Tarife nutzen, und ein Kauf auf Itch.io deckt die lokale App bereits ab."
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Vom Entwickler genannte Funktionen",
        "content": [
          "**Alles Folgende stammt von asiden.ai und aus dem Änderungsprotokoll; nichts davon wurde getestet.**"
        ],
        "items": [
          "**Figuren.** 3D-Modelle, Live2D-Varianten von Lily und Sasha (Version 0.32.0, 17. Oktober 2026) und importierte VRM-Modelle; Aussehen, Persönlichkeit und Erinnerungen sind getrennte Einstellungen.",
          "**Gedächtnis.** Verdichtete Erinnerungen auf Ihrer Festplatte, die Sie pro Begleiter einsehen, korrigieren, ergänzen und zurücksetzen können; die Website warnt, dass korrektes Erinnern nicht garantiert ist.",
          "**Bildschirmverständnis.** Optional: Bereich ausschneiden oder dauerhafte Bilderkennung in den Einstellungen einschalten. Die Website nennt Spielerkennung und ladbare Spiele-Wiki-Pakete, mit je nach Spiel unterschiedlicher Abdeckung.",
          "**Proaktiver Chat.** Die Gesprächigkeit reicht von „Reserviert“ bis „Nonstop“, und „Pause“ hält den Begleiter vom Zuhören, Zusehen und Antworten ab.",
          "**Stimme.** Mikrofoneingabe per Push-to-talk oder freihändig; Cloud-Studiostimmen sind auf 30.000 Zeichen pro Konto und Kalendermonat begrenzt, lokale Stimmen bleiben verfügbar."
        ],
        "note": "Maßgeblich dafür, was funktioniert, ist die installierte Version."
      },
      "privacy": {
        "id": "privacy",
        "title": "Datenschutzerklärung und Datenfluss",
        "content": [
          "**Laut Datenschutzhinweis (zuletzt aktualisiert am 8. Oktober 2026) arbeitet Asiden standardmäßig lokal: Lokaler Chat, Gedächtnis und Bildschirmkontext bleiben auf Ihrem PC, und Informationen verlassen ihn nur, wenn Sie eine Netzwerkfunktion wie Aktivierung, Kauf, Cloud-Chat, Cloud-Stimme oder Cloud-Bildverständnis wählen.**",
          "Verwaltete Cloud-Anfragen laufen über den Proxy des Herstellers, gehostet bei Microsoft Azure im Vereinigten Königreich, zu Venice AI oder OpenRouter und einem nachgelagerten Modellanbieter; Cloud-Sprache geht an ElevenLabs. Laut Hinweis ist der Proxy so gebaut, dass er Prompt- und Antwortinhalte nicht speichert, und Gesprächsinhalte werden nicht zum Training der eigenen Modelle des Herstellers genutzt; zugleich heißt es, dass dies keine Ende-zu-Ende-Verschlüsselung ist und die Anbieter eigene Aufbewahrungsregeln anwenden. Eine Cloud-Anfrage kann relevante gespeicherte Erinnerungen und, falls aktiviert, einen ausgewählten Screenshot enthalten. Lokales Bildverständnis ist aus, bis Sie es einschalten, und Cloud-Bildverständnis ist standardmäßig aus."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Asiden ist nicht quelloffen, daher lässt sich nichts davon im Code prüfen, und PromptQuorum hat den Netzwerkverkehr nicht untersucht. Gespräche mit einem Begleiter können persönlich sein: Lesen Sie im Hinweis nach, was eine Cloud-Anfrage enthalten kann, bevor Sie Cloud-Funktionen einschalten."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Für wen sich die App eignet",
        "items": [
          "**Windows-11-Spieler und Desktop-Nutzer mit NVIDIA-GPU ab 8 GB VRAM**, die eine Figur möchten, die kommentiert, was sie spielen oder arbeiten.",
          "**Menschen, die Chat und Gedächtnis zuerst lokal wollen**, ohne Gebühr pro Nachricht, und Early-Access-Software akzeptieren.",
          "**Nutzer mit schwächerer Hardware, die mit Cloud-KI einverstanden sind** und Plus oder Premium statt des lokalen Modells nutzen würden."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Was wir nicht überprüfen konnten",
        "items": [
          "**Praktisches Verhalten.** Antwortqualität, Stimmqualität, Geschwindigkeit, VRAM-Verbrauch, Offline-Betrieb und die Auswirkung auf Spiele wurden nicht getestet.",
          "**Datenschutz in der Praxis.** Die Angaben stammen aus dem Hinweis und der Website des Herstellers; es wurde kein Netzwerkverkehr untersucht, und ein unabhängiges Audit wurde nicht gefunden.",
          "**AMD- und Intel-Grafik.** Veröffentlicht ist eine NVIDIA-GPU als Anforderung; die Website sagt nur, dass die App beim ersten Start Ihre Hardware misst.",
          "**Itch.io-Eintrag.** Er ist von der Website verlinkt, lag aber hinter einer Bot-Prüfung und wurde nicht gelesen.",
          "**Steam-Edition.** Die Store-Seite nennt die Veröffentlichung „demnächst“, daher lassen sich die Steam-Version und ihr Guthabensystem noch nicht prüfen.",
          "**Quellcode und Signatur.** Die App ist nicht quelloffen und hat kein öffentliches Repository; der Installer wird als signiert mit veröffentlichter Prüfsumme beschrieben, beides wurde hier nicht überprüft.",
          "**Sicherheitsfunktionen.** Die Sicherheitsseite beschreibt Krisenprüfungen auf dem Gerät und eine feste Antwort; wie gut sie funktionieren, wurde nicht getestet, und die App ist weder Therapeut noch Notdienst."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "Wettbewerber und Alternativen",
        "columns": [
          "App",
          "Plattformen",
          "Preis / Lizenz",
          "Wesentlicher Unterschied"
        ],
        "rows": [
          {
            "App": "[Backyard AI](/de/power-local-llm/backyard-ai-review-local-roleplay)",
            "Plattformen": "Windows, macOS",
            "Preis / Lizenz": "Freemium / Closed Source",
            "Wesentlicher Unterschied": "Lokaler Desktop-Client für Charakter-Chat und Rollenspiel"
          },
          {
            "App": "[RisuAI](/de/power-local-llm/risuai-review)",
            "Plattformen": "Web, Windows, macOS, Linux",
            "Preis / Lizenz": "Kostenlos / GPL 3.0",
            "Wesentlicher Unterschied": "Quelloffene Chat-Oberfläche für Rollenspiel"
          },
          {
            "App": "[Castmates](/de/power-local-llm/castmates-review)",
            "Plattformen": "iOS",
            "Preis / Lizenz": "Freemium / Closed Source",
            "Wesentlicher Unterschied": "Offline-Charakterchat auf dem iPhone"
          }
        ],
        "note": "Angaben zu Wettbewerbern ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen jeder App im jeweiligen Eintrag."
      },
      "faq": {
        "id": "faq",
        "title": "Häufig gestellte Fragen",
        "faqs": [
          {
            "q": "Kann ich Asiden ohne Abo nutzen?",
            "a": "Ja. Die Abos schalten nur verwaltete Cloud-Funktionen frei, und laut Hersteller bleiben nach einer Kündigung die App, der lokale Modus und Ihre Erinnerungen auf Ihrem PC. Relevante Erinnerungen können bereits in frühere Cloud-Anfragen eingeflossen sein."
          },
          {
            "q": "Gibt es Asiden auf Steam?",
            "a": "Eine Steam-Seite existiert, nennt die Veröffentlichung aber „demnächst“. Sie beschreibt eine Edition zum Einmalkauf mit optionalem vorausbezahltem Cloud-Guthaben."
          },
          {
            "q": "Ist Asiden für Kinder geeignet?",
            "a": "Nein. Laut Hersteller ist die App für Erwachsene ab 18 Jahren gedacht und verlässt sich auf eine Selbstauskunft statt auf eine Altersprüfung."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Fazit",
        "content": "Asiden ist ein junger, häufig aktualisierter Windows-11-Begleiter, dessen Versprechen lokaler Chat und Gedächtnis zum Einmalpreis sind, mit kostenpflichtiger Cloud-KI als Option. Grenzen sind der Early-Access-Status, ein Einzelentwickler, nicht quelloffener Code, ein nur auf NVIDIA verfügbarer lokaler Modus, ein sehr großer Download sowie Datenschutz- und Sicherheitsangaben, die vom Hersteller stammen. Die App eignet sich für Windows-Nutzer mit NVIDIA-Hardware, die einen dauerhaften Begleiter ausprobieren möchten; wer Open Source oder andere Plattformen braucht, sollte [RisuAI](/de/power-local-llm/risuai-review) oder [Backyard AI](/de/power-local-llm/backyard-ai-review-local-roleplay) vergleichen."
      },
      "sources": {
        "id": "sources",
        "title": "Quellen",
        "items": [
          "[Asiden-Website](https://asiden.ai) — Produktbeschreibung, Download-Bereich, Anforderungen und Änderungsprotokoll, geprüft am 24. Oktober 2026.",
          "[Asiden-Preise](https://asiden.ai/pricing/) — App-Preis, Tarife Plus und Premium, Sparks und Early-Access-Grenzen; Stand 17. Oktober 2026.",
          "[Systemanforderungen von Asiden](https://asiden.ai/system-requirements/) — Mindest- und empfohlener PC sowie der Download beim ersten Start; Stand 10. September 2026.",
          "[Datenschutzhinweis von Asiden](https://asiden.ai/privacy/) — lokaler und Cloud-Datenfluss, Anbieter und Aufbewahrung; zuletzt aktualisiert am 8. Oktober 2026.",
          "[Sicherheits- und Krisenprotokoll von Asiden](https://asiden.ai/safety/) — Nutzung nur durch Erwachsene und Umgang mit Krisen; Version 1.0, 1. August 2026.",
          "[Nutzungsbedingungen von Asiden](https://asiden.ai/terms/) — Lizenzbedingungen, Version 2.11, 17. Oktober 2026.",
          "[Asiden auf Steam](https://store.steampowered.com/app/5130370/Asiden/) — Store-Seite mit Veröffentlichung „demnächst“, geprüft am 24. Oktober 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Artikel",
        "items": [
          "[Backyard-AI-Rezension](/de/power-local-llm/backyard-ai-review-local-roleplay) — ein lokaler Desktop-Client für Charakter-Chat und Rollenspiel.",
          "[RisuAI-Rezension](/de/power-local-llm/risuai-review) — eine quelloffene Chat-Oberfläche für Rollenspiel.",
          "[Castmates-Rezension](/de/power-local-llm/castmates-review) — eine Offline-KI-Chat-App mit Charakteren für das iPhone.",
          "[SillyTavern vs Agnai vs RisuAI](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — ein Vergleich lokaler Rollenspiel-Oberflächen."
        ]
      }
    }
  },
  es: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-24",
    "dateModified": "2026-10-24",
    "next_refresh_due": "2027-04-24",
    "theme": "Creative & Roleplay",
    "heroImage": "/images/asiden-review-hero-es.webp",
    "title": "Reseña de Asiden: compañero de escritorio con IA para Windows 11, local y con IA en la nube opcional",
    "seoTitle": "Reseña de Asiden: compañero IA de Windows 11, local",
    "intro": "Asiden es un compañero de escritorio con IA en acceso anticipado para Windows 11, de Asiden Labs Ltd, que su sitio describe como un desarrollador en solitario. Según el creador, el chat, la memoria, la voz y la visión de pantalla funcionan en local con una GPU NVIDIA, con IA en la nube de pago opcional. Esta reseña refleja asiden.ai, sus páginas de precios, privacidad y seguridad y su registro de cambios, tal como se comprobó el 24 de octubre de 2026.",
    "metaDescription": "Reseña de Asiden: compañero de escritorio con IA para Windows 11, con personajes 3D y Live2D, chat y memoria locales e IA en la nube opcional.",
    "twitterDescription": "Reseña de Asiden: un compañero con IA para Windows 11 de código cerrado y GPU NVIDIA. Qué funciona en local, qué envían fuera del PC los planes en la nube, cuánto cuesta y qué no se verificó.",
    "audience": "Usuarios de Windows 11 con GPU NVIDIA que quieren saber cuánto cuesta Asiden, qué se queda en el PC, qué añaden los planes en la nube y qué afirmaciones respaldan las fuentes.",
    "readTime": "6 min de lectura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Reseña de Asiden",
    "targetKeywords": [
      "reseña asiden",
      "asiden compañero ia",
      "compañero de escritorio ia windows 11",
      "compañero ia local gpu nvidia",
      "compañero ia con visión de pantalla",
      "compañero ia live2d windows",
      "asiden vs backyard ai"
    ],
    "current_models_mentioned": [
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "NVIDIA GPU",
      "Windows 11 PC"
    ],
    "leadAnswerBlock": "**Asiden es una app de compañero para Windows 11, de código cerrado y en acceso anticipado, con personajes 3D y Live2D que, según su creador, mantiene el chat y la memoria en tu PC de forma predeterminada.** **El modo local necesita una GPU NVIDIA con 8 GB de VRAM, y las funciones opcionales en la nube envían datos fuera del PC.**",
    "quickAnswerTop": {
      "es": {
        "question": "¿Asiden mantiene mis conversaciones en mi PC?",
        "answer": "Según el creador, sí en modo local: las conversaciones, los recuerdos y el contexto de pantalla se quedan en el PC, y solo se usa una ruta en la nube si la activas. Aquí no se probó nada.",
        "bullets": [
          "Solo Windows 11 de 64 bits, con un instalador firmado en [asiden.ai](https://asiden.ai); sin versión para Mac, Linux, móvil ni Windows 10.",
          "El modo local necesita una GPU NVIDIA, 16 GB de RAM y la descarga de un modelo de 4-19 GB en el primer inicio.",
          "La app se compra una sola vez; los planes en la nube Plus y Premium son suscripciones mensuales opcionales."
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "Respuesta rápida",
        "anchor": "quick-answer"
      },
      {
        "label": "¿Qué es Asiden?",
        "anchor": "what-is-asiden"
      },
      {
        "label": "Dónde se ejecutan tus chats",
        "anchor": "where-it-runs"
      },
      {
        "label": "Cómo obtenerla",
        "anchor": "get-it"
      },
      {
        "label": "Precios",
        "anchor": "pricing"
      },
      {
        "label": "Funciones indicadas por el desarrollador",
        "anchor": "key-features"
      },
      {
        "label": "Política de privacidad y flujo de datos",
        "anchor": "privacy"
      },
      {
        "label": "Para quién es",
        "anchor": "who-should-use"
      },
      {
        "label": "Lo que no pudimos verificar",
        "anchor": "who-should-not-use"
      },
      {
        "label": "Competidores y alternativas",
        "anchor": "vs-alternatives"
      },
      {
        "label": "Preguntas frecuentes",
        "anchor": "faq"
      },
      {
        "label": "Veredicto",
        "anchor": "verdict"
      },
      {
        "label": "Fuentes",
        "anchor": "sources"
      },
      {
        "label": "Lecturas relacionadas",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "Puntos clave",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Asiden es un compañero de escritorio para Windows 11 de código cerrado que muestra un personaje 3D o Live2D, recuerda lo que le cuentas y puede mirar tu pantalla cuando lo permites."
          },
          {
            "type": "plain-terms",
            "text": "Compras una clave de licencia, instalas un programa grande y firmado para Windows, y descarga un modelo de lenguaje local adecuado para tu tarjeta gráfica. Tras la configuración, el chat, la memoria, la voz y la visión de pantalla pueden funcionar sin conexión; los planes de pago en la nube añaden modelos alojados."
          }
        ],
        "items": [
          "Creador: Asiden Labs Ltd, una empresa registrada en Inglaterra y Gales que su propio sitio describe como desarrollador en solitario; el producto es software en acceso anticipado.",
          "Ritmo: el registro de cambios va de la versión 0.24.0 del 7 de septiembre de 2026 a la versión 0.32.2 del 18 de octubre de 2026.",
          "Personajes: cuatro compañeros principales (Mei, Lily, Jae y Sasha), diez perfiles de personalidad más y un asistente de personalidad propia; Lily y Sasha tienen también versión Live2D.",
          "Steam: existe una página de tienda, pero indica el lanzamiento como «próximamente»; las ediciones del sitio web y de Itch.io ya se pueden comprar."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta reseña se basa en asiden.ai y sus páginas legales enlazadas, las cabeceras de respuesta del servidor de descargas y la página de tienda de Steam, consultadas el 24 de octubre de 2026. No implicó uso práctico, inspección de red ni pruebas de rendimiento."
          }
        ]
      },
      "overview": {
        "id": "what-is-asiden",
        "title": "¿Qué es Asiden?",
        "content": [
          "**Asiden es un compañero de escritorio para Windows 11: un personaje con nombre que se queda en tu escritorio, habla por texto o por voz, crea recuerdos con el tiempo y puede mirar tu pantalla cuando tú lo decides.** El sitio presenta cuatro compañeros principales, Mei, Lily, Jae y Sasha, cada uno con una breve descripción de su personalidad, además de diez perfiles más y un asistente para escribir el tuyo.",
          "El creador es Asiden Labs Ltd (número de empresa 17312549, registrada en Inglaterra y Gales). La app es para adultos de 18 años o más; la página de seguridad dice que usa autodeclaración de edad, no verificación, y las condiciones prohíben el contenido sexual explícito."
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "Dónde se ejecutan tus chats",
        "content": [
          "**De forma predeterminada Asiden funciona en tu PC: el creador afirma que el chat, la memoria, la voz y la visión de pantalla locales mantienen tus conversaciones y el contexto de pantalla en el equipo, y que los modelos en la nube son opcionales.**"
        ],
        "items": [
          "**Modelo local.** En el primer inicio la app mide tu GPU y recomienda un modelo Gemma para el chat y la visión de pantalla. La descarga ronda los 4-19 GB, y tanto la activación como esa descarga necesitan conexión a internet.",
          "**Sin conexión.** Tras la activación y la configuración, el creador dice que el chat, los recuerdos, la voz y la visión locales siguen funcionando sin conexión; las actualizaciones, las descargas y las búsquedas web siguen necesitándola.",
          "**Voz y vídeo locales.** La versión 0.31.0 (9 de octubre de 2026) añadió Pocket, 23 voces masculinas y femeninas que se ejecutan en local; la versión 0.26.0 añadió análisis de vídeo local con un modelo Gemma compatible.",
          "**Nube, opcional.** Plus y Premium añaden chat, voz, visión y vídeo alojados, que se pagan con Sparks; lo que envían esas solicitudes se explica en la sección de privacidad más abajo."
        ],
        "note": "Según el sitio, el rendimiento depende de tu PC y de tu carga de trabajo, y un modelo local grande y un juego exigente compiten por la misma tarjeta gráfica. Esta reseña no midió la velocidad, el uso de VRAM ni el efecto en los juegos."
      },
      "getIt": {
        "id": "get-it",
        "title": "Cómo obtenerla",
        "columns": [
          "Plataforma",
          "Dónde obtenerla"
        ],
        "rows": [
          {
            "Plataforma": "Windows 11 (64 bits)",
            "Dónde obtenerla": "[Instalador firmado](https://asiden.ai/#download), 4,09 GB; requiere clave de licencia de pago"
          },
          {
            "Plataforma": "Steam",
            "Dónde obtenerla": "[Página de tienda](https://store.steampowered.com/app/5130370/Asiden/) (lanzamiento «próximamente»)"
          },
          {
            "Plataforma": "Itch.io",
            "Dónde obtenerla": "[Página de Itch.io](https://daf1.itch.io/asiden) (enlazada desde el sitio; no abierta aquí)"
          },
          {
            "Plataforma": "Otros sistemas",
            "Dónde obtenerla": "Sin versión para Windows 10, Mac, Linux ni móvil (según el sitio)"
          },
          {
            "Plataforma": "PC mínimo",
            "Dónde obtenerla": "16 GB de RAM, GPU NVIDIA con 8 GB de VRAM, 25 GB libres"
          },
          {
            "Plataforma": "PC recomendado",
            "Dónde obtenerla": "32 GB de RAM, GPU NVIDIA con 16 GB de VRAM, 40 GB libres"
          },
          {
            "Plataforma": "Sitio web",
            "Dónde obtenerla": "[asiden.ai](https://asiden.ai)"
          },
          {
            "Plataforma": "Política de privacidad",
            "Dónde obtenerla": "[Aviso de privacidad](https://asiden.ai/privacy/) (actualizado el 8 de octubre de 2026)"
          }
        ],
        "note": "Versión revisada: 0.32.2, publicada el 18 de octubre de 2026, la entrada más reciente del registro de cambios (una corrección de la firma del código). El instalador del servidor de descargas lleva la misma fecha, así que es la actualización más reciente de la app y no se aplica ninguna advertencia de abandono. La configuración necesita conexión a internet; el requisito de GPU publicado es NVIDIA, y según el sitio la app comprueba tu hardware en el primer inicio."
      },
      "pricing": {
        "id": "pricing",
        "title": "Precios",
        "content": [
          "**La app cuesta 10 $ una sola vez durante el acceso anticipado: una compra, no una suscripción ni una prueba, con conversaciones locales ilimitadas después.** El sitio lo llama precio de acceso anticipado y dice que puede cambiar, mientras que lo que ya compraste sigue siendo tuyo.",
          "Plus (15 $ al mes, 1250 Sparks por renovación pagada) y Premium (30 $ al mes, 3000 Sparks) son opcionales y añaden chat, voz, visión y vídeo gestionados en la nube. Los Sparks pagan esas funciones en la nube; el uso local no los gasta. Los planes de pago en la nube están limitados a 100 suscriptores durante el acceso anticipado, y el sitio indica los precios solo en dólares estadounidenses.",
          "La edición de Steam se describe con Sparks prepago comprados en Steam en lugar de los planes del sitio, y una compra en Itch.io ya cubre la app local."
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Funciones indicadas por el desarrollador",
        "content": [
          "**Todo lo siguiente procede de asiden.ai y de su registro de cambios; nada se probó.**"
        ],
        "items": [
          "**Personajes.** Modelos 3D, versiones Live2D de Lily y Sasha (versión 0.32.0, 17 de octubre de 2026) y modelos VRM importados; el aspecto, la personalidad y los recuerdos son ajustes independientes.",
          "**Memoria.** Recuerdos resumidos guardados en tu disco, que puedes revisar, corregir, ampliar y restablecer por compañero; el sitio avisa de que no se garantiza que el recuerdo sea correcto.",
          "**Visión de pantalla.** Opcional: recorta una zona o activa la visión continua en Ajustes. El sitio menciona el reconocimiento de juegos y paquetes descargables de wikis de juegos, con una cobertura que varía según el juego.",
          "**Chat proactivo.** La locuacidad va de «Reservado» a «Sin parar», y «Pausa» impide que el compañero escuche, mire y responda.",
          "**Voz.** Entrada de micrófono con pulsar para hablar o manos libres; las voces de estudio en la nube se limitan a 30 000 caracteres por cuenta y mes natural, y las voces locales siguen disponibles."
        ],
        "note": "La versión instalada es la que decide qué funciona."
      },
      "privacy": {
        "id": "privacy",
        "title": "Política de privacidad y flujo de datos",
        "content": [
          "**El aviso de privacidad (actualizado por última vez el 8 de octubre de 2026) dice que Asiden es local de forma predeterminada: el chat, la memoria y el contexto de pantalla locales se quedan en tu PC, y la información solo sale de él cuando eliges una función de red como la activación, la compra, el chat en la nube, la voz en la nube o la visión en la nube.**",
          "Las solicitudes gestionadas en la nube pasan por el proxy del creador, alojado en Microsoft Azure en el Reino Unido, hacia Venice AI u OpenRouter y un proveedor de modelos posterior; la voz en la nube va a ElevenLabs. Según el aviso, el proxy está diseñado para no guardar el contenido de los prompts ni de las respuestas y el contenido de las conversaciones no se usa para entrenar los modelos propios del creador, pero también dice que no es cifrado de extremo a extremo y que los proveedores aplican su propia retención. Una solicitud en la nube puede incluir recuerdos guardados relevantes y, si lo activaste, una captura de pantalla seleccionada. La visión de pantalla local está desactivada hasta que la actives, y la visión en la nube está desactivada de forma predeterminada."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Asiden es de código cerrado, así que nada de esto se puede comprobar en el código, y PromptQuorum no inspeccionó el tráfico de red. Las conversaciones con un compañero pueden ser personales: lee en el aviso qué puede contener una solicitud en la nube antes de activar las funciones en la nube."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quién es",
        "items": [
          "**Jugadores y usuarios de escritorio con Windows 11 y una GPU NVIDIA de 8 GB de VRAM o más** que quieren un personaje que comente lo que juegan o en lo que trabajan.",
          "**Personas que quieren un chat y una memoria locales primero**, sin cuota por mensaje, y aceptan software en acceso anticipado.",
          "**Usuarios con hardware más modesto que aceptan la IA en la nube** y usarían Plus o Premium en lugar del modelo local."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Lo que no pudimos verificar",
        "items": [
          "**Comportamiento en la práctica.** No se probaron la calidad de las respuestas ni de la voz, la velocidad, el uso de VRAM, el funcionamiento sin conexión ni el efecto en los juegos.",
          "**Privacidad en la práctica.** Las afirmaciones proceden del aviso y del sitio del creador; no se inspeccionó el tráfico de red y no se encontró ninguna auditoría independiente.",
          "**Gráficos AMD e Intel.** El requisito publicado es una GPU NVIDIA; el sitio solo dice que la app mide tu hardware en el primer inicio.",
          "**Ficha de Itch.io.** Está enlazada desde el sitio, pero la página estaba tras una verificación anti-bots y no se leyó.",
          "**Edición de Steam.** La página de tienda indica el lanzamiento como «próximamente», así que aún no se pueden comprobar la versión de Steam ni su sistema de créditos.",
          "**Código fuente y firma.** La app es de código cerrado y sin repositorio público; el instalador se describe como firmado y con suma de comprobación publicada, pero no se verificó ninguna de las dos cosas.",
          "**Funciones de seguridad.** La página de seguridad describe comprobaciones de crisis en el dispositivo y una respuesta fija; no se probó su eficacia, y la app no es un terapeuta ni un servicio de emergencias."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "Competidores y alternativas",
        "columns": [
          "App",
          "Plataformas",
          "Precio / licencia",
          "Diferencia clave"
        ],
        "rows": [
          {
            "App": "[Backyard AI](/es/power-local-llm/backyard-ai-review-local-roleplay)",
            "Plataformas": "Windows, macOS",
            "Precio / licencia": "Freemium / código cerrado",
            "Diferencia clave": "Cliente de escritorio local para chat de personajes y rol"
          },
          {
            "App": "[RisuAI](/es/power-local-llm/risuai-review)",
            "Plataformas": "Web, Windows, macOS, Linux",
            "Precio / licencia": "Gratis / GPL 3.0",
            "Diferencia clave": "Interfaz de chat de rol de código abierto"
          },
          {
            "App": "[Castmates](/es/power-local-llm/castmates-review)",
            "Plataformas": "iOS",
            "Precio / licencia": "Freemium / código cerrado",
            "Diferencia clave": "Chat de personajes sin conexión en iPhone"
          }
        ],
        "note": "Los datos de los competidores cambian a menudo; confirma el precio, la licencia y las plataformas actuales en la ficha de cada app."
      },
      "faq": {
        "id": "faq",
        "title": "Preguntas frecuentes",
        "faqs": [
          {
            "q": "¿Puedo usar Asiden sin suscripción?",
            "a": "Sí. Las suscripciones solo desbloquean funciones gestionadas en la nube, y según el creador, cancelar deja en tu PC la app, el modo local y tus recuerdos. Es posible que recuerdos relevantes ya se hayan incluido en solicitudes anteriores a la nube."
          },
          {
            "q": "¿Está Asiden en Steam?",
            "a": "Existe una página de Steam, pero indica el lanzamiento como «próximamente». Describe una edición de compra única con créditos opcionales de nube prepago."
          },
          {
            "q": "¿Es Asiden adecuado para niños?",
            "a": "No. Según el creador, la app es para adultos de 18 años o más y se basa en la autodeclaración, no en la verificación de edad."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredicto",
        "content": "Asiden es un compañero joven y actualizado con frecuencia para Windows 11, cuya propuesta es chat y memoria locales por un pago único, con IA en la nube de pago como opción. Sus límites son el acceso anticipado, un desarrollador en solitario, el código cerrado, un modo local solo con NVIDIA, una descarga muy grande y unas afirmaciones de privacidad y seguridad que proceden del creador. Encaja con usuarios de Windows con hardware NVIDIA que quieran probar un compañero persistente; quien necesite código abierto u otras plataformas debería comparar [RisuAI](/es/power-local-llm/risuai-review) o [Backyard AI](/es/power-local-llm/backyard-ai-review-local-roleplay)."
      },
      "sources": {
        "id": "sources",
        "title": "Fuentes",
        "items": [
          "[Sitio web de Asiden](https://asiden.ai) — descripción del producto, zona de descarga, requisitos y registro de cambios, consultados el 24 de octubre de 2026.",
          "[Precios de Asiden](https://asiden.ai/pricing/) — precio de la app, planes Plus y Premium, Sparks y límites del acceso anticipado; actualizado el 17 de octubre de 2026.",
          "[Requisitos del sistema de Asiden](https://asiden.ai/system-requirements/) — PC mínimo y recomendado y descarga del primer inicio; actualizado el 10 de septiembre de 2026.",
          "[Aviso de privacidad de Asiden](https://asiden.ai/privacy/) — flujo de datos local y en la nube, proveedores y retención; actualizado por última vez el 8 de octubre de 2026.",
          "[Protocolo de seguridad y crisis de Asiden](https://asiden.ai/safety/) — uso solo para adultos y gestión de crisis; versión 1.0, 1 de agosto de 2026.",
          "[Condiciones de uso de Asiden](https://asiden.ai/terms/) — condiciones de licencia, versión 2.11, 17 de octubre de 2026.",
          "[Asiden en Steam](https://store.steampowered.com/app/5130370/Asiden/) — página de tienda con lanzamiento «próximamente», consultada el 24 de octubre de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[Análisis de Backyard AI](/es/power-local-llm/backyard-ai-review-local-roleplay) — un cliente de escritorio local para chat de personajes y rol.",
          "[Reseña de RisuAI](/es/power-local-llm/risuai-review) — una interfaz de chat de rol de código abierto.",
          "[Reseña de Castmates](/es/power-local-llm/castmates-review) — una app de chat de personajes con IA sin conexión para iPhone.",
          "[SillyTavern vs Agnai vs RisuAI](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — una comparación de interfaces locales de rol."
        ]
      }
    }
  },
  fr: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-24",
    "dateModified": "2026-10-24",
    "next_refresh_due": "2027-04-24",
    "theme": "Creative & Roleplay",
    "heroImage": "/images/asiden-review-hero-fr.webp",
    "title": "Avis sur Asiden : compagnon IA de bureau pour Windows 11, en local avec IA cloud en option",
    "seoTitle": "Avis Asiden : compagnon IA Windows 11, local ou cloud",
    "intro": "Asiden est un compagnon IA de bureau en accès anticipé pour Windows 11, édité par Asiden Labs Ltd, que son site décrit comme un développeur indépendant. Selon l’éditeur, le chat, la mémoire, la voix et la vision d’écran fonctionnent en local sur une GPU NVIDIA, avec une IA cloud payante en option. Cet avis reflète asiden.ai, ses pages sur les tarifs, la confidentialité et la sécurité, ainsi que son journal des modifications, tels que vérifiés le 24 octobre 2026.",
    "metaDescription": "Avis sur Asiden : compagnon IA de bureau pour Windows 11, personnages 3D et Live2D, chat et mémoire en local, IA cloud en option. Ce qui reste non vérifié.",
    "twitterDescription": "Avis sur Asiden : un compagnon IA Windows 11 à code fermé pour GPU NVIDIA. Ce qui tourne en local, ce que les offres cloud envoient hors du PC, son prix et ce qui n’est pas vérifié.",
    "audience": "Utilisateurs de Windows 11 avec une GPU NVIDIA qui veulent savoir combien coûte Asiden, ce qui reste sur le PC, ce qu’ajoutent les offres cloud et quelles affirmations les sources étayent.",
    "readTime": "6 min de lecture",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Avis Asiden",
    "targetKeywords": [
      "avis asiden",
      "asiden compagnon ia",
      "compagnon ia de bureau windows 11",
      "compagnon ia local gpu nvidia",
      "compagnon ia avec vision d’écran",
      "compagnon ia live2d windows",
      "asiden vs backyard ai"
    ],
    "current_models_mentioned": [
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "NVIDIA GPU",
      "Windows 11 PC"
    ],
    "leadAnswerBlock": "**Asiden est une application de compagnon pour Windows 11, à code fermé et en accès anticipé, avec des personnages 3D et Live2D qui, selon son éditeur, garde par défaut le chat et la mémoire sur votre PC.** **Le mode local exige une GPU NVIDIA avec 8 Go de VRAM, et les fonctions cloud optionnelles envoient des données hors du PC.**",
    "quickAnswerTop": {
      "fr": {
        "question": "Asiden garde-t-il mes conversations sur mon PC ?",
        "answer": "Selon l’éditeur, oui en mode local : les conversations, les souvenirs et le contexte d’écran restent sur le PC, et une voie cloud n’est utilisée que si vous l’activez. Rien n’a été testé ici.",
        "bullets": [
          "Windows 11 64 bits uniquement, avec un installateur signé sur [asiden.ai](https://asiden.ai) ; pas de version Mac, Linux, mobile ni Windows 10.",
          "Le mode local exige une GPU NVIDIA, 16 Go de RAM et un téléchargement de modèle de 4 à 19 Go au premier lancement.",
          "L’application s’achète une seule fois ; les offres cloud Plus et Premium sont des abonnements mensuels facultatifs."
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "Réponse rapide",
        "anchor": "quick-answer"
      },
      {
        "label": "Qu’est-ce que Asiden ?",
        "anchor": "what-is-asiden"
      },
      {
        "label": "Où tournent vos chats",
        "anchor": "where-it-runs"
      },
      {
        "label": "Où la télécharger",
        "anchor": "get-it"
      },
      {
        "label": "Tarifs",
        "anchor": "pricing"
      },
      {
        "label": "Fonctions indiquées par le développeur",
        "anchor": "key-features"
      },
      {
        "label": "Politique de confidentialité et flux de données",
        "anchor": "privacy"
      },
      {
        "label": "À qui elle convient",
        "anchor": "who-should-use"
      },
      {
        "label": "Ce que nous n’avons pas pu vérifier",
        "anchor": "who-should-not-use"
      },
      {
        "label": "Concurrents et alternatives",
        "anchor": "vs-alternatives"
      },
      {
        "label": "Questions fréquentes",
        "anchor": "faq"
      },
      {
        "label": "Verdict",
        "anchor": "verdict"
      },
      {
        "label": "Sources",
        "anchor": "sources"
      },
      {
        "label": "Lectures complémentaires",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "Points clés",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Asiden est un compagnon de bureau pour Windows 11, à code fermé, qui affiche un personnage 3D ou Live2D, retient ce que vous lui dites et peut regarder votre écran quand vous l’autorisez."
          },
          {
            "type": "plain-terms",
            "text": "Vous achetez une clé de licence, installez un gros programme Windows signé, et il télécharge un modèle de langage local adapté à votre carte graphique. Une fois configuré, le chat, la mémoire, la voix et la vision d’écran peuvent fonctionner hors ligne ; les offres cloud payantes ajoutent des modèles hébergés."
          }
        ],
        "items": [
          "Éditeur : Asiden Labs Ltd, société immatriculée en Angleterre et au pays de Galles, décrite sur son propre site comme un développeur indépendant ; le produit est un logiciel en accès anticipé.",
          "Rythme : le journal des modifications va de la version 0.24.0 du 7 septembre 2026 à la version 0.32.2 du 18 octobre 2026.",
          "Personnages : quatre compagnons principaux (Mei, Lily, Jae et Sasha), dix autres profils de personnalité et un assistant de personnalité sur mesure ; Lily et Sasha existent aussi en version Live2D.",
          "Steam : une page boutique existe mais indique une sortie « bientôt » ; les éditions du site et d’Itch.io peuvent déjà être achetées."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Cet avis repose sur asiden.ai et ses pages juridiques liées, les en-têtes de réponse du serveur de téléchargement et la page boutique Steam, consultés le 24 octobre 2026. Il n’a impliqué ni utilisation pratique, ni inspection du réseau, ni benchmark."
          }
        ]
      },
      "overview": {
        "id": "what-is-asiden",
        "title": "Qu’est-ce que Asiden ?",
        "content": [
          "**Asiden est un compagnon de bureau pour Windows 11 : un personnage nommé qui s’installe sur votre bureau, parle par texte ou par voix, construit des souvenirs au fil du temps et peut regarder votre écran quand vous le décidez.** Le site présente quatre compagnons principaux, Mei, Lily, Jae et Sasha, chacun avec un court portrait de personnalité, ainsi que dix autres profils et un assistant pour écrire le vôtre.",
          "L’éditeur est Asiden Labs Ltd (numéro de société 17312549, immatriculée en Angleterre et au pays de Galles). L’application s’adresse aux adultes de 18 ans ou plus ; la page de sécurité indique une auto-déclaration de l’âge et non une vérification, et les conditions d’utilisation interdisent les contenus sexuels explicites."
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "Où tournent vos chats",
        "content": [
          "**Par défaut, Asiden tourne sur votre PC : l’éditeur affirme que le chat, la mémoire, la voix et la vision d’écran locaux gardent vos conversations et le contexte d’écran sur la machine, et que les modèles cloud sont facultatifs.**"
        ],
        "items": [
          "**Modèle local.** Au premier lancement, l’application mesure votre GPU et recommande un modèle Gemma pour le chat et la vision d’écran. Le téléchargement représente environ 4 à 19 Go, et l’activation comme ce téléchargement exigent une connexion Internet.",
          "**Hors ligne.** Après l’activation et la configuration, l’éditeur indique que le chat, les souvenirs, la voix et la vision locaux continuent de fonctionner sans connexion ; les mises à jour, les téléchargements et les recherches web en exigent toujours une.",
          "**Voix et vidéo locales.** La version 0.31.0 (9 octobre 2026) a ajouté Pocket, 23 voix masculines et féminines qui tournent en local ; la version 0.26.0 a ajouté l’analyse vidéo locale avec un modèle Gemma compatible.",
          "**Cloud, en option.** Plus et Premium ajoutent chat, voix, vision et vidéo hébergés, payés en Sparks ; ce que ces requêtes envoient est détaillé dans la section confidentialité ci-dessous."
        ],
        "note": "Selon le site, les performances dépendent de votre PC et de votre usage, et un gros modèle local et un jeu exigeant se partagent la même carte graphique. Ce test n’a mesuré ni la vitesse, ni l’usage de la VRAM, ni l’effet sur les jeux."
      },
      "getIt": {
        "id": "get-it",
        "title": "Où la télécharger",
        "columns": [
          "Plateforme",
          "Où la trouver"
        ],
        "rows": [
          {
            "Plateforme": "Windows 11 (64 bits)",
            "Où la trouver": "[Installateur signé](https://asiden.ai/#download), 4,09 Go ; clé de licence payante requise"
          },
          {
            "Plateforme": "Steam",
            "Où la trouver": "[Page boutique](https://store.steampowered.com/app/5130370/Asiden/) (sortie indiquée « bientôt »)"
          },
          {
            "Plateforme": "Itch.io",
            "Où la trouver": "[Page Itch.io](https://daf1.itch.io/asiden) (liée depuis le site ; non ouverte ici)"
          },
          {
            "Plateforme": "Autres systèmes",
            "Où la trouver": "Pas de version Windows 10, Mac, Linux ou mobile (selon le site)"
          },
          {
            "Plateforme": "PC minimal",
            "Où la trouver": "16 Go de RAM, GPU NVIDIA 8 Go de VRAM, 25 Go libres"
          },
          {
            "Plateforme": "PC recommandé",
            "Où la trouver": "32 Go de RAM, GPU NVIDIA 16 Go de VRAM, 40 Go libres"
          },
          {
            "Plateforme": "Site web",
            "Où la trouver": "[asiden.ai](https://asiden.ai)"
          },
          {
            "Plateforme": "Politique de confidentialité",
            "Où la trouver": "[Avis de confidentialité](https://asiden.ai/privacy/) (mis à jour le 8 octobre 2026)"
          }
        ],
        "note": "Version testée : 0.32.2, publiée le 18 octobre 2026, l’entrée la plus récente du journal des modifications (un correctif de signature du code). L’installateur du serveur de téléchargement porte la même date ; c’est donc la mise à jour la plus récente de l’application et aucun avertissement d’abandon ne s’applique. La configuration exige une connexion Internet ; la GPU exigée est de marque NVIDIA, et selon le site, l’application vérifie votre matériel au premier lancement."
      },
      "pricing": {
        "id": "pricing",
        "title": "Tarifs",
        "content": [
          "**L’application coûte 10 $ en une seule fois pendant l’accès anticipé : un achat, ni abonnement ni essai, avec ensuite des conversations locales illimitées.** Le site parle de prix d’accès anticipé qui peut changer, tandis que ce que vous avez déjà acheté reste acquis.",
          "Plus (15 $ par mois, 1 250 Sparks par renouvellement payé) et Premium (30 $ par mois, 3 000 Sparks) sont facultatifs et ajoutent chat, voix, vision et vidéo cloud gérés. Les Sparks paient ces fonctions cloud ; l’usage local n’en consomme pas. Les offres cloud payantes sont limitées à 100 abonnés pendant l’accès anticipé, et le site indique les prix uniquement en dollars américains.",
          "L’édition Steam utiliserait des Sparks prépayés achetés via Steam au lieu des offres du site, et un achat sur Itch.io couvre déjà l’application locale."
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Fonctions indiquées par le développeur",
        "content": [
          "**Tout ce qui suit provient d’asiden.ai et de son journal des modifications ; rien n’a été testé.**"
        ],
        "items": [
          "**Personnages.** Modèles 3D, versions Live2D de Lily et Sasha (version 0.32.0, 17 octobre 2026) et modèles VRM importés ; l’apparence, la personnalité et les souvenirs sont des réglages distincts.",
          "**Mémoire.** Souvenirs condensés enregistrés sur votre disque, que vous pouvez consulter, corriger, compléter et réinitialiser par compagnon ; le site prévient que le rappel n’est pas garanti exact.",
          "**Vision d’écran.** Facultative : découpez une zone ou activez la vision continue dans les réglages. Le site mentionne la reconnaissance de jeux et des paquets de wiki de jeux téléchargeables, la couverture variant selon le jeu.",
          "**Chat proactif.** La loquacité va de « Réservé » à « Sans arrêt », et « Pause » empêche le compagnon d’écouter, de regarder et de répondre.",
          "**Voix.** Entrée micro en appuyer-pour-parler ou mains libres ; les voix studio cloud sont limitées à 30 000 caractères par compte et par mois civil, et les voix locales restent disponibles."
        ],
        "note": "La version installée fait foi pour ce qui fonctionne."
      },
      "privacy": {
        "id": "privacy",
        "title": "Politique de confidentialité et flux de données",
        "content": [
          "**L’avis de confidentialité (mis à jour le 8 octobre 2026) indique qu’Asiden est local par défaut : le chat, la mémoire et le contexte d’écran locaux restent sur votre PC, et les informations ne le quittent que si vous choisissez une fonction réseau comme l’activation, l’achat, le chat cloud, la voix cloud ou la vision cloud.**",
          "Les requêtes cloud gérées passent par le proxy de l’éditeur, hébergé sur Microsoft Azure au Royaume-Uni, vers Venice AI ou OpenRouter puis un fournisseur de modèle en aval ; la voix cloud est envoyée à ElevenLabs. Selon l’avis, le proxy est conçu pour ne pas enregistrer le contenu des prompts ni des réponses et le contenu des conversations n’est pas utilisé pour entraîner les propres modèles de l’éditeur, mais il précise aussi qu’il ne s’agit pas d’un chiffrement de bout en bout et que les fournisseurs appliquent leur propre conservation. Une requête cloud peut contenir des souvenirs enregistrés pertinents et, si vous l’avez activé, une capture d’écran sélectionnée. La vision d’écran locale est désactivée tant que vous ne l’activez pas, et la vision cloud est désactivée par défaut."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Asiden est à code fermé : rien de tout cela ne peut être vérifié dans le code, et PromptQuorum n’a pas inspecté le trafic réseau. Les conversations avec un compagnon peuvent être personnelles : lisez dans l’avis ce qu’une requête cloud peut contenir avant d’activer les fonctions cloud."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "À qui elle convient",
        "items": [
          "**Les joueurs et utilisateurs de bureau sous Windows 11 avec une GPU NVIDIA d’au moins 8 Go de VRAM** qui veulent un personnage commentant ce qu’ils jouent ou font.",
          "**Ceux qui veulent un chat et une mémoire d’abord locaux**, sans frais par message, et acceptent un logiciel en accès anticipé.",
          "**Les utilisateurs au matériel plus modeste qui acceptent l’IA cloud** et utiliseraient Plus ou Premium plutôt que le modèle local."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Ce que nous n’avons pas pu vérifier",
        "items": [
          "**Comportement en pratique.** La qualité des réponses et de la voix, la vitesse, l’usage de la VRAM, le fonctionnement hors ligne et l’effet sur les jeux n’ont pas été testés.",
          "**Confidentialité en pratique.** Les affirmations viennent de l’avis et du site de l’éditeur ; aucun trafic réseau n’a été inspecté et aucun audit indépendant n’a été trouvé.",
          "**Graphismes AMD et Intel.** La configuration publiée exige une GPU NVIDIA ; le site dit seulement que l’application mesure votre matériel au premier lancement.",
          "**Fiche Itch.io.** Elle est liée depuis le site, mais la page était derrière un contrôle anti-robot et n’a pas été lue.",
          "**Édition Steam.** La page boutique indique une sortie « bientôt » : la version Steam et son système de crédits ne peuvent pas encore être vérifiés.",
          "**Code source et signature.** L’application est à code fermé, sans dépôt public ; l’installateur est décrit comme signé avec une somme de contrôle publiée, mais ni l’un ni l’autre n’a été vérifié ici.",
          "**Fonctions de sécurité.** La page de sécurité décrit des contrôles de crise sur l’appareil et une réponse fixe ; leur efficacité n’a pas été testée, et l’application n’est ni un thérapeute ni un service d’urgence."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "Concurrents et alternatives",
        "columns": [
          "Application",
          "Plateformes",
          "Prix / licence",
          "Différence clé"
        ],
        "rows": [
          {
            "Application": "[Backyard AI](/fr/power-local-llm/backyard-ai-review-local-roleplay)",
            "Plateformes": "Windows, macOS",
            "Prix / licence": "Freemium / code fermé",
            "Différence clé": "Client de bureau local de chat de personnages et de jeu de rôle"
          },
          {
            "Application": "[RisuAI](/fr/power-local-llm/risuai-review)",
            "Plateformes": "Web, Windows, macOS, Linux",
            "Prix / licence": "Gratuit / GPL 3.0",
            "Différence clé": "Interface de chat de jeu de rôle open source"
          },
          {
            "Application": "[Castmates](/fr/power-local-llm/castmates-review)",
            "Plateformes": "iOS",
            "Prix / licence": "Freemium / code fermé",
            "Différence clé": "Chat de personnages hors ligne sur iPhone"
          }
        ],
        "note": "Les informations sur les concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels sur la fiche de chaque appli."
      },
      "faq": {
        "id": "faq",
        "title": "Questions fréquentes",
        "faqs": [
          {
            "q": "Puis-je utiliser Asiden sans abonnement ?",
            "a": "Oui. Les abonnements ne débloquent que les fonctions cloud gérées, et selon l’éditeur, résilier laisse sur votre PC l’application, le mode local et vos souvenirs. Des souvenirs pertinents ont pu être inclus dans des requêtes cloud passées."
          },
          {
            "q": "Asiden est-il sur Steam ?",
            "a": "Une page Steam existe mais indique une sortie « bientôt ». Elle décrit une édition à achat unique avec des crédits cloud prépayés facultatifs."
          },
          {
            "q": "Asiden convient-il aux enfants ?",
            "a": "Non. Selon l’éditeur, l’application s’adresse aux adultes de 18 ans ou plus et s’appuie sur une auto-déclaration, non sur une vérification de l’âge."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Asiden est un compagnon Windows 11 récent et mis à jour fréquemment, dont l’argument est un chat et une mémoire locaux à prix unique, avec une IA cloud payante en option. Ses limites : l’accès anticipé, un développeur indépendant, le code fermé, un mode local réservé à NVIDIA, un téléchargement très volumineux, et des affirmations sur la confidentialité et la sécurité qui viennent de l’éditeur. Il convient aux utilisateurs Windows équipés NVIDIA qui veulent essayer un compagnon durable ; ceux qui ont besoin d’open source ou d’autres plateformes devraient comparer [RisuAI](/fr/power-local-llm/risuai-review) ou [Backyard AI](/fr/power-local-llm/backyard-ai-review-local-roleplay)."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Site d’Asiden](https://asiden.ai) — description du produit, zone de téléchargement, configuration requise et journal des modifications, consultés le 24 octobre 2026.",
          "[Tarifs d’Asiden](https://asiden.ai/pricing/) — prix de l’application, offres Plus et Premium, Sparks et limites de l’accès anticipé ; mis à jour le 17 octobre 2026.",
          "[Configuration requise d’Asiden](https://asiden.ai/system-requirements/) — PC minimal et recommandé et téléchargement du premier lancement ; mis à jour le 10 septembre 2026.",
          "[Avis de confidentialité d’Asiden](https://asiden.ai/privacy/) — flux de données local et cloud, fournisseurs et conservation ; mis à jour le 8 octobre 2026.",
          "[Protocole de sécurité et de crise d’Asiden](https://asiden.ai/safety/) — usage réservé aux adultes et gestion des crises ; version 1.0, 1er août 2026.",
          "[Conditions d’utilisation d’Asiden](https://asiden.ai/terms/) — conditions de licence, version 2.11, 17 octobre 2026.",
          "[Asiden sur Steam](https://store.steampowered.com/app/5130370/Asiden/) — page boutique indiquant une sortie « bientôt », consultée le 24 octobre 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lectures complémentaires",
        "items": [
          "[Avis sur Backyard AI](/fr/power-local-llm/backyard-ai-review-local-roleplay) — un client de bureau local de chat de personnages et de jeu de rôle.",
          "[Avis sur RisuAI](/fr/power-local-llm/risuai-review) — une interface de chat de jeu de rôle open source.",
          "[Test de Castmates](/fr/power-local-llm/castmates-review) — une application de chat de personnages IA hors ligne pour iPhone.",
          "[SillyTavern vs Agnai vs RisuAI](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — une comparaison d’interfaces locales de jeu de rôle."
        ]
      }
    }
  },
  ja: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-24",
    "dateModified": "2026-10-24",
    "next_refresh_due": "2027-04-24",
    "theme": "Creative & Roleplay",
    "heroImage": "/images/asiden-review-hero-ja.webp",
    "title": "Asidenレビュー:ローカル動作とクラウドAI(任意)を備えたWindows 11向けAIデスクトップコンパニオン",
    "seoTitle": "Asidenレビュー:Windows 11向けAIコンパニオン",
    "intro": "Asidenは、Asiden Labs Ltdが提供するWindows 11向けのアーリーアクセスのAIデスクトップコンパニオンです。同社は自社サイトで個人開発者であると説明しています。開発元によると、チャット、記憶、音声、画面認識はNVIDIA GPU上でローカルに動作し、有料のクラウドAIは任意です。本レビューは、2026年10月24日に確認したasiden.ai、料金・プライバシー・安全性のページ、変更履歴に基づきます。",
    "metaDescription": "Asidenレビュー:3DとLive2Dのキャラクター、ローカルのチャットと記憶、任意のクラウドAIを備えたWindows 11向けAIコンパニオン。開発元の主張と未検証の点を整理します。",
    "twitterDescription": "Asidenレビュー:NVIDIA GPU向けのクローズドソースなWindows 11 AIコンパニオン。ローカルで動く範囲、クラウドプランがPC外へ送る内容、料金、未検証の点を解説します。",
    "audience": "NVIDIA GPUを搭載したWindows 11ユーザーで、Asidenの料金、PC内に残るデータ、クラウドプランの追加内容、各情報源が裏付ける主張を知りたい方。",
    "readTime": "6分で読める",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Asidenレビュー",
    "targetKeywords": [
      "asiden レビュー",
      "asiden aiコンパニオン",
      "aiデスクトップコンパニオン windows 11",
      "ローカル aiコンパニオン nvidia gpu",
      "画面認識 aiコンパニオン",
      "live2d aiコンパニオン windows",
      "asiden vs backyard ai"
    ],
    "current_models_mentioned": [
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "NVIDIA GPU",
      "Windows 11 PC"
    ],
    "leadAnswerBlock": "**Asidenは、3DとLive2Dのキャラクターを備えたクローズドソースのアーリーアクセス版Windows 11コンパニオンアプリで、開発元によると、チャットと記憶は既定でPC内に保たれます。** **ローカルモードにはVRAM 8 GBのNVIDIA GPUが必要で、任意のクラウド機能はデータをPCの外へ送ります。**",
    "quickAnswerTop": {
      "ja": {
        "question": "AsidenはPC内に会話を保持しますか?",
        "answer": "開発元によると、ローカルモードでは保持されます。会話、記憶、画面のコンテキストはPC内にとどまり、クラウド経由は自分で有効にした場合にのみ使われます。ここでは何も検証していません。",
        "bullets": [
          "Windows 11の64ビット専用で、[asiden.ai](https://asiden.ai)から署名付きインストーラーを入手します。Mac、Linux、スマートフォン、Windows 10向けはありません。",
          "ローカルモードにはNVIDIA GPU、16 GBのRAM、初回起動時の4〜19 GBのモデルダウンロードが必要です。",
          "アプリは買い切りで、クラウドプランのPlusとPremiumは任意の月額課金です。"
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "クイックアンサー",
        "anchor": "quick-answer"
      },
      {
        "label": "Asidenとは?",
        "anchor": "what-is-asiden"
      },
      {
        "label": "チャットが動く場所",
        "anchor": "where-it-runs"
      },
      {
        "label": "入手方法",
        "anchor": "get-it"
      },
      {
        "label": "料金",
        "anchor": "pricing"
      },
      {
        "label": "開発者が挙げている機能",
        "anchor": "key-features"
      },
      {
        "label": "プライバシーポリシーとデータの流れ",
        "anchor": "privacy"
      },
      {
        "label": "向いている人",
        "anchor": "who-should-use"
      },
      {
        "label": "確認できなかった点",
        "anchor": "who-should-not-use"
      },
      {
        "label": "競合と代替アプリ",
        "anchor": "vs-alternatives"
      },
      {
        "label": "よくある質問",
        "anchor": "faq"
      },
      {
        "label": "結論",
        "anchor": "verdict"
      },
      {
        "label": "出典",
        "anchor": "sources"
      },
      {
        "label": "関連記事",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "重要ポイント",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Asidenは、3DまたはLive2Dのキャラクターを表示し、話した内容を覚え、許可すれば画面も見られる、クローズドソースのWindows 11向けデスクトップコンパニオンです。"
          },
          {
            "type": "plain-terms",
            "text": "ライセンスキーを購入し、大きな署名付きWindowsプログラムをインストールすると、グラフィックスカードに合ったローカル言語モデルが1つダウンロードされます。セットアップ後は、チャット、記憶、音声、画面認識がオフラインで動作でき、有料のクラウドプランではホスト型モデルが加わります。"
          }
        ],
        "items": [
          "開発元:イングランド・ウェールズ登録のAsiden Labs Ltd。自社サイトでは個人開発者と説明されており、製品はアーリーアクセスのソフトウェアです。",
          "更新ペース:変更履歴は、2026年9月7日のバージョン0.24.0から2026年10月18日のバージョン0.32.2まで載っています。",
          "キャラクター:主役の4人(Mei、Lily、Jae、Sasha)、10種類の追加性格プリセット、オリジナルの性格を作成するウィザード。LilyとSashaにはLive2D版もあります。",
          "Steam:ストアページはありますが、発売は「近日公開」と表示されています。公式サイト版とItch.io版は現在購入できます。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本レビューは、2026年10月24日に確認したasiden.ai(リンク先の法的ページを含む)、ダウンロードサーバーの応答ヘッダー、Steamストアページに基づきます。実機での試用、通信の検査、ベンチマークは行っていません。"
          }
        ]
      },
      "overview": {
        "id": "what-is-asiden",
        "title": "Asidenとは?",
        "content": [
          "**Asidenは、Windows 11向けのデスクトップコンパニオンです。名前のあるキャラクターがデスクトップに常駐し、テキストや音声で話し、時間とともに記憶を蓄え、ユーザーが選んだときに画面を見ることができます。** サイトでは主役の4人(Mei、Lily、Jae、Sasha)を、それぞれ短い性格紹介とともに紹介しており、ほかに10種類の性格プリセットと、独自の性格を作るウィザードがあります。",
          "開発元はAsiden Labs Ltd(会社番号17312549、イングランド・ウェールズ登録)です。アプリは18歳以上の成人向けで、安全性ページによると年齢確認ではなく自己申告方式であり、利用規約では露骨な性的内容が禁止されています。"
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "チャットが動く場所",
        "content": [
          "**既定ではAsidenはPC上で動作します。開発元によると、ローカルのチャット、記憶、音声、画面認識は会話や画面のコンテキストをPC内に保ち、クラウドモデルは任意です。**"
        ],
        "items": [
          "**ローカルモデル。** 初回起動時にアプリがGPUを測定し、チャットと画面認識の両方に使うGemmaモデルを1つ推奨します。ダウンロードは約4〜19 GBで、アクティベーションとこのダウンロードにはインターネット接続が必要です。",
          "**オフライン。** アクティベーションとセットアップの後は、ローカルのチャット、記憶、音声、画面認識が接続なしで動作し続けると開発元は述べています。アップデート、ダウンロード、Web検索には引き続き接続が必要です。",
          "**ローカル音声と動画。** バージョン0.31.0(2026年10月9日)でPocketが追加されました。ローカルで動く男女23種類の音声です。バージョン0.26.0では、対応するGemmaモデルによるローカルの動画解析が加わりました。",
          "**クラウド(任意)。** PlusとPremiumでホスト型のチャット、音声、画面認識、動画が加わり、料金はSparksで支払います。これらのリクエストが送る内容は、後述のプライバシーの項で扱います。"
        ],
        "note": "サイトによると、性能はPCと使い方に左右され、大きなローカルモデルと負荷の高いゲームは同じグラフィックスカードを取り合います。本レビューでは、速度、VRAM使用量、ゲームへの影響を検証していません。"
      },
      "getIt": {
        "id": "get-it",
        "title": "入手方法",
        "columns": [
          "プラットフォーム",
          "入手先"
        ],
        "rows": [
          {
            "プラットフォーム": "Windows 11(64ビット)",
            "入手先": "[署名付きインストーラー](https://asiden.ai/#download)、4.09 GB。有料ライセンスキーが必要"
          },
          {
            "プラットフォーム": "Steam",
            "入手先": "[ストアページ](https://store.steampowered.com/app/5130370/Asiden/)(発売は「近日公開」)"
          },
          {
            "プラットフォーム": "Itch.io",
            "入手先": "[Itch.ioページ](https://daf1.itch.io/asiden)(サイトからリンク。今回は未確認)"
          },
          {
            "プラットフォーム": "その他のOS",
            "入手先": "Windows 10、Mac、Linux、スマートフォン版はなし(サイトによる)"
          },
          {
            "プラットフォーム": "最小構成",
            "入手先": "RAM 16 GB、VRAM 8 GBのNVIDIA GPU、空き25 GB"
          },
          {
            "プラットフォーム": "推奨構成",
            "入手先": "RAM 32 GB、VRAM 16 GBのNVIDIA GPU、空き40 GB"
          },
          {
            "プラットフォーム": "公式サイト",
            "入手先": "[asiden.ai](https://asiden.ai)"
          },
          {
            "プラットフォーム": "プライバシーポリシー",
            "入手先": "[プライバシー通知](https://asiden.ai/privacy/)(2026年10月8日更新)"
          }
        ],
        "note": "確認したバージョン:0.32.2(2026年10月18日リリース)。変更履歴の最新エントリで、コード署名の修正です。ダウンロードサーバー上のインストーラーも同じ日付のため、これがアプリの最新のアップデートであり、更新停止の警告は該当しません。セットアップにはインターネット接続が必要です。公開されているGPU要件はNVIDIAで、サイトによると初回起動時にハードウェアを確認します。"
      },
      "pricing": {
        "id": "pricing",
        "title": "料金",
        "content": [
          "**アプリはアーリーアクセス期間中、10ドルの買い切りです。サブスクリプションでも試用版でもなく、購入後はローカルの会話を無制限に使えます。** サイトはこれをアーリーアクセス価格と呼び、変更されることがあるとしつつ、すでに購入したものはそのまま使えるとしています。",
          "Plus(月額15ドル、課金更新ごとに1,250 Sparks)とPremium(月額30ドル、3,000 Sparks)は任意で、マネージドのクラウドチャット、音声、画面認識、動画が加わります。Sparksはこれらのクラウド機能の支払いに使われ、ローカル利用では消費されません。有料クラウドプランはアーリーアクセス中、契約者100人に制限されており、サイトの価格表示は米ドルのみです。",
          "Steam版は、公式サイトのプランの代わりにSteam経由で購入するプリペイド式Sparksを使うと説明されています。Itch.ioでの購入はローカルアプリをすでにカバーしています。"
        ]
      },
      "features": {
        "id": "key-features",
        "title": "開発者が挙げている機能",
        "content": [
          "**以下はすべてasiden.aiと変更履歴に基づく内容で、検証はしていません。**"
        ],
        "items": [
          "**キャラクター。** 3Dモデル、LilyとSashaのLive2D版(バージョン0.32.0、2026年10月17日)、インポートしたVRMモデル。外見、性格、記憶は別々の設定です。",
          "**記憶。** 要約された記憶がドライブに保存され、コンパニオンごとに確認、修正、追加、リセットができます。サイトは、正しく思い出せるとは限らないと注意しています。",
          "**画面認識。** 任意です。範囲を切り取るか、設定で継続的な画面認識をオンにします。サイトにはゲーム認識とダウンロード可能なゲームWikiパックの記載があり、対応範囲はゲームによって異なります。",
          "**自発的な会話。** おしゃべりの頻度は「控えめ」から「ノンストップ」まであり、「一時停止」でコンパニオンの聞く・見る・返信するを止められます。",
          "**音声。** プッシュトゥトークまたはハンズフリーのマイク入力に対応します。クラウドのスタジオ音声はアカウントごとに暦月で30,000文字までに制限され、ローカル音声は引き続き使えます。"
        ],
        "note": "実際に何が動くかは、インストールしたビルドが最終的な基準です。"
      },
      "privacy": {
        "id": "privacy",
        "title": "プライバシーポリシーとデータの流れ",
        "content": [
          "**プライバシー通知(2026年10月8日更新)によると、Asidenは既定でローカル動作です。ローカルのチャット、記憶、画面のコンテキストはPC内にとどまり、アクティベーション、購入、クラウドチャット、クラウド音声、クラウド画面認識など、ネットワークを使う機能を選んだ場合にのみ情報がPCの外へ出ます。**",
          "マネージドのクラウドリクエストは、英国のMicrosoft Azure上にある開発元のプロキシを経由し、Venice AIまたはOpenRouter、さらに下流のモデル提供元へ送られます。クラウド音声はElevenLabsへ送られます。通知によると、プロキシはプロンプトや返信の内容を保存しない設計で、会話内容は開発元自身のモデルの学習には使われませんが、エンドツーエンド暗号化ではなく、提供元が独自の保持ルールを適用するとも書かれています。クラウドリクエストには、関連する保存済みの記憶と、有効にした場合は選択したスクリーンショットが含まれることがあります。ローカルの画面認識は有効にするまでオフで、クラウドの画面認識は既定でオフです。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Asidenはクローズドソースのため、これらの点はコードで確認できず、PromptQuorumも通信を検査していません。コンパニオンとの会話は個人的な内容になることがあります。クラウド機能をオンにする前に、クラウドリクエストに含まれうる内容を通知で確認してください。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "向いている人",
        "items": [
          "**VRAM 8 GB以上のNVIDIA GPUを搭載したWindows 11のゲーマーやデスクトップユーザー**で、プレイや作業に反応してくれるキャラクターがほしい方。",
          "**まずローカルのチャットと記憶を求める方**で、メッセージごとの課金がなく、アーリーアクセス版のソフトでも構わない方。",
          "**ハードウェアが非力でクラウドAIに抵抗がない方**で、ローカルモデルの代わりにPlusやPremiumを使う方。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "確認できなかった点",
        "items": [
          "**実際の動作。** 回答や音声の品質、速度、VRAM使用量、オフライン動作、ゲームへの影響は検証していません。",
          "**実際のプライバシー。** 記述は開発元の通知とサイトに基づきます。通信は検査しておらず、独立した監査も見つかりませんでした。",
          "**AMDとIntelのグラフィックス。** 公開されている要件はNVIDIA GPUで、サイトは初回起動時にハードウェアを測定するとだけ述べています。",
          "**Itch.ioの掲載ページ。** サイトからリンクされていますが、ボット確認の背後にあり、内容は確認できませんでした。",
          "**Steam版。** ストアページは発売を「近日公開」としているため、Steam版とそのクレジット方式はまだ確認できません。",
          "**ソースコードと署名。** アプリはクローズドソースで公開リポジトリはありません。インストーラーは署名付きでチェックサムも公開とされていますが、どちらも今回は確認していません。",
          "**安全機能。** 安全性ページには、端末上の危機検知と定型の応答が記載されています。その効果は検証しておらず、アプリはセラピストでも緊急サービスでもありません。"
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "競合と代替アプリ",
        "columns": [
          "アプリ",
          "プラットフォーム",
          "価格 / ライセンス",
          "主な違い"
        ],
        "rows": [
          {
            "アプリ": "[Backyard AI](/ja/power-local-llm/backyard-ai-review-local-roleplay)",
            "プラットフォーム": "Windows、macOS",
            "価格 / ライセンス": "無料プランあり / クローズドソース",
            "主な違い": "キャラクターチャットとロールプレイ向けのローカルデスクトップクライアント"
          },
          {
            "アプリ": "[RisuAI](/ja/power-local-llm/risuai-review)",
            "プラットフォーム": "Web、Windows、macOS、Linux",
            "価格 / ライセンス": "無料 / GPL 3.0",
            "主な違い": "オープンソースのロールプレイ用チャットフロントエンド"
          },
          {
            "アプリ": "[Castmates](/ja/power-local-llm/castmates-review)",
            "プラットフォーム": "iOS",
            "価格 / ライセンス": "無料プランあり / クローズドソース",
            "主な違い": "iPhoneで使えるオフラインのキャラクターチャット"
          }
        ],
        "note": "競合アプリの情報は頻繁に変わります。価格、ライセンス、対応プラットフォームは各アプリの掲載ページで確認してください。"
      },
      "faq": {
        "id": "faq",
        "title": "よくある質問",
        "faqs": [
          {
            "q": "サブスクリプションなしでAsidenを使えますか?",
            "a": "はい。サブスクリプションはマネージドのクラウド機能を解放するだけで、解約してもアプリ、ローカルモード、記憶はPCに残ると開発元は述べています。関連する記憶が過去のクラウドリクエストに含まれていた可能性はあります。"
          },
          {
            "q": "AsidenはSteamで入手できますか?",
            "a": "Steamのページはありますが、発売は「近日公開」とされています。買い切り型で、任意のプリペイド式クラウドクレジットがある版と説明されています。"
          },
          {
            "q": "Asidenは子どもに向いていますか?",
            "a": "いいえ。開発元は18歳以上の成人向けとしており、年齢確認ではなく自己申告に頼っています。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "結論",
        "content": "Asidenは、買い切り価格でのローカルチャットと記憶を売りにし、有料クラウドAIを選択肢とする、更新の多い新しいWindows 11コンパニオンです。限界は、アーリーアクセスであること、個人開発者、クローズドソース、NVIDIA限定のローカルモード、非常に大きなダウンロード、そして開発元自身によるプライバシーと安全性の説明です。NVIDIA搭載のWindowsユーザーで常駐型コンパニオンを試したい方に向きます。オープンソースや他のプラットフォームが必要な方は、[RisuAI](/ja/power-local-llm/risuai-review)や[Backyard AI](/ja/power-local-llm/backyard-ai-review-local-roleplay)も比較してください。"
      },
      "sources": {
        "id": "sources",
        "title": "出典",
        "items": [
          "[Asiden公式サイト](https://asiden.ai) — 製品説明、ダウンロード欄、要件、変更履歴。2026年10月24日確認。",
          "[Asidenの料金](https://asiden.ai/pricing/) — アプリ価格、PlusとPremium、Sparks、アーリーアクセスの制限。2026年10月17日更新。",
          "[Asidenのシステム要件](https://asiden.ai/system-requirements/) — 最小・推奨PCと初回起動時のダウンロード。2026年9月10日更新。",
          "[Asidenのプライバシー通知](https://asiden.ai/privacy/) — ローカルとクラウドのデータの流れ、提供元、保持。2026年10月8日更新。",
          "[Asidenの安全性・危機対応プロトコル](https://asiden.ai/safety/) — 成人限定の利用と危機への対応。バージョン1.0、2026年8月1日。",
          "[Asidenの利用規約](https://asiden.ai/terms/) — ライセンス条件、バージョン2.11、2026年10月17日。",
          "[SteamのAsiden](https://store.steampowered.com/app/5130370/Asiden/) — 発売が「近日公開」と表示されたストアページ。2026年10月24日確認。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[Backyard AIレビュー](/ja/power-local-llm/backyard-ai-review-local-roleplay) — キャラクターチャットとロールプレイ向けのローカルデスクトップクライアント。",
          "[RisuAIレビュー](/ja/power-local-llm/risuai-review) — オープンソースのロールプレイ用チャットフロントエンド。",
          "[Castmatesレビュー](/ja/power-local-llm/castmates-review) — iPhone向けのオフラインAIキャラクターチャットアプリ。",
          "[SillyTavern vs Agnai vs RisuAI](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — ローカルのロールプレイ用フロントエンドの比較。"
        ]
      }
    }
  },
  pt: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-24",
    "dateModified": "2026-10-24",
    "next_refresh_due": "2027-04-24",
    "theme": "Creative & Roleplay",
    "heroImage": "/images/asiden-review-hero-pt.webp",
    "title": "Análise do Asiden: companheiro de desktop com IA para Windows 11, local e com IA na nuvem opcional",
    "seoTitle": "Análise do Asiden: companheiro de IA no Windows 11",
    "intro": "O Asiden é um companheiro de desktop com IA em acesso antecipado para Windows 11, da Asiden Labs Ltd, que o site descreve como um desenvolvedor solo. Segundo o criador, chat, memória, voz e visão de tela rodam localmente em uma GPU NVIDIA, com IA na nuvem paga opcional. Esta análise reflete o asiden.ai, suas páginas de preços, privacidade e segurança e o registro de alterações, conforme verificado em 24 de outubro de 2026.",
    "metaDescription": "Análise do Asiden: companheiro de desktop com IA para Windows 11, com personagens 3D e Live2D, chat e memória locais e IA na nuvem opcional.",
    "twitterDescription": "Análise do Asiden: um companheiro de IA para Windows 11 com código fechado e GPU NVIDIA. O que roda localmente, o que os planos na nuvem enviam para fora do PC, quanto custa e o que não foi verificado.",
    "audience": "Usuários de Windows 11 com GPU NVIDIA que querem saber quanto o Asiden custa, o que fica no PC, o que os planos na nuvem acrescentam e quais afirmações as fontes sustentam.",
    "readTime": "6 min de leitura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Análise do Asiden",
    "targetKeywords": [
      "análise asiden",
      "asiden companheiro ia",
      "companheiro de desktop ia windows 11",
      "companheiro ia local gpu nvidia",
      "companheiro ia com visão de tela",
      "companheiro ia live2d windows",
      "asiden vs backyard ai"
    ],
    "current_models_mentioned": [
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "NVIDIA GPU",
      "Windows 11 PC"
    ],
    "leadAnswerBlock": "**O Asiden é um app companheiro para Windows 11, de código fechado e em acesso antecipado, com personagens 3D e Live2D que, segundo o criador, mantém chat e memória no seu PC por padrão.** **O modo local exige uma GPU NVIDIA com 8 GB de VRAM, e os recursos opcionais na nuvem enviam dados para fora do PC.**",
    "quickAnswerTop": {
      "pt": {
        "question": "O Asiden mantém minhas conversas no meu PC?",
        "answer": "Segundo o criador, sim, no modo local: conversas, memórias e contexto de tela ficam no PC, e uma rota na nuvem só é usada se você ativá-la. Nada foi testado aqui.",
        "bullets": [
          "Somente Windows 11 de 64 bits, com instalador assinado em [asiden.ai](https://asiden.ai); sem versão para Mac, Linux, celular ou Windows 10.",
          "O modo local exige uma GPU NVIDIA, 16 GB de RAM e o download de um modelo de 4-19 GB na primeira execução.",
          "O app é uma compra única; os planos na nuvem Plus e Premium são assinaturas mensais opcionais."
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "Resposta rápida",
        "anchor": "quick-answer"
      },
      {
        "label": "O que é o Asiden?",
        "anchor": "what-is-asiden"
      },
      {
        "label": "Onde seus chats rodam",
        "anchor": "where-it-runs"
      },
      {
        "label": "Como obter",
        "anchor": "get-it"
      },
      {
        "label": "Preços",
        "anchor": "pricing"
      },
      {
        "label": "Recursos indicados pelo desenvolvedor",
        "anchor": "key-features"
      },
      {
        "label": "Política de privacidade e fluxo de dados",
        "anchor": "privacy"
      },
      {
        "label": "Para quem é indicado",
        "anchor": "who-should-use"
      },
      {
        "label": "O que não conseguimos verificar",
        "anchor": "who-should-not-use"
      },
      {
        "label": "Concorrentes e alternativas",
        "anchor": "vs-alternatives"
      },
      {
        "label": "Perguntas frequentes",
        "anchor": "faq"
      },
      {
        "label": "Veredito",
        "anchor": "verdict"
      },
      {
        "label": "Fontes",
        "anchor": "sources"
      },
      {
        "label": "Leituras relacionadas",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "Pontos principais",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "O Asiden é um companheiro de desktop para Windows 11 de código fechado que mostra um personagem 3D ou Live2D, lembra o que você conta e pode olhar a sua tela quando você permite."
          },
          {
            "type": "plain-terms",
            "text": "Você compra uma chave de licença, instala um programa grande e assinado para Windows, e ele baixa um modelo de linguagem local adequado à sua placa de vídeo. Depois da configuração, chat, memória, voz e visão de tela podem funcionar offline; os planos pagos na nuvem acrescentam modelos hospedados."
          }
        ],
        "items": [
          "Criador: Asiden Labs Ltd, empresa registrada na Inglaterra e no País de Gales, descrita no próprio site como desenvolvedor solo; o produto é um software em acesso antecipado.",
          "Ritmo: o registro de alterações vai da versão 0.24.0, de 7 de setembro de 2026, à versão 0.32.2, de 18 de outubro de 2026.",
          "Personagens: quatro companheiros principais (Mei, Lily, Jae e Sasha), dez outros perfis de personalidade e um assistente de personalidade própria; Lily e Sasha também têm visual Live2D.",
          "Steam: existe uma página na loja, mas o lançamento aparece como «em breve»; as edições do site e do Itch.io já podem ser compradas."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta análise se baseia no asiden.ai e em suas páginas legais vinculadas, nos cabeçalhos de resposta do servidor de download e na página da loja Steam, consultados em 24 de outubro de 2026. Não houve uso prático, inspeção de rede nem benchmarks."
          }
        ]
      },
      "overview": {
        "id": "what-is-asiden",
        "title": "O que é o Asiden?",
        "content": [
          "**O Asiden é um companheiro de desktop para Windows 11: um personagem com nome que fica na sua área de trabalho, conversa por texto ou voz, constrói memórias ao longo do tempo e pode olhar a sua tela quando você escolhe.** O site apresenta quatro companheiros principais, Mei, Lily, Jae e Sasha, cada um com uma breve descrição de personalidade, além de dez outros perfis e um assistente para escrever o seu.",
          "O criador é a Asiden Labs Ltd (número de empresa 17312549, registrada na Inglaterra e no País de Gales). O app é para adultos com 18 anos ou mais; a página de segurança diz que usa autodeclaração de idade, não verificação, e os termos proíbem conteúdo sexual explícito."
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "Onde seus chats rodam",
        "content": [
          "**Por padrão o Asiden roda no seu PC: o criador diz que chat, memória, voz e visão de tela locais mantêm suas conversas e o contexto de tela na máquina, e que os modelos na nuvem são opcionais.**"
        ],
        "items": [
          "**Modelo local.** Na primeira execução o app mede a sua GPU e recomenda um modelo Gemma para chat e visão de tela. O download é de cerca de 4-19 GB, e tanto a ativação quanto esse download exigem conexão com a internet.",
          "**Offline.** Depois da ativação e da configuração, o criador diz que chat, memórias, voz e visão locais continuam funcionando sem conexão; atualizações, downloads e buscas na web ainda exigem uma.",
          "**Voz e vídeo locais.** A versão 0.31.0 (9 de outubro de 2026) acrescentou o Pocket, 23 vozes masculinas e femininas que rodam localmente; a versão 0.26.0 acrescentou análise de vídeo local com um modelo Gemma compatível.",
          "**Nuvem, opcional.** Plus e Premium acrescentam chat, voz, visão e vídeo hospedados, pagos em Sparks; o que essas solicitações enviam está na seção de privacidade abaixo."
        ],
        "note": "Segundo o site, o desempenho depende do seu PC e da carga de trabalho, e um modelo local grande e um jogo exigente disputam a mesma placa de vídeo. Esta análise não mediu velocidade, uso de VRAM nem o efeito nos jogos."
      },
      "getIt": {
        "id": "get-it",
        "title": "Como obter",
        "columns": [
          "Plataforma",
          "Onde obter"
        ],
        "rows": [
          {
            "Plataforma": "Windows 11 (64 bits)",
            "Onde obter": "[Instalador assinado](https://asiden.ai/#download), 4,09 GB; exige chave de licença paga"
          },
          {
            "Plataforma": "Steam",
            "Onde obter": "[Página da loja](https://store.steampowered.com/app/5130370/Asiden/) (lançamento «em breve»)"
          },
          {
            "Plataforma": "Itch.io",
            "Onde obter": "[Página do Itch.io](https://daf1.itch.io/asiden) (vinculada no site; não aberta aqui)"
          },
          {
            "Plataforma": "Outros sistemas",
            "Onde obter": "Sem versão para Windows 10, Mac, Linux ou celular (segundo o site)"
          },
          {
            "Plataforma": "PC mínimo",
            "Onde obter": "16 GB de RAM, GPU NVIDIA com 8 GB de VRAM, 25 GB livres"
          },
          {
            "Plataforma": "PC recomendado",
            "Onde obter": "32 GB de RAM, GPU NVIDIA com 16 GB de VRAM, 40 GB livres"
          },
          {
            "Plataforma": "Site",
            "Onde obter": "[asiden.ai](https://asiden.ai)"
          },
          {
            "Plataforma": "Política de privacidade",
            "Onde obter": "[Aviso de privacidade](https://asiden.ai/privacy/) (atualizado em 8 de outubro de 2026)"
          }
        ],
        "note": "Versão analisada: 0.32.2, lançada em 18 de outubro de 2026, a entrada mais recente do registro de alterações (uma correção da assinatura do código). O instalador no servidor de download tem a mesma data, portanto é a atualização mais recente do app e não se aplica nenhum aviso de abandono. A configuração exige conexão com a internet; o requisito de GPU publicado é NVIDIA, e segundo o site o app verifica o seu hardware na primeira execução."
      },
      "pricing": {
        "id": "pricing",
        "title": "Preços",
        "content": [
          "**O app custa US$ 10 uma única vez durante o acesso antecipado: uma compra, não uma assinatura nem um teste, com conversas locais ilimitadas depois.** O site chama isso de preço de acesso antecipado e diz que ele pode mudar, enquanto o que você já comprou continua seu.",
          "Plus (US$ 15 por mês, 1.250 Sparks por renovação paga) e Premium (US$ 30 por mês, 3.000 Sparks) são opcionais e acrescentam chat, voz, visão e vídeo gerenciados na nuvem. Os Sparks pagam esses recursos na nuvem; o uso local não os gasta. Os planos pagos na nuvem são limitados a 100 assinantes durante o acesso antecipado, e o site lista preços apenas em dólares americanos.",
          "A edição da Steam é descrita com Sparks pré-pagos comprados pela Steam em vez dos planos do site, e uma compra no Itch.io já cobre o app local."
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Recursos indicados pelo desenvolvedor",
        "content": [
          "**Tudo a seguir vem do asiden.ai e do registro de alterações; nada foi testado.**"
        ],
        "items": [
          "**Personagens.** Modelos 3D, visuais Live2D de Lily e Sasha (versão 0.32.0, 17 de outubro de 2026) e modelos VRM importados; aparência, personalidade e memórias são configurações separadas.",
          "**Memória.** Memórias resumidas salvas no seu disco, que você pode ver, corrigir, ampliar e redefinir por companheiro; o site avisa que não há garantia de que a lembrança esteja correta.",
          "**Percepção de tela.** Opcional: recorte uma região ou ative a visão contínua nas configurações. O site menciona reconhecimento de jogos e pacotes de wiki de jogos para baixar, com cobertura que varia conforme o jogo.",
          "**Conversa proativa.** A tagarelice vai de «Reservado» a «Sem parar», e «Pausar» impede o companheiro de ouvir, observar e responder.",
          "**Voz.** Entrada de microfone com aperte para falar ou mãos livres; as vozes de estúdio na nuvem são limitadas a 30.000 caracteres por conta a cada mês civil, e as vozes locais continuam disponíveis."
        ],
        "note": "A versão instalada é que decide o que funciona."
      },
      "privacy": {
        "id": "privacy",
        "title": "Política de privacidade e fluxo de dados",
        "content": [
          "**O aviso de privacidade (atualizado pela última vez em 8 de outubro de 2026) diz que o Asiden é local por padrão: chat, memória e contexto de tela locais ficam no seu PC, e as informações só saem dele quando você escolhe um recurso de rede, como ativação, compra, chat na nuvem, voz na nuvem ou visão na nuvem.**",
          "As solicitações gerenciadas na nuvem passam pelo proxy do criador, hospedado no Microsoft Azure no Reino Unido, até a Venice AI ou o OpenRouter e um provedor de modelos a jusante; a voz na nuvem vai para a ElevenLabs. Segundo o aviso, o proxy foi projetado para não guardar o conteúdo de prompts e respostas e o conteúdo das conversas não é usado para treinar os modelos do próprio criador, mas o aviso também diz que isso não é criptografia de ponta a ponta e que os provedores aplicam a própria retenção. Uma solicitação na nuvem pode incluir memórias salvas relevantes e, se você ativou, uma captura de tela selecionada. A visão de tela local fica desligada até você ativá-la, e a visão na nuvem fica desligada por padrão."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "O Asiden é de código fechado, então nada disso pode ser verificado no código, e a PromptQuorum não inspecionou o tráfego de rede. Conversas com um companheiro podem ser pessoais: leia no aviso o que uma solicitação na nuvem pode conter antes de ativar os recursos na nuvem."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quem é indicado",
        "items": [
          "**Jogadores e usuários de desktop com Windows 11 e GPU NVIDIA de 8 GB de VRAM ou mais** que querem um personagem que comente o que jogam ou fazem.",
          "**Pessoas que querem chat e memória priorizando o local**, sem cobrança por mensagem, e aceitam software em acesso antecipado.",
          "**Usuários com hardware mais modesto que aceitam IA na nuvem** e usariam Plus ou Premium no lugar do modelo local."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "O que não conseguimos verificar",
        "items": [
          "**Comportamento na prática.** Qualidade das respostas e da voz, velocidade, uso de VRAM, funcionamento offline e efeito nos jogos não foram testados.",
          "**Privacidade na prática.** As afirmações vêm do aviso e do site do criador; nenhum tráfego de rede foi inspecionado e nenhuma auditoria independente foi encontrada.",
          "**Placas AMD e Intel.** O requisito publicado é uma GPU NVIDIA; o site diz apenas que o app mede o seu hardware na primeira execução.",
          "**Página do Itch.io.** Ela é vinculada no site, mas estava atrás de uma verificação anti-bots e não foi lida.",
          "**Edição da Steam.** A página da loja indica o lançamento como «em breve», então a versão da Steam e seu sistema de créditos ainda não podem ser verificados.",
          "**Código-fonte e assinatura.** O app é de código fechado, sem repositório público; o instalador é descrito como assinado e com soma de verificação publicada, mas nenhum dos dois foi verificado aqui.",
          "**Recursos de segurança.** A página de segurança descreve verificações de crise no dispositivo e uma resposta fixa; sua eficácia não foi testada, e o app não é um terapeuta nem um serviço de emergência."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "Concorrentes e alternativas",
        "columns": [
          "App",
          "Plataformas",
          "Preço / licença",
          "Diferença principal"
        ],
        "rows": [
          {
            "App": "[Backyard AI](/pt/power-local-llm/backyard-ai-review-local-roleplay)",
            "Plataformas": "Windows, macOS",
            "Preço / licença": "Freemium / Código fechado",
            "Diferença principal": "Cliente de desktop local para chat de personagens e roleplay"
          },
          {
            "App": "[RisuAI](/pt/power-local-llm/risuai-review)",
            "Plataformas": "Web, Windows, macOS, Linux",
            "Preço / licença": "Grátis / GPL 3.0",
            "Diferença principal": "Interface de chat de roleplay de código aberto"
          },
          {
            "App": "[Castmates](/pt/power-local-llm/castmates-review)",
            "Plataformas": "iOS",
            "Preço / licença": "Freemium / Código fechado",
            "Diferença principal": "Chat de personagens offline no iPhone"
          }
        ],
        "note": "Os dados dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app."
      },
      "faq": {
        "id": "faq",
        "title": "Perguntas frequentes",
        "faqs": [
          {
            "q": "Posso usar o Asiden sem assinatura?",
            "a": "Sim. As assinaturas só liberam recursos gerenciados na nuvem, e segundo o criador, cancelar mantém no seu PC o app, o modo local e as suas memórias. Memórias relevantes podem já ter sido incluídas em solicitações anteriores na nuvem."
          },
          {
            "q": "O Asiden está na Steam?",
            "a": "Existe uma página na Steam, mas o lançamento aparece como «em breve». Ela descreve uma edição de compra única com créditos opcionais de nuvem pré-pagos."
          },
          {
            "q": "O Asiden é adequado para crianças?",
            "a": "Não. Segundo o criador, o app é para adultos com 18 anos ou mais e se baseia em autodeclaração, não em verificação de idade."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredito",
        "content": "O Asiden é um companheiro jovem e atualizado com frequência para Windows 11, cuja proposta é chat e memória locais por um preço único, com IA paga na nuvem como opção. Seus limites são o acesso antecipado, um desenvolvedor solo, o código fechado, um modo local só com NVIDIA, um download muito grande e afirmações de privacidade e segurança que vêm do próprio criador. Serve a usuários de Windows com hardware NVIDIA que queiram testar um companheiro persistente; quem precisa de código aberto ou de outras plataformas deve comparar o [RisuAI](/pt/power-local-llm/risuai-review) ou o [Backyard AI](/pt/power-local-llm/backyard-ai-review-local-roleplay)."
      },
      "sources": {
        "id": "sources",
        "title": "Fontes",
        "items": [
          "[Site do Asiden](https://asiden.ai) — descrição do produto, área de download, requisitos e registro de alterações, consultados em 24 de outubro de 2026.",
          "[Preços do Asiden](https://asiden.ai/pricing/) — preço do app, planos Plus e Premium, Sparks e limites do acesso antecipado; atualizado em 17 de outubro de 2026.",
          "[Requisitos de sistema do Asiden](https://asiden.ai/system-requirements/) — PC mínimo e recomendado e o download da primeira execução; atualizado em 10 de setembro de 2026.",
          "[Aviso de privacidade do Asiden](https://asiden.ai/privacy/) — fluxo de dados local e na nuvem, provedores e retenção; atualizado pela última vez em 8 de outubro de 2026.",
          "[Protocolo de segurança e crise do Asiden](https://asiden.ai/safety/) — uso apenas por adultos e tratamento de crises; versão 1.0, 1º de agosto de 2026.",
          "[Termos de uso do Asiden](https://asiden.ai/terms/) — termos de licença, versão 2.11, 17 de outubro de 2026.",
          "[Asiden na Steam](https://store.steampowered.com/app/5130370/Asiden/) — página da loja com lançamento «em breve», consultada em 24 de outubro de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leituras relacionadas",
        "items": [
          "[Análise do Backyard AI](/pt/power-local-llm/backyard-ai-review-local-roleplay) — um cliente de desktop local para chat de personagens e roleplay.",
          "[Análise do RisuAI](/pt/power-local-llm/risuai-review) — uma interface de chat de roleplay de código aberto.",
          "[Análise do Castmates](/pt/power-local-llm/castmates-review) — um app de chat de personagens com IA offline para iPhone.",
          "[SillyTavern vs Agnai vs RisuAI](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — uma comparação de interfaces locais de roleplay."
        ]
      }
    }
  },
  ar: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-24",
    "dateModified": "2026-10-24",
    "next_refresh_due": "2027-04-24",
    "theme": "Creative & Roleplay",
    "heroImage": "/images/asiden-review-hero-ar.webp",
    "title": "مراجعة Asiden: رفيق ذكاء اصطناعي لسطح مكتب Windows 11 بتشغيل محلي وذكاء سحابي اختياري",
    "seoTitle": "مراجعة Asiden: رفيق ذكاء اصطناعي لـ Windows 11 محلي",
    "intro": "Asiden رفيق ذكاء اصطناعي لسطح مكتب Windows 11 في مرحلة الوصول المبكر من شركة Asiden Labs Ltd، ويصفها موقعها بأنها مطوّر منفرد. بحسب الجهة المطوّرة، تعمل المحادثة والذاكرة والصوت ورؤية الشاشة محلياً على بطاقة رسوميات NVIDIA، مع ذكاء اصطناعي سحابي مدفوع اختياري. تعكس هذه المراجعة موقع asiden.ai وصفحات الأسعار والخصوصية والسلامة وسجل التغييرات، كما فُحصت في 24 أكتوبر 2026.",
    "metaDescription": "مراجعة Asiden: رفيق ذكاء اصطناعي لسطح مكتب Windows 11 بشخصيات 3D وLive2D ومحادثة وذاكرة محليتين وذكاء سحابي اختياري. وما لم يُتحقق منه بعد في هذه المراجعة.",
    "twitterDescription": "مراجعة Asiden: رفيق ذكاء اصطناعي مغلق المصدر لـ Windows 11 وبطاقات NVIDIA. ما يعمل محلياً وما ترسله الخطط السحابية خارج الحاسوب وتكلفته وما لم يُتحقق منه.",
    "audience": "مستخدمو Windows 11 الذين يملكون بطاقة NVIDIA ويريدون معرفة تكلفة Asiden وما يبقى على الحاسوب وما تضيفه الخطط السحابية وأي الادعاءات تدعمها المصادر.",
    "readTime": "6 دقائق للقراءة",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "مراجعة Asiden",
    "targetKeywords": [
      "مراجعة asiden",
      "asiden رفيق ذكاء اصطناعي",
      "رفيق ذكاء اصطناعي لسطح المكتب windows 11",
      "رفيق ذكاء اصطناعي محلي بطاقة nvidia",
      "رفيق ذكاء اصطناعي برؤية الشاشة",
      "رفيق ذكاء اصطناعي live2d windows",
      "asiden مقابل backyard ai"
    ],
    "current_models_mentioned": [
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "NVIDIA GPU",
      "Windows 11 PC"
    ],
    "leadAnswerBlock": "**Asiden تطبيق رفيق لـ Windows 11 مغلق المصدر في مرحلة الوصول المبكر، بشخصيات 3D وLive2D، ويُبقي المحادثة والذاكرة على حاسوبك افتراضياً بحسب الجهة المطوّرة.** **يحتاج الوضع المحلي إلى بطاقة NVIDIA بذاكرة VRAM قدرها 8 GB، وتُرسل الميزات السحابية الاختيارية بيانات خارج الحاسوب.**",
    "quickAnswerTop": {
      "ar": {
        "question": "هل يُبقي Asiden محادثاتي على حاسوبي؟",
        "answer": "بحسب الجهة المطوّرة، نعم في الوضع المحلي: تبقى المحادثات والذكريات وسياق الشاشة على الحاسوب، ولا يُستخدم مسار سحابي إلا إذا فعّلته. لم يُختبر شيء هنا.",
        "bullets": [
          "يعمل على Windows 11 بنظام 64 بت فقط، بمثبّت موقّع من [asiden.ai](https://asiden.ai)؛ لا توجد نسخة لـ Mac أو Linux أو الهاتف أو Windows 10.",
          "يحتاج الوضع المحلي إلى بطاقة NVIDIA وذاكرة RAM بسعة 16 GB وتنزيل نموذج بحجم 4-19 GB عند التشغيل الأول.",
          "التطبيق يُشترى مرة واحدة، أما الخطتان السحابيتان Plus وPremium فاشتراكان شهريان اختياريان."
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "إجابة سريعة",
        "anchor": "quick-answer"
      },
      {
        "label": "ما هو Asiden؟",
        "anchor": "what-is-asiden"
      },
      {
        "label": "أين تعمل محادثاتك",
        "anchor": "where-it-runs"
      },
      {
        "label": "كيف تحصل عليه",
        "anchor": "get-it"
      },
      {
        "label": "الأسعار",
        "anchor": "pricing"
      },
      {
        "label": "الميزات التي يذكرها المطوّر",
        "anchor": "key-features"
      },
      {
        "label": "سياسة الخصوصية وتدفق البيانات",
        "anchor": "privacy"
      },
      {
        "label": "لمن يناسب",
        "anchor": "who-should-use"
      },
      {
        "label": "ما لم نتمكن من التحقق منه",
        "anchor": "who-should-not-use"
      },
      {
        "label": "المنافسون والبدائل",
        "anchor": "vs-alternatives"
      },
      {
        "label": "الأسئلة الشائعة",
        "anchor": "faq"
      },
      {
        "label": "الخلاصة",
        "anchor": "verdict"
      },
      {
        "label": "المصادر",
        "anchor": "sources"
      },
      {
        "label": "قراءات ذات صلة",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "النقاط الرئيسية",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Asiden رفيق مغلق المصدر لسطح مكتب Windows 11 يعرض شخصية 3D أو Live2D، ويتذكر ما تخبره به، ويستطيع النظر إلى شاشتك عندما تسمح له."
          },
          {
            "type": "plain-terms",
            "text": "تشتري مفتاح ترخيص وتثبّت برنامج Windows كبيراً وموقّعاً، فينزّل نموذج لغة محلياً واحداً يناسب بطاقتك الرسومية. بعد الإعداد يمكن أن تعمل المحادثة والذاكرة والصوت ورؤية الشاشة دون اتصال، وتضيف الخطط السحابية المدفوعة نماذج مستضافة."
          }
        ],
        "items": [
          "الجهة المطوّرة: Asiden Labs Ltd، شركة مسجّلة في إنجلترا وويلز، ويصفها موقعها بأنها مطوّر منفرد؛ والمنتج برنامج في مرحلة الوصول المبكر.",
          "وتيرة التحديث: يمتد سجل التغييرات من الإصدار 0.24.0 في 7 سبتمبر 2026 إلى الإصدار 0.32.2 في 18 أكتوبر 2026.",
          "الشخصيات: أربعة رفقاء رئيسيين (Mei وLily وJae وSasha)، وعشرة قوالب شخصية إضافية، ومعالج لشخصية مخصصة؛ ولـ Lily وSasha مظهر Live2D أيضاً.",
          "Steam: توجد صفحة متجر لكن موعد الإصدار معروض بعبارة «قريباً»؛ ويمكن شراء نسختَي الموقع وItch.io الآن."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "تستند هذه المراجعة إلى asiden.ai وصفحاته القانونية المرتبطة وترويسات استجابة خادم التنزيل وصفحة متجر Steam، كما فُحصت في 24 أكتوبر 2026. ولم تتضمن استخداماً عملياً ولا فحصاً للشبكة ولا اختبارات أداء."
          }
        ]
      },
      "overview": {
        "id": "what-is-asiden",
        "title": "ما هو Asiden؟",
        "content": [
          "**Asiden رفيق لسطح مكتب Windows 11: شخصية لها اسم تقيم على سطح مكتبك، وتتحدث بالنص أو الصوت، وتكوّن ذكريات مع الوقت، ويمكنها النظر إلى شاشتك عندما تختار ذلك.** يعرض الموقع أربعة رفقاء رئيسيين هم Mei وLily وJae وSasha، لكل منهم وصف موجز لشخصيته، إضافة إلى عشرة قوالب شخصية ومعالج لكتابة شخصيتك الخاصة.",
          "الجهة المطوّرة هي Asiden Labs Ltd (رقم الشركة 17312549، مسجّلة في إنجلترا وويلز). التطبيق للبالغين الذين تبلغ أعمارهم 18 عاماً أو أكثر؛ وتقول صفحة السلامة إنه يعتمد الإقرار الذاتي بالعمر لا التحقق منه، وتحظر الشروط المحتوى الجنسي الصريح."
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "أين تعمل محادثاتك",
        "content": [
          "**يعمل Asiden افتراضياً على حاسوبك: تقول الجهة المطوّرة إن المحادثة والذاكرة والصوت ورؤية الشاشة المحلية تُبقي محادثاتك وسياق الشاشة على الجهاز، والنماذج السحابية اختيارية.**"
        ],
        "items": [
          "**النموذج المحلي.** عند التشغيل الأول يقيس التطبيق بطاقتك الرسومية ويوصي بنموذج Gemma واحد للمحادثة ورؤية الشاشة معاً. حجم التنزيل نحو 4-19 GB، ويحتاج التفعيل وهذا التنزيل إلى اتصال بالإنترنت.",
          "**دون اتصال.** بعد التفعيل والإعداد تقول الجهة المطوّرة إن المحادثة والذكريات والصوت والرؤية المحلية تواصل العمل دون اتصال؛ أما التحديثات والتنزيلات وعمليات البحث على الويب فما زالت تحتاج إلى اتصال.",
          "**الصوت والفيديو محلياً.** أضاف الإصدار 0.31.0 (9 أكتوبر 2026) خدمة Pocket، وهي 23 صوتاً ذكورياً وأنثوياً تعمل محلياً؛ وأضاف الإصدار 0.26.0 تحليل الفيديو محلياً بنموذج Gemma متوافق.",
          "**السحابة، اختيارية.** تضيف Plus وPremium محادثة وصوتاً ورؤية وفيديو مستضافة تُدفع بوحدات Sparks؛ وما ترسله هذه الطلبات مذكور في قسم الخصوصية أدناه."
        ],
        "note": "يقول الموقع إن الأداء يعتمد على حاسوبك وعبء العمل، وإن نموذجاً محلياً كبيراً ولعبة مرهقة يتنافسان على البطاقة الرسومية نفسها. لم تختبر هذه المراجعة السرعة ولا استهلاك VRAM ولا الأثر على الألعاب."
      },
      "getIt": {
        "id": "get-it",
        "title": "كيف تحصل عليه",
        "columns": [
          "المنصة",
          "مكان الحصول عليه"
        ],
        "rows": [
          {
            "المنصة": "Windows 11 (64 بت)",
            "مكان الحصول عليه": "[مثبّت موقّع](https://asiden.ai/#download)، 4.09 GB؛ يلزم مفتاح ترخيص مدفوع"
          },
          {
            "المنصة": "Steam",
            "مكان الحصول عليه": "[صفحة المتجر](https://store.steampowered.com/app/5130370/Asiden/) (الإصدار «قريباً»)"
          },
          {
            "المنصة": "Itch.io",
            "مكان الحصول عليه": "[صفحة Itch.io](https://daf1.itch.io/asiden) (مرتبطة من الموقع؛ لم تُفتح هنا)"
          },
          {
            "المنصة": "أنظمة أخرى",
            "مكان الحصول عليه": "لا نسخة لـ Windows 10 أو Mac أو Linux أو الهاتف (بحسب الموقع)"
          },
          {
            "المنصة": "الحد الأدنى",
            "مكان الحصول عليه": "RAM 16 GB وبطاقة NVIDIA بذاكرة VRAM 8 GB ومساحة حرة 25 GB"
          },
          {
            "المنصة": "الموصى به",
            "مكان الحصول عليه": "RAM 32 GB وبطاقة NVIDIA بذاكرة VRAM 16 GB ومساحة حرة 40 GB"
          },
          {
            "المنصة": "الموقع",
            "مكان الحصول عليه": "[asiden.ai](https://asiden.ai)"
          },
          {
            "المنصة": "سياسة الخصوصية",
            "مكان الحصول عليه": "[إشعار الخصوصية](https://asiden.ai/privacy/) (محدّث في 8 أكتوبر 2026)"
          }
        ],
        "note": "الإصدار المراجَع: 0.32.2 الذي صدر في 18 أكتوبر 2026، وهو أحدث إدخال في سجل التغييرات (إصلاح لتوقيع الشيفرة). يحمل المثبّت على خادم التنزيل التاريخ نفسه، لذا فهو آخر تحديث للتطبيق ولا ينطبق تحذير التوقف عن الصيانة. يحتاج الإعداد إلى اتصال بالإنترنت؛ والمتطلب المنشور للبطاقة الرسومية هو NVIDIA، ويقول الموقع إن التطبيق يفحص عتادك عند التشغيل الأول."
      },
      "pricing": {
        "id": "pricing",
        "title": "الأسعار",
        "content": [
          "**يكلّف التطبيق 10 دولارات مرة واحدة خلال الوصول المبكر: شراء لا اشتراك ولا نسخة تجريبية، مع محادثات محلية غير محدودة بعد ذلك.** يسمّي الموقع هذا سعر الوصول المبكر ويقول إنه قد يتغير، مع بقاء ما اشتريته ملكاً لك.",
          "خطتا Plus (15 دولاراً شهرياً، و1,250 وحدة Sparks لكل تجديد مدفوع) وPremium (30 دولاراً شهرياً، و3,000 وحدة Sparks) اختياريتان وتضيفان محادثة وصوتاً ورؤية وفيديو سحابية مُدارة. تدفع وحدات Sparks مقابل هذه الميزات السحابية، ولا يستهلكها الاستخدام المحلي. الخطط السحابية المدفوعة محدودة بـ 100 مشترك خلال الوصول المبكر، ويعرض الموقع الأسعار بالدولار الأمريكي فقط.",
          "تُوصف نسخة Steam بأنها تستخدم وحدات Sparks مسبقة الدفع تُشترى عبر Steam بدلاً من خطط الموقع، ويغطي الشراء من Itch.io التطبيق المحلي أصلاً."
        ]
      },
      "features": {
        "id": "key-features",
        "title": "الميزات التي يذكرها المطوّر",
        "content": [
          "**كل ما يلي مصدره asiden.ai وسجل تغييراته، ولم يُختبر شيء منه.**"
        ],
        "items": [
          "**الشخصيات.** نماذج 3D ومظهر Live2D لـ Lily وSasha (الإصدار 0.32.0، 17 أكتوبر 2026) ونماذج VRM المستوردة؛ والمظهر والشخصية والذكريات إعدادات منفصلة.",
          "**الذاكرة.** ذكريات ملخّصة تُحفظ على قرصك ويمكنك الاطلاع عليها وتصحيحها وإضافة المزيد إليها وإعادة ضبطها لكل رفيق؛ وينبّه الموقع إلى أن صحة التذكّر غير مضمونة.",
          "**إدراك الشاشة.** اختياري: اقتطع منطقة أو فعّل الرؤية المستمرة من الإعدادات. يذكر الموقع التعرف على الألعاب وحزم ويكي ألعاب قابلة للتنزيل، وتختلف التغطية بحسب اللعبة.",
          "**المحادثة المبادِرة.** تتراوح الثرثرة من «متحفظ» إلى «بلا توقف»، ويمنع «إيقاف مؤقت» الرفيق من الاستماع والمشاهدة والرد.",
          "**الصوت.** إدخال بالميكروفون بالضغط للتحدث أو دون استخدام اليدين؛ وتقتصر أصوات الاستوديو السحابية على 30,000 حرف لكل حساب في الشهر التقويمي، وتبقى الأصوات المحلية متاحة."
        ],
        "note": "النسخة المثبّتة هي المرجع النهائي لما يعمل فعلاً."
      },
      "privacy": {
        "id": "privacy",
        "title": "سياسة الخصوصية وتدفق البيانات",
        "content": [
          "**يقول إشعار الخصوصية (آخر تحديث في 8 أكتوبر 2026) إن Asiden محلي افتراضياً: تبقى المحادثة والذاكرة وسياق الشاشة المحلية على حاسوبك، ولا تغادره المعلومات إلا عندما تختار ميزة تستخدم الشبكة مثل التفعيل أو الشراء أو المحادثة السحابية أو الصوت السحابي أو الرؤية السحابية.**",
          "تمر الطلبات السحابية المُدارة عبر وكيل الجهة المطوّرة المستضاف على Microsoft Azure في المملكة المتحدة إلى Venice AI أو OpenRouter ثم إلى مزوّد النموذج اللاحق؛ ويذهب الصوت السحابي إلى ElevenLabs. يقول الإشعار إن الوكيل مصمَّم لعدم حفظ محتوى الأوامر والردود وإن محتوى المحادثات لا يُستخدم لتدريب نماذج الجهة المطوّرة نفسها، لكنه يقول أيضاً إن هذا ليس تشفيراً من طرف إلى طرف وإن المزوّدين يطبقون سياسات الاحتفاظ الخاصة بهم. قد يتضمن الطلب السحابي ذكريات محفوظة ذات صلة، ولقطة شاشة مختارة إذا فعّلت ذلك. رؤية الشاشة المحلية متوقفة حتى تفعّلها، والرؤية السحابية متوقفة افتراضياً."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Asiden مغلق المصدر، لذا لا يمكن التحقق من أي من هذا في الشيفرة، ولم تفحص PromptQuorum حركة الشبكة. قد تكون المحادثات مع الرفيق شخصية: اقرأ في الإشعار ما قد يحتويه الطلب السحابي قبل تفعيل الميزات السحابية."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "لمن يناسب",
        "items": [
          "**لاعبو Windows 11 ومستخدمو سطح المكتب الذين يملكون بطاقة NVIDIA بذاكرة VRAM لا تقل عن 8 GB** ويريدون شخصية تعلّق على ما يلعبونه أو يعملون عليه.",
          "**من يريدون محادثة وذاكرة محليتين أولاً** دون رسوم لكل رسالة ويقبلون برنامجاً في مرحلة الوصول المبكر.",
          "**أصحاب العتاد الأضعف المرتاحون للذكاء الاصطناعي السحابي** ممن سيستخدمون Plus أو Premium بدل النموذج المحلي."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "ما لم نتمكن من التحقق منه",
        "items": [
          "**السلوك عملياً.** لم تُختبر جودة الإجابات والصوت ولا السرعة واستهلاك VRAM ولا العمل دون اتصال ولا الأثر على الألعاب.",
          "**الخصوصية عملياً.** تأتي العبارات من إشعار الجهة المطوّرة وموقعها؛ لم تُفحص حركة الشبكة ولم يُعثر على تدقيق مستقل.",
          "**بطاقات AMD وIntel.** المتطلب المنشور هو بطاقة NVIDIA؛ ويقول الموقع فقط إن التطبيق يقيس عتادك عند التشغيل الأول.",
          "**صفحة Itch.io.** هي مرتبطة من الموقع لكنها كانت خلف فحص للروبوتات فلم تُقرأ.",
          "**نسخة Steam.** تعرض صفحة المتجر الإصدار بعبارة «قريباً»، فلا يمكن بعد التحقق من نسخة Steam ونظام رصيدها.",
          "**الشيفرة المصدرية والتوقيع.** التطبيق مغلق المصدر ولا مستودع عاماً له؛ ويُوصف المثبّت بأنه موقّع بمجموع تحقق منشور، لكن لم يُتحقق من أي منهما هنا.",
          "**ميزات السلامة.** تصف صفحة السلامة فحوص الأزمات على الجهاز واستجابة ثابتة؛ ولم تُختبر فعاليتها، والتطبيق ليس معالجاً نفسياً ولا خدمة طوارئ."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "المنافسون والبدائل",
        "columns": [
          "التطبيق",
          "المنصات",
          "السعر / الترخيص",
          "الفرق الرئيسي"
        ],
        "rows": [
          {
            "التطبيق": "[Backyard AI](/ar/power-local-llm/backyard-ai-review-local-roleplay)",
            "المنصات": "Windows وmacOS",
            "السعر / الترخيص": "مجاني جزئياً / مغلق المصدر",
            "الفرق الرئيسي": "عميل سطح مكتب محلي لمحادثة الشخصيات ولعب الأدوار"
          },
          {
            "التطبيق": "[RisuAI](/ar/power-local-llm/risuai-review)",
            "المنصات": "ويب وWindows وmacOS وLinux",
            "السعر / الترخيص": "مجاني / GPL 3.0",
            "الفرق الرئيسي": "واجهة محادثة مفتوحة المصدر للعب الأدوار"
          },
          {
            "التطبيق": "[Castmates](/ar/power-local-llm/castmates-review)",
            "المنصات": "iOS",
            "السعر / الترخيص": "مجاني جزئياً / مغلق المصدر",
            "الفرق الرئيسي": "محادثة شخصيات دون إنترنت على iPhone"
          }
        ],
        "note": "تتغير تفاصيل المنافسين كثيراً؛ تأكد من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق."
      },
      "faq": {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faqs": [
          {
            "q": "هل يمكنني استخدام Asiden دون اشتراك؟",
            "a": "نعم. الاشتراكات تفتح الميزات السحابية المُدارة فقط، وتقول الجهة المطوّرة إن إلغاءها يُبقي التطبيق والوضع المحلي وذكرياتك على حاسوبك. وقد تكون ذكريات ذات صلة قد أُدرجت في طلبات سحابية سابقة."
          },
          {
            "q": "هل Asiden على Steam؟",
            "a": "توجد صفحة على Steam لكن الإصدار معروض بعبارة «قريباً». وتصف نسخة تُشترى لمرة واحدة مع رصيد سحابي اختياري مسبق الدفع."
          },
          {
            "q": "هل Asiden مناسب للأطفال؟",
            "a": "لا. تقول الجهة المطوّرة إنه للبالغين الذين تبلغ أعمارهم 18 عاماً أو أكثر ويعتمد على الإقرار الذاتي لا على التحقق من العمر."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "الخلاصة",
        "content": "Asiden رفيق شاب لـ Windows 11 يُحدَّث كثيراً، وعرضه محادثة وذاكرة محليتان بسعر لمرة واحدة مع ذكاء اصطناعي سحابي مدفوع كخيار. حدوده هي الوصول المبكر ومطوّر منفرد والشيفرة المغلقة ووضع محلي لا يعمل إلا على NVIDIA وتنزيل كبير جداً وعبارات الخصوصية والسلامة التي مصدرها الجهة المطوّرة. يناسب مستخدمي Windows الذين يملكون عتاد NVIDIA ويريدون تجربة رفيق دائم؛ ومن يحتاج إلى مصدر مفتوح أو منصات أخرى فعليه مقارنة [RisuAI](/ar/power-local-llm/risuai-review) أو [Backyard AI](/ar/power-local-llm/backyard-ai-review-local-roleplay)."
      },
      "sources": {
        "id": "sources",
        "title": "المصادر",
        "items": [
          "[موقع Asiden](https://asiden.ai) — وصف المنتج وقسم التنزيل والمتطلبات وسجل التغييرات، فُحصت في 24 أكتوبر 2026.",
          "[أسعار Asiden](https://asiden.ai/pricing/) — سعر التطبيق وخطتا Plus وPremium ووحدات Sparks وحدود الوصول المبكر؛ محدّثة في 17 أكتوبر 2026.",
          "[متطلبات نظام Asiden](https://asiden.ai/system-requirements/) — الحاسوب الأدنى والموصى به وتنزيل التشغيل الأول؛ محدّثة في 10 سبتمبر 2026.",
          "[إشعار خصوصية Asiden](https://asiden.ai/privacy/) — تدفق البيانات محلياً وسحابياً والمزوّدون والاحتفاظ؛ آخر تحديث في 8 أكتوبر 2026.",
          "[بروتوكول السلامة والأزمات في Asiden](https://asiden.ai/safety/) — الاستخدام للبالغين فقط والتعامل مع الأزمات؛ الإصدار 1.0، 1 أغسطس 2026.",
          "[شروط استخدام Asiden](https://asiden.ai/terms/) — شروط الترخيص، الإصدار 2.11، 17 أكتوبر 2026.",
          "[Asiden على Steam](https://store.steampowered.com/app/5130370/Asiden/) — صفحة متجر تعرض الإصدار بعبارة «قريباً»، فُحصت في 24 أكتوبر 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[مراجعة Backyard AI](/ar/power-local-llm/backyard-ai-review-local-roleplay) — عميل سطح مكتب محلي لمحادثة الشخصيات ولعب الأدوار.",
          "[مراجعة RisuAI](/ar/power-local-llm/risuai-review) — واجهة محادثة مفتوحة المصدر للعب الأدوار.",
          "[مراجعة Castmates](/ar/power-local-llm/castmates-review) — تطبيق محادثة شخصيات بالذكاء الاصطناعي دون إنترنت لـ iPhone.",
          "[SillyTavern vs Agnai vs RisuAI](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — مقارنة بين واجهات لعب الأدوار المحلية."
        ]
      }
    }
  },
  zh: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-24",
    "dateModified": "2026-10-24",
    "next_refresh_due": "2027-04-24",
    "theme": "Creative & Roleplay",
    "heroImage": "/images/asiden-review-hero-zh.webp",
    "title": "Asiden 评测：支持本地运行、可选云端 AI 的 Windows 11 AI 桌面伴侣",
    "seoTitle": "Asiden 评测：Windows 11 AI 桌面伴侣",
    "intro": "Asiden 是 Asiden Labs Ltd 推出的 Windows 11 AI 桌面伴侣，目前处于抢先体验阶段，其官网称自己是独立开发者。据开发方称，聊天、记忆、语音和屏幕视觉可在 NVIDIA 显卡上本地运行，付费云端 AI 为可选项。本评测基于 2026 年 10 月 24 日查看的 asiden.ai、定价、隐私和安全页面以及更新日志。",
    "metaDescription": "Asiden 评测：支持 3D 与 Live2D 角色、本地聊天和记忆、可选云端 AI 的 Windows 11 AI 桌面伴侣。开发方怎么说，哪些内容未经核实。",
    "twitterDescription": "Asiden 评测：面向 NVIDIA 显卡的闭源 Windows 11 AI 伴侣。哪些功能在本地运行、云端套餐会把什么发送出 PC、价格如何，以及哪些内容未核实。",
    "audience": "使用 NVIDIA 显卡的 Windows 11 用户，想了解 Asiden 的价格、哪些数据留在 PC 上、云端套餐增加了什么，以及各来源能证实哪些说法。",
    "readTime": "阅读约6分钟",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Asiden 评测",
    "targetKeywords": [
      "asiden 评测",
      "asiden ai 伴侣",
      "windows 11 ai 桌面伴侣",
      "本地 ai 伴侣 nvidia 显卡",
      "带屏幕视觉的 ai 伴侣",
      "live2d ai 伴侣 windows",
      "asiden vs backyard ai"
    ],
    "current_models_mentioned": [
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "NVIDIA GPU",
      "Windows 11 PC"
    ],
    "leadAnswerBlock": "**Asiden 是一款闭源、处于抢先体验阶段的 Windows 11 伴侣应用，带有 3D 和 Live2D 角色，据开发方称，聊天和记忆默认保留在你的 PC 上。** **本地模式需要显存 8 GB 的 NVIDIA 显卡，可选的云端功能会把数据发送出 PC。**",
    "quickAnswerTop": {
      "zh": {
        "question": "Asiden 会把我的对话保留在 PC 上吗？",
        "answer": "据开发方称，本地模式下会：对话、记忆和屏幕上下文都留在 PC 上，只有你主动开启时才会使用云端路径。本评测没有测试这一点。",
        "bullets": [
          "仅支持 64 位 Windows 11，从 [asiden.ai](https://asiden.ai) 获取已签名的安装程序；没有 Mac、Linux、手机或 Windows 10 版本。",
          "本地模式需要 NVIDIA 显卡、16 GB 内存，并在首次运行时下载 4-19 GB 的模型。",
          "应用为一次性买断；云端套餐 Plus 和 Premium 是可选的月度订阅。"
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "快速解答",
        "anchor": "quick-answer"
      },
      {
        "label": "Asiden 是什么？",
        "anchor": "what-is-asiden"
      },
      {
        "label": "你的聊天在哪里运行",
        "anchor": "where-it-runs"
      },
      {
        "label": "获取方式",
        "anchor": "get-it"
      },
      {
        "label": "价格",
        "anchor": "pricing"
      },
      {
        "label": "开发者列出的功能",
        "anchor": "key-features"
      },
      {
        "label": "隐私政策与数据流向",
        "anchor": "privacy"
      },
      {
        "label": "适合哪些人使用",
        "anchor": "who-should-use"
      },
      {
        "label": "我们无法核实的内容",
        "anchor": "who-should-not-use"
      },
      {
        "label": "竞品与替代方案",
        "anchor": "vs-alternatives"
      },
      {
        "label": "常见问题",
        "anchor": "faq"
      },
      {
        "label": "结论",
        "anchor": "verdict"
      },
      {
        "label": "来源",
        "anchor": "sources"
      },
      {
        "label": "延伸阅读",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "核心要点",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Asiden 是一款闭源的 Windows 11 桌面伴侣，会显示 3D 或 Live2D 角色，记住你告诉它的内容，并在你允许时查看你的屏幕。"
          },
          {
            "type": "plain-terms",
            "text": "你购买许可证密钥，安装一个体积很大的已签名 Windows 程序，它会下载一个与你显卡匹配的本地语言模型。设置完成后，聊天、记忆、语音和屏幕视觉可以离线运行；付费云端套餐则增加托管模型。"
          }
        ],
        "items": [
          "开发方：Asiden Labs Ltd，在英格兰和威尔士注册的公司，官网称其为独立开发者；产品属于抢先体验软件。",
          "更新节奏：更新日志从 2026 年 9 月 7 日的 0.24.0 版本一直列到 2026 年 10 月 18 日的 0.32.2 版本。",
          "角色：四位主打伴侣（Mei、Lily、Jae 和 Sasha）、另外十种性格预设，以及自定义性格向导；Lily 和 Sasha 还有 Live2D 外观。",
          "Steam：已有商店页面，但发售时间标为“即将推出”；官网版和 Itch.io 版现在即可购买。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本评测基于 2026 年 10 月 24 日查看的 asiden.ai 及其链接的法律页面、下载服务器的响应头和 Steam 商店页面。没有进行实际使用、网络抓包或基准测试。"
          }
        ]
      },
      "overview": {
        "id": "what-is-asiden",
        "title": "Asiden 是什么？",
        "content": [
          "**Asiden 是面向 Windows 11 的桌面伴侣：一个有名字的角色常驻你的桌面，可通过文字或语音交谈，随时间积累记忆，并在你选择时查看你的屏幕。** 官网介绍了四位主打伴侣 Mei、Lily、Jae 和 Sasha，各有简短的性格描述，另有十种性格预设和一个用于编写自定义性格的向导。",
          "开发方是 Asiden Labs Ltd（公司编号 17312549，在英格兰和威尔士注册）。该应用面向 18 岁及以上的成年人；安全页面称其采用年龄自我声明而非年龄核验，使用条款禁止露骨的性内容。"
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "你的聊天在哪里运行",
        "content": [
          "**默认情况下 Asiden 在你的 PC 上运行：开发方称，本地聊天、记忆、语音和屏幕视觉会把你的对话和屏幕上下文留在本机，云端模型为可选项。**"
        ],
        "items": [
          "**本地模型。** 首次运行时，应用会检测你的显卡，并推荐一个同时用于聊天和屏幕视觉的 Gemma 模型。下载约 4-19 GB，激活和下载都需要联网。",
          "**离线使用。** 开发方称，激活和设置完成后，本地聊天、记忆、语音和视觉无需联网即可继续使用；更新、下载和网页搜索仍需联网。",
          "**本地语音与视频。** 0.31.0 版本（2026 年 10 月 9 日）新增 Pocket，共 23 种在本地运行的男声和女声；0.26.0 版本新增了使用兼容的 Gemma 模型进行的本地视频分析。",
          "**云端（可选）。** Plus 和 Premium 增加托管的聊天、语音、视觉和视频，以 Sparks 计费；这些请求会发送哪些内容，见下文隐私部分。"
        ],
        "note": "官网称性能取决于你的 PC 和使用负载，大型本地模型与高负载游戏会争用同一块显卡。本评测没有测试速度、显存占用或对游戏的影响。"
      },
      "getIt": {
        "id": "get-it",
        "title": "获取方式",
        "columns": [
          "平台",
          "获取方式"
        ],
        "rows": [
          {
            "平台": "Windows 11（64 位）",
            "获取方式": "[已签名安装程序](https://asiden.ai/#download)，4.09 GB；需要付费许可证密钥"
          },
          {
            "平台": "Steam",
            "获取方式": "[商店页面](https://store.steampowered.com/app/5130370/Asiden/)（发售标为“即将推出”）"
          },
          {
            "平台": "Itch.io",
            "获取方式": "[Itch.io 页面](https://daf1.itch.io/asiden)（官网有链接；本次未打开）"
          },
          {
            "平台": "其他系统",
            "获取方式": "没有 Windows 10、Mac、Linux 或手机版本（据官网）"
          },
          {
            "平台": "最低配置",
            "获取方式": "16 GB 内存，8 GB 显存的 NVIDIA 显卡，25 GB 可用空间"
          },
          {
            "平台": "推荐配置",
            "获取方式": "32 GB 内存，16 GB 显存的 NVIDIA 显卡，40 GB 可用空间"
          },
          {
            "平台": "官网",
            "获取方式": "[asiden.ai](https://asiden.ai)"
          },
          {
            "平台": "隐私政策",
            "获取方式": "[隐私声明](https://asiden.ai/privacy/)（2026 年 10 月 8 日更新）"
          }
        ],
        "note": "评测版本：0.32.2，发布于 2026 年 10 月 18 日，是更新日志中最新的一条（修复代码签名）。下载服务器上的安装程序日期与之相同，因此这是该应用最近一次更新，不适用“已停止维护”警告。设置过程需要联网；公布的显卡要求为 NVIDIA，官网称应用会在首次运行时检测你的硬件。"
      },
      "pricing": {
        "id": "pricing",
        "title": "价格",
        "content": [
          "**应用在抢先体验期间一次性收费 10 美元：这是买断，不是订阅或试用，此后本地对话不限量。** 官网称这是抢先体验价格，可能调整，但已购买的内容仍然有效。",
          "Plus（每月 15 美元，每次付费续订 1,250 Sparks）和 Premium（每月 30 美元，3,000 Sparks）为可选项，增加托管的云端聊天、语音、视觉和视频。Sparks 用于支付这些云端功能，本地使用不消耗。抢先体验期间，付费云端套餐限 100 名订阅者，官网仅以美元标价。",
          "Steam 版据称使用通过 Steam 购买的预付 Sparks，而不是官网套餐；在 Itch.io 购买已涵盖本地应用。"
        ]
      },
      "features": {
        "id": "key-features",
        "title": "开发者列出的功能",
        "content": [
          "**以下内容均来自 asiden.ai 及其更新日志，均未经测试。**"
        ],
        "items": [
          "**角色。** 3D 模型、Lily 和 Sasha 的 Live2D 外观（0.32.0 版本，2026 年 10 月 17 日）以及导入的 VRM 模型；外观、性格和记忆是相互独立的设置。",
          "**记忆。** 提炼后的记忆保存在你的硬盘上，可按伴侣查看、修正、补充和重置；官网提醒，不保证每次都能正确回忆。",
          "**屏幕感知。** 可选：框选一个区域，或在设置中开启持续视觉。官网提到游戏识别和可下载的游戏 Wiki 包，覆盖范围因游戏而异。",
          "**主动聊天。** 话多程度从“保守”到“不间断”，“暂停”可让伴侣停止聆听、观察和回复。",
          "**语音。** 支持按键说话或免提麦克风输入；云端录音室语音每个账户每个自然月限 30,000 个字符，本地语音仍可使用。"
        ],
        "note": "实际可用的功能以安装的版本为准。"
      },
      "privacy": {
        "id": "privacy",
        "title": "隐私政策与数据流向",
        "content": [
          "**隐私声明（最后更新于 2026 年 10 月 8 日）称 Asiden 默认在本地运行：本地聊天、记忆和屏幕上下文留在你的 PC 上，只有当你选择需要联网的功能（如激活、购买、云端聊天、云端语音或云端视觉）时，信息才会离开 PC。**",
          "托管的云端请求会经由开发方部署在英国 Microsoft Azure 上的代理，发送到 Venice AI 或 OpenRouter 以及下游模型提供方；云端语音发送到 ElevenLabs。声明称，该代理的设计不保存提示词或回复内容，对话内容也不会用于训练开发方自己的模型，但同时说明这不是端到端加密，且各提供方适用各自的数据保留规则。云端请求可能包含相关的已保存记忆，以及（若你启用）所选的屏幕截图。本地屏幕视觉在你启用前处于关闭状态，云端视觉默认关闭。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Asiden 是闭源软件，因此以上内容都无法在代码中核实，PromptQuorum 也没有检查网络流量。与伴侣的对话可能很私人：在开启云端功能之前，请先在声明中阅读云端请求可能包含的内容。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "适合哪些人使用",
        "items": [
          "**拥有 8 GB 及以上显存 NVIDIA 显卡的 Windows 11 玩家和桌面用户**，想要一个会对自己玩的游戏或手头工作发表评论的角色。",
          "**想要以本地为先的聊天和记忆的人**，不想按消息付费，并能接受抢先体验阶段的软件。",
          "**硬件较弱但能接受云端 AI 的用户**，会用 Plus 或 Premium 代替本地模型。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "我们无法核实的内容",
        "items": [
          "**实际表现。** 回答质量、语音质量、速度、显存占用、离线运行以及对游戏的影响均未测试。",
          "**隐私的实际情况。** 相关说法来自开发方的声明和官网；没有检查网络流量，也没有找到独立审计。",
          "**AMD 和 Intel 显卡。** 公布的要求是 NVIDIA 显卡；官网只说应用会在首次运行时检测你的硬件。",
          "**Itch.io 页面。** 官网有链接，但该页面处于机器人验证之后，未能读取。",
          "**Steam 版。** 商店页面把发售标为“即将推出”，因此还无法核实 Steam 版及其点数系统。",
          "**源代码与签名。** 应用闭源，没有公开仓库；安装程序据称已签名并公布了校验值，但这两点此处均未验证。",
          "**安全功能。** 安全页面描述了设备端的危机检测和固定回应；其效果未经测试，该应用不是治疗师，也不是紧急服务。"
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "竞品与替代方案",
        "columns": [
          "应用",
          "平台",
          "价格 / 许可证",
          "主要区别"
        ],
        "rows": [
          {
            "应用": "[Backyard AI](/zh/power-local-llm/backyard-ai-review-local-roleplay)",
            "平台": "Windows、macOS",
            "价格 / 许可证": "免费增值 / 闭源",
            "主要区别": "用于角色聊天和角色扮演的本地桌面客户端"
          },
          {
            "应用": "[RisuAI](/zh/power-local-llm/risuai-review)",
            "平台": "Web、Windows、macOS、Linux",
            "价格 / 许可证": "免费 / GPL 3.0",
            "主要区别": "开源的角色扮演聊天前端"
          },
          {
            "应用": "[Castmates](/zh/power-local-llm/castmates-review)",
            "平台": "iOS",
            "价格 / 许可证": "免费增值 / 闭源",
            "主要区别": "iPhone 上的离线角色聊天"
          }
        ],
        "note": "竞品信息变化很快；请在各应用自己的页面上确认当前的价格、许可证和平台。"
      },
      "faq": {
        "id": "faq",
        "title": "常见问题",
        "faqs": [
          {
            "q": "不订阅也能使用 Asiden 吗？",
            "a": "可以。订阅只解锁托管的云端功能，开发方称取消订阅后，应用、本地模式和你的记忆仍保留在 PC 上。相关记忆可能已包含在过去的云端请求中。"
          },
          {
            "q": "Asiden 上架 Steam 了吗？",
            "a": "已有 Steam 页面，但发售时间标为“即将推出”。页面描述的是一次性买断、可选预付云端点数的版本。"
          },
          {
            "q": "Asiden 适合儿童使用吗？",
            "a": "不适合。开发方称它面向 18 岁及以上的成年人，并依靠自我声明而非年龄核验。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "结论",
        "content": "Asiden 是一款较新、更新频繁的 Windows 11 伴侣应用，卖点是一次性买断的本地聊天和记忆，并以付费云端 AI 作为选项。它的局限包括：抢先体验阶段、独立开发者、闭源、仅限 NVIDIA 的本地模式、体积很大的下载，以及来自开发方自己的隐私和安全说法。它适合想尝试常驻伴侣的 NVIDIA 显卡 Windows 用户；需要开源或其他平台的用户，可对比 [RisuAI](/zh/power-local-llm/risuai-review) 或 [Backyard AI](/zh/power-local-llm/backyard-ai-review-local-roleplay)。"
      },
      "sources": {
        "id": "sources",
        "title": "来源",
        "items": [
          "[Asiden 官网](https://asiden.ai) — 产品介绍、下载区、系统要求和更新日志，2026 年 10 月 24 日查看。",
          "[Asiden 定价](https://asiden.ai/pricing/) — 应用价格、Plus 与 Premium 套餐、Sparks 及抢先体验限制；2026 年 10 月 17 日更新。",
          "[Asiden 系统要求](https://asiden.ai/system-requirements/) — 最低与推荐配置及首次运行的下载；2026 年 9 月 10 日更新。",
          "[Asiden 隐私声明](https://asiden.ai/privacy/) — 本地与云端数据流向、提供方和数据保留；最后更新于 2026 年 10 月 8 日。",
          "[Asiden 安全与危机协议](https://asiden.ai/safety/) — 仅限成年人使用及危机处理；1.0 版，2026 年 8 月 1 日。",
          "[Asiden 使用条款](https://asiden.ai/terms/) — 许可条款，2.11 版，2026 年 10 月 17 日。",
          "[Steam 上的 Asiden](https://store.steampowered.com/app/5130370/Asiden/) — 发售标为“即将推出”的商店页面，2026 年 10 月 24 日查看。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "延伸阅读",
        "items": [
          "[Backyard AI评测](/zh/power-local-llm/backyard-ai-review-local-roleplay) — 用于角色聊天和角色扮演的本地桌面客户端。",
          "[RisuAI评测](/zh/power-local-llm/risuai-review) — 开源的角色扮演聊天前端。",
          "[Castmates 评测](/zh/power-local-llm/castmates-review) — 适用于 iPhone 的离线 AI 角色聊天应用。",
          "[SillyTavern vs Agnai vs RisuAI](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 本地角色扮演前端的对比。"
        ]
      }
    }
  },
  ko: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-24",
    "dateModified": "2026-10-24",
    "next_refresh_due": "2027-04-24",
    "theme": "Creative & Roleplay",
    "heroImage": "/images/asiden-review-hero-ko.webp",
    "title": "Asiden 리뷰: 로컬 실행과 선택형 클라우드 AI를 갖춘 Windows 11 AI 데스크톱 컴패니언",
    "seoTitle": "Asiden 리뷰: Windows 11 AI 컴패니언",
    "intro": "Asiden은 Asiden Labs Ltd가 선보인 Windows 11용 얼리 액세스 AI 데스크톱 컴패니언이며, 해당 사이트는 1인 개발자라고 소개합니다. 제작사에 따르면 채팅, 기억, 음성, 화면 인식은 NVIDIA GPU에서 로컬로 실행되고, 유료 클라우드 AI는 선택 사항입니다. 이 리뷰는 2026년 10월 24일에 확인한 asiden.ai, 가격·개인정보·안전 페이지, 변경 내역을 바탕으로 합니다.",
    "metaDescription": "Asiden 리뷰: 3D·Live2D 캐릭터, 로컬 채팅과 기억, 선택형 클라우드 AI를 갖춘 Windows 11 AI 데스크톱 컴패니언. 제작사의 주장과 확인하지 못한 사항을 정리했습니다.",
    "twitterDescription": "Asiden 리뷰: NVIDIA GPU용 클로즈드 소스 Windows 11 AI 컴패니언. 로컬로 실행되는 범위, 클라우드 요금제가 PC 밖으로 보내는 내용, 가격, 미확인 사항을 다룹니다.",
    "audience": "NVIDIA GPU를 쓰는 Windows 11 사용자 중 Asiden의 가격, PC에 남는 데이터, 클라우드 요금제가 더하는 기능, 출처가 뒷받침하는 주장을 알고 싶은 분.",
    "readTime": "6분 읽기",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Asiden 리뷰",
    "targetKeywords": [
      "asiden 리뷰",
      "asiden ai 컴패니언",
      "windows 11 ai 데스크톱 컴패니언",
      "로컬 ai 컴패니언 nvidia gpu",
      "화면 인식 ai 컴패니언",
      "live2d ai 컴패니언 windows",
      "asiden vs backyard ai"
    ],
    "current_models_mentioned": [
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "NVIDIA GPU",
      "Windows 11 PC"
    ],
    "leadAnswerBlock": "**Asiden은 3D·Live2D 캐릭터를 갖춘 클로즈드 소스 얼리 액세스 Windows 11 컴패니언 앱으로, 제작사에 따르면 채팅과 기억을 기본적으로 PC에 보관합니다.** **로컬 모드에는 VRAM 8 GB의 NVIDIA GPU가 필요하며, 선택형 클라우드 기능은 데이터를 PC 밖으로 보냅니다.**",
    "quickAnswerTop": {
      "ko": {
        "question": "Asiden은 대화를 내 PC에 보관하나요?",
        "answer": "제작사에 따르면 로컬 모드에서는 그렇습니다. 대화, 기억, 화면 맥락이 PC에 남고, 클라우드 경로는 직접 켰을 때만 사용됩니다. 여기서는 아무것도 테스트하지 않았습니다.",
        "bullets": [
          "Windows 11 64비트 전용이며, [asiden.ai](https://asiden.ai)에서 서명된 설치 파일을 받습니다. Mac, Linux, 스마트폰, Windows 10 버전은 없습니다.",
          "로컬 모드에는 NVIDIA GPU, 16 GB RAM, 첫 실행 시 4-19 GB 모델 내려받기가 필요합니다.",
          "앱은 1회 구매이고, 클라우드 요금제 Plus와 Premium은 선택형 월 구독입니다."
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "빠른 답변",
        "anchor": "quick-answer"
      },
      {
        "label": "Asiden란 무엇인가?",
        "anchor": "what-is-asiden"
      },
      {
        "label": "채팅이 실행되는 위치",
        "anchor": "where-it-runs"
      },
      {
        "label": "어디서 받나요?",
        "anchor": "get-it"
      },
      {
        "label": "가격",
        "anchor": "pricing"
      },
      {
        "label": "개발자가 밝힌 기능",
        "anchor": "key-features"
      },
      {
        "label": "개인정보 처리방침과 데이터 흐름",
        "anchor": "privacy"
      },
      {
        "label": "이런 분께 적합합니다",
        "anchor": "who-should-use"
      },
      {
        "label": "확인하지 못한 사항",
        "anchor": "who-should-not-use"
      },
      {
        "label": "경쟁 앱과 대안",
        "anchor": "vs-alternatives"
      },
      {
        "label": "자주 묻는 질문",
        "anchor": "faq"
      },
      {
        "label": "결론",
        "anchor": "verdict"
      },
      {
        "label": "출처",
        "anchor": "sources"
      },
      {
        "label": "관련 읽을거리",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "핵심 내용",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Asiden은 3D 또는 Live2D 캐릭터를 보여 주고, 사용자가 말한 내용을 기억하며, 허용하면 화면도 볼 수 있는 클로즈드 소스 Windows 11 데스크톱 컴패니언입니다."
          },
          {
            "type": "plain-terms",
            "text": "라이선스 키를 구매하고 서명된 대용량 Windows 프로그램을 설치하면, 그래픽 카드에 맞는 로컬 언어 모델 하나를 내려받습니다. 설정 후에는 채팅, 기억, 음성, 화면 인식이 오프라인에서 동작할 수 있고, 유료 클라우드 요금제는 호스팅 모델을 추가합니다."
          }
        ],
        "items": [
          "제작사: 잉글랜드·웨일스에 등록된 Asiden Labs Ltd이며, 자사 사이트에서 1인 개발자로 소개됩니다. 제품은 얼리 액세스 소프트웨어입니다.",
          "업데이트 속도: 변경 내역은 2026년 9월 7일의 0.24.0 버전부터 2026년 10월 18일의 0.32.2 버전까지 이어집니다.",
          "캐릭터: 대표 컴패니언 4명(Mei, Lily, Jae, Sasha), 추가 성격 프리셋 10개, 맞춤 성격 마법사가 있으며 Lily와 Sasha는 Live2D 모습도 있습니다.",
          "Steam: 스토어 페이지는 있지만 출시는 \"출시 예정\"으로 표시됩니다. 웹사이트 버전과 Itch.io 버전은 지금 구매할 수 있습니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이 리뷰는 2026년 10월 24일에 확인한 asiden.ai와 연결된 법적 고지 페이지, 다운로드 서버의 응답 헤더, Steam 스토어 페이지를 바탕으로 합니다. 직접 사용, 네트워크 점검, 벤치마크는 하지 않았습니다."
          }
        ]
      },
      "overview": {
        "id": "what-is-asiden",
        "title": "Asiden란 무엇인가?",
        "content": [
          "**Asiden은 Windows 11용 데스크톱 컴패니언입니다. 이름이 있는 캐릭터가 바탕화면에 머물며 텍스트나 음성으로 대화하고, 시간이 지나면서 기억을 쌓고, 사용자가 선택하면 화면을 볼 수 있습니다.** 사이트는 대표 컴패니언 4명 Mei, Lily, Jae, Sasha를 각각 짧은 성격 소개와 함께 보여 주며, 추가 성격 프리셋 10개와 직접 성격을 만드는 마법사도 제공합니다.",
          "제작사는 Asiden Labs Ltd(회사 번호 17312549, 잉글랜드·웨일스 등록)입니다. 앱은 만 18세 이상 성인용이며, 안전 페이지에 따르면 연령 확인이 아닌 자기 신고 방식이고 이용 약관은 노골적인 성적 콘텐츠를 금지합니다."
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "채팅이 실행되는 위치",
        "content": [
          "**기본적으로 Asiden은 PC에서 실행됩니다. 제작사에 따르면 로컬 채팅, 기억, 음성, 화면 인식은 대화와 화면 맥락을 기기에 보관하며, 클라우드 모델은 선택 사항입니다.**"
        ],
        "items": [
          "**로컬 모델.** 첫 실행 시 앱이 GPU를 측정하고 채팅과 화면 인식에 함께 쓸 Gemma 모델 하나를 추천합니다. 내려받기 용량은 약 4-19 GB이며, 활성화와 이 내려받기에는 인터넷 연결이 필요합니다.",
          "**오프라인.** 제작사는 활성화와 설정 후 로컬 채팅, 기억, 음성, 화면 인식이 연결 없이도 계속 동작한다고 밝힙니다. 업데이트, 내려받기, 웹 검색에는 여전히 연결이 필요합니다.",
          "**로컬 음성과 영상.** 0.31.0 버전(2026년 10월 9일)에서 로컬로 실행되는 남녀 음성 23개의 Pocket이 추가되었고, 0.26.0 버전에서는 호환되는 Gemma 모델로 하는 로컬 영상 분석이 추가되었습니다.",
          "**클라우드(선택).** Plus와 Premium은 호스팅 채팅, 음성, 화면 인식, 영상을 추가하며 Sparks로 결제합니다. 이 요청이 보내는 내용은 아래 개인정보 항목에서 다룹니다."
        ],
        "note": "사이트에 따르면 성능은 PC와 작업 부하에 달려 있으며, 큰 로컬 모델과 부담이 큰 게임은 같은 그래픽 카드를 두고 경쟁합니다. 이 리뷰는 속도, VRAM 사용량, 게임에 미치는 영향을 테스트하지 않았습니다."
      },
      "getIt": {
        "id": "get-it",
        "title": "어디서 받나요?",
        "columns": [
          "플랫폼",
          "받는 곳"
        ],
        "rows": [
          {
            "플랫폼": "Windows 11(64비트)",
            "받는 곳": "[서명된 설치 파일](https://asiden.ai/#download), 4.09 GB, 유료 라이선스 키 필요"
          },
          {
            "플랫폼": "Steam",
            "받는 곳": "[스토어 페이지](https://store.steampowered.com/app/5130370/Asiden/)(출시는 \"출시 예정\")"
          },
          {
            "플랫폼": "Itch.io",
            "받는 곳": "[Itch.io 페이지](https://daf1.itch.io/asiden)(사이트에서 연결, 이번에는 열지 않음)"
          },
          {
            "플랫폼": "기타 시스템",
            "받는 곳": "Windows 10, Mac, Linux, 스마트폰 버전 없음(사이트 기준)"
          },
          {
            "플랫폼": "최소 사양",
            "받는 곳": "RAM 16 GB, VRAM 8 GB의 NVIDIA GPU, 여유 공간 25 GB"
          },
          {
            "플랫폼": "권장 사양",
            "받는 곳": "RAM 32 GB, VRAM 16 GB의 NVIDIA GPU, 여유 공간 40 GB"
          },
          {
            "플랫폼": "웹사이트",
            "받는 곳": "[asiden.ai](https://asiden.ai)"
          },
          {
            "플랫폼": "개인정보 처리방침",
            "받는 곳": "[개인정보 고지](https://asiden.ai/privacy/)(2026년 10월 8일 갱신)"
          }
        ],
        "note": "확인한 버전: 0.32.2(2026년 10월 18일 출시). 변경 내역의 최신 항목으로 코드 서명 수정입니다. 다운로드 서버의 설치 파일도 같은 날짜이므로 앱의 가장 최근 업데이트이며, 유지보수 중단 경고는 해당되지 않습니다. 설정에는 인터넷 연결이 필요하고, 공개된 GPU 요건은 NVIDIA이며, 사이트에 따르면 앱이 첫 실행 시 하드웨어를 확인합니다."
      },
      "pricing": {
        "id": "pricing",
        "title": "가격",
        "content": [
          "**앱은 얼리 액세스 기간 동안 10달러를 한 번 내는 방식입니다. 구독이나 체험판이 아닌 구매이며, 이후 로컬 대화는 무제한입니다.** 사이트는 이를 얼리 액세스 가격이라 부르며 변경될 수 있다고 밝히되, 이미 구매한 것은 그대로 유지된다고 설명합니다.",
          "Plus(월 15달러, 유료 갱신당 1,250 Sparks)와 Premium(월 30달러, 3,000 Sparks)은 선택 사항이며 관리형 클라우드 채팅, 음성, 화면 인식, 영상을 추가합니다. Sparks는 이런 클라우드 기능에 쓰이고 로컬 사용에는 소모되지 않습니다. 유료 클라우드 요금제는 얼리 액세스 동안 구독자 100명으로 제한되며, 사이트는 가격을 미국 달러로만 표시합니다.",
          "Steam 버전은 웹사이트 요금제 대신 Steam에서 구매하는 선불 Sparks를 쓰는 것으로 설명되며, Itch.io 구매는 이미 로컬 앱을 포함합니다."
        ]
      },
      "features": {
        "id": "key-features",
        "title": "개발자가 밝힌 기능",
        "content": [
          "**아래 내용은 모두 asiden.ai와 변경 내역을 바탕으로 한 것이며, 테스트하지 않았습니다.**"
        ],
        "items": [
          "**캐릭터.** 3D 모델, Lily와 Sasha의 Live2D 모습(0.32.0 버전, 2026년 10월 17일), 가져온 VRM 모델이 있으며 외모, 성격, 기억은 별도 설정입니다.",
          "**기억.** 요약된 기억이 드라이브에 저장되며 컴패니언별로 확인, 수정, 추가, 초기화할 수 있습니다. 사이트는 기억을 정확히 떠올린다고 보장하지 않는다고 경고합니다.",
          "**화면 인식.** 선택 사항입니다. 영역을 잘라 내거나 설정에서 지속적인 화면 인식을 켭니다. 사이트에는 게임 인식과 내려받을 수 있는 게임 위키 팩이 언급되며, 지원 범위는 게임마다 다릅니다.",
          "**먼저 말 걸기.** 수다스러운 정도는 \"과묵\"부터 \"쉬지 않음\"까지이며, \"일시정지\"는 컴패니언이 듣고, 보고, 답하는 것을 멈춥니다.",
          "**음성.** 푸시투토크 또는 핸즈프리 마이크 입력을 지원합니다. 클라우드 스튜디오 음성은 계정당 달력 기준 한 달에 30,000자로 제한되며, 로컬 음성은 계속 사용할 수 있습니다."
        ],
        "note": "실제로 무엇이 동작하는지는 설치한 빌드가 최종 기준입니다."
      },
      "privacy": {
        "id": "privacy",
        "title": "개인정보 처리방침과 데이터 흐름",
        "content": [
          "**개인정보 고지(2026년 10월 8일 최종 갱신)에 따르면 Asiden은 기본적으로 로컬입니다. 로컬 채팅, 기억, 화면 맥락은 PC에 남고, 활성화, 구매, 클라우드 채팅, 클라우드 음성, 클라우드 화면 인식처럼 네트워크를 쓰는 기능을 선택할 때만 정보가 PC를 떠납니다.**",
          "관리형 클라우드 요청은 영국 Microsoft Azure에 호스팅된 제작사 프록시를 거쳐 Venice AI 또는 OpenRouter와 하위 모델 제공업체로 전달되며, 클라우드 음성은 ElevenLabs로 보내집니다. 고지에 따르면 프록시는 프롬프트와 응답 내용을 저장하지 않도록 설계되어 있고 대화 내용은 제작사 자체 모델 학습에 쓰이지 않지만, 종단 간 암호화가 아니며 제공업체가 자체 보관 규칙을 적용한다고도 적혀 있습니다. 클라우드 요청에는 관련 저장 기억과, 켠 경우 선택한 스크린샷이 포함될 수 있습니다. 로컬 화면 인식은 켜기 전까지 꺼져 있고, 클라우드 화면 인식은 기본적으로 꺼져 있습니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Asiden은 클로즈드 소스이므로 이 내용은 코드로 확인할 수 없고, PromptQuorum도 네트워크 트래픽을 점검하지 않았습니다. 컴패니언과의 대화는 개인적인 내용일 수 있으니, 클라우드 기능을 켜기 전에 클라우드 요청에 무엇이 담길 수 있는지 고지에서 확인하시기 바랍니다."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "이런 분께 적합합니다",
        "items": [
          "**VRAM 8 GB 이상의 NVIDIA GPU를 쓰는 Windows 11 게이머와 데스크톱 사용자**로, 자신이 하는 게임이나 작업에 반응해 주는 캐릭터를 원하는 분.",
          "**로컬 우선의 채팅과 기억을 원하는 분**으로, 메시지당 요금이 없고 얼리 액세스 소프트웨어를 받아들일 수 있는 분.",
          "**사양이 낮아도 클라우드 AI가 괜찮은 사용자**로, 로컬 모델 대신 Plus나 Premium을 쓰려는 분."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "확인하지 못한 사항",
        "items": [
          "**실제 동작.** 답변과 음성 품질, 속도, VRAM 사용량, 오프라인 동작, 게임에 미치는 영향은 테스트하지 않았습니다.",
          "**실제 개인정보 처리.** 설명은 제작사의 고지와 사이트에서 가져왔으며, 네트워크 트래픽은 점검하지 않았고 독립적인 감사도 찾지 못했습니다.",
          "**AMD·Intel 그래픽.** 공개된 요건은 NVIDIA GPU이며, 사이트는 첫 실행 시 앱이 하드웨어를 측정한다고만 밝힙니다.",
          "**Itch.io 페이지.** 사이트에서 연결되어 있지만 봇 확인 뒤에 있어 읽지 못했습니다.",
          "**Steam 버전.** 스토어 페이지가 출시를 \"출시 예정\"으로 표시하므로 Steam 버전과 크레딧 방식은 아직 확인할 수 없습니다.",
          "**소스 코드와 서명.** 앱은 클로즈드 소스이며 공개 저장소가 없습니다. 설치 파일은 서명되어 있고 체크섬이 공개된다고 설명되지만 둘 다 여기서는 확인하지 않았습니다.",
          "**안전 기능.** 안전 페이지에는 기기 내 위기 감지와 정해진 응답이 설명되어 있습니다. 효과는 테스트하지 않았으며, 앱은 치료사나 응급 서비스가 아닙니다."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "경쟁 앱과 대안",
        "columns": [
          "앱",
          "플랫폼",
          "가격 / 라이선스",
          "핵심 차이"
        ],
        "rows": [
          {
            "앱": "[Backyard AI](/ko/power-local-llm/backyard-ai-review-local-roleplay)",
            "플랫폼": "Windows, macOS",
            "가격 / 라이선스": "부분 무료 / 클로즈드 소스",
            "핵심 차이": "캐릭터 채팅과 롤플레이용 로컬 데스크톱 클라이언트"
          },
          {
            "앱": "[RisuAI](/ko/power-local-llm/risuai-review)",
            "플랫폼": "웹, Windows, macOS, Linux",
            "가격 / 라이선스": "무료 / GPL 3.0",
            "핵심 차이": "오픈소스 롤플레이 채팅 프런트엔드"
          },
          {
            "앱": "[Castmates](/ko/power-local-llm/castmates-review)",
            "플랫폼": "iOS",
            "가격 / 라이선스": "부분 무료 / 클로즈드 소스",
            "핵심 차이": "iPhone에서 쓰는 오프라인 캐릭터 채팅"
          }
        ],
        "note": "경쟁 앱의 정보는 자주 바뀝니다. 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 소개 페이지에서 확인하시기 바랍니다."
      },
      "faq": {
        "id": "faq",
        "title": "자주 묻는 질문",
        "faqs": [
          {
            "q": "구독 없이 Asiden을 쓸 수 있나요?",
            "a": "네. 구독은 관리형 클라우드 기능만 열어 주며, 제작사는 해지해도 앱, 로컬 모드, 기억이 PC에 남는다고 밝힙니다. 관련 기억이 과거 클라우드 요청에 포함되었을 수는 있습니다."
          },
          {
            "q": "Asiden은 Steam에 있나요?",
            "a": "Steam 페이지는 있지만 출시는 \"출시 예정\"으로 표시됩니다. 1회 구매 방식에 선택형 선불 클라우드 크레딧이 있는 버전으로 설명됩니다."
          },
          {
            "q": "Asiden은 어린이에게 적합한가요?",
            "a": "아닙니다. 제작사는 만 18세 이상 성인용이라고 밝히며 연령 확인이 아닌 자기 신고에 의존합니다."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "결론",
        "content": "Asiden은 1회 구매 가격의 로컬 채팅과 기억을 내세우고 유료 클라우드 AI를 선택지로 둔, 업데이트가 잦은 신생 Windows 11 컴패니언입니다. 한계는 얼리 액세스, 1인 개발자, 클로즈드 소스, NVIDIA 전용 로컬 모드, 매우 큰 내려받기 용량, 그리고 제작사에서 나온 개인정보·안전 설명입니다. 상주형 컴패니언을 써 보고 싶은 NVIDIA 탑재 Windows 사용자에게 맞고, 오픈소스나 다른 플랫폼이 필요하다면 [RisuAI](/ko/power-local-llm/risuai-review)나 [Backyard AI](/ko/power-local-llm/backyard-ai-review-local-roleplay)를 비교해 보시기 바랍니다."
      },
      "sources": {
        "id": "sources",
        "title": "출처",
        "items": [
          "[Asiden 웹사이트](https://asiden.ai) — 제품 설명, 다운로드 영역, 요건, 변경 내역. 2026년 10월 24일 확인.",
          "[Asiden 가격](https://asiden.ai/pricing/) — 앱 가격, Plus·Premium 요금제, Sparks, 얼리 액세스 제한. 2026년 10월 17일 갱신.",
          "[Asiden 시스템 요건](https://asiden.ai/system-requirements/) — 최소·권장 PC와 첫 실행 시 내려받기. 2026년 9월 10일 갱신.",
          "[Asiden 개인정보 고지](https://asiden.ai/privacy/) — 로컬·클라우드 데이터 흐름, 제공업체, 보관. 2026년 10월 8일 최종 갱신.",
          "[Asiden 안전 및 위기 대응 프로토콜](https://asiden.ai/safety/) — 성인 전용 이용과 위기 대응. 1.0 버전, 2026년 8월 1일.",
          "[Asiden 이용 약관](https://asiden.ai/terms/) — 라이선스 조건, 2.11 버전, 2026년 10월 17일.",
          "[Steam의 Asiden](https://store.steampowered.com/app/5130370/Asiden/) — 출시가 \"출시 예정\"으로 표시된 스토어 페이지. 2026년 10월 24일 확인."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "관련 읽을거리",
        "items": [
          "[Backyard AI 리뷰](/ko/power-local-llm/backyard-ai-review-local-roleplay) — 캐릭터 채팅과 롤플레이용 로컬 데스크톱 클라이언트.",
          "[RisuAI 리뷰](/ko/power-local-llm/risuai-review) — 오픈소스 롤플레이 채팅 프런트엔드.",
          "[Castmates 리뷰](/ko/power-local-llm/castmates-review) — iPhone용 오프라인 AI 캐릭터 채팅 앱.",
          "[SillyTavern vs Agnai vs RisuAI](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 로컬 롤플레이 프런트엔드 비교."
        ]
      }
    }
  },
}

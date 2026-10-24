// Haplo AI Review: Offline Chat and Image App for iPhone and Mac
// Slug: haplo-ai-review
// Companion to: pocketpal-ai-review, private-mind-review, lm-mini-review, frankly-ai-review, llm-hub-review, best-local-llm-apps-iphone-2026
// Sources: App Store listing id6746702574 (US HTML incl. version history, ratings and in-app purchases; DE/ES/JP/KR/BR storefronts for prices),
// Apple iTunes lookup API, haploapp.com (product page, privacy policy effective 2026-10-04, help, about, press) and the maker's two blog
// guides (run-ai-offline-on-iphone, run-llm-locally-on-mac) — read 2026-10-24. No hands-on use. Owner request, not a maker comment: no founder block.
// Last upstream update 2026-10-22 (v2.5) => no stale warning. Prices are per-storefront App Store prices, never converted; FR storefront does not list the app.
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
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/haplo-ai-review-hero-en.webp",
    "title": "Haplo AI Review: Offline Chat and Image App for iPhone and Mac",
    "seoTitle": "Haplo AI Review: Offline AI Chat for iPhone and Mac",
    "intro": "Haplo AI is an app for iPhone, iPad and Mac from Haplo, LLC, a one-developer studio. According to its App Store listing and its maker, you download open language models and run chat, image input and image generation on the device, without an account. This review reflects the store listing, the maker's website, its privacy policy and two guides on its blog, as checked on 24 October 2026.",
    "metaDescription": "Haplo AI review: iPhone, iPad and Mac app that downloads open models and runs chat and images on the device. Price, privacy and what is unverified.",
    "twitterDescription": "Haplo AI review: a closed-source iPhone and Mac app that runs open models on the device. What the listing, the maker and its privacy policy say, and where the sources disagree.",
    "audience": "iPhone and Mac owners who want to know whether Haplo AI really runs on the device, what it costs and which privacy claims the sources support.",
    "readTime": "6 min read",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Haplo AI review",
    "targetKeywords": [
      "haplo ai app review",
      "haplo ai iphone",
      "offline ai iphone",
      "private ai chat mac",
      "on-device llm ios",
      "run llm offline iphone",
      "haplo ai vs pocketpal"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Mac"
    ],
    "leadAnswerBlock": "**Haplo AI is a closed-source iPhone, iPad and Mac app that downloads open-weight models and, according to its maker, runs chat, image input and image generation on the device with no account.** **Its price is the main open question: the App Store listing shows a purchase price plus Premium subscriptions, while the maker's own pages describe it differently.**",
    "quickAnswerTop": {
      "en": {
        "question": "Does Haplo AI run on my device?",
        "answer": "According to its maker, yes: after a one-time model download from Hugging Face, chats and generated images stay on the iPhone or Mac. PromptQuorum did not test the app, and its web search, maps and browser tools do send data out when they run.",
        "bullets": [
          "On the [App Store](https://apps.apple.com/us/app/id6746702574), version 2.5, for iOS or iPadOS 17.0 or later and macOS 15.0 or later with an Apple M1 chip or newer.",
          "Costs: a purchase price plus an optional Premium subscription in the US listing; the sources disagree, see Pricing.",
          "No Haplo server receives your prompts, according to the maker's privacy policy."
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
        "label": "What Is Haplo AI?",
        "anchor": "what-is-haplo-ai"
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
        "label": "Features Listed by the Maker",
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
            "text": "Haplo AI is a closed-source chat app for iPhone, iPad and Mac that downloads open language models and runs them on the device without requiring an account."
          },
          {
            "type": "plain-terms",
            "text": "You install it from the App Store, download a model sized for your device and chat. The maker also lists image input, image generation and optional tools such as web search, which do send data out when they run."
          }
        ],
        "items": [
          "Maker: Haplo, LLC, a one-developer studio publishing apps since 2021; Haplo AI was first released on 3 June 2025, has had 25 versions since and was last updated on 22 October 2026.",
          "Reach: the US App Store shows 76 ratings averaging 3.9, of which 51 are five-star and 15 one-star, a small and divided sample.",
          "Models: the maker's guides list open models such as Qwen, Phi, Ministral and SmolLM, plus Stable Diffusion image models and a small vision model.",
          "Platforms: one App Store listing covers iPhone, iPad, Mac and Apple Vision; the Mac build needs Apple silicon."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "This review is based on the App Store listing, Apple's lookup data, the maker's website, privacy policy and two blog guides, checked on 24 October 2026. It involved no hands-on use, network inspection or benchmarking."
          }
        ]
      },
      "overview": {
        "id": "what-is-haplo-ai",
        "title": "What Is Haplo AI?",
        "content": [
          "**Haplo AI is a chat app for iPhone, iPad and Mac that downloads open language models and runs them on the device.** The US App Store title is \"Haplo AI: Offline & Private AI\"; the German storefront calls it \"Haplo KI: Private & Offline KI\". The maker, Haplo, LLC, describes itself as a one-developer studio building native Swift apps for Apple platforms.",
          "Haplo AI is one of nine apps on the maker's site. Haplo AI Investing, a stock-analysis app from the same studio, is a different product."
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "Where Your Chats Run",
        "content": [
          "**The maker describes Haplo AI as local: models run on the device and chats are saved there, with no Haplo server in between.**"
        ],
        "items": [
          "**Models.** Downloaded once from Hugging Face. The maker's guides describe a catalog from about 100 MB to about 5.7 GB on iPhone, filtered by the device's memory, with models such as Qwen, Phi-4-mini, Ministral 3 and SmolLM, run as 4-bit GGUF files with llama.cpp.",
          "**Apple's model.** On macOS 26 or later with Apple Intelligence turned on, the Mac guide says the app can also use Apple's own on-device model.",
          "**Images.** Image input uses a small vision model. Image generation uses models such as Stable Diffusion 2.1 Base and 1.5, and on phones with 8 GB of RAM or more larger ones such as Z-Image-Turbo.",
          "**What goes online.** Model downloads and the tools covered under privacy."
        ],
        "note": "These details come from the maker's site and two blog guides that describe the app's code; PromptQuorum did not open the app."
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
            "Platform": "iPhone and iPad",
            "Where to get it": "[App Store](https://apps.apple.com/us/app/id6746702574) (iOS or iPadOS 17.0 or later; one universal listing)"
          },
          {
            "Platform": "Mac",
            "Where to get it": "[Mac App Store](https://apps.apple.com/us/app/id6746702574) (same listing; macOS 15.0 or later and an Apple M1 chip or newer)"
          },
          {
            "Platform": "Android and Windows",
            "Where to get it": "No build found"
          },
          {
            "Platform": "Website",
            "Where to get it": "[haploapp.com/haplo_ai](https://www.haploapp.com/haplo_ai) (the maker's product page)"
          },
          {
            "Platform": "Privacy policy",
            "Where to get it": "[Haplo privacy policy](https://www.haploapp.com/PrivacyPolicy) (effective 4 October 2026)"
          }
        ],
        "note": "Version reviewed: 2.5, released on 22 October 2026; this is the app's most recent update, so no stale warning applies. All 25 entries in the version history carry the same generic note about feature enhancements and bug fixes, so the changes cannot be told apart from the listing."
      },
      "pricing": {
        "id": "pricing",
        "title": "Pricing",
        "content": [
          "**The sources disagree on the price, so check the listing before buying.** The US listing shows a $5.99 purchase price and an in-app purchase called Haplo AI Premium at $1.99 per month or $12.99 per year. The maker's site shows only \"$1.99/mo or $12.99/yr\", its Mac guide of 11 October 2026 says the app is free to download but new users subscribe before they can chat, and the store description says \"No subscription required\".",
          "Other storefronts list a purchase price too (€6.99 in Germany and Spain, ¥1,000 in Japan, ₩9,900 in Korea, R$ 39.90 in Brazil) and two Premium amounts; the French storefront did not list the app when checked. According to the maker's guide, one purchase covers iPhone, iPad and Mac."
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Features Listed by the Maker",
        "content": [
          "**Everything below comes from the App Store description, the maker's site and its guides; none of it was tested.**"
        ],
        "items": [
          "**Chat and code.** Streaming answers, switching models per conversation, a custom system prompt, response-length and creativity settings, and help with code offline.",
          "**Image input.** Attach a photo and ask about it; the maker says it is read on the device.",
          "**Image generation and editing.** Local image generation; the listing also describes inpainting with a drawn mask.",
          "**Tools.** Web search, Maps, Browser, Calendar, Health and charts; on a Mac, an iPhone 16 Pro or Pro Max or any iPhone 17, Automatic Tools (on by default) can pick one for you.",
          "**Languages.** The listing shows English and 14 more languages."
        ],
        "note": "The site's front page also advertises on-device video generation; no other source describes it."
      },
      "privacy": {
        "id": "privacy",
        "title": "Privacy Policy and Data Flow",
        "content": [
          "**The App Store privacy label says \"Data Not Collected\", and the maker's policy (effective 4 October 2026) says Haplo AI sends Haplo nothing about you and contains no analytics or advertising SDKs.** Chats and generated images are saved on the device.",
          "Data does leave the device in three ways: model downloads from Hugging Face, which sees your IP address but not your prompts; a model-list request to haploapp.com carrying the device type, app version and memory size; and the web search (DuckDuckGo, with Bing as fallback), Maps (Apple) and Browser tools, which send content out whenever they run, including when Automatic Tools starts one. Health data can be read so you can ask about it, and the policy says it stays on the device."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Both the label and the policy are statements by the maker. The app is closed source and PromptQuorum has not inspected network traffic, so confirm what leaves the device before sending sensitive prompts to the tools."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Who Should Use It",
        "items": [
          "**iPhone and Mac owners who want a ready-made offline chat app** without a Terminal.",
          "**People who want chat, image input and image generation in one app.**",
          "**Users who want one purchase across iPhone, iPad and Mac.**"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "What We Could Not Verify",
        "items": [
          "**Hands-on behavior.** No answer quality, speed, offline use, battery or storage was measured.",
          "**Price and subscription.** The sources conflict (see Pricing); whether Premium is required to chat was not confirmed.",
          "**Model list.** The store description names Gemma 2B, Phi-3 Mini, Mistral 7B and Llama 3, while the site and guides name other models; this review follows the maker's guides.",
          "**Video generation.** Advertised on the front page only.",
          "**Source code.** The app is closed source; no repository or licence text was found."
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
            "App": "[PocketPal AI](/power-local-llm/pocketpal-ai-review)",
            "Platforms": "iOS, Android",
            "Price / license": "Free / MIT",
            "Key difference": "Open-source on-device chat with its own model library"
          },
          {
            "App": "[Private Mind](/power-local-llm/private-mind-review)",
            "Platforms": "iOS, Android",
            "Price / license": "Free / MIT",
            "Key difference": "Open-source offline chat with on-device document Q&A"
          },
          {
            "App": "[LM Mini](/power-local-llm/lm-mini-review)",
            "Platforms": "iOS, macOS",
            "Price / license": "Free + purchases / Closed source",
            "Key difference": "Mixes on-device models with your own LM Studio or Ollama server"
          },
          {
            "App": "[Frankly AI](/power-local-llm/frankly-ai-review)",
            "Platforms": "iOS, iPadOS",
            "Price / license": "Free + Pro / Closed source",
            "Key difference": "iPhone chat with task personas and a daily free limit"
          }
        ],
        "note": "Competitor details change often; confirm each app's current price, license and platforms on its own listing."
      },
      "faq": {
        "id": "faq",
        "title": "Frequently Asked Questions",
        "faqs": [
          {
            "q": "Does Haplo AI need an account?",
            "a": "No. The maker's site and policy say there is no account; purchases go through your Apple ID."
          },
          {
            "q": "Does Haplo AI work without internet?",
            "a": "After a model is downloaded, chat runs on the device. The web search, maps and browser tools need a connection by design."
          },
          {
            "q": "Is the Mac version the iPhone app?",
            "a": "The maker's guide says it is a native macOS app, not the iPhone app running on a Mac, and it needs macOS 15.0 and an M1 chip or newer."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Haplo AI is an actively updated app from a single developer that bundles open models, image input and image generation for iPhone and Mac. Its limits are closed source, 76 mixed US ratings, an unclear price and tools that send data out. It suits readers who want a ready-made offline assistant; anyone who needs open source should compare [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Private Mind](/power-local-llm/private-mind-review)."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Haplo AI on the App Store](https://apps.apple.com/us/app/id6746702574) — description, version history, in-app purchases, privacy label, requirements and ratings, checked 24 October 2026.",
          "[Haplo AI product page](https://www.haploapp.com/haplo_ai) — the maker's feature list and model examples.",
          "[Haplo privacy policy](https://www.haploapp.com/PrivacyPolicy) — what each app collects; effective 4 October 2026.",
          "[How to run AI offline on your iPhone](https://www.haploapp.com/blog/run-ai-offline-on-iphone) — the maker's guide to the model catalog and tools.",
          "[How to run an LLM locally on a Mac](https://www.haploapp.com/blog/run-llm-locally-on-mac) — the maker's Mac guide, updated 11 October 2026.",
          "[Apple lookup data for Haplo AI](https://itunes.apple.com/lookup?id=6746702574&country=us) — seller, version, release dates, minimum OS and price, checked 24 October 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.",
          "[Private Mind Review](/power-local-llm/private-mind-review) — a free, MIT-licensed offline chat app.",
          "[LM Mini Review](/power-local-llm/lm-mini-review) — an iPhone chat app that also connects to your own model server.",
          "[LLM Hub Review](/power-local-llm/llm-hub-review) — an Android and iOS on-device chat app.",
          "[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the broader iPhone roundup."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Haplo AI Review: Offline Chat and Image App for iPhone and Mac",
      "description": "Haplo AI review: a closed-source iPhone and Mac app that runs open models on the device. What the listing, the maker and its privacy policy say, and where the sources disagree.",
      "url": "https://www.promptquorum.com/power-local-llm/haplo-ai-review",
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
        "audienceType": "iPhone and Mac users evaluating an on-device AI app"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Haplo AI"
        },
        {
          "@type": "Thing",
          "name": "On-device AI"
        },
        {
          "@type": "Thing",
          "name": "iPhone"
        }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/power-local-llm/haplo-ai-review"
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
          "name": "Haplo AI Review",
          "item": "https://www.promptquorum.com/power-local-llm/haplo-ai-review"
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
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/haplo-ai-review-hero-de.webp",
    "title": "Haplo-AI-Rezension: Offline-Chat und Bild-App für iPhone und Mac",
    "seoTitle": "Haplo-AI-Rezension: Offline-KI-Chat für iPhone und Mac",
    "intro": "Haplo AI ist eine App für iPhone, iPad und Mac von Haplo, LLC, einem Ein-Personen-Studio. Laut App-Store-Eintrag und Hersteller laden Sie offene Sprachmodelle herunter und führen Chat, Bildeingabe und Bilderzeugung auf dem Gerät aus, ohne Konto. Diese Rezension gibt den Store-Eintrag, die Website des Herstellers, seine Datenschutzerklärung und zwei Leitfäden seines Blogs wieder, wie am 24. Oktober 2026 geprüft.",
    "metaDescription": "Haplo-AI-Rezension: iPhone-, iPad- und Mac-App, die offene Modelle lädt und Chat und Bilder auf dem Gerät ausführt. Preis, Datenschutz und Ungeprüftes.",
    "twitterDescription": "Haplo-AI-Rezension: eine nicht quelloffene iPhone- und Mac-App, die offene Modelle auf dem Gerät ausführt. Was Eintrag, Hersteller und Datenschutzerklärung sagen und wo sich die Quellen widersprechen.",
    "audience": "iPhone- und Mac-Nutzer, die wissen möchten, ob Haplo AI wirklich auf dem Gerät läuft, was die App kostet und welche Datenschutzangaben die Quellen stützen.",
    "readTime": "6 Min. Lesezeit",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Haplo AI review",
    "targetKeywords": [
      "haplo ai app test",
      "haplo ai iphone",
      "offline ki iphone",
      "private ki chat mac",
      "on-device llm ios",
      "llm offline iphone ausführen",
      "haplo ai vs pocketpal"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Mac"
    ],
    "leadAnswerBlock": "**Haplo AI ist eine nicht quelloffene iPhone-, iPad- und Mac-App, die Open-Weight-Modelle herunterlädt und laut Hersteller Chat, Bildeingabe und Bilderzeugung ohne Konto auf dem Gerät ausführt.** **Offen ist vor allem der Preis: Der App-Store-Eintrag nennt einen Kaufpreis plus Premium-Abos, während die Seiten des Herstellers ihn anders darstellen.**",
    "quickAnswerTop": {
      "de": {
        "question": "Läuft Haplo AI auf meinem Gerät?",
        "answer": "Laut Hersteller ja: Nach einem einmaligen Modell-Download von Hugging Face bleiben Chats und erzeugte Bilder auf dem iPhone oder Mac. PromptQuorum hat die App nicht getestet, und ihre Werkzeuge für Websuche, Karten und Browser senden beim Einsatz Daten nach außen.",
        "bullets": [
          "Im [App Store](https://apps.apple.com/de/app/id6746702574), Version 2.5, für iOS oder iPadOS 17.0 und neuer sowie macOS 15.0 und neuer mit Apple-M1-Chip oder besser.",
          "Kosten: im US-Eintrag ein Kaufpreis plus optionales Premium-Abo; die Quellen widersprechen sich, siehe Preise.",
          "Laut Datenschutzerklärung des Herstellers erhält kein Haplo-Server Ihre Eingaben."
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
        "label": "Was ist Haplo AI?",
        "anchor": "what-is-haplo-ai"
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
        "label": "Vom Hersteller genannte Funktionen",
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
            "text": "Haplo AI ist eine nicht quelloffene Chat-App für iPhone, iPad und Mac, die offene Sprachmodelle lädt und ohne Konto auf dem Gerät ausführt."
          },
          {
            "type": "plain-terms",
            "text": "Sie installieren die App aus dem App Store, laden ein zum Gerät passendes Modell herunter und chatten. Der Hersteller nennt außerdem Bildeingabe, Bilderzeugung und optionale Werkzeuge wie die Websuche, die beim Einsatz Daten nach außen senden."
          }
        ],
        "items": [
          "Hersteller: Haplo, LLC, ein Ein-Personen-Studio, das seit 2021 Apps veröffentlicht; Haplo AI erschien am 3. Juni 2025, hatte seither 25 Versionen und wurde zuletzt am 22. Oktober 2026 aktualisiert.",
          "Verbreitung: Der US-App-Store zeigt 76 Bewertungen im Schnitt von 3,9, davon 51 mit fünf Sternen und 15 mit einem Stern, eine kleine und gespaltene Stichprobe.",
          "Modelle: Die Leitfäden des Herstellers nennen offene Modelle wie Qwen, Phi, Ministral und SmolLM sowie Stable-Diffusion-Bildmodelle und ein kleines Bildverständnis-Modell.",
          "Plattformen: Ein App-Store-Eintrag deckt iPhone, iPad, Mac und Apple Vision ab; der Mac-Build braucht Apple Silicon."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Diese Rezension beruht auf dem App-Store-Eintrag, den Abfragedaten von Apple, der Website, der Datenschutzerklärung und zwei Blog-Leitfäden des Herstellers, geprüft am 24. Oktober 2026. Praktische Tests, Netzwerkanalysen oder Benchmarks gab es nicht."
          }
        ]
      },
      "overview": {
        "id": "what-is-haplo-ai",
        "title": "Was ist Haplo AI?",
        "content": [
          "**Haplo AI ist eine Chat-App für iPhone, iPad und Mac, die offene Sprachmodelle herunterlädt und auf dem Gerät ausführt.** Der Titel im US-App-Store lautet „Haplo AI: Offline & Private AI“, im deutschen Store „Haplo KI: Private & Offline KI“. Der Hersteller Haplo, LLC beschreibt sich als Ein-Personen-Studio, das native Swift-Apps für Apple-Plattformen baut.",
          "Haplo AI ist eine von neun Apps auf der Website des Herstellers. Haplo AI Investing, eine Aktienanalyse-App desselben Studios, ist ein anderes Produkt."
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "Wo Ihre Chats laufen",
        "content": [
          "**Der Hersteller beschreibt Haplo AI als lokal: Modelle laufen auf dem Gerät, Chats werden dort gespeichert, ohne Haplo-Server dazwischen.**"
        ],
        "items": [
          "**Modelle.** Einmal von Hugging Face geladen. Die Leitfäden des Herstellers beschreiben einen Katalog von rund 100 MB bis rund 5,7 GB auf dem iPhone, nach Gerätespeicher gefiltert, mit Modellen wie Qwen, Phi-4-mini, Ministral 3 und SmolLM, ausgeführt als 4-Bit-GGUF-Dateien mit llama.cpp.",
          "**Apples Modell.** Ab macOS 26 mit aktivierter Apple Intelligence kann die App laut Mac-Leitfaden auch Apples eigenes Modell auf dem Gerät nutzen.",
          "**Bilder.** Die Bildeingabe nutzt ein kleines Bildverständnis-Modell. Die Bilderzeugung nutzt Modelle wie Stable Diffusion 2.1 Base und 1.5, auf Telefonen mit 8 GB RAM oder mehr auch größere wie Z-Image-Turbo.",
          "**Was online geht.** Modell-Downloads und die Werkzeuge, die im Abschnitt zum Datenschutz behandelt werden."
        ],
        "note": "Diese Angaben stammen von der Website des Herstellers und zwei Blog-Leitfäden, die den Code der App beschreiben; PromptQuorum hat die App nicht geöffnet."
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
            "Plattform": "iPhone und iPad",
            "Bezugsquelle": "[App Store](https://apps.apple.com/de/app/id6746702574) (iOS oder iPadOS 17.0 und neuer; ein gemeinsamer Eintrag)"
          },
          {
            "Plattform": "Mac",
            "Bezugsquelle": "[Mac App Store](https://apps.apple.com/de/app/id6746702574) (derselbe Eintrag; macOS 15.0 und neuer sowie Apple-M1-Chip oder besser)"
          },
          {
            "Plattform": "Android und Windows",
            "Bezugsquelle": "Kein Build gefunden"
          },
          {
            "Plattform": "Website",
            "Bezugsquelle": "[haploapp.com/haplo_ai](https://www.haploapp.com/haplo_ai) (Produktseite des Herstellers)"
          },
          {
            "Plattform": "Datenschutzerklärung",
            "Bezugsquelle": "[Datenschutzerklärung von Haplo](https://www.haploapp.com/PrivacyPolicy) (gültig ab 4. Oktober 2026)"
          }
        ],
        "note": "Geprüfte Version: 2.5, veröffentlicht am 22. Oktober 2026; das ist das jüngste Update der App, daher gilt keine Warnung vor fehlender Pflege. Alle 25 Einträge im Versionsverlauf tragen denselben allgemeinen Hinweis zu Funktionsverbesserungen und Fehlerbehebungen, die Änderungen lassen sich also aus dem Eintrag nicht unterscheiden."
      },
      "pricing": {
        "id": "pricing",
        "title": "Preise",
        "content": [
          "**Die Quellen widersprechen sich beim Preis, prüfen Sie daher den Eintrag vor dem Kauf.** Der US-Eintrag zeigt einen Kaufpreis von 5,99 $ und einen In-App-Kauf namens Haplo AI Premium zu 1,99 $ pro Monat oder 12,99 $ pro Jahr. Die Website des Herstellers nennt nur „$1.99/mo or $12.99/yr“, sein Mac-Leitfaden vom 11. Oktober 2026 sagt, die App sei gratis zu laden, doch neue Nutzer müssten vor dem Chatten ein Abo abschließen, und die Store-Beschreibung sagt „No subscription required“.",
          "Auch andere Storefronts nennen einen Kaufpreis (6,99 € in Deutschland und Spanien, ¥1.000 in Japan, ₩9.900 in Korea, R$ 39,90 in Brasilien) und zwei Premium-Beträge; der französische Store führte die App bei der Prüfung nicht. Laut Leitfaden des Herstellers gilt ein Kauf für iPhone, iPad und Mac."
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Vom Hersteller genannte Funktionen",
        "content": [
          "**Alles Folgende stammt aus der App-Store-Beschreibung, der Website des Herstellers und seinen Leitfäden; nichts davon wurde getestet.**"
        ],
        "items": [
          "**Chat und Code.** Streamende Antworten, Modellwechsel pro Unterhaltung, ein eigener Systemprompt, Einstellungen für Antwortlänge und Kreativität sowie Offline-Hilfe beim Programmieren.",
          "**Bildeingabe.** Ein Foto anhängen und danach fragen; laut Hersteller wird es auf dem Gerät gelesen.",
          "**Bilderzeugung und -bearbeitung.** Lokale Bilderzeugung; der Eintrag beschreibt außerdem Inpainting mit einer gezeichneten Maske.",
          "**Werkzeuge.** Websuche, Karten, Browser, Kalender, Health und Diagramme; auf einem Mac, einem iPhone 16 Pro oder Pro Max oder jedem iPhone 17 kann „Automatic Tools“ (standardmäßig an) eines für Sie wählen.",
          "**Sprachen.** Der Eintrag nennt Englisch und 14 weitere Sprachen."
        ],
        "note": "Die Startseite der Website bewirbt außerdem Videoerzeugung auf dem Gerät; keine andere Quelle beschreibt sie."
      },
      "privacy": {
        "id": "privacy",
        "title": "Datenschutzerklärung und Datenfluss",
        "content": [
          "**Das Datenschutzlabel im App Store lautet „Daten werden nicht erfasst“, und die Erklärung des Herstellers (gültig ab 4. Oktober 2026) sagt, Haplo AI sende Haplo nichts über Sie und enthalte keine Analyse- oder Werbe-SDKs.** Chats und erzeugte Bilder werden auf dem Gerät gespeichert.",
          "Daten verlassen das Gerät auf drei Wegen: Modell-Downloads von Hugging Face, das Ihre IP-Adresse sieht, aber nicht Ihre Eingaben; eine Modelllisten-Anfrage an haploapp.com mit Gerätetyp, App-Version und Speichergröße; sowie die Werkzeuge Websuche (DuckDuckGo, ersatzweise Bing), Karten (Apple) und Browser, die bei jedem Einsatz Inhalte nach außen senden, auch wenn „Automatic Tools“ eines startet. Gesundheitsdaten können gelesen werden, damit Sie danach fragen können; laut Erklärung bleiben sie auf dem Gerät."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Label und Erklärung sind Angaben des Herstellers. Die App ist nicht quelloffen, und PromptQuorum hat den Netzwerkverkehr nicht untersucht; prüfen Sie daher, was das Gerät verlässt, bevor Sie sensible Eingaben an die Werkzeuge senden."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Für wen sich die App eignet",
        "items": [
          "**iPhone- und Mac-Nutzer, die eine fertige Offline-Chat-App wollen,** ohne Terminal.",
          "**Alle, die Chat, Bildeingabe und Bilderzeugung in einer App wünschen.**",
          "**Nutzer, die einen Kauf für iPhone, iPad und Mac wollen.**"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Was wir nicht überprüfen konnten",
        "items": [
          "**Praktisches Verhalten.** Antwortqualität, Geschwindigkeit, Offline-Nutzung, Akku und Speicher wurden nicht gemessen.",
          "**Preis und Abo.** Die Quellen widersprechen sich (siehe Preise); ob Premium zum Chatten nötig ist, wurde nicht bestätigt.",
          "**Modellliste.** Die Store-Beschreibung nennt Gemma 2B, Phi-3 Mini, Mistral 7B und Llama 3, Website und Leitfäden nennen andere Modelle; diese Rezension folgt den Leitfäden des Herstellers.",
          "**Videoerzeugung.** Nur auf der Startseite beworben.",
          "**Quellcode.** Die App ist nicht quelloffen; ein Repository oder Lizenztext wurde nicht gefunden."
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
            "App": "[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)",
            "Plattformen": "iOS, Android",
            "Preis / Lizenz": "Kostenlos / MIT",
            "Wesentlicher Unterschied": "Quelloffener Chat auf dem Gerät mit eigener Modellbibliothek"
          },
          {
            "App": "[Private Mind](/de/power-local-llm/private-mind-review)",
            "Plattformen": "iOS, Android",
            "Preis / Lizenz": "Kostenlos / MIT",
            "Wesentlicher Unterschied": "Quelloffener Offline-Chat mit Dokumentenfragen auf dem Gerät"
          },
          {
            "App": "[LM Mini](/de/power-local-llm/lm-mini-review)",
            "Plattformen": "iOS, macOS",
            "Preis / Lizenz": "Gratis + Käufe / Closed Source",
            "Wesentlicher Unterschied": "Verbindet Modelle auf dem Gerät mit Ihrem eigenen LM-Studio- oder Ollama-Server"
          },
          {
            "App": "[Frankly AI](/de/power-local-llm/frankly-ai-review)",
            "Plattformen": "iOS, iPadOS",
            "Preis / Lizenz": "Gratis + Pro / Closed Source",
            "Wesentlicher Unterschied": "iPhone-Chat mit Aufgaben-Personas und kostenlosem Tageslimit"
          }
        ],
        "note": "Angaben zu Wettbewerbern ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen jeder App im jeweiligen Eintrag."
      },
      "faq": {
        "id": "faq",
        "title": "Häufig gestellte Fragen",
        "faqs": [
          {
            "q": "Braucht Haplo AI ein Konto?",
            "a": "Nein. Website und Erklärung des Herstellers sagen, es gebe kein Konto; Käufe laufen über Ihre Apple-ID."
          },
          {
            "q": "Funktioniert Haplo AI ohne Internet?",
            "a": "Nach dem Modell-Download läuft der Chat auf dem Gerät. Die Werkzeuge für Websuche, Karten und Browser brauchen bauartbedingt eine Verbindung."
          },
          {
            "q": "Ist die Mac-Version die iPhone-App?",
            "a": "Laut Leitfaden des Herstellers ist es eine native macOS-App und nicht die iPhone-App auf dem Mac; sie braucht macOS 15.0 und einen M1-Chip oder besser."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Fazit",
        "content": "Haplo AI ist eine aktiv aktualisierte App eines einzelnen Entwicklers, die offene Modelle, Bildeingabe und Bilderzeugung für iPhone und Mac bündelt. Grenzen sind der nicht quelloffene Code, 76 gemischte US-Bewertungen, ein unklarer Preis und Werkzeuge, die Daten nach außen senden. Die App eignet sich für Leser, die einen fertigen Offline-Assistenten wollen; wer Open Source braucht, sollte [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Private Mind](/de/power-local-llm/private-mind-review) vergleichen."
      },
      "sources": {
        "id": "sources",
        "title": "Quellen",
        "items": [
          "[Haplo AI im App Store](https://apps.apple.com/de/app/id6746702574) — Beschreibung, Versionsverlauf, In-App-Käufe, Datenschutzlabel, Voraussetzungen und Bewertungen, geprüft am 24. Oktober 2026.",
          "[Produktseite von Haplo AI](https://www.haploapp.com/haplo_ai) — Funktionsliste und Modellbeispiele des Herstellers.",
          "[Datenschutzerklärung von Haplo](https://www.haploapp.com/PrivacyPolicy) — was jede App erfasst; gültig ab 4. Oktober 2026.",
          "[KI offline auf dem iPhone ausführen](https://www.haploapp.com/blog/run-ai-offline-on-iphone) — Leitfaden des Herstellers zu Modellkatalog und Werkzeugen (englisch).",
          "[Ein LLM lokal auf dem Mac ausführen](https://www.haploapp.com/blog/run-llm-locally-on-mac) — Mac-Leitfaden des Herstellers, aktualisiert am 11. Oktober 2026 (englisch).",
          "[Apple-Abfragedaten zu Haplo AI](https://itunes.apple.com/lookup?id=6746702574&country=de) — Anbieter, Version, Veröffentlichungsdaten, Mindest-OS und Preis, geprüft am 24. Oktober 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Artikel",
        "items": [
          "[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener Chat-Client für iOS und Android auf dem Gerät.",
          "[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine kostenlose Offline-Chat-App unter MIT-Lizenz.",
          "[LM-Mini-Rezension](/de/power-local-llm/lm-mini-review) — eine iPhone-Chat-App, die sich auch mit Ihrem eigenen Modellserver verbindet.",
          "[LLM-Hub-Rezension](/de/power-local-llm/llm-hub-review) — eine Chat-App für Android und iOS mit Modellen auf dem Gerät.",
          "[Die besten lokalen LLM-Apps für das iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — die breitere iPhone-Übersicht."
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
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/haplo-ai-review-hero-es.webp",
    "title": "Reseña de Haplo AI: app de chat e imágenes sin conexión para iPhone y Mac",
    "seoTitle": "Reseña de Haplo AI: chat de IA offline en iPhone y Mac",
    "intro": "Haplo AI es una app para iPhone, iPad y Mac de Haplo, LLC, un estudio de un solo desarrollador. Según su ficha de la App Store y su creador, descargas modelos de lenguaje abiertos y ejecutas chat, entrada de imágenes y generación de imágenes en el dispositivo, sin cuenta. Esta reseña recoge la ficha de la tienda, el sitio web del creador, su política de privacidad y dos guías de su blog, comprobados el 24 de octubre de 2026.",
    "metaDescription": "Reseña de Haplo AI: app para iPhone, iPad y Mac que ejecuta chat e imágenes con modelos abiertos en el dispositivo. Precio, privacidad y dudas.",
    "twitterDescription": "Reseña de Haplo AI: una app de código cerrado para iPhone y Mac que ejecuta modelos abiertos en el dispositivo. Qué dicen la ficha, el creador y su política de privacidad, y dónde discrepan las fuentes.",
    "audience": "Usuarios de iPhone y Mac que quieren saber si Haplo AI funciona de verdad en el dispositivo, cuánto cuesta y qué afirmaciones de privacidad respaldan las fuentes.",
    "readTime": "6 min de lectura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Haplo AI review",
    "targetKeywords": [
      "reseña haplo ai",
      "haplo ai iphone",
      "ia sin conexión iphone",
      "chat de ia privado mac",
      "llm en el dispositivo ios",
      "ejecutar llm sin conexión iphone",
      "haplo ai vs pocketpal"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Mac"
    ],
    "leadAnswerBlock": "**Haplo AI es una app de código cerrado para iPhone, iPad y Mac que descarga modelos de pesos abiertos y, según su creador, ejecuta chat, entrada de imágenes y generación de imágenes en el dispositivo y sin cuenta.** **El precio es la principal incógnita: la ficha de la App Store muestra un precio de compra más suscripciones Premium, mientras que las páginas del propio creador lo describen de otra forma.**",
    "quickAnswerTop": {
      "es": {
        "question": "¿Haplo AI se ejecuta en mi dispositivo?",
        "answer": "Según su creador, sí: tras una descarga única del modelo desde Hugging Face, los chats y las imágenes generadas se quedan en el iPhone o el Mac. PromptQuorum no probó la app, y sus herramientas de búsqueda web, mapas y navegador sí envían datos al exterior cuando se usan.",
        "bullets": [
          "En la [App Store](https://apps.apple.com/es/app/id6746702574), versión 2.5, para iOS o iPadOS 17.0 o posterior y macOS 15.0 o posterior con un chip Apple M1 o superior.",
          "Coste: en la ficha de EE. UU., un precio de compra más una suscripción Premium opcional; las fuentes discrepan, consulta Precio.",
          "Según la política de privacidad del creador, ningún servidor de Haplo recibe tus mensajes."
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
        "label": "¿Qué es Haplo AI?",
        "anchor": "what-is-haplo-ai"
      },
      {
        "label": "Dónde se ejecutan tus chats",
        "anchor": "where-it-runs"
      },
      {
        "label": "Cómo conseguirla",
        "anchor": "get-it"
      },
      {
        "label": "Precio",
        "anchor": "pricing"
      },
      {
        "label": "Funciones indicadas por el creador",
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
            "text": "Haplo AI es una app de chat de código cerrado para iPhone, iPad y Mac que descarga modelos de lenguaje abiertos y los ejecuta en el dispositivo sin exigir cuenta."
          },
          {
            "type": "plain-terms",
            "text": "La instalas desde la App Store, descargas un modelo adecuado para tu dispositivo y chateas. El creador también indica entrada de imágenes, generación de imágenes y herramientas opcionales como la búsqueda web, que sí envían datos al exterior cuando se usan."
          }
        ],
        "items": [
          "Creador: Haplo, LLC, un estudio de un solo desarrollador que publica apps desde 2021; Haplo AI salió el 3 de junio de 2025, ha tenido 25 versiones desde entonces y se actualizó por última vez el 22 de octubre de 2026.",
          "Alcance: la App Store de EE. UU. muestra 76 valoraciones con una media de 3.9, de las cuales 51 son de cinco estrellas y 15 de una, una muestra pequeña y dividida.",
          "Modelos: las guías del creador citan modelos abiertos como Qwen, Phi, Ministral y SmolLM, además de modelos de imagen Stable Diffusion y un pequeño modelo de visión.",
          "Plataformas: una sola ficha de la App Store cubre iPhone, iPad, Mac y Apple Vision; la versión para Mac requiere Apple silicon."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta reseña se basa en la ficha de la App Store, los datos de consulta de Apple, el sitio web, la política de privacidad y dos guías del blog del creador, comprobados el 24 de octubre de 2026. No hubo uso práctico, inspección de red ni pruebas de rendimiento."
          }
        ]
      },
      "overview": {
        "id": "what-is-haplo-ai",
        "title": "¿Qué es Haplo AI?",
        "content": [
          "**Haplo AI es una app de chat para iPhone, iPad y Mac que descarga modelos de lenguaje abiertos y los ejecuta en el dispositivo.** El título en la App Store de EE. UU. es «Haplo AI: Offline & Private AI»; la tienda alemana la llama «Haplo KI: Private & Offline KI». El creador, Haplo, LLC, se describe como un estudio de un solo desarrollador que crea apps nativas en Swift para plataformas Apple.",
          "Haplo AI es una de las nueve apps del sitio del creador. Haplo AI Investing, una app de análisis bursátil del mismo estudio, es otro producto."
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "Dónde se ejecutan tus chats",
        "content": [
          "**El creador describe Haplo AI como local: los modelos se ejecutan en el dispositivo y los chats se guardan allí, sin ningún servidor de Haplo de por medio.**"
        ],
        "items": [
          "**Modelos.** Se descargan una vez desde Hugging Face. Las guías del creador describen un catálogo de unos 100 MB a unos 5.7 GB en iPhone, filtrado según la memoria del dispositivo, con modelos como Qwen, Phi-4-mini, Ministral 3 y SmolLM, ejecutados como archivos GGUF de 4 bits con llama.cpp.",
          "**Modelo de Apple.** En macOS 26 o posterior con Apple Intelligence activada, la guía para Mac indica que la app también puede usar el modelo propio de Apple en el dispositivo.",
          "**Imágenes.** La entrada de imágenes usa un pequeño modelo de visión. La generación usa modelos como Stable Diffusion 2.1 Base y 1.5 y, en teléfonos con 8 GB de RAM o más, otros mayores como Z-Image-Turbo.",
          "**Qué sale a internet.** Las descargas de modelos y las herramientas que se tratan en la sección de privacidad."
        ],
        "note": "Estos datos proceden del sitio del creador y de dos guías de su blog que describen el código de la app; PromptQuorum no abrió la app."
      },
      "getIt": {
        "id": "get-it",
        "title": "Cómo conseguirla",
        "columns": [
          "Plataforma",
          "Dónde conseguirla"
        ],
        "rows": [
          {
            "Plataforma": "iPhone y iPad",
            "Dónde conseguirla": "[App Store](https://apps.apple.com/es/app/id6746702574) (iOS o iPadOS 17.0 o posterior; una ficha universal)"
          },
          {
            "Plataforma": "Mac",
            "Dónde conseguirla": "[Mac App Store](https://apps.apple.com/es/app/id6746702574) (misma ficha; macOS 15.0 o posterior y chip Apple M1 o superior)"
          },
          {
            "Plataforma": "Android y Windows",
            "Dónde conseguirla": "No se encontró ninguna versión"
          },
          {
            "Plataforma": "Sitio web",
            "Dónde conseguirla": "[haploapp.com/haplo_ai](https://www.haploapp.com/haplo_ai) (página del producto del creador)"
          },
          {
            "Plataforma": "Política de privacidad",
            "Dónde conseguirla": "[Política de privacidad de Haplo](https://www.haploapp.com/PrivacyPolicy) (en vigor desde el 4 de octubre de 2026)"
          }
        ],
        "note": "Versión revisada: 2.5, publicada el 22 de octubre de 2026; es la actualización más reciente de la app, por lo que no se aplica ninguna advertencia de falta de mantenimiento. Las 25 entradas del historial de versiones llevan la misma nota genérica sobre mejoras y correcciones, así que los cambios no se distinguen en la ficha."
      },
      "pricing": {
        "id": "pricing",
        "title": "Precio",
        "content": [
          "**Las fuentes discrepan sobre el precio, así que consulta la ficha antes de comprar.** La ficha de EE. UU. muestra un precio de compra de $5.99 y una compra dentro de la app llamada Haplo AI Premium a $1.99 al mes o $12.99 al año. El sitio del creador muestra solo «$1.99/mo or $12.99/yr», su guía para Mac del 11 de octubre de 2026 dice que la app se descarga gratis pero los usuarios nuevos se suscriben antes de poder chatear, y la descripción de la tienda dice «No subscription required».",
          "Otras tiendas también indican un precio de compra (6,99 € en Alemania y España, ¥1,000 en Japón, ₩9,900 en Corea, R$ 39,90 en Brasil) y dos importes Premium; la tienda francesa no incluía la app cuando se comprobó. Según la guía del creador, una compra cubre iPhone, iPad y Mac."
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Funciones indicadas por el creador",
        "content": [
          "**Todo lo siguiente procede de la descripción de la App Store, el sitio del creador y sus guías; nada se probó.**"
        ],
        "items": [
          "**Chat y código.** Respuestas en streaming, cambio de modelo por conversación, un prompt de sistema propio, ajustes de longitud de respuesta y creatividad, y ayuda con código sin conexión.",
          "**Entrada de imágenes.** Adjunta una foto y pregunta sobre ella; el creador dice que se lee en el dispositivo.",
          "**Generación y edición de imágenes.** Generación local de imágenes; la ficha describe además el inpainting con una máscara dibujada.",
          "**Herramientas.** Búsqueda web, Mapas, Navegador, Calendario, Salud y gráficos; en un Mac, un iPhone 16 Pro o Pro Max o cualquier iPhone 17, «Automatic Tools» (activado por defecto) puede elegir una por ti.",
          "**Idiomas.** La ficha muestra inglés y otros 14 idiomas."
        ],
        "note": "La página principal del sitio también anuncia generación de vídeo en el dispositivo; ninguna otra fuente la describe."
      },
      "privacy": {
        "id": "privacy",
        "title": "Política de privacidad y flujo de datos",
        "content": [
          "**La etiqueta de privacidad de la App Store dice «Datos no recopilados», y la política del creador (en vigor desde el 4 de octubre de 2026) afirma que Haplo AI no envía a Haplo nada sobre ti y no contiene SDK de analítica ni de publicidad.** Los chats y las imágenes generadas se guardan en el dispositivo.",
          "Los datos sí salen del dispositivo de tres formas: las descargas de modelos desde Hugging Face, que ve tu dirección IP pero no tus mensajes; una solicitud de lista de modelos a haploapp.com con el tipo de dispositivo, la versión de la app y el tamaño de memoria; y las herramientas de búsqueda web (DuckDuckGo, con Bing de respaldo), Mapas (Apple) y Navegador, que envían contenido al exterior cada vez que se ejecutan, también cuando «Automatic Tools» inicia una. Se pueden leer datos de Salud para que preguntes sobre ellos, y la política dice que permanecen en el dispositivo."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "La etiqueta y la política son declaraciones del creador. La app es de código cerrado y PromptQuorum no ha inspeccionado el tráfico de red, así que comprueba qué sale del dispositivo antes de enviar mensajes sensibles a las herramientas."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quién es",
        "items": [
          "**Usuarios de iPhone y Mac que quieren una app de chat sin conexión ya lista,** sin Terminal.",
          "**Quienes quieren chat, entrada de imágenes y generación de imágenes en una sola app.**",
          "**Usuarios que quieren una sola compra para iPhone, iPad y Mac.**"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Lo que no pudimos verificar",
        "items": [
          "**Comportamiento real.** No se midieron calidad de respuesta, velocidad, uso sin conexión, batería ni almacenamiento.",
          "**Precio y suscripción.** Las fuentes se contradicen (consulta Precio); no se confirmó si Premium es necesario para chatear.",
          "**Lista de modelos.** La descripción de la tienda cita Gemma 2B, Phi-3 Mini, Mistral 7B y Llama 3, mientras que el sitio y las guías citan otros modelos; esta reseña sigue las guías del creador.",
          "**Generación de vídeo.** Solo se anuncia en la página principal.",
          "**Código fuente.** La app es de código cerrado; no se encontró repositorio ni texto de licencia."
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
            "App": "[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)",
            "Plataformas": "iOS, Android",
            "Precio / licencia": "Gratis / MIT",
            "Diferencia clave": "Chat de código abierto en el dispositivo con su propia biblioteca de modelos"
          },
          {
            "App": "[Private Mind](/es/power-local-llm/private-mind-review)",
            "Plataformas": "iOS, Android",
            "Precio / licencia": "Gratis / MIT",
            "Diferencia clave": "Chat sin conexión de código abierto con preguntas sobre documentos en el dispositivo"
          },
          {
            "App": "[LM Mini](/es/power-local-llm/lm-mini-review)",
            "Plataformas": "iOS, macOS",
            "Precio / licencia": "Gratis + compras / Código cerrado",
            "Diferencia clave": "Combina modelos en el dispositivo con tu propio servidor LM Studio u Ollama"
          },
          {
            "App": "[Frankly AI](/es/power-local-llm/frankly-ai-review)",
            "Plataformas": "iOS, iPadOS",
            "Precio / licencia": "Gratis + Pro / Código cerrado",
            "Diferencia clave": "Chat para iPhone con personas por tarea y límite diario gratuito"
          }
        ],
        "note": "Los datos de los competidores cambian a menudo; comprueba el precio, la licencia y las plataformas actuales en la ficha de cada app."
      },
      "faq": {
        "id": "faq",
        "title": "Preguntas frecuentes",
        "faqs": [
          {
            "q": "¿Haplo AI necesita una cuenta?",
            "a": "No. El sitio y la política del creador dicen que no hay cuenta; las compras pasan por tu ID de Apple."
          },
          {
            "q": "¿Haplo AI funciona sin internet?",
            "a": "Una vez descargado el modelo, el chat se ejecuta en el dispositivo. Las herramientas de búsqueda web, mapas y navegador necesitan conexión por diseño."
          },
          {
            "q": "¿La versión para Mac es la app de iPhone?",
            "a": "La guía del creador dice que es una app nativa de macOS, no la app de iPhone ejecutándose en el Mac, y requiere macOS 15.0 y un chip M1 o superior."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredicto",
        "content": "Haplo AI es una app de un único desarrollador, actualizada con frecuencia, que reúne modelos abiertos, entrada de imágenes y generación de imágenes para iPhone y Mac. Sus límites son el código cerrado, 76 valoraciones mixtas en EE. UU., un precio poco claro y herramientas que envían datos al exterior. Encaja con quienes quieren un asistente sin conexión ya listo; quien necesite código abierto debería comparar [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Private Mind](/es/power-local-llm/private-mind-review)."
      },
      "sources": {
        "id": "sources",
        "title": "Fuentes",
        "items": [
          "[Haplo AI en la App Store](https://apps.apple.com/es/app/id6746702574) — descripción, historial de versiones, compras dentro de la app, etiqueta de privacidad, requisitos y valoraciones, comprobados el 24 de octubre de 2026.",
          "[Página del producto Haplo AI](https://www.haploapp.com/haplo_ai) — lista de funciones y ejemplos de modelos del creador.",
          "[Política de privacidad de Haplo](https://www.haploapp.com/PrivacyPolicy) — qué recoge cada app; en vigor desde el 4 de octubre de 2026.",
          "[Cómo ejecutar IA sin conexión en tu iPhone](https://www.haploapp.com/blog/run-ai-offline-on-iphone) — guía del creador sobre el catálogo de modelos y las herramientas (en inglés).",
          "[Cómo ejecutar un LLM en local en un Mac](https://www.haploapp.com/blog/run-llm-locally-on-mac) — guía del creador para Mac, actualizada el 11 de octubre de 2026 (en inglés).",
          "[Datos de consulta de Apple sobre Haplo AI](https://itunes.apple.com/lookup?id=6746702574&country=es) — vendedor, versión, fechas de publicación, sistema mínimo y precio, comprobados el 24 de octubre de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat gratuito y de código abierto en el dispositivo para iOS y Android.",
          "[Reseña de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat sin conexión gratuita con licencia MIT.",
          "[Reseña de LM Mini](/es/power-local-llm/lm-mini-review) — una app de chat para iPhone que también se conecta a tu propio servidor de modelos.",
          "[Reseña de LLM Hub](/es/power-local-llm/llm-hub-review) — una app de chat con modelos en el dispositivo para Android e iOS.",
          "[Las mejores apps de LLM locales para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — el resumen más amplio para iPhone."
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
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/haplo-ai-review-hero-fr.webp",
    "title": "Test de Haplo AI : appli de chat et d’images hors ligne pour iPhone et Mac",
    "seoTitle": "Test de Haplo AI : chat IA hors ligne sur iPhone et Mac",
    "intro": "Haplo AI est une application pour iPhone, iPad et Mac éditée par Haplo, LLC, un studio d’un seul développeur. Selon sa fiche App Store et son éditeur, vous téléchargez des modèles de langage ouverts et exécutez chat, entrée d’images et génération d’images sur l’appareil, sans compte. Ce test reprend la fiche du store, le site de l’éditeur, sa politique de confidentialité et deux guides de son blog, consultés le 24 octobre 2026.",
    "metaDescription": "Test de Haplo AI : appli iPhone, iPad et Mac qui exécute chat et images avec des modèles ouverts sur l’appareil. Prix, confidentialité, doutes.",
    "twitterDescription": "Test de Haplo AI : une appli iPhone et Mac à code fermé qui exécute des modèles ouverts sur l’appareil. Ce que disent la fiche, l’éditeur et sa politique de confidentialité, et où les sources divergent.",
    "audience": "Utilisateurs d’iPhone et de Mac qui veulent savoir si Haplo AI fonctionne vraiment sur l’appareil, ce qu’elle coûte et quelles affirmations de confidentialité les sources étayent.",
    "readTime": "6 min de lecture",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Haplo AI review",
    "targetKeywords": [
      "test haplo ai",
      "haplo ai iphone",
      "ia hors ligne iphone",
      "chat ia privé mac",
      "llm sur l’appareil ios",
      "exécuter un llm hors ligne iphone",
      "haplo ai vs pocketpal"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Mac"
    ],
    "leadAnswerBlock": "**Haplo AI est une appli iPhone, iPad et Mac à code fermé qui télécharge des modèles à poids ouverts et, selon son éditeur, exécute chat, entrée d’images et génération d’images sur l’appareil, sans compte.** **Le prix est la principale inconnue : la fiche App Store affiche un prix d’achat plus des abonnements Premium, alors que les pages de l’éditeur le décrivent autrement.**",
    "quickAnswerTop": {
      "fr": {
        "question": "Haplo AI tourne-t-elle sur mon appareil ?",
        "answer": "Selon son éditeur, oui : après un téléchargement unique du modèle depuis Hugging Face, les conversations et les images générées restent sur l’iPhone ou le Mac. PromptQuorum n’a pas testé l’appli, et ses outils de recherche web, de cartes et de navigateur envoient bien des données à l’extérieur quand ils s’exécutent.",
        "bullets": [
          "Sur l’[App Store](https://apps.apple.com/us/app/id6746702574), version 2.5, pour iOS ou iPadOS 17.0 et ultérieur, et macOS 15.0 et ultérieur avec une puce Apple M1 ou plus récente.",
          "Coût : dans la fiche américaine, un prix d’achat plus un abonnement Premium facultatif ; les sources divergent, voir Tarifs.",
          "Selon la politique de confidentialité de l’éditeur, aucun serveur Haplo ne reçoit vos requêtes."
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
        "label": "Qu’est-ce que Haplo AI ?",
        "anchor": "what-is-haplo-ai"
      },
      {
        "label": "Où tournent vos conversations",
        "anchor": "where-it-runs"
      },
      {
        "label": "Où l’obtenir",
        "anchor": "get-it"
      },
      {
        "label": "Tarifs",
        "anchor": "pricing"
      },
      {
        "label": "Fonctions annoncées par l’éditeur",
        "anchor": "key-features"
      },
      {
        "label": "Politique de confidentialité et flux de données",
        "anchor": "privacy"
      },
      {
        "label": "À qui s’adresse l’appli",
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
        "label": "Lectures associées",
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
            "text": "Haplo AI est une appli de chat à code fermé pour iPhone, iPad et Mac qui télécharge des modèles de langage ouverts et les exécute sur l’appareil, sans exiger de compte."
          },
          {
            "type": "plain-terms",
            "text": "Vous l’installez depuis l’App Store, téléchargez un modèle adapté à votre appareil et discutez. L’éditeur annonce aussi l’entrée d’images, la génération d’images et des outils facultatifs comme la recherche web, qui envoient des données à l’extérieur quand ils s’exécutent."
          }
        ],
        "items": [
          "Éditeur : Haplo, LLC, studio d’un seul développeur qui publie des applis depuis 2021 ; Haplo AI est sortie le 3 juin 2025, compte 25 versions depuis et a été mise à jour pour la dernière fois le 22 octobre 2026.",
          "Audience : l’App Store américain affiche 76 notes d’une moyenne de 3.9, dont 51 à cinq étoiles et 15 à une étoile, un échantillon réduit et partagé.",
          "Modèles : les guides de l’éditeur citent des modèles ouverts comme Qwen, Phi, Ministral et SmolLM, ainsi que des modèles d’image Stable Diffusion et un petit modèle de vision.",
          "Plateformes : une seule fiche App Store couvre iPhone, iPad, Mac et Apple Vision ; la version Mac exige une puce Apple silicon."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce test repose sur la fiche App Store, les données de recherche d’Apple, le site, la politique de confidentialité et deux guides du blog de l’éditeur, consultés le 24 octobre 2026. Il n’a impliqué ni utilisation pratique, ni inspection du réseau, ni mesures de performance."
          }
        ]
      },
      "overview": {
        "id": "what-is-haplo-ai",
        "title": "Qu’est-ce que Haplo AI ?",
        "content": [
          "**Haplo AI est une appli de chat pour iPhone, iPad et Mac qui télécharge des modèles de langage ouverts et les exécute sur l’appareil.** Son titre sur l’App Store américain est « Haplo AI: Offline & Private AI » ; le store allemand l’appelle « Haplo KI: Private & Offline KI ». L’éditeur, Haplo, LLC, se présente comme un studio d’un seul développeur qui crée des applis natives en Swift pour les plateformes Apple.",
          "Haplo AI est l’une des neuf applis du site de l’éditeur. Haplo AI Investing, une appli d’analyse boursière du même studio, est un autre produit."
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "Où tournent vos conversations",
        "content": [
          "**L’éditeur décrit Haplo AI comme locale : les modèles s’exécutent sur l’appareil et les conversations y sont enregistrées, sans serveur Haplo entre les deux.**"
        ],
        "items": [
          "**Modèles.** Téléchargés une fois depuis Hugging Face. Les guides de l’éditeur décrivent un catalogue d’environ 100 Mo à environ 5.7 Go sur iPhone, filtré selon la mémoire de l’appareil, avec des modèles comme Qwen, Phi-4-mini, Ministral 3 et SmolLM, exécutés en fichiers GGUF 4 bits avec llama.cpp.",
          "**Modèle d’Apple.** Sous macOS 26 ou ultérieur avec Apple Intelligence activée, le guide Mac indique que l’appli peut aussi utiliser le modèle embarqué d’Apple.",
          "**Images.** L’entrée d’images utilise un petit modèle de vision. La génération utilise des modèles comme Stable Diffusion 2.1 Base et 1.5 et, sur les téléphones avec 8 Go de RAM ou plus, de plus grands comme Z-Image-Turbo.",
          "**Ce qui passe en ligne.** Les téléchargements de modèles et les outils traités dans la section confidentialité."
        ],
        "note": "Ces informations proviennent du site de l’éditeur et de deux guides de son blog qui décrivent le code de l’appli ; PromptQuorum n’a pas ouvert l’appli."
      },
      "getIt": {
        "id": "get-it",
        "title": "Où l’obtenir",
        "columns": [
          "Plateforme",
          "Où l’obtenir"
        ],
        "rows": [
          {
            "Plateforme": "iPhone et iPad",
            "Où l’obtenir": "[App Store](https://apps.apple.com/us/app/id6746702574) (iOS ou iPadOS 17.0 et ultérieur ; une fiche universelle)"
          },
          {
            "Plateforme": "Mac",
            "Où l’obtenir": "[Mac App Store](https://apps.apple.com/us/app/id6746702574) (même fiche ; macOS 15.0 et ultérieur et puce Apple M1 ou plus récente)"
          },
          {
            "Plateforme": "Android et Windows",
            "Où l’obtenir": "Aucune version trouvée"
          },
          {
            "Plateforme": "Site web",
            "Où l’obtenir": "[haploapp.com/haplo_ai](https://www.haploapp.com/haplo_ai) (page produit de l’éditeur)"
          },
          {
            "Plateforme": "Politique de confidentialité",
            "Où l’obtenir": "[Politique de confidentialité de Haplo](https://www.haploapp.com/PrivacyPolicy) (en vigueur depuis le 4 octobre 2026)"
          }
        ],
        "note": "Version examinée : 2.5, publiée le 22 octobre 2026 ; c’est la mise à jour la plus récente de l’appli, aucun avertissement d’abandon ne s’applique donc. Les 25 entrées de l’historique des versions portent la même note générique sur des améliorations et des corrections, si bien que les changements ne se distinguent pas dans la fiche."
      },
      "pricing": {
        "id": "pricing",
        "title": "Tarifs",
        "content": [
          "**Les sources divergent sur le prix : consultez la fiche avant d’acheter.** La fiche américaine affiche un prix d’achat de 5.99 $ et un achat intégré nommé Haplo AI Premium à 1.99 $ par mois ou 12.99 $ par an. Le site de l’éditeur n’indique que « $1.99/mo or $12.99/yr », son guide Mac du 11 octobre 2026 dit que l’appli se télécharge gratuitement mais que les nouveaux utilisateurs s’abonnent avant de pouvoir discuter, et la description du store dit « No subscription required ».",
          "D’autres storefronts affichent aussi un prix d’achat (6,99 € en Allemagne et en Espagne, ¥1,000 au Japon, ₩9,900 en Corée, R$ 39,90 au Brésil) et deux montants Premium ; le store français ne proposait pas l’appli lors de la vérification. Selon le guide de l’éditeur, un seul achat couvre iPhone, iPad et Mac."
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Fonctions annoncées par l’éditeur",
        "content": [
          "**Tout ce qui suit provient de la description App Store, du site de l’éditeur et de ses guides ; rien n’a été testé.**"
        ],
        "items": [
          "**Chat et code.** Réponses en streaming, changement de modèle par conversation, prompt système personnalisé, réglages de longueur des réponses et de créativité, et aide au code hors ligne.",
          "**Entrée d’images.** Joignez une photo et posez une question ; selon l’éditeur, elle est lue sur l’appareil.",
          "**Génération et retouche d’images.** Génération d’images en local ; la fiche décrit aussi l’inpainting avec un masque dessiné.",
          "**Outils.** Recherche web, Plans, navigateur, Calendrier, Santé et graphiques ; sur un Mac, un iPhone 16 Pro ou Pro Max ou n’importe quel iPhone 17, « Automatic Tools » (activé par défaut) peut en choisir un pour vous.",
          "**Langues.** La fiche affiche l’anglais et 14 autres langues."
        ],
        "note": "La page d’accueil du site annonce aussi la génération vidéo sur l’appareil ; aucune autre source ne la décrit."
      },
      "privacy": {
        "id": "privacy",
        "title": "Politique de confidentialité et flux de données",
        "content": [
          "**L’étiquette de confidentialité de l’App Store indique « Données non collectées », et la politique de l’éditeur (en vigueur depuis le 4 octobre 2026) affirme que Haplo AI n’envoie rien sur vous à Haplo et ne contient aucun SDK d’analyse ni de publicité.** Les conversations et les images générées sont enregistrées sur l’appareil.",
          "Des données quittent bien l’appareil de trois façons : les téléchargements de modèles depuis Hugging Face, qui voit votre adresse IP mais pas vos requêtes ; une demande de liste de modèles à haploapp.com portant le type d’appareil, la version de l’appli et la taille de la mémoire ; et les outils de recherche web (DuckDuckGo, avec Bing en secours), Plans (Apple) et navigateur, qui envoient du contenu à l’extérieur à chaque exécution, y compris quand « Automatic Tools » en lance un. Les données de santé peuvent être lues pour que vous puissiez les interroger ; la politique indique qu’elles restent sur l’appareil."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "L’étiquette et la politique sont des déclarations de l’éditeur. L’appli est à code fermé et PromptQuorum n’a pas inspecté le trafic réseau ; vérifiez donc ce qui quitte l’appareil avant d’envoyer des requêtes sensibles aux outils."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "À qui s’adresse l’appli",
        "items": [
          "**Les utilisateurs d’iPhone et de Mac qui veulent une appli de chat hors ligne prête à l’emploi,** sans Terminal.",
          "**Ceux qui veulent chat, entrée d’images et génération d’images dans une seule appli.**",
          "**Les utilisateurs qui veulent un seul achat pour iPhone, iPad et Mac.**"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Ce que nous n’avons pas pu vérifier",
        "items": [
          "**Comportement réel.** Qualité des réponses, vitesse, usage hors ligne, batterie et stockage n’ont pas été mesurés.",
          "**Prix et abonnement.** Les sources se contredisent (voir Tarifs) ; nous n’avons pas confirmé si Premium est nécessaire pour discuter.",
          "**Liste des modèles.** La description du store cite Gemma 2B, Phi-3 Mini, Mistral 7B et Llama 3, tandis que le site et les guides citent d’autres modèles ; ce test suit les guides de l’éditeur.",
          "**Génération vidéo.** Annoncée uniquement sur la page d’accueil.",
          "**Code source.** L’appli est à code fermé ; aucun dépôt ni texte de licence n’a été trouvé."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "Concurrents et alternatives",
        "columns": [
          "Appli",
          "Plateformes",
          "Prix / licence",
          "Différence clé"
        ],
        "rows": [
          {
            "Appli": "[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)",
            "Plateformes": "iOS, Android",
            "Prix / licence": "Gratuit / MIT",
            "Différence clé": "Chat open source sur l’appareil avec sa propre bibliothèque de modèles"
          },
          {
            "Appli": "[Private Mind](/fr/power-local-llm/private-mind-review)",
            "Plateformes": "iOS, Android",
            "Prix / licence": "Gratuit / MIT",
            "Différence clé": "Chat hors ligne open source avec questions sur documents sur l’appareil"
          },
          {
            "Appli": "[LM Mini](/fr/power-local-llm/lm-mini-review)",
            "Plateformes": "iOS, macOS",
            "Prix / licence": "Gratuit + achats / Code fermé",
            "Différence clé": "Associe des modèles sur l’appareil à votre propre serveur LM Studio ou Ollama"
          },
          {
            "Appli": "[Frankly AI](/fr/power-local-llm/frankly-ai-review)",
            "Plateformes": "iOS, iPadOS",
            "Prix / licence": "Gratuit + Pro / Code fermé",
            "Différence clé": "Chat iPhone avec personas par tâche et limite quotidienne gratuite"
          }
        ],
        "note": "Les informations sur les concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels sur la fiche de chaque appli."
      },
      "faq": {
        "id": "faq",
        "title": "Questions fréquentes",
        "faqs": [
          {
            "q": "Haplo AI exige-t-elle un compte ?",
            "a": "Non. Le site et la politique de l’éditeur indiquent qu’il n’y a pas de compte ; les achats passent par votre identifiant Apple."
          },
          {
            "q": "Haplo AI fonctionne-t-elle sans internet ?",
            "a": "Une fois le modèle téléchargé, le chat s’exécute sur l’appareil. Les outils de recherche web, de cartes et de navigateur ont besoin d’une connexion par conception."
          },
          {
            "q": "La version Mac est-elle l’appli iPhone ?",
            "a": "Le guide de l’éditeur indique qu’il s’agit d’une appli macOS native, et non de l’appli iPhone exécutée sur un Mac ; elle exige macOS 15.0 et une puce M1 ou plus récente."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Haplo AI est une appli régulièrement mise à jour par un seul développeur, qui réunit modèles ouverts, entrée d’images et génération d’images pour iPhone et Mac. Ses limites : code fermé, 76 notes américaines mitigées, un prix peu clair et des outils qui envoient des données à l’extérieur. Elle convient à ceux qui veulent un assistant hors ligne prêt à l’emploi ; qui a besoin d’open source comparera [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Private Mind](/fr/power-local-llm/private-mind-review)."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Haplo AI sur l’App Store](https://apps.apple.com/us/app/id6746702574) — description, historique des versions, achats intégrés, étiquette de confidentialité, prérequis et notes, consultés le 24 octobre 2026.",
          "[Page produit Haplo AI](https://www.haploapp.com/haplo_ai) — liste des fonctions et exemples de modèles de l’éditeur.",
          "[Politique de confidentialité de Haplo](https://www.haploapp.com/PrivacyPolicy) — ce que collecte chaque appli ; en vigueur depuis le 4 octobre 2026.",
          "[Exécuter l’IA hors ligne sur iPhone](https://www.haploapp.com/blog/run-ai-offline-on-iphone) — guide de l’éditeur sur le catalogue de modèles et les outils (en anglais).",
          "[Exécuter un LLM en local sur Mac](https://www.haploapp.com/blog/run-llm-locally-on-mac) — guide Mac de l’éditeur, mis à jour le 11 octobre 2026 (en anglais).",
          "[Données de recherche d’Apple sur Haplo AI](https://itunes.apple.com/lookup?id=6746702574&country=us) — vendeur, version, dates de sortie, système minimal et prix, consultés le 24 octobre 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lectures associées",
        "items": [
          "[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat gratuit et open source sur l’appareil pour iOS et Android.",
          "[Test de Private Mind](/fr/power-local-llm/private-mind-review) — une appli de chat hors ligne gratuite sous licence MIT.",
          "[Test de LM Mini](/fr/power-local-llm/lm-mini-review) — une appli de chat pour iPhone qui se connecte aussi à votre propre serveur de modèles.",
          "[Test de LLM Hub](/fr/power-local-llm/llm-hub-review) — une appli de chat avec modèles sur l’appareil pour Android et iOS.",
          "[Les meilleures applis de LLM locaux pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le panorama plus large pour iPhone."
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
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/haplo-ai-review-hero-ja.webp",
    "title": "Haplo AIレビュー：iPhoneとMacで使えるオフラインのチャット・画像アプリ",
    "seoTitle": "Haplo AIレビュー：iPhone・Macのオフラインチャット",
    "intro": "Haplo AIは、個人開発のスタジオHaplo, LLCが公開するiPhone・iPad・Mac向けアプリです。App Storeの掲載情報と開発元によると、オープンな言語モデルをダウンロードし、チャット、画像入力、画像生成をアカウントなしで端末内で実行します。本レビューは、ストアの掲載情報、開発元のサイト、プライバシーポリシー、ブログの解説記事2本を2026年10月24日に確認した内容に基づきます。",
    "metaDescription": "Haplo AIレビュー：オープンモデルを端末にダウンロードし、チャットと画像を端末内で実行するiPhone・iPad・Mac向けアプリ。価格、プライバシー、未確認事項。",
    "twitterDescription": "Haplo AIレビュー：オープンモデルを端末内で動かすクローズドソースのiPhone・Macアプリ。掲載情報、開発元、プライバシーポリシーの内容と、情報源が食い違う点を整理します。",
    "audience": "Haplo AIが本当に端末内で動くのか、費用はいくらか、プライバシーに関するどの主張が情報源で裏付けられるのかを知りたいiPhone・Macユーザー向けです。",
    "readTime": "6分で読める",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Haplo AI review",
    "targetKeywords": [
      "Haplo AI レビュー",
      "Haplo AI iPhone",
      "iPhone オフライン AI",
      "Mac プライベート AIチャット",
      "オンデバイス LLM iOS",
      "iPhone LLM オフライン",
      "Haplo AI PocketPal 比較"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Mac"
    ],
    "leadAnswerBlock": "**Haplo AIはクローズドソースのiPhone・iPad・Mac向けアプリで、開発元によると、オープンウェイトのモデルをダウンロードし、チャット、画像入力、画像生成をアカウントなしで端末内で実行します。** **最大の疑問は価格です。App Storeの掲載情報には購入価格とPremiumの定期購入が並び、開発元自身のページは別の説明をしています。**",
    "quickAnswerTop": {
      "ja": {
        "question": "Haplo AIは自分の端末内で動きますか？",
        "answer": "開発元によると、はい。Hugging Faceからモデルを一度ダウンロードすれば、チャットと生成画像はiPhoneまたはMacに留まります。PromptQuorumはアプリを試しておらず、Web検索・マップ・ブラウザのツールは実行時にデータを外部へ送ります。",
        "bullets": [
          "[App Store](https://apps.apple.com/jp/app/id6746702574)で入手でき、バージョンは2.5、対応はiOS・iPadOS 17.0以降、およびApple M1以降のチップを搭載したmacOS 15.0以降です。",
          "費用：米国の掲載情報では購入価格に加えて任意のPremium定期購入があります。情報源が食い違うため「価格」を参照してください。",
          "開発元のプライバシーポリシーによると、Haploのサーバーがプロンプトを受け取ることはありません。"
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
        "label": "Haplo AIとは",
        "anchor": "what-is-haplo-ai"
      },
      {
        "label": "チャットはどこで動くか",
        "anchor": "where-it-runs"
      },
      {
        "label": "入手方法",
        "anchor": "get-it"
      },
      {
        "label": "価格",
        "anchor": "pricing"
      },
      {
        "label": "開発元が挙げる機能",
        "anchor": "key-features"
      },
      {
        "label": "プライバシーポリシーとデータの流れ",
        "anchor": "privacy"
      },
      {
        "label": "おすすめできる人",
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
        "label": "情報源",
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
            "text": "Haplo AIは、オープンな言語モデルをダウンロードしてアカウントなしで端末内で実行する、クローズドソースのiPhone・iPad・Mac向けチャットアプリです。"
          },
          {
            "type": "plain-terms",
            "text": "App Storeからインストールし、端末に合ったモデルをダウンロードしてチャットします。開発元は画像入力、画像生成、Web検索などの任意ツールも挙げていますが、ツールは実行時にデータを外部へ送ります。"
          }
        ],
        "items": [
          "開発元：2021年からアプリを公開している個人開発のスタジオHaplo, LLC。Haplo AIは2025年6月3日に公開され、以来25回更新され、最新の更新は2026年10月22日です。",
          "利用状況：米国App Storeの評価は76件で平均3.9、うち5つ星が51件、1つ星が15件と、件数が少なく評価が割れています。",
          "モデル：開発元の解説記事には、Qwen、Phi、Ministral、SmolLMなどのオープンモデルに加え、Stable Diffusionの画像モデルと小型のビジョンモデルが挙げられています。",
          "対応プラットフォーム：1つのApp Storeページで、iPhone、iPad、Mac、Apple Visionに対応します。Mac版にはApple siliconが必要です。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本レビューは、App Storeの掲載情報、Appleの検索データ、開発元のサイト、プライバシーポリシー、ブログの解説記事2本を2026年10月24日に確認した内容に基づきます。実機での使用、ネットワークの検査、ベンチマークは行っていません。"
          }
        ]
      },
      "overview": {
        "id": "what-is-haplo-ai",
        "title": "Haplo AIとは",
        "content": [
          "**Haplo AIは、オープンな言語モデルをダウンロードして端末内で実行する、iPhone・iPad・Mac向けのチャットアプリです。** 米国App Storeでの名称は「Haplo AI: Offline & Private AI」で、日本のストアでは「Haplo AI：オフライン&プライベートAI」です。開発元のHaplo, LLCは、Apple向けにSwiftでネイティブアプリを作る個人開発のスタジオだと説明しています。",
          "Haplo AIは開発元のサイトに載る9つのアプリの1つです。同じスタジオの株式分析アプリHaplo AI Investingは別の製品です。"
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "チャットはどこで動くか",
        "content": [
          "**開発元はHaplo AIをローカル動作だと説明しています。モデルは端末内で動き、チャットも端末に保存され、間にHaploのサーバーはありません。**"
        ],
        "items": [
          "**モデル。** Hugging Faceから一度ダウンロードします。開発元の解説記事によると、カタログはiPhoneで約100 MBから約5.7 GBまで、端末のメモリに応じて絞り込まれます。Qwen、Phi-4-mini、Ministral 3、SmolLMなどが、llama.cppで4ビットGGUFファイルとして実行されます。",
          "**Appleのモデル。** Apple Intelligenceを有効にしたmacOS 26以降では、Mac向け解説記事によると、Apple自身のオンデバイスモデルも使えます。",
          "**画像。** 画像入力は小型のビジョンモデルを使います。画像生成にはStable Diffusion 2.1 Baseや1.5などを使い、RAM 8 GB以上のスマートフォンではZ-Image-Turboなどの大きなモデルも使えます。",
          "**ネットに出るもの。** モデルのダウンロードと、プライバシーの項で扱うツールです。"
        ],
        "note": "これらの情報は、開発元のサイトと、アプリのコードを説明するブログの解説記事2本によるものです。PromptQuorumはアプリを開いていません。"
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
            "プラットフォーム": "iPhone・iPad",
            "入手先": "[App Store](https://apps.apple.com/jp/app/id6746702574)（iOS・iPadOS 17.0以降、共通の1ページ）"
          },
          {
            "プラットフォーム": "Mac",
            "入手先": "[Mac App Store](https://apps.apple.com/jp/app/id6746702574)（同じページ。macOS 15.0以降、Apple M1以降のチップ）"
          },
          {
            "プラットフォーム": "AndroidとWindows",
            "入手先": "ビルドは見つかりませんでした"
          },
          {
            "プラットフォーム": "ウェブサイト",
            "入手先": "[haploapp.com/haplo_ai](https://www.haploapp.com/haplo_ai)（開発元の製品ページ）"
          },
          {
            "プラットフォーム": "プライバシーポリシー",
            "入手先": "[Haploのプライバシーポリシー](https://www.haploapp.com/PrivacyPolicy)（2026年10月4日施行）"
          }
        ],
        "note": "確認したバージョン：2.5（2026年10月22日公開）。これがアプリの最新の更新のため、更新停止の警告は付けません。バージョン履歴の25件はすべて「機能の改善とバグ修正」という同じ定型文で、掲載情報から変更点は区別できません。"
      },
      "pricing": {
        "id": "pricing",
        "title": "価格",
        "content": [
          "**価格については情報源が食い違うため、購入前に掲載情報を確認してください。** 米国の掲載情報には、購入価格$5.99と、Haplo AI Premiumというアプリ内課金（月額$1.99または年額$12.99）が表示されています。開発元のサイトは「$1.99/mo or $12.99/yr」とだけ示し、2026年10月11日付けのMac向け解説記事は「ダウンロードは無料だが、新規ユーザーはチャットの前に定期購入する」と述べ、ストアの説明文は「No subscription required」としています。",
          "ほかのストアにも購入価格があります（ドイツとスペインは6,99 €、日本は¥1,000、韓国は₩9,900、ブラジルはR$ 39,90）。Premiumの金額も2種類表示されていますが、確認時点でフランスのストアにはアプリが掲載されていませんでした。開発元の解説記事によると、1回の購入でiPhone、iPad、Macに対応します。"
        ]
      },
      "features": {
        "id": "key-features",
        "title": "開発元が挙げる機能",
        "content": [
          "**以下はすべてApp Storeの説明、開発元のサイト、解説記事によるもので、いずれも検証していません。**"
        ],
        "items": [
          "**チャットとコード。** ストリーミング表示、会話ごとのモデル切り替え、カスタムのシステムプロンプト、回答の長さと創造性の設定、オフラインでのコード支援。",
          "**画像入力。** 写真を添付して質問できます。開発元によると、写真は端末内で読み取られます。",
          "**画像生成と編集。** 画像生成は端末内で行います。掲載情報には、描いたマスクを使うインペインティングの説明もあります。",
          "**ツール。** Web検索、マップ、ブラウザ、カレンダー、ヘルスケア、グラフ。Mac、iPhone 16 Pro／Pro Max、またはiPhone 17では、「Automatic Tools」（初期設定でオン）が自動でツールを選ぶことがあります。",
          "**言語。** 掲載情報には英語とほか14言語が表示されています。"
        ],
        "note": "サイトのトップページはオンデバイスの動画生成もうたっていますが、ほかに説明する情報源はありません。"
      },
      "privacy": {
        "id": "privacy",
        "title": "プライバシーポリシーとデータの流れ",
        "content": [
          "**App Storeのプライバシーラベルは「データ収集なし」で、開発元のポリシー（2026年10月4日施行）は、Haplo AIがHaploにユーザーに関する情報を送らず、分析用や広告用のSDKも含まないとしています。** チャットと生成画像は端末に保存されます。",
          "データが端末の外へ出る経路は3つあります。Hugging Faceからのモデルのダウンロード（IPアドレスは見えますがプロンプトは見えません）、haploapp.comへのモデル一覧リクエスト（端末の種類、アプリのバージョン、メモリ容量を含む）、そしてWeb検索（DuckDuckGo、失敗時はBing）、マップ（Apple）、ブラウザの各ツールで、実行のたびに、Automatic Toolsが起動した場合も含めて、内容を外部へ送ります。ヘルスケアのデータは質問のために読み取られることがあり、ポリシーによると端末内に留まります。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "ラベルもポリシーも開発元自身の説明です。アプリはクローズドソースで、PromptQuorumはネットワーク通信を検査していません。機密性の高い内容をツールに送る前に、端末から何が出ていくかを確認してください。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "おすすめできる人",
        "items": [
          "**すぐ使えるオフラインのチャットアプリが欲しいiPhone・Macユーザー**（ターミナル不要）。",
          "**チャット、画像入力、画像生成を1つのアプリで使いたい人。**",
          "**iPhone、iPad、Macを1回の購入でまかないたい人。**"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "確認できなかった点",
        "items": [
          "**実際の挙動。** 回答の質、速度、オフライン利用、バッテリー、ストレージは測定していません。",
          "**価格と定期購入。** 情報源が食い違っており（「価格」参照）、チャットにPremiumが必要かどうかは確認できませんでした。",
          "**モデル一覧。** ストアの説明文はGemma 2B、Phi-3 Mini、Mistral 7B、Llama 3を挙げ、サイトと解説記事は別のモデルを挙げています。本レビューは開発元の解説記事に従っています。",
          "**動画生成。** トップページでうたわれているだけです。",
          "**ソースコード。** アプリはクローズドソースで、リポジトリもライセンス文も見つかりませんでした。"
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "競合と代替アプリ",
        "columns": [
          "アプリ",
          "対応環境",
          "価格／ライセンス",
          "主な違い"
        ],
        "rows": [
          {
            "アプリ": "[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)",
            "対応環境": "iOS、Android",
            "価格／ライセンス": "無料／MIT",
            "主な違い": "独自のモデルライブラリを持つオープンソースのオンデバイスチャット"
          },
          {
            "アプリ": "[Private Mind](/ja/power-local-llm/private-mind-review)",
            "対応環境": "iOS、Android",
            "価格／ライセンス": "無料／MIT",
            "主な違い": "端末内の文書Q&Aを備えたオープンソースのオフラインチャット"
          },
          {
            "アプリ": "[LM Mini](/ja/power-local-llm/lm-mini-review)",
            "対応環境": "iOS、macOS",
            "価格／ライセンス": "無料＋課金／クローズドソース",
            "主な違い": "端末内モデルと自分のLM StudioやOllamaサーバーを併用"
          },
          {
            "アプリ": "[Frankly AI](/ja/power-local-llm/frankly-ai-review)",
            "対応環境": "iOS、iPadOS",
            "価格／ライセンス": "無料＋Pro／クローズドソース",
            "主な違い": "用途別ペルソナと1日の無料上限があるiPhone向けチャット"
          }
        ],
        "note": "競合の情報は変わりやすいため、各アプリの最新の価格、ライセンス、対応環境はそれぞれの掲載ページで確認してください。"
      },
      "faq": {
        "id": "faq",
        "title": "よくある質問",
        "faqs": [
          {
            "q": "Haplo AIにアカウントは必要ですか？",
            "a": "いいえ。開発元のサイトとポリシーはアカウントがないとしています。購入はApple IDで行います。"
          },
          {
            "q": "Haplo AIはネットなしで使えますか？",
            "a": "モデルをダウンロードしたあとは、チャットは端末内で動きます。Web検索、マップ、ブラウザのツールは仕組み上、接続が必要です。"
          },
          {
            "q": "Mac版はiPhoneアプリそのものですか？",
            "a": "開発元の解説記事によると、MacでiPhoneアプリを動かすのではなくネイティブのmacOSアプリで、macOS 15.0とM1以降のチップが必要です。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "結論",
        "content": "Haplo AIは、個人開発者が頻繁に更新しており、オープンモデル、画像入力、画像生成をiPhoneとMacにまとめたアプリです。制約は、クローズドソースであること、米国の76件の評価が割れていること、価格が不明瞭なこと、データを外部へ送るツールがあることです。すぐ使えるオフラインアシスタントを求める人に向きます。オープンソースが必須なら[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Private Mind](/ja/power-local-llm/private-mind-review)も比べてください。"
      },
      "sources": {
        "id": "sources",
        "title": "情報源",
        "items": [
          "[App StoreのHaplo AI](https://apps.apple.com/jp/app/id6746702574) — 説明、バージョン履歴、アプリ内課金、プライバシーラベル、動作条件、評価。2026年10月24日確認。",
          "[Haplo AIの製品ページ](https://www.haploapp.com/haplo_ai) — 開発元の機能一覧とモデルの例。",
          "[Haploのプライバシーポリシー](https://www.haploapp.com/PrivacyPolicy) — 各アプリが収集する情報。2026年10月4日施行。",
          "[iPhoneでAIをオフライン実行する方法](https://www.haploapp.com/blog/run-ai-offline-on-iphone) — 開発元によるモデルカタログとツールの解説（英語）。",
          "[MacでLLMをローカル実行する方法](https://www.haploapp.com/blog/run-llm-locally-on-mac) — 開発元のMac向け解説。2026年10月11日更新（英語）。",
          "[AppleのHaplo AI検索データ](https://itunes.apple.com/lookup?id=6746702574&country=jp) — 販売元、バージョン、公開日、最低OS、価格。2026年10月24日確認。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けの無料のオープンソース・オンデバイスチャットクライアント。",
          "[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — MITライセンスの無料オフラインチャットアプリ。",
          "[LM Miniレビュー](/ja/power-local-llm/lm-mini-review) — 自分のモデルサーバーにも接続できるiPhone向けチャットアプリ。",
          "[LLM Hubレビュー](/ja/power-local-llm/llm-hub-review) — AndroidとiOS向けのオンデバイスチャットアプリ。",
          "[iPhone向けローカルLLMアプリのおすすめ2026](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone向けのより広い比較記事。"
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
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/haplo-ai-review-hero-pt.webp",
    "title": "Análise do Haplo AI: app de chat e imagens offline para iPhone e Mac",
    "seoTitle": "Análise do Haplo AI: chat de IA offline no iPhone e Mac",
    "intro": "O Haplo AI é um app para iPhone, iPad e Mac da Haplo, LLC, um estúdio de um único desenvolvedor. Segundo a página da App Store e o criador, você baixa modelos de linguagem abertos e executa chat, entrada de imagens e geração de imagens no aparelho, sem conta. Esta análise reflete a página da loja, o site do criador, a política de privacidade e dois guias do blog dele, verificados em 24 de outubro de 2026.",
    "metaDescription": "Análise do Haplo AI: app para iPhone, iPad e Mac que roda chat e imagens com modelos abertos no aparelho. Preço, privacidade e pontos em aberto.",
    "twitterDescription": "Análise do Haplo AI: um app de código fechado para iPhone e Mac que executa modelos abertos no aparelho. O que dizem a página, o criador e a política de privacidade, e onde as fontes divergem.",
    "audience": "Usuários de iPhone e Mac que querem saber se o Haplo AI realmente roda no aparelho, quanto custa e quais afirmações de privacidade as fontes sustentam.",
    "readTime": "6 min de leitura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Haplo AI review",
    "targetKeywords": [
      "análise haplo ai",
      "haplo ai iphone",
      "ia offline iphone",
      "chat de ia privado mac",
      "llm no aparelho ios",
      "rodar llm offline iphone",
      "haplo ai vs pocketpal"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Mac"
    ],
    "leadAnswerBlock": "**O Haplo AI é um app de código fechado para iPhone, iPad e Mac que baixa modelos de pesos abertos e, segundo o criador, executa chat, entrada de imagens e geração de imagens no aparelho, sem conta.** **O preço é a principal dúvida: a página da App Store mostra um preço de compra mais assinaturas Premium, enquanto as páginas do próprio criador o descrevem de outro modo.**",
    "quickAnswerTop": {
      "pt": {
        "question": "O Haplo AI roda no meu aparelho?",
        "answer": "Segundo o criador, sim: depois de um download único do modelo no Hugging Face, os chats e as imagens geradas ficam no iPhone ou no Mac. A PromptQuorum não testou o app, e as ferramentas de busca na web, mapas e navegador enviam dados para fora quando são usadas.",
        "bullets": [
          "Na [App Store](https://apps.apple.com/br/app/id6746702574), versão 2.5, para iOS ou iPadOS 17.0 ou posterior e macOS 15.0 ou posterior com chip Apple M1 ou mais novo.",
          "Custo: na página dos EUA, um preço de compra mais uma assinatura Premium opcional; as fontes divergem, veja Preço.",
          "Segundo a política de privacidade do criador, nenhum servidor da Haplo recebe seus prompts."
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
        "label": "O que é o Haplo AI?",
        "anchor": "what-is-haplo-ai"
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
        "label": "Preço",
        "anchor": "pricing"
      },
      {
        "label": "Recursos citados pelo criador",
        "anchor": "key-features"
      },
      {
        "label": "Política de privacidade e fluxo de dados",
        "anchor": "privacy"
      },
      {
        "label": "Para quem é",
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
            "text": "O Haplo AI é um app de chat de código fechado para iPhone, iPad e Mac que baixa modelos de linguagem abertos e os executa no aparelho, sem exigir conta."
          },
          {
            "type": "plain-terms",
            "text": "Você instala pela App Store, baixa um modelo adequado ao aparelho e conversa. O criador também cita entrada de imagens, geração de imagens e ferramentas opcionais, como a busca na web, que enviam dados para fora quando são usadas."
          }
        ],
        "items": [
          "Criador: Haplo, LLC, estúdio de um único desenvolvedor que publica apps desde 2021; o Haplo AI foi lançado em 3 de junho de 2025, teve 25 versões desde então e foi atualizado pela última vez em 22 de outubro de 2026.",
          "Alcance: a App Store dos EUA mostra 76 avaliações com média de 3.9, sendo 51 de cinco estrelas e 15 de uma estrela, uma amostra pequena e dividida.",
          "Modelos: os guias do criador citam modelos abertos como Qwen, Phi, Ministral e SmolLM, além de modelos de imagem Stable Diffusion e um pequeno modelo de visão.",
          "Plataformas: uma única página da App Store cobre iPhone, iPad, Mac e Apple Vision; a versão para Mac exige Apple silicon."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta análise se baseia na página da App Store, nos dados de consulta da Apple, no site, na política de privacidade e em dois guias do blog do criador, verificados em 24 de outubro de 2026. Não houve uso prático, inspeção de rede nem testes de desempenho."
          }
        ]
      },
      "overview": {
        "id": "what-is-haplo-ai",
        "title": "O que é o Haplo AI?",
        "content": [
          "**O Haplo AI é um app de chat para iPhone, iPad e Mac que baixa modelos de linguagem abertos e os executa no aparelho.** O título na App Store dos EUA é “Haplo AI: Offline & Private AI”; a loja brasileira o chama de “Haplo AI: IA offline e privada”. O criador, Haplo, LLC, se descreve como um estúdio de um único desenvolvedor que cria apps nativos em Swift para plataformas Apple.",
          "O Haplo AI é um dos nove apps do site do criador. O Haplo AI Investing, um app de análise de ações do mesmo estúdio, é outro produto."
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "Onde seus chats rodam",
        "content": [
          "**O criador descreve o Haplo AI como local: os modelos rodam no aparelho e os chats são salvos nele, sem servidor da Haplo no meio.**"
        ],
        "items": [
          "**Modelos.** Baixados uma vez do Hugging Face. Os guias do criador descrevem um catálogo de cerca de 100 MB a cerca de 5.7 GB no iPhone, filtrado pela memória do aparelho, com modelos como Qwen, Phi-4-mini, Ministral 3 e SmolLM, executados como arquivos GGUF de 4 bits com llama.cpp.",
          "**Modelo da Apple.** No macOS 26 ou posterior com a Apple Intelligence ativada, o guia para Mac diz que o app também pode usar o modelo próprio da Apple no aparelho.",
          "**Imagens.** A entrada de imagens usa um pequeno modelo de visão. A geração usa modelos como Stable Diffusion 2.1 Base e 1.5 e, em celulares com 8 GB de RAM ou mais, outros maiores, como Z-Image-Turbo.",
          "**O que vai para a internet.** Os downloads de modelos e as ferramentas tratadas na seção de privacidade."
        ],
        "note": "Estes dados vêm do site do criador e de dois guias do blog que descrevem o código do app; a PromptQuorum não abriu o app."
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
            "Plataforma": "iPhone e iPad",
            "Onde obter": "[App Store](https://apps.apple.com/br/app/id6746702574) (iOS ou iPadOS 17.0 ou posterior; uma página universal)"
          },
          {
            "Plataforma": "Mac",
            "Onde obter": "[Mac App Store](https://apps.apple.com/br/app/id6746702574) (mesma página; macOS 15.0 ou posterior e chip Apple M1 ou mais novo)"
          },
          {
            "Plataforma": "Android e Windows",
            "Onde obter": "Nenhuma versão encontrada"
          },
          {
            "Plataforma": "Site",
            "Onde obter": "[haploapp.com/haplo_ai](https://www.haploapp.com/haplo_ai) (página do produto do criador)"
          },
          {
            "Plataforma": "Política de privacidade",
            "Onde obter": "[Política de privacidade da Haplo](https://www.haploapp.com/PrivacyPolicy) (em vigor desde 4 de outubro de 2026)"
          }
        ],
        "note": "Versão analisada: 2.5, lançada em 22 de outubro de 2026; é a atualização mais recente do app, portanto não se aplica aviso de falta de manutenção. As 25 entradas do histórico de versões trazem a mesma nota genérica sobre melhorias e correções, então as mudanças não se distinguem pela página."
      },
      "pricing": {
        "id": "pricing",
        "title": "Preço",
        "content": [
          "**As fontes divergem sobre o preço, então confira a página antes de comprar.** A página dos EUA mostra um preço de compra de US$ 5.99 e uma compra no app chamada Haplo AI Premium por US$ 1.99 ao mês ou US$ 12.99 ao ano. O site do criador mostra apenas “$1.99/mo or $12.99/yr”, o guia para Mac de 11 de outubro de 2026 diz que o app é gratuito para baixar, mas os novos usuários assinam antes de poder conversar, e a descrição da loja diz “No subscription required”.",
          "Outras lojas também listam um preço de compra (€ 6,99 na Alemanha e na Espanha, ¥1,000 no Japão, ₩9,900 na Coreia, R$ 39,90 no Brasil) e dois valores Premium; a loja francesa não listava o app na verificação. Segundo o guia do criador, uma compra cobre iPhone, iPad e Mac."
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Recursos citados pelo criador",
        "content": [
          "**Tudo abaixo vem da descrição da App Store, do site do criador e de seus guias; nada foi testado.**"
        ],
        "items": [
          "**Chat e código.** Respostas em streaming, troca de modelo por conversa, prompt de sistema próprio, ajustes de tamanho da resposta e de criatividade, e ajuda com código offline.",
          "**Entrada de imagens.** Anexe uma foto e pergunte sobre ela; segundo o criador, ela é lida no aparelho.",
          "**Geração e edição de imagens.** Geração local de imagens; a página descreve ainda inpainting com uma máscara desenhada.",
          "**Ferramentas.** Busca na web, Mapas, Navegador, Calendário, Saúde e gráficos; em um Mac, um iPhone 16 Pro ou Pro Max ou qualquer iPhone 17, o “Automatic Tools” (ativado por padrão) pode escolher uma por você.",
          "**Idiomas.** A página mostra inglês e mais 14 idiomas."
        ],
        "note": "A página inicial do site também anuncia geração de vídeo no aparelho; nenhuma outra fonte a descreve."
      },
      "privacy": {
        "id": "privacy",
        "title": "Política de privacidade e fluxo de dados",
        "content": [
          "**O rótulo de privacidade da App Store diz “Dados não coletados”, e a política do criador (em vigor desde 4 de outubro de 2026) afirma que o Haplo AI não envia nada sobre você à Haplo e não contém SDKs de análise nem de publicidade.** Chats e imagens geradas ficam salvos no aparelho.",
          "Os dados saem do aparelho de três formas: downloads de modelos do Hugging Face, que vê seu endereço IP, mas não seus prompts; uma solicitação de lista de modelos a haploapp.com com o tipo de aparelho, a versão do app e o tamanho da memória; e as ferramentas de busca na web (DuckDuckGo, com Bing como reserva), Mapas (Apple) e Navegador, que enviam conteúdo para fora a cada uso, inclusive quando o “Automatic Tools” aciona uma. Dados de Saúde podem ser lidos para que você pergunte sobre eles, e a política diz que permanecem no aparelho."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "O rótulo e a política são declarações do criador. O app é de código fechado e a PromptQuorum não inspecionou o tráfego de rede; confirme o que sai do aparelho antes de enviar prompts sensíveis às ferramentas."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quem é",
        "items": [
          "**Usuários de iPhone e Mac que querem um app de chat offline pronto,** sem Terminal.",
          "**Quem quer chat, entrada de imagens e geração de imagens em um só app.**",
          "**Usuários que querem uma única compra para iPhone, iPad e Mac.**"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "O que não conseguimos verificar",
        "items": [
          "**Comportamento na prática.** Qualidade das respostas, velocidade, uso offline, bateria e armazenamento não foram medidos.",
          "**Preço e assinatura.** As fontes se contradizem (veja Preço); não foi confirmado se o Premium é necessário para conversar.",
          "**Lista de modelos.** A descrição da loja cita Gemma 2B, Phi-3 Mini, Mistral 7B e Llama 3, enquanto o site e os guias citam outros modelos; esta análise segue os guias do criador.",
          "**Geração de vídeo.** Anunciada apenas na página inicial.",
          "**Código-fonte.** O app é de código fechado; não foram encontrados repositório nem texto de licença."
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
            "App": "[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)",
            "Plataformas": "iOS, Android",
            "Preço / licença": "Grátis / MIT",
            "Diferença principal": "Chat de código aberto no aparelho, com biblioteca própria de modelos"
          },
          {
            "App": "[Private Mind](/pt/power-local-llm/private-mind-review)",
            "Plataformas": "iOS, Android",
            "Preço / licença": "Grátis / MIT",
            "Diferença principal": "Chat offline de código aberto com perguntas sobre documentos no aparelho"
          },
          {
            "App": "[LM Mini](/pt/power-local-llm/lm-mini-review)",
            "Plataformas": "iOS, macOS",
            "Preço / licença": "Grátis + compras / Código fechado",
            "Diferença principal": "Combina modelos no aparelho com seu próprio servidor LM Studio ou Ollama"
          },
          {
            "App": "[Frankly AI](/pt/power-local-llm/frankly-ai-review)",
            "Plataformas": "iOS, iPadOS",
            "Preço / licença": "Grátis + Pro / Código fechado",
            "Diferença principal": "Chat para iPhone com personas por tarefa e limite diário gratuito"
          }
        ],
        "note": "Os dados dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app."
      },
      "faq": {
        "id": "faq",
        "title": "Perguntas frequentes",
        "faqs": [
          {
            "q": "O Haplo AI precisa de conta?",
            "a": "Não. O site e a política do criador dizem que não há conta; as compras passam pelo seu ID Apple."
          },
          {
            "q": "O Haplo AI funciona sem internet?",
            "a": "Depois de baixado o modelo, o chat roda no aparelho. As ferramentas de busca na web, mapas e navegador precisam de conexão por natureza."
          },
          {
            "q": "A versão para Mac é o app do iPhone?",
            "a": "O guia do criador diz que é um app nativo de macOS, e não o app do iPhone rodando no Mac; exige macOS 15.0 e um chip M1 ou mais novo."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredito",
        "content": "O Haplo AI é um app de um único desenvolvedor, atualizado com frequência, que reúne modelos abertos, entrada de imagens e geração de imagens para iPhone e Mac. Seus limites são o código fechado, 76 avaliações mistas nos EUA, um preço pouco claro e ferramentas que enviam dados para fora. Serve a quem quer um assistente offline pronto; quem precisa de código aberto deve comparar o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou o [Private Mind](/pt/power-local-llm/private-mind-review)."
      },
      "sources": {
        "id": "sources",
        "title": "Fontes",
        "items": [
          "[Haplo AI na App Store](https://apps.apple.com/br/app/id6746702574) — descrição, histórico de versões, compras no app, rótulo de privacidade, requisitos e avaliações, verificados em 24 de outubro de 2026.",
          "[Página do produto Haplo AI](https://www.haploapp.com/haplo_ai) — lista de recursos e exemplos de modelos do criador.",
          "[Política de privacidade da Haplo](https://www.haploapp.com/PrivacyPolicy) — o que cada app coleta; em vigor desde 4 de outubro de 2026.",
          "[Como rodar IA offline no iPhone](https://www.haploapp.com/blog/run-ai-offline-on-iphone) — guia do criador sobre o catálogo de modelos e as ferramentas (em inglês).",
          "[Como rodar um LLM localmente no Mac](https://www.haploapp.com/blog/run-llm-locally-on-mac) — guia do criador para Mac, atualizado em 11 de outubro de 2026 (em inglês).",
          "[Dados de consulta da Apple sobre o Haplo AI](https://itunes.apple.com/lookup?id=6746702574&country=br) — vendedor, versão, datas de lançamento, sistema mínimo e preço, verificados em 24 de outubro de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leituras relacionadas",
        "items": [
          "[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat gratuito e de código aberto no aparelho para iOS e Android.",
          "[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline gratuito com licença MIT.",
          "[Análise do LM Mini](/pt/power-local-llm/lm-mini-review) — um app de chat para iPhone que também se conecta ao seu próprio servidor de modelos.",
          "[Análise do LLM Hub](/pt/power-local-llm/llm-hub-review) — um app de chat com modelos no aparelho para Android e iOS.",
          "[Os melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama mais amplo para iPhone."
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
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/haplo-ai-review-hero-ar.webp",
    "title": "مراجعة Haplo AI: تطبيق دردشة وصور دون اتصال لأجهزة iPhone وMac",
    "seoTitle": "مراجعة Haplo AI: دردشة ذكاء اصطناعي دون إنترنت لـ iPhone",
    "intro": "Haplo AI تطبيق لأجهزة iPhone وiPad وMac من شركة Haplo, LLC، وهي استوديو يديره مطوّر واحد. بحسب صفحة التطبيق في App Store وصانعه، تنزّل نماذج لغوية مفتوحة وتشغّل الدردشة وإدخال الصور وتوليدها على الجهاز دون حساب. تعتمد هذه المراجعة على صفحة المتجر وموقع الصانع وسياسة الخصوصية ودليلين من مدوّنته، وقد روجعت بتاريخ 24 أكتوبر 2026.",
    "metaDescription": "مراجعة Haplo AI: تطبيق لأجهزة iPhone وiPad وMac ينزّل نماذج مفتوحة ويشغّل الدردشة والصور على الجهاز. السعر والخصوصية وما لم يُتحقق منه بعد، كله هنا.",
    "twitterDescription": "مراجعة Haplo AI: تطبيق مغلق المصدر لأجهزة iPhone وMac يشغّل نماذج مفتوحة على الجهاز. ما تقوله صفحة المتجر والصانع وسياسة الخصوصية، وأين تتعارض المصادر.",
    "audience": "مستخدمو iPhone وMac الذين يريدون معرفة هل يعمل Haplo AI فعلًا على الجهاز، وكم يكلّف، وأي ادعاءات خصوصية تدعمها المصادر.",
    "readTime": "6 دقائق للقراءة",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Haplo AI review",
    "targetKeywords": [
      "مراجعة Haplo AI",
      "Haplo AI iPhone",
      "ذكاء اصطناعي دون اتصال iPhone",
      "دردشة ذكاء اصطناعي خاصة Mac",
      "LLM على الجهاز iOS",
      "تشغيل LLM دون اتصال iPhone",
      "Haplo AI مقابل PocketPal"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Mac"
    ],
    "leadAnswerBlock": "**Haplo AI تطبيق مغلق المصدر لأجهزة iPhone وiPad وMac ينزّل نماذج مفتوحة الأوزان، وبحسب صانعه يشغّل الدردشة وإدخال الصور وتوليدها على الجهاز دون حساب.** **السعر هو السؤال الرئيسي المفتوح: تعرض صفحة App Store سعر شراء إضافة إلى اشتراكات Premium، بينما تصفه صفحات الصانع نفسه بشكل مختلف.**",
    "quickAnswerTop": {
      "ar": {
        "question": "هل يعمل Haplo AI على جهازي؟",
        "answer": "بحسب صانعه، نعم: بعد تنزيل النموذج مرة واحدة من Hugging Face تبقى المحادثات والصور المولّدة على iPhone أو Mac. لم تختبر PromptQuorum التطبيق، وأدوات البحث في الويب والخرائط والمتصفح ترسل بيانات إلى الخارج عند تشغيلها.",
        "bullets": [
          "في [App Store](https://apps.apple.com/us/app/id6746702574)، الإصدار 2.5، لنظام iOS أو iPadOS 17.0 أو أحدث، ولنظام macOS 15.0 أو أحدث مع معالج Apple M1 أو أحدث.",
          "التكلفة: في صفحة الولايات المتحدة سعر شراء إضافة إلى اشتراك Premium اختياري؛ تتعارض المصادر، راجع قسم السعر.",
          "بحسب سياسة خصوصية الصانع، لا يتلقى أي خادم تابع لـ Haplo ما تكتبه."
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
        "label": "ما هو Haplo AI؟",
        "anchor": "what-is-haplo-ai"
      },
      {
        "label": "أين تعمل محادثاتك",
        "anchor": "where-it-runs"
      },
      {
        "label": "طريقة الحصول عليه",
        "anchor": "get-it"
      },
      {
        "label": "السعر",
        "anchor": "pricing"
      },
      {
        "label": "الميزات التي ذكرها الصانع",
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
        "label": "ما لم نستطع التحقق منه",
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
            "text": "Haplo AI تطبيق دردشة مغلق المصدر لأجهزة iPhone وiPad وMac ينزّل نماذج لغوية مفتوحة ويشغّلها على الجهاز دون اشتراط حساب."
          },
          {
            "type": "plain-terms",
            "text": "تثبّته من App Store وتنزّل نموذجًا يناسب جهازك ثم تبدأ الدردشة. ويذكر الصانع أيضًا إدخال الصور وتوليدها وأدوات اختيارية مثل البحث في الويب، وهي ترسل بيانات إلى الخارج عند تشغيلها."
          }
        ],
        "items": [
          "الصانع: Haplo, LLC، استوديو يديره مطوّر واحد وينشر التطبيقات منذ 2021؛ صدر Haplo AI في 3 يونيو 2025، وله 25 إصدارًا منذ ذلك الحين، وآخر تحديث له في 22 أكتوبر 2026.",
          "الانتشار: يعرض App Store الأمريكي 76 تقييمًا بمتوسط 3.9، منها 51 بخمس نجوم و15 بنجمة واحدة، وهي عينة صغيرة ومنقسمة.",
          "النماذج: تذكر أدلة الصانع نماذج مفتوحة مثل Qwen وPhi وMinistral وSmolLM، إضافة إلى نماذج صور Stable Diffusion ونموذج رؤية صغير.",
          "المنصات: صفحة واحدة في App Store تشمل iPhone وiPad وMac وApple Vision؛ ونسخة Mac تتطلب Apple silicon."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "تعتمد هذه المراجعة على صفحة App Store وبيانات الاستعلام من Apple وموقع الصانع وسياسة الخصوصية ودليلين من مدوّنته، وقد روجعت بتاريخ 24 أكتوبر 2026. لم يحدث استخدام عملي أو فحص للشبكة أو اختبارات أداء."
          }
        ]
      },
      "overview": {
        "id": "what-is-haplo-ai",
        "title": "ما هو Haplo AI؟",
        "content": [
          "**Haplo AI تطبيق دردشة لأجهزة iPhone وiPad وMac ينزّل نماذج لغوية مفتوحة ويشغّلها على الجهاز.** عنوانه في App Store الأمريكي «Haplo AI: Offline & Private AI»، ويسميه المتجر الألماني «Haplo KI: Private & Offline KI». ويصف الصانع Haplo, LLC نفسه بأنه استوديو يديره مطوّر واحد ويبني تطبيقات أصلية بلغة Swift لمنصات Apple.",
          "Haplo AI واحد من تسعة تطبيقات على موقع الصانع. أما Haplo AI Investing، وهو تطبيق لتحليل الأسهم من الاستوديو نفسه، فمنتج مختلف."
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "أين تعمل محادثاتك",
        "content": [
          "**يصف الصانع Haplo AI بأنه محلي: تعمل النماذج على الجهاز وتُحفظ المحادثات فيه، دون خادم تابع لـ Haplo بينهما.**"
        ],
        "items": [
          "**النماذج.** تُنزَّل مرة واحدة من Hugging Face. تصف أدلة الصانع كتالوجًا من نحو 100 MB إلى نحو 5.7 GB على iPhone، تُصفّى بحسب ذاكرة الجهاز، مع نماذج مثل Qwen وPhi-4-mini وMinistral 3 وSmolLM، وتُشغَّل كملفات GGUF بدقة 4 بت عبر llama.cpp.",
          "**نموذج Apple.** على macOS 26 أو أحدث مع تفعيل Apple Intelligence، يقول دليل Mac إن التطبيق يستطيع أيضًا استخدام نموذج Apple المدمج في الجهاز.",
          "**الصور.** يستخدم إدخال الصور نموذج رؤية صغيرًا. ويستخدم التوليد نماذج مثل Stable Diffusion 2.1 Base و1.5، وعلى الهواتف ذات ذاكرة 8 GB أو أكثر نماذج أكبر مثل Z-Image-Turbo.",
          "**ما يخرج إلى الإنترنت.** تنزيلات النماذج والأدوات المعالجة في قسم الخصوصية."
        ],
        "note": "مصدر هذه التفاصيل موقع الصانع ودليلان من مدوّنته يصفان شيفرة التطبيق؛ ولم تفتح PromptQuorum التطبيق."
      },
      "getIt": {
        "id": "get-it",
        "title": "طريقة الحصول عليه",
        "columns": [
          "المنصة",
          "مكان الحصول عليه"
        ],
        "rows": [
          {
            "المنصة": "iPhone وiPad",
            "مكان الحصول عليه": "[App Store](https://apps.apple.com/us/app/id6746702574) (iOS أو iPadOS 17.0 أو أحدث؛ صفحة واحدة موحّدة)"
          },
          {
            "المنصة": "Mac",
            "مكان الحصول عليه": "[Mac App Store](https://apps.apple.com/us/app/id6746702574) (الصفحة نفسها؛ macOS 15.0 أو أحدث ومعالج Apple M1 أو أحدث)"
          },
          {
            "المنصة": "Android وWindows",
            "مكان الحصول عليه": "لم يُعثر على نسخة"
          },
          {
            "المنصة": "الموقع",
            "مكان الحصول عليه": "[haploapp.com/haplo_ai](https://www.haploapp.com/haplo_ai) (صفحة منتج الصانع)"
          },
          {
            "المنصة": "سياسة الخصوصية",
            "مكان الحصول عليه": "[سياسة خصوصية Haplo](https://www.haploapp.com/PrivacyPolicy) (سارية منذ 4 أكتوبر 2026)"
          }
        ],
        "note": "الإصدار الذي روجع: 2.5، صدر في 22 أكتوبر 2026؛ وهو آخر تحديث للتطبيق، لذا لا ينطبق تحذير انقطاع الصيانة. تحمل المدخلات الخمس والعشرون في سجل الإصدارات الملاحظة العامة نفسها عن تحسين الميزات وإصلاح الأخطاء، فلا يمكن التمييز بين التغييرات من صفحة المتجر."
      },
      "pricing": {
        "id": "pricing",
        "title": "السعر",
        "content": [
          "**تتعارض المصادر في السعر، فراجع صفحة المتجر قبل الشراء.** تعرض صفحة الولايات المتحدة سعر شراء قدره $5.99 ومشتريات داخل التطبيق باسم Haplo AI Premium بسعر $1.99 شهريًا أو $12.99 سنويًا. ويعرض موقع الصانع فقط «$1.99/mo or $12.99/yr»، ويقول دليل Mac الصادر في 11 أكتوبر 2026 إن التطبيق مجاني التنزيل لكن المستخدمين الجدد يشتركون قبل أن يتمكنوا من الدردشة، بينما يقول وصف المتجر «No subscription required».",
          "تعرض متاجر أخرى سعر شراء أيضًا (6.99 € في ألمانيا وإسبانيا، ¥1,000 في اليابان، ₩9,900 في كوريا، R$ 39.90 في البرازيل) ومبلغين لـ Premium؛ ولم يكن التطبيق مدرجًا في المتجر الفرنسي وقت الفحص. وبحسب دليل الصانع، تغطي عملية شراء واحدة iPhone وiPad وMac."
        ]
      },
      "features": {
        "id": "key-features",
        "title": "الميزات التي ذكرها الصانع",
        "content": [
          "**كل ما يلي مصدره وصف App Store وموقع الصانع وأدلته؛ ولم يُختبر شيء منه.**"
        ],
        "items": [
          "**الدردشة والبرمجة.** ردود متدفقة، وتبديل النموذج لكل محادثة، وموجّه نظام مخصص، وإعدادات لطول الرد والإبداع، ومساعدة في البرمجة دون اتصال.",
          "**إدخال الصور.** أرفق صورة واسأل عنها؛ ويقول الصانع إنها تُقرأ على الجهاز.",
          "**توليد الصور وتحريرها.** توليد محلي للصور؛ وتصف الصفحة أيضًا التعبئة الذكية (inpainting) بقناع مرسوم.",
          "**الأدوات.** البحث في الويب والخرائط والمتصفح والتقويم والصحة والمخططات؛ وعلى Mac أو iPhone 16 Pro أو Pro Max أو أي iPhone 17 يمكن لـ Automatic Tools (مفعّلة افتراضيًا) أن تختار أداة بدلًا منك.",
          "**اللغات.** تعرض الصفحة الإنجليزية و14 لغة أخرى."
        ],
        "note": "تعلن الصفحة الرئيسية للموقع أيضًا عن توليد فيديو على الجهاز؛ ولا يصفه أي مصدر آخر."
      },
      "privacy": {
        "id": "privacy",
        "title": "سياسة الخصوصية وتدفق البيانات",
        "content": [
          "**تقول بطاقة الخصوصية في App Store «لا تُجمع بيانات»، وتقول سياسة الصانع (سارية منذ 4 أكتوبر 2026) إن Haplo AI لا يرسل إلى Haplo أي شيء عنك ولا يتضمن أي SDK للتحليلات أو الإعلانات.** تُحفظ المحادثات والصور المولّدة على الجهاز.",
          "تغادر البيانات الجهاز بثلاث طرق: تنزيلات النماذج من Hugging Face، الذي يرى عنوان IP الخاص بك لكن لا يرى ما تكتبه؛ وطلب قائمة النماذج إلى haploapp.com ويحمل نوع الجهاز وإصدار التطبيق وحجم الذاكرة؛ وأدوات البحث في الويب (DuckDuckGo وBing احتياطيًا) والخرائط (Apple) والمتصفح، وهي ترسل محتوى إلى الخارج كلما عملت، بما في ذلك عندما تشغّل Automatic Tools إحداها. ويمكن قراءة بيانات الصحة لتسأل عنها، وتقول السياسة إنها تبقى على الجهاز."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "البطاقة والسياسة كلتاهما من إفادات الصانع. التطبيق مغلق المصدر ولم تفحص PromptQuorum حركة الشبكة، فتأكد مما يغادر الجهاز قبل إرسال مدخلات حساسة إلى الأدوات."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "لمن يناسب",
        "items": [
          "**مستخدمو iPhone وMac الذين يريدون تطبيق دردشة جاهزًا يعمل دون اتصال** ودون Terminal.",
          "**من يريد الدردشة وإدخال الصور وتوليدها في تطبيق واحد.**",
          "**من يريد عملية شراء واحدة تغطي iPhone وiPad وMac.**"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "ما لم نستطع التحقق منه",
        "items": [
          "**السلوك العملي.** لم تُقَس جودة الإجابات ولا السرعة ولا الاستخدام دون اتصال ولا البطارية ولا التخزين.",
          "**السعر والاشتراك.** المصادر متعارضة (راجع السعر)؛ ولم يتأكد هل Premium مطلوب للدردشة.",
          "**قائمة النماذج.** يذكر وصف المتجر Gemma 2B وPhi-3 Mini وMistral 7B وLlama 3، بينما يذكر الموقع والأدلة نماذج أخرى؛ وتتبع هذه المراجعة أدلة الصانع.",
          "**توليد الفيديو.** معلن عنه في الصفحة الرئيسية فقط.",
          "**الشيفرة المصدرية.** التطبيق مغلق المصدر؛ ولم يُعثر على مستودع أو نص ترخيص."
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
            "التطبيق": "[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)",
            "المنصات": "iOS وAndroid",
            "السعر / الترخيص": "مجاني / MIT",
            "الفرق الرئيسي": "دردشة مفتوحة المصدر على الجهاز مع مكتبة نماذج خاصة بها"
          },
          {
            "التطبيق": "[Private Mind](/ar/power-local-llm/private-mind-review)",
            "المنصات": "iOS وAndroid",
            "السعر / الترخيص": "مجاني / MIT",
            "الفرق الرئيسي": "دردشة دون اتصال مفتوحة المصدر مع أسئلة عن المستندات على الجهاز"
          },
          {
            "التطبيق": "[LM Mini](/ar/power-local-llm/lm-mini-review)",
            "المنصات": "iOS وmacOS",
            "السعر / الترخيص": "مجاني + مشتريات / مغلق المصدر",
            "الفرق الرئيسي": "يجمع بين نماذج على الجهاز وخادم LM Studio أو Ollama الخاص بك"
          },
          {
            "التطبيق": "[Frankly AI](/ar/power-local-llm/frankly-ai-review)",
            "المنصات": "iOS وiPadOS",
            "السعر / الترخيص": "مجاني + Pro / مغلق المصدر",
            "الفرق الرئيسي": "دردشة لـ iPhone بشخصيات حسب المهمة وحد يومي مجاني"
          }
        ],
        "note": "تتغير تفاصيل المنافسين كثيرًا؛ تحقق من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق."
      },
      "faq": {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faqs": [
          {
            "q": "هل يحتاج Haplo AI إلى حساب؟",
            "a": "لا. يقول موقع الصانع وسياسته إنه لا يوجد حساب؛ وتتم المشتريات عبر Apple ID."
          },
          {
            "q": "هل يعمل Haplo AI دون إنترنت؟",
            "a": "بعد تنزيل النموذج تعمل الدردشة على الجهاز. أما أدوات البحث في الويب والخرائط والمتصفح فتحتاج إلى اتصال بحكم تصميمها."
          },
          {
            "q": "هل نسخة Mac هي تطبيق iPhone نفسه؟",
            "a": "يقول دليل الصانع إنها تطبيق macOS أصلي وليست تطبيق iPhone يعمل على Mac، وتتطلب macOS 15.0 ومعالج M1 أو أحدث."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "الخلاصة",
        "content": "Haplo AI تطبيق يحدّثه مطوّر واحد باستمرار ويجمع النماذج المفتوحة وإدخال الصور وتوليدها لأجهزة iPhone وMac. حدوده: مغلق المصدر، و76 تقييمًا أمريكيًا متباينًا، وسعر غير واضح، وأدوات ترسل بيانات إلى الخارج. يناسب من يريد مساعدًا جاهزًا يعمل دون اتصال؛ ومن يحتاج إلى مفتوح المصدر فليقارن [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Private Mind](/ar/power-local-llm/private-mind-review)."
      },
      "sources": {
        "id": "sources",
        "title": "المصادر",
        "items": [
          "[Haplo AI في App Store](https://apps.apple.com/us/app/id6746702574) — الوصف وسجل الإصدارات والمشتريات داخل التطبيق وبطاقة الخصوصية والمتطلبات والتقييمات، روجعت بتاريخ 24 أكتوبر 2026.",
          "[صفحة منتج Haplo AI](https://www.haploapp.com/haplo_ai) — قائمة ميزات الصانع وأمثلة النماذج.",
          "[سياسة خصوصية Haplo](https://www.haploapp.com/PrivacyPolicy) — ما يجمعه كل تطبيق؛ سارية منذ 4 أكتوبر 2026.",
          "[تشغيل الذكاء الاصطناعي دون اتصال على iPhone](https://www.haploapp.com/blog/run-ai-offline-on-iphone) — دليل الصانع عن كتالوج النماذج والأدوات (بالإنجليزية).",
          "[تشغيل LLM محليًا على Mac](https://www.haploapp.com/blog/run-llm-locally-on-mac) — دليل الصانع لنظام Mac، حُدّث في 11 أكتوبر 2026 (بالإنجليزية).",
          "[بيانات استعلام Apple عن Haplo AI](https://itunes.apple.com/lookup?id=6746702574&country=us) — البائع والإصدار وتواريخ الصدور والحد الأدنى للنظام والسعر، روجعت بتاريخ 24 أكتوبر 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر على الجهاز لنظامي iOS وAndroid.",
          "[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مجاني دون اتصال بترخيص MIT.",
          "[مراجعة LM Mini](/ar/power-local-llm/lm-mini-review) — تطبيق دردشة لـ iPhone يتصل أيضًا بخادم النماذج الخاص بك.",
          "[مراجعة LLM Hub](/ar/power-local-llm/llm-hub-review) — تطبيق دردشة بنماذج على الجهاز لنظامي Android وiOS.",
          "[أفضل تطبيقات LLM المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — نظرة أوسع على تطبيقات iPhone."
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
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/haplo-ai-review-hero-zh.webp",
    "title": "Haplo AI 评测：适用于 iPhone 和 Mac 的离线聊天与图像应用",
    "seoTitle": "Haplo AI 评测：iPhone 与 Mac 离线 AI 聊天",
    "intro": "Haplo AI 是 Haplo, LLC 推出的 iPhone、iPad 和 Mac 应用，该公司是一人工作室。据 App Store 页面和开发者介绍，你可以下载开放语言模型，在设备上运行聊天、图像输入和图像生成，无需账号。本评测依据商店页面、开发者网站、隐私政策以及其博客上的两篇指南，核查日期为2026年10月24日。",
    "metaDescription": "Haplo AI 评测：可下载开放模型并在设备上运行聊天与图像的 iPhone、iPad 和 Mac 应用。价格、隐私政策以及哪些说法未能核实。",
    "twitterDescription": "Haplo AI 评测：一款在设备上运行开放模型的闭源 iPhone 和 Mac 应用。商店页面、开发者和隐私政策怎么说，以及各来源在哪些地方不一致。",
    "audience": "想了解 Haplo AI 是否真的在设备上运行、费用多少、哪些隐私说法有来源支持的 iPhone 和 Mac 用户。",
    "readTime": "阅读约6分钟",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Haplo AI review",
    "targetKeywords": [
      "Haplo AI 评测",
      "Haplo AI iPhone",
      "iPhone 离线 AI",
      "Mac 私密 AI 聊天",
      "设备端 LLM iOS",
      "iPhone 离线运行 LLM",
      "Haplo AI 对比 PocketPal"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Mac"
    ],
    "leadAnswerBlock": "**Haplo AI 是一款闭源的 iPhone、iPad 和 Mac 应用，下载开放权重模型，据开发者称，聊天、图像输入和图像生成都在设备上运行，无需账号。** **价格是最大的疑问：App Store 页面显示一次性购买价加 Premium 订阅，而开发者自己的页面描述不同。**",
    "quickAnswerTop": {
      "zh": {
        "question": "Haplo AI 会在我的设备上运行吗？",
        "answer": "据开发者称会：从 Hugging Face 一次性下载模型后，聊天内容和生成的图像都留在 iPhone 或 Mac 上。PromptQuorum 没有测试该应用，而且它的网页搜索、地图和浏览器工具在运行时确实会向外发送数据。",
        "bullets": [
          "在 [App Store](https://apps.apple.com/us/app/id6746702574) 获取，版本 2.5，要求 iOS 或 iPadOS 17.0 及以上，以及搭载 Apple M1 或更新芯片的 macOS 15.0 及以上。",
          "费用：美国页面显示购买价加可选的 Premium 订阅；各来源说法不一，见“价格”。",
          "据开发者的隐私政策，没有 Haplo 服务器会收到你的提示词。"
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "快速回答",
        "anchor": "quick-answer"
      },
      {
        "label": "Haplo AI 是什么？",
        "anchor": "what-is-haplo-ai"
      },
      {
        "label": "聊天在哪里运行",
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
        "label": "适合谁用",
        "anchor": "who-should-use"
      },
      {
        "label": "我们未能核实的内容",
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
        "label": "相关阅读",
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
            "text": "Haplo AI 是一款闭源的 iPhone、iPad 和 Mac 聊天应用，下载开放语言模型并在设备上运行，无需账号。"
          },
          {
            "type": "plain-terms",
            "text": "从 App Store 安装，下载适合设备的模型即可聊天。开发者还列出了图像输入、图像生成和网页搜索等可选工具，这些工具运行时会向外发送数据。"
          }
        ],
        "items": [
          "开发者：Haplo, LLC，自2021年起发布应用的一人工作室；Haplo AI 于2025年6月3日首次发布，此后共有25个版本，最近一次更新在2026年10月22日。",
          "口碑：美国 App Store 显示76条评分，平均3.9，其中51条五星、15条一星，样本小且两极分化。",
          "模型：开发者的指南列出 Qwen、Phi、Ministral 和 SmolLM 等开放模型，以及 Stable Diffusion 图像模型和一个小型视觉模型。",
          "平台：同一个 App Store 页面涵盖 iPhone、iPad、Mac 和 Apple Vision；Mac 版需要 Apple silicon。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本评测依据 App Store 页面、苹果的查询数据、开发者网站、隐私政策和博客上的两篇指南，核查日期为2026年10月24日。未进行实际使用、网络流量检查或基准测试。"
          }
        ]
      },
      "overview": {
        "id": "what-is-haplo-ai",
        "title": "Haplo AI 是什么？",
        "content": [
          "**Haplo AI 是一款适用于 iPhone、iPad 和 Mac 的聊天应用，下载开放语言模型并在设备上运行。** 美国 App Store 中的名称是“Haplo AI: Offline & Private AI”，德国商店称其为“Haplo KI: Private & Offline KI”。开发者 Haplo, LLC 自称是一人工作室，为苹果平台开发原生 Swift 应用。",
          "Haplo AI 是开发者网站上九款应用之一。同一工作室的股票分析应用 Haplo AI Investing 是另一款产品。"
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "聊天在哪里运行",
        "content": [
          "**开发者称 Haplo AI 是本地运行的：模型在设备上运行，聊天记录也保存在设备上，中间没有 Haplo 服务器。**"
        ],
        "items": [
          "**模型。** 从 Hugging Face 一次性下载。开发者的指南描述了一个目录，在 iPhone 上大小从约100 MB到约5.7 GB，按设备内存筛选，包括 Qwen、Phi-4-mini、Ministral 3 和 SmolLM 等模型，以4位 GGUF 文件通过 llama.cpp 运行。",
          "**苹果的模型。** 在开启 Apple Intelligence 的 macOS 26 及以上版本中，Mac 版指南称应用还可以使用苹果自带的设备端模型。",
          "**图像。** 图像输入使用一个小型视觉模型。图像生成使用 Stable Diffusion 2.1 Base 和 1.5 等模型，在 8 GB 及以上内存的手机上还可使用 Z-Image-Turbo 等更大的模型。",
          "**哪些内容会联网。** 模型下载，以及隐私部分说明的工具。"
        ],
        "note": "这些细节来自开发者网站和两篇描述应用代码的博客指南；PromptQuorum 没有打开该应用。"
      },
      "getIt": {
        "id": "get-it",
        "title": "获取方式",
        "columns": [
          "平台",
          "获取途径"
        ],
        "rows": [
          {
            "平台": "iPhone 和 iPad",
            "获取途径": "[App Store](https://apps.apple.com/us/app/id6746702574)（iOS 或 iPadOS 17.0 及以上；同一通用页面）"
          },
          {
            "平台": "Mac",
            "获取途径": "[Mac App Store](https://apps.apple.com/us/app/id6746702574)（同一页面；macOS 15.0 及以上，Apple M1 或更新芯片）"
          },
          {
            "平台": "Android 和 Windows",
            "获取途径": "未找到版本"
          },
          {
            "平台": "网站",
            "获取途径": "[haploapp.com/haplo_ai](https://www.haploapp.com/haplo_ai)（开发者的产品页）"
          },
          {
            "平台": "隐私政策",
            "获取途径": "[Haplo 隐私政策](https://www.haploapp.com/PrivacyPolicy)（2026年10月4日生效）"
          }
        ],
        "note": "评测版本：2.5，发布于2026年10月22日；这是应用的最新更新，因此不适用停止维护警告。版本历史中的25条记录都使用同一句关于功能改进和错误修复的通用说明，因此无法从商店页面区分各版本的变化。"
      },
      "pricing": {
        "id": "pricing",
        "title": "价格",
        "content": [
          "**各来源对价格说法不一，购买前请先查看商店页面。** 美国页面显示购买价 $5.99，另有名为 Haplo AI Premium 的内购项目，每月 $1.99 或每年 $12.99。开发者网站只写了“$1.99/mo or $12.99/yr”，其2026年10月11日的 Mac 指南称应用可免费下载，但新用户需先订阅才能聊天，而商店描述写的是“No subscription required”。",
          "其他地区商店也标有购买价（德国和西班牙 €6.99，日本 ¥1,000，韩国 ₩9,900，巴西 R$ 39.90）以及两个 Premium 金额；核查时法国商店未上架该应用。据开发者的指南，一次购买即覆盖 iPhone、iPad 和 Mac。"
        ]
      },
      "features": {
        "id": "key-features",
        "title": "开发者列出的功能",
        "content": [
          "**以下内容全部来自 App Store 描述、开发者网站及其指南，均未经测试。**"
        ],
        "items": [
          "**聊天与代码。** 流式回答、按对话切换模型、自定义系统提示词、回复长度和创意程度设置，以及离线代码辅助。",
          "**图像输入。** 附上照片并提问；开发者称照片在设备上读取。",
          "**图像生成与编辑。** 在本地生成图像；页面还描述了用手绘遮罩进行局部重绘（inpainting）。",
          "**工具。** 网页搜索、地图、浏览器、日历、健康和图表；在 Mac、iPhone 16 Pro 或 Pro Max 以及任何 iPhone 17 上，“Automatic Tools”（默认开启）可以替你选用某个工具。",
          "**语言。** 页面显示英语及另外14种语言。"
        ],
        "note": "网站首页还宣传设备端视频生成，但没有其他来源对此作出说明。"
      },
      "privacy": {
        "id": "privacy",
        "title": "隐私政策与数据流向",
        "content": [
          "**App Store 隐私标签写的是“未收集数据”，开发者的政策（2026年10月4日生效）称 Haplo AI 不会向 Haplo 发送任何关于你的信息，也不含分析或广告 SDK。** 聊天内容和生成的图像保存在设备上。",
          "数据会通过三种途径离开设备：从 Hugging Face 下载模型，它能看到你的 IP 地址但看不到提示词；向 haploapp.com 请求模型列表，其中包含设备类型、应用版本和内存大小；以及网页搜索（DuckDuckGo，失败时用 Bing）、地图（苹果）和浏览器工具，每次运行都会向外发送内容，包括由 Automatic Tools 自动启动时。应用可以读取健康数据以便你就此提问，政策称这些数据留在设备上。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "标签和政策都是开发者自己的说明。应用是闭源的，PromptQuorum 没有检查网络流量，因此在向工具发送敏感提示词之前，请先确认哪些内容会离开设备。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "适合谁用",
        "items": [
          "**想要开箱即用的离线聊天应用的 iPhone 和 Mac 用户**，无需使用终端。",
          "**希望在一个应用里完成聊天、图像输入和图像生成的人。**",
          "**希望一次购买即覆盖 iPhone、iPad 和 Mac 的用户。**"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "我们未能核实的内容",
        "items": [
          "**实际表现。** 未测量回答质量、速度、离线使用、电量和存储占用。",
          "**价格与订阅。** 各来源互相矛盾（见“价格”）；未能确认聊天是否必须订阅 Premium。",
          "**模型列表。** 商店描述列出 Gemma 2B、Phi-3 Mini、Mistral 7B 和 Llama 3，而网站和指南列出的是其他模型；本评测以开发者的指南为准。",
          "**视频生成。** 仅在首页宣传。",
          "**源代码。** 应用是闭源的；未找到代码仓库或许可证文本。"
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
            "应用": "[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)",
            "平台": "iOS、Android",
            "价格 / 许可证": "免费 / MIT",
            "主要区别": "开源的设备端聊天，自带模型库"
          },
          {
            "应用": "[Private Mind](/zh/power-local-llm/private-mind-review)",
            "平台": "iOS、Android",
            "价格 / 许可证": "免费 / MIT",
            "主要区别": "开源的离线聊天，支持设备端文档问答"
          },
          {
            "应用": "[LM Mini](/zh/power-local-llm/lm-mini-review)",
            "平台": "iOS、macOS",
            "价格 / 许可证": "免费 + 内购 / 闭源",
            "主要区别": "把设备端模型与你自己的 LM Studio 或 Ollama 服务器结合"
          },
          {
            "应用": "[Frankly AI](/zh/power-local-llm/frankly-ai-review)",
            "平台": "iOS、iPadOS",
            "价格 / 许可证": "免费 + Pro / 闭源",
            "主要区别": "带任务角色和每日免费额度的 iPhone 聊天"
          }
        ],
        "note": "竞品信息变化频繁；请在各应用自己的商店页面确认当前价格、许可证和平台。"
      },
      "faq": {
        "id": "faq",
        "title": "常见问题",
        "faqs": [
          {
            "q": "Haplo AI 需要账号吗？",
            "a": "不需要。开发者的网站和政策都说没有账号；购买通过你的 Apple ID 完成。"
          },
          {
            "q": "Haplo AI 没有网络也能用吗？",
            "a": "模型下载完成后，聊天在设备上运行。网页搜索、地图和浏览器工具按设计需要联网。"
          },
          {
            "q": "Mac 版就是 iPhone 应用吗？",
            "a": "开发者的指南称它是原生 macOS 应用，而不是在 Mac 上运行的 iPhone 应用，要求 macOS 15.0 和 M1 或更新的芯片。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "结论",
        "content": "Haplo AI 是一人开发、更新频繁的应用，把开放模型、图像输入和图像生成集中到 iPhone 和 Mac 上。它的局限是闭源、美国76条评分褒贬不一、价格不清晰，以及会向外发送数据的工具。适合想要现成离线助手的读者；需要开源的人应对比 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 或 [Private Mind](/zh/power-local-llm/private-mind-review)。"
      },
      "sources": {
        "id": "sources",
        "title": "来源",
        "items": [
          "[App Store 上的 Haplo AI](https://apps.apple.com/us/app/id6746702574) — 描述、版本历史、内购、隐私标签、系统要求和评分，核查于2026年10月24日。",
          "[Haplo AI 产品页](https://www.haploapp.com/haplo_ai) — 开发者的功能列表和模型示例。",
          "[Haplo 隐私政策](https://www.haploapp.com/PrivacyPolicy) — 各应用收集的信息；2026年10月4日生效。",
          "[如何在 iPhone 上离线运行 AI](https://www.haploapp.com/blog/run-ai-offline-on-iphone) — 开发者关于模型目录和工具的指南（英文）。",
          "[如何在 Mac 上本地运行 LLM](https://www.haploapp.com/blog/run-llm-locally-on-mac) — 开发者的 Mac 指南，更新于2026年10月11日（英文）。",
          "[苹果提供的 Haplo AI 查询数据](https://itunes.apple.com/lookup?id=6746702574&country=us) — 卖家、版本、发布日期、最低系统和价格，核查于2026年10月24日。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "相关阅读",
        "items": [
          "[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 适用于 iOS 和 Android 的免费开源设备端聊天客户端。",
          "[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 采用 MIT 许可证的免费离线聊天应用。",
          "[LM Mini 评测](/zh/power-local-llm/lm-mini-review) — 也能连接你自己的模型服务器的 iPhone 聊天应用。",
          "[LLM Hub 评测](/zh/power-local-llm/llm-hub-review) — 适用于 Android 和 iOS 的设备端聊天应用。",
          "[2026年 iPhone 最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 范围更广的 iPhone 应用汇总。"
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
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/haplo-ai-review-hero-ko.webp",
    "title": "Haplo AI 리뷰: iPhone·Mac용 오프라인 채팅·이미지 앱",
    "seoTitle": "Haplo AI 리뷰: iPhone·Mac 오프라인 AI 채팅",
    "intro": "Haplo AI는 1인 개발 스튜디오 Haplo, LLC가 만든 iPhone·iPad·Mac용 앱입니다. App Store 정보와 개발사에 따르면 오픈 언어 모델을 내려받아 채팅, 이미지 입력, 이미지 생성을 계정 없이 기기에서 실행합니다. 이 리뷰는 스토어 페이지, 개발사 웹사이트, 개인정보 처리방침, 블로그의 안내 글 두 편을 2026년 10월 24일에 확인한 내용을 바탕으로 합니다.",
    "metaDescription": "Haplo AI 리뷰: 오픈 모델을 내려받아 채팅과 이미지를 기기에서 실행하는 iPhone·iPad·Mac 앱. 가격, 개인정보, 확인하지 못한 점.",
    "twitterDescription": "Haplo AI 리뷰: 오픈 모델을 기기에서 실행하는 클로즈드 소스 iPhone·Mac 앱. 스토어 페이지, 개발사, 개인정보 처리방침의 설명과 출처 간 불일치를 정리합니다.",
    "audience": "Haplo AI가 정말 기기에서 실행되는지, 비용은 얼마인지, 어떤 개인정보 주장이 출처로 뒷받침되는지 알고 싶은 iPhone·Mac 사용자를 위한 글입니다.",
    "readTime": "6분 읽기",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Haplo AI review",
    "targetKeywords": [
      "Haplo AI 리뷰",
      "Haplo AI iPhone",
      "iPhone 오프라인 AI",
      "Mac 프라이빗 AI 채팅",
      "온디바이스 LLM iOS",
      "iPhone LLM 오프라인 실행",
      "Haplo AI PocketPal 비교"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Mac"
    ],
    "leadAnswerBlock": "**Haplo AI는 클로즈드 소스 iPhone·iPad·Mac 앱으로, 오픈 웨이트 모델을 내려받아 개발사 설명에 따르면 채팅, 이미지 입력, 이미지 생성을 계정 없이 기기에서 실행합니다.** **가장 큰 의문은 가격입니다. App Store 페이지에는 구매 가격과 Premium 구독이 함께 표시되지만, 개발사 자신의 페이지는 다르게 설명합니다.**",
    "quickAnswerTop": {
      "ko": {
        "question": "Haplo AI는 내 기기에서 실행되나요?",
        "answer": "개발사에 따르면 그렇습니다. Hugging Face에서 모델을 한 번 내려받은 뒤에는 채팅과 생성된 이미지가 iPhone이나 Mac에 남습니다. PromptQuorum은 앱을 테스트하지 않았으며, 웹 검색·지도·브라우저 도구는 실행될 때 데이터를 외부로 보냅니다.",
        "bullets": [
          "[App Store](https://apps.apple.com/kr/app/id6746702574)에서 받을 수 있으며 버전은 2.5, iOS·iPadOS 17.0 이상, Apple M1 이상 칩을 탑재한 macOS 15.0 이상이 필요합니다.",
          "비용: 미국 페이지에는 구매 가격과 선택형 Premium 구독이 표시됩니다. 출처마다 설명이 달라 '가격'을 참고하세요.",
          "개발사의 개인정보 처리방침에 따르면 어떤 Haplo 서버도 프롬프트를 받지 않습니다."
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
        "label": "Haplo AI란 무엇인가",
        "anchor": "what-is-haplo-ai"
      },
      {
        "label": "채팅은 어디에서 실행되나",
        "anchor": "where-it-runs"
      },
      {
        "label": "구하는 방법",
        "anchor": "get-it"
      },
      {
        "label": "가격",
        "anchor": "pricing"
      },
      {
        "label": "개발사가 밝힌 기능",
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
        "label": "확인하지 못한 점",
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
        "label": "관련 글",
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
            "text": "Haplo AI는 오픈 언어 모델을 내려받아 계정 없이 기기에서 실행하는 클로즈드 소스 iPhone·iPad·Mac 채팅 앱입니다."
          },
          {
            "type": "plain-terms",
            "text": "App Store에서 설치하고, 기기에 맞는 모델을 내려받아 채팅합니다. 개발사는 이미지 입력, 이미지 생성, 웹 검색 같은 선택 도구도 밝히는데, 이 도구는 실행될 때 데이터를 외부로 보냅니다."
          }
        ],
        "items": [
          "개발사: 2021년부터 앱을 내놓은 1인 스튜디오 Haplo, LLC. Haplo AI는 2025년 6월 3일에 처음 출시되었고 이후 25개 버전이 나왔으며 마지막 업데이트는 2026년 10월 22일입니다.",
          "평가 규모: 미국 App Store의 평점은 76건에 평균 3.9이며 5점 51건, 1점 15건으로 표본이 작고 의견이 갈립니다.",
          "모델: 개발사 안내 글에는 Qwen, Phi, Ministral, SmolLM 같은 오픈 모델과 Stable Diffusion 이미지 모델, 작은 비전 모델이 나옵니다.",
          "플랫폼: 하나의 App Store 페이지가 iPhone, iPad, Mac, Apple Vision을 모두 다루며 Mac 버전에는 Apple silicon이 필요합니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이 리뷰는 App Store 페이지, Apple 조회 데이터, 개발사 웹사이트와 개인정보 처리방침, 블로그 안내 글 두 편을 2026년 10월 24일에 확인한 내용을 바탕으로 합니다. 실제 사용, 네트워크 검사, 벤치마크는 하지 않았습니다."
          }
        ]
      },
      "overview": {
        "id": "what-is-haplo-ai",
        "title": "Haplo AI란 무엇인가",
        "content": [
          "**Haplo AI는 오픈 언어 모델을 내려받아 기기에서 실행하는 iPhone·iPad·Mac용 채팅 앱입니다.** 미국 App Store 제목은 'Haplo AI: Offline & Private AI'이고 한국 스토어에서는 'Haplo AI: 오프라인·개인 AI'입니다. 개발사 Haplo, LLC는 Apple 플랫폼용 네이티브 Swift 앱을 만드는 1인 스튜디오라고 소개합니다.",
          "Haplo AI는 개발사 사이트에 소개된 앱 아홉 개 중 하나입니다. 같은 스튜디오의 주식 분석 앱 Haplo AI Investing은 별개의 제품입니다."
        ]
      },
      "whereItRuns": {
        "id": "where-it-runs",
        "title": "채팅은 어디에서 실행되나",
        "content": [
          "**개발사는 Haplo AI를 로컬 방식이라고 설명합니다. 모델은 기기에서 실행되고 채팅도 기기에 저장되며 중간에 Haplo 서버는 없습니다.**"
        ],
        "items": [
          "**모델.** Hugging Face에서 한 번 내려받습니다. 개발사 안내 글은 iPhone에서 약 100 MB부터 약 5.7 GB까지의 카탈로그를 기기 메모리에 맞춰 걸러 보여 주며, Qwen, Phi-4-mini, Ministral 3, SmolLM 같은 모델을 4비트 GGUF 파일로 llama.cpp에서 실행한다고 설명합니다.",
          "**Apple의 모델.** Apple Intelligence를 켠 macOS 26 이상에서는 Mac 안내 글에 따르면 Apple의 온디바이스 모델도 사용할 수 있습니다.",
          "**이미지.** 이미지 입력은 작은 비전 모델을 사용합니다. 이미지 생성은 Stable Diffusion 2.1 Base와 1.5 같은 모델을 쓰며, RAM 8 GB 이상 휴대폰에서는 Z-Image-Turbo 같은 더 큰 모델도 씁니다.",
          "**인터넷으로 나가는 것.** 모델 다운로드와 개인정보 항목에서 다루는 도구입니다."
        ],
        "note": "이 내용은 개발사 사이트와 앱의 코드를 설명하는 블로그 안내 글 두 편에서 가져왔으며, PromptQuorum은 앱을 열어 보지 않았습니다."
      },
      "getIt": {
        "id": "get-it",
        "title": "구하는 방법",
        "columns": [
          "플랫폼",
          "받는 곳"
        ],
        "rows": [
          {
            "플랫폼": "iPhone·iPad",
            "받는 곳": "[App Store](https://apps.apple.com/kr/app/id6746702574) (iOS·iPadOS 17.0 이상, 통합 페이지 하나)"
          },
          {
            "플랫폼": "Mac",
            "받는 곳": "[Mac App Store](https://apps.apple.com/kr/app/id6746702574) (같은 페이지, macOS 15.0 이상, Apple M1 이상 칩)"
          },
          {
            "플랫폼": "Android·Windows",
            "받는 곳": "빌드를 찾지 못했습니다"
          },
          {
            "플랫폼": "웹사이트",
            "받는 곳": "[haploapp.com/haplo_ai](https://www.haploapp.com/haplo_ai) (개발사의 제품 페이지)"
          },
          {
            "플랫폼": "개인정보 처리방침",
            "받는 곳": "[Haplo 개인정보 처리방침](https://www.haploapp.com/PrivacyPolicy) (2026년 10월 4일 시행)"
          }
        ],
        "note": "확인한 버전: 2026년 10월 22일에 출시된 2.5입니다. 앱의 최신 업데이트이므로 유지 관리 중단 경고는 적용되지 않습니다. 버전 기록 25건 모두 기능 개선과 버그 수정이라는 같은 일반 문구만 달려 있어 스토어 페이지로는 변경점을 구분할 수 없습니다."
      },
      "pricing": {
        "id": "pricing",
        "title": "가격",
        "content": [
          "**가격은 출처마다 설명이 달라 구매 전에 스토어 페이지를 확인해야 합니다.** 미국 페이지에는 구매 가격 $5.99와 Haplo AI Premium이라는 앱 내 구입(월 $1.99 또는 연 $12.99)이 표시됩니다. 개발사 사이트는 '$1.99/mo or $12.99/yr'만 보여 주고, 2026년 10월 11일자 Mac 안내 글은 앱을 무료로 내려받을 수 있지만 신규 사용자는 채팅 전에 구독해야 한다고 하며, 스토어 설명에는 'No subscription required'라고 적혀 있습니다.",
          "다른 국가 스토어에도 구매 가격이 있고(독일·스페인 6,99 €, 일본 ¥1,000, 한국 ₩9,900, 브라질 R$ 39,90) Premium 금액도 두 가지 표시됩니다. 확인 시점에 프랑스 스토어에는 앱이 올라 있지 않았습니다. 개발사 안내 글에 따르면 한 번의 구매로 iPhone, iPad, Mac을 모두 쓸 수 있습니다."
        ]
      },
      "features": {
        "id": "key-features",
        "title": "개발사가 밝힌 기능",
        "content": [
          "**아래 내용은 모두 App Store 설명, 개발사 사이트와 안내 글에서 가져온 것이며 테스트한 것은 없습니다.**"
        ],
        "items": [
          "**채팅과 코드.** 스트리밍 답변, 대화별 모델 전환, 사용자 지정 시스템 프롬프트, 답변 길이와 창의성 설정, 오프라인 코드 도움.",
          "**이미지 입력.** 사진을 첨부해 질문할 수 있으며 개발사는 사진이 기기에서 읽힌다고 합니다.",
          "**이미지 생성과 편집.** 이미지를 기기에서 생성하며, 스토어 설명에는 직접 그린 마스크로 하는 인페인팅도 나옵니다.",
          "**도구.** 웹 검색, 지도, 브라우저, 캘린더, 건강, 차트. Mac, iPhone 16 Pro·Pro Max, 모든 iPhone 17에서는 'Automatic Tools'(기본 켜짐)가 도구를 대신 고를 수 있습니다.",
          "**언어.** 스토어 페이지에는 영어와 14개 언어가 표시됩니다."
        ],
        "note": "사이트 첫 화면은 기기 내 동영상 생성도 내세우지만 이를 설명하는 다른 출처는 없습니다."
      },
      "privacy": {
        "id": "privacy",
        "title": "개인정보 처리방침과 데이터 흐름",
        "content": [
          "**App Store 개인정보 라벨은 '데이터 수집 없음'이며, 개발사 방침(2026년 10월 4일 시행)은 Haplo AI가 Haplo에 사용자에 관한 정보를 보내지 않고 분석·광고 SDK도 없다고 밝힙니다.** 채팅과 생성된 이미지는 기기에 저장됩니다.",
          "데이터가 기기를 떠나는 경로는 세 가지입니다. Hugging Face에서 받는 모델 다운로드(IP 주소는 보이지만 프롬프트는 보이지 않음), 기기 종류·앱 버전·메모리 크기를 담아 haploapp.com에 보내는 모델 목록 요청, 그리고 웹 검색(DuckDuckGo, 실패 시 Bing), 지도(Apple), 브라우저 도구입니다. 이 도구들은 Automatic Tools가 실행하는 경우를 포함해 실행될 때마다 내용을 외부로 보냅니다. 건강 데이터는 질문을 위해 읽을 수 있으며 방침에 따르면 기기에 남습니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "라벨과 방침 모두 개발사 자신의 진술입니다. 앱은 클로즈드 소스이고 PromptQuorum은 네트워크 트래픽을 검사하지 않았으므로, 민감한 프롬프트를 도구에 보내기 전에 무엇이 기기를 떠나는지 확인하세요."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "이런 분께 적합합니다",
        "items": [
          "**바로 쓸 수 있는 오프라인 채팅 앱을 원하는 iPhone·Mac 사용자**(터미널 불필요).",
          "**채팅, 이미지 입력, 이미지 생성을 한 앱에서 쓰고 싶은 사람.**",
          "**한 번의 구매로 iPhone, iPad, Mac을 모두 쓰고 싶은 사용자.**"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "확인하지 못한 점",
        "items": [
          "**실제 동작.** 답변 품질, 속도, 오프라인 사용, 배터리, 저장 공간은 측정하지 않았습니다.",
          "**가격과 구독.** 출처가 서로 어긋나며('가격' 참고), 채팅에 Premium이 필요한지는 확인하지 못했습니다.",
          "**모델 목록.** 스토어 설명은 Gemma 2B, Phi-3 Mini, Mistral 7B, Llama 3을 언급하고 사이트와 안내 글은 다른 모델을 언급합니다. 이 리뷰는 개발사의 안내 글을 따랐습니다.",
          "**동영상 생성.** 첫 화면에서만 홍보됩니다.",
          "**소스 코드.** 앱은 클로즈드 소스이며 저장소나 라이선스 문서를 찾지 못했습니다."
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
            "앱": "[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)",
            "플랫폼": "iOS, Android",
            "가격 / 라이선스": "무료 / MIT",
            "핵심 차이": "자체 모델 라이브러리를 갖춘 오픈소스 온디바이스 채팅"
          },
          {
            "앱": "[Private Mind](/ko/power-local-llm/private-mind-review)",
            "플랫폼": "iOS, Android",
            "가격 / 라이선스": "무료 / MIT",
            "핵심 차이": "기기 내 문서 질의응답을 갖춘 오픈소스 오프라인 채팅"
          },
          {
            "앱": "[LM Mini](/ko/power-local-llm/lm-mini-review)",
            "플랫폼": "iOS, macOS",
            "가격 / 라이선스": "무료 + 구매 / 클로즈드 소스",
            "핵심 차이": "기기 내 모델과 직접 운영하는 LM Studio·Ollama 서버를 함께 사용"
          },
          {
            "앱": "[Frankly AI](/ko/power-local-llm/frankly-ai-review)",
            "플랫폼": "iOS, iPadOS",
            "가격 / 라이선스": "무료 + Pro / 클로즈드 소스",
            "핵심 차이": "작업별 페르소나와 일일 무료 한도가 있는 iPhone 채팅"
          }
        ],
        "note": "경쟁 앱 정보는 자주 바뀌므로 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 스토어 페이지에서 확인하세요."
      },
      "faq": {
        "id": "faq",
        "title": "자주 묻는 질문",
        "faqs": [
          {
            "q": "Haplo AI에 계정이 필요한가요?",
            "a": "아니요. 개발사 사이트와 방침은 계정이 없다고 밝힙니다. 구매는 Apple ID로 이루어집니다."
          },
          {
            "q": "Haplo AI는 인터넷 없이 작동하나요?",
            "a": "모델을 내려받은 뒤에는 채팅이 기기에서 실행됩니다. 웹 검색, 지도, 브라우저 도구는 구조상 연결이 필요합니다."
          },
          {
            "q": "Mac 버전은 iPhone 앱 그대로인가요?",
            "a": "개발사 안내 글에 따르면 Mac에서 iPhone 앱을 돌리는 것이 아니라 네이티브 macOS 앱이며, macOS 15.0과 M1 이상 칩이 필요합니다."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "결론",
        "content": "Haplo AI는 한 명의 개발자가 꾸준히 업데이트하는 앱으로, 오픈 모델, 이미지 입력, 이미지 생성을 iPhone과 Mac에 묶어 줍니다. 한계는 클로즈드 소스, 엇갈리는 미국 평점 76건, 불분명한 가격, 데이터를 외부로 보내는 도구입니다. 바로 쓸 수 있는 오프라인 어시스턴트를 원하는 독자에게 맞고, 오픈소스가 필요하다면 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Private Mind](/ko/power-local-llm/private-mind-review)를 비교해 보세요."
      },
      "sources": {
        "id": "sources",
        "title": "출처",
        "items": [
          "[App Store의 Haplo AI](https://apps.apple.com/kr/app/id6746702574) — 설명, 버전 기록, 앱 내 구입, 개인정보 라벨, 요구 사항, 평점. 2026년 10월 24일 확인.",
          "[Haplo AI 제품 페이지](https://www.haploapp.com/haplo_ai) — 개발사의 기능 목록과 모델 예시.",
          "[Haplo 개인정보 처리방침](https://www.haploapp.com/PrivacyPolicy) — 각 앱이 수집하는 정보. 2026년 10월 4일 시행.",
          "[iPhone에서 AI를 오프라인으로 실행하는 방법](https://www.haploapp.com/blog/run-ai-offline-on-iphone) — 개발사의 모델 카탈로그·도구 안내 글(영어).",
          "[Mac에서 LLM을 로컬로 실행하는 방법](https://www.haploapp.com/blog/run-llm-locally-on-mac) — 개발사의 Mac 안내 글, 2026년 10월 11일 업데이트(영어).",
          "[Haplo AI의 Apple 조회 데이터](https://itunes.apple.com/lookup?id=6746702574&country=kr) — 판매자, 버전, 출시일, 최소 OS, 가격. 2026년 10월 24일 확인."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "관련 글",
        "items": [
          "[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 Android용 무료 오픈소스 온디바이스 채팅 클라이언트.",
          "[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — MIT 라이선스의 무료 오프라인 채팅 앱.",
          "[LM Mini 리뷰](/ko/power-local-llm/lm-mini-review) — 직접 운영하는 모델 서버에도 연결되는 iPhone 채팅 앱.",
          "[LLM Hub 리뷰](/ko/power-local-llm/llm-hub-review) — Android와 iOS용 온디바이스 채팅 앱.",
          "[2026년 iPhone 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone용 앱을 폭넓게 비교한 글."
        ]
      }
    }
  },
}

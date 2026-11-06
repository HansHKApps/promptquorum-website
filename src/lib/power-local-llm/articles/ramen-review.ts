// RAMen Review: Local Session Memory for llama.cpp, With a Free Plan
// Slug: ramen-review
// Companion to: llama-cpp-explained, ollama-review, koboldcpp-review
// Sources: getramenai.com (home, how-it-works, privacy policy, license agreement, install scripts), github.com/MatthewLeibel/ramen-releases (Release v1.0.0 of 2026-11-06),
// all checked 2026-11-06 — no hands-on testing.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Overview & Reference",
    "heroImage": "/images/ramen-review-hero-en.webp",
    "title": "RAMen Review: Local Session Memory for llama.cpp, With a Free Plan",
    "seoTitle": "RAMen Review: Local AI Session Memory and Long Chats",
    "intro": "RAMen is a proprietary command-line layer from NEOTECH Inc. that runs local models through its own build of llama.cpp, saves every chat and agent session to disk so it reopens in seconds after a restart, and says it keeps long conversations fast. It runs on Apple-silicon Macs, Windows 10 and 11 and Linux, exposes an OpenAI-compatible API, and has a free plan. This review covers what you install, what it costs, where your data goes and which claims rest only on the maker's own measurements.",
    "metaDescription": "RAMen review: proprietary llama.cpp session memory for Mac, Windows and Linux, with a free plan and a claimed long-chat speedup. Install, pricing, privacy.",
    "twitterDescription": "RAMen review: a local llama.cpp layer that saves every chat to disk and, the maker says, speeds up long chats, with a free plan. What the maker's pages confirm and what is untested.",
    "audience": "People who run local models for long chats or coding agents and want to know what RAMen installs, costs and sends over the network, and which speed claims are the maker's own.",
    "readTime": "6 min read",
    "educationalLevel": "Intermediate",
    "affiliateDisclosure": false,
    "primaryTerm": "RAMen review",
    "targetKeywords": [
      "ramen local ai review",
      "ramen llama.cpp",
      "local llm session memory",
      "llama.cpp kv cache save restore",
      "local ai long chat speed",
      "getramenai",
      "ramen openai compatible api"
    ],
    "current_models_mentioned": [
      "Qwen3"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "NVIDIA RTX GPU",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**RAMen (version 1.0.0, released on 6 November 2026) is a proprietary local layer on top of llama.cpp that saves each chat to disk so that, the maker says, it reopens in seconds, with a free plan and paid tiers.** The decisive caveat is that every speed figure comes from the maker's own tests and PromptQuorum has not run the software.",
    "quickAnswerTop": {
      "en": {
        "question": "Does RAMen run the model on my own computer?",
        "answer": "Yes, per the maker: RAMen starts a bundled llama.cpp server on your machine, and its pages say prompts, files and sessions never leave it. The sources name three network uses: the install download, model downloads from Hugging Face and, on paid plans, a license check.",
        "bullets": [
          "It speaks the OpenAI API, and `ramen connect` configures Cline, Continue, Aider, OpenCode and Open WebUI for you.",
          "You can bring any GGUF model, or let `ramen start` pick one that fits your computer and download it.",
          "The long-chat speedup needs an NVIDIA RTX 20-series card or newer, or an Apple-silicon Mac; session saving works on any supported machine."
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "Quick Answer",
        "anchor": "quick-answer"
      },
      {
        "label": "What Is RAMen?",
        "anchor": "what-is-ramen"
      },
      {
        "label": "Get It",
        "anchor": "get-it"
      },
      {
        "label": "Requirements",
        "anchor": "requirements"
      },
      {
        "label": "How to Get Started",
        "anchor": "getting-started"
      },
      {
        "label": "Features Confirmed by the Sources",
        "anchor": "key-features"
      },
      {
        "label": "Plans and Pricing",
        "anchor": "pricing"
      },
      {
        "label": "Data Flow and Privacy",
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
            "text": "RAMen is a proprietary command-line layer on llama.cpp that saves local AI chats to disk and, the maker says, speeds up long conversations, with a free plan."
          },
          {
            "type": "plain-terms",
            "text": "You install one command, start it, and point your coding agent or chat app at it; RAMen remembers each conversation so you do not wait for the model to re-read it after a restart."
          }
        ],
        "items": [
          "Maintenance: version 1.0.0 was published on 6 November 2026, the day of this review, so no stale-project warning applies and the product has no track record yet.",
          "Cost: a free plan with limited memory, plus paid subscriptions and a launch lifetime offer.",
          "Install: a terminal one-liner on every system; there is no double-click installer and no app-store listing.",
          "Data: the maker says nothing leaves your machine except the install, model downloads and the paid-plan license check."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "This review is based on getramenai.com, its privacy policy and license agreement, the install scripts and the GitHub release data, checked on 6 November 2026. PromptQuorum has not installed, run or benchmarked RAMen, so speed, stability and answer quality are not assessed."
          }
        ]
      },
      "overview": {
        "id": "what-is-ramen",
        "title": "What Is RAMen?",
        "content": [
          "**RAMen is a local-AI session manager made by NEOTECH Inc. that sits in front of llama.cpp, the open-source engine most local-model tools run on.** It ships its own build of llama.cpp (MIT license) with two additions: it saves the model's working memory (the KV cache) for each conversation to disk and restores it when the conversation continues, and it reads only the parts of a long conversation that matter for each new word.",
          "The maker's how-it-works page notes that llama.cpp already has slot save and restore and that small tools automate it; RAMen's claim is to do it for every session automatically, with checks that a saved cache matches the model and settings. The software is closed source under a proprietary license agreement; the public GitHub repository only hosts the download packages."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Get It",
        "content": [
          "**RAMen installs from the terminal with one command per system; the packages are hosted on GitHub Releases, and there is no graphical installer.**"
        ],
        "columns": [
          "Option",
          "How to get it"
        ],
        "rows": [
          {
            "Option": "Mac (Apple silicon)",
            "How to get it": "Terminal: `curl -fsSL https://getramenai.com/install.sh | bash`"
          },
          {
            "Option": "Linux (x64)",
            "How to get it": "Same command; picks the NVIDIA build when `nvidia-smi` works, otherwise the CPU build"
          },
          {
            "Option": "Windows 10/11 (x64)",
            "How to get it": "PowerShell: `irm https://getramenai.com/install.ps1 | iex`"
          },
          {
            "Option": "Manual download",
            "How to get it": "[RAMen releases on GitHub](https://github.com/MatthewLeibel/ramen-releases/releases/latest), .tar.gz or .zip with .sha256 checksums"
          },
          {
            "Option": "Phone",
            "How to get it": "No iPhone or Android app is mentioned"
          },
          {
            "Option": "Website",
            "How to get it": "[getramenai.com](https://getramenai.com)"
          },
          {
            "Option": "Privacy policy",
            "How to get it": "[RAMen privacy policy](https://getramenai.com/privacy.html); [License agreement](https://getramenai.com/terms.html)"
          }
        ],
        "note": "Version reviewed: 1.0.0 (6 November 2026). A terminal is required: after the install, `ramen start` downloads a model if you have none and starts RAMen in the background. The installer adds `~/.ramen/bin` to your shell PATH and keeps saved chats in `~/.context-engine`; `rm -rf ~/.ramen` removes the program."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requirements",
        "content": [
          "**The maker states no minimum RAM, disk or OS-version figures; the page says only that you need a computer that runs llama.cpp.**"
        ],
        "columns": [
          "Item",
          "What the sources say"
        ],
        "rows": [
          {
            "Item": "Mac",
            "What the sources say": "Apple silicon (M1 or newer) only; the installer refuses Intel Macs"
          },
          {
            "Item": "Windows",
            "What the sources say": "Windows 10 and 11, 64-bit; CPU build, with an NVIDIA build when an NVIDIA GPU is detected"
          },
          {
            "Item": "Linux",
            "What the sources say": "x64 only, CPU or NVIDIA build; the installer refuses ARM Linux for now"
          },
          {
            "Item": "Long-chat speedup",
            "What the sources say": "Needs an NVIDIA RTX 20-series card or newer, or an Apple-silicon Mac; it is not claimed for CPU-only machines"
          },
          {
            "Item": "Models",
            "What the sources say": "Any GGUF model, or one RAMen picks and downloads; model licenses are the model makers' own"
          },
          {
            "Item": "Account",
            "What the sources say": "None for the free plan; paid plans use a license key from the Polar store"
          }
        ]
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "How to Get Started",
        "content": [
          "**The steps follow the maker's pages; PromptQuorum has not run them.**"
        ],
        "numberedItems": [
          {
            "title": "Run the installer",
            "whyItMatters": "Use the one-liner for your system; the scripts download a package and verify its SHA-256 checksum before installing."
          },
          {
            "title": "Start RAMen",
            "whyItMatters": "`ramen start` finds a model that fits your computer, downloads it from Hugging Face and runs in the background, or you point it at a GGUF file you already have."
          },
          {
            "title": "Connect your apps",
            "whyItMatters": "`ramen connect cline` (or continue, aider, opencode, open-webui) sets up the tool; anything that speaks the OpenAI API can use the local endpoint."
          },
          {
            "title": "Activate a paid plan only if you want one",
            "whyItMatters": "`ramen activate YOUR-KEY` unlocks the paid features; `ramen deactivate` frees one of the computers on a key."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Features Confirmed by the Sources",
        "content": [
          "**Every item below is the maker's description; the speed and quality figures are the maker's own measurements, not independent tests.**"
        ],
        "items": [
          "**Session memory.** Each conversation's KV cache is saved to disk as you go and restored when the conversation continues, even after a restart; many chats and agents share a few live GPU slots and the rest wait on disk. The maker reports a 70,082-token chat on a Mac mini M2 Pro with Qwen3 4B reopening in 3.7 seconds instead of a 12-minute 47-second re-read.",
          "**Selective reading.** Instead of reading the whole memory for every new word, RAMen keeps a summary of each block and reads about 8,000 tokens' worth plus the start and the latest part of the conversation, which the maker says builds on research on query-aware sparse attention (Quest, 2024). It switches on by itself only above a length where it is faster on your machine, between 16K and about 43K tokens.",
          "**Vendor benchmark.** On an NVIDIA RTX A6000 with Qwen3 32B and an 87K-token conversation the maker measured 20.4 tokens per second against 8.4 for normal llama.cpp, and on an NVIDIA L4 with Qwen3 4B at 128K tokens 42.2 against 9.1; the gain is small below roughly 30K to 40K tokens on a fast NVIDIA card.",
          "**Many agents, one GPU.** Switching between agents resumes each where it stopped; the maker cites 99.7 percent of each agent's history reused when three agents share one GPU.",
          "**Limits the maker states.** Selective reading speeds up writing, not the first read of a new long prompt; it does not stack with draft models (speculative decoding) yet; sliding-window models gain little speed."
        ]
      },
      "pricing": {
        "id": "pricing",
        "itemHeadings": true,
        "title": "Plans and Pricing",
        "content": [
          "**RAMen has a free plan and paid subscriptions sold through the Polar store; every install starts with 14 days of all features, no card needed.**"
        ],
        "columns": [
          "Plan",
          "Price",
          "What it includes"
        ],
        "rows": [
          {
            "Plan": "Free",
            "Price": "$0, no end date",
            "What it includes": "Remembers the last 3 chats, one chat at a time; works with your apps"
          },
          {
            "Plan": "Pro",
            "Price": "$3.99 per month or $29 per year",
            "What it includes": "Remembers every chat and agent session, many agents on one GPU, long chats kept fast, up to 3 computers"
          },
          {
            "Plan": "Team",
            "Price": "$9.99 per person per month, from 3 people",
            "What it includes": "Pro for everyone on the team, movable seats, priority email support"
          },
          {
            "Plan": "Server",
            "Price": "$149 per server per month",
            "What it includes": "One GPU machine serving a team, a key per person, usage per person, Prometheus metrics"
          },
          {
            "Plan": "Enterprise",
            "Price": "On request",
            "What it includes": "Offline licenses for machines without internet, invoices, purchase orders, a support agreement"
          }
        ],
        "note": "The site also advertises a launch offer, Pro for life at $19.99 once for the first 1,000 buyers. Prices are in US dollars and sales tax is handled at checkout; confirm them on the maker's site before buying. If a paid license ends, the license agreement says RAMen continues on the free plan."
      },
      "privacy": {
        "id": "privacy",
        "title": "Data Flow and Privacy",
        "content": [
          "**The privacy policy (effective 6 November 2026) says RAMen runs on your computer and that your prompts, files, conversations and models stay there.** It lists what RAMen sends: on paid plans, at start-up, the license key, the store identifier and an anonymous machine label (the platform plus a short code derived from the machine, never its name) to the payment provider Polar; and, when `ramen start` downloads a model, a connection to Hugging Face, which sees your internet address and the requested file. The policy states there is no analytics, crash reporting or tracking in the software.",
          "The website counts visits with Cloudflare Web Analytics without cookies and is hosted on GitHub Pages. Purchases go through Polar, which gives the maker your name, email address, country and what you bought. The launch-reminder form on the site stores your email address with Cloudflare. The home page says the software keeps working offline between license checks, and the Enterprise plan offers offline licenses."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "These are the maker's statements, not audit results, and PromptQuorum has not inspected network traffic. The software is closed source, so the claims cannot be checked against code."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Who Should Use It",
        "items": [
          "**Coding-agent users** who run Cline, Continue, Aider or OpenCode against a local model and lose time when a long session has to be re-read after a restart.",
          "**Owners of an NVIDIA RTX or Apple-silicon machine** who work with very long conversations, where the maker reports the largest gains.",
          "**Cautious buyers** who want to try a free plan and a 14-day trial before paying anything."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "What We Could Not Verify",
        "items": [
          "**Speed and quality.** All benchmark numbers and the claim of identical answers come from the maker; PromptQuorum ran no tests and found no independent measurements.",
          "**Maturity.** Version 1.0.0 is the first public release, and the product's Product Hunt launch is announced for 8 November 2026, so there is no long-term record on stability or support.",
          "**Source and audit.** There is no public source code for RAMen and no third-party audit; the license agreement forbids reverse engineering except where the law allows it.",
          "**Requirements.** No minimum RAM, disk or OS versions are published, and no Intel Mac, ARM Linux or phone support exists.",
          "**Licensing details.** The paid-plan license check was described but its exact traffic was not examined."
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
            "App": "[llama.cpp](/power-local-llm/llama-cpp-explained)",
            "Platforms": "Mac, Windows, Linux",
            "Price / license": "Free / MIT",
            "Key difference": "The open-source engine RAMen is built on; slot save and restore are manual"
          },
          {
            "App": "[Ollama](/power-local-llm/ollama-review)",
            "Platforms": "Mac, Windows, Linux",
            "Price / license": "Free / MIT",
            "Key difference": "Open-source model runner with a model library and local API"
          },
          {
            "App": "[KoboldCpp](/power-local-llm/koboldcpp-review)",
            "Platforms": "Mac, Windows, Linux",
            "Price / license": "Free / AGPL-3.0",
            "Key difference": "Single-file llama.cpp fork with a built-in chat and writing interface"
          }
        ],
        "note": "Confirm each app's current price, license and platforms on its own page before choosing."
      },
      "faq": {
        "id": "faq",
        "title": "Frequently Asked Questions",
        "faqs": [
          {
            "q": "Does selective reading change the answers a model gives?",
            "a": "The maker says that when the selection covers the whole conversation RAMen writes exactly the same text as normal attention, and that it gave the same answers as full attention in 54 of 54 long-document tests from 16K to 64K tokens. These are the maker's tests and were not independently checked."
          },
          {
            "q": "What happens to my saved chats if I stop paying?",
            "a": "RAMen continues on the free plan, which keeps the 3 most recently used saved chats and clears older saved copies from disk as new chats are saved (the maker confirmed this to PromptQuorum on 6 November 2026). The conversations themselves stay in your app, because RAMen saves the model's working memory, not the chat text, so an older chat still works; it is simply read again from the start, like plain llama.cpp."
          },
          {
            "q": "Does RAMen work offline?",
            "a": "The maker says it works offline once a model is on disk, and paid plans keep working between license checks. The first install and any model download need an internet connection."
          },
          {
            "q": "Is RAMen made by the llama.cpp team?",
            "a": "No. NEOTECH Inc. makes RAMen and says it is built on llama.cpp, which ships with its MIT license; the llama.cpp project itself is a separate open-source project."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "RAMen offers a free-to-try, proprietary layer on llama.cpp that saves chats to disk, resumes agent sessions in seconds and, by the maker's measurements, speeds up very long conversations on NVIDIA RTX and Apple-silicon machines. Against that, it is a first release with no track record, it installs only from a terminal, it is closed source, paid plans contact a license server at start-up, and every performance figure is the maker's own. It suits people who run long local chats or coding agents and are willing to test it on the free plan; anyone who needs audited privacy or verified speed claims should wait for independent results."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[RAMen website](https://getramenai.com) — features, platforms, plans and install commands, checked 6 November 2026.",
          "[How RAMen works](https://getramenai.com/how-it-works.html) — session memory, selective reading, benchmarks and limits, checked 6 November 2026.",
          "[RAMen privacy policy](https://getramenai.com/privacy.html) — data sent, effective 6 November 2026, checked 6 November 2026.",
          "[RAMen license agreement](https://getramenai.com/terms.html) — license terms and plan limits, checked 6 November 2026.",
          "[RAMen releases on GitHub](https://github.com/MatthewLeibel/ramen-releases/releases/tag/v1.0.0) — version 1.0.0 packages and release date, checked 6 November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[llama.cpp Explained](/power-local-llm/llama-cpp-explained) — the open-source engine underneath RAMen.",
          "[Ollama Review](/power-local-llm/ollama-review) — an open-source local model runner with a local API.",
          "[KoboldCpp Review](/power-local-llm/koboldcpp-review) — a single-file llama.cpp fork with a chat interface.",
          "[Local LLM Software Directory](/directory) — the full catalogue of local AI tools."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "RAMen Review: Local Session Memory for llama.cpp, With a Free Plan",
      "description": "RAMen review: a proprietary local layer on llama.cpp that saves every chat to disk and, per the maker, speeds up long conversations, for Mac, Windows and Linux, with a free plan. Install, pricing, privacy and what is untested.",
      "url": "https://www.promptquorum.com/power-local-llm/ramen-review",
      "inLanguage": "en",
      "datePublished": "2026-11-06",
      "dateModified": "2026-11-06",
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
      "educationalLevel": "Intermediate",
      "proficiencyLevel": "Intermediate",
      "audience": {
        "@type": "Audience",
        "audienceType": "Local-LLM users evaluating a session-memory and long-chat speedup layer for llama.cpp"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "RAMen"
        },
        {
          "@type": "Thing",
          "name": "llama.cpp"
        },
        {
          "@type": "Thing",
          "name": "KV cache"
        },
        {
          "@type": "Thing",
          "name": "Local LLM inference"
        }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/power-local-llm/ramen-review"
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
          "name": "RAMen Review",
          "item": "https://www.promptquorum.com/power-local-llm/ramen-review"
        }
      ]
    }
  },
  de: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Overview & Reference",
    "heroImage": "/images/ramen-review-hero-de.webp",
    "title": "RAMen-Rezension: Lokales Sitzungsgedächtnis für llama.cpp, mit kostenlosem Tarif",
    "seoTitle": "RAMen-Rezension: Lokales KI-Sitzungsgedächtnis, Tempo",
    "intro": "RAMen ist eine proprietäre Kommandozeilen-Schicht von NEOTECH Inc., die lokale Modelle über einen eigenen Build von llama.cpp ausführt, jeden Chat und jede Agenten-Sitzung auf der Festplatte speichert, sodass sie sich nach einem Neustart in Sekunden wieder öffnet, und nach Angabe des Herstellers lange Unterhaltungen schnell hält. Es läuft auf Macs mit Apple Silicon, unter Windows 10 und 11 sowie unter Linux, bietet eine OpenAI-kompatible API und hat einen kostenlosen Tarif. Diese Rezension behandelt, was Sie installieren, was es kostet, wohin Ihre Daten gehen und welche Aussagen nur auf den eigenen Messungen des Herstellers beruhen.",
    "metaDescription": "RAMen-Rezension: proprietäres Sitzungsgedächtnis auf llama.cpp für Mac, Windows, Linux, mit kostenlosem Tarif und beanspruchtem Tempogewinn langer Chats.",
    "twitterDescription": "RAMen-Rezension: eine lokale llama.cpp-Schicht, die jeden Chat auf der Festplatte speichert und lange Chats laut Hersteller beschleunigt, mit kostenlosem Tarif. Was die Seiten des Herstellers bestätigen und was ungetestet ist.",
    "audience": "Menschen, die lokale Modelle für lange Chats oder Coding-Agenten nutzen und wissen wollen, was RAMen installiert, kostet und über das Netzwerk sendet und welche Tempoangaben vom Hersteller selbst stammen.",
    "readTime": "6 Min. Lesezeit",
    "educationalLevel": "Intermediate",
    "affiliateDisclosure": false,
    "primaryTerm": "RAMen Rezension",
    "targetKeywords": [
      "ramen lokale ki rezension",
      "ramen llama.cpp",
      "lokales llm sitzungsgedächtnis",
      "llama.cpp kv cache speichern wiederherstellen",
      "lokale ki lange chats tempo",
      "getramenai",
      "ramen openai kompatible api"
    ],
    "current_models_mentioned": [
      "Qwen3"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "NVIDIA RTX GPU",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**RAMen (Version 1.0.0, veröffentlicht am 6. November 2026) ist eine proprietäre lokale Schicht auf llama.cpp, die jeden Chat auf der Festplatte speichert, sodass er sich laut Hersteller in Sekunden wieder öffnet, mit einem kostenlosen Tarif und bezahlten Stufen.** Der entscheidende Vorbehalt: Jede Tempoangabe stammt aus eigenen Tests des Herstellers, und PromptQuorum hat die Software nicht ausgeführt.",
    "quickAnswerTop": {
      "de": {
        "question": "Führt RAMen das Modell auf meinem eigenen Rechner aus?",
        "answer": "Ja, laut Hersteller: RAMen startet einen mitgelieferten llama.cpp-Server auf Ihrem Rechner, und seine Seiten sagen, dass Prompts, Dateien und Sitzungen ihn nie verlassen. Die Quellen nennen drei Netzwerknutzungen: den Download bei der Installation, Modell-Downloads von Hugging Face und, bei bezahlten Tarifen, eine Lizenzprüfung.",
        "bullets": [
          "Es spricht die OpenAI-API, und `ramen connect` richtet Cline, Continue, Aider, OpenCode und Open WebUI für Sie ein.",
          "Sie können ein beliebiges GGUF-Modell mitbringen oder `ramen start` eines wählen lassen, das zu Ihrem Rechner passt, und es herunterladen.",
          "Die Beschleunigung langer Chats braucht eine NVIDIA-RTX-Karte der 20er-Serie oder neuer oder einen Mac mit Apple Silicon; das Speichern von Sitzungen funktioniert auf jedem unterstützten Rechner."
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "Kurzantwort",
        "anchor": "quick-answer"
      },
      {
        "label": "Was ist RAMen?",
        "anchor": "what-is-ramen"
      },
      {
        "label": "Bezugsquelle",
        "anchor": "get-it"
      },
      {
        "label": "Anforderungen",
        "anchor": "requirements"
      },
      {
        "label": "So gelingt der Einstieg",
        "anchor": "getting-started"
      },
      {
        "label": "Von den Quellen bestätigte Funktionen",
        "anchor": "key-features"
      },
      {
        "label": "Tarife und Preise",
        "anchor": "pricing"
      },
      {
        "label": "Datenfluss und Datenschutz",
        "anchor": "privacy"
      },
      {
        "label": "Für wen sich RAMen eignet",
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
            "text": "RAMen ist eine proprietäre Kommandozeilen-Schicht auf llama.cpp, die lokale KI-Chats auf der Festplatte speichert und lange Unterhaltungen laut Hersteller beschleunigt, mit einem kostenlosen Tarif."
          },
          {
            "type": "plain-terms",
            "text": "Sie installieren mit einem Befehl, starten RAMen und richten Ihren Coding-Agenten oder Ihre Chat-App darauf aus; RAMen merkt sich jede Unterhaltung, sodass Sie nach einem Neustart nicht warten müssen, bis das Modell sie erneut liest."
          }
        ],
        "items": [
          "Pflege: Version 1.0.0 erschien am 6. November 2026, dem Tag dieser Rezension, daher entfällt eine Warnung vor veralteten Projekten, und das Produkt hat noch keine Erfolgsbilanz.",
          "Kosten: ein kostenloser Tarif mit begrenztem Gedächtnis, dazu bezahlte Abonnements und ein Lifetime-Angebot zum Start.",
          "Installation: ein Einzeiler im Terminal auf jedem System; es gibt weder einen Installer zum Doppelklicken noch einen App-Store-Eintrag.",
          "Daten: Laut Hersteller verlässt nichts Ihren Rechner außer der Installation, den Modell-Downloads und der Lizenzprüfung bei bezahlten Tarifen."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Diese Rezension stützt sich auf getramenai.com, die Datenschutzerklärung und die Lizenzvereinbarung, die Installationsskripte und die GitHub-Release-Daten, geprüft am 6. November 2026. PromptQuorum hat RAMen weder installiert noch ausgeführt oder gemessen; Geschwindigkeit, Stabilität und Antwortqualität werden daher nicht bewertet."
          }
        ]
      },
      "overview": {
        "id": "what-is-ramen",
        "title": "Was ist RAMen?",
        "content": [
          "**RAMen ist ein lokaler KI-Sitzungsmanager von NEOTECH Inc., der vor llama.cpp sitzt, der quelloffenen Engine, auf der die meisten Tools für lokale Modelle laufen.** Es bringt einen eigenen Build von llama.cpp (MIT-Lizenz) mit zwei Ergänzungen mit: Es speichert den Arbeitsspeicher des Modells (den KV-Cache) für jede Unterhaltung auf der Festplatte und stellt ihn wieder her, wenn die Unterhaltung weitergeht, und es liest bei jedem neuen Wort nur die Teile einer langen Unterhaltung, die dafür wichtig sind.",
          "Die Seite des Herstellers zur Funktionsweise merkt an, dass llama.cpp bereits Slot-Speichern und -Wiederherstellen kennt und dass kleine Tools das automatisieren; RAMen beansprucht, es für jede Sitzung automatisch zu tun, mit Prüfungen, ob ein gespeicherter Cache zu Modell und Einstellungen passt. Die Software ist Closed Source unter einer proprietären Lizenzvereinbarung; das öffentliche GitHub-Repository hostet nur die Download-Pakete."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Bezugsquelle",
        "content": [
          "**RAMen wird im Terminal mit einem Befehl pro System installiert; die Pakete liegen auf GitHub Releases, und es gibt keinen grafischen Installer.**"
        ],
        "columns": [
          "Option",
          "Bezug"
        ],
        "rows": [
          {
            "Option": "Mac (Apple Silicon)",
            "Bezug": "Terminal: `curl -fsSL https://getramenai.com/install.sh | bash`"
          },
          {
            "Option": "Linux (x64)",
            "Bezug": "Derselbe Befehl; er wählt den NVIDIA-Build, wenn `nvidia-smi` funktioniert, sonst den CPU-Build"
          },
          {
            "Option": "Windows 10/11 (x64)",
            "Bezug": "PowerShell: `irm https://getramenai.com/install.ps1 | iex`"
          },
          {
            "Option": "Manueller Download",
            "Bezug": "[RAMen-Releases auf GitHub](https://github.com/MatthewLeibel/ramen-releases/releases/latest), .tar.gz oder .zip mit .sha256-Prüfsummen"
          },
          {
            "Option": "Handy",
            "Bezug": "Keine iPhone- oder Android-App erwähnt"
          },
          {
            "Option": "Website",
            "Bezug": "[getramenai.com](https://getramenai.com)"
          },
          {
            "Option": "Datenschutzerklärung",
            "Bezug": "[RAMen-Datenschutzerklärung](https://getramenai.com/privacy.html); [Lizenzvereinbarung](https://getramenai.com/terms.html)"
          }
        ],
        "note": "Geprüfte Version: 1.0.0 (6. November 2026). Ein Terminal ist erforderlich: Nach der Installation lädt `ramen start` ein Modell herunter, falls Sie keines haben, und startet RAMen im Hintergrund. Der Installer fügt `~/.ramen/bin` zum PATH Ihrer Shell hinzu und legt gespeicherte Chats in `~/.context-engine` ab; `rm -rf ~/.ramen` entfernt das Programm."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Anforderungen",
        "content": [
          "**Der Hersteller nennt keine Mindestwerte für RAM, Speicherplatz oder Betriebssystemversion; die Seite sagt nur, dass Sie einen Rechner brauchen, auf dem llama.cpp läuft.**"
        ],
        "columns": [
          "Punkt",
          "Was die Quellen sagen"
        ],
        "rows": [
          {
            "Punkt": "Mac",
            "Was die Quellen sagen": "Nur Apple Silicon (M1 oder neuer); der Installer lehnt Intel-Macs ab"
          },
          {
            "Punkt": "Windows",
            "Was die Quellen sagen": "Windows 10 und 11, 64 Bit; CPU-Build, mit einem NVIDIA-Build, wenn eine NVIDIA-GPU erkannt wird"
          },
          {
            "Punkt": "Linux",
            "Was die Quellen sagen": "Nur x64, CPU- oder NVIDIA-Build; der Installer lehnt ARM-Linux vorerst ab"
          },
          {
            "Punkt": "Beschleunigung langer Chats",
            "Was die Quellen sagen": "Braucht eine NVIDIA-RTX-Karte der 20er-Serie oder neuer oder einen Mac mit Apple Silicon; für reine CPU-Rechner wird sie nicht beansprucht"
          },
          {
            "Punkt": "Modelle",
            "Was die Quellen sagen": "Jedes GGUF-Modell oder eines, das RAMen auswählt und herunterlädt; die Modelllizenzen sind die der jeweiligen Modellhersteller"
          },
          {
            "Punkt": "Konto",
            "Was die Quellen sagen": "Keines für den kostenlosen Tarif; bezahlte Tarife nutzen einen Lizenzschlüssel aus dem Polar-Store"
          }
        ]
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "So gelingt der Einstieg",
        "content": [
          "**Die Schritte folgen den Seiten des Herstellers; PromptQuorum hat sie nicht ausgeführt.**"
        ],
        "numberedItems": [
          {
            "title": "Installer ausführen",
            "whyItMatters": "Nutzen Sie den Einzeiler für Ihr System; die Skripte laden ein Paket herunter und prüfen dessen SHA-256-Prüfsumme vor der Installation."
          },
          {
            "title": "RAMen starten",
            "whyItMatters": "`ramen start` sucht ein Modell, das zu Ihrem Rechner passt, lädt es von Hugging Face herunter und läuft im Hintergrund, oder Sie verweisen auf eine bereits vorhandene GGUF-Datei."
          },
          {
            "title": "Apps verbinden",
            "whyItMatters": "`ramen connect cline` (oder continue, aider, opencode, open-webui) richtet das Tool ein; alles, was die OpenAI-API spricht, kann den lokalen Endpunkt nutzen."
          },
          {
            "title": "Einen bezahlten Tarif nur aktivieren, wenn Sie einen wollen",
            "whyItMatters": "`ramen activate YOUR-KEY` schaltet die bezahlten Funktionen frei; `ramen deactivate` gibt einen der Rechner eines Schlüssels frei."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Von den Quellen bestätigte Funktionen",
        "content": [
          "**Jeder folgende Punkt ist die Beschreibung des Herstellers; die Tempo- und Qualitätsangaben sind dessen eigene Messungen, keine unabhängigen Tests.**"
        ],
        "items": [
          "**Sitzungsgedächtnis.** Der KV-Cache jeder Unterhaltung wird laufend auf der Festplatte gespeichert und wiederhergestellt, wenn die Unterhaltung weitergeht, auch nach einem Neustart; viele Chats und Agenten teilen sich wenige aktive GPU-Slots, der Rest wartet auf der Festplatte. Der Hersteller berichtet, dass sich ein Chat mit 70.082 Token auf einem Mac mini M2 Pro mit Qwen3 4B in 3,7 Sekunden wieder öffnete statt nach einem erneuten Lesen von 12 Minuten und 47 Sekunden.",
          "**Selektives Lesen.** Statt bei jedem neuen Wort den gesamten Speicher zu lesen, führt RAMen eine Zusammenfassung jedes Blocks und liest etwa 8.000 Token Umfang plus den Anfang und den jüngsten Teil der Unterhaltung, wobei der Hersteller sagt, dass dies auf Forschung zu abfragebewusster Sparse Attention (Quest, 2024) aufbaut. Es schaltet sich von selbst nur oberhalb einer Länge ein, ab der es auf Ihrem Rechner schneller ist, zwischen 16K und etwa 43K Token.",
          "**Hersteller-Benchmark.** Auf einer NVIDIA RTX A6000 mit Qwen3 32B und einer Unterhaltung von 87K Token maß der Hersteller 20,4 Token pro Sekunde gegenüber 8,4 bei normalem llama.cpp, und auf einer NVIDIA L4 mit Qwen3 4B bei 128K Token 42,2 gegenüber 9,1; der Gewinn ist unterhalb von etwa 30K bis 40K Token auf einer schnellen NVIDIA-Karte klein.",
          "**Viele Agenten, eine GPU.** Beim Wechsel zwischen Agenten macht jeder dort weiter, wo er aufgehört hat; der Hersteller nennt 99,7 Prozent des Verlaufs jedes Agenten wiederverwendet, wenn sich drei Agenten eine GPU teilen.",
          "**Grenzen, die der Hersteller nennt.** Selektives Lesen beschleunigt das Schreiben, nicht das erste Lesen eines neuen langen Prompts; es lässt sich noch nicht mit Entwurfsmodellen (Speculative Decoding) kombinieren; Modelle mit Sliding Window gewinnen kaum an Tempo."
        ]
      },
      "pricing": {
        "id": "pricing",
        "itemHeadings": true,
        "title": "Tarife und Preise",
        "content": [
          "**RAMen hat einen kostenlosen Tarif und bezahlte Abonnements über den Polar-Store; jede Installation startet mit 14 Tagen aller Funktionen, ohne Karte.**"
        ],
        "columns": [
          "Tarif",
          "Preis",
          "Was enthalten ist"
        ],
        "rows": [
          {
            "Tarif": "Free",
            "Preis": "0 $, ohne Enddatum",
            "Was enthalten ist": "Merkt sich die letzten 3 Chats, jeweils einen Chat gleichzeitig; funktioniert mit Ihren Apps"
          },
          {
            "Tarif": "Pro",
            "Preis": "3,99 $ pro Monat oder 29 $ pro Jahr",
            "Was enthalten ist": "Merkt sich jeden Chat und jede Agenten-Sitzung, viele Agenten auf einer GPU, lange Chats bleiben schnell, bis zu 3 Rechner"
          },
          {
            "Tarif": "Team",
            "Preis": "9,99 $ pro Person und Monat, ab 3 Personen",
            "Was enthalten ist": "Pro für alle im Team, übertragbare Plätze, E-Mail-Support mit Vorrang"
          },
          {
            "Tarif": "Server",
            "Preis": "149 $ pro Server und Monat",
            "Was enthalten ist": "Ein GPU-Rechner für ein Team, ein Schlüssel pro Person, Nutzung pro Person, Prometheus-Metriken"
          },
          {
            "Tarif": "Enterprise",
            "Preis": "Auf Anfrage",
            "Was enthalten ist": "Offline-Lizenzen für Rechner ohne Internet, Rechnungen, Bestellungen, ein Supportvertrag"
          }
        ],
        "note": "Die Website bewirbt außerdem ein Startangebot, Pro auf Lebenszeit für einmalig 19,99 $ für die ersten 1.000 Käufer. Die Preise gelten in US-Dollar, und die Umsatzsteuer wird beim Bezahlen berücksichtigt; bestätigen Sie sie vor dem Kauf auf der Website des Herstellers. Endet eine bezahlte Lizenz, läuft RAMen laut Lizenzvereinbarung im kostenlosen Tarif weiter."
      },
      "privacy": {
        "id": "privacy",
        "title": "Datenfluss und Datenschutz",
        "content": [
          "**Die Datenschutzerklärung (gültig ab 6. November 2026) besagt, dass RAMen auf Ihrem Rechner läuft und dass Ihre Prompts, Dateien, Unterhaltungen und Modelle dort bleiben.** Sie nennt, was RAMen sendet: bei bezahlten Tarifen beim Start den Lizenzschlüssel, die Store-Kennung und eine anonyme Rechnerkennung (die Plattform plus ein kurzer, aus dem Rechner abgeleiteter Code, nie sein Name) an den Zahlungsdienstleister Polar; und, wenn `ramen start` ein Modell herunterlädt, eine Verbindung zu Hugging Face, das Ihre Internetadresse und die angeforderte Datei sieht. Die Erklärung gibt an, dass die Software weder Analyse noch Absturzberichte noch Tracking enthält.",
          "Die Website zählt Besuche mit Cloudflare Web Analytics ohne Cookies und wird auf GitHub Pages gehostet. Käufe laufen über Polar, das dem Hersteller Ihren Namen, Ihre E-Mail-Adresse, Ihr Land und das Gekaufte übermittelt. Das Formular für die Start-Erinnerung auf der Website speichert Ihre E-Mail-Adresse bei Cloudflare. Die Startseite sagt, dass die Software zwischen Lizenzprüfungen offline weiterarbeitet, und der Enterprise-Tarif bietet Offline-Lizenzen."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Das sind Aussagen des Herstellers, keine Prüfergebnisse, und PromptQuorum hat den Netzwerkverkehr nicht untersucht. Die Software ist Closed Source, daher lassen sich die Angaben nicht am Code überprüfen."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Für wen sich RAMen eignet",
        "items": [
          "**Nutzer von Coding-Agenten**, die Cline, Continue, Aider oder OpenCode gegen ein lokales Modell betreiben und Zeit verlieren, wenn eine lange Sitzung nach einem Neustart erneut gelesen werden muss.",
          "**Besitzer eines NVIDIA-RTX- oder Apple-Silicon-Rechners**, die mit sehr langen Unterhaltungen arbeiten, wo der Hersteller die größten Gewinne berichtet.",
          "**Vorsichtige Käufer**, die einen kostenlosen Tarif und eine 14-tägige Testphase ausprobieren möchten, bevor sie etwas bezahlen."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Was wir nicht überprüfen konnten",
        "items": [
          "**Geschwindigkeit und Qualität.** Alle Benchmark-Zahlen und die Aussage identischer Antworten stammen vom Hersteller; PromptQuorum führte keine Tests durch und fand keine unabhängigen Messungen.",
          "**Reife.** Version 1.0.0 ist das erste öffentliche Release, und der Product-Hunt-Start des Produkts ist für den 8. November 2026 angekündigt, daher gibt es keine Langzeitbilanz zu Stabilität oder Support.",
          "**Quellcode und Prüfung.** Es gibt keinen öffentlichen Quellcode von RAMen und kein Audit durch Dritte; die Lizenzvereinbarung verbietet Reverse Engineering, außer soweit das Gesetz es erlaubt.",
          "**Anforderungen.** Es sind keine Mindestwerte für RAM, Speicherplatz oder Betriebssystemversionen veröffentlicht, und es gibt keine Unterstützung für Intel-Macs, ARM-Linux oder Handys.",
          "**Lizenzdetails.** Die Lizenzprüfung bei bezahlten Tarifen wurde beschrieben, ihr genauer Datenverkehr aber nicht untersucht."
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
          "Hauptunterschied"
        ],
        "rows": [
          {
            "App": "[llama.cpp](/de/power-local-llm/llama-cpp-explained)",
            "Plattformen": "Mac, Windows, Linux",
            "Preis / Lizenz": "Gratis / MIT",
            "Hauptunterschied": "Die quelloffene Engine, auf der RAMen aufbaut; Slot-Speichern und -Wiederherstellen erfolgen manuell"
          },
          {
            "App": "[Ollama](/de/power-local-llm/ollama-review)",
            "Plattformen": "Mac, Windows, Linux",
            "Preis / Lizenz": "Gratis / MIT",
            "Hauptunterschied": "Quelloffener Modell-Runner mit Modellbibliothek und lokaler API"
          },
          {
            "App": "[KoboldCpp](/de/power-local-llm/koboldcpp-review)",
            "Plattformen": "Mac, Windows, Linux",
            "Preis / Lizenz": "Gratis / AGPL-3.0",
            "Hauptunterschied": "llama.cpp-Fork in einer einzigen Datei mit eingebauter Chat- und Schreiboberfläche"
          }
        ],
        "note": "Prüfen Sie Preis, Lizenz und Plattformen jeder App vor der Entscheidung auf deren eigener Seite."
      },
      "faq": {
        "id": "faq",
        "title": "Häufig gestellte Fragen",
        "faqs": [
          {
            "q": "Verändert selektives Lesen die Antworten eines Modells?",
            "a": "Der Hersteller sagt, dass RAMen genau denselben Text schreibt wie normale Attention, wenn die Auswahl die gesamte Unterhaltung abdeckt, und dass es in 54 von 54 Tests mit langen Dokumenten von 16K bis 64K Token dieselben Antworten gab wie volle Attention. Das sind Tests des Herstellers, die nicht unabhängig geprüft wurden."
          },
          {
            "q": "Was passiert mit meinen gespeicherten Chats, wenn ich nicht mehr zahle?",
            "a": "RAMen läuft im kostenlosen Tarif weiter, der die 3 zuletzt verwendeten gespeicherten Chats behält und ältere gespeicherte Kopien von der Festplatte löscht, sobald neue Chats gespeichert werden (der Hersteller hat das PromptQuorum am 6. November 2026 bestätigt). Die Unterhaltungen selbst bleiben in Ihrer App erhalten, weil RAMen den Arbeitsspeicher des Modells sichert, nicht den Chattext; ein älterer Chat funktioniert also weiterhin, wird aber wie bei reinem llama.cpp von vorn neu eingelesen."
          },
          {
            "q": "Funktioniert RAMen offline?",
            "a": "Der Hersteller sagt, es funktioniere offline, sobald ein Modell auf der Festplatte liegt, und bezahlte Tarife arbeiten zwischen Lizenzprüfungen weiter. Die erste Installation und jeder Modell-Download brauchen eine Internetverbindung."
          },
          {
            "q": "Wird RAMen vom llama.cpp-Team entwickelt?",
            "a": "Nein. NEOTECH Inc. stellt RAMen her und sagt, es baue auf llama.cpp auf, das mit seiner MIT-Lizenz ausgeliefert wird; das Projekt llama.cpp selbst ist ein eigenständiges Open-Source-Projekt."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Fazit",
        "content": "RAMen bietet eine kostenlos testbare, proprietäre Schicht auf llama.cpp, die Chats auf der Festplatte speichert, Agenten-Sitzungen in Sekunden wieder aufnimmt und nach den Messungen des Herstellers sehr lange Unterhaltungen auf NVIDIA-RTX- und Apple-Silicon-Rechnern beschleunigt. Dagegen ist es ein erstes Release ohne Erfolgsbilanz, es lässt sich nur über ein Terminal installieren, es ist Closed Source, bezahlte Tarife kontaktieren beim Start einen Lizenzserver, und jede Leistungsangabe stammt vom Hersteller selbst. Es passt zu Menschen, die lange lokale Chats oder Coding-Agenten nutzen und bereit sind, es im kostenlosen Tarif zu testen; wer geprüften Datenschutz oder verifizierte Tempoangaben braucht, sollte auf unabhängige Ergebnisse warten."
      },
      "sources": {
        "id": "sources",
        "title": "Quellen",
        "items": [
          "[RAMen-Website](https://getramenai.com) — Funktionen, Plattformen, Tarife und Installationsbefehle, geprüft am 6. November 2026.",
          "[So funktioniert RAMen](https://getramenai.com/how-it-works.html) — Sitzungsgedächtnis, selektives Lesen, Benchmarks und Grenzen, geprüft am 6. November 2026.",
          "[RAMen-Datenschutzerklärung](https://getramenai.com/privacy.html) — gesendete Daten, gültig ab 6. November 2026, geprüft am 6. November 2026.",
          "[RAMen-Lizenzvereinbarung](https://getramenai.com/terms.html) — Lizenzbedingungen und Tarifgrenzen, geprüft am 6. November 2026.",
          "[RAMen-Releases auf GitHub](https://github.com/MatthewLeibel/ramen-releases/releases/tag/v1.0.0) — Pakete der Version 1.0.0 und Veröffentlichungsdatum, geprüft am 6. November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Artikel",
        "items": [
          "[llama.cpp erklärt](/de/power-local-llm/llama-cpp-explained) — die quelloffene Engine unter RAMen.",
          "[Ollama-Rezension](/de/power-local-llm/ollama-review) — ein quelloffener Runner für lokale Modelle mit lokaler API.",
          "[KoboldCpp-Rezension](/de/power-local-llm/koboldcpp-review) — ein llama.cpp-Fork in einer einzigen Datei mit Chat-Oberfläche.",
          "[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Tools."
        ]
      }
    }
  },
  es: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Overview & Reference",
    "heroImage": "/images/ramen-review-hero-es.webp",
    "title": "Reseña de RAMen: memoria de sesión local para llama.cpp, con plan gratuito",
    "seoTitle": "Reseña de RAMen: memoria de sesión local y velocidad",
    "intro": "RAMen es una capa propietaria de línea de comandos de NEOTECH Inc. que ejecuta modelos locales con su propia compilación de llama.cpp, guarda en disco cada sesión de chat y de agente para que se reabra en segundos tras un reinicio, y asegura que mantiene rápidas las conversaciones largas. Funciona en Mac con Apple silicon, Windows 10 y 11 y Linux, expone una API compatible con OpenAI y tiene un plan gratuito. Esta reseña cubre qué instalas, cuánto cuesta, adónde van tus datos y qué afirmaciones se apoyan solo en las mediciones del propio creador.",
    "metaDescription": "Reseña de RAMen: memoria de sesión propietaria en llama.cpp en Mac, Windows y Linux, con plan gratis y chats largos más rápidos según el creador. Precio.",
    "twitterDescription": "Reseña de RAMen: una capa local sobre llama.cpp que guarda cada chat en disco y, según el creador, acelera los chats largos, con plan gratuito. Qué confirman las páginas del creador y qué no se ha probado.",
    "audience": "Personas que ejecutan modelos locales para chats largos o agentes de programación y quieren saber qué instala RAMen, cuánto cuesta y qué envía por la red, y qué afirmaciones de velocidad son del propio creador.",
    "readTime": "6 min de lectura",
    "educationalLevel": "Intermediate",
    "affiliateDisclosure": false,
    "primaryTerm": "reseña de RAMen",
    "targetKeywords": [
      "reseña ramen ia local",
      "ramen llama.cpp",
      "memoria de sesión llm local",
      "llama.cpp guardar y restaurar kv cache",
      "velocidad de chat largo ia local",
      "getramenai",
      "ramen api compatible con openai"
    ],
    "current_models_mentioned": [
      "Qwen3"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "NVIDIA RTX GPU",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**RAMen (versión 1.0.0, publicada el 6 de noviembre de 2026) es una capa local propietaria sobre llama.cpp que guarda cada chat en disco para que, según el creador, se reabra en segundos, con un plan gratuito y planes de pago.** La salvedad decisiva es que todas las cifras de velocidad proceden de las pruebas del propio creador y PromptQuorum no ha ejecutado el software.",
    "quickAnswerTop": {
      "es": {
        "question": "¿RAMen ejecuta el modelo en mi propio equipo?",
        "answer": "Sí, según el creador: RAMen inicia en tu equipo un servidor llama.cpp incluido y sus páginas dicen que los prompts, los archivos y las sesiones nunca salen de él. Las fuentes nombran tres usos de la red: la descarga de la instalación, las descargas de modelos desde Hugging Face y, en los planes de pago, una comprobación de licencia.",
        "bullets": [
          "Habla la API de OpenAI, y `ramen connect` configura por ti Cline, Continue, Aider, OpenCode y Open WebUI.",
          "Puedes usar cualquier modelo GGUF, o dejar que `ramen start` elija uno que quepa en tu equipo y lo descargue.",
          "La aceleración de chats largos requiere una tarjeta NVIDIA RTX de la serie 20 o posterior, o un Mac con Apple silicon; el guardado de sesiones funciona en cualquier equipo compatible."
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "Respuesta rápida",
        "anchor": "quick-answer"
      },
      {
        "label": "¿Qué es RAMen?",
        "anchor": "what-is-ramen"
      },
      {
        "label": "Cómo conseguirlo",
        "anchor": "get-it"
      },
      {
        "label": "Requisitos",
        "anchor": "requirements"
      },
      {
        "label": "Cómo empezar",
        "anchor": "getting-started"
      },
      {
        "label": "Funciones confirmadas por las fuentes",
        "anchor": "key-features"
      },
      {
        "label": "Planes y precios",
        "anchor": "pricing"
      },
      {
        "label": "Flujo de datos y privacidad",
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
            "text": "RAMen es una capa propietaria de línea de comandos sobre llama.cpp que guarda en disco los chats de IA locales y, según el creador, acelera las conversaciones largas, con un plan gratuito."
          },
          {
            "type": "plain-terms",
            "text": "Instalas con un comando, lo inicias y apuntas tu agente de programación o tu app de chat hacia él; RAMen recuerda cada conversación para que no esperes a que el modelo la relea tras un reinicio."
          }
        ],
        "items": [
          "Mantenimiento: la versión 1.0.0 se publicó el 6 de noviembre de 2026, el día de esta reseña, así que no se aplica ninguna advertencia de proyecto abandonado y el producto aún no tiene trayectoria.",
          "Coste: un plan gratuito con memoria limitada, más suscripciones de pago y una oferta de lanzamiento de licencia de por vida.",
          "Instalación: una línea de comandos en la terminal en todos los sistemas; no hay instalador de doble clic ni ficha en una tienda de apps.",
          "Datos: el creador dice que nada sale de tu equipo salvo la instalación, las descargas de modelos y la comprobación de licencia de los planes de pago."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta reseña se basa en getramenai.com, su política de privacidad y su acuerdo de licencia, los scripts de instalación y los datos de la versión en GitHub, consultados el 6 de noviembre de 2026. PromptQuorum no ha instalado, ejecutado ni medido RAMen, así que no se evalúan la velocidad, la estabilidad ni la calidad de las respuestas."
          }
        ]
      },
      "overview": {
        "id": "what-is-ramen",
        "title": "¿Qué es RAMen?",
        "content": [
          "**RAMen es un gestor de sesiones de IA local creado por NEOTECH Inc. que se sitúa delante de llama.cpp, el motor de código abierto sobre el que funcionan la mayoría de las herramientas de modelos locales.** Incluye su propia compilación de llama.cpp (licencia MIT) con dos añadidos: guarda en disco la memoria de trabajo del modelo (la KV cache) de cada conversación y la restaura cuando la conversación continúa, y lee solo las partes de una conversación larga que importan para cada palabra nueva.",
          "La página de funcionamiento del creador señala que llama.cpp ya tiene guardado y restauración de slots y que existen herramientas pequeñas que lo automatizan; lo que afirma RAMen es hacerlo automáticamente para todas las sesiones, con comprobaciones de que una caché guardada coincide con el modelo y los ajustes. El software es de código cerrado, bajo un acuerdo de licencia propietario; el repositorio público de GitHub solo aloja los paquetes de descarga."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Cómo conseguirlo",
        "content": [
          "**RAMen se instala desde la terminal con un comando por sistema; los paquetes están alojados en GitHub Releases y no hay instalador gráfico.**"
        ],
        "columns": [
          "Opción",
          "Cómo conseguirlo"
        ],
        "rows": [
          {
            "Opción": "Mac (Apple silicon)",
            "Cómo conseguirlo": "Terminal: `curl -fsSL https://getramenai.com/install.sh | bash`"
          },
          {
            "Opción": "Linux (x64)",
            "Cómo conseguirlo": "El mismo comando; elige la compilación para NVIDIA cuando `nvidia-smi` funciona y, si no, la compilación para CPU"
          },
          {
            "Opción": "Windows 10/11 (x64)",
            "Cómo conseguirlo": "PowerShell: `irm https://getramenai.com/install.ps1 | iex`"
          },
          {
            "Opción": "Descarga manual",
            "Cómo conseguirlo": "[Versiones de RAMen en GitHub](https://github.com/MatthewLeibel/ramen-releases/releases/latest), .tar.gz o .zip con sumas de comprobación .sha256"
          },
          {
            "Opción": "Teléfono",
            "Cómo conseguirlo": "No se menciona ninguna app para iPhone ni Android"
          },
          {
            "Opción": "Sitio web",
            "Cómo conseguirlo": "[getramenai.com](https://getramenai.com)"
          },
          {
            "Opción": "Política de privacidad",
            "Cómo conseguirlo": "[Política de privacidad de RAMen](https://getramenai.com/privacy.html); [Acuerdo de licencia](https://getramenai.com/terms.html)"
          }
        ],
        "note": "Versión revisada: 1.0.0 (6 de noviembre de 2026). Hace falta una terminal: tras la instalación, `ramen start` descarga un modelo si no tienes ninguno e inicia RAMen en segundo plano. El instalador añade `~/.ramen/bin` al PATH de tu shell y guarda los chats en `~/.context-engine`; `rm -rf ~/.ramen` elimina el programa."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**El creador no indica cifras mínimas de RAM, disco ni versión del sistema; la página solo dice que necesitas un equipo capaz de ejecutar llama.cpp.**"
        ],
        "columns": [
          "Elemento",
          "Qué dicen las fuentes"
        ],
        "rows": [
          {
            "Elemento": "Mac",
            "Qué dicen las fuentes": "Solo Apple silicon (M1 o posterior); el instalador rechaza los Mac con Intel"
          },
          {
            "Elemento": "Windows",
            "Qué dicen las fuentes": "Windows 10 y 11, de 64 bits; compilación para CPU, con una compilación para NVIDIA cuando se detecta una GPU NVIDIA"
          },
          {
            "Elemento": "Linux",
            "Qué dicen las fuentes": "Solo x64, compilación para CPU o NVIDIA; por ahora el instalador rechaza Linux en ARM"
          },
          {
            "Elemento": "Aceleración de chats largos",
            "Qué dicen las fuentes": "Requiere una tarjeta NVIDIA RTX de la serie 20 o posterior, o un Mac con Apple silicon; no se afirma para equipos solo con CPU"
          },
          {
            "Elemento": "Modelos",
            "Qué dicen las fuentes": "Cualquier modelo GGUF, o uno que RAMen elige y descarga; las licencias de los modelos son las de sus propios creadores"
          },
          {
            "Elemento": "Cuenta",
            "Qué dicen las fuentes": "Ninguna para el plan gratuito; los planes de pago usan una clave de licencia de la tienda Polar"
          }
        ]
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Cómo empezar",
        "content": [
          "**Los pasos siguen las páginas del creador; PromptQuorum no los ha ejecutado.**"
        ],
        "numberedItems": [
          {
            "title": "Ejecuta el instalador",
            "whyItMatters": "Usa el comando de una línea de tu sistema; los scripts descargan un paquete y verifican su suma de comprobación SHA-256 antes de instalar."
          },
          {
            "title": "Inicia RAMen",
            "whyItMatters": "`ramen start` busca un modelo que quepa en tu equipo, lo descarga desde Hugging Face y se ejecuta en segundo plano, o bien lo apuntas a un archivo GGUF que ya tengas."
          },
          {
            "title": "Conecta tus apps",
            "whyItMatters": "`ramen connect cline` (o continue, aider, opencode, open-webui) configura la herramienta; cualquier programa que hable la API de OpenAI puede usar el endpoint local."
          },
          {
            "title": "Activa un plan de pago solo si lo quieres",
            "whyItMatters": "`ramen activate YOUR-KEY` desbloquea las funciones de pago; `ramen deactivate` libera uno de los equipos de una clave."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Funciones confirmadas por las fuentes",
        "content": [
          "**Cada elemento siguiente es la descripción del creador; las cifras de velocidad y de calidad son mediciones del propio creador, no pruebas independientes.**"
        ],
        "items": [
          "**Memoria de sesión.** La KV cache de cada conversación se guarda en disco sobre la marcha y se restaura cuando la conversación continúa, incluso tras un reinicio; muchos chats y agentes comparten unos pocos slots de GPU activos y el resto espera en disco. El creador indica que un chat de 70 082 tokens en un Mac mini M2 Pro con Qwen3 4B se reabre en 3.7 segundos, en lugar de tardar 12 minutos y 47 segundos en releerse.",
          "**Lectura selectiva.** En lugar de leer toda la memoria para cada palabra nueva, RAMen guarda un resumen de cada bloque y lee el equivalente a unos 8000 tokens, además del inicio y de la parte más reciente de la conversación, a partir de investigación que, según el creador, se basa en la atención dispersa sensible a la consulta (Quest, 2024). Se activa sola únicamente por encima de una longitud en la que resulta más rápida en tu equipo, entre 16K y unos 43K tokens.",
          "**Benchmark del fabricante.** En una NVIDIA RTX A6000 con Qwen3 32B y una conversación de 87K tokens, el creador midió 20.4 tokens por segundo frente a 8.4 de llama.cpp normal, y en una NVIDIA L4 con Qwen3 4B a 128K tokens, 42.2 frente a 9.1; la mejora es pequeña por debajo de unos 30K a 40K tokens en una tarjeta NVIDIA rápida.",
          "**Muchos agentes, una GPU.** Al cambiar entre agentes, cada uno se reanuda donde se quedó; el creador cita que se reutiliza el 99.7 % del historial de cada agente cuando tres agentes comparten una GPU.",
          "**Límites que indica el creador.** La lectura selectiva acelera la escritura, no la primera lectura de un prompt largo nuevo; todavía no se combina con los modelos borrador (decodificación especulativa); los modelos de ventana deslizante ganan poca velocidad."
        ]
      },
      "pricing": {
        "id": "pricing",
        "itemHeadings": true,
        "title": "Planes y precios",
        "content": [
          "**RAMen tiene un plan gratuito y suscripciones de pago que se venden a través de la tienda Polar; cada instalación empieza con 14 días de todas las funciones, sin tarjeta.**"
        ],
        "columns": [
          "Plan",
          "Precio",
          "Qué incluye"
        ],
        "rows": [
          {
            "Plan": "Gratis",
            "Precio": "$0, sin fecha de fin",
            "Qué incluye": "Recuerda los últimos 3 chats, un chat a la vez; funciona con tus apps"
          },
          {
            "Plan": "Pro",
            "Precio": "$3.99 al mes o $29 al año",
            "Qué incluye": "Recuerda todos los chats y sesiones de agente, muchos agentes en una GPU, chats largos rápidos, hasta 3 equipos"
          },
          {
            "Plan": "Team",
            "Precio": "$9.99 por persona al mes, a partir de 3 personas",
            "Qué incluye": "Pro para todo el equipo, puestos transferibles, soporte prioritario por correo"
          },
          {
            "Plan": "Server",
            "Precio": "$149 por servidor al mes",
            "Qué incluye": "Una máquina con GPU que atiende a un equipo, una clave por persona, uso por persona, métricas de Prometheus"
          },
          {
            "Plan": "Enterprise",
            "Precio": "Bajo petición",
            "Qué incluye": "Licencias sin conexión para máquinas sin internet, facturas, órdenes de compra, un acuerdo de soporte"
          }
        ],
        "note": "El sitio también anuncia una oferta de lanzamiento: Pro de por vida por $19.99 una sola vez para los primeros 1000 compradores. Los precios están en dólares estadounidenses y los impuestos sobre las ventas se gestionan al pagar; confírmalos en el sitio del creador antes de comprar. Si una licencia de pago termina, el acuerdo de licencia dice que RAMen continúa con el plan gratuito."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flujo de datos y privacidad",
        "content": [
          "**La política de privacidad (en vigor desde el 6 de noviembre de 2026) dice que RAMen se ejecuta en tu equipo y que tus prompts, archivos, conversaciones y modelos se quedan allí.** Enumera lo que RAMen envía: en los planes de pago, al arrancar, la clave de licencia, el identificador de la tienda y una etiqueta anónima de la máquina (la plataforma más un código corto derivado de la máquina, nunca su nombre) al proveedor de pagos Polar; y, cuando `ramen start` descarga un modelo, una conexión a Hugging Face, que ve tu dirección de internet y el archivo solicitado. La política afirma que el software no incluye analítica, informes de fallos ni seguimiento.",
          "El sitio web cuenta las visitas con Cloudflare Web Analytics sin cookies y está alojado en GitHub Pages. Las compras pasan por Polar, que entrega al creador tu nombre, tu correo electrónico, tu país y lo que compraste. El formulario de aviso de lanzamiento del sitio guarda tu correo electrónico en Cloudflare. La página de inicio dice que el software sigue funcionando sin conexión entre comprobaciones de licencia, y el plan Enterprise ofrece licencias sin conexión."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Estas son afirmaciones del creador, no resultados de una auditoría, y PromptQuorum no ha inspeccionado el tráfico de red. El software es de código cerrado, así que las afirmaciones no pueden contrastarse con el código."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quién es",
        "items": [
          "**Quienes usan agentes de programación** y ejecutan Cline, Continue, Aider u OpenCode con un modelo local y pierden tiempo cuando una sesión larga tiene que releerse tras un reinicio.",
          "**Quienes tienen un equipo con NVIDIA RTX o Apple silicon** y trabajan con conversaciones muy largas, donde el creador indica las mayores mejoras.",
          "**Compradores prudentes** que quieren probar un plan gratuito y una prueba de 14 días antes de pagar nada."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Lo que no pudimos verificar",
        "items": [
          "**Velocidad y calidad.** Todas las cifras de los benchmarks y la afirmación de respuestas idénticas proceden del creador; PromptQuorum no hizo pruebas y no encontró mediciones independientes.",
          "**Madurez.** La versión 1.0.0 es la primera versión pública, y el lanzamiento del producto en Product Hunt está anunciado para el 8 de noviembre de 2026, así que no hay un historial a largo plazo de estabilidad ni de soporte.",
          "**Código y auditoría.** RAMen no tiene código fuente público ni auditoría de terceros; el acuerdo de licencia prohíbe la ingeniería inversa salvo donde la ley lo permita.",
          "**Requisitos.** No se publican RAM, disco ni versiones del sistema mínimos, y no existe compatibilidad con Mac con Intel, Linux en ARM ni teléfonos.",
          "**Detalles de licencia.** Se describió la comprobación de licencia de los planes de pago, pero no se examinó su tráfico exacto."
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
            "App": "[llama.cpp](/es/power-local-llm/llama-cpp-explained)",
            "Plataformas": "Mac, Windows, Linux",
            "Precio / licencia": "Gratis / MIT",
            "Diferencia clave": "El motor de código abierto sobre el que se construye RAMen; guardar y restaurar slots es manual"
          },
          {
            "App": "[Ollama](/es/power-local-llm/ollama-review)",
            "Plataformas": "Mac, Windows, Linux",
            "Precio / licencia": "Gratis / MIT",
            "Diferencia clave": "Ejecutor de modelos de código abierto con biblioteca de modelos y API local"
          },
          {
            "App": "[KoboldCpp](/es/power-local-llm/koboldcpp-review)",
            "Plataformas": "Mac, Windows, Linux",
            "Precio / licencia": "Gratis / AGPL-3.0",
            "Diferencia clave": "Fork de llama.cpp en un solo archivo con interfaz integrada de chat y escritura"
          }
        ],
        "note": "Confirma el precio, la licencia y las plataformas actuales de cada app en su propia página antes de elegir."
      },
      "faq": {
        "id": "faq",
        "title": "Preguntas frecuentes",
        "faqs": [
          {
            "q": "¿La lectura selectiva cambia las respuestas que da un modelo?",
            "a": "El creador dice que, cuando la selección cubre toda la conversación, RAMen escribe exactamente el mismo texto que la atención normal, y que dio las mismas respuestas que la atención completa en 54 de 54 pruebas con documentos largos de 16K a 64K tokens. Son pruebas del propio creador y no se han comprobado de forma independiente."
          },
          {
            "q": "¿Qué pasa con mis chats guardados si dejo de pagar?",
            "a": "RAMen continúa con el plan gratuito, que conserva los 3 chats guardados usados más recientemente y borra del disco las copias guardadas más antiguas a medida que se guardan chats nuevos (el creador se lo confirmó a PromptQuorum el 6 de noviembre de 2026). Las conversaciones en sí permanecen en tu app, porque RAMen guarda la memoria de trabajo del modelo, no el texto del chat; un chat antiguo sigue funcionando, solo que se vuelve a leer desde el principio, como con llama.cpp a secas."
          },
          {
            "q": "¿RAMen funciona sin conexión?",
            "a": "El creador dice que funciona sin conexión una vez que hay un modelo en el disco, y que los planes de pago siguen funcionando entre comprobaciones de licencia. La primera instalación y cualquier descarga de modelos necesitan conexión a internet."
          },
          {
            "q": "¿RAMen lo hace el equipo de llama.cpp?",
            "a": "No. NEOTECH Inc. hace RAMen y dice que está construido sobre llama.cpp, que se incluye con su licencia MIT; el proyecto llama.cpp es un proyecto de código abierto independiente."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredicto",
        "content": "RAMen ofrece una capa propietaria sobre llama.cpp que se puede probar gratis, que guarda los chats en disco, reanuda sesiones de agente en segundos y, según las mediciones del creador, acelera las conversaciones muy largas en equipos con NVIDIA RTX y Apple silicon. En contra, es una primera versión sin trayectoria, solo se instala desde una terminal, es de código cerrado, los planes de pago contactan con un servidor de licencias al arrancar y todas las cifras de rendimiento son del propio creador. Encaja con quienes ejecutan chats locales largos o agentes de programación y están dispuestos a probarlo en el plan gratuito; quien necesite una privacidad auditada o afirmaciones de velocidad verificadas debería esperar a resultados independientes."
      },
      "sources": {
        "id": "sources",
        "title": "Fuentes",
        "items": [
          "[Sitio web de RAMen](https://getramenai.com) — funciones, plataformas, planes y comandos de instalación, consultado el 6 de noviembre de 2026.",
          "[Cómo funciona RAMen](https://getramenai.com/how-it-works.html) — memoria de sesión, lectura selectiva, benchmarks y límites, consultado el 6 de noviembre de 2026.",
          "[Política de privacidad de RAMen](https://getramenai.com/privacy.html) — datos enviados, en vigor desde el 6 de noviembre de 2026, consultada el 6 de noviembre de 2026.",
          "[Acuerdo de licencia de RAMen](https://getramenai.com/terms.html) — términos de la licencia y límites de los planes, consultado el 6 de noviembre de 2026.",
          "[Versiones de RAMen en GitHub](https://github.com/MatthewLeibel/ramen-releases/releases/tag/v1.0.0) — paquetes de la versión 1.0.0 y fecha de publicación, consultado el 6 de noviembre de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[llama.cpp explicado](/es/power-local-llm/llama-cpp-explained) — el motor de código abierto que hay debajo de RAMen.",
          "[Reseña de Ollama](/es/power-local-llm/ollama-review) — un ejecutor de modelos locales de código abierto con API local.",
          "[Reseña de KoboldCpp](/es/power-local-llm/koboldcpp-review) — un fork de llama.cpp en un solo archivo con interfaz de chat.",
          "[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA local."
        ]
      }
    }
  },
  fr: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Overview & Reference",
    "heroImage": "/images/ramen-review-hero-fr.webp",
    "title": "Test de RAMen : mémoire de session locale pour llama.cpp, avec offre gratuite",
    "seoTitle": "Test de RAMen : mémoire de session IA locale et vitesse",
    "intro": "RAMen est une couche en ligne de commande propriétaire de NEOTECH Inc. qui exécute des modèles locaux avec sa propre version de llama.cpp, enregistre chaque session de chat ou d’agent sur disque pour la rouvrir en quelques secondes après un redémarrage, et affirme garder rapides les longues conversations. Elle fonctionne sur les Mac à puce Apple, Windows 10 et 11 et Linux, expose une API compatible OpenAI et propose une offre gratuite. Ce test présente ce que l’on installe, ce que cela coûte, où vont vos données et quelles affirmations reposent uniquement sur les mesures du fabricant.",
    "metaDescription": "Test de RAMen : mémoire de session propriétaire sur llama.cpp, Mac, Windows et Linux, offre gratuite, accélération annoncée des longs chats. Prix.",
    "twitterDescription": "Test de RAMen : une couche locale sur llama.cpp qui enregistre chaque chat sur disque et, selon le fabricant, accélère les longs chats, avec offre gratuite. Ce que confirment les pages du fabricant et ce qui reste non testé.",
    "audience": "Personnes qui utilisent des modèles locaux pour de longs chats ou des agents de code et veulent savoir ce que RAMen installe, coûte et envoie sur le réseau, et quelles affirmations de vitesse viennent du fabricant.",
    "readTime": "6 min de lecture",
    "educationalLevel": "Intermediate",
    "affiliateDisclosure": false,
    "primaryTerm": "test RAMen",
    "targetKeywords": [
      "test ramen ia locale",
      "ramen llama.cpp",
      "mémoire de session llm local",
      "llama.cpp enregistrer restaurer cache kv",
      "vitesse ia locale long chat",
      "getramenai",
      "ramen api compatible openai"
    ],
    "current_models_mentioned": [
      "Qwen3"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "NVIDIA RTX GPU",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**RAMen (version 1.0.0, publiée le 6 novembre 2026) est une couche locale propriétaire au-dessus de llama.cpp qui enregistre chaque chat sur disque de sorte que, selon le fabricant, il se rouvre en quelques secondes, avec une offre gratuite et des formules payantes.** La réserve décisive : chaque chiffre de vitesse provient des propres tests du fabricant et PromptQuorum n’a pas exécuté le logiciel.",
    "quickAnswerTop": {
      "fr": {
        "question": "RAMen exécute-t-il le modèle sur mon propre ordinateur ?",
        "answer": "Oui, selon le fabricant : RAMen lance sur votre machine un serveur llama.cpp intégré, et ses pages indiquent que les prompts, les fichiers et les sessions ne la quittent jamais. Les sources citent trois usages du réseau : le téléchargement de l’installation, les téléchargements de modèles depuis Hugging Face et, sur les formules payantes, une vérification de licence.",
        "bullets": [
          "Il parle l’API OpenAI, et `ramen connect` configure pour vous Cline, Continue, Aider, OpenCode et Open WebUI.",
          "Vous pouvez utiliser n’importe quel modèle GGUF, ou laisser `ramen start` en choisir un adapté à votre ordinateur et le télécharger.",
          "L’accélération des longs chats exige une carte NVIDIA RTX série 20 ou plus récente, ou un Mac à puce Apple ; l’enregistrement des sessions fonctionne sur toute machine prise en charge."
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "Réponse rapide",
        "anchor": "quick-answer"
      },
      {
        "label": "Qu’est-ce que RAMen ?",
        "anchor": "what-is-ramen"
      },
      {
        "label": "Où l’obtenir",
        "anchor": "get-it"
      },
      {
        "label": "Configuration requise",
        "anchor": "requirements"
      },
      {
        "label": "Pour bien démarrer",
        "anchor": "getting-started"
      },
      {
        "label": "Fonctions confirmées par les sources",
        "anchor": "key-features"
      },
      {
        "label": "Formules et tarifs",
        "anchor": "pricing"
      },
      {
        "label": "Flux de données et confidentialité",
        "anchor": "privacy"
      },
      {
        "label": "À qui s’adresse l’outil",
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
        "label": "À lire aussi",
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
            "text": "RAMen est une couche propriétaire en ligne de commande sur llama.cpp qui enregistre les chats d’IA locale sur disque et, selon le fabricant, accélère les longues conversations, avec une offre gratuite."
          },
          {
            "type": "plain-terms",
            "text": "Vous installez une commande, la lancez et dirigez votre agent de code ou votre appli de chat vers elle ; RAMen mémorise chaque conversation, si bien que vous n’attendez pas que le modèle la relise après un redémarrage."
          }
        ],
        "items": [
          "Maintenance : la version 1.0.0 a été publiée le 6 novembre 2026, jour de ce test, donc aucun avertissement de projet délaissé ne s’applique et le produit n’a pas encore d’historique.",
          "Coût : une offre gratuite à mémoire limitée, des abonnements payants et une offre de lancement à vie.",
          "Installation : une ligne de commande dans le terminal sur chaque système ; pas d’installateur à double-clic ni de fiche sur un app store.",
          "Données : le fabricant affirme que rien ne quitte votre machine, hormis l’installation, les téléchargements de modèles et la vérification de licence des formules payantes."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce test s’appuie sur getramenai.com, sa politique de confidentialité et son contrat de licence, les scripts d’installation et les données de version GitHub, consultés le 6 novembre 2026. PromptQuorum n’a ni installé, ni exécuté, ni mesuré RAMen : la vitesse, la stabilité et la qualité des réponses ne sont donc pas évaluées."
          }
        ]
      },
      "overview": {
        "id": "what-is-ramen",
        "title": "Qu’est-ce que RAMen ?",
        "content": [
          "**RAMen est un gestionnaire de sessions d’IA locale créé par NEOTECH Inc., placé devant llama.cpp, le moteur open source sur lequel reposent la plupart des outils de modèles locaux.** Il fournit sa propre version de llama.cpp (licence MIT) avec deux ajouts : il enregistre sur disque la mémoire de travail du modèle (le cache KV) de chaque conversation et la restaure quand la conversation reprend, et il ne lit que les parties d’une longue conversation qui comptent pour chaque nouveau mot.",
          "La page « comment ça marche » du fabricant note que llama.cpp dispose déjà de l’enregistrement et de la restauration par slot, et que de petits outils l’automatisent ; RAMen prétend le faire automatiquement pour chaque session, avec des vérifications que le cache enregistré correspond au modèle et aux réglages. Le logiciel est fermé, sous contrat de licence propriétaire ; le dépôt GitHub public n’héberge que les paquets de téléchargement."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Où l’obtenir",
        "content": [
          "**RAMen s’installe depuis le terminal avec une commande par système ; les paquets sont hébergés sur GitHub Releases et il n’existe pas d’installateur graphique.**"
        ],
        "columns": [
          "Option",
          "Comment l’obtenir"
        ],
        "rows": [
          {
            "Option": "Mac (Apple silicon)",
            "Comment l’obtenir": "Terminal : `curl -fsSL https://getramenai.com/install.sh | bash`"
          },
          {
            "Option": "Linux (x64)",
            "Comment l’obtenir": "Même commande ; choisit la version NVIDIA quand `nvidia-smi` fonctionne, sinon la version CPU"
          },
          {
            "Option": "Windows 10/11 (x64)",
            "Comment l’obtenir": "PowerShell : `irm https://getramenai.com/install.ps1 | iex`"
          },
          {
            "Option": "Téléchargement manuel",
            "Comment l’obtenir": "[RAMen sur GitHub Releases](https://github.com/MatthewLeibel/ramen-releases/releases/latest), .tar.gz ou .zip avec sommes de contrôle .sha256"
          },
          {
            "Option": "Téléphone",
            "Comment l’obtenir": "Aucune appli iPhone ou Android n’est mentionnée"
          },
          {
            "Option": "Site web",
            "Comment l’obtenir": "[getramenai.com](https://getramenai.com)"
          },
          {
            "Option": "Politique de confidentialité",
            "Comment l’obtenir": "[Politique de confidentialité de RAMen](https://getramenai.com/privacy.html) ; [Contrat de licence](https://getramenai.com/terms.html)"
          }
        ],
        "note": "Version testée : 1.0.0 (6 novembre 2026). Un terminal est nécessaire : après l’installation, `ramen start` télécharge un modèle si vous n’en avez aucun et lance RAMen en arrière-plan. L’installateur ajoute `~/.ramen/bin` au PATH de votre shell et garde les chats enregistrés dans `~/.context-engine` ; `rm -rf ~/.ramen` supprime le programme."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Configuration requise",
        "content": [
          "**Le fabricant n’indique aucun minimum de RAM, de disque ou de version de système ; la page dit seulement qu’il faut un ordinateur capable d’exécuter llama.cpp.**"
        ],
        "columns": [
          "Élément",
          "Ce que disent les sources"
        ],
        "rows": [
          {
            "Élément": "Mac",
            "Ce que disent les sources": "Apple silicon (M1 ou plus récent) uniquement ; l’installateur refuse les Mac Intel"
          },
          {
            "Élément": "Windows",
            "Ce que disent les sources": "Windows 10 et 11, 64 bits ; version CPU, avec une version NVIDIA quand un GPU NVIDIA est détecté"
          },
          {
            "Élément": "Linux",
            "Ce que disent les sources": "x64 uniquement, version CPU ou NVIDIA ; l’installateur refuse pour l’instant Linux ARM"
          },
          {
            "Élément": "Accélération des longs chats",
            "Ce que disent les sources": "Exige une carte NVIDIA RTX série 20 ou plus récente, ou un Mac à puce Apple ; elle n’est pas revendiquée pour les machines CPU seul"
          },
          {
            "Élément": "Modèles",
            "Ce que disent les sources": "N’importe quel modèle GGUF, ou un modèle que RAMen choisit et télécharge ; les licences des modèles sont celles de leurs auteurs"
          },
          {
            "Élément": "Compte",
            "Ce que disent les sources": "Aucun pour l’offre gratuite ; les formules payantes utilisent une clé de licence de la boutique Polar"
          }
        ]
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Pour bien démarrer",
        "content": [
          "**Les étapes suivent les pages du fabricant ; PromptQuorum ne les a pas exécutées.**"
        ],
        "numberedItems": [
          {
            "title": "Lancer l’installateur",
            "whyItMatters": "Utilisez la ligne de commande de votre système ; les scripts téléchargent un paquet et vérifient sa somme de contrôle SHA-256 avant l’installation."
          },
          {
            "title": "Démarrer RAMen",
            "whyItMatters": "`ramen start` trouve un modèle adapté à votre ordinateur, le télécharge depuis Hugging Face et s’exécute en arrière-plan, ou vous pointez vers un fichier GGUF que vous avez déjà."
          },
          {
            "title": "Connecter vos applis",
            "whyItMatters": "`ramen connect cline` (ou continue, aider, opencode, open-webui) configure l’outil ; tout ce qui parle l’API OpenAI peut utiliser le point d’accès local."
          },
          {
            "title": "N’activer une formule payante que si vous en voulez une",
            "whyItMatters": "`ramen activate YOUR-KEY` débloque les fonctions payantes ; `ramen deactivate` libère l’un des ordinateurs liés à une clé."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Fonctions confirmées par les sources",
        "content": [
          "**Chaque point ci-dessous est la description du fabricant ; les chiffres de vitesse et de qualité sont ses propres mesures, pas des tests indépendants.**"
        ],
        "items": [
          "**Mémoire de session.** Le cache KV de chaque conversation est enregistré sur disque au fil de l’eau et restauré quand la conversation reprend, même après un redémarrage ; de nombreux chats et agents se partagent quelques slots GPU actifs et les autres attendent sur disque. Le fabricant indique qu’un chat de 70 082 jetons sur un Mac mini M2 Pro avec Qwen3 4B se rouvre en 3.7 secondes, au lieu de 12 minutes 47 secondes de relecture.",
          "**Lecture sélective.** Au lieu de lire toute la mémoire pour chaque nouveau mot, RAMen garde un résumé de chaque bloc et lit l’équivalent d’environ 8 000 jetons, plus le début et la partie la plus récente de la conversation, selon une méthode qui, d’après le fabricant, s’appuie sur des travaux de recherche sur l’attention parcimonieuse sensible à la requête (Quest, 2024). Elle ne s’active d’elle-même qu’au-delà d’une longueur où elle est plus rapide sur votre machine, entre 16K et environ 43K jetons.",
          "**Benchmark du fabricant.** Sur une NVIDIA RTX A6000 avec Qwen3 32B et une conversation de 87K jetons, le fabricant a mesuré 20.4 jetons par seconde contre 8.4 pour llama.cpp classique, et sur une NVIDIA L4 avec Qwen3 4B à 128K jetons, 42.2 contre 9.1 ; le gain est faible en dessous d’environ 30K à 40K jetons sur une carte NVIDIA rapide.",
          "**Plusieurs agents, un seul GPU.** Passer d’un agent à l’autre reprend chacun là où il s’était arrêté ; le fabricant cite 99.7 % de l’historique de chaque agent réutilisé quand trois agents se partagent un GPU.",
          "**Limites indiquées par le fabricant.** La lecture sélective accélère l’écriture, pas la première lecture d’un nouveau long prompt ; elle ne se combine pas encore avec les modèles brouillons (décodage spéculatif) ; les modèles à fenêtre glissante y gagnent peu en vitesse."
        ]
      },
      "pricing": {
        "id": "pricing",
        "itemHeadings": true,
        "title": "Formules et tarifs",
        "content": [
          "**RAMen propose une offre gratuite et des abonnements payants vendus via la boutique Polar ; chaque installation démarre avec 14 jours de toutes les fonctions, sans carte bancaire.**"
        ],
        "columns": [
          "Formule",
          "Prix",
          "Ce qu’elle inclut"
        ],
        "rows": [
          {
            "Formule": "Gratuite",
            "Prix": "0 $, sans date de fin",
            "Ce qu’elle inclut": "Mémorise les 3 derniers chats, un chat à la fois ; fonctionne avec vos applis"
          },
          {
            "Formule": "Pro",
            "Prix": "3,99 $ par mois ou 29 $ par an",
            "Ce qu’elle inclut": "Mémorise chaque chat et session d’agent, plusieurs agents sur un GPU, longs chats gardés rapides, jusqu’à 3 ordinateurs"
          },
          {
            "Formule": "Team",
            "Prix": "9,99 $ par personne et par mois, à partir de 3 personnes",
            "Ce qu’elle inclut": "Pro pour toute l’équipe, postes transférables, support prioritaire par e-mail"
          },
          {
            "Formule": "Server",
            "Prix": "149 $ par serveur et par mois",
            "Ce qu’elle inclut": "Une machine GPU au service d’une équipe, une clé par personne, usage par personne, métriques Prometheus"
          },
          {
            "Formule": "Enterprise",
            "Prix": "Sur demande",
            "Ce qu’elle inclut": "Licences hors ligne pour machines sans internet, factures, bons de commande, contrat de support"
          }
        ],
        "note": "Le site annonce aussi une offre de lancement, Pro à vie pour 19,99 $ en une fois pour les 1 000 premiers acheteurs. Les prix sont en dollars américains et la taxe sur les ventes est gérée au paiement ; vérifiez-les sur le site du fabricant avant d’acheter. Si une licence payante prend fin, le contrat de licence indique que RAMen continue de fonctionner avec l’offre gratuite."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flux de données et confidentialité",
        "content": [
          "**La politique de confidentialité (en vigueur depuis le 6 novembre 2026) indique que RAMen s’exécute sur votre ordinateur et que vos prompts, fichiers, conversations et modèles y restent.** Elle énumère ce que RAMen envoie : sur les formules payantes, au démarrage, la clé de licence, l’identifiant de boutique et une étiquette de machine anonyme (la plateforme plus un court code dérivé de la machine, jamais son nom) au prestataire de paiement Polar ; et, quand `ramen start` télécharge un modèle, une connexion à Hugging Face, qui voit votre adresse internet et le fichier demandé. La politique précise qu’il n’y a ni analytique, ni rapport de plantage, ni suivi dans le logiciel.",
          "Le site web compte les visites avec Cloudflare Web Analytics sans cookies et est hébergé sur GitHub Pages. Les achats passent par Polar, qui transmet au fabricant votre nom, votre adresse e-mail, votre pays et ce que vous avez acheté. Le formulaire de rappel de lancement du site enregistre votre adresse e-mail chez Cloudflare. La page d’accueil indique que le logiciel continue de fonctionner hors ligne entre deux vérifications de licence, et la formule Enterprise propose des licences hors ligne."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce sont des déclarations du fabricant, pas des résultats d’audit, et PromptQuorum n’a pas inspecté le trafic réseau. Le logiciel est fermé, de sorte que ces affirmations ne peuvent pas être vérifiées dans le code."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "À qui s’adresse l’outil",
        "items": [
          "**Les utilisateurs d’agents de code** qui font tourner Cline, Continue, Aider ou OpenCode avec un modèle local et perdent du temps quand une longue session doit être relue après un redémarrage.",
          "**Les propriétaires d’une machine NVIDIA RTX ou Apple silicon** qui travaillent avec de très longues conversations, là où le fabricant indique les gains les plus importants.",
          "**Les acheteurs prudents** qui veulent essayer une offre gratuite et un essai de 14 jours avant de payer quoi que ce soit."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Ce que nous n’avons pas pu vérifier",
        "items": [
          "**Vitesse et qualité.** Tous les chiffres de benchmark et l’affirmation de réponses identiques viennent du fabricant ; PromptQuorum n’a effectué aucun test et n’a trouvé aucune mesure indépendante.",
          "**Maturité.** La version 1.0.0 est la première version publique, et le lancement du produit sur Product Hunt est annoncé pour le 8 novembre 2026 : il n’existe donc aucun historique à long terme sur la stabilité ou le support.",
          "**Code source et audit.** Il n’y a pas de code source public pour RAMen ni d’audit par un tiers ; le contrat de licence interdit la rétro-ingénierie, sauf dans la mesure où la loi l’autorise.",
          "**Configuration requise.** Aucun minimum de RAM, de disque ou de version de système n’est publié, et il n’existe aucune prise en charge des Mac Intel, de Linux ARM ou des téléphones.",
          "**Détails de licence.** La vérification de licence des formules payantes est décrite, mais son trafic exact n’a pas été examiné."
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
          "Différence principale"
        ],
        "rows": [
          {
            "Appli": "[llama.cpp](/fr/power-local-llm/llama-cpp-explained)",
            "Plateformes": "Mac, Windows, Linux",
            "Prix / licence": "Gratuit / MIT",
            "Différence principale": "Le moteur open source sur lequel repose RAMen ; l’enregistrement et la restauration par slot sont manuels"
          },
          {
            "Appli": "[Ollama](/fr/power-local-llm/ollama-review)",
            "Plateformes": "Mac, Windows, Linux",
            "Prix / licence": "Gratuit / MIT",
            "Différence principale": "Lanceur de modèles open source avec bibliothèque de modèles et API locale"
          },
          {
            "Appli": "[KoboldCpp](/fr/power-local-llm/koboldcpp-review)",
            "Plateformes": "Mac, Windows, Linux",
            "Prix / licence": "Gratuit / AGPL-3.0",
            "Différence principale": "Fork llama.cpp en un seul fichier avec interface de chat et d’écriture intégrée"
          }
        ],
        "note": "Vérifiez le prix, la licence et les plateformes actuels de chaque appli sur sa propre page avant de choisir."
      },
      "faq": {
        "id": "faq",
        "title": "Questions fréquentes",
        "faqs": [
          {
            "q": "La lecture sélective change-t-elle les réponses d’un modèle ?",
            "a": "Le fabricant affirme que, lorsque la sélection couvre toute la conversation, RAMen écrit exactement le même texte qu’une attention classique, et qu’il a donné les mêmes réponses qu’une attention complète dans 54 tests sur 54 de documents longs de 16K à 64K jetons. Ce sont les tests du fabricant et ils n’ont pas été vérifiés de façon indépendante."
          },
          {
            "q": "Que deviennent mes chats enregistrés si j’arrête de payer ?",
            "a": "RAMen continue avec l’offre gratuite, qui conserve les 3 chats enregistrés utilisés le plus récemment et efface du disque les copies enregistrées plus anciennes à mesure que de nouveaux chats sont enregistrés (le fabricant l’a confirmé à PromptQuorum le 6 novembre 2026). Les conversations elles-mêmes restent dans votre application, car RAMen enregistre la mémoire de travail du modèle, pas le texte du chat ; un chat plus ancien fonctionne donc toujours, il est simplement relu depuis le début, comme avec llama.cpp seul."
          },
          {
            "q": "RAMen fonctionne-t-il hors ligne ?",
            "a": "Le fabricant affirme qu’il fonctionne hors ligne dès qu’un modèle est sur le disque, et que les formules payantes continuent de fonctionner entre deux vérifications de licence. La première installation et tout téléchargement de modèle exigent une connexion internet."
          },
          {
            "q": "RAMen est-il développé par l’équipe de llama.cpp ?",
            "a": "Non. NEOTECH Inc. développe RAMen et indique qu’il repose sur llama.cpp, fourni avec sa licence MIT ; le projet llama.cpp lui-même est un projet open source distinct."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "RAMen propose une couche propriétaire, gratuite à essayer, sur llama.cpp qui enregistre les chats sur disque, reprend les sessions d’agent en quelques secondes et, selon les mesures du fabricant, accélère les très longues conversations sur les machines NVIDIA RTX et Apple silicon. En contrepartie, c’est une première version sans historique, elle ne s’installe que depuis un terminal, elle est fermée, les formules payantes contactent un serveur de licences au démarrage et chaque chiffre de performance est celui du fabricant. Elle convient aux personnes qui mènent de longs chats locaux ou des agents de code et acceptent de la tester avec l’offre gratuite ; qui exige une confidentialité auditée ou des affirmations de vitesse vérifiées doit attendre des résultats indépendants."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Site web de RAMen](https://getramenai.com) — fonctions, plateformes, formules et commandes d’installation, consulté le 6 novembre 2026.",
          "[Comment fonctionne RAMen](https://getramenai.com/how-it-works.html) — mémoire de session, lecture sélective, benchmarks et limites, consulté le 6 novembre 2026.",
          "[Politique de confidentialité de RAMen](https://getramenai.com/privacy.html) — données envoyées, en vigueur depuis le 6 novembre 2026, consultée le 6 novembre 2026.",
          "[Contrat de licence de RAMen](https://getramenai.com/terms.html) — conditions de licence et limites des formules, consulté le 6 novembre 2026.",
          "[RAMen sur GitHub Releases](https://github.com/MatthewLeibel/ramen-releases/releases/tag/v1.0.0) — paquets de la version 1.0.0 et date de publication, consultés le 6 novembre 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "À lire aussi",
        "items": [
          "[llama.cpp expliqué](/fr/power-local-llm/llama-cpp-explained) — le moteur open source qui se trouve sous RAMen.",
          "[Test d’Ollama](/fr/power-local-llm/ollama-review) — un lanceur de modèles locaux open source avec API locale.",
          "[Test de KoboldCpp](/fr/power-local-llm/koboldcpp-review) — un fork llama.cpp en un seul fichier avec interface de chat.",
          "[Répertoire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale."
        ]
      }
    }
  },
  ja: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Overview & Reference",
    "heroImage": "/images/ramen-review-hero-ja.webp",
    "title": "RAMenレビュー：llama.cpp用ローカルセッションメモリ、無料プランあり",
    "seoTitle": "RAMenレビュー：ローカルAIのセッション記憶と高速化",
    "intro": "RAMenは、NEOTECH Inc.が提供するプロプライエタリなコマンドライン層です。独自ビルドのllama.cppでローカルモデルを動かし、チャットやエージェントのセッションをすべてディスクに保存して、再起動後も数秒で開き直せます。メーカーによると、長い会話も速いまま保てます。Apple siliconのMac、Windows 10と11、Linuxで動作し、OpenAI互換APIを備え、無料プランがあります。このレビューでは、インストールするもの、費用、データの行き先、そしてメーカー自身の計測だけに基づく主張を扱います。",
    "metaDescription": "RAMenのレビュー。Mac・Windows・Linux対応、llama.cpp上の独自セッション記憶、無料プラン、メーカーが主張する長いチャットの高速化。導入、料金、プライバシー。",
    "twitterDescription": "RAMenレビュー：すべてのチャットをディスクに保存し、メーカーによると長いチャットを速くするローカルのllama.cpp層で、無料プランあり。メーカーのページが確認していることと、未検証の点。",
    "audience": "長いチャットやコーディングエージェントでローカルモデルを動かし、RAMenが何をインストールし、いくらかかり、ネットワークに何を送るのか、どの速度の主張がメーカー自身のものなのかを知りたい方。",
    "readTime": "6分で読める",
    "educationalLevel": "Intermediate",
    "affiliateDisclosure": false,
    "primaryTerm": "RAMen レビュー",
    "targetKeywords": [
      "ramen ローカルai レビュー",
      "ramen llama.cpp",
      "ローカルllm セッション記憶",
      "llama.cpp kvキャッシュ 保存 復元",
      "ローカルai 長いチャット 速度",
      "getramenai",
      "ramen openai互換 api"
    ],
    "current_models_mentioned": [
      "Qwen3"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "NVIDIA RTX GPU",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**RAMen（バージョン1.0.0、2026年11月6日公開）は、llama.cpp上で動くプロプライエタリなローカル層で、各チャットをディスクに保存し、メーカーによると数秒で開き直せます。無料プランと有料プランがあります。**最大の注意点は、速度の数値がすべてメーカー自身のテストによるもので、PromptQuorumはこのソフトウェアを実行していないことです。",
    "quickAnswerTop": {
      "ja": {
        "question": "RAMenはモデルを自分のパソコン上で動かしますか？",
        "answer": "はい、メーカーによると動かします。RAMenは同梱のllama.cppサーバーを自分のマシン上で起動し、メーカーのページによるとプロンプト、ファイル、セッションはマシンの外に出ません。情報源が挙げるネットワーク通信は3つで、インストール時のダウンロード、Hugging Faceからのモデルのダウンロード、そして有料プランでのライセンス確認です。",
        "bullets": [
          "OpenAI APIに対応し、`ramen connect`でCline、Continue、Aider、OpenCode、Open WebUIを自動で設定できます。",
          "好きなGGUFモデルを使えるほか、`ramen start`でパソコンに合うモデルを選んでダウンロードさせることもできます。",
          "長いチャットの高速化にはNVIDIA RTX 20シリーズ以降のカードかApple siliconのMacが必要で、セッションの保存は対応するすべてのマシンで使えます。"
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "クイックアンサー",
        "anchor": "quick-answer"
      },
      {
        "label": "RAMenとは",
        "anchor": "what-is-ramen"
      },
      {
        "label": "入手方法",
        "anchor": "get-it"
      },
      {
        "label": "動作要件",
        "anchor": "requirements"
      },
      {
        "label": "使い始めるには",
        "anchor": "getting-started"
      },
      {
        "label": "情報源で確認できた機能",
        "anchor": "key-features"
      },
      {
        "label": "プランと料金",
        "anchor": "pricing"
      },
      {
        "label": "データの流れとプライバシー",
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
        "label": "競合・代替アプリ",
        "anchor": "vs-alternatives"
      },
      {
        "label": "よくある質問",
        "anchor": "faq"
      },
      {
        "label": "総評",
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
            "text": "RAMenは、llama.cpp上で動くプロプライエタリなコマンドライン層で、ローカルAIのチャットをディスクに保存し、メーカーによると長い会話を速くします。無料プランがあります。"
          },
          {
            "type": "plain-terms",
            "text": "コマンドを1つインストールして起動し、コーディングエージェントやチャットアプリをそこに向けます。RAMenが各会話を覚えているので、再起動後にモデルが会話を読み直すのを待たずに済みます。"
          }
        ],
        "items": [
          "メンテナンス：バージョン1.0.0は、このレビューと同じ2026年11月6日に公開されました。そのため更新停止の警告は付きませんが、製品にはまだ実績がありません。",
          "費用：メモリに制限のある無料プランのほか、有料サブスクリプションと発売記念の買い切りオファーがあります。",
          "インストール：どのシステムでもターミナルの1行コマンドで行います。ダブルクリックのインストーラーも、アプリストアの掲載もありません。",
          "データ：メーカーによると、インストール、モデルのダウンロード、有料プランのライセンス確認を除き、マシンの外には何も送られません。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "このレビューは、2026年11月6日に確認したgetramenai.com、そのプライバシーポリシーとライセンス契約、インストールスクリプト、GitHubのリリースデータに基づきます。PromptQuorumはRAMenをインストール・実行・ベンチマークしていないため、速度、安定性、回答品質は評価していません。"
          }
        ]
      },
      "overview": {
        "id": "what-is-ramen",
        "title": "RAMenとは",
        "content": [
          "**RAMenは、NEOTECH Inc.が開発したローカルAIのセッション管理ツールで、多くのローカルモデル向けツールが土台にしているオープンソースのエンジン、llama.cppの手前に置いて使います。**llama.cpp（MITライセンス）の独自ビルドに2つの機能を加えています。1つは、会話ごとにモデルの作業メモリ（KVキャッシュ）をディスクに保存し、会話が続くときに復元すること。もう1つは、長い会話のうち新しい1語ごとに必要な部分だけを読むことです。",
          "メーカーの仕組みのページには、llama.cppにはすでにスロットの保存と復元があり、それを自動化する小さなツールもあると書かれています。RAMenの主張は、それをすべてのセッションで自動的に行い、保存したキャッシュがモデルと設定に合っているかを確認する点にあります。ソフトウェアはプロプライエタリなライセンス契約に基づくクローズドソースで、公開GitHubリポジトリはダウンロード用パッケージを置いているだけです。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "入手方法",
        "content": [
          "**RAMenは、システムごとに1つのコマンドでターミナルからインストールします。パッケージはGitHub Releasesに置かれ、グラフィカルなインストーラーはありません。**"
        ],
        "columns": [
          "項目",
          "入手方法"
        ],
        "rows": [
          {
            "項目": "Mac（Apple silicon）",
            "入手方法": "ターミナル：`curl -fsSL https://getramenai.com/install.sh | bash`"
          },
          {
            "項目": "Linux（x64）",
            "入手方法": "同じコマンド。`nvidia-smi`が動けばNVIDIA版、そうでなければCPU版を選びます"
          },
          {
            "項目": "Windows 10/11（x64）",
            "入手方法": "PowerShell：`irm https://getramenai.com/install.ps1 | iex`"
          },
          {
            "項目": "手動ダウンロード",
            "入手方法": "[GitHubのRAMenリリース](https://github.com/MatthewLeibel/ramen-releases/releases/latest)、.sha256チェックサム付きの.tar.gzまたは.zip"
          },
          {
            "項目": "スマートフォン",
            "入手方法": "iPhoneやAndroid向けアプリへの言及はありません"
          },
          {
            "項目": "公式サイト",
            "入手方法": "[getramenai.com](https://getramenai.com)"
          },
          {
            "項目": "プライバシーポリシー",
            "入手方法": "[RAMenのプライバシーポリシー](https://getramenai.com/privacy.html)、[ライセンス契約](https://getramenai.com/terms.html)"
          }
        ],
        "note": "確認したバージョン：1.0.0（2026年11月6日）。ターミナルが必要です。インストール後、`ramen start`はモデルがなければダウンロードし、RAMenをバックグラウンドで起動します。インストーラーは`~/.ramen/bin`をシェルのPATHに追加し、保存したチャットを`~/.context-engine`に置きます。`rm -rf ~/.ramen`でプログラムを削除できます。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "動作要件",
        "content": [
          "**メーカーは、最小RAM、ディスク容量、OSバージョンの数値を示していません。ページにあるのは、llama.cppが動くパソコンが必要という記載だけです。**"
        ],
        "columns": [
          "項目",
          "情報源の記載"
        ],
        "rows": [
          {
            "項目": "Mac",
            "情報源の記載": "Apple silicon（M1以降）のみ。インストーラーはIntel Macを受け付けません"
          },
          {
            "項目": "Windows",
            "情報源の記載": "Windows 10と11の64ビット。CPU版があり、NVIDIA GPUを検出するとNVIDIA版になります"
          },
          {
            "項目": "Linux",
            "情報源の記載": "x64のみ、CPU版またはNVIDIA版。インストーラーは現時点でARM Linuxを受け付けません"
          },
          {
            "項目": "長いチャットの高速化",
            "情報源の記載": "NVIDIA RTX 20シリーズ以降のカードかApple siliconのMacが必要。CPUのみのマシンでは主張されていません"
          },
          {
            "項目": "モデル",
            "情報源の記載": "任意のGGUFモデル、またはRAMenが選んでダウンロードするモデル。モデルのライセンスは各モデル開発元のものです"
          },
          {
            "項目": "アカウント",
            "情報源の記載": "無料プランでは不要。有料プランはPolarストアのライセンスキーを使います"
          }
        ]
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "使い始めるには",
        "content": [
          "**手順はメーカーのページに沿ったもので、PromptQuorumは実行していません。**"
        ],
        "numberedItems": [
          {
            "title": "インストーラーを実行する",
            "whyItMatters": "お使いのシステム用の1行コマンドを使います。スクリプトはパッケージをダウンロードし、インストール前にSHA-256チェックサムを検証します。"
          },
          {
            "title": "RAMenを起動する",
            "whyItMatters": "`ramen start`は、パソコンに合うモデルを探してHugging Faceからダウンロードし、バックグラウンドで動作します。すでにあるGGUFファイルを指定することもできます。"
          },
          {
            "title": "アプリを接続する",
            "whyItMatters": "`ramen connect cline`（またはcontinue、aider、opencode、open-webui）でツールを設定します。OpenAI APIに対応するものなら、ローカルのエンドポイントを使えます。"
          },
          {
            "title": "有料プランは使いたい場合だけ有効にする",
            "whyItMatters": "`ramen activate YOUR-KEY`で有料機能が使えるようになり、`ramen deactivate`でキー1つあたりのパソコンの枠を1台分空けられます。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "情報源で確認できた機能",
        "content": [
          "**以下の項目はすべてメーカーの説明です。速度と品質の数値はメーカー自身の計測であり、独立したテストではありません。**"
        ],
        "items": [
          "**セッションメモリ。**各会話のKVキャッシュは作業中にディスクへ保存され、会話が続くときに、再起動後でも復元されます。多数のチャットとエージェントが少数のGPUスロットを共有し、残りはディスクで待機します。メーカーの報告では、Mac mini M2 ProでQwen3 4Bを使った70,082トークンのチャットが、12分47秒かかる読み直しの代わりに3.7秒で開き直せます。",
          "**選択的な読み取り。**新しい1語ごとにメモリ全体を読む代わりに、RAMenは各ブロックの要約を保持し、約8,000トークン分に加えて会話の冒頭と直近の部分を読みます。メーカーによると、これはクエリ対応のスパースアテンションの研究（Quest、2024年）に基づいています。お使いのマシンで速くなる長さを超えたときだけ自動で有効になり、その長さは16Kから約43Kトークンの間です。",
          "**メーカーのベンチマーク。**NVIDIA RTX A6000でQwen3 32Bと87Kトークンの会話を使った場合、メーカーの計測では通常のllama.cppの毎秒8.4トークンに対して20.4トークン、NVIDIA L4でQwen3 4Bと128Kトークンの場合は9.1に対して42.2でした。高速なNVIDIAカードでは、およそ30Kから40Kトークンを下回ると効果は小さくなります。",
          "**多数のエージェントを1つのGPUで。**エージェントを切り替えると、それぞれが止まった位置から再開します。メーカーは、3つのエージェントが1つのGPUを共有するとき、各エージェントの履歴の99.7パーセントが再利用されるとしています。",
          "**メーカーが示す制限。**選択的な読み取りが速くするのは書き出しであり、新しい長いプロンプトの最初の読み取りではありません。ドラフトモデル（投機的デコーディング）とはまだ併用できません。スライディングウィンドウ型のモデルでは速度の向上は小さくなります。"
        ]
      },
      "pricing": {
        "id": "pricing",
        "itemHeadings": true,
        "title": "プランと料金",
        "content": [
          "**RAMenには無料プランと、Polarストアで販売される有料サブスクリプションがあります。どのインストールも、最初の14日間はカード不要で全機能を使えます。**"
        ],
        "columns": [
          "プラン",
          "価格",
          "内容"
        ],
        "rows": [
          {
            "プラン": "Free",
            "価格": "$0、期限なし",
            "内容": "直近3件のチャットを記憶し、チャットは同時に1つだけ。アプリとの連携は可能"
          },
          {
            "プラン": "Pro",
            "価格": "月$3.99または年$29",
            "内容": "すべてのチャットとエージェントセッションを記憶、1つのGPUで多数のエージェント、長いチャットを速いまま維持、最大3台のパソコン"
          },
          {
            "プラン": "Team",
            "価格": "1人あたり月$9.99、3人から",
            "内容": "チーム全員がPro、席の移動が可能、優先メールサポート"
          },
          {
            "プラン": "Server",
            "価格": "サーバー1台あたり月$149",
            "内容": "チームに提供するGPUマシン1台、1人1キー、1人ごとの利用状況、Prometheusメトリクス"
          },
          {
            "プラン": "Enterprise",
            "価格": "要問い合わせ",
            "内容": "インターネットに接続しないマシン向けのオフラインライセンス、請求書、発注書、サポート契約"
          }
        ],
        "note": "サイトでは発売記念オファーとして、最初の1,000人に限り、Proを一度きり$19.99で永久に使える提案も掲載しています。価格は米ドルで、売上税は決済時に処理されます。購入前にメーカーのサイトで確認してください。有料ライセンスが終了した場合、ライセンス契約によるとRAMenは無料プランで動作を続けます。"
      },
      "privacy": {
        "id": "privacy",
        "title": "データの流れとプライバシー",
        "content": [
          "**プライバシーポリシー（2026年11月6日施行）によると、RAMenは自分のパソコン上で動作し、プロンプト、ファイル、会話、モデルはそこにとどまります。**RAMenが送信するものも挙げられています。有料プランでは、起動時にライセンスキー、ストアの識別子、匿名のマシンラベル（プラットフォームと、マシンから導出した短いコード。マシン名は含みません）を決済事業者のPolarに送ります。また、`ramen start`がモデルをダウンロードするときはHugging Faceに接続し、Hugging Faceはインターネット上のアドレスと要求されたファイルを把握します。ポリシーは、ソフトウェアにアナリティクス、クラッシュレポート、トラッキングはないとしています。",
          "ウェブサイトはCloudflare Web Analyticsでクッキーなしに訪問数を計測し、GitHub Pagesでホストされています。購入はPolarを通じて行われ、Polarは購入者の氏名、メールアドレス、国、購入内容をメーカーに提供します。サイトの発売リマインダーのフォームは、メールアドレスをCloudflareに保存します。ホームページには、ライセンス確認の合間はソフトウェアがオフラインでも動き続けるとあり、Enterpriseプランではオフラインライセンスを提供しています。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "これらはメーカーの説明であり、監査結果ではありません。PromptQuorumはネットワーク通信を検査していません。ソフトウェアはクローズドソースのため、主張をコードと照合して確認することはできません。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "おすすめできる人",
        "items": [
          "**コーディングエージェントのユーザー**：Cline、Continue、Aider、OpenCodeをローカルモデルで使い、再起動後に長いセッションを読み直す時間がもったいないと感じる方。",
          "**NVIDIA RTXまたはApple siliconのマシンの所有者**：非常に長い会話を扱う方。メーカーが最大の効果を報告しているのはこのケースです。",
          "**慎重に検討したい方**：料金を払う前に、無料プランと14日間のトライアルで試したい方。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "確認できなかった点",
        "items": [
          "**速度と品質。**ベンチマークの数値と回答が同一であるという主張はすべてメーカーによるものです。PromptQuorumはテストを行っておらず、独立した計測も見つかりませんでした。",
          "**成熟度。**バージョン1.0.0は最初の公開リリースで、製品のProduct Huntでのローンチは2026年11月8日に予定されていると告知されています。安定性やサポートの長期的な実績はありません。",
          "**ソースと監査。**RAMenの公開ソースコードはなく、第三者による監査もありません。ライセンス契約は、法律で認められる場合を除き、リバースエンジニアリングを禁じています。",
          "**動作要件。**最小RAM、ディスク容量、OSバージョンは公表されておらず、Intel Mac、ARM Linux、スマートフォンには対応していません。",
          "**ライセンスの詳細。**有料プランのライセンス確認は説明されていましたが、その通信の中身は調べていません。"
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "競合・代替アプリ",
        "columns": [
          "アプリ",
          "対応環境",
          "価格／ライセンス",
          "主な違い"
        ],
        "rows": [
          {
            "アプリ": "[llama.cpp](/ja/power-local-llm/llama-cpp-explained)",
            "対応環境": "Mac、Windows、Linux",
            "価格／ライセンス": "無料／MIT",
            "主な違い": "RAMenの土台となるオープンソースのエンジン。スロットの保存と復元は手動"
          },
          {
            "アプリ": "[Ollama](/ja/power-local-llm/ollama-review)",
            "対応環境": "Mac、Windows、Linux",
            "価格／ライセンス": "無料／MIT",
            "主な違い": "モデルライブラリとローカルAPIを備えたオープンソースのモデル実行ツール"
          },
          {
            "アプリ": "[KoboldCpp](/ja/power-local-llm/koboldcpp-review)",
            "対応環境": "Mac、Windows、Linux",
            "価格／ライセンス": "無料／AGPL-3.0",
            "主な違い": "チャットと執筆用のインターフェースを内蔵した、単一ファイルのllama.cppフォーク"
          }
        ],
        "note": "選ぶ前に、各アプリの現在の価格、ライセンス、対応環境を、それぞれのページで確認してください。"
      },
      "faq": {
        "id": "faq",
        "title": "よくある質問",
        "faqs": [
          {
            "q": "選択的な読み取りは、モデルの回答を変えますか？",
            "a": "メーカーによると、選択が会話全体をカバーする場合、RAMenは通常のアテンションとまったく同じ文章を書き出します。また、16Kから64Kトークンの長文ドキュメントのテスト54件すべてで、フルアテンションと同じ回答になったとしています。これらはメーカー自身のテストで、独立した確認は行われていません。"
          },
          {
            "q": "支払いをやめると、保存したチャットはどうなりますか？",
            "a": "RAMenは無料プランで動作を続けます。無料プランでは、最近使った保存済みチャット3件が保持され、新しいチャットが保存されるたびに、それより古い保存コピーがディスクから削除されます（メーカーが2026年11月6日にPromptQuorumへ確認）。会話そのものはアプリに残ります。RAMenが保存するのはチャットの文章ではなくモデルの作業メモリだからです。そのため古いチャットも引き続き使えますが、素のllama.cppと同様に最初から読み直されます。"
          },
          {
            "q": "RAMenはオフラインで動きますか？",
            "a": "メーカーによると、モデルがディスクにあればオフラインで動作し、有料プランもライセンス確認の合間は動き続けます。最初のインストールとモデルのダウンロードにはインターネット接続が必要です。"
          },
          {
            "q": "RAMenはllama.cppチームが作っていますか？",
            "a": "いいえ。RAMenはNEOTECH Inc.が開発しており、同社によるとllama.cppを土台にしていて、llama.cppはMITライセンスのまま同梱されています。llama.cppプロジェクト自体は別のオープンソースプロジェクトです。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "総評",
        "content": "RAMenは、llama.cpp上で無料で試せるプロプライエタリな層で、チャットをディスクに保存し、エージェントのセッションを数秒で再開します。メーカーの計測では、NVIDIA RTXやApple siliconのマシンでの非常に長い会話も速くなります。一方で、最初のリリースで実績がなく、インストールはターミナルからのみで、クローズドソースであり、有料プランは起動時にライセンスサーバーへ接続し、性能の数値はすべてメーカー自身のものです。長いローカルチャットやコーディングエージェントを動かし、無料プランで試してみる意思のある方に向いています。監査済みのプライバシーや検証済みの速度の主張が必要な方は、独立した結果が出るのを待ってください。"
      },
      "sources": {
        "id": "sources",
        "title": "情報源",
        "items": [
          "[RAMenのウェブサイト](https://getramenai.com) — 機能、対応環境、プラン、インストールコマンド。2026年11月6日確認。",
          "[RAMenの仕組み](https://getramenai.com/how-it-works.html) — セッションメモリ、選択的な読み取り、ベンチマーク、制限。2026年11月6日確認。",
          "[RAMenのプライバシーポリシー](https://getramenai.com/privacy.html) — 送信されるデータ。2026年11月6日施行、2026年11月6日確認。",
          "[RAMenのライセンス契約](https://getramenai.com/terms.html) — ライセンス条件とプランの制限。2026年11月6日確認。",
          "[GitHubのRAMenリリース](https://github.com/MatthewLeibel/ramen-releases/releases/tag/v1.0.0) — バージョン1.0.0のパッケージとリリース日。2026年11月6日確認。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[llama.cpp解説](/ja/power-local-llm/llama-cpp-explained) — RAMenの土台となるオープンソースのエンジン。",
          "[Ollamaレビュー](/ja/power-local-llm/ollama-review) — ローカルAPIを備えたオープンソースのローカルモデル実行ツール。",
          "[KoboldCppレビュー](/ja/power-local-llm/koboldcpp-review) — チャットインターフェースを備えた、単一ファイルのllama.cppフォーク。",
          "[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。"
        ]
      }
    }
  },
  pt: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Overview & Reference",
    "heroImage": "/images/ramen-review-hero-pt.webp",
    "title": "Análise do RAMen: memória de sessão local para o llama.cpp, com plano grátis",
    "seoTitle": "Análise do RAMen: memória de sessão local para IA",
    "intro": "O RAMen é uma camada proprietária de linha de comando da NEOTECH Inc. que executa modelos locais com a sua própria versão do llama.cpp, salva cada sessão de chat e de agente no disco para que ela reabra em segundos após uma reinicialização e, segundo o criador, mantém conversas longas rápidas. Ele roda em Macs com Apple silicon, no Windows 10 e 11 e no Linux, expõe uma API compatível com a da OpenAI e tem um plano gratuito. Esta análise mostra o que você instala, quanto custa, para onde vão os seus dados e quais afirmações se apoiam apenas nas medições do próprio criador.",
    "metaDescription": "Análise do RAMen: memória de sessão proprietária no llama.cpp para Mac, Windows, Linux, com plano grátis e ganho alegado em chats longos. Veja o preço.",
    "twitterDescription": "Análise do RAMen: uma camada local sobre o llama.cpp que salva cada chat no disco e, segundo o criador, acelera chats longos, com plano grátis. O que as páginas do criador confirmam e o que não foi testado.",
    "audience": "Pessoas que usam modelos locais em chats longos ou com agentes de programação e querem saber o que o RAMen instala, quanto custa e o que envia pela rede, e quais afirmações de velocidade são do próprio criador.",
    "readTime": "6 min de leitura",
    "educationalLevel": "Intermediate",
    "affiliateDisclosure": false,
    "primaryTerm": "análise do RAMen",
    "targetKeywords": [
      "análise ramen ia local",
      "ramen llama.cpp",
      "memória de sessão llm local",
      "llama.cpp salvar restaurar kv cache",
      "velocidade de chat longo ia local",
      "getramenai",
      "ramen api compatível com openai"
    ],
    "current_models_mentioned": [
      "Qwen3"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "NVIDIA RTX GPU",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**O RAMen (versão 1.0.0, lançada em 6 de novembro de 2026) é uma camada local proprietária sobre o llama.cpp que salva cada chat no disco para que, segundo o criador, ele reabra em segundos, com plano gratuito e planos pagos.** O alerta decisivo é que todos os números de velocidade vêm dos testes do próprio criador e a PromptQuorum não executou o software.",
    "quickAnswerTop": {
      "pt": {
        "question": "O RAMen executa o modelo no meu próprio computador?",
        "answer": "Sim, segundo o criador: o RAMen inicia um servidor llama.cpp embutido na sua máquina, e as páginas dele dizem que prompts, arquivos e sessões nunca saem dela. As fontes citam três usos da rede: o download da instalação, o download de modelos do Hugging Face e, nos planos pagos, uma verificação de licença.",
        "bullets": [
          "Ele fala a API da OpenAI, e `ramen connect` configura para você o Cline, o Continue, o Aider, o OpenCode e o Open WebUI.",
          "Você pode usar qualquer modelo GGUF ou deixar o `ramen start` escolher um que caiba no seu computador e baixá-lo.",
          "O ganho de velocidade em chats longos exige uma placa NVIDIA RTX série 20 ou mais nova, ou um Mac com Apple silicon; o salvamento de sessões funciona em qualquer máquina compatível."
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "Resposta rápida",
        "anchor": "quick-answer"
      },
      {
        "label": "O que é o RAMen?",
        "anchor": "what-is-ramen"
      },
      {
        "label": "Onde obter",
        "anchor": "get-it"
      },
      {
        "label": "Requisitos",
        "anchor": "requirements"
      },
      {
        "label": "Como começar",
        "anchor": "getting-started"
      },
      {
        "label": "Recursos confirmados pelas fontes",
        "anchor": "key-features"
      },
      {
        "label": "Planos e preços",
        "anchor": "pricing"
      },
      {
        "label": "Fluxo de dados e privacidade",
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
        "label": "Leitura relacionada",
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
            "text": "O RAMen é uma camada proprietária de linha de comando sobre o llama.cpp que salva chats de IA local no disco e, segundo o criador, acelera conversas longas, com plano gratuito."
          },
          {
            "type": "plain-terms",
            "text": "Você instala com um comando, inicia o programa e aponta o seu agente de programação ou app de chat para ele; o RAMen lembra cada conversa, então você não espera o modelo reler tudo depois de uma reinicialização."
          }
        ],
        "items": [
          "Manutenção: a versão 1.0.0 foi publicada em 6 de novembro de 2026, o dia desta análise, então não há aviso de projeto parado e o produto ainda não tem histórico.",
          "Custo: um plano gratuito com memória limitada, mais assinaturas pagas e uma oferta vitalícia de lançamento.",
          "Instalação: um comando de uma linha no terminal em todos os sistemas; não há instalador de clique duplo nem listagem em loja de apps.",
          "Dados: segundo o criador, nada sai da sua máquina além da instalação, dos downloads de modelos e da verificação de licença dos planos pagos."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta análise se baseia em getramenai.com, na política de privacidade e no contrato de licença, nos scripts de instalação e nos dados de versões do GitHub, conferidos em 6 de novembro de 2026. A PromptQuorum não instalou, executou nem mediu o desempenho do RAMen, então velocidade, estabilidade e qualidade das respostas não foram avaliadas."
          }
        ]
      },
      "overview": {
        "id": "what-is-ramen",
        "title": "O que é o RAMen?",
        "content": [
          "**O RAMen é um gerenciador de sessões de IA local, feito pela NEOTECH Inc., que fica na frente do llama.cpp, o motor de código aberto sobre o qual rodam a maioria das ferramentas de modelos locais.** Ele traz a sua própria versão do llama.cpp (licença MIT) com duas adições: salva no disco a memória de trabalho do modelo (o KV cache) de cada conversa e a restaura quando a conversa continua, e lê apenas as partes de uma conversa longa que importam para cada nova palavra.",
          "A página de funcionamento do criador observa que o llama.cpp já tem salvamento e restauração de slots e que ferramentas pequenas automatizam isso; a proposta do RAMen é fazer isso automaticamente para todas as sessões, com verificações de que um cache salvo corresponde ao modelo e às configurações. O software é de código fechado, sob um contrato de licença proprietário; o repositório público no GitHub só hospeda os pacotes de download."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Onde obter",
        "content": [
          "**O RAMen é instalado pelo terminal, com um comando por sistema; os pacotes ficam hospedados no GitHub Releases e não há instalador gráfico.**"
        ],
        "columns": [
          "Opção",
          "Como obter"
        ],
        "rows": [
          {
            "Opção": "Mac (Apple silicon)",
            "Como obter": "Terminal: `curl -fsSL https://getramenai.com/install.sh | bash`"
          },
          {
            "Opção": "Linux (x64)",
            "Como obter": "Mesmo comando; escolhe a versão NVIDIA quando o `nvidia-smi` funciona e, caso contrário, a versão para CPU"
          },
          {
            "Opção": "Windows 10/11 (x64)",
            "Como obter": "PowerShell: `irm https://getramenai.com/install.ps1 | iex`"
          },
          {
            "Opção": "Download manual",
            "Como obter": "[RAMen no GitHub Releases](https://github.com/MatthewLeibel/ramen-releases/releases/latest), .tar.gz ou .zip com checksums .sha256"
          },
          {
            "Opção": "Celular",
            "Como obter": "Nenhum app para iPhone ou Android é mencionado"
          },
          {
            "Opção": "Site",
            "Como obter": "[getramenai.com](https://getramenai.com)"
          },
          {
            "Opção": "Política de privacidade",
            "Como obter": "[Política de privacidade do RAMen](https://getramenai.com/privacy.html); [Contrato de licença](https://getramenai.com/terms.html)"
          }
        ],
        "note": "Versão analisada: 1.0.0 (6 de novembro de 2026). É necessário um terminal: depois da instalação, `ramen start` baixa um modelo, se você não tiver nenhum, e inicia o RAMen em segundo plano. O instalador adiciona `~/.ramen/bin` ao PATH do seu shell e guarda os chats salvos em `~/.context-engine`; `rm -rf ~/.ramen` remove o programa."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**O criador não informa valores mínimos de RAM, disco nem versão do sistema; a página diz apenas que você precisa de um computador que rode o llama.cpp.**"
        ],
        "columns": [
          "Item",
          "O que as fontes dizem"
        ],
        "rows": [
          {
            "Item": "Mac",
            "O que as fontes dizem": "Somente Apple silicon (M1 ou mais novo); o instalador recusa Macs com Intel"
          },
          {
            "Item": "Windows",
            "O que as fontes dizem": "Windows 10 e 11, 64 bits; versão para CPU, com uma versão NVIDIA quando uma GPU NVIDIA é detectada"
          },
          {
            "Item": "Linux",
            "O que as fontes dizem": "Somente x64, versão para CPU ou NVIDIA; por enquanto o instalador recusa Linux em ARM"
          },
          {
            "Item": "Ganho de velocidade em chats longos",
            "O que as fontes dizem": "Exige uma placa NVIDIA RTX série 20 ou mais nova, ou um Mac com Apple silicon; não é afirmado para máquinas só com CPU"
          },
          {
            "Item": "Modelos",
            "O que as fontes dizem": "Qualquer modelo GGUF, ou um que o RAMen escolhe e baixa; as licenças dos modelos são as dos próprios criadores deles"
          },
          {
            "Item": "Conta",
            "O que as fontes dizem": "Nenhuma no plano gratuito; os planos pagos usam uma chave de licença da loja Polar"
          }
        ]
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Como começar",
        "content": [
          "**Os passos seguem as páginas do criador; a PromptQuorum não os executou.**"
        ],
        "numberedItems": [
          {
            "title": "Execute o instalador",
            "whyItMatters": "Use o comando de uma linha do seu sistema; os scripts baixam um pacote e verificam o checksum SHA-256 dele antes de instalar."
          },
          {
            "title": "Inicie o RAMen",
            "whyItMatters": "`ramen start` encontra um modelo que caiba no seu computador, baixa do Hugging Face e roda em segundo plano, ou então você aponta para um arquivo GGUF que já tem."
          },
          {
            "title": "Conecte os seus apps",
            "whyItMatters": "`ramen connect cline` (ou continue, aider, opencode, open-webui) configura a ferramenta; qualquer app que fale a API da OpenAI pode usar o endpoint local."
          },
          {
            "title": "Ative um plano pago só se quiser",
            "whyItMatters": "`ramen activate YOUR-KEY` libera os recursos pagos; `ramen deactivate` libera um dos computadores de uma chave."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Recursos confirmados pelas fontes",
        "content": [
          "**Cada item abaixo é a descrição do criador; os números de velocidade e de qualidade são medições do próprio criador, não testes independentes.**"
        ],
        "items": [
          "**Memória de sessão.** O KV cache de cada conversa é salvo no disco enquanto você trabalha e restaurado quando a conversa continua, mesmo após uma reinicialização; vários chats e agentes compartilham alguns slots ativos da GPU e os demais esperam no disco. O criador relata que um chat de 70.082 tokens em um Mac mini M2 Pro com Qwen3 4B reabriu em 3.7 segundos, em vez de uma releitura de 12 minutos e 47 segundos.",
          "**Leitura seletiva.** Em vez de ler toda a memória a cada nova palavra, o RAMen guarda um resumo de cada bloco e lê o equivalente a cerca de 8.000 tokens, mais o início e a parte mais recente da conversa, com base em uma técnica que, segundo o criador, se apoia em pesquisas sobre atenção esparsa sensível à consulta (Quest, 2024). Ela só liga sozinha acima de um tamanho em que é mais rápida na sua máquina, entre 16K e cerca de 43K tokens.",
          "**Benchmark do fabricante.** Em uma NVIDIA RTX A6000 com Qwen3 32B e uma conversa de 87K tokens, o criador mediu 20.4 tokens por segundo contra 8.4 do llama.cpp normal e, em uma NVIDIA L4 com Qwen3 4B a 128K tokens, 42.2 contra 9.1; o ganho é pequeno abaixo de aproximadamente 30K a 40K tokens em uma placa NVIDIA rápida.",
          "**Vários agentes, uma GPU.** Alternar entre agentes retoma cada um de onde parou; o criador cita 99.7 por cento do histórico de cada agente reaproveitado quando três agentes compartilham uma GPU.",
          "**Limites que o criador informa.** A leitura seletiva acelera a escrita, não a primeira leitura de um prompt longo novo; ela ainda não se combina com modelos de rascunho (speculative decoding); modelos com janela deslizante ganham pouca velocidade."
        ]
      },
      "pricing": {
        "id": "pricing",
        "itemHeadings": true,
        "title": "Planos e preços",
        "content": [
          "**O RAMen tem um plano gratuito e assinaturas pagas vendidas pela loja Polar; toda instalação começa com 14 dias de todos os recursos, sem precisar de cartão.**"
        ],
        "columns": [
          "Plano",
          "Preço",
          "O que inclui"
        ],
        "rows": [
          {
            "Plano": "Gratuito",
            "Preço": "US$ 0, sem data de término",
            "O que inclui": "Lembra dos últimos 3 chats, um chat por vez; funciona com os seus apps"
          },
          {
            "Plano": "Pro",
            "Preço": "US$ 3,99 por mês ou US$ 29 por ano",
            "O que inclui": "Lembra de todos os chats e sessões de agentes, vários agentes em uma GPU, chats longos mantidos rápidos, até 3 computadores"
          },
          {
            "Plano": "Team",
            "Preço": "US$ 9,99 por pessoa por mês, a partir de 3 pessoas",
            "O que inclui": "Pro para toda a equipe, licenças transferíveis, suporte prioritário por e-mail"
          },
          {
            "Plano": "Server",
            "Preço": "US$ 149 por servidor por mês",
            "O que inclui": "Uma máquina com GPU atendendo uma equipe, uma chave por pessoa, uso por pessoa, métricas do Prometheus"
          },
          {
            "Plano": "Enterprise",
            "Preço": "Sob consulta",
            "O que inclui": "Licenças offline para máquinas sem internet, faturas, ordens de compra, um contrato de suporte"
          }
        ],
        "note": "O site também anuncia uma oferta de lançamento, o Pro vitalício por US$ 19,99, pagos uma única vez, para os primeiros 1.000 compradores. Os preços são em dólares americanos e os impostos sobre a venda são tratados no checkout; confirme-os no site do criador antes de comprar. Se uma licença paga terminar, o contrato de licença diz que o RAMen continua no plano gratuito."
      },
      "privacy": {
        "id": "privacy",
        "title": "Fluxo de dados e privacidade",
        "content": [
          "**A política de privacidade (em vigor desde 6 de novembro de 2026) diz que o RAMen roda no seu computador e que os seus prompts, arquivos, conversas e modelos ficam lá.** Ela lista o que o RAMen envia: nos planos pagos, na inicialização, a chave de licença, o identificador da loja e um rótulo anônimo da máquina (a plataforma mais um código curto derivado da máquina, nunca o nome dela) ao provedor de pagamentos Polar; e, quando `ramen start` baixa um modelo, uma conexão com o Hugging Face, que vê o seu endereço de internet e o arquivo solicitado. A política afirma que não há análise de uso, relatório de falhas nem rastreamento no software.",
          "O site conta as visitas com o Cloudflare Web Analytics, sem cookies, e é hospedado no GitHub Pages. As compras passam pela Polar, que repassa ao criador o seu nome, e-mail, país e o que você comprou. O formulário de lembrete de lançamento no site guarda o seu e-mail na Cloudflare. A página inicial diz que o software continua funcionando offline entre as verificações de licença, e o plano Enterprise oferece licenças offline."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Estas são afirmações do criador, não resultados de auditoria, e a PromptQuorum não inspecionou o tráfego de rede. O software é de código fechado, então as afirmações não podem ser conferidas no código."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quem é",
        "items": [
          "**Quem usa agentes de programação** como Cline, Continue, Aider ou OpenCode com um modelo local e perde tempo quando uma sessão longa precisa ser relida após uma reinicialização.",
          "**Quem tem uma máquina com NVIDIA RTX ou Apple silicon** e trabalha com conversas muito longas, onde o criador relata os maiores ganhos.",
          "**Compradores cautelosos** que querem testar um plano gratuito e um teste de 14 dias antes de pagar qualquer coisa."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "O que não conseguimos verificar",
        "items": [
          "**Velocidade e qualidade.** Todos os números de benchmark e a afirmação de respostas idênticas vêm do criador; a PromptQuorum não fez testes e não encontrou medições independentes.",
          "**Maturidade.** A versão 1.0.0 é o primeiro lançamento público, e o lançamento do produto no Product Hunt está anunciado para 8 de novembro de 2026, então não há histórico de longo prazo sobre estabilidade ou suporte.",
          "**Código e auditoria.** Não há código-fonte público do RAMen nem auditoria de terceiros; o contrato de licença proíbe engenharia reversa, exceto onde a lei permitir.",
          "**Requisitos.** Não são publicados valores mínimos de RAM, disco nem versões do sistema, e não há suporte a Macs com Intel, Linux em ARM nem a celulares.",
          "**Detalhes da licença.** A verificação de licença dos planos pagos foi descrita, mas o tráfego exato dela não foi examinado."
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
          "Principal diferença"
        ],
        "rows": [
          {
            "App": "[llama.cpp](/pt/power-local-llm/llama-cpp-explained)",
            "Plataformas": "Mac, Windows, Linux",
            "Preço / licença": "Grátis / MIT",
            "Principal diferença": "O motor de código aberto sobre o qual o RAMen é construído; salvar e restaurar slots é manual"
          },
          {
            "App": "[Ollama](/pt/power-local-llm/ollama-review)",
            "Plataformas": "Mac, Windows, Linux",
            "Preço / licença": "Grátis / MIT",
            "Principal diferença": "Executor de modelos de código aberto com biblioteca de modelos e API local"
          },
          {
            "App": "[KoboldCpp](/pt/power-local-llm/koboldcpp-review)",
            "Plataformas": "Mac, Windows, Linux",
            "Preço / licença": "Grátis / AGPL-3.0",
            "Principal diferença": "Fork do llama.cpp em um único arquivo, com interface de chat e de escrita embutida"
          }
        ],
        "note": "Confirme o preço, a licença e as plataformas de cada app na página dele antes de escolher."
      },
      "faq": {
        "id": "faq",
        "title": "Perguntas frequentes",
        "faqs": [
          {
            "q": "A leitura seletiva muda as respostas que o modelo dá?",
            "a": "O criador diz que, quando a seleção cobre a conversa inteira, o RAMen escreve exatamente o mesmo texto que a atenção normal, e que deu as mesmas respostas que a atenção completa em 54 de 54 testes com documentos longos, de 16K a 64K tokens. Esses são testes do próprio criador e não foram conferidos de forma independente."
          },
          {
            "q": "O que acontece com os meus chats salvos se eu parar de pagar?",
            "a": "O RAMen continua no plano gratuito, que mantém os 3 chats salvos usados mais recentemente e apaga do disco as cópias salvas mais antigas à medida que novos chats são salvos (o criador confirmou isso ao PromptQuorum em 6 de novembro de 2026). As conversas em si continuam no seu app, porque o RAMen salva a memória de trabalho do modelo, não o texto do chat; um chat mais antigo ainda funciona, apenas é lido de novo desde o início, como no llama.cpp puro."
          },
          {
            "q": "O RAMen funciona offline?",
            "a": "O criador diz que ele funciona offline depois que um modelo está no disco, e que os planos pagos continuam funcionando entre as verificações de licença. A primeira instalação e qualquer download de modelo precisam de conexão com a internet."
          },
          {
            "q": "O RAMen é feito pela equipe do llama.cpp?",
            "a": "Não. A NEOTECH Inc. faz o RAMen e diz que ele é construído sobre o llama.cpp, que acompanha a sua licença MIT; o projeto llama.cpp em si é um projeto de código aberto separado."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredito",
        "content": "O RAMen oferece uma camada proprietária sobre o llama.cpp, com teste gratuito, que salva chats no disco, retoma sessões de agentes em segundos e, segundo as medições do criador, acelera conversas muito longas em máquinas com NVIDIA RTX e Apple silicon. Em contrapartida, é um primeiro lançamento sem histórico, só se instala pelo terminal, é de código fechado, os planos pagos contatam um servidor de licenças na inicialização e todos os números de desempenho são do próprio criador. Ele serve para quem usa chats locais longos ou agentes de programação e quer testá-lo no plano gratuito; quem precisa de privacidade auditada ou de afirmações de velocidade verificadas deve esperar por resultados independentes."
      },
      "sources": {
        "id": "sources",
        "title": "Fontes",
        "items": [
          "[Site do RAMen](https://getramenai.com) — recursos, plataformas, planos e comandos de instalação, conferido em 6 de novembro de 2026.",
          "[Como o RAMen funciona](https://getramenai.com/how-it-works.html) — memória de sessão, leitura seletiva, benchmarks e limites, conferido em 6 de novembro de 2026.",
          "[Política de privacidade do RAMen](https://getramenai.com/privacy.html) — dados enviados, em vigor desde 6 de novembro de 2026, conferido em 6 de novembro de 2026.",
          "[Contrato de licença do RAMen](https://getramenai.com/terms.html) — termos da licença e limites dos planos, conferido em 6 de novembro de 2026.",
          "[RAMen no GitHub Releases](https://github.com/MatthewLeibel/ramen-releases/releases/tag/v1.0.0) — pacotes da versão 1.0.0 e data de lançamento, conferido em 6 de novembro de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leitura relacionada",
        "items": [
          "[llama.cpp explicado](/pt/power-local-llm/llama-cpp-explained) — o motor de código aberto por baixo do RAMen.",
          "[Análise do Ollama](/pt/power-local-llm/ollama-review) — um executor de modelos locais de código aberto com API local.",
          "[Análise do KoboldCpp](/pt/power-local-llm/koboldcpp-review) — um fork do llama.cpp em um único arquivo, com interface de chat.",
          "[Diretório de software LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local."
        ]
      }
    }
  },
  ar: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Overview & Reference",
    "heroImage": "/images/ramen-review-hero-ar.webp",
    "title": "مراجعة RAMen: ذاكرة جلسات محلية لـ llama.cpp مع خطة مجانية",
    "seoTitle": "مراجعة RAMen: ذاكرة جلسات الذكاء الاصطناعي المحلي وسرعته",
    "intro": "RAMen طبقة سطر أوامر مغلقة المصدر من شركة NEOTECH Inc. تشغّل النماذج المحلية عبر نسختها الخاصة من llama.cpp، وتحفظ كل محادثة وجلسة وكيل على القرص لتُفتح من جديد خلال ثوانٍ بعد إعادة التشغيل، وتقول الشركة إنها تُبقي المحادثات الطويلة سريعة. تعمل على أجهزة Mac بمعالجات Apple silicon وعلى Windows 10 و11 وLinux، وتوفّر واجهة API متوافقة مع OpenAI، ولها خطة مجانية. تتناول هذه المراجعة ما تثبّته وما يكلّفك وأين تذهب بياناتك وأي الادعاءات يستند إلى قياسات الشركة الصانعة وحدها.",
    "metaDescription": "مراجعة RAMen: ذاكرة جلسات محلية مغلقة المصدر فوق llama.cpp لأجهزة Mac وWindows وLinux، مع خطة مجانية وتسريع مزعوم للمحادثات الطويلة. التثبيت والأسعار.",
    "twitterDescription": "مراجعة RAMen: طبقة محلية فوق llama.cpp تحفظ كل محادثة على القرص وتسرّع المحادثات الطويلة بحسب الشركة الصانعة، مع خطة مجانية. ما تؤكده صفحات الشركة الصانعة وما لم يُختبر.",
    "audience": "من يشغّلون نماذج محلية لمحادثات طويلة أو وكلاء برمجة ويريدون معرفة ما يثبّته RAMen وكلفته وما يرسله عبر الشبكة، وأي ادعاءات السرعة تعود إلى الشركة الصانعة نفسها.",
    "readTime": "6 دقائق للقراءة",
    "educationalLevel": "Intermediate",
    "affiliateDisclosure": false,
    "primaryTerm": "مراجعة RAMen",
    "targetKeywords": [
      "مراجعة ramen للذكاء الاصطناعي المحلي",
      "ramen llama.cpp",
      "ذاكرة جلسات النماذج المحلية",
      "حفظ واستعادة kv cache في llama.cpp",
      "سرعة المحادثات الطويلة في الذكاء الاصطناعي المحلي",
      "getramenai",
      "واجهة ramen المتوافقة مع openai"
    ],
    "current_models_mentioned": [
      "Qwen3"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "NVIDIA RTX GPU",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**RAMen (الإصدار 1.0.0، صدر في 6 نوفمبر 2026) طبقة محلية مغلقة المصدر فوق llama.cpp تحفظ كل محادثة على القرص بحيث تُفتح من جديد خلال ثوانٍ بحسب الشركة الصانعة، مع خطة مجانية وباقات مدفوعة.** والتحفظ الحاسم أن كل أرقام السرعة صادرة عن اختبارات الشركة الصانعة نفسها وأن PromptQuorum لم تشغّل البرنامج.",
    "quickAnswerTop": {
      "ar": {
        "question": "هل يشغّل RAMen النموذج على حاسوبي أنا؟",
        "answer": "نعم، بحسب الشركة الصانعة: يبدأ RAMen خادم llama.cpp مضمّنًا على جهازك، وتقول صفحاته إن الموجّهات والملفات والجلسات لا تغادره. وتذكر المصادر ثلاثة استخدامات للشبكة: تنزيل التثبيت، وتنزيل النماذج من Hugging Face، والتحقق من الترخيص في الباقات المدفوعة.",
        "bullets": [
          "يتحدث بواجهة OpenAI API، ويضبط الأمر `ramen connect` أدوات Cline وContinue وAider وOpenCode وOpen WebUI نيابةً عنك.",
          "يمكنك استخدام أي نموذج بصيغة GGUF، أو ترك `ramen start` يختار نموذجًا يناسب حاسوبك وينزّله.",
          "يحتاج تسريع المحادثات الطويلة إلى بطاقة NVIDIA RTX من السلسلة 20 أو أحدث، أو جهاز Mac بمعالج Apple silicon؛ أما حفظ الجلسات فيعمل على أي جهاز مدعوم."
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "إجابة سريعة",
        "anchor": "quick-answer"
      },
      {
        "label": "ما هو RAMen؟",
        "anchor": "what-is-ramen"
      },
      {
        "label": "كيف تحصل عليه",
        "anchor": "get-it"
      },
      {
        "label": "المتطلبات",
        "anchor": "requirements"
      },
      {
        "label": "كيف تبدأ",
        "anchor": "getting-started"
      },
      {
        "label": "الميزات التي أكدتها المصادر",
        "anchor": "key-features"
      },
      {
        "label": "الباقات والأسعار",
        "anchor": "pricing"
      },
      {
        "label": "تدفق البيانات والخصوصية",
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
            "text": "RAMen طبقة سطر أوامر مغلقة المصدر فوق llama.cpp تحفظ محادثات الذكاء الاصطناعي المحلي على القرص وتسرّع المحادثات الطويلة بحسب الشركة الصانعة، مع خطة مجانية."
          },
          {
            "type": "plain-terms",
            "text": "تثبّت أمرًا واحدًا وتشغّله ثم توجّه وكيل البرمجة أو تطبيق الدردشة إليه؛ ويتذكر RAMen كل محادثة فلا تنتظر أن يعيد النموذج قراءتها بعد إعادة التشغيل."
          }
        ],
        "items": [
          "الصيانة: نُشر الإصدار 1.0.0 في 6 نوفمبر 2026، يوم هذه المراجعة، فلا ينطبق تحذير المشروع المهجور، وليس للمنتج سجل سابق بعد.",
          "الكلفة: خطة مجانية بذاكرة محدودة، إضافة إلى اشتراكات مدفوعة وعرض إطلاق للترخيص مدى الحياة.",
          "التثبيت: أمر واحد في الطرفية على كل نظام؛ لا يوجد مثبّت بالنقر المزدوج ولا إدراج في متجر تطبيقات.",
          "البيانات: تقول الشركة الصانعة إن شيئًا لا يغادر جهازك سوى التثبيت وتنزيل النماذج والتحقق من ترخيص الباقة المدفوعة."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "تستند هذه المراجعة إلى موقع getramenai.com وسياسة الخصوصية واتفاقية الترخيص ونصوص التثبيت وبيانات إصدارات GitHub، وقد روجعت في 6 نوفمبر 2026. لم تثبّت PromptQuorum برنامج RAMen ولم تشغّله ولم تقِس أداءه، لذلك لا يشمل التقييم السرعة ولا الاستقرار ولا جودة الإجابات."
          }
        ]
      },
      "overview": {
        "id": "what-is-ramen",
        "title": "ما هو RAMen؟",
        "content": [
          "**RAMen مدير جلسات للذكاء الاصطناعي المحلي من شركة NEOTECH Inc. يقف أمام llama.cpp، المحرك المفتوح المصدر الذي تعمل عليه معظم أدوات النماذج المحلية.** يأتي بنسخته الخاصة من llama.cpp (بترخيص MIT) مع إضافتين: يحفظ الذاكرة العاملة للنموذج (KV cache) لكل محادثة على القرص ويستعيدها عند متابعة المحادثة، ولا يقرأ من المحادثة الطويلة إلا الأجزاء المهمة لكل كلمة جديدة.",
          "تشير صفحة آلية العمل لدى الشركة الصانعة إلى أن llama.cpp يوفّر أصلًا حفظ الفتحات واستعادتها وأن أدوات صغيرة تؤتمت ذلك؛ ويتمثل ادعاء RAMen في فعل ذلك لكل جلسة تلقائيًا، مع فحوص تتأكد من أن الذاكرة المحفوظة تطابق النموذج والإعدادات. والبرنامج مغلق المصدر بموجب اتفاقية ترخيص خاصة؛ أما مستودع GitHub العام فيستضيف حزم التنزيل فقط."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "كيف تحصل عليه",
        "content": [
          "**يُثبَّت RAMen من الطرفية بأمر واحد لكل نظام؛ وتُستضاف الحزم على GitHub Releases، ولا يوجد مثبّت رسومي.**"
        ],
        "columns": [
          "الخيار",
          "كيف تحصل عليه"
        ],
        "rows": [
          {
            "الخيار": "Mac (Apple silicon)",
            "كيف تحصل عليه": "في الطرفية: `curl -fsSL https://getramenai.com/install.sh | bash`"
          },
          {
            "الخيار": "Linux (x64)",
            "كيف تحصل عليه": "الأمر نفسه؛ يختار إصدار NVIDIA عندما يعمل `nvidia-smi`، وإلا إصدار المعالج"
          },
          {
            "الخيار": "Windows 10/11 (x64)",
            "كيف تحصل عليه": "في PowerShell: `irm https://getramenai.com/install.ps1 | iex`"
          },
          {
            "الخيار": "تنزيل يدوي",
            "كيف تحصل عليه": "[إصدارات RAMen على GitHub](https://github.com/MatthewLeibel/ramen-releases/releases/latest)، بصيغة .tar.gz أو .zip مع ملفات المجموع الاختباري .sha256"
          },
          {
            "الخيار": "الهاتف",
            "كيف تحصل عليه": "لا يُذكر تطبيق لـ iPhone أو Android"
          },
          {
            "الخيار": "الموقع الإلكتروني",
            "كيف تحصل عليه": "[getramenai.com](https://getramenai.com)"
          },
          {
            "الخيار": "سياسة الخصوصية",
            "كيف تحصل عليه": "[سياسة خصوصية RAMen](https://getramenai.com/privacy.html)؛ [اتفاقية الترخيص](https://getramenai.com/terms.html)"
          }
        ],
        "note": "الإصدار الذي روجع: 1.0.0 (6 نوفمبر 2026). الطرفية مطلوبة: بعد التثبيت ينزّل `ramen start` نموذجًا إن لم يكن لديك واحد ويشغّل RAMen في الخلفية. يضيف المثبّت `~/.ramen/bin` إلى متغير PATH في صدفتك ويحفظ المحادثات المحفوظة في `~/.context-engine`؛ ويزيل الأمر `rm -rf ~/.ramen` البرنامج."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "المتطلبات",
        "content": [
          "**لا تحدد الشركة الصانعة حدًا أدنى لذاكرة RAM أو مساحة القرص أو إصدار النظام؛ وتكتفي الصفحة بالقول إنك تحتاج حاسوبًا يشغّل llama.cpp.**"
        ],
        "columns": [
          "البند",
          "ما تقوله المصادر"
        ],
        "rows": [
          {
            "البند": "Mac",
            "ما تقوله المصادر": "معالجات Apple silicon فقط (M1 أو أحدث)؛ ويرفض المثبّت أجهزة Mac بمعالج Intel"
          },
          {
            "البند": "Windows",
            "ما تقوله المصادر": "Windows 10 و11 بنظام 64 بت؛ إصدار للمعالج، وإصدار NVIDIA عند اكتشاف بطاقة NVIDIA"
          },
          {
            "البند": "Linux",
            "ما تقوله المصادر": "x64 فقط، بإصدار للمعالج أو لـ NVIDIA؛ ويرفض المثبّت Linux على ARM حاليًا"
          },
          {
            "البند": "تسريع المحادثات الطويلة",
            "ما تقوله المصادر": "يحتاج إلى بطاقة NVIDIA RTX من السلسلة 20 أو أحدث، أو جهاز Mac بمعالج Apple silicon؛ ولا يُدّعى للأجهزة التي تعتمد على المعالج وحده"
          },
          {
            "البند": "النماذج",
            "ما تقوله المصادر": "أي نموذج بصيغة GGUF، أو نموذج يختاره RAMen وينزّله؛ وتراخيص النماذج هي تراخيص صانعيها"
          },
          {
            "البند": "الحساب",
            "ما تقوله المصادر": "لا حاجة إليه في الخطة المجانية؛ وتستخدم الباقات المدفوعة مفتاح ترخيص من متجر Polar"
          }
        ]
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "كيف تبدأ",
        "content": [
          "**تتبع الخطوات صفحات الشركة الصانعة؛ ولم تشغّلها PromptQuorum.**"
        ],
        "numberedItems": [
          {
            "title": "شغّل المثبّت",
            "whyItMatters": "استخدم الأمر المناسب لنظامك؛ تنزّل النصوص حزمة وتتحقق من مجموعها الاختباري SHA-256 قبل التثبيت."
          },
          {
            "title": "ابدأ RAMen",
            "whyItMatters": "يجد `ramen start` نموذجًا يناسب حاسوبك وينزّله من Hugging Face ويعمل في الخلفية، أو يمكنك توجيهه إلى ملف GGUF لديك أصلًا."
          },
          {
            "title": "اربط تطبيقاتك",
            "whyItMatters": "يضبط `ramen connect cline` (أو continue أو aider أو opencode أو open-webui) الأداة؛ ويمكن لأي شيء يتحدث بواجهة OpenAI API استخدام نقطة النهاية المحلية."
          },
          {
            "title": "فعّل باقة مدفوعة إن أردت فقط",
            "whyItMatters": "يفتح `ramen activate YOUR-KEY` الميزات المدفوعة؛ ويحرّر `ramen deactivate` أحد الحواسيب المرتبطة بالمفتاح."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "الميزات التي أكدتها المصادر",
        "content": [
          "**كل بند أدناه وصف من الشركة الصانعة؛ وأرقام السرعة والجودة قياساتها الخاصة، وليست اختبارات مستقلة.**"
        ],
        "items": [
          "**ذاكرة الجلسات.** تُحفظ KV cache لكل محادثة على القرص أثناء العمل وتُستعاد عند متابعتها، حتى بعد إعادة التشغيل؛ وتتشارك محادثات ووكلاء كثيرون بضع فتحات حية على GPU وينتظر الباقي على القرص. وتذكر الشركة أن محادثة من 70,082 رمزًا على Mac mini M2 Pro مع Qwen3 4B أُعيد فتحها في 3.7 ثانية بدلًا من إعادة قراءة استغرقت 12 دقيقة و47 ثانية.",
          "**القراءة الانتقائية.** بدل قراءة الذاكرة كلها لكل كلمة جديدة، يحتفظ RAMen بملخص لكل كتلة ويقرأ ما يعادل نحو 8,000 رمز إضافة إلى بداية المحادثة وأحدث أجزائها، وهو ما تقول الشركة الصانعة إنه يبني على بحث عن الانتباه المتناثر الواعي بالاستعلام (Quest، 2024). وتعمل تلقائيًا فقط فوق طول تكون عنده أسرع على جهازك، بين 16K ونحو 43K رمزًا.",
          "**قياسات الشركة الصانعة.** على NVIDIA RTX A6000 مع Qwen3 32B ومحادثة من 87K رمز قاست الشركة 20.4 رمزًا في الثانية مقابل 8.4 في llama.cpp العادي، وعلى NVIDIA L4 مع Qwen3 4B عند 128K رمز 42.2 مقابل 9.1؛ والمكسب صغير دون نحو 30K إلى 40K رمز على بطاقة NVIDIA سريعة.",
          "**وكلاء كثيرون على GPU واحد.** يستأنف التبديل بين الوكلاء كل وكيل من حيث توقف؛ وتورد الشركة إعادة استخدام 99.7 بالمئة من سجل كل وكيل عندما يتشارك ثلاثة وكلاء GPU واحدًا.",
          "**الحدود التي تذكرها الشركة الصانعة.** تسرّع القراءة الانتقائية الكتابة لا القراءة الأولى لموجّه طويل جديد؛ ولا تعمل معًا بعدُ مع النماذج المسوّدة (speculative decoding)؛ والنماذج ذات النافذة المنزلقة تكسب سرعة قليلة."
        ]
      },
      "pricing": {
        "id": "pricing",
        "itemHeadings": true,
        "title": "الباقات والأسعار",
        "content": [
          "**لدى RAMen خطة مجانية واشتراكات مدفوعة تُباع عبر متجر Polar؛ وكل تثبيت يبدأ بـ 14 يومًا من جميع الميزات دون بطاقة.**"
        ],
        "columns": [
          "الباقة",
          "السعر",
          "ما تتضمنه"
        ],
        "rows": [
          {
            "الباقة": "مجانية",
            "السعر": "$0، دون تاريخ انتهاء",
            "ما تتضمنه": "تتذكر آخر 3 محادثات، محادثة واحدة في كل مرة؛ وتعمل مع تطبيقاتك"
          },
          {
            "الباقة": "Pro",
            "السعر": "$3.99 شهريًا أو $29 سنويًا",
            "ما تتضمنه": "تتذكر كل محادثة وجلسة وكيل، ووكلاء كثيرين على GPU واحد، وتُبقي المحادثات الطويلة سريعة، حتى 3 حواسيب"
          },
          {
            "الباقة": "Team",
            "السعر": "$9.99 للشخص شهريًا، ابتداءً من 3 أشخاص",
            "ما تتضمنه": "Pro لكل أعضاء الفريق، ومقاعد قابلة للنقل، ودعم ذو أولوية عبر البريد الإلكتروني"
          },
          {
            "الباقة": "Server",
            "السعر": "$149 للخادم شهريًا",
            "ما تتضمنه": "جهاز GPU واحد يخدم فريقًا، ومفتاح لكل شخص، واستخدام لكل شخص، ومقاييس Prometheus"
          },
          {
            "الباقة": "Enterprise",
            "السعر": "عند الطلب",
            "ما تتضمنه": "تراخيص دون اتصال للأجهزة بلا إنترنت، وفواتير، وأوامر شراء، واتفاقية دعم"
          }
        ],
        "note": "يعلن الموقع أيضًا عرض إطلاق: Pro مدى الحياة بسعر $19.99 مرة واحدة لأول 1,000 مشترٍ. الأسعار بالدولار الأمريكي وتُعالَج ضريبة المبيعات عند الدفع؛ فتأكد منها على موقع الشركة الصانعة قبل الشراء. وتقول اتفاقية الترخيص إنه إذا انتهى ترخيص مدفوع يستمر RAMen على الخطة المجانية."
      },
      "privacy": {
        "id": "privacy",
        "title": "تدفق البيانات والخصوصية",
        "content": [
          "**تقول سياسة الخصوصية (سارية من 6 نوفمبر 2026) إن RAMen يعمل على حاسوبك وإن موجّهاتك وملفاتك ومحادثاتك ونماذجك تبقى عليه.** وتذكر ما يرسله RAMen: في الباقات المدفوعة، عند بدء التشغيل، مفتاح الترخيص ومعرّف المتجر وتسمية مجهولة للجهاز (المنصة مع رمز قصير مشتق من الجهاز، لا اسمه أبدًا) إلى مزوّد الدفع Polar؛ وعندما ينزّل `ramen start` نموذجًا، اتصالًا بـ Hugging Face الذي يرى عنوانك على الإنترنت والملف المطلوب. وتنص السياسة على أنه لا توجد تحليلات ولا تقارير أعطال ولا تتبع في البرنامج.",
          "يحصي الموقع الزيارات عبر Cloudflare Web Analytics دون ملفات تعريف ارتباط، ويُستضاف على GitHub Pages. وتتم المشتريات عبر Polar الذي يزوّد الشركة الصانعة باسمك وبريدك الإلكتروني وبلدك وما اشتريته. ويحفظ نموذج تذكير الإطلاق على الموقع بريدك الإلكتروني لدى Cloudflare. وتقول الصفحة الرئيسية إن البرنامج يواصل العمل دون اتصال بين فحوص الترخيص، وتوفّر باقة Enterprise تراخيص دون اتصال."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "هذه تصريحات الشركة الصانعة وليست نتائج تدقيق، ولم تفحص PromptQuorum حركة الشبكة. والبرنامج مغلق المصدر، لذلك لا يمكن التحقق من هذه الادعاءات في الشيفرة."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "لمن يناسب",
        "items": [
          "**مستخدمو وكلاء البرمجة** الذين يشغّلون Cline أو Continue أو Aider أو OpenCode على نموذج محلي ويخسرون وقتًا حين تُعاد قراءة جلسة طويلة بعد إعادة التشغيل.",
          "**أصحاب أجهزة NVIDIA RTX أو Apple silicon** الذين يعملون بمحادثات طويلة جدًا، حيث تذكر الشركة الصانعة أكبر المكاسب.",
          "**المشترون الحذرون** الذين يريدون تجربة خطة مجانية وفترة تجريبية من 14 يومًا قبل دفع أي شيء."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "ما لم نتمكن من التحقق منه",
        "items": [
          "**السرعة والجودة.** كل أرقام الاختبارات وادعاء تطابق الإجابات صادرة عن الشركة الصانعة؛ ولم تُجرِ PromptQuorum أي اختبارات ولم تجد قياسات مستقلة.",
          "**النضج.** الإصدار 1.0.0 هو أول إصدار عام، ويُعلَن إطلاق المنتج على Product Hunt في 8 نوفمبر 2026، فلا يوجد سجل طويل الأمد عن الاستقرار أو الدعم.",
          "**الشيفرة والتدقيق.** لا توجد شيفرة مصدرية عامة لـ RAMen ولا تدقيق من جهة خارجية؛ وتمنع اتفاقية الترخيص الهندسة العكسية إلا حيث يسمح القانون بذلك.",
          "**المتطلبات.** لا تُنشر حدود دنيا لـ RAM أو القرص أو إصدارات النظام، ولا يوجد دعم لأجهزة Mac بمعالج Intel أو Linux على ARM أو الهواتف.",
          "**تفاصيل الترخيص.** وُصف فحص ترخيص الباقة المدفوعة لكن لم تُفحص حركة الشبكة الدقيقة الخاصة به."
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
            "التطبيق": "[llama.cpp](/ar/power-local-llm/llama-cpp-explained)",
            "المنصات": "Mac وWindows وLinux",
            "السعر / الترخيص": "مجاني / MIT",
            "الفرق الرئيسي": "المحرك المفتوح المصدر الذي بُني عليه RAMen؛ وحفظ الفتحات واستعادتها يدويان"
          },
          {
            "التطبيق": "[Ollama](/ar/power-local-llm/ollama-review)",
            "المنصات": "Mac وWindows وLinux",
            "السعر / الترخيص": "مجاني / MIT",
            "الفرق الرئيسي": "مشغّل نماذج مفتوح المصدر بمكتبة نماذج وواجهة API محلية"
          },
          {
            "التطبيق": "[KoboldCpp](/ar/power-local-llm/koboldcpp-review)",
            "المنصات": "Mac وWindows وLinux",
            "السعر / الترخيص": "مجاني / AGPL-3.0",
            "الفرق الرئيسي": "نسخة مشتقة من llama.cpp في ملف واحد بواجهة دردشة وكتابة مدمجة"
          }
        ],
        "note": "تحقق من السعر الحالي والترخيص والمنصات لكل تطبيق في صفحته الخاصة قبل الاختيار."
      },
      "faq": {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faqs": [
          {
            "q": "هل تغيّر القراءة الانتقائية الإجابات التي يعطيها النموذج؟",
            "a": "تقول الشركة الصانعة إنه حين يغطي الاختيار المحادثة كلها يكتب RAMen النص نفسه تمامًا كما يفعل الانتباه العادي، وإنه أعطى الإجابات نفسها التي يعطيها الانتباه الكامل في 54 من 54 اختبارًا لمستندات طويلة من 16K إلى 64K رمز. هذه اختبارات الشركة الصانعة ولم يُتحقق منها بشكل مستقل."
          },
          {
            "q": "ماذا يحدث لمحادثاتي المحفوظة إن توقفت عن الدفع؟",
            "a": "يستمر RAMen على الخطة المجانية التي تحتفظ بآخر 3 محادثات محفوظة جرى استخدامها، وتمسح من القرص النسخ المحفوظة الأقدم كلما حُفظت محادثات جديدة (أكدت الشركة الصانعة ذلك لـ PromptQuorum في 6 نوفمبر 2026). أما المحادثات نفسها فتبقى في تطبيقك، لأن RAMen يحفظ الذاكرة العاملة للنموذج لا نص المحادثة؛ فتظل المحادثة الأقدم تعمل، لكنها تُقرأ من جديد من البداية كما في llama.cpp العادي."
          },
          {
            "q": "هل يعمل RAMen دون اتصال بالإنترنت؟",
            "a": "تقول الشركة الصانعة إنه يعمل دون اتصال متى كان النموذج على القرص، وإن الباقات المدفوعة تواصل العمل بين فحوص الترخيص. أما التثبيت الأول وأي تنزيل لنموذج فيحتاجان إلى اتصال بالإنترنت."
          },
          {
            "q": "هل يصنع فريق llama.cpp برنامج RAMen؟",
            "a": "لا. تصنع NEOTECH Inc. برنامج RAMen وتقول إنه مبني على llama.cpp الذي يأتي بترخيص MIT الخاص به؛ أما مشروع llama.cpp نفسه فمشروع مفتوح المصدر مستقل."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "الخلاصة",
        "content": "يقدّم RAMen طبقة مغلقة المصدر فوق llama.cpp يمكن تجربتها مجانًا، تحفظ المحادثات على القرص وتستأنف جلسات الوكلاء خلال ثوانٍ، وتسرّع المحادثات الطويلة جدًا على أجهزة NVIDIA RTX وApple silicon بحسب قياسات الشركة الصانعة. في المقابل هو إصدار أول بلا سجل سابق، ولا يُثبَّت إلا من الطرفية، ومغلق المصدر، وتتصل الباقات المدفوعة بخادم ترخيص عند بدء التشغيل، وكل رقم أداء فيه هو من قياسات الشركة الصانعة وحدها. يناسب من يشغّلون محادثات محلية طويلة أو وكلاء برمجة ولا يمانعون تجربته على الخطة المجانية؛ أما من يحتاج إلى خصوصية مدقَّقة أو ادعاءات سرعة متحقق منها فعليه انتظار نتائج مستقلة."
      },
      "sources": {
        "id": "sources",
        "title": "المصادر",
        "items": [
          "[موقع RAMen](https://getramenai.com) — الميزات والمنصات والباقات وأوامر التثبيت، روجع في 6 نوفمبر 2026.",
          "[كيف يعمل RAMen](https://getramenai.com/how-it-works.html) — ذاكرة الجلسات والقراءة الانتقائية والقياسات والحدود، روجع في 6 نوفمبر 2026.",
          "[سياسة خصوصية RAMen](https://getramenai.com/privacy.html) — البيانات المرسلة، سارية من 6 نوفمبر 2026، روجعت في 6 نوفمبر 2026.",
          "[اتفاقية ترخيص RAMen](https://getramenai.com/terms.html) — شروط الترخيص وحدود الباقات، روجعت في 6 نوفمبر 2026.",
          "[إصدارات RAMen على GitHub](https://github.com/MatthewLeibel/ramen-releases/releases/tag/v1.0.0) — حزم الإصدار 1.0.0 وتاريخ صدوره، روجعت في 6 نوفمبر 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[llama.cpp Explained](/ar/power-local-llm/llama-cpp-explained) — المحرك المفتوح المصدر الذي يقوم عليه RAMen.",
          "[مراجعة Ollama](/ar/power-local-llm/ollama-review) — مشغّل نماذج محلي مفتوح المصدر بواجهة API محلية.",
          "[مراجعة KoboldCpp](/ar/power-local-llm/koboldcpp-review) — نسخة مشتقة من llama.cpp في ملف واحد بواجهة دردشة.",
          "[دليل برمجيات النماذج المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية."
        ]
      }
    }
  },
  zh: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Overview & Reference",
    "heroImage": "/images/ramen-review-hero-zh.webp",
    "title": "RAMen 评测：llama.cpp 的本地会话记忆层，含免费方案",
    "seoTitle": "RAMen 评测：本地 AI 会话记忆与长对话提速，含免费方案",
    "intro": "RAMen 是 NEOTECH Inc. 推出的专有命令行层：它通过自带的 llama.cpp 构建运行本地模型，把每次聊天和智能体会话保存到磁盘，重启后几秒内即可重新打开，并称能让长对话保持流畅。它可在 Apple silicon Mac、Windows 10 和 11 以及 Linux 上运行，提供兼容 OpenAI 的 API，并有免费方案。本评测说明安装什么、费用多少、数据流向哪里，以及哪些说法仅来自厂商自己的测量。",
    "metaDescription": "RAMen 评测：基于 llama.cpp 的专有会话记忆，支持 Mac、Windows、Linux，含免费方案，并称可加快长对话。涵盖安装、价格与隐私。",
    "twitterDescription": "RAMen 评测：基于 llama.cpp 的本地层，把每次聊天保存到磁盘，并据厂商称可加快长对话，含免费方案。厂商页面证实了什么，哪些未经测试。",
    "audience": "使用本地模型进行长对话或运行编码智能体，想了解 RAMen 会安装什么、花多少钱、通过网络发送什么，以及哪些速度说法只是厂商自己的测量。",
    "readTime": "阅读约6分钟",
    "educationalLevel": "Intermediate",
    "affiliateDisclosure": false,
    "primaryTerm": "RAMen 评测",
    "targetKeywords": [
      "ramen 本地 ai 评测",
      "ramen llama.cpp",
      "本地 llm 会话记忆",
      "llama.cpp kv cache 保存恢复",
      "本地 ai 长对话速度",
      "getramenai",
      "ramen 兼容 openai 的 api"
    ],
    "current_models_mentioned": [
      "Qwen3"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "NVIDIA RTX GPU",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**RAMen（1.0.0 版，2026 年 11 月 6 日发布）是基于 llama.cpp 的专有本地层，会把每次聊天保存到磁盘，据厂商称几秒内即可重新打开，提供免费方案和付费档位。**关键提醒是：所有速度数据都来自厂商自己的测试，PromptQuorum 没有运行过该软件。",
    "quickAnswerTop": {
      "zh": {
        "question": "RAMen 会在我自己的电脑上运行模型吗？",
        "answer": "据厂商称，会：RAMen 在你的机器上启动内置的 llama.cpp 服务器，其页面称提示词、文件和会话不会离开这台机器。资料列出了三种网络用途：安装下载、从 Hugging Face 下载模型，以及在付费方案上的许可证检查。",
        "bullets": [
          "它兼容 OpenAI API，`ramen connect` 可为你配置 Cline、Continue、Aider、OpenCode 和 Open WebUI。",
          "你可以自带任意 GGUF 模型，也可以让 `ramen start` 选择适合你电脑的模型并下载。",
          "长对话提速需要 NVIDIA RTX 20 系列或更新的显卡，或 Apple silicon Mac；会话保存在任何受支持的机器上都可使用。"
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "快速回答",
        "anchor": "quick-answer"
      },
      {
        "label": "RAMen 是什么？",
        "anchor": "what-is-ramen"
      },
      {
        "label": "获取方式",
        "anchor": "get-it"
      },
      {
        "label": "系统要求",
        "anchor": "requirements"
      },
      {
        "label": "如何上手",
        "anchor": "getting-started"
      },
      {
        "label": "资料证实的功能",
        "anchor": "key-features"
      },
      {
        "label": "方案与价格",
        "anchor": "pricing"
      },
      {
        "label": "数据流向与隐私",
        "anchor": "privacy"
      },
      {
        "label": "适合谁使用",
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
        "label": "资料来源",
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
            "text": "RAMen 是基于 llama.cpp 的专有命令行层，把本地 AI 聊天保存到磁盘，并据厂商称可加快长对话，含免费方案。"
          },
          {
            "type": "plain-terms",
            "text": "你只需安装一条命令、启动它，再让编码智能体或聊天应用指向它；RAMen 会记住每次对话，因此重启后无需等待模型重新读取。"
          }
        ],
        "items": [
          "维护情况：1.0.0 版发布于 2026 年 11 月 6 日，即本评测当天，因此不适用停止维护警告，且该产品尚无长期记录。",
          "费用：免费方案的记忆有限，另有付费订阅和限时终身优惠。",
          "安装：所有系统都通过终端一行命令安装；没有双击安装包，也没有应用商店上架。",
          "数据：据厂商称，除安装、模型下载和付费方案的许可证检查外，没有任何内容离开你的机器。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本评测基于 getramenai.com、其隐私政策和许可协议、安装脚本以及 GitHub 发布数据，核查于 2026 年 11 月 6 日。PromptQuorum 没有安装、运行或基准测试 RAMen，因此不评估速度、稳定性和回答质量。"
          }
        ]
      },
      "overview": {
        "id": "what-is-ramen",
        "title": "RAMen 是什么？",
        "content": [
          "**RAMen 是 NEOTECH Inc. 推出的本地 AI 会话管理器，位于 llama.cpp（大多数本地模型工具所依赖的开源引擎）之前。**它自带一个 llama.cpp 构建（MIT 许可证），并增加了两项功能：把每次对话的模型工作记忆（KV cache）保存到磁盘，并在对话继续时恢复；以及对每个新生成的词，只读取长对话中真正相关的部分。",
          "厂商的原理页面指出，llama.cpp 本身已有槽位保存与恢复功能，也有小工具可将其自动化；RAMen 的主张是对每个会话自动完成这一过程，并检查已保存的缓存是否与模型和设置匹配。该软件是闭源的，适用专有许可协议；公开的 GitHub 仓库只托管下载包。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "获取方式",
        "content": [
          "**RAMen 在每个系统上都通过终端一条命令安装；安装包托管在 GitHub Releases 上，没有图形安装程序。**"
        ],
        "columns": [
          "选项",
          "获取方式"
        ],
        "rows": [
          {
            "选项": "Mac（Apple silicon）",
            "获取方式": "终端：`curl -fsSL https://getramenai.com/install.sh | bash`"
          },
          {
            "选项": "Linux（x64）",
            "获取方式": "同一条命令；当 `nvidia-smi` 可用时选择 NVIDIA 版本，否则选择 CPU 版本"
          },
          {
            "选项": "Windows 10/11（x64）",
            "获取方式": "PowerShell：`irm https://getramenai.com/install.ps1 | iex`"
          },
          {
            "选项": "手动下载",
            "获取方式": "[GitHub 上的 RAMen 发布页](https://github.com/MatthewLeibel/ramen-releases/releases/latest)，.tar.gz 或 .zip，附 .sha256 校验和"
          },
          {
            "选项": "手机",
            "获取方式": "未提及 iPhone 或 Android 应用"
          },
          {
            "选项": "官网",
            "获取方式": "[getramenai.com](https://getramenai.com)"
          },
          {
            "选项": "隐私政策",
            "获取方式": "[RAMen 隐私政策](https://getramenai.com/privacy.html)；[许可协议](https://getramenai.com/terms.html)"
          }
        ],
        "note": "核查的版本：1.0.0（2026 年 11 月 6 日）。需要使用终端：安装后，如果你没有模型，`ramen start` 会下载一个模型并在后台启动 RAMen。安装程序会把 `~/.ramen/bin` 添加到你的 shell PATH，并将已保存的聊天保存在 `~/.context-engine`；`rm -rf ~/.ramen` 可删除该程序。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "系统要求",
        "content": [
          "**厂商没有给出最低内存、磁盘或操作系统版本的数字；页面只说你需要一台能运行 llama.cpp 的电脑。**"
        ],
        "columns": [
          "项目",
          "资料所述"
        ],
        "rows": [
          {
            "项目": "Mac",
            "资料所述": "仅支持 Apple silicon（M1 或更新）；安装程序会拒绝 Intel Mac"
          },
          {
            "项目": "Windows",
            "资料所述": "Windows 10 和 11，64 位；CPU 版本，检测到 NVIDIA GPU 时使用 NVIDIA 版本"
          },
          {
            "项目": "Linux",
            "资料所述": "仅支持 x64，CPU 或 NVIDIA 版本；安装程序目前会拒绝 ARM Linux"
          },
          {
            "项目": "长对话提速",
            "资料所述": "需要 NVIDIA RTX 20 系列或更新的显卡，或 Apple silicon Mac；未声称适用于仅有 CPU 的机器"
          },
          {
            "项目": "模型",
            "资料所述": "任意 GGUF 模型，或 RAMen 选择并下载的模型；模型许可证由各模型厂商自己规定"
          },
          {
            "项目": "账户",
            "资料所述": "免费方案无需账户；付费方案使用来自 Polar 商店的许可证密钥"
          }
        ]
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "如何上手",
        "content": [
          "**以下步骤依据厂商的页面；PromptQuorum 没有运行过这些步骤。**"
        ],
        "numberedItems": [
          {
            "title": "运行安装程序",
            "whyItMatters": "使用适合你系统的一行命令；脚本会下载安装包，并在安装前校验其 SHA-256 校验和。"
          },
          {
            "title": "启动 RAMen",
            "whyItMatters": "`ramen start` 会找到适合你电脑的模型，从 Hugging Face 下载并在后台运行，你也可以让它指向你已有的 GGUF 文件。"
          },
          {
            "title": "连接你的应用",
            "whyItMatters": "`ramen connect cline`（或 continue、aider、opencode、open-webui）会配置对应工具；任何兼容 OpenAI API 的工具都可以使用本地端点。"
          },
          {
            "title": "只在需要时才激活付费方案",
            "whyItMatters": "`ramen activate YOUR-KEY` 会解锁付费功能；`ramen deactivate` 可释放一个密钥上占用的一台电脑名额。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "资料证实的功能",
        "content": [
          "**以下每一项都是厂商的描述；速度和质量数据是厂商自己的测量，不是独立测试。**"
        ],
        "items": [
          "**会话记忆。**每次对话的 KV cache 会随进行过程保存到磁盘，并在对话继续时恢复，即使重启之后也一样；许多聊天和智能体共用少数几个活跃 GPU 槽位，其余的在磁盘上等待。厂商报告称，在 Mac mini M2 Pro 上用 Qwen3 4B 处理 70,082 个 token 的聊天时，重新打开只需 3.7 秒，而不是重新读取所需的 12 分 47 秒。",
          "**选择性读取。**RAMen 不会为每个新生成的词读取全部记忆，而是为每个数据块保留摘要，只读取约 8,000 个 token 的内容，外加对话的开头和最新部分，厂商称这建立在关于查询感知稀疏注意力的研究（Quest，2024 年）之上。只有当长度超过在你的机器上更快的阈值（介于 16K 和约 43K token 之间）时，它才会自动启用。",
          "**厂商基准测试。**在 NVIDIA RTX A6000 上使用 Qwen3 32B 和 87K token 的对话，厂商测得每秒 20.4 个 token，而普通 llama.cpp 为 8.4；在 NVIDIA L4 上使用 Qwen3 4B 处理 128K token 时为 42.2 对 9.1；在高速 NVIDIA 显卡上，长度低于约 30K 至 40K token 时提升很小。",
          "**多个智能体，一块 GPU。**在智能体之间切换时，每个智能体都从停下的地方继续；厂商称，三个智能体共用一块 GPU 时，每个智能体的历史有 99.7% 被复用。",
          "**厂商自己说明的限制。**选择性读取加快的是生成，而不是对新的长提示词的首次读取；它目前还不能与草稿模型（推测解码）叠加使用；滑动窗口模型的速度提升很小。"
        ]
      },
      "pricing": {
        "id": "pricing",
        "itemHeadings": true,
        "title": "方案与价格",
        "content": [
          "**RAMen 有免费方案，以及通过 Polar 商店销售的付费订阅；每次安装都先提供 14 天全部功能，无需银行卡。**"
        ],
        "columns": [
          "方案",
          "价格",
          "包含内容"
        ],
        "rows": [
          {
            "方案": "免费",
            "价格": "$0，无截止日期",
            "包含内容": "记住最近 3 次聊天，一次一个聊天；可配合你的应用使用"
          },
          {
            "方案": "Pro",
            "价格": "每月 $3.99 或每年 $29",
            "包含内容": "记住每次聊天和智能体会话，多个智能体共用一块 GPU，长对话保持流畅，最多 3 台电脑"
          },
          {
            "方案": "Team",
            "价格": "每人每月 $9.99，3 人起",
            "包含内容": "团队每位成员都享有 Pro，席位可转移，优先邮件支持"
          },
          {
            "方案": "Server",
            "价格": "每台服务器每月 $149",
            "包含内容": "一台 GPU 机器为团队提供服务，每人一个密钥，按人统计用量，Prometheus 指标"
          },
          {
            "方案": "Enterprise",
            "价格": "按需报价",
            "包含内容": "适用于无法联网的机器的离线许可证、发票、采购订单、支持协议"
          }
        ],
        "note": "该网站还宣传了一项限时优惠：前 1,000 位买家可一次性支付 $19.99 获得终身 Pro。价格以美元计，销售税在结账时处理；购买前请在厂商网站上确认。许可协议称，付费许可证到期后，RAMen 会继续以免费方案运行。"
      },
      "privacy": {
        "id": "privacy",
        "title": "数据流向与隐私",
        "content": [
          "**隐私政策（2026 年 11 月 6 日生效）称，RAMen 在你的电脑上运行，你的提示词、文件、对话和模型都留在本机。**它列出了 RAMen 会发送的内容：在付费方案上，启动时向支付服务商 Polar 发送许可证密钥、商店标识符和一个匿名机器标签（平台加上由机器派生的短代码，绝不是机器名称）；以及当 `ramen start` 下载模型时，连接 Hugging Face，后者会看到你的互联网地址和所请求的文件。该政策称，软件中没有分析、崩溃报告或跟踪功能。",
          "网站使用 Cloudflare Web Analytics 统计访问量，不使用 Cookie，并托管在 GitHub Pages 上。购买通过 Polar 完成，Polar 会向厂商提供你的姓名、电子邮件地址、国家或地区以及所购买的内容。网站上的发布提醒表单会把你的电子邮件地址存储在 Cloudflare。首页称，软件在两次许可证检查之间可离线继续运行，Enterprise 方案还提供离线许可证。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "这些是厂商的说法，不是审计结果，PromptQuorum 也没有检查过网络流量。该软件是闭源的，因此无法对照代码核实这些说法。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "适合谁使用",
        "items": [
          "**编码智能体用户：**用 Cline、Continue、Aider 或 OpenCode 配合本地模型，并因长会话在重启后需要重新读取而浪费时间的人。",
          "**拥有 NVIDIA RTX 或 Apple silicon 机器的用户：**经常进行超长对话，据厂商报告提升最大的场景。",
          "**谨慎的买家：**想在付费之前先试用免费方案和 14 天试用期的人。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "我们无法核实的内容",
        "items": [
          "**速度与质量。**所有基准测试数据以及回答完全一致的说法都来自厂商；PromptQuorum 没有运行任何测试，也没有找到独立的测量结果。",
          "**成熟度。**1.0.0 版是首个公开版本，该产品在 Product Hunt 上的发布定于 2026 年 11 月 8 日，因此尚无关于稳定性和支持的长期记录。",
          "**源代码与审计。**RAMen 没有公开源代码，也没有第三方审计；许可协议禁止逆向工程，但法律允许的情形除外。",
          "**系统要求。**没有公布最低内存、磁盘或操作系统版本，也不支持 Intel Mac、ARM Linux 或手机。",
          "**许可细节。**付费方案的许可证检查有描述，但其具体流量未经检查。"
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
            "应用": "[llama.cpp](/zh/power-local-llm/llama-cpp-explained)",
            "平台": "Mac、Windows、Linux",
            "价格 / 许可证": "免费 / MIT",
            "主要区别": "RAMen 所基于的开源引擎；槽位保存与恢复需手动操作"
          },
          {
            "应用": "[Ollama](/zh/power-local-llm/ollama-review)",
            "平台": "Mac、Windows、Linux",
            "价格 / 许可证": "免费 / MIT",
            "主要区别": "开源模型运行器，带模型库和本地 API"
          },
          {
            "应用": "[KoboldCpp](/zh/power-local-llm/koboldcpp-review)",
            "平台": "Mac、Windows、Linux",
            "价格 / 许可证": "免费 / AGPL-3.0",
            "主要区别": "单文件 llama.cpp 分支，内置聊天和写作界面"
          }
        ],
        "note": "选择之前，请在各应用自己的页面确认其当前价格、许可证和支持平台。"
      },
      "faq": {
        "id": "faq",
        "title": "常见问题",
        "faqs": [
          {
            "q": "选择性读取会改变模型给出的回答吗？",
            "a": "厂商称，当所选内容覆盖整个对话时，RAMen 写出的文本与普通注意力完全相同，并称在 16K 至 64K token 的 54 次长文档测试中，54 次给出的回答都与完整注意力相同。这些是厂商自己的测试，未经独立核实。"
          },
          {
            "q": "如果我停止付费，已保存的聊天会怎样？",
            "a": "RAMen 会继续以免费方案运行：该方案保留最近使用的 3 个已保存聊天，并在保存新聊天时从磁盘清除更早的保存副本（厂商已于 2026 年 11 月 6 日向 PromptQuorum 确认）。对话本身仍保留在你的应用中，因为 RAMen 保存的是模型的工作内存，而不是聊天文本；因此较早的聊天仍可使用，只是会像普通 llama.cpp 一样从头重新读取。"
          },
          {
            "q": "RAMen 可以离线使用吗？",
            "a": "厂商称，模型存放在磁盘上之后即可离线使用，付费方案在两次许可证检查之间也可继续运行。首次安装和任何模型下载都需要联网。"
          },
          {
            "q": "RAMen 是 llama.cpp 团队做的吗？",
            "a": "不是。RAMen 由 NEOTECH Inc. 制作，并称其基于 llama.cpp，后者附带 MIT 许可证；llama.cpp 项目本身是一个独立的开源项目。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "结论",
        "content": "RAMen 提供了一个可免费试用、基于 llama.cpp 的专有层：它把聊天保存到磁盘，几秒内恢复智能体会话，并且据厂商的测量，能在 NVIDIA RTX 和 Apple silicon 机器上加快超长对话。另一方面，它是首个版本，没有长期记录，只能通过终端安装，是闭源的，付费方案在启动时会联系许可证服务器，而且每一项性能数据都来自厂商自己。它适合经常进行长时间本地对话或运行编码智能体、并愿意先用免费方案测试的人；需要经过审计的隐私保障或经过验证的速度说法的人，应等待独立结果。"
      },
      "sources": {
        "id": "sources",
        "title": "资料来源",
        "items": [
          "[RAMen 网站](https://getramenai.com) — 功能、平台、方案和安装命令，核查于 2026 年 11 月 6 日。",
          "[RAMen 工作原理](https://getramenai.com/how-it-works.html) — 会话记忆、选择性读取、基准测试和限制，核查于 2026 年 11 月 6 日。",
          "[RAMen 隐私政策](https://getramenai.com/privacy.html) — 发送的数据，2026 年 11 月 6 日生效，核查于 2026 年 11 月 6 日。",
          "[RAMen 许可协议](https://getramenai.com/terms.html) — 许可条款和方案限制，核查于 2026 年 11 月 6 日。",
          "[GitHub 上的 RAMen 发布页](https://github.com/MatthewLeibel/ramen-releases/releases/tag/v1.0.0) — 1.0.0 版安装包和发布日期，核查于 2026 年 11 月 6 日。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "相关阅读",
        "items": [
          "[llama.cpp 详解](/zh/power-local-llm/llama-cpp-explained) — RAMen 底层的开源引擎。",
          "[Ollama 评测](/zh/power-local-llm/ollama-review) — 带本地 API 的开源本地模型运行器。",
          "[KoboldCpp 评测](/zh/power-local-llm/koboldcpp-review) — 带聊天界面的单文件 llama.cpp 分支。",
          "[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。"
        ]
      }
    }
  },
  ko: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Overview & Reference",
    "heroImage": "/images/ramen-review-hero-ko.webp",
    "title": "RAMen 리뷰: 무료 플랜을 갖춘 llama.cpp용 로컬 세션 메모리",
    "seoTitle": "RAMen 리뷰: 로컬 AI 세션 메모리와 속도 향상",
    "intro": "RAMen은 NEOTECH Inc.가 만든 독점 명령줄 계층으로, 자체 llama.cpp 빌드로 로컬 모델을 실행하고 모든 채팅과 에이전트 세션을 디스크에 저장해 재시작 후에도 몇 초 만에 다시 열며, 긴 대화도 빠르게 유지한다고 밝힙니다. Apple silicon Mac, Windows 10과 11, Linux에서 실행되고 OpenAI 호환 API를 제공하며 무료 플랜이 있습니다. 이 리뷰는 무엇을 설치하는지, 비용은 얼마인지, 데이터가 어디로 가는지, 어떤 주장이 개발사 자체 측정에만 근거하는지를 다룹니다.",
    "metaDescription": "RAMen 리뷰: llama.cpp 기반 독점 세션 메모리, Mac, Windows, Linux 지원, 무료 플랜과 개발사가 주장하는 긴 대화 가속. 설치, 가격, 개인정보.",
    "twitterDescription": "RAMen 리뷰: 모든 채팅을 디스크에 저장하고 개발사에 따르면 긴 대화를 빠르게 하는 llama.cpp 로컬 계층, 무료 플랜 제공. 개발사 페이지가 확인한 것과 검증하지 못한 것.",
    "audience": "긴 대화나 코딩 에이전트에 로컬 모델을 쓰면서 RAMen이 무엇을 설치하고, 비용이 얼마이며, 네트워크로 무엇을 보내는지, 어떤 속도 주장이 개발사 자체 수치인지 알고 싶은 분.",
    "readTime": "6분 읽기",
    "educationalLevel": "Intermediate",
    "affiliateDisclosure": false,
    "primaryTerm": "RAMen 리뷰",
    "targetKeywords": [
      "ramen 로컬 ai 리뷰",
      "ramen llama.cpp",
      "로컬 llm 세션 메모리",
      "llama.cpp kv 캐시 저장 복원",
      "로컬 ai 긴 대화 속도",
      "getramenai",
      "ramen openai 호환 api"
    ],
    "current_models_mentioned": [
      "Qwen3"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "NVIDIA RTX GPU",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**RAMen(버전 1.0.0, 2026년 11월 6일 출시)은 각 채팅을 디스크에 저장하여 개발사에 따르면 몇 초 만에 다시 여는 llama.cpp 위의 독점 로컬 계층이며, 무료 플랜과 유료 등급이 있습니다.** 가장 중요한 주의점은 모든 속도 수치가 개발사 자체 테스트에서 나왔으며 PromptQuorum은 이 소프트웨어를 실행해 보지 않았다는 것입니다.",
    "quickAnswerTop": {
      "ko": {
        "question": "RAMen은 모델을 내 컴퓨터에서 실행합니까?",
        "answer": "개발사에 따르면 그렇습니다. RAMen은 내 컴퓨터에서 번들된 llama.cpp 서버를 시작하며, 개발사 페이지는 프롬프트, 파일, 세션이 컴퓨터를 떠나지 않는다고 밝힙니다. 출처가 밝히는 네트워크 사용은 세 가지로, 설치 다운로드, Hugging Face에서의 모델 다운로드, 그리고 유료 플랜의 라이선스 확인입니다.",
        "bullets": [
          "OpenAI API를 지원하며, `ramen connect`가 Cline, Continue, Aider, OpenCode, Open WebUI를 대신 설정해 줍니다.",
          "원하는 GGUF 모델을 가져와 쓰거나, `ramen start`가 컴퓨터에 맞는 모델을 골라 내려받게 할 수 있습니다.",
          "긴 대화 가속에는 NVIDIA RTX 20 시리즈 이상 카드 또는 Apple silicon Mac이 필요하며, 세션 저장은 지원되는 모든 기기에서 작동합니다."
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "빠른 답변",
        "anchor": "quick-answer"
      },
      {
        "label": "RAMen이란?",
        "anchor": "what-is-ramen"
      },
      {
        "label": "설치 방법",
        "anchor": "get-it"
      },
      {
        "label": "요구 사항",
        "anchor": "requirements"
      },
      {
        "label": "시작하는 방법",
        "anchor": "getting-started"
      },
      {
        "label": "출처가 확인한 기능",
        "anchor": "key-features"
      },
      {
        "label": "플랜과 가격",
        "anchor": "pricing"
      },
      {
        "label": "데이터 흐름과 개인정보",
        "anchor": "privacy"
      },
      {
        "label": "이런 분께 적합합니다",
        "anchor": "who-should-use"
      },
      {
        "label": "확인하지 못한 내용",
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
        "label": "총평",
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
            "text": "RAMen은 로컬 AI 채팅을 디스크에 저장하고 개발사에 따르면 긴 대화를 빠르게 해 주는 llama.cpp 위의 독점 명령줄 계층이며, 무료 플랜이 있습니다."
          },
          {
            "type": "plain-terms",
            "text": "명령어 하나로 설치해 시작한 뒤 코딩 에이전트나 채팅 앱을 RAMen에 연결하면, RAMen이 각 대화를 기억하므로 재시작 후 모델이 대화를 다시 읽을 때까지 기다리지 않아도 됩니다."
          }
        ],
        "items": [
          "유지보수: 버전 1.0.0은 이 리뷰와 같은 날인 2026년 11월 6일에 공개되었으므로 업데이트 중단 경고는 해당되지 않으며, 제품은 아직 이력이 없습니다.",
          "비용: 메모리가 제한된 무료 플랜, 그리고 유료 구독과 출시 기념 평생 이용 제안이 있습니다.",
          "설치: 모든 시스템에서 터미널 한 줄 명령어를 사용하며, 더블클릭 설치 프로그램이나 앱 스토어 등록은 없습니다.",
          "데이터: 개발사에 따르면 설치, 모델 다운로드, 유료 플랜의 라이선스 확인을 제외하면 아무것도 컴퓨터를 떠나지 않습니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이 리뷰는 2026년 11월 6일에 확인한 getramenai.com, 개인정보 처리방침, 라이선스 계약, 설치 스크립트, GitHub 릴리스 데이터를 바탕으로 합니다. PromptQuorum은 RAMen을 설치·실행·벤치마크하지 않았으므로 속도, 안정성, 답변 품질은 평가하지 않습니다."
          }
        ]
      },
      "overview": {
        "id": "what-is-ramen",
        "title": "RAMen이란?",
        "content": [
          "**RAMen은 NEOTECH Inc.가 만든 로컬 AI 세션 관리자이며, 대부분의 로컬 모델 도구가 기반으로 삼는 오픈소스 엔진 llama.cpp 앞단에 놓입니다.** 자체 llama.cpp 빌드(MIT 라이선스)를 함께 제공하며 두 가지가 추가됩니다. 하나는 각 대화에 대한 모델의 작업 메모리(KV 캐시)를 디스크에 저장했다가 대화가 이어질 때 복원하는 것이고, 다른 하나는 새 단어를 만들 때마다 긴 대화 중 중요한 부분만 읽는 것입니다.",
          "개발사의 작동 방식 페이지는 llama.cpp에 이미 슬롯 저장과 복원 기능이 있고 이를 자동화하는 작은 도구들이 있다고 언급합니다. RAMen이 내세우는 점은 이를 모든 세션에 자동으로 수행하고, 저장된 캐시가 모델 및 설정과 일치하는지 확인한다는 것입니다. 소프트웨어는 독점 라이선스 계약에 따른 비공개 소스이며, 공개 GitHub 저장소는 다운로드 패키지만 호스팅합니다."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "설치 방법",
        "content": [
          "**RAMen은 시스템별 명령어 한 줄로 터미널에서 설치하며, 패키지는 GitHub Releases에서 제공되고 그래픽 설치 프로그램은 없습니다.**"
        ],
        "columns": [
          "옵션",
          "입수 방법"
        ],
        "rows": [
          {
            "옵션": "Mac(Apple silicon)",
            "입수 방법": "터미널: `curl -fsSL https://getramenai.com/install.sh | bash`"
          },
          {
            "옵션": "Linux(x64)",
            "입수 방법": "같은 명령어, `nvidia-smi`가 작동하면 NVIDIA 빌드를, 아니면 CPU 빌드를 선택"
          },
          {
            "옵션": "Windows 10/11(x64)",
            "입수 방법": "PowerShell: `irm https://getramenai.com/install.ps1 | iex`"
          },
          {
            "옵션": "수동 다운로드",
            "입수 방법": "[GitHub의 RAMen 릴리스](https://github.com/MatthewLeibel/ramen-releases/releases/latest), .sha256 체크섬이 포함된 .tar.gz 또는 .zip"
          },
          {
            "옵션": "휴대폰",
            "입수 방법": "iPhone이나 Android 앱은 언급되지 않음"
          },
          {
            "옵션": "웹사이트",
            "입수 방법": "[getramenai.com](https://getramenai.com)"
          },
          {
            "옵션": "개인정보 처리방침",
            "입수 방법": "[RAMen 개인정보 처리방침](https://getramenai.com/privacy.html), [라이선스 계약](https://getramenai.com/terms.html)"
          }
        ],
        "note": "리뷰한 버전: 1.0.0(2026년 11월 6일). 터미널이 필요합니다. 설치 후 `ramen start`는 모델이 없으면 내려받고 RAMen을 백그라운드에서 시작합니다. 설치 프로그램은 `~/.ramen/bin`을 셸 PATH에 추가하고 저장된 채팅을 `~/.context-engine`에 보관하며, `rm -rf ~/.ramen`으로 프로그램을 제거합니다."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "요구 사항",
        "content": [
          "**개발사는 최소 RAM, 디스크, OS 버전 수치를 밝히지 않으며, 페이지에는 llama.cpp를 실행할 수 있는 컴퓨터가 필요하다고만 나와 있습니다.**"
        ],
        "columns": [
          "항목",
          "출처의 기재 내용"
        ],
        "rows": [
          {
            "항목": "Mac",
            "출처의 기재 내용": "Apple silicon(M1 이상)만 지원하며, 설치 프로그램은 Intel Mac을 거부함"
          },
          {
            "항목": "Windows",
            "출처의 기재 내용": "Windows 10과 11, 64비트. CPU 빌드이며 NVIDIA GPU가 감지되면 NVIDIA 빌드 사용"
          },
          {
            "항목": "Linux",
            "출처의 기재 내용": "x64만 지원, CPU 또는 NVIDIA 빌드. 설치 프로그램은 현재 ARM Linux를 거부함"
          },
          {
            "항목": "긴 대화 가속",
            "출처의 기재 내용": "NVIDIA RTX 20 시리즈 이상 카드 또는 Apple silicon Mac 필요. CPU 전용 컴퓨터에는 적용된다고 주장하지 않음"
          },
          {
            "항목": "모델",
            "출처의 기재 내용": "GGUF 모델이면 무엇이든 가능하며, RAMen이 골라 내려받은 모델도 사용 가능. 모델 라이선스는 각 모델 제작사의 것"
          },
          {
            "항목": "계정",
            "출처의 기재 내용": "무료 플랜은 필요 없음. 유료 플랜은 Polar 스토어의 라이선스 키 사용"
          }
        ]
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "시작하는 방법",
        "content": [
          "**이 단계는 개발사 페이지를 따른 것이며, PromptQuorum은 직접 실행해 보지 않았습니다.**"
        ],
        "numberedItems": [
          {
            "title": "설치 프로그램 실행",
            "whyItMatters": "사용 중인 시스템에 맞는 한 줄 명령어를 사용하십시오. 스크립트는 패키지를 내려받고 설치 전에 SHA-256 체크섬을 확인합니다."
          },
          {
            "title": "RAMen 시작",
            "whyItMatters": "`ramen start`는 컴퓨터에 맞는 모델을 찾아 Hugging Face에서 내려받고 백그라운드에서 실행하며, 이미 가지고 있는 GGUF 파일을 지정할 수도 있습니다."
          },
          {
            "title": "앱 연결",
            "whyItMatters": "`ramen connect cline`(또는 continue, aider, opencode, open-webui)이 도구를 설정하며, OpenAI API를 지원하는 도구는 모두 로컬 엔드포인트를 사용할 수 있습니다."
          },
          {
            "title": "유료 플랜은 원할 때만 활성화",
            "whyItMatters": "`ramen activate YOUR-KEY`가 유료 기능을 켜며, `ramen deactivate`는 키에 연결된 컴퓨터 한 대를 해제합니다."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "출처가 확인한 기능",
        "content": [
          "**아래 항목은 모두 개발사의 설명이며, 속도와 품질 수치는 개발사 자체 측정값으로 독립적인 테스트가 아닙니다.**"
        ],
        "items": [
          "**세션 메모리.** 각 대화의 KV 캐시는 진행하는 동안 디스크에 저장되고 대화가 이어질 때 복원되며, 재시작 후에도 마찬가지입니다. 여러 채팅과 에이전트가 소수의 실시간 GPU 슬롯을 공유하고 나머지는 디스크에서 대기합니다. 개발사는 Mac mini M2 Pro에서 Qwen3 4B로 70,082토큰 채팅이 12분 47초의 재독해 대신 3.7초 만에 다시 열렸다고 보고합니다.",
          "**선택적 읽기.** 새 단어마다 전체 메모리를 읽는 대신, RAMen은 각 블록의 요약을 보관하고 약 8,000토큰 분량에 대화의 시작 부분과 최근 부분을 더해 읽습니다. 개발사는 이것이 쿼리 인식 희소 어텐션 연구(Quest, 2024)에 기반한다고 밝힙니다. 내 컴퓨터에서 더 빨라지는 길이, 즉 16K에서 약 43K 토큰 사이를 넘을 때만 자동으로 켜집니다.",
          "**개발사 벤치마크.** 개발사는 NVIDIA RTX A6000에서 Qwen3 32B와 87K 토큰 대화로 일반 llama.cpp의 초당 8.4토큰 대비 20.4토큰을, NVIDIA L4에서 Qwen3 4B와 128K 토큰으로 9.1 대비 42.2를 측정했습니다. 빠른 NVIDIA 카드에서 대략 30K~40K 토큰 미만에서는 이득이 작습니다.",
          "**에이전트 여러 개, GPU 하나.** 에이전트 사이를 전환하면 각각 멈춘 지점에서 재개되며, 개발사는 에이전트 세 개가 GPU 하나를 공유할 때 각 에이전트 기록의 99.7퍼센트가 재사용된다고 제시합니다.",
          "**개발사가 밝힌 한계.** 선택적 읽기는 글을 쓰는 속도를 높일 뿐 새 긴 프롬프트의 첫 읽기를 빠르게 하지는 않으며, 아직 초안 모델(추측 디코딩)과 함께 쓸 수 없고, 슬라이딩 윈도우 모델은 속도 이득이 작습니다."
        ]
      },
      "pricing": {
        "id": "pricing",
        "itemHeadings": true,
        "title": "플랜과 가격",
        "content": [
          "**RAMen에는 무료 플랜과 Polar 스토어에서 판매하는 유료 구독이 있으며, 모든 설치는 카드 없이 모든 기능을 14일간 제공하며 시작합니다.**"
        ],
        "columns": [
          "플랜",
          "가격",
          "포함 내용"
        ],
        "rows": [
          {
            "플랜": "Free",
            "가격": "$0, 종료일 없음",
            "포함 내용": "최근 채팅 3개를 한 번에 하나씩 기억. 내 앱과 연동"
          },
          {
            "플랜": "Pro",
            "가격": "월 $3.99 또는 연 $29",
            "포함 내용": "모든 채팅과 에이전트 세션 기억, GPU 하나에서 여러 에이전트, 긴 대화 속도 유지, 컴퓨터 최대 3대"
          },
          {
            "플랜": "Team",
            "가격": "1인당 월 $9.99, 3인부터",
            "포함 내용": "팀 전원에게 Pro, 이동 가능한 좌석, 우선 이메일 지원"
          },
          {
            "플랜": "Server",
            "가격": "서버당 월 $149",
            "포함 내용": "팀에 서비스하는 GPU 머신 한 대, 1인당 키 하나, 1인당 사용량, Prometheus 지표"
          },
          {
            "플랜": "Enterprise",
            "가격": "문의",
            "포함 내용": "인터넷이 없는 기기용 오프라인 라이선스, 청구서, 구매 주문서, 지원 계약"
          }
        ],
        "note": "사이트는 출시 기념 제안으로 처음 1,000명의 구매자에게 평생 Pro를 한 번에 $19.99로 광고하기도 합니다. 가격은 미국 달러이며 판매세는 결제 시 처리됩니다. 구매 전에 개발사 사이트에서 확인하십시오. 유료 라이선스가 종료되면 라이선스 계약에 따라 RAMen은 무료 플랜으로 계속 작동합니다."
      },
      "privacy": {
        "id": "privacy",
        "title": "데이터 흐름과 개인정보",
        "content": [
          "**개인정보 처리방침(2026년 11월 6일 시행)은 RAMen이 사용자의 컴퓨터에서 실행되며 프롬프트, 파일, 대화, 모델이 그곳에 머문다고 밝힙니다.** RAMen이 보내는 항목도 나열합니다. 유료 플랜에서는 시작할 때 라이선스 키, 스토어 식별자, 익명 머신 레이블(플랫폼과 머신에서 파생한 짧은 코드이며 머신 이름은 아님)을 결제 제공업체 Polar로 보내고, `ramen start`가 모델을 내려받을 때는 Hugging Face에 연결하여 Hugging Face가 인터넷 주소와 요청한 파일을 보게 됩니다. 방침은 소프트웨어에 분석, 충돌 보고, 추적이 없다고 명시합니다.",
          "웹사이트는 쿠키 없이 Cloudflare Web Analytics로 방문 수를 집계하며 GitHub Pages에서 호스팅됩니다. 구매는 Polar를 통해 이루어지며, Polar는 개발사에 이름, 이메일 주소, 국가, 구매 내역을 전달합니다. 사이트의 출시 알림 양식은 이메일 주소를 Cloudflare에 저장합니다. 홈페이지는 소프트웨어가 라이선스 확인 사이에는 오프라인에서도 계속 작동한다고 밝히며, Enterprise 플랜은 오프라인 라이선스를 제공합니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이는 개발사의 진술이지 감사 결과가 아니며, PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다. 소프트웨어가 비공개 소스이므로 주장을 코드와 대조해 확인할 수 없습니다."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "이런 분께 적합합니다",
        "items": [
          "**코딩 에이전트 사용자**: 로컬 모델에 Cline, Continue, Aider, OpenCode를 연결해 쓰며, 재시작 후 긴 세션을 다시 읽어야 해서 시간을 잃는 분.",
          "**NVIDIA RTX 또는 Apple silicon 기기 소유자**: 매우 긴 대화를 다루는 분으로, 개발사가 가장 큰 이득을 보고하는 경우입니다.",
          "**신중한 구매자**: 비용을 내기 전에 무료 플랜과 14일 체험을 써 보고 싶은 분."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "확인하지 못한 내용",
        "items": [
          "**속도와 품질.** 모든 벤치마크 수치와 동일한 답변이 나온다는 주장은 개발사에서 나온 것이며, PromptQuorum은 테스트를 실행하지 않았고 독립적인 측정도 찾지 못했습니다.",
          "**성숙도.** 버전 1.0.0은 첫 공개 릴리스이며 제품의 Product Hunt 출시는 2026년 11월 8일로 예고되어 있으므로, 안정성과 지원에 대한 장기 기록이 없습니다.",
          "**소스와 감사.** RAMen의 공개 소스 코드는 없고 제3자 감사도 없으며, 라이선스 계약은 법이 허용하는 경우를 제외하고 리버스 엔지니어링을 금지합니다.",
          "**요구 사항.** 최소 RAM, 디스크, OS 버전은 공개되어 있지 않으며, Intel Mac, ARM Linux, 휴대폰은 지원되지 않습니다.",
          "**라이선스 세부 사항.** 유료 플랜의 라이선스 확인은 설명되어 있으나 실제 트래픽은 검사하지 않았습니다."
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
            "앱": "[llama.cpp](/ko/power-local-llm/llama-cpp-explained)",
            "플랫폼": "Mac, Windows, Linux",
            "가격 / 라이선스": "무료 / MIT",
            "핵심 차이": "RAMen의 기반이 되는 오픈소스 엔진이며, 슬롯 저장과 복원은 수동"
          },
          {
            "앱": "[Ollama](/ko/power-local-llm/ollama-review)",
            "플랫폼": "Mac, Windows, Linux",
            "가격 / 라이선스": "무료 / MIT",
            "핵심 차이": "모델 라이브러리와 로컬 API를 갖춘 오픈소스 모델 실행기"
          },
          {
            "앱": "[KoboldCpp](/ko/power-local-llm/koboldcpp-review)",
            "플랫폼": "Mac, Windows, Linux",
            "가격 / 라이선스": "무료 / AGPL-3.0",
            "핵심 차이": "채팅 및 글쓰기 인터페이스를 내장한 단일 파일 llama.cpp 포크"
          }
        ],
        "note": "선택하기 전에 각 앱의 현재 가격, 라이선스, 플랫폼을 해당 앱 페이지에서 확인하십시오."
      },
      "faq": {
        "id": "faq",
        "title": "자주 묻는 질문",
        "faqs": [
          {
            "q": "선택적 읽기는 모델이 내놓는 답변을 바꿉니까?",
            "a": "개발사에 따르면 선택된 부분이 대화 전체를 포괄할 때 RAMen은 일반 어텐션과 정확히 같은 텍스트를 쓰며, 16K에서 64K 토큰의 긴 문서 테스트 54건 모두에서 전체 어텐션과 같은 답변을 냈다고 합니다. 이는 개발사의 테스트이며 독립적으로 확인되지 않았습니다."
          },
          {
            "q": "결제를 중단하면 저장된 채팅은 어떻게 됩니까?",
            "a": "RAMen은 무료 플랜으로 계속 작동하며, 무료 플랜은 가장 최근에 사용한 저장 채팅 3개를 유지하고 새 채팅이 저장될 때마다 그보다 오래된 저장본을 디스크에서 삭제합니다(개발사가 2026년 11월 6일 PromptQuorum에 확인). 대화 자체는 앱에 그대로 남습니다. RAMen이 저장하는 것은 채팅 텍스트가 아니라 모델의 작업 메모리이기 때문입니다. 따라서 오래된 채팅도 계속 사용할 수 있으며, 일반 llama.cpp처럼 처음부터 다시 읽을 뿐입니다."
          },
          {
            "q": "RAMen은 오프라인에서 작동합니까?",
            "a": "개발사에 따르면 모델이 디스크에 있으면 오프라인에서 작동하며, 유료 플랜은 라이선스 확인 사이에도 계속 작동합니다. 처음 설치와 모델 다운로드에는 인터넷 연결이 필요합니다."
          },
          {
            "q": "RAMen은 llama.cpp 팀이 만든 것입니까?",
            "a": "아닙니다. RAMen은 NEOTECH Inc.가 만들었으며 MIT 라이선스로 제공되는 llama.cpp를 기반으로 한다고 밝힙니다. llama.cpp 프로젝트 자체는 별개의 오픈소스 프로젝트입니다."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "총평",
        "content": "RAMen은 채팅을 디스크에 저장하고, 에이전트 세션을 몇 초 만에 재개하며, 개발사의 측정에 따르면 NVIDIA RTX와 Apple silicon 기기에서 매우 긴 대화의 속도를 높이는 llama.cpp 위의 독점 계층을 무료로 써 볼 수 있게 제공합니다. 반면 첫 릴리스라 이력이 없고, 터미널에서만 설치하며, 비공개 소스이고, 유료 플랜은 시작할 때 라이선스 서버에 접속하며, 모든 성능 수치가 개발사 자체 수치입니다. 긴 로컬 채팅이나 코딩 에이전트를 쓰면서 무료 플랜으로 시험해 볼 의향이 있는 분께 적합하며, 감사된 개인정보 보호나 검증된 속도 주장이 필요한 분은 독립적인 결과를 기다리는 것이 좋습니다."
      },
      "sources": {
        "id": "sources",
        "title": "출처",
        "items": [
          "[RAMen 웹사이트](https://getramenai.com) — 기능, 플랫폼, 플랜, 설치 명령어. 2026년 11월 6일 확인.",
          "[RAMen 작동 방식](https://getramenai.com/how-it-works.html) — 세션 메모리, 선택적 읽기, 벤치마크, 한계. 2026년 11월 6일 확인.",
          "[RAMen 개인정보 처리방침](https://getramenai.com/privacy.html) — 전송되는 데이터, 2026년 11월 6일 시행. 2026년 11월 6일 확인.",
          "[RAMen 라이선스 계약](https://getramenai.com/terms.html) — 라이선스 조건과 플랜 한도. 2026년 11월 6일 확인.",
          "[GitHub의 RAMen 릴리스](https://github.com/MatthewLeibel/ramen-releases/releases/tag/v1.0.0) — 버전 1.0.0 패키지와 출시일. 2026년 11월 6일 확인."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "관련 글",
        "items": [
          "[llama.cpp 설명](/ko/power-local-llm/llama-cpp-explained) — RAMen의 기반이 되는 오픈소스 엔진.",
          "[Ollama 리뷰](/ko/power-local-llm/ollama-review) — 로컬 API를 갖춘 오픈소스 로컬 모델 실행기.",
          "[KoboldCpp 리뷰](/ko/power-local-llm/koboldcpp-review) — 채팅 인터페이스를 갖춘 단일 파일 llama.cpp 포크.",
          "[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그."
        ]
      }
    }
  },
}

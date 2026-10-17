import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    heroImage: '/images/jan-vs-lm-studio-overview-hero-en.webp',
    title: 'Jan vs LM Studio: Which Is Better?',
    dateModified: '2026-10-17',
    seoTitle: 'Jan vs LM Studio 2026: Which to Use? | PromptQuorum',
    metaDescription: 'Jan (Apache 2.0, MCP) vs LM Studio (polished UI, model store): both free, offline, on Mac, Windows and Linux. Pick Jan to customize, LM Studio for ease.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing a local LLM desktop app',
    parentArticle: '/local-llms/lm-studio-vs-jan-ai',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Jan vs LM Studio: which is better?',
        answer: 'Jan is open source (Apache 2.0) with MCP and extension support. LM Studio is closed-source freeware with a more polished UI and a built-in model store. Both run on Mac, Windows and Linux. For customization, choose Jan. For ease of use, choose LM Studio.',
        bullets: [
          'Jan: open source (Apache 2.0), MCP, NVIDIA/AMD/Vulkan/Metal',
          'LM Studio: polished UI, built-in model store, free for work use',
          'Both are free, work offline and run on Mac, Windows and Linux',
        ],
        updatedDate: '2026-10',
      },
      de: {
        question: 'Jan vs LM Studio: Welches ist besser?',
        answer: 'Jan ist Open Source (Apache 2.0) mit MCP- und Erweiterungsunterstützung. LM Studio ist proprietäre Freeware mit ausgefeilterer Oberfläche und integriertem Modellshop. Beide laufen unter Mac, Windows und Linux. Für Anpassbarkeit empfiehlt sich Jan, für einfache Bedienung LM Studio.',
        bullets: [
          'Jan: Open Source (Apache 2.0), MCP, NVIDIA/AMD/Vulkan/Metal',
          'LM Studio: ausgefeilte Oberfläche, integrierter Modellshop, kostenlos auch beruflich nutzbar',
          'Beide sind kostenlos, arbeiten offline und laufen unter Mac, Windows und Linux',
        ],
        updatedDate: '2026-10',
      },
      fr: {
        question: 'Jan vs LM Studio : lequel est le meilleur ?',
        answer: 'Jan est open source (Apache 2.0) avec prise en charge de MCP et des extensions. LM Studio est un logiciel gratuit à code fermé, avec une interface plus soignée et une boutique de modèles intégrée. Les deux fonctionnent sous Mac, Windows et Linux. Pour la personnalisation, choisissez Jan ; pour la facilité d\'utilisation, LM Studio.',
        bullets: [
          'Jan : open source (Apache 2.0), MCP, NVIDIA/AMD/Vulkan/Metal',
          'LM Studio : interface soignée, boutique de modèles intégrée, gratuit aussi au travail',
          'Les deux sont gratuits, fonctionnent hors ligne et tournent sous Mac, Windows et Linux',
        ],
        updatedDate: '2026-10',
      },
      ja: {
        question: 'Jan vs LM Studio：どちらが優れていますか？',
        answer: 'JanはMCPと拡張機能に対応したオープンソース（Apache 2.0）です。LM Studioはクローズドソースの無料ソフトで、より洗練されたUIと組み込みモデルストアを備えます。どちらもMac・Windows・Linuxで動作します。カスタマイズ重視ならJan、使いやすさ重視ならLM Studioがお勧めです。',
        bullets: [
          'Jan：オープンソース（Apache 2.0）、MCP、NVIDIA/AMD/Vulkan/Metal',
          'LM Studio：洗練されたUI、組み込みモデルストア、業務利用も無料',
          '両方とも無料でオフライン動作し、Mac・Windows・Linuxに対応',
        ],
        updatedDate: '2026-10',
      },
      zh: {
        question: 'Jan vs LM Studio：哪个更好？',
        answer: 'Jan 是开源软件（Apache 2.0），支持 MCP 和扩展。LM Studio 是闭源免费软件，拥有更精致的界面和内置模型商店。两者都支持 Mac、Windows 和 Linux。需要自定义选 Jan，追求易用性选 LM Studio。',
        bullets: [
          'Jan：开源（Apache 2.0）、MCP、NVIDIA/AMD/Vulkan/Metal',
          'LM Studio：精致界面、内置模型商店、工作场景也免费',
          '两者均免费、可离线运行，支持 Mac、Windows 和 Linux',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Jan is open source under the Apache 2.0 license; LM Studio is closed-source but free to use, at home and at work',
          'Both run on Windows, macOS and Linux; LM Studio on Mac requires Apple Silicon (no Intel Macs)',
          'Both accelerate on NVIDIA, AMD and Apple GPUs, include a local API server and run local models fully offline',
          'LM Studio has a built-in model store with one-click downloads; Jan downloads models from Hugging Face inside the app — the choice is customization vs. polish',
        ],
      },
      body1: {
        title: 'The Open Source vs Polish Trade-off',
        content: [
          '<strong>Jan ([github.com/janhq/jan](https://github.com/janhq/jan)) is open source under the Apache 2.0 license — you can read, fork, and modify the code.</strong> LM Studio ([lmstudio.ai](https://lmstudio.ai)) is closed-source software that is free to use at home and at work under its terms of use.',
          'Jan supports MCP (Model Context Protocol) servers, extensions and plugins, and connects to cloud model providers, so one app can switch between local and frontier models. Its Agents and Cowork preview lets it work on tasks with files, commands and web research. LM Studio has been an MCP host since version 0.3.17.',
          'LM Studio\'s main advantage is polish: model search, one-click downloads and chat in one interface. Jan also downloads models (Llama, Gemma, Qwen and others) from Hugging Face inside the app, so neither app requires manual file handling.',
          'For developers who want to build on top of the application, Jan\'s open-source codebase is a meaningful advantage. For everyone else, the choice comes down to which workflow matches your daily use.',
        ],
      },
      body2: {
        title: 'Which Fits Your Workflow',
        content: [
          '<strong>Use Jan if you want an open-source app you can modify, with MCP, extensions and Vulkan or AMD flexibility. Use LM Studio if you want a polished interface with a built-in model store and do not need customization.</strong> Latest releases: Jan 0.8.6 (9 October 2026) and LM Studio 0.4.26 (13 October 2026).',
          'For the full comparison with setup steps and API details, see the <a href="/local-llms/lm-studio-vs-jan-ai" class="text-primary hover:underline">Jan vs LM Studio in-depth guide</a>.',
        ],
        columns: ['Feature', '[Jan](https://jan.ai)', '[LM Studio](https://lmstudio.ai)'],
        rows: [
          { 'Feature': 'License', 'Jan': 'Apache 2.0 (open source)', 'LM Studio': 'Proprietary (free)' },
          { 'Feature': 'OS support', 'Jan': 'Mac / Windows / Linux', 'LM Studio': 'Mac (Apple Silicon) / Windows / Linux' },
          { 'Feature': 'GPU backends', 'Jan': 'NVIDIA / AMD / Vulkan / Metal', 'LM Studio': 'NVIDIA / AMD / Apple Metal' },
          { 'Feature': 'Model source', 'Jan': 'Hugging Face, in-app', 'LM Studio': 'Built-in store' },
          { 'Feature': 'Extensibility', 'Jan': 'Open source / MCP / extensions', 'LM Studio': 'MCP host / closed source' },
          { 'Feature': 'Best for', 'Jan': 'Customization / open source', 'LM Studio': 'Ease of use / polish' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Jan vs LM Studio',
        faqs: [
          {
            q: 'Is Jan really free?',
            a: 'Yes. Jan is open source under the Apache 2.0 license and free to download and use; the full source code is on GitHub at [github.com/janhq/jan](https://github.com/janhq/jan). Local models run at no cost. Cloud model providers you connect to bill you themselves.',
          },
          {
            q: 'Is LM Studio free to use at work?',
            a: 'Yes. LM Studio is free for personal and work use, with no license form needed (see [lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)). Paid plans such as Enterprise add SSO, model and MCP gating.',
          },
          {
            q: 'Does LM Studio work on Linux?',
            a: 'Yes. LM Studio ships for Linux on x64 and ARM64 as an AppImage (Ubuntu 20.04 or newer). Jan also runs on Linux, with .deb, AppImage and Flathub packages.',
          },
          {
            q: 'Can both Jan and LM Studio use AMD GPUs?',
            a: 'Yes. Jan lists NVIDIA, AMD, Vulkan and Metal GPU support. LM Studio supports AMD GPUs through its llama.cpp Vulkan runtime and through ROCm on Linux. On macOS, Apple Metal handles GPU acceleration for both apps. For a terminal-based alternative on any OS, see <a href="/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>.',
          },
          {
            q: 'What is Jan.ai?',
            a: 'Jan ([jan.ai](https://jan.ai)) is an open-source desktop app from Menlo Research that runs LLMs locally and offline. It includes a local OpenAI-compatible API server, MCP support and optional connections to cloud models. "Jan AI" and "Jan.ai" refer to the same app.',
          },
          {
            q: 'What is LM Studio Bionic?',
            a: 'Bionic is a separate LM Studio agent app for Mac and Windows that uses open models for coding, research and file work. It runs local models through the LM Studio runtime and can use larger cloud models through an LM Studio account. It does not replace the LM Studio chat app.',
          },
          {
            q: 'Which app has a larger model library?',
            a: 'LM Studio offers a built-in store for browsing and one-click downloads. Jan downloads models from Hugging Face inside the app. Both run GGUF models, so the same model files work in either app.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    heroImage: '/images/jan-vs-lm-studio-overview-hero-de.webp',
    title: 'Jan vs LM Studio: Welches ist besser?',
    seoTitle: 'Jan vs LM Studio 2026: Was wählen? | PromptQuorum',
    metaDescription: 'Jan (Apache 2.0, MCP) vs LM Studio (ausgefeilte Oberfläche, Modellshop): beide kostenlos, offline, für Mac, Windows und Linux. Anpassung: Jan, Komfort: LM Studio.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      de: {
        question: 'Jan vs LM Studio: Welches ist besser?',
        answer: 'Jan ist Open Source (Apache 2.0) mit MCP- und Erweiterungsunterstützung. LM Studio ist proprietäre Freeware mit ausgefeilterer Oberfläche und integriertem Modellshop. Beide laufen unter Mac, Windows und Linux. Für Anpassbarkeit empfiehlt sich Jan, für einfache Bedienung LM Studio.',
        bullets: [
          'Jan: Open Source (Apache 2.0), MCP, NVIDIA/AMD/Vulkan/Metal',
          'LM Studio: ausgefeilte Oberfläche, integrierter Modellshop, kostenlos auch beruflich nutzbar',
          'Beide sind kostenlos, arbeiten offline und laufen unter Mac, Windows und Linux',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Jan ist Open Source unter der Apache-2.0-Lizenz; LM Studio ist Closed Source, aber privat wie beruflich kostenlos nutzbar',
          'Beide laufen unter Windows, macOS und Linux; LM Studio benötigt auf dem Mac Apple Silicon (keine Intel-Macs)',
          'Beide beschleunigen auf NVIDIA-, AMD- und Apple-GPUs, enthalten einen lokalen API-Server und führen lokale Modelle vollständig offline aus',
          'LM Studio hat einen integrierten Modellshop mit Ein-Klick-Downloads; Jan lädt Modelle direkt in der App von Hugging Face — die Wahl liegt zwischen Anpassbarkeit und Komfort',
        ],
      },
      body1: {
        title: 'Open Source vs. Komfort: Der Kompromiss',
        content: [
          '<strong>Jan ([github.com/janhq/jan](https://github.com/janhq/jan)) ist Open Source unter der Apache-2.0-Lizenz — Sie können den Code lesen, forken und verändern.</strong> LM Studio ([lmstudio.ai](https://lmstudio.ai)) ist Closed-Source-Software, die gemäß ihren Nutzungsbedingungen privat und beruflich kostenlos genutzt werden darf.',
          'Jan unterstützt MCP-Server (Model Context Protocol), Erweiterungen und Plugins und verbindet sich mit Cloud-Modellanbietern, sodass eine App zwischen lokalen und Frontier-Modellen wechseln kann. Die Vorschau „Agents und Cowork“ erledigt Aufgaben mit Dateien, Befehlen und Websuche. LM Studio ist seit Version 0.3.17 ein MCP-Host.',
          'Der Hauptvorteil von LM Studio ist der Feinschliff: Modellsuche, Ein-Klick-Downloads und Chat in einer Oberfläche. Auch Jan lädt Modelle (Llama, Gemma, Qwen und weitere) in der App von Hugging Face, sodass bei keiner App Dateien manuell verwaltet werden müssen.',
          'Für Entwickler, die auf der Anwendung aufbauen möchten, ist Jans Open-Source-Codebasis ein bedeutender Vorteil. Für alle anderen hängt die Wahl davon ab, welcher Workflow zum täglichen Einsatz passt.',
        ],
      },
      body2: {
        title: 'Was zu Ihrem Workflow passt',
        content: [
          '<strong>Nutzen Sie Jan, wenn Sie eine Open-Source-App wünschen, die Sie anpassen können, mit MCP, Erweiterungen und Vulkan- bzw. AMD-Flexibilität. Nutzen Sie LM Studio, wenn Sie eine ausgefeilte Oberfläche mit integriertem Modellshop wünschen und keine Anpassungen benötigen.</strong> Aktuelle Versionen: Jan 0.8.6 (9. Oktober 2026) und LM Studio 0.4.26 (13. Oktober 2026).',
          'Den vollständigen Vergleich mit Einrichtungsschritten und API-Details finden Sie im <a href="/de/local-llms/lm-studio-vs-jan-ai" class="text-primary hover:underline">Jan vs LM Studio Vertiefungsvergleich</a>.',
        ],
        columns: ['Funktion', '[Jan](https://jan.ai)', '[LM Studio](https://lmstudio.ai)'],
        rows: [
          { 'Funktion': 'Lizenz', 'Jan': 'Apache 2.0 (Open Source)', 'LM Studio': 'Proprietär (kostenlos)' },
          { 'Funktion': 'Betriebssystem', 'Jan': 'Mac / Windows / Linux', 'LM Studio': 'Mac (Apple Silicon) / Windows / Linux' },
          { 'Funktion': 'GPU-Backends', 'Jan': 'NVIDIA / AMD / Vulkan / Metal', 'LM Studio': 'NVIDIA / AMD / Apple Metal' },
          { 'Funktion': 'Modellquelle', 'Jan': 'Hugging Face, in der App', 'LM Studio': 'Integrierter Shop' },
          { 'Funktion': 'Erweiterbarkeit', 'Jan': 'Open Source / MCP / Erweiterungen', 'LM Studio': 'MCP-Host / Closed Source' },
          { 'Funktion': 'Am besten für', 'Jan': 'Anpassbarkeit / Open Source', 'LM Studio': 'Bedienkomfort / Feinschliff' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Jan vs LM Studio',
        faqs: [
          {
            q: 'Ist Jan wirklich kostenlos?',
            a: 'Ja. Jan ist Open Source unter der Apache-2.0-Lizenz und kostenlos herunterzuladen und zu nutzen; der vollständige Quellcode liegt auf GitHub unter [github.com/janhq/jan](https://github.com/janhq/jan). Lokale Modelle laufen kostenlos. Verbundene Cloud-Modellanbieter berechnen ihre Kosten selbst.',
          },
          {
            q: 'Ist LM Studio auch beruflich kostenlos nutzbar?',
            a: 'Ja. LM Studio ist für private und berufliche Nutzung kostenlos, ein Lizenzformular ist nicht nötig (siehe [lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)). Kostenpflichtige Pläne wie Enterprise ergänzen SSO sowie Modell- und MCP-Steuerung.',
          },
          {
            q: 'Funktioniert LM Studio unter Linux?',
            a: 'Ja. LM Studio gibt es für Linux auf x64 und ARM64 als AppImage (Ubuntu 20.04 oder neuer). Auch Jan läuft unter Linux, mit .deb-, AppImage- und Flathub-Paketen.',
          },
          {
            q: 'Können sowohl Jan als auch LM Studio AMD-GPUs nutzen?',
            a: 'Ja. Jan nennt Unterstützung für NVIDIA-, AMD-, Vulkan- und Metal-GPUs. LM Studio unterstützt AMD-GPUs über seine llama.cpp-Vulkan-Runtime und unter Linux über ROCm. Auf macOS übernimmt Apple Metal die GPU-Beschleunigung beider Apps. Für eine terminalbasierte Alternative auf jedem Betriebssystem siehe <a href="/de/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>.',
          },
          {
            q: 'Was ist Jan.ai?',
            a: 'Jan ([jan.ai](https://jan.ai)) ist eine Open-Source-Desktop-App von Menlo Research, die LLMs lokal und offline ausführt. Sie bietet einen lokalen OpenAI-kompatiblen API-Server, MCP-Unterstützung und optionale Verbindungen zu Cloud-Modellen. „Jan AI“ und „Jan.ai“ bezeichnen dieselbe App.',
          },
          {
            q: 'Was ist LM Studio Bionic?',
            a: 'Bionic ist eine eigenständige Agent-App von LM Studio für Mac und Windows, die offene Modelle für Programmierung, Recherche und Dateiarbeit nutzt. Sie führt lokale Modelle über die LM-Studio-Runtime aus und kann über ein LM-Studio-Konto größere Cloud-Modelle verwenden. Die LM-Studio-Chat-App ersetzt sie nicht.',
          },
          {
            q: 'Welche App hat die größere Modellbibliothek?',
            a: 'LM Studio bietet einen integrierten Shop zum Durchsuchen und für Ein-Klick-Downloads. Jan lädt Modelle in der App von Hugging Face. Beide führen GGUF-Modelle aus, dieselben Modelldateien funktionieren also in beiden Apps.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    heroImage: '/images/jan-vs-lm-studio-overview-hero-fr.webp',
    title: 'Jan vs LM Studio : lequel est le meilleur ?',
    seoTitle: 'Jan ou LM Studio 2026 : que choisir ? | PromptQuorum',
    metaDescription: 'Jan (Apache 2.0, MCP) vs LM Studio (interface soignée, boutique de modèles) : gratuits, hors ligne, sur Mac, Windows et Linux. Jan pour personnaliser, LM Studio pour la facilité.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      fr: {
        question: 'Jan vs LM Studio : lequel est le meilleur ?',
        answer: 'Jan est open source (Apache 2.0) avec prise en charge de MCP et des extensions. LM Studio est un logiciel gratuit à code fermé, avec une interface plus soignée et une boutique de modèles intégrée. Les deux fonctionnent sous Mac, Windows et Linux. Pour la personnalisation, choisissez Jan ; pour la facilité d\'utilisation, LM Studio.',
        bullets: [
          'Jan : open source (Apache 2.0), MCP, NVIDIA/AMD/Vulkan/Metal',
          'LM Studio : interface soignée, boutique de modèles intégrée, gratuit aussi au travail',
          'Les deux sont gratuits, fonctionnent hors ligne et tournent sous Mac, Windows et Linux',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Jan est open source sous licence Apache 2.0 ; LM Studio est à code fermé mais gratuit, à la maison comme au travail',
          'Les deux fonctionnent sous Windows, macOS et Linux ; LM Studio sur Mac exige Apple Silicon (pas de Mac Intel)',
          'Les deux accélèrent sur les GPU NVIDIA, AMD et Apple, incluent un serveur d\'API local et exécutent les modèles locaux entièrement hors ligne',
          'LM Studio propose une boutique de modèles intégrée avec téléchargement en un clic ; Jan télécharge les modèles depuis Hugging Face dans l\'application — le choix oppose personnalisation et confort',
        ],
      },
      body1: {
        title: 'Open source vs ergonomie : le compromis',
        content: [
          '<strong>Jan ([github.com/janhq/jan](https://github.com/janhq/jan)) est open source sous licence Apache 2.0 — vous pouvez lire, forker et modifier le code.</strong> LM Studio ([lmstudio.ai](https://lmstudio.ai)) est un logiciel à code fermé, gratuit à la maison comme au travail selon ses conditions d\'utilisation.',
          'Jan prend en charge les serveurs MCP (Model Context Protocol), les extensions et les plugins, et se connecte à des fournisseurs de modèles cloud : une seule application passe des modèles locaux aux modèles de pointe. Son aperçu « Agents et Cowork » traite des tâches avec des fichiers, des commandes et des recherches web. LM Studio est un hôte MCP depuis la version 0.3.17.',
          'Le principal atout de LM Studio est son soin : recherche de modèles, téléchargement en un clic et chat dans une seule interface. Jan télécharge aussi les modèles (Llama, Gemma, Qwen et d\'autres) depuis Hugging Face dans l\'application, aucune des deux n\'exige donc de manipuler les fichiers à la main.',
          'Pour les développeurs qui veulent construire au-dessus de l\'application, le code open source de Jan est un avantage notable. Pour tous les autres, le choix dépend du flux de travail qui correspond à votre usage quotidien.',
        ],
      },
      body2: {
        title: 'Ce qui correspond à votre workflow',
        content: [
          '<strong>Utilisez Jan si vous voulez une application open source modifiable, avec MCP, extensions et souplesse Vulkan ou AMD. Utilisez LM Studio si vous voulez une interface soignée avec boutique de modèles intégrée sans besoin de personnalisation.</strong> Dernières versions : Jan 0.8.6 (9 octobre 2026) et LM Studio 0.4.26 (13 octobre 2026).',
          'Pour la comparaison complète avec les étapes de configuration et les détails de l\'API, consultez le <a href="/fr/local-llms/lm-studio-vs-jan-ai" class="text-primary hover:underline">guide approfondi Jan vs LM Studio</a>.',
        ],
        columns: ['Fonctionnalité', '[Jan](https://jan.ai)', '[LM Studio](https://lmstudio.ai)'],
        rows: [
          { 'Fonctionnalité': 'Licence', 'Jan': 'Apache 2.0 (open source)', 'LM Studio': 'Propriétaire (gratuit)' },
          { 'Fonctionnalité': 'Support OS', 'Jan': 'Mac / Windows / Linux', 'LM Studio': 'Mac (Apple Silicon) / Windows / Linux' },
          { 'Fonctionnalité': 'Backends GPU', 'Jan': 'NVIDIA / AMD / Vulkan / Metal', 'LM Studio': 'NVIDIA / AMD / Apple Metal' },
          { 'Fonctionnalité': 'Source des modèles', 'Jan': 'Hugging Face, dans l\'app', 'LM Studio': 'Boutique intégrée' },
          { 'Fonctionnalité': 'Extensibilité', 'Jan': 'Open source / MCP / extensions', 'LM Studio': 'Hôte MCP / code fermé' },
          { 'Fonctionnalité': 'Idéal pour', 'Jan': 'Personnalisation / open source', 'LM Studio': 'Facilité / confort d\'usage' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur Jan vs LM Studio',
        faqs: [
          {
            q: 'Jan est-il vraiment gratuit ?',
            a: 'Oui. Jan est open source sous licence Apache 2.0 et gratuit à télécharger et à utiliser ; le code source complet est sur GitHub : [github.com/janhq/jan](https://github.com/janhq/jan). Les modèles locaux tournent sans frais. Les fournisseurs de modèles cloud auxquels vous vous connectez facturent eux-mêmes.',
          },
          {
            q: 'LM Studio est-il gratuit pour un usage professionnel ?',
            a: 'Oui. LM Studio est gratuit pour un usage personnel et professionnel, sans formulaire de licence (voir [lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)). Des offres payantes comme Enterprise ajoutent le SSO et le contrôle des modèles et de MCP.',
          },
          {
            q: 'LM Studio fonctionne-t-il sous Linux ?',
            a: 'Oui. LM Studio existe pour Linux en x64 et ARM64 sous forme d\'AppImage (Ubuntu 20.04 ou plus récent). Jan fonctionne aussi sous Linux, avec des paquets .deb, AppImage et Flathub.',
          },
          {
            q: 'Jan et LM Studio peuvent-ils tous deux utiliser des GPU AMD ?',
            a: 'Oui. Jan indique prendre en charge les GPU NVIDIA, AMD, Vulkan et Metal. LM Studio prend en charge les GPU AMD via son runtime llama.cpp Vulkan, et via ROCm sous Linux. Sur macOS, Apple Metal gère l\'accélération GPU des deux applications. Pour une alternative en terminal sur tout OS, voir <a href="/fr/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>.',
          },
          {
            q: 'Qu\'est-ce que Jan.ai ?',
            a: 'Jan ([jan.ai](https://jan.ai)) est une application de bureau open source de Menlo Research qui exécute des LLM en local et hors ligne. Elle inclut un serveur d\'API local compatible OpenAI, la prise en charge de MCP et des connexions facultatives à des modèles cloud. « Jan AI » et « Jan.ai » désignent la même application.',
          },
          {
            q: 'Qu\'est-ce que LM Studio Bionic ?',
            a: 'Bionic est une application d\'agent distincte de LM Studio, pour Mac et Windows, qui utilise des modèles ouverts pour le code, la recherche et le travail sur fichiers. Elle exécute des modèles locaux via le runtime de LM Studio et peut utiliser de plus grands modèles cloud via un compte LM Studio. Elle ne remplace pas l\'application de chat LM Studio.',
          },
          {
            q: 'Quelle application propose la plus grande bibliothèque de modèles ?',
            a: 'LM Studio propose une boutique intégrée pour parcourir et télécharger en un clic. Jan télécharge les modèles depuis Hugging Face dans l\'application. Les deux exécutent des modèles GGUF : les mêmes fichiers de modèle fonctionnent dans l\'une comme dans l\'autre.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Tool Comparisons',
    heroImage: '/images/jan-vs-lm-studio-overview-hero-ja.webp',
    title: 'Jan vs LM Studio：どちらが優れていますか？',
    seoTitle: 'Jan vs LM Studio 2026：どちらを選ぶ？ | PromptQuorum',
    metaDescription: 'Jan（Apache 2.0・MCP対応）とLM Studio（洗練UI・モデルストア）を比較。どちらも無料・オフライン対応でMac/Windows/Linux対応。カスタマイズならJan、手軽さならLM Studio。',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ja: {
        question: 'Jan vs LM Studio：どちらが優れていますか？',
        answer: 'JanはMCPと拡張機能に対応したオープンソース（Apache 2.0）です。LM Studioはクローズドソースの無料ソフトで、より洗練されたUIと組み込みモデルストアを備えます。どちらもMac・Windows・Linuxで動作します。カスタマイズ重視ならJan、使いやすさ重視ならLM Studioがお勧めです。',
        bullets: [
          'Jan：オープンソース（Apache 2.0）、MCP、NVIDIA/AMD/Vulkan/Metal',
          'LM Studio：洗練されたUI、組み込みモデルストア、業務利用も無料',
          '両方とも無料でオフライン動作し、Mac・Windows・Linuxに対応',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'JanはApache 2.0ライセンスのオープンソース。LM Studioはクローズドソースですが、個人利用も業務利用も無料です',
          'どちらもWindows、macOS、Linuxで動作します。MacではLM StudioにApple Siliconが必要です（Intel Macは非対応）',
          'どちらもNVIDIA・AMD・Apple GPUで高速化でき、ローカルAPIサーバーを備え、ローカルモデルを完全オフラインで実行できます',
          'LM Studioはワンクリックでダウンロードできる組み込みモデルストアを備え、Janはアプリ内からHugging Faceのモデルをダウンロードします。選択基準はカスタマイズ性か洗練度かです',
        ],
      },
      body1: {
        title: 'オープンソース vs 使いやすさ：トレードオフ',
        content: [
          '<strong>Jan（[github.com/janhq/jan](https://github.com/janhq/jan)）はApache 2.0ライセンスのオープンソースで、コードの閲覧・フォーク・改変が可能です。</strong> LM Studio（[lmstudio.ai](https://lmstudio.ai)）はクローズドソースのソフトウェアで、利用規約の範囲で個人利用・業務利用ともに無料です。',
          'JanはMCP（Model Context Protocol）サーバー、拡張機能、プラグインに対応し、クラウドモデルプロバイダーにも接続できるため、1つのアプリでローカルモデルと最先端モデルを切り替えられます。プレビュー中のAgentsとCoworkは、ファイル・コマンド・Web調査を使ったタスクを処理します。LM Studioはバージョン0.3.17からMCPホストとして動作します。',
          'LM Studioの主な強みは洗練度です。モデル検索、ワンクリックダウンロード、チャットを1つの画面で行えます。Janもアプリ内でHugging Faceからモデル（Llama、Gemma、Qwenなど）をダウンロードできるため、どちらも手動でのファイル管理は不要です。',
          'アプリの上に何かを構築したい開発者にとって、Janのオープンソースコードベースは大きな利点です。それ以外の方は、日常の使い方に合うワークフローで選ぶのが基本です。',
        ],
      },
      body2: {
        title: 'あなたのワークフローに合うのはどちら',
        content: [
          '<strong>改変できるオープンソースのアプリが欲しく、MCP・拡張機能・VulkanやAMDの柔軟性を求めるならJanを使用してください。洗練されたUIと組み込みモデルストアを求め、カスタマイズが不要ならLM Studioを使用してください。</strong> 最新リリース：Jan 0.8.6（2026年10月9日）、LM Studio 0.4.26（2026年10月13日）。',
          'セットアップ手順やAPIの詳細を含む完全な比較については、<a href="/ja/local-llms/lm-studio-vs-jan-ai" class="text-primary hover:underline">Jan vs LM Studio 詳細ガイド</a>をご覧ください。',
        ],
        columns: ['機能', '[Jan](https://jan.ai)', '[LM Studio](https://lmstudio.ai)'],
        rows: [
          { '機能': '機能', 'Jan': 'Apache 2.0（オープンソース）', 'LM Studio': '独自（無料）' },
          { '機能': 'OS対応', 'Jan': 'Mac / Windows / Linux', 'LM Studio': 'Mac（Apple Silicon）/ Windows / Linux' },
          { '機能': 'GPUバックエンド', 'Jan': 'NVIDIA / AMD / Vulkan / Metal', 'LM Studio': 'NVIDIA / AMD / Apple Metal' },
          { '機能': 'モデルの入手先', 'Jan': 'Hugging Face（アプリ内）', 'LM Studio': '組み込みストア' },
          { '機能': '拡張性', 'Jan': 'オープンソース / MCP / 拡張機能', 'LM Studio': 'MCPホスト / クローズドソース' },
          { '機能': '推奨対象', 'Jan': 'カスタマイズ / オープンソース', 'LM Studio': '使いやすさ / 洗練度' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Jan vs LM Studioに関するよくある質問',
        faqs: [
          {
            q: 'Janは本当に無料ですか？',
            a: 'はい。JanはApache 2.0ライセンスのオープンソースで、無料でダウンロード・使用できます。完全なソースコードは[github.com/janhq/jan](https://github.com/janhq/jan)で公開されています。ローカルモデルは無料で動作します。接続するクラウドモデルプロバイダーの料金は各社から請求されます。',
          },
          {
            q: 'LM Studioは業務でも無料で使えますか？',
            a: 'はい。LM Studioは個人利用でも業務利用でも無料で、ライセンスフォームは不要です（[lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)を参照）。Enterpriseなどの有料プランでは、SSOやモデル・MCPの制御が追加されます。',
          },
          {
            q: 'LM StudioはLinuxで動作しますか？',
            a: 'はい。LM StudioはLinux向けにx64とARM64のAppImageを提供しています（Ubuntu 20.04以降）。JanもLinuxで動作し、.deb、AppImage、Flathubのパッケージがあります。',
          },
          {
            q: 'JanとLM StudioはどちらもAMD GPUを使えますか？',
            a: 'はい。JanはNVIDIA、AMD、Vulkan、MetalのGPUに対応しています。LM Studioはllama.cppのVulkanランタイムとLinuxのROCm経由でAMD GPUに対応します。macOSでは両アプリともApple MetalがGPUアクセラレーションを担います。OSを問わずターミナルベースの代替を探すなら、<a href="/ja/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>をご覧ください。',
          },
          {
            q: 'Jan.aiとは何ですか？',
            a: 'Jan（[jan.ai](https://jan.ai)）はMenlo Researchが開発するオープンソースのデスクトップアプリで、LLMをローカルかつオフラインで実行します。OpenAI互換のローカルAPIサーバー、MCP対応、クラウドモデルへの任意接続を備えます。「Jan AI」と「Jan.ai」は同じアプリを指します。',
          },
          {
            q: 'LM Studio Bionicとは何ですか？',
            a: 'BionicはLM Studioの独立したエージェントアプリ（Mac・Windows対応）で、オープンモデルをコーディング、リサーチ、ファイル作業に活用します。ローカルモデルはLM Studioのランタイムで実行し、LM Studioアカウント経由でより大きなクラウドモデルも利用できます。LM Studioのチャットアプリの代わりではありません。',
          },
          {
            q: 'どちらのアプリがモデルライブラリが大きいですか？',
            a: 'LM Studioは閲覧とワンクリックダウンロードができる組み込みストアを備えています。Janはアプリ内でHugging Faceからモデルをダウンロードします。どちらもGGUFモデルを実行できるため、同じモデルファイルが両方のアプリで動作します。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Tool Comparisons',
    heroImage: '/images/jan-vs-lm-studio-overview-hero-zh.webp',
    title: 'Jan vs LM Studio：哪个更好？',
    seoTitle: 'Jan vs LM Studio 2026：该选哪个？ | PromptQuorum',
    metaDescription: 'Jan（Apache 2.0，支持 MCP）与 LM Studio（精致界面、模型商店）对比：均免费、可离线，支持 Mac、Windows 和 Linux。要自定义选 Jan，要易用选 LM Studio。',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      zh: {
        question: 'Jan vs LM Studio：哪个更好？',
        answer: 'Jan 是开源软件（Apache 2.0），支持 MCP 和扩展。LM Studio 是闭源免费软件，拥有更精致的界面和内置模型商店。两者都支持 Mac、Windows 和 Linux。需要自定义选 Jan，追求易用性选 LM Studio。',
        bullets: [
          'Jan：开源（Apache 2.0）、MCP、NVIDIA/AMD/Vulkan/Metal',
          'LM Studio：精致界面、内置模型商店、工作场景也免费',
          '两者均免费、可离线运行，支持 Mac、Windows 和 Linux',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Jan 采用 Apache 2.0 许可证开源；LM Studio 闭源，但个人和工作场景均可免费使用',
          '两者都支持 Windows、macOS 和 Linux；LM Studio 在 Mac 上需要 Apple Silicon（不支持 Intel Mac）',
          '两者都可在 NVIDIA、AMD 和 Apple GPU 上加速，内置本地 API 服务器，并可完全离线运行本地模型',
          'LM Studio 内置模型商店，支持一键下载；Jan 在应用内从 Hugging Face 下载模型——选择取决于自定义能力还是精致程度',
        ],
      },
      body1: {
        title: '开源 vs 易用性：权衡取舍',
        content: [
          '<strong>Jan（[github.com/janhq/jan](https://github.com/janhq/jan)）采用 Apache 2.0 许可证开源——您可以阅读、fork 并修改代码。</strong> LM Studio（[lmstudio.ai](https://lmstudio.ai)）是闭源软件，按其使用条款，个人和工作场景均可免费使用。',
          'Jan 支持 MCP（Model Context Protocol）服务器、扩展和插件，并可连接云端模型提供商，一个应用即可在本地模型与前沿模型之间切换。其预览版 Agents 与 Cowork 可借助文件、命令和网络调研完成任务。LM Studio 自 0.3.17 版起即为 MCP 宿主。',
          'LM Studio 的主要优势在于精致：模型搜索、一键下载和聊天集中在同一界面。Jan 同样可在应用内从 Hugging Face 下载模型（Llama、Gemma、Qwen 等），因此两者都无需手动管理文件。',
          '对于想在应用之上进行二次开发的开发者，Jan 的开源代码库是重要优势。对其他人来说，选择取决于哪种工作流更符合日常使用。',
        ],
      },
      body2: {
        title: '哪款应用适合您的工作流',
        content: [
          '<strong>如果您想要可修改的开源应用，并需要 MCP、扩展以及 Vulkan 或 AMD 的灵活性，请使用 Jan。如果您想要精致的界面和内置模型商店，且无需自定义，请使用 LM Studio。</strong> 最新版本：Jan 0.8.6（2026 年 10 月 9 日）和 LM Studio 0.4.26（2026 年 10 月 13 日）。',
          '有关包含安装步骤和 API 详情的完整对比，请参阅 <a href="/zh/local-llms/lm-studio-vs-jan-ai" class="text-primary hover:underline">Jan vs LM Studio 深度指南</a>。',
        ],
        columns: ['功能', '[Jan](https://jan.ai)', '[LM Studio](https://lmstudio.ai)'],
        rows: [
          { '功能': '功能', 'Jan': 'Apache 2.0（开源）', 'LM Studio': '专有（免费）' },
          { '功能': '操作系统支持', 'Jan': 'Mac / Windows / Linux', 'LM Studio': 'Mac（Apple Silicon）/ Windows / Linux' },
          { '功能': 'GPU 后端', 'Jan': 'NVIDIA / AMD / Vulkan / Metal', 'LM Studio': 'NVIDIA / AMD / Apple Metal' },
          { '功能': '模型来源', 'Jan': 'Hugging Face（应用内）', 'LM Studio': '内置商店' },
          { '功能': '可扩展性', 'Jan': '开源 / MCP / 扩展', 'LM Studio': 'MCP 宿主 / 闭源' },
          { '功能': '最适合', 'Jan': '自定义 / 开源', 'LM Studio': '易用性 / 精致程度' },
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 Jan vs LM Studio 的快速解答',
        faqs: [
          {
            q: 'Jan 真的免费吗？',
            a: '是的。Jan 采用 Apache 2.0 许可证开源，可免费下载和使用；完整源代码在 GitHub 上：[github.com/janhq/jan](https://github.com/janhq/jan)。本地模型运行无需付费。您连接的云端模型提供商会自行收费。',
          },
          {
            q: 'LM Studio 工作中也能免费使用吗？',
            a: '可以。LM Studio 个人和工作使用均免费，无需填写许可表单（见 [lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)）。Enterprise 等付费方案增加 SSO 以及模型和 MCP 管控。',
          },
          {
            q: 'LM Studio 能在 Linux 上运行吗？',
            a: '能。LM Studio 提供 Linux 版（x64 和 ARM64，AppImage 格式，需要 Ubuntu 20.04 或更新版本）。Jan 也可在 Linux 上运行，提供 .deb、AppImage 和 Flathub 安装包。',
          },
          {
            q: 'Jan 和 LM Studio 都能使用 AMD GPU 吗？',
            a: '能。Jan 标明支持 NVIDIA、AMD、Vulkan 和 Metal GPU。LM Studio 通过其 llama.cpp Vulkan 运行时支持 AMD GPU，在 Linux 上还可通过 ROCm。在 macOS 上，两款应用均由 Apple Metal 负责 GPU 加速。如需适用于任意操作系统的终端方案，请参阅<a href="/zh/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>。',
          },
          {
            q: 'Jan.ai 是什么？',
            a: 'Jan（[jan.ai](https://jan.ai)）是 Menlo Research 推出的开源桌面应用，可在本地离线运行 LLM。它内置兼容 OpenAI 的本地 API 服务器，支持 MCP，并可选择连接云端模型。“Jan AI”和“Jan.ai”指的是同一个应用。',
          },
          {
            q: 'LM Studio Bionic 是什么？',
            a: 'Bionic 是 LM Studio 推出的独立智能体应用（支持 Mac 和 Windows），用开源模型处理编程、研究和文件工作。它通过 LM Studio 运行时运行本地模型，并可通过 LM Studio 账户使用更大的云端模型。它不会取代 LM Studio 聊天应用。',
          },
          {
            q: '哪个应用的模型库更大？',
            a: 'LM Studio 内置商店，可浏览并一键下载。Jan 在应用内从 Hugging Face 下载模型。两者都能运行 GGUF 模型，因此同一模型文件在两个应用中都可使用。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Tool Comparisons',
    heroImage: '/images/jan-vs-lm-studio-overview-hero-pt.webp',
    title: 'Jan vs LM Studio: Qual é melhor?',
    seoTitle: 'Jan vs LM Studio 2026: qual usar? | PromptQuorum',
    metaDescription: 'Jan (Apache 2.0, MCP) vs LM Studio (interface refinada, loja de modelos): ambos gratuitos, offline, em Mac, Windows e Linux. Jan para personalizar, LM Studio pela facilidade.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores escolhendo um aplicativo desktop para LLMs locais',
    parentArticle: '/local-llms/lm-studio-vs-jan-ai',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'Jan vs LM Studio: qual é melhor?',
        answer: 'Jan é código aberto (Apache 2.0) com suporte a MCP e extensões. LM Studio é freeware de código fechado, com interface mais refinada e loja de modelos integrada. Ambos rodam em Mac, Windows e Linux. Para personalização, escolha Jan; para facilidade de uso, LM Studio.',
        bullets: [
          'Jan: código aberto (Apache 2.0), MCP, NVIDIA/AMD/Vulkan/Metal',
          'LM Studio: interface refinada, loja de modelos integrada, gratuito também no trabalho',
          'Ambos são gratuitos, funcionam offline e rodam em Mac, Windows e Linux',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Jan é código aberto sob a licença Apache 2.0; LM Studio é de código fechado, mas gratuito em casa e no trabalho',
          'Ambos rodam em Windows, macOS e Linux; o LM Studio no Mac exige Apple Silicon (sem Macs Intel)',
          'Ambos aceleram em GPUs NVIDIA, AMD e Apple, incluem servidor de API local e executam modelos locais totalmente offline',
          'LM Studio tem uma loja de modelos integrada com download em um clique; Jan baixa modelos do Hugging Face dentro do app — a escolha é entre personalização e refinamento',
        ],
      },
      body1: {
        title: 'O dilema: código aberto vs. refinamento',
        content: [
          '<strong>Jan ([github.com/janhq/jan](https://github.com/janhq/jan)) é código aberto sob a licença Apache 2.0 — você pode ler, fazer fork e modificar o código.</strong> LM Studio ([lmstudio.ai](https://lmstudio.ai)) é software de código fechado, gratuito em casa e no trabalho conforme seus termos de uso.',
          'Jan oferece suporte a servidores MCP (Model Context Protocol), extensões e plugins, e conecta-se a provedores de modelos em nuvem, de modo que um único app alterna entre modelos locais e de ponta. A prévia de Agents e Cowork executa tarefas com arquivos, comandos e pesquisa na web. O LM Studio é um host MCP desde a versão 0.3.17.',
          'A principal vantagem do LM Studio é o refinamento: busca de modelos, download em um clique e chat em uma só interface. O Jan também baixa modelos (Llama, Gemma, Qwen e outros) do Hugging Face dentro do app, então nenhum dos dois exige manipular arquivos manualmente.',
          'Para desenvolvedores que querem construir sobre a aplicação, a base de código aberto do Jan é uma vantagem significativa. Para todos os outros, a escolha depende de qual fluxo de trabalho combina com seu uso diário.',
        ],
      },
      body2: {
        title: 'Qual se adapta ao seu fluxo de trabalho',
        content: [
          '<strong>Use Jan se quiser um app de código aberto que você possa modificar, com MCP, extensões e flexibilidade de Vulkan ou AMD. Use LM Studio se quiser uma interface refinada com loja de modelos integrada e não precisar de personalização.</strong> Últimas versões: Jan 0.8.6 (9 de outubro de 2026) e LM Studio 0.4.26 (13 de outubro de 2026).',
          'Para a comparação completa com etapas de configuração e detalhes da API, consulte o <a href="/pt/local-llms/lm-studio-vs-jan-ai" class="text-primary hover:underline">guia aprofundado Jan vs LM Studio</a>.',
        ],
        columns: ['Característica', '[Jan](https://jan.ai)', '[LM Studio](https://lmstudio.ai)'],
        rows: [
          { 'Característica': 'Licença', 'Jan': 'Apache 2.0 (código aberto)', 'LM Studio': 'Proprietário (gratuito)' },
          { 'Característica': 'Sistemas operacionais', 'Jan': 'Mac / Windows / Linux', 'LM Studio': 'Mac (Apple Silicon) / Windows / Linux' },
          { 'Característica': 'Backend GPU', 'Jan': 'NVIDIA / AMD / Vulkan / Metal', 'LM Studio': 'NVIDIA / AMD / Apple Metal' },
          { 'Característica': 'Origem dos modelos', 'Jan': 'Hugging Face, no app', 'LM Studio': 'Loja integrada' },
          { 'Característica': 'Extensibilidade', 'Jan': 'Código aberto / MCP / extensões', 'LM Studio': 'Host MCP / código fechado' },
          { 'Característica': 'Melhor para', 'Jan': 'Personalização / código aberto', 'LM Studio': 'Facilidade / refinamento' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre Jan vs LM Studio',
        faqs: [
          {
            q: 'O Jan é realmente gratuito?',
            a: 'Sim. O Jan é código aberto sob a licença Apache 2.0 e gratuito para baixar e usar; o código-fonte completo está no GitHub em [github.com/janhq/jan](https://github.com/janhq/jan). Modelos locais rodam sem custo. Os provedores de modelos em nuvem aos quais você se conecta cobram por conta própria.',
          },
          {
            q: 'O LM Studio é gratuito para uso profissional?',
            a: 'Sim. O LM Studio é gratuito para uso pessoal e profissional, sem formulário de licença (veja [lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)). Planos pagos como o Enterprise adicionam SSO e controle de modelos e MCP.',
          },
          {
            q: 'O LM Studio funciona no Linux?',
            a: 'Sim. O LM Studio tem versão para Linux em x64 e ARM64, como AppImage (Ubuntu 20.04 ou mais recente). O Jan também roda no Linux, com pacotes .deb, AppImage e Flathub.',
          },
          {
            q: 'Tanto o Jan quanto o LM Studio podem usar GPUs AMD?',
            a: 'Sim. O Jan indica suporte a GPUs NVIDIA, AMD, Vulkan e Metal. O LM Studio oferece suporte a GPUs AMD pelo runtime llama.cpp Vulkan e, no Linux, via ROCm. No macOS, o Apple Metal cuida da aceleração de GPU nos dois apps. Para uma alternativa em terminal em qualquer sistema, veja <a href="/pt/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>.',
          },
          {
            q: 'O que é o Jan.ai?',
            a: 'O Jan ([jan.ai](https://jan.ai)) é um app desktop de código aberto da Menlo Research que executa LLMs localmente e offline. Inclui servidor de API local compatível com OpenAI, suporte a MCP e conexões opcionais com modelos em nuvem. “Jan AI” e “Jan.ai” referem-se ao mesmo app.',
          },
          {
            q: 'O que é o LM Studio Bionic?',
            a: 'O Bionic é um app de agente separado do LM Studio, para Mac e Windows, que usa modelos abertos para programação, pesquisa e trabalho com arquivos. Executa modelos locais pelo runtime do LM Studio e pode usar modelos maiores na nuvem por meio de uma conta LM Studio. Não substitui o app de chat do LM Studio.',
          },
          {
            q: 'Qual app tem a maior biblioteca de modelos?',
            a: 'O LM Studio oferece uma loja integrada para navegar e baixar em um clique. O Jan baixa modelos do Hugging Face dentro do app. Ambos executam modelos GGUF, então os mesmos arquivos de modelo funcionam nos dois apps.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Tool Comparisons',
    heroImage: '/images/jan-vs-lm-studio-overview-hero-es.webp',
    title: '¿Jan vs LM Studio: Cuál es mejor?',
    seoTitle: 'Jan vs LM Studio 2026: ¿cuál usar? | PromptQuorum',
    metaDescription: 'Jan (Apache 2.0, MCP) vs LM Studio (interfaz pulida, tienda de modelos): ambos gratis, sin conexión, en Mac, Windows y Linux. Jan para personalizar, LM Studio por su facilidad.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermedio',
    audience: 'Desarrolladores eligiendo una app de escritorio para LLMs locales',
    parentArticle: '/local-llms/lm-studio-vs-jan-ai',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Jan vs LM Studio: cuál es mejor?',
        answer: 'Jan es de código abierto (Apache 2.0) con soporte para MCP y extensiones. LM Studio es freeware de código cerrado, con una interfaz más pulida y una tienda de modelos integrada. Ambos funcionan en Mac, Windows y Linux. Para personalizar, elige Jan; para facilidad de uso, LM Studio.',
        bullets: [
          'Jan: código abierto (Apache 2.0), MCP, NVIDIA/AMD/Vulkan/Metal',
          'LM Studio: interfaz pulida, tienda de modelos integrada, gratis también en el trabajo',
          'Ambos son gratuitos, funcionan sin conexión y corren en Mac, Windows y Linux',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Jan es de código abierto con licencia Apache 2.0; LM Studio es de código cerrado, pero gratis en casa y en el trabajo',
          'Ambos funcionan en Windows, macOS y Linux; LM Studio en Mac requiere Apple Silicon (sin Macs Intel)',
          'Ambos aceleran en GPU NVIDIA, AMD y Apple, incluyen un servidor de API local y ejecutan modelos locales totalmente sin conexión',
          'LM Studio tiene una tienda de modelos integrada con descarga en un clic; Jan descarga modelos de Hugging Face dentro de la app — la elección es entre personalización y pulido',
        ],
      },
      body1: {
        title: 'El dilema: código abierto vs. pulido',
        content: [
          '<strong>Jan ([github.com/janhq/jan](https://github.com/janhq/jan)) es de código abierto con licencia Apache 2.0: puedes leer, hacer fork y modificar el código.</strong> LM Studio ([lmstudio.ai](https://lmstudio.ai)) es software de código cerrado, gratuito en casa y en el trabajo según sus términos de uso.',
          'Jan admite servidores MCP (Model Context Protocol), extensiones y plugins, y se conecta a proveedores de modelos en la nube, de modo que una sola app alterna entre modelos locales y de frontera. Su vista previa de Agents y Cowork realiza tareas con archivos, comandos e investigación web. LM Studio es host de MCP desde la versión 0.3.17.',
          'La principal ventaja de LM Studio es el pulido: búsqueda de modelos, descarga en un clic y chat en una sola interfaz. Jan también descarga modelos (Llama, Gemma, Qwen y otros) de Hugging Face dentro de la app, así que ninguna de las dos exige manejar archivos a mano.',
          'Para desarrolladores que quieren construir sobre la aplicación, el código abierto de Jan es una ventaja significativa. Para todos los demás, la elección depende de qué flujo de trabajo encaja con tu uso diario.',
        ],
      },
      body2: {
        title: 'Cuál se adapta a tu flujo de trabajo',
        content: [
          '<strong>Usa Jan si quieres una app de código abierto que puedas modificar, con MCP, extensiones y flexibilidad de Vulkan o AMD. Usa LM Studio si quieres una interfaz pulida con tienda de modelos integrada y no necesitas personalización.</strong> Últimas versiones: Jan 0.8.6 (9 de octubre de 2026) y LM Studio 0.4.26 (13 de octubre de 2026).',
          'Para la comparación completa con pasos de instalación y detalles de API, consulta la <a href="/es/local-llms/lm-studio-vs-jan-ai" class="text-primary hover:underline">guía en profundidad de Jan vs LM Studio</a>.',
        ],
        columns: ['Característica', '[Jan](https://jan.ai)', '[LM Studio](https://lmstudio.ai)'],
        rows: [
          { 'Característica': 'Licencia', 'Jan': 'Apache 2.0 (código abierto)', 'LM Studio': 'Propietario (gratis)' },
          { 'Característica': 'Sistemas operativos', 'Jan': 'Mac / Windows / Linux', 'LM Studio': 'Mac (Apple Silicon) / Windows / Linux' },
          { 'Característica': 'Backend GPU', 'Jan': 'NVIDIA / AMD / Vulkan / Metal', 'LM Studio': 'NVIDIA / AMD / Apple Metal' },
          { 'Característica': 'Origen de modelos', 'Jan': 'Hugging Face, en la app', 'LM Studio': 'Tienda integrada' },
          { 'Característica': 'Extensibilidad', 'Jan': 'Código abierto / MCP / extensiones', 'LM Studio': 'Host MCP / código cerrado' },
          { 'Característica': 'Ideal para', 'Jan': 'Personalización / código abierto', 'LM Studio': 'Facilidad / pulido' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre Jan vs LM Studio',
        faqs: [
          {
            q: '¿Es Jan realmente gratis?',
            a: 'Sí. Jan es de código abierto con licencia Apache 2.0 y gratis para descargar y usar; el código fuente completo está en GitHub: [github.com/janhq/jan](https://github.com/janhq/jan). Los modelos locales funcionan sin costo. Los proveedores de modelos en la nube a los que te conectes cobran por su cuenta.',
          },
          {
            q: '¿LM Studio es gratis para uso profesional?',
            a: 'Sí. LM Studio es gratis para uso personal y profesional, sin formulario de licencia (ver [lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)). Los planes de pago como Enterprise añaden SSO y control de modelos y MCP.',
          },
          {
            q: '¿LM Studio funciona en Linux?',
            a: 'Sí. LM Studio tiene versión para Linux en x64 y ARM64, como AppImage (Ubuntu 20.04 o posterior). Jan también funciona en Linux, con paquetes .deb, AppImage y Flathub.',
          },
          {
            q: '¿Pueden Jan y LM Studio usar GPU AMD?',
            a: 'Sí. Jan indica soporte para GPU NVIDIA, AMD, Vulkan y Metal. LM Studio admite GPU AMD mediante su runtime llama.cpp Vulkan y, en Linux, mediante ROCm. En macOS, Apple Metal se encarga de la aceleración GPU en ambas apps. Para una alternativa de terminal en cualquier sistema, consulta <a href="/es/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>.',
          },
          {
            q: '¿Qué es Jan.ai?',
            a: 'Jan ([jan.ai](https://jan.ai)) es una app de escritorio de código abierto de Menlo Research que ejecuta LLM de forma local y sin conexión. Incluye un servidor de API local compatible con OpenAI, soporte para MCP y conexiones opcionales a modelos en la nube. «Jan AI» y «Jan.ai» se refieren a la misma app.',
          },
          {
            q: '¿Qué es LM Studio Bionic?',
            a: 'Bionic es una app de agente independiente de LM Studio, para Mac y Windows, que usa modelos abiertos para programación, investigación y trabajo con archivos. Ejecuta modelos locales con el runtime de LM Studio y puede usar modelos más grandes en la nube mediante una cuenta de LM Studio. No sustituye a la app de chat de LM Studio.',
          },
          {
            q: '¿Qué app tiene la biblioteca de modelos más grande?',
            a: 'LM Studio ofrece una tienda integrada para explorar y descargar en un clic. Jan descarga modelos de Hugging Face dentro de la app. Ambas ejecutan modelos GGUF, así que los mismos archivos de modelo funcionan en las dos.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Tool Comparisons',
    heroImage: '/images/jan-vs-lm-studio-overview-hero-ar.webp',
    title: '⁨Jan⁩ مقابل ⁨LM Studio⁩: أيهما أفضل؟',
    seoTitle: 'Jan مقابل LM Studio 2026: أيهما تختار؟ | PromptQuorum',
    metaDescription: '⁨Jan⁩ (⁨Apache 2.0⁩ مع ⁨MCP⁩) مقابل ⁨LM Studio⁩ (واجهة مصقولة ومتجر نماذج): كلاهما مجاني ويعمل دون إنترنت على ⁨Mac⁩ و⁨Windows⁩ و⁨Linux⁩. ⁨Jan⁩ للتخصيص و⁨LM Studio⁩ للسهولة.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يختارون تطبيق سطح مكتب لتشغيل النماذج اللغوية الكبيرة محلياً',
    parentArticle: '/local-llms/lm-studio-vs-jan-ai',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'Jan مقابل LM Studio: أيهما أفضل؟',
        answer: 'Jan مفتوح المصدر (Apache 2.0) ويدعم MCP والإضافات. LM Studio برنامج مجاني مغلق المصدر بواجهة أكثر صقلاً ومتجر نماذج مدمج. كلاهما يعمل على Mac وWindows وLinux. للتخصيص اختر Jan، وللسهولة اختر LM Studio.',
        bullets: [
          'Jan: مفتوح المصدر (Apache 2.0)، MCP، دعم NVIDIA/AMD/Vulkan/Metal',
          'LM Studio: واجهة مصقولة، متجر نماذج مدمج، مجاني للاستخدام المهني أيضاً',
          'كلاهما مجاني ويعمل دون اتصال على Mac وWindows وLinux',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Jan مفتوح المصدر بترخيص Apache 2.0؛ LM Studio مغلق المصدر لكنه مجاني للاستخدام الشخصي والمهني',
          'كلاهما يعمل على Windows وmacOS وLinux؛ يتطلب LM Studio على Mac معالج Apple Silicon (لا يدعم أجهزة Intel)',
          'كلاهما يسرّع على وحدات NVIDIA وAMD وApple، ويتضمن خادم API محلياً، ويشغّل النماذج المحلية دون اتصال بالكامل',
          'LM Studio لديه متجر نماذج مدمج بتنزيل بنقرة واحدة؛ Jan ينزّل النماذج من Hugging Face داخل التطبيق — الاختيار بين التخصيص والصقل',
        ],
      },
      body1: {
        title: 'المعضلة: مفتوح المصدر مقابل الصقل',
        content: [
          '<strong>Jan ([github.com/janhq/jan](https://github.com/janhq/jan)) مفتوح المصدر بترخيص Apache 2.0 — يمكنك قراءة الكود وعمل fork وتعديله.</strong> LM Studio ([lmstudio.ai](https://lmstudio.ai)) برنامج مغلق المصدر، مجاني للاستخدام الشخصي والمهني وفق شروط الاستخدام.',
          'يدعم Jan خوادم MCP (Model Context Protocol) والإضافات، ويتصل بمزوّدي النماذج السحابية، فيتنقل تطبيق واحد بين النماذج المحلية والنماذج الرائدة. وتنفّذ معاينة Agents وCowork مهاماً باستخدام الملفات والأوامر والبحث على الويب. أما LM Studio فهو مضيف MCP منذ الإصدار 0.3.17.',
          'الميزة الرئيسية لـ LM Studio هي الصقل: البحث عن النماذج والتنزيل بنقرة واحدة والدردشة في واجهة واحدة. كما ينزّل Jan النماذج (Llama وGemma وQwen وغيرها) من Hugging Face داخل التطبيق، فلا يتطلب أي منهما التعامل اليدوي مع الملفات.',
          'للمطورين الراغبين في البناء فوق التطبيق، يمثل الكود المفتوح لـ Jan ميزة مهمة. أما للجميع، فيعتمد الاختيار على سير العمل الأنسب لاستخدامك اليومي.',
        ],
      },
      body2: {
        title: 'أيهما يناسب سير عملك',
        content: [
          '<strong>استخدم Jan إذا أردت تطبيقاً مفتوح المصدر يمكنك تعديله، مع MCP والإضافات ومرونة Vulkan وAMD. استخدم LM Studio إذا أردت واجهة مصقولة مع متجر نماذج مدمج ولا تحتاج إلى تخصيص.</strong> أحدث الإصدارات: Jan 0.8.6 (9 أكتوبر 2026) وLM Studio 0.4.26 (13 أكتوبر 2026).',
          'للمقارنة الكاملة مع خطوات التثبيت وتفاصيل API، راجع <a href="/ar/local-llms/lm-studio-vs-jan-ai" class="text-primary hover:underline">الدليل المعمّق لـ Jan مقابل LM Studio</a>.',
        ],
        columns: ['الميزة', '[Jan](https://jan.ai)', '[LM Studio](https://lmstudio.ai)'],
        rows: [
          { 'الميزة': 'الميزة', 'Jan': 'Apache 2.0 (مفتوح المصدر)', 'LM Studio': 'ملكية خاصة (مجاني)' },
          { 'الميزة': 'أنظمة التشغيل', 'Jan': 'Mac، Windows، Linux', 'LM Studio': 'Mac (Apple Silicon)، Windows، Linux' },
          { 'الميزة': 'خلفية GPU', 'Jan': 'NVIDIA / AMD / Vulkan / Metal', 'LM Studio': 'NVIDIA / AMD / Apple Metal' },
          { 'الميزة': 'مصدر النماذج', 'Jan': 'Hugging Face داخل التطبيق', 'LM Studio': 'متجر مدمج' },
          { 'الميزة': 'قابلية التوسع', 'Jan': 'مفتوح المصدر / MCP / إضافات', 'LM Studio': 'مضيف MCP / مغلق المصدر' },
          { 'الميزة': 'الأنسب لـ', 'Jan': 'التخصيص / المصدر المفتوح', 'LM Studio': 'السهولة / الصقل' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة شائعة حول Jan مقابل LM Studio',
        faqs: [
          {
            q: 'هل Jan مجاني فعلاً؟',
            a: 'نعم. Jan مفتوح المصدر بترخيص Apache 2.0 ومجاني للتنزيل والاستخدام؛ الكود المصدري الكامل على GitHub في [github.com/janhq/jan](https://github.com/janhq/jan). تعمل النماذج المحلية دون أي تكلفة. أما مزوّدو النماذج السحابية الذين تتصل بهم فيحاسبونك بأنفسهم.',
          },
          {
            q: 'هل LM Studio مجاني للاستخدام في العمل؟',
            a: 'نعم. LM Studio مجاني للاستخدام الشخصي والمهني دون نموذج ترخيص (انظر [lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)). تضيف الخطط المدفوعة مثل Enterprise تسجيل الدخول الموحد SSO والتحكم في النماذج وMCP.',
          },
          {
            q: 'هل يعمل LM Studio على Linux؟',
            a: 'نعم. يتوفر LM Studio لنظام Linux على x64 وARM64 بصيغة AppImage (Ubuntu 20.04 أو أحدث). كما يعمل Jan على Linux بحزم .deb وAppImage وFlathub.',
          },
          {
            q: 'هل يستطيع كل من Jan وLM Studio استخدام GPU من AMD؟',
            a: 'نعم. يذكر Jan دعم وحدات NVIDIA وAMD وVulkan وMetal. ويدعم LM Studio وحدات AMD عبر بيئة llama.cpp Vulkan، وعبر ROCm على Linux. على macOS يتولى Apple Metal تسريع GPU في التطبيقين. وللحصول على بديل يعمل من الطرفية على أي نظام، راجع <a href="/ar/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>.',
          },
          {
            q: 'ما هو Jan.ai؟',
            a: 'Jan ([jan.ai](https://jan.ai)) تطبيق سطح مكتب مفتوح المصدر من Menlo Research يشغّل نماذج LLM محلياً ودون اتصال. يتضمن خادم API محلياً متوافقاً مع OpenAI ودعماً لـ MCP واتصالاً اختيارياً بالنماذج السحابية. "Jan AI" و"Jan.ai" يشيران إلى التطبيق نفسه.',
          },
          {
            q: 'ما هو LM Studio Bionic؟',
            a: 'Bionic تطبيق وكيل مستقل من LM Studio لأنظمة Mac وWindows، يستخدم النماذج المفتوحة في البرمجة والبحث والعمل على الملفات. يشغّل النماذج المحلية عبر بيئة تشغيل LM Studio ويمكنه استخدام نماذج سحابية أكبر عبر حساب LM Studio. وهو لا يحل محل تطبيق الدردشة LM Studio.',
          },
          {
            q: 'أي تطبيق لديه مكتبة نماذج أكبر؟',
            a: 'يوفر LM Studio متجراً مدمجاً للتصفح والتنزيل بنقرة واحدة. أما Jan فينزّل النماذج من Hugging Face داخل التطبيق. كلاهما يشغّل نماذج GGUF، لذا تعمل ملفات النماذج نفسها في التطبيقين.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Tool Comparisons',
    heroImage: '/images/jan-vs-lm-studio-overview-hero-ko.webp',
    title: 'Jan vs LM Studio: 어느 쪽이 더 낫습니까?',
    seoTitle: 'Jan vs LM Studio 2026: 무엇을 선택할까? | PromptQuorum',
    metaDescription: 'Jan(Apache 2.0, MCP)과 LM Studio(세련된 UI, 모델 스토어) 비교: 둘 다 무료·오프라인, Mac/Windows/Linux 지원. 커스터마이징은 Jan, 편의성은 LM Studio.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: '중급',
    audience: '로컬 LLM 데스크톱 앱을 선택하는 개발자',
    parentArticle: '/local-llms/lm-studio-vs-jan-ai',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama'],
    is_living_page: false,
    targetKeywords: [
      'Jan vs LM Studio 비교',
      'Jan LM Studio 차이점',
      '로컬 LLM 데스크톱 앱 추천',
      'Jan AI 사용법',
      'LM Studio 한국어',
    ],
    readTime: '3분 분량',
    quickAnswerTop: {
      ko: {
        question: 'Jan vs LM Studio: 어느 쪽이 더 낫습니까?',
        answer: 'Jan은 MCP와 확장 기능을 지원하는 오픈 소스(Apache 2.0)입니다. LM Studio는 더 세련된 UI와 내장 모델 스토어를 갖춘 비공개 소스 무료 소프트웨어입니다. 둘 다 Mac, Windows, Linux에서 실행됩니다. 커스터마이징에는 Jan, 사용 편의성에는 LM Studio를 선택하십시오.',
        bullets: [
          'Jan: 오픈 소스(Apache 2.0), MCP, NVIDIA/AMD/Vulkan/Metal',
          'LM Studio: 세련된 UI, 내장 모델 스토어, 업무용으로도 무료',
          '둘 다 무료이며 오프라인으로 작동하고 Mac, Windows, Linux에서 실행됩니다',
        ],
        updatedDate: '2026-10',
      },
    },
    schema: {
      inLanguage: 'ko',
      url: 'https://www.promptquorum.com/ko/prompt-bites/jan-vs-lm-studio',
      'proficiencyLevel': '중급',
    },
    breadcrumbSchema: {
      items: [
        { position: 1, name: '홈', url: 'https://www.promptquorum.com/ko' },
        { position: 2, name: 'Prompt Bites', url: 'https://www.promptquorum.com/ko/prompt-bites' },
        { position: 3, name: 'Jan vs LM Studio 비교', url: 'https://www.promptquorum.com/ko/prompt-bites/jan-vs-lm-studio' },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Jan은 Apache 2.0 라이선스의 오픈 소스이며, LM Studio는 비공개 소스이지만 개인과 업무 모두 무료로 사용할 수 있습니다',
          '둘 다 Windows, macOS, Linux에서 실행됩니다. Mac에서 LM Studio는 Apple Silicon이 필요합니다(Intel Mac 미지원)',
          '둘 다 NVIDIA, AMD, Apple GPU에서 가속되고, 로컬 API 서버를 포함하며, 로컬 모델을 완전히 오프라인으로 실행할 수 있습니다',
          'LM Studio는 원클릭 다운로드가 가능한 내장 모델 스토어를 제공하고, Jan은 앱 안에서 Hugging Face의 모델을 내려받습니다. 선택 기준은 커스터마이징 대 세련미입니다',
        ],
      },
      body1: {
        title: '오픈 소스 대 세련미: 핵심 트레이드오프',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Jan은 Apache 2.0 라이선스 오픈 소스 앱이며, LM Studio는 세련된 UI와 내장 모델 스토어를 제공하는 비공개 소스 소프트웨어입니다.',
          },
          {
            type: 'plain-terms',
            text: 'Jan을 사용하면 소스 코드를 수정하고 확장 기능으로 기능을 추가할 수 있습니다. LM Studio는 앱 안에서 바로 수백 개의 GGUF 모델을 검색하고 다운로드할 수 있습니다.',
          },
        ],
        content: [
          '<strong>Jan ([github.com/janhq/jan](https://github.com/janhq/jan))은 Apache 2.0 라이선스의 오픈 소스입니다. 코드를 읽고, 포크하고, 수정할 수 있습니다.</strong> LM Studio ([lmstudio.ai](https://lmstudio.ai))는 비공개 소스 소프트웨어이며, 이용 약관에 따라 개인과 업무 모두 무료로 사용할 수 있습니다.',
          'Jan은 MCP(Model Context Protocol) 서버, 확장 기능, 플러그인을 지원하고 클라우드 모델 제공업체에도 연결되므로, 하나의 앱에서 로컬 모델과 최신 모델을 오갈 수 있습니다. 미리 보기 중인 Agents와 Cowork는 파일, 명령, 웹 조사를 활용해 작업을 처리합니다. LM Studio는 버전 0.3.17부터 MCP 호스트로 동작합니다.',
          'LM Studio의 주요 장점은 세련미입니다. 모델 검색, 원클릭 다운로드, 채팅을 하나의 화면에서 처리합니다. Jan도 앱 안에서 Hugging Face의 모델(Llama, Gemma, Qwen 등)을 내려받으므로, 어느 쪽도 파일을 수동으로 관리할 필요가 없습니다.',
          '앱 위에 무언가를 구축하려는 개발자에게 Jan의 오픈 소스 코드베이스는 중요한 이점입니다. 그 외의 사용자에게는 일상적인 사용 패턴에 맞는 워크플로우를 선택하는 것이 핵심입니다.',
        ],
      },
      body2: {
        title: '자신의 워크플로우에 맞는 선택',
        content: [
          '<strong>수정할 수 있는 오픈 소스 앱이 필요하고 MCP, 확장 기능, Vulkan 또는 AMD 유연성을 원한다면 Jan을 사용하십시오. 세련된 UI와 내장 모델 스토어를 원하고 커스터마이징이 필요 없다면 LM Studio를 사용하십시오.</strong> 최신 릴리스: Jan 0.8.6(2026년 10월 9일), LM Studio 0.4.26(2026년 10월 13일).',
          '설치 단계 및 API 세부 정보가 포함된 전체 비교는 <a href="/ko/local-llms/lm-studio-vs-jan-ai" class="text-primary hover:underline">Jan vs LM Studio 심층 가이드</a>를 참조하십시오.',
        ],
        columns: ['항목', '[Jan](https://jan.ai)', '[LM Studio](https://lmstudio.ai)'],
        rows: [
          { '항목': '항목', 'Jan': 'Apache 2.0 (오픈 소스)', 'LM Studio': '독점 (무료)' },
          { '항목': '운영 체제', 'Jan': 'Mac, Windows, Linux', 'LM Studio': 'Mac(Apple Silicon), Windows, Linux' },
          { '항목': 'GPU 백엔드', 'Jan': 'NVIDIA / AMD / Vulkan / Metal', 'LM Studio': 'NVIDIA / AMD / Apple Metal' },
          { '항목': '모델 출처', 'Jan': 'Hugging Face (앱 내)', 'LM Studio': '내장 스토어' },
          { '항목': '확장성', 'Jan': '오픈 소스 / MCP / 확장 기능', 'LM Studio': 'MCP 호스트 / 비공개 소스' },
          { '항목': '추천 대상', 'Jan': '커스터마이징 / 오픈 소스', 'LM Studio': '편의성 / 세련미' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Jan vs LM Studio 자주 묻는 질문',
        faqs: [
          {
            q: 'Jan은 정말 무료입니까?',
            a: '예. Jan은 Apache 2.0 라이선스 오픈 소스이며 무료로 내려받아 사용할 수 있습니다. 전체 소스 코드는 GitHub의 [github.com/janhq/jan](https://github.com/janhq/jan)에서 확인할 수 있습니다. 로컬 모델은 무료로 실행됩니다. 연결하는 클라우드 모델 제공업체는 자체적으로 요금을 청구합니다.',
          },
          {
            q: 'LM Studio는 업무용으로도 무료입니까?',
            a: '예. LM Studio는 개인과 업무 모두 무료이며 라이선스 신청서도 필요하지 않습니다([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work) 참조). Enterprise 같은 유료 플랜은 SSO와 모델·MCP 관리 기능을 추가합니다.',
          },
          {
            q: 'LM Studio는 Linux에서 작동합니까?',
            a: '예. LM Studio는 Linux용 x64와 ARM64 AppImage를 제공합니다(Ubuntu 20.04 이상). Jan도 Linux에서 실행되며 .deb, AppImage, Flathub 패키지를 제공합니다.',
          },
          {
            q: 'Jan과 LM Studio 모두 AMD GPU를 사용할 수 있습니까?',
            a: '예. Jan은 NVIDIA, AMD, Vulkan, Metal GPU 지원을 명시합니다. LM Studio는 llama.cpp Vulkan 런타임을 통해, 그리고 Linux에서는 ROCm을 통해 AMD GPU를 지원합니다. macOS에서는 두 앱 모두 Apple Metal이 GPU 가속을 처리합니다. 운영 체제에 관계없이 터미널 기반 대안을 찾는다면 <a href="/ko/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>를 참조하십시오.',
          },
          {
            q: 'Jan.ai란 무엇입니까?',
            a: 'Jan([jan.ai](https://jan.ai))은 Menlo Research가 만든 오픈 소스 데스크톱 앱으로, LLM을 로컬에서 오프라인으로 실행합니다. OpenAI 호환 로컬 API 서버, MCP 지원, 선택적 클라우드 모델 연결을 포함합니다. "Jan AI"와 "Jan.ai"는 같은 앱을 가리킵니다.',
          },
          {
            q: 'LM Studio Bionic이란 무엇입니까?',
            a: 'Bionic은 LM Studio의 별도 에이전트 앱(Mac, Windows)으로, 오픈 모델을 코딩, 리서치, 파일 작업에 활용합니다. 로컬 모델은 LM Studio 런타임으로 실행하고, LM Studio 계정을 통해 더 큰 클라우드 모델도 사용할 수 있습니다. LM Studio 채팅 앱을 대체하지 않습니다.',
          },
          {
            q: '어느 앱이 더 큰 모델 라이브러리를 제공합니까?',
            a: 'LM Studio는 탐색과 원클릭 다운로드가 가능한 내장 스토어를 제공합니다. Jan은 앱 안에서 Hugging Face의 모델을 내려받습니다. 둘 다 GGUF 모델을 실행하므로 같은 모델 파일을 두 앱에서 모두 사용할 수 있습니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 읽을거리',
        items: [
          '[Jan vs LM Studio 심층 가이드](/ko/local-llms/lm-studio-vs-jan-ai)',
          '[Ollama vs LM Studio 비교](/ko/prompt-bites/ollama-vs-lm-studio)',
          '[Ollama 최고의 프론트엔드](/ko/prompt-bites/best-frontend-for-ollama)',
        ],
      },
    },
  },
}

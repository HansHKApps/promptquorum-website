import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-apps-japan-android-overview-hero-en.webp',
    title: 'What Are the Best Local LLM Apps for Android in Japan?',
    seoTitle: 'Best Local LLM Apps for Android in Japan (2026)',
    metaDescription: 'PocketPal AI, MLC Chat and Termux + Ollama run Japanese LLMs offline on Android. Compare Qwen3.5 4B/9B and Llama-3-ELYZA-JP-8B by RAM, setup and APPI fit.',
    publishDate: '2026-05-27',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5 4B', 'Qwen3.5 9B', 'Llama-3-ELYZA-JP-8B', 'Rinna 3.6B'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Samsung Galaxy S24'],
    educationalLevel: 'Intermediate',
    audience: 'Android users in Japan running local LLMs',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-apps-android'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'What are the best local LLM apps for Android in Japan?',
        answer: 'PocketPal AI is the best starting point for Android in Japan: it installs from Google Play and loads any GGUF model, including Llama-3-ELYZA-JP-8B and Qwen3.5. MLC Chat (GitHub APK) and Termux + Ollama suit users who want a fixed prebuilt model list or the full Ollama library.',
        bullets: [
          'PocketPal AI: Google Play install, any GGUF model, full Japanese input',
          'MLC Chat: APK from GitHub (not on Google Play), prebuilt model list only',
          'Termux + Ollama: pkg install ollama, Qwen3.5 9B needs 12 GB RAM or more',
        ],
        updatedDate: '2026-10',
      },
      de: {
        question: 'Welche lokalen LLM-Apps für Android sind in Japan am beliebtesten?',
        answer: 'PocketPal AI ist der beste Einstieg für Android in Japan: Die App lässt sich aus Google Play installieren und lädt jedes GGUF-Modell, darunter Llama-3-ELYZA-JP-8B und Qwen3.5. MLC Chat (GitHub-APK) und Termux + Ollama eignen sich für eine feste Modellliste oder die komplette Ollama-Bibliothek.',
        bullets: [
          'PocketPal AI: Installation über Google Play, beliebige GGUF-Modelle, volle Japanisch-Eingabe',
          'MLC Chat: APK von GitHub (nicht in Google Play), nur vorgefertigte Modellliste',
          'Termux + Ollama: pkg install ollama, Qwen3.5 9B braucht 12 GB RAM oder mehr',
        ],
        updatedDate: '2026-10',
      },
      fr: {
        question: 'Quelles sont les meilleures apps LLM locales pour Android au Japon ?',
        answer: 'PocketPal AI est le meilleur point de départ sur Android au Japon : elle s\'installe depuis Google Play et charge tout modèle GGUF, dont Llama-3-ELYZA-JP-8B et Qwen3.5. MLC Chat (APK GitHub) et Termux + Ollama conviennent à une liste de modèles figée ou à la bibliothèque Ollama complète.',
        bullets: [
          'PocketPal AI : installation via Google Play, tout modèle GGUF, saisie japonaise complète',
          'MLC Chat : APK depuis GitHub (absent de Google Play), liste de modèles préconstruite uniquement',
          'Termux + Ollama : pkg install ollama, Qwen3.5 9B demande 12 Go de RAM ou plus',
        ],
        updatedDate: '2026-10',
      },
      ja: {
        question: '日本で人気のAndroidローカルLLMアプリは？',
        answer: '日本のAndroidでは、Google Playから入れられ、Llama-3-ELYZA-JP-8BやQwen3.5を含む任意のGGUFモデルを読み込めるPocketPal AIが最初の選択肢です。モデル一覧が固定のMLC Chat（GitHubのAPK）や、Ollamaライブラリ全体を使えるTermux + Ollamaは用途が限られます。',
        bullets: [
          'PocketPal AI：Google Playから導入、任意のGGUFモデル、日本語入力に完全対応',
          'MLC Chat：GitHubのAPK（Google Play非掲載）、構築済みモデル一覧のみ',
          'Termux + Ollama：pkg install ollama、Qwen3.5 9Bには12 GB以上のRAMが必要',
        ],
        updatedDate: '2026-10',
      },
      zh: {
        question: '日本最受欢迎的Android本地LLM应用是什么？',
        answer: '在日本的Android设备上，PocketPal AI是最佳起点：可从Google Play安装，并加载任意GGUF模型，包括Llama-3-ELYZA-JP-8B和Qwen3.5。MLC Chat（GitHub的APK）和Termux + Ollama分别适合接受固定模型列表或需要完整Ollama库的用户。',
        bullets: [
          'PocketPal AI：从Google Play安装，支持任意GGUF模型，完整支持日语输入',
          'MLC Chat：GitHub的APK（未上架Google Play），仅限预构建模型列表',
          'Termux + Ollama：pkg install ollama，Qwen3.5 9B需要12 GB或更多内存',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'PocketPal AI is the easiest route in Japan — it installs from Google Play and imports any GGUF model from Hugging Face, including Llama-3-ELYZA-JP-8B (4.92 GB at Q4_K_M)',
          'MLC Chat is not on Google Play — install the demo APK from MLC\'s GitHub; it runs only models from its prebuilt list',
          'Termux + Ollama works with pkg install ollama; install Termux from F-Droid or GitHub, because the Google Play build is experimental',
          'Qwen3.5 4B (3.3 GB) suits 6 GB phones; Llama-3-ELYZA-JP-8B needs about 8 GB RAM and Qwen3.5 9B about 12 GB RAM (PromptQuorum estimates)',
          'Japanese text usually needs more tokens than English, so expect fewer tokens per second than English benchmarks suggest',
        ],
      },
      body1: {
        title: 'The 3 Best Apps for Local LLMs on Android in Japan',
        content: [
          '<strong>Three Android routes run Japanese-capable local LLMs offline: PocketPal AI, MLC Chat, and Termux + Ollama.</strong> After the model download, prompts are processed on the device and no conversation text is sent to a cloud server, which keeps personal conversations out of third-party provision questions under APPI (個人情報保護法, Japan\'s Personal Information Protection Act). This is a technical description, not legal advice.',
          'PocketPal AI (MIT licence) installs from [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) and loads GGUF files from Hugging Face, so Llama-3-ELYZA-JP-8B and Qwen3.5 run without waiting for an app update. Latest release: v1.20.0 on October 14, 2026 ([GitHub releases](https://github.com/a-ghorbani/pocketpal-ai/releases)). Setup needs a manual model download. See the <a href="/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia local LLM guide</a> for device-specific RAM and storage tips.',
          '[MLC Chat](https://github.com/mlc-ai/mlc-llm) is not on Google Play. MLC distributes the Android app as a demo APK on [GitHub](https://llm.mlc.ai/docs/deploy/android.html) that requires installing from unknown sources, and its docs describe that APK as built for a Samsung S23 (Snapdragon 8 Gen 2). It runs only models from its prebuilt list; no Japanese-specific model is confirmed there. The MLC LLM repository was last updated on October 6, 2026, but the Android app folder last changed on April 22, 2026. See the [MLC Chat review](/power-local-llm/mlc-chat-review).',
          'Termux + Ollama needs a terminal but offers the full [Ollama](https://ollama.com) library. Install Termux from F-Droid or GitHub, because its README calls the Google Play build experimental ([Termux on GitHub](https://github.com/termux/termux-app), last updated September 26, 2026). Ollama itself is at v0.40.6 (October 16, 2026), and the Termux package builds 0.40.3.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'The best local LLM app for Android in Japan is PocketPal AI, which installs from Google Play and runs any GGUF model, such as Llama-3-ELYZA-JP-8B, fully offline.',
          },
          {
            type: 'plain-terms',
            text: 'A local LLM app runs an AI language model on your phone without internet. Your conversations stay on the device and are not sent to a cloud server.',
          },
        ],
        columns: ['App', 'Install', 'Japanese model route'],
        rows: [
          {
            App: 'MLC Chat',
            Install: 'GitHub APK only',
            'Japanese model route': 'Prebuilt model list only',
          },
          {
            App: 'PocketPal AI',
            Install: 'Google Play / App Store',
            'Japanese model route': 'Any GGUF incl. Llama-3-ELYZA-JP-8B',
          },
          {
            App: 'Termux + Ollama',
            Install: 'F-Droid/GitHub + pkg',
            'Japanese model route': 'Ollama library incl. qwen3.5:9b',
          },
        ],
        note: 'Decision guide: Use PocketPal AI for most users. Use MLC Chat only if you accept a GitHub APK and a fixed model list. Use Termux + Ollama with 8 GB RAM or more and some terminal comfort.',
      },
      body2: {
        title: 'How to Choose the Right Japanese Model',
        content: [
          '<strong>Three models cover most Android phones: Qwen3.5 4B for 6 GB devices, and Llama-3-ELYZA-JP-8B or Qwen3.5 9B for 8 GB and 12 GB+ devices.</strong> Pick by RAM, task and whether you need multilingual output. RAM figures are PromptQuorum estimates (download size plus headroom), not measurements.',
          'Qwen3.5 4B (qwen3.5:4b, 3.3–4.0 GB in Ollama) is the lightweight pick for mid-range phones. [Ollama](https://ollama.com/library/qwen3.5) lists Qwen3.5 as supporting 201 languages and dialects but does not rate Japanese separately, so test it on your own prompts. Plan on 6 GB RAM.',
          'Llama-3-ELYZA-JP-8B is a Japanese-adapted Llama 3 8B from ELYZA. The Q4_K_M GGUF is 4.92 GB ([Hugging Face](https://huggingface.co/elyza/Llama-3-ELYZA-JP-8B-GGUF)) under the Meta Llama 3 Community License, so plan on 8 GB RAM. Use it for Japanese writing and instruction-following where a Japanese-specific model is preferred. It replaces the older "ELYZA-7B" name used on this page earlier.',
          'Qwen3.5 9B (qwen3.5:9b, 6.6–7.6 GB in Ollama) is the multilingual pick for Japanese, Chinese and English in one conversation. Plan on 12 GB RAM or more; it will be slow on phones. It replaces Qwen3 8B, which this page recommended before.',
          'Rinna 3.6B (MIT licence, 2023) is Japanese-native but is published as Transformers weights rather than an official GGUF, so it does not load in these apps without a community conversion. Japanese text usually needs more tokens than English for the same content, so expect fewer tokens per second than English benchmarks suggest. For CPU-only picks see <a href="/local-llms/best-cpu-only-llm" class="text-primary hover:underline">best CPU-only LLMs</a>; for the full app comparison see the <a href="/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">best local LLM apps for Android guide</a>.',
        ],
      },
      termux: {
        id: 'termux-ollama',
        title: 'How to Run Ollama on Android with Termux',
        content: [
          '<strong>Ollama runs on Android inside Termux in five steps, with no root access.</strong> Use a phone with 6 GB RAM or more.',
        ],
        numberedItems: [
          {
            title: 'Install Termux from F-Droid or GitHub.',
            whyItMatters: 'The Termux README calls the Google Play build experimental and warns not to mix installation sources.',
          },
          {
            title: 'Update the package lists.',
            whyItMatters: 'Run the update first so pkg installs the current Ollama package.',
          },
          {
            title: 'Install Ollama.',
            whyItMatters: 'Termux packages Ollama (version 0.40.3 at the time of writing), so no manual build is needed.',
          },
          {
            title: 'Start the Ollama server.',
            whyItMatters: 'The server must run in the background before you can pull or run a model.',
          },
          {
            title: 'Pull and run a model.',
            whyItMatters: 'Use qwen3.5:4b on 6 GB phones; qwen3.5:9b needs far more memory.',
          },
        ],
        codeBlock: 'pkg update && pkg upgrade\npkg install ollama\nollama serve &\nollama run qwen3.5:4b',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Android LLMs in Japan',
        faqs: [
          {
            q: 'Do Japanese local LLM models work offline?',
            a: 'Yes. After the initial download, models run fully offline in PocketPal AI, MLC Chat and Termux + Ollama. Llama-3-ELYZA-JP-8B loads in PocketPal AI as a GGUF; Qwen3.5 runs through Ollama in Termux. No prompt text is sent to a server.',
          },
          {
            q: 'Which model runs best on a phone with 6 GB RAM?',
            a: 'Qwen3.5 4B (3.3–4.0 GB download) is the best fit for 6 GB RAM. Llama-3-ELYZA-JP-8B (4.92 GB) needs about 8 GB and Qwen3.5 9B (6.6 GB+) about 12 GB by our estimate. See the <a href="/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia local LLM guide</a> for step-by-step setup.',
          },
          {
            q: 'Is MLC Chat available on Google Play?',
            a: 'No. MLC distributes the Android app as a demo APK on GitHub, which requires installing from unknown sources. PocketPal AI is the Google Play alternative.',
          },
          {
            q: 'Does Ollama run on Android without root?',
            a: 'Yes. Install Termux from F-Droid or GitHub, run pkg install ollama, start ollama serve, then run a model such as qwen3.5:4b. Root access is not required.',
          },
          {
            q: 'What are the APPI benefits of running a local LLM?',
            a: 'Under APPI (個人情報保護法), personal data processed by a cloud AI may require a third-party provision notice and user consent. Running a local LLM means your conversation data never leaves the device, so there is no cloud storage or third-party transfer for personal-use applications. This is not legal advice.',
          },
          {
            q: 'Can you use Japanese voice input with these LLM apps?',
            a: 'Yes. Standard Japanese voice input via the Android keyboard (Google Japanese Input or Gboard) works in all three routes. Type or dictate in Japanese; the model processes it the same way. No special voice integration setup is required.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Run a local LLM on Xperia](/prompt-bites/run-local-llm-on-xperia-japan)',
          '[Best Ollama models for 4 GB VRAM](/prompt-bites/best-ollama-models-4gb-vram)',
          '[Best local LLM apps for Android](/power-local-llm/best-local-llm-apps-android-2026)',
          '[Best CPU-only LLMs](/local-llms/best-cpu-only-llm)',
          '[MLC Chat review](/power-local-llm/mlc-chat-review)',
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-apps-japan-android-overview-hero-de.webp',
    title: 'Welche lokalen LLM-Apps für Android sind in Japan am beliebtesten?',
    seoTitle: 'Beste lokale LLM-Apps für Android in Japan (2026)',
    metaDescription: 'PocketPal AI, MLC Chat und Termux + Ollama führen japanische LLMs offline auf Android aus. Qwen3.5 4B/9B und Llama-3-ELYZA-JP-8B nach RAM, Setup und APPI im Vergleich.',
    publishDate: '2026-05-27',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5 4B', 'Qwen3.5 9B', 'Llama-3-ELYZA-JP-8B', 'Rinna 3.6B'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Samsung Galaxy S24'],
    educationalLevel: 'Intermediate',
    audience: 'Android-Nutzer in Japan, die lokale LLMs betreiben',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-apps-android'],
    is_living_page: false,
    quickAnswerTop: {
      de: {
        question: 'Welche lokalen LLM-Apps für Android sind in Japan am beliebtesten?',
        answer: 'PocketPal AI ist der beste Einstieg für Android in Japan: Die App lässt sich aus Google Play installieren und lädt jedes GGUF-Modell, darunter Llama-3-ELYZA-JP-8B und Qwen3.5. MLC Chat (GitHub-APK) und Termux + Ollama eignen sich für eine feste Modellliste oder die komplette Ollama-Bibliothek.',
        bullets: [
          'PocketPal AI: Installation über Google Play, beliebige GGUF-Modelle, volle Japanisch-Eingabe',
          'MLC Chat: APK von GitHub (nicht in Google Play), nur vorgefertigte Modellliste',
          'Termux + Ollama: pkg install ollama, Qwen3.5 9B braucht 12 GB RAM oder mehr',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'PocketPal AI ist der einfachste Weg in Japan — Installation über Google Play, Import beliebiger GGUF-Modelle von Hugging Face, darunter Llama-3-ELYZA-JP-8B (4,92 GB bei Q4_K_M)',
          'MLC Chat ist nicht in Google Play — die Demo-APK kommt von MLCs GitHub; die App führt nur Modelle aus ihrer vorgefertigten Liste aus',
          'Termux + Ollama funktioniert mit pkg install ollama; Termux aus F-Droid oder von GitHub installieren, da die Google-Play-Version experimentell ist',
          'Qwen3.5 4B (3,3 GB) passt zu 6-GB-Smartphones; Llama-3-ELYZA-JP-8B braucht etwa 8 GB RAM, Qwen3.5 9B etwa 12 GB RAM (PromptQuorum-Schätzungen)',
          'Japanischer Text braucht meist mehr Tokens als englischer, daher sind weniger Tokens pro Sekunde zu erwarten, als englische Benchmarks nahelegen',
        ],
      },
      body1: {
        title: 'Die 3 besten Apps für lokale LLMs auf Android in Japan',
        content: [
          '<strong>Drei Android-Wege führen japanischfähige lokale LLMs offline aus: PocketPal AI, MLC Chat und Termux + Ollama.</strong> Nach dem Modell-Download werden Eingaben auf dem Gerät verarbeitet, und kein Gesprächstext geht an einen Cloud-Server. Damit entfallen für persönliche Gespräche Fragen der Drittübermittlung nach dem APPI (個人情報保護法, Japans Datenschutzgesetz). Das ist eine technische Beschreibung, keine Rechtsberatung.',
          'PocketPal AI (MIT-Lizenz) wird über [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) installiert und lädt GGUF-Dateien von Hugging Face, sodass Llama-3-ELYZA-JP-8B und Qwen3.5 ohne App-Update laufen. Aktuelle Version: v1.20.0 vom 14. Oktober 2026 ([GitHub Releases](https://github.com/a-ghorbani/pocketpal-ai/releases)). Die Einrichtung erfordert einen manuellen Modell-Download. Gerätespezifische RAM- und Speichertipps finden Sie im <a href="/de/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia-LLM-Leitfaden</a>.',
          '[MLC Chat](https://github.com/mlc-ai/mlc-llm) ist nicht in Google Play. MLC verteilt die Android-App als Demo-APK auf [GitHub](https://llm.mlc.ai/docs/deploy/android.html); sie erfordert die Installation aus unbekannten Quellen, und laut Dokumentation ist diese APK für ein Samsung S23 (Snapdragon 8 Gen 2) gebaut. Sie führt nur Modelle aus der vorgefertigten Liste aus; ein japanspezifisches Modell ist dort nicht bestätigt. Das MLC-LLM-Repository wurde zuletzt am 6. Oktober 2026 aktualisiert, der Android-App-Ordner zuletzt am 22. April 2026. Siehe den [MLC-Chat-Test](/de/power-local-llm/mlc-chat-review).',
          'Termux + Ollama erfordert ein Terminal, bietet dafür die komplette [Ollama](https://ollama.com)-Bibliothek. Installieren Sie Termux aus F-Droid oder von GitHub, da die README die Google-Play-Version als experimentell bezeichnet ([Termux auf GitHub](https://github.com/termux/termux-app), zuletzt aktualisiert am 26. September 2026). Ollama selbst steht bei v0.40.6 (16. Oktober 2026), das Termux-Paket baut 0.40.3.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Die beste lokale LLM-App für Android in Japan ist PocketPal AI: Sie wird über Google Play installiert und führt jedes GGUF-Modell, etwa Llama-3-ELYZA-JP-8B, vollständig offline aus.',
          },
          {
            type: 'plain-terms',
            text: 'Eine lokale LLM-App führt ein KI-Sprachmodell ohne Internet auf Ihrem Smartphone aus. Ihre Gespräche bleiben auf dem Gerät und werden nicht an einen Cloud-Server gesendet.',
          },
        ],
        columns: ['App', 'Installation', 'Japanische Modelle'],
        rows: [
          {
            App: 'MLC Chat',
            Installation: 'Nur GitHub-APK',
            'Japanische Modelle': 'Nur vorgefertigte Modellliste',
          },
          {
            App: 'PocketPal AI',
            Installation: 'Google Play / App Store',
            'Japanische Modelle': 'Jedes GGUF, z. B. Llama-3-ELYZA-JP-8B',
          },
          {
            App: 'Termux + Ollama',
            Installation: 'F-Droid/GitHub + pkg',
            'Japanische Modelle': 'Ollama-Bibliothek, z. B. qwen3.5:9b',
          },
        ],
        note: 'Entscheidungshilfe: PocketPal AI für die meisten Nutzer. MLC Chat nur, wenn eine GitHub-APK und eine feste Modellliste akzeptabel sind. Termux + Ollama mit 8 GB RAM oder mehr und etwas Terminal-Erfahrung.',
      },
      body2: {
        title: 'So wählen Sie das richtige japanische Modell',
        content: [
          '<strong>Drei Modelle decken die meisten Android-Smartphones ab: Qwen3.5 4B für 6-GB-Geräte sowie Llama-3-ELYZA-JP-8B oder Qwen3.5 9B für Geräte mit 8 GB bzw. 12 GB+.</strong> Die Wahl hängt von RAM, Aufgabe und dem Bedarf an mehrsprachiger Ausgabe ab. Die RAM-Angaben sind PromptQuorum-Schätzungen (Download-Größe plus Reserve), keine Messwerte.',
          'Qwen3.5 4B (qwen3.5:4b, 3,3–4,0 GB in Ollama) ist die leichte Wahl für Mittelklasse-Smartphones. [Ollama](https://ollama.com/library/qwen3.5) nennt für Qwen3.5 Unterstützung für 201 Sprachen und Dialekte, bewertet Japanisch aber nicht separat — testen Sie es mit eigenen Prompts. Rechnen Sie mit 6 GB RAM.',
          'Llama-3-ELYZA-JP-8B ist ein auf Japanisch angepasstes Llama 3 8B von ELYZA. Das Q4_K_M-GGUF ist 4,92 GB groß ([Hugging Face](https://huggingface.co/elyza/Llama-3-ELYZA-JP-8B-GGUF)) und steht unter der Meta Llama 3 Community License; rechnen Sie mit 8 GB RAM. Einsatz für japanisches Schreiben und Instruktionsbefolgung, wenn ein japanspezifisches Modell gewünscht ist. Es ersetzt den früher auf dieser Seite genannten Namen „ELYZA-7B“.',
          'Qwen3.5 9B (qwen3.5:9b, 6,6–7,6 GB in Ollama) ist die mehrsprachige Wahl für Japanisch, Chinesisch und Englisch in einem Gespräch. Rechnen Sie mit 12 GB RAM oder mehr; auf Smartphones ist es langsam. Es ersetzt Qwen3 8B, das diese Seite zuvor empfohlen hat.',
          'Rinna 3.6B (MIT-Lizenz, 2023) ist japanisch-nativ, wird aber als Transformers-Gewichte statt als offizielles GGUF veröffentlicht und lädt daher ohne Community-Konvertierung nicht in diesen Apps. Japanischer Text braucht meist mehr Tokens als englischer für denselben Inhalt, daher sind weniger Tokens pro Sekunde zu erwarten, als englische Benchmarks nahelegen. CPU-only-Empfehlungen finden Sie unter <a href="/de/local-llms/best-cpu-only-llm" class="text-primary hover:underline">beste CPU-only LLMs</a>; den vollständigen App-Vergleich im <a href="/de/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">Leitfaden für die besten lokalen LLM-Apps für Android</a>.',
        ],
      },
      termux: {
        id: 'termux-ollama',
        title: 'So führen Sie Ollama auf Android mit Termux aus',
        content: [
          '<strong>Ollama läuft auf Android in Termux in fünf Schritten und ohne Root-Zugriff.</strong> Verwenden Sie ein Smartphone mit mindestens 6 GB RAM.',
        ],
        numberedItems: [
          {
            title: 'Termux aus F-Droid oder von GitHub installieren.',
            whyItMatters: 'Die Termux-README bezeichnet die Google-Play-Version als experimentell und warnt davor, Installationsquellen zu mischen.',
          },
          {
            title: 'Paketlisten aktualisieren.',
            whyItMatters: 'Zuerst aktualisieren, damit pkg das aktuelle Ollama-Paket installiert.',
          },
          {
            title: 'Ollama installieren.',
            whyItMatters: 'Termux bietet Ollama als Paket an (zum Zeitpunkt des Schreibens Version 0.40.3); ein manueller Build ist nicht nötig.',
          },
          {
            title: 'Ollama-Server starten.',
            whyItMatters: 'Der Server muss im Hintergrund laufen, bevor Sie ein Modell laden oder ausführen können.',
          },
          {
            title: 'Modell laden und ausführen.',
            whyItMatters: 'Auf 6-GB-Smartphones qwen3.5:4b verwenden; qwen3.5:9b braucht deutlich mehr Speicher.',
          },
        ],
        codeBlock: 'pkg update && pkg upgrade\npkg install ollama\nollama serve &\nollama run qwen3.5:4b',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Android-LLMs in Japan',
        faqs: [
          {
            q: 'Funktionieren japanische lokale LLM-Modelle offline?',
            a: 'Ja. Nach dem ersten Download laufen Modelle in PocketPal AI, MLC Chat und Termux + Ollama vollständig offline. Llama-3-ELYZA-JP-8B lässt sich in PocketPal AI als GGUF laden; Qwen3.5 läuft über Ollama in Termux. Es wird kein Prompt-Text an einen Server gesendet.',
          },
          {
            q: 'Welches Modell läuft am besten auf einem Smartphone mit 6 GB RAM?',
            a: 'Qwen3.5 4B (3,3–4,0 GB Download) passt am besten zu 6 GB RAM. Llama-3-ELYZA-JP-8B (4,92 GB) braucht nach unserer Schätzung etwa 8 GB, Qwen3.5 9B (ab 6,6 GB) etwa 12 GB. Schritt-für-Schritt-Anleitung im <a href="/de/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia-LLM-Leitfaden</a>.',
          },
          {
            q: 'Ist MLC Chat in Google Play verfügbar?',
            a: 'Nein. MLC verteilt die Android-App als Demo-APK auf GitHub; sie erfordert die Installation aus unbekannten Quellen. PocketPal AI ist die Alternative in Google Play.',
          },
          {
            q: 'Läuft Ollama auf Android ohne Root?',
            a: 'Ja. Termux aus F-Droid oder von GitHub installieren, pkg install ollama ausführen, ollama serve starten und dann ein Modell wie qwen3.5:4b ausführen. Root-Zugriff ist nicht erforderlich.',
          },
          {
            q: 'Welche APPI-Vorteile bietet ein lokales LLM?',
            a: 'Nach dem APPI (個人情報保護法) kann die Cloud-Verarbeitung personenbezogener Daten eine Benachrichtigung über die Weitergabe an Dritte und eine Nutzereinwilligung erfordern. Bei einem lokalen LLM verlässt kein Gesprächsdatum das Gerät — kein Cloud-Speicher und keine Weitergabe an Dritte bei privater Nutzung. Das ist keine Rechtsberatung.',
          },
          {
            q: 'Kann man japanische Spracheingabe mit diesen LLM-Apps nutzen?',
            a: 'Ja. Die japanische Standard-Spracheingabe über die Android-Tastatur (Google Japanese Input oder Gboard) funktioniert in allen drei Wegen. Sprechen oder tippen Sie auf Japanisch; das Modell verarbeitet die Eingabe auf dieselbe Weise. Eine gesonderte Spracheinrichtung ist nicht nötig.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokales LLM auf dem Xperia ausführen](/de/prompt-bites/run-local-llm-on-xperia-japan)',
          '[Beste Ollama-Modelle für 4 GB VRAM](/de/prompt-bites/best-ollama-models-4gb-vram)',
          '[Beste lokale LLM-Apps für Android](/de/power-local-llm/best-local-llm-apps-android-2026)',
          '[Beste CPU-only LLMs](/de/local-llms/best-cpu-only-llm)',
          '[MLC-Chat-Test](/de/power-local-llm/mlc-chat-review)',
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-apps-japan-android-overview-hero-fr.webp',
    title: 'Quelles sont les meilleures apps LLM locales pour Android au Japon ?',
    seoTitle: 'Meilleures apps LLM locales pour Android au Japon (2026)',
    metaDescription: 'PocketPal AI, MLC Chat et Termux + Ollama font tourner des LLM japonais hors ligne sur Android. Comparatif Qwen3.5 4B/9B et Llama-3-ELYZA-JP-8B : RAM, installation, APPI.',
    publishDate: '2026-05-27',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5 4B', 'Qwen3.5 9B', 'Llama-3-ELYZA-JP-8B', 'Rinna 3.6B'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Samsung Galaxy S24'],
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs Android au Japon utilisant des LLM locaux',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-apps-android'],
    is_living_page: false,
    quickAnswerTop: {
      fr: {
        question: 'Quelles sont les meilleures apps LLM locales pour Android au Japon ?',
        answer: 'PocketPal AI est le meilleur point de départ sur Android au Japon : elle s\'installe depuis Google Play et charge tout modèle GGUF, dont Llama-3-ELYZA-JP-8B et Qwen3.5. MLC Chat (APK GitHub) et Termux + Ollama conviennent à une liste de modèles figée ou à la bibliothèque Ollama complète.',
        bullets: [
          'PocketPal AI : installation via Google Play, tout modèle GGUF, saisie japonaise complète',
          'MLC Chat : APK depuis GitHub (absent de Google Play), liste de modèles préconstruite uniquement',
          'Termux + Ollama : pkg install ollama, Qwen3.5 9B demande 12 Go de RAM ou plus',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'PocketPal AI est la voie la plus simple au Japon — installation via Google Play et import de tout modèle GGUF depuis Hugging Face, dont Llama-3-ELYZA-JP-8B (4,92 Go en Q4_K_M)',
          'MLC Chat n\'est pas sur Google Play — l\'APK de démonstration vient du GitHub de MLC ; elle n\'exécute que les modèles de sa liste préconstruite',
          'Termux + Ollama fonctionne avec pkg install ollama ; installez Termux depuis F-Droid ou GitHub, car la version Google Play est expérimentale',
          'Qwen3.5 4B (3,3 Go) convient aux téléphones de 6 Go ; Llama-3-ELYZA-JP-8B demande environ 8 Go de RAM et Qwen3.5 9B environ 12 Go (estimations PromptQuorum)',
          'Le texte japonais exige généralement plus de tokens que l\'anglais : prévoyez moins de tokens par seconde que ne le suggèrent les benchmarks en anglais',
        ],
      },
      body1: {
        title: 'Les 3 meilleures apps pour LLM locaux sur Android au Japon',
        content: [
          '<strong>Trois voies Android exécutent des LLM locaux compatibles japonais hors ligne : PocketPal AI, MLC Chat et Termux + Ollama.</strong> Après le téléchargement du modèle, les requêtes sont traitées sur l\'appareil et aucun texte de conversation n\'est envoyé à un serveur cloud, ce qui écarte pour les conversations personnelles les questions de transmission à des tiers au regard de l\'APPI (個人情報保護法, loi japonaise sur la protection des informations personnelles). Il s\'agit d\'une description technique, non d\'un conseil juridique.',
          'PocketPal AI (licence MIT) s\'installe depuis [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) et charge des fichiers GGUF depuis Hugging Face ; Llama-3-ELYZA-JP-8B et Qwen3.5 fonctionnent donc sans attendre une mise à jour de l\'app. Dernière version : v1.20.0 du 14 octobre 2026 ([versions GitHub](https://github.com/a-ghorbani/pocketpal-ai/releases)). La configuration demande un téléchargement manuel du modèle. Consultez le <a href="/fr/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">guide LLM local pour Xperia</a> pour les conseils de RAM et de stockage par appareil.',
          '[MLC Chat](https://github.com/mlc-ai/mlc-llm) n\'est pas sur Google Play. MLC distribue l\'app Android sous forme d\'APK de démonstration sur [GitHub](https://llm.mlc.ai/docs/deploy/android.html), à installer depuis des sources inconnues ; sa documentation indique que cet APK est compilé pour un Samsung S23 (Snapdragon 8 Gen 2). Elle n\'exécute que les modèles de sa liste préconstruite ; aucun modèle spécifique au japonais n\'y est confirmé. Le dépôt MLC LLM a été mis à jour pour la dernière fois le 6 octobre 2026, mais le dossier de l\'app Android le 22 avril 2026. Voir le [test de MLC Chat](/fr/power-local-llm/mlc-chat-review).',
          'Termux + Ollama exige un terminal mais donne accès à toute la bibliothèque [Ollama](https://ollama.com). Installez Termux depuis F-Droid ou GitHub, car son README qualifie la version Google Play d\'expérimentale ([Termux sur GitHub](https://github.com/termux/termux-app), dernière mise à jour le 26 septembre 2026). Ollama est en v0.40.6 (16 octobre 2026) et le paquet Termux compile la 0.40.3.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La meilleure app LLM locale pour Android au Japon est PocketPal AI, qui s\'installe depuis Google Play et exécute tout modèle GGUF, comme Llama-3-ELYZA-JP-8B, entièrement hors ligne.',
          },
          {
            type: 'plain-terms',
            text: 'Une app LLM locale exécute un modèle de langage IA sur votre téléphone sans internet. Vos conversations restent sur l\'appareil et ne sont pas envoyées à un serveur cloud.',
          },
        ],
        columns: ['App', 'Installation', 'Modèles japonais'],
        rows: [
          {
            App: 'MLC Chat',
            Installation: 'APK GitHub uniquement',
            'Modèles japonais': 'Liste préconstruite uniquement',
          },
          {
            App: 'PocketPal AI',
            Installation: 'Google Play / App Store',
            'Modèles japonais': 'Tout GGUF, ex. Llama-3-ELYZA-JP-8B',
          },
          {
            App: 'Termux + Ollama',
            Installation: 'F-Droid/GitHub + pkg',
            'Modèles japonais': 'Bibliothèque Ollama, ex. qwen3.5:9b',
          },
        ],
        note: 'Guide de décision : PocketPal AI pour la plupart des utilisateurs. MLC Chat seulement si un APK GitHub et une liste de modèles figée vous conviennent. Termux + Ollama avec 8 Go de RAM ou plus et un peu d\'aisance avec le terminal.',
      },
      body2: {
        title: 'Comment choisir le bon modèle japonais',
        content: [
          '<strong>Trois modèles couvrent la plupart des téléphones Android : Qwen3.5 4B pour les appareils de 6 Go, Llama-3-ELYZA-JP-8B ou Qwen3.5 9B pour 8 Go et 12 Go et plus.</strong> Choisissez selon la RAM, la tâche et le besoin d\'une sortie multilingue. Les chiffres de RAM sont des estimations PromptQuorum (taille du téléchargement plus marge), pas des mesures.',
          'Qwen3.5 4B (qwen3.5:4b, 3,3–4,0 Go dans Ollama) est le choix léger pour les téléphones milieu de gamme. [Ollama](https://ollama.com/library/qwen3.5) indique que Qwen3.5 prend en charge 201 langues et dialectes sans évaluer le japonais séparément ; testez-le avec vos propres prompts. Prévoyez 6 Go de RAM.',
          'Llama-3-ELYZA-JP-8B est un Llama 3 8B adapté au japonais par ELYZA. Le GGUF Q4_K_M pèse 4,92 Go ([Hugging Face](https://huggingface.co/elyza/Llama-3-ELYZA-JP-8B-GGUF)) sous la Meta Llama 3 Community License ; prévoyez 8 Go de RAM. Utilisez-le pour la rédaction en japonais et le suivi d\'instructions lorsqu\'un modèle spécifique au japonais est préféré. Il remplace le nom « ELYZA-7B » employé auparavant sur cette page.',
          'Qwen3.5 9B (qwen3.5:9b, 6,6–7,6 Go dans Ollama) est le choix multilingue pour le japonais, le chinois et l\'anglais dans une même conversation. Prévoyez 12 Go de RAM ou plus ; il sera lent sur téléphone. Il remplace Qwen3 8B, recommandé auparavant par cette page.',
          'Rinna 3.6B (licence MIT, 2023) est natif japonais mais publié en poids Transformers plutôt qu\'en GGUF officiel ; il ne se charge donc pas dans ces apps sans conversion communautaire. Le texte japonais exige généralement plus de tokens que l\'anglais pour le même contenu : prévoyez moins de tokens par seconde que ne le suggèrent les benchmarks en anglais. Pour les modèles CPU seul, voir <a href="/fr/local-llms/best-cpu-only-llm" class="text-primary hover:underline">meilleurs LLM CPU seul</a> ; pour le comparatif complet des apps, voir le <a href="/fr/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">guide des meilleures apps LLM locales pour Android</a>.',
        ],
      },
      termux: {
        id: 'termux-ollama',
        title: 'Comment exécuter Ollama sur Android avec Termux',
        content: [
          '<strong>Ollama fonctionne sur Android dans Termux en cinq étapes, sans accès root.</strong> Utilisez un téléphone avec 6 Go de RAM ou plus.',
        ],
        numberedItems: [
          {
            title: 'Installer Termux depuis F-Droid ou GitHub.',
            whyItMatters: 'Le README de Termux qualifie la version Google Play d\'expérimentale et déconseille de mélanger les sources d\'installation.',
          },
          {
            title: 'Mettre à jour les listes de paquets.',
            whyItMatters: 'Mettez à jour d\'abord pour que pkg installe le paquet Ollama actuel.',
          },
          {
            title: 'Installer Ollama.',
            whyItMatters: 'Termux fournit Ollama en paquet (version 0.40.3 au moment de la rédaction) ; aucune compilation manuelle n\'est nécessaire.',
          },
          {
            title: 'Démarrer le serveur Ollama.',
            whyItMatters: 'Le serveur doit tourner en arrière-plan avant de télécharger ou d\'exécuter un modèle.',
          },
          {
            title: 'Télécharger et exécuter un modèle.',
            whyItMatters: 'Utilisez qwen3.5:4b sur les téléphones de 6 Go ; qwen3.5:9b demande beaucoup plus de mémoire.',
          },
        ],
        codeBlock: 'pkg update && pkg upgrade\npkg install ollama\nollama serve &\nollama run qwen3.5:4b',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les LLM Android au Japon',
        faqs: [
          {
            q: 'Les modèles LLM locaux japonais fonctionnent-ils hors ligne ?',
            a: 'Oui. Après le téléchargement initial, les modèles fonctionnent entièrement hors ligne dans PocketPal AI, MLC Chat et Termux + Ollama. Llama-3-ELYZA-JP-8B se charge dans PocketPal AI au format GGUF ; Qwen3.5 passe par Ollama dans Termux. Aucun texte de prompt n\'est envoyé à un serveur.',
          },
          {
            q: 'Quel modèle convient le mieux à un téléphone de 6 Go de RAM ?',
            a: 'Qwen3.5 4B (téléchargement de 3,3–4,0 Go) convient le mieux à 6 Go de RAM. Llama-3-ELYZA-JP-8B (4,92 Go) demande environ 8 Go et Qwen3.5 9B (6,6 Go et plus) environ 12 Go selon nos estimations. Voir le <a href="/fr/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">guide LLM local pour Xperia</a> pour la configuration pas à pas.',
          },
          {
            q: 'MLC Chat est-il disponible sur Google Play ?',
            a: 'Non. MLC distribue l\'app Android sous forme d\'APK de démonstration sur GitHub, à installer depuis des sources inconnues. PocketPal AI est l\'alternative disponible sur Google Play.',
          },
          {
            q: 'Ollama fonctionne-t-il sur Android sans root ?',
            a: 'Oui. Installez Termux depuis F-Droid ou GitHub, exécutez pkg install ollama, lancez ollama serve, puis exécutez un modèle comme qwen3.5:4b. L\'accès root n\'est pas nécessaire.',
          },
          {
            q: 'Quels sont les avantages APPI d\'un LLM local ?',
            a: 'Selon l\'APPI (個人情報保護法), le traitement de données personnelles par une IA cloud peut exiger une notification de transmission à un tiers et le consentement de l\'utilisateur. Avec un LLM local, vos données de conversation ne quittent jamais l\'appareil : pas de stockage cloud ni de transfert à un tiers pour un usage personnel. Ce n\'est pas un conseil juridique.',
          },
          {
            q: 'Peut-on utiliser la saisie vocale japonaise avec ces apps LLM ?',
            a: 'Oui. La saisie vocale japonaise standard via le clavier Android (Google Japanese Input ou Gboard) fonctionne avec les trois voies. Dictez ou tapez en japonais ; le modèle traite le texte de la même manière. Aucune configuration vocale spéciale n\'est requise.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Exécuter un LLM local sur Xperia](/fr/prompt-bites/run-local-llm-on-xperia-japan)',
          '[Meilleurs modèles Ollama pour 4 Go de VRAM](/fr/prompt-bites/best-ollama-models-4gb-vram)',
          '[Meilleures apps LLM locales pour Android](/fr/power-local-llm/best-local-llm-apps-android-2026)',
          '[Meilleurs LLM CPU seul](/fr/local-llms/best-cpu-only-llm)',
          '[Test de MLC Chat](/fr/power-local-llm/mlc-chat-review)',
        ],
      },
    },
  },
  ja: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-apps-japan-android-overview-hero-ja.webp',
    title: '日本で人気のAndroidローカルLLMアプリは？',
    seoTitle: '日本のAndroid向けローカルLLMアプリ比較（2026）',
    metaDescription: 'PocketPal AI、MLC Chat、Termux + OllamaでAndroidでも日本語LLMをオフライン実行。Qwen3.5 4B/9BとLlama-3-ELYZA-JP-8BをRAM・手順・APPIで比較。',
    publishDate: '2026-05-27',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5 4B', 'Qwen3.5 9B', 'Llama-3-ELYZA-JP-8B', 'Rinna 3.6B'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Samsung Galaxy S24'],
    educationalLevel: 'Intermediate',
    audience: 'ローカルLLMを利用する日本のAndroidユーザー',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-apps-android'],
    is_living_page: false,
    quickAnswerTop: {
      ja: {
        question: '日本で人気のAndroidローカルLLMアプリは？',
        answer: '日本のAndroidでは、Google Playから入れられ、Llama-3-ELYZA-JP-8BやQwen3.5を含む任意のGGUFモデルを読み込めるPocketPal AIが最初の選択肢です。モデル一覧が固定のMLC Chat（GitHubのAPK）や、Ollamaライブラリ全体を使えるTermux + Ollamaは用途が限られます。',
        bullets: [
          'PocketPal AI：Google Playから導入、任意のGGUFモデル、日本語入力に完全対応',
          'MLC Chat：GitHubのAPK（Google Play非掲載）、構築済みモデル一覧のみ',
          'Termux + Ollama：pkg install ollama、Qwen3.5 9Bには12 GB以上のRAMが必要',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'PocketPal AIは日本で最も簡単な方法です — Google Playから導入でき、Llama-3-ELYZA-JP-8B（Q4_K_Mで4.92 GB）を含むHugging Face上の任意のGGUFモデルを読み込めます',
          'MLC ChatはGoogle Playにありません — デモ用APKはMLCのGitHubから入手し、構築済みモデル一覧のモデルのみ実行できます',
          'Termux + Ollamaはpkg install ollamaで動作します。Google Play版は実験的なため、TermuxはF-DroidまたはGitHubから導入してください',
          'Qwen3.5 4B（3.3 GB）は6 GBのスマートフォン向け、Llama-3-ELYZA-JP-8Bは約8 GB、Qwen3.5 9Bは約12 GBのRAMが目安です（PromptQuorumの推定）',
          '日本語は同じ内容でも英語よりトークン数が多くなる傾向があり、英語のベンチマークより毎秒トークン数は低くなります',
        ],
      },
      body1: {
        title: '日本のAndroidでローカルLLMを動かす3つのアプリ',
        content: [
          '<strong>日本語対応のローカルLLMをオフラインで動かすAndroidの方法は、PocketPal AI、MLC Chat、Termux + Ollamaの3つです。</strong>モデルのダウンロード後は端末内で処理され、会話テキストがクラウドサーバーに送信されないため、個人的な会話についてAPPI（個人情報保護法）上の第三者提供の問題を避けられます。これは技術的な説明であり、法的助言ではありません。',
          'PocketPal AI（MITライセンス）は[Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)から導入でき、Hugging FaceのGGUFファイルを読み込めるため、Llama-3-ELYZA-JP-8BやQwen3.5をアプリの更新を待たずに使えます。最新版はv1.20.0（2026年10月14日、[GitHubリリース](https://github.com/a-ghorbani/pocketpal-ai/releases)）。モデルは手動でダウンロードする必要があります。端末ごとのRAMとストレージの目安は<a href="/ja/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia向けローカルLLMガイド</a>を参照してください。',
          '[MLC Chat](https://github.com/mlc-ai/mlc-llm)はGoogle Playにありません。MLCはAndroid版を[GitHub](https://llm.mlc.ai/docs/deploy/android.html)でデモ用APKとして配布しており、提供元不明のアプリのインストールが必要で、ドキュメントではSamsung S23（Snapdragon 8 Gen 2）向けにビルドされたAPKと説明されています。実行できるのは構築済みモデル一覧のモデルのみで、日本語特化モデルは確認できていません。MLC LLMリポジトリの最終更新は2026年10月6日ですが、Androidアプリのフォルダの最終更新は2026年4月22日です。[MLC Chatレビュー](/ja/power-local-llm/mlc-chat-review)も参照してください。',
          'Termux + Ollamaはターミナル操作が必要ですが、[Ollama](https://ollama.com)ライブラリ全体を使えます。READMEがGoogle Play版を実験的としているため、TermuxはF-DroidまたはGitHubから導入してください（[GitHubのTermux](https://github.com/termux/termux-app)、最終更新2026年9月26日）。Ollama本体はv0.40.6（2026年10月16日）で、Termuxのパッケージは0.40.3をビルドしています。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '日本のAndroidで最適なローカルLLMアプリはPocketPal AIで、Google Playから導入でき、Llama-3-ELYZA-JP-8Bなど任意のGGUFモデルを完全オフラインで実行できます。',
          },
          {
            type: 'plain-terms',
            text: 'ローカルLLMアプリは、インターネットなしでスマートフォン上でAI言語モデルを実行します。会話データは端末内にとどまり、クラウドサーバーには送信されません。',
          },
        ],
        columns: ['アプリ', '導入方法', '日本語モデル'],
        rows: [
          { 'アプリ': 'MLC Chat', '導入方法': 'GitHubのAPKのみ', '日本語モデル': '構築済みモデル一覧のみ' },
          {
            'アプリ': 'PocketPal AI',
            '導入方法': 'Google Play / App Store',
            '日本語モデル': '任意のGGUF（例：Llama-3-ELYZA-JP-8B）',
          },
          {
            'アプリ': 'Termux + Ollama',
            '導入方法': 'F-Droid/GitHub + pkg',
            '日本語モデル': 'Ollamaライブラリ（例：qwen3.5:9b）',
          },
        ],
        note: '選び方：ほとんどの人にはPocketPal AI。MLC ChatはGitHubのAPKと固定のモデル一覧を許容できる場合のみ。Termux + Ollamaは8 GB以上のRAMとターミナル操作に慣れている場合に。',
      },
      body2: {
        title: '日本語モデルの選び方',
        content: [
          '<strong>3つのモデルでほとんどのAndroid端末をカバーできます：6 GB端末にはQwen3.5 4B、8 GB・12 GB以上の端末にはLlama-3-ELYZA-JP-8BまたはQwen3.5 9Bです。</strong>RAM、用途、多言語出力の必要性で選びます。RAMの数値は実測ではなく、PromptQuorumによる推定（ダウンロードサイズに余裕を加えたもの）です。',
          'Qwen3.5 4B（qwen3.5:4b、Ollamaで3.3〜4.0 GB）はミドルレンジ端末向けの軽量な選択肢です。[Ollama](https://ollama.com/library/qwen3.5)はQwen3.5が201の言語と方言に対応するとしていますが、日本語の品質を個別には示していないため、自分のプロンプトで試してください。目安は6 GBのRAMです。',
          'Llama-3-ELYZA-JP-8Bは、ELYZAがLlama 3 8Bを日本語向けに適応させたモデルです。Q4_K_MのGGUFは4.92 GB（[Hugging Face](https://huggingface.co/elyza/Llama-3-ELYZA-JP-8B-GGUF)）で、Meta Llama 3 Community Licenseに基づきます。目安は8 GBのRAMです。日本語特化モデルを使いたい日本語の文章作成や指示追従に向いています。このページで以前使っていた「ELYZA-7B」に代わるものです。',
          'Qwen3.5 9B（qwen3.5:9b、Ollamaで6.6〜7.6 GB）は、日本語・中国語・英語を1つの会話で扱う多言語向けの選択肢です。目安は12 GB以上のRAMで、スマートフォンでは動作が遅くなります。このページで以前推奨していたQwen3 8Bに代わるものです。',
          'Rinna 3.6B（MITライセンス、2023年）は日本語ネイティブですが、公式GGUFではなくTransformers形式の重みで公開されているため、コミュニティによる変換なしではこれらのアプリで読み込めません。日本語は同じ内容でも英語よりトークン数が多くなる傾向があり、英語のベンチマークより毎秒トークン数は低くなります。CPUのみの選択肢は<a href="/ja/local-llms/best-cpu-only-llm" class="text-primary hover:underline">CPUのみで動くおすすめLLM</a>、アプリ全体の比較は<a href="/ja/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">Android向けローカルLLMアプリのガイド</a>を参照してください。',
        ],
      },
      termux: {
        id: 'termux-ollama',
        title: 'TermuxでAndroidにOllamaを導入する方法',
        content: [
          '<strong>OllamaはAndroidのTermux内で、root権限なしに5つの手順で動作します。</strong>6 GB以上のRAMを搭載したスマートフォンを使用してください。',
        ],
        numberedItems: [
          {
            title: 'TermuxをF-DroidまたはGitHubから導入する。',
            whyItMatters: 'TermuxのREADMEはGoogle Play版を実験的としており、導入元を混在させないよう警告しています。',
          },
          { title: 'パッケージ一覧を更新する。', whyItMatters: '先に更新すると、pkgが最新のOllamaパッケージを導入します。' },
          {
            title: 'Ollamaを導入する。',
            whyItMatters: 'TermuxはOllamaをパッケージとして提供しており（執筆時点でバージョン0.40.3）、手動ビルドは不要です。',
          },
          {
            title: 'Ollamaサーバーを起動する。',
            whyItMatters: 'モデルを取得・実行する前に、サーバーをバックグラウンドで動かしておく必要があります。',
          },
          {
            title: 'モデルを取得して実行する。',
            whyItMatters: '6 GBの端末ではqwen3.5:4bを使います。qwen3.5:9bははるかに多くのメモリを必要とします。',
          },
        ],
        codeBlock: 'pkg update && pkg upgrade\npkg install ollama\nollama serve &\nollama run qwen3.5:4b',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: '日本のAndroid LLMに関するクイックアンサー',
        faqs: [
          {
            q: '日本語のローカルLLMモデルはオフラインで動作しますか？',
            a: 'はい。初回ダウンロード後は、PocketPal AI、MLC Chat、Termux + Ollamaのいずれでも完全オフラインで動作します。Llama-3-ELYZA-JP-8BはPocketPal AIにGGUFとして読み込め、Qwen3.5はTermux上のOllama経由で動きます。プロンプトのテキストはサーバーに送信されません。',
          },
          {
            q: 'RAM 6 GBのスマートフォンで最も適したモデルは？',
            a: '6 GBのRAMにはQwen3.5 4B（ダウンロード3.3〜4.0 GB）が最適です。Llama-3-ELYZA-JP-8B（4.92 GB）は約8 GB、Qwen3.5 9B（6.6 GB以上）は約12 GBが当社推定の目安です。手順は<a href="/ja/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia向けローカルLLMガイド</a>を参照してください。',
          },
          {
            q: 'MLC ChatはGoogle Playで入手できますか？',
            a: 'いいえ。MLCはAndroid版をGitHubでデモ用APKとして配布しており、提供元不明のアプリのインストールが必要です。Google Playで入手できる代替はPocketPal AIです。',
          },
          {
            q: 'OllamaはrootなしでAndroidで動きますか？',
            a: 'はい。TermuxをF-DroidまたはGitHubから導入し、pkg install ollamaを実行、ollama serveを起動してから、qwen3.5:4bなどのモデルを実行します。root権限は不要です。',
          },
          {
            q: 'ローカルLLMを使うとAPPI上どんなメリットがありますか？',
            a: 'APPI（個人情報保護法）では、クラウドAIが個人データを処理する場合、第三者提供の通知やユーザーの同意が必要になることがあります。ローカルLLMでは会話データが端末の外に出ないため、個人利用ではクラウド保存や第三者への提供が生じません。これは法的助言ではありません。',
          },
          {
            q: 'これらのLLMアプリで日本語の音声入力は使えますか？',
            a: 'はい。Androidキーボード（Google日本語入力またはGboard）による標準の日本語音声入力は3つの方法すべてで使えます。日本語で話すか入力すれば、モデルは同じように処理します。特別な音声設定は不要です。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[XperiaでローカルLLMを動かす](/ja/prompt-bites/run-local-llm-on-xperia-japan)',
          '[4 GB VRAMに最適なOllamaモデル](/ja/prompt-bites/best-ollama-models-4gb-vram)',
          '[Android向けおすすめローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-android-2026)',
          '[CPUのみで動くおすすめLLM](/ja/local-llms/best-cpu-only-llm)',
          '[MLC Chatレビュー](/ja/power-local-llm/mlc-chat-review)',
        ],
      },
    },
  },
  es: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-apps-japan-android-overview-hero-es.webp',
    title: '¿Cuáles son las mejores apps de LLM local para Android en Japón?',
    seoTitle: 'Mejores apps de LLM local para Android en Japón (2026)',
    metaDescription: 'PocketPal AI, MLC Chat y Termux + Ollama ejecutan LLM en japonés sin conexión en Android. Comparativa de Qwen3.5 4B/9B y Llama-3-ELYZA-JP-8B: RAM, instalación y APPI.',
    publishDate: '2026-05-27',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5 4B', 'Qwen3.5 9B', 'Llama-3-ELYZA-JP-8B', 'Rinna 3.6B'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Samsung Galaxy S24'],
    educationalLevel: 'Intermediate',
    audience: 'Usuarios de Android en Japón que ejecutan LLM locales',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-apps-android'],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Cuáles son las mejores apps de LLM local para Android en Japón?',
        answer: 'PocketPal AI es el mejor punto de partida en Android en Japón: se instala desde Google Play y carga cualquier modelo GGUF, incluidos Llama-3-ELYZA-JP-8B y Qwen3.5. MLC Chat (APK de GitHub) y Termux + Ollama sirven para una lista fija de modelos o para toda la biblioteca de Ollama.',
        bullets: [
          'PocketPal AI: instalación desde Google Play, cualquier modelo GGUF, entrada completa en japonés',
          'MLC Chat: APK de GitHub (no está en Google Play), solo lista de modelos precompilados',
          'Termux + Ollama: pkg install ollama, Qwen3.5 9B necesita 12 GB de RAM o más',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'PocketPal AI es la vía más sencilla en Japón: se instala desde Google Play e importa cualquier modelo GGUF de Hugging Face, incluido Llama-3-ELYZA-JP-8B (4,92 GB en Q4_K_M)',
          'MLC Chat no está en Google Play: el APK de demostración se descarga del GitHub de MLC y solo ejecuta modelos de su lista precompilada',
          'Termux + Ollama funciona con pkg install ollama; instala Termux desde F-Droid o GitHub, porque la versión de Google Play es experimental',
          'Qwen3.5 4B (3,3 GB) encaja en móviles de 6 GB; Llama-3-ELYZA-JP-8B necesita unos 8 GB de RAM y Qwen3.5 9B unos 12 GB (estimaciones de PromptQuorum)',
          'El texto en japonés suele requerir más tokens que el inglés, así que espera menos tokens por segundo de los que sugieren los benchmarks en inglés',
        ],
      },
      body1: {
        title: 'Las 3 mejores apps de LLM local en Android en Japón',
        content: [
          '<strong>Tres vías en Android ejecutan LLM locales compatibles con japonés sin conexión: PocketPal AI, MLC Chat y Termux + Ollama.</strong> Tras descargar el modelo, las consultas se procesan en el dispositivo y ningún texto de conversación se envía a un servidor en la nube, lo que evita en las conversaciones personales las cuestiones de cesión a terceros bajo la APPI (個人情報保護法, ley japonesa de protección de la información personal). Es una descripción técnica, no asesoramiento jurídico.',
          'PocketPal AI (licencia MIT) se instala desde [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) y carga archivos GGUF de Hugging Face, de modo que Llama-3-ELYZA-JP-8B y Qwen3.5 funcionan sin esperar una actualización de la app. Última versión: v1.20.0 del 14 de octubre de 2026 ([versiones en GitHub](https://github.com/a-ghorbani/pocketpal-ai/releases)). La configuración requiere descargar el modelo manualmente. Consulta la <a href="/es/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">guía de LLM local en Xperia</a> para consejos de RAM y almacenamiento por dispositivo.',
          '[MLC Chat](https://github.com/mlc-ai/mlc-llm) no está en Google Play. MLC distribuye la app de Android como APK de demostración en [GitHub](https://llm.mlc.ai/docs/deploy/android.html), que exige instalar desde fuentes desconocidas; su documentación indica que ese APK está compilado para un Samsung S23 (Snapdragon 8 Gen 2). Solo ejecuta modelos de su lista precompilada; no hay confirmado ningún modelo específico para japonés. El repositorio de MLC LLM se actualizó por última vez el 6 de octubre de 2026, pero la carpeta de la app de Android cambió por última vez el 22 de abril de 2026. Consulta la [reseña de MLC Chat](/es/power-local-llm/mlc-chat-review).',
          'Termux + Ollama requiere una terminal, pero da acceso a toda la biblioteca de [Ollama](https://ollama.com). Instala Termux desde F-Droid o GitHub, porque su README califica la versión de Google Play de experimental ([Termux en GitHub](https://github.com/termux/termux-app), última actualización el 26 de septiembre de 2026). Ollama está en la v0.40.6 (16 de octubre de 2026) y el paquete de Termux compila la 0.40.3.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La mejor app de LLM local para Android en Japón es PocketPal AI, que se instala desde Google Play y ejecuta cualquier modelo GGUF, como Llama-3-ELYZA-JP-8B, totalmente sin conexión.',
          },
          {
            type: 'plain-terms',
            text: 'Una app de LLM local ejecuta un modelo de lenguaje de IA en tu móvil sin internet. Tus conversaciones se quedan en el dispositivo y no se envían a un servidor en la nube.',
          },
        ],
        columns: ['App', 'Instalación', 'Modelos en japonés'],
        rows: [
          {
            App: 'MLC Chat',
            'Instalación': 'Solo APK de GitHub',
            'Modelos en japonés': 'Solo lista precompilada',
          },
          {
            App: 'PocketPal AI',
            'Instalación': 'Google Play / App Store',
            'Modelos en japonés': 'Cualquier GGUF, p. ej. Llama-3-ELYZA-JP-8B',
          },
          {
            App: 'Termux + Ollama',
            'Instalación': 'F-Droid/GitHub + pkg',
            'Modelos en japonés': 'Biblioteca Ollama, p. ej. qwen3.5:9b',
          },
        ],
        note: 'Guía de decisión: PocketPal AI para la mayoría de usuarios. MLC Chat solo si aceptas un APK de GitHub y una lista fija de modelos. Termux + Ollama con 8 GB de RAM o más y algo de soltura con la terminal.',
      },
      body2: {
        title: 'Cómo elegir el modelo japonés adecuado',
        content: [
          '<strong>Tres modelos cubren la mayoría de los móviles Android: Qwen3.5 4B para dispositivos de 6 GB, y Llama-3-ELYZA-JP-8B o Qwen3.5 9B para 8 GB y 12 GB o más.</strong> Elige según la RAM, la tarea y si necesitas salida multilingüe. Las cifras de RAM son estimaciones de PromptQuorum (tamaño de descarga más margen), no mediciones.',
          'Qwen3.5 4B (qwen3.5:4b, 3,3–4,0 GB en Ollama) es la opción ligera para móviles de gama media. [Ollama](https://ollama.com/library/qwen3.5) indica que Qwen3.5 admite 201 idiomas y dialectos, pero no valora el japonés por separado; pruébalo con tus propios prompts. Cuenta con 6 GB de RAM.',
          'Llama-3-ELYZA-JP-8B es un Llama 3 8B adaptado al japonés por ELYZA. El GGUF Q4_K_M pesa 4,92 GB ([Hugging Face](https://huggingface.co/elyza/Llama-3-ELYZA-JP-8B-GGUF)) bajo la Meta Llama 3 Community License; cuenta con 8 GB de RAM. Úsalo para redacción en japonés y seguimiento de instrucciones cuando prefieras un modelo específico para japonés. Sustituye al nombre «ELYZA-7B» que esta página usaba antes.',
          'Qwen3.5 9B (qwen3.5:9b, 6,6–7,6 GB en Ollama) es la opción multilingüe para japonés, chino e inglés en una misma conversación. Cuenta con 12 GB de RAM o más; irá lento en móviles. Sustituye a Qwen3 8B, que esta página recomendaba antes.',
          'Rinna 3.6B (licencia MIT, 2023) es nativo en japonés, pero se publica como pesos de Transformers y no como GGUF oficial, así que no se carga en estas apps sin una conversión de la comunidad. El texto en japonés suele requerir más tokens que el inglés para el mismo contenido, así que espera menos tokens por segundo de los que sugieren los benchmarks en inglés. Para opciones solo CPU, consulta <a href="/es/local-llms/best-cpu-only-llm" class="text-primary hover:underline">los mejores LLM solo CPU</a>; para la comparativa completa de apps, la <a href="/es/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">guía de las mejores apps de LLM local para Android</a>.',
        ],
      },
      termux: {
        id: 'termux-ollama',
        title: 'Cómo ejecutar Ollama en Android con Termux',
        content: [
          '<strong>Ollama se ejecuta en Android dentro de Termux en cinco pasos, sin acceso root.</strong> Usa un móvil con 6 GB de RAM o más.',
        ],
        numberedItems: [
          {
            title: 'Instala Termux desde F-Droid o GitHub.',
            whyItMatters: 'El README de Termux califica la versión de Google Play de experimental y advierte de no mezclar fuentes de instalación.',
          },
          {
            title: 'Actualiza las listas de paquetes.',
            whyItMatters: 'Actualiza primero para que pkg instale el paquete actual de Ollama.',
          },
          {
            title: 'Instala Ollama.',
            whyItMatters: 'Termux ofrece Ollama como paquete (versión 0.40.3 al redactar); no hace falta compilar a mano.',
          },
          {
            title: 'Inicia el servidor de Ollama.',
            whyItMatters: 'El servidor debe ejecutarse en segundo plano antes de descargar o ejecutar un modelo.',
          },
          {
            title: 'Descarga y ejecuta un modelo.',
            whyItMatters: 'Usa qwen3.5:4b en móviles de 6 GB; qwen3.5:9b necesita mucha más memoria.',
          },
        ],
        codeBlock: 'pkg update && pkg upgrade\npkg install ollama\nollama serve &\nollama run qwen3.5:4b',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre LLM en Android en Japón',
        faqs: [
          {
            q: '¿Funcionan sin conexión los modelos LLM locales en japonés?',
            a: 'Sí. Tras la descarga inicial, los modelos funcionan totalmente sin conexión en PocketPal AI, MLC Chat y Termux + Ollama. Llama-3-ELYZA-JP-8B se carga en PocketPal AI como GGUF; Qwen3.5 funciona con Ollama en Termux. Ningún texto de prompt se envía a un servidor.',
          },
          {
            q: '¿Qué modelo funciona mejor en un móvil con 6 GB de RAM?',
            a: 'Qwen3.5 4B (descarga de 3,3–4,0 GB) es el que mejor encaja en 6 GB de RAM. Llama-3-ELYZA-JP-8B (4,92 GB) necesita unos 8 GB y Qwen3.5 9B (6,6 GB o más) unos 12 GB según nuestra estimación. Consulta la <a href="/es/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">guía de LLM local en Xperia</a> para la configuración paso a paso.',
          },
          {
            q: '¿Está MLC Chat disponible en Google Play?',
            a: 'No. MLC distribuye la app de Android como APK de demostración en GitHub, que exige instalar desde fuentes desconocidas. PocketPal AI es la alternativa en Google Play.',
          },
          {
            q: '¿Funciona Ollama en Android sin root?',
            a: 'Sí. Instala Termux desde F-Droid o GitHub, ejecuta pkg install ollama, inicia ollama serve y luego ejecuta un modelo como qwen3.5:4b. No se necesita acceso root.',
          },
          {
            q: '¿Qué ventajas ofrece un LLM local respecto a la APPI?',
            a: 'Según la APPI (個人情報保護法), el tratamiento de datos personales por una IA en la nube puede exigir un aviso de cesión a terceros y el consentimiento del usuario. Con un LLM local, tus datos de conversación nunca salen del dispositivo: sin almacenamiento en la nube ni transferencia a terceros en uso personal. No es asesoramiento jurídico.',
          },
          {
            q: '¿Se puede usar la entrada de voz en japonés con estas apps?',
            a: 'Sí. La entrada de voz estándar en japonés mediante el teclado de Android (Google Japanese Input o Gboard) funciona con las tres vías. Dicta o escribe en japonés; el modelo lo procesa igual. No hace falta ninguna configuración de voz especial.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Ejecutar un LLM local en Xperia](/es/prompt-bites/run-local-llm-on-xperia-japan)',
          '[Mejores modelos de Ollama para 4 GB de VRAM](/es/prompt-bites/best-ollama-models-4gb-vram)',
          '[Mejores apps de LLM local para Android](/es/power-local-llm/best-local-llm-apps-android-2026)',
          '[Mejores LLM solo CPU](/es/local-llms/best-cpu-only-llm)',
          '[Reseña de MLC Chat](/es/power-local-llm/mlc-chat-review)',
        ],
      },
    },
  },
  pt: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-apps-japan-android-overview-hero-pt.webp',
    title: 'Quais são os melhores apps de LLM local para Android no Japão?',
    seoTitle: 'Melhores apps de LLM local para Android no Japão (2026)',
    metaDescription: 'PocketPal AI, MLC Chat e Termux + Ollama rodam LLMs em japonês offline no Android. Compare Qwen3.5 4B/9B e Llama-3-ELYZA-JP-8B por RAM, instalação e APPI.',
    publishDate: '2026-05-27',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5 4B', 'Qwen3.5 9B', 'Llama-3-ELYZA-JP-8B', 'Rinna 3.6B'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Samsung Galaxy S24'],
    educationalLevel: 'Intermediate',
    audience: 'Usuários de Android no Japão que executam LLMs locais',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-apps-android'],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'Quais são os melhores apps de LLM local para Android no Japão?',
        answer: 'O PocketPal AI é o melhor ponto de partida no Android no Japão: instala-se pelo Google Play e carrega qualquer modelo GGUF, incluindo Llama-3-ELYZA-JP-8B e Qwen3.5. O MLC Chat (APK do GitHub) e o Termux + Ollama servem para uma lista fixa de modelos ou para toda a biblioteca do Ollama.',
        bullets: [
          'PocketPal AI: instalação pelo Google Play, qualquer modelo GGUF, entrada completa em japonês',
          'MLC Chat: APK do GitHub (fora do Google Play), apenas lista de modelos pré-compilados',
          'Termux + Ollama: pkg install ollama, o Qwen3.5 9B exige 12 GB de RAM ou mais',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O PocketPal AI é o caminho mais simples no Japão: instala-se pelo Google Play e importa qualquer modelo GGUF do Hugging Face, incluindo o Llama-3-ELYZA-JP-8B (4,92 GB em Q4_K_M)',
          'O MLC Chat não está no Google Play: o APK de demonstração vem do GitHub da MLC e executa apenas modelos da sua lista pré-compilada',
          'O Termux + Ollama funciona com pkg install ollama; instale o Termux pelo F-Droid ou GitHub, pois a versão do Google Play é experimental',
          'O Qwen3.5 4B (3,3 GB) serve para celulares de 6 GB; o Llama-3-ELYZA-JP-8B exige cerca de 8 GB de RAM e o Qwen3.5 9B cerca de 12 GB (estimativas da PromptQuorum)',
          'O texto em japonês costuma exigir mais tokens que o inglês, então espere menos tokens por segundo do que sugerem os benchmarks em inglês',
        ],
      },
      body1: {
        title: 'Os 3 melhores apps de LLM local no Android no Japão',
        content: [
          '<strong>Três caminhos no Android executam LLMs locais com suporte a japonês offline: PocketPal AI, MLC Chat e Termux + Ollama.</strong> Após o download do modelo, as consultas são processadas no aparelho e nenhum texto de conversa é enviado a um servidor na nuvem, o que afasta, nas conversas pessoais, as questões de compartilhamento com terceiros sob a APPI (個人情報保護法, lei japonesa de proteção de informações pessoais). Esta é uma descrição técnica, não aconselhamento jurídico.',
          'O PocketPal AI (licença MIT) instala-se pelo [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) e carrega arquivos GGUF do Hugging Face, de modo que o Llama-3-ELYZA-JP-8B e o Qwen3.5 funcionam sem esperar uma atualização do app. Versão mais recente: v1.20.0, de 14 de outubro de 2026 ([releases no GitHub](https://github.com/a-ghorbani/pocketpal-ai/releases)). A configuração exige baixar o modelo manualmente. Veja o <a href="/pt/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">guia de LLM local no Xperia</a> para dicas de RAM e armazenamento por aparelho.',
          'O [MLC Chat](https://github.com/mlc-ai/mlc-llm) não está no Google Play. A MLC distribui o app Android como APK de demonstração no [GitHub](https://llm.mlc.ai/docs/deploy/android.html), que exige instalação de fontes desconhecidas; a documentação descreve esse APK como compilado para um Samsung S23 (Snapdragon 8 Gen 2). Ele executa apenas modelos da lista pré-compilada; nenhum modelo específico para japonês está confirmado ali. O repositório do MLC LLM foi atualizado pela última vez em 6 de outubro de 2026, mas a pasta do app Android mudou pela última vez em 22 de abril de 2026. Veja a [análise do MLC Chat](/pt/power-local-llm/mlc-chat-review).',
          'O Termux + Ollama exige um terminal, mas oferece toda a biblioteca do [Ollama](https://ollama.com). Instale o Termux pelo F-Droid ou GitHub, pois o README descreve a versão do Google Play como experimental ([Termux no GitHub](https://github.com/termux/termux-app), última atualização em 26 de setembro de 2026). O Ollama está na v0.40.6 (16 de outubro de 2026) e o pacote do Termux compila a 0.40.3.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O melhor app de LLM local para Android no Japão é o PocketPal AI, que se instala pelo Google Play e executa qualquer modelo GGUF, como o Llama-3-ELYZA-JP-8B, totalmente offline.',
          },
          {
            type: 'plain-terms',
            text: 'Um app de LLM local executa um modelo de linguagem de IA no seu celular sem internet. Suas conversas ficam no aparelho e não são enviadas a um servidor na nuvem.',
          },
        ],
        columns: ['App', 'Instalação', 'Modelos em japonês'],
        rows: [
          {
            App: 'MLC Chat',
            'Instalação': 'Só APK do GitHub',
            'Modelos em japonês': 'Só lista pré-compilada',
          },
          {
            App: 'PocketPal AI',
            'Instalação': 'Google Play / App Store',
            'Modelos em japonês': 'Qualquer GGUF, ex.: Llama-3-ELYZA-JP-8B',
          },
          {
            App: 'Termux + Ollama',
            'Instalação': 'F-Droid/GitHub + pkg',
            'Modelos em japonês': 'Biblioteca Ollama, ex.: qwen3.5:9b',
          },
        ],
        note: 'Guia de decisão: PocketPal AI para a maioria dos usuários. MLC Chat só se você aceitar um APK do GitHub e uma lista fixa de modelos. Termux + Ollama com 8 GB de RAM ou mais e alguma familiaridade com o terminal.',
      },
      body2: {
        title: 'Como escolher o modelo japonês certo',
        content: [
          '<strong>Três modelos cobrem a maioria dos celulares Android: Qwen3.5 4B para aparelhos de 6 GB, e Llama-3-ELYZA-JP-8B ou Qwen3.5 9B para 8 GB e 12 GB ou mais.</strong> Escolha conforme a RAM, a tarefa e a necessidade de saída multilíngue. Os valores de RAM são estimativas da PromptQuorum (tamanho do download mais margem), não medições.',
          'O Qwen3.5 4B (qwen3.5:4b, 3,3–4,0 GB no Ollama) é a opção leve para celulares intermediários. O [Ollama](https://ollama.com/library/qwen3.5) informa que o Qwen3.5 oferece suporte a 201 idiomas e dialetos, mas não avalia o japonês separadamente; teste com seus próprios prompts. Conte com 6 GB de RAM.',
          'O Llama-3-ELYZA-JP-8B é um Llama 3 8B adaptado ao japonês pela ELYZA. O GGUF Q4_K_M tem 4,92 GB ([Hugging Face](https://huggingface.co/elyza/Llama-3-ELYZA-JP-8B-GGUF)) sob a Meta Llama 3 Community License; conte com 8 GB de RAM. Use-o para redação em japonês e seguimento de instruções quando preferir um modelo específico para japonês. Ele substitui o nome "ELYZA-7B" usado antes nesta página.',
          'O Qwen3.5 9B (qwen3.5:9b, 6,6–7,6 GB no Ollama) é a opção multilíngue para japonês, chinês e inglês numa mesma conversa. Conte com 12 GB de RAM ou mais; ele ficará lento em celulares. Substitui o Qwen3 8B, que esta página recomendava antes.',
          'O Rinna 3.6B (licença MIT, 2023) é nativo em japonês, mas é publicado como pesos Transformers, não como GGUF oficial, então não carrega nestes apps sem uma conversão da comunidade. O texto em japonês costuma exigir mais tokens que o inglês para o mesmo conteúdo, então espere menos tokens por segundo do que sugerem os benchmarks em inglês. Para opções só com CPU, veja <a href="/pt/local-llms/best-cpu-only-llm" class="text-primary hover:underline">melhores LLMs só com CPU</a>; para a comparação completa de apps, veja o <a href="/pt/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">guia dos melhores apps de LLM local para Android</a>.',
        ],
      },
      termux: {
        id: 'termux-ollama',
        title: 'Como executar o Ollama no Android com o Termux',
        content: [
          '<strong>O Ollama roda no Android dentro do Termux em cinco passos, sem acesso root.</strong> Use um celular com 6 GB de RAM ou mais.',
        ],
        numberedItems: [
          {
            title: 'Instale o Termux pelo F-Droid ou GitHub.',
            whyItMatters: 'O README do Termux descreve a versão do Google Play como experimental e avisa para não misturar fontes de instalação.',
          },
          {
            title: 'Atualize as listas de pacotes.',
            whyItMatters: 'Atualize primeiro para que o pkg instale o pacote atual do Ollama.',
          },
          {
            title: 'Instale o Ollama.',
            whyItMatters: 'O Termux oferece o Ollama como pacote (versão 0.40.3 na data de redação); não é preciso compilar manualmente.',
          },
          {
            title: 'Inicie o servidor do Ollama.',
            whyItMatters: 'O servidor precisa rodar em segundo plano antes de baixar ou executar um modelo.',
          },
          {
            title: 'Baixe e execute um modelo.',
            whyItMatters: 'Use qwen3.5:4b em celulares de 6 GB; o qwen3.5:9b exige bem mais memória.',
          },
        ],
        codeBlock: 'pkg update && pkg upgrade\npkg install ollama\nollama serve &\nollama run qwen3.5:4b',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre LLMs no Android no Japão',
        faqs: [
          {
            q: 'Os modelos de LLM locais em japonês funcionam offline?',
            a: 'Sim. Após o download inicial, os modelos funcionam totalmente offline no PocketPal AI, no MLC Chat e no Termux + Ollama. O Llama-3-ELYZA-JP-8B carrega no PocketPal AI como GGUF; o Qwen3.5 roda pelo Ollama no Termux. Nenhum texto de prompt é enviado a um servidor.',
          },
          {
            q: 'Qual modelo funciona melhor em um celular com 6 GB de RAM?',
            a: 'O Qwen3.5 4B (download de 3,3–4,0 GB) é o que melhor se encaixa em 6 GB de RAM. O Llama-3-ELYZA-JP-8B (4,92 GB) exige cerca de 8 GB e o Qwen3.5 9B (6,6 GB ou mais) cerca de 12 GB, segundo nossa estimativa. Veja o <a href="/pt/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">guia de LLM local no Xperia</a> para a configuração passo a passo.',
          },
          {
            q: 'O MLC Chat está disponível no Google Play?',
            a: 'Não. A MLC distribui o app Android como APK de demonstração no GitHub, que exige instalação de fontes desconhecidas. O PocketPal AI é a alternativa no Google Play.',
          },
          {
            q: 'O Ollama roda no Android sem root?',
            a: 'Sim. Instale o Termux pelo F-Droid ou GitHub, execute pkg install ollama, inicie ollama serve e depois execute um modelo como qwen3.5:4b. Acesso root não é necessário.',
          },
          {
            q: 'Quais são os benefícios de um LLM local em relação à APPI?',
            a: 'Pela APPI (個人情報保護法), o processamento de dados pessoais por uma IA na nuvem pode exigir aviso de compartilhamento com terceiros e consentimento do usuário. Com um LLM local, os dados da conversa nunca saem do aparelho: sem armazenamento na nuvem nem transferência a terceiros no uso pessoal. Isto não é aconselhamento jurídico.',
          },
          {
            q: 'Dá para usar a entrada de voz em japonês com esses apps de LLM?',
            a: 'Sim. A entrada de voz padrão em japonês pelo teclado do Android (Google Japanese Input ou Gboard) funciona nos três caminhos. Dite ou digite em japonês; o modelo processa da mesma forma. Nenhuma configuração especial de voz é necessária.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Executar um LLM local no Xperia](/pt/prompt-bites/run-local-llm-on-xperia-japan)',
          '[Melhores modelos Ollama para 4 GB de VRAM](/pt/prompt-bites/best-ollama-models-4gb-vram)',
          '[Melhores apps de LLM local para Android](/pt/power-local-llm/best-local-llm-apps-android-2026)',
          '[Melhores LLMs só com CPU](/pt/local-llms/best-cpu-only-llm)',
          '[Análise do MLC Chat](/pt/power-local-llm/mlc-chat-review)',
        ],
      },
    },
  },
  ar: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-apps-japan-android-overview-hero-ar.webp',
    title: 'ما أفضل تطبيقات النماذج اللغوية الكبيرة المحلية لنظام Android في اليابان؟',
    seoTitle: 'أفضل تطبيقات LLM المحلية لـ Android في اليابان (2026)',
    metaDescription: 'يشغّل PocketPal AI وMLC Chat وTermux + Ollama نماذج LLM يابانية دون إنترنت على Android. قارن Qwen3.5 4B/9B وLlama-3-ELYZA-JP-8B حسب RAM والإعداد وقانون APPI.',
    publishDate: '2026-05-27',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5 4B', 'Qwen3.5 9B', 'Llama-3-ELYZA-JP-8B', 'Rinna 3.6B'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Samsung Galaxy S24'],
    educationalLevel: 'Intermediate',
    audience: 'مستخدمو Android في اليابان الذين يشغّلون النماذج اللغوية الكبيرة المحلية',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-apps-android'],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل تطبيقات النماذج اللغوية الكبيرة المحلية لنظام Android في اليابان؟',
        answer: 'PocketPal AI هو أفضل نقطة بداية على Android في اليابان: يُثبَّت من Google Play ويحمّل أي نموذج GGUF، ومنها Llama-3-ELYZA-JP-8B وQwen3.5. يناسب MLC Chat (ملف APK من GitHub) وTermux + Ollama من يريد قائمة نماذج ثابتة أو مكتبة Ollama الكاملة.',
        bullets: [
          'PocketPal AI: تثبيت من Google Play، أي نموذج GGUF، دعم كامل للإدخال بالياباني',
          'MLC Chat: ملف APK من GitHub (غير متاح في Google Play)، قائمة نماذج مُعدّة مسبقاً فقط',
          'Termux + Ollama: pkg install ollama، ويحتاج Qwen3.5 9B إلى 12 جيجابايت RAM أو أكثر',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'PocketPal AI هو أسهل طريق في اليابان — يُثبَّت من Google Play ويستورد أي نموذج GGUF من Hugging Face، ومنها Llama-3-ELYZA-JP-8B (4.92 جيجابايت بصيغة Q4_K_M)',
          'MLC Chat غير متاح في Google Play — يُنزَّل ملف APK التجريبي من GitHub الخاص بـ MLC، ويشغّل فقط نماذج قائمته المُعدّة مسبقاً',
          'يعمل Termux + Ollama بالأمر pkg install ollama؛ ثبّت Termux من F-Droid أو GitHub لأن نسخة Google Play تجريبية',
          'يناسب Qwen3.5 4B (3.3 جيجابايت) هواتف 6 جيجابايت؛ ويحتاج Llama-3-ELYZA-JP-8B إلى نحو 8 جيجابايت RAM وQwen3.5 9B إلى نحو 12 جيجابايت (تقديرات PromptQuorum)',
          'يحتاج النص الياباني عادةً إلى رموز (tokens) أكثر من الإنجليزي، فتوقّع عدد رموز في الثانية أقل مما توحي به المقاييس الإنجليزية',
        ],
      },
      body1: {
        title: 'أفضل 3 تطبيقات للنماذج المحلية على Android في اليابان',
        content: [
          '<strong>توجد ثلاث طرق على Android لتشغيل نماذج LLM محلية تدعم اليابانية دون إنترنت: PocketPal AI وMLC Chat وTermux + Ollama.</strong> بعد تنزيل النموذج تُعالَج الطلبات على الجهاز ولا يُرسل أي نص محادثة إلى خادم سحابي، مما يُبعد المحادثات الشخصية عن مسائل الإفصاح لأطراف ثالثة بموجب قانون APPI (個人情報保護法، قانون حماية المعلومات الشخصية في اليابان). هذا وصف تقني وليس استشارة قانونية.',
          'يُثبَّت PocketPal AI (رخصة MIT) من [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) ويحمّل ملفات GGUF من Hugging Face، فيعمل Llama-3-ELYZA-JP-8B وQwen3.5 دون انتظار تحديث للتطبيق. آخر إصدار: v1.20.0 بتاريخ 14 أكتوبر 2026 ([إصدارات GitHub](https://github.com/a-ghorbani/pocketpal-ai/releases)). يتطلب الإعداد تنزيل النموذج يدوياً. راجع <a href="/ar/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">دليل Xperia للنماذج المحلية</a> لنصائح RAM والتخزين لكل جهاز.',
          '[MLC Chat](https://github.com/mlc-ai/mlc-llm) غير متاح في Google Play. توزّع MLC تطبيق Android كملف APK تجريبي على [GitHub](https://llm.mlc.ai/docs/deploy/android.html) يتطلب التثبيت من مصادر غير معروفة، وتصف وثائقها هذا الملف بأنه مبني لهاتف Samsung S23 (معالج Snapdragon 8 Gen 2). يشغّل فقط نماذج قائمته المُعدّة مسبقاً، ولم يُؤكَّد وجود نموذج مخصص لليابانية فيها. آخر تحديث لمستودع MLC LLM كان في 6 أكتوبر 2026، لكن مجلد تطبيق Android تغيّر آخر مرة في 22 أبريل 2026. راجع أيضاً [مراجعة MLC Chat](/ar/power-local-llm/mlc-chat-review).',
          'يتطلب Termux + Ollama استخدام الطرفية لكنه يتيح مكتبة [Ollama](https://ollama.com) الكاملة. ثبّت Termux من F-Droid أو GitHub لأن ملف README يصف نسخة Google Play بأنها تجريبية ([Termux على GitHub](https://github.com/termux/termux-app)، آخر تحديث 26 سبتمبر 2026). Ollama نفسه عند الإصدار v0.40.6 (16 أكتوبر 2026)، وحزمة Termux تبني الإصدار 0.40.3.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'أفضل تطبيق LLM محلي لـ Android في اليابان هو PocketPal AI، يُثبَّت من Google Play ويشغّل أي نموذج GGUF مثل Llama-3-ELYZA-JP-8B دون اتصال بالإنترنت بالكامل.',
          },
          {
            type: 'plain-terms',
            text: 'يشغّل تطبيق LLM المحلي نموذجاً لغوياً للذكاء الاصطناعي على هاتفك دون إنترنت. تبقى محادثاتك على الجهاز ولا تُرسل إلى خادم سحابي.',
          },
        ],
        columns: ['التطبيق', 'طريقة التثبيت', 'النماذج اليابانية'],
        rows: [
          {
            'التطبيق': 'MLC Chat',
            'طريقة التثبيت': 'ملف APK من GitHub فقط',
            'النماذج اليابانية': 'قائمة مُعدّة مسبقاً فقط',
          },
          {
            'التطبيق': 'PocketPal AI',
            'طريقة التثبيت': 'Google Play / App Store',
            'النماذج اليابانية': 'أي GGUF مثل Llama-3-ELYZA-JP-8B',
          },
          {
            'التطبيق': 'Termux + Ollama',
            'طريقة التثبيت': 'F-Droid/GitHub + pkg',
            'النماذج اليابانية': 'مكتبة Ollama مثل qwen3.5:9b',
          },
        ],
        note: 'دليل القرار: PocketPal AI لمعظم المستخدمين. MLC Chat فقط إذا قبلت ملف APK من GitHub وقائمة نماذج ثابتة. Termux + Ollama مع 8 جيجابايت RAM أو أكثر وبعض الإلمام بالطرفية.',
      },
      body2: {
        title: 'كيف تختار النموذج الياباني المناسب',
        content: [
          '<strong>تغطي ثلاثة نماذج معظم هواتف Android: Qwen3.5 4B لأجهزة 6 جيجابايت، وLlama-3-ELYZA-JP-8B أو Qwen3.5 9B لأجهزة 8 جيجابايت و12 جيجابايت فأكثر.</strong> اختر حسب RAM والمهمة والحاجة إلى مخرجات متعددة اللغات. أرقام RAM تقديرات من PromptQuorum (حجم التنزيل مع هامش إضافي) وليست قياسات.',
          'Qwen3.5 4B (qwen3.5:4b، من 3.3 إلى 4.0 جيجابايت في Ollama) هو الخيار الخفيف للهواتف المتوسطة. يذكر [Ollama](https://ollama.com/library/qwen3.5) أن Qwen3.5 يدعم 201 لغة ولهجة دون تقييم الياباني على حدة، فجرّبه بطلباتك الخاصة. خطّط لـ 6 جيجابايت RAM.',
          'Llama-3-ELYZA-JP-8B نموذج Llama 3 8B كيّفته ELYZA للغة اليابانية. ملف GGUF بصيغة Q4_K_M حجمه 4.92 جيجابايت ([Hugging Face](https://huggingface.co/elyza/Llama-3-ELYZA-JP-8B-GGUF)) ضمن رخصة Meta Llama 3 Community License، فخطّط لـ 8 جيجابايت RAM. استخدمه للكتابة باليابانية واتباع التعليمات عندما تفضّل نموذجاً مخصصاً لليابانية. وهو يحل محل الاسم «ELYZA-7B» الذي استخدمته هذه الصفحة سابقاً.',
          'Qwen3.5 9B (qwen3.5:9b، من 6.6 إلى 7.6 جيجابايت في Ollama) هو الخيار متعدد اللغات لليابانية والصينية والإنجليزية في محادثة واحدة. خطّط لـ 12 جيجابايت RAM أو أكثر؛ وسيكون بطيئاً على الهواتف. وهو يحل محل Qwen3 8B الذي أوصت به هذه الصفحة سابقاً.',
          'Rinna 3.6B (رخصة MIT، 2023) نموذج ياباني أصلي لكنه منشور بأوزان Transformers وليس بصيغة GGUF رسمية، لذا لا يُحمَّل في هذه التطبيقات دون تحويل من المجتمع. يحتاج النص الياباني عادةً إلى رموز أكثر من الإنجليزي للمحتوى نفسه، فتوقّع عدد رموز في الثانية أقل مما توحي به المقاييس الإنجليزية. لخيارات المعالج فقط راجع <a href="/ar/local-llms/best-cpu-only-llm" class="text-primary hover:underline">أفضل نماذج LLM للمعالج فقط</a>، وللمقارنة الكاملة بين التطبيقات راجع <a href="/ar/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">دليل أفضل تطبيقات LLM المحلية لـ Android</a>.',
        ],
      },
      termux: {
        id: 'termux-ollama',
        title: 'كيف تشغّل Ollama على Android عبر Termux',
        content: [
          '<strong>يعمل Ollama على Android داخل Termux في خمس خطوات ودون صلاحيات root.</strong> استخدم هاتفاً بذاكرة RAM لا تقل عن 6 جيجابايت.',
        ],
        numberedItems: [
          {
            title: 'ثبّت Termux من F-Droid أو GitHub.',
            whyItMatters: 'يصف README الخاص بـ Termux نسخة Google Play بأنها تجريبية ويحذّر من خلط مصادر التثبيت.',
          },
          {
            title: 'حدّث قوائم الحزم.',
            whyItMatters: 'حدّث أولاً ليثبّت pkg أحدث حزمة Ollama.',
          },
          {
            title: 'ثبّت Ollama.',
            whyItMatters: 'يوفّر Termux حزمة Ollama (الإصدار 0.40.3 وقت الكتابة)، فلا حاجة إلى بناء يدوي.',
          },
          {
            title: 'شغّل خادم Ollama.',
            whyItMatters: 'يجب أن يعمل الخادم في الخلفية قبل تنزيل أي نموذج أو تشغيله.',
          },
          {
            title: 'نزّل نموذجاً وشغّله.',
            whyItMatters: 'استخدم qwen3.5:4b على هواتف 6 جيجابايت؛ أما qwen3.5:9b فيحتاج إلى ذاكرة أكبر بكثير.',
          },
        ],
        codeBlock: 'pkg update && pkg upgrade\npkg install ollama\nollama serve &\nollama run qwen3.5:4b',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة عن نماذج LLM على Android في اليابان',
        faqs: [
          {
            q: 'هل تعمل نماذج LLM المحلية اليابانية دون إنترنت؟',
            a: 'نعم. بعد التنزيل الأولي تعمل النماذج دون إنترنت بالكامل في PocketPal AI وMLC Chat وTermux + Ollama. يُحمَّل Llama-3-ELYZA-JP-8B في PocketPal AI بصيغة GGUF، ويعمل Qwen3.5 عبر Ollama في Termux. لا يُرسل أي نص من الطلبات إلى أي خادم.',
          },
          {
            q: 'أي نموذج يعمل بأفضل شكل على هاتف بذاكرة 6 جيجابايت؟',
            a: 'يناسب Qwen3.5 4B (تنزيل 3.3–4.0 جيجابايت) ذاكرة 6 جيجابايت أكثر من غيره. وبحسب تقديرنا يحتاج Llama-3-ELYZA-JP-8B (4.92 جيجابايت) إلى نحو 8 جيجابايت وQwen3.5 9B (6.6 جيجابايت فأكثر) إلى نحو 12 جيجابايت. للإعداد خطوة بخطوة راجع <a href="/ar/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">دليل Xperia للنماذج المحلية</a>.',
          },
          {
            q: 'هل MLC Chat متاح في Google Play؟',
            a: 'لا. توزّع MLC تطبيق Android كملف APK تجريبي على GitHub يتطلب التثبيت من مصادر غير معروفة. والبديل المتاح في Google Play هو PocketPal AI.',
          },
          {
            q: 'هل يعمل Ollama على Android دون root؟',
            a: 'نعم. ثبّت Termux من F-Droid أو GitHub، ثم نفّذ pkg install ollama، وشغّل ollama serve، ثم شغّل نموذجاً مثل qwen3.5:4b. لا حاجة إلى صلاحيات root.',
          },
          {
            q: 'ما مزايا تشغيل نموذج LLM محلي من حيث قانون APPI؟',
            a: 'بموجب قانون APPI (個人情報保護法) قد تتطلب معالجة البيانات الشخصية بواسطة ذكاء اصطناعي سحابي إشعاراً بالإفصاح لطرف ثالث وموافقة المستخدم. مع النموذج المحلي لا تغادر بيانات المحادثة الجهاز، فلا تخزين سحابياً ولا نقل لطرف ثالث في الاستخدام الشخصي. هذا ليس استشارة قانونية.',
          },
          {
            q: 'هل يمكن استخدام الإدخال الصوتي الياباني مع هذه التطبيقات؟',
            a: 'نعم. يعمل الإدخال الصوتي الياباني القياسي عبر لوحة مفاتيح Android (Google Japanese Input أو Gboard) مع الطرق الثلاث. تحدّث أو اكتب باليابانية، ويعالجه النموذج بالطريقة نفسها. لا حاجة إلى إعداد صوتي خاص.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[تشغيل نموذج LLM محلي على Xperia](/ar/prompt-bites/run-local-llm-on-xperia-japan)',
          '[أفضل نماذج Ollama لذاكرة 4 جيجابايت VRAM](/ar/prompt-bites/best-ollama-models-4gb-vram)',
          '[أفضل تطبيقات LLM المحلية لـ Android](/ar/power-local-llm/best-local-llm-apps-android-2026)',
          '[أفضل نماذج LLM للمعالج فقط](/ar/local-llms/best-cpu-only-llm)',
          '[مراجعة MLC Chat](/ar/power-local-llm/mlc-chat-review)',
        ],
      },
    },
  },
  zh: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-apps-japan-android-overview-hero-zh.webp',
    title: '日本最受欢迎的Android本地LLM应用是什么？',
    seoTitle: '日本Android本地LLM应用推荐（2026）',
    metaDescription: 'PocketPal AI、MLC Chat和Termux + Ollama可在Android上离线运行日语LLM。按内存、安装方式和APPI对比Qwen3.5 4B/9B与Llama-3-ELYZA-JP-8B。',
    publishDate: '2026-05-27',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5 4B', 'Qwen3.5 9B', 'Llama-3-ELYZA-JP-8B', 'Rinna 3.6B'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Samsung Galaxy S24'],
    educationalLevel: 'Intermediate',
    audience: '在日本使用本地LLM的Android用户',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-apps-android'],
    is_living_page: false,
    quickAnswerTop: {
      zh: {
        question: '日本最受欢迎的Android本地LLM应用是什么？',
        answer: '在日本的Android设备上，PocketPal AI是最佳起点：可从Google Play安装，并加载任意GGUF模型，包括Llama-3-ELYZA-JP-8B和Qwen3.5。MLC Chat（GitHub的APK）和Termux + Ollama分别适合接受固定模型列表或需要完整Ollama库的用户。',
        bullets: [
          'PocketPal AI：从Google Play安装，支持任意GGUF模型，完整支持日语输入',
          'MLC Chat：GitHub的APK（未上架Google Play），仅限预构建模型列表',
          'Termux + Ollama：pkg install ollama，Qwen3.5 9B需要12 GB或更多内存',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'PocketPal AI是日本最简单的方式——可从Google Play安装，并导入Hugging Face上的任意GGUF模型，包括Llama-3-ELYZA-JP-8B（Q4_K_M为4.92 GB）',
          'MLC Chat未上架Google Play——演示版APK来自MLC的GitHub，只能运行其预构建列表中的模型',
          'Termux + Ollama通过pkg install ollama即可运行；Google Play版Termux为实验性版本，请从F-Droid或GitHub安装',
          'Qwen3.5 4B（3.3 GB）适合6 GB手机；Llama-3-ELYZA-JP-8B约需8 GB内存，Qwen3.5 9B约需12 GB（PromptQuorum估算）',
          '日语文本通常比英语需要更多token，因此每秒token数会低于英语基准测试的结果',
        ],
      },
      body1: {
        title: '日本Android上运行本地LLM的3款最佳应用',
        content: [
          '<strong>在Android上离线运行支持日语的本地LLM有三种方式：PocketPal AI、MLC Chat和Termux + Ollama。</strong>模型下载完成后，提示词在设备上处理，对话文本不会发送到云服务器，因此个人对话不涉及APPI（個人情報保護法，日本《个人信息保护法》）下向第三方提供的问题。以上为技术说明，不构成法律意见。',
          'PocketPal AI（MIT许可证）可从[Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)安装，并加载Hugging Face上的GGUF文件，因此无需等待应用更新即可使用Llama-3-ELYZA-JP-8B和Qwen3.5。最新版本：v1.20.0（2026年10月14日，[GitHub发布页](https://github.com/a-ghorbani/pocketpal-ai/releases)）。设置时需手动下载模型。各机型的内存和存储建议见<a href="/zh/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia本地LLM指南</a>。',
          '[MLC Chat](https://github.com/mlc-ai/mlc-llm)未上架Google Play。MLC将Android版作为演示版APK发布在[GitHub](https://llm.mlc.ai/docs/deploy/android.html)上，需要允许安装未知来源应用，其文档称该APK是为Samsung S23（骁龙8 Gen 2）构建的。它只能运行预构建列表中的模型，尚未确认有日语专用模型。MLC LLM仓库最后更新于2026年10月6日，但Android应用目录最后变更于2026年4月22日。另见[MLC Chat评测](/zh/power-local-llm/mlc-chat-review)。',
          'Termux + Ollama需要使用终端，但可使用完整的[Ollama](https://ollama.com)库。请从F-Droid或GitHub安装Termux，因为其README称Google Play版为实验性版本（[GitHub上的Termux](https://github.com/termux/termux-app)，最后更新于2026年9月26日）。Ollama本身为v0.40.6（2026年10月16日），Termux软件包构建的是0.40.3。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '在日本的Android上，最佳本地LLM应用是PocketPal AI：可从Google Play安装，并完全离线运行任意GGUF模型，例如Llama-3-ELYZA-JP-8B。',
          },
          { type: 'plain-terms', text: '本地LLM应用无需联网即可在手机上运行AI语言模型。对话数据保留在设备上，不会发送到云服务器。' },
        ],
        columns: ['应用', '安装方式', '日语模型'],
        rows: [
          { '应用': 'MLC Chat', '安装方式': '仅GitHub的APK', '日语模型': '仅限预构建模型列表' },
          {
            '应用': 'PocketPal AI',
            '安装方式': 'Google Play / App Store',
            '日语模型': '任意GGUF，如Llama-3-ELYZA-JP-8B',
          },
          { '应用': 'Termux + Ollama', '安装方式': 'F-Droid/GitHub + pkg', '日语模型': 'Ollama库，如qwen3.5:9b' },
        ],
        note: '选择建议：大多数用户选PocketPal AI。仅在能接受GitHub的APK和固定模型列表时选MLC Chat。拥有8 GB或更多内存且熟悉终端时选Termux + Ollama。',
      },
      body2: {
        title: '如何选择合适的日语模型',
        content: [
          '<strong>三个模型可覆盖大多数Android手机：6 GB设备用Qwen3.5 4B，8 GB和12 GB以上设备用Llama-3-ELYZA-JP-8B或Qwen3.5 9B。</strong>请根据内存、任务以及是否需要多语言输出来选择。内存数字为PromptQuorum的估算值（下载大小加余量），并非实测。',
          'Qwen3.5 4B（qwen3.5:4b，在Ollama中为3.3–4.0 GB）是中端手机的轻量之选。[Ollama](https://ollama.com/library/qwen3.5)称Qwen3.5支持201种语言和方言，但未单独评估日语质量，请用自己的提示词测试。建议6 GB内存。',
          'Llama-3-ELYZA-JP-8B是ELYZA对Llama 3 8B做日语适配后的模型。Q4_K_M的GGUF为4.92 GB（[Hugging Face](https://huggingface.co/elyza/Llama-3-ELYZA-JP-8B-GGUF)），遵循Meta Llama 3 Community License，建议8 GB内存。当您更倾向于日语专用模型时，可用于日语写作和指令遵循。它取代了本页此前使用的“ELYZA-7B”这一名称。',
          'Qwen3.5 9B（qwen3.5:9b，在Ollama中为6.6–7.6 GB）是在同一对话中处理日语、中文和英语的多语言之选。建议12 GB或更多内存，在手机上运行会较慢。它取代了本页此前推荐的Qwen3 8B。',
          'Rinna 3.6B（MIT许可证，2023年）是日语原生模型，但以Transformers权重而非官方GGUF发布，因此没有社区转换版就无法在这些应用中加载。日语文本通常比英语需要更多token，因此每秒token数会低于英语基准测试的结果。纯CPU方案见<a href="/zh/local-llms/best-cpu-only-llm" class="text-primary hover:underline">最佳纯CPU LLM</a>；完整的应用对比见<a href="/zh/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">Android最佳本地LLM应用指南</a>。',
        ],
      },
      termux: {
        id: 'termux-ollama',
        title: '如何通过Termux在Android上运行Ollama',
        content: [
          '<strong>Ollama可在Android的Termux中通过五个步骤运行，无需root权限。</strong>请使用内存6 GB或以上的手机。',
        ],
        numberedItems: [
          {
            title: '从F-Droid或GitHub安装Termux。',
            whyItMatters: 'Termux的README称Google Play版为实验性版本，并警告不要混用安装来源。',
          },
          { title: '更新软件包列表。', whyItMatters: '先更新，pkg才会安装最新的Ollama软件包。' },
          { title: '安装Ollama。', whyItMatters: 'Termux以软件包形式提供Ollama（撰写时为0.40.3版），无需手动构建。' },
          { title: '启动Ollama服务。', whyItMatters: '在拉取或运行模型之前，服务必须在后台运行。' },
          { title: '拉取并运行模型。', whyItMatters: '6 GB手机请使用qwen3.5:4b；qwen3.5:9b需要多得多的内存。' },
        ],
        codeBlock: 'pkg update && pkg upgrade\npkg install ollama\nollama serve &\nollama run qwen3.5:4b',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: '关于日本Android LLM的快速解答',
        faqs: [
          {
            q: '日语本地LLM模型可以离线运行吗？',
            a: '可以。首次下载后，模型在PocketPal AI、MLC Chat和Termux + Ollama中均可完全离线运行。Llama-3-ELYZA-JP-8B可作为GGUF加载到PocketPal AI；Qwen3.5通过Termux中的Ollama运行。提示词文本不会发送到任何服务器。',
          },
          {
            q: '6 GB内存的手机运行哪个模型最合适？',
            a: '6 GB内存最适合Qwen3.5 4B（下载3.3–4.0 GB）。按我们的估算，Llama-3-ELYZA-JP-8B（4.92 GB）约需8 GB，Qwen3.5 9B（6.6 GB以上）约需12 GB。分步设置请见<a href="/zh/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia本地LLM指南</a>。',
          },
          {
            q: 'MLC Chat可以在Google Play上获取吗？',
            a: '不可以。MLC将Android版作为演示版APK发布在GitHub上，需要允许安装未知来源应用。Google Play上的替代选择是PocketPal AI。',
          },
          {
            q: 'Ollama可以在没有root的Android上运行吗？',
            a: '可以。从F-Droid或GitHub安装Termux，运行pkg install ollama，启动ollama serve，然后运行qwen3.5:4b等模型。无需root权限。',
          },
          {
            q: '运行本地LLM在APPI方面有什么好处？',
            a: '根据APPI（個人情報保護法），云端AI处理个人数据可能需要向第三方提供的告知和用户同意。使用本地LLM时，对话数据不会离开设备，个人使用场景下既无云端存储，也无向第三方的传输。以上不构成法律意见。',
          },
          {
            q: '这些LLM应用可以使用日语语音输入吗？',
            a: '可以。通过Android键盘（Google日语输入法或Gboard）进行的标准日语语音输入在三种方式中均可使用。用日语说话或输入，模型的处理方式相同。无需特别的语音设置。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[在Xperia上运行本地LLM](/zh/prompt-bites/run-local-llm-on-xperia-japan)',
          '[适合4 GB显存的最佳Ollama模型](/zh/prompt-bites/best-ollama-models-4gb-vram)',
          '[Android最佳本地LLM应用](/zh/power-local-llm/best-local-llm-apps-android-2026)',
          '[最佳纯CPU LLM](/zh/local-llms/best-cpu-only-llm)',
          '[MLC Chat评测](/zh/power-local-llm/mlc-chat-review)',
        ],
      },
    },
  },
  ko: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-apps-japan-android-overview-hero-ko.webp',
    title: '일본 Android에서 가장 좋은 로컬 LLM 앱은 무엇입니까?',
    seoTitle: '일본 Android 로컬 LLM 앱 추천 (2026)',
    metaDescription: 'PocketPal AI, MLC Chat, Termux + Ollama로 Android에서 일본어 LLM을 오프라인 실행합니다. Qwen3.5 4B/9B와 Llama-3-ELYZA-JP-8B를 RAM, 설치 방법, APPI 기준으로 비교합니다.',
    publishDate: '2026-05-27',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5 4B', 'Qwen3.5 9B', 'Llama-3-ELYZA-JP-8B', 'Rinna 3.6B'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Samsung Galaxy S24'],
    educationalLevel: 'Intermediate',
    audience: '일본에서 로컬 LLM을 실행하는 Android 사용자',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-apps-android'],
    is_living_page: false,
    targetKeywords: [
      '일본 Android 로컬 LLM 앱',
      'PocketPal AI GGUF',
      'Termux Ollama Android',
      'Llama-3-ELYZA-JP-8B Android',
      'Qwen3.5 Android',
      'MLC Chat APK',
    ],
    quickAnswerTop: {
      ko: {
        question: '일본 Android에서 가장 좋은 로컬 LLM 앱은 무엇입니까?',
        answer: '일본 Android에서는 Google Play에서 설치할 수 있고 Llama-3-ELYZA-JP-8B와 Qwen3.5를 포함한 모든 GGUF 모델을 불러오는 PocketPal AI가 가장 좋은 출발점입니다. MLC Chat(GitHub APK)과 Termux + Ollama는 고정된 모델 목록이나 전체 Ollama 라이브러리가 필요한 사용자에게 적합합니다.',
        bullets: [
          'PocketPal AI: Google Play 설치, 모든 GGUF 모델, 일본어 입력 완벽 지원',
          'MLC Chat: GitHub APK(Google Play 미등록), 사전 구성된 모델 목록만 지원',
          'Termux + Ollama: pkg install ollama, Qwen3.5 9B는 RAM 12 GB 이상 필요',
        ],
        updatedDate: '2026-10',
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      inLanguage: 'ko',
      headline: '일본 Android에서 가장 좋은 로컬 LLM 앱은 무엇입니까?',
      description: 'PocketPal AI, MLC Chat, Termux + Ollama로 Android에서 일본어 LLM을 오프라인 실행합니다. Qwen3.5 4B/9B와 Llama-3-ELYZA-JP-8B를 RAM, 설치 방법, APPI 기준으로 비교합니다.',
      url: 'https://www.promptquorum.com/ko/prompt-bites/best-local-llm-apps-japan-android',
      datePublished: '2026-05-27',
      dateModified: '2026-10-17',
      proficiencyLevel: 'Intermediate',
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '홈',
          item: 'https://www.promptquorum.com/ko',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Prompt Bites',
          item: 'https://www.promptquorum.com/ko/prompt-bites',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: '일본 Android에서 가장 좋은 로컬 LLM 앱은 무엇입니까?',
          item: 'https://www.promptquorum.com/ko/prompt-bites/best-local-llm-apps-japan-android',
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'PocketPal AI는 일본에서 가장 쉬운 방법입니다 — Google Play에서 설치하고 Hugging Face의 모든 GGUF 모델을 불러올 수 있으며, Llama-3-ELYZA-JP-8B(Q4_K_M 기준 4.92 GB)도 포함됩니다',
          'MLC Chat은 Google Play에 없습니다 — 데모 APK는 MLC의 GitHub에서 받으며, 사전 구성된 목록의 모델만 실행합니다',
          'Termux + Ollama는 pkg install ollama로 동작합니다. Google Play 버전은 실험적이므로 Termux는 F-Droid 또는 GitHub에서 설치하십시오',
          'Qwen3.5 4B(3.3 GB)는 6 GB 스마트폰에 적합하며, Llama-3-ELYZA-JP-8B는 약 8 GB, Qwen3.5 9B는 약 12 GB RAM이 필요합니다(PromptQuorum 추정)',
          '일본어는 같은 내용도 영어보다 토큰이 더 많이 필요한 편이어서, 영어 벤치마크보다 초당 토큰 수가 낮게 나옵니다',
        ],
      },
      body1: {
        title: '일본 Android에서 로컬 LLM을 실행하는 3가지 최고 앱',
        content: [
          '<strong>일본어를 지원하는 로컬 LLM을 오프라인으로 실행하는 Android 방법은 PocketPal AI, MLC Chat, Termux + Ollama 세 가지입니다.</strong> 모델을 내려받은 뒤에는 기기에서 처리되며 대화 텍스트가 클라우드 서버로 전송되지 않으므로, 개인 대화에서 APPI(個人情報保護法, 일본 개인정보 보호법)상 제3자 제공 문제를 피할 수 있습니다. 이는 기술적 설명이며 법률 자문이 아닙니다.',
          'PocketPal AI(MIT 라이선스)는 [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)에서 설치하며 Hugging Face의 GGUF 파일을 불러오므로, 앱 업데이트를 기다리지 않고 Llama-3-ELYZA-JP-8B와 Qwen3.5를 사용할 수 있습니다. 최신 버전: v1.20.0(2026년 10월 14일, [GitHub 릴리스](https://github.com/a-ghorbani/pocketpal-ai/releases)). 모델을 수동으로 내려받아야 합니다. 기기별 RAM 및 저장 공간 팁은 <a href="/ko/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia 로컬 LLM 가이드</a>를 참조하십시오.',
          '[MLC Chat](https://github.com/mlc-ai/mlc-llm)은 Google Play에 없습니다. MLC는 Android 앱을 [GitHub](https://llm.mlc.ai/docs/deploy/android.html)의 데모 APK로 배포하며 출처를 알 수 없는 앱 설치를 허용해야 하고, 문서는 해당 APK가 Samsung S23(Snapdragon 8 Gen 2)용으로 빌드되었다고 설명합니다. 사전 구성된 목록의 모델만 실행하며, 일본어 전용 모델은 확인되지 않았습니다. MLC LLM 저장소의 마지막 업데이트는 2026년 10월 6일이지만, Android 앱 폴더의 마지막 변경은 2026년 4월 22일입니다. [MLC Chat 리뷰](/ko/power-local-llm/mlc-chat-review)도 참조하십시오.',
          'Termux + Ollama는 터미널이 필요하지만 전체 [Ollama](https://ollama.com) 라이브러리를 사용할 수 있습니다. README가 Google Play 버전을 실험적이라고 하므로 Termux는 F-Droid 또는 GitHub에서 설치하십시오([GitHub의 Termux](https://github.com/termux/termux-app), 마지막 업데이트 2026년 9월 26일). Ollama 자체는 v0.40.6(2026년 10월 16일)이며, Termux 패키지는 0.40.3을 빌드합니다.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '일본 Android에서 가장 좋은 로컬 LLM 앱은 PocketPal AI로, Google Play에서 설치하고 Llama-3-ELYZA-JP-8B 같은 모든 GGUF 모델을 완전히 오프라인으로 실행할 수 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '로컬 LLM 앱은 인터넷 없이 스마트폰에서 AI 언어 모델을 실행합니다. 대화 데이터는 기기 안에 머물며 클라우드 서버로 전송되지 않습니다.',
          },
        ],
        columns: ['앱', '설치 방법', '일본어 모델'],
        rows: [
          { '앱': 'MLC Chat', '설치 방법': 'GitHub APK만 가능', '일본어 모델': '사전 구성된 모델 목록만' },
          {
            '앱': 'PocketPal AI',
            '설치 방법': 'Google Play / App Store',
            '일본어 모델': '모든 GGUF(예: Llama-3-ELYZA-JP-8B)',
          },
          {
            '앱': 'Termux + Ollama',
            '설치 방법': 'F-Droid/GitHub + pkg',
            '일본어 모델': 'Ollama 라이브러리(예: qwen3.5:9b)',
          },
        ],
        note: '결정 가이드: 대부분의 사용자는 PocketPal AI를 선택하십시오. MLC Chat은 GitHub APK와 고정된 모델 목록을 감수할 때만 선택하십시오. Termux + Ollama는 RAM 8 GB 이상이고 터미널에 익숙할 때 선택하십시오.',
      },
      body2: {
        title: '올바른 일본어 모델 선택 방법',
        content: [
          '<strong>세 가지 모델로 대부분의 Android 스마트폰을 커버합니다: 6 GB 기기에는 Qwen3.5 4B, 8 GB 및 12 GB 이상 기기에는 Llama-3-ELYZA-JP-8B 또는 Qwen3.5 9B입니다.</strong> RAM, 작업, 다국어 출력 필요 여부에 따라 선택하십시오. RAM 수치는 실측이 아니라 PromptQuorum의 추정치(다운로드 크기에 여유분을 더한 값)입니다.',
          'Qwen3.5 4B(qwen3.5:4b, Ollama에서 3.3–4.0 GB)는 중급 스마트폰을 위한 가벼운 선택입니다. [Ollama](https://ollama.com/library/qwen3.5)는 Qwen3.5가 201개 언어와 방언을 지원한다고 밝히지만 일본어 품질을 따로 평가하지는 않으므로, 직접 프롬프트로 테스트하십시오. RAM 6 GB를 기준으로 하십시오.',
          'Llama-3-ELYZA-JP-8B는 ELYZA가 Llama 3 8B를 일본어에 맞게 조정한 모델입니다. Q4_K_M GGUF는 4.92 GB([Hugging Face](https://huggingface.co/elyza/Llama-3-ELYZA-JP-8B-GGUF))이며 Meta Llama 3 Community License를 따릅니다. RAM 8 GB를 기준으로 하십시오. 일본어 전용 모델을 선호할 때 일본어 작문과 지시 수행에 사용하십시오. 이 페이지에서 이전에 쓰던 “ELYZA-7B”를 대체합니다.',
          'Qwen3.5 9B(qwen3.5:9b, Ollama에서 6.6–7.6 GB)는 한 대화에서 일본어, 중국어, 영어를 함께 다루는 다국어 선택지입니다. RAM 12 GB 이상을 기준으로 하며, 스마트폰에서는 느립니다. 이 페이지에서 이전에 추천하던 Qwen3 8B를 대체합니다.',
          'Rinna 3.6B(MIT 라이선스, 2023년)는 일본어 네이티브 모델이지만 공식 GGUF가 아니라 Transformers 가중치로 공개되어 있어, 커뮤니티 변환본 없이는 이 앱들에서 불러올 수 없습니다. 일본어는 같은 내용도 영어보다 토큰이 더 많이 필요한 편이어서 영어 벤치마크보다 초당 토큰 수가 낮게 나옵니다. CPU 전용 모델은 <a href="/ko/local-llms/best-cpu-only-llm" class="text-primary hover:underline">최고의 CPU 전용 LLM</a>, 전체 앱 비교는 <a href="/ko/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">Android 최고의 로컬 LLM 앱 가이드</a>를 참조하십시오.',
        ],
      },
      termux: {
        id: 'termux-ollama',
        title: 'Termux로 Android에서 Ollama 실행하는 방법',
        content: [
          '<strong>Ollama는 Android의 Termux 안에서 루팅 없이 다섯 단계로 실행됩니다.</strong> RAM 6 GB 이상의 스마트폰을 사용하십시오.',
        ],
        numberedItems: [
          {
            title: 'F-Droid 또는 GitHub에서 Termux를 설치합니다.',
            whyItMatters: 'Termux README는 Google Play 버전을 실험적이라고 하며 설치 출처를 섞지 말라고 경고합니다.',
          },
          { title: '패키지 목록을 업데이트합니다.', whyItMatters: '먼저 업데이트해야 pkg가 최신 Ollama 패키지를 설치합니다.' },
          {
            title: 'Ollama를 설치합니다.',
            whyItMatters: 'Termux는 Ollama를 패키지로 제공하므로(작성 시점 버전 0.40.3) 수동 빌드가 필요 없습니다.',
          },
          {
            title: 'Ollama 서버를 시작합니다.',
            whyItMatters: '모델을 내려받거나 실행하기 전에 서버가 백그라운드에서 실행 중이어야 합니다.',
          },
          {
            title: '모델을 내려받아 실행합니다.',
            whyItMatters: '6 GB 스마트폰에서는 qwen3.5:4b를 사용하십시오. qwen3.5:9b는 훨씬 많은 메모리가 필요합니다.',
          },
        ],
        codeBlock: 'pkg update && pkg upgrade\npkg install ollama\nollama serve &\nollama run qwen3.5:4b',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: '일본 Android LLM에 관한 빠른 답변',
        faqs: [
          {
            q: '일본어 로컬 LLM 모델은 오프라인에서도 동작합니까?',
            a: '그렇습니다. 최초 다운로드 이후 PocketPal AI, MLC Chat, Termux + Ollama 모두에서 완전히 오프라인으로 동작합니다. Llama-3-ELYZA-JP-8B는 PocketPal AI에 GGUF로 불러오고, Qwen3.5는 Termux의 Ollama로 실행합니다. 프롬프트 텍스트는 어떤 서버에도 전송되지 않습니다.',
          },
          {
            q: 'RAM 6 GB 스마트폰에서 어떤 모델이 가장 잘 동작합니까?',
            a: 'RAM 6 GB에는 Qwen3.5 4B(다운로드 3.3–4.0 GB)가 가장 적합합니다. 당사 추정으로 Llama-3-ELYZA-JP-8B(4.92 GB)는 약 8 GB, Qwen3.5 9B(6.6 GB 이상)는 약 12 GB가 필요합니다. 단계별 설정은 <a href="/ko/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia 로컬 LLM 가이드</a>를 참조하십시오.',
          },
          {
            q: 'MLC Chat을 Google Play에서 받을 수 있습니까?',
            a: '아니요. MLC는 Android 앱을 GitHub의 데모 APK로 배포하며 출처를 알 수 없는 앱 설치를 허용해야 합니다. Google Play에서 받을 수 있는 대안은 PocketPal AI입니다.',
          },
          {
            q: 'Ollama는 루팅 없이 Android에서 실행됩니까?',
            a: '그렇습니다. F-Droid 또는 GitHub에서 Termux를 설치하고 pkg install ollama를 실행한 뒤 ollama serve를 시작하고 qwen3.5:4b 같은 모델을 실행하십시오. 루팅은 필요하지 않습니다.',
          },
          {
            q: '로컬 LLM 실행 시 APPI 측면의 이점은 무엇입니까?',
            a: 'APPI(個人情報保護法)에 따르면 클라우드 AI가 개인정보를 처리하는 경우 제3자 제공 통지 및 사용자 동의가 필요할 수 있습니다. 로컬 LLM에서는 대화 데이터가 기기 밖으로 나가지 않으므로, 개인 사용에서 클라우드 저장이나 제3자 전송이 없습니다. 이는 법률 자문이 아닙니다.',
          },
          {
            q: '이 LLM 앱들에서 일본어 음성 입력을 사용할 수 있습니까?',
            a: '그렇습니다. Android 키보드(Google Japanese Input 또는 Gboard)를 통한 표준 일본어 음성 입력이 세 방법 모두에서 동작합니다. 일본어로 말하거나 입력하면 모델이 동일하게 처리합니다. 별도의 음성 설정은 필요하지 않습니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[Xperia에서 로컬 LLM 실행하기](/ko/prompt-bites/run-local-llm-on-xperia-japan)',
          '[4 GB VRAM에 최적인 Ollama 모델](/ko/prompt-bites/best-ollama-models-4gb-vram)',
          '[Android 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026)',
          '[최고의 CPU 전용 LLM](/ko/local-llms/best-cpu-only-llm)',
          '[MLC Chat 리뷰](/ko/power-local-llm/mlc-chat-review)',
        ],
      },
    },
  },
}

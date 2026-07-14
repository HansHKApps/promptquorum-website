import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware Guides',
    title: 'Can You Run a Local LLM on an Xperia Phone?',
    dateModified: '2026-06-20',
    seoTitle: 'Local LLM on Xperia Japan 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Xperia 1 VI (12 GB) handles Phi-4 Q4 and Rinna 3.6B. Xperia 5 V (8 GB) runs 3B models. Xperia 10 VI (6 GB) is limited to TinyLlama. Use MLC Chat, no root.',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: ['Rinna 3.6B', 'Phi-4', 'Qwen3 3B', 'Gemma 2B', 'TinyLlama'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Snapdragon 8 Gen 3', 'Snapdragon 8 Gen 2', 'Snapdragon 6 Gen 1'],
    educationalLevel: 'Intermediate',
    audience: 'Xperia phone owners in Japan wanting to run local LLMs',
    parentArticle: '/power-local-llm/run-ai-on-tablet-ipad-android',
    siblingBites: ['best-local-llm-apps-android', 'best-ollama-models-4gb-vram'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Can you run a local LLM on an Xperia phone?',
        answer: 'Yes — the Xperia 1 VI (12 GB RAM, Snapdragon 8 Gen 3) runs Rinna 3.6B and Phi-4 Q4 via MLC Chat. The Xperia 5 V (8 GB) handles lightweight models. The Xperia 10 VI (6 GB) is limited to TinyLlama and Gemma 2B.',
        bullets: [
          'Xperia 1 VI: 12 GB RAM — runs Phi-4 Q4, Rinna 3.6B, Qwen3-3B',
          'Xperia 5 V: 8 GB RAM — runs Rinna 3.6B and Gemma 2B Q4',
          'Xperia 10 VI: 6 GB RAM — TinyLlama and Gemma 2B only',
          'Sony does not include Galaxy AI-style features — local LLM via MLC Chat fills that gap',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Kann man auf einem Xperia ein lokales LLM ausführen?',
        answer: 'Ja — das Xperia 1 VI (12 GB RAM, Snapdragon 8 Gen 3) kann Rinna 3.6B und Phi-4 Q4 über MLC Chat ausführen. Das Xperia 5 V (8 GB) schafft leichte Modelle. Das Xperia 10 VI (6 GB) läuft nur TinyLlama und Gemma 2B.',
        bullets: [
          'Xperia 1 VI: 12 GB RAM — läuft Phi-4 Q4, Rinna 3.6B, Qwen3-3B',
          'Xperia 5 V: 8 GB RAM — läuft Rinna 3.6B und Gemma 2B Q4',
          'Xperia 10 VI: 6 GB RAM — nur TinyLlama und Gemma 2B',
          'Sony enthält keine Galaxy-AI-ähnlichen Funktionen — lokale LLM via MLC Chat schließt diese Lücke',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Peut-on exécuter un LLM local sur un Xperia ?',
        answer: 'Oui — le Xperia 1 VI (12 Go de RAM, Snapdragon 8 Gen 3) exécute Rinna 3.6B et Phi-4 Q4 via MLC Chat. Le Xperia 5 V (8 Go) gère les modèles légers. Le Xperia 10 VI (6 Go) est limité à TinyLlama et Gemma 2B.',
        bullets: [
          'Xperia 1 VI : 12 Go de RAM — exécute Phi-4 Q4, Rinna 3.6B, Qwen3-3B',
          'Xperia 5 V : 8 Go de RAM — exécute Rinna 3.6B et Gemma 2B Q4',
          'Xperia 10 VI : 6 Go de RAM — TinyLlama et Gemma 2B uniquement',
          'Sony n\'inclut pas de fonctionnalités type Galaxy AI — un LLM local via MLC Chat comble ce manque',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'XperiaでローカルLLMを動かせる？',
        answer: 'はい — Xperia 1 VI（12 GB RAM、Snapdragon 8 Gen 3）はMLC Chat経由でRinna 3.6BとPhi-4 Q4を実行できます。Xperia 5 V（8 GB）は軽量モデルに対応。Xperia 10 VI（6 GB）はTinyLlamaとGemma 2Bのみ動作します。',
        bullets: [
          'Xperia 1 VI：12 GB RAM — Phi-4 Q4、Rinna 3.6B、Qwen3-3Bが動作',
          'Xperia 5 V：8 GB RAM — Rinna 3.6BとGemma 2B Q4に対応',
          'Xperia 10 VI：6 GB RAM — TinyLlamaとGemma 2Bのみ',
          'SonyはGalaxy AIのような機能を搭載していない — MLC Chat経由のローカルLLMがその代替となる',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'Xperia手机能运行本地LLM吗？',
        answer: '可以——Xperia 1 VI（12 GB内存，Snapdragon 8 Gen 3）可通过MLC Chat运行Rinna 3.6B和Phi-4 Q4。Xperia 5 V（8 GB）支持轻量模型。Xperia 10 VI（6 GB）仅限TinyLlama和Gemma 2B。',
        bullets: [
          'Xperia 1 VI：12 GB内存——可运行Phi-4 Q4、Rinna 3.6B、Qwen3-3B',
          'Xperia 5 V：8 GB内存——可运行Rinna 3.6B和Gemma 2B Q4',
          'Xperia 10 VI：6 GB内存——仅限TinyLlama和Gemma 2B',
          'Sony不包含Galaxy AI类功能——通过MLC Chat运行本地LLM填补了这一空缺',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Xperia 1 VI (12 GB RAM, Snapdragon 8 Gen 3) is the only Xperia that reliably runs 7B+ models — use it for Phi-4 Q4 and Qwen3-3B',
          'Xperia 5 V (8 GB RAM) handles 3B models including Rinna 3.6B and Gemma 2B Q4 without issues',
          'Xperia 10 VI (6 GB RAM) is limited to sub-2B models — TinyLlama 1.1B and Gemma 2B are the practical ceiling',
          'Sony does not ship on-device AI features — MLC Chat or PocketPal AI from Google Play is the practical replacement',
          'Battery drain is approximately 15% per hour with screen on during continuous inference on the Xperia 1 VI; use airplane mode to reduce drain',
        ],
      },
      body1: {
        title: 'Xperia Model Compatibility',
        content: [
          '<strong>As of May 2026, three current Xperia models support local LLM inference, with capability determined entirely by RAM and chipset — the Xperia 1 VI leads, the Xperia 5 V covers the mid-range, and the Xperia 10 VI is limited to the smallest models.</strong> Sony does not pre-install on-device AI assistants (unlike Samsung Galaxy AI), so local LLM apps are the only route to private, offline AI on Xperia devices.',
          'The Xperia 1 VI is the only Xperia capable of running quantized 7B+ models. Its Snapdragon 8 Gen 3 SoC and 12 GB of LPDDR5X RAM give it headroom for Phi-4 Q4 (14B quantized to ~8 GB) and Qwen3-3B alongside day-to-day app usage. The Xperia 5 V with Snapdragon 8 Gen 2 and 8 GB RAM is the sweet spot for 3B models — Rinna 3.6B and Gemma 2B Q4 run reliably. The Xperia 10 VI uses the mid-range Snapdragon 6 Gen 1 with only 6 GB RAM; at this tier, stick to TinyLlama 1.1B or Gemma 2B — larger models will crash or OOM during loading.',
          'Use Xperia 1 VI for 7B+ models; use Xperia 5 V for 3B models; stick to sub-2B models on Xperia 10 VI.',
          'For app setup instructions, see our <a href="/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">Android LLM apps for Japan guide</a>.',
        ],
        columns: ['Xperia Model', 'RAM / Chip', 'Recommended Models'],
        rows: [
          { 'Xperia Model': 'Xperia 1 VI', 'RAM / Chip': '12 GB / Snapdragon 8 Gen 3', 'Recommended Models': 'Phi-4 Q4, Rinna 3.6B, Qwen3-3B' },
          { 'Xperia Model': 'Xperia 5 V', 'RAM / Chip': '8 GB / Snapdragon 8 Gen 2', 'Recommended Models': 'Rinna 3.6B, Gemma 2B Q4' },
          { 'Xperia Model': 'Xperia 10 VI', 'RAM / Chip': '6 GB / Snapdragon 6 Gen 1', 'Recommended Models': 'TinyLlama 1.1B, Gemma 2B only' },
        ],
      },
      body2: {
        title: '3-Step Setup Guide',
        content: [
          '<strong>Installing a local LLM on an Xperia takes three steps and under 30 minutes, including model download time.</strong> The process requires no root access, no developer mode, and no special Xperia settings — it runs entirely through standard Android app and file management.',
          'Step 1: Install MLC Chat or PocketPal AI from Google Play (Google Playストア). Both are free and available in Japan without a VPN or region workaround. MLC Chat is faster to first inference; PocketPal AI supports a broader range of GGUF model files from Hugging Face.',
          'Step 2: Download your model over Wi-Fi. Model download sizes vary: TinyLlama 1.1B Q4 is approximately 0.7 GB, Rinna 3.6B Q4 is approximately 2 GB, Gemma 2B Q4 is approximately 1.5 GB, and Phi-4 Q4 is approximately 8 GB. Use a 128 GB or larger storage Xperia for Phi-4. Close all other apps before loading Phi-4 Q4 — it uses approximately 8 GB of the Xperia 1 VI\'s 12 GB RAM and requires maximum available memory to load without crashing. Do not download over mobile data — the files are large and your carrier plan will not thank you.',
          'Step 3: Switch your keyboard to Japanese input. Gboard with Japanese enabled or ATOK (popular in Japan for business use) both work directly with MLC Chat and PocketPal AI — you type in Japanese, the model responds in Japanese. No extra configuration is required for Japanese language input to function.',
          'Battery note: expect approximately 15% battery drain per hour with screen on during continuous inference on the Xperia 1 VI. Enable airplane mode (機内モード) during inference sessions to reduce background radio drain and extend session time. Power-saving mode further reduces drain but may throttle the Snapdragon\'s AI cores and slow inference speed.',
          'Sony Xperia AI Agent (currently in beta) connects to cloud AI services and does not run on-device. Local LLM via MLC Chat is the only way to run AI inference entirely on the Xperia without sending data to external servers — an important distinction for privacy under Japan\'s Act on the Protection of Personal Information (APPI / 個人情報保護法). For a full guide to Android LLM setup including hardware requirements, see <a href="/power-local-llm/run-ai-on-tablet-ipad-android" class="text-primary hover:underline">running AI on tablets and Android phones</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Xperia LLMs',
        faqs: [
          {
            q: 'Does local LLM work on the Xperia 10 VI?',
            a: 'TinyLlama 1.1B and Gemma 2B Q4 only. The Xperia 10 VI has 6 GB RAM and a Snapdragon 6 Gen 1 — larger models crash or produce out-of-memory errors during loading. Do not attempt Rinna 3.6B or any 7B model on the Xperia 10 VI.',
          },
          {
            q: 'How much storage does a model need on Xperia?',
            a: 'Rinna 3.6B Q4 requires approximately 2 GB of storage. Phi-4 Q4 requires approximately 8 GB. TinyLlama 1.1B Q4 requires approximately 0.7 GB. Use a 128 GB or larger Xperia for Phi-4; 64 GB storage is sufficient for Rinna 3.6B and Gemma 2B.',
          },
          {
            q: 'How much battery does running an LLM drain on Xperia?',
            a: 'Approximately 15% battery per hour with screen on during continuous inference on the Xperia 1 VI at full performance. On the Xperia 5 V with Rinna 3.6B, expect similar drain. Enable airplane mode (機内モード) to cut background radio usage and reduce total drain by 2–4% per hour.',
          },
          {
            q: 'Does it work offline on Xperia?',
            a: 'Yes — fully offline after the initial model download. MLC Chat and PocketPal AI do not require an internet connection, an API key, or a Sony account once the model is stored on the device. No data leaves your phone during inference.',
          },
          {
            q: 'What is the difference between Sony Xperia AI Agent and a local LLM?',
            a: 'Sony Xperia AI Agent (beta) routes requests through cloud AI servers — your prompts and responses pass through Sony\'s or a third-party\'s infrastructure. A local LLM running via MLC Chat executes entirely on the Xperia\'s Snapdragon chip — data never leaves the device. This on-device approach is the privacy-compliant alternative for users who handle sensitive data under APPI (個人情報保護法).',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Hardware Guides',
    title: 'Kann man auf einem Xperia ein lokales LLM ausführen?',
    seoTitle: 'LLM auf Xperia Japan 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Xperia 1 VI (12 GB): Phi-4 Q4 + Rinna 3.6B via MLC Chat. Xperia 5 V (8 GB): 3B-Modelle. Xperia 10 VI (6 GB): nur TinyLlama. Kein Root, kein Developer Mode.',
    publishDate: '2026-05-27',
    dateModified: '2026-06-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    quickAnswerTop: {
      de: {
        question: 'Kann man auf einem Xperia ein lokales LLM ausführen?',
        answer: 'Ja — das Xperia 1 VI (12 GB RAM, Snapdragon 8 Gen 3) kann Rinna 3.6B und Phi-4 Q4 über MLC Chat ausführen. Das Xperia 5 V (8 GB) schafft leichte Modelle. Das Xperia 10 VI (6 GB) läuft nur TinyLlama und Gemma 2B.',
        bullets: [
          'Xperia 1 VI: 12 GB RAM — läuft Phi-4 Q4, Rinna 3.6B, Qwen3-3B',
          'Xperia 5 V: 8 GB RAM — läuft Rinna 3.6B und Gemma 2B Q4',
          'Xperia 10 VI: 6 GB RAM — nur TinyLlama und Gemma 2B',
          'Sony enthält keine Galaxy-AI-ähnlichen Funktionen — lokale LLM via MLC Chat schließt diese Lücke',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Das Xperia 1 VI (12 GB RAM, Snapdragon 8 Gen 3) ist das einzige Xperia, das zuverlässig 7B+-Modelle ausführt — ideal für Phi-4 Q4 und Qwen3-3B',
          'Das Xperia 5 V (8 GB RAM) unterstützt 3B-Modelle wie Rinna 3.6B und Gemma 2B Q4 problemlos',
          'Das Xperia 10 VI (6 GB RAM) ist auf Sub-2B-Modelle beschränkt — TinyLlama 1.1B und Gemma 2B sind die praktische Obergrenze',
          'Sony liefert keine On-Device-KI-Funktionen — MLC Chat oder PocketPal AI aus dem Google Play Store ist der praktische Ersatz',
          'Akkuverbrauch liegt bei etwa 15 % pro Stunde bei aktiviertem Bildschirm und kontinuierlicher Inferenz auf dem Xperia 1 VI; Flugmodus aktivieren reduziert den Verbrauch',
        ],
      },
      body1: {
        title: 'Kompatibilität nach Xperia-Modell',
        content: [
          '<strong>Stand Mai 2026 unterstützen drei aktuelle Xperia-Modelle lokale LLM-Inferenz, wobei die Leistungsfähigkeit vollständig durch RAM und Chipsatz bestimmt wird — das Xperia 1 VI führt, das Xperia 5 V deckt den mittleren Bereich ab und das Xperia 10 VI ist auf kleinste Modelle begrenzt.</strong> Sony installiert keine On-Device-KI-Assistenten vor (anders als Samsung Galaxy AI), daher sind lokale LLM-Apps der einzige Weg zu privatem, offlinenem KI auf Xperia-Geräten.',
          'Das Xperia 1 VI ist das einzige Xperia, das quantisierte 7B+-Modelle ausführen kann. Sein Snapdragon 8 Gen 3 SoC und 12 GB LPDDR5X RAM geben ihm Spielraum für Phi-4 Q4 (14B quantisiert auf ~8 GB) und Qwen3-3B neben dem normalen App-Betrieb. Das Xperia 5 V mit Snapdragon 8 Gen 2 und 8 GB RAM ist der Sweet Spot für 3B-Modelle — Rinna 3.6B und Gemma 2B Q4 laufen zuverlässig. Das Xperia 10 VI verwendet den Mid-Range Snapdragon 6 Gen 1 mit nur 6 GB RAM; auf dieser Stufe bei TinyLlama 1.1B oder Gemma 2B bleiben — größere Modelle werden beim Laden abstürzen oder OOM-Fehler verursachen.',
          'Xperia 1 VI für 7B+-Modelle verwenden; Xperia 5 V für 3B-Modelle; auf dem Xperia 10 VI bei Sub-2B-Modellen bleiben.',
          'Anleitungen zur App-Einrichtung finden Sie in unserem <a href="/de/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">Android-LLM-Apps für Japan Guide</a>.',
        ],
        columns: ['Xperia-Modell', 'RAM / Chip', 'Empfohlene Modelle'],
        rows: [
          { 'Xperia-Modell': 'Xperia 1 VI', 'RAM / Chip': '12 GB / Snapdragon 8 Gen 3', 'Empfohlene Modelle': 'Phi-4 Q4, Rinna 3.6B, Qwen3-3B' },
          { 'Xperia-Modell': 'Xperia 5 V', 'RAM / Chip': '8 GB / Snapdragon 8 Gen 2', 'Empfohlene Modelle': 'Rinna 3.6B, Gemma 2B Q4' },
          { 'Xperia-Modell': 'Xperia 10 VI', 'RAM / Chip': '6 GB / Snapdragon 6 Gen 1', 'Empfohlene Modelle': 'TinyLlama 1.1B, Gemma 2B nur' },
        ],
      },
      body2: {
        title: 'Einrichtung in 3 Schritten',
        content: [
          '<strong>Die Installation eines lokalen LLM auf einem Xperia dauert drei Schritte und unter 30 Minuten einschließlich Modell-Download-Zeit.</strong> Der Prozess erfordert keinen Root-Zugang, keinen Entwicklermodus und keine speziellen Xperia-Einstellungen — er läuft vollständig über Standard-Android-App- und Dateiverwaltung.',
          'Schritt 1: MLC Chat oder PocketPal AI aus dem Google Play Store installieren. Beide sind kostenlos und in Japan ohne VPN oder Region-Umgehung verfügbar. MLC Chat ist schneller bis zur ersten Inferenz; PocketPal AI unterstützt eine breitere Palette von GGUF-Modelldateien von Hugging Face.',
          'Schritt 2: Modell über WLAN herunterladen. TinyLlama 1.1B Q4 ist ca. 0,7 GB, Rinna 3.6B Q4 ca. 2 GB, Gemma 2B Q4 ca. 1,5 GB und Phi-4 Q4 ca. 8 GB. Für Phi-4 ein Xperia mit 128 GB oder mehr Speicher verwenden. Vor dem Start von Phi-4 Q4 alle anderen Apps schließen — es benötigt ca. 8 GB des verfügbaren 12 GB RAMs und braucht maximalen Arbeitsspeicher zum Laden. Download über mobile Daten vermeiden.',
          'Schritt 3: Tastatur auf japanische Eingabe umstellen. Gboard mit aktiviertem Japanisch oder ATOK funktionieren beide direkt mit MLC Chat und PocketPal AI — man tippt auf Japanisch, das Modell antwortet auf Japanisch. Keine zusätzliche Konfiguration für japanische Spracheingabe erforderlich.',
          'Akkuhinweis: Beim Xperia 1 VI ist mit ca. 15 % Akkuverbrauch pro Stunde bei aktiviertem Display und kontinuierlicher Inferenz zu rechnen. Flugmodus aktivieren reduziert den Hintergrundradio-Verbrauch. Sony Xperia AI Agent (aktuell in der Beta) verbindet sich mit Cloud-KI-Diensten — für vollständige On-Device-Verarbeitung ohne Datenweitergabe ist MLC Chat der einzige Weg. Vollständige Anleitung: <a href="/de/power-local-llm/run-ai-on-tablet-ipad-android" class="text-primary hover:underline">KI auf Tablets und Android-Geräten ausführen</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Xperia-LLMs',
        faqs: [
          {
            q: 'Funktioniert ein lokales LLM auf dem Xperia 10 VI?',
            a: 'Nur TinyLlama 1.1B und Gemma 2B Q4. Das Xperia 10 VI hat 6 GB RAM und einen Snapdragon 6 Gen 1 — größere Modelle stürzen ab oder erzeugen Out-of-Memory-Fehler beim Laden. Rinna 3.6B oder 7B-Modelle auf dem Xperia 10 VI nicht versuchen.',
          },
          {
            q: 'Wie viel Speicherplatz benötigt ein Modell auf dem Xperia?',
            a: 'Rinna 3.6B Q4 benötigt ca. 2 GB Speicher. Phi-4 Q4 ca. 8 GB. TinyLlama 1.1B Q4 ca. 0,7 GB. Für Phi-4 ein Xperia mit 128 GB oder mehr verwenden; 64 GB Speicher reichen für Rinna 3.6B und Gemma 2B.',
          },
          {
            q: 'Wie viel Akku verbraucht ein LLM auf dem Xperia?',
            a: 'Etwa 15 % Akku pro Stunde bei aktiviertem Bildschirm und kontinuierlicher Inferenz auf dem Xperia 1 VI bei voller Leistung. Auf dem Xperia 5 V mit Rinna 3.6B ähnlicher Verbrauch zu erwarten. Flugmodus aktivieren reduziert den Hintergrundradio-Verbrauch um 2–4 % pro Stunde.',
          },
          {
            q: 'Funktioniert es offline auf dem Xperia?',
            a: 'Ja — vollständig offline nach dem ersten Modell-Download. MLC Chat und PocketPal AI benötigen weder Internetverbindung, noch API-Schlüssel, noch ein Sony-Konto, sobald das Modell auf dem Gerät gespeichert ist. Während der Inferenz verlässt kein Datum das Gerät.',
          },
          {
            q: 'Was ist der Unterschied zwischen Sony Xperia AI Agent und einem lokalen LLM?',
            a: 'Sony Xperia AI Agent (Beta) leitet Anfragen über Cloud-KI-Server weiter — Ihre Prompts und Antworten passieren Sonys oder die Infrastruktur eines Drittanbieters. Ein lokales LLM über MLC Chat wird vollständig auf dem Snapdragon-Chip des Xperia ausgeführt — Daten verlassen das Gerät nie. Dieser On-Device-Ansatz ist die datenschutzkonforme Alternative für Nutzer, die sensible Daten gemäß DSGVO verarbeiten.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware Guides',
    title: 'Peut-on exécuter un LLM local sur un Xperia ?',
    seoTitle: 'LLM sur Xperia Japon 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Xperia 1 VI (12 Go) : Phi-4 Q4, Rinna 3.6B. Xperia 5 V (8 Go) : Rinna 3.6B. Xperia 10 VI (6 Go) : TinyLlama. Tout via MLC Chat, aucun root requis en 2026.',
    publishDate: '2026-05-27',
    dateModified: '2026-06-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    quickAnswerTop: {
      fr: {
        question: 'Peut-on exécuter un LLM local sur un Xperia ?',
        answer: 'Oui — le Xperia 1 VI (12 Go de RAM, Snapdragon 8 Gen 3) exécute Rinna 3.6B et Phi-4 Q4 via MLC Chat. Le Xperia 5 V (8 Go) gère les modèles légers. Le Xperia 10 VI (6 Go) est limité à TinyLlama et Gemma 2B.',
        bullets: [
          'Xperia 1 VI : 12 Go de RAM — exécute Phi-4 Q4, Rinna 3.6B, Qwen3-3B',
          'Xperia 5 V : 8 Go de RAM — exécute Rinna 3.6B et Gemma 2B Q4',
          'Xperia 10 VI : 6 Go de RAM — TinyLlama et Gemma 2B uniquement',
          'Sony n\'inclut pas de fonctionnalités type Galaxy AI — un LLM local via MLC Chat comble ce manque',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Le Xperia 1 VI (12 Go de RAM, Snapdragon 8 Gen 3) est le seul Xperia qui exécute de manière fiable les modèles 7B+ — utilisez-le pour Phi-4 Q4 et Qwen3-3B',
          'Le Xperia 5 V (8 Go de RAM) gère les modèles 3B dont Rinna 3.6B et Gemma 2B Q4 sans problème',
          'Le Xperia 10 VI (6 Go de RAM) est limité aux modèles sub-2B — TinyLlama 1.1B et Gemma 2B sont le plafond pratique',
          'Sony ne fournit pas de fonctionnalités IA embarquées — MLC Chat ou PocketPal AI depuis Google Play est le remplacement pratique',
          'La consommation de batterie est d\'environ 15 % par heure écran allumé en inférence continue sur le Xperia 1 VI ; le mode avion réduit la consommation',
        ],
      },
      body1: {
        title: 'Compatibilité par modèle Xperia',
        content: [
          '<strong>En mai 2026, trois modèles Xperia actuels prennent en charge l\'inférence LLM locale, la capacité étant entièrement déterminée par la RAM et le chipset — le Xperia 1 VI est en tête, le Xperia 5 V couvre le milieu de gamme et le Xperia 10 VI est limité aux plus petits modèles.</strong> Sony ne préinstalle pas d\'assistants IA embarqués (contrairement à Samsung Galaxy AI), donc les applications LLM locales sont la seule voie vers une IA privée et hors ligne sur les appareils Xperia.',
          'Le Xperia 1 VI est le seul Xperia capable d\'exécuter des modèles 7B+ quantifiés. Son SoC Snapdragon 8 Gen 3 et ses 12 Go de RAM LPDDR5X lui donnent de la marge pour Phi-4 Q4 (14B quantifié à ~8 Go) et Qwen3-3B en plus de l\'utilisation normale des applications. Le Xperia 5 V avec Snapdragon 8 Gen 2 et 8 Go de RAM est le point optimal pour les modèles 3B — Rinna 3.6B et Gemma 2B Q4 fonctionnent de manière fiable. Le Xperia 10 VI utilise le Snapdragon 6 Gen 1 milieu de gamme avec seulement 6 Go de RAM ; à ce niveau, restez sur TinyLlama 1.1B ou Gemma 2B — les modèles plus grands se bloqueront lors du chargement.',
          'Utilisez le Xperia 1 VI pour les modèles 7B+ ; le Xperia 5 V pour les modèles 3B ; restez sur les modèles sub-2B sur le Xperia 10 VI.',
          'Pour les instructions d\'installation des applications, consultez notre <a href="/fr/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">guide des applications LLM Android pour le Japon</a>.',
        ],
        columns: ['Modèle Xperia', 'RAM / Puce', 'Modèles recommandés'],
        rows: [
          { 'Modèle Xperia': 'Xperia 1 VI', 'RAM / Puce': '12 Go / Snapdragon 8 Gen 3', 'Modèles recommandés': 'Phi-4 Q4, Rinna 3.6B, Qwen3-3B' },
          { 'Modèle Xperia': 'Xperia 5 V', 'RAM / Puce': '8 Go / Snapdragon 8 Gen 2', 'Modèles recommandés': 'Rinna 3.6B, Gemma 2B Q4' },
          { 'Modèle Xperia': 'Xperia 10 VI', 'RAM / Puce': '6 Go / Snapdragon 6 Gen 1', 'Modèles recommandés': 'TinyLlama 1.1B, Gemma 2B uniquement' },
        ],
      },
      body2: {
        title: 'Guide d\'installation en 3 étapes',
        content: [
          '<strong>L\'installation d\'un LLM local sur un Xperia prend trois étapes et moins de 30 minutes, temps de téléchargement du modèle inclus.</strong> Le processus ne nécessite pas d\'accès root, ni de mode développeur, ni de paramètres Xperia spéciaux — il fonctionne entièrement via la gestion standard des applications et des fichiers Android.',
          'Étape 1 : Installer MLC Chat ou PocketPal AI depuis Google Play (Google Playストア). Les deux sont gratuits et disponibles au Japon sans VPN ni contournement de région. MLC Chat est plus rapide jusqu\'à la première inférence ; PocketPal AI prend en charge une gamme plus large de fichiers de modèles GGUF depuis Hugging Face.',
          'Étape 2 : Télécharger votre modèle en Wi-Fi. TinyLlama 1.1B Q4 fait environ 0,7 Go, Rinna 3.6B Q4 environ 2 Go, Gemma 2B Q4 environ 1,5 Go et Phi-4 Q4 environ 8 Go. Utilisez un Xperia de 128 Go ou plus pour Phi-4. Fermez toutes les autres applications avant de charger Phi-4 Q4 — il utilise environ 8 Go des 12 Go de RAM disponibles et nécessite le maximum de mémoire pour se charger sans plantage. Évitez le téléchargement via les données mobiles — les fichiers sont volumineux.',
          'Étape 3 : Basculer le clavier en saisie japonaise. Gboard avec le japonais activé ou ATOK (populaire au Japon pour usage professionnel) fonctionnent tous deux directement avec MLC Chat et PocketPal AI — vous tapez en japonais, le modèle répond en japonais. Aucune configuration supplémentaire n\'est nécessaire pour la saisie en japonais.',
          'Note batterie : attendez-vous à environ 15 % de consommation par heure écran allumé en inférence continue sur le Xperia 1 VI. Activez le mode avion pour réduire la consommation radio en arrière-plan. Sony Xperia AI Agent (actuellement en bêta) se connecte à des services d\'IA cloud — pour un traitement entièrement embarqué sans transmission de données, MLC Chat est la seule solution. Guide complet : <a href="/fr/power-local-llm/run-ai-on-tablet-ipad-android" class="text-primary hover:underline">exécuter l\'IA sur tablettes et appareils Android</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les LLM Xperia',
        faqs: [
          {
            q: 'Un LLM local fonctionne-t-il sur le Xperia 10 VI ?',
            a: 'TinyLlama 1.1B et Gemma 2B Q4 uniquement. Le Xperia 10 VI a 6 Go de RAM et un Snapdragon 6 Gen 1 — les modèles plus grands se bloquent ou produisent des erreurs de mémoire insuffisante lors du chargement. Ne tentez pas Rinna 3.6B ni aucun modèle 7B sur le Xperia 10 VI.',
          },
          {
            q: 'Combien de stockage un modèle nécessite-t-il sur Xperia ?',
            a: 'Rinna 3.6B Q4 nécessite environ 2 Go de stockage. Phi-4 Q4 environ 8 Go. TinyLlama 1.1B Q4 environ 0,7 Go. Utilisez un Xperia de 128 Go ou plus pour Phi-4 ; 64 Go suffisent pour Rinna 3.6B et Gemma 2B.',
          },
          {
            q: 'Combien de batterie consomme un LLM sur Xperia ?',
            a: 'Environ 15 % de batterie par heure écran allumé en inférence continue sur le Xperia 1 VI à pleine performance. Sur le Xperia 5 V avec Rinna 3.6B, attendez une consommation similaire. Activer le mode avion réduit la consommation radio en arrière-plan de 2 à 4 % par heure.',
          },
          {
            q: 'Cela fonctionne-t-il hors ligne sur Xperia ?',
            a: 'Oui — entièrement hors ligne après le téléchargement initial du modèle. MLC Chat et PocketPal AI ne nécessitent ni connexion internet, ni clé API, ni compte Sony une fois le modèle stocké sur l\'appareil. Aucune donnée ne quitte votre téléphone lors de l\'inférence.',
          },
          {
            q: 'Quelle est la différence entre Sony Xperia AI Agent et un LLM local ?',
            a: 'Sony Xperia AI Agent (bêta) achemine les requêtes via des serveurs d\'IA cloud — vos prompts et réponses transitent par l\'infrastructure de Sony ou d\'un tiers. Un LLM local via MLC Chat s\'exécute entièrement sur la puce Snapdragon du Xperia — les données ne quittent jamais l\'appareil. Cette approche embarquée est l\'alternative respectueuse de la vie privée pour les utilisateurs qui traitent des données sensibles sous le RGPD.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware Guides',
    title: 'XperiaでローカルLLMを動かせる？',
    seoTitle: 'Xperia ローカルLLM 日本 2026年版 | Prompt Bites | PromptQuorum',
    metaDescription: 'はい — Xperia 1 VI（12 GB RAM、Snapdragon 8 Gen 3）はMLC Chat経由でPhi-4 Q4とRinna 3.6Bを実行できます。Xperia 5 Vは軽量モデルに対応。Xperia 10 VIはTinyLlamaとGemma 2Bのみ。',
    publishDate: '2026-05-27',
    dateModified: '2026-06-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    quickAnswerTop: {
      ja: {
        question: 'XperiaでローカルLLMを動かせる？',
        answer: 'はい — Xperia 1 VI（12 GB RAM、Snapdragon 8 Gen 3）はMLC Chat経由でRinna 3.6BとPhi-4 Q4を実行できます。Xperia 5 V（8 GB）は軽量モデルに対応。Xperia 10 VI（6 GB）はTinyLlamaとGemma 2Bのみ動作します。',
        bullets: [
          'Xperia 1 VI：12 GB RAM — Phi-4 Q4、Rinna 3.6B、Qwen3-3Bが動作',
          'Xperia 5 V：8 GB RAM — Rinna 3.6BとGemma 2B Q4に対応',
          'Xperia 10 VI：6 GB RAM — TinyLlamaとGemma 2Bのみ',
          'SonyはGalaxy AIのような機能を搭載していない — MLC Chat経由のローカルLLMがその代替となる',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Xperia 1 VI（12 GB RAM、Snapdragon 8 Gen 3）は7B+モデルを確実に動かせる唯一のXperia — Phi-4 Q4とQwen3-3Bに最適',
          'Xperia 5 V（8 GB RAM）はRinna 3.6BやGemma 2B Q4を含む3Bモデルを問題なく処理できる',
          'Xperia 10 VI（6 GB RAM）はSub-2Bモデルに限定 — TinyLlama 1.1BとGemma 2Bが実用上の上限',
          'SonyはOn-Device AI機能を提供していない — Google PlayストアのMLC ChatまたはPocketPal AIが実用的な代替となる',
          'Xperia 1 VIでの画面点灯・連続推論時のバッテリー消耗は約15%/時間；機内モードで消耗を軽減できる',
        ],
      },
      body1: {
        title: 'Xperiaモデル別の対応状況',
        content: [
          '<strong>2026年5月時点で、現行の3つのXperiaモデルがローカルLLM推論に対応しており、性能はRAMとチップセットによって完全に決まります — Xperia 1 VIがトップ、Xperia 5 Vがミドルレンジをカバー、Xperia 10 VIは最小モデルに限定されます。</strong> Sonyは（Samsung Galaxy AIとは異なり）On-Device AIアシスタントを事前インストールしていないため、ローカルLLMアプリがXperiaデバイスでプライベートなオフラインAIを実現する唯一の手段です。国産ブランドのSonyが作るXperiaで、外部サーバーに依存せず日本語AIを動かせるのは、秋葉原のガジェット愛好家から企業ユーザーまで注目を集めています。',
          'Xperia 1 VIは、量子化された7B+モデルを実行できる唯一のXperiaです。Snapdragon 8 Gen 3 SoCと12 GB LPDDR5X RAMにより、通常のアプリ使用に加えてPhi-4 Q4（14Bを約8 GBに量子化）やQwen3-3Bを動かす余裕があります。Snapdragon 8 Gen 2と8 GB RAMを搭載したXperia 5 Vは3Bモデルのスイートスポット — Rinna 3.6BとGemma 2B Q4が安定して動作します。Xperia 10 VIはミッドレンジのSnapdragon 6 Gen 1と6 GB RAMのみ；このクラスではTinyLlama 1.1BまたはGemma 2Bにとどめること — 大きなモデルはロード中にクラッシュするかOOMエラーになります。',
          'Xperia 1 VIは7B+モデル、Xperia 5 Vは3Bモデル、Xperia 10 VIはSub-2Bモデルに使用してください。',
          'アプリの設定手順については、<a href="/ja/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">日本向けAndroid LLMアプリガイド</a>をご覧ください。',
        ],
        columns: ['Xperiaモデル', 'RAM / チップ', '推奨モデル'],
        rows: [
          { 'Xperiaモデル': 'Xperia 1 VI', 'RAM / チップ': '12 GB / Snapdragon 8 Gen 3', '推奨モデル': 'Phi-4 Q4、Rinna 3.6B、Qwen3-3B' },
          { 'Xperiaモデル': 'Xperia 5 V', 'RAM / チップ': '8 GB / Snapdragon 8 Gen 2', '推奨モデル': 'Rinna 3.6B、Gemma 2B Q4' },
          { 'Xperiaモデル': 'Xperia 10 VI', 'RAM / チップ': '6 GB / Snapdragon 6 Gen 1', '推奨モデル': 'TinyLlama 1.1B、Gemma 2Bのみ' },
        ],
      },
      body2: {
        title: '3ステップ導入ガイド',
        content: [
          '<strong>XperiaへのローカルLLMインストールは3ステップで、モデルダウンロード時間を含めて30分未満で完了します。</strong> ルートアクセス、開発者モード、特別なXperia設定は不要 — 標準のAndroidアプリ管理とファイル管理のみで完結します。',
          'ステップ1：Google PlayストアからMLC ChatまたはPocketPal AIをインストールします。両アプリとも無料で、VPNや地域回避なしで日本のPlayストアから入手できます。MLC Chatは最初の推論までが速く、PocketPal AIはHugging FaceからのGGUFモデルファイルを幅広くサポートしています。',
          'ステップ2：Wi-Fiでモデルをダウンロードします。モデルサイズの目安：TinyLlama 1.1B Q4は約0.7 GB、Rinna 3.6B Q4は約2 GB、Gemma 2B Q4は約1.5 GB、Phi-4 Q4は約8 GBです。Phi-4には128 GB以上のストレージを持つXperiaが必要です。Phi-4 Q4を起動する前にすべての他のアプリを閉じてください — 利用可能な12 GB RAMのうち約8 GBを使用するため、クラッシュなしにロードするには最大のメモリ空きが必要です。モバイルデータでのダウンロードは避けてください。',
          'ステップ3：キーボードを日本語入力に切り替えます。Gboard（日本語設定済み）またはATOK（日本のビジネスユーザーに人気）はいずれもMLC ChatとPocketPal AIで直接動作します — 日本語で入力するとモデルも日本語で応答します。日本語入力のための追加設定は不要です。',
          'バッテリーについて：Xperia 1 VIでの画面点灯・連続推論時は約15%/時間のバッテリー消耗を想定してください。機内モード（機内モード）を有効にするとバックグラウンドの無線通信による消耗を抑えられます。省電力モードはさらに消耗を抑えますが、SnapdragonのAIコアをスロットリングして推論速度が低下する場合があります。Sony Xperia AIエージェント（ベータ版）はクラウドAIサービスに接続します — MLC Chat経由のローカルLLMは個人情報保護法（APPI）に基づいてデータを外部送信せずにAIを使う唯一の手段です。Androidタブレット・スマートフォンでのAI実行に関する完全ガイドは<a href="/ja/power-local-llm/run-ai-on-tablet-ipad-android" class="text-primary hover:underline">タブレット・AndroidでAIを動かす</a>をご参照ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Xperia LLMに関するよくある質問',
        faqs: [
          {
            q: 'Xperia 10 VIでローカルLLMは動きますか？',
            a: 'TinyLlama 1.1BとGemma 2B Q4のみ動作します。Xperia 10 VIは6 GB RAMとSnapdragon 6 Gen 1のため、大きなモデルはロード中にクラッシュするかOut-of-Memoryエラーになります。Xperia 10 VIでRinna 3.6Bや7Bモデルは試みないでください。',
          },
          {
            q: 'Xperiaでモデルのストレージはどのくらい必要ですか？',
            a: 'Rinna 3.6B Q4は約2 GB、Phi-4 Q4は約8 GB、TinyLlama 1.1B Q4は約0.7 GBのストレージが必要です。Phi-4には128 GB以上のXperiaを使用してください；Rinna 3.6BとGemma 2Bには64 GBで十分です。',
          },
          {
            q: 'XperiaでLLMを動かすとバッテリーはどのくらい消耗しますか？',
            a: 'Xperia 1 VIでの画面点灯・フル性能・連続推論時は約15%/時間のバッテリー消耗です。Xperia 5 VでRinna 3.6Bを動かす場合も同様の消耗が見込まれます。機内モードを有効にするとバックグラウンドの無線通信消耗を2〜4%/時間削減できます。',
          },
          {
            q: 'Xperiaでオフライン動作しますか？',
            a: 'はい — 最初のモデルダウンロード後は完全オフラインで動作します。MLC ChatとPocketPal AIは、モデルがデバイスに保存されていれば、インターネット接続、APIキー、Sonyアカウントのいずれも不要です。推論中にデータがデバイス外に出ることはありません。',
          },
          {
            q: 'Sony Xperia AIエージェントとローカルLLMの違いは何ですか？',
            a: 'Sony Xperia AIエージェント（ベータ版）はクラウドAIサーバー経由でリクエストを処理します — プロンプトと回答がSonyまたはサードパーティのインフラを通過します。MLC Chat経由のローカルLLMはXperiaのSnapdragonチップ上で完全に実行されます — データは一切デバイス外に出ません。このOn-Device方式は、個人情報保護法（APPI）のもとで機密データを扱うユーザーにとってプライバシー準拠の代替手段です。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Hardware Guides',
    title: 'Você pode executar um LLM local em um telefone Xperia?',
    seoTitle: 'LLM local no Xperia Japão 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Xperia 1 VI (12 GB) executa Phi-4 Q4 e Rinna 3.6B; Xperia 5 V (8 GB) roda modelos 3B; Xperia 10 VI (6 GB), apenas TinyLlama. MLC Chat, sem root.',
    publishDate: '2026-05-27',
    dateModified: '2026-06-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    quickAnswerTop: {
      pt: {
        question: 'Você pode executar um LLM local em um telefone Xperia?',
        answer: 'Sim — o Xperia 1 VI (12 GB RAM, Snapdragon 8 Gen 3) executa Rinna 3.6B e Phi-4 Q4 via MLC Chat. O Xperia 5 V (8 GB) gerencia modelos leves. O Xperia 10 VI (6 GB) está limitado ao TinyLlama e Gemma 2B.',
        bullets: [
          'Xperia 1 VI: 12 GB RAM — executa Phi-4 Q4, Rinna 3.6B, Qwen3-3B',
          'Xperia 5 V: 8 GB RAM — executa Rinna 3.6B e Gemma 2B Q4',
          'Xperia 10 VI: 6 GB RAM — apenas TinyLlama e Gemma 2B',
          'Sony não inclui recursos no estilo Galaxy AI — um LLM local via MLC Chat preenche essa lacuna',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Xperia 1 VI (12 GB RAM, Snapdragon 8 Gen 3) é o único Xperia que executa modelos 7B+ de forma confiável — use-o para Phi-4 Q4 e Qwen3-3B',
          'Xperia 5 V (8 GB RAM) gerencia modelos 3B incluindo Rinna 3.6B e Gemma 2B Q4 sem problemas',
          'Xperia 10 VI (6 GB RAM) está limitado a modelos sub-2B — TinyLlama 1.1B e Gemma 2B são o teto prático',
          'Sony não inclui recursos de IA On-Device — MLC Chat ou PocketPal AI do Google Play é a substituição prática',
          'O consumo de bateria é de aproximadamente 15% por hora com a tela ligada durante inferência contínua no Xperia 1 VI; use o modo avião para reduzir o consumo',
        ],
      },
      body1: {
        title: 'Compatibilidade por modelo Xperia',
        content: [
          '<strong>Em maio de 2026, três modelos Xperia atuais suportam inferência LLM local, com capacidade determinada inteiramente por RAM e chipset — o Xperia 1 VI lidera, o Xperia 5 V cobre o mid-range e o Xperia 10 VI está limitado aos menores modelos.</strong> A Sony não pré-instala assistentes de IA On-Device (ao contrário do Samsung Galaxy AI), então aplicativos LLM locais são a única rota para IA privada e offline nos dispositivos Xperia.',
          'O Xperia 1 VI é o único Xperia capaz de executar modelos 7B+ quantizados. Seu SoC Snapdragon 8 Gen 3 e 12 GB de RAM LPDDR5X dão espaço para Phi-4 Q4 (14B quantizado para ~8 GB) e Qwen3-3B junto com o uso cotidiano de aplicativos. O Xperia 5 V com Snapdragon 8 Gen 2 e 8 GB de RAM é o ponto ideal para modelos 3B — Rinna 3.6B e Gemma 2B Q4 rodam de forma confiável. O Xperia 10 VI usa o Snapdragon 6 Gen 1 mid-range com apenas 6 GB de RAM; nesse nível, fique com TinyLlama 1.1B ou Gemma 2B — modelos maiores travam ou causam erros OOM durante o carregamento.',
          'Use Xperia 1 VI para modelos 7B+; Xperia 5 V para modelos 3B; fique com modelos sub-2B no Xperia 10 VI.',
          'Para instruções de configuração de aplicativos, veja nosso <a href="/pt/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">guia de aplicativos LLM Android para o Japão</a>.',
        ],
        columns: ['Modelo Xperia', 'RAM / Chip', 'Modelos recomendados'],
        rows: [
          { 'Modelo Xperia': 'Xperia 1 VI', 'RAM / Chip': '12 GB / Snapdragon 8 Gen 3', 'Modelos recomendados': 'Phi-4 Q4, Rinna 3.6B, Qwen3-3B' },
          { 'Modelo Xperia': 'Xperia 5 V', 'RAM / Chip': '8 GB / Snapdragon 8 Gen 2', 'Modelos recomendados': 'Rinna 3.6B, Gemma 2B Q4' },
          { 'Modelo Xperia': 'Xperia 10 VI', 'RAM / Chip': '6 GB / Snapdragon 6 Gen 1', 'Modelos recomendados': 'TinyLlama 1.1B, apenas Gemma 2B' },
        ],
      },
      body2: {
        title: 'Guia de configuração em 3 passos',
        content: [
          '<strong>Instalar um LLM local em um Xperia leva três passos e menos de 30 minutos, incluindo o tempo de download do modelo.</strong> O processo não requer acesso root, modo desenvolvedor ou configurações especiais do Xperia — funciona inteiramente por meio do gerenciamento padrão de aplicativos e arquivos Android.',
          'Passo 1: Instale MLC Chat ou PocketPal AI do Google Play (Google Playストア). Ambos são gratuitos e disponíveis no Japão sem VPN ou contorno de região. MLC Chat é mais rápido até a primeira inferência; PocketPal AI suporta uma gama mais ampla de arquivos de modelo GGUF do Hugging Face.',
          'Passo 2: Baixe seu modelo via Wi-Fi. Os tamanhos de download variam: TinyLlama 1.1B Q4 tem aproximadamente 0,7 GB, Rinna 3.6B Q4 tem aproximadamente 2 GB, Gemma 2B Q4 tem aproximadamente 1,5 GB e Phi-4 Q4 tem aproximadamente 8 GB. Use um Xperia com 128 GB ou mais de armazenamento para o Phi-4. Feche todos os outros aplicativos antes de carregar o Phi-4 Q4 — ele usa aproximadamente 8 GB dos 12 GB de RAM do Xperia 1 VI e requer o máximo de memória disponível para carregar sem travar. Não baixe por dados móveis — os arquivos são grandes.',
          'Passo 3: Mude o teclado para entrada em japonês. Gboard com japonês habilitado ou ATOK (popular no Japão para uso profissional) funcionam diretamente com MLC Chat e PocketPal AI — você digita em japonês, o modelo responde em japonês. Nenhuma configuração extra é necessária para que a entrada em japonês funcione.',
          'Nota sobre bateria: espere aproximadamente 15% de consumo de bateria por hora com a tela ligada durante inferência contínua no Xperia 1 VI. Habilite o modo avião (機内モード) durante sessões de inferência para reduzir o consumo de rádio em segundo plano. Sony Xperia AI Agent (atualmente em beta) conecta-se a serviços de IA em nuvem — LLM local via MLC Chat é a única forma de executar inferência de IA inteiramente no Xperia sem enviar dados para servidores externos. Para um guia completo de configuração de LLM Android, veja <a href="/pt/power-local-llm/run-ai-on-tablet-ipad-android" class="text-primary hover:underline">executar IA em tablets e telefones Android</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre LLMs no Xperia',
        faqs: [
          {
            q: 'Um LLM local funciona no Xperia 10 VI?',
            a: 'Apenas TinyLlama 1.1B e Gemma 2B Q4. O Xperia 10 VI tem 6 GB de RAM e um Snapdragon 6 Gen 1 — modelos maiores travam ou produzem erros de falta de memória durante o carregamento. Não tente Rinna 3.6B ou qualquer modelo 7B no Xperia 10 VI.',
          },
          {
            q: 'Quanto armazenamento um modelo precisa no Xperia?',
            a: 'Rinna 3.6B Q4 requer aproximadamente 2 GB de armazenamento. Phi-4 Q4 requer aproximadamente 8 GB. TinyLlama 1.1B Q4 requer aproximadamente 0,7 GB. Use um Xperia com 128 GB ou mais para o Phi-4; 64 GB de armazenamento são suficientes para Rinna 3.6B e Gemma 2B.',
          },
          {
            q: 'Quanto de bateria consome executar um LLM no Xperia?',
            a: 'Aproximadamente 15% de bateria por hora com a tela ligada durante inferência contínua no Xperia 1 VI em desempenho total. No Xperia 5 V com Rinna 3.6B, espere consumo similar. Habilite o modo avião (機内モード) para reduzir o uso de rádio em segundo plano e diminuir o consumo total em 2–4% por hora.',
          },
          {
            q: 'Funciona offline no Xperia?',
            a: 'Sim — totalmente offline após o download inicial do modelo. MLC Chat e PocketPal AI não requerem conexão à internet, chave de API ou conta Sony uma vez que o modelo esteja armazenado no dispositivo. Nenhum dado sai do seu telefone durante a inferência.',
          },
          {
            q: 'Qual é a diferença entre Sony Xperia AI Agent e um LLM local?',
            a: 'Sony Xperia AI Agent (beta) encaminha solicitações por servidores de IA em nuvem — seus prompts e respostas passam pela infraestrutura da Sony ou de terceiros. Um LLM local executado via MLC Chat opera inteiramente no chip Snapdragon do Xperia — os dados nunca saem do dispositivo. Essa abordagem On-Device é a alternativa de conformidade com privacidade para usuários que lidam com dados sensíveis sob regulamentos de proteção de dados.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Hardware Guides',
    title: '¿Puedes ejecutar un LLM local en un teléfono Xperia?',
    seoTitle: 'LLM local en Xperia Japón 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'El Xperia 1 VI (12 GB) ejecuta Phi-4 Q4 y Rinna 3.6B; el Xperia 5 V (8 GB) corre modelos 3B; el 10 VI (6 GB), solo TinyLlama. MLC Chat, sin root.',
    publishDate: '2026-05-27',
    dateModified: '2026-06-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    quickAnswerTop: {
      es: {
        question: '¿Puedes ejecutar un LLM local en un teléfono Xperia?',
        answer: 'Sí — el Xperia 1 VI (12 GB RAM, Snapdragon 8 Gen 3) ejecuta Rinna 3.6B y Phi-4 Q4 a través de MLC Chat. El Xperia 5 V (8 GB) maneja modelos ligeros. El Xperia 10 VI (6 GB) está limitado a TinyLlama y Gemma 2B.',
        bullets: [
          'Xperia 1 VI: 12 GB RAM — ejecuta Phi-4 Q4, Rinna 3.6B, Qwen3-3B',
          'Xperia 5 V: 8 GB RAM — ejecuta Rinna 3.6B y Gemma 2B Q4',
          'Xperia 10 VI: 6 GB RAM — solo TinyLlama y Gemma 2B',
          'Sony no incluye funciones similares a Galaxy AI — un LLM local a través de MLC Chat cubre esa brecha',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'El Xperia 1 VI (12 GB RAM, Snapdragon 8 Gen 3) es el único Xperia que ejecuta modelos 7B+ de forma fiable — ideal para Phi-4 Q4 y Qwen3-3B',
          'El Xperia 5 V (8 GB RAM) maneja modelos 3B como Rinna 3.6B y Gemma 2B Q4 sin problemas',
          'El Xperia 10 VI (6 GB RAM) está limitado a modelos sub-2B — TinyLlama 1.1B y Gemma 2B son el techo práctico',
          'Sony no incluye funciones de IA On-Device — MLC Chat o PocketPal AI de Google Play es el reemplazo práctico',
          'El consumo de batería es aproximadamente un 15% por hora con pantalla encendida durante inferencia continua en el Xperia 1 VI; usa el modo avión para reducir el consumo',
        ],
      },
      body1: {
        title: 'Compatibilidad por modelo Xperia',
        content: [
          '<strong>A partir de mayo de 2026, tres modelos actuales de Xperia admiten inferencia LLM local, con capacidad determinada enteramente por la RAM y el chipset — el Xperia 1 VI lidera, el Xperia 5 V cubre el rango medio y el Xperia 10 VI está limitado a los modelos más pequeños.</strong> Sony no preinstala asistentes de IA On-Device (a diferencia de Samsung Galaxy AI), por lo que las aplicaciones LLM locales son la única vía hacia una IA privada y sin conexión en dispositivos Xperia.',
          'El Xperia 1 VI es el único Xperia capaz de ejecutar modelos 7B+ cuantizados. Su SoC Snapdragon 8 Gen 3 y sus 12 GB de RAM LPDDR5X le dan margen para Phi-4 Q4 (14B cuantizado a ~8 GB) y Qwen3-3B junto con el uso habitual de aplicaciones. El Xperia 5 V con Snapdragon 8 Gen 2 y 8 GB RAM es el punto óptimo para modelos 3B — Rinna 3.6B y Gemma 2B Q4 funcionan de forma fiable. El Xperia 10 VI utiliza el Snapdragon 6 Gen 1 de gama media con solo 6 GB RAM; en este nivel, quédate con TinyLlama 1.1B o Gemma 2B — los modelos más grandes se bloquearán o producirán errores de memoria durante la carga.',
          'Usa el Xperia 1 VI para modelos 7B+; el Xperia 5 V para modelos 3B; quédate con modelos sub-2B en el Xperia 10 VI.',
          'Para instrucciones de configuración de aplicaciones, consulta nuestra <a href="/es/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">guía de aplicaciones LLM para Android en Japón</a>.',
        ],
        columns: ['Modelo Xperia', 'RAM / Chip', 'Modelos recomendados'],
        rows: [
          { 'Modelo Xperia': 'Xperia 1 VI', 'RAM / Chip': '12 GB / Snapdragon 8 Gen 3', 'Modelos recomendados': 'Phi-4 Q4, Rinna 3.6B, Qwen3-3B' },
          { 'Modelo Xperia': 'Xperia 5 V', 'RAM / Chip': '8 GB / Snapdragon 8 Gen 2', 'Modelos recomendados': 'Rinna 3.6B, Gemma 2B Q4' },
          { 'Modelo Xperia': 'Xperia 10 VI', 'RAM / Chip': '6 GB / Snapdragon 6 Gen 1', 'Modelos recomendados': 'TinyLlama 1.1B, solo Gemma 2B' },
        ],
      },
      body2: {
        title: 'Guía de configuración en 3 pasos',
        content: [
          '<strong>Instalar un LLM local en un Xperia lleva tres pasos y menos de 30 minutos, incluido el tiempo de descarga del modelo.</strong> El proceso no requiere acceso root, modo desarrollador ni configuraciones especiales de Xperia — funciona completamente a través de la gestión estándar de aplicaciones y archivos de Android.',
          'Paso 1: Instala MLC Chat o PocketPal AI desde Google Play (Google Playストア). Ambas son gratuitas y están disponibles en Japón sin VPN ni acceso alternativo por región. MLC Chat es más rápido hasta la primera inferencia; PocketPal AI admite una gama más amplia de archivos de modelos GGUF desde Hugging Face.',
          'Paso 2: Descarga tu modelo por Wi-Fi. Los tamaños de descarga varían: TinyLlama 1.1B Q4 pesa aproximadamente 0,7 GB, Rinna 3.6B Q4 aproximadamente 2 GB, Gemma 2B Q4 aproximadamente 1,5 GB y Phi-4 Q4 aproximadamente 8 GB. Usa un Xperia con 128 GB de almacenamiento o más para Phi-4. Cierra todas las demás aplicaciones antes de cargar Phi-4 Q4 — usa aproximadamente 8 GB de los 12 GB RAM disponibles en el Xperia 1 VI y necesita la máxima memoria disponible para cargar sin bloquearse. No descargues con datos móviles — los archivos son grandes.',
          'Paso 3: Cambia el teclado a entrada en japonés. Gboard con japonés habilitado o ATOK (popular en Japón para uso empresarial) funcionan directamente con MLC Chat y PocketPal AI — escribes en japonés, el modelo responde en japonés. No se requiere configuración adicional para que funcione la entrada en japonés.',
          'Nota sobre la batería: espera aproximadamente un 15% de consumo de batería por hora con pantalla encendida durante la inferencia continua en el Xperia 1 VI. Activa el modo avión (機内モード) durante las sesiones de inferencia para reducir el consumo de radio en segundo plano y ampliar el tiempo de sesión. El modo de ahorro de energía reduce más el consumo, pero puede limitar los núcleos de IA del Snapdragon y reducir la velocidad de inferencia. Sony Xperia AI Agent (actualmente en beta) se conecta a servicios de IA en la nube — un LLM local a través de MLC Chat es la única forma de ejecutar inferencia de IA completamente en el Xperia sin enviar datos a servidores externos, una distinción importante para la privacidad. Para una guía completa de configuración de LLM en Android, consulta <a href="/es/power-local-llm/run-ai-on-tablet-ipad-android" class="text-primary hover:underline">ejecutar IA en tabletas y teléfonos Android</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre LLMs en Xperia',
        faqs: [
          {
            q: '¿Funciona un LLM local en el Xperia 10 VI?',
            a: 'Solo TinyLlama 1.1B y Gemma 2B Q4. El Xperia 10 VI tiene 6 GB RAM y un Snapdragon 6 Gen 1 — los modelos más grandes se bloquean o producen errores de memoria durante la carga. No intentes Rinna 3.6B ni ningún modelo 7B en el Xperia 10 VI.',
          },
          {
            q: '¿Cuánto almacenamiento necesita un modelo en Xperia?',
            a: 'Rinna 3.6B Q4 requiere aproximadamente 2 GB de almacenamiento. Phi-4 Q4 requiere aproximadamente 8 GB. TinyLlama 1.1B Q4 requiere aproximadamente 0,7 GB. Usa un Xperia con 128 GB o más para Phi-4; 64 GB de almacenamiento son suficientes para Rinna 3.6B y Gemma 2B.',
          },
          {
            q: '¿Cuánta batería consume ejecutar un LLM en Xperia?',
            a: 'Aproximadamente un 15% de batería por hora con pantalla encendida durante la inferencia continua en el Xperia 1 VI a pleno rendimiento. En el Xperia 5 V con Rinna 3.6B, espera un consumo similar. Activa el modo avión (機内モード) para reducir el uso de radio en segundo plano y disminuir el consumo total en un 2–4% por hora.',
          },
          {
            q: '¿Funciona sin conexión en Xperia?',
            a: 'Sí — completamente sin conexión tras la descarga inicial del modelo. MLC Chat y PocketPal AI no requieren conexión a internet, clave API ni cuenta de Sony una vez que el modelo está almacenado en el dispositivo. No sale ningún dato de tu teléfono durante la inferencia.',
          },
          {
            q: '¿Cuál es la diferencia entre Sony Xperia AI Agent y un LLM local?',
            a: 'Sony Xperia AI Agent (beta) enruta las solicitudes a través de servidores de IA en la nube — tus prompts y respuestas pasan por la infraestructura de Sony o de un tercero. Un LLM local ejecutado a través de MLC Chat funciona completamente en el chip Snapdragon del Xperia — los datos nunca salen del dispositivo. Este enfoque On-Device es la alternativa que protege la privacidad para los usuarios que manejan datos sensibles bajo regulaciones de protección de datos.',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware Guides',
    title: 'Xperia手机能运行本地LLM吗？',
    seoTitle: 'Xperia本地LLM日本2026 | Prompt Bites | PromptQuorum',
    metaDescription: '可以——Xperia 1 VI（12 GB内存，Snapdragon 8 Gen 3）可通过MLC Chat运行Phi-4 Q4和Rinna 3.6B。Xperia 5 V支持轻量模型。Xperia 10 VI仅限TinyLlama和Gemma 2B。',
    publishDate: '2026-05-27',
    dateModified: '2026-06-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    quickAnswerTop: {
      zh: {
        question: 'Xperia手机能运行本地LLM吗？',
        answer: '可以——Xperia 1 VI（12 GB内存，Snapdragon 8 Gen 3）可通过MLC Chat运行Rinna 3.6B和Phi-4 Q4。Xperia 5 V（8 GB）支持轻量模型。Xperia 10 VI（6 GB）仅限TinyLlama和Gemma 2B。',
        bullets: [
          'Xperia 1 VI：12 GB内存——可运行Phi-4 Q4、Rinna 3.6B、Qwen3-3B',
          'Xperia 5 V：8 GB内存——可运行Rinna 3.6B和Gemma 2B Q4',
          'Xperia 10 VI：6 GB内存——仅限TinyLlama和Gemma 2B',
          'Sony不包含Galaxy AI类功能——通过MLC Chat运行本地LLM填补了这一空缺',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Xperia 1 VI（12 GB内存，Snapdragon 8 Gen 3）是唯一能可靠运行7B+模型的Xperia机型——适合Phi-4 Q4和Qwen3-3B',
          'Xperia 5 V（8 GB内存）可流畅处理3B模型，包括Rinna 3.6B和Gemma 2B Q4',
          'Xperia 10 VI（6 GB内存）仅限Sub-2B模型——TinyLlama 1.1B和Gemma 2B是实际上限',
          'Sony不提供On-Device AI功能——Google Play上的MLC Chat或PocketPal AI是实用的替代方案',
          'Xperia 1 VI屏幕开启持续推理时电池消耗约15%/小时；开启飞行模式可减少消耗',
        ],
      },
      body1: {
        title: 'Xperia机型兼容性',
        content: [
          '<strong>截至2026年5月，三款现行Xperia机型支持本地LLM推理，性能完全由内存和芯片组决定——Xperia 1 VI居首，Xperia 5 V覆盖中端，Xperia 10 VI仅限最小模型。</strong> Sony不预装On-Device AI助手（不同于Samsung Galaxy AI），因此本地LLM应用是在Xperia设备上实现私密离线AI的唯一途径。',
          'Xperia 1 VI是唯一能运行量化7B+模型的Xperia机型。其Snapdragon 8 Gen 3 SoC和12 GB LPDDR5X内存在日常应用运行的同时，还能处理Phi-4 Q4（14B量化至约8 GB）和Qwen3-3B。搭载Snapdragon 8 Gen 2和8 GB内存的Xperia 5 V是3B模型的最佳选择——Rinna 3.6B和Gemma 2B Q4运行稳定。Xperia 10 VI使用中端Snapdragon 6 Gen 1，内存仅6 GB；此配置下请坚持使用TinyLlama 1.1B或Gemma 2B——更大的模型加载时会崩溃或出现OOM错误。',
          '7B+模型选Xperia 1 VI；3B模型选Xperia 5 V；Xperia 10 VI上坚持使用Sub-2B模型。',
          '应用安装说明，请参阅我们的<a href="/zh/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">日本Android LLM应用指南</a>。',
        ],
        columns: ['Xperia机型', '内存 / 芯片', '推荐模型'],
        rows: [
          { 'Xperia机型': 'Xperia 1 VI', '内存 / 芯片': '12 GB / Snapdragon 8 Gen 3', '推荐模型': 'Phi-4 Q4、Rinna 3.6B、Qwen3-3B' },
          { 'Xperia机型': 'Xperia 5 V', '内存 / 芯片': '8 GB / Snapdragon 8 Gen 2', '推荐模型': 'Rinna 3.6B、Gemma 2B Q4' },
          { 'Xperia机型': 'Xperia 10 VI', '内存 / 芯片': '6 GB / Snapdragon 6 Gen 1', '推荐模型': 'TinyLlama 1.1B、Gemma 2B（仅限）' },
        ],
      },
      body2: {
        title: '3步安装指南',
        content: [
          '<strong>在Xperia上安装本地LLM只需三步，包含模型下载时间在内不超过30分钟。</strong> 整个过程无需Root权限、无需开发者模式、无需特殊Xperia设置——完全通过标准Android应用和文件管理完成。',
          '第1步：从Google Play（Google Playストア）安装MLC Chat或PocketPal AI。两款应用均免费，在日本无需VPN或地区绕过即可获取。MLC Chat到首次推理速度更快；PocketPal AI支持从Hugging Face加载更广泛的GGUF模型文件。',
          '第2步：通过Wi-Fi下载模型。模型大小参考：TinyLlama 1.1B Q4约0.7 GB，Rinna 3.6B Q4约2 GB，Gemma 2B Q4约1.5 GB，Phi-4 Q4约8 GB。Phi-4建议使用128 GB或更大存储的Xperia。加载Phi-4 Q4前关闭所有其他应用——它需要使用Xperia 1 VI 12 GB内存中的约8 GB，需要最大可用内存才能不崩溃地加载。避免使用移动数据下载——文件较大。',
          '第3步：将键盘切换为日语输入。启用了日语的Gboard或ATOK（在日本商务用户中广受欢迎）均可直接与MLC Chat和PocketPal AI配合使用——用日语输入，模型也用日语回复。日语输入功能无需额外配置。',
          '电池说明：Xperia 1 VI在屏幕开启、全性能持续推理时预计每小时消耗约15%电量。开启飞行模式可减少后台无线通信消耗。Sony Xperia AI助手（目前处于测试阶段）连接云端AI服务——MLC Chat的本地LLM是在不向外部服务器发送数据的情况下使用AI的唯一方式，对于在个人信息保护法（APPI）约束下处理敏感数据的用户尤为重要。完整指南请参阅<a href="/zh/power-local-llm/run-ai-on-tablet-ipad-android" class="text-primary hover:underline">在平板和Android设备上运行AI</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Xperia LLM快速解答',
        faqs: [
          {
            q: 'Xperia 10 VI上能运行本地LLM吗？',
            a: '仅限TinyLlama 1.1B和Gemma 2B Q4。Xperia 10 VI有6 GB内存和Snapdragon 6 Gen 1——更大的模型在加载时会崩溃或产生内存不足错误。不要在Xperia 10 VI上尝试Rinna 3.6B或任何7B模型。',
          },
          {
            q: 'Xperia上运行模型需要多少存储空间？',
            a: 'Rinna 3.6B Q4约需2 GB存储空间。Phi-4 Q4约需8 GB。TinyLlama 1.1B Q4约需0.7 GB。Phi-4建议使用128 GB或更大存储的Xperia；64 GB存储对Rinna 3.6B和Gemma 2B足够。',
          },
          {
            q: 'Xperia运行LLM会消耗多少电量？',
            a: 'Xperia 1 VI在屏幕开启、全性能持续推理时约每小时消耗15%电量。Xperia 5 V运行Rinna 3.6B时消耗相近。开启飞行模式可将后台无线通信消耗降低2至4%/小时。',
          },
          {
            q: 'Xperia上能离线使用吗？',
            a: '可以——初始模型下载后完全离线运行。MLC Chat和PocketPal AI在模型存储于设备后，既不需要网络连接，也不需要API密钥或Sony账户。推理过程中没有任何数据离开您的手机。',
          },
          {
            q: 'Sony Xperia AI助手与本地LLM有什么区别？',
            a: 'Sony Xperia AI助手（测试版）通过云端AI服务器处理请求——您的提示词和回复会经过Sony或第三方的基础设施。通过MLC Chat运行的本地LLM完全在Xperia的Snapdragon芯片上执行——数据从不离开设备。这种On-Device方式是在个人信息保护法（APPI）约束下处理敏感数据的用户保护隐私的合规替代方案。',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Hardware Guides',
    title: 'هل يمكنك تشغيل نموذج لغة محلي على هاتف ⁨Xperia⁩؟',
    seoTitle: '⁨LLM⁩ محلي على ⁨Xperia⁩ باليابان ⁨2026⁩ | ⁨PromptQuorum⁩',
    metaDescription: '⁨Xperia 1 VI⁩ (⁨12 GB RAM⁩) يشغّل ⁨Phi-4 Q4⁩ و ⁨Rinna 3.6B⁩ عبر ⁨MLC Chat. Xperia 5 V⁩ (⁨8 GB⁩): نماذج ⁨3B. Xperia 10 VI⁩ (⁨6 GB⁩): ⁨TinyLlama⁩ فقط. بدون روت.',
    publishDate: '2026-05-27',
    dateModified: '2026-06-20',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    quickAnswerTop: {
      ar: {
        question: 'هل يمكنك تشغيل نموذج لغة محلي على هاتف Xperia؟',
        answer: 'نعم — Xperia 1 VI (12 GB RAM، Snapdragon 8 Gen 3) يشغّل Rinna 3.6B و Phi-4 Q4 عبر MLC Chat. يدير Xperia 5 V (8 GB) النماذج الخفيفة. يقتصر Xperia 10 VI (6 GB) على TinyLlama و Gemma 2B.',
        bullets: [
          'Xperia 1 VI: 12 GB RAM — يشغّل Phi-4 Q4 و Rinna 3.6B و Qwen3-3B',
          'Xperia 5 V: 8 GB RAM — يشغّل Rinna 3.6B و Gemma 2B Q4',
          'Xperia 10 VI: 6 GB RAM — TinyLlama و Gemma 2B فقط',
          'لا تتضمن Sony ميزات مشابهة لـ Galaxy AI — نموذج اللغة المحلي عبر MLC Chat يملأ هذه الفجوة',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Xperia 1 VI (12 GB RAM، Snapdragon 8 Gen 3) هو الـ Xperia الوحيد الذي يشغّل نماذج 7B+ بموثوقية — مثالي لـ Phi-4 Q4 و Qwen3-3B',
          'Xperia 5 V (8 GB RAM) يدير نماذج 3B بما فيها Rinna 3.6B و Gemma 2B Q4 دون مشاكل',
          'Xperia 10 VI (6 GB RAM) مقتصر على النماذج دون 2B — TinyLlama 1.1B و Gemma 2B هما الحد العملي',
          'لا تتضمن Sony ميزات ذكاء اصطناعي على الجهاز — MLC Chat أو PocketPal AI من Google Play هو البديل العملي',
          'يبلغ استهلاك البطارية حوالي 15% في الساعة مع الشاشة المضاءة أثناء الاستنتاج المستمر على Xperia 1 VI؛ استخدم وضع الطيران لتقليل الاستهلاك',
        ],
      },
      body1: {
        title: 'التوافق حسب طراز Xperia',
        content: [
          '<strong>اعتبارًا من مايو 2026، تدعم ثلاثة طرازات Xperia حالية استنتاج نماذج اللغة المحلية، وتتحدد القدرة بالكامل وفق الذاكرة العشوائية والمعالج — يتصدر Xperia 1 VI، ويغطي Xperia 5 V الفئة المتوسطة، ويقتصر Xperia 10 VI على أصغر النماذج.</strong> لا تُثبّت Sony مسبقًا مساعدات ذكاء اصطناعي على الجهاز (خلافًا لـ Samsung Galaxy AI)، لذا فإن تطبيقات نماذج اللغة المحلية هي الطريق الوحيد للذكاء الاصطناعي الخاص وغير المتصل على أجهزة Xperia.',
          'Xperia 1 VI هو الـ Xperia الوحيد القادر على تشغيل نماذج 7B+ المُكمَّمة. تتيح معالجة Snapdragon 8 Gen 3 SoC و12 GB LPDDR5X RAM هامشًا لـ Phi-4 Q4 (14B مُكمَّم إلى ~8 GB) و Qwen3-3B إلى جانب الاستخدام اليومي للتطبيقات. Xperia 5 V بـ Snapdragon 8 Gen 2 و8 GB RAM هو النقطة المثلى لنماذج 3B — يعمل Rinna 3.6B و Gemma 2B Q4 بموثوقية. يستخدم Xperia 10 VI الفئة المتوسطة Snapdragon 6 Gen 1 مع 6 GB RAM فقط؛ في هذا المستوى التزم بـ TinyLlama 1.1B أو Gemma 2B — تتعطل النماذج الأكبر أو تُنتج أخطاء نفاد الذاكرة أثناء التحميل.',
          'استخدم Xperia 1 VI للنماذج 7B+؛ و Xperia 5 V للنماذج 3B؛ والتزم بالنماذج دون 2B على Xperia 10 VI.',
          'لتعليمات إعداد التطبيقات، راجع <a href="/ar/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">دليل تطبيقات نماذج اللغة على Android لليابان</a>.',
        ],
        columns: ['طراز Xperia', 'الذاكرة / المعالج', 'النماذج الموصى بها'],
        rows: [
          { 'طراز Xperia': 'Xperia 1 VI', 'الذاكرة / المعالج': '12 GB / Snapdragon 8 Gen 3', 'النماذج الموصى بها': 'Phi-4 Q4، Rinna 3.6B، Qwen3-3B' },
          { 'طراز Xperia': 'Xperia 5 V', 'الذاكرة / المعالج': '8 GB / Snapdragon 8 Gen 2', 'النماذج الموصى بها': 'Rinna 3.6B، Gemma 2B Q4' },
          { 'طراز Xperia': 'Xperia 10 VI', 'الذاكرة / المعالج': '6 GB / Snapdragon 6 Gen 1', 'النماذج الموصى بها': 'TinyLlama 1.1B، Gemma 2B فقط' },
        ],
      },
      body2: {
        title: 'دليل الإعداد في 3 خطوات',
        content: [
          '<strong>يستغرق تثبيت نموذج لغة محلي على Xperia ثلاث خطوات وأقل من 30 دقيقة بما فيها وقت تنزيل النموذج.</strong> لا تتطلب العملية صلاحيات root أو وضع المطور أو إعدادات Xperia خاصة — تتم بالكامل عبر إدارة التطبيقات والملفات القياسية في Android.',
          'الخطوة 1: ثبّت MLC Chat أو PocketPal AI من Google Play (Google Playストア). كلاهما مجاني ومتاح في اليابان بدون VPN أو تجاوز المنطقة. MLC Chat أسرع حتى الاستنتاج الأول؛ PocketPal AI يدعم نطاقًا أوسع من ملفات النماذج GGUF من Hugging Face.',
          'الخطوة 2: نزّل نموذجك عبر Wi-Fi. تتفاوت أحجام التنزيل: TinyLlama 1.1B Q4 حوالي 0.7 GB، Rinna 3.6B Q4 حوالي 2 GB، Gemma 2B Q4 حوالي 1.5 GB، Phi-4 Q4 حوالي 8 GB. استخدم Xperia بسعة تخزين 128 GB أو أكثر لـ Phi-4. أغلق جميع التطبيقات الأخرى قبل تحميل Phi-4 Q4 — يستخدم نحو 8 GB من الـ 12 GB RAM المتاحة في Xperia 1 VI ويحتاج إلى أقصى ذاكرة متاحة للتحميل دون تعطل. تجنب التنزيل عبر بيانات الهاتف — الملفات ضخمة.',
          'الخطوة 3: بدّل لوحة المفاتيح إلى الإدخال باليابانية. Gboard مع تفعيل اليابانية أو ATOK (الشائع في اليابان للاستخدام المهني) يعملان مباشرةً مع MLC Chat و PocketPal AI — تكتب باليابانية والنموذج يرد باليابانية. لا يلزم إعداد إضافي لتعمل الإدخال بالحروف اليابانية. عند الاستنتاج يكون وضع الطيران (機内モード) مفيدًا لتوفير البطارية. يتصل Sony Xperia AI Agent (حاليًا في مرحلة تجريبية) بخدمات ذكاء اصطناعي سحابية — نموذج اللغة المحلي عبر MLC Chat هو الطريقة الوحيدة لتشغيل استنتاج الذكاء الاصطناعي بالكامل على Xperia دون إرسال بيانات إلى خوادم خارجية، وهو أمر مهم للخصوصية في ظل قانون حماية المعلومات الشخصية (APPI / 個人情報保護法). للاطلاع على دليل إعداد كامل، راجع <a href="/ar/power-local-llm/run-ai-on-tablet-ipad-android" class="text-primary hover:underline">تشغيل الذكاء الاصطناعي على الأجهزة اللوحية وهواتف Android</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول نماذج اللغة على Xperia',
        faqs: [
          {
            q: 'هل يعمل نموذج اللغة المحلي على Xperia 10 VI؟',
            a: 'فقط TinyLlama 1.1B و Gemma 2B Q4. يمتلك Xperia 10 VI ذاكرة RAM سعتها 6 GB ومعالج Snapdragon 6 Gen 1 — تتعطل النماذج الأكبر أو تُنتج أخطاء نفاد الذاكرة أثناء التحميل. لا تحاول تشغيل Rinna 3.6B أو أي نموذج 7B على Xperia 10 VI.',
          },
          {
            q: 'كم مساحة تخزين يحتاجها النموذج على Xperia؟',
            a: 'يتطلب Rinna 3.6B Q4 تقريبًا 2 GB. يتطلب Phi-4 Q4 تقريبًا 8 GB. يتطلب TinyLlama 1.1B Q4 تقريبًا 0.7 GB. استخدم Xperia بتخزين 128 GB أو أكثر لـ Phi-4؛ 64 GB كافية لـ Rinna 3.6B و Gemma 2B.',
          },
          {
            q: 'كم يستهلك تشغيل نموذج لغة على Xperia من البطارية؟',
            a: 'حوالي 15% في الساعة مع الشاشة المضاءة أثناء الاستنتاج المستمر على Xperia 1 VI بالأداء الكامل. على Xperia 5 V مع Rinna 3.6B توقع استهلاكًا مشابهًا. فعّل وضع الطيران (機内モード) لتقليل استهلاك الراديو في الخلفية وخفض الاستهلاك الكلي بنسبة 2–4% في الساعة.',
          },
          {
            q: 'هل يعمل بدون إنترنت على Xperia؟',
            a: 'نعم — بالكامل بدون إنترنت بعد التنزيل الأولي للنموذج. لا يتطلب MLC Chat و PocketPal AI اتصالًا بالإنترنت أو مفتاح API أو حساب Sony بمجرد تخزين النموذج على الجهاز. لا تغادر أي بيانات هاتفك أثناء الاستنتاج.',
          },
          {
            q: 'ما الفرق بين Sony Xperia AI Agent ونموذج اللغة المحلي؟',
            a: 'يُوجّه Sony Xperia AI Agent (تجريبي) الطلبات عبر خوادم ذكاء اصطناعي سحابية — تمر موجّهاتك وردودك عبر البنية التحتية لـ Sony أو جهة خارجية. يعمل نموذج اللغة المحلي عبر MLC Chat بالكامل على شريحة Snapdragon في Xperia — لا تغادر البيانات الجهاز قط. هذا النهج على الجهاز هو البديل المتوافق مع الخصوصية للمستخدمين الذين يتعاملون مع بيانات حساسة في ظل قانون حماية المعلومات الشخصية (APPI / 個人情報保護法).',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Hardware Guides',
    title: 'Xperia 스마트폰에서 로컬 LLM을 실행할 수 있습니까?',
    seoTitle: 'Xperia 로컬 LLM 일본 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Xperia 1 VI (12 GB RAM)에서 MLC Chat으로 Phi-4 Q4와 Rinna 3.6B 실행 가능합니다. Xperia 5 V (8 GB)는 3B 모델 지원, Xperia 10 VI (6 GB)는 TinyLlama만 가능합니다.',
    publishDate: '2026-05-27',
    dateModified: '2026-06-12',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    quickAnswerTop: {
      ko: {
        question: 'Xperia 스마트폰에서 로컬 LLM을 실행할 수 있습니까?',
        answer: '예 — Xperia 1 VI (12 GB RAM, Snapdragon 8 Gen 3)는 MLC Chat을 통해 Rinna 3.6B와 Phi-4 Q4를 실행할 수 있습니다. Xperia 5 V (8 GB)는 경량 모델을 지원합니다. Xperia 10 VI (6 GB)는 TinyLlama와 Gemma 2B만 동작합니다.',
        bullets: [
          'Xperia 1 VI: 12 GB RAM — Phi-4 Q4, Rinna 3.6B, Qwen3-3B 실행 가능',
          'Xperia 5 V: 8 GB RAM — Rinna 3.6B 및 Gemma 2B Q4 지원',
          'Xperia 10 VI: 6 GB RAM — TinyLlama와 Gemma 2B만 지원',
          'Sony는 Galaxy AI 유사 기능을 포함하지 않습니다 — MLC Chat을 통한 로컬 LLM이 그 공백을 채웁니다',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Xperia 1 VI (12 GB RAM, Snapdragon 8 Gen 3)는 7B+ 모델을 안정적으로 실행할 수 있는 유일한 Xperia입니다 — Phi-4 Q4와 Qwen3-3B에 최적입니다',
          'Xperia 5 V (8 GB RAM)는 Rinna 3.6B와 Gemma 2B Q4를 포함한 3B 모델을 문제없이 처리합니다',
          'Xperia 10 VI (6 GB RAM)는 Sub-2B 모델로 제한됩니다 — TinyLlama 1.1B와 Gemma 2B가 실질적인 상한선입니다',
          'Sony는 On-Device AI 기능을 제공하지 않습니다 — Google Play의 MLC Chat 또는 PocketPal AI가 실용적인 대안입니다',
          'Xperia 1 VI에서 화면 켠 상태로 연속 추론 시 배터리 소모는 시간당 약 15%입니다; 비행기 모드로 소모를 줄일 수 있습니다',
        ],
      },
      body1: {
        title: 'Xperia 모델별 호환성',
        content: [
          '<strong>2026년 5월 기준, 현행 3개 Xperia 모델이 로컬 LLM 추론을 지원하며, 성능은 RAM과 칩셋에 의해 완전히 결정됩니다 — Xperia 1 VI가 선두, Xperia 5 V가 중급 영역을 담당하며, Xperia 10 VI는 가장 작은 모델로 제한됩니다.</strong> Sony는 On-Device AI 어시스턴트를 사전 설치하지 않으므로 (Samsung Galaxy AI와 달리), 로컬 LLM 앱이 Xperia 기기에서 프라이빗하고 오프라인으로 AI를 사용하는 유일한 방법입니다.',
          'Xperia 1 VI는 양자화된 7B+ 모델을 실행할 수 있는 유일한 Xperia입니다. Snapdragon 8 Gen 3 SoC와 12 GB LPDDR5X RAM 덕분에 일상적인 앱 사용과 함께 Phi-4 Q4 (14B를 약 8 GB로 양자화)와 Qwen3-3B를 동작시킬 여유가 있습니다. Snapdragon 8 Gen 2와 8 GB RAM을 탑재한 Xperia 5 V는 3B 모델의 최적 지점입니다 — Rinna 3.6B와 Gemma 2B Q4가 안정적으로 실행됩니다. Xperia 10 VI는 미드레인지 Snapdragon 6 Gen 1과 6 GB RAM만 탑재합니다; 이 단계에서는 TinyLlama 1.1B 또는 Gemma 2B에 머무르십시오 — 더 큰 모델은 로딩 중 크래시하거나 OOM 오류가 발생합니다.',
          'Xperia 1 VI는 7B+ 모델에, Xperia 5 V는 3B 모델에, Xperia 10 VI는 Sub-2B 모델에 사용하십시오.',
          '앱 설정 안내는 <a href="/ko/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">일본용 Android LLM 앱 가이드</a>를 참조하십시오.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Xperia 1 VI (12 GB RAM, Snapdragon 8 Gen 3)는 Phi-4 Q4와 Rinna 3.6B를 MLC Chat으로 실행할 수 있는 유일한 Xperia 모델입니다.',
          },
          {
            type: 'plain-terms',
            text: '로컬 LLM이란 인터넷 연결 없이 스마트폰의 칩에서 직접 실행되는 AI 모델입니다. Xperia에서는 MLC Chat 앱을 통해 설치하며, 루트 권한이 필요하지 않습니다.',
          },
        ],
        columns: ['Xperia 모델', 'RAM / 칩', '권장 모델'],
        rows: [
          { 'Xperia 모델': 'Xperia 1 VI', 'RAM / 칩': '12 GB / Snapdragon 8 Gen 3', '권장 모델': 'Phi-4 Q4, Rinna 3.6B, Qwen3-3B' },
          { 'Xperia 모델': 'Xperia 5 V', 'RAM / 칩': '8 GB / Snapdragon 8 Gen 2', '권장 모델': 'Rinna 3.6B, Gemma 2B Q4' },
          { 'Xperia 모델': 'Xperia 10 VI', 'RAM / 칩': '6 GB / Snapdragon 6 Gen 1', '권장 모델': 'TinyLlama 1.1B, Gemma 2B만' },
        ],
      },
      body2: {
        title: '3단계 설치 가이드',
        content: [
          '<strong>Xperia에 로컬 LLM을 설치하는 데는 3단계가 필요하며, 모델 다운로드 시간을 포함해 30분 미만이면 완료됩니다.</strong> 루트 액세스, 개발자 모드, 특별한 Xperia 설정이 필요하지 않습니다 — 표준 Android 앱 및 파일 관리만으로 완전히 처리됩니다.',
          '1단계: Google Play 스토어 (Google Playストア)에서 MLC Chat 또는 PocketPal AI를 설치합니다. 두 앱 모두 무료이며 일본에서 VPN이나 지역 우회 없이 이용할 수 있습니다. MLC Chat은 첫 번째 추론까지의 속도가 빠르고, PocketPal AI는 Hugging Face에서 더 넓은 범위의 GGUF 모델 파일을 지원합니다.',
          '2단계: Wi-Fi로 모델을 다운로드합니다. 다운로드 크기 기준: TinyLlama 1.1B Q4 약 0.7 GB, Rinna 3.6B Q4 약 2 GB, Gemma 2B Q4 약 1.5 GB, Phi-4 Q4 약 8 GB입니다. Phi-4에는 128 GB 이상의 저장 공간을 가진 Xperia를 사용하십시오. Phi-4 Q4 로딩 전에 다른 모든 앱을 닫으십시오 — Xperia 1 VI의 12 GB RAM 중 약 8 GB를 사용하므로 크래시 없이 로드하려면 최대 메모리가 필요합니다. 모바일 데이터로는 다운로드하지 마십시오 — 파일 크기가 큽니다.',
          '3단계: 키보드를 일본어 입력으로 전환합니다. 일본어가 활성화된 Gboard 또는 ATOK (일본에서 비즈니스용으로 인기 있는)는 MLC Chat 및 PocketPal AI와 바로 연동됩니다 — 일본어로 입력하면 모델도 일본어로 응답합니다. 일본어 입력 기능을 사용하기 위한 추가 설정은 필요하지 않습니다.',
          '배터리 관련: Xperia 1 VI에서 화면 켠 상태로 연속 추론 시 시간당 약 15%의 배터리 소모를 예상하십시오. 추론 세션 중 비행기 모드 (機内モード)를 활성화하면 백그라운드 무선 통신 소모를 줄이고 세션 시간을 연장할 수 있습니다. Sony Xperia AI Agent (현재 베타)는 클라우드 AI 서비스에 연결됩니다 — MLC Chat의 로컬 LLM은 외부 서버로 데이터를 전송하지 않고 Xperia에서 AI 추론을 완전히 실행하는 유일한 방법으로, 개인정보 보호법 (APPI / 個人情報保護法) 적용 환경에서 중요한 차이점입니다. Android 기기에서의 LLM 설정 전체 가이드는 <a href="/ko/power-local-llm/run-ai-on-tablet-ipad-android" class="text-primary hover:underline">태블릿 및 Android 폰에서 AI 실행하기</a>를 참조하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Xperia LLM에 대한 자주 묻는 질문',
        faqs: [
          {
            q: 'Xperia 10 VI에서 로컬 LLM이 작동합니까?',
            a: 'TinyLlama 1.1B와 Gemma 2B Q4만 작동합니다. Xperia 10 VI는 6 GB RAM과 Snapdragon 6 Gen 1을 탑재하고 있어, 더 큰 모델은 로딩 중 크래시하거나 메모리 부족 오류가 발생합니다. Xperia 10 VI에서 Rinna 3.6B나 7B 모델은 시도하지 마십시오.',
          },
          {
            q: 'Xperia에서 모델이 필요한 저장 공간은 얼마입니까?',
            a: 'Rinna 3.6B Q4는 약 2 GB의 저장 공간이 필요합니다. Phi-4 Q4는 약 8 GB가 필요합니다. TinyLlama 1.1B Q4는 약 0.7 GB가 필요합니다. Phi-4에는 128 GB 이상의 Xperia를 사용하십시오; 64 GB 저장 공간이면 Rinna 3.6B와 Gemma 2B에 충분합니다.',
          },
          {
            q: 'Xperia에서 LLM 실행 시 배터리가 얼마나 소모됩니까?',
            a: 'Xperia 1 VI에서 화면 켠 상태로 전체 성능으로 연속 추론 시 시간당 약 15%의 배터리가 소모됩니다. Xperia 5 V에서 Rinna 3.6B를 사용할 때도 유사한 소모가 예상됩니다. 비행기 모드 (機内モード)를 활성화하면 백그라운드 무선 통신 소모를 시간당 2~4% 줄일 수 있습니다.',
          },
          {
            q: 'Xperia에서 오프라인으로 작동합니까?',
            a: '예 — 최초 모델 다운로드 후에는 완전 오프라인으로 동작합니다. MLC Chat과 PocketPal AI는 모델이 기기에 저장되면 인터넷 연결, API 키, Sony 계정이 모두 필요하지 않습니다. 추론 중에는 어떤 데이터도 기기 밖으로 나가지 않습니다.',
          },
          {
            q: 'Sony Xperia AI Agent와 로컬 LLM의 차이는 무엇입니까?',
            a: 'Sony Xperia AI Agent (베타)는 클라우드 AI 서버를 통해 요청을 처리합니다 — 사용자의 프롬프트와 응답이 Sony 또는 서드파티 인프라를 통과합니다. MLC Chat을 통해 실행되는 로컬 LLM은 Xperia의 Snapdragon 칩에서 완전히 실행됩니다 — 데이터가 기기 밖으로 절대 나가지 않습니다. 이 On-Device 방식은 개인정보 보호법 (APPI / 個人情報保護法) 적용 환경에서 민감한 데이터를 처리하는 사용자를 위한 프라이버시 준수 대안입니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 읽을거리',
        items: [
          '[일본 Android용 최고의 로컬 LLM 앱](/ko/prompt-bites/best-local-llm-apps-japan-android)',
          '[태블릿 및 Android 폰에서 AI 실행하기](/ko/power-local-llm/run-ai-on-tablet-ipad-android)',
          '[4 GB VRAM에 최적인 Ollama 모델](/ko/prompt-bites/best-ollama-models-4gb-vram)',
        ],
      },
    },
  },
}

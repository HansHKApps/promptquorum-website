import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware Guides',
    title: 'Can You Run a Local LLM on an Xperia Phone?',
    seoTitle: 'Local LLM on Xperia Japan 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Xperia 1 VI (12 GB) handles Phi-4 Q4 and Rinna 3.6B. Xperia 5 V (8 GB) runs 3B models. Xperia 10 VI (6 GB) is limited to TinyLlama. Use MLC Chat, no root.',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: ['Rinna 3.6B', 'Phi-4', 'Qwen2.5 3B', 'Gemma 2B', 'TinyLlama'],
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
          'Xperia 1 VI: 12 GB RAM — runs Phi-4 Q4, Rinna 3.6B, Qwen2.5-3B',
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
          'Xperia 1 VI: 12 GB RAM — läuft Phi-4 Q4, Rinna 3.6B, Qwen2.5-3B',
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
          'Xperia 1 VI : 12 Go de RAM — exécute Phi-4 Q4, Rinna 3.6B, Qwen2.5-3B',
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
          'Xperia 1 VI：12 GB RAM — Phi-4 Q4、Rinna 3.6B、Qwen2.5-3Bが動作',
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
          'Xperia 1 VI：12 GB内存——可运行Phi-4 Q4、Rinna 3.6B、Qwen2.5-3B',
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
          'Xperia 1 VI (12 GB RAM, Snapdragon 8 Gen 3) is the only Xperia that reliably runs 7B+ models — use it for Phi-4 Q4 and Qwen2.5-3B',
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
          'The Xperia 1 VI is the only Xperia capable of running quantized 7B+ models. Its Snapdragon 8 Gen 3 SoC and 12 GB of LPDDR5X RAM give it headroom for Phi-4 Q4 (14B quantized to ~8 GB) and Qwen2.5-3B alongside day-to-day app usage. The Xperia 5 V with Snapdragon 8 Gen 2 and 8 GB RAM is the sweet spot for 3B models — Rinna 3.6B and Gemma 2B Q4 run reliably. The Xperia 10 VI uses the mid-range Snapdragon 6 Gen 1 with only 6 GB RAM; at this tier, stick to TinyLlama 1.1B or Gemma 2B — larger models will crash or OOM during loading.',
          'Use Xperia 1 VI for 7B+ models; use Xperia 5 V for 3B models; stick to sub-2B models on Xperia 10 VI.',
          'For app setup instructions, see our <a href="/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">Android LLM apps for Japan guide</a>.',
        ],
        columns: ['Xperia Model', 'RAM / Chip', 'Recommended Models'],
        rows: [
          { 'Xperia Model': 'Xperia 1 VI', 'RAM / Chip': '12 GB / Snapdragon 8 Gen 3', 'Recommended Models': 'Phi-4 Q4, Rinna 3.6B, Qwen2.5-3B' },
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
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    quickAnswerTop: {
      de: {
        question: 'Kann man auf einem Xperia ein lokales LLM ausführen?',
        answer: 'Ja — das Xperia 1 VI (12 GB RAM, Snapdragon 8 Gen 3) kann Rinna 3.6B und Phi-4 Q4 über MLC Chat ausführen. Das Xperia 5 V (8 GB) schafft leichte Modelle. Das Xperia 10 VI (6 GB) läuft nur TinyLlama und Gemma 2B.',
        bullets: [
          'Xperia 1 VI: 12 GB RAM — läuft Phi-4 Q4, Rinna 3.6B, Qwen2.5-3B',
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
          'Das Xperia 1 VI (12 GB RAM, Snapdragon 8 Gen 3) ist das einzige Xperia, das zuverlässig 7B+-Modelle ausführt — ideal für Phi-4 Q4 und Qwen2.5-3B',
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
          'Das Xperia 1 VI ist das einzige Xperia, das quantisierte 7B+-Modelle ausführen kann. Sein Snapdragon 8 Gen 3 SoC und 12 GB LPDDR5X RAM geben ihm Spielraum für Phi-4 Q4 (14B quantisiert auf ~8 GB) und Qwen2.5-3B neben dem normalen App-Betrieb. Das Xperia 5 V mit Snapdragon 8 Gen 2 und 8 GB RAM ist der Sweet Spot für 3B-Modelle — Rinna 3.6B und Gemma 2B Q4 laufen zuverlässig. Das Xperia 10 VI verwendet den Mid-Range Snapdragon 6 Gen 1 mit nur 6 GB RAM; auf dieser Stufe bei TinyLlama 1.1B oder Gemma 2B bleiben — größere Modelle werden beim Laden abstürzen oder OOM-Fehler verursachen.',
          'Xperia 1 VI für 7B+-Modelle verwenden; Xperia 5 V für 3B-Modelle; auf dem Xperia 10 VI bei Sub-2B-Modellen bleiben.',
          'Anleitungen zur App-Einrichtung finden Sie in unserem <a href="/de/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">Android-LLM-Apps für Japan Guide</a>.',
        ],
        columns: ['Xperia-Modell', 'RAM / Chip', 'Empfohlene Modelle'],
        rows: [
          { 'Xperia-Modell': 'Xperia 1 VI', 'RAM / Chip': '12 GB / Snapdragon 8 Gen 3', 'Empfohlene Modelle': 'Phi-4 Q4, Rinna 3.6B, Qwen2.5-3B' },
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
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    quickAnswerTop: {
      fr: {
        question: 'Peut-on exécuter un LLM local sur un Xperia ?',
        answer: 'Oui — le Xperia 1 VI (12 Go de RAM, Snapdragon 8 Gen 3) exécute Rinna 3.6B et Phi-4 Q4 via MLC Chat. Le Xperia 5 V (8 Go) gère les modèles légers. Le Xperia 10 VI (6 Go) est limité à TinyLlama et Gemma 2B.',
        bullets: [
          'Xperia 1 VI : 12 Go de RAM — exécute Phi-4 Q4, Rinna 3.6B, Qwen2.5-3B',
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
          'Le Xperia 1 VI (12 Go de RAM, Snapdragon 8 Gen 3) est le seul Xperia qui exécute de manière fiable les modèles 7B+ — utilisez-le pour Phi-4 Q4 et Qwen2.5-3B',
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
          'Le Xperia 1 VI est le seul Xperia capable d\'exécuter des modèles 7B+ quantifiés. Son SoC Snapdragon 8 Gen 3 et ses 12 Go de RAM LPDDR5X lui donnent de la marge pour Phi-4 Q4 (14B quantifié à ~8 Go) et Qwen2.5-3B en plus de l\'utilisation normale des applications. Le Xperia 5 V avec Snapdragon 8 Gen 2 et 8 Go de RAM est le point optimal pour les modèles 3B — Rinna 3.6B et Gemma 2B Q4 fonctionnent de manière fiable. Le Xperia 10 VI utilise le Snapdragon 6 Gen 1 milieu de gamme avec seulement 6 Go de RAM ; à ce niveau, restez sur TinyLlama 1.1B ou Gemma 2B — les modèles plus grands se bloqueront lors du chargement.',
          'Utilisez le Xperia 1 VI pour les modèles 7B+ ; le Xperia 5 V pour les modèles 3B ; restez sur les modèles sub-2B sur le Xperia 10 VI.',
          'Pour les instructions d\'installation des applications, consultez notre <a href="/fr/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">guide des applications LLM Android pour le Japon</a>.',
        ],
        columns: ['Modèle Xperia', 'RAM / Puce', 'Modèles recommandés'],
        rows: [
          { 'Modèle Xperia': 'Xperia 1 VI', 'RAM / Puce': '12 Go / Snapdragon 8 Gen 3', 'Modèles recommandés': 'Phi-4 Q4, Rinna 3.6B, Qwen2.5-3B' },
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
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    quickAnswerTop: {
      ja: {
        question: 'XperiaでローカルLLMを動かせる？',
        answer: 'はい — Xperia 1 VI（12 GB RAM、Snapdragon 8 Gen 3）はMLC Chat経由でRinna 3.6BとPhi-4 Q4を実行できます。Xperia 5 V（8 GB）は軽量モデルに対応。Xperia 10 VI（6 GB）はTinyLlamaとGemma 2Bのみ動作します。',
        bullets: [
          'Xperia 1 VI：12 GB RAM — Phi-4 Q4、Rinna 3.6B、Qwen2.5-3Bが動作',
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
          'Xperia 1 VI（12 GB RAM、Snapdragon 8 Gen 3）は7B+モデルを確実に動かせる唯一のXperia — Phi-4 Q4とQwen2.5-3Bに最適',
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
          'Xperia 1 VIは、量子化された7B+モデルを実行できる唯一のXperiaです。Snapdragon 8 Gen 3 SoCと12 GB LPDDR5X RAMにより、通常のアプリ使用に加えてPhi-4 Q4（14Bを約8 GBに量子化）やQwen2.5-3Bを動かす余裕があります。Snapdragon 8 Gen 2と8 GB RAMを搭載したXperia 5 Vは3Bモデルのスイートスポット — Rinna 3.6BとGemma 2B Q4が安定して動作します。Xperia 10 VIはミッドレンジのSnapdragon 6 Gen 1と6 GB RAMのみ；このクラスではTinyLlama 1.1BまたはGemma 2Bにとどめること — 大きなモデルはロード中にクラッシュするかOOMエラーになります。',
          'Xperia 1 VIは7B+モデル、Xperia 5 Vは3Bモデル、Xperia 10 VIはSub-2Bモデルに使用してください。',
          'アプリの設定手順については、<a href="/ja/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">日本向けAndroid LLMアプリガイド</a>をご覧ください。',
        ],
        columns: ['Xperiaモデル', 'RAM / チップ', '推奨モデル'],
        rows: [
          { 'Xperiaモデル': 'Xperia 1 VI', 'RAM / チップ': '12 GB / Snapdragon 8 Gen 3', '推奨モデル': 'Phi-4 Q4、Rinna 3.6B、Qwen2.5-3B' },
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
  es: {
    theme: 'Hardware Guides',
    title: '¿Puedes ejecutar un LLM local en un teléfono Xperia?',
    seoTitle: 'LLM local en Xperia Japón 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'El Xperia 1 VI (12 GB) ejecuta Phi-4 Q4 y Rinna 3.6B. El Xperia 5 V (8 GB) corre modelos 3B. El Xperia 10 VI (6 GB) está limitado a TinyLlama. Usa MLC Chat, sin root.',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    quickAnswerTop: {
      es: {
        question: '¿Puedes ejecutar un LLM local en un teléfono Xperia?',
        answer: 'Sí — el Xperia 1 VI (12 GB RAM, Snapdragon 8 Gen 3) ejecuta Rinna 3.6B y Phi-4 Q4 a través de MLC Chat. El Xperia 5 V (8 GB) maneja modelos ligeros. El Xperia 10 VI (6 GB) está limitado a TinyLlama y Gemma 2B.',
        bullets: [
          'Xperia 1 VI: 12 GB RAM — ejecuta Phi-4 Q4, Rinna 3.6B, Qwen2.5-3B',
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
          'El Xperia 1 VI (12 GB RAM, Snapdragon 8 Gen 3) es el único Xperia que ejecuta modelos 7B+ de forma fiable — ideal para Phi-4 Q4 y Qwen2.5-3B',
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
          'El Xperia 1 VI es el único Xperia capaz de ejecutar modelos 7B+ cuantizados. Su SoC Snapdragon 8 Gen 3 y sus 12 GB de RAM LPDDR5X le dan margen para Phi-4 Q4 (14B cuantizado a ~8 GB) y Qwen2.5-3B junto con el uso habitual de aplicaciones. El Xperia 5 V con Snapdragon 8 Gen 2 y 8 GB RAM es el punto óptimo para modelos 3B — Rinna 3.6B y Gemma 2B Q4 funcionan de forma fiable. El Xperia 10 VI utiliza el Snapdragon 6 Gen 1 de gama media con solo 6 GB RAM; en este nivel, quédate con TinyLlama 1.1B o Gemma 2B — los modelos más grandes se bloquearán o producirán errores de memoria durante la carga.',
          'Usa el Xperia 1 VI para modelos 7B+; el Xperia 5 V para modelos 3B; quédate con modelos sub-2B en el Xperia 10 VI.',
          'Para instrucciones de configuración de aplicaciones, consulta nuestra <a href="/es/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">guía de aplicaciones LLM para Android en Japón</a>.',
        ],
        columns: ['Modelo Xperia', 'RAM / Chip', 'Modelos recomendados'],
        rows: [
          { 'Modelo Xperia': 'Xperia 1 VI', 'RAM / Chip': '12 GB / Snapdragon 8 Gen 3', 'Modelos recomendados': 'Phi-4 Q4, Rinna 3.6B, Qwen2.5-3B' },
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
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    quickAnswerTop: {
      zh: {
        question: 'Xperia手机能运行本地LLM吗？',
        answer: '可以——Xperia 1 VI（12 GB内存，Snapdragon 8 Gen 3）可通过MLC Chat运行Rinna 3.6B和Phi-4 Q4。Xperia 5 V（8 GB）支持轻量模型。Xperia 10 VI（6 GB）仅限TinyLlama和Gemma 2B。',
        bullets: [
          'Xperia 1 VI：12 GB内存——可运行Phi-4 Q4、Rinna 3.6B、Qwen2.5-3B',
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
          'Xperia 1 VI（12 GB内存，Snapdragon 8 Gen 3）是唯一能可靠运行7B+模型的Xperia机型——适合Phi-4 Q4和Qwen2.5-3B',
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
          'Xperia 1 VI是唯一能运行量化7B+模型的Xperia机型。其Snapdragon 8 Gen 3 SoC和12 GB LPDDR5X内存在日常应用运行的同时，还能处理Phi-4 Q4（14B量化至约8 GB）和Qwen2.5-3B。搭载Snapdragon 8 Gen 2和8 GB内存的Xperia 5 V是3B模型的最佳选择——Rinna 3.6B和Gemma 2B Q4运行稳定。Xperia 10 VI使用中端Snapdragon 6 Gen 1，内存仅6 GB；此配置下请坚持使用TinyLlama 1.1B或Gemma 2B——更大的模型加载时会崩溃或出现OOM错误。',
          '7B+模型选Xperia 1 VI；3B模型选Xperia 5 V；Xperia 10 VI上坚持使用Sub-2B模型。',
          '应用安装说明，请参阅我们的<a href="/zh/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">日本Android LLM应用指南</a>。',
        ],
        columns: ['Xperia机型', '内存 / 芯片', '推荐模型'],
        rows: [
          { 'Xperia机型': 'Xperia 1 VI', '内存 / 芯片': '12 GB / Snapdragon 8 Gen 3', '推荐模型': 'Phi-4 Q4、Rinna 3.6B、Qwen2.5-3B' },
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
}

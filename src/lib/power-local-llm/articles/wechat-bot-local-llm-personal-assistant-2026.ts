import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Productivity & Knowledge Tools',
    title: 'WeChat Bot with Local LLM: Personal Assistant 2026',
    seoTitle: 'WeChat Bot with Local LLM: Personal Assistant Guide 2026',
    metaDescription: 'Build a WeChat personal assistant bot with local LLM in 2026. WeChatFerry + Ollama on Windows — fully private, no cloud API, real-time message responses.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**You can build a WeChat personal assistant bot using WeChatFerry + Ollama in 2026. The bot runs entirely on your Windows PC, uses a local LLM (Qwen3 8B or 14B), and responds in real-time to WeChat messages without sending data to any cloud API.**',
    quickAnswerTop: {
      en: {
        question: 'How do I build a WeChat bot with a local LLM?',
        answer: 'Use WeChatFerry (Windows) to hook into WeChat PC client, connect to Ollama via HTTP API, and route incoming messages to the local LLM. Total setup time: 30–60 minutes.',
        bullets: [
          'WeChatFerry: best Windows-based WeChat bot framework for 2026',
          'Ollama: local LLM backend (Qwen3 8B recommended for Chinese)',
          'Python bridge: handle message routing and response formatting',
          'Context window: store conversation history for multi-turn chat',
          'Privacy: all data stays on your local machine, no cloud API calls',
        ],
        updatedDate: '2026-07',
      },
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'Build a WeChat personal assistant bot with WeChatFerry and Ollama on Windows — the LLM runs locally, no data leaves your machine.',
      },
      {
        type: 'plain-terms',
        text: 'This guide shows how to connect WeChat to a local AI model so it automatically replies to messages, answers questions, and acts as your personal assistant inside the WeChat app.',
      },
    ],
    affiliateLinks: [
      {
        productName: 'Minisforum UM890 Pro (local AI server)',
        url: 'https://search.jd.com/Search?keyword=Minisforum+UM890+Pro',
        productCategory: 'hardware',
      },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'WeChatFerry + Ollama: the recommended local WeChat bot stack for 2026',
          'Qwen3 8B: best local model for Chinese-language WeChat responses',
          'Windows required: WeChatFerry hooks into the WeChat PC client (Windows only)',
          'Setup time: 30–60 minutes for someone comfortable with Python',
          'No cloud API: all inference runs locally, no message data sent externally',
          'Risk: WeChat ToS prohibits automated bots — use for personal assistants only',
        ],
      },
      overview: {
        heading: 'What This Guide Builds',
        body: 'This guide walks through building a personal AI assistant inside WeChat that:\n\n1. Monitors your WeChat messages in real-time\n2. Passes incoming messages to a local Ollama model\n3. Returns AI-generated replies within 3–10 seconds\n4. Maintains conversation context across multiple turns\n5. Can be triggered by a keyword (e.g., "@ai") to avoid responding to all messages\n\nThe setup runs on a Windows PC or Windows virtual machine. macOS is not supported by WeChatFerry. The local LLM runs via Ollama — no cloud API keys required.',
        image: '/images/wechat-bot-architecture-flow-en.svg',
        imageCaption: 'WeChat bot architecture: WeChat message triggers WeChatFerry (Windows DLL injection), routed through a Python bridge to Ollama running Qwen3:8b, with a 3–10 second reply — all five stages run locally with no cloud API call.',
      },
      requirements: {
        heading: 'Requirements',
        body: 'Hardware and software needed before starting:\n\n- **Windows 10/11** (WeChatFerry requirement)\n- **WeChat PC client** — tested with WeChat 3.9.x\n- **Python 3.10+**\n- **Ollama** installed on the same machine\n- **8GB RAM minimum** (16GB recommended for smooth 7B model performance)\n- **6–8GB disk space** for the Qwen3 8B model weights\n\nRecommended model: **Qwen3:8b** — excellent Chinese language quality, 7B parameters fit in 8GB VRAM or run at acceptable speed on CPU with 16GB RAM.',
      },
      installation: {
        heading: 'Step-by-Step Installation',
        numberedItems: [
          {
            title: 'Install Ollama and pull Qwen3 8B',
            whyItMatters: 'Download Ollama from ollama.com and run: `ollama pull qwen3:8b`',
          },
          {
            title: 'Log in to WeChat PC',
            whyItMatters: 'Open WeChat on Windows and scan the QR code to log in. Keep it logged in and running in the background.',
          },
          {
            title: 'Install WeChatFerry',
            whyItMatters: 'Install via pip: `pip install wcferry`. WeChatFerry injects into the WeChat process to expose a message API.',
          },
          {
            title: 'Create the Python message handler',
            whyItMatters: 'Create `wechat_bot.py` with WeChatFerry client, Ollama HTTP API calls, and message routing logic.',
          },
          {
            title: 'Test with a self-message',
            whyItMatters: 'Send a WeChat message to yourself starting with "@ai" and verify the bot responds within 10 seconds.',
          },
          {
            title: 'Add conversation history',
            whyItMatters: 'Store the last 10 messages per contact in a dict to enable multi-turn conversation context.',
          },
          {
            title: 'Run as a background service',
            whyItMatters: 'Use NSSM (Non-Sucking Service Manager) to run the Python script as a Windows service that starts automatically.',
          },
        ],
      },
      codeExample: {
        heading: 'Core Python Code',
        body: 'The minimal working bot code uses WeChatFerry to receive messages and Ollama\'s HTTP API to generate responses:\n\n```python\nimport requests\nfrom wcferry import Wcf, WxMsg\n\nOLLAMA_URL = "http://localhost:11434/api/chat"\nMODEL = "qwen3:8b"\nTRIGGER = "@ai"\n\nconversation_history: dict[str, list] = {}\n\ndef ask_ollama(contact_id: str, user_message: str) -> str:\n    if contact_id not in conversation_history:\n        conversation_history[contact_id] = []\n    history = conversation_history[contact_id]\n    history.append({"role": "user", "content": user_message})\n    # keep last 10 turns\n    if len(history) > 20:\n        history = history[-20:]\n    conversation_history[contact_id] = history\n    response = requests.post(OLLAMA_URL, json={\n        "model": MODEL,\n        "messages": history,\n        "stream": False\n    })\n    reply = response.json()["message"]["content"]\n    history.append({"role": "assistant", "content": reply})\n    return reply\n\ndef on_message(msg: WxMsg):\n    if msg.type == 1 and msg.content.startswith(TRIGGER):\n        user_text = msg.content[len(TRIGGER):].strip()\n        reply = ask_ollama(msg.sender, user_text)\n        wcf.send_text(reply, msg.sender)\n\nwcf = Wcf()\nwcf.enable_receiving_msg()\nfor msg in wcf.get_msgs():\n    on_message(msg)\n```',
      },
      modelChoice: {
        heading: 'Best Local Models for Chinese WeChat Conversations',
        body: 'Model choice significantly affects response quality for Chinese-language messages.',
        image: '/images/wechat-bot-model-speed-chinese-en.svg',
        imageCaption: 'CPU speed by model for Chinese WeChat replies: Qwen3:3b runs fastest at 8–12 tok/s, Qwen3:8b balances quality and speed at 3–5 tok/s, Llama3.1:8b matches that speed with weaker Chinese, and Qwen3:14b is highest quality at 1–2 tok/s.',
        columns: ['Model', 'Size', 'Chinese Quality', 'Speed (CPU)', 'Speed (8GB VRAM)'],
        rows: [
          { 'Model': 'Qwen3:8b', 'Size': '4.7 GB', 'Chinese Quality': 'Excellent', 'Speed (CPU)': '3–5 tok/s', 'Speed (8GB VRAM)': '30–45 tok/s' },
          { 'Model': 'Qwen3:14b', 'Size': '9 GB', 'Chinese Quality': 'Best', 'Speed (CPU)': '1–2 tok/s', 'Speed (8GB VRAM)': '15–20 tok/s' },
          { 'Model': 'Qwen3:3b', 'Size': '2 GB', 'Chinese Quality': 'Good', 'Speed (CPU)': '8–12 tok/s', 'Speed (8GB VRAM)': '60+ tok/s' },
          { 'Model': 'Llama3.1:8b', 'Size': '4.7 GB', 'Chinese Quality': 'Moderate', 'Speed (CPU)': '3–5 tok/s', 'Speed (8GB VRAM)': '30–45 tok/s' },
        ],
      },
      limitations: {
        heading: 'Limitations and Risks',
        body: '**WeChat Terms of Service:** WeChat\'s Terms of Service prohibit automated bots, scrapers, and third-party clients. Using WeChatFerry could result in account suspension if detected by WeChat\'s anti-automation systems. Use this setup for personal productivity only — not for mass messaging, marketing, or commercial automation.\n\n**Windows-only:** WeChatFerry uses Windows DLL injection to hook into the WeChat process. It does not work on macOS or Linux.\n\n**WeChat client version dependency:** WeChatFerry maintains compatibility with specific WeChat PC client versions. Verify the compatible version list in the WeChatFerry GitHub repository before updating WeChat.\n\n**Latency:** CPU-only inference on a 7B model takes 5–15 seconds per response, which can feel slow in chat. An 8GB GPU brings this down to 1–3 seconds.',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Does this WeChat bot work on Mac?',
            a: 'No. WeChatFerry requires Windows and hooks into the WeChat Windows PC client via DLL injection. macOS users can run Windows in a virtual machine (Parallels or VMware Fusion) to use this setup.',
          },
          {
            q: 'Will my WeChat account get banned for using a bot?',
            a: 'WeChat prohibits automated bots in its Terms of Service. Accounts detected using automation tools risk temporary suspension or permanent ban. Use only for personal productivity at low message volumes.',
          },
          {
            q: 'What is the best Ollama model for Chinese WeChat messages?',
            a: 'Qwen3 8B is the best balance of quality and speed for Chinese-language WeChat responses — excellent Chinese comprehension, fast enough on most hardware, and the 4.7GB model fits in 8GB VRAM.',
          },
          {
            q: 'Can the bot handle group chats?',
            a: 'Yes. WeChatFerry exposes group messages with the room ID. Modify the `on_message` handler to check `msg.roomid` and filter which groups the bot should respond in. Add a trigger keyword to avoid responding to every group message.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I build a WeChat bot with a local LLM?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use WeChatFerry (Windows) to hook into WeChat PC client, connect to Ollama via HTTP API, and route incoming messages to the local LLM. Total setup time: 30–60 minutes with Python.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this WeChat bot work on Mac?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. WeChatFerry requires Windows. macOS users can run Windows in a virtual machine (Parallels or VMware Fusion).',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best model for Chinese WeChat messages?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Qwen3 8B is the best balance of quality and speed — excellent Chinese comprehension, 4.7GB fits in 8GB VRAM, responds in 1–3 seconds with a GPU.',
          },
        },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Build a WeChat Bot with Local LLM',
      step: [
        { '@type': 'HowToStep', name: 'Install Ollama and pull Qwen3 8B', text: 'Download Ollama and run: ollama pull qwen3:8b' },
        { '@type': 'HowToStep', name: 'Log in to WeChat PC', text: 'Open WeChat on Windows and keep it logged in' },
        { '@type': 'HowToStep', name: 'Install WeChatFerry', text: 'pip install wcferry' },
        { '@type': 'HowToStep', name: 'Create Python message handler', text: 'Write bot code to route WeChat messages to Ollama API' },
        { '@type': 'HowToStep', name: 'Test and run as service', text: 'Test with a self-message, then run as Windows background service' },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'WeChat Bot with Local LLM: Personal Assistant 2026',
      description: 'Build a WeChat personal assistant bot with WeChatFerry and Ollama on Windows — fully local, no cloud API.',
      url: 'https://www.promptquorum.com/power-local-llm/wechat-bot-local-llm-personal-assistant-2026',
      inLanguage: 'en',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      datePublished: '2026-05-26',
      dateModified: '2026-07-01',
      'proficiencyLevel': 'Intermediate',
    },
    relatedReading: {
      items: [
        '[WeChat Local LLM Integration Guide — 3 Integration Patterns](/power-local-llm/wechat-local-llm-integration-2026) — webhook, WeChatFerry, and mini-PC server patterns for developers',
        '[Local AI Agents with MCP 2026](/power-local-llm/local-ai-agents-with-mcp-2026) — extend your local LLM with tool-calling and automation beyond WeChat',
        '[Best Mini PC for Always-On Ollama Server](/prompt-bites/best-mini-pc-for-ollama-server-always-on) — hardware options for running a 24/7 WeChat bot server',
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Productivity & Knowledge Tools',
    title: 'WeChat-Bot mit lokalem LLM: Persönlicher Assistent 2026',
    seoTitle: 'WeChat-Bot mit lokalem LLM: Persönlicher Assistent 2026',
    metaDescription: 'WeChat-Persönlichkeitsassistent mit lokalem LLM 2026. WeChatFerry + Ollama auf Windows — komplett lokal, kein Cloud-API, vollständige Datenprivatsphäre.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Mit WeChatFerry und Ollama kann 2026 ein persönlicher WeChat-Assistent-Bot auf dem eigenen Windows-PC aufgebaut werden — lokales LLM (Qwen3 8B), keine Cloud-API, alle Daten bleiben lokal.**',
    quickAnswerTop: {
      de: {
        question: 'Wie baue ich einen WeChat-Bot mit einem lokalen LLM?',
        answer: 'WeChatFerry (Windows) nutzen, um in den WeChat-PC-Client einzuhaken, über HTTP-API mit Ollama verbinden und Nachrichten an das lokale LLM weiterleiten. Einrichtungszeit: 30–60 Minuten.',
        bullets: [
          'WeChatFerry: bestes Windows-basiertes WeChat-Bot-Framework 2026',
          'Ollama: lokales LLM-Backend (Qwen3 8B empfohlen für Chinesisch)',
          'Python-Brücke: Nachrichtenrouting und Antwortformatierung',
          'Kontextfenster: Gesprächsverlauf für Mehrfachanfragen speichern',
          'Datenschutz: alle Daten bleiben lokal, keine Cloud-API-Aufrufe',
        ],
        updatedDate: '2026-07',
      },
    },
    snippetBlocks: [
      { type: 'one-sentence', text: 'WeChat-Persönlichkeitsassistent mit WeChatFerry und Ollama unter Windows — das LLM läuft lokal, keine Daten verlassen den Rechner.' },
      { type: 'plain-terms', text: 'Diese Anleitung zeigt, wie WeChat mit einem lokalen KI-Modell verbunden wird, das automatisch auf Nachrichten antwortet — direkt in der WeChat-App.' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'WeChatFerry + Ollama: empfohlener lokaler WeChat-Bot-Stack 2026',
          'Qwen3 8B: bestes lokales Modell für chinesischsprachige Antworten',
          'Nur Windows: WeChatFerry hakt in den WeChat-PC-Client ein',
          'Einrichtungszeit: 30–60 Minuten mit Python-Kenntnissen',
          'Keine Cloud-API: gesamte Inferenz läuft lokal',
          'Hinweis: WeChat-AGB verbieten automatisierte Bots — nur für persönlichen Einsatz',
        ],
      },
      overview: {
        heading: 'Was diese Anleitung baut',
        body: 'Diese Anleitung zeigt Schritt für Schritt, wie ein persönlicher KI-Assistent innerhalb von WeChat entsteht, der:\n\n1. WeChat-Nachrichten in Echtzeit überwacht\n2. Eingehende Nachrichten an ein lokales Ollama-Modell weiterleitet\n3. KI-generierte Antworten innerhalb von 3–10 Sekunden zurückgibt\n4. Den Gesprächskontext über mehrere Runden hinweg beibehält\n5. Durch ein Schlüsselwort (z. B. "@ai") ausgelöst werden kann, um nicht auf jede Nachricht zu antworten\n\nDas Setup läuft auf einem Windows-PC oder einer Windows-VM. macOS wird von WeChatFerry nicht unterstützt. Das lokale LLM läuft über Ollama — keine Cloud-API-Schlüssel erforderlich.',
        image: '/images/wechat-bot-architecture-flow-en.svg',
        imageCaption: 'WeChat-Bot-Architektur: WeChat-Nachricht löst WeChatFerry (Windows-DLL-Injektion) aus, geleitet über eine Python-Brücke an Ollama mit Qwen3:8b, Antwort in 3–10 Sekunden — alle fünf Stufen laufen lokal ohne Cloud-API-Aufruf.',
      },
      requirements: {
        heading: 'Voraussetzungen',
        body: 'Benötigte Hardware und Software vor dem Start:\n\n- **Windows 10/11** (Voraussetzung für WeChatFerry)\n- **WeChat-PC-Client** — getestet mit WeChat 3.9.x\n- **Python 3.10+**\n- **Ollama** auf demselben Rechner installiert\n- **mindestens 8 GB RAM** (16 GB empfohlen für flüssige Performance mit dem 7B-Modell)\n- **6–8 GB Speicherplatz** für die Qwen3-8B-Modellgewichte\n\nEmpfohlenes Modell: **Qwen3:8b** — hervorragende Chinesisch-Qualität, die 7B Parameter passen in 8 GB VRAM oder laufen mit 16 GB RAM auf der CPU in akzeptabler Geschwindigkeit.',
      },
      installation: {
        heading: 'Schritt-für-Schritt-Installation',
        numberedItems: [
          {
            title: 'Ollama installieren und Qwen3 8B laden',
            whyItMatters: 'Ollama von ollama.com herunterladen und ausführen: `ollama pull qwen3:8b`',
          },
          {
            title: 'Bei WeChat PC anmelden',
            whyItMatters: 'WeChat unter Windows öffnen und den QR-Code zum Anmelden scannen. Im Hintergrund angemeldet und laufend halten.',
          },
          {
            title: 'WeChatFerry installieren',
            whyItMatters: 'Installation über pip: `pip install wcferry`. WeChatFerry klinkt sich in den WeChat-Prozess ein, um eine Nachrichten-API bereitzustellen.',
          },
          {
            title: 'Python-Nachrichtenhandler erstellen',
            whyItMatters: '`wechat_bot.py` mit WeChatFerry-Client, Ollama-HTTP-API-Aufrufen und Nachrichtenrouting-Logik anlegen.',
          },
          {
            title: 'Mit einer Selbstnachricht testen',
            whyItMatters: 'Eine WeChat-Nachricht beginnend mit "@ai" an sich selbst senden und prüfen, ob der Bot innerhalb von 10 Sekunden antwortet.',
          },
          {
            title: 'Gesprächsverlauf hinzufügen',
            whyItMatters: 'Die letzten 10 Nachrichten pro Kontakt in einem Dict speichern, um mehrstufigen Gesprächskontext zu ermöglichen.',
          },
          {
            title: 'Als Hintergrunddienst ausführen',
            whyItMatters: 'NSSM (Non-Sucking Service Manager) nutzen, um das Python-Skript als Windows-Dienst mit automatischem Start auszuführen.',
          },
        ],
      },
      codeExample: {
        heading: 'Zentraler Python-Code',
        body: 'Der minimal funktionsfähige Bot-Code nutzt WeChatFerry zum Empfangen von Nachrichten und die Ollama-HTTP-API zur Antwortgenerierung:\n\n```python\nimport requests\nfrom wcferry import Wcf, WxMsg\n\nOLLAMA_URL = "http://localhost:11434/api/chat"\nMODEL = "qwen3:8b"\nTRIGGER = "@ai"\n\nconversation_history: dict[str, list] = {}\n\ndef ask_ollama(contact_id: str, user_message: str) -> str:\n    if contact_id not in conversation_history:\n        conversation_history[contact_id] = []\n    history = conversation_history[contact_id]\n    history.append({"role": "user", "content": user_message})\n    # keep last 10 turns\n    if len(history) > 20:\n        history = history[-20:]\n    conversation_history[contact_id] = history\n    response = requests.post(OLLAMA_URL, json={\n        "model": MODEL,\n        "messages": history,\n        "stream": False\n    })\n    reply = response.json()["message"]["content"]\n    history.append({"role": "assistant", "content": reply})\n    return reply\n\ndef on_message(msg: WxMsg):\n    if msg.type == 1 and msg.content.startswith(TRIGGER):\n        user_text = msg.content[len(TRIGGER):].strip()\n        reply = ask_ollama(msg.sender, user_text)\n        wcf.send_text(reply, msg.sender)\n\nwcf = Wcf()\nwcf.enable_receiving_msg()\nfor msg in wcf.get_msgs():\n    on_message(msg)\n```',
      },
      modelChoice: {
        heading: 'Beste lokale Modelle für chinesische WeChat-Gespräche',
        body: 'Die Modellwahl beeinflusst die Antwortqualität bei chinesischsprachigen Nachrichten erheblich.',
        image: '/images/wechat-bot-model-speed-chinese-en.svg',
        imageCaption: 'CPU-Geschwindigkeit je Modell für chinesische WeChat-Antworten: Qwen3:3b am schnellsten mit 8–12 Tok/s, Qwen3:8b balanciert Qualität und Geschwindigkeit mit 3–5 Tok/s, Llama3.1:8b gleich schnell mit schwächerem Chinesisch, Qwen3:14b beste Qualität mit 1–2 Tok/s.',
        columns: ['Modell', 'Größe', 'Chinesisch-Qualität', 'Geschwindigkeit (CPU)', 'Geschwindigkeit (8 GB VRAM)'],
        rows: [
          { 'Modell': 'Qwen3:8b', 'Größe': '4,7 GB', 'Chinesisch-Qualität': 'Ausgezeichnet', 'Geschwindigkeit (CPU)': '3–5 Tok/s', 'Geschwindigkeit (8 GB VRAM)': '30–45 Tok/s' },
          { 'Modell': 'Qwen3:14b', 'Größe': '9 GB', 'Chinesisch-Qualität': 'Beste', 'Geschwindigkeit (CPU)': '1–2 Tok/s', 'Geschwindigkeit (8 GB VRAM)': '15–20 Tok/s' },
          { 'Modell': 'Qwen3:3b', 'Größe': '2 GB', 'Chinesisch-Qualität': 'Gut', 'Geschwindigkeit (CPU)': '8–12 Tok/s', 'Geschwindigkeit (8 GB VRAM)': '60+ Tok/s' },
          { 'Modell': 'Llama3.1:8b', 'Größe': '4,7 GB', 'Chinesisch-Qualität': 'Mäßig', 'Geschwindigkeit (CPU)': '3–5 Tok/s', 'Geschwindigkeit (8 GB VRAM)': '30–45 Tok/s' },
        ],
      },
      limitations: {
        heading: 'Einschränkungen und Risiken',
        body: '**WeChat-Nutzungsbedingungen:** Die WeChat-Nutzungsbedingungen verbieten automatisierte Bots, Scraper und Drittanbieter-Clients. Die Nutzung von WeChatFerry kann zur Kontosperrung führen, wenn WeChats Anti-Automatisierungssysteme dies erkennen. Dieses Setup nur für die persönliche Produktivität nutzen — nicht für Massennachrichten, Marketing oder kommerzielle Automatisierung.\n\n**Nur Windows:** WeChatFerry nutzt DLL-Injection unter Windows, um sich in den WeChat-Prozess einzuklinken. Funktioniert nicht unter macOS oder Linux.\n\n**Abhängigkeit von der WeChat-Client-Version:** WeChatFerry hält die Kompatibilität mit bestimmten WeChat-PC-Client-Versionen aufrecht. Die Liste kompatibler Versionen im WeChatFerry-GitHub-Repository prüfen, bevor WeChat aktualisiert wird.\n\n**Latenz:** Reine CPU-Inferenz mit einem 7B-Modell dauert 5–15 Sekunden pro Antwort, was im Chat langsam wirken kann. Eine 8-GB-GPU senkt dies auf 1–3 Sekunden.',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Funktioniert der WeChat-Bot auch auf macOS?',
            a: 'Nein. WeChatFerry benötigt Windows und hakt sich via DLL-Injektion in den WeChat-Windows-PC-Client ein. macOS-Nutzer können Windows in einer virtuellen Maschine (Parallels) verwenden.',
          },
          {
            q: 'Riskiert mein WeChat-Konto eine Sperre durch die Nutzung eines Bots?',
            a: 'Die WeChat-Nutzungsbedingungen verbieten automatisierte Bots. Konten, bei denen Automatisierungstools erkannt werden, riskieren eine vorübergehende Sperre oder einen dauerhaften Bann. Nur bei geringem Nachrichtenvolumen für persönliche Produktivität nutzen.',
          },
          {
            q: 'Welches Ollama-Modell eignet sich am besten für chinesische WeChat-Nachrichten?',
            a: 'Qwen3 8B bietet die beste Balance aus Qualität und Geschwindigkeit — ausgezeichnetes Chinesisch-Verständnis, 4,7 GB passen in 8 GB VRAM.',
          },
          {
            q: 'Kann der Bot Gruppenchats verarbeiten?',
            a: 'Ja. WeChatFerry liefert Gruppennachrichten inklusive Raum-ID. Den `on_message`-Handler anpassen, um `msg.roomid` zu prüfen und zu filtern, in welchen Gruppen der Bot antworten soll. Ein Auslöse-Schlüsselwort hinzufügen, um nicht auf jede Gruppennachricht zu reagieren.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Wie baue ich einen WeChat-Bot mit einem lokalen LLM?', acceptedAnswer: { '@type': 'Answer', text: 'WeChatFerry (Windows) zum Einhaken in den WeChat-PC-Client nutzen, mit Ollama über HTTP-API verbinden und Nachrichten weiterleiten. Einrichtungszeit: 30–60 Minuten.' } },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      inLanguage: 'de',
      name: 'Einen WeChat-Bot mit lokalem LLM bauen',
      step: [
        { '@type': 'HowToStep', name: 'Ollama installieren und Qwen3 8B laden', text: 'Ollama herunterladen und ausführen: ollama pull qwen3:8b' },
        { '@type': 'HowToStep', name: 'Bei WeChat PC anmelden', text: 'WeChat unter Windows öffnen und angemeldet halten' },
        { '@type': 'HowToStep', name: 'WeChatFerry installieren', text: 'pip install wcferry' },
        { '@type': 'HowToStep', name: 'Python-Nachrichtenhandler erstellen', text: 'Bot-Code schreiben, der WeChat-Nachrichten an die Ollama-API weiterleitet' },
        { '@type': 'HowToStep', name: 'Testen und als Dienst ausführen', text: 'Mit einer Selbstnachricht testen, dann als Windows-Hintergrunddienst ausführen' },
      ],
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'WeChat-Bot mit lokalem LLM: Persönlicher Assistent 2026', url: 'https://www.promptquorum.com/de/power-local-llm/wechat-bot-local-llm-personal-assistant-2026', inLanguage: 'de', author: { '@type': 'Organization', name: 'PromptQuorum' }, datePublished: '2026-05-26', dateModified: '2026-07-14' },
    relatedReading: {
      items: [
        '[WeChat Lokale LLM Integration — 3 Integrationsmuster](/de/power-local-llm/wechat-local-llm-integration-2026) — Webhook-, WeChatFerry- und Mini-PC-Server-Muster für Entwickler',
        '[Lokale KI-Agenten mit MCP 2026](/de/power-local-llm/local-ai-agents-with-mcp-2026) — lokales LLM mit Tool-Calling und Automatisierung erweitern',
        '[Bester Mini-PC für Always-On-Ollama-Server](/de/prompt-bites/best-mini-pc-for-ollama-server-always-on) — Hardware für einen 24/7-WeChat-Bot-Server',
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Productivity & Knowledge Tools',
    title: 'Bot WeChat avec LLM local : assistant personnel 2026',
    seoTitle: 'Bot WeChat avec LLM local : assistant personnel 2026',
    metaDescription: 'Créez un assistant personnel WeChat avec LLM local en 2026. WeChatFerry + Ollama sur Windows — entièrement local, sans API cloud, confidentialité totale.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**En 2026, vous pouvez construire un bot assistant personnel WeChat avec WeChatFerry et Ollama sur Windows — LLM local (Qwen3 8B), sans API cloud, toutes les données restent sur votre machine.**',
    quickAnswerTop: {
      fr: {
        question: 'Comment créer un bot WeChat avec un LLM local ?',
        answer: 'Utilisez WeChatFerry (Windows) pour vous connecter au client WeChat PC, reliez-le à Ollama via HTTP API et routez les messages entrants vers le LLM local. Temps de configuration : 30–60 minutes.',
        bullets: [
          'WeChatFerry : meilleur framework de bot WeChat Windows 2026',
          'Ollama : backend LLM local (Qwen3 8B recommandé pour le chinois)',
          'Bridge Python : routage des messages et formatage des réponses',
          'Fenêtre de contexte : historique pour conversations multi-tours',
          'Confidentialité : toutes les données restent locales, sans API cloud',
        ],
        updatedDate: '2026-07',
      },
    },
    snippetBlocks: [
      { type: 'one-sentence', text: 'Construisez un assistant personnel WeChat avec WeChatFerry et Ollama sous Windows — le LLM tourne localement, aucune donnée ne quitte votre machine.' },
      { type: 'plain-terms', text: 'Ce guide montre comment connecter WeChat à un modèle IA local pour répondre automatiquement aux messages directement dans l\'application WeChat.' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'WeChatFerry + Ollama : stack recommandé pour bot WeChat local en 2026',
          'Qwen3 8B : meilleur modèle local pour réponses en chinois',
          'Windows requis : WeChatFerry s\'intègre dans le client WeChat PC Windows',
          'Temps de configuration : 30–60 minutes avec Python',
          'Aucune API cloud : toute l\'inférence tourne localement',
          'CGU WeChat : bots automatisés interdits — usage personnel uniquement',
        ],
      },
      overview: {
        heading: 'Ce que construit ce guide',
        body: 'Ce guide explique étape par étape comment créer un assistant IA personnel dans WeChat qui :\n\n1. Surveille vos messages WeChat en temps réel\n2. Transmet les messages entrants à un modèle Ollama local\n3. Renvoie des réponses générées par IA en 3–10 secondes\n4. Maintient le contexte de la conversation sur plusieurs tours\n5. Peut être déclenché par un mot-clé (par exemple "@ai") pour éviter de répondre à tous les messages\n\nLa configuration s\'exécute sur un PC Windows ou une machine virtuelle Windows. macOS n\'est pas pris en charge par WeChatFerry. Le LLM local s\'exécute via Ollama — aucune clé API cloud n\'est nécessaire.',
        image: '/images/wechat-bot-architecture-flow-en.svg',
        imageCaption: 'Architecture du bot WeChat : le message WeChat déclenche WeChatFerry (injection DLL Windows), routé via un pont Python vers Ollama exécutant Qwen3:8b, réponse en 3–10 secondes — les cinq étapes tournent localement sans appel API cloud.',
      },
      requirements: {
        heading: 'Prérequis',
        body: 'Matériel et logiciel nécessaires avant de commencer :\n\n- **Windows 10/11** (exigence de WeChatFerry)\n- **Client WeChat PC** — testé avec WeChat 3.9.x\n- **Python 3.10+**\n- **Ollama** installé sur la même machine\n- **8 Go de RAM minimum** (16 Go recommandés pour des performances fluides avec le modèle 7B)\n- **6–8 Go d\'espace disque** pour les poids du modèle Qwen3 8B\n\nModèle recommandé : **Qwen3:8b** — excellente qualité en chinois, les 7 milliards de paramètres tiennent dans 8 Go de VRAM ou tournent à une vitesse acceptable sur CPU avec 16 Go de RAM.',
      },
      installation: {
        heading: 'Installation étape par étape',
        numberedItems: [
          {
            title: 'Installer Ollama et télécharger Qwen3 8B',
            whyItMatters: 'Téléchargez Ollama depuis ollama.com et exécutez : `ollama pull qwen3:8b`',
          },
          {
            title: 'Se connecter à WeChat PC',
            whyItMatters: 'Ouvrez WeChat sous Windows et scannez le code QR pour vous connecter. Gardez-le connecté et actif en arrière-plan.',
          },
          {
            title: 'Installer WeChatFerry',
            whyItMatters: 'Installez via pip : `pip install wcferry`. WeChatFerry s\'injecte dans le processus WeChat pour exposer une API de messages.',
          },
          {
            title: 'Créer le gestionnaire de messages Python',
            whyItMatters: 'Créez `wechat_bot.py` avec le client WeChatFerry, les appels à l\'API HTTP d\'Ollama et la logique de routage des messages.',
          },
          {
            title: 'Tester avec un message à soi-même',
            whyItMatters: 'Envoyez-vous un message WeChat commençant par "@ai" et vérifiez que le bot répond en moins de 10 secondes.',
          },
          {
            title: 'Ajouter l\'historique de conversation',
            whyItMatters: 'Stockez les 10 derniers messages par contact dans un dict pour permettre un contexte de conversation multi-tours.',
          },
          {
            title: 'Exécuter en tant que service en arrière-plan',
            whyItMatters: 'Utilisez NSSM (Non-Sucking Service Manager) pour exécuter le script Python en tant que service Windows démarrant automatiquement.',
          },
        ],
      },
      codeExample: {
        heading: 'Code Python essentiel',
        body: 'Le code minimal fonctionnel du bot utilise WeChatFerry pour recevoir les messages et l\'API HTTP d\'Ollama pour générer les réponses :\n\n```python\nimport requests\nfrom wcferry import Wcf, WxMsg\n\nOLLAMA_URL = "http://localhost:11434/api/chat"\nMODEL = "qwen3:8b"\nTRIGGER = "@ai"\n\nconversation_history: dict[str, list] = {}\n\ndef ask_ollama(contact_id: str, user_message: str) -> str:\n    if contact_id not in conversation_history:\n        conversation_history[contact_id] = []\n    history = conversation_history[contact_id]\n    history.append({"role": "user", "content": user_message})\n    # keep last 10 turns\n    if len(history) > 20:\n        history = history[-20:]\n    conversation_history[contact_id] = history\n    response = requests.post(OLLAMA_URL, json={\n        "model": MODEL,\n        "messages": history,\n        "stream": False\n    })\n    reply = response.json()["message"]["content"]\n    history.append({"role": "assistant", "content": reply})\n    return reply\n\ndef on_message(msg: WxMsg):\n    if msg.type == 1 and msg.content.startswith(TRIGGER):\n        user_text = msg.content[len(TRIGGER):].strip()\n        reply = ask_ollama(msg.sender, user_text)\n        wcf.send_text(reply, msg.sender)\n\nwcf = Wcf()\nwcf.enable_receiving_msg()\nfor msg in wcf.get_msgs():\n    on_message(msg)\n```',
      },
      modelChoice: {
        heading: 'Meilleurs modèles locaux pour les conversations WeChat en chinois',
        body: 'Le choix du modèle affecte considérablement la qualité des réponses aux messages en chinois.',
        image: '/images/wechat-bot-model-speed-chinese-en.svg',
        imageCaption: 'Vitesse CPU par modèle pour les réponses WeChat en chinois : Qwen3:3b le plus rapide à 8–12 tok/s, Qwen3:8b équilibre qualité et vitesse à 3–5 tok/s, Llama3.1:8b même vitesse avec un chinois plus faible, Qwen3:14b meilleure qualité à 1–2 tok/s.',
        columns: ['Modèle', 'Taille', 'Qualité en chinois', 'Vitesse (CPU)', 'Vitesse (8 Go VRAM)'],
        rows: [
          { 'Modèle': 'Qwen3:8b', 'Taille': '4,7 Go', 'Qualité en chinois': 'Excellente', 'Vitesse (CPU)': '3–5 tok/s', 'Vitesse (8 Go VRAM)': '30–45 tok/s' },
          { 'Modèle': 'Qwen3:14b', 'Taille': '9 Go', 'Qualité en chinois': 'Optimale', 'Vitesse (CPU)': '1–2 tok/s', 'Vitesse (8 Go VRAM)': '15–20 tok/s' },
          { 'Modèle': 'Qwen3:3b', 'Taille': '2 Go', 'Qualité en chinois': 'Bonne', 'Vitesse (CPU)': '8–12 tok/s', 'Vitesse (8 Go VRAM)': '60+ tok/s' },
          { 'Modèle': 'Llama3.1:8b', 'Taille': '4,7 Go', 'Qualité en chinois': 'Moyenne', 'Vitesse (CPU)': '3–5 tok/s', 'Vitesse (8 Go VRAM)': '30–45 tok/s' },
        ],
      },
      limitations: {
        heading: 'Limites et risques',
        body: '**Conditions d\'utilisation de WeChat :** Les conditions d\'utilisation de WeChat interdisent les bots automatisés, les scrapers et les clients tiers. L\'utilisation de WeChatFerry pourrait entraîner la suspension du compte si les systèmes anti-automatisation de WeChat le détectent. Utilisez cette configuration uniquement pour la productivité personnelle — pas pour l\'envoi de masse, le marketing ou l\'automatisation commerciale.\n\n**Windows uniquement :** WeChatFerry utilise l\'injection de DLL sous Windows pour s\'accrocher au processus WeChat. Ne fonctionne pas sous macOS ni Linux.\n\n**Dépendance à la version du client WeChat :** WeChatFerry maintient la compatibilité avec des versions spécifiques du client WeChat PC. Vérifiez la liste des versions compatibles dans le dépôt GitHub de WeChatFerry avant de mettre à jour WeChat.\n\n**Latence :** L\'inférence uniquement sur CPU avec un modèle 7B prend 5 à 15 secondes par réponse, ce qui peut sembler lent en discussion. Un GPU de 8 Go réduit ce délai à 1–3 secondes.',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Ce bot WeChat fonctionne-t-il sur Mac ?',
            a: 'Non. WeChatFerry nécessite Windows. Les utilisateurs macOS peuvent faire tourner Windows dans une machine virtuelle (Parallels ou VMware Fusion).',
          },
          {
            q: 'Mon compte WeChat risque-t-il d\'être banni pour utilisation d\'un bot ?',
            a: 'Les conditions d\'utilisation de WeChat interdisent les bots automatisés. Les comptes détectés utilisant des outils d\'automatisation risquent une suspension temporaire ou un bannissement permanent. À utiliser uniquement pour la productivité personnelle à faible volume de messages.',
          },
          {
            q: 'Quel est le meilleur modèle Ollama pour les messages WeChat en chinois ?',
            a: 'Qwen3 8B offre le meilleur équilibre qualité-vitesse pour les réponses WeChat en chinois — excellente compréhension du chinois, suffisamment rapide sur la plupart du matériel, et le modèle de 4,7 Go tient dans 8 Go de VRAM.',
          },
          {
            q: 'Le bot peut-il gérer les discussions de groupe ?',
            a: 'Oui. WeChatFerry expose les messages de groupe avec l\'ID de la salle. Modifiez le gestionnaire `on_message` pour vérifier `msg.roomid` et filtrer dans quels groupes le bot doit répondre. Ajoutez un mot-clé déclencheur pour éviter de répondre à tous les messages du groupe.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Comment créer un bot WeChat avec un LLM local ?', acceptedAnswer: { '@type': 'Answer', text: 'Utilisez WeChatFerry (Windows) connecté à Ollama via HTTP API. Temps de configuration : 30–60 minutes avec Python.' } },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      inLanguage: 'fr',
      name: 'Créer un bot WeChat avec un LLM local',
      step: [
        { '@type': 'HowToStep', name: 'Installer Ollama et télécharger Qwen3 8B', text: 'Téléchargez Ollama et exécutez : ollama pull qwen3:8b' },
        { '@type': 'HowToStep', name: 'Se connecter à WeChat PC', text: 'Ouvrez WeChat sous Windows et gardez-le connecté' },
        { '@type': 'HowToStep', name: 'Installer WeChatFerry', text: 'pip install wcferry' },
        { '@type': 'HowToStep', name: 'Créer le gestionnaire de messages Python', text: 'Écrivez le code du bot pour router les messages WeChat vers l\'API Ollama' },
        { '@type': 'HowToStep', name: 'Tester et exécuter comme service', text: 'Testez avec un message à vous-même, puis exécutez comme service Windows en arrière-plan' },
      ],
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'Bot WeChat avec LLM local : assistant personnel 2026', url: 'https://www.promptquorum.com/fr/power-local-llm/wechat-bot-local-llm-personal-assistant-2026', inLanguage: 'fr', author: { '@type': 'Organization', name: 'PromptQuorum' }, datePublished: '2026-05-26', dateModified: '2026-07-14' },
    relatedReading: {
      items: [
        "[Guide d'intégration WeChat + LLM local — 3 patterns](/fr/power-local-llm/wechat-local-llm-integration-2026) — webhook, WeChatFerry et serveur mini PC pour développeurs",
        "[Agents IA locaux avec MCP 2026](/fr/power-local-llm/local-ai-agents-with-mcp-2026) — étendre votre LLM local avec des outils et de l'automatisation",
        '[Meilleur mini PC pour serveur Ollama toujours actif](/fr/prompt-bites/best-mini-pc-for-ollama-server-always-on) — options matérielles pour un bot WeChat 24h/24',
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Productivity & Knowledge Tools',
    title: 'ローカルLLMでWeChatボット：個人アシスタント 2026年版',
    seoTitle: 'WeChatFerry + Ollamaで作るWeChat個人アシスタント完全ガイド 2026年版',
    metaDescription: '2026年版ガイド：WeChatFerryとOllamaを組み合わせ、Windows上でWeChat個人アシスタントボットを構築する手順を詳解。ローカルLLM（Qwen3 8B推奨）で全データがデバイス内に留まりクラウドAPIへのデータ送信がゼロ。Pythonで30〜60分の構築時間。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**WeChatFerry + OllamaをWindowsで使えば、2026年にローカルLLM（Qwen3 8B推奨）を活用したWeChat個人アシスタントボットを構築できます。全データがローカルに留まり、クラウドAPIへの送信は一切ありません。**',
    quickAnswerTop: {
      ja: {
        question: 'ローカルLLMでWeChatボットを構築する方法は？',
        answer: 'WeChatFerry（Windows）でWeChat PCクライアントにフックし、HTTP APIでOllamaに接続、受信メッセージをローカルLLMにルーティングします。セットアップ時間：30〜60分。',
        bullets: [
          'WeChatFerry：2026年ベストWindowsベースWeChatボットフレームワーク',
          'Ollama：ローカルLLMバックエンド（中国語にはQwen3 8B推奨）',
          'Pythonブリッジ：メッセージルーティングと応答フォーマット',
          'コンテキストウィンドウ：複数ターンの会話履歴を保持',
          'プライバシー：全データがローカル、クラウドAPIコールなし',
        ],
        updatedDate: '2026-07',
      },
    },
    snippetBlocks: [
      { type: 'one-sentence', text: 'WeChatFerryとOllamaをWindowsで使い、WeChat個人アシスタントボットをローカルLLMで構築——データは外部に送信されません。' },
      { type: 'plain-terms', text: 'このガイドでは、WeChatをローカルAIモデルに接続し、WeChatアプリ内でメッセージへの自動返信を実現する方法を説明します。' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'WeChatFerry + Ollama：2026年のローカルWeChatボット推奨スタック',
          'Qwen3 8B：中国語WeChat応答の最良ローカルモデル',
          'Windows必須：WeChatFerryはWindows WeChat PCクライアントへのフック',
          'セットアップ時間：Pythonに慣れていれば30〜60分',
          'クラウドAPIなし：全推論がローカルで完結',
          'WeChat利用規約：自動ボット禁止——個人利用のみ',
        ],
      },
      overview: {
        heading: '本ガイドで構築するもの',
        body: '本ガイドでは、WeChat内に以下を行う個人AIアシスタントを構築する手順を説明します：\n\n1. WeChatメッセージをリアルタイムで監視\n2. 受信メッセージをローカルOllamaモデルに送信\n3. 3〜10秒以内にAI生成の返信を返す\n4. 複数ターンにわたって会話コンテキストを維持\n5. キーワード（例："@ai"）でトリガーし、すべてのメッセージへの応答を回避\n\nセットアップはWindows PCまたはWindows仮想マシン上で動作します。macOSはWeChatFerryでサポートされていません。ローカルLLMはOllama経由で動作します——クラウドAPIキーは不要です。',
        image: '/images/wechat-bot-architecture-flow-en.svg',
        imageCaption: 'WeChatボットのアーキテクチャ：WeChatメッセージがWeChatFerry（WindowsのDLLインジェクション）をトリガーし、Pythonブリッジ経由でQwen3:8bを実行するOllamaにルーティング、3〜10秒で返信——5段階すべてがローカルで完結しクラウドAPI呼び出しはありません。',
      },
      requirements: {
        heading: '必要条件',
        body: '開始前に必要なハードウェアとソフトウェア：\n\n- **Windows 10/11**（WeChatFerryの要件）\n- **WeChat PCクライアント** — WeChat 3.9.xでテスト済み\n- **Python 3.10+**\n- 同一マシンに**Ollama**をインストール\n- **最低8GB RAM**（7Bモデルの円滑な動作には16GB推奨）\n- Qwen3 8Bのモデル重みに**6〜8GBのディスク容量**\n\n推奨モデル：**Qwen3:8b** — 優れた中国語品質、7Bパラメータは8GB VRAMに収まるか、16GB RAMのCPUで許容可能な速度で動作します。',
      },
      installation: {
        heading: 'ステップバイステップのインストール',
        numberedItems: [
          {
            title: 'Ollamaをインストールし、Qwen3 8Bを取得',
            whyItMatters: 'ollama.comからOllamaをダウンロードして実行：`ollama pull qwen3:8b`',
          },
          {
            title: 'WeChat PCにログイン',
            whyItMatters: 'Windows上でWeChatを開き、QRコードをスキャンしてログイン。バックグラウンドでログイン状態を維持したまま実行してください。',
          },
          {
            title: 'WeChatFerryをインストール',
            whyItMatters: 'pip経由でインストール：`pip install wcferry`。WeChatFerryはWeChatプロセスに注入され、メッセージAPIを公開します。',
          },
          {
            title: 'Pythonメッセージハンドラーを作成',
            whyItMatters: 'WeChatFerryクライアント、OllamaのHTTP API呼び出し、メッセージルーティングロジックを含む`wechat_bot.py`を作成します。',
          },
          {
            title: '自分宛メッセージでテスト',
            whyItMatters: '"@ai"で始まるWeChatメッセージを自分自身に送信し、ボットが10秒以内に応答することを確認します。',
          },
          {
            title: '会話履歴を追加',
            whyItMatters: '複数ターンの会話コンテキストを可能にするため、連絡先ごとの直近10件のメッセージをdictに保存します。',
          },
          {
            title: 'バックグラウンドサービスとして実行',
            whyItMatters: 'NSSM（Non-Sucking Service Manager）を使用し、Pythonスクリプトを自動起動するWindowsサービスとして実行します。',
          },
        ],
      },
      codeExample: {
        heading: 'コアとなるPythonコード',
        body: '最小限の動作するボットコードは、メッセージ受信にWeChatFerryを、応答生成にOllamaのHTTP APIを使用します：\n\n```python\nimport requests\nfrom wcferry import Wcf, WxMsg\n\nOLLAMA_URL = "http://localhost:11434/api/chat"\nMODEL = "qwen3:8b"\nTRIGGER = "@ai"\n\nconversation_history: dict[str, list] = {}\n\ndef ask_ollama(contact_id: str, user_message: str) -> str:\n    if contact_id not in conversation_history:\n        conversation_history[contact_id] = []\n    history = conversation_history[contact_id]\n    history.append({"role": "user", "content": user_message})\n    # keep last 10 turns\n    if len(history) > 20:\n        history = history[-20:]\n    conversation_history[contact_id] = history\n    response = requests.post(OLLAMA_URL, json={\n        "model": MODEL,\n        "messages": history,\n        "stream": False\n    })\n    reply = response.json()["message"]["content"]\n    history.append({"role": "assistant", "content": reply})\n    return reply\n\ndef on_message(msg: WxMsg):\n    if msg.type == 1 and msg.content.startswith(TRIGGER):\n        user_text = msg.content[len(TRIGGER):].strip()\n        reply = ask_ollama(msg.sender, user_text)\n        wcf.send_text(reply, msg.sender)\n\nwcf = Wcf()\nwcf.enable_receiving_msg()\nfor msg in wcf.get_msgs():\n    on_message(msg)\n```',
      },
      modelChoice: {
        heading: '中国語WeChat会話向けの最良ローカルモデル',
        body: 'モデル選択は中国語メッセージの応答品質に大きく影響します。',
        image: '/images/wechat-bot-model-speed-chinese-en.svg',
        imageCaption: '中国語WeChat応答のモデル別CPU速度：Qwen3:3bが最速で8〜12 tok/s、Qwen3:8bは品質と速度のバランスが良く3〜5 tok/s、Llama3.1:8bは同速度で中国語品質はやや劣り、Qwen3:14bは最高品質で1〜2 tok/s。',
        columns: ['モデル', 'サイズ', '中国語品質', '速度（CPU）', '速度（8GB VRAM）'],
        rows: [
          { 'モデル': 'Qwen3:8b', 'サイズ': '4.7GB', '中国語品質': '優秀', '速度（CPU）': '3–5 tok/s', '速度（8GB VRAM）': '30–45 tok/s' },
          { 'モデル': 'Qwen3:14b', 'サイズ': '9GB', '中国語品質': '最良', '速度（CPU）': '1–2 tok/s', '速度（8GB VRAM）': '15–20 tok/s' },
          { 'モデル': 'Qwen3:3b', 'サイズ': '2GB', '中国語品質': '良好', '速度（CPU）': '8–12 tok/s', '速度（8GB VRAM）': '60+ tok/s' },
          { 'モデル': 'Llama3.1:8b', 'サイズ': '4.7GB', '中国語品質': '普通', '速度（CPU）': '3–5 tok/s', '速度（8GB VRAM）': '30–45 tok/s' },
        ],
      },
      limitations: {
        heading: '制限事項とリスク',
        body: '**WeChat利用規約：** WeChatの利用規約は自動化されたボット、スクレイパー、サードパーティクライアントを禁止しています。WeChatFerryの使用は、WeChatの不正検知システムが検出した場合、アカウント停止につながる可能性があります。この構成は個人の生産性向上のみに使用してください——大量送信、マーケティング、商用自動化には使用しないでください。\n\n**Windows専用：** WeChatFerryはWeChatプロセスにフックするためWindowsのDLLインジェクションを使用します。macOSやLinuxでは動作しません。\n\n**WeChatクライアントバージョン依存：** WeChatFerryは特定のWeChat PCクライアントバージョンとの互換性を維持しています。WeChatを更新する前に、WeChatFerryのGitHubリポジトリで対応バージョン一覧を確認してください。\n\n**レイテンシ：** 7BモデルでのCPUのみの推論は応答ごとに5〜15秒かかり、チャットでは遅く感じられることがあります。8GB GPUがあればこれを1〜3秒に短縮できます。',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'WeChatボットはMacで動作しますか？',
            a: 'いいえ。WeChatFerryはWindowsが必須で、Windows WeChat PCクライアントへのDLLインジェクションを使用します。macOSユーザーはParallels等の仮想マシンでWindowsを動作させることができます。',
          },
          {
            q: 'ボットを使うとWeChatアカウントが凍結されるリスクはありますか？',
            a: 'WeChatは利用規約で自動化されたボットを禁止しています。自動化ツールの使用が検出されたアカウントは、一時停止または永久凍結のリスクがあります。低頻度の個人利用のみに留めてください。',
          },
          {
            q: '中国語WeChatメッセージに最良のOllamaモデルは？',
            a: 'Qwen3 8Bが品質と速度の最良バランス——優れた中国語理解力、4.7GBで8GB VRAMに収まり、GPUがあれば1〜3秒で応答します。',
          },
          {
            q: 'ボットはグループチャットを処理できますか？',
            a: 'はい。WeChatFerryはルームIDとともにグループメッセージを公開します。`on_message`ハンドラーを修正して`msg.roomid`を確認し、ボットが応答すべきグループをフィルタリングしてください。すべてのグループメッセージに応答しないよう、トリガーキーワードを追加してください。',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'ローカルLLMでWeChatボットを構築する方法は？', acceptedAnswer: { '@type': 'Answer', text: 'WeChatFerry（Windows）でWeChatにフックし、OllamaにHTTP APIで接続します。セットアップ時間：30〜60分。' } },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      inLanguage: 'ja',
      name: 'ローカルLLMでWeChatボットを構築する',
      step: [
        { '@type': 'HowToStep', name: 'Ollamaをインストールし、Qwen3 8Bを取得', text: 'Ollamaをダウンロードして実行：ollama pull qwen3:8b' },
        { '@type': 'HowToStep', name: 'WeChat PCにログイン', text: 'Windows上でWeChatを開き、ログイン状態を維持' },
        { '@type': 'HowToStep', name: 'WeChatFerryをインストール', text: 'pip install wcferry' },
        { '@type': 'HowToStep', name: 'Pythonメッセージハンドラーを作成', text: 'WeChatメッセージをOllama APIにルーティングするボットコードを作成' },
        { '@type': 'HowToStep', name: 'テストしてサービスとして実行', text: '自分宛メッセージでテストし、その後Windowsバックグラウンドサービスとして実行' },
      ],
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'ローカルLLMでWeChatボット：個人アシスタント 2026年版', url: 'https://www.promptquorum.com/ja/power-local-llm/wechat-bot-local-llm-personal-assistant-2026', inLanguage: 'ja', author: { '@type': 'Organization', name: 'PromptQuorum' }, datePublished: '2026-05-26', dateModified: '2026-07-14' },
    relatedReading: {
      items: [
        '[WeChat ローカルLLM統合ガイド — 3つの統合パターン](/ja/power-local-llm/wechat-local-llm-integration-2026) — 開発者向けWebhook、WeChatFerry、ミニPCサーバーパターン',
        '[MCP対応ローカルAIエージェント2026](/ja/power-local-llm/local-ai-agents-with-mcp-2026) — ツール呼び出しと自動化でローカルLLMをWeChat以外にも拡張',
        '[Ollamaサーバー向けベストミニPC（常時稼働）](/ja/prompt-bites/best-mini-pc-for-ollama-server-always-on) — 24時間WeChatボットサーバーのハードウェア選択',
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Productivity & Knowledge Tools',
    title: '用本地大模型搭建微信机器人：私人助理 2026',
    seoTitle: '本地大模型WeChat机器人实战 2026：WeChatFerry + Ollama完整配置教程',
    metaDescription: '2026年微信私人助理机器人完整搭建教程：使用WeChatFerry在Windows上钩入微信PC客户端，搭配Ollama本地大模型（推荐Qwen3 8B Q4量化版）自动处理私信与群聊。全程本地推理，无需云端API，约30–60分钟完成部署。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**2026年可用WeChatFerry + Ollama在Windows PC上搭建微信私人助理机器人——本地大模型（推荐Qwen3 8B），无需云端API，所有数据留在本地。**',
    quickAnswerTop: {
      zh: {
        question: '如何用本地大模型搭建微信机器人？',
        answer: '使用WeChatFerry（Windows）注入微信PC客户端，通过HTTP API对接Ollama，将收到的微信消息路由给本地大模型。全程配置时间约30–60分钟。',
        bullets: [
          'WeChatFerry：2026年最佳Windows微信机器人框架',
          'Ollama：本地大模型后端（中文推荐Qwen3 8B）',
          'Python桥接：消息路由与回复格式化',
          '上下文窗口：保存对话历史支持多轮对话',
          '隐私保护：所有数据留在本地，无云端API调用',
        ],
        updatedDate: '2026-07',
      },
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: '用WeChatFerry和Ollama在Windows上搭建微信私人助理机器人——本地大模型运行，数据不出本地。',
      },
      {
        type: 'plain-terms',
        text: '本教程介绍如何将微信连接到本地AI模型，实现在微信APP内自动回复消息、回答问题，充当你的私人助理。',
      },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'WeChatFerry + Ollama：2026年推荐的本地微信机器人技术栈',
          'Qwen3 8B：中文微信对话的最佳本地模型',
          '仅支持Windows：WeChatFerry注入微信PC客户端（Windows专属）',
          '配置时间：熟悉Python的用户约30–60分钟',
          '无云端API：全部推理在本地完成',
          '风险提示：微信用户协议禁止自动化机器人——仅限个人使用',
        ],
      },
      overview: {
        heading: '本教程搭建的功能',
        body: '本教程将帮助你在微信内搭建一个AI私人助理，功能如下：\n\n1. 实时监控你的微信消息\n2. 将传入消息发送给本地Ollama模型\n3. 在3–10秒内返回AI生成的回复\n4. 跨多轮对话保持上下文\n5. 通过关键词触发（如"@ai"），避免对所有消息自动回复',
        image: '/images/wechat-bot-architecture-flow-en.svg',
        imageCaption: '微信机器人架构：微信消息触发WeChatFerry（Windows DLL注入），通过Python桥接路由至运行Qwen3:8b的Ollama，3–10秒内返回回复——全部五个环节均在本地运行，无需调用云端API。',
      },
      requirements: {
        heading: '前置要求',
        body: '开始前需要准备的硬件与软件：\n\n- **Windows 10/11**（WeChatFerry的必需环境）\n- **微信PC客户端** — 已在WeChat 3.9.x上测试\n- **Python 3.10+**\n- 同一台机器上安装**Ollama**\n- **至少8GB内存**（7B模型流畅运行推荐16GB）\n- Qwen3 8B模型权重需要**6–8GB磁盘空间**\n\n推荐模型：**Qwen3:8b** — 中文质量出色，70亿参数可装入8GB显存，或在16GB内存的CPU上以可接受速度运行。',
      },
      installation: {
        heading: '分步安装指南',
        numberedItems: [
          {
            title: '安装Ollama并拉取Qwen3 8B',
            whyItMatters: '从ollama.com下载Ollama并运行：`ollama pull qwen3:8b`',
          },
          {
            title: '登录微信PC客户端',
            whyItMatters: '在Windows上打开微信并扫码登录，保持登录状态并在后台运行。',
          },
          {
            title: '安装WeChatFerry',
            whyItMatters: '通过pip安装：`pip install wcferry`。WeChatFerry会注入微信进程以暴露消息API。',
          },
          {
            title: '创建Python消息处理程序',
            whyItMatters: '创建`wechat_bot.py`，包含WeChatFerry客户端、Ollama HTTP API调用和消息路由逻辑。',
          },
          {
            title: '发送自我消息测试',
            whyItMatters: '给自己发一条以"@ai"开头的微信消息，确认机器人在10秒内回复。',
          },
          {
            title: '添加对话历史记录',
            whyItMatters: '将每个联系人最近10条消息存入字典，以支持多轮对话上下文。',
          },
          {
            title: '作为后台服务运行',
            whyItMatters: '使用NSSM（Non-Sucking Service Manager）将Python脚本作为可自动启动的Windows服务运行。',
          },
        ],
      },
      codeExample: {
        heading: '核心Python代码',
        body: '最简可用的机器人代码使用WeChatFerry接收消息，使用Ollama HTTP API生成回复：\n\n```python\nimport requests\nfrom wcferry import Wcf, WxMsg\n\nOLLAMA_URL = "http://localhost:11434/api/chat"\nMODEL = "qwen3:8b"\nTRIGGER = "@ai"\n\nconversation_history: dict[str, list] = {}\n\ndef ask_ollama(contact_id: str, user_message: str) -> str:\n    if contact_id not in conversation_history:\n        conversation_history[contact_id] = []\n    history = conversation_history[contact_id]\n    history.append({"role": "user", "content": user_message})\n    # keep last 10 turns\n    if len(history) > 20:\n        history = history[-20:]\n    conversation_history[contact_id] = history\n    response = requests.post(OLLAMA_URL, json={\n        "model": MODEL,\n        "messages": history,\n        "stream": False\n    })\n    reply = response.json()["message"]["content"]\n    history.append({"role": "assistant", "content": reply})\n    return reply\n\ndef on_message(msg: WxMsg):\n    if msg.type == 1 and msg.content.startswith(TRIGGER):\n        user_text = msg.content[len(TRIGGER):].strip()\n        reply = ask_ollama(msg.sender, user_text)\n        wcf.send_text(reply, msg.sender)\n\nwcf = Wcf()\nwcf.enable_receiving_msg()\nfor msg in wcf.get_msgs():\n    on_message(msg)\n```',
      },
      modelChoice: {
        heading: '微信中文对话的最佳本地模型',
        body: '模型选择对中文消息的回复质量影响显著。',
        image: '/images/wechat-bot-model-speed-chinese-en.svg',
        imageCaption: '微信中文回复各模型CPU速度对比：Qwen3:3b最快达8–12 tok/s，Qwen3:8b在质量与速度间取得最佳平衡为3–5 tok/s，Llama3.1:8b速度相同但中文能力较弱，Qwen3:14b质量最佳但仅1–2 tok/s。',
        columns: ['模型', '大小', '中文质量', 'CPU速度', '8GB显存速度'],
        rows: [
          { '模型': 'Qwen3:8b', '大小': '4.7 GB', '中文质量': '优秀', 'CPU速度': '3–5 tok/s', '8GB显存速度': '30–45 tok/s' },
          { '模型': 'Qwen3:14b', '大小': '9 GB', '中文质量': '最佳', 'CPU速度': '1–2 tok/s', '8GB显存速度': '15–20 tok/s' },
          { '模型': 'Qwen3:3b', '大小': '2 GB', '中文质量': '良好', 'CPU速度': '8–12 tok/s', '8GB显存速度': '60+ tok/s' },
          { '模型': 'Llama3.1:8b', '大小': '4.7 GB', '中文质量': '一般', 'CPU速度': '3–5 tok/s', '8GB显存速度': '30–45 tok/s' },
        ],
      },
      limitations: {
        heading: '限制与风险',
        body: '**微信用户协议：** 微信用户协议禁止自动化机器人、爬虫和第三方客户端。若被微信的反自动化系统检测到，使用WeChatFerry可能导致账号被封。此方案仅限个人生产力用途——不要用于群发消息、营销或商业自动化。\n\n**仅支持Windows：** WeChatFerry通过Windows DLL注入钩入微信进程，无法在macOS或Linux上运行。\n\n**微信客户端版本依赖：** WeChatFerry仅与特定版本的微信PC客户端保持兼容。更新微信前，请在WeChatFerry的GitHub仓库中确认兼容版本列表。\n\n**延迟：** 仅使用CPU运行7B模型时，每次回复需要5–15秒，在聊天中可能显得较慢。使用8GB显存的GPU可将延迟降至1–3秒。',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '这个微信机器人在Mac上能用吗？',
            a: '不能。WeChatFerry需要Windows系统，通过DLL注入微信PC客户端。Mac用户可以在Parallels等虚拟机中运行Windows来使用此方案。',
          },
          {
            q: '微信机器人有被封号风险吗？',
            a: '微信用户协议禁止自动化机器人。使用自动化工具的账号存在被临时封禁或永久封号的风险。建议仅用于个人低频使用场景，不要用于群发、营销或商业自动化。',
          },
          {
            q: '推荐用哪个Ollama模型处理中文微信消息？',
            a: 'Qwen3 8B是质量与速度的最佳平衡——中文理解能力优秀，4.7GB可装入8GB显存，有GPU时回复延迟仅1–3秒。',
          },
          {
            q: '机器人能处理微信群消息吗？',
            a: '可以。WeChatFerry会暴露群消息及群ID。修改on_message处理函数，通过msg.roomid判断要响应的群，并加入触发词避免对所有群消息自动回复。',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '如何用本地大模型搭建微信机器人？',
          acceptedAnswer: { '@type': 'Answer', text: '使用WeChatFerry（Windows）注入微信PC客户端，通过HTTP API对接Ollama，配置时间约30–60分钟。' },
        },
        {
          '@type': 'Question',
          name: '推荐用哪个Ollama模型处理中文微信消息？',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 8B是最佳选择——中文理解优秀，4.7GB可装入8GB显存，GPU推理延迟1–3秒。' },
        },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      inLanguage: 'zh',
      name: '用本地大模型搭建微信机器人',
      step: [
        { '@type': 'HowToStep', name: '安装Ollama并拉取Qwen3 8B', text: '下载Ollama并运行：ollama pull qwen3:8b' },
        { '@type': 'HowToStep', name: '登录微信PC客户端', text: '在Windows上打开微信并保持登录' },
        { '@type': 'HowToStep', name: '安装WeChatFerry', text: 'pip install wcferry' },
        { '@type': 'HowToStep', name: '创建Python消息处理程序', text: '编写将微信消息路由到Ollama API的机器人代码' },
        { '@type': 'HowToStep', name: '测试并作为服务运行', text: '先用自我消息测试，再作为Windows后台服务运行' },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '用本地大模型搭建微信机器人：私人助理 2026',
      url: 'https://www.promptquorum.com/zh/power-local-llm/wechat-bot-local-llm-personal-assistant-2026',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      datePublished: '2026-05-26',
      dateModified: '2026-07-14',
      'proficiencyLevel': 'Intermediate',
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Productivity & Knowledge Tools',
    title: 'Bot de WeChat con LLM local: asistente personal 2026',
    seoTitle: 'Bot de WeChat con LLM local: guía de asistente personal 2026',
    metaDescription: 'Crea un bot asistente personal en WeChat con LLM local en 2026: WeChatFerry + Ollama en Windows. Totalmente privado, sin API en la nube y en tiempo real.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**En 2026 puedes crear un bot asistente personal en WeChat usando WeChatFerry + Ollama. El bot se ejecuta completamente en tu PC con Windows, usa un LLM local (Qwen3 8B o 14B) y responde en tiempo real a los mensajes de WeChat sin enviar datos a ninguna API en la nube.**',
    quickAnswerTop: {
      es: {
        question: '¿Cómo creo un bot de WeChat con un LLM local?',
        answer: 'Usa WeChatFerry (Windows) para conectarte al cliente WeChat PC, enlázalo a Ollama mediante HTTP API y enruta los mensajes entrantes al LLM local. Tiempo total de configuración: 30–60 minutos.',
        bullets: [
          'WeChatFerry: el mejor framework de bot WeChat para Windows en 2026',
          'Ollama: backend de LLM local (se recomienda Qwen3 8B para chino)',
          'Puente en Python: gestión del enrutamiento de mensajes y formato de respuestas',
          'Ventana de contexto: almacena el historial de conversación para chats de varios turnos',
          'Privacidad: todos los datos permanecen en tu máquina local, sin llamadas a API en la nube',
        ],
        updatedDate: '2026-07',
      },
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'Crea un bot asistente personal en WeChat con WeChatFerry y Ollama en Windows — el LLM se ejecuta localmente y ningún dato sale de tu máquina.',
      },
      {
        type: 'plain-terms',
        text: 'Esta guía muestra cómo conectar WeChat a un modelo de IA local para que responda automáticamente a mensajes, conteste preguntas y actúe como tu asistente personal dentro de la app de WeChat.',
      },
    ],
    affiliateLinks: [
      {
        productName: 'Minisforum UM890 Pro (servidor de IA local)',
        url: 'https://search.jd.com/Search?keyword=Minisforum+UM890+Pro',
        productCategory: 'hardware',
      },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'WeChatFerry + Ollama: la combinación recomendada para un bot local de WeChat en 2026',
          'Qwen3 8B: el mejor modelo local para respuestas en WeChat en chino',
          'Solo Windows: WeChatFerry se inyecta en el cliente WeChat PC (solo Windows)',
          'Tiempo de configuración: 30–60 minutos para alguien familiarizado con Python',
          'Sin API en la nube: toda la inferencia se ejecuta localmente, ningún mensaje se envía al exterior',
          'Riesgo: los Términos de Servicio de WeChat prohíben los bots automatizados — úsalo solo como asistente personal',
        ],
      },
      overview: {
        heading: 'Qué construye esta guía',
        body: 'Esta guía explica paso a paso cómo crear un asistente de IA personal dentro de WeChat que:\n\n1. Monitorea tus mensajes de WeChat en tiempo real\n2. Envía los mensajes entrantes a un modelo Ollama local\n3. Devuelve respuestas generadas por IA en 3–10 segundos\n4. Mantiene el contexto de la conversación a lo largo de varios turnos\n5. Puede activarse con una palabra clave (por ejemplo, "@ai") para evitar responder a todos los mensajes\n\nLa configuración se ejecuta en un PC con Windows o en una máquina virtual Windows. macOS no es compatible con WeChatFerry. El LLM local se ejecuta a través de Ollama — no se necesitan claves de API en la nube.',
        image: '/images/wechat-bot-architecture-flow-en.svg',
        imageCaption: 'Arquitectura del bot de WeChat: el mensaje de WeChat activa WeChatFerry (inyección de DLL en Windows), se enruta mediante un puente en Python a Ollama ejecutando Qwen3:8b, con respuesta en 3–10 segundos — las cinco etapas se ejecutan localmente sin llamadas a API en la nube.',
      },
      requirements: {
        heading: 'Requisitos',
        body: 'Hardware y software necesarios antes de empezar:\n\n- **Windows 10/11** (requisito de WeChatFerry)\n- **Cliente WeChat PC** — probado con WeChat 3.9.x\n- **Python 3.10+**\n- **Ollama** instalado en la misma máquina\n- **8 GB de RAM como mínimo** (se recomiendan 16 GB para un rendimiento fluido con el modelo 7B)\n- **6–8 GB de espacio en disco** para los pesos del modelo Qwen3 8B\n\nModelo recomendado: **Qwen3:8b** — excelente calidad en chino, los 7B parámetros caben en 8 GB de VRAM o se ejecutan a velocidad aceptable en CPU con 16 GB de RAM.',
      },
      installation: {
        heading: 'Instalación paso a paso',
        numberedItems: [
          {
            title: 'Instalar Ollama y descargar Qwen3 8B',
            whyItMatters: 'Descarga Ollama desde ollama.com y ejecuta: `ollama pull qwen3:8b`',
          },
          {
            title: 'Iniciar sesión en WeChat PC',
            whyItMatters: 'Abre WeChat en Windows y escanea el código QR para iniciar sesión. Mantenlo conectado y ejecutándose en segundo plano.',
          },
          {
            title: 'Instalar WeChatFerry',
            whyItMatters: 'Instala mediante pip: `pip install wcferry`. WeChatFerry se inyecta en el proceso de WeChat para exponer una API de mensajes.',
          },
          {
            title: 'Crear el manejador de mensajes en Python',
            whyItMatters: 'Crea `wechat_bot.py` con el cliente WeChatFerry, las llamadas a la HTTP API de Ollama y la lógica de enrutamiento de mensajes.',
          },
          {
            title: 'Probar con un mensaje a ti mismo',
            whyItMatters: 'Envíate un mensaje de WeChat que empiece por "@ai" y verifica que el bot responde en menos de 10 segundos.',
          },
          {
            title: 'Añadir historial de conversación',
            whyItMatters: 'Almacena los últimos 10 mensajes por contacto en un dict para habilitar el contexto de conversación de varios turnos.',
          },
          {
            title: 'Ejecutar como servicio en segundo plano',
            whyItMatters: 'Usa NSSM (Non-Sucking Service Manager) para ejecutar el script Python como un servicio de Windows que se inicia automáticamente.',
          },
        ],
      },
      codeExample: {
        heading: 'Código Python esencial',
        body: 'El código mínimo funcional del bot usa WeChatFerry para recibir mensajes y la HTTP API de Ollama para generar respuestas:\n\n```python\nimport requests\nfrom wcferry import Wcf, WxMsg\n\nOLLAMA_URL = "http://localhost:11434/api/chat"\nMODEL = "qwen3:8b"\nTRIGGER = "@ai"\n\nconversation_history: dict[str, list] = {}\n\ndef ask_ollama(contact_id: str, user_message: str) -> str:\n    if contact_id not in conversation_history:\n        conversation_history[contact_id] = []\n    history = conversation_history[contact_id]\n    history.append({"role": "user", "content": user_message})\n    # keep last 10 turns\n    if len(history) > 20:\n        history = history[-20:]\n    conversation_history[contact_id] = history\n    response = requests.post(OLLAMA_URL, json={\n        "model": MODEL,\n        "messages": history,\n        "stream": False\n    })\n    reply = response.json()["message"]["content"]\n    history.append({"role": "assistant", "content": reply})\n    return reply\n\ndef on_message(msg: WxMsg):\n    if msg.type == 1 and msg.content.startswith(TRIGGER):\n        user_text = msg.content[len(TRIGGER):].strip()\n        reply = ask_ollama(msg.sender, user_text)\n        wcf.send_text(reply, msg.sender)\n\nwcf = Wcf()\nwcf.enable_receiving_msg()\nfor msg in wcf.get_msgs():\n    on_message(msg)\n```',
      },
      modelChoice: {
        heading: 'Mejores modelos locales para conversaciones de WeChat en chino',
        body: 'La elección del modelo afecta significativamente la calidad de las respuestas a mensajes en chino.',
        image: '/images/wechat-bot-model-speed-chinese-en.svg',
        imageCaption: 'Velocidad de CPU por modelo para respuestas de WeChat en chino: Qwen3:3b es el más rápido con 8–12 tok/s, Qwen3:8b equilibra calidad y velocidad con 3–5 tok/s, Llama3.1:8b iguala la velocidad con peor chino, y Qwen3:14b ofrece la mejor calidad a 1–2 tok/s.',
        columns: ['Modelo', 'Tamaño', 'Calidad en chino', 'Velocidad (CPU)', 'Velocidad (8 GB VRAM)'],
        rows: [
          { 'Modelo': 'Qwen3:8b', 'Tamaño': '4,7 GB', 'Calidad en chino': 'Excelente', 'Velocidad (CPU)': '3–5 tok/s', 'Velocidad (8 GB VRAM)': '30–45 tok/s' },
          { 'Modelo': 'Qwen3:14b', 'Tamaño': '9 GB', 'Calidad en chino': 'Óptima', 'Velocidad (CPU)': '1–2 tok/s', 'Velocidad (8 GB VRAM)': '15–20 tok/s' },
          { 'Modelo': 'Qwen3:3b', 'Tamaño': '2 GB', 'Calidad en chino': 'Buena', 'Velocidad (CPU)': '8–12 tok/s', 'Velocidad (8 GB VRAM)': '60+ tok/s' },
          { 'Modelo': 'Llama3.1:8b', 'Tamaño': '4,7 GB', 'Calidad en chino': 'Moderada', 'Velocidad (CPU)': '3–5 tok/s', 'Velocidad (8 GB VRAM)': '30–45 tok/s' },
        ],
      },
      limitations: {
        heading: 'Limitaciones y riesgos',
        body: '**Términos de Servicio de WeChat:** Los Términos de Servicio de WeChat prohíben los bots automatizados, los scrapers y los clientes de terceros. El uso de WeChatFerry podría acarrear la suspensión de la cuenta si los sistemas antifraude de WeChat lo detectan. Usa esta configuración solo para productividad personal — no para mensajería masiva, marketing o automatización comercial.\n\n**Solo Windows:** WeChatFerry utiliza inyección de DLL en Windows para conectarse al proceso de WeChat. No funciona en macOS ni en Linux.\n\n**Dependencia de la versión del cliente WeChat:** WeChatFerry mantiene compatibilidad con versiones específicas del cliente WeChat PC. Verifica la lista de versiones compatibles en el repositorio de GitHub de WeChatFerry antes de actualizar WeChat.\n\n**Latencia:** La inferencia solo en CPU con un modelo 7B tarda entre 5 y 15 segundos por respuesta, lo que puede resultar lento en el chat. Una GPU de 8 GB reduce ese tiempo a 1–3 segundos.',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '¿Este bot de WeChat funciona en Mac?',
            a: 'No. WeChatFerry requiere Windows y se conecta al cliente WeChat para Windows mediante inyección de DLL. Los usuarios de macOS pueden ejecutar Windows en una máquina virtual (Parallels o VMware Fusion) para usar esta configuración.',
          },
          {
            q: '¿Mi cuenta de WeChat puede ser baneada por usar un bot?',
            a: 'WeChat prohíbe los bots automatizados en sus Términos de Servicio. Las cuentas detectadas usando herramientas de automatización corren el riesgo de suspensión temporal o ban permanente. Úsalo solo para productividad personal con un volumen bajo de mensajes.',
          },
          {
            q: '¿Cuál es el mejor modelo de Ollama para mensajes de WeChat en chino?',
            a: 'Qwen3 8B es el mejor equilibrio entre calidad y velocidad para respuestas en WeChat en chino — excelente comprensión del chino, suficientemente rápido en la mayoría del hardware, y el modelo de 4,7 GB cabe en 8 GB de VRAM.',
          },
          {
            q: '¿Puede el bot gestionar chats grupales?',
            a: 'Sí. WeChatFerry expone los mensajes de grupo junto con el ID de sala. Modifica el manejador `on_message` para comprobar `msg.roomid` y filtrar en qué grupos debe responder el bot. Añade una palabra clave de activación para evitar responder a todos los mensajes del grupo.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cómo creo un bot de WeChat con un LLM local?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Usa WeChatFerry (Windows) para conectarte al cliente WeChat PC, enlázalo a Ollama mediante HTTP API y enruta los mensajes entrantes al LLM local. Tiempo total de configuración: 30–60 minutos con Python.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Este bot de WeChat funciona en Mac?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. WeChatFerry requiere Windows. Los usuarios de macOS pueden ejecutar Windows en una máquina virtual (Parallels o VMware Fusion).',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuál es el mejor modelo para mensajes de WeChat en chino?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Qwen3 8B es el mejor equilibrio entre calidad y velocidad — excelente comprensión del chino, 4,7 GB caben en 8 GB de VRAM, responde en 1–3 segundos con GPU.',
          },
        },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      inLanguage: 'es',
      name: 'Crear un bot de WeChat con LLM local',
      step: [
        { '@type': 'HowToStep', name: 'Instalar Ollama y descargar Qwen3 8B', text: 'Descarga Ollama y ejecuta: ollama pull qwen3:8b' },
        { '@type': 'HowToStep', name: 'Iniciar sesión en WeChat PC', text: 'Abre WeChat en Windows y mantenlo conectado' },
        { '@type': 'HowToStep', name: 'Instalar WeChatFerry', text: 'pip install wcferry' },
        { '@type': 'HowToStep', name: 'Crear el manejador de mensajes en Python', text: 'Escribe el código del bot para enrutar mensajes de WeChat a la API de Ollama' },
        { '@type': 'HowToStep', name: 'Probar y ejecutar como servicio', text: 'Prueba con un mensaje a ti mismo, luego ejecútalo como servicio de Windows en segundo plano' },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Bot de WeChat con LLM local: asistente personal 2026',
      description: 'Crea un bot asistente personal en WeChat con WeChatFerry y Ollama en Windows — completamente local, sin API en la nube.',
      url: 'https://www.promptquorum.com/es/power-local-llm/wechat-bot-local-llm-personal-assistant-2026',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-07-01',
      'proficiencyLevel': 'Intermediate',
    },
    relatedReading: {
      items: [
        '[Guía de integración de WeChat con LLM local — 3 patrones de integración](/es/power-local-llm/wechat-local-llm-integration-2026) — patrones webhook, WeChatFerry y servidor mini PC para desarrolladores',
        '[Agentes de IA locales con MCP 2026](/es/power-local-llm/local-ai-agents-with-mcp-2026) — amplía tu LLM local con llamadas a herramientas y automatización más allá de WeChat',
        '[Mejor mini PC para servidor Ollama siempre activo](/es/prompt-bites/best-mini-pc-for-ollama-server-always-on) — opciones de hardware para ejecutar un servidor de bot WeChat 24/7',
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Productivity & Knowledge Tools',
    title: 'WeChat 봇과 로컬 LLM: 개인 비서 2026',
    seoTitle: 'WeChat 봇과 로컬 LLM: 개인 비서 가이드 2026',
    metaDescription: '2026년 로컬 LLM으로 WeChat 개인 비서 봇 만들기: Windows에서 WeChatFerry + Ollama. 완전히 개인적으로, 클라우드 API 없이 실시간으로.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**2026년 WeChatFerry + Ollama를 사용하여 WeChat에서 개인 비서 봇을 만들 수 있습니다. 봇은 Windows PC에서 완전히 실행되며, 로컬 LLM(Qwen3 8B 또는 14B)을 사용하고 클라우드 API로 데이터를 전송하지 않고 실시간으로 WeChat 메시지에 응답합니다.**',
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM으로 WeChat 봇을 어떻게 만듭니까?',
        answer: 'WeChatFerry(Windows)를 사용하여 WeChat PC 클라이언트에 연결하고, HTTP API를 통해 Ollama에 연결하고, 들어오는 메시지를 로컬 LLM으로 라우팅하십시오. 총 설정 시간: 30–60분.',
        bullets: [
          'WeChatFerry: 2026년 Windows에서 최고의 WeChat 봇 프레임워크',
          'Ollama: 로컬 LLM 백엔드(중국어에는 Qwen3 8B 권장)',
          'Python 브리지: 메시지 라우팅 및 응답 형식 관리',
          '컨텍스트 창: 다중 턴 채팅을 위한 대화 기록 저장',
          '개인 정보 보호: 모든 데이터가 로컬 기기에 유지됨, 클라우드 API 호출 없음',
        ],
        updatedDate: '2026-07',
      },
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'Windows에서 WeChatFerry와 Ollama로 WeChat 개인 비서 봇을 만드십시오 — LLM이 로컬에서 실행되며 데이터가 기기를 떠나지 않습니다.',
      },
      {
        type: 'plain-terms',
        text: '이 가이드는 WeChat을 로컬 AI 모델에 연결하여 자동으로 메시지에 응답하고, 질문에 답하고, WeChat 앱 내에서 개인 비서처럼 행동하는 방법을 보여줍니다.',
      },
    ],
    affiliateLinks: [
      {
        productName: 'Minisforum UM890 Pro (로컬 AI 서버)',
        url: 'https://search.jd.com/Search?keyword=Minisforum+UM890+Pro',
        productCategory: 'hardware',
      },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'WeChatFerry + Ollama: 2026년 로컬 WeChat 봇을 위한 권장 조합',
          'Qwen3 8B: WeChat에서 중국어 응답을 위한 최고의 로컬 모델',
          'Windows 전용: WeChatFerry는 WeChat PC 클라이언트에 주입됩니다(Windows 전용)',
          '설정 시간: Python에 익숙한 사람이 30–60분',
          '클라우드 API 없음: 모든 추론이 로컬에서 실행되며 어떤 메시지도 외부로 전송되지 않음',
          '위험: WeChat 서비스 약관이 자동화된 봇을 금지합니다 — 개인 비서로만 사용하십시오',
        ],
      },
      overview: {
        heading: '이 가이드가 만드는 것',
        body: '이 가이드는 WeChat 내에서 개인 AI 비서를 만드는 방법을 단계별로 설명합니다:\n\n1. 실시간으로 WeChat 메시지를 모니터링\n2. 들어오는 메시지를 로컬 Ollama 모델로 전송\n3. 3–10초 내에 AI 생성 응답 반환\n4. 여러 턴에 걸쳐 대화 컨텍스트 유지\n5. 모든 메시지에 응답하지 않도록 키워드(예: "@ai")로 활성화 가능\n\n설정은 Windows PC 또는 Windows 가상 머신에서 실행됩니다. macOS는 WeChatFerry와 호환되지 않습니다. 로컬 LLM은 Ollama를 통해 실행됩니다 — 클라우드 API 키가 필요하지 않습니다.',
        image: '/images/wechat-bot-architecture-flow-en.svg',
        imageCaption: 'WeChat 봇 아키텍처: WeChat 메시지가 WeChatFerry(Windows DLL 주입)를 트리거하고, Python 브리지를 거쳐 Qwen3:8b를 실행하는 Ollama로 라우팅되며, 3–10초 내에 응답합니다 — 5단계 모두 클라우드 API 호출 없이 로컬에서 실행됩니다.',
      },
      requirements: {
        heading: '요구 사항',
        body: '시작하기 전에 필요한 하드웨어 및 소프트웨어:\n\n- **Windows 10/11**(WeChatFerry 요구 사항)\n- **WeChat PC 클라이언트** — WeChat 3.9.x로 테스트됨\n- **Python 3.10+**\n- **Ollama** 동일한 기기에 설치\n- **최소 8 GB RAM**(7B 모델로 원활한 성능을 위해 16 GB 권장)\n- 모델 가중치를 위해 **6–8 GB 디스크 공간** Qwen3 8B\n\n권장 모델: **Qwen3:8b** — 훌륭한 중국어 품질, 7B 매개변수가 8 GB VRAM에 맞거나 16 GB RAM에서 허용 가능한 속도로 CPU에서 실행됩니다.',
      },
      installation: {
        heading: '단계별 설치',
        numberedItems: [
          {
            title: 'Ollama 설치 및 Qwen3 8B 다운로드',
            whyItMatters: 'ollama.com에서 Ollama를 다운로드하고 실행: `ollama pull qwen3:8b`',
          },
          {
            title: 'WeChat PC에 로그인',
            whyItMatters: 'Windows에서 WeChat을 열고 QR 코드를 스캔하여 로그인하십시오. 백그라운드에서 연결 상태를 유지하고 실행하십시오.',
          },
          {
            title: 'WeChatFerry 설치',
            whyItMatters: 'pip를 통해 설치: `pip install wcferry`. WeChatFerry는 메시지 API를 노출하기 위해 WeChat 프로세스에 주입됩니다.',
          },
          {
            title: 'Python 메시지 핸들러 생성',
            whyItMatters: 'WeChatFerry 클라이언트, Ollama HTTP API 호출, 메시지 라우팅 로직을 갖춘 `wechat_bot.py`를 만드십시오.',
          },
          {
            title: '자신에게 메시지 보내서 테스트',
            whyItMatters: '"@ai"로 시작하는 WeChat 메시지를 자신에게 보내고 봇이 10초 이내에 응답하는지 확인하십시오.',
          },
          {
            title: '대화 기록 추가',
            whyItMatters: '다중 턴 대화 컨텍스트를 활성화하기 위해 dict에 연락처별 마지막 10개 메시지를 저장하십시오.',
          },
          {
            title: '백그라운드 서비스로 실행',
            whyItMatters: 'NSSM(Non-Sucking Service Manager)을 사용하여 Python 스크립트를 자동으로 시작하는 Windows 서비스로 실행하십시오.',
          },
        ],
      },
      codeExample: {
        heading: '핵심 Python 코드',
        body: '최소한의 기능하는 봇 코드는 메시지를 받기 위해 WeChatFerry를 사용하고 응답을 생성하기 위해 Ollama HTTP API를 사용합니다:\n\n```python\nimport requests\nfrom wcferry import Wcf, WxMsg\n\nOLLAMA_URL = "http://localhost:11434/api/chat"\nMODEL = "qwen3:8b"\nTRIGGER = "@ai"\n\nconversation_history: dict[str, list] = {}\n\ndef ask_ollama(contact_id: str, user_message: str) -> str:\n    if contact_id not in conversation_history:\n        conversation_history[contact_id] = []\n    history = conversation_history[contact_id]\n    history.append({"role": "user", "content": user_message})\n    # keep last 10 turns\n    if len(history) > 20:\n        history = history[-20:]\n    conversation_history[contact_id] = history\n    response = requests.post(OLLAMA_URL, json={\n        "model": MODEL,\n        "messages": history,\n        "stream": False\n    })\n    reply = response.json()["message"]["content"]\n    history.append({"role": "assistant", "content": reply})\n    return reply\n\ndef on_message(msg: WxMsg):\n    if msg.type == 1 and msg.content.startswith(TRIGGER):\n        user_text = msg.content[len(TRIGGER):].strip()\n        reply = ask_ollama(msg.sender, user_text)\n        wcf.send_text(reply, msg.sender)\n\nwcf = Wcf()\nwcf.enable_receiving_msg()\nfor msg in wcf.get_msgs():\n    on_message(msg)\n```',
      },
      modelChoice: {
        heading: '중국어 WeChat 대화를 위한 최고의 로컬 모델',
        body: '모델 선택이 중국어 메시지 응답 품질에 크게 영향을 미칩니다.',
        image: '/images/wechat-bot-model-speed-chinese-en.svg',
        imageCaption: '중국어 WeChat 응답을 위한 모델별 CPU 속도: Qwen3:3b가 8–12 tok/s로 가장 빠르고, Qwen3:8b는 3–5 tok/s로 품질과 속도의 균형이 좋으며, Llama3.1:8b는 같은 속도지만 중국어 품질이 낮고, Qwen3:14b는 1–2 tok/s로 품질이 가장 우수합니다.',
        columns: ['모델', '크기', '중국어 품질', '속도 (CPU)', '속도 (8 GB VRAM)'],
        rows: [
          { '모델': 'Qwen3:8b', '크기': '4.7 GB', '중국어 품질': '우수', '속도 (CPU)': '3–5 tok/s', '속도 (8 GB VRAM)': '30–45 tok/s' },
          { '모델': 'Qwen3:14b', '크기': '9 GB', '중국어 품질': '최적', '속도 (CPU)': '1–2 tok/s', '속도 (8 GB VRAM)': '15–20 tok/s' },
          { '모델': 'Qwen3:3b', '크기': '2 GB', '중국어 품질': '양호', '속도 (CPU)': '8–12 tok/s', '속도 (8 GB VRAM)': '60+ tok/s' },
          { '모델': 'Llama3.1:8b', '크기': '4.7 GB', '중국어 품질': '보통', '속도 (CPU)': '3–5 tok/s', '속도 (8 GB VRAM)': '30–45 tok/s' },
        ],
      },
      limitations: {
        heading: '제한 사항 및 위험',
        body: '**WeChat 서비스 약관:** WeChat 서비스 약관은 자동화된 봇, 스크레이퍼, 타사 클라이언트를 금지합니다. WeChatFerry 사용은 WeChat의 사기 방지 시스템이 감지하면 계정 정지를 초래할 수 있습니다. 이 설정은 개인 생산성에만 사용하십시오 — 대량 메시지 발송, 마케팅, 상업적 자동화에는 사용하지 마십시오.\n\n**Windows 전용:** WeChatFerry는 WeChat 프로세스에 연결하기 위해 Windows에서 DLL 주입을 사용합니다. macOS나 Linux에서는 작동하지 않습니다.\n\n**WeChat 클라이언트 버전 의존성:** WeChatFerry는 특정 WeChat PC 클라이언트 버전과의 호환성을 유지합니다. WeChat을 업데이트하기 전에 WeChatFerry GitHub 저장소에서 지원되는 버전 목록을 확인하십시오.\n\n**지연:** 7B 모델로 CPU 전용 추론은 응답당 5–15초가 걸리며, 채팅에서 느릴 수 있습니다. 8 GB GPU는 그 시간을 1–3초로 줄입니다.',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '이 WeChat 봇이 Mac에서 작동합니까?',
            a: '아니요. WeChatFerry는 Windows가 필요하며 DLL 주입을 통해 Windows용 WeChat 클라이언트에 연결합니다. macOS 사용자는 이 설정을 사용하기 위해 가상 머신(Parallels 또는 VMware Fusion)에서 Windows를 실행할 수 있습니다.',
          },
          {
            q: '봇을 사용하면 WeChat 계정이 차단될 수 있습니까?',
            a: 'WeChat은 서비스 약관에서 자동화된 봇을 금지합니다. 자동화 도구를 사용하는 것으로 감지된 계정은 일시적 정지 또는 영구 차단의 위험이 있습니다. 낮은 메시지 볼륨으로 개인 생산성에만 사용하십시오.',
          },
          {
            q: '중국어 WeChat 메시지에 가장 좋은 Ollama 모델은 무엇입니까?',
            a: 'Qwen3 8B는 중국어 WeChat 응답을 위한 최고의 품질-속도 균형입니다 — 뛰어난 중국어 이해, 대부분의 하드웨어에서 충분히 빠르며, 4.7 GB 모델이 8 GB VRAM에 맞습니다.',
          },
          {
            q: '봇이 그룹 채팅을 처리할 수 있습니까?',
            a: '네. WeChatFerry는 방 ID와 함께 그룹 메시지를 노출합니다. `on_message` 핸들러를 수정하여 `msg.roomid`를 확인하고 봇이 응답할 그룹을 필터링하십시오. 그룹의 모든 메시지에 응답하지 않도록 트리거 키워드를 추가하십시오.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        {
          '@type': 'Question',
          name: '로컬 LLM으로 WeChat 봇을 어떻게 만듭니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WeChatFerry(Windows)를 사용하여 WeChat PC 클라이언트에 연결하고, HTTP API를 통해 Ollama에 연결하고, 들어오는 메시지를 로컬 LLM으로 라우팅하십시오. Python을 사용하여 총 설정 시간: 30–60분.',
          },
        },
        {
          '@type': 'Question',
          name: '이 WeChat 봇이 Mac에서 작동합니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '아니요. WeChatFerry는 Windows가 필요합니다. macOS 사용자는 가상 머신(Parallels 또는 VMware Fusion)에서 Windows를 실행할 수 있습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '중국어 WeChat 메시지에 가장 좋은 모델은 무엇입니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Qwen3 8B는 최고의 품질-속도 균형입니다 — 뛰어난 중국어 이해, 4.7 GB가 8 GB VRAM에 맞으며, GPU로 1–3초 내에 응답합니다.',
          },
        },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      inLanguage: 'ko',
      name: '로컬 LLM으로 WeChat 봇 만들기',
      step: [
        { '@type': 'HowToStep', name: 'Ollama 설치 및 Qwen3 8B 다운로드', text: 'Ollama를 다운로드하고 실행: ollama pull qwen3:8b' },
        { '@type': 'HowToStep', name: 'WeChat PC에 로그인', text: 'Windows에서 WeChat을 열고 연결 상태 유지' },
        { '@type': 'HowToStep', name: 'WeChatFerry 설치', text: 'pip install wcferry' },
        { '@type': 'HowToStep', name: 'Python 메시지 핸들러 생성', text: 'WeChat 메시지를 Ollama API로 라우팅하는 봇 코드 작성' },
        { '@type': 'HowToStep', name: '테스트 및 서비스로 실행', text: '자신에게 메시지를 보내 테스트한 다음 Windows 서비스로 백그라운드에서 실행' },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'WeChat 봇과 로컬 LLM: 개인 비서 2026',
      description: 'Windows에서 WeChatFerry와 Ollama로 WeChat 개인 비서 봇 만들기 — 완전히 로컬, 클라우드 API 없음.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/wechat-bot-local-llm-personal-assistant-2026',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-07-01',
      'proficiencyLevel': 'Intermediate',
    },
    relatedReading: {
      items: [
        '[WeChat 로컬 LLM 통합 가이드 — 3가지 통합 패턴](/ko/power-local-llm/wechat-local-llm-integration-2026) — 개발자를 위한 webhook, WeChatFerry, 미니 PC 서버 패턴',
        '[2026년 MCP가 있는 로컬 AI 에이전트](/ko/power-local-llm/local-ai-agents-with-mcp-2026) — WeChat을 넘어 도구 호출 및 자동화로 로컬 LLM 확장',
        '[항상 켜져 있는 Ollama 서버를 위한 최고의 미니 PC](/ko/prompt-bites/best-mini-pc-for-ollama-server-always-on) — WeChat 봇 서버를 24/7 실행하기 위한 하드웨어 옵션',
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Productivity & Knowledge Tools',
    title: 'Bot de WeChat com LLM local: assistente pessoal 2026',
    seoTitle: 'Bot de WeChat com LLM local: guia de assistente pessoal 2026',
    metaDescription: 'Crie um bot assistente pessoal no WeChat com LLM local em 2026: WeChatFerry + Ollama no Windows. Totalmente privado, sem API na nuvem e em tempo real.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Em 2026, você pode criar um bot assistente pessoal no WeChat usando WeChatFerry + Ollama. O bot é executado inteiramente no seu PC com Windows, usa um LLM local (Qwen3 8B ou 14B) e responde em tempo real às mensagens do WeChat sem enviar dados para nenhuma API na nuvem.**',
    quickAnswerTop: {
      pt: {
        question: 'Como eu crio um bot de WeChat com um LLM local?',
        answer: 'Use o WeChatFerry (Windows) para se conectar ao cliente WeChat PC, ligue-o ao Ollama via HTTP API e encaminhe as mensagens recebidas para o LLM local. Tempo total de configuração: 30–60 minutos.',
        bullets: [
          'WeChatFerry: o melhor framework de bot WeChat para Windows em 2026',
          'Ollama: backend de LLM local (recomenda-se Qwen3 8B para chinês)',
          'Ponte em Python: gerenciamento do roteamento de mensagens e formatação das respostas',
          'Janela de contexto: armazena o histórico da conversa para chats de vários turnos',
          'Privacidade: todos os dados permanecem na sua máquina local, sem chamadas a API na nuvem',
        ],
        updatedDate: '2026-07',
      },
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'Crie um bot assistente pessoal no WeChat com WeChatFerry e Ollama no Windows — o LLM é executado localmente e nenhum dado sai da sua máquina.',
      },
      {
        type: 'plain-terms',
        text: 'Este guia mostra como conectar o WeChat a um modelo de IA local para que ele responda automaticamente a mensagens, responda perguntas e atue como seu assistente pessoal dentro do app do WeChat.',
      },
    ],
    affiliateLinks: [
      {
        productName: 'Minisforum UM890 Pro (servidor de IA local)',
        url: 'https://search.jd.com/Search?keyword=Minisforum+UM890+Pro',
        productCategory: 'hardware',
      },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'WeChatFerry + Ollama: a combinação recomendada para um bot local de WeChat em 2026',
          'Qwen3 8B: o melhor modelo local para respostas em chinês no WeChat',
          'Apenas Windows: o WeChatFerry se injeta no cliente WeChat PC (apenas Windows)',
          'Tempo de configuração: 30–60 minutos para alguém familiarizado com Python',
          'Sem API na nuvem: toda a inferência é executada localmente, nenhuma mensagem é enviada para fora',
          'Risco: os Termos de Serviço do WeChat proíbem bots automatizados — use apenas como assistente pessoal',
        ],
      },
      overview: {
        heading: 'O que este guia constrói',
        body: 'Este guia explica passo a passo como criar um assistente de IA pessoal dentro do WeChat que:\n\n1. Monitora suas mensagens do WeChat em tempo real\n2. Envia as mensagens recebidas para um modelo Ollama local\n3. Retorna respostas geradas por IA em 3–10 segundos\n4. Mantém o contexto da conversa ao longo de vários turnos\n5. Pode ser ativado por uma palavra-chave (por exemplo, "@ai") para evitar responder a todas as mensagens\n\nA configuração é executada em um PC com Windows ou em uma máquina virtual Windows. macOS não é compatível com o WeChatFerry. O LLM local é executado por meio do Ollama — não são necessárias chaves de API na nuvem.',
        image: '/images/wechat-bot-architecture-flow-en.svg',
        imageCaption: 'Arquitetura do bot de WeChat: a mensagem do WeChat aciona o WeChatFerry (injeção de DLL no Windows), roteada por uma ponte em Python até o Ollama executando o Qwen3:8b, com resposta em 3–10 segundos — as cinco etapas rodam localmente, sem chamadas a API na nuvem.',
      },
      requirements: {
        heading: 'Requisitos',
        body: 'Hardware e software necessários antes de começar:\n\n- **Windows 10/11** (requisito do WeChatFerry)\n- **Cliente WeChat PC** — testado com WeChat 3.9.x\n- **Python 3.10+**\n- **Ollama** instalado na mesma máquina\n- **8 GB de RAM no mínimo** (recomendam-se 16 GB para um desempenho fluido com o modelo 7B)\n- **6–8 GB de espaço em disco** para os pesos do modelo Qwen3 8B\n\nModelo recomendado: **Qwen3:8b** — excelente qualidade em chinês, os 7B parâmetros cabem em 8 GB de VRAM ou são executados a uma velocidade aceitável em CPU com 16 GB de RAM.',
      },
      installation: {
        heading: 'Instalação passo a passo',
        numberedItems: [
          {
            title: 'Instalar o Ollama e baixar o Qwen3 8B',
            whyItMatters: 'Baixe o Ollama em ollama.com e execute: `ollama pull qwen3:8b`',
          },
          {
            title: 'Fazer login no WeChat PC',
            whyItMatters: 'Abra o WeChat no Windows e escaneie o código QR para fazer login. Mantenha-o conectado e executando em segundo plano.',
          },
          {
            title: 'Instalar o WeChatFerry',
            whyItMatters: 'Instale via pip: `pip install wcferry`. O WeChatFerry se injeta no processo do WeChat para expor uma API de mensagens.',
          },
          {
            title: 'Criar o manipulador de mensagens em Python',
            whyItMatters: 'Crie `wechat_bot.py` com o cliente WeChatFerry, as chamadas à HTTP API do Ollama e a lógica de roteamento de mensagens.',
          },
          {
            title: 'Testar com uma mensagem para você mesmo',
            whyItMatters: 'Envie a si mesmo uma mensagem de WeChat começando com "@ai" e verifique se o bot responde em menos de 10 segundos.',
          },
          {
            title: 'Adicionar histórico de conversa',
            whyItMatters: 'Armazene as últimas 10 mensagens por contato em um dict para habilitar o contexto de conversa de vários turnos.',
          },
          {
            title: 'Executar como serviço em segundo plano',
            whyItMatters: 'Use o NSSM (Non-Sucking Service Manager) para executar o script Python como um serviço do Windows que inicia automaticamente.',
          },
        ],
      },
      codeExample: {
        heading: 'Código Python essencial',
        body: 'O código mínimo funcional do bot usa o WeChatFerry para receber mensagens e a HTTP API do Ollama para gerar respostas:\n\n```python\nimport requests\nfrom wcferry import Wcf, WxMsg\n\nOLLAMA_URL = "http://localhost:11434/api/chat"\nMODEL = "qwen3:8b"\nTRIGGER = "@ai"\n\nconversation_history: dict[str, list] = {}\n\ndef ask_ollama(contact_id: str, user_message: str) -> str:\n    if contact_id not in conversation_history:\n        conversation_history[contact_id] = []\n    history = conversation_history[contact_id]\n    history.append({"role": "user", "content": user_message})\n    # keep last 10 turns\n    if len(history) > 20:\n        history = history[-20:]\n    conversation_history[contact_id] = history\n    response = requests.post(OLLAMA_URL, json={\n        "model": MODEL,\n        "messages": history,\n        "stream": False\n    })\n    reply = response.json()["message"]["content"]\n    history.append({"role": "assistant", "content": reply})\n    return reply\n\ndef on_message(msg: WxMsg):\n    if msg.type == 1 and msg.content.startswith(TRIGGER):\n        user_text = msg.content[len(TRIGGER):].strip()\n        reply = ask_ollama(msg.sender, user_text)\n        wcf.send_text(reply, msg.sender)\n\nwcf = Wcf()\nwcf.enable_receiving_msg()\nfor msg in wcf.get_msgs():\n    on_message(msg)\n```',
      },
      modelChoice: {
        heading: 'Melhores modelos locais para conversas de WeChat em chinês',
        body: 'A escolha do modelo afeta significativamente a qualidade das respostas a mensagens em chinês.',
        image: '/images/wechat-bot-model-speed-chinese-en.svg',
        imageCaption: 'Velocidade de CPU por modelo para respostas de WeChat em chinês: o Qwen3:3b é o mais rápido com 8–12 tok/s, o Qwen3:8b equilibra qualidade e velocidade com 3–5 tok/s, o Llama3.1:8b iguala a velocidade com chinês mais fraco, e o Qwen3:14b tem a melhor qualidade a 1–2 tok/s.',
        columns: ['Modelo', 'Tamanho', 'Qualidade em chinês', 'Velocidade (CPU)', 'Velocidade (8 GB VRAM)'],
        rows: [
          { 'Modelo': 'Qwen3:8b', 'Tamanho': '4,7 GB', 'Qualidade em chinês': 'Excelente', 'Velocidade (CPU)': '3–5 tok/s', 'Velocidade (8 GB VRAM)': '30–45 tok/s' },
          { 'Modelo': 'Qwen3:14b', 'Tamanho': '9 GB', 'Qualidade em chinês': 'Ótima', 'Velocidade (CPU)': '1–2 tok/s', 'Velocidade (8 GB VRAM)': '15–20 tok/s' },
          { 'Modelo': 'Qwen3:3b', 'Tamanho': '2 GB', 'Qualidade em chinês': 'Boa', 'Velocidade (CPU)': '8–12 tok/s', 'Velocidade (8 GB VRAM)': '60+ tok/s' },
          { 'Modelo': 'Llama3.1:8b', 'Tamanho': '4,7 GB', 'Qualidade em chinês': 'Moderada', 'Velocidade (CPU)': '3–5 tok/s', 'Velocidade (8 GB VRAM)': '30–45 tok/s' },
        ],
      },
      limitations: {
        heading: 'Limitações e riscos',
        body: '**Termos de Serviço do WeChat:** Os Termos de Serviço do WeChat proíbem bots automatizados, scrapers e clientes de terceiros. O uso do WeChatFerry pode acarretar a suspensão da conta se os sistemas antiautomação do WeChat o detectarem. Use esta configuração apenas para produtividade pessoal — não para mensagens em massa, marketing ou automação comercial.\n\n**Apenas Windows:** O WeChatFerry utiliza injeção de DLL no Windows para se conectar ao processo do WeChat. Não funciona no macOS nem no Linux.\n\n**Dependência da versão do cliente WeChat:** O WeChatFerry mantém compatibilidade com versões específicas do cliente WeChat PC. Verifique a lista de versões compatíveis no repositório do GitHub do WeChatFerry antes de atualizar o WeChat.\n\n**Latência:** A inferência apenas em CPU com um modelo 7B leva de 5 a 15 segundos por resposta, o que pode parecer lento no chat. Uma GPU de 8 GB reduz esse tempo para 1–3 segundos.',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Este bot de WeChat funciona no Mac?',
            a: 'Não. O WeChatFerry requer Windows e se conecta ao cliente WeChat para Windows por meio de injeção de DLL. Os usuários de macOS podem executar o Windows em uma máquina virtual (Parallels ou VMware Fusion) para usar esta configuração.',
          },
          {
            q: 'Minha conta de WeChat pode ser banida por usar um bot?',
            a: 'O WeChat proíbe bots automatizados em seus Termos de Serviço. As contas detectadas usando ferramentas de automação correm o risco de suspensão temporária ou banimento permanente. Use apenas para produtividade pessoal com um volume baixo de mensagens.',
          },
          {
            q: 'Qual é o melhor modelo do Ollama para mensagens de WeChat em chinês?',
            a: 'O Qwen3 8B é o melhor equilíbrio entre qualidade e velocidade para respostas em chinês no WeChat — excelente compreensão do chinês, rápido o suficiente na maioria dos hardwares, e o modelo de 4,7 GB cabe em 8 GB de VRAM.',
          },
          {
            q: 'O bot consegue gerenciar chats em grupo?',
            a: 'Sim. O WeChatFerry expõe as mensagens de grupo junto com o ID da sala. Modifique o manipulador `on_message` para verificar `msg.roomid` e filtrar em quais grupos o bot deve responder. Adicione uma palavra-chave de ativação para evitar responder a todas as mensagens do grupo.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Como eu crio um bot de WeChat com um LLM local?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use o WeChatFerry (Windows) para se conectar ao cliente WeChat PC, ligue-o ao Ollama via HTTP API e encaminhe as mensagens recebidas para o LLM local. Tempo total de configuração: 30–60 minutos com Python.',
          },
        },
        {
          '@type': 'Question',
          name: 'Este bot de WeChat funciona no Mac?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não. O WeChatFerry requer Windows. Os usuários de macOS podem executar o Windows em uma máquina virtual (Parallels ou VMware Fusion).',
          },
        },
        {
          '@type': 'Question',
          name: 'Qual é o melhor modelo para mensagens de WeChat em chinês?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O Qwen3 8B é o melhor equilíbrio entre qualidade e velocidade — excelente compreensão do chinês, 4,7 GB cabem em 8 GB de VRAM, responde em 1–3 segundos com GPU.',
          },
        },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      inLanguage: 'pt-BR',
      name: 'Criar um bot de WeChat com LLM local',
      step: [
        { '@type': 'HowToStep', name: 'Instalar o Ollama e baixar o Qwen3 8B', text: 'Baixe o Ollama e execute: ollama pull qwen3:8b' },
        { '@type': 'HowToStep', name: 'Fazer login no WeChat PC', text: 'Abra o WeChat no Windows e mantenha-o conectado' },
        { '@type': 'HowToStep', name: 'Instalar o WeChatFerry', text: 'pip install wcferry' },
        { '@type': 'HowToStep', name: 'Criar o manipulador de mensagens em Python', text: 'Escreva o código do bot para encaminhar mensagens do WeChat para a API do Ollama' },
        { '@type': 'HowToStep', name: 'Testar e executar como serviço', text: 'Teste com uma mensagem para você mesmo e depois execute como serviço do Windows em segundo plano' },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Bot de WeChat com LLM local: assistente pessoal 2026',
      description: 'Crie um bot assistente pessoal no WeChat com WeChatFerry e Ollama no Windows — completamente local, sem API na nuvem.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/wechat-bot-local-llm-personal-assistant-2026',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-07-01',
      'proficiencyLevel': 'Intermediate',
    },
    relatedReading: {
      items: [
        '[Guia de integração do WeChat com LLM local — 3 padrões de integração](/pt/power-local-llm/wechat-local-llm-integration-2026) — padrões webhook, WeChatFerry e servidor mini PC para desenvolvedores',
        '[Agentes de IA locais com MCP 2026](/pt/power-local-llm/local-ai-agents-with-mcp-2026) — amplie seu LLM local com chamadas a ferramentas e automação além do WeChat',
        '[Melhor mini PC para servidor Ollama sempre ativo](/pt/prompt-bites/best-mini-pc-for-ollama-server-always-on) — opções de hardware para executar um servidor de bot WeChat 24/7',
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Productivity & Knowledge Tools',
    title: 'بوت ⁨WeChat⁩ مع نموذج لغة محلي: المساعد الشخصي ⁨2026⁩',
    seoTitle: 'بناء بوت ⁨WeChat⁩ بـ ⁨LLM⁩ محلي: مساعد شخصي ⁨2026⁩',
    metaDescription: '⁨WeChatFerry + Ollama⁩ على ⁨Windows⁩ يُنشئ مساعدًا شخصيًا في ⁨WeChat⁩ بالكامل خارج السحابة. الإعداد يستغرق ⁨30⁩–⁨60⁩ دقيقة، خصوصية تامة بدون ⁨API⁩ خارجية.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**في عام 2026، يمكنك إنشاء بوت مساعد شخصي في WeChat باستخدام WeChatFerry + Ollama. يعمل البوت بالكامل على حاسوبك الشخصي بنظام Windows، ويستخدم نموذج لغة محليًا (Qwen3 8B أو 14B)، ويستجيب للرسائل في الوقت الفعلي دون إرسال أي بيانات إلى أي واجهة API سحابية.**',
    quickAnswerTop: {
      ar: {
        question: 'كيف أنشئ بوت WeChat مع نموذج لغة محلي؟',
        answer: 'استخدم WeChatFerry (Windows) للاتصال بعميل WeChat PC، واربطه بـ Ollama عبر HTTP API، وأعد توجيه الرسائل الواردة إلى النموذج اللغوي المحلي. الوقت الإجمالي للإعداد: 30–60 دقيقة.',
        bullets: [
          'WeChatFerry: أفضل إطار عمل لبوت WeChat على Windows في 2026',
          'Ollama: الواجهة الخلفية للنموذج اللغوي المحلي (يُوصى بـ Qwen3 8B للغة الصينية)',
          'جسر Python: إدارة توجيه الرسائل وتنسيق الردود',
          'نافذة السياق: حفظ تاريخ المحادثة للمحادثات متعددة الأدوار',
          'الخصوصية: تبقى جميع البيانات على جهازك المحلي، بدون استدعاءات API سحابية',
        ],
        updatedDate: '2026-07',
      },
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'أنشئ بوت مساعدًا شخصيًا في WeChat مع WeChatFerry وOllama على Windows — يعمل النموذج اللغوي محليًا ولا تغادر أي بيانات جهازك.',
      },
      {
        type: 'plain-terms',
        text: 'يوضح هذا الدليل كيفية ربط WeChat بنموذج ذكاء اصطناعي محلي للرد التلقائي على الرسائل والإجابة عن الأسئلة والعمل كمساعدك الشخصي داخل تطبيق WeChat.',
      },
    ],
    affiliateLinks: [
      {
        productName: 'Minisforum UM890 Pro (خادم الذكاء الاصطناعي المحلي)',
        url: 'https://search.jd.com/Search?keyword=Minisforum+UM890+Pro',
        productCategory: 'hardware',
      },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'WeChatFerry + Ollama: التوليفة الموصى بها لبوت WeChat المحلي في 2026',
          'Qwen3 8B: أفضل نموذج محلي للردود باللغة الصينية في WeChat',
          'Windows فقط: يُدمج WeChatFerry نفسه في عميل WeChat PC (Windows فقط)',
          'وقت الإعداد: 30–60 دقيقة لمن لديه خبرة بـ Python',
          'بدون API سحابية: تعمل الاستدلالات بالكامل محليًا، ولا يُرسل أي رسالة للخارج',
          'المخاطرة: تحظر شروط خدمة WeChat البوتات الآلية — استخدمه كمساعد شخصي فقط',
        ],
      },
      overview: {
        heading: 'ما الذي يبنيه هذا الدليل',
        body: 'يشرح هذا الدليل خطوة بخطوة كيفية إنشاء مساعد ذكاء اصطناعي شخصي داخل WeChat يقوم بما يلي:\n\n1. مراقبة رسائل WeChat في الوقت الفعلي\n2. إرسال الرسائل الواردة إلى نموذج Ollama المحلي\n3. إعادة الردود التي يولدها الذكاء الاصطناعي في غضون 3–10 ثوانٍ\n4. الحفاظ على سياق المحادثة عبر أدوار متعددة\n5. التفعيل بكلمة مفتاحية (مثل "@ai") لتجنب الرد على جميع الرسائل\n\nيعمل الإعداد على حاسوب يعمل بنظام Windows أو آلة افتراضية بـ Windows. لا يتوافق WeChatFerry مع macOS. يعمل النموذج اللغوي المحلي عبر Ollama — لا حاجة لمفاتيح API سحابية.',
        image: '/images/wechat-bot-architecture-flow-en.svg',
        imageCaption: 'بنية بوت WeChat: تُشغّل رسالة WeChat أداة WeChatFerry (حقن DLL على Windows)، ثم يُوجَّه الطلب عبر جسر Python إلى Ollama الذي يُشغّل Qwen3:8b، مع رد خلال 3–10 ثوانٍ — تعمل جميع المراحل الخمس محليًا دون أي استدعاء API سحابي.',
      },
      requirements: {
        heading: 'المتطلبات',
        body: 'الأجهزة والبرامج اللازمة قبل البدء:\n\n- **Windows 10/11** (مطلب WeChatFerry)\n- **عميل WeChat PC** — تم اختباره مع WeChat 3.9.x\n- **Python 3.10+**\n- **Ollama** مثبت على نفس الجهاز\n- **8 GB RAM كحد أدنى** (يُوصى بـ 16 GB لأداء سلس مع نموذج 7B)\n- **6–8 GB مساحة على القرص** لأوزان نموذج Qwen3 8B\n\nالنموذج الموصى به: **Qwen3:8b** — جودة ممتازة في اللغة الصينية، يشغل 8 GB VRAM أو يعمل بسرعة مقبولة على المعالج مع 16 GB RAM.',
      },
      installation: {
        heading: 'التثبيت خطوة بخطوة',
        numberedItems: [
          {
            title: 'تثبيت Ollama وتنزيل Qwen3 8B',
            whyItMatters: 'نزّل Ollama من ollama.com ونفّذ: `ollama pull qwen3:8b`',
          },
          {
            title: 'تسجيل الدخول إلى WeChat PC',
            whyItMatters: 'افتح WeChat على Windows وامسح رمز QR لتسجيل الدخول. أبقه متصلاً ويعمل في الخلفية.',
          },
          {
            title: 'تثبيت WeChatFerry',
            whyItMatters: 'ثبّت عبر pip: `pip install wcferry`. يُدمج WeChatFerry نفسه في عملية WeChat لعرض واجهة API للرسائل.',
          },
          {
            title: 'إنشاء معالج الرسائل بـ Python',
            whyItMatters: 'أنشئ `wechat_bot.py` مع عميل WeChatFerry واستدعاءات HTTP API لـ Ollama ومنطق توجيه الرسائل.',
          },
          {
            title: 'الاختبار برسالة لنفسك',
            whyItMatters: 'أرسل لنفسك رسالة WeChat تبدأ بـ "@ai" وتحقق من رد البوت في أقل من 10 ثوانٍ.',
          },
          {
            title: 'إضافة تاريخ المحادثة',
            whyItMatters: 'خزّن آخر 10 رسائل لكل جهة اتصال في قاموس لتفعيل سياق المحادثة متعدد الأدوار.',
          },
          {
            title: 'التشغيل كخدمة في الخلفية',
            whyItMatters: 'استخدم NSSM لتشغيل سكريبت Python كخدمة Windows تبدأ تلقائيًا.',
          },
        ],
      },
      codeExample: {
        heading: 'الكود Python الأساسي',
        body: 'الكود الأدنى الوظيفي للبوت يستخدم WeChatFerry لاستقبال الرسائل وHTTP API لـ Ollama لتوليد الردود:\n\n```python\nimport requests\nfrom wcferry import Wcf, WxMsg\n\nOLLAMA_URL = "http://localhost:11434/api/chat"\nMODEL = "qwen3:8b"\nTRIGGER = "@ai"\n\nconversation_history: dict[str, list] = {}\n\ndef ask_ollama(contact_id: str, user_message: str) -> str:\n    if contact_id not in conversation_history:\n        conversation_history[contact_id] = []\n    history = conversation_history[contact_id]\n    history.append({"role": "user", "content": user_message})\n    if len(history) > 20:\n        history = history[-20:]\n    conversation_history[contact_id] = history\n    response = requests.post(OLLAMA_URL, json={\n        "model": MODEL,\n        "messages": history,\n        "stream": False\n    })\n    reply = response.json()["message"]["content"]\n    history.append({"role": "assistant", "content": reply})\n    return reply\n\ndef on_message(msg: WxMsg):\n    if msg.type == 1 and msg.content.startswith(TRIGGER):\n        user_text = msg.content[len(TRIGGER):].strip()\n        reply = ask_ollama(msg.sender, user_text)\n        wcf.send_text(reply, msg.sender)\n\nwcf = Wcf()\nwcf.enable_receiving_msg()\nfor msg in wcf.get_msgs():\n    on_message(msg)\n```',
      },
      modelChoice: {
        heading: 'أفضل النماذج المحلية لمحادثات WeChat باللغة الصينية',
        body: 'يؤثر اختيار النموذج بشكل كبير على جودة الردود على الرسائل باللغة الصينية.',
        image: '/images/wechat-bot-model-speed-chinese-en.svg',
        imageCaption: 'سرعة المعالج لكل نموذج في ردود WeChat باللغة الصينية: Qwen3:3b الأسرع بمعدل 8–12 رمز/ثانية، وQwen3:8b يوازن الجودة والسرعة بمعدل 3–5 رمز/ثانية، وLlama3.1:8b بنفس السرعة مع جودة صينية أضعف، وQwen3:14b الأفضل جودة بمعدل 1–2 رمز/ثانية.',
        columns: ['النموذج', 'الحجم', 'جودة اللغة الصينية', 'السرعة (CPU)', 'السرعة (8 GB VRAM)'],
        rows: [
          { 'النموذج': 'Qwen3:8b', 'الحجم': '4.7 GB', 'جودة اللغة الصينية': 'ممتازة', 'السرعة (CPU)': '3–5 رمز/ثانية', 'السرعة (8 GB VRAM)': '30–45 رمز/ثانية' },
          { 'النموذج': 'Qwen3:14b', 'الحجم': '9 GB', 'جودة اللغة الصينية': 'مثالية', 'السرعة (CPU)': '1–2 رمز/ثانية', 'السرعة (8 GB VRAM)': '15–20 رمز/ثانية' },
          { 'النموذج': 'Qwen3:3b', 'الحجم': '2 GB', 'جودة اللغة الصينية': 'جيدة', 'السرعة (CPU)': '8–12 رمز/ثانية', 'السرعة (8 GB VRAM)': '60+ رمز/ثانية' },
          { 'النموذج': 'Llama3.1:8b', 'الحجم': '4.7 GB', 'جودة اللغة الصينية': 'متوسطة', 'السرعة (CPU)': '3–5 رمز/ثانية', 'السرعة (8 GB VRAM)': '30–45 رمز/ثانية' },
        ],
      },
      limitations: {
        heading: 'القيود والمخاطر',
        body: '**شروط خدمة WeChat:** تحظر شروط خدمة WeChat البوتات الآلية والمخترقات وعملاء الطرف الثالث. قد يؤدي استخدام WeChatFerry إلى تعليق الحساب إذا اكتشفته أنظمة مكافحة الاحتيال في WeChat. استخدم هذا الإعداد للإنتاجية الشخصية فقط — لا للرسائل الجماعية أو التسويق أو الأتمتة التجارية.\n\n**Windows فقط:** يستخدم WeChatFerry حقن DLL على Windows للاتصال بعملية WeChat. لا يعمل على macOS أو Linux.\n\n**الاعتماد على إصدار عميل WeChat:** يحافظ WeChatFerry على التوافق مع إصدارات محددة من عميل WeChat PC. تحقق من قائمة الإصدارات المدعومة في مستودع GitHub لـ WeChatFerry قبل تحديث WeChat.\n\n**الكمون:** يستغرق الاستدلال على المعالج فقط مع نموذج 7B من 5 إلى 15 ثانية لكل رد، مما قد يكون بطيئًا في الدردشة. تُقلل بطاقة رسومية بـ 8 GB ذلك إلى 1–3 ثوانٍ.',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'هل يعمل بوت WeChat هذا على Mac؟',
            a: 'لا. يتطلب WeChatFerry نظام Windows ويتصل بعميل WeChat لـ Windows عبر حقن DLL. يمكن لمستخدمي macOS تشغيل Windows في آلة افتراضية (Parallels أو VMware Fusion) لاستخدام هذا الإعداد.',
          },
          {
            q: 'هل يمكن حظر حساب WeChat الخاص بي بسبب استخدام بوت؟',
            a: 'تحظر WeChat البوتات الآلية في شروط الخدمة. الحسابات التي يُكتشف استخدامها لأدوات الأتمتة تتعرض لخطر التعليق المؤقت أو الحظر الدائم. استخدمه للإنتاجية الشخصية فقط مع حجم منخفض من الرسائل.',
          },
          {
            q: 'ما أفضل نموذج Ollama لرسائل WeChat باللغة الصينية؟',
            a: 'Qwen3 8B هو أفضل توازن بين الجودة والسرعة لردود WeChat باللغة الصينية — فهم ممتاز للغة الصينية، 4.7 GB تناسب 8 GB VRAM، يستجيب في 1–3 ثوانٍ مع بطاقة رسومية.',
          },
          {
            q: 'هل يستطيع البوت إدارة محادثات المجموعة؟',
            a: 'نعم. يعرض WeChatFerry رسائل المجموعة مع معرف الغرفة. عدّل معالج `on_message` للتحقق من `msg.roomid` وتصفية المجموعات التي يجب أن يرد فيها البوت. أضف كلمة تفعيل لتجنب الرد على جميع رسائل المجموعة.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'كيف أنشئ بوت WeChat مع نموذج لغة محلي؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'استخدم WeChatFerry (Windows) للاتصال بعميل WeChat PC، واربطه بـ Ollama عبر HTTP API، وأعد توجيه الرسائل الواردة إلى النموذج اللغوي المحلي. الوقت الإجمالي للإعداد: 30–60 دقيقة مع Python.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل يعمل بوت WeChat هذا على Mac؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'لا. يتطلب WeChatFerry نظام Windows. يمكن لمستخدمي macOS تشغيل Windows في آلة افتراضية (Parallels أو VMware Fusion).',
          },
        },
        {
          '@type': 'Question',
          name: 'ما أفضل نموذج لرسائل WeChat باللغة الصينية؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Qwen3 8B هو أفضل توازن بين الجودة والسرعة — فهم ممتاز للغة الصينية، 4.7 GB تناسب 8 GB VRAM، يستجيب في 1–3 ثوانٍ مع بطاقة رسومية.',
          },
        },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      inLanguage: 'ar',
      name: 'كيفية إنشاء بوت WeChat مع نموذج لغة محلي',
      step: [
        { '@type': 'HowToStep', name: 'تثبيت Ollama وتنزيل Qwen3 8B', text: 'نزّل Ollama ونفّذ: ollama pull qwen3:8b' },
        { '@type': 'HowToStep', name: 'تسجيل الدخول إلى WeChat PC', text: 'افتح WeChat على Windows وأبقه متصلاً' },
        { '@type': 'HowToStep', name: 'تثبيت WeChatFerry', text: 'pip install wcferry' },
        { '@type': 'HowToStep', name: 'إنشاء معالج الرسائل بـ Python', text: 'اكتب كود البوت لتوجيه رسائل WeChat إلى API لـ Ollama' },
        { '@type': 'HowToStep', name: 'الاختبار والتشغيل كخدمة', text: 'اختبر برسالة لنفسك ثم شغّله كخدمة Windows في الخلفية' },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'بوت WeChat مع نموذج لغة محلي: المساعد الشخصي 2026',
      description: 'أنشئ بوت مساعدًا شخصيًا في WeChat مع WeChatFerry وOllama على Windows — بالكامل محليًا، بدون API سحابية.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/wechat-bot-local-llm-personal-assistant-2026',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-07-01',
      'proficiencyLevel': 'Intermediate',
    },
    relatedReading: {
      items: [
        '[دليل دمج WeChat مع نموذج لغة محلي — 3 أنماط تكامل](/ar/power-local-llm/wechat-local-llm-integration-2026) — أنماط webhook وWeChatFerry وخادم mini PC للمطورين',
        '[وكلاء الذكاء الاصطناعي المحليون مع MCP 2026](/ar/power-local-llm/local-ai-agents-with-mcp-2026) — وسّع نموذجك اللغوي المحلي باستدعاءات الأدوات والأتمتة خارج WeChat',
        '[أفضل mini PC لخادم Ollama الدائم التشغيل](/ar/prompt-bites/best-mini-pc-for-ollama-server-always-on) — خيارات الأجهزة لتشغيل خادم بوت WeChat على مدار الساعة',
      ],
    },
  },
}

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
    leadAnswerBlock: '**You can build a WeChat personal assistant bot using WeChatFerry + Ollama in 2026. The bot runs entirely on your Windows PC, uses a local LLM (Qwen2.5 7B or 14B), and responds in real-time to WeChat messages without sending data to any cloud API.**',
    quickAnswerTop: {
      question: 'How do I build a WeChat bot with a local LLM?',
      answer: 'Use WeChatFerry (Windows) to hook into WeChat PC client, connect to Ollama via HTTP API, and route incoming messages to the local LLM. Total setup time: 30–60 minutes.',
      bullets: [
        'WeChatFerry: best Windows-based WeChat bot framework for 2026',
        'Ollama: local LLM backend (Qwen2.5 7B recommended for Chinese)',
        'Python bridge: handle message routing and response formatting',
        'Context window: store conversation history for multi-turn chat',
        'Privacy: all data stays on your local machine, no cloud API calls',
      ],
      updatedDate: '2026-05-26',
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
          'Qwen2.5 7B: best local model for Chinese-language WeChat responses',
          'Windows required: WeChatFerry hooks into the WeChat PC client (Windows only)',
          'Setup time: 30–60 minutes for someone comfortable with Python',
          'No cloud API: all inference runs locally, no message data sent externally',
          'Risk: WeChat ToS prohibits automated bots — use for personal assistants only',
        ],
      },
      overview: {
        heading: 'What This Guide Builds',
        body: 'This guide walks through building a personal AI assistant inside WeChat that:\n\n1. Monitors your WeChat messages in real-time\n2. Passes incoming messages to a local Ollama model\n3. Returns AI-generated replies within 3–10 seconds\n4. Maintains conversation context across multiple turns\n5. Can be triggered by a keyword (e.g., "@ai") to avoid responding to all messages\n\nThe setup runs on a Windows PC or Windows virtual machine. macOS is not supported by WeChatFerry. The local LLM runs via Ollama — no cloud API keys required.',
      },
      requirements: {
        heading: 'Requirements',
        body: 'Hardware and software needed before starting:\n\n- **Windows 10/11** (WeChatFerry requirement)\n- **WeChat PC client** — tested with WeChat 3.9.x\n- **Python 3.10+**\n- **Ollama** installed on the same machine\n- **8GB RAM minimum** (16GB recommended for smooth 7B model performance)\n- **6–8GB disk space** for the Qwen2.5 7B model weights\n\nRecommended model: **Qwen2.5:7b** — excellent Chinese language quality, 7B parameters fit in 8GB VRAM or run at acceptable speed on CPU with 16GB RAM.',
      },
      installation: {
        heading: 'Step-by-Step Installation',
        numberedItems: [
          {
            title: 'Install Ollama and pull Qwen2.5 7B',
            whyItMatters: 'Download Ollama from ollama.com and run: `ollama pull qwen2.5:7b`',
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
        body: 'The minimal working bot code uses WeChatFerry to receive messages and Ollama\'s HTTP API to generate responses:\n\n```python\nimport requests\nfrom wcferry import Wcf, WxMsg\n\nOLLAMA_URL = "http://localhost:11434/api/chat"\nMODEL = "qwen2.5:7b"\nTRIGGER = "@ai"\n\nconversation_history: dict[str, list] = {}\n\ndef ask_ollama(contact_id: str, user_message: str) -> str:\n    if contact_id not in conversation_history:\n        conversation_history[contact_id] = []\n    history = conversation_history[contact_id]\n    history.append({"role": "user", "content": user_message})\n    # keep last 10 turns\n    if len(history) > 20:\n        history = history[-20:]\n    conversation_history[contact_id] = history\n    response = requests.post(OLLAMA_URL, json={\n        "model": MODEL,\n        "messages": history,\n        "stream": False\n    })\n    reply = response.json()["message"]["content"]\n    history.append({"role": "assistant", "content": reply})\n    return reply\n\ndef on_message(msg: WxMsg):\n    if msg.type == 1 and msg.content.startswith(TRIGGER):\n        user_text = msg.content[len(TRIGGER):].strip()\n        reply = ask_ollama(msg.sender, user_text)\n        wcf.send_text(reply, msg.sender)\n\nwcf = Wcf()\nwcf.enable_receiving_msg()\nfor msg in wcf.get_msgs():\n    on_message(msg)\n```',
      },
      modelChoice: {
        heading: 'Best Local Models for Chinese WeChat Conversations',
        body: 'Model choice significantly affects response quality for Chinese-language messages.',
        tableData: {
          headers: ['Model', 'Size', 'Chinese Quality', 'Speed (CPU)', 'Speed (8GB VRAM)'],
          rows: [
            ['Qwen2.5:7b', '4.7 GB', 'Excellent', '3–5 tok/s', '30–45 tok/s'],
            ['Qwen2.5:14b', '9 GB', 'Best', '1–2 tok/s', '15–20 tok/s'],
            ['Qwen2.5:3b', '2 GB', 'Good', '8–12 tok/s', '60+ tok/s'],
            ['Llama3.1:8b', '4.7 GB', 'Moderate', '3–5 tok/s', '30–45 tok/s'],
          ],
        },
      },
      limitations: {
        heading: 'Limitations and Risks',
        body: '**WeChat Terms of Service:** WeChat\'s Terms of Service prohibit automated bots, scrapers, and third-party clients. Using WeChatFerry could result in account suspension if detected by WeChat\'s anti-automation systems. Use this setup for personal productivity only — not for mass messaging, marketing, or commercial automation.\n\n**Windows-only:** WeChatFerry uses Windows DLL injection to hook into the WeChat process. It does not work on macOS or Linux.\n\n**WeChat client version dependency:** WeChatFerry maintains compatibility with specific WeChat PC client versions. Verify the compatible version list in the WeChatFerry GitHub repository before updating WeChat.\n\n**Latency:** CPU-only inference on a 7B model takes 5–15 seconds per response, which can feel slow in chat. An 8GB GPU brings this down to 1–3 seconds.',
      },
      faq: {
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
            a: 'Qwen2.5 7B is the best balance of quality and speed for Chinese-language WeChat responses — excellent Chinese comprehension, fast enough on most hardware, and the 4.7GB model fits in 8GB VRAM.',
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
            text: 'Qwen2.5 7B is the best balance of quality and speed — excellent Chinese comprehension, 4.7GB fits in 8GB VRAM, responds in 1–3 seconds with a GPU.',
          },
        },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Build a WeChat Bot with Local LLM',
      step: [
        { '@type': 'HowToStep', name: 'Install Ollama and pull Qwen2.5 7B', text: 'Download Ollama and run: ollama pull qwen2.5:7b' },
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
      url: 'https://www.promptquorum.com/power-local-llm/wechat-bot-local-llm-personal-assistant-2026?lang=en',
      inLanguage: 'en',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
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
    leadAnswerBlock: '**Mit WeChatFerry und Ollama kann 2026 ein persönlicher WeChat-Assistent-Bot auf dem eigenen Windows-PC aufgebaut werden — lokales LLM (Qwen2.5 7B), keine Cloud-API, alle Daten bleiben lokal.**',
    quickAnswerTop: {
      question: 'Wie baue ich einen WeChat-Bot mit einem lokalen LLM?',
      answer: 'WeChatFerry (Windows) nutzen, um in den WeChat-PC-Client einzuhaken, über HTTP-API mit Ollama verbinden und Nachrichten an das lokale LLM weiterleiten. Einrichtungszeit: 30–60 Minuten.',
      bullets: [
        'WeChatFerry: bestes Windows-basiertes WeChat-Bot-Framework 2026',
        'Ollama: lokales LLM-Backend (Qwen2.5 7B empfohlen für Chinesisch)',
        'Python-Brücke: Nachrichtenrouting und Antwortformatierung',
        'Kontextfenster: Gesprächsverlauf für Mehrfachanfragen speichern',
        'Datenschutz: alle Daten bleiben lokal, keine Cloud-API-Aufrufe',
      ],
      updatedDate: '2026-05-26',
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
          'Qwen2.5 7B: bestes lokales Modell für chinesischsprachige Antworten',
          'Nur Windows: WeChatFerry hakt in den WeChat-PC-Client ein',
          'Einrichtungszeit: 30–60 Minuten mit Python-Kenntnissen',
          'Keine Cloud-API: gesamte Inferenz läuft lokal',
          'Hinweis: WeChat-AGB verbieten automatisierte Bots — nur für persönlichen Einsatz',
        ],
      },
      faq: {
        faqs: [
          {
            q: 'Funktioniert der WeChat-Bot auch auf macOS?',
            a: 'Nein. WeChatFerry benötigt Windows und hakt sich via DLL-Injektion in den WeChat-Windows-PC-Client ein. macOS-Nutzer können Windows in einer virtuellen Maschine (Parallels) verwenden.',
          },
          {
            q: 'Welches Ollama-Modell eignet sich am besten für chinesische WeChat-Nachrichten?',
            a: 'Qwen2.5 7B bietet die beste Balance aus Qualität und Geschwindigkeit — ausgezeichnetes Chinesisch-Verständnis, 4,7 GB passen in 8 GB VRAM.',
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
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'WeChat-Bot mit lokalem LLM: Persönlicher Assistent 2026', url: 'https://www.promptquorum.com/de/power-local-llm/wechat-bot-local-llm-personal-assistant-2026', inLanguage: 'de', author: { '@type': 'Organization', name: 'PromptQuorum' }, datePublished: '2026-05-26' },
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
    leadAnswerBlock: '**En 2026, vous pouvez construire un bot assistant personnel WeChat avec WeChatFerry et Ollama sur Windows — LLM local (Qwen2.5 7B), sans API cloud, toutes les données restent sur votre machine.**',
    quickAnswerTop: {
      question: 'Comment créer un bot WeChat avec un LLM local ?',
      answer: 'Utilisez WeChatFerry (Windows) pour vous connecter au client WeChat PC, reliez-le à Ollama via HTTP API et routez les messages entrants vers le LLM local. Temps de configuration : 30–60 minutes.',
      bullets: [
        'WeChatFerry : meilleur framework de bot WeChat Windows 2026',
        'Ollama : backend LLM local (Qwen2.5 7B recommandé pour le chinois)',
        'Bridge Python : routage des messages et formatage des réponses',
        'Fenêtre de contexte : historique pour conversations multi-tours',
        'Confidentialité : toutes les données restent locales, sans API cloud',
      ],
      updatedDate: '2026-05-26',
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
          'Qwen2.5 7B : meilleur modèle local pour réponses en chinois',
          'Windows requis : WeChatFerry s\'intègre dans le client WeChat PC Windows',
          'Temps de configuration : 30–60 minutes avec Python',
          'Aucune API cloud : toute l\'inférence tourne localement',
          'CGU WeChat : bots automatisés interdits — usage personnel uniquement',
        ],
      },
      faq: {
        faqs: [
          {
            q: 'Ce bot WeChat fonctionne-t-il sur Mac ?',
            a: 'Non. WeChatFerry nécessite Windows. Les utilisateurs macOS peuvent faire tourner Windows dans une machine virtuelle (Parallels ou VMware Fusion).',
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
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'Bot WeChat avec LLM local : assistant personnel 2026', url: 'https://www.promptquorum.com/fr/power-local-llm/wechat-bot-local-llm-personal-assistant-2026', inLanguage: 'fr', author: { '@type': 'Organization', name: 'PromptQuorum' }, datePublished: '2026-05-26' },
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
    metaDescription: '2026年版ガイド：WeChatFerryとOllamaを組み合わせ、Windows上でWeChat個人アシスタントボットを構築する手順を詳解。ローカルLLM（Qwen2.5 7B推奨）で全データがデバイス内に留まりクラウドAPIへのデータ送信がゼロ。Pythonで30〜60分の構築時間。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**WeChatFerry + OllamaをWindowsで使えば、2026年にローカルLLM（Qwen2.5 7B推奨）を活用したWeChat個人アシスタントボットを構築できます。全データがローカルに留まり、クラウドAPIへの送信は一切ありません。**',
    quickAnswerTop: {
      question: 'ローカルLLMでWeChatボットを構築する方法は？',
      answer: 'WeChatFerry（Windows）でWeChat PCクライアントにフックし、HTTP APIでOllamaに接続、受信メッセージをローカルLLMにルーティングします。セットアップ時間：30〜60分。',
      bullets: [
        'WeChatFerry：2026年ベストWindowsベースWeChatボットフレームワーク',
        'Ollama：ローカルLLMバックエンド（中国語にはQwen2.5 7B推奨）',
        'Pythonブリッジ：メッセージルーティングと応答フォーマット',
        'コンテキストウィンドウ：複数ターンの会話履歴を保持',
        'プライバシー：全データがローカル、クラウドAPIコールなし',
      ],
      updatedDate: '2026-05-26',
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
          'Qwen2.5 7B：中国語WeChat応答の最良ローカルモデル',
          'Windows必須：WeChatFerryはWindows WeChat PCクライアントへのフック',
          'セットアップ時間：Pythonに慣れていれば30〜60分',
          'クラウドAPIなし：全推論がローカルで完結',
          'WeChat利用規約：自動ボット禁止——個人利用のみ',
        ],
      },
      faq: {
        faqs: [
          {
            q: 'WeChatボットはMacで動作しますか？',
            a: 'いいえ。WeChatFerryはWindowsが必須で、Windows WeChat PCクライアントへのDLLインジェクションを使用します。macOSユーザーはParallels等の仮想マシンでWindowsを動作させることができます。',
          },
          {
            q: '中国語WeChatメッセージに最良のOllamaモデルは？',
            a: 'Qwen2.5 7Bが品質と速度の最良バランス——優れた中国語理解力、4.7GBで8GB VRAMに収まり、GPUがあれば1〜3秒で応答します。',
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
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'ローカルLLMでWeChatボット：個人アシスタント 2026年版', url: 'https://www.promptquorum.com/ja/power-local-llm/wechat-bot-local-llm-personal-assistant-2026', inLanguage: 'ja', author: { '@type': 'Organization', name: 'PromptQuorum' }, datePublished: '2026-05-26' },
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
    metaDescription: '2026年微信私人助理机器人完整搭建教程：使用WeChatFerry在Windows上钩入微信PC客户端，搭配Ollama本地大模型（推荐Qwen2.5 7B Q4量化版）自动处理私信与群聊。全程本地推理，无需云端API，约30–60分钟完成部署。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**2026年可用WeChatFerry + Ollama在Windows PC上搭建微信私人助理机器人——本地大模型（推荐Qwen2.5 7B），无需云端API，所有数据留在本地。**',
    quickAnswerTop: {
      question: '如何用本地大模型搭建微信机器人？',
      answer: '使用WeChatFerry（Windows）注入微信PC客户端，通过HTTP API对接Ollama，将收到的微信消息路由给本地大模型。全程配置时间约30–60分钟。',
      bullets: [
        'WeChatFerry：2026年最佳Windows微信机器人框架',
        'Ollama：本地大模型后端（中文推荐Qwen2.5 7B）',
        'Python桥接：消息路由与回复格式化',
        '上下文窗口：保存对话历史支持多轮对话',
        '隐私保护：所有数据留在本地，无云端API调用',
      ],
      updatedDate: '2026-05-26',
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
          'Qwen2.5 7B：中文微信对话的最佳本地模型',
          '仅支持Windows：WeChatFerry注入微信PC客户端（Windows专属）',
          '配置时间：熟悉Python的用户约30–60分钟',
          '无云端API：全部推理在本地完成',
          '风险提示：微信用户协议禁止自动化机器人——仅限个人使用',
        ],
      },
      overview: {
        heading: '本教程搭建的功能',
        body: '本教程将帮助你在微信内搭建一个AI私人助理，功能如下：\n\n1. 实时监控你的微信消息\n2. 将传入消息发送给本地Ollama模型\n3. 在3–10秒内返回AI生成的回复\n4. 跨多轮对话保持上下文\n5. 通过关键词触发（如"@ai"），避免对所有消息自动回复',
      },
      modelChoice: {
        heading: '微信中文对话的最佳本地模型',
        body: '模型选择对中文消息的回复质量影响显著。',
        tableData: {
          headers: ['模型', '大小', '中文质量', 'CPU速度', '8GB显存速度'],
          rows: [
            ['Qwen2.5:7b', '4.7 GB', '优秀', '3–5 tok/s', '30–45 tok/s'],
            ['Qwen2.5:14b', '9 GB', '最佳', '1–2 tok/s', '15–20 tok/s'],
            ['Qwen2.5:3b', '2 GB', '良好', '8–12 tok/s', '60+ tok/s'],
            ['Llama3.1:8b', '4.7 GB', '一般', '3–5 tok/s', '30–45 tok/s'],
          ],
        },
      },
      faq: {
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
            a: 'Qwen2.5 7B是质量与速度的最佳平衡——中文理解能力优秀，4.7GB可装入8GB显存，有GPU时回复延迟仅1–3秒。',
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
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 7B是最佳选择——中文理解优秀，4.7GB可装入8GB显存，GPU推理延迟1–3秒。' },
        },
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
    leadAnswerBlock: '**En 2026 puedes crear un bot asistente personal en WeChat usando WeChatFerry + Ollama. El bot se ejecuta completamente en tu PC con Windows, usa un LLM local (Qwen2.5 7B o 14B) y responde en tiempo real a los mensajes de WeChat sin enviar datos a ninguna API en la nube.**',
    quickAnswerTop: {
      question: '¿Cómo creo un bot de WeChat con un LLM local?',
      answer: 'Usa WeChatFerry (Windows) para conectarte al cliente WeChat PC, enlázalo a Ollama mediante HTTP API y enruta los mensajes entrantes al LLM local. Tiempo total de configuración: 30–60 minutos.',
      bullets: [
        'WeChatFerry: el mejor framework de bot WeChat para Windows en 2026',
        'Ollama: backend de LLM local (se recomienda Qwen2.5 7B para chino)',
        'Puente en Python: gestión del enrutamiento de mensajes y formato de respuestas',
        'Ventana de contexto: almacena el historial de conversación para chats de varios turnos',
        'Privacidad: todos los datos permanecen en tu máquina local, sin llamadas a API en la nube',
      ],
      updatedDate: '2026-05-26',
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
          'Qwen2.5 7B: el mejor modelo local para respuestas en WeChat en chino',
          'Solo Windows: WeChatFerry se inyecta en el cliente WeChat PC (solo Windows)',
          'Tiempo de configuración: 30–60 minutos para alguien familiarizado con Python',
          'Sin API en la nube: toda la inferencia se ejecuta localmente, ningún mensaje se envía al exterior',
          'Riesgo: los Términos de Servicio de WeChat prohíben los bots automatizados — úsalo solo como asistente personal',
        ],
      },
      overview: {
        heading: 'Qué construye esta guía',
        body: 'Esta guía explica paso a paso cómo crear un asistente de IA personal dentro de WeChat que:\n\n1. Monitorea tus mensajes de WeChat en tiempo real\n2. Envía los mensajes entrantes a un modelo Ollama local\n3. Devuelve respuestas generadas por IA en 3–10 segundos\n4. Mantiene el contexto de la conversación a lo largo de varios turnos\n5. Puede activarse con una palabra clave (por ejemplo, "@ai") para evitar responder a todos los mensajes\n\nLa configuración se ejecuta en un PC con Windows o en una máquina virtual Windows. macOS no es compatible con WeChatFerry. El LLM local se ejecuta a través de Ollama — no se necesitan claves de API en la nube.',
      },
      requirements: {
        heading: 'Requisitos',
        body: 'Hardware y software necesarios antes de empezar:\n\n- **Windows 10/11** (requisito de WeChatFerry)\n- **Cliente WeChat PC** — probado con WeChat 3.9.x\n- **Python 3.10+**\n- **Ollama** instalado en la misma máquina\n- **8 GB de RAM como mínimo** (se recomiendan 16 GB para un rendimiento fluido con el modelo 7B)\n- **6–8 GB de espacio en disco** para los pesos del modelo Qwen2.5 7B\n\nModelo recomendado: **Qwen2.5:7b** — excelente calidad en chino, los 7B parámetros caben en 8 GB de VRAM o se ejecutan a velocidad aceptable en CPU con 16 GB de RAM.',
      },
      installation: {
        heading: 'Instalación paso a paso',
        numberedItems: [
          {
            title: 'Instalar Ollama y descargar Qwen2.5 7B',
            whyItMatters: 'Descarga Ollama desde ollama.com y ejecuta: `ollama pull qwen2.5:7b`',
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
        body: 'El código mínimo funcional del bot usa WeChatFerry para recibir mensajes y la HTTP API de Ollama para generar respuestas:\n\n```python\nimport requests\nfrom wcferry import Wcf, WxMsg\n\nOLLAMA_URL = "http://localhost:11434/api/chat"\nMODEL = "qwen2.5:7b"\nTRIGGER = "@ai"\n\nconversation_history: dict[str, list] = {}\n\ndef ask_ollama(contact_id: str, user_message: str) -> str:\n    if contact_id not in conversation_history:\n        conversation_history[contact_id] = []\n    history = conversation_history[contact_id]\n    history.append({"role": "user", "content": user_message})\n    # keep last 10 turns\n    if len(history) > 20:\n        history = history[-20:]\n    conversation_history[contact_id] = history\n    response = requests.post(OLLAMA_URL, json={\n        "model": MODEL,\n        "messages": history,\n        "stream": False\n    })\n    reply = response.json()["message"]["content"]\n    history.append({"role": "assistant", "content": reply})\n    return reply\n\ndef on_message(msg: WxMsg):\n    if msg.type == 1 and msg.content.startswith(TRIGGER):\n        user_text = msg.content[len(TRIGGER):].strip()\n        reply = ask_ollama(msg.sender, user_text)\n        wcf.send_text(reply, msg.sender)\n\nwcf = Wcf()\nwcf.enable_receiving_msg()\nfor msg in wcf.get_msgs():\n    on_message(msg)\n```',
      },
      modelChoice: {
        heading: 'Mejores modelos locales para conversaciones de WeChat en chino',
        body: 'La elección del modelo afecta significativamente la calidad de las respuestas a mensajes en chino.',
        tableData: {
          headers: ['Modelo', 'Tamaño', 'Calidad en chino', 'Velocidad (CPU)', 'Velocidad (8 GB VRAM)'],
          rows: [
            ['Qwen2.5:7b', '4,7 GB', 'Excelente', '3–5 tok/s', '30–45 tok/s'],
            ['Qwen2.5:14b', '9 GB', 'Óptima', '1–2 tok/s', '15–20 tok/s'],
            ['Qwen2.5:3b', '2 GB', 'Buena', '8–12 tok/s', '60+ tok/s'],
            ['Llama3.1:8b', '4,7 GB', 'Moderada', '3–5 tok/s', '30–45 tok/s'],
          ],
        },
      },
      limitations: {
        heading: 'Limitaciones y riesgos',
        body: '**Términos de Servicio de WeChat:** Los Términos de Servicio de WeChat prohíben los bots automatizados, los scrapers y los clientes de terceros. El uso de WeChatFerry podría acarrear la suspensión de la cuenta si los sistemas antifraude de WeChat lo detectan. Usa esta configuración solo para productividad personal — no para mensajería masiva, marketing o automatización comercial.\n\n**Solo Windows:** WeChatFerry utiliza inyección de DLL en Windows para conectarse al proceso de WeChat. No funciona en macOS ni en Linux.\n\n**Dependencia de la versión del cliente WeChat:** WeChatFerry mantiene compatibilidad con versiones específicas del cliente WeChat PC. Verifica la lista de versiones compatibles en el repositorio de GitHub de WeChatFerry antes de actualizar WeChat.\n\n**Latencia:** La inferencia solo en CPU con un modelo 7B tarda entre 5 y 15 segundos por respuesta, lo que puede resultar lento en el chat. Una GPU de 8 GB reduce ese tiempo a 1–3 segundos.',
      },
      faq: {
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
            a: 'Qwen2.5 7B es el mejor equilibrio entre calidad y velocidad para respuestas en WeChat en chino — excelente comprensión del chino, suficientemente rápido en la mayoría del hardware, y el modelo de 4,7 GB cabe en 8 GB de VRAM.',
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
            text: 'Qwen2.5 7B es el mejor equilibrio entre calidad y velocidad — excelente comprensión del chino, 4,7 GB caben en 8 GB de VRAM, responde en 1–3 segundos con GPU.',
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
        { '@type': 'HowToStep', name: 'Instalar Ollama y descargar Qwen2.5 7B', text: 'Descarga Ollama y ejecuta: ollama pull qwen2.5:7b' },
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
      url: 'https://www.promptquorum.com/es/power-local-llm/wechat-bot-local-llm-personal-assistant-2026?lang=es',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
    },
    relatedReading: {
      items: [
        '[Guía de integración de WeChat con LLM local — 3 patrones de integración](/es/power-local-llm/wechat-local-llm-integration-2026) — patrones webhook, WeChatFerry y servidor mini PC para desarrolladores',
        '[Agentes de IA locales con MCP 2026](/es/power-local-llm/local-ai-agents-with-mcp-2026) — amplía tu LLM local con llamadas a herramientas y automatización más allá de WeChat',
        '[Mejor mini PC para servidor Ollama siempre activo](/es/prompt-bites/best-mini-pc-for-ollama-server-always-on) — opciones de hardware para ejecutar un servidor de bot WeChat 24/7',
      ],
    },
  },
}

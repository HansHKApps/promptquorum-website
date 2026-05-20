import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Prompt Engineering',
    title: 'Best LLM Right Now?',
    seoTitle: 'Best LLM Models 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Cloud coding: Claude Opus 4.7 (87.6% SWE-Bench). General chat: GPT-5.5 Instant (52.5% fewer hallucinations). Local: Llama 4 Scout or Qwen 2.5 14B. Updated monthly.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    current_models_mentioned: ['Claude Opus 4.7', 'GPT-5.5 Instant', 'Gemini 2.5 Pro', 'Llama 4 Scout', 'Qwen 2.5 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Users comparing the best available LLMs across cloud and local',
    parentArticle: '/local-llms/best-local-llms-2026',
    siblingBites: ['co-star-prompt-framework'],
    is_living_page: true,
    quickAnswerTop: {
      en: {
        question: 'Best LLM right now?',
        answer: 'For cloud coding tasks, Claude Opus 4.7 achieves 87.6% on SWE-Bench, while GPT-5.5 Instant leads general chat with 52.5% fewer hallucinations than prior versions. For cloud use: Claude Opus 4.7 leads on coding and long documents, GPT-5.5 Instant on general chat, Gemini 2.5 Pro on multimodal tasks. For local use: Llama 4 Scout if you have 24 GB VRAM; Qwen 2.5 14B for 12 GB VRAM.',
        bullets: [
          'Cloud general: GPT-5.5 Instant — ChatGPT default, 52.5% fewer hallucinations',
          'Cloud coding: Claude Opus 4.7 — 87.6% SWE-Bench Verified',
          'Local 12 GB VRAM: Qwen 2.5 14B Q4_K_M — best quality-per-VRAM',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Welches LLM ist aktuell das beste?',
        answer: 'Für Cloud-Coding-Aufgaben erreicht Claude Opus 4.7 87,6% auf SWE-Bench, während GPT-5.5 Instant bei allgemeinen Chats 52,5% weniger Halluzinationen als frühere Versionen aufweist. Für Cloud-Nutzung: Claude Opus 4.7 führt bei Coding und langen Dokumenten, GPT-5.5 Instant bei allgemeinen Aufgaben, Gemini 2.5 Pro bei multimodalen Aufgaben. Lokal: Llama 4 Scout bei 24 GB VRAM; Qwen 2.5 14B für 12 GB VRAM.',
        bullets: [
          'Cloud allgemein: GPT-5.5 Instant — ChatGPT Standard seit Mai 2026, 52,5% weniger Halluzinationen',
          'Cloud Coding: Claude Opus 4.7 — 87,6% SWE-Bench Verified',
          'Lokal 12 GB VRAM: Qwen 2.5 14B Q4_K_M — bestes Qualitäts-/VRAM-Verhältnis',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Quel est le meilleur LLM en ce moment ?',
        answer: 'Pour le codage en cloud, Claude Opus 4.7 atteint 87,6% sur SWE-Bench, tandis que GPT-5.5 Instant réduit les hallucinations de 52,5% par rapport aux versions antérieures. Pour le cloud : Claude Opus 4.7 domine le code et les longs documents, GPT-5.5 Instant la conversation générale, Gemini 2.5 Pro les tâches multimodales. En local : Llama 4 Scout avec 24 Go de VRAM ; Qwen 2.5 14B pour 12 Go de VRAM.',
        bullets: [
          'Cloud général : GPT-5.5 Instant — ChatGPT standard depuis mai 2026, 52,5% moins d\'hallucinations',
          'Cloud code : Claude Opus 4.7 — 87,6% SWE-Bench Verified',
          'Local 12 Go VRAM : Qwen 2.5 14B Q4_K_M — meilleur rapport qualité/VRAM',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '現在最良のLLMは何ですか？',
        answer: 'クラウドコーディングタスクではClaude Opus 4.7がSWE-Benchで87.6%を達成し、GPT-5.5 Instantは前バージョンより52.5%幻覚を削減しています。クラウド利用では：Claude Opus 4.7がコーディングと長文書をリード、GPT-5.5 Instantが汎用チャット、Gemini 2.5 Proがマルチモーダルタスクを担当。ローカルでは：24GB VRAMあればLlama 4 Scout、12GB VRAMならQwen 2.5 14B。',
        bullets: [
          'クラウド汎用：GPT-5.5 Instant — ChatGPT標準（2026年5月〜）、幻覚を52.5%削減',
          'クラウドコーディング：Claude Opus 4.7 — SWE-Bench Verified 87.6%',
          'ローカル12GB VRAM：Qwen 2.5 14B Q4_K_M — 最高の品質/VRAM比',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '当前最好的 LLM 是什么？',
        answer: '云编程任务中，Claude Opus 4.7 在 SWE-Bench 上达成 87.6% 成绩，GPT-5.5 Instant 则在通用对话中降低幻觉 52.5%。云端：Claude Opus 4.7 在编程和长文档领先，GPT-5.5 Instant 适合通用对话，Gemini 2.5 Pro 适合多模态任务。本地：24GB VRAM 选 Llama 4 Scout；12 GB VRAM 选 Qwen 2.5 14B。',
        bullets: [
          '云端通用：GPT-5.5 Instant — ChatGPT 默认（2026 年 5 月起），幻觉减少 52.5%',
          '云端编程：Claude Opus 4.7 — SWE-Bench Verified 87.6%',
          '本地 12 GB VRAM：Qwen 2.5 14B Q4_K_M — 最佳质量/VRAM 比',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'No single LLM wins every task — Claude Opus 4.7 leads coding (87.6% SWE-Bench), GPT-5.5 Instant leads general chat',
          'For local use with 12 GB VRAM, Qwen 2.5 14B Q4_K_M gives the best quality-per-VRAM ratio available',
          'Cloud models require API keys and incur per-token costs; local models run free after hardware investment',
          'For local use, Llama 4 Scout (17B/16 experts) fits single H100 with 10M token context; Qwen 2.5 14B Q4_K_M for 12 GB VRAM',
        ],
      },
      body1: {
        title: 'The Best LLM Depends on the Task — Here\'s the Map',
        content: [
          '<strong>As of May 2026, three model families lead different use cases. This page is updated monthly — last verified May 2026. For coding and technical analysis: Claude Opus 4.7 (Anthropic). For general chat and ChatGPT: GPT-5.5 Instant (OpenAI). For privacy, offline work, and unlimited use: Llama 4 Scout run locally.</strong> Below: when each one wins, and which to pick by workflow.',
          'No single cloud model dominates every benchmark. Claude Opus 4.7 achieves 87.6% on SWE-Bench Verified, making it the clear choice for software engineering. GPT-5.5 Instant (the new ChatGPT default since May 2026) produces the most reliable results across diverse everyday tasks with 52.5% fewer hallucinations than previous versions.',
          'Gemini 2.5 Pro remains the strongest natively multimodal model for video and image analysis. For pure text or code tasks, the quality difference between Claude Opus 4.7 and GPT-5.5 is notable — choose based on your specific workflow. For local use, Llama 4 Scout fits in consumer hardware with a 10M token context window.',
        ],
        columns: ['Use Case', 'Best LLM', 'Why'],
        rows: [
          { 'Use Case': 'Coding (Python, TypeScript)', 'Best LLM': 'Claude Opus 4.7', 'Why': '87.6% SWE-Bench Verified, leads coding benchmarks' },
          { 'Use Case': 'General chat', 'Best LLM': 'GPT-5.5 Instant', 'Why': 'ChatGPT default since May 2026, 52.5% fewer hallucinations' },
          { 'Use Case': 'Local / offline', 'Best LLM': 'Llama 4 Scout', 'Why': '17B/16 experts, fits single H100, 10M token context' },
          { 'Use Case': 'Long documents', 'Best LLM': 'Claude Opus 4.7', 'Why': '1M context window, strong retention' },
          { 'Use Case': 'Quick image+text', 'Best LLM': 'GPT-5.5 or Gemini 2.5 Pro', 'Why': 'Multimodal latency' },
          { 'Use Case': 'Cheap throughput', 'Best LLM': 'Claude Haiku or GPT-5.5 mini', 'Why': '$/M tokens' },
          { 'Use Case': 'Research / agentic', 'Best LLM': 'Claude Opus 4.7', 'Why': 'MCP-Atlas 77.3%, function calling reliability' },
        ],
      },
      body2: {
        title: 'How to Pick Without Reading 50 Reviews',
        content: [
          '<strong>Start with the constraint.</strong> Budget, privacy, latency, or benchmark? Pick the model that handles your hardest constraint first. Claude Opus 4.7 is best for coding, GPT-5.5 Instant for general chat, Llama 4 Scout for offline.',
          '<strong>Test 2 models on YOUR actual task.</strong> Published benchmarks don\'t predict your use case. Use free API tiers for cloud models (Claude, OpenAI) and run Llama 4 Scout locally via Ollama. Most users discover they prefer one in practice.',
          '<strong>Watch monthly.</strong> New models launch quarterly. Claude Opus 4.7 launched April 16, GPT-5.5 launched April 23. The "right now" answer changes. Re-check this page monthly. <strong>For local users,</strong> Llama 4 Scout is the ceiling on consumer hardware (10M context, single H100). For lower VRAM, use older models like Llama 3 8B or Phi-4.',
        ],
        callouts: [{ type: 'info', text: 'Last verified: May 2026. The best-LLM-right-now landscape shifts quickly — Claude Opus 4.7 launched April 16, GPT-5.5 launched April 23. Re-check this page monthly. Major releases (Claude 5, GPT-6, Llama 5) will trigger updates.' }],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About the Best LLM Right Now',
        faqs: [
          {
            q: 'Is Claude Opus 4.7 or GPT-5.5 better in May 2026?',
            a: 'Claude Opus 4.7 leads on SWE-Bench Verified (87.6%) for coding and technical analysis. GPT-5.5 Instant leads for general chat and instruction following (52.5% fewer hallucinations than prior versions). The best model depends on your specific task.',
          },
          {
            q: 'What is the best local LLM if I only have 8 GB VRAM?',
            a: 'With 8 GB VRAM, Llama 3 8B at Q4_K_M is still the best option — it fits comfortably with ~5 GB VRAM and leaves headroom for context. For newer hardware, Llama 4 Scout (17B/16 experts) requires a single H100 or equivalent (24 GB VRAM).',
          },
          {
            q: 'How does Gemini 2.5 Pro compare to Claude Opus 4.7 and GPT-5.5?',
            a: 'Gemini 2.5 Pro leads for natively multimodal tasks such as video and image analysis. For pure text reasoning and coding, Claude Opus 4.7 and GPT-5.5 are the stronger choices. See our <a href="/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">CO-STAR prompt framework guide</a> for tips on getting better output from any cloud model.',
          },
          {
            q: 'Can a local LLM match cloud models for coding tasks?',
            a: 'Llama 4 Scout (17B) and Llama 4 Maverick (17B/128 experts) provide strong open-source alternatives but do not match Claude Opus 4.7 on SWE-Bench. For most everyday coding assistance tasks, the gap is small enough to be practical. For complex multi-file refactoring, cloud models still hold a clear advantage.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Prompt Engineering',
    title: 'Welches LLM ist aktuell das beste?',
    seoTitle: 'Beste LLM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Cloud Coding: Claude Opus 4.7 (87,6% SWE-Bench). Allgemeiner Chat: GPT-5.5 Instant (52,5% weniger Halluzinationen). Lokal: Llama 4 Scout oder Qwen 2.5 14B. Monatlich aktualisiert.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    quickAnswerTop: {
      de: {
        question: 'Welches LLM ist aktuell das beste?',
        answer: 'Für Cloud-Nutzung: Claude Opus 4.7 führt bei Coding und langen Dokumenten, GPT-5.5 Instant bei allgemeinen Aufgaben, Gemini 2.5 Pro bei multimodalen Aufgaben. Lokal: Llama 4 Scout bei 24 GB VRAM; Qwen 2.5 14B für 12 GB VRAM.',
        bullets: [
          'Cloud allgemein: GPT-5.5 Instant — ChatGPT Standard seit Mai 2026, 52,5% weniger Halluzinationen',
          'Cloud Coding: Claude Opus 4.7 — 87,6% SWE-Bench Verified',
          'Lokal 12 GB VRAM: Qwen 2.5 14B Q4_K_M — bestes Qualitäts-/VRAM-Verhältnis',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Kein einzelnes LLM gewinnt jede Aufgabe — Claude Opus 4.7 führt beim Coding (87,6% SWE-Bench), GPT-5.5 Instant beim allgemeinen Chat',
          'Lokal mit 12 GB VRAM bietet Qwen 2.5 14B Q4_K_M das beste verfügbare Qualitäts-/VRAM-Verhältnis',
          'Cloud-Modelle erfordern API-Keys und verursachen Token-Kosten; lokale Modelle laufen nach der Hardware-Investition kostenlos',
          'Für lokale Nutzung passt Llama 4 Scout (17B/16 Experten) auf ein einzelnes H100 mit 10M Token-Kontext; Qwen 2.5 14B Q4_K_M für 12 GB VRAM',
        ],
      },
      body1: {
        title: 'Cloud-LLM-Spitzenreiter nach Aufgabenkategorie',
        content: [
          '<strong>Stand Mai 2026 führen Claude Opus 4.7 beim Coding mit 87,6% SWE-Bench Verified und GPT-5.5 Instant beim allgemeinen Chat mit 52,5% weniger Halluzinationen die Cloud-LLMs an.</strong> Gemini 2.5 Pro bleibt die stärkste nativ multimodale Option für Video- und Bildanalyse.',
          'Kein einzelnes Cloud-Modell dominiert alle Benchmarks. Claude Opus 4.7 ist die klare Wahl für Software-Engineering. GPT-5.5 Instant bietet zuverlässigste Ergebnisse für diverse alltägliche Aufgaben mit 52,5% weniger Halluzinationen als frühere Versionen.',
          'Gemini 2.5 Pro ist das einzige Cloud-Modell mit nativem Video-Verständnis. Bei reinen Text- oder Code-Aufgaben ist der Qualitätsunterschied zwischen Claude Opus 4.7 und GPT-5.5 Instant bemerkenswert — wählen Sie basierend auf Ihrem spezifischen Arbeitsablauf.',
        ],
        columns: ['Kategorie', 'Modell', 'Stärke'],
        rows: [
          { 'Kategorie': 'Cloud Allgemein', 'Modell': 'GPT-5.5 Instant', 'Stärke': 'ChatGPT Standard seit Mai 2026, 52,5% weniger Halluzinationen' },
          { 'Kategorie': 'Cloud Coding', 'Modell': 'Claude Opus 4.7', 'Stärke': '87,6% SWE-Bench Verified, langer Kontext' },
          { 'Kategorie': 'Lokal (12 GB VRAM)', 'Modell': 'Qwen 2.5 14B Q4', 'Stärke': 'Bestes Qualitäts-/VRAM-Verhältnis' },
          { 'Kategorie': 'Lokal (6 GB VRAM)', 'Modell': 'Llama 3 8B Q4', 'Stärke': 'Geschwindigkeit + Effizienz' },
        ],
      },
      body2: {
        title: 'Wie Sie das richtige Modell auswählen — ohne 50 Reviews zu lesen',
        content: [
          '<strong>Beginnen Sie mit der Einschränkung.</strong> Budget, Datenschutz, Latenz oder Benchmark? Wählen Sie zunächst das Modell, das Ihre schwierigste Einschränkung erfüllt. Claude Opus 4.7 ist am besten für Coding, GPT-5.5 Instant für allgemeinen Chat, Llama 4 Scout für Offline-Nutzung.',
          '<strong>Testen Sie 2 Modelle mit IHRER Aufgabe.</strong> Veröffentlichte Benchmarks sagen nicht Ihren Anwendungsfall voraus. Nutzen Sie kostenlose API-Tiers für Cloud-Modelle (Claude, OpenAI) und führen Sie Llama 4 Scout lokal über Ollama aus. Die meisten Nutzer entdecken in der Praxis schnell, welches sie bevorzugen.',
          '<strong>Monatlich überprüfen.</strong> Neue Modelle starten vierteljährlich. Claude Opus 4.7 startete am 16. April, GPT-5.5 am 23. April. Die Antwort auf „jetzt gerade" ändert sich. Überprüfen Sie diese Seite monatlich. <strong>Für lokale Nutzer:</strong> Llama 4 Scout ist das Maximum auf Consumer-Hardware (10M Kontext, einzelnes H100). Bei weniger VRAM verwenden Sie ältere Modelle wie Llama 3 8B oder Phi-4.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zum besten LLM aktuell',
        faqs: [
          {
            q: 'Ist Claude Opus 4.7 oder GPT-5.5 besser im Mai 2026?',
            a: 'Claude Opus 4.7 führt mit 87,6% SWE-Bench Verified für Coding und technische Analyse. GPT-5.5 Instant führt für allgemeinen Chat und Instruction Following (52,5% weniger Halluzinationen als frühere Versionen). Das beste Modell hängt von Ihrer spezifischen Aufgabe ab.',
          },
          {
            q: 'Was ist das beste lokale LLM mit nur 8 GB VRAM?',
            a: 'Mit 8 GB VRAM ist Llama 3 8B bei Q4_K_M die beste Option — es passt komfortabel mit ~5 GB VRAM und lässt Spielraum für den Kontext. Qwen 2.5 7B Q4_K_M ist eine enge Alternative mit starker mehrsprachiger Leistung.',
          },
          {
            q: 'Wie vergleicht sich Gemini 2.5 Pro mit Claude Opus 4.7 und GPT-5.5?',
            a: 'Gemini 2.5 Pro ist bei nativ multimodalen Aufgaben wie Video- und Bildanalyse führend. Bei reinem Text-Reasoning und Coding sind Claude Opus 4.7 und GPT-5.5 Instant im Allgemeinen die stärkeren Optionen.',
          },
          {
            q: 'Kann ein lokales LLM bei Coding-Aufgaben mit einem Cloud-Modell mithalten?',
            a: 'Llama 4 Scout (17B) und Llama 4 Maverick (17B/128 experts) bieten starke Open-Source-Alternativen, erreichen aber nicht Claude Opus 4.7 im SWE-Bench. Für die meisten alltäglichen Coding-Aufgaben ist der Unterschied gering genug, um praktikabel zu sein. Für komplexes Multi-Datei-Refactoring haben Cloud-Modelle noch einen klaren Vorteil.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Prompt Engineering',
    title: 'Quel est le meilleur LLM en ce moment ?',
    seoTitle: 'Meilleur LLM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Code : Claude Opus 4.7 (87,6% SWE-Bench). Chat général : GPT-5.5 Instant (52,5% moins d\'hallucinations). Local : Llama 4 Scout ou Qwen 2.5 14B. Mis à jour chaque mois.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur LLM en ce moment ?',
        answer: 'Pour le cloud : Claude Opus 4.7 domine le code et les longs documents, GPT-5.5 Instant la conversation générale, Gemini 2.5 Pro les tâches multimodales. En local : Llama 4 Scout avec 24 Go de VRAM ; Qwen 2.5 14B pour 12 Go de VRAM.',
        bullets: [
          'Cloud général : GPT-5.5 Instant — ChatGPT standard depuis mai 2026, 52,5% moins d\'hallucinations',
          'Cloud code : Claude Opus 4.7 — 87,6% SWE-Bench Verified',
          'Local 12 Go VRAM : Qwen 2.5 14B Q4_K_M — meilleur rapport qualité/VRAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Aucun LLM ne gagne sur toutes les tâches — Claude Opus 4.7 mène sur le code (87,6% SWE-Bench), GPT-5.5 Instant sur le chat général',
          'En local avec 12 Go de VRAM, Qwen 2.5 14B Q4_K_M offre le meilleur rapport qualité/VRAM disponible',
          'Les modèles cloud nécessitent des clés API et facturent par token ; les modèles locaux sont gratuits après l\'investissement matériel',
          'En local, Llama 4 Scout (17B/16 experts) tient sur un seul H100 avec 10M tokens de contexte ; Qwen 2.5 14B Q4_K_M pour 12 Go de VRAM',
        ],
      },
      body1: {
        title: 'Leaders cloud par catégorie de tâche',
        content: [
          '<strong>En mai 2026, Claude Opus 4.7 domine le code avec 87,6% SWE-Bench Verified et GPT-5.5 Instant domine le chat général avec 52,5% moins d\'hallucinations sur les LLMs cloud.</strong> Gemini 2.5 Pro reste le meilleur pour les tâches nativement multimodales comme l\'analyse vidéo et image.',
          'Aucun modèle cloud ne domine tous les benchmarks. Claude Opus 4.7 est le choix évident pour l\'ingénierie logicielle. GPT-5.5 Instant produit les résultats les plus fiables sur une grande variété de tâches quotidiennes avec 52,5% moins d\'hallucinations que les versions précédentes.',
          'Gemini 2.5 Pro est le seul modèle cloud avec une compréhension vidéo native intégrée. Pour les tâches de texte ou de code pur, la différence de qualité entre Claude Opus 4.7 et GPT-5.5 Instant est notable — choisissez selon votre flux de travail spécifique.',
        ],
        columns: ['Catégorie', 'Modèle', 'Point fort'],
        rows: [
          { 'Catégorie': 'Cloud général', 'Modèle': 'GPT-5.5 Instant', 'Point fort': 'ChatGPT standard depuis mai 2026, 52,5% moins d\'hallucinations' },
          { 'Catégorie': 'Cloud code', 'Modèle': 'Claude Opus 4.7', 'Point fort': '87,6% SWE-Bench Verified, long contexte' },
          { 'Catégorie': 'Local (12 Go VRAM)', 'Modèle': 'Qwen 2.5 14B Q4', 'Point fort': 'Meilleur rapport qualité/VRAM' },
          { 'Catégorie': 'Local (6 Go VRAM)', 'Modèle': 'Llama 3 8B Q4', 'Point fort': 'Vitesse + efficacité' },
        ],
      },
      body2: {
        title: 'Comment choisir sans lire 50 avis',
        content: [
          '<strong>Commencez par la contrainte.</strong> Budget, confidentialité, latence ou benchmark ? Choisissez d\'abord le modèle qui gère votre contrainte la plus difficile. Claude Opus 4.7 est meilleur pour le code, GPT-5.5 Instant pour le chat général, Llama 4 Scout pour l\'offline.',
          '<strong>Testez 2 modèles sur VOTRE tâche réelle.</strong> Les benchmarks publiés ne prédisent pas votre cas d\'usage. Utilisez les tiers API gratuits pour les modèles cloud (Claude, OpenAI) et exécutez Llama 4 Scout localement via Ollama. La plupart des utilisateurs découvrent rapidement celui qu\'ils préfèrent en pratique.',
          '<strong>Vérifiez mensuellement.</strong> Les nouveaux modèles lancent trimestriellement. Claude Opus 4.7 a lancé le 16 avril, GPT-5.5 le 23 avril. La réponse "en ce moment" change. Revérifiez cette page mensuellement. <strong>Pour les utilisateurs locaux,</strong> Llama 4 Scout est le plafond sur le matériel grand public (10M contexte, single H100). Pour moins de VRAM, utilisez des modèles plus anciens comme Llama 3 8B ou Phi-4.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le meilleur LLM en ce moment',
        faqs: [
          {
            q: 'Claude Opus 4.7 ou GPT-5.5 est-il meilleur en mai 2026 ?',
            a: 'Claude Opus 4.7 mène pour le code et l\'analyse technique (87,6% SWE-Bench Verified). GPT-5.5 Instant mène pour le chat général et le suivi d\'instructions (52,5% moins d\'hallucinations que les versions précédentes). Le meilleur modèle dépend de votre tâche spécifique.',
          },
          {
            q: 'Quel est le meilleur LLM local avec seulement 8 Go de VRAM ?',
            a: 'Avec 8 Go de VRAM, Llama 3 8B en Q4_K_M est la meilleure option — il tient confortablement avec ~5 Go de VRAM et laisse de la marge pour le contexte. Qwen 2.5 7B Q4_K_M est une alternative proche avec de solides performances multilingues.',
          },
          {
            q: 'Comment Gemini 2.5 Pro se compare-t-il à Claude Opus 4.7 et GPT-5.5 ?',
            a: 'Gemini 2.5 Pro est supérieur pour les tâches nativement multimodales comme l\'analyse vidéo et image. Pour le raisonnement textuel pur et le code, Claude Opus 4.7 et GPT-5.5 Instant restent généralement les choix les plus puissants.',
          },
          {
            q: 'Un LLM local peut-il rivaliser avec un modèle cloud pour le code ?',
            a: 'Llama 4 Scout (17B) et Llama 4 Maverick (17B/128 experts) offrent des alternatives open source puissantes mais ne correspondent pas à Claude Opus 4.7 sur SWE-Bench. Pour la plupart des tâches de codage quotidiennes, l\'écart est suffisamment faible pour être pratique. Pour les refactorisations complexes multi-fichiers, les modèles cloud conservent un avantage net.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Prompt Engineering',
    title: '現在最良のLLMは何ですか？',
    seoTitle: '2026年最良LLM | Prompt Bites | PromptQuorum',
    metaDescription: 'クラウド：Claude Opus 4.7（87.6% SWE-Bench）コーディング、GPT-5.5 Instant（幻覚52.5%削減）汎用チャット。ローカル：Llama 4 Scout か Qwen 2.5 14B。毎月更新。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    quickAnswerTop: {
      ja: {
        question: '現在最良のLLMは何ですか？',
        answer: 'クラウド利用では：Claude Opus 4.7がコーディングと長文書をリード、GPT-5.5 Instantが汎用チャット、Gemini 2.5 Proがマルチモーダルタスクを担当。ローカルでは：24GB VRAMあればLlama 4 Scout、12GB VRAMならQwen 2.5 14B。',
        bullets: [
          'クラウド汎用：GPT-5.5 Instant — ChatGPT標準（2026年5月〜）、幻覚を52.5%削減',
          'クラウドコーディング：Claude Opus 4.7 — SWE-Bench Verified 87.6%',
          'ローカル12GB VRAM：Qwen 2.5 14B Q4_K_M — 最高の品質/VRAM比',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'すべてのタスクで勝る単一LLMは存在しない — Claude Opus 4.7がコーディングをリード（87.6% SWE-Bench）、GPT-5.5 Instantが汎用チャットをリード',
          'ローカルで12GB VRAMの場合、Qwen 2.5 14B Q4_K_Mが利用可能な最高の品質/VRAM比を提供する',
          'クラウドモデルはAPIキーが必要でトークン課金が発生するが、ローカルモデルはハードウェア投資後は無料で動作する',
          'ローカル利用では、Llama 4 Scout（17B/16 experts）は単一H100で10Mトークンコンテキスト対応；12GB VRAMではQwen 2.5 14B Q4_K_M',
        ],
      },
      body1: {
        title: 'タスクカテゴリ別クラウドLLMリーダー',
        content: [
          '<strong>2026年5月時点で、Claude Opus 4.7が87.6% SWE-Bench Verifiedでコーディングをリード、GPT-5.5 Instantが52.5%の幻覚削減で汎用チャットをリードしています。</strong> Gemini 2.5 Proは画像分析や動画理解などのネイティブマルチモーダルタスクで依然としてリードしています。',
          'すべてのベンチマークを制する単一のクラウドモデルは存在しません。Claude Opus 4.7はソフトウェアエンジニアリングの明確な選択肢です。GPT-5.5 Instantは前バージョンよりも52.5%幻覚が減り、多様な日常タスクで最も安定した結果を生み出します。',
          'Gemini 2.5 Proはネイティブな動画理解が組み込まれた唯一のクラウドモデルです。純粋なテキストやコードのタスクでは、Claude Opus 4.7とGPT-5.5 Instantの品質差は顕著です — 特定のワークフローに応じて選択してください。',
        ],
        columns: ['カテゴリ', 'モデル', '主な強み'],
        rows: [
          { 'カテゴリ': 'クラウド汎用', 'モデル': 'GPT-5.5 Instant', '主な強み': '2026年5月〜ChatGPT標準、幻覚を52.5%削減' },
          { 'カテゴリ': 'クラウドコーディング', 'モデル': 'Claude Opus 4.7', '主な強み': '87.6% SWE-Bench Verified、長文脈' },
          { 'カテゴリ': 'ローカル（12 GB VRAM）', 'モデル': 'Qwen 2.5 14B Q4', '主な強み': '最高の品質/VRAM比' },
          { 'カテゴリ': 'ローカル（6 GB VRAM）', 'モデル': 'Llama 3 8B Q4', '主な強み': 'スピード + 効率' },
        ],
      },
      body2: {
        title: '50個のレビューを読まずに選ぶ方法',
        content: [
          '<strong>制約から始めましょう。</strong> 予算、プライバシー、レイテンシ、またはベンチマーク？ 最初に最も難しい制約に対応するモデルを選びます。Claude Opus 4.7はコーディングに最適、GPT-5.5 Instantは汎用チャットに最適、Llama 4 Scoutはオフライン用。',
          '<strong>YOUR実際のタスクで2つのモデルをテストします。</strong> 公開ベンチマークはあなたのユースケースを予測しません。クラウドモデル（Claude、OpenAI）の無料APIティアを使用し、OllamaでLlama 4 Scoutをローカルで実行します。ほとんどのユーザーは実際に使用して、どちらを好むかをすぐに発見します。',
          '<strong>毎月チェックしてください。</strong> 新しいモデルは四半期ごとに発売されます。Claude Opus 4.7は4月16日に発売、GPT-5.5は4月23日に発売。「今」の答えは変わります。毎月このページを確認してください。<strong>ローカルユーザー向け：</strong> Llama 4 Scoutはコンシューマーハードウェアの上限（10Mコンテキスト、シングルH100）です。VRAMが少ない場合は、Llama 3 8BやPhi-4などの古いモデルを使用してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: '現在最良のLLMに関するよくある質問',
        faqs: [
          {
            q: 'Claude Opus 4.7またはGPT-5.5は2026年5月で優れていますか？',
            a: 'Claude Opus 4.7はコーディングと技術分析で87.6% SWE-Bench Verifiedでリード。GPT-5.5 Instantは汎用チャットと命令追従で（前バージョンより52.5%幻覚削減）リード。最良のモデルは具体的なタスクによって異なります。',
          },
          {
            q: '8GB VRAMしかない場合の最良のローカルLLMは何ですか？',
            a: '8GB VRAMでは、Q4_K_MのLlama 3 8Bが最良の選択です — 約5GB VRAMで快適に収まり、コンテキストに余裕があります。Qwen 2.5 7B Q4_K_Mは多言語パフォーマンスが強力な近接した代替案です。',
          },
          {
            q: 'Gemini 2.5 ProはClaude Opus 4.7とGPT-5.5とどう比べますか？',
            a: 'Gemini 2.5 Proは動画・画像分析などのネイティブマルチモーダルタスクで優位です。純粋なテキスト推論とコーディングでは、Claude Opus 4.7とGPT-5.5 Instantが一般的により強力な選択肢です。',
          },
          {
            q: 'ローカルLLMはコーディングタスクでクラウドモデルに匹敵できますか？',
            a: 'Llama 4 Scout（17B）とLlama 4 Maverick（17B/128 experts）は強力なオープンソース代替案を提供しますが、SWE-BenchでClaude Opus 4.7と同等ではありません。ほとんどの日常的なコーディング補助タスクでは差は実用的に小さいです。複雑なマルチファイルリファクタリングでは、クラウドモデルがまだ明確な優位性を持っています。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Prompt Engineering',
    title: '当前最好的 LLM 是什么？',
    seoTitle: '2026年最佳LLM | Prompt Bites | PromptQuorum',
    metaDescription: '编程：Claude Opus 4.7（87.6% SWE-Bench）；对话：GPT-5.5 Instant（幻觉减少 52.5%）；本地：Llama 4 Scout 或 Qwen 2.5 14B。每月更新。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    quickAnswerTop: {
      zh: {
        question: '当前最好的 LLM 是什么？',
        answer: '云端：Claude Opus 4.7 在编程和长文档领先，GPT-5.5 Instant 适合通用对话，Gemini 2.5 Pro 适合多模态任务。本地：24GB VRAM 选 Llama 4 Scout；12 GB VRAM 选 Qwen 2.5 14B。',
        bullets: [
          '云端通用：GPT-5.5 Instant — ChatGPT 默认（2026 年 5 月起），幻觉减少 52.5%',
          '云端编程：Claude Opus 4.7 — SWE-Bench Verified 87.6%',
          '本地 12 GB VRAM：Qwen 2.5 14B Q4_K_M — 最佳质量/VRAM 比',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '没有单一 LLM 能在所有任务上获胜——Claude Opus 4.7 领先编程（87.6% SWE-Bench），GPT-5.5 Instant 领先通用对话',
          '本地使用 12 GB VRAM 时，Qwen 2.5 14B Q4_K_M 提供可用的最佳质量/VRAM 比',
          '云端模型需要 API 密钥且按 token 计费；本地模型在硬件投入后免费运行',
          '本地使用中，Llama 4 Scout（17B/16 experts）可在单一 H100 上运行，拥有 10M 上下文；12 GB VRAM 选 Qwen 2.5 14B Q4_K_M',
        ],
      },
      body1: {
        title: '按任务类别划分的云端 LLM 领导者',
        content: [
          '<strong>截至 2026 年 5 月，Claude Opus 4.7 以 87.6% SWE-Bench Verified 在编程上领先，GPT-5.5 Instant 以 52.5% 的幻觉减少在通用对话上领先云端 LLM。</strong> Gemini 2.5 Pro 在图像分析和视频理解等原生多模态任务上保持领先。',
          '没有单一云端模型能主导所有基准测试。Claude Opus 4.7 是软件工程的明确选择。GPT-5.5 Instant 在多样化的日常任务上产生最可靠的结果，与前版本相比幻觉减少 52.5%。',
          'Gemini 2.5 Pro 是唯一内置原生视频理解的云端模型。对于纯文本或代码任务，Claude Opus 4.7 和 GPT-5.5 Instant 之间的质量差异显著——根据具体工作流选择。',
        ],
        columns: ['类别', '模型', '核心优势'],
        rows: [
          { '类别': '云端通用', '模型': 'GPT-5.5 Instant', '核心优势': '2026 年 5 月起 ChatGPT 默认，幻觉减少 52.5%' },
          { '类别': '云端编程', '模型': 'Claude Opus 4.7', '核心优势': '87.6% SWE-Bench Verified，长上下文' },
          { '类别': '本地（12 GB VRAM）', '模型': 'Qwen 2.5 14B Q4', '核心优势': '最佳质量/VRAM 比' },
          { '类别': '本地（6 GB VRAM）', '模型': 'Llama 3 8B Q4', '核心优势': '速度 + 效率' },
        ],
      },
      body2: {
        title: '不读 50 篇评论如何选择',
        content: [
          '<strong>从约束开始。</strong> 预算、隐私、延迟还是基准？ 首先选择处理最大难题的模型。Claude Opus 4.7 最适合编程，GPT-5.5 Instant 最适合通用聊天，Llama 4 Scout 最适合离线。',
          '<strong>在 YOUR 实际任务上测试 2 个模型。</strong> 公开基准不能预测您的用例。对云端模型（Claude、OpenAI）使用免费 API 层，通过 Ollama 本地运行 Llama 4 Scout。大多数用户在实践中迅速发现他们的偏好。',
          '<strong>每月检查一次。</strong> 新模型按季度发布。Claude Opus 4.7 在 4 月 16 日发布，GPT-5.5 在 4 月 23 日发布。"现在"的答案在变化。每月重新检查此页面。<strong>对于本地用户，</strong>Llama 4 Scout 是消费级硬件的上限（10M 上下文，单个 H100）。VRAM 更少时，使用较旧的模型如 Llama 3 8B 或 Phi-4。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于当前最好 LLM 的快速解答',
        faqs: [
          {
            q: '2026 年 Claude Opus 4.7 还是最好的 LLM 吗？',
            a: '截至 2026 年 5 月，Claude Opus 4.7 在编程和技术分析上领先（87.6% SWE-Bench Verified）。GPT-5.5 Instant 在通用推理和指令遵循上领先（相比前版本幻觉减少 52.5%）。最好的模型取决于您的具体任务。',
          },
          {
            q: '只有 8 GB VRAM 时最好的本地 LLM 是什么？',
            a: '使用 8 GB VRAM 时，Q4_K_M 的 Llama 3 8B 是最佳选择——它可以舒适地用约 5 GB VRAM 运行，为上下文留有余量。Qwen 2.5 7B Q4_K_M 是多语言性能强劲的近似替代方案。',
          },
          {
            q: 'Gemini 2.5 Pro 与 Claude Opus 4.7 和 GPT-5.5 如何比较？',
            a: 'Gemini 2.5 Pro 在视频和图像分析等原生多模态任务上更强。对于纯文本推理和编程，Claude Opus 4.7 和 GPT-5.5 Instant 通常是更强的选择。',
          },
          {
            q: '本地 LLM 能在编程任务上与云端模型媲美吗？',
            a: 'Llama 4 Scout（17B）和 Llama 4 Maverick（17B/128 experts）提供强大的开源替代方案，但在 SWE-Bench 上无法匹敌 Claude Opus 4.7。对于大多数日常编程辅助任务，差距已小到实用。对于复杂的多文件重构，云端模型仍有明显优势。',
          },
        ],
      },
    },
  },
}

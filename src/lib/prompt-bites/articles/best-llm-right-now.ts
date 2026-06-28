import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Prompt Engineering',
    title: 'Best LLM Right Now?',
    dateModified: '2026-06-21',
    seoTitle: 'Best LLM Models 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Cloud coding: Claude Opus 4.8 (87.6% SWE-Bench). General chat: GPT-5.5 Instant (52.5% fewer hallucinations). Local: Llama 4 Scout or Qwen 3 14B. Updated monthly.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    current_models_mentioned: ['Claude Opus 4.8', 'GPT-5.5 Instant', 'Gemini 2.5 Pro', 'Llama 4 Scout', 'Qwen 3 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Users comparing the best available LLMs across cloud and local',
    parentArticle: '/local-llms/best-local-llms-2026',
    siblingBites: ['co-star-prompt-framework', 'ai-model-knowledge-cutoff-dates'],
    is_living_page: true,
    quickAnswerTop: {
      en: {
        question: 'Best LLM right now?',
        answer: 'For cloud coding tasks, Claude Opus 4.8 achieves 87.6% on SWE-Bench, while GPT-5.5 Instant leads general chat with 52.5% fewer hallucinations than prior versions. For cloud use: Claude Opus 4.8 leads on coding and long documents, GPT-5.5 Instant on general chat, Gemini 2.5 Pro on multimodal tasks. For local use: Llama 4 Scout if you have 24 GB VRAM; Qwen 3 14B for 12 GB VRAM.',
        bullets: [
          'Cloud general: GPT-5.5 Instant — ChatGPT default, 52.5% fewer hallucinations',
          'Cloud coding: Claude Opus 4.8 — 87.6% SWE-Bench Verified',
          'Local 12 GB VRAM: Qwen 3 14B Q4_K_M — best quality-per-VRAM',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Welches LLM ist aktuell das beste?',
        answer: 'Für Cloud-Coding-Aufgaben erreicht Claude Opus 4.8 87,6% auf SWE-Bench, während GPT-5.5 Instant bei allgemeinen Chats 52,5% weniger Halluzinationen als frühere Versionen aufweist. Für Cloud-Nutzung: Claude Opus 4.8 führt bei Coding und langen Dokumenten, GPT-5.5 Instant bei allgemeinen Aufgaben, Gemini 2.5 Pro bei multimodalen Aufgaben. Lokal: Llama 4 Scout bei 24 GB VRAM; Qwen 3 14B für 12 GB VRAM.',
        bullets: [
          'Cloud allgemein: GPT-5.5 Instant — ChatGPT Standard seit Mai 2026, 52,5% weniger Halluzinationen',
          'Cloud Coding: Claude Opus 4.8 — 87,6% SWE-Bench Verified',
          'Lokal 12 GB VRAM: Qwen 3 14B Q4_K_M — bestes Qualitäts-/VRAM-Verhältnis',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Quel est le meilleur LLM en ce moment ?',
        answer: 'Pour le codage en cloud, Claude Opus 4.8 atteint 87,6% sur SWE-Bench, tandis que GPT-5.5 Instant réduit les hallucinations de 52,5% par rapport aux versions antérieures. Pour le cloud : Claude Opus 4.8 domine le code et les longs documents, GPT-5.5 Instant la conversation générale, Gemini 2.5 Pro les tâches multimodales. En local : Llama 4 Scout avec 24 Go de VRAM ; Qwen 3 14B pour 12 Go de VRAM.',
        bullets: [
          'Cloud général : GPT-5.5 Instant — ChatGPT standard depuis mai 2026, 52,5% moins d\'hallucinations',
          'Cloud code : Claude Opus 4.8 — 87,6% SWE-Bench Verified',
          'Local 12 Go VRAM : Qwen 3 14B Q4_K_M — meilleur rapport qualité/VRAM',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '現在最良のLLMは何ですか？',
        answer: 'クラウドコーディングタスクではClaude Opus 4.8がSWE-Benchで87.6%を達成し、GPT-5.5 Instantは前バージョンより52.5%幻覚を削減しています。クラウド利用では：Claude Opus 4.8がコーディングと長文書をリード、GPT-5.5 Instantが汎用チャット、Gemini 2.5 Proがマルチモーダルタスクを担当。ローカルでは：24GB VRAMあればLlama 4 Scout、12GB VRAMならQwen 3 14B。',
        bullets: [
          'クラウド汎用：GPT-5.5 Instant — ChatGPT標準（2026年5月〜）、幻覚を52.5%削減',
          'クラウドコーディング：Claude Opus 4.8 — SWE-Bench Verified 87.6%',
          'ローカル12GB VRAM：Qwen 3 14B Q4_K_M — 最高の品質/VRAM比',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '当前最好的 LLM 是什么？',
        answer: '云编程任务中，Claude Opus 4.8 在 SWE-Bench 上达成 87.6% 成绩，GPT-5.5 Instant 则在通用对话中降低幻觉 52.5%。云端：Claude Opus 4.8 在编程和长文档领先，GPT-5.5 Instant 适合通用对话，Gemini 2.5 Pro 适合多模态任务。本地：24GB VRAM 选 Llama 4 Scout；12 GB VRAM 选 Qwen 3 14B。',
        bullets: [
          '云端通用：GPT-5.5 Instant — ChatGPT 默认（2026 年 5 月起），幻觉减少 52.5%',
          '云端编程：Claude Opus 4.8 — SWE-Bench Verified 87.6%',
          '本地 12 GB VRAM：Qwen 3 14B Q4_K_M — 最佳质量/VRAM 比',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'No single LLM wins every task — Claude Opus 4.8 leads coding (87.6% SWE-Bench), GPT-5.5 Instant leads general chat',
          'For local use with 12 GB VRAM, Qwen 3 14B Q4_K_M gives the best quality-per-VRAM ratio available',
          'Cloud models require API keys and incur per-token costs; local models run free after hardware investment',
          'For local use, Llama 4 Scout (17B/16 experts) fits single H100 with 10M token context; Qwen 3 14B Q4_K_M for 12 GB VRAM',
        ],
      },
      body1: {
        title: 'The Best LLM Depends on the Task — Here\'s the Map',
        content: [
          '<strong>As of May 2026, three model families lead different use cases. This page is updated monthly — last verified May 2026. For coding and technical analysis: Claude Opus 4.8 (Anthropic). For general chat and ChatGPT: GPT-5.5 Instant (OpenAI). For privacy, offline work, and unlimited use: Llama 4 Scout run locally.</strong> Below: when each one wins, and which to pick by workflow.',
          'No single cloud model dominates every benchmark. Claude Opus 4.8 achieves 87.6% on SWE-Bench Verified, making it the clear choice for software engineering. GPT-5.5 Instant (the new ChatGPT default since May 2026) produces the most reliable results across diverse everyday tasks with 52.5% fewer hallucinations than previous versions.',
          'Gemini 2.5 Pro remains the strongest natively multimodal model for video and image analysis. For pure text or code tasks, the quality difference between Claude Opus 4.8 and GPT-5.5 is notable — choose based on your specific workflow. For local use, Llama 4 Scout fits in consumer hardware with a 10M token context window.',
        ],
        columns: ['Use Case', 'Best LLM', 'Why'],
        rows: [
          { 'Use Case': 'Coding (Python, TypeScript)', 'Best LLM': 'Claude Opus 4.8', 'Why': '87.6% SWE-Bench Verified, leads coding benchmarks' },
          { 'Use Case': 'General chat', 'Best LLM': 'GPT-5.5 Instant', 'Why': 'ChatGPT default since May 2026, 52.5% fewer hallucinations' },
          { 'Use Case': 'Local / offline', 'Best LLM': 'Llama 4 Scout', 'Why': '17B/16 experts, fits single H100, 10M token context' },
          { 'Use Case': 'Long documents', 'Best LLM': 'Claude Opus 4.8', 'Why': '1M context window, strong retention' },
          { 'Use Case': 'Quick image+text', 'Best LLM': 'GPT-5.5 or Gemini 2.5 Pro', 'Why': 'Multimodal latency' },
          { 'Use Case': 'Cheap throughput', 'Best LLM': 'Claude Haiku or GPT-5.5 mini', 'Why': '$/M tokens' },
          { 'Use Case': 'Research / agentic', 'Best LLM': 'Claude Opus 4.8', 'Why': 'MCP-Atlas 77.3%, function calling reliability' },
        ],
      },
      body2: {
        title: 'How to Pick Without Reading 50 Reviews',
        content: [
          '<strong>Start with the constraint.</strong> Budget, privacy, latency, or benchmark? Pick the model that handles your hardest constraint first. Claude Opus 4.8 is best for coding, GPT-5.5 Instant for general chat, Llama 4 Scout for offline.',
          '<strong>Test 2 models on YOUR actual task.</strong> Published benchmarks don\'t predict your use case. Use free API tiers for cloud models (Claude, OpenAI) and run Llama 4 Scout locally via Ollama. Most users discover they prefer one in practice.',
          '<strong>Watch monthly.</strong> New models launch quarterly. Claude Opus 4.8 launched April 16, GPT-5.5 launched April 23. The "right now" answer changes. Re-check this page monthly. <strong>For local users,</strong> Llama 4 Scout is the ceiling on consumer hardware (10M context, single H100). For lower VRAM, use older models like Llama 3 8B or Phi-4.',
        ],
        callouts: [{ type: 'info', text: 'Last verified: May 2026. The best-LLM-right-now landscape shifts quickly — Claude Opus 4.8 launched April 16, GPT-5.5 launched April 23. Re-check this page monthly. Major releases (Claude 5, GPT-6, Llama 5) will trigger updates.' }],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About the Best LLM Right Now',
        faqs: [
          {
            q: 'Is Claude Opus 4.8 or GPT-5.5 better in May 2026?',
            a: 'Claude Opus 4.8 leads on SWE-Bench Verified (87.6%) for coding and technical analysis. GPT-5.5 Instant leads for general chat and instruction following (52.5% fewer hallucinations than prior versions). The best model depends on your specific task.',
          },
          {
            q: 'What is the best local LLM if I only have 8 GB VRAM?',
            a: 'With 8 GB VRAM, Llama 3 8B at Q4_K_M is still the best option — it fits comfortably with ~5 GB VRAM and leaves headroom for context. For newer hardware, Llama 4 Scout (17B/16 experts) requires a single H100 or equivalent (24 GB VRAM).',
          },
          {
            q: 'How does Gemini 2.5 Pro compare to Claude Opus 4.8 and GPT-5.5?',
            a: 'Gemini 2.5 Pro leads for natively multimodal tasks such as video and image analysis. For pure text reasoning and coding, Claude Opus 4.8 and GPT-5.5 are the stronger choices. See our <a href="/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">CO-STAR prompt framework guide</a> for tips on getting better output from any cloud model.',
          },
          {
            q: 'Can a local LLM match cloud models for coding tasks?',
            a: 'Llama 4 Scout (17B) and Llama 4 Maverick (17B/128 experts) provide strong open-source alternatives but do not match Claude Opus 4.8 on SWE-Bench. For most everyday coding assistance tasks, the gap is small enough to be practical. For complex multi-file refactoring, cloud models still hold a clear advantage.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Prompt Engineering',
    title: 'Welches LLM ist aktuell das beste?',
    seoTitle: 'Beste LLM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Das beste lokale LLM jetzt: Llama 3.3 70B für die meisten, Qwen 3 Coder fürs Programmieren, Phi-4 für schwache Hardware. Nach Anwendungsfall und VRAM.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    quickAnswerTop: {
      de: {
        question: 'Welches LLM ist aktuell das beste?',
        answer: 'Für Cloud-Nutzung: Claude Opus 4.8 führt bei Coding und langen Dokumenten, GPT-5.5 Instant bei allgemeinen Aufgaben, Gemini 2.5 Pro bei multimodalen Aufgaben. Lokal: Llama 4 Scout bei 24 GB VRAM; Qwen 3 14B für 12 GB VRAM.',
        bullets: [
          'Cloud allgemein: GPT-5.5 Instant — ChatGPT Standard seit Mai 2026, 52,5% weniger Halluzinationen',
          'Cloud Coding: Claude Opus 4.8 — 87,6% SWE-Bench Verified',
          'Lokal 12 GB VRAM: Qwen 3 14B Q4_K_M — bestes Qualitäts-/VRAM-Verhältnis',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Kein einzelnes LLM gewinnt jede Aufgabe — Claude Opus 4.8 führt beim Coding (87,6% SWE-Bench), GPT-5.5 Instant beim allgemeinen Chat',
          'Lokal mit 12 GB VRAM bietet Qwen 3 14B Q4_K_M das beste verfügbare Qualitäts-/VRAM-Verhältnis',
          'Cloud-Modelle erfordern API-Keys und verursachen Token-Kosten; lokale Modelle laufen nach der Hardware-Investition kostenlos',
          'Für lokale Nutzung passt Llama 4 Scout (17B/16 Experten) auf ein einzelnes H100 mit 10M Token-Kontext; Qwen 3 14B Q4_K_M für 12 GB VRAM',
        ],
      },
      body1: {
        title: 'Cloud-LLM-Spitzenreiter nach Aufgabenkategorie',
        content: [
          '<strong>Stand Mai 2026 führen Claude Opus 4.8 beim Coding mit 87,6% SWE-Bench Verified und GPT-5.5 Instant beim allgemeinen Chat mit 52,5% weniger Halluzinationen die Cloud-LLMs an.</strong> Gemini 2.5 Pro bleibt die stärkste nativ multimodale Option für Video- und Bildanalyse.',
          'Kein einzelnes Cloud-Modell dominiert alle Benchmarks. Claude Opus 4.8 ist die klare Wahl für Software-Engineering. GPT-5.5 Instant bietet zuverlässigste Ergebnisse für diverse alltägliche Aufgaben mit 52,5% weniger Halluzinationen als frühere Versionen.',
          'Gemini 2.5 Pro ist das einzige Cloud-Modell mit nativem Video-Verständnis. Bei reinen Text- oder Code-Aufgaben ist der Qualitätsunterschied zwischen Claude Opus 4.8 und GPT-5.5 Instant bemerkenswert — wählen Sie basierend auf Ihrem spezifischen Arbeitsablauf.',
        ],
        columns: ['Kategorie', 'Modell', 'Stärke'],
        rows: [
          { 'Kategorie': 'Cloud Allgemein', 'Modell': 'GPT-5.5 Instant', 'Stärke': 'ChatGPT Standard seit Mai 2026, 52,5% weniger Halluzinationen' },
          { 'Kategorie': 'Cloud Coding', 'Modell': 'Claude Opus 4.8', 'Stärke': '87,6% SWE-Bench Verified, langer Kontext' },
          { 'Kategorie': 'Lokal (12 GB VRAM)', 'Modell': 'Qwen 3 14B Q4', 'Stärke': 'Bestes Qualitäts-/VRAM-Verhältnis' },
          { 'Kategorie': 'Lokal (6 GB VRAM)', 'Modell': 'Llama 3 8B Q4', 'Stärke': 'Geschwindigkeit + Effizienz' },
        ],
      },
      body2: {
        title: 'Wie Sie das richtige Modell auswählen — ohne 50 Reviews zu lesen',
        content: [
          '<strong>Beginnen Sie mit der Einschränkung.</strong> Budget, Datenschutz, Latenz oder Benchmark? Wählen Sie zunächst das Modell, das Ihre schwierigste Einschränkung erfüllt. Claude Opus 4.8 ist am besten für Coding, GPT-5.5 Instant für allgemeinen Chat, Llama 4 Scout für Offline-Nutzung.',
          '<strong>Testen Sie 2 Modelle mit IHRER Aufgabe.</strong> Veröffentlichte Benchmarks sagen nicht Ihren Anwendungsfall voraus. Nutzen Sie kostenlose API-Tiers für Cloud-Modelle (Claude, OpenAI) und führen Sie Llama 4 Scout lokal über Ollama aus. Die meisten Nutzer entdecken in der Praxis schnell, welches sie bevorzugen.',
          '<strong>Monatlich überprüfen.</strong> Neue Modelle starten vierteljährlich. Claude Opus 4.8 startete am 16. April, GPT-5.5 am 23. April. Die Antwort auf „jetzt gerade" ändert sich. Überprüfen Sie diese Seite monatlich. <strong>Für lokale Nutzer:</strong> Llama 4 Scout ist das Maximum auf Consumer-Hardware (10M Kontext, einzelnes H100). Bei weniger VRAM verwenden Sie ältere Modelle wie Llama 3 8B oder Phi-4.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zum besten LLM aktuell',
        faqs: [
          {
            q: 'Ist Claude Opus 4.8 oder GPT-5.5 besser im Mai 2026?',
            a: 'Claude Opus 4.8 führt mit 87,6% SWE-Bench Verified für Coding und technische Analyse. GPT-5.5 Instant führt für allgemeinen Chat und Instruction Following (52,5% weniger Halluzinationen als frühere Versionen). Das beste Modell hängt von Ihrer spezifischen Aufgabe ab.',
          },
          {
            q: 'Was ist das beste lokale LLM mit nur 8 GB VRAM?',
            a: 'Mit 8 GB VRAM ist Llama 3 8B bei Q4_K_M die beste Option — es passt komfortabel mit ~5 GB VRAM und lässt Spielraum für den Kontext. Qwen 3 7B Q4_K_M ist eine enge Alternative mit starker mehrsprachiger Leistung.',
          },
          {
            q: 'Wie vergleicht sich Gemini 2.5 Pro mit Claude Opus 4.8 und GPT-5.5?',
            a: 'Gemini 2.5 Pro ist bei nativ multimodalen Aufgaben wie Video- und Bildanalyse führend. Bei reinem Text-Reasoning und Coding sind Claude Opus 4.8 und GPT-5.5 Instant im Allgemeinen die stärkeren Optionen.',
          },
          {
            q: 'Kann ein lokales LLM bei Coding-Aufgaben mit einem Cloud-Modell mithalten?',
            a: 'Llama 4 Scout (17B) und Llama 4 Maverick (17B/128 experts) bieten starke Open-Source-Alternativen, erreichen aber nicht Claude Opus 4.8 im SWE-Bench. Für die meisten alltäglichen Coding-Aufgaben ist der Unterschied gering genug, um praktikabel zu sein. Für komplexes Multi-Datei-Refactoring haben Cloud-Modelle noch einen klaren Vorteil.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Prompt Engineering',
    title: 'Quel est le meilleur LLM en ce moment ?',
    seoTitle: 'Meilleur LLM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Code : Claude Opus 4.8 (87,6% SWE-Bench). Chat général : GPT-5.5 Instant (52,5% moins d\'hallucinations). Local : Llama 4 Scout ou Qwen 3 14B. Mis à jour chaque mois.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur LLM en ce moment ?',
        answer: 'Pour le cloud : Claude Opus 4.8 domine le code et les longs documents, GPT-5.5 Instant la conversation générale, Gemini 2.5 Pro les tâches multimodales. En local : Llama 4 Scout avec 24 Go de VRAM ; Qwen 3 14B pour 12 Go de VRAM.',
        bullets: [
          'Cloud général : GPT-5.5 Instant — ChatGPT standard depuis mai 2026, 52,5% moins d\'hallucinations',
          'Cloud code : Claude Opus 4.8 — 87,6% SWE-Bench Verified',
          'Local 12 Go VRAM : Qwen 3 14B Q4_K_M — meilleur rapport qualité/VRAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Aucun LLM ne gagne sur toutes les tâches — Claude Opus 4.8 mène sur le code (87,6% SWE-Bench), GPT-5.5 Instant sur le chat général',
          'En local avec 12 Go de VRAM, Qwen 3 14B Q4_K_M offre le meilleur rapport qualité/VRAM disponible',
          'Les modèles cloud nécessitent des clés API et facturent par token ; les modèles locaux sont gratuits après l\'investissement matériel',
          'En local, Llama 4 Scout (17B/16 experts) tient sur un seul H100 avec 10M tokens de contexte ; Qwen 3 14B Q4_K_M pour 12 Go de VRAM',
        ],
      },
      body1: {
        title: 'Leaders cloud par catégorie de tâche',
        content: [
          '<strong>En mai 2026, Claude Opus 4.8 domine le code avec 87,6% SWE-Bench Verified et GPT-5.5 Instant domine le chat général avec 52,5% moins d\'hallucinations sur les LLMs cloud.</strong> Gemini 2.5 Pro reste le meilleur pour les tâches nativement multimodales comme l\'analyse vidéo et image.',
          'Aucun modèle cloud ne domine tous les benchmarks. Claude Opus 4.8 est le choix évident pour l\'ingénierie logicielle. GPT-5.5 Instant produit les résultats les plus fiables sur une grande variété de tâches quotidiennes avec 52,5% moins d\'hallucinations que les versions précédentes.',
          'Gemini 2.5 Pro est le seul modèle cloud avec une compréhension vidéo native intégrée. Pour les tâches de texte ou de code pur, la différence de qualité entre Claude Opus 4.8 et GPT-5.5 Instant est notable — choisissez selon votre flux de travail spécifique.',
        ],
        columns: ['Catégorie', 'Modèle', 'Point fort'],
        rows: [
          { 'Catégorie': 'Cloud général', 'Modèle': 'GPT-5.5 Instant', 'Point fort': 'ChatGPT standard depuis mai 2026, 52,5% moins d\'hallucinations' },
          { 'Catégorie': 'Cloud code', 'Modèle': 'Claude Opus 4.8', 'Point fort': '87,6% SWE-Bench Verified, long contexte' },
          { 'Catégorie': 'Local (12 Go VRAM)', 'Modèle': 'Qwen 3 14B Q4', 'Point fort': 'Meilleur rapport qualité/VRAM' },
          { 'Catégorie': 'Local (6 Go VRAM)', 'Modèle': 'Llama 3 8B Q4', 'Point fort': 'Vitesse + efficacité' },
        ],
      },
      body2: {
        title: 'Comment choisir sans lire 50 avis',
        content: [
          '<strong>Commencez par la contrainte.</strong> Budget, confidentialité, latence ou benchmark ? Choisissez d\'abord le modèle qui gère votre contrainte la plus difficile. Claude Opus 4.8 est meilleur pour le code, GPT-5.5 Instant pour le chat général, Llama 4 Scout pour l\'offline.',
          '<strong>Testez 2 modèles sur VOTRE tâche réelle.</strong> Les benchmarks publiés ne prédisent pas votre cas d\'usage. Utilisez les tiers API gratuits pour les modèles cloud (Claude, OpenAI) et exécutez Llama 4 Scout localement via Ollama. La plupart des utilisateurs découvrent rapidement celui qu\'ils préfèrent en pratique.',
          '<strong>Vérifiez mensuellement.</strong> Les nouveaux modèles lancent trimestriellement. Claude Opus 4.8 a lancé le 16 avril, GPT-5.5 le 23 avril. La réponse "en ce moment" change. Revérifiez cette page mensuellement. <strong>Pour les utilisateurs locaux,</strong> Llama 4 Scout est le plafond sur le matériel grand public (10M contexte, single H100). Pour moins de VRAM, utilisez des modèles plus anciens comme Llama 3 8B ou Phi-4.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le meilleur LLM en ce moment',
        faqs: [
          {
            q: 'Claude Opus 4.8 ou GPT-5.5 est-il meilleur en mai 2026 ?',
            a: 'Claude Opus 4.8 mène pour le code et l\'analyse technique (87,6% SWE-Bench Verified). GPT-5.5 Instant mène pour le chat général et le suivi d\'instructions (52,5% moins d\'hallucinations que les versions précédentes). Le meilleur modèle dépend de votre tâche spécifique.',
          },
          {
            q: 'Quel est le meilleur LLM local avec seulement 8 Go de VRAM ?',
            a: 'Avec 8 Go de VRAM, Llama 3 8B en Q4_K_M est la meilleure option — il tient confortablement avec ~5 Go de VRAM et laisse de la marge pour le contexte. Qwen 3 7B Q4_K_M est une alternative proche avec de solides performances multilingues.',
          },
          {
            q: 'Comment Gemini 2.5 Pro se compare-t-il à Claude Opus 4.8 et GPT-5.5 ?',
            a: 'Gemini 2.5 Pro est supérieur pour les tâches nativement multimodales comme l\'analyse vidéo et image. Pour le raisonnement textuel pur et le code, Claude Opus 4.8 et GPT-5.5 Instant restent généralement les choix les plus puissants.',
          },
          {
            q: 'Un LLM local peut-il rivaliser avec un modèle cloud pour le code ?',
            a: 'Llama 4 Scout (17B) et Llama 4 Maverick (17B/128 experts) offrent des alternatives open source puissantes mais ne correspondent pas à Claude Opus 4.8 sur SWE-Bench. Pour la plupart des tâches de codage quotidiennes, l\'écart est suffisamment faible pour être pratique. Pour les refactorisations complexes multi-fichiers, les modèles cloud conservent un avantage net.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Prompt Engineering',
    title: '現在最良のLLMは何ですか？',
    seoTitle: '2026年最良LLM | Prompt Bites | PromptQuorum',
    metaDescription: 'クラウド：Claude Opus 4.8（87.6% SWE-Bench）コーディング、GPT-5.5 Instant（幻覚52.5%削減）汎用チャット。ローカル：Llama 4 Scout か Qwen 3 14B。毎月更新。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    quickAnswerTop: {
      ja: {
        question: '現在最良のLLMは何ですか？',
        answer: 'クラウド利用では：Claude Opus 4.8がコーディングと長文書をリード、GPT-5.5 Instantが汎用チャット、Gemini 2.5 Proがマルチモーダルタスクを担当。ローカルでは：24GB VRAMあればLlama 4 Scout、12GB VRAMならQwen 3 14B。',
        bullets: [
          'クラウド汎用：GPT-5.5 Instant — ChatGPT標準（2026年5月〜）、幻覚を52.5%削減',
          'クラウドコーディング：Claude Opus 4.8 — SWE-Bench Verified 87.6%',
          'ローカル12GB VRAM：Qwen 3 14B Q4_K_M — 最高の品質/VRAM比',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'すべてのタスクで勝る単一LLMは存在しない — Claude Opus 4.8がコーディングをリード（87.6% SWE-Bench）、GPT-5.5 Instantが汎用チャットをリード',
          'ローカルで12GB VRAMの場合、Qwen 3 14B Q4_K_Mが利用可能な最高の品質/VRAM比を提供する',
          'クラウドモデルはAPIキーが必要でトークン課金が発生するが、ローカルモデルはハードウェア投資後は無料で動作する',
          'ローカル利用では、Llama 4 Scout（17B/16 experts）は単一H100で10Mトークンコンテキスト対応；12GB VRAMではQwen 3 14B Q4_K_M',
        ],
      },
      body1: {
        title: 'タスクカテゴリ別クラウドLLMリーダー',
        content: [
          '<strong>2026年5月時点で、Claude Opus 4.8が87.6% SWE-Bench Verifiedでコーディングをリード、GPT-5.5 Instantが52.5%の幻覚削減で汎用チャットをリードしています。</strong> Gemini 2.5 Proは画像分析や動画理解などのネイティブマルチモーダルタスクで依然としてリードしています。',
          'すべてのベンチマークを制する単一のクラウドモデルは存在しません。Claude Opus 4.8はソフトウェアエンジニアリングの明確な選択肢です。GPT-5.5 Instantは前バージョンよりも52.5%幻覚が減り、多様な日常タスクで最も安定した結果を生み出します。',
          'Gemini 2.5 Proはネイティブな動画理解が組み込まれた唯一のクラウドモデルです。純粋なテキストやコードのタスクでは、Claude Opus 4.8とGPT-5.5 Instantの品質差は顕著です — 特定のワークフローに応じて選択してください。',
        ],
        columns: ['カテゴリ', 'モデル', '主な強み'],
        rows: [
          { 'カテゴリ': 'クラウド汎用', 'モデル': 'GPT-5.5 Instant', '主な強み': '2026年5月〜ChatGPT標準、幻覚を52.5%削減' },
          { 'カテゴリ': 'クラウドコーディング', 'モデル': 'Claude Opus 4.8', '主な強み': '87.6% SWE-Bench Verified、長文脈' },
          { 'カテゴリ': 'ローカル（12 GB VRAM）', 'モデル': 'Qwen 3 14B Q4', '主な強み': '最高の品質/VRAM比' },
          { 'カテゴリ': 'ローカル（6 GB VRAM）', 'モデル': 'Llama 3 8B Q4', '主な強み': 'スピード + 効率' },
        ],
      },
      body2: {
        title: '50個のレビューを読まずに選ぶ方法',
        content: [
          '<strong>制約から始めましょう。</strong> 予算、プライバシー、レイテンシ、またはベンチマーク？ 最初に最も難しい制約に対応するモデルを選びます。Claude Opus 4.8はコーディングに最適、GPT-5.5 Instantは汎用チャットに最適、Llama 4 Scoutはオフライン用。',
          '<strong>YOUR実際のタスクで2つのモデルをテストします。</strong> 公開ベンチマークはあなたのユースケースを予測しません。クラウドモデル（Claude、OpenAI）の無料APIティアを使用し、OllamaでLlama 4 Scoutをローカルで実行します。ほとんどのユーザーは実際に使用して、どちらを好むかをすぐに発見します。',
          '<strong>毎月チェックしてください。</strong> 新しいモデルは四半期ごとに発売されます。Claude Opus 4.8は4月16日に発売、GPT-5.5は4月23日に発売。「今」の答えは変わります。毎月このページを確認してください。<strong>ローカルユーザー向け：</strong> Llama 4 Scoutはコンシューマーハードウェアの上限（10Mコンテキスト、シングルH100）です。VRAMが少ない場合は、Llama 3 8BやPhi-4などの古いモデルを使用してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: '現在最良のLLMに関するよくある質問',
        faqs: [
          {
            q: 'Claude Opus 4.8またはGPT-5.5は2026年5月で優れていますか？',
            a: 'Claude Opus 4.8はコーディングと技術分析で87.6% SWE-Bench Verifiedでリード。GPT-5.5 Instantは汎用チャットと命令追従で（前バージョンより52.5%幻覚削減）リード。最良のモデルは具体的なタスクによって異なります。',
          },
          {
            q: '8GB VRAMしかない場合の最良のローカルLLMは何ですか？',
            a: '8GB VRAMでは、Q4_K_MのLlama 3 8Bが最良の選択です — 約5GB VRAMで快適に収まり、コンテキストに余裕があります。Qwen 3 7B Q4_K_Mは多言語パフォーマンスが強力な近接した代替案です。',
          },
          {
            q: 'Gemini 2.5 ProはClaude Opus 4.8とGPT-5.5とどう比べますか？',
            a: 'Gemini 2.5 Proは動画・画像分析などのネイティブマルチモーダルタスクで優位です。純粋なテキスト推論とコーディングでは、Claude Opus 4.8とGPT-5.5 Instantが一般的により強力な選択肢です。',
          },
          {
            q: 'ローカルLLMはコーディングタスクでクラウドモデルに匹敵できますか？',
            a: 'Llama 4 Scout（17B）とLlama 4 Maverick（17B/128 experts）は強力なオープンソース代替案を提供しますが、SWE-BenchでClaude Opus 4.8と同等ではありません。ほとんどの日常的なコーディング補助タスクでは差は実用的に小さいです。複雑なマルチファイルリファクタリングでは、クラウドモデルがまだ明確な優位性を持っています。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Prompt Engineering',
    title: '¿Cuál es el mejor LLM ahora mismo?',
    seoTitle: 'Mejor LLM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Código: Claude Opus 4.8 (87.6% SWE-Bench). Chat: GPT-5.5 Instant (52.5% menos alucinaciones). Local: Llama 4 Scout o Qwen 3 14B. Actualizado mensualmente.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    current_models_mentioned: ['Claude Opus 4.8', 'GPT-5.5 Instant', 'Gemini 2.5 Pro', 'Llama 4 Scout', 'Qwen 3 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Usuarios comparando los mejores LLMs disponibles en cloud y local',
    parentArticle: '/prompt-engineering/best-local-llms-2026',
    siblingBites: ['co-star-prompt-framework'],
    is_living_page: true,
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor LLM ahora mismo?',
        answer: 'Para tareas de programación en cloud, Claude Opus 4.8 logra 87.6% en SWE-Bench, mientras GPT-5.5 Instant lidera chat general con 52.5% menos alucinaciones. Cloud: Claude Opus 4.8 para código y documentos largos, GPT-5.5 Instant para chat general, Gemini 2.5 Pro para tareas multimodales. Local: Llama 4 Scout si tienes 24 GB VRAM; Qwen 3 14B para 12 GB VRAM.',
        bullets: [
          'Cloud general: GPT-5.5 Instant — ChatGPT por defecto, 52.5% menos alucinaciones',
          'Cloud código: Claude Opus 4.8 — 87.6% SWE-Bench Verified',
          'Local 12 GB VRAM: Qwen 3 14B Q4_K_M — mejor relación calidad/VRAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ningún LLM gana en todas las tareas — Claude Opus 4.8 lidera en código (87.6% SWE-Bench), GPT-5.5 Instant en chat general',
          'Para uso local con 12 GB VRAM, Qwen 3 14B Q4_K_M ofrece la mejor relación calidad/VRAM disponible',
          'Los modelos cloud requieren claves API y cuestan por token; los modelos locales corren gratis después de la inversión en hardware',
          'Para uso local, Llama 4 Scout (17B/16 expertos) cabe en un H100 único con contexto de 10M tokens; Qwen 3 14B Q4_K_M para 12 GB VRAM',
        ],
      },
      body1: {
        title: 'El mejor LLM depende de la tarea — aquí está el mapa',
        content: [
          '<strong>A mayo de 2026, tres familias de modelos lideran casos de uso diferentes. Esta página se actualiza mensualmente — última verificación mayo 2026. Para código y análisis técnico: Claude Opus 4.8 (Anthropic). Para chat general y ChatGPT: GPT-5.5 Instant (OpenAI). Para privacidad, trabajo offline y uso ilimitado: Llama 4 Scout corriendo localmente.</strong> Abajo: cuándo gana cada uno, y cuál elegir según tu flujo de trabajo.',
          'Ningún modelo cloud único domina todos los benchmarks. Claude Opus 4.8 logra 87.6% en SWE-Bench Verified, lo que lo convierte en la opción clara para ingeniería de software. GPT-5.5 Instant (el nuevo ChatGPT por defecto desde mayo 2026) produce resultados más fiables en diversas tareas cotidianas con 52.5% menos alucinaciones que versiones previas.',
          'Gemini 2.5 Pro sigue siendo el modelo multimodal nativo más fuerte para análisis de video e imágenes. Para tareas de texto o código puro, la diferencia de calidad entre Claude Opus 4.8 y GPT-5.5 es notable — elige según tu flujo de trabajo específico. Para uso local, Llama 4 Scout cabe en hardware de consumidor con una ventana de contexto de 10M tokens.',
        ],
        columns: ['Caso de Uso', 'Mejor LLM', 'Por qué'],
        rows: [
          { 'Caso de Uso': 'Código (Python, TypeScript)', 'Mejor LLM': 'Claude Opus 4.8', 'Por qué': '87.6% SWE-Bench Verified, lidera benchmarks de código' },
          { 'Caso de Uso': 'Chat general', 'Mejor LLM': 'GPT-5.5 Instant', 'Por qué': 'ChatGPT por defecto desde mayo 2026, 52.5% menos alucinaciones' },
          { 'Caso de Uso': 'Local / offline', 'Mejor LLM': 'Llama 4 Scout', 'Por qué': '17B/16 expertos, cabe en H100 único, contexto de 10M tokens' },
          { 'Caso de Uso': 'Documentos largos', 'Mejor LLM': 'Claude Opus 4.8', 'Por qué': 'Ventana de contexto de 1M, retención fuerte' },
          { 'Caso de Uso': 'Imagen+texto rápido', 'Mejor LLM': 'GPT-5.5 o Gemini 2.5 Pro', 'Por qué': 'Latencia multimodal' },
          { 'Caso de Uso': 'Throughput barato', 'Mejor LLM': 'Claude Haiku o GPT-5.5 mini', 'Por qué': '$/M tokens' },
          { 'Caso de Uso': 'Investigación / agentes', 'Mejor LLM': 'Claude Opus 4.8', 'Por qué': 'MCP-Atlas 77.3%, confiabilidad en function calling' },
        ],
      },
      body2: {
        title: 'Cómo elegir sin leer 50 reseñas',
        content: [
          '<strong>Comienza con la restricción.</strong> ¿Presupuesto, privacidad, latencia o benchmark? Elige el modelo que maneje tu restricción más difícil primero. Claude Opus 4.8 es mejor para código, GPT-5.5 Instant para chat general, Llama 4 Scout para offline.',
          '<strong>Prueba 2 modelos en TU tarea real.</strong> Los benchmarks publicados no predicen tu caso de uso. Usa tiers API gratis para modelos cloud (Claude, OpenAI) y corre Llama 4 Scout localmente vía Ollama. La mayoría de usuarios descubren que prefieren uno en la práctica.',
          '<strong>Monitorea mensualmente.</strong> Nuevos modelos se lanzan trimestralmente. Claude Opus 4.8 se lanzó el 16 de abril, GPT-5.5 el 23 de abril. La respuesta "ahora mismo" cambia. Revisa esta página mensualmente. <strong>Para usuarios locales,</strong> Llama 4 Scout es el techo en hardware de consumidor (contexto de 10M, H100 único). Para menor VRAM, usa modelos más viejos como Llama 3 8B o Phi-4.',
        ],
        callouts: [{ type: 'info', text: 'Última verificación: mayo 2026. El panorama del mejor LLM-ahora-mismo cambia rápidamente — Claude Opus 4.8 se lanzó el 16 de abril, GPT-5.5 el 23 de abril. Revisa esta página mensualmente. Los lanzamientos mayores (Claude 5, GPT-6, Llama 5) desencadenarán actualizaciones.' }],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre el mejor LLM ahora',
        faqs: [
          {
            q: '¿Claude Opus 4.8 o GPT-5.5 es mejor en mayo 2026?',
            a: 'Claude Opus 4.8 lidera en SWE-Bench Verified (87.6%) para código y análisis técnico. GPT-5.5 Instant lidera para chat general e instruction following (52.5% menos alucinaciones que versiones previas). El mejor modelo depende de tu tarea específica.',
          },
          {
            q: '¿Cuál es el mejor LLM local si solo tengo 8 GB VRAM?',
            a: 'Con 8 GB VRAM, Llama 3 8B en Q4_K_M es todavía la mejor opción — cabe cómodamente con ~5 GB VRAM y deja espacio para contexto. Para hardware más nuevo, Llama 4 Scout (17B/16 expertos) requiere un H100 único o equivalente (24 GB VRAM).',
          },
          {
            q: '¿Cómo se compara Gemini 2.5 Pro con Claude Opus 4.8 y GPT-5.5?',
            a: 'Gemini 2.5 Pro lidera para tareas nativas multimodales como análisis de video e imágenes. Para puro razonamiento de texto y código, Claude Opus 4.8 y GPT-5.5 son las opciones más fuertes. Ve nuestra <a href="/es/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">guía del framework CO-STAR</a> para tips sobre mejorar output de cualquier modelo cloud.',
          },
          {
            q: '¿Puede un LLM local igualar modelos cloud para tareas de código?',
            a: 'Llama 4 Scout (17B) y Llama 4 Maverick (17B/128 expertos) proporcionan alternativas open-source fuertes pero no igualan Claude Opus 4.8 en SWE-Bench. Para la mayoría de tareas cotidianas de asistencia de código, la brecha es lo suficientemente pequeña como para ser práctica. Para refactoring complejo multi-archivo, los modelos cloud aún mantienen una ventaja clara.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Prompt Engineering',
    title: 'Qual é o melhor LLM agora?',
    seoTitle: 'Melhor LLM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Código: Claude Opus 4.8 (87,6% SWE-Bench). Chat: GPT-5.5 Instant (52,5% menos alucinações). Local: Llama 4 Scout ou Qwen 3 14B. Atualizado mensalmente.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    current_models_mentioned: ['Claude Opus 4.8', 'GPT-5.5 Instant', 'Gemini 2.5 Pro', 'Llama 4 Scout', 'Qwen 3 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Usuários comparando os melhores LLMs disponíveis em cloud e local',
    parentArticle: '/prompt-engineering/best-local-llms-2026',
    siblingBites: ['co-star-prompt-framework', 'ai-model-knowledge-cutoff-dates'],
    is_living_page: true,
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor LLM agora?',
        answer: 'Para tarefas de programação em cloud, Claude Opus 4.8 alcança 87,6% no SWE-Bench, enquanto GPT-5.5 Instant lidera chat geral com 52,5% menos alucinações. Cloud: Claude Opus 4.8 para código e documentos longos, GPT-5.5 Instant para chat geral, Gemini 2.5 Pro para tarefas multimodais. Local: Llama 4 Scout se você tiver 24 GB VRAM; Qwen 3 14B para 12 GB VRAM.',
        bullets: [
          'Cloud geral: GPT-5.5 Instant — ChatGPT padrão, 52,5% menos alucinações',
          'Cloud código: Claude Opus 4.8 — 87,6% SWE-Bench Verified',
          'Local 12 GB VRAM: Qwen 3 14B Q4_K_M — melhor relação qualidade/VRAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Nenhum LLM vence em todas as tarefas — Claude Opus 4.8 lidera em código (87,6% SWE-Bench), GPT-5.5 Instant em chat geral',
          'Para uso local com 12 GB VRAM, Qwen 3 14B Q4_K_M oferece a melhor relação qualidade/VRAM disponível',
          'Modelos cloud requerem chaves de API e cobram por token; modelos locais rodam gratuitamente após o investimento em hardware',
          'Para uso local, Llama 4 Scout (17B/16 experts) cabe em um único H100 com contexto de 10M tokens; Qwen 3 14B Q4_K_M para 12 GB VRAM',
        ],
      },
      body1: {
        title: 'O melhor LLM depende da tarefa — aqui está o mapa',
        content: [
          '<strong>Em maio de 2026, três famílias de modelos lideram diferentes casos de uso. Esta página é atualizada mensalmente — última verificação maio 2026. Para código e análise técnica: Claude Opus 4.8 (Anthropic). Para chat geral e ChatGPT: GPT-5.5 Instant (OpenAI). Para privacidade, trabalho offline e uso ilimitado: Llama 4 Scout rodando localmente.</strong> Abaixo: quando cada um vence, e qual escolher conforme seu fluxo de trabalho.',
          'Nenhum modelo cloud único domina todos os benchmarks. Claude Opus 4.8 alcança 87,6% no SWE-Bench Verified, tornando-o a escolha clara para engenharia de software. GPT-5.5 Instant (o novo padrão do ChatGPT desde maio de 2026) produz os resultados mais confiáveis em diversas tarefas cotidianas com 52,5% menos alucinações do que versões anteriores.',
          'Gemini 2.5 Pro continua sendo o modelo natiamente multimodal mais forte para análise de vídeo e imagem. Para tarefas de texto puro ou código, a diferença de qualidade entre Claude Opus 4.8 e GPT-5.5 é notável — escolha conforme seu fluxo de trabalho específico. Para uso local, Llama 4 Scout cabe em hardware de consumidor com uma janela de contexto de 10M tokens.',
        ],
        columns: ['Caso de Uso', 'Melhor LLM', 'Por quê'],
        rows: [
          { 'Caso de Uso': 'Código (Python, TypeScript)', 'Melhor LLM': 'Claude Opus 4.8', 'Por quê': '87,6% SWE-Bench Verified, lidera benchmarks de código' },
          { 'Caso de Uso': 'Chat geral', 'Melhor LLM': 'GPT-5.5 Instant', 'Por quê': 'ChatGPT padrão desde maio 2026, 52,5% menos alucinações' },
          { 'Caso de Uso': 'Local / offline', 'Melhor LLM': 'Llama 4 Scout', 'Por quê': '17B/16 experts, cabe em H100 único, contexto de 10M tokens' },
          { 'Caso de Uso': 'Documentos longos', 'Melhor LLM': 'Claude Opus 4.8', 'Por quê': 'Janela de contexto de 1M, forte retenção' },
          { 'Caso de Uso': 'Imagem+texto rápido', 'Melhor LLM': 'GPT-5.5 ou Gemini 2.5 Pro', 'Por quê': 'Latência multimodal' },
          { 'Caso de Uso': 'Throughput barato', 'Melhor LLM': 'Claude Haiku ou GPT-5.5 mini', 'Por quê': '$/M tokens' },
          { 'Caso de Uso': 'Pesquisa / agentes', 'Melhor LLM': 'Claude Opus 4.8', 'Por quê': 'MCP-Atlas 77,3%, confiabilidade em function calling' },
        ],
      },
      body2: {
        title: 'Como escolher sem ler 50 avaliações',
        content: [
          '<strong>Comece pela restrição.</strong> Orçamento, privacidade, latência ou benchmark? Escolha o modelo que lida com sua restrição mais difícil primeiro. Claude Opus 4.8 é melhor para código, GPT-5.5 Instant para chat geral, Llama 4 Scout para offline.',
          '<strong>Teste 2 modelos na SUA tarefa real.</strong> Benchmarks publicados não preveem seu caso de uso. Use tiers de API gratuitos para modelos cloud (Claude, OpenAI) e rode Llama 4 Scout localmente via Ollama. A maioria dos usuários descobre rapidamente qual prefere na prática.',
          '<strong>Monitore mensalmente.</strong> Novos modelos lançam trimestralmente. Claude Opus 4.8 lançou em 16 de abril, GPT-5.5 em 23 de abril. A resposta "agora" muda. Verifique esta página mensalmente. <strong>Para usuários locais,</strong> Llama 4 Scout é o teto em hardware de consumidor (contexto de 10M, H100 único). Para menor VRAM, use modelos mais antigos como Llama 3 8B ou Phi-4.',
        ],
        callouts: [{ type: 'info', text: 'Última verificação: maio 2026. O panorama do melhor-LLM-agora muda rapidamente — Claude Opus 4.8 lançou em 16 de abril, GPT-5.5 em 23 de abril. Verifique esta página mensalmente. Lançamentos maiores (Claude 5, GPT-6, Llama 5) irão acionar atualizações.' }],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre o melhor LLM agora',
        faqs: [
          {
            q: 'Claude Opus 4.8 ou GPT-5.5 é melhor em maio de 2026?',
            a: 'Claude Opus 4.8 lidera no SWE-Bench Verified (87,6%) para código e análise técnica. GPT-5.5 Instant lidera para chat geral e seguimento de instruções (52,5% menos alucinações do que versões anteriores). O melhor modelo depende da sua tarefa específica.',
          },
          {
            q: 'Qual é o melhor LLM local se eu tiver apenas 8 GB de VRAM?',
            a: 'Com 8 GB de VRAM, Llama 3 8B em Q4_K_M ainda é a melhor opção — cabe confortavelmente com ~5 GB de VRAM e deixa espaço para contexto. Para hardware mais novo, Llama 4 Scout (17B/16 experts) requer um único H100 ou equivalente (24 GB VRAM).',
          },
          {
            q: 'Como Gemini 2.5 Pro se compara ao Claude Opus 4.8 e GPT-5.5?',
            a: 'Gemini 2.5 Pro lidera para tarefas nativas multimodais como análise de vídeo e imagem. Para raciocínio de texto puro e código, Claude Opus 4.8 e GPT-5.5 são as escolhas mais fortes. Veja nosso <a href="/pt/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">guia do framework CO-STAR</a> para dicas sobre como obter melhores resultados de qualquer modelo cloud.',
          },
          {
            q: 'Um LLM local pode igualar modelos cloud para tarefas de código?',
            a: 'Llama 4 Scout (17B) e Llama 4 Maverick (17B/128 experts) fornecem alternativas open-source fortes, mas não igualam Claude Opus 4.8 no SWE-Bench. Para a maioria das tarefas cotidianas de assistência de código, a diferença é pequena o suficiente para ser prática. Para refatoração complexa de múltiplos arquivos, os modelos cloud ainda mantêm uma vantagem clara.',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Prompt Engineering',
    title: '当前最好的 LLM 是什么？',
    seoTitle: '2026年最佳LLM | Prompt Bites | PromptQuorum',
    metaDescription: '编程：Claude Opus 4.8（87.6% SWE-Bench）；对话：GPT-5.5 Instant（幻觉减少 52.5%）；本地：Llama 4 Scout 或 Qwen 3 14B。每月更新。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    quickAnswerTop: {
      zh: {
        question: '当前最好的 LLM 是什么？',
        answer: '云端：Claude Opus 4.8 在编程和长文档领先，GPT-5.5 Instant 适合通用对话，Gemini 2.5 Pro 适合多模态任务。本地：24GB VRAM 选 Llama 4 Scout；12 GB VRAM 选 Qwen 3 14B。',
        bullets: [
          '云端通用：GPT-5.5 Instant — ChatGPT 默认（2026 年 5 月起），幻觉减少 52.5%',
          '云端编程：Claude Opus 4.8 — SWE-Bench Verified 87.6%',
          '本地 12 GB VRAM：Qwen 3 14B Q4_K_M — 最佳质量/VRAM 比',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '没有单一 LLM 能在所有任务上获胜——Claude Opus 4.8 领先编程（87.6% SWE-Bench），GPT-5.5 Instant 领先通用对话',
          '本地使用 12 GB VRAM 时，Qwen 3 14B Q4_K_M 提供可用的最佳质量/VRAM 比',
          '云端模型需要 API 密钥且按 token 计费；本地模型在硬件投入后免费运行',
          '本地使用中，Llama 4 Scout（17B/16 experts）可在单一 H100 上运行，拥有 10M 上下文；12 GB VRAM 选 Qwen 3 14B Q4_K_M',
        ],
      },
      body1: {
        title: '按任务类别划分的云端 LLM 领导者',
        content: [
          '<strong>截至 2026 年 5 月，Claude Opus 4.8 以 87.6% SWE-Bench Verified 在编程上领先，GPT-5.5 Instant 以 52.5% 的幻觉减少在通用对话上领先云端 LLM。</strong> Gemini 2.5 Pro 在图像分析和视频理解等原生多模态任务上保持领先。',
          '没有单一云端模型能主导所有基准测试。Claude Opus 4.8 是软件工程的明确选择。GPT-5.5 Instant 在多样化的日常任务上产生最可靠的结果，与前版本相比幻觉减少 52.5%。',
          'Gemini 2.5 Pro 是唯一内置原生视频理解的云端模型。对于纯文本或代码任务，Claude Opus 4.8 和 GPT-5.5 Instant 之间的质量差异显著——根据具体工作流选择。',
        ],
        columns: ['类别', '模型', '核心优势'],
        rows: [
          { '类别': '云端通用', '模型': 'GPT-5.5 Instant', '核心优势': '2026 年 5 月起 ChatGPT 默认，幻觉减少 52.5%' },
          { '类别': '云端编程', '模型': 'Claude Opus 4.8', '核心优势': '87.6% SWE-Bench Verified，长上下文' },
          { '类别': '本地（12 GB VRAM）', '模型': 'Qwen 3 14B Q4', '核心优势': '最佳质量/VRAM 比' },
          { '类别': '本地（6 GB VRAM）', '模型': 'Llama 3 8B Q4', '核心优势': '速度 + 效率' },
        ],
      },
      body2: {
        title: '不读 50 篇评论如何选择',
        content: [
          '<strong>从约束开始。</strong> 预算、隐私、延迟还是基准？ 首先选择处理最大难题的模型。Claude Opus 4.8 最适合编程，GPT-5.5 Instant 最适合通用聊天，Llama 4 Scout 最适合离线。',
          '<strong>在 YOUR 实际任务上测试 2 个模型。</strong> 公开基准不能预测您的用例。对云端模型（Claude、OpenAI）使用免费 API 层，通过 Ollama 本地运行 Llama 4 Scout。大多数用户在实践中迅速发现他们的偏好。',
          '<strong>每月检查一次。</strong> 新模型按季度发布。Claude Opus 4.8 在 4 月 16 日发布，GPT-5.5 在 4 月 23 日发布。"现在"的答案在变化。每月重新检查此页面。<strong>对于本地用户，</strong>Llama 4 Scout 是消费级硬件的上限（10M 上下文，单个 H100）。VRAM 更少时，使用较旧的模型如 Llama 3 8B 或 Phi-4。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于当前最好 LLM 的快速解答',
        faqs: [
          {
            q: '2026 年 Claude Opus 4.8 还是最好的 LLM 吗？',
            a: '截至 2026 年 5 月，Claude Opus 4.8 在编程和技术分析上领先（87.6% SWE-Bench Verified）。GPT-5.5 Instant 在通用推理和指令遵循上领先（相比前版本幻觉减少 52.5%）。最好的模型取决于您的具体任务。',
          },
          {
            q: '只有 8 GB VRAM 时最好的本地 LLM 是什么？',
            a: '使用 8 GB VRAM 时，Q4_K_M 的 Llama 3 8B 是最佳选择——它可以舒适地用约 5 GB VRAM 运行，为上下文留有余量。Qwen 3 7B Q4_K_M 是多语言性能强劲的近似替代方案。',
          },
          {
            q: 'Gemini 2.5 Pro 与 Claude Opus 4.8 和 GPT-5.5 如何比较？',
            a: 'Gemini 2.5 Pro 在视频和图像分析等原生多模态任务上更强。对于纯文本推理和编程，Claude Opus 4.8 和 GPT-5.5 Instant 通常是更强的选择。',
          },
          {
            q: '本地 LLM 能在编程任务上与云端模型媲美吗？',
            a: 'Llama 4 Scout（17B）和 Llama 4 Maverick（17B/128 experts）提供强大的开源替代方案，但在 SWE-Bench 上无法匹敌 Claude Opus 4.8。对于大多数日常编程辅助任务，差距已小到实用。对于复杂的多文件重构，云端模型仍有明显优势。',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Prompt Engineering',
    title: 'ما هو أفضل نموذج لغوي كبير الآن؟',
    seoTitle: 'أفضل ⁨LLM 2026⁩: ⁨Claude Opus 4.8⁩ و⁨GPT-5.5⁩ و⁨Llama 4⁩',
    metaDescription: '⁨Claude Opus 4.8⁩ يحقق ⁨87.6%⁩ على ⁨SWE-Bench. GPT-5.5 Instant⁩ يقلل الهلوسة ⁨52.5%⁩. محلياً: ⁨Llama 4 Scout⁩ لـ⁨24 GB VRAM⁩ أو ⁨Qwen 3 14B⁩ لـ⁨12 GB⁩.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    current_models_mentioned: ['Claude Opus 4.8', 'GPT-5.5 Instant', 'Gemini 2.5 Pro', 'Llama 4 Scout', 'Qwen 3 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المستخدمون الذين يقارنون أفضل النماذج اللغوية الكبيرة المتاحة سحابياً ومحلياً',
    parentArticle: '/prompt-engineering/best-local-llms-2026',
    siblingBites: ['co-star-prompt-framework', 'ai-model-knowledge-cutoff-dates'],
    is_living_page: true,
    quickAnswerTop: {
      ar: {
        question: 'ما هو أفضل نموذج لغوي كبير الآن؟',
        answer: 'لمهام البرمجة السحابية، يحقق Claude Opus 4.8 نسبة 87.6% على SWE-Bench، بينما يتصدر GPT-5.5 Instant المحادثة العامة بنسبة هلوسة أقل بـ52.5%. سحابياً: Claude Opus 4.8 للبرمجة والمستندات الطويلة، GPT-5.5 Instant للمحادثة العامة، Gemini 2.5 Pro للمهام متعددة الوسائط. محلياً: Llama 4 Scout إذا كان لديك 24 GB VRAM؛ Qwen 3 14B لـ12 GB VRAM.',
        bullets: [
          'السحابة العامة: GPT-5.5 Instant — الافتراضي في ChatGPT، هلوسة أقل بـ52.5%',
          'البرمجة السحابية: Claude Opus 4.8 — 87.6% SWE-Bench Verified',
          'محلياً 12 GB VRAM: Qwen 3 14B Q4_K_M — أفضل نسبة جودة/VRAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'لا يوجد نموذج لغوي كبير واحد يفوز في كل المهام — Claude Opus 4.8 يتصدر البرمجة (87.6% SWE-Bench)، و GPT-5.5 Instant يتصدر المحادثة العامة',
          'للاستخدام المحلي بذاكرة 12 GB VRAM، يوفر Qwen 3 14B Q4_K_M أفضل نسبة جودة/VRAM متاحة',
          'النماذج السحابية تتطلب مفاتيح API وتُكلِّف بحسب الرمز المميز؛ النماذج المحلية تعمل مجاناً بعد الاستثمار في الأجهزة',
          'للاستخدام المحلي، يتسع Llama 4 Scout (17B/16 خبراء) في H100 واحد مع سياق 10M رمز مميز؛ Qwen 3 14B Q4_K_M لـ12 GB VRAM',
        ],
      },
      body1: {
        title: 'أفضل نموذج لغوي كبير يعتمد على المهمة — إليك الخريطة',
        content: [
          '<strong>اعتباراً من مايو 2026، تتصدر ثلاث عائلات نماذج حالات استخدام مختلفة. تُحدَّث هذه الصفحة شهرياً — آخر تحقق مايو 2026. للبرمجة والتحليل التقني: Claude Opus 4.8 (Anthropic). للمحادثة العامة و ChatGPT: GPT-5.5 Instant (OpenAI). للخصوصية والعمل دون اتصال والاستخدام غير المحدود: Llama 4 Scout يعمل محلياً.</strong> أدناه: متى يتفوق كل نموذج، وأيهم تختار بحسب سير عملك.',
          'لا يهيمن نموذج سحابي واحد على جميع المعايير. يحقق Claude Opus 4.8 نسبة 87.6% على SWE-Bench Verified، مما يجعله الخيار الواضح لهندسة البرمجيات. يُنتج GPT-5.5 Instant (الافتراضي الجديد في ChatGPT منذ مايو 2026) نتائج أكثر موثوقية في مهام يومية متنوعة بنسبة هلوسة أقل بـ52.5% مقارنة بالإصدارات السابقة.',
          'لا يزال Gemini 2.5 Pro النموذج متعدد الوسائط الأصلي الأقوى لتحليل الفيديو والصور. لمهام النصوص أو البرمجة البحتة، الفارق النوعي بين Claude Opus 4.8 وGPT-5.5 ملحوظ — اختر بحسب سير عملك المحدد. للاستخدام المحلي، يتسع Llama 4 Scout في أجهزة المستهلكين مع نافذة سياق 10M رمز مميز.',
        ],
        columns: ['حالة الاستخدام', 'أفضل نموذج', 'السبب'],
        rows: [
          { 'حالة الاستخدام': 'البرمجة (Python, TypeScript)', 'أفضل نموذج': 'Claude Opus 4.8', 'السبب': '87.6% SWE-Bench Verified، يتصدر معايير البرمجة' },
          { 'حالة الاستخدام': 'المحادثة العامة', 'أفضل نموذج': 'GPT-5.5 Instant', 'السبب': 'الافتراضي في ChatGPT منذ مايو 2026، هلوسة أقل بـ52.5%' },
          { 'حالة الاستخدام': 'محلي / دون اتصال', 'أفضل نموذج': 'Llama 4 Scout', 'السبب': '17B/16 خبراء، يتسع في H100 واحد، سياق 10M رمز مميز' },
          { 'حالة الاستخدام': 'المستندات الطويلة', 'أفضل نموذج': 'Claude Opus 4.8', 'السبب': 'نافذة سياق 1M، احتفاظ قوي بالمعلومات' },
          { 'حالة الاستخدام': 'صورة + نص سريع', 'أفضل نموذج': 'GPT-5.5 أو Gemini 2.5 Pro', 'السبب': 'زمن استجابة متعدد الوسائط' },
          { 'حالة الاستخدام': 'إنتاجية منخفضة التكلفة', 'أفضل نموذج': 'Claude Haiku أو GPT-5.5 mini', 'السبب': '$/M رمز مميز' },
          { 'حالة الاستخدام': 'البحث / العوامل الذكية', 'أفضل نموذج': 'Claude Opus 4.8', 'السبب': 'MCP-Atlas 77.3%، موثوقية استدعاء الدوال' },
        ],
      },
      body2: {
        title: 'كيف تختار دون قراءة 50 مراجعة',
        content: [
          '<strong>ابدأ بالقيد.</strong> هل هو الميزانية أم الخصوصية أم زمن الاستجابة أم المعيار؟ اختر النموذج الذي يتعامل مع قيدك الأصعب أولاً. Claude Opus 4.8 الأفضل للبرمجة، GPT-5.5 Instant للمحادثة العامة، Llama 4 Scout للعمل دون اتصال.',
          '<strong>اختبر نموذجَين على مهمتك الفعلية.</strong> المعايير المنشورة لا تتنبأ بحالة استخدامك. استخدم الطبقات المجانية من API للنماذج السحابية (Claude, OpenAI) وشغّل Llama 4 Scout محلياً عبر Ollama. يكتشف معظم المستخدمين في الممارسة العملية أيهما يفضلون.',
          '<strong>تابع شهرياً.</strong> تُطلَق نماذج جديدة كل ربع سنة. أُطلق Claude Opus 4.8 في 16 أبريل، وGPT-5.5 في 23 أبريل. الإجابة "الآن" تتغير. راجع هذه الصفحة شهرياً. <strong>لمستخدمي النماذج المحلية،</strong> Llama 4 Scout هو الحد الأقصى على أجهزة المستهلكين (سياق 10M، H100 واحد). لذاكرة VRAM أقل، استخدم نماذج أقدم مثل Llama 3 8B أو Phi-4.',
        ],
        callouts: [{ type: 'info', text: 'آخر تحقق: مايو 2026. يتغير مشهد أفضل نموذج لغوي كبير الآن بسرعة — أُطلق Claude Opus 4.8 في 16 أبريل، وGPT-5.5 في 23 أبريل. راجع هذه الصفحة شهرياً. الإصدارات الكبرى (Claude 5, GPT-6, Llama 5) ستستدعي تحديثات.' }],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول أفضل نموذج لغوي كبير الآن',
        faqs: [
          {
            q: 'أيهما أفضل Claude Opus 4.8 أم GPT-5.5 في مايو 2026؟',
            a: 'يتصدر Claude Opus 4.8 على SWE-Bench Verified (87.6%) للبرمجة والتحليل التقني. يتصدر GPT-5.5 Instant للمحادثة العامة واتباع التعليمات (هلوسة أقل بـ52.5% مقارنة بالإصدارات السابقة). يعتمد أفضل نموذج على مهمتك المحددة.',
          },
          {
            q: 'ما أفضل نموذج لغوي كبير محلي إذا كان لديّ 8 GB VRAM فقط؟',
            a: 'مع 8 GB VRAM، لا يزال Llama 3 8B بصيغة Q4_K_M الخيار الأفضل — يعمل بسهولة بنحو 5 GB VRAM ويترك مساحة للسياق. للأجهزة الأحدث، يتطلب Llama 4 Scout (17B/16 خبراء) H100 واحداً أو ما يعادله (24 GB VRAM).',
          },
          {
            q: 'كيف يقارن Gemini 2.5 Pro بـ Claude Opus 4.8 وGPT-5.5؟',
            a: 'يتصدر Gemini 2.5 Pro في المهام متعددة الوسائط الأصلية كتحليل الفيديو والصور. للاستدلال النصي البحت والبرمجة، يُعدّ Claude Opus 4.8 وGPT-5.5 الخيارين الأقوى. اطلع على <a href="/ar/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">دليل إطار عمل CO-STAR</a> للحصول على نصائح حول تحسين مخرجات أي نموذج سحابي.',
          },
          {
            q: 'هل يمكن لنموذج محلي مجاراة النماذج السحابية في مهام البرمجة؟',
            a: 'يوفر Llama 4 Scout (17B) وLlama 4 Maverick (17B/128 خبراء) بدائل مفتوحة المصدر قوية لكنها لا تضاهي Claude Opus 4.8 على SWE-Bench. لمعظم مهام مساعدة البرمجة اليومية، الفجوة صغيرة بما يكفي لتكون عملية. لإعادة الهيكلة المعقدة متعددة الملفات، لا تزال النماذج السحابية تحتفظ بميزة واضحة.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Prompt Engineering',
    title: '지금 가장 좋은 LLM은 무엇입니까?',
    seoTitle: '2026년 최고의 LLM | Prompt Bites | PromptQuorum',
    metaDescription: '코딩: Claude Opus 4.8 (SWE-Bench 87.6%). 일반 채팅: GPT-5.5 Instant (환각 52.5% 감소). 로컬: Llama 4 Scout 또는 Qwen 3 14B. 매월 업데이트.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    current_models_mentioned: ['Claude Opus 4.8', 'GPT-5.5 Instant', 'Gemini 2.5 Pro', 'Llama 4 Scout', 'Qwen 3 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '클라우드 및 로컬에서 이용 가능한 최고의 LLM을 비교하는 사용자',
    parentArticle: '/prompt-engineering/best-local-llms-2026',
    siblingBites: ['co-star-prompt-framework', 'ai-model-knowledge-cutoff-dates'],
    is_living_page: true,
    targetKeywords: ['최고의 LLM 2026', '지금 가장 좋은 AI 모델', 'Claude vs GPT 비교', '로컬 LLM 추천', 'Llama 4 Scout 한국어'],
    readTime: '4분 분량',
    quickAnswerTop: {
      ko: {
        question: '지금 가장 좋은 LLM은 무엇입니까?',
        answer: '클라우드 코딩 작업의 경우 Claude Opus 4.8이 SWE-Bench에서 87.6%를 달성하며, GPT-5.5 Instant는 이전 버전 대비 환각이 52.5% 적어 일반 채팅을 선도합니다. 클라우드: Claude Opus 4.8은 코딩 및 장문 문서에, GPT-5.5 Instant는 일반 채팅에, Gemini 2.5 Pro는 멀티모달 작업에 적합합니다. 로컬: 24GB VRAM이 있다면 Llama 4 Scout, 12GB VRAM이라면 Qwen 3 14B를 선택하십시오.',
        bullets: [
          '클라우드 일반: GPT-5.5 Instant — ChatGPT 기본 모델, 환각 52.5% 감소',
          '클라우드 코딩: Claude Opus 4.8 — SWE-Bench Verified 87.6%',
          '로컬 12GB VRAM: Qwen 3 14B Q4_K_M — 최고의 품질/VRAM 비율',
        ],
        updatedDate: '2026-05',
      },
    },
    schema: {
      inLanguage: 'ko',
      articleUrl: 'https://www.promptquorum.com/ko/prompt-bites/best-llm-right-now',
      breadcrumbSchema: {
        items: [
          { position: 1, name: '홈', url: 'https://www.promptquorum.com/ko' },
          { position: 2, name: 'Prompt Bites', url: 'https://www.promptquorum.com/ko/prompt-bites' },
          { position: 3, name: '지금 가장 좋은 LLM은 무엇입니까?', url: 'https://www.promptquorum.com/ko/prompt-bites/best-llm-right-now' },
        ],
      },
      'proficiencyLevel': 'Intermediate',
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '어떤 LLM도 모든 작업에서 우위를 점하지는 않습니다 — Claude Opus 4.8은 코딩(SWE-Bench 87.6%)에서, GPT-5.5 Instant는 일반 채팅에서 선두입니다',
          '12GB VRAM으로 로컬 사용 시, Qwen 3 14B Q4_K_M이 현재 최고의 품질/VRAM 비율을 제공합니다',
          '클라우드 모델은 API 키가 필요하고 토큰당 비용이 발생하며, 로컬 모델은 하드웨어 초기 투자 후 무료로 실행됩니다',
          '로컬 사용의 경우, Llama 4 Scout(17B/16 experts)는 단일 H100에서 10M 토큰 컨텍스트로 실행 가능하며, 12GB VRAM에는 Qwen 3 14B Q4_K_M을 권장합니다',
        ],
      },
      body1: {
        title: '최고의 LLM은 작업에 따라 다릅니다 — 전체 비교표',
        snippetBlocks: [
          { type: 'one-sentence', text: '2026년 5월 기준, Claude Opus 4.8은 코딩(SWE-Bench 87.6%), GPT-5.5 Instant는 일반 채팅(환각 52.5% 감소), Llama 4 Scout는 오프라인 로컬 실행에서 각각 선두입니다.' },
          { type: 'plain-terms', text: '클라우드 LLM 중 코딩에는 Claude Opus 4.8, 일반 대화에는 GPT-5.5 Instant가 가장 적합합니다. 로컬 실행에는 VRAM 용량에 따라 Llama 4 Scout 또는 Qwen 3 14B를 선택하십시오.' },
        ],
        content: [
          '<strong>2026년 5월 기준, 세 가지 모델 계열이 서로 다른 사용 사례를 선도하고 있습니다. 이 페이지는 매월 업데이트됩니다 — 최종 확인: 2026년 5월. 코딩 및 기술 분석: Claude Opus 4.8 (Anthropic). 일반 채팅 및 ChatGPT: GPT-5.5 Instant (OpenAI). 프라이버시, 오프라인 작업, 무제한 사용: 로컬로 실행되는 Llama 4 Scout.</strong> 아래에서 각 모델이 우위를 보이는 상황과 워크플로우별 선택 방법을 확인하십시오.',
          '단일 클라우드 모델이 모든 벤치마크를 지배하지는 않습니다. Claude Opus 4.8은 SWE-Bench Verified에서 87.6%를 달성하여 소프트웨어 엔지니어링의 명확한 선택입니다. GPT-5.5 Instant(2026년 5월부터 새로운 ChatGPT 기본 모델)는 이전 버전 대비 환각이 52.5% 적어 다양한 일상적 작업에서 가장 신뢰할 수 있는 결과를 제공합니다.',
          'Gemini 2.5 Pro는 여전히 동영상 및 이미지 분석에 있어 가장 강력한 네이티브 멀티모달 모델입니다. 순수 텍스트 또는 코딩 작업의 경우 Claude Opus 4.8과 GPT-5.5 사이의 품질 차이가 눈에 띕니다 — 특정 워크플로우에 맞게 선택하십시오. 로컬 사용의 경우, Llama 4 Scout는 10M 토큰 컨텍스트 창으로 일반 소비자 하드웨어에서 실행됩니다.',
        ],
        columns: ['사용 사례', '최적 LLM', '이유'],
        rows: [
          { '사용 사례': '코딩 (Python, TypeScript)', '최적 LLM': 'Claude Opus 4.8', '이유': 'SWE-Bench Verified 87.6%, 코딩 벤치마크 선두' },
          { '사용 사례': '일반 채팅', '최적 LLM': 'GPT-5.5 Instant', '이유': '2026년 5월부터 ChatGPT 기본 모델, 환각 52.5% 감소' },
          { '사용 사례': '로컬 / 오프라인', '최적 LLM': 'Llama 4 Scout', '이유': '17B/16 experts, 단일 H100 지원, 10M 토큰 컨텍스트' },
          { '사용 사례': '장문 문서', '최적 LLM': 'Claude Opus 4.8', '이유': '1M 컨텍스트 창, 강력한 정보 유지력' },
          { '사용 사례': '이미지+텍스트 빠른 작업', '최적 LLM': 'GPT-5.5 또는 Gemini 2.5 Pro', '이유': '멀티모달 지연 시간' },
          { '사용 사례': '저비용 대용량 처리', '최적 LLM': 'Claude Haiku 또는 GPT-5.5 mini', '이유': '$/M 토큰 비용' },
          { '사용 사례': '연구 / 에이전트', '최적 LLM': 'Claude Opus 4.8', '이유': 'MCP-Atlas 77.3%, function calling 신뢰성' },
        ],
      },
      body2: {
        title: '50개의 리뷰를 읽지 않고 선택하는 방법',
        content: [
          '<strong>제약 조건부터 시작하십시오.</strong> 예산, 프라이버시, 지연 시간, 또는 벤치마크 중 무엇이 우선입니까? 가장 어려운 제약 조건을 처리하는 모델을 먼저 선택하십시오. 코딩에는 Claude Opus 4.8, 일반 채팅에는 GPT-5.5 Instant, 오프라인에는 Llama 4 Scout가 적합합니다.',
          '<strong>실제 작업에서 2개 모델을 테스트하십시오.</strong> 공개된 벤치마크가 개인의 사용 사례를 예측하지는 않습니다. 클라우드 모델(Claude, OpenAI)은 무료 API 티어를 활용하고, Llama 4 Scout는 Ollama를 통해 로컬로 실행해 보십시오. 대부분의 사용자는 실제 사용을 통해 선호하는 모델을 빠르게 파악합니다.',
          '<strong>매월 확인하십시오.</strong> 새 모델은 분기별로 출시됩니다. Claude Opus 4.8은 4월 16일, GPT-5.5는 4월 23일에 출시되었습니다. 지금의 답은 계속 변합니다. 이 페이지를 매월 재확인하십시오. <strong>로컬 사용자의 경우,</strong> Llama 4 Scout는 일반 소비자 하드웨어의 최상위 선택입니다(10M 컨텍스트, 단일 H100). VRAM이 부족한 경우 Llama 3 8B 또는 Phi-4 등 이전 모델을 사용하십시오.',
        ],
        callouts: [{ type: 'info', text: '최종 확인: 2026년 5월. 최고의 LLM 현황은 빠르게 변화합니다 — Claude Opus 4.8은 4월 16일, GPT-5.5는 4월 23일에 출시되었습니다. 이 페이지를 매월 확인하십시오. 주요 출시(Claude 5, GPT-6, Llama 5)가 있을 경우 업데이트됩니다.' }],
      },
      faq: {
        id: 'faq',
        title: '현재 최고의 LLM에 관한 빠른 답변',
        faqs: [
          {
            q: '2026년 5월 기준 Claude Opus 4.8과 GPT-5.5 중 어느 것이 더 낫습니까?',
            a: 'Claude Opus 4.8은 코딩 및 기술 분석에서 SWE-Bench Verified(87.6%)를 선도합니다. GPT-5.5 Instant는 일반 채팅 및 명령 이행에서 선두이며 이전 버전 대비 환각이 52.5% 감소했습니다. 최적의 모델은 특정 작업에 따라 달라집니다.',
          },
          {
            q: 'VRAM이 8GB만 있는 경우 최고의 로컬 LLM은 무엇입니까?',
            a: '8GB VRAM의 경우, Q4_K_M의 Llama 3 8B가 여전히 최선의 선택입니다 — 약 5GB VRAM으로 안정적으로 실행되며 컨텍스트를 위한 여유 공간이 남습니다. 최신 하드웨어의 경우, Llama 4 Scout(17B/16 experts)는 단일 H100 또는 동급 GPU(24GB VRAM)가 필요합니다.',
          },
          {
            q: 'Gemini 2.5 Pro는 Claude Opus 4.8 및 GPT-5.5와 어떻게 비교됩니까?',
            a: 'Gemini 2.5 Pro는 동영상 및 이미지 분석과 같은 네이티브 멀티모달 작업에서 선두입니다. 순수 텍스트 추론 및 코딩의 경우 Claude Opus 4.8과 GPT-5.5 Instant가 더 강력한 선택입니다. 모든 클라우드 모델의 출력 품질을 향상시키는 팁은 <a href="/ko/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">CO-STAR 프레임워크 가이드</a>를 참조하십시오.',
          },
          {
            q: '로컬 LLM이 코딩 작업에서 클라우드 모델과 견줄 수 있습니까?',
            a: 'Llama 4 Scout(17B)와 Llama 4 Maverick(17B/128 experts)은 강력한 오픈소스 대안을 제공하지만 SWE-Bench에서 Claude Opus 4.8에 미치지 못합니다. 대부분의 일상적인 코딩 보조 작업에서 그 차이는 실용적인 수준으로 작습니다. 복잡한 다중 파일 리팩토링의 경우 클라우드 모델이 여전히 명확한 우위를 유지합니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 문서',
        items: [
          '[CO-STAR 프롬프트 프레임워크 가이드](/ko/prompt-bites/co-star-prompt-framework)',
          '[2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026)',
          '[Prompt Bites 허브](/ko/prompt-bites)',
        ],
      },
    },
  },
}

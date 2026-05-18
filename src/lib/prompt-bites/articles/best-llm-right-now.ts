import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Prompt Engineering',
    title: 'Best LLM Right Now?',
    seoTitle: 'Best LLM Right Now? | Prompt Bites | PromptQuorum',
    metaDescription: 'Best LLM right now: GPT-4o for general use, Claude 3.7 Sonnet for long documents, Gemini 2.5 Pro for multimodal. For local: Llama 3.1 70B or Qwen 2.5 72B. Updated monthly. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    current_models_mentioned: ['GPT-4o', 'Claude 3.7 Sonnet', 'Gemini 2.5 Pro', 'Llama 3.1 70B', 'Qwen 2.5 72B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Users comparing the best available LLMs across cloud and local',
    parentArticle: '/local-llms/best-local-llms-2026',
    siblingBites: ['co-star-prompt-framework'],
    is_living_page: true,
    quickAnswerTop: {
      en: {
        question: 'Best LLM right now?',
        answer: 'For cloud use: GPT-4o leads on general tasks, Claude 3.7 Sonnet on long documents and coding, Gemini 2.5 Pro on multimodal tasks. For local use: Llama 3.1 70B or Qwen 2.5 72B at Q4 if you have 40+ GB VRAM; Qwen 2.5 14B for 12 GB VRAM.',
        bullets: [
          'Cloud general: GPT-4o — best reasoning and instruction following',
          'Cloud coding: Claude 3.7 Sonnet — top on SWE-bench',
          'Local 12 GB VRAM: Qwen 2.5 14B Q4_K_M — best quality-per-VRAM',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Welches LLM ist aktuell das beste?',
        answer: 'Für Cloud-Nutzung: GPT-4o führt bei allgemeinen Aufgaben, Claude 3.7 Sonnet bei langen Dokumenten und Coding, Gemini 2.5 Pro bei multimodalen Aufgaben. Lokal: Llama 3.1 70B oder Qwen 2.5 72B bei Q4 mit 40+ GB VRAM; Qwen 2.5 14B für 12 GB VRAM.',
        bullets: [
          'Cloud allgemein: GPT-4o — bestes Reasoning und Instruction Following',
          'Cloud Coding: Claude 3.7 Sonnet — führend im SWE-bench',
          'Lokal 12 GB VRAM: Qwen 2.5 14B Q4_K_M — bestes Qualitäts-/VRAM-Verhältnis',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Quel est le meilleur LLM en ce moment ?',
        answer: 'Pour le cloud : GPT-4o domine les tâches générales, Claude 3.7 Sonnet sur les longs documents et le code, Gemini 2.5 Pro sur les tâches multimodales. En local : Llama 3.1 70B ou Qwen 2.5 72B en Q4 avec 40+ Go de VRAM ; Qwen 2.5 14B pour 12 Go de VRAM.',
        bullets: [
          'Cloud général : GPT-4o — meilleur raisonnement et suivi d\'instructions',
          'Cloud code : Claude 3.7 Sonnet — leader sur SWE-bench',
          'Local 12 Go VRAM : Qwen 2.5 14B Q4_K_M — meilleur rapport qualité/VRAM',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '現在最良のLLMは何ですか？',
        answer: 'クラウド利用では：GPT-4oが一般タスクをリード、Claude 3.7 Sonnetが長文書とコーディング、Gemini 2.5 Proがマルチモーダルタスクを担当。ローカルでは：40GB以上のVRAMがあればLlama 3.1 70BまたはQwen 2.5 72B（Q4）、12GB VRAMならQwen 2.5 14B。',
        bullets: [
          'クラウド汎用：GPT-4o — 最高のReasoning・命令追従',
          'クラウドコーディング：Claude 3.7 Sonnet — SWE-benchトップ',
          'ローカル12GB VRAM：Qwen 2.5 14B Q4_K_M — 最高の品質/VRAM比',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '当前最好的 LLM 是什么？',
        answer: '云端：GPT-4o 在通用任务上领先，Claude 3.7 Sonnet 适合长文档和编码，Gemini 2.5 Pro 适合多模态任务。本地：40GB 以上 VRAM 选 Llama 3.1 70B 或 Qwen 2.5 72B（Q4）；12 GB VRAM 选 Qwen 2.5 14B。',
        bullets: [
          '云端通用：GPT-4o — 最佳推理与指令遵循',
          '云端编程：Claude 3.7 Sonnet — SWE-bench 榜首',
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
          'No single LLM wins every task — GPT-4o leads general reasoning, Claude 3.7 Sonnet leads coding and long-context tasks',
          'For local use with 12 GB VRAM, Qwen 2.5 14B Q4_K_M gives the best quality-per-VRAM ratio available',
          'Cloud models require API keys and incur per-token costs; local models run free after hardware investment',
          'For local 40+ GB VRAM deployments, Llama 3.1 70B and Qwen 2.5 72B Q4 match or approach GPT-4o quality',
        ],
      },
      body1: {
        title: 'Cloud LLM Leaders by Task Category',
        content: [
          '<strong>As of May 2026, GPT-4o leads cloud LLMs for general reasoning and instruction following with an MMLU score of ~88%, while Claude 3.7 Sonnet holds the top SWE-bench score at ~49% for coding and long-document tasks.</strong> Gemini 2.5 Pro leads on natively multimodal tasks such as image analysis and video understanding.',
          'No single cloud model dominates every benchmark. GPT-4o produces the most reliable results across diverse everyday tasks. Claude 3.7 Sonnet is the clearer choice for software engineering tasks, 100K+ token document analysis, or workflows that require extended reasoning chains.',
          'Gemini 2.5 Pro is the only cloud model with native video understanding built in. For pure text or code tasks, the quality difference between GPT-4o and Gemini 2.5 Pro is marginal — pricing and latency often matter more.',
        ],
        columns: ['Category', 'Model', 'Key Strength'],
        rows: [
          { 'Category': 'Cloud General', 'Model': 'GPT-4o', 'Key Strength': 'Reasoning + instruction following' },
          { 'Category': 'Cloud Coding', 'Model': 'Claude 3.7 Sonnet', 'Key Strength': 'SWE-bench ~49%, long context' },
          { 'Category': 'Local (12 GB VRAM)', 'Model': 'Qwen 2.5 14B Q4', 'Key Strength': 'Best quality-per-VRAM' },
          { 'Category': 'Local (6 GB VRAM)', 'Model': 'Llama 3 8B Q4', 'Key Strength': 'Speed + efficiency' },
        ],
      },
      body2: {
        title: 'Local LLMs vs. Cloud — What the Tradeoff Actually Looks Like',
        content: [
          'Cloud models require an API key and charge per token — GPT-4o costs approximately $5 per million input tokens and $15 per million output tokens. There are no upfront hardware costs, and you get access to the latest model versions immediately.',
          '<strong>Local models run completely free after hardware investment.</strong> Qwen 2.5 14B at Q4_K_M quantization needs 12 GB VRAM and delivers output quality competitive with mid-tier cloud models from 12–18 months ago. For 40+ GB VRAM systems, Llama 3.1 70B or Qwen 2.5 72B Q4 approaches current flagship cloud model quality.',
          'For a deeper breakdown of which open-source models run best on specific hardware, see the <a href="/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">top open-source models for Ollama guide</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About the Best LLM Right Now',
        faqs: [
          {
            q: 'Is GPT-4o still the best LLM in 2026?',
            a: 'GPT-4o leads for general-purpose reasoning and instruction following as of May 2026. For coding specifically, Claude 3.7 Sonnet scores higher on SWE-bench (~49% vs ~38% for GPT-4o). The best model depends on your specific task.',
          },
          {
            q: 'What is the best local LLM if I only have 8 GB VRAM?',
            a: 'With 8 GB VRAM, Llama 3 8B at Q4_K_M is the best option — it fits comfortably with ~5 GB VRAM and leaves headroom for context. Qwen 2.5 7B Q4_K_M is a close alternative with strong multilingual performance.',
          },
          {
            q: 'How does Gemini 2.5 Pro compare to GPT-4o?',
            a: 'Gemini 2.5 Pro is ahead for natively multimodal tasks such as video and image analysis. For pure text reasoning and coding, GPT-4o and Claude 3.7 Sonnet are generally the stronger choices. See our <a href="/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">CO-STAR prompt framework guide</a> for tips on getting better output from any cloud model.',
          },
          {
            q: 'Can a local LLM match a cloud model for coding tasks?',
            a: 'At 40+ GB VRAM, Llama 3.1 70B and Qwen 2.5 72B Q4 approach — but do not match — Claude 3.7 Sonnet on SWE-bench. For most everyday coding assistance tasks, the gap is small enough to be practical. For complex multi-file refactoring, cloud models still hold a clear advantage.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Prompt Engineering',
    title: 'Welches LLM ist aktuell das beste?',
    seoTitle: 'Welches LLM ist aktuell das beste? | Prompt Bites | PromptQuorum',
    metaDescription: 'Bestes LLM aktuell: GPT-4o für allgemeine Aufgaben, Claude 3.7 Sonnet für lange Dokumente, Gemini 2.5 Pro für multimodale Aufgaben. Lokal: Llama 3.1 70B oder Qwen 2.5 72B. Kurze Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    quickAnswerTop: {
      de: {
        question: 'Welches LLM ist aktuell das beste?',
        answer: 'Für Cloud-Nutzung: GPT-4o führt bei allgemeinen Aufgaben, Claude 3.7 Sonnet bei langen Dokumenten und Coding, Gemini 2.5 Pro bei multimodalen Aufgaben. Lokal: Llama 3.1 70B oder Qwen 2.5 72B bei Q4 mit 40+ GB VRAM; Qwen 2.5 14B für 12 GB VRAM.',
        bullets: [
          'Cloud allgemein: GPT-4o — bestes Reasoning und Instruction Following',
          'Cloud Coding: Claude 3.7 Sonnet — führend im SWE-bench',
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
          'Kein einzelnes LLM gewinnt jede Aufgabe — GPT-4o führt bei allgemeinem Reasoning, Claude 3.7 Sonnet beim Coding und bei langen Kontexten',
          'Lokal mit 12 GB VRAM bietet Qwen 2.5 14B Q4_K_M das beste verfügbare Qualitäts-/VRAM-Verhältnis',
          'Cloud-Modelle erfordern API-Keys und verursachen Token-Kosten; lokale Modelle laufen nach der Hardware-Investition kostenlos',
          'Für lokale Systeme mit 40+ GB VRAM erreichen Llama 3.1 70B und Qwen 2.5 72B Q4 nahezu die Qualität aktueller Cloud-Flaggschiffe',
        ],
      },
      body1: {
        title: 'Cloud-LLM-Spitzenreiter nach Aufgabenkategorie',
        content: [
          '<strong>Stand Mai 2026 führt GPT-4o bei Cloud-LLMs für allgemeines Reasoning und Instruction Following mit einem MMLU-Score von ~88 %, während Claude 3.7 Sonnet mit ~49 % den höchsten SWE-bench-Score für Coding- und Langdokument-Aufgaben hält.</strong> Gemini 2.5 Pro führt bei nativ multimodalen Aufgaben wie Bildanalyse und Video-Verständnis.',
          'Kein einzelnes Cloud-Modell dominiert jeden Benchmark. GPT-4o liefert die zuverlässigsten Ergebnisse bei vielfältigen Alltagsaufgaben. Claude 3.7 Sonnet ist die klarere Wahl für Software-Engineering-Aufgaben, Dokumentenanalyse mit 100K+ Token oder Workflows mit langen Reasoning-Ketten.',
          'Gemini 2.5 Pro ist das einzige Cloud-Modell mit nativem Video-Verständnis. Bei reinen Text- oder Code-Aufgaben ist der Qualitätsunterschied zwischen GPT-4o und Gemini 2.5 Pro marginal — Preisgestaltung und Latenz sind oft entscheidender.',
        ],
        columns: ['Kategorie', 'Modell', 'Stärke'],
        rows: [
          { 'Kategorie': 'Cloud Allgemein', 'Modell': 'GPT-4o', 'Stärke': 'Reasoning + Instruction Following' },
          { 'Kategorie': 'Cloud Coding', 'Modell': 'Claude 3.7 Sonnet', 'Stärke': 'SWE-bench ~49 %, langer Kontext' },
          { 'Kategorie': 'Lokal (12 GB VRAM)', 'Modell': 'Qwen 2.5 14B Q4', 'Stärke': 'Bestes Qualitäts-/VRAM-Verhältnis' },
          { 'Kategorie': 'Lokal (6 GB VRAM)', 'Modell': 'Llama 3 8B Q4', 'Stärke': 'Geschwindigkeit + Effizienz' },
        ],
      },
      body2: {
        title: 'Lokale LLMs vs. Cloud — Der tatsächliche Kompromiss',
        content: [
          'Cloud-Modelle erfordern einen API-Key und berechnen pro Token — GPT-4o kostet ca. 5 USD pro Million Eingabe-Token und 15 USD pro Million Ausgabe-Token. Es fallen keine Vorabkosten für Hardware an, und Sie erhalten sofortigen Zugang zu den neuesten Modellversionen.',
          '<strong>Lokale Modelle laufen nach der Hardware-Investition vollständig kostenlos.</strong> Qwen 2.5 14B in Q4_K_M-Quantisierung benötigt 12 GB VRAM und liefert eine Ausgabequalität, die mit mittleren Cloud-Modellen von vor 12–18 Monaten mithalten kann. Für Systeme mit 40+ GB VRAM nähern sich Llama 3.1 70B oder Qwen 2.5 72B Q4 der Qualität aktueller Cloud-Flaggschiffe an.',
          'Eine ausführlichere Übersicht, welche Open-Source-Modelle auf welcher Hardware am besten laufen, finden Sie im <a href="/de/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">Leitfaden zu den besten Open-Source-Modellen für Ollama</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zum besten LLM aktuell',
        faqs: [
          {
            q: 'Ist GPT-4o im Jahr 2026 noch das beste LLM?',
            a: 'GPT-4o führt Stand Mai 2026 bei allgemeinem Reasoning und Instruction Following. Für Coding speziell erzielt Claude 3.7 Sonnet einen höheren SWE-bench-Score (~49 % vs. ~38 % für GPT-4o). Das beste Modell hängt von Ihrer spezifischen Aufgabe ab.',
          },
          {
            q: 'Was ist das beste lokale LLM mit nur 8 GB VRAM?',
            a: 'Mit 8 GB VRAM ist Llama 3 8B bei Q4_K_M die beste Option — es passt komfortabel mit ~5 GB VRAM und lässt Spielraum für den Kontext. Qwen 2.5 7B Q4_K_M ist eine enge Alternative mit starker mehrsprachiger Leistung.',
          },
          {
            q: 'Wie vergleicht sich Gemini 2.5 Pro mit GPT-4o?',
            a: 'Gemini 2.5 Pro ist bei nativ multimodalen Aufgaben wie Video- und Bildanalyse führend. Bei reinem Text-Reasoning und Coding sind GPT-4o und Claude 3.7 Sonnet im Allgemeinen die stärkeren Optionen.',
          },
          {
            q: 'Kann ein lokales LLM bei Coding-Aufgaben mit einem Cloud-Modell mithalten?',
            a: 'Mit 40+ GB VRAM nähern sich Llama 3.1 70B und Qwen 2.5 72B Q4 — erreichen aber nicht — Claude 3.7 Sonnet im SWE-bench. Für die meisten alltäglichen Coding-Aufgaben ist der Unterschied gering genug, um praktikabel zu sein. Für komplexes Multi-Datei-Refactoring haben Cloud-Modelle noch einen klaren Vorteil.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Prompt Engineering',
    title: 'Quel est le meilleur LLM en ce moment ?',
    seoTitle: 'Quel est le meilleur LLM en ce moment ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Meilleur LLM en ce moment : GPT-4o pour l\'usage général, Claude 3.7 Sonnet pour les longs documents, Gemini 2.5 Pro pour le multimodal. En local : Llama 3.1 70B ou Qwen 2.5 72B. Réponse rapide par PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur LLM en ce moment ?',
        answer: 'Pour le cloud : GPT-4o domine les tâches générales, Claude 3.7 Sonnet sur les longs documents et le code, Gemini 2.5 Pro sur les tâches multimodales. En local : Llama 3.1 70B ou Qwen 2.5 72B en Q4 avec 40+ Go de VRAM ; Qwen 2.5 14B pour 12 Go de VRAM.',
        bullets: [
          'Cloud général : GPT-4o — meilleur raisonnement et suivi d\'instructions',
          'Cloud code : Claude 3.7 Sonnet — leader sur SWE-bench',
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
          'Aucun LLM ne gagne sur toutes les tâches — GPT-4o mène sur le raisonnement général, Claude 3.7 Sonnet sur le code et les longs contextes',
          'En local avec 12 Go de VRAM, Qwen 2.5 14B Q4_K_M offre le meilleur rapport qualité/VRAM disponible',
          'Les modèles cloud nécessitent des clés API et facturent par token ; les modèles locaux sont gratuits après l\'investissement matériel',
          'Avec 40+ Go de VRAM, Llama 3.1 70B et Qwen 2.5 72B Q4 approchent la qualité des meilleurs modèles cloud actuels',
        ],
      },
      body1: {
        title: 'Leaders cloud par catégorie de tâche',
        content: [
          '<strong>En mai 2026, GPT-4o domine les LLMs cloud pour le raisonnement général et le suivi d\'instructions avec un score MMLU de ~88 %, tandis que Claude 3.7 Sonnet détient le meilleur score SWE-bench (~49 %) pour le code et l\'analyse de longs documents.</strong> Gemini 2.5 Pro mène sur les tâches nativement multimodales comme l\'analyse d\'images et la compréhension vidéo.',
          'Aucun modèle cloud ne domine tous les benchmarks. GPT-4o produit les résultats les plus fiables sur une grande variété de tâches quotidiennes. Claude 3.7 Sonnet est le choix évident pour l\'ingénierie logicielle, l\'analyse de documents dépassant 100 000 tokens ou les flux de travail nécessitant de longues chaînes de raisonnement.',
          'Gemini 2.5 Pro est le seul modèle cloud avec une compréhension vidéo native intégrée. Pour les tâches de texte ou de code pur, la différence de qualité entre GPT-4o et Gemini 2.5 Pro est marginale — la tarification et la latence importent souvent davantage.',
        ],
        columns: ['Catégorie', 'Modèle', 'Point fort'],
        rows: [
          { 'Catégorie': 'Cloud général', 'Modèle': 'GPT-4o', 'Point fort': 'Raisonnement + suivi d\'instructions' },
          { 'Catégorie': 'Cloud code', 'Modèle': 'Claude 3.7 Sonnet', 'Point fort': 'SWE-bench ~49 %, long contexte' },
          { 'Catégorie': 'Local (12 Go VRAM)', 'Modèle': 'Qwen 2.5 14B Q4', 'Point fort': 'Meilleur rapport qualité/VRAM' },
          { 'Catégorie': 'Local (6 Go VRAM)', 'Modèle': 'Llama 3 8B Q4', 'Point fort': 'Vitesse + efficacité' },
        ],
      },
      body2: {
        title: 'LLMs locaux vs. cloud — le vrai compromis',
        content: [
          'Les modèles cloud nécessitent une clé API et facturent par token — GPT-4o coûte environ 5 USD par million de tokens en entrée et 15 USD par million de tokens en sortie. Il n\'y a pas de coût matériel initial, et vous accédez immédiatement aux dernières versions des modèles.',
          '<strong>Les modèles locaux fonctionnent entièrement gratuitement après l\'investissement matériel.</strong> Qwen 2.5 14B en quantification Q4_K_M nécessite 12 Go de VRAM et délivre une qualité de sortie comparable aux modèles cloud de milieu de gamme d\'il y a 12 à 18 mois. Pour les systèmes avec 40+ Go de VRAM, Llama 3.1 70B ou Qwen 2.5 72B Q4 approchent la qualité des meilleurs modèles cloud actuels.',
          'Pour une comparaison détaillée des modèles open source selon le matériel, consultez le <a href="/fr/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">guide des meilleurs modèles open source pour Ollama</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le meilleur LLM en ce moment',
        faqs: [
          {
            q: 'GPT-4o est-il encore le meilleur LLM en 2026 ?',
            a: 'GPT-4o est en tête pour le raisonnement général et le suivi d\'instructions en mai 2026. Pour le code spécifiquement, Claude 3.7 Sonnet obtient un score SWE-bench plus élevé (~49 % contre ~38 % pour GPT-4o). Le meilleur modèle dépend de votre tâche spécifique.',
          },
          {
            q: 'Quel est le meilleur LLM local avec seulement 8 Go de VRAM ?',
            a: 'Avec 8 Go de VRAM, Llama 3 8B en Q4_K_M est la meilleure option — il tient confortablement avec ~5 Go de VRAM et laisse de la marge pour le contexte. Qwen 2.5 7B Q4_K_M est une alternative proche avec de solides performances multilingues.',
          },
          {
            q: 'Comment Gemini 2.5 Pro se compare-t-il à GPT-4o ?',
            a: 'Gemini 2.5 Pro est supérieur pour les tâches nativement multimodales comme l\'analyse vidéo et image. Pour le raisonnement textuel pur et le code, GPT-4o et Claude 3.7 Sonnet restent généralement les choix les plus puissants.',
          },
          {
            q: 'Un LLM local peut-il rivaliser avec un modèle cloud pour le code ?',
            a: 'Avec 40+ Go de VRAM, Llama 3.1 70B et Qwen 2.5 72B Q4 approchent — sans l\'égaler — Claude 3.7 Sonnet sur SWE-bench. Pour la plupart des tâches de codage quotidiennes, l\'écart est suffisamment faible pour être pratique. Pour les refactorisations complexes multi-fichiers, les modèles cloud conservent un avantage net.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Prompt Engineering',
    title: '現在最良のLLMは何ですか？',
    seoTitle: '現在最良のLLMは？ | Prompt Bites | PromptQuorum',
    metaDescription: '現在最良のLLM：汎用ならGPT-4o、長文書・コーディングはClaude 3.7 Sonnet、マルチモーダルはGemini 2.5 Pro。ローカル：Llama 3.1 70BまたはQwen 2.5 72B。PromptQuorumによる簡潔な回答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    quickAnswerTop: {
      ja: {
        question: '現在最良のLLMは何ですか？',
        answer: 'クラウド利用では：GPT-4oが一般タスクをリード、Claude 3.7 Sonnetが長文書とコーディング、Gemini 2.5 Proがマルチモーダルタスクを担当。ローカルでは：40GB以上のVRAMがあればLlama 3.1 70BまたはQwen 2.5 72B（Q4）、12GB VRAMならQwen 2.5 14B。',
        bullets: [
          'クラウド汎用：GPT-4o — 最高のReasoning・命令追従',
          'クラウドコーディング：Claude 3.7 Sonnet — SWE-benchトップ',
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
          'すべてのタスクで勝る単一LLMは存在しない — GPT-4oは汎用Reasoningで、Claude 3.7 Sonnetはコーディングと長文脈でリード',
          'ローカルで12GB VRAMの場合、Qwen 2.5 14B Q4_K_Mが利用可能な最高の品質/VRAM比を提供する',
          'クラウドモデルはAPIキーが必要でトークン課金が発生するが、ローカルモデルはハードウェア投資後は無料で動作する',
          '40GB以上のVRAMのローカル環境では、Llama 3.1 70BとQwen 2.5 72B Q4が現行クラウドフラグシップモデルの品質に迫る',
        ],
      },
      body1: {
        title: 'タスクカテゴリ別クラウドLLMリーダー',
        content: [
          '<strong>2026年5月時点で、GPT-4oはMMLUスコア約88%で汎用ReasoningとInstruction Followingにおいてクラウドモデルをリードし、Claude 3.7 SonnetはSWE-benchスコア約49%でコーディングと長文書タスクのトップを保持しています。</strong> Gemini 2.5 Proは画像分析や動画理解などのネイティブマルチモーダルタスクでリードしています。',
          'すべてのベンチマークを制する単一のクラウドモデルは存在しません。GPT-4oは多様な日常タスクで最も安定した結果を生み出します。Claude 3.7 Sonnetはソフトウェアエンジニアリングタスク、100K+トークンの文書分析、または長い推論チェーンが必要なワークフローにおいてより明確な選択肢です。',
          'Gemini 2.5 Proはネイティブな動画理解が組み込まれた唯一のクラウドモデルです。純粋なテキストやコードのタスクでは、GPT-4oとGemini 2.5 Proの品質差はわずかであり、価格とレイテンシが重要になることが多いです。',
        ],
        columns: ['カテゴリ', 'モデル', '主な強み'],
        rows: [
          { 'カテゴリ': 'クラウド汎用', 'モデル': 'GPT-4o', '主な強み': 'Reasoning + 命令追従' },
          { 'カテゴリ': 'クラウドコーディング', 'モデル': 'Claude 3.7 Sonnet', '主な強み': 'SWE-bench ~49%、長文脈' },
          { 'カテゴリ': 'ローカル（12 GB VRAM）', 'モデル': 'Qwen 2.5 14B Q4', '主な強み': '最高の品質/VRAM比' },
          { 'カテゴリ': 'ローカル（6 GB VRAM）', 'モデル': 'Llama 3 8B Q4', '主な強み': 'スピード + 効率' },
        ],
      },
      body2: {
        title: 'ローカルLLM対クラウド — トレードオフの実態',
        content: [
          'クラウドモデルはAPIキーが必要でトークンごとに課金されます — GPT-4oは入力トークン100万件あたり約5ドル、出力トークン100万件あたり約15ドルのコストがかかります。ハードウェアの初期費用はかからず、最新モデルバージョンへすぐにアクセスできます。',
          '<strong>ローカルモデルはハードウェア投資後は完全無料で動作します。</strong> Q4_K_M量子化のQwen 2.5 14Bは12GB VRAMが必要で、12〜18か月前の中程度のクラウドモデルと競合できる出力品質を提供します。40GB以上のVRAMシステムでは、Llama 3.1 70BまたはQwen 2.5 72B Q4が現行クラウドフラグシップモデルの品質に近づきます。',
          '特定のハードウェアで最も動作するオープンソースモデルの詳細な比較については、<a href="/ja/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">Ollama向けトップオープンソースモデルガイド</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: '現在最良のLLMに関するよくある質問',
        faqs: [
          {
            q: 'GPT-4oは2026年でもまだ最良のLLMですか？',
            a: '2026年5月時点で、GPT-4oは汎用ReasoningとInstruction Followingでトップに立っています。コーディング専用では、Claude 3.7 SonnetのSWE-benchスコアが高い（~49% vs GPT-4oの~38%）です。最良のモデルは具体的なタスクによって異なります。',
          },
          {
            q: '8GB VRAMしかない場合の最良のローカルLLMは何ですか？',
            a: '8GB VRAMでは、Q4_K_MのLlama 3 8Bが最良の選択です — 約5GB VRAMで快適に収まり、コンテキストに余裕があります。Qwen 2.5 7B Q4_K_Mは多言語パフォーマンスが強力な近接した代替案です。',
          },
          {
            q: 'Gemini 2.5 ProとGPT-4oはどう比べますか？',
            a: 'Gemini 2.5 Proは動画・画像分析などのネイティブマルチモーダルタスクで優位です。純粋なテキスト推論とコーディングでは、GPT-4oとClaude 3.7 Sonnetが一般的により強力な選択肢です。',
          },
          {
            q: 'ローカルLLMはコーディングタスクでクラウドモデルに匹敵できますか？',
            a: '40GB以上のVRAMでは、Llama 3.1 70BとQwen 2.5 72B Q4はSWE-benchでClaude 3.7 Sonnetに近づきますが、同等ではありません。ほとんどの日常的なコーディング補助タスクでは差は実用的に小さいです。複雑なマルチファイルリファクタリングでは、クラウドモデルがまだ明確な優位性を持っています。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Prompt Engineering',
    title: '当前最好的 LLM 是什么？',
    seoTitle: '当前最好的 LLM 是什么？ | Prompt Bites | PromptQuorum',
    metaDescription: '当前最好的 LLM：通用任务选 GPT-4o，长文档和编程选 Claude 3.7 Sonnet，多模态选 Gemini 2.5 Pro。本地：Llama 3.1 70B 或 Qwen 2.5 72B。PromptQuorum 快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    quickAnswerTop: {
      zh: {
        question: '当前最好的 LLM 是什么？',
        answer: '云端：GPT-4o 在通用任务上领先，Claude 3.7 Sonnet 适合长文档和编码，Gemini 2.5 Pro 适合多模态任务。本地：40GB 以上 VRAM 选 Llama 3.1 70B 或 Qwen 2.5 72B（Q4）；12 GB VRAM 选 Qwen 2.5 14B。',
        bullets: [
          '云端通用：GPT-4o — 最佳推理与指令遵循',
          '云端编程：Claude 3.7 Sonnet — SWE-bench 榜首',
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
          '没有单一 LLM 能在所有任务上获胜——GPT-4o 领先通用推理，Claude 3.7 Sonnet 领先编程和长上下文任务',
          '本地使用 12 GB VRAM 时，Qwen 2.5 14B Q4_K_M 提供可用的最佳质量/VRAM 比',
          '云端模型需要 API 密钥且按 token 计费；本地模型在硬件投入后免费运行',
          '在 40+ GB VRAM 的本地部署中，Llama 3.1 70B 和 Qwen 2.5 72B Q4 接近当前顶级云端模型的质量',
        ],
      },
      body1: {
        title: '按任务类别划分的云端 LLM 领导者',
        content: [
          '<strong>截至 2026 年 5 月，GPT-4o 以约 88% 的 MMLU 分数在通用推理和指令遵循上领先云端 LLM，而 Claude 3.7 Sonnet 以约 49% 的 SWE-bench 分数在编程和长文档任务上保持领先。</strong> Gemini 2.5 Pro 在图像分析和视频理解等原生多模态任务上领先。',
          '没有单一云端模型能主导所有基准测试。GPT-4o 在多样化的日常任务上产生最可靠的结果。Claude 3.7 Sonnet 是软件工程任务、10 万以上 token 的文档分析或需要扩展推理链的工作流的更明确选择。',
          'Gemini 2.5 Pro 是唯一内置原生视频理解的云端模型。对于纯文本或代码任务，GPT-4o 和 Gemini 2.5 Pro 之间的质量差异微乎其微——价格和延迟通常更为重要。',
        ],
        columns: ['类别', '模型', '核心优势'],
        rows: [
          { '类别': '云端通用', '模型': 'GPT-4o', '核心优势': '推理 + 指令遵循' },
          { '类别': '云端编程', '模型': 'Claude 3.7 Sonnet', '核心优势': 'SWE-bench ~49%，长上下文' },
          { '类别': '本地（12 GB VRAM）', '模型': 'Qwen 2.5 14B Q4', '核心优势': '最佳质量/VRAM 比' },
          { '类别': '本地（6 GB VRAM）', '模型': 'Llama 3 8B Q4', '核心优势': '速度 + 效率' },
        ],
      },
      body2: {
        title: '本地 LLM 与云端——真实的权衡',
        content: [
          '云端模型需要 API 密钥且按 token 收费——GPT-4o 每百万输入 token 约 5 美元，每百万输出 token 约 15 美元。无需前期硬件成本，您可以立即访问最新模型版本。',
          '<strong>本地模型在硬件投资后完全免费运行。</strong> Q4_K_M 量化的 Qwen 2.5 14B 需要 12 GB VRAM，提供与 12-18 个月前中端云端模型相当的输出质量。对于 40+ GB VRAM 系统，Llama 3.1 70B 或 Qwen 2.5 72B Q4 接近当前旗舰云端模型的质量。',
          '有关哪些开源模型在特定硬件上运行最佳的详细对比，请参阅<a href="/zh/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">Ollama 最佳开源模型指南</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于当前最好 LLM 的快速解答',
        faqs: [
          {
            q: '2026 年 GPT-4o 还是最好的 LLM 吗？',
            a: '截至 2026 年 5 月，GPT-4o 在通用推理和指令遵循上领先。专门针对编程，Claude 3.7 Sonnet 的 SWE-bench 分数更高（~49% 对比 GPT-4o 的 ~38%）。最好的模型取决于您的具体任务。',
          },
          {
            q: '只有 8 GB VRAM 时最好的本地 LLM 是什么？',
            a: '使用 8 GB VRAM 时，Q4_K_M 的 Llama 3 8B 是最佳选择——它可以舒适地用约 5 GB VRAM 运行，为上下文留有余量。Qwen 2.5 7B Q4_K_M 是多语言性能强劲的近似替代方案。',
          },
          {
            q: 'Gemini 2.5 Pro 与 GPT-4o 如何比较？',
            a: 'Gemini 2.5 Pro 在视频和图像分析等原生多模态任务上更强。对于纯文本推理和编程，GPT-4o 和 Claude 3.7 Sonnet 通常是更强的选择。',
          },
          {
            q: '本地 LLM 能在编程任务上与云端模型媲美吗？',
            a: '使用 40+ GB VRAM，Llama 3.1 70B 和 Qwen 2.5 72B Q4 在 SWE-bench 上接近——但未达到——Claude 3.7 Sonnet 的水平。对于大多数日常编程辅助任务，差距已小到实用。对于复杂的多文件重构，云端模型仍有明显优势。',
          },
        ],
      },
    },
  },
}

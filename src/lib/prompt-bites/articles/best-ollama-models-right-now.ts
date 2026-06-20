import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Ollama',
    title: 'Best Ollama Models Right Now?',
    seoTitle: 'Best Ollama Models 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Best general Ollama model: Llama 3 8B Q4. Best coding: Qwen 3 Coder 14B Q4. Best compact: Phi-4 Mini Q4. Updated monthly. Last verified May 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    current_models_mentioned: ['Llama 3 8B', 'Qwen 3 Coder 14B', 'Phi-4 Mini'],
    current_hardware_mentioned: [],
    educationalLevel: 'Beginner',
    audience: 'Developers choosing Ollama models for everyday use',
    parentArticle: '/local-llms/top-open-source-models-ollama',
    siblingBites: ['ollama-latest-version', 'best-ollama-models-cpu-only'],
    is_living_page: true,
    quickAnswerTop: {
      en: {
        question: 'Best Ollama models right now?',
        answer: 'As of May 2026, the top general Ollama model is Llama 3 8B Q4_K_M, fitting in 6 GB VRAM at ~20 tok/s with excellent instruction following. For coding, Qwen 3 Coder 14B leads. For compact use, Phi-4 Mini is excellent. This page updates monthly.',
        bullets: [
          'Best general: Llama 3 8B Q4_K_M',
          'Best coding: Qwen 3 Coder 14B Q4',
          'Best compact: Phi-4 Mini Q4',
        ],
        updatedDate: '2026-05',
      },
      de: { question: 'Die besten Ollama-Modelle im Moment?', answer: 'Stand Mai 2026 ist Llama 3 8B Q4_K_M das beste Allzweck-Ollama-Modell, passt in 6 GB VRAM mit ~20 tok/s und exzellentem Instruction Following. Für Code empfiehlt sich Qwen 3 Coder 14B. Für kompakten Einsatz überzeugt Phi-4 Mini. Diese Seite wird monatlich aktualisiert.', bullets: ['Bestes Allzweck: Llama 3 8B Q4_K_M', 'Bestes Coding: Qwen 3 Coder 14B Q4', 'Bestes Kompaktmodell: Phi-4 Mini Q4'], updatedDate: '2026-05' },
      fr: { question: 'Les meilleurs modèles Ollama en ce moment ?', answer: 'En mai 2026, Llama 3 8B Q4_K_M est le meilleur modèle Ollama général, tenant en 6 Go VRAM à ~20 tok/s avec excellent suivi d\'instructions. Pour le code, Qwen 3 Coder 14B est en tête. Pour un usage compact, Phi-4 Mini est excellent. Cette page est mise à jour chaque mois.', bullets: ['Meilleur général : Llama 3 8B Q4_K_M', 'Meilleur code : Qwen 3 Coder 14B Q4', 'Meilleur compact : Phi-4 Mini Q4'], updatedDate: '2026-05' },
      ja: { question: '現在最もよいOllamaモデルは？', answer: '2026年5月時点で、汎用OllamaモデルのトップはLlama 3 8B Q4_K_Mで、6 GB VRAMに収まり~20 tok/sの優秀なInstruction Followingを提供。コード生成にはQwen 3 Coder 14Bが最高位。軽量用途にはPhi-4 Miniが優秀です。このページは毎月更新されます。', bullets: ['最高汎用：Llama 3 8B Q4_K_M', '最高コーディング：Qwen 3 Coder 14B Q4', '最高軽量：Phi-4 Mini Q4'], updatedDate: '2026-05' },
      zh: { question: '目前最佳的Ollama模型是什么？', answer: '截至2026年5月，最佳通用Ollama模型是Llama 3 8B Q4_K_M，占用6 GB VRAM，~20 tok/s速度和优秀指令跟随。代码生成首选Qwen 3 Coder 14B。轻量场景首选Phi-4 Mini。本页面每月更新。', bullets: ['最佳通用：Llama 3 8B Q4_K_M', '最佳代码：Qwen 3 Coder 14B Q4', '最佳轻量：Phi-4 Mini Q4'], updatedDate: '2026-05' },
      es: { question: '¿Los mejores modelos de Ollama ahora mismo?', answer: 'A mayo de 2026, el mejor modelo general de Ollama es Llama 3 8B Q4_K_M, que cabe en 6 GB de VRAM a ~20 tok/s con excelente seguimiento de instrucciones. Para código, Qwen 3 Coder 14B lidera. Para uso compacto, Phi-4 Mini es excelente. Esta página se actualiza mensualmente.', bullets: ['Mejor general: Llama 3 8B Q4_K_M', 'Mejor para código: Qwen 3 Coder 14B Q4', 'Mejor compacto: Phi-4 Mini Q4'], updatedDate: '2026-05' },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best general use: Llama 3 8B Q4_K_M — fits in 6 GB VRAM, ~20 tok/s, excellent instruction following',
          'Best coding: Qwen 3 Coder 14B Q4_K_M — top HumanEval score in the 14B class, needs 10 GB VRAM',
          'Best compact: Phi-4 Mini Q4 — runs on 4 GB VRAM or CPU-only, strong reasoning for its size',
          'A model from 6 months ago with mature quantization often outperforms a brand-new release with limited community support',
        ],
      },
      body1: {
        title: 'The Three Tier Leaders',
        content: [
          '<strong>As of May 2026, the best Ollama model for general use is Llama 3 8B Q4_K_M. This page is updated monthly — last verified May 2026.</strong>',
          '"Best" in practice means the highest balance of output quality, inference speed, and VRAM efficiency — not raw benchmark score alone. A 7B model running at 20 tok/s is more useful for daily work than a 14B model that requires 10 GB and runs at 12 tok/s.',
          'The table below shows the current leader in each VRAM tier. All three run with Ollama out of the box via a single <code>ollama pull</code> command.',
        ],
        columns: ['Tier', 'Model', 'Why It Leads'],
        rows: [
          { 'Tier': 'Compact (≤4 GB)', 'Model': 'Phi-4 Mini Q4', 'Why It Leads': 'Best reasoning-per-GB at this tier' },
          { 'Tier': 'General (6–8 GB)', 'Model': 'Llama 3 8B Q4_K_M', 'Why It Leads': 'Top quality-per-GB in the 8B class' },
          { 'Tier': 'Coding (10–12 GB)', 'Model': 'Qwen 3 Coder 14B Q4', 'Why It Leads': 'Best HumanEval score at 14B tier' },
        ],
      },
      body2: {
        title: 'When Newer Isn\'t Better',
        content: [
          'A new model release does not automatically become the best Ollama pick. <strong>Quantization quality, community fine-tunes, and Ollama integration maturity take 4–8 weeks to catch up with a fresh release.</strong>',
          'Llama 3 8B and Mistral Small remain top choices not because they are the newest, but because their Q4_K_M quantizations are well-optimized, their system prompts are well-understood, and their performance is predictable across hardware.',
          'Watch for a model to hold its top position for 6+ weeks before relying on it for production use. For a deeper look at how to evaluate models for your specific workload, see the <a href="/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">top open-source models for Ollama</a>.',
          'Last verified: May 2026. If the data above looks stale, check the official Ollama GitHub releases page or model library.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Ollama Models',
        faqs: [
          {
            q: 'Should I always use the newest Ollama model?',
            a: 'Not automatically. New releases need 4–8 weeks for community quantizations, fine-tunes, and Ollama integration to mature. Check the table above for the current vetted top picks. For CPU-only setups, see <a href="/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">best Ollama models for CPU-only use</a>.',
          },
          {
            q: 'How often does the "best" Ollama model change?',
            a: 'General-purpose top picks shift every 2–3 months. Coding models update more frequently as benchmark leaders change. This page is reviewed monthly.',
          },
          {
            q: 'Which Ollama model is best for coding right now?',
            a: 'Qwen 3 Coder 14B at Q4_K_M. It leads HumanEval benchmarks in the 14B class and handles Python, TypeScript, and Go without special prompting. Needs 10 GB VRAM.',
          },
          {
            q: 'Are Qwen models better than Llama models in 2026?',
            a: 'For coding: yes, Qwen 3 Coder leads. For general conversation and instruction following at the 8B tier: Llama 3 8B remains competitive and runs faster on the same hardware due to its smaller size.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Ollama',
    title: 'Die besten Ollama-Modelle im Moment?',
    seoTitle: 'Beste Ollama-Modelle 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Bestes Ollama-Modell allgemein: Llama 3 8B Q4. Bestes Coding: Qwen 3 Coder 14B Q4. Kompaktmodell: Phi-4 Mini Q4. Monatlich aktualisiert. Stand Mai 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    is_living_page: true,
    quickAnswerTop: {
      de: {
        question: 'Die besten Ollama-Modelle im Moment?',
        answer: 'Stand Mai 2026: Das beste allgemeine Ollama-Modell ist Llama 3 8B. Für Coding führt Qwen 3 Coder 14B. Für kompakte Nutzung ist Phi-4 Mini ausgezeichnet. Diese Seite wird monatlich aktualisiert.',
        bullets: [
          'Bestes allgemeines Modell: Llama 3 8B Q4_K_M',
          'Bestes Coding-Modell: Qwen 3 Coder 14B Q4',
          'Bestes kompaktes Modell: Phi-4 Mini Q4',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beste Allzwecknutzung: Llama 3 8B Q4_K_M — passt in 6 GB VRAM, ~20 tok/s, ausgezeichnetes Instruction-Following',
          'Bestes Coding: Qwen 3 Coder 14B Q4_K_M — bester HumanEval-Score in der 14B-Klasse, benötigt 10 GB VRAM',
          'Bestes kompaktes Modell: Phi-4 Mini Q4 — läuft auf 4 GB VRAM oder nur CPU, starkes Reasoning für seine Größe',
          'Ein Modell von vor 6 Monaten mit ausgereifter Quantisierung übertrifft oft ein brandneues Release mit begrenzter Community-Unterstützung',
        ],
      },
      body1: {
        title: 'Die drei Tier-Spitzenreiter',
        content: [
          '<strong>Stand Mai 2026: Das beste Ollama-Modell für den allgemeinen Gebrauch ist Llama 3 8B Q4_K_M. Diese Seite wird monatlich aktualisiert — zuletzt überprüft im Mai 2026.</strong>',
          '"Bestes" bedeutet in der Praxis die höchste Balance aus Ausgabequalität, Inferenzgeschwindigkeit und VRAM-Effizienz — nicht allein ein roher Benchmark-Score. Ein 7B-Modell mit 20 tok/s ist für die tägliche Arbeit nützlicher als ein 14B-Modell, das 10 GB benötigt und bei 12 tok/s läuft.',
          'Die folgende Tabelle zeigt den aktuellen Spitzenreiter in jedem VRAM-Tier. Alle drei laufen mit Ollama out of the box via einem einzigen <code>ollama pull</code>-Befehl.',
        ],
        columns: ['Tier', 'Modell', 'Warum führend'],
        rows: [
          { 'Tier': 'Kompakt (≤4 GB)', 'Modell': 'Phi-4 Mini Q4', 'Warum führend': 'Bestes Reasoning-pro-GB in diesem Tier' },
          { 'Tier': 'Allgemein (6–8 GB)', 'Modell': 'Llama 3 8B Q4_K_M', 'Warum führend': 'Beste Qualität-pro-GB in der 8B-Klasse' },
          { 'Tier': 'Coding (10–12 GB)', 'Modell': 'Qwen 3 Coder 14B Q4', 'Warum führend': 'Bester HumanEval-Score im 14B-Tier' },
        ],
      },
      body2: {
        title: 'Wenn Neuer Nicht Besser Ist',
        content: [
          'Ein neues Modell-Release wird nicht automatisch zur besten Ollama-Wahl. <strong>Quantisierungsqualität, Community-Fine-Tunes und Ollama-Integrationsreife brauchen 4–8 Wochen, um mit einem frischen Release Schritt zu halten.</strong>',
          'Llama 3 8B und Mistral Small bleiben Top-Empfehlungen nicht weil sie die neuesten sind, sondern weil ihre Q4_K_M-Quantisierungen gut optimiert sind, ihre System-Prompts gut verstanden werden und ihre Performance über verschiedene Hardware hinweg vorhersagbar ist.',
          'Warten Sie, bis ein Modell seine Spitzenposition 6+ Wochen gehalten hat, bevor Sie es für den Produktionseinsatz nutzen. Für einen tieferen Einblick, wie Sie Modelle für Ihre spezifische Arbeitslast evaluieren, lesen Sie die <a href="/de/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">Top-Open-Source-Modelle für Ollama</a>.',
        ],
        callouts: [{ type: 'info', text: 'Zuletzt überprüft: Mai 2026. Wenn die Daten oben veraltet aussehen, prüfen Sie die offizielle Ollama GitHub-Release-Seite oder die Modell-Bibliothek.' }],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Ollama-Modellen',
        faqs: [
          {
            q: 'Sollte ich immer das neueste Ollama-Modell verwenden?',
            a: 'Nicht automatisch. Neue Releases brauchen 4–8 Wochen, bis Community-Quantisierungen, Fine-Tunes und Ollama-Integration ausgereift sind. Schauen Sie in die obige Tabelle für die aktuell geprüften Top-Empfehlungen. Für reine CPU-Setups lesen Sie <a href="/de/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">beste Ollama-Modelle für CPU-only-Nutzung</a>.',
          },
          {
            q: 'Wie oft wechselt das "beste" Ollama-Modell?',
            a: 'Allgemeine Top-Empfehlungen ändern sich alle 2–3 Monate. Coding-Modelle aktualisieren sich häufiger, da sich Benchmark-Spitzenreiter wechseln. Diese Seite wird monatlich überprüft.',
          },
          {
            q: 'Welches Ollama-Modell ist derzeit das beste für Coding?',
            a: 'Qwen 3 Coder 14B bei Q4_K_M. Es führt HumanEval-Benchmarks in der 14B-Klasse und bearbeitet Python, TypeScript und Go ohne spezielles Prompting. Benötigt 10 GB VRAM.',
          },
          {
            q: 'Sind Qwen-Modelle im Jahr 2026 besser als Llama-Modelle?',
            a: 'Für Coding: ja, Qwen 3 Coder führt. Für allgemeine Konversation und Instruction-Following im 8B-Tier: Llama 3 8B bleibt wettbewerbsfähig und läuft aufgrund seiner kleineren Größe auf gleicher Hardware schneller.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Ollama',
    title: 'Les meilleurs modèles Ollama en ce moment ?',
    seoTitle: 'Meilleurs modèles Ollama 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Meilleur Ollama général : Llama 3 8B Q4. Code : Qwen 3 Coder 14B Q4. Compact : Phi-4 Mini Q4. Mis à jour chaque mois. Dernière vérification mai 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    is_living_page: true,
    quickAnswerTop: {
      fr: {
        question: 'Les meilleurs modèles Ollama en ce moment ?',
        answer: 'En mai 2026, le meilleur modèle Ollama polyvalent est Llama 3 8B. Pour le code, Qwen 3 Coder 14B est en tête. Pour une utilisation compacte, Phi-4 Mini est excellent. Cette page est mise à jour mensuellement.',
        bullets: [
          'Meilleur polyvalent : Llama 3 8B Q4_K_M',
          'Meilleur pour le code : Qwen 3 Coder 14B Q4',
          'Meilleur compact : Phi-4 Mini Q4',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur usage polyvalent : Llama 3 8B Q4_K_M — tient dans 6 GB VRAM, ~20 tok/s, excellent suivi d\'instructions',
          'Meilleur code : Qwen 3 Coder 14B Q4_K_M — meilleur score HumanEval dans la classe 14B, nécessite 10 GB VRAM',
          'Meilleur compact : Phi-4 Mini Q4 — fonctionne avec 4 GB VRAM ou CPU uniquement, raisonnement solide pour sa taille',
          'Un modèle de 6 mois avec une quantization mature surpasse souvent une toute nouvelle release avec un support communautaire limité',
        ],
      },
      body1: {
        title: 'Les trois leaders par tier',
        content: [
          '<strong>En mai 2026, le meilleur modèle Ollama pour un usage général est Llama 3 8B Q4_K_M. Cette page est mise à jour mensuellement — dernière vérification mai 2026.</strong>',
          '"Meilleur" en pratique signifie le meilleur équilibre entre qualité de sortie, vitesse d\'inférence et efficacité VRAM — pas uniquement un score de benchmark brut. Un modèle 7B à 20 tok/s est plus utile au quotidien qu\'un modèle 14B nécessitant 10 GB et tournant à 12 tok/s.',
          'Le tableau ci-dessous montre le leader actuel dans chaque tier VRAM. Les trois fonctionnent avec Ollama dès l\'installation via une simple commande <code>ollama pull</code>.',
        ],
        columns: ['Tier', 'Modèle', 'Pourquoi il est en tête'],
        rows: [
          { 'Tier': 'Compact (≤4 GB)', 'Modèle': 'Phi-4 Mini Q4', 'Pourquoi il est en tête': 'Meilleur raisonnement/GB dans ce tier' },
          { 'Tier': 'Polyvalent (6–8 GB)', 'Modèle': 'Llama 3 8B Q4_K_M', 'Pourquoi il est en tête': 'Meilleure qualité/GB dans la classe 8B' },
          { 'Tier': 'Code (10–12 GB)', 'Modèle': 'Qwen 3 Coder 14B Q4', 'Pourquoi il est en tête': 'Meilleur score HumanEval au tier 14B' },
        ],
      },
      body2: {
        title: 'Quand le plus récent n\'est pas le meilleur',
        content: [
          'Une nouvelle release de modèle ne devient pas automatiquement le meilleur choix Ollama. <strong>La qualité de quantization, les fine-tunes communautaires et la maturité d\'intégration Ollama mettent 4–8 semaines à rattraper une nouvelle release.</strong>',
          'Llama 3 8B et Mistral Small restent des choix de référence non pas parce qu\'ils sont les plus récents, mais parce que leurs quantizations Q4_K_M sont bien optimisées, leurs prompts système sont bien compris et leurs performances sont prévisibles sur différents matériels.',
          'Attendez qu\'un modèle maintienne sa position de tête pendant 6+ semaines avant de l\'utiliser en production. Pour une analyse approfondie de l\'évaluation de modèles selon votre charge de travail, consultez les <a href="/fr/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">meilleurs modèles open-source pour Ollama</a>.',
        ],
        callouts: [{ type: 'info', text: 'Dernière vérification : mai 2026. Si les données ci-dessus semblent obsolètes, consultez la page officielle des releases GitHub d\'Ollama ou la bibliothèque de modèles.' }],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les modèles Ollama',
        faqs: [
          {
            q: 'Faut-il toujours utiliser le modèle Ollama le plus récent ?',
            a: 'Pas automatiquement. Les nouvelles releases ont besoin de 4–8 semaines pour que les quantizations communautaires, les fine-tunes et l\'intégration Ollama arrivent à maturité. Consultez le tableau ci-dessus pour les meilleures sélections vérifiées. Pour les configurations CPU uniquement, voir <a href="/fr/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">meilleurs modèles Ollama pour usage CPU uniquement</a>.',
          },
          {
            q: 'À quelle fréquence le "meilleur" modèle Ollama change-t-il ?',
            a: 'Les meilleures recommandations polyvalentes changent tous les 2–3 mois. Les modèles de code se mettent à jour plus fréquemment au gré des changements de leaders de benchmark. Cette page est révisée mensuellement.',
          },
          {
            q: 'Quel modèle Ollama est actuellement le meilleur pour le code ?',
            a: 'Qwen 3 Coder 14B à Q4_K_M. Il mène les benchmarks HumanEval dans la classe 14B et gère Python, TypeScript et Go sans prompting spécial. Nécessite 10 GB VRAM.',
          },
          {
            q: 'Les modèles Qwen sont-ils meilleurs que les modèles Llama en 2026 ?',
            a: 'Pour le code : oui, Qwen 3 Coder est en tête. Pour la conversation générale et le suivi d\'instructions dans le tier 8B : Llama 3 8B reste compétitif et tourne plus vite sur le même matériel grâce à sa taille plus petite.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Ollama',
    title: '今おすすめのOllamaモデルは？',
    seoTitle: '2026年おすすめOllamaモデル | Prompt Bites | PromptQuorum',
    metaDescription: '最良の汎用Ollamaモデル: Llama 3 8B Q4。最良のコーディング: Qwen 3 Coder 14B Q4。最良のコンパクトモデル: Phi-4 Mini Q4。毎月更新。2026年5月確認済み。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    is_living_page: true,
    quickAnswerTop: {
      ja: {
        question: '今おすすめのOllamaモデルは？',
        answer: '2026年5月現在、汎用に最適なOllamaモデルはLlama 3 8Bです。コーディングではQwen 3 Coder 14Bが最高。コンパクト用途にはPhi-4 Miniが優秀です。このページは毎月更新されます。',
        bullets: [
          '汎用最良: Llama 3 8B Q4_K_M',
          'コーディング最良: Qwen 3 Coder 14B Q4',
          'コンパクト最良: Phi-4 Mini Q4',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '汎用最良: Llama 3 8B Q4_K_M — 6 GB VRAMで動作、~20 tok/s、優秀な命令追従性',
          'コーディング最良: Qwen 3 Coder 14B Q4_K_M — 14Bクラスでトップのスコア、10 GB VRAMが必要',
          'コンパクト最良: Phi-4 Mini Q4 — 4 GB VRAMまたはCPUのみで動作、サイズに対して強力な推論力',
          '6ヶ月前のモデルでも成熟した量子化があれば、コミュニティサポートが限られた最新リリースを上回ることが多い',
        ],
      },
      body1: {
        title: '3つのティアのリーダー',
        content: [
          '<strong>2026年5月現在、汎用に最適なOllamaモデルはLlama 3 8B Q4_K_Mです。このページは毎月更新されています — 最終確認: 2026年5月。</strong>',
          '実際の「最良」とは、出力品質・推論速度・VRAM効率の最高バランスを意味します — 生のベンチマークスコアだけではありません。20 tok/sで動く7Bモデルは、10 GBを必要として12 tok/sで動く14Bモデルより日常業務で有用です。',
          '下の表は各VRAMティアの現在のリーダーを示しています。3つすべて、単一の <code>ollama pull</code> コマンドでOllamaからすぐに利用できます。',
        ],
        columns: ['ティア', 'モデル', 'リードの理由'],
        rows: [
          { 'ティア': 'コンパクト (≤4 GB)', 'モデル': 'Phi-4 Mini Q4', 'リードの理由': 'このティアで最高のGB当たり推論力' },
          { 'ティア': '汎用 (6–8 GB)', 'モデル': 'Llama 3 8B Q4_K_M', 'リードの理由': '8Bクラスで最高のGB当たり品質' },
          { 'ティア': 'コーディング (10–12 GB)', 'モデル': 'Qwen 3 Coder 14B Q4', 'リードの理由': '14BティアでトップのHumanEvalスコア' },
        ],
      },
      body2: {
        title: '新しいモデルが必ずしも優れているわけではない',
        content: [
          '新しいモデルのリリースが自動的に最良のOllamaの選択になるわけではありません。<strong>量子化の品質、コミュニティのファインチューン、Ollama統合の成熟には、新しいリリースから4〜8週間かかります。</strong>',
          'Llama 3 8BとMistral Smallがトップの選択であり続けるのは、最新だからではなく、Q4_K_Mの量子化が十分に最適化されており、システムプロンプトが広く理解されており、ハードウェアをまたいだパフォーマンスが予測可能だからです。',
          'モデルを本番用途に使用する前に、6週間以上トップポジションを維持していることを確認してください。特定のワークロードに対してモデルを評価する方法の詳細については、<a href="/ja/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">Ollama向けトップオープンソースモデル</a>をご覧ください。',
        ],
        callouts: [{ type: 'info', text: '最終確認: 2026年5月。上記のデータが古くなっている場合は、公式のOllama GitHubリリースページまたはモデルライブラリを確認してください。' }],
      },
      faq: {
        id: 'faq',
        title: 'Ollamaモデルに関するクイックアンサー',
        faqs: [
          {
            q: '常に最新のOllamaモデルを使うべきですか？',
            a: '自動的にそうとは言えません。新しいリリースはコミュニティの量子化、ファインチューン、Ollama統合が成熟するまで4〜8週間かかります。現在の検証済みトップピックは上記の表を確認してください。CPU専用セットアップの場合は、<a href="/ja/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">CPU専用のベストOllamaモデル</a>をご覧ください。',
          },
          {
            q: '「最良」のOllamaモデルはどのくらいの頻度で変わりますか？',
            a: '汎用のトップピックは2〜3ヶ月ごとに変わります。コーディングモデルはベンチマークリーダーが変わるにつれてより頻繁に更新されます。このページは毎月レビューされます。',
          },
          {
            q: '現在コーディングに最適なOllamaモデルはどれですか？',
            a: 'Q4_K_MのQwen 3 Coder 14Bです。14BクラスのHumanEvalベンチマークをリードし、特別なプロンプトなしでPython、TypeScript、Goを処理します。10 GB VRAMが必要です。',
          },
          {
            q: '2026年においてQwenモデルはLlamaモデルより優れていますか？',
            a: 'コーディングについて: はい、Qwen 3 Coderがリードしています。8Bティアでの一般的な会話と命令追従については: Llama 3 8Bは依然として競争力があり、サイズが小さいため同じハードウェアでより速く動作します。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Ollama',
    title: '目前最佳的Ollama模型是什么？',
    seoTitle: '2026年最佳Ollama本地模型推荐 | Prompt Bites | PromptQuorum',
    metaDescription: '2026年5月推荐：通用首选Llama 3 8B Q4，代码首选Qwen 3 Coder 14B Q4，轻量首选Phi-4 Mini Q4。每月更新。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    is_living_page: true,
    quickAnswerTop: {
      zh: {
        question: '目前最佳的Ollama模型是什么？',
        answer: '截至2026年5月，最佳通用Ollama模型是Llama 3 8B。代码生成首选Qwen 3 Coder 14B。轻量场景首选Phi-4 Mini。本页面每月更新。',
        bullets: ['最佳通用：Llama 3 8B Q4_K_M', '最佳代码：Qwen 3 Coder 14B Q4', '最佳轻量：Phi-4 Mini Q4'],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '最佳通用模型：Llama 3 8B Q4_K_M — 占用6 GB VRAM，约20 tok/s，指令跟随能力优秀',
          '最佳代码模型：Qwen 3 Coder 14B Q4_K_M — 14B级别HumanEval最高分，需要10 GB VRAM',
          '最佳轻量模型：Phi-4 Mini Q4 — 4 GB VRAM或纯CPU运行，推理能力强',
          '经过6个月量化优化的成熟模型，往往优于社区支持不足的全新发布模型',
        ],
      },
      body1: {
        title: '三个层级的领先模型',
        content: [
          '<strong>截至2026年5月，最佳通用Ollama模型是Llama 3 8B Q4_K_M。本页面每月更新——最后核实于2026年5月。</strong>',
          '"最佳"的实际含义是输出质量、推理速度和VRAM效率的最优平衡——而非单纯的基准分数。在相同硬件上，以20 tok/s运行的7B模型比需要10 GB且只有12 tok/s的14B模型更实用。',
          '下表展示各VRAM层级的当前领先模型。三款模型均可通过单条<code>ollama pull</code>命令直接下载使用。',
        ],
        columns: ['层级', '模型', '领先原因'],
        rows: [
          { '层级': '轻量（≤4 GB）', '模型': 'Phi-4 Mini Q4', '领先原因': '该层级每GB推理质量最佳' },
          { '层级': '通用（6–8 GB）', '模型': 'Llama 3 8B Q4_K_M', '领先原因': '8B级别每GB质量最高' },
          { '层级': '代码（10–12 GB）', '模型': 'Qwen 3 Coder 14B Q4', '领先原因': '14B层级HumanEval最高分' },
        ],
      },
      body2: {
        title: '新发布不代表更好',
        content: [
          '新模型发布不会自动成为最佳Ollama选择。<strong>量化质量、社区微调和Ollama集成成熟度通常需要4–8周才能赶上新发布版本。</strong>',
          'Llama 3 8B和Mistral Small持续保持领先，不是因为最新，而是因为其Q4_K_M量化经过充分优化，系统提示词行为可预测，跨硬件性能稳定。',
          '建议等待模型在顶位稳定6周以上再用于生产环境。深入了解如何评估适合您工作负载的模型，请参阅<a href="/zh/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">Ollama顶级开源模型指南</a>。',
          '最后核实: 2026年5月。如果上述数据已过时,请查看Ollama的官方GitHub发布页面或模型库。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Ollama模型常见问题',
        faqs: [
          {
            q: '应该总是使用最新的Ollama模型吗？',
            a: '不需要。新发布的模型需要4–8周让社区量化版本、微调和Ollama集成趋于成熟。请参考上方表格中经过验证的当前推荐模型。纯CPU使用建议参阅<a href="/zh/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">最佳CPU专用Ollama模型</a>。',
          },
          {
            q: '"最佳"Ollama模型多久会变化一次？',
            a: '通用模型的领先者每2–3个月更换一次。代码模型随基准排名变化更频繁。本页面每月审查更新。',
          },
          {
            q: '目前最佳代码Ollama模型是哪个？',
            a: 'Qwen 3 Coder 14B Q4_K_M。它在14B级别HumanEval基准中领先，无需特殊提示即可处理Python、TypeScript和Go。需要10 GB VRAM。',
          },
          {
            q: '2026年Qwen模型比Llama模型更好吗？',
            a: '代码任务：是的，Qwen 3 Coder领先。通用对话和8B层级的指令跟随：Llama 3 8B仍具竞争力，且因体积更小在相同硬件上运行更快。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Ollama',
    title: '¿Los mejores modelos de Ollama ahora mismo?',
    seoTitle: 'Mejores modelos de Ollama 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Mejor modelo general de Ollama: Llama 3 8B Q4. Mejor para código: Qwen 3 Coder 14B Q4. Mejor compacto: Phi-4 Mini Q4. Actualizado mensualmente. Mayo 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    is_living_page: true,
    quickAnswerTop: {
      es: {
        question: '¿Los mejores modelos de Ollama ahora mismo?',
        answer: 'A mayo de 2026, el mejor modelo general de Ollama es Llama 3 8B. Para código, Qwen 3 Coder 14B lidera. Para uso compacto, Phi-4 Mini es excelente. Esta página se actualiza mensualmente.',
        bullets: [
          'Mejor general: Llama 3 8B Q4_K_M',
          'Mejor para código: Qwen 3 Coder 14B Q4',
          'Mejor compacto: Phi-4 Mini Q4',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mejor uso general: Llama 3 8B Q4_K_M — cabe en 6 GB de VRAM, ~20 tok/s, excelente seguimiento de instrucciones',
          'Mejor para código: Qwen 3 Coder 14B Q4_K_M — puntuación HumanEval más alta en la clase 14B, requiere 10 GB de VRAM',
          'Mejor compacto: Phi-4 Mini Q4 — funciona con 4 GB de VRAM o solo CPU, razonamiento potente para su tamaño',
          'Un modelo de hace 6 meses con cuantización madura suele superar a un lanzamiento completamente nuevo con soporte limitado de la comunidad',
        ],
      },
      body1: {
        title: 'Los tres líderes por nivel',
        content: [
          '<strong>A mayo de 2026, el mejor modelo de Ollama para uso general es Llama 3 8B Q4_K_M. Esta página se actualiza mensualmente — última verificación mayo 2026.</strong>',
          '"Mejor" en la práctica significa el equilibrio más alto entre calidad de salida, velocidad de inferencia y eficiencia de VRAM — no solo la puntuación de referencia bruta. Un modelo 7B a 20 tok/s es más útil en el trabajo diario que un modelo 14B que requiere 10 GB y funciona a 12 tok/s.',
          'La tabla a continuación muestra el líder actual en cada nivel de VRAM. Los tres funcionan con Ollama de inmediato mediante un único comando <code>ollama pull</code>.',
        ],
        columns: ['Nivel', 'Modelo', 'Por qué lidera'],
        rows: [
          { 'Nivel': 'Compacto (≤4 GB)', 'Modelo': 'Phi-4 Mini Q4', 'Por qué lidera': 'Mejor razonamiento por GB en este nivel' },
          { 'Nivel': 'General (6–8 GB)', 'Modelo': 'Llama 3 8B Q4_K_M', 'Por qué lidera': 'Mejor calidad por GB en la clase 8B' },
          { 'Nivel': 'Código (10–12 GB)', 'Modelo': 'Qwen 3 Coder 14B Q4', 'Por qué lidera': 'Mejor puntuación HumanEval en el nivel 14B' },
        ],
      },
      body2: {
        title: 'Cuando lo más nuevo no es lo mejor',
        content: [
          'Un nuevo lanzamiento de modelo no se convierte automáticamente en la mejor opción de Ollama. <strong>La calidad de cuantización, los ajustes finos de la comunidad y la madurez de integración con Ollama tardan entre 4 y 8 semanas en ponerse al día con un lanzamiento reciente.</strong>',
          'Llama 3 8B y Mistral Small siguen siendo opciones principales no porque sean los más nuevos, sino porque sus cuantizaciones Q4_K_M están bien optimizadas, sus prompts de sistema son bien comprendidos y su rendimiento es predecible en distintos tipos de hardware.',
          'Espera a que un modelo mantenga su posición de liderazgo durante 6 semanas o más antes de utilizarlo en producción. Para un análisis más profundo de cómo evaluar modelos para tu carga de trabajo específica, consulta los <a href="/es/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">mejores modelos de código abierto para Ollama</a>.',
        ],
        callouts: [{ type: 'info', text: 'Última verificación: mayo 2026. Si los datos anteriores parecen desactualizados, consulta la página oficial de lanzamientos de GitHub de Ollama o la biblioteca de modelos.' }],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre los modelos de Ollama',
        faqs: [
          {
            q: '¿Debería usar siempre el modelo de Ollama más reciente?',
            a: 'No automáticamente. Los nuevos lanzamientos necesitan entre 4 y 8 semanas para que las cuantizaciones comunitarias, los ajustes finos y la integración con Ollama maduren. Consulta la tabla anterior para ver las mejores opciones verificadas actualmente. Para configuraciones solo con CPU, consulta <a href="/es/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">los mejores modelos de Ollama para uso solo con CPU</a>.',
          },
          {
            q: '¿Con qué frecuencia cambia el "mejor" modelo de Ollama?',
            a: 'Las mejores opciones de propósito general cambian cada 2 o 3 meses. Los modelos de código se actualizan con más frecuencia a medida que cambian los líderes de referencia. Esta página se revisa mensualmente.',
          },
          {
            q: '¿Qué modelo de Ollama es el mejor para código ahora mismo?',
            a: 'Qwen 3 Coder 14B en Q4_K_M. Lidera los benchmarks HumanEval en la clase 14B y maneja Python, TypeScript y Go sin necesidad de prompts especiales. Requiere 10 GB de VRAM.',
          },
          {
            q: '¿Son los modelos Qwen mejores que los modelos Llama en 2026?',
            a: 'Para código: sí, Qwen 3 Coder lidera. Para conversación general y seguimiento de instrucciones en el nivel 8B: Llama 3 8B sigue siendo competitivo y corre más rápido en el mismo hardware debido a su menor tamaño.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Ollama',
    title: 'Os melhores modelos Ollama agora?',
    seoTitle: 'Melhores modelos Ollama 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Melhor modelo Ollama geral: Llama 3 8B Q4. Melhor para código: Qwen 3 Coder 14B Q4. Melhor compacto: Phi-4 Mini Q4. Atualizado mensalmente. Última verificação maio de 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    is_living_page: true,
    quickAnswerTop: {
      pt: {
        question: 'Os melhores modelos Ollama agora?',
        answer: 'Em maio de 2026, o melhor modelo Ollama de uso geral é o Llama 3 8B. Para código, Qwen 3 Coder 14B lidera. Para uso compacto, Phi-4 Mini é excelente. Esta página é atualizada mensalmente.',
        bullets: [
          'Melhor geral: Llama 3 8B Q4_K_M',
          'Melhor para código: Qwen 3 Coder 14B Q4',
          'Melhor compacto: Phi-4 Mini Q4',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Melhor uso geral: Llama 3 8B Q4_K_M — cabe em 6 GB de VRAM, ~20 tok/s, excelente seguimento de instruções',
          'Melhor para código: Qwen 3 Coder 14B Q4_K_M — maior pontuação HumanEval na classe 14B, requer 10 GB de VRAM',
          'Melhor compacto: Phi-4 Mini Q4 — roda com 4 GB de VRAM ou somente CPU, raciocínio forte para seu tamanho',
          'Um modelo de 6 meses atrás com quantização madura costuma superar um lançamento completamente novo com suporte limitado da comunidade',
        ],
      },
      body1: {
        title: 'Os três líderes por nível',
        content: [
          '<strong>Em maio de 2026, o melhor modelo Ollama para uso geral é Llama 3 8B Q4_K_M. Esta página é atualizada mensalmente — última verificação maio de 2026.</strong>',
          '"Melhor" na prática significa o maior equilíbrio entre qualidade de saída, velocidade de inferência e eficiência de VRAM — não apenas pontuação bruta de benchmark. Um modelo 7B a 20 tok/s é mais útil no trabalho diário do que um modelo 14B que requer 10 GB e roda a 12 tok/s.',
          'A tabela abaixo mostra o líder atual em cada nível de VRAM. Os três funcionam com Ollama imediatamente via um único comando <code>ollama pull</code>.',
        ],
        columns: ['Nível', 'Modelo', 'Por que lidera'],
        rows: [
          { 'Nível': 'Compacto (≤4 GB)', 'Modelo': 'Phi-4 Mini Q4', 'Por que lidera': 'Melhor raciocínio por GB neste nível' },
          { 'Nível': 'Geral (6–8 GB)', 'Modelo': 'Llama 3 8B Q4_K_M', 'Por que lidera': 'Melhor qualidade por GB na classe 8B' },
          { 'Nível': 'Código (10–12 GB)', 'Modelo': 'Qwen 3 Coder 14B Q4', 'Por que lidera': 'Melhor pontuação HumanEval no nível 14B' },
        ],
      },
      body2: {
        title: 'Quando o mais novo não é o melhor',
        content: [
          'Um novo lançamento de modelo não se torna automaticamente a melhor escolha no Ollama. <strong>A qualidade da quantização, os ajustes finos da comunidade e a maturidade de integração com o Ollama levam 4–8 semanas para acompanhar um lançamento recente.</strong>',
          'Llama 3 8B e Mistral Small continuam sendo as principais escolhas não porque são os mais novos, mas porque suas quantizações Q4_K_M estão bem otimizadas, seus prompts de sistema são bem compreendidos e seu desempenho é previsível em diferentes hardwares.',
          'Aguarde um modelo manter sua posição de liderança por 6 ou mais semanas antes de usá-lo em produção. Para uma análise mais aprofundada de como avaliar modelos para sua carga de trabalho específica, consulte os <a href="/pt/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">melhores modelos de código aberto para Ollama</a>.',
        ],
        callouts: [{ type: 'info', text: 'Última verificação: maio de 2026. Se os dados acima parecerem desatualizados, consulte a página oficial de lançamentos do GitHub do Ollama ou a biblioteca de modelos.' }],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre os modelos Ollama',
        faqs: [
          {
            q: 'Devo sempre usar o modelo Ollama mais recente?',
            a: 'Não automaticamente. Novos lançamentos precisam de 4–8 semanas para que as quantizações da comunidade, os ajustes finos e a integração com o Ollama amadureçam. Consulte a tabela acima para as melhores opções verificadas atualmente. Para configurações somente CPU, consulte <a href="/pt/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">os melhores modelos Ollama para uso somente CPU</a>.',
          },
          {
            q: 'Com que frequência o "melhor" modelo Ollama muda?',
            a: 'As melhores opções de uso geral mudam a cada 2–3 meses. Os modelos de código se atualizam com mais frequência conforme os líderes de benchmark mudam. Esta página é revisada mensalmente.',
          },
          {
            q: 'Qual modelo Ollama é o melhor para código agora?',
            a: 'Qwen 3 Coder 14B em Q4_K_M. Ele lidera os benchmarks HumanEval na classe 14B e lida com Python, TypeScript e Go sem prompts especiais. Requer 10 GB de VRAM.',
          },
          {
            q: 'Os modelos Qwen são melhores do que os modelos Llama em 2026?',
            a: 'Para código: sim, Qwen 3 Coder lidera. Para conversa geral e seguimento de instruções no nível 8B: Llama 3 8B permanece competitivo e roda mais rápido no mesmo hardware devido ao seu tamanho menor.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Ollama',
    title: 'أفضل نماذج ⁨Ollama⁩ الآن؟',
    seoTitle: 'أفضل نماذج ⁨Ollama⁩ الآن ⁨2026⁩ | ⁨PromptQuorum⁩',
    metaDescription: '⁨Llama 3 8B Q4⁩_⁨K⁩_⁨M⁩ أفضل نموذج ⁨Ollama⁩ عام بـ⁨20⁩ رمز/ثانية و⁨6 GB VRAM. Qwen 3 Coder 14B Q4⁩ للبرمجة. ⁨Phi-4 Mini Q4⁩ للأجهزة المحدودة.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    is_living_page: true,
    quickAnswerTop: {
      ar: {
        question: 'أفضل نماذج Ollama الآن؟',
        answer: 'في مايو 2026، أفضل نموذج Ollama للاستخدام العام هو Llama 3 8B. للبرمجة، Qwen 3 Coder 14B هو القائد. للاستخدام المدمج، Phi-4 Mini ممتاز. هذه الصفحة تُحدَّث شهرياً.',
        bullets: [
          'الأفضل عموماً: Llama 3 8B Q4_K_M',
          'الأفضل للبرمجة: Qwen 3 Coder 14B Q4',
          'الأفضل المدمج: Phi-4 Mini Q4',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'الأفضل للاستخدام العام: Llama 3 8B Q4_K_M — يتسع في 6 GB VRAM، ~20 رمز/ثانية، اتباع تعليمات ممتاز',
          'الأفضل للبرمجة: Qwen 3 Coder 14B Q4_K_M — أعلى نقاط HumanEval في فئة 14B، يحتاج 10 GB VRAM',
          'الأفضل المدمج: Phi-4 Mini Q4 — يعمل بـ4 GB VRAM أو CPU فقط، استدلال قوي لحجمه',
          'نموذج عمره 6 أشهر بتكميم ناضج غالباً يتفوق على إصدار جديد كلياً بدعم مجتمعي محدود',
        ],
      },
      body1: {
        title: 'القادة الثلاثة حسب المستوى',
        content: [
          '<strong>في مايو 2026، أفضل نموذج Ollama للاستخدام العام هو Llama 3 8B Q4_K_M. هذه الصفحة تُحدَّث شهرياً — آخر مراجعة مايو 2026.</strong>',
          '"الأفضل" عملياً يعني أعلى توازن بين جودة الإخراج وسرعة الاستدلال وكفاءة VRAM — لا مجرد أعلى نقاط معيار. نموذج 7B بـ20 رمز/ثانية أكثر فائدة في العمل اليومي من نموذج 14B يحتاج 10 GB ويعمل بـ12 رمز/ثانية.',
          'الجدول أدناه يُظهر القائد الحالي في كل مستوى VRAM. الثلاثة تعمل مع Ollama فوراً عبر أمر <code>ollama pull</code> واحد.',
        ],
        columns: ['المستوى', 'النموذج', 'سبب التصدر'],
        rows: [
          { 'المستوى': 'مدمج (≤4 GB)', 'النموذج': 'Phi-4 Mini Q4', 'سبب التصدر': 'أفضل استدلال لكل GB في هذا المستوى' },
          { 'المستوى': 'عام (6–8 GB)', 'النموذج': 'Llama 3 8B Q4_K_M', 'سبب التصدر': 'أفضل جودة لكل GB في فئة 8B' },
          { 'المستوى': 'برمجة (10–12 GB)', 'النموذج': 'Qwen 3 Coder 14B Q4', 'سبب التصدر': 'أفضل نقاط HumanEval في مستوى 14B' },
        ],
      },
      body2: {
        title: 'عندما لا يكون الأحدث هو الأفضل',
        content: [
          'إصدار نموذج جديد لا يصبح تلقائياً أفضل خيار في Ollama. <strong>جودة التكميم والضبط الدقيق المجتمعي ونضج تكامل Ollama تحتاج 4–8 أسابيع لتواكب إصداراً حديثاً.</strong>',
          'Llama 3 8B وMistral Small لا يزالان الخيارين الرئيسيين ليس لأنهما الأحدث، بل لأن تكميمات Q4_K_M لديهما محسّنة جيداً، وموجّهات نظامهما مفهومة جيداً، وأداؤهما يمكن التنبؤ به عبر أجهزة مختلفة.',
          'انتظر حتى يحافظ نموذج على موقعه القيادي لمدة 6 أسابيع أو أكثر قبل استخدامه في الإنتاج. لتحليل أعمق حول تقييم النماذج لحمل عملك المحدد، راجع <a href="/ar/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">أفضل النماذج مفتوحة المصدر لـOllama</a>.',
        ],
        callouts: [{ type: 'info', text: 'آخر مراجعة: مايو 2026. إذا بدت البيانات أعلاه قديمة، راجع صفحة إصدارات Ollama الرسمية على GitHub أو مكتبة النماذج.' }],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول نماذج Ollama',
        faqs: [
          {
            q: 'هل يجب دائماً استخدام أحدث نموذج Ollama؟',
            a: 'ليس تلقائياً. الإصدارات الجديدة تحتاج 4–8 أسابيع لنضج تكميمات المجتمع والضبط الدقيق وتكامل Ollama. راجع الجدول أعلاه للخيارات الأفضل المتحقق منها حالياً. للإعدادات بـCPU فقط، راجع <a href="/ar/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">أفضل نماذج Ollama للاستخدام بـCPU فقط</a>.',
          },
          {
            q: 'كم مرة يتغير "أفضل" نموذج Ollama؟',
            a: 'الخيارات الأفضل للاستخدام العام تتغير كل 2–3 أشهر. نماذج البرمجة تتحدث بتكرار أكبر مع تغيير قادة المعايير. هذه الصفحة تُراجَع شهرياً.',
          },
          {
            q: 'ما أفضل نموذج Ollama للبرمجة الآن؟',
            a: 'Qwen 3 Coder 14B في Q4_K_M. يتصدر معايير HumanEval في فئة 14B ويتعامل مع Python وTypeScript وGo دون موجّهات خاصة. يحتاج 10 GB VRAM.',
          },
          {
            q: 'هل نماذج Qwen أفضل من نماذج Llama في 2026؟',
            a: 'للبرمجة: نعم، Qwen 3 Coder يتصدر. للمحادثة العامة واتباع التعليمات في مستوى 8B: Llama 3 8B لا يزال تنافسياً ويعمل بشكل أسرع على نفس العتاد بسبب حجمه الأصغر.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Ollama',
    title: '지금 최고의 Ollama 모델은?',
    seoTitle: '최고의 Ollama 모델 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '최고의 범용 Ollama 모델: Llama 3 8B Q4. 코딩 최강: Qwen 3 Coder 14B Q4. 경량 최강: Phi-4 Mini Q4. 매월 업데이트. 2026년 5월 최종 확인.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    is_living_page: true,
    targetKeywords: [
      'Ollama 최고 모델',
      '2026년 최고 Ollama 모델',
      'Ollama 추천 모델',
      'Ollama 로컬 LLM 모델 비교',
      'Llama 3 8B Ollama',
      'Qwen 3 Coder 14B Ollama',
    ],
    readTime: '3분 분량',
    quickAnswerTop: {
      ko: {
        question: '지금 최고의 Ollama 모델은?',
        answer: '2026년 5월 기준, 최고의 범용 Ollama 모델은 Llama 3 8B입니다. 코딩에는 Qwen 3 Coder 14B가 선두입니다. 경량 사용에는 Phi-4 Mini가 탁월합니다. 이 페이지는 매월 업데이트됩니다.',
        bullets: [
          '범용 최강: Llama 3 8B Q4_K_M',
          '코딩 최강: Qwen 3 Coder 14B Q4',
          '경량 최강: Phi-4 Mini Q4',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '범용 최강: Llama 3 8B Q4_K_M — 6 GB VRAM에 탑재 가능, ~20 tok/s, 탁월한 명령 준수',
          '코딩 최강: Qwen 3 Coder 14B Q4_K_M — 14B 클래스에서 최고 HumanEval 점수, 10 GB VRAM 필요',
          '경량 최강: Phi-4 Mini Q4 — 4 GB VRAM 또는 CPU 전용으로 실행 가능, 크기 대비 강력한 추론 능력',
          '성숙한 양자화를 갖춘 6개월 된 모델이 커뮤니티 지원이 제한된 최신 출시 모델보다 성능이 뛰어난 경우가 많습니다',
        ],
      },
      body1: {
        title: '단계별 3대 선두 모델',
        snippetBlocks: [
          { type: 'one-sentence', text: '2026년 5월 기준 최고의 Ollama 범용 모델은 Llama 3 8B Q4_K_M이며, 코딩에는 Qwen 3 Coder 14B, 경량 사용에는 Phi-4 Mini Q4가 선두입니다.' },
          { type: 'plain-terms', text: 'Ollama는 로컬에서 LLM 모델을 실행하는 도구입니다. Q4_K_M은 모델 크기와 품질의 균형을 맞춘 양자화 형식이며, HumanEval은 코드 생성 능력을 측정하는 벤치마크입니다.' },
        ],
        content: [
          '<strong>2026년 5월 기준, 범용 최고의 Ollama 모델은 Llama 3 8B Q4_K_M입니다. 이 페이지는 매월 업데이트되며 2026년 5월에 최종 확인되었습니다.</strong>',
          '실제 \"최강\"이란 출력 품질, 추론 속도, VRAM 효율성의 최적 균형을 의미합니다 — 단순히 벤치마크 점수가 높은 것이 아닙니다. 20 tok/s의 7B 모델이 10 GB가 필요하고 12 tok/s로 동작하는 14B 모델보다 일상 업무에서 더 유용합니다.',
          '아래 표는 각 VRAM 단계별 현재 선두 모델을 보여줍니다. 세 모델 모두 단일 <code>ollama pull</code> 명령으로 즉시 사용할 수 있습니다.',
        ],
        columns: ['단계', '모델', '선두 이유'],
        rows: [
          { '단계': '경량 (≤4 GB)', '모델': 'Phi-4 Mini Q4', '선두 이유': '해당 단계에서 GB당 최고 추론 성능' },
          { '단계': '범용 (6–8 GB)', '모델': 'Llama 3 8B Q4_K_M', '선두 이유': '8B 클래스에서 GB당 최고 품질' },
          { '단계': '코딩 (10–12 GB)', '모델': 'Qwen 3 Coder 14B Q4', '선두 이유': '14B 단계에서 최고 HumanEval 점수' },
        ],
      },
      body2: {
        title: '최신 모델이 항상 최고는 아닙니다',
        content: [
          '새 모델 출시가 자동으로 Ollama 최고의 선택이 되는 것은 아닙니다. <strong>양자화 품질, 커뮤니티 파인튜닝, Ollama 통합 성숙도가 최신 출시 모델을 따라잡는 데 4–8주가 걸립니다.</strong>',
          'Llama 3 8B와 Mistral Small이 여전히 주요 선택지인 이유는 최신이기 때문이 아니라, Q4_K_M 양자화가 잘 최적화되어 있고, 시스템 프롬프트가 잘 이해되어 있으며, 다양한 하드웨어에서 예측 가능한 성능을 보이기 때문입니다.',
          '프로덕션 환경에서 사용하기 전에 모델이 6주 이상 선두 위치를 유지하는지 확인하십시오. 특정 워크로드에 맞는 모델 평가 방법에 대한 심층 분석은 <a href="/ko/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">Ollama용 최고 오픈소스 모델</a>을 참조하십시오.',
        ],
        callouts: [{ type: 'info', text: '최종 확인: 2026년 5월. 위 데이터가 오래된 것처럼 보인다면 Ollama 공식 GitHub 릴리스 페이지나 모델 라이브러리를 확인하십시오.' }],
      },
      faq: {
        id: 'faq',
        title: 'Ollama 모델에 대한 빠른 답변',
        faqs: [
          {
            q: '항상 최신 Ollama 모델을 사용해야 합니까?',
            a: '자동으로 그렇지는 않습니다. 새 출시 모델은 커뮤니티 양자화, 파인튜닝, Ollama 통합이 성숙하는 데 4–8주가 필요합니다. 현재 검증된 최고 선택지는 위 표를 참조하십시오. CPU 전용 구성에 대해서는 <a href="/ko/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">CPU 전용 최고 Ollama 모델</a>을 참조하십시오.',
          },
          {
            q: '"최고" Ollama 모델은 얼마나 자주 바뀝니까?',
            a: '범용 최고 선택지는 2–3개월마다 바뀝니다. 코딩 모델은 벤치마크 선두가 바뀜에 따라 더 자주 업데이트됩니다. 이 페이지는 매월 검토됩니다.',
          },
          {
            q: '현재 코딩에 최고의 Ollama 모델은 무엇입니까?',
            a: 'Q4_K_M의 Qwen 3 Coder 14B입니다. 14B 클래스에서 HumanEval 벤치마크를 선도하며 특별한 프롬프트 없이 Python, TypeScript, Go를 처리합니다. 10 GB VRAM이 필요합니다.',
          },
          {
            q: '2026년에 Qwen 모델이 Llama 모델보다 뛰어납니까?',
            a: '코딩에서는 그렇습니다. Qwen 3 Coder가 선두입니다. 8B 단계의 범용 대화와 명령 준수에서는 Llama 3 8B가 여전히 경쟁력이 있으며, 크기가 작아 동일한 하드웨어에서 더 빠르게 실행됩니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 읽기',
        items: [
          '[Ollama용 최고 오픈소스 모델](/ko/local-llms/top-open-source-models-ollama)',
          '[CPU 전용 최고 Ollama 모델](/ko/prompt-bites/best-ollama-models-cpu-only)',
          '[Ollama 최신 버전](/ko/prompt-bites/ollama-latest-version)',
        ],
      },
    },
  },
}

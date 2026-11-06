import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/q4-k-m-vs-q8-0-overview-hero-en.webp',
    title: 'Q4_K_M vs Q8_0: Which Should You Pick?',
    dateModified: '2026-11-06',
    seoTitle: 'Q4_K_M vs Q8_0: Which? 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M for 8 GB VRAM or less, Q8_0 for 12+ GB. On Llama 3 8B, Q4_K_M is 4.58 GiB at +2.8% perplexity vs f16; Q8_0 is 7.96 GiB at +0.02%. Sourced.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    last_full_refresh: '2026-09-02',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing quantization for local LLMs',
    parentArticle: '/local-llms/quantization-levels-comparison',
    siblingBites: ['what-is-q4-k-m-quantization', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '**Q4_K_M and Q8_0 are two llama.cpp quantization formats: on Llama 3 8B, Q8_0 is practically identical to f16 by perplexity (+0.02%), while Q4_K_M adds +2.8% but needs a 4.58 GiB file instead of 7.96 GiB (Llama 3.1 8B: 7.95 GiB).** The choice mostly depends on your VRAM.',
    quickAnswerTop: {
      en: {
        question: 'Q4_K_M vs Q8_0: which should you pick?',
        answer: 'Use Q4_K_M with 8 GB VRAM or less and Q8_0 with 12+ GB. For Llama 3 8B, Q4_K_M is 4.58 GiB and Q8_0 is 7.96 GiB; Q8_0 stays closer to full precision.',
        bullets: [
          'Q4_K_M: 4.58 GiB for Llama 3.1 8B, about 5.1 GiB with a 4k KV cache (calculated)',
          'Q8_0: 7.95 GiB for Llama 3.1 8B, about 8.5 GiB with a 4k KV cache (calculated)',
          'Perplexity vs f16 on Llama 3 8B: Q4_K_M +2.8%, Q8_0 +0.02% (llama.cpp, calculated)',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '8 GB VRAM or less: use Q4_K_M — its 8B file is 4.58 GiB, while Q8_0 (7.95 GiB) no longer fits once a KV cache is added',
          '12+ GB VRAM: Q8_0 is worth it for near-f16 output, but it is slower: 50.93 versus 71.93 tokens/s for Llama 3.1 8B in the llama.cpp quantize README',
          'For most users running Ollama daily, Q4_K_M is the right choice',
        ],
      },
      body1: {
        title: 'The Quick Verdict',
        content: [
          '<strong>On Llama 3 8B, Q8_0 is practically identical to f16 by perplexity, and Q4_K_M adds a small increase.</strong> llama.cpp\'s perplexity test on wikitext gives 6.2332 for f16, 6.2343 for Q8_0 and 6.4071 for Q4_K_M without an importance matrix: +0.02% and +2.8% (calculated; <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp perplexity README</a>). Perplexity is a language-modelling score, not a task benchmark, so it does not show how much a particular chat, coding or summarization task changes.',
          'Q4_K_M is the usual default because the Llama 3.1 8B file is 4.58 GiB instead of 7.95 GiB and stays close to f16 on that test. Choose Q8_0 when memory is not the limit. We did not measure task quality ourselves; if one task matters to you, run both quantizations on it.',
          'If your results feel wrong on Q4_K_M, a likely first thing to check is the model size and prompt structure: llama.cpp\'s measured perplexity gap to f16 is small.',
        ],
      },
      body2: {
        title: 'Side-by-Side Comparison',
        content: [
          'The table uses Llama 3.1 8B file sizes from the <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp quantize README</a>, a calculated KV cache (32 layers, 8 key-value heads, head dimension 128, f16: 0.5 GiB for 4,096 tokens) and Llama 3 8B perplexity from the llama.cpp perplexity README. Both formats work with Ollama, LM Studio, and llama.cpp without any special configuration.',
          'For context on what Q4_K_M means and how k-quant compression works, see the <a href="/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M explained guide</a>. For the full quantization reference, see <a href="/local-llms/quantization-levels-comparison" class="text-primary hover:underline">quantization levels compared</a>.',
          '<strong>None of the sources above tests long-document recall, multi-step math or long code generation, so this page makes no claim about them.</strong> Q8_0 has lower perplexity than Q4_K_M, so if you have the memory it is the lower-risk choice by that metric; test both on tasks where small errors matter. For a refresher, see <a href="/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">what Q4_K_M means</a>.',
        ],
        columns: ['Metric', 'Q4_K_M', 'Q8_0'],
        rows: [
          { 'Metric': 'File size (Llama 3.1 8B)', 'Q4_K_M': '4.58 GiB', 'Q8_0': '7.95 GiB' },
          { 'Metric': 'VRAM with 4k KV cache (calculated, without runtime overhead)', 'Q4_K_M': '~5.1 GiB', 'Q8_0': '~8.5 GiB' },
          { 'Metric': 'Perplexity, Llama 3 8B (f16: 6.23)', 'Q4_K_M': '6.41 (+2.8%)', 'Q8_0': '6.23 (+0.02%)' },
          { 'Metric': 'Tokens/s, Llama 3.1 8B (README)', 'Q4_K_M': '71.93', 'Q8_0': '50.93' },
          { 'Metric': 'Best for', 'Q4_K_M': '6–8 GB VRAM', 'Q8_0': '12+ GB VRAM' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Q4_K_M vs Q8_0',
        faqs: [
          {
            q: 'Is Q8_0 noticeably better than Q4_K_M?',
            a: 'Possibly, but these sources do not show where. Q8_0 has less quantization error: +0.02% perplexity vs f16 on Llama 3 8B, against +2.8% for Q4_K_M (llama.cpp, calculated). Perplexity does not measure chat, coding or summarization quality directly, so test both on your own task.',
          },
          {
            q: 'Does Q8_0 run faster than Q4_K_M?',
            a: 'No. Q8_0 is larger and needs more memory bandwidth per token. The llama.cpp quantize README lists 71.93 tokens/s for Q4_K_M and 50.93 tokens/s for Q8_0 on Llama 3.1 8B (speeds depend on hardware). See <a href="/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">what Q4_K_M means</a> for the underlying reason.',
          },
          {
            q: 'Can I switch between Q4_K_M and Q8_0 for different tasks?',
            a: 'Only by pulling and running different model tags. In Ollama: <code>ollama pull llama3:8b-instruct-q4_K_M</code> and <code>ollama pull llama3:8b-instruct-q8_0</code> are separate downloads. You switch by specifying the tag in <code>ollama run</code>.',
          },
          {
            q: 'What about Q4_K_S — is it worth using instead of Q4_K_M?',
            a: 'Q4_K_S is 0.22 GiB smaller than Q4_K_M (4.36 vs 4.58 GiB for Llama 3.1 8B) and has higher perplexity (6.50 vs 6.41 on Llama 3 8B without an importance matrix). Use Q4_K_S only if Q4_K_M does not fit; otherwise Q4_K_M is the better choice.',
          },
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/q4-k-m-vs-q8-0-overview-hero-de.webp',
    title: 'Q4_K_M vs. Q8_0: Was sollten Sie wählen?',
    seoTitle: 'Q4_K_M vs. Q8_0: Wählen 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M bei 8 GB VRAM oder weniger, Q8_0 ab 12+ GB. Bei Llama 3 8B ist Q4_K_M 4,58 GiB groß (+2,8 % Perplexität vs. f16), Q8_0 7,96 GiB (+0,02 %).',
    publishDate: '2026-05-18',
    dateModified: '2026-11-06',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    leadAnswerBlock: '**Q4_K_M und Q8_0 sind zwei Quantisierungsformate von llama.cpp: Bei Llama 3 8B liegt Q8_0 bei der Perplexity auf dem Niveau von f16 (+0,02 %), Q4_K_M liegt +2,8 % darüber, braucht aber nur eine 4,58-GiB-Datei statt 7,96 GiB (Llama 3.1 8B: 7,95 GiB).**',
    quickAnswerTop: {
      de: {
        question: 'Q4_K_M vs. Q8_0: Was sollten Sie wählen?',
        answer: 'Verwenden Sie Q4_K_M bei 8 GB VRAM oder weniger und Q8_0 bei 12+ GB. Bei Llama 3 8B ist Q4_K_M 4,58 GiB und Q8_0 7,96 GiB groß; Q8_0 bleibt näher an der vollen Präzision.',
        bullets: [
          'Q4_K_M: 4,58 GiB für Llama 3.1 8B, etwa 5,1 GiB mit 4k-KV-Cache (berechnet)',
          'Q8_0: 7,95 GiB für Llama 3.1 8B, etwa 8,5 GiB mit 4k-KV-Cache (berechnet)',
          'Perplexität vs. f16 bei Llama 3 8B: Q4_K_M +2,8 %, Q8_0 +0,02 % (llama.cpp, berechnet)',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Bis 8 GB VRAM: Q4_K_M (4,58 GiB); Q8_0 (7,95 GiB) passt mit KV-Cache nicht mehr',
          '12+ GB VRAM: Q8_0 lohnt sich für nahezu f16-nahe Ausgaben, ist aber langsamer: 50,93 gegenüber 71,93 Tokens/s bei Llama 3.1 8B laut llama.cpp-Quantize-README',
          'Für die meisten Benutzer, die Ollama täglich nutzen, ist Q4_K_M die richtige Wahl',
        ],
      },
      body1: {
        title: 'Das schnelle Fazit',
        content: [
          '<strong>Bei Llama 3 8B ist Q8_0 laut Perplexität praktisch identisch mit f16, Q4_K_M erhöht sie leicht.</strong> Der Perplexitätstest von llama.cpp auf wikitext ergibt 6,2332 für f16, 6,2343 für Q8_0 und 6,4071 für Q4_K_M ohne Importance-Matrix: +0,02 % bzw. +2,8 % (berechnet; <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp-Perplexity-README</a>). Perplexität ist ein Sprachmodell-Maß, kein Aufgaben-Benchmark; sie zeigt daher nicht, wie stark sich eine bestimmte Chat-, Coding- oder Zusammenfassungsaufgabe ändert.',
          'Q4_K_M ist der übliche Standard, weil die Datei von Llama 3.1 8B nur 4,58 statt 7,95 GiB groß ist und in diesem Test nah an f16 bleibt. Wählen Sie Q8_0, wenn Speicher nicht der Engpass ist. Wir haben die Aufgabenqualität nicht selbst gemessen; wenn eine Aufgabe für Sie wichtig ist, testen Sie beide Quantisierungen damit.',
          'Wenn Ihre Ergebnisse mit Q4_K_M schlecht wirken, sind Modellgröße und Prompt-Struktur ein naheliegender erster Prüfpunkt: Die von llama.cpp gemessene Perplexitätslücke zu f16 ist klein.',
        ],
      },
      body2: {
        title: 'Direkter Vergleich',
        content: [
          'Die Tabelle nutzt Dateigrößen von Llama 3.1 8B aus dem <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp-Quantize-README</a>, einen berechneten KV-Cache (32 Schichten, 8 Key-Value-Köpfe, Kopfdimension 128, f16: 0,5 GiB für 4.096 Tokens) und die Perplexität von Llama 3 8B aus dem llama.cpp-Perplexity-README. Beide Formate funktionieren mit Ollama, LM Studio und llama.cpp ohne spezielle Konfiguration.',
          'Für Kontext zu Q4_K_M und K-Quant-Kompression, siehe den <a href="/de/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M Erklärungsleitfaden</a>. Für die vollständige Quantisierungsreferenz, siehe <a href="/de/local-llms/quantization-levels-comparison" class="text-primary hover:underline">Quantisierungsstufen verglichen</a>.',
          '<strong>Keine der obigen Quellen testet Abruf aus langen Dokumenten, mehrstufige Mathematik oder lange Code-Generierung; diese Seite trifft dazu daher keine Aussage.</strong> Q8_0 hat eine niedrigere Perplexität als Q4_K_M; wenn Sie den Speicher haben, ist es nach diesem Maß die risikoärmere Wahl. Testen Sie bei Aufgaben, in denen kleine Fehler zählen, beide. Zur Auffrischung siehe <a href="/de/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">was Q4_K_M bedeutet</a>.',
        ],
        columns: ['Metrik', 'Q4_K_M', 'Q8_0'],
        rows: [
          { 'Metrik': 'Dateigröße (Llama 3.1 8B)', 'Q4_K_M': '4,58 GiB', 'Q8_0': '7,95 GiB' },
          { 'Metrik': 'VRAM mit 4k-KV-Cache (berechnet, ohne Laufzeit-Overhead)', 'Q4_K_M': '~5,1 GiB', 'Q8_0': '~8,5 GiB' },
          { 'Metrik': 'Perplexität, Llama 3 8B (f16: 6,23)', 'Q4_K_M': '6,41 (+2,8 %)', 'Q8_0': '6,23 (+0,02 %)' },
          { 'Metrik': 'Tokens/s, Llama 3.1 8B (README)', 'Q4_K_M': '71,93', 'Q8_0': '50,93' },
          { 'Metrik': 'Am besten für', 'Q4_K_M': '6–8 GB VRAM', 'Q8_0': '12+ GB VRAM' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Q4_K_M vs. Q8_0',
        faqs: [
          {
            q: 'Ist Q8_0 merklich besser als Q4_K_M?',
            a: 'Möglicherweise, aber diese Quellen zeigen nicht, wo. Q8_0 hat weniger Quantisierungsfehler: +0,02 % Perplexität vs. f16 bei Llama 3 8B gegenüber +2,8 % bei Q4_K_M (llama.cpp, berechnet). Perplexität misst die Qualität bei Chat, Coding oder Zusammenfassung nicht direkt; testen Sie daher beide mit Ihrer eigenen Aufgabe.',
          },
          {
            q: 'Ist Q8_0 schneller als Q4_K_M?',
            a: 'Nein. Q8_0 ist größer und braucht pro Token mehr Speicherbandbreite. Das llama.cpp-Quantize-README nennt für Llama 3.1 8B 71,93 Tokens/s bei Q4_K_M und 50,93 Tokens/s bei Q8_0 (die Geschwindigkeit hängt von der Hardware ab). Siehe <a href="/de/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">was Q4_K_M bedeutet</a> für den Hintergrund.',
          },
          {
            q: 'Kann ich für verschiedene Aufgaben zwischen Q4_K_M und Q8_0 wechseln?',
            a: 'Nur durch Herunterladen und Ausführen verschiedener Modell-Tags. In Ollama: <code>ollama pull llama3:8b-instruct-q4_K_M</code> und <code>ollama pull llama3:8b-instruct-q8_0</code> sind separate Downloads. Sie wechseln, indem Sie den Tag in <code>ollama run</code> angeben.',
          },
          {
            q: 'Was ist mit Q4_K_S — lohnt es sich statt Q4_K_M zu nutzen?',
            a: 'Q4_K_S ist 0,22 GiB kleiner als Q4_K_M (4,36 vs. 4,58 GiB bei Llama 3.1 8B) und hat eine höhere Perplexität (6,50 vs. 6,41 bei Llama 3 8B ohne Importance-Matrix). Verwenden Sie Q4_K_S nur, wenn Q4_K_M nicht passt; sonst ist Q4_K_M die bessere Wahl.',
          },
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/q4-k-m-vs-q8-0-overview-hero-fr.webp',
    title: 'Q4_K_M ou Q8_0 : lequel choisir ?',
    seoTitle: 'Q4_K_M ou Q8_0 2026 : lequel ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M avec 8 Go de VRAM ou moins, Q8_0 dès 12 Go. Sur Llama 3 8B, Q4_K_M fait 4,58 GiB (+2,8 % de perplexité vs f16), Q8_0 7,96 GiB (+0,02 %).',
    publishDate: '2026-05-18',
    dateModified: '2026-11-06',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    leadAnswerBlock: '**Q4_K_M et Q8_0 sont deux formats de quantification de llama.cpp : sur Llama 3 8B, Q8_0 est pratiquement identique à f16 en perplexité (+0,02 %), tandis que Q4_K_M ajoute +2,8 % mais tient dans un fichier de 4,58 GiB au lieu de 7,96 GiB (Llama 3.1 8B : 7,95 GiB).**',
    quickAnswerTop: {
      fr: {
        question: 'Q4_K_M ou Q8_0 : lequel choisir ?',
        answer: 'Utilisez Q4_K_M avec 8 Go de VRAM ou moins et Q8_0 avec 12+ Go. Pour Llama 3 8B, Q4_K_M fait 4,58 GiB et Q8_0 7,96 GiB ; Q8_0 reste plus proche de la pleine précision.',
        bullets: [
          'Q4_K_M : 4,58 GiB pour Llama 3.1 8B, environ 5,1 GiB avec un cache KV de 4k (calculé)',
          'Q8_0 : 7,95 GiB pour Llama 3.1 8B, environ 8,5 GiB avec un cache KV de 4k (calculé)',
          'Perplexité vs f16 sur Llama 3 8B : Q4_K_M +2,8 %, Q8_0 +0,02 % (llama.cpp, calculé)',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '8 Go de VRAM ou moins : utiliser Q4_K_M — son fichier 8B fait 4,58 GiB, alors que Q8_0 (7,95 GiB) ne tient plus une fois le cache KV ajouté',
          '12+ Go de VRAM : Q8_0 vaut le coup pour une sortie proche de f16, mais il est plus lent : 50,93 contre 71,93 tokens/s pour Llama 3.1 8B dans le README de quantize de llama.cpp',
          'Pour la plupart des utilisateurs Ollama au quotidien, Q4_K_M est le bon choix',
        ],
      },
      body1: {
        title: 'Le verdict rapide',
        content: [
          '<strong>Sur Llama 3 8B, Q8_0 est pratiquement identique à f16 en perplexité, et Q4_K_M ajoute une petite hausse.</strong> Le test de perplexité de llama.cpp sur wikitext donne 6,2332 pour f16, 6,2343 pour Q8_0 et 6,4071 pour Q4_K_M sans matrice d\'importance : +0,02 % et +2,8 % (calculé ; <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">README perplexity de llama.cpp</a>). La perplexité est un score de modélisation du langage, pas un benchmark de tâches ; elle ne montre donc pas dans quelle mesure une tâche précise de chat, de code ou de résumé change.',
          'Q4_K_M est le choix par défaut courant car le fichier de Llama 3.1 8B fait 4,58 GiB au lieu de 7,95 GiB et reste proche de f16 sur ce test. Choisissez Q8_0 quand la mémoire n\'est pas la limite. Nous n\'avons pas mesuré nous-mêmes la qualité par tâche ; si une tâche compte pour vous, essayez les deux quantisations dessus.',
          'Si vos résultats paraissent mauvais avec Q4_K_M, la taille du modèle et la structure du prompt sont une première piste probable : l\'écart de perplexité mesuré par llama.cpp avec f16 est faible.',
        ],
      },
      body2: {
        title: 'Comparaison côte à côte',
        content: [
          'Le tableau utilise les tailles de fichier de Llama 3.1 8B du <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md" class="text-primary hover:underline" rel="noopener noreferrer">README de quantize de llama.cpp</a>, un cache KV calculé (32 couches, 8 têtes clé-valeur, dimension de tête 128, f16 : 0,5 GiB pour 4 096 tokens) et la perplexité de Llama 3 8B du README perplexity de llama.cpp. Les deux formats fonctionnent avec Ollama, LM Studio et llama.cpp sans configuration particulière.',
          'Pour comprendre Q4_K_M et la compression k-quant, voir le <a href="/fr/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">guide explicatif Q4_K_M</a>. Pour la référence complète, voir <a href="/fr/local-llms/quantization-levels-comparison" class="text-primary hover:underline">les niveaux de quantisation comparés</a>.',
          '<strong>Aucune des sources ci-dessus ne teste le rappel sur de longs documents, les mathématiques multi-étapes ou la génération de long code ; cette page n\'affirme donc rien à ce sujet.</strong> Q8_0 a une perplexité plus basse que Q4_K_M ; si vous avez la mémoire, c\'est le choix le moins risqué selon cette mesure. Testez les deux pour les tâches où les petites erreurs comptent. Pour un rappel, voir <a href="/fr/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">ce que signifie Q4_K_M</a>.',
        ],
        columns: ['Métrique', 'Q4_K_M', 'Q8_0'],
        rows: [
          { 'Métrique': 'Taille du fichier (Llama 3.1 8B)', 'Q4_K_M': '4,58 GiB', 'Q8_0': '7,95 GiB' },
          { 'Métrique': 'VRAM avec cache KV 4k (calculé, hors surcoût d\'exécution)', 'Q4_K_M': '~5,1 GiB', 'Q8_0': '~8,5 GiB' },
          { 'Métrique': 'Perplexité, Llama 3 8B (f16 : 6,23)', 'Q4_K_M': '6,41 (+2,8 %)', 'Q8_0': '6,23 (+0,02 %)' },
          { 'Métrique': 'Tokens/s, Llama 3.1 8B (README)', 'Q4_K_M': '71,93', 'Q8_0': '50,93' },
          { 'Métrique': 'Idéal pour', 'Q4_K_M': '6–8 Go de VRAM', 'Q8_0': '12+ Go de VRAM' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur Q4_K_M vs Q8_0',
        faqs: [
          {
            q: 'Q8_0 est-il sensiblement meilleur que Q4_K_M ?',
            a: 'Peut-être, mais ces sources ne montrent pas où. Q8_0 a moins d\'erreur de quantisation : +0,02 % de perplexité vs f16 sur Llama 3 8B, contre +2,8 % pour Q4_K_M (llama.cpp, calculé). La perplexité ne mesure pas directement la qualité en chat, code ou résumé ; testez donc les deux sur votre propre tâche.',
          },
          {
            q: 'Q8_0 est-il plus rapide que Q4_K_M ?',
            a: 'Non. Q8_0 est plus lourd et demande plus de bande passante mémoire par token. Le README de quantize de llama.cpp indique 71,93 tokens/s pour Q4_K_M et 50,93 tokens/s pour Q8_0 sur Llama 3.1 8B (la vitesse dépend du matériel). Voir <a href="/fr/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">ce que signifie Q4_K_M</a> pour la raison de fond.',
          },
          {
            q: 'Puis-je alterner entre Q4_K_M et Q8_0 selon les tâches ?',
            a: 'Seulement en téléchargeant et exécutant des tags de modèle différents. Dans Ollama : <code>ollama pull llama3:8b-instruct-q4_K_M</code> et <code>ollama pull llama3:8b-instruct-q8_0</code> sont des téléchargements séparés. Vous basculez en spécifiant le tag dans <code>ollama run</code>.',
          },
          {
            q: 'Et Q4_K_S — vaut-il mieux l\'utiliser à la place de Q4_K_M ?',
            a: 'Q4_K_S est plus petit de 0,22 GiB que Q4_K_M (4,36 contre 4,58 GiB pour Llama 3.1 8B) et a une perplexité plus élevée (6,50 contre 6,41 sur Llama 3 8B sans matrice d\'importance). N\'utilisez Q4_K_S que si Q4_K_M ne tient pas ; sinon Q4_K_M est le meilleur choix.',
          },
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/q4-k-m-vs-q8-0-overview-hero-ja.webp',
    title: 'Q4_K_M vs Q8_0：どちらを選ぶべきですか？',
    seoTitle: 'Q4_K_M vs Q8_0：2026年の選び方',
    metaDescription: 'VRAM 8 GB以下ならQ4_K_M、12 GB以上ならQ8_0。Llama 3 8Bではf16比でQ4_K_Mは4.58 GiB・パープレキシティ+2.8%、Q8_0は7.96 GiB・+0.02%です。',
    publishDate: '2026-05-18',
    dateModified: '2026-11-06',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    leadAnswerBlock: '**Q4_K_MとQ8_0はllama.cppの量子化形式です。Llama 3 8Bでは、Q8_0のパープレキシティはf16とほぼ同じ（+0.02%）、Q4_K_Mは+2.8%で、ファイルは4.58 GiBです。**',
    quickAnswerTop: {
      ja: {
        question: 'Q4_K_MとQ8_0：どちらを選ぶべきですか？',
        answer: 'VRAMが8 GB以下ならQ4_K_M、12 GB以上ならQ8_0を使用してください。Llama 3 8BではQ4_K_Mが4.58 GiB、Q8_0が7.96 GiBで、Q8_0のほうが完全精度に近い結果になります。',
        bullets: [
          'Q4_K_M：Llama 3.1 8Bで4.58 GiB、4k KVキャッシュ込みで約5.1 GiB（計算値）',
          'Q8_0：Llama 3.1 8Bで7.95 GiB、4k KVキャッシュ込みで約8.5 GiB（計算値）',
          'Llama 3 8Bのf16比パープレキシティ：Q4_K_M +2.8%、Q8_0 +0.02%（llama.cpp、計算値）',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'VRAM 8 GB以下：Q4_K_Mを使用 — 8Bファイルは4.58 GiBで、Q8_0（7.95 GiB）はKVキャッシュを加えると収まりません',
          'VRAM 12 GB以上：f16に近い出力が必要ならQ8_0に価値がありますが、速度は遅くなります。llama.cppのquantize READMEではLlama 3.1 8Bで50.93対71.93 tokens/sです',
          'Ollamaを毎日使用するほとんどのユーザーにとって、Q4_K_Mが正しい選択です',
        ],
      },
      body1: {
        title: '簡潔な結論',
        content: [
          '<strong>Llama 3 8Bでは、パープレキシティ上Q8_0はf16とほぼ同一で、Q4_K_Mはわずかに増加します。</strong>llama.cppのwikitextパープレキシティテストでは、f16が6.2332、Q8_0が6.2343、Q4_K_M（重要度行列なし）が6.4071で、それぞれ+0.02%と+2.8%です（計算値、<a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp perplexity README</a>）。パープレキシティは言語モデリングの指標でありタスクのベンチマークではないため、特定のチャット・コーディング・要約タスクがどれだけ変わるかは示しません。',
          'Q4_K_Mが標準的なデフォルトなのは、Llama 3.1 8Bのファイルが7.95 GiBではなく4.58 GiBで済み、このテストでf16に近い値を保つためです。メモリが制約でない場合はQ8_0を選んでください。当サイトではタスク品質を自前で測定していません。重要なタスクがある場合は、両方の量子化で試してください。',
          'Q4_K_Mで結果がおかしいと感じる場合は、まずモデルサイズとプロンプト構造を確認するのが有力です。llama.cppが測定したf16とのパープレキシティ差は小さいです。',
        ],
      },
      body2: {
        title: '並列比較',
        content: [
          'この表は、<a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp quantize README</a>のLlama 3.1 8Bのファイルサイズ、計算によるKVキャッシュ（32層、キー・バリューヘッド8、ヘッド次元128、f16で4,096トークンあたり0.5 GiB）、llama.cpp perplexity READMEのLlama 3 8Bのパープレキシティを使用しています。両フォーマットは特別な設定なしにOllama、LM Studio、llama.cppで動作します。',
          'Q4_K_Mとk-quant圧縮について理解するには、<a href="/ja/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M解説ガイド</a>を参照してください。完全な量子化リファレンスは<a href="/ja/local-llms/quantization-levels-comparison" class="text-primary hover:underline">量子化レベル比較</a>を参照してください。',
          '<strong>上記の出典のいずれも、長文書の想起、複数ステップの数学、長いコード生成を検証していないため、本ページはそれらについて主張しません。</strong>Q8_0はQ4_K_Mよりパープレキシティが低いため、メモリに余裕があるならその指標ではリスクの低い選択です。小さな誤差が重要なタスクでは、両方を試してください。おさらいは<a href="/ja/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_Mの意味</a>を参照してください。',
        ],
        columns: ['指標', 'Q4_K_M', 'Q8_0'],
        rows: [
          { '指標': 'ファイルサイズ（Llama 3.1 8B）', 'Q4_K_M': '4.58 GiB', 'Q8_0': '7.95 GiB' },
          { '指標': '4k KVキャッシュ込みVRAM（計算値、実行時オーバーヘッド除く）', 'Q4_K_M': '約5.1 GiB', 'Q8_0': '約8.5 GiB' },
          { '指標': 'パープレキシティ、Llama 3 8B（f16：6.23）', 'Q4_K_M': '6.41（+2.8%）', 'Q8_0': '6.23（+0.02%）' },
          { '指標': 'Tokens/s、Llama 3.1 8B（README）', 'Q4_K_M': '71.93', 'Q8_0': '50.93' },
          { '指標': '最適な対象', 'Q4_K_M': '6–8 GB VRAM', 'Q8_0': '12+ GB VRAM' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Q4_K_M vs Q8_0に関するよくある質問',
        faqs: [
          {
            q: 'Q8_0はQ4_K_Mより明らかに優れていますか？',
            a: 'あり得ますが、これらの出典ではどこで差が出るかは分かりません。Q8_0は量子化誤差が小さく、Llama 3 8Bのf16比パープレキシティは+0.02%で、Q4_K_Mの+2.8%より小さいです（llama.cpp、計算値）。パープレキシティはチャット・コーディング・要約の品質を直接測るものではないため、ご自身のタスクで両方を試してください。',
          },
          {
            q: 'Q8_0はQ4_K_Mより速いですか？',
            a: 'いいえ。Q8_0はより大きく、トークンあたりより多くのメモリ帯域幅を必要とします。llama.cppのquantize READMEでは、Llama 3.1 8BでQ4_K_Mが71.93 tokens/s、Q8_0が50.93 tokens/sと記載されています（速度はハードウェアによって異なります）。基本的な理由については<a href="/ja/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_Mの意味</a>を参照してください。',
          },
          {
            q: '異なるタスクでQ4_K_MとQ8_0を切り替えられますか？',
            a: '異なるモデルタグをプルして実行することでのみ可能です。Ollamaでは：<code>ollama pull llama3:8b-instruct-q4_K_M</code>と<code>ollama pull llama3:8b-instruct-q8_0</code>は別々のダウンロードです。<code>ollama run</code>でタグを指定して切り替えます。',
          },
          {
            q: 'Q4_K_Sはどうですか — Q4_K_Mの代わりに使う価値はありますか？',
            a: 'Q4_K_SはQ4_K_Mより0.22 GiB小さく（Llama 3.1 8Bで4.36対4.58 GiB）、パープレキシティは高くなります（Llama 3 8B、重要度行列なしで6.50対6.41）。Q4_K_Mが収まらない場合にのみQ4_K_Sを使用してください。それ以外はQ4_K_Mが良い選択です。',
          },
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/q4-k-m-vs-q8-0-overview-hero-zh.webp',
    title: 'Q4_K_M与Q8_0：该如何选择？',
    seoTitle: 'Q4_K_M对比Q8_0：2026年选择指南',
    metaDescription: '显存8 GB或更少用Q4_K_M，12 GB以上用Q8_0。在Llama 3 8B上，Q4_K_M为4.58 GiB，困惑度比f16高2.8%；Q8_0为7.96 GiB，仅高0.02%。',
    publishDate: '2026-05-18',
    dateModified: '2026-11-06',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    leadAnswerBlock: '**Q4_K_M与Q8_0是llama.cpp的量化格式。在Llama 3 8B上，Q8_0的困惑度（perplexity）与f16基本持平（+0.02%），Q4_K_M的困惑度比f16高2.8%，但文件仅4.58 GiB。**',
    quickAnswerTop: {
      zh: {
        question: 'Q4_K_M和Q8_0：该选哪个？',
        answer: '显存为8 GB或更少时使用Q4_K_M，12 GB以上时使用Q8_0。在Llama 3 8B上，Q4_K_M为4.58 GiB，Q8_0为7.96 GiB；Q8_0更接近完整精度。',
        bullets: [
          'Q4_K_M：Llama 3.1 8B为4.58 GiB，含4k KV缓存约5.1 GiB（计算值）',
          'Q8_0：Llama 3.1 8B为7.95 GiB，含4k KV缓存约8.5 GiB（计算值）',
          'Llama 3 8B相对f16的困惑度：Q4_K_M +2.8%，Q8_0 +0.02%（llama.cpp，计算值）',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '显存8 GB或更少：使用Q4_K_M——其8B文件为4.58 GiB，而Q8_0（7.95 GiB）加上KV缓存后就放不下了',
          '显存12 GB以上：想要接近f16的输出时Q8_0值得选，但速度更慢：llama.cpp quantize README中Llama 3.1 8B为50.93对71.93 tokens/秒',
          '对于大多数日常使用Ollama的用户，Q4_K_M是正确的选择',
        ],
      },
      body1: {
        title: '快速结论',
        content: [
          '<strong>在Llama 3 8B上，按困惑度衡量Q8_0与f16几乎相同，而Q4_K_M略有上升。</strong>llama.cpp在wikitext上的困惑度测试中，f16为6.2332，Q8_0为6.2343，Q4_K_M（无重要性矩阵）为6.4071，即分别高出0.02%和2.8%（计算值；<a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp perplexity README</a>）。困惑度是语言建模指标，不是任务基准，因此无法说明某个具体的聊天、编程或摘要任务会变化多少。',
          'Q4_K_M是常用默认选项，因为Llama 3.1 8B的文件为4.58 GiB而非7.95 GiB，并且在该测试中仍接近f16。内存不是限制时选择Q8_0。我们没有自行测量任务质量；如果某项任务对你很重要，请用两种量化分别试一下。',
          '如果用Q4_K_M时结果不理想，模型大小和提示词结构很可能是最先该检查的地方：llama.cpp实测的与f16的困惑度差距很小。',
        ],
      },
      body2: {
        title: '并排对比',
        content: [
          '该表使用<a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp quantize README</a>中Llama 3.1 8B的文件大小、计算得出的KV缓存（32层、8个键值头、头维度128、f16下4,096个token为0.5 GiB），以及llama.cpp perplexity README中Llama 3 8B的困惑度。两种格式都可与Ollama、LM Studio和llama.cpp配合使用，无需特殊配置。',
          '关于Q4_K_M的含义和k-quant压缩原理，请参阅<a href="/zh/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M详解指南</a>。完整量化参考请查看<a href="/zh/local-llms/quantization-levels-comparison" class="text-primary hover:underline">量化级别比较</a>。',
          '<strong>上述来源均未测试长文档回忆、多步数学或长代码生成，因此本页对这些场景不作断言。</strong>Q8_0的困惑度低于Q4_K_M，所以如果内存足够，按该指标它是风险更低的选择；对于小误差也很重要的任务，请两者都试一下。回顾请见<a href="/zh/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M的含义</a>。',
        ],
        columns: ['指标', 'Q4_K_M', 'Q8_0'],
        rows: [
          { '指标': '文件大小（Llama 3.1 8B）', 'Q4_K_M': '4.58 GiB', 'Q8_0': '7.95 GiB' },
          { '指标': '含4k KV缓存的显存（计算值，不含运行时开销）', 'Q4_K_M': '约5.1 GiB', 'Q8_0': '约8.5 GiB' },
          { '指标': '困惑度，Llama 3 8B（f16：6.23）', 'Q4_K_M': '6.41（+2.8%）', 'Q8_0': '6.23（+0.02%）' },
          { '指标': 'Tokens/秒，Llama 3.1 8B（README）', 'Q4_K_M': '71.93', 'Q8_0': '50.93' },
          { '指标': '最适合', 'Q4_K_M': '6–8 GB显存', 'Q8_0': '12+ GB显存' },
        ],
      },
      faq: {
        id: 'faq',
        title: '关于Q4_K_M与Q8_0的常见问题',
        faqs: [
          {
            q: 'Q8_0明显优于Q4_K_M吗？',
            a: '可能，但这些来源并未显示差异出现在哪里。Q8_0的量化误差更小：在Llama 3 8B上相对f16的困惑度为+0.02%，而Q4_K_M为+2.8%（llama.cpp，计算值）。困惑度并不直接衡量聊天、编程或摘要的质量，请在自己的任务上试用两者。',
          },
          {
            q: 'Q8_0比Q4_K_M快吗？',
            a: '不。Q8_0更大，每个token需要更多内存带宽。llama.cpp quantize README给出Llama 3.1 8B上Q4_K_M为71.93 tokens/秒，Q8_0为50.93 tokens/秒（速度取决于硬件）。根本原因请见<a href="/zh/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M的含义</a>。',
          },
          {
            q: '我能在不同任务间切换Q4_K_M和Q8_0吗？',
            a: '只能通过拉取和运行不同的模型标签来实现。在Ollama中：<code>ollama pull llama3:8b-instruct-q4_K_M</code>和<code>ollama pull llama3:8b-instruct-q8_0</code>是独立的下载。通过在<code>ollama run</code>中指定标签来切换。',
          },
          {
            q: 'Q4_K_S怎么样——值得用它代替Q4_K_M吗？',
            a: 'Q4_K_S比Q4_K_M小0.22 GiB（Llama 3.1 8B上为4.36对4.58 GiB），困惑度更高（Llama 3 8B、无重要性矩阵时为6.50对6.41）。只有在Q4_K_M放不下时才使用Q4_K_S；否则Q4_K_M是更好的选择。',
          },
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/q4-k-m-vs-q8-0-overview-hero-pt.webp',
    title: 'Q4_K_M vs Q8_0: qual escolher?',
    seoTitle: 'Q4_K_M vs Q8_0: qual? 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M com 8 GB de VRAM ou menos, Q8_0 com 12+ GB. No Llama 3 8B, Q4_K_M tem 4,58 GiB (+2,8% de perplexidade vs f16); Q8_0 tem 7,96 GiB (+0,02%).',
    publishDate: '2026-05-18',
    dateModified: '2026-11-06',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    leadAnswerBlock: '**Q4_K_M e Q8_0 são dois formatos de quantização do llama.cpp: no Llama 3 8B, o Q8_0 iguala o f16 em perplexidade (+0,02%), e o Q4_K_M soma +2,8%, mas usa um arquivo de 4,58 GiB em vez de 7,96 GiB (Llama 3.1 8B: 7,95 GiB).** A escolha depende sobretudo da VRAM.',
    quickAnswerTop: {
      pt: {
        question: 'Q4_K_M vs Q8_0: qual escolher?',
        answer: 'Use Q4_K_M com 8 GB de VRAM ou menos e Q8_0 com 12+ GB. No Llama 3 8B, Q4_K_M tem 4,58 GiB e Q8_0 tem 7,96 GiB; Q8_0 fica mais perto da precisão total.',
        bullets: [
          'Q4_K_M: 4,58 GiB para o Llama 3.1 8B, cerca de 5,1 GiB com cache KV de 4k (calculado)',
          'Q8_0: 7,95 GiB para o Llama 3.1 8B, cerca de 8,5 GiB com cache KV de 4k (calculado)',
          'Perplexidade vs f16 no Llama 3 8B: Q4_K_M +2,8%, Q8_0 +0,02% (llama.cpp, calculado)',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '8 GB de VRAM ou menos: use Q4_K_M — o arquivo 8B tem 4,58 GiB, enquanto o Q8_0 (7,95 GiB) já não cabe com o cache KV',
          '12+ GB de VRAM: Q8_0 vale a pena para saída próxima de f16, mas é mais lento: 50,93 contra 71,93 tokens/s no Llama 3.1 8B, segundo o README do quantize do llama.cpp',
          'Para a maioria dos usuários que usam Ollama diariamente, Q4_K_M é a escolha certa',
        ],
      },
      body1: {
        title: 'O veredicto rápido',
        content: [
          '<strong>No Llama 3 8B, o Q8_0 é praticamente idêntico ao f16 em perplexidade, e o Q4_K_M acrescenta um pequeno aumento.</strong> O teste de perplexidade do llama.cpp em wikitext dá 6,2332 para f16, 6,2343 para Q8_0 e 6,4071 para Q4_K_M sem matriz de importância: +0,02% e +2,8% (calculado; <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">README de perplexity do llama.cpp</a>). Perplexidade é uma pontuação de modelagem de linguagem, não um benchmark de tarefas; por isso não mostra quanto muda uma tarefa específica de chat, código ou resumo.',
          'Q4_K_M é o padrão usual porque o arquivo do Llama 3.1 8B tem 4,58 GiB em vez de 7,95 GiB e fica próximo do f16 nesse teste. Escolha Q8_0 quando a memória não for o limite. Não medimos a qualidade por tarefa por conta própria; se uma tarefa é importante para você, teste as duas quantizações nela.',
          'Se os resultados parecem ruins com Q4_K_M, o tamanho do modelo e a estrutura do prompt são um provável primeiro ponto a verificar: a diferença de perplexidade medida pelo llama.cpp em relação ao f16 é pequena.',
        ],
      },
      body2: {
        title: 'Comparação lado a lado',
        content: [
          'A tabela usa tamanhos de arquivo do Llama 3.1 8B do <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md" class="text-primary hover:underline" rel="noopener noreferrer">README do quantize do llama.cpp</a>, um cache KV calculado (32 camadas, 8 cabeças chave-valor, dimensão de cabeça 128, f16: 0,5 GiB para 4.096 tokens) e a perplexidade do Llama 3 8B do README de perplexity do llama.cpp. Ambos os formatos funcionam com Ollama, LM Studio e llama.cpp sem nenhuma configuração especial.',
          'Para contexto sobre o que Q4_K_M significa e como funciona a compressão k-quant, veja o <a href="/pt/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">guia explicativo do Q4_K_M</a>. Para a referência completa de quantização, veja <a href="/pt/local-llms/quantization-levels-comparison" class="text-primary hover:underline">níveis de quantização comparados</a>.',
          '<strong>Nenhuma das fontes acima testa recuperação em documentos longos, matemática de várias etapas ou geração de código longo; por isso esta página não afirma nada sobre isso.</strong> Q8_0 tem perplexidade menor que Q4_K_M; se você tem a memória, é a escolha de menor risco por essa métrica. Teste os dois em tarefas em que pequenos erros importam. Para relembrar, veja <a href="/pt/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">o que Q4_K_M significa</a>.',
        ],
        columns: ['Métrica', 'Q4_K_M', 'Q8_0'],
        rows: [
          { 'Métrica': 'Tamanho do arquivo (Llama 3.1 8B)', 'Q4_K_M': '4,58 GiB', 'Q8_0': '7,95 GiB' },
          { 'Métrica': 'VRAM com cache KV de 4k (calculado, sem overhead de execução)', 'Q4_K_M': '~5,1 GiB', 'Q8_0': '~8,5 GiB' },
          { 'Métrica': 'Perplexidade, Llama 3 8B (f16: 6,23)', 'Q4_K_M': '6,41 (+2,8%)', 'Q8_0': '6,23 (+0,02%)' },
          { 'Métrica': 'Tokens/s, Llama 3.1 8B (README)', 'Q4_K_M': '71,93', 'Q8_0': '50,93' },
          { 'Métrica': 'Melhor para', 'Q4_K_M': '6–8 GB VRAM', 'Q8_0': '12+ GB VRAM' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre Q4_K_M vs Q8_0',
        faqs: [
          {
            q: 'Q8_0 é notavelmente melhor que Q4_K_M?',
            a: 'Possivelmente, mas essas fontes não mostram onde. Q8_0 tem menos erro de quantização: +0,02% de perplexidade vs f16 no Llama 3 8B, contra +2,8% do Q4_K_M (llama.cpp, calculado). Perplexidade não mede diretamente a qualidade em chat, código ou resumo; teste os dois na sua própria tarefa.',
          },
          {
            q: 'Q8_0 é mais rápido que Q4_K_M?',
            a: 'Não. Q8_0 é maior e exige mais largura de banda de memória por token. O README do quantize do llama.cpp lista 71,93 tokens/s para Q4_K_M e 50,93 tokens/s para Q8_0 no Llama 3.1 8B (a velocidade depende do hardware). Veja <a href="/pt/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">o que Q4_K_M significa</a> para o motivo de fundo.',
          },
          {
            q: 'Posso alternar entre Q4_K_M e Q8_0 para diferentes tarefas?',
            a: 'Apenas baixando e executando diferentes tags de modelo. No Ollama: <code>ollama pull llama3:8b-instruct-q4_K_M</code> e <code>ollama pull llama3:8b-instruct-q8_0</code> são downloads separados. Você alterna especificando a tag em <code>ollama run</code>.',
          },
          {
            q: 'E Q4_K_S — vale a pena usar em vez de Q4_K_M?',
            a: 'Q4_K_S é 0,22 GiB menor que Q4_K_M (4,36 contra 4,58 GiB no Llama 3.1 8B) e tem perplexidade maior (6,50 contra 6,41 no Llama 3 8B sem matriz de importância). Use Q4_K_S apenas se Q4_K_M não couber; caso contrário, Q4_K_M é a melhor escolha.',
          },
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/q4-k-m-vs-q8-0-overview-hero-es.webp',
    title: 'Q4_K_M vs Q8_0: ¿cuál elegir?',
    seoTitle: 'Q4_K_M vs Q8_0: ¿cuál? 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M con 8 GB de VRAM o menos, Q8_0 con 12+ GB. En Llama 3 8B, Q4_K_M ocupa 4,58 GiB (+2,8 % de perplejidad vs f16); Q8_0 ocupa 7,96 GiB (+0,02 %).',
    publishDate: '2026-05-18',
    dateModified: '2026-11-06',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    leadAnswerBlock: '**Q4_K_M y Q8_0 son dos formatos de cuantización de llama.cpp: en Llama 3 8B, Q8_0 es prácticamente idéntico a f16 en perplejidad (+0,02 %), mientras que Q4_K_M suma +2,8 % pero ocupa un archivo de 4,58 GiB en lugar de 7,96 GiB (Llama 3.1 8B: 7,95 GiB).**',
    quickAnswerTop: {
      es: {
        question: 'Q4_K_M vs Q8_0: ¿cuál elegir?',
        answer: 'Usa Q4_K_M con 8 GB de VRAM o menos y Q8_0 con 12+ GB. En Llama 3 8B, Q4_K_M ocupa 4,58 GiB y Q8_0 7,96 GiB; Q8_0 queda más cerca de la precisión completa.',
        bullets: [
          'Q4_K_M: 4,58 GiB para Llama 3.1 8B, unos 5,1 GiB con caché KV de 4k (calculado)',
          'Q8_0: 7,95 GiB para Llama 3.1 8B, unos 8,5 GiB con caché KV de 4k (calculado)',
          'Perplejidad vs f16 en Llama 3 8B: Q4_K_M +2,8 %, Q8_0 +0,02 % (llama.cpp, calculado)',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '8 GB de VRAM o menos: usa Q4_K_M — su archivo 8B ocupa 4,58 GiB, mientras que Q8_0 (7,95 GiB) ya no cabe al añadir la caché KV',
          '12+ GB de VRAM: Q8_0 vale la pena para una salida cercana a f16, pero es más lento: 50,93 frente a 71,93 tokens/s en Llama 3.1 8B según el README de quantize de llama.cpp',
          'Para la mayoría de usuarios que usan Ollama a diario, Q4_K_M es la elección correcta',
        ],
      },
      body1: {
        title: 'El veredicto rápido',
        content: [
          '<strong>En Llama 3 8B, Q8_0 es prácticamente idéntico a f16 en perplejidad, y Q4_K_M añade un pequeño aumento.</strong> La prueba de perplejidad de llama.cpp en wikitext da 6,2332 para f16, 6,2343 para Q8_0 y 6,4071 para Q4_K_M sin matriz de importancia: +0,02 % y +2,8 % (calculado; <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">README de perplexity de llama.cpp</a>). La perplejidad es una puntuación de modelado de lenguaje, no un benchmark de tareas, así que no indica cuánto cambia una tarea concreta de chat, programación o resumen.',
          'Q4_K_M es el valor predeterminado habitual porque el archivo de Llama 3.1 8B ocupa 4,58 GiB en lugar de 7,95 GiB y se mantiene cerca de f16 en esa prueba. Elige Q8_0 cuando la memoria no sea el límite. No hemos medido la calidad por tarea por nuestra cuenta; si una tarea te importa, prueba ambas cuantizaciones con ella.',
          'Si los resultados con Q4_K_M parecen malos, el tamaño del modelo y la estructura del prompt son un probable primer punto a revisar: la diferencia de perplejidad medida por llama.cpp frente a f16 es pequeña.',
        ],
      },
      body2: {
        title: 'Comparación lado a lado',
        content: [
          'La tabla usa tamaños de archivo de Llama 3.1 8B del <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md" class="text-primary hover:underline" rel="noopener noreferrer">README de quantize de llama.cpp</a>, una caché KV calculada (32 capas, 8 cabezas clave-valor, dimensión de cabeza 128, f16: 0,5 GiB para 4.096 tokens) y la perplejidad de Llama 3 8B del README de perplexity de llama.cpp. Ambos formatos funcionan con Ollama, LM Studio y llama.cpp sin configuración especial.',
          'Para entender Q4_K_M y cómo funciona la compresión k-quant, consulta la <a href="/es/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">guía explicativa de Q4_K_M</a>. Para la referencia completa de cuantización, consulta <a href="/es/local-llms/quantization-levels-comparison" class="text-primary hover:underline">niveles de cuantización comparados</a>.',
          '<strong>Ninguna de las fuentes anteriores prueba la recuperación en documentos largos, las matemáticas de varios pasos ni la generación de código largo; por eso esta página no afirma nada al respecto.</strong> Q8_0 tiene menor perplejidad que Q4_K_M; si tienes la memoria, es la opción de menor riesgo según esa métrica. Prueba ambos en tareas en las que importan los errores pequeños. Para repasar, consulta <a href="/es/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">qué significa Q4_K_M</a>.',
        ],
        columns: ['Métrica', 'Q4_K_M', 'Q8_0'],
        rows: [
          { 'Métrica': 'Tamaño de archivo (Llama 3.1 8B)', 'Q4_K_M': '4,58 GiB', 'Q8_0': '7,95 GiB' },
          { 'Métrica': 'VRAM con caché KV de 4k (calculado, sin sobrecarga de ejecución)', 'Q4_K_M': '~5,1 GiB', 'Q8_0': '~8,5 GiB' },
          { 'Métrica': 'Perplejidad, Llama 3 8B (f16: 6,23)', 'Q4_K_M': '6,41 (+2,8 %)', 'Q8_0': '6,23 (+0,02 %)' },
          { 'Métrica': 'Tokens/s, Llama 3.1 8B (README)', 'Q4_K_M': '71,93', 'Q8_0': '50,93' },
          { 'Métrica': 'Mejor para', 'Q4_K_M': '6–8 GB VRAM', 'Q8_0': '12+ GB VRAM' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre Q4_K_M vs Q8_0',
        faqs: [
          {
            q: '¿Es Q8_0 notablemente mejor que Q4_K_M?',
            a: 'Posiblemente, pero estas fuentes no muestran dónde. Q8_0 tiene menos error de cuantización: +0,02 % de perplejidad vs f16 en Llama 3 8B, frente a +2,8 % de Q4_K_M (llama.cpp, calculado). La perplejidad no mide directamente la calidad en chat, programación o resumen; prueba ambos en tu propia tarea.',
          },
          {
            q: '¿Es Q8_0 más rápido que Q4_K_M?',
            a: 'No. Q8_0 es más grande y necesita más ancho de banda de memoria por token. El README de quantize de llama.cpp indica 71,93 tokens/s para Q4_K_M y 50,93 tokens/s para Q8_0 en Llama 3.1 8B (la velocidad depende del hardware). Consulta <a href="/es/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">qué significa Q4_K_M</a> para ver la razón de fondo.',
          },
          {
            q: '¿Puedo alternar entre Q4_K_M y Q8_0 para diferentes tareas?',
            a: 'Solo descargando y ejecutando diferentes etiquetas de modelo. En Ollama: <code>ollama pull llama3:8b-instruct-q4_K_M</code> y <code>ollama pull llama3:8b-instruct-q8_0</code> son descargas separadas. Cambias especificando la etiqueta en <code>ollama run</code>.',
          },
          {
            q: '¿Y Q4_K_S — vale la pena usarlo en lugar de Q4_K_M?',
            a: 'Q4_K_S es 0,22 GiB más pequeño que Q4_K_M (4,36 frente a 4,58 GiB en Llama 3.1 8B) y tiene mayor perplejidad (6,50 frente a 6,41 en Llama 3 8B sin matriz de importancia). Usa Q4_K_S solo si Q4_K_M no cabe; si no, Q4_K_M es la mejor opción.',
          },
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/q4-k-m-vs-q8-0-overview-hero-ar.webp',
    title: '⁨Q4⁩_⁨K⁩_⁨M⁩ مقابل ⁨Q8⁩_⁨0⁩: أيهما تختار؟',
    seoTitle: '⁨Q4⁩_⁨K⁩_⁨M⁩ مقابل ⁨Q8⁩_⁨0⁩ ⁨2026⁩: أيهما تختار؟',
    metaDescription: 'استخدم Q4_K_M مع 8 GB VRAM أو أقل، وQ8_0 مع 12+ GB. في Llama 3 8B حجم Q4_K_M هو 4.58 GiB (حيرة أعلى بـ 2.8% من f16) وحجم Q8_0 هو 7.96 GiB (+0.02%).',
    publishDate: '2026-05-18',
    dateModified: '2026-11-06',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    leadAnswerBlock: '**Q4_K_M وQ8_0 صيغتان للتكميم في llama.cpp: في Llama 3 8B يساوي Q8_0 قيمة perplexity الخاصة بـ f16 تقريبًا (+0.02%)، بينما يزيد Q4_K_M بنسبة +2.8% لكن حجم ملفه 4.58 GiB بدلًا من 7.96 GiB (Llama 3.1 8B: ‏7.95 GiB).** ويعتمد الاختيار أساسًا على VRAM لديك.',
    quickAnswerTop: {
      ar: {
        question: 'Q4_K_M مقابل Q8_0: أيهما تختار؟',
        answer: 'استخدم Q4_K_M مع 8 GB من VRAM أو أقل، وQ8_0 مع 12+ GB. في Llama 3 8B حجم Q4_K_M هو 4.58 GiB وحجم Q8_0 هو 7.96 GiB، ويبقى Q8_0 أقرب إلى الدقة الكاملة.',
        bullets: [
          'Q4_K_M: ‏4.58 GiB لنموذج Llama 3.1 8B، وحوالي 5.1 GiB مع ذاكرة KV بسياق 4k (محسوب)',
          'Q8_0: ‏7.95 GiB لنموذج Llama 3.1 8B، وحوالي 8.5 GiB مع ذاكرة KV بسياق 4k (محسوب)',
          'الحيرة (perplexity) نسبةً إلى f16 في Llama 3 8B: ‏Q4_K_M ‏+2.8%، وQ8_0 ‏+0.02% (llama.cpp، محسوب)',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '8 GB VRAM أو أقل: استخدم Q4_K_M — حجم ملف 8B فيه 4.58 GiB، بينما لا يتسع Q8_0 (7.95 GiB) بعد إضافة ذاكرة KV',
          '12+ GB VRAM: يستحق Q8_0 العناء للحصول على مخرجات قريبة من f16، لكنه أبطأ: 50.93 مقابل 71.93 رمزًا/ثانية لـ Llama 3.1 8B في ملف README الخاص بـ quantize في llama.cpp',
          'لمعظم المستخدمين الذين يستخدمون Ollama يوميًا، Q4_K_M هو الاختيار الصحيح',
        ],
      },
      body1: {
        title: 'الحكم السريع',
        content: [
          '<strong>في Llama 3 8B يكاد Q8_0 يطابق f16 من حيث الحيرة (perplexity)، ويضيف Q4_K_M زيادة صغيرة.</strong> يعطي اختبار الحيرة في llama.cpp على wikitext القيمة 6.2332 لـ f16 و6.2343 لـ Q8_0 و6.4071 لـ Q4_K_M دون مصفوفة أهمية، أي +0.02% و+2.8% (محسوب؛ <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">ملف README الخاص بـ perplexity في llama.cpp</a>). الحيرة مقياس لنمذجة اللغة وليست اختبار أداء للمهام، لذا لا تُظهر مقدار تغيّر مهمة محددة في الدردشة أو البرمجة أو التلخيص.',
          'Q4_K_M هو الخيار الافتراضي المعتاد لأن ملف Llama 3.1 8B يبلغ 4.58 GiB بدلًا من 7.95 GiB ويبقى قريبًا من f16 في هذا الاختبار. اختر Q8_0 عندما لا تكون الذاكرة هي القيد. لم نقِس جودة المهام بأنفسنا؛ إذا كانت مهمة معينة تهمك، فجرّب التكميمين عليها.',
          'إذا بدت نتائجك سيئة مع Q4_K_M، فمن المرجح أن يكون أول ما يُفحص هو حجم النموذج وبنية الـ prompt: فارق الحيرة الذي قاسه llama.cpp عن f16 صغير.',
        ],
      },
      body2: {
        title: 'مقارنة جانبًا إلى جانب',
        content: [
          'يستخدم الجدول أحجام ملفات Llama 3.1 8B من <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md" class="text-primary hover:underline" rel="noopener noreferrer">ملف README الخاص بـ quantize في llama.cpp</a>، وذاكرة KV محسوبة (32 طبقة، و8 رؤوس مفتاح-قيمة، وبُعد رأس 128، بدقة f16: ‏0.5 GiB لكل 4,096 رمز)، وحيرة Llama 3 8B من ملف README الخاص بـ perplexity في llama.cpp. تعمل الصيغتان مع Ollama وLM Studio وllama.cpp دون أي إعداد خاص.',
          'لفهم ماهية Q4_K_M وكيف تعمل ضغط k-quant، راجع <a href="/ar/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">دليل شرح Q4_K_M</a>. للمرجع الكامل حول الكميّة، راجع <a href="/ar/local-llms/quantization-levels-comparison" class="text-primary hover:underline">مستويات الكميّة مقارنةً</a>.',
          '<strong>لا يختبر أي من المصادر أعلاه استرجاع المستندات الطويلة أو الرياضيات متعددة الخطوات أو توليد الشيفرة الطويلة، لذلك لا تقدّم هذه الصفحة أي ادعاء بشأنها.</strong> للحيرة في Q8_0 قيمة أقل منها في Q4_K_M، فإن توفرت لديك الذاكرة فهو الخيار الأقل مخاطرة وفق هذا المقياس. جرّب الاثنين في المهام التي تهمّ فيها الأخطاء الصغيرة. للمراجعة، راجع <a href="/ar/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">معنى Q4_K_M</a>.',
        ],
        columns: ['المقياس', 'Q4_K_M', 'Q8_0'],
        rows: [
          { 'المقياس': 'حجم الملف (Llama 3.1 8B)', 'Q4_K_M': '4.58 GiB', 'Q8_0': '7.95 GiB' },
          { 'المقياس': 'VRAM مع ذاكرة KV بسياق 4k (محسوب، دون الحمل الإضافي لوقت التشغيل)', 'Q4_K_M': '~5.1 GiB', 'Q8_0': '~8.5 GiB' },
          { 'المقياس': 'الحيرة، Llama 3 8B (‏f16: ‏6.23)', 'Q4_K_M': '6.41 (+2.8%)', 'Q8_0': '6.23 (+0.02%)' },
          { 'المقياس': 'رمز/ثانية، Llama 3.1 8B (README)', 'Q4_K_M': '71.93', 'Q8_0': '50.93' },
          { 'المقياس': 'الأنسب لـ', 'Q4_K_M': '6–8 GB VRAM', 'Q8_0': '12+ GB VRAM' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول Q4_K_M مقابل Q8_0',
        faqs: [
          {
            q: 'هل يتفوق Q8_0 بشكل ملحوظ على Q4_K_M؟',
            a: 'ربما، لكن هذه المصادر لا تبيّن أين. يحمل Q8_0 خطأ تكميم أقل: حيرة أعلى بـ 0.02% فقط من f16 في Llama 3 8B مقابل 2.8% لـ Q4_K_M (llama.cpp، محسوب). لا تقيس الحيرة جودة الدردشة أو البرمجة أو التلخيص مباشرة، لذا جرّب الاثنين على مهمتك الخاصة.',
          },
          {
            q: 'هل Q8_0 أسرع من Q4_K_M؟',
            a: 'لا. Q8_0 أكبر حجمًا ويحتاج نطاقًا ترددّيًا أعلى للذاكرة لكل رمز. يذكر ملف README الخاص بـ quantize في llama.cpp القيمة 71.93 رمزًا/ثانية لـ Q4_K_M و50.93 رمزًا/ثانية لـ Q8_0 في Llama 3.1 8B (تعتمد السرعة على العتاد). راجع <a href="/ar/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">معنى Q4_K_M</a> لمعرفة السبب الأساسي.',
          },
          {
            q: 'هل يمكنني التبديل بين Q4_K_M و Q8_0 لمهام مختلفة؟',
            a: 'فقط بتنزيل وتشغيل وسوم نماذج مختلفة. في Ollama: <code>ollama pull llama3:8b-instruct-q4_K_M</code> و <code>ollama pull llama3:8b-instruct-q8_0</code> تنزيلان منفصلان. تتبادل بينهما بتحديد الوسم في <code>ollama run</code>.',
          },
          {
            q: 'وماذا عن Q4_K_S — هل يستحق استخدامه بدلًا من Q4_K_M؟',
            a: 'Q4_K_S أصغر من Q4_K_M بمقدار 0.22 GiB (4.36 مقابل 4.58 GiB في Llama 3.1 8B) وحيرته أعلى (6.50 مقابل 6.41 في Llama 3 8B دون مصفوفة أهمية). استخدم Q4_K_S فقط إذا لم يتسع Q4_K_M؛ وإلا فـ Q4_K_M هو الخيار الأفضل.',
          },
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/q4-k-m-vs-q8-0-overview-hero-ko.webp',
    title: 'Q4_K_M vs Q8_0: 어느 것을 선택해야 합니까?',
    seoTitle: 'Q4_K_M vs Q8_0: 2026년 선택 가이드',
    metaDescription: 'VRAM 8 GB 이하는 Q4_K_M, 12 GB 이상은 Q8_0. Llama 3 8B: Q4_K_M 4.58 GiB(퍼플렉시티 +2.8%), Q8_0 7.96 GiB(+0.02%).',
    publishDate: '2026-05-18',
    dateModified: '2026-11-06',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    leadAnswerBlock: '**Q4_K_M과 Q8_0은 llama.cpp의 양자화 형식입니다. Llama 3 8B에서 Q8_0의 perplexity는 f16과 거의 같고(+0.02%), Q4_K_M은 +2.8%이며 파일은 4.58 GiB입니다.**',
    quickAnswerTop: {
      ko: {
        question: 'Q4_K_M vs Q8_0: 어느 것을 선택해야 합니까?',
        answer: 'VRAM이 8 GB 이하이면 Q4_K_M을, 12 GB 이상이면 Q8_0을 사용하십시오. Llama 3 8B에서 Q4_K_M은 4.58 GiB, Q8_0은 7.96 GiB이며 Q8_0이 완전 정밀도에 더 가깝습니다.',
        bullets: [
          'Q4_K_M: Llama 3.1 8B 기준 4.58 GiB, 4k KV 캐시 포함 약 5.1 GiB (계산값)',
          'Q8_0: Llama 3.1 8B 기준 7.95 GiB, 4k KV 캐시 포함 약 8.5 GiB (계산값)',
          'Llama 3 8B의 f16 대비 퍼플렉시티: Q4_K_M +2.8%, Q8_0 +0.02% (llama.cpp, 계산값)',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'VRAM 8 GB 이하: Q4_K_M을 사용하십시오 — 8B 파일이 4.58 GiB인 반면 Q8_0(7.95 GiB)은 KV 캐시를 더하면 들어가지 않습니다',
          'VRAM 12 GB 이상: f16에 가까운 출력을 원하면 Q8_0이 가치가 있지만 더 느립니다. llama.cpp quantize README에서 Llama 3.1 8B는 50.93 대 71.93 tokens/s입니다',
          '매일 Ollama를 사용하는 대부분의 사용자에게 Q4_K_M이 올바른 선택입니다',
        ],
      },
      body1: {
        title: '빠른 결론',
        content: [
          '<strong>Llama 3 8B에서 퍼플렉시티 기준으로 Q8_0은 f16과 사실상 같고, Q4_K_M은 소폭 높아집니다.</strong> llama.cpp의 wikitext 퍼플렉시티 테스트에서 f16은 6.2332, Q8_0은 6.2343, Q4_K_M(중요도 행렬 없음)은 6.4071로, 각각 +0.02%와 +2.8%입니다(계산값, <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp perplexity README</a>). 퍼플렉시티는 언어 모델링 지표이지 작업 벤치마크가 아니므로, 특정 채팅·코딩·요약 작업이 얼마나 달라지는지는 보여주지 않습니다.',
          'Q4_K_M이 일반적인 기본값인 이유는 Llama 3.1 8B 파일이 7.95 GiB가 아니라 4.58 GiB이고, 이 테스트에서 f16에 가깝게 유지되기 때문입니다. 메모리가 제약이 아니라면 Q8_0을 선택하십시오. 작업 품질은 직접 측정하지 않았습니다. 중요한 작업이 있다면 두 양자화를 모두 그 작업에서 시험해 보십시오.',
          'Q4_K_M에서 결과가 이상하게 느껴지면 먼저 모델 크기와 프롬프트 구조를 확인해 볼 만합니다. llama.cpp가 측정한 f16과의 퍼플렉시티 차이는 작습니다.',
        ],
      },
      body2: {
        title: '나란히 비교',
        content: [
          '이 표는 <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp quantize README</a>의 Llama 3.1 8B 파일 크기, 계산한 KV 캐시(32개 레이어, 키-값 헤드 8개, 헤드 차원 128, f16에서 4,096토큰당 0.5 GiB), llama.cpp perplexity README의 Llama 3 8B 퍼플렉시티를 사용합니다. 두 형식 모두 특별한 설정 없이 Ollama, LM Studio, llama.cpp에서 작동합니다.',
          'Q4_K_M의 의미와 k-quant 압축이 어떻게 작동하는지 이해하려면 <a href="/ko/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M 설명 가이드</a>를 참조하십시오. 전체 양자화 참조 자료는 <a href="/ko/local-llms/quantization-levels-comparison" class="text-primary hover:underline">양자화 레벨 비교</a>를 참조하십시오.',
          '<strong>위 출처 중 어느 것도 긴 문서 회상, 다단계 수학, 긴 코드 생성을 시험하지 않았으므로 이 페이지는 그에 대해 주장하지 않습니다.</strong> Q8_0은 Q4_K_M보다 퍼플렉시티가 낮으므로, 메모리가 있다면 그 지표상 위험이 더 낮은 선택입니다. 작은 오류가 중요한 작업에서는 둘 다 시험해 보십시오. 복습은 <a href="/ko/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M의 의미</a>를 참조하십시오.',
        ],
        columns: ['지표', 'Q4_K_M', 'Q8_0'],
        rows: [
          { '지표': '파일 크기 (Llama 3.1 8B)', 'Q4_K_M': '4.58 GiB', 'Q8_0': '7.95 GiB' },
          { '지표': '4k KV 캐시 포함 VRAM (계산값, 런타임 오버헤드 제외)', 'Q4_K_M': '약 5.1 GiB', 'Q8_0': '약 8.5 GiB' },
          { '지표': '퍼플렉시티, Llama 3 8B (f16: 6.23)', 'Q4_K_M': '6.41 (+2.8%)', 'Q8_0': '6.23 (+0.02%)' },
          { '지표': 'Tokens/s, Llama 3.1 8B (README)', 'Q4_K_M': '71.93', 'Q8_0': '50.93' },
          { '지표': '최적 VRAM', 'Q4_K_M': '6–8 GB VRAM', 'Q8_0': '12+ GB VRAM' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Q4_K_M은 VRAM이 8 GB 이하인 환경에서 파일 크기를 4.58 GiB(Llama 3.1 8B)로 줄여 주는 기본 양자화 형식이며, Llama 3 8B에서 f16 대비 퍼플렉시티는 +2.8%입니다.',
          },
          {
            type: 'plain-terms',
            text: 'Q4_K_M은 Q8_0(7.95 GiB)보다 작은 파일(4.58 GiB)을 사용하지만 퍼플렉시티가 더 높고(6.41 대 6.23), 일상적인 작업에서 그 차이가 체감되는지는 이 출처들로는 확인되지 않습니다.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Q4_K_M vs Q8_0에 관한 빠른 답변',
        faqs: [
          {
            q: 'Q8_0은 Q4_K_M보다 눈에 띄게 우수합니까?',
            a: '가능성은 있지만 이 출처들로는 어디서 차이가 나는지 알 수 없습니다. Q8_0은 양자화 오류가 더 적어, Llama 3 8B에서 f16 대비 퍼플렉시티가 +0.02%이고 Q4_K_M은 +2.8%입니다(llama.cpp, 계산값). 퍼플렉시티는 채팅·코딩·요약 품질을 직접 측정하지 않으므로 직접 하는 작업에서 둘 다 시험해 보십시오.',
          },
          {
            q: 'Q8_0이 Q4_K_M보다 빠릅니까?',
            a: '아닙니다. Q8_0은 더 크고 토큰당 더 많은 메모리 대역폭을 필요로 합니다. llama.cpp quantize README는 Llama 3.1 8B에서 Q4_K_M 71.93 tokens/s, Q8_0 50.93 tokens/s로 기재합니다(속도는 하드웨어에 따라 다릅니다). 근본적인 이유는 <a href="/ko/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M의 의미</a>를 참조하십시오.',
          },
          {
            q: '작업에 따라 Q4_K_M과 Q8_0을 전환할 수 있습니까?',
            a: '다른 모델 태그를 다운로드하여 실행하면 가능합니다. Ollama에서는 <code>ollama pull llama3:8b-instruct-q4_K_M</code>과 <code>ollama pull llama3:8b-instruct-q8_0</code>이 별도의 다운로드입니다. <code>ollama run</code>에서 태그를 지정하여 전환합니다.',
          },
          {
            q: 'Q4_K_S는 어떻습니까? Q4_K_M 대신 사용할 가치가 있습니까?',
            a: 'Q4_K_S는 Q4_K_M보다 0.22 GiB 작고(Llama 3.1 8B에서 4.36 대 4.58 GiB) 퍼플렉시티가 더 높습니다(Llama 3 8B, 중요도 행렬 없음에서 6.50 대 6.41). Q4_K_M이 들어가지 않을 때만 Q4_K_S를 사용하십시오. 그 외에는 Q4_K_M이 더 나은 선택입니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 가이드',
        items: [
          '[Q4_K_M 양자화란 무엇입니까?](/ko/prompt-bites/what-is-q4-k-m-quantization)',
          '[로컬 LLM에 필요한 VRAM 용량](/ko/local-llms/how-much-vram-local-llm)',
          '[양자화 레벨 비교](/ko/local-llms/quantization-levels-comparison)',
          '[6GB VRAM을 위한 최적의 양자화](/ko/prompt-bites/best-quantization-6gb-vram)',
        ],
      },
    },
  },
}

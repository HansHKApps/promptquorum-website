import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Ollama',
    heroImage: '/images/which-ollama-models-support-vision-overview-hero-en.webp',
    title: 'Which Ollama Models Support Vision?',
    dateModified: '2026-09-02',
    seoTitle: 'Ollama Vision Models 2026: Qwen3-VL, Gemma 4, LLaVA',
    metaDescription: "Ollama's vision models in 2026: Qwen3-VL and Gemma 4 lead, LLaVA is the safe fallback. Llama 3.2 Vision is broken (mllama error) — the fix and VRAM specs.",
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    current_models_mentioned: ['Qwen3-VL', 'Gemma 4', 'LLaVA', 'Llama 3.2 Vision', 'Qwen2.5-VL'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers using vision models with Ollama',
    parentArticle: '/local-llms/multimodal-local-llms',
    siblingBites: ['can-you-run-qwen3-on-ollama', 'ollama-128k-context-models'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Which Ollama models support vision?',
        answer: "Ollama's best vision models in 2026 are Qwen3-VL and Gemma 4, both natively multimodal. LLaVA remains the safest fallback for broad compatibility. Llama 3.2 Vision is currently broken on Ollama (\"unknown model architecture: mllama\") — use Qwen3-VL or Gemma 4 instead.",
        bullets: [
          'qwen3-vl: strongest vision family, best for OCR, charts, and screenshots',
          'gemma4: vision built into every size, plus tool calling',
          'llava: safest fallback, broadest client compatibility',
          'llama3.2-vision: broken on Ollama v0.30.0+ ("unknown model architecture: mllama")',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Ollama's leading vision models as of September 2026 are Qwen3-VL and Gemma 4 — both replaced the earlier Qwen2.5-VL / Gemma 3 generation",
          'Llama 3.2 Vision is currently broken on Ollama v0.30.0 and later: it fails with "Error: unknown model architecture: mllama" because Ollama\'s llama.cpp-based engine has no mllama support',
          'LLaVA 7B remains the safest fallback (~7 GB VRAM, works on every Ollama version)',
          'Use Qwen3-VL for OCR, charts, and screenshots; use Gemma 4 when you need vision and tool calling in one model',
        ],
      },
      body1: {
        title: 'The Top Vision Models on Ollama',
        content: [
          "<strong>Ollama's vision lineup changed significantly in 2026: Qwen3-VL and Gemma 4 are now the strongest options, and Llama 3.2 Vision no longer loads on current Ollama versions.</strong> Each remaining model has a distinct strength and VRAM profile.",
          'Qwen3-VL is the strongest open vision-language family available on Ollama — it leads on OCR, charts, diagrams, and screenshot/UI understanding, and ranges from a 2B edge model up to a 235B mixture-of-experts variant. Gemma 4 builds native vision into every size (2B–31B) alongside tool calling, making it the best pick when one model needs to both see images and call tools. LLaVA remains the safest starting point for broad client compatibility. Qwen2.5-VL, the previous Qwen generation, still works and remains a valid lightweight pick if you already have it pulled.',
          'All vision models load an image encoder alongside the LLM weights. This encoder adds 1–3 GB of VRAM above what the base text-only model needs — plan for that overhead when checking your VRAM budget.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '<strong>Llama 3.2 Vision is currently broken on Ollama.</strong> Since Ollama v0.30.0 (May 2026) moved model loading onto llama.cpp, llama3.2-vision fails with <code>Error: unknown model architecture: "mllama"</code> — the mllama architecture was never added to llama.cpp. This is still unresolved as of Ollama v0.33.2 (August 2026). Use Qwen3-VL or Gemma 4 instead, or keep a pre-0.30.0 Ollama install if you specifically need Llama 3.2 Vision.',
          },
        ],
      },
      body2: {
        title: 'VRAM Requirements for Vision',
        content: [
          '<strong>Every vision model needs more VRAM than its text-only equivalent.</strong> A 7–8B vision model typically requires 7–9 GB VRAM, not the ~6 GB you would budget for a similarly sized text-only model.',
          "For OCR, charts, and document analysis, Qwen3-VL 8B is the most VRAM-efficient strong option. For vision plus tool calling in one model, Gemma 4's 12B or 26B-A4B MoE variants fit 8–14 GB. For the full guide on multimodal local models and use-case matching, see the <a href=\"/local-llms/multimodal-local-llms\" class=\"text-primary hover:underline\">multimodal local LLMs guide</a>.",
        ],
        columns: ['Model', 'VRAM at Q4', 'Image Capability'],
        rows: [
          { 'Model': 'LLaVA 7B', 'VRAM at Q4': '~7 GB', 'Image Capability': 'General image Q&A, broad compatibility' },
          { 'Model': 'Qwen3-VL 8B', 'VRAM at Q4': '~8 GB', 'Image Capability': 'OCR, charts, screenshots, multilingual' },
          { 'Model': 'Gemma 4 (12B)', 'VRAM at Q4': '~8 GB', 'Image Capability': 'Vision + tool calling' },
          { 'Model': 'Gemma 4 (26B-A4B MoE)', 'VRAM at Q4': '~14 GB', 'Image Capability': 'Vision + tool calling, higher quality' },
          { 'Model': 'Llama 3.2 Vision 11B', 'VRAM at Q4': '~10 GB', 'Image Capability': '⚠️ Broken on Ollama v0.30.0+ (mllama error)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Ollama Vision Models',
        faqs: [
          {
            q: 'How do I send an image to Ollama via the API?',
            a: 'POST to the <code>/api/chat</code> endpoint with the image as a base64 string in the <code>images</code> array. Minimum working JSON body: <code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> See <a href="/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">Qwen 3 on Ollama</a> for a multimodal-capable option with strong tool calling support.',
          },
          {
            q: 'Why does llama3.2-vision fail with "unknown model architecture: mllama"?',
            a: 'Ollama v0.30.0 (May 2026) rebuilt model loading on top of llama.cpp, which never added support for the mllama architecture that Llama 3.2 Vision uses. This breaks llama3.2-vision on Ollama v0.30.0 and every version since, including v0.33.2. There is no supported fix yet: use Qwen3-VL or Gemma 4 instead, or keep a pre-0.30.0 Ollama install solely for this model.',
          },
          {
            q: 'Can vision models do OCR (read text from images)?',
            a: 'Yes, but quality varies. Qwen3-VL is currently the strongest OCR performer among working Ollama vision models — Llama 3.2 Vision was the previous top pick but is broken on Ollama v0.30.0 and newer. LLaVA 7B can read clearly printed text but struggles with handwriting or small fonts.',
          },
          {
            q: 'Which Ollama vision model is best for charts and diagrams?',
            a: 'Qwen3-VL. It leads on charts, tables, diagrams, and screenshot understanding, outperforming LLaVA and the earlier Qwen2.5-VL generation on document-understanding benchmarks.',
          },
          {
            q: 'Do vision models support multiple images in one prompt?',
            a: 'Support varies by model and Ollama version. LLaVA and Qwen2.5-VL currently process one image per turn in Ollama. Qwen3-VL and Gemma 4 support multi-image input in longer-context configurations — check each model\'s Ollama library page for the current limit.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Run Qwen 3 on Ollama](/prompt-bites/can-you-run-qwen3-on-ollama) -- multimodal-capable option with tool calling',
          '[Ollama 128K Context Models](/prompt-bites/ollama-128k-context-models) -- long context models',
          '[Multimodal Local LLMs Guide](/local-llms/multimodal-local-llms) -- full guide to local vision models',
          '[Best Local Vision Models 2026](/power-local-llm/local-vision-models-llava-ollama-2026) -- every vision model, every GPU tier',
        ],
      },
    },
  },
  de: {
    theme: 'Ollama',
    heroImage: '/images/which-ollama-models-support-vision-overview-hero-de.webp',
    title: 'Welche Ollama-Modelle unterstützen Vision?',
    seoTitle: 'Ollama Vision-Modelle 2026: Qwen3-VL, Gemma 4, LLaVA',
    metaDescription: 'Ollamas Vision-Modelle 2026: Qwen3-VL und Gemma 4 führen, LLaVA ist der sichere Fallback. Llama 3.2 Vision ist defekt (mllama-Fehler) — Lösung und VRAM-Werte.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    quickAnswerTop: {
      de: {
        question: 'Welche Ollama-Modelle unterstützen Vision?',
        answer: 'Ollamas beste Vision-Modelle 2026 sind Qwen3-VL und Gemma 4, beide nativ multimodal. LLaVA bleibt der sicherste Fallback für breite Kompatibilität. Llama 3.2 Vision ist derzeit auf Ollama defekt ("unknown model architecture: mllama") — nutzen Sie stattdessen Qwen3-VL oder Gemma 4.',
        bullets: [
          'qwen3-vl: stärkste Vision-Familie, am besten für OCR, Charts und Screenshots',
          'gemma4: Vision in jeder Größe integriert, plus Tool-Calling',
          'llava: sicherster Fallback, breiteste Client-Kompatibilität',
          'llama3.2-vision: defekt auf Ollama v0.30.0+ ("unknown model architecture: mllama")',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollamas führende Vision-Modelle sind seit September 2026 Qwen3-VL und Gemma 4 — beide lösten die frühere Qwen2.5-VL-/Gemma-3-Generation ab',
          'Llama 3.2 Vision ist auf Ollama v0.30.0 und neuer derzeit defekt: Fehler "Error: unknown model architecture: mllama", weil Ollamas llama.cpp-basierte Engine kein mllama unterstützt',
          'LLaVA 7B bleibt der sicherste Fallback (~7 GB VRAM, funktioniert auf jeder Ollama-Version)',
          'Nutzen Sie Qwen3-VL für OCR, Charts und Screenshots; Gemma 4, wenn Sie Vision und Tool-Calling in einem Modell benötigen',
        ],
      },
      body1: {
        title: 'Die wichtigsten Vision-Modelle auf Ollama',
        content: [
          '<strong>Ollamas Vision-Angebot hat sich 2026 deutlich verändert: Qwen3-VL und Gemma 4 sind jetzt die stärksten Optionen, und Llama 3.2 Vision lädt auf aktuellen Ollama-Versionen nicht mehr.</strong> Jedes verbleibende Modell hat eine eigene Stärke und ein eigenes VRAM-Profil.',
          'Qwen3-VL ist die stärkste offene Vision-Sprachmodell-Familie auf Ollama — es führt bei OCR, Charts, Diagrammen und Screenshot-/UI-Verständnis und reicht von einem 2B-Edge-Modell bis zu einer 235B-Mixture-of-Experts-Variante. Gemma 4 integriert native Vision in jede Größe (2B–31B) zusammen mit Tool-Calling und ist damit die beste Wahl, wenn ein Modell sowohl Bilder verstehen als auch Tools aufrufen soll. LLaVA bleibt der sicherste Einstiegspunkt für breite Client-Kompatibilität. Qwen2.5-VL, die vorherige Qwen-Generation, funktioniert weiterhin und bleibt eine gültige, leichtgewichtige Wahl, wenn Sie sie bereits heruntergeladen haben.',
          'Alle Vision-Modelle laden einen Bild-Encoder neben den LLM-Gewichten. Dieser Encoder benötigt 1–3 GB VRAM zusätzlich zu dem, was das reine Textmodell benötigt — planen Sie diesen Overhead beim Prüfen Ihres VRAM-Budgets ein.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '<strong>Llama 3.2 Vision ist auf Ollama derzeit defekt.</strong> Seit Ollama v0.30.0 (Mai 2026) das Laden von Modellen auf llama.cpp umgestellt hat, schlägt llama3.2-vision mit <code>Error: unknown model architecture: "mllama"</code> fehl — die mllama-Architektur wurde nie zu llama.cpp hinzugefügt. Das ist auch mit Ollama v0.33.2 (August 2026) noch ungelöst. Nutzen Sie stattdessen Qwen3-VL oder Gemma 4, oder behalten Sie eine Ollama-Installation vor v0.30.0, wenn Sie speziell Llama 3.2 Vision benötigen.',
          },
        ],
      },
      body2: {
        title: 'VRAM-Anforderungen für Vision',
        content: [
          '<strong>Jedes Vision-Modell benötigt mehr VRAM als sein Text-only-Äquivalent.</strong> Ein 7–8B-Vision-Modell benötigt typischerweise 7–9 GB VRAM, nicht die ~6 GB, die Sie für ein ähnlich großes reines Textmodell einplanen würden.',
          'Für OCR, Charts und Dokumentenanalyse ist Qwen3-VL 8B die VRAM-effizienteste starke Option. Für Vision plus Tool-Calling in einem Modell passen Gemma 4s 12B- oder 26B-A4B-MoE-Varianten in 8–14 GB. Den vollständigen Leitfaden zu multimodalen lokalen Modellen und Anwendungsfall-Matching finden Sie im <a href="/de/local-llms/multimodal-local-llms" class="text-primary hover:underline">Leitfaden für multimodale lokale LLMs</a>.',
        ],
        columns: ['Modell', 'VRAM bei Q4', 'Bildfähigkeit'],
        rows: [
          { 'Modell': 'LLaVA 7B', 'VRAM bei Q4': '~7 GB', 'Bildfähigkeit': 'Allgemeine Bild-Q&A, breite Kompatibilität' },
          { 'Modell': 'Qwen3-VL 8B', 'VRAM bei Q4': '~8 GB', 'Bildfähigkeit': 'OCR, Charts, Screenshots, mehrsprachig' },
          { 'Modell': 'Gemma 4 (12B)', 'VRAM bei Q4': '~8 GB', 'Bildfähigkeit': 'Vision + Tool-Calling' },
          { 'Modell': 'Gemma 4 (26B-A4B MoE)', 'VRAM bei Q4': '~14 GB', 'Bildfähigkeit': 'Vision + Tool-Calling, höhere Qualität' },
          { 'Modell': 'Llama 3.2 Vision 11B', 'VRAM bei Q4': '~10 GB', 'Bildfähigkeit': '⚠️ Defekt auf Ollama v0.30.0+ (mllama-Fehler)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Ollama-Vision-Modellen',
        faqs: [
          {
            q: 'Wie sende ich ein Bild über die API an Ollama?',
            a: 'Senden Sie einen POST-Request an den <code>/api/chat</code>-Endpunkt mit dem Bild als Base64-String im <code>images</code>-Array. Minimaler JSON-Body: <code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> Für eine multimodale Option mit starker Tool-Call-Unterstützung siehe <a href="/de/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">Qwen 3 auf Ollama</a>.',
          },
          {
            q: 'Warum schlägt llama3.2-vision mit "unknown model architecture: mllama" fehl?',
            a: 'Ollama v0.30.0 (Mai 2026) hat das Laden von Modellen auf llama.cpp umgestellt, das nie Unterstützung für die mllama-Architektur von Llama 3.2 Vision erhielt. Das bricht llama3.2-vision auf Ollama v0.30.0 und jeder Version danach, einschließlich v0.33.2. Eine offizielle Lösung gibt es noch nicht: Nutzen Sie stattdessen Qwen3-VL oder Gemma 4, oder behalten Sie eine Ollama-Installation vor v0.30.0 speziell für dieses Modell.',
          },
          {
            q: 'Können Vision-Modelle OCR (Text aus Bildern lesen)?',
            a: 'Ja, aber die Qualität variiert. Qwen3-VL ist derzeit der stärkste OCR-Performer unter den funktionierenden Ollama-Vision-Modellen — Llama 3.2 Vision war die frühere Top-Wahl, ist aber auf Ollama v0.30.0 und neuer defekt. LLaVA 7B kann klar gedruckten Text lesen, hat aber Schwierigkeiten mit Handschrift oder kleinen Schriftgrößen.',
          },
          {
            q: 'Welches Ollama-Vision-Modell eignet sich am besten für Charts und Diagramme?',
            a: 'Qwen3-VL. Es führt bei Charts, Tabellen, Diagrammen und Screenshot-Verständnis und übertrifft LLaVA sowie die frühere Qwen2.5-VL-Generation in Dokumentenverständnis-Benchmarks.',
          },
          {
            q: 'Unterstützen Vision-Modelle mehrere Bilder in einem Prompt?',
            a: 'Die Unterstützung variiert je nach Modell und Ollama-Version. LLaVA und Qwen2.5-VL verarbeiten derzeit ein Bild pro Turn in Ollama. Qwen3-VL und Gemma 4 unterstützen Mehrbild-Eingaben in Konfigurationen mit längerem Kontext — prüfen Sie das aktuelle Limit auf der jeweiligen Ollama-Bibliotheksseite.',
          },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Qwen 3 auf Ollama ausführen](/de/prompt-bites/can-you-run-qwen3-on-ollama) -- multimodale Option mit Tool-Calling',
          '[Ollama 128K Kontextmodelle](/de/prompt-bites/ollama-128k-context-models) -- long context models',
          '[Leitfaden für multimodale lokale LLMs](/de/local-llms/multimodal-local-llms) -- vollständiger Leitfaden zu lokalen Vision-Modellen',
          '[Beste lokale Vision-Modelle 2026](/de/power-local-llm/local-vision-models-llava-ollama-2026) -- jedes Vision-Modell, jede GPU-Klasse',
        ],
      },
    },
  },
  fr: {
    theme: 'Ollama',
    heroImage: '/images/which-ollama-models-support-vision-overview-hero-fr.webp',
    title: 'Quels modèles Ollama supportent la vision ?',
    seoTitle: 'Modèles vision Ollama 2026 : Qwen3-VL, Gemma 4, LLaVA',
    metaDescription: 'Modèles vision Ollama 2026 : Qwen3-VL et Gemma 4 en tête, LLaVA reste le repli sûr. Llama 3.2 Vision est cassé (erreur mllama) — la solution et les VRAM.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    quickAnswerTop: {
      fr: {
        question: 'Quels modèles Ollama supportent la vision ?',
        answer: 'Les meilleurs modèles de vision d\'Ollama en 2026 sont Qwen3-VL et Gemma 4, tous deux nativement multimodaux. LLaVA reste le repli le plus sûr pour une large compatibilité. Llama 3.2 Vision est actuellement cassé sur Ollama (« unknown model architecture: mllama ») — utilisez Qwen3-VL ou Gemma 4 à la place.',
        bullets: [
          'qwen3-vl : famille de vision la plus puissante, idéale pour l\'OCR, les graphiques et les captures d\'écran',
          'gemma4 : vision intégrée à chaque taille, plus l\'appel d\'outils',
          'llava : repli le plus sûr, compatibilité client la plus large',
          'llama3.2-vision : cassé sur Ollama v0.30.0+ (« unknown model architecture: mllama »)',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Depuis septembre 2026, les modèles de vision phares d\'Ollama sont Qwen3-VL et Gemma 4 — tous deux ont remplacé la génération précédente Qwen2.5-VL / Gemma 3',
          'Llama 3.2 Vision est actuellement cassé sur Ollama v0.30.0 et versions ultérieures : erreur « Error: unknown model architecture: mllama », le moteur basé sur llama.cpp d\'Ollama ne supportant pas mllama',
          'LLaVA 7B reste le repli le plus sûr (~7 GB de VRAM, fonctionne sur toutes les versions d\'Ollama)',
          'Utilisez Qwen3-VL pour l\'OCR, les graphiques et les captures d\'écran ; Gemma 4 quand vous avez besoin de vision et d\'appel d\'outils dans un seul modèle',
        ],
      },
      body1: {
        title: 'Les principaux modèles de vision sur Ollama',
        content: [
          '<strong>L\'offre de vision d\'Ollama a beaucoup changé en 2026 : Qwen3-VL et Gemma 4 sont désormais les options les plus solides, et Llama 3.2 Vision ne se charge plus sur les versions récentes d\'Ollama.</strong> Chaque modèle restant a une force et un profil VRAM distincts.',
          'Qwen3-VL est la famille de modèles vision-langage ouverte la plus puissante disponible sur Ollama — elle excelle sur l\'OCR, les graphiques, les diagrammes et la compréhension des captures d\'écran/UI, et va d\'un modèle 2B pour l\'edge jusqu\'à une variante 235B en mixture-of-experts. Gemma 4 intègre une vision native à chaque taille (2B–31B) avec l\'appel d\'outils, ce qui en fait le meilleur choix quand un seul modèle doit voir des images et appeler des outils. LLaVA reste le point de départ le plus sûr pour une large compatibilité client. Qwen2.5-VL, la génération Qwen précédente, fonctionne toujours et reste un choix léger valable si vous l\'avez déjà téléchargé.',
          'Tous les modèles de vision chargent un encodeur d\'image en parallèle des poids LLM. Cet encodeur ajoute 1–3 GB de VRAM au-delà de ce que le modèle texte seul nécessite — prévoyez cette surcharge lors de la vérification de votre budget VRAM.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '<strong>Llama 3.2 Vision est actuellement cassé sur Ollama.</strong> Depuis qu\'Ollama v0.30.0 (mai 2026) a basé le chargement des modèles sur llama.cpp, llama3.2-vision échoue avec <code>Error: unknown model architecture: "mllama"</code> — l\'architecture mllama n\'a jamais été ajoutée à llama.cpp. Ce problème n\'est toujours pas résolu avec Ollama v0.33.2 (août 2026). Utilisez Qwen3-VL ou Gemma 4 à la place, ou conservez une installation Ollama antérieure à la v0.30.0 si vous avez spécifiquement besoin de Llama 3.2 Vision.',
          },
        ],
      },
      body2: {
        title: 'Besoins en VRAM pour la vision',
        content: [
          '<strong>Chaque modèle de vision nécessite plus de VRAM que son équivalent texte seul.</strong> Un modèle de vision 7–8B requiert typiquement 7–9 GB de VRAM, et non les ~6 GB prévus pour un modèle texte seul de taille similaire.',
          'Pour l\'OCR, les graphiques et l\'analyse de documents, Qwen3-VL 8B est l\'option solide la plus efficace en VRAM. Pour la vision plus l\'appel d\'outils dans un seul modèle, les variantes 12B ou 26B-A4B MoE de Gemma 4 tiennent en 8–14 GB. Pour le guide complet sur les modèles locaux multimodaux, consultez le <a href="/fr/local-llms/multimodal-local-llms" class="text-primary hover:underline">guide des LLMs locaux multimodaux</a>.',
        ],
        columns: ['Modèle', 'VRAM en Q4', 'Capacité image'],
        rows: [
          { 'Modèle': 'LLaVA 7B', 'VRAM en Q4': '~7 GB', 'Capacité image': 'Q&R sur images générales, large compatibilité' },
          { 'Modèle': 'Qwen3-VL 8B', 'VRAM en Q4': '~8 GB', 'Capacité image': 'OCR, graphiques, captures d\'écran, multilingue' },
          { 'Modèle': 'Gemma 4 (12B)', 'VRAM en Q4': '~8 GB', 'Capacité image': 'Vision + appel d\'outils' },
          { 'Modèle': 'Gemma 4 (26B-A4B MoE)', 'VRAM en Q4': '~14 GB', 'Capacité image': 'Vision + appel d\'outils, qualité supérieure' },
          { 'Modèle': 'Llama 3.2 Vision 11B', 'VRAM en Q4': '~10 GB', 'Capacité image': '⚠️ Cassé sur Ollama v0.30.0+ (erreur mllama)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les modèles de vision Ollama',
        faqs: [
          {
            q: 'Comment envoyer une image à Ollama via l\'API ?',
            a: 'Faites un POST vers le point de terminaison <code>/api/chat</code> avec l\'image en base64 dans le tableau <code>images</code>. Corps JSON minimal : <code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> Voir <a href="/fr/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">Qwen 3 sur Ollama</a> pour une option multimodale avec un fort support de l\'appel d\'outils.',
          },
          {
            q: 'Pourquoi llama3.2-vision échoue-t-il avec « unknown model architecture: mllama » ?',
            a: 'Ollama v0.30.0 (mai 2026) a basé le chargement des modèles sur llama.cpp, qui n\'a jamais reçu de support pour l\'architecture mllama utilisée par Llama 3.2 Vision. Cela casse llama3.2-vision sur Ollama v0.30.0 et toutes les versions suivantes, y compris v0.33.2. Il n\'existe pas encore de correctif officiel : utilisez Qwen3-VL ou Gemma 4 à la place, ou conservez une installation Ollama antérieure à la v0.30.0 uniquement pour ce modèle.',
          },
          {
            q: 'Les modèles de vision peuvent-ils faire de l\'OCR (lire du texte depuis des images) ?',
            a: 'Oui, mais la qualité varie. Qwen3-VL est actuellement le plus performant pour l\'OCR parmi les modèles de vision Ollama qui fonctionnent — Llama 3.2 Vision était le choix précédent mais il est cassé sur Ollama v0.30.0 et versions ultérieures. LLaVA 7B peut lire du texte clairement imprimé mais peine avec l\'écriture manuscrite ou les petites polices.',
          },
          {
            q: 'Quel modèle de vision Ollama est le meilleur pour les graphiques et diagrammes ?',
            a: 'Qwen3-VL. Il excelle sur les graphiques, tableaux, diagrammes et la compréhension de captures d\'écran, et surpasse LLaVA ainsi que la génération précédente Qwen2.5-VL sur les benchmarks de compréhension de documents.',
          },
          {
            q: 'Les modèles de vision supportent-ils plusieurs images dans un seul prompt ?',
            a: 'Le support varie selon le modèle et la version d\'Ollama. LLaVA et Qwen2.5-VL traitent actuellement une image par tour dans Ollama. Qwen3-VL et Gemma 4 supportent les entrées multi-images dans des configurations à plus long contexte — vérifiez la limite actuelle sur la page de la bibliothèque Ollama de chaque modèle.',
          },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Exécuter Qwen 3 sur Ollama](/fr/prompt-bites/can-you-run-qwen3-on-ollama) -- option multimodale avec appel d\'outils',
          '[Modèles Ollama à contexte 128K](/fr/prompt-bites/ollama-128k-context-models) -- long context models',
          '[Guide des LLMs locaux multimodaux](/fr/local-llms/multimodal-local-llms) -- guide complet des modèles de vision locaux',
          '[Meilleurs modèles de vision locaux 2026](/fr/power-local-llm/local-vision-models-llava-ollama-2026) -- tous les modèles de vision, tous les GPU',
        ],
      },
    },
  },
  ja: {
    theme: 'Ollama',
    heroImage: '/images/which-ollama-models-support-vision-overview-hero-ja.webp',
    title: 'OllamaでVisionに対応しているモデルは？',
    seoTitle: 'Ollama Visionモデル2026：Qwen3-VL、Gemma 4、LLaVA',
    metaDescription: 'Ollamaの2026年Visionモデル：Qwen3-VLとGemma 4が主力、LLaVAは安全な代替。Llama 3.2 Visionは不具合中(mllamaエラー)——対処法とVRAM要件を解説。',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    quickAnswerTop: {
      ja: {
        question: 'OllamaでVisionに対応しているモデルは？',
        answer: '2026年時点でOllamaの最良のVisionモデルはQwen3-VLとGemma 4で、どちらもネイティブにマルチモーダルです。LLaVAは広い互換性を持つ最も安全な代替として残っています。Llama 3.2 Visionは現在Ollamaで動作しません（「unknown model architecture: mllama」）——代わりにQwen3-VLかGemma 4を使ってください。',
        bullets: [
          'qwen3-vl：最も強力なVisionファミリー、OCR・チャート・スクリーンショットに最適',
          'gemma4：全サイズにVisionを内蔵、ツールコールにも対応',
          'llava：最も安全な代替、クライアント互換性が最も広い',
          'llama3.2-vision：Ollama v0.30.0以降で動作不可（「unknown model architecture: mllama」）',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '2026年9月時点で、OllamaをリードするVisionモデルはQwen3-VLとGemma 4です——どちらも以前のQwen2.5-VL・Gemma 3世代を置き換えました',
          'Llama 3.2 VisionはOllama v0.30.0以降で現在動作しません：「Error: unknown model architecture: mllama」というエラーが発生します。これはOllamaのllama.cppベースのエンジンがmllamaに対応していないためです',
          'LLaVA 7Bは最も安全な代替です（~7 GB VRAM、すべてのOllamaバージョンで動作）',
          'OCR・チャート・スクリーンショットにはQwen3-VLを、Vision機能とツールコールを1つのモデルで使いたい場合はGemma 4を使用してください',
        ],
      },
      body1: {
        title: 'OllamaのトップVisionモデル',
        content: [
          '<strong>2026年にOllamaのVisionラインナップは大きく変わりました：Qwen3-VLとGemma 4が最も強力な選択肢となり、Llama 3.2 Visionは現行のOllamaバージョンでは読み込めなくなっています。</strong>残る各モデルには異なる強みとVRAMプロファイルがあります。',
          'Qwen3-VLはOllamaで利用できる中で最も強力なオープンVision言語モデルファミリーです——OCR、チャート、図、スクリーンショット・UI理解で優れており、2Bのエッジモデルから235Bのmixture-of-expertsバリアントまで揃っています。Gemma 4はネイティブのVisionを全サイズ（2B〜31B）に組み込み、ツールコールにも対応しているため、画像理解とツール呼び出しを1つのモデルで両立させたい場合に最適です。LLaVAは広いクライアント互換性を持つ最も安全な出発点であり続けます。前世代のQwen2.5-VLは引き続き動作し、すでにダウンロード済みであれば有効な軽量選択肢です。',
          'すべてのVisionモデルはLLMの重みと並行して画像エンコーダーを読み込みます。このエンコーダーはベースのテキストモデルが必要とするVRAMに加えて1–3 GB追加されます——VRAMの予算を確認する際はこのオーバーヘッドを計画に含めてください。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '<strong>Llama 3.2 Visionは現在Ollamaで動作しません。</strong>Ollama v0.30.0（2026年5月）がモデル読み込みをllama.cppベースに移行して以来、llama3.2-visionは<code>Error: unknown model architecture: "mllama"</code>で失敗するようになりました——mllamaアーキテクチャはllama.cppに一度も追加されていません。この問題はOllama v0.33.2（2026年8月）時点でも未解決です。代わりにQwen3-VLまたはGemma 4を使用するか、Llama 3.2 Visionがどうしても必要な場合はv0.30.0より前のOllamaを維持してください。',
          },
        ],
      },
      body2: {
        title: 'VisionのVRAM要件',
        content: [
          '<strong>すべてのVisionモデルは、テキストのみの同等モデルよりも多くのVRAMを必要とします。</strong>7〜8BのVisionモデルは通常7–9 GB VRAMが必要で、同程度のサイズのテキストのみのモデルで想定する~6 GBではありません。',
          'OCR、チャート、ドキュメント分析には、Qwen3-VL 8BがVRAM効率の面で最も優れた強力な選択肢です。Vision機能とツールコールを1つのモデルで使いたい場合、Gemma 4の12Bまたは26B-A4B MoEバリアントは8〜14 GBに収まります。マルチモーダルローカルモデルのユースケース別ガイドは、<a href="/ja/local-llms/multimodal-local-llms" class="text-primary hover:underline">マルチモーダルローカルLLMガイド</a>をご覧ください。',
        ],
        columns: ['モデル', 'Q4でのVRAM', '画像機能'],
        rows: [
          { 'モデル': 'LLaVA 7B', 'Q4でのVRAM': '~7 GB', '画像機能': '一般的な画像Q&A、広い互換性' },
          { 'モデル': 'Qwen3-VL 8B', 'Q4でのVRAM': '~8 GB', '画像機能': 'OCR、チャート、スクリーンショット、多言語' },
          { 'モデル': 'Gemma 4（12B）', 'Q4でのVRAM': '~8 GB', '画像機能': 'Vision + ツールコール' },
          { 'モデル': 'Gemma 4（26B-A4B MoE）', 'Q4でのVRAM': '~14 GB', '画像機能': 'Vision + ツールコール、高品質' },
          { 'モデル': 'Llama 3.2 Vision 11B', 'Q4でのVRAM': '~10 GB', '画像機能': '⚠️ Ollama v0.30.0以降で動作不可（mllamaエラー）' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Ollama Visionモデルへのよくある質問',
        faqs: [
          {
            q: 'API経由でOllamaに画像を送るにはどうすればいいですか？',
            a: '<code>/api/chat</code>エンドポイントにPOSTリクエストを送り、<code>images</code>配列にbase64文字列として画像を含めます。最小動作JSONボディ: <code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> ツールコールサポートが強いマルチモーダル対応オプションは<a href="/ja/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">OllamaでのQwen 3</a>をご覧ください。',
          },
          {
            q: 'なぜllama3.2-visionは「unknown model architecture: mllama」で失敗するのですか？',
            a: 'Ollama v0.30.0（2026年5月）はモデル読み込みをllama.cppベースに移行しましたが、Llama 3.2 Visionが使用するmllamaアーキテクチャへの対応が一度も追加されませんでした。そのためllama3.2-visionはOllama v0.30.0以降のすべてのバージョン（v0.33.2を含む）で動作しません。公式な修正はまだありません：代わりにQwen3-VLまたはGemma 4を使用するか、この目的のためだけにv0.30.0より前のOllamaを維持してください。',
          },
          {
            q: 'VisionモデルはOCR（画像からテキストを読み取る）できますか？',
            a: 'はい、ただし品質は異なります。現在、動作するOllama Visionモデルの中でQwen3-VLが最も優れたOCR性能を持ちます——以前はLlama 3.2 Visionが最有力でしたが、Ollama v0.30.0以降では動作しません。LLaVA 7Bは明瞭に印刷されたテキストは読めますが、手書きや小さいフォントは苦手です。',
          },
          {
            q: 'チャートや図に最適なOllama Visionモデルはどれですか？',
            a: 'Qwen3-VLです。チャート、表、図、スクリーンショット理解で優れており、ドキュメント理解ベンチマークでLLaVAや前世代のQwen2.5-VLを上回ります。',
          },
          {
            q: 'Visionモデルは1つのプロンプトで複数の画像をサポートしていますか？',
            a: 'モデルとOllamaのバージョンによって対応状況が異なります。LLaVAとQwen2.5-VLは現在Ollamaで1ターンに1枚の画像を処理します。Qwen3-VLとGemma 4はより長いコンテキスト設定でマルチ画像入力に対応しています——最新の上限は各モデルのOllamaライブラリページで確認してください。',
          },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[OllamaでQwen 3を実行する](/ja/prompt-bites/can-you-run-qwen3-on-ollama) -- ツールコール対応のマルチモーダルオプション',
          '[Ollama 128Kコンテキストモデル](/ja/prompt-bites/ollama-128k-context-models) -- long context models',
          '[マルチモーダルローカルLLMガイド](/ja/local-llms/multimodal-local-llms) -- ローカルVisionモデルの完全ガイド',
          '[2026年ベストローカルVisionモデル](/ja/power-local-llm/local-vision-models-llava-ollama-2026) -- あらゆるVisionモデル、あらゆるGPU',
        ],
      },
    },
  },
  zh: {
    theme: 'Ollama',
    heroImage: '/images/which-ollama-models-support-vision-overview-hero-zh.webp',
    title: '哪些Ollama模型支持视觉功能？',
    seoTitle: 'Ollama视觉模型2026：Qwen3-VL、Gemma 4、LLaVA',
    metaDescription: 'Ollama 2026视觉模型：Qwen3-VL和Gemma 4领先，LLaVA是安全备选。Llama 3.2 Vision目前故障（mllama错误）——修复方法与VRAM需求详解。',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    quickAnswerTop: {
      zh: {
        question: '哪些Ollama模型支持视觉功能？',
        answer: '2026年Ollama最好的视觉模型是Qwen3-VL和Gemma 4，两者均为原生多模态。LLaVA仍是兼容性最广的安全备选。Llama 3.2 Vision目前在Ollama上无法运行（"unknown model architecture: mllama"）——请改用Qwen3-VL或Gemma 4。',
        bullets: [
          'qwen3-vl：最强视觉模型系列，最适合OCR、图表和截图分析',
          'gemma4：每个规模都内置视觉功能，还支持工具调用',
          'llava：最安全的备选，客户端兼容性最广',
          'llama3.2-vision：在Ollama v0.30.0及以上版本无法运行（"unknown model architecture: mllama"）',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '截至2026年9月，Ollama领先的视觉模型是Qwen3-VL和Gemma 4——两者都取代了此前的Qwen2.5-VL/Gemma 3一代',
          'Llama 3.2 Vision在Ollama v0.30.0及以后版本目前无法运行：报错"Error: unknown model architecture: mllama"，原因是Ollama基于llama.cpp的新引擎不支持mllama架构',
          'LLaVA 7B仍是最安全的备选（~7 GB VRAM，兼容所有Ollama版本）',
          '图表和截图分析使用Qwen3-VL；需要视觉功能加工具调用二合一时使用Gemma 4',
        ],
      },
      body1: {
        title: 'Ollama上的顶级视觉模型',
        content: [
          '<strong>2026年Ollama的视觉模型阵容发生了重大变化：Qwen3-VL和Gemma 4现已成为最强选项，而Llama 3.2 Vision在当前Ollama版本上已无法加载。</strong>剩下的每个模型都有各自的优势和VRAM需求。',
          'Qwen3-VL是Ollama上可用的最强开源视觉语言模型系列——在OCR、图表、图形和截图/UI理解方面领先，规模从2B的边缘模型一直到235B的混合专家（MoE）版本。Gemma 4在每个规模（2B–31B）都内置了原生视觉能力并支持工具调用，是需要一个模型同时处理图像和调用工具时的最佳选择。LLaVA仍是兼容性最广的最安全入门选择。上一代的Qwen2.5-VL依然可用，如果已经下载过，仍是有效的轻量选择。',
          '所有视觉模型都会在LLM权重的基础上加载图像编码器。此编码器在纯文本模型所需VRAM之上额外增加1–3 GB——规划VRAM预算时请考虑这一开销。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '<strong>Llama 3.2 Vision目前在Ollama上无法运行。</strong>自Ollama v0.30.0（2026年5月）将模型加载改为基于llama.cpp以来，llama3.2-vision会报错<code>Error: unknown model architecture: "mllama"</code>——mllama架构从未被添加到llama.cpp中。截至Ollama v0.33.2（2026年8月），此问题仍未解决。请改用Qwen3-VL或Gemma 4，或者如果确实需要Llama 3.2 Vision，请保留v0.30.0之前的Ollama版本。',
          },
        ],
      },
      body2: {
        title: '视觉功能的VRAM需求',
        content: [
          '<strong>每个视觉模型所需的VRAM都多于其纯文本版本。</strong>7–8B视觉模型通常需要7–9 GB VRAM，而不是同等规模纯文本模型预算的~6 GB。',
          '对于OCR、图表和文档分析，Qwen3-VL 8B是VRAM效率最高的强力选项。若需要视觉功能加工具调用二合一，Gemma 4的12B或26B-A4B MoE版本可在8–14 GB内运行。关于多模态本地模型及用例匹配的完整指南，请参阅<a href="/zh/local-llms/multimodal-local-llms" class="text-primary hover:underline">多模态本地LLM指南</a>。',
        ],
        columns: ['模型', 'Q4量化的VRAM', '图像能力'],
        rows: [
          { '模型': 'LLaVA 7B', 'Q4量化的VRAM': '~7 GB', '图像能力': '通用图像问答，广泛兼容' },
          { '模型': 'Qwen3-VL 8B', 'Q4量化的VRAM': '~8 GB', '图像能力': 'OCR、图表、截图、多语言' },
          { '模型': 'Gemma 4（12B）', 'Q4量化的VRAM': '~8 GB', '图像能力': '视觉功能 + 工具调用' },
          { '模型': 'Gemma 4（26B-A4B MoE）', 'Q4量化的VRAM': '~14 GB', '图像能力': '视觉功能 + 工具调用，质量更高' },
          { '模型': 'Llama 3.2 Vision 11B', 'Q4量化的VRAM': '~10 GB', '图像能力': '⚠️ 在Ollama v0.30.0+无法运行（mllama错误）' },
        ],
      },
      faq: {
        id: 'faq',
        title: '关于Ollama视觉模型的快速解答',
        faqs: [
          {
            q: '如何通过API向Ollama发送图片？',
            a: '向<code>/api/chat</code>端点发送POST请求，将图片作为base64字符串放在<code>images</code>数组中。最简JSON请求体：<code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> 如需多模态能力加强大工具调用支持，参见<a href="/zh/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">在Ollama上运行Qwen 3</a>。',
          },
          {
            q: '为什么llama3.2-vision会报错"unknown model architecture: mllama"？',
            a: 'Ollama v0.30.0（2026年5月）将模型加载改为基于llama.cpp，而llama.cpp从未加入对Llama 3.2 Vision所用mllama架构的支持。这导致llama3.2-vision在Ollama v0.30.0及此后所有版本（包括v0.33.2）上都无法运行。目前还没有官方修复方案：请改用Qwen3-VL或Gemma 4，或者仅为运行此模型保留一个v0.30.0之前的Ollama安装。',
          },
          {
            q: '视觉模型可以做OCR（从图片中读取文字）吗？',
            a: '可以，但质量因模型而异。在目前可正常运行的Ollama视觉模型中，Qwen3-VL的OCR能力最强——Llama 3.2 Vision此前是首选，但在Ollama v0.30.0及以上版本已无法运行。LLaVA 7B能读取清晰印刷的文字，但对手写或小字体有困难。',
          },
          {
            q: '哪个Ollama视觉模型最适合图表和图形？',
            a: 'Qwen3-VL。它在图表、表格、图形和截图理解方面领先，在文档理解基准测试中超越了LLaVA和上一代的Qwen2.5-VL。',
          },
          {
            q: '视觉模型支持在单个提示中处理多张图片吗？',
            a: '支持情况因模型和Ollama版本而异。LLaVA和Qwen2.5-VL目前在Ollama中每轮处理一张图片。Qwen3-VL和Gemma 4在更长上下文配置下支持多图片输入——具体上限请查看各模型的Ollama库页面。',
          },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[在Ollama上运行Qwen 3](/zh/prompt-bites/can-you-run-qwen3-on-ollama) -- 支持工具调用的多模态选项',
          '[Ollama 128K上下文模型](/zh/prompt-bites/ollama-128k-context-models) -- long context models',
          '[多模态本地LLM指南](/zh/local-llms/multimodal-local-llms) -- 本地视觉模型完整指南',
          '[2026年最佳本地视觉模型](/zh/power-local-llm/local-vision-models-llava-ollama-2026) -- 覆盖每款视觉模型和每种GPU',
        ],
      },
    },
  },
  pt: {
    theme: 'Ollama',
    heroImage: '/images/which-ollama-models-support-vision-overview-hero-pt.webp',
    title: 'Quais modelos do Ollama suportam visão?',
    seoTitle: 'Modelos de visão do Ollama 2026: Qwen3-VL, Gemma 4, LLaVA',
    metaDescription: 'Modelos de visão do Ollama em 2026: Qwen3-VL e Gemma 4 lideram, LLaVA é o backup seguro. Llama 3.2 Vision está quebrado (erro mllama) — a correção e a VRAM.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    quickAnswerTop: {
      pt: {
        question: 'Quais modelos do Ollama suportam visão?',
        answer: 'Os melhores modelos de visão do Ollama em 2026 são Qwen3-VL e Gemma 4, ambos nativamente multimodais. O LLaVA continua sendo o backup mais seguro pela ampla compatibilidade. O Llama 3.2 Vision está atualmente quebrado no Ollama ("unknown model architecture: mllama") — use Qwen3-VL ou Gemma 4 no lugar dele.',
        bullets: [
          'qwen3-vl: a família de visão mais forte, ideal para OCR, gráficos e capturas de tela',
          'gemma4: visão integrada em todos os tamanhos, além de chamadas de ferramentas',
          'llava: o backup mais seguro, maior compatibilidade com clientes',
          'llama3.2-vision: quebrado no Ollama v0.30.0+ ("unknown model architecture: mllama")',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Desde setembro de 2026, os modelos de visão líderes do Ollama são Qwen3-VL e Gemma 4 — ambos substituíram a geração anterior Qwen2.5-VL/Gemma 3',
          'O Llama 3.2 Vision está atualmente quebrado no Ollama v0.30.0 e versões posteriores: falha com "Error: unknown model architecture: mllama", porque o novo mecanismo do Ollama baseado em llama.cpp não suporta mllama',
          'O LLaVA 7B continua sendo o backup mais seguro (~7 GB de VRAM, funciona em qualquer versão do Ollama)',
          'Use Qwen3-VL para OCR, gráficos e capturas de tela; use Gemma 4 quando precisar de visão e chamadas de ferramentas em um único modelo',
        ],
      },
      body1: {
        title: 'Os principais modelos de visão no Ollama',
        content: [
          '<strong>O catálogo de visão do Ollama mudou significativamente em 2026: Qwen3-VL e Gemma 4 agora são as opções mais fortes, e o Llama 3.2 Vision não carrega mais nas versões atuais do Ollama.</strong> Cada modelo restante tem uma força e um perfil de VRAM próprios.',
          'O Qwen3-VL é a família de modelos de visão-linguagem aberta mais forte disponível no Ollama — lidera em OCR, gráficos, diagramas e compreensão de capturas de tela/UI, e vai de um modelo de 2B para dispositivos edge até uma variante de 235B em mixture-of-experts. O Gemma 4 traz visão nativa em todos os tamanhos (2B–31B) junto com chamadas de ferramentas, tornando-o a melhor escolha quando um único modelo precisa enxergar imagens e chamar ferramentas. O LLaVA continua sendo o ponto de partida mais seguro pela ampla compatibilidade com clientes. O Qwen2.5-VL, a geração anterior da Qwen, ainda funciona e continua sendo uma opção leve válida se você já o tiver baixado.',
          'Todos os modelos de visão carregam um codificador de imagem junto aos pesos do LLM. Esse codificador adiciona 1–3 GB de VRAM além do que o modelo base apenas de texto precisa — considere esse overhead ao verificar seu orçamento de VRAM.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '<strong>O Llama 3.2 Vision está atualmente quebrado no Ollama.</strong> Desde que o Ollama v0.30.0 (maio de 2026) passou a carregar modelos com base no llama.cpp, o llama3.2-vision falha com <code>Error: unknown model architecture: "mllama"</code> — a arquitetura mllama nunca foi adicionada ao llama.cpp. Isso ainda não foi resolvido no Ollama v0.33.2 (agosto de 2026). Use Qwen3-VL ou Gemma 4 no lugar dele, ou mantenha uma instalação do Ollama anterior à v0.30.0 se precisar especificamente do Llama 3.2 Vision.',
          },
        ],
      },
      body2: {
        title: 'Requisitos de VRAM para visão',
        content: [
          '<strong>Cada modelo de visão precisa de mais VRAM que seu equivalente apenas de texto.</strong> Um modelo de visão de 7–8B normalmente requer 7–9 GB de VRAM, não os ~6 GB que você orçaria para um modelo de texto de tamanho semelhante.',
          'Para OCR, gráficos e análise de documentos, o Qwen3-VL 8B é a opção forte mais eficiente em VRAM. Para visão mais chamadas de ferramentas em um único modelo, as variantes de 12B ou 26B-A4B MoE do Gemma 4 cabem em 8–14 GB. Para o guia completo sobre modelos locais multimodais e correspondência por caso de uso, veja o <a href="/pt/local-llms/multimodal-local-llms" class="text-primary hover:underline">guia de LLMs locais multimodais</a>.',
        ],
        columns: ['Modelo', 'VRAM em Q4', 'Capacidade de imagem'],
        rows: [
          { 'Modelo': 'LLaVA 7B', 'VRAM em Q4': '~7 GB', 'Capacidade de imagem': 'Perguntas e respostas gerais sobre imagens, ampla compatibilidade' },
          { 'Modelo': 'Qwen3-VL 8B', 'VRAM em Q4': '~8 GB', 'Capacidade de imagem': 'OCR, gráficos, capturas de tela, multilíngue' },
          { 'Modelo': 'Gemma 4 (12B)', 'VRAM em Q4': '~8 GB', 'Capacidade de imagem': 'Visão + chamadas de ferramentas' },
          { 'Modelo': 'Gemma 4 (26B-A4B MoE)', 'VRAM em Q4': '~14 GB', 'Capacidade de imagem': 'Visão + chamadas de ferramentas, maior qualidade' },
          { 'Modelo': 'Llama 3.2 Vision 11B', 'VRAM em Q4': '~10 GB', 'Capacidade de imagem': '⚠️ Quebrado no Ollama v0.30.0+ (erro mllama)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre modelos de visão do Ollama',
        faqs: [
          {
            q: 'Como envio uma imagem ao Ollama via API?',
            a: 'Faça um POST para o endpoint <code>/api/chat</code> com a imagem como string base64 no array <code>images</code>. Corpo JSON mínimo funcional: <code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> Veja <a href="/pt/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">Qwen 3 no Ollama</a> para uma opção multimodal com forte suporte a chamadas de ferramentas.',
          },
          {
            q: 'Por que o llama3.2-vision falha com "unknown model architecture: mllama"?',
            a: 'O Ollama v0.30.0 (maio de 2026) passou a carregar modelos com base no llama.cpp, que nunca recebeu suporte para a arquitetura mllama usada pelo Llama 3.2 Vision. Isso quebra o llama3.2-vision no Ollama v0.30.0 e em todas as versões seguintes, incluindo a v0.33.2. Ainda não há correção oficial: use Qwen3-VL ou Gemma 4 no lugar dele, ou mantenha uma instalação do Ollama anterior à v0.30.0 só para esse modelo.',
          },
          {
            q: 'Os modelos de visão podem fazer OCR (ler texto de imagens)?',
            a: 'Sim, mas a qualidade varia. O Qwen3-VL é atualmente o melhor em OCR entre os modelos de visão do Ollama que funcionam — o Llama 3.2 Vision era a escolha anterior, mas está quebrado no Ollama v0.30.0 e versões mais novas. O LLaVA 7B consegue ler texto claramente impresso, mas tem dificuldade com caligrafia ou fontes pequenas.',
          },
          {
            q: 'Qual modelo de visão do Ollama é melhor para gráficos e diagramas?',
            a: 'O Qwen3-VL. Ele lidera em gráficos, tabelas, diagramas e compreensão de capturas de tela, superando o LLaVA e a geração anterior Qwen2.5-VL nos benchmarks de compreensão de documentos.',
          },
          {
            q: 'Os modelos de visão suportam múltiplas imagens em um único prompt?',
            a: 'O suporte varia por modelo e versão do Ollama. LLaVA e Qwen2.5-VL atualmente processam uma imagem por turno no Ollama. Qwen3-VL e Gemma 4 suportam entradas de múltiplas imagens em configurações de contexto mais longo — confira o limite atual na página da biblioteca do Ollama de cada modelo.',
          },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[Rodar o Qwen 3 no Ollama](/pt/prompt-bites/can-you-run-qwen3-on-ollama) -- opção multimodal com chamadas de ferramentas',
          '[Modelos Ollama com contexto de 128K](/pt/prompt-bites/ollama-128k-context-models) -- long context models',
          '[Guia de LLMs locais multimodais](/pt/local-llms/multimodal-local-llms) -- guia completo de modelos de visão locais',
          '[Melhores modelos de visão locais 2026](/pt/power-local-llm/local-vision-models-llava-ollama-2026) -- todos os modelos de visão, todas as GPUs',
        ],
      },
    },
  },
  es: {
    theme: 'Ollama',
    heroImage: '/images/which-ollama-models-support-vision-overview-hero-es.webp',
    title: '¿Qué modelos de Ollama son compatibles con visión?',
    seoTitle: 'Modelos de visión de Ollama 2026: Qwen3-VL, Gemma 4, LLaVA',
    metaDescription: 'Modelos de visión de Ollama en 2026: Qwen3-VL y Gemma 4 lideran, LLaVA es el respaldo seguro. Llama 3.2 Vision está roto (error mllama) — la solución y la VRAM.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    quickAnswerTop: {
      es: {
        question: '¿Qué modelos de Ollama son compatibles con visión?',
        answer: 'Los mejores modelos de visión de Ollama en 2026 son Qwen3-VL y Gemma 4, ambos nativamente multimodales. LLaVA sigue siendo el respaldo más seguro por su amplia compatibilidad. Llama 3.2 Vision está actualmente roto en Ollama ("unknown model architecture: mllama") — usa Qwen3-VL o Gemma 4 en su lugar.',
        bullets: [
          'qwen3-vl: la familia de visión más potente, ideal para OCR, gráficos y capturas de pantalla',
          'gemma4: visión integrada en cada tamaño, más llamadas a herramientas',
          'llava: el respaldo más seguro, la mayor compatibilidad con clientes',
          'llama3.2-vision: roto en Ollama v0.30.0+ ("unknown model architecture: mllama")',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Desde septiembre de 2026, los modelos de visión líderes de Ollama son Qwen3-VL y Gemma 4 — ambos reemplazaron a la generación anterior Qwen2.5-VL/Gemma 3',
          'Llama 3.2 Vision está actualmente roto en Ollama v0.30.0 y versiones posteriores: falla con "Error: unknown model architecture: mllama" porque el nuevo motor de Ollama basado en llama.cpp no soporta mllama',
          'LLaVA 7B sigue siendo el respaldo más seguro (~7 GB de VRAM, funciona en cualquier versión de Ollama)',
          'Usa Qwen3-VL para OCR, gráficos y capturas de pantalla; usa Gemma 4 cuando necesites visión y llamadas a herramientas en un solo modelo',
        ],
      },
      body1: {
        title: 'Los principales modelos de visión en Ollama',
        content: [
          '<strong>El catálogo de visión de Ollama cambió mucho en 2026: Qwen3-VL y Gemma 4 son ahora las opciones más fuertes, y Llama 3.2 Vision ya no carga en las versiones actuales de Ollama.</strong> Cada modelo restante tiene una fortaleza y un perfil de VRAM propios.',
          'Qwen3-VL es la familia de modelos de visión-lenguaje abierta más potente disponible en Ollama — lidera en OCR, gráficos, diagramas y comprensión de capturas de pantalla/UI, y va desde un modelo de 2B para dispositivos edge hasta una variante de 235B en mixture-of-experts. Gemma 4 integra visión nativa en cada tamaño (2B–31B) junto con llamadas a herramientas, lo que lo convierte en la mejor opción cuando un solo modelo necesita ver imágenes y llamar a herramientas. LLaVA sigue siendo el punto de partida más seguro por su amplia compatibilidad con clientes. Qwen2.5-VL, la generación anterior de Qwen, sigue funcionando y continúa siendo una opción ligera válida si ya la tienes descargada.',
          'Todos los modelos de visión cargan un codificador de imagen junto a los pesos del LLM. Este codificador añade entre 1 y 3 GB de VRAM sobre lo que necesita el modelo base solo de texto — ten en cuenta este overhead al revisar tu presupuesto de VRAM.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '<strong>Llama 3.2 Vision está actualmente roto en Ollama.</strong> Desde que Ollama v0.30.0 (mayo de 2026) pasó a cargar modelos sobre llama.cpp, llama3.2-vision falla con <code>Error: unknown model architecture: "mllama"</code> — la arquitectura mllama nunca se añadió a llama.cpp. Esto sigue sin resolverse en Ollama v0.33.2 (agosto de 2026). Usa Qwen3-VL o Gemma 4 en su lugar, o conserva una instalación de Ollama anterior a la v0.30.0 si necesitas específicamente Llama 3.2 Vision.',
          },
        ],
      },
      body2: {
        title: 'Requisitos de VRAM para visión',
        content: [
          '<strong>Cada modelo de visión necesita más VRAM que su equivalente solo de texto.</strong> Un modelo de visión de 7–8B normalmente requiere entre 7 y 9 GB de VRAM, no los ~6 GB que presupuestarías para un modelo de texto de tamaño similar.',
          'Para OCR, gráficos y análisis de documentos, Qwen3-VL 8B es la opción potente más eficiente en VRAM. Para visión más llamadas a herramientas en un solo modelo, las variantes de 12B o 26B-A4B MoE de Gemma 4 caben en 8–14 GB. Para la guía completa sobre modelos locales multimodales y la elección según el caso de uso, consulta la <a href="/es/local-llms/multimodal-local-llms" class="text-primary hover:underline">guía de LLM locales multimodales</a>.',
        ],
        columns: ['Modelo', 'VRAM en Q4', 'Capacidad de imagen'],
        rows: [
          { 'Modelo': 'LLaVA 7B', 'VRAM en Q4': '~7 GB', 'Capacidad de imagen': 'Preguntas y respuestas generales sobre imágenes, amplia compatibilidad' },
          { 'Modelo': 'Qwen3-VL 8B', 'VRAM en Q4': '~8 GB', 'Capacidad de imagen': 'OCR, gráficos, capturas de pantalla, multilingüe' },
          { 'Modelo': 'Gemma 4 (12B)', 'VRAM en Q4': '~8 GB', 'Capacidad de imagen': 'Visión + llamadas a herramientas' },
          { 'Modelo': 'Gemma 4 (26B-A4B MoE)', 'VRAM en Q4': '~14 GB', 'Capacidad de imagen': 'Visión + llamadas a herramientas, mayor calidad' },
          { 'Modelo': 'Llama 3.2 Vision 11B', 'VRAM en Q4': '~10 GB', 'Capacidad de imagen': '⚠️ Roto en Ollama v0.30.0+ (error mllama)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre los modelos de visión de Ollama',
        faqs: [
          {
            q: '¿Cómo envío una imagen a Ollama a través de la API?',
            a: 'Haz un POST al endpoint <code>/api/chat</code> con la imagen como cadena base64 en el array <code>images</code>. Cuerpo JSON mínimo funcional: <code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> Consulta <a href="/es/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">Qwen 3 en Ollama</a> para una opción multimodal con soporte potente de llamadas a herramientas.',
          },
          {
            q: '¿Por qué llama3.2-vision falla con "unknown model architecture: mllama"?',
            a: 'Ollama v0.30.0 (mayo de 2026) pasó a cargar modelos sobre llama.cpp, que nunca recibió soporte para la arquitectura mllama que usa Llama 3.2 Vision. Esto rompe llama3.2-vision en Ollama v0.30.0 y todas las versiones posteriores, incluida la v0.33.2. Todavía no hay una solución oficial: usa Qwen3-VL o Gemma 4 en su lugar, o conserva una instalación de Ollama anterior a la v0.30.0 solo para este modelo.',
          },
          {
            q: '¿Pueden los modelos de visión hacer OCR (leer texto de imágenes)?',
            a: 'Sí, pero la calidad varía. Qwen3-VL es actualmente el más potente para OCR entre los modelos de visión de Ollama que funcionan — Llama 3.2 Vision era la opción anterior, pero está roto en Ollama v0.30.0 y versiones más recientes. LLaVA 7B puede leer texto impreso con claridad, pero tiene dificultades con la escritura a mano o las fuentes pequeñas.',
          },
          {
            q: '¿Qué modelo de visión de Ollama es el mejor para gráficos y diagramas?',
            a: 'Qwen3-VL. Lidera en gráficos, tablas, diagramas y comprensión de capturas de pantalla, superando a LLaVA y a la generación anterior Qwen2.5-VL en los benchmarks de comprensión de documentos.',
          },
          {
            q: '¿Los modelos de visión admiten múltiples imágenes en un solo prompt?',
            a: 'El soporte varía según el modelo y la versión de Ollama. LLaVA y Qwen2.5-VL procesan actualmente una imagen por turno en Ollama. Qwen3-VL y Gemma 4 admiten entradas de múltiples imágenes en configuraciones de contexto más largo — consulta el límite actual en la página de la biblioteca de Ollama de cada modelo.',
          },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[Ejecutar Qwen 3 en Ollama](/es/prompt-bites/can-you-run-qwen3-on-ollama) -- opción multimodal con llamadas a herramientas',
          '[Modelos Ollama con contexto de 128K](/es/prompt-bites/ollama-128k-context-models) -- long context models',
          '[Guía de LLM locales multimodales](/es/local-llms/multimodal-local-llms) -- guía completa de modelos de visión locales',
          '[Mejores modelos de visión locales 2026](/es/power-local-llm/local-vision-models-llava-ollama-2026) -- todos los modelos de visión, todas las GPU',
        ],
      },
    },
  },
  ar: {
    theme: 'Ollama',
    heroImage: '/images/which-ollama-models-support-vision-overview-hero-ar.webp',
    title: 'ما نماذج ⁨Ollama⁩ التي تدعم الرؤية؟',
    seoTitle: 'نماذج ⁨Ollama⁩ للرؤية ⁨2026⁩: ⁨Qwen3-VL⁩ و ⁨Gemma 4⁩ و ⁨LLaVA⁩',
    metaDescription: 'نماذج رؤية ⁨Ollama⁩ ⁨2026⁩: ⁨Qwen3-VL⁩ و ⁨Gemma 4⁩ في الصدارة، و⁨LLaVA⁩ هو الخيار الآمن. ⁨Llama 3.2 Vision⁩ معطّل (خطأ ⁨mllama⁩) — الحل ومتطلبات ⁨VRAM⁩.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    quickAnswerTop: {
      ar: {
        question: 'ما نماذج Ollama التي تدعم الرؤية؟',
        answer: 'أفضل نماذج الرؤية في Ollama لعام 2026 هي Qwen3-VL و Gemma 4، وكلاهما متعدد الوسائط أصليًا. يبقى LLaVA الخيار الأكثر أمانًا لتوافقه الواسع. Llama 3.2 Vision معطّل حاليًا في Ollama ("unknown model architecture: mllama") — استخدم Qwen3-VL أو Gemma 4 بدلًا منه.',
        bullets: [
          'qwen3-vl: أقوى عائلة رؤية، الأفضل لـ OCR والرسوم البيانية ولقطات الشاشة',
          'gemma4: الرؤية مدمجة في كل الأحجام، إضافة إلى استدعاء الأدوات',
          'llava: الخيار الأكثر أمانًا، أوسع توافق مع العملاء',
          'llama3.2-vision: معطّل في Ollama v0.30.0 وما بعده ("unknown model architecture: mllama")',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'اعتبارًا من سبتمبر 2026، نماذج الرؤية الرائدة في Ollama هي Qwen3-VL و Gemma 4 — وكلاهما حلّ محل الجيل السابق Qwen2.5-VL / Gemma 3',
          'Llama 3.2 Vision معطّل حاليًا على Ollama الإصدار v0.30.0 وما بعده: يفشل بخطأ "Error: unknown model architecture: mllama" لأن محرك Ollama الجديد المبني على llama.cpp لا يدعم mllama',
          'يبقى LLaVA 7B الخيار الأكثر أمانًا (~7 GB VRAM، يعمل على أي إصدار من Ollama)',
          'استخدم Qwen3-VL لـ OCR والرسوم البيانية ولقطات الشاشة؛ استخدم Gemma 4 عند الحاجة إلى الرؤية واستدعاء الأدوات في نموذج واحد',
        ],
      },
      body1: {
        title: 'أبرز نماذج الرؤية في Ollama',
        content: [
          '<strong>تغيّرت مجموعة نماذج الرؤية في Ollama بشكل كبير خلال 2026: أصبح Qwen3-VL و Gemma 4 الآن الخيارين الأقوى، ولم يعد Llama 3.2 Vision يعمل على إصدارات Ollama الحالية.</strong> لكل نموذج متبقٍ قوة مميزة وملف VRAM خاص.',
          'يُعد Qwen3-VL أقوى عائلة نماذج رؤية-لغة مفتوحة متاحة على Ollama — يتصدر في OCR والرسوم البيانية والمخططات وفهم لقطات الشاشة وواجهات المستخدم، ويمتد من نموذج 2B للأجهزة الطرفية إلى نسخة 235B بتقنية mixture-of-experts. يضيف Gemma 4 رؤية أصلية إلى كل الأحجام (2B–31B) إلى جانب استدعاء الأدوات، مما يجعله الخيار الأفضل عندما يحتاج نموذج واحد إلى رؤية الصور واستدعاء الأدوات معًا. يبقى LLaVA نقطة البداية الأكثر أمانًا لتوافقه الواسع مع العملاء. لا يزال Qwen2.5-VL، جيل Qwen السابق، يعمل ويظل خيارًا خفيفًا صالحًا إذا كان محملًا لديك بالفعل.',
          'تحمّل جميع نماذج الرؤية مشفّر صور إلى جانب أوزان نموذج اللغة. يضيف هذا المشفّر 1–3 GB VRAM فوق ما يحتاجه النموذج الأساسي النصي فقط — ضع هذا الحمل الإضافي في حسبانك عند مراجعة ميزانية VRAM.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '<strong>Llama 3.2 Vision معطّل حاليًا على Ollama.</strong> منذ أن انتقل Ollama v0.30.0 (مايو 2026) إلى تحميل النماذج عبر llama.cpp، أصبح llama3.2-vision يفشل بخطأ <code>Error: unknown model architecture: "mllama"</code> — لم تُضَف بنية mllama إلى llama.cpp قط. لا يزال هذا دون حل حتى إصدار Ollama v0.33.2 (أغسطس 2026). استخدم Qwen3-VL أو Gemma 4 بدلًا منه، أو احتفظ بتثبيت Ollama سابق لإصدار v0.30.0 إذا كنت بحاجة تحديدًا إلى Llama 3.2 Vision.',
          },
        ],
      },
      body2: {
        title: 'متطلبات VRAM للرؤية',
        content: [
          '<strong>كل نموذج رؤية يحتاج VRAM أكثر من نظيره النصي.</strong> يتطلب نموذج رؤية بحجم 7–8B عادةً 7–9 GB VRAM، وليس ~6 GB التي ستُخصصها لنموذج نصي بحجم مشابه.',
          'لـ OCR والرسوم البيانية وتحليل المستندات، يُعد Qwen3-VL 8B الخيار القوي الأكثر كفاءة في VRAM. للرؤية واستدعاء الأدوات في نموذج واحد، تتسع نسختا Gemma 4 بحجم 12B أو 26B-A4B MoE ضمن 8–14 GB. للدليل الكامل حول نماذج اللغة المحلية متعددة الوسائط ومطابقة حالات الاستخدام، راجع <a href="/ar/local-llms/multimodal-local-llms" class="text-primary hover:underline">دليل نماذج اللغة المحلية متعددة الوسائط</a>.',
        ],
        columns: ['الطراز', 'VRAM بتحديد Q4', 'قدرة معالجة الصور'],
        rows: [
          { 'الطراز': 'LLaVA 7B', 'VRAM بتحديد Q4': '~7 GB', 'قدرة معالجة الصور': 'أسئلة وأجوبة عامة على الصور، توافق واسع' },
          { 'الطراز': 'Qwen3-VL 8B', 'VRAM بتحديد Q4': '~8 GB', 'قدرة معالجة الصور': 'OCR، رسوم بيانية، لقطات شاشة، متعدد اللغات' },
          { 'الطراز': 'Gemma 4 (12B)', 'VRAM بتحديد Q4': '~8 GB', 'قدرة معالجة الصور': 'رؤية + استدعاء أدوات' },
          { 'الطراز': 'Gemma 4 (26B-A4B MoE)', 'VRAM بتحديد Q4': '~14 GB', 'قدرة معالجة الصور': 'رؤية + استدعاء أدوات، جودة أعلى' },
          { 'الطراز': 'Llama 3.2 Vision 11B', 'VRAM بتحديد Q4': '~10 GB', 'قدرة معالجة الصور': '⚠️ معطّل في Ollama v0.30.0+ (خطأ mllama)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول نماذج رؤية Ollama',
        faqs: [
          {
            q: 'كيف أرسل صورة إلى Ollama عبر الواجهة البرمجية؟',
            a: 'أرسل طلب POST إلى نقطة النهاية <code>/api/chat</code> مع الصورة كسلسلة base64 في مصفوفة <code>images</code>. نص JSON الأدنى المطلوب: <code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> راجع <a href="/ar/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">Qwen 3 على Ollama</a> لخيار متعدد الوسائط مع دعم قوي لاستدعاء الأدوات.',
          },
          {
            q: 'لماذا يفشل llama3.2-vision بخطأ "unknown model architecture: mllama"؟',
            a: 'انتقل Ollama v0.30.0 (مايو 2026) إلى تحميل النماذج عبر llama.cpp، الذي لم يحصل قط على دعم لبنية mllama التي يستخدمها Llama 3.2 Vision. هذا يعطّل llama3.2-vision على Ollama v0.30.0 وكل إصدار بعده، بما في ذلك v0.33.2. لا يوجد حل رسمي بعد: استخدم Qwen3-VL أو Gemma 4 بدلًا منه، أو احتفظ بتثبيت Ollama سابق لإصدار v0.30.0 لهذا النموذج تحديدًا.',
          },
          {
            q: 'هل تستطيع نماذج الرؤية إجراء OCR (قراءة النص من الصور)؟',
            a: 'نعم، لكن الجودة تتفاوت. Qwen3-VL هو الأقوى حاليًا في OCR بين نماذج رؤية Ollama العاملة — كان Llama 3.2 Vision الخيار السابق، لكنه معطّل على Ollama v0.30.0وما بعده. LLaVA 7B يستطيع قراءة النص المطبوع بوضوح، لكنه يواجه صعوبة مع الخط اليدوي أو الخطوط الصغيرة.',
          },
          {
            q: 'ما أفضل نموذج رؤية في Ollama للرسوم البيانية والمخططات؟',
            a: 'Qwen3-VL. يتصدر في الرسوم البيانية والجداول والمخططات وفهم لقطات الشاشة، ويتفوق على LLaVA وعلى جيل Qwen2.5-VL السابق في معايير فهم المستندات.',
          },
          {
            q: 'هل تدعم نماذج الرؤية صورًا متعددة في موجّه واحد؟',
            a: 'يتفاوت الدعم حسب النموذج وإصدار Ollama. يعالج LLaVA و Qwen2.5-VL حاليًا صورة واحدة لكل دور في Ollama. يدعم Qwen3-VL و Gemma 4 مدخلات صور متعددة في إعدادات السياق الأطول — تحقق من الحد الحالي في صفحة مكتبة Ollama الخاصة بكل نموذج.',
          },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[تشغيل Qwen 3 على Ollama](/ar/prompt-bites/can-you-run-qwen3-on-ollama) -- خيار متعدد الوسائط مع استدعاء الأدوات',
          '[نماذج Ollama ذات سياق 128K](/ar/prompt-bites/ollama-128k-context-models) -- long context models',
          '[دليل نماذج اللغة المحلية متعددة الوسائط](/ar/local-llms/multimodal-local-llms) -- دليل كامل لنماذج الرؤية المحلية',
          '[أفضل نماذج الرؤية المحلية 2026](/ar/power-local-llm/local-vision-models-llava-ollama-2026) -- كل نموذج رؤية، كل فئة GPU',
        ],
      },
    },
  },
  ko: {
    theme: 'Ollama',
    heroImage: '/images/which-ollama-models-support-vision-overview-hero-ko.webp',
    title: 'Ollama에서 비전을 지원하는 모델은 무엇인가요?',
    seoTitle: 'Ollama 비전 모델 2026: Qwen3-VL, Gemma 4, LLaVA',
    metaDescription: 'Ollama 비전 모델 2026: Qwen3-VL과 Gemma 4가 선두이며 LLaVA는 안전한 대안입니다. Llama 3.2 Vision은 현재 오류(mllama)로 작동하지 않습니다 — 해결 방법과 VRAM 요구사항을 정리합니다.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    targetKeywords: [
      'Ollama 비전 모델',
      'Ollama 이미지 인식 모델',
      'Qwen3-VL Ollama 한국어',
      'Ollama 멀티모달 모델 2026',
      'Gemma 4 Ollama 설치',
      'Ollama mllama 오류',
    ],
    readTime: '4분 분량',
    quickAnswerTop: {
      ko: {
        question: 'Ollama에서 비전을 지원하는 모델은 무엇인가요?',
        answer: '2026년 기준 Ollama 최고의 비전 모델은 Qwen3-VL과 Gemma 4이며, 둘 다 기본적으로 멀티모달입니다. LLaVA는 폭넓은 호환성을 갖춘 가장 안전한 대안으로 남아 있습니다. Llama 3.2 Vision은 현재 Ollama에서 작동하지 않습니다("unknown model architecture: mllama") — 대신 Qwen3-VL이나 Gemma 4를 사용하십시오.',
        bullets: [
          'qwen3-vl: 가장 강력한 비전 계열, OCR·차트·스크린샷 분석에 최적',
          'gemma4: 모든 크기에 비전이 내장되어 있으며 툴 콜링도 지원',
          'llava: 가장 안전한 대안, 가장 폭넓은 클라이언트 호환성',
          'llama3.2-vision: Ollama v0.30.0 이상에서 작동 불가("unknown model architecture: mllama")',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '2026년 9월 기준, Ollama를 선도하는 비전 모델은 Qwen3-VL과 Gemma 4입니다. 둘 다 이전의 Qwen2.5-VL / Gemma 3 세대를 대체했습니다',
          'Llama 3.2 Vision은 현재 Ollama v0.30.0 이상에서 작동하지 않습니다: "Error: unknown model architecture: mllama" 오류가 발생하며, 이는 Ollama의 새 llama.cpp 기반 엔진이 mllama를 지원하지 않기 때문입니다',
          'LLaVA 7B는 여전히 가장 안전한 대안입니다 (~7 GB VRAM, 모든 Ollama 버전에서 작동)',
          'OCR·차트·스크린샷에는 Qwen3-VL을, 하나의 모델에서 비전과 툴 콜링이 모두 필요하면 Gemma 4를 사용하십시오',
        ],
      },
      body1: {
        title: 'Ollama의 주요 비전 모델',
        content: [
          '<strong>2026년 Ollama의 비전 라인업은 크게 바뀌었습니다: Qwen3-VL과 Gemma 4가 이제 가장 강력한 선택지가 되었고, Llama 3.2 Vision은 현재 Ollama 버전에서 더 이상 로드되지 않습니다.</strong> 남아 있는 각 모델은 고유한 강점과 VRAM 프로필을 가지고 있습니다.',
          'Qwen3-VL은 Ollama에서 사용할 수 있는 가장 강력한 오픈 비전-언어 모델 계열입니다. OCR, 차트, 다이어그램, 스크린샷/UI 이해에서 앞서 있으며, 엣지용 2B 모델부터 235B 규모의 mixture-of-experts 버전까지 다양합니다. Gemma 4는 모든 크기(2B–31B)에 네이티브 비전을 내장하고 툴 콜링도 지원해, 하나의 모델로 이미지를 이해하고 도구도 호출해야 할 때 가장 좋은 선택입니다. LLaVA는 폭넓은 클라이언트 호환성을 갖춘 가장 안전한 시작점으로 남아 있습니다. 이전 세대인 Qwen2.5-VL도 여전히 작동하며, 이미 다운로드했다면 유효한 경량 대안입니다.',
          '모든 비전 모델은 LLM 가중치와 함께 이미지 인코더를 로드합니다. 이 인코더는 텍스트 전용 기본 모델에 필요한 VRAM보다 1~3 GB를 추가로 요구합니다. VRAM 예산을 검토할 때 이 오버헤드를 반드시 고려하십시오.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '<strong>Llama 3.2 Vision은 현재 Ollama에서 작동하지 않습니다.</strong> Ollama v0.30.0(2026년 5월)이 모델 로딩을 llama.cpp 기반으로 전환한 이후, llama3.2-vision은 <code>Error: unknown model architecture: "mllama"</code> 오류로 실패합니다 — mllama 아키텍처는 llama.cpp에 한 번도 추가되지 않았습니다. 이 문제는 Ollama v0.33.2(2026년 8월) 기준으로도 아직 해결되지 않았습니다. 대신 Qwen3-VL이나 Gemma 4를 사용하거나, Llama 3.2 Vision이 꼭 필요하다면 v0.30.0 이전 버전의 Ollama를 유지하십시오.',
          },
        ],
      },
      body2: {
        title: '비전 모델의 VRAM 요구사항',
        content: [
          '<strong>모든 비전 모델은 텍스트 전용 버전보다 더 많은 VRAM이 필요합니다.</strong> 7~8B 비전 모델은 일반적으로 7~9 GB VRAM을 요구합니다. 비슷한 크기의 텍스트 전용 모델에 할당하는 ~6 GB와는 다릅니다.',
          'OCR, 차트, 문서 분석에는 Qwen3-VL 8B가 VRAM 효율이 가장 뛰어난 강력한 선택지입니다. 하나의 모델에서 비전과 툴 콜링을 모두 사용하려면 Gemma 4의 12B 또는 26B-A4B MoE 버전이 8~14 GB에 들어맞습니다. 멀티모달 로컬 모델에 대한 전체 가이드는 <a href="/ko/local-llms/multimodal-local-llms" class="text-primary hover:underline">멀티모달 로컬 LLM 가이드</a>를 참조하십시오.',
        ],
        columns: ['모델', 'Q4 기준 VRAM', '이미지 처리 능력'],
        rows: [
          { '모델': 'LLaVA 7B', 'Q4 기준 VRAM': '~7 GB', '이미지 처리 능력': '일반 이미지 Q&A, 폭넓은 호환성' },
          { '모델': 'Qwen3-VL 8B', 'Q4 기준 VRAM': '~8 GB', '이미지 처리 능력': 'OCR, 차트, 스크린샷, 다국어' },
          { '모델': 'Gemma 4 (12B)', 'Q4 기준 VRAM': '~8 GB', '이미지 처리 능력': '비전 + 툴 콜링' },
          { '모델': 'Gemma 4 (26B-A4B MoE)', 'Q4 기준 VRAM': '~14 GB', '이미지 처리 능력': '비전 + 툴 콜링, 더 높은 품질' },
          { '모델': 'Llama 3.2 Vision 11B', 'Q4 기준 VRAM': '~10 GB', '이미지 처리 능력': '⚠️ Ollama v0.30.0+에서 작동 불가 (mllama 오류)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Ollama 비전 모델에 관한 빠른 답변',
        faqs: [
          {
            q: 'API를 통해 Ollama에 이미지를 보내려면 어떻게 해야 합니까?',
            a: '<code>/api/chat</code> 엔드포인트에 POST 요청을 보내면서 <code>images</code> 배열에 base64 문자열로 이미지를 포함하십시오. 최소 작동 JSON 본문: <code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> 강력한 툴 콜링 지원을 갖춘 멀티모달 옵션은 <a href="/ko/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">Ollama에서 Qwen 3 실행하기</a>를 참조하십시오.',
          },
          {
            q: 'llama3.2-vision이 "unknown model architecture: mllama" 오류로 실패하는 이유는 무엇입니까?',
            a: 'Ollama v0.30.0(2026년 5월)이 모델 로딩을 llama.cpp 기반으로 전환했는데, llama.cpp는 Llama 3.2 Vision이 사용하는 mllama 아키텍처를 한 번도 지원한 적이 없습니다. 이로 인해 llama3.2-vision은 Ollama v0.30.0과 그 이후 모든 버전(v0.33.2 포함)에서 작동하지 않습니다. 아직 공식적인 해결책은 없습니다: 대신 Qwen3-VL이나 Gemma 4를 사용하거나, 이 모델만을 위해 v0.30.0 이전 버전의 Ollama를 별도로 유지하십시오.',
          },
          {
            q: '비전 모델은 OCR(이미지에서 텍스트 읽기)을 수행할 수 있습니까?',
            a: '네, 가능합니다. 다만 품질은 모델에 따라 다릅니다. 현재 정상 작동하는 Ollama 비전 모델 중에서는 Qwen3-VL의 OCR 성능이 가장 뛰어납니다 — 이전에는 Llama 3.2 Vision이 최선이었지만 Ollama v0.30.0 이상에서는 작동하지 않습니다. LLaVA 7B는 인쇄된 텍스트를 명확하게 읽을 수 있지만, 손글씨나 작은 글꼴에서는 어려움을 겪습니다.',
          },
          {
            q: '차트와 다이어그램 분석에 가장 적합한 Ollama 비전 모델은 무엇입니까?',
            a: 'Qwen3-VL입니다. 차트, 표, 다이어그램, 스크린샷 이해에서 앞서 있으며, 문서 이해 벤치마크에서 LLaVA와 이전 세대 Qwen2.5-VL을 능가합니다.',
          },
          {
            q: '비전 모델은 하나의 프롬프트에서 여러 이미지를 지원합니까?',
            a: '지원 여부는 모델과 Ollama 버전에 따라 다릅니다. LLaVA와 Qwen2.5-VL은 현재 Ollama에서 턴당 이미지 1장만 처리합니다. Qwen3-VL과 Gemma 4는 더 긴 컨텍스트 설정에서 다중 이미지 입력을 지원합니다 — 현재 한도는 각 모델의 Ollama 라이브러리 페이지에서 확인하십시오.',
          },
        ],
      },
      relatedReading: {
        title: '관련 자료',
        items: [
          '[Ollama에서 Qwen 3 실행하기](/ko/prompt-bites/can-you-run-qwen3-on-ollama) -- 툴 콜링을 지원하는 멀티모달 옵션',
          '[Ollama 128K 컨텍스트 모델](/ko/prompt-bites/ollama-128k-context-models) -- long context models',
          '[멀티모달 로컬 LLM 가이드](/ko/local-llms/multimodal-local-llms) -- 로컬 비전 모델 완전 가이드',
          '[2026년 최고의 로컬 비전 모델](/ko/power-local-llm/local-vision-models-llava-ollama-2026) -- 모든 비전 모델, 모든 GPU 등급',
        ],
      },
    },
  },
}

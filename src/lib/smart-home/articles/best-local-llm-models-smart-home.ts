import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Best Local LLM Models for Smart Home Control (2026)',
    seoTitle: 'Best Local LLMs for Home Assistant (2026)',
    intro:
      'The best local LLM models for smart home control are small, fast, instruction-following models with reliable function-calling — not the largest model your hardware can hold. This guide explains what actually matters for home control, gives a shortlist of suitable small models, compares them, and maps picks to hardware budgets, linking out to deeper model guides rather than re-ranking the whole field.',
    metaDescription:
      'The best local LLM models for smart home control in 2026: small, fast, function-calling models that run on modest hardware. Shortlist and picks by budget.',
    twitterDescription:
      'Best local LLM models for Home Assistant control: small, fast, function-calling models over the biggest model you can run. Picks by hardware budget.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users choosing a local model for device control',
    primaryTerm: 'best local LLM for home control',
    targetKeywords: [
      'best local llm for home assistant',
      'best local llm smart home',
      'local llm home control model',
      'function calling local llm',
      'small local llm home automation',
    ],
    leadAnswerBlock:
      '**For smart home control, choose a small instruction model with reliable function-calling — a 3B–8B model is the sweet spot, because home control rewards low latency and structured output over raw capability.** Match the model to your hardware rather than picking the largest one available.',
    quickAnswerTop: {
      en: {
        question: 'What is the best local LLM for smart home control?',
        answer:
          'A small instruction-following model with solid function-calling, typically in the 3B to 8B range, is the best fit for home control because it responds quickly and emits reliable device actions. Models such as Llama 3.2 3B and Qwen2.5 7B are common choices; the right pick depends on your hardware and language needs.',
        bullets: [
          'Prioritise low latency and function-calling over size',
          '3B models suit low-power hardware; 7B–8B suit a mini PC with a GPU',
          'Llama 3.2 3B and Qwen2.5 7B are common starting points',
          'Pick a model with strong support for your spoken language',
          'Larger models add little for simple device control',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What Matters for Home Control', anchor: 'what-matters' },
      { label: 'The Shortlist', anchor: 'shortlist' },
      { label: 'Comparison', anchor: 'comparison' },
      { label: 'By Hardware Budget', anchor: 'by-budget' },
      { label: 'How to Pick', anchor: 'how-to-pick' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'The best local LLM for smart home control is a small (3B–8B) instruction model with reliable function-calling, chosen for low latency over raw size.' },
      { type: 'plain-terms', content: 'Controlling a home does not need a giant model — it needs one that responds fast and reliably outputs structured commands the hub can execute. Small models in the 3B to 8B range do this well and run on modest hardware. The deeper model rankings live in the local-llms cluster; this guide focuses on the home-control angle.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home control rewards low latency and reliable function-calling, not maximum model size',
          'A 3B model fits low-power hardware; a 7B–8B model suits a mini PC with a GPU or NPU',
          'Llama 3.2 3B (Meta) and Qwen2.5 7B (Alibaba) are common, well-supported choices',
          'Pick a model with strong support for the language you speak to it',
          'Larger models add latency with little benefit for simple device control',
          'For deep model rankings and mechanics, link out to the local-llms cluster',
        ],
      },
      whatMatters: {
        id: 'what-matters',
        title: 'What Matters for Home Control',
        content:
          '**Three things decide a good home-control model: latency, reliable function-calling, and size that fits your hardware.** Benchmark leaderboards matter far less here than responsiveness.',
        items: [
          '**Latency:** a voice command should feel near-instant; smaller models on capable hardware respond faster.',
          '**Function-calling:** the model must emit structured device actions reliably — this is the decisive capability.',
          '**Fit:** the model must run comfortably on the box that also hosts Home Assistant — see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      shortlist: {
        id: 'shortlist',
        title: 'The Shortlist',
        content:
          '**These small models are common, well-supported choices for home control across different hardware budgets.** Use a 3B model on light hardware and a 7B–8B model when you have a GPU or NPU.',
        items: [
          '**Llama 3.2 3B (Meta):** a 3-billion-parameter model that runs on modest hardware with good instruction-following and function-calling.',
          '**Qwen2.5 7B (Alibaba):** a strong all-round 7B model with reliable tool use and good multilingual coverage.',
          '**Qwen2.5 3B (Alibaba):** a lighter option when you want lower latency on a CPU or integrated GPU.',
          '**Phi-3.5 Mini 3.8B (Microsoft):** a compact model that punches above its size for instruction-following.',
          '**Gemma 2 2B (Google):** a very small model for the lowest-power hosts where latency is critical.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparison',
        content:
          '**Pick by hardware and language: smaller models for CPU-only or Pi-class hardware, 7B for a GPU-equipped mini PC.** Sizes below are approximate at common 4-bit quantization.',
        columns: ['Model', 'Params', 'Approx. footprint (Q4)', 'Best for'],
        rows: [
          { 'Model': 'Gemma 2 2B', 'Params': '2B', 'Approx. footprint (Q4)': '~1.5–2 GB', 'Best for': 'Lowest-power hosts, lowest latency' },
          { 'Model': 'Llama 3.2 3B', 'Params': '3B', 'Approx. footprint (Q4)': '~2–3 GB', 'Best for': 'Balanced default on modest hardware' },
          { 'Model': 'Qwen2.5 3B', 'Params': '3B', 'Approx. footprint (Q4)': '~2–3 GB', 'Best for': 'Multilingual, low latency' },
          { 'Model': 'Phi-3.5 Mini 3.8B', 'Params': '3.8B', 'Approx. footprint (Q4)': '~2.5–3 GB', 'Best for': 'Strong instruction-following, compact' },
          { 'Model': 'Qwen2.5 7B', 'Params': '7B', 'Approx. footprint (Q4)': '~4–5 GB', 'Best for': 'Best quality with a GPU/NPU' },
        ],
        items: [
          'Footprints are approximate and depend on quantization — for VRAM and quantization depth, link out to the local-llms cluster.',
        ],
      },
      byBudget: {
        id: 'by-budget',
        title: 'Picks by Hardware Budget',
        content:
          '**Choose a 2B–3B model on a Pi or CPU-only mini PC; choose a 7B model when you have a GPU or NPU.** This keeps responses snappy at every tier.',
        items: [
          '**Raspberry Pi / low-power:** Gemma 2 2B or a 3B model, accepting slower responses.',
          '**Mini PC (CPU only):** Llama 3.2 3B or Qwen2.5 3B as a responsive default.',
          '**Mini PC with GPU/NPU:** Qwen2.5 7B for the best quality at acceptable latency — see [best mini PCs for Home Assistant + local AI](/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      howToPick: {
        id: 'how-to-pick',
        title: 'How to Pick',
        content:
          '**Start with a 3B model, confirm latency and reliable device actions, then move to 7B only if quality is lacking.** Test with your real commands before committing.',
        items: [
          'Install via the [Ollama integration](/smart-home/home-assistant-ollama-integration) and test your common commands.',
          'If responses are slow, drop a size or add a GPU/NPU.',
          'If actions are unreliable, prefer a model known for function-calling.',
          'For deep model rankings and mechanics, see [best local LLMs 2026](/local-llms/best-local-llms-2026) (cross-cluster) — this guide stays home-control-specific.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'What is the smallest usable model for home control?', a: 'A 2B model such as Gemma 2 2B is usable for simple device control on low-power hardware, trading some understanding for speed. A 3B model is a better balance if your hardware allows it.' },
          { q: 'Does a home-control model need a GPU?', a: 'No for 2B–3B models, which run on CPU or an integrated GPU. A GPU or NPU mainly lets you run a 7B model at low latency for better understanding. Match the model to your hardware.' },
          { q: 'Which models support function-calling?', a: 'Modern small models including Llama 3.2 and Qwen2.5 support tool/function-calling, which is the capability that lets them emit reliable device actions. Prefer a model documented to support it for home control.' },
          { q: 'What is the best model for a Raspberry Pi?', a: 'A 2B model like Gemma 2 2B, or a small 3B model, is the practical ceiling on a Raspberry Pi, and responses will be slower than on a mini PC. For a snappy assistant, a mini PC with a GPU/NPU is the better host.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — install and test your chosen model',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — the full architecture',
          '[Best Hardware for a Local Smart Home](/smart-home/best-hardware-for-local-smart-home) — match model size to hardware',
          '[Best Local LLMs 2026](/local-llms/best-local-llms-2026) — cross-cluster: deep model rankings',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Local LLM Models for Smart Home Control (2026)',
      description: 'The best local LLM models for smart home control in 2026: small, fast, function-calling models that run on modest hardware. Shortlist and picks by budget.',
      url: 'https://www.promptquorum.com/smart-home/best-local-llm-models-smart-home',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Local LLM' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Function calling' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'What is the smallest usable model for home control?', acceptedAnswer: { '@type': 'Answer', text: 'A 2B model such as Gemma 2 2B is usable for simple device control on low-power hardware. A 3B model is a better balance if your hardware allows it.' } },
        { '@type': 'Question', name: 'Does a home-control model need a GPU?', acceptedAnswer: { '@type': 'Answer', text: 'No for 2B–3B models, which run on CPU or integrated GPU. A GPU or NPU mainly lets you run a 7B model at low latency.' } },
        { '@type': 'Question', name: 'Which models support function-calling?', acceptedAnswer: { '@type': 'Answer', text: 'Modern small models including Llama 3.2 and Qwen2.5 support tool/function-calling, which lets them emit reliable device actions.' } },
        { '@type': 'Question', name: 'What is the best model for a Raspberry Pi?', acceptedAnswer: { '@type': 'Answer', text: 'A 2B model like Gemma 2 2B or a small 3B model is the practical ceiling on a Pi, with slower responses. A mini PC with a GPU/NPU is a better host.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Beste lokale LLM-Modelle für die Smart-Home-Steuerung (2026)',
    seoTitle: 'Beste lokale LLMs für Home Assistant (2026)',
    intro:
      'Die besten lokalen LLM-Modelle für die Smart-Home-Steuerung sind kleine, schnelle, instruktionsfolgende Modelle mit zuverlässigem Function-Calling – nicht das größte Modell, das Ihre Hardware fassen kann. Dieser Leitfaden erklärt, was für die Heimsteuerung wirklich zählt, gibt eine Auswahl geeigneter kleiner Modelle, vergleicht sie und ordnet Empfehlungen Hardware-Budgets zu – und verlinkt für tiefere Modell-Leitfäden, statt das ganze Feld neu zu ordnen.',
    metaDescription:
      'Die besten lokalen LLM-Modelle für die Smart-Home-Steuerung 2026: kleine, schnelle Function-Calling-Modelle, die auf bescheidener Hardware laufen. Auswahl und Empfehlungen nach Budget.',
    twitterDescription:
      'Beste lokale LLM-Modelle für die Home-Assistant-Steuerung: kleine, schnelle Function-Calling-Modelle statt des größten betreibbaren Modells. Empfehlungen nach Hardware-Budget.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Home-Assistant-Nutzer, die ein lokales Modell für die Gerätesteuerung wählen',
    primaryTerm: 'best local LLM for home control',
    targetKeywords: [
      'bestes lokales llm für home assistant',
      'bestes lokales llm smart home',
      'lokales llm modell heimsteuerung',
      'function calling lokales llm',
      'kleines lokales llm heimautomatisierung',
    ],
    leadAnswerBlock:
      '**Für die Smart-Home-Steuerung wählen Sie ein kleines Instruktionsmodell mit zuverlässigem Function-Calling – ein 3B–8B-Modell ist der Sweet Spot, weil Heimsteuerung niedrige Latenz und strukturierte Ausgabe über rohe Fähigkeit belohnt.** Passen Sie das Modell an Ihre Hardware an, statt das größte verfügbare zu wählen.',
    quickAnswerTop: {
      de: {
        question: 'Was ist das beste lokale LLM für die Smart-Home-Steuerung?',
        answer:
          'Ein kleines, instruktionsfolgendes Modell mit solidem Function-Calling, typischerweise im Bereich 3B bis 8B, passt am besten zur Heimsteuerung, weil es schnell antwortet und zuverlässige Geräteaktionen ausgibt. Modelle wie Llama 3.2 3B und Qwen2.5 7B sind verbreitete Wahlen; die richtige Wahl hängt von Ihrer Hardware und Ihren Sprachbedürfnissen ab.',
        bullets: [
          'Priorisieren Sie niedrige Latenz und Function-Calling über Größe',
          '3B-Modelle passen zu stromsparender Hardware; 7B–8B zu einem Mini-PC mit GPU',
          'Llama 3.2 3B und Qwen2.5 7B sind verbreitete Ausgangspunkte',
          'Wählen Sie ein Modell mit starker Unterstützung für Ihre gesprochene Sprache',
          'Größere Modelle bringen für einfache Gerätesteuerung wenig',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Was für die Heimsteuerung zählt', anchor: 'what-matters' },
      { label: 'Die Auswahl', anchor: 'shortlist' },
      { label: 'Vergleich', anchor: 'comparison' },
      { label: 'Nach Hardware-Budget', anchor: 'by-budget' },
      { label: 'Wie man wählt', anchor: 'how-to-pick' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Das beste lokale LLM für die Smart-Home-Steuerung ist ein kleines (3B–8B) Instruktionsmodell mit zuverlässigem Function-Calling, gewählt für niedrige Latenz statt roher Größe.' },
      { type: 'plain-terms', content: 'Ein Zuhause zu steuern braucht kein riesiges Modell – es braucht eines, das schnell antwortet und zuverlässig strukturierte Befehle ausgibt, die der Hub ausführen kann. Kleine Modelle im Bereich 3B bis 8B tun das gut und laufen auf bescheidener Hardware. Die tieferen Modell-Rankings leben im local-llms-Cluster; dieser Leitfaden konzentriert sich auf den Heimsteuerungs-Aspekt.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Heimsteuerung belohnt niedrige Latenz und zuverlässiges Function-Calling, nicht maximale Modellgröße',
          'Ein 3B-Modell passt zu stromsparender Hardware; ein 7B–8B-Modell zu einem Mini-PC mit GPU oder NPU',
          'Llama 3.2 3B (Meta) und Qwen2.5 7B (Alibaba) sind verbreitete, gut unterstützte Wahlen',
          'Wählen Sie ein Modell mit starker Unterstützung für die Sprache, die Sie damit sprechen',
          'Größere Modelle fügen Latenz mit wenig Nutzen für einfache Gerätesteuerung hinzu',
          'Für tiefe Modell-Rankings und -Mechanik verlinken Sie auf den local-llms-Cluster',
        ],
      },
      whatMatters: {
        id: 'what-matters',
        title: 'Was für die Heimsteuerung zählt',
        content:
          '**Drei Dinge entscheiden über ein gutes Heimsteuerungs-Modell: Latenz, zuverlässiges Function-Calling und eine zu Ihrer Hardware passende Größe.** Benchmark-Bestenlisten zählen hier weit weniger als Reaktionsfähigkeit.',
        items: [
          '**Latenz:** Ein Sprachbefehl sollte sich nahezu sofort anfühlen; kleinere Modelle auf fähiger Hardware antworten schneller.',
          '**Function-Calling:** Das Modell muss zuverlässig strukturierte Geräteaktionen ausgeben – das ist die entscheidende Fähigkeit.',
          '**Passung:** Das Modell muss bequem auf dem Gerät laufen, das auch Home Assistant hostet – siehe [beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      shortlist: {
        id: 'shortlist',
        title: 'Die Auswahl',
        content:
          '**Diese kleinen Modelle sind verbreitete, gut unterstützte Wahlen für die Heimsteuerung über verschiedene Hardware-Budgets hinweg.** Nutzen Sie ein 3B-Modell auf leichter Hardware und ein 7B–8B-Modell, wenn Sie eine GPU oder NPU haben.',
        items: [
          '**Llama 3.2 3B (Meta):** ein Modell mit 3 Milliarden Parametern, das auf bescheidener Hardware mit gutem Instruktionsfolgen und Function-Calling läuft.',
          '**Qwen2.5 7B (Alibaba):** ein starkes Allround-7B-Modell mit zuverlässigem Tool-Einsatz und guter Mehrsprachigkeit.',
          '**Qwen2.5 3B (Alibaba):** eine leichtere Option, wenn Sie niedrigere Latenz auf einer CPU oder integrierten GPU wollen.',
          '**Phi-3.5 Mini 3.8B (Microsoft):** ein kompaktes Modell, das beim Instruktionsfolgen über seiner Größe spielt.',
          '**Gemma 2 2B (Google):** ein sehr kleines Modell für die stromsparendsten Hosts, wo Latenz kritisch ist.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Vergleich',
        content:
          '**Wählen Sie nach Hardware und Sprache: kleinere Modelle für reine CPU- oder Pi-Klasse-Hardware, 7B für einen Mini-PC mit GPU.** Die Größen unten sind ungefähr bei üblicher 4-Bit-Quantisierung.',
        columns: ['Modell', 'Parameter', 'Ungef. Bedarf (Q4)', 'Am besten für'],
        rows: [
          { 'Modell': 'Gemma 2 2B', 'Parameter': '2B', 'Ungef. Bedarf (Q4)': '~1,5–2 GB', 'Am besten für': 'Stromsparendste Hosts, niedrigste Latenz' },
          { 'Modell': 'Llama 3.2 3B', 'Parameter': '3B', 'Ungef. Bedarf (Q4)': '~2–3 GB', 'Am besten für': 'Ausgewogener Standard auf bescheidener Hardware' },
          { 'Modell': 'Qwen2.5 3B', 'Parameter': '3B', 'Ungef. Bedarf (Q4)': '~2–3 GB', 'Am besten für': 'Mehrsprachig, niedrige Latenz' },
          { 'Modell': 'Phi-3.5 Mini 3.8B', 'Parameter': '3.8B', 'Ungef. Bedarf (Q4)': '~2,5–3 GB', 'Am besten für': 'Starkes Instruktionsfolgen, kompakt' },
          { 'Modell': 'Qwen2.5 7B', 'Parameter': '7B', 'Ungef. Bedarf (Q4)': '~4–5 GB', 'Am besten für': 'Beste Qualität mit GPU/NPU' },
        ],
        items: [
          'Die Bedarfe sind ungefähr und hängen von der Quantisierung ab – für VRAM und Quantisierungs-Tiefe verlinken Sie auf den local-llms-Cluster.',
        ],
      },
      byBudget: {
        id: 'by-budget',
        title: 'Empfehlungen nach Hardware-Budget',
        content:
          '**Wählen Sie ein 2B–3B-Modell auf einem Pi oder reinen CPU-Mini-PC; wählen Sie ein 7B-Modell, wenn Sie eine GPU oder NPU haben.** Das hält Antworten auf jeder Stufe flott.',
        items: [
          '**Raspberry Pi / stromsparend:** Gemma 2 2B oder ein 3B-Modell, langsamere Antworten in Kauf nehmend.',
          '**Mini-PC (nur CPU):** Llama 3.2 3B oder Qwen2.5 3B als reaktionsschneller Standard.',
          '**Mini-PC mit GPU/NPU:** Qwen2.5 7B für die beste Qualität bei akzeptabler Latenz – siehe [beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      howToPick: {
        id: 'how-to-pick',
        title: 'Wie man wählt',
        content:
          '**Beginnen Sie mit einem 3B-Modell, bestätigen Sie Latenz und zuverlässige Geräteaktionen, und wechseln Sie nur zu 7B, wenn die Qualität fehlt.** Testen Sie mit Ihren echten Befehlen, bevor Sie sich festlegen.',
        items: [
          'Installieren Sie über die [Ollama-Anbindung](/de/smart-home/home-assistant-ollama-integration) und testen Sie Ihre üblichen Befehle.',
          'Sind die Antworten langsam, gehen Sie eine Größe herunter oder fügen Sie eine GPU/NPU hinzu.',
          'Sind die Aktionen unzuverlässig, bevorzugen Sie ein Modell, das für Function-Calling bekannt ist.',
          'Für tiefe Modell-Rankings und -Mechanik siehe [beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026) (clusterübergreifend) – dieser Leitfaden bleibt heimsteuerungsspezifisch.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Was ist das kleinste nutzbare Modell für die Heimsteuerung?', a: 'Ein 2B-Modell wie Gemma 2 2B ist für einfache Gerätesteuerung auf stromsparender Hardware nutzbar und tauscht etwas Verständnis gegen Tempo. Ein 3B-Modell ist eine bessere Balance, wenn Ihre Hardware es erlaubt.' },
          { q: 'Braucht ein Heimsteuerungs-Modell eine GPU?', a: 'Nein für 2B–3B-Modelle, die auf CPU oder einer integrierten GPU laufen. Eine GPU oder NPU lässt Sie vor allem ein 7B-Modell bei niedriger Latenz für besseres Verständnis betreiben. Passen Sie das Modell an Ihre Hardware an.' },
          { q: 'Welche Modelle unterstützen Function-Calling?', a: 'Moderne kleine Modelle wie Llama 3.2 und Qwen2.5 unterstützen Tool-/Function-Calling, die Fähigkeit, mit der sie zuverlässige Geräteaktionen ausgeben. Bevorzugen Sie für die Heimsteuerung ein Modell, das dies dokumentiert unterstützt.' },
          { q: 'Was ist das beste Modell für einen Raspberry Pi?', a: 'Ein 2B-Modell wie Gemma 2 2B oder ein kleines 3B-Modell ist die praktische Obergrenze auf einem Raspberry Pi, und die Antworten sind langsamer als auf einem Mini-PC. Für einen flotten Assistenten ist ein Mini-PC mit GPU/NPU der bessere Host.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Ollama mit Home Assistant verbinden](/de/smart-home/home-assistant-ollama-integration) – das gewählte Modell installieren und testen',
          '[Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) – die vollständige Architektur',
          '[Beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home) – Modellgröße an Hardware anpassen',
          '[Beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026) – clusterübergreifend: tiefe Modell-Rankings',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Beste lokale LLM-Modelle für die Smart-Home-Steuerung (2026)',
      description: 'Die besten lokalen LLM-Modelle für die Smart-Home-Steuerung 2026: kleine, schnelle Function-Calling-Modelle, die auf bescheidener Hardware laufen. Auswahl und Empfehlungen nach Budget.',
      url: 'https://www.promptquorum.com/de/smart-home/best-local-llm-models-smart-home',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Lokales LLM' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Function Calling' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Was ist das kleinste nutzbare Modell für die Heimsteuerung?', acceptedAnswer: { '@type': 'Answer', text: 'Ein 2B-Modell wie Gemma 2 2B ist für einfache Gerätesteuerung auf stromsparender Hardware nutzbar. Ein 3B-Modell ist eine bessere Balance, wenn Ihre Hardware es erlaubt.' } },
        { '@type': 'Question', name: 'Braucht ein Heimsteuerungs-Modell eine GPU?', acceptedAnswer: { '@type': 'Answer', text: 'Nein für 2B–3B-Modelle, die auf CPU oder integrierter GPU laufen. Eine GPU oder NPU lässt Sie vor allem ein 7B-Modell bei niedriger Latenz betreiben.' } },
        { '@type': 'Question', name: 'Welche Modelle unterstützen Function-Calling?', acceptedAnswer: { '@type': 'Answer', text: 'Moderne kleine Modelle wie Llama 3.2 und Qwen2.5 unterstützen Tool-/Function-Calling, was ihnen zuverlässige Geräteaktionen erlaubt.' } },
        { '@type': 'Question', name: 'Was ist das beste Modell für einen Raspberry Pi?', acceptedAnswer: { '@type': 'Answer', text: 'Ein 2B-Modell wie Gemma 2 2B oder ein kleines 3B-Modell ist die praktische Obergrenze auf einem Pi, mit langsameren Antworten. Ein Mini-PC mit GPU/NPU ist ein besserer Host.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Mejores Modelos LLM Locales para el Control del Smart Home (2026)',
    seoTitle: 'Mejores LLM Locales para Home Assistant (2026)',
    intro:
      'Los mejores modelos LLM locales para el control del smart home son modelos pequeños, rápidos y que siguen instrucciones con llamada a funciones fiable, no el modelo más grande que tu hardware pueda contener. Esta guía explica qué importa de verdad para el control del hogar, da una lista corta de modelos pequeños adecuados, los compara y asigna opciones a presupuestos de hardware, enlazando a guías de modelos más profundas en vez de reordenar todo el campo.',
    metaDescription:
      'Los mejores modelos LLM locales para el control del smart home en 2026: modelos pequeños, rápidos y con llamada a funciones que corren en hardware modesto. Lista corta y opciones por presupuesto.',
    twitterDescription:
      'Mejores modelos LLM locales para el control con Home Assistant: modelos pequeños, rápidos y con llamada a funciones sobre el modelo más grande que puedas ejecutar. Opciones por presupuesto.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios de Home Assistant que eligen un modelo local para el control de dispositivos',
    primaryTerm: 'best local LLM for home control',
    targetKeywords: [
      'mejor llm local para home assistant',
      'mejor llm local smart home',
      'modelo llm local control hogar',
      'llamada a funciones llm local',
      'llm local pequeño domótica',
    ],
    leadAnswerBlock:
      '**Para el control del smart home, elige un modelo de instrucciones pequeño con llamada a funciones fiable — un modelo de 3B–8B es el punto óptimo, porque el control del hogar premia la baja latencia y la salida estructurada sobre la capacidad bruta.** Ajusta el modelo a tu hardware en vez de elegir el más grande disponible.',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor LLM local para el control del smart home?',
        answer:
          'Un modelo pequeño que siga instrucciones con sólida llamada a funciones, normalmente en el rango de 3B a 8B, es el mejor ajuste para el control del hogar porque responde rápido y emite acciones de dispositivo fiables. Modelos como Llama 3.2 3B y Qwen2.5 7B son opciones comunes; la elección correcta depende de tu hardware y tus necesidades de idioma.',
        bullets: [
          'Prioriza baja latencia y llamada a funciones sobre el tamaño',
          'Los modelos 3B se ajustan a hardware de bajo consumo; 7B–8B a un mini PC con GPU',
          'Llama 3.2 3B y Qwen2.5 7B son puntos de partida comunes',
          'Elige un modelo con fuerte soporte de tu idioma hablado',
          'Los modelos más grandes añaden poco para el control simple de dispositivos',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Qué importa para el control del hogar', anchor: 'what-matters' },
      { label: 'La lista corta', anchor: 'shortlist' },
      { label: 'Comparación', anchor: 'comparison' },
      { label: 'Por presupuesto de hardware', anchor: 'by-budget' },
      { label: 'Cómo elegir', anchor: 'how-to-pick' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'El mejor LLM local para el control del smart home es un modelo de instrucciones pequeño (3B–8B) con llamada a funciones fiable, elegido por baja latencia sobre tamaño bruto.' },
      { type: 'plain-terms', content: 'Controlar un hogar no necesita un modelo gigante — necesita uno que responda rápido y emita de forma fiable comandos estructurados que el hub pueda ejecutar. Los modelos pequeños en el rango de 3B a 8B lo hacen bien y corren en hardware modesto. Los rankings de modelos más profundos viven en el clúster local-llms; esta guía se centra en el ángulo del control del hogar.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'El control del hogar premia la baja latencia y la llamada a funciones fiable, no el tamaño máximo de modelo',
          'Un modelo 3B se ajusta a hardware de bajo consumo; un modelo 7B–8B a un mini PC con GPU o NPU',
          'Llama 3.2 3B (Meta) y Qwen2.5 7B (Alibaba) son opciones comunes y bien soportadas',
          'Elige un modelo con fuerte soporte del idioma en que le hablas',
          'Los modelos más grandes añaden latencia con poco beneficio para el control simple de dispositivos',
          'Para rankings y mecánica de modelos profundos, enlaza al clúster local-llms',
        ],
      },
      whatMatters: {
        id: 'what-matters',
        title: 'Qué importa para el control del hogar',
        content:
          '**Tres cosas deciden un buen modelo de control del hogar: latencia, llamada a funciones fiable y un tamaño que se ajuste a tu hardware.** Las tablas de líderes de benchmarks importan mucho menos aquí que la capacidad de respuesta.',
        items: [
          '**Latencia:** un comando de voz debería sentirse casi instantáneo; los modelos más pequeños en hardware capaz responden más rápido.',
          '**Llamada a funciones:** el modelo debe emitir acciones de dispositivo estructuradas de forma fiable — esta es la capacidad decisiva.',
          '**Ajuste:** el modelo debe correr cómodamente en el equipo que también aloja Home Assistant — consulta [mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      shortlist: {
        id: 'shortlist',
        title: 'La lista corta',
        content:
          '**Estos modelos pequeños son opciones comunes y bien soportadas para el control del hogar en distintos presupuestos de hardware.** Usa un modelo 3B en hardware ligero y un modelo 7B–8B cuando tengas una GPU o NPU.',
        items: [
          '**Llama 3.2 3B (Meta):** un modelo de 3 mil millones de parámetros que corre en hardware modesto con buen seguimiento de instrucciones y llamada a funciones.',
          '**Qwen2.5 7B (Alibaba):** un sólido modelo 7B todoterreno con uso fiable de herramientas y buena cobertura multilingüe.',
          '**Qwen2.5 3B (Alibaba):** una opción más ligera cuando quieres menor latencia en una CPU o GPU integrada.',
          '**Phi-3.5 Mini 3.8B (Microsoft):** un modelo compacto que rinde por encima de su tamaño en seguimiento de instrucciones.',
          '**Gemma 2 2B (Google):** un modelo muy pequeño para los hosts de menor consumo donde la latencia es crítica.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparación',
        content:
          '**Elige por hardware e idioma: modelos más pequeños para hardware solo-CPU o de clase Pi, 7B para un mini PC con GPU.** Los tamaños de abajo son aproximados con la cuantización común de 4 bits.',
        columns: ['Modelo', 'Parámetros', 'Huella aprox. (Q4)', 'Mejor para'],
        rows: [
          { 'Modelo': 'Gemma 2 2B', 'Parámetros': '2B', 'Huella aprox. (Q4)': '~1,5–2 GB', 'Mejor para': 'Hosts de menor consumo, menor latencia' },
          { 'Modelo': 'Llama 3.2 3B', 'Parámetros': '3B', 'Huella aprox. (Q4)': '~2–3 GB', 'Mejor para': 'Predeterminado equilibrado en hardware modesto' },
          { 'Modelo': 'Qwen2.5 3B', 'Parámetros': '3B', 'Huella aprox. (Q4)': '~2–3 GB', 'Mejor para': 'Multilingüe, baja latencia' },
          { 'Modelo': 'Phi-3.5 Mini 3.8B', 'Parámetros': '3.8B', 'Huella aprox. (Q4)': '~2,5–3 GB', 'Mejor para': 'Fuerte seguimiento de instrucciones, compacto' },
          { 'Modelo': 'Qwen2.5 7B', 'Parámetros': '7B', 'Huella aprox. (Q4)': '~4–5 GB', 'Mejor para': 'Mejor calidad con una GPU/NPU' },
        ],
        items: [
          'Las huellas son aproximadas y dependen de la cuantización — para VRAM y profundidad de cuantización, enlaza al clúster local-llms.',
        ],
      },
      byBudget: {
        id: 'by-budget',
        title: 'Opciones por presupuesto de hardware',
        content:
          '**Elige un modelo 2B–3B en una Pi o mini PC solo-CPU; elige un modelo 7B cuando tengas una GPU o NPU.** Esto mantiene las respuestas ágiles en cada nivel.',
        items: [
          '**Raspberry Pi / bajo consumo:** Gemma 2 2B o un modelo 3B, aceptando respuestas más lentas.',
          '**Mini PC (solo CPU):** Llama 3.2 3B o Qwen2.5 3B como predeterminado con buena respuesta.',
          '**Mini PC con GPU/NPU:** Qwen2.5 7B para la mejor calidad con latencia aceptable — consulta [mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      howToPick: {
        id: 'how-to-pick',
        title: 'Cómo elegir',
        content:
          '**Empieza con un modelo 3B, confirma la latencia y las acciones de dispositivo fiables, y pasa a 7B solo si falta calidad.** Prueba con tus comandos reales antes de comprometerte.',
        items: [
          'Instala mediante la [integración de Ollama](/es/smart-home/home-assistant-ollama-integration) y prueba tus comandos comunes.',
          'Si las respuestas son lentas, baja un tamaño o añade una GPU/NPU.',
          'Si las acciones no son fiables, prefiere un modelo conocido por la llamada a funciones.',
          'Para rankings y mecánica de modelos profundos, consulta [mejores LLM locales 2026](/es/local-llms/best-local-llms-2026) (entre clústeres) — esta guía se mantiene específica del control del hogar.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Cuál es el modelo usable más pequeño para el control del hogar?', a: 'Un modelo 2B como Gemma 2 2B es usable para el control simple de dispositivos en hardware de bajo consumo, cambiando algo de comprensión por velocidad. Un modelo 3B es un mejor equilibrio si tu hardware lo permite.' },
          { q: '¿Necesita una GPU un modelo de control del hogar?', a: 'No para modelos 2B–3B, que corren en CPU o una GPU integrada. Una GPU o NPU principalmente te permite ejecutar un modelo 7B con baja latencia para mejor comprensión. Ajusta el modelo a tu hardware.' },
          { q: '¿Qué modelos admiten llamada a funciones?', a: 'Los modelos pequeños modernos, incluidos Llama 3.2 y Qwen2.5, admiten la llamada a herramientas/funciones, que es la capacidad que les permite emitir acciones de dispositivo fiables. Prefiere un modelo documentado para soportarla en el control del hogar.' },
          { q: '¿Cuál es el mejor modelo para una Raspberry Pi?', a: 'Un modelo 2B como Gemma 2 2B, o un modelo 3B pequeño, es el techo práctico en una Raspberry Pi, y las respuestas serán más lentas que en un mini PC. Para un asistente ágil, un mini PC con GPU/NPU es el mejor host.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Conectar Ollama a Home Assistant](/es/smart-home/home-assistant-ollama-integration) — instala y prueba tu modelo elegido',
          '[Ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide) — la arquitectura completa',
          '[Mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home) — ajusta el tamaño del modelo al hardware',
          '[Mejores LLM locales 2026](/es/local-llms/best-local-llms-2026) — entre clústeres: rankings de modelos profundos',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mejores Modelos LLM Locales para el Control del Smart Home (2026)',
      description: 'Los mejores modelos LLM locales para el control del smart home en 2026: modelos pequeños, rápidos y con llamada a funciones que corren en hardware modesto. Lista corta y opciones por presupuesto.',
      url: 'https://www.promptquorum.com/es/smart-home/best-local-llm-models-smart-home',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'LLM local' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Llamada a funciones' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Cuál es el modelo usable más pequeño para el control del hogar?', acceptedAnswer: { '@type': 'Answer', text: 'Un modelo 2B como Gemma 2 2B es usable para el control simple en hardware de bajo consumo. Un modelo 3B es un mejor equilibrio si tu hardware lo permite.' } },
        { '@type': 'Question', name: '¿Necesita una GPU un modelo de control del hogar?', acceptedAnswer: { '@type': 'Answer', text: 'No para modelos 2B–3B, que corren en CPU o GPU integrada. Una GPU o NPU principalmente te permite ejecutar un modelo 7B con baja latencia.' } },
        { '@type': 'Question', name: '¿Qué modelos admiten llamada a funciones?', acceptedAnswer: { '@type': 'Answer', text: 'Los modelos pequeños modernos como Llama 3.2 y Qwen2.5 admiten la llamada a herramientas/funciones, que les permite emitir acciones de dispositivo fiables.' } },
        { '@type': 'Question', name: '¿Cuál es el mejor modelo para una Raspberry Pi?', acceptedAnswer: { '@type': 'Answer', text: 'Un modelo 2B como Gemma 2 2B o un modelo 3B pequeño es el techo práctico en una Pi, con respuestas más lentas. Un mini PC con GPU/NPU es un mejor host.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Meilleurs Modèles LLM Locaux pour le Contrôle de la Maison Connectée (2026)',
    seoTitle: 'Meilleurs LLM Locaux pour Home Assistant (2026)',
    intro:
      'Les meilleurs modèles LLM locaux pour le contrôle de la maison connectée sont des modèles petits, rapides et suivant les instructions, avec un appel de fonctions fiable — pas le plus gros modèle que votre matériel peut contenir. Ce guide explique ce qui compte vraiment pour le contrôle de la maison, donne une liste restreinte de petits modèles adaptés, les compare et associe des choix aux budgets matériels, en renvoyant vers des guides de modèles plus approfondis plutôt que de reclasser tout le domaine.',
    metaDescription:
      'Les meilleurs modèles LLM locaux pour le contrôle de la maison connectée en 2026 : des modèles petits, rapides et à appel de fonctions qui tournent sur du matériel modeste. Liste restreinte et choix par budget.',
    twitterDescription:
      'Meilleurs modèles LLM locaux pour le contrôle avec Home Assistant : des modèles petits, rapides et à appel de fonctions plutôt que le plus gros modèle exécutable. Choix par budget matériel.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs de Home Assistant choisissant un modèle local pour le contrôle des appareils',
    primaryTerm: 'best local LLM for home control',
    targetKeywords: [
      'meilleur llm local pour home assistant',
      'meilleur llm local maison connectée',
      'modèle llm local contrôle maison',
      'appel de fonctions llm local',
      'petit llm local domotique',
    ],
    leadAnswerBlock:
      '**Pour le contrôle de la maison connectée, choisissez un petit modèle d\'instructions avec un appel de fonctions fiable — un modèle de 3B–8B est le point idéal, car le contrôle de la maison récompense la faible latence et la sortie structurée plutôt que la capacité brute.** Adaptez le modèle à votre matériel au lieu de choisir le plus gros disponible.',
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur LLM local pour le contrôle de la maison connectée ?',
        answer:
          'Un petit modèle suivant les instructions avec un solide appel de fonctions, typiquement dans la plage 3B à 8B, est le meilleur choix pour le contrôle de la maison car il répond vite et émet des actions d\'appareil fiables. Des modèles comme Llama 3.2 3B et Qwen2.5 7B sont des choix courants ; le bon choix dépend de votre matériel et de vos besoins linguistiques.',
        bullets: [
          'Priorisez la faible latence et l\'appel de fonctions plutôt que la taille',
          'Les modèles 3B conviennent au matériel basse consommation ; 7B–8B à un mini-PC avec GPU',
          'Llama 3.2 3B et Qwen2.5 7B sont des points de départ courants',
          'Choisissez un modèle avec un solide support de votre langue parlée',
          'Les plus gros modèles apportent peu pour le contrôle simple d\'appareils',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Ce qui compte pour le contrôle de la maison', anchor: 'what-matters' },
      { label: 'La liste restreinte', anchor: 'shortlist' },
      { label: 'Comparaison', anchor: 'comparison' },
      { label: 'Par budget matériel', anchor: 'by-budget' },
      { label: 'Comment choisir', anchor: 'how-to-pick' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Le meilleur LLM local pour le contrôle de la maison connectée est un petit modèle d\'instructions (3B–8B) à appel de fonctions fiable, choisi pour la faible latence plutôt que la taille brute.' },
      { type: 'plain-terms', content: 'Contrôler une maison ne nécessite pas un modèle géant — il en faut un qui réponde vite et émette de façon fiable des commandes structurées que le hub peut exécuter. Les petits modèles de 3B à 8B le font bien et tournent sur du matériel modeste. Les classements de modèles plus approfondis vivent dans le cluster local-llms ; ce guide se concentre sur l\'angle du contrôle de la maison.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Le contrôle de la maison récompense la faible latence et l\'appel de fonctions fiable, pas la taille maximale du modèle',
          'Un modèle 3B convient au matériel basse consommation ; un modèle 7B–8B à un mini-PC avec GPU ou NPU',
          'Llama 3.2 3B (Meta) et Qwen2.5 7B (Alibaba) sont des choix courants et bien pris en charge',
          'Choisissez un modèle avec un solide support de la langue que vous lui parlez',
          'Les plus gros modèles ajoutent de la latence avec peu de bénéfice pour le contrôle simple d\'appareils',
          'Pour des classements et une mécanique de modèles approfondis, renvoyez vers le cluster local-llms',
        ],
      },
      whatMatters: {
        id: 'what-matters',
        title: 'Ce qui compte pour le contrôle de la maison',
        content:
          '**Trois choses décident d\'un bon modèle de contrôle de la maison : la latence, l\'appel de fonctions fiable et une taille qui correspond à votre matériel.** Les classements de benchmarks comptent bien moins ici que la réactivité.',
        items: [
          '**Latence :** une commande vocale doit sembler quasi instantanée ; les modèles plus petits sur du matériel capable répondent plus vite.',
          '**Appel de fonctions :** le modèle doit émettre des actions d\'appareil structurées de façon fiable — c\'est la capacité décisive.',
          '**Adéquation :** le modèle doit tourner confortablement sur la machine qui héberge aussi Home Assistant — voir [meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      shortlist: {
        id: 'shortlist',
        title: 'La liste restreinte',
        content:
          '**Ces petits modèles sont des choix courants et bien pris en charge pour le contrôle de la maison à travers différents budgets matériels.** Utilisez un modèle 3B sur du matériel léger et un modèle 7B–8B quand vous avez un GPU ou un NPU.',
        items: [
          '**Llama 3.2 3B (Meta) :** un modèle de 3 milliards de paramètres qui tourne sur du matériel modeste avec un bon suivi des instructions et un appel de fonctions.',
          '**Qwen2.5 7B (Alibaba) :** un solide modèle 7B polyvalent avec un usage d\'outils fiable et une bonne couverture multilingue.',
          '**Qwen2.5 3B (Alibaba) :** une option plus légère quand vous voulez une latence plus faible sur un CPU ou un GPU intégré.',
          '**Phi-3.5 Mini 3.8B (Microsoft) :** un modèle compact qui dépasse sa taille en suivi des instructions.',
          '**Gemma 2 2B (Google) :** un très petit modèle pour les hôtes les moins gourmands où la latence est critique.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparaison',
        content:
          '**Choisissez par matériel et langue : des modèles plus petits pour du matériel CPU seul ou de classe Pi, 7B pour un mini-PC équipé d\'un GPU.** Les tailles ci-dessous sont approximatives à la quantification courante de 4 bits.',
        columns: ['Modèle', 'Paramètres', 'Empreinte approx. (Q4)', 'Idéal pour'],
        rows: [
          { 'Modèle': 'Gemma 2 2B', 'Paramètres': '2B', 'Empreinte approx. (Q4)': '~1,5–2 Go', 'Idéal pour': 'Hôtes les moins gourmands, latence la plus faible' },
          { 'Modèle': 'Llama 3.2 3B', 'Paramètres': '3B', 'Empreinte approx. (Q4)': '~2–3 Go', 'Idéal pour': 'Choix par défaut équilibré sur matériel modeste' },
          { 'Modèle': 'Qwen2.5 3B', 'Paramètres': '3B', 'Empreinte approx. (Q4)': '~2–3 Go', 'Idéal pour': 'Multilingue, faible latence' },
          { 'Modèle': 'Phi-3.5 Mini 3.8B', 'Paramètres': '3.8B', 'Empreinte approx. (Q4)': '~2,5–3 Go', 'Idéal pour': 'Fort suivi des instructions, compact' },
          { 'Modèle': 'Qwen2.5 7B', 'Paramètres': '7B', 'Empreinte approx. (Q4)': '~4–5 Go', 'Idéal pour': 'Meilleure qualité avec un GPU/NPU' },
        ],
        items: [
          'Les empreintes sont approximatives et dépendent de la quantification — pour la VRAM et la profondeur de quantification, renvoyez vers le cluster local-llms.',
        ],
      },
      byBudget: {
        id: 'by-budget',
        title: 'Choix par budget matériel',
        content:
          '**Choisissez un modèle 2B–3B sur une Pi ou un mini-PC CPU seul ; choisissez un modèle 7B quand vous avez un GPU ou un NPU.** Cela garde les réponses vives à chaque niveau.',
        items: [
          '**Raspberry Pi / basse consommation :** Gemma 2 2B ou un modèle 3B, en acceptant des réponses plus lentes.',
          '**Mini-PC (CPU seul) :** Llama 3.2 3B ou Qwen2.5 3B comme choix par défaut réactif.',
          '**Mini-PC avec GPU/NPU :** Qwen2.5 7B pour la meilleure qualité à une latence acceptable — voir [meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      howToPick: {
        id: 'how-to-pick',
        title: 'Comment choisir',
        content:
          '**Commencez par un modèle 3B, confirmez la latence et des actions d\'appareil fiables, puis passez à 7B seulement si la qualité manque.** Testez avec vos vraies commandes avant de vous engager.',
        items: [
          'Installez via l\'[intégration Ollama](/fr/smart-home/home-assistant-ollama-integration) et testez vos commandes courantes.',
          'Si les réponses sont lentes, descendez d\'une taille ou ajoutez un GPU/NPU.',
          'Si les actions ne sont pas fiables, préférez un modèle connu pour l\'appel de fonctions.',
          'Pour des classements et une mécanique de modèles approfondis, voir [meilleurs LLM locaux 2026](/fr/local-llms/best-local-llms-2026) (inter-clusters) — ce guide reste spécifique au contrôle de la maison.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Quel est le plus petit modèle utilisable pour le contrôle de la maison ?', a: 'Un modèle 2B comme Gemma 2 2B est utilisable pour le contrôle simple d\'appareils sur du matériel basse consommation, échangeant un peu de compréhension contre de la vitesse. Un modèle 3B est un meilleur équilibre si votre matériel le permet.' },
          { q: 'Un modèle de contrôle de la maison a-t-il besoin d\'un GPU ?', a: 'Non pour les modèles 2B–3B, qui tournent sur CPU ou un GPU intégré. Un GPU ou un NPU vous permet surtout d\'exécuter un modèle 7B à faible latence pour une meilleure compréhension. Adaptez le modèle à votre matériel.' },
          { q: 'Quels modèles prennent en charge l\'appel de fonctions ?', a: 'Les petits modèles modernes dont Llama 3.2 et Qwen2.5 prennent en charge l\'appel d\'outils/fonctions, la capacité qui leur permet d\'émettre des actions d\'appareil fiables. Préférez un modèle documenté pour la prendre en charge pour le contrôle de la maison.' },
          { q: 'Quel est le meilleur modèle pour une Raspberry Pi ?', a: 'Un modèle 2B comme Gemma 2 2B, ou un petit modèle 3B, est le plafond pratique sur une Raspberry Pi, et les réponses seront plus lentes que sur un mini-PC. Pour un assistant vif, un mini-PC avec GPU/NPU est le meilleur hôte.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Connecter Ollama à Home Assistant](/fr/smart-home/home-assistant-ollama-integration) — installez et testez le modèle choisi',
          '[Faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — l\'architecture complète',
          '[Meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home) — adapter la taille du modèle au matériel',
          '[Meilleurs LLM locaux 2026](/fr/local-llms/best-local-llms-2026) — inter-clusters : classements de modèles approfondis',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Meilleurs Modèles LLM Locaux pour le Contrôle de la Maison Connectée (2026)',
      description: 'Les meilleurs modèles LLM locaux pour le contrôle de la maison connectée en 2026 : des modèles petits, rapides et à appel de fonctions qui tournent sur du matériel modeste. Liste restreinte et choix par budget.',
      url: 'https://www.promptquorum.com/fr/smart-home/best-local-llm-models-smart-home',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'LLM local' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Appel de fonctions' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Quel est le plus petit modèle utilisable pour le contrôle de la maison ?', acceptedAnswer: { '@type': 'Answer', text: 'Un modèle 2B comme Gemma 2 2B est utilisable pour le contrôle simple d\'appareils sur du matériel basse consommation. Un modèle 3B est un meilleur équilibre si votre matériel le permet.' } },
        { '@type': 'Question', name: 'Un modèle de contrôle de la maison a-t-il besoin d\'un GPU ?', acceptedAnswer: { '@type': 'Answer', text: 'Non pour les modèles 2B–3B, qui tournent sur CPU ou GPU intégré. Un GPU ou un NPU vous permet surtout d\'exécuter un modèle 7B à faible latence.' } },
        { '@type': 'Question', name: 'Quels modèles prennent en charge l\'appel de fonctions ?', acceptedAnswer: { '@type': 'Answer', text: 'Les petits modèles modernes comme Llama 3.2 et Qwen2.5 prennent en charge l\'appel d\'outils/fonctions, qui leur permet d\'émettre des actions d\'appareil fiables.' } },
        { '@type': 'Question', name: 'Quel est le meilleur modèle pour une Raspberry Pi ?', acceptedAnswer: { '@type': 'Answer', text: 'Un modèle 2B comme Gemma 2 2B ou un petit modèle 3B est le plafond pratique sur une Pi, avec des réponses plus lentes. Un mini-PC avec GPU/NPU est un meilleur hôte.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'スマートホーム制御に最適なローカルLLMモデル（2026）',
    seoTitle: 'Home Assistant に最適なローカルLLM（2026）',
    intro:
      'スマートホーム制御に最適なローカルLLMモデルは、信頼できる関数呼び出しを備えた、小型で高速・指示追従のモデルです——ハードウェアが収められる最大のモデルではありません。本ガイドは、家庭制御で実際に重要なことを説明し、適した小型モデルの短いリストを示し、それらを比較し、ハードウェア予算に候補を対応づけます——分野全体を再ランク付けせず、より深いモデルガイドへ外部リンクします。',
    metaDescription:
      'スマートホーム制御に最適なローカルLLMモデル（2026）：控えめなハードウェアで動く小型・高速・関数呼び出しモデル。短いリストと予算別の候補。',
    twitterDescription:
      'Home Assistant 制御に最適なローカルLLMモデル：動かせる最大のモデルより、小型・高速・関数呼び出しのモデル。ハードウェア予算別の候補。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    audience: '機器制御のためローカルモデルを選ぶ Home Assistant ユーザー',
    primaryTerm: 'best local LLM for home control',
    targetKeywords: [
      '最適 ローカルllm home assistant',
      '最適 ローカルllm スマートホーム',
      'ローカルllm モデル 家庭制御',
      '関数呼び出し ローカルllm',
      '小型 ローカルllm ホーム自動化',
    ],
    leadAnswerBlock:
      '**スマートホーム制御には、信頼できる関数呼び出しを備えた小型の指示モデルを選びましょう——3B〜8B のモデルが最適点です。家庭制御は、生の能力より低レイテンシと構造化された出力を報いるからです。** 利用可能な最大のモデルではなく、ハードウェアに合わせて選びましょう。',
    quickAnswerTop: {
      ja: {
        question: 'スマートホーム制御に最適なローカルLLMは？',
        answer:
          'しっかりした関数呼び出しを備えた小型の指示追従モデル、通常 3B〜8B の範囲が家庭制御に最適です。素早く応答し、信頼できる機器の動作を出力するからです。Llama 3.2 3B や Qwen2.5 7B は一般的な選択肢で、適切な選択はハードウェアと言語のニーズ次第です。',
        bullets: [
          'サイズより低レイテンシと関数呼び出しを優先する',
          '3B モデルは低消費電力ハードウェアに、7B〜8B は GPU 付きミニPCに適する',
          'Llama 3.2 3B と Qwen2.5 7B は一般的な出発点',
          'あなたが話す言語を強く支援するモデルを選ぶ',
          '単純な機器制御に、より大きなモデルはほとんど足さない',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: '家庭制御で重要なこと', anchor: 'what-matters' },
      { label: '短いリスト', anchor: 'shortlist' },
      { label: '比較', anchor: 'comparison' },
      { label: 'ハードウェア予算別', anchor: 'by-budget' },
      { label: '選び方', anchor: 'how-to-pick' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'スマートホーム制御に最適なローカルLLMは、信頼できる関数呼び出しを備えた小型（3B〜8B）の指示モデルで、生のサイズより低レイテンシで選びます。' },
      { type: 'plain-terms', content: '家を制御するのに巨大なモデルは要りません——素早く応答し、ハブが実行できる構造化された命令を確実に出力するものが要ります。3B〜8B の小型モデルはこれをうまくこなし、控えめなハードウェアで動きます。より深いモデルのランキングは local-llms クラスターにあり、本ガイドは家庭制御の観点に集中します。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          '家庭制御は最大のモデルサイズではなく、低レイテンシと信頼できる関数呼び出しを報いる',
          '3B モデルは低消費電力ハードウェアに、7B〜8B モデルは GPU または NPU 付きのミニPCに適する',
          'Llama 3.2 3B（Meta）と Qwen2.5 7B（Alibaba）は一般的で、よく支援された選択肢',
          'あなたが話しかける言語を強く支援するモデルを選ぶ',
          'より大きなモデルは、単純な機器制御に小さな利益でレイテンシを足す',
          '深いモデルのランキングと仕組みは local-llms クラスターへ外部リンク',
        ],
      },
      whatMatters: {
        id: 'what-matters',
        title: '家庭制御で重要なこと',
        content:
          '**良い家庭制御モデルを決めるのは三つ：レイテンシ、信頼できる関数呼び出し、そしてハードウェアに合うサイズです。** ベンチマークの順位表は、ここでは応答性ほど重要ではありません。',
        items: [
          '**レイテンシ：** 音声命令はほぼ即時に感じられるべき；高性能なハードウェア上の小型モデルほど速く応答します。',
          '**関数呼び出し：** モデルは構造化された機器の動作を確実に出力する必要がある——これが決定的な能力です。',
          '**適合：** モデルは、Home Assistant もホストする機器で快適に動かなければなりません——[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home)を参照。',
        ],
      },
      shortlist: {
        id: 'shortlist',
        title: '短いリスト',
        content:
          '**これらの小型モデルは、さまざまなハードウェア予算にわたる家庭制御で一般的かつよく支援された選択肢です。** 軽いハードウェアでは 3B モデルを、GPU または NPU があるときは 7B〜8B モデルを使います。',
        items: [
          '**Llama 3.2 3B（Meta）：** 30 億パラメータのモデルで、控えめなハードウェアで良好な指示追従と関数呼び出しで動きます。',
          '**Qwen2.5 7B（Alibaba）：** 信頼できるツール利用と良好な多言語対応を備えた、強力なオールラウンドの 7B モデル。',
          '**Qwen2.5 3B（Alibaba）：** CPU や統合 GPU で低レイテンシが欲しいときの、より軽い選択肢。',
          '**Phi-3.5 Mini 3.8B（Microsoft）：** 指示追従でサイズ以上に活躍するコンパクトなモデル。',
          '**Gemma 2 2B（Google）：** レイテンシが重要な、最も低消費電力のホスト向けの非常に小さなモデル。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '比較',
        content:
          '**ハードウェアと言語で選びましょう：CPU のみや Pi クラスのハードウェアにはより小型を、GPU 付きミニPCには 7B を。** 以下のサイズは一般的な 4 ビット量子化での概算です。',
        columns: ['モデル', 'パラメータ', '概算サイズ (Q4)', '最適な用途'],
        rows: [
          { 'モデル': 'Gemma 2 2B', 'パラメータ': '2B', '概算サイズ (Q4)': '約 1.5〜2 GB', '最適な用途': '最も低消費電力のホスト、最低レイテンシ' },
          { 'モデル': 'Llama 3.2 3B', 'パラメータ': '3B', '概算サイズ (Q4)': '約 2〜3 GB', '最適な用途': '控えめなハードウェアでのバランスの取れた既定' },
          { 'モデル': 'Qwen2.5 3B', 'パラメータ': '3B', '概算サイズ (Q4)': '約 2〜3 GB', '最適な用途': '多言語、低レイテンシ' },
          { 'モデル': 'Phi-3.5 Mini 3.8B', 'パラメータ': '3.8B', '概算サイズ (Q4)': '約 2.5〜3 GB', '最適な用途': '強い指示追従、コンパクト' },
          { 'モデル': 'Qwen2.5 7B', 'パラメータ': '7B', '概算サイズ (Q4)': '約 4〜5 GB', '最適な用途': 'GPU/NPU で最高品質' },
        ],
        items: [
          'サイズは概算で、量子化に依存します——VRAM と量子化の詳細は local-llms クラスターへ外部リンク。',
        ],
      },
      byBudget: {
        id: 'by-budget',
        title: 'ハードウェア予算別の候補',
        content:
          '**Pi や CPU のみのミニPCには 2B〜3B モデルを、GPU または NPU があるときは 7B モデルを選びましょう。** これで各ティアで応答をキビキビ保てます。',
        items: [
          '**Raspberry Pi / 低消費電力：** Gemma 2 2B または 3B モデル、より遅い応答を許容して。',
          '**ミニPC（CPU のみ）：** 反応の良い既定として Llama 3.2 3B または Qwen2.5 3B。',
          '**GPU/NPU 付きミニPC：** 許容できるレイテンシで最高品質なら Qwen2.5 7B——[Home Assistant＋ローカルAIに最適なミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai)を参照。',
        ],
      },
      howToPick: {
        id: 'how-to-pick',
        title: '選び方',
        content:
          '**3B モデルから始め、レイテンシと信頼できる機器の動作を確認し、品質が足りない場合のみ 7B へ移りましょう。** 決める前に、実際の命令でテストします。',
        items: [
          '[Ollama 統合](/ja/smart-home/home-assistant-ollama-integration)経由でインストールし、よく使う命令をテストします。',
          '応答が遅ければ、一段下げるか GPU/NPU を追加します。',
          '動作が不安定なら、関数呼び出しで知られるモデルを優先します。',
          '深いモデルのランキングと仕組みは[最適なローカルLLM 2026](/ja/local-llms/best-local-llms-2026)（クラスター横断）を参照——本ガイドは家庭制御に特化したままです。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '家庭制御に使える最小のモデルは？', a: 'Gemma 2 2B のような 2B モデルは、低消費電力ハードウェアでの単純な機器制御に使え、理解の一部を速度と引き換えにします。ハードウェアが許せば、3B モデルがより良いバランスです。' },
          { q: '家庭制御モデルに GPU は必要ですか？', a: 'CPU や統合 GPU で動く 2B〜3B モデルには不要です。GPU や NPU は主に、より良い理解のために 7B モデルを低レイテンシで動かせるようにします。モデルをハードウェアに合わせましょう。' },
          { q: 'どのモデルが関数呼び出しに対応していますか？', a: 'Llama 3.2 や Qwen2.5 を含む現代の小型モデルはツール／関数呼び出しに対応し、これが信頼できる機器の動作を出力させる能力です。家庭制御には、対応が文書化されたモデルを優先しましょう。' },
          { q: 'Raspberry Pi に最適なモデルは？', a: 'Gemma 2 2B のような 2B モデルか小型の 3B モデルが Raspberry Pi での実用的な上限で、応答はミニPCより遅くなります。キビキビしたアシスタントには、GPU/NPU 付きのミニPCがより良いホストです。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Ollama を Home Assistant に接続する](/ja/smart-home/home-assistant-ollama-integration) — 選んだモデルをインストールしテストする',
          '[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide) — 完全なアーキテクチャ',
          '[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home) — モデルサイズをハードウェアに合わせる',
          '[最適なローカルLLM 2026](/ja/local-llms/best-local-llms-2026) — クラスター横断：深いモデルのランキング',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'スマートホーム制御に最適なローカルLLMモデル（2026）',
      description: 'スマートホーム制御に最適なローカルLLMモデル（2026）：控えめなハードウェアで動く小型・高速・関数呼び出しモデル。短いリストと予算別の候補。',
      url: 'https://www.promptquorum.com/ja/smart-home/best-local-llm-models-smart-home',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'ローカルLLM' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: '関数呼び出し' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: '家庭制御に使える最小のモデルは？', acceptedAnswer: { '@type': 'Answer', text: 'Gemma 2 2B のような 2B モデルは低消費電力ハードウェアでの単純な機器制御に使えます。ハードウェアが許せば 3B モデルがより良いバランスです。' } },
        { '@type': 'Question', name: '家庭制御モデルに GPU は必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'CPU や統合 GPU で動く 2B〜3B モデルには不要です。GPU や NPU は主に 7B モデルを低レイテンシで動かせるようにします。' } },
        { '@type': 'Question', name: 'どのモデルが関数呼び出しに対応していますか？', acceptedAnswer: { '@type': 'Answer', text: 'Llama 3.2 や Qwen2.5 を含む現代の小型モデルはツール／関数呼び出しに対応し、信頼できる機器の動作を出力させます。' } },
        { '@type': 'Question', name: 'Raspberry Pi に最適なモデルは？', acceptedAnswer: { '@type': 'Answer', text: 'Gemma 2 2B のような 2B か小型の 3B モデルが Pi での実用的な上限で、応答は遅めです。GPU/NPU 付きのミニPCがより良いホストです。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Melhores Modelos LLM Locais para o Controle da Casa Inteligente (2026)',
    seoTitle: 'Melhores LLMs Locais para Home Assistant (2026)',
    intro:
      'Os melhores modelos LLM locais para o controle da casa inteligente são modelos pequenos, rápidos e que seguem instruções, com chamada de funções confiável — não o maior modelo que o seu hardware consegue conter. Este guia explica o que realmente importa para o controle do lar, dá uma lista curta de modelos pequenos adequados, os compara e mapeia escolhas a orçamentos de hardware, com link externo para guias de modelos mais profundos em vez de reordenar todo o campo.',
    metaDescription:
      'Os melhores modelos LLM locais para o controle da casa inteligente em 2026: modelos pequenos, rápidos e com chamada de funções que rodam em hardware modesto. Lista curta e escolhas por orçamento.',
    twitterDescription:
      'Melhores modelos LLM locais para o controle com Home Assistant: modelos pequenos, rápidos e com chamada de funções, em vez do maior modelo que você consegue rodar. Escolhas por orçamento de hardware.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Usuários do Home Assistant escolhendo um modelo local para o controle de dispositivos',
    primaryTerm: 'best local LLM for home control',
    targetKeywords: [
      'melhor llm local para home assistant',
      'melhor llm local casa inteligente',
      'modelo llm local controle do lar',
      'chamada de funções llm local',
      'llm local pequeno automação residencial',
    ],
    leadAnswerBlock:
      '**Para o controle da casa inteligente, escolha um modelo de instruções pequeno com chamada de funções confiável — um modelo de 3B–8B é o ponto ideal, porque o controle do lar premia a baixa latência e a saída estruturada sobre a capacidade bruta.** Ajuste o modelo ao seu hardware em vez de escolher o maior disponível.',
    quickAnswerTop: {
      pt: {
        question: 'Qual o melhor LLM local para o controle da casa inteligente?',
        answer:
          'Um modelo pequeno que siga instruções com chamada de funções sólida, normalmente na faixa de 3B a 8B, é o melhor ajuste para o controle do lar porque responde rápido e emite ações de dispositivo confiáveis. Modelos como Llama 3.2 3B e Qwen2.5 7B são escolhas comuns; a escolha certa depende do seu hardware e das suas necessidades de idioma.',
        bullets: [
          'Priorize baixa latência e chamada de funções sobre o tamanho',
          'Modelos 3B servem para hardware de baixo consumo; 7B–8B para um mini PC com GPU',
          'Llama 3.2 3B e Qwen2.5 7B são pontos de partida comuns',
          'Escolha um modelo com forte suporte ao seu idioma falado',
          'Modelos maiores acrescentam pouco para o controle simples de dispositivos',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'O que importa para o controle do lar', anchor: 'what-matters' },
      { label: 'A lista curta', anchor: 'shortlist' },
      { label: 'Comparação', anchor: 'comparison' },
      { label: 'Por orçamento de hardware', anchor: 'by-budget' },
      { label: 'Como escolher', anchor: 'how-to-pick' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'O melhor LLM local para o controle da casa inteligente é um modelo de instruções pequeno (3B–8B) com chamada de funções confiável, escolhido por baixa latência em vez de tamanho bruto.' },
      { type: 'plain-terms', content: 'Controlar um lar não precisa de um modelo gigante — precisa de um que responda rápido e emita de forma confiável comandos estruturados que o hub possa executar. Modelos pequenos na faixa de 3B a 8B fazem isso bem e rodam em hardware modesto. Os rankings de modelos mais profundos ficam no cluster local-llms; este guia foca o ângulo do controle do lar.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'O controle do lar premia a baixa latência e a chamada de funções confiável, não o tamanho máximo do modelo',
          'Um modelo 3B serve para hardware de baixo consumo; um modelo 7B–8B para um mini PC com GPU ou NPU',
          'Llama 3.2 3B (Meta) e Qwen2.5 7B (Alibaba) são escolhas comuns e bem suportadas',
          'Escolha um modelo com forte suporte ao idioma em que você fala com ele',
          'Modelos maiores acrescentam latência com pouco benefício para o controle simples de dispositivos',
          'Para rankings e mecânica de modelos profundos, faça link externo para o cluster local-llms',
        ],
      },
      whatMatters: {
        id: 'what-matters',
        title: 'O que importa para o controle do lar',
        content:
          '**Três coisas decidem um bom modelo de controle do lar: latência, chamada de funções confiável e um tamanho que caiba no seu hardware.** As tabelas de líderes de benchmark importam muito menos aqui que a capacidade de resposta.',
        items: [
          '**Latência:** um comando de voz deve parecer quase instantâneo; modelos menores em hardware capaz respondem mais rápido.',
          '**Chamada de funções:** o modelo deve emitir ações de dispositivo estruturadas de forma confiável — essa é a capacidade decisiva.',
          '**Ajuste:** o modelo deve rodar confortavelmente na máquina que também hospeda o Home Assistant — veja [melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      shortlist: {
        id: 'shortlist',
        title: 'A lista curta',
        content:
          '**Estes modelos pequenos são escolhas comuns e bem suportadas para o controle do lar em diferentes orçamentos de hardware.** Use um modelo 3B em hardware leve e um modelo 7B–8B quando você tiver uma GPU ou NPU.',
        items: [
          '**Llama 3.2 3B (Meta):** um modelo de 3 bilhões de parâmetros que roda em hardware modesto com bom seguimento de instruções e chamada de funções.',
          '**Qwen2.5 7B (Alibaba):** um sólido modelo 7B versátil com uso confiável de ferramentas e boa cobertura multilíngue.',
          '**Qwen2.5 3B (Alibaba):** uma opção mais leve quando você quer menor latência em uma CPU ou GPU integrada.',
          '**Phi-3.5 Mini 3.8B (Microsoft):** um modelo compacto que rende acima do seu tamanho no seguimento de instruções.',
          '**Gemma 2 2B (Google):** um modelo muito pequeno para os hosts de menor consumo onde a latência é crítica.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparação',
        content:
          '**Escolha por hardware e idioma: modelos menores para hardware só-CPU ou de classe Pi, 7B para um mini PC com GPU.** Os tamanhos abaixo são aproximados na quantização comum de 4 bits.',
        columns: ['Modelo', 'Parâmetros', 'Tamanho aprox. (Q4)', 'Melhor para'],
        rows: [
          { 'Modelo': 'Gemma 2 2B', 'Parâmetros': '2B', 'Tamanho aprox. (Q4)': '~1,5–2 GB', 'Melhor para': 'Hosts de menor consumo, menor latência' },
          { 'Modelo': 'Llama 3.2 3B', 'Parâmetros': '3B', 'Tamanho aprox. (Q4)': '~2–3 GB', 'Melhor para': 'Padrão equilibrado em hardware modesto' },
          { 'Modelo': 'Qwen2.5 3B', 'Parâmetros': '3B', 'Tamanho aprox. (Q4)': '~2–3 GB', 'Melhor para': 'Multilíngue, baixa latência' },
          { 'Modelo': 'Phi-3.5 Mini 3.8B', 'Parâmetros': '3.8B', 'Tamanho aprox. (Q4)': '~2,5–3 GB', 'Melhor para': 'Forte seguimento de instruções, compacto' },
          { 'Modelo': 'Qwen2.5 7B', 'Parâmetros': '7B', 'Tamanho aprox. (Q4)': '~4–5 GB', 'Melhor para': 'Melhor qualidade com uma GPU/NPU' },
        ],
        items: [
          'Os tamanhos são aproximados e dependem da quantização — para VRAM e profundidade de quantização, faça link externo para o cluster local-llms.',
        ],
      },
      byBudget: {
        id: 'by-budget',
        title: 'Escolhas por orçamento de hardware',
        content:
          '**Escolha um modelo 2B–3B em uma Pi ou mini PC só-CPU; escolha um modelo 7B quando você tiver uma GPU ou NPU.** Isso mantém as respostas ágeis em cada nível.',
        items: [
          '**Raspberry Pi / baixo consumo:** Gemma 2 2B ou um modelo 3B, aceitando respostas mais lentas.',
          '**Mini PC (só CPU):** Llama 3.2 3B ou Qwen2.5 3B como padrão responsivo.',
          '**Mini PC com GPU/NPU:** Qwen2.5 7B para a melhor qualidade com latência aceitável — veja [melhores mini PCs para Home Assistant + IA local](/pt/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      howToPick: {
        id: 'how-to-pick',
        title: 'Como escolher',
        content:
          '**Comece com um modelo 3B, confirme a latência e as ações de dispositivo confiáveis, e passe para 7B só se faltar qualidade.** Teste com os seus comandos reais antes de se comprometer.',
        items: [
          'Instale pela [integração do Ollama](/pt/smart-home/home-assistant-ollama-integration) e teste os seus comandos comuns.',
          'Se as respostas forem lentas, baixe um tamanho ou adicione uma GPU/NPU.',
          'Se as ações não forem confiáveis, prefira um modelo conhecido pela chamada de funções.',
          'Para rankings e mecânica de modelos profundos, veja [melhores LLMs locais 2026](/pt/local-llms/best-local-llms-2026) (entre clusters) — este guia permanece específico do controle do lar.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Qual o menor modelo usável para o controle do lar?', a: 'Um modelo 2B como o Gemma 2 2B é usável para o controle simples de dispositivos em hardware de baixo consumo, trocando alguma compreensão por velocidade. Um modelo 3B é um equilíbrio melhor se o seu hardware permitir.' },
          { q: 'Um modelo de controle do lar precisa de uma GPU?', a: 'Não para modelos 2B–3B, que rodam em CPU ou uma GPU integrada. Uma GPU ou NPU principalmente permite rodar um modelo 7B com baixa latência para melhor compreensão. Ajuste o modelo ao seu hardware.' },
          { q: 'Quais modelos suportam chamada de funções?', a: 'Modelos pequenos modernos, incluindo Llama 3.2 e Qwen2.5, suportam a chamada de ferramentas/funções, que é a capacidade que lhes permite emitir ações de dispositivo confiáveis. Prefira um modelo documentado para suportá-la no controle do lar.' },
          { q: 'Qual o melhor modelo para uma Raspberry Pi?', a: 'Um modelo 2B como o Gemma 2 2B, ou um modelo 3B pequeno, é o teto prático em uma Raspberry Pi, e as respostas serão mais lentas que em um mini PC. Para um assistente ágil, um mini PC com GPU/NPU é o melhor host.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Conectar o Ollama ao Home Assistant](/pt/smart-home/home-assistant-ollama-integration) — instale e teste o modelo escolhido',
          '[Rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide) — a arquitetura completa',
          '[Melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home) — ajuste o tamanho do modelo ao hardware',
          '[Melhores LLMs locais 2026](/pt/local-llms/best-local-llms-2026) — entre clusters: rankings de modelos profundos',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Melhores Modelos LLM Locais para o Controle da Casa Inteligente (2026)',
      description: 'Os melhores modelos LLM locais para o controle da casa inteligente em 2026: modelos pequenos, rápidos e com chamada de funções que rodam em hardware modesto. Lista curta e escolhas por orçamento.',
      url: 'https://www.promptquorum.com/pt/smart-home/best-local-llm-models-smart-home',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'LLM local' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Chamada de funções' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Qual o menor modelo usável para o controle do lar?', acceptedAnswer: { '@type': 'Answer', text: 'Um modelo 2B como o Gemma 2 2B é usável para o controle simples de dispositivos em hardware de baixo consumo. Um modelo 3B é um equilíbrio melhor se o seu hardware permitir.' } },
        { '@type': 'Question', name: 'Um modelo de controle do lar precisa de uma GPU?', acceptedAnswer: { '@type': 'Answer', text: 'Não para modelos 2B–3B, que rodam em CPU ou GPU integrada. Uma GPU ou NPU principalmente permite rodar um modelo 7B com baixa latência.' } },
        { '@type': 'Question', name: 'Quais modelos suportam chamada de funções?', acceptedAnswer: { '@type': 'Answer', text: 'Modelos pequenos modernos como Llama 3.2 e Qwen2.5 suportam a chamada de ferramentas/funções, que lhes permite emitir ações de dispositivo confiáveis.' } },
        { '@type': 'Question', name: 'Qual o melhor modelo para uma Raspberry Pi?', acceptedAnswer: { '@type': 'Answer', text: 'Um modelo 2B como o Gemma 2 2B ou um modelo 3B pequeno é o teto prático em uma Pi, com respostas mais lentas. Um mini PC com GPU/NPU é o melhor host.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: '智能家居控制的最佳本地 LLM 模型（2026）',
    seoTitle: 'Home Assistant 的最佳本地 LLM（2026）',
    intro:
      '智能家居控制的最佳本地 LLM 模型，是具备可靠函数调用、小而快、能遵循指令的模型——而不是你硬件能容纳的最大模型。本指南讲解家庭控制真正重要的是什么，给出一份适用小型模型的精选清单，对它们进行比较，并把选择对应到硬件预算，并以外链指向更深入的模型指南，而非把整个领域重新排名。',
    metaDescription:
      '2026 年智能家居控制的最佳本地 LLM 模型：在普通硬件上运行的小而快、支持函数调用的模型。精选清单与按预算的选择。',
    twitterDescription:
      'Home Assistant 控制的最佳本地 LLM 模型：相较你能运行的最大模型，更应选小而快、支持函数调用的模型。按硬件预算给出选择。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    audience: '为设备控制选择本地模型的 Home Assistant 用户',
    primaryTerm: 'best local LLM for home control',
    targetKeywords: [
      '最佳本地llm home assistant',
      '最佳本地llm 智能家居',
      '本地llm 模型 家庭控制',
      '函数调用 本地llm',
      '小型本地llm 家庭自动化',
    ],
    leadAnswerBlock:
      '**对于智能家居控制，选择一个具备可靠函数调用的小型指令模型——3B–8B 的模型是最佳区间，因为家庭控制更看重低延迟和结构化输出，而非纯粹的能力。** 把模型匹配到你的硬件，而不是挑可得的最大模型。',
    quickAnswerTop: {
      zh: {
        question: '智能家居控制的最佳本地 LLM 是哪个？',
        answer:
          '一个能遵循指令、具备扎实函数调用、通常在 3B 到 8B 之间的小型模型，最适合家庭控制，因为它响应快并能输出可靠的设备动作。Llama 3.2 3B 和 Qwen2.5 7B 是常见选择；正确的选择取决于你的硬件和语言需求。',
        bullets: [
          '把低延迟和函数调用置于大小之上',
          '3B 模型适合低功耗硬件；7B–8B 适合带 GPU 的迷你 PC',
          'Llama 3.2 3B 和 Qwen2.5 7B 是常见起点',
          '选择对你所说语言有强力支持的模型',
          '对于简单的设备控制，更大的模型几乎无益',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '家庭控制重要的是什么', anchor: 'what-matters' },
      { label: '精选清单', anchor: 'shortlist' },
      { label: '比较', anchor: 'comparison' },
      { label: '按硬件预算', anchor: 'by-budget' },
      { label: '如何选择', anchor: 'how-to-pick' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '智能家居控制的最佳本地 LLM 是一个具备可靠函数调用的小型（3B–8B）指令模型，以低延迟而非纯粹的大小来选择。' },
      { type: 'plain-terms', content: '控制一个家并不需要巨型模型——它需要一个响应快、能可靠输出中枢可执行的结构化命令的模型。3B 到 8B 的小型模型在这方面表现良好，并能在普通硬件上运行。更深入的模型排名在 local-llms 集群中；本指南专注于家庭控制这一角度。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          '家庭控制看重低延迟和可靠的函数调用，而非最大的模型大小',
          '3B 模型适合低功耗硬件；7B–8B 模型适合带 GPU 或 NPU 的迷你 PC',
          'Llama 3.2 3B（Meta）和 Qwen2.5 7B（Alibaba）是常见且受良好支持的选择',
          '选择对你与它交谈所用语言有强力支持的模型',
          '对于简单的设备控制，更大的模型增加延迟却收益甚微',
          '关于深入的模型排名与机制，以外链指向 local-llms 集群',
        ],
      },
      whatMatters: {
        id: 'what-matters',
        title: '家庭控制重要的是什么',
        content:
          '**有三点决定一个好的家庭控制模型：延迟、可靠的函数调用，以及与你硬件相称的大小。** 在这里，基准排行榜远不如响应性重要。',
        items: [
          '**延迟：** 语音命令应当近乎即时；高性能硬件上的小型模型响应更快。',
          '**函数调用：** 模型必须可靠地输出结构化的设备动作——这是决定性的能力。',
          '**相称：** 模型必须能在同时托管 Home Assistant 的机器上从容运行——参见[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home)。',
        ],
      },
      shortlist: {
        id: 'shortlist',
        title: '精选清单',
        content:
          '**这些小型模型是跨不同硬件预算、用于家庭控制的常见且受良好支持的选择。** 在轻量硬件上用 3B 模型，有 GPU 或 NPU 时用 7B–8B 模型。',
        items: [
          '**Llama 3.2 3B（Meta）：** 一个 30 亿参数的模型，能在普通硬件上以良好的指令遵循和函数调用运行。',
          '**Qwen2.5 7B（Alibaba）：** 一个强力的全能 7B 模型，工具使用可靠且多语言覆盖良好。',
          '**Qwen2.5 3B（Alibaba）：** 当你想在 CPU 或集成 GPU 上获得更低延迟时的更轻选项。',
          '**Phi-3.5 Mini 3.8B（Microsoft）：** 一个紧凑模型，在指令遵循上的表现超出其体量。',
          '**Gemma 2 2B（Google）：** 一个非常小的模型，适合延迟攸关、最低功耗的主机。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '比较',
        content:
          '**按硬件和语言选择：仅 CPU 或 Pi 级硬件用更小的模型，带 GPU 的迷你 PC 用 7B。** 下面的大小为常见 4 位量化下的近似值。',
        columns: ['模型', '参数量', '近似占用 (Q4)', '最适合'],
        rows: [
          { '模型': 'Gemma 2 2B', '参数量': '2B', '近似占用 (Q4)': '约 1.5–2 GB', '最适合': '最低功耗主机、最低延迟' },
          { '模型': 'Llama 3.2 3B', '参数量': '3B', '近似占用 (Q4)': '约 2–3 GB', '最适合': '普通硬件上的均衡默认' },
          { '模型': 'Qwen2.5 3B', '参数量': '3B', '近似占用 (Q4)': '约 2–3 GB', '最适合': '多语言、低延迟' },
          { '模型': 'Phi-3.5 Mini 3.8B', '参数量': '3.8B', '近似占用 (Q4)': '约 2.5–3 GB', '最适合': '强指令遵循、紧凑' },
          { '模型': 'Qwen2.5 7B', '参数量': '7B', '近似占用 (Q4)': '约 4–5 GB', '最适合': '配 GPU/NPU 时的最佳质量' },
        ],
        items: [
          '占用为近似值，取决于量化——关于 VRAM 和量化细节，以外链指向 local-llms 集群。',
        ],
      },
      byBudget: {
        id: 'by-budget',
        title: '按硬件预算的选择',
        content:
          '**在 Pi 或仅 CPU 的迷你 PC 上用 2B–3B 模型；有 GPU 或 NPU 时用 7B 模型。** 这能在每一档都保持响应灵敏。',
        items: [
          '**Raspberry Pi / 低功耗：** Gemma 2 2B 或一个 3B 模型，接受更慢的响应。',
          '**迷你 PC（仅 CPU）：** 以 Llama 3.2 3B 或 Qwen2.5 3B 作为响应良好的默认。',
          '**带 GPU/NPU 的迷你 PC：** 要在可接受延迟下获得最佳质量就用 Qwen2.5 7B——参见[Home Assistant + 本地 AI 的最佳迷你 PC](/zh/smart-home/best-mini-pc-home-assistant-local-ai)。',
        ],
      },
      howToPick: {
        id: 'how-to-pick',
        title: '如何选择',
        content:
          '**从 3B 模型开始，确认延迟和可靠的设备动作，仅在质量不足时才换到 7B。** 在最终确定之前，用你真实的命令测试。',
        items: [
          '经由 [Ollama 集成](/zh/smart-home/home-assistant-ollama-integration) 安装，并测试你常用的命令。',
          '若响应缓慢，降一档或加一块 GPU/NPU。',
          '若动作不可靠，优先选择以函数调用著称的模型。',
          '关于深入的模型排名与机制，参见[2026 最佳本地 LLM](/zh/local-llms/best-local-llms-2026)（跨集群）——本指南保持专注于家庭控制。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '家庭控制可用的最小模型是哪个？', a: '像 Gemma 2 2B 这样的 2B 模型，可用于低功耗硬件上的简单设备控制，以部分理解力换取速度。若你的硬件允许，3B 模型是更好的平衡。' },
          { q: '家庭控制模型需要 GPU 吗？', a: '2B–3B 模型不需要，它们在 CPU 或集成 GPU 上运行。GPU 或 NPU 主要让你以低延迟运行 7B 模型以获得更好理解。把模型匹配到你的硬件。' },
          { q: '哪些模型支持函数调用？', a: '包括 Llama 3.2 和 Qwen2.5 在内的现代小型模型支持工具/函数调用，这正是让它们输出可靠设备动作的能力。家庭控制请优先选择有文档支持的模型。' },
          { q: 'Raspberry Pi 的最佳模型是哪个？', a: '像 Gemma 2 2B 这样的 2B 模型，或一个小型 3B 模型，是 Raspberry Pi 上的实际上限，响应会比迷你 PC 更慢。要想助手灵敏，带 GPU/NPU 的迷你 PC 是更好的主机。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[把 Ollama 连接到 Home Assistant](/zh/smart-home/home-assistant-ollama-integration) — 安装并测试你选定的模型',
          '[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide) — 完整架构',
          '[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home) — 把模型大小匹配到硬件',
          '[2026 最佳本地 LLM](/zh/local-llms/best-local-llms-2026) — 跨集群：深入的模型排名',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '智能家居控制的最佳本地 LLM 模型（2026）',
      description: '2026 年智能家居控制的最佳本地 LLM 模型：在普通硬件上运行的小而快、支持函数调用的模型。精选清单与按预算的选择。',
      url: 'https://www.promptquorum.com/zh/smart-home/best-local-llm-models-smart-home',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '本地 LLM' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: '函数调用' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '家庭控制可用的最小模型是哪个？', acceptedAnswer: { '@type': 'Answer', text: '像 Gemma 2 2B 这样的 2B 模型可用于低功耗硬件上的简单设备控制。若硬件允许，3B 模型是更好的平衡。' } },
        { '@type': 'Question', name: '家庭控制模型需要 GPU 吗？', acceptedAnswer: { '@type': 'Answer', text: '2B–3B 模型不需要，它们在 CPU 或集成 GPU 上运行。GPU 或 NPU 主要让你以低延迟运行 7B 模型。' } },
        { '@type': 'Question', name: '哪些模型支持函数调用？', acceptedAnswer: { '@type': 'Answer', text: '包括 Llama 3.2 和 Qwen2.5 在内的现代小型模型支持工具/函数调用，让它们输出可靠的设备动作。' } },
        { '@type': 'Question', name: 'Raspberry Pi 的最佳模型是哪个？', acceptedAnswer: { '@type': 'Answer', text: '像 Gemma 2 2B 这样的 2B 模型或一个小型 3B 模型是 Pi 上的实际上限，响应更慢。带 GPU/NPU 的迷你 PC 是更好的主机。' } },
      ],
    },
  },
}

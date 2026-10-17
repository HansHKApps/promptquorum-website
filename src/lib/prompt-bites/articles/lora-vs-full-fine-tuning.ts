import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/lora-vs-full-fine-tuning-overview-hero-en.webp',
    title: 'LoRA vs Full Fine-Tuning: Which Should You Use?',
    seoTitle: 'LoRA vs Full Fine-Tuning: Which to Use? | Prompt Bites',
    metaDescription:
      'LoRA trains a small set of added weights and needs far less VRAM than full fine-tuning, which updates every parameter in the model.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers deciding how to adapt a local model to their own data',
    siblingBites: ['fine-tuning-7b-model-locally-hardware', 'best-model-merging-tool-mergekit', 'best-local-llm-license-comparison'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>LoRA trains a small number of added low-rank weight matrices while keeping the original model frozen, which needs far less VRAM than full fine-tuning, where every parameter in the model is updated.</strong> Full fine-tuning can reach slightly higher quality on large, well-curated datasets, but LoRA is the practical default for most local setups.',
    toc: [
      { label: 'Best Pick: LoRA for Most Local Setups', anchor: '#best-pick' },
      { label: 'Key Differences', anchor: '#key-differences' },
      { label: 'When to Use Each', anchor: '#when-to-use' },
      { label: 'Learns Less, Forgets Less', anchor: '#learns-less-forgets-less' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      en: {
        question: 'Should I use LoRA or full fine-tuning?',
        answer:
          'Use LoRA unless you have a large, high-quality dataset and enough VRAM for full fine-tuning. LoRA trains a small set of added weights on top of a frozen base model, which uses far less memory and still adapts behavior effectively for most tasks.',
        bullets: [
          'LoRA freezes the base model and trains small added weight matrices — much lower VRAM cost.',
          'Full fine-tuning updates every parameter and can edge out LoRA in quality with enough clean data.',
          'LoRA adapters are small files that can be swapped in and out of the same base model.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'LoRA freezes the base model and trains small added weights, using much less VRAM than full fine-tuning',
          'Full fine-tuning updates every parameter and can reach slightly higher quality with large, clean datasets',
          'LoRA adapters are small, swappable files — several task-specific adapters can share one base model',
          'A 7B model that needs 80GB+ of VRAM for full fine-tuning can often be LoRA fine-tuned on a single consumer GPU',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'LoRA trains a small set of added weights and needs far less VRAM than full fine-tuning, which updates every parameter in the model.' },
          { type: 'plain-terms', text: 'In plain terms: LoRA is a lightweight, cheap way to adjust a model\'s behavior; full fine-tuning is a heavier, more expensive way that touches the whole model.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: LoRA for Most Local Setups',
        content: [
          '<strong>LoRA is the right default for adapting a local model on consumer hardware, because it trains a small fraction of the parameters while achieving results close to full fine-tuning for most instruction-following and style-adaptation tasks.</strong> Use LoRA if: you have a single consumer GPU, a dataset in the thousands (not millions) of examples, or you want to keep several task-specific variants of the same base model without storing full copies of each.',
          'Use full fine-tuning if: you have a large, well-curated dataset (typically hundreds of thousands of examples or more), access to multiple high-VRAM GPUs, and the task requires deeper changes to the model\'s underlying representations than LoRA\'s added matrices can capture. If unsure, start with LoRA — it is faster to iterate on and can be upgraded to full fine-tuning later if quality plateaus.',
        ],
      },
      keyDifferences: {
        id: 'key-differences',
        title: 'Key Differences',
        content: [
          'LoRA (Low-Rank Adaptation) inserts small trainable weight matrices into a model while keeping the original weights frozen, which cuts the memory and compute needed for training by a large margin compared to updating every parameter. The frozen base model still needs to be loaded for training, but the optimizer only needs to track gradients for the small added matrices, which is where most of the VRAM savings come from.',
          'Full fine-tuning updates the entire model and can produce marginally better results on large, well-curated datasets, but requires substantially more VRAM and storage, since the output is a full copy of the model rather than a small adapter file. The optimizer state for full fine-tuning (particularly with common optimizers like Adam) typically requires several times the model\'s own memory footprint, which is why full fine-tuning a 7B model often needs multiple high-VRAM GPUs.',
        ],
        columns: ['', 'LoRA', 'Full Fine-Tuning'],
        rows: [
          { '': 'Parameters updated', 'LoRA': 'Small added matrices only', 'Full Fine-Tuning': 'Every parameter in the model' },
          { '': 'Typical VRAM need (7B model)', 'LoRA': 'Single consumer GPU, often under 24GB', 'Full Fine-Tuning': 'Multiple high-VRAM GPUs' },
          { '': 'Output artifact', 'LoRA': 'Small adapter file (megabytes)', 'Full Fine-Tuning': 'Full model copy (gigabytes)' },
          { '': 'Swappable across tasks', 'LoRA': 'Yes — multiple adapters, one base model', 'Full Fine-Tuning': 'No — each result is a separate full model' },
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: 'When to Use Each',
        content: [
          'Choose LoRA when adapting a model\'s tone, format, or narrow task behavior — these are exactly the kinds of changes LoRA\'s added matrices capture well without touching the model\'s broader knowledge. Choose full fine-tuning when the task requires the model to absorb substantial new factual knowledge or fundamentally shift its behavior across a very broad range of inputs, which benefits more from updating every parameter.',
          'If unsure, start with LoRA and evaluate quality on your own held-out test set before considering full fine-tuning — the iteration speed of LoRA (faster training, smaller checkpoints) makes it cheaper to experiment with different data mixes and hyperparameters first.',
        ],
      },
      tradeoffs: {
        id: 'learns-less-forgets-less',
        title: 'LoRA Learns Less and Forgets Less',
        content: [
          'A controlled study of LoRA and full fine-tuning on code and math tasks (Biderman et al., published in TMLR) found that standard low-rank LoRA settings substantially underperform full fine-tuning when a task requires learning a large amount of new knowledge, while LoRA preserves more of the base model\'s original abilities on unrelated tasks. The authors link the gap to rank: full fine-tuning updates weights with a rank 10 to 100 times higher than typical LoRA configurations.',
          'In practice, LoRA is the safer choice when you want to adjust behavior without damaging general ability, and full fine-tuning is the better choice when you must teach the model a large new body of domain knowledge. Raising the LoRA rank and applying it to more weight matrices can narrow the gap, at the cost of more memory.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I combine multiple LoRA adapters on one base model?',
            a: 'Yes — LoRA adapters are small and swappable, so several task-specific adapters can be trained against the same frozen base model and loaded as needed, without keeping multiple full model copies on disk.',
          },
          {
            q: 'Does LoRA reduce output quality compared to full fine-tuning?',
            a: 'For most instruction-following and style-adaptation tasks, the quality gap between LoRA and full fine-tuning is small. The gap widens mainly when the task requires the model to absorb large amounts of new factual knowledge, where full fine-tuning\'s ability to update every parameter has a clearer advantage.',
          },
          {
            q: 'Can I merge a LoRA adapter back into the base model?',
            a: 'Yes — LoRA adapters can be merged into the base model\'s weights to produce a single standalone model file, which removes the need to load the adapter separately at inference time but also removes the ability to swap it out for a different task.',
          },
          {
            q: 'How much VRAM does LoRA fine-tuning actually save compared to full fine-tuning?',
            a: 'The exact figure depends on model size, LoRA rank, and optimizer choice, but LoRA commonly cuts required training VRAM by roughly an order of magnitude compared to full fine-tuning of the same base model, since gradients and optimizer state are only tracked for the small added matrices.',
          },
          {
            q: 'What is QLoRA and how does it relate to LoRA?',
            a: 'QLoRA is LoRA applied on top of a base model loaded in 4-bit quantized form. The frozen base weights take far less memory while the small LoRA matrices are still trained in higher precision, so larger models fit on a single GPU than with standard LoRA.',
          },
          {
            q: 'Which models can be fine-tuned with LoRA?',
            a: 'LoRA works with essentially any transformer-based model, including language and image-generation models, because it adds low-rank matrices to existing weight layers. Libraries such as Hugging Face PEFT let you choose which layers to adapt and which rank to use.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/lora-vs-full-fine-tuning-overview-hero-de.webp',
    title: 'LoRA vs. vollständiges Fine-Tuning: Was sollten Sie verwenden?',
    seoTitle: 'LoRA vs. vollständiges Fine-Tuning | Prompt Bites',
    metaDescription:
      'LoRA trainiert eine kleine Menge zusätzlicher Gewichte und benötigt deutlich weniger VRAM als vollständiges Fine-Tuning, bei dem jeder Parameter des Modells aktualisiert wird.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die entscheiden müssen, wie sie ein lokales Modell an ihre eigenen Daten anpassen',
    siblingBites: ['fine-tuning-7b-model-locally-hardware', 'best-model-merging-tool-mergekit', 'best-local-llm-license-comparison'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>LoRA trainiert eine kleine Anzahl zusätzlicher Low-Rank-Gewichtsmatrizen, während das ursprüngliche Modell eingefroren bleibt, was deutlich weniger VRAM benötigt als vollständiges Fine-Tuning, bei dem jeder Parameter des Modells aktualisiert wird.</strong> Vollständiges Fine-Tuning kann bei großen, sorgfältig kuratierten Datensätzen eine etwas höhere Qualität erreichen, aber LoRA ist für die meisten lokalen Setups die praktische Standardwahl.',
    toc: [
      { label: 'Beste Wahl: LoRA für die meisten lokalen Setups', anchor: '#best-pick' },
      { label: 'Wesentliche Unterschiede', anchor: '#key-differences' },
      { label: 'Wann Sie welches Verfahren einsetzen sollten', anchor: '#when-to-use' },
      { label: 'Lernt weniger, vergisst weniger', anchor: '#learns-less-forgets-less' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Sollte ich LoRA oder vollständiges Fine-Tuning verwenden?',
        answer:
          'Verwenden Sie LoRA, außer Sie verfügen über einen großen, hochwertigen Datensatz und genug VRAM für vollständiges Fine-Tuning. LoRA trainiert eine kleine Menge zusätzlicher Gewichte auf einem eingefrorenen Basismodell, was deutlich weniger Speicher benötigt und das Verhalten für die meisten Aufgaben trotzdem effektiv anpasst.',
        bullets: [
          'LoRA friert das Basismodell ein und trainiert kleine zusätzliche Gewichtsmatrizen — deutlich geringerer VRAM-Bedarf.',
          'Vollständiges Fine-Tuning aktualisiert jeden Parameter und kann bei ausreichend sauberen Daten LoRA in der Qualität leicht übertreffen.',
          'LoRA-Adapter sind kleine Dateien, die sich bei demselben Basismodell austauschen lassen.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'LoRA friert das Basismodell ein und trainiert kleine zusätzliche Gewichte, wodurch deutlich weniger VRAM benötigt wird als bei vollständigem Fine-Tuning',
          'Vollständiges Fine-Tuning aktualisiert jeden Parameter und kann bei großen, sauberen Datensätzen eine leicht höhere Qualität erreichen',
          'LoRA-Adapter sind kleine, austauschbare Dateien — mehrere aufgabenspezifische Adapter können sich ein Basismodell teilen',
          'Ein 7B-Modell, das für vollständiges Fine-Tuning 80GB+ VRAM benötigt, lässt sich mit LoRA oft auf einer einzelnen Consumer-GPU feinabstimmen',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'LoRA trainiert eine kleine Menge zusätzlicher Gewichte und benötigt deutlich weniger VRAM als vollständiges Fine-Tuning, bei dem jeder Parameter des Modells aktualisiert wird.' },
          { type: 'plain-terms', text: 'Einfach gesagt: LoRA ist eine leichtgewichtige, günstige Methode, um das Verhalten eines Modells anzupassen; vollständiges Fine-Tuning ist eine aufwendigere, teurere Methode, die das gesamte Modell betrifft.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: LoRA für die meisten lokalen Setups',
        content: [
          '<strong>LoRA ist die richtige Standardwahl, um ein lokales Modell auf Consumer-Hardware anzupassen, da es nur einen kleinen Teil der Parameter trainiert und bei den meisten Aufgaben zur Befolgung von Anweisungen und zur Stilanpassung Ergebnisse nahe an vollständigem Fine-Tuning erzielt.</strong> Verwenden Sie LoRA, wenn: Sie über eine einzelne Consumer-GPU verfügen, Ihr Datensatz im Bereich von Tausenden (nicht Millionen) Beispielen liegt, oder Sie mehrere aufgabenspezifische Varianten desselben Basismodells vorhalten möchten, ohne vollständige Kopien jeder Variante zu speichern.',
          'Verwenden Sie vollständiges Fine-Tuning, wenn: Sie über einen großen, sorgfältig kuratierten Datensatz verfügen (typischerweise Hunderttausende Beispiele oder mehr), Zugriff auf mehrere GPUs mit hohem VRAM haben und die Aufgabe tiefere Veränderungen an den zugrunde liegenden Repräsentationen des Modells erfordert, als die zusätzlichen Matrizen von LoRA erfassen können. Im Zweifel beginnen Sie mit LoRA — es lässt sich schneller iterieren und kann später auf vollständiges Fine-Tuning aufgestuft werden, wenn die Qualität stagniert.',
        ],
      },
      keyDifferences: {
        id: 'key-differences',
        title: 'Wesentliche Unterschiede',
        content: [
          'LoRA (Low-Rank Adaptation) fügt einem Modell kleine trainierbare Gewichtsmatrizen hinzu, während die ursprünglichen Gewichte eingefroren bleiben, was den für das Training nötigen Speicher- und Rechenaufwand im Vergleich zur Aktualisierung jedes Parameters erheblich reduziert. Das eingefrorene Basismodell muss für das Training weiterhin geladen werden, aber der Optimizer muss Gradienten nur für die kleinen zusätzlichen Matrizen verfolgen, woraus sich der Großteil der VRAM-Einsparung ergibt.',
          'Vollständiges Fine-Tuning aktualisiert das gesamte Modell und kann bei großen, sorgfältig kuratierten Datensätzen geringfügig bessere Ergebnisse liefern, benötigt aber deutlich mehr VRAM und Speicherplatz, da das Ergebnis eine vollständige Kopie des Modells ist und keine kleine Adapterdatei. Der Optimizer-Zustand für vollständiges Fine-Tuning (insbesondere bei gängigen Optimierern wie Adam) benötigt typischerweise ein Vielfaches des eigenen Speicherbedarfs des Modells, weshalb vollständiges Fine-Tuning eines 7B-Modells oft mehrere GPUs mit hohem VRAM erfordert.',
        ],
        columns: ['', 'LoRA', 'Vollständiges Fine-Tuning'],
        rows: [
          { '': 'Aktualisierte Parameter', 'LoRA': 'Nur kleine zusätzliche Matrizen', 'Vollständiges Fine-Tuning': 'Jeder Parameter im Modell' },
          { '': 'Typischer VRAM-Bedarf (7B-Modell)', 'LoRA': 'Einzelne Consumer-GPU, oft unter 24GB', 'Vollständiges Fine-Tuning': 'Mehrere GPUs mit hohem VRAM' },
          { '': 'Ausgabeartefakt', 'LoRA': 'Kleine Adapterdatei (Megabyte)', 'Vollständiges Fine-Tuning': 'Vollständige Modellkopie (Gigabyte)' },
          { '': 'Zwischen Aufgaben austauschbar', 'LoRA': 'Ja — mehrere Adapter, ein Basismodell', 'Vollständiges Fine-Tuning': 'Nein — jedes Ergebnis ist ein eigenes vollständiges Modell' },
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: 'Wann Sie welches Verfahren einsetzen sollten',
        content: [
          'Wählen Sie LoRA, wenn Sie Tonalität, Format oder ein eng begrenztes Aufgabenverhalten eines Modells anpassen — genau solche Änderungen erfassen die zusätzlichen Matrizen von LoRA gut, ohne das breitere Wissen des Modells zu beeinträchtigen. Wählen Sie vollständiges Fine-Tuning, wenn die Aufgabe erfordert, dass das Modell erhebliches neues Faktenwissen aufnimmt oder sein Verhalten über ein sehr breites Spektrum an Eingaben grundlegend verändert, was stärker von der Aktualisierung jedes Parameters profitiert.',
          'Im Zweifel beginnen Sie mit LoRA und bewerten die Qualität anhand eines eigenen zurückgehaltenen Testdatensatzes, bevor Sie vollständiges Fine-Tuning in Betracht ziehen — die Iterationsgeschwindigkeit von LoRA (schnelleres Training, kleinere Checkpoints) macht es günstiger, zunächst mit unterschiedlichen Datenmischungen und Hyperparametern zu experimentieren.',
        ],
      },
      tradeoffs: {
        id: 'learns-less-forgets-less',
        title: 'LoRA lernt weniger und vergisst weniger',
        content: [
          'Eine kontrollierte Studie zu LoRA und vollständigem Fine-Tuning bei Code- und Mathematikaufgaben (Biderman et al., veröffentlicht in TMLR) ergab, dass Standard-LoRA-Einstellungen mit niedrigem Rang deutlich schlechter abschneiden als vollständiges Fine-Tuning, wenn eine Aufgabe viel neues Wissen erfordert, während LoRA bei nicht verwandten Aufgaben mehr der ursprünglichen Fähigkeiten des Basismodells bewahrt. Die Autoren führen den Unterschied auf den Rang zurück: Vollständiges Fine-Tuning aktualisiert Gewichte mit einem 10- bis 100-fach höheren Rang als typische LoRA-Konfigurationen.',
          'In der Praxis ist LoRA die sicherere Wahl, wenn Sie das Verhalten anpassen möchten, ohne die allgemeinen Fähigkeiten zu beeinträchtigen. Vollständiges Fine-Tuning ist besser, wenn Sie dem Modell einen großen neuen Bestand an Fachwissen beibringen müssen. Ein höherer LoRA-Rang und der Einsatz auf mehr Gewichtsmatrizen können die Lücke verkleinern, kosten aber mehr Speicher.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich mehrere LoRA-Adapter auf einem Basismodell kombinieren?',
            a: 'Ja — LoRA-Adapter sind klein und austauschbar, sodass mehrere aufgabenspezifische Adapter gegen dasselbe eingefrorene Basismodell trainiert und bei Bedarf geladen werden können, ohne mehrere vollständige Modellkopien auf der Festplatte vorhalten zu müssen.',
          },
          {
            q: 'Verringert LoRA die Ausgabequalität im Vergleich zu vollständigem Fine-Tuning?',
            a: 'Bei den meisten Aufgaben zur Befolgung von Anweisungen und zur Stilanpassung ist der Qualitätsunterschied zwischen LoRA und vollständigem Fine-Tuning gering. Der Unterschied wird vor allem dann größer, wenn die Aufgabe erfordert, dass das Modell große Mengen neuen Faktenwissens aufnimmt — hier hat die Fähigkeit von vollständigem Fine-Tuning, jeden Parameter zu aktualisieren, einen klareren Vorteil.',
          },
          {
            q: 'Kann ich einen LoRA-Adapter wieder in das Basismodell einfügen?',
            a: 'Ja — LoRA-Adapter lassen sich in die Gewichte des Basismodells einfügen, um eine einzelne eigenständige Modelldatei zu erzeugen. Dadurch entfällt die Notwendigkeit, den Adapter zur Inferenzzeit separat zu laden, aber auch die Möglichkeit, ihn für eine andere Aufgabe auszutauschen.',
          },
          {
            q: 'Wie viel VRAM spart LoRA-Fine-Tuning tatsächlich im Vergleich zu vollständigem Fine-Tuning?',
            a: 'Die genaue Zahl hängt von Modellgröße, LoRA-Rang und Optimizer-Wahl ab, aber LoRA senkt den benötigten VRAM für das Training im Vergleich zu vollständigem Fine-Tuning desselben Basismodells häufig um etwa eine Größenordnung, da Gradienten und Optimizer-Zustand nur für die kleinen zusätzlichen Matrizen verfolgt werden.',
          },
          {
            q: 'Was ist QLoRA und wie hängt es mit LoRA zusammen?',
            a: 'QLoRA ist LoRA, angewendet auf ein Basismodell, das in 4-Bit-quantisierter Form geladen wird. Die eingefrorenen Basisgewichte benötigen deutlich weniger Speicher, während die kleinen LoRA-Matrizen weiterhin in höherer Präzision trainiert werden. So passen größere Modelle auf eine einzelne GPU als mit Standard-LoRA.',
          },
          {
            q: 'Welche Modelle lassen sich mit LoRA feintunen?',
            a: 'LoRA funktioniert mit praktisch jedem Transformer-basierten Modell, darunter Sprach- und Bildgenerierungsmodelle, da es bestehenden Gewichtsschichten Low-Rank-Matrizen hinzufügt. Bibliotheken wie Hugging Face PEFT erlauben es, die anzupassenden Schichten und den Rang zu wählen.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/lora-vs-full-fine-tuning-overview-hero-fr.webp',
    title: 'LoRA vs Fine-Tuning complet : lequel choisir ?',
    seoTitle: 'LoRA vs Fine-Tuning complet : lequel choisir ? | Prompt Bites',
    metaDescription:
      'LoRA entraîne un petit ensemble de poids ajoutés et nécessite beaucoup moins de VRAM que le fine-tuning complet, qui met à jour chaque paramètre du modèle.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Développeurs cherchant à déterminer comment adapter un modèle local à leurs propres données',
    siblingBites: ['fine-tuning-7b-model-locally-hardware', 'best-model-merging-tool-mergekit', 'best-local-llm-license-comparison'],
    is_living_page: false,
    leadAnswerBlock:
      "<strong>LoRA entraîne un petit nombre de matrices de poids de faible rang ajoutées tout en gardant le modèle d'origine gelé, ce qui nécessite beaucoup moins de VRAM que le fine-tuning complet, où chaque paramètre du modèle est mis à jour.</strong> Le fine-tuning complet peut atteindre une qualité légèrement supérieure sur de grands jeux de données bien curés, mais LoRA reste le choix par défaut le plus pratique pour la plupart des configurations locales.",
    toc: [
      { label: 'Meilleur choix : LoRA pour la plupart des configurations locales', anchor: '#best-pick' },
      { label: 'Différences clés', anchor: '#key-differences' },
      { label: 'Quand utiliser chaque méthode', anchor: '#when-to-use' },
      { label: 'Apprend moins, oublie moins', anchor: '#learns-less-forgets-less' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Dois-je utiliser LoRA ou le fine-tuning complet ?',
        answer:
          "Utilisez LoRA sauf si vous disposez d'un jeu de données volumineux et de haute qualité ainsi que de suffisamment de VRAM pour un fine-tuning complet. LoRA entraîne un petit ensemble de poids ajoutés par-dessus un modèle de base gelé, ce qui utilise beaucoup moins de mémoire tout en adaptant efficacement le comportement pour la plupart des tâches.",
        bullets: [
          'LoRA gèle le modèle de base et entraîne de petites matrices de poids ajoutées — coût en VRAM bien plus faible.',
          'Le fine-tuning complet met à jour chaque paramètre et peut légèrement surpasser LoRA en qualité avec suffisamment de données propres.',
          'Les adaptateurs LoRA sont de petits fichiers interchangeables sur un même modèle de base.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'LoRA gèle le modèle de base et entraîne de petits poids ajoutés, utilisant beaucoup moins de VRAM que le fine-tuning complet',
          'Le fine-tuning complet met à jour chaque paramètre et peut atteindre une qualité légèrement supérieure avec de grands jeux de données propres',
          'Les adaptateurs LoRA sont de petits fichiers interchangeables — plusieurs adaptateurs spécifiques à une tâche peuvent partager un même modèle de base',
          'Un modèle 7B nécessitant 80 Go+ de VRAM pour un fine-tuning complet peut souvent être ajusté avec LoRA sur un seul GPU grand public',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'LoRA entraîne un petit ensemble de poids ajoutés et nécessite beaucoup moins de VRAM que le fine-tuning complet, qui met à jour chaque paramètre du modèle.' },
          { type: 'plain-terms', text: "En clair : LoRA est une méthode légère et peu coûteuse pour ajuster le comportement d'un modèle ; le fine-tuning complet est une méthode plus lourde et plus coûteuse qui touche l'ensemble du modèle." },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : LoRA pour la plupart des configurations locales',
        content: [
          "<strong>LoRA est le choix par défaut adapté pour ajuster un modèle local sur du matériel grand public, car il entraîne une petite fraction des paramètres tout en obtenant des résultats proches du fine-tuning complet pour la plupart des tâches de suivi d'instructions et d'adaptation de style.</strong> Utilisez LoRA si : vous disposez d'un seul GPU grand public, d'un jeu de données de l'ordre du millier (et non du million) d'exemples, ou si vous souhaitez conserver plusieurs variantes spécifiques à une tâche du même modèle de base sans stocker de copie complète de chacune.",
          'Utilisez le fine-tuning complet si : vous disposez d\'un jeu de données volumineux et bien curé (typiquement des centaines de milliers d\'exemples ou plus), d\'un accès à plusieurs GPU à forte VRAM, et que la tâche exige des changements plus profonds dans les représentations sous-jacentes du modèle que ce que les matrices ajoutées de LoRA peuvent capturer. En cas de doute, commencez par LoRA — il permet d\'itérer plus rapidement et peut être remplacé par un fine-tuning complet plus tard si la qualité stagne.',
        ],
      },
      keyDifferences: {
        id: 'key-differences',
        title: 'Différences clés',
        content: [
          "LoRA (Low-Rank Adaptation) insère de petites matrices de poids entraînables dans un modèle tout en gardant les poids d'origine gelés, ce qui réduit considérablement la mémoire et le calcul nécessaires à l'entraînement par rapport à la mise à jour de chaque paramètre. Le modèle de base gelé doit tout de même être chargé pour l'entraînement, mais l'optimiseur n'a besoin de suivre les gradients que pour les petites matrices ajoutées, d'où proviennent la plupart des économies de VRAM.",
          "Le fine-tuning complet met à jour l'ensemble du modèle et peut produire des résultats légèrement meilleurs sur de grands jeux de données bien curés, mais nécessite nettement plus de VRAM et de stockage, puisque le résultat est une copie complète du modèle plutôt qu'un petit fichier d'adaptateur. L'état de l'optimiseur pour un fine-tuning complet (en particulier avec des optimiseurs courants comme Adam) nécessite généralement plusieurs fois l'empreinte mémoire du modèle lui-même, ce qui explique pourquoi le fine-tuning complet d'un modèle 7B nécessite souvent plusieurs GPU à forte VRAM.",
        ],
        columns: ['', 'LoRA', 'Fine-Tuning complet'],
        rows: [
          { '': 'Paramètres mis à jour', 'LoRA': 'Petites matrices ajoutées uniquement', 'Fine-Tuning complet': 'Chaque paramètre du modèle' },
          { '': 'Besoin VRAM typique (modèle 7B)', 'LoRA': 'GPU grand public unique, souvent moins de 24 Go', 'Fine-Tuning complet': 'Plusieurs GPU à forte VRAM' },
          { '': 'Artefact produit', 'LoRA': "Petit fichier d'adaptateur (mégaoctets)", 'Fine-Tuning complet': 'Copie complète du modèle (gigaoctets)' },
          { '': 'Interchangeable entre tâches', 'LoRA': 'Oui — plusieurs adaptateurs, un modèle de base', 'Fine-Tuning complet': 'Non — chaque résultat est un modèle complet distinct' },
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: 'Quand utiliser chaque méthode',
        content: [
          "Choisissez LoRA pour ajuster le ton, le format ou un comportement de tâche restreint d'un modèle — ce sont exactement les types de changements que les matrices ajoutées de LoRA capturent bien sans toucher aux connaissances plus larges du modèle. Choisissez le fine-tuning complet lorsque la tâche exige que le modèle absorbe des connaissances factuelles nouvelles et substantielles ou modifie fondamentalement son comportement sur un très large éventail d'entrées, ce qui bénéficie davantage d'une mise à jour de chaque paramètre.",
          'En cas de doute, commencez par LoRA et évaluez la qualité sur votre propre jeu de test réservé avant d\'envisager un fine-tuning complet — la vitesse d\'itération de LoRA (entraînement plus rapide, checkpoints plus petits) rend moins coûteux d\'expérimenter d\'abord différents mélanges de données et hyperparamètres.',
        ],
      },
      tradeoffs: {
        id: 'learns-less-forgets-less',
        title: 'LoRA apprend moins et oublie moins',
        content: [
          'Une étude contrôlée de LoRA et du fine-tuning complet sur des tâches de code et de mathématiques (Biderman et al., publiée dans TMLR) a montré que les réglages LoRA standard à faible rang sont nettement moins performants que le fine-tuning complet lorsqu\'une tâche exige d\'apprendre beaucoup de connaissances nouvelles, tandis que LoRA préserve davantage les capacités d\'origine du modèle de base sur des tâches sans rapport. Les auteurs relient cet écart au rang : le fine-tuning complet met à jour les poids avec un rang 10 à 100 fois supérieur à celui des configurations LoRA habituelles.',
          'En pratique, LoRA est le choix le plus sûr pour ajuster le comportement sans dégrader les capacités générales, et le fine-tuning complet est préférable lorsqu\'il faut transmettre au modèle un vaste corpus de connaissances métier. Augmenter le rang LoRA et l\'appliquer à davantage de matrices de poids peut réduire l\'écart, au prix de plus de mémoire.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je combiner plusieurs adaptateurs LoRA sur un même modèle de base ?',
            a: 'Oui — les adaptateurs LoRA sont petits et interchangeables, ce qui permet d\'entraîner plusieurs adaptateurs spécifiques à une tâche sur le même modèle de base gelé et de les charger selon les besoins, sans conserver plusieurs copies complètes du modèle sur disque.',
          },
          {
            q: 'LoRA réduit-il la qualité des sorties par rapport au fine-tuning complet ?',
            a: "Pour la plupart des tâches de suivi d'instructions et d'adaptation de style, l'écart de qualité entre LoRA et le fine-tuning complet est faible. Cet écart se creuse surtout lorsque la tâche exige que le modèle absorbe de grandes quantités de nouvelles connaissances factuelles, domaine où la capacité du fine-tuning complet à mettre à jour chaque paramètre offre un avantage plus net.",
          },
          {
            q: 'Puis-je fusionner un adaptateur LoRA dans le modèle de base ?',
            a: 'Oui — les adaptateurs LoRA peuvent être fusionnés dans les poids du modèle de base pour produire un seul fichier de modèle autonome, ce qui supprime le besoin de charger l\'adaptateur séparément lors de l\'inférence, mais aussi la possibilité de le remplacer pour une autre tâche.',
          },
          {
            q: 'Combien de VRAM le fine-tuning LoRA permet-il réellement d\'économiser par rapport au fine-tuning complet ?',
            a: "Le chiffre exact dépend de la taille du modèle, du rang LoRA et du choix de l'optimiseur, mais LoRA réduit généralement la VRAM d'entraînement nécessaire d'environ un ordre de grandeur par rapport à un fine-tuning complet du même modèle de base, car les gradients et l'état de l'optimiseur ne sont suivis que pour les petites matrices ajoutées.",
          },
          {
            q: 'Qu\'est-ce que QLoRA et quel lien avec LoRA ?',
            a: 'QLoRA est LoRA appliqué à un modèle de base chargé en quantification 4 bits. Les poids de base figés occupent beaucoup moins de mémoire, tandis que les petites matrices LoRA restent entraînées en plus haute précision : des modèles plus grands tiennent ainsi sur un seul GPU qu\'avec LoRA standard.',
          },
          {
            q: 'Quels modèles peut-on fine-tuner avec LoRA ?',
            a: 'LoRA fonctionne avec pratiquement tout modèle basé sur des transformers, y compris les modèles de langage et de génération d\'images, car il ajoute des matrices de bas rang aux couches de poids existantes. Des bibliothèques comme Hugging Face PEFT permettent de choisir les couches à adapter et le rang.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/lora-vs-full-fine-tuning-overview-hero-ja.webp',
    title: 'LoRAと完全なFine-Tuning:どちらを使うべきか',
    seoTitle: 'LoRA vs 完全なFine-Tuning | Prompt Bites',
    metaDescription:
      'LoRAは追加された少数の重みだけを学習するため、モデルのすべてのパラメータを更新する完全なFine-Tuningよりも必要なVRAMがはるかに少なくて済みます。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'ローカルモデルを自分のデータに適応させる方法を検討している開発者',
    siblingBites: ['fine-tuning-7b-model-locally-hardware', 'best-model-merging-tool-mergekit', 'best-local-llm-license-comparison'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>LoRAは元のモデルを凍結したまま、少数の追加された低ランク重み行列だけを学習するため、モデルのすべてのパラメータを更新する完全なFine-Tuningよりも必要なVRAMがはるかに少なくて済みます。</strong>大規模で丁寧にキュレーションされたデータセットでは完全なFine-Tuningがわずかに高い品質に達することもありますが、ほとんどのローカル環境ではLoRAが実用的な既定の選択肢です。',
    toc: [
      { label: 'ベストな選択:ほとんどのローカル環境ではLoRA', anchor: '#best-pick' },
      { label: '主な違い', anchor: '#key-differences' },
      { label: 'それぞれをいつ使うべきか', anchor: '#when-to-use' },
      { label: '学習量は少なく、忘却も少ない', anchor: '#learns-less-forgets-less' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'LoRAと完全なFine-Tuning、どちらを使うべきですか?',
        answer:
          '大規模で高品質なデータセットと、完全なFine-Tuningに十分なVRAMがない限り、LoRAを使用してください。LoRAは凍結されたベースモデルの上に少数の追加された重みを学習するため、使用メモリがはるかに少なく、ほとんどのタスクで挙動を効果的に適応させられます。',
        bullets: [
          'LoRAはベースモデルを凍結し、少数の追加された重み行列だけを学習するため、VRAMコストがはるかに低くなります。',
          '完全なFine-Tuningはすべてのパラメータを更新し、十分なクリーンなデータがあれば品質でLoRAをわずかに上回ることがあります。',
          'LoRAアダプターは小さなファイルで、同じベースモデルに対して入れ替えて使用できます。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'LoRAはベースモデルを凍結し、少数の追加された重みを学習するため、完全なFine-Tuningよりもはるかに少ないVRAMで済みます',
          '完全なFine-Tuningはすべてのパラメータを更新し、大規模でクリーンなデータセットがあればわずかに高い品質に達することがあります',
          'LoRAアダプターは小さく入れ替え可能なファイルで、複数のタスク特化型アダプターが一つのベースモデルを共有できます',
          '完全なFine-Tuningに80GB以上のVRAMが必要な7Bモデルでも、LoRAなら単一のコンシューマー向けGPUでファインチューニングできることが多いです',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'LoRAは追加された少数の重みだけを学習するため、モデルのすべてのパラメータを更新する完全なFine-Tuningよりも必要なVRAMがはるかに少なくて済みます。' },
          { type: 'plain-terms', text: '簡単に言うと、LoRAはモデルの挙動を調整する軽量で低コストな方法で、完全なFine-Tuningはモデル全体に手を加える、より重く高コストな方法です。' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストな選択:ほとんどのローカル環境ではLoRA',
        content: [
          '<strong>LoRAは、パラメータのごく一部だけを学習しながら、ほとんどの指示追従やスタイル適応タスクで完全なFine-Tuningに近い結果を達成できるため、コンシューマー向けハードウェアでローカルモデルを適応させる際の正しい既定の選択肢です。</strong>次のような場合はLoRAを使用してください:単一のコンシューマー向けGPUしかない場合、データセットが数百万件ではなく数千件規模の場合、または同じベースモデルの複数のタスク特化型バリエーションを、それぞれの完全なコピーを保存せずに保持したい場合です。',
          '次のような場合は完全なFine-Tuningを使用してください:大規模で丁寧にキュレーションされたデータセット(通常は数十万件以上の例)があり、複数の高VRAM GPUにアクセスでき、タスクがLoRAの追加行列では捉えきれないほど、モデルの基礎的な内部表現に深い変更を必要とする場合です。迷った場合はLoRAから始めてください——反復が速く、品質が頭打ちになった場合は後から完全なFine-Tuningへ移行できます。',
        ],
      },
      keyDifferences: {
        id: 'key-differences',
        title: '主な違い',
        content: [
          'LoRA(Low-Rank Adaptation)は、元の重みを凍結したまま、モデルに小さな学習可能な重み行列を挿入するため、すべてのパラメータを更新する場合と比べて学習に必要なメモリと計算量を大幅に削減します。学習には凍結されたベースモデルを読み込む必要は依然としてありますが、オプティマイザーが勾配を追跡する必要があるのは追加された小さな行列だけであり、これがVRAM削減の大部分を占めます。',
          '完全なFine-Tuningはモデル全体を更新するため、大規模で丁寧にキュレーションされたデータセットではわずかに良い結果を生み出すことがありますが、出力が小さなアダプターファイルではなくモデルの完全なコピーになるため、必要なVRAMとストレージが大幅に増えます。完全なFine-Tuningのオプティマイザー状態(特にAdamのような一般的なオプティマイザーを使う場合)は、通常モデル自体のメモリ使用量の数倍を必要とするため、7Bモデルの完全なFine-Tuningには複数の高VRAM GPUがしばしば必要になります。',
        ],
        columns: ['', 'LoRA', '完全なFine-Tuning'],
        rows: [
          { '': '更新されるパラメータ', 'LoRA': '追加された小さな行列のみ', '完全なFine-Tuning': 'モデル内のすべてのパラメータ' },
          { '': '一般的なVRAM必要量(7Bモデル)', 'LoRA': '単一のコンシューマー向けGPU、多くは24GB未満', '完全なFine-Tuning': '複数の高VRAM GPU' },
          { '': '出力される成果物', 'LoRA': '小さなアダプターファイル(数メガバイト)', '完全なFine-Tuning': 'モデルの完全なコピー(数ギガバイト)' },
          { '': 'タスク間での入れ替え', 'LoRA': '可能——複数のアダプター、一つのベースモデル', '完全なFine-Tuning': '不可——各結果が独立した完全なモデルになる' },
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: 'それぞれをいつ使うべきか',
        content: [
          'モデルのトーン、フォーマット、あるいは狭いタスク特有の挙動を適応させる場合はLoRAを選んでください——これはまさに、モデルの幅広い知識に手を加えることなくLoRAの追加行列がうまく捉えられる種類の変化です。タスクがモデルに大量の新しい事実知識を吸収させる必要がある場合や、非常に広範な入力にわたって挙動を根本的に変える必要がある場合は、完全なFine-Tuningを選んでください——こちらの方がすべてのパラメータの更新から恩恵を受けやすいためです。',
          '迷った場合は、完全なFine-Tuningを検討する前に、まずLoRAから始めて自分の保留テストセットで品質を評価してください——LoRAの反復速度(学習の速さ、チェックポイントの小ささ)により、まず異なるデータの組み合わせやハイパーパラメータで実験するコストを低く抑えられます。',
        ],
      },
      tradeoffs: {
        id: 'learns-less-forgets-less',
        title: 'LoRAは学習量が少なく、忘却も少ない',
        content: [
          'コードと数学のタスクでLoRAとフルファインチューニングを比較した統制研究(Biderman氏ら、TMLR掲載)では、タスクが大量の新しい知識の習得を必要とする場合、標準的な低ランクのLoRA設定はフルファインチューニングを大きく下回る一方、無関係なタスクではベースモデル本来の能力をより多く保持することが示されました。著者らはこの差をランクに結びつけています。フルファインチューニングは、一般的なLoRA設定の10〜100倍高いランクで重みを更新します。',
          '実際には、一般的な能力を損なわずに振る舞いを調整したい場合はLoRAが安全な選択であり、モデルに大量の新しい専門知識を教え込む必要がある場合はフルファインチューニングが適しています。LoRAのランクを上げ、より多くの重み行列に適用することで差を縮められることがありますが、その分メモリを多く消費します。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '一つのベースモデルに複数のLoRAアダプターを組み合わせることはできますか?',
            a: 'はい——LoRAアダプターは小さく入れ替え可能なため、同じ凍結されたベースモデルに対して複数のタスク特化型アダプターを学習させ、必要に応じて読み込むことができ、複数の完全なモデルコピーをディスクに保持する必要がありません。',
          },
          {
            q: 'LoRAは完全なFine-Tuningと比べて出力品質が低下しますか?',
            a: 'ほとんどの指示追従やスタイル適応タスクでは、LoRAと完全なFine-Tuningの品質差はわずかです。その差が広がるのは主に、タスクがモデルに大量の新しい事実知識を吸収させる必要がある場合で、この場合はすべてのパラメータを更新できる完全なFine-Tuningの方が明確な優位性を持ちます。',
          },
          {
            q: 'LoRAアダプターをベースモデルに統合し直すことはできますか?',
            a: 'はい——LoRAアダプターはベースモデルの重みに統合して、単一のスタンドアロンモデルファイルを生成できます。これにより推論時にアダプターを個別に読み込む必要がなくなりますが、別のタスクのために入れ替える機能も失われます。',
          },
          {
            q: 'LoRAのFine-Tuningは、完全なFine-Tuningと比べて実際にどれくらいVRAMを節約できますか?',
            a: '正確な数値はモデルサイズ、LoRAのランク、オプティマイザーの選択によって異なりますが、LoRAは同じベースモデルの完全なFine-Tuningと比べて、必要な学習用VRAMをおおよそ一桁分削減することが一般的です。これは勾配とオプティマイザー状態が追加された小さな行列に対してのみ追跡されるためです。',
          },
          {
            q: 'QLoRAとは何で、LoRAとどう関係しますか?',
            a: 'QLoRAは、4ビット量子化で読み込んだベースモデルにLoRAを適用する手法です。固定されたベースの重みは使用メモリが大幅に減り、小さなLoRA行列はより高い精度で学習されるため、標準のLoRAよりも大きなモデルを1枚のGPUに載せられます。',
          },
          {
            q: 'どのモデルをLoRAでファインチューニングできますか?',
            a: 'LoRAは既存の重み層に低ランク行列を追加するため、言語モデルや画像生成モデルを含む、ほぼすべてのTransformerベースのモデルで利用できます。Hugging Face PEFTなどのライブラリでは、適応する層とランクを選択できます。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/lora-vs-full-fine-tuning-overview-hero-zh.webp',
    title: 'LoRA 与全量微调:该用哪一种?',
    seoTitle: 'LoRA 与全量微调对比 | Prompt Bites',
    metaDescription:
      'LoRA 只训练少量新增权重,所需 VRAM 远低于会更新模型每个参数的全量微调。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '需要决定如何用自有数据适配本地模型的开发者',
    siblingBites: ['fine-tuning-7b-model-locally-hardware', 'best-model-merging-tool-mergekit', 'best-local-llm-license-comparison'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>LoRA 在保持原模型冻结的同时训练少量新增的低秩权重矩阵,所需 VRAM 远低于更新模型每个参数的全量微调。</strong>在大规模、精心整理的数据集上,全量微调可以达到略高的质量,但对大多数本地环境来说,LoRA 是更实用的默认选择。',
    toc: [
      { label: '最佳选择:多数本地环境首选 LoRA', anchor: '#best-pick' },
      { label: '主要区别', anchor: '#key-differences' },
      { label: '各自的适用场景', anchor: '#when-to-use' },
      { label: '学得更少,忘得也更少', anchor: '#learns-less-forgets-less' },
      { label: '常见问题', anchor: '#faq' },
    ],
    quickAnswerTop: {
      zh: {
        question: '该用 LoRA 还是全量微调?',
        answer:
          '除非你拥有大规模高质量数据集,并且有足够的 VRAM 支持全量微调,否则应优先选择 LoRA。LoRA 在冻结的基础模型之上训练少量新增权重,占用内存远更少,对大多数任务仍能有效调整模型行为。',
        bullets: [
          'LoRA 冻结基础模型,只训练少量新增权重矩阵——VRAM 成本低得多。',
          '全量微调更新每个参数,在数据充足且干净的情况下,质量可能略优于 LoRA。',
          'LoRA 适配器是可在同一基础模型上替换使用的小文件。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'LoRA 冻结基础模型并训练少量新增权重,所需 VRAM 远低于全量微调',
          '全量微调更新每个参数,在数据规模大且干净的情况下可达到略高的质量',
          'LoRA 适配器是体积小、可替换的文件——多个任务专用适配器可共用一个基础模型',
          '全量微调需要 80GB 以上 VRAM 的 7B 模型,用 LoRA 通常可在单张消费级 GPU 上完成微调',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'LoRA 只训练少量新增权重,所需 VRAM 远低于会更新模型每个参数的全量微调。' },
          { type: 'plain-terms', text: '简单来说:LoRA 是一种轻量、低成本调整模型行为的方式;全量微调则是更重、更昂贵、涉及整个模型的方式。' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择:多数本地环境首选 LoRA',
        content: [
          '<strong>LoRA 是在消费级硬件上适配本地模型的正确默认选择,因为它只训练极少部分参数,却能在大多数指令跟随和风格适配任务上取得接近全量微调的效果。</strong>以下情况请使用 LoRA:只有一张消费级 GPU、数据集规模是数千(而非数百万)条样本,或者希望在不为每个变体保存完整副本的前提下,保留同一基础模型的多个任务专用版本。',
          '以下情况请使用全量微调:拥有大规模、精心整理的数据集(通常是数十万条样本或更多)、可使用多张高 VRAM GPU,且任务需要对模型底层表示做出比 LoRA 新增矩阵所能捕捉的更深层次的改变。如果拿不准,先从 LoRA 开始——它迭代更快,如果质量遇到瓶颈,之后可以升级为全量微调。',
        ],
      },
      keyDifferences: {
        id: 'key-differences',
        title: '主要区别',
        content: [
          'LoRA(低秩自适应)在保持原始权重冻结的同时,向模型插入少量可训练的权重矩阵,与更新每个参数相比,大幅降低了训练所需的内存和算力。训练时仍需加载冻结的基础模型,但优化器只需为新增的小矩阵跟踪梯度,这正是 VRAM 节省的主要来源。',
          '全量微调更新整个模型,在大规模、精心整理的数据集上可能取得略好的结果,但由于输出是模型的完整副本而非一个小的适配器文件,所需的 VRAM 和存储空间要大得多。全量微调的优化器状态(尤其是使用 Adam 等常见优化器时)通常需要模型自身内存占用的数倍,这也是为什么对 7B 模型进行全量微调通常需要多张高 VRAM GPU。',
        ],
        columns: ['', 'LoRA', '全量微调'],
        rows: [
          { '': '更新的参数', 'LoRA': '仅新增的小矩阵', '全量微调': '模型中的每个参数' },
          { '': '典型 VRAM 需求(7B 模型)', 'LoRA': '单张消费级 GPU,通常低于 24GB', '全量微调': '多张高 VRAM GPU' },
          { '': '输出产物', 'LoRA': '小型适配器文件(数 MB)', '全量微调': '完整模型副本(数 GB)' },
          { '': '可跨任务替换', 'LoRA': '可以——多个适配器共用一个基础模型', '全量微调': '不可以——每次结果都是独立的完整模型' },
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: '各自的适用场景',
        content: [
          '在调整模型的语气、格式或狭窄任务行为时选择 LoRA——这正是 LoRA 新增矩阵能很好捕捉、又不影响模型更广泛知识的那类变化。当任务需要模型吸收大量新的事实性知识,或需要在极广泛的输入范围内从根本上改变行为时,选择全量微调——这类任务从更新每个参数中获益更多。',
          '如果拿不准,先从 LoRA 开始,在自己的保留测试集上评估质量,再考虑全量微调——LoRA 的迭代速度(训练更快、检查点更小)让你可以更低成本地先尝试不同的数据组合和超参数。',
        ],
      },
      tradeoffs: {
        id: 'learns-less-forgets-less',
        title: 'LoRA学得更少,也忘得更少',
        content: [
          '一项针对代码和数学任务、对比LoRA与全量微调的对照研究(Biderman等人,发表于TMLR)发现:当任务需要学习大量新知识时,标准的低秩LoRA设置明显不如全量微调;而在无关任务上,LoRA能更好地保留基础模型的原有能力。作者将这一差距归因于秩:全量微调更新权重时的秩比典型LoRA配置高10到100倍。',
          '实际上,如果想调整模型行为又不损害其通用能力,LoRA是更稳妥的选择;如果必须让模型掌握大量新的领域知识,全量微调更合适。提高LoRA的秩并将其应用于更多权重矩阵可以缩小差距,但会占用更多内存。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '可以在同一个基础模型上组合使用多个 LoRA 适配器吗?',
            a: '可以——LoRA 适配器体积小且可替换,因此可以针对同一个冻结的基础模型训练多个任务专用适配器,并按需加载,而无需在磁盘上保留多个完整模型副本。',
          },
          {
            q: '与全量微调相比,LoRA 会降低输出质量吗?',
            a: '对大多数指令跟随和风格适配任务而言,LoRA 与全量微调之间的质量差距很小。当任务需要模型吸收大量新的事实性知识时,这一差距会明显拉大,此时全量微调能更新每个参数的能力优势更明显。',
          },
          {
            q: '可以把 LoRA 适配器合并回基础模型吗?',
            a: '可以——LoRA 适配器可以合并到基础模型的权重中,生成一个独立的标准模型文件,这样推理时就不再需要单独加载适配器,但也失去了为其他任务替换适配器的能力。',
          },
          {
            q: '与全量微调相比,LoRA 微调实际能节省多少 VRAM?',
            a: '具体数字取决于模型大小、LoRA 秩和优化器选择,但相比对同一基础模型进行全量微调,LoRA 通常能将所需训练 VRAM 降低约一个数量级,因为梯度和优化器状态只需针对新增的小矩阵进行跟踪。',
          },
          {
            q: 'QLoRA是什么,与LoRA有何关系?',
            a: 'QLoRA是在以4位量化方式加载的基础模型上应用LoRA。冻结的基础权重占用的内存大幅减少,而小的LoRA矩阵仍以较高精度训练,因此单张GPU能容纳比标准LoRA更大的模型。',
          },
          {
            q: '哪些模型可以用LoRA微调?',
            a: 'LoRA通过向现有权重层添加低秩矩阵来工作,因此几乎适用于所有基于Transformer的模型,包括语言模型和图像生成模型。Hugging Face PEFT等库允许选择要适配的层和秩。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/lora-vs-full-fine-tuning-overview-hero-es.webp',
    title: 'LoRA frente a fine-tuning completo: ¿cuál deberías usar?',
    seoTitle: 'LoRA vs fine-tuning completo: ¿cuál usar? | Prompt Bites',
    metaDescription:
      'LoRA entrena un pequeño conjunto de pesos añadidos y necesita mucha menos VRAM que el fine-tuning completo, que actualiza todos los parámetros del modelo.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores que deciden cómo adaptar un modelo local a sus propios datos',
    siblingBites: ['fine-tuning-7b-model-locally-hardware', 'best-model-merging-tool-mergekit', 'best-local-llm-license-comparison'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>LoRA entrena un pequeño número de matrices de pesos de bajo rango añadidas mientras mantiene el modelo original congelado, lo que requiere mucha menos VRAM que el fine-tuning completo, donde se actualiza cada parámetro del modelo.</strong> El fine-tuning completo puede alcanzar una calidad ligeramente superior en conjuntos de datos grandes y bien curados, pero LoRA es la opción práctica por defecto para la mayoría de configuraciones locales.',
    toc: [
      { label: 'Mejor opción: LoRA para la mayoría de configuraciones locales', anchor: '#best-pick' },
      { label: 'Diferencias clave', anchor: '#key-differences' },
      { label: 'Cuándo usar cada una', anchor: '#when-to-use' },
      { label: 'Aprende menos, olvida menos', anchor: '#learns-less-forgets-less' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Debería usar LoRA o fine-tuning completo?',
        answer:
          'Usa LoRA a menos que tengas un conjunto de datos grande y de alta calidad y suficiente VRAM para un fine-tuning completo. LoRA entrena un pequeño conjunto de pesos añadidos sobre un modelo base congelado, lo que usa mucha menos memoria y sigue adaptando el comportamiento de forma efectiva para la mayoría de tareas.',
        bullets: [
          'LoRA congela el modelo base y entrena pequeñas matrices de pesos añadidas — un coste de VRAM mucho menor.',
          'El fine-tuning completo actualiza cada parámetro y puede superar ligeramente a LoRA en calidad con suficientes datos limpios.',
          'Los adaptadores LoRA son archivos pequeños que se pueden intercambiar en el mismo modelo base.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'LoRA congela el modelo base y entrena pequeños pesos añadidos, usando mucha menos VRAM que el fine-tuning completo',
          'El fine-tuning completo actualiza cada parámetro y puede alcanzar una calidad ligeramente superior con conjuntos de datos grandes y limpios',
          'Los adaptadores LoRA son archivos pequeños e intercambiables — varios adaptadores específicos de una tarea pueden compartir un mismo modelo base',
          'Un modelo de 7B que necesita más de 80GB de VRAM para un fine-tuning completo a menudo puede ajustarse con LoRA en una sola GPU de consumo',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'LoRA entrena un pequeño conjunto de pesos añadidos y necesita mucha menos VRAM que el fine-tuning completo, que actualiza todos los parámetros del modelo.' },
          { type: 'plain-terms', text: 'En términos simples: LoRA es una forma ligera y económica de ajustar el comportamiento de un modelo; el fine-tuning completo es una forma más pesada y costosa que afecta a todo el modelo.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor opción: LoRA para la mayoría de configuraciones locales',
        content: [
          '<strong>LoRA es la opción por defecto adecuada para adaptar un modelo local en hardware de consumo, porque entrena una pequeña fracción de los parámetros mientras logra resultados cercanos al fine-tuning completo en la mayoría de tareas de seguimiento de instrucciones y adaptación de estilo.</strong> Usa LoRA si: tienes una sola GPU de consumo, un conjunto de datos del orden de miles (no millones) de ejemplos, o quieres mantener varias variantes específicas de tarea del mismo modelo base sin almacenar copias completas de cada una.',
          'Usa fine-tuning completo si: tienes un conjunto de datos grande y bien curado (normalmente cientos de miles de ejemplos o más), acceso a varias GPU con mucha VRAM, y la tarea requiere cambios más profundos en las representaciones subyacentes del modelo de los que las matrices añadidas de LoRA pueden capturar. Si tienes dudas, empieza con LoRA — es más rápido de iterar y se puede pasar a fine-tuning completo más adelante si la calidad se estanca.',
        ],
      },
      keyDifferences: {
        id: 'key-differences',
        title: 'Diferencias clave',
        content: [
          'LoRA (Low-Rank Adaptation) inserta pequeñas matrices de pesos entrenables en un modelo manteniendo los pesos originales congelados, lo que reduce en gran medida la memoria y el cómputo necesarios para el entrenamiento en comparación con actualizar cada parámetro. El modelo base congelado aún debe cargarse para el entrenamiento, pero el optimizador solo necesita seguir los gradientes de las pequeñas matrices añadidas, que es de donde proviene la mayor parte del ahorro de VRAM.',
          'El fine-tuning completo actualiza todo el modelo y puede producir resultados marginalmente mejores en conjuntos de datos grandes y bien curados, pero requiere bastante más VRAM y almacenamiento, ya que el resultado es una copia completa del modelo en lugar de un pequeño archivo de adaptador. El estado del optimizador para el fine-tuning completo (especialmente con optimizadores comunes como Adam) suele requerir varias veces la huella de memoria del propio modelo, razón por la cual el fine-tuning completo de un modelo de 7B a menudo necesita varias GPU con mucha VRAM.',
        ],
        columns: ['', 'LoRA', 'Fine-tuning completo'],
        rows: [
          { '': 'Parámetros actualizados', 'LoRA': 'Solo matrices añadidas pequeñas', 'Fine-tuning completo': 'Cada parámetro del modelo' },
          { '': 'Necesidad típica de VRAM (modelo 7B)', 'LoRA': 'Una sola GPU de consumo, a menudo menos de 24GB', 'Fine-tuning completo': 'Varias GPU con mucha VRAM' },
          { '': 'Artefacto de salida', 'LoRA': 'Archivo de adaptador pequeño (megabytes)', 'Fine-tuning completo': 'Copia completa del modelo (gigabytes)' },
          { '': 'Intercambiable entre tareas', 'LoRA': 'Sí — varios adaptadores, un modelo base', 'Fine-tuning completo': 'No — cada resultado es un modelo completo independiente' },
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: 'Cuándo usar cada una',
        content: [
          'Elige LoRA al adaptar el tono, formato o comportamiento de una tarea concreta de un modelo — son exactamente el tipo de cambios que las matrices añadidas de LoRA capturan bien sin tocar el conocimiento más amplio del modelo. Elige fine-tuning completo cuando la tarea requiera que el modelo absorba conocimiento factual nuevo sustancial o cambie fundamentalmente su comportamiento en un rango muy amplio de entradas, algo que se beneficia más de actualizar cada parámetro.',
          'Si tienes dudas, empieza con LoRA y evalúa la calidad en tu propio conjunto de prueba reservado antes de considerar el fine-tuning completo — la velocidad de iteración de LoRA (entrenamiento más rápido, checkpoints más pequeños) hace que sea más barato experimentar primero con distintas combinaciones de datos e hiperparámetros.',
        ],
      },
      tradeoffs: {
        id: 'learns-less-forgets-less',
        title: 'LoRA aprende menos y olvida menos',
        content: [
          'Un estudio controlado de LoRA y el fine-tuning completo en tareas de código y matemáticas (Biderman et al., publicado en TMLR) concluyó que los ajustes estándar de LoRA de rango bajo rinden bastante peor que el fine-tuning completo cuando la tarea exige aprender mucho conocimiento nuevo, mientras que LoRA conserva más de las capacidades originales del modelo base en tareas no relacionadas. Los autores atribuyen la brecha al rango: el fine-tuning completo actualiza los pesos con un rango entre 10 y 100 veces mayor que el de las configuraciones típicas de LoRA.',
          'En la práctica, LoRA es la opción más segura cuando quieres ajustar el comportamiento sin dañar la capacidad general, y el fine-tuning completo es mejor cuando debes enseñar al modelo un gran cuerpo de conocimiento especializado. Aumentar el rango de LoRA y aplicarlo a más matrices de pesos puede reducir la brecha, a costa de más memoria.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo combinar varios adaptadores LoRA en un mismo modelo base?',
            a: 'Sí — los adaptadores LoRA son pequeños e intercambiables, por lo que se pueden entrenar varios adaptadores específicos de tarea sobre el mismo modelo base congelado y cargarlos según se necesiten, sin mantener varias copias completas del modelo en disco.',
          },
          {
            q: '¿LoRA reduce la calidad de salida en comparación con el fine-tuning completo?',
            a: 'Para la mayoría de tareas de seguimiento de instrucciones y adaptación de estilo, la diferencia de calidad entre LoRA y el fine-tuning completo es pequeña. La diferencia se amplía principalmente cuando la tarea requiere que el modelo absorba grandes cantidades de conocimiento factual nuevo, donde la capacidad del fine-tuning completo de actualizar cada parámetro tiene una ventaja más clara.',
          },
          {
            q: '¿Puedo fusionar un adaptador LoRA de nuevo en el modelo base?',
            a: 'Sí — los adaptadores LoRA se pueden fusionar en los pesos del modelo base para producir un único archivo de modelo independiente, lo que elimina la necesidad de cargar el adaptador por separado durante la inferencia, pero también elimina la posibilidad de intercambiarlo por otra tarea.',
          },
          {
            q: '¿Cuánta VRAM ahorra realmente el fine-tuning con LoRA en comparación con el fine-tuning completo?',
            a: 'La cifra exacta depende del tamaño del modelo, el rango de LoRA y la elección del optimizador, pero LoRA suele reducir la VRAM de entrenamiento necesaria en aproximadamente un orden de magnitud en comparación con el fine-tuning completo del mismo modelo base, ya que los gradientes y el estado del optimizador solo se siguen para las pequeñas matrices añadidas.',
          },
          {
            q: '¿Qué es QLoRA y cómo se relaciona con LoRA?',
            a: 'QLoRA es LoRA aplicado sobre un modelo base cargado en cuantización de 4 bits. Los pesos base congelados ocupan mucha menos memoria, mientras que las pequeñas matrices LoRA se entrenan con mayor precisión, de modo que caben en una sola GPU modelos más grandes que con LoRA estándar.',
          },
          {
            q: '¿Qué modelos se pueden ajustar con LoRA?',
            a: 'LoRA funciona con prácticamente cualquier modelo basado en transformers, incluidos los modelos de lenguaje y de generación de imágenes, porque añade matrices de rango bajo a las capas de pesos existentes. Bibliotecas como Hugging Face PEFT permiten elegir qué capas adaptar y qué rango usar.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/lora-vs-full-fine-tuning-overview-hero-pt.webp',
    title: 'LoRA vs fine-tuning completo: qual usar?',
    seoTitle: 'LoRA vs fine-tuning completo: qual usar? | Prompt Bites',
    metaDescription:
      'O LoRA treina um pequeno conjunto de pesos adicionados e precisa de muito menos VRAM do que o fine-tuning completo, que atualiza todos os parâmetros do modelo.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores decidindo como adaptar um modelo local aos próprios dados',
    siblingBites: ['fine-tuning-7b-model-locally-hardware', 'best-model-merging-tool-mergekit', 'best-local-llm-license-comparison'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>O LoRA treina um pequeno número de matrizes de pesos de baixo posto adicionadas, mantendo o modelo original congelado, o que exige muito menos VRAM do que o fine-tuning completo, em que cada parâmetro do modelo é atualizado.</strong> O fine-tuning completo pode atingir uma qualidade ligeiramente superior em conjuntos de dados grandes e bem selecionados, mas o LoRA é a escolha padrão mais prática para a maioria das configurações locais.',
    toc: [
      { label: 'Melhor escolha: LoRA para a maioria das configurações locais', anchor: '#best-pick' },
      { label: 'Principais diferenças', anchor: '#key-differences' },
      { label: 'Quando usar cada um', anchor: '#when-to-use' },
      { label: 'Aprende menos, esquece menos', anchor: '#learns-less-forgets-less' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Devo usar LoRA ou fine-tuning completo?',
        answer:
          'Use LoRA, a menos que você tenha um conjunto de dados grande e de alta qualidade e VRAM suficiente para um fine-tuning completo. O LoRA treina um pequeno conjunto de pesos adicionados sobre um modelo base congelado, o que usa muito menos memória e ainda adapta o comportamento de forma eficaz para a maioria das tarefas.',
        bullets: [
          'O LoRA congela o modelo base e treina pequenas matrizes de pesos adicionadas — custo de VRAM muito menor.',
          'O fine-tuning completo atualiza todos os parâmetros e pode superar ligeiramente o LoRA em qualidade com dados limpos suficientes.',
          'Os adaptadores LoRA são arquivos pequenos que podem ser trocados no mesmo modelo base.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O LoRA congela o modelo base e treina pequenos pesos adicionados, usando muito menos VRAM do que o fine-tuning completo',
          'O fine-tuning completo atualiza todos os parâmetros e pode atingir uma qualidade ligeiramente superior com conjuntos de dados grandes e limpos',
          'Os adaptadores LoRA são arquivos pequenos e intercambiáveis — vários adaptadores específicos de tarefa podem compartilhar um mesmo modelo base',
          'Um modelo de 7B que precisa de mais de 80GB de VRAM para fine-tuning completo geralmente pode ser ajustado com LoRA em uma única GPU de consumo',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O LoRA treina um pequeno conjunto de pesos adicionados e precisa de muito menos VRAM do que o fine-tuning completo, que atualiza todos os parâmetros do modelo.' },
          { type: 'plain-terms', text: 'Em termos simples: o LoRA é uma forma leve e barata de ajustar o comportamento de um modelo; o fine-tuning completo é uma forma mais pesada e cara que afeta o modelo inteiro.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor escolha: LoRA para a maioria das configurações locais',
        content: [
          '<strong>O LoRA é a escolha padrão certa para adaptar um modelo local em hardware de consumo, porque treina uma pequena fração dos parâmetros enquanto alcança resultados próximos ao fine-tuning completo na maioria das tarefas de seguimento de instruções e adaptação de estilo.</strong> Use LoRA se: você tem uma única GPU de consumo, um conjunto de dados na casa dos milhares (não milhões) de exemplos, ou quer manter várias variantes específicas de tarefa do mesmo modelo base sem armazenar cópias completas de cada uma.',
          'Use fine-tuning completo se: você tem um conjunto de dados grande e bem selecionado (normalmente centenas de milhares de exemplos ou mais), acesso a várias GPUs com muita VRAM, e a tarefa exige mudanças mais profundas nas representações subjacentes do modelo do que as matrizes adicionadas do LoRA conseguem capturar. Na dúvida, comece com LoRA — é mais rápido de iterar e pode ser convertido para fine-tuning completo depois, se a qualidade estagnar.',
        ],
      },
      keyDifferences: {
        id: 'key-differences',
        title: 'Principais diferenças',
        content: [
          'O LoRA (Low-Rank Adaptation) insere pequenas matrizes de pesos treináveis em um modelo, mantendo os pesos originais congelados, o que reduz bastante a memória e o processamento necessários para o treinamento em comparação com atualizar cada parâmetro. O modelo base congelado ainda precisa ser carregado para o treinamento, mas o otimizador só precisa rastrear gradientes para as pequenas matrizes adicionadas, de onde vem a maior parte da economia de VRAM.',
          'O fine-tuning completo atualiza o modelo inteiro e pode produzir resultados marginalmente melhores em conjuntos de dados grandes e bem selecionados, mas exige muito mais VRAM e armazenamento, já que o resultado é uma cópia completa do modelo em vez de um pequeno arquivo de adaptador. O estado do otimizador no fine-tuning completo (principalmente com otimizadores comuns como o Adam) costuma exigir várias vezes o próprio tamanho de memória do modelo, o que explica por que o fine-tuning completo de um modelo de 7B geralmente precisa de várias GPUs com muita VRAM.',
        ],
        columns: ['', 'LoRA', 'Fine-Tuning completo'],
        rows: [
          { '': 'Parâmetros atualizados', 'LoRA': 'Apenas pequenas matrizes adicionadas', 'Fine-Tuning completo': 'Todos os parâmetros do modelo' },
          { '': 'Necessidade típica de VRAM (modelo 7B)', 'LoRA': 'GPU de consumo única, geralmente abaixo de 24GB', 'Fine-Tuning completo': 'Várias GPUs com muita VRAM' },
          { '': 'Artefato de saída', 'LoRA': 'Arquivo de adaptador pequeno (megabytes)', 'Fine-Tuning completo': 'Cópia completa do modelo (gigabytes)' },
          { '': 'Intercambiável entre tarefas', 'LoRA': 'Sim — vários adaptadores, um modelo base', 'Fine-Tuning completo': 'Não — cada resultado é um modelo completo separado' },
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: 'Quando usar cada um',
        content: [
          'Escolha LoRA ao adaptar o tom, formato ou comportamento restrito a uma tarefa de um modelo — são exatamente os tipos de mudança que as matrizes adicionadas do LoRA capturam bem sem afetar o conhecimento mais amplo do modelo. Escolha fine-tuning completo quando a tarefa exigir que o modelo absorva conhecimento factual novo substancial ou mude fundamentalmente seu comportamento em uma gama muito ampla de entradas, o que se beneficia mais da atualização de todos os parâmetros.',
          'Na dúvida, comece com LoRA e avalie a qualidade no seu próprio conjunto de teste reservado antes de considerar o fine-tuning completo — a velocidade de iteração do LoRA (treinamento mais rápido, checkpoints menores) torna mais barato experimentar diferentes combinações de dados e hiperparâmetros primeiro.',
        ],
      },
      tradeoffs: {
        id: 'learns-less-forgets-less',
        title: 'LoRA aprende menos e esquece menos',
        content: [
          'Um estudo controlado de LoRA e fine-tuning completo em tarefas de código e matemática (Biderman et al., publicado na TMLR) concluiu que as configurações padrão de LoRA de baixo rank têm desempenho bem inferior ao do fine-tuning completo quando a tarefa exige aprender muito conhecimento novo, enquanto o LoRA preserva mais as capacidades originais do modelo base em tarefas não relacionadas. Os autores ligam a diferença ao rank: o fine-tuning completo atualiza os pesos com um rank de 10 a 100 vezes maior que o das configurações típicas de LoRA.',
          'Na prática, o LoRA é a escolha mais segura quando você quer ajustar o comportamento sem prejudicar a capacidade geral, e o fine-tuning completo é melhor quando é preciso ensinar ao modelo um grande volume de conhecimento especializado. Aumentar o rank do LoRA e aplicá-lo a mais matrizes de pesos pode reduzir a diferença, ao custo de mais memória.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso combinar vários adaptadores LoRA em um mesmo modelo base?',
            a: 'Sim — os adaptadores LoRA são pequenos e intercambiáveis, então vários adaptadores específicos de tarefa podem ser treinados sobre o mesmo modelo base congelado e carregados conforme necessário, sem manter várias cópias completas do modelo em disco.',
          },
          {
            q: 'O LoRA reduz a qualidade de saída em comparação com o fine-tuning completo?',
            a: 'Para a maioria das tarefas de seguimento de instruções e adaptação de estilo, a diferença de qualidade entre LoRA e fine-tuning completo é pequena. A diferença aumenta principalmente quando a tarefa exige que o modelo absorva grandes quantidades de conhecimento factual novo, onde a capacidade do fine-tuning completo de atualizar todos os parâmetros tem uma vantagem mais clara.',
          },
          {
            q: 'Posso fundir um adaptador LoRA de volta ao modelo base?',
            a: 'Sim — os adaptadores LoRA podem ser fundidos aos pesos do modelo base para produzir um único arquivo de modelo independente, o que elimina a necessidade de carregar o adaptador separadamente no momento da inferência, mas também elimina a capacidade de trocá-lo por outra tarefa.',
          },
          {
            q: 'Quanta VRAM o fine-tuning com LoRA realmente economiza em comparação com o fine-tuning completo?',
            a: 'O valor exato depende do tamanho do modelo, do posto do LoRA e da escolha do otimizador, mas o LoRA costuma reduzir a VRAM de treinamento necessária em cerca de uma ordem de grandeza em comparação com o fine-tuning completo do mesmo modelo base, já que os gradientes e o estado do otimizador só são rastreados para as pequenas matrizes adicionadas.',
          },
          {
            q: 'O que é QLoRA e como se relaciona com o LoRA?',
            a: 'QLoRA é o LoRA aplicado sobre um modelo base carregado em quantização de 4 bits. Os pesos base congelados ocupam muito menos memória, enquanto as pequenas matrizes LoRA continuam sendo treinadas com maior precisão, de modo que cabem em uma única GPU modelos maiores do que com o LoRA padrão.',
          },
          {
            q: 'Quais modelos podem ser ajustados com LoRA?',
            a: 'O LoRA funciona com praticamente qualquer modelo baseado em transformers, incluindo modelos de linguagem e de geração de imagens, pois adiciona matrizes de baixo rank às camadas de pesos existentes. Bibliotecas como Hugging Face PEFT permitem escolher quais camadas adaptar e qual rank usar.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/lora-vs-full-fine-tuning-overview-hero-ar.webp',
    title: 'LoRA مقابل الضبط الدقيق الكامل: أيهما تستخدم؟',
    seoTitle: 'LoRA مقابل الضبط الدقيق الكامل | Prompt Bites',
    metaDescription:
      'يدرّب LoRA مجموعة صغيرة من الأوزان المضافة ويحتاج إلى ذاكرة VRAM أقل بكثير من الضبط الدقيق الكامل، الذي يحدّث كل معامل في النموذج.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يقررون كيفية تكييف نموذج محلي مع بياناتهم الخاصة',
    siblingBites: ['fine-tuning-7b-model-locally-hardware', 'best-model-merging-tool-mergekit', 'best-local-llm-license-comparison'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>يدرّب LoRA عددًا صغيرًا من مصفوفات الأوزان المضافة منخفضة الرتبة مع إبقاء النموذج الأصلي مجمدًا، وهو ما يحتاج إلى ذاكرة VRAM أقل بكثير من الضبط الدقيق الكامل الذي يُحدَّث فيه كل معامل في النموذج.</strong> يمكن للضبط الدقيق الكامل أن يحقق جودة أعلى قليلًا على مجموعات بيانات كبيرة ومنسقة جيدًا، لكن LoRA يظل الخيار الافتراضي العملي لمعظم الإعدادات المحلية.',
    toc: [
      { label: 'الخيار الأفضل: LoRA لمعظم الإعدادات المحلية', anchor: '#best-pick' },
      { label: 'الفروق الرئيسية', anchor: '#key-differences' },
      { label: 'متى تستخدم كلًا منهما', anchor: '#when-to-use' },
      { label: 'يتعلم أقل وينسى أقل', anchor: '#learns-less-forgets-less' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'هل يجب أن أستخدم LoRA أم الضبط الدقيق الكامل؟',
        answer:
          'استخدم LoRA ما لم يكن لديك مجموعة بيانات كبيرة وعالية الجودة وذاكرة VRAM كافية للضبط الدقيق الكامل. يدرّب LoRA مجموعة صغيرة من الأوزان المضافة فوق نموذج أساسي مجمد، وهو ما يستهلك ذاكرة أقل بكثير مع تكييف السلوك بفعالية في معظم المهام.',
        bullets: [
          'يجمّد LoRA النموذج الأساسي ويدرّب مصفوفات أوزان مضافة صغيرة — تكلفة VRAM أقل بكثير.',
          'يحدّث الضبط الدقيق الكامل كل معامل، ويمكن أن يتفوق قليلًا على LoRA في الجودة مع بيانات نظيفة كافية.',
          'محولات LoRA ملفات صغيرة يمكن استبدالها على نفس النموذج الأساسي.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'تراخيص LoRA تجمّد النموذج الأساسي وتدرّب أوزانًا صغيرة مضافة، مستخدمة ذاكرة VRAM أقل بكثير من الضبط الدقيق الكامل',
          'يحدّث الضبط الدقيق الكامل كل معامل ويمكن أن يحقق جودة أعلى قليلًا مع مجموعات بيانات كبيرة ونظيفة',
          'محولات LoRA ملفات صغيرة قابلة للاستبدال — يمكن لعدة محولات مخصصة لمهام مختلفة مشاركة نموذج أساسي واحد',
          'نموذج بحجم 7B يحتاج إلى أكثر من 80 جيجابايت من VRAM للضبط الدقيق الكامل يمكن غالبًا ضبطه بدقة باستخدام LoRA على وحدة معالجة رسومات استهلاكية واحدة',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يدرّب LoRA مجموعة صغيرة من الأوزان المضافة ويحتاج إلى ذاكرة VRAM أقل بكثير من الضبط الدقيق الكامل، الذي يحدّث كل معامل في النموذج.' },
          { type: 'plain-terms', text: 'بعبارة بسيطة: LoRA طريقة خفيفة ورخيصة لتعديل سلوك النموذج، بينما الضبط الدقيق الكامل طريقة أثقل وأكثر تكلفة تمس النموذج بأكمله.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'الخيار الأفضل: LoRA لمعظم الإعدادات المحلية',
        content: [
          '<strong>يُعد LoRA الخيار الافتراضي الصحيح لتكييف نموذج محلي على أجهزة استهلاكية، لأنه يدرّب جزءًا صغيرًا من المعاملات بينما يحقق نتائج قريبة من الضبط الدقيق الكامل في معظم مهام اتباع التعليمات وتكييف الأسلوب.</strong> استخدم LoRA إذا: كان لديك وحدة معالجة رسومات استهلاكية واحدة، أو مجموعة بيانات في حدود الآلاف (وليس الملايين) من الأمثلة، أو أردت الاحتفاظ بعدة إصدارات مخصصة لمهام مختلفة من نفس النموذج الأساسي دون تخزين نسخة كاملة من كل منها.',
          'استخدم الضبط الدقيق الكامل إذا: كان لديك مجموعة بيانات كبيرة ومنسقة جيدًا (عادةً مئات الآلاف من الأمثلة أو أكثر)، ولديك إمكانية الوصول إلى عدة وحدات معالجة رسومات عالية VRAM، وتتطلب المهمة تغييرات أعمق في التمثيلات الأساسية للنموذج مما يمكن لمصفوفات LoRA المضافة التقاطه. عند الشك، ابدأ بـLoRA — فهو أسرع في التكرار ويمكن الترقية منه إلى الضبط الدقيق الكامل لاحقًا إذا توقفت الجودة عن التحسن.',
        ],
      },
      keyDifferences: {
        id: 'key-differences',
        title: 'الفروق الرئيسية',
        content: [
          'يُدرج LoRA (التكيّف منخفض الرتبة) مصفوفات أوزان صغيرة قابلة للتدريب في النموذج مع إبقاء الأوزان الأصلية مجمدة، وهو ما يقلل بشكل كبير من الذاكرة والحوسبة اللازمتين للتدريب مقارنةً بتحديث كل معامل. لا يزال يجب تحميل النموذج الأساسي المجمد للتدريب، لكن المُحسِّن (optimizer) يحتاج فقط إلى تتبع التدرجات للمصفوفات الصغيرة المضافة، وهو مصدر معظم توفير VRAM.',
          'يحدّث الضبط الدقيق الكامل النموذج بأكمله وقد ينتج نتائج أفضل بشكل طفيف على مجموعات بيانات كبيرة ومنسقة جيدًا، لكنه يتطلب ذاكرة VRAM وتخزينًا أكبر بكثير، لأن الناتج نسخة كاملة من النموذج وليس ملف محول صغير. تتطلب حالة المُحسِّن في الضبط الدقيق الكامل (خاصة مع مُحسِّنات شائعة مثل Adam) عادةً عدة أضعاف حجم ذاكرة النموذج نفسه، وهو ما يفسر سبب حاجة الضبط الدقيق الكامل لنموذج بحجم 7B غالبًا إلى عدة وحدات معالجة رسومات عالية VRAM.',
        ],
        columns: ['', 'LoRA', 'الضبط الدقيق الكامل'],
        rows: [
          { '': 'المعاملات المحدَّثة', 'LoRA': 'مصفوفات صغيرة مضافة فقط', 'الضبط الدقيق الكامل': 'كل معامل في النموذج' },
          { '': 'احتياج VRAM النموذجي (نموذج 7B)', 'LoRA': 'وحدة معالجة رسومات استهلاكية واحدة، غالبًا أقل من 24 جيجابايت', 'الضبط الدقيق الكامل': 'عدة وحدات معالجة رسومات عالية VRAM' },
          { '': 'الناتج النهائي', 'LoRA': 'ملف محول صغير (ميجابايتات)', 'الضبط الدقيق الكامل': 'نسخة كاملة من النموذج (جيجابايتات)' },
          { '': 'قابل للاستبدال بين المهام', 'LoRA': 'نعم — عدة محولات، نموذج أساسي واحد', 'الضبط الدقيق الكامل': 'لا — كل نتيجة نموذج كامل منفصل' },
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: 'متى تستخدم كلًا منهما',
        content: [
          'اختر LoRA عند تكييف نبرة النموذج أو تنسيقه أو سلوك مهمة ضيقة النطاق — فهذه بالضبط أنواع التغييرات التي تلتقطها مصفوفات LoRA المضافة جيدًا دون المساس بمعرفة النموذج الأوسع. اختر الضبط الدقيق الكامل عندما تتطلب المهمة من النموذج استيعاب معرفة واقعية جديدة كبيرة أو تغيير سلوكه جذريًا عبر نطاق واسع جدًا من المدخلات، وهو ما يستفيد أكثر من تحديث كل معامل.',
          'عند الشك، ابدأ بـLoRA وقيّم الجودة على مجموعة اختبار محتجزة خاصة بك قبل النظر في الضبط الدقيق الكامل — تجعل سرعة تكرار LoRA (تدريب أسرع، نقاط تحقق أصغر) التجربة بمزيج بيانات ومعاملات فائقة مختلفة أرخص أولًا.',
        ],
      },
      tradeoffs: {
        id: 'learns-less-forgets-less',
        title: 'LoRA يتعلم أقل وينسى أقل',
        content: [
          'وجدت دراسة محكومة قارنت بين LoRA والضبط الدقيق الكامل في مهام البرمجة والرياضيات (Biderman وآخرون، منشورة في TMLR) أن إعدادات LoRA القياسية منخفضة الرتبة تؤدي أسوأ بكثير من الضبط الدقيق الكامل عندما تتطلب المهمة تعلم قدر كبير من المعرفة الجديدة، بينما يحافظ LoRA على قدر أكبر من قدرات النموذج الأساسي الأصلية في المهام غير المرتبطة. ويربط المؤلفون هذه الفجوة بالرتبة: إذ يحدّث الضبط الدقيق الكامل الأوزان برتبة أعلى بما بين 10 و100 مرة من إعدادات LoRA المعتادة.',
          'عمليًا، يُعد LoRA الخيار الأكثر أمانًا عندما تريد تعديل السلوك دون الإضرار بالقدرة العامة، ويكون الضبط الدقيق الكامل أفضل عندما يجب تعليم النموذج كمًّا كبيرًا من المعرفة المتخصصة الجديدة. ويمكن لرفع رتبة LoRA وتطبيقه على مصفوفات أوزان أكثر أن يقلص الفجوة، لكن على حساب ذاكرة أكبر.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني دمج عدة محولات LoRA على نموذج أساسي واحد؟',
            a: 'نعم — محولات LoRA صغيرة وقابلة للاستبدال، لذا يمكن تدريب عدة محولات مخصصة لمهام مختلفة على نفس النموذج الأساسي المجمد وتحميلها حسب الحاجة، دون الاحتفاظ بعدة نسخ كاملة من النموذج على القرص.',
          },
          {
            q: 'هل يقلل LoRA من جودة الناتج مقارنة بالضبط الدقيق الكامل؟',
            a: 'بالنسبة لمعظم مهام اتباع التعليمات وتكييف الأسلوب، تكون فجوة الجودة بين LoRA والضبط الدقيق الكامل صغيرة. تتسع الفجوة بشكل رئيسي عندما تتطلب المهمة من النموذج استيعاب كميات كبيرة من المعرفة الواقعية الجديدة، حيث تكون لقدرة الضبط الدقيق الكامل على تحديث كل معامل ميزة أوضح.',
          },
          {
            q: 'هل يمكنني دمج محول LoRA مرة أخرى في النموذج الأساسي؟',
            a: 'نعم — يمكن دمج محولات LoRA في أوزان النموذج الأساسي لإنتاج ملف نموذج مستقل واحد، وهو ما يزيل الحاجة إلى تحميل المحول بشكل منفصل وقت الاستدلال، لكنه يزيل أيضًا القدرة على استبداله لمهمة مختلفة.',
          },
          {
            q: 'كم من VRAM يوفّره الضبط الدقيق باستخدام LoRA فعليًا مقارنة بالضبط الدقيق الكامل؟',
            a: 'يعتمد الرقم الدقيق على حجم النموذج ورتبة LoRA واختيار المُحسِّن، لكن LoRA يقلل عادةً من VRAM التدريب المطلوب بمقدار رتبة حجم واحدة تقريبًا مقارنةً بالضبط الدقيق الكامل لنفس النموذج الأساسي، لأن التدرجات وحالة المُحسِّن تُتبع فقط للمصفوفات الصغيرة المضافة.',
          },
          {
            q: 'ما هو QLoRA وما علاقته بـ LoRA؟',
            a: 'QLoRA هو تطبيق LoRA فوق نموذج أساسي محمَّل بتكميم 4 بت. تشغل الأوزان الأساسية المجمّدة ذاكرة أقل بكثير، بينما تُدرَّب مصفوفات LoRA الصغيرة بدقة أعلى، فيتسع نموذج أكبر على وحدة معالجة رسومية واحدة مقارنة بـ LoRA القياسي.',
          },
          {
            q: 'ما النماذج التي يمكن ضبطها بدقة باستخدام LoRA؟',
            a: 'يعمل LoRA مع أي نموذج قائم على المحوّلات (Transformers) تقريبًا، بما في ذلك نماذج اللغة وتوليد الصور، لأنه يضيف مصفوفات منخفضة الرتبة إلى طبقات الأوزان الموجودة. وتتيح مكتبات مثل Hugging Face PEFT اختيار الطبقات المراد تكييفها والرتبة المستخدمة.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/lora-vs-full-fine-tuning-overview-hero-ko.webp',
    title: 'LoRA와 전체 파인튜닝: 무엇을 사용해야 할까요?',
    seoTitle: 'LoRA vs 전체 파인튜닝: 무엇을 사용할까? | Prompt Bites',
    metaDescription:
      'LoRA는 소수의 추가된 가중치만 학습하므로, 모델의 모든 파라미터를 업데이트하는 전체 파인튜닝보다 필요한 VRAM이 훨씬 적습니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '로컬 모델을 자체 데이터에 맞게 조정하는 방법을 결정하려는 개발자',
    siblingBites: ['fine-tuning-7b-model-locally-hardware', 'best-model-merging-tool-mergekit', 'best-local-llm-license-comparison'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>LoRA는 원본 모델을 고정한 상태에서 소수의 추가된 저랭크 가중치 행렬만 학습하므로, 모델의 모든 파라미터를 업데이트하는 전체 파인튜닝보다 필요한 VRAM이 훨씬 적습니다.</strong> 대규모로 잘 정제된 데이터셋에서는 전체 파인튜닝이 약간 더 높은 품질에 도달할 수 있지만, 대부분의 로컬 환경에서는 LoRA가 실용적인 기본 선택지입니다.',
    toc: [
      { label: '최선의 선택: 대부분의 로컬 환경에는 LoRA', anchor: '#best-pick' },
      { label: '주요 차이점', anchor: '#key-differences' },
      { label: '각각을 언제 사용할지', anchor: '#when-to-use' },
      { label: '덜 배우고, 덜 잊는다', anchor: '#learns-less-forgets-less' },
      { label: '자주 묻는 질문', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ko: {
        question: 'LoRA와 전체 파인튜닝 중 무엇을 사용해야 합니까?',
        answer:
          '대규모 고품질 데이터셋과 전체 파인튜닝에 충분한 VRAM이 없다면 LoRA를 사용하십시오. LoRA는 고정된 기본 모델 위에 소수의 추가된 가중치만 학습하므로 사용하는 메모리가 훨씬 적으면서도 대부분의 작업에서 모델의 동작을 효과적으로 조정할 수 있습니다.',
        bullets: [
          'LoRA는 기본 모델을 고정하고 작은 추가 가중치 행렬만 학습합니다 — VRAM 비용이 훨씬 낮습니다.',
          '전체 파인튜닝은 모든 파라미터를 업데이트하며, 충분히 깨끗한 데이터가 있으면 품질에서 LoRA를 약간 능가할 수 있습니다.',
          'LoRA 어댑터는 같은 기본 모델에서 교체하여 사용할 수 있는 작은 파일입니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'LoRA는 기본 모델을 고정하고 소수의 추가 가중치를 학습하여, 전체 파인튜닝보다 훨씬 적은 VRAM을 사용합니다',
          '전체 파인튜닝은 모든 파라미터를 업데이트하며, 대규모의 깨끗한 데이터셋에서는 약간 더 높은 품질에 도달할 수 있습니다',
          'LoRA 어댑터는 작고 교체 가능한 파일로, 여러 작업별 어댑터가 하나의 기본 모델을 공유할 수 있습니다',
          '전체 파인튜닝에 80GB 이상의 VRAM이 필요한 7B 모델도 LoRA를 사용하면 단일 소비자용 GPU에서 파인튜닝할 수 있는 경우가 많습니다',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'LoRA는 소수의 추가된 가중치만 학습하므로, 모델의 모든 파라미터를 업데이트하는 전체 파인튜닝보다 필요한 VRAM이 훨씬 적습니다.' },
          { type: 'plain-terms', text: '쉽게 말해, LoRA는 모델의 동작을 조정하는 가볍고 저렴한 방법이고, 전체 파인튜닝은 모델 전체를 다루는 더 무겁고 비용이 많이 드는 방법입니다.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최선의 선택: 대부분의 로컬 환경에는 LoRA',
        content: [
          '<strong>LoRA는 소비자용 하드웨어에서 로컬 모델을 조정하는 올바른 기본 선택지입니다. 파라미터의 극히 일부만 학습하면서도 대부분의 지시 이행 및 스타일 적응 작업에서 전체 파인튜닝에 가까운 결과를 얻을 수 있기 때문입니다.</strong> 다음의 경우 LoRA를 사용하십시오: 소비자용 GPU가 하나뿐인 경우, 데이터셋이 수백만이 아닌 수천 개 규모인 경우, 또는 각각의 전체 사본을 저장하지 않고 동일한 기본 모델의 여러 작업별 변형을 유지하고 싶은 경우입니다.',
          '다음의 경우 전체 파인튜닝을 사용하십시오: 대규모의 잘 정제된 데이터셋(보통 수십만 개 이상의 예시)을 보유하고, 여러 개의 고용량 VRAM GPU에 접근할 수 있으며, 작업이 LoRA의 추가 행렬이 포착할 수 있는 수준보다 모델의 기저 표현에 더 깊은 변화를 요구하는 경우입니다. 확신이 서지 않는다면 LoRA부터 시작하십시오 — 반복 속도가 빠르며, 품질이 정체되면 나중에 전체 파인튜닝으로 전환할 수 있습니다.',
        ],
      },
      keyDifferences: {
        id: 'key-differences',
        title: '주요 차이점',
        content: [
          'LoRA(Low-Rank Adaptation)는 원본 가중치를 고정한 상태에서 모델에 작은 학습 가능한 가중치 행렬을 삽입하여, 모든 파라미터를 업데이트하는 것에 비해 학습에 필요한 메모리와 연산량을 크게 줄입니다. 학습을 위해서는 여전히 고정된 기본 모델을 로드해야 하지만, 옵티마이저는 추가된 작은 행렬에 대해서만 그레이디언트를 추적하면 되며, 이것이 VRAM 절감의 대부분을 차지합니다.',
          '전체 파인튜닝은 모델 전체를 업데이트하며, 대규모의 잘 정제된 데이터셋에서는 약간 더 나은 결과를 낼 수 있지만, 결과물이 작은 어댑터 파일이 아닌 모델의 전체 사본이므로 훨씬 더 많은 VRAM과 저장 공간이 필요합니다. 전체 파인튜닝의 옵티마이저 상태(특히 Adam과 같은 일반적인 옵티마이저를 사용할 때)는 일반적으로 모델 자체 메모리 사용량의 여러 배를 필요로 하며, 이것이 7B 모델의 전체 파인튜닝에 흔히 여러 개의 고용량 VRAM GPU가 필요한 이유입니다.',
        ],
        columns: ['', 'LoRA', '전체 파인튜닝'],
        rows: [
          { '': '업데이트되는 파라미터', 'LoRA': '추가된 작은 행렬만', '전체 파인튜닝': '모델의 모든 파라미터' },
          { '': '일반적인 VRAM 필요량(7B 모델)', 'LoRA': '단일 소비자용 GPU, 흔히 24GB 미만', '전체 파인튜닝': '여러 개의 고용량 VRAM GPU' },
          { '': '출력 산출물', 'LoRA': '작은 어댑터 파일(메가바이트 단위)', '전체 파인튜닝': '전체 모델 사본(기가바이트 단위)' },
          { '': '작업 간 교체 가능 여부', 'LoRA': '가능 — 여러 어댑터, 하나의 기본 모델', '전체 파인튜닝': '불가능 — 각 결과가 별도의 전체 모델임' },
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: '각각을 언제 사용할지',
        content: [
          '모델의 어조, 형식, 또는 좁은 범위의 작업별 동작을 조정할 때는 LoRA를 선택하십시오 — 이는 LoRA의 추가 행렬이 모델의 폭넓은 지식을 건드리지 않으면서도 잘 포착하는 유형의 변화입니다. 작업이 모델에 상당한 양의 새로운 사실적 지식을 흡수시키거나 매우 넓은 범위의 입력에 걸쳐 동작을 근본적으로 바꿔야 하는 경우에는 전체 파인튜닝을 선택하십시오 — 이는 모든 파라미터를 업데이트하는 방식에서 더 큰 이점을 얻습니다.',
          '확신이 서지 않는다면 먼저 LoRA로 시작해 자체 보류 테스트 세트에서 품질을 평가한 뒤 전체 파인튜닝을 고려하십시오 — LoRA의 반복 속도(더 빠른 학습, 더 작은 체크포인트)는 다양한 데이터 조합과 하이퍼파라미터를 먼저 실험하는 비용을 낮춰줍니다.',
        ],
      },
      tradeoffs: {
        id: 'learns-less-forgets-less',
        title: 'LoRA는 덜 배우고 덜 잊는다',
        content: [
          '코드와 수학 과제에서 LoRA와 전체 파인튜닝을 비교한 통제 연구(Biderman 외, TMLR 게재)에 따르면, 과제가 많은 새로운 지식의 학습을 요구할 때 표준적인 낮은 랭크의 LoRA 설정은 전체 파인튜닝보다 크게 뒤처지는 반면, 관련 없는 과제에서는 LoRA가 기본 모델의 원래 능력을 더 많이 보존했습니다. 저자들은 이 차이를 랭크와 연결합니다. 전체 파인튜닝은 일반적인 LoRA 구성보다 10~100배 높은 랭크로 가중치를 업데이트합니다.',
          '실제로는 일반 능력을 해치지 않으면서 동작을 조정하고 싶다면 LoRA가 더 안전한 선택이고, 모델에 방대한 새 전문 지식을 가르쳐야 한다면 전체 파인튜닝이 더 적합합니다. LoRA 랭크를 높이고 더 많은 가중치 행렬에 적용하면 격차를 줄일 수 있지만 메모리를 더 사용합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '하나의 기본 모델에 여러 LoRA 어댑터를 결합할 수 있습니까?',
            a: '예 — LoRA 어댑터는 작고 교체 가능하므로, 동일한 고정된 기본 모델에 대해 여러 작업별 어댑터를 학습시키고 필요에 따라 로드할 수 있으며, 디스크에 여러 개의 전체 모델 사본을 유지할 필요가 없습니다.',
          },
          {
            q: 'LoRA는 전체 파인튜닝에 비해 출력 품질을 낮춥니까?',
            a: '대부분의 지시 이행 및 스타일 적응 작업에서 LoRA와 전체 파인튜닝 간의 품질 차이는 작습니다. 이 차이는 주로 작업이 모델에 대량의 새로운 사실적 지식을 흡수시켜야 할 때 커지며, 이 경우 모든 파라미터를 업데이트할 수 있는 전체 파인튜닝의 이점이 더 뚜렷해집니다.',
          },
          {
            q: 'LoRA 어댑터를 기본 모델에 다시 병합할 수 있습니까?',
            a: '예 — LoRA 어댑터는 기본 모델의 가중치에 병합되어 단일 독립 모델 파일을 만들 수 있으며, 이렇게 하면 추론 시 어댑터를 별도로 로드할 필요는 없어지지만, 다른 작업을 위해 어댑터를 교체할 수 있는 기능도 사라집니다.',
          },
          {
            q: 'LoRA 파인튜닝은 전체 파인튜닝에 비해 실제로 VRAM을 얼마나 절약합니까?',
            a: '정확한 수치는 모델 크기, LoRA 랭크, 옵티마이저 선택에 따라 다르지만, LoRA는 그레이디언트와 옵티마이저 상태를 추가된 작은 행렬에 대해서만 추적하므로, 동일한 기본 모델의 전체 파인튜닝과 비교했을 때 필요한 학습 VRAM을 대략 한 자릿수 정도 줄이는 경우가 많습니다.',
          },
          {
            q: 'QLoRA란 무엇이며 LoRA와 어떤 관계인가요?',
            a: 'QLoRA는 4비트 양자화로 불러온 기본 모델 위에 LoRA를 적용하는 방식입니다. 고정된 기본 가중치는 메모리를 훨씬 적게 쓰고 작은 LoRA 행렬은 더 높은 정밀도로 학습되므로, 표준 LoRA보다 더 큰 모델을 GPU 한 장에 올릴 수 있습니다.',
          },
          {
            q: '어떤 모델을 LoRA로 파인튜닝할 수 있나요?',
            a: 'LoRA는 기존 가중치 층에 낮은 랭크의 행렬을 추가하므로 언어 모델과 이미지 생성 모델을 포함해 거의 모든 트랜스포머 기반 모델에서 작동합니다. Hugging Face PEFT 같은 라이브러리에서 적응할 층과 랭크를 선택할 수 있습니다.',
          },
        ],
      },
    },
  },
}

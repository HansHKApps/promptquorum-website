import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware Extension',
    heroImage: '/images/best-model-merging-tool-mergekit-overview-hero-en.webp',
    title: 'Mergekit and Alternatives for Merging Local Model Weights',
    seoTitle: 'Best Model Merging Tool 2026: Mergekit vs Alternatives',
    metaDescription:
      'Mergekit merges local model weights on CPU with 18 methods (SLERP, TIES, DARE). Compare it with PEFT and mergoo, plus RAM needs and license.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    last_full_refresh: '2026-10-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Developers who want to combine multiple fine-tuned models into one without additional training',
    affiliateDisclosure: true,
    siblingBites: ['lora-vs-full-fine-tuning', 'fine-tuning-7b-model-locally-hardware'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Mergekit is the best-known open-source toolkit for merging local model weights (7,000+ GitHub stars), supporting 18 merge methods such as linear, SLERP, and TIES without any GPU training step.</strong> It operates directly on downloaded weight files, making it accessible on modest hardware compared to fine-tuning — the main cost is enough system RAM to hold the models being merged, not GPU compute.',
    toc: [
      { label: 'Best Pick: Mergekit', anchor: '#best-pick' },
      { label: 'How Model Merging Works', anchor: '#how-it-works' },
      { label: 'Merge Methods Compared', anchor: '#merge-methods' },
      { label: 'Mergekit Alternatives Compared', anchor: '#alternatives' },
      { label: 'Mergekit Project Status', anchor: '#project-status' },
      { label: 'Hardware for Larger Merges', anchor: '#hardware' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      en: {
        question: 'What is the best tool for merging local model weights?',
        answer:
          'Mergekit is the best-known open-source tool for this. It merges compatible model weight files using methods like linear averaging, SLERP, or TIES, without any GPU training step — the merge itself can run on CPU and takes a fraction of the time fine-tuning would.',
        bullets: [
          'Mergekit supports several merge methods, each trading off differently between blending and preserving individual model strengths.',
          'No GPU training is required for the merge itself — only enough RAM to hold the weight files being combined.',
          'Merged models must share the same base architecture and parameter shapes to combine correctly.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mergekit is the standard open-source tool for merging compatible local model weights',
          'Merging requires no GPU training step, only enough RAM to hold the weight files',
          'Linear and SLERP methods are simple starting points; TIES and DARE better preserve individual model strengths',
          'Models being merged must share the same base architecture and parameter shapes',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Mergekit is an open-source toolkit with 18 merge methods for combining local model weights without a GPU training step.' },
          { type: 'plain-terms', text: 'In plain terms: mergekit blends two or more compatible models into one new model file, without retraining anything from scratch.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: Mergekit',
        content: [
          '<strong>Mergekit is the standard choice for merging local model weights because it is open source, supports the widest range of merge methods, and requires no GPU training step — only enough system RAM to hold the source models in memory during the merge.</strong> This makes it accessible on a modest desktop or laptop, unlike full fine-tuning, which needs a training-capable GPU.',
          'Use Mergekit if: you want to combine the behavior of two fine-tunes of the same base model into one, you don\'t have the compute budget for a full fine-tuning run, or you want to experiment with several merge ratios quickly without retraining. Avoid Mergekit if: the models you want to combine have different base architectures or parameter counts — weight-level merging requires matching shapes.',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'How Model Merging Works',
        content: [
          'Model merging combines the weights of two or more models that share the same base architecture into a single new set of weights, using a mathematical merge method rather than additional training. Because no gradient computation or backpropagation happens during a merge, the process runs on CPU in minutes rather than the hours or days a full fine-tuning run would take.',
          'The output is a single new model file the same size as the source models — not an adapter or a wrapper around multiple models. Once merged, the result behaves as one ordinary model at inference time, with no extra latency from combining multiple sources.',
        ],
      },
      mergeMethods: {
        id: 'merge-methods',
        title: 'Merge Methods Compared',
        content: [
          'Linear averaging is the simplest method — it blends corresponding weights by a fixed ratio and works as a reasonable first attempt, but tends to dilute each source model\'s distinct strengths as more models are blended together.',
          'SLERP (spherical linear interpolation) blends two models along a curved path in weight space rather than a straight line, which generally preserves more of each model\'s character than plain linear averaging when merging exactly two models.',
          'TIES and DARE are more selective methods that try to resolve conflicting weight updates between source models instead of averaging over them, which generally preserves each source model\'s distinct strengths better when merging more than two models at once.',
          'Mergekit\'s README lists 18 merge methods: linear, slerp, nuslerp, multislerp, karcher, task_arithmetic, ties, dare_linear, dare_ties, della, della_linear, breadcrumbs, breadcrumbs_ties, sce, model_stock, nearswap, arcee_fusion and passthrough. Passthrough stacks layers from different models instead of averaging them.',
        ],
        callouts: [
          { type: 'verdict', text: 'Merging exactly two models — start with SLERP. Skip if: you need finer control over which weights carry over.' },
          { type: 'verdict', text: 'Merging three or more models — use TIES or DARE. Skip if: the source models diverge heavily in behavior, since conflict resolution degrades with too many divergent sources.' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Mergekit Alternatives Compared',
        content: [
          '<strong>Mergekit is the strongest fit for full-weight merges; PEFT fits LoRA adapters better, and mergoo fits mixture-of-experts builds.</strong> Pick by what you are combining, not by popularity.',
          '<a href="https://github.com/huggingface/peft" class="text-primary hover:underline" rel="noopener">PEFT</a> (Apache-2.0): merges LoRA adapters trained on the same base model with its add_weighted_adapter method, using linear, SVD, TIES or DARE combination. Use it when you have adapters rather than full fine-tuned weights.',
          '<a href="https://github.com/Leeroo-AI/mergoo" class="text-primary hover:underline" rel="noopener">mergoo</a> (LGPL-3.0): combines several fine-tuned experts into a mixture-of-experts or mixture-of-adapters model for Llama, Mistral, Phi-3 and BERT, then lets you train the router. Its last commit on GitHub is from August 2024, so check compatibility with current library versions before relying on it.',
          'LazyMergekit (explained in this <a href="https://towardsdatascience.com/merge-large-language-models-with-mergekit-2118fb392b54" class="text-primary hover:underline" rel="noopener">Towards Data Science tutorial</a>) and the <a href="https://huggingface.co/spaces/arcee-ai/mergekit-gui" class="text-primary hover:underline" rel="noopener">mergekit-gui</a> Hugging Face Space are front ends built on Mergekit. They remove setup work, but the merge engine and the method list are the same.',
        ],
        callouts: [
          { type: 'verdict', text: 'Merging full fine-tunes of one base model — use Mergekit. Skip if: you only have LoRA adapters; use PEFT instead.' },
          { type: 'verdict', text: 'Building a mixture of experts — use mergekit-moe or mergoo. Skip if: you need a single plain model, since a mixture-of-experts result is larger than any one source.' },
        ],
      },
      projectStatus: {
        id: 'project-status',
        title: 'Mergekit Project Status',
        content: [
          'Mergekit is developed by Arcee AI under the LGPL-3.0 license. Its last upstream update was on 12 September 2026 (latest commit on the main branch); the most recent tagged release is v0.1.4 from 31 October 2025. Source: <a href="https://github.com/arcee-ai/mergekit" class="text-primary hover:underline" rel="noopener">Mergekit on GitHub</a>.',
          'The documented install is a git clone followed by pip install -e . from the repository folder. A merge runs with the mergekit-yaml command and a YAML config that names the source models and the method.',
          'The repository also ships mergekit-moe (combine dense models into a mixture of experts), mergekit-extract-lora (extract a PEFT-compatible low-rank approximation of a fine-tune) and an evolutionary merge mode. The README lists Llama, Mistral, GPT-NeoX and StableLM among the supported architectures.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware for Larger Merges',
        content: [
          'A CPU-only merge of two 7B models is comfortable on a machine with 32 GB of RAM. Merging larger models (30B+) or several sources at once can exceed typical desktop RAM, since Mergekit needs to hold each source model in memory during the merge — renting a high-RAM cloud instance for the merge step alone is often cheaper than buying additional local RAM for an occasional task.',
          'Treat the figures above as conservative planning numbers. The README describes lazy tensor loading and an out-of-core approach, and says merges can run entirely on CPU or be accelerated with as little as 8 GB of VRAM (the --cuda flag), so real peak memory can be lower than the combined size of the source models.',
          '<em>Disclosure: This article contains affiliate links. We may earn a commission if you purchase through these links, at no extra cost to you.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.runpod.io/console/deploy',
            productName: 'RunPod On-Demand Cloud GPU/CPU Instances',
            productCategory: 'cloud-compute',
            priceRange: '$0.20-1/hr',
            label: 'Rent a high-RAM cloud instance on RunPod for large model merges',
          },
          {
            url: 'https://www.amazon.com/s?k=64gb+ddr5+ram+kit',
            productName: '64GB DDR5 RAM Kit',
            productCategory: 'memory',
            priceRange: '$180-260',
            label: 'Check 64GB RAM kit price on Amazon (for repeated local merges)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I merge models with different architectures?',
            a: 'No — the models being merged generally need to share the same base architecture and parameter shapes for a weight-level merge to work correctly. A merge between two fine-tunes built on different base architectures will not produce a valid model.',
          },
          {
            q: 'Does merging models require a GPU?',
            a: 'No — the merge computation itself is CPU-bound and does not require GPU acceleration. A GPU only becomes relevant afterward, when you run inference on the merged model or fine-tune it further.',
          },
          {
            q: 'Does a merged model perform better than either source model?',
            a: 'It depends on how compatible the source models\' behaviors are. A well-chosen merge can combine strengths from each source, but a merge of two very differently trained models can also produce worse results than either source alone — always evaluate the merged model on your own tasks before relying on it.',
          },
          {
            q: 'Is Mergekit the only tool for merging local model weights?',
            a: 'No. PEFT merges LoRA adapters with its add_weighted_adapter method, and mergoo builds mixture-of-experts models from several fine-tunes. LazyMergekit and the mergekit-gui Space are front ends on top of Mergekit rather than separate engines. See the comparison above.',
          },
          {
            q: 'Which license does Mergekit use?',
            a: 'LGPL-3.0. A merged model can also be subject to the license terms of each source model, so check those before you publish or sell the result. This is general information, not legal advice.',
          },
          {
            q: 'How many merge methods does Mergekit support?',
            a: 'The README lists 18, from linear and SLERP to TIES, DARE, DELLA, SCE, Model Stock and passthrough.',
          },
          {
            q: 'Can I merge LoRA adapters instead of full models?',
            a: 'Yes. PEFT\'s add_weighted_adapter merges LoRA adapters trained on the same base model, with linear, SVD, TIES and DARE options. Mergekit works in the other direction with mergekit-extract-lora, which extracts a low-rank adapter from a fine-tuned model.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Hardware Extension',
    heroImage: '/images/best-model-merging-tool-mergekit-overview-hero-de.webp',
    title: 'Mergekit und Alternativen zum Zusammenführen lokaler Modellgewichte',
    seoTitle: 'Bestes Modell-Merge-Tool 2026: Mergekit im Vergleich',
    metaDescription:
      'Mergekit führt lokale Modellgewichte per CPU mit 18 Methoden zusammen (SLERP, TIES, DARE). Vergleich mit PEFT und mergoo, plus RAM-Bedarf und Lizenz.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    last_full_refresh: '2026-10-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Entwickler, die mehrere feinabgestimmte Modelle ohne zusätzliches Training zu einem kombinieren möchten',
    affiliateDisclosure: true,
    siblingBites: ['lora-vs-full-fine-tuning', 'fine-tuning-7b-model-locally-hardware'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Mergekit ist das bekannteste Open-Source-Toolkit zum Zusammenführen lokaler Modellgewichte (über 7.000 GitHub-Sterne) und unterstützt 18 Merge-Methoden wie linear, SLERP und TIES ohne jeglichen GPU-Trainingsschritt.</strong> Es arbeitet direkt mit heruntergeladenen Gewichtsdateien, wodurch es im Vergleich zu Fine-Tuning auf bescheidener Hardware zugänglich ist — die Hauptkosten sind ausreichend Systemarbeitsspeicher, um die zu mergenden Modelle zu halten, nicht GPU-Rechenleistung.',
    toc: [
      { label: 'Beste Wahl: Mergekit', anchor: '#best-pick' },
      { label: 'Wie Model Merging funktioniert', anchor: '#how-it-works' },
      { label: 'Merge-Methoden im Vergleich', anchor: '#merge-methods' },
      { label: 'Mergekit-Alternativen im Vergleich', anchor: '#alternatives' },
      { label: 'Projektstatus von Mergekit', anchor: '#project-status' },
      { label: 'Hardware für größere Merges', anchor: '#hardware' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Was ist das beste Tool zum Zusammenführen lokaler Modellgewichte?',
        answer:
          'Mergekit ist dafür das bekannteste Open-Source-Tool. Es führt kompatible Modellgewichtsdateien mit Methoden wie linearer Mittelung, SLERP oder TIES zusammen, ohne jeglichen GPU-Trainingsschritt — der Merge selbst kann auf der CPU laufen und benötigt nur einen Bruchteil der Zeit, die Fine-Tuning erfordern würde.',
        bullets: [
          'Mergekit unterstützt mehrere Merge-Methoden, die jeweils unterschiedlich zwischen Vermischung und Erhalt individueller Modellstärken abwägen.',
          'Für den Merge selbst ist kein GPU-Training erforderlich — nur ausreichend RAM, um die zu kombinierenden Gewichtsdateien zu halten.',
          'Zusammengeführte Modelle müssen dieselbe Basisarchitektur und dieselben Parameterformen teilen, um korrekt zu kombinieren.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mergekit ist das Standard-Open-Source-Tool zum Zusammenführen kompatibler lokaler Modellgewichte',
          'Merging erfordert keinen GPU-Trainingsschritt, nur ausreichend RAM, um die Gewichtsdateien zu halten',
          'Linear- und SLERP-Methoden sind einfache Ausgangspunkte; TIES und DARE erhalten individuelle Modellstärken besser',
          'Zu mergende Modelle müssen dieselbe Basisarchitektur und dieselben Parameterformen teilen',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Mergekit ist ein Open-Source-Toolkit mit 18 Merge-Methoden zum Zusammenführen lokaler Modellgewichte ohne GPU-Trainingsschritt.' },
          { type: 'plain-terms', text: 'Einfach gesagt: Mergekit vermischt zwei oder mehr kompatible Modelle zu einer neuen Modelldatei, ohne irgendetwas von Grund auf neu zu trainieren.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: Mergekit',
        content: [
          '<strong>Mergekit ist die Standardwahl zum Zusammenführen lokaler Modellgewichte, weil es Open Source ist, die größte Bandbreite an Merge-Methoden unterstützt und keinen GPU-Trainingsschritt erfordert — nur ausreichend Systemarbeitsspeicher, um die Quellmodelle während des Merges im Speicher zu halten.</strong> Das macht es auf einem bescheidenen Desktop oder Laptop zugänglich, im Gegensatz zu vollständigem Fine-Tuning, das eine trainingsfähige GPU benötigt.',
          'Verwenden Sie Mergekit, wenn: Sie das Verhalten zweier Fine-Tunes desselben Basismodells zu einem kombinieren möchten, Ihnen das Rechenbudget für einen vollständigen Fine-Tuning-Lauf fehlt, oder Sie schnell mehrere Merge-Verhältnisse ausprobieren möchten, ohne neu zu trainieren. Vermeiden Sie Mergekit, wenn: die zu kombinierenden Modelle unterschiedliche Basisarchitekturen oder Parameteranzahlen haben — ein Merge auf Gewichtsebene erfordert übereinstimmende Formen.',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Wie Model Merging funktioniert',
        content: [
          'Model Merging kombiniert die Gewichte von zwei oder mehr Modellen, die dieselbe Basisarchitektur teilen, zu einem einzigen neuen Satz von Gewichten, mithilfe einer mathematischen Merge-Methode statt zusätzlichem Training. Da während eines Merges keine Gradientenberechnung oder Backpropagation stattfindet, läuft der Prozess auf der CPU in Minuten statt in den Stunden oder Tagen, die ein vollständiger Fine-Tuning-Lauf benötigen würde.',
          'Das Ergebnis ist eine einzelne neue Modelldatei derselben Größe wie die Quellmodelle — kein Adapter und kein Wrapper um mehrere Quellen. Nach dem Merge verhält sich das Ergebnis zur Inferenzzeit wie ein gewöhnliches Modell, ohne zusätzliche Latenz durch die Kombination mehrerer Quellen.',
        ],
      },
      mergeMethods: {
        id: 'merge-methods',
        title: 'Merge-Methoden im Vergleich',
        content: [
          'Lineare Mittelung ist die einfachste Methode — sie vermischt entsprechende Gewichte nach einem festen Verhältnis und funktioniert als vernünftiger erster Versuch, neigt aber dazu, die individuellen Stärken jedes Quellmodells zu verwässern, je mehr Modelle vermischt werden.',
          'SLERP (sphärische lineare Interpolation) vermischt zwei Modelle entlang eines gekrümmten Pfads im Gewichtsraum statt entlang einer geraden Linie, was beim Mergen genau zweier Modelle im Allgemeinen mehr vom Charakter jedes Modells erhält als einfache lineare Mittelung.',
          'TIES und DARE sind selektivere Methoden, die versuchen, widersprüchliche Gewichtsaktualisierungen zwischen Quellmodellen aufzulösen, statt über sie zu mitteln, was beim Mergen von mehr als zwei Modellen gleichzeitig im Allgemeinen die individuellen Stärken jedes Quellmodells besser erhält.',
          'Die README von Mergekit listet 18 Merge-Methoden: linear, slerp, nuslerp, multislerp, karcher, task_arithmetic, ties, dare_linear, dare_ties, della, della_linear, breadcrumbs, breadcrumbs_ties, sce, model_stock, nearswap, arcee_fusion und passthrough. Passthrough stapelt Schichten verschiedener Modelle, statt sie zu mitteln.',
        ],
        callouts: [
          { type: 'verdict', text: 'Beim Mergen von genau zwei Modellen — mit SLERP beginnen. Überspringen, wenn: Sie feinere Kontrolle darüber benötigen, welche Gewichte übernommen werden.' },
          { type: 'verdict', text: 'Beim Mergen von drei oder mehr Modellen — TIES oder DARE verwenden. Überspringen, wenn: die Quellmodelle stark im Verhalten abweichen, da die Konfliktauflösung bei zu vielen divergierenden Quellen nachlässt.' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Mergekit-Alternativen im Vergleich',
        content: [
          '<strong>Mergekit passt am besten für Merges kompletter Gewichte; PEFT eignet sich besser für LoRA-Adapter, mergoo für Mixture-of-Experts-Builds.</strong> Wählen Sie danach, was Sie kombinieren, nicht nach Beliebtheit.',
          '<a href="https://github.com/huggingface/peft" class="text-primary hover:underline" rel="noopener">PEFT</a> (Apache-2.0): führt LoRA-Adapter, die auf demselben Basismodell trainiert wurden, mit der Methode add_weighted_adapter zusammen — per linearer, SVD-, TIES- oder DARE-Kombination. Nutzen Sie es, wenn Sie Adapter statt vollständig feinabgestimmter Gewichte haben.',
          '<a href="https://github.com/Leeroo-AI/mergoo" class="text-primary hover:underline" rel="noopener">mergoo</a> (LGPL-3.0): kombiniert mehrere feinabgestimmte Experten zu einem Mixture-of-Experts- oder Mixture-of-Adapters-Modell für Llama, Mistral, Phi-3 und BERT und erlaubt anschließend das Training des Routers. Der letzte Commit auf GitHub stammt vom August 2024; prüfen Sie daher die Kompatibilität mit aktuellen Bibliotheksversionen, bevor Sie sich darauf verlassen.',
          'LazyMergekit (erklärt in diesem <a href="https://towardsdatascience.com/merge-large-language-models-with-mergekit-2118fb392b54" class="text-primary hover:underline" rel="noopener">Tutorial von Towards Data Science</a>) und der Hugging-Face-Space <a href="https://huggingface.co/spaces/arcee-ai/mergekit-gui" class="text-primary hover:underline" rel="noopener">mergekit-gui</a> sind Oberflächen auf Basis von Mergekit. Sie ersparen Einrichtungsaufwand, aber Merge-Engine und Methodenliste sind dieselben.',
        ],
        callouts: [
          { type: 'verdict', text: 'Merge vollständiger Fine-Tunes eines Basismodells — Mergekit verwenden. Überspringen, wenn: Sie nur LoRA-Adapter haben; nutzen Sie dann PEFT.' },
          { type: 'verdict', text: 'Aufbau eines Mixture of Experts — mergekit-moe oder mergoo verwenden. Überspringen, wenn: Sie ein einzelnes normales Modell brauchen, da ein Mixture-of-Experts-Ergebnis größer ist als jede einzelne Quelle.' },
        ],
      },
      projectStatus: {
        id: 'project-status',
        title: 'Projektstatus von Mergekit',
        content: [
          'Mergekit wird von Arcee AI unter der Lizenz LGPL-3.0 entwickelt. Das letzte Upstream-Update erfolgte am 12. September 2026 (jüngster Commit im Hauptzweig); das aktuellste getaggte Release ist v0.1.4 vom 31. Oktober 2025. Quelle: <a href="https://github.com/arcee-ai/mergekit" class="text-primary hover:underline" rel="noopener">Mergekit auf GitHub</a>.',
          'Die dokumentierte Installation ist ein git clone, gefolgt von pip install -e . im Repository-Ordner. Ein Merge läuft mit dem Befehl mergekit-yaml und einer YAML-Konfiguration, die Quellmodelle und Methode benennt.',
          'Das Repository enthält außerdem mergekit-moe (dichte Modelle zu einem Mixture of Experts kombinieren), mergekit-extract-lora (eine PEFT-kompatible Low-Rank-Approximation eines Fine-Tunes extrahieren) und einen evolutionären Merge-Modus. Die README nennt unter den unterstützten Architekturen Llama, Mistral, GPT-NeoX und StableLM.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware für größere Merges',
        content: [
          'Ein reiner CPU-Merge zweier 7B-Modelle ist auf einer Maschine mit 32 GB RAM problemlos möglich. Das Mergen größerer Modelle (30B+) oder mehrerer Quellen gleichzeitig kann den typischen Desktop-RAM überschreiten, da Mergekit jedes Quellmodell während des Merges im Speicher halten muss — das Mieten einer Cloud-Instanz mit viel RAM nur für den Merge-Schritt ist für gelegentliche Aufgaben oft günstiger als der Kauf zusätzlichen lokalen RAMs.',
          'Betrachten Sie die obigen Angaben als vorsichtige Planungswerte. Die README beschreibt lazy Tensor-Loading und einen Out-of-Core-Ansatz und nennt, dass Merges vollständig auf der CPU laufen oder mit nur 8 GB VRAM beschleunigt werden können (Flag --cuda); der tatsächliche Spitzenverbrauch kann daher unter der Gesamtgröße der Quellmodelle liegen.',
          '<em>Hinweis: Dieser Artikel enthält Affiliate-Links. Wir erhalten möglicherweise eine Provision, wenn Sie über diese Links einkaufen — ohne Mehrkosten für Sie.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.runpod.io/console/deploy',
            productName: 'RunPod On-Demand Cloud GPU/CPU Instances',
            productCategory: 'cloud-compute',
            priceRange: '$0.20-1/hr',
            label: 'Bei RunPod eine RAM-starke Cloud-Instanz für große Modell-Merges mieten',
          },
          {
            url: 'https://www.amazon.de/s?k=64gb+ddr5+ram+kit',
            productName: '64GB DDR5 RAM Kit',
            productCategory: 'memory',
            priceRange: '$180-260',
            label: 'Preis des 64GB-RAM-Kits bei Amazon prüfen (für wiederholte lokale Merges)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich Modelle mit unterschiedlichen Architekturen mergen?',
            a: 'Nein — die zu mergenden Modelle müssen im Allgemeinen dieselbe Basisarchitektur und dieselben Parameterformen teilen, damit ein Merge auf Gewichtsebene korrekt funktioniert. Ein Merge zwischen zwei Fine-Tunes auf unterschiedlichen Basisarchitekturen ergibt kein gültiges Modell.',
          },
          {
            q: 'Erfordert das Mergen von Modellen eine GPU?',
            a: 'Nein — die Merge-Berechnung selbst ist CPU-gebunden und erfordert keine GPU-Beschleunigung. Eine GPU wird erst danach relevant, wenn Sie Inferenz auf dem gemergten Modell ausführen oder es weiter feinabstimmen.',
          },
          {
            q: 'Schneidet ein gemergtes Modell besser ab als eines der Quellmodelle?',
            a: 'Das hängt davon ab, wie kompatibel die Verhaltensweisen der Quellmodelle sind. Ein gut gewählter Merge kann die Stärken jeder Quelle kombinieren, aber ein Merge zweier sehr unterschiedlich trainierter Modelle kann auch schlechtere Ergebnisse liefern als jede Quelle allein — bewerten Sie das gemergte Modell immer anhand Ihrer eigenen Aufgaben, bevor Sie sich darauf verlassen.',
          },
          {
            q: 'Ist Mergekit das einzige Tool zum Zusammenführen lokaler Modellgewichte?',
            a: 'Nein. PEFT führt LoRA-Adapter mit der Methode add_weighted_adapter zusammen, und mergoo baut Mixture-of-Experts-Modelle aus mehreren Fine-Tunes. LazyMergekit und der mergekit-gui-Space sind Oberflächen auf Mergekit und keine eigenständigen Engines. Siehe den Vergleich oben.',
          },
          {
            q: 'Welche Lizenz verwendet Mergekit?',
            a: 'LGPL-3.0. Ein gemergtes Modell kann zudem den Lizenzbedingungen jedes Quellmodells unterliegen; prüfen Sie diese, bevor Sie das Ergebnis veröffentlichen oder verkaufen. Dies sind allgemeine Informationen, keine Rechtsberatung.',
          },
          {
            q: 'Wie viele Merge-Methoden unterstützt Mergekit?',
            a: 'Die README listet 18, von linear und SLERP bis TIES, DARE, DELLA, SCE, Model Stock und passthrough.',
          },
          {
            q: 'Kann ich LoRA-Adapter statt vollständiger Modelle mergen?',
            a: 'Ja. add_weighted_adapter von PEFT führt LoRA-Adapter zusammen, die auf demselben Basismodell trainiert wurden, mit linearen, SVD-, TIES- und DARE-Optionen. Mergekit arbeitet mit mergekit-extract-lora in die Gegenrichtung und extrahiert einen Low-Rank-Adapter aus einem feinabgestimmten Modell.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware Extension',
    heroImage: '/images/best-model-merging-tool-mergekit-overview-hero-fr.webp',
    title: 'Mergekit et alternatives pour fusionner des poids de modèles locaux',
    seoTitle: 'Outil de fusion de modèles 2026 : Mergekit et alternatives',
    metaDescription:
      'Mergekit fusionne des poids de modèles locaux sur CPU avec 18 méthodes (SLERP, TIES, DARE). Comparaison avec PEFT et mergoo, RAM requise et licence.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    last_full_refresh: '2026-10-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: "Développeurs souhaitant combiner plusieurs modèles affinés en un seul sans entraînement supplémentaire",
    affiliateDisclosure: true,
    siblingBites: ['lora-vs-full-fine-tuning', 'fine-tuning-7b-model-locally-hardware'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Mergekit est la boîte à outils open source la plus connue pour fusionner des poids de modèles locaux (plus de 7 000 étoiles GitHub), prenant en charge 18 méthodes de fusion comme linéaire, SLERP et TIES sans aucune étape d\'entraînement GPU.</strong> Il opère directement sur des fichiers de poids téléchargés, le rendant accessible sur du matériel modeste comparé au fine-tuning — le coût principal est une RAM système suffisante pour contenir les modèles à fusionner, pas de la puissance de calcul GPU.',
    toc: [
      { label: 'Meilleur choix : Mergekit', anchor: '#best-pick' },
      { label: 'Comment fonctionne la fusion de modèles', anchor: '#how-it-works' },
      { label: 'Comparaison des méthodes de fusion', anchor: '#merge-methods' },
      { label: 'Comparaison des alternatives à Mergekit', anchor: '#alternatives' },
      { label: 'État du projet Mergekit', anchor: '#project-status' },
      { label: 'Matériel pour les fusions plus importantes', anchor: '#hardware' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur outil pour fusionner des poids de modèles locaux ?',
        answer:
          'Mergekit est l\'outil open source le plus connu pour cela. Il fusionne des fichiers de poids de modèles compatibles à l\'aide de méthodes comme la moyenne linéaire, SLERP ou TIES, sans aucune étape d\'entraînement GPU — la fusion elle-même peut s\'exécuter sur le CPU et prend une fraction du temps qu\'exigerait un fine-tuning.',
        bullets: [
          'Mergekit prend en charge plusieurs méthodes de fusion, chacune offrant un compromis différent entre mélange et préservation des points forts individuels de chaque modèle.',
          "Aucun entraînement GPU n'est requis pour la fusion elle-même — seulement assez de RAM pour contenir les fichiers de poids combinés.",
          'Les modèles fusionnés doivent partager la même architecture de base et les mêmes formes de paramètres pour se combiner correctement.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Mergekit est l'outil open source standard pour fusionner des poids de modèles locaux compatibles",
          "La fusion ne nécessite aucune étape d'entraînement GPU, seulement assez de RAM pour contenir les fichiers de poids",
          'Les méthodes linéaire et SLERP sont de bons points de départ simples ; TIES et DARE préservent mieux les points forts individuels de chaque modèle',
          'Les modèles à fusionner doivent partager la même architecture de base et les mêmes formes de paramètres',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Mergekit est une boîte à outils open source de 18 méthodes de fusion pour combiner des poids de modèles locaux sans étape d\'entraînement GPU.' },
          { type: 'plain-terms', text: "En termes simples : mergekit mélange deux modèles compatibles ou plus en un seul nouveau fichier de modèle, sans rien réentraîner depuis le début." },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : Mergekit',
        content: [
          "<strong>Mergekit est le choix standard pour fusionner des poids de modèles locaux car il est open source, prend en charge le plus large éventail de méthodes de fusion, et ne nécessite aucune étape d'entraînement GPU — seulement assez de RAM système pour contenir les modèles sources en mémoire pendant la fusion.</strong> Cela le rend accessible sur un ordinateur de bureau ou portable modeste, contrairement au fine-tuning complet, qui nécessite un GPU capable d'entraînement.",
          "Utilisez Mergekit si : vous voulez combiner le comportement de deux versions affinées du même modèle de base en une seule, vous n'avez pas le budget de calcul pour un entraînement complet, ou vous voulez expérimenter rapidement plusieurs ratios de fusion sans réentraîner. Évitez Mergekit si : les modèles que vous voulez combiner ont des architectures de base ou des nombres de paramètres différents — la fusion au niveau des poids nécessite des formes correspondantes.",
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Comment fonctionne la fusion de modèles',
        content: [
          "La fusion de modèles combine les poids de deux modèles ou plus partageant la même architecture de base en un seul nouvel ensemble de poids, à l'aide d'une méthode de fusion mathématique plutôt que d'un entraînement supplémentaire. Comme aucun calcul de gradient ni rétropropagation n'a lieu pendant une fusion, le processus s'exécute sur le CPU en quelques minutes plutôt qu'en heures ou en jours comme le nécessiterait un entraînement complet.",
          "Le résultat est un unique nouveau fichier de modèle de la même taille que les modèles sources — pas un adaptateur ni une enveloppe autour de plusieurs sources. Une fois fusionné, le résultat se comporte comme un modèle ordinaire au moment de l'inférence, sans latence supplémentaire due à la combinaison de plusieurs sources.",
        ],
      },
      mergeMethods: {
        id: 'merge-methods',
        title: 'Comparaison des méthodes de fusion',
        content: [
          "La moyenne linéaire est la méthode la plus simple — elle mélange les poids correspondants selon un ratio fixe et constitue une première tentative raisonnable, mais tend à diluer les points forts distincts de chaque modèle source à mesure que davantage de modèles sont mélangés ensemble.",
          "SLERP (interpolation linéaire sphérique) mélange deux modèles le long d'un chemin courbe dans l'espace des poids plutôt qu'en ligne droite, ce qui préserve généralement mieux le caractère de chaque modèle que la simple moyenne linéaire lors de la fusion de exactement deux modèles.",
          "TIES et DARE sont des méthodes plus sélectives qui tentent de résoudre les mises à jour de poids contradictoires entre modèles sources au lieu de les moyenner, ce qui préserve généralement mieux les points forts distincts de chaque modèle source lors de la fusion de plus de deux modèles à la fois.",
          'Le README de Mergekit liste 18 méthodes de fusion : linear, slerp, nuslerp, multislerp, karcher, task_arithmetic, ties, dare_linear, dare_ties, della, della_linear, breadcrumbs, breadcrumbs_ties, sce, model_stock, nearswap, arcee_fusion et passthrough. Passthrough empile des couches de modèles différents au lieu de les moyenner.',
        ],
        callouts: [
          { type: 'verdict', text: 'Fusion de exactement deux modèles — commencez par SLERP. À éviter si : vous avez besoin d\'un contrôle plus fin sur les poids conservés.' },
          { type: 'verdict', text: 'Fusion de trois modèles ou plus — utilisez TIES ou DARE. À éviter si : les modèles sources divergent fortement en comportement, car la résolution de conflits se dégrade avec trop de sources divergentes.' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Comparaison des alternatives à Mergekit',
        content: [
          '<strong>Mergekit convient le mieux aux fusions de poids complets ; PEFT convient mieux aux adaptateurs LoRA, et mergoo aux constructions de type mélange d\'experts.</strong> Choisissez selon ce que vous combinez, pas selon la popularité.',
          '<a href="https://github.com/huggingface/peft" class="text-primary hover:underline" rel="noopener">PEFT</a> (Apache-2.0) : fusionne des adaptateurs LoRA entraînés sur le même modèle de base avec sa méthode add_weighted_adapter, via une combinaison linéaire, SVD, TIES ou DARE. À utiliser si vous avez des adaptateurs plutôt que des poids entièrement affinés.',
          '<a href="https://github.com/Leeroo-AI/mergoo" class="text-primary hover:underline" rel="noopener">mergoo</a> (LGPL-3.0) : combine plusieurs experts affinés en un modèle de type mélange d\'experts ou mélange d\'adaptateurs pour Llama, Mistral, Phi-3 et BERT, puis permet d\'entraîner le routeur. Son dernier commit sur GitHub date d\'août 2024 : vérifiez la compatibilité avec les versions actuelles des bibliothèques avant de vous y fier.',
          'LazyMergekit (expliqué dans ce <a href="https://towardsdatascience.com/merge-large-language-models-with-mergekit-2118fb392b54" class="text-primary hover:underline" rel="noopener">tutoriel de Towards Data Science</a>) et le Space Hugging Face <a href="https://huggingface.co/spaces/arcee-ai/mergekit-gui" class="text-primary hover:underline" rel="noopener">mergekit-gui</a> sont des interfaces construites sur Mergekit. Elles évitent la configuration, mais le moteur de fusion et la liste des méthodes sont les mêmes.',
        ],
        callouts: [
          { type: 'verdict', text: 'Fusion de versions affinées complètes d\'un même modèle de base — utilisez Mergekit. À éviter si : vous n\'avez que des adaptateurs LoRA ; utilisez plutôt PEFT.' },
          { type: 'verdict', text: 'Construction d\'un mélange d\'experts — utilisez mergekit-moe ou mergoo. À éviter si : vous voulez un seul modèle classique, car un mélange d\'experts est plus volumineux que n\'importe quelle source.' },
        ],
      },
      projectStatus: {
        id: 'project-status',
        title: 'État du projet Mergekit',
        content: [
          'Mergekit est développé par Arcee AI sous licence LGPL-3.0. Sa dernière mise à jour en amont date du 12 septembre 2026 (dernier commit de la branche principale) ; la version étiquetée la plus récente est la v0.1.4 du 31 octobre 2025. Source : <a href="https://github.com/arcee-ai/mergekit" class="text-primary hover:underline" rel="noopener">Mergekit sur GitHub</a>.',
          'L\'installation documentée est un git clone suivi de pip install -e . dans le dossier du dépôt. Une fusion s\'exécute avec la commande mergekit-yaml et un fichier de configuration YAML qui nomme les modèles sources et la méthode.',
          'Le dépôt fournit aussi mergekit-moe (combiner des modèles denses en mélange d\'experts), mergekit-extract-lora (extraire une approximation de faible rang compatible PEFT d\'un modèle affiné) et un mode de fusion évolutionnaire. Le README cite Llama, Mistral, GPT-NeoX et StableLM parmi les architectures prises en charge.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Matériel pour les fusions plus importantes',
        content: [
          "Une fusion uniquement CPU de deux modèles 7B est confortable sur une machine avec 32 Go de RAM. Fusionner des modèles plus grands (30B et plus) ou plusieurs sources à la fois peut dépasser la RAM habituelle d'un ordinateur de bureau, car Mergekit doit conserver chaque modèle source en mémoire pendant la fusion — louer une instance cloud à forte capacité de RAM uniquement pour l'étape de fusion est souvent moins cher que d'acheter de la RAM locale supplémentaire pour une tâche occasionnelle.",
          'Considérez les chiffres ci-dessus comme des valeurs de planification prudentes. Le README décrit un chargement paresseux des tenseurs et une approche out-of-core, et indique que les fusions peuvent s\'exécuter entièrement sur CPU ou être accélérées avec seulement 8 Go de VRAM (option --cuda) ; le pic de mémoire réel peut donc être inférieur à la taille cumulée des modèles sources.',
          '<em>Divulgation : Cet article contient des liens affiliés. Nous pouvons percevoir une commission si vous effectuez un achat via ces liens, sans coût supplémentaire pour vous.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.runpod.io/console/deploy',
            productName: 'RunPod On-Demand Cloud GPU/CPU Instances',
            productCategory: 'cloud-compute',
            priceRange: '$0.20-1/hr',
            label: 'Louer une instance cloud à forte RAM sur RunPod pour les fusions de modèles importantes',
          },
          {
            url: 'https://www.amazon.fr/s?k=kit+RAM+64Go+DDR5',
            productName: '64GB DDR5 RAM Kit',
            productCategory: 'memory',
            priceRange: '$180-260',
            label: 'Vérifier le prix du kit RAM 64 Go sur Amazon (pour des fusions locales répétées)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je fusionner des modèles avec des architectures différentes ?',
            a: "Non — les modèles à fusionner doivent généralement partager la même architecture de base et les mêmes formes de paramètres pour qu'une fusion au niveau des poids fonctionne correctement. Une fusion entre deux versions affinées construites sur des architectures de base différentes ne produira pas un modèle valide.",
          },
          {
            q: 'La fusion de modèles nécessite-t-elle un GPU ?',
            a: "Non — le calcul de fusion lui-même est lié au CPU et ne nécessite pas d'accélération GPU. Un GPU ne devient pertinent qu'ensuite, lorsque vous exécutez l'inférence sur le modèle fusionné ou que vous l'affinez davantage.",
          },
          {
            q: 'Un modèle fusionné est-il plus performant que chaque modèle source ?',
            a: "Cela dépend de la compatibilité des comportements des modèles sources. Une fusion bien choisie peut combiner les points forts de chaque source, mais la fusion de deux modèles entraînés de manière très différente peut aussi produire des résultats moins bons que chaque source seule — évaluez toujours le modèle fusionné sur vos propres tâches avant de vous y fier.",
          },
          {
            q: 'Mergekit est-il le seul outil pour fusionner des poids de modèles locaux ?',
            a: 'Non. PEFT fusionne des adaptateurs LoRA avec sa méthode add_weighted_adapter, et mergoo construit des mélanges d\'experts à partir de plusieurs modèles affinés. LazyMergekit et le Space mergekit-gui sont des interfaces au-dessus de Mergekit, pas des moteurs distincts. Voir la comparaison ci-dessus.',
          },
          {
            q: 'Quelle licence Mergekit utilise-t-il ?',
            a: 'LGPL-3.0. Un modèle fusionné peut aussi être soumis aux conditions de licence de chaque modèle source ; vérifiez-les avant de publier ou de vendre le résultat. Il s\'agit d\'informations générales, pas d\'un avis juridique.',
          },
          {
            q: 'Combien de méthodes de fusion Mergekit prend-il en charge ?',
            a: 'Le README en liste 18, de linear et SLERP à TIES, DARE, DELLA, SCE, Model Stock et passthrough.',
          },
          {
            q: 'Puis-je fusionner des adaptateurs LoRA plutôt que des modèles complets ?',
            a: 'Oui. add_weighted_adapter de PEFT fusionne des adaptateurs LoRA entraînés sur le même modèle de base, avec des options linéaire, SVD, TIES et DARE. Mergekit travaille dans l\'autre sens avec mergekit-extract-lora, qui extrait un adaptateur de faible rang d\'un modèle affiné.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware Extension',
    heroImage: '/images/best-model-merging-tool-mergekit-overview-hero-ja.webp',
    title: 'ローカルモデルの重みをマージするMergekitと代替ツール',
    seoTitle: 'モデルマージツール2026:Mergekitと代替ツール比較',
    metaDescription:
      'Mergekitは18のマージ手法(SLERP、TIES、DARE)でローカルモデルの重みをCPU上でマージします。PEFT・mergooとの比較、必要RAM、ライセンスも解説。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    last_full_refresh: '2026-10-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: '追加のトレーニングなしで複数のファインチューニング済みモデルを1つに組み合わせたい開発者',
    affiliateDisclosure: true,
    siblingBites: ['lora-vs-full-fine-tuning', 'fine-tuning-7b-model-locally-hardware'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Mergekitは、ローカルモデルの重みをマージするための最もよく知られたオープンソースツールキット(GitHubスター7,000以上)で、線形、SLERP、TIESなど18のマージ手法をGPUトレーニングなしでサポートします。</strong>ダウンロードした重みファイルに対して直接動作するため、ファインチューニングと比べて控えめなハードウェアでも扱いやすくなっています。主なコストはGPUの計算能力ではなく、マージ対象のモデルを保持するのに十分なシステムRAMです。',
    toc: [
      { label: 'ベストピック:Mergekit', anchor: '#best-pick' },
      { label: 'モデルマージの仕組み', anchor: '#how-it-works' },
      { label: 'マージ手法の比較', anchor: '#merge-methods' },
      { label: 'Mergekitの代替ツール比較', anchor: '#alternatives' },
      { label: 'Mergekitのプロジェクト状況', anchor: '#project-status' },
      { label: 'より大きなマージ向けのハードウェア', anchor: '#hardware' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'ローカルモデルの重みをマージする最良のツールは?',
        answer:
          'Mergekitがこの用途で最もよく知られたオープンソースツールです。線形平均、SLERP、TIESといった手法を使って互換性のあるモデルの重みファイルをマージし、GPUトレーニングのステップは一切ありません。マージ自体はCPU上で実行でき、ファインチューニングに必要な時間のごく一部で完了します。',
        bullets: [
          'Mergekitは複数のマージ手法をサポートしており、それぞれブレンドと各モデルの強みの保持の間で異なるトレードオフがあります。',
          'マージ自体にGPUトレーニングは不要で、結合するモデルの重みファイルを保持できるだけのRAMがあれば十分です。',
          'マージするモデルは正しく結合するために同じベースアーキテクチャとパラメータ形状を共有している必要があります。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mergekitは互換性のあるローカルモデルの重みをマージするための標準的なオープンソースツールです',
          'マージにはGPUトレーニングのステップは不要で、重みファイルを保持できるRAMさえあれば十分です',
          '線形とSLERP手法はシンプルな出発点であり、TIESとDAREは各モデルの強みをより良く保持します',
          'マージするモデルは同じベースアーキテクチャとパラメータ形状を共有している必要があります',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Mergekitは、GPUトレーニングなしでローカルモデルの重みを結合できる18のマージ手法を備えたオープンソースツールキットです。' },
          { type: 'plain-terms', text: '簡単に言うと:mergekitは2つ以上の互換性のあるモデルを、一からの再トレーニングなしに、新しい1つのモデルファイルへとブレンドします。' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストピック:Mergekit',
        content: [
          '<strong>Mergekitは、オープンソースであり、最も幅広いマージ手法をサポートし、GPUトレーニングのステップを必要としない(マージ中にソースモデルをメモリに保持できるだけのシステムRAMがあれば十分)ため、ローカルモデルの重みをマージするための標準的な選択肢です。</strong>そのため、トレーニング可能なGPUを必要とするフルファインチューニングとは異なり、控えめなデスクトップやノートパソコンでも扱うことができます。',
          '次の場合にMergekitを使ってください:同じベースモデルの2つのファインチューンの挙動を1つに組み合わせたい場合、フルファインチューニングの計算予算がない場合、再トレーニングせずに複数のマージ比率を素早く試したい場合。次の場合は避けてください:組み合わせたいモデルが異なるベースアーキテクチャやパラメータ数を持つ場合。重みレベルのマージには一致する形状が必要です。',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'モデルマージの仕組み',
        content: [
          'モデルマージは、同じベースアーキテクチャを共有する2つ以上のモデルの重みを、追加のトレーニングではなく数学的なマージ手法を使って、単一の新しい重みセットへと結合します。マージ中には勾配計算や誤差逆伝播が行われないため、フルファインチューニングが必要とする数時間から数日ではなく、CPU上で数分で処理が完了します。',
          '出力はソースモデルと同じサイズの単一の新しいモデルファイルであり、アダプターや複数ソースをラップしたものではありません。マージ後、結果は推論時に通常の単一モデルとして動作し、複数ソースを組み合わせたことによる追加のレイテンシはありません。',
        ],
      },
      mergeMethods: {
        id: 'merge-methods',
        title: 'マージ手法の比較',
        content: [
          '線形平均は最もシンプルな手法です。対応する重みを固定比率でブレンドし、最初の試みとしては妥当ですが、より多くのモデルをブレンドするほど各ソースモデルの独自の強みが薄まる傾向があります。',
          'SLERP(球面線形補間)は、直線ではなく重み空間内の曲線経路に沿って2つのモデルをブレンドします。これは、ちょうど2つのモデルをマージする場合に、単純な線形平均よりも各モデルの特徴を一般的によく保持します。',
          'TIESとDAREは、平均化するのではなくソースモデル間の矛盾する重み更新を解決しようとする、より選択的な手法です。3つ以上のモデルを同時にマージする場合、各ソースモデルの独自の強みを一般的により良く保持します。',
          'MergekitのREADMEには18のマージ手法が記載されています:linear、slerp、nuslerp、multislerp、karcher、task_arithmetic、ties、dare_linear、dare_ties、della、della_linear、breadcrumbs、breadcrumbs_ties、sce、model_stock、nearswap、arcee_fusion、passthrough。passthroughは、異なるモデルの層を平均化せずに積み重ねます。',
        ],
        callouts: [
          { type: 'verdict', text: 'ちょうど2つのモデルをマージする場合はSLERPから始めてください。次の場合はスキップ:どの重みを引き継ぐかについてより細かい制御が必要な場合。' },
          { type: 'verdict', text: '3つ以上のモデルをマージする場合はTIESまたはDAREを使ってください。次の場合はスキップ:ソースモデルの挙動が大きく異なる場合、あまりに多くの相違するソースでは競合解決の精度が落ちるためです。' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Mergekitの代替ツール比較',
        content: [
          '<strong>完全な重みのマージにはMergekitが最適で、LoRAアダプターにはPEFT、Mixture-of-Expertsの構築にはmergooが向いています。</strong>人気ではなく、何を組み合わせるかで選んでください。',
          '<a href="https://github.com/huggingface/peft" class="text-primary hover:underline" rel="noopener">PEFT</a>(Apache-2.0):同じベースモデルで訓練されたLoRAアダプターを、add_weighted_adapterメソッドで線形、SVD、TIES、DAREの組み合わせによりマージします。完全にファインチューニングされた重みではなくアダプターがある場合に使います。',
          '<a href="https://github.com/Leeroo-AI/mergoo" class="text-primary hover:underline" rel="noopener">mergoo</a>(LGPL-3.0):複数のファインチューニング済みエキスパートを、Llama、Mistral、Phi-3、BERT向けのMixture-of-ExpertsまたはMixture-of-Adaptersモデルに結合し、その後ルーターを訓練できます。GitHub上の最後のコミットは2024年8月のため、頼る前に現行のライブラリバージョンとの互換性を確認してください。',
          'LazyMergekit(この<a href="https://towardsdatascience.com/merge-large-language-models-with-mergekit-2118fb392b54" class="text-primary hover:underline" rel="noopener">Towards Data Scienceのチュートリアル</a>で解説)と、Hugging Face Spaceの<a href="https://huggingface.co/spaces/arcee-ai/mergekit-gui" class="text-primary hover:underline" rel="noopener">mergekit-gui</a>は、Mergekitの上に構築されたフロントエンドです。セットアップの手間は省けますが、マージエンジンと手法の一覧は同じです。',
        ],
        callouts: [
          { type: 'verdict', text: '1つのベースモデルの完全なファインチューンをマージする場合はMergekitを使ってください。次の場合はスキップ:LoRAアダプターしかない場合は、代わりにPEFTを使ってください。' },
          { type: 'verdict', text: 'Mixture of Expertsを構築する場合はmergekit-moeまたはmergooを使ってください。次の場合はスキップ:Mixture-of-Expertsの結果はどのソースよりも大きくなるため、通常の単一モデルが必要な場合。' },
        ],
      },
      projectStatus: {
        id: 'project-status',
        title: 'Mergekitのプロジェクト状況',
        content: [
          'MergekitはArcee AIがLGPL-3.0ライセンスで開発しています。最後のアップストリーム更新は2026年9月12日(メインブランチの最新コミット)で、最新のタグ付きリリースは2025年10月31日のv0.1.4です。出典:<a href="https://github.com/arcee-ai/mergekit" class="text-primary hover:underline" rel="noopener">GitHubのMergekit</a>。',
          '文書化されているインストール方法は、git cloneの後、リポジトリフォルダでpip install -e . を実行することです。マージは、ソースモデルと手法を指定したYAML設定ファイルとmergekit-yamlコマンドで実行します。',
          'リポジトリには、mergekit-moe(密なモデルをMixture of Expertsに結合)、mergekit-extract-lora(ファインチューン済みモデルからPEFT互換の低ランク近似を抽出)、進化的マージモードも含まれています。READMEは、サポートするアーキテクチャとしてLlama、Mistral、GPT-NeoX、StableLMを挙げています。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'より大きなマージ向けのハードウェア',
        content: [
          '2つの7BモデルのCPUのみでのマージは、32GBのRAMを搭載したマシンで問題なく行えます。より大きなモデル(30B以上)や複数ソースの同時マージは典型的なデスクトップのRAMを超える場合があります。Mergekitはマージのためにソースモデルごとにメモリへ保持する必要があるためです。マージのステップだけのために高RAMのクラウドインスタンスをレンタルする方が、たまにしか行わない作業のために追加のローカルRAMを購入するよりも安く済むことがよくあります。',
          '上記の数値は保守的な計画値として扱ってください。READMEには、テンソルの遅延読み込みとアウトオブコア方式が記載されており、マージはCPUのみで実行することも、最小8GBのVRAMで高速化すること(--cudaフラグ)もできるとされています。そのため、実際のピークメモリはソースモデルの合計サイズより小さくなる場合があります。',
          '<em>開示:この記事にはアフィリエイトリンクが含まれています。これらのリンク経由で購入された場合、追加費用なしで当サイトが手数料を得ることがあります。</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.runpod.io/console/deploy',
            productName: 'RunPod On-Demand Cloud GPU/CPU Instances',
            productCategory: 'cloud-compute',
            priceRange: '$0.20-1/hr',
            label: '大規模なモデルマージ向けにRunPodで高RAMクラウドインスタンスをレンタルする',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=64GB+DDR5+RAM+キット',
            productName: '64GB DDR5 RAM Kit',
            productCategory: 'memory',
            priceRange: '$180-260',
            label: 'Amazonで64GB RAMキットの価格を確認する(繰り返しのローカルマージ向け)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '異なるアーキテクチャのモデルをマージできますか?',
            a: 'いいえ。重みレベルのマージが正しく機能するには、一般的にマージするモデルが同じベースアーキテクチャとパラメータ形状を共有している必要があります。異なるベースアーキテクチャで構築された2つのファインチューン間のマージは、有効なモデルを生成しません。',
          },
          {
            q: 'モデルのマージにGPUは必要ですか?',
            a: 'いいえ。マージの計算自体はCPUバウンドであり、GPUアクセラレーションを必要としません。GPUが関係してくるのはその後、マージ済みモデルで推論を実行したり、さらにファインチューニングを行ったりする場合です。',
          },
          {
            q: 'マージ済みモデルはどちらかのソースモデルより性能が良くなりますか?',
            a: 'ソースモデルの挙動がどれだけ互換性があるかによります。適切に選択されたマージは各ソースの強みを組み合わせられますが、非常に異なる方法で訓練された2つのモデルのマージは、どちらかのソース単体よりも悪い結果を生むこともあります。頼る前に必ず自分のタスクでマージ済みモデルを評価してください。',
          },
          {
            q: 'Mergekitはローカルモデルの重みをマージする唯一のツールですか?',
            a: 'いいえ。PEFTはadd_weighted_adapterメソッドでLoRAアダプターをマージし、mergooは複数のファインチューンからMixture-of-Expertsモデルを構築します。LazyMergekitとmergekit-gui Spaceは、独立したエンジンではなくMergekit上のフロントエンドです。上の比較を参照してください。',
          },
          {
            q: 'Mergekitのライセンスは何ですか?',
            a: 'LGPL-3.0です。マージ済みモデルは各ソースモデルのライセンス条件の対象にもなり得るため、結果を公開または販売する前に確認してください。これは一般的な情報であり、法的助言ではありません。',
          },
          {
            q: 'Mergekitはいくつのマージ手法をサポートしていますか?',
            a: 'READMEには18の手法が記載されており、linearやSLERPからTIES、DARE、DELLA、SCE、Model Stock、passthroughまであります。',
          },
          {
            q: '完全なモデルではなくLoRAアダプターをマージできますか?',
            a: 'はい。PEFTのadd_weighted_adapterは、同じベースモデルで訓練されたLoRAアダプターを、線形、SVD、TIES、DAREのオプションでマージします。Mergekitはmergekit-extract-loraで逆方向、つまりファインチューン済みモデルから低ランクアダプターを抽出します。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware Extension',
    heroImage: '/images/best-model-merging-tool-mergekit-overview-hero-zh.webp',
    title: 'Mergekit及合并本地模型权重的替代方案',
    seoTitle: '2026年模型合并工具:Mergekit与替代方案对比',
    metaDescription:
      'Mergekit可在CPU上用18种方法(SLERP、TIES、DARE)合并本地模型权重。对比PEFT与mergoo,并说明内存需求和许可证。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    last_full_refresh: '2026-10-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: '希望在无需额外训练的情况下将多个微调模型合并为一个的开发者',
    affiliateDisclosure: true,
    siblingBites: ['lora-vs-full-fine-tuning', 'fine-tuning-7b-model-locally-hardware'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Mergekit是合并本地模型权重最知名的开源工具包(GitHub星标7,000以上),支持线性、SLERP、TIES等18种合并方法,无需任何GPU训练步骤。</strong>它直接处理已下载的权重文件,因此与微调相比,在普通硬件上也能使用——主要成本是足以容纳待合并模型的系统内存,而不是GPU算力。',
    toc: [
      { label: '最佳选择:Mergekit', anchor: '#best-pick' },
      { label: '模型合并的工作原理', anchor: '#how-it-works' },
      { label: '合并方法对比', anchor: '#merge-methods' },
      { label: 'Mergekit替代方案对比', anchor: '#alternatives' },
      { label: 'Mergekit项目状态', anchor: '#project-status' },
      { label: '大型合并所需的硬件', anchor: '#hardware' },
      { label: '常见问题', anchor: '#faq' },
    ],
    quickAnswerTop: {
      zh: {
        question: '合并本地模型权重的最佳工具是什么?',
        answer:
          'Mergekit是这方面最知名的开源工具。它使用线性平均、SLERP或TIES等方法合并兼容的模型权重文件,无需任何GPU训练步骤——合并本身可在CPU上运行,耗时只是微调的一小部分。',
        bullets: [
          'Mergekit支持多种合并方法,每种方法在混合效果与保留各模型独立优势之间有不同的权衡。',
          '合并本身不需要GPU训练——只需要足够的内存来容纳待合并的权重文件。',
          '待合并的模型必须具有相同的基础架构和参数形状才能正确合并。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mergekit是合并兼容本地模型权重的标准开源工具',
          '合并不需要GPU训练步骤,只需要足够的内存来容纳权重文件',
          '线性和SLERP方法是简单的起点;TIES和DARE能更好地保留各模型的独立优势',
          '待合并的模型必须具有相同的基础架构和参数形状',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Mergekit是一个开源工具包,提供18种合并方法,无需GPU训练步骤即可组合本地模型权重。' },
          { type: 'plain-terms', text: '简单来说:mergekit将两个或多个兼容的模型混合成一个新的模型文件,而无需从头重新训练任何内容。' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择:Mergekit',
        content: [
          '<strong>Mergekit是合并本地模型权重的标准选择,因为它是开源的,支持最广泛的合并方法,并且不需要GPU训练步骤——只需要足够的系统内存,在合并过程中将源模型保存在内存中即可。</strong>这使它能在普通的台式机或笔记本电脑上使用,而完整微调则需要具备训练能力的GPU。',
          '在以下情况下使用Mergekit:你想将同一基础模型的两个微调版本的行为合并为一个;你没有足够的算力预算进行完整微调;或者你想快速试验多种合并比例而无需重新训练。在以下情况下避免使用Mergekit:你想合并的模型具有不同的基础架构或参数数量——权重层面的合并需要匹配的形状。',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: '模型合并的工作原理',
        content: [
          '模型合并使用数学合并方法,而非额外的训练,将共享相同基础架构的两个或多个模型的权重组合成一组新的权重。由于合并过程中不进行梯度计算或反向传播,该过程在CPU上只需几分钟即可完成,而完整微调则需要数小时甚至数天。',
          '输出是一个与源模型大小相同的新模型文件——不是适配器,也不是包装多个来源的封装层。合并完成后,结果在推理时表现为一个普通模型,不会因组合多个来源而产生额外延迟。',
        ],
      },
      mergeMethods: {
        id: 'merge-methods',
        title: '合并方法对比',
        content: [
          '线性平均是最简单的方法——它按固定比例混合对应的权重,作为初步尝试是合理的,但随着混合的模型越来越多,往往会稀释每个源模型的独特优势。',
          'SLERP(球面线性插值)沿权重空间中的曲线路径而非直线来混合两个模型,在恰好合并两个模型时,通常比简单的线性平均更能保留每个模型的特性。',
          'TIES和DARE是更具选择性的方法,它们尝试解决源模型之间冲突的权重更新,而不是对其取平均,这在同时合并两个以上模型时,通常能更好地保留每个源模型的独特优势。',
          'Mergekit的README列出了18种合并方法:linear、slerp、nuslerp、multislerp、karcher、task_arithmetic、ties、dare_linear、dare_ties、della、della_linear、breadcrumbs、breadcrumbs_ties、sce、model_stock、nearswap、arcee_fusion和passthrough。passthrough是把不同模型的层堆叠起来,而不是取平均。',
        ],
        callouts: [
          { type: 'verdict', text: '恰好合并两个模型时——从SLERP开始。跳过条件:你需要对哪些权重被保留有更精细的控制。' },
          { type: 'verdict', text: '合并三个或更多模型时——使用TIES或DARE。跳过条件:源模型在行为上差异很大,因为过多分歧的来源会降低冲突解决的效果。' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Mergekit替代方案对比',
        content: [
          '<strong>Mergekit最适合完整权重的合并;PEFT更适合LoRA适配器,mergoo更适合构建混合专家模型。</strong>请根据要组合的对象来选择,而不是看流行程度。',
          '<a href="https://github.com/huggingface/peft" class="text-primary hover:underline" rel="noopener">PEFT</a>(Apache-2.0):用add_weighted_adapter方法合并基于同一基础模型训练的LoRA适配器,支持线性、SVD、TIES或DARE组合。当你手上是适配器而不是完整微调权重时使用。',
          '<a href="https://github.com/Leeroo-AI/mergoo" class="text-primary hover:underline" rel="noopener">mergoo</a>(LGPL-3.0):把多个微调后的专家组合成适用于Llama、Mistral、Phi-3和BERT的混合专家或混合适配器模型,之后还可训练路由器。它在GitHub上的最后一次提交是2024年8月,因此在依赖它之前,请先确认与当前库版本的兼容性。',
          'LazyMergekit(见这篇<a href="https://towardsdatascience.com/merge-large-language-models-with-mergekit-2118fb392b54" class="text-primary hover:underline" rel="noopener">Towards Data Science教程</a>)和Hugging Face Space <a href="https://huggingface.co/spaces/arcee-ai/mergekit-gui" class="text-primary hover:underline" rel="noopener">mergekit-gui</a>都是基于Mergekit的前端。它们省去了环境搭建,但合并引擎和方法列表是相同的。',
        ],
        callouts: [
          { type: 'verdict', text: '合并同一基础模型的完整微调版本——使用Mergekit。以下情况请跳过:你只有LoRA适配器,请改用PEFT。' },
          { type: 'verdict', text: '构建混合专家模型——使用mergekit-moe或mergoo。以下情况请跳过:你需要单个普通模型,因为混合专家的结果比任何单个源模型都大。' },
        ],
      },
      projectStatus: {
        id: 'project-status',
        title: 'Mergekit项目状态',
        content: [
          'Mergekit由Arcee AI以LGPL-3.0许可证开发。其上游最近一次更新是2026年9月12日(主分支最新提交);最新的带标签发布版本是2025年10月31日的v0.1.4。来源:<a href="https://github.com/arcee-ai/mergekit" class="text-primary hover:underline" rel="noopener">GitHub上的Mergekit</a>。',
          '文档中的安装方式是先git clone,再在仓库目录中运行pip install -e .。合并使用mergekit-yaml命令和一个指明源模型与方法的YAML配置文件来运行。',
          '该仓库还提供mergekit-moe(把稠密模型组合成混合专家模型)、mergekit-extract-lora(从微调模型中提取兼容PEFT的低秩近似)以及进化式合并模式。README在支持的架构中列出了Llama、Mistral、GPT-NeoX和StableLM。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '大型合并所需的硬件',
        content: [
          '在拥有32GB内存的机器上,仅用CPU合并两个7B模型是轻松可行的。合并更大的模型(30B以上)或同时合并多个来源可能会超出典型桌面的内存容量,因为Mergekit在合并过程中需要将每个源模型保留在内存中——仅为合并步骤租用高内存云实例,通常比为偶尔的任务购买额外的本地内存更划算。',
          '请将上述数字视为保守的规划值。README介绍了张量延迟加载和out-of-core方式,并指出合并可完全在CPU上运行,也可用低至8 GB的显存加速(--cuda参数),因此实际峰值内存可能低于各源模型大小之和。',
          '<em>披露:本文包含联盟链接。如果你通过这些链接购买商品,我们可能会获得佣金,你无需为此支付额外费用。</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.runpod.io/console/deploy',
            productName: 'RunPod On-Demand Cloud GPU/CPU Instances',
            productCategory: 'cloud-compute',
            priceRange: '$0.20-1/hr',
            label: '在RunPod上为大型模型合并租用高内存云实例',
          },
          {
            url: 'https://www.amazon.com/s?k=64gb+ddr5+ram+kit',
            productName: '64GB DDR5 RAM Kit',
            productCategory: 'memory',
            priceRange: '$180-260',
            label: '在Amazon查看64GB内存套装的价格(适用于重复的本地合并)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '我可以合并不同架构的模型吗?',
            a: '不可以——待合并的模型通常需要具有相同的基础架构和参数形状,权重层面的合并才能正确进行。基于不同基础架构构建的两个微调模型之间的合并不会产生有效的模型。',
          },
          {
            q: '合并模型需要GPU吗?',
            a: '不需要——合并计算本身是CPU密集型的,不需要GPU加速。GPU只有在之后才变得相关,即当你对合并后的模型进行推理或进一步微调时。',
          },
          {
            q: '合并后的模型性能会优于任一源模型吗?',
            a: '这取决于源模型行为的兼容程度。精心选择的合并可以结合各源模型的优势,但两个训练方式差异很大的模型合并后,也可能产生比任一单独源模型更差的结果——在依赖合并模型之前,务必在你自己的任务上进行评估。',
          },
          {
            q: 'Mergekit是合并本地模型权重的唯一工具吗?',
            a: '不是。PEFT用add_weighted_adapter方法合并LoRA适配器,mergoo则用多个微调模型构建混合专家模型。LazyMergekit和mergekit-gui Space是Mergekit之上的前端,而不是独立的引擎。参见上面的对比。',
          },
          {
            q: 'Mergekit使用什么许可证?',
            a: 'LGPL-3.0。合并后的模型还可能受各源模型许可条款的约束,发布或出售结果之前请逐一核对。以上为一般性信息,不构成法律建议。',
          },
          {
            q: 'Mergekit支持多少种合并方法?',
            a: 'README列出了18种,从linear和SLERP到TIES、DARE、DELLA、SCE、Model Stock和passthrough。',
          },
          {
            q: '我可以合并LoRA适配器而不是完整模型吗?',
            a: '可以。PEFT的add_weighted_adapter可合并基于同一基础模型训练的LoRA适配器,提供线性、SVD、TIES和DARE选项。Mergekit则通过mergekit-extract-lora反向操作,从微调模型中提取低秩适配器。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Hardware Extension',
    heroImage: '/images/best-model-merging-tool-mergekit-overview-hero-es.webp',
    title: 'Mergekit y alternativas para fusionar pesos de modelos locales',
    seoTitle: 'Fusión de modelos 2026: Mergekit y alternativas',
    metaDescription:
      'Mergekit fusiona pesos de modelos locales en CPU con 18 métodos (SLERP, TIES, DARE). Compáralo con PEFT y mergoo, con requisitos de RAM y licencia.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    last_full_refresh: '2026-10-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Desarrolladores que quieren combinar varios modelos afinados en uno solo sin entrenamiento adicional',
    affiliateDisclosure: true,
    siblingBites: ['lora-vs-full-fine-tuning', 'fine-tuning-7b-model-locally-hardware'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Mergekit es el kit de herramientas de código abierto más conocido para fusionar pesos de modelos locales (más de 7.000 estrellas en GitHub) y admite 18 métodos de fusión, como lineal, SLERP y TIES, sin ningún paso de entrenamiento en GPU.</strong> Opera directamente sobre archivos de pesos descargados, lo que lo hace accesible en hardware modesto en comparación con el fine-tuning: el coste principal es disponer de suficiente RAM del sistema para contener los modelos que se fusionan, no potencia de cálculo de GPU.',
    toc: [
      { label: 'Mejor opción: Mergekit', anchor: '#best-pick' },
      { label: 'Cómo funciona la fusión de modelos', anchor: '#how-it-works' },
      { label: 'Comparación de métodos de fusión', anchor: '#merge-methods' },
      { label: 'Comparativa de alternativas a Mergekit', anchor: '#alternatives' },
      { label: 'Estado del proyecto Mergekit', anchor: '#project-status' },
      { label: 'Hardware para fusiones más grandes', anchor: '#hardware' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor herramienta para fusionar pesos de modelos locales?',
        answer:
          'Mergekit es la herramienta de código abierto más conocida para esto. Fusiona archivos de pesos de modelos compatibles con métodos como promedio lineal, SLERP o TIES, sin ningún paso de entrenamiento en GPU: la fusión en sí puede ejecutarse en CPU y lleva una fracción del tiempo que requeriría el fine-tuning.',
        bullets: [
          'Mergekit admite varios métodos de fusión, cada uno con un equilibrio distinto entre mezclar y preservar las fortalezas individuales de cada modelo.',
          'No se requiere entrenamiento en GPU para la fusión en sí — solo suficiente RAM para contener los archivos de pesos que se combinan.',
          'Los modelos que se fusionan deben compartir la misma arquitectura base y las mismas formas de parámetros para combinarse correctamente.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mergekit es la herramienta de código abierto estándar para fusionar pesos de modelos locales compatibles',
          'La fusión no requiere un paso de entrenamiento en GPU, solo suficiente RAM para contener los archivos de pesos',
          'Los métodos lineal y SLERP son puntos de partida simples; TIES y DARE preservan mejor las fortalezas individuales de cada modelo',
          'Los modelos que se fusionan deben compartir la misma arquitectura base y las mismas formas de parámetros',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Mergekit es un kit de herramientas de código abierto con 18 métodos de fusión para combinar pesos de modelos locales sin un paso de entrenamiento en GPU.' },
          { type: 'plain-terms', text: 'En términos simples: mergekit mezcla dos o más modelos compatibles en un nuevo archivo de modelo, sin reentrenar nada desde cero.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor opción: Mergekit',
        content: [
          '<strong>Mergekit es la elección estándar para fusionar pesos de modelos locales porque es de código abierto, admite la gama más amplia de métodos de fusión y no requiere ningún paso de entrenamiento en GPU — solo suficiente RAM del sistema para mantener los modelos de origen en memoria durante la fusión.</strong> Esto lo hace accesible en un escritorio o portátil modesto, a diferencia del fine-tuning completo, que necesita una GPU capaz de entrenar.',
          'Usa Mergekit si: quieres combinar el comportamiento de dos ajustes finos del mismo modelo base en uno solo, no tienes el presupuesto de cómputo para un entrenamiento completo, o quieres experimentar rápidamente con varias proporciones de fusión sin reentrenar. Evita Mergekit si: los modelos que quieres combinar tienen arquitecturas base o cantidades de parámetros distintas — la fusión a nivel de pesos requiere formas coincidentes.',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Cómo funciona la fusión de modelos',
        content: [
          'La fusión de modelos combina los pesos de dos o más modelos que comparten la misma arquitectura base en un único conjunto de pesos nuevo, usando un método de fusión matemático en lugar de entrenamiento adicional. Como no hay cálculo de gradientes ni retropropagación durante una fusión, el proceso se ejecuta en la CPU en minutos en lugar de las horas o días que requeriría un entrenamiento completo.',
          'El resultado es un único archivo de modelo nuevo del mismo tamaño que los modelos de origen — no un adaptador ni un envoltorio alrededor de varias fuentes. Una vez fusionado, el resultado se comporta como un modelo ordinario en el momento de la inferencia, sin latencia adicional por combinar varias fuentes.',
        ],
      },
      mergeMethods: {
        id: 'merge-methods',
        title: 'Comparación de métodos de fusión',
        content: [
          'El promedio lineal es el método más simple — mezcla los pesos correspondientes según una proporción fija y funciona como un primer intento razonable, pero tiende a diluir las fortalezas distintivas de cada modelo de origen a medida que se mezclan más modelos.',
          'SLERP (interpolación lineal esférica) mezcla dos modelos a lo largo de una trayectoria curva en el espacio de pesos en lugar de una línea recta, lo que generalmente preserva más el carácter de cada modelo que el promedio lineal simple al fusionar exactamente dos modelos.',
          'TIES y DARE son métodos más selectivos que intentan resolver actualizaciones de pesos conflictivas entre modelos de origen en lugar de promediarlas, lo que generalmente preserva mejor las fortalezas distintivas de cada modelo de origen al fusionar más de dos modelos a la vez.',
          'El README de Mergekit enumera 18 métodos de fusión: linear, slerp, nuslerp, multislerp, karcher, task_arithmetic, ties, dare_linear, dare_ties, della, della_linear, breadcrumbs, breadcrumbs_ties, sce, model_stock, nearswap, arcee_fusion y passthrough. Passthrough apila capas de distintos modelos en lugar de promediarlas.',
        ],
        callouts: [
          { type: 'verdict', text: 'Fusionar exactamente dos modelos — empieza con SLERP. Sáltalo si: necesitas un control más fino sobre qué pesos se conservan.' },
          { type: 'verdict', text: 'Fusionar tres o más modelos — usa TIES o DARE. Sáltalo si: los modelos de origen difieren mucho en su comportamiento, ya que la resolución de conflictos se degrada con demasiadas fuentes divergentes.' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Comparativa de alternativas a Mergekit',
        content: [
          '<strong>Mergekit es la mejor opción para fusiones de pesos completos; PEFT encaja mejor con adaptadores LoRA y mergoo con la construcción de mezclas de expertos.</strong> Elige según lo que vas a combinar, no según la popularidad.',
          '<a href="https://github.com/huggingface/peft" class="text-primary hover:underline" rel="noopener">PEFT</a> (Apache-2.0): fusiona adaptadores LoRA entrenados sobre el mismo modelo base con su método add_weighted_adapter, mediante combinación lineal, SVD, TIES o DARE. Úsalo cuando tengas adaptadores en lugar de pesos completamente ajustados.',
          '<a href="https://github.com/Leeroo-AI/mergoo" class="text-primary hover:underline" rel="noopener">mergoo</a> (LGPL-3.0): combina varios expertos ajustados en un modelo de mezcla de expertos o mezcla de adaptadores para Llama, Mistral, Phi-3 y BERT, y luego permite entrenar el enrutador. Su último commit en GitHub es de agosto de 2024, así que comprueba la compatibilidad con las versiones actuales de las bibliotecas antes de depender de él.',
          'LazyMergekit (explicado en este <a href="https://towardsdatascience.com/merge-large-language-models-with-mergekit-2118fb392b54" class="text-primary hover:underline" rel="noopener">tutorial de Towards Data Science</a>) y el Space de Hugging Face <a href="https://huggingface.co/spaces/arcee-ai/mergekit-gui" class="text-primary hover:underline" rel="noopener">mergekit-gui</a> son interfaces construidas sobre Mergekit. Ahorran configuración, pero el motor de fusión y la lista de métodos son los mismos.',
        ],
        callouts: [
          { type: 'verdict', text: 'Fusión de versiones ajustadas completas de un mismo modelo base: usa Mergekit. Omítelo si: solo tienes adaptadores LoRA; usa PEFT en su lugar.' },
          { type: 'verdict', text: 'Construcción de una mezcla de expertos: usa mergekit-moe o mergoo. Omítelo si: necesitas un único modelo normal, ya que una mezcla de expertos es más grande que cualquiera de sus orígenes.' },
        ],
      },
      projectStatus: {
        id: 'project-status',
        title: 'Estado del proyecto Mergekit',
        content: [
          'Mergekit lo desarrolla Arcee AI bajo la licencia LGPL-3.0. Su última actualización upstream fue el 12 de septiembre de 2026 (último commit de la rama principal); la versión etiquetada más reciente es la v0.1.4 del 31 de octubre de 2025. Fuente: <a href="https://github.com/arcee-ai/mergekit" class="text-primary hover:underline" rel="noopener">Mergekit en GitHub</a>.',
          'La instalación documentada es un git clone seguido de pip install -e . dentro de la carpeta del repositorio. Una fusión se ejecuta con el comando mergekit-yaml y un archivo de configuración YAML que nombra los modelos de origen y el método.',
          'El repositorio incluye además mergekit-moe (combinar modelos densos en una mezcla de expertos), mergekit-extract-lora (extraer una aproximación de bajo rango compatible con PEFT de un modelo ajustado) y un modo de fusión evolutiva. El README cita Llama, Mistral, GPT-NeoX y StableLM entre las arquitecturas admitidas.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware para fusiones más grandes',
        content: [
          'Una fusión solo con CPU de dos modelos de 7B es cómoda en una máquina con 32 GB de RAM. Fusionar modelos más grandes (30B o más) o varias fuentes a la vez puede superar la RAM típica de un escritorio, ya que Mergekit necesita mantener cada modelo de origen en memoria durante la fusión — alquilar una instancia en la nube con mucha RAM solo para el paso de fusión suele ser más barato que comprar RAM local adicional para una tarea ocasional.',
          'Toma las cifras anteriores como valores de planificación prudentes. El README describe una carga perezosa de tensores y un enfoque out-of-core, e indica que las fusiones pueden ejecutarse por completo en CPU o acelerarse con tan solo 8 GB de VRAM (opción --cuda), por lo que el pico real de memoria puede ser inferior al tamaño combinado de los modelos de origen.',
          '<em>Divulgación: Este artículo contiene enlaces de afiliados. Podemos ganar una comisión si compras a través de estos enlaces, sin costo adicional para ti.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.runpod.io/console/deploy',
            productName: 'RunPod On-Demand Cloud GPU/CPU Instances',
            productCategory: 'cloud-compute',
            priceRange: '$0.20-1/hr',
            label: 'Alquilar una instancia en la nube con mucha RAM en RunPod para fusiones de modelos grandes',
          },
          {
            url: 'https://www.amazon.com/s?k=64gb+ddr5+ram+kit',
            productName: '64GB DDR5 RAM Kit',
            productCategory: 'memory',
            priceRange: '$180-260',
            label: 'Consultar el precio del kit de RAM de 64GB en Amazon (para fusiones locales repetidas)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo fusionar modelos con arquitecturas diferentes?',
            a: 'No — los modelos que se fusionan generalmente deben compartir la misma arquitectura base y las mismas formas de parámetros para que una fusión a nivel de pesos funcione correctamente. Una fusión entre dos ajustes finos construidos sobre arquitecturas base distintas no producirá un modelo válido.',
          },
          {
            q: '¿La fusión de modelos requiere una GPU?',
            a: 'No — el cálculo de la fusión en sí depende de la CPU y no requiere aceleración por GPU. Una GPU solo se vuelve relevante después, cuando ejecutas inferencia sobre el modelo fusionado o lo afinas aún más.',
          },
          {
            q: '¿Un modelo fusionado rinde mejor que cualquiera de los modelos de origen?',
            a: 'Depende de qué tan compatibles sean los comportamientos de los modelos de origen. Una fusión bien elegida puede combinar las fortalezas de cada fuente, pero la fusión de dos modelos entrenados de forma muy distinta también puede producir resultados peores que cualquiera de las fuentes por separado — evalúa siempre el modelo fusionado en tus propias tareas antes de confiar en él.',
          },
          {
            q: '¿Es Mergekit la única herramienta para fusionar pesos de modelos locales?',
            a: 'No. PEFT fusiona adaptadores LoRA con su método add_weighted_adapter, y mergoo construye modelos de mezcla de expertos a partir de varios modelos ajustados. LazyMergekit y el Space mergekit-gui son interfaces sobre Mergekit, no motores independientes. Consulta la comparativa anterior.',
          },
          {
            q: '¿Qué licencia usa Mergekit?',
            a: 'LGPL-3.0. Un modelo fusionado también puede estar sujeto a los términos de licencia de cada modelo de origen, así que revísalos antes de publicar o vender el resultado. Es información general, no asesoramiento legal.',
          },
          {
            q: '¿Cuántos métodos de fusión admite Mergekit?',
            a: 'El README enumera 18, desde linear y SLERP hasta TIES, DARE, DELLA, SCE, Model Stock y passthrough.',
          },
          {
            q: '¿Puedo fusionar adaptadores LoRA en lugar de modelos completos?',
            a: 'Sí. add_weighted_adapter de PEFT fusiona adaptadores LoRA entrenados sobre el mismo modelo base, con opciones lineal, SVD, TIES y DARE. Mergekit trabaja en sentido contrario con mergekit-extract-lora, que extrae un adaptador de bajo rango de un modelo ajustado.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Hardware Extension',
    heroImage: '/images/best-model-merging-tool-mergekit-overview-hero-pt.webp',
    title: 'Mergekit e alternativas para fundir pesos de modelos locais',
    seoTitle: 'Fusão de modelos 2026: Mergekit e alternativas',
    metaDescription:
      'O Mergekit funde pesos de modelos locais na CPU com 18 métodos (SLERP, TIES, DARE). Compare com PEFT e mergoo, veja requisitos de RAM e licença.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    last_full_refresh: '2026-10-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Desenvolvedores que querem combinar vários modelos ajustados (fine-tuned) em um só, sem treinamento adicional',
    affiliateDisclosure: true,
    siblingBites: ['lora-vs-full-fine-tuning', 'fine-tuning-7b-model-locally-hardware'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>O Mergekit é o kit de ferramentas de código aberto mais conhecido para fundir pesos de modelos locais (mais de 7.000 estrelas no GitHub) e oferece 18 métodos de fusão, como linear, SLERP e TIES, sem nenhuma etapa de treinamento em GPU.</strong> Ele opera diretamente sobre arquivos de pesos baixados, o que o torna acessível em hardware modesto em comparação com o fine-tuning — o custo principal é ter RAM de sistema suficiente para conter os modelos que estão sendo fundidos, não poder de computação de GPU.',
    toc: [
      { label: 'Melhor escolha: Mergekit', anchor: '#best-pick' },
      { label: 'Como funciona a fusão de modelos', anchor: '#how-it-works' },
      { label: 'Comparação dos métodos de fusão', anchor: '#merge-methods' },
      { label: 'Comparação de alternativas ao Mergekit', anchor: '#alternatives' },
      { label: 'Status do projeto Mergekit', anchor: '#project-status' },
      { label: 'Hardware para fusões maiores', anchor: '#hardware' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Qual é a melhor ferramenta para fundir pesos de modelos locais?',
        answer:
          'O Mergekit é a ferramenta de código aberto mais conhecida para isso. Ele funde arquivos de pesos de modelos compatíveis usando métodos como média linear, SLERP ou TIES, sem nenhuma etapa de treinamento em GPU — a fusão em si pode rodar na CPU e leva uma fração do tempo que o fine-tuning exigiria.',
        bullets: [
          'O Mergekit suporta vários métodos de fusão, cada um com um equilíbrio diferente entre mesclagem e preservação das forças individuais de cada modelo.',
          'Nenhum treinamento em GPU é necessário para a fusão em si — apenas RAM suficiente para conter os arquivos de pesos sendo combinados.',
          'Os modelos fundidos precisam compartilhar a mesma arquitetura base e os mesmos formatos de parâmetros para se combinarem corretamente.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O Mergekit é a ferramenta open source padrão para fundir pesos de modelos locais compatíveis',
          'A fusão não exige uma etapa de treinamento em GPU, apenas RAM suficiente para conter os arquivos de pesos',
          'Os métodos linear e SLERP são pontos de partida simples; TIES e DARE preservam melhor as forças individuais de cada modelo',
          'Os modelos fundidos precisam compartilhar a mesma arquitetura base e os mesmos formatos de parâmetros',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Mergekit é um kit de ferramentas de código aberto com 18 métodos de fusão para combinar pesos de modelos locais sem uma etapa de treinamento em GPU.' },
          { type: 'plain-terms', text: 'Em termos simples: o mergekit mistura dois ou mais modelos compatíveis em um novo arquivo de modelo, sem retreinar nada do zero.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor escolha: Mergekit',
        content: [
          '<strong>O Mergekit é a escolha padrão para fundir pesos de modelos locais porque é open source, suporta a mais ampla gama de métodos de fusão e não exige nenhuma etapa de treinamento em GPU — apenas RAM de sistema suficiente para manter os modelos de origem na memória durante a fusão.</strong> Isso o torna acessível em um desktop ou notebook modesto, ao contrário do fine-tuning completo, que exige uma GPU capaz de treinar.',
          'Use o Mergekit se: você quer combinar o comportamento de dois fine-tunes do mesmo modelo base em um só, não tem orçamento computacional para um treinamento completo, ou quer experimentar rapidamente várias proporções de fusão sem retreinar. Evite o Mergekit se: os modelos que você quer combinar têm arquiteturas base ou números de parâmetros diferentes — a fusão em nível de pesos exige formatos correspondentes.',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Como funciona a fusão de modelos',
        content: [
          'A fusão de modelos combina os pesos de dois ou mais modelos que compartilham a mesma arquitetura base em um único conjunto novo de pesos, usando um método matemático de fusão em vez de treinamento adicional. Como nenhum cálculo de gradiente ou retropropagação ocorre durante uma fusão, o processo roda na CPU em minutos, em vez das horas ou dias que um fine-tuning completo levaria.',
          'O resultado é um único arquivo de modelo novo do mesmo tamanho dos modelos de origem — não um adaptador nem um wrapper em torno de várias fontes. Uma vez fundido, o resultado se comporta como um modelo comum no momento da inferência, sem latência extra por combinar várias fontes.',
        ],
      },
      mergeMethods: {
        id: 'merge-methods',
        title: 'Comparação dos métodos de fusão',
        content: [
          'A média linear é o método mais simples — ela mescla os pesos correspondentes por uma proporção fixa e funciona como uma primeira tentativa razoável, mas tende a diluir as forças distintas de cada modelo de origem à medida que mais modelos são misturados.',
          'O SLERP (interpolação linear esférica) mescla dois modelos ao longo de um caminho curvo no espaço de pesos em vez de uma linha reta, o que geralmente preserva mais o caráter de cada modelo do que a média linear simples ao fundir exatamente dois modelos.',
          'TIES e DARE são métodos mais seletivos que tentam resolver atualizações de pesos conflitantes entre modelos de origem em vez de fazer a média entre elas, o que geralmente preserva melhor as forças distintas de cada modelo de origem ao fundir mais de dois modelos de uma vez.',
          'O README do Mergekit lista 18 métodos de fusão: linear, slerp, nuslerp, multislerp, karcher, task_arithmetic, ties, dare_linear, dare_ties, della, della_linear, breadcrumbs, breadcrumbs_ties, sce, model_stock, nearswap, arcee_fusion e passthrough. O passthrough empilha camadas de modelos diferentes em vez de fazer a média delas.',
        ],
        callouts: [
          { type: 'verdict', text: 'Fundindo exatamente dois modelos — comece com SLERP. Pule se: você precisa de controle mais fino sobre quais pesos são mantidos.' },
          { type: 'verdict', text: 'Fundindo três ou mais modelos — use TIES ou DARE. Pule se: os modelos de origem divergem muito em comportamento, já que a resolução de conflitos se degrada com muitas fontes divergentes.' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Comparação de alternativas ao Mergekit',
        content: [
          '<strong>O Mergekit é a melhor opção para fusões de pesos completos; o PEFT combina mais com adaptadores LoRA e o mergoo com a construção de misturas de especialistas.</strong> Escolha pelo que você vai combinar, não pela popularidade.',
          '<a href="https://github.com/huggingface/peft" class="text-primary hover:underline" rel="noopener">PEFT</a> (Apache-2.0): funde adaptadores LoRA treinados sobre o mesmo modelo base com o método add_weighted_adapter, usando combinação linear, SVD, TIES ou DARE. Use quando você tiver adaptadores em vez de pesos totalmente ajustados.',
          '<a href="https://github.com/Leeroo-AI/mergoo" class="text-primary hover:underline" rel="noopener">mergoo</a> (LGPL-3.0): combina vários especialistas ajustados em um modelo de mistura de especialistas ou mistura de adaptadores para Llama, Mistral, Phi-3 e BERT, e depois permite treinar o roteador. O último commit dele no GitHub é de agosto de 2024, então verifique a compatibilidade com as versões atuais das bibliotecas antes de depender dele.',
          'O LazyMergekit (explicado neste <a href="https://towardsdatascience.com/merge-large-language-models-with-mergekit-2118fb392b54" class="text-primary hover:underline" rel="noopener">tutorial do Towards Data Science</a>) e o Space do Hugging Face <a href="https://huggingface.co/spaces/arcee-ai/mergekit-gui" class="text-primary hover:underline" rel="noopener">mergekit-gui</a> são interfaces construídas sobre o Mergekit. Eles poupam a configuração, mas o motor de fusão e a lista de métodos são os mesmos.',
        ],
        callouts: [
          { type: 'verdict', text: 'Fusão de versões ajustadas completas de um mesmo modelo base — use o Mergekit. Pule se: você só tem adaptadores LoRA; use o PEFT.' },
          { type: 'verdict', text: 'Construção de uma mistura de especialistas — use mergekit-moe ou mergoo. Pule se: você precisa de um único modelo comum, pois uma mistura de especialistas é maior que qualquer uma das origens.' },
        ],
      },
      projectStatus: {
        id: 'project-status',
        title: 'Status do projeto Mergekit',
        content: [
          'O Mergekit é desenvolvido pela Arcee AI sob a licença LGPL-3.0. A última atualização upstream foi em 12 de setembro de 2026 (último commit da branch principal); a versão marcada mais recente é a v0.1.4, de 31 de outubro de 2025. Fonte: <a href="https://github.com/arcee-ai/mergekit" class="text-primary hover:underline" rel="noopener">Mergekit no GitHub</a>.',
          'A instalação documentada é um git clone seguido de pip install -e . dentro da pasta do repositório. Uma fusão roda com o comando mergekit-yaml e um arquivo de configuração YAML que nomeia os modelos de origem e o método.',
          'O repositório também inclui mergekit-moe (combinar modelos densos em uma mistura de especialistas), mergekit-extract-lora (extrair uma aproximação de baixo posto compatível com PEFT de um modelo ajustado) e um modo de fusão evolutiva. O README cita Llama, Mistral, GPT-NeoX e StableLM entre as arquiteturas suportadas.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware para fusões maiores',
        content: [
          'Uma fusão apenas com CPU de dois modelos de 7B é tranquila em uma máquina com 32 GB de RAM. Fundir modelos maiores (30B+) ou várias fontes de uma vez pode exceder a RAM típica de um desktop, já que o Mergekit precisa manter cada modelo de origem na memória durante a fusão — alugar uma instância na nuvem com RAM alta apenas para a etapa de fusão costuma ser mais barato do que comprar RAM local adicional para uma tarefa ocasional.',
          'Trate os números acima como valores de planejamento conservadores. O README descreve carregamento preguiçoso de tensores e uma abordagem out-of-core, e diz que as fusões podem rodar inteiramente na CPU ou ser aceleradas com apenas 8 GB de VRAM (opção --cuda); por isso, o pico real de memória pode ficar abaixo do tamanho combinado dos modelos de origem.',
          '<em>Divulgação: Este artigo contém links de afiliados. Podemos ganhar uma comissão se você comprar através desses links, sem custo adicional para você.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.runpod.io/console/deploy',
            productName: 'RunPod On-Demand Cloud GPU/CPU Instances',
            productCategory: 'cloud-compute',
            priceRange: '$0.20-1/hr',
            label: 'Alugar uma instância na nuvem com RAM alta no RunPod para fusões de modelos grandes',
          },
          {
            url: 'https://www.amazon.com/s?k=64gb+ddr5+ram+kit',
            productName: '64GB DDR5 RAM Kit',
            productCategory: 'memory',
            priceRange: '$180-260',
            label: 'Verificar o preço do kit de RAM de 64GB na Amazon (para fusões locais repetidas)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso fundir modelos com arquiteturas diferentes?',
            a: 'Não — os modelos fundidos geralmente precisam compartilhar a mesma arquitetura base e os mesmos formatos de parâmetros para que uma fusão em nível de pesos funcione corretamente. Uma fusão entre dois fine-tunes construídos sobre arquiteturas base diferentes não produzirá um modelo válido.',
          },
          {
            q: 'Fundir modelos exige uma GPU?',
            a: 'Não — o cálculo da fusão em si é limitado pela CPU e não exige aceleração por GPU. Uma GPU só se torna relevante depois, quando você executa inferência no modelo fundido ou o ajusta ainda mais.',
          },
          {
            q: 'Um modelo fundido tem desempenho melhor do que qualquer um dos modelos de origem?',
            a: 'Depende de quão compatíveis são os comportamentos dos modelos de origem. Uma fusão bem escolhida pode combinar forças de cada fonte, mas a fusão de dois modelos treinados de forma muito diferente também pode produzir resultados piores do que qualquer uma das fontes isoladamente — sempre avalie o modelo fundido nas suas próprias tarefas antes de confiar nele.',
          },
          {
            q: 'O Mergekit é a única ferramenta para fundir pesos de modelos locais?',
            a: 'Não. O PEFT funde adaptadores LoRA com o método add_weighted_adapter, e o mergoo constrói modelos de mistura de especialistas a partir de vários modelos ajustados. O LazyMergekit e o Space mergekit-gui são interfaces sobre o Mergekit, não motores independentes. Veja a comparação acima.',
          },
          {
            q: 'Qual licença o Mergekit usa?',
            a: 'LGPL-3.0. Um modelo fundido também pode estar sujeito aos termos de licença de cada modelo de origem, então confira-os antes de publicar ou vender o resultado. Isto é informação geral, não aconselhamento jurídico.',
          },
          {
            q: 'Quantos métodos de fusão o Mergekit suporta?',
            a: 'O README lista 18, de linear e SLERP até TIES, DARE, DELLA, SCE, Model Stock e passthrough.',
          },
          {
            q: 'Posso fundir adaptadores LoRA em vez de modelos completos?',
            a: 'Sim. O add_weighted_adapter do PEFT funde adaptadores LoRA treinados sobre o mesmo modelo base, com opções linear, SVD, TIES e DARE. O Mergekit trabalha no sentido contrário com o mergekit-extract-lora, que extrai um adaptador de baixo posto de um modelo ajustado.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Hardware Extension',
    heroImage: '/images/best-model-merging-tool-mergekit-overview-hero-ar.webp',
    title: 'Mergekit والبدائل لدمج أوزان النماذج المحلية',
    seoTitle: 'أفضل أداة لدمج النماذج 2026: Mergekit والبدائل',
    metaDescription:
      'يدمج Mergekit أوزان النماذج المحلية على المعالج بـ 18 طريقة (SLERP وTIES وDARE). قارنه مع PEFT وmergoo، مع متطلبات الذاكرة والترخيص.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    last_full_refresh: '2026-10-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'المطورون الذين يريدون دمج عدة نماذج مُهيّأة (fine-tuned) في نموذج واحد دون تدريب إضافي',
    affiliateDisclosure: true,
    siblingBites: ['lora-vs-full-fine-tuning', 'fine-tuning-7b-model-locally-hardware'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Mergekit هو أشهر مجموعة أدوات مفتوحة المصدر لدمج أوزان النماذج المحلية (أكثر من 7000 نجمة على GitHub)، ويدعم 18 طريقة دمج مثل الخطي وSLERP وTIES دون أي خطوة تدريب على وحدة معالجة الرسومات.</strong> يعمل مباشرة على ملفات الأوزان التي تم تنزيلها، مما يجعله متاحًا على أجهزة متواضعة مقارنة بالضبط الدقيق — فالتكلفة الرئيسية هي ذاكرة النظام الكافية لاحتواء النماذج المراد دمجها، وليس قدرة المعالجة الرسومية.',
    toc: [
      { label: 'الخيار الأفضل: Mergekit', anchor: '#best-pick' },
      { label: 'كيف يعمل دمج النماذج', anchor: '#how-it-works' },
      { label: 'مقارنة طرق الدمج', anchor: '#merge-methods' },
      { label: 'مقارنة بدائل Mergekit', anchor: '#alternatives' },
      { label: 'حالة مشروع Mergekit', anchor: '#project-status' },
      { label: 'العتاد اللازم لعمليات الدمج الأكبر', anchor: '#hardware' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'ما هي أفضل أداة لدمج أوزان النماذج المحلية؟',
        answer:
          'Mergekit هو أشهر أداة مفتوحة المصدر لهذا الغرض. يدمج ملفات أوزان النماذج المتوافقة بطرق مثل المتوسط الخطي أو SLERP أو TIES دون أي خطوة تدريب على وحدة معالجة الرسومات — ويمكن أن يعمل الدمج نفسه على المعالج ويستغرق جزءًا صغيرًا من الوقت الذي يحتاجه الضبط الدقيق.',
        bullets: [
          'تدعم Mergekit عدة طرق دمج، ولكل منها موازنة مختلفة بين المزج والحفاظ على نقاط القوة الفردية لكل نموذج.',
          'لا حاجة إلى تدريب GPU لعملية الدمج نفسها — يكفي وجود ذاكرة RAM كافية لاستيعاب ملفات الأوزان التي يتم دمجها.',
          'يجب أن تشترك النماذج التي يتم دمجها في نفس البنية الأساسية وأشكال المعلمات (parameters) لكي تُدمج بشكل صحيح.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mergekit هي الأداة القياسية مفتوحة المصدر لدمج أوزان النماذج المحلية المتوافقة',
          'الدمج لا يتطلب أي خطوة تدريب على GPU، فقط ذاكرة RAM كافية لاستيعاب ملفات الأوزان',
          'طريقتا الدمج الخطي وSLERP نقطتا انطلاق بسيطتان؛ بينما تحافظ TIES وDARE بشكل أفضل على نقاط القوة الفردية لكل نموذج',
          'يجب أن تشترك النماذج التي يتم دمجها في نفس البنية الأساسية وأشكال المعلمات',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Mergekit مجموعة أدوات مفتوحة المصدر بـ 18 طريقة دمج لجمع أوزان النماذج المحلية دون خطوة تدريب على وحدة معالجة الرسومات.' },
          { type: 'plain-terms', text: 'بعبارة بسيطة: تمزج mergekit نموذجين متوافقين أو أكثر في ملف نموذج جديد واحد، دون إعادة تدريب أي شيء من الصفر.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'الخيار الأفضل: Mergekit',
        content: [
          '<strong>Mergekit هو الخيار القياسي لدمج أوزان النماذج المحلية لأنه مفتوح المصدر، ويدعم أوسع نطاق من طرق الدمج، ولا يتطلب أي خطوة تدريب على GPU — يكفي فقط وجود ذاكرة RAM كافية على النظام للاحتفاظ بالنماذج المصدرية في الذاكرة أثناء الدمج.</strong> هذا يجعله قابلاً للاستخدام على جهاز مكتبي أو محمول متواضع، على عكس الـ fine-tuning الكامل الذي يتطلب GPU قادرة على التدريب.',
          'استخدم Mergekit إذا: أردت دمج سلوك نسختين مُهيّأتين (fine-tuned) من نفس النموذج الأساسي في واحد، أو لم تكن تملك ميزانية حوسبة كافية لتشغيل fine-tuning كامل، أو أردت تجربة عدة نسب دمج بسرعة دون إعادة التدريب. تجنّب Mergekit إذا: كانت النماذج التي تريد دمجها ذات بنيات أساسية أو أعداد معلمات مختلفة — فالدمج على مستوى الأوزان يتطلب تطابق الأشكال.',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'كيف يعمل دمج النماذج',
        content: [
          'يدمج دمج النماذج أوزان نموذجين أو أكثر يشتركان في نفس البنية الأساسية في مجموعة أوزان جديدة واحدة، باستخدام طريقة دمج رياضية بدلًا من تدريب إضافي. ونظرًا لعدم حدوث حساب للتدرجات (gradients) أو الانتشار العكسي (backpropagation) أثناء الدمج، تعمل العملية على المعالج المركزي في دقائق بدلًا من الساعات أو الأيام التي يتطلبها fine-tuning كامل.',
          'الناتج هو ملف نموذج جديد واحد بنفس حجم النماذج المصدرية — وليس محولًا (adapter) ولا غلافًا حول عدة مصادر. بعد الدمج، يتصرف الناتج كنموذج عادي واحد عند الاستدلال، دون أي زمن استجابة إضافي ناتج عن دمج عدة مصادر.',
        ],
      },
      mergeMethods: {
        id: 'merge-methods',
        title: 'مقارنة طرق الدمج',
        content: [
          'المتوسط الخطي هو الطريقة الأبسط — يمزج الأوزان المتناظرة بنسبة ثابتة ويُعد محاولة أولى معقولة، لكنه يميل إلى إضعاف نقاط القوة المميزة لكل نموذج مصدري كلما تم مزج المزيد من النماذج معًا.',
          'SLERP (الاستيفاء الخطي الكروي) يمزج نموذجين على طول مسار منحنٍ في فضاء الأوزان بدلًا من خط مستقيم، مما يحافظ بشكل عام على المزيد من طابع كل نموذج مقارنة بالمتوسط الخطي البسيط عند دمج نموذجين بالضبط.',
          'تُعد TIES وDARE طرقًا أكثر انتقائية تحاول حل تحديثات الأوزان المتضاربة بين النماذج المصدرية بدلًا من حساب متوسطها، مما يحافظ بشكل عام بشكل أفضل على نقاط القوة المميزة لكل نموذج مصدري عند دمج أكثر من نموذجين في وقت واحد.',
          'يسرد ملف README الخاص بـ Mergekit 18 طريقة دمج: linear وslerp وnuslerp وmultislerp وkarcher وtask_arithmetic وties وdare_linear وdare_ties وdella وdella_linear وbreadcrumbs وbreadcrumbs_ties وsce وmodel_stock وnearswap وarcee_fusion وpassthrough. تقوم طريقة passthrough بتكديس طبقات من نماذج مختلفة بدلًا من حساب متوسطها.',
        ],
        callouts: [
          { type: 'verdict', text: 'عند دمج نموذجين بالضبط — ابدأ بـ SLERP. تخطَّ هذا الخيار إذا: كنت بحاجة إلى تحكم أدق في الأوزان التي يتم ترحيلها.' },
          { type: 'verdict', text: 'عند دمج ثلاثة نماذج أو أكثر — استخدم TIES أو DARE. تخطَّ هذا الخيار إذا: تباعدت النماذج المصدرية بشكل كبير في سلوكها، لأن حل التعارضات يتراجع مع وجود عدد كبير جدًا من المصادر المتباينة.' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'مقارنة بدائل Mergekit',
        content: [
          '<strong>Mergekit هو الأنسب لدمج الأوزان الكاملة؛ أما PEFT فأنسب لمحوّلات LoRA، وmergoo لبناء نماذج خليط الخبراء.</strong> اختر بحسب ما تدمجه، لا بحسب الشعبية.',
          '<a href="https://github.com/huggingface/peft" class="text-primary hover:underline" rel="noopener">PEFT</a> (Apache-2.0): يدمج محوّلات LoRA المدرَّبة على النموذج الأساسي نفسه عبر الدالة add_weighted_adapter، باستخدام التركيب الخطي أو SVD أو TIES أو DARE. استخدمه عندما تملك محوّلات بدلًا من أوزان مضبوطة بالكامل.',
          '<a href="https://github.com/Leeroo-AI/mergoo" class="text-primary hover:underline" rel="noopener">mergoo</a> (LGPL-3.0): يجمع عدة خبراء مضبوطين في نموذج خليط خبراء أو خليط محوّلات لنماذج Llama وMistral وPhi-3 وBERT، ثم يتيح تدريب الموجِّه (router). آخر commit له على GitHub يعود إلى أغسطس 2024، لذا تحقق من التوافق مع إصدارات المكتبات الحالية قبل الاعتماد عليه.',
          'LazyMergekit (موضَّح في هذا <a href="https://towardsdatascience.com/merge-large-language-models-with-mergekit-2118fb392b54" class="text-primary hover:underline" rel="noopener">الشرح من Towards Data Science</a>) وفضاء Hugging Face <a href="https://huggingface.co/spaces/arcee-ai/mergekit-gui" class="text-primary hover:underline" rel="noopener">mergekit-gui</a> هما واجهتان مبنيتان على Mergekit. توفّران عناء الإعداد، لكن محرك الدمج وقائمة الطرق هما نفسهما.',
        ],
        callouts: [
          { type: 'verdict', text: 'دمج نسخ مضبوطة كاملة من نموذج أساسي واحد — استخدم Mergekit. تجاوزه إذا: كان لديك محوّلات LoRA فقط؛ فاستخدم PEFT بدلًا منه.' },
          { type: 'verdict', text: 'بناء خليط خبراء — استخدم mergekit-moe أو mergoo. تجاوزه إذا: كنت تحتاج نموذجًا واحدًا عاديًا، لأن ناتج خليط الخبراء أكبر من أي نموذج مصدر منفرد.' },
        ],
      },
      projectStatus: {
        id: 'project-status',
        title: 'حالة مشروع Mergekit',
        content: [
          'تطوّر Arcee AI مشروع Mergekit بموجب ترخيص LGPL-3.0. كان آخر تحديث في المشروع الأصلي بتاريخ 12 سبتمبر 2026 (أحدث commit في الفرع الرئيسي)؛ وأحدث إصدار موسوم هو v0.1.4 بتاريخ 31 أكتوبر 2025. المصدر: <a href="https://github.com/arcee-ai/mergekit" class="text-primary hover:underline" rel="noopener">Mergekit على GitHub</a>.',
          'التثبيت الموثَّق هو git clone متبوعًا بالأمر pip install -e . داخل مجلد المستودع. يُشغَّل الدمج بالأمر mergekit-yaml وملف إعداد YAML يحدد النماذج المصدر والطريقة.',
          'يتضمن المستودع أيضًا mergekit-moe (دمج نماذج كثيفة في خليط خبراء)، وmergekit-extract-lora (استخراج تقريب منخفض الرتبة متوافق مع PEFT من نموذج مضبوط)، ووضع دمج تطوري. ويذكر README من بين البنى المدعومة Llama وMistral وGPT-NeoX وStableLM.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'العتاد اللازم لعمليات الدمج الأكبر',
        content: [
          'الدمج القائم على المعالج المركزي فقط لنموذجين بحجم 7B مريح على جهاز يحتوي على 32 جيجابايت من الذاكرة العشوائية (RAM). دمج نماذج أكبر (30B فأكثر) أو عدة مصادر في آن واحد قد يتجاوز ذاكرة RAM المعتادة لجهاز مكتبي، لأن Mergekit يحتاج إلى الاحتفاظ بكل نموذج مصدري في الذاكرة أثناء الدمج — استئجار مثيل سحابي بذاكرة كبيرة لخطوة الدمج فقط غالبًا ما يكون أرخص من شراء ذاكرة RAM محلية إضافية لمهمة عرضية.',
          'تعامل مع الأرقام أعلاه على أنها قيم تخطيط متحفظة. يصف ملف README تحميلًا كسولًا للمصفوفات (tensors) ونهجًا خارج الذاكرة (out-of-core)، ويذكر أن عمليات الدمج يمكن أن تعمل بالكامل على المعالج أو أن تُسرَّع بذاكرة فيديو لا تقل عن 8 جيجابايت (الخيار --cuda)، لذا قد يكون الحد الأقصى الفعلي للذاكرة أقل من مجموع أحجام النماذج المصدر.',
          '<em>إفصاح: يحتوي هذا المقال على روابط تابعة (affiliate). قد نحصل على عمولة إذا اشتريت عبر هذه الروابط، دون أي تكلفة إضافية عليك.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.runpod.io/console/deploy',
            productName: 'RunPod On-Demand Cloud GPU/CPU Instances',
            productCategory: 'cloud-compute',
            priceRange: '$0.20-1/hr',
            label: 'استئجار مثيل سحابي بذاكرة كبيرة على RunPod لعمليات دمج النماذج الكبيرة',
          },
          {
            url: 'https://www.amazon.com/s?k=64gb+ddr5+ram+kit',
            productName: '64GB DDR5 RAM Kit',
            productCategory: 'memory',
            priceRange: '$180-260',
            label: 'تحقق من سعر عبوة ذاكرة 64GB على أمازون (لعمليات الدمج المحلية المتكررة)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني دمج نماذج ذات بنيات مختلفة؟',
            a: 'لا — يجب أن تشترك النماذج التي يتم دمجها عمومًا في نفس البنية الأساسية وأشكال المعلمات لكي يعمل الدمج على مستوى الأوزان بشكل صحيح. الدمج بين نسختين مُهيّأتين مبنيتين على بنيتين أساسيتين مختلفتين لن ينتج نموذجًا صالحًا.',
          },
          {
            q: 'هل يتطلب دمج النماذج وحدة معالجة رسومية (GPU)؟',
            a: 'لا — حساب الدمج نفسه يعتمد على المعالج المركزي (CPU) ولا يتطلب تسريعًا بواسطة GPU. لا تصبح GPU ذات صلة إلا لاحقًا، عند تشغيل الاستدلال على النموذج المدمج أو إجراء fine-tuning إضافي عليه.',
          },
          {
            q: 'هل يؤدي النموذج المدمج أداءً أفضل من أي من النماذج المصدرية؟',
            a: 'يعتمد ذلك على مدى توافق سلوك النماذج المصدرية. يمكن لدمج مُختار بعناية أن يجمع نقاط القوة من كل مصدر، لكن دمج نموذجين مدربين بطرق مختلفة تمامًا قد ينتج أيضًا نتائج أسوأ من أي من المصدرين بمفرده — قيّم دائمًا النموذج المدمج على مهامك الخاصة قبل الاعتماد عليه.',
          },
          {
            q: 'هل Mergekit هي الأداة الوحيدة لدمج أوزان النماذج المحلية؟',
            a: 'لا. يدمج PEFT محوّلات LoRA عبر الدالة add_weighted_adapter، ويبني mergoo نماذج خليط خبراء من عدة نماذج مضبوطة. أما LazyMergekit وفضاء mergekit-gui فهما واجهتان فوق Mergekit وليسا محركين مستقلين. راجع المقارنة أعلاه.',
          },
          {
            q: 'ما الترخيص الذي يستخدمه Mergekit؟',
            a: 'LGPL-3.0. وقد يخضع النموذج المدموج أيضًا لشروط ترخيص كل نموذج مصدر، لذا راجعها قبل نشر الناتج أو بيعه. هذه معلومات عامة وليست استشارة قانونية.',
          },
          {
            q: 'كم طريقة دمج يدعمها Mergekit؟',
            a: 'يسرد README ثماني عشرة طريقة، من linear وSLERP إلى TIES وDARE وDELLA وSCE وModel Stock وpassthrough.',
          },
          {
            q: 'هل يمكنني دمج محوّلات LoRA بدلًا من النماذج الكاملة؟',
            a: 'نعم. تدمج الدالة add_weighted_adapter في PEFT محوّلات LoRA المدرَّبة على النموذج الأساسي نفسه، مع خيارات الخطي وSVD وTIES وDARE. ويعمل Mergekit في الاتجاه المعاكس عبر mergekit-extract-lora الذي يستخرج محوّلًا منخفض الرتبة من نموذج مضبوط.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Hardware Extension',
    heroImage: '/images/best-model-merging-tool-mergekit-overview-hero-ko.webp',
    title: '로컬 모델 가중치를 병합하는 Mergekit과 대안 도구',
    seoTitle: '2026 모델 병합 도구: Mergekit 대안 비교',
    metaDescription:
      'Mergekit은 18가지 방법(SLERP, TIES, DARE)으로 로컬 모델 가중치를 CPU에서 병합합니다. PEFT·mergoo와 비교하고 RAM 요구 사항과 라이선스도 설명합니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    last_full_refresh: '2026-10-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: '추가 학습 없이 여러 파인튜닝된 모델을 하나로 결합하려는 개발자',
    affiliateDisclosure: true,
    siblingBites: ['lora-vs-full-fine-tuning', 'fine-tuning-7b-model-locally-hardware'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Mergekit은 로컬 모델 가중치를 병합하는 가장 잘 알려진 오픈소스 툴킷(GitHub 스타 7,000개 이상)으로, 선형, SLERP, TIES 등 18가지 병합 방법을 GPU 학습 단계 없이 지원합니다.</strong> 다운로드한 가중치 파일에서 직접 작동하므로 파인튜닝에 비해 보급형 하드웨어에서도 사용할 수 있습니다. 주요 비용은 GPU 연산 능력이 아니라 병합할 모델을 담을 수 있는 충분한 시스템 RAM입니다.',
    toc: [
      { label: '최선의 선택: Mergekit', anchor: '#best-pick' },
      { label: '모델 병합의 작동 방식', anchor: '#how-it-works' },
      { label: '병합 방법 비교', anchor: '#merge-methods' },
      { label: 'Mergekit 대안 비교', anchor: '#alternatives' },
      { label: 'Mergekit 프로젝트 현황', anchor: '#project-status' },
      { label: '대규모 병합을 위한 하드웨어', anchor: '#hardware' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ko: {
        question: '로컬 모델 가중치를 병합하는 가장 좋은 도구는 무엇입니까?',
        answer:
          'Mergekit은 이 용도로 가장 잘 알려진 오픈소스 도구입니다. 선형 평균, SLERP, TIES 같은 방법으로 호환되는 모델 가중치 파일을 병합하며 GPU 학습 단계가 전혀 없습니다. 병합 자체는 CPU에서 실행할 수 있고 파인튜닝에 걸리는 시간의 일부만 소요됩니다.',
        bullets: [
          'Mergekit은 여러 병합 방법을 지원하며, 각 방법은 혼합과 개별 모델 강점 보존 사이에서 서로 다른 절충점을 가집니다.',
          '병합 자체에는 GPU 학습이 필요하지 않으며, 결합할 가중치 파일을 담을 수 있는 RAM만 있으면 됩니다.',
          '병합되는 모델은 올바르게 결합되려면 동일한 기본 아키텍처와 파라미터 형태를 공유해야 합니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mergekit은 호환되는 로컬 모델 가중치를 병합하는 표준 오픈소스 도구입니다',
          '병합에는 GPU 학습 단계가 필요 없으며, 가중치 파일을 담을 수 있는 RAM만 있으면 됩니다',
          '선형 및 SLERP 방법은 간단한 출발점이며, TIES와 DARE는 개별 모델의 강점을 더 잘 보존합니다',
          '병합되는 모델은 동일한 기본 아키텍처와 파라미터 형태를 공유해야 합니다',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Mergekit은 GPU 학습 단계 없이 로컬 모델 가중치를 결합하는 18가지 병합 방법을 갖춘 오픈소스 툴킷입니다.' },
          { type: 'plain-terms', text: '쉽게 말해: mergekit은 처음부터 아무것도 다시 학습하지 않고, 호환되는 두 개 이상의 모델을 하나의 새로운 모델 파일로 혼합합니다.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최선의 선택: Mergekit',
        content: [
          '<strong>Mergekit은 오픈소스이고, 가장 폭넓은 병합 방법을 지원하며, GPU 학습 단계가 필요 없기 때문에(병합 중 소스 모델을 메모리에 유지할 수 있는 충분한 시스템 RAM만 있으면 됨) 로컬 모델 가중치를 병합하는 표준 선택입니다.</strong> 이는 학습 가능한 GPU가 필요한 완전한 파인튜닝과 달리, 평범한 데스크톱이나 노트북에서도 사용할 수 있게 해줍니다.',
          '다음의 경우 Mergekit을 사용하십시오: 동일한 기본 모델의 두 파인튜닝 결과의 동작을 하나로 결합하고 싶은 경우, 완전한 파인튜닝을 실행할 컴퓨팅 예산이 없는 경우, 재학습 없이 여러 병합 비율을 빠르게 실험하고 싶은 경우. 다음의 경우 Mergekit을 피하십시오: 결합하려는 모델이 서로 다른 기본 아키텍처나 파라미터 수를 가진 경우 — 가중치 수준의 병합에는 일치하는 형태가 필요합니다.',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: '모델 병합의 작동 방식',
        content: [
          '모델 병합은 동일한 기본 아키텍처를 공유하는 두 개 이상의 모델의 가중치를, 추가 학습이 아닌 수학적 병합 방법을 사용해 하나의 새로운 가중치 세트로 결합합니다. 병합 중에는 그래디언트 계산이나 역전파가 발생하지 않으므로, 완전한 파인튜닝이 필요로 하는 몇 시간 또는 며칠이 아니라 CPU에서 몇 분 안에 처리가 완료됩니다.',
          '결과물은 소스 모델과 동일한 크기의 단일한 새 모델 파일이며, 어댑터나 여러 소스를 감싸는 래퍼가 아닙니다. 병합이 완료되면 결과는 추론 시 일반적인 단일 모델처럼 동작하며, 여러 소스를 결합했다고 해서 추가 지연이 발생하지 않습니다.',
        ],
      },
      mergeMethods: {
        id: 'merge-methods',
        title: '병합 방법 비교',
        content: [
          '선형 평균은 가장 단순한 방법입니다. 고정된 비율로 대응하는 가중치를 혼합하며, 첫 시도로는 합리적이지만, 더 많은 모델을 함께 혼합할수록 각 소스 모델의 고유한 강점이 희석되는 경향이 있습니다.',
          'SLERP(구면 선형 보간)는 직선이 아닌 가중치 공간 내의 곡선 경로를 따라 두 모델을 혼합하며, 정확히 두 모델을 병합할 때 단순 선형 평균보다 일반적으로 각 모델의 특성을 더 잘 보존합니다.',
          'TIES와 DARE는 평균을 내는 대신 소스 모델 간의 상충하는 가중치 업데이트를 해결하려는 더 선택적인 방법으로, 두 개 이상의 모델을 한 번에 병합할 때 각 소스 모델의 고유한 강점을 일반적으로 더 잘 보존합니다.',
          'Mergekit의 README에는 18가지 병합 방법이 나열되어 있습니다: linear, slerp, nuslerp, multislerp, karcher, task_arithmetic, ties, dare_linear, dare_ties, della, della_linear, breadcrumbs, breadcrumbs_ties, sce, model_stock, nearswap, arcee_fusion, passthrough. passthrough는 서로 다른 모델의 레이어를 평균내지 않고 쌓습니다.',
        ],
        callouts: [
          { type: 'verdict', text: '정확히 두 모델을 병합하는 경우 — SLERP로 시작하십시오. 다음의 경우 건너뛰십시오: 어떤 가중치가 유지되는지 더 세밀하게 제어해야 하는 경우.' },
          { type: 'verdict', text: '세 개 이상의 모델을 병합하는 경우 — TIES 또는 DARE를 사용하십시오. 다음의 경우 건너뛰십시오: 소스 모델들이 동작 면에서 크게 다른 경우, 서로 다른 소스가 너무 많으면 충돌 해결의 정확도가 떨어지기 때문입니다.' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Mergekit 대안 비교',
        content: [
          '<strong>전체 가중치 병합에는 Mergekit이, LoRA 어댑터에는 PEFT가, 전문가 혼합(MoE) 구축에는 mergoo가 더 잘 맞습니다.</strong> 인기가 아니라 무엇을 결합하는지에 따라 고르세요.',
          '<a href="https://github.com/huggingface/peft" class="text-primary hover:underline" rel="noopener">PEFT</a>(Apache-2.0): 같은 기본 모델로 학습한 LoRA 어댑터를 add_weighted_adapter 메서드로 선형, SVD, TIES, DARE 결합 방식으로 병합합니다. 완전히 파인튜닝한 가중치 대신 어댑터가 있을 때 사용하세요.',
          '<a href="https://github.com/Leeroo-AI/mergoo" class="text-primary hover:underline" rel="noopener">mergoo</a>(LGPL-3.0): 여러 파인튜닝된 전문가를 Llama, Mistral, Phi-3, BERT용 전문가 혼합 또는 어댑터 혼합 모델로 결합하고, 이후 라우터를 학습할 수 있게 해 줍니다. GitHub의 마지막 커밋이 2024년 8월이므로, 의존하기 전에 현재 라이브러리 버전과의 호환성을 확인하세요.',
          'LazyMergekit(이 <a href="https://towardsdatascience.com/merge-large-language-models-with-mergekit-2118fb392b54" class="text-primary hover:underline" rel="noopener">Towards Data Science 튜토리얼</a>에서 설명)와 Hugging Face Space <a href="https://huggingface.co/spaces/arcee-ai/mergekit-gui" class="text-primary hover:underline" rel="noopener">mergekit-gui</a>는 Mergekit 위에 만들어진 프런트엔드입니다. 설정 수고는 덜어주지만 병합 엔진과 방법 목록은 같습니다.',
        ],
        callouts: [
          { type: 'verdict', text: '하나의 기본 모델에서 나온 전체 파인튜닝 모델을 병합할 때 — Mergekit을 사용하세요. 건너뛸 경우: LoRA 어댑터만 있다면 대신 PEFT를 사용하세요.' },
          { type: 'verdict', text: '전문가 혼합 모델을 구축할 때 — mergekit-moe 또는 mergoo를 사용하세요. 건너뛸 경우: 전문가 혼합 결과물은 어떤 원본보다도 크므로, 단일한 일반 모델이 필요하다면 건너뛰세요.' },
        ],
      },
      projectStatus: {
        id: 'project-status',
        title: 'Mergekit 프로젝트 현황',
        content: [
          'Mergekit은 Arcee AI가 LGPL-3.0 라이선스로 개발합니다. 마지막 업스트림 업데이트는 2026년 9월 12일(메인 브랜치 최신 커밋)이며, 가장 최근에 태그된 릴리스는 2025년 10월 31일의 v0.1.4입니다. 출처: <a href="https://github.com/arcee-ai/mergekit" class="text-primary hover:underline" rel="noopener">GitHub의 Mergekit</a>.',
          '문서화된 설치 방법은 git clone 후 저장소 폴더에서 pip install -e . 를 실행하는 것입니다. 병합은 원본 모델과 방법을 지정한 YAML 설정 파일과 mergekit-yaml 명령으로 실행합니다.',
          '저장소에는 mergekit-moe(밀집 모델을 전문가 혼합으로 결합), mergekit-extract-lora(파인튜닝 모델에서 PEFT 호환 저랭크 근사 추출), 진화적 병합 모드도 포함되어 있습니다. README는 지원 아키텍처로 Llama, Mistral, GPT-NeoX, StableLM을 들고 있습니다.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '대규모 병합을 위한 하드웨어',
        content: [
          '두 개의 7B 모델을 CPU만으로 병합하는 작업은 RAM 32GB를 갖춘 시스템에서 무리 없이 수행됩니다. 더 큰 모델(30B 이상)이나 여러 소스를 동시에 병합하는 경우 일반적인 데스크톱 RAM을 초과할 수 있습니다. Mergekit은 병합 중 각 소스 모델을 메모리에 유지해야 하기 때문입니다. 병합 단계만을 위해 고용량 RAM 클라우드 인스턴스를 대여하는 것이, 가끔 있는 작업을 위해 추가 로컬 RAM을 구매하는 것보다 저렴한 경우가 많습니다.',
          '위 수치는 보수적인 계획용 값으로 보세요. README는 텐서 지연 로딩과 out-of-core 방식을 설명하며, 병합을 CPU만으로 실행하거나 최소 8GB VRAM으로 가속할 수 있다고 밝힙니다(--cuda 플래그). 따라서 실제 최대 메모리 사용량은 원본 모델 크기의 합보다 작을 수 있습니다.',
          '<em>공개: 이 글에는 제휴 링크가 포함되어 있습니다. 이 링크를 통해 구매하시면 추가 비용 없이 저희가 수수료를 받을 수 있습니다.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.runpod.io/console/deploy',
            productName: 'RunPod On-Demand Cloud GPU/CPU Instances',
            productCategory: 'cloud-compute',
            priceRange: '$0.20-1/hr',
            label: '대규모 모델 병합을 위해 RunPod에서 고용량 RAM 클라우드 인스턴스 대여하기',
          },
          {
            url: 'https://www.amazon.com/s?k=64gb+ddr5+ram+kit',
            productName: '64GB DDR5 RAM Kit',
            productCategory: 'memory',
            priceRange: '$180-260',
            label: 'Amazon에서 64GB RAM 키트 가격 확인하기(반복적인 로컬 병합용)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '서로 다른 아키텍처의 모델을 병합할 수 있습니까?',
            a: '아니요 — 가중치 수준의 병합이 올바르게 작동하려면 병합되는 모델이 일반적으로 동일한 기본 아키텍처와 파라미터 형태를 공유해야 합니다. 서로 다른 기본 아키텍처로 구축된 두 파인튜닝 모델 간의 병합은 유효한 모델을 만들어내지 못합니다.',
          },
          {
            q: '모델 병합에는 GPU가 필요합니까?',
            a: '아니요 — 병합 계산 자체는 CPU 중심이며 GPU 가속이 필요하지 않습니다. GPU는 그 이후, 즉 병합된 모델에서 추론을 실행하거나 추가로 파인튜닝할 때에만 관련이 있습니다.',
          },
          {
            q: '병합된 모델이 소스 모델 중 하나보다 더 나은 성능을 보입니까?',
            a: '이는 소스 모델들의 동작이 얼마나 호환되는지에 따라 다릅니다. 잘 선택된 병합은 각 소스의 강점을 결합할 수 있지만, 매우 다르게 학습된 두 모델의 병합은 어느 한쪽 소스 단독보다 더 나쁜 결과를 낼 수도 있습니다. 신뢰하기 전에 항상 자신의 작업으로 병합된 모델을 평가하십시오.',
          },
          {
            q: 'Mergekit이 로컬 모델 가중치를 병합하는 유일한 도구입니까?',
            a: '아니요. PEFT는 add_weighted_adapter 메서드로 LoRA 어댑터를 병합하고, mergoo는 여러 파인튜닝 모델로 전문가 혼합 모델을 만듭니다. LazyMergekit과 mergekit-gui Space는 독립된 엔진이 아니라 Mergekit 위의 프런트엔드입니다. 위의 비교를 참고하세요.',
          },
          {
            q: 'Mergekit은 어떤 라이선스를 사용하나요?',
            a: 'LGPL-3.0입니다. 병합된 모델은 각 원본 모델의 라이선스 조건의 적용을 받을 수도 있으므로, 결과물을 공개하거나 판매하기 전에 확인하세요. 이는 일반적인 정보이며 법률 자문이 아닙니다.',
          },
          {
            q: 'Mergekit은 몇 가지 병합 방법을 지원하나요?',
            a: 'README에는 linear와 SLERP부터 TIES, DARE, DELLA, SCE, Model Stock, passthrough까지 18가지가 나열되어 있습니다.',
          },
          {
            q: '전체 모델 대신 LoRA 어댑터를 병합할 수 있나요?',
            a: '네. PEFT의 add_weighted_adapter는 같은 기본 모델로 학습한 LoRA 어댑터를 선형, SVD, TIES, DARE 옵션으로 병합합니다. Mergekit은 mergekit-extract-lora로 반대 방향, 즉 파인튜닝된 모델에서 저랭크 어댑터를 추출하는 작업을 수행합니다.',
          },
        ],
      },
    },
  },
}

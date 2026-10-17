import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-en.webp',
    title: 'How Do You Convert a Model to GGUF With llama.cpp?',
    seoTitle: 'Convert Safetensors to GGUF With llama.cpp | Prompt Bites',
    metaDescription: 'How to convert safetensors or a Hugging Face model to GGUF with llama.cpp: convert_hf_to_gguf.py, f16/bf16/q8_0 output types, llama-quantize, and common errors.',
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers converting a model to GGUF format for local inference',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Convert a model to GGUF with llama.cpp\'s convert_hf_to_gguf.py script, which reads a source model\'s weights and metadata and writes them into the single-file GGUF format.</strong> Run the script against a Hugging Face-format model directory with a full-precision output type (f16 or bf16), optionally quantize the result with llama-quantize, and the `.gguf` file loads in llama.cpp, Ollama, or LM Studio.',
    quickAnswerTop: {
      en: {
        question: 'How do you convert a model to GGUF format with llama.cpp?',
        answer: 'Run llama.cpp\'s convert_hf_to_gguf.py against a Hugging Face-format model directory with an output type such as f16 or bf16 (full precision). The script itself only quantizes to q8_0, so for levels like Q4_K_M run llama-quantize on the resulting file afterward. The .gguf output loads directly in llama.cpp, Ollama, or LM Studio.',
        bullets: [
          'Source model must be in Hugging Face format (safetensors or PyTorch checkpoint) before conversion',
          'Output types the conversion script accepts: f32, f16, bf16, q8_0, tq1_0, tq2_0, or auto (the default, which picks the highest-fidelity 16-bit type)',
          'Quantize to Q4_K_M, Q5_K_M and other levels with llama-quantize, starting from the f16 or bf16 file — not during conversion',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF conversion reads a Hugging Face-format model\'s weights and metadata and writes them into a single portable .gguf file',
          'Convert to f16/f32 first if you plan to try multiple quantization levels — quantizing from an already-quantized conversion loses more quality than quantizing from full precision',
          'The output type you choose at conversion time determines both file size and inference quality — there is no free lunch between the two',
          'Most conversion errors trace back to an incompatible or incomplete source model directory, not the conversion script itself',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Converting a model to GGUF means running llama.cpp\'s conversion script against a Hugging Face-format source model to produce a single portable .gguf file.' },
          { type: 'plain-terms', text: 'In plain terms: GGUF conversion repackages a model\'s files into one file that local tools like llama.cpp, Ollama, and LM Studio can load directly.' },
        ],
      },
      conversionSteps: {
        id: 'conversion-steps',
        title: 'The Conversion Process',
        content: [
          'Conversion has three practical steps: prepare the source model, run the conversion script with an output type, and — if you converted to full precision — quantize afterward.',
        ],
        items: [
          '**1. Prepare the source model:** the conversion script expects a Hugging Face-format directory containing the model\'s weight files (safetensors is preferred over legacy PyTorch `.bin` checkpoints) plus its config and tokenizer files. A partially downloaded or manually assembled directory missing the tokenizer files is the single most common cause of conversion failures.',
          '**2. Run the conversion script with an output type:** `python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16` produces a full-precision GGUF file; install the Python dependencies from the repository\'s `requirements.txt` first. The accepted output types are f32, f16, bf16, q8_0, tq1_0, tq2_0 and auto (the default, which picks the highest-fidelity 16-bit type). Only q8_0 is a conventional quantization, so quantizing during conversion gives you less control than converting to f16 or bf16 first.',
          '**3. Quantize separately for more control (optional but recommended):** starting from the f16 or bf16 GGUF file, run `llama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M` to produce a quantized variant. Repeat with other types (Q5_K_M, Q6_K, Q8_0) from the same full-precision file to compare quality/size tradeoffs without re-running the conversion. An optional `--imatrix` file can reduce the accuracy loss at low bit widths.',
        ],
      },
      commonErrors: {
        id: 'common-errors',
        title: 'Common Conversion Errors',
        content: [
          'Most conversion failures fall into a small number of categories, almost always traceable to the source model rather than the script itself.',
        ],
        items: [
          '**Unrecognized architecture:** the conversion script maintains an internal list of supported model architectures. A very new or unusual architecture may not be supported yet — check the tool\'s supported-architecture list before assuming the model files are broken.',
          '**Missing tokenizer files:** conversion needs the tokenizer configuration alongside the weights. A model directory with only weight files and no tokenizer files will fail partway through conversion.',
          '**Mismatched file format expectations:** legacy PyTorch `.bin` checkpoints sometimes need an extra conversion step to safetensors first, depending on the tool version — prefer downloading models that already ship in safetensors format to avoid this entirely.',
          '**Insufficient disk space or RAM during conversion:** conversion loads the full-precision model into memory before writing it out, so it needs roughly the same RAM as the model\'s full-precision size, plus the disk space for both the source files and the output GGUF file simultaneously.',
          '**Unsupported `--outtype`:** passing `Q4_K_M` or another K-quant type to `convert_hf_to_gguf.py` is rejected as an invalid choice. Convert to f16 or bf16 first, then quantize the result with `llama-quantize`.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Should I quantize during conversion or convert to full precision first?',
            a: 'Convert to full precision (f16) first if you plan to compare multiple quantization levels — quantizing separately afterward from the same f16 source gives more accurate results than quantizing directly from a source model during conversion, and lets you produce several quantized variants without repeating the conversion step.',
          },
          {
            q: 'Why does my converted GGUF file fail to load in Ollama or LM Studio even though conversion succeeded?',
            a: 'A successful conversion doesn\'t guarantee the loading tool supports that specific architecture or GGUF version. GGUF format and architecture support both evolve over time, and an older tool version may not recognize a file produced by a newer conversion script — keep both tools updated together.',
          },
          {
            q: 'How much disk space does conversion need?',
            a: 'Budget for the source model\'s full size plus the output GGUF file\'s size simultaneously — for a full-precision conversion, that roughly doubles the model\'s footprint during the process. Quantized output files are smaller, but you still need the source files present until conversion finishes.',
          },
          {
            q: 'Can I convert a model that\'s already been fine-tuned?',
            a: 'Yes — the conversion process works the same way on a fine-tuned model as a base model, as long as the fine-tuned weights are saved in a standard Hugging Face-compatible format. If the fine-tune used adapter weights (like LoRA) rather than full weights, merge the adapter into the base model first, then convert the merged result.',
          },
          {
            q: 'How do I convert safetensors to GGUF?',
            a: 'Download the complete model repository so the folder holds the .safetensors weight files plus config.json and the tokenizer files, then run `python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16`. The script reads safetensors directly, so no intermediate format is needed. Run `llama-quantize` on the result if you want a smaller file.',
          },
          {
            q: 'Should I use f16 or bf16 as the output type?',
            a: 'Use bf16 when the source model was published in bfloat16, because it keeps that format\'s numeric range; f16 is the usual choice otherwise. The default, auto, picks the highest-fidelity 16-bit type for you, so omitting `--outtype` is often fine.',
          },
          {
            q: 'How long does GGUF conversion take and what does it cost?',
            a: 'Conversion is free: llama.cpp is open source and the script runs locally, so the only costs are disk space and RAM. There is no fixed duration — the script reads and rewrites the weights, so time depends on model size and disk speed, and quantizing with `llama-quantize` is a second pass on top.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-de.webp',
    title: 'Wie konvertiert man ein Modell mit llama.cpp in GGUF?',
    seoTitle: 'Safetensors in GGUF konvertieren mit llama.cpp | Prompt Bites',
    metaDescription: 'So konvertieren Sie safetensors oder ein Hugging-Face-Modell mit llama.cpp in GGUF: convert_hf_to_gguf.py, Ausgabetypen f16/bf16/q8_0, llama-quantize und häufige Fehler.',
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die ein Modell für lokale Inferenz ins GGUF-Format konvertieren',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Konvertieren Sie ein Modell mit dem Skript convert_hf_to_gguf.py von llama.cpp ins GGUF-Format. Es liest die Gewichte und Metadaten eines Quellmodells ein und schreibt sie in das einzeldateibasierte GGUF-Format.</strong> Führen Sie das Skript gegen ein Modellverzeichnis im Hugging-Face-Format mit einem Ausgabetyp in voller Präzision (f16 oder bf16) aus, quantisieren Sie das Ergebnis optional mit llama-quantize, und die `.gguf`-Datei lässt sich in llama.cpp, Ollama oder LM Studio laden.',
    quickAnswerTop: {
      de: {
        question: 'Wie konvertiert man ein Modell mit llama.cpp ins GGUF-Format?',
        answer: 'Führen Sie convert_hf_to_gguf.py von llama.cpp gegen ein Modellverzeichnis im Hugging-Face-Format mit einem Ausgabetyp wie f16 oder bf16 (volle Präzision) aus. Das Skript selbst quantisiert nur nach q8_0; für Stufen wie Q4_K_M führen Sie anschließend llama-quantize auf der entstandenen Datei aus. Die .gguf-Ausgabe lässt sich direkt in llama.cpp, Ollama oder LM Studio laden.',
        bullets: [
          'Das Quellmodell muss vor der Konvertierung im Hugging-Face-Format vorliegen (safetensors oder PyTorch-Checkpoint)',
          'Ausgabetypen des Konvertierungsskripts: f32, f16, bf16, q8_0, tq1_0, tq2_0 oder auto (Standard, wählt den 16-Bit-Typ mit der höchsten Genauigkeit)',
          'Quantisieren Sie mit llama-quantize auf Q4_K_M, Q5_K_M und weitere Stufen, ausgehend von der f16- oder bf16-Datei — nicht während der Konvertierung',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Die GGUF-Konvertierung liest die Gewichte und Metadaten eines Modells im Hugging-Face-Format ein und schreibt sie in eine einzelne portable .gguf-Datei',
          'Konvertieren Sie zunächst zu f16/f32, wenn Sie mehrere Quantisierungsstufen ausprobieren möchten — das Quantisieren einer bereits quantisierten Konvertierung verliert mehr Qualität als das Quantisieren aus voller Präzision',
          'Der bei der Konvertierung gewählte Ausgabetyp bestimmt sowohl die Dateigröße als auch die Inferenzqualität — hier gibt es kein kostenloses Mittagessen',
          'Die meisten Konvertierungsfehler lassen sich auf ein inkompatibles oder unvollständiges Quellmodellverzeichnis zurückführen, nicht auf das Konvertierungsskript selbst',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Ein Modell in GGUF zu konvertieren bedeutet, das Konvertierungsskript von llama.cpp gegen ein Quellmodell im Hugging-Face-Format auszuführen, um eine einzelne portable .gguf-Datei zu erzeugen.' },
          { type: 'plain-terms', text: 'Einfach gesagt: Die GGUF-Konvertierung verpackt die Dateien eines Modells in eine einzige Datei, die lokale Werkzeuge wie llama.cpp, Ollama und LM Studio direkt laden können.' },
        ],
      },
      conversionSteps: {
        id: 'conversion-steps',
        title: 'Der Konvertierungsprozess',
        content: [
          'Die Konvertierung umfasst drei praktische Schritte: das Quellmodell vorbereiten, das Konvertierungsskript mit einem Ausgabetyp ausführen und — falls Sie zu voller Präzision konvertiert haben — anschließend quantisieren.',
        ],
        items: [
          '**1. Quellmodell vorbereiten:** Das Konvertierungsskript erwartet ein Verzeichnis im Hugging-Face-Format mit den Gewichtsdateien des Modells (safetensors wird gegenüber veralteten PyTorch-`.bin`-Checkpoints bevorzugt) sowie dessen Konfigurations- und Tokenizer-Dateien. Ein teilweise heruntergeladenes oder manuell zusammengestelltes Verzeichnis ohne Tokenizer-Dateien ist die häufigste Ursache für Konvertierungsfehler.',
          '**2. Konvertierungsskript mit einem Ausgabetyp ausführen:** `python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16` erzeugt eine GGUF-Datei in voller Präzision; installieren Sie zuvor die Python-Abhängigkeiten aus der `requirements.txt` des Repositorys. Zulässige Ausgabetypen sind f32, f16, bf16, q8_0, tq1_0, tq2_0 und auto (Standard, wählt den 16-Bit-Typ mit der höchsten Genauigkeit). Nur q8_0 ist eine herkömmliche Quantisierung; das Quantisieren während der Konvertierung gibt Ihnen daher weniger Kontrolle, als zunächst zu f16 oder bf16 zu konvertieren.',
          '**3. Separat quantisieren für mehr Kontrolle (optional, aber empfohlen):** Führen Sie ausgehend von der f16- oder bf16-GGUF-Datei `llama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M` aus, um eine quantisierte Variante zu erzeugen. Wiederholen Sie dies mit weiteren Typen (Q5_K_M, Q6_K, Q8_0) aus derselben Datei in voller Präzision, um Qualitäts-/Größen-Kompromisse zu vergleichen, ohne die Konvertierung erneut auszuführen. Eine optionale `--imatrix`-Datei kann den Genauigkeitsverlust bei niedrigen Bitbreiten verringern.',
        ],
      },
      commonErrors: {
        id: 'common-errors',
        title: 'Häufige Konvertierungsfehler',
        content: [
          'Die meisten Konvertierungsfehler lassen sich einer kleinen Zahl von Kategorien zuordnen, die fast immer auf das Quellmodell und nicht auf das Skript selbst zurückzuführen sind.',
        ],
        items: [
          '**Nicht erkannte Architektur:** Das Konvertierungsskript führt eine interne Liste unterstützter Modellarchitekturen. Eine sehr neue oder ungewöhnliche Architektur wird möglicherweise noch nicht unterstützt — prüfen Sie die aktuelle Architekturliste des Werkzeugs, bevor Sie annehmen, die Modelldateien seien defekt.',
          '**Fehlende Tokenizer-Dateien:** Die Konvertierung benötigt die Tokenizer-Konfiguration zusätzlich zu den Gewichten. Ein Modellverzeichnis mit nur Gewichtsdateien und ohne Tokenizer-Dateien schlägt mitten in der Konvertierung fehl.',
          '**Nicht übereinstimmende Dateiformat-Erwartungen:** Veraltete PyTorch-`.bin`-Checkpoints benötigen je nach Werkzeugversion manchmal einen zusätzlichen Konvertierungsschritt zu safetensors — bevorzugen Sie den Download von Modellen, die bereits im safetensors-Format vorliegen, um dies vollständig zu vermeiden.',
          '**Unzureichender Speicherplatz oder Arbeitsspeicher während der Konvertierung:** Die Konvertierung lädt das Modell in voller Präzision in den Arbeitsspeicher, bevor sie es schreibt. Sie benötigt daher etwa so viel Arbeitsspeicher wie die volle Präzisionsgröße des Modells, plus den Speicherplatz für die Quelldateien und die Ausgabe-GGUF-Datei gleichzeitig.',
          '**Nicht unterstützter `--outtype`:** Die Übergabe von `Q4_K_M` oder einem anderen K-Quant-Typ an `convert_hf_to_gguf.py` wird als ungültige Auswahl abgelehnt. Konvertieren Sie zuerst zu f16 oder bf16 und quantisieren Sie das Ergebnis dann mit `llama-quantize`.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Sollte ich während der Konvertierung quantisieren oder zunächst in voller Präzision konvertieren?',
            a: 'Konvertieren Sie zunächst in voller Präzision (f16), wenn Sie mehrere Quantisierungsstufen vergleichen möchten — separates Quantisieren im Anschluss aus derselben f16-Quelle liefert genauere Ergebnisse als das direkte Quantisieren aus einem Quellmodell während der Konvertierung und ermöglicht es Ihnen, mehrere quantisierte Varianten zu erzeugen, ohne den Konvertierungsschritt zu wiederholen.',
          },
          {
            q: 'Warum lässt sich meine konvertierte GGUF-Datei nicht in Ollama oder LM Studio laden, obwohl die Konvertierung erfolgreich war?',
            a: 'Eine erfolgreiche Konvertierung garantiert nicht, dass das Ladewerkzeug diese spezifische Architektur oder GGUF-Version unterstützt. Prüfen Sie, ob die Version Ihres Ladewerkzeugs aktuell ist — sowohl das GGUF-Format als auch die Architekturunterstützung entwickeln sich weiter, und eine ältere Werkzeugversion erkennt möglicherweise eine von einem neueren Konvertierungsskript erzeugte Datei nicht.',
          },
          {
            q: 'Wie viel Speicherplatz benötigt die Konvertierung?',
            a: 'Kalkulieren Sie mit der vollen Größe des Quellmodells plus der Größe der Ausgabe-GGUF-Datei gleichzeitig — bei einer Konvertierung in voller Präzision verdoppelt sich der Speicherbedarf des Modells während des Vorgangs ungefähr. Quantisierte Ausgabedateien sind kleiner, aber die Quelldateien müssen bis zum Abschluss der Konvertierung vorhanden bleiben.',
          },
          {
            q: 'Kann ich ein bereits feinabgestimmtes Modell konvertieren?',
            a: 'Ja — der Konvertierungsprozess funktioniert bei einem feinabgestimmten Modell genauso wie bei einem Basismodell, solange die feinabgestimmten Gewichte in einem standardmäßigen, mit Hugging Face kompatiblen Format gespeichert sind. Wenn beim Fine-Tuning Adapter-Gewichte (wie LoRA) statt vollständiger Gewichte verwendet wurden, führen Sie den Adapter zunächst mit dem Basismodell zusammen und konvertieren Sie dann das zusammengeführte Ergebnis.',
          },
          {
            q: 'Wie konvertiere ich safetensors in GGUF?',
            a: 'Laden Sie das vollständige Modell-Repository herunter, sodass der Ordner die .safetensors-Gewichtsdateien sowie config.json und die Tokenizer-Dateien enthält, und führen Sie dann `python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16` aus. Das Skript liest safetensors direkt ein, ein Zwischenformat ist nicht nötig. Führen Sie auf dem Ergebnis `llama-quantize` aus, wenn Sie eine kleinere Datei möchten.',
          },
          {
            q: 'Sollte ich f16 oder bf16 als Ausgabetyp verwenden?',
            a: 'Verwenden Sie bf16, wenn das Quellmodell in bfloat16 veröffentlicht wurde, da es den Zahlenbereich dieses Formats beibehält; andernfalls ist f16 die übliche Wahl. Der Standardwert auto wählt automatisch den 16-Bit-Typ mit der höchsten Genauigkeit, daher ist es oft in Ordnung, `--outtype` wegzulassen.',
          },
          {
            q: 'Wie lange dauert die GGUF-Konvertierung und was kostet sie?',
            a: 'Die Konvertierung ist kostenlos: llama.cpp ist Open Source und das Skript läuft lokal, sodass nur Speicherplatz und Arbeitsspeicher anfallen. Eine feste Dauer gibt es nicht — das Skript liest und schreibt die Gewichte neu, die Zeit hängt also von Modellgröße und Festplattengeschwindigkeit ab; das Quantisieren mit `llama-quantize` ist ein zusätzlicher zweiter Durchlauf.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-fr.webp',
    title: 'Comment convertir un modèle en GGUF avec llama.cpp ?',
    seoTitle: 'Convertir safetensors en GGUF avec llama.cpp | Prompt Bites',
    metaDescription: 'Comment convertir safetensors ou un modèle Hugging Face en GGUF avec llama.cpp : convert_hf_to_gguf.py, types de sortie f16/bf16/q8_0, llama-quantize et erreurs courantes.',
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Développeurs convertissant un modèle au format GGUF pour de l\'inférence locale',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Convertissez un modèle en GGUF avec le script convert_hf_to_gguf.py de llama.cpp, qui lit les poids et les métadonnées d\'un modèle source et les écrit dans le format GGUF à fichier unique.</strong> Exécutez le script sur un répertoire de modèle au format Hugging Face avec un type de sortie en pleine précision (f16 ou bf16), quantifiez ensuite le résultat avec llama-quantize si besoin, et le fichier `.gguf` se charge dans llama.cpp, Ollama ou LM Studio.',
    quickAnswerTop: {
      fr: {
        question: 'Comment convertir un modèle au format GGUF avec llama.cpp ?',
        answer: 'Exécutez convert_hf_to_gguf.py de llama.cpp sur un répertoire de modèle au format Hugging Face avec un type de sortie tel que f16 ou bf16 (pleine précision). Le script ne quantifie lui-même qu\'en q8_0 ; pour des niveaux comme Q4_K_M, exécutez ensuite llama-quantize sur le fichier obtenu. Le fichier .gguf se charge directement dans llama.cpp, Ollama ou LM Studio.',
        bullets: [
          'Le modèle source doit être au format Hugging Face (safetensors ou checkpoint PyTorch) avant la conversion',
          'Types de sortie acceptés par le script de conversion : f32, f16, bf16, q8_0, tq1_0, tq2_0 ou auto (valeur par défaut, qui choisit le type 16 bits de plus haute fidélité)',
          'Quantifiez en Q4_K_M, Q5_K_M et d\'autres niveaux avec llama-quantize, à partir du fichier f16 ou bf16 — et non pendant la conversion',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La conversion GGUF lit les poids et métadonnées d\'un modèle au format Hugging Face et les écrit dans un seul fichier .gguf portable',
          'Convertissez d\'abord en f16/f32 si vous prévoyez d\'essayer plusieurs niveaux de quantification — quantifier à partir d\'une conversion déjà quantifiée fait perdre plus de qualité que de quantifier à partir de la pleine précision',
          'Le type de sortie choisi au moment de la conversion détermine à la fois la taille du fichier et la qualité d\'inférence — il n\'y a pas de repas gratuit entre les deux',
          'La plupart des erreurs de conversion proviennent d\'un répertoire de modèle source incompatible ou incomplet, pas du script de conversion lui-même',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Convertir un modèle en GGUF consiste à exécuter le script de conversion de llama.cpp sur un modèle source au format Hugging Face pour produire un seul fichier .gguf portable.' },
          { type: 'plain-terms', text: 'En clair : la conversion GGUF regroupe les fichiers d\'un modèle en un seul fichier que des outils locaux comme llama.cpp, Ollama et LM Studio peuvent charger directement.' },
        ],
      },
      conversionSteps: {
        id: 'conversion-steps',
        title: 'Le processus de conversion',
        content: [
          'La conversion comprend trois étapes pratiques : préparer le modèle source, exécuter le script de conversion avec un type de sortie et — si vous avez converti en pleine précision — quantifier ensuite.',
        ],
        items: [
          '**1. Préparer le modèle source :** le script de conversion attend un répertoire au format Hugging Face contenant les fichiers de poids du modèle (safetensors est préféré aux anciens checkpoints PyTorch `.bin`) ainsi que ses fichiers de configuration et de tokenizer. Un répertoire partiellement téléchargé ou assemblé manuellement auquel il manque les fichiers de tokenizer est la cause la plus fréquente d\'échec de conversion.',
          '**2. Exécuter le script de conversion avec un type de sortie :** `python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16` produit un fichier GGUF en pleine précision ; installez d\'abord les dépendances Python listées dans le `requirements.txt` du dépôt. Les types de sortie acceptés sont f32, f16, bf16, q8_0, tq1_0, tq2_0 et auto (valeur par défaut, qui choisit le type 16 bits de plus haute fidélité). Seul q8_0 est une quantification classique : quantifier pendant la conversion offre donc moins de contrôle que de convertir d\'abord en f16 ou bf16.',
          '**3. Quantifier séparément pour plus de contrôle (facultatif mais recommandé) :** à partir du fichier GGUF f16 ou bf16, exécutez `llama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M` pour produire une variante quantifiée. Répétez avec d\'autres types (Q5_K_M, Q6_K, Q8_0) à partir du même fichier en pleine précision pour comparer les compromis qualité/taille sans relancer la conversion. Un fichier `--imatrix` facultatif peut réduire la perte de précision aux faibles largeurs de bits.',
        ],
      },
      commonErrors: {
        id: 'common-errors',
        title: 'Erreurs de conversion courantes',
        content: [
          'La plupart des échecs de conversion se répartissent en quelques catégories, presque toujours attribuables au modèle source plutôt qu\'au script lui-même.',
        ],
        items: [
          '**Architecture non reconnue :** le script de conversion maintient une liste interne des architectures de modèles prises en charge. Une architecture très récente ou inhabituelle peut ne pas encore être prise en charge — vérifiez la liste d\'architectures actuelle de l\'outil avant de supposer que les fichiers du modèle sont défectueux.',
          '**Fichiers de tokenizer manquants :** la conversion a besoin de la configuration du tokenizer en plus des poids. Un répertoire de modèle contenant uniquement les fichiers de poids, sans fichiers de tokenizer, échouera en cours de conversion.',
          '**Attentes de format de fichier non concordantes :** les anciens checkpoints PyTorch `.bin` nécessitent parfois une étape de conversion supplémentaire vers safetensors selon la version de l\'outil — privilégiez le téléchargement de modèles déjà fournis au format safetensors pour éviter complètement ce problème.',
          '**Espace disque ou RAM insuffisants pendant la conversion :** la conversion charge le modèle en pleine précision en mémoire avant de l\'écrire, elle nécessite donc environ autant de RAM que la taille du modèle en pleine précision, plus l\'espace disque pour les fichiers source et le fichier GGUF de sortie simultanément.',
          '**`--outtype` non pris en charge :** passer `Q4_K_M` ou un autre type K-quant à `convert_hf_to_gguf.py` est rejeté comme choix invalide. Convertissez d\'abord en f16 ou bf16, puis quantifiez le résultat avec `llama-quantize`.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Dois-je quantifier pendant la conversion ou convertir d\'abord en pleine précision ?',
            a: 'Convertissez d\'abord en pleine précision (f16) si vous prévoyez de comparer plusieurs niveaux de quantification — quantifier séparément ensuite à partir de la même source f16 donne des résultats plus précis que de quantifier directement à partir d\'un modèle source pendant la conversion, et permet de produire plusieurs variantes quantifiées sans répéter l\'étape de conversion.',
          },
          {
            q: 'Pourquoi mon fichier GGUF converti ne se charge-t-il pas dans Ollama ou LM Studio alors que la conversion a réussi ?',
            a: 'Une conversion réussie ne garantit pas que l\'outil de chargement prend en charge cette architecture ou cette version de GGUF spécifique. Vérifiez que la version de votre outil de chargement est à jour — le format GGUF et la prise en charge des architectures évoluent tous deux, et une version d\'outil plus ancienne peut ne pas reconnaître un fichier produit par un script de conversion plus récent.',
          },
          {
            q: 'De combien d\'espace disque la conversion a-t-elle besoin ?',
            a: 'Prévoyez la taille complète du modèle source plus la taille du fichier GGUF de sortie simultanément — pour une conversion en pleine précision, cela double approximativement l\'empreinte du modèle pendant le processus. Les fichiers de sortie quantifiés sont plus petits, mais les fichiers source doivent rester présents jusqu\'à la fin de la conversion.',
          },
          {
            q: 'Puis-je convertir un modèle déjà affiné (fine-tuné) ?',
            a: 'Oui — le processus de conversion fonctionne de la même façon sur un modèle affiné que sur un modèle de base, tant que les poids affinés sont enregistrés dans un format standard compatible avec Hugging Face. Si l\'affinage a utilisé des poids d\'adaptateur (comme LoRA) plutôt que des poids complets, fusionnez d\'abord l\'adaptateur avec le modèle de base, puis convertissez le résultat fusionné.',
          },
          {
            q: 'Comment convertir safetensors en GGUF ?',
            a: 'Téléchargez le dépôt complet du modèle afin que le dossier contienne les fichiers de poids .safetensors ainsi que config.json et les fichiers du tokenizer, puis exécutez `python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16`. Le script lit directement les safetensors, aucun format intermédiaire n\'est nécessaire. Exécutez `llama-quantize` sur le résultat si vous voulez un fichier plus petit.',
          },
          {
            q: 'Faut-il utiliser f16 ou bf16 comme type de sortie ?',
            a: 'Utilisez bf16 lorsque le modèle source a été publié en bfloat16, car il conserve la plage numérique de ce format ; f16 est le choix habituel dans les autres cas. La valeur par défaut, auto, choisit pour vous le type 16 bits de plus haute fidélité, donc omettre `--outtype` convient souvent.',
          },
          {
            q: 'Combien de temps dure la conversion GGUF et combien coûte-t-elle ?',
            a: 'La conversion est gratuite : llama.cpp est open source et le script s\'exécute en local, les seuls coûts sont donc l\'espace disque et la RAM. Il n\'y a pas de durée fixe — le script lit et réécrit les poids, donc le temps dépend de la taille du modèle et de la vitesse du disque ; la quantification avec `llama-quantize` est une seconde passe en plus.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-ja.webp',
    title: 'llama.cppでモデルをGGUFに変換するにはどうすればよいですか?',
    seoTitle: 'llama.cppでsafetensorsをGGUFに変換 | Prompt Bites',
    metaDescription: 'llama.cppでsafetensorsやHugging Face形式のモデルをGGUFに変換する方法を解説。convert_hf_to_gguf.py、f16/bf16/q8_0の出力タイプ、llama-quantize、よくあるエラーを紹介します。',
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'ローカル推論のためにモデルをGGUF形式に変換する開発者',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>llama.cppのconvert_hf_to_gguf.pyスクリプトでモデルをGGUFに変換します。このスクリプトは変換元モデルの重みとメタデータを読み込み、単一ファイル形式のGGUFに書き出します。</strong> Hugging Face形式のモデルディレクトリに対してフル精度の出力タイプ(f16またはbf16)でスクリプトを実行し、必要に応じて結果をllama-quantizeで量子化すると、llama.cpp、Ollama、LM Studioで読み込める`.gguf`ファイルが得られます。',
    quickAnswerTop: {
      ja: {
        question: 'llama.cppでモデルをGGUF形式に変換するにはどうすればよいですか?',
        answer: 'Hugging Face形式のモデルディレクトリに対して、llama.cppのconvert_hf_to_gguf.pyをf16やbf16(フル精度)などの出力タイプで実行します。スクリプト自体が量子化できるのはq8_0のみなので、Q4_K_Mのようなレベルが必要な場合は、生成されたファイルに対して続けてllama-quantizeを実行します。出力された.ggufファイルは、llama.cpp、Ollama、LM Studioで直接読み込めます。',
        bullets: [
          '変換前に、変換元モデルはHugging Face形式(safetensorsまたはPyTorchチェックポイント)である必要があります',
          '変換スクリプトが受け付ける出力タイプ: f32、f16、bf16、q8_0、tq1_0、tq2_0、auto(デフォルト。最も忠実度の高い16ビット型を自動選択)',
          'Q4_K_MやQ5_K_Mなどへの量子化は、変換時ではなく、f16またはbf16ファイルを起点にllama-quantizeで行います',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF変換は、Hugging Face形式のモデルの重みとメタデータを読み込み、単一の可搬性の高い.ggufファイルに書き出す処理です',
          '複数の量子化レベルを試す予定がある場合は、まずf16/f32に変換してください。すでに量子化された変換結果からさらに量子化すると、フル精度から量子化するよりも品質の低下が大きくなります',
          '変換時に選ぶ出力タイプによって、ファイルサイズと推論品質の両方が決まります。どちらも同時に良くすることはできません',
          'ほとんどの変換エラーは、変換スクリプト自体ではなく、互換性のない、あるいは不完全な変換元モデルディレクトリに起因します',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'モデルをGGUFに変換するとは、Hugging Face形式の変換元モデルに対してllama.cppの変換スクリプトを実行し、単一の可搬性の高い.ggufファイルを生成することです。' },
          { type: 'plain-terms', text: '簡単に言うと、GGUF変換はモデルのファイル群を1つのファイルにまとめ直し、llama.cpp、Ollama、LM Studioのようなローカルツールが直接読み込めるようにする処理です。' },
        ],
      },
      conversionSteps: {
        id: 'conversion-steps',
        title: '変換プロセス',
        content: [
          '変換には実務上3つのステップがあります。変換元モデルを準備し、出力タイプを指定して変換スクリプトを実行し、フル精度に変換した場合はその後で量子化します。',
        ],
        items: [
          '**1. 変換元モデルを準備する:** 変換スクリプトは、モデルの重みファイル(レガシーなPyTorchの`.bin`チェックポイントよりsafetensors形式が推奨されます)に加えて、設定ファイルとトークナイザーファイルを含むHugging Face形式のディレクトリを想定しています。部分的にダウンロードされた、または手動で組み立てられたディレクトリでトークナイザーファイルが欠けているケースが、変換失敗の最も一般的な原因です。',
          '**2. 出力タイプを指定して変換スクリプトを実行する:** `python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16` はフル精度のGGUFファイルを生成します。事前に、リポジトリの`requirements.txt`にあるPython依存パッケージをインストールしてください。指定できる出力タイプはf32、f16、bf16、q8_0、tq1_0、tq2_0、auto(デフォルト。最も忠実度の高い16ビット型を自動選択)です。一般的な量子化はq8_0のみのため、変換時に量子化するよりも、先にf16またはbf16に変換するほうが細かい制御ができます。',
          '**3. より細かい制御のために別途量子化する(任意だが推奨):** f16またはbf16のGGUFファイルを起点に、`llama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M` を実行して量子化バリアントを生成します。同じフル精度ファイルから他のタイプ(Q5_K_M、Q6_K、Q8_0)でも繰り返せば、変換をやり直すことなく品質とサイズのトレードオフを比較できます。任意の`--imatrix`ファイルを使うと、低ビット幅での精度低下を抑えられる場合があります。',
        ],
      },
      commonErrors: {
        id: 'common-errors',
        title: 'よくある変換エラー',
        content: [
          'ほとんどの変換失敗は少数のカテゴリーに分類でき、そのほとんどはスクリプト自体ではなく変換元モデルに起因します。',
        ],
        items: [
          '**認識されないアーキテクチャ:** 変換スクリプトは対応するモデルアーキテクチャの内部リストを保持しています。非常に新しい、または特殊なアーキテクチャはまだ対応していない場合があります。モデルファイルが壊れていると決めつける前に、ツールの現在のアーキテクチャ一覧を確認してください。',
          '**トークナイザーファイルの不足:** 変換には重みに加えてトークナイザーの設定が必要です。重みファイルのみでトークナイザーファイルがないモデルディレクトリは、変換の途中で失敗します。',
          '**ファイル形式の想定の不一致:** レガシーなPyTorchの`.bin`チェックポイントは、ツールのバージョンによってはsafetensorsへの追加の変換ステップが必要になる場合があります。これを完全に避けるため、あらかじめsafetensors形式で提供されているモデルをダウンロードすることをおすすめします。',
          '**変換中のディスク容量またはRAM不足:** 変換はフル精度のモデルを書き出す前にメモリへ読み込むため、モデルのフル精度サイズとほぼ同じ量のRAMに加えて、変換元ファイルと出力GGUFファイルの両方を同時に置くディスク容量が必要です。',
          '**非対応の`--outtype`:** `convert_hf_to_gguf.py`に`Q4_K_M`などのK-quantタイプを渡すと、無効な選択肢として拒否されます。先にf16またはbf16へ変換し、その結果を`llama-quantize`で量子化してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '変換時に量子化すべきですか、それとも先にフル精度に変換すべきですか?',
            a: '複数の量子化レベルを比較する予定がある場合は、まずフル精度(f16)に変換してください。同じf16ソースから後で別途量子化するほうが、変換時に変換元モデルから直接量子化するよりも正確な結果が得られ、変換ステップを繰り返すことなく複数の量子化バリアントを作成できます。',
          },
          {
            q: '変換が成功したのに、変換済みのGGUFファイルがOllamaやLM Studioで読み込めないのはなぜですか?',
            a: '変換が成功したからといって、読み込みツールがその特定のアーキテクチャやGGUFバージョンに対応しているとは限りません。読み込みツールのバージョンが最新かどうかを確認してください。GGUF形式とアーキテクチャ対応はどちらも進化しており、古いバージョンのツールでは、新しい変換スクリプトで生成されたファイルを認識できないことがあります。',
          },
          {
            q: '変換にはどれくらいのディスク容量が必要ですか?',
            a: '変換元モデルのフルサイズと出力GGUFファイルのサイズを同時に見込んでおいてください。フル精度への変換の場合、処理中はモデルの容量がおおよそ倍になります。量子化された出力ファイルは小さくなりますが、変換が完了するまでは変換元ファイルも存在している必要があります。',
          },
          {
            q: 'すでにファインチューニングされたモデルを変換できますか?',
            a: 'はい。ファインチューニング済みの重みが標準的なHugging Face互換形式で保存されている限り、変換プロセスはベースモデルの場合と同じように機能します。ファインチューニングでLoRAのようなアダプター重みを使用し、フルの重みでない場合は、まずアダプターをベースモデルにマージしてから、マージ後の結果を変換してください。',
          },
          {
            q: 'safetensorsをGGUFに変換するにはどうすればよいですか?',
            a: '.safetensorsの重みファイルに加えてconfig.jsonとトークナイザーファイルがフォルダに揃うよう、モデルのリポジトリ全体をダウンロードし、`python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16` を実行します。スクリプトはsafetensorsを直接読み込むため、中間形式は不要です。ファイルを小さくしたい場合は、結果に`llama-quantize`を実行してください。',
          },
          {
            q: '出力タイプはf16とbf16のどちらを使うべきですか?',
            a: '変換元モデルがbfloat16で公開されている場合はbf16を使うと、その形式の数値範囲を保てます。それ以外では通常f16が選ばれます。デフォルトのautoは最も忠実度の高い16ビット型を自動で選ぶため、`--outtype`を省略しても問題ないことが多いです。',
          },
          {
            q: 'GGUF変換にはどれくらい時間がかかり、費用はいくらですか?',
            a: '変換は無料です。llama.cppはオープンソースで、スクリプトはローカルで動作するため、かかるのはディスク容量とRAMだけです。所要時間は一定ではなく、スクリプトが重みを読み込んで書き直す処理のため、モデルサイズとディスク速度によって変わります。`llama-quantize`による量子化は、それに加わる2回目の処理です。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-zh.webp',
    title: '如何用llama.cpp将模型转换为GGUF格式?',
    seoTitle: '用 llama.cpp 将 safetensors 转换为 GGUF | Prompt Bites',
    metaDescription: '如何用 llama.cpp 将 safetensors 或 Hugging Face 模型转换为 GGUF:convert_hf_to_gguf.py、f16/bf16/q8_0 输出类型、llama-quantize 以及常见错误。',
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '为本地推理将模型转换为GGUF格式的开发者',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>使用 llama.cpp 的 convert_hf_to_gguf.py 脚本将模型转换为 GGUF。该脚本读取源模型的权重和元数据,并将其写入单文件的 GGUF 格式。</strong> 对 Hugging Face 格式的模型目录运行脚本并选择全精度输出类型(f16 或 bf16),可再用 llama-quantize 对结果进行量化,得到的 `.gguf` 文件即可在 llama.cpp、Ollama 或 LM Studio 中加载。',
    quickAnswerTop: {
      zh: {
        question: '如何用llama.cpp将模型转换为GGUF格式?',
        answer: '对 Hugging Face 格式的模型目录运行 llama.cpp 的 convert_hf_to_gguf.py,并指定 f16 或 bf16(全精度)等输出类型。脚本本身只能量化为 q8_0,因此若需要 Q4_K_M 等级别,请在转换后对生成的文件运行 llama-quantize。输出的 .gguf 文件可直接在 llama.cpp、Ollama 或 LM Studio 中加载。',
        bullets: [
          '转换前,源模型必须是Hugging Face格式(safetensors或PyTorch检查点)',
          '转换脚本接受的输出类型:f32、f16、bf16、q8_0、tq1_0、tq2_0 或 auto(默认值,自动选择保真度最高的 16 位类型)',
          '要量化为 Q4_K_M、Q5_K_M 等级别,请从 f16 或 bf16 文件出发使用 llama-quantize,而不是在转换过程中量化',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF转换会读取Hugging Face格式模型的权重和元数据,并将其写入单个可移植的.gguf文件',
          '如果你打算尝试多个量化级别,请先转换为f16/f32——从已经量化过的转换结果再量化,比从全精度量化会损失更多质量',
          '转换时选择的输出类型同时决定了文件大小和推理质量,两者之间没有免费午餐',
          '大多数转换错误可以追溯到不兼容或不完整的源模型目录,而不是转换脚本本身',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '将模型转换为GGUF,是指针对Hugging Face格式的源模型运行llama.cpp的转换脚本,生成一个单独的可移植.gguf文件。' },
          { type: 'plain-terms', text: '通俗地说:GGUF转换会把模型的多个文件重新打包成一个文件,像llama.cpp、Ollama和LM Studio这样的本地工具可以直接加载它。' },
        ],
      },
      conversionSteps: {
        id: 'conversion-steps',
        title: '转换流程',
        content: [
          '转换在实践中分三步:准备源模型,使用指定的输出类型运行转换脚本,如果转换为全精度,之后再进行量化。',
        ],
        items: [
          '**1. 准备源模型:** 转换脚本需要一个Hugging Face格式的目录,其中包含模型的权重文件(相比传统的PyTorch `.bin`检查点,更推荐safetensors),以及配置文件和分词器文件。目录下载不完整或手动拼凑、缺少分词器文件,是导致转换失败的最常见原因。',
          '**2. 指定输出类型并运行转换脚本:** `python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16` 会生成全精度的 GGUF 文件;请先安装仓库 `requirements.txt` 中列出的 Python 依赖。可接受的输出类型有 f32、f16、bf16、q8_0、tq1_0、tq2_0 和 auto(默认值,自动选择保真度最高的 16 位类型)。只有 q8_0 属于常规量化,因此在转换时量化的可控性不如先转换为 f16 或 bf16。',
          '**3. 单独量化以获得更多控制(可选但推荐):** 从 f16 或 bf16 的 GGUF 文件出发,运行 `llama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M` 生成量化版本。可用同一份全精度文件重复生成其他类型(Q5_K_M、Q6_K、Q8_0),无需重新转换即可比较质量与体积的取舍。可选的 `--imatrix` 文件有助于降低低比特宽度下的精度损失。',
        ],
      },
      commonErrors: {
        id: 'common-errors',
        title: '常见转换错误',
        content: [
          '大多数转换失败可以归为几类,几乎都可以追溯到源模型本身,而不是脚本本身的问题。',
        ],
        items: [
          '**无法识别的架构:** 转换脚本维护着一份内部支持的模型架构列表。非常新或不常见的架构可能尚未被支持——在断定模型文件损坏之前,先检查工具当前的架构支持列表。',
          '**缺少分词器文件:** 转换除了权重之外还需要分词器配置。只有权重文件而没有分词器文件的模型目录,会在转换过程中途失败。',
          '**文件格式预期不匹配:** 传统的PyTorch `.bin`检查点有时需要先额外转换为safetensors,具体取决于工具版本——建议优先下载已经以safetensors格式提供的模型,以完全避免这个问题。',
          '**转换过程中磁盘空间或内存不足:** 转换会在写出之前把全精度模型加载到内存中,因此大致需要与模型全精度大小相当的内存,再加上同时容纳源文件和输出GGUF文件所需的磁盘空间。',
          '**不支持的 `--outtype`:** 向 `convert_hf_to_gguf.py` 传入 `Q4_K_M` 或其他 K-quant 类型会因选项无效而被拒绝。请先转换为 f16 或 bf16,再用 `llama-quantize` 对结果进行量化。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '我应该在转换时量化,还是先转换为全精度?',
            a: '如果你打算比较多个量化级别,请先转换为全精度(f16)——之后从同一个f16源单独量化,比在转换时直接从源模型量化得到的结果更准确,并且能让你在不重复转换步骤的情况下生成多个量化版本。',
          },
          {
            q: '转换成功了,为什么转换后的GGUF文件无法在Ollama或LM Studio中加载?',
            a: '转换成功并不保证加载工具支持该特定架构或GGUF版本。请检查你的加载工具版本是否为最新——GGUF格式和架构支持都在不断演进,较旧版本的工具可能无法识别由更新的转换脚本生成的文件。',
          },
          {
            q: '转换需要多少磁盘空间?',
            a: '需要同时预留源模型的完整大小和输出GGUF文件的大小——对于全精度转换,这大致会在过程中使模型的占用空间翻倍。量化后的输出文件更小,但在转换完成之前,源文件仍需保留。',
          },
          {
            q: '我可以转换一个已经微调过的模型吗?',
            a: '可以——只要微调后的权重以标准的、与Hugging Face兼容的格式保存,转换流程在微调模型上的工作方式与在基础模型上完全相同。如果微调使用的是适配器权重(如LoRA)而不是完整权重,请先将适配器合并到基础模型中,再转换合并后的结果。',
          },
          {
            q: '如何将 safetensors 转换为 GGUF?',
            a: '下载完整的模型仓库,使文件夹中包含 .safetensors 权重文件以及 config.json 和分词器文件,然后运行 `python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16`。脚本直接读取 safetensors,无需中间格式。若想得到更小的文件,请对结果运行 `llama-quantize`。',
          },
          {
            q: '输出类型应该选 f16 还是 bf16?',
            a: '如果源模型以 bfloat16 发布,请使用 bf16,它能保留该格式的数值范围;其他情况下通常选择 f16。默认值 auto 会自动选择保真度最高的 16 位类型,因此省略 `--outtype` 往往也可以。',
          },
          {
            q: 'GGUF 转换需要多长时间,费用是多少?',
            a: '转换是免费的:llama.cpp 是开源的,脚本在本地运行,因此只占用磁盘空间和内存。耗时没有固定值——脚本需要读取并重写权重,所以取决于模型大小和磁盘速度;使用 `llama-quantize` 量化则是额外的第二次处理。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-es.webp',
    title: '¿Cómo convertir un modelo a GGUF con llama.cpp?',
    seoTitle: 'Convertir safetensors a GGUF con llama.cpp | Prompt Bites',
    metaDescription: 'Cómo convertir safetensors o un modelo de Hugging Face a GGUF con llama.cpp: convert_hf_to_gguf.py, tipos de salida f16/bf16/q8_0, llama-quantize y errores comunes.',
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores que convierten un modelo a formato GGUF para inferencia local',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Convierte un modelo a GGUF con el script convert_hf_to_gguf.py de llama.cpp, que lee los pesos y los metadatos de un modelo de origen y los escribe en el formato GGUF de un solo archivo.</strong> Ejecuta el script sobre un directorio de modelo en formato Hugging Face con un tipo de salida de precisión completa (f16 o bf16), cuantiza el resultado con llama-quantize si lo necesitas, y el archivo `.gguf` se carga en llama.cpp, Ollama o LM Studio.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo se convierte un modelo a formato GGUF con llama.cpp?',
        answer: 'Ejecuta convert_hf_to_gguf.py de llama.cpp sobre un directorio de modelo en formato Hugging Face con un tipo de salida como f16 o bf16 (precisión completa). El propio script solo cuantiza a q8_0; para niveles como Q4_K_M, ejecuta después llama-quantize sobre el archivo resultante. El archivo .gguf se carga directamente en llama.cpp, Ollama o LM Studio.',
        bullets: [
          'El modelo de origen debe estar en formato Hugging Face (safetensors o checkpoint de PyTorch) antes de la conversión',
          'Tipos de salida que acepta el script de conversión: f32, f16, bf16, q8_0, tq1_0, tq2_0 o auto (valor predeterminado, que elige el tipo de 16 bits de mayor fidelidad)',
          'Cuantiza a Q4_K_M, Q5_K_M y otros niveles con llama-quantize, partiendo del archivo f16 o bf16, no durante la conversión',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La conversión a GGUF lee los pesos y metadatos de un modelo en formato Hugging Face y los escribe en un único archivo .gguf portátil',
          'Convierte primero a f16/f32 si planeas probar varios niveles de cuantización — cuantizar a partir de una conversión ya cuantizada pierde más calidad que cuantizar desde precisión completa',
          'El tipo de salida que elijas al convertir determina tanto el tamaño del archivo como la calidad de inferencia — no hay almuerzo gratis entre ambos',
          'La mayoría de los errores de conversión se deben a un directorio de modelo de origen incompatible o incompleto, no al script de conversión en sí',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Convertir un modelo a GGUF significa ejecutar el script de conversión de llama.cpp sobre un modelo de origen en formato Hugging Face para producir un único archivo .gguf portátil.' },
          { type: 'plain-terms', text: 'En términos simples: la conversión a GGUF reempaqueta los archivos de un modelo en un solo archivo que herramientas locales como llama.cpp, Ollama y LM Studio pueden cargar directamente.' },
        ],
      },
      conversionSteps: {
        id: 'conversion-steps',
        title: 'El proceso de conversión',
        content: [
          'La conversión tiene tres pasos prácticos: preparar el modelo de origen, ejecutar el script de conversión con un tipo de salida y, si convertiste a precisión completa, cuantizar después.',
        ],
        items: [
          '**1. Preparar el modelo de origen:** el script de conversión espera un directorio en formato Hugging Face que contenga los archivos de pesos del modelo (se prefiere safetensors sobre los checkpoints heredados de PyTorch en `.bin`), además de sus archivos de configuración y de tokenizer. Un directorio descargado parcialmente o ensamblado manualmente al que le faltan los archivos de tokenizer es la causa más común de fallos de conversión.',
          '**2. Ejecutar el script de conversión con un tipo de salida:** `python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16` produce un archivo GGUF de precisión completa; instala antes las dependencias de Python del `requirements.txt` del repositorio. Los tipos de salida aceptados son f32, f16, bf16, q8_0, tq1_0, tq2_0 y auto (valor predeterminado, que elige el tipo de 16 bits de mayor fidelidad). Solo q8_0 es una cuantización convencional, así que cuantizar durante la conversión ofrece menos control que convertir primero a f16 o bf16.',
          '**3. Cuantizar por separado para tener más control (opcional pero recomendado):** a partir del archivo GGUF f16 o bf16, ejecuta `llama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M` para producir una variante cuantizada. Repite con otros tipos (Q5_K_M, Q6_K, Q8_0) desde el mismo archivo de precisión completa para comparar el equilibrio entre calidad y tamaño sin repetir la conversión. Un archivo `--imatrix` opcional puede reducir la pérdida de precisión con pocos bits.',
        ],
      },
      commonErrors: {
        id: 'common-errors',
        title: 'Errores de conversión comunes',
        content: [
          'La mayoría de los fallos de conversión se agrupan en unas pocas categorías, casi siempre atribuibles al modelo de origen y no al script en sí.',
        ],
        items: [
          '**Arquitectura no reconocida:** el script de conversión mantiene una lista interna de arquitecturas de modelo compatibles. Una arquitectura muy nueva o poco habitual puede no estar aún soportada — revisa la lista de arquitecturas actual de la herramienta antes de asumir que los archivos del modelo están dañados.',
          '**Faltan archivos de tokenizer:** la conversión necesita la configuración del tokenizer además de los pesos. Un directorio de modelo que solo tenga archivos de pesos y no archivos de tokenizer fallará a mitad de la conversión.',
          '**Expectativas de formato de archivo no coincidentes:** los checkpoints heredados de PyTorch en `.bin` a veces necesitan un paso extra de conversión a safetensors, según la versión de la herramienta — prioriza descargar modelos que ya vengan en formato safetensors para evitar esto por completo.',
          '**Espacio en disco o RAM insuficientes durante la conversión:** la conversión carga el modelo en precisión completa en memoria antes de escribirlo, por lo que necesita aproximadamente la misma RAM que el tamaño en precisión completa del modelo, más el espacio en disco para los archivos de origen y el archivo GGUF de salida al mismo tiempo.',
          '**`--outtype` no admitido:** pasar `Q4_K_M` u otro tipo K-quant a `convert_hf_to_gguf.py` se rechaza como opción no válida. Convierte primero a f16 o bf16 y cuantiza después el resultado con `llama-quantize`.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Debo cuantizar durante la conversión o convertir primero a precisión completa?',
            a: 'Convierte primero a precisión completa (f16) si planeas comparar varios niveles de cuantización — cuantizar por separado después desde esa misma fuente f16 da resultados más precisos que cuantizar directamente desde un modelo de origen durante la conversión, y te permite producir varias variantes cuantizadas sin repetir el paso de conversión.',
          },
          {
            q: '¿Por qué mi archivo GGUF convertido no carga en Ollama o LM Studio aunque la conversión fue exitosa?',
            a: 'Una conversión exitosa no garantiza que la herramienta de carga sea compatible con esa arquitectura o versión de GGUF específica. Comprueba que la versión de tu herramienta de carga esté actualizada — tanto el formato GGUF como el soporte de arquitecturas evolucionan, y una versión de herramienta más antigua puede no reconocer un archivo producido por un script de conversión más reciente.',
          },
          {
            q: '¿Cuánto espacio en disco necesita la conversión?',
            a: 'Calcula el tamaño completo del modelo de origen más el tamaño del archivo GGUF de salida al mismo tiempo — para una conversión en precisión completa, eso aproximadamente duplica el espacio ocupado por el modelo durante el proceso. Los archivos de salida cuantizados son más pequeños, pero necesitas que los archivos de origen sigan presentes hasta que termine la conversión.',
          },
          {
            q: '¿Puedo convertir un modelo que ya ha sido afinado (fine-tuned)?',
            a: 'Sí — el proceso de conversión funciona igual con un modelo afinado que con un modelo base, siempre que los pesos afinados estén guardados en un formato estándar compatible con Hugging Face. Si el ajuste fino usó pesos de adaptador (como LoRA) en lugar de pesos completos, primero fusiona el adaptador con el modelo base y luego convierte el resultado fusionado.',
          },
          {
            q: '¿Cómo convierto safetensors a GGUF?',
            a: 'Descarga el repositorio completo del modelo para que la carpeta contenga los archivos de pesos .safetensors junto con config.json y los archivos del tokenizador, y ejecuta `python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16`. El script lee safetensors directamente, por lo que no hace falta un formato intermedio. Ejecuta `llama-quantize` sobre el resultado si quieres un archivo más pequeño.',
          },
          {
            q: '¿Debo usar f16 o bf16 como tipo de salida?',
            a: 'Usa bf16 cuando el modelo de origen se publicó en bfloat16, porque conserva el rango numérico de ese formato; f16 es la opción habitual en los demás casos. El valor predeterminado, auto, elige por ti el tipo de 16 bits de mayor fidelidad, así que omitir `--outtype` suele ser suficiente.',
          },
          {
            q: '¿Cuánto tarda la conversión a GGUF y cuánto cuesta?',
            a: 'La conversión es gratuita: llama.cpp es de código abierto y el script se ejecuta en local, por lo que los únicos costes son el espacio en disco y la RAM. No hay una duración fija: el script lee y reescribe los pesos, así que el tiempo depende del tamaño del modelo y de la velocidad del disco; cuantizar con `llama-quantize` es una segunda pasada adicional.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-pt.webp',
    title: 'Como converter um modelo para GGUF com o llama.cpp?',
    seoTitle: 'Converter safetensors para GGUF com llama.cpp | Prompt Bites',
    metaDescription: 'Como converter safetensors ou um modelo do Hugging Face para GGUF com o llama.cpp: convert_hf_to_gguf.py, tipos de saída f16/bf16/q8_0, llama-quantize e erros comuns.',
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores convertendo um modelo para o formato GGUF para inferência local',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Converta um modelo para GGUF com o script convert_hf_to_gguf.py do llama.cpp, que lê os pesos e os metadados de um modelo de origem e os grava no formato GGUF de arquivo único.</strong> Execute o script em um diretório de modelo no formato Hugging Face com um tipo de saída de precisão total (f16 ou bf16), quantize o resultado com o llama-quantize se quiser, e o arquivo `.gguf` carrega no llama.cpp, no Ollama ou no LM Studio.',
    quickAnswerTop: {
      pt: {
        question: 'Como converter um modelo para o formato GGUF com o llama.cpp?',
        answer: 'Execute o convert_hf_to_gguf.py do llama.cpp em um diretório de modelo no formato Hugging Face com um tipo de saída como f16 ou bf16 (precisão total). O próprio script só quantiza para q8_0; para níveis como Q4_K_M, execute o llama-quantize no arquivo gerado em seguida. O arquivo .gguf carrega diretamente no llama.cpp, no Ollama ou no LM Studio.',
        bullets: [
          'O modelo de origem precisa estar no formato Hugging Face (safetensors ou checkpoint do PyTorch) antes da conversão',
          'Tipos de saída aceitos pelo script de conversão: f32, f16, bf16, q8_0, tq1_0, tq2_0 ou auto (padrão, que escolhe o tipo de 16 bits de maior fidelidade)',
          'Quantize para Q4_K_M, Q5_K_M e outros níveis com o llama-quantize, partindo do arquivo f16 ou bf16 — não durante a conversão',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A conversão para GGUF lê os pesos e metadados de um modelo no formato Hugging Face e os grava em um único arquivo .gguf portátil',
          'Converta primeiro para f16/f32 se planeja testar vários níveis de quantização — quantizar a partir de uma conversão já quantizada perde mais qualidade do que quantizar a partir da precisão total',
          'O tipo de saída escolhido no momento da conversão determina tanto o tamanho do arquivo quanto a qualidade da inferência — não existe almoço grátis entre os dois',
          'A maioria dos erros de conversão está relacionada a um diretório de modelo de origem incompatível ou incompleto, não ao script de conversão em si',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Converter um modelo para GGUF significa executar o script de conversão do llama.cpp em um modelo de origem no formato Hugging Face para produzir um único arquivo .gguf portátil.' },
          { type: 'plain-terms', text: 'Em termos simples: a conversão para GGUF reempacota os arquivos de um modelo em um único arquivo que ferramentas locais como llama.cpp, Ollama e LM Studio conseguem carregar diretamente.' },
        ],
      },
      conversionSteps: {
        id: 'conversion-steps',
        title: 'O processo de conversão',
        content: [
          'A conversão tem três etapas práticas: preparar o modelo de origem, executar o script de conversão com um tipo de saída e — se você converteu para precisão total — quantizar depois.',
        ],
        items: [
          '**1. Preparar o modelo de origem:** o script de conversão espera um diretório no formato Hugging Face contendo os arquivos de pesos do modelo (safetensors é preferido em relação aos checkpoints legados do PyTorch em `.bin`), além dos arquivos de configuração e de tokenizer. Um diretório baixado parcialmente ou montado manualmente que não tenha os arquivos de tokenizer é a causa mais comum de falhas de conversão.',
          '**2. Executar o script de conversão com um tipo de saída:** `python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16` produz um arquivo GGUF de precisão total; instale antes as dependências Python do `requirements.txt` do repositório. Os tipos de saída aceitos são f32, f16, bf16, q8_0, tq1_0, tq2_0 e auto (padrão, que escolhe o tipo de 16 bits de maior fidelidade). Apenas q8_0 é uma quantização convencional, então quantizar durante a conversão dá menos controle do que converter primeiro para f16 ou bf16.',
          '**3. Quantizar separadamente para ter mais controle (opcional, mas recomendado):** a partir do arquivo GGUF f16 ou bf16, execute `llama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M` para produzir uma variante quantizada. Repita com outros tipos (Q5_K_M, Q6_K, Q8_0) a partir do mesmo arquivo de precisão total para comparar o equilíbrio entre qualidade e tamanho sem refazer a conversão. Um arquivo `--imatrix` opcional pode reduzir a perda de precisão em larguras de bits baixas.',
        ],
      },
      commonErrors: {
        id: 'common-errors',
        title: 'Erros comuns de conversão',
        content: [
          'A maioria das falhas de conversão se encaixa em poucas categorias, quase sempre relacionadas ao modelo de origem, e não ao script em si.',
        ],
        items: [
          '**Arquitetura não reconhecida:** o script de conversão mantém uma lista interna de arquiteturas de modelo suportadas. Uma arquitetura muito nova ou incomum pode ainda não ser suportada — verifique a lista de arquiteturas atual da ferramenta antes de supor que os arquivos do modelo estão corrompidos.',
          '**Arquivos de tokenizer ausentes:** a conversão precisa da configuração do tokenizer além dos pesos. Um diretório de modelo com apenas arquivos de pesos e sem arquivos de tokenizer falhará no meio da conversão.',
          '**Expectativas de formato de arquivo incompatíveis:** checkpoints legados do PyTorch em `.bin` às vezes precisam de uma etapa extra de conversão para safetensors, dependendo da versão da ferramenta — prefira baixar modelos que já venham no formato safetensors para evitar isso completamente.',
          '**Espaço em disco ou RAM insuficientes durante a conversão:** a conversão carrega o modelo em precisão total na memória antes de gravá-lo, portanto precisa de aproximadamente a mesma quantidade de RAM que o tamanho do modelo em precisão total, além do espaço em disco para os arquivos de origem e o arquivo GGUF de saída simultaneamente.',
          '**`--outtype` não suportado:** passar `Q4_K_M` ou outro tipo K-quant para o `convert_hf_to_gguf.py` é rejeitado como escolha inválida. Converta primeiro para f16 ou bf16 e depois quantize o resultado com o `llama-quantize`.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Devo quantizar durante a conversão ou converter primeiro para precisão total?',
            a: 'Converta primeiro para precisão total (f16) se planeja comparar vários níveis de quantização — quantizar separadamente depois a partir da mesma fonte f16 dá resultados mais precisos do que quantizar diretamente a partir de um modelo de origem durante a conversão, e permite produzir várias variantes quantizadas sem repetir a etapa de conversão.',
          },
          {
            q: 'Por que meu arquivo GGUF convertido não carrega no Ollama ou no LM Studio mesmo com a conversão bem-sucedida?',
            a: 'Uma conversão bem-sucedida não garante que a ferramenta de carregamento suporte aquela arquitetura ou versão específica do GGUF. Verifique se a versão da sua ferramenta de carregamento está atualizada — tanto o formato GGUF quanto o suporte a arquiteturas evoluem, e uma versão mais antiga da ferramenta pode não reconhecer um arquivo produzido por um script de conversão mais recente.',
          },
          {
            q: 'Quanto espaço em disco a conversão precisa?',
            a: 'Reserve o tamanho total do modelo de origem mais o tamanho do arquivo GGUF de saída simultaneamente — para uma conversão em precisão total, isso praticamente dobra o espaço ocupado pelo modelo durante o processo. Os arquivos de saída quantizados são menores, mas os arquivos de origem precisam permanecer presentes até a conversão terminar.',
          },
          {
            q: 'Posso converter um modelo que já passou por fine-tuning?',
            a: 'Sim — o processo de conversão funciona da mesma forma em um modelo ajustado (fine-tuned) e em um modelo base, desde que os pesos ajustados estejam salvos em um formato padrão compatível com o Hugging Face. Se o fine-tuning usou pesos de adaptador (como LoRA) em vez de pesos completos, mescle primeiro o adaptador ao modelo base e depois converta o resultado mesclado.',
          },
          {
            q: 'Como converto safetensors para GGUF?',
            a: 'Baixe o repositório completo do modelo para que a pasta contenha os arquivos de pesos .safetensors junto com o config.json e os arquivos do tokenizador, e então execute `python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16`. O script lê safetensors diretamente, então não é preciso um formato intermediário. Execute o `llama-quantize` no resultado se quiser um arquivo menor.',
          },
          {
            q: 'Devo usar f16 ou bf16 como tipo de saída?',
            a: 'Use bf16 quando o modelo de origem foi publicado em bfloat16, pois ele preserva o intervalo numérico desse formato; f16 é a escolha usual nos demais casos. O padrão, auto, escolhe por você o tipo de 16 bits de maior fidelidade, então omitir `--outtype` costuma ser suficiente.',
          },
          {
            q: 'Quanto tempo leva a conversão para GGUF e quanto ela custa?',
            a: 'A conversão é gratuita: o llama.cpp é de código aberto e o script roda localmente, então os únicos custos são espaço em disco e RAM. Não há duração fixa — o script lê e reescreve os pesos, então o tempo depende do tamanho do modelo e da velocidade do disco; quantizar com o `llama-quantize` é uma segunda passagem adicional.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-ar.webp',
    title: 'كيف تحوّل نموذجًا إلى صيغة GGUF باستخدام llama.cpp؟',
    seoTitle: 'تحويل safetensors إلى GGUF باستخدام llama.cpp | Prompt Bites',
    metaDescription: 'كيف تحوّل safetensors أو نموذج Hugging Face إلى GGUF باستخدام llama.cpp: convert_hf_to_gguf.py وأنواع الإخراج f16/bf16/q8_0 وllama-quantize والأخطاء الشائعة.',
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يحوّلون نموذجًا إلى صيغة GGUF للاستدلال المحلي',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>حوّل نموذجًا إلى GGUF باستخدام سكربت convert_hf_to_gguf.py في llama.cpp، الذي يقرأ أوزان النموذج المصدر وبياناته الوصفية ويكتبها في صيغة GGUF ذات الملف الواحد.</strong> شغّل السكربت على مجلد نموذج بصيغة Hugging Face مع نوع إخراج كامل الدقة (f16 أو bf16)، ثم كمِّم الناتج عند الحاجة باستخدام llama-quantize، فيُحمَّل ملف `.gguf` في llama.cpp أو Ollama أو LM Studio.',
    quickAnswerTop: {
      ar: {
        question: 'كيف تحوّل نموذجًا إلى صيغة GGUF باستخدام llama.cpp؟',
        answer: 'شغّل convert_hf_to_gguf.py من llama.cpp على مجلد نموذج بصيغة Hugging Face مع نوع إخراج مثل f16 أو bf16 (دقة كاملة). السكربت نفسه لا يكمّم إلا إلى q8_0، لذا لمستويات مثل Q4_K_M شغّل llama-quantize على الملف الناتج بعد ذلك. يُحمَّل ملف .gguf الناتج مباشرة في llama.cpp أو Ollama أو LM Studio.',
        bullets: [
          'يجب أن يكون النموذج المصدر بصيغة Hugging Face (safetensors أو نقطة تفتيش PyTorch) قبل التحويل',
          'أنواع الإخراج التي يقبلها سكربت التحويل: f32 وf16 وbf16 وq8_0 وtq1_0 وtq2_0 أو auto (الافتراضي، ويختار نوع 16 بت الأعلى دقة)',
          'كمِّم إلى Q4_K_M وQ5_K_M ومستويات أخرى باستخدام llama-quantize انطلاقًا من ملف f16 أو bf16، لا أثناء التحويل',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'يقرأ التحويل إلى GGUF أوزان وبيانات وصفية نموذج بصيغة Hugging Face ويكتبها في ملف .gguf واحد قابل للنقل',
          'حوّل أولًا إلى f16/f32 إذا كنت تخطط لتجربة عدة مستويات تكميم — فالتكميم من تحويل مُكمَّم بالفعل يفقد جودة أكبر من التكميم من الدقة الكاملة',
          'يحدد نوع الإخراج الذي تختاره وقت التحويل حجم الملف وجودة الاستدلال معًا — لا توجد وجبة مجانية بينهما',
          'تعود معظم أخطاء التحويل إلى دليل نموذج مصدر غير متوافق أو غير مكتمل، وليس إلى نص التحويل البرمجي نفسه',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'تحويل نموذج إلى GGUF يعني تشغيل نص التحويل البرمجي لـ llama.cpp على نموذج مصدر بصيغة Hugging Face لإنتاج ملف .gguf واحد قابل للنقل.' },
          { type: 'plain-terms', text: 'بعبارة بسيطة: يعيد تحويل GGUF تعبئة ملفات النموذج في ملف واحد يمكن لأدوات محلية مثل llama.cpp وOllama وLM Studio تحميله مباشرة.' },
        ],
      },
      conversionSteps: {
        id: 'conversion-steps',
        title: 'عملية التحويل',
        content: [
          'يتكون التحويل من ثلاث خطوات عملية: تحضير النموذج المصدر، تشغيل نص التحويل البرمجي بنوع إخراج محدد، ثم — إن حوّلت إلى الدقة الكاملة — التكميم لاحقًا.',
        ],
        items: [
          '**1. تحضير النموذج المصدر:** يتوقع نص التحويل البرمجي دليلًا بصيغة Hugging Face يحتوي على ملفات أوزان النموذج (تُفضَّل صيغة safetensors على نقاط تفتيش PyTorch القديمة بامتداد `.bin`) بالإضافة إلى ملفات الإعداد والمُجزِّئ اللغوي (tokenizer). الدليل المُنزَّل جزئيًا أو المُجمَّع يدويًا والذي تنقصه ملفات المُجزِّئ اللغوي هو السبب الأكثر شيوعًا لفشل التحويل.',
          '**2. تشغيل سكربت التحويل مع نوع إخراج:** الأمر `python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16` ينتج ملف GGUF كامل الدقة؛ ثبّت أولًا اعتماديات Python الواردة في ملف `requirements.txt` الخاص بالمستودع. أنواع الإخراج المقبولة هي f32 وf16 وbf16 وq8_0 وtq1_0 وtq2_0 وauto (الافتراضي، ويختار نوع 16 بت الأعلى دقة). وحده q8_0 تكميم تقليدي، لذا فالتكميم أثناء التحويل يمنحك تحكمًا أقل من التحويل إلى f16 أو bf16 أولًا.',
          '**3. التكميم بشكل منفصل لتحكم أكبر (اختياري لكنه موصى به):** انطلاقًا من ملف GGUF بصيغة f16 أو bf16، شغّل `llama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M` لإنتاج نسخة مكمّمة. كرّر ذلك بأنواع أخرى (Q5_K_M وQ6_K وQ8_0) من الملف كامل الدقة نفسه لمقارنة المفاضلة بين الجودة والحجم دون إعادة التحويل. ويمكن لملف `--imatrix` الاختياري أن يقلل فقدان الدقة عند عروض البت المنخفضة.',
        ],
      },
      commonErrors: {
        id: 'common-errors',
        title: 'أخطاء التحويل الشائعة',
        content: [
          'تقع معظم أخطاء التحويل ضمن عدد قليل من الفئات، وتعود دائمًا تقريبًا إلى النموذج المصدر وليس إلى النص البرمجي نفسه.',
        ],
        items: [
          '**بنية غير معروفة:** يحتفظ نص التحويل البرمجي بقائمة داخلية لبنى النماذج المدعومة. قد لا تكون البنية الجديدة جدًا أو غير الشائعة مدعومة بعد — تحقق من قائمة البنى الحالية للأداة قبل افتراض أن ملفات النموذج تالفة.',
          '**ملفات المُجزِّئ اللغوي مفقودة:** يحتاج التحويل إلى إعدادات المُجزِّئ اللغوي إلى جانب الأوزان. دليل نموذج يحتوي على ملفات الأوزان فقط دون ملفات المُجزِّئ اللغوي سيفشل في منتصف التحويل.',
          '**عدم تطابق توقعات صيغة الملف:** تحتاج نقاط تفتيش PyTorch القديمة بامتداد `.bin` أحيانًا إلى خطوة تحويل إضافية إلى safetensors، حسب إصدار الأداة — يُفضَّل تنزيل النماذج التي تُقدَّم بالفعل بصيغة safetensors لتجنب ذلك تمامًا.',
          '**مساحة قرص أو ذاكرة وصول عشوائي غير كافية أثناء التحويل:** يحمّل التحويل النموذج بدقة كاملة في الذاكرة قبل كتابته، لذا فهو يحتاج تقريبًا إلى نفس مقدار الذاكرة الذي يعادل حجم النموذج بدقة كاملة، بالإضافة إلى مساحة القرص اللازمة للملفات المصدر وملف GGUF الناتج في وقت واحد.',
          '**قيمة `--outtype` غير مدعومة:** تمرير `Q4_K_M` أو أي نوع K-quant آخر إلى `convert_hf_to_gguf.py` يُرفض بوصفه خيارًا غير صالح. حوّل أولًا إلى f16 أو bf16، ثم كمِّم الناتج باستخدام `llama-quantize`.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يجب أن أُكمِّم أثناء التحويل أم أحوّل إلى الدقة الكاملة أولًا؟',
            a: 'حوّل إلى الدقة الكاملة (f16) أولًا إذا كنت تخطط لمقارنة عدة مستويات تكميم — فالتكميم بشكل منفصل لاحقًا من المصدر f16 نفسه يعطي نتائج أدق من التكميم مباشرة من نموذج مصدر أثناء التحويل، ويتيح لك إنتاج عدة نسخ مكممة دون تكرار خطوة التحويل.',
          },
          {
            q: 'لماذا يفشل ملف GGUF المُحوَّل في التحميل على Ollama أو LM Studio رغم نجاح التحويل؟',
            a: 'نجاح التحويل لا يضمن أن أداة التحميل تدعم تلك البنية أو إصدار GGUF المحدد. تحقق من أن إصدار أداة التحميل لديك محدَّث — فصيغة GGUF ودعم البنى يتطوران معًا، وقد لا يتعرف إصدار أقدم من الأداة على ملف أنتجه نص تحويل برمجي أحدث.',
          },
          {
            q: 'كم مساحة قرص يحتاجها التحويل؟',
            a: 'خصص مساحة تعادل الحجم الكامل للنموذج المصدر بالإضافة إلى حجم ملف GGUF الناتج في الوقت نفسه — بالنسبة للتحويل بدقة كاملة، يضاعف ذلك تقريبًا المساحة التي يشغلها النموذج أثناء العملية. ملفات الإخراج المكممة أصغر حجمًا، لكنك تحتاج إلى بقاء الملفات المصدر موجودة حتى انتهاء التحويل.',
          },
          {
            q: 'هل يمكنني تحويل نموذج خضع بالفعل لضبط دقيق (fine-tuning)؟',
            a: 'نعم — تعمل عملية التحويل بنفس الطريقة على نموذج خضع لضبط دقيق كما تعمل على نموذج أساسي، طالما أن الأوزان المضبوطة محفوظة بصيغة قياسية متوافقة مع Hugging Face. إذا استخدم الضبط الدقيق أوزان محول (adapter) مثل LoRA بدلًا من الأوزان الكاملة، فادمج المحول مع النموذج الأساسي أولًا، ثم حوّل النتيجة المدمجة.',
          },
          {
            q: 'كيف أحوّل safetensors إلى GGUF؟',
            a: 'نزّل مستودع النموذج كاملًا بحيث يحتوي المجلد على ملفات الأوزان .safetensors إضافة إلى config.json وملفات المحلّل اللغوي (tokenizer)، ثم شغّل `python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16`. يقرأ السكربت safetensors مباشرة، فلا حاجة إلى صيغة وسيطة. شغّل `llama-quantize` على الناتج إذا أردت ملفًا أصغر.',
          },
          {
            q: 'هل أستخدم f16 أم bf16 نوعًا للإخراج؟',
            a: 'استخدم bf16 عندما يكون النموذج المصدر منشورًا بصيغة bfloat16 لأنه يحافظ على المدى العددي لتلك الصيغة؛ أما في غير ذلك فـ f16 هو الخيار المعتاد. القيمة الافتراضية auto تختار لك نوع 16 بت الأعلى دقة، لذا فحذف `--outtype` كثيرًا ما يكفي.',
          },
          {
            q: 'كم تستغرق عملية التحويل إلى GGUF وكم تكلّف؟',
            a: 'التحويل مجاني: llama.cpp مفتوح المصدر والسكربت يعمل محليًا، فلا تتحمل سوى مساحة القرص والذاكرة العشوائية. لا توجد مدة ثابتة — فالسكربت يقرأ الأوزان ويعيد كتابتها، لذا يعتمد الوقت على حجم النموذج وسرعة القرص؛ أما التكميم باستخدام `llama-quantize` فمرحلة ثانية إضافية.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-ko.webp',
    title: 'llama.cpp로 모델을 GGUF로 변환하는 방법은 무엇입니까?',
    seoTitle: 'llama.cpp로 safetensors를 GGUF로 변환 | Prompt Bites',
    metaDescription: 'llama.cpp로 safetensors 또는 Hugging Face 모델을 GGUF로 변환하는 방법: convert_hf_to_gguf.py, f16/bf16/q8_0 출력 유형, llama-quantize, 흔한 오류.',
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '로컬 추론을 위해 모델을 GGUF 형식으로 변환하는 개발자',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>llama.cpp의 convert_hf_to_gguf.py 스크립트로 모델을 GGUF로 변환합니다. 이 스크립트는 원본 모델의 가중치와 메타데이터를 읽어 단일 파일 형식인 GGUF로 기록합니다.</strong> Hugging Face 형식의 모델 디렉터리에 전체 정밀도 출력 유형(f16 또는 bf16)으로 스크립트를 실행하고, 필요하면 결과를 llama-quantize로 양자화하면 llama.cpp, Ollama, LM Studio에서 불러올 수 있는 `.gguf` 파일이 만들어집니다.',
    quickAnswerTop: {
      ko: {
        question: 'llama.cpp로 모델을 GGUF 형식으로 변환하는 방법은 무엇입니까?',
        answer: 'Hugging Face 형식의 모델 디렉터리에 대해 llama.cpp의 convert_hf_to_gguf.py를 f16 또는 bf16(전체 정밀도) 같은 출력 유형으로 실행합니다. 스크립트 자체가 양자화할 수 있는 것은 q8_0뿐이므로, Q4_K_M 같은 수준이 필요하면 생성된 파일에 이어서 llama-quantize를 실행합니다. 출력된 .gguf 파일은 llama.cpp, Ollama, LM Studio에서 바로 불러올 수 있습니다.',
        bullets: [
          '변환 전에 원본 모델은 Hugging Face 형식(safetensors 또는 PyTorch 체크포인트)이어야 합니다',
          '변환 스크립트가 허용하는 출력 유형: f32, f16, bf16, q8_0, tq1_0, tq2_0 또는 auto(기본값, 충실도가 가장 높은 16비트 유형을 자동 선택)',
          'Q4_K_M, Q5_K_M 등으로의 양자화는 변환 중이 아니라 f16 또는 bf16 파일에서 시작해 llama-quantize로 수행합니다',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF 변환은 Hugging Face 형식 모델의 가중치와 메타데이터를 읽어 이식성이 높은 단일 .gguf 파일로 기록하는 작업입니다',
          '여러 양자화 수준을 시도할 계획이라면 먼저 f16/f32로 변환하십시오. 이미 양자화된 변환 결과에서 다시 양자화하면 완전 정밀도에서 양자화하는 것보다 품질 손실이 더 큽니다',
          '변환 시 선택한 출력 유형이 파일 크기와 추론 품질을 동시에 결정합니다. 둘 다 얻을 수는 없습니다',
          '대부분의 변환 오류는 변환 스크립트 자체보다는 호환되지 않거나 불완전한 원본 모델 디렉터리에서 비롯됩니다',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '모델을 GGUF로 변환한다는 것은 Hugging Face 형식의 원본 모델에 대해 llama.cpp의 변환 스크립트를 실행하여 이식성이 높은 단일 .gguf 파일을 생성하는 것을 의미합니다.' },
          { type: 'plain-terms', text: '쉽게 말해, GGUF 변환은 모델의 여러 파일을 하나의 파일로 다시 묶어, llama.cpp, Ollama, LM Studio 같은 로컬 도구가 바로 불러올 수 있게 하는 작업입니다.' },
        ],
      },
      conversionSteps: {
        id: 'conversion-steps',
        title: '변환 과정',
        content: [
          '변환은 실무적으로 세 단계로 이루어집니다. 원본 모델을 준비하고, 출력 유형을 지정해 변환 스크립트를 실행하고, 완전 정밀도로 변환했다면 이후 양자화를 진행합니다.',
        ],
        items: [
          '**1. 원본 모델 준비:** 변환 스크립트는 모델의 가중치 파일(레거시 PyTorch `.bin` 체크포인트보다 safetensors 형식이 선호됨)과 설정 및 토크나이저 파일이 포함된 Hugging Face 형식 디렉터리를 필요로 합니다. 부분적으로 다운로드되었거나 수동으로 구성한 디렉터리에 토크나이저 파일이 빠져 있는 경우가 변환 실패의 가장 흔한 원인입니다.',
          '**2. 출력 유형을 지정해 변환 스크립트 실행:** `python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16`은 전체 정밀도 GGUF 파일을 생성합니다. 먼저 저장소의 `requirements.txt`에 있는 Python 의존성을 설치하세요. 허용되는 출력 유형은 f32, f16, bf16, q8_0, tq1_0, tq2_0, auto(기본값, 충실도가 가장 높은 16비트 유형을 자동 선택)입니다. 일반적인 양자화는 q8_0뿐이므로, 변환 중에 양자화하면 먼저 f16 또는 bf16으로 변환하는 것보다 제어 폭이 좁아집니다.',
          '**3. 더 세밀한 제어를 위해 따로 양자화(선택 사항이지만 권장):** f16 또는 bf16 GGUF 파일에서 시작해 `llama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M`를 실행하면 양자화된 변형이 만들어집니다. 같은 전체 정밀도 파일에서 다른 유형(Q5_K_M, Q6_K, Q8_0)으로도 반복하면 변환을 다시 하지 않고도 품질과 크기의 트레이드오프를 비교할 수 있습니다. 선택 사항인 `--imatrix` 파일은 낮은 비트 폭에서의 정확도 손실을 줄이는 데 도움이 될 수 있습니다.',
        ],
      },
      commonErrors: {
        id: 'common-errors',
        title: '자주 발생하는 변환 오류',
        content: [
          '대부분의 변환 실패는 몇 가지 범주로 나뉘며, 거의 항상 스크립트 자체가 아니라 원본 모델에서 원인을 찾을 수 있습니다.',
        ],
        items: [
          '**인식되지 않는 아키텍처:** 변환 스크립트는 지원되는 모델 아키텍처의 내부 목록을 유지합니다. 매우 새롭거나 흔치 않은 아키텍처는 아직 지원되지 않을 수 있습니다. 모델 파일이 손상되었다고 단정하기 전에 도구의 현재 아키텍처 목록을 먼저 확인하십시오.',
          '**토크나이저 파일 누락:** 변환에는 가중치 외에 토크나이저 설정도 필요합니다. 가중치 파일만 있고 토크나이저 파일이 없는 모델 디렉터리는 변환 도중에 실패합니다.',
          '**파일 형식 불일치:** 레거시 PyTorch `.bin` 체크포인트는 도구 버전에 따라 safetensors로 변환하는 추가 단계가 필요할 수 있습니다. 이를 완전히 피하려면 이미 safetensors 형식으로 제공되는 모델을 다운로드하는 것이 좋습니다.',
          '**변환 중 디스크 공간 또는 메모리 부족:** 변환은 기록하기 전에 완전 정밀도 모델을 메모리에 로드하므로, 모델의 완전 정밀도 크기에 해당하는 메모리와 함께 원본 파일과 출력 GGUF 파일을 동시에 담을 디스크 공간이 필요합니다.',
          '**지원되지 않는 `--outtype`:** `convert_hf_to_gguf.py`에 `Q4_K_M` 같은 K-quant 유형을 전달하면 잘못된 선택지로 거부됩니다. 먼저 f16 또는 bf16으로 변환한 다음 결과를 `llama-quantize`로 양자화하세요.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '변환 중에 양자화해야 합니까, 아니면 먼저 완전 정밀도로 변환해야 합니까?',
            a: '여러 양자화 수준을 비교할 계획이라면 먼저 완전 정밀도(f16)로 변환하십시오. 동일한 f16 소스에서 나중에 별도로 양자화하는 방식이 변환 중에 원본 모델에서 직접 양자화하는 것보다 더 정확한 결과를 제공하며, 변환 단계를 반복하지 않고도 여러 양자화 버전을 만들 수 있습니다.',
          },
          {
            q: '변환은 성공했는데 변환된 GGUF 파일이 Ollama나 LM Studio에서 로드되지 않는 이유는 무엇입니까?',
            a: '변환이 성공했다고 해서 로드 도구가 해당 아키텍처나 GGUF 버전을 지원한다는 보장은 없습니다. 로드 도구의 버전이 최신인지 확인하십시오. GGUF 형식과 아키텍처 지원은 계속 발전하므로, 오래된 버전의 도구는 더 최신 변환 스크립트로 생성된 파일을 인식하지 못할 수 있습니다.',
          },
          {
            q: '변환에는 디스크 공간이 얼마나 필요합니까?',
            a: '원본 모델의 전체 크기와 출력 GGUF 파일의 크기를 동시에 확보해야 합니다. 완전 정밀도 변환의 경우, 진행 중에는 모델이 차지하는 공간이 대략 두 배가 됩니다. 양자화된 출력 파일은 더 작지만, 변환이 끝날 때까지는 원본 파일도 유지되어야 합니다.',
          },
          {
            q: '이미 파인튜닝된 모델도 변환할 수 있습니까?',
            a: '가능합니다. 파인튜닝된 가중치가 Hugging Face와 호환되는 표준 형식으로 저장되어 있다면, 변환 과정은 베이스 모델과 동일하게 파인튜닝된 모델에도 적용됩니다. 파인튜닝에 LoRA와 같은 어댑터 가중치를 사용하고 전체 가중치를 사용하지 않았다면, 먼저 어댑터를 베이스 모델에 병합한 다음 병합된 결과를 변환하십시오.',
          },
          {
            q: 'safetensors를 GGUF로 변환하려면 어떻게 하나요?',
            a: '폴더에 .safetensors 가중치 파일과 config.json, 토크나이저 파일이 모두 들어 있도록 모델 저장소 전체를 내려받은 뒤 `python convert_hf_to_gguf.py <model-dir> --outfile model-f16.gguf --outtype f16`를 실행합니다. 스크립트가 safetensors를 직접 읽으므로 중간 형식이 필요 없습니다. 더 작은 파일이 필요하면 결과에 `llama-quantize`를 실행하세요.',
          },
          {
            q: '출력 유형으로 f16과 bf16 중 무엇을 써야 하나요?',
            a: '원본 모델이 bfloat16으로 공개되었다면 해당 형식의 수치 범위를 유지하는 bf16을 사용하고, 그 외에는 보통 f16을 선택합니다. 기본값 auto는 충실도가 가장 높은 16비트 유형을 알아서 고르므로 `--outtype`을 생략해도 괜찮은 경우가 많습니다.',
          },
          {
            q: 'GGUF 변환에는 시간이 얼마나 걸리고 비용은 얼마인가요?',
            a: '변환은 무료입니다. llama.cpp는 오픈 소스이고 스크립트는 로컬에서 실행되므로 드는 것은 디스크 공간과 RAM뿐입니다. 정해진 소요 시간은 없습니다. 스크립트가 가중치를 읽고 다시 쓰기 때문에 모델 크기와 디스크 속도에 따라 달라지며, `llama-quantize`로 양자화하는 것은 그 위에 더해지는 두 번째 단계입니다.',
          },
        ],
      },
    },
  },
}

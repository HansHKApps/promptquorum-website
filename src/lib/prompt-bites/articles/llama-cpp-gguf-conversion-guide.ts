import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-en.webp',
    title: 'How Do You Convert a Model to GGUF With llama.cpp?',
    seoTitle: 'GGUF Conversion Guide with llama.cpp | Prompt Bites',
    metaDescription: 'How to convert a Hugging Face model to GGUF format using llama.cpp: the conversion script, output precision options, quantizing afterward, and common conversion errors.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers converting a model to GGUF format for local inference',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Convert a model to GGUF with llama.cpp\'s conversion script, which reads a source model\'s weights and metadata and writes them into the single-file GGUF format.</strong> Run the script against a Hugging Face-format model directory, choose an output type (full precision or a quantization level), and the result is a `.gguf` file ready to load with llama.cpp, Ollama, or LM Studio.',
    quickAnswerTop: {
      en: {
        question: 'How do you convert a model to GGUF format with llama.cpp?',
        answer: 'Run llama.cpp\'s conversion script against a Hugging Face-format model directory, specifying an output type such as f16 (full precision) or a quantized format like q4_k_m. The script reads the model\'s weights and config, writes them into a single .gguf file, and that file can be loaded directly by llama.cpp, Ollama, or LM Studio.',
        bullets: [
          'Source model must be in Hugging Face format (safetensors or PyTorch checkpoint) before conversion',
          'Choose an output type: f16/f32 for full precision, or a quantized type to convert and shrink in one step',
          'Quantizing separately after an f16 conversion gives more control than quantizing during conversion',
        ],
        updatedDate: '2026-07',
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
          '**2. Run the conversion script with an output type:** `python convert_hf_to_gguf.py <model-dir> --outtype f16` produces a full-precision GGUF file. Passing a quantized `--outtype` (e.g. `q8_0`) quantizes during conversion in one step, but gives you less control than converting to f16 first and quantizing separately afterward with a dedicated quantization tool.',
          '**3. Quantize separately for more control (optional but recommended):** starting from an f16 GGUF file, run llama.cpp\'s quantization tool to produce multiple quantized variants (e.g. q4_k_m, q5_k_m) from the same full-precision source, letting you compare quality/size tradeoffs without re-running the conversion each time.',
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
        ],
      },
    },
  },
  de: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-de.webp',
    title: 'Wie konvertiert man ein Modell mit llama.cpp in GGUF?',
    seoTitle: 'GGUF-Konvertierung mit llama.cpp erklärt | Prompt Bites',
    metaDescription: 'So konvertieren Sie ein Hugging-Face-Modell mit llama.cpp in das GGUF-Format: das Konvertierungsskript, Optionen für die Ausgabepräzision, anschließendes Quantisieren und häufige Konvertierungsfehler.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die ein Modell für lokale Inferenz ins GGUF-Format konvertieren',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Konvertieren Sie ein Modell mit dem Konvertierungsskript von llama.cpp ins GGUF-Format. Es liest die Gewichte und Metadaten eines Quellmodells ein und schreibt sie in das einzeldateibasierte GGUF-Format.</strong> Führen Sie das Skript gegen ein Modellverzeichnis im Hugging-Face-Format aus, wählen Sie einen Ausgabetyp (volle Präzision oder eine Quantisierungsstufe), und das Ergebnis ist eine `.gguf`-Datei, die bereit ist, mit llama.cpp, Ollama oder LM Studio geladen zu werden.',
    quickAnswerTop: {
      de: {
        question: 'Wie konvertiert man ein Modell mit llama.cpp ins GGUF-Format?',
        answer: 'Führen Sie das Konvertierungsskript von llama.cpp gegen ein Modellverzeichnis im Hugging-Face-Format aus und geben Sie einen Ausgabetyp wie f16 (volle Präzision) oder ein quantisiertes Format wie q4_k_m an. Das Skript liest die Gewichte und die Konfiguration des Modells ein, schreibt sie in eine einzelne .gguf-Datei, und diese Datei kann direkt von llama.cpp, Ollama oder LM Studio geladen werden.',
        bullets: [
          'Das Quellmodell muss vor der Konvertierung im Hugging-Face-Format vorliegen (safetensors oder PyTorch-Checkpoint)',
          'Wählen Sie einen Ausgabetyp: f16/f32 für volle Präzision, oder einen quantisierten Typ, um in einem Schritt zu konvertieren und zu verkleinern',
          'Separates Quantisieren nach einer f16-Konvertierung gibt mehr Kontrolle als das Quantisieren während der Konvertierung',
        ],
        updatedDate: '2026-07',
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
          '**2. Konvertierungsskript mit einem Ausgabetyp ausführen:** `python convert_hf_to_gguf.py <model-dir> --outtype f16` erzeugt eine GGUF-Datei in voller Präzision. Die Übergabe eines quantisierten `--outtype` (z. B. `q8_0`) quantisiert in einem Schritt während der Konvertierung, gibt Ihnen jedoch weniger Kontrolle, als zunächst zu f16 zu konvertieren und anschließend mit einem eigenen Quantisierungswerkzeug separat zu quantisieren.',
          '**3. Separat quantisieren für mehr Kontrolle (optional, aber empfohlen):** Führen Sie ausgehend von einer f16-GGUF-Datei das Quantisierungswerkzeug von llama.cpp aus, um mehrere quantisierte Varianten (z. B. q4_k_m, q5_k_m) aus derselben Quelle voller Präzision zu erzeugen. So können Sie Qualitäts-/Größen-Kompromisse vergleichen, ohne die Konvertierung jedes Mal erneut auszuführen.',
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
        ],
      },
    },
  },
  fr: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-fr.webp',
    title: 'Comment convertir un modèle en GGUF avec llama.cpp ?',
    seoTitle: 'Guide de conversion GGUF avec llama.cpp | Prompt Bites',
    metaDescription: 'Comment convertir un modèle Hugging Face au format GGUF avec llama.cpp : le script de conversion, les options de précision de sortie, la quantification ultérieure et les erreurs de conversion courantes.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Développeurs convertissant un modèle au format GGUF pour de l\'inférence locale',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Convertissez un modèle en GGUF avec le script de conversion de llama.cpp, qui lit les poids et métadonnées d\'un modèle source et les écrit dans le format GGUF à fichier unique.</strong> Exécutez le script sur un répertoire de modèle au format Hugging Face, choisissez un type de sortie (pleine précision ou un niveau de quantification), et le résultat est un fichier `.gguf` prêt à être chargé avec llama.cpp, Ollama ou LM Studio.',
    quickAnswerTop: {
      fr: {
        question: 'Comment convertir un modèle au format GGUF avec llama.cpp ?',
        answer: 'Exécutez le script de conversion de llama.cpp sur un répertoire de modèle au format Hugging Face, en précisant un type de sortie comme f16 (pleine précision) ou un format quantifié comme q4_k_m. Le script lit les poids et la configuration du modèle, les écrit dans un seul fichier .gguf, et ce fichier peut être chargé directement par llama.cpp, Ollama ou LM Studio.',
        bullets: [
          'Le modèle source doit être au format Hugging Face (safetensors ou checkpoint PyTorch) avant la conversion',
          'Choisissez un type de sortie : f16/f32 pour la pleine précision, ou un type quantifié pour convertir et réduire la taille en une seule étape',
          'Quantifier séparément après une conversion en f16 offre plus de contrôle que de quantifier pendant la conversion',
        ],
        updatedDate: '2026-07',
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
          '**2. Exécuter le script de conversion avec un type de sortie :** `python convert_hf_to_gguf.py <model-dir> --outtype f16` produit un fichier GGUF en pleine précision. Passer un `--outtype` quantifié (par ex. `q8_0`) quantifie pendant la conversion en une seule étape, mais offre moins de contrôle que de convertir d\'abord en f16 puis de quantifier séparément ensuite avec un outil de quantification dédié.',
          '**3. Quantifier séparément pour plus de contrôle (optionnel mais recommandé) :** à partir d\'un fichier GGUF en f16, exécutez l\'outil de quantification de llama.cpp pour produire plusieurs variantes quantifiées (par ex. q4_k_m, q5_k_m) à partir de la même source en pleine précision, ce qui permet de comparer les compromis qualité/taille sans relancer la conversion à chaque fois.',
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
        ],
      },
    },
  },
  ja: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-ja.webp',
    title: 'llama.cppでモデルをGGUFに変換するにはどうすればよいですか?',
    seoTitle: 'llama.cppによるGGUF変換ガイド | Prompt Bites',
    metaDescription: 'llama.cppを使ってHugging Face形式のモデルをGGUF形式に変換する方法を解説します。変換スクリプト、出力精度のオプション、変換後の量子化、よくある変換エラーについて説明します。',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'ローカル推論のためにモデルをGGUF形式に変換する開発者',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>llama.cppの変換スクリプトを使ってモデルをGGUFに変換します。このスクリプトは変換元モデルの重みとメタデータを読み込み、単一ファイル形式のGGUFに書き出します。</strong> Hugging Face形式のモデルディレクトリに対してスクリプトを実行し、出力タイプ(フル精度または量子化レベル)を選択すると、結果としてllama.cpp、Ollama、LM Studioで読み込める`.gguf`ファイルが得られます。',
    quickAnswerTop: {
      ja: {
        question: 'llama.cppでモデルをGGUF形式に変換するにはどうすればよいですか?',
        answer: 'Hugging Face形式のモデルディレクトリに対してllama.cppの変換スクリプトを実行し、f16(フル精度)やq4_k_mのような量子化形式など出力タイプを指定します。スクリプトはモデルの重みと設定を読み込み、単一の.ggufファイルに書き出します。このファイルはllama.cpp、Ollama、LM Studioで直接読み込めます。',
        bullets: [
          '変換前に、変換元モデルはHugging Face形式(safetensorsまたはPyTorchチェックポイント)である必要があります',
          '出力タイプを選びます。フル精度にはf16/f32、変換と縮小を一度に行うには量子化タイプを選択します',
          'f16変換後に別途量子化するほうが、変換時に量子化するよりも細かい制御ができます',
        ],
        updatedDate: '2026-07',
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
          '**2. 出力タイプを指定して変換スクリプトを実行する:** `python convert_hf_to_gguf.py <model-dir> --outtype f16` はフル精度のGGUFファイルを生成します。量子化された`--outtype`(例: `q8_0`)を渡すと、変換と同時に一度で量子化しますが、先にf16に変換してから専用の量子化ツールで別途量子化するよりも細かい制御はできません。',
          '**3. より細かい制御のために別途量子化する(任意だが推奨):** f16のGGUFファイルを起点として、llama.cppの量子化ツールを実行し、同じフル精度のソースから複数の量子化バリアント(例: q4_k_m、q5_k_m)を生成します。これにより、毎回変換をやり直すことなく品質とサイズのトレードオフを比較できます。',
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
        ],
      },
    },
  },
  zh: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-zh.webp',
    title: '如何用llama.cpp将模型转换为GGUF格式?',
    seoTitle: 'llama.cpp GGUF转换指南 | Prompt Bites',
    metaDescription: '如何用llama.cpp将Hugging Face模型转换为GGUF格式:转换脚本、输出精度选项、转换后量化以及常见转换错误。',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '为本地推理将模型转换为GGUF格式的开发者',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>使用llama.cpp的转换脚本将模型转换为GGUF格式,该脚本会读取源模型的权重和元数据,并将其写入单文件的GGUF格式。</strong>针对Hugging Face格式的模型目录运行该脚本,选择输出类型(全精度或某个量化级别),结果是一个可直接用llama.cpp、Ollama或LM Studio加载的`.gguf`文件。',
    quickAnswerTop: {
      zh: {
        question: '如何用llama.cpp将模型转换为GGUF格式?',
        answer: '针对Hugging Face格式的模型目录运行llama.cpp的转换脚本,并指定输出类型,例如f16(全精度)或q4_k_m这样的量化格式。脚本会读取模型的权重和配置,将其写入单个.gguf文件,该文件可以直接由llama.cpp、Ollama或LM Studio加载。',
        bullets: [
          '转换前,源模型必须是Hugging Face格式(safetensors或PyTorch检查点)',
          '选择输出类型:全精度选f16/f32,或选择量化类型以一步完成转换和瘦身',
          '在f16转换之后再单独量化,比在转换时直接量化能获得更精细的控制',
        ],
        updatedDate: '2026-07',
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
          '**2. 使用指定的输出类型运行转换脚本:** `python convert_hf_to_gguf.py <model-dir> --outtype f16` 会生成一个全精度的GGUF文件。传入量化的`--outtype`(例如`q8_0`)可以在转换的同时一步完成量化,但相比先转换为f16、再用专门的量化工具单独量化,控制粒度更粗。',
          '**3. 单独量化以获得更精细的控制(可选但推荐):** 从一个f16的GGUF文件出发,运行llama.cpp的量化工具,从同一个全精度源生成多个量化版本(例如q4_k_m、q5_k_m),这样就能比较质量与体积的权衡,而不必每次都重新运行转换。',
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
        ],
      },
    },
  },
  es: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-es.webp',
    title: '¿Cómo convertir un modelo a GGUF con llama.cpp?',
    seoTitle: 'Guía de conversión a GGUF con llama.cpp | Prompt Bites',
    metaDescription: 'Cómo convertir un modelo de Hugging Face a formato GGUF con llama.cpp: el script de conversión, las opciones de precisión de salida, la cuantización posterior y los errores de conversión más comunes.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores que convierten un modelo a formato GGUF para inferencia local',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Convierte un modelo a GGUF con el script de conversión de llama.cpp, que lee los pesos y metadatos de un modelo de origen y los escribe en el formato GGUF de archivo único.</strong> Ejecuta el script sobre un directorio de modelo en formato Hugging Face, elige un tipo de salida (precisión completa o un nivel de cuantización), y el resultado es un archivo `.gguf` listo para cargarse con llama.cpp, Ollama o LM Studio.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo se convierte un modelo a formato GGUF con llama.cpp?',
        answer: 'Ejecuta el script de conversión de llama.cpp sobre un directorio de modelo en formato Hugging Face, especificando un tipo de salida como f16 (precisión completa) o un formato cuantizado como q4_k_m. El script lee los pesos y la configuración del modelo, los escribe en un único archivo .gguf, y ese archivo puede cargarse directamente con llama.cpp, Ollama o LM Studio.',
        bullets: [
          'El modelo de origen debe estar en formato Hugging Face (safetensors o checkpoint de PyTorch) antes de la conversión',
          'Elige un tipo de salida: f16/f32 para precisión completa, o un tipo cuantizado para convertir y reducir el tamaño en un solo paso',
          'Cuantizar por separado después de una conversión a f16 da más control que cuantizar durante la conversión',
        ],
        updatedDate: '2026-07',
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
          '**2. Ejecutar el script de conversión con un tipo de salida:** `python convert_hf_to_gguf.py <model-dir> --outtype f16` produce un archivo GGUF en precisión completa. Pasar un `--outtype` cuantizado (por ejemplo `q8_0`) cuantiza durante la conversión en un solo paso, pero da menos control que convertir primero a f16 y cuantizar por separado después con una herramienta de cuantización dedicada.',
          '**3. Cuantizar por separado para más control (opcional pero recomendado):** partiendo de un archivo GGUF en f16, ejecuta la herramienta de cuantización de llama.cpp para producir varias variantes cuantizadas (por ejemplo q4_k_m, q5_k_m) a partir de la misma fuente en precisión completa, lo que permite comparar los compromisos entre calidad y tamaño sin repetir la conversión cada vez.',
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
        ],
      },
    },
  },
  pt: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-pt.webp',
    title: 'Como converter um modelo para GGUF com o llama.cpp?',
    seoTitle: 'Guia de conversão para GGUF com llama.cpp | Prompt Bites',
    metaDescription: 'Como converter um modelo do Hugging Face para o formato GGUF usando o llama.cpp: o script de conversão, opções de precisão de saída, quantização posterior e erros comuns de conversão.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores convertendo um modelo para o formato GGUF para inferência local',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Converta um modelo para GGUF com o script de conversão do llama.cpp, que lê os pesos e metadados de um modelo de origem e os grava no formato GGUF de arquivo único.</strong> Execute o script em um diretório de modelo no formato Hugging Face, escolha um tipo de saída (precisão total ou um nível de quantização), e o resultado é um arquivo `.gguf` pronto para ser carregado com llama.cpp, Ollama ou LM Studio.',
    quickAnswerTop: {
      pt: {
        question: 'Como converter um modelo para o formato GGUF com o llama.cpp?',
        answer: 'Execute o script de conversão do llama.cpp em um diretório de modelo no formato Hugging Face, especificando um tipo de saída como f16 (precisão total) ou um formato quantizado como q4_k_m. O script lê os pesos e a configuração do modelo, grava-os em um único arquivo .gguf, e esse arquivo pode ser carregado diretamente pelo llama.cpp, Ollama ou LM Studio.',
        bullets: [
          'O modelo de origem precisa estar no formato Hugging Face (safetensors ou checkpoint do PyTorch) antes da conversão',
          'Escolha um tipo de saída: f16/f32 para precisão total, ou um tipo quantizado para converter e reduzir o tamanho em uma única etapa',
          'Quantizar separadamente após uma conversão para f16 dá mais controle do que quantizar durante a conversão',
        ],
        updatedDate: '2026-07',
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
          '**2. Executar o script de conversão com um tipo de saída:** `python convert_hf_to_gguf.py <model-dir> --outtype f16` gera um arquivo GGUF em precisão total. Passar um `--outtype` quantizado (por exemplo, `q8_0`) quantiza durante a conversão em uma única etapa, mas dá menos controle do que converter primeiro para f16 e quantizar separadamente depois com uma ferramenta de quantização dedicada.',
          '**3. Quantizar separadamente para mais controle (opcional, mas recomendado):** partindo de um arquivo GGUF em f16, execute a ferramenta de quantização do llama.cpp para produzir várias variantes quantizadas (por exemplo, q4_k_m, q5_k_m) a partir da mesma fonte em precisão total, permitindo comparar os trade-offs de qualidade e tamanho sem repetir a conversão a cada vez.',
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
        ],
      },
    },
  },
  ar: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-ar.webp',
    title: 'كيف تحوّل نموذجًا إلى صيغة GGUF باستخدام llama.cpp؟',
    seoTitle: 'دليل التحويل إلى GGUF باستخدام llama.cpp | Prompt Bites',
    metaDescription: 'كيفية تحويل نموذج بصيغة Hugging Face إلى صيغة GGUF باستخدام llama.cpp: نص التحويل البرمجي، خيارات دقة الإخراج، التكميم لاحقًا، وأخطاء التحويل الشائعة.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يحوّلون نموذجًا إلى صيغة GGUF للاستدلال المحلي',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>حوّل نموذجًا إلى صيغة GGUF باستخدام نص التحويل البرمجي الخاص بـ llama.cpp، والذي يقرأ أوزان وبيانات وصفية النموذج المصدر ويكتبها في صيغة GGUF ذات الملف الواحد.</strong> شغّل النص البرمجي على دليل نموذج بصيغة Hugging Face، واختر نوع إخراج (دقة كاملة أو مستوى تكميم)، وستحصل على ملف `.gguf` جاهز للتحميل باستخدام llama.cpp أو Ollama أو LM Studio.',
    quickAnswerTop: {
      ar: {
        question: 'كيف تحوّل نموذجًا إلى صيغة GGUF باستخدام llama.cpp؟',
        answer: 'شغّل نص التحويل البرمجي الخاص بـ llama.cpp على دليل نموذج بصيغة Hugging Face، محددًا نوع إخراج مثل f16 (دقة كاملة) أو صيغة مكممة مثل q4_k_m. يقرأ النص البرمجي أوزان النموذج وإعداداته، ويكتبها في ملف .gguf واحد، ويمكن تحميل هذا الملف مباشرة بواسطة llama.cpp أو Ollama أو LM Studio.',
        bullets: [
          'يجب أن يكون النموذج المصدر بصيغة Hugging Face (safetensors أو نقطة تفتيش PyTorch) قبل التحويل',
          'اختر نوع الإخراج: f16/f32 للدقة الكاملة، أو نوعًا مكممًا للتحويل والتصغير في خطوة واحدة',
          'التكميم بشكل منفصل بعد التحويل إلى f16 يمنح تحكمًا أكبر من التكميم أثناء التحويل',
        ],
        updatedDate: '2026-07',
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
          '**2. تشغيل نص التحويل البرمجي بنوع إخراج محدد:** الأمر `python convert_hf_to_gguf.py <model-dir> --outtype f16` ينتج ملف GGUF بدقة كاملة. تمرير `--outtype` مُكمَّم (مثل `q8_0`) يُكمِّم أثناء التحويل في خطوة واحدة، لكنه يمنح تحكمًا أقل من التحويل إلى f16 أولًا ثم التكميم بشكل منفصل لاحقًا باستخدام أداة تكميم مخصصة.',
          '**3. التكميم بشكل منفصل لتحكم أكبر (اختياري لكنه موصى به):** بدءًا من ملف GGUF بصيغة f16، شغّل أداة التكميم الخاصة بـ llama.cpp لإنتاج عدة نسخ مكممة (مثل q4_k_m وq5_k_m) من المصدر ذي الدقة الكاملة نفسه، مما يتيح لك مقارنة المفاضلات بين الجودة والحجم دون إعادة تشغيل التحويل في كل مرة.',
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
        ],
      },
    },
  },
  ko: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/llama-cpp-gguf-conversion-guide-overview-hero-ko.webp',
    title: 'llama.cpp로 모델을 GGUF로 변환하는 방법은 무엇입니까?',
    seoTitle: 'llama.cpp GGUF 변환 가이드 | Prompt Bites',
    metaDescription: 'llama.cpp를 사용해 Hugging Face 모델을 GGUF 형식으로 변환하는 방법을 설명합니다. 변환 스크립트, 출력 정밀도 옵션, 변환 후 양자화, 자주 발생하는 변환 오류를 다룹니다.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '로컬 추론을 위해 모델을 GGUF 형식으로 변환하는 개발자',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'convert-ollama-model-to-mlx'],
    is_living_page: false,
    leadAnswerBlock: '<strong>llama.cpp의 변환 스크립트를 사용해 모델을 GGUF로 변환하십시오. 이 스크립트는 원본 모델의 가중치와 메타데이터를 읽어 단일 파일 형식인 GGUF로 기록합니다.</strong> Hugging Face 형식의 모델 디렉터리에 대해 스크립트를 실행하고 출력 유형(완전 정밀도 또는 양자화 수준)을 선택하면, llama.cpp, Ollama, LM Studio로 바로 불러올 수 있는 `.gguf` 파일이 생성됩니다.',
    quickAnswerTop: {
      ko: {
        question: 'llama.cpp로 모델을 GGUF 형식으로 변환하는 방법은 무엇입니까?',
        answer: 'Hugging Face 형식의 모델 디렉터리에 대해 llama.cpp의 변환 스크립트를 실행하고, f16(완전 정밀도)이나 q4_k_m 같은 양자화 형식 등 출력 유형을 지정하십시오. 스크립트는 모델의 가중치와 설정을 읽어 단일 .gguf 파일로 기록하며, 이 파일은 llama.cpp, Ollama, LM Studio에서 직접 불러올 수 있습니다.',
        bullets: [
          '변환 전에 원본 모델은 Hugging Face 형식(safetensors 또는 PyTorch 체크포인트)이어야 합니다',
          '출력 유형을 선택하십시오. 완전 정밀도에는 f16/f32를, 변환과 축소를 한 번에 하려면 양자화 유형을 선택하십시오',
          'f16 변환 후 별도로 양자화하는 방식이 변환 중 양자화하는 것보다 더 세밀한 제어가 가능합니다',
        ],
        updatedDate: '2026-07',
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
          '**2. 출력 유형을 지정해 변환 스크립트 실행:** `python convert_hf_to_gguf.py <model-dir> --outtype f16` 명령은 완전 정밀도 GGUF 파일을 생성합니다. 양자화된 `--outtype`(예: `q8_0`)을 전달하면 변환과 동시에 한 단계로 양자화되지만, 먼저 f16으로 변환한 뒤 전용 양자화 도구로 별도로 양자화하는 것보다는 제어 수준이 낮습니다.',
          '**3. 더 세밀한 제어를 위해 별도로 양자화(선택 사항이지만 권장):** f16 GGUF 파일에서 시작하여 llama.cpp의 양자화 도구를 실행하면, 동일한 완전 정밀도 소스로부터 여러 양자화 버전(예: q4_k_m, q5_k_m)을 생성할 수 있습니다. 이를 통해 매번 변환을 다시 실행하지 않고도 품질과 크기의 트레이드오프를 비교할 수 있습니다.',
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
        ],
      },
    },
  },
}

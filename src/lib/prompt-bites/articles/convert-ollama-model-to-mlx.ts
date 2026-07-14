import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    title: 'How to Convert Ollama Models to MLX Format',
    dateModified: '2026-06-21',
    seoTitle: 'Convert Ollama Model to MLX 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'You cannot directly convert Ollama models to MLX. Instead, use Hugging Face weights + mlx-lm convert. Most popular models already have pre-converted MLX versions on Hugging Face.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: ['Llama 3', 'Qwen', 'Mistral'],
    current_hardware_mentioned: ['Apple Silicon'],
    educationalLevel: 'Intermediate',
    audience: 'Mac developers wanting MLX-format models from the Ollama ecosystem',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['mlx-vs-ollama-vs-llamacpp', 'ollama-mlx-apple-silicon', 'ollama-vs-lm-studio'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'How do you convert an Ollama model to MLX format?',
        answer: 'You cannot directly convert Ollama models to MLX. Instead, download the original GGUF or SafeTensors weights from Hugging Face, then convert with mlx-lm convert. For most popular models (Llama 3, Qwen, Mistral), pre-converted MLX versions already exist on Hugging Face under the mlx-community organization.',
        bullets: [
          'You cannot convert Ollama models directly — the model format is different',
          'Pre-converted MLX models exist at huggingface.co/mlx-community for most popular models',
          'To convert yourself: download from Hugging Face, then run mlx_lm.convert',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Wie konvertiert man ein Ollama-Modell in das MLX-Format?',
        answer: 'Sie können Ollama-Modelle nicht direkt in MLX konvertieren. Laden Sie stattdessen die originalen GGUF- oder SafeTensors-Gewichte von Hugging Face herunter und konvertieren Sie diese mit mlx-lm convert. Für die meisten gängigen Modelle (Llama 3, Qwen, Mistral) existieren auf Hugging Face bereits vorkonvertierte MLX-Versionen unter der mlx-community-Organisation.',
        bullets: [
          'Ollama-Modelle können nicht direkt konvertiert werden — das Modellformat ist unterschiedlich',
          'Vorkonvertierte MLX-Modelle sind auf huggingface.co/mlx-community für die meisten gängigen Modelle verfügbar',
          'Selbst konvertieren: von Hugging Face herunterladen, dann mlx_lm.convert ausführen',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Comment convertir un modèle Ollama au format MLX ?',
        answer: 'Vous ne pouvez pas convertir directement les modèles Ollama en MLX. À la place, téléchargez les poids GGUF ou SafeTensors originaux depuis Hugging Face, puis convertissez-les avec mlx-lm convert. Pour la plupart des modèles populaires (Llama 3, Qwen, Mistral), des versions MLX pré-converties existent déjà sur Hugging Face sous l\'organisation mlx-community.',
        bullets: [
          'Vous ne pouvez pas convertir les modèles Ollama directement — le format de modèle est différent',
          'Des modèles MLX pré-convertis existent sur huggingface.co/mlx-community pour la plupart des modèles populaires',
          'Pour convertir vous-même : téléchargez depuis Hugging Face, puis exécutez mlx_lm.convert',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'OllamaモデルをMLX形式に変換するにはどうすればよいですか？',
        answer: 'OllamaモデルをMLXに直接変換することはできません。代わりに、Hugging FaceからオリジナルのGGUFまたはSafeTensorsの重みをダウンロードし、mlx-lm convertで変換してください。Llama 3、Qwen、Mistralなど人気モデルのほとんどは、mlx-communityオーガニゼーション配下のHugging Faceにすでに事前変換済みMLXバージョンが存在します。',
        bullets: [
          'Ollamaモデルは直接変換できません — モデル形式が異なります',
          '事前変換済みMLXモデルはhuggingface.co/mlx-communityで人気モデルのほとんどが公開されています',
          '自分で変換する場合：Hugging Faceからダウンロードし、mlx_lm.convertを実行',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '如何将 Ollama 模型转换为 MLX 格式？',
        answer: '您无法直接将 Ollama 模型转换为 MLX 格式。请改为从 Hugging Face 下载原始 GGUF 或 SafeTensors 权重，然后使用 mlx-lm convert 进行转换。对于大多数流行模型（Llama 3、Qwen、Mistral），Hugging Face 的 mlx-community 组织下已有预转换的 MLX 版本。',
        bullets: [
          '无法直接转换 Ollama 模型——模型格式不同',
          '大多数流行模型的预转换 MLX 版本可在 huggingface.co/mlx-community 获取',
          '自行转换：从 Hugging Face 下载，然后运行 mlx_lm.convert',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama stores models in its own internal format at ~/.ollama/models — you cannot import these directly into MLX',
          'The mlx-community organization on Hugging Face has pre-converted MLX versions of Llama 3, Qwen, Mistral, Phi, Gemma, and many others — check there first before converting',
          'If a pre-converted version does not exist, download the original SafeTensors weights from Hugging Face and run mlx_lm.convert — quantization is applied during conversion',
        ],
      },
      body1: {
        title: 'Step 1: Check for a Pre-Converted MLX Model',
        content: [
          'Before converting anything, visit <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">huggingface.co/mlx-community</a>. The community maintains hundreds of models already converted and quantized for MLX. Search by model name — if it exists there, installing it takes one command and no conversion.',
          'If a pre-converted version exists, run the model directly with mlx-lm:',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.generate --model mlx-community/Meta-Llama-3-8B-4bit --prompt "Hello"',
        codeLanguage: 'bash',
      },
      body2: {
        title: 'Step 2: Convert a Model Yourself (if not pre-converted)',
        content: [
          'If the model you want is not in mlx-community, download the original SafeTensors weights from the model author\'s Hugging Face repo (not from mlx-community), then run the converter. The <code>-q</code> flag applies 4-bit quantization during conversion:',
          'Conversion takes 2–10 minutes depending on model size. The output is a directory of .safetensors shards plus an mlx-compatible tokenizer config.',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.convert --hf-path original-org/model-name --mlx-path ./converted-model -q',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About MLX Model Conversion',
        faqs: [
          {
            q: 'Can I export a model from Ollama and import it into MLX?',
            a: 'No. Ollama stores models in its own internal format in ~/.ollama/models. This format is not directly readable by mlx-lm. You need the original SafeTensors or GGUF weights from Hugging Face to use as the conversion source.',
          },
          {
            q: 'Does mlx-lm support GGUF files as conversion input?',
            a: 'As of early 2026, mlx-lm.convert primarily targets SafeTensors (the standard Hugging Face format). If you only have a GGUF file, use a GGUF-to-SafeTensors conversion tool first, or look for the original SafeTensors weights on the model\'s Hugging Face page.',
          },
          {
            q: 'Which models have pre-converted MLX versions?',
            a: 'The mlx-community organization covers most major models: Llama 3, Qwen 3, Mistral, Phi-3/4, Gemma 2, and many fine-tunes. Both 4-bit and 8-bit quantized versions are usually available. Visit huggingface.co/mlx-community and search by model family name.',
          },
          {
            q: 'What quantization should I use when converting to MLX?',
            a: 'For most 7B–14B models on 16 GB unified memory, use 4-bit quantization (the default with the <code>-q</code> flag). For a 7B model, this produces a ~4 GB model that runs well on M1/M2/M3/M4 chips. Use 8-bit only if you have 32 GB or more and need higher output quality.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Ollama + MLX on Apple Silicon](/prompt-bites/ollama-mlx-apple-silicon) -- Ollama + MLX on Apple Silicon',
          '[MLX vs Ollama vs llama.cpp on Mac](/prompt-bites/mlx-vs-ollama-vs-llamacpp) -- MLX vs Ollama vs llama.cpp on Mac',
          '[Best Ollama Models CPU-Only](/prompt-bites/best-ollama-models-cpu-only) -- best Ollama models CPU-only',
          '[Best eGPU Setup for MacBook Local LLM 2026](/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026) -- eGPU setup for MacBook',
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    title: 'Ollama-Modelle in das MLX-Format konvertieren',
    seoTitle: 'Ollama-Modell zu MLX konvertieren 2026',
    metaDescription: 'Ollama-Modelle lassen sich nicht direkt in MLX konvertieren. Nutzen Sie Hugging-Face-Gewichte + mlx-lm convert. Viele Modelle gibt es bereits vorkonvertiert.',
    publishDate: '2026-05-22',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      de: {
        question: 'Wie konvertiert man ein Ollama-Modell in das MLX-Format?',
        answer: 'Sie können Ollama-Modelle nicht direkt in MLX konvertieren. Laden Sie stattdessen die originalen GGUF- oder SafeTensors-Gewichte von Hugging Face herunter und konvertieren Sie diese mit mlx-lm convert. Für die meisten gängigen Modelle (Llama 3, Qwen, Mistral) existieren auf Hugging Face bereits vorkonvertierte MLX-Versionen unter der mlx-community-Organisation.',
        bullets: [
          'Ollama-Modelle können nicht direkt konvertiert werden — das Modellformat ist unterschiedlich',
          'Vorkonvertierte MLX-Modelle sind auf huggingface.co/mlx-community für die meisten gängigen Modelle verfügbar',
          'Selbst konvertieren: von Hugging Face herunterladen, dann mlx_lm.convert ausführen',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama speichert Modelle in einem eigenen internen Format unter ~/.ollama/models — diese können nicht direkt in MLX importiert werden',
          'Die mlx-community-Organisation auf Hugging Face bietet vorkonvertierte MLX-Versionen von Llama 3, Qwen, Mistral, Phi, Gemma und vielen anderen — prüfen Sie dort zuerst, bevor Sie konvertieren',
          'Wenn keine vorkonvertierte Version existiert, laden Sie die originalen SafeTensors-Gewichte von Hugging Face herunter und führen Sie mlx_lm.convert aus — die Quantisierung wird während der Konvertierung angewendet',
        ],
      },
      body1: {
        title: 'Schritt 1: Nach einem vorkonvertierten MLX-Modell suchen',
        content: [
          'Besuchen Sie zunächst <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">huggingface.co/mlx-community</a>, bevor Sie irgendetwas konvertieren. Die Community pflegt Hunderte von Modellen, die bereits für MLX konvertiert und quantisiert wurden. Suchen Sie nach dem Modellnamen — wenn es dort vorhanden ist, benötigen Sie nur einen Befehl ohne Konvertierung.',
          'Wenn eine vorkonvertierte Version existiert, führen Sie das Modell direkt mit mlx-lm aus:',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.generate --model mlx-community/Meta-Llama-3-8B-4bit --prompt "Hello"',
        codeLanguage: 'bash',
      },
      body2: {
        title: 'Schritt 2: Modell selbst konvertieren (falls nicht vorkonvertiert)',
        content: [
          'Wenn das gewünschte Modell nicht in mlx-community vorhanden ist, laden Sie die originalen SafeTensors-Gewichte aus dem Hugging-Face-Repo des Modellautors herunter (nicht von mlx-community) und führen dann den Konverter aus. Das Flag <code>-q</code> wendet während der Konvertierung 4-Bit-Quantisierung an:',
          'Die Konvertierung dauert je nach Modellgröße 2–10 Minuten. Das Ergebnis ist ein Verzeichnis mit .safetensors-Shards sowie einer mlx-kompatiblen Tokenizer-Konfiguration.',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.convert --hf-path original-org/model-name --mlx-path ./converted-model -q',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zur MLX-Modellkonvertierung',
        faqs: [
          {
            q: 'Kann ich ein Modell aus Ollama exportieren und in MLX importieren?',
            a: 'Nein. Ollama speichert Modelle in einem eigenen internen Format in ~/.ollama/models. Dieses Format ist für mlx-lm nicht direkt lesbar. Sie benötigen die originalen SafeTensors- oder GGUF-Gewichte von Hugging Face als Konvertierungsquelle.',
          },
          {
            q: 'Unterstützt mlx-lm GGUF-Dateien als Konvertierungseingabe?',
            a: 'Stand Anfang 2026 zielt mlx-lm.convert hauptsächlich auf SafeTensors (das Standard-Hugging-Face-Format) ab. Wenn Sie nur eine GGUF-Datei haben, verwenden Sie zuerst ein GGUF-zu-SafeTensors-Konvertierungswerkzeug, oder suchen Sie nach den originalen SafeTensors-Gewichten auf der Hugging-Face-Seite des Modells.',
          },
          {
            q: 'Welche Modelle haben vorkonvertierte MLX-Versionen?',
            a: 'Die mlx-community-Organisation deckt die meisten großen Modelle ab: Llama 3, Qwen 3, Mistral, Phi-3/4, Gemma 2 und viele Fine-Tunes. Sowohl 4-Bit- als auch 8-Bit-quantisierte Versionen sind in der Regel verfügbar. Besuchen Sie huggingface.co/mlx-community und suchen Sie nach dem Modellfamiliennamen.',
          },
          {
            q: 'Welche Quantisierung sollte ich bei der MLX-Konvertierung verwenden?',
            a: 'Für die meisten 7B–14B-Modelle mit 16 GB Unified Memory empfiehlt sich 4-Bit-Quantisierung (Standard mit dem Flag <code>-q</code>). Bei einem 7B-Modell ergibt das ein ~4 GB großes Modell, das auf M1/M2/M3/M4-Chips gut läuft. Verwenden Sie 8-Bit nur, wenn Sie 32 GB oder mehr haben und höhere Ausgabequalität benötigen.',
          },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Ollama + MLX auf Apple Silicon](/de/prompt-bites/ollama-mlx-apple-silicon) -- Ollama + MLX on Apple Silicon',
          '[MLX vs Ollama vs llama.cpp auf dem Mac](/de/prompt-bites/mlx-vs-ollama-vs-llamacpp) -- MLX vs Ollama vs llama.cpp on Mac',
          '[Beste Ollama-Modelle nur für CPU](/de/prompt-bites/best-ollama-models-cpu-only) -- best Ollama models CPU-only',
          '[Beste eGPU-Einrichtung für MacBook Local LLM 2026](/de/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026) -- eGPU setup for MacBook',
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    title: 'Comment convertir des modèles Ollama au format MLX',
    seoTitle: 'Convertir un modèle Ollama en MLX 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Vous ne pouvez pas convertir directement les modèles Ollama en MLX. Utilisez plutôt les poids Hugging Face + mlx-lm convert. La plupart des modèles populaires disposent déjà de versions MLX pré-converties sur Hugging Face.',
    publishDate: '2026-05-22',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      fr: {
        question: 'Comment convertir un modèle Ollama au format MLX ?',
        answer: 'Vous ne pouvez pas convertir directement les modèles Ollama en MLX. À la place, téléchargez les poids GGUF ou SafeTensors originaux depuis Hugging Face, puis convertissez-les avec mlx-lm convert. Pour la plupart des modèles populaires (Llama 3, Qwen, Mistral), des versions MLX pré-converties existent déjà sur Hugging Face sous l\'organisation mlx-community.',
        bullets: [
          'Vous ne pouvez pas convertir les modèles Ollama directement — le format de modèle est différent',
          'Des modèles MLX pré-convertis existent sur huggingface.co/mlx-community pour la plupart des modèles populaires',
          'Pour convertir vous-même : téléchargez depuis Hugging Face, puis exécutez mlx_lm.convert',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama stocke les modèles dans son propre format interne dans ~/.ollama/models — vous ne pouvez pas les importer directement dans MLX',
          'L\'organisation mlx-community sur Hugging Face dispose de versions MLX pré-converties de Llama 3, Qwen, Mistral, Phi, Gemma et bien d\'autres — vérifiez-y d\'abord avant de convertir',
          'Si une version pré-convertie n\'existe pas, téléchargez les poids SafeTensors originaux depuis Hugging Face et exécutez mlx_lm.convert — la quantification est appliquée lors de la conversion',
        ],
      },
      body1: {
        title: 'Étape 1 : Chercher un modèle MLX pré-converti',
        content: [
          'Avant de convertir quoi que ce soit, visitez <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">huggingface.co/mlx-community</a>. La communauté maintient des centaines de modèles déjà convertis et quantifiés pour MLX. Recherchez par nom de modèle — s\'il existe là-bas, l\'installation ne prend qu\'une commande et aucune conversion.',
          'Si une version pré-convertie existe, exécutez le modèle directement avec mlx-lm :',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.generate --model mlx-community/Meta-Llama-3-8B-4bit --prompt "Hello"',
        codeLanguage: 'bash',
      },
      body2: {
        title: 'Étape 2 : Convertir un modèle vous-même (si non pré-converti)',
        content: [
          'Si le modèle que vous souhaitez n\'est pas dans mlx-community, téléchargez les poids SafeTensors originaux depuis le dépôt Hugging Face de l\'auteur du modèle (pas depuis mlx-community), puis exécutez le convertisseur. Le flag <code>-q</code> applique une quantification en 4 bits lors de la conversion :',
          'La conversion prend 2 à 10 minutes selon la taille du modèle. Le résultat est un répertoire de fragments .safetensors accompagné d\'une configuration de tokenizer compatible MLX.',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.convert --hf-path original-org/model-name --mlx-path ./converted-model -q',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur la conversion de modèles MLX',
        faqs: [
          {
            q: 'Puis-je exporter un modèle depuis Ollama et l\'importer dans MLX ?',
            a: 'Non. Ollama stocke les modèles dans son propre format interne dans ~/.ollama/models. Ce format n\'est pas directement lisible par mlx-lm. Vous avez besoin des poids SafeTensors ou GGUF originaux depuis Hugging Face comme source de conversion.',
          },
          {
            q: 'mlx-lm prend-il en charge les fichiers GGUF comme entrée de conversion ?',
            a: 'Début 2026, mlx-lm.convert cible principalement SafeTensors (le format standard Hugging Face). Si vous ne disposez que d\'un fichier GGUF, utilisez d\'abord un outil de conversion GGUF vers SafeTensors, ou recherchez les poids SafeTensors originaux sur la page Hugging Face du modèle.',
          },
          {
            q: 'Quels modèles disposent de versions MLX pré-converties ?',
            a: 'L\'organisation mlx-community couvre la plupart des modèles majeurs : Llama 3, Qwen 3, Mistral, Phi-3/4, Gemma 2 et de nombreux fine-tunes. Des versions quantifiées en 4 bits et 8 bits sont généralement disponibles. Visitez huggingface.co/mlx-community et recherchez par nom de famille de modèle.',
          },
          {
            q: 'Quelle quantification utiliser lors de la conversion en MLX ?',
            a: 'Pour la plupart des modèles 7B–14B sur 16 Go de mémoire unifiée, utilisez la quantification en 4 bits (la valeur par défaut avec le flag <code>-q</code>). Pour un modèle 7B, cela produit un modèle d\'environ 4 Go qui fonctionne bien sur les puces M1/M2/M3/M4. Utilisez 8 bits uniquement si vous disposez de 32 Go ou plus et avez besoin d\'une meilleure qualité de sortie.',
          },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Ollama + MLX sur Apple Silicon](/fr/prompt-bites/ollama-mlx-apple-silicon) -- Ollama + MLX on Apple Silicon',
          '[MLX vs Ollama vs llama.cpp sur Mac](/fr/prompt-bites/mlx-vs-ollama-vs-llamacpp) -- MLX vs Ollama vs llama.cpp on Mac',
          '[Meilleurs modèles Ollama en mode CPU uniquement](/fr/prompt-bites/best-ollama-models-cpu-only) -- best Ollama models CPU-only',
          '[Meilleure configuration eGPU pour MacBook LLM local 2026](/fr/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026) -- eGPU setup for MacBook',
        ],
      },
    },
  },
  ja: {
    theme: 'Tool Comparisons',
    title: 'OllamaモデルをMLX形式に変換する方法',
    seoTitle: 'OllamaモデルをMLXに変換 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'OllamaモデルをMLXに直接変換することはできません。代わりにHugging Faceの重みとmlx-lm convertを使用してください。Qwen 3をはじめ多くの人気モデルはHugging Faceにすでに事前変換済みMLXバージョンが存在します。',
    publishDate: '2026-05-22',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      ja: {
        question: 'OllamaモデルをMLX形式に変換するにはどうすればよいですか？',
        answer: 'OllamaモデルをMLXに直接変換することはできません。代わりに、Hugging FaceからオリジナルのGGUFまたはSafeTensorsの重みをダウンロードし、mlx-lm convertで変換してください。Llama 3、Qwen、Mistralなど人気モデルのほとんどは、mlx-communityオーガニゼーション配下のHugging Faceにすでに事前変換済みMLXバージョンが存在します。',
        bullets: [
          'Ollamaモデルは直接変換できません — モデル形式が異なります',
          '事前変換済みMLXモデルはhuggingface.co/mlx-communityで人気モデルのほとんどが公開されています',
          '自分で変換する場合：Hugging Faceからダウンロードし、mlx_lm.convertを実行',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollamaはモデルを~/.ollama/models内の独自の内部形式で保存します — これらをMLXに直接インポートすることはできません',
          'Hugging Faceのmlx-communityオーガニゼーションには、Llama 3、Qwen、Mistral、Phi、Gemmaなど多数の事前変換済みMLXバージョンがあります。特に日本語テキスト生成で広く使われているQwen 3は、mlx-communityで豊富なMLXバリアントが揃っています — 変換する前にまずそこを確認してください',
          '事前変換済みバージョンが存在しない場合は、Hugging FaceからオリジナルのSafeTensorsの重みをダウンロードし、mlx_lm.convertを実行してください — 変換中に量子化が適用されます',
        ],
      },
      body1: {
        title: 'ステップ1：事前変換済みMLXモデルを確認する',
        content: [
          '何かを変換する前に、<a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">huggingface.co/mlx-community</a>を訪問してください。このコミュニティは、MLX向けにすでに変換・量子化された数百のモデルを管理しています。モデル名で検索してください — そこに存在すれば、インストールはコマンド1つで変換も不要です。なお、日本語テキスト生成で人気のQwen 3モデルは、mlx-communityで特に多くのMLXバリアントが公開されており、日本のユーザーにとって便利です。',
          '事前変換済みバージョンが存在する場合は、mlx-lmで直接モデルを実行してください：',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.generate --model mlx-community/Meta-Llama-3-8B-4bit --prompt "Hello"',
        codeLanguage: 'bash',
      },
      body2: {
        title: 'ステップ2：自分でモデルを変換する（事前変換済みがない場合）',
        content: [
          '希望するモデルがmlx-communityにない場合は、モデル作成者のHugging Faceリポジトリ（mlx-communityではなく）からオリジナルのSafeTensorsの重みをダウンロードし、コンバーターを実行してください。<code>-q</code>フラグは変換中に4ビット量子化を適用します：',
          '変換はモデルのサイズによって2〜10分かかります。出力は.safetensorsシャードのディレクトリと、mlx互換のトークナイザー設定です。',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.convert --hf-path original-org/model-name --mlx-path ./converted-model -q',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'MLXモデル変換に関するよくある質問',
        faqs: [
          {
            q: 'OllamaからモデルをエクスポートしてMLXにインポートできますか？',
            a: 'いいえ。Ollamaはモデルを~/.ollama/models内の独自の内部形式で保存します。この形式はmlx-lmで直接読み取ることができません。変換ソースとして使用するには、Hugging FaceからオリジナルのSafeTensorsまたはGGUFの重みが必要です。',
          },
          {
            q: 'mlx-lmはGGUFファイルを変換入力としてサポートしていますか？',
            a: '2026年初頭時点では、mlx-lm.convertは主にSafeTensors（標準のHugging Face形式）を対象としています。GGUFファイルしかない場合は、最初にGGUFをSafeTensorsに変換するツールを使用するか、モデルのHugging FaceページでオリジナルのSafeTensorsの重みを探してください。',
          },
          {
            q: '事前変換済みMLXバージョンがあるモデルはどれですか？',
            a: 'mlx-communityオーガニゼーションは、Llama 3、Qwen 3、Mistral、Phi-3/4、Gemma 2、および多くのファインチューンを含む主要モデルのほとんどをカバーしています。4ビットと8ビットの量子化バージョンの両方が通常利用可能です。huggingface.co/mlx-communityにアクセスし、モデルファミリー名で検索してください。',
          },
          {
            q: 'MLXに変換する際にどの量子化を使用すべきですか？',
            a: '16 GBのユニファイドメモリを持つほとんどの7B〜14BモデルにはM1/M2/M3/M4チップで4ビット量子化（<code>-q</code>フラグのデフォルト）を使用してください。7Bモデルの場合、約4 GBのモデルが生成され、良好に動作します。8ビットは32 GB以上の場合で、より高い出力品質が必要な場合のみ使用してください。',
          },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[Apple SiliconでのOllama + MLX](/ja/prompt-bites/ollama-mlx-apple-silicon) -- Ollama + MLX on Apple Silicon',
          '[Mac上のMLX vs Ollama vs llama.cpp](/ja/prompt-bites/mlx-vs-ollama-vs-llamacpp) -- MLX vs Ollama vs llama.cpp on Mac',
          '[CPU専用最適OllamaモデルBest](/ja/prompt-bites/best-ollama-models-cpu-only) -- best Ollama models CPU-only',
          '[MacBook ローカルLLM 最適eGPUセットアップ 2026](/ja/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026) -- eGPU setup for MacBook',
        ],
      },
    },
  },
  zh: {
    theme: 'Tool Comparisons',
    title: '如何将 Ollama 模型转换为 MLX 格式',
    seoTitle: '将 Ollama 模型转换为 MLX 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '您无法直接将 Ollama 模型转换为 MLX 格式。请改用 Hugging Face 权重 + mlx-lm convert。大多数流行模型在 Hugging Face 上已有预转换的 MLX 版本。',
    publishDate: '2026-05-22',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      zh: {
        question: '如何将 Ollama 模型转换为 MLX 格式？',
        answer: '您无法直接将 Ollama 模型转换为 MLX 格式。请改为从 Hugging Face 下载原始 GGUF 或 SafeTensors 权重，然后使用 mlx-lm convert 进行转换。对于大多数流行模型（Llama 3、Qwen、Mistral），Hugging Face 的 mlx-community 组织下已有预转换的 MLX 版本。',
        bullets: [
          '无法直接转换 Ollama 模型——模型格式不同',
          '大多数流行模型的预转换 MLX 版本可在 huggingface.co/mlx-community 获取',
          '自行转换：从 Hugging Face 下载，然后运行 mlx_lm.convert',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama 将模型以其自有内部格式存储在 ~/.ollama/models 中——无法直接将这些文件导入 MLX',
          'Hugging Face 的 mlx-community 组织提供了 Llama 3、Qwen、Mistral、Phi、Gemma 等众多模型的预转换 MLX 版本——转换前请先在那里查找',
          '如果不存在预转换版本，请从 Hugging Face 下载原始 SafeTensors 权重，然后运行 mlx_lm.convert——量化会在转换过程中自动应用',
        ],
      },
      body1: {
        title: '第一步：查找预转换的 MLX 模型',
        content: [
          '在转换任何内容之前，请先访问 <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">huggingface.co/mlx-community</a>。该社区维护了数百个已为 MLX 转换和量化的模型。按模型名称搜索——如果那里已有该模型，安装只需一条命令，无需转换。',
          '如果预转换版本存在，直接使用 mlx-lm 运行该模型：',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.generate --model mlx-community/Meta-Llama-3-8B-4bit --prompt "Hello"',
        codeLanguage: 'bash',
      },
      body2: {
        title: '第二步：自行转换模型（如无预转换版本）',
        content: [
          '如果您想要的模型不在 mlx-community 中，请从模型作者的 Hugging Face 仓库（而非 mlx-community）下载原始 SafeTensors 权重，然后运行转换器。<code>-q</code> 标志会在转换过程中应用 4 位量化：',
          '转换时间约为 2–10 分钟，具体取决于模型大小。输出是一个包含 .safetensors 分片的目录，以及与 MLX 兼容的分词器配置。',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.convert --hf-path original-org/model-name --mlx-path ./converted-model -q',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: '关于 MLX 模型转换的快速解答',
        faqs: [
          {
            q: '我可以从 Ollama 导出模型并导入 MLX 吗？',
            a: '不可以。Ollama 将模型以其自有内部格式存储在 ~/.ollama/models 中。该格式无法被 mlx-lm 直接读取。您需要来自 Hugging Face 的原始 SafeTensors 或 GGUF 权重作为转换来源。',
          },
          {
            q: 'mlx-lm 支持 GGUF 文件作为转换输入吗？',
            a: '截至 2026 年初，mlx-lm.convert 主要针对 SafeTensors（标准的 Hugging Face 格式）。如果您只有 GGUF 文件，请先使用 GGUF 到 SafeTensors 的转换工具，或在模型的 Hugging Face 页面上查找原始 SafeTensors 权重。',
          },
          {
            q: '哪些模型有预转换的 MLX 版本？',
            a: 'mlx-community 组织涵盖了大多数主要模型：Llama 3、Qwen 3、Mistral、Phi-3/4、Gemma 2 以及许多微调版本。4 位和 8 位量化版本通常均可获得。访问 huggingface.co/mlx-community 并按模型系列名称搜索。',
          },
          {
            q: '转换为 MLX 时应使用哪种量化方式？',
            a: '对于 16 GB 统一内存上的大多数 7B–14B 模型，请使用 4 位量化（<code>-q</code> 标志的默认值）。对于 7B 模型，这会生成约 4 GB 的模型，在 M1/M2/M3/M4 芯片上运行良好。仅在拥有 32 GB 或以上内存且需要更高输出质量时才使用 8 位量化。',
          },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[Apple Silicon上的Ollama + MLX](/zh/prompt-bites/ollama-mlx-apple-silicon) -- Ollama + MLX on Apple Silicon',
          '[Mac上MLX vs Ollama vs llama.cpp](/zh/prompt-bites/mlx-vs-ollama-vs-llamacpp) -- MLX vs Ollama vs llama.cpp on Mac',
          '[纯CPU最佳Ollama模型](/zh/prompt-bites/best-ollama-models-cpu-only) -- best Ollama models CPU-only',
          '[MacBook本地LLM最佳eGPU设置2026](/zh/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026) -- eGPU setup for MacBook',
        ],
      },
    },
  },
  pt: {
    theme: 'Tool Comparisons',
    title: 'Como converter modelos do Ollama para o formato MLX',
    seoTitle: 'Converter modelos do Ollama para MLX 2026 | PromptQuorum',
    metaDescription: 'Você não pode converter modelos do Ollama para MLX diretamente. Use pesos do Hugging Face + mlx-lm convert. A maioria dos modelos populares já tem versão MLX pré-convertida.',
    publishDate: '2026-05-22',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: ['Llama 3', 'Qwen', 'Mistral'],
    current_hardware_mentioned: ['Apple Silicon'],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores Mac que querem modelos no formato MLX do ecossistema Ollama',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['mlx-vs-ollama-vs-llamacpp', 'ollama-mlx-apple-silicon', 'ollama-vs-lm-studio'],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'Como você converte um modelo do Ollama para o formato MLX?',
        answer: 'Você não pode converter modelos do Ollama diretamente para MLX. Em vez disso, baixe os pesos GGUF ou SafeTensors originais do Hugging Face e converta com mlx-lm convert. Para a maioria dos modelos populares (Llama 3, Qwen, Mistral), versões MLX pré-convertidas já existem no Hugging Face sob a organização mlx-community.',
        bullets: [
          'Você não pode converter modelos do Ollama diretamente — o formato do modelo é diferente',
          'Modelos MLX pré-convertidos existem em huggingface.co/mlx-community para a maioria dos modelos populares',
          'Para converter você mesmo: baixe do Hugging Face, depois execute mlx_lm.convert',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Você não pode converter modelos Ollama GGUF diretamente para MLX — precisa começar com os pesos originais do Hugging Face',
          'Modelos populares já têm versões MLX em huggingface.co/mlx-community — pesquise seu modelo primeiro antes de converter',
          'Para converter: baixe os pesos do Hugging Face, depois execute `mlx_lm.convert --model-path <caminho> -o <saída>`',
        ],
      },
      body1: {
        title: 'Por que você não pode converter diretamente?',
        content: [
          'Os modelos do Ollama estão no formato GGUF (quantizados de 4–8 bits). MLX requer os pesos originais de 16 bits do Hugging Face porque precisa re-quantizar com algoritmos nativos do Apple Silicon.',
          'Se você tentar converter diretamente do GGUF, perde informação de precisão durante a quantização e o resultado é de qualidade inferior.',
          'A solução: começar com os pesos não quantizados do Hugging Face e deixar o mlx-lm re-quantizar otimizando para Metal no Apple Silicon.',
        ],
      },
      body2: {
        title: 'Como converter (se necessário)',
        content: [
          '<strong>Primeira tentativa: pesquise seu modelo na mlx-community.</strong> Execute: `pip install mlx-lm` e depois `python -m mlx_lm.generate --model mlx-community/model-name-4bit`. Se funcionar, já está pré-convertido.',
          '<strong>Se não estiver disponível, converta você mesmo:</strong> baixe os pesos originais com `git clone https://huggingface.co/owner/model`, depois execute `mlx_lm.convert --model-path ./model -o ./mlx_model` (isso leva 5–10 minutos).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas rápidas sobre conversão do Ollama para MLX',
        faqs: [
          {
            q: 'Onde encontro modelos MLX pré-convertidos?',
            a: 'No Hugging Face sob a organização mlx-community: huggingface.co/mlx-community. Pesquise seu modelo (Llama, Qwen, Mistral, etc.). Se não estiver lá, você precisará converter você mesmo.',
          },
          {
            q: 'Quanto tempo demora a conversão?',
            a: 'Tipicamente 5–10 minutos para um modelo 7B em um M5 Pro. Modelos maiores podem levar 20+ minutos. A conversão é uma operação única — o modelo resultante é armazenado localmente.',
          },
          {
            q: 'Qual quantização devo usar ao converter para MLX?',
            a: 'Para a maioria dos modelos 7B–14B em memória unificada de 16 GB, use quantização de 4 bits (é o padrão para o flag `-q`). Isso produz um modelo de ~4 GB que funciona bem nos chips M1/M2/M3/M4. Use quantização de 8 bits apenas se tiver 32+ GB de memória e precisar de maior qualidade de saída.',
          },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[Ollama + MLX no Apple Silicon](/pt/prompt-bites/ollama-mlx-apple-silicon) -- Ollama + MLX on Apple Silicon',
          '[MLX vs Ollama vs llama.cpp no Mac](/pt/prompt-bites/mlx-vs-ollama-vs-llamacpp) -- MLX vs Ollama vs llama.cpp on Mac',
          '[Melhores modelos Ollama somente para CPU](/pt/prompt-bites/best-ollama-models-cpu-only) -- best Ollama models CPU-only',
          '[Melhor configuração eGPU para MacBook LLM local 2026](/pt/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026) -- eGPU setup for MacBook',
        ],
      },
    },
  },
  es: {
    theme: 'Tool Comparisons',
    title: 'Cómo convertir modelos de Ollama a formato MLX',
    seoTitle: 'Convertir modelos de Ollama a MLX 2026 | PromptQuorum',
    metaDescription: 'No puedes convertir modelos de Ollama a MLX directamente. Usa pesos de Hugging Face + mlx-lm convert. La mayoría de modelos populares ya tienen versión MLX.',
    publishDate: '2026-05-22',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: ['Llama 3', 'Qwen', 'Mistral'],
    current_hardware_mentioned: ['Apple Silicon'],
    educationalLevel: 'Intermedio',
    audience: 'Desarrolladores Mac queriendo modelos en formato MLX del ecosistema Ollama',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['mlx-vs-ollama-vs-llamacpp', 'ollama-mlx-apple-silicon', 'ollama-vs-lm-studio'],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Cómo conviertes un modelo de Ollama a formato MLX?',
        answer: 'No puedes convertir directamente modelos de Ollama a MLX. En su lugar, descarga los pesos GGUF o SafeTensors originales de Hugging Face, luego convierte con mlx-lm convert. Para la mayoría de modelos populares (Llama 3, Qwen, Mistral), versiones MLX preconvertidas ya existen en Hugging Face bajo la organización mlx-community.',
        bullets: [
          'No puedes convertir modelos de Ollama directamente — el formato de modelo es diferente',
          'Modelos MLX preconvertidos existen en huggingface.co/mlx-community para la mayoría de modelos populares',
          'Para convertir tu mismo: descarga desde Hugging Face, luego ejecuta mlx_lm.convert',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'No puedes convertir modelos de Ollama GGUF directamente a MLX — tienes que comenzar con los pesos originales en Hugging Face',
          'Los modelos populares ya tienen versiones MLX en huggingface.co/mlx-community — busca tu modelo primero antes de convertir',
          'Para convertir: descarga pesos de Hugging Face, luego ejecuta `mlx_lm.convert --model-path <ruta> -o <salida>`',
        ],
      },
      body1: {
        title: '¿Por qué no puedes convertir directamente?',
        content: [
          'Los modelos de Ollama están en formato GGUF (cuantizados de 4-8 bits). MLX requiere los pesos originales de 16 bits de Hugging Face porque necesita re-cuantizar con algoritmos nativos de Apple Silicon.',
          'Si intentas convertir directamente desde GGUF, pierdes información de precisión durante la cuantización y el resultado es de menor calidad.',
          'La solución: comenzar con los pesos sin cuantizar de Hugging Face, luego dejar que mlx-lm re-cuantize optimizando para Metal en Apple Silicon.',
        ],
      },
      body2: {
        title: 'Cómo convertir (si es necesario)',
        content: [
          '<strong>Primer intento: busca tu modelo en mlx-community.</strong> Ejecuta: `pip install mlx-lm` y luego `python -m mlx_lm.generate --model mlx-community/model-name-4bit`. Si funciona, está preconvertido.',
          '<strong>Si no está disponible, convierte tu mismo:</strong> descarga pesos originales con `git clone https://huggingface.co/owner/model`, luego ejecuta `mlx_lm.convert --model-path ./model -o ./mlx_model` (esto toma 5-10 minutos).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas rápidas sobre conversión de Ollama a MLX',
        faqs: [
          {
            q: '¿Dónde encuentro modelos MLX preconvertidos?',
            a: 'En Hugging Face bajo la organización mlx-community: huggingface.co/mlx-community. Busca tu modelo (Llama, Qwen, Mistral, etc.). Si no está allí, tendrás que convertir tu mismo.',
          },
          {
            q: '¿Cuánto tiempo tarda la conversión?',
            a: 'Typically 5–10 minutos para un modelo 7B en un M5 Pro. Modelos más grandes pueden tomar 20+ minutos. La conversión es una operación de una sola vez — el modelo resultante se cachea localmente.',
          },
          {
            q: '¿Qué cuantización debería usar cuando conviertes a MLX?',
            a: 'Para la mayoría de modelos 7B–14B en memoria unificada de 16 GB, usa cuantización de 4 bits (es el predeterminado para el flag `-q`). Esto produce un modelo de ~4 GB que funciona bien en chips M1/M2/M3/M4. Solo usa cuantización de 8 bits si tienes 32+ GB de memoria y necesitas mayor calidad de salida.',
          },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[Ollama + MLX en Apple Silicon](/es/prompt-bites/ollama-mlx-apple-silicon) -- Ollama + MLX on Apple Silicon',
          '[MLX vs Ollama vs llama.cpp en Mac](/es/prompt-bites/mlx-vs-ollama-vs-llamacpp) -- MLX vs Ollama vs llama.cpp on Mac',
          '[Mejores modelos Ollama solo para CPU](/es/prompt-bites/best-ollama-models-cpu-only) -- best Ollama models CPU-only',
          '[Mejor configuración eGPU para MacBook LLM local 2026](/es/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026) -- eGPU setup for MacBook',
        ],
      },
    },
  },
  ar: {
    theme: 'Tool Comparisons',
    title: 'كيفية تحويل نماذج ⁨Ollama⁩ إلى صيغة ⁨MLX⁩',
    seoTitle: 'تحويل نماذج ⁨Ollama⁩ إلى ⁨MLX 2026⁩ | ⁨PromptQuorum⁩',
    metaDescription: 'معظم نماذج ⁨Llama 3⁩ و⁨Qwen⁩ و⁨Mistral⁩ لها نسخ ⁨MLX⁩ جاهزة على ⁨Hugging Face⁩. لا يمكن تحويل نماذج ⁨Ollama⁩ مباشرةً؛ استخدم ⁨mlx-lm convert⁩.',
    publishDate: '2026-05-22',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: ['Llama 3', 'Qwen', 'Mistral'],
    current_hardware_mentioned: ['Apple Silicon'],
    educationalLevel: 'Intermediate',
    audience: 'مطورو Mac الراغبون في نماذج بصيغة MLX من منظومة Ollama',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['mlx-vs-ollama-vs-llamacpp', 'ollama-mlx-apple-silicon', 'ollama-vs-lm-studio'],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'كيف تحوّل نموذج Ollama إلى صيغة MLX؟',
        answer: 'لا يمكنك تحويل نماذج Ollama إلى MLX مباشرةً. بدلًا من ذلك، نزّل الأوزان الأصلية بصيغة GGUF أو SafeTensors من Hugging Face ثم حوّلها بـ mlx-lm convert. لمعظم النماذج الشائعة (Llama 3 وQwen وMistral)، توجد نسخ MLX محوَّلة مسبقًا على Hugging Face تحت منظمة mlx-community.',
        bullets: [
          'لا يمكن تحويل نماذج Ollama مباشرةً — صيغة النموذج مختلفة',
          'نماذج MLX محوَّلة مسبقًا متوفرة على huggingface.co/mlx-community لمعظم النماذج الشائعة',
          'للتحويل بنفسك: نزّل من Hugging Face ثم نفّذ mlx_lm.convert',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'لا يمكن تحويل نماذج Ollama بصيغة GGUF إلى MLX مباشرةً — يجب البدء بالأوزان الأصلية من Hugging Face',
          'النماذج الشائعة لديها نسخ MLX جاهزة على huggingface.co/mlx-community — ابحث عن نموذجك أولًا قبل التحويل',
          'للتحويل: نزّل الأوزان من Hugging Face ثم نفّذ `mlx_lm.convert --model-path <مسار> -o <مخرج>`',
        ],
      },
      body1: {
        title: 'لماذا لا يمكن التحويل المباشر؟',
        content: [
          'نماذج Ollama بصيغة GGUF (مضغوطة 4–8 بت). تتطلب MLX الأوزان الأصلية 16 بت من Hugging Face لأنها تحتاج إلى إعادة الضغط باستخدام خوارزميات Apple Silicon الأصلية.',
          'إذا حاولت التحويل مباشرةً من GGUF، ستفقد معلومات الدقة خلال الضغط وينتج عنه جودة أدنى.',
          'الحل: البدء بالأوزان غير المضغوطة من Hugging Face ثم السماح لـ mlx-lm بإعادة الضغط مُحسَّنًا لـ Metal على Apple Silicon.',
        ],
      },
      body2: {
        title: 'كيفية التحويل (إذا لزم الأمر)',
        content: [
          '<strong>المحاولة الأولى: ابحث عن نموذجك في mlx-community.</strong> نفّذ: `pip install mlx-lm` ثم `python -m mlx_lm.generate --model mlx-community/model-name-4bit`. إذا نجح، فالنموذج محوَّل مسبقًا.',
          '<strong>إذا لم يكن متاحًا، حوّله بنفسك:</strong> نزّل الأوزان الأصلية بـ `git clone https://huggingface.co/owner/model` ثم نفّذ `mlx_lm.convert --model-path ./model -o ./mlx_model` (يستغرق 5–10 دقائق).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول تحويل نماذج Ollama إلى MLX',
        faqs: [
          {
            q: 'أين أجد نماذج MLX المحوَّلة مسبقًا؟',
            a: 'على Hugging Face تحت منظمة mlx-community: huggingface.co/mlx-community. ابحث عن نموذجك (Llama وQwen وMistral وغيرها). إذا لم يكن موجودًا، ستحتاج إلى التحويل بنفسك.',
          },
          {
            q: 'كم يستغرق التحويل؟',
            a: 'عادةً 5–10 دقائق لنموذج 7B على M5 Pro. النماذج الأكبر قد تستغرق أكثر من 20 دقيقة. التحويل عملية تُجرى مرة واحدة — النموذج الناتج يُخزَّن محليًا.',
          },
          {
            q: 'ما مستوى الضغط المناسب عند التحويل إلى MLX؟',
            a: 'لمعظم نماذج 7B–14B على ذاكرة موحّدة 16 GB، استخدم الضغط 4 بت (الإعداد الافتراضي للعلامة `-q`). ينتج عنه نموذج ~4 GB يعمل بكفاءة على رقائق M1/M2/M3/M4. استخدم 8 بت فقط إذا كانت لديك 32 GB أو أكثر وتحتاج إلى جودة إخراج أعلى.',
          },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[Ollama + MLX على Apple Silicon](/ar/prompt-bites/ollama-mlx-apple-silicon) -- Ollama + MLX on Apple Silicon',
          '[MLX مقابل Ollama مقابل llama.cpp على Mac](/ar/prompt-bites/mlx-vs-ollama-vs-llamacpp) -- MLX vs Ollama vs llama.cpp on Mac',
          '[أفضل نماذج Ollama لـCPU فقط](/ar/prompt-bites/best-ollama-models-cpu-only) -- best Ollama models CPU-only',
          '[أفضل إعداد eGPU لـMacBook LLM محلي 2026](/ar/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026) -- eGPU setup for MacBook',
        ],
      },
    },
  },
  ko: {
    theme: 'Tool Comparisons',
    title: 'Ollama 모델을 MLX 형식으로 변환하는 방법',
    seoTitle: 'Ollama 모델 MLX 변환 2026 | PromptQuorum',
    metaDescription: 'Ollama 모델을 MLX로 직접 변환할 수 없습니다. Hugging Face 가중치와 mlx-lm convert를 사용하십시오. 대부분의 인기 모델은 이미 MLX 버전이 존재합니다.',
    publishDate: '2026-05-22',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: ['Llama 3', 'Qwen', 'Mistral'],
    current_hardware_mentioned: ['Apple Silicon'],
    educationalLevel: '중급',
    audience: 'Ollama 생태계에서 MLX 형식 모델을 원하는 Mac 개발자',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['mlx-vs-ollama-vs-llamacpp', 'ollama-mlx-apple-silicon', 'ollama-vs-lm-studio'],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: 'Ollama 모델을 MLX 형식으로 어떻게 변환합니까?',
        answer: 'Ollama 모델을 MLX로 직접 변환할 수 없습니다. 대신 Hugging Face에서 원본 GGUF 또는 SafeTensors 가중치를 다운로드한 후 mlx-lm convert로 변환하십시오. 대부분의 인기 모델(Llama 3, Qwen, Mistral)은 Hugging Face의 mlx-community 조직 아래에 이미 사전 변환된 MLX 버전이 있습니다.',
        bullets: [
          'Ollama 모델은 직접 변환할 수 없습니다 — 모델 형식이 다릅니다',
          '사전 변환된 MLX 모델이 대부분의 인기 모델에 대해 huggingface.co/mlx-community에 존재합니다',
          '직접 변환하려면: Hugging Face에서 다운로드한 후 mlx_lm.convert를 실행하십시오',
        ],
        updatedDate: '2026-05',
      },
    },
    targetKeywords: [
      'Ollama MLX 변환',
      'Ollama 모델 MLX 형식',
      'mlx-lm convert 사용법',
      'Hugging Face MLX 모델 다운로드',
      'Apple Silicon 로컬 LLM',
    ],
    readTime: '3분 분량',
    schema: {
      inLanguage: 'ko',
      url: 'https://www.promptquorum.com/ko/prompt-bites/convert-ollama-model-to-mlx',
      'proficiencyLevel': '중급',
    },
    breadcrumbSchema: {
      items: [
        { position: 1, name: '홈', url: 'https://www.promptquorum.com/ko' },
        { position: 2, name: 'Prompt Bites', url: 'https://www.promptquorum.com/ko/prompt-bites' },
        { position: 3, name: 'Ollama 모델을 MLX 형식으로 변환하는 방법', url: 'https://www.promptquorum.com/ko/prompt-bites/convert-ollama-model-to-mlx' },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama GGUF 모델은 MLX로 직접 변환할 수 없습니다 — Hugging Face의 원본 가중치에서 시작해야 합니다',
          '인기 모델은 이미 huggingface.co/mlx-community에 MLX 버전이 있습니다 — 변환 전에 먼저 검색하십시오',
          '변환하려면: Hugging Face에서 가중치를 다운로드한 후 `mlx_lm.convert --model-path <경로> -o <출력>`을 실행하십시오',
        ],
      },
      body1: {
        title: '직접 변환이 불가능한 이유',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Ollama 모델은 GGUF 형식으로 압축되어 있어 MLX가 필요로 하는 원본 16비트 가중치 정보가 손실됩니다.' },
          { type: 'plain-terms', text: 'Ollama는 모델을 GGUF 형식(4~8비트 압축)으로 저장합니다. MLX는 Apple Silicon용 알고리즘으로 재압축하기 위해 Hugging Face의 원본 16비트 가중치가 필요합니다. GGUF에서 직접 변환하면 압축 과정에서 정밀도 정보가 손실되어 품질이 저하됩니다.' },
        ],
        content: [
          'Ollama 모델은 GGUF 형식(4~8비트 압축)으로 저장됩니다. MLX는 Apple Silicon 네이티브 알고리즘으로 재압축하기 위해 Hugging Face의 원본 16비트 가중치가 필요합니다.',
          'GGUF에서 직접 변환을 시도하면 압축 과정에서 정밀도 정보가 손실되어 결과 모델의 품질이 저하됩니다.',
          '해결책: Hugging Face에서 비압축 가중치로 시작한 후 mlx-lm이 Apple Silicon의 Metal에 최적화된 방식으로 재압축하도록 하십시오.',
        ],
      },
      body2: {
        title: '변환 방법 (필요한 경우)',
        content: [
          '<strong>첫 번째 시도: mlx-community에서 모델을 검색하십시오.</strong> `pip install mlx-lm`을 실행한 후 `python -m mlx_lm.generate --model mlx-community/model-name-4bit`를 실행하십시오. 작동하면 이미 사전 변환된 것입니다.',
          '<strong>사용 가능하지 않은 경우 직접 변환하십시오:</strong> `git clone https://huggingface.co/owner/model`로 원본 가중치를 다운로드한 후 `mlx_lm.convert --model-path ./model -o ./mlx_model`을 실행하십시오(5~10분 소요).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Ollama에서 MLX 변환에 관한 자주 묻는 질문',
        faqs: [
          {
            q: '사전 변환된 MLX 모델은 어디서 찾을 수 있습니까?',
            a: 'Hugging Face의 mlx-community 조직(huggingface.co/mlx-community)에서 찾을 수 있습니다. 원하는 모델(Llama, Qwen, Mistral 등)을 검색하십시오. 없는 경우 직접 변환해야 합니다.',
          },
          {
            q: '변환에 얼마나 시간이 걸립니까?',
            a: 'M5 Pro에서 7B 모델의 경우 일반적으로 5~10분이 소요됩니다. 더 큰 모델은 20분 이상 걸릴 수 있습니다. 변환은 한 번만 수행하면 되며 결과 모델은 로컬에 캐시됩니다.',
          },
          {
            q: 'MLX로 변환할 때 어떤 양자화를 사용해야 합니까?',
            a: '16 GB 통합 메모리에서 대부분의 7B~14B 모델에는 4비트 양자화(`-q` 플래그의 기본값)를 사용하십시오. 이는 M1/M2/M3/M4 칩에서 잘 작동하는 ~4 GB 모델을 생성합니다. 32 GB 이상의 메모리가 있고 더 높은 출력 품질이 필요한 경우에만 8비트 양자화를 사용하십시오.',
          },
        ],
      },
      relatedReading: {
        title: '관련 읽을거리',
        items: [
          '[MLX vs Ollama vs llama.cpp 비교](/ko/prompt-bites/mlx-vs-ollama-vs-llamacpp)',
          '[Apple Silicon에서 Ollama와 MLX 함께 사용하기](/ko/prompt-bites/ollama-mlx-apple-silicon)',
          '[Ollama vs LM Studio 비교](/ko/prompt-bites/ollama-vs-lm-studio)',
          '[Apple Silicon 로컬 LLM 가이드 2026](/ko/local-llms/apple-silicon-local-llm-guide-2026)',
          '[CPU 전용 최고의 Ollama 모델](/ko/prompt-bites/best-ollama-models-cpu-only) -- best Ollama models CPU-only',
          '[MacBook 로컬 LLM 최고의 eGPU 설정 2026](/ko/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026) -- eGPU setup for MacBook',
        ],
      },
    },
  },
}

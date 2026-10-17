import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    heroImage: '/images/convert-ollama-model-to-mlx-overview-hero-en.webp',
    title: 'How to Convert Ollama Models to MLX Format',
    dateModified: '2026-10-17',
    seoTitle: 'Convert Ollama Model to MLX 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'You cannot directly convert Ollama models to MLX. Instead, use Hugging Face weights + mlx-lm convert. Most popular models already have pre-converted MLX versions on Hugging Face.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    last_full_refresh: '2026-10-17',
    current_models_mentioned: ['Llama 3', 'Qwen3.5', 'Mistral', 'DeepSeek V4.1 Flash'],
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
        updatedDate: '2026-10',
      },
      de: {
        question: 'Wie konvertiert man ein Ollama-Modell in das MLX-Format?',
        answer: 'Sie können Ollama-Modelle nicht direkt in MLX konvertieren. Laden Sie stattdessen die originalen GGUF- oder SafeTensors-Gewichte von Hugging Face herunter und konvertieren Sie diese mit mlx-lm convert. Für die meisten gängigen Modelle (Llama 3, Qwen, Mistral) existieren auf Hugging Face bereits vorkonvertierte MLX-Versionen unter der mlx-community-Organisation.',
        bullets: [
          'Ollama-Modelle können nicht direkt konvertiert werden — das Modellformat ist unterschiedlich',
          'Vorkonvertierte MLX-Modelle sind auf huggingface.co/mlx-community für die meisten gängigen Modelle verfügbar',
          'Selbst konvertieren: von Hugging Face herunterladen, dann mlx_lm.convert ausführen',
        ],
        updatedDate: '2026-10',
      },
      fr: {
        question: 'Comment convertir un modèle Ollama au format MLX ?',
        answer: 'Vous ne pouvez pas convertir directement les modèles Ollama en MLX. À la place, téléchargez les poids GGUF ou SafeTensors originaux depuis Hugging Face, puis convertissez-les avec mlx-lm convert. Pour la plupart des modèles populaires (Llama 3, Qwen, Mistral), des versions MLX pré-converties existent déjà sur Hugging Face sous l\'organisation mlx-community.',
        bullets: [
          'Vous ne pouvez pas convertir les modèles Ollama directement — le format de modèle est différent',
          'Des modèles MLX pré-convertis existent sur huggingface.co/mlx-community pour la plupart des modèles populaires',
          'Pour convertir vous-même : téléchargez depuis Hugging Face, puis exécutez mlx_lm.convert',
        ],
        updatedDate: '2026-10',
      },
      ja: {
        question: 'OllamaモデルをMLX形式に変換するにはどうすればよいですか？',
        answer: 'OllamaモデルをMLXに直接変換することはできません。代わりに、Hugging FaceからオリジナルのGGUFまたはSafeTensorsの重みをダウンロードし、mlx-lm convertで変換してください。Llama 3、Qwen、Mistralなど人気モデルのほとんどは、mlx-communityオーガニゼーション配下のHugging Faceにすでに事前変換済みMLXバージョンが存在します。',
        bullets: [
          'Ollamaモデルは直接変換できません — モデル形式が異なります',
          '事前変換済みMLXモデルはhuggingface.co/mlx-communityで人気モデルのほとんどが公開されています',
          '自分で変換する場合：Hugging Faceからダウンロードし、mlx_lm.convertを実行',
        ],
        updatedDate: '2026-10',
      },
      zh: {
        question: '如何将 Ollama 模型转换为 MLX 格式？',
        answer: '您无法直接将 Ollama 模型转换为 MLX 格式。请改为从 Hugging Face 下载原始 GGUF 或 SafeTensors 权重，然后使用 mlx-lm convert 进行转换。对于大多数流行模型（Llama 3、Qwen、Mistral），Hugging Face 的 mlx-community 组织下已有预转换的 MLX 版本。',
        bullets: [
          '无法直接转换 Ollama 模型——模型格式不同',
          '大多数流行模型的预转换 MLX 版本可在 huggingface.co/mlx-community 获取',
          '自行转换：从 Hugging Face 下载，然后运行 mlx_lm.convert',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama keeps models in its own store at ~/.ollama/models — mlx-lm cannot read it, even though Ollama 0.19 and later can run some models on MLX itself',
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
          'The converter also accepts <code>--q-bits</code> (bits per weight, such as 8), <code>--q-group-size</code>, and <code>--q-mode</code> (<code>affine</code> by default; <code>mxfp4</code>, <code>nvfp4</code> and <code>mxfp8</code> are also available). Run <code>mlx_lm.convert --help</code> to list every option in your installed version of <a href="https://github.com/ml-explore/mlx-lm" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">mlx-lm</a>.',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.convert --hf-path original-org/model-name --mlx-path ./converted-model -q',
        codeLanguage: 'bash',
      },
      body3: {
        title: 'Ollama\'s MLX backend does not replace conversion',
        content: [
          'Ollama 0.19, released on March 30, 2026, added an MLX-based engine for Apple Silicon. <a href="https://ollama.com/blog/mlx" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">Ollama\'s announcement</a> describes it as a preview for Macs with more than 32 GB of unified memory, launched with Qwen3.5-35B-A3B. It speeds up inference inside Ollama.',
          'Ollama does not document a way to export its stored models for mlx-lm. To get an MLX model for mlx-lm, the steps above still apply: use a pre-converted mlx-community upload or convert the original Hugging Face weights yourself.',
        ],
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
            a: 'The mlx-community organization covers most major models: Llama, Qwen, Mistral, Phi, Gemma, DeepSeek V4.1 Flash, and many fine-tunes. Both 4-bit and 8-bit quantized versions are usually available. Visit huggingface.co/mlx-community and search by model family name.',
          },
          {
            q: 'What quantization should I use when converting to MLX?',
            a: 'For most 7B–14B models on 16 GB unified memory, use 4-bit quantization (the default with the <code>-q</code> flag). For a 7B model, this produces a ~4 GB model that runs well on M1/M2/M3/M4 chips. Use 8-bit only if you have 32 GB or more and need higher output quality.',
          },
          {
            q: 'Does Ollama now run models on MLX?',
            a: 'Yes, as a preview. Ollama 0.19 (March 30, 2026) added an MLX-based engine for Apple Silicon, announced for Macs with more than 32 GB of unified memory and launched with Qwen3.5-35B-A3B. It runs inside Ollama; Ollama does not document exporting its models for use with mlx-lm.',
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
    heroImage: '/images/convert-ollama-model-to-mlx-overview-hero-de.webp',
    title: 'Ollama-Modelle in das MLX-Format konvertieren',
    seoTitle: 'Ollama-Modell zu MLX konvertieren 2026',
    metaDescription: 'Ollama-Modelle lassen sich nicht direkt in MLX konvertieren. Nutzen Sie Hugging-Face-Gewichte + mlx-lm convert. Viele Modelle gibt es bereits vorkonvertiert.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      de: {
        question: 'Wie konvertiert man ein Ollama-Modell in das MLX-Format?',
        answer: 'Sie können Ollama-Modelle nicht direkt in MLX konvertieren. Laden Sie stattdessen die originalen GGUF- oder SafeTensors-Gewichte von Hugging Face herunter und konvertieren Sie diese mit mlx-lm convert. Für die meisten gängigen Modelle (Llama 3, Qwen, Mistral) existieren auf Hugging Face bereits vorkonvertierte MLX-Versionen unter der mlx-community-Organisation.',
        bullets: [
          'Ollama-Modelle können nicht direkt konvertiert werden — das Modellformat ist unterschiedlich',
          'Vorkonvertierte MLX-Modelle sind auf huggingface.co/mlx-community für die meisten gängigen Modelle verfügbar',
          'Selbst konvertieren: von Hugging Face herunterladen, dann mlx_lm.convert ausführen',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama speichert Modelle in einem eigenen Speicher unter ~/.ollama/models — mlx-lm kann ihn nicht lesen, auch wenn Ollama 0.19 und neuer einige Modelle selbst über MLX ausführen kann',
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
          'Der Konverter akzeptiert außerdem <code>--q-bits</code> (Bits pro Gewicht, z. B. 8), <code>--q-group-size</code> und <code>--q-mode</code> (standardmäßig <code>affine</code>; zusätzlich verfügbar: <code>mxfp4</code>, <code>nvfp4</code> und <code>mxfp8</code>). Mit <code>mlx_lm.convert --help</code> sehen Sie alle Optionen Ihrer installierten Version von <a href="https://github.com/ml-explore/mlx-lm" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">mlx-lm</a>.',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.convert --hf-path original-org/model-name --mlx-path ./converted-model -q',
        codeLanguage: 'bash',
      },
      body3: {
        title: 'Das MLX-Backend von Ollama ersetzt die Konvertierung nicht',
        content: [
          'Ollama 0.19, veröffentlicht am 30. März 2026, brachte eine MLX-basierte Engine für Apple Silicon. <a href="https://ollama.com/blog/mlx" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">Die Ollama-Ankündigung</a> beschreibt sie als Preview für Macs mit mehr als 32 GB Unified Memory, gestartet mit Qwen3.5-35B-A3B. Sie beschleunigt die Inferenz innerhalb von Ollama.',
          'Ollama dokumentiert keinen Weg, gespeicherte Modelle für mlx-lm zu exportieren. Für ein MLX-Modell zur Nutzung mit mlx-lm gelten weiterhin die obigen Schritte: ein vorkonvertiertes mlx-community-Modell verwenden oder die originalen Hugging-Face-Gewichte selbst konvertieren.',
        ],
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
            a: 'Die mlx-community-Organisation deckt die meisten großen Modelle ab: Llama, Qwen, Mistral, Phi, Gemma, DeepSeek V4.1 Flash und viele Fine-Tunes. Sowohl 4-Bit- als auch 8-Bit-quantisierte Versionen sind in der Regel verfügbar. Besuchen Sie huggingface.co/mlx-community und suchen Sie nach dem Modellfamiliennamen.',
          },
          {
            q: 'Welche Quantisierung sollte ich bei der MLX-Konvertierung verwenden?',
            a: 'Für die meisten 7B–14B-Modelle mit 16 GB Unified Memory empfiehlt sich 4-Bit-Quantisierung (Standard mit dem Flag <code>-q</code>). Bei einem 7B-Modell ergibt das ein ~4 GB großes Modell, das auf M1/M2/M3/M4-Chips gut läuft. Verwenden Sie 8-Bit nur, wenn Sie 32 GB oder mehr haben und höhere Ausgabequalität benötigen.',
          },
          {
            q: 'Führt Ollama Modelle inzwischen über MLX aus?',
            a: 'Ja, als Preview. Ollama 0.19 (30. März 2026) brachte eine MLX-basierte Engine für Apple Silicon, angekündigt für Macs mit mehr als 32 GB Unified Memory und gestartet mit Qwen3.5-35B-A3B. Sie läuft innerhalb von Ollama; Ollama dokumentiert keinen Export seiner Modelle für mlx-lm.',
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
    heroImage: '/images/convert-ollama-model-to-mlx-overview-hero-fr.webp',
    title: 'Comment convertir des modèles Ollama au format MLX',
    seoTitle: 'Convertir un modèle Ollama en MLX 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Vous ne pouvez pas convertir directement les modèles Ollama en MLX. Utilisez plutôt les poids Hugging Face + mlx-lm convert. La plupart des modèles populaires disposent déjà de versions MLX pré-converties sur Hugging Face.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      fr: {
        question: 'Comment convertir un modèle Ollama au format MLX ?',
        answer: 'Vous ne pouvez pas convertir directement les modèles Ollama en MLX. À la place, téléchargez les poids GGUF ou SafeTensors originaux depuis Hugging Face, puis convertissez-les avec mlx-lm convert. Pour la plupart des modèles populaires (Llama 3, Qwen, Mistral), des versions MLX pré-converties existent déjà sur Hugging Face sous l\'organisation mlx-community.',
        bullets: [
          'Vous ne pouvez pas convertir les modèles Ollama directement — le format de modèle est différent',
          'Des modèles MLX pré-convertis existent sur huggingface.co/mlx-community pour la plupart des modèles populaires',
          'Pour convertir vous-même : téléchargez depuis Hugging Face, puis exécutez mlx_lm.convert',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama conserve les modèles dans son propre stockage (~/.ollama/models) — mlx-lm ne peut pas le lire, même si Ollama 0.19 et les versions suivantes peuvent exécuter certains modèles via MLX',
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
          'Le convertisseur accepte aussi <code>--q-bits</code> (bits par poids, par exemple 8), <code>--q-group-size</code> et <code>--q-mode</code> (<code>affine</code> par défaut ; <code>mxfp4</code>, <code>nvfp4</code> et <code>mxfp8</code> sont aussi disponibles). Exécutez <code>mlx_lm.convert --help</code> pour lister toutes les options de votre version installée de <a href="https://github.com/ml-explore/mlx-lm" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">mlx-lm</a>.',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.convert --hf-path original-org/model-name --mlx-path ./converted-model -q',
        codeLanguage: 'bash',
      },
      body3: {
        title: 'Le backend MLX d\'Ollama ne remplace pas la conversion',
        content: [
          'Ollama 0.19, publié le 30 mars 2026, a ajouté un moteur basé sur MLX pour Apple Silicon. <a href="https://ollama.com/blog/mlx" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">L\'annonce d\'Ollama</a> le décrit comme une préversion pour les Mac avec plus de 32 Go de mémoire unifiée, lancée avec Qwen3.5-35B-A3B. Il accélère l\'inférence au sein d\'Ollama.',
          'Ollama ne documente aucun moyen d\'exporter ses modèles stockés vers mlx-lm. Pour obtenir un modèle MLX utilisable avec mlx-lm, les étapes ci-dessus restent valables : utiliser un modèle pré-converti de mlx-community ou convertir vous-même les poids Hugging Face d\'origine.',
        ],
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
            a: 'L\'organisation mlx-community couvre la plupart des modèles majeurs : Llama, Qwen, Mistral, Phi, Gemma, DeepSeek V4.1 Flash et de nombreux fine-tunes. Des versions quantifiées en 4 bits et 8 bits sont généralement disponibles. Visitez huggingface.co/mlx-community et recherchez par nom de famille de modèle.',
          },
          {
            q: 'Quelle quantification utiliser lors de la conversion en MLX ?',
            a: 'Pour la plupart des modèles 7B–14B sur 16 Go de mémoire unifiée, utilisez la quantification en 4 bits (la valeur par défaut avec le flag <code>-q</code>). Pour un modèle 7B, cela produit un modèle d\'environ 4 Go qui fonctionne bien sur les puces M1/M2/M3/M4. Utilisez 8 bits uniquement si vous disposez de 32 Go ou plus et avez besoin d\'une meilleure qualité de sortie.',
          },
          {
            q: 'Ollama exécute-t-il désormais des modèles via MLX ?',
            a: 'Oui, en préversion. Ollama 0.19 (30 mars 2026) a ajouté un moteur basé sur MLX pour Apple Silicon, annoncé pour les Mac avec plus de 32 Go de mémoire unifiée et lancé avec Qwen3.5-35B-A3B. Il fonctionne au sein d\'Ollama ; Ollama ne documente pas d\'export de ses modèles vers mlx-lm.',
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
    heroImage: '/images/convert-ollama-model-to-mlx-overview-hero-ja.webp',
    title: 'OllamaモデルをMLX形式に変換する方法',
    seoTitle: 'OllamaモデルをMLXに変換 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'OllamaモデルをMLXに直接変換することはできません。代わりにHugging Faceの重みとmlx-lm convertを使用してください。Qwen 3をはじめ多くの人気モデルはHugging Faceにすでに事前変換済みMLXバージョンが存在します。',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ja: {
        question: 'OllamaモデルをMLX形式に変換するにはどうすればよいですか？',
        answer: 'OllamaモデルをMLXに直接変換することはできません。代わりに、Hugging FaceからオリジナルのGGUFまたはSafeTensorsの重みをダウンロードし、mlx-lm convertで変換してください。Llama 3、Qwen、Mistralなど人気モデルのほとんどは、mlx-communityオーガニゼーション配下のHugging Faceにすでに事前変換済みMLXバージョンが存在します。',
        bullets: [
          'Ollamaモデルは直接変換できません — モデル形式が異なります',
          '事前変換済みMLXモデルはhuggingface.co/mlx-communityで人気モデルのほとんどが公開されています',
          '自分で変換する場合：Hugging Faceからダウンロードし、mlx_lm.convertを実行',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollamaはモデルを独自のストア（~/.ollama/models）に保存しており、mlx-lmでは読み込めません。Ollama 0.19以降は一部のモデルをMLXで実行できますが、これは変わりません',
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
          'コンバーターは <code>--q-bits</code>（重み1つあたりのビット数。例：8）、<code>--q-group-size</code>、<code>--q-mode</code>（デフォルトは <code>affine</code>。<code>mxfp4</code>、<code>nvfp4</code>、<code>mxfp8</code> も利用可能）にも対応しています。インストール済みの <a href="https://github.com/ml-explore/mlx-lm" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">mlx-lm</a> で使えるオプションは <code>mlx_lm.convert --help</code> で確認できます。',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.convert --hf-path original-org/model-name --mlx-path ./converted-model -q',
        codeLanguage: 'bash',
      },
      body3: {
        title: 'OllamaのMLXバックエンドは変換の代わりにはならない',
        content: [
          '2026年3月30日にリリースされたOllama 0.19で、Apple Silicon向けのMLXベースのエンジンが追加されました。<a href="https://ollama.com/blog/mlx" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">Ollamaの公式発表</a>では、32 GBを超えるユニファイドメモリを搭載したMac向けのプレビューとして説明されており、Qwen3.5-35B-A3Bで開始されました。Ollama内での推論を高速化します。',
          'Ollamaは、保存済みモデルをmlx-lm向けにエクスポートする方法を公開していません。mlx-lmで使うMLXモデルが必要な場合は、上記の手順が引き続き当てはまります。mlx-communityの事前変換済みモデルを使うか、元のHugging Faceの重みを自分で変換してください。',
        ],
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
            a: 'mlx-communityオーガニゼーションは、Llama、Qwen、Mistral、Phi、Gemma、DeepSeek V4.1 Flash などの最近のリリース、および多くのファインチューンを含む主要モデルのほとんどをカバーしています。4ビットと8ビットの量子化バージョンの両方が通常利用可能です。huggingface.co/mlx-communityにアクセスし、モデルファミリー名で検索してください。',
          },
          {
            q: 'MLXに変換する際にどの量子化を使用すべきですか？',
            a: '16 GBのユニファイドメモリを持つほとんどの7B〜14BモデルにはM1/M2/M3/M4チップで4ビット量子化（<code>-q</code>フラグのデフォルト）を使用してください。7Bモデルの場合、約4 GBのモデルが生成され、良好に動作します。8ビットは32 GB以上の場合で、より高い出力品質が必要な場合のみ使用してください。',
          },
          {
            q: 'OllamaはすでにMLXでモデルを実行できますか？',
            a: 'はい、プレビューとして提供されています。Ollama 0.19（2026年3月30日）で、Apple Silicon向けのMLXベースのエンジンが追加されました。32 GBを超えるユニファイドメモリのMac向けと案内され、Qwen3.5-35B-A3Bで開始されました。Ollama内で動作するもので、Ollamaはモデルをmlx-lm向けにエクスポートする方法を公開していません。',
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
    heroImage: '/images/convert-ollama-model-to-mlx-overview-hero-zh.webp',
    title: '如何将 Ollama 模型转换为 MLX 格式',
    seoTitle: '将 Ollama 模型转换为 MLX 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '您无法直接将 Ollama 模型转换为 MLX 格式。请改用 Hugging Face 权重 + mlx-lm convert。大多数流行模型在 Hugging Face 上已有预转换的 MLX 版本。',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      zh: {
        question: '如何将 Ollama 模型转换为 MLX 格式？',
        answer: '您无法直接将 Ollama 模型转换为 MLX 格式。请改为从 Hugging Face 下载原始 GGUF 或 SafeTensors 权重，然后使用 mlx-lm convert 进行转换。对于大多数流行模型（Llama 3、Qwen、Mistral），Hugging Face 的 mlx-community 组织下已有预转换的 MLX 版本。',
        bullets: [
          '无法直接转换 Ollama 模型——模型格式不同',
          '大多数流行模型的预转换 MLX 版本可在 huggingface.co/mlx-community 获取',
          '自行转换：从 Hugging Face 下载，然后运行 mlx_lm.convert',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama 将模型保存在自己的存储（~/.ollama/models）中，mlx-lm 无法读取——即使 Ollama 0.19 及更高版本已能通过 MLX 运行部分模型',
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
          '转换器还支持 <code>--q-bits</code>（每个权重的位数，例如 8）、<code>--q-group-size</code> 和 <code>--q-mode</code>（默认为 <code>affine</code>；另有 <code>mxfp4</code>、<code>nvfp4</code> 和 <code>mxfp8</code> 可用）。运行 <code>mlx_lm.convert --help</code> 可列出您已安装版本的 <a href="https://github.com/ml-explore/mlx-lm" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">mlx-lm</a> 的全部选项。',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.convert --hf-path original-org/model-name --mlx-path ./converted-model -q',
        codeLanguage: 'bash',
      },
      body3: {
        title: 'Ollama 的 MLX 后端不能取代转换',
        content: [
          '2026 年 3 月 30 日发布的 Ollama 0.19 为 Apple Silicon 增加了基于 MLX 的引擎。<a href="https://ollama.com/blog/mlx" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">Ollama 的官方公告</a>将其描述为面向统一内存超过 32 GB 的 Mac 的预览版，首发支持 Qwen3.5-35B-A3B。它加快的是 Ollama 内部的推理速度。',
          'Ollama 没有公布将其已存储模型导出给 mlx-lm 使用的方法。若要获得可供 mlx-lm 使用的 MLX 模型，上述步骤依然适用：使用 mlx-community 上已转换的模型，或自行转换 Hugging Face 上的原始权重。',
        ],
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
            a: 'mlx-community 组织涵盖了大多数主要模型：Llama、Qwen、Mistral、Phi、Gemma、DeepSeek V4.1 Flash 等近期发布的模型以及许多微调版本。4 位和 8 位量化版本通常均可获得。访问 huggingface.co/mlx-community 并按模型系列名称搜索。',
          },
          {
            q: '转换为 MLX 时应使用哪种量化方式？',
            a: '对于 16 GB 统一内存上的大多数 7B–14B 模型，请使用 4 位量化（<code>-q</code> 标志的默认值）。对于 7B 模型，这会生成约 4 GB 的模型，在 M1/M2/M3/M4 芯片上运行良好。仅在拥有 32 GB 或以上内存且需要更高输出质量时才使用 8 位量化。',
          },
          {
            q: 'Ollama 现在能通过 MLX 运行模型吗？',
            a: '可以，目前为预览版。Ollama 0.19（2026 年 3 月 30 日）为 Apple Silicon 增加了基于 MLX 的引擎，面向统一内存超过 32 GB 的 Mac，首发支持 Qwen3.5-35B-A3B。它在 Ollama 内部运行；Ollama 没有公布将其模型导出给 mlx-lm 的方法。',
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
    heroImage: '/images/convert-ollama-model-to-mlx-overview-hero-pt.webp',
    title: 'Como converter modelos do Ollama para o formato MLX',
    seoTitle: 'Converter modelos do Ollama para MLX 2026 | PromptQuorum',
    metaDescription: 'Você não pode converter modelos do Ollama para MLX diretamente. Use pesos do Hugging Face + mlx-lm convert. A maioria dos modelos populares já tem versão MLX pré-convertida.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Llama 3', 'Qwen3.5', 'Mistral', 'DeepSeek V4.1 Flash'],
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
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O Ollama guarda os modelos em seu próprio armazenamento em ~/.ollama/models — o mlx-lm não consegue lê-lo, mesmo que o Ollama 0.19 e posteriores executem alguns modelos via MLX',
          'A organização mlx-community no Hugging Face tem versões MLX pré-convertidas de Llama, Qwen, Mistral, Phi, Gemma, DeepSeek e muitos outros — verifique lá antes de converter',
          'Se não existir versão pré-convertida, baixe os pesos SafeTensors originais do Hugging Face e execute mlx_lm.convert — a quantização é aplicada durante a conversão',
        ],
      },
      body1: {
        title: 'Passo 1: verifique se existe um modelo MLX pré-convertido',
        content: [
          'Antes de converter qualquer coisa, visite <a href="https://huggingface.co/mlx-community" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">huggingface.co/mlx-community</a>. A comunidade mantém centenas de modelos já convertidos e quantizados para MLX. Pesquise pelo nome do modelo — se ele existir lá, a instalação leva um comando e nenhuma conversão.',
          'Se existir uma versão pré-convertida, execute o modelo diretamente com o mlx-lm:',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.generate --model mlx-community/Meta-Llama-3-8B-4bit --prompt "Hello"',
        codeLanguage: 'bash',
      },
      body2: {
        title: 'Passo 2: converta o modelo você mesmo (se não houver versão pré-convertida)',
        content: [
          'Se o modelo desejado não estiver na mlx-community, baixe os pesos SafeTensors originais do repositório do autor no Hugging Face (não da mlx-community) e execute o conversor. A flag <code>-q</code> aplica quantização de 4 bits durante a conversão:',
          'A conversão leva de 2 a 10 minutos, dependendo do tamanho do modelo. O resultado é um diretório com shards .safetensors e uma configuração de tokenizer compatível com MLX.',
          'O conversor também aceita <code>--q-bits</code> (bits por peso, como 8), <code>--q-group-size</code> e <code>--q-mode</code> (<code>affine</code> por padrão; <code>mxfp4</code>, <code>nvfp4</code> e <code>mxfp8</code> também estão disponíveis). Execute <code>mlx_lm.convert --help</code> para listar todas as opções da sua versão instalada do <a href="https://github.com/ml-explore/mlx-lm" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">mlx-lm</a>.',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.convert --hf-path original-org/model-name --mlx-path ./converted-model -q',
        codeLanguage: 'bash',
      },
      body3: {
        title: 'O backend MLX do Ollama não substitui a conversão',
        content: [
          'O Ollama 0.19, lançado em 30 de março de 2026, adicionou um mecanismo baseado em MLX para Apple Silicon. <a href="https://ollama.com/blog/mlx" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">O anúncio do Ollama</a> o descreve como uma prévia para Macs com mais de 32 GB de memória unificada, lançada com o Qwen3.5-35B-A3B. Ele acelera a inferência dentro do Ollama.',
          'O Ollama não documenta uma forma de exportar seus modelos armazenados para o mlx-lm. Para obter um modelo MLX para o mlx-lm, os passos acima continuam valendo: use um modelo pré-convertido da mlx-community ou converta você mesmo os pesos originais do Hugging Face.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre a conversão de modelos para MLX',
        faqs: [
          {
            q: 'Posso exportar um modelo do Ollama e importá-lo no MLX?',
            a: 'Não. O Ollama guarda os modelos em seu próprio formato interno em ~/.ollama/models, que o mlx-lm não lê diretamente. Você precisa dos pesos SafeTensors ou GGUF originais do Hugging Face como fonte da conversão.',
          },
          {
            q: 'O mlx-lm aceita arquivos GGUF como entrada de conversão?',
            a: 'No início de 2026, o mlx-lm.convert tinha como alvo principal o SafeTensors (o formato padrão do Hugging Face). Se você só tem um arquivo GGUF, use primeiro uma ferramenta de conversão de GGUF para SafeTensors ou procure os pesos SafeTensors originais na página do modelo no Hugging Face.',
          },
          {
            q: 'Quais modelos têm versões MLX pré-convertidas?',
            a: 'A mlx-community cobre a maioria das famílias de pesos abertos, incluindo lançamentos recentes como DeepSeek V4.1 Flash, além de Llama, Qwen, Mistral, Phi e Gemma. Versões quantizadas em 4 e 8 bits costumam estar disponíveis. Acesse huggingface.co/mlx-community e pesquise pelo nome da família.',
          },
          {
            q: 'Qual quantização devo usar ao converter para MLX?',
            a: 'Para a maioria dos modelos de 7B a 14B com 16 GB de memória unificada, use quantização de 4 bits (o padrão com a flag <code>-q</code>). Para um modelo de 7B, isso gera cerca de 4 GB e roda bem em chips M1/M2/M3/M4. Use 8 bits apenas com 32 GB ou mais e se precisar de maior qualidade de saída.',
          },
          {
            q: 'O Ollama já executa modelos via MLX?',
            a: 'Sim, como prévia. O Ollama 0.19 (30 de março de 2026) adicionou um mecanismo baseado em MLX para Apple Silicon, anunciado para Macs com mais de 32 GB de memória unificada e lançado com o Qwen3.5-35B-A3B. Ele roda dentro do Ollama; o Ollama não documenta a exportação de seus modelos para o mlx-lm.',
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
    heroImage: '/images/convert-ollama-model-to-mlx-overview-hero-es.webp',
    title: 'Cómo convertir modelos de Ollama a formato MLX',
    seoTitle: 'Convertir modelos de Ollama a MLX 2026 | PromptQuorum',
    metaDescription: 'No puedes convertir modelos de Ollama a MLX directamente. Usa pesos de Hugging Face + mlx-lm convert. La mayoría de modelos populares ya tienen versión MLX.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Llama 3', 'Qwen3.5', 'Mistral', 'DeepSeek V4.1 Flash'],
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
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama guarda los modelos en su propio almacenamiento en ~/.ollama/models — mlx-lm no puede leerlo, aunque Ollama 0.19 y posteriores ejecutan algunos modelos mediante MLX',
          'La organización mlx-community en Hugging Face tiene versiones MLX preconvertidas de Llama, Qwen, Mistral, Phi, Gemma, DeepSeek y muchos otros — compruébalo allí antes de convertir',
          'Si no existe una versión preconvertida, descarga los pesos SafeTensors originales de Hugging Face y ejecuta mlx_lm.convert — la cuantización se aplica durante la conversión',
        ],
      },
      body1: {
        title: 'Paso 1: comprueba si existe un modelo MLX preconvertido',
        content: [
          'Antes de convertir nada, visita <a href="https://huggingface.co/mlx-community" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">huggingface.co/mlx-community</a>. La comunidad mantiene cientos de modelos ya convertidos y cuantizados para MLX. Busca por el nombre del modelo — si existe allí, instalarlo requiere un solo comando y ninguna conversión.',
          'Si existe una versión preconvertida, ejecuta el modelo directamente con mlx-lm:',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.generate --model mlx-community/Meta-Llama-3-8B-4bit --prompt "Hello"',
        codeLanguage: 'bash',
      },
      body2: {
        title: 'Paso 2: convierte el modelo tú mismo (si no está preconvertido)',
        content: [
          'Si el modelo que quieres no está en mlx-community, descarga los pesos SafeTensors originales del repositorio del autor en Hugging Face (no de mlx-community) y ejecuta el conversor. La opción <code>-q</code> aplica cuantización de 4 bits durante la conversión:',
          'La conversión tarda entre 2 y 10 minutos según el tamaño del modelo. El resultado es un directorio con fragmentos .safetensors y una configuración de tokenizer compatible con MLX.',
          'El conversor también acepta <code>--q-bits</code> (bits por peso, por ejemplo 8), <code>--q-group-size</code> y <code>--q-mode</code> (<code>affine</code> por defecto; también están disponibles <code>mxfp4</code>, <code>nvfp4</code> y <code>mxfp8</code>). Ejecuta <code>mlx_lm.convert --help</code> para ver todas las opciones de tu versión instalada de <a href="https://github.com/ml-explore/mlx-lm" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">mlx-lm</a>.',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.convert --hf-path original-org/model-name --mlx-path ./converted-model -q',
        codeLanguage: 'bash',
      },
      body3: {
        title: 'El backend MLX de Ollama no sustituye la conversión',
        content: [
          'Ollama 0.19, publicado el 30 de marzo de 2026, añadió un motor basado en MLX para Apple Silicon. <a href="https://ollama.com/blog/mlx" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">El anuncio de Ollama</a> lo describe como una versión preliminar para Mac con más de 32 GB de memoria unificada, lanzada con Qwen3.5-35B-A3B. Acelera la inferencia dentro de Ollama.',
          'Ollama no documenta una forma de exportar sus modelos almacenados a mlx-lm. Para obtener un modelo MLX para mlx-lm, los pasos anteriores siguen siendo válidos: usa un modelo preconvertido de mlx-community o convierte tú mismo los pesos originales de Hugging Face.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre la conversión de modelos a MLX',
        faqs: [
          {
            q: '¿Puedo exportar un modelo de Ollama e importarlo en MLX?',
            a: 'No. Ollama guarda los modelos en su propio formato interno en ~/.ollama/models, que mlx-lm no lee directamente. Necesitas los pesos SafeTensors o GGUF originales de Hugging Face como origen de la conversión.',
          },
          {
            q: '¿Admite mlx-lm archivos GGUF como entrada de conversión?',
            a: 'A principios de 2026, mlx-lm.convert se orientaba sobre todo a SafeTensors (el formato estándar de Hugging Face). Si solo tienes un archivo GGUF, usa primero una herramienta de conversión de GGUF a SafeTensors o busca los pesos SafeTensors originales en la página del modelo en Hugging Face.',
          },
          {
            q: '¿Qué modelos tienen versiones MLX preconvertidas?',
            a: 'mlx-community cubre la mayoría de las familias de pesos abiertos, incluidos lanzamientos recientes como DeepSeek V4.1 Flash, además de Llama, Qwen, Mistral, Phi y Gemma. Suelen estar disponibles versiones cuantizadas de 4 y 8 bits. Visita huggingface.co/mlx-community y busca por nombre de familia.',
          },
          {
            q: '¿Qué cuantización debo usar al convertir a MLX?',
            a: 'Para la mayoría de los modelos de 7B a 14B con 16 GB de memoria unificada, usa cuantización de 4 bits (el valor por defecto con la opción <code>-q</code>). En un modelo de 7B resulta en unos 4 GB y funciona bien en chips M1/M2/M3/M4. Usa 8 bits solo con 32 GB o más y si necesitas mayor calidad de salida.',
          },
          {
            q: '¿Ejecuta ya Ollama modelos mediante MLX?',
            a: 'Sí, como versión preliminar. Ollama 0.19 (30 de marzo de 2026) añadió un motor basado en MLX para Apple Silicon, anunciado para Mac con más de 32 GB de memoria unificada y lanzado con Qwen3.5-35B-A3B. Se ejecuta dentro de Ollama; Ollama no documenta la exportación de sus modelos a mlx-lm.',
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
    heroImage: '/images/convert-ollama-model-to-mlx-overview-hero-ar.webp',
    title: 'كيفية تحويل نماذج ⁨Ollama⁩ إلى صيغة ⁨MLX⁩',
    seoTitle: 'تحويل نماذج ⁨Ollama⁩ إلى ⁨MLX 2026⁩ | ⁨PromptQuorum⁩',
    metaDescription: 'معظم نماذج ⁨Llama 3⁩ و⁨Qwen⁩ و⁨Mistral⁩ لها نسخ ⁨MLX⁩ جاهزة على ⁨Hugging Face⁩. لا يمكن تحويل نماذج ⁨Ollama⁩ مباشرةً؛ استخدم ⁨mlx-lm convert⁩.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Llama 3', 'Qwen3.5', 'Mistral', 'DeepSeek V4.1 Flash'],
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
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'يحتفظ Ollama بالنماذج في مخزنه الخاص ضمن ~/.ollama/models — ولا يستطيع mlx-lm قراءته، رغم أن Ollama 0.19 وما بعده يشغّلان بعض النماذج عبر MLX',
          'تضم منظمة mlx-community على Hugging Face نسخ MLX محوَّلة مسبقًا من Llama وQwen وMistral وPhi وGemma وDeepSeek وغيرها — تحقق منها أولًا قبل التحويل',
          'إذا لم توجد نسخة محوَّلة مسبقًا، نزّل أوزان SafeTensors الأصلية من Hugging Face ثم نفّذ mlx_lm.convert — يُطبَّق التكميم أثناء التحويل',
        ],
      },
      body1: {
        title: 'الخطوة 1: تحقق من وجود نموذج MLX محوَّل مسبقًا',
        content: [
          'قبل تحويل أي شيء، زر <a href="https://huggingface.co/mlx-community" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">huggingface.co/mlx-community</a>. يحتفظ المجتمع بمئات النماذج المحوَّلة والمُكمَّمة لـ MLX. ابحث باسم النموذج — إذا كان موجودًا هناك، فتثبيته يتطلب أمرًا واحدًا ولا يحتاج إلى تحويل.',
          'إذا وُجدت نسخة محوَّلة مسبقًا، شغّل النموذج مباشرةً باستخدام mlx-lm:',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.generate --model mlx-community/Meta-Llama-3-8B-4bit --prompt "Hello"',
        codeLanguage: 'bash',
      },
      body2: {
        title: 'الخطوة 2: حوّل النموذج بنفسك (إذا لم يكن محوَّلًا مسبقًا)',
        content: [
          'إذا لم يكن النموذج الذي تريده في mlx-community، فنزّل أوزان SafeTensors الأصلية من مستودع مؤلف النموذج على Hugging Face (وليس من mlx-community) ثم شغّل المحوّل. يطبّق الخيار <code>-q</code> تكميم 4 بت أثناء التحويل:',
          'يستغرق التحويل من 2 إلى 10 دقائق حسب حجم النموذج. والناتج مجلد يحتوي على أجزاء .safetensors وإعدادات tokenizer متوافقة مع MLX.',
          'يقبل المحوّل أيضًا <code>--q-bits</code> (عدد البتات لكل وزن، مثل 8) و<code>--q-group-size</code> و<code>--q-mode</code> (الافتراضي <code>affine</code>؛ وتتوفر أيضًا <code>mxfp4</code> و<code>nvfp4</code> و<code>mxfp8</code>). نفّذ <code>mlx_lm.convert --help</code> لعرض جميع الخيارات في إصدارك المثبّت من <a href="https://github.com/ml-explore/mlx-lm" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">mlx-lm</a>.',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.convert --hf-path original-org/model-name --mlx-path ./converted-model -q',
        codeLanguage: 'bash',
      },
      body3: {
        title: 'واجهة MLX في Ollama لا تغني عن التحويل',
        content: [
          'أضاف Ollama 0.19، الصادر في 30 مارس 2026، محركًا مبنيًا على MLX لأجهزة Apple Silicon. ويصفه <a href="https://ollama.com/blog/mlx" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">إعلان Ollama</a> بأنه معاينة لأجهزة Mac ذات ذاكرة موحّدة تتجاوز 32 GB، وأُطلق مع Qwen3.5-35B-A3B. وهو يسرّع الاستدلال داخل Ollama.',
          'لا يوثّق Ollama طريقةً لتصدير نماذجه المخزّنة إلى mlx-lm. وللحصول على نموذج MLX يعمل مع mlx-lm تبقى الخطوات أعلاه سارية: استخدم نموذجًا محوَّلًا مسبقًا من mlx-community أو حوّل أوزان Hugging Face الأصلية بنفسك.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول تحويل النماذج إلى MLX',
        faqs: [
          {
            q: 'هل يمكنني تصدير نموذج من Ollama واستيراده إلى MLX؟',
            a: 'لا. يخزّن Ollama النماذج بصيغته الداخلية في ~/.ollama/models، ولا يقرؤها mlx-lm مباشرةً. تحتاج إلى أوزان SafeTensors أو GGUF الأصلية من Hugging Face كمصدر للتحويل.',
          },
          {
            q: 'هل يدعم mlx-lm ملفات GGUF كمدخل للتحويل؟',
            a: 'في بداية 2026 كان mlx-lm.convert يستهدف بشكل أساسي صيغة SafeTensors (الصيغة القياسية في Hugging Face). إذا كان لديك ملف GGUF فقط، فاستخدم أداة تحويل من GGUF إلى SafeTensors أولًا، أو ابحث عن أوزان SafeTensors الأصلية في صفحة النموذج على Hugging Face.',
          },
          {
            q: 'ما النماذج التي لها نسخ MLX محوَّلة مسبقًا؟',
            a: 'تغطي mlx-community معظم عائلات النماذج مفتوحة الأوزان، بما فيها إصدارات حديثة مثل DeepSeek V4.1 Flash، إضافةً إلى Llama وQwen وMistral وPhi وGemma. تتوفر عادةً نسخ مُكمَّمة بـ 4 و8 بت. زر huggingface.co/mlx-community وابحث باسم العائلة.',
          },
          {
            q: 'ما مستوى التكميم المناسب عند التحويل إلى MLX؟',
            a: 'لمعظم نماذج 7B–14B على ذاكرة موحّدة 16 GB، استخدم تكميم 4 بت (الإعداد الافتراضي مع الخيار <code>-q</code>). ينتج عنه لنموذج 7B حجم نحو 4 GB يعمل جيدًا على رقائق M1/M2/M3/M4. استخدم 8 بت فقط إذا كانت لديك ذاكرة 32 GB أو أكثر وتحتاج إلى جودة إخراج أعلى.',
          },
          {
            q: 'هل يشغّل Ollama النماذج عبر MLX الآن؟',
            a: 'نعم، كمعاينة. أضاف Ollama 0.19 (30 مارس 2026) محركًا مبنيًا على MLX لأجهزة Apple Silicon، أُعلن لأجهزة Mac ذات ذاكرة موحّدة تتجاوز 32 GB وأُطلق مع Qwen3.5-35B-A3B. وهو يعمل داخل Ollama؛ ولا يوثّق Ollama تصدير نماذجه لاستخدامها مع mlx-lm.',
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
    heroImage: '/images/convert-ollama-model-to-mlx-overview-hero-ko.webp',
    title: 'Ollama 모델을 MLX 형식으로 변환하는 방법',
    seoTitle: 'Ollama 모델 MLX 변환 2026 | PromptQuorum',
    metaDescription: 'Ollama 모델을 MLX로 직접 변환할 수 없습니다. Hugging Face 가중치와 mlx-lm convert를 사용하십시오. 대부분의 인기 모델은 이미 MLX 버전이 존재합니다.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Llama 3', 'Qwen3.5', 'Mistral', 'DeepSeek V4.1 Flash'],
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
        updatedDate: '2026-10',
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
          'Ollama는 모델을 자체 저장소(~/.ollama/models)에 보관하며 mlx-lm은 이를 읽을 수 없습니다. Ollama 0.19 이후 버전이 일부 모델을 MLX로 실행할 수 있어도 마찬가지입니다',
          'Hugging Face의 mlx-community 조직에는 Llama, Qwen, Mistral, Phi, Gemma, DeepSeek 등 많은 모델의 사전 변환된 MLX 버전이 있습니다 — 변환하기 전에 먼저 확인하십시오',
          '사전 변환된 버전이 없다면 Hugging Face에서 원본 SafeTensors 가중치를 다운로드한 후 mlx_lm.convert를 실행하십시오 — 양자화는 변환 중에 적용됩니다',
        ],
      },
      body1: {
        title: '1단계: 사전 변환된 MLX 모델이 있는지 확인',
        content: [
          '무언가를 변환하기 전에 <a href="https://huggingface.co/mlx-community" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">huggingface.co/mlx-community</a>를 방문하십시오. 커뮤니티가 MLX용으로 이미 변환하고 양자화한 모델을 수백 개 관리하고 있습니다. 모델 이름으로 검색하십시오 — 거기에 있다면 변환 없이 명령 하나로 설치할 수 있습니다.',
          '사전 변환된 버전이 있다면 mlx-lm으로 모델을 바로 실행하십시오:',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.generate --model mlx-community/Meta-Llama-3-8B-4bit --prompt "Hello"',
        codeLanguage: 'bash',
      },
      body2: {
        title: '2단계: 직접 모델 변환 (사전 변환본이 없는 경우)',
        content: [
          '원하는 모델이 mlx-community에 없다면, 모델 작성자의 Hugging Face 저장소(mlx-community가 아님)에서 원본 SafeTensors 가중치를 다운로드한 후 변환기를 실행하십시오. <code>-q</code> 플래그는 변환 중 4비트 양자화를 적용합니다:',
          '변환에는 모델 크기에 따라 2~10분이 걸립니다. 결과물은 .safetensors 샤드와 MLX 호환 토크나이저 설정이 담긴 디렉터리입니다.',
          '변환기는 <code>--q-bits</code>(가중치당 비트 수, 예: 8), <code>--q-group-size</code>, <code>--q-mode</code>(기본값은 <code>affine</code>이며 <code>mxfp4</code>, <code>nvfp4</code>, <code>mxfp8</code>도 사용 가능)도 지원합니다. 설치된 <a href="https://github.com/ml-explore/mlx-lm" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">mlx-lm</a> 버전의 모든 옵션은 <code>mlx_lm.convert --help</code>로 확인하십시오.',
        ],
        codeBlock: 'pip install mlx-lm\nmlx_lm.convert --hf-path original-org/model-name --mlx-path ./converted-model -q',
        codeLanguage: 'bash',
      },
      body3: {
        title: 'Ollama의 MLX 백엔드는 변환을 대체하지 않습니다',
        content: [
          '2026년 3월 30일에 출시된 Ollama 0.19는 Apple Silicon용 MLX 기반 엔진을 추가했습니다. <a href="https://ollama.com/blog/mlx" rel="noopener noreferrer" target="_blank" class="text-primary hover:underline">Ollama 공지</a>는 이를 통합 메모리 32 GB 초과 Mac을 위한 프리뷰로 설명하며, Qwen3.5-35B-A3B로 시작되었습니다. Ollama 내부의 추론 속도를 높입니다.',
          'Ollama는 저장된 모델을 mlx-lm용으로 내보내는 방법을 문서화하지 않았습니다. mlx-lm에서 사용할 MLX 모델이 필요하다면 위 단계가 그대로 적용됩니다. mlx-community의 사전 변환 모델을 사용하거나 원본 Hugging Face 가중치를 직접 변환하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'MLX 모델 변환에 대한 빠른 답변',
        faqs: [
          {
            q: 'Ollama에서 모델을 내보내 MLX로 가져올 수 있습니까?',
            a: '아니요. Ollama는 모델을 ~/.ollama/models에 자체 내부 형식으로 저장하며, mlx-lm은 이를 직접 읽지 못합니다. 변환 소스로는 Hugging Face의 원본 SafeTensors 또는 GGUF 가중치가 필요합니다.',
          },
          {
            q: 'mlx-lm은 GGUF 파일을 변환 입력으로 지원합니까?',
            a: '2026년 초 기준으로 mlx-lm.convert는 주로 SafeTensors(표준 Hugging Face 형식)를 대상으로 합니다. GGUF 파일만 있다면 먼저 GGUF→SafeTensors 변환 도구를 사용하거나, Hugging Face의 모델 페이지에서 원본 SafeTensors 가중치를 찾으십시오.',
          },
          {
            q: '어떤 모델에 사전 변환된 MLX 버전이 있습니까?',
            a: 'mlx-community는 DeepSeek V4.1 Flash 같은 최신 출시작을 포함해 대부분의 오픈 웨이트 계열을 다루며, Llama, Qwen, Mistral, Phi, Gemma도 있습니다. 4비트와 8비트 양자화 버전이 보통 제공됩니다. huggingface.co/mlx-community에서 계열 이름으로 검색하십시오.',
          },
          {
            q: 'MLX로 변환할 때 어떤 양자화를 사용해야 합니까?',
            a: '통합 메모리 16 GB의 7B~14B 모델 대부분에는 4비트 양자화(<code>-q</code> 플래그의 기본값)를 사용하십시오. 7B 모델은 약 4 GB가 되어 M1/M2/M3/M4 칩에서 잘 실행됩니다. 8비트는 32 GB 이상이면서 더 높은 출력 품질이 필요할 때만 사용하십시오.',
          },
          {
            q: 'Ollama는 이제 MLX로 모델을 실행합니까?',
            a: '예, 프리뷰로 제공됩니다. Ollama 0.19(2026년 3월 30일)는 Apple Silicon용 MLX 기반 엔진을 추가했으며, 통합 메모리 32 GB 초과 Mac을 대상으로 발표되어 Qwen3.5-35B-A3B로 시작되었습니다. Ollama 내부에서 동작하며, Ollama는 모델을 mlx-lm용으로 내보내는 방법을 문서화하지 않았습니다.',
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

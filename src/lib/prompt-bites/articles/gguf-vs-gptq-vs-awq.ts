import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/gguf-vs-gptq-vs-awq-overview-hero-en.webp',
    title: 'GGUF vs GPTQ vs AWQ: Differences, Speed and Which to Use',
    seoTitle: 'GGUF vs GPTQ vs AWQ Quantization 2026 | Prompt Bites',
    metaDescription: 'GGUF runs on CPU and GPU via llama.cpp/Ollama; GPTQ and AWQ are GPU-only formats for vLLM/TGI serving. Compare speed, quality, tools and commands.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing a quantization format for local or served LLM inference',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi', 'llama-cpp-gguf-conversion-guide'],
    is_living_page: false,
    leadAnswerBlock: '<strong>GGUF is the best default quantization format for local use</strong> — it runs on both CPU and GPU through llama.cpp and Ollama, with no separate CUDA-only requirement. GPTQ and AWQ are GPU-only formats built for production serving frameworks like vLLM and TGI, where AWQ generally holds quality better than GPTQ at the same bit width.',
    toc: [
      { label: 'Best Pick: GGUF for Local Use, AWQ for Production Serving', anchor: '#best-pick' },
      { label: 'GGUF vs GPTQ vs AWQ at a Glance', anchor: '#comparison' },
      { label: 'How Each Format Works and Who Maintains It', anchor: '#formats' },
      { label: 'Speed and Quality Depend on the Kernel', anchor: '#speed' },
      { label: 'Which Format to Pick for Your Setup', anchor: '#choose' },
      { label: 'Commands to Run Each Format', anchor: '#commands' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'Should I use GGUF, GPTQ, or AWQ quantization?',
        answer: 'Use GGUF for local use via Ollama or llama.cpp — it runs on CPU and GPU with no extra requirements. Use AWQ over GPTQ if serving in production with vLLM or TGI, since it holds quality better at the same bit width.',
        bullets: [
          'GGUF: llama.cpp\'s native format — CPU+GPU hybrid inference, the default for Ollama and LM Studio.',
          'GPTQ: GPU-only, calibration-based post-training quantization — an early standard for efficient 4-bit serving.',
          'AWQ (Activation-aware Weight Quantization): GPU-only, generally better quality-per-bit than GPTQ, common in vLLM/TGI production serving.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF: the right default for local use — runs on CPU and GPU via llama.cpp/Ollama, no CUDA-only requirement',
          'GPTQ: GPU-only, an early standard for 4-bit serving, still supported by ExLlama and vLLM',
          'AWQ: GPU-only, generally holds quality better than GPTQ at the same bit width — preferred for production serving',
          'If you\'re running Ollama or LM Studio locally, you almost certainly want GGUF, not GPTQ or AWQ',
        ],
      },
      bestPick: {
        id: 'best-pick',
        snippetBlocks: [
          { type: 'one-sentence', text: 'GGUF is a single-file quantized model format for llama.cpp that runs on CPU and GPU, while GPTQ and AWQ are GPU-only 4-bit formats used mainly for serving with vLLM and TGI.' },
          { type: 'plain-terms', text: 'In plain terms: pick GGUF if you run models on your own computer with Ollama or LM Studio, and pick AWQ or GPTQ only if you serve a model from an NVIDIA GPU server.' },
        ],
        title: 'Best Pick: GGUF for Local Use, AWQ for Production Serving',
        content: [
          '<strong>GGUF is the right quantization format for almost anyone running models locally through Ollama, LM Studio, or llama.cpp directly — it supports both CPU and GPU inference from the same file, including partial CPU offload when a model doesn\'t fully fit in VRAM.</strong> This flexibility is exactly why GGUF became the standard format for consumer local LLM tools: it works whether you have a powerful GPU, a modest one, or none at all.',
          'GPTQ was one of the earliest widely-adopted 4-bit quantization methods for efficient GPU inference. It uses a calibration dataset to minimize quality loss during post-training quantization, but it is GPU-only — there is no meaningful CPU fallback path — and generally has been superseded in quality-per-bit by newer methods.',
          'AWQ (Activation-aware Weight Quantization) is the more modern GPU-only alternative to GPTQ. By protecting the weights that matter most for activation magnitude rather than quantizing everything uniformly, AWQ generally preserves more quality at the same bit width. It is a common choice for production serving stacks like vLLM and TGI, where GPU-only operation is already a given.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'GGUF vs GPTQ vs AWQ at a Glance',
        content: [
          'Choose GGUF if you\'re running Ollama, LM Studio, or llama.cpp locally — it is the only one of the three with real CPU support and partial-offload flexibility. Choose GPTQ only if you\'re working with an existing pipeline or tool (like older ExLlama setups) that specifically expects it. Choose AWQ if you\'re deploying to a production GPU-serving stack (vLLM, TGI) and want the best quality-per-bit among the GPU-only options.',
          'All three represent the same underlying model at reduced precision — the format determines which tools can load it and how gracefully it handles GPU-memory shortfalls, not the model\'s underlying capability.',
        ],
        columns: ['Format', 'Runs on', 'Typical bits', 'Main tools', 'Best for'],
        rows: [
          { 'Format': 'GGUF', 'Runs on': 'CPU, GPU or both', 'Typical bits': '2–8 bit', 'Main tools': 'llama.cpp, Ollama, LM Studio', 'Best for': 'Local use' },
          { 'Format': 'GPTQ', 'Runs on': 'GPU only', 'Typical bits': '4 bit (3–8)', 'Main tools': 'vLLM, TGI, ExLlama', 'Best for': 'Existing GPU pipelines' },
          { 'Format': 'AWQ', 'Runs on': 'GPU only', 'Typical bits': '4 bit', 'Main tools': 'vLLM, TGI, Transformers', 'Best for': 'GPU serving' },
        ],
      },
      formats: {
        id: 'formats',
        title: 'How GGUF, GPTQ and AWQ Work and Who Maintains Them',
        content: [
          '<strong>GGUF is a single-file model format with the tokenizer and metadata built in, designed for llama.cpp.</strong> Its quantization types (Q4_K_M, Q5_K_M, Q8_0 and others) are produced by llama.cpp\'s <code>llama-quantize</code> tool, and the same file runs on CPU, GPU or a mix of both. It replaced the older GGML format.',
          '<strong>GPTQ quantizes a model layer by layer after training, using a small calibration dataset to compensate for rounding error.</strong> The resulting checkpoint is loaded on a GPU through kernels such as Marlin or ExLlama.',
          '<strong>AWQ (Activation-aware Weight Quantization) protects the small share of weights that matter most for activations</strong> by scaling them before rounding to 4 bit. This usually keeps outputs closer to the original model than uniform rounding.',
          'Tooling status matters if you quantize a model yourself. The AutoAWQ project is deprecated and no longer maintained, and the <a href="https://docs.vllm.ai/en/latest/features/quantization/auto_awq.html" class="text-primary hover:underline" target="_blank" rel="noopener">vLLM documentation</a> points to llm-compressor for AWQ quantization. The AutoGPTQ repository is archived, and its README recommends GPTQModel. Pre-quantized AWQ and GPTQ checkpoints on Hugging Face keep loading in vLLM regardless; check each repository before starting a new pipeline on it.',
        ],
      },
      speed: {
        id: 'speed',
        title: 'Speed and Quality Depend on the Kernel, Not Only the Format',
        content: [
          '<strong>The same AWQ or GPTQ file can be much slower or faster depending on the GPU kernel that runs it.</strong> Third-party vLLM benchmarks report AWQ on its default kernel running slower than FP16, while the Marlin kernel puts AWQ and GPTQ ahead of FP16 on NVIDIA GPUs (<a href="https://www.spheron.network/blog/gptq-vs-awq-vs-gguf-4-bit-quantization-comparison-2026/" class="text-primary hover:underline" target="_blank" rel="noopener">Spheron</a>, <a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>).',
          'Quality loss at 4 bit is small but measurable, and results differ by model and test. One published HumanEval comparison on Qwen2.5-32B put AWQ at 51.8% against 56.1% for FP16, with GPTQ at 46.3% (<a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>). Treat such numbers as directional and test on your own model and task.',
          'GGUF files can be loaded by vLLM, but that support is reported to be slower than native AWQ or GPTQ. For GGUF, use llama.cpp, Ollama or LM Studio.',
        ],
      },
      choose: {
        id: 'choose',
        title: 'Which Format to Pick for Your Setup',
        items: [
          '<strong>Laptop, Mac or CPU-only machine:</strong> GGUF. It is the only one of the three with CPU inference, and it is the format Ollama and LM Studio use on Apple Silicon.',
          '<strong>One consumer GPU, model fits in VRAM:</strong> GGUF for simplicity, or AWQ/GPTQ if your tooling (ExLlama, a Python pipeline) expects them.',
          '<strong>Model larger than your VRAM:</strong> GGUF, because layers can be offloaded to system RAM.',
          '<strong>Production API on NVIDIA GPUs with vLLM or TGI:</strong> AWQ or GPTQ with Marlin kernels. Start with AWQ and benchmark GPTQ against it.',
          '<strong>Fine-tuning:</strong> fine-tune first at full or adapter precision, then quantize the result.',
        ],
      },
      commands: {
        id: 'commands',
        title: 'Commands to Run Each Format',
        content: [
          'Each format has its own loader. Replace the placeholders with your own model:',
        ],
        codeBlock: '# GGUF: run a Hugging Face GGUF file in Ollama\nollama run hf.co/<user>/<repo>:Q4_K_M\n\n# GGUF: create one from full-precision weights with llama.cpp\npython convert_hf_to_gguf.py ./model --outfile model-f16.gguf\nllama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M\n\n# AWQ or GPTQ: serve with vLLM\nvllm serve <user>/<model-AWQ> --quantization awq\nvllm serve <user>/<model-GPTQ> --quantization gptq',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I convert a GPTQ or AWQ model to GGUF?',
            a: 'Generally you convert from the original full-precision weights to GGUF directly, rather than converting between two already-quantized formats — going quantized-to-quantized compounds precision loss. If you only have a GPTQ/AWQ checkpoint, look for the original model\'s full-precision release to convert from instead.',
          },
          {
            q: 'Is GGUF slower than GPTQ or AWQ on a GPU?',
            a: 'On a GPU where the model fully fits in VRAM, well-optimized GGUF inference is competitive with GPTQ/AWQ. The gap that matters is when a model doesn\'t fully fit — GGUF gracefully offloads to CPU, while GPTQ/AWQ generally cannot.',
          },
          {
            q: 'Which K-quant level should I use within GGUF?',
            a: 'Q4_K_M is the most common balanced default. See the dedicated Q4_K_M vs Q8_0 comparison for the full tradeoff between file size and quality across GGUF\'s quant levels.',
          },
          {
            q: 'Does Ollama support GPTQ or AWQ models directly?',
            a: 'No — Ollama is built around GGUF specifically. To use a GPTQ or AWQ checkpoint, you need a different serving tool (vLLM, TGI, or ExLlama) designed for that format.',
          },
          {
            q: 'What is GGUF?',
            a: 'GGUF (GPT-Generated Unified Format) is the single-file model format of llama.cpp. It stores quantized weights, tokenizer and metadata together and runs on CPU, GPU or both. It replaced the older GGML format.',
          },
          {
            q: 'What is the difference between GPTQ and AWQ?',
            a: 'Both are GPU-only 4-bit post-training methods. GPTQ compensates rounding error layer by layer using calibration data; AWQ scales the weights that matter most for activations before rounding. In practice AWQ usually keeps slightly more quality, but the GPU kernel used matters as much as the method.',
          },
          {
            q: 'Is AWQ better than GPTQ?',
            a: 'Often slightly, on quality per bit, but not always. Results vary by model, calibration data and kernel, so benchmark both on your own task before committing a production deployment.',
          },
          {
            q: 'What is the difference between GGUF and non-GGUF models?',
            a: 'A non-GGUF model is usually a safetensors checkpoint for PyTorch/Transformers in FP16/BF16, or a GPTQ/AWQ checkpoint, and needs a GPU framework. GGUF packs a quantized model into one file for llama.cpp-based tools, which also run on CPU.',
          },
          {
            q: 'What is the difference between ONNX and GGUF?',
            a: 'ONNX is a hardware-neutral model graph format run by ONNX Runtime, used for deployment across devices such as NPUs. GGUF is specific to llama.cpp and is the simpler route for running chat LLMs on a personal computer.',
          },
          {
            q: 'Can I bring my own quantized GGUF or AWQ model to a hosted provider?',
            a: 'It depends on the provider, so check its documentation for supported formats before uploading. Self-hosting always works: GGUF through llama.cpp or Ollama, AWQ or GPTQ through vLLM or TGI on a rented GPU.',
          },
          {
            q: 'Which format has the lowest latency in production?',
            a: 'On NVIDIA GPUs, AWQ or GPTQ served by vLLM with Marlin kernels is the usual low-latency setup. Latency depends on batch size and hardware, so measure with your own traffic.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[What Is Q4_K_M Quantization?](/prompt-bites/what-is-q4-k-m-quantization) — GGUF\'s most common quant level explained',
          '[Q4_K_M vs Q8_0](/prompt-bites/q4-k-m-vs-q8-0) — choosing a GGUF quant level',
          '[Ollama vs vLLM vs TGI](/prompt-bites/ollama-vs-vllm-vs-tgi) — which serving tool pairs with which format',
          '[LLM Quantization Explained (Full Guide)](/local-llms/llm-quantization-explained) — the complete deep dive into how quantization works under the hood',
        ],
      },
    },
  },
  ar: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/gguf-vs-gptq-vs-awq-overview-hero-ar.webp',
    title: 'GGUF مقابل GPTQ مقابل AWQ: الفروق والسرعة وأيّها تختار',
    seoTitle: 'GGUF مقابل GPTQ مقابل AWQ للتكميم 2026 | Prompt Bites',
    metaDescription: 'يعمل GGUF على CPU وGPU عبر llama.cpp/Ollama، أما GPTQ وAWQ فتنسيقان لـ GPU فقط لخدمة vLLM/TGI. قارن السرعة والجودة والأدوات والأوامر.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يختارون تنسيق تكميم لاستدلال LLM محلي أو مُقدَّم',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi', 'llama-cpp-gguf-conversion-guide'],
    is_living_page: false,
    leadAnswerBlock: '<strong>GGUF هو أفضل تنسيق تكميم افتراضي للاستخدام المحلي</strong> — يعمل على كل من CPU وGPU عبر llama.cpp وOllama، دون متطلب منفصل يقتصر على CUDA. GPTQ وAWQ تنسيقان مخصصان لـ GPU فقط مبنيان لأطر التقديم الإنتاجي مثل vLLM وTGI، حيث تحافظ AWQ عمومًا على الجودة بشكل أفضل من GPTQ عند نفس عمق البت.',
    toc: [
      { label: 'أفضل اختيار: GGUF للاستخدام المحلي، وAWQ للتقديم الإنتاجي', anchor: '#best-pick' },
      { label: 'GGUF مقابل GPTQ مقابل AWQ بلمحة', anchor: '#comparison' },
      { label: 'كيف يعمل كل تنسيق ومن يصونه', anchor: '#formats' },
      { label: 'السرعة والجودة تعتمدان على النواة', anchor: '#speed' },
      { label: 'أي تنسيق تختار لإعدادك', anchor: '#choose' },
      { label: 'أوامر تشغيل كل تنسيق', anchor: '#commands' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'هل يجب أن أستخدم تكميم GGUF أم GPTQ أم AWQ؟',
        answer: 'استخدم GGUF للاستخدام المحلي عبر Ollama أو llama.cpp — يعمل على CPU وGPU دون متطلبات إضافية. استخدم AWQ بدلًا من GPTQ إذا كنت تقدّم في بيئة إنتاج بـ vLLM أو TGI، لأنها تحافظ على الجودة بشكل أفضل عند نفس عمق البت.',
        bullets: [
          'GGUF: التنسيق الأصلي لـ llama.cpp — استدلال هجين CPU+GPU، الافتراضي لـ Ollama وLM Studio.',
          'GPTQ: مخصص لـ GPU فقط، تكميم بعد التدريب يعتمد على المعايرة — معيار مبكر للتقديم الفعال بـ4-بت.',
          'AWQ (تكميم الأوزان الواعي بالتنشيط): مخصص لـ GPU فقط، جودة أفضل عمومًا لكل بت من GPTQ، شائع في تقديم vLLM/TGI الإنتاجي.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF: الافتراضي الصحيح للاستخدام المحلي — يعمل على CPU وGPU عبر llama.cpp/Ollama، دون متطلب يقتصر على CUDA',
          'GPTQ: مخصص لـ GPU فقط، معيار مبكر للتقديم بـ4-بت، لا يزال مدعومًا من ExLlama وvLLM',
          'AWQ: مخصص لـ GPU فقط، يحافظ عمومًا على الجودة بشكل أفضل من GPTQ عند نفس عمق البت — مفضّل للتقديم الإنتاجي',
          'إذا كنت تشغّل Ollama أو LM Studio محليًا، فأنت تريد بالتأكيد GGUF، وليس GPTQ أو AWQ',
        ],
      },
      bestPick: {
        id: 'best-pick',
        snippetBlocks: [
          { type: 'one-sentence', text: 'GGUF تنسيق نموذج مكمَّم في ملف واحد لـ llama.cpp يعمل على CPU وGPU، بينما GPTQ وAWQ تنسيقان بدقة 4 بت لـ GPU فقط ويُستخدمان أساسًا لتقديم النماذج عبر vLLM وTGI.' },
          { type: 'plain-terms', text: 'ببساطة: اختر GGUF إذا شغّلت النماذج على حاسوبك عبر Ollama أو LM Studio، واختر AWQ أو GPTQ فقط إذا كنت تقدّم نموذجًا من خادم GPU من NVIDIA.' },
        ],
        title: 'أفضل اختيار: GGUF للاستخدام المحلي، وAWQ للتقديم الإنتاجي',
        content: [
          '<strong>GGUF هو تنسيق التكميم الصحيح لأي شخص تقريبًا يشغّل نماذج محليًا عبر Ollama أو LM Studio أو llama.cpp مباشرة — يدعم استدلال CPU وGPU من نفس الملف، بما في ذلك التفريغ الجزئي إلى CPU عندما لا يستوعب النموذج بالكامل في VRAM.</strong> هذه المرونة هي بالضبط سبب أن GGUF أصبح التنسيق القياسي لأدوات LLM المحلية الاستهلاكية: يعمل سواء كان لديك بطاقة GPU قوية أو متواضعة أو لا شيء إطلاقًا.',
          'كانت GPTQ من أوائل طرق التكميم بـ4-بت المعتمدة على نطاق واسع لاستدلال GPU الفعّال. تستخدم مجموعة بيانات معايرة لتقليل فقدان الجودة أثناء التكميم بعد التدريب، لكنها مخصصة لـ GPU فقط — لا يوجد مسار بديل جوهري لـ CPU — وقد تجاوزتها عمومًا طرق أحدث في الجودة لكل بت.',
          'AWQ (تكميم الأوزان الواعي بالتنشيط) هو البديل الأحدث المخصص لـ GPU فقط لـ GPTQ. عبر حماية الأوزان الأكثر أهمية لمقدار التنشيط بدلًا من تكميم كل شيء بشكل موحد، تحافظ AWQ عمومًا على جودة أكبر عند نفس عمق البت. إنها خيار شائع لمكدسات التقديم الإنتاجي مثل vLLM وTGI، حيث يكون التشغيل المخصص لـ GPU فقط أمرًا مفروغًا منه أصلًا.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'GGUF مقابل GPTQ مقابل AWQ بلمحة',
        content: [
          'اختر GGUF إذا كنت تشغّل Ollama أو LM Studio أو llama.cpp محليًا — إنه الوحيد من الثلاثة بدعم حقيقي لـ CPU ومرونة تفريغ جزئي. اختر GPTQ فقط إذا كنت تعمل مع خط أنابيب أو أداة موجودة (مثل إعدادات ExLlama القديمة) تتوقعه تحديدًا. اختر AWQ إذا كنت تنشر على مكدس تقديم GPU إنتاجي (vLLM، TGI) وتريد أفضل جودة لكل بت بين الخيارين المخصصين لـ GPU فقط.',
          'تمثل الأنواع الثلاثة نفس النموذج الأساسي بدقة مخفضة — التنسيق يحدد أي الأدوات يمكنها تحميله وكيف يتعامل بسلاسة مع نقص ذاكرة GPU، وليس قدرة النموذج الأساسية.',
        ],
        columns: ['التنسيق', 'يعمل على', 'البتات المعتادة', 'الأدوات الرئيسية', 'الأنسب لـ'],
        rows: [
          { 'التنسيق': 'GGUF', 'يعمل على': 'CPU أو GPU أو كلاهما', 'البتات المعتادة': '2–8 بت', 'الأدوات الرئيسية': 'llama.cpp وOllama وLM Studio', 'الأنسب لـ': 'الاستخدام المحلي' },
          { 'التنسيق': 'GPTQ', 'يعمل على': 'GPU فقط', 'البتات المعتادة': '4 بت (3–8)', 'الأدوات الرئيسية': 'vLLM وTGI وExLlama', 'الأنسب لـ': 'خطوط GPU القائمة' },
          { 'التنسيق': 'AWQ', 'يعمل على': 'GPU فقط', 'البتات المعتادة': '4 بت', 'الأدوات الرئيسية': 'vLLM وTGI وTransformers', 'الأنسب لـ': 'التقديم على GPU' },
        ],
      },
      formats: {
        id: 'formats',
        title: 'كيف تعمل GGUF وGPTQ وAWQ ومن يصونها',
        content: [
          '<strong>GGUF تنسيق نموذج في ملف واحد مع المُجزّئ (tokenizer) والبيانات الوصفية مدمجين، صُمّم لـ llama.cpp.</strong> تُنتج أداة <code>llama-quantize</code> في llama.cpp أنواع التكميم (Q4_K_M وQ5_K_M وQ8_0 وغيرها)، ويعمل الملف نفسه على CPU أو GPU أو كليهما. وقد حلّ محل تنسيق GGML القديم.',
          '<strong>تكمّم GPTQ النموذج طبقةً بطبقة بعد التدريب، وتستخدم مجموعة معايرة صغيرة لتعويض خطأ التقريب.</strong> يُحمَّل الـ checkpoint الناتج على GPU عبر نوى مثل Marlin أو ExLlama.',
          '<strong>تحمي AWQ (التكميم الواعي بالتنشيط) النسبة الصغيرة من الأوزان الأهم للتنشيطات</strong> بتحجيمها قبل التقريب إلى 4 بت. وعادةً تبقى المخرجات أقرب إلى النموذج الأصلي مقارنةً بالتقريب المنتظم.',
          'تهمّ حالة الأدوات إذا كنت تكمّم بنفسك. مشروع AutoAWQ مهجور ولم تعد صيانته مستمرة، وتحيل <a href="https://docs.vllm.ai/en/latest/features/quantization/auto_awq.html" class="text-primary hover:underline" target="_blank" rel="noopener">وثائق vLLM</a> إلى llm-compressor لتكميم AWQ. مستودع AutoGPTQ مؤرشف ويوصي ملف README فيه باستخدام GPTQModel. تظل نقاط AWQ وGPTQ المكمَّمة مسبقًا على Hugging Face قابلة للتحميل في vLLM؛ تحقق من كل مستودع قبل بناء خط جديد عليه.',
        ],
      },
      speed: {
        id: 'speed',
        title: 'السرعة والجودة تعتمدان على النواة وليس التنسيق وحده',
        content: [
          '<strong>قد يكون ملف AWQ أو GPTQ نفسه أبطأ بكثير أو أسرع بحسب نواة GPU التي تشغّله.</strong> تفيد اختبارات أداء من جهات خارجية على vLLM بأن AWQ بالنواة الافتراضية أبطأ من FP16، بينما تجعل نواة Marlin كلًّا من AWQ وGPTQ أسرع من FP16 على وحدات NVIDIA (<a href="https://www.spheron.network/blog/gptq-vs-awq-vs-gguf-4-bit-quantization-comparison-2026/" class="text-primary hover:underline" target="_blank" rel="noopener">Spheron</a>، <a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>).',
          'فقدان الجودة عند 4 بت صغير لكنه قابل للقياس، ويختلف باختلاف النموذج والاختبار. في مقارنة HumanEval منشورة على Qwen2.5-32B سجّلت AWQ نسبة 51.8% مقابل 56.1% لـ FP16، وسجّلت GPTQ نسبة 46.3% (<a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>). تعامل مع هذه الأرقام كمؤشر فقط، واختبر على نموذجك ومهمتك.',
          'يستطيع vLLM تحميل ملفات GGUF، لكن يُذكر أن هذا الدعم أبطأ من AWQ أو GPTQ الأصليين. مع GGUF استخدم llama.cpp أو Ollama أو LM Studio.',
        ],
      },
      choose: {
        id: 'choose',
        title: 'أي تنسيق تختار لإعدادك',
        items: [
          '<strong>حاسوب محمول أو Mac أو جهاز بـ CPU فقط:</strong> GGUF. هو الوحيد من الثلاثة الذي يدعم الاستدلال على CPU، وهو التنسيق الذي يستخدمه Ollama وLM Studio على Apple Silicon.',
          '<strong>بطاقة GPU استهلاكية واحدة والنموذج يتسع في VRAM:</strong> GGUF للبساطة، أو AWQ/GPTQ إذا كانت أدواتك (ExLlama أو خط Python) تتوقعهما.',
          '<strong>نموذج أكبر من VRAM لديك:</strong> GGUF، لأنه يمكن تفريغ بعض الطبقات إلى ذاكرة النظام.',
          '<strong>واجهة إنتاجية على GPU من NVIDIA مع vLLM أو TGI:</strong> AWQ أو GPTQ مع نوى Marlin. ابدأ بـ AWQ وقارن GPTQ باختبار أداء.',
          '<strong>الضبط الدقيق:</strong> اضبط أولًا بدقة كاملة أو بدقة المحوّل، ثم كمّم الناتج.',
        ],
      },
      commands: {
        id: 'commands',
        title: 'أوامر تشغيل كل تنسيق',
        content: [
          'لكل تنسيق محمِّله الخاص. استبدل العناصر النائبة بنموذجك:',
        ],
        codeBlock: '# GGUF: run a Hugging Face GGUF file in Ollama\nollama run hf.co/<user>/<repo>:Q4_K_M\n\n# GGUF: create one from full-precision weights with llama.cpp\npython convert_hf_to_gguf.py ./model --outfile model-f16.gguf\nllama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M\n\n# AWQ or GPTQ: serve with vLLM\nvllm serve <user>/<model-AWQ> --quantization awq\nvllm serve <user>/<model-GPTQ> --quantization gptq',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني تحويل نموذج GPTQ أو AWQ إلى GGUF؟',
            a: 'عمومًا تحوّل من الأوزان كاملة الدقة الأصلية مباشرة إلى GGUF، بدلًا من التحويل بين تنسيقين مُكمَّمين بالفعل — الانتقال من مُكمَّم إلى مُكمَّم يضاعف فقدان الدقة. إذا كان لديك فقط نقطة تفتيش GPTQ/AWQ، ابحث عن الإصدار كامل الدقة للنموذج الأصلي للتحويل منه بدلًا من ذلك.',
          },
          {
            q: 'هل GGUF أبطأ من GPTQ أو AWQ على بطاقة GPU؟',
            a: 'على بطاقة GPU يستوعب فيها النموذج بالكامل في VRAM، يكون استدلال GGUF المحسّن جيدًا منافسًا لـ GPTQ/AWQ. الفجوة المهمة تظهر عندما لا يستوعب النموذج بالكامل — تفرّغ GGUF بسلاسة إلى CPU، بينما لا يمكن لـ GPTQ/AWQ ذلك عمومًا.',
          },
          {
            q: 'أي مستوى تكميم-K يجب أن أستخدم ضمن GGUF؟',
            a: 'Q4_K_M هو الافتراضي المتوازن الأكثر شيوعًا. راجع المقارنة المخصصة بين Q4_K_M وQ8_0 للمقايضة الكاملة بين حجم الملف والجودة عبر مستويات تكميم GGUF.',
          },
          {
            q: 'هل يدعم Ollama نماذج GPTQ أو AWQ مباشرة؟',
            a: 'لا — يُبنى Ollama حول GGUF تحديدًا. لاستخدام نقطة تفتيش GPTQ أو AWQ، تحتاج أداة تقديم مختلفة (vLLM أو TGI أو ExLlama) مصممة لذلك التنسيق.',
          },
          {
            q: 'ما هو GGUF؟',
            a: 'GGUF (GPT-Generated Unified Format) هو تنسيق النموذج في ملف واحد الخاص بـ llama.cpp. يخزّن الأوزان المكمَّمة والمُجزّئ والبيانات الوصفية معًا ويعمل على CPU أو GPU أو كليهما. وقد حلّ محل تنسيق GGML القديم.',
          },
          {
            q: 'ما الفرق بين GPTQ وAWQ؟',
            a: 'كلاهما طريقة تكميم 4 بت بعد التدريب لـ GPU فقط. تعوّض GPTQ خطأ التقريب طبقةً بطبقة باستخدام بيانات معايرة؛ أما AWQ فتحجّم الأوزان الأهم للتنشيطات قبل التقريب. عمليًا تحافظ AWQ عادةً على جودة أكبر قليلًا، لكن نواة GPU تهمّ بقدر الطريقة نفسها.',
          },
          {
            q: 'هل AWQ أفضل من GPTQ؟',
            a: 'غالبًا أفضل قليلًا من حيث الجودة لكل بت، لكن ليس دائمًا. تختلف النتائج بحسب النموذج وبيانات المعايرة والنواة؛ قارن الاثنين على مهمتك قبل اعتماد نشر إنتاجي.',
          },
          {
            q: 'ما الفرق بين نماذج GGUF وغير GGUF؟',
            a: 'النموذج غير GGUF عادةً نقطة safetensors لـ PyTorch/Transformers بدقة FP16/BF16، أو نقطة GPTQ/AWQ، ويحتاج إلى إطار عمل GPU. يجمع GGUF نموذجًا مكمَّمًا في ملف واحد لأدوات قائمة على llama.cpp، وهي تعمل أيضًا على CPU.',
          },
          {
            q: 'ما الفرق بين ONNX وGGUF؟',
            a: 'ONNX تنسيق رسم بياني للنموذج محايد للعتاد يشغّله ONNX Runtime، ويُستخدم للنشر على أجهزة متنوعة مثل NPU. أما GGUF فخاص بـ llama.cpp وهو الطريق الأبسط لتشغيل نماذج الدردشة على حاسوب شخصي.',
          },
          {
            q: 'هل أستطيع جلب نموذج GGUF أو AWQ المكمَّم الخاص بي إلى مزوّد مستضاف؟',
            a: 'يعتمد ذلك على المزوّد؛ راجع وثائقه حول التنسيقات المدعومة قبل الرفع. الاستضافة الذاتية ممكنة دائمًا: GGUF عبر llama.cpp أو Ollama، وAWQ أو GPTQ عبر vLLM أو TGI على GPU مستأجرة.',
          },
          {
            q: 'أي تنسيق يمنح أقل زمن استجابة في الإنتاج؟',
            a: 'على وحدات NVIDIA، يُعدّ AWQ أو GPTQ مع vLLM ونوى Marlin الإعداد المعتاد لزمن الاستجابة المنخفض. يعتمد الزمن على حجم الدفعة والعتاد؛ قِس بحركة المرور الخاصة بك.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[ما هو تكميم Q4_K_M؟](/prompt-bites/what-is-q4-k-m-quantization) — مستوى التكميم الأكثر شيوعًا في GGUF موضّح',
          '[Q4_K_M مقابل Q8_0](/prompt-bites/q4-k-m-vs-q8-0) — اختيار مستوى تكميم GGUF',
          '[Ollama مقابل vLLM مقابل TGI](/prompt-bites/ollama-vs-vllm-vs-tgi) — أداة التقديم التي تقترن بأي تنسيق',
          '[شرح تكميم نماذج LLM (دليل كامل)](/local-llms/llm-quantization-explained) — شرح متعمق وكامل لكيفية عمل التكميم داخليًا',
        ],
      },
    },
  },
  de: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/gguf-vs-gptq-vs-awq-overview-hero-de.webp',
    title: 'GGUF vs. GPTQ vs. AWQ: Unterschiede, Geschwindigkeit und Auswahl',
    seoTitle: 'GGUF vs. GPTQ vs. AWQ Quantisierung 2026 | Prompt Bites',
    metaDescription: 'GGUF läuft auf CPU und GPU via llama.cpp/Ollama; GPTQ und AWQ sind GPU-Formate für vLLM/TGI. Vergleich von Geschwindigkeit, Qualität, Tools und Befehlen.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die ein Quantisierungsformat für lokale oder servierte LLM-Inferenz wählen',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi', 'llama-cpp-gguf-conversion-guide'],
    is_living_page: false,
    leadAnswerBlock: '<strong>GGUF ist das beste Standard-Quantisierungsformat für lokale Nutzung</strong> — es läuft sowohl auf CPU als auch GPU über llama.cpp und Ollama, ohne separate CUDA-only-Anforderung. GPTQ und AWQ sind reine GPU-Formate für Produktions-Serving-Frameworks wie vLLM und TGI, wobei AWQ die Qualität bei gleicher Bitbreite im Allgemeinen besser hält als GPTQ.',
    toc: [
      { label: 'Beste Wahl: GGUF für lokale Nutzung, AWQ für Produktions-Serving', anchor: '#best-pick' },
      { label: 'GGUF vs. GPTQ vs. AWQ auf einen Blick', anchor: '#comparison' },
      { label: 'So funktionieren die Formate und wer sie pflegt', anchor: '#formats' },
      { label: 'Geschwindigkeit und Qualität hängen vom Kernel ab', anchor: '#speed' },
      { label: 'Welches Format zu Ihrem Setup passt', anchor: '#choose' },
      { label: 'Befehle für jedes Format', anchor: '#commands' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Sollte ich GGUF, GPTQ oder AWQ verwenden?',
        answer: 'Nutzen Sie GGUF für lokale Nutzung via Ollama oder llama.cpp — es läuft auf CPU und GPU ohne zusätzliche Anforderungen. Nutzen Sie AWQ statt GPTQ bei Produktions-Serving mit vLLM oder TGI, da es die Qualität bei gleicher Bitbreite besser hält.',
        bullets: [
          'GGUF: das native Format von llama.cpp — Hybrid-Inferenz auf CPU+GPU, der Standard für Ollama und LM Studio.',
          'GPTQ: nur GPU, kalibrierungsbasierte Post-Training-Quantisierung — ein früher Standard für effizientes 4-Bit-Serving.',
          'AWQ (Activation-aware Weight Quantization): nur GPU, im Allgemeinen bessere Qualität pro Bit als GPTQ, verbreitet im vLLM/TGI-Produktions-Serving.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF: der richtige Standard für lokale Nutzung — läuft auf CPU und GPU via llama.cpp/Ollama, keine CUDA-only-Anforderung',
          'GPTQ: nur GPU, ein früher Standard für 4-Bit-Serving, weiterhin von ExLlama und vLLM unterstützt',
          'AWQ: nur GPU, hält die Qualität bei gleicher Bitbreite im Allgemeinen besser als GPTQ — bevorzugt für Produktions-Serving',
          'Wer Ollama oder LM Studio lokal betreibt, will fast sicher GGUF, nicht GPTQ oder AWQ',
        ],
      },
      bestPick: {
        id: 'best-pick',
        snippetBlocks: [
          { type: 'one-sentence', text: 'GGUF ist ein quantisiertes Einzeldatei-Modellformat für llama.cpp, das auf CPU und GPU läuft, während GPTQ und AWQ reine GPU-4-Bit-Formate sind, die vor allem für das Serving mit vLLM und TGI dienen.' },
          { type: 'plain-terms', text: 'Einfach gesagt: Wählen Sie GGUF, wenn Sie Modelle auf dem eigenen Rechner mit Ollama oder LM Studio betreiben, und AWQ oder GPTQ nur, wenn Sie ein Modell von einem NVIDIA-GPU-Server ausliefern.' },
        ],
        title: 'Beste Wahl: GGUF für lokale Nutzung, AWQ für Produktions-Serving',
        content: [
          '<strong>GGUF ist das richtige Quantisierungsformat für fast jeden, der Modelle lokal über Ollama, LM Studio oder direkt llama.cpp betreibt — es unterstützt sowohl CPU- als auch GPU-Inferenz aus derselben Datei, einschließlich teilweisem CPU-Offload, wenn ein Modell nicht vollständig in den VRAM passt.</strong> Diese Flexibilität ist genau der Grund, warum GGUF zum Standardformat für lokale Consumer-LLM-Tools wurde: Es funktioniert, ob Sie eine leistungsstarke GPU, eine bescheidene oder gar keine haben.',
          'GPTQ war eine der frühesten, weitverbreiteten 4-Bit-Quantisierungsmethoden für effiziente GPU-Inferenz. Es nutzt einen Kalibrierungsdatensatz, um Qualitätsverluste bei der Post-Training-Quantisierung zu minimieren, ist aber reines GPU-Format — es gibt keinen sinnvollen CPU-Fallback-Pfad — und wurde bei Qualität pro Bit im Allgemeinen von neueren Methoden überholt.',
          'AWQ (Activation-aware Weight Quantization) ist die modernere, reine GPU-Alternative zu GPTQ. Indem es die Gewichte schützt, die für die Aktivierungsgröße am wichtigsten sind, statt alles einheitlich zu quantisieren, bewahrt AWQ im Allgemeinen mehr Qualität bei gleicher Bitbreite. Es ist eine verbreitete Wahl für Produktions-Serving-Stacks wie vLLM und TGI, wo reiner GPU-Betrieb ohnehin gegeben ist.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'GGUF vs. GPTQ vs. AWQ auf einen Blick',
        content: [
          'Wählen Sie GGUF, wenn Sie Ollama, LM Studio oder llama.cpp lokal betreiben — es ist das einzige der drei mit echtem CPU-Support und flexiblem Teil-Offload. Wählen Sie GPTQ nur, wenn Sie mit einer bestehenden Pipeline oder einem Tool arbeiten (wie älteren ExLlama-Setups), das dies speziell erwartet. Wählen Sie AWQ, wenn Sie auf einen Produktions-GPU-Serving-Stack (vLLM, TGI) deployen und die beste Qualität pro Bit unter den reinen GPU-Optionen wollen.',
          'Alle drei repräsentieren dasselbe zugrunde liegende Modell bei reduzierter Präzision — das Format bestimmt, welche Tools es laden können und wie elegant es mit GPU-Speicherengpässen umgeht, nicht die zugrunde liegende Fähigkeit des Modells.',
        ],
        columns: ['Format', 'Läuft auf', 'Typische Bits', 'Haupt-Tools', 'Am besten für'],
        rows: [
          { 'Format': 'GGUF', 'Läuft auf': 'CPU, GPU oder beides', 'Typische Bits': '2–8 Bit', 'Haupt-Tools': 'llama.cpp, Ollama, LM Studio', 'Am besten für': 'Lokale Nutzung' },
          { 'Format': 'GPTQ', 'Läuft auf': 'Nur GPU', 'Typische Bits': '4 Bit (3–8)', 'Haupt-Tools': 'vLLM, TGI, ExLlama', 'Am besten für': 'Bestehende GPU-Pipelines' },
          { 'Format': 'AWQ', 'Läuft auf': 'Nur GPU', 'Typische Bits': '4 Bit', 'Haupt-Tools': 'vLLM, TGI, Transformers', 'Am besten für': 'GPU-Serving' },
        ],
      },
      formats: {
        id: 'formats',
        title: 'So funktionieren GGUF, GPTQ und AWQ und wer sie pflegt',
        content: [
          '<strong>GGUF ist ein Einzeldatei-Modellformat mit integriertem Tokenizer und Metadaten, entwickelt für llama.cpp.</strong> Die Quantisierungstypen (Q4_K_M, Q5_K_M, Q8_0 u. a.) erzeugt das Tool <code>llama-quantize</code> von llama.cpp; dieselbe Datei läuft auf CPU, GPU oder gemischt. Es löste das ältere GGML-Format ab.',
          '<strong>GPTQ quantisiert ein Modell nach dem Training Schicht für Schicht und gleicht Rundungsfehler mit einem kleinen Kalibrierungsdatensatz aus.</strong> Der Checkpoint wird über Kernel wie Marlin oder ExLlama auf der GPU geladen.',
          '<strong>AWQ (Activation-aware Weight Quantization) schützt den kleinen Anteil der Gewichte, der für die Aktivierungen am wichtigsten ist,</strong> indem es sie vor dem Runden auf 4 Bit skaliert. Die Ausgaben bleiben so meist näher am Originalmodell als bei gleichmäßigem Runden.',
          'Der Tool-Status zählt, wenn Sie selbst quantisieren. Das Projekt AutoAWQ ist veraltet (deprecated) und wird nicht mehr gepflegt; die <a href="https://docs.vllm.ai/en/latest/features/quantization/auto_awq.html" class="text-primary hover:underline" target="_blank" rel="noopener">vLLM-Dokumentation</a> verweist für AWQ-Quantisierung auf llm-compressor. Das AutoGPTQ-Repository ist archiviert, sein README empfiehlt GPTQModel. Bereits quantisierte AWQ- und GPTQ-Checkpoints auf Hugging Face laden in vLLM weiterhin; prüfen Sie das jeweilige Repository, bevor Sie darauf eine neue Pipeline aufbauen.',
        ],
      },
      speed: {
        id: 'speed',
        title: 'Geschwindigkeit und Qualität hängen vom Kernel ab, nicht nur vom Format',
        content: [
          '<strong>Dieselbe AWQ- oder GPTQ-Datei kann je nach GPU-Kernel deutlich langsamer oder schneller laufen.</strong> Benchmarks Dritter mit vLLM berichten, dass AWQ mit dem Standard-Kernel langsamer als FP16 läuft, während der Marlin-Kernel AWQ und GPTQ auf NVIDIA-GPUs vor FP16 bringt (<a href="https://www.spheron.network/blog/gptq-vs-awq-vs-gguf-4-bit-quantization-comparison-2026/" class="text-primary hover:underline" target="_blank" rel="noopener">Spheron</a>, <a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>).',
          'Der Qualitätsverlust bei 4 Bit ist klein, aber messbar und hängt von Modell und Test ab. Ein veröffentlichter HumanEval-Vergleich mit Qwen2.5-32B nannte für AWQ 51,8 % gegenüber 56,1 % für FP16, für GPTQ 46,3 % (<a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>). Verstehen Sie solche Zahlen als Richtwerte und testen Sie mit Ihrem eigenen Modell und Ihrer Aufgabe.',
          'GGUF-Dateien lassen sich in vLLM laden, doch diese Unterstützung soll langsamer sein als natives AWQ oder GPTQ. Nutzen Sie für GGUF llama.cpp, Ollama oder LM Studio.',
        ],
      },
      choose: {
        id: 'choose',
        title: 'Welches Format zu Ihrem Setup passt',
        items: [
          '<strong>Laptop, Mac oder Rechner nur mit CPU:</strong> GGUF. Es ist das einzige der drei Formate mit CPU-Inferenz und wird von Ollama und LM Studio auf Apple Silicon genutzt.',
          '<strong>Eine Consumer-GPU, Modell passt in den VRAM:</strong> GGUF für Einfachheit, oder AWQ/GPTQ, wenn Ihr Tooling (ExLlama, Python-Pipeline) diese erwartet.',
          '<strong>Modell größer als Ihr VRAM:</strong> GGUF, da Schichten in den Arbeitsspeicher ausgelagert werden können.',
          '<strong>Produktions-API auf NVIDIA-GPUs mit vLLM oder TGI:</strong> AWQ oder GPTQ mit Marlin-Kernels. Beginnen Sie mit AWQ und vergleichen Sie GPTQ per Benchmark.',
          '<strong>Fine-Tuning:</strong> erst mit voller oder Adapter-Präzision feintunen, danach das Ergebnis quantisieren.',
        ],
      },
      commands: {
        id: 'commands',
        title: 'Befehle für jedes Format',
        content: [
          'Jedes Format hat einen eigenen Loader. Ersetzen Sie die Platzhalter durch Ihr Modell:',
        ],
        codeBlock: '# GGUF: run a Hugging Face GGUF file in Ollama\nollama run hf.co/<user>/<repo>:Q4_K_M\n\n# GGUF: create one from full-precision weights with llama.cpp\npython convert_hf_to_gguf.py ./model --outfile model-f16.gguf\nllama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M\n\n# AWQ or GPTQ: serve with vLLM\nvllm serve <user>/<model-AWQ> --quantization awq\nvllm serve <user>/<model-GPTQ> --quantization gptq',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich ein GPTQ- oder AWQ-Modell zu GGUF konvertieren?',
            a: 'Im Allgemeinen konvertiert man von den ursprünglichen vollpräzisen Gewichten direkt zu GGUF, statt zwischen zwei bereits quantisierten Formaten zu konvertieren — quantisiert-zu-quantisiert verstärkt den Präzisionsverlust. Haben Sie nur einen GPTQ/AWQ-Checkpoint, suchen Sie stattdessen nach der vollpräzisen Original-Veröffentlichung zum Konvertieren.',
          },
          {
            q: 'Ist GGUF auf einer GPU langsamer als GPTQ oder AWQ?',
            a: 'Auf einer GPU, auf der das Modell vollständig in den VRAM passt, ist gut optimierte GGUF-Inferenz konkurrenzfähig mit GPTQ/AWQ. Die Lücke zählt, wenn ein Modell nicht vollständig passt — GGUF lagert elegant auf die CPU aus, während GPTQ/AWQ das im Allgemeinen nicht können.',
          },
          {
            q: 'Welches K-Quant-Level sollte ich innerhalb von GGUF verwenden?',
            a: 'Q4_K_M ist der gängigste ausgewogene Standard. Siehe den eigenen Vergleich Q4_K_M vs. Q8_0 für den vollständigen Kompromiss zwischen Dateigröße und Qualität über die Quant-Level von GGUF hinweg.',
          },
          {
            q: 'Unterstützt Ollama GPTQ- oder AWQ-Modelle direkt?',
            a: 'Nein — Ollama ist speziell um GGUF herum aufgebaut. Um einen GPTQ- oder AWQ-Checkpoint zu nutzen, brauchen Sie ein anderes Serving-Tool (vLLM, TGI oder ExLlama), das für dieses Format ausgelegt ist.',
          },
          {
            q: 'Was ist GGUF?',
            a: 'GGUF (GPT-Generated Unified Format) ist das Einzeldatei-Modellformat von llama.cpp. Es speichert quantisierte Gewichte, Tokenizer und Metadaten zusammen und läuft auf CPU, GPU oder beidem. Es löste das ältere GGML-Format ab.',
          },
          {
            q: 'Was ist der Unterschied zwischen GPTQ und AWQ?',
            a: 'Beide sind reine GPU-Methoden zur 4-Bit-Quantisierung nach dem Training. GPTQ gleicht Rundungsfehler schichtweise mit Kalibrierdaten aus; AWQ skaliert die für die Aktivierungen wichtigsten Gewichte vor dem Runden. In der Praxis hält AWQ meist etwas mehr Qualität, doch der verwendete GPU-Kernel zählt ebenso viel wie die Methode.',
          },
          {
            q: 'Ist AWQ besser als GPTQ?',
            a: 'Bei der Qualität pro Bit oft etwas, aber nicht immer. Ergebnisse hängen von Modell, Kalibrierdaten und Kernel ab; vergleichen Sie beide mit Ihrer eigenen Aufgabe, bevor Sie ein Produktivsystem festlegen.',
          },
          {
            q: 'Was ist der Unterschied zwischen GGUF- und Nicht-GGUF-Modellen?',
            a: 'Ein Nicht-GGUF-Modell ist meist ein safetensors-Checkpoint für PyTorch/Transformers in FP16/BF16 oder ein GPTQ/AWQ-Checkpoint und braucht ein GPU-Framework. GGUF verpackt ein quantisiertes Modell in eine Datei für llama.cpp-basierte Tools, die auch auf der CPU laufen.',
          },
          {
            q: 'Was ist der Unterschied zwischen ONNX und GGUF?',
            a: 'ONNX ist ein hardwareneutrales Modellgraph-Format für ONNX Runtime, etwa für den Einsatz auf verschiedenen Geräten wie NPUs. GGUF ist llama.cpp-spezifisch und der einfachere Weg, Chat-LLMs auf einem PC zu betreiben.',
          },
          {
            q: 'Kann ich ein eigenes quantisiertes GGUF- oder AWQ-Modell bei einem gehosteten Anbieter nutzen?',
            a: 'Das hängt vom Anbieter ab; prüfen Sie vor dem Upload dessen Dokumentation zu unterstützten Formaten. Selbst hosten funktioniert immer: GGUF mit llama.cpp oder Ollama, AWQ oder GPTQ mit vLLM oder TGI auf einer gemieteten GPU.',
          },
          {
            q: 'Welches Format hat in der Produktion die geringste Latenz?',
            a: 'Auf NVIDIA-GPUs ist AWQ oder GPTQ mit vLLM und Marlin-Kernels das übliche Setup für niedrige Latenz. Die Latenz hängt von Batchgröße und Hardware ab; messen Sie mit Ihrem eigenen Traffic.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Was ist Q4_K_M-Quantisierung?](/prompt-bites/what-is-q4-k-m-quantization) — das gängigste Quant-Level von GGUF erklärt',
          '[Q4_K_M vs. Q8_0](/prompt-bites/q4-k-m-vs-q8-0) — ein GGUF-Quant-Level auswählen',
          '[Ollama vs. vLLM vs. TGI](/prompt-bites/ollama-vs-vllm-vs-tgi) — welches Serving-Tool zu welchem Format passt',
          '[LLM-Quantisierung erklärt (vollständiger Leitfaden)](/local-llms/llm-quantization-explained) — der vollständige Deep Dive, wie Quantisierung unter der Haube funktioniert',
        ],
      },
    },
  },
  es: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/gguf-vs-gptq-vs-awq-overview-hero-es.webp',
    title: 'GGUF vs GPTQ vs AWQ: diferencias, velocidad y cuál usar',
    seoTitle: 'GGUF vs GPTQ vs AWQ Cuantización 2026 | Prompt Bites',
    metaDescription: 'GGUF corre en CPU y GPU con llama.cpp/Ollama; GPTQ y AWQ son formatos solo GPU para vLLM/TGI. Compara velocidad, calidad, herramientas y comandos.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores que eligen un formato de cuantización para inferencia local o servida de LLM',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi', 'llama-cpp-gguf-conversion-guide'],
    is_living_page: false,
    leadAnswerBlock: '<strong>GGUF es el mejor formato de cuantización por defecto para uso local</strong> — corre tanto en CPU como en GPU a través de llama.cpp y Ollama, sin un requisito separado exclusivo de CUDA. GPTQ y AWQ son formatos solo para GPU pensados para frameworks de servicio en producción como vLLM y TGI, donde AWQ generalmente mantiene mejor la calidad que GPTQ al mismo ancho de bits.',
    toc: [
      { label: 'Mejor Opción: GGUF para Uso Local, AWQ para Servicio en Producción', anchor: '#best-pick' },
      { label: 'GGUF vs GPTQ vs AWQ de un Vistazo', anchor: '#comparison' },
      { label: 'Cómo funciona cada formato y quién lo mantiene', anchor: '#formats' },
      { label: 'La velocidad y la calidad dependen del kernel', anchor: '#speed' },
      { label: 'Qué formato elegir según tu configuración', anchor: '#choose' },
      { label: 'Comandos para ejecutar cada formato', anchor: '#commands' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Debería usar cuantización GGUF, GPTQ o AWQ?',
        answer: 'Usa GGUF para uso local vía Ollama o llama.cpp — corre en CPU y GPU sin requisitos adicionales. Usa AWQ en lugar de GPTQ si sirves en producción con vLLM o TGI, ya que mantiene mejor la calidad al mismo ancho de bits.',
        bullets: [
          'GGUF: el formato nativo de llama.cpp — inferencia híbrida CPU+GPU, el predeterminado para Ollama y LM Studio.',
          'GPTQ: solo para GPU, cuantización post-entrenamiento basada en calibración — un estándar temprano para servicio eficiente en 4 bits.',
          'AWQ (Cuantización de Pesos Consciente de la Activación): solo para GPU, generalmente mejor calidad por bit que GPTQ, común en servicio de producción vLLM/TGI.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF: la opción correcta por defecto para uso local — corre en CPU y GPU vía llama.cpp/Ollama, sin requisito exclusivo de CUDA',
          'GPTQ: solo para GPU, un estándar temprano para servicio en 4 bits, aún soportado por ExLlama y vLLM',
          'AWQ: solo para GPU, generalmente mantiene mejor la calidad que GPTQ al mismo ancho de bits — preferido para servicio en producción',
          'Si ejecutas Ollama o LM Studio localmente, casi con certeza quieres GGUF, no GPTQ ni AWQ',
        ],
      },
      bestPick: {
        id: 'best-pick',
        snippetBlocks: [
          { type: 'one-sentence', text: 'GGUF es un formato de modelo cuantizado en un solo archivo para llama.cpp que corre en CPU y GPU, mientras que GPTQ y AWQ son formatos de 4 bits solo para GPU, usados sobre todo para servir modelos con vLLM y TGI.' },
          { type: 'plain-terms', text: 'En términos simples: elige GGUF si ejecutas modelos en tu propio equipo con Ollama o LM Studio, y AWQ o GPTQ solo si sirves un modelo desde un servidor con GPU NVIDIA.' },
        ],
        title: 'Mejor Opción: GGUF para Uso Local, AWQ para Servicio en Producción',
        content: [
          '<strong>GGUF es el formato de cuantización correcto para casi cualquiera que ejecute modelos localmente a través de Ollama, LM Studio o llama.cpp directamente — soporta inferencia tanto en CPU como en GPU desde el mismo archivo, incluida la descarga parcial a CPU cuando un modelo no cabe completamente en VRAM.</strong> Esta flexibilidad es exactamente por qué GGUF se convirtió en el formato estándar para las herramientas de LLM local de consumo: funciona ya sea que tengas una GPU potente, una modesta, o ninguna.',
          'GPTQ fue uno de los primeros métodos de cuantización de 4 bits ampliamente adoptados para inferencia eficiente en GPU. Usa un dataset de calibración para minimizar la pérdida de calidad durante la cuantización post-entrenamiento, pero es solo para GPU — no hay una ruta de reserva significativa a CPU — y en general ha sido superado en calidad por bit por métodos más nuevos.',
          'AWQ (Cuantización de Pesos Consciente de la Activación) es la alternativa más moderna solo para GPU frente a GPTQ. Al proteger los pesos que más importan para la magnitud de activación en lugar de cuantizar todo uniformemente, AWQ generalmente preserva más calidad al mismo ancho de bits. Es una elección común para pilas de servicio en producción como vLLM y TGI, donde la operación exclusiva de GPU ya es un supuesto de partida.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'GGUF vs GPTQ vs AWQ de un Vistazo',
        content: [
          'Elige GGUF si ejecutas Ollama, LM Studio o llama.cpp localmente — es el único de los tres con soporte real de CPU y flexibilidad de descarga parcial. Elige GPTQ solo si trabajas con una canalización o herramienta existente (como configuraciones de ExLlama más antiguas) que lo espera específicamente. Elige AWQ si despliegas en una pila de servicio de producción en GPU (vLLM, TGI) y quieres la mejor calidad por bit entre las opciones exclusivas de GPU.',
          'Los tres representan el mismo modelo subyacente con precisión reducida — el formato determina qué herramientas pueden cargarlo y cuán elegantemente maneja las carencias de memoria de GPU, no la capacidad subyacente del modelo.',
        ],
        columns: ['Formato', 'Corre en', 'Bits típicos', 'Herramientas', 'Ideal para'],
        rows: [
          { 'Formato': 'GGUF', 'Corre en': 'CPU, GPU o ambos', 'Bits típicos': '2–8 bits', 'Herramientas': 'llama.cpp, Ollama, LM Studio', 'Ideal para': 'Uso local' },
          { 'Formato': 'GPTQ', 'Corre en': 'Solo GPU', 'Bits típicos': '4 bits (3–8)', 'Herramientas': 'vLLM, TGI, ExLlama', 'Ideal para': 'Pipelines GPU existentes' },
          { 'Formato': 'AWQ', 'Corre en': 'Solo GPU', 'Bits típicos': '4 bits', 'Herramientas': 'vLLM, TGI, Transformers', 'Ideal para': 'Serving en GPU' },
        ],
      },
      formats: {
        id: 'formats',
        title: 'Cómo funcionan GGUF, GPTQ y AWQ y quién los mantiene',
        content: [
          '<strong>GGUF es un formato de modelo en un solo archivo, con tokenizador y metadatos integrados, diseñado para llama.cpp.</strong> Sus tipos de cuantización (Q4_K_M, Q5_K_M, Q8_0 y otros) los genera la herramienta <code>llama-quantize</code> de llama.cpp, y el mismo archivo corre en CPU, GPU o una mezcla. Sustituyó al antiguo formato GGML.',
          '<strong>GPTQ cuantiza un modelo capa por capa tras el entrenamiento, usando un pequeño conjunto de calibración para compensar el error de redondeo.</strong> El checkpoint se carga en la GPU mediante kernels como Marlin o ExLlama.',
          '<strong>AWQ (Activation-aware Weight Quantization) protege la pequeña parte de los pesos más importantes para las activaciones</strong> escalándolos antes de redondear a 4 bits. Así las salidas suelen quedar más cerca del modelo original que con un redondeo uniforme.',
          'El estado de las herramientas importa si cuantizas tú mismo. El proyecto AutoAWQ está obsoleto y sin mantenimiento, y la <a href="https://docs.vllm.ai/en/latest/features/quantization/auto_awq.html" class="text-primary hover:underline" target="_blank" rel="noopener">documentación de vLLM</a> remite a llm-compressor para cuantizar en AWQ. El repositorio de AutoGPTQ está archivado y su README recomienda GPTQModel. Los checkpoints AWQ y GPTQ ya cuantizados en Hugging Face siguen cargando en vLLM; revisa cada repositorio antes de montar un pipeline nuevo sobre él.',
        ],
      },
      speed: {
        id: 'speed',
        title: 'La velocidad y la calidad dependen del kernel, no solo del formato',
        content: [
          '<strong>El mismo archivo AWQ o GPTQ puede ser mucho más lento o más rápido según el kernel de GPU que lo ejecute.</strong> Benchmarks de terceros con vLLM indican que AWQ con el kernel por defecto va más lento que FP16, mientras que el kernel Marlin coloca a AWQ y GPTQ por delante de FP16 en GPU NVIDIA (<a href="https://www.spheron.network/blog/gptq-vs-awq-vs-gguf-4-bit-quantization-comparison-2026/" class="text-primary hover:underline" target="_blank" rel="noopener">Spheron</a>, <a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>).',
          'La pérdida de calidad a 4 bits es pequeña pero medible y varía según el modelo y la prueba. Una comparación HumanEval publicada con Qwen2.5-32B dio 51,8 % a AWQ frente a 56,1 % de FP16, y 46,3 % a GPTQ (<a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>). Toma estas cifras como orientativas y prueba con tu modelo y tu tarea.',
          'vLLM puede cargar archivos GGUF, pero ese soporte se reporta más lento que AWQ o GPTQ nativos. Para GGUF usa llama.cpp, Ollama o LM Studio.',
        ],
      },
      choose: {
        id: 'choose',
        title: 'Qué formato elegir según tu configuración',
        items: [
          '<strong>Portátil, Mac o equipo solo con CPU:</strong> GGUF. Es el único de los tres con inferencia en CPU y el formato que usan Ollama y LM Studio en Apple Silicon.',
          '<strong>Una GPU de consumo, el modelo cabe en VRAM:</strong> GGUF por simplicidad, o AWQ/GPTQ si tus herramientas (ExLlama, un pipeline en Python) lo esperan.',
          '<strong>Modelo mayor que tu VRAM:</strong> GGUF, porque puede descargar capas a la RAM del sistema.',
          '<strong>API de producción en GPU NVIDIA con vLLM o TGI:</strong> AWQ o GPTQ con kernels Marlin. Empieza con AWQ y compara GPTQ con un benchmark.',
          '<strong>Fine-tuning:</strong> ajusta primero con precisión completa o de adaptador y cuantiza después el resultado.',
        ],
      },
      commands: {
        id: 'commands',
        title: 'Comandos para ejecutar cada formato',
        content: [
          'Cada formato tiene su propio cargador. Sustituye los marcadores por tu modelo:',
        ],
        codeBlock: '# GGUF: run a Hugging Face GGUF file in Ollama\nollama run hf.co/<user>/<repo>:Q4_K_M\n\n# GGUF: create one from full-precision weights with llama.cpp\npython convert_hf_to_gguf.py ./model --outfile model-f16.gguf\nllama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M\n\n# AWQ or GPTQ: serve with vLLM\nvllm serve <user>/<model-AWQ> --quantization awq\nvllm serve <user>/<model-GPTQ> --quantization gptq',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿Puedo convertir un modelo GPTQ o AWQ a GGUF?',
            a: 'Generalmente conviertes desde los pesos originales de precisión completa directamente a GGUF, en lugar de convertir entre dos formatos ya cuantizados — pasar de cuantizado a cuantizado agrava la pérdida de precisión. Si solo tienes un checkpoint GPTQ/AWQ, busca el lanzamiento de precisión completa del modelo original para convertir desde ahí.',
          },
          {
            q: '¿Es GGUF más lento que GPTQ o AWQ en una GPU?',
            a: 'En una GPU donde el modelo cabe completamente en VRAM, la inferencia GGUF bien optimizada es competitiva con GPTQ/AWQ. La brecha que importa es cuando un modelo no cabe completamente — GGUF descarga elegantemente a CPU, mientras que GPTQ/AWQ generalmente no pueden.',
          },
          {
            q: '¿Qué nivel de K-quant debería usar dentro de GGUF?',
            a: 'Q4_K_M es el predeterminado balanceado más común. Consulta la comparación dedicada Q4_K_M vs Q8_0 para la contrapartida completa entre tamaño de archivo y calidad entre los niveles de cuantización de GGUF.',
          },
          {
            q: '¿Soporta Ollama modelos GPTQ o AWQ directamente?',
            a: 'No — Ollama está construido específicamente en torno a GGUF. Para usar un checkpoint GPTQ o AWQ, necesitas una herramienta de servicio diferente (vLLM, TGI o ExLlama) diseñada para ese formato.',
          },
          {
            q: '¿Qué es GGUF?',
            a: 'GGUF (GPT-Generated Unified Format) es el formato de modelo en un solo archivo de llama.cpp. Guarda pesos cuantizados, tokenizador y metadatos juntos y corre en CPU, GPU o ambos. Sustituyó al antiguo formato GGML.',
          },
          {
            q: '¿Cuál es la diferencia entre GPTQ y AWQ?',
            a: 'Ambos son métodos de 4 bits posteriores al entrenamiento y solo para GPU. GPTQ compensa el error de redondeo capa por capa con datos de calibración; AWQ escala los pesos más importantes para las activaciones antes de redondear. En la práctica AWQ suele conservar algo más de calidad, pero el kernel de GPU importa tanto como el método.',
          },
          {
            q: '¿Es AWQ mejor que GPTQ?',
            a: 'A menudo un poco, en calidad por bit, pero no siempre. Los resultados varían según el modelo, los datos de calibración y el kernel; compara ambos con tu tarea antes de fijar un despliegue.',
          },
          {
            q: '¿Qué diferencia hay entre modelos GGUF y no GGUF?',
            a: 'Un modelo no GGUF suele ser un checkpoint safetensors para PyTorch/Transformers en FP16/BF16, o un checkpoint GPTQ/AWQ, y requiere un framework de GPU. GGUF empaqueta un modelo cuantizado en un archivo para herramientas basadas en llama.cpp, que también corren en CPU.',
          },
          {
            q: '¿Qué diferencia hay entre ONNX y GGUF?',
            a: 'ONNX es un formato de grafo de modelo neutral al hardware que ejecuta ONNX Runtime, usado para desplegar en dispositivos como NPU. GGUF es específico de llama.cpp y es la vía más simple para ejecutar LLM de chat en un ordenador personal.',
          },
          {
            q: '¿Puedo llevar mi propio modelo GGUF o AWQ cuantizado a un proveedor alojado?',
            a: 'Depende del proveedor; revisa su documentación sobre formatos admitidos antes de subirlo. El autoalojamiento siempre funciona: GGUF con llama.cpp u Ollama, AWQ o GPTQ con vLLM o TGI en una GPU alquilada.',
          },
          {
            q: '¿Qué formato tiene menor latencia en producción?',
            a: 'En GPU NVIDIA, AWQ o GPTQ servidos con vLLM y kernels Marlin es la configuración habitual de baja latencia. La latencia depende del tamaño de lote y del hardware; mide con tu propio tráfico.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[¿Qué Es la Cuantización Q4_K_M?](/prompt-bites/what-is-q4-k-m-quantization) — el nivel de cuantización más común de GGUF explicado',
          '[Q4_K_M vs Q8_0](/prompt-bites/q4-k-m-vs-q8-0) — eligiendo un nivel de cuantización GGUF',
          '[Ollama vs vLLM vs TGI](/prompt-bites/ollama-vs-vllm-vs-tgi) — qué herramienta de servicio combina con qué formato',
          '[Cuantización de LLM explicada (guía completa)](/local-llms/llm-quantization-explained) — la explicación completa y detallada de cómo funciona la cuantización por dentro',
        ],
      },
    },
  },
  fr: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/gguf-vs-gptq-vs-awq-overview-hero-fr.webp',
    title: 'GGUF vs GPTQ vs AWQ : différences, vitesse et choix',
    seoTitle: 'GGUF vs GPTQ vs AWQ : quantification 2026 | Prompt Bites',
    metaDescription: 'GGUF tourne sur CPU et GPU via llama.cpp/Ollama ; GPTQ et AWQ sont des formats GPU pour vLLM/TGI. Comparez vitesse, qualité, outils et commandes.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Développeurs qui choisissent un format de quantification pour de l\'inférence LLM locale ou servie',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi', 'llama-cpp-gguf-conversion-guide'],
    is_living_page: false,
    leadAnswerBlock: '<strong>GGUF est le meilleur format de quantification par défaut pour un usage local</strong> — il fonctionne à la fois sur CPU et GPU via llama.cpp et Ollama, sans exigence CUDA exclusive. GPTQ et AWQ sont des formats GPU uniquement conçus pour des frameworks de déploiement en production comme vLLM et TGI, où AWQ conserve généralement une meilleure qualité que GPTQ à largeur de bits égale.',
    toc: [
      { label: 'Meilleur choix : GGUF en local, AWQ pour la production', anchor: '#best-pick' },
      { label: 'GGUF vs GPTQ vs AWQ en un coup d\'œil', anchor: '#comparison' },
      { label: 'Fonctionnement des formats et suivi des projets', anchor: '#formats' },
      { label: 'Vitesse et qualité dépendent du noyau', anchor: '#speed' },
      { label: 'Quel format choisir selon votre configuration', anchor: '#choose' },
      { label: 'Commandes pour chaque format', anchor: '#commands' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Faut-il utiliser la quantification GGUF, GPTQ ou AWQ ?',
        answer: 'Utilisez GGUF pour un usage local via Ollama ou llama.cpp — il fonctionne sur CPU et GPU sans exigence supplémentaire. Préférez AWQ à GPTQ pour un déploiement en production avec vLLM ou TGI, car il conserve une meilleure qualité à largeur de bits égale.',
        bullets: [
          'GGUF : le format natif de llama.cpp — inférence hybride CPU+GPU, format par défaut d\'Ollama et LM Studio.',
          'GPTQ : GPU uniquement, quantification post-entraînement basée sur un calibrage — un des premiers standards pour un déploiement 4-bit efficace.',
          'AWQ (Activation-aware Weight Quantization) : GPU uniquement, généralement meilleur rapport qualité/bit que GPTQ, courant dans les déploiements de production vLLM/TGI.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF : le bon choix par défaut pour un usage local — fonctionne sur CPU et GPU via llama.cpp/Ollama, sans exigence CUDA exclusive',
          'GPTQ : GPU uniquement, un des premiers standards pour le déploiement 4-bit, toujours pris en charge par ExLlama et vLLM',
          'AWQ : GPU uniquement, conserve généralement une meilleure qualité que GPTQ à largeur de bits égale — préféré pour le déploiement en production',
          'Si vous utilisez Ollama ou LM Studio en local, c\'est presque toujours GGUF qu\'il vous faut, pas GPTQ ni AWQ',
        ],
      },
      bestPick: {
        id: 'best-pick',
        snippetBlocks: [
          { type: 'one-sentence', text: 'GGUF est un format de modèle quantifié en un seul fichier pour llama.cpp, qui tourne sur CPU et GPU, tandis que GPTQ et AWQ sont des formats 4 bits réservés au GPU, utilisés surtout pour servir des modèles avec vLLM et TGI.' },
          { type: 'plain-terms', text: 'En clair : choisissez GGUF pour exécuter des modèles sur votre propre ordinateur avec Ollama ou LM Studio, et AWQ ou GPTQ seulement pour servir un modèle depuis un serveur GPU NVIDIA.' },
        ],
        title: 'Meilleur choix : GGUF en local, AWQ pour la production',
        content: [
          '<strong>GGUF est le format de quantification adapté à presque tous ceux qui exécutent des modèles en local via Ollama, LM Studio ou llama.cpp directement — il prend en charge l\'inférence CPU et GPU à partir du même fichier, y compris le déchargement CPU partiel lorsqu\'un modèle ne tient pas entièrement en VRAM.</strong> Cette flexibilité explique pourquoi GGUF est devenu le format standard des outils grand public pour LLM en local : il fonctionne que vous disposiez d\'un GPU puissant, modeste, ou d\'aucun GPU du tout.',
          'GPTQ a été l\'une des premières méthodes de quantification 4-bit largement adoptées pour une inférence GPU efficace. Elle utilise un jeu de données de calibrage pour minimiser la perte de qualité lors de la quantification post-entraînement, mais elle est GPU uniquement — sans réel repli CPU — et a généralement été dépassée en rapport qualité/bit par des méthodes plus récentes.',
          'AWQ (Activation-aware Weight Quantization) est l\'alternative GPU uniquement plus moderne à GPTQ. En protégeant les poids les plus importants pour l\'amplitude d\'activation plutôt qu\'en quantifiant tout de manière uniforme, AWQ préserve généralement davantage de qualité à largeur de bits égale. C\'est un choix courant pour les piles de déploiement en production comme vLLM et TGI, où le fonctionnement GPU uniquement est déjà acquis.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'GGUF vs GPTQ vs AWQ en un coup d\'œil',
        content: [
          'Choisissez GGUF si vous utilisez Ollama, LM Studio ou llama.cpp en local — c\'est le seul des trois à offrir un vrai support CPU et une flexibilité de déchargement partiel. Choisissez GPTQ uniquement si vous travaillez avec un pipeline ou un outil existant (comme d\'anciennes configurations ExLlama) qui l\'exige spécifiquement. Choisissez AWQ si vous déployez sur une pile de production GPU (vLLM, TGI) et souhaitez le meilleur rapport qualité/bit parmi les options GPU uniquement.',
          'Les trois formats représentent le même modèle sous-jacent à précision réduite — le format détermine quels outils peuvent le charger et la manière dont il gère les manques de mémoire GPU, pas les capacités intrinsèques du modèle.',
        ],
        columns: ['Format', 'Tourne sur', 'Bits typiques', 'Outils principaux', 'Idéal pour'],
        rows: [
          { 'Format': 'GGUF', 'Tourne sur': 'CPU, GPU ou les deux', 'Bits typiques': '2–8 bits', 'Outils principaux': 'llama.cpp, Ollama, LM Studio', 'Idéal pour': 'Usage local' },
          { 'Format': 'GPTQ', 'Tourne sur': 'GPU uniquement', 'Bits typiques': '4 bits (3–8)', 'Outils principaux': 'vLLM, TGI, ExLlama', 'Idéal pour': 'Pipelines GPU existants' },
          { 'Format': 'AWQ', 'Tourne sur': 'GPU uniquement', 'Bits typiques': '4 bits', 'Outils principaux': 'vLLM, TGI, Transformers', 'Idéal pour': 'Serving GPU' },
        ],
      },
      formats: {
        id: 'formats',
        title: 'Fonctionnement de GGUF, GPTQ et AWQ et suivi des projets',
        content: [
          '<strong>GGUF est un format de modèle en un seul fichier, avec tokenizer et métadonnées intégrés, conçu pour llama.cpp.</strong> Ses types de quantification (Q4_K_M, Q5_K_M, Q8_0, etc.) sont produits par l\'outil <code>llama-quantize</code> de llama.cpp, et le même fichier tourne sur CPU, GPU ou les deux. Il a remplacé l\'ancien format GGML.',
          '<strong>GPTQ quantifie un modèle couche par couche après l\'entraînement, avec un petit jeu de calibration pour compenser l\'erreur d\'arrondi.</strong> Le checkpoint se charge sur GPU via des noyaux comme Marlin ou ExLlama.',
          '<strong>AWQ (Activation-aware Weight Quantization) protège la petite part des poids les plus importants pour les activations</strong> en les mettant à l\'échelle avant l\'arrondi à 4 bits. Les sorties restent en général plus proches du modèle d\'origine qu\'avec un arrondi uniforme.',
          'L\'état des outils compte si vous quantifiez vous-même. Le projet AutoAWQ est déprécié et n\'est plus maintenu ; la <a href="https://docs.vllm.ai/en/latest/features/quantization/auto_awq.html" class="text-primary hover:underline" target="_blank" rel="noopener">documentation vLLM</a> renvoie vers llm-compressor pour la quantification AWQ. Le dépôt AutoGPTQ est archivé et son README recommande GPTQModel. Les checkpoints AWQ et GPTQ déjà quantifiés sur Hugging Face continuent de se charger dans vLLM ; vérifiez chaque dépôt avant d\'y bâtir un nouveau pipeline.',
        ],
      },
      speed: {
        id: 'speed',
        title: 'Vitesse et qualité dépendent du noyau, pas seulement du format',
        content: [
          '<strong>Un même fichier AWQ ou GPTQ peut être bien plus lent ou plus rapide selon le noyau GPU qui l\'exécute.</strong> Des benchmarks tiers sous vLLM indiquent qu\'AWQ avec le noyau par défaut est plus lent que FP16, alors que le noyau Marlin place AWQ et GPTQ devant FP16 sur les GPU NVIDIA (<a href="https://www.spheron.network/blog/gptq-vs-awq-vs-gguf-4-bit-quantization-comparison-2026/" class="text-primary hover:underline" target="_blank" rel="noopener">Spheron</a>, <a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>).',
          'La perte de qualité à 4 bits est faible mais mesurable, et varie selon le modèle et le test. Une comparaison HumanEval publiée sur Qwen2.5-32B donne 51,8 % pour AWQ contre 56,1 % pour FP16, et 46,3 % pour GPTQ (<a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>). Considérez ces chiffres comme indicatifs et testez sur votre modèle et votre tâche.',
          'vLLM peut charger des fichiers GGUF, mais ce support serait plus lent que AWQ ou GPTQ natifs. Pour GGUF, utilisez llama.cpp, Ollama ou LM Studio.',
        ],
      },
      choose: {
        id: 'choose',
        title: 'Quel format choisir selon votre configuration',
        items: [
          '<strong>Portable, Mac ou machine sans GPU :</strong> GGUF. C\'est le seul des trois à permettre l\'inférence CPU, et le format utilisé par Ollama et LM Studio sur Apple Silicon.',
          '<strong>Un GPU grand public, modèle qui tient en VRAM :</strong> GGUF pour la simplicité, ou AWQ/GPTQ si vos outils (ExLlama, pipeline Python) les attendent.',
          '<strong>Modèle plus grand que votre VRAM :</strong> GGUF, car des couches peuvent être déchargées vers la RAM.',
          '<strong>API de production sur GPU NVIDIA avec vLLM ou TGI :</strong> AWQ ou GPTQ avec noyaux Marlin. Commencez par AWQ et comparez GPTQ par benchmark.',
          '<strong>Fine-tuning :</strong> ajustez d\'abord en précision complète ou par adaptateur, puis quantifiez le résultat.',
        ],
      },
      commands: {
        id: 'commands',
        title: 'Commandes pour chaque format',
        content: [
          'Chaque format a son propre chargeur. Remplacez les espaces réservés par votre modèle :',
        ],
        codeBlock: '# GGUF: run a Hugging Face GGUF file in Ollama\nollama run hf.co/<user>/<repo>:Q4_K_M\n\n# GGUF: create one from full-precision weights with llama.cpp\npython convert_hf_to_gguf.py ./model --outfile model-f16.gguf\nllama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M\n\n# AWQ or GPTQ: serve with vLLM\nvllm serve <user>/<model-AWQ> --quantization awq\nvllm serve <user>/<model-GPTQ> --quantization gptq',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je convertir un modèle GPTQ ou AWQ en GGUF ?',
            a: 'En général, on convertit directement les poids d\'origine en pleine précision vers GGUF, plutôt que de convertir entre deux formats déjà quantifiés — une conversion quantifié-à-quantifié cumule les pertes de précision. Si vous ne disposez que d\'un checkpoint GPTQ/AWQ, cherchez plutôt la version en pleine précision du modèle d\'origine pour effectuer la conversion à partir de celle-ci.',
          },
          {
            q: 'GGUF est-il plus lent que GPTQ ou AWQ sur un GPU ?',
            a: 'Sur un GPU où le modèle tient entièrement en VRAM, une inférence GGUF bien optimisée est compétitive face à GPTQ/AWQ. L\'écart qui compte survient lorsque le modèle ne tient pas entièrement — GGUF décharge alors gracieusement vers le CPU, ce que GPTQ/AWQ ne peuvent généralement pas faire.',
          },
          {
            q: 'Quel niveau de K-quant utiliser au sein de GGUF ?',
            a: 'Q4_K_M est le choix par défaut équilibré le plus courant. Consultez le comparatif dédié Q4_K_M vs Q8_0 pour le détail complet du compromis entre taille de fichier et qualité selon les niveaux de quantification de GGUF.',
          },
          {
            q: 'Ollama prend-il en charge directement les modèles GPTQ ou AWQ ?',
            a: 'Non — Ollama est conçu spécifiquement autour de GGUF. Pour utiliser un checkpoint GPTQ ou AWQ, il vous faut un autre outil de déploiement (vLLM, TGI ou ExLlama) conçu pour ce format.',
          },
          {
            q: 'Qu\'est-ce que GGUF ?',
            a: 'GGUF (GPT-Generated Unified Format) est le format de modèle en un seul fichier de llama.cpp. Il regroupe poids quantifiés, tokenizer et métadonnées, et tourne sur CPU, GPU ou les deux. Il a remplacé l\'ancien format GGML.',
          },
          {
            q: 'Quelle différence entre GPTQ et AWQ ?',
            a: 'Les deux sont des méthodes 4 bits post-entraînement réservées au GPU. GPTQ compense l\'erreur d\'arrondi couche par couche avec des données de calibration ; AWQ met à l\'échelle les poids les plus importants pour les activations avant l\'arrondi. En pratique AWQ garde souvent un peu plus de qualité, mais le noyau GPU compte autant que la méthode.',
          },
          {
            q: 'AWQ est-il meilleur que GPTQ ?',
            a: 'Souvent un peu, en qualité par bit, mais pas toujours. Les résultats varient selon le modèle, les données de calibration et le noyau ; comparez les deux sur votre tâche avant de figer un déploiement.',
          },
          {
            q: 'Quelle différence entre modèles GGUF et non-GGUF ?',
            a: 'Un modèle non-GGUF est généralement un checkpoint safetensors pour PyTorch/Transformers en FP16/BF16, ou un checkpoint GPTQ/AWQ, et exige un framework GPU. GGUF regroupe un modèle quantifié en un fichier pour les outils basés sur llama.cpp, qui tournent aussi sur CPU.',
          },
          {
            q: 'Quelle différence entre ONNX et GGUF ?',
            a: 'ONNX est un format de graphe de modèle indépendant du matériel, exécuté par ONNX Runtime, utilisé pour déployer sur divers appareils comme les NPU. GGUF est propre à llama.cpp et reste la voie la plus simple pour faire tourner des LLM de chat sur un ordinateur personnel.',
          },
          {
            q: 'Puis-je utiliser mon propre modèle GGUF ou AWQ quantifié chez un hébergeur ?',
            a: 'Cela dépend de l\'hébergeur ; consultez sa documentation sur les formats pris en charge avant l\'envoi. L\'auto-hébergement fonctionne toujours : GGUF avec llama.cpp ou Ollama, AWQ ou GPTQ avec vLLM ou TGI sur un GPU loué.',
          },
          {
            q: 'Quel format offre la latence la plus faible en production ?',
            a: 'Sur GPU NVIDIA, AWQ ou GPTQ servi par vLLM avec noyaux Marlin est la configuration usuelle à faible latence. La latence dépend de la taille de lot et du matériel ; mesurez avec votre propre trafic.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Qu\'est-ce que la quantification Q4_K_M ?](/prompt-bites/what-is-q4-k-m-quantization) — le niveau de quantification le plus courant de GGUF expliqué',
          '[Q4_K_M vs Q8_0](/prompt-bites/q4-k-m-vs-q8-0) — choisir un niveau de quantification GGUF',
          '[Ollama vs vLLM vs TGI](/prompt-bites/ollama-vs-vllm-vs-tgi) — quel outil de déploiement correspond à quel format',
          '[La quantisation des LLM expliquée (guide complet)](/local-llms/llm-quantization-explained) — l\'analyse complète et détaillée du fonctionnement interne de la quantisation',
        ],
      },
    },
  },
  ja: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/gguf-vs-gptq-vs-awq-overview-hero-ja.webp',
    title: 'GGUF vs GPTQ vs AWQ: 違い・速度・選び方',
    seoTitle: '2026年版 GGUF vs GPTQ vs AWQ 量子化 | Prompt Bites',
    metaDescription: 'GGUFはllama.cpp/OllamaでCPUとGPUの両方で動作。GPTQとAWQはvLLM/TGI向けのGPU専用形式です。速度・品質・ツール・コマンドを比較します。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'ローカルまたはサービング用LLM推論の量子化フォーマットを選ぶ開発者',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi', 'llama-cpp-gguf-conversion-guide'],
    is_living_page: false,
    leadAnswerBlock: '<strong>GGUFはローカル用途に最適なデフォルトの量子化フォーマットです</strong> — llama.cppとOllama経由でCPUとGPU両方で動作し、別途CUDA専用の要件はありません。GPTQとAWQは、vLLMやTGIのような本番サービングフレームワーク向けのGPU専用フォーマットで、AWQは一般に同じビット幅ではGPTQより品質を保ちます。',
    toc: [
      { label: 'ベストピック: ローカル用にGGUF、本番サービング用にAWQ', anchor: '#best-pick' },
      { label: '一目でわかるGGUF vs GPTQ vs AWQ', anchor: '#comparison' },
      { label: '各フォーマットの仕組みとメンテナンス状況', anchor: '#formats' },
      { label: '速度と品質はカーネルに左右される', anchor: '#speed' },
      { label: '環境別の選び方', anchor: '#choose' },
      { label: '各フォーマットを動かすコマンド', anchor: '#commands' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'GGUF、GPTQ、AWQのどの量子化を使うべきですか?',
        answer: 'ローカル用途にはOllamaやllama.cpp経由でGGUFを使ってください — 追加要件なしでCPUとGPU両方で動作します。vLLMやTGIで本番サービングする場合は、同じビット幅でより品質を保つため、GPTQよりAWQを使ってください。',
        bullets: [
          'GGUF: llama.cppのネイティブフォーマット — CPU+GPUのハイブリッド推論、OllamaとLM Studioのデフォルト。',
          'GPTQ: GPU専用、キャリブレーションベースのトレーニング後量子化 — 効率的な4ビットサービングの初期標準。',
          'AWQ(Activation-aware Weight Quantization): GPU専用、一般にGPTQよりビットあたりの品質が優れ、vLLM/TGIの本番サービングで一般的。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF: ローカル用途に正しいデフォルト — llama.cpp/Ollama経由でCPUとGPU両方で動作、CUDA専用要件なし',
          'GPTQ: GPU専用、4ビットサービングの初期標準で、ExLlamaやvLLMで依然サポート',
          'AWQ: GPU専用、一般に同じビット幅でGPTQより品質を保つ — 本番サービングで好まれる',
          'OllamaかLM Studioをローカルで動かしているなら、ほぼ確実にGPTQやAWQではなくGGUFが欲しいもの',
        ],
      },
      bestPick: {
        id: 'best-pick',
        snippetBlocks: [
          { type: 'one-sentence', text: 'GGUFはCPUとGPUで動作するllama.cpp向けの単一ファイル量子化モデル形式で、GPTQとAWQはGPU専用の4ビット形式であり、主にvLLMやTGIでのサービングに使われます。' },
          { type: 'plain-terms', text: 'わかりやすく言えば、OllamaやLM Studioで自分のPC上でモデルを動かすならGGUF、NVIDIA GPUサーバーからモデルを提供する場合にのみAWQまたはGPTQを選びます。' },
        ],
        title: 'ベストピック: ローカル用にGGUF、本番サービング用にAWQ',
        content: [
          '<strong>GGUFは、Ollama、LM Studio、あるいはllama.cppを直接使ってローカルでモデルを動かすほぼ全ての人にとって正しい量子化フォーマットです — 同じファイルからCPUとGPU両方の推論をサポートし、モデルがVRAMに完全に収まらない場合の部分的なCPUオフロードも含みます。</strong>この柔軟性こそが、GGUFがコンシューマー向けローカルLLMツールの標準フォーマットになった理由です: 強力なGPUがあっても、控えめなGPUでも、GPUが全くなくても機能します。',
          'GPTQは、効率的なGPU推論のために広く採用された最初期の4ビット量子化手法の一つです。キャリブレーションデータセットを使ってトレーニング後量子化中の品質低下を最小化しますが、GPU専用です — 意味のあるCPUフォールバック経路はなく、一般的にビットあたりの品質では新しい手法に取って代わられています。',
          'AWQ(Activation-aware Weight Quantization)は、GPTQに代わるより現代的なGPU専用の選択肢です。すべてを均一に量子化するのではなく、活性化の大きさにとって最も重要な重みを保護することで、AWQは一般に同じビット幅でより多くの品質を保持します。vLLMやTGIのような本番サービングスタックでよく選ばれ、そこではGPU専用動作が既に前提となっています。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '一目でわかるGGUF vs GPTQ vs AWQ',
        content: [
          'Ollama、LM Studio、あるいはllama.cppをローカルで動かしているならGGUFを選んでください — 3つの中で実質的なCPUサポートと部分オフロードの柔軟性を持つ唯一のフォーマットです。既存のパイプラインやツール(古いExLlamaセットアップなど)がそれを特に想定している場合にのみGPTQを選んでください。本番のGPUサービングスタック(vLLM、TGI)にデプロイし、GPU専用オプションの中で最良のビットあたりの品質が欲しいならAWQを選んでください。',
          '3つとも同じ元のモデルを低精度で表現しており、フォーマットが決めるのはどのツールがそれを読み込めるか、GPUメモリ不足をどれだけうまく扱うかであって、モデル本来の能力ではありません。',
        ],
        columns: ['形式', '動作環境', '一般的なビット数', '主なツール', '向いている用途'],
        rows: [
          { '形式': 'GGUF', '動作環境': 'CPU、GPU、または両方', '一般的なビット数': '2〜8ビット', '主なツール': 'llama.cpp、Ollama、LM Studio', '向いている用途': 'ローカル利用' },
          { '形式': 'GPTQ', '動作環境': 'GPUのみ', '一般的なビット数': '4ビット(3〜8)', '主なツール': 'vLLM、TGI、ExLlama', '向いている用途': '既存のGPUパイプライン' },
          { '形式': 'AWQ', '動作環境': 'GPUのみ', '一般的なビット数': '4ビット', '主なツール': 'vLLM、TGI、Transformers', '向いている用途': 'GPUサービング' },
        ],
      },
      formats: {
        id: 'formats',
        title: 'GGUF・GPTQ・AWQの仕組みとメンテナンス状況',
        content: [
          '<strong>GGUFは、トークナイザとメタデータを内蔵した単一ファイルのモデル形式で、llama.cpp向けに設計されています。</strong>量子化タイプ(Q4_K_M、Q5_K_M、Q8_0など)はllama.cppの<code>llama-quantize</code>ツールで作成され、同じファイルがCPU、GPU、または両方で動作します。旧GGML形式に代わるものです。',
          '<strong>GPTQは、学習後にモデルを層ごとに量子化し、小さなキャリブレーションデータで丸め誤差を補正します。</strong>得られたチェックポイントは、MarlinやExLlamaなどのカーネルを通じてGPUに読み込まれます。',
          '<strong>AWQ(Activation-aware Weight Quantization)は、活性化にとって最も重要な一部の重みを保護し、</strong>4ビットに丸める前にスケーリングします。均一に丸める場合より、出力が元のモデルに近くなる傾向があります。',
          '自分で量子化する場合は、ツールの状況が重要です。AutoAWQプロジェクトは非推奨でメンテナンスが終了しており、<a href="https://docs.vllm.ai/en/latest/features/quantization/auto_awq.html" class="text-primary hover:underline" target="_blank" rel="noopener">vLLMのドキュメント</a>はAWQ量子化にllm-compressorを案内しています。AutoGPTQのリポジトリはアーカイブされ、READMEではGPTQModelが推奨されています。Hugging Face上の量子化済みAWQ/GPTQチェックポイントはvLLMで引き続き読み込めますが、新しいパイプラインを組む前に各リポジトリを確認してください。',
        ],
      },
      speed: {
        id: 'speed',
        title: '速度と品質はフォーマットだけでなくカーネルにも左右される',
        content: [
          '<strong>同じAWQまたはGPTQファイルでも、実行するGPUカーネルによって速度が大きく変わります。</strong>第三者のvLLMベンチマークでは、デフォルトカーネルのAWQはFP16より遅く、Marlinカーネルを使うとNVIDIA GPUでAWQとGPTQがFP16を上回ると報告されています(<a href="https://www.spheron.network/blog/gptq-vs-awq-vs-gguf-4-bit-quantization-comparison-2026/" class="text-primary hover:underline" target="_blank" rel="noopener">Spheron</a>、<a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>)。',
          '4ビットでの品質低下は小さいものの測定可能で、モデルやテストによって異なります。Qwen2.5-32Bで公開されているHumanEvalの比較では、AWQが51.8%、FP16が56.1%、GPTQが46.3%でした(<a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>)。こうした数値は目安として扱い、自分のモデルとタスクで検証してください。',
          'vLLMはGGUFファイルを読み込めますが、そのサポートはネイティブのAWQやGPTQより遅いと報告されています。GGUFにはllama.cpp、Ollama、LM Studioを使ってください。',
        ],
      },
      choose: {
        id: 'choose',
        title: '環境別の選び方',
        items: [
          '<strong>ノートPC、Mac、CPUのみのマシン:</strong>GGUF。3つのうちCPU推論ができる唯一の形式で、Apple SiliconではOllamaとLM Studioがこの形式を使います。',
          '<strong>コンシューマー向けGPU1枚、モデルがVRAMに収まる場合:</strong>手軽さならGGUF、ツール(ExLlamaやPythonパイプライン)が求める場合はAWQ/GPTQ。',
          '<strong>モデルがVRAMより大きい場合:</strong>GGUF。レイヤーをシステムRAMにオフロードできます。',
          '<strong>vLLMやTGIを使うNVIDIA GPU上の本番API:</strong>Marlinカーネル付きのAWQまたはGPTQ。まずAWQで始め、GPTQをベンチマークで比較します。',
          '<strong>ファインチューニング:</strong>先にフル精度またはアダプタ精度で調整し、その結果を量子化します。',
        ],
      },
      commands: {
        id: 'commands',
        title: '各フォーマットを動かすコマンド',
        content: [
          'フォーマットごとにローダーが異なります。プレースホルダーを自分のモデルに置き換えてください。',
        ],
        codeBlock: '# GGUF: run a Hugging Face GGUF file in Ollama\nollama run hf.co/<user>/<repo>:Q4_K_M\n\n# GGUF: create one from full-precision weights with llama.cpp\npython convert_hf_to_gguf.py ./model --outfile model-f16.gguf\nllama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M\n\n# AWQ or GPTQ: serve with vLLM\nvllm serve <user>/<model-AWQ> --quantization awq\nvllm serve <user>/<model-GPTQ> --quantization gptq',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'GPTQやAWQモデルをGGUFに変換できますか?',
            a: '一般的には、既に量子化済みの2つのフォーマット間で変換するのではなく、元のフル精度の重みから直接GGUFに変換します — 量子化済みから量子化済みへの変換は精度の低下を複合させます。GPTQ/AWQのチェックポイントしか持っていない場合は、変換元となるモデルのフル精度リリースを探してください。',
          },
          {
            q: 'GPUではGGUFはGPTQやAWQより遅いですか?',
            a: 'モデルがVRAMに完全に収まるGPUでは、よく最適化されたGGUF推論はGPTQ/AWQと競合できます。重要な差が出るのはモデルが完全に収まらない場合です — GGUFはCPUへ優雅にオフロードしますが、GPTQ/AWQは一般にそれができません。',
          },
          {
            q: 'GGUF内ではどのKクオントレベルを使うべきですか?',
            a: 'Q4_K_Mが最も一般的なバランス型のデフォルトです。GGUFのクオントレベル全体でのファイルサイズと品質の完全なトレードオフについては、専用のQ4_K_M vs Q8_0比較を参照してください。',
          },
          {
            q: 'OllamaはGPTQやAWQモデルを直接サポートしていますか?',
            a: 'いいえ — Ollamaは特にGGUFを中心に構築されています。GPTQやAWQのチェックポイントを使うには、そのフォーマット向けに設計された別のサービングツール(vLLM、TGI、ExLlama)が必要です。',
          },
          {
            q: 'GGUFとは何ですか?',
            a: 'GGUF(GPT-Generated Unified Format)は、llama.cppの単一ファイルモデル形式です。量子化された重み、トークナイザ、メタデータをまとめて格納し、CPU、GPU、または両方で動作します。旧GGML形式に代わるものです。',
          },
          {
            q: 'GPTQとAWQの違いは何ですか?',
            a: 'どちらも学習後に行うGPU専用の4ビット量子化手法です。GPTQはキャリブレーションデータを使って層ごとに丸め誤差を補正し、AWQは活性化にとって重要な重みを丸める前にスケーリングします。実際にはAWQのほうが品質をやや保つことが多いですが、手法と同じくらいGPUカーネルが重要です。',
          },
          {
            q: 'AWQはGPTQより優れていますか?',
            a: 'ビットあたりの品質ではやや優れることが多いですが、常にそうとは限りません。結果はモデル、キャリブレーションデータ、カーネルで変わるため、本番導入を決める前に自分のタスクで両方を比較してください。',
          },
          {
            q: 'GGUFと非GGUFモデルの違いは何ですか?',
            a: '非GGUFモデルは通常、PyTorch/Transformers向けのFP16/BF16のsafetensorsチェックポイント、またはGPTQ/AWQチェックポイントで、GPUフレームワークが必要です。GGUFは量子化モデルを1つのファイルにまとめ、CPUでも動くllama.cppベースのツールで使えます。',
          },
          {
            q: 'ONNXとGGUFの違いは何ですか?',
            a: 'ONNXはONNX Runtimeで実行されるハードウェア非依存のモデルグラフ形式で、NPUなど各種デバイスへの展開に使われます。GGUFはllama.cpp専用で、個人のPCでチャットLLMを動かす最も簡単な方法です。',
          },
          {
            q: '自分で量子化したGGUFやAWQモデルをホスティング事業者に持ち込めますか?',
            a: '事業者によって異なるため、アップロード前に対応フォーマットのドキュメントを確認してください。自己ホストなら常に可能です。GGUFはllama.cppやOllama、AWQまたはGPTQはレンタルGPU上のvLLMやTGIで動かせます。',
          },
          {
            q: '本番で最も低レイテンシなのはどの形式ですか?',
            a: 'NVIDIA GPUでは、vLLMとMarlinカーネルで提供するAWQまたはGPTQが一般的な低レイテンシ構成です。レイテンシはバッチサイズとハードウェアに依存するため、自分のトラフィックで測定してください。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[Q4_K_M量子化とは?](/prompt-bites/what-is-q4-k-m-quantization) — GGUFの最も一般的なクオントレベルの解説',
          '[Q4_K_M vs Q8_0](/prompt-bites/q4-k-m-vs-q8-0) — GGUFのクオントレベルの選び方',
          '[Ollama vs vLLM vs TGI](/prompt-bites/ollama-vs-vllm-vs-tgi) — 各ツールがどのフォーマットと組み合うか',
          '[LLM量子化を徹底解説（完全ガイド）](/local-llms/llm-quantization-explained) — 量子化の仕組みを内部まで掘り下げた完全ガイド',
        ],
      },
    },
  },
  ko: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/gguf-vs-gptq-vs-awq-overview-hero-ko.webp',
    title: 'GGUF 대 GPTQ 대 AWQ: 차이, 속도, 선택 기준',
    seoTitle: '2026년 GGUF 대 GPTQ 대 AWQ 양자화 | Prompt Bites',
    metaDescription: 'GGUF는 llama.cpp/Ollama로 CPU와 GPU에서 실행되고, GPTQ와 AWQ는 vLLM/TGI용 GPU 전용 형식입니다. 속도, 품질, 도구, 명령어를 비교합니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '로컬 또는 서빙되는 LLM 추론을 위한 양자화 형식을 선택하는 개발자',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi', 'llama-cpp-gguf-conversion-guide'],
    is_living_page: false,
    leadAnswerBlock: '<strong>GGUF는 로컬 사용을 위한 최적의 기본 양자화 형식입니다</strong> — 별도의 CUDA 전용 요건 없이 llama.cpp와 Ollama를 통해 CPU와 GPU 모두에서 실행됩니다. GPTQ와 AWQ는 vLLM이나 TGI 같은 프로덕션 서빙 프레임워크를 위한 GPU 전용 형식이며, 이 중 AWQ가 동일한 비트 폭에서 일반적으로 GPTQ보다 품질을 더 잘 유지합니다.',
    toc: [
      { label: '최적의 선택: 로컬 사용에는 GGUF, 프로덕션 서빙에는 AWQ', anchor: '#best-pick' },
      { label: '한눈에 보는 GGUF 대 GPTQ 대 AWQ', anchor: '#comparison' },
      { label: '각 형식의 원리와 유지보수 상태', anchor: '#formats' },
      { label: '속도와 품질은 커널에 좌우된다', anchor: '#speed' },
      { label: '환경별 형식 선택', anchor: '#choose' },
      { label: '각 형식을 실행하는 명령어', anchor: '#commands' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: 'GGUF, GPTQ, AWQ 중 어떤 양자화를 사용해야 합니까?',
        answer: 'Ollama나 llama.cpp를 통한 로컬 사용에는 GGUF를 사용하십시오 — 추가 요건 없이 CPU와 GPU에서 실행됩니다. vLLM이나 TGI로 프로덕션에서 서빙한다면 GPTQ보다 AWQ를 사용하십시오. 동일한 비트 폭에서 품질을 더 잘 유지하기 때문입니다.',
        bullets: [
          'GGUF: llama.cpp의 네이티브 형식 — CPU+GPU 하이브리드 추론이며 Ollama와 LM Studio의 기본값입니다.',
          'GPTQ: GPU 전용, 캘리브레이션 기반 사후 훈련 양자화 — 효율적인 4비트 서빙의 초기 표준입니다.',
          'AWQ(활성화 인식 가중치 양자화): GPU 전용으로 일반적으로 GPTQ보다 비트당 품질이 우수하며 vLLM/TGI 프로덕션 서빙에서 흔합니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF: 로컬 사용의 올바른 기본값 — llama.cpp/Ollama를 통해 CPU와 GPU에서 실행되며 CUDA 전용 요건이 없습니다',
          'GPTQ: GPU 전용으로 4비트 서빙의 초기 표준이며 ExLlama와 vLLM에서 여전히 지원됩니다',
          'AWQ: GPU 전용으로 동일한 비트 폭에서 일반적으로 GPTQ보다 품질을 더 잘 유지하며 프로덕션 서빙에 선호됩니다',
          'Ollama나 LM Studio를 로컬로 실행한다면 거의 확실히 GPTQ나 AWQ가 아니라 GGUF가 필요합니다',
        ],
      },
      bestPick: {
        id: 'best-pick',
        snippetBlocks: [
          { type: 'one-sentence', text: 'GGUF는 CPU와 GPU에서 실행되는 llama.cpp용 단일 파일 양자화 모델 형식이고, GPTQ와 AWQ는 주로 vLLM과 TGI 서빙에 쓰이는 GPU 전용 4비트 형식입니다.' },
          { type: 'plain-terms', text: '쉽게 말해, Ollama나 LM Studio로 내 컴퓨터에서 모델을 실행한다면 GGUF를, NVIDIA GPU 서버에서 모델을 서빙할 때만 AWQ나 GPTQ를 선택하세요.' },
        ],
        title: '최적의 선택: 로컬 사용에는 GGUF, 프로덕션 서빙에는 AWQ',
        content: [
          '<strong>GGUF는 Ollama, LM Studio, 또는 llama.cpp를 통해 직접 로컬로 모델을 실행하는 거의 모든 사람에게 올바른 양자화 형식입니다 — 동일한 파일에서 CPU와 GPU 추론을 모두 지원하며, 모델이 VRAM에 완전히 맞지 않을 때 부분적인 CPU 오프로드도 포함합니다.</strong> 이러한 유연성이 바로 GGUF가 소비자용 로컬 LLM 도구의 표준 형식이 된 이유입니다. 강력한 GPU가 있든, 적당한 GPU가 있든, 아예 없든 작동합니다.',
          'GPTQ는 효율적인 GPU 추론을 위해 가장 먼저 널리 채택된 4비트 양자화 방법 중 하나였습니다. 캘리브레이션 데이터셋을 사용해 사후 훈련 양자화 중 품질 손실을 최소화하지만, GPU 전용입니다 — 의미 있는 CPU 폴백 경로가 없습니다 — 그리고 일반적으로 비트당 품질에서 더 새로운 방법에 밀려났습니다.',
          'AWQ(활성화 인식 가중치 양자화)는 GPTQ의 더 현대적인 GPU 전용 대안입니다. 모든 것을 균일하게 양자화하는 대신 활성화 크기에 가장 중요한 가중치를 보호함으로써, AWQ는 일반적으로 동일한 비트 폭에서 더 많은 품질을 보존합니다. GPU 전용 운영이 이미 전제인 vLLM과 TGI 같은 프로덕션 서빙 스택에서 흔한 선택입니다.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '한눈에 보는 GGUF 대 GPTQ 대 AWQ',
        content: [
          'Ollama, LM Studio, 또는 llama.cpp를 로컬로 실행한다면 GGUF를 선택하십시오 — 세 형식 중 실질적인 CPU 지원과 부분 오프로드 유연성을 갖춘 유일한 형식입니다. 특별히 이를 기대하는 기존 파이프라인이나 도구(구형 ExLlama 설정 같은)로 작업하는 경우에만 GPTQ를 선택하십시오. 프로덕션 GPU 서빙 스택(vLLM, TGI)에 배포하며 GPU 전용 옵션 중 최고의 비트당 품질을 원한다면 AWQ를 선택하십시오.',
          '세 형식 모두 동일한 기본 모델을 감소된 정밀도로 나타냅니다 — 형식이 결정하는 것은 어떤 도구가 이를 로드할 수 있는지와 GPU 메모리 부족을 얼마나 우아하게 처리하는지이지, 모델의 근본적인 성능이 아닙니다.',
        ],
        columns: ['형식', '실행 환경', '일반 비트', '주요 도구', '적합한 용도'],
        rows: [
          { '형식': 'GGUF', '실행 환경': 'CPU, GPU 또는 둘 다', '일반 비트': '2–8비트', '주요 도구': 'llama.cpp, Ollama, LM Studio', '적합한 용도': '로컬 사용' },
          { '형식': 'GPTQ', '실행 환경': 'GPU 전용', '일반 비트': '4비트(3–8)', '주요 도구': 'vLLM, TGI, ExLlama', '적합한 용도': '기존 GPU 파이프라인' },
          { '형식': 'AWQ', '실행 환경': 'GPU 전용', '일반 비트': '4비트', '주요 도구': 'vLLM, TGI, Transformers', '적합한 용도': 'GPU 서빙' },
        ],
      },
      formats: {
        id: 'formats',
        title: 'GGUF, GPTQ, AWQ의 원리와 유지보수 상태',
        content: [
          '<strong>GGUF는 토크나이저와 메타데이터를 내장한 단일 파일 모델 형식으로, llama.cpp용으로 설계되었습니다.</strong> 양자화 유형(Q4_K_M, Q5_K_M, Q8_0 등)은 llama.cpp의 <code>llama-quantize</code> 도구로 만들며, 같은 파일이 CPU, GPU 또는 둘 다에서 실행됩니다. 이전의 GGML 형식을 대체했습니다.',
          '<strong>GPTQ는 학습 후 모델을 레이어별로 양자화하며, 작은 보정 데이터셋으로 반올림 오차를 보정합니다.</strong> 결과 체크포인트는 Marlin이나 ExLlama 같은 커널을 통해 GPU에 로드됩니다.',
          '<strong>AWQ(Activation-aware Weight Quantization)는 활성화에 가장 중요한 소수의 가중치를 보호하여,</strong> 4비트로 반올림하기 전에 이를 스케일링합니다. 균일하게 반올림할 때보다 출력이 원본 모델에 더 가깝게 유지되는 경향이 있습니다.',
          '직접 양자화한다면 도구의 유지보수 상태가 중요합니다. AutoAWQ 프로젝트는 지원 중단되어 더 이상 유지보수되지 않으며, <a href="https://docs.vllm.ai/en/latest/features/quantization/auto_awq.html" class="text-primary hover:underline" target="_blank" rel="noopener">vLLM 문서</a>는 AWQ 양자화에 llm-compressor를 안내합니다. AutoGPTQ 저장소는 아카이브되었고 README는 GPTQModel을 권장합니다. Hugging Face의 양자화된 AWQ/GPTQ 체크포인트는 vLLM에서 계속 로드되지만, 새 파이프라인을 만들기 전에 각 저장소를 확인하세요.',
        ],
      },
      speed: {
        id: 'speed',
        title: '속도와 품질은 형식뿐 아니라 커널에도 좌우된다',
        content: [
          '<strong>같은 AWQ나 GPTQ 파일도 실행하는 GPU 커널에 따라 속도가 크게 달라질 수 있습니다.</strong> 서드파티 vLLM 벤치마크에 따르면 기본 커널의 AWQ는 FP16보다 느리고, Marlin 커널을 쓰면 NVIDIA GPU에서 AWQ와 GPTQ가 FP16을 앞선다고 합니다(<a href="https://www.spheron.network/blog/gptq-vs-awq-vs-gguf-4-bit-quantization-comparison-2026/" class="text-primary hover:underline" target="_blank" rel="noopener">Spheron</a>, <a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>).',
          '4비트에서의 품질 손실은 작지만 측정 가능하며, 모델과 테스트에 따라 다릅니다. Qwen2.5-32B에 대한 공개된 HumanEval 비교에서는 AWQ가 51.8%, FP16이 56.1%, GPTQ가 46.3%였습니다(<a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>). 이런 수치는 참고용으로만 보고, 자신의 모델과 작업으로 테스트하세요.',
          'vLLM은 GGUF 파일을 로드할 수 있지만, 그 지원은 네이티브 AWQ나 GPTQ보다 느리다고 보고됩니다. GGUF에는 llama.cpp, Ollama, LM Studio를 사용하세요.',
        ],
      },
      choose: {
        id: 'choose',
        title: '환경별 형식 선택',
        items: [
          '<strong>노트북, Mac, CPU 전용 머신:</strong> GGUF. 세 가지 중 CPU 추론이 가능한 유일한 형식이며, Apple Silicon에서 Ollama와 LM Studio가 사용하는 형식입니다.',
          '<strong>소비자용 GPU 한 장, 모델이 VRAM에 들어가는 경우:</strong> 간편함을 원하면 GGUF, 도구(ExLlama, Python 파이프라인)가 요구하면 AWQ/GPTQ.',
          '<strong>모델이 VRAM보다 큰 경우:</strong> GGUF. 레이어를 시스템 RAM으로 오프로드할 수 있습니다.',
          '<strong>vLLM이나 TGI를 쓰는 NVIDIA GPU 프로덕션 API:</strong> Marlin 커널을 쓰는 AWQ 또는 GPTQ. AWQ로 시작하고 GPTQ는 벤치마크로 비교하세요.',
          '<strong>파인튜닝:</strong> 먼저 전체 정밀도 또는 어댑터 정밀도로 튜닝한 뒤 결과를 양자화하세요.',
        ],
      },
      commands: {
        id: 'commands',
        title: '각 형식을 실행하는 명령어',
        content: [
          '형식마다 로더가 다릅니다. 자리 표시자를 자신의 모델로 바꾸세요.',
        ],
        codeBlock: '# GGUF: run a Hugging Face GGUF file in Ollama\nollama run hf.co/<user>/<repo>:Q4_K_M\n\n# GGUF: create one from full-precision weights with llama.cpp\npython convert_hf_to_gguf.py ./model --outfile model-f16.gguf\nllama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M\n\n# AWQ or GPTQ: serve with vLLM\nvllm serve <user>/<model-AWQ> --quantization awq\nvllm serve <user>/<model-GPTQ> --quantization gptq',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'GPTQ나 AWQ 모델을 GGUF로 변환할 수 있습니까?',
            a: '일반적으로는 이미 양자화된 두 형식 사이를 변환하기보다 원본 전체 정밀도 가중치에서 GGUF로 직접 변환합니다 — 양자화된 것에서 양자화된 것으로 가는 것은 정밀도 손실을 누적시킵니다. GPTQ/AWQ 체크포인트만 있다면 대신 변환할 원본 모델의 전체 정밀도 릴리스를 찾으십시오.',
          },
          {
            q: 'GPU에서 GGUF는 GPTQ나 AWQ보다 느립니까?',
            a: '모델이 VRAM에 완전히 맞는 GPU에서는 잘 최적화된 GGUF 추론이 GPTQ/AWQ와 경쟁력이 있습니다. 중요한 격차는 모델이 완전히 맞지 않을 때입니다 — GGUF는 CPU로 우아하게 오프로드하지만 GPTQ/AWQ는 일반적으로 그럴 수 없습니다.',
          },
          {
            q: 'GGUF 내에서 어떤 K-quant 수준을 사용해야 합니까?',
            a: 'Q4_K_M이 가장 흔한 균형 잡힌 기본값입니다. GGUF의 양자화 수준 전반에 걸친 파일 크기와 품질의 전체 트레이드오프는 전용 Q4_K_M 대 Q8_0 비교를 참고하십시오.',
          },
          {
            q: 'Ollama는 GPTQ나 AWQ 모델을 직접 지원합니까?',
            a: '아닙니다 — Ollama는 특별히 GGUF를 중심으로 구축되었습니다. GPTQ나 AWQ 체크포인트를 사용하려면 해당 형식을 위해 설계된 다른 서빙 도구(vLLM, TGI, 또는 ExLlama)가 필요합니다.',
          },
          {
            q: 'GGUF란 무엇인가요?',
            a: 'GGUF(GPT-Generated Unified Format)는 llama.cpp의 단일 파일 모델 형식입니다. 양자화된 가중치, 토크나이저, 메타데이터를 함께 저장하며 CPU, GPU 또는 둘 다에서 실행됩니다. 이전의 GGML 형식을 대체했습니다.',
          },
          {
            q: 'GPTQ와 AWQ의 차이는 무엇인가요?',
            a: '둘 다 학습 후 적용하는 GPU 전용 4비트 양자화 방법입니다. GPTQ는 보정 데이터로 레이어별 반올림 오차를 보정하고, AWQ는 활성화에 중요한 가중치를 반올림 전에 스케일링합니다. 실제로는 AWQ가 품질을 조금 더 유지하는 경우가 많지만, 방법만큼 GPU 커널도 중요합니다.',
          },
          {
            q: 'AWQ가 GPTQ보다 더 좋은가요?',
            a: '비트당 품질에서는 약간 나은 경우가 많지만 항상 그런 것은 아닙니다. 결과는 모델, 보정 데이터, 커널에 따라 달라지므로 프로덕션 배포를 확정하기 전에 자신의 작업으로 둘을 비교하세요.',
          },
          {
            q: 'GGUF 모델과 비 GGUF 모델의 차이는 무엇인가요?',
            a: '비 GGUF 모델은 보통 PyTorch/Transformers용 FP16/BF16 safetensors 체크포인트이거나 GPTQ/AWQ 체크포인트이며 GPU 프레임워크가 필요합니다. GGUF는 양자화된 모델을 하나의 파일로 묶어 CPU에서도 실행되는 llama.cpp 기반 도구에서 사용합니다.',
          },
          {
            q: 'ONNX와 GGUF의 차이는 무엇인가요?',
            a: 'ONNX는 ONNX Runtime이 실행하는 하드웨어 중립적 모델 그래프 형식으로, NPU 같은 다양한 기기에 배포할 때 쓰입니다. GGUF는 llama.cpp 전용이며 개인 컴퓨터에서 채팅 LLM을 실행하는 가장 간단한 방법입니다.',
          },
          {
            q: '직접 양자화한 GGUF 또는 AWQ 모델을 호스팅 제공업체에 가져갈 수 있나요?',
            a: '제공업체에 따라 다르므로 업로드 전에 지원 형식 문서를 확인하세요. 자체 호스팅은 항상 가능합니다. GGUF는 llama.cpp나 Ollama로, AWQ 또는 GPTQ는 임대한 GPU에서 vLLM이나 TGI로 실행하면 됩니다.',
          },
          {
            q: '프로덕션에서 지연 시간이 가장 낮은 형식은 무엇인가요?',
            a: 'NVIDIA GPU에서는 vLLM과 Marlin 커널로 서빙하는 AWQ 또는 GPTQ가 일반적인 저지연 구성입니다. 지연 시간은 배치 크기와 하드웨어에 따라 달라지므로 자신의 트래픽으로 측정하세요.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[Q4_K_M 양자화란 무엇인가?](/ko/prompt-bites/what-is-q4-k-m-quantization) — GGUF의 가장 흔한 양자화 수준 설명',
          '[Q4_K_M 대 Q8_0](/ko/prompt-bites/q4-k-m-vs-q8-0) — GGUF 양자화 수준 선택하기',
          '[Ollama 대 vLLM 대 TGI](/ko/prompt-bites/ollama-vs-vllm-vs-tgi) — 각 도구가 어떤 형식과 짝을 이루는지',
          '[LLM 양자화 완전 해설(전체 가이드)](/ko/local-llms/llm-quantization-explained) — 양자화가 내부적으로 어떻게 작동하는지에 대한 완전한 심층 분석',
        ],
      },
    },
  },
  pt: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/gguf-vs-gptq-vs-awq-overview-hero-pt.webp',
    title: 'GGUF vs GPTQ vs AWQ: diferenças, velocidade e qual usar',
    seoTitle: 'GGUF vs GPTQ vs AWQ Quantização 2026',
    metaDescription: 'GGUF roda em CPU e GPU via llama.cpp/Ollama; GPTQ e AWQ são formatos só de GPU para vLLM/TGI. Compare velocidade, qualidade, ferramentas e comandos.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores escolhendo um formato de quantização para inferência local ou servida de LLM',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi', 'llama-cpp-gguf-conversion-guide'],
    is_living_page: false,
    leadAnswerBlock: '<strong>O GGUF é o melhor formato padrão de quantização para uso local</strong> — ele roda em CPU e GPU através do llama.cpp e do Ollama, sem um requisito separado somente para CUDA. GPTQ e AWQ são formatos somente GPU voltados para frameworks de servir em produção como o vLLM e o TGI, onde o AWQ geralmente mantém a qualidade melhor que o GPTQ na mesma largura de bits.',
    toc: [
      { label: 'Melhor Escolha: GGUF para Uso Local, AWQ para Servir em Produção', anchor: '#best-pick' },
      { label: 'GGUF vs GPTQ vs AWQ em Resumo', anchor: '#comparison' },
      { label: 'Como cada formato funciona e quem o mantém', anchor: '#formats' },
      { label: 'Velocidade e qualidade dependem do kernel', anchor: '#speed' },
      { label: 'Qual formato escolher para o seu setup', anchor: '#choose' },
      { label: 'Comandos para executar cada formato', anchor: '#commands' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leitura Relacionada', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Devo usar quantização GGUF, GPTQ ou AWQ?',
        answer: 'Use GGUF para uso local via Ollama ou llama.cpp — ele roda em CPU e GPU sem requisitos extras. Use AWQ em vez de GPTQ se for servir em produção com vLLM ou TGI, já que mantém a qualidade melhor na mesma largura de bits.',
        bullets: [
          'GGUF: o formato nativo do llama.cpp — inferência híbrida CPU+GPU, o padrão para Ollama e LM Studio.',
          'GPTQ: somente GPU, quantização pós-treinamento baseada em calibração — um padrão inicial para servir eficiente em 4 bits.',
          'AWQ (Quantização de Peso Consciente da Ativação): somente GPU, geralmente melhor qualidade-por-bit que o GPTQ, comum em servir em produção com vLLM/TGI.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF: o padrão certo para uso local — roda em CPU e GPU via llama.cpp/Ollama, sem requisito exclusivo de CUDA',
          'GPTQ: somente GPU, um padrão inicial para servir em 4 bits, ainda suportado pelo ExLlama e pelo vLLM',
          'AWQ: somente GPU, geralmente mantém a qualidade melhor que o GPTQ na mesma largura de bits — preferido para servir em produção',
          'Se você está rodando Ollama ou LM Studio localmente, quase certamente quer GGUF, não GPTQ ou AWQ',
        ],
      },
      bestPick: {
        id: 'best-pick',
        snippetBlocks: [
          { type: 'one-sentence', text: 'GGUF é um formato de modelo quantizado em arquivo único para o llama.cpp que roda em CPU e GPU, enquanto GPTQ e AWQ são formatos de 4 bits só para GPU, usados principalmente para servir modelos com vLLM e TGI.' },
          { type: 'plain-terms', text: 'Em termos simples: escolha GGUF se você roda modelos no próprio computador com Ollama ou LM Studio, e AWQ ou GPTQ apenas se serve um modelo a partir de um servidor com GPU NVIDIA.' },
        ],
        title: 'Melhor Escolha: GGUF para Uso Local, AWQ para Servir em Produção',
        content: [
          '<strong>O GGUF é o formato de quantização certo para praticamente qualquer pessoa rodando modelos localmente via Ollama, LM Studio ou llama.cpp diretamente — ele suporta inferência tanto em CPU quanto em GPU a partir do mesmo arquivo, incluindo offload parcial de CPU quando um modelo não cabe totalmente na VRAM.</strong> Essa flexibilidade é exatamente por que o GGUF se tornou o formato padrão para ferramentas de LLM local de consumo: funciona seja qual for a GPU que você tenha, potente, modesta ou nenhuma.',
          'O GPTQ foi um dos primeiros métodos de quantização em 4 bits amplamente adotados para inferência eficiente em GPU. Ele usa um conjunto de dados de calibração para minimizar perda de qualidade durante a quantização pós-treinamento, mas é somente GPU — não há um caminho significativo de fallback para CPU — e geralmente foi superado em qualidade-por-bit por métodos mais novos.',
          'O AWQ (Quantização de Peso Consciente da Ativação) é a alternativa somente GPU mais moderna ao GPTQ. Ao proteger os pesos que mais importam para a magnitude da ativação em vez de quantizar tudo uniformemente, o AWQ geralmente preserva mais qualidade na mesma largura de bits. É uma escolha comum para pilhas de servir em produção como o vLLM e o TGI, onde a operação somente GPU já é dada.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'GGUF vs GPTQ vs AWQ em Resumo',
        content: [
          'Escolha GGUF se você está rodando Ollama, LM Studio ou llama.cpp localmente — é o único dos três com suporte real de CPU e flexibilidade de offload parcial. Escolha GPTQ apenas se você estiver trabalhando com um pipeline ou ferramenta existente (como configurações antigas do ExLlama) que especificamente o exige. Escolha AWQ se você está implantando em uma pilha de servir em produção com GPU (vLLM, TGI) e quer a melhor qualidade-por-bit entre as opções somente GPU.',
          'Os três representam o mesmo modelo subjacente em precisão reduzida — o formato determina quais ferramentas conseguem carregá-lo e quão graciosamente ele lida com déficits de memória de GPU, não a capacidade subjacente do modelo.',
        ],
        columns: ['Formato', 'Roda em', 'Bits típicos', 'Ferramentas', 'Ideal para'],
        rows: [
          { 'Formato': 'GGUF', 'Roda em': 'CPU, GPU ou ambos', 'Bits típicos': '2–8 bits', 'Ferramentas': 'llama.cpp, Ollama, LM Studio', 'Ideal para': 'Uso local' },
          { 'Formato': 'GPTQ', 'Roda em': 'Só GPU', 'Bits típicos': '4 bits (3–8)', 'Ferramentas': 'vLLM, TGI, ExLlama', 'Ideal para': 'Pipelines GPU existentes' },
          { 'Formato': 'AWQ', 'Roda em': 'Só GPU', 'Bits típicos': '4 bits', 'Ferramentas': 'vLLM, TGI, Transformers', 'Ideal para': 'Serving em GPU' },
        ],
      },
      formats: {
        id: 'formats',
        title: 'Como GGUF, GPTQ e AWQ funcionam e quem os mantém',
        content: [
          '<strong>GGUF é um formato de modelo em arquivo único, com tokenizador e metadados embutidos, projetado para o llama.cpp.</strong> Seus tipos de quantização (Q4_K_M, Q5_K_M, Q8_0 e outros) são gerados pela ferramenta <code>llama-quantize</code> do llama.cpp, e o mesmo arquivo roda em CPU, GPU ou ambos. Ele substituiu o antigo formato GGML.',
          '<strong>GPTQ quantiza um modelo camada por camada após o treinamento, usando um pequeno conjunto de calibração para compensar o erro de arredondamento.</strong> O checkpoint é carregado na GPU por kernels como Marlin ou ExLlama.',
          '<strong>AWQ (Activation-aware Weight Quantization) protege a pequena parcela dos pesos mais importantes para as ativações</strong> escalando-os antes de arredondar para 4 bits. Assim, as saídas costumam ficar mais próximas do modelo original do que com arredondamento uniforme.',
          'O status das ferramentas importa se você mesmo quantiza. O projeto AutoAWQ está obsoleto e sem manutenção, e a <a href="https://docs.vllm.ai/en/latest/features/quantization/auto_awq.html" class="text-primary hover:underline" target="_blank" rel="noopener">documentação do vLLM</a> indica o llm-compressor para quantização AWQ. O repositório do AutoGPTQ está arquivado e seu README recomenda o GPTQModel. Checkpoints AWQ e GPTQ já quantizados no Hugging Face continuam carregando no vLLM; verifique cada repositório antes de montar um novo pipeline sobre ele.',
        ],
      },
      speed: {
        id: 'speed',
        title: 'Velocidade e qualidade dependem do kernel, não só do formato',
        content: [
          '<strong>O mesmo arquivo AWQ ou GPTQ pode ser bem mais lento ou mais rápido conforme o kernel de GPU que o executa.</strong> Benchmarks de terceiros com vLLM relatam que o AWQ com o kernel padrão roda mais devagar que FP16, enquanto o kernel Marlin coloca AWQ e GPTQ à frente do FP16 em GPUs NVIDIA (<a href="https://www.spheron.network/blog/gptq-vs-awq-vs-gguf-4-bit-quantization-comparison-2026/" class="text-primary hover:underline" target="_blank" rel="noopener">Spheron</a>, <a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>).',
          'A perda de qualidade em 4 bits é pequena, mas mensurável, e varia conforme o modelo e o teste. Uma comparação HumanEval publicada com Qwen2.5-32B deu 51,8% para AWQ contra 56,1% do FP16, e 46,3% para GPTQ (<a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>). Trate esses números como indicativos e teste com seu modelo e sua tarefa.',
          'O vLLM consegue carregar arquivos GGUF, mas esse suporte é relatado como mais lento que AWQ ou GPTQ nativos. Para GGUF, use llama.cpp, Ollama ou LM Studio.',
        ],
      },
      choose: {
        id: 'choose',
        title: 'Qual formato escolher para o seu setup',
        items: [
          '<strong>Notebook, Mac ou máquina só com CPU:</strong> GGUF. É o único dos três com inferência em CPU e o formato que Ollama e LM Studio usam no Apple Silicon.',
          '<strong>Uma GPU de consumo, modelo cabe na VRAM:</strong> GGUF pela simplicidade, ou AWQ/GPTQ se suas ferramentas (ExLlama, um pipeline Python) os esperam.',
          '<strong>Modelo maior que a sua VRAM:</strong> GGUF, pois camadas podem ser descarregadas para a RAM do sistema.',
          '<strong>API de produção em GPUs NVIDIA com vLLM ou TGI:</strong> AWQ ou GPTQ com kernels Marlin. Comece com AWQ e compare o GPTQ em um benchmark.',
          '<strong>Fine-tuning:</strong> ajuste primeiro em precisão total ou de adaptador e quantize o resultado depois.',
        ],
      },
      commands: {
        id: 'commands',
        title: 'Comandos para executar cada formato',
        content: [
          'Cada formato tem seu próprio carregador. Substitua os marcadores pelo seu modelo:',
        ],
        codeBlock: '# GGUF: run a Hugging Face GGUF file in Ollama\nollama run hf.co/<user>/<repo>:Q4_K_M\n\n# GGUF: create one from full-precision weights with llama.cpp\npython convert_hf_to_gguf.py ./model --outfile model-f16.gguf\nllama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M\n\n# AWQ or GPTQ: serve with vLLM\nvllm serve <user>/<model-AWQ> --quantization awq\nvllm serve <user>/<model-GPTQ> --quantization gptq',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'Posso converter um modelo GPTQ ou AWQ para GGUF?',
            a: 'Geralmente você converte a partir dos pesos originais em precisão total para GGUF diretamente, em vez de converter entre dois formatos já quantizados — ir de quantizado para quantizado composta a perda de precisão. Se você só tem um checkpoint GPTQ/AWQ, procure o lançamento em precisão total do modelo original para converter a partir dele.',
          },
          {
            q: 'O GGUF é mais lento que o GPTQ ou AWQ em uma GPU?',
            a: 'Em uma GPU onde o modelo cabe totalmente na VRAM, uma inferência GGUF bem otimizada é competitiva com GPTQ/AWQ. A diferença que importa é quando um modelo não cabe totalmente — o GGUF faz offload gracioso para CPU, enquanto GPTQ/AWQ geralmente não conseguem.',
          },
          {
            q: 'Qual nível K-quant devo usar dentro do GGUF?',
            a: 'O Q4_K_M é o padrão equilibrado mais comum. Veja a comparação dedicada Q4_K_M vs Q8_0 para a troca completa entre tamanho de arquivo e qualidade nos níveis de quantização do GGUF.',
          },
          {
            q: 'O Ollama suporta modelos GPTQ ou AWQ diretamente?',
            a: 'Não — o Ollama é construído em torno do GGUF especificamente. Para usar um checkpoint GPTQ ou AWQ, você precisa de uma ferramenta de serviço diferente (vLLM, TGI ou ExLlama) projetada para esse formato.',
          },
          {
            q: 'O que é GGUF?',
            a: 'GGUF (GPT-Generated Unified Format) é o formato de modelo em arquivo único do llama.cpp. Guarda pesos quantizados, tokenizador e metadados juntos e roda em CPU, GPU ou ambos. Substituiu o antigo formato GGML.',
          },
          {
            q: 'Qual a diferença entre GPTQ e AWQ?',
            a: 'Ambos são métodos de 4 bits pós-treinamento só para GPU. O GPTQ compensa o erro de arredondamento camada por camada com dados de calibração; o AWQ escala os pesos mais importantes para as ativações antes de arredondar. Na prática o AWQ costuma manter um pouco mais de qualidade, mas o kernel de GPU importa tanto quanto o método.',
          },
          {
            q: 'AWQ é melhor que GPTQ?',
            a: 'Muitas vezes um pouco, em qualidade por bit, mas nem sempre. Os resultados variam com o modelo, os dados de calibração e o kernel; compare os dois na sua tarefa antes de fixar uma implantação.',
          },
          {
            q: 'Qual a diferença entre modelos GGUF e não GGUF?',
            a: 'Um modelo não GGUF costuma ser um checkpoint safetensors para PyTorch/Transformers em FP16/BF16, ou um checkpoint GPTQ/AWQ, e exige um framework de GPU. O GGUF empacota um modelo quantizado em um arquivo para ferramentas baseadas no llama.cpp, que também rodam em CPU.',
          },
          {
            q: 'Qual a diferença entre ONNX e GGUF?',
            a: 'ONNX é um formato de grafo de modelo neutro em relação ao hardware, executado pelo ONNX Runtime e usado para implantar em dispositivos como NPUs. O GGUF é específico do llama.cpp e é o caminho mais simples para rodar LLMs de chat em um computador pessoal.',
          },
          {
            q: 'Posso levar meu próprio modelo GGUF ou AWQ quantizado a um provedor hospedado?',
            a: 'Depende do provedor; consulte a documentação sobre formatos aceitos antes de enviar. A hospedagem própria sempre funciona: GGUF com llama.cpp ou Ollama, AWQ ou GPTQ com vLLM ou TGI em uma GPU alugada.',
          },
          {
            q: 'Qual formato tem a menor latência em produção?',
            a: 'Em GPUs NVIDIA, AWQ ou GPTQ servidos pelo vLLM com kernels Marlin é a configuração usual de baixa latência. A latência depende do tamanho do lote e do hardware; meça com o seu próprio tráfego.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leitura Relacionada',
        items: [
          '[O Que É a Quantização Q4_K_M?](/prompt-bites/what-is-q4-k-m-quantization) — o nível de quantização mais comum do GGUF explicado',
          '[Q4_K_M vs Q8_0](/prompt-bites/q4-k-m-vs-q8-0) — escolhendo um nível de quantização GGUF',
          '[Ollama vs vLLM vs TGI](/prompt-bites/ollama-vs-vllm-vs-tgi) — qual ferramenta de servir combina com qual formato',
          '[Quantização de LLM explicada (guia completo)](/local-llms/llm-quantization-explained) — o mergulho completo em como a quantização funciona por dentro',
        ],
      },
    },
  },
  zh: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/gguf-vs-gptq-vs-awq-overview-hero-zh.webp',
    title: 'GGUF 对比 GPTQ 对比 AWQ：差异、速度与选择',
    seoTitle: '2026 年 GGUF 对比 GPTQ 对比 AWQ 量化 | Prompt Bites',
    metaDescription: 'GGUF 通过 llama.cpp/Ollama 在 CPU 和 GPU 上运行；GPTQ 和 AWQ 是面向 vLLM/TGI 的纯 GPU 格式。对比速度、质量、工具与命令。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '为本地或托管 LLM 推理选择量化格式的开发者',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi', 'llama-cpp-gguf-conversion-guide'],
    is_living_page: false,
    leadAnswerBlock: '<strong>GGUF 是本地使用的最佳默认量化格式</strong>——它通过 llama.cpp 和 Ollama 在 CPU 和 GPU 上都能运行，没有单独的纯 CUDA 要求。GPTQ 和 AWQ 是为 vLLM、TGI 等生产服务框架打造的纯 GPU 格式，其中 AWQ 在相同位宽下通常比 GPTQ 更好地保持质量。',
    toc: [
      { label: '最佳选择：本地使用选 GGUF，生产服务选 AWQ', anchor: '#best-pick' },
      { label: 'GGUF 对比 GPTQ 对比 AWQ 一览', anchor: '#comparison' },
      { label: '各格式的原理与维护状态', anchor: '#formats' },
      { label: '速度和质量取决于内核', anchor: '#speed' },
      { label: '根据你的环境选择格式', anchor: '#choose' },
      { label: '运行各格式的命令', anchor: '#commands' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: '应该使用 GGUF、GPTQ 还是 AWQ 量化？',
        answer: '本地使用通过 Ollama 或 llama.cpp 选择 GGUF——它在 CPU 和 GPU 上运行，无需额外要求。如果用 vLLM 或 TGI 进行生产服务部署，选择 AWQ 而非 GPTQ，因为它在相同位宽下能更好地保持质量。',
        bullets: [
          'GGUF：llama.cpp 的原生格式——CPU+GPU 混合推理，是 Ollama 和 LM Studio 的默认格式。',
          'GPTQ：纯 GPU、基于校准的训练后量化——高效 4 位服务的早期标准。',
          'AWQ（感知激活的权重量化）：纯 GPU，通常每位质量优于 GPTQ，常见于 vLLM/TGI 生产服务。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF：本地使用的正确默认选择——通过 llama.cpp/Ollama 在 CPU 和 GPU 上运行，无需纯 CUDA',
          'GPTQ：纯 GPU，4 位服务的早期标准，ExLlama 和 vLLM 仍支持',
          'AWQ：纯 GPU，通常在相同位宽下比 GPTQ 更好地保持质量——生产服务的首选',
          '如果你在本地运行 Ollama 或 LM Studio，几乎肯定应该选 GGUF，而非 GPTQ 或 AWQ',
        ],
      },
      bestPick: {
        id: 'best-pick',
        snippetBlocks: [
          { type: 'one-sentence', text: 'GGUF 是面向 llama.cpp 的单文件量化模型格式，可在 CPU 和 GPU 上运行；GPTQ 和 AWQ 是纯 GPU 的 4 位格式，主要用于 vLLM 和 TGI 的服务部署。' },
          { type: 'plain-terms', text: '简单来说：如果你用 Ollama 或 LM Studio 在自己的电脑上运行模型，选 GGUF；只有在 NVIDIA GPU 服务器上提供模型服务时，才选 AWQ 或 GPTQ。' },
        ],
        title: '最佳选择：本地使用选 GGUF，生产服务选 AWQ',
        content: [
          '<strong>对于几乎任何通过 Ollama、LM Studio 或直接使用 llama.cpp 在本地运行模型的人来说，GGUF 都是正确的量化格式——它支持从同一文件进行 CPU 和 GPU 推理，包括模型无法完全装入显存时的部分 CPU 卸载。</strong>正是这种灵活性让 GGUF 成为消费级本地 LLM 工具的标准格式：无论你拥有强大的 GPU、普通的 GPU，还是完全没有 GPU，它都能运行。',
          'GPTQ 是最早被广泛采用的高效 GPU 推理 4 位量化方法之一。它使用校准数据集在训练后量化过程中最小化质量损失，但它是纯 GPU 的——没有有效的 CPU 回退路径——并且在每位质量方面通常已被更新的方法超越。',
          'AWQ（感知激活的权重量化）是比 GPTQ 更现代的纯 GPU 替代方案。通过保护对激活幅度最重要的权重,而非统一量化所有权重，AWQ 通常在相同位宽下保留更多质量。它是 vLLM 和 TGI 等生产服务栈的常见选择,这些场景本来就默认使用纯 GPU 运行。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'GGUF 对比 GPTQ 对比 AWQ 一览',
        content: [
          '如果你在本地运行 Ollama、LM Studio 或 llama.cpp，选择 GGUF——它是三者中唯一具备真正 CPU 支持和部分卸载灵活性的格式。只有在使用特别期望 GPTQ 的现有流程或工具（如较旧的 ExLlama 配置）时才选择 GPTQ。如果部署到生产 GPU 服务栈（vLLM、TGI）并希望在纯 GPU 选项中获得最佳每位质量，选择 AWQ。',
          '三者都以降低精度表示同一底层模型——格式决定的是哪些工具能加载它、以及它如何优雅地应对显存不足，而非模型本身的底层能力。',
        ],
        columns: ['格式', '运行于', '常见位宽', '主要工具', '最适合'],
        rows: [
          { '格式': 'GGUF', '运行于': 'CPU、GPU 或两者', '常见位宽': '2–8 位', '主要工具': 'llama.cpp、Ollama、LM Studio', '最适合': '本地使用' },
          { '格式': 'GPTQ', '运行于': '仅 GPU', '常见位宽': '4 位（3–8）', '主要工具': 'vLLM、TGI、ExLlama', '最适合': '现有 GPU 流水线' },
          { '格式': 'AWQ', '运行于': '仅 GPU', '常见位宽': '4 位', '主要工具': 'vLLM、TGI、Transformers', '最适合': 'GPU 服务部署' },
        ],
      },
      formats: {
        id: 'formats',
        title: 'GGUF、GPTQ 与 AWQ 的原理及维护状态',
        content: [
          '<strong>GGUF 是内置分词器和元数据的单文件模型格式，为 llama.cpp 设计。</strong>其量化类型（Q4_K_M、Q5_K_M、Q8_0 等）由 llama.cpp 的 <code>llama-quantize</code> 工具生成，同一文件可在 CPU、GPU 或两者混合上运行。它取代了旧的 GGML 格式。',
          '<strong>GPTQ 在训练后逐层量化模型，并用少量校准数据补偿舍入误差。</strong>生成的检查点通过 Marlin 或 ExLlama 等内核加载到 GPU 上。',
          '<strong>AWQ（Activation-aware Weight Quantization）保护对激活最重要的一小部分权重，</strong>在舍入到 4 位之前先对其缩放。与均匀舍入相比，输出通常更接近原模型。',
          '如果你要自己量化，工具的维护状态很重要。AutoAWQ 项目已被弃用且不再维护，<a href="https://docs.vllm.ai/en/latest/features/quantization/auto_awq.html" class="text-primary hover:underline" target="_blank" rel="noopener">vLLM 文档</a>建议使用 llm-compressor 进行 AWQ 量化。AutoGPTQ 仓库已归档，其 README 推荐使用 GPTQModel。Hugging Face 上已量化的 AWQ 和 GPTQ 检查点仍可在 vLLM 中加载；在其上构建新流水线之前，请先查看各仓库。',
        ],
      },
      speed: {
        id: 'speed',
        title: '速度和质量取决于内核，而不只是格式',
        content: [
          '<strong>同一个 AWQ 或 GPTQ 文件，运行速度可能因 GPU 内核不同而相差很大。</strong>第三方 vLLM 基准测试报告称，使用默认内核的 AWQ 比 FP16 慢，而使用 Marlin 内核后，AWQ 和 GPTQ 在 NVIDIA GPU 上超过了 FP16（<a href="https://www.spheron.network/blog/gptq-vs-awq-vs-gguf-4-bit-quantization-comparison-2026/" class="text-primary hover:underline" target="_blank" rel="noopener">Spheron</a>、<a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>）。',
          '4 位量化的质量损失很小但可测量，且因模型和测试而异。一项基于 Qwen2.5-32B 的已发表 HumanEval 对比中，AWQ 为 51.8%，FP16 为 56.1%，GPTQ 为 46.3%（<a href="https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026" class="text-primary hover:underline" target="_blank" rel="noopener">Prem AI</a>）。请将这些数字仅作参考，并用自己的模型和任务测试。',
          'vLLM 可以加载 GGUF 文件，但据报道该支持比原生 AWQ 或 GPTQ 更慢。使用 GGUF 时请选择 llama.cpp、Ollama 或 LM Studio。',
        ],
      },
      choose: {
        id: 'choose',
        title: '根据你的环境选择格式',
        items: [
          '<strong>笔记本、Mac 或仅有 CPU 的机器：</strong>GGUF。它是三者中唯一支持 CPU 推理的格式，也是 Ollama 和 LM Studio 在 Apple Silicon 上使用的格式。',
          '<strong>一块消费级 GPU，模型能放进显存：</strong>图简单选 GGUF；如果你的工具（ExLlama、Python 流水线）要求，则选 AWQ/GPTQ。',
          '<strong>模型比显存大：</strong>GGUF，因为可以把部分层卸载到系统内存。',
          '<strong>在 NVIDIA GPU 上用 vLLM 或 TGI 提供生产 API：</strong>搭配 Marlin 内核的 AWQ 或 GPTQ。先用 AWQ，再用基准测试对比 GPTQ。',
          '<strong>微调：</strong>先以全精度或适配器精度微调，再对结果进行量化。',
        ],
      },
      commands: {
        id: 'commands',
        title: '运行各格式的命令',
        content: [
          '每种格式有各自的加载器。请把占位符替换为你自己的模型：',
        ],
        codeBlock: '# GGUF: run a Hugging Face GGUF file in Ollama\nollama run hf.co/<user>/<repo>:Q4_K_M\n\n# GGUF: create one from full-precision weights with llama.cpp\npython convert_hf_to_gguf.py ./model --outfile model-f16.gguf\nllama-quantize model-f16.gguf model-Q4_K_M.gguf Q4_K_M\n\n# AWQ or GPTQ: serve with vLLM\nvllm serve <user>/<model-AWQ> --quantization awq\nvllm serve <user>/<model-GPTQ> --quantization gptq',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '我能把 GPTQ 或 AWQ 模型转换成 GGUF 吗？',
            a: '通常应该直接从原始全精度权重转换为 GGUF，而不是在两种已量化的格式之间转换——从一种量化格式转到另一种量化格式会叠加精度损失。如果你只有 GPTQ/AWQ 的检查点，应寻找原模型的全精度发行版来进行转换。',
          },
          {
            q: 'GGUF 在 GPU 上比 GPTQ 或 AWQ 慢吗？',
            a: '在模型能完全装入显存的 GPU 上，经过良好优化的 GGUF 推理与 GPTQ/AWQ 相当。真正的差距出现在模型无法完全装入时——GGUF 能优雅地卸载到 CPU，而 GPTQ/AWQ 通常不能。',
          },
          {
            q: 'GGUF 内应该使用哪种 K-quant 级别？',
            a: 'Q4_K_M 是最常见的平衡默认选择。参见专门的 Q4_K_M 对比 Q8_0 对比，了解 GGUF 各量化级别在文件大小和质量之间的完整权衡。',
          },
          {
            q: 'Ollama 直接支持 GPTQ 或 AWQ 模型吗？',
            a: '不支持——Ollama 专门围绕 GGUF 构建。要使用 GPTQ 或 AWQ 检查点，需要专为该格式设计的其他服务工具（vLLM、TGI 或 ExLlama）。',
          },
          {
            q: '什么是 GGUF？',
            a: 'GGUF（GPT-Generated Unified Format）是 llama.cpp 的单文件模型格式。它把量化权重、分词器和元数据存放在一起，可在 CPU、GPU 或两者上运行。它取代了旧的 GGML 格式。',
          },
          {
            q: 'GPTQ 和 AWQ 有什么区别？',
            a: '两者都是训练后的纯 GPU 4 位量化方法。GPTQ 用校准数据逐层补偿舍入误差；AWQ 在舍入前缩放对激活最重要的权重。实际中 AWQ 通常保留略多的质量，但 GPU 内核与方法同样重要。',
          },
          {
            q: 'AWQ 比 GPTQ 更好吗？',
            a: '按每位质量计，通常略好，但并非总是如此。结果因模型、校准数据和内核而异；在确定生产部署之前，请用你自己的任务对比两者。',
          },
          {
            q: 'GGUF 与非 GGUF 模型有什么区别？',
            a: '非 GGUF 模型通常是适用于 PyTorch/Transformers 的 FP16/BF16 safetensors 检查点，或 GPTQ/AWQ 检查点，需要 GPU 框架。GGUF 把量化模型打包成一个文件，供基于 llama.cpp 的工具使用，这些工具也能在 CPU 上运行。',
          },
          {
            q: 'ONNX 和 GGUF 有什么区别？',
            a: 'ONNX 是与硬件无关的模型图格式，由 ONNX Runtime 运行，用于在 NPU 等多种设备上部署。GGUF 专属于 llama.cpp，是在个人电脑上运行聊天 LLM 的更简单途径。',
          },
          {
            q: '我能把自己量化的 GGUF 或 AWQ 模型带到托管服务商吗？',
            a: '这取决于服务商；上传前请查看其文档中支持的格式。自托管总是可行：GGUF 用 llama.cpp 或 Ollama，AWQ 或 GPTQ 在租用的 GPU 上用 vLLM 或 TGI。',
          },
          {
            q: '哪种格式在生产中延迟最低？',
            a: '在 NVIDIA GPU 上，用 vLLM 加 Marlin 内核提供服务的 AWQ 或 GPTQ 是常见的低延迟方案。延迟取决于批大小和硬件，请用你自己的流量测量。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[什么是 Q4_K_M 量化？](/prompt-bites/what-is-q4-k-m-quantization) — GGUF 最常见的量化级别详解',
          '[Q4_K_M 对比 Q8_0](/prompt-bites/q4-k-m-vs-q8-0) — 选择 GGUF 量化级别',
          '[Ollama 对比 vLLM 对比 TGI](/prompt-bites/ollama-vs-vllm-vs-tgi) — 哪种服务工具搭配哪种格式',
          '[LLM量化详解（完整指南）](/local-llms/llm-quantization-explained) — 深入剖析量化底层工作原理的完整指南',
        ],
      },
    },
  },
}

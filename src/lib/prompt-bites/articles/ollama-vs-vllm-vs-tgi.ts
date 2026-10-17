import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-vs-vllm-vs-tgi-overview-hero-en.webp',
    title: 'Ollama vs vLLM vs TGI: Which Should You Use for Local Serving?',
    seoTitle: 'Ollama vs vLLM vs TGI for Local Serving 2026',
    metaDescription: 'Ollama suits single-user local use and vLLM suits many concurrent users. TGI is in maintenance mode, so pick vLLM or SGLang for new serving deployments.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Developers choosing an inference server for local or small-scale production use',
    siblingBites: ['ollama-vs-lm-studio', 'gguf-vs-gptq-vs-awq', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Ollama is best for single-user local use; vLLM is the pick for serving many concurrent users, and TGI is now in maintenance mode.</strong> Ollama wraps llama.cpp for simple setup and GGUF compatibility, while vLLM\'s PagedAttention and continuous batching maximize throughput across many simultaneous requests. Hugging Face has put <a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">TGI into maintenance mode</a> and recommends vLLM and SGLang going forward, so choose TGI only to keep an existing deployment running.',
    toc: [
      { label: 'Best Pick: Match the Tool to Your Concurrency Needs', anchor: '#best-pick' },
      { label: 'Ollama vs vLLM vs TGI — When to Use Each', anchor: '#comparison' },
      { label: 'Self-Hosting Keeps Prompts on Your Infrastructure and Exposes OpenAI-Compatible APIs', anchor: '#self-hosting' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'Should I use Ollama, vLLM, or TGI for local LLM serving?',
        answer: 'Use Ollama for single-user local use — it is the simplest setup. Use vLLM when you need to serve many concurrent users efficiently. Hugging Face has put TGI in maintenance mode and recommends vLLM and SGLang, so treat TGI as a legacy option.',
        bullets: [
          'Ollama: simplest setup, GGUF-native, OpenAI-compatible API with streaming — ideal for one developer on their own machine.',
          'vLLM: PagedAttention memory management + continuous batching — built for high-throughput multi-user serving.',
          'TGI (Hugging Face Text Generation Inference): in maintenance mode — Hugging Face recommends vLLM and SGLang for new deployments.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama: the right choice for a single developer running models locally — simplest setup, GGUF-native, OpenAI-compatible API',
          'vLLM: built for high-throughput concurrent serving via PagedAttention and continuous batching',
          'TGI: in maintenance mode — Hugging Face recommends vLLM and SGLang for new deployments',
          'Pick based on concurrent users and deployment needs, not raw model support — all three run most popular open models',
          'All three can be self-hosted, so prompts and outputs can stay on your own infrastructure',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: Match the Tool to Your Concurrency Needs',
        content: [
          '<strong>Ollama is the right choice for single-user local use — it wraps llama.cpp with a simple CLI and API, works natively with the GGUF format, and requires almost no configuration to get a model running.</strong> It is not designed to efficiently serve many concurrent requests from different users at once; that is a deliberate scope decision, not a missing feature.',
          'vLLM is built specifically for high-throughput serving. Its PagedAttention mechanism manages GPU memory for the attention cache far more efficiently than naive approaches, and its continuous batching dynamically groups incoming requests to keep GPU utilization high even as different users\' generations finish at different times. This is the right tool once you need to serve more than a handful of simultaneous users. vLLM is released under the Apache-2.0 license and, per its <a href="https://github.com/vllm-project/vllm" class="text-primary hover:underline" rel="noopener noreferrer">README</a>, supports NVIDIA, AMD and Intel GPUs as well as x86 and ARM CPUs.',
          'TGI (Hugging Face\'s Text Generation Inference) targeted the same production-serving use case as vLLM, but it is now in maintenance mode: its <a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">repository README</a> says only minor bug fixes, documentation improvements and lightweight maintenance are accepted, and recommends vLLM, SGLang and local engines such as llama.cpp or MLX going forward. For a new deployment, choose vLLM (or <a href="/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a>); keep TGI only to run an existing setup.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Ollama vs vLLM vs TGI — When to Use Each',
        content: [
          'Single developer, local machine, one request at a time: Ollama. Small team or internal tool with a handful of concurrent users: Ollama works once you raise its parallel-request setting, but vLLM gives more headroom as usage grows. Production deployment serving many users: vLLM, or <a href="/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a> for structured-output-heavy or multi-turn workloads.',
          'All three support most major open-weight model families, so model availability rarely decides this choice — concurrency and deployment context should.',
        ],
        columns: ['Tool', 'Best for', 'Concurrency', 'Status'],
        rows: [
          { 'Tool': 'Ollama', 'Best for': 'Single-user local use', 'Concurrency': 'Queues; set OLLAMA_NUM_PARALLEL', 'Status': 'Actively released' },
          { 'Tool': 'vLLM', 'Best for': 'Multi-user serving', 'Concurrency': 'Continuous batching', 'Status': 'Actively released' },
          { 'Tool': 'TGI', 'Best for': 'Existing deployments only', 'Concurrency': 'Continuous batching', 'Status': 'Maintenance mode' },
        ],
      },
      selfHosting: {
        id: 'self-hosting',
        title: 'Self-Hosting Keeps Prompts on Your Infrastructure and Exposes OpenAI-Compatible APIs',
        content: [
          'Running any of the three on your own server or cloud account sends prompts and outputs to your infrastructure instead of a third-party model API. That is the starting point for on-premises setups in regulated sectors such as financial services, but it does not make a deployment compliant by itself — access control, logging, model licensing and data-protection duties still need your own legal review.',
          'Integration into a Python backend is straightforward: Ollama exposes <a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">OpenAI-compatible endpoints</a> (chat completions, completions, embeddings and model listing) with streaming, and vLLM ships an <a href="https://docs.vllm.ai/en/latest/serving/online_serving/" class="text-primary hover:underline" rel="noopener noreferrer">OpenAI-compatible server</a> started with vllm serve. Point the official OpenAI client at the local base URL and the same code works against either.',
          'For coding agents, tune concurrency before switching tools. Ollama queues requests (up to <a href="https://docs.ollama.com/faq" class="text-primary hover:underline" rel="noopener noreferrer">OLLAMA_MAX_QUEUE</a>, 512 by default, then it returns HTTP 503) and processes OLLAMA_NUM_PARALLEL requests per model, with memory use growing with parallelism times context length. One agent usually fits Ollama; several agents sharing one GPU server is where vLLM batching pays off. Measure with your own prompts using <a href="/prompt-bites/best-local-llm-benchmarking-tool" class="text-primary hover:underline" rel="noopener noreferrer">a local benchmarking tool</a>.',
          'Each project publishes its own documentation: the <a href="https://docs.ollama.com" class="text-primary hover:underline" rel="noopener noreferrer">Ollama docs</a>, the <a href="https://docs.vllm.ai" class="text-primary hover:underline" rel="noopener noreferrer">vLLM docs</a> and the <a href="https://huggingface.co/docs/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">TGI docs</a>. Ollama and vLLM are the two with frequent releases.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can Ollama handle multiple simultaneous requests at all?',
            a: 'Yes. Ollama queues requests (up to 512 by default, then it returns an HTTP 503 error) and can process several in parallel per model when you raise OLLAMA_NUM_PARALLEL, at the cost of more memory. It is not optimized for production-scale concurrent traffic the way vLLM is, so for many simultaneous users vLLM is the better fit.',
          },
          {
            q: 'Does vLLM support GGUF models?',
            a: 'Partly. vLLM can load GGUF files, but its <a href="https://docs.vllm.ai/en/latest/features/quantization/gguf.html" class="text-primary hover:underline" rel="noopener noreferrer">documentation</a> calls the support highly experimental and under-optimized, and it now needs the out-of-tree vllm-gguf-plugin. For production vLLM serving, prefer AWQ, GPTQ or full-precision Hugging Face checkpoints.',
          },
          {
            q: 'Is TGI free to use, and is it still maintained?',
            a: 'TGI is open source under the Apache-2.0 license. Self-hosted on your own GPU it is free beyond hardware costs, while Hugging Face\'s managed Inference Endpoints charge for hosted compute. It is in maintenance mode, though: only minor fixes are accepted and Hugging Face recommends vLLM and SGLang for new projects.',
          },
          {
            q: 'Can I switch from Ollama to vLLM later without re-downloading models?',
            a: 'Not directly — the two tools generally expect different model formats (GGUF for Ollama versus full-precision or AWQ/GPTQ checkpoints for vLLM), so switching typically means obtaining the model in the new format rather than reusing existing files.',
          },
          {
            q: 'Does Ollama offer an OpenAI-compatible API with streaming?',
            a: 'Yes. Ollama provides OpenAI-compatible endpoints for chat completions, completions, embeddings and models, with streaming on the chat and completions endpoints. It covers a subset of the OpenAI API, so check the <a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">compatibility page</a> for unsupported features.',
          },
          {
            q: 'Which tool fits an on-premises LLM deployment in a regulated company?',
            a: 'All three can run fully on your own hardware, so the choice follows load: Ollama for a small internal tool, vLLM for many concurrent users. Compliance depends on your controls — access management, audit logging, model licenses and a legal review — not on the serving tool.',
          },
          {
            q: 'Which should I use to host LLMs for several coding agents?',
            a: 'Start with Ollama if one or two agents share a machine and raise its parallel-request setting if requests queue. Move to vLLM when many agents or developers hit one GPU server at once, since continuous batching keeps GPU utilization high. Benchmark with your real prompts before deciding.',
          },
          {
            q: 'What should I pick instead of TGI for a new deployment?',
            a: 'vLLM is the closest replacement for multi-user GPU serving, and SGLang is the other engine Hugging Face points to. For single-user local use, Ollama or llama.cpp remain the simpler route.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Ollama vs LM Studio](/prompt-bites/ollama-vs-lm-studio) — comparing two single-user local tools',
          '[GGUF vs GPTQ vs AWQ](/prompt-bites/gguf-vs-gptq-vs-awq) — the formats each tool expects',
          '[Best Frontend for Ollama](/prompt-bites/best-frontend-for-ollama) — pairing Ollama with a chat UI',
          '[SGLang vs vLLM](/prompt-bites/sglang-vs-vllm-local-serving) — choosing between the two actively developed serving engines',
          '[vLLM Explained](/power-local-llm/vllm-explained) — how vLLM works and when to deploy it',
          '[Local LLM OpenAI-Compatible API Guide](/local-llms/local-llm-openai-compatible-api) — connecting Python code to a local server',
        ],
      },
    },
  },
  ar: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-vs-vllm-vs-tgi-overview-hero-ar.webp',
    title: 'Ollama مقابل vLLM مقابل TGI: أيهما يجب أن تستخدمه للتقديم المحلي؟',
    seoTitle: 'Ollama مقابل vLLM مقابل TGI للتقديم المحلي 2026',
    metaDescription: 'يناسب Ollama الاستخدام المحلي بمستخدم واحد، ويناسب vLLM المستخدمين المتزامنين الكثيرين. TGI في وضع الصيانة، فاختر vLLM أو SGLang للنشر الجديد.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'المطورون الذين يختارون خادم استدلال للاستخدام المحلي أو الإنتاجي صغير النطاق',
    siblingBites: ['ollama-vs-lm-studio', 'gguf-vs-gptq-vs-awq', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Ollama هو الأفضل للاستخدام المحلي بمستخدم واحد؛ أما vLLM فهو الخيار لخدمة مستخدمين متزامنين كثيرين، وقد أصبح TGI الآن في وضع الصيانة.</strong> يغلّف Ollama تقنية llama.cpp لإعداد بسيط وتوافق GGUF، بينما تعظّم تقنية PagedAttention في vLLM والدفعات المستمرة الإنتاجية عبر طلبات متزامنة كثيرة. وقد وضعت Hugging Face <a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">TGI في وضع الصيانة</a> وتوصي بـ vLLM وSGLang مستقبلًا، لذا اختر TGI فقط لإبقاء نشر قائم قيد التشغيل.',
    toc: [
      { label: 'أفضل اختيار: طابق الأداة مع احتياجات التزامن لديك', anchor: '#best-pick' },
      { label: 'Ollama مقابل vLLM مقابل TGI — متى تستخدم كل واحد', anchor: '#comparison' },
      { label: 'الاستضافة الذاتية تُبقي المطالبات على بنيتك التحتية وتوفّر واجهات متوافقة مع OpenAI', anchor: '#self-hosting' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'هل يجب أن أستخدم Ollama أم vLLM أم TGI لتقديم LLM محليًا؟',
        answer: 'استخدم Ollama للاستخدام المحلي بمستخدم واحد — إنه الإعداد الأبسط. استخدم vLLM عندما تحتاج إلى خدمة مستخدمين متزامنين كثيرين بكفاءة. وضعت Hugging Face خدمة TGI في وضع الصيانة وتوصي بـ vLLM وSGLang، لذا تعامل مع TGI كخيار قديم.',
        bullets: [
          'Ollama: الإعداد الأبسط، أصلي لـ GGUF، واجهة برمجة متوافقة مع OpenAI مع البث — مثالي لمطور واحد على جهازه الخاص.',
          'vLLM: إدارة ذاكرة PagedAttention + دفعات مستمرة — مبني للتقديم عالي الإنتاجية متعدد المستخدمين.',
          'TGI (استدلال توليد النص من Hugging Face): في وضع الصيانة — توصي Hugging Face بـ vLLM وSGLang للنشر الجديد.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama: الاختيار الصحيح لمطور واحد يشغّل نماذج محليًا — الإعداد الأبسط، أصلي لـ GGUF، واجهة متوافقة مع OpenAI',
          'vLLM: مبني للتقديم المتزامن عالي الإنتاجية عبر PagedAttention والدفعات المستمرة',
          'TGI: في وضع الصيانة — توصي Hugging Face بـ vLLM وSGLang للنشر الجديد',
          'اختر بناءً على المستخدمين المتزامنين واحتياجات النشر، وليس دعم النماذج الخام — تشغّل الأدوات الثلاث معظم النماذج المفتوحة الشائعة',
          'يمكن استضافة الأدوات الثلاث ذاتيًا، لذا يمكن أن تبقى المطالبات والمخرجات على بنيتك التحتية الخاصة',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار: طابق الأداة مع احتياجات التزامن لديك',
        content: [
          '<strong>Ollama هو الاختيار الصحيح للاستخدام المحلي بمستخدم واحد — يغلّف llama.cpp بواجهة أوامر وواجهة برمجة تطبيقات بسيطة، ويعمل بشكل أصلي مع تنسيق GGUF، ويتطلب إعدادًا يكاد يكون معدومًا لتشغيل نموذج.</strong> إنه غير مصمَّم لتقديم طلبات متزامنة كثيرة من مستخدمين مختلفين بكفاءة في آنٍ واحد؛ هذا قرار نطاق متعمد، وليس ميزة مفقودة.',
          'بُني vLLM تحديدًا للتقديم عالي الإنتاجية. تدير آلية PagedAttention ذاكرة GPU لذاكرة تخزين الانتباه المؤقتة بكفاءة أكبر بكثير من الأساليب البسيطة، وتجمّع الدفعات المستمرة الطلبات الواردة ديناميكيًا للحفاظ على استخدام عالٍ لـ GPU حتى مع انتهاء توليدات مستخدمين مختلفين في أوقات متفاوتة. هذه الأداة الصحيحة بمجرد احتياجك لتقديم أكثر من حفنة من المستخدمين المتزامنين. يصدر vLLM بترخيص Apache-2.0، ووفق <a href="https://github.com/vllm-project/vllm" class="text-primary hover:underline" rel="noopener noreferrer">ملف README</a> الخاص به يدعم وحدات GPU من NVIDIA وAMD وIntel إضافة إلى معالجات x86 وARM.',
          'كان TGI (استدلال توليد النص من Hugging Face) يستهدف حالة الاستخدام الإنتاجي نفسها التي يستهدفها vLLM، لكنه أصبح الآن في وضع الصيانة: يذكر <a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">ملف README للمستودع</a> أنه لا تُقبل إلا إصلاحات الأخطاء الصغيرة وتحسينات التوثيق والصيانة الخفيفة، ويوصي مستقبلًا بـ vLLM وSGLang ومحركات محلية مثل llama.cpp أو MLX. للنشر الجديد اختر vLLM (أو <a href="/ar/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a>)؛ واحتفظ بـ TGI فقط لتشغيل إعداد قائم.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Ollama مقابل vLLM مقابل TGI — متى تستخدم كل واحد',
        content: [
          'مطور واحد، جهاز محلي، طلب واحد في كل مرة: Ollama. فريق صغير أو أداة داخلية لحفنة من المستخدمين المتزامنين: يعمل Ollama بعد رفع إعداد الطلبات المتوازية، لكن vLLM يمنح هامشًا أكبر مع نمو الاستخدام. نشر إنتاجي يخدم مستخدمين كثيرين: vLLM، أو <a href="/ar/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a> لأحمال المخرجات المنظَّمة الكثيرة أو المحادثات متعددة الأدوار.',
          'تدعم الأدوات الثلاث معظم عائلات النماذج المفتوحة الرئيسية، لذا نادرًا ما يحدد توفر النموذج هذا الاختيار — يجب أن يقرره التزامن وسياق النشر.',
        ],
        columns: ['الأداة', 'الأنسب لـ', 'التزامن', 'الحالة'],
        rows: [
          { 'الأداة': 'Ollama', 'الأنسب لـ': 'استخدام محلي بمستخدم واحد', 'التزامن': 'قائمة انتظار؛ OLLAMA_NUM_PARALLEL', 'الحالة': 'إصدارات متكررة' },
          { 'الأداة': 'vLLM', 'الأنسب لـ': 'تقديم متعدد المستخدمين', 'التزامن': 'دفعات مستمرة', 'الحالة': 'إصدارات متكررة' },
          { 'الأداة': 'TGI', 'الأنسب لـ': 'عمليات النشر القائمة فقط', 'التزامن': 'دفعات مستمرة', 'الحالة': 'وضع الصيانة' },
        ],
      },
      selfHosting: {
        id: 'self-hosting',
        title: 'الاستضافة الذاتية تُبقي المطالبات على بنيتك التحتية وتوفّر واجهات متوافقة مع OpenAI',
        content: [
          'تشغيل أي من الأدوات الثلاث على خادمك أو حسابك السحابي الخاص يرسل المطالبات والمخرجات إلى بنيتك التحتية بدلًا من واجهة نموذج تابعة لجهة خارجية. هذه نقطة البداية لعمليات النشر داخل المؤسسة في القطاعات المنظَّمة مثل الخدمات المالية، لكنها لا تجعل النشر متوافقًا بحد ذاتها — فالتحكم في الوصول والتسجيل وتراخيص النماذج والتزامات حماية البيانات لا تزال تتطلب مراجعتك القانونية الخاصة.',
          'الدمج في خلفية Python بسيط: يوفّر Ollama <a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">نقاط نهاية متوافقة مع OpenAI</a> (إكمال الدردشة والإكمال والتضمينات وقائمة النماذج) مع البث، ويأتي vLLM مع <a href="https://docs.vllm.ai/en/latest/serving/online_serving/" class="text-primary hover:underline" rel="noopener noreferrer">خادم متوافق مع OpenAI</a> يبدأ بالأمر vllm serve. وجّه عميل OpenAI الرسمي إلى عنوان URL الأساسي المحلي وسيعمل الكود نفسه مع كليهما.',
          'بالنسبة لوكلاء البرمجة، اضبط التزامن قبل تغيير الأداة. يضع Ollama الطلبات في قائمة انتظار (حتى <a href="https://docs.ollama.com/faq" class="text-primary hover:underline" rel="noopener noreferrer">OLLAMA_MAX_QUEUE</a>، والافتراضي 512، ثم يعيد HTTP 503) ويعالج OLLAMA_NUM_PARALLEL طلبًا لكل نموذج، ويزداد استخدام الذاكرة مع التوازي مضروبًا في طول السياق. يكفي Ollama عادةً وكيلًا واحدًا؛ أما عندما تتشارك عدة وكلاء خادم GPU واحدًا فهنا تؤتي دفعات vLLM ثمارها. قِس بمطالباتك الخاصة باستخدام <a href="/ar/prompt-bites/best-local-llm-benchmarking-tool" class="text-primary hover:underline" rel="noopener noreferrer">أداة قياس أداء محلية</a>.',
          'ينشر كل مشروع وثائقه الخاصة: <a href="https://docs.ollama.com" class="text-primary hover:underline" rel="noopener noreferrer">وثائق Ollama</a> و<a href="https://docs.vllm.ai" class="text-primary hover:underline" rel="noopener noreferrer">وثائق vLLM</a> و<a href="https://huggingface.co/docs/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">وثائق TGI</a>. وOllama وvLLM هما الأداتان اللتان تصدران إصدارات متكررة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكن لـ Ollama التعامل مع طلبات متزامنة متعددة إطلاقًا؟',
            a: 'نعم. يضع Ollama الطلبات في قائمة انتظار (حتى 512 افتراضيًا، ثم يعيد خطأ HTTP 503) ويمكنه معالجة عدة طلبات بالتوازي لكل نموذج إذا رفعت OLLAMA_NUM_PARALLEL، مقابل ذاكرة أكبر. وهو غير محسَّن لحركة المرور المتزامنة على نطاق الإنتاج كما هو حال vLLM، لذا يناسب vLLM أكثر عند وجود مستخدمين متزامنين كثيرين.',
          },
          {
            q: 'هل يدعم vLLM نماذج GGUF؟',
            a: 'جزئيًا. يستطيع vLLM تحميل ملفات GGUF، لكن <a href="https://docs.vllm.ai/en/latest/features/quantization/gguf.html" class="text-primary hover:underline" rel="noopener noreferrer">وثائقه</a> تصف هذا الدعم بأنه تجريبي للغاية وغير محسَّن، وهو يتطلب الآن الإضافة الخارجية vllm-gguf-plugin. للتقديم الإنتاجي مع vLLM، فضّل AWQ أو GPTQ أو نقاط تفتيش Hugging Face كاملة الدقة.',
          },
          {
            q: 'هل TGI مجاني الاستخدام، وهل لا يزال مدعومًا؟',
            a: 'TGI مفتوح المصدر بترخيص Apache-2.0. الاستضافة الذاتية على بطاقة GPU الخاصة بك مجانية بخلاف تكاليف العتاد، بينما تفرض Inference Endpoints المُدارة من Hugging Face رسومًا على الحوسبة المُستضافة. لكنه في وضع الصيانة: لا تُقبل إلا الإصلاحات الصغيرة، وتوصي Hugging Face بـ vLLM وSGLang للمشاريع الجديدة.',
          },
          {
            q: 'هل يمكنني الانتقال من Ollama إلى vLLM لاحقًا دون إعادة تنزيل النماذج؟',
            a: 'ليس مباشرة — تتوقع الأداتان عمومًا تنسيقات نماذج مختلفة (GGUF لـ Ollama مقابل نقاط تفتيش كاملة الدقة أو AWQ/GPTQ لـ vLLM)، لذا يعني الانتقال عادةً الحصول على النموذج بالتنسيق الجديد بدلًا من إعادة استخدام الملفات الموجودة.',
          },
          {
            q: 'هل يوفّر Ollama واجهة برمجة متوافقة مع OpenAI مع البث؟',
            a: 'نعم. يوفّر Ollama نقاط نهاية متوافقة مع OpenAI لإكمال الدردشة والإكمال والتضمينات والنماذج، مع البث في نقطتي الدردشة والإكمال. وهو يغطي جزءًا من واجهة OpenAI، فراجع <a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">صفحة التوافق</a> لمعرفة الميزات غير المدعومة.',
          },
          {
            q: 'أي أداة تناسب نشر LLM داخل المؤسسة في شركة خاضعة للتنظيم؟',
            a: 'يمكن تشغيل الأدوات الثلاث بالكامل على عتادك الخاص، لذا يتبع الاختيار الحِمل: Ollama لأداة داخلية صغيرة، وvLLM لمستخدمين متزامنين كثيرين. يعتمد الامتثال على ضوابطك — إدارة الوصول وسجلات التدقيق وتراخيص النماذج والمراجعة القانونية — وليس على أداة التقديم.',
          },
          {
            q: 'أيها أستخدم لاستضافة LLM لعدة وكلاء برمجة؟',
            a: 'ابدأ بـ Ollama إذا كان وكيل أو اثنان يتشاركان جهازًا، وارفع إعداد الطلبات المتوازية إذا تراكمت الطلبات. انتقل إلى vLLM عندما يصل وكلاء أو مطورون كثيرون إلى خادم GPU واحد في وقت واحد، إذ تُبقي الدفعات المستمرة استخدام GPU مرتفعًا. اختبر بمطالباتك الحقيقية قبل أن تقرر.',
          },
          {
            q: 'ماذا أختار بدلًا من TGI لنشر جديد؟',
            a: 'vLLM هو أقرب بديل للتقديم متعدد المستخدمين على GPU، وSGLang هو المحرك الآخر الذي تشير إليه Hugging Face. أما للاستخدام المحلي بمستخدم واحد فيظل Ollama أو llama.cpp الطريق الأبسط.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[Ollama مقابل LM Studio](/ar/prompt-bites/ollama-vs-lm-studio) — مقارنة أداتين محليتين بمستخدم واحد',
          '[GGUF مقابل GPTQ مقابل AWQ](/ar/prompt-bites/gguf-vs-gptq-vs-awq) — التنسيقات التي تتوقعها كل أداة',
          '[أفضل واجهة أمامية لـ Ollama](/ar/prompt-bites/best-frontend-for-ollama) — إقران Ollama بواجهة دردشة',
          '[SGLang مقابل vLLM](/ar/prompt-bites/sglang-vs-vllm-local-serving) — الاختيار بين محركي تقديم قيد التطوير النشط',
          '[شرح vLLM](/ar/power-local-llm/vllm-explained) — كيف يعمل vLLM ومتى تنشره',
          '[دليل واجهة OpenAI المتوافقة للـ LLM المحلية](/ar/local-llms/local-llm-openai-compatible-api) — ربط كود Python بخادم محلي',
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-vs-vllm-vs-tgi-overview-hero-de.webp',
    title: 'Ollama vs. vLLM vs. TGI: Was sollten Sie für lokales Serving verwenden?',
    seoTitle: 'Ollama vs. vLLM vs. TGI für lokales Serving 2026',
    metaDescription: 'Ollama eignet sich für lokale Einzelnutzung, vLLM für viele gleichzeitige Nutzer. TGI ist im Wartungsmodus – für neue Deployments vLLM oder SGLang wählen.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Entwickler, die einen Inferenzserver für lokale oder kleinere Produktionsnutzung wählen',
    siblingBites: ['ollama-vs-lm-studio', 'gguf-vs-gptq-vs-awq', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Ollama ist am besten für Einzelnutzer-Betrieb geeignet; vLLM ist die Wahl für viele gleichzeitige Nutzer, und TGI befindet sich jetzt im Wartungsmodus.</strong> Ollama umhüllt llama.cpp für einfache Einrichtung und GGUF-Kompatibilität, während vLLMs PagedAttention und kontinuierliches Batching den Durchsatz über viele gleichzeitige Anfragen maximieren. Hugging Face hat <a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">TGI in den Wartungsmodus versetzt</a> und empfiehlt künftig vLLM und SGLang – wählen Sie TGI daher nur, um ein bestehendes Deployment weiterzubetreiben.',
    toc: [
      { label: 'Beste Wahl: Das Tool an Ihren Nebenläufigkeitsbedarf anpassen', anchor: '#best-pick' },
      { label: 'Ollama vs. vLLM vs. TGI — wann Sie was nutzen', anchor: '#comparison' },
      { label: 'Self-Hosting hält Prompts auf Ihrer Infrastruktur und bietet OpenAI-kompatible APIs', anchor: '#self-hosting' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Sollte ich Ollama, vLLM oder TGI für lokales LLM-Serving verwenden?',
        answer: 'Nutzen Sie Ollama für Einzelnutzer-Betrieb — die einfachste Einrichtung. Nutzen Sie vLLM, wenn Sie viele gleichzeitige Nutzer effizient bedienen müssen. Hugging Face hat TGI in den Wartungsmodus versetzt und empfiehlt vLLM und SGLang; betrachten Sie TGI daher als Altlösung.',
        bullets: [
          'Ollama: einfachste Einrichtung, GGUF-nativ, OpenAI-kompatible API mit Streaming — ideal für einen Entwickler auf der eigenen Maschine.',
          'vLLM: PagedAttention-Speicherverwaltung + kontinuierliches Batching — gebaut für Hochdurchsatz-Multi-User-Serving.',
          'TGI (Hugging Face Text Generation Inference): im Wartungsmodus — Hugging Face empfiehlt vLLM und SGLang für neue Deployments.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama: die richtige Wahl für einen einzelnen Entwickler, der Modelle lokal betreibt — einfachste Einrichtung, GGUF-nativ, OpenAI-kompatible API',
          'vLLM: gebaut für Hochdurchsatz-Nebenläufigkeit via PagedAttention und kontinuierliches Batching',
          'TGI: im Wartungsmodus — Hugging Face empfiehlt vLLM und SGLang für neue Deployments',
          'Wählen Sie nach gleichzeitigen Nutzern und Deployment-Bedarf, nicht nach rohem Modell-Support — alle drei laufen die meisten populären offenen Modelle',
          'Alle drei lassen sich selbst hosten, sodass Prompts und Ausgaben auf Ihrer eigenen Infrastruktur bleiben können',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: Das Tool an Ihren Nebenläufigkeitsbedarf anpassen',
        content: [
          '<strong>Ollama ist die richtige Wahl für Einzelnutzer-Betrieb lokal — es umhüllt llama.cpp mit einer einfachen CLI und API, funktioniert nativ mit dem GGUF-Format und braucht kaum Konfiguration, um ein Modell zum Laufen zu bringen.</strong> Es ist nicht darauf ausgelegt, viele gleichzeitige Anfragen verschiedener Nutzer effizient zu bedienen; das ist eine bewusste Scope-Entscheidung, kein fehlendes Feature.',
          'vLLM ist speziell für Hochdurchsatz-Serving gebaut. Sein PagedAttention-Mechanismus verwaltet den GPU-Speicher für den Attention-Cache weit effizienter als naive Ansätze, und sein kontinuierliches Batching gruppiert eingehende Anfragen dynamisch, um die GPU-Auslastung hoch zu halten, selbst wenn die Generierungen verschiedener Nutzer zu unterschiedlichen Zeiten enden. Das ist das richtige Tool, sobald Sie mehr als eine Handvoll gleichzeitiger Nutzer bedienen müssen. vLLM steht unter der Apache-2.0-Lizenz und unterstützt laut <a href="https://github.com/vllm-project/vllm" class="text-primary hover:underline" rel="noopener noreferrer">README</a> NVIDIA-, AMD- und Intel-GPUs sowie x86- und ARM-CPUs.',
          'TGI (Hugging Faces Text Generation Inference) zielte auf denselben Produktions-Serving-Anwendungsfall wie vLLM, befindet sich aber jetzt im Wartungsmodus: Laut <a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">Repository-README</a> werden nur kleine Bugfixes, Dokumentationsverbesserungen und leichte Wartung angenommen; empfohlen werden künftig vLLM, SGLang sowie lokale Engines wie llama.cpp oder MLX. Für ein neues Deployment wählen Sie vLLM (oder <a href="/de/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a>); behalten Sie TGI nur, um eine bestehende Installation weiterzubetreiben.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Ollama vs. vLLM vs. TGI — wann Sie was nutzen',
        content: [
          'Einzelner Entwickler, lokale Maschine, eine Anfrage nach der anderen: Ollama. Kleines Team oder internes Tool mit einer Handvoll gleichzeitiger Nutzer: Ollama funktioniert, sobald Sie die Einstellung für parallele Anfragen erhöhen, doch vLLM bietet mehr Reserve, wenn die Nutzung wächst. Produktions-Deployment für viele Nutzer: vLLM, oder <a href="/de/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a> für Workloads mit viel strukturierter Ausgabe oder vielen Gesprächsrunden.',
          'Alle drei unterstützen die meisten großen offenen Modellfamilien, daher entscheidet Modellverfügbarkeit selten diese Wahl — Nebenläufigkeit und Deployment-Kontext sollten das.',
        ],
        columns: ['Tool', 'Am besten für', 'Nebenläufigkeit', 'Status'],
        rows: [
          { 'Tool': 'Ollama', 'Am besten für': 'Lokale Einzelnutzung', 'Nebenläufigkeit': 'Warteschlange; OLLAMA_NUM_PARALLEL', 'Status': 'Aktiv veröffentlicht' },
          { 'Tool': 'vLLM', 'Am besten für': 'Multi-User-Serving', 'Nebenläufigkeit': 'Kontinuierliches Batching', 'Status': 'Aktiv veröffentlicht' },
          { 'Tool': 'TGI', 'Am besten für': 'Nur bestehende Deployments', 'Nebenläufigkeit': 'Kontinuierliches Batching', 'Status': 'Wartungsmodus' },
        ],
      },
      selfHosting: {
        id: 'self-hosting',
        title: 'Self-Hosting hält Prompts auf Ihrer Infrastruktur und bietet OpenAI-kompatible APIs',
        content: [
          'Wenn Sie eines der drei Tools auf dem eigenen Server oder im eigenen Cloud-Konto betreiben, gehen Prompts und Ausgaben an Ihre Infrastruktur statt an eine fremde Modell-API. Das ist der Ausgangspunkt für On-Premises-Setups in regulierten Branchen wie Finanzdienstleistungen, macht ein Deployment aber nicht von selbst konform — Zugriffskontrolle, Protokollierung, Modelllizenzen und Datenschutzpflichten erfordern weiterhin Ihre eigene rechtliche Prüfung.',
          'Die Anbindung an ein Python-Backend ist unkompliziert: Ollama bietet <a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">OpenAI-kompatible Endpunkte</a> (Chat Completions, Completions, Embeddings und Modellliste) mit Streaming, und vLLM liefert einen <a href="https://docs.vllm.ai/en/latest/serving/online_serving/" class="text-primary hover:underline" rel="noopener noreferrer">OpenAI-kompatiblen Server</a> mit, der per vllm serve startet. Richten Sie den offiziellen OpenAI-Client auf die lokale Basis-URL, und derselbe Code läuft gegen beide.',
          'Stimmen Sie bei Coding-Agenten zuerst die Nebenläufigkeit ab, bevor Sie das Tool wechseln. Ollama reiht Anfragen ein (bis zu <a href="https://docs.ollama.com/faq" class="text-primary hover:underline" rel="noopener noreferrer">OLLAMA_MAX_QUEUE</a>, standardmäßig 512, danach folgt HTTP 503) und verarbeitet OLLAMA_NUM_PARALLEL Anfragen pro Modell, wobei der Speicherbedarf mit Parallelität mal Kontextlänge wächst. Ein Agent passt meist zu Ollama; mehrere Agenten auf einem GPU-Server sind der Fall, in dem sich vLLMs Batching lohnt. Messen Sie mit Ihren eigenen Prompts mit <a href="/de/prompt-bites/best-local-llm-benchmarking-tool" class="text-primary hover:underline" rel="noopener noreferrer">einem lokalen Benchmarking-Tool</a>.',
          'Jedes Projekt veröffentlicht eigene Dokumentation: die <a href="https://docs.ollama.com" class="text-primary hover:underline" rel="noopener noreferrer">Ollama-Docs</a>, die <a href="https://docs.vllm.ai" class="text-primary hover:underline" rel="noopener noreferrer">vLLM-Docs</a> und die <a href="https://huggingface.co/docs/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">TGI-Docs</a>. Ollama und vLLM sind die beiden mit häufigen Releases.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann Ollama überhaupt mehrere gleichzeitige Anfragen verarbeiten?',
            a: 'Ja. Ollama reiht Anfragen in eine Warteschlange ein (standardmäßig bis zu 512, danach folgt ein HTTP-503-Fehler) und kann pro Modell mehrere parallel verarbeiten, wenn Sie OLLAMA_NUM_PARALLEL erhöhen — auf Kosten von mehr Speicher. Für produktionsreifen gleichzeitigen Traffic ist es nicht so optimiert wie vLLM; bei vielen gleichzeitigen Nutzern passt vLLM besser.',
          },
          {
            q: 'Unterstützt vLLM GGUF-Modelle?',
            a: 'Teilweise. vLLM kann GGUF-Dateien laden, doch die <a href="https://docs.vllm.ai/en/latest/features/quantization/gguf.html" class="text-primary hover:underline" rel="noopener noreferrer">Dokumentation</a> nennt die Unterstützung hochgradig experimentell und unteroptimiert, und sie erfordert inzwischen das externe vllm-gguf-plugin. Für produktives vLLM-Serving sind AWQ, GPTQ oder vollpräzise Hugging-Face-Checkpoints vorzuziehen.',
          },
          {
            q: 'Ist TGI kostenlos nutzbar, und wird es noch gepflegt?',
            a: 'TGI ist Open Source unter der Apache-2.0-Lizenz. Selbst gehostet auf eigener GPU ist es über die Hardwarekosten hinaus kostenlos, während Hugging Faces verwaltete Inference Endpoints für gehostete Rechenleistung abrechnen. Es befindet sich jedoch im Wartungsmodus: Nur kleine Fixes werden angenommen, und Hugging Face empfiehlt für neue Projekte vLLM und SGLang.',
          },
          {
            q: 'Kann ich später ohne erneuten Modell-Download von Ollama zu vLLM wechseln?',
            a: 'Nicht direkt — die beiden Tools erwarten im Allgemeinen unterschiedliche Modellformate (GGUF für Ollama gegenüber vollpräzisen oder AWQ/GPTQ-Checkpoints für vLLM), sodass ein Wechsel typischerweise bedeutet, das Modell im neuen Format zu beschaffen, statt bestehende Dateien wiederzuverwenden.',
          },
          {
            q: 'Bietet Ollama eine OpenAI-kompatible API mit Streaming?',
            a: 'Ja. Ollama stellt OpenAI-kompatible Endpunkte für Chat Completions, Completions, Embeddings und Modelle bereit, mit Streaming bei Chat- und Completions-Endpunkten. Es deckt nur einen Teil der OpenAI-API ab; nicht unterstützte Funktionen finden Sie auf der <a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">Kompatibilitätsseite</a>.',
          },
          {
            q: 'Welches Tool passt zu einem On-Premises-LLM-Deployment in einem regulierten Unternehmen?',
            a: 'Alle drei laufen vollständig auf eigener Hardware, daher richtet sich die Wahl nach der Last: Ollama für ein kleines internes Tool, vLLM für viele gleichzeitige Nutzer. Compliance hängt von Ihren Kontrollen ab — Zugriffsverwaltung, Audit-Logging, Modelllizenzen und rechtliche Prüfung — nicht vom Serving-Tool.',
          },
          {
            q: 'Was sollte ich nutzen, um LLMs für mehrere Coding-Agenten zu hosten?',
            a: 'Beginnen Sie mit Ollama, wenn ein oder zwei Agenten sich eine Maschine teilen, und erhöhen Sie die Einstellung für parallele Anfragen, falls Anfragen in der Warteschlange stehen. Wechseln Sie zu vLLM, wenn viele Agenten oder Entwickler gleichzeitig auf einen GPU-Server zugreifen, da kontinuierliches Batching die GPU-Auslastung hoch hält. Testen Sie vorher mit Ihren echten Prompts.',
          },
          {
            q: 'Was wähle ich statt TGI für ein neues Deployment?',
            a: 'vLLM ist der nächste Ersatz für Multi-User-GPU-Serving, und SGLang ist die andere Engine, auf die Hugging Face verweist. Für lokale Einzelnutzung bleiben Ollama oder llama.cpp der einfachere Weg.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Ollama vs. LM Studio](/de/prompt-bites/ollama-vs-lm-studio) — Vergleich zweier Einzelnutzer-Tools',
          '[GGUF vs. GPTQ vs. AWQ](/de/prompt-bites/gguf-vs-gptq-vs-awq) — die Formate, die jedes Tool erwartet',
          '[Bestes Frontend für Ollama](/de/prompt-bites/best-frontend-for-ollama) — Ollama mit einer Chat-Oberfläche kombinieren',
          '[SGLang vs. vLLM](/de/prompt-bites/sglang-vs-vllm-local-serving) — Wahl zwischen den beiden aktiv entwickelten Serving-Engines',
          '[vLLM erklärt](/de/power-local-llm/vllm-explained) — wie vLLM funktioniert und wann man es einsetzt',
          '[OpenAI-kompatible API für lokale LLMs](/de/local-llms/local-llm-openai-compatible-api) — Python-Code mit einem lokalen Server verbinden',
        ],
      },
    },
  },
  es: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-vs-vllm-vs-tgi-overview-hero-es.webp',
    title: 'Ollama vs vLLM vs TGI: ¿Cuál Deberías Usar para Servicio Local?',
    seoTitle: 'Ollama vs vLLM vs TGI para Servicio Local 2026',
    metaDescription: 'Ollama sirve para uso local de un usuario; vLLM, para muchos usuarios concurrentes. TGI está en mantenimiento: elige vLLM o SGLang en despliegues nuevos.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Desarrolladores que eligen un servidor de inferencia para uso local o de producción a pequeña escala',
    siblingBites: ['ollama-vs-lm-studio', 'gguf-vs-gptq-vs-awq', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Ollama es mejor para uso local de un solo usuario; vLLM es la opción para servir a muchos usuarios concurrentes, y TGI está ahora en modo de mantenimiento.</strong> Ollama envuelve llama.cpp para una configuración sencilla y compatibilidad con GGUF, mientras que el PagedAttention de vLLM y el batching continuo maximizan el rendimiento en muchas solicitudes simultáneas. Hugging Face ha puesto <a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">TGI en modo de mantenimiento</a> y recomienda vLLM y SGLang de ahora en adelante, así que elige TGI solo para mantener un despliegue existente.',
    toc: [
      { label: 'Mejor Opción: Ajusta la Herramienta a tus Necesidades de Concurrencia', anchor: '#best-pick' },
      { label: 'Ollama vs vLLM vs TGI — Cuándo Usar Cada Uno', anchor: '#comparison' },
      { label: 'El autoalojamiento mantiene los prompts en tu infraestructura y ofrece APIs compatibles con OpenAI', anchor: '#self-hosting' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Debería usar Ollama, vLLM o TGI para servicio de LLM local?',
        answer: 'Usa Ollama para uso local de un solo usuario — es la configuración más simple. Usa vLLM cuando necesites servir eficientemente a muchos usuarios concurrentes. Hugging Face ha puesto TGI en modo de mantenimiento y recomienda vLLM y SGLang, así que trata TGI como una opción heredada.',
        bullets: [
          'Ollama: configuración más simple, nativo de GGUF, API compatible con OpenAI con streaming — ideal para un desarrollador en su propia máquina.',
          'vLLM: gestión de memoria PagedAttention + batching continuo — construido para servicio multiusuario de alto rendimiento.',
          'TGI (Text Generation Inference de Hugging Face): en modo de mantenimiento — Hugging Face recomienda vLLM y SGLang para nuevos despliegues.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama: la elección correcta para un solo desarrollador ejecutando modelos localmente — configuración más simple, nativo de GGUF, API compatible con OpenAI',
          'vLLM: construido para servicio concurrente de alto rendimiento mediante PagedAttention y batching continuo',
          'TGI: en modo de mantenimiento — Hugging Face recomienda vLLM y SGLang para nuevos despliegues',
          'Elige según los usuarios concurrentes y las necesidades de despliegue, no el soporte bruto de modelos — los tres ejecutan la mayoría de los modelos abiertos populares',
          'Los tres se pueden autoalojar, así que los prompts y las salidas pueden quedarse en tu propia infraestructura',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor Opción: Ajusta la Herramienta a tus Necesidades de Concurrencia',
        content: [
          '<strong>Ollama es la elección correcta para uso local de un solo usuario — envuelve llama.cpp con una CLI y API simples, funciona nativamente con el formato GGUF, y requiere casi ninguna configuración para tener un modelo funcionando.</strong> No está diseñado para servir eficientemente muchas solicitudes concurrentes de distintos usuarios a la vez; esa es una decisión de alcance deliberada, no una característica ausente.',
          'vLLM está construido específicamente para servicio de alto rendimiento. Su mecanismo PagedAttention gestiona la memoria de GPU para la caché de atención de forma mucho más eficiente que los enfoques ingenuos, y su batching continuo agrupa dinámicamente las solicitudes entrantes para mantener alta la utilización de la GPU incluso cuando las generaciones de distintos usuarios terminan en momentos diferentes. Esta es la herramienta correcta una vez que necesitas servir a más de un puñado de usuarios simultáneos. vLLM se publica bajo la licencia Apache-2.0 y, según su <a href="https://github.com/vllm-project/vllm" class="text-primary hover:underline" rel="noopener noreferrer">README</a>, admite GPU de NVIDIA, AMD e Intel, además de CPU x86 y ARM.',
          'TGI (Text Generation Inference de Hugging Face) apuntaba al mismo caso de uso de servicio en producción que vLLM, pero ahora está en modo de mantenimiento: su <a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">README del repositorio</a> indica que solo se aceptan correcciones menores, mejoras de documentación y mantenimiento ligero, y recomienda vLLM, SGLang y motores locales como llama.cpp o MLX de ahora en adelante. Para un despliegue nuevo, elige vLLM (o <a href="/es/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a>); conserva TGI solo para mantener una instalación existente.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Ollama vs vLLM vs TGI — Cuándo Usar Cada Uno',
        content: [
          'Un solo desarrollador, máquina local, una solicitud a la vez: Ollama. Equipo pequeño o herramienta interna con un puñado de usuarios concurrentes: Ollama funciona si subes su ajuste de solicitudes en paralelo, pero vLLM da más margen a medida que crece el uso. Despliegue en producción para muchos usuarios: vLLM, o <a href="/es/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a> para cargas con mucha salida estructurada o conversaciones de varios turnos.',
          'Los tres soportan la mayoría de las familias de modelos abiertos principales, por lo que la disponibilidad de modelos rara vez decide esta elección — la concurrencia y el contexto de despliegue sí deberían hacerlo.',
        ],
        columns: ['Herramienta', 'Mejor para', 'Concurrencia', 'Estado'],
        rows: [
          { 'Herramienta': 'Ollama', 'Mejor para': 'Uso local de un usuario', 'Concurrencia': 'Cola; OLLAMA_NUM_PARALLEL', 'Estado': 'Versiones frecuentes' },
          { 'Herramienta': 'vLLM', 'Mejor para': 'Servicio multiusuario', 'Concurrencia': 'Batching continuo', 'Estado': 'Versiones frecuentes' },
          { 'Herramienta': 'TGI', 'Mejor para': 'Solo despliegues existentes', 'Concurrencia': 'Batching continuo', 'Estado': 'Modo de mantenimiento' },
        ],
      },
      selfHosting: {
        id: 'self-hosting',
        title: 'El autoalojamiento mantiene los prompts en tu infraestructura y ofrece APIs compatibles con OpenAI',
        content: [
          'Ejecutar cualquiera de las tres en tu propio servidor o cuenta en la nube envía prompts y salidas a tu infraestructura en lugar de a una API de modelos de terceros. Es el punto de partida de los despliegues locales en sectores regulados como los servicios financieros, pero no hace que un despliegue sea conforme por sí solo: el control de acceso, el registro, las licencias de modelos y las obligaciones de protección de datos siguen requiriendo tu propia revisión legal.',
          'Integrarlas en un backend de Python es sencillo: Ollama expone <a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">endpoints compatibles con OpenAI</a> (chat completions, completions, embeddings y listado de modelos) con streaming, y vLLM incluye un <a href="https://docs.vllm.ai/en/latest/serving/online_serving/" class="text-primary hover:underline" rel="noopener noreferrer">servidor compatible con OpenAI</a> que se inicia con vllm serve. Apunta el cliente oficial de OpenAI a la URL base local y el mismo código funciona con ambos.',
          'Para agentes de programación, ajusta la concurrencia antes de cambiar de herramienta. Ollama encola solicitudes (hasta <a href="https://docs.ollama.com/faq" class="text-primary hover:underline" rel="noopener noreferrer">OLLAMA_MAX_QUEUE</a>, 512 por defecto, y luego devuelve HTTP 503) y procesa OLLAMA_NUM_PARALLEL solicitudes por modelo, con un uso de memoria que crece con el paralelismo por la longitud de contexto. Un agente suele encajar en Ollama; varios agentes compartiendo un servidor con GPU es donde el batching de vLLM compensa. Mide con tus propios prompts usando <a href="/es/prompt-bites/best-local-llm-benchmarking-tool" class="text-primary hover:underline" rel="noopener noreferrer">una herramienta de benchmarking local</a>.',
          'Cada proyecto publica su propia documentación: la <a href="https://docs.ollama.com" class="text-primary hover:underline" rel="noopener noreferrer">documentación de Ollama</a>, la <a href="https://docs.vllm.ai" class="text-primary hover:underline" rel="noopener noreferrer">documentación de vLLM</a> y la <a href="https://huggingface.co/docs/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">documentación de TGI</a>. Ollama y vLLM son los dos con versiones frecuentes.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿Puede Ollama manejar múltiples solicitudes simultáneas en absoluto?',
            a: 'Sí. Ollama encola las solicitudes (hasta 512 por defecto, y luego devuelve un error HTTP 503) y puede procesar varias en paralelo por modelo si subes OLLAMA_NUM_PARALLEL, a costa de más memoria. No está optimizado para tráfico concurrente a escala de producción como vLLM, así que con muchos usuarios simultáneos vLLM encaja mejor.',
          },
          {
            q: '¿Soporta vLLM modelos GGUF?',
            a: 'En parte. vLLM puede cargar archivos GGUF, pero su <a href="https://docs.vllm.ai/en/latest/features/quantization/gguf.html" class="text-primary hover:underline" rel="noopener noreferrer">documentación</a> describe el soporte como altamente experimental y poco optimizado, y ahora requiere el vllm-gguf-plugin externo. Para servicio de producción con vLLM, prefiere AWQ, GPTQ o checkpoints completos de Hugging Face.',
          },
          {
            q: '¿Es TGI gratuito para usar y sigue manteniéndose?',
            a: 'TGI es código abierto bajo la licencia Apache-2.0. Auto-alojado en tu propia GPU es gratuito más allá de los costos de hardware, mientras que los Inference Endpoints gestionados de Hugging Face cobran por cómputo alojado. Sin embargo, está en modo de mantenimiento: solo se aceptan correcciones menores y Hugging Face recomienda vLLM y SGLang para proyectos nuevos.',
          },
          {
            q: '¿Puedo cambiar de Ollama a vLLM después sin volver a descargar modelos?',
            a: 'No directamente — las dos herramientas generalmente esperan formatos de modelo diferentes (GGUF para Ollama frente a checkpoints completos de precisión o AWQ/GPTQ para vLLM), por lo que cambiar típicamente significa obtener el modelo en el nuevo formato en lugar de reutilizar los archivos existentes.',
          },
          {
            q: '¿Ofrece Ollama una API compatible con OpenAI con streaming?',
            a: 'Sí. Ollama ofrece endpoints compatibles con OpenAI para chat completions, completions, embeddings y modelos, con streaming en los endpoints de chat y completions. Cubre un subconjunto de la API de OpenAI, así que consulta la <a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">página de compatibilidad</a> para ver las funciones no soportadas.',
          },
          {
            q: '¿Qué herramienta encaja en un despliegue local de LLM en una empresa regulada?',
            a: 'Las tres pueden ejecutarse por completo en tu propio hardware, así que la elección depende de la carga: Ollama para una herramienta interna pequeña, vLLM para muchos usuarios concurrentes. El cumplimiento depende de tus controles — gestión de accesos, registro de auditoría, licencias de modelos y revisión legal — y no de la herramienta de servicio.',
          },
          {
            q: '¿Cuál debería usar para alojar LLM para varios agentes de programación?',
            a: 'Empieza con Ollama si uno o dos agentes comparten una máquina y sube su ajuste de solicitudes en paralelo si se forman colas. Pasa a vLLM cuando muchos agentes o desarrolladores accedan a la vez a un servidor con GPU, ya que el batching continuo mantiene alta la utilización de la GPU. Haz pruebas con tus prompts reales antes de decidir.',
          },
          {
            q: '¿Qué elijo en lugar de TGI para un despliegue nuevo?',
            a: 'vLLM es el reemplazo más cercano para servicio multiusuario en GPU, y SGLang es el otro motor al que apunta Hugging Face. Para uso local de un solo usuario, Ollama o llama.cpp siguen siendo la vía más simple.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[Ollama vs LM Studio](/es/prompt-bites/ollama-vs-lm-studio) — comparando dos herramientas locales de un solo usuario',
          '[GGUF vs GPTQ vs AWQ](/es/prompt-bites/gguf-vs-gptq-vs-awq) — los formatos que espera cada herramienta',
          '[Mejor Frontend para Ollama](/es/prompt-bites/best-frontend-for-ollama) — combinando Ollama con una interfaz de chat',
          '[SGLang vs vLLM](/es/prompt-bites/sglang-vs-vllm-local-serving) — elegir entre los dos motores de servicio con desarrollo activo',
          '[vLLM explicado](/es/power-local-llm/vllm-explained) — cómo funciona vLLM y cuándo desplegarlo',
          '[Guía de API compatible con OpenAI para LLM locales](/es/local-llms/local-llm-openai-compatible-api) — conectar código Python a un servidor local',
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-vs-vllm-vs-tgi-overview-hero-fr.webp',
    title: 'Ollama vs vLLM vs TGI : lequel utiliser pour le déploiement local ?',
    seoTitle: 'Ollama vs vLLM vs TGI pour le déploiement local 2026',
    metaDescription: 'Ollama convient à l\'usage mono-utilisateur, vLLM aux nombreux utilisateurs simultanés. TGI est en mode maintenance : préférez vLLM ou SGLang.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Développeurs qui choisissent un serveur d\'inférence pour un usage local ou une production à petite échelle',
    siblingBites: ['ollama-vs-lm-studio', 'gguf-vs-gptq-vs-awq', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Ollama est idéal pour un usage local mono-utilisateur ; vLLM est le choix pour servir de nombreux utilisateurs simultanés, et TGI est désormais en mode maintenance.</strong> Ollama encapsule llama.cpp pour une configuration simple et la compatibilité GGUF, tandis que le PagedAttention de vLLM et son batching continu maximisent le débit sur de nombreuses requêtes simultanées. Hugging Face a placé <a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">TGI en mode maintenance</a> et recommande désormais vLLM et SGLang ; ne choisissez donc TGI que pour maintenir un déploiement existant.',
    toc: [
      { label: 'Meilleur choix : adaptez l\'outil à vos besoins de concurrence', anchor: '#best-pick' },
      { label: 'Ollama vs vLLM vs TGI — quand utiliser chacun', anchor: '#comparison' },
      { label: 'L\'auto-hébergement garde les prompts sur votre infrastructure et expose des API compatibles OpenAI', anchor: '#self-hosting' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Faut-il utiliser Ollama, vLLM ou TGI pour le déploiement local de LLM ?',
        answer: 'Utilisez Ollama pour un usage local mono-utilisateur — c\'est la configuration la plus simple. Utilisez vLLM si vous devez servir efficacement de nombreux utilisateurs simultanés. Hugging Face a placé TGI en mode maintenance et recommande vLLM et SGLang ; considérez donc TGI comme une option héritée.',
        bullets: [
          'Ollama : configuration la plus simple, natif GGUF, API compatible OpenAI avec streaming — idéal pour un développeur sur sa propre machine.',
          'vLLM : gestion mémoire PagedAttention + batching continu — conçu pour un déploiement multi-utilisateur à haut débit.',
          'TGI (Hugging Face Text Generation Inference) : en mode maintenance — Hugging Face recommande vLLM et SGLang pour les nouveaux déploiements.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama : le bon choix pour un développeur seul exécutant des modèles en local — configuration la plus simple, natif GGUF, API compatible OpenAI',
          'vLLM : conçu pour un déploiement concurrent à haut débit via PagedAttention et le batching continu',
          'TGI : en mode maintenance — Hugging Face recommande vLLM et SGLang pour les nouveaux déploiements',
          'Choisissez selon le nombre d\'utilisateurs simultanés et les besoins de déploiement, pas la simple compatibilité des modèles — les trois outils exécutent la plupart des modèles ouverts populaires',
          'Les trois peuvent être auto-hébergés : prompts et sorties peuvent rester sur votre propre infrastructure',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : adaptez l\'outil à vos besoins de concurrence',
        content: [
          '<strong>Ollama est le bon choix pour un usage local mono-utilisateur — il encapsule llama.cpp avec une CLI et une API simples, fonctionne nativement avec le format GGUF, et ne nécessite presque aucune configuration pour faire tourner un modèle.</strong> Il n\'est pas conçu pour servir efficacement de nombreuses requêtes simultanées provenant de différents utilisateurs à la fois ; il s\'agit d\'un choix de périmètre délibéré, pas d\'une fonctionnalité manquante.',
          'vLLM est conçu spécifiquement pour un déploiement à haut débit. Son mécanisme PagedAttention gère la mémoire GPU du cache d\'attention bien plus efficacement que les approches naïves, et son batching continu regroupe dynamiquement les requêtes entrantes pour maintenir une utilisation GPU élevée, même lorsque les générations des différents utilisateurs se terminent à des moments différents. C\'est l\'outil approprié dès que vous devez servir plus qu\'une poignée d\'utilisateurs simultanés. vLLM est publié sous licence Apache-2.0 et, selon son <a href="https://github.com/vllm-project/vllm" class="text-primary hover:underline" rel="noopener noreferrer">README</a>, prend en charge les GPU NVIDIA, AMD et Intel ainsi que les CPU x86 et ARM.',
          'TGI (Text Generation Inference de Hugging Face) visait le même cas d\'usage de déploiement en production que vLLM, mais il est désormais en mode maintenance : son <a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">README</a> indique que seuls les correctifs mineurs, les améliorations de documentation et la maintenance légère sont acceptés, et recommande vLLM, SGLang ainsi que des moteurs locaux comme llama.cpp ou MLX. Pour un nouveau déploiement, choisissez vLLM (ou <a href="/fr/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a>) ; ne gardez TGI que pour faire tourner une installation existante.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Ollama vs vLLM vs TGI — quand utiliser chacun',
        content: [
          'Développeur seul, machine locale, une requête à la fois : Ollama. Petite équipe ou outil interne avec une poignée d\'utilisateurs simultanés : Ollama convient une fois son réglage de requêtes parallèles augmenté, mais vLLM offre davantage de marge à mesure que l\'usage grandit. Déploiement en production pour de nombreux utilisateurs : vLLM, ou <a href="/fr/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a> pour les charges riches en sorties structurées ou en conversations multi-tours.',
          'Les trois outils prennent en charge la plupart des grandes familles de modèles à poids ouverts, donc la disponibilité des modèles décide rarement de ce choix — ce sont la concurrence et le contexte de déploiement qui doivent le déterminer.',
        ],
        columns: ['Outil', 'Idéal pour', 'Concurrence', 'Statut'],
        rows: [
          { 'Outil': 'Ollama', 'Idéal pour': 'Usage local mono-utilisateur', 'Concurrence': 'File ; OLLAMA_NUM_PARALLEL', 'Statut': 'Versions fréquentes' },
          { 'Outil': 'vLLM', 'Idéal pour': 'Service multi-utilisateur', 'Concurrence': 'Batching continu', 'Statut': 'Versions fréquentes' },
          { 'Outil': 'TGI', 'Idéal pour': 'Déploiements existants', 'Concurrence': 'Batching continu', 'Statut': 'Mode maintenance' },
        ],
      },
      selfHosting: {
        id: 'self-hosting',
        title: 'L\'auto-hébergement garde les prompts sur votre infrastructure et expose des API compatibles OpenAI',
        content: [
          'Exécuter l\'un des trois sur votre propre serveur ou compte cloud envoie prompts et sorties vers votre infrastructure plutôt que vers une API de modèle tierce. C\'est le point de départ des déploiements sur site dans les secteurs régulés comme les services financiers, mais cela ne rend pas un déploiement conforme à lui seul : contrôle d\'accès, journalisation, licences de modèles et obligations de protection des données exigent toujours votre propre examen juridique.',
          'L\'intégration à un backend Python est simple : Ollama expose des <a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">endpoints compatibles OpenAI</a> (chat completions, completions, embeddings et liste des modèles) avec streaming, et vLLM fournit un <a href="https://docs.vllm.ai/en/latest/serving/online_serving/" class="text-primary hover:underline" rel="noopener noreferrer">serveur compatible OpenAI</a> lancé avec vllm serve. Pointez le client OpenAI officiel vers l\'URL de base locale et le même code fonctionne avec les deux.',
          'Pour des agents de codage, réglez la concurrence avant de changer d\'outil. Ollama met les requêtes en file (jusqu\'à <a href="https://docs.ollama.com/faq" class="text-primary hover:underline" rel="noopener noreferrer">OLLAMA_MAX_QUEUE</a>, soit 512 par défaut, puis renvoie HTTP 503) et traite OLLAMA_NUM_PARALLEL requêtes par modèle, la mémoire utilisée croissant avec le parallélisme multiplié par la longueur de contexte. Un agent tient généralement dans Ollama ; plusieurs agents partageant un serveur GPU, c\'est là que le batching de vLLM devient rentable. Mesurez avec vos propres prompts à l\'aide d\'<a href="/fr/prompt-bites/best-local-llm-benchmarking-tool" class="text-primary hover:underline" rel="noopener noreferrer">un outil de benchmark local</a>.',
          'Chaque projet publie sa propre documentation : la <a href="https://docs.ollama.com" class="text-primary hover:underline" rel="noopener noreferrer">documentation Ollama</a>, la <a href="https://docs.vllm.ai" class="text-primary hover:underline" rel="noopener noreferrer">documentation vLLM</a> et la <a href="https://huggingface.co/docs/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">documentation TGI</a>. Ollama et vLLM sont les deux à publier fréquemment des versions.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Ollama peut-il gérer plusieurs requêtes simultanées ?',
            a: 'Oui. Ollama met les requêtes en file d\'attente (jusqu\'à 512 par défaut, puis renvoie une erreur HTTP 503) et peut en traiter plusieurs en parallèle par modèle si vous augmentez OLLAMA_NUM_PARALLEL, au prix de plus de mémoire. Il n\'est pas optimisé pour un trafic concurrent à l\'échelle production comme vLLM ; avec de nombreux utilisateurs simultanés, vLLM convient mieux.',
          },
          {
            q: 'vLLM prend-il en charge les modèles GGUF ?',
            a: 'En partie. vLLM peut charger des fichiers GGUF, mais sa <a href="https://docs.vllm.ai/en/latest/features/quantization/gguf.html" class="text-primary hover:underline" rel="noopener noreferrer">documentation</a> qualifie ce support de très expérimental et peu optimisé, et il nécessite désormais le vllm-gguf-plugin externe. Pour un service de production avec vLLM, préférez AWQ, GPTQ ou des checkpoints Hugging Face en pleine précision.',
          },
          {
            q: 'TGI est-il gratuit, et est-il toujours maintenu ?',
            a: 'TGI est open source sous licence Apache-2.0. Auto-hébergé sur votre propre GPU, il est gratuit au-delà du coût du matériel, tandis que les Inference Endpoints gérés par Hugging Face facturent le calcul hébergé. Il est toutefois en mode maintenance : seuls les correctifs mineurs sont acceptés et Hugging Face recommande vLLM et SGLang pour les nouveaux projets.',
          },
          {
            q: 'Puis-je passer d\'Ollama à vLLM plus tard sans retélécharger les modèles ?',
            a: 'Pas directement — les deux outils attendent généralement des formats de modèle différents (GGUF pour Ollama contre des checkpoints en pleine précision ou AWQ/GPTQ pour vLLM), donc le changement implique généralement d\'obtenir le modèle dans le nouveau format plutôt que de réutiliser les fichiers existants.',
          },
          {
            q: 'Ollama propose-t-il une API compatible OpenAI avec streaming ?',
            a: 'Oui. Ollama fournit des endpoints compatibles OpenAI pour les chat completions, completions, embeddings et modèles, avec streaming sur les endpoints de chat et de completions. Il couvre un sous-ensemble de l\'API OpenAI ; consultez la <a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">page de compatibilité</a> pour les fonctions non prises en charge.',
          },
          {
            q: 'Quel outil convient à un déploiement LLM sur site dans une entreprise régulée ?',
            a: 'Les trois peuvent tourner entièrement sur votre propre matériel, le choix dépend donc de la charge : Ollama pour un petit outil interne, vLLM pour de nombreux utilisateurs simultanés. La conformité dépend de vos contrôles — gestion des accès, journaux d\'audit, licences de modèles et examen juridique — et non de l\'outil de service.',
          },
          {
            q: 'Lequel utiliser pour héberger des LLM pour plusieurs agents de codage ?',
            a: 'Commencez par Ollama si un ou deux agents partagent une machine, et augmentez son réglage de requêtes parallèles si des requêtes s\'accumulent. Passez à vLLM lorsque de nombreux agents ou développeurs sollicitent un même serveur GPU, car le batching continu maintient une forte utilisation du GPU. Testez avec vos vrais prompts avant de décider.',
          },
          {
            q: 'Que choisir à la place de TGI pour un nouveau déploiement ?',
            a: 'vLLM est le remplaçant le plus proche pour le service multi-utilisateur sur GPU, et SGLang est l\'autre moteur vers lequel Hugging Face oriente. Pour un usage local mono-utilisateur, Ollama ou llama.cpp restent la voie la plus simple.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Ollama vs LM Studio](/fr/prompt-bites/ollama-vs-lm-studio) — comparaison de deux outils locaux mono-utilisateur',
          '[GGUF vs GPTQ vs AWQ](/fr/prompt-bites/gguf-vs-gptq-vs-awq) — les formats attendus par chaque outil',
          '[Meilleure interface pour Ollama](/fr/prompt-bites/best-frontend-for-ollama) — associer Ollama à une interface de chat',
          '[SGLang vs vLLM](/fr/prompt-bites/sglang-vs-vllm-local-serving) — choisir entre les deux moteurs de service activement développés',
          '[vLLM expliqué](/fr/power-local-llm/vllm-explained) — fonctionnement de vLLM et quand le déployer',
          '[API compatible OpenAI pour LLM locaux](/fr/local-llms/local-llm-openai-compatible-api) — connecter du code Python à un serveur local',
        ],
      },
    },
  },
  ja: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-vs-vllm-vs-tgi-overview-hero-ja.webp',
    title: 'Ollama vs vLLM vs TGI: ローカルサービングにどれを使うべき?',
    seoTitle: '2026年版 ローカルサービング Ollama vs vLLM vs TGI',
    metaDescription: 'Ollamaはシングルユーザーのローカル用途、vLLMは多数の同時ユーザー向けです。TGIはメンテナンスモードのため、新規デプロイにはvLLMかSGLangを選びましょう。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'ローカルまたは小規模な本番用途の推論サーバーを選ぶ開発者',
    siblingBites: ['ollama-vs-lm-studio', 'gguf-vs-gptq-vs-awq', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Ollamaはシングルユーザーのローカル用途に最適で、多数の同時ユーザーへのサービングにはvLLMを選びます。TGIは現在メンテナンスモードです。</strong>Ollamaはシンプルなセットアップと GGUF互換性のためにllama.cppをラップしており、vLLMのPagedAttentionと連続バッチ処理は多数の同時リクエストにわたるスループットを最大化します。Hugging Faceは<a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">TGIをメンテナンスモードに移行</a>し、今後はvLLMとSGLangを推奨しているため、TGIは既存のデプロイを維持する場合にのみ選んでください。',
    toc: [
      { label: 'ベストピック: 同時実行のニーズにツールを合わせる', anchor: '#best-pick' },
      { label: 'Ollama vs vLLM vs TGI — 使い分け', anchor: '#comparison' },
      { label: 'セルフホストならプロンプトを自社インフラ内にとどめ、OpenAI互換APIを利用できる', anchor: '#self-hosting' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'ローカルLLMサービングにOllama、vLLM、TGIのどれを使うべきですか?',
        answer: 'シングルユーザーのローカル用途にはOllamaを使ってください — 最もシンプルなセットアップです。多数の同時ユーザーを効率的にサービングする必要があるならvLLMを使ってください。Hugging FaceはTGIをメンテナンスモードにしてvLLMとSGLangを推奨しているため、TGIはレガシーの選択肢として扱ってください。',
        bullets: [
          'Ollama: 最もシンプルなセットアップ、GGUFネイティブ、ストリーミング対応のOpenAI互換API — 自分のマシンで動かす一人の開発者に理想的。',
          'vLLM: PagedAttentionメモリ管理+連続バッチ処理 — 高スループットのマルチユーザーサービング向けに構築。',
          'TGI(Hugging Face Text Generation Inference): メンテナンスモード — Hugging Faceは新規デプロイにvLLMとSGLangを推奨。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama: ローカルでモデルを動かす一人の開発者に正しい選択 — 最もシンプルなセットアップ、GGUFネイティブ、OpenAI互換API',
          'vLLM: PagedAttentionと連続バッチ処理による高スループットの同時サービング向けに構築',
          'TGI: メンテナンスモード — Hugging Faceは新規デプロイにvLLMとSGLangを推奨',
          '生のモデルサポートではなく同時ユーザー数とデプロイの要件に基づいて選ぶこと — 3つとも大半の人気オープンモデルを動かす',
          '3つともセルフホストでき、プロンプトと出力を自社のインフラ内にとどめられる',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストピック: 同時実行のニーズにツールを合わせる',
        content: [
          '<strong>Ollamaはシングルユーザーのローカル用途に正しい選択です — シンプルなCLIとAPIでllama.cppをラップし、GGUFフォーマットとネイティブに動作し、モデルを動かすのにほとんど設定を必要としません。</strong>異なるユーザーからの多数の同時リクエストを効率的にサービングするよう設計されていません。それは意図的なスコープの決定であり、機能の欠如ではありません。',
          'vLLMは特に高スループットのサービング向けに構築されています。そのPagedAttentionメカニズムは、単純なアプローチよりもはるかに効率的にアテンションキャッシュ用のGPUメモリを管理し、連続バッチ処理は受信するリクエストを動的にグループ化し、異なるユーザーの生成が異なるタイミングで終了してもGPU使用率を高く保ちます。数人以上の同時ユーザーにサービングする必要が生じたら、これが正しいツールです。vLLMはApache-2.0ライセンスで公開されており、<a href="https://github.com/vllm-project/vllm" class="text-primary hover:underline" rel="noopener noreferrer">README</a>によればNVIDIA、AMD、IntelのGPUとx86およびARMのCPUをサポートします。',
          'TGI(Hugging FaceのText Generation Inference)はvLLMと同じ本番サービングのユースケースを対象としていましたが、現在はメンテナンスモードです。<a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">リポジトリのREADME</a>によれば、受け付けるのは軽微なバグ修正、ドキュメント改善、軽いメンテナンスのみで、今後はvLLM、SGLang、llama.cppやMLXなどのローカルエンジンが推奨されています。新規デプロイにはvLLM(または<a href="/ja/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a>)を選び、TGIは既存の環境を動かし続ける場合にのみ使ってください。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Ollama vs vLLM vs TGI — 使い分け',
        content: [
          '一人の開発者、ローカルマシン、一度に一つのリクエスト: Ollama。数人の同時ユーザーがいる小規模チームや社内ツール: 並列リクエスト設定を引き上げればOllamaでも機能しますが、使用が増えるにつれてvLLMの方が余裕があります。多数のユーザーにサービングする本番デプロイ: vLLM、構造化出力が多い、またはマルチターンのワークロードなら<a href="/ja/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a>。',
          '3つとも主要なオープンウェイトモデルファミリーのほとんどをサポートしているため、モデルの入手可能性がこの選択を決めることは稀です — 同時実行性とデプロイの文脈が決めるべきです。',
        ],
        columns: ['ツール', '最適な用途', '同時実行', '状況'],
        rows: [
          { 'ツール': 'Ollama', '最適な用途': 'シングルユーザーのローカル用途', '同時実行': 'キュー; OLLAMA_NUM_PARALLEL', '状況': '頻繁にリリース' },
          { 'ツール': 'vLLM', '最適な用途': 'マルチユーザーサービング', '同時実行': '連続バッチ処理', '状況': '頻繁にリリース' },
          { 'ツール': 'TGI', '最適な用途': '既存デプロイのみ', '同時実行': '連続バッチ処理', '状況': 'メンテナンスモード' },
        ],
      },
      selfHosting: {
        id: 'self-hosting',
        title: 'セルフホストならプロンプトを自社インフラ内にとどめ、OpenAI互換APIを利用できる',
        content: [
          '3つのいずれかを自前のサーバーやクラウドアカウントで動かせば、プロンプトと出力は第三者のモデルAPIではなく自社のインフラに送られます。これは金融サービスのような規制業種でのオンプレミス構成の出発点ですが、それだけでデプロイがコンプライアンスに適合するわけではありません — アクセス制御、ログ記録、モデルのライセンス、データ保護の義務については、引き続き自社での法的確認が必要です。',
          'Pythonバックエンドへの組み込みは簡単です。Ollamaはストリーミング対応の<a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">OpenAI互換エンドポイント</a>(チャット補完、補完、埋め込み、モデル一覧)を提供し、vLLMはvllm serveで起動する<a href="https://docs.vllm.ai/en/latest/serving/online_serving/" class="text-primary hover:underline" rel="noopener noreferrer">OpenAI互換サーバー</a>を備えています。公式のOpenAIクライアントをローカルのベースURLに向ければ、同じコードがどちらでも動きます。',
          'コーディングエージェントでは、ツールを切り替える前に同時実行数を調整してください。Ollamaはリクエストをキューに入れ(<a href="https://docs.ollama.com/faq" class="text-primary hover:underline" rel="noopener noreferrer">OLLAMA_MAX_QUEUE</a>まで、デフォルトは512、超えるとHTTP 503を返します)、モデルごとにOLLAMA_NUM_PARALLEL個のリクエストを処理します。メモリ使用量は並列数×コンテキスト長に応じて増えます。エージェント1つならたいていOllamaで足りますが、複数のエージェントが1台のGPUサーバーを共有する場合にvLLMのバッチ処理が効果を発揮します。<a href="/ja/prompt-bites/best-local-llm-benchmarking-tool" class="text-primary hover:underline" rel="noopener noreferrer">ローカルのベンチマークツール</a>で、自分のプロンプトを使って計測してください。',
          '各プロジェクトは独自のドキュメントを公開しています: <a href="https://docs.ollama.com" class="text-primary hover:underline" rel="noopener noreferrer">Ollamaドキュメント</a>、<a href="https://docs.vllm.ai" class="text-primary hover:underline" rel="noopener noreferrer">vLLMドキュメント</a>、<a href="https://huggingface.co/docs/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">TGIドキュメント</a>。頻繁にリリースされているのはOllamaとvLLMの2つです。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Ollamaは複数の同時リクエストを全く処理できませんか?',
            a: '処理できます。Ollamaはリクエストをキューに入れ(デフォルトで最大512、超えるとHTTP 503エラー)、OLLAMA_NUM_PARALLELを引き上げればモデルごとに複数を並列処理できますが、その分メモリを使います。vLLMのように本番規模の同時トラフィック向けに最適化されているわけではないため、同時ユーザーが多い場合はvLLMが適しています。',
          },
          {
            q: 'vLLMはGGUFモデルをサポートしていますか?',
            a: '部分的にです。vLLMはGGUFファイルを読み込めますが、<a href="https://docs.vllm.ai/en/latest/features/quantization/gguf.html" class="text-primary hover:underline" rel="noopener noreferrer">ドキュメント</a>ではサポートを「非常に実験的で最適化が不十分」としており、現在は外部のvllm-gguf-pluginが必要です。vLLMの本番サービングでは、AWQ、GPTQ、またはフル精度のHugging Faceチェックポイントを優先してください。',
          },
          {
            q: 'TGIは無料で使えますか?まだメンテナンスされていますか?',
            a: 'TGIはApache-2.0ライセンスのオープンソースです。自分のGPUでセルフホストする場合はハードウェアコスト以外無料で、Hugging Faceのマネージドインファレンスエンドポイントはホスティングされた計算に課金されます。ただしメンテナンスモードで、受け付けるのは軽微な修正のみ、Hugging Faceは新規プロジェクトにvLLMとSGLangを推奨しています。',
          },
          {
            q: 'モデルを再ダウンロードせずに後でOllamaからvLLMに切り替えられますか?',
            a: '直接はできません — 2つのツールは一般に異なるモデルフォーマット(OllamaはGGUF、vLLMはフル精度かAWQ/GPTQチェックポイント)を想定しているため、切り替えは通常既存ファイルを再利用するのではなく新しいフォーマットでモデルを入手することを意味します。',
          },
          {
            q: 'OllamaはストリーミングつきのOpenAI互換APIを提供していますか?',
            a: 'はい。Ollamaはチャット補完、補完、埋め込み、モデルのOpenAI互換エンドポイントを提供し、チャットと補完のエンドポイントでストリーミングに対応します。OpenAI APIの一部のみをカバーするため、未対応の機能は<a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">互換性のページ</a>で確認してください。',
          },
          {
            q: '規制のある企業のオンプレミスLLMデプロイにはどのツールが合いますか?',
            a: '3つとも自社のハードウェアだけで動かせるため、負荷で選びます。小規模な社内ツールならOllama、多数の同時ユーザーならvLLMです。コンプライアンスはサービングツールではなく、アクセス管理、監査ログ、モデルのライセンス、法的確認といった自社の統制にかかっています。',
          },
          {
            q: '複数のコーディングエージェント向けにLLMをホストするにはどれを使うべきですか?',
            a: '1〜2個のエージェントが1台のマシンを共有するならOllamaから始め、リクエストが滞留したら並列リクエスト設定を引き上げます。多数のエージェントや開発者が1台のGPUサーバーに同時にアクセスするようになったらvLLMに移行してください。連続バッチ処理がGPU使用率を高く保ちます。決める前に実際のプロンプトでベンチマークを取りましょう。',
          },
          {
            q: '新規デプロイでTGIの代わりに何を選ぶべきですか?',
            a: 'マルチユーザーのGPUサービングではvLLMが最も近い代替で、Hugging Faceが挙げるもう一つのエンジンがSGLangです。シングルユーザーのローカル用途では、Ollamaやllama.cppが引き続きより手軽な選択肢です。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[Ollama vs LM Studio](/ja/prompt-bites/ollama-vs-lm-studio) — 2つのシングルユーザーローカルツールの比較',
          '[GGUF vs GPTQ vs AWQ](/ja/prompt-bites/gguf-vs-gptq-vs-awq) — 各ツールが想定するフォーマット',
          '[Ollamaに最適なフロントエンド](/ja/prompt-bites/best-frontend-for-ollama) — Ollamaとチャット UIの組み合わせ',
          '[SGLang vs vLLM](/ja/prompt-bites/sglang-vs-vllm-local-serving) — 活発に開発されている2つのサービングエンジンの比較',
          '[vLLM解説](/ja/power-local-llm/vllm-explained) — vLLMの仕組みと導入のタイミング',
          '[ローカルLLMのOpenAI互換APIガイド](/ja/local-llms/local-llm-openai-compatible-api) — Pythonコードをローカルサーバーに接続する',
        ],
      },
    },
  },
  ko: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-vs-vllm-vs-tgi-overview-hero-ko.webp',
    title: 'Ollama 대 vLLM 대 TGI: 로컬 서빙에 무엇을 사용해야 하는가?',
    seoTitle: '2026년 로컬 서빙 Ollama 대 vLLM 대 TGI',
    metaDescription: 'Ollama는 단일 사용자 로컬 사용에, vLLM은 다수의 동시 사용자에 적합합니다. TGI는 유지보수 모드이므로 신규 배포에는 vLLM이나 SGLang을 선택하십시오.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: '로컬 또는 소규모 프로덕션 사용을 위한 추론 서버를 선택하는 개발자',
    siblingBites: ['ollama-vs-lm-studio', 'gguf-vs-gptq-vs-awq', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Ollama는 단일 사용자 로컬 사용에 최적이고, 다수의 동시 사용자 서빙에는 vLLM을 선택하며, TGI는 이제 유지보수 모드입니다.</strong> Ollama는 간단한 설정과 GGUF 호환성을 위해 llama.cpp를 감싸고 있으며, vLLM의 PagedAttention과 연속 배치 처리는 다수의 동시 요청에서 처리량을 극대화합니다. Hugging Face는 <a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">TGI를 유지보수 모드로 전환</a>하고 앞으로 vLLM과 SGLang을 권장하므로, TGI는 기존 배포를 유지할 때만 선택하십시오.',
    toc: [
      { label: '최적의 선택: 동시성 요구에 맞는 도구 선택하기', anchor: '#best-pick' },
      { label: 'Ollama 대 vLLM 대 TGI — 각각을 사용해야 할 때', anchor: '#comparison' },
      { label: '셀프 호스팅은 프롬프트를 자체 인프라에 두고 OpenAI 호환 API를 제공합니다', anchor: '#self-hosting' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM 서빙에 Ollama, vLLM, TGI 중 무엇을 사용해야 합니까?',
        answer: '단일 사용자 로컬 사용에는 Ollama를 사용하십시오 — 가장 간단한 설정입니다. 다수의 동시 사용자를 효율적으로 서빙해야 한다면 vLLM을 사용하십시오. Hugging Face가 TGI를 유지보수 모드로 전환하고 vLLM과 SGLang을 권장하므로, TGI는 레거시 선택지로 보십시오.',
        bullets: [
          'Ollama: 가장 간단한 설정, GGUF 네이티브, 스트리밍을 지원하는 OpenAI 호환 API — 자신의 컴퓨터에서 구동하는 한 명의 개발자에게 이상적입니다.',
          'vLLM: PagedAttention 메모리 관리 + 연속 배치 처리 — 고처리량 다중 사용자 서빙을 위해 만들어졌습니다.',
          'TGI(Hugging Face Text Generation Inference): 유지보수 모드 — Hugging Face는 신규 배포에 vLLM과 SGLang을 권장합니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama: 로컬에서 모델을 구동하는 단일 개발자에게 올바른 선택 — 가장 간단한 설정, GGUF 네이티브, OpenAI 호환 API',
          'vLLM: PagedAttention과 연속 배치 처리를 통한 고처리량 동시 서빙을 위해 만들어졌습니다',
          'TGI: 유지보수 모드 — Hugging Face는 신규 배포에 vLLM과 SGLang을 권장합니다',
          '원시 모델 지원이 아니라 동시 사용자 수와 배포 요구를 기준으로 선택하십시오 — 세 가지 모두 대부분의 인기 있는 오픈 모델을 구동합니다',
          '세 가지 모두 셀프 호스팅이 가능하므로 프롬프트와 출력을 자체 인프라 안에 둘 수 있습니다',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최적의 선택: 동시성 요구에 맞는 도구 선택하기',
        content: [
          '<strong>Ollama는 단일 사용자 로컬 사용에 올바른 선택입니다 — 간단한 CLI와 API로 llama.cpp를 감싸며, GGUF 형식과 네이티브로 작동하고 모델을 구동하는 데 설정이 거의 필요하지 않습니다.</strong> 서로 다른 사용자로부터 오는 다수의 동시 요청을 효율적으로 서빙하도록 설계되지 않았습니다 — 이는 누락된 기능이 아니라 의도적인 범위 결정입니다.',
          'vLLM은 특별히 고처리량 서빙을 위해 만들어졌습니다. PagedAttention 메커니즘은 어텐션 캐시를 위한 GPU 메모리를 순진한 접근 방식보다 훨씬 효율적으로 관리하며, 연속 배치 처리는 서로 다른 사용자의 생성이 서로 다른 시점에 끝나더라도 들어오는 요청을 동적으로 그룹화하여 GPU 활용도를 높게 유지합니다. 소수 이상의 동시 사용자를 서빙해야 할 때 올바른 도구입니다. vLLM은 Apache-2.0 라이선스로 공개되며, <a href="https://github.com/vllm-project/vllm" class="text-primary hover:underline" rel="noopener noreferrer">README</a>에 따르면 NVIDIA, AMD, Intel GPU와 x86 및 ARM CPU를 지원합니다.',
          'TGI(Hugging Face의 Text Generation Inference)는 vLLM과 동일한 프로덕션 서빙 사용 사례를 목표로 했지만 현재는 유지보수 모드입니다. <a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">저장소 README</a>에 따르면 사소한 버그 수정, 문서 개선, 가벼운 유지보수만 받아들이며, 앞으로는 vLLM, SGLang, 그리고 llama.cpp나 MLX 같은 로컬 엔진을 권장합니다. 신규 배포에는 vLLM(또는 <a href="/ko/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a>)을 선택하고, TGI는 기존 환경을 계속 운영할 때만 유지하십시오.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Ollama 대 vLLM 대 TGI — 각각을 사용해야 할 때',
        content: [
          '단일 개발자, 로컬 머신, 한 번에 하나의 요청: Ollama. 소수의 동시 사용자가 있는 소규모 팀이나 내부 도구: 병렬 요청 설정을 높이면 Ollama도 작동하지만, 사용량이 늘어남에 따라 vLLM이 더 많은 여유를 제공합니다. 다수의 사용자를 서빙하는 프로덕션 배포: vLLM, 구조화된 출력이 많거나 멀티턴 워크로드라면 <a href="/ko/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a>.',
          '세 가지 모두 대부분의 주요 오픈 웨이트 모델 계열을 지원하므로, 모델 가용성이 이 선택을 결정하는 경우는 드뭅니다 — 동시성과 배포 맥락이 결정해야 합니다.',
        ],
        columns: ['도구', '적합한 용도', '동시성', '상태'],
        rows: [
          { '도구': 'Ollama', '적합한 용도': '단일 사용자 로컬 사용', '동시성': '대기열; OLLAMA_NUM_PARALLEL', '상태': '빈번한 릴리스' },
          { '도구': 'vLLM', '적합한 용도': '다중 사용자 서빙', '동시성': '연속 배치 처리', '상태': '빈번한 릴리스' },
          { '도구': 'TGI', '적합한 용도': '기존 배포 전용', '동시성': '연속 배치 처리', '상태': '유지보수 모드' },
        ],
      },
      selfHosting: {
        id: 'self-hosting',
        title: '셀프 호스팅은 프롬프트를 자체 인프라에 두고 OpenAI 호환 API를 제공합니다',
        content: [
          '세 가지 중 무엇이든 자체 서버나 클라우드 계정에서 실행하면 프롬프트와 출력이 제3자 모델 API가 아니라 자체 인프라로 전달됩니다. 이는 금융 서비스 같은 규제 산업의 온프레미스 구성의 출발점이지만, 그것만으로 배포가 규정을 준수하게 되는 것은 아닙니다 — 접근 통제, 로깅, 모델 라이선스, 데이터 보호 의무는 여전히 자체 법률 검토가 필요합니다.',
          'Python 백엔드에 통합하는 것은 간단합니다. Ollama는 스트리밍을 지원하는 <a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">OpenAI 호환 엔드포인트</a>(채팅 완성, 완성, 임베딩, 모델 목록)를 제공하고, vLLM은 vllm serve로 시작하는 <a href="https://docs.vllm.ai/en/latest/serving/online_serving/" class="text-primary hover:underline" rel="noopener noreferrer">OpenAI 호환 서버</a>를 포함합니다. 공식 OpenAI 클라이언트를 로컬 기본 URL로 지정하면 같은 코드가 둘 다에서 작동합니다.',
          '코딩 에이전트의 경우 도구를 바꾸기 전에 동시성을 먼저 조정하십시오. Ollama는 요청을 대기열에 넣고(<a href="https://docs.ollama.com/faq" class="text-primary hover:underline" rel="noopener noreferrer">OLLAMA_MAX_QUEUE</a>까지, 기본값 512, 초과 시 HTTP 503 반환) 모델당 OLLAMA_NUM_PARALLEL개의 요청을 처리하며, 메모리 사용량은 병렬 수에 컨텍스트 길이를 곱한 만큼 늘어납니다. 에이전트 하나는 대체로 Ollama로 충분하고, 여러 에이전트가 GPU 서버 한 대를 공유할 때 vLLM의 배치 처리가 효과를 발휘합니다. <a href="/ko/prompt-bites/best-local-llm-benchmarking-tool" class="text-primary hover:underline" rel="noopener noreferrer">로컬 벤치마킹 도구</a>로 자신의 프롬프트를 사용해 측정하십시오.',
          '각 프로젝트는 자체 문서를 공개합니다: <a href="https://docs.ollama.com" class="text-primary hover:underline" rel="noopener noreferrer">Ollama 문서</a>, <a href="https://docs.vllm.ai" class="text-primary hover:underline" rel="noopener noreferrer">vLLM 문서</a>, <a href="https://huggingface.co/docs/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">TGI 문서</a>. 릴리스가 빈번한 것은 Ollama와 vLLM 두 가지입니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Ollama는 다수의 동시 요청을 전혀 처리할 수 없습니까?',
            a: '처리할 수 있습니다. Ollama는 요청을 대기열에 넣고(기본 최대 512개, 초과 시 HTTP 503 오류), OLLAMA_NUM_PARALLEL을 높이면 모델당 여러 요청을 병렬로 처리할 수 있지만 그만큼 메모리를 더 씁니다. vLLM처럼 프로덕션 규모의 동시 트래픽에 최적화되어 있지는 않으므로, 동시 사용자가 많다면 vLLM이 더 적합합니다.',
          },
          {
            q: 'vLLM은 GGUF 모델을 지원합니까?',
            a: '부분적으로 지원합니다. vLLM은 GGUF 파일을 불러올 수 있지만 <a href="https://docs.vllm.ai/en/latest/features/quantization/gguf.html" class="text-primary hover:underline" rel="noopener noreferrer">문서</a>는 이 지원을 매우 실험적이고 최적화가 덜 된 것으로 설명하며, 현재는 외부 vllm-gguf-plugin이 필요합니다. vLLM 프로덕션 서빙에는 AWQ, GPTQ 또는 전체 정밀도 Hugging Face 체크포인트를 권장합니다.',
          },
          {
            q: 'TGI는 무료로 사용할 수 있으며 아직 유지보수됩니까?',
            a: 'TGI는 Apache-2.0 라이선스의 오픈소스입니다. 자체 GPU에서 셀프 호스팅하면 하드웨어 비용 외에는 무료이며, Hugging Face의 관리형 Inference Endpoints는 호스팅된 컴퓨팅에 대해 요금을 부과합니다. 다만 유지보수 모드여서 사소한 수정만 받아들이며, Hugging Face는 신규 프로젝트에 vLLM과 SGLang을 권장합니다.',
          },
          {
            q: '모델을 다시 다운로드하지 않고 나중에 Ollama에서 vLLM으로 전환할 수 있습니까?',
            a: '직접적으로는 불가능합니다 — 두 도구는 일반적으로 서로 다른 모델 형식(Ollama는 GGUF, vLLM은 전체 정밀도나 AWQ/GPTQ 체크포인트)을 기대하므로, 전환은 일반적으로 기존 파일을 재사용하기보다 새 형식으로 모델을 얻는 것을 의미합니다.',
          },
          {
            q: 'Ollama는 스트리밍을 지원하는 OpenAI 호환 API를 제공합니까?',
            a: '예. Ollama는 채팅 완성, 완성, 임베딩, 모델에 대한 OpenAI 호환 엔드포인트를 제공하며 채팅 및 완성 엔드포인트에서 스트리밍을 지원합니다. OpenAI API의 일부만 다루므로 지원되지 않는 기능은 <a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">호환성 페이지</a>에서 확인하십시오.',
          },
          {
            q: '규제 산업 기업의 온프레미스 LLM 배포에는 어떤 도구가 적합합니까?',
            a: '세 가지 모두 자체 하드웨어에서 완전히 실행할 수 있으므로 부하에 따라 선택합니다. 작은 내부 도구에는 Ollama, 다수의 동시 사용자에는 vLLM입니다. 규정 준수는 서빙 도구가 아니라 접근 관리, 감사 로그, 모델 라이선스, 법률 검토 같은 자체 통제에 달려 있습니다.',
          },
          {
            q: '여러 코딩 에이전트를 위해 LLM을 호스팅하려면 무엇을 사용해야 합니까?',
            a: '에이전트 한두 개가 한 대의 머신을 공유한다면 Ollama로 시작하고, 요청이 밀리면 병렬 요청 설정을 높이십시오. 많은 에이전트나 개발자가 GPU 서버 한 대에 동시에 접속하면 vLLM으로 옮기십시오. 연속 배치 처리가 GPU 활용도를 높게 유지합니다. 결정하기 전에 실제 프롬프트로 벤치마크하십시오.',
          },
          {
            q: '신규 배포에서 TGI 대신 무엇을 선택해야 합니까?',
            a: '다중 사용자 GPU 서빙에서는 vLLM이 가장 가까운 대체재이며, Hugging Face가 언급하는 또 다른 엔진은 SGLang입니다. 단일 사용자 로컬 사용에는 Ollama나 llama.cpp가 여전히 더 간단한 길입니다.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[Ollama 대 LM Studio](/ko/prompt-bites/ollama-vs-lm-studio) — 두 단일 사용자 로컬 도구 비교',
          '[GGUF 대 GPTQ 대 AWQ](/ko/prompt-bites/gguf-vs-gptq-vs-awq) — 각 도구가 기대하는 형식',
          '[Ollama를 위한 최적의 프론트엔드](/ko/prompt-bites/best-frontend-for-ollama) — Ollama와 채팅 UI 결합하기',
          '[SGLang 대 vLLM](/ko/prompt-bites/sglang-vs-vllm-local-serving) — 활발히 개발되는 두 서빙 엔진 중 선택하기',
          '[vLLM 설명](/ko/power-local-llm/vllm-explained) — vLLM의 작동 방식과 도입 시점',
          '[로컬 LLM용 OpenAI 호환 API 가이드](/ko/local-llms/local-llm-openai-compatible-api) — Python 코드를 로컬 서버에 연결하기',
        ],
      },
    },
  },
  pt: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-vs-vllm-vs-tgi-overview-hero-pt.webp',
    title: 'Ollama vs vLLM vs TGI: Qual Você Deve Usar para Servir Localmente?',
    seoTitle: 'Ollama vs vLLM vs TGI para Servir Localmente 2026',
    metaDescription: 'O Ollama serve para uso local de um usuário; o vLLM, para muitos simultâneos. O TGI está em modo de manutenção: escolha vLLM ou SGLang em novos projetos.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Desenvolvedores escolhendo um servidor de inferência para uso local ou em pequena escala em produção',
    siblingBites: ['ollama-vs-lm-studio', 'gguf-vs-gptq-vs-awq', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock: '<strong>O Ollama é melhor para uso local de um único usuário; o vLLM é a escolha para servir muitos usuários simultâneos, e o TGI agora está em modo de manutenção.</strong> O Ollama envolve o llama.cpp para configuração simples e compatibilidade com GGUF, enquanto o PagedAttention do vLLM e o batching contínuo maximizam a taxa de transferência em muitas requisições simultâneas. A Hugging Face colocou o <a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">TGI em modo de manutenção</a> e recomenda vLLM e SGLang daqui em diante, então escolha o TGI apenas para manter uma implantação existente.',
    toc: [
      { label: 'Melhor Escolha: Combine a Ferramenta às Suas Necessidades de Concorrência', anchor: '#best-pick' },
      { label: 'Ollama vs vLLM vs TGI — Quando Usar Cada Um', anchor: '#comparison' },
      { label: 'A auto-hospedagem mantém os prompts na sua infraestrutura e oferece APIs compatíveis com OpenAI', anchor: '#self-hosting' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leitura Relacionada', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Devo usar Ollama, vLLM ou TGI para servir LLM local?',
        answer: 'Use Ollama para uso local de um único usuário — é a configuração mais simples. Use vLLM quando precisar servir muitos usuários simultâneos de forma eficiente. A Hugging Face colocou o TGI em modo de manutenção e recomenda vLLM e SGLang, então trate o TGI como uma opção legada.',
        bullets: [
          'Ollama: configuração mais simples, nativo em GGUF, API compatível com OpenAI com streaming — ideal para um único desenvolvedor na própria máquina.',
          'vLLM: gerenciamento de memória PagedAttention + batching contínuo — construído para servir multiusuário de alto rendimento.',
          'TGI (Hugging Face Text Generation Inference): em modo de manutenção — a Hugging Face recomenda vLLM e SGLang para novas implantações.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama: a escolha certa para um único desenvolvedor rodando modelos localmente — configuração mais simples, nativo em GGUF, API compatível com OpenAI',
          'vLLM: construído para servir concorrente de alto rendimento via PagedAttention e batching contínuo',
          'TGI: em modo de manutenção — a Hugging Face recomenda vLLM e SGLang para novas implantações',
          'Escolha com base em usuários simultâneos e necessidades de implantação, não suporte bruto de modelos — os três rodam a maioria dos modelos abertos populares',
          'Os três podem ser auto-hospedados, então prompts e saídas podem ficar na sua própria infraestrutura',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor Escolha: Combine a Ferramenta às Suas Necessidades de Concorrência',
        content: [
          '<strong>O Ollama é a escolha certa para uso local de um único usuário — ele envolve o llama.cpp com uma CLI e API simples, funciona nativamente com o formato GGUF e exige quase nenhuma configuração para colocar um modelo rodando.</strong> Ele não foi projetado para servir eficientemente muitas requisições simultâneas de usuários diferentes ao mesmo tempo; isso é uma decisão deliberada de escopo, não um recurso ausente.',
          'O vLLM é construído especificamente para servir de alto rendimento. Seu mecanismo PagedAttention gerencia a memória de GPU para o cache de atenção de forma muito mais eficiente que abordagens ingênuas, e seu batching contínuo agrupa dinamicamente requisições recebidas para manter alta a utilização da GPU mesmo conforme as gerações de diferentes usuários terminam em momentos diferentes. Essa é a ferramenta certa quando você precisa servir mais que um punhado de usuários simultâneos. O vLLM é lançado sob a licença Apache-2.0 e, segundo seu <a href="https://github.com/vllm-project/vllm" class="text-primary hover:underline" rel="noopener noreferrer">README</a>, oferece suporte a GPUs NVIDIA, AMD e Intel, além de CPUs x86 e ARM.',
          'O TGI (Text Generation Inference da Hugging Face) tinha como alvo o mesmo caso de uso de servir em produção que o vLLM, mas agora está em modo de manutenção: o <a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">README do repositório</a> diz que só são aceitas pequenas correções de bugs, melhorias de documentação e manutenção leve, e recomenda vLLM, SGLang e mecanismos locais como llama.cpp ou MLX daqui em diante. Para uma nova implantação, escolha o vLLM (ou o <a href="/pt/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a>); mantenha o TGI apenas para continuar rodando uma instalação existente.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Ollama vs vLLM vs TGI — Quando Usar Cada Um',
        content: [
          'Um único desenvolvedor, máquina local, uma requisição por vez: Ollama. Time pequeno ou ferramenta interna com um punhado de usuários simultâneos: o Ollama funciona depois que você aumenta a configuração de requisições paralelas, mas o vLLM dá mais folga conforme o uso cresce. Implantação em produção servindo muitos usuários: vLLM, ou <a href="/pt/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a> para cargas com muita saída estruturada ou conversas de vários turnos.',
          'Os três suportam a maioria das principais famílias de modelos de peso aberto, então a disponibilidade de modelos raramente decide essa escolha — concorrência e contexto de implantação devem decidir.',
        ],
        columns: ['Ferramenta', 'Melhor para', 'Concorrência', 'Status'],
        rows: [
          { 'Ferramenta': 'Ollama', 'Melhor para': 'Uso local de um usuário', 'Concorrência': 'Fila; OLLAMA_NUM_PARALLEL', 'Status': 'Versões frequentes' },
          { 'Ferramenta': 'vLLM', 'Melhor para': 'Servir multiusuário', 'Concorrência': 'Batching contínuo', 'Status': 'Versões frequentes' },
          { 'Ferramenta': 'TGI', 'Melhor para': 'Só implantações existentes', 'Concorrência': 'Batching contínuo', 'Status': 'Modo de manutenção' },
        ],
      },
      selfHosting: {
        id: 'self-hosting',
        title: 'A auto-hospedagem mantém os prompts na sua infraestrutura e oferece APIs compatíveis com OpenAI',
        content: [
          'Rodar qualquer um dos três no seu próprio servidor ou conta de nuvem envia prompts e saídas para a sua infraestrutura, em vez de uma API de modelo de terceiros. Esse é o ponto de partida para configurações on-premises em setores regulados, como serviços financeiros, mas não torna uma implantação conforme por si só: controle de acesso, registro, licenças de modelos e obrigações de proteção de dados (como a LGPD) ainda exigem a sua própria revisão jurídica.',
          'Integrar a um backend Python é simples: o Ollama expõe <a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">endpoints compatíveis com OpenAI</a> (chat completions, completions, embeddings e listagem de modelos) com streaming, e o vLLM traz um <a href="https://docs.vllm.ai/en/latest/serving/online_serving/" class="text-primary hover:underline" rel="noopener noreferrer">servidor compatível com OpenAI</a> iniciado com vllm serve. Aponte o cliente oficial da OpenAI para a URL base local e o mesmo código funciona com ambos.',
          'Para agentes de programação, ajuste a concorrência antes de trocar de ferramenta. O Ollama enfileira requisições (até <a href="https://docs.ollama.com/faq" class="text-primary hover:underline" rel="noopener noreferrer">OLLAMA_MAX_QUEUE</a>, 512 por padrão, e depois retorna HTTP 503) e processa OLLAMA_NUM_PARALLEL requisições por modelo, com o uso de memória crescendo com o paralelismo vezes o tamanho do contexto. Um agente geralmente cabe no Ollama; vários agentes dividindo um servidor com GPU é onde o batching do vLLM compensa. Meça com seus próprios prompts usando <a href="/pt/prompt-bites/best-local-llm-benchmarking-tool" class="text-primary hover:underline" rel="noopener noreferrer">uma ferramenta de benchmark local</a>.',
          'Cada projeto publica sua própria documentação: a <a href="https://docs.ollama.com" class="text-primary hover:underline" rel="noopener noreferrer">documentação do Ollama</a>, a <a href="https://docs.vllm.ai" class="text-primary hover:underline" rel="noopener noreferrer">documentação do vLLM</a> e a <a href="https://huggingface.co/docs/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">documentação do TGI</a>. Ollama e vLLM são os dois com lançamentos frequentes.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'O Ollama consegue lidar com múltiplas requisições simultâneas?',
            a: 'Sim. O Ollama enfileira requisições (até 512 por padrão, e depois retorna um erro HTTP 503) e pode processar várias em paralelo por modelo se você aumentar OLLAMA_NUM_PARALLEL, ao custo de mais memória. Ele não é otimizado para tráfego concorrente em escala de produção como o vLLM; com muitos usuários simultâneos, o vLLM é mais adequado.',
          },
          {
            q: 'O vLLM suporta modelos GGUF?',
            a: 'Em parte. O vLLM consegue carregar arquivos GGUF, mas a <a href="https://docs.vllm.ai/en/latest/features/quantization/gguf.html" class="text-primary hover:underline" rel="noopener noreferrer">documentação</a> descreve o suporte como altamente experimental e pouco otimizado, e agora exige o vllm-gguf-plugin externo. Para servir em produção com vLLM, prefira AWQ, GPTQ ou checkpoints Hugging Face em precisão total.',
          },
          {
            q: 'O TGI é gratuito e ainda é mantido?',
            a: 'O TGI é de código aberto sob a licença Apache-2.0. Auto-hospedado na sua própria GPU, é gratuito além dos custos de hardware, enquanto o Inference Endpoints gerenciado da Hugging Face cobra pela computação hospedada. Porém, está em modo de manutenção: só são aceitas pequenas correções e a Hugging Face recomenda vLLM e SGLang para novos projetos.',
          },
          {
            q: 'Posso mudar do Ollama para o vLLM depois sem precisar baixar os modelos de novo?',
            a: 'Não diretamente — as duas ferramentas geralmente esperam formatos de modelo diferentes (GGUF para o Ollama versus checkpoints em precisão total ou AWQ/GPTQ para o vLLM), então a mudança normalmente significa obter o modelo no novo formato em vez de reutilizar arquivos existentes.',
          },
          {
            q: 'O Ollama oferece uma API compatível com OpenAI com streaming?',
            a: 'Sim. O Ollama oferece endpoints compatíveis com OpenAI para chat completions, completions, embeddings e modelos, com streaming nos endpoints de chat e completions. Ele cobre um subconjunto da API da OpenAI; consulte a <a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">página de compatibilidade</a> para ver os recursos sem suporte.',
          },
          {
            q: 'Qual ferramenta serve para uma implantação on-premises de LLM em uma empresa regulada?',
            a: 'Os três podem rodar inteiramente no seu próprio hardware, então a escolha depende da carga: Ollama para uma pequena ferramenta interna, vLLM para muitos usuários simultâneos. A conformidade depende dos seus controles — gestão de acesso, logs de auditoria, licenças de modelos e revisão jurídica — e não da ferramenta de serving.',
          },
          {
            q: 'Qual devo usar para hospedar LLMs para vários agentes de programação?',
            a: 'Comece com o Ollama se um ou dois agentes dividirem uma máquina e aumente a configuração de requisições paralelas se houver fila. Passe para o vLLM quando muitos agentes ou desenvolvedores acessarem um servidor com GPU ao mesmo tempo, pois o batching contínuo mantém alta a utilização da GPU. Faça benchmark com seus prompts reais antes de decidir.',
          },
          {
            q: 'O que escolher no lugar do TGI em uma nova implantação?',
            a: 'O vLLM é o substituto mais próximo para servir multiusuário em GPU, e o SGLang é o outro mecanismo para o qual a Hugging Face aponta. Para uso local de um único usuário, Ollama ou llama.cpp continuam sendo o caminho mais simples.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leitura Relacionada',
        items: [
          '[Ollama vs LM Studio](/pt/prompt-bites/ollama-vs-lm-studio) — comparando duas ferramentas locais de usuário único',
          '[GGUF vs GPTQ vs AWQ](/pt/prompt-bites/gguf-vs-gptq-vs-awq) — os formatos que cada ferramenta espera',
          '[Melhor Frontend para o Ollama](/pt/prompt-bites/best-frontend-for-ollama) — combinando o Ollama com uma interface de chat',
          '[SGLang vs vLLM](/pt/prompt-bites/sglang-vs-vllm-local-serving) — escolhendo entre os dois mecanismos de serving em desenvolvimento ativo',
          '[vLLM explicado](/pt/power-local-llm/vllm-explained) — como o vLLM funciona e quando implantá-lo',
          '[Guia de API compatível com OpenAI para LLMs locais](/pt/local-llms/local-llm-openai-compatible-api) — conectando código Python a um servidor local',
        ],
      },
    },
  },
  zh: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-vs-vllm-vs-tgi-overview-hero-zh.webp',
    title: 'Ollama 对比 vLLM 对比 TGI：本地服务应该使用哪个？',
    seoTitle: '2026 年 Ollama 对比 vLLM 对比 TGI 本地服务',
    metaDescription: 'Ollama 适合单用户本地使用，vLLM 适合大量并发用户。TGI 已进入维护模式，新部署请选择 vLLM 或 SGLang。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: '为本地或小规模生产环境选择推理服务器的开发者',
    siblingBites: ['ollama-vs-lm-studio', 'gguf-vs-gptq-vs-awq', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Ollama 最适合单用户本地使用；服务大量并发用户应选 vLLM，而 TGI 现已进入维护模式。</strong>Ollama 封装了 llama.cpp 以简化配置并兼容 GGUF，而 vLLM 的 PagedAttention 和连续批处理能在许多并发请求中最大化吞吐量。Hugging Face 已将 <a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">TGI 置于维护模式</a>，并建议今后使用 vLLM 和 SGLang，因此只有在维持现有部署时才应选择 TGI。',
    toc: [
      { label: '最佳选择：根据并发需求匹配工具', anchor: '#best-pick' },
      { label: 'Ollama 对比 vLLM 对比 TGI——何时使用哪个', anchor: '#comparison' },
      { label: '自行托管让提示词留在自己的基础设施上，并提供 OpenAI 兼容 API', anchor: '#self-hosting' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: '本地 LLM 服务应该用 Ollama、vLLM 还是 TGI？',
        answer: '单用户本地使用选 Ollama——配置最简单。需要高效服务大量并发用户时，选择 vLLM。Hugging Face 已将 TGI 置于维护模式并推荐 vLLM 和 SGLang，因此应把 TGI 视为遗留选项。',
        bullets: [
          'Ollama：配置最简单，原生支持 GGUF，提供支持流式输出的 OpenAI 兼容 API——非常适合单个开发者在自己机器上运行。',
          'vLLM：PagedAttention 显存管理加连续批处理——专为高吞吐量多用户服务而构建。',
          'TGI（Hugging Face 文本生成推理）：维护模式——Hugging Face 建议新部署使用 vLLM 和 SGLang。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama：单个开发者本地运行模型的正确选择——配置最简单，原生支持 GGUF，提供 OpenAI 兼容 API',
          'vLLM：通过 PagedAttention 和连续批处理为高吞吐量并发服务而构建',
          'TGI：维护模式——Hugging Face 建议新部署使用 vLLM 和 SGLang',
          '应根据并发用户数和部署需求而非单纯的模型支持范围来选择——三者都能运行大多数流行的开放模型',
          '三者都可以自行托管，因此提示词和输出可以留在你自己的基础设施上',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：根据并发需求匹配工具',
        content: [
          '<strong>Ollama 是单用户本地使用的正确选择——它用简单的 CLI 和 API 封装 llama.cpp，原生支持 GGUF 格式，几乎不需要配置就能让模型运行起来。</strong>它并非设计用来高效服务来自不同用户的大量并发请求；这是一个刻意的范围决定，而非缺失的功能。',
          'vLLM 是专为高吞吐量服务而构建的。它的 PagedAttention 机制比朴素方法更高效地管理注意力缓存的 GPU 显存，其连续批处理会动态地将传入请求分组，即使不同用户的生成任务在不同时间结束，也能保持较高的 GPU 利用率。一旦你需要服务超过少数几个并发用户，这就是正确的工具。vLLM 以 Apache-2.0 许可证发布，并且根据其 <a href="https://github.com/vllm-project/vllm" class="text-primary hover:underline" rel="noopener noreferrer">README</a>，支持 NVIDIA、AMD 和 Intel GPU 以及 x86 和 ARM CPU。',
          'TGI（Hugging Face 的文本生成推理）原本面向与 vLLM 相同的生产服务用例，但现已进入维护模式：其<a href="https://github.com/huggingface/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">仓库 README</a>表示只接受小型缺陷修复、文档改进和轻量维护，并建议今后使用 vLLM、SGLang 以及 llama.cpp 或 MLX 等本地引擎。新部署请选择 vLLM（或<a href="/zh/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a>）；仅在需要继续运行现有部署时才保留 TGI。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Ollama 对比 vLLM 对比 TGI——何时使用哪个',
        content: [
          '单个开发者、本地机器、一次一个请求：选 Ollama。服务少量并发用户的小团队或内部工具：调高并行请求设置后 Ollama 也能胜任，但随着使用量增长，vLLM 有更多余量。为许多用户提供服务的生产部署：选 vLLM；结构化输出较多或多轮对话较多的工作负载可选 <a href="/zh/prompt-bites/sglang-vs-vllm-local-serving" class="text-primary hover:underline" rel="noopener noreferrer">SGLang</a>。',
          '三者都支持大多数主流开放权重模型系列，因此模型可用性很少是决定因素——并发量和部署环境才应该是决定因素。',
        ],
        columns: ['工具', '最适合', '并发处理', '状态'],
        rows: [
          { '工具': 'Ollama', '最适合': '单用户本地使用', '并发处理': '排队；OLLAMA_NUM_PARALLEL', '状态': '频繁发布' },
          { '工具': 'vLLM', '最适合': '多用户服务', '并发处理': '连续批处理', '状态': '频繁发布' },
          { '工具': 'TGI', '最适合': '仅限现有部署', '并发处理': '连续批处理', '状态': '维护模式' },
        ],
      },
      selfHosting: {
        id: 'self-hosting',
        title: '自行托管让提示词留在自己的基础设施上，并提供 OpenAI 兼容 API',
        content: [
          '在自己的服务器或云账户上运行三者中的任何一个，提示词和输出会发送到你自己的基础设施，而不是第三方模型 API。这是金融服务等受监管行业搭建本地部署的起点，但它本身并不能使部署合规——访问控制、日志记录、模型许可证和数据保护义务仍需要你自己的法律审查。',
          '接入 Python 后端很简单：Ollama 提供支持流式输出的<a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">OpenAI 兼容端点</a>（聊天补全、补全、嵌入和模型列表），vLLM 则自带通过 vllm serve 启动的<a href="https://docs.vllm.ai/en/latest/serving/online_serving/" class="text-primary hover:underline" rel="noopener noreferrer">OpenAI 兼容服务器</a>。把官方 OpenAI 客户端指向本地基础 URL，同一份代码就能同时适用于两者。',
          '对于编码智能体，先调整并发再考虑换工具。Ollama 会将请求排队（上限为 <a href="https://docs.ollama.com/faq" class="text-primary hover:underline" rel="noopener noreferrer">OLLAMA_MAX_QUEUE</a>，默认 512，超出后返回 HTTP 503），并且每个模型同时处理 OLLAMA_NUM_PARALLEL 个请求，显存占用随并行数乘以上下文长度增长。一个智能体通常用 Ollama 就够了；多个智能体共用一台 GPU 服务器时，vLLM 的批处理才真正划算。请使用<a href="/zh/prompt-bites/best-local-llm-benchmarking-tool" class="text-primary hover:underline" rel="noopener noreferrer">本地基准测试工具</a>，用你自己的提示词进行测量。',
          '每个项目都有自己的官方文档：<a href="https://docs.ollama.com" class="text-primary hover:underline" rel="noopener noreferrer">Ollama 文档</a>、<a href="https://docs.vllm.ai" class="text-primary hover:underline" rel="noopener noreferrer">vLLM 文档</a>和<a href="https://huggingface.co/docs/text-generation-inference" class="text-primary hover:underline" rel="noopener noreferrer">TGI 文档</a>。发布频繁的是 Ollama 和 vLLM 这两个。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Ollama 能处理多个并发请求吗？',
            a: '可以。Ollama 会将请求排队（默认最多 512 个，超出后返回 HTTP 503 错误），调高 OLLAMA_NUM_PARALLEL 后每个模型可并行处理多个请求，但会占用更多内存。它并不像 vLLM 那样针对生产级并发流量进行优化，因此并发用户很多时 vLLM 更合适。',
          },
          {
            q: 'vLLM 支持 GGUF 模型吗？',
            a: '部分支持。vLLM 可以加载 GGUF 文件，但其<a href="https://docs.vllm.ai/en/latest/features/quantization/gguf.html" class="text-primary hover:underline" rel="noopener noreferrer">文档</a>称该支持为高度实验性且未充分优化，并且现在需要外部的 vllm-gguf-plugin。用于 vLLM 的生产服务时，建议优先使用 AWQ、GPTQ 或全精度 Hugging Face 检查点。',
          },
          {
            q: 'TGI 免费使用吗？还在维护吗？',
            a: 'TGI 是 Apache-2.0 许可证的开源项目。在自己的 GPU 上自托管除硬件成本外免费，而 Hugging Face 的托管 Inference Endpoints 会对托管计算收费。不过它已进入维护模式：只接受小型修复，Hugging Face 建议新项目使用 vLLM 和 SGLang。',
          },
          {
            q: '我能在不重新下载模型的情况下从 Ollama 切换到 vLLM 吗？',
            a: '不能直接切换——这两个工具通常期望不同的模型格式（Ollama 用 GGUF，vLLM 用全精度或 AWQ/GPTQ 检查点），因此切换通常意味着获取新格式的模型，而非重用现有文件。',
          },
          {
            q: 'Ollama 提供支持流式输出的 OpenAI 兼容 API 吗？',
            a: '提供。Ollama 为聊天补全、补全、嵌入和模型提供 OpenAI 兼容端点，聊天和补全端点支持流式输出。它只覆盖 OpenAI API 的一部分，不支持的功能请查看<a href="https://docs.ollama.com/api/openai-compatibility" class="text-primary hover:underline" rel="noopener noreferrer">兼容性页面</a>。',
          },
          {
            q: '受监管企业的本地部署 LLM 应选哪个工具？',
            a: '三者都可以完全运行在你自己的硬件上，因此按负载来选：小型内部工具用 Ollama，大量并发用户用 vLLM。合规取决于你自己的管控——访问管理、审计日志、模型许可证和法律审查——而不是服务工具本身。',
          },
          {
            q: '为多个编码智能体托管 LLM 应该用哪个？',
            a: '如果一两个智能体共用一台机器，先用 Ollama，请求排队时调高其并行请求设置。当许多智能体或开发者同时访问一台 GPU 服务器时，换用 vLLM，连续批处理能保持较高的 GPU 利用率。决定前请用你的真实提示词做基准测试。',
          },
          {
            q: '新部署应选什么来替代 TGI？',
            a: '对于多用户 GPU 服务，vLLM 是最接近的替代品，SGLang 则是 Hugging Face 指向的另一个引擎。对于单用户本地使用，Ollama 或 llama.cpp 仍是更简单的路径。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[Ollama 对比 LM Studio](/zh/prompt-bites/ollama-vs-lm-studio) — 对比两个单用户本地工具',
          '[GGUF 对比 GPTQ 对比 AWQ](/zh/prompt-bites/gguf-vs-gptq-vs-awq) — 各工具期望的格式',
          '[Ollama 的最佳前端](/zh/prompt-bites/best-frontend-for-ollama) — 将 Ollama 与聊天界面配对',
          '[SGLang 对比 vLLM](/zh/prompt-bites/sglang-vs-vllm-local-serving) — 在两个活跃开发的服务引擎之间做选择',
          '[vLLM 详解](/zh/power-local-llm/vllm-explained) — vLLM 的工作原理及何时部署',
          '[本地 LLM 的 OpenAI 兼容 API 指南](/zh/local-llms/local-llm-openai-compatible-api) — 将 Python 代码连接到本地服务器',
        ],
      },
    },
  },
}

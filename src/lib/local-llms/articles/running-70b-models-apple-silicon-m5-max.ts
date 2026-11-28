import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Running 70B Models on Apple Silicon 2026: M5 Max Guide',
    seoTitle: '70B on M5 Max: Memory, Speed Estimates and Setup 2026',
    intro: 'How to run 70B-class models locally on an Apple Silicon M5 Max: which quantization fits in memory, speed estimates calculated from memory bandwidth (not measurements), setup with Ollama and MLX, US prices, and the limits of comparing a local model with cloud APIs.',
    metaDescription: 'Run Llama 3.3 70B on an M5 Max Mac: 43–75 GB downloads, estimated 5–11 tok/s from memory bandwidth (not measured), Ollama setup and US prices.',
    heroImage: '/images/running-70b-models-apple-silicon-m5-max-hardware-comparison-hero-en.webp',
    twitterDescription: '70B on M5 Max: 43–75 GB downloads, an estimated 5–11 tok/s (not measured), setup steps and US prices.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'DeepSeek-R1-Distill-Llama-70B',
      'Qwen2.5-72B',
      'Llama 3.1 8B',
    ],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: 'Mac owners and prospective buyers who want to run large models locally.',
    readTime: '16 min read',
    educationalLevel: 'Advanced',
    primaryTerm: '70B models Apple Silicon',
    targetKeywords: ['70B model Mac', 'M5 Max 128GB LLM', 'run 70B locally', 'Llama 70B Apple Silicon', 'large model local inference'],
    ctaText: 'Running a 70B model locally? With PromptQuorum you can compare its answers with cloud models side by side on your own prompts.',
    leadAnswerBlock: '**Llama 3.3 70B fits on an M5 Max with enough unified memory: the Ollama downloads are 43 GB (Q4_K_M), 50 GB (Q5_K_M) and 75 GB (Q8_0). From Apple\'s 614 GB/s bandwidth figure we estimate about 9–11, 7–10 and 5–7 tok/s. These are calculated estimates, not measurements. 128 GB leaves comfortable room; 64 GB takes Q4_K_M with limited context.**',
    quickAnswerTop: {
      en: {
        question: 'Can I run 70B models on an M5 Max?',
        answer: 'Yes, with enough unified memory. Llama 3.3 70B in Q4_K_M is a 43 GB download. A 64 GB M5 Max can hold it with limited context; 128 GB also takes Q5_K_M (50 GB) and Q8_0 (75 GB). Estimated speed at 614 GB/s: about 9–11 tok/s for Q4_K_M, 7–10 for Q5_K_M and 5–7 for Q8_0. These are estimates, not measurements.',
        bullets: [
          'Q4_K_M: 43 GB, about 9–11 tok/s (estimate)',
          'Q5_K_M: 50 GB, about 7–10 tok/s (estimate)',
          'Q8_0: 75 GB, about 5–7 tok/s (estimate)',
          '64 GB: Q4_K_M only, with limited context',
          'The 36 GB M5 Max is too small for these 70B files',
          'Setup: brew install ollama, then ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
      de: {
        question: 'Kann ich 70B-Modelle auf einem M5 Max ausführen?',
        answer: 'Ja, mit ausreichend Unified Memory. Llama 3.3 70B in Q4_K_M ist ein Download von 43 GB. Ein M5 Max mit 64 GB fasst ihn bei begrenztem Kontext; 128 GB reichen auch für Q5_K_M (50 GB) und Q8_0 (75 GB). Geschätztes Tempo bei 614 GB/s: etwa 9–11 Tok/s für Q4_K_M, 7–10 für Q5_K_M und 5–7 für Q8_0. Das sind Schätzungen, keine Messungen.',
        bullets: [
          'Q4_K_M: 43 GB, etwa 9–11 Tok/s (Schätzung)',
          'Q5_K_M: 50 GB, etwa 7–10 Tok/s (Schätzung)',
          'Q8_0: 75 GB, etwa 5–7 Tok/s (Schätzung)',
          '64 GB: nur Q4_K_M, mit begrenztem Kontext',
          'Der M5 Max mit 36 GB ist für diese 70B-Dateien zu klein',
          'Setup: brew install ollama, dann ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
      fr: {
        question: 'Puis-je exécuter des modèles 70B sur un M5 Max ?',
        answer: 'Oui, avec assez de mémoire unifiée. Llama 3.3 70B en Q4_K_M représente 43 Go à télécharger. Un M5 Max de 64 Go peut le charger avec un contexte limité ; 128 Go acceptent aussi Q5_K_M (50 Go) et Q8_0 (75 Go). Débit estimé à 614 Go/s : environ 9–11 tok/s en Q4_K_M, 7–10 en Q5_K_M et 5–7 en Q8_0. Ce sont des estimations, pas des mesures.',
        bullets: [
          'Q4_K_M : 43 Go, environ 9–11 tok/s (estimation)',
          'Q5_K_M : 50 Go, environ 7–10 tok/s (estimation)',
          'Q8_0 : 75 Go, environ 5–7 tok/s (estimation)',
          '64 Go : Q4_K_M uniquement, avec un contexte limité',
          'Le M5 Max 36 Go est trop petit pour ces fichiers 70B',
          'Installation : brew install ollama, puis ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
      ja: {
        question: 'M5 Maxで70Bモデルは動きますか？',
        answer: 'はい、ユニファイドメモリが足りれば動きます。Llama 3.3 70BのQ4_K_Mは43 GBのダウンロードです。64 GBのM5 Maxでは限られたコンテキストで読み込めます。128 GBならQ5_K_M（50 GB）やQ8_0（75 GB）も収まります。614 GB/sでの推定速度は、Q4_K_Mで約9〜11 tok/s、Q5_K_Mで7〜10、Q8_0で5〜7です。実測ではなく推定です。',
        bullets: [
          'Q4_K_M：43 GB、約9〜11 tok/s（推定）',
          'Q5_K_M：50 GB、約7〜10 tok/s（推定）',
          'Q8_0：75 GB、約5〜7 tok/s（推定）',
          '64 GB：Q4_K_Mのみ、コンテキストは限られます',
          '36 GBのM5 Maxは、これらの70Bファイルには不足です',
          '導入：brew install ollama の後に ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
      zh: {
        question: 'M5 Max 能运行 70B 模型吗？',
        answer: '可以，前提是统一内存足够。Llama 3.3 70B 的 Q4_K_M 版本下载大小为 43 GB。64 GB 的 M5 Max 可在有限上下文下加载；128 GB 还能装下 Q5_K_M（50 GB）和 Q8_0（75 GB）。按 614 GB/s 估算的速度：Q4_K_M 约 9–11 tok/s，Q5_K_M 约 7–10，Q8_0 约 5–7。以上为估算，并非实测。',
        bullets: [
          'Q4_K_M：43 GB，约 9–11 tok/s（估算）',
          'Q5_K_M：50 GB，约 7–10 tok/s（估算）',
          'Q8_0：75 GB，约 5–7 tok/s（估算）',
          '64 GB：仅适合 Q4_K_M，上下文有限',
          '36 GB 的 M5 Max 装不下这些 70B 文件',
          '安装：brew install ollama，然后 ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: 'What Meta Reports for 70B', anchor: '#why' },
      { label: 'Hardware and Speed Estimates', anchor: '#hardware' },
      { label: 'Step-by-Step Setup', anchor: '#setup' },
      { label: 'Test Quality Yourself', anchor: '#quality' },
      { label: 'Quantization', anchor: '#quantization' },
      { label: 'Other Large Models', anchor: '#alternatives' },
      { label: 'Local 70B vs Cloud APIs', anchor: '#vs-cloud' },
      { label: 'Use Cases', anchor: '#use-cases' },
      { label: 'Speed: MLX, Ollama and Tips', anchor: '#speed-opts' },
      { label: 'M5 Ultra Estimates', anchor: '#m5ultra' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Articles', anchor: '#related-articles' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'What Meta Reports for Llama 3.3 70B',
        content: [
          'These scores come from Meta\'s <a href="https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct" class="text-primary hover:underline">Llama 3.3 model card</a>. They are vendor-reported results for the model itself, not for a Q4, Q5 or Q8 build on a Mac. Scores from different publishers use different test setups, so this page does not put them side by side with cloud models.',
        ],
        tableFormat: true,
        columns: [
          'Benchmark',
          'Setting',
          'Score reported by Meta',
        ],
        rows: [
          {
            Benchmark: 'MMLU (general knowledge)',
            Setting: '0-shot, chain-of-thought',
            'Score reported by Meta': '86.0',
          },
          {
            Benchmark: 'HumanEval (code)',
            Setting: '0-shot, pass@1',
            'Score reported by Meta': '88.4',
          },
          {
            Benchmark: 'MATH (math)',
            Setting: 'chain-of-thought',
            'Score reported by Meta': '77.0',
          },
          {
            Benchmark: 'MGSM (multilingual math)',
            Setting: 'as listed by Meta',
            'Score reported by Meta': '91.1',
          },
          {
            Benchmark: 'IFEval (instruction following)',
            Setting: 'as listed by Meta',
            'Score reported by Meta': '92.1',
          },
        ],
        note: 'A benchmark score does not tell you how well a quantized build handles your task. Test it with your own prompts.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'A 70B model runs on an M5 Max with 64 GB or more of unified memory: Q4_K_M (43 GB) fits on 64 GB with limited context, and 128 GB also takes Q5_K_M and Q8_0.' },
          { type: 'plain-terms', text: 'The whole model has to sit in memory, together with its context, macOS and your other apps. More memory buys room; memory bandwidth mostly sets the speed.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'What Hardware Runs 70B Models',
        tableFormat: true,
        columns: [
          'Hardware',
          'Quantization',
          'Download size',
          'tok/s',
          'Basis',
          'Fits?',
        ],
        rows: [
          {
            Hardware: 'M3 Max 96GB',
            Quantization: 'Q4_K_M',
            'Download size': '43 GB',
            'tok/s': '~4–6',
            Basis: 'Estimate',
            'Fits?': '✓ Yes',
          },
          {
            Hardware: 'M3 Max 128GB',
            Quantization: 'Q5_K_M',
            'Download size': '50 GB',
            'tok/s': '~5–6',
            Basis: 'Estimate',
            'Fits?': '✓ Yes',
          },
          {
            Hardware: 'M4 Max 128GB',
            Quantization: 'Q5_K_M',
            'Download size': '50 GB',
            'tok/s': '~7–9',
            Basis: 'Estimate',
            'Fits?': '✓ Yes',
          },
          {
            Hardware: 'M5 Max 128GB',
            Quantization: 'Q4_K_M',
            'Download size': '43 GB',
            'tok/s': '~9–11',
            Basis: 'Estimate',
            'Fits?': '✓ Yes',
          },
          {
            Hardware: 'M5 Max 128GB',
            Quantization: 'Q5_K_M',
            'Download size': '50 GB',
            'tok/s': '~7–10',
            Basis: 'Estimate',
            'Fits?': '✓ Yes',
          },
          {
            Hardware: 'M5 Max 128GB',
            Quantization: 'Q8_0',
            'Download size': '75 GB',
            'tok/s': '~5–7',
            Basis: 'Estimate',
            'Fits?': '✓ Yes',
          },
          {
            Hardware: 'M5 Ultra 256GB',
            Quantization: 'FP16',
            'Download size': '141 GB',
            'tok/s': '~5–7',
            Basis: 'Estimate',
            'Fits?': '✓ Yes',
          },
          {
            Hardware: 'RTX 4090 24GB',
            Quantization: 'Q4_K_M',
            'Download size': '43 GB',
            'tok/s': '~1–5',
            Basis: 'Published estimates',
            'Fits?': '✗ Not fully',
          },
          {
            Hardware: '2× RTX 3090 48GB',
            Quantization: 'Q4_K_M',
            'Download size': '43 GB',
            'tok/s': '19.5–31.9',
            Basis: 'Third-party test',
            'Fits?': '✓ Yes',
          },
          {
            Hardware: '2× RTX 4090 48GB',
            Quantization: 'Q4_K_M',
            'Download size': '43 GB',
            'tok/s': '—',
            Basis: 'No figure checked',
            'Fits?': '✓ Yes',
          },
          {
            Hardware: '4× RTX 3090 96GB',
            Quantization: 'Q8_0',
            'Download size': '75 GB',
            'tok/s': '—',
            Basis: 'No figure checked',
            'Fits?': '✓ Yes',
          },
        ],
        note: 'How we estimate: a dense model reads roughly its whole file for every token, so we take 60–80% of memory bandwidth divided by file size. Real speed depends on software, context length, thermals and settings. PromptQuorum has not benchmarked these systems. Apple\'s published bandwidth: M3 Max 300 GB/s (96 GB version) or 400 GB/s (128 GB), M4 Max 546 GB/s (128 GB), M5 Max 460 GB/s (36 GB) or 614 GB/s (48, 64 and 128 GB), M5 Ultra 1.2 TB/s (<a href="https://www.apple.com/mac-studio/specs/" class="text-primary hover:underline">Apple Mac Studio specs</a>). The dual RTX 3090 figure is a <a href="https://computingforgeeks.com/build-dual-rtx-3090-llm/" class="text-primary hover:underline">ComputingForGeeks test</a> dated 19 October 2026 on a rented machine with cards capped at 290 W: 19.5 tok/s with the default layer split, 31.9 with tensor split. On this basis, two RTX 3090s can be clearly faster than an M5 Max; the Mac offers more memory in one machine. The 1–5 tok/s range for a single 24 GB card with CPU offload is a published estimate from <a href="https://insiderllm.com/guides/running-70b-models-locally-vram-guide/" class="text-primary hover:underline">InsiderLLM</a>. US Mac Studio prices from <a href="https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios" class="text-primary hover:underline">Daring Fireball\'s table</a> of 25 August 2026, with a 512 GB SSD: M5 Max 36 GB $2,499 (too small for 70B), 64 GB $3,499, 128 GB $5,099. The cheapest 64 GB Mac mini (M5 Pro, 15-core CPU, 512 GB SSD) is $2,699; we estimate about 4–5 tok/s for it. Check Apple\'s store for current prices.',
      },
      setupInstall: {
        id: 'setup',
        title: 'Step-by-Step: Running 70B with Ollama',
        content: [
          'Step 1: check your memory. Step 2: install Ollama and start the server with settings for one large model. Leave this terminal open and use a second one for the next steps.',
        ],
        codeBlock: `# Step 1: check unified memory
system_profiler SPHardwareDataType | grep Memory

# Step 2: install Ollama
brew install ollama

# Start the server: one request at a time, keep the model loaded for 1 hour
OLLAMA_KEEP_ALIVE=1h OLLAMA_NUM_PARALLEL=1 ollama serve`,
        codeLanguage: 'bash',
      },
      setupPull: {
        id: 'setup-pull',
        title: 'Step 3: Pull the 70B Model',
        content: [
          'Download time depends on your connection. By arithmetic alone, 43–75 GB takes at least about 1–2 hours at 100 Mbps and about 6–10 minutes at 1 Gbps.',
        ],
        codeBlock: `# Q4_K_M, 43 GB download
ollama pull llama3.3:70b

# Q5_K_M, 50 GB download
ollama pull llama3.3:70b-instruct-q5_K_M

# Q8_0, 75 GB download
ollama pull llama3.3:70b-instruct-q8_0`,
        codeLanguage: 'bash',
      },
      setupRun: {
        id: 'setup-run',
        title: 'Steps 4–6: First Run, Check GPU Use, Call the API',
        content: [
          'The first request has to load the model into memory, so it takes longer. Later requests skip loading while the model stays loaded. macOS limits how much unified memory the GPU may use, so check with ollama ps that the model is on the GPU, especially on 64 GB.',
        ],
        codeBlock: `# Step 4: first run, with timing statistics
ollama run llama3.3:70b --verbose "Write a 200-word essay on local AI"

# Step 5: check that the model is loaded on the GPU
ollama ps

# Step 6: call the local API
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.3:70b",
  "messages": [{"role": "user", "content": "Explain quantum computing"}]
}'`,
        codeLanguage: 'bash',
      },
      quality8B: {
        id: 'quality',
        title: 'Compare 8B and 70B on Your Own Prompt',
        content: [
          'This page publishes no sample answers from either model, because one prompt proves little and we have no documented test run to show.',
          'Run the same prompt in both models, for example the one below, and compare the results.',
        ],
        codeBlock: `# Same prompt, two models
PROMPT="Explain why a stack overflow happens in recursive functions, then write a Python function that stops runaway recursion before it crashes."
ollama run llama3.1:8b "$PROMPT"
ollama run llama3.3:70b "$PROMPT"`,
        codeLanguage: 'bash',
        note: 'Run the code each model writes. Check that it is correct, handles edge cases and explains the problem accurately.',
      },
      quality70B: {
        id: 'quality-70b',
        title: 'A Reference Solution to Check Against',
        codeBlock: `import sys
import functools

def detect_recursion(threshold=900):
    def decorator(func):
        depth = 0
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            nonlocal depth
            depth += 1
            try:
                if depth > threshold:
                    raise RecursionError(
                        f"Detected potential infinite recursion at depth {depth}"
                    )
                return func(*args, **kwargs)
            finally:
                depth -= 1
        return wrapper
    return decorator`,
        codeLanguage: 'python',
        note: 'This depth-guard decorator was written as a reference for the prompt above. It is not model output. It stops a wrapped recursive function once it passes a set depth; it cannot prove that recursion is infinite.',
      },
      quantization: {
        id: 'quantization',
        title: 'Quantization for 70B Models',
        items: [
          'Ollama lists these Llama 3.3 70B downloads: Q4_K_M 43 GB, Q5_K_M 50 GB, Q8_0 75 GB, FP16 141 GB.',
          'Smaller quantizations generally lose some quality. How much depends on the model and the task, and this page has not measured it.',
          'A practical approach: start with Q4_K_M, then try Q5_K_M or Q8_0 if your own tests show errors that matter. Higher precision does not make output safe to use unchecked.',
          'Memory: the file is only the minimum. Context, macOS and other apps need more, so 75 GB for Q8_0 calls for a 128 GB Mac.',
          'Estimated speed at 614 GB/s: Q4_K_M about 9–11, Q5_K_M about 7–10, Q8_0 about 5–7 tok/s. At 10 tok/s, 500 tokens take about 50 seconds.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Other Large Models for Apple Silicon',
        tableFormat: true,
        columns: [
          'Model',
          'Download size',
          'Notes',
          'Estimated tok/s on M5 Max (614 GB/s)',
        ],
        rows: [
          {
            Model: 'Llama 3.3 70B Instruct',
            'Download size': '43 GB (Q4_K_M), 50 GB (Q5_K_M)',
            Notes: 'General-purpose; Llama 3.3 Community License',
            'Estimated tok/s on M5 Max (614 GB/s)': '~9–11 (Q4), ~7–10 (Q5)',
          },
          {
            Model: 'DeepSeek-R1-Distill-Llama-70B',
            'Download size': '43 GB (deepseek-r1:70b)',
            Notes: 'Llama-based distill that writes reasoning steps',
            'Estimated tok/s on M5 Max (614 GB/s)': '~9–11',
          },
          {
            Model: 'Qwen2.5-72B Instruct',
            'Download size': '47 GB (Q4_K_M), 54 GB (Q5_K_M)',
            Notes: 'Check the Qwen license before commercial use',
            'Estimated tok/s on M5 Max (614 GB/s)': '~8–10 (Q4), ~7–9 (Q5)',
          },
        ],
        note: 'The full DeepSeek-R1 (671B) is a different, far larger model than the 70B distill. Download sizes are from the Ollama library. Speeds are bandwidth estimates, not benchmarks. This page does not rank these models by quality. Read each model\'s license before use.',
      },
      alternativesPull: {
        id: 'alternatives-pull',
        title: 'Pull Alternative Models',
        codeBlock: `ollama pull llama3.3:70b-instruct-q5_K_M
ollama pull deepseek-r1:70b
ollama pull qwen2.5:72b-instruct-q4_K_M`,
        codeLanguage: 'bash',
      },
      vsCloud: {
        id: 'vs-cloud',
        title: 'Local 70B vs Cloud APIs',
        tableFormat: true,
        columns: [
          'Criterion',
          'Local 70B on a Mac',
          'Hosted cloud API',
        ],
        rows: [
          {
            Criterion: 'Where prompts are processed',
            'Local 70B on a Mac': 'On your Mac',
            'Hosted cloud API': 'On the provider\'s servers',
          },
          {
            Criterion: 'Internet',
            'Local 70B on a Mac': 'Not needed for inference once the model is downloaded',
            'Hosted cloud API': 'Required',
          },
          {
            Criterion: 'Cost',
            'Local 70B on a Mac': 'Hardware up front, plus electricity and your time',
            'Hosted cloud API': 'Usually billed per token or by subscription; check current prices',
          },
          {
            Criterion: 'Rate limits',
            'Local 70B on a Mac': 'No provider limits; your hardware is the limit',
            'Hosted cloud API': 'Set by the provider',
          },
          {
            Criterion: 'Speed',
            'Local 70B on a Mac': 'About 5–11 tok/s estimated on M5 Max for 70B',
            'Hosted cloud API': 'Varies by provider and model',
          },
          {
            Criterion: 'Privacy',
            'Local 70B on a Mac': 'Depends on your apps, settings and device security',
            'Hosted cloud API': 'Depends on the provider\'s terms and settings',
          },
          {
            Criterion: 'Setup and upkeep',
            'Local 70B on a Mac': 'You install, update and secure it',
            'Hosted cloud API': 'The provider runs the service',
          },
        ],
        note: 'To estimate payback, divide the hardware price by the monthly API bill it actually replaces, minus electricity and other running costs. Light users may never break even. Local processing also does not by itself make your processing compliant with GDPR, HIPAA, a confidentiality agreement or any other rule. This is not legal advice.',
      },
      useCases: {
        id: 'use-cases',
        title: 'Practical Use Cases for Local 70B Inference',
        numberedItems: [
          {
            title: 'Confidential Documents',
            whyItMatters: 'Prompts need not be sent to a model provider. For legal, medical or financial records you still need a legal basis, access control, encryption and deletion rules, and someone qualified has to check the output. Local use alone is not compliance, and this is not legal advice.',
          },
          {
            title: 'Coding Assistance',
            whyItMatters: 'With a local model and a local editor integration, code can stay on your network. Check what each editor, extension and app sends out. One Mac shared by several developers also shares its speed.',
          },
          {
            title: 'Long-Form Drafts',
            whyItMatters: 'There are no per-token fees or provider rate limits, but at about 7–11 tok/s long texts take time. Fact-check every draft.',
          },
          {
            title: 'Research',
            whyItMatters: 'Useful for experiments and for summarizing material you are allowed to process. Verify claims and citations against the original sources.',
          },
          {
            title: 'Private Personal Use',
            whyItMatters: 'Notes and journals can stay on your device if your apps do not upload or sync them. Do not treat answers as medical or financial advice.',
          },
          {
            title: 'Offline Work',
            whyItMatters: 'Once the model and software are downloaded, inference works without a connection. Follow local law and your organization\'s security rules.',
          },
        ],
      },
      speedMlx: {
        id: 'speed-opts',
        title: 'MLX vs Ollama',
        content: [
          'MLX is Apple\'s machine learning framework, and the mlx-lm package runs language models with it. Which tool is faster depends on the model, quantization and software versions. We have not measured this, so time both with the same prompt. The example uses the 4-bit community conversion (listed at 39.7 GB).',
        ],
        codeBlock: `# pip install mlx-lm
from mlx_lm import load, stream_generate

model, tokenizer = load("mlx-community/Llama-3.3-70B-Instruct-4bit")

messages = [{"role": "user", "content": "Explain quantum computing"}]
prompt = tokenizer.apply_chat_template(messages, add_generation_prompt=True)

for response in stream_generate(model, tokenizer, prompt, max_tokens=500):
    print(response.text, end="", flush=True)`,
        codeLanguage: 'python',
      },
      speedTips: {
        id: 'speed-tips',
        title: 'More Speed Tips',
        items: [
          'Keep the model loaded: OLLAMA_KEEP_ALIVE=1h avoids reloading between requests that are less than an hour apart.',
          'Use streaming so you can read the answer while it is being generated.',
          'Limit the answer length (num_predict in Ollama). At 10 tok/s, 200 tokens take about 20 seconds and 500 tokens about 50 seconds.',
          'Q4_K_M is a smaller file than Q5_K_M, so we estimate it to be somewhat faster. Check the quality on your own tasks.',
          'Close other memory-hungry and GPU-hungry apps, and watch memory pressure in Activity Monitor.',
        ],
      },
      m5ultra: {
        id: 'm5ultra',
        title: 'M5 Ultra Mac Studio: Specs and Speed Estimates',
        content: [
          'Apple <a href="https://www.apple.com/mac-studio/specs/" class="text-primary hover:underline">lists the M5 Ultra</a> with 1.2 TB/s of memory bandwidth, about twice the 614 GB/s of the faster M5 Max. It comes with 96 GB, and the 256 GB and 512 GB options require the 36-core CPU and 80-core GPU version. Apple announced it on 25 August 2026. The speeds below are calculated from bandwidth and file size. They are not measurements, PromptQuorum has not tested this hardware, and real scaling may be lower.',
        ],
        tableFormat: true,
        columns: [
          'Model',
          'M5 Max 128 GB (estimate)',
          'M5 Ultra (estimate)',
        ],
        rows: [
          {
            Model: 'Llama 3.3 70B Q5_K_M (50 GB)',
            'M5 Max 128 GB (estimate)': '~7–10 tok/s',
            'M5 Ultra (estimate)': '~15–20 tok/s',
          },
          {
            Model: 'Llama 3.3 70B Q8_0 (75 GB)',
            'M5 Max 128 GB (estimate)': '~5–7 tok/s',
            'M5 Ultra (estimate)': '~10–13 tok/s',
          },
          {
            Model: 'Llama 3.3 70B FP16 (141 GB)',
            'M5 Max 128 GB (estimate)': 'Does not fit',
            'M5 Ultra (estimate)': '~5–7 tok/s (256 GB or more)',
          },
        ],
        note: 'US prices from Daring Fireball\'s table of 25 August 2026: M5 Ultra from $5,499 with 96 GB. 96 GB is too small for the 141 GB FP16 file. A 256 GB configuration works out to about $10,800 (80-core GPU model plus the memory upgrade, 1 TB SSD). That table listed 512 GB as coming in late October 2026; this page has not checked its price or current availability. Check Apple\'s store.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Q4 good enough for a 70B model?',
            a: 'Q4_K_M is the usual starting point. How much quality it loses compared with Q5, Q8 or FP16 depends on the model and the task, and this page has not measured it. Compare on your own prompts. For legal, medical or other high-stakes use, have a qualified person check the output whatever the quantization.',
          },
          {
            q: 'Can I run 70B Q5 and a second model at the same time?',
            a: 'On 128 GB, the 50 GB Q5_K_M file plus a small 8B model of about 5 GB fits by file size, with room for context. Actual memory use is higher than the files, so check it with ollama ps and Activity Monitor. Models that generate at the same time share bandwidth.',
          },
          {
            q: 'Should I buy an M5 Max or an M5 Ultra Mac Studio?',
            a: 'It depends on the memory you need. US prices from Daring Fireball\'s table of 25 August 2026: M5 Max $3,499 with 64 GB and $5,099 with 128 GB; M5 Ultra from $5,499 with 96 GB, and about $10,800 with 256 GB. Consider the Ultra for 70B FP16, for models that need more than 128 GB, or for its higher bandwidth. Otherwise the M5 Max may be enough. Check current prices with Apple.',
          },
          {
            q: 'How much faster is 70B on an M5 Ultra than on an M5 Max?',
            a: 'In theory up to about 2×, because Apple lists 1.2 TB/s against 614 GB/s. For Q5_K_M our estimate is about 15–20 tok/s against 7–10. This is a calculation, not a benchmark, and real gains may be smaller.',
          },
          {
            q: 'Can I run two 70B models at once on 128 GB?',
            a: 'Two Q4_K_M files add up to 86 GB. That is below 128 GB, but context, macOS and the limit on GPU memory make it tight, and both models share the bandwidth when they generate at the same time. 256 GB or more leaves much more room.',
          },
          {
            q: 'How much disk space do 70B models need?',
            a: 'For Llama 3.3 70B in the Ollama library: 43 GB (Q4_K_M), 50 GB (Q5_K_M) or 75 GB (Q8_0). Keeping all three takes 168 GB. With several large models, a 1 TB or larger SSD is more comfortable.',
          },
          {
            q: 'Is a local 70B model as good as GPT-5.6 for my task?',
            a: 'Do not assume so. This page has no like-for-like comparison. Meta reports 86.0 on MMLU for Llama 3.3 70B, but that says little about your task, and scores from different publishers are not directly comparable. Run your own prompts through both and judge the results.',
          },
          {
            q: 'Will newer large models run on an M5 Max?',
            a: 'Not automatically. The model file plus context has to fit in memory, and your version of Ollama or MLX has to support the architecture. Many newer open models are mixture-of-experts models that are far larger than 70B in total, so check the download size first.',
          },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Related Articles',
        items: [
          '[Apple Silicon for Local LLMs: Complete Guide](/local-llms/apple-silicon-local-llm-guide-2026) — M1 to M5 Max comparison, unified memory explained',
          'Running DeepSeek-R1 Locally — DeepSeek-R1-Distill-Llama-70B feasibility details, full R1 671B vs distill comparison',
          '[M5 Pro vs M5 Max for Local LLMs: Specs and Speed Estimates](/local-llms/m5-pro-max-llm-benchmarks-2026) — estimated (not measured) tok/s by model size, calculated from memory bandwidth and model file size',
          '[How Much Unified Memory for Local LLMs?](/local-llms/how-much-unified-memory-for-local-llm) — 16GB vs 36GB vs 64GB vs 128GB guide',
          '[Best LLM Models for Apple Silicon](/local-llms/best-models-apple-silicon-2026) — model recommendations per Mac configuration',
          '[MLX vs Ollama vs llama.cpp on Mac](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — framework speed comparison and setup guide',
          '[Apple Silicon vs NVIDIA GPU for Local LLMs](/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — cross-platform hardware comparison',
          '[LLM Quantization Explained](/local-llms/llm-quantization-explained) — Q4/Q5/Q8/FP16 deep dive',
          '[Mac Mini M5 as Local AI Server](/local-llms/mac-mini-m5-local-ai-server) — always-on inference server setup',
          '[Best Local Reasoning Model 2026: DeepSeek-R1 Distills Ranked](/local-llms/best-local-reasoning-model-deepseek-r1-2026) — ranking guide to local reasoning models',
          '[DeepSeek-R1 Distill VRAM Cheatsheet](/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — memory needs by distill size',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Modelos 70B en Apple Silicon 2026: guía para M5 Max',
    seoTitle: '70B en M5 Max: memoria, velocidad estimada y guía 2026',
    intro: 'Cómo ejecutar en local modelos de la clase 70B en un Apple Silicon M5 Max: qué cuantización cabe en memoria, velocidades estimadas a partir del ancho de banda (no son mediciones), instalación con Ollama y MLX, precios de EE. UU. y los límites de compararlo con APIs en la nube.',
    metaDescription: 'Llama 3.3 70B en un Mac M5 Max: descargas de 43–75 GB, 5–11 tok/s estimados por ancho de banda (no medidos), instalación y precios de EE. UU.',
    heroImage: '/images/running-70b-models-apple-silicon-m5-max-hardware-comparison-hero-es.webp',
    twitterDescription: '70B en M5 Max: descargas de 43–75 GB, 5–11 tok/s estimados (no medidos), instalación y precios de EE. UU.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'DeepSeek-R1-Distill-Llama-70B',
      'Qwen2.5-72B',
      'Llama 3.1 8B',
    ],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: 'Propietarios de Mac y posibles compradores que quieren ejecutar modelos grandes en local.',
    readTime: '16 min de lectura',
    educationalLevel: 'Advanced',
    primaryTerm: 'modelos 70B Apple Silicon',
    targetKeywords: ['modelo 70B Mac', 'M5 Max 128GB LLM', 'ejecutar 70B localmente', 'Llama 70B Apple Silicon', 'inferencia local modelo grande'],
    ctaText: '¿Ejecutas un modelo 70B en local? Con PromptQuorum puedes comparar sus respuestas con las de modelos en la nube usando tus propios prompts.',
    leadAnswerBlock: '**Llama 3.3 70B cabe en un M5 Max con suficiente memoria unificada: las descargas de Ollama ocupan 43 GB (Q4_K_M), 50 GB (Q5_K_M) y 75 GB (Q8_0). Con los 614 GB/s que indica Apple estimamos unos 9–11, 7–10 y 5–7 tok/s. Son estimaciones calculadas, no mediciones. 128 GB dejan margen holgado; con 64 GB cabe Q4_K_M con contexto limitado.**',
    quickAnswerTop: {
      es: {
        question: '¿Puedo ejecutar modelos 70B en un M5 Max?',
        answer: 'Sí, con suficiente memoria unificada. Llama 3.3 70B en Q4_K_M es una descarga de 43 GB. Un M5 Max de 64 GB puede cargarlo con contexto limitado; con 128 GB también caben Q5_K_M (50 GB) y Q8_0 (75 GB). Velocidad estimada a 614 GB/s: unos 9–11 tok/s en Q4_K_M, 7–10 en Q5_K_M y 5–7 en Q8_0. Son estimaciones, no mediciones.',
        bullets: [
          'Q4_K_M: 43 GB, unos 9–11 tok/s (estimación)',
          'Q5_K_M: 50 GB, unos 7–10 tok/s (estimación)',
          'Q8_0: 75 GB, unos 5–7 tok/s (estimación)',
          '64 GB: solo Q4_K_M, con contexto limitado',
          'El M5 Max de 36 GB es demasiado pequeño para estos archivos 70B',
          'Instalación: brew install ollama y luego ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
      de: {
        question: 'Kann ich 70B-Modelle auf einem M5 Max ausführen?',
        answer: 'Ja, mit ausreichend Unified Memory. Llama 3.3 70B in Q4_K_M ist ein Download von 43 GB. Ein M5 Max mit 64 GB fasst ihn bei begrenztem Kontext; 128 GB reichen auch für Q5_K_M (50 GB) und Q8_0 (75 GB). Geschätztes Tempo bei 614 GB/s: etwa 9–11 Tok/s für Q4_K_M, 7–10 für Q5_K_M und 5–7 für Q8_0. Das sind Schätzungen, keine Messungen.',
        bullets: [
          'Q4_K_M: 43 GB, etwa 9–11 Tok/s (Schätzung)',
          'Q5_K_M: 50 GB, etwa 7–10 Tok/s (Schätzung)',
          'Q8_0: 75 GB, etwa 5–7 Tok/s (Schätzung)',
          '64 GB: nur Q4_K_M, mit begrenztem Kontext',
          'Der M5 Max mit 36 GB ist für diese 70B-Dateien zu klein',
          'Setup: brew install ollama, dann ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
      fr: { question: 'Puis-je exécuter des modèles 70B sur un M5 Max ?', answer: 'Oui, avec assez de mémoire unifiée. Llama 3.3 70B en Q4_K_M représente 43 Go à télécharger. Un M5 Max de 64 Go peut le charger avec un contexte limité ; 128 Go acceptent aussi Q5_K_M (50 Go) et Q8_0 (75 Go). Débit estimé à 614 Go/s : environ 9–11 tok/s en Q4_K_M, 7–10 en Q5_K_M et 5–7 en Q8_0. Ce sont des estimations, pas des mesures.', bullets: [
        'Q4_K_M : 43 Go, environ 9–11 tok/s (estimation)',
        'Q5_K_M : 50 Go, environ 7–10 tok/s (estimation)',
        'Q8_0 : 75 Go, environ 5–7 tok/s (estimation)',
        '64 Go : Q4_K_M uniquement, avec un contexte limité',
        'Le M5 Max 36 Go est trop petit pour ces fichiers 70B',
        'Installation : brew install ollama, puis ollama pull llama3.3:70b',
      ], updatedDate: '2026-11-28' },
      ja: { question: 'M5 Maxで70Bモデルは動きますか？', answer: 'はい、ユニファイドメモリが足りれば動きます。Llama 3.3 70BのQ4_K_Mは43 GBのダウンロードです。64 GBのM5 Maxでは限られたコンテキストで読み込めます。128 GBならQ5_K_M（50 GB）やQ8_0（75 GB）も収まります。614 GB/sでの推定速度は、Q4_K_Mで約9〜11 tok/s、Q5_K_Mで7〜10、Q8_0で5〜7です。実測ではなく推定です。', bullets: [
        'Q4_K_M：43 GB、約9〜11 tok/s（推定）',
        'Q5_K_M：50 GB、約7〜10 tok/s（推定）',
        'Q8_0：75 GB、約5〜7 tok/s（推定）',
        '64 GB：Q4_K_Mのみ、コンテキストは限られます',
        '36 GBのM5 Maxは、これらの70Bファイルには不足です',
        '導入：brew install ollama の後に ollama pull llama3.3:70b',
      ], updatedDate: '2026-11-28' },
      zh: { question: 'M5 Max 能运行 70B 模型吗？', answer: '可以，前提是统一内存足够。Llama 3.3 70B 的 Q4_K_M 版本下载大小为 43 GB。64 GB 的 M5 Max 可在有限上下文下加载；128 GB 还能装下 Q5_K_M（50 GB）和 Q8_0（75 GB）。按 614 GB/s 估算的速度：Q4_K_M 约 9–11 tok/s，Q5_K_M 约 7–10，Q8_0 约 5–7。以上为估算，并非实测。', bullets: [
        'Q4_K_M：43 GB，约 9–11 tok/s（估算）',
        'Q5_K_M：50 GB，约 7–10 tok/s（估算）',
        'Q8_0：75 GB，约 5–7 tok/s（估算）',
        '64 GB：仅适合 Q4_K_M，上下文有限',
        '36 GB 的 M5 Max 装不下这些 70B 文件',
        '安装：brew install ollama，然后 ollama pull llama3.3:70b',
      ], updatedDate: '2026-11-28' },
    },
    toc: [
      { label: 'Lo que publica Meta sobre 70B', anchor: '#why' },
      { label: 'Hardware y velocidades estimadas', anchor: '#hardware' },
      { label: 'Instalación paso a paso', anchor: '#setup' },
      { label: 'Prueba la calidad tú mismo', anchor: '#quality' },
      { label: 'Cuantización', anchor: '#quantization' },
      { label: 'Otros modelos grandes', anchor: '#alternatives' },
      { label: '70B local frente a APIs en la nube', anchor: '#vs-cloud' },
      { label: 'Casos de uso', anchor: '#use-cases' },
      { label: 'Velocidad: MLX, Ollama y consejos', anchor: '#speed-opts' },
      { label: 'Estimaciones del M5 Ultra', anchor: '#m5ultra' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Artículos relacionados', anchor: '#related-articles' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'Lo que publica Meta sobre Llama 3.3 70B',
        content: [
          'Estas puntuaciones proceden de la <a href="https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct" class="text-primary hover:underline">ficha del modelo Llama 3.3 de Meta</a>. Son resultados declarados por el fabricante para el modelo en sí, no para una versión Q4, Q5 o Q8 en un Mac. Cada proveedor evalúa de forma distinta, así que esta página no las coloca junto a las de modelos en la nube.',
        ],
        tableFormat: true,
        columns: [
          'Benchmark',
          'Condición de prueba',
          'Puntuación publicada por Meta',
        ],
        rows: [
          {
            Benchmark: 'MMLU (conocimiento general)',
            'Condición de prueba': '0-shot, chain-of-thought',
            'Puntuación publicada por Meta': '86,0',
          },
          {
            Benchmark: 'HumanEval (código)',
            'Condición de prueba': '0-shot, pass@1',
            'Puntuación publicada por Meta': '88,4',
          },
          {
            Benchmark: 'MATH (matemáticas)',
            'Condición de prueba': 'chain-of-thought',
            'Puntuación publicada por Meta': '77,0',
          },
          {
            Benchmark: 'MGSM (matemáticas multilingües)',
            'Condición de prueba': 'según Meta',
            'Puntuación publicada por Meta': '91,1',
          },
          {
            Benchmark: 'IFEval (seguimiento de instrucciones)',
            'Condición de prueba': 'según Meta',
            'Puntuación publicada por Meta': '92,1',
          },
        ],
        note: 'Una puntuación de benchmark no dice cómo resolverá tu tarea una versión cuantizada. Pruébala con tus propios prompts.',
      },
      hardware: {
        id: 'hardware',
        title: 'Qué hardware ejecuta modelos 70B',
        tableFormat: true,
        columns: [
          'Hardware',
          'Cuantización',
          'Tamaño de descarga',
          'tok/s',
          'Base',
          '¿Cabe?',
        ],
        rows: [
          {
            Hardware: 'M3 Max 96GB',
            'Cuantización': 'Q4_K_M',
            'Tamaño de descarga': '43 GB',
            'tok/s': '~4–6',
            Base: 'Estimación',
            '¿Cabe?': '✓ Sí',
          },
          {
            Hardware: 'M3 Max 128GB',
            'Cuantización': 'Q5_K_M',
            'Tamaño de descarga': '50 GB',
            'tok/s': '~5–6',
            Base: 'Estimación',
            '¿Cabe?': '✓ Sí',
          },
          {
            Hardware: 'M4 Max 128GB',
            'Cuantización': 'Q5_K_M',
            'Tamaño de descarga': '50 GB',
            'tok/s': '~7–9',
            Base: 'Estimación',
            '¿Cabe?': '✓ Sí',
          },
          {
            Hardware: 'M5 Max 128GB',
            'Cuantización': 'Q4_K_M',
            'Tamaño de descarga': '43 GB',
            'tok/s': '~9–11',
            Base: 'Estimación',
            '¿Cabe?': '✓ Sí',
          },
          {
            Hardware: 'M5 Max 128GB',
            'Cuantización': 'Q5_K_M',
            'Tamaño de descarga': '50 GB',
            'tok/s': '~7–10',
            Base: 'Estimación',
            '¿Cabe?': '✓ Sí',
          },
          {
            Hardware: 'M5 Max 128GB',
            'Cuantización': 'Q8_0',
            'Tamaño de descarga': '75 GB',
            'tok/s': '~5–7',
            Base: 'Estimación',
            '¿Cabe?': '✓ Sí',
          },
          {
            Hardware: 'M5 Ultra 256GB',
            'Cuantización': 'FP16',
            'Tamaño de descarga': '141 GB',
            'tok/s': '~5–7',
            Base: 'Estimación',
            '¿Cabe?': '✓ Sí',
          },
          {
            Hardware: 'RTX 4090 24GB',
            'Cuantización': 'Q4_K_M',
            'Tamaño de descarga': '43 GB',
            'tok/s': '~1–5',
            Base: 'Estimaciones publicadas',
            '¿Cabe?': '✗ No por completo',
          },
          {
            Hardware: '2× RTX 3090 48GB',
            'Cuantización': 'Q4_K_M',
            'Tamaño de descarga': '43 GB',
            'tok/s': '19,5–31,9',
            Base: 'Prueba de terceros',
            '¿Cabe?': '✓ Sí',
          },
          {
            Hardware: '2× RTX 4090 48GB',
            'Cuantización': 'Q4_K_M',
            'Tamaño de descarga': '43 GB',
            'tok/s': '—',
            Base: 'Sin cifra verificada',
            '¿Cabe?': '✓ Sí',
          },
          {
            Hardware: '4× RTX 3090 96GB',
            'Cuantización': 'Q8_0',
            'Tamaño de descarga': '75 GB',
            'tok/s': '—',
            Base: 'Sin cifra verificada',
            '¿Cabe?': '✓ Sí',
          },
        ],
        note: 'Cómo estimamos: un modelo denso lee aproximadamente todo su archivo por cada token, así que tomamos el 60–80 % del ancho de banda dividido entre el tamaño del archivo. La velocidad real depende del software, la longitud del contexto, la temperatura y los ajustes. PromptQuorum no ha medido estos equipos. Ancho de banda publicado por Apple: M3 Max 300 GB/s (versión de 96 GB) o 400 GB/s (128 GB), M4 Max 546 GB/s (128 GB), M5 Max 460 GB/s (36 GB) o 614 GB/s (48, 64 y 128 GB), M5 Ultra 1,2 TB/s (<a href="https://www.apple.com/mac-studio/specs/" class="text-primary hover:underline">especificaciones de Mac Studio</a>). La cifra de dos RTX 3090 viene de una <a href="https://computingforgeeks.com/build-dual-rtx-3090-llm/" class="text-primary hover:underline">prueba de ComputingForGeeks</a> del 19 de octubre de 2026 en una máquina alquilada con las tarjetas limitadas a 290 W: 19,5 tok/s con el reparto por capas predeterminado y 31,9 con reparto por tensores. Según esto, dos RTX 3090 pueden ser claramente más rápidas que un M5 Max; el Mac ofrece más memoria en un solo equipo. El rango de 1–5 tok/s para una sola gráfica de 24 GB con descarga a la CPU es una estimación publicada por <a href="https://insiderllm.com/guides/running-70b-models-locally-vram-guide/" class="text-primary hover:underline">InsiderLLM</a>. Precios de Mac Studio en EE. UU. según la <a href="https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios" class="text-primary hover:underline">tabla de Daring Fireball</a> del 25 de agosto de 2026, con SSD de 512 GB: M5 Max 36 GB $2,499 (insuficiente para 70B), 64 GB $3,499, 128 GB $5,099. El Mac mini de 64 GB más barato (M5 Pro, CPU de 15 núcleos, SSD de 512 GB) cuesta $2,699; estimamos para él unos 4–5 tok/s. En tu país los precios varían; consulta la tienda de Apple.',
      },
      setupInstall: {
        id: 'setup',
        title: 'Paso a paso: ejecutar 70B con Ollama',
        content: [
          'Paso 1: comprueba la memoria. Paso 2: instala Ollama e inicia el servidor con ajustes para un solo modelo grande. Deja abierta esa terminal y usa otra para los pasos siguientes.',
        ],
        codeBlock: `# Step 1: check unified memory
system_profiler SPHardwareDataType | grep Memory

# Step 2: install Ollama
brew install ollama

# Start the server: one request at a time, keep the model loaded for 1 hour
OLLAMA_KEEP_ALIVE=1h OLLAMA_NUM_PARALLEL=1 ollama serve`,
        codeLanguage: 'bash',
      },
      setupPull: {
        id: 'setup-pull',
        title: 'Paso 3: descargar el modelo 70B',
        content: [
          'El tiempo de descarga depende de tu conexión. Solo por cálculo, 43–75 GB tardan como mínimo entre 1 y 2 horas a 100 Mbps y unos 6–10 minutos a 1 Gbps.',
        ],
        codeBlock: `# Q4_K_M, 43 GB download
ollama pull llama3.3:70b

# Q5_K_M, 50 GB download
ollama pull llama3.3:70b-instruct-q5_K_M

# Q8_0, 75 GB download
ollama pull llama3.3:70b-instruct-q8_0`,
        codeLanguage: 'bash',
      },
      setupRun: {
        id: 'setup-run',
        title: 'Pasos 4–6: primera ejecución, uso de GPU y API',
        content: [
          'La primera petición debe cargar el modelo en memoria, por eso tarda más. Mientras siga cargado, las siguientes se ahorran la carga. macOS limita cuánta memoria unificada puede usar la GPU; comprueba con ollama ps que el modelo está en la GPU, sobre todo con 64 GB.',
        ],
        codeBlock: `# Step 4: first run, with timing statistics
ollama run llama3.3:70b --verbose "Write a 200-word essay on local AI"

# Step 5: check that the model is loaded on the GPU
ollama ps

# Step 6: call the local API
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.3:70b",
  "messages": [{"role": "user", "content": "Explain quantum computing"}]
}'`,
        codeLanguage: 'bash',
      },
      quality8B: {
        id: 'quality',
        title: 'Compara 8B y 70B con tu propio prompt',
        content: [
          'Esta página no publica respuestas de ejemplo de los modelos, porque un solo prompt demuestra poco y no tenemos una prueba documentada que mostrar.',
          'Usa el mismo prompt en ambos modelos, por ejemplo el siguiente, y compara los resultados.',
        ],
        codeBlock: `# Same prompt, two models
PROMPT="Explain why a stack overflow happens in recursive functions, then write a Python function that stops runaway recursion before it crashes."
ollama run llama3.1:8b "$PROMPT"
ollama run llama3.3:70b "$PROMPT"`,
        codeLanguage: 'bash',
        note: 'Ejecuta el código que escriba cada modelo. Comprueba que sea correcto, que cubra los casos límite y que explique bien el problema.',
      },
      quality70B: {
        id: 'quality-70b',
        title: 'Una solución de referencia para contrastar',
        codeBlock: `import sys
import functools

def detect_recursion(threshold=900):
    def decorator(func):
        depth = 0
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            nonlocal depth
            depth += 1
            try:
                if depth > threshold:
                    raise RecursionError(
                        f"Detected potential infinite recursion at depth {depth}"
                    )
                return func(*args, **kwargs)
            finally:
                depth -= 1
        return wrapper
    return decorator`,
        codeLanguage: 'python',
        note: 'Este decorador con límite de profundidad se escribió como referencia para el prompt anterior. No es una respuesta de un modelo. Detiene la función recursiva envuelta al superar una profundidad fijada; no puede demostrar que la recursión sea infinita.',
      },
      quantization: {
        id: 'quantization',
        title: 'Cuantización en modelos 70B',
        items: [
          'Ollama ofrece estas descargas de Llama 3.3 70B: Q4_K_M 43 GB, Q5_K_M 50 GB, Q8_0 75 GB, FP16 141 GB.',
          'Las cuantizaciones más pequeñas suelen perder algo de calidad. Cuánto depende del modelo y la tarea, y esta página no lo ha medido.',
          'Enfoque práctico: empieza con Q4_K_M y prueba Q5_K_M u Q8_0 si tus pruebas muestran errores importantes. Más precisión no permite usar la salida sin revisarla.',
          'Memoria: el archivo es solo el mínimo. El contexto, macOS y otras apps necesitan más, así que Q8_0 con 75 GB pide un Mac de 128 GB.',
          'Velocidad estimada a 614 GB/s: Q4_K_M unos 9–11, Q5_K_M unos 7–10, Q8_0 unos 5–7 tok/s. A 10 tok/s, 500 tokens tardan unos 50 segundos.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Otros modelos grandes para Apple Silicon',
        tableFormat: true,
        columns: [
          'Modelo',
          'Tamaño de descarga',
          'Notas',
          'tok/s estimados en M5 Max (614 GB/s)',
        ],
        rows: [
          {
            Modelo: 'Llama 3.3 70B Instruct',
            'Tamaño de descarga': '43 GB (Q4_K_M), 50 GB (Q5_K_M)',
            Notas: 'Uso general; Llama 3.3 Community License',
            'tok/s estimados en M5 Max (614 GB/s)': '~9–11 (Q4), ~7–10 (Q5)',
          },
          {
            Modelo: 'DeepSeek-R1-Distill-Llama-70B',
            'Tamaño de descarga': '43 GB (deepseek-r1:70b)',
            Notas: 'Distill basado en Llama que escribe sus pasos de razonamiento',
            'tok/s estimados en M5 Max (614 GB/s)': '~9–11',
          },
          {
            Modelo: 'Qwen2.5-72B Instruct',
            'Tamaño de descarga': '47 GB (Q4_K_M), 54 GB (Q5_K_M)',
            Notas: 'Revisa la licencia Qwen antes de un uso comercial',
            'tok/s estimados en M5 Max (614 GB/s)': '~8–10 (Q4), ~7–9 (Q5)',
          },
        ],
        note: 'El DeepSeek-R1 completo (671B) es un modelo distinto y mucho más grande que el distill 70B. Los tamaños proceden de la biblioteca de Ollama. Las velocidades son estimaciones por ancho de banda, no benchmarks. Esta página no clasifica estos modelos por calidad. Lee la licencia de cada modelo antes de usarlo.',
      },
      alternativesPull: {
        id: 'alternatives-pull',
        title: 'Descargar modelos alternativos',
        codeBlock: `ollama pull llama3.3:70b-instruct-q5_K_M
ollama pull deepseek-r1:70b
ollama pull qwen2.5:72b-instruct-q4_K_M`,
        codeLanguage: 'bash',
      },
      vsCloud: {
        id: 'vs-cloud',
        title: '70B local frente a APIs en la nube',
        tableFormat: true,
        columns: [
          'Criterio',
          '70B local en un Mac',
          'API en la nube',
        ],
        rows: [
          {
            Criterio: 'Dónde se procesan los prompts',
            '70B local en un Mac': 'En tu Mac',
            'API en la nube': 'En los servidores del proveedor',
          },
          {
            Criterio: 'Internet',
            '70B local en un Mac': 'No hace falta para inferir una vez descargado el modelo',
            'API en la nube': 'Obligatorio',
          },
          {
            Criterio: 'Coste',
            '70B local en un Mac': 'Hardware por adelantado, más electricidad y tu tiempo',
            'API en la nube': 'Normalmente por token o suscripción; consulta precios actuales',
          },
          {
            Criterio: 'Límites de uso',
            '70B local en un Mac': 'Sin límites de proveedor; el límite es tu hardware',
            'API en la nube': 'Los fija el proveedor',
          },
          {
            Criterio: 'Velocidad',
            '70B local en un Mac': 'Unos 5–11 tok/s estimados en M5 Max con 70B',
            'API en la nube': 'Varía según proveedor y modelo',
          },
          {
            Criterio: 'Privacidad',
            '70B local en un Mac': 'Depende de tus apps, ajustes y la seguridad del equipo',
            'API en la nube': 'Depende de las condiciones y ajustes del proveedor',
          },
          {
            Criterio: 'Instalación y mantenimiento',
            '70B local en un Mac': 'Tú instalas, actualizas y proteges',
            'API en la nube': 'El proveedor gestiona el servicio',
          },
        ],
        note: 'Para estimar la amortización, divide el precio del hardware entre la factura mensual de API que realmente sustituye, restando electricidad y otros costes. Con poco uso quizá no se amortice nunca. Además, procesar en local no hace por sí solo que tu tratamiento cumpla el RGPD, la HIPAA, un acuerdo de confidencialidad ni ninguna otra norma. Esto no es asesoramiento legal.',
      },
      useCases: {
        id: 'use-cases',
        title: 'Casos de uso prácticos de la inferencia local con 70B',
        numberedItems: [
          {
            title: 'Documentos confidenciales',
            whyItMatters: 'No hace falta enviar los prompts a un proveedor de modelos. Con datos legales, médicos o financieros sigues necesitando una base jurídica, control de acceso, cifrado y reglas de borrado, y una persona cualificada debe revisar el resultado. El uso local por sí solo no es cumplimiento normativo, y esto no es asesoramiento legal.',
          },
          {
            title: 'Ayuda para programar',
            whyItMatters: 'Con un modelo local y una integración local en el editor, el código puede quedarse en tu red. Comprueba qué envía cada editor, extensión y app. Si varios desarrolladores comparten un Mac, también comparten su velocidad.',
          },
          {
            title: 'Borradores largos',
            whyItMatters: 'No hay tarifas por token ni límites de proveedor, pero a unos 7–11 tok/s los textos largos llevan tiempo. Verifica los datos de cada borrador.',
          },
          {
            title: 'Investigación',
            whyItMatters: 'Útil para experimentos y para resumir material que tengas derecho a procesar. Contrasta afirmaciones y citas con las fuentes originales.',
          },
          {
            title: 'Uso personal privado',
            whyItMatters: 'Notas y diarios pueden quedarse en tu equipo si tus apps no los suben ni los sincronizan. No tomes las respuestas como consejo médico o financiero.',
          },
          {
            title: 'Trabajo sin conexión',
            whyItMatters: 'Una vez descargados el modelo y el software, la inferencia funciona sin conexión. Respeta la ley aplicable y las normas de seguridad de tu organización.',
          },
        ],
      },
      speedMlx: {
        id: 'speed-opts',
        title: 'MLX frente a Ollama',
        content: [
          'MLX es el framework de aprendizaje automático de Apple, y el paquete mlx-lm ejecuta con él modelos de lenguaje. Cuál es más rápido depende del modelo, la cuantización y las versiones. No lo hemos medido, así que cronometra ambos con el mismo prompt. El ejemplo usa la conversión comunitaria de 4 bits (indicada con 39,7 GB).',
        ],
        codeBlock: `# pip install mlx-lm
from mlx_lm import load, stream_generate

model, tokenizer = load("mlx-community/Llama-3.3-70B-Instruct-4bit")

messages = [{"role": "user", "content": "Explain quantum computing"}]
prompt = tokenizer.apply_chat_template(messages, add_generation_prompt=True)

for response in stream_generate(model, tokenizer, prompt, max_tokens=500):
    print(response.text, end="", flush=True)`,
        codeLanguage: 'python',
      },
      speedTips: {
        id: 'speed-tips',
        title: 'Más consejos de velocidad',
        items: [
          'Mantén el modelo cargado: OLLAMA_KEEP_ALIVE=1h evita recargarlo entre peticiones separadas por menos de una hora.',
          'Usa streaming para leer la respuesta mientras se genera.',
          'Limita la longitud de la respuesta (num_predict en Ollama). A 10 tok/s, 200 tokens tardan unos 20 segundos y 500 unos 50.',
          'Q4_K_M es un archivo menor que Q5_K_M, así que estimamos que es algo más rápido. Comprueba la calidad con tus tareas.',
          'Cierra otras apps que consuman mucha memoria o GPU y vigila la presión de memoria en el Monitor de Actividad.',
        ],
      },
      m5ultra: {
        id: 'm5ultra',
        title: 'Mac Studio M5 Ultra: datos y velocidades estimadas',
        content: [
          'Para el M5 Ultra, <a href="https://www.apple.com/mac-studio/specs/" class="text-primary hover:underline">Apple indica</a> 1,2 TB/s de ancho de banda, aproximadamente el doble de los 614 GB/s del M5 Max más rápido. Incluye 96 GB, y las opciones de 256 GB y 512 GB exigen la versión con CPU de 36 núcleos y GPU de 80. Apple lo anunció el 25 de agosto de 2026. Las cifras siguientes se calculan a partir del ancho de banda y el tamaño del archivo. No son mediciones, PromptQuorum no ha probado este hardware y el escalado real puede ser menor.',
        ],
        tableFormat: true,
        columns: [
          'Modelo',
          'M5 Max 128 GB (estimación)',
          'M5 Ultra (estimación)',
        ],
        rows: [
          {
            Modelo: 'Llama 3.3 70B Q5_K_M (50 GB)',
            'M5 Max 128 GB (estimación)': '~7–10 tok/s',
            'M5 Ultra (estimación)': '~15–20 tok/s',
          },
          {
            Modelo: 'Llama 3.3 70B Q8_0 (75 GB)',
            'M5 Max 128 GB (estimación)': '~5–7 tok/s',
            'M5 Ultra (estimación)': '~10–13 tok/s',
          },
          {
            Modelo: 'Llama 3.3 70B FP16 (141 GB)',
            'M5 Max 128 GB (estimación)': 'No cabe',
            'M5 Ultra (estimación)': '~5–7 tok/s (con 256 GB o más)',
          },
        ],
        note: 'Precios de EE. UU. según la tabla de Daring Fireball del 25 de agosto de 2026: M5 Ultra desde $5,499 con 96 GB. 96 GB no bastan para el archivo FP16 de 141 GB. Una configuración de 256 GB sale por unos $10,800 según el cálculo (modelo con GPU de 80 núcleos más la ampliación de memoria, SSD de 1 TB). La tabla anunciaba los 512 GB para finales de octubre de 2026; esta página no ha comprobado su precio ni su disponibilidad actual. Consulta la tienda de Apple.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es suficiente Q4 en un modelo 70B?',
            a: 'Q4_K_M es el punto de partida habitual. Cuánta calidad pierde frente a Q5, Q8 o FP16 depende del modelo y la tarea, y esta página no lo ha medido. Compara con tus prompts. En usos legales, médicos u otros de alto impacto, una persona cualificada debe revisar la salida sea cual sea la cuantización.',
          },
          {
            q: '¿Puedo cargar a la vez 70B Q5 y un segundo modelo?',
            a: 'Con 128 GB, el archivo Q5_K_M de 50 GB y un modelo 8B de unos 5 GB caben por tamaño de archivo, con margen para el contexto. El consumo real supera el tamaño de los archivos; compruébalo con ollama ps y el Monitor de Actividad. Si generan a la vez, comparten el ancho de banda.',
          },
          {
            q: '¿Compro un Mac Studio M5 Max o M5 Ultra?',
            a: 'Depende de la memoria que necesites. Precios de EE. UU. según la tabla de Daring Fireball del 25 de agosto de 2026: M5 Max $3,499 con 64 GB y $5,099 con 128 GB; M5 Ultra desde $5,499 con 96 GB y unos $10,800 con 256 GB. Piensa en el Ultra para 70B en FP16, para modelos que necesiten más de 128 GB o por su mayor ancho de banda. Si no, el M5 Max puede bastar. Confirma los precios actuales con Apple.',
          },
          {
            q: '¿Cuánto más rápido va 70B en un M5 Ultra que en un M5 Max?',
            a: 'En teoría hasta unas 2 veces, porque Apple indica 1,2 TB/s frente a 614 GB/s. Para Q5_K_M estimamos unos 15–20 tok/s frente a 7–10. Es un cálculo, no un benchmark, y la mejora real puede ser menor.',
          },
          {
            q: '¿Puedo ejecutar dos modelos 70B a la vez con 128 GB?',
            a: 'Dos archivos Q4_K_M suman 86 GB. Está por debajo de 128 GB, pero el contexto, macOS y el límite de memoria de la GPU lo dejan justo, y al generar a la vez comparten el ancho de banda. Con 256 GB o más hay mucho más margen.',
          },
          {
            q: '¿Cuánto disco necesitan los modelos 70B?',
            a: 'Para Llama 3.3 70B en la biblioteca de Ollama: 43 GB (Q4_K_M), 50 GB (Q5_K_M) o 75 GB (Q8_0). Guardar los tres ocupa 168 GB. Con varios modelos grandes es más cómodo un SSD de 1 TB o más.',
          },
          {
            q: '¿Un 70B local es tan bueno como GPT-5.6 para mi tarea?',
            a: 'No lo des por hecho. Esta página no tiene una comparación en igualdad de condiciones. Meta publica 86,0 en MMLU para Llama 3.3 70B, pero eso dice poco sobre tu tarea, y las puntuaciones de distintos proveedores no son directamente comparables. Pasa tus prompts por ambos y juzga los resultados.',
          },
          {
            q: '¿Funcionarán en un M5 Max los modelos grandes más nuevos?',
            a: 'No automáticamente. El archivo del modelo más el contexto tienen que caber en memoria y tu versión de Ollama o MLX debe admitir la arquitectura. Muchos modelos abiertos recientes son de mezcla de expertos y en total superan con creces los 70B, así que mira antes el tamaño de descarga.',
          },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Artículos relacionados',
        items: [
          '[Apple Silicon para LLMs locales: Guía completa](/es/local-llms/apple-silicon-local-llm-guide-2026) — Comparativa M1 a M5 Max, memoria unificada explicada',
          '[M5 Pro vs M5 Max para LLM locales: especificaciones y velocidades estimadas](/es/local-llms/m5-pro-max-llm-benchmarks-2026) — tok/s estimados (no medidos) por tamaño de modelo, calculados a partir del ancho de banda y el tamaño del archivo',
          '[¿Cuánta memoria unificada para LLMs locales?](/es/local-llms/how-much-unified-memory-for-local-llm) — Guía 16GB vs 36GB vs 64GB vs 128GB',
          '[Mejores modelos LLM para Apple Silicon](/es/local-llms/best-models-apple-silicon-2026) — Recomendaciones de modelos por configuración Mac',
          '[MLX vs Ollama vs llama.cpp en Mac](/es/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — Comparativa de velocidad de frameworks y guía de configuración',
          '[Apple Silicon vs GPU NVIDIA para LLMs locales](/es/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — Comparativa de hardware multiplataforma',
          '[Cuantización de LLMs explicada](/es/local-llms/llm-quantization-explained) — Análisis profundo Q4/Q5/Q8/FP16',
          '[Mac Mini M5 como servidor de IA local](/es/local-llms/mac-mini-m5-local-ai-server) — Configuración de servidor de inferencia siempre activo',
          '[Mejor modelo de razonamiento local 2026: DeepSeek-R1 Distills clasificados](/es/local-llms/best-local-reasoning-model-deepseek-r1-2026) — guía comparativa de modelos de razonamiento locales',
          '[Chuleta de VRAM para DeepSeek-R1 Distill](/es/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — memoria necesaria según el tamaño del distill',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Modelos 70B en Apple Silicon 2026: guía para M5 Max',
      description: 'Modelos 70B en un M5 Max: tamaños de descarga, velocidades estimadas a partir del ancho de banda e instalación.',
      url: 'https://www.promptquorum.com/es/local-llms/running-70b-models-apple-silicon-m5-max',
      inLanguage: 'es',
      datePublished: '2026-05-15',
      dateModified: '2026-11-28',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'تشغيل نماذج 70B على Apple Silicon في 2026: دليل M5 Max',
    seoTitle: '70B على M5 Max: الذاكرة وتقدير السرعة والإعداد 2026',
    intro: 'كيف تشغّل نماذج من فئة 70B محلياً على Apple Silicon M5 Max: أي تكميم تتسع له الذاكرة، وتقديرات سرعة محسوبة من عرض نطاق الذاكرة (وليست قياسات)، والإعداد باستخدام Ollama وMLX، والأسعار الأمريكية، وحدود المقارنة مع واجهات API السحابية.',
    metaDescription: 'تشغيل Llama 3.3 70B على Mac بمعالج M5 Max: تنزيلات 43–75 GB، وتقدير 5–11 tok/s من عرض نطاق الذاكرة (دون قياس)، مع الإعداد والأسعار الأمريكية.',
    heroImage: '/images/running-70b-models-apple-silicon-m5-max-hardware-comparison-hero-ar.webp',
    twitterDescription: '70B على M5 Max: تنزيلات 43–75 GB، وتقدير 5–11 tok/s (دون قياس)، مع خطوات الإعداد والأسعار الأمريكية.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'DeepSeek-R1-Distill-Llama-70B',
      'Qwen2.5-72B',
      'Llama 3.1 8B',
    ],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: 'مستخدمو Mac والمقبلون على الشراء ممن يريدون تشغيل نماذج كبيرة محلياً.',
    readTime: '16 دقيقة قراءة',
    educationalLevel: 'Advanced',
    primaryTerm: 'نماذج 70B على Apple Silicon',
    targetKeywords: ['نموذج 70B على Mac', 'M5 Max 128GB LLM', 'تشغيل 70B محليًا', 'Llama 70B على Apple Silicon', 'استدلال محلي لنموذج كبير'],
    ctaText: 'هل تشغّل نموذج 70B محلياً؟ يتيح لك PromptQuorum مقارنة إجاباته بإجابات النماذج السحابية جنباً إلى جنب على مطالباتك أنت.',
    leadAnswerBlock: '**يتسع M5 Max المزوّد بذاكرة موحدة كافية لنموذج Llama 3.3 70B: أحجام التنزيل في Ollama هي 43 GB (Q4_K_M) و50 GB (Q5_K_M) و75 GB (Q8_0). استناداً إلى 614 GB/s التي تعلنها Apple نقدّر نحو 9–11 و7–10 و5–7 tok/s. هذه تقديرات محسوبة وليست قياسات. توفّر 128 GB مساحة مريحة، وتتسع 64 GB لـ Q4_K_M مع سياق محدود.**',
    quickAnswerTop: {
      ar: {
        question: 'هل يمكنني تشغيل نماذج 70B على M5 Max؟',
        answer: 'نعم، إذا كانت الذاكرة الموحدة كافية. تنزيل Llama 3.3 70B بصيغة Q4_K_M يبلغ 43 GB. يستطيع M5 Max بسعة 64 GB تحميله مع سياق محدود، وتتسع 128 GB أيضاً لـ Q5_K_M (‏50 GB) وQ8_0 (‏75 GB). السرعة المقدّرة عند 614 GB/s: نحو 9–11 tok/s لـ Q4_K_M و7–10 لـ Q5_K_M و5–7 لـ Q8_0. هذه تقديرات لا قياسات.',
        bullets: [
          'Q4_K_M: ‏43 GB، نحو 9–11 tok/s (تقدير)',
          'Q5_K_M: ‏50 GB، نحو 7–10 tok/s (تقدير)',
          'Q8_0: ‏75 GB، نحو 5–7 tok/s (تقدير)',
          '64 GB: ‏Q4_K_M فقط، مع سياق محدود',
          'M5 Max بسعة 36 GB أصغر من أن يتسع لملفات 70B هذه',
          'الإعداد: brew install ollama ثم ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: 'ما تنشره Meta عن 70B', anchor: '#why' },
      { label: 'العتاد وتقديرات السرعة', anchor: '#hardware' },
      { label: 'الإعداد خطوة بخطوة', anchor: '#setup' },
      { label: 'اختبر الجودة بنفسك', anchor: '#quality' },
      { label: 'التكميم', anchor: '#quantization' },
      { label: 'نماذج كبيرة أخرى', anchor: '#alternatives' },
      { label: '70B محلياً مقابل API السحابية', anchor: '#vs-cloud' },
      { label: 'حالات الاستخدام', anchor: '#use-cases' },
      { label: 'السرعة: MLX وOllama ونصائح', anchor: '#speed-opts' },
      { label: 'تقديرات M5 Ultra', anchor: '#m5ultra' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'مقالات ذات صلة', anchor: '#related-articles' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'ما تنشره Meta عن Llama 3.3 70B',
        content: [
          'هذه الدرجات مأخوذة من <a href="https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct" class="text-primary hover:underline">بطاقة نموذج Llama 3.3 من Meta</a>. وهي نتائج يعلنها المطوّر للنموذج نفسه، لا لنسخة Q4 أو Q5 أو Q8 على Mac. تختلف إعدادات الاختبار بين الجهات، ولذلك لا تضعها هذه الصفحة بجانب درجات النماذج السحابية.',
        ],
        tableFormat: true,
        columns: [
          'المعيار',
          'إعداد الاختبار',
          'الدرجة المعلنة من Meta',
        ],
        rows: [
          {
            'المعيار': 'MMLU (معرفة عامة)',
            'إعداد الاختبار': '0-shot، chain-of-thought',
            'الدرجة المعلنة من Meta': '86.0',
          },
          {
            'المعيار': 'HumanEval (برمجة)',
            'إعداد الاختبار': '0-shot، pass@1',
            'الدرجة المعلنة من Meta': '88.4',
          },
          {
            'المعيار': 'MATH (رياضيات)',
            'إعداد الاختبار': 'chain-of-thought',
            'الدرجة المعلنة من Meta': '77.0',
          },
          {
            'المعيار': 'MGSM (رياضيات متعددة اللغات)',
            'إعداد الاختبار': 'كما أوردتها Meta',
            'الدرجة المعلنة من Meta': '91.1',
          },
          {
            'المعيار': 'IFEval (اتباع التعليمات)',
            'إعداد الاختبار': 'كما أوردتها Meta',
            'الدرجة المعلنة من Meta': '92.1',
          },
        ],
        note: 'درجة المعيار لا تخبرك بمدى نجاح نسخة مكمّمة في مهمتك. اختبرها بمطالباتك.',
      },
      hardware: {
        id: 'hardware',
        title: 'ما العتاد الذي يشغّل نماذج 70B',
        tableFormat: true,
        columns: [
          'العتاد',
          'التكميم',
          'حجم التنزيل',
          'tok/s',
          'الأساس',
          'هل يتسع؟',
        ],
        rows: [
          {
            'العتاد': 'M3 Max 96GB',
            'التكميم': 'Q4_K_M',
            'حجم التنزيل': '43 GB',
            'tok/s': '~4–6',
            'الأساس': 'تقدير',
            'هل يتسع؟': '✓ نعم',
          },
          {
            'العتاد': 'M3 Max 128GB',
            'التكميم': 'Q5_K_M',
            'حجم التنزيل': '50 GB',
            'tok/s': '~5–6',
            'الأساس': 'تقدير',
            'هل يتسع؟': '✓ نعم',
          },
          {
            'العتاد': 'M4 Max 128GB',
            'التكميم': 'Q5_K_M',
            'حجم التنزيل': '50 GB',
            'tok/s': '~7–9',
            'الأساس': 'تقدير',
            'هل يتسع؟': '✓ نعم',
          },
          {
            'العتاد': 'M5 Max 128GB',
            'التكميم': 'Q4_K_M',
            'حجم التنزيل': '43 GB',
            'tok/s': '~9–11',
            'الأساس': 'تقدير',
            'هل يتسع؟': '✓ نعم',
          },
          {
            'العتاد': 'M5 Max 128GB',
            'التكميم': 'Q5_K_M',
            'حجم التنزيل': '50 GB',
            'tok/s': '~7–10',
            'الأساس': 'تقدير',
            'هل يتسع؟': '✓ نعم',
          },
          {
            'العتاد': 'M5 Max 128GB',
            'التكميم': 'Q8_0',
            'حجم التنزيل': '75 GB',
            'tok/s': '~5–7',
            'الأساس': 'تقدير',
            'هل يتسع؟': '✓ نعم',
          },
          {
            'العتاد': 'M5 Ultra 256GB',
            'التكميم': 'FP16',
            'حجم التنزيل': '141 GB',
            'tok/s': '~5–7',
            'الأساس': 'تقدير',
            'هل يتسع؟': '✓ نعم',
          },
          {
            'العتاد': 'RTX 4090 24GB',
            'التكميم': 'Q4_K_M',
            'حجم التنزيل': '43 GB',
            'tok/s': '~1–5',
            'الأساس': 'تقديرات منشورة',
            'هل يتسع؟': '✗ ليس بالكامل',
          },
          {
            'العتاد': '2× RTX 3090 48GB',
            'التكميم': 'Q4_K_M',
            'حجم التنزيل': '43 GB',
            'tok/s': '19.5–31.9',
            'الأساس': 'اختبار طرف ثالث',
            'هل يتسع؟': '✓ نعم',
          },
          {
            'العتاد': '2× RTX 4090 48GB',
            'التكميم': 'Q4_K_M',
            'حجم التنزيل': '43 GB',
            'tok/s': '—',
            'الأساس': 'لا يوجد رقم متحقق منه',
            'هل يتسع؟': '✓ نعم',
          },
          {
            'العتاد': '4× RTX 3090 96GB',
            'التكميم': 'Q8_0',
            'حجم التنزيل': '75 GB',
            'tok/s': '—',
            'الأساس': 'لا يوجد رقم متحقق منه',
            'هل يتسع؟': '✓ نعم',
          },
        ],
        note: 'طريقة التقدير: النموذج الكثيف يقرأ ملفه كاملاً تقريباً لكل token، لذا نأخذ 60–80% من عرض نطاق الذاكرة مقسوماً على حجم الملف. تعتمد السرعة الفعلية على البرنامج وطول السياق والحرارة والإعدادات. لم تُجرِ PromptQuorum قياسات على هذه الأنظمة. عرض النطاق المعلن من Apple: ‏M3 Max ‏300 GB/s (نسخة 96 GB) أو 400 GB/s (‏128 GB)، وM4 Max ‏546 GB/s (‏128 GB)، وM5 Max ‏460 GB/s (‏36 GB) أو 614 GB/s (‏48 و64 و128 GB)، وM5 Ultra ‏1.2 TB/s (<a href="https://www.apple.com/mac-studio/specs/" class="text-primary hover:underline">مواصفات Mac Studio من Apple</a>). رقم بطاقتَي RTX 3090 مأخوذ من <a href="https://computingforgeeks.com/build-dual-rtx-3090-llm/" class="text-primary hover:underline">اختبار ComputingForGeeks</a> بتاريخ 19 أكتوبر 2026 على جهاز مستأجر مع تحديد كل بطاقة عند 290 W: ‏19.5 tok/s بالتقسيم الافتراضي حسب الطبقات و31.9 بتقسيم الموترات. وعلى هذا الأساس قد تكون بطاقتا RTX 3090 أسرع بوضوح من M5 Max، بينما يوفّر Mac ذاكرة أكبر في جهاز واحد. أما نطاق 1–5 tok/s لبطاقة واحدة بسعة 24 GB مع نقل جزء من النموذج إلى المعالج فهو تقدير منشور من <a href="https://insiderllm.com/guides/running-70b-models-locally-vram-guide/" class="text-primary hover:underline">InsiderLLM</a>. أسعار Mac Studio الأمريكية من <a href="https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios" class="text-primary hover:underline">جدول Daring Fireball</a> بتاريخ 25 أغسطس 2026 مع SSD بسعة 512 GB: ‏M5 Max ‏36 GB بسعر $2,499 (لا يكفي لـ 70B)، و64 GB بسعر $3,499، و128 GB بسعر $5,099. أرخص Mac mini بسعة 64 GB (‏M5 Pro، معالج 15 نواة، SSD ‏512 GB) سعره $2,699، ونقدّر له نحو 4–5 tok/s. تختلف الأسعار حسب السوق؛ راجع متجر Apple.',
      },
      setupInstall: {
        id: 'setup',
        title: 'خطوة بخطوة: تشغيل 70B باستخدام Ollama',
        content: [
          'الخطوة 1: تحقق من الذاكرة. الخطوة 2: ثبّت Ollama وشغّل الخادم بإعدادات تناسب نموذجاً كبيراً واحداً. أبقِ هذه النافذة الطرفية مفتوحة واستخدم نافذة ثانية للخطوات التالية.',
        ],
        codeBlock: `# Step 1: check unified memory
system_profiler SPHardwareDataType | grep Memory

# Step 2: install Ollama
brew install ollama

# Start the server: one request at a time, keep the model loaded for 1 hour
OLLAMA_KEEP_ALIVE=1h OLLAMA_NUM_PARALLEL=1 ollama serve`,
        codeLanguage: 'bash',
      },
      setupPull: {
        id: 'setup-pull',
        title: 'الخطوة 3: تنزيل نموذج 70B',
        content: [
          'تعتمد مدة التنزيل على اتصالك. بالحساب فقط، يستغرق تنزيل 43–75 GB ما لا يقل عن نحو ساعة إلى ساعتين عند 100 Mbps، ونحو 6–10 دقائق عند 1 Gbps.',
        ],
        codeBlock: `# Q4_K_M, 43 GB download
ollama pull llama3.3:70b

# Q5_K_M, 50 GB download
ollama pull llama3.3:70b-instruct-q5_K_M

# Q8_0, 75 GB download
ollama pull llama3.3:70b-instruct-q8_0`,
        codeLanguage: 'bash',
      },
      setupRun: {
        id: 'setup-run',
        title: 'الخطوات 4–6: التشغيل الأول والتحقق من GPU واستدعاء API',
        content: [
          'الطلب الأول يحمّل النموذج إلى الذاكرة فيستغرق وقتاً أطول. وما دام النموذج محمّلاً لا تحتاج الطلبات اللاحقة إلى تحميله. يحدّ macOS من الذاكرة الموحدة المتاحة لـ GPU، لذا تحقق بالأمر ollama ps من أن النموذج يعمل على GPU، خصوصاً مع 64 GB.',
        ],
        codeBlock: `# Step 4: first run, with timing statistics
ollama run llama3.3:70b --verbose "Write a 200-word essay on local AI"

# Step 5: check that the model is loaded on the GPU
ollama ps

# Step 6: call the local API
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.3:70b",
  "messages": [{"role": "user", "content": "Explain quantum computing"}]
}'`,
        codeLanguage: 'bash',
      },
      quality8B: {
        id: 'quality',
        title: 'قارن بين 8B و70B بمطالبتك أنت',
        content: [
          'لا تنشر هذه الصفحة إجابات نموذجية من أي من النموذجين، لأن مطالبة واحدة لا تثبت الكثير وليس لدينا اختبار موثّق نعرضه.',
          'مرّر المطالبة نفسها إلى النموذجين، مثل المطالبة أدناه، ثم قارن النتائج.',
        ],
        codeBlock: `# Same prompt, two models
PROMPT="Explain why a stack overflow happens in recursive functions, then write a Python function that stops runaway recursion before it crashes."
ollama run llama3.1:8b "$PROMPT"
ollama run llama3.3:70b "$PROMPT"`,
        codeLanguage: 'bash',
        note: 'شغّل الكود الذي يكتبه كل نموذج، وتأكد من صحته ومعالجته للحالات الحدّية ودقة شرحه للمشكلة.',
      },
      quality70B: {
        id: 'quality-70b',
        title: 'حل مرجعي للمقارنة',
        codeBlock: `import sys
import functools

def detect_recursion(threshold=900):
    def decorator(func):
        depth = 0
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            nonlocal depth
            depth += 1
            try:
                if depth > threshold:
                    raise RecursionError(
                        f"Detected potential infinite recursion at depth {depth}"
                    )
                return func(*args, **kwargs)
            finally:
                depth -= 1
        return wrapper
    return decorator`,
        codeLanguage: 'python',
        note: 'كُتب هذا المُزخرِف (decorator) الذي يحدّ العمق حلاً مرجعياً للمطالبة أعلاه، وليس من مخرجات أي نموذج. يوقف الدالة التعاودية المغلّفة عند تجاوز عمق محدد، لكنه لا يستطيع إثبات أن التعاود لا نهائي.',
      },
      quantization: {
        id: 'quantization',
        title: 'التكميم في نماذج 70B',
        items: [
          'تعرض Ollama هذه التنزيلات لنموذج Llama 3.3 70B: ‏Q4_K_M ‏43 GB، وQ5_K_M ‏50 GB، وQ8_0 ‏75 GB، وFP16 ‏141 GB.',
          'تفقد التكميمات الأصغر عادةً بعض الجودة. ويتوقف مقدار ذلك على النموذج والمهمة، ولم تقِسه هذه الصفحة.',
          'نهج عملي: ابدأ بـ Q4_K_M ثم جرّب Q5_K_M أو Q8_0 إذا أظهرت اختباراتك أخطاءً مهمة. الدقة الأعلى لا تعني استخدام المخرجات دون مراجعة.',
          'الذاكرة: حجم الملف هو الحد الأدنى فقط. يحتاج السياق وmacOS والتطبيقات الأخرى إلى المزيد، ولذلك يتطلب Q8_0 بحجم 75 GB جهاز Mac بسعة 128 GB.',
          'السرعة المقدّرة عند 614 GB/s: ‏Q4_K_M نحو 9–11، وQ5_K_M نحو 7–10، وQ8_0 نحو 5–7 tok/s. عند 10 tok/s تستغرق 500 token نحو 50 ثانية.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'نماذج كبيرة أخرى لـ Apple Silicon',
        tableFormat: true,
        columns: [
          'النموذج',
          'حجم التنزيل',
          'ملاحظات',
          'tok/s المقدّرة على M5 Max (‏614 GB/s)',
        ],
        rows: [
          {
            'النموذج': 'Llama 3.3 70B Instruct',
            'حجم التنزيل': '43 GB (Q4_K_M)، 50 GB (Q5_K_M)',
            'ملاحظات': 'للاستخدام العام؛ رخصة Llama 3.3 Community License',
            'tok/s المقدّرة على M5 Max (‏614 GB/s)': '~9–11 (Q4)، ~7–10 (Q5)',
          },
          {
            'النموذج': 'DeepSeek-R1-Distill-Llama-70B',
            'حجم التنزيل': '43 GB (deepseek-r1:70b)',
            'ملاحظات': 'نموذج مقطّر مبني على Llama يكتب خطوات استدلاله',
            'tok/s المقدّرة على M5 Max (‏614 GB/s)': '~9–11',
          },
          {
            'النموذج': 'Qwen2.5-72B Instruct',
            'حجم التنزيل': '47 GB (Q4_K_M)، 54 GB (Q5_K_M)',
            'ملاحظات': 'راجع رخصة Qwen قبل الاستخدام التجاري',
            'tok/s المقدّرة على M5 Max (‏614 GB/s)': '~8–10 (Q4)، ~7–9 (Q5)',
          },
        ],
        note: 'نموذج DeepSeek-R1 الكامل (671B) مختلف وأكبر بكثير من النسخة المقطّرة 70B. أحجام التنزيل من مكتبة Ollama. السرعات تقديرات من عرض النطاق وليست اختبارات أداء. لا تصنّف هذه الصفحة النماذج حسب الجودة. اقرأ رخصة كل نموذج قبل استخدامه.',
      },
      alternativesPull: {
        id: 'alternatives-pull',
        title: 'تنزيل النماذج البديلة',
        codeBlock: `ollama pull llama3.3:70b-instruct-q5_K_M
ollama pull deepseek-r1:70b
ollama pull qwen2.5:72b-instruct-q4_K_M`,
        codeLanguage: 'bash',
      },
      vsCloud: {
        id: 'vs-cloud',
        title: '70B محلياً مقابل API السحابية',
        tableFormat: true,
        columns: [
          'المعيار',
          '70B محلياً على Mac',
          'API سحابية مستضافة',
        ],
        rows: [
          {
            'المعيار': 'مكان معالجة المطالبات',
            '70B محلياً على Mac': 'على جهازك',
            'API سحابية مستضافة': 'على خوادم المزوّد',
          },
          {
            'المعيار': 'الإنترنت',
            '70B محلياً على Mac': 'غير لازم للاستدلال بعد تنزيل النموذج',
            'API سحابية مستضافة': 'مطلوب',
          },
          {
            'المعيار': 'التكلفة',
            '70B محلياً على Mac': 'ثمن العتاد مقدماً إضافة إلى الكهرباء ووقتك',
            'API سحابية مستضافة': 'غالباً حسب token أو باشتراك؛ راجع الأسعار الحالية',
          },
          {
            'المعيار': 'حدود الاستخدام',
            '70B محلياً على Mac': 'لا حدود من مزوّد؛ الحد هو عتادك',
            'API سحابية مستضافة': 'يحددها المزوّد',
          },
          {
            'المعيار': 'السرعة',
            '70B محلياً على Mac': 'نحو 5–11 tok/s مقدّرة لـ 70B على M5 Max',
            'API سحابية مستضافة': 'تختلف حسب المزوّد والنموذج',
          },
          {
            'المعيار': 'الخصوصية',
            '70B محلياً على Mac': 'تعتمد على تطبيقاتك وإعداداتك وأمان الجهاز',
            'API سحابية مستضافة': 'تعتمد على شروط المزوّد وإعداداته',
          },
          {
            'المعيار': 'الإعداد والصيانة',
            '70B محلياً على Mac': 'أنت تثبّت وتحدّث وتؤمّن',
            'API سحابية مستضافة': 'المزوّد يدير الخدمة',
          },
        ],
        note: 'لتقدير استرداد التكلفة، اقسم سعر العتاد على فاتورة API الشهرية التي يحل محلها فعلاً بعد طرح الكهرباء وتكاليف التشغيل الأخرى. قد لا يسترد قليلو الاستخدام التكلفة أبداً. كما أن المعالجة المحلية وحدها لا تجعل معالجتك متوافقة مع GDPR أو HIPAA أو أنظمة حماية البيانات المحلية أو اتفاقية سرية أو أي قاعدة أخرى. هذا لا يُعد استشارة قانونية.',
      },
      useCases: {
        id: 'use-cases',
        title: 'حالات استخدام عملية لتشغيل 70B محلياً',
        numberedItems: [
          {
            title: 'المستندات السرية',
            whyItMatters: 'لا حاجة إلى إرسال المطالبات إلى مزوّد نماذج. لكن البيانات القانونية أو الطبية أو المالية تظل تتطلب أساساً نظامياً وضبطاً للوصول وتشفيراً وقواعد للحذف، ويجب أن يراجع شخص مؤهل المخرجات. الاستخدام المحلي وحده ليس امتثالاً، وهذا لا يُعد استشارة قانونية.',
          },
          {
            title: 'المساعدة في البرمجة',
            whyItMatters: 'مع نموذج محلي وربط محلي بالمحرر يمكن أن يبقى الكود داخل شبكتك. تحقق مما يرسله كل محرر وإضافة وتطبيق. وإذا تشارك عدة مطورين جهازاً واحداً فإنهم يتقاسمون سرعته.',
          },
          {
            title: 'مسودات النصوص الطويلة',
            whyItMatters: 'لا رسوم لكل token ولا حدود من مزوّد، لكن عند نحو 7–11 tok/s تستغرق النصوص الطويلة وقتاً. دقّق وقائع كل مسودة.',
          },
          {
            title: 'البحث',
            whyItMatters: 'مفيد للتجارب ولتلخيص المواد التي يحق لك معالجتها. تحقق من الادعاءات والاقتباسات في مصادرها الأصلية.',
          },
          {
            title: 'الاستخدام الشخصي الخاص',
            whyItMatters: 'يمكن أن تبقى الملاحظات واليوميات على جهازك إذا لم ترفعها تطبيقاتك أو تزامنها. لا تتعامل مع الإجابات بوصفها نصيحة طبية أو مالية.',
          },
          {
            title: 'العمل دون اتصال',
            whyItMatters: 'بعد تنزيل النموذج والبرامج يعمل الاستدلال دون اتصال. التزم بالقانون المعمول به وبقواعد الأمن في مؤسستك.',
          },
        ],
      },
      speedMlx: {
        id: 'speed-opts',
        title: 'MLX مقابل Ollama',
        content: [
          'MLX هو إطار تعلم الآلة من Apple، وتشغّل الحزمة mlx-lm النماذج اللغوية عليه. وأيّ الأداتين أسرع يتوقف على النموذج والتكميم وإصدارات البرامج. لم نقِس ذلك، فاختبر زمن كل منهما بالمطالبة نفسها. يستخدم المثال نسخة المجتمع المحوّلة بدقة 4 بت (المعلن عنها بحجم 39.7 GB).',
        ],
        codeBlock: `# pip install mlx-lm
from mlx_lm import load, stream_generate

model, tokenizer = load("mlx-community/Llama-3.3-70B-Instruct-4bit")

messages = [{"role": "user", "content": "Explain quantum computing"}]
prompt = tokenizer.apply_chat_template(messages, add_generation_prompt=True)

for response in stream_generate(model, tokenizer, prompt, max_tokens=500):
    print(response.text, end="", flush=True)`,
        codeLanguage: 'python',
      },
      speedTips: {
        id: 'speed-tips',
        title: 'نصائح إضافية للسرعة',
        items: [
          'أبقِ النموذج محمّلاً: يمنع OLLAMA_KEEP_ALIVE=1h إعادة التحميل بين طلبات تفصل بينها أقل من ساعة.',
          'استخدم البث (streaming) لتقرأ الإجابة أثناء توليدها.',
          'حدّد طول الإجابة (num_predict في Ollama). عند 10 tok/s تستغرق 200 token نحو 20 ثانية و500 token نحو 50 ثانية.',
          'ملف Q4_K_M أصغر من Q5_K_M، لذلك نقدّر أنه أسرع قليلاً. تحقق من الجودة على مهامك.',
          'أغلق التطبيقات الأخرى كثيفة استهلاك الذاكرة أو GPU وراقب ضغط الذاكرة في «مراقب النشاط».',
        ],
      },
      m5ultra: {
        id: 'm5ultra',
        title: 'Mac Studio بمعالج M5 Ultra: المواصفات وتقديرات السرعة',
        content: [
          '<a href="https://www.apple.com/mac-studio/specs/" class="text-primary hover:underline">تعلن Apple</a> أن عرض نطاق ذاكرة M5 Ultra يبلغ 1.2 TB/s، أي نحو ضعف 614 GB/s في نسخة M5 Max الأسرع. يأتي بسعة 96 GB، ويتطلب خيارا 256 GB و512 GB نسخة المعالج ذي 36 نواة وGPU ذي 80 نواة. أعلنت Apple عنه في 25 أغسطس 2026. السرعات أدناه محسوبة من عرض النطاق وحجم الملف. ليست قياسات، ولم تختبر PromptQuorum هذا العتاد، وقد يكون التحسن الفعلي أقل.',
        ],
        tableFormat: true,
        columns: [
          'النموذج',
          'M5 Max ‏128 GB (تقدير)',
          'M5 Ultra (تقدير)',
        ],
        rows: [
          {
            'النموذج': 'Llama 3.3 70B Q5_K_M (50 GB)',
            'M5 Max ‏128 GB (تقدير)': '~7–10 tok/s',
            'M5 Ultra (تقدير)': '~15–20 tok/s',
          },
          {
            'النموذج': 'Llama 3.3 70B Q8_0 (75 GB)',
            'M5 Max ‏128 GB (تقدير)': '~5–7 tok/s',
            'M5 Ultra (تقدير)': '~10–13 tok/s',
          },
          {
            'النموذج': 'Llama 3.3 70B FP16 (141 GB)',
            'M5 Max ‏128 GB (تقدير)': 'لا يتسع',
            'M5 Ultra (تقدير)': '~5–7 tok/s (بسعة 256 GB فأكثر)',
          },
        ],
        note: 'الأسعار الأمريكية وفق جدول Daring Fireball بتاريخ 25 أغسطس 2026: يبدأ M5 Ultra من $5,499 بسعة 96 GB. ولا تكفي 96 GB لملف FP16 البالغ 141 GB. تبلغ تكلفة إعداد 256 GB حسابياً نحو $10,800 (نسخة GPU ذي 80 نواة مع ترقية الذاكرة وSSD ‏1 TB). وذكر الجدول أن خيار 512 GB قادم في أواخر أكتوبر 2026؛ ولم تتحقق هذه الصفحة من سعره أو توفره الحالي. راجع متجر Apple.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل تكفي Q4 لنموذج 70B؟',
            a: 'Q4_K_M هي نقطة البداية المعتادة. ويتوقف مقدار فقدان الجودة مقارنةً بـ Q5 أو Q8 أو FP16 على النموذج والمهمة، ولم تقِسه هذه الصفحة. قارن بمطالباتك. وفي الاستخدامات القانونية أو الطبية أو عالية الأثر يجب أن يراجع شخص مؤهل المخرجات أياً كان التكميم.',
          },
          {
            q: 'هل يمكنني تحميل 70B Q5 ونموذج ثانٍ في الوقت نفسه؟',
            a: 'مع 128 GB يتسع ملف Q5_K_M البالغ 50 GB ونموذج 8B صغير بنحو 5 GB بحسب حجم الملفات، مع مساحة للسياق. الاستهلاك الفعلي أعلى من حجم الملفات، فتحقق منه بالأمر ollama ps و«مراقب النشاط». وعند التوليد المتزامن يتقاسم النموذجان عرض النطاق.',
          },
          {
            q: 'هل أشتري Mac Studio بمعالج M5 Max أم M5 Ultra؟',
            a: 'يتوقف ذلك على الذاكرة التي تحتاجها. الأسعار الأمريكية وفق جدول Daring Fireball بتاريخ 25 أغسطس 2026: ‏M5 Max بسعر $3,499 مع 64 GB و$5,099 مع 128 GB، وM5 Ultra من $5,499 مع 96 GB ونحو $10,800 مع 256 GB. فكّر في Ultra لتشغيل 70B بصيغة FP16، أو لنماذج تحتاج أكثر من 128 GB، أو لعرض نطاقه الأعلى. وإلا فقد يكفيك M5 Max. تأكد من الأسعار الحالية لدى Apple.',
          },
          {
            q: 'ما مقدار تسارع 70B على M5 Ultra مقارنةً بـ M5 Max؟',
            a: 'نظرياً حتى نحو الضعف، لأن Apple تعلن 1.2 TB/s مقابل 614 GB/s. ولصيغة Q5_K_M نقدّر نحو 15–20 tok/s مقابل 7–10. هذا حساب وليس اختبار أداء، وقد يكون المكسب الفعلي أقل.',
          },
          {
            q: 'هل يمكنني تشغيل نموذجَي 70B معاً على 128 GB؟',
            a: 'مجموع ملفَّي Q4_K_M هو 86 GB. وهو أقل من 128 GB، لكن السياق وmacOS وحد ذاكرة GPU تجعل الأمر ضيقاً، ويتقاسم النموذجان عرض النطاق عند التوليد المتزامن. تمنح 256 GB فأكثر مساحة أوسع بكثير.',
          },
          {
            q: 'كم تحتاج نماذج 70B من مساحة القرص؟',
            a: 'لنموذج Llama 3.3 70B في مكتبة Ollama: ‏43 GB (‏Q4_K_M) أو 50 GB (‏Q5_K_M) أو 75 GB (‏Q8_0). والاحتفاظ بالثلاثة يستهلك 168 GB. ومع عدة نماذج كبيرة يكون SSD بسعة 1 TB فأكثر أكثر راحة.',
          },
          {
            q: 'هل نموذج 70B المحلي بجودة GPT-5.6 في مهمتي؟',
            a: 'لا تفترض ذلك. لا تملك هذه الصفحة مقارنة متكافئة. تعلن Meta درجة 86.0 في MMLU لنموذج Llama 3.3 70B، لكن ذلك لا يخبرك بالكثير عن مهمتك، ودرجات الشركات المختلفة لا تقارن مباشرة. مرّر مطالباتك إلى الاثنين واحكم على النتائج.',
          },
          {
            q: 'هل ستعمل النماذج الكبيرة الأحدث على M5 Max؟',
            a: 'ليس تلقائياً. يجب أن يتسع ملف النموذج مع السياق في الذاكرة، وأن يدعم إصدار Ollama أو MLX لديك بنية النموذج. كثير من النماذج المفتوحة الأحدث من نوع مزيج الخبراء ويتجاوز مجموع معاملاتها 70B بكثير، فتحقق من حجم التنزيل أولاً.',
          },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'مقالات ذات صلة',
        items: [
          '[Apple Silicon لنماذج LLM المحلية: دليل كامل](/ar/local-llms/apple-silicon-local-llm-guide-2026) — مقارنة M1 إلى M5 Max، الذاكرة الموحدة موضّحة',
          '[M5 Pro مقابل M5 Max لنماذج LLM المحلية: المواصفات والسرعات التقديرية](/ar/local-llms/m5-pro-max-llm-benchmarks-2026) — تقديرات tok/s حسب حجم النموذج (غير مقاسة)، محسوبة من عرض نطاق الذاكرة وحجم ملف النموذج',
          '[كم من الذاكرة الموحدة لنماذج LLM المحلية؟](/ar/local-llms/how-much-unified-memory-for-local-llm) — دليل 16GB مقابل 36GB مقابل 64GB مقابل 128GB',
          '[أفضل نماذج LLM لـ Apple Silicon](/ar/local-llms/best-models-apple-silicon-2026) — توصيات النماذج حسب إعداد Mac',
          '[MLX مقابل Ollama مقابل llama.cpp على Mac](/ar/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — مقارنة سرعة الأطر ودليل الإعداد',
          '[Apple Silicon مقابل بطاقات رسوم NVIDIA لنماذج LLM المحلية](/ar/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — مقارنة أجهزة متعددة المنصات',
          '[تكميم نماذج LLM موضّحًا](/ar/local-llms/llm-quantization-explained) — تحليل عميق Q4/Q5/Q8/FP16',
          '[Mac Mini M5 كخادم ذكاء اصطناعي محلي](/ar/local-llms/mac-mini-m5-local-ai-server) — إعداد خادم استدلال دائم التشغيل',
          '[أفضل نموذج استدلال محلي 2026: ترتيب DeepSeek-R1 Distills](/ar/local-llms/best-local-reasoning-model-deepseek-r1-2026) — دليل ترتيب نماذج الاستدلال المحلية',
          '[جدول مرجعي لـ VRAM لـ DeepSeek-R1 Distill](/ar/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — الذاكرة المطلوبة حسب حجم النموذج المقطّر',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'تشغيل نماذج 70B على Apple Silicon في 2026: دليل M5 Max',
      description: 'تشغيل نماذج 70B على M5 Max: أحجام التنزيل، وتقديرات السرعة المحسوبة من عرض نطاق الذاكرة، والإعداد.',
      url: 'https://www.promptquorum.com/ar/local-llms/running-70b-models-apple-silicon-m5-max',
      inLanguage: 'ar',
      datePublished: '2026-05-15',
      dateModified: '2026-11-28',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Modelos 70B no Apple Silicon 2026: guia para M5 Max',
    seoTitle: '70B no M5 Max: memória, velocidade estimada, guia 2026',
    intro: 'Como rodar localmente modelos da classe 70B em um Apple Silicon M5 Max: qual quantização cabe na memória, velocidades estimadas a partir da largura de banda (não são medições), instalação com Ollama, preços dos EUA e os limites da comparação com APIs na nuvem.',
    metaDescription: 'Llama 3.3 70B num Mac com M5 Max: downloads de 43–75 GB, 5–11 tok/s estimados pela largura de banda (não medidos), instalação e preços dos EUA.',
    heroImage: '/images/running-70b-models-apple-silicon-m5-max-hardware-comparison-hero-pt.webp',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    audience: 'Donos de Mac e futuros compradores que querem rodar modelos grandes localmente.',
    readTime: '16 min de leitura',
    educationalLevel: 'Advanced',
    primaryTerm: 'modelos 70B Apple Silicon',
    ctaText: 'Você roda um modelo 70B localmente? Com o PromptQuorum você pode comparar as respostas dele com as de modelos na nuvem usando seus próprios prompts.',
    leadAnswerBlock: '**O Llama 3.3 70B cabe em um M5 Max com memória unificada suficiente: os downloads do Ollama têm 43 GB (Q4_K_M), 50 GB (Q5_K_M) e 75 GB (Q8_0). A partir dos 614 GB/s informados pela Apple, estimamos cerca de 9–11, 7–10 e 5–7 tok/s. São estimativas calculadas, não medições. Com 128 GB há folga; com 64 GB cabe o Q4_K_M com contexto limitado.**',
    quickAnswerTop: {
      pt: {
        question: 'Posso rodar modelos 70B no M5 Max?', // VERIFY
        answer: 'Sim, com memória unificada suficiente. O Llama 3.3 70B em Q4_K_M é um download de 43 GB. Um M5 Max de 64 GB consegue carregá-lo com contexto limitado; com 128 GB também cabem Q5_K_M (50 GB) e Q8_0 (75 GB). Velocidade estimada a 614 GB/s: cerca de 9–11 tok/s no Q4_K_M, 7–10 no Q5_K_M e 5–7 no Q8_0. São estimativas, não medições.', // VERIFY
        bullets: [
          'Q4_K_M: 43 GB, cerca de 9–11 tok/s (estimativa)',
          'Q5_K_M: 50 GB, cerca de 7–10 tok/s (estimativa)',
          'Q8_0: 75 GB, cerca de 5–7 tok/s (estimativa)',
          '64 GB: apenas Q4_K_M, com contexto limitado',
          'O M5 Max de 36 GB é pequeno demais para esses arquivos 70B',
          'Instalação: brew install ollama e depois ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Casos de uso práticos', anchor: '#use-cases' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Tamanho:** os downloads do Llama 3.3 70B no Ollama têm 43 GB (Q4_K_M), 50 GB (Q5_K_M) e 75 GB (Q8_0). Um M5 Max de 36 GB não é suficiente.',
          '**Velocidade (estimativa, não medida):** a 614 GB/s, cerca de 9–11 tok/s (Q4_K_M), 7–10 (Q5_K_M) e 5–7 (Q8_0).',
          '**Memória:** 64 GB comportam o Q4_K_M com contexto limitado; 128 GB também comportam Q5_K_M e Q8_0.',
          '**Preço nos EUA** (tabela do Daring Fireball de 25 de agosto de 2026, SSD de 512 GB): Mac Studio M5 Max $3,499 com 64 GB e $5,099 com 128 GB. No Brasil os preços são diferentes.',
          '**Instalação:** `brew install ollama`, inicie o servidor e rode `ollama pull llama3.3:70b`.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Um M5 Max com 64 GB ou mais de memória unificada roda um modelo 70B em Q4_K_M; a velocidade esperada é uma estimativa pela largura de banda, não uma medição.' },
        ],
      },
      useCases: {
        id: 'use-cases',
        title: 'Casos de uso práticos para inferência local com 70B',
        numberedItems: [
          {
            title: 'Documentos confidenciais',
            whyItMatters: 'Os prompts não precisam ser enviados a um provedor de modelo. Para dados jurídicos, médicos ou financeiros, você ainda precisa de base legal, controle de acesso, criptografia e regras de exclusão, e uma pessoa qualificada deve revisar o resultado. O uso local sozinho não é conformidade, e isto não é aconselhamento jurídico.',
          },
          {
            title: 'Assistência de código',
            whyItMatters: 'Com um modelo local e integração local no editor, o código pode ficar na sua rede. Verifique o que cada editor, extensão e app envia. Um Mac dividido entre vários desenvolvedores também divide a velocidade.',
          },
          {
            title: 'Rascunhos longos',
            whyItMatters: 'Não há cobrança por token nem limites de provedor, mas a cerca de 7–11 tok/s textos longos demoram. Confira os fatos de cada rascunho.',
          },
          {
            title: 'Pesquisa',
            whyItMatters: 'Útil para experimentos e para resumir materiais que você tem direito de processar. Confira afirmações e citações nas fontes originais.',
          },
          {
            title: 'Uso pessoal privado',
            whyItMatters: 'Notas e diários podem ficar no aparelho se os seus apps não os enviarem nem sincronizarem. Não trate as respostas como orientação médica ou financeira.',
          },
          {
            title: 'Trabalho offline',
            whyItMatters: 'Com o modelo e os programas já baixados, a inferência funciona sem conexão. Siga a lei aplicável e as regras de segurança da sua organização.',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Posso rodar modelos 70B no M5 Max?', a: 'Sim, com memória unificada suficiente: Q4_K_M (43 GB) cabe em 64 GB com contexto limitado, e 128 GB também comportam Q5_K_M (50 GB) e Q8_0 (75 GB). A 614 GB/s, estimamos cerca de 9–11, 7–10 e 5–7 tok/s. São estimativas, não medições.' },
          { q: 'Qual quantização devo usar para modelos 70B no M5 Max?', a: 'Comece com Q4_K_M. Se os seus próprios testes mostrarem erros importantes e houver memória, tente Q5_K_M ou Q8_0, que são arquivos maiores e, pela estimativa, mais lentos. Esta página não mediu a diferença de qualidade.' },
          { q: 'Quando o M5 Max compensa em relação a uma API na nuvem?', a: 'Depende do uso. Apenas como conta: um Mac de $5,099 que substitui $200 por mês de API se paga em cerca de 26 meses, sem contar energia e tempo de trabalho. Com pouco uso, talvez nunca se pague. Um modelo local também pode não igualar o modelo na nuvem que você usa.' },
          { q: 'Como configuro o Ollama para modelos 70B no Mac?', a: 'Instale com `brew install ollama`, inicie o servidor com `OLLAMA_KEEP_ALIVE=1h ollama serve` e, em outro terminal, rode `ollama pull llama3.3:70b` (Q4_K_M, 43 GB). Para Q5_K_M, use `ollama pull llama3.3:70b-instruct-q5_K_M`. Confira com `ollama ps` se o modelo está na GPU.' },
          { q: 'O M5 Max é melhor que uma RTX 4090 para modelos 70B?', a: 'Depende do objetivo. Uma única RTX 4090 tem 24 GB de VRAM e não comporta o arquivo Q4_K_M de 43 GB sem transferir parte para a CPU, o que reduz muito a velocidade. Já duas RTX 3090 (48 GB) chegaram a 19,5–31,9 tok/s em um [teste de terceiros](https://computingforgeeks.com/build-dual-rtx-3090-llm/) de outubro de 2026, acima da nossa estimativa para o M5 Max.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[M5 Pro vs M5 Max para LLMs locais: especificações e velocidades estimadas](/pt/local-llms/m5-pro-max-llm-benchmarks-2026) — tok/s estimados (não medidos) por tamanho de modelo, calculados a partir da largura de banda de memória e do tamanho do arquivo',
          '[Quanta memória unificada para LLMs locais?](/pt/local-llms/how-much-unified-memory-for-local-llm) — Guia 16GB vs 36GB vs 64GB vs 128GB',
          '[Melhores modelos LLM para Apple Silicon](/pt/local-llms/best-models-apple-silicon-2026) — Recomendações de modelos por configuração Mac',
          '[MLX vs Ollama vs llama.cpp no Mac](/pt/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — Comparação de velocidade de frameworks',
          '[Quantização de LLMs explicada](/pt/local-llms/llm-quantization-explained) — Análise profunda Q4/Q5/Q8/FP16',
          '[Melhor modelo de raciocínio local 2026: DeepSeek-R1 Distills classificados](/pt/local-llms/best-local-reasoning-model-deepseek-r1-2026) — guia com ranking de modelos de raciocínio locais',
          '[Guia de VRAM para DeepSeek-R1 Distill](/pt/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — memória necessária por tamanho de distill',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Modelos 70B no Apple Silicon 2026: guia para M5 Max',
      description: 'Modelos 70B no M5 Max: tamanhos de download, velocidades estimadas pela largura de banda e instalação.',
      url: 'https://www.promptquorum.com/pt/local-llms/running-70b-models-apple-silicon-m5-max',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-15',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: '70B-Modelle auf Apple Silicon 2026: Leitfaden für M5 Max',
    seoTitle: '70B auf M5 Max: Speicher, Tempo-Schätzung, Setup 2026',
    intro: 'So betreiben Sie Modelle der 70B-Klasse lokal auf einem Apple Silicon M5 Max: welche Quantisierung in den Speicher passt, aus der Speicherbandbreite berechnete Tempo-Schätzungen (keine Messungen), Einrichtung mit Ollama und MLX, US-Preise und die Grenzen eines Vergleichs mit Cloud-APIs.',
    metaDescription: 'Llama 3.3 70B auf einem M5-Max-Mac: Downloads von 43–75 GB, geschätzt 5–11 Tok/s aus der Speicherbandbreite (nicht gemessen), Setup und US-Preise.',
    heroImage: '/images/running-70b-models-apple-silicon-m5-max-hardware-comparison-hero-de.webp',
    twitterDescription: '70B auf M5 Max: Downloads von 43–75 GB, geschätzt 5–11 Tok/s (nicht gemessen), Einrichtung und US-Preise.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'DeepSeek-R1-Distill-Llama-70B',
      'Qwen2.5-72B',
      'Llama 3.1 8B',
    ],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: 'Mac-Besitzer und Kaufinteressierte, die große Modelle lokal betreiben möchten.',
    readTime: '16 Min. Lesezeit',
    educationalLevel: 'Advanced',
    primaryTerm: '70B-Modelle Apple Silicon',
    targetKeywords: ['70B-Modell Mac', 'M5 Max 128 GB LLM', '70B lokal ausführen', 'Llama 70B Apple Silicon', 'großes Modell lokale Inferenz'],
    ctaText: 'Sie betreiben ein 70B-Modell lokal? Mit PromptQuorum können Sie seine Antworten bei Ihren eigenen Prompts neben denen von Cloud-Modellen vergleichen.',
    leadAnswerBlock: '**Llama 3.3 70B passt auf einen M5 Max mit ausreichend Unified Memory: Die Ollama-Downloads sind 43 GB (Q4_K_M), 50 GB (Q5_K_M) und 75 GB (Q8_0) groß. Aus Apples Angabe von 614 GB/s schätzen wir etwa 9–11, 7–10 und 5–7 Tok/s. Das sind berechnete Schätzungen, keine Messungen. 128 GB bieten bequem Platz; 64 GB reichen für Q4_K_M mit begrenztem Kontext.**',
    quickAnswerTop: {
      en: {
        question: 'Can I run 70B models on an M5 Max?',
        answer: 'Yes, with enough unified memory. Llama 3.3 70B in Q4_K_M is a 43 GB download. A 64 GB M5 Max can hold it with limited context; 128 GB also takes Q5_K_M (50 GB) and Q8_0 (75 GB). Estimated speed at 614 GB/s: about 9–11 tok/s for Q4_K_M, 7–10 for Q5_K_M and 5–7 for Q8_0. These are estimates, not measurements.',
        bullets: [
          'Q4_K_M: 43 GB, about 9–11 tok/s (estimate)',
          'Q5_K_M: 50 GB, about 7–10 tok/s (estimate)',
          'Q8_0: 75 GB, about 5–7 tok/s (estimate)',
          '64 GB: Q4_K_M only, with limited context',
          'The 36 GB M5 Max is too small for these 70B files',
          'Setup: brew install ollama, then ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
      de: {
        question: 'Kann ich 70B-Modelle auf einem M5 Max ausführen?',
        answer: 'Ja, mit ausreichend Unified Memory. Llama 3.3 70B in Q4_K_M ist ein Download von 43 GB. Ein M5 Max mit 64 GB fasst ihn bei begrenztem Kontext; 128 GB reichen auch für Q5_K_M (50 GB) und Q8_0 (75 GB). Geschätztes Tempo bei 614 GB/s: etwa 9–11 Tok/s für Q4_K_M, 7–10 für Q5_K_M und 5–7 für Q8_0. Das sind Schätzungen, keine Messungen.',
        bullets: [
          'Q4_K_M: 43 GB, etwa 9–11 Tok/s (Schätzung)',
          'Q5_K_M: 50 GB, etwa 7–10 Tok/s (Schätzung)',
          'Q8_0: 75 GB, etwa 5–7 Tok/s (Schätzung)',
          '64 GB: nur Q4_K_M, mit begrenztem Kontext',
          'Der M5 Max mit 36 GB ist für diese 70B-Dateien zu klein',
          'Setup: brew install ollama, dann ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
      fr: { question: 'Puis-je exécuter des modèles 70B sur un M5 Max ?', answer: 'Oui, avec assez de mémoire unifiée. Llama 3.3 70B en Q4_K_M représente 43 Go à télécharger. Un M5 Max de 64 Go peut le charger avec un contexte limité ; 128 Go acceptent aussi Q5_K_M (50 Go) et Q8_0 (75 Go). Débit estimé à 614 Go/s : environ 9–11 tok/s en Q4_K_M, 7–10 en Q5_K_M et 5–7 en Q8_0. Ce sont des estimations, pas des mesures.', bullets: [
        'Q4_K_M : 43 Go, environ 9–11 tok/s (estimation)',
        'Q5_K_M : 50 Go, environ 7–10 tok/s (estimation)',
        'Q8_0 : 75 Go, environ 5–7 tok/s (estimation)',
        '64 Go : Q4_K_M uniquement, avec un contexte limité',
        'Le M5 Max 36 Go est trop petit pour ces fichiers 70B',
        'Installation : brew install ollama, puis ollama pull llama3.3:70b',
      ], updatedDate: '2026-11-28' },
      ja: { question: 'M5 Maxで70Bモデルは動きますか？', answer: 'はい、ユニファイドメモリが足りれば動きます。Llama 3.3 70BのQ4_K_Mは43 GBのダウンロードです。64 GBのM5 Maxでは限られたコンテキストで読み込めます。128 GBならQ5_K_M（50 GB）やQ8_0（75 GB）も収まります。614 GB/sでの推定速度は、Q4_K_Mで約9〜11 tok/s、Q5_K_Mで7〜10、Q8_0で5〜7です。実測ではなく推定です。', bullets: [
        'Q4_K_M：43 GB、約9〜11 tok/s（推定）',
        'Q5_K_M：50 GB、約7〜10 tok/s（推定）',
        'Q8_0：75 GB、約5〜7 tok/s（推定）',
        '64 GB：Q4_K_Mのみ、コンテキストは限られます',
        '36 GBのM5 Maxは、これらの70Bファイルには不足です',
        '導入：brew install ollama の後に ollama pull llama3.3:70b',
      ], updatedDate: '2026-11-28' },
      zh: { question: 'M5 Max 能运行 70B 模型吗？', answer: '可以，前提是统一内存足够。Llama 3.3 70B 的 Q4_K_M 版本下载大小为 43 GB。64 GB 的 M5 Max 可在有限上下文下加载；128 GB 还能装下 Q5_K_M（50 GB）和 Q8_0（75 GB）。按 614 GB/s 估算的速度：Q4_K_M 约 9–11 tok/s，Q5_K_M 约 7–10，Q8_0 约 5–7。以上为估算，并非实测。', bullets: [
        'Q4_K_M：43 GB，约 9–11 tok/s（估算）',
        'Q5_K_M：50 GB，约 7–10 tok/s（估算）',
        'Q8_0：75 GB，约 5–7 tok/s（估算）',
        '64 GB：仅适合 Q4_K_M，上下文有限',
        '36 GB 的 M5 Max 装不下这些 70B 文件',
        '安装：brew install ollama，然后 ollama pull llama3.3:70b',
      ], updatedDate: '2026-11-28' },
    },
    toc: [
      { label: 'Was Meta für 70B angibt', anchor: '#why' },
      { label: 'Hardware und Tempo-Schätzungen', anchor: '#hardware' },
      { label: 'Einrichtung Schritt für Schritt', anchor: '#setup' },
      { label: 'Qualität selbst testen', anchor: '#quality' },
      { label: 'Quantisierung', anchor: '#quantization' },
      { label: 'Andere große Modelle', anchor: '#alternatives' },
      { label: '70B lokal vs. Cloud-APIs', anchor: '#vs-cloud' },
      { label: 'Anwendungsfälle', anchor: '#use-cases' },
      { label: 'Tempo: MLX, Ollama und Tipps', anchor: '#speed-opts' },
      { label: 'M5-Ultra-Schätzungen', anchor: '#m5ultra' },
      { label: 'Häufige Fragen', anchor: '#faq' },
      { label: 'Verwandte Artikel', anchor: '#related-articles' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'Was Meta für Llama 3.3 70B angibt',
        content: [
          'Diese Werte stammen aus Metas <a href="https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct" class="text-primary hover:underline">Model Card zu Llama 3.3</a>. Es sind Herstellerangaben zum Modell selbst, nicht zu einem Q4-, Q5- oder Q8-Build auf einem Mac. Verschiedene Anbieter testen unterschiedlich, deshalb stellt diese Seite die Werte nicht neben die von Cloud-Modellen.',
        ],
        tableFormat: true,
        columns: [
          'Benchmark',
          'Testbedingung',
          'Von Meta angegebener Wert',
        ],
        rows: [
          {
            Benchmark: 'MMLU (Allgemeinwissen)',
            Testbedingung: '0-shot, Chain-of-Thought',
            'Von Meta angegebener Wert': '86,0',
          },
          {
            Benchmark: 'HumanEval (Code)',
            Testbedingung: '0-shot, pass@1',
            'Von Meta angegebener Wert': '88,4',
          },
          {
            Benchmark: 'MATH (Mathematik)',
            Testbedingung: 'Chain-of-Thought',
            'Von Meta angegebener Wert': '77,0',
          },
          {
            Benchmark: 'MGSM (mehrsprachige Mathematik)',
            Testbedingung: 'laut Meta',
            'Von Meta angegebener Wert': '91,1',
          },
          {
            Benchmark: 'IFEval (Befolgen von Anweisungen)',
            Testbedingung: 'laut Meta',
            'Von Meta angegebener Wert': '92,1',
          },
        ],
        note: 'Ein Benchmark-Wert zeigt nicht, wie gut ein quantisierter Build Ihre Aufgabe löst. Testen Sie mit eigenen Prompts.',
      },
      hardware: {
        id: 'hardware',
        title: 'Welche Hardware 70B-Modelle ausführt',
        tableFormat: true,
        columns: [
          'Hardware',
          'Quantisierung',
          'Download-Größe',
          'Tok/s',
          'Grundlage',
          'Passt?',
        ],
        rows: [
          {
            Hardware: 'M3 Max 96GB',
            Quantisierung: 'Q4_K_M',
            'Download-Größe': '43 GB',
            'Tok/s': '~4–6',
            Grundlage: 'Schätzung',
            'Passt?': '✓ Ja',
          },
          {
            Hardware: 'M3 Max 128GB',
            Quantisierung: 'Q5_K_M',
            'Download-Größe': '50 GB',
            'Tok/s': '~5–6',
            Grundlage: 'Schätzung',
            'Passt?': '✓ Ja',
          },
          {
            Hardware: 'M4 Max 128GB',
            Quantisierung: 'Q5_K_M',
            'Download-Größe': '50 GB',
            'Tok/s': '~7–9',
            Grundlage: 'Schätzung',
            'Passt?': '✓ Ja',
          },
          {
            Hardware: 'M5 Max 128GB',
            Quantisierung: 'Q4_K_M',
            'Download-Größe': '43 GB',
            'Tok/s': '~9–11',
            Grundlage: 'Schätzung',
            'Passt?': '✓ Ja',
          },
          {
            Hardware: 'M5 Max 128GB',
            Quantisierung: 'Q5_K_M',
            'Download-Größe': '50 GB',
            'Tok/s': '~7–10',
            Grundlage: 'Schätzung',
            'Passt?': '✓ Ja',
          },
          {
            Hardware: 'M5 Max 128GB',
            Quantisierung: 'Q8_0',
            'Download-Größe': '75 GB',
            'Tok/s': '~5–7',
            Grundlage: 'Schätzung',
            'Passt?': '✓ Ja',
          },
          {
            Hardware: 'M5 Ultra 256GB',
            Quantisierung: 'FP16',
            'Download-Größe': '141 GB',
            'Tok/s': '~5–7',
            Grundlage: 'Schätzung',
            'Passt?': '✓ Ja',
          },
          {
            Hardware: 'RTX 4090 24GB',
            Quantisierung: 'Q4_K_M',
            'Download-Größe': '43 GB',
            'Tok/s': '~1–5',
            Grundlage: 'Veröffentlichte Schätzungen',
            'Passt?': '✗ Nicht vollständig',
          },
          {
            Hardware: '2× RTX 3090 48GB',
            Quantisierung: 'Q4_K_M',
            'Download-Größe': '43 GB',
            'Tok/s': '19,5–31,9',
            Grundlage: 'Test eines Dritten',
            'Passt?': '✓ Ja',
          },
          {
            Hardware: '2× RTX 4090 48GB',
            Quantisierung: 'Q4_K_M',
            'Download-Größe': '43 GB',
            'Tok/s': '—',
            Grundlage: 'Kein geprüfter Wert',
            'Passt?': '✓ Ja',
          },
          {
            Hardware: '4× RTX 3090 96GB',
            Quantisierung: 'Q8_0',
            'Download-Größe': '75 GB',
            'Tok/s': '—',
            Grundlage: 'Kein geprüfter Wert',
            'Passt?': '✓ Ja',
          },
        ],
        note: 'So schätzen wir: Ein dichtes Modell liest für jedes Token ungefähr seine gesamte Datei, deshalb rechnen wir mit 60–80 % der Speicherbandbreite geteilt durch die Dateigröße. Das reale Tempo hängt von Software, Kontextlänge, Temperatur und Einstellungen ab. PromptQuorum hat diese Systeme nicht selbst gemessen. Apples veröffentlichte Bandbreiten: M3 Max 300 GB/s (96-GB-Version) bzw. 400 GB/s (128 GB), M4 Max 546 GB/s (128 GB), M5 Max 460 GB/s (36 GB) bzw. 614 GB/s (48, 64 und 128 GB), M5 Ultra 1,2 TB/s (<a href="https://www.apple.com/mac-studio/specs/" class="text-primary hover:underline">Apple-Datenblatt Mac Studio</a>). Der Wert für zwei RTX 3090 stammt aus einem <a href="https://computingforgeeks.com/build-dual-rtx-3090-llm/" class="text-primary hover:underline">Test von ComputingForGeeks</a> vom 19. Oktober 2026 auf einem gemieteten Rechner mit auf 290 W begrenzten Karten: 19,5 Tok/s mit dem standardmäßigen Layer-Split, 31,9 mit Tensor-Split. Demnach können zwei RTX 3090 deutlich schneller sein als ein M5 Max; der Mac bietet mehr Speicher in einem Gerät. Die 1–5 Tok/s für eine einzelne 24-GB-Karte mit CPU-Offload sind eine veröffentlichte Schätzung von <a href="https://insiderllm.com/guides/running-70b-models-locally-vram-guide/" class="text-primary hover:underline">InsiderLLM</a>. US-Preise für den Mac Studio laut <a href="https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios" class="text-primary hover:underline">Tabelle von Daring Fireball</a> vom 25. August 2026, mit 512-GB-SSD: M5 Max 36 GB 2.499 $ (zu klein für 70B), 64 GB 3.499 $, 128 GB 5.099 $. Der günstigste Mac mini mit 64 GB (M5 Pro, 15-Kern-CPU, 512-GB-SSD) kostet 2.699 $; wir schätzen dafür etwa 4–5 Tok/s. In Deutschland gelten andere Euro-Preise; prüfen Sie Apples Store.',
      },
      setupInstall: {
        id: 'setup',
        title: 'Schritt für Schritt: 70B mit Ollama betreiben',
        content: [
          'Schritt 1: Speicher prüfen. Schritt 2: Ollama installieren und den Server mit Einstellungen für ein großes Modell starten. Lassen Sie dieses Terminal offen und nutzen Sie für die nächsten Schritte ein zweites.',
        ],
        codeBlock: `# Step 1: check unified memory
system_profiler SPHardwareDataType | grep Memory

# Step 2: install Ollama
brew install ollama

# Start the server: one request at a time, keep the model loaded for 1 hour
OLLAMA_KEEP_ALIVE=1h OLLAMA_NUM_PARALLEL=1 ollama serve`,
        codeLanguage: 'bash',
      },
      setupPull: {
        id: 'setup-pull',
        title: 'Schritt 3: Das 70B-Modell herunterladen',
        content: [
          'Die Download-Dauer hängt von Ihrer Verbindung ab. Rein rechnerisch brauchen 43–75 GB bei 100 Mbit/s mindestens etwa 1–2 Stunden und bei 1 Gbit/s etwa 6–10 Minuten.',
        ],
        codeBlock: `# Q4_K_M, 43 GB download
ollama pull llama3.3:70b

# Q5_K_M, 50 GB download
ollama pull llama3.3:70b-instruct-q5_K_M

# Q8_0, 75 GB download
ollama pull llama3.3:70b-instruct-q8_0`,
        codeLanguage: 'bash',
      },
      setupRun: {
        id: 'setup-run',
        title: 'Schritte 4–6: Erster Start, GPU-Nutzung prüfen, API aufrufen',
        content: [
          'Beim ersten Aufruf muss das Modell in den Speicher geladen werden, deshalb dauert er länger. Solange es geladen bleibt, entfällt das Laden. macOS begrenzt, wie viel Unified Memory die GPU nutzen darf; prüfen Sie besonders bei 64 GB mit ollama ps, ob das Modell auf der GPU läuft.',
        ],
        codeBlock: `# Step 4: first run, with timing statistics
ollama run llama3.3:70b --verbose "Write a 200-word essay on local AI"

# Step 5: check that the model is loaded on the GPU
ollama ps

# Step 6: call the local API
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.3:70b",
  "messages": [{"role": "user", "content": "Explain quantum computing"}]
}'`,
        codeLanguage: 'bash',
      },
      quality8B: {
        id: 'quality',
        title: '8B und 70B mit eigenem Prompt vergleichen',
        content: [
          'Diese Seite zeigt keine Beispielantworten der Modelle, weil ein einzelner Prompt wenig beweist und wir keinen dokumentierten Testlauf vorlegen können.',
          'Geben Sie beiden Modellen denselben Prompt, zum Beispiel den folgenden, und vergleichen Sie die Ergebnisse.',
        ],
        codeBlock: `# Same prompt, two models
PROMPT="Explain why a stack overflow happens in recursive functions, then write a Python function that stops runaway recursion before it crashes."
ollama run llama3.1:8b "$PROMPT"
ollama run llama3.3:70b "$PROMPT"`,
        codeLanguage: 'bash',
        note: 'Führen Sie den Code jedes Modells aus. Prüfen Sie, ob er korrekt ist, Sonderfälle abdeckt und das Problem richtig erklärt.',
      },
      quality70B: {
        id: 'quality-70b',
        title: 'Eine Referenzlösung zum Gegenprüfen',
        codeBlock: `import sys
import functools

def detect_recursion(threshold=900):
    def decorator(func):
        depth = 0
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            nonlocal depth
            depth += 1
            try:
                if depth > threshold:
                    raise RecursionError(
                        f"Detected potential infinite recursion at depth {depth}"
                    )
                return func(*args, **kwargs)
            finally:
                depth -= 1
        return wrapper
    return decorator`,
        codeLanguage: 'python',
        note: 'Dieser Decorator mit Tiefenbegrenzung wurde als Referenz zum obigen Prompt geschrieben. Er ist keine Modellausgabe. Er stoppt eine umhüllte rekursive Funktion ab einer festgelegten Tiefe; dass die Rekursion endlos ist, kann er nicht beweisen.',
      },
      quantization: {
        id: 'quantization',
        title: 'Quantisierung bei 70B-Modellen',
        items: [
          'Ollama führt diese Downloads für Llama 3.3 70B: Q4_K_M 43 GB, Q5_K_M 50 GB, Q8_0 75 GB, FP16 141 GB.',
          'Kleinere Quantisierungen verlieren in der Regel etwas Qualität. Wie viel, hängt von Modell und Aufgabe ab; diese Seite hat es nicht gemessen.',
          'Praktisches Vorgehen: mit Q4_K_M beginnen und Q5_K_M oder Q8_0 testen, wenn Ihre eigenen Tests relevante Fehler zeigen. Höhere Präzision macht Ausgaben nicht ungeprüft verwendbar.',
          'Speicher: Die Datei ist nur das Minimum. Kontext, macOS und andere Apps brauchen zusätzlich Platz, daher sind für Q8_0 mit 75 GB 128 GB nötig.',
          'Geschätztes Tempo bei 614 GB/s: Q4_K_M etwa 9–11, Q5_K_M etwa 7–10, Q8_0 etwa 5–7 Tok/s. Bei 10 Tok/s dauern 500 Tokens etwa 50 Sekunden.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Andere große Modelle für Apple Silicon',
        tableFormat: true,
        columns: [
          'Modell',
          'Download-Größe',
          'Hinweise',
          'Geschätzte Tok/s auf M5 Max (614 GB/s)',
        ],
        rows: [
          {
            Modell: 'Llama 3.3 70B Instruct',
            'Download-Größe': '43 GB (Q4_K_M), 50 GB (Q5_K_M)',
            Hinweise: 'Allzweckmodell; Llama 3.3 Community License',
            'Geschätzte Tok/s auf M5 Max (614 GB/s)': '~9–11 (Q4), ~7–10 (Q5)',
          },
          {
            Modell: 'DeepSeek-R1-Distill-Llama-70B',
            'Download-Größe': '43 GB (deepseek-r1:70b)',
            Hinweise: 'Llama-basiertes Distill, das Denkschritte ausgibt',
            'Geschätzte Tok/s auf M5 Max (614 GB/s)': '~9–11',
          },
          {
            Modell: 'Qwen2.5-72B Instruct',
            'Download-Größe': '47 GB (Q4_K_M), 54 GB (Q5_K_M)',
            Hinweise: 'Vor kommerzieller Nutzung die Qwen-Lizenz prüfen',
            'Geschätzte Tok/s auf M5 Max (614 GB/s)': '~8–10 (Q4), ~7–9 (Q5)',
          },
        ],
        note: 'Das vollständige DeepSeek-R1 (671B) ist ein anderes, weit größeres Modell als das 70B-Distill. Die Download-Größen stammen aus der Ollama-Bibliothek. Die Tempowerte sind Bandbreiten-Schätzungen, keine Benchmarks. Eine Qualitätsrangfolge enthält diese Seite nicht. Lesen Sie vor der Nutzung die jeweilige Modelllizenz.',
      },
      alternativesPull: {
        id: 'alternatives-pull',
        title: 'Alternative Modelle herunterladen',
        codeBlock: `ollama pull llama3.3:70b-instruct-q5_K_M
ollama pull deepseek-r1:70b
ollama pull qwen2.5:72b-instruct-q4_K_M`,
        codeLanguage: 'bash',
      },
      vsCloud: {
        id: 'vs-cloud',
        title: '70B lokal vs. Cloud-APIs',
        tableFormat: true,
        columns: [
          'Kriterium',
          '70B lokal auf dem Mac',
          'Gehostete Cloud-API',
        ],
        rows: [
          {
            Kriterium: 'Wo Prompts verarbeitet werden',
            '70B lokal auf dem Mac': 'Auf Ihrem Mac',
            'Gehostete Cloud-API': 'Auf den Servern des Anbieters',
          },
          {
            Kriterium: 'Internet',
            '70B lokal auf dem Mac': 'Für die Inferenz nach dem Download nicht nötig',
            'Gehostete Cloud-API': 'Erforderlich',
          },
          {
            Kriterium: 'Kosten',
            '70B lokal auf dem Mac': 'Hardware vorab, dazu Strom und Ihre Zeit',
            'Gehostete Cloud-API': 'Meist Abrechnung pro Token oder Abo; aktuelle Preise prüfen',
          },
          {
            Kriterium: 'Rate-Limits',
            '70B lokal auf dem Mac': 'Keine Anbieterlimits; die Hardware ist die Grenze',
            'Gehostete Cloud-API': 'Vom Anbieter festgelegt',
          },
          {
            Kriterium: 'Tempo',
            '70B lokal auf dem Mac': 'Für 70B auf M5 Max geschätzt etwa 5–11 Tok/s',
            'Gehostete Cloud-API': 'Je nach Anbieter und Modell',
          },
          {
            Kriterium: 'Datenschutz',
            '70B lokal auf dem Mac': 'Hängt von Apps, Einstellungen und Gerätesicherheit ab',
            'Gehostete Cloud-API': 'Hängt von Bedingungen und Einstellungen des Anbieters ab',
          },
          {
            Kriterium: 'Einrichtung und Pflege',
            '70B lokal auf dem Mac': 'Installation, Updates und Absicherung liegen bei Ihnen',
            'Gehostete Cloud-API': 'Der Anbieter betreibt den Dienst',
          },
        ],
        note: 'Zur Abschätzung der Amortisation teilen Sie den Hardwarepreis durch die monatliche API-Rechnung, die tatsächlich ersetzt wird, abzüglich Strom und anderer laufender Kosten. Bei geringer Nutzung rechnet sich der Kauf womöglich nie. Auch macht lokale Verarbeitung allein Ihre Verarbeitung weder DSGVO- noch HIPAA-konform und erfüllt nicht automatisch eine Vertraulichkeitsvereinbarung oder andere Vorgaben. Dies ist keine Rechtsberatung.',
      },
      useCases: {
        id: 'use-cases',
        title: 'Praktische Anwendungsfälle für lokale 70B-Inferenz',
        numberedItems: [
          {
            title: 'Vertrauliche Dokumente',
            whyItMatters: 'Prompts müssen nicht an einen Modellanbieter gesendet werden. Bei Rechts-, Gesundheits- oder Finanzdaten brauchen Sie trotzdem eine Rechtsgrundlage, Zugriffskontrolle, Verschlüsselung und Löschregeln, und eine fachkundige Person muss die Ergebnisse prüfen. Lokale Nutzung allein ist keine Compliance; dies ist keine Rechtsberatung.',
          },
          {
            title: 'Programmierhilfe',
            whyItMatters: 'Mit lokalem Modell und lokaler Editor-Anbindung kann Code in Ihrem Netzwerk bleiben. Prüfen Sie, was Editor, Erweiterungen und Apps jeweils übertragen. Teilen sich mehrere Entwickler einen Mac, teilen sie auch sein Tempo.',
          },
          {
            title: 'Lange Textentwürfe',
            whyItMatters: 'Es gibt keine Token-Gebühren und keine Anbieterlimits, aber bei etwa 7–11 Tok/s dauern lange Texte. Prüfen Sie jeden Entwurf auf Fakten.',
          },
          {
            title: 'Forschung',
            whyItMatters: 'Nützlich für Experimente und zum Zusammenfassen von Material, das Sie verarbeiten dürfen. Prüfen Sie Aussagen und Zitate an den Originalquellen.',
          },
          {
            title: 'Private Nutzung',
            whyItMatters: 'Notizen und Tagebücher können auf dem Gerät bleiben, wenn Ihre Apps sie nicht hochladen oder synchronisieren. Behandeln Sie Antworten nicht als medizinische oder finanzielle Beratung.',
          },
          {
            title: 'Offline-Arbeit',
            whyItMatters: 'Sind Modell und Software heruntergeladen, funktioniert die Inferenz ohne Verbindung. Beachten Sie das geltende Recht und die Sicherheitsregeln Ihrer Organisation.',
          },
        ],
      },
      speedMlx: {
        id: 'speed-opts',
        title: 'MLX vs. Ollama',
        content: [
          'MLX ist Apples Framework für maschinelles Lernen; das Paket mlx-lm führt damit Sprachmodelle aus. Welches Werkzeug schneller ist, hängt von Modell, Quantisierung und Softwareversion ab. Wir haben das nicht gemessen, messen Sie also beide mit demselben Prompt. Das Beispiel nutzt die 4-Bit-Konvertierung der Community (mit 39,7 GB angegeben).',
        ],
        codeBlock: `# pip install mlx-lm
from mlx_lm import load, stream_generate

model, tokenizer = load("mlx-community/Llama-3.3-70B-Instruct-4bit")

messages = [{"role": "user", "content": "Explain quantum computing"}]
prompt = tokenizer.apply_chat_template(messages, add_generation_prompt=True)

for response in stream_generate(model, tokenizer, prompt, max_tokens=500):
    print(response.text, end="", flush=True)`,
        codeLanguage: 'python',
      },
      speedTips: {
        id: 'speed-tips',
        title: 'Weitere Tempo-Tipps',
        items: [
          'Modell geladen halten: OLLAMA_KEEP_ALIVE=1h vermeidet erneutes Laden zwischen Anfragen mit weniger als einer Stunde Abstand.',
          'Nutzen Sie Streaming, damit Sie die Antwort schon während der Erzeugung lesen können.',
          'Begrenzen Sie die Antwortlänge (num_predict in Ollama). Bei 10 Tok/s dauern 200 Tokens etwa 20 Sekunden und 500 Tokens etwa 50 Sekunden.',
          'Q4_K_M ist kleiner als Q5_K_M, daher schätzen wir es etwas schneller ein. Prüfen Sie die Qualität an eigenen Aufgaben.',
          'Schließen Sie andere speicher- und GPU-hungrige Apps und beobachten Sie den Speicherdruck in der Aktivitätsanzeige.',
        ],
      },
      m5ultra: {
        id: 'm5ultra',
        title: 'Mac Studio M5 Ultra: Daten und Tempo-Schätzungen',
        content: [
          'Für den M5 Ultra <a href="https://www.apple.com/mac-studio/specs/" class="text-primary hover:underline">nennt Apple</a> 1,2 TB/s Speicherbandbreite, etwa das Doppelte der 614 GB/s des schnelleren M5 Max. Er hat 96 GB; die Optionen mit 256 und 512 GB setzen die Version mit 36-Kern-CPU und 80-Kern-GPU voraus. Apple hat ihn am 25. August 2026 angekündigt. Die folgenden Werte sind aus Bandbreite und Dateigröße berechnet. Es sind keine Messungen, PromptQuorum hat diese Hardware nicht getestet, und die reale Skalierung kann niedriger ausfallen.',
        ],
        tableFormat: true,
        columns: [
          'Modell',
          'M5 Max 128 GB (Schätzung)',
          'M5 Ultra (Schätzung)',
        ],
        rows: [
          {
            Modell: 'Llama 3.3 70B Q5_K_M (50 GB)',
            'M5 Max 128 GB (Schätzung)': '~7–10 Tok/s',
            'M5 Ultra (Schätzung)': '~15–20 Tok/s',
          },
          {
            Modell: 'Llama 3.3 70B Q8_0 (75 GB)',
            'M5 Max 128 GB (Schätzung)': '~5–7 Tok/s',
            'M5 Ultra (Schätzung)': '~10–13 Tok/s',
          },
          {
            Modell: 'Llama 3.3 70B FP16 (141 GB)',
            'M5 Max 128 GB (Schätzung)': 'Passt nicht',
            'M5 Ultra (Schätzung)': '~5–7 Tok/s (ab 256 GB)',
          },
        ],
        note: 'US-Preise laut Tabelle von Daring Fireball vom 25. August 2026: M5 Ultra ab 5.499 $ mit 96 GB. 96 GB reichen für die 141 GB große FP16-Datei nicht. Eine Konfiguration mit 256 GB ergibt rechnerisch rund 10.800 $ (Modell mit 80-Kern-GPU plus Speicher-Upgrade, 1-TB-SSD). Die Tabelle führte 512 GB als „kommt Ende Oktober 2026“; Preis und aktuelle Verfügbarkeit hat diese Seite nicht geprüft. Sehen Sie in Apples Store nach.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Reicht Q4 bei einem 70B-Modell?', a: 'Q4_K_M ist der übliche Einstieg. Wie viel Qualität es gegenüber Q5, Q8 oder FP16 verliert, hängt von Modell und Aufgabe ab; diese Seite hat es nicht gemessen. Vergleichen Sie mit eigenen Prompts. Bei rechtlichen, medizinischen oder anderen folgenreichen Anwendungen muss unabhängig von der Quantisierung eine fachkundige Person die Ausgabe prüfen.' },
          { q: 'Kann ich 70B Q5 und ein zweites Modell gleichzeitig laden?', a: 'Bei 128 GB passen die 50 GB große Q5_K_M-Datei und ein kleines 8B-Modell mit etwa 5 GB nach Dateigröße hinein, mit Platz für Kontext. Der reale Speicherbedarf liegt über den Dateigrößen, prüfen Sie ihn mit ollama ps und der Aktivitätsanzeige. Gleichzeitig generierende Modelle teilen sich die Bandbreite.' },
          { q: 'Mac Studio mit M5 Max oder M5 Ultra kaufen?', a: 'Das hängt vom Speicherbedarf ab. US-Preise laut Tabelle von Daring Fireball vom 25. August 2026: M5 Max 3.499 $ mit 64 GB und 5.099 $ mit 128 GB; M5 Ultra ab 5.499 $ mit 96 GB und rund 10.800 $ mit 256 GB. Der Ultra kommt für 70B in FP16, für Modelle mit mehr als 128 GB Bedarf oder wegen der höheren Bandbreite in Betracht. Sonst kann der M5 Max genügen. Prüfen Sie aktuelle Preise bei Apple.' },
          { q: 'Wie viel schneller läuft 70B auf dem M5 Ultra als auf dem M5 Max?', a: 'Theoretisch bis zu etwa doppelt so schnell, weil Apple 1,2 TB/s gegenüber 614 GB/s angibt. Für Q5_K_M schätzen wir etwa 15–20 statt 7–10 Tok/s. Das ist eine Rechnung, kein Benchmark; der reale Gewinn kann kleiner sein.' },
          { q: 'Kann ich auf 128 GB zwei 70B-Modelle gleichzeitig ausführen?', a: 'Zwei Q4_K_M-Dateien ergeben 86 GB. Das liegt unter 128 GB, aber Kontext, macOS und das Limit für GPU-Speicher machen es eng, und beim gleichzeitigen Generieren teilen sich die Modelle die Bandbreite. Ab 256 GB ist deutlich mehr Platz.' },
          { q: 'Wie viel Speicherplatz brauchen 70B-Modelle?', a: 'Für Llama 3.3 70B in der Ollama-Bibliothek: 43 GB (Q4_K_M), 50 GB (Q5_K_M) oder 75 GB (Q8_0). Alle drei zusammen belegen 168 GB. Bei mehreren großen Modellen ist eine SSD ab 1 TB bequemer.' },
          { q: 'Ist ein lokales 70B-Modell für meine Aufgabe so gut wie GPT-5.6?', a: 'Davon sollten Sie nicht ausgehen. Diese Seite hat keinen gleichwertigen Vergleich. Meta gibt für Llama 3.3 70B 86,0 beim MMLU an, doch das sagt wenig über Ihre Aufgabe, und Werte verschiedener Anbieter sind nicht direkt vergleichbar. Geben Sie beiden Ihre eigenen Prompts und bewerten Sie die Ergebnisse.' },
          { q: 'Laufen neuere große Modelle auf dem M5 Max?', a: 'Nicht automatisch. Modelldatei plus Kontext müssen in den Speicher passen, und Ihre Version von Ollama oder MLX muss die Architektur unterstützen. Viele neuere offene Modelle sind Mixture-of-Experts-Modelle mit insgesamt weit mehr als 70B Parametern; prüfen Sie zuerst die Download-Größe.' },
          { q: 'Ist die Verarbeitung durch ein lokales 70B-Modell automatisch DSGVO-konform?', a: 'Nein, nicht allein dadurch. Bei lokaler Inferenz müssen Prompts unter Umständen an keinen Modellanbieter gehen, doch die DSGVO gilt weiterhin für Ihre Verarbeitung: Sie brauchen eine Rechtsgrundlage, geeignete technische und organisatorische Maßnahmen, Lösch- und Auskunftsprozesse und gegebenenfalls eine Datenschutz-Folgenabschätzung. Prüfen Sie auch Telemetrie, Cloud-Funktionen, Synchronisierung und Backups. Fragen Sie Ihren Datenschutzbeauftragten oder eine Anwältin bzw. einen Anwalt. Dies ist keine Rechtsberatung.' },
          { q: 'Lohnt sich ein M5 Max für ein kleines Team?', a: 'Das hängt von der Nutzung ab. Reine Rechnung: Ein Mac für 5.099 $, der monatlich 200 $ API-Gebühren ersetzt, hat sich nach etwa 26 Monaten bezahlt, Strom und Arbeitszeit nicht eingerechnet. Teilt sich ein Team einen Mac, teilt es auch dessen Tempo, und ein lokales Modell erreicht womöglich nicht Ihr heutiges Cloud-Modell. Testen Sie vor dem Kauf mit eigenen Aufgaben.' },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Verwandte Artikel',
        items: [
          '[Apple Silicon für lokale LLMs: Vollständiger Leitfaden](/de/local-llms/apple-silicon-local-llm-guide-2026) — Vergleich M1 bis M5 Max, Unified Memory erklärt',
          '[M5 Pro vs. M5 Max für lokale LLMs: Spezifikationen und Geschwindigkeitsschätzungen](/de/local-llms/m5-pro-max-llm-benchmarks-2026) — geschätzte (nicht gemessene) tok/s je Modellgröße, berechnet aus Speicherbandbreite und Modelldateigröße',
          '[Wie viel Unified Memory für lokale LLMs?](/de/local-llms/how-much-unified-memory-for-local-llm) — Leitfaden 16 GB vs 36 GB vs 64 GB vs 128 GB',
          '[Beste LLM-Modelle für Apple Silicon](/de/local-llms/best-models-apple-silicon-2026) — Modellempfehlungen je Mac-Konfiguration',
          '[MLX vs Ollama vs llama.cpp auf Mac](/de/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — Framework-Geschwindigkeitsvergleich und Einrichtungsleitfaden',
          '[Apple Silicon vs NVIDIA GPU für lokale LLMs](/de/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — plattformübergreifender Hardware-Vergleich',
          '[LLM-Quantisierung erklärt](/de/local-llms/llm-quantization-explained) — Q4/Q5/Q8/FP16 im Detail',
          '[Mac Mini M5 als lokaler KI-Server](/de/local-llms/mac-mini-m5-local-ai-server) — Einrichtung eines Inferenzservers für Dauerbetrieb',
          '[Bestes lokales Reasoning-Modell 2026: DeepSeek-R1 Distills im Ranking](/de/local-llms/best-local-reasoning-model-deepseek-r1-2026) — Ranking-Leitfaden zu lokalen Reasoning-Modellen',
          '[DeepSeek-R1 Distill VRAM-Spickzettel](/de/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — Speicherbedarf je Distill-Größe',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Modèles 70B sur Apple Silicon 2026 : guide M5 Max',
    seoTitle: '70B sur M5 Max : mémoire, débit estimé, guide 2026',
    intro: 'Comment exécuter en local des modèles de classe 70B sur un Apple Silicon M5 Max : quelle quantification tient en mémoire, débits estimés à partir de la bande passante (ce ne sont pas des mesures), installation avec Ollama et MLX, prix américains et limites d\'une comparaison avec les API cloud.',
    metaDescription: 'Llama 3.3 70B sur un Mac M5 Max : 43–75 Go à télécharger, 5–11 tok/s estimés via la bande passante (non mesurés), installation et prix US.',
    heroImage: '/images/running-70b-models-apple-silicon-m5-max-hardware-comparison-hero-fr.webp',
    twitterDescription: '70B sur M5 Max : 43–75 Go à télécharger, 5–11 tok/s estimés (non mesurés), installation et prix US.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'DeepSeek-R1-Distill-Llama-70B',
      'Qwen2.5-72B',
      'Llama 3.1 8B',
    ],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: 'Possesseurs de Mac et futurs acheteurs qui veulent exécuter de grands modèles en local.',
    readTime: '16 min de lecture',
    educationalLevel: 'Advanced',
    primaryTerm: 'Modèles 70B Apple Silicon',
    targetKeywords: ['Modèle 70B Mac', 'M5 Max 128GB LLM', 'exécuter 70B localement', 'Llama 70B Apple Silicon', 'inférence grand modèle local'],
    ctaText: 'Vous exécutez un modèle 70B en local ? Avec PromptQuorum, vous pouvez comparer ses réponses à celles de modèles cloud sur vos propres prompts.',
    leadAnswerBlock: '**Llama 3.3 70B tient sur un M5 Max doté d\'assez de mémoire unifiée : les téléchargements Ollama pèsent 43 Go (Q4_K_M), 50 Go (Q5_K_M) et 75 Go (Q8_0). À partir des 614 Go/s annoncés par Apple, nous estimons environ 9–11, 7–10 et 5–7 tok/s. Il s\'agit d\'estimations calculées, pas de mesures. 128 Go laissent de la marge ; 64 Go acceptent Q4_K_M avec un contexte limité.**',
    quickAnswerTop: {
      en: { question: 'Can I run 70B models on an M5 Max?', answer: 'Yes, with enough unified memory. Llama 3.3 70B in Q4_K_M is a 43 GB download. A 64 GB M5 Max can hold it with limited context; 128 GB also takes Q5_K_M (50 GB) and Q8_0 (75 GB). Estimated speed at 614 GB/s: about 9–11 tok/s for Q4_K_M, 7–10 for Q5_K_M and 5–7 for Q8_0. These are estimates, not measurements.', bullets: [
        'Q4_K_M: 43 GB, about 9–11 tok/s (estimate)',
        'Q5_K_M: 50 GB, about 7–10 tok/s (estimate)',
        'Q8_0: 75 GB, about 5–7 tok/s (estimate)',
        '64 GB: Q4_K_M only, with limited context',
        'The 36 GB M5 Max is too small for these 70B files',
        'Setup: brew install ollama, then ollama pull llama3.3:70b',
      ], updatedDate: '2026-11-28' },
      de: { question: 'Kann ich 70B-Modelle auf einem M5 Max ausführen?', answer: 'Ja, mit ausreichend Unified Memory. Llama 3.3 70B in Q4_K_M ist ein Download von 43 GB. Ein M5 Max mit 64 GB fasst ihn bei begrenztem Kontext; 128 GB reichen auch für Q5_K_M (50 GB) und Q8_0 (75 GB). Geschätztes Tempo bei 614 GB/s: etwa 9–11 Tok/s für Q4_K_M, 7–10 für Q5_K_M und 5–7 für Q8_0. Das sind Schätzungen, keine Messungen.', bullets: [
        'Q4_K_M: 43 GB, etwa 9–11 Tok/s (Schätzung)',
        'Q5_K_M: 50 GB, etwa 7–10 Tok/s (Schätzung)',
        'Q8_0: 75 GB, etwa 5–7 Tok/s (Schätzung)',
        '64 GB: nur Q4_K_M, mit begrenztem Kontext',
        'Der M5 Max mit 36 GB ist für diese 70B-Dateien zu klein',
        'Setup: brew install ollama, dann ollama pull llama3.3:70b',
      ], updatedDate: '2026-11-28' },
      fr: {
        question: 'Puis-je exécuter des modèles 70B sur un M5 Max ?',
        answer: 'Oui, avec assez de mémoire unifiée. Llama 3.3 70B en Q4_K_M représente 43 Go à télécharger. Un M5 Max de 64 Go peut le charger avec un contexte limité ; 128 Go acceptent aussi Q5_K_M (50 Go) et Q8_0 (75 Go). Débit estimé à 614 Go/s : environ 9–11 tok/s en Q4_K_M, 7–10 en Q5_K_M et 5–7 en Q8_0. Ce sont des estimations, pas des mesures.',
        bullets: [
          'Q4_K_M : 43 Go, environ 9–11 tok/s (estimation)',
          'Q5_K_M : 50 Go, environ 7–10 tok/s (estimation)',
          'Q8_0 : 75 Go, environ 5–7 tok/s (estimation)',
          '64 Go : Q4_K_M uniquement, avec un contexte limité',
          'Le M5 Max 36 Go est trop petit pour ces fichiers 70B',
          'Installation : brew install ollama, puis ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
      ja: { question: 'M5 Maxで70Bモデルは動きますか？', answer: 'はい、ユニファイドメモリが足りれば動きます。Llama 3.3 70BのQ4_K_Mは43 GBのダウンロードです。64 GBのM5 Maxでは限られたコンテキストで読み込めます。128 GBならQ5_K_M（50 GB）やQ8_0（75 GB）も収まります。614 GB/sでの推定速度は、Q4_K_Mで約9〜11 tok/s、Q5_K_Mで7〜10、Q8_0で5〜7です。実測ではなく推定です。', bullets: [
        'Q4_K_M：43 GB、約9〜11 tok/s（推定）',
        'Q5_K_M：50 GB、約7〜10 tok/s（推定）',
        'Q8_0：75 GB、約5〜7 tok/s（推定）',
        '64 GB：Q4_K_Mのみ、コンテキストは限られます',
        '36 GBのM5 Maxは、これらの70Bファイルには不足です',
        '導入：brew install ollama の後に ollama pull llama3.3:70b',
      ], updatedDate: '2026-11-28' },
      zh: { question: 'M5 Max 能运行 70B 模型吗？', answer: '可以，前提是统一内存足够。Llama 3.3 70B 的 Q4_K_M 版本下载大小为 43 GB。64 GB 的 M5 Max 可在有限上下文下加载；128 GB 还能装下 Q5_K_M（50 GB）和 Q8_0（75 GB）。按 614 GB/s 估算的速度：Q4_K_M 约 9–11 tok/s，Q5_K_M 约 7–10，Q8_0 约 5–7。以上为估算，并非实测。', bullets: [
        'Q4_K_M：43 GB，约 9–11 tok/s（估算）',
        'Q5_K_M：50 GB，约 7–10 tok/s（估算）',
        'Q8_0：75 GB，约 5–7 tok/s（估算）',
        '64 GB：仅适合 Q4_K_M，上下文有限',
        '36 GB 的 M5 Max 装不下这些 70B 文件',
        '安装：brew install ollama，然后 ollama pull llama3.3:70b',
      ], updatedDate: '2026-11-28' },
    },
    toc: [
      { label: 'Ce que publie Meta pour 70B', anchor: '#why' },
      { label: 'Matériel et débits estimés', anchor: '#hardware' },
      { label: 'Installation pas à pas', anchor: '#setup' },
      { label: 'Tester la qualité soi-même', anchor: '#quality' },
      { label: 'Quantification', anchor: '#quantization' },
      { label: 'Autres grands modèles', anchor: '#alternatives' },
      { label: '70B local et API cloud', anchor: '#vs-cloud' },
      { label: 'Cas d\'usage', anchor: '#use-cases' },
      { label: 'Vitesse : MLX, Ollama et conseils', anchor: '#speed-opts' },
      { label: 'Estimations M5 Ultra', anchor: '#m5ultra' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Articles liés', anchor: '#related-articles' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'Ce que publie Meta pour Llama 3.3 70B',
        content: [
          'Ces scores viennent de la <a href="https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct" class="text-primary hover:underline">fiche du modèle Llama 3.3 de Meta</a>. Ce sont des résultats annoncés par l\'éditeur pour le modèle lui-même, et non pour une version Q4, Q5 ou Q8 sur Mac. Chaque éditeur teste différemment : cette page ne les place donc pas à côté de ceux de modèles cloud.',
        ],
        tableFormat: true,
        columns: [
          'Benchmark',
          'Condition de test',
          'Score publié par Meta',
        ],
        rows: [
          {
            Benchmark: 'MMLU (culture générale)',
            'Condition de test': '0-shot, chain-of-thought',
            'Score publié par Meta': '86,0',
          },
          {
            Benchmark: 'HumanEval (code)',
            'Condition de test': '0-shot, pass@1',
            'Score publié par Meta': '88,4',
          },
          {
            Benchmark: 'MATH (mathématiques)',
            'Condition de test': 'chain-of-thought',
            'Score publié par Meta': '77,0',
          },
          {
            Benchmark: 'MGSM (maths multilingues)',
            'Condition de test': 'selon Meta',
            'Score publié par Meta': '91,1',
          },
          {
            Benchmark: 'IFEval (suivi d\'instructions)',
            'Condition de test': 'selon Meta',
            'Score publié par Meta': '92,1',
          },
        ],
        note: 'Un score de benchmark ne dit pas comment une version quantifiée traitera votre tâche. Testez avec vos propres prompts.',
      },
      hardware: {
        id: 'hardware',
        title: 'Quel matériel exécute les modèles 70B',
        tableFormat: true,
        columns: [
          'Matériel',
          'Quantification',
          'Taille du téléchargement',
          'tok/s',
          'Base',
          'Tient ?',
        ],
        rows: [
          {
            'Matériel': 'M3 Max 96GB',
            Quantification: 'Q4_K_M',
            'Taille du téléchargement': '43 GB',
            'tok/s': '~4–6',
            Base: 'Estimation',
            'Tient ?': '✓ Oui',
          },
          {
            'Matériel': 'M3 Max 128GB',
            Quantification: 'Q5_K_M',
            'Taille du téléchargement': '50 GB',
            'tok/s': '~5–6',
            Base: 'Estimation',
            'Tient ?': '✓ Oui',
          },
          {
            'Matériel': 'M4 Max 128GB',
            Quantification: 'Q5_K_M',
            'Taille du téléchargement': '50 GB',
            'tok/s': '~7–9',
            Base: 'Estimation',
            'Tient ?': '✓ Oui',
          },
          {
            'Matériel': 'M5 Max 128GB',
            Quantification: 'Q4_K_M',
            'Taille du téléchargement': '43 GB',
            'tok/s': '~9–11',
            Base: 'Estimation',
            'Tient ?': '✓ Oui',
          },
          {
            'Matériel': 'M5 Max 128GB',
            Quantification: 'Q5_K_M',
            'Taille du téléchargement': '50 GB',
            'tok/s': '~7–10',
            Base: 'Estimation',
            'Tient ?': '✓ Oui',
          },
          {
            'Matériel': 'M5 Max 128GB',
            Quantification: 'Q8_0',
            'Taille du téléchargement': '75 GB',
            'tok/s': '~5–7',
            Base: 'Estimation',
            'Tient ?': '✓ Oui',
          },
          {
            'Matériel': 'M5 Ultra 256GB',
            Quantification: 'FP16',
            'Taille du téléchargement': '141 GB',
            'tok/s': '~5–7',
            Base: 'Estimation',
            'Tient ?': '✓ Oui',
          },
          {
            'Matériel': 'RTX 4090 24GB',
            Quantification: 'Q4_K_M',
            'Taille du téléchargement': '43 GB',
            'tok/s': '~1–5',
            Base: 'Estimations publiées',
            'Tient ?': '✗ Pas entièrement',
          },
          {
            'Matériel': '2× RTX 3090 48GB',
            Quantification: 'Q4_K_M',
            'Taille du téléchargement': '43 GB',
            'tok/s': '19,5–31,9',
            Base: 'Test d\'un tiers',
            'Tient ?': '✓ Oui',
          },
          {
            'Matériel': '2× RTX 4090 48GB',
            Quantification: 'Q4_K_M',
            'Taille du téléchargement': '43 GB',
            'tok/s': '—',
            Base: 'Aucun chiffre vérifié',
            'Tient ?': '✓ Oui',
          },
          {
            'Matériel': '4× RTX 3090 96GB',
            Quantification: 'Q8_0',
            'Taille du téléchargement': '75 GB',
            'tok/s': '—',
            Base: 'Aucun chiffre vérifié',
            'Tient ?': '✓ Oui',
          },
        ],
        note: 'Notre méthode d\'estimation : un modèle dense lit à peu près tout son fichier pour chaque token ; nous prenons donc 60–80 % de la bande passante divisés par la taille du fichier. Le débit réel dépend du logiciel, de la longueur du contexte, de la température et des réglages. PromptQuorum n\'a pas mesuré ces systèmes. Bandes passantes publiées par Apple : M3 Max 300 Go/s (version 96 Go) ou 400 Go/s (128 Go), M4 Max 546 Go/s (128 Go), M5 Max 460 Go/s (36 Go) ou 614 Go/s (48, 64 et 128 Go), M5 Ultra 1,2 To/s (<a href="https://www.apple.com/mac-studio/specs/" class="text-primary hover:underline">fiche technique Mac Studio</a>). Le chiffre pour deux RTX 3090 vient d\'un <a href="https://computingforgeeks.com/build-dual-rtx-3090-llm/" class="text-primary hover:underline">test de ComputingForGeeks</a> daté du 19 octobre 2026, sur une machine louée avec des cartes limitées à 290 W : 19,5 tok/s avec la répartition par couches par défaut, 31,9 avec la répartition par tenseurs. Selon ces chiffres, deux RTX 3090 peuvent être nettement plus rapides qu\'un M5 Max ; le Mac offre plus de mémoire dans une seule machine. La plage de 1–5 tok/s pour une seule carte de 24 Go avec déport sur le CPU est une estimation publiée par <a href="https://insiderllm.com/guides/running-70b-models-locally-vram-guide/" class="text-primary hover:underline">InsiderLLM</a>. Prix américains du Mac Studio selon le <a href="https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios" class="text-primary hover:underline">tableau de Daring Fireball</a> du 25 août 2026, avec SSD 512 Go : M5 Max 36 Go 2 499 $ (trop petit pour 70B), 64 Go 3 499 $, 128 Go 5 099 $. Le Mac mini 64 Go le moins cher (M5 Pro, CPU 15 cœurs, SSD 512 Go) coûte 2 699 $ ; nous estimons environ 4–5 tok/s. Les prix en euros diffèrent ; consultez la boutique Apple.',
      },
      setupInstall: {
        id: 'setup',
        title: 'Pas à pas : exécuter 70B avec Ollama',
        content: [
          'Étape 1 : vérifiez la mémoire. Étape 2 : installez Ollama et lancez le serveur avec des réglages adaptés à un seul grand modèle. Laissez ce terminal ouvert et utilisez-en un second pour la suite.',
        ],
        numberedItems: [
          {
            title: 'Installer Ollama',
            whyItMatters: 'brew install ollama',
          },
          {
            title: 'Démarrer le service Ollama',
            whyItMatters: 'OLLAMA_KEEP_ALIVE=1h ollama serve',
          },
          {
            title: 'Télécharger le modèle 70B',
            whyItMatters: 'ollama pull llama3.3:70b',
          },
          {
            title: 'Démarrer le chat',
            whyItMatters: 'ollama run llama3.3:70b',
          },
          {
            title: 'Utiliser l\'API REST (facultatif)',
            whyItMatters: 'curl http://localhost:11434/api/chat -d \'{"model":"llama3.3:70b","messages":[{"role":"user","content":"Bonjour"}]}\'',
          },
        ],
      },
      quality: {
        id: 'quality',
        title: 'Comparer 8B et 70B avec votre propre prompt',
        content: [
          'Cette page ne publie aucune réponse d\'exemple des modèles : un seul prompt prouve peu et nous n\'avons pas de test documenté à présenter. Soumettez le même prompt aux deux modèles, par exemple celui ci-dessous, puis comparez les résultats.',
        ],
        items: [
          'Prompt : « Explain why a stack overflow happens in recursive functions, then write a Python function that stops runaway recursion before it crashes. »',
          'Exécutez le code écrit par chaque modèle. Vérifiez qu\'il est correct, gère les cas limites et explique bien le problème.',
          'Un score de benchmark ne dit pas comment une version quantifiée traitera votre tâche. Testez avec vos propres prompts.',
          'Scores publiés par Meta : voir le tableau de la première section ; ils ne portent pas sur une version quantifiée.',
        ],
      },
      quantization: {
        id: 'quantization',
        title: 'Quantification des modèles 70B',
        content: [
          'La quantification réduit la taille du modèle en mémoire, généralement au prix d\'une partie de la qualité.',
        ],
        items: [
          'Ollama propose ces téléchargements pour Llama 3.3 70B : Q4_K_M 43 Go, Q5_K_M 50 Go, Q8_0 75 Go, FP16 141 Go.',
          'Les quantifications plus petites perdent en général un peu de qualité. L\'ampleur dépend du modèle et de la tâche ; cette page ne l\'a pas mesurée.',
          'Démarche pratique : commencez en Q4_K_M, puis essayez Q5_K_M ou Q8_0 si vos tests révèlent des erreurs gênantes. Une précision plus élevée ne dispense pas de relire les réponses.',
          'Mémoire : le fichier n\'est qu\'un minimum. Contexte, macOS et autres applications en demandent davantage ; Q8_0 à 75 Go suppose un Mac de 128 Go. Débit estimé à 614 Go/s : Q4_K_M environ 9–11, Q5_K_M environ 7–10, Q8_0 environ 5–7 tok/s. À 10 tok/s, 500 tokens prennent environ 50 secondes.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Autres grands modèles pour Apple Silicon',
        items: [
          'Llama 3.3 70B Instruct : 43 Go (Q4_K_M) ou 50 Go (Q5_K_M), usage général, sous Llama 3.3 Community License.',
          'DeepSeek-R1-Distill-Llama-70B : 43 Go, distill basé sur Llama qui écrit ses étapes de raisonnement.',
          'Qwen2.5-72B Instruct : 47 Go (Q4_K_M) ou 54 Go (Q5_K_M) ; vérifiez la licence Qwen avant tout usage commercial.',
          'DeepSeek-R1 complet (671B) : un autre modèle, bien plus gros que le distill 70B.',
          'Autres grands modèles : vérifiez la taille du téléchargement, la prise en charge logicielle et la licence avant de télécharger. Cette page ne les classe pas par qualité.',
        ],
      },
      vsCloud: {
        id: 'vs-cloud',
        title: '70B local et API cloud',
        tableFormat: true,
        columns: [
          'Critère',
          '70B local sur Mac',
          'API cloud hébergée',
        ],
        rows: [
          {
            'Critère': 'Lieu de traitement des prompts',
            '70B local sur Mac': 'Sur votre Mac',
            'API cloud hébergée': 'Sur les serveurs du fournisseur',
          },
          {
            'Critère': 'Internet',
            '70B local sur Mac': 'Inutile pour l\'inférence une fois le modèle téléchargé',
            'API cloud hébergée': 'Obligatoire',
          },
          {
            'Critère': 'Coût',
            '70B local sur Mac': 'Matériel à l\'achat, plus électricité et votre temps',
            'API cloud hébergée': 'Souvent au token ou par abonnement ; vérifiez les tarifs actuels',
          },
          {
            'Critère': 'Quotas',
            '70B local sur Mac': 'Aucun quota fournisseur ; la limite est le matériel',
            'API cloud hébergée': 'Fixés par le fournisseur',
          },
          {
            'Critère': 'Vitesse',
            '70B local sur Mac': 'Environ 5–11 tok/s estimés sur M5 Max en 70B',
            'API cloud hébergée': 'Variable selon le fournisseur et le modèle',
          },
          {
            'Critère': 'Confidentialité',
            '70B local sur Mac': 'Dépend de vos applications, réglages et de la sécurité de l\'appareil',
            'API cloud hébergée': 'Dépend des conditions et réglages du fournisseur',
          },
          {
            'Critère': 'Installation et maintenance',
            '70B local sur Mac': 'Vous installez, mettez à jour et sécurisez',
            'API cloud hébergée': 'Le fournisseur exploite le service',
          },
        ],
        note: 'Pour estimer l\'amortissement, divisez le prix du matériel par la facture API mensuelle réellement remplacée, après déduction de l\'électricité et des autres frais. En usage léger, l\'achat peut ne jamais être rentabilisé. De plus, le traitement local ne suffit pas à lui seul à rendre votre traitement conforme au RGPD, à la loi HIPAA, à un accord de confidentialité ou à toute autre règle. Ceci n\'est pas un conseil juridique.',
      },
      useCases: {
        id: 'use-cases',
        title: 'Cas d\'usage concrets du 70B en local',
        numberedItems: [
          {
            title: 'Documents confidentiels',
            whyItMatters: 'Les prompts n\'ont pas à être envoyés à un fournisseur de modèle. Pour des données juridiques, médicales ou financières, il faut toujours une base légale, un contrôle d\'accès, du chiffrement et des règles d\'effacement, et une personne qualifiée doit vérifier les réponses. L\'usage local seul ne constitue pas une conformité ; ceci n\'est pas un conseil juridique.',
          },
          {
            title: 'Aide au code',
            whyItMatters: 'Avec un modèle local et une intégration locale dans l\'éditeur, le code peut rester sur votre réseau. Vérifiez ce que transmet chaque éditeur, extension et application. Un Mac partagé entre développeurs partage aussi sa vitesse.',
          },
          {
            title: 'Recherche',
            whyItMatters: 'Utile pour des expériences et pour résumer des documents que vous avez le droit de traiter. Vérifiez affirmations et citations dans les sources d\'origine.',
          },
          {
            title: 'Usage personnel privé',
            whyItMatters: 'Notes et journaux peuvent rester sur l\'appareil si vos applications ne les envoient pas ou ne les synchronisent pas. Ne prenez pas les réponses pour un avis médical ou financier.',
          },
          {
            title: 'Travail hors ligne',
            whyItMatters: 'Une fois le modèle et les logiciels téléchargés, l\'inférence fonctionne sans connexion. Respectez le droit applicable et les règles de sécurité de votre organisation.',
          },
        ],
      },
      speedOpts: {
        id: 'speed-opts',
        title: 'MLX et Ollama',
        content: [
          'MLX est le framework d\'apprentissage automatique d\'Apple, et le paquet mlx-lm permet d\'y exécuter des modèles de langage. Le plus rapide des deux outils dépend du modèle, de la quantification et des versions. Nous ne l\'avons pas mesuré : chronométrez les deux avec le même prompt. L\'exemple utilise la conversion 4 bits de la communauté (annoncée à 39,7 Go).',
        ],
        items: [
          'Gardez le modèle chargé : OLLAMA_KEEP_ALIVE=1h évite un rechargement entre des requêtes espacées de moins d\'une heure.',
          'Activez le streaming pour lire la réponse pendant sa génération.',
          'Limitez la longueur des réponses (num_predict dans Ollama). À 10 tok/s, 200 tokens prennent environ 20 secondes et 500 tokens environ 50.',
          'Q4_K_M est un fichier plus petit que Q5_K_M ; nous l\'estimons donc un peu plus rapide. Vérifiez la qualité sur vos tâches.',
          'Fermez les autres applications gourmandes en mémoire ou en GPU et surveillez la pression mémoire dans le Moniteur d\'activité.',
        ],
      },
      m5ultra: {
        id: 'm5ultra',
        title: 'Mac Studio M5 Ultra : données et débits estimés',
        content: [
          'Pour le M5 Ultra, <a href="https://www.apple.com/mac-studio/specs/" class="text-primary hover:underline">Apple annonce</a> 1,2 To/s de bande passante, environ le double des 614 Go/s du M5 Max le plus rapide. Il est livré avec 96 Go ; les options 256 Go et 512 Go exigent la version CPU 36 cœurs et GPU 80 cœurs. Apple l\'a annoncé le 25 août 2026. Les chiffres ci-dessous sont calculés à partir de la bande passante et de la taille des fichiers. Ce ne sont pas des mesures, PromptQuorum n\'a pas testé ce matériel et le gain réel peut être inférieur.',
        ],
        tableFormat: true,
        columns: [
          'Modèle',
          'M5 Max 128 Go (estimation)',
          'M5 Ultra (estimation)',
        ],
        rows: [
          {
            'Modèle': 'Llama 3.3 70B Q5_K_M (50 Go)',
            'M5 Max 128 Go (estimation)': '~7–10 tok/s',
            'M5 Ultra (estimation)': '~15–20 tok/s',
          },
          {
            'Modèle': 'Llama 3.3 70B Q8_0 (75 Go)',
            'M5 Max 128 Go (estimation)': '~5–7 tok/s',
            'M5 Ultra (estimation)': '~10–13 tok/s',
          },
          {
            'Modèle': 'Llama 3.3 70B FP16 (141 Go)',
            'M5 Max 128 Go (estimation)': 'Ne tient pas',
            'M5 Ultra (estimation)': '~5–7 tok/s (256 Go ou plus)',
          },
        ],
        note: 'Prix américains selon le tableau de Daring Fireball du 25 août 2026 : M5 Ultra à partir de 5 499 $ avec 96 Go. 96 Go ne suffisent pas au fichier FP16 de 141 Go. Une configuration 256 Go revient par calcul à environ 10 800 $ (modèle à GPU 80 cœurs plus l\'extension mémoire, SSD 1 To). Le tableau annonçait les 512 Go pour fin octobre 2026 ; cette page n\'en a vérifié ni le prix ni la disponibilité actuelle. Consultez la boutique Apple.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Q4 suffit-il pour un modèle 70B ?', a: 'Q4_K_M est le point de départ habituel. La perte de qualité face à Q5, Q8 ou FP16 dépend du modèle et de la tâche ; cette page ne l\'a pas mesurée. Comparez avec vos prompts. Pour des usages juridiques, médicaux ou à fort enjeu, une personne qualifiée doit vérifier les réponses quelle que soit la quantification.' },
          { q: 'Puis-je charger 70B Q5 et un second modèle en même temps ?', a: 'Avec 128 Go, le fichier Q5_K_M de 50 Go et un petit modèle 8B d\'environ 5 Go tiennent d\'après la taille des fichiers, avec de la place pour le contexte. La mémoire réellement utilisée est supérieure : vérifiez avec ollama ps et le Moniteur d\'activité. Des modèles qui génèrent en même temps se partagent la bande passante.' },
          { q: 'Faut-il acheter un Mac Studio M5 Max ou M5 Ultra ?', a: 'Cela dépend de la mémoire nécessaire. Prix américains selon le tableau de Daring Fireball du 25 août 2026 : M5 Max 3 499 $ avec 64 Go et 5 099 $ avec 128 Go ; M5 Ultra dès 5 499 $ avec 96 Go et environ 10 800 $ avec 256 Go. Envisagez l\'Ultra pour le 70B en FP16, pour des modèles dépassant 128 Go ou pour sa bande passante. Sinon, le M5 Max peut suffire. Vérifiez les prix actuels chez Apple.' },
          { q: 'Le 70B est-il beaucoup plus rapide sur M5 Ultra que sur M5 Max ?', a: 'En théorie jusqu\'à environ 2 fois, Apple annonçant 1,2 To/s contre 614 Go/s. En Q5_K_M, nous estimons environ 15–20 tok/s contre 7–10. C\'est un calcul, pas un benchmark ; le gain réel peut être moindre.' },
          { q: 'Puis-je exécuter deux modèles 70B à la fois avec 128 Go ?', a: 'Deux fichiers Q4_K_M totalisent 86 Go. C\'est moins que 128 Go, mais le contexte, macOS et la limite de mémoire GPU rendent l\'ensemble juste, et les modèles se partagent la bande passante s\'ils génèrent en même temps. À partir de 256 Go, la marge est bien plus grande.' },
          { q: 'Quel espace disque pour les modèles 70B ?', a: 'Pour Llama 3.3 70B dans la bibliothèque Ollama : 43 Go (Q4_K_M), 50 Go (Q5_K_M) ou 75 Go (Q8_0). Conserver les trois occupe 168 Go. Avec plusieurs grands modèles, un SSD d\'au moins 1 To est plus confortable.' },
          { q: 'Un 70B local vaut-il GPT-5.6 pour ma tâche ?', a: 'Ne le tenez pas pour acquis. Cette page ne dispose d\'aucune comparaison à conditions égales. Meta publie 86,0 au MMLU pour Llama 3.3 70B, mais cela dit peu sur votre tâche, et les scores d\'éditeurs différents ne sont pas directement comparables. Soumettez vos prompts aux deux et jugez les résultats.' },
          { q: 'Les grands modèles plus récents fonctionneront-ils sur M5 Max ?', a: 'Pas automatiquement. Le fichier du modèle et le contexte doivent tenir en mémoire, et votre version d\'Ollama ou de MLX doit prendre en charge l\'architecture. Beaucoup de modèles ouverts récents sont à mélange d\'experts et dépassent largement 70B au total : vérifiez d\'abord la taille du téléchargement.' },
          { q: 'Un 70B local sur M5 Max rend-il mon traitement conforme au RGPD ?', a: 'Non, pas à lui seul. L\'inférence locale peut éviter d\'envoyer les prompts à un fournisseur de modèle, mais le RGPD continue de s\'appliquer à votre traitement : il faut une base légale, des mesures de sécurité, des procédures d\'effacement et d\'accès et, le cas échéant, une analyse d\'impact. Vérifiez aussi la télémétrie, les fonctions cloud, la synchronisation et les sauvegardes. Consultez la documentation de la CNIL, votre délégué à la protection des données ou un avocat. Vérifiez également la licence de chaque modèle. Ceci n\'est pas un conseil juridique.' },
          { q: 'Un M5 Max est-il rentable pour une petite équipe ?', a: 'Tout dépend de l\'usage. Simple calcul : un Mac à 5 099 $ qui remplace 200 $ de frais d\'API par mois est amorti en environ 26 mois, hors électricité et temps de travail. Une équipe qui partage un Mac partage aussi sa vitesse, et un modèle local peut ne pas égaler le modèle cloud que vous utilisez. Testez vos tâches avant d\'acheter.' },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Articles associés',
        items: [
          '[Apple Silicon pour LLMs locaux : Guide complet](/fr/local-llms/apple-silicon-local-llm-guide-2026) — Comparaison M1 à M5 Max, explication mémoire unifiée',
          '[M5 Pro vs M5 Max pour les LLM locaux : caractéristiques et vitesses estimées](/fr/local-llms/m5-pro-max-llm-benchmarks-2026) — tok/s estimés (non mesurés) selon la taille du modèle, calculés à partir de la bande passante mémoire et de la taille du fichier',
          '[Combien de mémoire unifiée pour LLMs locaux ?](/fr/local-llms/how-much-unified-memory-for-local-llm) — Guide 16GB vs 36GB vs 64GB vs 128GB',
          '[Meilleurs modèles LLM pour Apple Silicon](/fr/local-llms/best-models-apple-silicon-2026) — Recommandations de modèles par configuration Mac',
          '[MLX vs Ollama vs llama.cpp sur Mac](/fr/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — Comparaison vitesse framework et configuration',
          '[Apple Silicon vs GPU NVIDIA pour LLMs locaux](/fr/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — Comparaison matériel cross-platform',
          '[Quantification LLM expliquée](/fr/local-llms/llm-quantization-explained) — Approfondissement Q4/Q5/Q8/FP16',
          '[Mac Mini M5 comme serveur IA local](/fr/local-llms/mac-mini-m5-local-ai-server) — Configuration serveur inférence always-on',
          '[Meilleur modèle de raisonnement local 2026 : DeepSeek-R1 classé](/fr/local-llms/best-local-reasoning-model-deepseek-r1-2026) — guide comparatif des modèles de raisonnement locaux',
          '[Antisèche VRAM pour DeepSeek-R1 Distill](/fr/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — mémoire nécessaire selon la taille du distill',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Apple Siliconで70Bモデルを動かす2026：M5 Maxガイド',
    seoTitle: 'M5 Maxで70B：メモリ・速度推定・導入ガイド2026',
    intro: 'Apple SiliconのM5 Maxで70Bクラスのモデルをローカル実行する方法を解説します。メモリに収まる量子化、メモリ帯域幅から計算した速度の推定値（実測ではありません）、OllamaとMLXでの導入、米国価格、クラウドAPIと比較する際の限界を扱います。',
    metaDescription: 'M5 Max搭載MacでLlama 3.3 70Bを動かす：ダウンロードは43〜75 GB、帯域幅からの推定で5〜11 tok/s（実測ではありません）。導入手順と米国価格を解説。',
    heroImage: '/images/running-70b-models-apple-silicon-m5-max-hardware-comparison-hero-ja.webp',
    twitterDescription: 'M5 Maxで70B：ダウンロード43〜75 GB、推定5〜11 tok/s（実測ではありません）、導入手順と米国価格。',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'DeepSeek-R1-Distill-Llama-70B',
      'Qwen2.5-72B',
      'Llama 3.1 8B',
    ],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: '大規模モデルをローカルで動かしたいMacユーザーと購入検討者。',
    readTime: '16分で読める',
    educationalLevel: 'Advanced',
    primaryTerm: '70BモデルApple Silicon',
    targetKeywords: ['70BモデルMac', 'M5 Max 128GB LLM', '70Bローカル実行', 'Llama 70B Apple Silicon', '大規模モデルローカル推論'],
    ctaText: '70Bモデルをローカルで動かしていますか？ PromptQuorumなら、ご自身のプロンプトでクラウドモデルの回答と並べて比較できます。',
    leadAnswerBlock: '**Llama 3.3 70Bは、十分なユニファイドメモリを備えたM5 Maxに収まります。Ollamaのダウンロードサイズは43 GB（Q4_K_M）、50 GB（Q5_K_M）、75 GB（Q8_0）です。Appleが公表する614 GB/sから、約9〜11、7〜10、5〜7 tok/sと推定します。計算による推定値であり、実測ではありません。128 GBなら余裕があり、64 GBではQ4_K_Mを限られたコンテキストで使えます。**',
    quickAnswerTop: {
      en: {
        question: 'Can I run 70B models on an M5 Max?',
        answer: 'Yes, with enough unified memory. Llama 3.3 70B in Q4_K_M is a 43 GB download. A 64 GB M5 Max can hold it with limited context; 128 GB also takes Q5_K_M (50 GB) and Q8_0 (75 GB). Estimated speed at 614 GB/s: about 9–11 tok/s for Q4_K_M, 7–10 for Q5_K_M and 5–7 for Q8_0. These are estimates, not measurements.',
        bullets: [
          'Q4_K_M: 43 GB, about 9–11 tok/s (estimate)',
          'Q5_K_M: 50 GB, about 7–10 tok/s (estimate)',
          'Q8_0: 75 GB, about 5–7 tok/s (estimate)',
          '64 GB: Q4_K_M only, with limited context',
          'The 36 GB M5 Max is too small for these 70B files',
          'Setup: brew install ollama, then ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
      de: {
        question: 'Kann ich 70B-Modelle auf einem M5 Max ausführen?',
        answer: 'Ja, mit ausreichend Unified Memory. Llama 3.3 70B in Q4_K_M ist ein Download von 43 GB. Ein M5 Max mit 64 GB fasst ihn bei begrenztem Kontext; 128 GB reichen auch für Q5_K_M (50 GB) und Q8_0 (75 GB). Geschätztes Tempo bei 614 GB/s: etwa 9–11 Tok/s für Q4_K_M, 7–10 für Q5_K_M und 5–7 für Q8_0. Das sind Schätzungen, keine Messungen.',
        bullets: [
          'Q4_K_M: 43 GB, etwa 9–11 Tok/s (Schätzung)',
          'Q5_K_M: 50 GB, etwa 7–10 Tok/s (Schätzung)',
          'Q8_0: 75 GB, etwa 5–7 Tok/s (Schätzung)',
          '64 GB: nur Q4_K_M, mit begrenztem Kontext',
          'Der M5 Max mit 36 GB ist für diese 70B-Dateien zu klein',
          'Setup: brew install ollama, dann ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
      fr: {
        question: 'Puis-je exécuter des modèles 70B sur un M5 Max ?',
        answer: 'Oui, avec assez de mémoire unifiée. Llama 3.3 70B en Q4_K_M représente 43 Go à télécharger. Un M5 Max de 64 Go peut le charger avec un contexte limité ; 128 Go acceptent aussi Q5_K_M (50 Go) et Q8_0 (75 Go). Débit estimé à 614 Go/s : environ 9–11 tok/s en Q4_K_M, 7–10 en Q5_K_M et 5–7 en Q8_0. Ce sont des estimations, pas des mesures.',
        bullets: [
          'Q4_K_M : 43 Go, environ 9–11 tok/s (estimation)',
          'Q5_K_M : 50 Go, environ 7–10 tok/s (estimation)',
          'Q8_0 : 75 Go, environ 5–7 tok/s (estimation)',
          '64 Go : Q4_K_M uniquement, avec un contexte limité',
          'Le M5 Max 36 Go est trop petit pour ces fichiers 70B',
          'Installation : brew install ollama, puis ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
      ja: {
        question: 'M5 Maxで70Bモデルは動きますか？',
        answer: 'はい、ユニファイドメモリが足りれば動きます。Llama 3.3 70BのQ4_K_Mは43 GBのダウンロードです。64 GBのM5 Maxでは限られたコンテキストで読み込めます。128 GBならQ5_K_M（50 GB）やQ8_0（75 GB）も収まります。614 GB/sでの推定速度は、Q4_K_Mで約9〜11 tok/s、Q5_K_Mで7〜10、Q8_0で5〜7です。実測ではなく推定です。',
        bullets: [
          'Q4_K_M：43 GB、約9〜11 tok/s（推定）',
          'Q5_K_M：50 GB、約7〜10 tok/s（推定）',
          'Q8_0：75 GB、約5〜7 tok/s（推定）',
          '64 GB：Q4_K_Mのみ、コンテキストは限られます',
          '36 GBのM5 Maxは、これらの70Bファイルには不足です',
          '導入：brew install ollama の後に ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
      zh: { question: 'M5 Max 能运行 70B 模型吗？', answer: '可以，前提是统一内存足够。Llama 3.3 70B 的 Q4_K_M 版本下载大小为 43 GB。64 GB 的 M5 Max 可在有限上下文下加载；128 GB 还能装下 Q5_K_M（50 GB）和 Q8_0（75 GB）。按 614 GB/s 估算的速度：Q4_K_M 约 9–11 tok/s，Q5_K_M 约 7–10，Q8_0 约 5–7。以上为估算，并非实测。', bullets: [
        'Q4_K_M：43 GB，约 9–11 tok/s（估算）',
        'Q5_K_M：50 GB，约 7–10 tok/s（估算）',
        'Q8_0：75 GB，约 5–7 tok/s（估算）',
        '64 GB：仅适合 Q4_K_M，上下文有限',
        '36 GB 的 M5 Max 装不下这些 70B 文件',
        '安装：brew install ollama，然后 ollama pull llama3.3:70b',
      ], updatedDate: '2026-11-28' },
    },
    toc: [
      { label: 'Metaが公表する70Bの数値', anchor: '#why' },
      { label: 'ハードウェアと速度の推定', anchor: '#hardware' },
      { label: '導入手順', anchor: '#setup' },
      { label: '品質を自分で確かめる', anchor: '#quality' },
      { label: '量子化', anchor: '#quantization' },
      { label: 'その他の大規模モデル', anchor: '#alternatives' },
      { label: 'ローカル70BとクラウドAPI', anchor: '#vs-cloud' },
      { label: '活用例', anchor: '#use-cases' },
      { label: '速度：MLX・Ollamaとコツ', anchor: '#speed-opts' },
      { label: 'M5 Ultraの推定', anchor: '#m5ultra' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-articles' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'MetaがLlama 3.3 70Bについて公表している数値',
        content: [
          '以下のスコアはMetaの<a href="https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct" class="text-primary hover:underline">Llama 3.3モデルカード</a>によるものです。モデル本体についての開発元の公表値であり、Mac上のQ4・Q5・Q8版の結果ではありません。評価条件は提供元ごとに異なるため、このページではクラウドモデルの数値と並べません。',
        ],
        tableFormat: true,
        columns: [
          'ベンチマーク',
          '評価条件',
          'Meta公表スコア',
        ],
        rows: [
          {
            'ベンチマーク': 'MMLU（一般知識）',
            '評価条件': '0-shot、chain-of-thought',
            'Meta公表スコア': '86.0',
          },
          {
            'ベンチマーク': 'HumanEval（コード）',
            '評価条件': '0-shot、pass@1',
            'Meta公表スコア': '88.4',
          },
          {
            'ベンチマーク': 'MATH（数学）',
            '評価条件': 'chain-of-thought',
            'Meta公表スコア': '77.0',
          },
          {
            'ベンチマーク': 'MGSM（多言語の数学）',
            '評価条件': 'Metaの記載どおり',
            'Meta公表スコア': '91.1',
          },
          {
            'ベンチマーク': 'IFEval（指示への追従）',
            '評価条件': 'Metaの記載どおり',
            'Meta公表スコア': '92.1',
          },
        ],
        note: 'ベンチマークの点数だけでは、量子化版があなたの作業をどこまでこなせるかは分かりません。自分のプロンプトで確かめてください。',
      },
      hardware: {
        id: 'hardware',
        title: '70Bモデルを動かせるハードウェア',
        tableFormat: true,
        columns: [
          'ハードウェア',
          '量子化',
          'ダウンロードサイズ',
          'tok/s',
          '根拠',
          '収まる？',
        ],
        rows: [
          {
            'ハードウェア': 'M3 Max 96GB',
            '量子化': 'Q4_K_M',
            'ダウンロードサイズ': '43 GB',
            'tok/s': '~4–6',
            '根拠': '推定',
            '収まる？': '✓ はい',
          },
          {
            'ハードウェア': 'M3 Max 128GB',
            '量子化': 'Q5_K_M',
            'ダウンロードサイズ': '50 GB',
            'tok/s': '~5–6',
            '根拠': '推定',
            '収まる？': '✓ はい',
          },
          {
            'ハードウェア': 'M4 Max 128GB',
            '量子化': 'Q5_K_M',
            'ダウンロードサイズ': '50 GB',
            'tok/s': '~7–9',
            '根拠': '推定',
            '収まる？': '✓ はい',
          },
          {
            'ハードウェア': 'M5 Max 128GB',
            '量子化': 'Q4_K_M',
            'ダウンロードサイズ': '43 GB',
            'tok/s': '~9–11',
            '根拠': '推定',
            '収まる？': '✓ はい',
          },
          {
            'ハードウェア': 'M5 Max 128GB',
            '量子化': 'Q5_K_M',
            'ダウンロードサイズ': '50 GB',
            'tok/s': '~7–10',
            '根拠': '推定',
            '収まる？': '✓ はい',
          },
          {
            'ハードウェア': 'M5 Max 128GB',
            '量子化': 'Q8_0',
            'ダウンロードサイズ': '75 GB',
            'tok/s': '~5–7',
            '根拠': '推定',
            '収まる？': '✓ はい',
          },
          {
            'ハードウェア': 'M5 Ultra 256GB',
            '量子化': 'FP16',
            'ダウンロードサイズ': '141 GB',
            'tok/s': '~5–7',
            '根拠': '推定',
            '収まる？': '✓ はい',
          },
          {
            'ハードウェア': 'RTX 4090 24GB',
            '量子化': 'Q4_K_M',
            'ダウンロードサイズ': '43 GB',
            'tok/s': '~1–5',
            '根拠': '公開されている推定',
            '収まる？': '✗ 全体は収まらない',
          },
          {
            'ハードウェア': '2× RTX 3090 48GB',
            '量子化': 'Q4_K_M',
            'ダウンロードサイズ': '43 GB',
            'tok/s': '19.5–31.9',
            '根拠': '第三者テスト',
            '収まる？': '✓ はい',
          },
          {
            'ハードウェア': '2× RTX 4090 48GB',
            '量子化': 'Q4_K_M',
            'ダウンロードサイズ': '43 GB',
            'tok/s': '—',
            '根拠': '確認済みの数値なし',
            '収まる？': '✓ はい',
          },
          {
            'ハードウェア': '4× RTX 3090 96GB',
            '量子化': 'Q8_0',
            'ダウンロードサイズ': '75 GB',
            'tok/s': '—',
            '根拠': '確認済みの数値なし',
            '収まる？': '✓ はい',
          },
        ],
        note: '推定方法：密なモデルは1トークンごとにファイル全体をほぼ読み出すため、メモリ帯域幅の60〜80%をファイルサイズで割っています。実際の速度はソフトウェア、コンテキスト長、温度、設定で変わります。PromptQuorumはこれらの機器を実測していません。Apple公表の帯域幅は、M3 Maxが300 GB/s（96 GB版）または400 GB/s（128 GB）、M4 Maxが546 GB/s（128 GB）、M5 Maxが460 GB/s（36 GB）または614 GB/s（48・64・128 GB）、M5 Ultraが1.2 TB/sです（<a href="https://www.apple.com/mac-studio/specs/" class="text-primary hover:underline">Apple Mac Studio仕様</a>）。RTX 3090 2枚の数値は、2026年10月19日付の<a href="https://computingforgeeks.com/build-dual-rtx-3090-llm/" class="text-primary hover:underline">ComputingForGeeksのテスト</a>（各カードを290 Wに制限したレンタルマシン）で、標準のレイヤー分割が19.5 tok/s、テンソル分割が31.9 tok/sでした。この条件では、RTX 3090 2枚はM5 Maxより明らかに速くなり得ます。Macの利点は1台でより多くのメモリを使えることです。24 GBのGPU 1枚でCPUオフロードした場合の1〜5 tok/sは、<a href="https://insiderllm.com/guides/running-70b-models-locally-vram-guide/" class="text-primary hover:underline">InsiderLLM</a>が公開している推定値です。Mac Studioの米国価格は<a href="https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios" class="text-primary hover:underline">Daring Fireballの一覧表</a>（2026年8月25日、SSD 512 GB）によると、M5 Max 36 GBが$2,499（70Bには不足）、64 GBが$3,499、128 GBが$5,099です。64 GBで最も安いMac mini（M5 Pro、15コアCPU、SSD 512 GB）は$2,699で、速度は約4〜5 tok/sと推定します。日本の価格は異なるため、Apple Storeで確認してください（価格は米ドル表記のままです）。',
      },
      setupInstall: {
        id: 'setup',
        title: '手順：Ollamaで70Bを実行する',
        content: [
          '手順1：メモリを確認します。手順2：Ollamaをインストールし、大きなモデル1本向けの設定でサーバーを起動します。このターミナルは開いたままにし、以降の手順は別のターミナルで行います。',
        ],
        codeBlock: `# Step 1: check unified memory
system_profiler SPHardwareDataType | grep Memory

# Step 2: install Ollama
brew install ollama

# Start the server: one request at a time, keep the model loaded for 1 hour
OLLAMA_KEEP_ALIVE=1h OLLAMA_NUM_PARALLEL=1 ollama serve`,
        codeLanguage: 'bash',
      },
      setupPull: {
        id: 'setup-pull',
        title: '手順3：70Bモデルをダウンロードする',
        content: [
          '所要時間は回線によります。単純計算では、43〜75 GBは100 Mbpsで少なくとも約1〜2時間、1 Gbpsで約6〜10分かかります。',
        ],
        codeBlock: `# Q4_K_M, 43 GB download
ollama pull llama3.3:70b

# Q5_K_M, 50 GB download
ollama pull llama3.3:70b-instruct-q5_K_M

# Q8_0, 75 GB download
ollama pull llama3.3:70b-instruct-q8_0`,
        codeLanguage: 'bash',
      },
      setupRun: {
        id: 'setup-run',
        title: '手順4〜6：初回実行、GPU使用の確認、API呼び出し',
        content: [
          '初回はモデルをメモリに読み込むため時間がかかります。読み込まれたままの間は、以降のリクエストで読み込みが不要です。macOSはGPUが使えるユニファイドメモリ量を制限するため、特に64 GBでは ollama ps でGPU上で動いているか確認してください。',
        ],
        codeBlock: `# Step 4: first run, with timing statistics
ollama run llama3.3:70b --verbose "Write a 200-word essay on local AI"

# Step 5: check that the model is loaded on the GPU
ollama ps

# Step 6: call the local API
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.3:70b",
  "messages": [{"role": "user", "content": "Explain quantum computing"}]
}'`,
        codeLanguage: 'bash',
      },
      quality8B: {
        id: 'quality',
        title: '自分のプロンプトで8Bと70Bを比べる',
        content: [
          'このページには各モデルの回答例を掲載していません。1つのプロンプトでは根拠が弱く、記録の残るテスト結果もないためです。',
          '下の例のような同じプロンプトを両方のモデルに入力し、結果を比べてください。',
        ],
        codeBlock: `# Same prompt, two models
PROMPT="Explain why a stack overflow happens in recursive functions, then write a Python function that stops runaway recursion before it crashes."
ollama run llama3.1:8b "$PROMPT"
ollama run llama3.3:70b "$PROMPT"`,
        codeLanguage: 'bash',
        note: '各モデルが書いたコードを実行し、正しく動くか、例外的な場合に対応できるか、問題を正確に説明しているかを確認してください。',
      },
      quality70B: {
        id: 'quality-70b',
        title: '照合用の参考解答',
        codeBlock: `import sys
import functools

def detect_recursion(threshold=900):
    def decorator(func):
        depth = 0
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            nonlocal depth
            depth += 1
            try:
                if depth > threshold:
                    raise RecursionError(
                        f"Detected potential infinite recursion at depth {depth}"
                    )
                return func(*args, **kwargs)
            finally:
                depth -= 1
        return wrapper
    return decorator`,
        codeLanguage: 'python',
        note: 'この深さ制限デコレーターは、上のプロンプトの参考解答として書いたもので、モデルの出力ではありません。対象の再帰関数が設定した深さを超えると停止させますが、無限再帰であることは証明できません。',
      },
      quantization: {
        id: 'quantization',
        title: '70Bモデルの量子化',
        items: [
          'OllamaのLlama 3.3 70Bのダウンロードサイズは、Q4_K_M 43 GB、Q5_K_M 50 GB、Q8_0 75 GB、FP16 141 GBです。',
          '小さい量子化ほど、一般に品質はいくらか下がります。下がり幅はモデルと作業で異なり、このページでは測定していません。',
          '実用的にはQ4_K_Mから始め、自分のテストで見過ごせない誤りが出たらQ5_K_MやQ8_0を試します。精度を上げても、出力の確認は必要です。',
          'メモリ：ファイルサイズは最低ラインにすぎません。コンテキスト、macOS、他のアプリの分も必要なため、75 GBのQ8_0には128 GBのMacが必要です。',
          '614 GB/sでの推定速度：Q4_K_M約9〜11、Q5_K_M約7〜10、Q8_0約5〜7 tok/s。10 tok/sなら500トークンに約50秒かかります。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Apple Silicon向けのその他の大規模モデル',
        tableFormat: true,
        columns: [
          'モデル',
          'ダウンロードサイズ',
          '備考',
          'M5 Max（614 GB/s）の推定tok/s',
        ],
        rows: [
          {
            'モデル': 'Llama 3.3 70B Instruct',
            'ダウンロードサイズ': '43 GB（Q4_K_M）、50 GB（Q5_K_M）',
            '備考': '汎用。Llama 3.3 Community License',
            'M5 Max（614 GB/s）の推定tok/s': '~9〜11（Q4）、~7〜10（Q5）',
          },
          {
            'モデル': 'DeepSeek-R1-Distill-Llama-70B',
            'ダウンロードサイズ': '43 GB（deepseek-r1:70b）',
            '備考': '思考過程を出力するLlamaベースの蒸留モデル',
            'M5 Max（614 GB/s）の推定tok/s': '~9〜11',
          },
          {
            'モデル': 'Qwen2.5-72B Instruct',
            'ダウンロードサイズ': '47 GB（Q4_K_M）、54 GB（Q5_K_M）',
            '備考': '商用利用の前にQwenのライセンスを確認',
            'M5 Max（614 GB/s）の推定tok/s': '~8〜10（Q4）、~7〜9（Q5）',
          },
        ],
        note: 'フル版のDeepSeek-R1（671B）は、70B蒸留版とは別の、はるかに大きいモデルです。サイズはOllamaライブラリの値です。速度は帯域幅からの推定でベンチマークではありません。このページは品質の順位を付けていません。利用前に各モデルのライセンスを読んでください。',
      },
      alternativesPull: {
        id: 'alternatives-pull',
        title: '代替モデルをダウンロードする',
        codeBlock: `ollama pull llama3.3:70b-instruct-q5_K_M
ollama pull deepseek-r1:70b
ollama pull qwen2.5:72b-instruct-q4_K_M`,
        codeLanguage: 'bash',
      },
      vsCloud: {
        id: 'vs-cloud',
        title: 'ローカル70BとクラウドAPI',
        tableFormat: true,
        columns: [
          '項目',
          'Macでのローカル70B',
          'クラウドAPI',
        ],
        rows: [
          {
            '項目': 'プロンプトの処理場所',
            'Macでのローカル70B': '自分のMac',
            'クラウドAPI': '提供元のサーバー',
          },
          {
            '項目': 'インターネット',
            'Macでのローカル70B': 'モデル取得後の推論には不要',
            'クラウドAPI': '必要',
          },
          {
            '項目': '費用',
            'Macでのローカル70B': 'ハードウェアの初期費用に加え、電気代と手間',
            'クラウドAPI': '多くは従量課金か定額制。最新料金を確認',
          },
          {
            '項目': '利用制限',
            'Macでのローカル70B': '提供元の制限はなく、上限はハードウェア',
            'クラウドAPI': '提供元が設定',
          },
          {
            '項目': '速度',
            'Macでのローカル70B': 'M5 Maxの70Bで推定約5〜11 tok/s',
            'クラウドAPI': '提供元とモデルにより異なる',
          },
          {
            '項目': 'プライバシー',
            'Macでのローカル70B': 'アプリ、設定、端末の安全対策による',
            'クラウドAPI': '提供元の規約と設定による',
          },
          {
            '項目': '導入と保守',
            'Macでのローカル70B': '導入、更新、安全対策は自分で行う',
            'クラウドAPI': '提供元がサービスを運用',
          },
        ],
        note: '回収期間は、ハードウェア価格を「実際に置き換える月々のAPI料金から電気代などの運用費を引いた額」で割って見積もります。利用が少なければ回収できないこともあります。また、ローカル処理だけで、GDPR、HIPAA、個人情報保護法、秘密保持契約などの要件を満たすことにはなりません。これは法的助言ではありません。',
      },
      useCases: {
        id: 'use-cases',
        title: 'ローカル70B推論の活用例',
        numberedItems: [
          {
            title: '機密文書',
            whyItMatters: 'プロンプトをモデル提供元へ送らずに済みます。ただし法務・医療・金融の情報には、適法な取り扱いの根拠、アクセス管理、暗号化、削除ルールが必要で、出力は専門知識のある人が確認しなければなりません。ローカル利用だけではコンプライアンスになりません。これは法的助言ではありません。',
          },
          {
            title: 'コーディング支援',
            whyItMatters: 'ローカルモデルとローカル接続のエディタ連携なら、コードを社内ネットワークに留められます。エディタ、拡張機能、アプリが何を送信するかを確認してください。1台を複数人で使うと速度も分け合います。',
          },
          {
            title: '長文の下書き',
            whyItMatters: 'トークン課金も提供元の制限もありませんが、約7〜11 tok/sでは長文に時間がかかります。下書きは必ず事実確認してください。',
          },
          {
            title: '調査・研究',
            whyItMatters: '実験や、処理する権利のある資料の要約に役立ちます。主張や引用は原典で確認してください。',
          },
          {
            title: '個人のプライベート利用',
            whyItMatters: 'アプリがアップロードや同期をしなければ、メモや日記は端末内に留まります。回答を医療や金融の助言として扱わないでください。',
          },
          {
            title: 'オフライン作業',
            whyItMatters: 'モデルとソフトウェアを取得済みなら、接続なしで推論できます。適用される法令と所属組織のセキュリティ規則に従ってください。',
          },
        ],
      },
      speedMlx: {
        id: 'speed-opts',
        title: 'MLXとOllama',
        content: [
          'MLXはAppleの機械学習フレームワークで、mlx-lmパッケージを使うと言語モデルを実行できます。どちらが速いかは、モデル、量子化、ソフトウェアのバージョンで変わります。当サイトは測定していないので、同じプロンプトで両方を計測してください。例ではコミュニティの4ビット変換版（表記は39.7 GB）を使います。',
        ],
        codeBlock: `# pip install mlx-lm
from mlx_lm import load, stream_generate

model, tokenizer = load("mlx-community/Llama-3.3-70B-Instruct-4bit")

messages = [{"role": "user", "content": "Explain quantum computing"}]
prompt = tokenizer.apply_chat_template(messages, add_generation_prompt=True)

for response in stream_generate(model, tokenizer, prompt, max_tokens=500):
    print(response.text, end="", flush=True)`,
        codeLanguage: 'python',
      },
      speedTips: {
        id: 'speed-tips',
        title: '速度のその他のコツ',
        items: [
          'モデルを読み込んだままにする：OLLAMA_KEEP_ALIVE=1hなら、間隔が1時間未満のリクエストで再読み込みを避けられます。',
          'ストリーミングを使えば、生成中から回答を読めます。',
          '回答の長さを制限します（Ollamaではnum_predict）。10 tok/sなら200トークンで約20秒、500トークンで約50秒です。',
          'Q4_K_MはQ5_K_Mよりファイルが小さいため、やや速いと推定されます。品質は自分の作業で確認してください。',
          'メモリやGPUを多く使う他のアプリを終了し、アクティビティモニタでメモリプレッシャーを確認してください。',
        ],
      },
      m5ultra: {
        id: 'm5ultra',
        title: 'M5 Ultra搭載Mac Studio：仕様と速度の推定',
        content: [
          '<a href="https://www.apple.com/mac-studio/specs/" class="text-primary hover:underline">Appleの仕様</a>では、M5 Ultraのメモリ帯域幅は1.2 TB/sで、高速版M5 Maxの614 GB/sの約2倍です。メモリは96 GBで、256 GBと512 GBは36コアCPU・80コアGPU版が必要です。Appleは2026年8月25日に発表しました。以下の速度は帯域幅とファイルサイズからの計算値です。実測ではなく、PromptQuorumはこの機器をテストしていません。実際の伸びはより小さい可能性があります。',
        ],
        tableFormat: true,
        columns: [
          'モデル',
          'M5 Max 128 GB（推定）',
          'M5 Ultra（推定）',
        ],
        rows: [
          {
            'モデル': 'Llama 3.3 70B Q5_K_M（50 GB）',
            'M5 Max 128 GB（推定）': '約7〜10 tok/s',
            'M5 Ultra（推定）': '約15〜20 tok/s',
          },
          {
            'モデル': 'Llama 3.3 70B Q8_0（75 GB）',
            'M5 Max 128 GB（推定）': '約5〜7 tok/s',
            'M5 Ultra（推定）': '約10〜13 tok/s',
          },
          {
            'モデル': 'Llama 3.3 70B FP16（141 GB）',
            'M5 Max 128 GB（推定）': '収まらない',
            'M5 Ultra（推定）': '約5〜7 tok/s（256 GB以上）',
          },
        ],
        note: 'Daring Fireballの2026年8月25日の一覧表による米国価格では、M5 Ultraは96 GBで$5,499からです。141 GBのFP16ファイルは96 GBに収まりません。256 GB構成は計算上約$10,800です（80コアGPU版＋メモリ増設、SSD 1 TB）。同表では512 GBは2026年10月下旬予定とされていました。その価格と現在の販売状況は当ページでは確認していません。Apple Storeで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '70BモデルはQ4で十分ですか？', a: 'Q4_K_Mは一般的な出発点です。Q5、Q8、FP16と比べた品質の差はモデルと作業によって異なり、このページでは測定していません。自分のプロンプトで比べてください。法務や医療など影響の大きい用途では、量子化にかかわらず専門知識のある人が出力を確認する必要があります。' },
          { q: '70B Q5と別のモデルを同時に読み込めますか？', a: '128 GBなら、50 GBのQ5_K_Mファイルと約5 GBの8Bモデルはファイルサイズ上収まり、コンテキストの余地もあります。実際の使用量はファイルより大きいため、ollama ps とアクティビティモニタで確認してください。同時に生成すると帯域幅を分け合います。' },
          { q: 'M5 MaxとM5 UltraのどちらのMac Studioを買うべきですか？', a: '必要なメモリ量次第です。Daring Fireballの2026年8月25日の一覧表による米国価格は、M5 Maxが64 GBで$3,499、128 GBで$5,099、M5 Ultraが96 GBで$5,499から、256 GBで約$10,800です。70BのFP16、128 GBを超えるモデル、より高い帯域幅が必要ならUltraを検討します。そうでなければM5 Maxで足りる場合があります。最新価格はAppleで確認してください。' },
          { q: '70BはM5 UltraでM5 Maxよりどれくらい速くなりますか？', a: 'Appleの公表値が1.2 TB/s対614 GB/sなので、理論上は最大約2倍です。Q5_K_Mでは約7〜10に対し約15〜20 tok/sと推定します。計算値でありベンチマークではないため、実際の差は小さい可能性があります。' },
          { q: '128 GBで70Bモデルを2つ同時に動かせますか？', a: 'Q4_K_Mファイル2つで86 GBです。128 GB未満ですが、コンテキスト、macOS、GPUメモリの上限を考えると余裕は少なく、同時生成では帯域幅を分け合います。256 GB以上ならかなり余裕があります。' },
          { q: '70Bモデルにはどれだけのディスク容量が必要ですか？', a: 'OllamaライブラリのLlama 3.3 70Bは、43 GB（Q4_K_M）、50 GB（Q5_K_M）、75 GB（Q8_0）です。3種類すべてで168 GBになります。大きなモデルを複数持つなら1 TB以上のSSDが快適です。' },
          { q: '私の用途で、ローカル70BはGPT-5.6と同じくらい優秀ですか？', a: 'そうとは限りません。このページには同条件の比較がありません。MetaはLlama 3.3 70BのMMLUを86.0と公表していますが、あなたの作業についてはほとんど分からず、提供元が異なるスコアは直接比較できません。両方に自分のプロンプトを入力して判断してください。' },
          { q: '今後の新しい大規模モデルもM5 Maxで動きますか？', a: '自動的に動くとは限りません。モデルファイルとコンテキストがメモリに収まり、お使いのOllamaやMLXがその構造に対応している必要があります。新しいオープンモデルには、総パラメータが70Bを大きく超えるMixture-of-Expertsも多いため、まずサイズを確認してください。' },
          { q: 'ローカルLLMなら日本の個人情報保護法に対応できますか？', a: 'ローカル処理だけでは対応したことになりません。推論をローカルで行えばプロンプトをモデル提供元へ送らずに済みますが、利用目的の管理、安全管理措置、開示請求などへの対応といった個人情報保護法上の義務は引き続き検討が必要です。テレメトリ、クラウド機能、同期、バックアップも確認し、個人情報保護委員会の資料や専門家に相談してください。これは法的助言ではありません。' },
          { q: 'M5 Maxはスタートアップや個人開発者にとって費用に見合いますか？', a: '使い方次第です。単純計算では、$5,099のMacが月$200のAPI料金を置き換える場合、電気代と作業時間を除いて約26か月で回収できます。1台をチームで共有すれば速度も分け合いますし、ローカルモデルが現在のクラウドモデルに及ばない可能性もあります。購入前に自分の作業で試してください。' },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: '関連記事',
        items: [
          '[Apple Siliconでローカルに動かすLLM：完全ガイド](/ja/local-llms/apple-silicon-local-llm-guide-2026) — M1からM5 Maxの比較、ユニファイドメモリの解説',
          '[ローカルLLM向けM5 Pro対M5 Max：仕様と推定速度](/ja/local-llms/m5-pro-max-llm-benchmarks-2026) — モデルサイズ別の推定tok/s（実測ではありません）。メモリ帯域幅とモデルのファイルサイズから算出',
          '[ローカルLLMに必要なユニファイドメモリ量は？](/ja/local-llms/how-much-unified-memory-for-local-llm) — 16GB対36GB対64GB対128GBガイド',
          '[Apple Silicon向け最良のLLMモデル](/ja/local-llms/best-models-apple-silicon-2026) — Mac構成別のモデル推奨',
          '[Mac上のMLX対Ollama対llama.cpp](/ja/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — フレームワーク速度比較とセットアップガイド',
          '[Apple Silicon対NVIDIA GPUでローカルLLM](/ja/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — クロスプラットフォームハードウェア比較',
          '[LLM量子化の解説](/ja/local-llms/llm-quantization-explained) — Q4/Q5/Q8/FP16の詳細',
          '[Mac Mini M5をローカルAIサーバーとして使う](/ja/local-llms/mac-mini-m5-local-ai-server) — 常時起動の推論サーバー構築',
          '[2026年最高のローカル推論モデル：DeepSeek-R1 Distillランキング](/ja/local-llms/best-local-reasoning-model-deepseek-r1-2026) — ローカル推論モデルのランキングガイド',
          '[DeepSeek-R1 Distill VRAMチートシート](/ja/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — 蒸留モデルのサイズ別必要メモリ',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: '在 Apple Silicon 上运行 70B 模型 2026：M5 Max 指南',
    seoTitle: 'M5 Max 运行 70B：内存、速度估算与安装 2026',
    intro: '如何在 Apple Silicon M5 Max 上本地运行 70B 级模型：哪种量化能装进内存、按内存带宽计算的速度估算（并非实测）、用 Ollama 和 MLX 安装、美国价格，以及与云端 API 比较时的局限。',
    metaDescription: '在 M5 Max Mac 上运行 Llama 3.3 70B：下载 43–75 GB，按内存带宽估算约 5–11 tok/s（非实测），附安装步骤与美国价格。',
    heroImage: '/images/running-70b-models-apple-silicon-m5-max-hardware-comparison-hero-zh.webp',
    twitterDescription: 'M5 Max 运行 70B：下载 43–75 GB，估算约 5–11 tok/s（非实测），附安装步骤与美国价格。',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'DeepSeek-R1-Distill-Llama-70B',
      'Qwen2.5-72B',
      'Llama 3.1 8B',
    ],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: '希望在本地运行大模型的 Mac 用户和准备购买者。',
    readTime: '16分钟阅读',
    educationalLevel: 'Advanced',
    primaryTerm: '70B模型Apple Silicon',
    targetKeywords: ['70B模型Mac', 'M5 Max 128GB LLM', '本地运行70B', 'Llama 70B Apple Silicon', '大模型本地推理'],
    ctaText: '正在本地运行 70B 模型？使用 PromptQuorum，可以用你自己的提示词把它的回答与云端模型并排比较。',
    leadAnswerBlock: '**统一内存足够的 M5 Max 可以装下 Llama 3.3 70B：Ollama 下载大小为 43 GB（Q4_K_M）、50 GB（Q5_K_M）和 75 GB（Q8_0）。按 Apple 公布的 614 GB/s，我们估算分别约为 9–11、7–10 和 5–7 tok/s。这是计算得出的估算值，不是实测。128 GB 空间较充裕；64 GB 可在有限上下文下运行 Q4_K_M。**',
    quickAnswerTop: {
      en: {
        question: 'Can I run 70B models on an M5 Max?',
        answer: 'Yes, with enough unified memory. Llama 3.3 70B in Q4_K_M is a 43 GB download. A 64 GB M5 Max can hold it with limited context; 128 GB also takes Q5_K_M (50 GB) and Q8_0 (75 GB). Estimated speed at 614 GB/s: about 9–11 tok/s for Q4_K_M, 7–10 for Q5_K_M and 5–7 for Q8_0. These are estimates, not measurements.',
        bullets: [
          'Q4_K_M: 43 GB, about 9–11 tok/s (estimate)',
          'Q5_K_M: 50 GB, about 7–10 tok/s (estimate)',
          'Q8_0: 75 GB, about 5–7 tok/s (estimate)',
          '64 GB: Q4_K_M only, with limited context',
          'The 36 GB M5 Max is too small for these 70B files',
          'Setup: brew install ollama, then ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
      de: {
        question: 'Kann ich 70B-Modelle auf einem M5 Max ausführen?',
        answer: 'Ja, mit ausreichend Unified Memory. Llama 3.3 70B in Q4_K_M ist ein Download von 43 GB. Ein M5 Max mit 64 GB fasst ihn bei begrenztem Kontext; 128 GB reichen auch für Q5_K_M (50 GB) und Q8_0 (75 GB). Geschätztes Tempo bei 614 GB/s: etwa 9–11 Tok/s für Q4_K_M, 7–10 für Q5_K_M und 5–7 für Q8_0. Das sind Schätzungen, keine Messungen.',
        bullets: [
          'Q4_K_M: 43 GB, etwa 9–11 Tok/s (Schätzung)',
          'Q5_K_M: 50 GB, etwa 7–10 Tok/s (Schätzung)',
          'Q8_0: 75 GB, etwa 5–7 Tok/s (Schätzung)',
          '64 GB: nur Q4_K_M, mit begrenztem Kontext',
          'Der M5 Max mit 36 GB ist für diese 70B-Dateien zu klein',
          'Setup: brew install ollama, dann ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
      fr: {
        question: 'Puis-je exécuter des modèles 70B sur un M5 Max ?',
        answer: 'Oui, avec assez de mémoire unifiée. Llama 3.3 70B en Q4_K_M représente 43 Go à télécharger. Un M5 Max de 64 Go peut le charger avec un contexte limité ; 128 Go acceptent aussi Q5_K_M (50 Go) et Q8_0 (75 Go). Débit estimé à 614 Go/s : environ 9–11 tok/s en Q4_K_M, 7–10 en Q5_K_M et 5–7 en Q8_0. Ce sont des estimations, pas des mesures.',
        bullets: [
          'Q4_K_M : 43 Go, environ 9–11 tok/s (estimation)',
          'Q5_K_M : 50 Go, environ 7–10 tok/s (estimation)',
          'Q8_0 : 75 Go, environ 5–7 tok/s (estimation)',
          '64 Go : Q4_K_M uniquement, avec un contexte limité',
          'Le M5 Max 36 Go est trop petit pour ces fichiers 70B',
          'Installation : brew install ollama, puis ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
      ja: {
        question: 'M5 Maxで70Bモデルは動きますか？',
        answer: 'はい、ユニファイドメモリが足りれば動きます。Llama 3.3 70BのQ4_K_Mは43 GBのダウンロードです。64 GBのM5 Maxでは限られたコンテキストで読み込めます。128 GBならQ5_K_M（50 GB）やQ8_0（75 GB）も収まります。614 GB/sでの推定速度は、Q4_K_Mで約9〜11 tok/s、Q5_K_Mで7〜10、Q8_0で5〜7です。実測ではなく推定です。',
        bullets: [
          'Q4_K_M：43 GB、約9〜11 tok/s（推定）',
          'Q5_K_M：50 GB、約7〜10 tok/s（推定）',
          'Q8_0：75 GB、約5〜7 tok/s（推定）',
          '64 GB：Q4_K_Mのみ、コンテキストは限られます',
          '36 GBのM5 Maxは、これらの70Bファイルには不足です',
          '導入：brew install ollama の後に ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
      zh: {
        question: 'M5 Max 能运行 70B 模型吗？',
        answer: '可以，前提是统一内存足够。Llama 3.3 70B 的 Q4_K_M 版本下载大小为 43 GB。64 GB 的 M5 Max 可在有限上下文下加载；128 GB 还能装下 Q5_K_M（50 GB）和 Q8_0（75 GB）。按 614 GB/s 估算的速度：Q4_K_M 约 9–11 tok/s，Q5_K_M 约 7–10，Q8_0 约 5–7。以上为估算，并非实测。',
        bullets: [
          'Q4_K_M：43 GB，约 9–11 tok/s（估算）',
          'Q5_K_M：50 GB，约 7–10 tok/s（估算）',
          'Q8_0：75 GB，约 5–7 tok/s（估算）',
          '64 GB：仅适合 Q4_K_M，上下文有限',
          '36 GB 的 M5 Max 装不下这些 70B 文件',
          '安装：brew install ollama，然后 ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: 'Meta 公布的 70B 数据', anchor: '#why' },
      { label: '硬件与速度估算', anchor: '#hardware' },
      { label: '分步安装', anchor: '#setup' },
      { label: '自己测试质量', anchor: '#quality' },
      { label: '量化', anchor: '#quantization' },
      { label: '其他大模型', anchor: '#alternatives' },
      { label: '本地 70B 与云端 API', anchor: '#vs-cloud' },
      { label: '使用场景', anchor: '#use-cases' },
      { label: '速度：MLX、Ollama 与技巧', anchor: '#speed-opts' },
      { label: 'M5 Ultra 估算', anchor: '#m5ultra' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关文章', anchor: '#related-articles' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'Meta 针对 Llama 3.3 70B 公布的数据',
        content: [
          '以下分数来自 Meta 的 <a href="https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct" class="text-primary hover:underline">Llama 3.3 模型卡</a>。它们是开发方针对模型本身公布的结果，不是 Mac 上 Q4、Q5 或 Q8 版本的成绩。各家的评测设置不同，因此本页不把这些分数与云端模型并列。',
        ],
        tableFormat: true,
        columns: [
          '基准测试',
          '评测设置',
          'Meta 公布的分数',
        ],
        rows: [
          {
            '基准测试': 'MMLU（常识）',
            '评测设置': '0-shot，chain-of-thought',
            'Meta 公布的分数': '86.0',
          },
          {
            '基准测试': 'HumanEval（代码）',
            '评测设置': '0-shot，pass@1',
            'Meta 公布的分数': '88.4',
          },
          {
            '基准测试': 'MATH（数学）',
            '评测设置': 'chain-of-thought',
            'Meta 公布的分数': '77.0',
          },
          {
            '基准测试': 'MGSM（多语言数学）',
            '评测设置': '以 Meta 所列为准',
            'Meta 公布的分数': '91.1',
          },
          {
            '基准测试': 'IFEval（指令遵循）',
            '评测设置': '以 Meta 所列为准',
            'Meta 公布的分数': '92.1',
          },
        ],
        note: '基准分数无法说明量化版本处理你的任务效果如何。请用自己的提示词测试。',
      },
      hardware: {
        id: 'hardware',
        title: '哪些硬件能运行 70B 模型',
        tableFormat: true,
        columns: [
          '硬件',
          '量化',
          '下载大小',
          'tok/s',
          '依据',
          '能否装下？',
        ],
        rows: [
          {
            '硬件': 'M3 Max 96GB',
            '量化': 'Q4_K_M',
            '下载大小': '43 GB',
            'tok/s': '~4–6',
            '依据': '估算',
            '能否装下？': '✓ 能',
          },
          {
            '硬件': 'M3 Max 128GB',
            '量化': 'Q5_K_M',
            '下载大小': '50 GB',
            'tok/s': '~5–6',
            '依据': '估算',
            '能否装下？': '✓ 能',
          },
          {
            '硬件': 'M4 Max 128GB',
            '量化': 'Q5_K_M',
            '下载大小': '50 GB',
            'tok/s': '~7–9',
            '依据': '估算',
            '能否装下？': '✓ 能',
          },
          {
            '硬件': 'M5 Max 128GB',
            '量化': 'Q4_K_M',
            '下载大小': '43 GB',
            'tok/s': '~9–11',
            '依据': '估算',
            '能否装下？': '✓ 能',
          },
          {
            '硬件': 'M5 Max 128GB',
            '量化': 'Q5_K_M',
            '下载大小': '50 GB',
            'tok/s': '~7–10',
            '依据': '估算',
            '能否装下？': '✓ 能',
          },
          {
            '硬件': 'M5 Max 128GB',
            '量化': 'Q8_0',
            '下载大小': '75 GB',
            'tok/s': '~5–7',
            '依据': '估算',
            '能否装下？': '✓ 能',
          },
          {
            '硬件': 'M5 Ultra 256GB',
            '量化': 'FP16',
            '下载大小': '141 GB',
            'tok/s': '~5–7',
            '依据': '估算',
            '能否装下？': '✓ 能',
          },
          {
            '硬件': 'RTX 4090 24GB',
            '量化': 'Q4_K_M',
            '下载大小': '43 GB',
            'tok/s': '~1–5',
            '依据': '公开估算',
            '能否装下？': '✗ 无法完整装下',
          },
          {
            '硬件': '2× RTX 3090 48GB',
            '量化': 'Q4_K_M',
            '下载大小': '43 GB',
            'tok/s': '19.5–31.9',
            '依据': '第三方测试',
            '能否装下？': '✓ 能',
          },
          {
            '硬件': '2× RTX 4090 48GB',
            '量化': 'Q4_K_M',
            '下载大小': '43 GB',
            'tok/s': '—',
            '依据': '无已核实数据',
            '能否装下？': '✓ 能',
          },
          {
            '硬件': '4× RTX 3090 96GB',
            '量化': 'Q8_0',
            '下载大小': '75 GB',
            'tok/s': '—',
            '依据': '无已核实数据',
            '能否装下？': '✓ 能',
          },
        ],
        note: '估算方法：稠密模型生成每个 token 时大致要读取整个文件，因此我们用内存带宽的 60–80% 除以文件大小。实际速度还取决于软件、上下文长度、温度和设置。PromptQuorum 没有对这些系统做过实测。Apple 公布的带宽：M3 Max 为 300 GB/s（96 GB 版）或 400 GB/s（128 GB），M4 Max 为 546 GB/s（128 GB），M5 Max 为 460 GB/s（36 GB）或 614 GB/s（48、64、128 GB），M5 Ultra 为 1.2 TB/s（<a href="https://www.apple.com/mac-studio/specs/" class="text-primary hover:underline">Apple Mac Studio 规格</a>）。双 RTX 3090 的数字来自 <a href="https://computingforgeeks.com/build-dual-rtx-3090-llm/" class="text-primary hover:underline">ComputingForGeeks 的测试</a>（2026 年 10 月 19 日，租用机器，每张卡限制为 290 W）：默认按层切分为 19.5 tok/s，按张量切分为 31.9 tok/s。按此结果，两张 RTX 3090 可以明显快于 M5 Max；Mac 的优势是单机内存更大。单张 24 GB 显卡配合 CPU 卸载时的 1–5 tok/s 是 <a href="https://insiderllm.com/guides/running-70b-models-locally-vram-guide/" class="text-primary hover:underline">InsiderLLM</a> 公开的估算值。Mac Studio 美国价格引自 <a href="https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios" class="text-primary hover:underline">Daring Fireball 的配置价格表</a>（2026 年 8 月 25 日，512 GB SSD）：M5 Max 36 GB 为 $2,499（装不下 70B），64 GB 为 $3,499，128 GB 为 $5,099。最便宜的 64 GB Mac mini（M5 Pro，15 核 CPU，512 GB SSD）为 $2,699，我们估算约 4–5 tok/s。各地价格不同，请查看 Apple 官方商店。',
      },
      setupInstall: {
        id: 'setup',
        title: '分步指南：用 Ollama 运行 70B',
        content: [
          '第 1 步：检查内存。第 2 步：安装 Ollama，并用适合单个大模型的设置启动服务。保持该终端打开，后续步骤请另开一个终端。',
        ],
        codeBlock: `# Step 1: check unified memory
system_profiler SPHardwareDataType | grep Memory

# Step 2: install Ollama
brew install ollama

# Start the server: one request at a time, keep the model loaded for 1 hour
OLLAMA_KEEP_ALIVE=1h OLLAMA_NUM_PARALLEL=1 ollama serve`,
        codeLanguage: 'bash',
      },
      setupPull: {
        id: 'setup-pull',
        title: '第 3 步：下载 70B 模型',
        content: [
          '下载时间取决于网速。仅按算术计算，43–75 GB 在 100 Mbps 下至少需要约 1–2 小时，在 1 Gbps 下约 6–10 分钟。',
        ],
        codeBlock: `# Q4_K_M, 43 GB download
ollama pull llama3.3:70b

# Q5_K_M, 50 GB download
ollama pull llama3.3:70b-instruct-q5_K_M

# Q8_0, 75 GB download
ollama pull llama3.3:70b-instruct-q8_0`,
        codeLanguage: 'bash',
      },
      setupRun: {
        id: 'setup-run',
        title: '第 4–6 步：首次运行、检查 GPU、调用 API',
        content: [
          '首次请求需要把模型载入内存，因此耗时更长。只要模型保持加载，后续请求就不用再加载。macOS 会限制 GPU 可使用的统一内存，请用 ollama ps 确认模型运行在 GPU 上，64 GB 机型尤其需要检查。',
        ],
        codeBlock: `# Step 4: first run, with timing statistics
ollama run llama3.3:70b --verbose "Write a 200-word essay on local AI"

# Step 5: check that the model is loaded on the GPU
ollama ps

# Step 6: call the local API
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.3:70b",
  "messages": [{"role": "user", "content": "Explain quantum computing"}]
}'`,
        codeLanguage: 'bash',
      },
      quality8B: {
        id: 'quality',
        title: '用你自己的提示词比较 8B 和 70B',
        content: [
          '本页不展示任何模型的示例回答，因为单个提示词说明不了多少问题，我们也没有可出示的测试记录。',
          '把同一个提示词（例如下面这个）分别交给两个模型，然后比较结果。',
        ],
        codeBlock: `# Same prompt, two models
PROMPT="Explain why a stack overflow happens in recursive functions, then write a Python function that stops runaway recursion before it crashes."
ollama run llama3.1:8b "$PROMPT"
ollama run llama3.3:70b "$PROMPT"`,
        codeLanguage: 'bash',
        note: '运行每个模型写出的代码，检查是否正确、能否处理边界情况、对问题的解释是否准确。',
      },
      quality70B: {
        id: 'quality-70b',
        title: '用于对照的参考解法',
        codeBlock: `import sys
import functools

def detect_recursion(threshold=900):
    def decorator(func):
        depth = 0
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            nonlocal depth
            depth += 1
            try:
                if depth > threshold:
                    raise RecursionError(
                        f"Detected potential infinite recursion at depth {depth}"
                    )
                return func(*args, **kwargs)
            finally:
                depth -= 1
        return wrapper
    return decorator`,
        codeLanguage: 'python',
        note: '这个限制递归深度的装饰器是为上述提示词编写的参考解法，并非模型输出。当被包装的递归函数超过设定深度时，它会将其中止；它无法证明递归一定是无限的。',
      },
      quantization: {
        id: 'quantization',
        title: '70B 模型的量化',
        items: [
          'Ollama 列出的 Llama 3.3 70B 下载大小：Q4_K_M 43 GB，Q5_K_M 50 GB，Q8_0 75 GB，FP16 141 GB。',
          '更小的量化通常会损失一些质量。损失多少取决于模型和任务，本页没有测量过。',
          '实用做法：先用 Q4_K_M；如果自己的测试出现重要错误，再试 Q5_K_M 或 Q8_0。精度更高并不代表输出可以不经检查就使用。',
          '内存：文件大小只是最低要求。上下文、macOS 和其他应用还需要空间，因此 75 GB 的 Q8_0 需要 128 GB 的 Mac。',
          '614 GB/s 下的估算速度：Q4_K_M 约 9–11，Q5_K_M 约 7–10，Q8_0 约 5–7 tok/s。按 10 tok/s 计算，500 个 token 约需 50 秒。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: '适用于 Apple Silicon 的其他大模型',
        tableFormat: true,
        columns: [
          '模型',
          '下载大小',
          '说明',
          'M5 Max（614 GB/s）估算 tok/s',
        ],
        rows: [
          {
            '模型': 'Llama 3.3 70B Instruct',
            '下载大小': '43 GB（Q4_K_M），50 GB（Q5_K_M）',
            '说明': '通用模型；Llama 3.3 Community License',
            'M5 Max（614 GB/s）估算 tok/s': '~9–11（Q4），~7–10（Q5）',
          },
          {
            '模型': 'DeepSeek-R1-Distill-Llama-70B',
            '下载大小': '43 GB（deepseek-r1:70b）',
            '说明': '基于 Llama 的蒸馏模型，会写出推理步骤',
            'M5 Max（614 GB/s）估算 tok/s': '~9–11',
          },
          {
            '模型': 'Qwen2.5-72B Instruct',
            '下载大小': '47 GB（Q4_K_M），54 GB（Q5_K_M）',
            '说明': '商用前请查看 Qwen 许可证',
            'M5 Max（614 GB/s）估算 tok/s': '~8–10（Q4），~7–9（Q5）',
          },
        ],
        note: '完整版 DeepSeek-R1（671B）与 70B 蒸馏版不是同一个模型，规模大得多。下载大小来自 Ollama 模型库。速度是按带宽估算的，不是基准测试。本页不按质量给这些模型排名。使用前请阅读各模型的许可证。',
      },
      alternativesPull: {
        id: 'alternatives-pull',
        title: '下载替代模型',
        codeBlock: `ollama pull llama3.3:70b-instruct-q5_K_M
ollama pull deepseek-r1:70b
ollama pull qwen2.5:72b-instruct-q4_K_M`,
        codeLanguage: 'bash',
      },
      vsCloud: {
        id: 'vs-cloud',
        title: '本地 70B 与云端 API',
        tableFormat: true,
        columns: [
          '比较项',
          'Mac 本地 70B',
          '云端托管 API',
        ],
        rows: [
          {
            '比较项': '提示词在哪里处理',
            'Mac 本地 70B': '在你的 Mac 上',
            '云端托管 API': '在服务商的服务器上',
          },
          {
            '比较项': '网络',
            'Mac 本地 70B': '模型下载完成后推理不需要联网',
            '云端托管 API': '必须联网',
          },
          {
            '比较项': '费用',
            'Mac 本地 70B': '先购买硬件，另有电费和时间成本',
            '云端托管 API': '通常按 token 或订阅计费，请查看最新价格',
          },
          {
            '比较项': '调用限制',
            'Mac 本地 70B': '没有服务商限额，上限取决于硬件',
            '云端托管 API': '由服务商设定',
          },
          {
            '比较项': '速度',
            'Mac 本地 70B': 'M5 Max 运行 70B 估算约 5–11 tok/s',
            '云端托管 API': '因服务商和模型而异',
          },
          {
            '比较项': '隐私',
            'Mac 本地 70B': '取决于你的应用、设置和设备安全',
            '云端托管 API': '取决于服务商的条款和设置',
          },
          {
            '比较项': '安装与维护',
            'Mac 本地 70B': '安装、更新和安全防护由你负责',
            '云端托管 API': '由服务商运营',
          },
        ],
        note: '估算回本时间：用硬件价格除以它实际替代的每月 API 费用（扣除电费等运行成本）。使用量小的话可能永远无法回本。此外，仅靠本地处理并不能使你的数据处理符合 GDPR、HIPAA、《个人信息保护法》、保密协议或任何其他规定。本文不构成法律建议。',
      },
      useCases: {
        id: 'use-cases',
        title: '本地 70B 推理的实际使用场景',
        numberedItems: [
          {
            title: '机密文档',
            whyItMatters: '提示词无须发送给模型服务商。但处理法律、医疗或财务信息仍需要合法依据、访问控制、加密和删除规则，输出须由具备资质的人员复核。仅在本地使用并不等于合规，本文不构成法律建议。',
          },
          {
            title: '编程辅助',
            whyItMatters: '使用本地模型和本地编辑器集成时，代码可以留在内网。请检查每个编辑器、插件和应用会向外发送什么。多人共用一台 Mac 时也会分摊速度。',
          },
          {
            title: '长文草稿',
            whyItMatters: '没有按 token 收费，也没有服务商限额，但按约 7–11 tok/s，长文需要时间。每份草稿都要核实事实。',
          },
          {
            title: '研究',
            whyItMatters: '适合做实验，以及总结你有权处理的资料。请对照原始来源核实论断和引文。',
          },
          {
            title: '个人私密使用',
            whyItMatters: '只要你的应用不上传或同步，笔记和日记可以留在设备上。不要把回答当作医疗或理财建议。',
          },
          {
            title: '离线工作',
            whyItMatters: '模型和软件下载好后，无须联网即可推理。请遵守适用法律和所在单位的安全规定。',
          },
        ],
      },
      speedMlx: {
        id: 'speed-opts',
        title: 'MLX 与 Ollama',
        content: [
          'MLX 是 Apple 的机器学习框架，mlx-lm 软件包可用它运行语言模型。哪个工具更快取决于模型、量化和软件版本。我们没有测过，请用同一提示词分别计时。示例使用社区转换的 4 位版本（页面标注 39.7 GB）。',
        ],
        codeBlock: `# pip install mlx-lm
from mlx_lm import load, stream_generate

model, tokenizer = load("mlx-community/Llama-3.3-70B-Instruct-4bit")

messages = [{"role": "user", "content": "Explain quantum computing"}]
prompt = tokenizer.apply_chat_template(messages, add_generation_prompt=True)

for response in stream_generate(model, tokenizer, prompt, max_tokens=500):
    print(response.text, end="", flush=True)`,
        codeLanguage: 'python',
      },
      speedTips: {
        id: 'speed-tips',
        title: '更多提速技巧',
        items: [
          '让模型保持加载：OLLAMA_KEEP_ALIVE=1h 可避免在间隔不到一小时的请求之间重新加载。',
          '使用流式输出，生成过程中就能阅读回答。',
          '限制回答长度（Ollama 中为 num_predict）。按 10 tok/s，200 个 token 约 20 秒，500 个约 50 秒。',
          'Q4_K_M 文件比 Q5_K_M 小，因此估计会稍快一些。请用自己的任务检查质量。',
          '关闭其他占用大量内存或 GPU 的应用，并在“活动监视器”中观察内存压力。',
        ],
      },
      m5ultra: {
        id: 'm5ultra',
        title: 'M5 Ultra Mac Studio：规格与速度估算',
        content: [
          '<a href="https://www.apple.com/mac-studio/specs/" class="text-primary hover:underline">Apple 公布</a>的 M5 Ultra 内存带宽为 1.2 TB/s，约为高配 M5 Max（614 GB/s）的两倍。它起步 96 GB，256 GB 和 512 GB 需选 36 核 CPU、80 核 GPU 版本。Apple 于 2026 年 8 月 25 日发布。下列速度由带宽和文件大小计算得出，并非实测，PromptQuorum 没有测试过该硬件，实际提升可能更低。',
        ],
        tableFormat: true,
        columns: [
          '模型',
          'M5 Max 128 GB（估算）',
          'M5 Ultra（估算）',
        ],
        rows: [
          {
            '模型': 'Llama 3.3 70B Q5_K_M（50 GB）',
            'M5 Max 128 GB（估算）': '约 7–10 tok/s',
            'M5 Ultra（估算）': '约 15–20 tok/s',
          },
          {
            '模型': 'Llama 3.3 70B Q8_0（75 GB）',
            'M5 Max 128 GB（估算）': '约 5–7 tok/s',
            'M5 Ultra（估算）': '约 10–13 tok/s',
          },
          {
            '模型': 'Llama 3.3 70B FP16（141 GB）',
            'M5 Max 128 GB（估算）': '装不下',
            'M5 Ultra（估算）': '约 5–7 tok/s（256 GB 及以上）',
          },
        ],
        note: '据 Daring Fireball 2026 年 8 月 25 日价格表（美国价格）：M5 Ultra 96 GB 起价 $5,499。96 GB 装不下 141 GB 的 FP16 文件。256 GB 配置按表计算约 $10,800（80 核 GPU 版本加内存升级，1 TB SSD）。该表当时标注 512 GB 将于 2026 年 10 月下旬推出；本页未核实其价格和目前供货情况，请查看 Apple 官方商店。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '70B 模型用 Q4 够吗？', a: 'Q4_K_M 是常见的起点。它与 Q5、Q8 或 FP16 的质量差距取决于模型和任务，本页没有测量过。请用自己的提示词比较。在法律、医疗等高风险用途中，无论用哪种量化，都需要由具备资质的人员复核输出。' },
          { q: '能同时加载 70B Q5 和另一个模型吗？', a: '在 128 GB 上，按文件大小，50 GB 的 Q5_K_M 文件加一个约 5 GB 的 8B 小模型可以装下，并留有上下文空间。实际占用会高于文件大小，请用 ollama ps 和“活动监视器”检查。同时生成时两者分享带宽。' },
          { q: '该买 M5 Max 还是 M5 Ultra 的 Mac Studio？', a: '取决于你需要多少内存。据 Daring Fireball 2026 年 8 月 25 日价格表（美国价格）：M5 Max 64 GB 为 $3,499，128 GB 为 $5,099；M5 Ultra 96 GB 起价 $5,499，256 GB 约 $10,800。如需 70B FP16、超过 128 GB 的模型或更高带宽，可考虑 Ultra；否则 M5 Max 可能就够了。当前价格请向 Apple 确认。' },
          { q: '70B 在 M5 Ultra 上比 M5 Max 快多少？', a: '理论上最多约 2 倍，因为 Apple 公布的带宽是 1.2 TB/s 对 614 GB/s。Q5_K_M 我们估算约 15–20 tok/s 对 7–10。这是计算结果，不是基准测试，实际提升可能更小。' },
          { q: '128 GB 能同时运行两个 70B 模型吗？', a: '两个 Q4_K_M 文件合计 86 GB。虽然低于 128 GB，但加上上下文、macOS 和 GPU 内存上限就比较紧张，同时生成时还要分享带宽。256 GB 及以上余量大得多。' },
          { q: '70B 模型需要多少磁盘空间？', a: 'Ollama 模型库中的 Llama 3.3 70B：43 GB（Q4_K_M）、50 GB（Q5_K_M）或 75 GB（Q8_0）。三种全部保留需 168 GB。存放多个大模型时，1 TB 或更大的 SSD 更从容。' },
          { q: '对我的任务，本地 70B 和 GPT-5.6 一样好吗？', a: '不要想当然。本页没有同等条件下的对比。Meta 公布 Llama 3.3 70B 的 MMLU 为 86.0，但这很难说明你的任务表现，而且不同公司公布的分数不能直接比较。把你的提示词分别交给两者，再评判结果。' },
          { q: '更新的大模型能在 M5 Max 上运行吗？', a: '不一定。模型文件加上下文必须装得进内存，你所用的 Ollama 或 MLX 版本也要支持该架构。许多较新的开放模型是混合专家模型，总参数量远超 70B，请先查看下载大小。' },
          { q: '在 M5 Max 上运行本地 LLM 就符合中国数据安全法规吗？', a: '不能这样认定。本地推理可以让提示词无须发送给模型服务商，但《数据安全法》和《个人信息保护法》等对处理活动本身仍然适用，例如处理依据、告知与同意、安全措施、个人权利响应，以及视情况需要的评估。还应检查遥测、云功能、同步和备份是否让数据离开设备或出境。请咨询合规人员或律师。本文不构成法律建议。' },
          { q: 'M5 Max 对小团队划算吗？', a: '取决于使用量。仅作算术示例：一台 $5,099 的 Mac 如果每月替代 $200 的 API 费用，约 26 个月回本，未计电费和人力时间。团队共用一台 Mac 也会分摊速度，本地模型未必能达到你现在所用云端模型的水平。购买前请用自己的任务测试。' },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: '相关文章',
        items: [
          '[Apple Silicon本地LLM完整指南](/zh/local-llms/apple-silicon-local-llm-guide-2026) — M1到M5 Max对比，统一内存详解',
          '[本地 LLM：M5 Pro 与 M5 Max 规格和速度估算](/zh/local-llms/m5-pro-max-llm-benchmarks-2026) — 按模型大小估算的 tok/s（非实测），根据内存带宽和模型文件大小计算',
          '[本地LLM需要多少统一内存？](/zh/local-llms/how-much-unified-memory-for-local-llm) — 16GB对36GB对64GB对128GB指南',
          '[Apple Silicon最佳LLM模型](/zh/local-llms/best-models-apple-silicon-2026) — 按Mac配置的模型推荐',
          '[Mac上MLX对Ollama对llama.cpp](/zh/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — 框架速度对比与配置指南',
          '[Apple Silicon对英伟达GPU本地LLM](/zh/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — 跨平台硬件对比',
          '[LLM量化详解](/zh/local-llms/llm-quantization-explained) — Q4/Q5/Q8/FP16深度解析',
          '[Mac Mini M5作为本地AI服务器](/zh/local-llms/mac-mini-m5-local-ai-server) — 常驻推论服务器配置',
          '[2026年最佳本地推理模型：DeepSeek-R1 Distill排名](/zh/local-llms/best-local-reasoning-model-deepseek-r1-2026) — 本地推理模型排名指南',
          '[DeepSeek-R1 Distill 显存速查表](/zh/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — 各蒸馏版本所需内存',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Apple Silicon에서 70B 모델 실행 2026: M5 Max 가이드',
    seoTitle: 'M5 Max에서 70B: 메모리·속도 추정·설치 2026',
    intro: 'Apple Silicon M5 Max에서 70B급 모델을 로컬로 실행하는 방법입니다. 메모리에 들어가는 양자화, 메모리 대역폭으로 계산한 속도 추정치(실측이 아닙니다), Ollama와 MLX 설치, 미국 가격, 클라우드 API와 비교할 때의 한계를 다룹니다.',
    metaDescription: 'M5 Max Mac에서 Llama 3.3 70B 실행: 다운로드 43–75 GB, 메모리 대역폭 기준 추정 5–11 tok/s(실측 아님), 설치 방법과 미국 가격.',
    heroImage: '/images/running-70b-models-apple-silicon-m5-max-hardware-comparison-hero-ko.webp',
    twitterDescription: 'M5 Max에서 70B: 다운로드 43–75 GB, 추정 5–11 tok/s(실측 아님), 설치 방법과 미국 가격.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'DeepSeek-R1-Distill-Llama-70B',
      'Qwen2.5-72B',
      'Llama 3.1 8B',
    ],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: '대형 모델을 로컬에서 실행하려는 Mac 사용자와 구매 검토자.',
    readTime: '16분 읽기',
    educationalLevel: 'Advanced',
    primaryTerm: '70B 모델 Apple Silicon',
    targetKeywords: ['70B 모델 Mac', 'M5 Max 128GB LLM', '70B 로컬 실행', 'Llama 70B Apple Silicon', '대형 모델 로컬 추론'],
    ctaText: '70B 모델을 로컬에서 실행 중이신가요? PromptQuorum에서는 직접 작성한 프롬프트로 클라우드 모델의 답변과 나란히 비교할 수 있습니다.',
    leadAnswerBlock: '**Llama 3.3 70B는 통합 메모리가 충분한 M5 Max에 올릴 수 있습니다. Ollama 다운로드 크기는 43 GB(Q4_K_M), 50 GB(Q5_K_M), 75 GB(Q8_0)입니다. Apple이 공개한 614 GB/s를 기준으로 각각 약 9–11, 7–10, 5–7 tok/s로 추정합니다. 계산한 추정치이며 실측이 아닙니다. 128 GB는 여유가 있고, 64 GB는 제한된 컨텍스트로 Q4_K_M을 수용합니다.**',
    quickAnswerTop: {
      ko: {
        question: 'M5 Max에서 70B 모델을 실행할 수 있습니까?',
        answer: '통합 메모리가 충분하면 가능합니다. Llama 3.3 70B Q4_K_M은 43 GB 다운로드입니다. 64 GB M5 Max는 제한된 컨텍스트로 불러올 수 있고, 128 GB에는 Q5_K_M(50 GB)과 Q8_0(75 GB)도 들어갑니다. 614 GB/s 기준 추정 속도는 Q4_K_M 약 9–11 tok/s, Q5_K_M 7–10, Q8_0 5–7입니다. 추정치이며 실측이 아닙니다.',
        bullets: [
          'Q4_K_M: 43 GB, 약 9–11 tok/s(추정)',
          'Q5_K_M: 50 GB, 약 7–10 tok/s(추정)',
          'Q8_0: 75 GB, 약 5–7 tok/s(추정)',
          '64 GB: Q4_K_M만 가능, 컨텍스트 제한',
          '36 GB M5 Max는 이 70B 파일에 부족합니다',
          '설치: brew install ollama 후 ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: 'Meta가 공개한 70B 수치', anchor: '#why' },
      { label: '하드웨어와 속도 추정', anchor: '#hardware' },
      { label: '단계별 설치', anchor: '#setup' },
      { label: '품질 직접 테스트', anchor: '#quality' },
      { label: '양자화', anchor: '#quantization' },
      { label: '기타 대형 모델', anchor: '#alternatives' },
      { label: '로컬 70B와 클라우드 API', anchor: '#vs-cloud' },
      { label: '활용 사례', anchor: '#use-cases' },
      { label: '속도: MLX, Ollama와 팁', anchor: '#speed-opts' },
      { label: 'M5 Ultra 추정', anchor: '#m5ultra' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 글', anchor: '#related-articles' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'Meta가 공개한 Llama 3.3 70B 수치',
        content: [
          '아래 점수는 Meta의 <a href="https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct" class="text-primary hover:underline">Llama 3.3 모델 카드</a>에서 가져왔습니다. 모델 자체에 대해 개발사가 공개한 결과이며, Mac에서의 Q4·Q5·Q8 버전 결과가 아닙니다. 제공사마다 평가 조건이 달라 이 페이지는 클라우드 모델 점수와 나란히 놓지 않습니다.',
        ],
        tableFormat: true,
        columns: [
          '벤치마크',
          '평가 조건',
          'Meta 공개 점수',
        ],
        rows: [
          {
            '벤치마크': 'MMLU(일반 지식)',
            '평가 조건': '0-shot, chain-of-thought',
            'Meta 공개 점수': '86.0',
          },
          {
            '벤치마크': 'HumanEval(코드)',
            '평가 조건': '0-shot, pass@1',
            'Meta 공개 점수': '88.4',
          },
          {
            '벤치마크': 'MATH(수학)',
            '평가 조건': 'chain-of-thought',
            'Meta 공개 점수': '77.0',
          },
          {
            '벤치마크': 'MGSM(다국어 수학)',
            '평가 조건': 'Meta 표기 기준',
            'Meta 공개 점수': '91.1',
          },
          {
            '벤치마크': 'IFEval(지시 따르기)',
            '평가 조건': 'Meta 표기 기준',
            'Meta 공개 점수': '92.1',
          },
        ],
        note: '벤치마크 점수만으로는 양자화 버전이 귀하의 작업을 얼마나 잘 처리할지 알 수 없습니다. 직접 만든 프롬프트로 확인하십시오.',
      },
      hardware: {
        id: 'hardware',
        title: '70B 모델을 실행할 수 있는 하드웨어',
        tableFormat: true,
        columns: [
          '하드웨어',
          '양자화',
          '다운로드 크기',
          'tok/s',
          '근거',
          '수용 여부',
        ],
        rows: [
          {
            '하드웨어': 'M3 Max 96GB',
            '양자화': 'Q4_K_M',
            '다운로드 크기': '43 GB',
            'tok/s': '~4–6',
            '근거': '추정',
            '수용 여부': '✓ 가능',
          },
          {
            '하드웨어': 'M3 Max 128GB',
            '양자화': 'Q5_K_M',
            '다운로드 크기': '50 GB',
            'tok/s': '~5–6',
            '근거': '추정',
            '수용 여부': '✓ 가능',
          },
          {
            '하드웨어': 'M4 Max 128GB',
            '양자화': 'Q5_K_M',
            '다운로드 크기': '50 GB',
            'tok/s': '~7–9',
            '근거': '추정',
            '수용 여부': '✓ 가능',
          },
          {
            '하드웨어': 'M5 Max 128GB',
            '양자화': 'Q4_K_M',
            '다운로드 크기': '43 GB',
            'tok/s': '~9–11',
            '근거': '추정',
            '수용 여부': '✓ 가능',
          },
          {
            '하드웨어': 'M5 Max 128GB',
            '양자화': 'Q5_K_M',
            '다운로드 크기': '50 GB',
            'tok/s': '~7–10',
            '근거': '추정',
            '수용 여부': '✓ 가능',
          },
          {
            '하드웨어': 'M5 Max 128GB',
            '양자화': 'Q8_0',
            '다운로드 크기': '75 GB',
            'tok/s': '~5–7',
            '근거': '추정',
            '수용 여부': '✓ 가능',
          },
          {
            '하드웨어': 'M5 Ultra 256GB',
            '양자화': 'FP16',
            '다운로드 크기': '141 GB',
            'tok/s': '~5–7',
            '근거': '추정',
            '수용 여부': '✓ 가능',
          },
          {
            '하드웨어': 'RTX 4090 24GB',
            '양자화': 'Q4_K_M',
            '다운로드 크기': '43 GB',
            'tok/s': '~1–5',
            '근거': '공개된 추정치',
            '수용 여부': '✗ 전부는 불가',
          },
          {
            '하드웨어': '2× RTX 3090 48GB',
            '양자화': 'Q4_K_M',
            '다운로드 크기': '43 GB',
            'tok/s': '19.5–31.9',
            '근거': '제3자 테스트',
            '수용 여부': '✓ 가능',
          },
          {
            '하드웨어': '2× RTX 4090 48GB',
            '양자화': 'Q4_K_M',
            '다운로드 크기': '43 GB',
            'tok/s': '—',
            '근거': '확인된 수치 없음',
            '수용 여부': '✓ 가능',
          },
          {
            '하드웨어': '4× RTX 3090 96GB',
            '양자화': 'Q8_0',
            '다운로드 크기': '75 GB',
            'tok/s': '—',
            '근거': '확인된 수치 없음',
            '수용 여부': '✓ 가능',
          },
        ],
        note: '추정 방법: 밀집 모델은 토큰 하나마다 파일 전체를 거의 읽으므로, 메모리 대역폭의 60–80%를 파일 크기로 나눕니다. 실제 속도는 소프트웨어, 컨텍스트 길이, 온도, 설정에 따라 달라집니다. PromptQuorum은 이 시스템들을 실측하지 않았습니다. Apple 공개 대역폭은 M3 Max 300 GB/s(96 GB 모델) 또는 400 GB/s(128 GB), M4 Max 546 GB/s(128 GB), M5 Max 460 GB/s(36 GB) 또는 614 GB/s(48·64·128 GB), M5 Ultra 1.2 TB/s입니다(<a href="https://www.apple.com/mac-studio/specs/" class="text-primary hover:underline">Apple Mac Studio 사양</a>). RTX 3090 2장 수치는 2026년 10월 19일자 <a href="https://computingforgeeks.com/build-dual-rtx-3090-llm/" class="text-primary hover:underline">ComputingForGeeks 테스트</a>(각 카드를 290 W로 제한한 임대 장비)에서 나온 것으로, 기본 레이어 분할 19.5 tok/s, 텐서 분할 31.9 tok/s였습니다. 이 기준으로는 RTX 3090 2장이 M5 Max보다 뚜렷하게 빠를 수 있으며, Mac의 장점은 한 대에서 쓰는 메모리가 더 많다는 점입니다. 24 GB 그래픽 카드 한 장에 CPU 오프로드를 쓸 때의 1–5 tok/s는 <a href="https://insiderllm.com/guides/running-70b-models-locally-vram-guide/" class="text-primary hover:underline">InsiderLLM</a>이 공개한 추정치입니다. Mac Studio 미국 가격은 <a href="https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios" class="text-primary hover:underline">Daring Fireball 가격표</a>(2026년 8월 25일, 512 GB SSD) 기준 M5 Max 36 GB $2,499(70B에는 부족), 64 GB $3,499, 128 GB $5,099입니다. 가장 저렴한 64 GB Mac mini(M5 Pro, 15코어 CPU, 512 GB SSD)는 $2,699이며 약 4–5 tok/s로 추정합니다. 국내 가격은 다르므로 Apple Store에서 확인하십시오.',
      },
      setupInstall: {
        id: 'setup',
        title: '단계별 안내: Ollama로 70B 실행',
        content: [
          '1단계: 메모리를 확인합니다. 2단계: Ollama를 설치하고 대형 모델 하나에 맞춘 설정으로 서버를 시작합니다. 이 터미널은 열어 두고 다음 단계는 두 번째 터미널에서 진행하십시오.',
        ],
        codeBlock: `# Step 1: check unified memory
system_profiler SPHardwareDataType | grep Memory

# Step 2: install Ollama
brew install ollama

# Start the server: one request at a time, keep the model loaded for 1 hour
OLLAMA_KEEP_ALIVE=1h OLLAMA_NUM_PARALLEL=1 ollama serve`,
        codeLanguage: 'bash',
      },
      setupPull: {
        id: 'setup-pull',
        title: '3단계: 70B 모델 다운로드',
        content: [
          '다운로드 시간은 회선에 따라 다릅니다. 단순 계산으로 43–75 GB는 100 Mbps에서 최소 약 1–2시간, 1 Gbps에서 약 6–10분이 걸립니다.',
        ],
        codeBlock: `# Q4_K_M, 43 GB download
ollama pull llama3.3:70b

# Q5_K_M, 50 GB download
ollama pull llama3.3:70b-instruct-q5_K_M

# Q8_0, 75 GB download
ollama pull llama3.3:70b-instruct-q8_0`,
        codeLanguage: 'bash',
      },
      setupRun: {
        id: 'setup-run',
        title: '4–6단계: 첫 실행, GPU 확인, API 호출',
        content: [
          '첫 요청은 모델을 메모리에 불러와야 하므로 더 오래 걸립니다. 모델이 로드되어 있는 동안에는 이후 요청에서 다시 불러오지 않습니다. macOS는 GPU가 쓸 수 있는 통합 메모리를 제한하므로, 특히 64 GB에서는 ollama ps로 모델이 GPU에서 실행되는지 확인하십시오.',
        ],
        codeBlock: `# Step 4: first run, with timing statistics
ollama run llama3.3:70b --verbose "Write a 200-word essay on local AI"

# Step 5: check that the model is loaded on the GPU
ollama ps

# Step 6: call the local API
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.3:70b",
  "messages": [{"role": "user", "content": "Explain quantum computing"}]
}'`,
        codeLanguage: 'bash',
      },
      quality8B: {
        id: 'quality',
        title: '직접 만든 프롬프트로 8B와 70B 비교',
        content: [
          '이 페이지는 어느 모델의 예시 답변도 싣지 않습니다. 프롬프트 하나로는 입증되는 것이 적고, 제시할 수 있는 기록된 테스트도 없기 때문입니다.',
          '아래와 같은 동일한 프롬프트를 두 모델에 입력하고 결과를 비교하십시오.',
        ],
        codeBlock: `# Same prompt, two models
PROMPT="Explain why a stack overflow happens in recursive functions, then write a Python function that stops runaway recursion before it crashes."
ollama run llama3.1:8b "$PROMPT"
ollama run llama3.3:70b "$PROMPT"`,
        codeLanguage: 'bash',
        note: '각 모델이 작성한 코드를 실행하여 정확한지, 예외 상황을 처리하는지, 문제를 올바르게 설명하는지 확인하십시오.',
      },
      quality70B: {
        id: 'quality-70b',
        title: '대조용 참고 해법',
        codeBlock: `import sys
import functools

def detect_recursion(threshold=900):
    def decorator(func):
        depth = 0
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            nonlocal depth
            depth += 1
            try:
                if depth > threshold:
                    raise RecursionError(
                        f"Detected potential infinite recursion at depth {depth}"
                    )
                return func(*args, **kwargs)
            finally:
                depth -= 1
        return wrapper
    return decorator`,
        codeLanguage: 'python',
        note: '이 깊이 제한 데코레이터는 위 프롬프트의 참고 해법으로 작성한 것이며 모델 출력이 아닙니다. 감싼 재귀 함수가 정해진 깊이를 넘으면 중단시키지만, 재귀가 무한하다는 것을 증명할 수는 없습니다.',
      },
      quantization: {
        id: 'quantization',
        title: '70B 모델의 양자화',
        items: [
          'Ollama의 Llama 3.3 70B 다운로드 크기는 Q4_K_M 43 GB, Q5_K_M 50 GB, Q8_0 75 GB, FP16 141 GB입니다.',
          '작은 양자화일수록 일반적으로 품질이 다소 떨어집니다. 그 정도는 모델과 작업에 따라 다르며 이 페이지에서는 측정하지 않았습니다.',
          '실용적인 방법은 Q4_K_M으로 시작하고, 직접 테스트에서 중요한 오류가 나오면 Q5_K_M이나 Q8_0을 시도하는 것입니다. 정밀도가 높아도 출력은 검토해야 합니다.',
          '메모리: 파일 크기는 최소치일 뿐입니다. 컨텍스트, macOS, 다른 앱에도 공간이 필요하므로 75 GB인 Q8_0에는 128 GB Mac이 필요합니다.',
          '614 GB/s 기준 추정 속도: Q4_K_M 약 9–11, Q5_K_M 약 7–10, Q8_0 약 5–7 tok/s. 10 tok/s에서 500토큰은 약 50초가 걸립니다.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Apple Silicon용 기타 대형 모델',
        tableFormat: true,
        columns: [
          '모델',
          '다운로드 크기',
          '비고',
          'M5 Max(614 GB/s) 추정 tok/s',
        ],
        rows: [
          {
            '모델': 'Llama 3.3 70B Instruct',
            '다운로드 크기': '43 GB(Q4_K_M), 50 GB(Q5_K_M)',
            '비고': '범용. Llama 3.3 Community License',
            'M5 Max(614 GB/s) 추정 tok/s': '~9–11(Q4), ~7–10(Q5)',
          },
          {
            '모델': 'DeepSeek-R1-Distill-Llama-70B',
            '다운로드 크기': '43 GB(deepseek-r1:70b)',
            '비고': '추론 과정을 출력하는 Llama 기반 증류 모델',
            'M5 Max(614 GB/s) 추정 tok/s': '~9–11',
          },
          {
            '모델': 'Qwen2.5-72B Instruct',
            '다운로드 크기': '47 GB(Q4_K_M), 54 GB(Q5_K_M)',
            '비고': '상업적 이용 전에 Qwen 라이선스 확인',
            'M5 Max(614 GB/s) 추정 tok/s': '~8–10(Q4), ~7–9(Q5)',
          },
        ],
        note: '전체 DeepSeek-R1(671B)은 70B 증류 모델과 다른, 훨씬 큰 모델입니다. 다운로드 크기는 Ollama 라이브러리 기준입니다. 속도는 대역폭 기반 추정치이며 벤치마크가 아닙니다. 이 페이지는 품질 순위를 매기지 않습니다. 사용 전에 각 모델의 라이선스를 읽으십시오.',
      },
      alternativesPull: {
        id: 'alternatives-pull',
        title: '대체 모델 다운로드',
        codeBlock: `ollama pull llama3.3:70b-instruct-q5_K_M
ollama pull deepseek-r1:70b
ollama pull qwen2.5:72b-instruct-q4_K_M`,
        codeLanguage: 'bash',
      },
      vsCloud: {
        id: 'vs-cloud',
        title: '로컬 70B와 클라우드 API',
        tableFormat: true,
        columns: [
          '항목',
          'Mac 로컬 70B',
          '호스팅 클라우드 API',
        ],
        rows: [
          {
            '항목': '프롬프트 처리 위치',
            'Mac 로컬 70B': '내 Mac',
            '호스팅 클라우드 API': '제공사 서버',
          },
          {
            '항목': '인터넷',
            'Mac 로컬 70B': '모델 다운로드 후 추론에는 불필요',
            '호스팅 클라우드 API': '필수',
          },
          {
            '항목': '비용',
            'Mac 로컬 70B': '하드웨어 선지출과 전기료, 관리 시간',
            '호스팅 클라우드 API': '대개 토큰당 또는 구독 과금. 최신 요금 확인',
          },
          {
            '항목': '사용 제한',
            'Mac 로컬 70B': '제공사 제한 없음. 한계는 하드웨어',
            '호스팅 클라우드 API': '제공사가 설정',
          },
          {
            '항목': '속도',
            'Mac 로컬 70B': 'M5 Max의 70B는 추정 약 5–11 tok/s',
            '호스팅 클라우드 API': '제공사와 모델에 따라 다름',
          },
          {
            '항목': '개인정보 보호',
            'Mac 로컬 70B': '앱, 설정, 기기 보안에 따라 다름',
            '호스팅 클라우드 API': '제공사 약관과 설정에 따라 다름',
          },
          {
            '항목': '설치와 유지관리',
            'Mac 로컬 70B': '설치, 업데이트, 보안을 직접 담당',
            '호스팅 클라우드 API': '제공사가 서비스 운영',
          },
        ],
        note: '회수 기간은 하드웨어 가격을 실제로 대체하는 월 API 요금에서 전기료 등 운영비를 뺀 금액으로 나누어 추정합니다. 사용량이 적으면 회수하지 못할 수도 있습니다. 또한 로컬 처리만으로는 귀하의 처리가 GDPR, HIPAA, 개인정보 보호법, 비밀유지계약 등 어떤 규정도 준수하게 되지 않습니다. 법률 자문이 아닙니다.',
      },
      useCases: {
        id: 'use-cases',
        title: '로컬 70B 추론의 실제 활용 사례',
        numberedItems: [
          {
            title: '기밀 문서',
            whyItMatters: '프롬프트를 모델 제공사에 보내지 않아도 됩니다. 그래도 법률·의료·재무 정보에는 법적 근거, 접근 통제, 암호화, 삭제 규칙이 필요하고, 자격 있는 사람이 결과를 검토해야 합니다. 로컬 사용만으로는 규정 준수가 아니며, 법률 자문이 아닙니다.',
          },
          {
            title: '코딩 지원',
            whyItMatters: '로컬 모델과 로컬 편집기 연동을 쓰면 코드를 사내 네트워크에 둘 수 있습니다. 편집기, 확장 기능, 앱이 각각 무엇을 전송하는지 확인하십시오. Mac 한 대를 여러 개발자가 쓰면 속도도 나눠 씁니다.',
          },
          {
            title: '긴 글 초안',
            whyItMatters: '토큰당 요금이나 제공사 제한은 없지만 약 7–11 tok/s에서는 긴 글에 시간이 걸립니다. 모든 초안은 사실을 확인하십시오.',
          },
          {
            title: '연구',
            whyItMatters: '실험과, 처리할 권한이 있는 자료의 요약에 유용합니다. 주장과 인용은 원문으로 확인하십시오.',
          },
          {
            title: '개인적인 비공개 사용',
            whyItMatters: '앱이 업로드하거나 동기화하지 않으면 메모와 일기는 기기에 남습니다. 답변을 의료나 재무 조언으로 받아들이지 마십시오.',
          },
          {
            title: '오프라인 작업',
            whyItMatters: '모델과 소프트웨어를 내려받으면 연결 없이 추론할 수 있습니다. 적용 법률과 조직의 보안 규정을 따르십시오.',
          },
        ],
      },
      speedMlx: {
        id: 'speed-opts',
        title: 'MLX와 Ollama',
        content: [
          'MLX는 Apple의 머신러닝 프레임워크이며, mlx-lm 패키지로 언어 모델을 실행합니다. 어느 도구가 빠른지는 모델, 양자화, 소프트웨어 버전에 따라 다릅니다. 저희는 측정하지 않았으니 같은 프롬프트로 두 도구의 시간을 재 보십시오. 예시는 커뮤니티 4비트 변환판(39.7 GB로 표기)을 사용합니다.',
        ],
        codeBlock: `# pip install mlx-lm
from mlx_lm import load, stream_generate

model, tokenizer = load("mlx-community/Llama-3.3-70B-Instruct-4bit")

messages = [{"role": "user", "content": "Explain quantum computing"}]
prompt = tokenizer.apply_chat_template(messages, add_generation_prompt=True)

for response in stream_generate(model, tokenizer, prompt, max_tokens=500):
    print(response.text, end="", flush=True)`,
        codeLanguage: 'python',
      },
      speedTips: {
        id: 'speed-tips',
        title: '추가 속도 팁',
        items: [
          '모델을 로드 상태로 유지: OLLAMA_KEEP_ALIVE=1h는 간격이 한 시간 미만인 요청 사이의 재로딩을 막습니다.',
          '스트리밍을 사용하면 생성되는 동안 답변을 읽을 수 있습니다.',
          '답변 길이를 제한하십시오(Ollama의 num_predict). 10 tok/s에서 200토큰은 약 20초, 500토큰은 약 50초입니다.',
          'Q4_K_M은 Q5_K_M보다 파일이 작아 다소 빠를 것으로 추정합니다. 품질은 직접 작업으로 확인하십시오.',
          '메모리나 GPU를 많이 쓰는 다른 앱을 닫고 활성 상태 보기에서 메모리 압력을 확인하십시오.',
        ],
      },
      m5ultra: {
        id: 'm5ultra',
        title: 'M5 Ultra Mac Studio: 사양과 속도 추정',
        content: [
          '<a href="https://www.apple.com/mac-studio/specs/" class="text-primary hover:underline">Apple 사양</a>에 따르면 M5 Ultra의 메모리 대역폭은 1.2 TB/s로, 상위 M5 Max의 614 GB/s의 약 두 배입니다. 기본 96 GB이며 256 GB와 512 GB는 36코어 CPU·80코어 GPU 모델이 필요합니다. Apple은 2026년 8월 25일에 발표했습니다. 아래 속도는 대역폭과 파일 크기로 계산한 값입니다. 실측이 아니고 PromptQuorum은 이 하드웨어를 테스트하지 않았으며, 실제 향상은 더 낮을 수 있습니다.',
        ],
        tableFormat: true,
        columns: [
          '모델',
          'M5 Max 128 GB(추정)',
          'M5 Ultra(추정)',
        ],
        rows: [
          {
            '모델': 'Llama 3.3 70B Q5_K_M(50 GB)',
            'M5 Max 128 GB(추정)': '약 7–10 tok/s',
            'M5 Ultra(추정)': '약 15–20 tok/s',
          },
          {
            '모델': 'Llama 3.3 70B Q8_0(75 GB)',
            'M5 Max 128 GB(추정)': '약 5–7 tok/s',
            'M5 Ultra(추정)': '약 10–13 tok/s',
          },
          {
            '모델': 'Llama 3.3 70B FP16(141 GB)',
            'M5 Max 128 GB(추정)': '수용 불가',
            'M5 Ultra(추정)': '약 5–7 tok/s(256 GB 이상)',
          },
        ],
        note: 'Daring Fireball의 2026년 8월 25일 가격표(미국 가격) 기준 M5 Ultra는 96 GB가 $5,499부터입니다. 141 GB FP16 파일은 96 GB에 들어가지 않습니다. 256 GB 구성은 계산상 약 $10,800입니다(80코어 GPU 모델과 메모리 업그레이드, 1 TB SSD). 해당 표는 512 GB를 2026년 10월 말 출시 예정으로 표기했으며, 이 페이지는 그 가격과 현재 구매 가능 여부를 확인하지 않았습니다. Apple Store에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '70B 모델은 Q4로 충분합니까?',
            a: 'Q4_K_M은 일반적인 출발점입니다. Q5, Q8, FP16과의 품질 차이는 모델과 작업에 따라 다르며 이 페이지에서는 측정하지 않았습니다. 직접 만든 프롬프트로 비교하십시오. 법률·의료처럼 영향이 큰 용도에서는 양자화와 관계없이 자격 있는 사람이 출력을 검토해야 합니다.',
          },
          {
            q: '70B Q5와 다른 모델을 동시에 로드할 수 있습니까?',
            a: '128 GB에서는 50 GB Q5_K_M 파일과 약 5 GB의 작은 8B 모델이 파일 크기상 들어가며 컨텍스트 여유도 있습니다. 실제 사용량은 파일보다 크므로 ollama ps와 활성 상태 보기로 확인하십시오. 동시에 생성하면 대역폭을 나눠 씁니다.',
          },
          {
            q: 'M5 Max와 M5 Ultra Mac Studio 중 무엇을 사야 합니까?',
            a: '필요한 메모리에 따라 다릅니다. Daring Fireball의 2026년 8월 25일 가격표(미국 가격) 기준 M5 Max는 64 GB $3,499, 128 GB $5,099이고, M5 Ultra는 96 GB가 $5,499부터, 256 GB는 약 $10,800입니다. 70B FP16, 128 GB를 넘는 모델, 더 높은 대역폭이 필요하면 Ultra를 고려하십시오. 그렇지 않다면 M5 Max로 충분할 수 있습니다. 현재 가격은 Apple에서 확인하십시오.',
          },
          {
            q: '70B는 M5 Ultra에서 M5 Max보다 얼마나 빠릅니까?',
            a: 'Apple 수치가 1.2 TB/s 대 614 GB/s이므로 이론상 최대 약 2배입니다. Q5_K_M은 약 7–10 대비 15–20 tok/s로 추정합니다. 계산값이지 벤치마크가 아니며 실제 향상은 더 작을 수 있습니다.',
          },
          {
            q: '128 GB에서 70B 모델 두 개를 동시에 실행할 수 있습니까?',
            a: 'Q4_K_M 파일 두 개는 합계 86 GB입니다. 128 GB보다 작지만 컨텍스트, macOS, GPU 메모리 한도를 고려하면 빠듯하고, 동시에 생성하면 대역폭을 나눠 씁니다. 256 GB 이상이면 여유가 훨씬 큽니다.',
          },
          {
            q: '70B 모델에는 디스크 공간이 얼마나 필요합니까?',
            a: 'Ollama 라이브러리의 Llama 3.3 70B는 43 GB(Q4_K_M), 50 GB(Q5_K_M), 75 GB(Q8_0)입니다. 세 가지를 모두 보관하면 168 GB입니다. 대형 모델을 여러 개 둔다면 1 TB 이상 SSD가 편합니다.',
          },
          {
            q: '제 작업에서 로컬 70B가 GPT-5.6만큼 좋습니까?',
            a: '그렇게 가정하지 마십시오. 이 페이지에는 동일 조건의 비교가 없습니다. Meta는 Llama 3.3 70B의 MMLU를 86.0으로 공개했지만 이것만으로는 귀하의 작업을 알기 어렵고, 서로 다른 회사의 점수는 직접 비교할 수 없습니다. 두 모델에 직접 만든 프롬프트를 입력해 판단하십시오.',
          },
          {
            q: '더 새로운 대형 모델도 M5 Max에서 실행됩니까?',
            a: '자동으로 되는 것은 아닙니다. 모델 파일과 컨텍스트가 메모리에 들어가야 하고, 사용 중인 Ollama나 MLX 버전이 해당 구조를 지원해야 합니다. 최신 개방형 모델 상당수는 총 파라미터가 70B를 크게 넘는 전문가 혼합(MoE) 모델이므로 다운로드 크기를 먼저 확인하십시오.',
          },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: '관련 문서',
        items: [
          '[Apple Silicon 로컬 LLM 완전 가이드](/ko/local-llms/apple-silicon-local-llm-guide-2026) — M1에서 M5 Max 비교, 통합 메모리 설명',
          '[로컬 LLM용 M5 Pro vs M5 Max: 사양과 속도 추정치](/ko/local-llms/m5-pro-max-llm-benchmarks-2026) — 모델 크기별 tok/s 추정치(실측 아님). 메모리 대역폭과 모델 파일 크기로 계산',
          '[로컬 LLM에 필요한 통합 메모리 용량?](/ko/local-llms/how-much-unified-memory-for-local-llm) — 16GB vs 36GB vs 64GB vs 128GB 가이드',
          '[Apple Silicon을 위한 최고의 LLM 모델](/ko/local-llms/best-models-apple-silicon-2026) — Mac 구성별 모델 권장사항',
          '[Mac에서 MLX vs Ollama vs llama.cpp](/ko/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — 프레임워크 속도 비교 및 설정 가이드',
          '[Apple Silicon vs NVIDIA GPU 로컬 LLM](/ko/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — 크로스 플랫폼 하드웨어 비교',
          '[LLM 양자화 설명](/ko/local-llms/llm-quantization-explained) — Q4/Q5/Q8/FP16 심층 분석',
          '[Mac Mini M5 로컬 AI 서버로 사용하기](/ko/local-llms/mac-mini-m5-local-ai-server) — 항상 켜져 있는 추론 서버 설정',
          '[2026년 최고의 로컬 추론 모델: DeepSeek-R1 Distill 순위](/ko/local-llms/best-local-reasoning-model-deepseek-r1-2026) — 로컬 추론 모델 순위 가이드',
          '[DeepSeek-R1 Distill VRAM 치트시트](/ko/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — 증류 모델 크기별 필요 메모리',
        ],
      },
    },
  },
}

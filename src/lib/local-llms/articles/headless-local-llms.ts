// Auto-generated from src/lib/local-llms/content.ts
// Slug: headless-local-llms
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Tools & Interfaces',
      title: 'Headless Local LLMs: Running Models Without a UI (2026)',
      seoTitle: 'Headless Local LLM Deployment',
      intro: 'A headless local LLM is a model running as a service (API) with no chat interface or UI. You interact via REST API from Python, Node.js, or curl. Headless deployments are ideal for production servers, batch processing, and automation. As of April 2026, this is the standard for production deployments.',
      metaDescription: 'Headless local LLM deployment 2026: run Ollama, vLLM, and inference APIs without UI. Production setup for servers and microservices.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**A headless local LLM is a model running as a service (API) with no chat interface or UI. You interact via REST API from Python, Node.js, or curl.**',
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '10 min read',
      educationalLevel: 'Intermediate to Advanced',
      primaryTerm: 'headless LLM',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'What Is Headless?', anchor: '#what-is-headless' },
        { label: 'Headless Ollama', anchor: '#headless-ollama' },
        { label: 'Headless vLLM', anchor: '#headless-vllm' },
        { label: 'Production Deployment', anchor: '#production-deployment' },
        { label: 'Monitoring and Scaling', anchor: '#monitoring' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Common Questions', anchor: '#common-questions' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'Headless = no chat UI, just API. Ollama, vLLM, and LM Studio all can run headless.',
            '**Ollama headless**: `ollama serve` starts the API at localhost:11434. No UI.',
            '**vLLM headless**: `vllm serve` starts the API on port 8000. Better throughput than Ollama.',
            '**Production**: Use vLLM for throughput, Ollama for simplicity, nginx for load balancing and security.',
            'As of April 2026, vLLM is the production standard for high-throughput services.',
          ],
        },
        whatIsHeadless: {
          title: 'What Does Headless Mean?',
          content: [
            '**Headless means the software runs as a service without a graphical user interface.** You interact via API calls (REST, gRPC) instead of clicking buttons.',
            'Advantages: lighter resource usage (no UI overhead), easier to automate, suitable for servers, easier to scale.',
            'Disadvantages: no visual feedback, requires API knowledge, harder to debug without logs.',
          ],
        },
        ollama: {
          title: 'How to Run Ollama Headless?',
          content: 'Ollama can run as a pure API service:',
          codeBlock: '# Run Ollama headless\nollama serve\n\n# This starts the API at http://localhost:11434/v1\n# No chat UI, just a background service\n\n# Use the API from Python\nfrom openai import OpenAI\nclient = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")\nresponse = client.chat.completions.create(\n  model="llama3.2:3b",\n  messages=[{"role": "user", "content": "Hello"}]\n)\nprint(response.choices[0].message.content)\n\n# Or from curl\ncurl http://localhost:11434/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -d \'{{"model": "llama3.2:3b", "messages": [{{"role": "user", "content": "Hello"}}]}}\'',
          codeLanguage: 'bash',
        },
        vllm: {
          title: 'How to Run vLLM Headless?',
          content: 'vLLM is optimized for headless, high-throughput deployments:',
          codeBlock: '# Install vLLM\npip install vllm\n\n# Run headless with API\nvllm serve llama-3.1-8b-instruct \\\n  --host 0.0.0.0 \\\n  --port 8000 \\\n  --gpu-memory-utilization 0.9\n\n# Access at http://localhost:8000/v1\n# Supports 50+ concurrent requests\n\n# Use from Python (same as Ollama)\nfrom openai import OpenAI\nclient = OpenAI(base_url="http://localhost:8000/v1", api_key="anything")\nresponse = client.chat.completions.create(\n  model="meta-llama/Llama-2-7b-chat-hf",\n  messages=[{"role": "user", "content": "Hello"}]\n)\nprint(response.choices[0].message.content)',
          codeLanguage: 'bash',
        },
        production: {
          title: 'How to Deploy for Production?',
          content: [
            '**1. **Use vLLM** for high throughput (50+ concurrent users).**',
            '2. **Use Ollama** for simplicity (single-user or small teams).',
            '3. **Add nginx reverse proxy** for load balancing and authentication.',
            '4. **Monitor GPU memory** -- models should not exceed 80% VRAM.',
            '5. **Set up logging** -- track errors and performance.',
            '6. **Use systemd or Docker** for service management (auto-restart on crash).',
          ],
          codeBlock: '# Example: Deploy vLLM on a server via Docker\ndocker run --gpus all -p 8000:8000 \\\n  --env VLLM_API_KEY="your-secret-key" \\\n  vllm/vllm-openai:latest \\\n  --model meta-llama/Llama-2-13b-chat-hf \\\n  --tensor-parallel-size 2  # Use 2 GPUs\n\n# Nginx reverse proxy config (optional)\n# server {\n#   listen 80;\n#   location / {\n#     proxy_pass http://localhost:8000;\n#     proxy_set_header Authorization "Bearer $http_authorization";\n#   }\n# }',
          codeLanguage: 'bash',
        },
        monitoring: {
          title: 'How to Monitor Headless Deployments?',
          content: [
            '**Monitor GPU memory, request latency, and error rates:**',
          ],
          codeBlock: '# Monitor GPU usage (nvidia-smi)\nwatch nvidia-smi  # Updates every 2 seconds\n\n# Monitor request latency\n# Add logging to your client code\nimport time\nstart = time.time()\nresponse = client.chat.completions.create(...)\nlatency = time.time() - start\nprint(f"Request took {latency:.2f} seconds")\n\n# Monitor vLLM logs\ndocker logs -f <container_id>\n\n# Check error rates\n# Parse logs for errors or use a monitoring tool (Prometheus + Grafana)',
          codeLanguage: 'python',
        },
        commonMistakes: {
          title: 'Common Mistakes With Headless Deployments',
          items: [
            '**Not monitoring VRAM.** Models can silently run out of memory. Monitor GPU before deploying to production.',
            '**Exposing API without authentication.** Headless services are often exposed to networks. Always add authentication (API key, firewall).',
            '**Not setting resource limits.** A model can consume 100% GPU, blocking other tasks. Use `--gpu-memory-utilization` in vLLM.',
            '**Expecting Ollama to scale to 100+ users.** Use vLLM for high concurrency. Ollama can handle single-digit concurrent users.',
            '**Not testing failover.** If your model server crashes, requests hang. Use a load balancer and health checks.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Common Questions About Headless Deployments',
          faqs: [
            {
              q: 'Can Ollama and vLLM run on the same GPU?',
              a: 'Not simultaneously. They will compete for VRAM. Run one or the other, or use multiple GPUs.',
            },
            {
              q: 'Is it safe to expose the API to the internet?',
              a: 'No, not without authentication. Always put an API key, firewall, or reverse proxy in front. Never expose localhost:11434 directly.',
            },
            {
              q: 'How many concurrent users can Ollama handle?',
              a: 'Typically 1-3 without queuing. For more, use vLLM or add request queuing.',
            },
            {
              q: 'What is the difference between Ollama and vLLM performance?',
              a: 'Single request: similar speed. Multiple concurrent requests: vLLM is 5-10× better because it batches requests.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[How to Install Ollama](/local-llms/how-to-install-ollama) -- Ollama setup.',
            '[Text-Generation-WebUI vs vLLM vs llama.cpp](/local-llms/text-generation-webui-vs-vllm-vs-llamacpp) -- Engine comparison.',
            '[Local LLM OpenAI-Compatible API](/local-llms/local-llm-openai-compatible-api) -- API documentation.',
            '[Local LLM Hardware Guide](/local-llms/local-llm-hardware-guide-2026) -- Hardware requirements.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'Ollama GitHub -- github.com/ollama/ollama',
            'vLLM GitHub -- github.com/vllm-project/vllm',
            'vLLM Deployment Guide -- docs.vllm.ai/en/serving/deploying_with_docker.html',
            'Ollama API Docs -- github.com/ollama/ollama/blob/main/docs/api.md',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Headless Local LLMs: Running Models Without a UI (2026)',
        'description': 'Headless local LLM deployment 2026: run Ollama, vLLM, and inference APIs without UI. Production setup for servers and microservices.',
        'url': 'https://www.promptquorum.com/local-llms/headless-local-llms',
        'inLanguage': 'en',
        'datePublished': '2026-04-04',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways', 'h2'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'en',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Can Ollama and vLLM run on the same GPU?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Not simultaneously. They will compete for VRAM. Run one or the other, or use multiple GPUs.' } },
          { '@type': 'Question', 'name': 'Is it safe to expose the API to the internet?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No, not without authentication. Always put an API key, firewall, or reverse proxy in front. Never expose localhost:11434 directly.' } },
          { '@type': 'Question', 'name': 'How many concurrent users can Ollama handle?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Typically 1-3 without queuing. For more, use vLLM or add request queuing.' } },
          { '@type': 'Question', 'name': 'What is the difference between Ollama and vLLM performance?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Single request: similar speed. Multiple concurrent requests: vLLM is 5-10x better because it batches requests.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Headless Local LLM Deployment',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Start Ollama in headless mode', 'description': 'Run ollama serve to expose the REST API at localhost:11434. Use OLLAMA_HOST environment variable for custom ports.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Interact via REST API', 'description': 'Call the API from Python, Node.js, or curl. Ollama is OpenAI-compatible for easy integration.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Batch processing and production', 'description': 'Headless deployments scale better than UI-based approaches. Use vLLM or Ollama for concurrent requests.' },
        ]
      },
    },
  };

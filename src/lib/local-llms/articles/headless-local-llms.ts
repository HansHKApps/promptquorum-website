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
    de: {
      freshness_tier: 'semi_annual',
      theme: 'Tools & Interfaces',
      title: 'Headless Local LLMs: Modelle ohne Benutzeroberfläche ausführen (2026)',
      seoTitle: 'Headless-LLM-Deployment: Ollama und vLLM ohne UI',
      intro: 'Ein Headless Local LLM ist ein Modell, das als Dienst (API) ohne Chat-Oberfläche oder UI läuft. Sie interagieren über REST API aus Python, Node.js oder curl. Headless-Deployments eignen sich ideal für Produktionsserver, Batch-Verarbeitung und Automatisierung. Ab April 2026 ist dies der Standard für Produktionsdeployments.',
      metaDescription: 'Headless-LLM-Deployment mit Ollama und vLLM: Produktionssetup für Server und Microservices ohne UI. Skalierung, Überwachung und DSGVO-Compliance.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Ein Headless Local LLM ist ein Modell, das als Dienst (API) ohne Chat-Oberfläche oder UI läuft. Sie interagieren über REST API aus Python, Node.js oder curl.**',
      audience: 'Anfänger, die ihr erstes Local LLM auf Consumer-Hardware ausführen',
      readTime: '12 Min. Lesezeit',
      educationalLevel: 'Intermediate to Advanced',
      primaryTerm: 'headless LLM',
      toc: [
        { label: 'Zusammenfassung', anchor: '#key-takeaways' },
        { label: 'Was ist Headless?', anchor: '#what-is-headless' },
        { label: 'Ollama Headless', anchor: '#headless-ollama' },
        { label: 'vLLM Headless', anchor: '#headless-vllm' },
        { label: 'Produktionsdeployment', anchor: '#production-deployment' },
        { label: 'Überwachung und Skalierung', anchor: '#monitoring' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Häufig gestellte Fragen', anchor: '#common-questions' },
        { label: 'Weiterführende Ressourcen', anchor: '#related-reading' },
        { label: 'Quellen', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Headless = keine Chat-UI, nur API. Ollama, vLLM und LM Studio können alle Headless-Betrieb unterstützen.',
            '**Ollama Headless**: `ollama serve` startet die API auf localhost:11434. Keine UI.',
            '**vLLM Headless**: `vllm serve` startet die API auf Port 8000. Besserer Durchsatz als Ollama.',
            '**Produktion**: Nutzen Sie vLLM für hohen Durchsatz, Ollama für Einfachheit, nginx für Lastverteilung und Sicherheit.',
            'Ab April 2026 ist vLLM der Produktionsstandard für hochdurchsätzige Services.',
          ],
        },
        whatIsHeadless: {
          title: 'Was bedeutet Headless?',
          content: [
            '**Headless bedeutet, dass die Software als Dienst ohne grafische Benutzeroberfläche läuft.** Sie interagieren über API-Aufrufe (REST, gRPC) statt durch Klicks auf Buttons.',
            'Vorteile: geringerer Ressourcenverbrauch (keine UI-Overhead), einfachere Automatisierung, für Server geeignet, leichter skalierbar.',
            'Nachteile: kein visuelles Feedback, erfordert API-Kenntnisse, schwieriger zu debuggen ohne Logs.',
          ],
        },
        ollama: {
          title: 'Wie führe ich Ollama Headless aus?',
          content: 'Ollama kann als reiner API-Dienst laufen:',
          codeBlock: '# Run Ollama headless\nollama serve\n\n# This starts the API at http://localhost:11434/v1\n# No chat UI, just a background service\n\n# Use the API from Python\nfrom openai import OpenAI\nclient = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")\nresponse = client.chat.completions.create(\n  model="llama3.2:3b",\n  messages=[{"role": "user", "content": "Hello"}]\n)\nprint(response.choices[0].message.content)\n\n# Or from curl\ncurl http://localhost:11434/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -d \'{{"model": "llama3.2:3b", "messages": [{{"role": "user", "content": "Hello"}}]}}\'',
          codeLanguage: 'bash',
        },
        vllm: {
          title: 'Wie führe ich vLLM Headless aus?',
          content: 'vLLM ist optimiert für Headless-, hochdurchsätzige Deployments:',
          codeBlock: '# Install vLLM\npip install vllm\n\n# Run headless with API\nvllm serve llama-3.1-8b-instruct \\\n  --host 0.0.0.0 \\\n  --port 8000 \\\n  --gpu-memory-utilization 0.9\n\n# Access at http://localhost:8000/v1\n# Supports 50+ concurrent requests\n\n# Use from Python (same as Ollama)\nfrom openai import OpenAI\nclient = OpenAI(base_url="http://localhost:8000/v1", api_key="anything")\nresponse = client.chat.completions.create(\n  model="meta-llama/Llama-2-7b-chat-hf",\n  messages=[{"role": "user", "content": "Hello"}]\n)\nprint(response.choices[0].message.content)',
          codeLanguage: 'bash',
        },
        production: {
          title: 'Wie stelle ich für Produktion bereit?',
          content: [
            '**1. Nutzen Sie vLLM** für hohen Durchsatz (50+ gleichzeitige Nutzer).',
            '2. **Nutzen Sie Ollama** für Einfachheit (Einzelnutzer oder kleine Teams).',
            '3. **Fügen Sie nginx Reverse Proxy hinzu** für Lastverteilung und Authentifizierung.',
            '4. **Überwachen Sie GPU-Speicher** -- Modelle sollten nicht mehr als 80 % VRAM verbrauchen.',
            '5. **Richten Sie Logging ein** -- verfolgen Sie Fehler und Leistung.',
            '6. **Nutzen Sie systemd oder Docker** für Service-Management (Auto-Neustart bei Absturz).',
            '7. **Beachten Sie DSGVO und BSI-Grundschutz-Kataloge** -- bei datenschutzsensitiven Anwendungen ist On-Premise-Deployment entscheidend.',
          ],
          codeBlock: '# Example: Deploy vLLM on a server via Docker\ndocker run --gpus all -p 8000:8000 \\\n  --env VLLM_API_KEY="your-secret-key" \\\n  vllm/vllm-openai:latest \\\n  --model meta-llama/Llama-2-13b-chat-hf \\\n  --tensor-parallel-size 2  # Use 2 GPUs\n\n# Nginx reverse proxy config (optional)\n# server {\n#   listen 80;\n#   location / {\n#     proxy_pass http://localhost:8000;\n#     proxy_set_header Authorization "Bearer $http_authorization";\n#   }\n# }',
          codeLanguage: 'bash',
        },
        monitoring: {
          title: 'Wie überwache ich Headless-Deployments?',
          content: [
            '**Überwachen Sie GPU-Speicher, Request-Latenz und Fehlerquoten:**',
          ],
          codeBlock: '# Monitor GPU usage (nvidia-smi)\nwatch nvidia-smi  # Updates every 2 seconds\n\n# Monitor request latency\n# Add logging to your client code\nimport time\nstart = time.time()\nresponse = client.chat.completions.create(...)\nlatency = time.time() - start\nprint(f"Request took {latency:.2f} seconds")\n\n# Monitor vLLM logs\ndocker logs -f <container_id>\n\n# Check error rates\n# Parse logs for errors or use a monitoring tool (Prometheus + Grafana)',
          codeLanguage: 'python',
        },
        commonMistakes: {
          title: 'Häufige Fehler bei Headless-Deployments',
          items: [
            '**VRAM nicht überwachen.** Modelle können stillschweigend keinen Speicher mehr haben. Überwachen Sie die GPU vor dem Produktionsdeployment.',
            '**API ohne Authentifizierung freigeben.** Headless-Services werden häufig in Netzwerken freigegeben. Immer Authentifizierung hinzufügen (API-Schlüssel, Firewall).',
            '**Ressourcenlimits nicht setzen.** Ein Modell kann 100 % GPU verbrauchen und andere Aufgaben blockieren. Nutzen Sie `--gpu-memory-utilization` in vLLM.',
            '**Erwarten Sie nicht, dass Ollama zu 100+ Nutzern skaliert.** Nutzen Sie vLLM für hohe Parallelität. Ollama kann einstellige gleichzeitige Nutzer verwalten.',
            '**Failover nicht testen.** Wenn Ihr Modell-Server ausfällt, bleiben Requests hängen. Nutzen Sie einen Lastverteiler und Health Checks.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Häufig gestellte Fragen zu Headless-Deployments',
          faqs: [
            {
              q: 'Können Ollama und vLLM auf der gleichen GPU laufen?',
              a: 'Nicht gleichzeitig. Sie konkurrieren um VRAM. Betreiben Sie eins oder das andere, oder nutzen Sie mehrere GPUs.',
            },
            {
              q: 'Ist es sicher, die API ins Internet freizugeben?',
              a: 'Nein, nicht ohne Authentifizierung. Immer einen API-Schlüssel, eine Firewall oder einen Reverse Proxy davor setzen. Geben Sie localhost:11434 niemals direkt frei.',
            },
            {
              q: 'Wie viele gleichzeitige Nutzer kann Ollama verwalten?',
              a: 'Typischerweise 1-3 ohne Warteschlange. Für mehr nutzen Sie vLLM oder fügen Sie Request-Queueing hinzu.',
            },
            {
              q: 'Was ist der Unterschied in der Leistung zwischen Ollama und vLLM?',
              a: 'Einzelne Request: ähnliche Geschwindigkeit. Mehrere gleichzeitige Requests: vLLM ist 5-10× besser, weil es Requests batched.',
            },
            {
              q: 'Muss ich bei der Verwendung von Ollama und vLLM die DSGVO beachten?',
              a: 'Ja, wenn Sie personenbezogene Daten verarbeiten. Headless Local LLMs bieten einen großen Vorteil: Die Daten bleiben auf Ihrer Hardware. Sie müssen nicht mit externen APIs wie OpenAI kommunizieren. Dies erfüllt DSGVO Artikel 28 (Datenverarbeitung vor Ort). Nutzen Sie BSI-Grundschutz-Kataloge für zusätzliche Sicherheit und Compliance-Anforderungen.',
            },
            {
              q: 'Sind Ollama und vLLM für deutsche Mittelständler geeignet?',
              a: 'Absolut. Viele deutsche Mittelständler setzen auf lokale KI-Deployment wegen Datenschutz und Kosteneffizienz. Ollama ist einfach zu installieren und zu verwalten, vLLM ist ideal für Unternehmensanwendungen mit höherem Durchsatz. Beide unterstützen die BSI-Grundschutz-Standards und ermöglichen IT-Sicherheit ohne Abhängigkeit von Cloud-Anbietern.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Ressourcen',
          items: [
            '[Ollama installieren](/local-llms/how-to-install-ollama?lang=de) -- Ollama-Setup.',
            '[Text-Generation-WebUI vs vLLM vs llama.cpp](/local-llms/text-generation-webui-vs-vllm-vs-llamacpp?lang=de) -- Engine-Vergleich.',
            '[Local LLM OpenAI-kompatible API](/local-llms/local-llm-openai-compatible-api?lang=de) -- API-Dokumentation.',
            '[Local LLM Hardware Guide](/local-llms/local-llm-hardware-guide-2026?lang=de) -- Hardware-Anforderungen.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
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
        'headline': 'Headless Local LLMs: Modelle ohne Benutzeroberfläche ausführen (2026)',
        'description': 'Headless-LLM-Deployment mit Ollama und vLLM: Produktionssetup für Server und Microservices ohne UI. Skalierung, Überwachung und DSGVO-Compliance.',
        'url': 'https://www.promptquorum.com/local-llms/headless-local-llms?lang=de',
        'inLanguage': 'de',
        'datePublished': '2026-04-04',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways', 'h2'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'de',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Können Ollama und vLLM auf der gleichen GPU laufen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Nicht gleichzeitig. Sie konkurrieren um VRAM. Betreiben Sie eins oder das andere, oder nutzen Sie mehrere GPUs.' } },
          { '@type': 'Question', 'name': 'Ist es sicher, die API ins Internet freizugeben?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Nein, nicht ohne Authentifizierung. Immer einen API-Schlüssel, eine Firewall oder einen Reverse Proxy davor setzen. Geben Sie localhost:11434 niemals direkt frei.' } },
          { '@type': 'Question', 'name': 'Wie viele gleichzeitige Nutzer kann Ollama verwalten?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Typischerweise 1-3 ohne Warteschlange. Für mehr nutzen Sie vLLM oder fügen Sie Request-Queueing hinzu.' } },
          { '@type': 'Question', 'name': 'Was ist der Unterschied in der Leistung zwischen Ollama und vLLM?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Einzelne Request: ähnliche Geschwindigkeit. Mehrere gleichzeitige Requests: vLLM ist 5-10× besser, weil es Requests batched.' } },
          { '@type': 'Question', 'name': 'Muss ich bei der Verwendung von Ollama und vLLM die DSGVO beachten?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, wenn Sie personenbezogene Daten verarbeiten. Headless Local LLMs bieten einen großen Vorteil: Die Daten bleiben auf Ihrer Hardware. Sie müssen nicht mit externen APIs wie OpenAI kommunizieren. Dies erfüllt DSGVO Artikel 28 (Datenverarbeitung vor Ort). Nutzen Sie BSI-Grundschutz-Kataloge für zusätzliche Sicherheit und Compliance-Anforderungen.' } },
          { '@type': 'Question', 'name': 'Sind Ollama und vLLM für deutsche Mittelständler geeignet?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Absolut. Viele deutsche Mittelständler setzen auf lokale KI-Deployment wegen Datenschutz und Kosteneffizienz. Ollama ist einfach zu installieren und zu verwalten, vLLM ist ideal für Unternehmensanwendungen mit höherem Durchsatz. Beide unterstützen die BSI-Grundschutz-Standards und ermöglichen IT-Sicherheit ohne Abhängigkeit von Cloud-Anbietern.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Headless-LLM-Deployment',
        'inLanguage': 'de',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Starten Sie Ollama im Headless-Modus', 'description': 'Führen Sie ollama serve aus, um die REST API auf localhost:11434 freizugeben. Nutzen Sie die Umgebungsvariable OLLAMA_HOST für benutzerdefinierte Ports.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Interagieren Sie über REST API', 'description': 'Rufen Sie die API aus Python, Node.js oder curl auf. Ollama ist OpenAI-kompatibel für einfache Integration.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Batch-Verarbeitung und Produktion', 'description': 'Headless-Deployments skalieren besser als UI-basierte Ansätze. Nutzen Sie vLLM oder Ollama für gleichzeitige Requests.' },
        ]
      },
    },
    fr: {
      freshness_tier: 'semi_annual',
      theme: 'Tools & Interfaces',
      title: 'LLMs Headless locaux : exécuter des modèles sans interface utilisateur (2026)',
      seoTitle: 'Déploiement Ollama/vLLM Headless sans interface',
      intro: 'Un LLM local headless est un modèle exécuté en tant que service (API) sans interface de chat ou UI. Vous interagissez via API REST depuis Python, Node.js ou curl. Les déploiements headless sont idéaux pour les serveurs de production, le traitement par lot et l\'automatisation. Depuis avril 2026, c\'est le standard pour les déploiements en production.',
      metaDescription: 'Déploiement LLM Headless avec Ollama et vLLM : configuration de production pour serveurs et microservices, sans interface utilisateur.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Un LLM local headless est un modèle exécuté en tant que service (API) sans interface de chat ou UI. Vous interagissez via API REST depuis Python, Node.js ou curl.**',
      audience: 'Débutants exécutant leur premier LLM local sur matériel grand public',
      readTime: '11 min de lecture',
      educationalLevel: 'Intermediate to Advanced',
      primaryTerm: 'headless LLM',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Qu\'est-ce que Headless?', anchor: '#what-is-headless' },
        { label: 'Ollama Headless', anchor: '#headless-ollama' },
        { label: 'vLLM Headless', anchor: '#headless-vllm' },
        { label: 'Déploiement en production', anchor: '#production-deployment' },
        { label: 'Surveillance et mise à l\'échelle', anchor: '#monitoring' },
        { label: 'Erreurs courantes', anchor: '#common-mistakes' },
        { label: 'Questions fréquemment posées', anchor: '#common-questions' },
        { label: 'Lectures connexes', anchor: '#related-reading' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Headless = pas d\'UI de chat, juste une API. Ollama, vLLM et LM Studio supportent tous le mode headless.',
            '**Ollama headless** : `ollama serve` démarre l\'API sur localhost:11434. Pas d\'UI.',
            '**vLLM headless** : `vllm serve` démarre l\'API sur le port 8000. Meilleur débit qu\'Ollama.',
            '**Production** : utilisez vLLM pour le haut débit, Ollama pour la simplicité, nginx pour l\'équilibrage de charge et la sécurité.',
            'Depuis avril 2026, vLLM est le standard de production pour les services à haut débit.',
          ],
        },
        whatIsHeadless: {
          title: 'Qu\'est-ce que Headless signifie?',
          content: [
            '**Headless signifie que le logiciel s\'exécute en tant que service sans interface graphique.** Vous interagissez via des appels API (REST, gRPC) au lieu de cliquer sur des boutons.',
            'Avantages : utilisation plus légère des ressources (pas de surcharge UI), automatisation plus facile, approprié pour les serveurs, évolutivité plus simple.',
            'Inconvénients : pas de retour visuel, nécessite des connaissances en API, plus difficile à déboguer sans journaux.',
          ],
        },
        ollama: {
          title: 'Comment exécuter Ollama en mode Headless?',
          content: 'Ollama peut s\'exécuter en tant que service API pur :',
          codeBlock: '# Run Ollama headless\nollama serve\n\n# This starts the API at http://localhost:11434/v1\n# No chat UI, just a background service\n\n# Use the API from Python\nfrom openai import OpenAI\nclient = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")\nresponse = client.chat.completions.create(\n  model="llama3.2:3b",\n  messages=[{"role": "user", "content": "Hello"}]\n)\nprint(response.choices[0].message.content)\n\n# Or from curl\ncurl http://localhost:11434/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -d \'{{"model": "llama3.2:3b", "messages": [{{"role": "user", "content": "Hello"}}]}}\'',
          codeLanguage: 'bash',
        },
        vllm: {
          title: 'Comment exécuter vLLM en mode Headless?',
          content: 'vLLM est optimisé pour les déploiements headless à haut débit :',
          codeBlock: '# Install vLLM\npip install vllm\n\n# Run headless with API\nvllm serve llama-3.1-8b-instruct \\\n  --host 0.0.0.0 \\\n  --port 8000 \\\n  --gpu-memory-utilization 0.9\n\n# Access at http://localhost:8000/v1\n# Supports 50+ concurrent requests\n\n# Use from Python (same as Ollama)\nfrom openai import OpenAI\nclient = OpenAI(base_url="http://localhost:8000/v1", api_key="anything")\nresponse = client.chat.completions.create(\n  model="meta-llama/Llama-2-7b-chat-hf",\n  messages=[{"role": "user", "content": "Hello"}]\n)\nprint(response.choices[0].message.content)',
          codeLanguage: 'bash',
        },
        production: {
          title: 'Comment déployer pour la production?',
          content: [
            '**1. Utilisez vLLM** pour un haut débit (50+ utilisateurs simultanés).',
            '2. **Utilisez Ollama** pour la simplicité (utilisateur unique ou petites équipes).',
            '3. **Ajoutez un proxy inverse nginx** pour l\'équilibrage de charge et l\'authentification.',
            '4. **Surveillez la mémoire GPU** -- les modèles ne devraient pas dépasser 80 % de VRAM.',
            '5. **Configurez la journalisation** -- suivez les erreurs et les performances.',
            '6. **Utilisez systemd ou Docker** pour la gestion des services (redémarrage automatique en cas de panne).',
            '7. **Considérez la conformité CNIL** -- pour les applications traitant des données sensibles (données financières, médicales, juridiques), la CNIL recommande les LLMs locaux pour minimiser les risques de transfert de données.',
          ],
          codeBlock: '# Example: Deploy vLLM on a server via Docker\ndocker run --gpus all -p 8000:8000 \\\n  --env VLLM_API_KEY="your-secret-key" \\\n  vllm/vllm-openai:latest \\\n  --model meta-llama/Llama-2-13b-chat-hf \\\n  --tensor-parallel-size 2  # Use 2 GPUs\n\n# Nginx reverse proxy config (optional)\n# server {\n#   listen 80;\n#   location / {\n#     proxy_pass http://localhost:8000;\n#     proxy_set_header Authorization "Bearer $http_authorization";\n#   }\n# }',
          codeLanguage: 'bash',
        },
        monitoring: {
          title: 'Comment surveiller les déploiements Headless?',
          content: [
            '**Surveillez la mémoire GPU, la latence des requêtes et les taux d\'erreur :**',
          ],
          codeBlock: '# Monitor GPU usage (nvidia-smi)\nwatch nvidia-smi  # Updates every 2 seconds\n\n# Monitor request latency\n# Add logging to your client code\nimport time\nstart = time.time()\nresponse = client.chat.completions.create(...)\nlatency = time.time() - start\nprint(f"Request took {latency:.2f} seconds")\n\n# Monitor vLLM logs\ndocker logs -f <container_id>\n\n# Check error rates\n# Parse logs for errors or use a monitoring tool (Prometheus + Grafana)',
          codeLanguage: 'python',
        },
        commonMistakes: {
          title: 'Erreurs courantes avec les déploiements Headless',
          items: [
            '**Ne pas surveiller la VRAM.** Les modèles peuvent silencieusement manquer de mémoire. Surveillez le GPU avant le déploiement en production.',
            '**Exposer l\'API sans authentification.** Les services headless sont souvent exposés aux réseaux. Ajoutez toujours l\'authentification (clé API, pare-feu).',
            '**Ne pas définir les limites de ressources.** Un modèle peut consommer 100 % du GPU, bloquant les autres tâches. Utilisez `--gpu-memory-utilization` dans vLLM.',
            '**S\'attendre à ce qu\'Ollama se mette à l\'échelle à 100+ utilisateurs.** Utilisez vLLM pour la haute concurrence. Ollama peut gérer 1-3 utilisateurs simultanés.',
            '**Ne pas tester le basculement.** Si votre serveur de modèles plante, les requêtes se bloquent. Utilisez un équilibreur de charge et des contrôles de santé.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Questions fréquemment posées sur les déploiements Headless',
          faqs: [
            {
              q: 'Ollama et vLLM peuvent-ils s\'exécuter sur le même GPU?',
              a: 'Non, pas simultanément. Ils concourront pour la VRAM. Exécutez l\'un ou l\'autre, ou utilisez plusieurs GPU.',
            },
            {
              q: 'Est-il sûr d\'exposer l\'API à Internet?',
              a: 'Non, pas sans authentification. Placez toujours une clé API, un pare-feu ou un proxy inverse en avant. Ne jamais exposer localhost:11434 directement.',
            },
            {
              q: 'Combien d\'utilisateurs simultanés Ollama peut-il gérer?',
              a: 'Généralement 1-3 sans mise en file d\'attente. Pour plus, utilisez vLLM ou ajoutez une mise en file d\'attente des requêtes.',
            },
            {
              q: 'Quelle est la différence de performance entre Ollama et vLLM?',
              a: 'Requête unique : vitesse similaire. Requêtes simultanées multiples : vLLM est 5-10× mieux car il regroupe les requêtes.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures connexes',
          items: [
            '[Comment installer Ollama](/local-llms/how-to-install-ollama?lang=fr) -- Configuration d\'Ollama.',
            '[Text-Generation-WebUI vs vLLM vs llama.cpp](/local-llms/text-generation-webui-vs-vllm-vs-llamacpp?lang=fr) -- Comparaison des moteurs.',
            '[API locale OpenAI-compatible](/local-llms/local-llm-openai-compatible-api?lang=fr) -- Documentation de l\'API.',
            '[Guide du matériel LLM local](/local-llms/local-llm-hardware-guide-2026?lang=fr) -- Exigences en matériel.',
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
        'headline': 'LLMs Headless locaux : exécuter des modèles sans interface utilisateur (2026)',
        'description': 'Déploiement LLM Headless avec Ollama et vLLM : configuration de production pour serveurs et microservices, sans interface utilisateur.',
        'url': 'https://www.promptquorum.com/local-llms/headless-local-llms?lang=fr',
        'inLanguage': 'fr',
        'datePublished': '2026-04-04',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways', 'h2'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'fr',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Ollama et vLLM peuvent-ils s\'exécuter sur le même GPU?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Non, pas simultanément. Ils concourront pour la VRAM. Exécutez l\'un ou l\'autre, ou utilisez plusieurs GPU.' } },
          { '@type': 'Question', 'name': 'Est-il sûr d\'exposer l\'API à Internet?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Non, pas sans authentification. Placez toujours une clé API, un pare-feu ou un proxy inverse en avant. Ne jamais exposer localhost:11434 directement.' } },
          { '@type': 'Question', 'name': 'Combien d\'utilisateurs simultanés Ollama peut-il gérer?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Généralement 1-3 sans mise en file d\'attente. Pour plus, utilisez vLLM ou ajoutez une mise en file d\'attente des requêtes.' } },
          { '@type': 'Question', 'name': 'Quelle est la différence de performance entre Ollama et vLLM?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Requête unique : vitesse similaire. Requêtes simultanées multiples : vLLM est 5-10× mieux car il regroupe les requêtes.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Déploiement LLM Headless',
        'inLanguage': 'fr',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Démarrez Ollama en mode Headless', 'description': 'Exécutez ollama serve pour exposer l\'API REST sur localhost:11434. Utilisez la variable d\'environnement OLLAMA_HOST pour les ports personnalisés.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Interagir via API REST', 'description': 'Appelez l\'API depuis Python, Node.js ou curl. Ollama est compatible OpenAI pour une intégration facile.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Traitement par lot et production', 'description': 'Les déploiements headless s\'échellent mieux que les approches basées sur l\'UI. Utilisez vLLM ou Ollama pour les requêtes simultanées.' },
        ]
      },
    },
  };

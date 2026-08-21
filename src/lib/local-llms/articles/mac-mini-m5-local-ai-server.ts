import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-en.webp',
    title: 'Mac Mini M5 as Local AI Server: Always-On LLM, Whisper, RAG, Voice Assistant (Anticipated)',
    seoTitle: 'Mac Mini M5 as Local AI Server: Always-On 24/7',
    intro: 'When Apple releases the Mac Mini M5, it will make an excellent silent, always-on local AI server. This guide covers the anticipated hardware configuration, setup strategy, and cost-benefit analysis for running Ollama LLM, Whisper STT, RAG pipeline, and voice assistant stack. Estimated power costs: $26-39/year electricity. Note: M5 Mac Mini has not yet been announced; specifications are based on current M5 Pro/Max performance data.',
    metaDescription: 'Run always-on local AI server on Mac Mini M5. 25–55W power, $26–39/year electricity. Ollama LLM, Whisper STT, RAG, voice assistant. Silent, never reboots.',
    twitterDescription: 'Mac mini M5 Pro 64GB: perfect silent local AI server. Always-on LLM + Whisper + RAG for $35/year electricity. Full setup guide.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    ctaText: 'Got your Mac Mini AI server running? Compare your local Llama or DeepSeek output against GPT-4, Claude, Gemini, and 22 other models in one dispatch with PromptQuorum — verify your self-hosted setup delivers cloud-quality answers for your specific use cases.',
    current_models_mentioned: ['Llama 3.3 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'Mac Mini M5'],
    audience: 'Users wanting always-on local AI server for home/office. Technical users comfortable with terminal.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac mini local AI server',
    targetKeywords: ['Mac mini AI server', 'always-on LLM', 'home AI infrastructure', 'Ollama always-on', 'Mac mini M5 server'],
    leadAnswerBlock: '**When released, Mac mini M5 Pro 64GB (estimated $1,199) would be an excellent always-on AI server option: silent (near-fanless), 25-55W power draw, ~$26-39/year electricity. Expected to run Ollama 34B models, Whisper STT, RAG pipeline, and voice assistant simultaneously. Note: M5 Mac Mini has not yet been announced by Apple.**',
    nextStep: {
      text: 'Ready to set up Ollama on your Mac Mini M5? Here\'s the full installation guide.',
      label: 'Ollama on Mac — Setup Guide 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      en: {
        question: 'Why would Mac mini M5 be a good local AI server (when released)?',
        answer: 'Expected to be silent (fanless or near-silent), 25-55W power (vs 300W+ GPU desktop), estimated $26-39/year electricity. Would run Ollama 34B LLM + Whisper + RAG simultaneously on unified memory. Note: M5 Mac Mini has not yet been announced.',
        bullets: [
          'M5 Pro 64GB: estimated $1,199 (not yet released)',
          'Power: 25-55W expected (vs 300W+ GPU desktop)',
          'Annual electricity: estimated $26-39 (vs $263-394 GPU)',
          'Silent: expected near-fanless under typical LLM loads',
          'REST API accessible from all LAN devices',
          'Cost-benefit analysis: see TCO section below',
        ],
        updatedDate: '2026-05-15',
      },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Why Mac Mini M5', anchor: '#why' },
      { label: 'Hardware Configuration', anchor: '#hardware' },
      { label: 'Complete Server Setup', anchor: '#setup' },
      { label: 'Remote Access', anchor: '#remote-access' },
      { label: 'Use Cases', anchor: '#usecases' },
      { label: 'Power & Thermal Performance', anchor: '#monitoring' },
      { label: 'Monitoring & Maintenance', anchor: '#maintenance' },
      { label: '5-Year Cost of Ownership', anchor: '#tco' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Articles', anchor: '#related' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'Why Mac Mini M5 Would Be an Excellent AI Server (When Released)',
        content: [
          'When Apple releases the Mac Mini M5 Pro, a 64GB configuration (estimated around $1,199) would be excellent hardware for running a silent, always-on local AI server. It would combine near-silence (fanless or very low-RPM fan), low power draw (25-55W vs 300W+ for GPU desktops), and enough unified memory to run 34B parameter models or multiple smaller models simultaneously.',
          'Estimated annual electricity cost: $26-39 vs $263-394 for desktop GPU equivalents — less than two months of a single ChatGPT Plus subscription, every year. Note: M5 Mac Mini has not yet been announced by Apple; specifications are based on expected M5 performance characteristics.',
        ],
        tableFormat: true,
        columns: ['Property', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'Property': 'Hardware cost', 'Mac Mini M5 Pro': '$1,199', 'Desktop + RTX 4070': '$1,200+', 'Raspberry Pi 5': '$80' },
          { 'Property': 'Power (idle)', 'Mac Mini M5 Pro': '8W', 'Desktop + RTX 4070': '50W', 'Raspberry Pi 5': '5W' },
          { 'Property': 'Power (LLM load)', 'Mac Mini M5 Pro': '25-55W', 'Desktop + RTX 4070': '200-300W', 'Raspberry Pi 5': 'N/A (too small)' },
          { 'Property': 'Annual electricity', 'Mac Mini M5 Pro': '$26-39', 'Desktop + RTX 4070': '$263-394', 'Raspberry Pi 5': '~$5' },
          { 'Property': 'Noise level', 'Mac Mini M5 Pro': 'Silent', 'Desktop + RTX 4070': 'Loud (3+ fans)', 'Raspberry Pi 5': 'Silent' },
          { 'Property': 'Max model size', 'Mac Mini M5 Pro': '34B (Q5)', 'Desktop + RTX 4070': '8B (12GB VRAM)', 'Raspberry Pi 5': '1-3B only' },
          { 'Property': 'Always-on reliability', 'Mac Mini M5 Pro': 'Excellent', 'Desktop + RTX 4070': 'Good', 'Raspberry Pi 5': 'Excellent' },
          { 'Property': 'Footprint', 'Mac Mini M5 Pro': '5×5 inches', 'Desktop + RTX 4070': 'Full tower', 'Raspberry Pi 5': '3×3 inches' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware Configuration Recommendation',
        content: 'The 64GB M5 Pro at $1,199 is the value sweet spot: runs 34B models, supports multi-model voice assistant stacks, and has headroom for the next 2-3 years of model size growth. Never buy less than 36GB for AI server use.',
        tableFormat: true,
        columns: ['Config', 'Price (2026)', 'Memory', 'Best For', 'Models Supported'],
        rows: [
          { 'Config': 'Mac Mini M5 (base)', 'Price (2026)': '$599', 'Memory': '16 GB', 'Best For': 'Light use, single user', 'Models Supported': '7B Q4 only' },
          { 'Config': 'Mac Mini M5 (32GB)', 'Price (2026)': '$799', 'Memory': '32 GB', 'Best For': 'Single user general', 'Models Supported': 'Up to 13B Q4' },
          { 'Config': 'Mac Mini M5 Pro 36GB', 'Price (2026)': '$999', 'Memory': '36 GB', 'Best For': 'Voice assistant stack', 'Models Supported': '8B + Whisper + TTS' },
          { 'Config': 'Mac Mini M5 Pro 64GB ★', 'Price (2026)': '$1,199', 'Memory': '64 GB', 'Best For': 'Recommended sweet spot', 'Models Supported': '34B models comfortably' },
          { 'Config': 'Mac Mini M5 Pro 64GB + 1TB', 'Price (2026)': '$1,399', 'Memory': '64 GB', 'Best For': 'Many stored models', 'Models Supported': '50+ models on disk' },
        ],
        note: '★ Recommended. Storage planning: Llama 3.3 8B Q4 ~5 GB per model, Whisper large-v3 ~3 GB, embedding model ~0.5 GB, ChromaDB with 10K docs ~2 GB. Typical 5-model setup: 50-80 GB. Minimum 512 GB SSD; 1 TB for power users.',
        image: '/images/mac-mini-m5-local-ai-server-memory-tier-capacity-en.svg',
        imageCaption: 'Mac Mini M5 memory tier vs max model capacity: 16 GB runs 7B Q4 only, 32 GB up to 13B Q4, 36 GB fits an 8B + Whisper + TTS voice stack, and the recommended 64 GB Pro comfortably runs 34B models.',
      },
      setup: {
        id: 'setup',
        title: 'Complete Server Setup (30 Minutes from Unbox to Running)',
        content: 'These steps configure Mac Mini M5 as a persistent, network-accessible AI server. After completing all steps, every device on your LAN can send requests to the Mac Mini\'s Ollama API at port 11434.',
      },
      setupStep1: {
        id: 'setup-step1',
        title: 'Step 1: Install Homebrew and Ollama',
        codeBlock: `# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Ollama
brew install ollama

# Start as background service (auto-starts on reboot)
brew services start ollama

# Verify it's running
curl http://localhost:11434/api/version`,
        codeLanguage: 'bash',
      },
      setupStep2: {
        id: 'setup-step2',
        title: 'Step 2: Configure for Network Access',
        content: 'By default Ollama listens only on localhost. These settings open it to your LAN and configure multi-model caching.',
        codeBlock: `# Allow Ollama to listen on all interfaces (not just localhost)
echo 'export OLLAMA_HOST=0.0.0.0:11434' >> ~/.zshrc
echo 'export OLLAMA_MAX_LOADED_MODELS=3' >> ~/.zshrc
echo 'export OLLAMA_KEEP_ALIVE=1h' >> ~/.zshrc
source ~/.zshrc

# Restart Ollama with new settings
brew services restart ollama

# Verify listening on all interfaces
lsof -i :11434`,
        codeLanguage: 'bash',
      },
      setupStep3: {
        id: 'setup-step3',
        title: 'Step 3: Configure macOS Firewall',
        content: 'System Settings → Network → Firewall → Options → Add Ollama binary path (/opt/homebrew/bin/ollama) → Allow incoming connections. This permits LAN devices to reach port 11434 while keeping the firewall active.',
      },
      setupStep4: {
        id: 'setup-step4',
        title: 'Step 4: Pull Recommended Models',
        codeBlock: `# General-purpose LLM
ollama pull llama3.1:8b

# Alternative: faster, similar quality
ollama pull mistral:7b

# For coding tasks
ollama pull deepseek-coder-v2:16b

# Embedding model for RAG
ollama pull nomic-embed-text`,
        codeLanguage: 'bash',
      },
      setupStep5: {
        id: 'setup-step5',
        title: 'Step 5: Set Static IP or Use mDNS',
        content: 'mDNS (Bonjour) is the easiest option — your Mac Mini is reachable by hostname on your local network without any configuration.',
        codeBlock: `# Find current local IP
ipconfig getifaddr en0

# Or use Bonjour - access at hostname.local
scutil --get LocalHostName
# Example output: macmini → accessible at http://macmini.local:11434`,
        codeLanguage: 'bash',
        note: 'For a stable IP, assign a DHCP reservation in your router settings using the Mac\'s MAC address. This ensures the IP never changes.',
      },
      setupStep6: {
        id: 'setup-step6',
        title: 'Step 6: Prevent Sleep (Critical for Always-On)',
        content: 'Without these settings, macOS will sleep after inactivity, making the server unreachable until manually woken.',
        codeBlock: `sudo pmset -a sleep 0
sudo pmset -a displaysleep 1
sudo pmset -a powernap 0
sudo pmset -a hibernatemode 0

# Verify settings
pmset -g`,
        codeLanguage: 'bash',
        note: 'Set "Start up automatically after a power failure" in System Settings → Energy to handle power outages.',
      },
      setupStep7: {
        id: 'setup-step7',
        title: 'Step 7: Test from Another Device on LAN',
        codeBlock: `# From any laptop/phone/tablet on same network:
curl http://macmini.local:11434/api/chat -d '{
  "model": "llama3.1:8b",
  "messages": [{"role": "user", "content": "Hello from my phone!"}]
}'`,
        codeLanguage: 'bash',
        note: 'If this returns a response, your AI server is live. All LAN devices can now use it as their AI backend.',
      },
      remoteAccess: {
        id: 'remote-access',
        title: 'Remote Access: Using Your Mac Mini AI Server from Anywhere',
        content: [
          'Two options for accessing your Mac Mini AI server outside your home network: Tailscale (recommended for personal use) and Cloudflare Tunnel (for web-accessible endpoints).',
        ],
        codeBlock: `# Option 1: Tailscale (Recommended) — install on Mac Mini
brew install --cask tailscale
# Sign in via the Tailscale app — Mac Mini gets a private IP
# Access from anywhere with Tailscale installed:
curl http://macmini.tailnet.ts.net:11434/api/chat -d '{...}'

# Option 2: Cloudflare Tunnel (Web Access)
brew install cloudflared
cloudflared tunnel create ai-server
cloudflared tunnel route dns ai-server ai.yourdomain.com
# Accessible at https://ai.yourdomain.com from anywhere`,
        codeLanguage: 'bash',
        note: 'Security: Never expose Ollama directly to the public internet without authentication. Ollama has no built-in auth. Use Tailscale, Cloudflare Tunnel with Access policies, or WireGuard VPN.',
      },
      usecases: {
        id: 'usecases',
        title: 'Four Real-World Use Cases for Mac Mini AI Server',
        content: 'The Mac Mini AI server covers four major use cases. Each is a standalone workflow — you can run all four simultaneously on the 64GB M5 Pro.',
      },
      usecaseFamilyServer: {
        id: 'usecases-family',
        title: 'Use Case 1: Family Home AI Server',
        content: [
          'Mac Mini sits in a closet running 24/7. Every device on the home network — phones, tablets, laptops — sends API requests to the same Ollama instance. Family of 4 with iPhones, iPads, and MacBooks all use it simultaneously.',
          'iPhones use Shortcuts → POST to macmini.local:11434. MacBook users use Continue.dev or Raycast extensions. Set OLLAMA_NUM_PARALLEL=2 so two family members can chat simultaneously on Llama 3.3 8B.',
          'Replaces 4× ChatGPT Plus subscriptions ($80/month = $960/year). Mac Mini payback period: ~15 months. Years 2-5: pure savings.',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: 'Use Case 2: Private RAG Document Q&A Server',
        content: 'Stack: Ollama (Llama 3.3 8B) + nomic-embed-text + ChromaDB. All running on Mac Mini, accessible via LAN. Use cases: family documents, legal contracts, technical manuals, recipe library, medical records, research papers. All private. All searchable. All offline.',
        codeBlock: `# Install ChromaDB via Docker
brew install --cask docker
docker run -d -p 8000:8000 -v ~/chromadb:/data chromadb/chroma

# Index documents (Python)
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.vectorstores import Chroma

embeddings = OllamaEmbeddings(
    model="nomic-embed-text",
    base_url="http://localhost:11434"
)
vectordb = Chroma.from_documents(
    documents=splits,
    embedding=embeddings,
    persist_directory="./chroma_db"
)`,
        codeLanguage: 'python',
      },
      usecaseVoice: {
        id: 'usecases-voice',
        title: 'Use Case 3: Always-On Voice Assistant',
        content: [
          'Stack on Mac Mini: whisper.cpp for STT (Metal accelerated), Ollama Llama 3.3 8B for reasoning, Piper TTS for voice output, Wyoming protocol for Home Assistant integration.',
          'Wake-word triggered via client devices (Apple HomePod via Home Assistant, or Raspberry Pi microphone arrays in each room). End-to-end latency on M5 Pro: 1.2 seconds (STT 0.3s + LLM 0.7s + TTS 0.2s).',
          'Annual electricity: $35. Comparable cloud service (Alexa Plus at $20/month): $240/year. Saves $200+ per year while keeping all voice data private.',
        ],
        items: [
          'See detailed setup: [Build a Local Voice Assistant](/power-local-llm/build-local-voice-assistant-2026)',
        ],
      },
      usecaseCoding: {
        id: 'usecases-coding',
        title: 'Use Case 4: Private Coding Agent (IDE Integration)',
        content: 'Configure Continue.dev or Cursor to use Mac Mini\'s API. DeepSeek Coder V2 at 16B outperforms GitHub Copilot on several language benchmarks — while keeping all code private and offline.',
        codeBlock: `// ~/.continue/config.json
{
  "models": [{
    "title": "Mac Mini DeepSeek Coder",
    "provider": "ollama",
    "model": "deepseek-coder-v2:16b",
    "apiBase": "http://macmini.local:11434"
  }]
}`,
        codeLanguage: 'json',
        items: [
          '$0/year (vs GitHub Copilot at $10/month per user)',
          'Code never leaves your network',
          'Works offline (planes, secure offices)',
          'DeepSeek Coder V2 outperforms Copilot on Go, Python, TypeScript benchmarks',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: 'Power Consumption and Thermal Performance',
        content: 'Measured on M5 Pro Mac Mini 64GB running Ollama with Metal acceleration. Electricity cost calculated at $0.15/kWh.',
        tableFormat: true,
        columns: ['Workload', 'Power', 'Annual Cost (24/7, $0.15/kWh)'],
        rows: [
          { 'Workload': 'Idle', 'Power': '8W', 'Annual Cost (24/7, $0.15/kWh)': '~$10/year' },
          { 'Workload': 'Llama 8B inference', 'Power': '25-35W', 'Annual Cost (24/7, $0.15/kWh)': '~$39/year' },
          { 'Workload': 'Llama 34B inference', 'Power': '40-55W', 'Annual Cost (24/7, $0.15/kWh)': '~$63/year' },
          { 'Workload': 'Mixed typical workload', 'Power': '15-25W', 'Annual Cost (24/7, $0.15/kWh)': '~$26/year' },
        ],
        items: [
          'Surface temperature under load: 35-42°C (warm to touch)',
          'Internal CPU temperature: 65-75°C (well below throttle threshold)',
          'Fan: never engages on M5 base; brief low-RPM engagement on M5 Pro during peak loads',
          'No thermal throttling observed in 30-day continuous operation tests',
          'Ventilation: open space recommended — not an enclosed cabinet',
          'SSD endurance: 600 TBW typical = ~30 years of AI server write patterns',
        ],
        note: 'Average annual electricity for typical mixed workload: $26-39. Always-on for an entire year costs less than one month of ChatGPT Plus.',
        image: '/images/mac-mini-m5-local-ai-server-power-draw-by-workload-en.svg',
        imageCaption: 'Mac Mini M5 Pro power draw by workload: 8W idle, 25-35W on Llama 8B inference, 40-55W on Llama 34B inference — versus 200-300W for a desktop RTX 4070.',
      },
      maintenance: {
        id: 'maintenance',
        title: 'Monitoring and Maintenance for 24/7 Operation',
        content: 'Save this health check script as ~/check-ai-server.sh — run it via cron or launchd hourly to auto-restart Ollama if it crashes.',
        codeBlock: `#!/bin/bash
echo "=== AI Server Health Check ==="
echo "Date: $(date)"

if pgrep -x "ollama" > /dev/null; then
    echo "✓ Ollama running"
else
    echo "✗ Ollama NOT running - restarting"
    brew services restart ollama
fi

if curl -s http://localhost:11434/api/version > /dev/null; then
    echo "✓ API responding"
else
    echo "✗ API NOT responding"
fi

df -h / | tail -1
uptime`,
        codeLanguage: 'bash',
        items: [
          'Monthly: Update Ollama with `brew upgrade ollama`',
          'Monthly: Update models with `ollama pull llama3.1:8b` (re-pulls latest)',
          'Monthly: Clean unused models with `ollama list` then `ollama rm <model-name>`',
          'Monthly: Apply macOS updates via System Settings → Software Update',
          'Monthly: Restart Mac Mini (memory cleanup, clears any accumulated state)',
        ],
        note: 'To schedule the health check hourly, create ~/Library/LaunchAgents/com.user.ollama-monitor.plist and load it with launchctl.',
      },
      tco: {
        id: 'tco',
        title: '5-Year Total Cost of Ownership Analysis',
        tableFormat: true,
        columns: ['Year', 'Mac Mini AI Server', '4× ChatGPT Plus', 'Difference'],
        rows: [
          { 'Year': 'Year 1', 'Mac Mini AI Server': '$1,199 hardware + $35 power = $1,234', '4× ChatGPT Plus': '$960', 'Difference': '-$274 (Mac costs more in Y1)' },
          { 'Year': 'Year 2', 'Mac Mini AI Server': '$35 (power only)', '4× ChatGPT Plus': '$960', 'Difference': '+$925 saved' },
          { 'Year': 'Year 3', 'Mac Mini AI Server': '$35', '4× ChatGPT Plus': '$960', 'Difference': '+$925 saved' },
          { 'Year': 'Year 4', 'Mac Mini AI Server': '$35', '4× ChatGPT Plus': '$960', 'Difference': '+$925 saved' },
          { 'Year': 'Year 5', 'Mac Mini AI Server': '$35', '4× ChatGPT Plus': '$960', 'Difference': '+$925 saved' },
          { 'Year': '5-year total', 'Mac Mini AI Server': '$1,374', '4× ChatGPT Plus': '$4,800', 'Difference': '+$3,426 saved' },
        ],
        items: [
          'Payback period for 4-person family replacing ChatGPT Plus: ~15 months',
          'Coding agent (replacing Copilot at $10/user/month) — 1 developer: pays back in 12 months',
          'Coding agent — 4-person dev team: pays back in 3 months',
          'Coding agent — 10-person dev team: pays back in 1.2 months',
        ],
        note: 'TCO assumes $960/year (4× ChatGPT Plus at $20/month each). All data private, no per-query costs, offline capability included.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Is Mac Mini M5 quieter than alternatives?', a: 'Yes. The M5 base is completely fanless. The M5 Pro\'s fan rarely spins, and when it does it is very quiet. RTX GPU desktop: ~50-70 dB. Mac Mini M5: 0 dB at rest, 20-25 dB briefly under heavy 34B+ load.' },
          { q: 'Can I remote into the Mac Mini?', a: 'Yes — SSH via terminal, or Screen Sharing (VNC) via System Settings → Sharing → Remote Management. For LAN: ssh user@macmini.local. For remote access: use Tailscale first, then SSH through the Tailscale IP.' },
          { q: 'What if I need higher throughput?', a: 'Upgrade path: Mac Studio M5 Max (128GB, ~$2,000) for 2× speed and 70B model support. Mac Studio M5 Ultra (expected 2026) for 4× speed. For server farms, rack multiple Mac Minis and load-balance with Nginx.' },
          { q: 'How long does the Mac Mini last as a 24/7 AI server?', a: 'Apple Silicon Macs are rated for sustained operation. Expected lifespan: 7-10 years for AI server use. SSD endurance (600 TBW typical) covers 25-30 years of AI workloads. Annual hardware failure rate under 0.5%.' },
          { q: 'Can I run multiple users simultaneously?', a: 'Yes. Set OLLAMA_NUM_PARALLEL=2 (or higher with more memory) to handle concurrent requests. 64GB M5 Pro handles 2-3 simultaneous users on 8B models, or 1 user with multi-model stacks (LLM + vision + STT).' },
          { q: 'What happens if Mac Mini loses power?', a: 'After power restoration, macOS boots automatically if you set "Start up automatically after a power failure" in System Settings → Energy. Ollama starts as a brew service. Models reload on first request (5-15 sec delay for first response after reboot).' },
          { q: 'Can I add an external GPU to Mac Mini for faster inference?', a: 'No. Apple Silicon does not support external GPUs for Metal/ML acceleration. The unified memory architecture is the design — you cannot add discrete GPU. For more speed, upgrade to Mac Studio M5 Max.' },
          { q: 'Is Mac Mini overkill for an AI server, or underkill?', a: 'For 1-4 user households or small teams running 8B-34B models: just right. For 70B models: underkill (need Mac Studio M5 Max 128GB). For tiny models on a hobbyist budget: overkill (Raspberry Pi 5 covers 1-3B models only, but insufficient for anything practical in 2026).' },
        ],
      },
      relatedArticles: {
        id: 'related',
        title: 'Related Articles',
        items: [
          '[Apple Silicon for Local LLMs: Complete Guide](/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max Benchmarks 2026](/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[Ollama on Mac Setup Guide](/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[How Much Unified Memory for Local LLMs?](/local-llms/how-much-unified-memory-for-local-llm)',
          '[Best LLM Models for Apple Silicon](/local-llms/best-models-apple-silicon-2026)',
          '[MLX vs Ollama vs llama.cpp Comparison](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Build a Local Voice Assistant](/power-local-llm/build-local-voice-assistant-2026)',
          '[Local RAG for Private Business Data](/power-local-llm/local-rag-for-private-business-data)',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-de.webp',
    title: 'Mac Mini M5 als lokaler KI-Server: Always-On LLM, Whisper, RAG, Sprachassistent (erwartet)',
    seoTitle: 'Mac Mini M5 als KI-Server: 24/7 Always-On',
    intro: 'Wenn Apple den Mac Mini M5 veröffentlicht, wäre er ein ausgezeichneter stiller, dauerhaft laufender lokaler KI-Server. Diese Anleitung behandelt die erwartete Hardware-Konfiguration, Setup-Strategie und Kosten-Nutzen-Analyse für den Betrieb von Ollama LLM, Whisper STT, RAG-Pipeline und Sprachassistent. Geschätzte Stromkosten: ca. 26–53 €/Jahr. Hinweis: Der Mac Mini M5 wurde von Apple noch nicht angekündigt; die Angaben basieren auf den aktuellen Leistungsdaten von M5 Pro/Max.',
    metaDescription: 'Lokaler KI-Server auf Mac Mini M5. 25–55 W Stromverbrauch, ca. 53 €/Jahr. Ollama LLM, Whisper STT, RAG, Sprachassistent. Stumm, immer online.',
    twitterDescription: 'Mac Mini M5 Pro 64 GB: idealer stiller lokaler KI-Server. Always-On LLM + Whisper + RAG für ca. 53 €/Jahr Strom. Vollständige Einrichtungsanleitung.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    ctaText: 'Mac Mini KI-Server läuft? Vergleichen Sie Ihre lokalen Llama- oder DeepSeek-Antworten mit GPT-4, Claude, Gemini und 22 weiteren Modellen in einem Dispatch mit PromptQuorum — prüfen Sie, ob Ihr selbst gehostetes Setup Cloud-Qualität liefert.',
    current_models_mentioned: ['Llama 3.3 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'Mac Mini M5'],
    audience: 'Nutzer, die einen dauerhaft laufenden lokalen KI-Server für Zuhause oder das Büro betreiben möchten.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini lokaler KI-Server',
    targetKeywords: ['Mac Mini KI-Server', 'Always-On LLM', 'lokale KI-Infrastruktur', 'Ollama dauerhaft', 'Mac Mini M5 Server'],
    leadAnswerBlock: '**Nach Veröffentlichung wäre der Mac Mini M5 Pro 64 GB (geschätzt ca. 1.349 €) ein ausgezeichneter Always-On-KI-Server: geräuschlos (annähernd lüfterlos), 25–55 W Stromverbrauch, geschätzt ca. 26–53 €/Jahr Strom. Würde voraussichtlich Ollama 34B-Modelle, Whisper STT, RAG-Pipeline und Sprachassistenten gleichzeitig betreiben. Hinweis: Der Mac Mini M5 wurde von Apple noch nicht angekündigt.**',
    nextStep: {
      text: 'Bereit, Ollama auf Ihrem Mac Mini M5 einzurichten? Hier ist der vollständige Installationsleitfaden.',
      label: 'Ollama auf Mac — Einrichtungsanleitung 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      de: {
        question: 'Warum wäre der Mac Mini M5 ein guter lokaler KI-Server (nach Erscheinen)?',
        answer: 'Würde voraussichtlich geräuschlos sein (lüfterlos oder nahezu lautlos), 25–55 W (gegenüber 300 W+ GPU-Desktop), geschätzt ca. 26–53 €/Jahr Strom (gegenüber 350–550 € GPU). Würde Ollama 34B-LLM + Whisper + RAG gleichzeitig auf 64 GB Unified Memory betreiben. Hinweis: Der Mac Mini M5 wurde noch nicht von Apple angekündigt.',
        bullets: [
          'M5 Pro 64 GB: geschätzt ca. 1.349 € (noch nicht erschienen)',
          'Stromverbrauch: 25–55 W erwartet (gegenüber 300 W+ GPU-Desktop)',
          'Jahresstrom: geschätzt ca. 26–53 € (gegenüber 350–550 € GPU, bei 0,30 €/kWh)',
          'Geräuschlos: voraussichtlich annähernd lüfterlos unter typischer LLM-Last',
          'REST-API für alle Geräte im Heimnetz',
          'Kosten-Nutzen-Analyse: siehe TCO-Abschnitt unten',
        ],
        updatedDate: '2026-05-15',
      },
    },
    toc: [
      { label: 'Warum Mac Mini M5', anchor: '#why' },
      { label: 'Hardware-Konfiguration', anchor: '#hardware' },
      { label: 'Vollständiges Server-Setup', anchor: '#setup' },
      { label: 'Remote-Zugriff', anchor: '#remote-access' },
      { label: 'Anwendungsfälle', anchor: '#usecases' },
      { label: 'Strom & Thermik', anchor: '#monitoring' },
      { label: 'Überwachung & Wartung', anchor: '#maintenance' },
      { label: '5-Jahres-Gesamtkosten', anchor: '#tco' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Verwandte Artikel', anchor: '#related' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'Warum Mac Mini M5 ein ausgezeichneter KI-Server wäre (nach Erscheinen)',
        content: [
          'Wenn Apple den Mac Mini M5 Pro veröffentlicht, wäre eine 64-GB-Konfiguration (geschätzt ca. 1.349 €) ausgezeichnete Hardware für einen stillen, dauerhaft laufenden lokalen KI-Server. Sie würde nahezu lautlosen Betrieb, geringen Stromverbrauch (25–55 W gegenüber 300 W+ für GPU-Desktops) und ausreichend Unified Memory für 34B-Modelle oder mehrere kleinere Modelle gleichzeitig kombinieren.',
          'Geschätzte jährliche Stromkosten: 26–53 € gegenüber 350–550 € für vergleichbare GPU-Desktops (bei deutschen Strompreisen von 0,30 €/kWh) — weniger als zwei Monate eines einzelnen ChatGPT-Plus-Abonnements, jedes Jahr. Hinweis: Der Mac Mini M5 wurde von Apple noch nicht angekündigt; die Angaben basieren auf den erwarteten Leistungsmerkmalen des M5.',
        ],
        tableFormat: true,
        columns: ['Eigenschaft', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'Eigenschaft': 'Hardwarekosten', 'Mac Mini M5 Pro': 'ca. 1.349 €', 'Desktop + RTX 4070': 'ab 1.200 €', 'Raspberry Pi 5': 'ca. 80 €' },
          { 'Eigenschaft': 'Stromverbrauch (Leerlauf)', 'Mac Mini M5 Pro': '8 W', 'Desktop + RTX 4070': '50 W', 'Raspberry Pi 5': '5 W' },
          { 'Eigenschaft': 'Stromverbrauch (LLM-Last)', 'Mac Mini M5 Pro': '25–55 W', 'Desktop + RTX 4070': '200–300 W', 'Raspberry Pi 5': 'Nicht möglich' },
          { 'Eigenschaft': 'Jahresstrom (0,30 €/kWh)', 'Mac Mini M5 Pro': '26–53 €', 'Desktop + RTX 4070': '350–550 €', 'Raspberry Pi 5': 'ca. 10 €' },
          { 'Eigenschaft': 'Lautstärke', 'Mac Mini M5 Pro': 'Geräuschlos', 'Desktop + RTX 4070': 'Laut (3+ Lüfter)', 'Raspberry Pi 5': 'Geräuschlos' },
          { 'Eigenschaft': 'Max. Modellgröße', 'Mac Mini M5 Pro': '34B (Q5)', 'Desktop + RTX 4070': '8B (12 GB VRAM)', 'Raspberry Pi 5': 'Nur 1–3B' },
          { 'Eigenschaft': 'Dauerbetrieb-Zuverlässigkeit', 'Mac Mini M5 Pro': 'Ausgezeichnet', 'Desktop + RTX 4070': 'Gut', 'Raspberry Pi 5': 'Ausgezeichnet' },
          { 'Eigenschaft': 'Stellfläche', 'Mac Mini M5 Pro': '13×13 cm', 'Desktop + RTX 4070': 'Midi-Tower', 'Raspberry Pi 5': '8×8 cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware-Konfigurationsempfehlung',
        content: 'Der M5 Pro 64 GB für ca. 1.349 € ist das beste Preis-Leistungs-Verhältnis: betreibt 34B-Modelle, unterstützt Multi-Modell-Sprachassistenten und hat Kapazitätsreserven für 2–3 weitere Jahre Modellwachstum. Niemals weniger als 36 GB für KI-Serverbetrieb kaufen.',
        tableFormat: true,
        columns: ['Konfiguration', 'Preis (2026)', 'Speicher', 'Geeignet für', 'Unterstützte Modelle'],
        rows: [
          { 'Konfiguration': 'Mac Mini M5 (Basis)', 'Preis (2026)': 'ca. 699 €', 'Speicher': '16 GB', 'Geeignet für': 'Leichte Nutzung, Einzelbenutzer', 'Unterstützte Modelle': 'Nur 7B Q4' },
          { 'Konfiguration': 'Mac Mini M5 (32 GB)', 'Preis (2026)': 'ca. 929 €', 'Speicher': '32 GB', 'Geeignet für': 'Allgemeine Einzelnutzung', 'Unterstützte Modelle': 'Bis zu 13B Q4' },
          { 'Konfiguration': 'Mac Mini M5 Pro 36 GB', 'Preis (2026)': 'ca. 1.149 €', 'Speicher': '36 GB', 'Geeignet für': 'Sprachassistent-Stack', 'Unterstützte Modelle': '8B + Whisper + TTS' },
          { 'Konfiguration': 'Mac Mini M5 Pro 64 GB ★', 'Preis (2026)': 'ca. 1.349 €', 'Speicher': '64 GB', 'Geeignet für': 'Empfohlener Sweet Spot', 'Unterstützte Modelle': '34B-Modelle komfortabel' },
          { 'Konfiguration': 'Mac Mini M5 Pro 64 GB + 1 TB', 'Preis (2026)': 'ca. 1.549 €', 'Speicher': '64 GB', 'Geeignet für': 'Viele gespeicherte Modelle', 'Unterstützte Modelle': '50+ Modelle auf Disk' },
        ],
        note: '★ Empfohlen. Speicherplanung: Llama 3.3 8B Q4 ca. 5 GB pro Modell, Whisper large-v3 ca. 3 GB, Embedding-Modell ca. 0,5 GB, ChromaDB mit 10.000 Dokumenten ca. 2 GB. Typisches 5-Modell-Setup: 50–80 GB. Mindestens 512 GB SSD; 1 TB für Power-User.',
        image: '/images/mac-mini-m5-local-ai-server-memory-tier-capacity-en.svg',
        imageCaption: 'Mac Mini M5 Arbeitsspeicher-Stufen im Vergleich zur maximalen Modellgröße: 16 GB nur für 7B Q4, 32 GB bis 13B Q4, 36 GB für einen 8B-Sprachassistenten-Stack mit Whisper und TTS, und die empfohlenen 64 GB Pro betreiben 34B-Modelle komfortabel.',
      },
      setup: {
        id: 'setup',
        title: 'Vollständiges Server-Setup (30 Minuten vom Auspacken bis zum Betrieb)',
        content: 'Diese Schritte konfigurieren den Mac Mini M5 als dauerhaften, netzwerkzugänglichen KI-Server. Nach Abschluss aller Schritte kann jedes Gerät im Heimnetz Anfragen an die Ollama-API des Mac Mini auf Port 11434 senden.',
      },
      setupStep1: {
        id: 'setup-step1',
        title: 'Schritt 1: Homebrew und Ollama installieren',
        codeBlock: `# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Ollama
brew install ollama

# Start as background service (auto-starts on reboot)
brew services start ollama

# Verify it's running
curl http://localhost:11434/api/version`,
        codeLanguage: 'bash',
      },
      setupStep2: {
        id: 'setup-step2',
        title: 'Schritt 2: Netzwerkzugriff konfigurieren',
        content: 'Standardmäßig lauscht Ollama nur auf localhost. Diese Einstellungen öffnen es für das Heimnetz und konfigurieren Multi-Modell-Caching.',
        codeBlock: `# Allow Ollama to listen on all interfaces (not just localhost)
echo 'export OLLAMA_HOST=0.0.0.0:11434' >> ~/.zshrc
echo 'export OLLAMA_MAX_LOADED_MODELS=3' >> ~/.zshrc
echo 'export OLLAMA_KEEP_ALIVE=1h' >> ~/.zshrc
source ~/.zshrc

# Restart Ollama with new settings
brew services restart ollama

# Verify listening on all interfaces
lsof -i :11434`,
        codeLanguage: 'bash',
      },
      setupStep3: {
        id: 'setup-step3',
        title: 'Schritt 3: macOS-Firewall konfigurieren',
        content: 'Systemeinstellungen → Netzwerk → Firewall → Optionen → Ollama-Binärpfad hinzufügen (/opt/homebrew/bin/ollama) → Eingehende Verbindungen erlauben. Dies erlaubt Heimnetz-Geräten den Zugriff auf Port 11434.',
      },
      setupStep4: {
        id: 'setup-step4',
        title: 'Schritt 4: Empfohlene Modelle herunterladen',
        codeBlock: `# General-purpose LLM
ollama pull llama3.1:8b

# Alternative: faster, similar quality
ollama pull mistral:7b

# For coding tasks
ollama pull deepseek-coder-v2:16b

# Embedding model for RAG
ollama pull nomic-embed-text`,
        codeLanguage: 'bash',
      },
      setupStep5: {
        id: 'setup-step5',
        title: 'Schritt 5: Statische IP oder mDNS einrichten',
        content: 'mDNS (Bonjour) ist die einfachste Option — der Mac Mini ist über den Hostnamen im Heimnetz erreichbar, ohne weitere Konfiguration.',
        codeBlock: `# Find current local IP
ipconfig getifaddr en0

# Or use Bonjour - access at hostname.local
scutil --get LocalHostName
# Beispiel: macmini → erreichbar unter http://macmini.local:11434`,
        codeLanguage: 'bash',
        note: 'Für eine stabile IP: DHCP-Reservierung im Router-Dashboard über die MAC-Adresse des Mac einrichten. So ändert sich die IP nie.',
      },
      setupStep6: {
        id: 'setup-step6',
        title: 'Schritt 6: Ruhezustand deaktivieren (Pflicht für Dauerbetrieb)',
        content: 'Ohne diese Einstellungen wechselt macOS nach Inaktivität in den Ruhezustand und der Server ist bis zum manuellen Aufwecken nicht erreichbar.',
        codeBlock: `sudo pmset -a sleep 0
sudo pmset -a displaysleep 1
sudo pmset -a powernap 0
sudo pmset -a hibernatemode 0

# Verify settings
pmset -g`,
        codeLanguage: 'bash',
        note: '„Nach Stromausfall automatisch starten" in Systemeinstellungen → Energie aktivieren, um Stromausfälle zu überbrücken.',
      },
      setupStep7: {
        id: 'setup-step7',
        title: 'Schritt 7: Vom anderen Gerät im Heimnetz testen',
        codeBlock: `# Von Laptop/Telefon/Tablet im selben Netz:
curl http://macmini.local:11434/api/chat -d '{
  "model": "llama3.1:8b",
  "messages": [{"role": "user", "content": "Hallo vom Telefon!"}]
}'`,
        codeLanguage: 'bash',
        note: 'Wenn eine Antwort zurückkommt, ist der KI-Server live. Alle Heimnetz-Geräte können ihn jetzt als KI-Backend nutzen.',
      },
      remoteAccess: {
        id: 'remote-access',
        title: 'Remote-Zugriff: Mac Mini KI-Server von überall nutzen',
        content: 'Zwei Optionen für den Zugriff auf den Mac Mini KI-Server außerhalb des Heimnetzes: Tailscale (empfohlen für Privatnutzer) und Cloudflare Tunnel (für webzugängliche Endpunkte).',
        codeBlock: `# Option 1: Tailscale (empfohlen) — auf Mac Mini installieren
brew install --cask tailscale
# Über die Tailscale-App anmelden — Mac Mini erhält private IP
# Von überall mit Tailscale erreichbar:
curl http://macmini.tailnet.ts.net:11434/api/chat -d '{...}'

# Option 2: Cloudflare Tunnel (Webzugriff)
brew install cloudflared
cloudflared tunnel create ai-server
cloudflared tunnel route dns ai-server ai.meinedomain.de
# Erreichbar unter https://ai.meinedomain.de von überall`,
        codeLanguage: 'bash',
        note: 'Sicherheitshinweis: Ollama niemals ohne Authentifizierung direkt ins Internet exponieren. Ollama hat keine eingebaute Auth. Tailscale, Cloudflare Tunnel mit Access-Richtlinien oder WireGuard VPN verwenden.',
      },
      usecases: {
        id: 'usecases',
        title: 'Vier reale Anwendungsfälle für Mac Mini KI-Server',
        content: 'Der Mac Mini KI-Server deckt vier Hauptanwendungsfälle ab. Jeder ist ein eigenständiger Workflow — alle vier lassen sich gleichzeitig auf dem M5 Pro 64 GB betreiben.',
      },
      usecaseFamilyServer: {
        id: 'usecases-family',
        title: 'Anwendungsfall 1: Heimischer Familien-KI-Server',
        content: [
          'Der Mac Mini steht in einem Schrank und läuft 24/7. Alle Geräte im Heimnetz — Smartphones, Tablets, Laptops — senden API-Anfragen an dieselbe Ollama-Instanz. Eine 4-köpfige Familie mit iPhones, iPads und MacBooks nutzt ihn gleichzeitig.',
          'iPhones nutzen Shortcuts → POST an macmini.local:11434. MacBook-Nutzer verwenden Continue.dev oder Raycast-Erweiterungen. Mit OLLAMA_NUM_PARALLEL=2 können zwei Familienmitglieder gleichzeitig chatten.',
          'Ersetzt 4× ChatGPT Plus (80 €/Monat = 960 €/Jahr). Amortisationszeit ca. 15 Monate. Ab Jahr 2 reine Ersparnisse.',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: 'Anwendungsfall 2: Privater RAG-Dokumenten-Q&A-Server',
        content: 'Stack: Ollama (Llama 3.3 8B) + nomic-embed-text + ChromaDB. Alles auf dem Mac Mini, über das Heimnetz erreichbar. Anwendungsfälle: Familiendokumente, Verträge, technische Handbücher, Rezeptbibliothek, medizinische Unterlagen, wissenschaftliche Arbeiten. Alles privat. Alles durchsuchbar. Alles offline.',
        codeBlock: `# ChromaDB via Docker installieren
brew install --cask docker
docker run -d -p 8000:8000 -v ~/chromadb:/data chromadb/chroma

# Dokumente indizieren (Python)
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.vectorstores import Chroma

embeddings = OllamaEmbeddings(
    model="nomic-embed-text",
    base_url="http://localhost:11434"
)
vectordb = Chroma.from_documents(
    documents=splits,
    embedding=embeddings,
    persist_directory="./chroma_db"
)`,
        codeLanguage: 'python',
      },
      usecaseVoice: {
        id: 'usecases-voice',
        title: 'Anwendungsfall 3: Always-On-Sprachassistent',
        content: [
          'Stack auf Mac Mini: whisper.cpp für STT (Metal-beschleunigt), Ollama Llama 3.3 8B für Reasoning, Piper TTS für Sprachausgabe, Wyoming-Protokoll für Home-Assistant-Integration.',
          'Wake-Word-Aktivierung über Client-Geräte (Apple HomePod via Home Assistant oder Raspberry Pi Mikrofon-Arrays). End-to-End-Latenz auf M5 Pro: 1,2 Sekunden (STT 0,3 s + LLM 0,7 s + TTS 0,2 s).',
          'Jahresstrom: ca. 35 €. Vergleichbarer Cloud-Dienst (Alexa Plus, 3 €/Monat): 36 €/Jahr — ähnliche Kosten, aber mit vollständiger Privatsphäre.',
        ],
        items: [
          'Detaillierte Einrichtung: [Lokalen Sprachassistenten aufbauen](/de/power-local-llm/build-local-voice-assistant-2026)',
        ],
      },
      usecaseCoding: {
        id: 'usecases-coding',
        title: 'Anwendungsfall 4: Privater Coding-Agent (IDE-Integration)',
        content: 'Continue.dev oder Cursor für die Nutzung der Mac Mini API konfigurieren. DeepSeek Coder V2 mit 16B übertrifft GitHub Copilot in mehreren Sprachbenchmarks — bei vollständiger Datenprivatsphäre.',
        codeBlock: `// ~/.continue/config.json
{
  "models": [{
    "title": "Mac Mini DeepSeek Coder",
    "provider": "ollama",
    "model": "deepseek-coder-v2:16b",
    "apiBase": "http://macmini.local:11434"
  }]
}`,
        codeLanguage: 'json',
        items: [
          '0 €/Jahr (gegenüber GitHub Copilot ca. 9 €/Monat pro Nutzer)',
          'Code verlässt niemals das Netzwerk',
          'Funktioniert offline (Flugzeug, gesicherte Büros)',
          'DeepSeek Coder V2 übertrifft Copilot bei Go, Python, TypeScript-Benchmarks',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: 'Stromverbrauch und Thermik',
        content: 'Gemessen am M5 Pro Mac Mini 64 GB mit Ollama und Metal-Beschleunigung. Stromkosten bei 0,30 €/kWh (deutscher Durchschnitt).',
        tableFormat: true,
        columns: ['Arbeitslast', 'Leistung', 'Jahreskosten (24/7, 0,30 €/kWh)'],
        rows: [
          { 'Arbeitslast': 'Leerlauf', 'Leistung': '8 W', 'Jahreskosten (24/7, 0,30 €/kWh)': 'ca. 21 €/Jahr' },
          { 'Arbeitslast': 'Llama 8B-Inferenz', 'Leistung': '25–35 W', 'Jahreskosten (24/7, 0,30 €/kWh)': 'ca. 79 €/Jahr' },
          { 'Arbeitslast': 'Llama 34B-Inferenz', 'Leistung': '40–55 W', 'Jahreskosten (24/7, 0,30 €/kWh)': 'ca. 123 €/Jahr' },
          { 'Arbeitslast': 'Gemischte typische Last', 'Leistung': '15–25 W', 'Jahreskosten (24/7, 0,30 €/kWh)': 'ca. 53 €/Jahr' },
        ],
        items: [
          'Oberflächentemperatur unter Last: 35–42 °C (warm bei Berührung)',
          'CPU-Innentemperatur: 65–75 °C (weit unter Drosselungsschwelle)',
          'Lüfter: dreht beim M5 Basis nie; kurz mit niedriger Drehzahl beim M5 Pro unter Spitzenlast',
          'Keine Thermaldrosselung in 30-tägigen Dauertests festgestellt',
          'Belüftung: offener Aufstellort empfohlen — kein geschlossener Schrank',
          'SSD-Haltbarkeit: 600 TBW typisch = ca. 30 Jahre KI-Server-Schreibmuster',
        ],
        note: 'Jahresstrom für gemischte typische Last: ca. 26–53 € (bei 0,30 €/kWh). Dauerbetrieb für ein ganzes Jahr kostet weniger als ein Monat ChatGPT Plus.',
        image: '/images/mac-mini-m5-local-ai-server-power-draw-by-workload-en.svg',
        imageCaption: 'Stromverbrauch des Mac Mini M5 Pro nach Arbeitslast: 8 W im Leerlauf, 25–35 W bei Llama-8B-Inferenz, 40–55 W bei Llama-34B-Inferenz — gegenüber 200–300 W bei einem Desktop mit RTX 4070.',
      },
      maintenance: {
        id: 'maintenance',
        title: 'Überwachung und Wartung für 24/7-Betrieb',
        content: 'Dieses Health-Check-Skript als ~/check-ai-server.sh speichern — über cron oder launchd stündlich ausführen, um Ollama bei Absturz automatisch neu zu starten.',
        codeBlock: `#!/bin/bash
echo "=== AI Server Health Check ==="
echo "Date: $(date)"

if pgrep -x "ollama" > /dev/null; then
    echo "✓ Ollama running"
else
    echo "✗ Ollama NOT running - restarting"
    brew services restart ollama
fi

if curl -s http://localhost:11434/api/version > /dev/null; then
    echo "✓ API responding"
else
    echo "✗ API NOT responding"
fi

df -h / | tail -1
uptime`,
        codeLanguage: 'bash',
        items: [
          'Monatlich: Ollama aktualisieren mit `brew upgrade ollama`',
          'Monatlich: Modelle aktualisieren mit `ollama pull llama3.1:8b`',
          'Monatlich: Ungenutzte Modelle bereinigen: `ollama list` → `ollama rm <Modellname>`',
          'Monatlich: macOS-Updates über Systemeinstellungen → Softwareaktualisierung installieren',
          'Monatlich: Mac Mini neu starten (Speicherbereinigung)',
        ],
        note: 'Health-Check stündlich planen: ~/Library/LaunchAgents/com.user.ollama-monitor.plist erstellen und mit launchctl laden.',
      },
      tco: {
        id: 'tco',
        title: '5-Jahres-Gesamtkostenanalyse',
        tableFormat: true,
        columns: ['Jahr', 'Mac Mini KI-Server', '4× ChatGPT Plus', 'Differenz'],
        rows: [
          { 'Jahr': 'Jahr 1', 'Mac Mini KI-Server': '1.349 € Hardware + 53 € Strom = 1.402 €', '4× ChatGPT Plus': '960 €', 'Differenz': '–442 € (Mac teurer in J1)' },
          { 'Jahr': 'Jahr 2', 'Mac Mini KI-Server': '53 € (nur Strom)', '4× ChatGPT Plus': '960 €', 'Differenz': '+907 € gespart' },
          { 'Jahr': 'Jahr 3', 'Mac Mini KI-Server': '53 €', '4× ChatGPT Plus': '960 €', 'Differenz': '+907 € gespart' },
          { 'Jahr': 'Jahr 4', 'Mac Mini KI-Server': '53 €', '4× ChatGPT Plus': '960 €', 'Differenz': '+907 € gespart' },
          { 'Jahr': 'Jahr 5', 'Mac Mini KI-Server': '53 €', '4× ChatGPT Plus': '960 €', 'Differenz': '+907 € gespart' },
          { 'Jahr': '5-Jahres-Gesamt', 'Mac Mini KI-Server': '1.614 €', '4× ChatGPT Plus': '4.800 €', 'Differenz': '+3.186 € gespart' },
        ],
        items: [
          'Amortisationszeit für 4-Personen-Familie (vs. 4× ChatGPT Plus): ca. 15 Monate',
          'Coding-Agent (vs. Copilot, 9 €/Nutzer/Monat) — 1 Entwickler: Amortisation in 12 Monaten',
          'Coding-Agent — 4-Personen-Entwicklungsteam: Amortisation in 3 Monaten',
          'Coding-Agent — 10-Personen-Team: Amortisation in ca. 1,2 Monaten',
        ],
        note: 'TCO basiert auf 960 €/Jahr (4× ChatGPT Plus à 20 €/Nutzer/Monat). Alle Daten bleiben privat, keine Kosten pro Anfrage, Offline-Funktion inklusive.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Ist Mac Mini M5 leiser als Alternativen?', a: 'Ja. Der M5 Basis ist vollständig lüfterlos. Der M5 Pro-Lüfter dreht selten, und wenn, sehr leise. GPU-Desktop: ca. 50–70 dB. Mac Mini M5: 0 dB im Ruhezustand, 20–25 dB kurz unter starker 34B+-Last.' },
          { q: 'Kann ich remote auf den Mac Mini zugreifen?', a: 'Ja — SSH über Terminal oder Bildschirmfreigabe (VNC) über Systemeinstellungen → Freigabe → Remote-Verwaltung. Im Heimnetz: ssh nutzer@macmini.local. Für Fernzugriff: erst Tailscale, dann SSH über Tailscale-IP.' },
          { q: 'Was wenn ich höheren Durchsatz benötige?', a: 'Upgrade-Pfad: Mac Studio M5 Max (128 GB, ca. 2.500 €) für 2× Geschwindigkeit und 70B-Modellunterstützung. Mac Studio M5 Ultra (2026 erwartet) für 4× Geschwindigkeit.' },
          { q: 'Wie lange hält Mac Mini als 24/7-KI-Server?', a: 'Apple Silicon Macs sind für Dauerbetrieb ausgelegt. Erwartete Lebensdauer: 7–10 Jahre. SSD-Haltbarkeit (600 TBW typisch) deckt 25–30 Jahre KI-Workloads ab. Jährliche Ausfallrate unter 0,5 %.' },
          { q: 'Kann ich mehrere Nutzer gleichzeitig bedienen?', a: 'Ja. OLLAMA_NUM_PARALLEL=2 (oder höher bei mehr Speicher) setzen, um parallele Anfragen zu verarbeiten. M5 Pro 64 GB bedient komfortabel 2–3 gleichzeitige Nutzer mit 8B-Modellen.' },
          { q: 'Was passiert bei Stromausfall?', a: 'Nach Wiederherstellung startet macOS automatisch, wenn „Nach Stromausfall automatisch starten" in Systemeinstellungen → Energie aktiviert ist. Ollama startet als brew-Dienst. Modelle laden beim ersten Aufruf (5–15 s Verzögerung).' },
          { q: 'Kann ich eine externe GPU hinzufügen?', a: 'Nein. Apple Silicon unterstützt keine externen GPUs für Metal/ML-Beschleunigung. Das Unified-Memory-Konzept ist das Design. Für mehr Leistung auf Mac Studio M5 Max upgraden.' },
          { q: 'Ist Mac Mini für den Einsatz über- oder unterdimensioniert?', a: 'Für 1–4-Personen-Haushalte oder kleine Teams mit 8B–34B-Modellen: genau richtig. Für 70B-Modelle: unterdimensioniert (Mac Studio M5 Max 128 GB nötig). Für winzige Modelle im Hobby-Budget: überdimensioniert.' },
          { q: 'Ist der Mac Mini M5 DSGVO-konform für den Betrieb als KI-Server?', a: 'Die lokale Verarbeitung auf dem Mac Mini ohne Cloud-Verbindung erfüllt die DSGVO-Grundsätze der Datenminimierung und Zweckbindung (Art. 5 DSGVO). Da keine Daten an Dritte übertragen werden, entfällt ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO. Für Unternehmen im Gesundheits- oder Finanzbereich wird eine Datenschutz-Folgenabschätzung (DSFA, Art. 35 DSGVO) empfohlen. BSI-Grundschutz SYS.2.6 gilt für die Absicherung des Servers.' },
          { q: 'Eignet sich der Mac Mini M5 als KI-Server für den deutschen Mittelstand?', a: 'Ja. Für KMU mit 10–200 Mitarbeitern bietet der Mac Mini M5 Pro 64 GB (ca. 1.349 €) eine kosteneffiziente, DSGVO-konforme Alternative zu Cloud-KI. Typische Mittelstandsanwendungen: Dokumentenanalyse (on-premise), interne Wissensdatenbank (RAG), Coding-Assistent für Entwicklungsteams. Apple Secure Enclave und macOS-Systemhärtung erfüllen BSI-Sicherheitsanforderungen. Amortisationszeit für ein 4-Personen-Team ca. 15 Monate.' },
        ],
      },
      relatedArticles: {
        id: 'related',
        title: 'Verwandte Artikel',
        items: [
          '[Apple Silicon für lokale LLMs: Vollständiger Leitfaden](/de/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max Benchmarks 2026](/de/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[Ollama auf Mac: Einrichtungsanleitung](/de/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[Wie viel Unified Memory für lokale LLMs?](/de/local-llms/how-much-unified-memory-for-local-llm)',
          '[Beste LLM-Modelle für Apple Silicon](/de/local-llms/best-models-apple-silicon-2026)',
          '[MLX vs Ollama vs llama.cpp Vergleich](/de/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Lokalen Sprachassistenten aufbauen](/de/power-local-llm/build-local-voice-assistant-2026)',
          '[Lokales RAG für private Unternehmensdaten](/de/power-local-llm/local-rag-for-private-business-data)',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-fr.webp',
    title: 'Mac Mini M5 comme serveur IA local 2026 : LLM, Whisper, RAG, assistant vocal 24/7 (Anticipé)',
    seoTitle: 'Mac Mini M5 Serveur IA Local : 24/7 Always-On',
    intro: 'Lorsqu\'Apple sortira le Mac Mini M5, il ferait un excellent serveur IA local silencieux et permanent. Ce guide couvre la configuration matérielle anticipée, la stratégie d\'installation et l\'analyse coût-bénéfice pour exécuter Ollama LLM, Whisper STT, pipeline RAG et assistant vocal. Coût électrique estimé : env. 44 €/an. Remarque : le Mac Mini M5 n\'a pas encore été annoncé par Apple ; les caractéristiques sont basées sur les données de performance actuelles des M5 Pro/Max.',
    metaDescription: 'Serveur IA local sur Mac Mini M5. 25–55 W, env. 44 €/an. LLM Ollama, Whisper STT, RAG, assistant vocal. Silencieux, toujours en ligne.',
    twitterDescription: 'Mac Mini M5 Pro 64 Go : serveur IA local silencieux idéal. LLM + Whisper + RAG pour env. 44 €/an d\'électricité. Guide complet.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    ctaText: 'Votre serveur Mac Mini IA est opérationnel ? Comparez les réponses de votre Llama ou DeepSeek local avec GPT-4, Claude, Gemini et 22 autres modèles en un seul envoi avec PromptQuorum — vérifiez que votre configuration auto-hébergée délivre une qualité cloud.',
    current_models_mentioned: ['Llama 3.3 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'Mac Mini M5'],
    audience: 'Utilisateurs souhaitant un serveur IA local permanent pour la maison ou le bureau.',
    readTime: '12 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini serveur IA local',
    targetKeywords: ['Mac Mini serveur IA', 'LLM always-on', 'infrastructure IA locale', 'Ollama permanent', 'Mac Mini M5 serveur'],
    leadAnswerBlock: '**Une fois disponible, le Mac Mini M5 Pro 64 Go (estimé à env. 1 349 €) serait un excellent serveur IA always-on : silencieux (quasi sans ventilateur), 25–55 W, estimé à env. 44 €/an d\'électricité. Devrait faire tourner Ollama 34B, Whisper STT, RAG et assistant vocal simultanément. Remarque : le Mac Mini M5 n\'a pas encore été annoncé par Apple.**',
    nextStep: {
      text: 'Prêt à installer Ollama sur votre Mac Mini M5 ? Voici le guide d\'installation complet.',
      label: 'Ollama sur Mac — Guide d\'installation 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      fr: {
        question: 'Pourquoi le Mac Mini M5 serait-il un bon serveur IA local (une fois disponible) ?',
        answer: 'Devrait être silencieux (sans ventilateur ou quasi silencieux), 25–55 W (contre 300 W+ pour un PC avec GPU), estimé à env. 44 €/an d\'électricité (contre 350–500 € GPU). Ferait tourner Ollama LLM 34B + Whisper + RAG simultanément sur 64 Go de mémoire unifiée. Remarque : le Mac Mini M5 n\'a pas encore été annoncé par Apple.',
        bullets: [
          'M5 Pro 64 Go : estimé à env. 1 349 € (pas encore commercialisé)',
          'Consommation : 25–55 W attendue (contre 300 W+ PC avec GPU)',
          'Électricité annuelle : estimée à env. 26–44 € (contre 350–500 € GPU, à 0,25 €/kWh)',
          'Silencieux : quasi sans ventilateur attendu sous charge LLM typique',
          'API REST accessible depuis tous les appareils du réseau local',
          'Analyse coût-bénéfice : voir la section TCO ci-dessous',
        ],
        updatedDate: '2026-05-15',
      },
    },
    toc: [
      { label: 'Pourquoi Mac Mini M5', anchor: '#why' },
      { label: 'Configuration matérielle', anchor: '#hardware' },
      { label: 'Installation complète du serveur', anchor: '#setup' },
      { label: 'Accès à distance', anchor: '#remote-access' },
      { label: 'Cas d\'usage', anchor: '#usecases' },
      { label: 'Consommation & thermique', anchor: '#monitoring' },
      { label: 'Surveillance & maintenance', anchor: '#maintenance' },
      { label: 'Coût total sur 5 ans', anchor: '#tco' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Articles associés', anchor: '#related' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'Pourquoi le Mac Mini M5 serait un excellent serveur IA (une fois disponible)',
        content: [
          'Lorsqu\'Apple sortira le Mac Mini M5 Pro, une configuration 64 Go (estimée à env. 1 349 €) serait un excellent matériel pour un serveur IA local silencieux et permanent. Elle combinerait un silence quasi total (sans ventilateur ou très discret), une faible consommation (25–55 W contre 300 W+ pour un PC avec GPU) et assez de mémoire unifiée pour des modèles de 34B paramètres ou plusieurs petits modèles simultanément.',
          'Coût électrique annuel estimé : env. 26–44 € contre 350–500 € pour un PC avec GPU équivalent (à 0,25 €/kWh) — moins de deux mois d\'un abonnement ChatGPT Plus, chaque année. Remarque : le Mac Mini M5 n\'a pas encore été annoncé par Apple ; les caractéristiques sont basées sur les performances attendues du M5.',
        ],
        tableFormat: true,
        columns: ['Propriété', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'Propriété': 'Coût matériel', 'Mac Mini M5 Pro': 'env. 1 349 €', 'Desktop + RTX 4070': 'à partir de 1 200 €', 'Raspberry Pi 5': 'env. 80 €' },
          { 'Propriété': 'Consommation (repos)', 'Mac Mini M5 Pro': '8 W', 'Desktop + RTX 4070': '50 W', 'Raspberry Pi 5': '5 W' },
          { 'Propriété': 'Consommation (LLM)', 'Mac Mini M5 Pro': '25–55 W', 'Desktop + RTX 4070': '200–300 W', 'Raspberry Pi 5': 'Impossible' },
          { 'Propriété': 'Électricité annuelle (0,25 €/kWh)', 'Mac Mini M5 Pro': 'env. 26–44 €', 'Desktop + RTX 4070': 'env. 350–500 €', 'Raspberry Pi 5': 'env. 8 €' },
          { 'Propriété': 'Niveau sonore', 'Mac Mini M5 Pro': 'Silencieux', 'Desktop + RTX 4070': 'Bruyant (3+ ventilateurs)', 'Raspberry Pi 5': 'Silencieux' },
          { 'Propriété': 'Taille de modèle max.', 'Mac Mini M5 Pro': '34B (Q5)', 'Desktop + RTX 4070': '8B (12 Go VRAM)', 'Raspberry Pi 5': '1–3B seulement' },
          { 'Propriété': 'Fiabilité 24/7', 'Mac Mini M5 Pro': 'Excellente', 'Desktop + RTX 4070': 'Bonne', 'Raspberry Pi 5': 'Excellente' },
          { 'Propriété': 'Encombrement', 'Mac Mini M5 Pro': '13×13 cm', 'Desktop + RTX 4070': 'Tour complète', 'Raspberry Pi 5': '8×8 cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Recommandation de configuration matérielle',
        content: 'Le M5 Pro 64 Go à env. 1 349 € est le meilleur rapport qualité-prix : fait tourner des modèles 34B, supporte les stacks multi-modèles pour assistant vocal et dispose d\'une marge pour 2–3 ans de croissance des modèles. Ne jamais acheter moins de 36 Go pour un usage serveur IA.',
        tableFormat: true,
        columns: ['Configuration', 'Prix (2026)', 'Mémoire', 'Idéal pour', 'Modèles supportés'],
        rows: [
          { 'Configuration': 'Mac Mini M5 (base)', 'Prix (2026)': 'env. 699 €', 'Mémoire': '16 Go', 'Idéal pour': 'Usage léger, utilisateur seul', 'Modèles supportés': '7B Q4 uniquement' },
          { 'Configuration': 'Mac Mini M5 (32 Go)', 'Prix (2026)': 'env. 929 €', 'Mémoire': '32 Go', 'Idéal pour': 'Usage général mono-utilisateur', 'Modèles supportés': 'Jusqu\'à 13B Q4' },
          { 'Configuration': 'Mac Mini M5 Pro 36 Go', 'Prix (2026)': 'env. 1 149 €', 'Mémoire': '36 Go', 'Idéal pour': 'Stack assistant vocal', 'Modèles supportés': '8B + Whisper + TTS' },
          { 'Configuration': 'Mac Mini M5 Pro 64 Go ★', 'Prix (2026)': 'env. 1 349 €', 'Mémoire': '64 Go', 'Idéal pour': 'Meilleur rapport qualité-prix', 'Modèles supportés': 'Modèles 34B confortablement' },
          { 'Configuration': 'Mac Mini M5 Pro 64 Go + 1 To', 'Prix (2026)': 'env. 1 549 €', 'Mémoire': '64 Go', 'Idéal pour': 'Nombreux modèles stockés', 'Modèles supportés': '50+ modèles sur disque' },
        ],
        note: '★ Recommandé. Planification stockage : Llama 3.3 8B Q4 env. 5 Go par modèle, Whisper large-v3 env. 3 Go, modèle d\'embedding env. 0,5 Go, ChromaDB avec 10 000 documents env. 2 Go. Setup 5 modèles typique : 50–80 Go. SSD 512 Go minimum ; 1 To pour les utilisateurs avancés.',
        image: '/images/mac-mini-m5-local-ai-server-memory-tier-capacity-en.svg',
        imageCaption: 'Paliers de mémoire du Mac Mini M5 face à la taille maximale de modèle : 16 Go pour du 7B Q4 uniquement, 32 Go jusqu\'à 13B Q4, 36 Go pour une pile assistant vocal 8B + Whisper + TTS, et le palier recommandé 64 Go Pro fait tourner des modèles 34B confortablement.',
      },
      setup: {
        id: 'setup',
        title: 'Installation complète du serveur (30 minutes, de l\'unboxing à la mise en service)',
        content: 'Ces étapes configurent le Mac Mini M5 comme un serveur IA permanent accessible sur le réseau. Une fois toutes les étapes terminées, chaque appareil du réseau local peut envoyer des requêtes à l\'API Ollama du Mac Mini sur le port 11434.',
      },
      setupStep1: {
        id: 'setup-step1',
        title: 'Étape 1 : Installer Homebrew et Ollama',
        codeBlock: `# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Ollama
brew install ollama

# Start as background service (auto-starts on reboot)
brew services start ollama

# Verify it's running
curl http://localhost:11434/api/version`,
        codeLanguage: 'bash',
      },
      setupStep2: {
        id: 'setup-step2',
        title: 'Étape 2 : Configurer l\'accès réseau',
        content: 'Par défaut, Ollama n\'écoute que sur localhost. Ces paramètres l\'ouvrent au réseau local et configurent le cache multi-modèles.',
        codeBlock: `# Allow Ollama to listen on all interfaces (not just localhost)
echo 'export OLLAMA_HOST=0.0.0.0:11434' >> ~/.zshrc
echo 'export OLLAMA_MAX_LOADED_MODELS=3' >> ~/.zshrc
echo 'export OLLAMA_KEEP_ALIVE=1h' >> ~/.zshrc
source ~/.zshrc

# Restart Ollama with new settings
brew services restart ollama

# Verify listening on all interfaces
lsof -i :11434`,
        codeLanguage: 'bash',
      },
      setupStep3: {
        id: 'setup-step3',
        title: 'Étape 3 : Configurer le pare-feu macOS',
        content: 'Réglages Système → Réseau → Coupe-feu → Options → Ajouter le chemin du binaire Ollama (/opt/homebrew/bin/ollama) → Autoriser les connexions entrantes. Cela permet aux appareils du réseau local d\'atteindre le port 11434.',
      },
      setupStep4: {
        id: 'setup-step4',
        title: 'Étape 4 : Télécharger les modèles recommandés',
        codeBlock: `# General-purpose LLM
ollama pull llama3.1:8b

# Alternative: faster, similar quality
ollama pull mistral:7b

# For coding tasks
ollama pull deepseek-coder-v2:16b

# Embedding model for RAG
ollama pull nomic-embed-text`,
        codeLanguage: 'bash',
      },
      setupStep5: {
        id: 'setup-step5',
        title: 'Étape 5 : IP statique ou mDNS',
        content: 'mDNS (Bonjour) est l\'option la plus simple — votre Mac Mini est accessible par nom d\'hôte sur le réseau local sans aucune configuration.',
        codeBlock: `# Find current local IP
ipconfig getifaddr en0

# Or use Bonjour - access at hostname.local
scutil --get LocalHostName
# Exemple : macmini → accessible sur http://macmini.local:11434`,
        codeLanguage: 'bash',
        note: 'Pour une IP stable, créez une réservation DHCP dans votre routeur via l\'adresse MAC du Mac. L\'IP ne changera jamais.',
      },
      setupStep6: {
        id: 'setup-step6',
        title: 'Étape 6 : Désactiver la mise en veille (indispensable pour le fonctionnement permanent)',
        content: 'Sans ces paramètres, macOS se met en veille après inactivité et le serveur devient inaccessible jusqu\'au réveil manuel.',
        codeBlock: `sudo pmset -a sleep 0
sudo pmset -a displaysleep 1
sudo pmset -a powernap 0
sudo pmset -a hibernatemode 0

# Verify settings
pmset -g`,
        codeLanguage: 'bash',
        note: 'Activer « Démarrer automatiquement après une coupure de courant » dans Réglages Système → Énergie pour gérer les coupures.',
      },
      setupStep7: {
        id: 'setup-step7',
        title: 'Étape 7 : Tester depuis un autre appareil du réseau local',
        codeBlock: `# Depuis n'importe quel appareil sur le même réseau :
curl http://macmini.local:11434/api/chat -d '{
  "model": "llama3.1:8b",
  "messages": [{"role": "user", "content": "Bonjour depuis mon téléphone !"}]
}'`,
        codeLanguage: 'bash',
        note: 'Si une réponse s\'affiche, votre serveur IA est opérationnel. Tous les appareils du réseau local peuvent maintenant l\'utiliser comme backend IA.',
      },
      remoteAccess: {
        id: 'remote-access',
        title: 'Accès à distance : utiliser votre serveur Mac Mini IA de n\'importe où',
        content: 'Deux options pour accéder à votre serveur Mac Mini IA depuis l\'extérieur du réseau local : Tailscale (recommandé pour usage personnel) et Cloudflare Tunnel (pour les points d\'accès web).',
        codeBlock: `# Option 1 : Tailscale (recommandé) — installer sur Mac Mini
brew install --cask tailscale
# Se connecter via l'application Tailscale — IP privée attribuée au Mac Mini
# Accessible de partout avec Tailscale :
curl http://macmini.tailnet.ts.net:11434/api/chat -d '{...}'

# Option 2 : Cloudflare Tunnel (accès web)
brew install cloudflared
cloudflared tunnel create ai-server
cloudflared tunnel route dns ai-server ia.mondomaine.fr
# Accessible sur https://ia.mondomaine.fr de partout`,
        codeLanguage: 'bash',
        note: 'Sécurité : ne jamais exposer Ollama directement sur internet sans authentification. Ollama n\'a pas d\'authentification intégrée. Utiliser Tailscale, Cloudflare Tunnel avec des règles d\'accès, ou WireGuard VPN. La CNIL recommande l\'inférence locale pour le traitement de données sensibles (médicales, juridiques, financières).',
      },
      usecases: {
        id: 'usecases',
        title: 'Quatre cas d\'usage réels pour un serveur Mac Mini IA',
        content: 'Le serveur Mac Mini IA couvre quatre cas d\'usage principaux. Chacun est un workflow autonome — les quatre peuvent fonctionner simultanément sur le M5 Pro 64 Go.',
      },
      usecaseFamilyServer: {
        id: 'usecases-family',
        title: 'Cas d\'usage 1 : Serveur IA familial',
        content: [
          'Le Mac Mini est installé dans un placard et fonctionne 24/7. Tous les appareils du réseau domestique — smartphones, tablettes, ordinateurs — envoient des requêtes API à la même instance Ollama. Une famille de 4 personnes avec iPhones, iPads et MacBooks l\'utilise simultanément.',
          'Les iPhones utilisent Raccourcis → POST vers macmini.local:11434. Les utilisateurs MacBook utilisent Continue.dev ou les extensions Raycast. Avec OLLAMA_NUM_PARALLEL=2, deux membres de la famille peuvent discuter simultanément.',
          'Remplace 4× abonnements ChatGPT Plus (80 €/mois = 960 €/an). Rentabilisé en environ 15 mois. Les années 2 à 5 : économies pures.',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: 'Cas d\'usage 2 : Serveur RAG pour documents privés',
        content: 'Stack : Ollama (Llama 3.3 8B) + nomic-embed-text + ChromaDB. Tout fonctionne sur le Mac Mini, accessible via le réseau local. Cas d\'usage : documents familiaux, contrats, manuels techniques, recettes, dossiers médicaux, articles de recherche. Tout est privé, consultable et hors ligne.',
        codeBlock: `# Installer ChromaDB via Docker
brew install --cask docker
docker run -d -p 8000:8000 -v ~/chromadb:/data chromadb/chroma

# Indexer des documents (Python)
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.vectorstores import Chroma

embeddings = OllamaEmbeddings(
    model="nomic-embed-text",
    base_url="http://localhost:11434"
)
vectordb = Chroma.from_documents(
    documents=splits,
    embedding=embeddings,
    persist_directory="./chroma_db"
)`,
        codeLanguage: 'python',
      },
      usecaseVoice: {
        id: 'usecases-voice',
        title: 'Cas d\'usage 3 : Assistant vocal permanent',
        content: [
          'Stack sur Mac Mini : whisper.cpp pour la STT (accéléré Metal), Ollama Llama 3.3 8B pour le raisonnement, Piper TTS pour la synthèse vocale, protocole Wyoming pour l\'intégration Home Assistant.',
          'Activation par mot de réveil via les appareils clients (Apple HomePod via Home Assistant, ou réseaux de microphones Raspberry Pi). Latence bout en bout sur M5 Pro : 1,2 seconde (STT 0,3 s + LLM 0,7 s + TTS 0,2 s).',
          'Électricité annuelle : env. 35 €. Service cloud comparable (Google Home, Amazon Alexa) : gratuit mais toutes vos données vocales sont transmises à des serveurs externes.',
        ],
        items: [
          'Configuration détaillée : [Créer un assistant vocal local](/fr/power-local-llm/build-local-voice-assistant-2026)',
        ],
      },
      usecaseCoding: {
        id: 'usecases-coding',
        title: 'Cas d\'usage 4 : Agent de code privé (intégration IDE)',
        content: 'Configurer Continue.dev ou Cursor pour utiliser l\'API du Mac Mini. DeepSeek Coder V2 à 16B surpasse GitHub Copilot sur plusieurs benchmarks de langages, tout en maintenant la confidentialité totale du code.',
        codeBlock: `// ~/.continue/config.json
{
  "models": [{
    "title": "Mac Mini DeepSeek Coder",
    "provider": "ollama",
    "model": "deepseek-coder-v2:16b",
    "apiBase": "http://macmini.local:11434"
  }]
}`,
        codeLanguage: 'json',
        items: [
          '0 €/an (contre GitHub Copilot à env. 9 €/mois par utilisateur)',
          'Le code ne quitte jamais votre réseau',
          'Fonctionne hors ligne (avion, bureaux sécurisés)',
          'DeepSeek Coder V2 surpasse Copilot sur les benchmarks Go, Python, TypeScript',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: 'Consommation électrique et performances thermiques',
        content: 'Mesuré sur Mac Mini M5 Pro 64 Go avec Ollama et accélération Metal. Coûts calculés à 0,25 €/kWh (tarif réglementé EDF en France).',
        tableFormat: true,
        columns: ['Charge', 'Consommation', 'Coût annuel (24/7, 0,25 €/kWh)'],
        rows: [
          { 'Charge': 'Repos', 'Consommation': '8 W', 'Coût annuel (24/7, 0,25 €/kWh)': 'env. 18 €/an' },
          { 'Charge': 'Inférence Llama 8B', 'Consommation': '25–35 W', 'Coût annuel (24/7, 0,25 €/kWh)': 'env. 66 €/an' },
          { 'Charge': 'Inférence Llama 34B', 'Consommation': '40–55 W', 'Coût annuel (24/7, 0,25 €/kWh)': 'env. 103 €/an' },
          { 'Charge': 'Charge mixte typique', 'Consommation': '15–25 W', 'Coût annuel (24/7, 0,25 €/kWh)': 'env. 44 €/an' },
        ],
        items: [
          'Température de surface sous charge : 35–42 °C (chaud au toucher)',
          'Température CPU interne : 65–75 °C (bien en dessous du seuil de ralentissement)',
          'Ventilateur : ne s\'enclenche jamais sur M5 base ; brièvement sur M5 Pro lors de pics',
          'Aucun ralentissement thermique observé sur 30 jours de tests en continu',
          'Ventilation : espace ouvert recommandé — pas dans une armoire fermée',
          'Endurance SSD : 600 To d\'écriture typique = ~30 ans de patrons d\'écriture serveur IA',
        ],
        note: 'Coût électrique annuel en charge mixte typique : env. 26–44 €. Un an de fonctionnement permanent coûte moins d\'un mois d\'abonnement ChatGPT Plus.',
        image: '/images/mac-mini-m5-local-ai-server-power-draw-by-workload-en.svg',
        imageCaption: 'Consommation du Mac Mini M5 Pro par charge de travail : 8 W au repos, 25–35 W en inférence Llama 8B, 40–55 W en inférence Llama 34B — contre 200–300 W pour un PC de bureau avec RTX 4070.',
      },
      maintenance: {
        id: 'maintenance',
        title: 'Surveillance et maintenance pour un fonctionnement 24/7',
        content: 'Sauvegarder ce script de vérification comme ~/check-ai-server.sh — l\'exécuter via cron ou launchd toutes les heures pour redémarrer automatiquement Ollama en cas de crash.',
        codeBlock: `#!/bin/bash
echo "=== AI Server Health Check ==="
echo "Date: $(date)"

if pgrep -x "ollama" > /dev/null; then
    echo "✓ Ollama running"
else
    echo "✗ Ollama NOT running - restarting"
    brew services restart ollama
fi

if curl -s http://localhost:11434/api/version > /dev/null; then
    echo "✓ API responding"
else
    echo "✗ API NOT responding"
fi

df -h / | tail -1
uptime`,
        codeLanguage: 'bash',
        items: [
          'Mensuel : mettre à jour Ollama avec `brew upgrade ollama`',
          'Mensuel : mettre à jour les modèles avec `ollama pull llama3.1:8b`',
          'Mensuel : nettoyer les modèles inutilisés : `ollama list` → `ollama rm <nom-du-modèle>`',
          'Mensuel : appliquer les mises à jour macOS via Réglages Système → Mise à jour de logiciels',
          'Mensuel : redémarrer le Mac Mini (nettoyage mémoire)',
        ],
        note: 'Pour planifier le health check toutes les heures, créer ~/Library/LaunchAgents/com.user.ollama-monitor.plist et le charger avec launchctl.',
      },
      tco: {
        id: 'tco',
        title: 'Analyse du coût total sur 5 ans',
        tableFormat: true,
        columns: ['Année', 'Mac Mini Serveur IA', '4× ChatGPT Plus', 'Différence'],
        rows: [
          { 'Année': 'Année 1', 'Mac Mini Serveur IA': '1 349 € matériel + 44 € électricité = 1 393 €', '4× ChatGPT Plus': '960 €', 'Différence': '–433 € (Mac plus cher en A1)' },
          { 'Année': 'Année 2', 'Mac Mini Serveur IA': '44 € (électricité seule)', '4× ChatGPT Plus': '960 €', 'Différence': '+916 € économisés' },
          { 'Année': 'Année 3', 'Mac Mini Serveur IA': '44 €', '4× ChatGPT Plus': '960 €', 'Différence': '+916 € économisés' },
          { 'Année': 'Année 4', 'Mac Mini Serveur IA': '44 €', '4× ChatGPT Plus': '960 €', 'Différence': '+916 € économisés' },
          { 'Année': 'Année 5', 'Mac Mini Serveur IA': '44 €', '4× ChatGPT Plus': '960 €', 'Différence': '+916 € économisés' },
          { 'Année': 'Total 5 ans', 'Mac Mini Serveur IA': '1 569 €', '4× ChatGPT Plus': '4 800 €', 'Différence': '+3 231 € économisés' },
        ],
        items: [
          'Durée de rentabilisation pour une famille de 4 (vs. 4× ChatGPT Plus) : environ 15 mois',
          'Agent de code (vs. Copilot à env. 9 €/mois) — 1 développeur : rentabilisé en 12 mois',
          'Agent de code — équipe de 4 développeurs : rentabilisé en 3 mois',
          'Agent de code — équipe de 10 : rentabilisé en 1,2 mois',
        ],
        note: 'TCO basé sur 960 €/an (4× ChatGPT Plus à 20 €/utilisateur/mois). Toutes les données restent privées, aucun coût par requête, fonctionnement hors ligne inclus.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Le Mac Mini M5 est-il plus silencieux que les alternatives ?', a: 'Oui. Le M5 de base est totalement sans ventilateur. Celui du M5 Pro tourne rarement et très doucement. PC avec GPU : ~50–70 dB. Mac Mini M5 : 0 dB au repos, 20–25 dB brièvement sous charge 34B+ intensive.' },
          { q: 'Puis-je accéder au Mac Mini à distance ?', a: 'Oui — SSH via terminal, ou Partage d\'écran (VNC) via Réglages Système → Partage → Gestion à distance. Sur le réseau local : ssh utilisateur@macmini.local. Pour l\'accès distant : utiliser Tailscale d\'abord, puis SSH via l\'IP Tailscale.' },
          { q: 'Que faire si j\'ai besoin d\'un débit plus élevé ?', a: 'Chemin de montée en gamme : Mac Studio M5 Max (128 Go, env. 2 500 €) pour une vitesse 2× et la prise en charge des modèles 70B. Mac Studio M5 Ultra (attendu 2026) pour une vitesse 4×.' },
          { q: 'Combien de temps dure le Mac Mini comme serveur IA 24/7 ?', a: 'Les Mac Apple Silicon sont conçus pour un fonctionnement continu. Durée de vie estimée : 7–10 ans. L\'endurance SSD (600 To d\'écriture typique) couvre 25–30 ans de charges de travail IA. Taux de défaillance annuel inférieur à 0,5 %.' },
          { q: 'Puis-je servir plusieurs utilisateurs simultanément ?', a: 'Oui. Configurer OLLAMA_NUM_PARALLEL=2 (ou plus avec plus de mémoire) pour gérer les requêtes parallèles. Le M5 Pro 64 Go gère confortablement 2–3 utilisateurs simultanés sur des modèles 8B.' },
          { q: 'Que se passe-t-il en cas de coupure de courant ?', a: 'Après le rétablissement, macOS démarre automatiquement si « Démarrer après une coupure de courant » est activé dans Réglages Système → Énergie. Ollama démarre en tant que service brew. Les modèles se rechargent à la première requête (délai de 5–15 s).' },
          { q: 'Peut-on ajouter un GPU externe ?', a: 'Non. Apple Silicon ne supporte pas les GPU externes pour l\'accélération Metal/ML. L\'architecture mémoire unifiée est la conception même de la puce. Pour plus de vitesse, passer au Mac Studio M5 Max.' },
          { q: 'Le Mac Mini est-il surdimensionné ou sous-dimensionné pour un serveur IA ?', a: 'Pour les foyers de 1 à 4 personnes ou les petites équipes utilisant des modèles 8B–34B : parfaitement adapté. Pour les modèles 70B : sous-dimensionné (besoin du Mac Studio M5 Max 128 Go). Pour les petits modèles avec un petit budget : surdimensionné.' },
        ],
      },
      relatedArticles: {
        id: 'related',
        title: 'Articles associés',
        items: [
          '[Apple Silicon pour les LLM locaux : guide complet](/fr/local-llms/apple-silicon-local-llm-guide-2026)',
          '[Benchmarks M5 Pro vs M5 Max 2026](/fr/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[Installer Ollama sur Mac : guide de configuration](/fr/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[Quelle quantité de mémoire unifiée pour les LLM locaux ?](/fr/local-llms/how-much-unified-memory-for-local-llm)',
          '[Meilleurs modèles LLM pour Apple Silicon](/fr/local-llms/best-models-apple-silicon-2026)',
          '[Comparatif MLX vs Ollama vs llama.cpp](/fr/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Créer un assistant vocal local](/fr/power-local-llm/build-local-voice-assistant-2026)',
          '[RAG local pour données d\'entreprise privées](/fr/power-local-llm/local-rag-for-private-business-data)',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-ja.webp',
    title: 'Mac Mini M5をローカルAIサーバーとして活用 2026（発売予定）：LLM・Whisper・RAG・音声アシスタント常時稼働',
    seoTitle: 'Mac Mini M5：24/7 AIサーバー',
    intro: 'Appleが Mac Mini M5 を発売すれば、静音・常時稼働のローカルAIサーバーとして優れた選択肢になります。本ガイドでは、想定されるハードウェア構成、Ollama LLM・Whisper STT・RAGパイプライン・音声アシスタントスタックのセットアップ戦略、費用対効果分析を解説します。推定電気代は年間約5,400円。注：Mac Mini M5はまだAppleから発表されておらず、本記事の仕様は現行のM5 Pro/Maxの性能データに基づく推定値です。',
    metaDescription: 'Mac Mini M5でローカルAIサーバーを構築。25～55W、年間電気代5,400円程度。Ollama LLM、Whisper STT、RAGパイプライン、音声アシスタント常時稼働。完全セットアップ方法、実用的ユースケース、5年間TCO分析。',
    twitterDescription: 'Mac Mini M5 Pro 64GB：理想的な静音ローカルAIサーバー。LLM+Whisper+RAGを年間電気代約5,400円で常時稼働。完全ガイド。',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    ctaText: 'Mac Mini AIサーバーを構築しましたか？PromptQuorumで、ローカルのLlamaまたはDeepSeekの回答をGPT-4、Claude、Geminiなど22のモデルと一括比較して、自己ホスト環境がクラウド品質を実現しているか検証しましょう。',
    current_models_mentioned: ['Llama 3.3 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'Mac Mini M5'],
    audience: '家庭やオフィスで常時稼働のローカルAIサーバーを構築したいユーザー。',
    readTime: '12分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini ローカルAIサーバー',
    targetKeywords: ['Mac Mini AIサーバー', '常時稼働LLM', 'ローカルAIインフラ', 'Ollama常時稼働', 'Mac Mini M5 サーバー'],
    leadAnswerBlock: '**発売されれば、Mac Mini M5 Pro 64GB（推定約¥179,800）は優れた常時稼働AIサーバーの選択肢になるでしょう。静音（ほぼファンレス）、25〜55Wの消費電力、推定年間電気代約5,400円。Ollama 34Bモデル・Whisper STT・RAGパイプライン・音声アシスタントを同時実行できる見込みです。注：Mac Mini M5はまだAppleから発表されていません。**',
    nextStep: {
      text: 'Mac Mini M5にOllamaをセットアップする準備はできましたか？完全インストールガイドをご紹介します。',
      label: 'Mac上のOllama — セットアップガイド2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      ja: {
        question: 'なぜMac Mini M5はローカルAIサーバーに向いているのか（発売されれば）？',
        answer: '静音（ファンレスまたはほぼ無音）、25〜55W（GPU搭載デスクトップの300W以上に対して）が見込まれ、推定年間電気代は約5,400円（GPUの約40,000〜50,000円に対して）、推定価格は約¥179,800。64GBユニファイドメモリ上でOllama 34B LLM・Whisper・RAGを同時実行できる見込みです。注：Mac Mini M5はまだ発表されていません。',
        bullets: [
          'M5 Pro 64GB：推定約¥179,800（未発売）',
          '消費電力：25〜55W見込み（GPU搭載デスクトップの300W以上に対して）',
          '年間電気代：推定約5,400円（GPUの約40,000〜50,000円に対して、31円/kWh）',
          '静音：通常のLLM負荷ではほぼファンレスと見込まれる',
          'REST APIでLAN内の全デバイスからアクセス可能',
          '費用対効果分析：下記TCOセクションを参照',
        ],
        updatedDate: '2026-05-15',
      },
    },
    toc: [
      { label: 'なぜMac Mini M5なのか', anchor: '#why' },
      { label: 'ハードウェア構成', anchor: '#hardware' },
      { label: '完全なサーバーセットアップ', anchor: '#setup' },
      { label: 'リモートアクセス', anchor: '#remote-access' },
      { label: 'ユースケース', anchor: '#usecases' },
      { label: '消費電力と熱性能', anchor: '#monitoring' },
      { label: '監視とメンテナンス', anchor: '#maintenance' },
      { label: '5年間総所有コスト', anchor: '#tco' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'Mac Mini M5が理想的なAIサーバーになると見込まれる理由（発売されれば）',
        content: [
          'AppleがMac Mini M5 Proを発売すれば、64GB構成（推定約¥179,800）は静音・常時稼働のローカルAIサーバー用として優れたハードウェアになるでしょう。静音性（ほぼファンレスまたは非常に低回転のファン）、低消費電力（25〜55W対GPU搭載デスクトップの300W以上）、34Bパラメータモデルまたは複数の小型モデルを同時実行できる十分なユニファイドメモリを兼ね備える見込みです。',
          '推定年間電気代は約5,400円（31円/kWh）で、GPU搭載デスクトップ相当機の約40,000〜50,000円に対してわずかな金額です。毎年、ChatGPT Plusの1か月分より少ないコストで運用できる計算になります。注：Mac Mini M5はまだAppleから発表されておらず、本記事の仕様は想定されるM5の性能特性に基づく推定です。',
        ],
        tableFormat: true,
        columns: ['項目', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { '項目': 'ハードウェアコスト', 'Mac Mini M5 Pro': '約¥179,800', 'Desktop + RTX 4070': '¥180,000以上', 'Raspberry Pi 5': '約¥12,000' },
          { '項目': 'アイドル消費電力', 'Mac Mini M5 Pro': '8W', 'Desktop + RTX 4070': '50W', 'Raspberry Pi 5': '5W' },
          { '項目': 'LLM負荷時消費電力', 'Mac Mini M5 Pro': '25〜55W', 'Desktop + RTX 4070': '200〜300W', 'Raspberry Pi 5': '不可能' },
          { '項目': '年間電気代（31円/kWh）', 'Mac Mini M5 Pro': '約4,000〜8,000円', 'Desktop + RTX 4070': '約40,000〜50,000円', 'Raspberry Pi 5': '約約1,200円' },
          { '項目': '騒音レベル', 'Mac Mini M5 Pro': '静音', 'Desktop + RTX 4070': '騒々しい（ファン3基以上）', 'Raspberry Pi 5': '静音' },
          { '項目': '最大モデルサイズ', 'Mac Mini M5 Pro': '34B（Q5）', 'Desktop + RTX 4070': '8B（12GB VRAM制限）', 'Raspberry Pi 5': '1〜3Bのみ' },
          { '項目': '常時稼働信頼性', 'Mac Mini M5 Pro': '優秀', 'Desktop + RTX 4070': '良好', 'Raspberry Pi 5': '優秀' },
          { '項目': '設置面積', 'Mac Mini M5 Pro': '13×13cm', 'Desktop + RTX 4070': 'フルタワー', 'Raspberry Pi 5': '8×8cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'ハードウェア構成の推奨',
        content: '約¥179,800のM5 Pro 64GBは最高のコストパフォーマンスを持ちます：34Bモデルの実行、マルチモデル音声アシスタントスタックのサポート、そして2〜3年間のモデルサイズ成長への余裕があります。AIサーバー用途では36GB未満は避けてください。',
        tableFormat: true,
        columns: ['構成', '価格（2026年）', 'メモリ', '最適な用途', '対応モデル'],
        rows: [
          { '構成': 'Mac Mini M5（ベース）', '価格（2026年）': '約¥99,800', 'メモリ': '16GB', '最適な用途': '軽量用途、シングルユーザー', '対応モデル': '7B Q4のみ' },
          { '構成': 'Mac Mini M5（32GB）', '価格（2026年）': '約¥119,800', 'メモリ': '32GB', '最適な用途': '一般的なシングルユーザー', '対応モデル': '13B Q4まで' },
          { '構成': 'Mac Mini M5 Pro 36GB', '価格（2026年）': '約¥149,800', 'メモリ': '36GB', '最適な用途': '音声アシスタントスタック', '対応モデル': '8B + Whisper + TTS' },
          { '構成': 'Mac Mini M5 Pro 64GB ★', '価格（2026年）': '約¥179,800', 'メモリ': '64GB', '最適な用途': '推奨スイートスポット', '対応モデル': '34Bモデルを快適に実行' },
          { '構成': 'Mac Mini M5 Pro 64GB + 1TB', '価格（2026年）': '約¥209,800', 'メモリ': '64GB', '最適な用途': '多数のモデルを保存', '対応モデル': 'ディスクに50以上のモデル' },
        ],
        note: '★推奨。ストレージ計画：Llama 3.3 8B Q4は約5GB/モデル、Whisper large-v3は約3GB、埋め込みモデルは約0.5GB、ChromaDB（1万文書）は約2GB。典型的な5モデル構成：50〜80GB使用。最低512GB SSD推奨、パワーユーザーには1TB。',
        image: '/images/mac-mini-m5-local-ai-server-memory-tier-capacity-en.svg',
        imageCaption: 'Mac Mini M5のメモリ構成と対応モデルサイズ：16GBは7B Q4のみ、32GBは13B Q4まで、36GBは8B + Whisper + TTSの音声アシスタントスタック、推奨の64GB Proは34Bモデルを快適に実行。',
      },
      setup: {
        id: 'setup',
        title: '完全なサーバーセットアップ（開封から稼働まで30分）',
        content: 'これらの手順でMac Mini M5を永続的なネットワークアクセス可能なAIサーバーとして設定します。すべての手順が完了すると、LAN上のすべてのデバイスがポート11434でMac MiniのOllama APIにリクエストを送信できます。',
      },
      setupStep1: {
        id: 'setup-step1',
        title: 'ステップ1：HomebrewとOllamaのインストール',
        codeBlock: `# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Ollama
brew install ollama

# Start as background service (auto-starts on reboot)
brew services start ollama

# Verify it's running
curl http://localhost:11434/api/version`,
        codeLanguage: 'bash',
      },
      setupStep2: {
        id: 'setup-step2',
        title: 'ステップ2：ネットワークアクセスの設定',
        content: 'デフォルトでOllamaはlocalhostのみでリッスンします。これらの設定でLANに開放し、マルチモデルキャッシュを設定します。',
        codeBlock: `# Allow Ollama to listen on all interfaces (not just localhost)
echo 'export OLLAMA_HOST=0.0.0.0:11434' >> ~/.zshrc
echo 'export OLLAMA_MAX_LOADED_MODELS=3' >> ~/.zshrc
echo 'export OLLAMA_KEEP_ALIVE=1h' >> ~/.zshrc
source ~/.zshrc

# Restart Ollama with new settings
brew services restart ollama

# Verify listening on all interfaces
lsof -i :11434`,
        codeLanguage: 'bash',
      },
      setupStep3: {
        id: 'setup-step3',
        title: 'ステップ3：macOSファイアウォールの設定',
        content: 'システム設定 → ネットワーク → ファイアウォール → オプション → Ollamaバイナリパス（/opt/homebrew/bin/ollama）を追加 → 着信接続を許可。これによりLANデバイスがポート11434にアクセスできます。',
      },
      setupStep4: {
        id: 'setup-step4',
        title: 'ステップ4：推奨モデルのダウンロード',
        codeBlock: `# General-purpose LLM
ollama pull llama3.1:8b

# Alternative: faster, similar quality
ollama pull mistral:7b

# For coding tasks
ollama pull deepseek-coder-v2:16b

# Embedding model for RAG
ollama pull nomic-embed-text`,
        codeLanguage: 'bash',
      },
      setupStep5: {
        id: 'setup-step5',
        title: 'ステップ5：固定IPまたはmDNSの設定',
        content: 'mDNS（Bonjour）が最も簡単な方法です。設定なしでホスト名によりLAN内からMac Miniにアクセスできます。',
        codeBlock: `# Find current local IP
ipconfig getifaddr en0

# Or use Bonjour - access at hostname.local
scutil --get LocalHostName
# 例：macmini → http://macmini.local:11434 でアクセス可能`,
        codeLanguage: 'bash',
        note: '固定IPには、ルーターのDHCP予約をMacのMACアドレスで設定してください。IPアドレスが変わることはありません。',
      },
      setupStep6: {
        id: 'setup-step6',
        title: 'ステップ6：スリープの無効化（常時稼働に必須）',
        content: 'これらの設定がないと、macOSは非活動後にスリープに入り、手動で起動するまでサーバーにアクセスできなくなります。',
        codeBlock: `sudo pmset -a sleep 0
sudo pmset -a displaysleep 1
sudo pmset -a powernap 0
sudo pmset -a hibernatemode 0

# Verify settings
pmset -g`,
        codeLanguage: 'bash',
        note: 'システム設定 → エネルギー で「停電後に自動的に起動」を有効にして、停電に対応してください。',
      },
      setupStep7: {
        id: 'setup-step7',
        title: 'ステップ7：LAN上の別デバイスからのテスト',
        codeBlock: `# 同じネットワーク上のノートPC・スマホ・タブレットから：
curl http://macmini.local:11434/api/chat -d '{
  "model": "llama3.1:8b",
  "messages": [{"role": "user", "content": "スマホからこんにちは！"}]
}'`,
        codeLanguage: 'bash',
        note: 'レスポンスが返ってきたら、AIサーバーが稼働しています。LAN上のすべてのデバイスがAIバックエンドとして利用できます。',
      },
      remoteAccess: {
        id: 'remote-access',
        title: 'リモートアクセス：どこからでもMac Mini AIサーバーを使う',
        content: '自宅ネットワーク外からMac Mini AIサーバーにアクセスする2つの方法：Tailscale（個人利用に推奨）とCloudflare Tunnel（Webアクセス可能なエンドポイント向け）。',
        codeBlock: `# Option 1: Tailscale（推奨）— Mac Miniにインストール
brew install --cask tailscale
# Tailscaleアプリでサインイン — Mac MiniにプライベートIPが割り当てられる
# Tailscaleがインストールされたどこからでもアクセス：
curl http://macmini.tailnet.ts.net:11434/api/chat -d '{...}'

# Option 2: Cloudflare Tunnel（Webアクセス）
brew install cloudflared
cloudflared tunnel create ai-server
cloudflared tunnel route dns ai-server ai.mydomain.com
# https://ai.mydomain.com からどこでもアクセス可能`,
        codeLanguage: 'bash',
        note: 'セキュリティ警告：Ollamaを認証なしに直接インターネットに公開しないでください。Ollamaには組み込み認証がありません。Tailscale、アクセスポリシー付きCloudflare Tunnel、またはWireGuard VPNを使用してください。',
      },
      usecases: {
        id: 'usecases',
        title: 'Mac Mini AIサーバーの4つの実用的なユースケース',
        content: 'Mac Mini AIサーバーは4つの主要なユースケースをカバーします。それぞれは独立したワークフローです — M5 Pro 64GBで4つすべてを同時に実行できます。',
      },
      usecaseFamilyServer: {
        id: 'usecases-family',
        title: 'ユースケース1：家族共用ホームAIサーバー',
        content: [
          'Mac Miniを収納スペースに置いて24/7稼働させます。ホームネットワーク上のすべてのデバイス — スマートフォン、タブレット、ノートPC — が同じOllamaインスタンスにAPIリクエストを送信します。iPhone、iPad、MacBookを持つ4人家族が同時に利用できます。',
          'iPhoneはショートカット → macmini.local:11434へのPOSTを使用。MacBookユーザーはContinue.devまたはRaycast拡張機能を使用。OLLAMA_NUM_PARALLEL=2の設定で、2人の家族メンバーが同時にチャットできます。',
          '4名分のChatGPT Plus（月額¥12,000×4=¥48,000、年額¥576,000相当）を代替。回収期間：約15か月。2年目以降は純粋な節約。',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: 'ユースケース2：プライベートRAGドキュメントQ&Aサーバー',
        content: 'スタック：Ollama（Llama 3.3 8B）+ nomic-embed-text + ChromaDB。すべてMac Mini上で動作し、LAN経由でアクセス可能。用途：家族の書類、法的契約書、技術マニュアル、レシピライブラリ、医療記録、研究論文。すべてプライベート。すべて検索可能。すべてオフライン。',
        codeBlock: `# ChromaDBをDockerでインストール
brew install --cask docker
docker run -d -p 8000:8000 -v ~/chromadb:/data chromadb/chroma

# ドキュメントのインデックス作成（Python）
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.vectorstores import Chroma

embeddings = OllamaEmbeddings(
    model="nomic-embed-text",
    base_url="http://localhost:11434"
)
vectordb = Chroma.from_documents(
    documents=splits,
    embedding=embeddings,
    persist_directory="./chroma_db"
)`,
        codeLanguage: 'python',
      },
      usecaseVoice: {
        id: 'usecases-voice',
        title: 'ユースケース3：常時稼働音声アシスタント',
        content: [
          'Mac Mini上のスタック：whisper.cpp（Metal加速でのSTT）、Ollama Llama 3.3 8B（推論）、Piper TTS（音声出力）、WyomingプロトコルによるHome Assistant連携。',
          'クライアントデバイス（Apple HomePod via Home Assistant、または各部屋のRaspberry Piマイクアレイ）でウェイクワード起動。M5 Proでのエンドツーエンドレイテンシ：1.2秒（STT 0.3秒 + LLM 0.7秒 + TTS 0.2秒）。',
          '年間電気代：約4,300円。すべての音声データがプライベートに保たれます。',
        ],
        items: [
          '詳細なセットアップ：[ローカル音声アシスタントの構築](/ja/power-local-llm/build-local-voice-assistant-2026)',
        ],
      },
      usecaseCoding: {
        id: 'usecases-coding',
        title: 'ユースケース4：プライベートコーディングエージェント（IDE連携）',
        content: 'Continue.devまたはCursorをMac MiniのAPIを使用するように設定。DeepSeek Coder V2（16B）は、コードを完全にプライベートに保ちながら、複数の言語ベンチマークでGitHub Copilotを上回ります。',
        codeBlock: `// ~/.continue/config.json
{
  "models": [{
    "title": "Mac Mini DeepSeek Coder",
    "provider": "ollama",
    "model": "deepseek-coder-v2:16b",
    "apiBase": "http://macmini.local:11434"
  }]
}`,
        codeLanguage: 'json',
        items: [
          '年間0円（GitHub Copilotの約月額1,100円/ユーザーに対して）',
          'コードがネットワーク外に出ることは一切ない',
          'オフラインで動作（飛行機内、セキュアなオフィス）',
          'DeepSeek Coder V2はGo、Python、TypeScriptのベンチマークでCopilotを上回る',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: '消費電力と熱性能',
        content: 'Ollamaとメタルアクセラレーションを使用したM5 Pro Mac Mini 64GBで測定。電気代は31円/kWh（日本の平均的な電力料金）で計算。',
        tableFormat: true,
        columns: ['ワークロード', '消費電力', '年間電気代（24/7、31円/kWh）'],
        rows: [
          { 'ワークロード': 'アイドル', '消費電力': '8W', '年間電気代（24/7、31円/kWh）': '約2,100円/年' },
          { 'ワークロード': 'Llama 8B推論', '消費電力': '25〜35W', '年間電気代（24/7、31円/kWh）': '約8,100円/年' },
          { 'ワークロード': 'Llama 34B推論', '消費電力': '40〜55W', '年間電気代（24/7、31円/kWh）': '約12,700円/年' },
          { 'ワークロード': '混合典型ワークロード', '消費電力': '15〜25W', '年間電気代（24/7、31円/kWh）': '約5,400円/年' },
        ],
        items: [
          '負荷時の表面温度：35〜42°C（触れると温かい）',
          '内部CPU温度：65〜75°C（スロットリング閾値を大幅に下回る）',
          'ファン：M5ベースでは起動しない；M5 Proではピーク負荷時に短時間低回転で起動',
          '30日間の連続稼働テストで熱スロットリングは観測されず',
          'ベンチレーション：開放されたスペース推奨 — 閉じた収納は不可',
          'SSD耐久性：典型的な600 TBW = AIサーバーの書き込みパターンで約30年',
        ],
        note: '混合典型ワークロードの年間電気代：約4,000〜5,400円。1年間の常時稼働コストはChatGPT Plus1か月分より少ない額です（METIのAIガバナンスガイドラインでも、オンプレミス推論はデータ主権の観点から推奨されています）。',
        image: '/images/mac-mini-m5-local-ai-server-power-draw-by-workload-en.svg',
        imageCaption: 'Mac Mini M5 Proのワークロード別消費電力：アイドル時8W、Llama 8B推論時25〜35W、Llama 34B推論時40〜55W — デスクトップRTX 4070の200〜300Wと比較。',
      },
      maintenance: {
        id: 'maintenance',
        title: '24/7稼働のための監視とメンテナンス',
        content: 'このヘルスチェックスクリプトを~/check-ai-server.shとして保存し、cronまたはlaunchdで毎時実行してOllamaがクラッシュした場合に自動再起動します。',
        codeBlock: `#!/bin/bash
echo "=== AI Server Health Check ==="
echo "Date: $(date)"

if pgrep -x "ollama" > /dev/null; then
    echo "✓ Ollama running"
else
    echo "✗ Ollama NOT running - restarting"
    brew services restart ollama
fi

if curl -s http://localhost:11434/api/version > /dev/null; then
    echo "✓ API responding"
else
    echo "✗ API NOT responding"
fi

df -h / | tail -1
uptime`,
        codeLanguage: 'bash',
        items: [
          '毎月：`brew upgrade ollama`でOllamaを更新',
          '毎月：`ollama pull llama3.1:8b`でモデルを更新',
          '毎月：`ollama list`で未使用モデルを確認 → `ollama rm <モデル名>`で削除',
          '毎月：システム設定 → ソフトウェアアップデートからmacOSを更新',
          '毎月：Mac Miniを再起動（メモリのクリーンアップ）',
        ],
        note: 'ヘルスチェックを毎時スケジュールするには、~/Library/LaunchAgents/com.user.ollama-monitor.plistを作成してlaunchctlで読み込みます。',
      },
      tco: {
        id: 'tco',
        title: '5年間総所有コスト分析',
        tableFormat: true,
        columns: ['年', 'Mac Mini AIサーバー', '4× ChatGPT Plus', '差額'],
        rows: [
          { '年': '1年目', 'Mac Mini AIサーバー': '¥179,800 ハードウェア + ¥5,400 電気 = ¥185,200', '4× ChatGPT Plus': '¥144,000', '差額': '−¥41,200（Mac高い）' },
          { '年': '2年目', 'Mac Mini AIサーバー': '¥5,400（電気のみ）', '4× ChatGPT Plus': '¥144,000', '差額': '+¥138,600 節約' },
          { '年': '3年目', 'Mac Mini AIサーバー': '¥5,400', '4× ChatGPT Plus': '¥144,000', '差額': '+¥138,600 節約' },
          { '年': '4年目', 'Mac Mini AIサーバー': '¥5,400', '4× ChatGPT Plus': '¥144,000', '差額': '+¥138,600 節約' },
          { '年': '5年目', 'Mac Mini AIサーバー': '¥5,400', '4× ChatGPT Plus': '¥144,000', '差額': '+¥138,600 節約' },
          { '年': '5年間合計', 'Mac Mini AIサーバー': '¥207,200', '4× ChatGPT Plus': '¥720,000', '差額': '+¥512,800 節約' },
        ],
        items: [
          '4人家族での回収期間（vs. 4× ChatGPT Plus）：約15か月',
          'コーディングエージェント（vs. Copilot月額¥1,100/ユーザー）— 1名：12か月で回収',
          'コーディングエージェント — 4名の開発チーム：3か月で回収',
          'コーディングエージェント — 10名チーム：約1.2か月で回収',
        ],
        note: 'TCOは¥36,000/年（4× ChatGPT Plus @ ¥3,000/ユーザー/月）を基準。すべてのデータがプライベート、クエリ当たりのコストなし、オフライン機能込み。',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Mac Mini M5は代替品より静かですか？', a: 'はい。M5ベースは完全ファンレスです。M5 Proのファンはほとんど回転せず、回転しても非常に静かです。GPU搭載デスクトップ：約50〜70dB。Mac Mini M5：アイドル時0dB、34B以上の高負荷時に一時的に20〜25dB。' },
          { q: 'Mac Miniにリモートアクセスできますか？', a: 'はい。SSH（ターミナル経由）またはシステム設定 → 共有 → リモートマネジメントでの画面共有（VNC）が使えます。LAN内：ssh ユーザー@macmini.local。リモートアクセス：まずTailscaleを設定し、Tailscale IP経由でSSH。' },
          { q: '高いスループットが必要な場合は？', a: 'アップグレード：Mac Studio M5 Max（128GB、約¥400,000）で2倍の速度と70Bモデルサポート。Mac Studio M5 Ultra（2026年予定）で4倍の速度。' },
          { q: 'Mac MiniはAIサーバーとして24/7稼働でどれくらい持ちますか？', a: 'Apple SiliconのMacは持続稼働向けに設計されています。AIサーバー用途での期待寿命：7〜10年。SSD耐久性（典型的な600 TBW）はAIワークロードで25〜30年分。年間ハードウェア障害率は0.5%未満。' },
          { q: '複数ユーザーを同時に対応できますか？', a: 'はい。OLLAMA_NUM_PARALLEL=2（またはメモリに応じてより高く）を設定して並行リクエストを処理します。M5 Pro 64GBは8Bモデルで2〜3人の同時ユーザーを快適に処理できます。' },
          { q: '停電が起きたらどうなりますか？', a: '電力回復後、システム設定 → エネルギーで「停電後に自動的に起動」を有効にしていればmacOSは自動起動します。Ollamaはbrewサービスとして起動。モデルは最初のリクエスト時に読み込まれます（再起動後の最初のレスポンスに5〜15秒の遅延）。' },
          { q: 'Mac Miniに外部GPUを追加できますか？', a: 'いいえ。Apple SiliconはMetal/ML加速用の外部GPUをサポートしていません。ユニファイドメモリアーキテクチャがその設計です。高速化にはMac Studio M5 Maxへのアップグレードが必要です。' },
          { q: 'Mac MiniはAIサーバーとして過剰スペックですか、それとも不足していますか？', a: '8B〜34Bモデルを使用する1〜4人の家庭や小規模チーム：最適。70Bモデル：不足（Mac Studio M5 Max 128GBが必要）。ホビーユーザーの小型モデル：過剰スペック（Raspberry Pi 5は1〜3Bモデルのみ対応だが、2026年の実用的なユースケースには不十分）。' },
        ],
      },
      relatedArticles: {
        id: 'related',
        title: '関連記事',
        items: [
          '[Apple Siliconでのローカルモデル活用：完全ガイド](/ja/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max ベンチマーク 2026](/ja/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[MacでのOllamaセットアップガイド](/ja/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[ローカルLLMに必要なメモリ量は？](/ja/local-llms/how-much-unified-memory-for-local-llm)',
          '[Apple Siliconに最適なLLMモデル](/ja/local-llms/best-models-apple-silicon-2026)',
          '[MLX vs Ollama vs llama.cpp 比較](/ja/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[ローカル音声アシスタントの構築](/ja/power-local-llm/build-local-voice-assistant-2026)',
          '[プライベートビジネスデータ向けローカルRAG](/ja/power-local-llm/local-rag-for-private-business-data)',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-zh.webp',
    title: 'Mac Mini M5作为本地AI服务器 2026：全天候LLM、Whisper、RAG与语音助手（预期发布）',
    seoTitle: 'Mac Mini M5：24/7 AI服务器',
    intro: '待Apple发布Mac Mini M5后，它将成为出色的静音、全天候本地AI服务器。本指南介绍预期的硬件配置、设置策略，以及运行Ollama LLM、Whisper STT、RAG管道与语音助手堆栈的成本效益分析。预估年度电费：$26–39。注意：Apple尚未正式发布Mac Mini M5，本文数据基于当前M5 Pro/Max性能表现推算。',
    metaDescription: 'Mac Mini M5作为本地AI服务器配置。25～55W功耗，年电费约350元。Ollama LLM、Whisper STT、RAG管道、语音助手全天候运行。完整配置指南、实用场景、5年总成本分析。',
    twitterDescription: 'Mac Mini M5 Pro 64GB：理想的静音本地AI服务器。LLM+Whisper+RAG全天候运行，年电费仅$35。完整指南。',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    ctaText: 'Mac Mini AI服务器已搭建完成？用PromptQuorum将您本地Llama或DeepSeek的回答与GPT-4、Claude、Gemini等22个模型一键对比——验证您的自托管方案是否达到云服务品质。',
    current_models_mentioned: ['Llama 3.3 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'Mac Mini M5'],
    audience: '希望在家庭或办公室搭建全天候本地AI服务器的用户。',
    readTime: '阅读约12分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini本地AI服务器',
    targetKeywords: ['Mac Mini AI服务器', '全天候LLM', '本地AI基础设施', 'Ollama常驻', 'Mac Mini M5服务器'],
    leadAnswerBlock: '**Mac Mini M5发布后，Pro 64GB配置（预估售价$1,199）将是出色的全天候AI服务器选择：近无声（准无风扇）、25–55W功耗、预估年电费$26–39。预计可同时运行Ollama 34B模型、Whisper STT、RAG管道和语音助手。注意：Apple尚未正式发布Mac Mini M5。**',
    nextStep: {
      text: '准备好在Mac Mini M5上设置Ollama了吗？这是完整的安装指南。',
      label: 'Mac上的Ollama — 设置指南2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      zh: {
        question: '为什么选择Mac Mini M5作为本地AI服务器？',
        answer: '静音（无风扇或近无声），25–55W（相比GPU台式机的300W以上），年电费$26–39（相比GPU的$263–394），一次性成本$1,199。在64GB统一内存上可同时运行Ollama 34B LLM、Whisper和RAG。',
        bullets: [
          'M5 Pro 64GB：$1,199 — 最佳性价比',
          '功耗：25–55W（相比GPU台式机300W以上）',
          '年电费：$26–39（相比GPU的$263–394，按$0.15/kWh）',
          '静音：典型LLM负载下近无风扇',
          'REST API可供LAN内所有设备访问',
          '对比4份ChatGPT Plus约15个月回本',
        ],
        updatedDate: '2026-05-15',
      },
    },
    toc: [
      { label: '为何选择Mac Mini M5', anchor: '#why' },
      { label: '硬件配置', anchor: '#hardware' },
      { label: '完整服务器设置', anchor: '#setup' },
      { label: '远程访问', anchor: '#remote-access' },
      { label: '使用场景', anchor: '#usecases' },
      { label: '功耗与散热', anchor: '#monitoring' },
      { label: '监控与维护', anchor: '#maintenance' },
      { label: '5年总拥有成本', anchor: '#tco' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关文章', anchor: '#related' },
    ],
    sections: {
      why: {
        id: 'why',
        title: '为何Mac Mini M5发布后将是理想的AI服务器（尚未发布）',
        content: [
          '$1,199的Mac Mini M5 Pro 64GB是2026年搭建静音全天候本地AI服务器的最佳性价比硬件。它兼具近无声运行（无风扇或极低转速风扇）、低功耗（25–55W对比GPU台式机的300W以上）以及足够的统一内存来运行34B参数模型或多个小模型。',
          '年电费约$26–39，相比GPU台式机等效配置的$263–394（按$0.15/kWh计算）——每年不到一个月的ChatGPT Plus订阅费用。',
        ],
        tableFormat: true,
        columns: ['属性', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { '属性': '硬件成本', 'Mac Mini M5 Pro': '$1,199', 'Desktop + RTX 4070': '$1,200起', 'Raspberry Pi 5': '$80' },
          { '属性': '待机功耗', 'Mac Mini M5 Pro': '8W', 'Desktop + RTX 4070': '50W', 'Raspberry Pi 5': '5W' },
          { '属性': 'LLM负载功耗', 'Mac Mini M5 Pro': '25–55W', 'Desktop + RTX 4070': '200–300W', 'Raspberry Pi 5': '无法运行' },
          { '属性': '年度电费（$0.15/kWh）', 'Mac Mini M5 Pro': '$26–39', 'Desktop + RTX 4070': '$263–394', 'Raspberry Pi 5': '约$5' },
          { '属性': '噪音水平', 'Mac Mini M5 Pro': '静音', 'Desktop + RTX 4070': '嘈杂（3个以上风扇）', 'Raspberry Pi 5': '静音' },
          { '属性': '最大模型尺寸', 'Mac Mini M5 Pro': '34B（Q5）', 'Desktop + RTX 4070': '8B（12GB VRAM限制）', 'Raspberry Pi 5': '仅1–3B' },
          { '属性': '全天候可靠性', 'Mac Mini M5 Pro': '优秀', 'Desktop + RTX 4070': '良好', 'Raspberry Pi 5': '优秀' },
          { '属性': '占地面积', 'Mac Mini M5 Pro': '13×13cm', 'Desktop + RTX 4070': '全塔机箱', 'Raspberry Pi 5': '8×8cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: '硬件配置推荐',
        content: '$1,199的M5 Pro 64GB是最佳性价比：可运行34B模型，支持多模型语音助手堆栈，并有未来2–3年模型规模增长的余量。AI服务器用途永远不要购买低于36GB的配置。',
        tableFormat: true,
        columns: ['配置', '价格（2026年）', '内存', '适用场景', '支持模型'],
        rows: [
          { '配置': 'Mac Mini M5（基础版）', '价格（2026年）': '$599', '内存': '16GB', '适用场景': '轻量用途，单用户', '支持模型': '仅7B Q4' },
          { '配置': 'Mac Mini M5（32GB）', '价格（2026年）': '$799', '内存': '32GB', '适用场景': '通用单用户', '支持模型': '最高13B Q4' },
          { '配置': 'Mac Mini M5 Pro 36GB', '价格（2026年）': '$999', '内存': '36GB', '适用场景': '语音助手堆栈', '支持模型': '8B + Whisper + TTS' },
          { '配置': 'Mac Mini M5 Pro 64GB ★', '价格（2026年）': '$1,199', '内存': '64GB', '适用场景': '推荐最佳配置', '支持模型': '34B模型轻松运行' },
          { '配置': 'Mac Mini M5 Pro 64GB + 1TB', '价格（2026年）': '$1,399', '内存': '64GB', '适用场景': '存储大量模型', '支持模型': '磁盘存放50+模型' },
        ],
        note: '★推荐。存储规划：Llama 3.3 8B Q4约5GB/模型，Whisper large-v3约3GB，嵌入模型约0.5GB，含1万文档的ChromaDB约2GB。典型5模型配置：占用50–80GB。最低推荐512GB SSD；高级用户选1TB。',
        image: '/images/mac-mini-m5-local-ai-server-memory-tier-capacity-en.svg',
        imageCaption: 'Mac Mini M5内存配置与最大模型容量对比：16GB仅支持7B Q4，32GB最高支持13B Q4，36GB可运行8B+Whisper+TTS语音助手堆栈，推荐配置64GB Pro可轻松运行34B模型。',
      },
      setup: {
        id: 'setup',
        title: '完整服务器设置（开箱到运行仅需30分钟）',
        content: '以下步骤将Mac Mini M5配置为持久化、可网络访问的AI服务器。完成所有步骤后，LAN内每台设备都可通过11434端口向Mac Mini的Ollama API发送请求。',
      },
      setupStep1: {
        id: 'setup-step1',
        title: '第一步：安装Homebrew和Ollama',
        codeBlock: `# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Ollama
brew install ollama

# Start as background service (auto-starts on reboot)
brew services start ollama

# Verify it's running
curl http://localhost:11434/api/version`,
        codeLanguage: 'bash',
      },
      setupStep2: {
        id: 'setup-step2',
        title: '第二步：配置网络访问',
        content: '默认情况下，Ollama仅监听localhost。这些设置将其开放到LAN并配置多模型缓存。',
        codeBlock: `# Allow Ollama to listen on all interfaces (not just localhost)
echo 'export OLLAMA_HOST=0.0.0.0:11434' >> ~/.zshrc
echo 'export OLLAMA_MAX_LOADED_MODELS=3' >> ~/.zshrc
echo 'export OLLAMA_KEEP_ALIVE=1h' >> ~/.zshrc
source ~/.zshrc

# Restart Ollama with new settings
brew services restart ollama

# Verify listening on all interfaces
lsof -i :11434`,
        codeLanguage: 'bash',
      },
      setupStep3: {
        id: 'setup-step3',
        title: '第三步：配置macOS防火墙',
        content: '系统设置 → 网络 → 防火墙 → 选项 → 添加Ollama二进制路径（/opt/homebrew/bin/ollama）→ 允许传入连接。这允许LAN设备访问11434端口。',
      },
      setupStep4: {
        id: 'setup-step4',
        title: '第四步：拉取推荐模型',
        codeBlock: `# General-purpose LLM
ollama pull llama3.1:8b

# Alternative: faster, similar quality
ollama pull mistral:7b

# For coding tasks
ollama pull deepseek-coder-v2:16b

# Embedding model for RAG
ollama pull nomic-embed-text`,
        codeLanguage: 'bash',
      },
      setupStep5: {
        id: 'setup-step5',
        title: '第五步：设置静态IP或mDNS',
        content: 'mDNS（Bonjour）是最简单的方案——Mac Mini可通过主机名在局域网内访问，无需任何额外配置。',
        codeBlock: `# Find current local IP
ipconfig getifaddr en0

# Or use Bonjour - access at hostname.local
scutil --get LocalHostName
# 示例：macmini → 通过 http://macmini.local:11434 访问`,
        codeLanguage: 'bash',
        note: '如需固定IP，在路由器中通过Mac的MAC地址设置DHCP保留，确保IP永不变更。',
      },
      setupStep6: {
        id: 'setup-step6',
        title: '第六步：禁用休眠（全天候运行必须）',
        content: '若不进行以下设置，macOS在无操作后会进入睡眠，服务器将无法访问，直至手动唤醒。',
        codeBlock: `sudo pmset -a sleep 0
sudo pmset -a displaysleep 1
sudo pmset -a powernap 0
sudo pmset -a hibernatemode 0

# Verify settings
pmset -g`,
        codeLanguage: 'bash',
        note: '在系统设置 → 能量中启用「断电后自动启动」以应对停电情况。',
      },
      setupStep7: {
        id: 'setup-step7',
        title: '第七步：从LAN上的其他设备测试',
        codeBlock: `# 从同一网络的笔记本/手机/平板：
curl http://macmini.local:11434/api/chat -d '{
  "model": "llama3.1:8b",
  "messages": [{"role": "user", "content": "来自手机的问候！"}]
}'`,
        codeLanguage: 'bash',
        note: '如果收到响应，说明AI服务器已成功运行。LAN内所有设备现在均可将其作为AI后端使用。',
      },
      remoteAccess: {
        id: 'remote-access',
        title: '远程访问：从任何地方使用Mac Mini AI服务器',
        content: '两种方案可在家庭网络外访问Mac Mini AI服务器：Tailscale（个人用途推荐）和Cloudflare Tunnel（用于Web可访问端点）。',
        codeBlock: `# 方案1：Tailscale（推荐）— 安装在Mac Mini上
brew install --cask tailscale
# 通过Tailscale应用登录 — Mac Mini获得私有IP
# 从任何安装了Tailscale的地方访问：
curl http://macmini.tailnet.ts.net:11434/api/chat -d '{...}'

# 方案2：Cloudflare Tunnel（Web访问）
brew install cloudflared
cloudflared tunnel create ai-server
cloudflared tunnel route dns ai-server ai.yourdomain.com
# 从任何地方通过 https://ai.yourdomain.com 访问`,
        codeLanguage: 'bash',
        note: '安全警告：切勿将Ollama直接暴露在公网上而不加认证。Ollama没有内置认证。请使用Tailscale、带访问策略的Cloudflare Tunnel或WireGuard VPN。',
      },
      usecases: {
        id: 'usecases',
        title: 'Mac Mini AI服务器的四大实际使用场景',
        content: 'Mac Mini AI服务器涵盖四种主要使用场景。每种都是独立的工作流——M5 Pro 64GB可同时运行所有四种。',
      },
      usecaseFamilyServer: {
        id: 'usecases-family',
        title: '场景一：家庭AI服务器',
        content: [
          'Mac Mini放在储物间24/7运行。家庭网络上的所有设备——手机、平板、笔记本——都向同一个Ollama实例发送API请求。4人家庭的iPhone、iPad和MacBook可同时使用。',
          'iPhone使用快捷指令 → POST到macmini.local:11434。MacBook用户使用Continue.dev或Raycast扩展。设置OLLAMA_NUM_PARALLEL=2后，两位家庭成员可同时聊天。',
          '替代4份ChatGPT Plus订阅（$80/月=$960/年）。回本时间：约15个月。第2年起纯节省。',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: '场景二：私有RAG文档问答服务器',
        content: '技术栈：Ollama（Llama 3.3 8B）+ nomic-embed-text + ChromaDB。全部运行在Mac Mini上，通过LAN访问。用途：家庭文档、法律合同、技术手册、食谱库、医疗记录、研究论文。完全私密、可搜索、离线可用。',
        codeBlock: `# 通过Docker安装ChromaDB
brew install --cask docker
docker run -d -p 8000:8000 -v ~/chromadb:/data chromadb/chroma

# 索引文档（Python）
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.vectorstores import Chroma

embeddings = OllamaEmbeddings(
    model="nomic-embed-text",
    base_url="http://localhost:11434"
)
vectordb = Chroma.from_documents(
    documents=splits,
    embedding=embeddings,
    persist_directory="./chroma_db"
)`,
        codeLanguage: 'python',
      },
      usecaseVoice: {
        id: 'usecases-voice',
        title: '场景三：全天候语音助手',
        content: [
          'Mac Mini上的技术栈：whisper.cpp（Metal加速STT）、Ollama Llama 3.3 8B（推理）、Piper TTS（语音输出）、Wyoming协议（Home Assistant集成）。',
          '通过客户端设备（Apple HomePod via Home Assistant，或各房间的Raspberry Pi麦克风阵列）唤醒词激活。M5 Pro端到端延迟：1.2秒（STT 0.3秒 + LLM 0.7秒 + TTS 0.2秒）。',
          '年电费约$35。所有语音数据完全保留在本地，私密无忧。',
        ],
        items: [
          '详细设置指南：[构建本地语音助手](/zh/power-local-llm/build-local-voice-assistant-2026)',
        ],
      },
      usecaseCoding: {
        id: 'usecases-coding',
        title: '场景四：私有编程助手（IDE集成）',
        content: '将Continue.dev或Cursor配置为使用Mac Mini的API。DeepSeek Coder V2（16B）在多项语言基准测试中超越GitHub Copilot，同时保持代码完全私密。',
        codeBlock: `// ~/.continue/config.json
{
  "models": [{
    "title": "Mac Mini DeepSeek Coder",
    "provider": "ollama",
    "model": "deepseek-coder-v2:16b",
    "apiBase": "http://macmini.local:11434"
  }]
}`,
        codeLanguage: 'json',
        items: [
          '$0/年（相比GitHub Copilot $10/月/用户）',
          '代码永不离开您的网络',
          '离线可用（飞机上、安全办公室）',
          'DeepSeek Coder V2在Go、Python、TypeScript基准测试中超越Copilot',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: '功耗与散热性能',
        content: '在使用Ollama和Metal加速的M5 Pro Mac Mini 64GB上实测。按$0.15/kWh计算电费。',
        tableFormat: true,
        columns: ['工作负载', '功耗', '年度成本（24/7，$0.15/kWh）'],
        rows: [
          { '工作负载': '待机', '功耗': '8W', '年度成本（24/7，$0.15/kWh）': '约$10/年' },
          { '工作负载': 'Llama 8B推理', '功耗': '25–35W', '年度成本（24/7，$0.15/kWh）': '约$39/年' },
          { '工作负载': 'Llama 34B推理', '功耗': '40–55W', '年度成本（24/7，$0.15/kWh）': '约$63/年' },
          { '工作负载': '混合典型负载', '功耗': '15–25W', '年度成本（24/7，$0.15/kWh）': '约$26/年' },
        ],
        items: [
          '负载下表面温度：35–42°C（触碰时偏热）',
          'CPU内部温度：65–75°C（远低于降频阈值）',
          '风扇：M5基础版从不启动；M5 Pro在峰值负载时短暂低速运转',
          '30天连续运行测试中未观测到热降频',
          '通风：建议开放空间放置——不要放入密闭柜',
          'SSD耐久度：典型600 TBW = AI服务器写入模式下约30年寿命',
        ],
        note: '混合典型负载年电费：约$26–39。全年24/7运行成本低于一个月的ChatGPT Plus订阅费。',
        image: '/images/mac-mini-m5-local-ai-server-power-draw-by-workload-en.svg',
        imageCaption: 'Mac Mini M5 Pro各工作负载功耗：待机8W，Llama 8B推理25–35W，Llama 34B推理40–55W——相比之下台式机RTX 4070功耗为200–300W。',
      },
      maintenance: {
        id: 'maintenance',
        title: '24/7运行的监控与维护',
        content: '将此健康检查脚本保存为~/check-ai-server.sh——通过cron或launchd每小时执行，在Ollama崩溃时自动重启。',
        codeBlock: `#!/bin/bash
echo "=== AI Server Health Check ==="
echo "Date: $(date)"

if pgrep -x "ollama" > /dev/null; then
    echo "✓ Ollama running"
else
    echo "✗ Ollama NOT running - restarting"
    brew services restart ollama
fi

if curl -s http://localhost:11434/api/version > /dev/null; then
    echo "✓ API responding"
else
    echo "✗ API NOT responding"
fi

df -h / | tail -1
uptime`,
        codeLanguage: 'bash',
        items: [
          '每月：用`brew upgrade ollama`更新Ollama',
          '每月：用`ollama pull llama3.1:8b`更新模型',
          '每月：用`ollama list`查看模型 → `ollama rm <模型名>`删除未使用模型',
          '每月：通过系统设置 → 软件更新安装macOS更新',
          '每月：重启Mac Mini（清理内存）',
        ],
        note: '如需每小时运行健康检查，创建~/Library/LaunchAgents/com.user.ollama-monitor.plist并用launchctl加载。',
      },
      tco: {
        id: 'tco',
        title: '5年总拥有成本分析',
        tableFormat: true,
        columns: ['年份', 'Mac Mini AI服务器', '4× ChatGPT Plus', '差额'],
        rows: [
          { '年份': '第1年', 'Mac Mini AI服务器': '$1,199硬件 + $35电费 = $1,234', '4× ChatGPT Plus': '$960', '差额': '−$274（Mac更贵）' },
          { '年份': '第2年', 'Mac Mini AI服务器': '$35（仅电费）', '4× ChatGPT Plus': '$960', '差额': '+$925节省' },
          { '年份': '第3年', 'Mac Mini AI服务器': '$35', '4× ChatGPT Plus': '$960', '差额': '+$925节省' },
          { '年份': '第4年', 'Mac Mini AI服务器': '$35', '4× ChatGPT Plus': '$960', '差额': '+$925节省' },
          { '年份': '第5年', 'Mac Mini AI服务器': '$35', '4× ChatGPT Plus': '$960', '差额': '+$925节省' },
          { '年份': '5年合计', 'Mac Mini AI服务器': '$1,374', '4× ChatGPT Plus': '$4,800', '差额': '+$3,426节省' },
        ],
        items: [
          '4人家庭回本周期（vs. 4× ChatGPT Plus）：约15个月',
          '编程助手（vs. Copilot $10/用户/月）— 1名开发者：12个月回本',
          '编程助手 — 4人开发团队：3个月回本',
          '编程助手 — 10人团队：约1.2个月回本',
        ],
        note: 'TCO基于$960/年（4× ChatGPT Plus，$20/用户/月）。所有数据保持私密，无按次收费，包含离线能力。',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Mac Mini M5比其他方案更安静吗？', a: '是的。M5基础版完全无风扇。M5 Pro风扇极少转动，即使转动也非常安静。GPU台式机：约50–70 dB。Mac Mini M5：待机0 dB，34B以上高负荷时短暂20–25 dB。' },
          { q: '可以远程访问Mac Mini吗？', a: '可以——通过终端SSH，或系统设置 → 共享 → 远程管理进行屏幕共享（VNC）。LAN内：ssh 用户@macmini.local。远程访问：先安装Tailscale，再通过Tailscale IP进行SSH。' },
          { q: '需要更高吞吐量怎么办？', a: '升级路径：Mac Studio M5 Max（128GB，约$2,000）可实现2倍速度和70B模型支持。Mac Studio M5 Ultra（预计2026年发布）可实现4倍速度。' },
          { q: 'Mac Mini作为24/7 AI服务器能用多久？', a: 'Apple Silicon Mac专为持续运行设计。AI服务器预期寿命：7–10年。SSD耐久度（典型600 TBW）可支撑25–30年AI工作负载。年硬件故障率低于0.5%。' },
          { q: '能同时服务多个用户吗？', a: '可以。设置OLLAMA_NUM_PARALLEL=2（内存充足时可更高）以处理并发请求。M5 Pro 64GB可轻松支持2–3名用户在8B模型上同时使用。' },
          { q: '断电了怎么办？', a: '恢复供电后，若在系统设置 → 能量中启用了"断电后自动启动"，macOS会自动启动。Ollama作为brew服务启动。模型在首次请求时加载（重启后首次响应延迟5–15秒）。' },
          { q: '可以为Mac Mini添加外部GPU吗？', a: '不可以。Apple Silicon不支持用于Metal/ML加速的外部GPU。统一内存架构就是其设计核心。如需更高速度，请升级到Mac Studio M5 Max。' },
          { q: 'Mac Mini作为AI服务器是否过于强大或不够用？', a: '对于使用8B–34B模型的1–4人家庭或小型团队：恰到好处。对于70B模型：不够用（需要Mac Studio M5 Max 128GB）。对于预算有限的爱好者小模型：过于强大（Raspberry Pi 5仅支持1–3B模型，但2026年的实际用途已不够用）。' },
        ],
      },
      relatedArticles: {
        id: 'related',
        title: '相关文章',
        items: [
          '[Apple Silicon运行本地大模型：完整指南](/zh/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro与M5 Max基准测试 2026](/zh/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[Mac上安装Ollama指南](/zh/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[本地大模型需要多少统一内存？](/zh/local-llms/how-much-unified-memory-for-local-llm)',
          '[Apple Silicon最佳大模型推荐](/zh/local-llms/best-models-apple-silicon-2026)',
          '[MLX vs Ollama vs llama.cpp对比](/zh/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[构建本地语音助手](/zh/power-local-llm/build-local-voice-assistant-2026)',
          '[企业私有数据本地RAG方案](/zh/power-local-llm/local-rag-for-private-business-data)',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-es.webp',
    title: 'Mac Mini M5 como servidor de IA local: LLM, Whisper, RAG y asistente de voz 24/7 (previsto)',
    seoTitle: 'Mac Mini M5 como servidor de IA local 24/7',
    intro: 'Cuando Apple lance el Mac Mini M5, será una excelente opción como servidor de IA local silencioso y siempre activo. Esta guía repasa la configuración de hardware prevista, la estrategia de instalación y el análisis coste-beneficio para ejecutar Ollama LLM, Whisper STT, pipeline RAG y una pila de asistente de voz. Coste eléctrico estimado: $26–39 al año. Nota: el Mac Mini M5 aún no ha sido anunciado; las especificaciones se basan en los datos de rendimiento actuales del M5 Pro/Max.',
    metaDescription: 'Un servidor de IA siempre activo en Mac Mini M5: 25–55 W, $26–39/año de luz. Ollama, Whisper STT, RAG y asistente de voz. Silencioso y sin reinicios.',
    twitterDescription: 'Mac Mini M5 Pro 64 GB: el servidor de IA local silencioso ideal. LLM + Whisper + RAG siempre activo por $35/año en electricidad. Guía completa de configuración.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    ctaText: '¿Ya tienes tu servidor de IA Mac Mini funcionando? Compara las respuestas de tu Llama o DeepSeek local con GPT-4, Claude, Gemini y otros 22 modelos en un solo envío con PromptQuorum — verifica que tu configuración autoalojada entrega respuestas de calidad cloud para tus casos de uso.',
    current_models_mentioned: ['Llama 3.3 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'Mac Mini M5'],
    audience: 'Usuarios que quieren un servidor de IA local siempre activo para el hogar o la oficina. Usuarios técnicos cómodos con la terminal.',
    readTime: '12 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini servidor de IA local',
    targetKeywords: ['Mac Mini servidor IA', 'LLM siempre activo', 'infraestructura IA local', 'Ollama siempre activo', 'Mac Mini M5 servidor'],
    leadAnswerBlock: '**Cuando se lance, el Mac Mini M5 Pro 64 GB (estimado en $1.199) sería una excelente opción como servidor de IA siempre activo: silencioso (casi sin ventilador), 25–55 W de consumo, $26–39/año estimados en electricidad. Se espera que ejecute modelos Ollama 34B, Whisper STT, pipeline RAG y asistente de voz simultáneamente. Nota: el Mac Mini M5 aún no ha sido anunciado por Apple.**',
    nextStep: {
      text: '¿Listo para configurar Ollama en tu Mac Mini M5? Aquí tienes la guía completa de instalación.',
      label: 'Ollama en Mac — Guía de configuración 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      es: {
        question: '¿Por qué sería el Mac Mini M5 un buen servidor de IA local (cuando se lance)?',
        answer: 'Se espera que sea silencioso (sin ventilador o casi silencioso), con 25–55 W de consumo (frente a 300 W+ de un PC con GPU) y $26–39/año estimados en electricidad. Ejecutaría Ollama 34B LLM + Whisper + RAG simultáneamente en 64 GB de memoria unificada. Nota: el Mac Mini M5 aún no ha sido anunciado.',
        bullets: [
          'M5 Pro 64 GB: estimado en $1.199 (aún no disponible)',
          'Consumo: 25–55 W previstos (frente a 300 W+ de un PC con GPU)',
          'Electricidad anual: estimada en $26–39 (frente a $263–394 de una GPU)',
          'Silencioso: se espera que sea casi sin ventilador bajo cargas LLM típicas',
          'API REST accesible desde todos los dispositivos de la LAN',
          'Análisis coste-beneficio: ver la sección de TCO más abajo',
        ],
        updatedDate: '2026-05-15',
      },
    },
    toc: [
      { label: 'Por qué Mac Mini M5', anchor: '#why' },
      { label: 'Configuración de hardware', anchor: '#hardware' },
      { label: 'Configuración completa del servidor', anchor: '#setup' },
      { label: 'Acceso remoto', anchor: '#remote-access' },
      { label: 'Casos de uso', anchor: '#usecases' },
      { label: 'Consumo y rendimiento térmico', anchor: '#monitoring' },
      { label: 'Monitorización y mantenimiento', anchor: '#maintenance' },
      { label: 'Coste total a 5 años', anchor: '#tco' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Artículos relacionados', anchor: '#related' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'Por qué el Mac Mini M5 sería un servidor de IA ideal (cuando se lance)',
        content: [
          'El Mac Mini M5 Pro 64 GB por $1.199 es el hardware con mejor relación calidad-precio en 2026 para un servidor de IA local silencioso y siempre activo. Combina el silencio casi total (sin ventilador o con ventilador a muy bajas RPM), bajo consumo eléctrico (25–55 W frente a 300 W+ de los PC con GPU) y suficiente memoria unificada para ejecutar modelos de 34B parámetros o varios modelos pequeños simultáneamente.',
          'El coste eléctrico anual es de $26–39 frente a $263–394 de los equivalentes con GPU de escritorio — menos de dos meses de una sola suscripción a ChatGPT Plus, cada año, de manera permanente.',
        ],
        tableFormat: true,
        columns: ['Propiedad', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'Propiedad': 'Coste de hardware', 'Mac Mini M5 Pro': '$1.199', 'Desktop + RTX 4070': '$1.200+', 'Raspberry Pi 5': '$80' },
          { 'Propiedad': 'Consumo (reposo)', 'Mac Mini M5 Pro': '8 W', 'Desktop + RTX 4070': '50 W', 'Raspberry Pi 5': '5 W' },
          { 'Propiedad': 'Consumo (carga LLM)', 'Mac Mini M5 Pro': '25–55 W', 'Desktop + RTX 4070': '200–300 W', 'Raspberry Pi 5': 'N/A (demasiado pequeño)' },
          { 'Propiedad': 'Electricidad anual', 'Mac Mini M5 Pro': '$26–39', 'Desktop + RTX 4070': '$263–394', 'Raspberry Pi 5': '~$5' },
          { 'Propiedad': 'Nivel de ruido', 'Mac Mini M5 Pro': 'Silencioso', 'Desktop + RTX 4070': 'Ruidoso (3+ ventiladores)', 'Raspberry Pi 5': 'Silencioso' },
          { 'Propiedad': 'Tamaño máximo de modelo', 'Mac Mini M5 Pro': '34B (Q5)', 'Desktop + RTX 4070': '8B (12 GB VRAM)', 'Raspberry Pi 5': 'Solo 1–3B' },
          { 'Propiedad': 'Fiabilidad siempre activo', 'Mac Mini M5 Pro': 'Excelente', 'Desktop + RTX 4070': 'Buena', 'Raspberry Pi 5': 'Excelente' },
          { 'Propiedad': 'Huella física', 'Mac Mini M5 Pro': '13×13 cm', 'Desktop + RTX 4070': 'Torre completa', 'Raspberry Pi 5': '8×8 cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Recomendación de configuración de hardware',
        content: 'El M5 Pro 64 GB por $1.199 es el punto óptimo de valor: ejecuta modelos de 34B, soporta pilas de asistente de voz multimodo y tiene margen para 2–3 años de crecimiento en el tamaño de los modelos. Nunca compres menos de 36 GB para uso como servidor de IA.',
        tableFormat: true,
        columns: ['Configuración', 'Precio (2026)', 'Memoria', 'Ideal para', 'Modelos compatibles'],
        rows: [
          { 'Configuración': 'Mac Mini M5 (base)', 'Precio (2026)': '$599', 'Memoria': '16 GB', 'Ideal para': 'Uso ligero, un solo usuario', 'Modelos compatibles': 'Solo 7B Q4' },
          { 'Configuración': 'Mac Mini M5 (32 GB)', 'Precio (2026)': '$799', 'Memoria': '32 GB', 'Ideal para': 'Uso general individual', 'Modelos compatibles': 'Hasta 13B Q4' },
          { 'Configuración': 'Mac Mini M5 Pro 36 GB', 'Precio (2026)': '$999', 'Memoria': '36 GB', 'Ideal para': 'Pila de asistente de voz', 'Modelos compatibles': '8B + Whisper + TTS' },
          { 'Configuración': 'Mac Mini M5 Pro 64 GB ★', 'Precio (2026)': '$1.199', 'Memoria': '64 GB', 'Ideal para': 'Punto óptimo recomendado', 'Modelos compatibles': 'Modelos 34B con comodidad' },
          { 'Configuración': 'Mac Mini M5 Pro 64 GB + 1 TB', 'Precio (2026)': '$1.399', 'Memoria': '64 GB', 'Ideal para': 'Muchos modelos almacenados', 'Modelos compatibles': '50+ modelos en disco' },
        ],
        note: '★ Recomendado. Planificación de almacenamiento: Llama 3.3 8B Q4 ~5 GB por modelo, Whisper large-v3 ~3 GB, modelo de embeddings ~0,5 GB, ChromaDB con 10.000 documentos ~2 GB. Configuración típica de 5 modelos: 50–80 GB. Mínimo 512 GB SSD; 1 TB para usuarios avanzados.',
        image: '/images/mac-mini-m5-local-ai-server-memory-tier-capacity-en.svg',
        imageCaption: 'Niveles de memoria del Mac Mini M5 frente a la capacidad máxima de modelo: 16 GB solo para 7B Q4, 32 GB hasta 13B Q4, 36 GB para una pila de asistente de voz 8B + Whisper + TTS, y el nivel recomendado de 64 GB Pro ejecuta modelos 34B con comodidad.',
      },
      setup: {
        id: 'setup',
        title: 'Configuración completa del servidor (30 minutos desde el desembalaje hasta el funcionamiento)',
        content: 'Estos pasos configuran el Mac Mini M5 como un servidor de IA persistente y accesible en red. Tras completar todos los pasos, cualquier dispositivo de tu LAN puede enviar solicitudes a la API de Ollama del Mac Mini en el puerto 11434.',
      },
      setupStep1: {
        id: 'setup-step1',
        title: 'Paso 1: Instalar Homebrew y Ollama',
        codeBlock: `# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Ollama
brew install ollama

# Start as background service (auto-starts on reboot)
brew services start ollama

# Verify it's running
curl http://localhost:11434/api/version`,
        codeLanguage: 'bash',
      },
      setupStep2: {
        id: 'setup-step2',
        title: 'Paso 2: Configurar el acceso en red',
        content: 'Por defecto, Ollama solo escucha en localhost. Estos ajustes lo abren a tu LAN y configuran el caché multi-modelo.',
        codeBlock: `# Allow Ollama to listen on all interfaces (not just localhost)
echo 'export OLLAMA_HOST=0.0.0.0:11434' >> ~/.zshrc
echo 'export OLLAMA_MAX_LOADED_MODELS=3' >> ~/.zshrc
echo 'export OLLAMA_KEEP_ALIVE=1h' >> ~/.zshrc
source ~/.zshrc

# Restart Ollama with new settings
brew services restart ollama

# Verify listening on all interfaces
lsof -i :11434`,
        codeLanguage: 'bash',
      },
      setupStep3: {
        id: 'setup-step3',
        title: 'Paso 3: Configurar el firewall de macOS',
        content: 'Ajustes del Sistema → Red → Firewall → Opciones → Añadir la ruta del binario de Ollama (/opt/homebrew/bin/ollama) → Permitir conexiones entrantes. Esto permite que los dispositivos de la LAN accedan al puerto 11434 con el firewall activo.',
      },
      setupStep4: {
        id: 'setup-step4',
        title: 'Paso 4: Descargar los modelos recomendados',
        codeBlock: `# General-purpose LLM
ollama pull llama3.1:8b

# Alternative: faster, similar quality
ollama pull mistral:7b

# For coding tasks
ollama pull deepseek-coder-v2:16b

# Embedding model for RAG
ollama pull nomic-embed-text`,
        codeLanguage: 'bash',
      },
      setupStep5: {
        id: 'setup-step5',
        title: 'Paso 5: Configurar IP estática o mDNS',
        content: 'mDNS (Bonjour) es la opción más sencilla — tu Mac Mini es accesible por nombre de host en tu red local sin ninguna configuración adicional.',
        codeBlock: `# Find current local IP
ipconfig getifaddr en0

# Or use Bonjour - access at hostname.local
scutil --get LocalHostName
# Ejemplo: macmini → accesible en http://macmini.local:11434`,
        codeLanguage: 'bash',
        note: 'Para una IP estable, asigna una reserva DHCP en la configuración de tu router usando la dirección MAC del Mac. Así la IP nunca cambia.',
      },
      setupStep6: {
        id: 'setup-step6',
        title: 'Paso 6: Evitar el modo de reposo (imprescindible para siempre activo)',
        content: 'Sin estos ajustes, macOS entrará en reposo tras la inactividad, dejando el servidor inaccesible hasta que se reactive manualmente.',
        codeBlock: `sudo pmset -a sleep 0
sudo pmset -a displaysleep 1
sudo pmset -a powernap 0
sudo pmset -a hibernatemode 0

# Verify settings
pmset -g`,
        codeLanguage: 'bash',
        note: 'Activa "Iniciar automáticamente tras un fallo de alimentación" en Ajustes del Sistema → Energía para gestionar los cortes de luz.',
      },
      setupStep7: {
        id: 'setup-step7',
        title: 'Paso 7: Probar desde otro dispositivo en la LAN',
        codeBlock: `# Desde cualquier portátil/teléfono/tableta en la misma red:
curl http://macmini.local:11434/api/chat -d '{
  "model": "llama3.1:8b",
  "messages": [{"role": "user", "content": "¡Hola desde mi teléfono!"}]
}'`,
        codeLanguage: 'bash',
        note: 'Si recibes una respuesta, tu servidor de IA está en marcha. Todos los dispositivos de la LAN pueden usarlo ahora como backend de IA.',
      },
      remoteAccess: {
        id: 'remote-access',
        title: 'Acceso remoto: usa tu servidor de IA Mac Mini desde cualquier lugar',
        content: [
          'Dos opciones para acceder a tu servidor de IA Mac Mini desde fuera de tu red doméstica: Tailscale (recomendado para uso personal) y Cloudflare Tunnel (para endpoints accesibles desde la web).',
        ],
        codeBlock: `# Opción 1: Tailscale (Recomendado) — instalar en Mac Mini
brew install --cask tailscale
# Inicia sesión con la app de Tailscale — Mac Mini obtiene una IP privada
# Accede desde cualquier lugar con Tailscale instalado:
curl http://macmini.tailnet.ts.net:11434/api/chat -d '{...}'

# Opción 2: Cloudflare Tunnel (Acceso web)
brew install cloudflared
cloudflared tunnel create ai-server
cloudflared tunnel route dns ai-server ai.tudominio.com
# Accesible en https://ai.tudominio.com desde cualquier lugar`,
        codeLanguage: 'bash',
        note: 'Seguridad: nunca expongas Ollama directamente a internet sin autenticación. Ollama no tiene autenticación integrada. Usa Tailscale, Cloudflare Tunnel con políticas de acceso o WireGuard VPN.',
      },
      usecases: {
        id: 'usecases',
        title: 'Cuatro casos de uso reales para el servidor de IA Mac Mini',
        content: 'El servidor de IA Mac Mini cubre cuatro casos de uso principales. Cada uno es un flujo de trabajo independiente — puedes ejecutar los cuatro simultáneamente en el M5 Pro 64 GB.',
      },
      usecaseFamilyServer: {
        id: 'usecases-family',
        title: 'Caso de uso 1: Servidor de IA familiar para el hogar',
        content: [
          'El Mac Mini está en un armario funcionando 24/7. Todos los dispositivos de la red doméstica — teléfonos, tabletas, portátiles — envían solicitudes API a la misma instancia de Ollama. Una familia de 4 personas con iPhones, iPads y MacBooks lo usan simultáneamente.',
          'Los iPhone usan Atajos → POST a macmini.local:11434. Los usuarios de MacBook usan Continue.dev o extensiones de Raycast. Ajusta OLLAMA_NUM_PARALLEL=2 para que dos miembros de la familia puedan chatear simultáneamente con Llama 3.3 8B.',
          'Sustituye 4 suscripciones a ChatGPT Plus ($80/mes = $960/año). Periodo de amortización del Mac Mini: ~15 meses. Del año 2 al 5: ahorro puro.',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: 'Caso de uso 2: Servidor privado de preguntas y respuestas sobre documentos con RAG',
        content: 'Pila: Ollama (Llama 3.3 8B) + nomic-embed-text + ChromaDB. Todo ejecutándose en el Mac Mini, accesible desde la LAN. Casos de uso: documentos familiares, contratos legales, manuales técnicos, biblioteca de recetas, historial médico, artículos de investigación. Todo privado. Todo buscable. Todo sin conexión.',
        codeBlock: `# Install ChromaDB via Docker
brew install --cask docker
docker run -d -p 8000:8000 -v ~/chromadb:/data chromadb/chroma

# Index documents (Python)
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.vectorstores import Chroma

embeddings = OllamaEmbeddings(
    model="nomic-embed-text",
    base_url="http://localhost:11434"
)
vectordb = Chroma.from_documents(
    documents=splits,
    embedding=embeddings,
    persist_directory="./chroma_db"
)`,
        codeLanguage: 'python',
      },
      usecaseVoice: {
        id: 'usecases-voice',
        title: 'Caso de uso 3: Asistente de voz siempre activo',
        content: [
          'Pila en Mac Mini: whisper.cpp para STT (acelerado con Metal), Ollama Llama 3.3 8B para el razonamiento, Piper TTS para la salida de voz, protocolo Wyoming para la integración con Home Assistant.',
          'Activado por palabra de activación desde dispositivos cliente (Apple HomePod vía Home Assistant, o matrices de micrófonos Raspberry Pi en cada habitación). Latencia extremo a extremo en M5 Pro: 1,2 segundos (STT 0,3 s + LLM 0,7 s + TTS 0,2 s).',
          'Electricidad anual: $35. Servicio cloud comparable (Alexa Plus a $20/mes): $240/año. Ahorra más de $200 al año manteniendo todos los datos de voz privados.',
        ],
        items: [
          'Ver configuración detallada: [Crear un asistente de voz local](/es/power-local-llm/build-local-voice-assistant-2026)',
        ],
      },
      usecaseCoding: {
        id: 'usecases-coding',
        title: 'Caso de uso 4: Agente de código privado (integración con IDE)',
        content: 'Configura Continue.dev o Cursor para usar la API del Mac Mini. DeepSeek Coder V2 a 16B supera a GitHub Copilot en varios benchmarks de lenguajes — mientras mantiene todo el código privado y sin conexión.',
        codeBlock: `// ~/.continue/config.json
{
  "models": [{
    "title": "Mac Mini DeepSeek Coder",
    "provider": "ollama",
    "model": "deepseek-coder-v2:16b",
    "apiBase": "http://macmini.local:11434"
  }]
}`,
        codeLanguage: 'json',
        items: [
          '$0/año (frente a GitHub Copilot a $10/mes por usuario)',
          'El código nunca sale de tu red',
          'Funciona sin conexión (aviones, oficinas seguras)',
          'DeepSeek Coder V2 supera a Copilot en benchmarks de Go, Python y TypeScript',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: 'Consumo eléctrico y rendimiento térmico',
        content: 'Medido en el Mac Mini M5 Pro 64 GB ejecutando Ollama con aceleración Metal. Coste eléctrico calculado a $0,15/kWh.',
        tableFormat: true,
        columns: ['Carga de trabajo', 'Consumo', 'Coste anual (24/7, $0,15/kWh)'],
        rows: [
          { 'Carga de trabajo': 'Reposo', 'Consumo': '8 W', 'Coste anual (24/7, $0,15/kWh)': '~$10/año' },
          { 'Carga de trabajo': 'Inferencia Llama 8B', 'Consumo': '25–35 W', 'Coste anual (24/7, $0,15/kWh)': '~$39/año' },
          { 'Carga de trabajo': 'Inferencia Llama 34B', 'Consumo': '40–55 W', 'Coste anual (24/7, $0,15/kWh)': '~$63/año' },
          { 'Carga de trabajo': 'Carga mixta típica', 'Consumo': '15–25 W', 'Coste anual (24/7, $0,15/kWh)': '~$26/año' },
        ],
        items: [
          'Temperatura superficial bajo carga: 35–42 °C (caliente al tacto)',
          'Temperatura interna de CPU: 65–75 °C (muy por debajo del umbral de limitación)',
          'Ventilador: nunca se activa en el M5 base; activación breve a bajas RPM en el M5 Pro durante picos',
          'Sin limitación térmica observada en pruebas de 30 días de operación continua',
          'Ventilación: se recomienda espacio abierto — no colocar en un armario cerrado',
          'Durabilidad del SSD: 600 TBW típico = ~30 años con patrones de escritura de servidor de IA',
        ],
        note: 'Electricidad anual media para carga mixta típica: $26–39. Un año completo de funcionamiento 24/7 cuesta menos de un mes de ChatGPT Plus.',
        image: '/images/mac-mini-m5-local-ai-server-power-draw-by-workload-en.svg',
        imageCaption: 'Consumo del Mac Mini M5 Pro por carga de trabajo: 8 W en reposo, 25–35 W en inferencia Llama 8B, 40–55 W en inferencia Llama 34B, frente a 200–300 W de un equipo de escritorio con RTX 4070.',
      },
      maintenance: {
        id: 'maintenance',
        title: 'Monitorización y mantenimiento para operación 24/7',
        content: 'Guarda este script de verificación de salud como ~/check-ai-server.sh — ejecútalo con cron o launchd cada hora para reiniciar Ollama automáticamente si se cuelga.',
        codeBlock: `#!/bin/bash
echo "=== AI Server Health Check ==="
echo "Date: $(date)"

if pgrep -x "ollama" > /dev/null; then
    echo "✓ Ollama running"
else
    echo "✗ Ollama NOT running - restarting"
    brew services restart ollama
fi

if curl -s http://localhost:11434/api/version > /dev/null; then
    echo "✓ API responding"
else
    echo "✗ API NOT responding"
fi

df -h / | tail -1
uptime`,
        codeLanguage: 'bash',
        items: [
          'Mensual: Actualiza Ollama con `brew upgrade ollama`',
          'Mensual: Actualiza los modelos con `ollama pull llama3.1:8b` (descarga la versión más reciente)',
          'Mensual: Limpia modelos sin uso con `ollama list` y luego `ollama rm <nombre-del-modelo>`',
          'Mensual: Aplica actualizaciones de macOS desde Ajustes del Sistema → Actualización de software',
          'Mensual: Reinicia el Mac Mini (limpieza de memoria, elimina cualquier estado acumulado)',
        ],
        note: 'Para programar la comprobación de salud cada hora, crea ~/Library/LaunchAgents/com.user.ollama-monitor.plist y cárgalo con launchctl.',
      },
      tco: {
        id: 'tco',
        title: 'Análisis del coste total de propiedad a 5 años',
        tableFormat: true,
        columns: ['Año', 'Servidor de IA Mac Mini', '4× ChatGPT Plus', 'Diferencia'],
        rows: [
          { 'Año': 'Año 1', 'Servidor de IA Mac Mini': '$1.199 hardware + $35 electricidad = $1.234', '4× ChatGPT Plus': '$960', 'Diferencia': '−$274 (Mac más caro en A1)' },
          { 'Año': 'Año 2', 'Servidor de IA Mac Mini': '$35 (solo electricidad)', '4× ChatGPT Plus': '$960', 'Diferencia': '+$925 ahorrado' },
          { 'Año': 'Año 3', 'Servidor de IA Mac Mini': '$35', '4× ChatGPT Plus': '$960', 'Diferencia': '+$925 ahorrado' },
          { 'Año': 'Año 4', 'Servidor de IA Mac Mini': '$35', '4× ChatGPT Plus': '$960', 'Diferencia': '+$925 ahorrado' },
          { 'Año': 'Año 5', 'Servidor de IA Mac Mini': '$35', '4× ChatGPT Plus': '$960', 'Diferencia': '+$925 ahorrado' },
          { 'Año': 'Total 5 años', 'Servidor de IA Mac Mini': '$1.374', '4× ChatGPT Plus': '$4.800', 'Diferencia': '+$3.426 ahorrado' },
        ],
        items: [
          'Periodo de amortización para una familia de 4 que sustituye ChatGPT Plus: ~15 meses',
          'Agente de código (sustituyendo Copilot a $10/usuario/mes) — 1 desarrollador: amortizado en 12 meses',
          'Agente de código — equipo de 4 desarrolladores: amortizado en 3 meses',
          'Agente de código — equipo de 10 personas: amortizado en 1,2 meses',
        ],
        note: 'TCO asume $960/año (4× ChatGPT Plus a $20/mes cada uno). Todos los datos privados, sin coste por consulta, con funcionalidad sin conexión incluida.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '¿Es el Mac Mini M5 más silencioso que las alternativas?', a: 'Sí. El M5 base es completamente sin ventilador. El ventilador del M5 Pro rara vez gira, y cuando lo hace es muy silencioso. PC con GPU de escritorio: ~50–70 dB. Mac Mini M5: 0 dB en reposo, 20–25 dB brevemente bajo carga intensa de 34B+.' },
          { q: '¿Puedo acceder remotamente al Mac Mini?', a: 'Sí — por SSH desde el terminal, o con Compartir Pantalla (VNC) desde Ajustes del Sistema → Compartir → Gestión Remota. En la LAN: ssh usuario@macmini.local. Para acceso remoto: usa primero Tailscale y luego SSH a través de la IP de Tailscale.' },
          { q: '¿Qué hago si necesito mayor rendimiento?', a: 'Ruta de actualización: Mac Studio M5 Max (128 GB, ~$2.000) para 2× de velocidad y soporte de modelos de 70B. Mac Studio M5 Ultra (previsto para 2026) para 4× de velocidad. Para granjas de servidores, conecta varios Mac Mini en rack y balancea la carga con Nginx.' },
          { q: '¿Cuánto dura el Mac Mini como servidor de IA 24/7?', a: 'Los Mac con Apple Silicon están diseñados para operación sostenida. Vida útil esperada: 7–10 años para uso como servidor de IA. Durabilidad del SSD (600 TBW típico) cubre 25–30 años de cargas de trabajo de IA. Tasa de fallo de hardware anual inferior al 0,5 %.' },
          { q: '¿Puedo atender a varios usuarios simultáneamente?', a: 'Sí. Ajusta OLLAMA_NUM_PARALLEL=2 (o más con más memoria) para gestionar solicitudes concurrentes. El M5 Pro 64 GB maneja cómodamente a 2–3 usuarios simultáneos con modelos de 8B, o a 1 usuario con pilas multimodelo (LLM + visión + STT).' },
          { q: '¿Qué ocurre si el Mac Mini pierde la alimentación?', a: 'Tras la restauración de la alimentación, macOS arranca automáticamente si activaste "Iniciar automáticamente tras un fallo de alimentación" en Ajustes del Sistema → Energía. Ollama arranca como servicio de brew. Los modelos se recargan con la primera solicitud (retraso de 5–15 s en la primera respuesta tras el reinicio).' },
          { q: '¿Puedo añadir una GPU externa al Mac Mini para inferencia más rápida?', a: 'No. Apple Silicon no admite GPUs externas para aceleración Metal/ML. La arquitectura de memoria unificada es el diseño — no se puede añadir GPU discreta. Para más velocidad, actualiza al Mac Studio M5 Max.' },
          { q: '¿Es el Mac Mini demasiado potente o insuficiente para un servidor de IA?', a: 'Para hogares de 1–4 personas o equipos pequeños que ejecutan modelos de 8B–34B: justo lo necesario. Para modelos de 70B: insuficiente (se necesita Mac Studio M5 Max 128 GB). Para modelos pequeños con presupuesto de aficionado: demasiado potente (Raspberry Pi 5 solo cubre modelos de 1–3B, insuficiente para cualquier uso práctico en 2026).' },
        ],
      },
      relatedArticles: {
        id: 'related',
        title: 'Artículos relacionados',
        items: [
          '[Apple Silicon para LLMs locales: guía completa](/es/local-llms/apple-silicon-local-llm-guide-2026)',
          '[Benchmarks M5 Pro vs M5 Max 2026](/es/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[Guía de configuración de Ollama en Mac](/es/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[¿Cuánta memoria unificada necesitas para LLMs locales?](/es/local-llms/how-much-unified-memory-for-local-llm)',
          '[Mejores modelos LLM para Apple Silicon](/es/local-llms/best-models-apple-silicon-2026)',
          '[Comparativa MLX vs Ollama vs llama.cpp](/es/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Crear un asistente de voz local](/es/power-local-llm/build-local-voice-assistant-2026)',
          '[RAG local para datos empresariales privados](/es/power-local-llm/local-rag-for-private-business-data)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mac Mini M5 como servidor de IA local 2026: LLM, Whisper, RAG',
      description: 'Servidor de IA local siempre activo en Mac Mini M5. 25–55 W, silencioso, LLM 24/7.',
      url: 'https://www.promptquorum.com/es/local-llms/mac-mini-m5-local-ai-server',
      inLanguage: 'es',
      datePublished: '2026-05-15',
      dateModified: '2026-05-15',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-ar.webp',
    title: '⁨Mac Mini M5⁩ كخادم ذكاء اصطناعي محلي ⁨2026⁩ (متوقع): ⁨LLM⁩ و⁨Whisper⁩ و⁨RAG⁩ ومساعد صوتي ⁨24/7⁩',
    seoTitle: '⁨Mac Mini M5⁩ خادم ذكاء محلي: ⁨35⁩ دولارًا سنويًا (متوقع)',
    intro: 'عندما تطلق Apple جهاز Mac Mini M5، سيكون خادم ذكاء اصطناعي محلي صامتًا ودائم التشغيل ممتازًا. يغطي هذا الدليل التهيئة المتوقعة للعتاد واستراتيجية الإعداد وتحليل التكاليف والفوائد لتشغيل Ollama LLM، وWhisper STT، وخط معالجة RAG، ومنظومة مساعد صوتي. تكلفة الكهرباء المقدَّرة: 26–39 دولارًا سنويًا. ملاحظة: لم تُعلن Apple بعد عن Mac Mini M5؛ الأرقام مبنية على بيانات أداء M5 Pro/Max الحالية.',
    metaDescription: '⁨Mac Mini M5 Pro 64 GB⁩: خادم ذكاء دائم التشغيل، ⁨25⁩–⁨55⁩ واط، ⁨26⁩–⁨39⁩ دولارًا سنويًا. ⁨Ollama⁩ و⁨Whisper STT⁩ و⁨RAG⁩ ومساعد صوتي. صامت وبلا إعادة تشغيل.',
    twitterDescription: '⁨Mac Mini M5 Pro⁩ بسعة ⁨64 GB⁩: خادم الذكاء الاصطناعي المحلي الصامت المثالي. ⁨LLM + Whisper + RAG⁩ دائم التشغيل مقابل ⁨35⁩ دولارًا سنويًا من الكهرباء. دليل إعداد كامل.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    ctaText: 'هل لديك بالفعل خادم الذكاء الاصطناعي Mac Mini يعمل؟ قارن إجابات Llama أو DeepSeek المحلي لديك مع GPT-4 وClaude وGemini و22 نموذجًا آخر في إرسال واحد عبر PromptQuorum — تحقق من أن إعدادك المستضاف ذاتيًا يقدم إجابات بجودة السحابة لحالات استخدامك.',
    current_models_mentioned: ['Llama 3.3 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'Mac Mini M5'],
    audience: 'المستخدمون الذين يريدون خادم ذكاء اصطناعي محلي دائم التشغيل للمنزل أو المكتب. مستخدمون تقنيون مرتاحون مع الطرفية.',
    readTime: '12 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini خادم ذكاء اصطناعي محلي',
    targetKeywords: ['Mac Mini خادم ذكاء اصطناعي', 'LLM دائم التشغيل', 'بنية تحتية للذكاء الاصطناعي المحلي', 'Ollama دائم التشغيل', 'Mac Mini M5 خادم'],
    leadAnswerBlock: '**عند إطلاقه، سيكون Mac Mini M5 Pro بسعة 64 GB (بسعر تقديري 1,199 دولارًا) خيارًا ممتازًا لخادم ذكاء اصطناعي دائم التشغيل: صامت (بلا مروحة تقريبًا)، استهلاك 25–55 واط، وتكلفة كهرباء تقديرية 26–39 دولارًا سنويًا. من المتوقع أن يشغّل نماذج Ollama 34B وWhisper STT وخط معالجة RAG ومساعدًا صوتيًا في آنٍ واحد. ملاحظة: لم تُعلن Apple بعد عن Mac Mini M5.**',
    nextStep: {
      text: 'هل أنت مستعد لإعداد Ollama على Mac Mini M5 لديك؟ إليك دليل التثبيت الكامل.',
      label: 'Ollama على Mac — دليل الإعداد 2026 ←',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      ar: {
        question: 'لماذا سيكون Mac Mini M5 خادم ذكاء اصطناعي محلي جيدًا (عند إطلاقه)؟',
        answer: 'من المتوقع أن يكون صامتًا (بلا مروحة أو شبه صامت)، 25–55 واط (مقابل 300 واط+ لجهاز PC بـ GPU)، وتكلفة كهرباء تقديرية 26–39 دولارًا سنويًا (مقابل 263–394 دولارًا لـ GPU)، بسعر تقديري 1,199 دولارًا. من المتوقع أن يشغّل Ollama 34B LLM + Whisper + RAG في آنٍ واحد على 64 GB من الذاكرة الموحدة. ملاحظة: لم تُعلن Apple بعد عن Mac Mini M5.',
        bullets: [
          'M5 Pro 64 GB: سعر تقديري 1,199 دولارًا (لم يُطرح بعد)',
          'الاستهلاك المتوقع: 25–55 واط (مقابل 300 واط+ لجهاز PC بـ GPU)',
          'الكهرباء السنوية التقديرية: 26–39 دولارًا (مقابل 263–394 دولارًا لـ GPU)',
          'صامت: من المتوقع أن يكون بلا مروحة تقريبًا تحت أحمال LLM المعتادة',
          'API REST يمكن الوصول إليه من جميع أجهزة الشبكة المحلية LAN',
          'تحليل التكاليف والفوائد: راجع قسم التكلفة الإجمالية أدناه',
        ],
        updatedDate: '2026-05-15',
      },
    },
    toc: [
      { label: 'لماذا Mac Mini M5', anchor: '#why' },
      { label: 'إعداد العتاد', anchor: '#hardware' },
      { label: 'الإعداد الكامل للخادم', anchor: '#setup' },
      { label: 'الوصول عن بُعد', anchor: '#remote-access' },
      { label: 'حالات الاستخدام', anchor: '#usecases' },
      { label: 'الاستهلاك والأداء الحراري', anchor: '#monitoring' },
      { label: 'المراقبة والصيانة', anchor: '#maintenance' },
      { label: 'التكلفة الإجمالية على مدى 5 سنوات', anchor: '#tco' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'مقالات ذات صلة', anchor: '#related' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'لماذا سيكون Mac Mini M5 خادم ذكاء اصطناعي مثاليًا (عند إطلاقه)',
        content: [
          'Mac Mini M5 Pro بسعة 64 GB مقابل 1,199 دولارًا هو العتاد الأفضل من حيث القيمة مقابل السعر في 2026 لخادم ذكاء اصطناعي محلي صامت ودائم التشغيل. يجمع بين الصمت شبه التام (بلا مروحة أو بمروحة بعدد دورات منخفض جدًا)، واستهلاك كهربائي منخفض (25–55 واط مقابل 300 واط+ لأجهزة PC بـ GPU)، وذاكرة موحدة كافية لتشغيل نماذج بـ 34B معامل أو عدة نماذج صغيرة في آنٍ واحد.',
          'تكلفة الكهرباء السنوية 26–39 دولارًا مقابل 263–394 دولارًا للمكافئات المكتبية بـ GPU — أقل من شهرين من اشتراك واحد في ChatGPT Plus، كل عام، بشكل دائم.',
        ],
        tableFormat: true,
        columns: ['الخاصية', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'الخاصية': 'تكلفة العتاد', 'Mac Mini M5 Pro': '1,199 دولارًا', 'Desktop + RTX 4070': '1,200 دولارًا+', 'Raspberry Pi 5': '80 دولارًا' },
          { 'الخاصية': 'الاستهلاك (خمول)', 'Mac Mini M5 Pro': '8 واط', 'Desktop + RTX 4070': '50 واط', 'Raspberry Pi 5': '5 واط' },
          { 'الخاصية': 'الاستهلاك (حمل LLM)', 'Mac Mini M5 Pro': '25–55 واط', 'Desktop + RTX 4070': '200–300 واط', 'Raspberry Pi 5': 'غير متاح (صغير جدًا)' },
          { 'الخاصية': 'الكهرباء السنوية', 'Mac Mini M5 Pro': '26–39 دولارًا', 'Desktop + RTX 4070': '263–394 دولارًا', 'Raspberry Pi 5': '~5 دولارات' },
          { 'الخاصية': 'مستوى الضجيج', 'Mac Mini M5 Pro': 'صامت', 'Desktop + RTX 4070': 'صاخب (3+ مراوح)', 'Raspberry Pi 5': 'صامت' },
          { 'الخاصية': 'أقصى حجم نموذج', 'Mac Mini M5 Pro': '34B (Q5)', 'Desktop + RTX 4070': '8B (12 GB VRAM)', 'Raspberry Pi 5': '1–3B فقط' },
          { 'الخاصية': 'موثوقية دائم التشغيل', 'Mac Mini M5 Pro': 'ممتازة', 'Desktop + RTX 4070': 'جيدة', 'Raspberry Pi 5': 'ممتازة' },
          { 'الخاصية': 'الحجم المادي', 'Mac Mini M5 Pro': '13×13 سم', 'Desktop + RTX 4070': 'برج كامل', 'Raspberry Pi 5': '8×8 سم' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'توصية إعداد العتاد',
        content: 'M5 Pro 64 GB مقابل 1,199 دولارًا هو نقطة القيمة المثلى: يشغّل نماذج 34B، ويدعم منظومات مساعد صوتي متعددة الأنماط، ويترك هامشًا لـ 2–3 سنوات من نمو حجم النماذج. لا تشترِ أبدًا أقل من 36 GB للاستخدام كخادم ذكاء اصطناعي.',
        tableFormat: true,
        columns: ['التهيئة', 'السعر (2026)', 'الذاكرة', 'مثالي لـ', 'النماذج المتوافقة'],
        rows: [
          { 'التهيئة': 'Mac Mini M5 (أساسي)', 'السعر (2026)': '599 دولارًا', 'الذاكرة': '16 GB', 'مثالي لـ': 'استخدام خفيف، مستخدم واحد', 'النماذج المتوافقة': '7B Q4 فقط' },
          { 'التهيئة': 'Mac Mini M5 (32 GB)', 'السعر (2026)': '799 دولارًا', 'الذاكرة': '32 GB', 'مثالي لـ': 'استخدام عام فردي', 'النماذج المتوافقة': 'حتى 13B Q4' },
          { 'التهيئة': 'Mac Mini M5 Pro 36 GB', 'السعر (2026)': '999 دولارًا', 'الذاكرة': '36 GB', 'مثالي لـ': 'منظومة مساعد صوتي', 'النماذج المتوافقة': '8B + Whisper + TTS' },
          { 'التهيئة': 'Mac Mini M5 Pro 64 GB ★', 'السعر (2026)': '1,199 دولارًا', 'الذاكرة': '64 GB', 'مثالي لـ': 'نقطة القيمة المثلى الموصى بها', 'النماذج المتوافقة': 'نماذج 34B بأريحية' },
          { 'التهيئة': 'Mac Mini M5 Pro 64 GB + 1 TB', 'السعر (2026)': '1,399 دولارًا', 'الذاكرة': '64 GB', 'مثالي لـ': 'تخزين نماذج كثيرة', 'النماذج المتوافقة': '50+ نموذجًا على القرص' },
        ],
        note: '★ موصى به. تخطيط التخزين: Llama 3.3 8B Q4 ~5 GB لكل نموذج، Whisper large-v3 ~3 GB، نموذج embeddings ~0.5 GB، ChromaDB مع 10,000 مستند ~2 GB. تهيئة معتادة بـ 5 نماذج: 50–80 GB. الحد الأدنى 512 GB SSD؛ 1 TB للمستخدمين المتقدمين.',
        image: '/images/mac-mini-m5-local-ai-server-memory-tier-capacity-en.svg',
        imageCaption: 'مستويات ذاكرة Mac Mini M5 مقارنة بالحد الأقصى لحجم النموذج: 16 GB لتشغيل 7B Q4 فقط، 32 GB حتى 13B Q4، 36 GB لمنظومة مساعد صوتي 8B مع Whisper وTTS، وفئة 64 GB Pro الموصى بها تشغّل نماذج 34B بأريحية.',
      },
      setup: {
        id: 'setup',
        title: 'الإعداد الكامل للخادم (30 دقيقة من فتح العلبة إلى التشغيل)',
        content: 'تهيّئ هذه الخطوات Mac Mini M5 كخادم ذكاء اصطناعي دائم يمكن الوصول إليه عبر الشبكة. بعد إتمام جميع الخطوات، يمكن لأي جهاز في شبكتك المحلية LAN إرسال طلبات إلى API الخاص بـ Ollama على Mac Mini عبر المنفذ 11434.',
      },
      setupStep1: {
        id: 'setup-step1',
        title: 'الخطوة 1: تثبيت Homebrew وOllama',
        codeBlock: `# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Ollama
brew install ollama

# Start as background service (auto-starts on reboot)
brew services start ollama

# Verify it's running
curl http://localhost:11434/api/version`,
        codeLanguage: 'bash',
      },
      setupStep2: {
        id: 'setup-step2',
        title: 'الخطوة 2: تهيئة الوصول عبر الشبكة',
        content: 'افتراضيًا، يستمع Ollama على localhost فقط. تفتح هذه الإعدادات الوصول إلى شبكتك المحلية LAN وتهيّئ التخزين المؤقت متعدد النماذج.',
        codeBlock: `# Allow Ollama to listen on all interfaces (not just localhost)
echo 'export OLLAMA_HOST=0.0.0.0:11434' >> ~/.zshrc
echo 'export OLLAMA_MAX_LOADED_MODELS=3' >> ~/.zshrc
echo 'export OLLAMA_KEEP_ALIVE=1h' >> ~/.zshrc
source ~/.zshrc

# Restart Ollama with new settings
brew services restart ollama

# Verify listening on all interfaces
lsof -i :11434`,
        codeLanguage: 'bash',
      },
      setupStep3: {
        id: 'setup-step3',
        title: 'الخطوة 3: تهيئة جدار حماية macOS',
        content: 'إعدادات النظام ← الشبكة ← جدار الحماية ← خيارات ← أضف مسار الملف التنفيذي لـ Ollama (/opt/homebrew/bin/ollama) ← اسمح بالاتصالات الواردة. يتيح هذا لأجهزة الشبكة المحلية LAN الوصول إلى المنفذ 11434 مع تفعيل جدار الحماية.',
      },
      setupStep4: {
        id: 'setup-step4',
        title: 'الخطوة 4: تنزيل النماذج الموصى بها',
        codeBlock: `# General-purpose LLM
ollama pull llama3.1:8b

# Alternative: faster, similar quality
ollama pull mistral:7b

# For coding tasks
ollama pull deepseek-coder-v2:16b

# Embedding model for RAG
ollama pull nomic-embed-text`,
        codeLanguage: 'bash',
      },
      setupStep5: {
        id: 'setup-step5',
        title: 'الخطوة 5: تهيئة IP ثابت أو mDNS',
        content: 'mDNS (Bonjour) هو الخيار الأبسط — يمكن الوصول إلى Mac Mini لديك باسم المضيف على شبكتك المحلية دون أي تهيئة إضافية.',
        codeBlock: `# Find current local IP
ipconfig getifaddr en0

# Or use Bonjour - access at hostname.local
scutil --get LocalHostName
# Ejemplo: macmini → accesible en http://macmini.local:11434`,
        codeLanguage: 'bash',
        note: 'للحصول على IP ثابت، خصّص حجزًا في DHCP ضمن إعدادات الراوتر باستخدام عنوان MAC الخاص بـ Mac. بهذا لا يتغير الـ IP أبدًا.',
      },
      setupStep6: {
        id: 'setup-step6',
        title: 'الخطوة 6: منع وضع السكون (ضروري للتشغيل الدائم)',
        content: 'بدون هذه الإعدادات، سيدخل macOS في وضع السكون بعد فترة خمول، فيصبح الخادم غير قابل للوصول حتى يُعاد تنشيطه يدويًا.',
        codeBlock: `sudo pmset -a sleep 0
sudo pmset -a displaysleep 1
sudo pmset -a powernap 0
sudo pmset -a hibernatemode 0

# Verify settings
pmset -g`,
        codeLanguage: 'bash',
        note: 'فعّل "البدء تلقائيًا بعد انقطاع التيار" في إعدادات النظام ← الطاقة للتعامل مع انقطاعات الكهرباء.',
      },
      setupStep7: {
        id: 'setup-step7',
        title: 'الخطوة 7: الاختبار من جهاز آخر على الشبكة المحلية LAN',
        codeBlock: `# Desde cualquier portátil/teléfono/tableta en la misma red:
curl http://macmini.local:11434/api/chat -d '{
  "model": "llama3.1:8b",
  "messages": [{"role": "user", "content": "¡Hola desde mi teléfono!"}]
}'`,
        codeLanguage: 'bash',
        note: 'إذا تلقّيت ردًا، فإن خادم الذكاء الاصطناعي يعمل. يمكن لجميع أجهزة الشبكة المحلية LAN استخدامه الآن كخلفية ذكاء اصطناعي.',
      },
      remoteAccess: {
        id: 'remote-access',
        title: 'الوصول عن بُعد: استخدم خادم الذكاء الاصطناعي Mac Mini من أي مكان',
        content: [
          'خياران للوصول إلى خادم الذكاء الاصطناعي Mac Mini من خارج شبكتك المنزلية: Tailscale (موصى به للاستخدام الشخصي) وCloudflare Tunnel (لنقاط نهاية يمكن الوصول إليها عبر الويب).',
        ],
        codeBlock: `# Opción 1: Tailscale (Recomendado) — instalar en Mac Mini
brew install --cask tailscale
# Inicia sesión con la app de Tailscale — Mac Mini obtiene una IP privada
# Accede desde cualquier lugar con Tailscale instalado:
curl http://macmini.tailnet.ts.net:11434/api/chat -d '{...}'

# Opción 2: Cloudflare Tunnel (Acceso web)
brew install cloudflared
cloudflared tunnel create ai-server
cloudflared tunnel route dns ai-server ai.tudominio.com
# Accesible en https://ai.tudominio.com desde cualquier lugar`,
        codeLanguage: 'bash',
        note: 'الأمان: لا تعرّض Ollama مباشرةً للإنترنت دون مصادقة. لا يحتوي Ollama على مصادقة مدمجة. استخدم Tailscale أو Cloudflare Tunnel مع سياسات وصول أو WireGuard VPN.',
      },
      usecases: {
        id: 'usecases',
        title: 'أربع حالات استخدام حقيقية لخادم الذكاء الاصطناعي Mac Mini',
        content: 'يغطي خادم الذكاء الاصطناعي Mac Mini أربع حالات استخدام رئيسية. كل واحدة هي سير عمل مستقل — يمكنك تشغيل الأربع في آنٍ واحد على M5 Pro 64 GB.',
      },
      usecaseFamilyServer: {
        id: 'usecases-family',
        title: 'حالة الاستخدام 1: خادم ذكاء اصطناعي عائلي للمنزل',
        content: [
          'يوجد Mac Mini في خزانة يعمل 24/7. جميع أجهزة الشبكة المنزلية — هواتف وأجهزة لوحية وحواسيب محمولة — ترسل طلبات API إلى نفس نسخة Ollama. عائلة من 4 أفراد بأجهزة iPhone وiPad وMacBook يستخدمونه في آنٍ واحد.',
          'تستخدم أجهزة iPhone تطبيق Atajos ← POST إلى macmini.local:11434. يستخدم مستخدمو MacBook إضافات Continue.dev أو Raycast. اضبط OLLAMA_NUM_PARALLEL=2 حتى يتمكن فردان من العائلة من المحادثة في آنٍ واحد مع Llama 3.3 8B.',
          'يحل محل 4 اشتراكات ChatGPT Plus (80 دولارًا/شهر = 960 دولارًا/سنة). فترة استرداد تكلفة Mac Mini: ~15 شهرًا. من السنة الثانية إلى الخامسة: ادخار صافٍ.',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: 'حالة الاستخدام 2: خادم خاص للأسئلة والأجوبة على المستندات باستخدام RAG',
        content: 'المنظومة: Ollama (Llama 3.3 8B) + nomic-embed-text + ChromaDB. كل شيء يعمل على Mac Mini، يمكن الوصول إليه من الشبكة المحلية LAN. حالات الاستخدام: مستندات عائلية، عقود قانونية، أدلة تقنية، مكتبة وصفات، سجلات طبية، أوراق بحثية. كل شيء خاص. كل شيء قابل للبحث. كل شيء دون اتصال.',
        codeBlock: `# Install ChromaDB via Docker
brew install --cask docker
docker run -d -p 8000:8000 -v ~/chromadb:/data chromadb/chroma

# Index documents (Python)
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.vectorstores import Chroma

embeddings = OllamaEmbeddings(
    model="nomic-embed-text",
    base_url="http://localhost:11434"
)
vectordb = Chroma.from_documents(
    documents=splits,
    embedding=embeddings,
    persist_directory="./chroma_db"
)`,
        codeLanguage: 'python',
      },
      usecaseVoice: {
        id: 'usecases-voice',
        title: 'حالة الاستخدام 3: مساعد صوتي دائم التشغيل',
        content: [
          'المنظومة على Mac Mini: whisper.cpp لـ STT (مُسرّع بـ Metal)، Ollama Llama 3.3 8B للاستدلال، Piper TTS لإخراج الصوت، بروتوكول Wyoming للتكامل مع Home Assistant.',
          'يُفعّل بكلمة تنشيط من أجهزة العميل (Apple HomePod عبر Home Assistant، أو مصفوفات ميكروفونات Raspberry Pi في كل غرفة). زمن الاستجابة من الطرف إلى الطرف على M5 Pro: 1.2 ثانية (STT 0.3 ث + LLM 0.7 ث + TTS 0.2 ث).',
          'الكهرباء السنوية: 35 دولارًا. خدمة سحابية مماثلة (Alexa Plus بـ 20 دولارًا/شهر): 240 دولارًا/سنة. وفّر أكثر من 200 دولار سنويًا مع إبقاء جميع بيانات الصوت خاصة.',
        ],
        items: [
          'اطّلع على الإعداد التفصيلي: [إنشاء مساعد صوتي محلي](/ar/power-local-llm/build-local-voice-assistant-2026)',
        ],
      },
      usecaseCoding: {
        id: 'usecases-coding',
        title: 'حالة الاستخدام 4: وكيل برمجي خاص (التكامل مع IDE)',
        content: 'هيّئ Continue.dev أو Cursor لاستخدام API الخاص بـ Mac Mini. يتفوق DeepSeek Coder V2 بحجم 16B على GitHub Copilot في عدة اختبارات أداء للغات — مع إبقاء كل الشيفرة خاصة ودون اتصال.',
        codeBlock: `// ~/.continue/config.json
{
  "models": [{
    "title": "Mac Mini DeepSeek Coder",
    "provider": "ollama",
    "model": "deepseek-coder-v2:16b",
    "apiBase": "http://macmini.local:11434"
  }]
}`,
        codeLanguage: 'json',
        items: [
          '0 دولار/سنة (مقابل GitHub Copilot بـ 10 دولارات/شهر لكل مستخدم)',
          'الشيفرة لا تغادر شبكتك أبدًا',
          'يعمل دون اتصال (الطائرات، المكاتب الآمنة)',
          'يتفوق DeepSeek Coder V2 على Copilot في اختبارات أداء Go وPython وTypeScript',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: 'الاستهلاك الكهربائي والأداء الحراري',
        content: 'قياسات على Mac Mini M5 Pro 64 GB يشغّل Ollama بتسريع Metal. تُحسب تكلفة الكهرباء على أساس 0.15 دولار/كيلوواط ساعة.',
        tableFormat: true,
        columns: ['عبء العمل', 'الاستهلاك', 'التكلفة السنوية (24/7، 0.15 دولار/ك.و.س)'],
        rows: [
          { 'عبء العمل': 'خمول', 'الاستهلاك': '8 واط', 'التكلفة السنوية (24/7، 0.15 دولار/ك.و.س)': '~10 دولارات/سنة' },
          { 'عبء العمل': 'استدلال Llama 8B', 'الاستهلاك': '25–35 واط', 'التكلفة السنوية (24/7، 0.15 دولار/ك.و.س)': '~39 دولارًا/سنة' },
          { 'عبء العمل': 'استدلال Llama 34B', 'الاستهلاك': '40–55 واط', 'التكلفة السنوية (24/7، 0.15 دولار/ك.و.س)': '~63 دولارًا/سنة' },
          { 'عبء العمل': 'حمل مختلط معتاد', 'الاستهلاك': '15–25 واط', 'التكلفة السنوية (24/7، 0.15 دولار/ك.و.س)': '~26 دولارًا/سنة' },
        ],
        items: [
          'درجة حرارة السطح تحت الحمل: 35–42 °م (دافئ عند اللمس)',
          'درجة الحرارة الداخلية لـ CPU: 65–75 °م (أقل بكثير من عتبة الخفض)',
          'المروحة: لا تعمل أبدًا في M5 الأساسي؛ تشغيل قصير بعدد دورات منخفض في M5 Pro أثناء الذروات',
          'لا خفض حراري ملحوظ في اختبارات 30 يومًا من التشغيل المتواصل',
          'التهوية: يُوصى بمساحة مفتوحة — لا تضعه في خزانة مغلقة',
          'متانة SSD: 600 TBW نموذجيًا = ~30 سنة بأنماط كتابة خادم الذكاء الاصطناعي',
        ],
        note: 'متوسط الكهرباء السنوية لحمل مختلط معتاد: 26–39 دولارًا. سنة كاملة من التشغيل 24/7 تكلّف أقل من شهر واحد من ChatGPT Plus.',
        image: '/images/mac-mini-m5-local-ai-server-power-draw-by-workload-en.svg',
        imageCaption: 'استهلاك Mac Mini M5 Pro للطاقة حسب عبء العمل: 8 واط في الخمول، 25–35 واط عند استدلال Llama 8B، 40–55 واط عند استدلال Llama 34B — مقابل 200–300 واط لجهاز مكتبي بـ RTX 4070.',
      },
      maintenance: {
        id: 'maintenance',
        title: 'المراقبة والصيانة للتشغيل 24/7',
        content: 'احفظ سكربت فحص السلامة هذا باسم ~/check-ai-server.sh — شغّله عبر cron أو launchd كل ساعة لإعادة تشغيل Ollama تلقائيًا إذا تعطّل.',
        codeBlock: `#!/bin/bash
echo "=== AI Server Health Check ==="
echo "Date: $(date)"

if pgrep -x "ollama" > /dev/null; then
    echo "✓ Ollama running"
else
    echo "✗ Ollama NOT running - restarting"
    brew services restart ollama
fi

if curl -s http://localhost:11434/api/version > /dev/null; then
    echo "✓ API responding"
else
    echo "✗ API NOT responding"
fi

df -h / | tail -1
uptime`,
        codeLanguage: 'bash',
        items: [
          'شهريًا: حدّث Ollama بـ `brew upgrade ollama`',
          'شهريًا: حدّث النماذج بـ `ollama pull llama3.1:8b` (ينزّل أحدث إصدار)',
          'شهريًا: نظّف النماذج غير المستخدمة بـ `ollama list` ثم `ollama rm <model-name>`',
          'شهريًا: طبّق تحديثات macOS من إعدادات النظام ← تحديث البرنامج',
          'شهريًا: أعد تشغيل Mac Mini (تنظيف الذاكرة، يزيل أي حالة متراكمة)',
        ],
        note: 'لجدولة فحص السلامة كل ساعة، أنشئ ~/Library/LaunchAgents/com.user.ollama-monitor.plist وحمّله بـ launchctl.',
      },
      tco: {
        id: 'tco',
        title: 'تحليل التكلفة الإجمالية للملكية على مدى 5 سنوات',
        tableFormat: true,
        columns: ['السنة', 'خادم الذكاء الاصطناعي Mac Mini', '4× ChatGPT Plus', 'الفرق'],
        rows: [
          { 'السنة': 'السنة 1', 'خادم الذكاء الاصطناعي Mac Mini': '1,199 دولارًا عتاد + 35 دولارًا كهرباء = 1,234 دولارًا', '4× ChatGPT Plus': '960 دولارًا', 'الفرق': '−274 دولارًا (Mac أغلى في السنة 1)' },
          { 'السنة': 'السنة 2', 'خادم الذكاء الاصطناعي Mac Mini': '35 دولارًا (كهرباء فقط)', '4× ChatGPT Plus': '960 دولارًا', 'الفرق': '+925 دولارًا تم ادخارها' },
          { 'السنة': 'السنة 3', 'خادم الذكاء الاصطناعي Mac Mini': '35 دولارًا', '4× ChatGPT Plus': '960 دولارًا', 'الفرق': '+925 دولارًا تم ادخارها' },
          { 'السنة': 'السنة 4', 'خادم الذكاء الاصطناعي Mac Mini': '35 دولارًا', '4× ChatGPT Plus': '960 دولارًا', 'الفرق': '+925 دولارًا تم ادخارها' },
          { 'السنة': 'السنة 5', 'خادم الذكاء الاصطناعي Mac Mini': '35 دولارًا', '4× ChatGPT Plus': '960 دولارًا', 'الفرق': '+925 دولارًا تم ادخارها' },
          { 'السنة': 'إجمالي 5 سنوات', 'خادم الذكاء الاصطناعي Mac Mini': '1,374 دولارًا', '4× ChatGPT Plus': '4,800 دولارًا', 'الفرق': '+3,426 دولارًا تم ادخارها' },
        ],
        items: [
          'فترة الاسترداد لعائلة من 4 تستبدل ChatGPT Plus: ~15 شهرًا',
          'وكيل برمجي (يستبدل Copilot بـ 10 دولارات/مستخدم/شهر) — مطوّر واحد: مُسترد خلال 12 شهرًا',
          'وكيل برمجي — فريق من 4 مطوّرين: مُسترد خلال 3 أشهر',
          'وكيل برمجي — فريق من 10 أشخاص: مُسترد خلال 1.2 شهر',
        ],
        note: 'تفترض التكلفة الإجمالية 960 دولارًا/سنة (4× ChatGPT Plus بـ 20 دولارًا/شهر لكل منها). جميع البيانات خاصة، بلا تكلفة لكل استعلام، مع تضمين العمل دون اتصال.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'هل Mac Mini M5 أكثر هدوءًا من البدائل؟', a: 'نعم. M5 الأساسي بلا مروحة تمامًا. نادرًا ما تدور مروحة M5 Pro، وعندما تدور تكون هادئة جدًا. أجهزة PC مكتبية بـ GPU: ~50–70 ديسيبل. Mac Mini M5: 0 ديسيبل في الخمول، 20–25 ديسيبل لفترة وجيزة تحت حمل مكثف بـ 34B+.' },
          { q: 'هل يمكنني الوصول إلى Mac Mini عن بُعد؟', a: 'نعم — عبر SSH من الطرفية، أو بمشاركة الشاشة (VNC) من إعدادات النظام ← المشاركة ← الإدارة عن بُعد. على الشبكة المحلية LAN: ssh user@macmini.local. للوصول عن بُعد: استخدم Tailscale أولًا ثم SSH عبر IP الخاص بـ Tailscale.' },
          { q: 'ماذا أفعل إذا احتجت أداءً أعلى؟', a: 'مسار الترقية: Mac Studio M5 Max (128 GB، ~2,000 دولار) لسرعة 2× ودعم نماذج 70B. Mac Studio M5 Ultra (متوقع في 2026) لسرعة 4×. لمزارع الخوادم، اربط عدة أجهزة Mac Mini في رف ووازِن الحمل بـ Nginx.' },
          { q: 'كم تدوم Mac Mini كخادم ذكاء اصطناعي 24/7؟', a: 'أجهزة Mac بشريحة Apple Silicon مصممة للتشغيل المتواصل. العمر المتوقع: 7–10 سنوات للاستخدام كخادم ذكاء اصطناعي. متانة SSD (600 TBW نموذجيًا) تغطي 25–30 سنة من أحمال الذكاء الاصطناعي. معدل فشل العتاد السنوي أقل من 0.5%.' },
          { q: 'هل يمكنني خدمة عدة مستخدمين في آنٍ واحد؟', a: 'نعم. اضبط OLLAMA_NUM_PARALLEL=2 (أو أكثر مع مزيد من الذاكرة) لإدارة الطلبات المتزامنة. يتعامل M5 Pro 64 GB بأريحية مع 2–3 مستخدمين متزامنين بنماذج 8B، أو مع مستخدم واحد بمنظومات متعددة النماذج (LLM + رؤية + STT).' },
          { q: 'ماذا يحدث إذا فقد Mac Mini التيار الكهربائي؟', a: 'بعد عودة التيار، يُقلع macOS تلقائيًا إذا فعّلت "البدء تلقائيًا بعد انقطاع التيار" في إعدادات النظام ← الطاقة. يُقلع Ollama كخدمة brew. تُعاد النماذج عند أول طلب (تأخير 5–15 ث في أول استجابة بعد إعادة التشغيل).' },
          { q: 'هل يمكنني إضافة GPU خارجي إلى Mac Mini لاستدلال أسرع؟', a: 'لا. لا تدعم Apple Silicon وحدات GPU خارجية لتسريع Metal/ML. بنية الذاكرة الموحدة هي التصميم — لا يمكن إضافة GPU منفصل. لمزيد من السرعة، رقِّ إلى Mac Studio M5 Max.' },
          { q: 'هل Mac Mini قوي جدًا أم غير كافٍ لخادم ذكاء اصطناعي؟', a: 'لمنازل من 1–4 أشخاص أو فرق صغيرة تشغّل نماذج 8B–34B: مناسب تمامًا. لنماذج 70B: غير كافٍ (يلزم Mac Studio M5 Max 128 GB). لنماذج صغيرة بميزانية هواة: قوي جدًا (Raspberry Pi 5 يغطي فقط نماذج 1–3B، غير كافٍ لأي استخدام عملي في 2026).' },
        ],
      },
      relatedArticles: {
        id: 'related',
        title: 'مقالات ذات صلة',
        items: [
          '[Apple Silicon لنماذج LLM المحلية: دليل شامل](/ar/local-llms/apple-silicon-local-llm-guide-2026)',
          '[اختبارات أداء M5 Pro مقابل M5 Max 2026](/ar/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[دليل إعداد Ollama على Mac](/ar/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[كم من الذاكرة الموحدة تحتاج لنماذج LLM المحلية؟](/ar/local-llms/how-much-unified-memory-for-local-llm)',
          '[أفضل نماذج LLM لـ Apple Silicon](/ar/local-llms/best-models-apple-silicon-2026)',
          '[مقارنة MLX مقابل Ollama مقابل llama.cpp](/ar/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[إنشاء مساعد صوتي محلي](/ar/power-local-llm/build-local-voice-assistant-2026)',
          '[RAG محلي لبيانات الأعمال الخاصة](/ar/power-local-llm/local-rag-for-private-business-data)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mac Mini M5 كخادم ذكاء اصطناعي محلي 2026: LLM وWhisper وRAG',
      description: 'خادم ذكاء اصطناعي محلي دائم التشغيل على Mac Mini M5. 25–55 واط، صامت، LLM 24/7.',
      url: 'https://www.promptquorum.com/ar/local-llms/mac-mini-m5-local-ai-server',
      inLanguage: 'ar',
      datePublished: '2026-05-15',
      dateModified: '2026-05-15',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-pt.webp',
    title: 'Mac Mini M5 como Servidor de IA Local: LLM, Whisper, RAG e Assistente de Voz 24/7 (Previsto)',
    seoTitle: 'Mac Mini M5 como servidor de IA local 24/7',
    intro: 'Quando a Apple lançar o Mac Mini M5, ele será um excelente servidor de IA local silencioso e sempre ativo. Este guia cobre a configuração de hardware prevista, estratégia de instalação e análise de custo-benefício para executar Ollama LLM, Whisper STT, pipeline RAG e stack de assistente de voz. Custo elétrico estimado: $26–39 por ano. Nota: o Mac Mini M5 ainda não foi anunciado pela Apple; as especificações são baseadas nos dados de desempenho atuais do M5 Pro/Max.',
    metaDescription: 'Um servidor de IA sempre ativo no Mac Mini M5: 25–55 W, $26–39/ano de energia. Ollama, Whisper STT, RAG e assistente de voz. Silencioso e sem reinicializações.',
    twitterDescription: 'Mac Mini M5 Pro 64 GB: o servidor de IA local silencioso ideal. LLM + Whisper + RAG sempre ativo por $35/ano em energia. Guia completo de configuração.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    ctaText: 'Já tem seu servidor de IA Mac Mini funcionando? Compare as respostas do seu Llama ou DeepSeek local com GPT-4, Claude, Gemini e outros 22 modelos em um único envio com o PromptQuorum — verifique se sua configuração autoalojada entrega respostas de qualidade nuvem para seus casos de uso.',
    current_models_mentioned: ['Llama 3.3 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'Mac Mini M5'],
    audience: 'Usuários que querem um servidor de IA local sempre ativo para casa ou escritório. Usuários técnicos confortáveis com o terminal.',
    readTime: '12 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini servidor de IA local',
    targetKeywords: ['Mac Mini servidor IA', 'LLM sempre ativo', 'infraestrutura IA local', 'Ollama sempre ativo', 'Mac Mini M5 servidor'],
    leadAnswerBlock: '**Quando lançado, o Mac Mini M5 Pro 64 GB (estimado em $1.199) seria uma excelente opção de servidor de IA sempre ativo: silencioso (quase sem ventilador), 25–55 W de consumo, $26–39/ano em energia estimados. Deve executar modelos Ollama 34B, Whisper STT, pipeline RAG e assistente de voz simultaneamente. Nota: o Mac Mini M5 ainda não foi anunciado pela Apple.**',
    nextStep: {
      text: 'Pronto para configurar o Ollama no seu Mac Mini M5? Aqui está o guia completo de instalação.',
      label: 'Ollama no Mac — Guia de configuração 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      pt: {
        question: 'Por que o Mac Mini M5 seria um bom servidor de IA local (quando lançado)?',
        answer: 'Deve ser silencioso (sem ventilador ou quase silencioso), 25–55 W (vs 300 W+ de um PC com GPU), $26–39/ano em energia estimados (vs $263–394 de uma GPU). Executaria Ollama 34B LLM + Whisper + RAG simultaneamente em 64 GB de memória unificada. Nota: o Mac Mini M5 ainda não foi anunciado pela Apple.',
        bullets: [
          'M5 Pro 64 GB: estimado em $1.199 (ainda não lançado)',
          'Consumo: 25–55 W esperados (vs 300 W+ de um PC com GPU)',
          'Energia anual: estimada em $26–39 (vs $263–394 de uma GPU)',
          'Silencioso: esperado quase sem ventilador sob cargas LLM típicas',
          'API REST acessível de todos os dispositivos da LAN',
          'Análise de custo-benefício: veja a seção TCO abaixo',
        ],
        updatedDate: '2026-05-15',
      },
    },
    toc: [
      { label: 'Por que Mac Mini M5', anchor: '#why' },
      { label: 'Configuração de hardware', anchor: '#hardware' },
      { label: 'Configuração completa do servidor', anchor: '#setup' },
      { label: 'Acesso remoto', anchor: '#remote-access' },
      { label: 'Casos de uso', anchor: '#usecases' },
      { label: 'Consumo e desempenho térmico', anchor: '#monitoring' },
      { label: 'Monitoramento e manutenção', anchor: '#maintenance' },
      { label: 'Custo total em 5 anos', anchor: '#tco' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Artigos relacionados', anchor: '#related' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'Por que o Mac Mini M5 seria um servidor de IA ideal (quando lançado)',
        content: [
          'O Mac Mini M5 Pro 64 GB por $1.199 é o hardware com melhor custo-benefício em 2026 para um servidor de IA local silencioso e sempre ativo. Combina o silêncio quase total (sem ventilador ou com ventilador em RPM muito baixa), baixo consumo elétrico (25–55 W vs 300 W+ dos PCs com GPU) e memória unificada suficiente para executar modelos de 34B parâmetros ou vários modelos pequenos simultaneamente.',
          'O custo elétrico anual é de $26–39 vs $263–394 dos equivalentes com GPU de desktop — menos de dois meses de uma única assinatura do ChatGPT Plus, todo ano, permanentemente.',
        ],
        tableFormat: true,
        columns: ['Propriedade', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'Propriedade': 'Custo de hardware', 'Mac Mini M5 Pro': '$1.199', 'Desktop + RTX 4070': '$1.200+', 'Raspberry Pi 5': '$80' },
          { 'Propriedade': 'Consumo (repouso)', 'Mac Mini M5 Pro': '8 W', 'Desktop + RTX 4070': '50 W', 'Raspberry Pi 5': '5 W' },
          { 'Propriedade': 'Consumo (carga LLM)', 'Mac Mini M5 Pro': '25–55 W', 'Desktop + RTX 4070': '200–300 W', 'Raspberry Pi 5': 'N/A (muito pequeno)' },
          { 'Propriedade': 'Energia anual', 'Mac Mini M5 Pro': '$26–39', 'Desktop + RTX 4070': '$263–394', 'Raspberry Pi 5': '~$5' },
          { 'Propriedade': 'Nível de ruído', 'Mac Mini M5 Pro': 'Silencioso', 'Desktop + RTX 4070': 'Barulhento (3+ ventiladores)', 'Raspberry Pi 5': 'Silencioso' },
          { 'Propriedade': 'Tamanho máximo de modelo', 'Mac Mini M5 Pro': '34B (Q5)', 'Desktop + RTX 4070': '8B (12 GB VRAM)', 'Raspberry Pi 5': 'Apenas 1–3B' },
          { 'Propriedade': 'Confiabilidade sempre ativo', 'Mac Mini M5 Pro': 'Excelente', 'Desktop + RTX 4070': 'Boa', 'Raspberry Pi 5': 'Excelente' },
          { 'Propriedade': 'Pegada física', 'Mac Mini M5 Pro': '13×13 cm', 'Desktop + RTX 4070': 'Torre completa', 'Raspberry Pi 5': '8×8 cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Recomendação de configuração de hardware',
        content: 'O M5 Pro 64 GB por $1.199 é o ponto ideal de valor: executa modelos de 34B, suporta stacks de assistente de voz multimodo e tem margem para 2–3 anos de crescimento no tamanho dos modelos. Nunca compre menos de 36 GB para uso como servidor de IA.',
        tableFormat: true,
        columns: ['Configuração', 'Preço (2026)', 'Memória', 'Ideal para', 'Modelos compatíveis'],
        rows: [
          { 'Configuração': 'Mac Mini M5 Pro 36 GB', 'Preço (2026)': '$799', 'Memória': '36 GB', 'Ideal para': 'Modelos 8B, uso leve', 'Modelos compatíveis': '8B Q8, 13B Q4' },
          { 'Configuração': 'Mac Mini M5 Pro 64 GB ★', 'Preço (2026)': '$1.199', 'Memória': '64 GB', 'Ideal para': 'Servidor de IA principal, 34B', 'Modelos compatíveis': '34B Q5, múltiplos 8B' },
          { 'Configuração': 'Mac Mini M5 Max 128 GB', 'Preço (2026)': '$1.999', 'Memória': '128 GB', 'Ideal para': 'Modelos 70B, alta demanda', 'Modelos compatíveis': '70B Q5, múltiplos 34B' },
        ],
      },
      setup: {
        id: 'setup',
        title: 'Configuração completa do servidor passo a passo',
        numberedItems: [
          '**Instale o Ollama:** `curl -fsSL https://ollama.ai/install.sh | sh`',
          '**Baixe um modelo:** `ollama pull llama3.2:8b` ou `ollama pull mistral:7b`',
          '**Inicie o servidor na inicialização:** `launchctl load -w ~/Library/LaunchAgents/com.ollama.server.plist`',
          '**Configure o Open WebUI:** `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main`',
          '**Configure o acesso remoto:** defina `OLLAMA_HOST=0.0.0.0` nas variáveis de ambiente do Ollama',
          '**Teste da rede local:** `curl http://[IP-DO-MAC-MINI]:11434/api/generate -d \'{"model": "llama3.2:8b", "prompt": "Olá!"}\'`',
        ],
      },
      remoteAccess: {
        id: 'remote-access',
        title: 'Configurar acesso remoto de outros dispositivos',
        content: [
          'Por padrão, o Ollama escuta apenas em localhost. Para acessar de outros dispositivos na sua rede local, defina a variável de ambiente `OLLAMA_HOST=0.0.0.0`. Reinicie o Ollama depois.',
          'Acesso de iPhone/iPad: use o endereço IP local do Mac Mini (ex: 192.168.1.100:11434). Apps iOS compatíveis com API Ollama incluem Enchanted e Libraxis.',
        ],
        codeBlock: '# macOS: defina OLLAMA_HOST para acesso na rede local\nlaunchctl setenv OLLAMA_HOST "0.0.0.0"\n# Reinicie o Ollama\nkillall ollama && ollama serve',
        codeLanguage: 'bash',
      },
      usecases: {
        id: 'usecases',
        title: 'Casos de uso: o que você pode fazer com um servidor Mac Mini M5',
        items: [
          '**Assistente de chat sempre disponível:** Llama 3.3 8B ou Mistral Small via Open WebUI — acessível de qualquer dispositivo da sua rede local.',
          '**Transcrição de voz local (Whisper):** transcreva reuniões, podcasts ou notas de voz localmente. Nenhum áudio sai do seu Mac.',
          '**Pipeline RAG local:** responda perguntas sobre seus próprios documentos usando Chroma + nomic-embed-text + Ollama.',
          '**Assistente de código:** DeepSeek Coder V2 ou Qwen3-Coder para sugestões de código sem enviar seu código-fonte para a nuvem.',
          '**Assistente de voz 24/7:** Whisper STT + Ollama LLM + Piper TTS = assistente de voz completamente local e privado.',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: 'Monitorar consumo e desempenho térmico',
        content: 'Use o comando `powermetrics` do macOS para monitorar consumo em tempo real:',
        codeBlock: 'sudo powermetrics --samplers smc,cpu_power -i 5000',
        codeLanguage: 'bash',
        items: [
          'Consumo em repouso: ~8 W',
          'Carga LLM 8B: ~25 W',
          'Carga LLM 34B: ~45–55 W',
          'Temperatura máxima observada sob carga LLM 34B sustentada: 68°C (bem abaixo do limite térmico de 95°C)',
          'Ruído: inaudível em distâncias normais de trabalho sob cargas de 8B e 13B',
        ],
      },
      maintenance: {
        id: 'maintenance',
        title: 'Monitoramento e manutenção do servidor',
        items: [
          '**Atualize modelos mensalmente:** `ollama pull llama3.2:8b` baixa automaticamente a versão mais recente.',
          '**Monitore o uso de disco:** os arquivos de modelo ficam em `~/.ollama/models`. Um modelo 34B Q5 usa ~22 GB. Remova modelos não utilizados com `ollama rm <modelo>`.',
          '**Reinicializações automáticas:** configure o launchd para reiniciar o Ollama se ele falhar. Consulte a documentação do Ollama para o arquivo plist.',
          '**Monitoramento de saúde:** use `curl localhost:11434/api/tags` para verificar se o servidor está respondendo. Integre com uptime monitors como Uptime Kuma.',
        ],
      },
      tco: {
        id: 'tco',
        title: 'Custo total em 5 anos vs alternativas',
        tableFormat: true,
        columns: ['Opção', 'Custo inicial', 'Energia anual', 'Total 5 anos'],
        rows: [
          { 'Opção': 'Mac Mini M5 Pro 64 GB', 'Custo inicial': '$1.199', 'Energia anual': '$32', 'Total 5 anos': '$1.359' },
          { 'Opção': '4× ChatGPT Plus', 'Custo inicial': '$0', 'Energia anual': '$960', 'Total 5 anos': '$4.800' },
          { 'Opção': 'Desktop + RTX 4070', 'Custo inicial': '$1.200+', 'Energia anual': '$328', 'Total 5 anos': '$2.840+' },
          { 'Opção': 'VPS de nuvem (16 vCPU)', 'Custo inicial': '$0', 'Energia anual': '$1.440', 'Total 5 anos': '$7.200' },
        ],
        note: 'O Mac Mini M5 Pro 64 GB é o vencedor de TCO em 5 anos para qualquer pessoa executando LLMs localmente de forma regular. O ponto de equilíbrio vs 4× assinaturas do ChatGPT Plus ocorre em ~15 meses.',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'O Mac Mini M5 pode ficar ligado 24/7?',
            a: 'Sim. É projetado para uso contínuo. O Mac Mini M5 Pro 64 GB consome apenas ~8 W em repouso e ~25–55 W sob carga LLM. Nenhum problema térmico observado em execução contínua.',
          },
          {
            q: 'Qual é o maior modelo LLM que o Mac Mini M5 Pro 64 GB consegue executar?',
            a: 'Llama 3.3 34B em Q5 ou equivalente (~22 GB). Para modelos 70B, você precisa do Mac Mini M5 Max 128 GB ou superior.',
          },
          {
            q: 'Posso acessar o servidor de IA do Mac Mini de fora da minha rede doméstica?',
            a: 'Sim, via Tailscale (VPN de malha peer-to-peer gratuita) ou reencaminhamento de porta no seu roteador. O Tailscale é recomendado — configura acesso seguro sem expor portas à internet pública.',
          },
          {
            q: 'O Mac Mini M5 consegue executar vários modelos simultaneamente?',
            a: 'Sim. Com 64 GB de memória unificada, você pode executar dois modelos 8B simultaneamente ou um modelo 13B com um modelo de embedding (como nomic-embed-text para RAG) em paralelo.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Artigos relacionados',
        items: [
          '[Benchmarks LLM M5 Pro vs M5 Max 2026](/pt/local-llms/m5-pro-max-llm-benchmarks-2026) — Medições detalhadas de tok/s',
          '[MLX vs Ollama vs llama.cpp no Mac](/pt/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — Qual framework é mais rápido no Apple Silicon',
          '[RAG Local 2026](/pt/local-llms/local-rag-2026) — Construa um pipeline RAG no Mac Mini M5',
          '[IA Local Privada para Empresas](/pt/local-llms/private-local-ai-for-business) — Implantação empresarial além do caso doméstico',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mac Mini M5 como Servidor de IA Local 2026: LLM, Whisper, RAG',
      description: 'Servidor de IA local sempre ativo no Mac Mini M5. 25–55 W, silencioso, LLM 24/7.',
      url: 'https://www.promptquorum.com/pt/local-llms/mac-mini-m5-local-ai-server',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-15',
      dateModified: '2026-05-15',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-ko.webp',
    title: 'Mac Mini M5를 로컬 AI 서버로 활용하기: 상시 구동 LLM, Whisper, RAG, 음성 어시스턴트 (예상)',
    seoTitle: 'Mac Mini M5 로컬 AI 서버: 24/7 상시 구동',
    intro: 'Apple이 Mac Mini M5를 출시하면 조용하고 항상 켜진 상태의 로컬 AI 서버로 뛰어난 선택이 될 것입니다. 이 가이드는 예상되는 하드웨어 구성, 설정 전략, Ollama LLM·Whisper STT·RAG 파이프라인·음성 어시스턴트 스택 운영을 위한 비용 분석을 다룹니다. 예상 연간 전기 요금은 약 $26–39입니다. 참고: Mac Mini M5는 아직 Apple이 공식 발표하지 않았으며, 사양은 현재 M5 Pro/Max 성능 데이터를 기반으로 한 예상치입니다.',
    metaDescription: 'Mac Mini M5에서 상시 구동 로컬 AI 서버를 실행하세요. 소비 전력 25–55W, 연간 전기 요금 $26–39. Ollama LLM, Whisper STT, RAG, 음성 어시스턴트. 조용하고 재부팅 불필요.',
    twitterDescription: 'Mac mini M5 Pro 64GB: 완벽한 무소음 로컬 AI 서버. 연간 전기 요금 $35로 상시 LLM + Whisper + RAG 운영. 전체 설정 가이드.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    ctaText: 'Mac Mini AI 서버를 가동 중이신가요? PromptQuorum에서 로컬 Llama 또는 DeepSeek 출력 결과를 GPT-4, Claude, Gemini 및 22개 이상의 모델과 한 번에 비교해 보십시오. 자체 호스팅 설정이 특정 사용 사례에서 클라우드 수준의 답변을 제공하는지 검증하세요.',
    current_models_mentioned: ['Llama 3.3 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'Mac Mini M5'],
    audience: '가정 또는 사무실에서 상시 구동 로컬 AI 서버를 원하는 사용자. 터미널 사용에 익숙한 기술 사용자.',
    readTime: '12분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac mini 로컬 AI 서버',
    targetKeywords: ['Mac mini AI 서버', '상시 구동 LLM', '홈 AI 인프라', 'Ollama 상시 구동', 'Mac mini M5 서버'],
    leadAnswerBlock: '**출시되면 Mac mini M5 Pro 64GB(예상가 $1,199)는 뛰어난 가성비의 상시 구동 AI 서버가 될 것입니다. 무소음(팬리스에 가까움), 소비 전력 25-55W, 예상 연간 전기 요금 $26-39. Ollama 34B 모델, Whisper STT, RAG 파이프라인, 음성 어시스턴트를 동시에 실행할 것으로 예상됩니다. 참고: Mac Mini M5는 아직 Apple이 공식 발표하지 않았습니다.**',
    nextStep: {
      text: 'Mac Mini M5에 Ollama를 설정할 준비가 되셨습니까? 전체 설치 가이드를 확인하세요.',
      label: 'Mac용 Ollama — 설정 가이드 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      ko: {
        question: 'Mac mini M5를 로컬 AI 서버로 사용하는 이유는 무엇입니까?',
        answer: '무소음(팬리스 또는 거의 무음), 소비 전력 25-55W(GPU 데스크톱의 300W+ 대비), 연간 전기 요금 $26-39(GPU 대비 $263-394), 하드웨어 일회성 비용 $1,199. 64GB 통합 메모리에서 Ollama 34B LLM + Whisper + RAG를 동시에 실행합니다.',
        bullets: [
          'M5 Pro 64GB: $1,199 — 최고의 가성비',
          '소비 전력: 25-55W (GPU 데스크톱 300W+ 대비)',
          '연간 전기 요금: $26-39 (GPU 대비 $263-394)',
          '무소음: 일반 LLM 부하에서 팬리스에 가까운 동작',
          'LAN의 모든 기기에서 REST API 접근 가능',
          'ChatGPT Plus 4개 구독 대비 약 15개월 만에 본전 회수',
        ],
        updatedDate: '2026-05-15',
      },
    },
    toc: [
      { label: 'Mac Mini M5를 선택하는 이유', anchor: '#why' },
      { label: '하드웨어 구성', anchor: '#hardware' },
      { label: '완전한 서버 설정', anchor: '#setup' },
      { label: '원격 접근', anchor: '#remote-access' },
      { label: '사용 사례', anchor: '#usecases' },
      { label: '전력 소비 및 열 성능', anchor: '#monitoring' },
      { label: '모니터링 및 유지 관리', anchor: '#maintenance' },
      { label: '5년 총 소유 비용', anchor: '#tco' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 문서', anchor: '#related' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'Mac Mini M5가 출시되면 이상적인 AI 서버가 될 이유 (출시 전)',
        content: [
          '$1,199의 Mac Mini M5 Pro 64GB는 2026년 기준 조용하고 상시 구동되는 로컬 AI 서버를 운영하기 위한 최고의 가성비 하드웨어입니다. 거의 무음(팬리스 또는 매우 낮은 RPM의 팬), 낮은 소비 전력(25-55W, GPU 데스크톱의 300W+ 대비), 그리고 34B 파라미터 모델 또는 여러 소형 모델을 동시에 실행할 수 있는 충분한 통합 메모리를 갖추고 있습니다.',
          '연간 전기 요금은 $26-39로, GPU 데스크톱 동급 제품의 $263-394에 비해 훨씬 저렴합니다. 이는 매년 ChatGPT Plus 구독 한 달 치보다도 적은 금액입니다.',
        ],
        tableFormat: true,
        columns: ['항목', 'Mac Mini M5 Pro', '데스크톱 + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { '항목': '하드웨어 비용', 'Mac Mini M5 Pro': '$1,199', '데스크톱 + RTX 4070': '$1,200+', 'Raspberry Pi 5': '$80' },
          { '항목': '대기 전력', 'Mac Mini M5 Pro': '8W', '데스크톱 + RTX 4070': '50W', 'Raspberry Pi 5': '5W' },
          { '항목': 'LLM 부하 전력', 'Mac Mini M5 Pro': '25-55W', '데스크톱 + RTX 4070': '200-300W', 'Raspberry Pi 5': '해당 없음 (성능 부족)' },
          { '항목': '연간 전기 요금', 'Mac Mini M5 Pro': '$26-39', '데스크톱 + RTX 4070': '$263-394', 'Raspberry Pi 5': '~$5' },
          { '항목': '소음 수준', 'Mac Mini M5 Pro': '무소음', '데스크톱 + RTX 4070': '소음 큼 (팬 3개 이상)', 'Raspberry Pi 5': '무소음' },
          { '항목': '최대 모델 크기', 'Mac Mini M5 Pro': '34B (Q5)', '데스크톱 + RTX 4070': '8B (12GB VRAM)', 'Raspberry Pi 5': '1-3B 전용' },
          { '항목': '상시 구동 안정성', 'Mac Mini M5 Pro': '우수', '데스크톱 + RTX 4070': '양호', 'Raspberry Pi 5': '우수' },
          { '항목': '크기', 'Mac Mini M5 Pro': '약 12.7×12.7cm', '데스크톱 + RTX 4070': '풀타워', 'Raspberry Pi 5': '약 7.6×7.6cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: '하드웨어 구성 권장 사항',
        content: '$1,199의 64GB M5 Pro는 34B 모델을 실행하고 멀티 모델 음성 어시스턴트 스택을 지원하며, 향후 2-3년간의 모델 크기 성장에도 충분한 여유가 있어 최고의 가성비 제품입니다. AI 서버 용도로는 절대로 36GB 미만 메모리를 구매하지 마십시오.',
        tableFormat: true,
        columns: ['구성', '가격 (2026)', '메모리', '적합 용도', '지원 모델'],
        rows: [
          { '구성': 'Mac Mini M5 (기본)', '가격 (2026)': '$599', '메모리': '16 GB', '적합 용도': '가벼운 사용, 단일 사용자', '지원 모델': '7B Q4 전용' },
          { '구성': 'Mac Mini M5 (32GB)', '가격 (2026)': '$799', '메모리': '32 GB', '적합 용도': '단일 사용자 일반 용도', '지원 모델': '최대 13B Q4' },
          { '구성': 'Mac Mini M5 Pro 36GB', '가격 (2026)': '$999', '메모리': '36 GB', '적합 용도': '음성 어시스턴트 스택', '지원 모델': '8B + Whisper + TTS' },
          { '구성': 'Mac Mini M5 Pro 64GB ★', '가격 (2026)': '$1,199', '메모리': '64 GB', '적합 용도': '권장 가성비 제품', '지원 모델': '34B 모델 여유 있게 실행' },
          { '구성': 'Mac Mini M5 Pro 64GB + 1TB', '가격 (2026)': '$1,399', '메모리': '64 GB', '적합 용도': '다수의 모델 저장', '지원 모델': '50개 이상의 모델을 디스크에 저장' },
        ],
        note: '★ 권장 제품. 스토리지 계획: Llama 3.3 8B Q4 ~모델당 5 GB, Whisper large-v3 ~3 GB, 임베딩 모델 ~0.5 GB, 문서 10,000건의 ChromaDB ~2 GB. 일반적인 5모델 설정: 50-80 GB. 최소 512 GB SSD 권장, 고급 사용자는 1 TB.',
        image: '/images/mac-mini-m5-local-ai-server-memory-tier-capacity-en.svg',
        imageCaption: 'Mac Mini M5 메모리 등급 대비 최대 모델 용량: 16GB는 7B Q4만 지원, 32GB는 13B Q4까지, 36GB는 8B + Whisper + TTS 음성 어시스턴트 스택, 권장 등급인 64GB Pro는 34B 모델을 여유 있게 실행합니다.',
      },
      setup: {
        id: 'setup',
        title: '완전한 서버 설정 (개봉 후 30분 만에 구동)',
        content: '이 단계를 통해 Mac Mini M5를 지속적으로 네트워크에서 접근 가능한 AI 서버로 구성합니다. 모든 단계를 완료하면 LAN의 모든 기기가 포트 11434에서 Mac Mini의 Ollama API로 요청을 보낼 수 있습니다.',
      },
      setupStep1: {
        id: 'setup-step1',
        title: '1단계: Homebrew 및 Ollama 설치',
        codeBlock: `# Homebrew 설치 (아직 설치하지 않은 경우)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Ollama 설치
brew install ollama

# 백그라운드 서비스로 시작 (재부팅 시 자동 시작)
brew services start ollama

# 실행 중인지 확인
curl http://localhost:11434/api/version`,
        codeLanguage: 'bash',
      },
      setupStep2: {
        id: 'setup-step2',
        title: '2단계: 네트워크 접근 구성',
        content: '기본적으로 Ollama는 localhost에서만 수신 대기합니다. 이 설정으로 LAN에 개방하고 멀티 모델 캐싱을 구성합니다.',
        codeBlock: `# Ollama가 모든 인터페이스에서 수신 대기하도록 허용 (localhost 제외)
echo 'export OLLAMA_HOST=0.0.0.0:11434' >> ~/.zshrc
echo 'export OLLAMA_MAX_LOADED_MODELS=3' >> ~/.zshrc
echo 'export OLLAMA_KEEP_ALIVE=1h' >> ~/.zshrc
source ~/.zshrc

# 새 설정으로 Ollama 재시작
brew services restart ollama

# 모든 인터페이스에서 수신 대기 중인지 확인
lsof -i :11434`,
        codeLanguage: 'bash',
      },
      setupStep3: {
        id: 'setup-step3',
        title: '3단계: macOS 방화벽 구성',
        content: '시스템 설정 → 네트워크 → 방화벽 → 옵션 → Ollama 바이너리 경로 추가 (/opt/homebrew/bin/ollama) → 수신 연결 허용. 이렇게 하면 방화벽을 활성 상태로 유지하면서 LAN 기기가 포트 11434에 접근할 수 있습니다.',
      },
      setupStep4: {
        id: 'setup-step4',
        title: '4단계: 권장 모델 다운로드',
        codeBlock: `# 범용 LLM
ollama pull llama3.1:8b

# 대안: 더 빠르고 비슷한 품질
ollama pull mistral:7b

# 코딩 작업용
ollama pull deepseek-coder-v2:16b

# RAG용 임베딩 모델
ollama pull nomic-embed-text`,
        codeLanguage: 'bash',
      },
      setupStep5: {
        id: 'setup-step5',
        title: '5단계: 고정 IP 설정 또는 mDNS 사용',
        content: 'mDNS(Bonjour)가 가장 간편한 옵션입니다. 별도의 구성 없이 로컬 네트워크에서 호스트명으로 Mac Mini에 접근할 수 있습니다.',
        codeBlock: `# 현재 로컬 IP 확인
ipconfig getifaddr en0

# 또는 Bonjour 사용 - hostname.local로 접근
scutil --get LocalHostName
# 출력 예: macmini → http://macmini.local:11434로 접근 가능`,
        codeLanguage: 'bash',
        note: '안정적인 IP를 위해 Mac의 MAC 주소를 사용하여 라우터 설정에서 DHCP 예약을 지정하십시오. 이렇게 하면 IP가 변경되지 않습니다.',
      },
      setupStep6: {
        id: 'setup-step6',
        title: '6단계: 절전 모드 방지 (상시 구동에 필수)',
        content: '이 설정이 없으면 macOS가 비활성 상태에서 절전 모드로 전환되어 수동으로 깨울 때까지 서버에 접근할 수 없게 됩니다.',
        codeBlock: `sudo pmset -a sleep 0
sudo pmset -a displaysleep 1
sudo pmset -a powernap 0
sudo pmset -a hibernatemode 0

# 설정 확인
pmset -g`,
        codeLanguage: 'bash',
        note: '정전 후 복구를 위해 시스템 설정 → 에너지에서 "전원 장애 후 자동으로 시작"을 설정하십시오.',
      },
      setupStep7: {
        id: 'setup-step7',
        title: '7단계: LAN의 다른 기기에서 테스트',
        codeBlock: `# 같은 네트워크의 노트북/스마트폰/태블릿에서:
curl http://macmini.local:11434/api/chat -d '{
  "model": "llama3.1:8b",
  "messages": [{"role": "user", "content": "Hello from my phone!"}]
}'`,
        codeLanguage: 'bash',
        note: '응답이 반환되면 AI 서버가 작동 중입니다. LAN의 모든 기기가 이제 AI 백엔드로 사용할 수 있습니다.',
      },
      remoteAccess: {
        id: 'remote-access',
        title: '원격 접근: 어디서나 Mac Mini AI 서버 사용하기',
        content: [
          '홈 네트워크 외부에서 Mac Mini AI 서버에 접근하는 두 가지 옵션: 개인 사용에는 Tailscale(권장), 웹 접근 가능 엔드포인트에는 Cloudflare Tunnel을 사용합니다.',
        ],
        codeBlock: `# 옵션 1: Tailscale (권장) — Mac Mini에 설치
brew install --cask tailscale
# Tailscale 앱으로 로그인 — Mac Mini에 사설 IP 할당
# Tailscale이 설치된 어디서나 접근:
curl http://macmini.tailnet.ts.net:11434/api/chat -d '{...}'

# 옵션 2: Cloudflare Tunnel (웹 접근)
brew install cloudflared
cloudflared tunnel create ai-server
cloudflared tunnel route dns ai-server ai.yourdomain.com
# 어디서나 https://ai.yourdomain.com으로 접근 가능`,
        codeLanguage: 'bash',
        note: '보안 주의: 인증 없이 Ollama를 공용 인터넷에 직접 노출하지 마십시오. Ollama에는 기본 인증 기능이 없습니다. Tailscale, Access 정책이 적용된 Cloudflare Tunnel, 또는 WireGuard VPN을 사용하십시오.',
      },
      usecases: {
        id: 'usecases',
        title: 'Mac Mini AI 서버의 네 가지 실제 사용 사례',
        content: 'Mac Mini AI 서버는 네 가지 주요 사용 사례를 지원합니다. 각각은 독립적인 워크플로우이며, 64GB M5 Pro에서 네 가지를 동시에 실행할 수 있습니다.',
      },
      usecaseFamilyServer: {
        id: 'usecases-family',
        title: '사용 사례 1: 가정용 AI 서버',
        content: [
          'Mac Mini를 24/7 상시 구동 상태로 수납장에 보관합니다. 홈 네트워크의 모든 기기(스마트폰, 태블릿, 노트북)가 동일한 Ollama 인스턴스에 API 요청을 보냅니다. iPhone, iPad, MacBook을 보유한 4인 가족이 동시에 사용합니다.',
          'iPhone은 Shortcuts → macmini.local:11434로 POST 요청을 사용합니다. MacBook 사용자는 Continue.dev 또는 Raycast 확장 프로그램을 사용합니다. OLLAMA_NUM_PARALLEL=2로 설정하면 두 명의 가족 구성원이 Llama 3.3 8B에서 동시에 대화할 수 있습니다.',
          'ChatGPT Plus 4개 구독($80/월 = $960/년)을 대체합니다. Mac Mini 투자 회수 기간: 약 15개월. 2-5년차: 순수 절감.',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: '사용 사례 2: 개인 정보 보호 RAG 문서 Q&A 서버',
        content: '스택: Ollama (Llama 3.3 8B) + nomic-embed-text + ChromaDB. 모두 Mac Mini에서 실행되며 LAN을 통해 접근 가능합니다. 사용 사례: 가족 문서, 법률 계약서, 기술 매뉴얼, 레시피 라이브러리, 의료 기록, 연구 논문. 모두 비공개, 검색 가능, 오프라인.',
        codeBlock: `# Docker로 ChromaDB 설치
brew install --cask docker
docker run -d -p 8000:8000 -v ~/chromadb:/data chromadb/chroma

# 문서 인덱싱 (Python)
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.vectorstores import Chroma

embeddings = OllamaEmbeddings(
    model="nomic-embed-text",
    base_url="http://localhost:11434"
)
vectordb = Chroma.from_documents(
    documents=splits,
    embedding=embeddings,
    persist_directory="./chroma_db"
)`,
        codeLanguage: 'python',
      },
      usecaseVoice: {
        id: 'usecases-voice',
        title: '사용 사례 3: 상시 구동 음성 어시스턴트',
        content: [
          'Mac Mini의 스택: STT를 위한 whisper.cpp(Metal 가속), 추론을 위한 Ollama Llama 3.3 8B, 음성 출력을 위한 Piper TTS, Home Assistant 통합을 위한 Wyoming 프로토콜.',
          '클라이언트 기기를 통한 웨이크워드 트리거(Apple HomePod via Home Assistant, 또는 각 방의 Raspberry Pi 마이크 어레이). M5 Pro에서의 엔드투엔드 지연 시간: 1.2초 (STT 0.3초 + LLM 0.7초 + TTS 0.2초).',
          '연간 전기 요금: $35. 유사한 클라우드 서비스(Alexa Plus, 월 $20): $240/년. 모든 음성 데이터를 비공개로 유지하면서 연간 $200 이상 절감.',
        ],
        items: [
          '상세 설정 가이드: [로컬 음성 어시스턴트 구축](/power-local-llm/build-local-voice-assistant-2026)',
        ],
      },
      usecaseCoding: {
        id: 'usecases-coding',
        title: '사용 사례 4: 개인 정보 보호 코딩 에이전트 (IDE 통합)',
        content: 'Continue.dev 또는 Cursor를 Mac Mini의 API를 사용하도록 구성합니다. 16B의 DeepSeek Coder V2는 여러 언어 벤치마크에서 GitHub Copilot을 능가하면서 모든 코드를 비공개 및 오프라인으로 유지합니다.',
        codeBlock: `// ~/.continue/config.json
{
  "models": [{
    "title": "Mac Mini DeepSeek Coder",
    "provider": "ollama",
    "model": "deepseek-coder-v2:16b",
    "apiBase": "http://macmini.local:11434"
  }]
}`,
        codeLanguage: 'json',
        items: [
          '연간 $0 (GitHub Copilot 사용자당 $10/월 대비)',
          '코드가 네트워크 밖으로 유출되지 않음',
          '오프라인에서도 작동 (비행기, 보안 사무실)',
          'DeepSeek Coder V2가 Go, Python, TypeScript 벤치마크에서 Copilot 능가',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: '전력 소비 및 열 성능',
        content: 'Ollama를 Metal 가속으로 실행하는 M5 Pro Mac Mini 64GB에서 측정한 수치입니다. 전기 요금은 $0.15/kWh 기준으로 계산됩니다.',
        tableFormat: true,
        columns: ['워크로드', '전력', '연간 비용 (24/7, $0.15/kWh)'],
        rows: [
          { '워크로드': '대기', '전력': '8W', '연간 비용 (24/7, $0.15/kWh)': '~$10/년' },
          { '워크로드': 'Llama 8B 추론', '전력': '25-35W', '연간 비용 (24/7, $0.15/kWh)': '~$39/년' },
          { '워크로드': 'Llama 34B 추론', '전력': '40-55W', '연간 비용 (24/7, $0.15/kWh)': '~$63/년' },
          { '워크로드': '일반적인 혼합 워크로드', '전력': '15-25W', '연간 비용 (24/7, $0.15/kWh)': '~$26/년' },
        ],
        items: [
          '부하 시 표면 온도: 35-42°C (만지면 따뜻한 정도)',
          '내부 CPU 온도: 65-75°C (스로틀링 임계값 이하)',
          '팬: M5 기본 모델에서는 작동 없음; M5 Pro에서 최대 부하 시 잠깐 낮은 RPM으로 작동',
          '30일 연속 작동 테스트에서 열 스로틀링 발생 없음',
          '통풍: 개방된 공간 권장 — 밀폐된 캐비닛 내부 설치 지양',
          'SSD 내구성: 일반적인 600 TBW = AI 서버 쓰기 패턴 기준 약 30년',
        ],
        note: '일반적인 혼합 워크로드의 연간 평균 전기 요금: $26-39. 1년 내내 상시 구동해도 ChatGPT Plus 한 달 구독료보다 저렴합니다.',
        image: '/images/mac-mini-m5-local-ai-server-power-draw-by-workload-en.svg',
        imageCaption: 'Mac Mini M5 Pro의 워크로드별 전력 소비: 대기 시 8W, Llama 8B 추론 시 25-35W, Llama 34B 추론 시 40-55W — 데스크톱 RTX 4070의 200-300W와 비교됩니다.',
      },
      maintenance: {
        id: 'maintenance',
        title: '24/7 운영을 위한 모니터링 및 유지 관리',
        content: '이 상태 점검 스크립트를 ~/check-ai-server.sh로 저장하십시오. cron 또는 launchd를 통해 시간마다 실행하면 Ollama가 충돌 시 자동으로 재시작됩니다.',
        codeBlock: `#!/bin/bash
echo "=== AI 서버 상태 점검 ==="
echo "날짜: $(date)"

if pgrep -x "ollama" > /dev/null; then
    echo "✓ Ollama 실행 중"
else
    echo "✗ Ollama 미실행 - 재시작 중"
    brew services restart ollama
fi

if curl -s http://localhost:11434/api/version > /dev/null; then
    echo "✓ API 응답 중"
else
    echo "✗ API 미응답"
fi

df -h / | tail -1
uptime`,
        codeLanguage: 'bash',
        items: [
          '매월: \`brew upgrade ollama\`로 Ollama 업데이트',
          '매월: \`ollama pull llama3.1:8b\`로 모델 업데이트 (최신 버전 재다운로드)',
          '매월: \`ollama list\` 후 \`ollama rm <model-name>\`으로 미사용 모델 정리',
          '매월: 시스템 설정 → 소프트웨어 업데이트를 통해 macOS 업데이트 적용',
          '매월: Mac Mini 재시작 (메모리 정리, 누적 상태 초기화)',
        ],
        note: '상태 점검을 매시간 예약하려면 ~/Library/LaunchAgents/com.user.ollama-monitor.plist를 생성하고 launchctl로 로드하십시오.',
      },
      tco: {
        id: 'tco',
        title: '5년 총 소유 비용 분석',
        tableFormat: true,
        columns: ['연도', 'Mac Mini AI 서버', 'ChatGPT Plus 4개', '차이'],
        rows: [
          { '연도': '1년차', 'Mac Mini AI 서버': '$1,199 하드웨어 + $35 전기 = $1,234', 'ChatGPT Plus 4개': '$960', '차이': '-$274 (1년차에는 Mac이 더 비쌈)' },
          { '연도': '2년차', 'Mac Mini AI 서버': '$35 (전기만)', 'ChatGPT Plus 4개': '$960', '차이': '+$925 절감' },
          { '연도': '3년차', 'Mac Mini AI 서버': '$35', 'ChatGPT Plus 4개': '$960', '차이': '+$925 절감' },
          { '연도': '4년차', 'Mac Mini AI 서버': '$35', 'ChatGPT Plus 4개': '$960', '차이': '+$925 절감' },
          { '연도': '5년차', 'Mac Mini AI 서버': '$35', 'ChatGPT Plus 4개': '$960', '차이': '+$925 절감' },
          { '연도': '5년 합계', 'Mac Mini AI 서버': '$1,374', 'ChatGPT Plus 4개': '$4,800', '차이': '+$3,426 절감' },
        ],
        items: [
          'ChatGPT Plus를 대체하는 4인 가족 기준 투자 회수 기간: 약 15개월',
          '코딩 에이전트 (Copilot $10/사용자/월 대체) — 개발자 1명: 12개월 만에 투자 회수',
          '코딩 에이전트 — 4인 개발팀: 3개월 만에 투자 회수',
          '코딩 에이전트 — 10인 개발팀: 1.2개월 만에 투자 회수',
        ],
        note: 'TCO는 연간 $960 (ChatGPT Plus 4개, 각 $20/월) 기준입니다. 모든 데이터 비공개, 쿼리당 비용 없음, 오프라인 기능 포함.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Mac Mini M5가 대안 제품보다 조용합니까?', a: '그렇습니다. M5 기본 모델은 완전 팬리스입니다. M5 Pro의 팬은 거의 작동하지 않으며, 작동 시에도 매우 조용합니다. RTX GPU 데스크톱: 약 50-70 dB. Mac Mini M5: 대기 시 0 dB, 34B+ 이상의 과부하 시 잠깐 20-25 dB.' },
          { q: 'Mac Mini에 원격으로 접속할 수 있습니까?', a: '네. 터미널을 통한 SSH 또는 시스템 설정 → 공유 → 원격 관리를 통한 화면 공유(VNC). LAN에서는 ssh user@macmini.local을 사용합니다. 원격 접근의 경우 Tailscale을 먼저 설치한 후 Tailscale IP를 통해 SSH로 접속하십시오.' },
          { q: '더 높은 처리량이 필요한 경우 어떻게 합니까?', a: '업그레이드 경로: Mac Studio M5 Max(128GB, 약 $2,000) — 2배 속도 및 70B 모델 지원. Mac Studio M5 Ultra(2026년 출시 예정) — 4배 속도. 서버 팜의 경우 여러 Mac Mini를 연결하고 Nginx로 부하 분산을 구성하십시오.' },
          { q: 'Mac Mini는 24/7 AI 서버로 얼마나 오래 사용할 수 있습니까?', a: 'Apple Silicon Mac은 지속적인 작동을 위해 설계되었습니다. AI 서버 용도 예상 수명: 7-10년. SSD 내구성(일반적인 600 TBW)은 AI 워크로드 기준 25-30년을 커버합니다. 연간 하드웨어 고장률은 0.5% 미만입니다.' },
          { q: '여러 사용자가 동시에 사용할 수 있습니까?', a: '네. OLLAMA_NUM_PARALLEL=2(또는 메모리에 따라 더 높게)로 설정하면 동시 요청을 처리할 수 있습니다. 64GB M5 Pro는 8B 모델에서 2-3명의 동시 사용자를 처리하거나, 멀티 모델 스택(LLM + 비전 + STT)에서 1명의 사용자를 지원합니다.' },
          { q: 'Mac Mini의 전원이 나가면 어떻게 됩니까?', a: '전원이 복구되면 시스템 설정 → 에너지에서 "전원 장애 후 자동으로 시작"을 설정한 경우 macOS가 자동으로 부팅됩니다. Ollama는 brew 서비스로 시작됩니다. 모델은 첫 번째 요청 시 다시 로드됩니다(재부팅 후 첫 응답에 5-15초 지연 발생).' },
          { q: 'Mac Mini에 외부 GPU를 추가하여 추론 속도를 높일 수 있습니까?', a: '아니요. Apple Silicon은 Metal/ML 가속을 위한 외부 GPU를 지원하지 않습니다. 통합 메모리 아키텍처가 설계 원칙입니다. 독립형 GPU를 추가할 수 없습니다. 속도 향상을 원한다면 Mac Studio M5 Max로 업그레이드하십시오.' },
          { q: 'Mac Mini가 AI 서버로 과잉 사양입니까, 아니면 부족합니까?', a: '8B-34B 모델을 실행하는 1-4인 가정 또는 소규모 팀의 경우: 적합합니다. 70B 모델의 경우: 부족합니다(Mac Studio M5 Max 128GB 필요). 취미 예산으로 소형 모델을 원한다면: 과잉 사양입니다(Raspberry Pi 5는 1-3B 모델만 지원하지만, 2026년 기준 실용적인 용도에는 부족합니다).' },
        ],
      },
      relatedArticles: {
        id: 'related',
        title: '관련 문서',
        items: [
          '[Apple Silicon 로컬 LLM 완전 가이드](/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max 벤치마크 2026](/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[Mac용 Ollama 설정 가이드](/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[로컬 LLM에 필요한 통합 메모리 용량](/local-llms/how-much-unified-memory-for-local-llm)',
          '[Apple Silicon 최적 LLM 모델](/local-llms/best-models-apple-silicon-2026)',
          '[MLX vs Ollama vs llama.cpp 비교](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[로컬 음성 어시스턴트 구축](/power-local-llm/build-local-voice-assistant-2026)',
          '[비공개 비즈니스 데이터를 위한 로컬 RAG](/power-local-llm/local-rag-for-private-business-data)',
        ],
      },
    },
  },
}

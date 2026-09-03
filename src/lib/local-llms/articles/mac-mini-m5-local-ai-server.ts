import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-15',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-en.webp',
    title: 'Mac Mini M6 as Local AI Server: Always-On LLM, Whisper, RAG, Voice Assistant',
    seoTitle: 'Mac Mini M6 / M5 Pro as Local AI Server: 24/7',
    intro: 'Apple announced the new Mac mini on August 25, 2026: the M6 chip (from $899, max 32GB unified memory) and the M5 Pro chip (from $1,699, max 64GB unified memory). Both ship September 22, 2026. Either configuration makes an excellent silent, always-on local AI server. This guide covers hardware configuration, setup strategy, and cost-benefit analysis for running Ollama LLM, Whisper STT, RAG pipeline, and voice assistant stack. Estimated power costs: $26-39/year electricity.',
    metaDescription: 'Run always-on local AI server on the new Mac mini M6 or M5 Pro. 25–55W power, $26–39/year electricity. Ollama LLM, Whisper STT, RAG, voice assistant. Silent, never reboots.',
    twitterDescription: 'Mac mini M5 Pro 64GB: perfect silent local AI server. Always-on LLM + Whisper + RAG for $35/year electricity. Full setup guide.',
    publishDate: '2026-05-15',
    dateModified: '2026-08-26',
    ctaText: 'Got your Mac Mini AI server running? Compare your local Llama or DeepSeek output against GPT-4, Claude, Gemini, and 22 other models in one dispatch with PromptQuorum — verify your self-hosted setup delivers cloud-quality answers for your specific use cases.',
    current_models_mentioned: ['Llama 3.1 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: 'Users wanting always-on local AI server for home/office. Technical users comfortable with terminal.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac mini local AI server',
    targetKeywords: ['Mac mini AI server', 'always-on LLM', 'home AI infrastructure', 'Ollama always-on', 'Mac mini M6 server', 'Mac mini M5 Pro server'],
    leadAnswerBlock: '**The Mac mini M5 Pro 64GB (from $1,699, ships September 22, 2026) is the strongest always-on AI server option: silent (near-fanless), 25-55W power draw, ~$26-39/year electricity. Its 64GB unified memory ceiling is what lets it run Ollama 34B models, Whisper STT, RAG pipeline, and voice assistant simultaneously — the base Mac mini M6 (from $899) tops out at 32GB, which is not enough headroom to run all four services at once. Apple has not shipped this hardware yet, so power and thermal figures below are estimates, not PromptQuorum-measured benchmarks.**',
    nextStep: {
      text: 'Ready to set up Ollama on your Mac Mini M6 or M5 Pro? Here\'s the full installation guide.',
      label: 'Ollama on Mac — Setup Guide 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      en: {
        question: 'Why is the new Mac mini a good local AI server?',
        answer: 'Silent (fanless base tier, near-silent Pro), 25-55W power (vs 300W+ GPU desktop), estimated $26-39/year electricity. The M5 Pro 64GB config runs Ollama 34B LLM + Whisper + RAG + voice assistant simultaneously on unified memory — the base M6 caps at 32GB, which fits fewer services at once. Ships September 22, 2026.',
        bullets: [
          'M5 Pro 64GB: from $1,699, ships September 22, 2026',
          'M6 32GB max: from $899, same ship date',
          'Power: 25-55W expected (vs 300W+ GPU desktop)',
          'Annual electricity: estimated $26-39 (vs $263-394 GPU)',
          'Silent: fanless (M6) to near-fanless (M5 Pro) under typical LLM loads',
          'REST API accessible from all LAN devices',
          'Cost-benefit analysis: see TCO section below',
        ],
        updatedDate: '2026-08-26',
      },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Why Mac Mini M6/M5 Pro', anchor: '#why' },
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
        title: 'Why the New Mac Mini (M6/M5 Pro) Is an Excellent AI Server',
        content: [
          'Apple announced the new Mac mini on August 25, 2026, with two chip options: the M6 (from $899, max 32GB unified memory) and the M5 Pro (from $1,699, max 64GB unified memory). Both ship September 22, 2026. The M5 Pro 64GB configuration is the better choice for running a silent, always-on local AI server: near-silence (fanless base, very low-RPM fan on Pro), low power draw (25-55W vs 300W+ for GPU desktops), and enough unified memory to run a 34B parameter model plus Whisper, RAG, and a voice assistant simultaneously.',
          'Estimated annual electricity cost: $26-39 vs $263-394 for desktop GPU equivalents — less than two months of a single ChatGPT Plus subscription, every year. Apple has not published independent benchmark data yet since the hardware ships September 22, 2026; power and performance figures in this guide are estimates based on Apple\'s own published specs and prior Apple Silicon Mac mini generations, not PromptQuorum-measured results.',
        ],
        tableFormat: true,
        columns: ['Property', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'Property': 'Hardware cost', 'Mac Mini M5 Pro': 'From $1,699', 'Desktop + RTX 4070': '$1,200+', 'Raspberry Pi 5': '$80' },
          { 'Property': 'Power (idle)', 'Mac Mini M5 Pro': '8W (est.)', 'Desktop + RTX 4070': '50W', 'Raspberry Pi 5': '5W' },
          { 'Property': 'Power (LLM load)', 'Mac Mini M5 Pro': '25-55W (est.)', 'Desktop + RTX 4070': '200-300W', 'Raspberry Pi 5': 'N/A (too small)' },
          { 'Property': 'Annual electricity', 'Mac Mini M5 Pro': '$26-39 (est.)', 'Desktop + RTX 4070': '$263-394', 'Raspberry Pi 5': '~$5' },
          { 'Property': 'Noise level', 'Mac Mini M5 Pro': 'Near-silent', 'Desktop + RTX 4070': 'Loud (3+ fans)', 'Raspberry Pi 5': 'Silent' },
          { 'Property': 'Max model size', 'Mac Mini M5 Pro': '34B (Q5)', 'Desktop + RTX 4070': '8B (12GB VRAM)', 'Raspberry Pi 5': '1-3B only' },
          { 'Property': 'Always-on reliability', 'Mac Mini M5 Pro': 'Excellent', 'Desktop + RTX 4070': 'Good', 'Raspberry Pi 5': 'Excellent' },
          { 'Property': 'Footprint', 'Mac Mini M5 Pro': '5×5 inches', 'Desktop + RTX 4070': 'Full tower', 'Raspberry Pi 5': '3×3 inches' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware Configuration Recommendation',
        content: 'The M5 Pro at 64GB (from $1,699) is the configuration to buy for a full always-on AI server stack: it runs 34B models, supports the four simultaneous services covered in this guide (LLM + Whisper + RAG + voice assistant), and has headroom for the next 2-3 years of model size growth. The base M6 tops out at 32GB unified memory — enough for a single LLM plus one lighter service, but not all four at once. Never buy the 32GB-max M6 tier if you plan to run the full stack.',
        tableFormat: true,
        columns: ['Config', 'Price (2026)', 'Max Memory', 'Best For', 'Models Supported'],
        rows: [
          { 'Config': 'Mac Mini M6 (base)', 'Price (2026)': 'From $899', 'Max Memory': 'Up to 32 GB', 'Best For': 'Single LLM + one light service', 'Models Supported': '7B-13B Q4' },
          { 'Config': 'Mac Mini M5 Pro ★', 'Price (2026)': 'From $1,699', 'Max Memory': 'Up to 64 GB', 'Best For': 'Full always-on stack (LLM+Whisper+RAG+voice)', 'Models Supported': '34B models comfortably' },
        ],
        note: '★ Recommended for this use case. The 64GB memory ceiling is the deciding factor: running an LLM, Whisper STT, a RAG pipeline, and a voice assistant simultaneously needs all four models resident in memory at once, which the 32GB M6 cannot fit. Storage planning: Llama 3.1 8B Q4 ~5 GB per model, Whisper large-v3 ~3 GB, embedding model ~0.5 GB, ChromaDB with 10K docs ~2 GB. Typical 5-model setup: 50-80 GB. Minimum 512 GB SSD; 1 TB for power users. Apple has not published per-memory-tier pricing beyond each chip\'s starting price — check apple.com for exact configuration cost above the base tier.',
        image: '/images/mac-mini-m5-local-ai-server-memory-tier-capacity-en.svg',
        imageCaption: 'Mac Mini M6 (32GB max) vs M5 Pro (64GB max) memory ceiling vs max model capacity: the 32GB M6 fits a single LLM plus one light service, while the 64GB M5 Pro comfortably runs a 34B model alongside Whisper, RAG, and a voice assistant simultaneously.',
      },
      setup: {
        id: 'setup',
        title: 'Complete Server Setup (30 Minutes from Unbox to Running)',
        content: 'These steps configure the Mac Mini M6 or M5 Pro as a persistent, network-accessible AI server. After completing all steps, every device on your LAN can send requests to the Mac Mini\'s Ollama API at port 11434.',
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
          'iPhones use Shortcuts → POST to macmini.local:11434. MacBook users use Continue.dev or Raycast extensions. Set OLLAMA_NUM_PARALLEL=2 so two family members can chat simultaneously on Llama 3.1 8B.',
          'Replaces 4× ChatGPT Plus subscriptions ($80/month = $960/year). Mac Mini payback period: ~15 months. Years 2-5: pure savings.',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: 'Use Case 2: Private RAG Document Q&A Server',
        content: 'Stack: Ollama (Llama 3.1 8B) + nomic-embed-text + ChromaDB. All running on Mac Mini, accessible via LAN. Use cases: family documents, legal contracts, technical manuals, recipe library, medical records, research papers. All private. All searchable. All offline.',
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
          'Stack on Mac Mini: whisper.cpp for STT (Metal accelerated), Ollama Llama 3.1 8B for reasoning, Piper TTS for voice output, Wyoming protocol for Home Assistant integration.',
          'Wake-word triggered via client devices (Apple HomePod via Home Assistant, or Raspberry Pi microphone arrays in each room). Estimated end-to-end latency on M5 Pro: around 1.2 seconds (STT + LLM + TTS combined) — an estimate based on prior Apple Silicon Mac mini generations and Apple\'s claimed performance gains; the M6/M5 Pro Mac mini has not shipped yet, so independent measurements are not yet available.',
          'Estimated annual electricity: $35. Comparable cloud service (Alexa Plus at $20/month): $240/year. Estimated to save $200+ per year while keeping all voice data private.',
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
    "apiBase": "[macmini.local:11434](http://macmini.local:11434)"
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
        title: 'Power Consumption and Thermal Performance (Estimated)',
        content: 'The M6/M5 Pro Mac mini ships September 22, 2026 — PromptQuorum has not tested this hardware. Figures below are estimates based on Apple\'s published TDP specs, Apple\'s own relative-performance claims (up to 4x AI performance vs. the M4 generation), and power/thermal behavior observed on prior Apple Silicon Mac mini generations under equivalent Ollama + Metal workloads. Electricity cost calculated at $0.15/kWh.',
        tableFormat: true,
        columns: ['Workload', 'Power (est.)', 'Annual Cost (24/7, $0.15/kWh)'],
        rows: [
          { 'Workload': 'Idle', 'Power (est.)': '8W', 'Annual Cost (24/7, $0.15/kWh)': '~$10/year' },
          { 'Workload': 'Llama 8B inference', 'Power (est.)': '25-35W', 'Annual Cost (24/7, $0.15/kWh)': '~$39/year' },
          { 'Workload': 'Llama 34B inference', 'Power (est.)': '40-55W', 'Annual Cost (24/7, $0.15/kWh)': '~$63/year' },
          { 'Workload': 'Mixed typical workload', 'Power (est.)': '15-25W', 'Annual Cost (24/7, $0.15/kWh)': '~$26/year' },
        ],
        items: [
          'Surface temperature under load (estimated): 35-42°C (warm to touch)',
          'Internal CPU temperature (estimated): 65-75°C (well below throttle threshold)',
          'Fan: expected never to engage on the fanless M6; brief low-RPM engagement expected on M5 Pro during peak loads',
          'Prior Apple Silicon Mac mini generations show no thermal throttling under sustained LLM workloads — the M6/M5 Pro generation is expected to follow the same thermal design, pending independent testing after the September 22, 2026 ship date',
          'Ventilation: open space recommended — not an enclosed cabinet',
          'SSD endurance: 600 TBW typical = ~30 years of AI server write patterns',
        ],
        note: 'Estimated average annual electricity for typical mixed workload: $26-39. Always-on for an entire year is estimated to cost less than one month of ChatGPT Plus. These figures will be updated with real-world measurements once the hardware ships.',
        image: '/images/mac-mini-m5-local-ai-server-power-draw-by-workload-en.svg',
        imageCaption: 'Mac Mini M5 Pro estimated power draw by workload: 8W idle, 25-35W on Llama 8B inference, 40-55W on Llama 34B inference — versus 200-300W for a desktop RTX 4070. Estimates, not independently measured — hardware ships September 22, 2026.',
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
          { 'Year': 'Year 1', 'Mac Mini AI Server': 'From $1,699 hardware + $35 power = $1,734', '4× ChatGPT Plus': '$960', 'Difference': '-$774 (Mac costs more in Y1)' },
          { 'Year': 'Year 2', 'Mac Mini AI Server': '$35 (power only)', '4× ChatGPT Plus': '$960', 'Difference': '+$925 saved' },
          { 'Year': 'Year 3', 'Mac Mini AI Server': '$35', '4× ChatGPT Plus': '$960', 'Difference': '+$925 saved' },
          { 'Year': 'Year 4', 'Mac Mini AI Server': '$35', '4× ChatGPT Plus': '$960', 'Difference': '+$925 saved' },
          { 'Year': 'Year 5', 'Mac Mini AI Server': '$35', '4× ChatGPT Plus': '$960', 'Difference': '+$925 saved' },
          { 'Year': '5-year total', 'Mac Mini AI Server': 'From $1,874', '4× ChatGPT Plus': '$4,800', 'Difference': '+$2,926 saved' },
        ],
        items: [
          'Payback period for 4-person family replacing ChatGPT Plus: ~19 months (at the $1,699 M5 Pro starting price)',
          'Coding agent (replacing Copilot at $10/user/month) — 1 developer: pays back in 15 months',
          'Coding agent — 4-person dev team: pays back in ~4 months',
          'Coding agent — 10-person dev team: pays back in ~1.5 months',
        ],
        note: 'TCO assumes $960/year (4× ChatGPT Plus at $20/month each) and the $1,699 M5 Pro starting configuration price. Apple has not published pricing for memory configurations above the base tier, so the 64GB build used throughout this guide likely costs more than $1,699 — check apple.com for exact configured pricing. All data private, no per-query costs, offline capability included.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Is the new Mac mini quieter than alternatives?', a: 'Yes, by design. The M6 base is fanless. The M5 Pro\'s fan is expected to rarely spin, and to be very quiet when it does — matching prior Apple Silicon Mac mini generations. RTX GPU desktop: ~50-70 dB. Mac mini: expected near-0 dB at rest, low dB briefly under heavy 34B+ load. Independent noise measurements are not yet available; the hardware ships September 22, 2026.' },
          { q: 'Can I remote into the Mac Mini?', a: 'Yes — SSH via terminal, or Screen Sharing (VNC) via System Settings → Sharing → Remote Management. For LAN: ssh user@macmini.local. For remote access: use Tailscale first, then SSH through the Tailscale IP.' },
          { q: 'What if I need higher throughput?', a: 'Upgrade path: check Apple\'s current Mac Studio lineup for a higher unified-memory ceiling and more GPU cores than the Mac mini offers. For server farms, rack multiple Mac Minis and load-balance with Nginx.' },
          { q: 'How long does the Mac Mini last as a 24/7 AI server?', a: 'Apple Silicon Macs are rated for sustained operation. Expected lifespan: 7-10 years for AI server use. SSD endurance (600 TBW typical) covers 25-30 years of AI workloads. Annual hardware failure rate under 0.5%.' },
          { q: 'Can I run multiple users simultaneously?', a: 'Yes. Set OLLAMA_NUM_PARALLEL=2 (or higher with more memory) to handle concurrent requests. The 64GB M5 Pro is expected to handle 2-3 simultaneous users on 8B models, or 1 user with multi-model stacks (LLM + vision + STT); the 32GB M6 has less headroom for this.' },
          { q: 'What happens if Mac Mini loses power?', a: 'After power restoration, macOS boots automatically if you set "Start up automatically after a power failure" in System Settings → Energy. Ollama starts as a brew service. Models reload on first request (5-15 sec delay for first response after reboot).' },
          { q: 'Can I add an external GPU to Mac Mini for faster inference?', a: 'No. Apple Silicon does not support external GPUs for Metal/ML acceleration. The unified memory architecture is the design — you cannot add discrete GPU. For more speed, check Apple\'s current Mac Studio options.' },
          { q: 'Is the Mac mini overkill for an AI server, or underkill?', a: 'For 1-4 user households or small teams running 8B-34B models: just right, on the 64GB M5 Pro. For 70B+ models: underkill — check Apple\'s Mac Studio lineup for higher memory ceilings. For tiny models on a hobbyist budget: overkill (Raspberry Pi 5 covers 1-3B models only, but insufficient for anything practical in 2026). For running the full four-service stack (LLM + Whisper + RAG + voice) at once: the 32GB-max M6 base tier is underkill — use the 64GB M5 Pro.' },
          { q: 'Is there a plain "M5" Mac mini?', a: 'No. Apple\'s August 25, 2026 announcement uses the M6 chip for the base Mac mini and the M5 Pro chip for the upper tier — Apple skipped a plain "M5" for the Mac mini line entirely (the M5 chip shipped earlier in 2026 in the MacBook Air/Pro line, not the Mac mini).' },
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
    next_refresh_due: '2027-02-15',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-de.webp',
    title: 'Mac Mini M6 als lokaler KI-Server: Always-On LLM, Whisper, RAG, Sprachassistent',
    seoTitle: 'Mac Mini M6 / M5 Pro als KI-Server: 24/7',
    intro: 'Apple hat am 25. August 2026 den neuen Mac Mini vorgestellt: den M6-Chip (ab ca. 999 €, max. 32 GB Unified Memory) und den M5 Pro-Chip (ab ca. 1.899 €, max. 64 GB Unified Memory). Beide erscheinen am 22. September 2026. Beide Konfigurationen eignen sich hervorragend als stiller, dauerhaft laufender lokaler KI-Server. Diese Anleitung behandelt Hardware-Konfiguration, Setup-Strategie und Kosten-Nutzen-Analyse für den Betrieb von Ollama LLM, Whisper STT, RAG-Pipeline und Sprachassistent. Geschätzte Stromkosten: ca. 26–53 €/Jahr.',
    metaDescription: 'Lokaler KI-Server auf dem neuen Mac Mini M6 oder M5 Pro. 25–55 W Stromverbrauch, ca. 53 €/Jahr. Ollama LLM, Whisper STT, RAG, Sprachassistent. Stumm, immer online.',
    twitterDescription: 'Mac Mini M5 Pro 64 GB: idealer stiller lokaler KI-Server. Always-On LLM + Whisper + RAG für ca. 53 €/Jahr Strom. Vollständige Einrichtungsanleitung.',
    publishDate: '2026-05-15',
    dateModified: '2026-08-26',
    ctaText: 'Mac Mini KI-Server läuft? Vergleichen Sie Ihre lokalen Llama- oder DeepSeek-Antworten mit GPT-4, Claude, Gemini und 22 weiteren Modellen in einem Dispatch mit PromptQuorum — prüfen Sie, ob Ihr selbst gehostetes Setup Cloud-Qualität liefert.',
    current_models_mentioned: ['Llama 3.1 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: 'Nutzer, die einen dauerhaft laufenden lokalen KI-Server für Zuhause oder das Büro betreiben möchten.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini lokaler KI-Server',
    targetKeywords: ['Mac Mini KI-Server', 'Always-On LLM', 'lokale KI-Infrastruktur', 'Ollama dauerhaft', 'Mac Mini M6 Server', 'Mac Mini M5 Pro Server'],
    leadAnswerBlock: '**Der Mac Mini M5 Pro 64 GB (ab ca. 1.899 €, erscheint am 22. September 2026) ist die stärkste Always-On-KI-Server-Option: geräuschlos (annähernd lüfterlos), 25–55 W Stromverbrauch, geschätzt ca. 26–53 €/Jahr Strom. Erst die 64-GB-Obergrenze erlaubt es, Ollama 34B-Modelle, Whisper STT, RAG-Pipeline und Sprachassistent gleichzeitig zu betreiben — der Basis-Mac-Mini M6 (ab ca. 999 €) ist bei 32 GB gedeckelt, was für alle vier Dienste gleichzeitig nicht ausreicht. Apple hat diese Hardware noch nicht ausgeliefert; die unten genannten Strom- und Temperaturwerte sind Schätzungen, keine von PromptQuorum gemessenen Benchmarks.**',
    nextStep: {
      text: 'Bereit, Ollama auf Ihrem Mac Mini M6 oder M5 Pro einzurichten? Hier ist der vollständige Installationsleitfaden.',
      label: 'Ollama auf Mac — Einrichtungsanleitung 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      de: {
        question: 'Warum ist der neue Mac Mini ein guter lokaler KI-Server?',
        answer: 'Geräuschlos (lüfterlose Basis, annähernd lautloses Pro), 25–55 W (gegenüber 300 W+ GPU-Desktop), geschätzt ca. 26–53 €/Jahr Strom. Die M5-Pro-Konfiguration mit 64 GB betreibt Ollama 34B-LLM + Whisper + RAG + Sprachassistent gleichzeitig — der Basis-M6 ist bei 32 GB gedeckelt und bietet weniger Spielraum für mehrere Dienste. Erscheint am 22. September 2026.',
        bullets: [
          'M5 Pro 64 GB: ab ca. 1.899 €, erscheint am 22. September 2026',
          'M6 mit max. 32 GB: ab ca. 999 €, gleiches Erscheinungsdatum',
          'Stromverbrauch: 25–55 W erwartet (gegenüber 300 W+ GPU-Desktop)',
          'Jahresstrom: geschätzt ca. 26–53 € (gegenüber 350–550 € GPU, bei 0,30 €/kWh)',
          'Geräuschlos: lüfterlos (M6) bis annähernd lüfterlos (M5 Pro) unter typischer LLM-Last',
          'REST-API für alle Geräte im Heimnetz',
          'Kosten-Nutzen-Analyse: siehe TCO-Abschnitt unten',
        ],
        updatedDate: '2026-08-26',
      },
    },
    toc: [
      { label: 'Warum Mac Mini M6/M5 Pro', anchor: '#why' },
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
        title: 'Warum der neue Mac Mini (M6/M5 Pro) ein ausgezeichneter KI-Server ist',
        content: [
          'Apple hat am 25. August 2026 den neuen Mac Mini vorgestellt: den M6 (ab ca. 999 €, max. 32 GB Unified Memory) und den M5 Pro (ab ca. 1.899 €, max. 64 GB Unified Memory). Beide erscheinen am 22. September 2026. Die 64-GB-Konfiguration des M5 Pro ist die bessere Wahl für einen stillen, dauerhaft laufenden lokalen KI-Server: nahezu lautloser Betrieb, geringer Stromverbrauch (25–55 W gegenüber 300 W+ für GPU-Desktops) und ausreichend Unified Memory, um ein 34B-Modell plus Whisper, RAG und Sprachassistent gleichzeitig zu betreiben.',
          'Geschätzte jährliche Stromkosten: 26–53 € gegenüber 350–550 € für vergleichbare GPU-Desktops (bei deutschen Strompreisen von 0,30 €/kWh) — weniger als zwei Monate eines einzelnen ChatGPT-Plus-Abonnements, jedes Jahr. Da die Hardware erst am 22. September 2026 erscheint, liegen noch keine unabhängigen Benchmarks vor; Strom- und Leistungsangaben in diesem Leitfaden sind Schätzungen auf Basis von Apples veröffentlichten Spezifikationen und früheren Apple-Silicon-Mac-Mini-Generationen, keine von PromptQuorum gemessenen Ergebnisse.',
        ],
        tableFormat: true,
        columns: ['Eigenschaft', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'Eigenschaft': 'Hardwarekosten', 'Mac Mini M5 Pro': 'ab ca. 1.899 €', 'Desktop + RTX 4070': 'ab 1.200 €', 'Raspberry Pi 5': 'ca. 80 €' },
          { 'Eigenschaft': 'Stromverbrauch (Leerlauf)', 'Mac Mini M5 Pro': '8 W (geschätzt)', 'Desktop + RTX 4070': '50 W', 'Raspberry Pi 5': '5 W' },
          { 'Eigenschaft': 'Stromverbrauch (LLM-Last)', 'Mac Mini M5 Pro': '25–55 W (geschätzt)', 'Desktop + RTX 4070': '200–300 W', 'Raspberry Pi 5': 'Nicht möglich' },
          { 'Eigenschaft': 'Jahresstrom (0,30 €/kWh)', 'Mac Mini M5 Pro': '26–53 € (geschätzt)', 'Desktop + RTX 4070': '350–550 €', 'Raspberry Pi 5': 'ca. 10 €' },
          { 'Eigenschaft': 'Lautstärke', 'Mac Mini M5 Pro': 'Annähernd geräuschlos', 'Desktop + RTX 4070': 'Laut (3+ Lüfter)', 'Raspberry Pi 5': 'Geräuschlos' },
          { 'Eigenschaft': 'Max. Modellgröße', 'Mac Mini M5 Pro': '34B (Q5)', 'Desktop + RTX 4070': '8B (12 GB VRAM)', 'Raspberry Pi 5': 'Nur 1–3B' },
          { 'Eigenschaft': 'Dauerbetrieb-Zuverlässigkeit', 'Mac Mini M5 Pro': 'Ausgezeichnet', 'Desktop + RTX 4070': 'Gut', 'Raspberry Pi 5': 'Ausgezeichnet' },
          { 'Eigenschaft': 'Stellfläche', 'Mac Mini M5 Pro': '13×13 cm', 'Desktop + RTX 4070': 'Midi-Tower', 'Raspberry Pi 5': '8×8 cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware-Konfigurationsempfehlung',
        content: 'Der M5 Pro mit 64 GB (ab ca. 1.899 €) ist die Konfiguration für einen vollständigen Always-On-KI-Server-Stack: er betreibt 34B-Modelle, unterstützt die vier gleichzeitigen Dienste dieses Leitfadens (LLM + Whisper + RAG + Sprachassistent) und hat Kapazitätsreserven für 2–3 weitere Jahre Modellwachstum. Der Basis-M6 ist bei 32 GB Unified Memory gedeckelt — ausreichend für ein LLM plus einen weiteren leichten Dienst, aber nicht für alle vier gleichzeitig. Für den vollständigen Stack niemals die 32-GB-M6-Basis kaufen.',
        tableFormat: true,
        columns: ['Konfiguration', 'Preis (2026)', 'Max. Speicher', 'Geeignet für', 'Unterstützte Modelle'],
        rows: [
          { 'Konfiguration': 'Mac Mini M6 (Basis)', 'Preis (2026)': 'ab ca. 999 €', 'Max. Speicher': 'bis 32 GB', 'Geeignet für': 'Ein LLM + ein leichter Dienst', 'Unterstützte Modelle': '7B–13B Q4' },
          { 'Konfiguration': 'Mac Mini M5 Pro ★', 'Preis (2026)': 'ab ca. 1.899 €', 'Max. Speicher': 'bis 64 GB', 'Geeignet für': 'Vollständiger Always-On-Stack (LLM+Whisper+RAG+Sprache)', 'Unterstützte Modelle': '34B-Modelle komfortabel' },
        ],
        note: '★ Für diesen Einsatzzweck empfohlen. Die 64-GB-Obergrenze ist entscheidend: LLM, Whisper STT, RAG-Pipeline und Sprachassistent gleichzeitig zu betreiben erfordert alle vier Modelle gleichzeitig im Speicher — das schafft der 32-GB-gedeckelte M6 nicht. Speicherplanung: Llama 3.1 8B Q4 ca. 5 GB pro Modell, Whisper large-v3 ca. 3 GB, Embedding-Modell ca. 0,5 GB, ChromaDB mit 10.000 Dokumenten ca. 2 GB. Typisches 5-Modell-Setup: 50–80 GB. Mindestens 512 GB SSD; 1 TB für Power-User. Apple hat noch keine Preise für Speicherkonfigurationen oberhalb der Basis veröffentlicht — genaue Konfigurationspreise auf apple.com prüfen.',
        image: '/images/mac-mini-m5-local-ai-server-memory-tier-capacity-en.svg',
        imageCaption: 'Mac Mini M6 (max. 32 GB) vs. M5 Pro (max. 64 GB) Speicherobergrenze im Vergleich zur maximalen Modellgröße: der 32-GB-M6 eignet sich für ein LLM plus einen leichten Dienst, während der 64-GB-M5-Pro ein 34B-Modell komfortabel neben Whisper, RAG und Sprachassistent gleichzeitig betreibt.',
      },
      setup: {
        id: 'setup',
        title: 'Vollständiges Server-Setup (30 Minuten vom Auspacken bis zum Betrieb)',
        content: 'Diese Schritte konfigurieren den Mac Mini M6 oder M5 Pro als dauerhaften, netzwerkzugänglichen KI-Server. Nach Abschluss aller Schritte kann jedes Gerät im Heimnetz Anfragen an die Ollama-API des Mac Mini auf Port 11434 senden.',
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
        content: 'Stack: Ollama (Llama 3.1 8B) + nomic-embed-text + ChromaDB. Alles auf dem Mac Mini, über das Heimnetz erreichbar. Anwendungsfälle: Familiendokumente, Verträge, technische Handbücher, Rezeptbibliothek, medizinische Unterlagen, wissenschaftliche Arbeiten. Alles privat. Alles durchsuchbar. Alles offline.',
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
          'Stack auf Mac Mini: whisper.cpp für STT (Metal-beschleunigt), Ollama Llama 3.1 8B für Reasoning, Piper TTS für Sprachausgabe, Wyoming-Protokoll für Home-Assistant-Integration.',
          'Wake-Word-Aktivierung über Client-Geräte (Apple HomePod via Home Assistant oder Raspberry Pi Mikrofon-Arrays). Geschätzte End-to-End-Latenz auf M5 Pro: ca. 1,2 Sekunden (STT + LLM + TTS kombiniert) — eine Schätzung auf Basis früherer Apple-Silicon-Mac-Mini-Generationen und Apples angegebenen Leistungssteigerungen; der M6/M5-Pro-Mac-Mini ist noch nicht ausgeliefert, unabhängige Messungen liegen noch nicht vor.',
          'Geschätzter Jahresstrom: ca. 35 €. Vergleichbarer Cloud-Dienst (Alexa Plus, 3 €/Monat): 36 €/Jahr — ähnliche Kosten, aber mit vollständiger Privatsphäre.',
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
    "apiBase": "[macmini.local:11434](http://macmini.local:11434)"
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
        title: 'Stromverbrauch und Thermik (geschätzt)',
        content: 'Der M6/M5-Pro-Mac-Mini erscheint am 22. September 2026 — PromptQuorum hat diese Hardware nicht getestet. Die folgenden Werte sind Schätzungen auf Basis von Apples veröffentlichten TDP-Angaben, Apples eigenen Leistungsangaben (bis zu 4-fache KI-Leistung gegenüber der M4-Generation) und dem Strom-/Temperaturverhalten früherer Apple-Silicon-Mac-Mini-Generationen unter vergleichbaren Ollama + Metal-Workloads. Stromkosten bei 0,30 €/kWh (deutscher Durchschnitt).',
        tableFormat: true,
        columns: ['Arbeitslast', 'Leistung (geschätzt)', 'Jahreskosten (24/7, 0,30 €/kWh)'],
        rows: [
          { 'Arbeitslast': 'Leerlauf', 'Leistung (geschätzt)': '8 W', 'Jahreskosten (24/7, 0,30 €/kWh)': 'ca. 21 €/Jahr' },
          { 'Arbeitslast': 'Llama 8B-Inferenz', 'Leistung (geschätzt)': '25–35 W', 'Jahreskosten (24/7, 0,30 €/kWh)': 'ca. 79 €/Jahr' },
          { 'Arbeitslast': 'Llama 34B-Inferenz', 'Leistung (geschätzt)': '40–55 W', 'Jahreskosten (24/7, 0,30 €/kWh)': 'ca. 123 €/Jahr' },
          { 'Arbeitslast': 'Gemischte typische Last', 'Leistung (geschätzt)': '15–25 W', 'Jahreskosten (24/7, 0,30 €/kWh)': 'ca. 53 €/Jahr' },
        ],
        items: [
          'Oberflächentemperatur unter Last (geschätzt): 35–42 °C (warm bei Berührung)',
          'CPU-Innentemperatur (geschätzt): 65–75 °C (weit unter Drosselungsschwelle)',
          'Lüfter: dreht bei der lüfterlosen M6-Basis voraussichtlich nie; kurz mit niedriger Drehzahl beim M5 Pro unter Spitzenlast erwartet',
          'Frühere Apple-Silicon-Mac-Mini-Generationen zeigten keine Thermaldrosselung unter dauerhafter LLM-Last — für die M6/M5-Pro-Generation wird das gleiche thermische Design erwartet, ausstehend unabhängige Tests nach Erscheinen am 22. September 2026',
          'Belüftung: offener Aufstellort empfohlen — kein geschlossener Schrank',
          'SSD-Haltbarkeit: 600 TBW typisch = ca. 30 Jahre KI-Server-Schreibmuster',
        ],
        note: 'Geschätzter Jahresstrom für gemischte typische Last: ca. 26–53 € (bei 0,30 €/kWh). Dauerbetrieb für ein ganzes Jahr wird voraussichtlich weniger als ein Monat ChatGPT Plus kosten. Diese Werte werden nach Markteinführung durch reale Messungen aktualisiert.',
        image: '/images/mac-mini-m5-local-ai-server-power-draw-by-workload-en.svg',
        imageCaption: 'Geschätzter Stromverbrauch des Mac Mini M5 Pro nach Arbeitslast: 8 W im Leerlauf, 25–35 W bei Llama-8B-Inferenz, 40–55 W bei Llama-34B-Inferenz — gegenüber 200–300 W bei einem Desktop mit RTX 4070. Schätzungen, nicht unabhängig gemessen — Markteinführung 22. September 2026.',
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
          { 'Jahr': 'Jahr 1', 'Mac Mini KI-Server': 'ab 1.899 € Hardware + 53 € Strom = 1.952 €', '4× ChatGPT Plus': '960 €', 'Differenz': '–992 € (Mac teurer in J1)' },
          { 'Jahr': 'Jahr 2', 'Mac Mini KI-Server': '53 € (nur Strom)', '4× ChatGPT Plus': '960 €', 'Differenz': '+907 € gespart' },
          { 'Jahr': 'Jahr 3', 'Mac Mini KI-Server': '53 €', '4× ChatGPT Plus': '960 €', 'Differenz': '+907 € gespart' },
          { 'Jahr': 'Jahr 4', 'Mac Mini KI-Server': '53 €', '4× ChatGPT Plus': '960 €', 'Differenz': '+907 € gespart' },
          { 'Jahr': 'Jahr 5', 'Mac Mini KI-Server': '53 €', '4× ChatGPT Plus': '960 €', 'Differenz': '+907 € gespart' },
          { 'Jahr': '5-Jahres-Gesamt', 'Mac Mini KI-Server': 'ab 2.164 €', '4× ChatGPT Plus': '4.800 €', 'Differenz': '+2.636 € gespart' },
        ],
        items: [
          'Amortisationszeit für 4-Personen-Familie (vs. 4× ChatGPT Plus, zum Einstiegspreis von 1.899 €): ca. 19 Monate',
          'Coding-Agent (vs. Copilot, 9 €/Nutzer/Monat) — 1 Entwickler: Amortisation in ca. 15 Monaten',
          'Coding-Agent — 4-Personen-Entwicklungsteam: Amortisation in ca. 4 Monaten',
          'Coding-Agent — 10-Personen-Team: Amortisation in ca. 1,5 Monaten',
        ],
        note: 'TCO basiert auf 960 €/Jahr (4× ChatGPT Plus à 20 €/Nutzer/Monat) und dem Einstiegspreis des M5 Pro von 1.899 €. Apple hat noch keine Preise für Speicherkonfigurationen oberhalb der Basis veröffentlicht — die in diesem Leitfaden verwendete 64-GB-Konfiguration kostet vermutlich mehr; genaue Konfigurationspreise auf apple.com prüfen. Alle Daten bleiben privat, keine Kosten pro Anfrage, Offline-Funktion inklusive.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Ist der neue Mac Mini leiser als Alternativen?', a: 'Ja, konstruktionsbedingt. Der M6-Basis ist lüfterlos. Der M5-Pro-Lüfter dürfte selten drehen und dabei sehr leise sein — wie bei früheren Apple-Silicon-Mac-Mini-Generationen. GPU-Desktop: ca. 50–70 dB. Mac Mini: erwartet nahe 0 dB im Ruhezustand, niedrige dB-Werte kurz unter starker 34B+-Last. Unabhängige Lautstärkemessungen liegen noch nicht vor; die Hardware erscheint am 22. September 2026.' },
          { q: 'Kann ich remote auf den Mac Mini zugreifen?', a: 'Ja — SSH über Terminal oder Bildschirmfreigabe (VNC) über Systemeinstellungen → Freigabe → Remote-Verwaltung. Im Heimnetz: ssh nutzer@macmini.local. Für Fernzugriff: erst Tailscale, dann SSH über Tailscale-IP.' },
          { q: 'Was wenn ich höheren Durchsatz benötige?', a: 'Upgrade-Pfad: Apples aktuelles Mac-Studio-Lineup prüfen — höhere Unified-Memory-Obergrenze und mehr GPU-Kerne als der Mac Mini. Für Server-Farmen mehrere Mac Minis verkabeln und mit Nginx lastverteilen.' },
          { q: 'Wie lange hält Mac Mini als 24/7-KI-Server?', a: 'Apple Silicon Macs sind für Dauerbetrieb ausgelegt. Erwartete Lebensdauer: 7–10 Jahre. SSD-Haltbarkeit (600 TBW typisch) deckt 25–30 Jahre KI-Workloads ab. Jährliche Ausfallrate unter 0,5 %.' },
          { q: 'Kann ich mehrere Nutzer gleichzeitig bedienen?', a: 'Ja. OLLAMA_NUM_PARALLEL=2 (oder höher bei mehr Speicher) setzen, um parallele Anfragen zu verarbeiten. Der 64-GB-M5-Pro dürfte komfortabel 2–3 gleichzeitige Nutzer mit 8B-Modellen bedienen; der 32-GB-M6 bietet weniger Spielraum dafür.' },
          { q: 'Was passiert bei Stromausfall?', a: 'Nach Wiederherstellung startet macOS automatisch, wenn „Nach Stromausfall automatisch starten" in Systemeinstellungen → Energie aktiviert ist. Ollama startet als brew-Dienst. Modelle laden beim ersten Aufruf (5–15 s Verzögerung).' },
          { q: 'Kann ich eine externe GPU hinzufügen?', a: 'Nein. Apple Silicon unterstützt keine externen GPUs für Metal/ML-Beschleunigung. Das Unified-Memory-Konzept ist das Design. Für mehr Leistung Apples aktuelles Mac-Studio-Lineup prüfen.' },
          { q: 'Ist der Mac Mini für den Einsatz über- oder unterdimensioniert?', a: 'Für 1–4-Personen-Haushalte oder kleine Teams mit 8B–34B-Modellen: genau richtig, mit dem 64-GB-M5-Pro. Für 70B+-Modelle: unterdimensioniert — Apples Mac-Studio-Lineup für höhere Speicherobergrenzen prüfen. Für winzige Modelle im Hobby-Budget: überdimensioniert. Für den vollständigen Vier-Dienste-Stack (LLM + Whisper + RAG + Sprache) gleichzeitig: die 32-GB-gedeckelte M6-Basis ist unterdimensioniert — den 64-GB-M5-Pro verwenden.' },
          { q: 'Gibt es einen einfachen "M5"-Mac-Mini?', a: 'Nein. Apples Ankündigung vom 25. August 2026 verwendet den M6-Chip für den Basis-Mac-Mini und den M5-Pro-Chip für die obere Stufe — Apple hat ein einfaches "M5" für die Mac-Mini-Reihe komplett übersprungen (der M5-Chip erschien früher 2026 im MacBook Air/Pro, nicht im Mac Mini).' },
          { q: 'Ist der neue Mac Mini DSGVO-konform für den Betrieb als KI-Server?', a: 'Die lokale Verarbeitung auf dem Mac Mini ohne Cloud-Verbindung erfüllt die DSGVO-Grundsätze der Datenminimierung und Zweckbindung (Art. 5 DSGVO). Da keine Daten an Dritte übertragen werden, entfällt ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO. Für Unternehmen im Gesundheits- oder Finanzbereich wird eine Datenschutz-Folgenabschätzung (DSFA, Art. 35 DSGVO) empfohlen. BSI-Grundschutz SYS.2.6 gilt für die Absicherung des Servers.' },
          { q: 'Eignet sich der neue Mac Mini als KI-Server für den deutschen Mittelstand?', a: 'Ja. Für KMU mit 10–200 Mitarbeitern bietet der Mac Mini M5 Pro 64 GB (ab ca. 1.899 €) eine kosteneffiziente, DSGVO-konforme Alternative zu Cloud-KI. Typische Mittelstandsanwendungen: Dokumentenanalyse (on-premise), interne Wissensdatenbank (RAG), Coding-Assistent für Entwicklungsteams. Apple Secure Enclave und macOS-Systemhärtung erfüllen BSI-Sicherheitsanforderungen. Amortisationszeit für ein 4-Personen-Team ca. 19 Monate.' },
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
    next_refresh_due: '2027-02-15',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-fr.webp',
    title: 'Mac Mini M6 comme serveur IA local 2026 : LLM, Whisper, RAG, assistant vocal 24/7',
    seoTitle: 'Mac Mini M6 / M5 Pro Serveur IA Local : 24/7',
    intro: 'Apple a annoncé le nouveau Mac Mini le 25 août 2026 : la puce M6 (à partir d\'env. 999 €, 32 Go de mémoire unifiée max.) et la puce M5 Pro (à partir d\'env. 1 899 €, 64 Go de mémoire unifiée max.). Les deux sortent le 22 septembre 2026. Chaque configuration fait un excellent serveur IA local silencieux et permanent. Ce guide couvre la configuration matérielle, la stratégie d\'installation et l\'analyse coût-bénéfice pour exécuter Ollama LLM, Whisper STT, pipeline RAG et assistant vocal. Coût électrique estimé : env. 44 €/an.',
    metaDescription: 'Serveur IA local sur le nouveau Mac Mini M6 ou M5 Pro. 25–55 W, env. 44 €/an. LLM Ollama, Whisper STT, RAG, assistant vocal. Silencieux, toujours en ligne.',
    twitterDescription: 'Mac Mini M5 Pro 64 Go : serveur IA local silencieux idéal. LLM + Whisper + RAG pour env. 44 €/an d\'électricité. Guide complet.',
    publishDate: '2026-05-15',
    dateModified: '2026-08-26',
    ctaText: 'Votre serveur Mac Mini IA est opérationnel ? Comparez les réponses de votre Llama ou DeepSeek local avec GPT-4, Claude, Gemini et 22 autres modèles en un seul envoi avec PromptQuorum — vérifiez que votre configuration auto-hébergée délivre une qualité cloud.',
    current_models_mentioned: ['Llama 3.1 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: 'Utilisateurs souhaitant un serveur IA local permanent pour la maison ou le bureau.',
    readTime: '12 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini serveur IA local',
    targetKeywords: ['Mac Mini serveur IA', 'LLM always-on', 'infrastructure IA locale', 'Ollama permanent', 'Mac Mini M6 serveur', 'Mac Mini M5 Pro serveur'],
    leadAnswerBlock: '**Le Mac Mini M5 Pro 64 Go (à partir d\'env. 1 899 €, sortie le 22 septembre 2026) est la meilleure option de serveur IA always-on : silencieux (quasi sans ventilateur), 25–55 W, estimé à env. 44 €/an d\'électricité. Sa limite de 64 Go de mémoire unifiée est ce qui permet de faire tourner Ollama 34B, Whisper STT, RAG et assistant vocal simultanément — le Mac Mini M6 de base (à partir d\'env. 999 €) plafonne à 32 Go, ce qui ne suffit pas pour les quatre services à la fois. Apple n\'a pas encore livré ce matériel : les chiffres de consommation et de thermique ci-dessous sont des estimations, pas des benchmarks mesurés par PromptQuorum.**',
    nextStep: {
      text: 'Prêt à installer Ollama sur votre Mac Mini M6 ou M5 Pro ? Voici le guide d\'installation complet.',
      label: 'Ollama sur Mac — Guide d\'installation 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      fr: {
        question: 'Pourquoi le nouveau Mac Mini est-il un bon serveur IA local ?',
        answer: 'Silencieux (base sans ventilateur, Pro quasi silencieux), 25–55 W (contre 300 W+ pour un PC avec GPU), estimé à env. 44 €/an d\'électricité (contre 350–500 € GPU). La configuration M5 Pro 64 Go fait tourner Ollama LLM 34B + Whisper + RAG + assistant vocal simultanément — le M6 de base plafonne à 32 Go et offre moins de marge pour plusieurs services. Sortie le 22 septembre 2026.',
        bullets: [
          'M5 Pro 64 Go : à partir d\'env. 1 899 €, sortie le 22 septembre 2026',
          'M6 32 Go max. : à partir d\'env. 999 €, même date de sortie',
          'Consommation : 25–55 W attendue (contre 300 W+ PC avec GPU)',
          'Électricité annuelle : estimée à env. 26–44 € (contre 350–500 € GPU, à 0,25 €/kWh)',
          'Silencieux : sans ventilateur (M6) à quasi sans ventilateur (M5 Pro) sous charge LLM typique',
          'API REST accessible depuis tous les appareils du réseau local',
          'Analyse coût-bénéfice : voir la section TCO ci-dessous',
        ],
        updatedDate: '2026-08-26',
      },
    },
    toc: [
      { label: 'Pourquoi Mac Mini M6/M5 Pro', anchor: '#why' },
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
        title: 'Pourquoi le nouveau Mac Mini (M6/M5 Pro) est un excellent serveur IA',
        content: [
          'Apple a annoncé le nouveau Mac Mini le 25 août 2026 : le M6 (à partir d\'env. 999 €, 32 Go de mémoire unifiée max.) et le M5 Pro (à partir d\'env. 1 899 €, 64 Go de mémoire unifiée max.). Les deux sortent le 22 septembre 2026. La configuration 64 Go du M5 Pro est le meilleur choix pour un serveur IA local silencieux et permanent : silence quasi total (base sans ventilateur, Pro très discret), faible consommation (25–55 W contre 300 W+ pour un PC avec GPU) et assez de mémoire unifiée pour faire tourner un modèle de 34B paramètres avec Whisper, RAG et un assistant vocal simultanément.',
          'Coût électrique annuel estimé : env. 26–44 € contre 350–500 € pour un PC avec GPU équivalent (à 0,25 €/kWh) — moins de deux mois d\'un abonnement ChatGPT Plus, chaque année. Le matériel ne sortant que le 22 septembre 2026, aucun benchmark indépendant n\'existe encore ; les chiffres de consommation et de performance de ce guide sont des estimations basées sur les spécifications publiées par Apple et les générations précédentes de Mac Mini Apple Silicon, pas des résultats mesurés par PromptQuorum.',
        ],
        tableFormat: true,
        columns: ['Propriété', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'Propriété': 'Coût matériel', 'Mac Mini M5 Pro': 'à partir de 1 899 €', 'Desktop + RTX 4070': 'à partir de 1 200 €', 'Raspberry Pi 5': 'env. 80 €' },
          { 'Propriété': 'Consommation (repos)', 'Mac Mini M5 Pro': '8 W (estimé)', 'Desktop + RTX 4070': '50 W', 'Raspberry Pi 5': '5 W' },
          { 'Propriété': 'Consommation (LLM)', 'Mac Mini M5 Pro': '25–55 W (estimé)', 'Desktop + RTX 4070': '200–300 W', 'Raspberry Pi 5': 'Impossible' },
          { 'Propriété': 'Électricité annuelle (0,25 €/kWh)', 'Mac Mini M5 Pro': 'env. 26–44 € (estimé)', 'Desktop + RTX 4070': 'env. 350–500 €', 'Raspberry Pi 5': 'env. 8 €' },
          { 'Propriété': 'Niveau sonore', 'Mac Mini M5 Pro': 'Quasi silencieux', 'Desktop + RTX 4070': 'Bruyant (3+ ventilateurs)', 'Raspberry Pi 5': 'Silencieux' },
          { 'Propriété': 'Taille de modèle max.', 'Mac Mini M5 Pro': '34B (Q5)', 'Desktop + RTX 4070': '8B (12 Go VRAM)', 'Raspberry Pi 5': '1–3B seulement' },
          { 'Propriété': 'Fiabilité 24/7', 'Mac Mini M5 Pro': 'Excellente', 'Desktop + RTX 4070': 'Bonne', 'Raspberry Pi 5': 'Excellente' },
          { 'Propriété': 'Encombrement', 'Mac Mini M5 Pro': '13×13 cm', 'Desktop + RTX 4070': 'Tour complète', 'Raspberry Pi 5': '8×8 cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Recommandation de configuration matérielle',
        content: 'Le M5 Pro en 64 Go (à partir d\'env. 1 899 €) est la configuration à acheter pour un stack serveur IA complet et permanent : il fait tourner des modèles 34B, supporte les quatre services simultanés couverts par ce guide (LLM + Whisper + RAG + assistant vocal) et dispose d\'une marge pour 2–3 ans de croissance des modèles. Le M6 de base plafonne à 32 Go de mémoire unifiée — suffisant pour un LLM plus un service léger, mais pas pour les quatre à la fois. Ne jamais acheter le palier M6 limité à 32 Go si vous prévoyez de faire tourner le stack complet.',
        tableFormat: true,
        columns: ['Configuration', 'Prix (2026)', 'Mémoire max.', 'Idéal pour', 'Modèles supportés'],
        rows: [
          { 'Configuration': 'Mac Mini M6 (base)', 'Prix (2026)': 'à partir de 999 €', 'Mémoire max.': 'jusqu\'à 32 Go', 'Idéal pour': 'Un LLM + un service léger', 'Modèles supportés': '7B–13B Q4' },
          { 'Configuration': 'Mac Mini M5 Pro ★', 'Prix (2026)': 'à partir de 1 899 €', 'Mémoire max.': 'jusqu\'à 64 Go', 'Idéal pour': 'Stack complet permanent (LLM+Whisper+RAG+vocal)', 'Modèles supportés': 'Modèles 34B confortablement' },
        ],
        note: '★ Recommandé pour cet usage. La limite de 64 Go est déterminante : faire tourner LLM, Whisper STT, pipeline RAG et assistant vocal simultanément exige que les quatre modèles résident en mémoire en même temps, ce que le M6 limité à 32 Go ne peut pas accueillir. Planification stockage : Llama 3.1 8B Q4 env. 5 Go par modèle, Whisper large-v3 env. 3 Go, modèle d\'embedding env. 0,5 Go, ChromaDB avec 10 000 documents env. 2 Go. Setup 5 modèles typique : 50–80 Go. SSD 512 Go minimum ; 1 To pour les utilisateurs avancés. Apple n\'a pas publié de tarifs par palier de mémoire au-delà du prix de base — vérifier le prix exact configuré sur apple.com.',
        image: '/images/mac-mini-m5-local-ai-server-memory-tier-capacity-en.svg',
        imageCaption: 'Limite mémoire du Mac Mini M6 (32 Go max.) vs M5 Pro (64 Go max.) face à la taille maximale de modèle : le M6 32 Go convient à un LLM plus un service léger, tandis que le M5 Pro 64 Go fait tourner confortablement un modèle 34B avec Whisper, RAG et assistant vocal simultanément.',
      },
      setup: {
        id: 'setup',
        title: 'Installation complète du serveur (30 minutes, de l\'unboxing à la mise en service)',
        content: 'Ces étapes configurent le Mac Mini M6 ou M5 Pro comme un serveur IA permanent accessible sur le réseau. Une fois toutes les étapes terminées, chaque appareil du réseau local peut envoyer des requêtes à l\'API Ollama du Mac Mini sur le port 11434.',
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
        content: 'Stack : Ollama (Llama 3.1 8B) + nomic-embed-text + ChromaDB. Tout fonctionne sur le Mac Mini, accessible via le réseau local. Cas d\'usage : documents familiaux, contrats, manuels techniques, recettes, dossiers médicaux, articles de recherche. Tout est privé, consultable et hors ligne.',
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
          'Stack sur Mac Mini : whisper.cpp pour la STT (accéléré Metal), Ollama Llama 3.1 8B pour le raisonnement, Piper TTS pour la synthèse vocale, protocole Wyoming pour l\'intégration Home Assistant.',
          'Activation par mot de réveil via les appareils clients (Apple HomePod via Home Assistant, ou réseaux de microphones Raspberry Pi). Latence bout en bout estimée sur M5 Pro : environ 1,2 seconde (STT + LLM + TTS combinés) — une estimation basée sur les générations précédentes de Mac Mini Apple Silicon et les gains de performance annoncés par Apple ; le Mac Mini M6/M5 Pro n\'est pas encore sorti, aucune mesure indépendante n\'est disponible.',
          'Électricité annuelle estimée : env. 35 €. Service cloud comparable (Google Home, Amazon Alexa) : gratuit mais toutes vos données vocales sont transmises à des serveurs externes.',
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
    "apiBase": "[macmini.local:11434](http://macmini.local:11434)"
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
        title: 'Consommation électrique et performances thermiques (estimées)',
        content: 'Le Mac Mini M6/M5 Pro sort le 22 septembre 2026 — PromptQuorum n\'a pas testé ce matériel. Les chiffres ci-dessous sont des estimations basées sur les spécifications TDP publiées par Apple, les gains de performance annoncés par Apple (jusqu\'à 4× la performance IA de la génération M4) et le comportement énergétique/thermique observé sur les générations précédentes de Mac Mini Apple Silicon sous des charges Ollama + Metal équivalentes. Coûts calculés à 0,25 €/kWh (tarif réglementé EDF en France).',
        tableFormat: true,
        columns: ['Charge', 'Consommation (estimée)', 'Coût annuel (24/7, 0,25 €/kWh)'],
        rows: [
          { 'Charge': 'Repos', 'Consommation (estimée)': '8 W', 'Coût annuel (24/7, 0,25 €/kWh)': 'env. 18 €/an' },
          { 'Charge': 'Inférence Llama 8B', 'Consommation (estimée)': '25–35 W', 'Coût annuel (24/7, 0,25 €/kWh)': 'env. 66 €/an' },
          { 'Charge': 'Inférence Llama 34B', 'Consommation (estimée)': '40–55 W', 'Coût annuel (24/7, 0,25 €/kWh)': 'env. 103 €/an' },
          { 'Charge': 'Charge mixte typique', 'Consommation (estimée)': '15–25 W', 'Coût annuel (24/7, 0,25 €/kWh)': 'env. 44 €/an' },
        ],
        items: [
          'Température de surface sous charge (estimée) : 35–42 °C (chaud au toucher)',
          'Température CPU interne (estimée) : 65–75 °C (bien en dessous du seuil de ralentissement)',
          'Ventilateur : ne devrait jamais s\'enclencher sur le M6 sans ventilateur ; brièvement attendu sur M5 Pro lors de pics',
          'Les générations précédentes de Mac Mini Apple Silicon ne montrent aucun ralentissement thermique sous charge LLM soutenue — la génération M6/M5 Pro devrait suivre la même conception thermique, en attendant des tests indépendants après la sortie du 22 septembre 2026',
          'Ventilation : espace ouvert recommandé — pas dans une armoire fermée',
          'Endurance SSD : 600 To d\'écriture typique = ~30 ans de patrons d\'écriture serveur IA',
        ],
        note: 'Coût électrique annuel estimé en charge mixte typique : env. 26–44 €. Un an de fonctionnement permanent devrait coûter moins d\'un mois d\'abonnement ChatGPT Plus. Ces chiffres seront mis à jour avec des mesures réelles après la sortie.',
        image: '/images/mac-mini-m5-local-ai-server-power-draw-by-workload-en.svg',
        imageCaption: 'Consommation estimée du Mac Mini M5 Pro par charge de travail : 8 W au repos, 25–35 W en inférence Llama 8B, 40–55 W en inférence Llama 34B — contre 200–300 W pour un PC de bureau avec RTX 4070. Estimations non mesurées indépendamment — sortie le 22 septembre 2026.',
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
          { 'Année': 'Année 1', 'Mac Mini Serveur IA': 'à partir de 1 899 € matériel + 44 € électricité = 1 943 €', '4× ChatGPT Plus': '960 €', 'Différence': '–983 € (Mac plus cher en A1)' },
          { 'Année': 'Année 2', 'Mac Mini Serveur IA': '44 € (électricité seule)', '4× ChatGPT Plus': '960 €', 'Différence': '+916 € économisés' },
          { 'Année': 'Année 3', 'Mac Mini Serveur IA': '44 €', '4× ChatGPT Plus': '960 €', 'Différence': '+916 € économisés' },
          { 'Année': 'Année 4', 'Mac Mini Serveur IA': '44 €', '4× ChatGPT Plus': '960 €', 'Différence': '+916 € économisés' },
          { 'Année': 'Année 5', 'Mac Mini Serveur IA': '44 €', '4× ChatGPT Plus': '960 €', 'Différence': '+916 € économisés' },
          { 'Année': 'Total 5 ans', 'Mac Mini Serveur IA': 'à partir de 2 119 €', '4× ChatGPT Plus': '4 800 €', 'Différence': '+2 681 € économisés' },
        ],
        items: [
          'Durée de rentabilisation pour une famille de 4 (vs. 4× ChatGPT Plus, au prix de départ de 1 899 €) : environ 19 mois',
          'Agent de code (vs. Copilot à env. 9 €/mois) — 1 développeur : rentabilisé en environ 15 mois',
          'Agent de code — équipe de 4 développeurs : rentabilisé en environ 4 mois',
          'Agent de code — équipe de 10 : rentabilisé en environ 1,5 mois',
        ],
        note: 'TCO basé sur 960 €/an (4× ChatGPT Plus à 20 €/utilisateur/mois) et le prix de départ du M5 Pro à 1 899 €. Apple n\'a pas publié de tarifs pour les configurations mémoire au-delà de la base — la configuration 64 Go utilisée dans ce guide coûte probablement plus cher ; vérifier le prix exact configuré sur apple.com. Toutes les données restent privées, aucun coût par requête, fonctionnement hors ligne inclus.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Le nouveau Mac Mini est-il plus silencieux que les alternatives ?', a: 'Oui, par conception. Le M6 de base est sans ventilateur. Celui du M5 Pro devrait tourner rarement et très doucement — comme les générations précédentes de Mac Mini Apple Silicon. PC avec GPU : ~50–70 dB. Mac Mini : proche de 0 dB au repos attendu, dB faibles brièvement sous charge 34B+ intensive. Aucune mesure sonore indépendante n\'est encore disponible ; le matériel sort le 22 septembre 2026.' },
          { q: 'Puis-je accéder au Mac Mini à distance ?', a: 'Oui — SSH via terminal, ou Partage d\'écran (VNC) via Réglages Système → Partage → Gestion à distance. Sur le réseau local : ssh utilisateur@macmini.local. Pour l\'accès distant : utiliser Tailscale d\'abord, puis SSH via l\'IP Tailscale.' },
          { q: 'Que faire si j\'ai besoin d\'un débit plus élevé ?', a: 'Chemin de montée en gamme : consulter la gamme Mac Studio actuelle d\'Apple pour une limite de mémoire unifiée plus élevée et plus de cœurs GPU que le Mac Mini. Pour des fermes de serveurs, mettre plusieurs Mac Mini en rack et répartir la charge avec Nginx.' },
          { q: 'Combien de temps dure le Mac Mini comme serveur IA 24/7 ?', a: 'Les Mac Apple Silicon sont conçus pour un fonctionnement continu. Durée de vie estimée : 7–10 ans. L\'endurance SSD (600 To d\'écriture typique) couvre 25–30 ans de charges de travail IA. Taux de défaillance annuel inférieur à 0,5 %.' },
          { q: 'Puis-je servir plusieurs utilisateurs simultanément ?', a: 'Oui. Configurer OLLAMA_NUM_PARALLEL=2 (ou plus avec plus de mémoire) pour gérer les requêtes parallèles. Le M5 Pro 64 Go devrait gérer confortablement 2–3 utilisateurs simultanés sur des modèles 8B ; le M6 32 Go offre moins de marge pour cela.' },
          { q: 'Que se passe-t-il en cas de coupure de courant ?', a: 'Après le rétablissement, macOS démarre automatiquement si « Démarrer après une coupure de courant » est activé dans Réglages Système → Énergie. Ollama démarre en tant que service brew. Les modèles se rechargent à la première requête (délai de 5–15 s).' },
          { q: 'Peut-on ajouter un GPU externe ?', a: 'Non. Apple Silicon ne supporte pas les GPU externes pour l\'accélération Metal/ML. L\'architecture mémoire unifiée est la conception même de la puce. Pour plus de vitesse, consulter la gamme Mac Studio actuelle d\'Apple.' },
          { q: 'Le Mac Mini est-il surdimensionné ou sous-dimensionné pour un serveur IA ?', a: 'Pour les foyers de 1 à 4 personnes ou les petites équipes utilisant des modèles 8B–34B : parfaitement adapté, avec le M5 Pro 64 Go. Pour les modèles 70B+ : sous-dimensionné — consulter la gamme Mac Studio d\'Apple pour des limites de mémoire plus élevées. Pour les petits modèles avec un petit budget : surdimensionné. Pour faire tourner le stack complet à quatre services (LLM + Whisper + RAG + vocal) simultanément : le M6 de base limité à 32 Go est sous-dimensionné — utiliser le M5 Pro 64 Go.' },
          { q: 'Existe-t-il un simple Mac Mini "M5" ?', a: 'Non. L\'annonce d\'Apple du 25 août 2026 utilise la puce M6 pour le Mac Mini de base et la puce M5 Pro pour le palier supérieur — Apple a entièrement sauté un simple « M5 » pour la gamme Mac Mini (la puce M5 est sortie plus tôt en 2026 dans la gamme MacBook Air/Pro, pas dans le Mac Mini).' },
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
    next_refresh_due: '2027-02-15',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-ja.webp',
    title: 'Mac Mini M6をローカルAIサーバーとして活用 2026：LLM・Whisper・RAG・音声アシスタント常時稼働',
    seoTitle: 'Mac Mini M6/M5 Pro：24/7 AIサーバー',
    intro: 'Appleは2026年8月25日、新型Mac Miniを発表しました。M6チップ（約¥134,800から、最大32GBユニファイドメモリ）とM5 Proチップ（約¥254,800から、最大64GBユニファイドメモリ）です。どちらも2026年9月22日に発売されます。いずれの構成も静音・常時稼働のローカルAIサーバーとして優れた選択肢です。本ガイドでは、ハードウェア構成、Ollama LLM・Whisper STT・RAGパイプライン・音声アシスタントスタックのセットアップ戦略、費用対効果分析を解説します。推定電気代は年間約5,400円。',
    metaDescription: '新型Mac Mini M6またはM5 ProでローカルAIサーバーを構築。25～55W、年間電気代5,400円程度。Ollama LLM、Whisper STT、RAGパイプライン、音声アシスタント常時稼働。完全セットアップ方法、実用的ユースケース、5年間TCO分析。',
    twitterDescription: 'Mac Mini M5 Pro 64GB：理想的な静音ローカルAIサーバー。LLM+Whisper+RAGを年間電気代約5,400円で常時稼働。完全ガイド。',
    publishDate: '2026-05-15',
    dateModified: '2026-08-26',
    ctaText: 'Mac Mini AIサーバーを構築しましたか？PromptQuorumで、ローカルのLlamaまたはDeepSeekの回答をGPT-4、Claude、Geminiなど22のモデルと一括比較して、自己ホスト環境がクラウド品質を実現しているか検証しましょう。',
    current_models_mentioned: ['Llama 3.1 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: '家庭やオフィスで常時稼働のローカルAIサーバーを構築したいユーザー。',
    readTime: '12分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini ローカルAIサーバー',
    targetKeywords: ['Mac Mini AIサーバー', '常時稼働LLM', 'ローカルAIインフラ', 'Ollama常時稼働', 'Mac Mini M6 サーバー', 'Mac Mini M5 Pro サーバー'],
    leadAnswerBlock: '**Mac Mini M5 Pro 64GB（約¥254,800から、2026年9月22日発売）が最も優れた常時稼働AIサーバーです。静音（ほぼファンレス）、25〜55Wの消費電力、推定年間電気代約5,400円。64GBというメモリ上限のおかげで、Ollama 34Bモデル・Whisper STT・RAGパイプライン・音声アシスタントを同時実行できます — ベースのMac Mini M6（約¥134,800から）は32GBが上限で、4つのサービスすべてを同時実行するには不足します。Appleはまだこのハードウェアを出荷していないため、以下の消費電力・熱に関する数値は推定値であり、PromptQuorumが計測したベンチマークではありません。**',
    nextStep: {
      text: 'Mac Mini M6またはM5 ProにOllamaをセットアップする準備はできましたか？完全インストールガイドをご紹介します。',
      label: 'Mac上のOllama — セットアップガイド2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      ja: {
        question: 'なぜ新型Mac Miniはローカルの AIサーバーに向いているのか？',
        answer: '静音（ベースはファンレス、Proはほぼ無音）、25〜55W（GPU搭載デスクトップの300W以上に対して）、推定年間電気代は約5,400円（GPUの約40,000〜50,000円に対して）。64GBのM5 Pro構成ならOllama 34B LLM・Whisper・RAG・音声アシスタントを同時実行できます — ベースのM6は32GBが上限で、複数サービス同時実行の余裕は少なくなります。2026年9月22日発売。',
        bullets: [
          'M5 Pro 64GB：約¥254,800から、2026年9月22日発売',
          'M6（最大32GB）：約¥134,800から、同日発売',
          '消費電力：25〜55W見込み（GPU搭載デスクトップの300W以上に対して）',
          '年間電気代：推定約5,400円（GPUの約40,000〜50,000円に対して、31円/kWh）',
          '静音：ファンレス（M6）〜ほぼファンレス（M5 Pro）、通常のLLM負荷時',
          'REST APIでLAN内の全デバイスからアクセス可能',
          '費用対効果分析：下記TCOセクションを参照',
        ],
        updatedDate: '2026-08-26',
      },
    },
    toc: [
      { label: 'なぜMac Mini M6/M5 Proなのか', anchor: '#why' },
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
        title: '新型Mac Mini（M6/M5 Pro）が優れたAIサーバーである理由',
        content: [
          'Appleは2026年8月25日、新型Mac Miniを発表しました。M6（約¥134,800から、最大32GBユニファイドメモリ）とM5 Pro（約¥254,800から、最大64GBユニファイドメモリ）です。どちらも2026年9月22日に発売されます。静音・常時稼働のローカルAIサーバーとしては、64GB構成のM5 Proがより優れた選択です。ほぼ無音の動作、低消費電力（25〜55W対GPU搭載デスクトップの300W以上）、34Bパラメータモデルに加えてWhisper・RAG・音声アシスタントを同時実行できる十分なユニファイドメモリを兼ね備えています。',
          '推定年間電気代は約5,400円（31円/kWh）で、GPU搭載デスクトップ相当機の約40,000〜50,000円に対してわずかな金額です。毎年、ChatGPT Plusの1か月分より少ないコストで運用できる計算になります。このハードウェアは2026年9月22日発売のため、独立したベンチマークはまだ存在しません。本ガイドの消費電力・性能に関する数値はAppleが公表した仕様と過去のApple Silicon Mac Mini世代に基づく推定であり、PromptQuorumが計測した結果ではありません。',
        ],
        tableFormat: true,
        columns: ['項目', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { '項目': 'ハードウェアコスト', 'Mac Mini M5 Pro': '約¥254,800から', 'Desktop + RTX 4070': '¥180,000以上', 'Raspberry Pi 5': '約¥12,000' },
          { '項目': 'アイドル消費電力', 'Mac Mini M5 Pro': '8W（推定）', 'Desktop + RTX 4070': '50W', 'Raspberry Pi 5': '5W' },
          { '項目': 'LLM負荷時消費電力', 'Mac Mini M5 Pro': '25〜55W（推定）', 'Desktop + RTX 4070': '200〜300W', 'Raspberry Pi 5': '不可能' },
          { '項目': '年間電気代（31円/kWh）', 'Mac Mini M5 Pro': '約4,000〜8,000円（推定）', 'Desktop + RTX 4070': '約40,000〜50,000円', 'Raspberry Pi 5': '約1,200円' },
          { '項目': '騒音レベル', 'Mac Mini M5 Pro': 'ほぼ静音', 'Desktop + RTX 4070': '騒々しい（ファン3基以上）', 'Raspberry Pi 5': '静音' },
          { '項目': '最大モデルサイズ', 'Mac Mini M5 Pro': '34B（Q5）', 'Desktop + RTX 4070': '8B（12GB VRAM制限）', 'Raspberry Pi 5': '1〜3Bのみ' },
          { '項目': '常時稼働信頼性', 'Mac Mini M5 Pro': '優秀', 'Desktop + RTX 4070': '良好', 'Raspberry Pi 5': '優秀' },
          { '項目': '設置面積', 'Mac Mini M5 Pro': '13×13cm', 'Desktop + RTX 4070': 'フルタワー', 'Raspberry Pi 5': '8×8cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'ハードウェア構成の推奨',
        content: '64GBのM5 Pro（約¥254,800から）は、完全な常時稼働AIサーバースタック向けに購入すべき構成です：34Bモデルの実行、本ガイドが扱う4つの同時サービス（LLM+Whisper+RAG+音声アシスタント）のサポート、そして2〜3年間のモデルサイズ成長への余裕があります。ベースのM6はユニファイドメモリが32GBまでで、LLM1つと軽いサービス1つには十分ですが、4つ同時には不足します。フルスタックを運用する予定なら、32GB上限のM6ベースは絶対に選ばないでください。',
        tableFormat: true,
        columns: ['構成', '価格（2026年）', '最大メモリ', '最適な用途', '対応モデル'],
        rows: [
          { '構成': 'Mac Mini M6（ベース）', '価格（2026年）': '約¥134,800から', '最大メモリ': '最大32GB', '最適な用途': 'LLM1つ+軽いサービス1つ', '対応モデル': '7B〜13B Q4' },
          { '構成': 'Mac Mini M5 Pro ★', '価格（2026年）': '約¥254,800から', '最大メモリ': '最大64GB', '最適な用途': '完全な常時稼働スタック（LLM+Whisper+RAG+音声）', '対応モデル': '34Bモデルを快適に実行' },
        ],
        note: '★この用途に推奨。64GBというメモリ上限が決め手です：LLM・Whisper STT・RAGパイプライン・音声アシスタントを同時実行するには、4つのモデルすべてを同時にメモリに載せる必要があり、32GB上限のM6では対応できません。ストレージ計画：Llama 3.1 8B Q4は約5GB/モデル、Whisper large-v3は約3GB、埋め込みモデルは約0.5GB、ChromaDB（1万文書）は約2GB。典型的な5モデル構成：50〜80GB使用。最低512GB SSD推奨、パワーユーザーには1TB。Appleはベース価格を超えるメモリ構成の価格をまだ公表していません — 正確な構成価格はapple.comで確認してください。',
        image: '/images/mac-mini-m5-local-ai-server-memory-tier-capacity-en.svg',
        imageCaption: 'Mac Mini M6（最大32GB）とM5 Pro（最大64GB）のメモリ上限と対応モデルサイズの比較：32GBのM6はLLM1つと軽いサービス1つに適し、64GBのM5 Proは34Bモデルに加えてWhisper・RAG・音声アシスタントを同時に快適に実行できます。',
      },
      setup: {
        id: 'setup',
        title: '完全なサーバーセットアップ（開封から稼働まで30分）',
        content: 'これらの手順でMac Mini M6またはM5 Proを永続的なネットワークアクセス可能なAIサーバーとして設定します。すべての手順が完了すると、LAN上のすべてのデバイスがポート11434でMac MiniのOllama APIにリクエストを送信できます。',
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
        content: 'スタック：Ollama（Llama 3.1 8B）+ nomic-embed-text + ChromaDB。すべてMac Mini上で動作し、LAN経由でアクセス可能。用途：家族の書類、法的契約書、技術マニュアル、レシピライブラリ、医療記録、研究論文。すべてプライベート。すべて検索可能。すべてオフライン。',
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
          'Mac Mini上のスタック：whisper.cpp（Metal加速でのSTT）、Ollama Llama 3.1 8B（推論）、Piper TTS（音声出力）、WyomingプロトコルによるHome Assistant連携。',
          'クライアントデバイス（Apple HomePod via Home Assistant、または各部屋のRaspberry Piマイクアレイ）でウェイクワード起動。M5 Proでの推定エンドツーエンドレイテンシ：約1.2秒（STT+LLM+TTS合計）— 過去のApple Silicon Mac Mini世代とAppleが公表した性能向上に基づく推定値です。M6/M5 Pro Mac Miniはまだ発売されておらず、独立した計測はまだありません。',
          '推定年間電気代：約4,300円。すべての音声データがプライベートに保たれます。',
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
    "apiBase": "[macmini.local:11434](http://macmini.local:11434)"
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
        title: '消費電力と熱性能（推定）',
        content: 'M6/M5 Pro Mac Miniは2026年9月22日発売で、PromptQuorumはこのハードウェアをまだテストしていません。以下の数値は、Appleが公表したTDP仕様、Apple自身の性能向上に関する主張（M4世代比で最大4倍のAI性能）、そして同等のOllama + Metalワークロードにおける過去のApple Silicon Mac Mini世代の消費電力・熱挙動に基づく推定値です。電気代は31円/kWh（日本の平均的な電力料金）で計算。',
        tableFormat: true,
        columns: ['ワークロード', '消費電力（推定）', '年間電気代（24/7、31円/kWh）'],
        rows: [
          { 'ワークロード': 'アイドル', '消費電力（推定）': '8W', '年間電気代（24/7、31円/kWh）': '約2,100円/年' },
          { 'ワークロード': 'Llama 8B推論', '消費電力（推定）': '25〜35W', '年間電気代（24/7、31円/kWh）': '約8,100円/年' },
          { 'ワークロード': 'Llama 34B推論', '消費電力（推定）': '40〜55W', '年間電気代（24/7、31円/kWh）': '約12,700円/年' },
          { 'ワークロード': '混合典型ワークロード', '消費電力（推定）': '15〜25W', '年間電気代（24/7、31円/kWh）': '約5,400円/年' },
        ],
        items: [
          '負荷時の表面温度（推定）：35〜42°C（触れると温かい）',
          '内部CPU温度（推定）：65〜75°C（スロットリング閾値を大幅に下回る）',
          'ファン：ファンレスのM6ベースでは起動しない見込み；M5 Proではピーク負荷時に短時間低回転で起動すると予想',
          '過去のApple Silicon Mac Mini世代は持続的なLLM負荷下で熱スロットリングを示していません — M6/M5 Pro世代も同じ熱設計を踏襲すると見込まれますが、2026年9月22日の発売後に独立したテストが待たれます',
          'ベンチレーション：開放されたスペース推奨 — 閉じた収納は不可',
          'SSD耐久性：典型的な600 TBW = AIサーバーの書き込みパターンで約30年',
        ],
        note: '混合典型ワークロードの推定年間電気代：約4,000〜5,400円。1年間の常時稼働コストはChatGPT Plus1か月分より少ない見込みです。これらの数値は発売後、実測値に基づいて更新されます。',
        image: '/images/mac-mini-m5-local-ai-server-power-draw-by-workload-en.svg',
        imageCaption: 'Mac Mini M5 Proのワークロード別推定消費電力：アイドル時8W、Llama 8B推論時25〜35W、Llama 34B推論時40〜55W — デスクトップRTX 4070の200〜300Wと比較。推定値であり独立して計測されたものではありません — 発売日は2026年9月22日。',
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
          { '年': '1年目', 'Mac Mini AIサーバー': '¥254,800〜 ハードウェア + ¥5,400 電気 = ¥260,200〜', '4× ChatGPT Plus': '¥144,000', '差額': '−¥116,200（Mac高い）' },
          { '年': '2年目', 'Mac Mini AIサーバー': '¥5,400（電気のみ）', '4× ChatGPT Plus': '¥144,000', '差額': '+¥138,600 節約' },
          { '年': '3年目', 'Mac Mini AIサーバー': '¥5,400', '4× ChatGPT Plus': '¥144,000', '差額': '+¥138,600 節約' },
          { '年': '4年目', 'Mac Mini AIサーバー': '¥5,400', '4× ChatGPT Plus': '¥144,000', '差額': '+¥138,600 節約' },
          { '年': '5年目', 'Mac Mini AIサーバー': '¥5,400', '4× ChatGPT Plus': '¥144,000', '差額': '+¥138,600 節約' },
          { '年': '5年間合計', 'Mac Mini AIサーバー': '¥282,200〜', '4× ChatGPT Plus': '¥720,000', '差額': '+¥437,800 節約' },
        ],
        items: [
          '4人家族での回収期間（vs. 4× ChatGPT Plus、¥254,800の最低価格基準）：約19か月',
          'コーディングエージェント（vs. Copilot月額¥1,100/ユーザー）— 1名：約15か月で回収',
          'コーディングエージェント — 4名の開発チーム：約4か月で回収',
          'コーディングエージェント — 10名チーム：約1.5か月で回収',
        ],
        note: 'TCOは¥144,000/年（4× ChatGPT Plus @ ¥3,000/ユーザー/月）とM5 Proの最低価格¥254,800を基準。Appleはベースを超えるメモリ構成の価格をまだ公表していないため、本ガイドで扱う64GB構成は実際にはこれより高額になる見込みです。正確な構成価格はapple.comで確認してください。すべてのデータがプライベート、クエリ当たりのコストなし、オフライン機能込み。',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '新型Mac Miniは代替品より静かですか？', a: 'はい、設計上そうなります。M6ベースはファンレスです。M5 Proのファンはほとんど回転せず、回転しても非常に静かになる見込みです — 過去のApple Silicon Mac Mini世代と同様です。GPU搭載デスクトップ：約50〜70dB。Mac Mini：アイドル時はほぼ0dB、34B以上の高負荷時に一時的に低いdB値が見込まれます。独立した騒音測定はまだなく、ハードウェアは2026年9月22日に発売されます。' },
          { q: 'Mac Miniにリモートアクセスできますか？', a: 'はい。SSH（ターミナル経由）またはシステム設定 → 共有 → リモートマネジメントでの画面共有（VNC）が使えます。LAN内：ssh ユーザー@macmini.local。リモートアクセス：まずTailscaleを設定し、Tailscale IP経由でSSH。' },
          { q: '高いスループットが必要な場合は？', a: 'アップグレード：Appleの現行Mac Studioラインナップを確認してください。Mac Miniより高いユニファイドメモリ上限とより多くのGPUコアを備えています。サーバーファームには複数のMac Miniをラックマウントし、Nginxで負荷分散してください。' },
          { q: 'Mac MiniはAIサーバーとして24/7稼働でどれくらい持ちますか？', a: 'Apple SiliconのMacは持続稼働向けに設計されています。AIサーバー用途での期待寿命：7〜10年。SSD耐久性（典型的な600 TBW）はAIワークロードで25〜30年分。年間ハードウェア障害率は0.5%未満。' },
          { q: '複数ユーザーを同時に対応できますか？', a: 'はい。OLLAMA_NUM_PARALLEL=2（またはメモリに応じてより高く）を設定して並行リクエストを処理します。64GBのM5 Proは8Bモデルで2〜3人の同時ユーザーを快適に処理できる見込みです。32GBのM6ではその余裕は少なくなります。' },
          { q: '停電が起きたらどうなりますか？', a: '電力回復後、システム設定 → エネルギーで「停電後に自動的に起動」を有効にしていればmacOSは自動起動します。Ollamaはbrewサービスとして起動。モデルは最初のリクエスト時に読み込まれます（再起動後の最初のレスポンスに5〜15秒の遅延）。' },
          { q: 'Mac Miniに外部GPUを追加できますか？', a: 'いいえ。Apple SiliconはMetal/ML加速用の外部GPUをサポートしていません。ユニファイドメモリアーキテクチャがその設計です。高速化にはAppleの現行Mac Studioラインナップを確認してください。' },
          { q: 'Mac MiniはAIサーバーとして過剰スペックですか、それとも不足していますか？', a: '8B〜34Bモデルを使用する1〜4人の家庭や小規模チーム：64GBのM5 Proなら最適。70B以上のモデル：不足 — より高いメモリ上限が必要ならAppleのMac Studioラインナップを確認してください。ホビーユーザーの小型モデル：過剰スペック（Raspberry Pi 5は1〜3Bモデルのみ対応だが、2026年の実用的なユースケースには不十分）。LLM+Whisper+RAG+音声の4サービスをフルスタックで同時実行する場合：32GB上限のM6ベースでは不足するため、64GBのM5 Proを使用してください。' },
          { q: '単なる「M5」搭載のMac Miniは存在しますか？', a: 'いいえ。Appleの2026年8月25日の発表では、ベースのMac MiniにM6チップ、上位モデルにM5 Proチップが採用されており、Mac MiniラインナップにはシンプルなM5チップは一切存在しません（M5チップは2026年前半にMacBook Air/Proに搭載されましたが、Mac Miniには搭載されていません）。' },
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
    next_refresh_due: '2027-02-15',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-zh.webp',
    title: 'Mac Mini M6作为本地AI服务器 2026：全天候LLM、Whisper、RAG与语音助手',
    seoTitle: 'Mac Mini M6/M5 Pro：24/7 AI服务器',
    intro: 'Apple已于2026年8月25日发布新款Mac Mini：M6芯片（起售价$899，统一内存最高32GB）和M5 Pro芯片（起售价$1,699，统一内存最高64GB）。两者均于2026年9月22日上市。任一配置都能成为出色的静音、全天候本地AI服务器。本指南介绍硬件配置、设置策略，以及运行Ollama LLM、Whisper STT、RAG管道与语音助手堆栈的成本效益分析。预估年度电费：$26–39。',
    metaDescription: '在新款Mac Mini M6或M5 Pro上配置本地AI服务器。25～55W功耗，年电费约350元。Ollama LLM、Whisper STT、RAG管道、语音助手全天候运行。完整配置指南、实用场景、5年总成本分析。',
    twitterDescription: 'Mac Mini M5 Pro 64GB：理想的静音本地AI服务器。LLM+Whisper+RAG全天候运行，年电费仅$35。完整指南。',
    publishDate: '2026-05-15',
    dateModified: '2026-08-26',
    ctaText: 'Mac Mini AI服务器已搭建完成？用PromptQuorum将您本地Llama或DeepSeek的回答与GPT-4、Claude、Gemini等22个模型一键对比——验证您的自托管方案是否达到云服务品质。',
    current_models_mentioned: ['Llama 3.1 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: '希望在家庭或办公室搭建全天候本地AI服务器的用户。',
    readTime: '阅读约12分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini本地AI服务器',
    targetKeywords: ['Mac Mini AI服务器', '全天候LLM', '本地AI基础设施', 'Ollama常驻', 'Mac Mini M6服务器', 'Mac Mini M5 Pro服务器'],
    leadAnswerBlock: '**Mac Mini M5 Pro 64GB配置（起售价$1,699，2026年9月22日上市）是最出色的全天候AI服务器选择：近无声（准无风扇）、25–55W功耗、预估年电费$26–39。正是64GB统一内存上限，才能同时运行Ollama 34B模型、Whisper STT、RAG管道和语音助手——基础款Mac Mini M6（起售价$899）内存上限为32GB，不足以同时运行全部四项服务。Apple尚未出货这款硬件，因此以下功耗与散热数据均为估算值，并非PromptQuorum实测的基准测试结果。**',
    nextStep: {
      text: '准备好在Mac Mini M6或M5 Pro上设置Ollama了吗？这是完整的安装指南。',
      label: 'Mac上的Ollama — 设置指南2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      zh: {
        question: '为什么新款Mac Mini适合作为本地AI服务器？',
        answer: '静音（基础款无风扇，Pro款近无声），25–55W（相比GPU台式机的300W以上），预估年电费$26–39（相比GPU的$263–394）。64GB的M5 Pro配置可同时运行Ollama 34B LLM、Whisper、RAG和语音助手——基础款M6内存上限32GB，同时运行多项服务的余量更小。2026年9月22日上市。',
        bullets: [
          'M5 Pro 64GB：起售价$1,699，2026年9月22日上市',
          'M6（内存上限32GB）：起售价$899，同日上市',
          '功耗：25–55W（相比GPU台式机300W以上）',
          '年电费：预估$26–39（相比GPU的$263–394，按$0.15/kWh）',
          '静音：无风扇（M6）到近无风扇（M5 Pro），典型LLM负载下',
          'REST API可供LAN内所有设备访问',
          '对比4份ChatGPT Plus约19个月回本',
        ],
        updatedDate: '2026-08-26',
      },
    },
    toc: [
      { label: '为何选择Mac Mini M6/M5 Pro', anchor: '#why' },
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
        title: '为何新款Mac Mini（M6/M5 Pro）是理想的AI服务器',
        content: [
          'Apple已于2026年8月25日发布新款Mac Mini：M6（起售价$899，统一内存最高32GB）和M5 Pro（起售价$1,699，统一内存最高64GB）。两者均于2026年9月22日上市。若要搭建静音全天候本地AI服务器，64GB的M5 Pro配置是更优选择：近无声运行（基础款无风扇，Pro款风扇转速极低）、低功耗（25–55W对比GPU台式机的300W以上），以及足够的统一内存同时运行34B参数模型加Whisper、RAG和语音助手。',
          '年电费约$26–39，相比GPU台式机等效配置的$263–394（按$0.15/kWh计算）——每年不到一个月的ChatGPT Plus订阅费用。由于该硬件要到2026年9月22日才上市，目前尚无独立基准测试数据；本指南中的功耗与性能数据均为基于Apple公布规格及以往Apple Silicon Mac Mini世代表现的估算值，并非PromptQuorum的实测结果。',
        ],
        tableFormat: true,
        columns: ['属性', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { '属性': '硬件成本', 'Mac Mini M5 Pro': '起售价$1,699', 'Desktop + RTX 4070': '$1,200起', 'Raspberry Pi 5': '$80' },
          { '属性': '待机功耗', 'Mac Mini M5 Pro': '8W（估算）', 'Desktop + RTX 4070': '50W', 'Raspberry Pi 5': '5W' },
          { '属性': 'LLM负载功耗', 'Mac Mini M5 Pro': '25–55W（估算）', 'Desktop + RTX 4070': '200–300W', 'Raspberry Pi 5': '无法运行' },
          { '属性': '年度电费（$0.15/kWh）', 'Mac Mini M5 Pro': '$26–39（估算）', 'Desktop + RTX 4070': '$263–394', 'Raspberry Pi 5': '约$5' },
          { '属性': '噪音水平', 'Mac Mini M5 Pro': '近无声', 'Desktop + RTX 4070': '嘈杂（3个以上风扇）', 'Raspberry Pi 5': '静音' },
          { '属性': '最大模型尺寸', 'Mac Mini M5 Pro': '34B（Q5）', 'Desktop + RTX 4070': '8B（12GB VRAM限制）', 'Raspberry Pi 5': '仅1–3B' },
          { '属性': '全天候可靠性', 'Mac Mini M5 Pro': '优秀', 'Desktop + RTX 4070': '良好', 'Raspberry Pi 5': '优秀' },
          { '属性': '占地面积', 'Mac Mini M5 Pro': '13×13cm', 'Desktop + RTX 4070': '全塔机箱', 'Raspberry Pi 5': '8×8cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: '硬件配置推荐',
        content: '64GB的M5 Pro（起售价$1,699）是搭建完整全天候AI服务器堆栈应选购的配置：可运行34B模型，支持本指南所涉及的四项同时运行的服务（LLM+Whisper+RAG+语音助手），并有未来2–3年模型规模增长的余量。基础款M6的统一内存上限为32GB——足够运行一个LLM加一项轻量服务，但无法同时容纳全部四项。若计划运行完整堆栈，切勿购买内存上限32GB的M6基础款。',
        tableFormat: true,
        columns: ['配置', '价格（2026年）', '内存上限', '适用场景', '支持模型'],
        rows: [
          { '配置': 'Mac Mini M6（基础版）', '价格（2026年）': '起售价$899', '内存上限': '最高32GB', '适用场景': '单个LLM+一项轻量服务', '支持模型': '7B–13B Q4' },
          { '配置': 'Mac Mini M5 Pro ★', '价格（2026年）': '起售价$1,699', '内存上限': '最高64GB', '适用场景': '完整全天候堆栈（LLM+Whisper+RAG+语音）', '支持模型': '34B模型轻松运行' },
        ],
        note: '★针对此用途推荐。64GB内存上限是关键：同时运行LLM、Whisper STT、RAG管道和语音助手，需要四个模型同时常驻内存，而32GB上限的M6无法满足这一需求。存储规划：Llama 3.1 8B Q4约5GB/模型，Whisper large-v3约3GB，嵌入模型约0.5GB，含1万文档的ChromaDB约2GB。典型5模型配置：占用50–80GB。最低推荐512GB SSD；高级用户选1TB。Apple尚未公布基础款以上内存配置的具体定价——请前往apple.com查询实际配置价格。',
        image: '/images/mac-mini-m5-local-ai-server-memory-tier-capacity-en.svg',
        imageCaption: 'Mac Mini M6（内存上限32GB）与M5 Pro（内存上限64GB）的内存上限与最大模型容量对比：32GB的M6适合单个LLM加一项轻量服务，而64GB的M5 Pro可同时轻松运行34B模型、Whisper、RAG和语音助手。',
      },
      setup: {
        id: 'setup',
        title: '完整服务器设置（开箱到运行仅需30分钟）',
        content: '以下步骤将Mac Mini M6或M5 Pro配置为持久化、可网络访问的AI服务器。完成所有步骤后，LAN内每台设备都可通过11434端口向Mac Mini的Ollama API发送请求。',
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
        content: '技术栈：Ollama（Llama 3.1 8B）+ nomic-embed-text + ChromaDB。全部运行在Mac Mini上，通过LAN访问。用途：家庭文档、法律合同、技术手册、食谱库、医疗记录、研究论文。完全私密、可搜索、离线可用。',
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
          'Mac Mini上的技术栈：whisper.cpp（Metal加速STT）、Ollama Llama 3.1 8B（推理）、Piper TTS（语音输出）、Wyoming协议（Home Assistant集成）。',
          '通过客户端设备（Apple HomePod via Home Assistant，或各房间的Raspberry Pi麦克风阵列）唤醒词激活。M5 Pro预估端到端延迟：约1.2秒（STT+LLM+TTS总和）——该数字基于以往Apple Silicon Mac Mini世代表现及Apple公布的性能提升幅度估算得出；M6/M5 Pro Mac Mini尚未上市，目前没有独立实测数据。',
          '预估年电费约$35。所有语音数据完全保留在本地，私密无忧。',
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
    "apiBase": "[macmini.local:11434](http://macmini.local:11434)"
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
        title: '功耗与散热性能（估算值）',
        content: 'M6/M5 Pro Mac Mini要到2026年9月22日才上市——PromptQuorum尚未对该硬件进行测试。以下数据基于Apple公布的TDP规格、Apple自身公布的性能提升幅度（相比M4世代最高提升4倍AI性能），以及以往Apple Silicon Mac Mini世代在同等Ollama+Metal负载下的功耗/散热表现估算得出。按$0.15/kWh计算电费。',
        tableFormat: true,
        columns: ['工作负载', '功耗（估算）', '年度成本（24/7，$0.15/kWh）'],
        rows: [
          { '工作负载': '待机', '功耗（估算）': '8W', '年度成本（24/7，$0.15/kWh）': '约$10/年' },
          { '工作负载': 'Llama 8B推理', '功耗（估算）': '25–35W', '年度成本（24/7，$0.15/kWh）': '约$39/年' },
          { '工作负载': 'Llama 34B推理', '功耗（估算）': '40–55W', '年度成本（24/7，$0.15/kWh）': '约$63/年' },
          { '工作负载': '混合典型负载', '功耗（估算）': '15–25W', '年度成本（24/7，$0.15/kWh）': '约$26/年' },
        ],
        items: [
          '负载下表面温度（估算）：35–42°C（触碰时偏热）',
          'CPU内部温度（估算）：65–75°C（远低于降频阈值）',
          '风扇：无风扇设计的M6基础款预计从不启动；M5 Pro预计在峰值负载时短暂低速运转',
          '以往Apple Silicon Mac Mini世代在持续LLM负载下均未出现热降频——预计M6/M5 Pro世代将延续相同散热设计，具体仍待2026年9月22日上市后进行独立测试验证',
          '通风：建议开放空间放置——不要放入密闭柜',
          'SSD耐久度：典型600 TBW = AI服务器写入模式下约30年寿命',
        ],
        note: '混合典型负载预估年电费：约$26–39。全年24/7运行成本预计低于一个月的ChatGPT Plus订阅费。这些数据将在硬件上市后根据实测结果更新。',
        image: '/images/mac-mini-m5-local-ai-server-power-draw-by-workload-en.svg',
        imageCaption: 'Mac Mini M5 Pro各工作负载预估功耗：待机8W，Llama 8B推理25–35W，Llama 34B推理40–55W——相比之下台式机RTX 4070功耗为200–300W。以上为估算值，非独立实测——上市日期2026年9月22日。',
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
          { '年份': '第1年', 'Mac Mini AI服务器': '起售价$1,699硬件 + $35电费 = $1,734', '4× ChatGPT Plus': '$960', '差额': '−$774（Mac更贵）' },
          { '年份': '第2年', 'Mac Mini AI服务器': '$35（仅电费）', '4× ChatGPT Plus': '$960', '差额': '+$925节省' },
          { '年份': '第3年', 'Mac Mini AI服务器': '$35', '4× ChatGPT Plus': '$960', '差额': '+$925节省' },
          { '年份': '第4年', 'Mac Mini AI服务器': '$35', '4× ChatGPT Plus': '$960', '差额': '+$925节省' },
          { '年份': '第5年', 'Mac Mini AI服务器': '$35', '4× ChatGPT Plus': '$960', '差额': '+$925节省' },
          { '年份': '5年合计', 'Mac Mini AI服务器': '起售价$1,874', '4× ChatGPT Plus': '$4,800', '差额': '+$2,926节省' },
        ],
        items: [
          '4人家庭回本周期（vs. 4× ChatGPT Plus，按$1,699起售价计算）：约19个月',
          '编程助手（vs. Copilot $10/用户/月）— 1名开发者：约15个月回本',
          '编程助手 — 4人开发团队：约4个月回本',
          '编程助手 — 10人团队：约1.5个月回本',
        ],
        note: 'TCO基于$960/年（4× ChatGPT Plus，$20/用户/月）和M5 Pro的$1,699起售价计算。Apple尚未公布基础款以上内存配置的定价，本指南所述的64GB配置实际售价很可能高于起售价——请前往apple.com查询实际配置价格。所有数据保持私密，无按次收费，包含离线能力。',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '新款Mac Mini比其他方案更安静吗？', a: '是的，这是设计使然。M6基础款采用无风扇设计。M5 Pro的风扇预计极少转动，转动时也应非常安静——与以往Apple Silicon Mac Mini世代一致。GPU台式机：约50–70 dB。Mac Mini：预计待机时接近0 dB，34B以上高负荷时短暂出现较低分贝值。目前尚无独立噪音实测数据，该硬件将于2026年9月22日上市。' },
          { q: '可以远程访问Mac Mini吗？', a: '可以——通过终端SSH，或系统设置 → 共享 → 远程管理进行屏幕共享（VNC）。LAN内：ssh 用户@macmini.local。远程访问：先安装Tailscale，再通过Tailscale IP进行SSH。' },
          { q: '需要更高吞吐量怎么办？', a: '升级路径：请查看Apple当前的Mac Studio产品线，其统一内存上限更高、GPU核心数也多于Mac Mini。对于服务器集群场景，可将多台Mac Mini组成机架并用Nginx做负载均衡。' },
          { q: 'Mac Mini作为24/7 AI服务器能用多久？', a: 'Apple Silicon Mac专为持续运行设计。AI服务器预期寿命：7–10年。SSD耐久度（典型600 TBW）可支撑25–30年AI工作负载。年硬件故障率低于0.5%。' },
          { q: '能同时服务多个用户吗？', a: '可以。设置OLLAMA_NUM_PARALLEL=2（内存充足时可更高）以处理并发请求。预计64GB的M5 Pro可轻松支持2–3名用户在8B模型上同时使用；32GB的M6在这方面余量较小。' },
          { q: '断电了怎么办？', a: '恢复供电后，若在系统设置 → 能量中启用了"断电后自动启动"，macOS会自动启动。Ollama作为brew服务启动。模型在首次请求时加载（重启后首次响应延迟5–15秒）。' },
          { q: '可以为Mac Mini添加外部GPU吗？', a: '不可以。Apple Silicon不支持用于Metal/ML加速的外部GPU。统一内存架构就是其设计核心。如需更高速度，请查看Apple当前的Mac Studio产品线。' },
          { q: 'Mac Mini作为AI服务器是否过于强大或不够用？', a: '对于使用8B–34B模型的1–4人家庭或小型团队：使用64GB的M5 Pro恰到好处。对于70B以上模型：不够用——请查看Apple的Mac Studio产品线以获得更高内存上限。对于预算有限的爱好者小模型：过于强大（Raspberry Pi 5仅支持1–3B模型，但2026年的实际用途已不够用）。若要同时运行LLM+Whisper+RAG+语音助手这四项完整服务：内存上限32GB的M6基础款不够用——请选择64GB的M5 Pro。' },
          { q: '是否存在单纯的"M5"款Mac Mini？', a: '没有。Apple在2026年8月25日的发布会上，基础款Mac Mini采用M6芯片，高配款采用M5 Pro芯片——Mac Mini产品线完全跳过了单纯的"M5"（M5芯片已于2026年早些时候用于MacBook Air/Pro系列，而非Mac Mini）。' },
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
    next_refresh_due: '2027-02-15',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-es.webp',
    title: 'Mac Mini M6 como servidor de IA local: LLM, Whisper, RAG y asistente de voz 24/7',
    seoTitle: 'Mac Mini M6/M5 Pro como servidor de IA 24/7',
    intro: 'Apple presentó el nuevo Mac Mini el 25 de agosto de 2026: el chip M6 (desde $899, hasta 32 GB de memoria unificada) y el chip M5 Pro (desde $1.699, hasta 64 GB de memoria unificada). Ambos salen a la venta el 22 de septiembre de 2026. Cualquiera de las dos configuraciones es una excelente opción como servidor de IA local silencioso y siempre activo. Esta guía repasa la configuración de hardware, la estrategia de instalación y el análisis coste-beneficio para ejecutar Ollama LLM, Whisper STT, pipeline RAG y una pila de asistente de voz. Coste eléctrico estimado: $26–39 al año.',
    metaDescription: 'Un servidor de IA siempre activo en el nuevo Mac Mini M6 o M5 Pro: 25–55 W, $26–39/año de luz. Ollama, Whisper STT, RAG y asistente de voz. Silencioso y sin reinicios.',
    twitterDescription: 'Mac Mini M5 Pro 64 GB: el servidor de IA local silencioso ideal. LLM + Whisper + RAG siempre activo por $35/año en electricidad. Guía completa de configuración.',
    publishDate: '2026-05-15',
    dateModified: '2026-08-26',
    ctaText: '¿Ya tienes tu servidor de IA Mac Mini funcionando? Compara las respuestas de tu Llama o DeepSeek local con GPT-4, Claude, Gemini y otros 22 modelos en un solo envío con PromptQuorum — verifica que tu configuración autoalojada entrega respuestas de calidad cloud para tus casos de uso.',
    current_models_mentioned: ['Llama 3.1 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: 'Usuarios que quieren un servidor de IA local siempre activo para el hogar o la oficina. Usuarios técnicos cómodos con la terminal.',
    readTime: '12 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini servidor de IA local',
    targetKeywords: ['Mac Mini servidor IA', 'LLM siempre activo', 'infraestructura IA local', 'Ollama siempre activo', 'Mac Mini M6 servidor', 'Mac Mini M5 Pro servidor'],
    leadAnswerBlock: '**El Mac Mini M5 Pro 64 GB (desde $1.699, disponible el 22 de septiembre de 2026) es la mejor opción como servidor de IA siempre activo: silencioso (casi sin ventilador), 25–55 W de consumo, $26–39/año estimados en electricidad. Su límite de 64 GB de memoria unificada es lo que permite ejecutar modelos Ollama 34B, Whisper STT, pipeline RAG y asistente de voz simultáneamente — el Mac Mini M6 base (desde $899) tiene un límite de 32 GB, insuficiente para los cuatro servicios a la vez. Apple aún no ha lanzado este hardware, así que las cifras de consumo y temperatura de abajo son estimaciones, no benchmarks medidos por PromptQuorum.**',
    nextStep: {
      text: '¿Listo para configurar Ollama en tu Mac Mini M6 o M5 Pro? Aquí tienes la guía completa de instalación.',
      label: 'Ollama en Mac — Guía de configuración 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      es: {
        question: '¿Por qué es el nuevo Mac Mini un buen servidor de IA local?',
        answer: 'Silencioso (la base sin ventilador, el Pro casi silencioso), con 25–55 W de consumo (frente a 300 W+ de un PC con GPU) y $26–39/año estimados en electricidad. La configuración M5 Pro de 64 GB ejecuta Ollama 34B LLM + Whisper + RAG + asistente de voz simultáneamente — el M6 base tiene un límite de 32 GB y ofrece menos margen para varios servicios a la vez. Disponible el 22 de septiembre de 2026.',
        bullets: [
          'M5 Pro 64 GB: desde $1.699, disponible el 22 de septiembre de 2026',
          'M6 con hasta 32 GB: desde $899, misma fecha de lanzamiento',
          'Consumo: 25–55 W previstos (frente a 300 W+ de un PC con GPU)',
          'Electricidad anual: estimada en $26–39 (frente a $263–394 de una GPU)',
          'Silencioso: sin ventilador (M6) a casi sin ventilador (M5 Pro) bajo cargas LLM típicas',
          'API REST accesible desde todos los dispositivos de la LAN',
          'Análisis coste-beneficio: ver la sección de TCO más abajo',
        ],
        updatedDate: '2026-08-26',
      },
    },
    toc: [
      { label: 'Por qué Mac Mini M6/M5 Pro', anchor: '#why' },
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
        title: 'Por qué el nuevo Mac Mini (M6/M5 Pro) es un servidor de IA ideal',
        content: [
          'Apple presentó el nuevo Mac Mini el 25 de agosto de 2026: el M6 (desde $899, hasta 32 GB de memoria unificada) y el M5 Pro (desde $1.699, hasta 64 GB de memoria unificada). Ambos salen a la venta el 22 de septiembre de 2026. Para un servidor de IA local silencioso y siempre activo, la configuración de 64 GB del M5 Pro es la mejor opción: silencio casi total (base sin ventilador, Pro con ventilador a muy bajas RPM), bajo consumo eléctrico (25–55 W frente a 300 W+ de los PC con GPU) y suficiente memoria unificada para ejecutar un modelo de 34B parámetros junto con Whisper, RAG y un asistente de voz simultáneamente.',
          'El coste eléctrico anual estimado es de $26–39 frente a $263–394 de los equivalentes con GPU de escritorio — menos de dos meses de una sola suscripción a ChatGPT Plus, cada año. Como el hardware no sale a la venta hasta el 22 de septiembre de 2026, todavía no existen benchmarks independientes; las cifras de consumo y rendimiento de esta guía son estimaciones basadas en las especificaciones publicadas por Apple y en generaciones anteriores del Mac Mini con Apple Silicon, no resultados medidos por PromptQuorum.',
        ],
        tableFormat: true,
        columns: ['Propiedad', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'Propiedad': 'Coste de hardware', 'Mac Mini M5 Pro': 'Desde $1.699', 'Desktop + RTX 4070': '$1.200+', 'Raspberry Pi 5': '$80' },
          { 'Propiedad': 'Consumo (reposo)', 'Mac Mini M5 Pro': '8 W (estimado)', 'Desktop + RTX 4070': '50 W', 'Raspberry Pi 5': '5 W' },
          { 'Propiedad': 'Consumo (carga LLM)', 'Mac Mini M5 Pro': '25–55 W (estimado)', 'Desktop + RTX 4070': '200–300 W', 'Raspberry Pi 5': 'N/A (demasiado pequeño)' },
          { 'Propiedad': 'Electricidad anual', 'Mac Mini M5 Pro': '$26–39 (estimado)', 'Desktop + RTX 4070': '$263–394', 'Raspberry Pi 5': '~$5' },
          { 'Propiedad': 'Nivel de ruido', 'Mac Mini M5 Pro': 'Casi silencioso', 'Desktop + RTX 4070': 'Ruidoso (3+ ventiladores)', 'Raspberry Pi 5': 'Silencioso' },
          { 'Propiedad': 'Tamaño máximo de modelo', 'Mac Mini M5 Pro': '34B (Q5)', 'Desktop + RTX 4070': '8B (12 GB VRAM)', 'Raspberry Pi 5': 'Solo 1–3B' },
          { 'Propiedad': 'Fiabilidad siempre activo', 'Mac Mini M5 Pro': 'Excelente', 'Desktop + RTX 4070': 'Buena', 'Raspberry Pi 5': 'Excelente' },
          { 'Propiedad': 'Huella física', 'Mac Mini M5 Pro': '13×13 cm', 'Desktop + RTX 4070': 'Torre completa', 'Raspberry Pi 5': '8×8 cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Recomendación de configuración de hardware',
        content: 'El M5 Pro con 64 GB (desde $1.699) es la configuración que hay que comprar para una pila completa de servidor de IA siempre activo: ejecuta modelos de 34B, soporta los cuatro servicios simultáneos de esta guía (LLM + Whisper + RAG + asistente de voz) y tiene margen para 2–3 años de crecimiento en el tamaño de los modelos. El M6 base tiene un límite de 32 GB de memoria unificada — suficiente para un LLM más un servicio ligero, pero no para los cuatro a la vez. Nunca compres el nivel M6 con límite de 32 GB si planeas ejecutar la pila completa.',
        tableFormat: true,
        columns: ['Configuración', 'Precio (2026)', 'Memoria máxima', 'Ideal para', 'Modelos compatibles'],
        rows: [
          { 'Configuración': 'Mac Mini M6 (base)', 'Precio (2026)': 'Desde $899', 'Memoria máxima': 'Hasta 32 GB', 'Ideal para': 'Un LLM + un servicio ligero', 'Modelos compatibles': '7B–13B Q4' },
          { 'Configuración': 'Mac Mini M5 Pro ★', 'Precio (2026)': 'Desde $1.699', 'Memoria máxima': 'Hasta 64 GB', 'Ideal para': 'Pila completa siempre activa (LLM+Whisper+RAG+voz)', 'Modelos compatibles': 'Modelos 34B con comodidad' },
        ],
        note: '★ Recomendado para este uso. El límite de 64 GB es el factor decisivo: ejecutar LLM, Whisper STT, pipeline RAG y asistente de voz simultáneamente requiere que los cuatro modelos residan en memoria a la vez, algo que el M6 con su límite de 32 GB no puede ofrecer. Planificación de almacenamiento: Llama 3.1 8B Q4 ~5 GB por modelo, Whisper large-v3 ~3 GB, modelo de embeddings ~0,5 GB, ChromaDB con 10.000 documentos ~2 GB. Configuración típica de 5 modelos: 50–80 GB. Mínimo 512 GB SSD; 1 TB para usuarios avanzados. Apple todavía no ha publicado precios para las configuraciones de memoria por encima de la base — consulta apple.com para el precio exacto configurado.',
        image: '/images/mac-mini-m5-local-ai-server-memory-tier-capacity-en.svg',
        imageCaption: 'Límite de memoria del Mac Mini M6 (32 GB máx.) frente al M5 Pro (64 GB máx.) en relación con la capacidad máxima de modelo: el M6 de 32 GB es adecuado para un LLM más un servicio ligero, mientras que el M5 Pro de 64 GB ejecuta cómodamente un modelo 34B junto con Whisper, RAG y asistente de voz simultáneamente.',
      },
      setup: {
        id: 'setup',
        title: 'Configuración completa del servidor (30 minutos desde el desembalaje hasta el funcionamiento)',
        content: 'Estos pasos configuran el Mac Mini M6 o M5 Pro como un servidor de IA persistente y accesible en red. Tras completar todos los pasos, cualquier dispositivo de tu LAN puede enviar solicitudes a la API de Ollama del Mac Mini en el puerto 11434.',
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
          'Los iPhone usan Atajos → POST a macmini.local:11434. Los usuarios de MacBook usan Continue.dev o extensiones de Raycast. Ajusta OLLAMA_NUM_PARALLEL=2 para que dos miembros de la familia puedan chatear simultáneamente con Llama 3.1 8B.',
          'Sustituye 4 suscripciones a ChatGPT Plus ($80/mes = $960/año). Periodo de amortización del Mac Mini: ~15 meses. Del año 2 al 5: ahorro puro.',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: 'Caso de uso 2: Servidor privado de preguntas y respuestas sobre documentos con RAG',
        content: 'Pila: Ollama (Llama 3.1 8B) + nomic-embed-text + ChromaDB. Todo ejecutándose en el Mac Mini, accesible desde la LAN. Casos de uso: documentos familiares, contratos legales, manuales técnicos, biblioteca de recetas, historial médico, artículos de investigación. Todo privado. Todo buscable. Todo sin conexión.',
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
          'Pila en Mac Mini: whisper.cpp para STT (acelerado con Metal), Ollama Llama 3.1 8B para el razonamiento, Piper TTS para la salida de voz, protocolo Wyoming para la integración con Home Assistant.',
          'Activado por palabra de activación desde dispositivos cliente (Apple HomePod vía Home Assistant, o matrices de micrófonos Raspberry Pi en cada habitación). Latencia extremo a extremo estimada en el M5 Pro: alrededor de 1,2 segundos (STT + LLM + TTS combinados) — una estimación basada en generaciones anteriores del Mac Mini con Apple Silicon y en las mejoras de rendimiento anunciadas por Apple; el Mac Mini M6/M5 Pro todavía no ha salido a la venta, por lo que no hay mediciones independientes disponibles.',
          'Electricidad anual estimada: $35. Servicio cloud comparable (Alexa Plus a $20/mes): $240/año. Ahorra más de $200 al año manteniendo todos los datos de voz privados.',
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
    "apiBase": "[macmini.local:11434](http://macmini.local:11434)"
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
        title: 'Consumo eléctrico y rendimiento térmico (estimados)',
        content: 'El Mac Mini M6/M5 Pro sale a la venta el 22 de septiembre de 2026 — PromptQuorum no ha probado este hardware. Las cifras siguientes son estimaciones basadas en las especificaciones TDP publicadas por Apple, las propias afirmaciones de rendimiento de Apple (hasta 4× el rendimiento de IA frente a la generación M4) y el comportamiento de consumo/térmico observado en generaciones anteriores del Mac Mini con Apple Silicon bajo cargas equivalentes de Ollama + Metal. Coste eléctrico calculado a $0,15/kWh.',
        tableFormat: true,
        columns: ['Carga de trabajo', 'Consumo (estimado)', 'Coste anual (24/7, $0,15/kWh)'],
        rows: [
          { 'Carga de trabajo': 'Reposo', 'Consumo (estimado)': '8 W', 'Coste anual (24/7, $0,15/kWh)': '~$10/año' },
          { 'Carga de trabajo': 'Inferencia Llama 8B', 'Consumo (estimado)': '25–35 W', 'Coste anual (24/7, $0,15/kWh)': '~$39/año' },
          { 'Carga de trabajo': 'Inferencia Llama 34B', 'Consumo (estimado)': '40–55 W', 'Coste anual (24/7, $0,15/kWh)': '~$63/año' },
          { 'Carga de trabajo': 'Carga mixta típica', 'Consumo (estimado)': '15–25 W', 'Coste anual (24/7, $0,15/kWh)': '~$26/año' },
        ],
        items: [
          'Temperatura superficial bajo carga (estimada): 35–42 °C (caliente al tacto)',
          'Temperatura interna de CPU (estimada): 65–75 °C (muy por debajo del umbral de limitación)',
          'Ventilador: se espera que nunca se active en el M6, sin ventilador; activación breve a bajas RPM esperada en el M5 Pro durante picos',
          'Las generaciones anteriores del Mac Mini con Apple Silicon no muestran limitación térmica bajo carga LLM sostenida — se espera que la generación M6/M5 Pro siga el mismo diseño térmico, pendiente de pruebas independientes tras el lanzamiento del 22 de septiembre de 2026',
          'Ventilación: se recomienda espacio abierto — no colocar en un armario cerrado',
          'Durabilidad del SSD: 600 TBW típico = ~30 años con patrones de escritura de servidor de IA',
        ],
        note: 'Electricidad anual media estimada para carga mixta típica: $26–39. Se estima que un año completo de funcionamiento 24/7 cueste menos de un mes de ChatGPT Plus. Estas cifras se actualizarán con mediciones reales tras el lanzamiento.',
        image: '/images/mac-mini-m5-local-ai-server-power-draw-by-workload-en.svg',
        imageCaption: 'Consumo estimado del Mac Mini M5 Pro por carga de trabajo: 8 W en reposo, 25–35 W en inferencia Llama 8B, 40–55 W en inferencia Llama 34B, frente a 200–300 W de un equipo de escritorio con RTX 4070. Estimaciones no medidas de forma independiente — lanzamiento el 22 de septiembre de 2026.',
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
          { 'Año': 'Año 1', 'Servidor de IA Mac Mini': 'Desde $1.699 hardware + $35 electricidad = $1.734', '4× ChatGPT Plus': '$960', 'Diferencia': '−$774 (Mac más caro en A1)' },
          { 'Año': 'Año 2', 'Servidor de IA Mac Mini': '$35 (solo electricidad)', '4× ChatGPT Plus': '$960', 'Diferencia': '+$925 ahorrado' },
          { 'Año': 'Año 3', 'Servidor de IA Mac Mini': '$35', '4× ChatGPT Plus': '$960', 'Diferencia': '+$925 ahorrado' },
          { 'Año': 'Año 4', 'Servidor de IA Mac Mini': '$35', '4× ChatGPT Plus': '$960', 'Diferencia': '+$925 ahorrado' },
          { 'Año': 'Año 5', 'Servidor de IA Mac Mini': '$35', '4× ChatGPT Plus': '$960', 'Diferencia': '+$925 ahorrado' },
          { 'Año': 'Total 5 años', 'Servidor de IA Mac Mini': 'Desde $1.874', '4× ChatGPT Plus': '$4.800', 'Diferencia': '+$2.926 ahorrado' },
        ],
        items: [
          'Periodo de amortización para una familia de 4 que sustituye ChatGPT Plus (al precio inicial de $1.699): ~19 meses',
          'Agente de código (sustituyendo Copilot a $10/usuario/mes) — 1 desarrollador: amortizado en ~15 meses',
          'Agente de código — equipo de 4 desarrolladores: amortizado en ~4 meses',
          'Agente de código — equipo de 10 personas: amortizado en ~1,5 meses',
        ],
        note: 'TCO asume $960/año (4× ChatGPT Plus a $20/mes cada uno) y el precio inicial de $1.699 del M5 Pro. Apple aún no ha publicado precios para las configuraciones de memoria por encima de la base, así que la configuración de 64 GB usada en esta guía probablemente cuesta más — consulta apple.com para el precio exacto configurado. Todos los datos privados, sin coste por consulta, con funcionalidad sin conexión incluida.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '¿Es el nuevo Mac Mini más silencioso que las alternativas?', a: 'Sí, por diseño. El M6 base es completamente sin ventilador. Se espera que el ventilador del M5 Pro rara vez gire, y que sea muy silencioso cuando lo hace — como en generaciones anteriores del Mac Mini con Apple Silicon. PC con GPU de escritorio: ~50–70 dB. Mac Mini: se espera cerca de 0 dB en reposo, dB bajos brevemente bajo carga intensa de 34B+. Todavía no hay mediciones de ruido independientes; el hardware sale a la venta el 22 de septiembre de 2026.' },
          { q: '¿Puedo acceder remotamente al Mac Mini?', a: 'Sí — por SSH desde el terminal, o con Compartir Pantalla (VNC) desde Ajustes del Sistema → Compartir → Gestión Remota. En la LAN: ssh usuario@macmini.local. Para acceso remoto: usa primero Tailscale y luego SSH a través de la IP de Tailscale.' },
          { q: '¿Qué hago si necesito mayor rendimiento?', a: 'Ruta de actualización: consulta la gama actual de Mac Studio de Apple para un límite de memoria unificada más alto y más núcleos de GPU que el Mac Mini. Para granjas de servidores, conecta varios Mac Mini en rack y balancea la carga con Nginx.' },
          { q: '¿Cuánto dura el Mac Mini como servidor de IA 24/7?', a: 'Los Mac con Apple Silicon están diseñados para operación sostenida. Vida útil esperada: 7–10 años para uso como servidor de IA. Durabilidad del SSD (600 TBW típico) cubre 25–30 años de cargas de trabajo de IA. Tasa de fallo de hardware anual inferior al 0,5 %.' },
          { q: '¿Puedo atender a varios usuarios simultáneamente?', a: 'Sí. Ajusta OLLAMA_NUM_PARALLEL=2 (o más con más memoria) para gestionar solicitudes concurrentes. Se espera que el M5 Pro de 64 GB maneje cómodamente a 2–3 usuarios simultáneos con modelos de 8B; el M6 de 32 GB ofrece menos margen para esto.' },
          { q: '¿Qué ocurre si el Mac Mini pierde la alimentación?', a: 'Tras la restauración de la alimentación, macOS arranca automáticamente si activaste "Iniciar automáticamente tras un fallo de alimentación" en Ajustes del Sistema → Energía. Ollama arranca como servicio de brew. Los modelos se recargan con la primera solicitud (retraso de 5–15 s en la primera respuesta tras el reinicio).' },
          { q: '¿Puedo añadir una GPU externa al Mac Mini para inferencia más rápida?', a: 'No. Apple Silicon no admite GPUs externas para aceleración Metal/ML. La arquitectura de memoria unificada es el diseño — no se puede añadir GPU discreta. Para más velocidad, consulta la gama actual de Mac Studio de Apple.' },
          { q: '¿Es el Mac Mini demasiado potente o insuficiente para un servidor de IA?', a: 'Para hogares de 1–4 personas o equipos pequeños que ejecutan modelos de 8B–34B: justo lo necesario, con el M5 Pro de 64 GB. Para modelos de 70B o más: insuficiente — consulta la gama Mac Studio de Apple para límites de memoria más altos. Para modelos pequeños con presupuesto de aficionado: demasiado potente (Raspberry Pi 5 solo cubre modelos de 1–3B, insuficiente para cualquier uso práctico en 2026). Para ejecutar la pila completa de cuatro servicios (LLM + Whisper + RAG + voz) simultáneamente: el M6 base con límite de 32 GB es insuficiente — usa el M5 Pro de 64 GB.' },
          { q: '¿Existe un Mac Mini simplemente "M5"?', a: 'No. El anuncio de Apple del 25 de agosto de 2026 usa el chip M6 para el Mac Mini base y el chip M5 Pro para el nivel superior — Apple omitió por completo un "M5" simple para la línea Mac Mini (el chip M5 salió antes en 2026 en la línea MacBook Air/Pro, no en el Mac Mini).' },
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
      headline: 'Mac Mini M6 como servidor de IA local 2026: LLM, Whisper, RAG',
      description: 'Servidor de IA local siempre activo en el nuevo Mac Mini M6 o M5 Pro. 25–55 W, silencioso, LLM 24/7.',
      url: 'https://www.promptquorum.com/es/local-llms/mac-mini-m5-local-ai-server',
      inLanguage: 'es',
      datePublished: '2026-05-15',
      dateModified: '2026-08-26',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-15',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-ar.webp',
    title: '⁨Mac Mini M6⁩ كخادم ذكاء اصطناعي محلي ⁨2026⁩: ⁨LLM⁩ و⁨Whisper⁩ و⁨RAG⁩ ومساعد صوتي ⁨24/7⁩',
    seoTitle: '⁨Mac Mini M6⁩/⁨M5 Pro⁩ خادم ذكاء محلي: ⁨24/7⁩',
    intro: 'أعلنت Apple عن جهاز Mac Mini الجديد في 25 أغسطس 2026: شريحة M6 (بسعر يبدأ من 899 دولارًا، ذاكرة موحدة حتى 32 GB) وشريحة M5 Pro (بسعر يبدأ من 1,699 دولارًا، ذاكرة موحدة حتى 64 GB). يُطرح كلاهما في 22 سبتمبر 2026. تُعد كلتا التهيئتين خيارًا ممتازًا لخادم ذكاء اصطناعي محلي صامت ودائم التشغيل. يغطي هذا الدليل تهيئة العتاد واستراتيجية الإعداد وتحليل التكاليف والفوائد لتشغيل Ollama LLM، وWhisper STT، وخط معالجة RAG، ومنظومة مساعد صوتي. تكلفة الكهرباء المقدَّرة: 26–39 دولارًا سنويًا.',
    metaDescription: '⁨خادم ذكاء اصطناعي محلي دائم التشغيل على جهاز Mac Mini M6⁩ أو ⁨M5 Pro⁩ الجديد. ⁨25⁩–⁨55⁩ واط، ⁨26⁩–⁨39⁩ دولارًا سنويًا. ⁨Ollama⁩ و⁨Whisper STT⁩ و⁨RAG⁩ ومساعد صوتي. صامت وبلا إعادة تشغيل.',
    twitterDescription: '⁨Mac Mini M5 Pro⁩ بسعة ⁨64 GB⁩: خادم الذكاء الاصطناعي المحلي الصامت المثالي. ⁨LLM + Whisper + RAG⁩ دائم التشغيل مقابل ⁨35⁩ دولارًا سنويًا من الكهرباء. دليل إعداد كامل.',
    publishDate: '2026-05-15',
    dateModified: '2026-08-26',
    ctaText: 'هل لديك بالفعل خادم الذكاء الاصطناعي Mac Mini يعمل؟ قارن إجابات Llama أو DeepSeek المحلي لديك مع GPT-4 وClaude وGemini و22 نموذجًا آخر في إرسال واحد عبر PromptQuorum — تحقق من أن إعدادك المستضاف ذاتيًا يقدم إجابات بجودة السحابة لحالات استخدامك.',
    current_models_mentioned: ['Llama 3.1 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: 'المستخدمون الذين يريدون خادم ذكاء اصطناعي محلي دائم التشغيل للمنزل أو المكتب. مستخدمون تقنيون مرتاحون مع الطرفية.',
    readTime: '12 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini خادم ذكاء اصطناعي محلي',
    targetKeywords: ['Mac Mini خادم ذكاء اصطناعي', 'LLM دائم التشغيل', 'بنية تحتية للذكاء الاصطناعي المحلي', 'Ollama دائم التشغيل', 'Mac Mini M6 خادم', 'Mac Mini M5 Pro خادم'],
    leadAnswerBlock: '**Mac Mini M5 Pro بسعة 64 GB (بسعر يبدأ من 1,699 دولارًا، يُطرح في 22 سبتمبر 2026) هو الخيار الأفضل لخادم ذكاء اصطناعي دائم التشغيل: صامت (بلا مروحة تقريبًا)، استهلاك 25–55 واط، وتكلفة كهرباء تقديرية 26–39 دولارًا سنويًا. سقف ذاكرته الموحدة البالغ 64 GB هو ما يتيح تشغيل نماذج Ollama 34B وWhisper STT وخط معالجة RAG ومساعد صوتي في آنٍ واحد — بينما يتوقف Mac Mini M6 الأساسي (بسعر يبدأ من 899 دولارًا) عند 32 GB، وهو غير كافٍ لتشغيل الخدمات الأربع معًا. لم تشحن Apple هذا العتاد بعد، لذا فإن أرقام الاستهلاك والحرارة أدناه تقديرية وليست اختبارات قياس أجرتها PromptQuorum.**',
    nextStep: {
      text: 'هل أنت مستعد لإعداد Ollama على Mac Mini M6 أو M5 Pro لديك؟ إليك دليل التثبيت الكامل.',
      label: 'Ollama على Mac — دليل الإعداد 2026 ←',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      ar: {
        question: 'لماذا يُعد جهاز Mac Mini الجديد خادم ذكاء اصطناعي محلي جيدًا؟',
        answer: 'صامت (الفئة الأساسية بلا مروحة، وفئة Pro شبه صامتة)، 25–55 واط (مقابل 300 واط+ لجهاز PC بـ GPU)، وتكلفة كهرباء تقديرية 26–39 دولارًا سنويًا. تهيئة M5 Pro بسعة 64 GB تشغّل Ollama 34B LLM + Whisper + RAG + مساعدًا صوتيًا في آنٍ واحد — بينما يتوقف M6 الأساسي عند 32 GB ويوفّر هامشًا أقل لتشغيل عدة خدمات معًا. يُطرح في 22 سبتمبر 2026.',
        bullets: [
          'M5 Pro بسعة 64 GB: بسعر يبدأ من 1,699 دولارًا، يُطرح في 22 سبتمبر 2026',
          'M6 بحد أقصى 32 GB: بسعر يبدأ من 899 دولارًا، بنفس تاريخ الطرح',
          'الاستهلاك المتوقع: 25–55 واط (مقابل 300 واط+ لجهاز PC بـ GPU)',
          'الكهرباء السنوية التقديرية: 26–39 دولارًا (مقابل 263–394 دولارًا لـ GPU)',
          'صامت: بلا مروحة (M6) إلى شبه بلا مروحة (M5 Pro) تحت أحمال LLM المعتادة',
          'API REST يمكن الوصول إليه من جميع أجهزة الشبكة المحلية LAN',
          'تحليل التكاليف والفوائد: راجع قسم التكلفة الإجمالية أدناه',
        ],
        updatedDate: '2026-08-26',
      },
    },
    toc: [
      { label: 'لماذا Mac Mini M6/M5 Pro', anchor: '#why' },
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
        title: 'لماذا يُعد جهاز Mac Mini الجديد (M6/M5 Pro) خادم ذكاء اصطناعي مثاليًا',
        content: [
          'أعلنت Apple عن جهاز Mac Mini الجديد في 25 أغسطس 2026: M6 (بسعر يبدأ من 899 دولارًا، ذاكرة موحدة حتى 32 GB) وM5 Pro (بسعر يبدأ من 1,699 دولارًا، ذاكرة موحدة حتى 64 GB). يُطرح كلاهما في 22 سبتمبر 2026. تهيئة M5 Pro بسعة 64 GB هي الخيار الأفضل لخادم ذكاء اصطناعي محلي صامت ودائم التشغيل: صمت شبه تام (الفئة الأساسية بلا مروحة، وفئة Pro بمروحة بعدد دورات منخفض جدًا)، واستهلاك كهربائي منخفض (25–55 واط مقابل 300 واط+ لأجهزة PC بـ GPU)، وذاكرة موحدة كافية لتشغيل نموذج بـ 34B معامل مع Whisper وRAG ومساعد صوتي في آنٍ واحد.',
          'تكلفة الكهرباء السنوية التقديرية 26–39 دولارًا مقابل 263–394 دولارًا للمكافئات المكتبية بـ GPU — أقل من شهرين من اشتراك واحد في ChatGPT Plus، كل عام. وبما أن هذا العتاد لن يُطرح إلا في 22 سبتمبر 2026، فلا توجد بعد اختبارات أداء مستقلة؛ أرقام الاستهلاك والأداء في هذا الدليل تقديرية بناءً على المواصفات التي نشرتها Apple وأداء أجيال Mac Mini السابقة بشريحة Apple Silicon، وليست نتائج قياس أجرتها PromptQuorum.',
        ],
        tableFormat: true,
        columns: ['الخاصية', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'الخاصية': 'تكلفة العتاد', 'Mac Mini M5 Pro': 'يبدأ من 1,699 دولارًا', 'Desktop + RTX 4070': '1,200 دولارًا+', 'Raspberry Pi 5': '80 دولارًا' },
          { 'الخاصية': 'الاستهلاك (خمول)', 'Mac Mini M5 Pro': '8 واط (تقديري)', 'Desktop + RTX 4070': '50 واط', 'Raspberry Pi 5': '5 واط' },
          { 'الخاصية': 'الاستهلاك (حمل LLM)', 'Mac Mini M5 Pro': '25–55 واط (تقديري)', 'Desktop + RTX 4070': '200–300 واط', 'Raspberry Pi 5': 'غير متاح (صغير جدًا)' },
          { 'الخاصية': 'الكهرباء السنوية', 'Mac Mini M5 Pro': '26–39 دولارًا (تقديري)', 'Desktop + RTX 4070': '263–394 دولارًا', 'Raspberry Pi 5': '~5 دولارات' },
          { 'الخاصية': 'مستوى الضجيج', 'Mac Mini M5 Pro': 'شبه صامت', 'Desktop + RTX 4070': 'صاخب (3+ مراوح)', 'Raspberry Pi 5': 'صامت' },
          { 'الخاصية': 'أقصى حجم نموذج', 'Mac Mini M5 Pro': '34B (Q5)', 'Desktop + RTX 4070': '8B (12 GB VRAM)', 'Raspberry Pi 5': '1–3B فقط' },
          { 'الخاصية': 'موثوقية دائم التشغيل', 'Mac Mini M5 Pro': 'ممتازة', 'Desktop + RTX 4070': 'جيدة', 'Raspberry Pi 5': 'ممتازة' },
          { 'الخاصية': 'الحجم المادي', 'Mac Mini M5 Pro': '13×13 سم', 'Desktop + RTX 4070': 'برج كامل', 'Raspberry Pi 5': '8×8 سم' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'توصية إعداد العتاد',
        content: 'الفئة M5 Pro بسعة 64 GB (بسعر يبدأ من 1,699 دولارًا) هي التهيئة الصحيحة لشراء منظومة خادم ذكاء اصطناعي دائمة التشغيل كاملة: تشغّل نماذج 34B، وتدعم الخدمات الأربع المتزامنة التي يغطيها هذا الدليل (LLM + Whisper + RAG + مساعد صوتي)، وتترك هامشًا لـ 2–3 سنوات من نمو حجم النماذج. يتوقف M6 الأساسي عند 32 GB من الذاكرة الموحدة — وهو كافٍ لنموذج LLM واحد مع خدمة خفيفة واحدة، لكن ليس للخدمات الأربع معًا. لا تشترِ أبدًا فئة M6 المحدودة بـ 32 GB إذا كنت تخطط لتشغيل المنظومة الكاملة.',
        tableFormat: true,
        columns: ['التهيئة', 'السعر (2026)', 'أقصى ذاكرة', 'مثالي لـ', 'النماذج المتوافقة'],
        rows: [
          { 'التهيئة': 'Mac Mini M6 (أساسي)', 'السعر (2026)': 'يبدأ من 899 دولارًا', 'أقصى ذاكرة': 'حتى 32 GB', 'مثالي لـ': 'نموذج LLM واحد + خدمة خفيفة واحدة', 'النماذج المتوافقة': '7B–13B Q4' },
          { 'التهيئة': 'Mac Mini M5 Pro ★', 'السعر (2026)': 'يبدأ من 1,699 دولارًا', 'أقصى ذاكرة': 'حتى 64 GB', 'مثالي لـ': 'المنظومة الكاملة الدائمة (LLM+Whisper+RAG+صوت)', 'النماذج المتوافقة': 'نماذج 34B بأريحية' },
        ],
        note: '★ موصى به لهذا الاستخدام. سقف 64 GB هو العامل الحاسم: تشغيل LLM وWhisper STT وخط معالجة RAG ومساعد صوتي في آنٍ واحد يتطلب بقاء النماذج الأربعة في الذاكرة معًا في الوقت نفسه، وهو ما لا يستطيع M6 المحدود بـ 32 GB توفيره. تخطيط التخزين: Llama 3.1 8B Q4 ~5 GB لكل نموذج، Whisper large-v3 ~3 GB، نموذج embeddings ~0.5 GB، ChromaDB مع 10,000 مستند ~2 GB. تهيئة معتادة بـ 5 نماذج: 50–80 GB. الحد الأدنى 512 GB SSD؛ 1 TB للمستخدمين المتقدمين. لم تنشر Apple بعد أسعار تهيئات الذاكرة فوق الفئة الأساسية — راجع apple.com للسعر الدقيق حسب التهيئة.',
        image: '/images/mac-mini-m5-local-ai-server-memory-tier-capacity-en.svg',
        imageCaption: 'سقف ذاكرة Mac Mini M6 (32 GB كحد أقصى) مقابل M5 Pro (64 GB كحد أقصى) مقارنة بالحد الأقصى لحجم النموذج: يناسب M6 بسعة 32 GB نموذج LLM واحد مع خدمة خفيفة واحدة، بينما يشغّل M5 Pro بسعة 64 GB نموذجًا بـ 34B بأريحية مع Whisper وRAG ومساعد صوتي في آنٍ واحد.',
      },
      setup: {
        id: 'setup',
        title: 'الإعداد الكامل للخادم (30 دقيقة من فتح العلبة إلى التشغيل)',
        content: 'تهيّئ هذه الخطوات Mac Mini M6 أو M5 Pro كخادم ذكاء اصطناعي دائم يمكن الوصول إليه عبر الشبكة. بعد إتمام جميع الخطوات، يمكن لأي جهاز في شبكتك المحلية LAN إرسال طلبات إلى API الخاص بـ Ollama على Mac Mini عبر المنفذ 11434.',
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
          'تستخدم أجهزة iPhone تطبيق Atajos ← POST إلى macmini.local:11434. يستخدم مستخدمو MacBook إضافات Continue.dev أو Raycast. اضبط OLLAMA_NUM_PARALLEL=2 حتى يتمكن فردان من العائلة من المحادثة في آنٍ واحد مع Llama 3.1 8B.',
          'يحل محل 4 اشتراكات ChatGPT Plus (80 دولارًا/شهر = 960 دولارًا/سنة). فترة استرداد تكلفة Mac Mini: ~15 شهرًا. من السنة الثانية إلى الخامسة: ادخار صافٍ.',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: 'حالة الاستخدام 2: خادم خاص للأسئلة والأجوبة على المستندات باستخدام RAG',
        content: 'المنظومة: Ollama (Llama 3.1 8B) + nomic-embed-text + ChromaDB. كل شيء يعمل على Mac Mini، يمكن الوصول إليه من الشبكة المحلية LAN. حالات الاستخدام: مستندات عائلية، عقود قانونية، أدلة تقنية، مكتبة وصفات، سجلات طبية، أوراق بحثية. كل شيء خاص. كل شيء قابل للبحث. كل شيء دون اتصال.',
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
          'المنظومة على Mac Mini: whisper.cpp لـ STT (مُسرّع بـ Metal)، Ollama Llama 3.1 8B للاستدلال، Piper TTS لإخراج الصوت، بروتوكول Wyoming للتكامل مع Home Assistant.',
          'يُفعّل بكلمة تنشيط من أجهزة العميل (Apple HomePod عبر Home Assistant، أو مصفوفات ميكروفونات Raspberry Pi في كل غرفة). زمن الاستجابة التقديري من الطرف إلى الطرف على M5 Pro: نحو 1.2 ثانية (STT + LLM + TTS مجتمعة) — تقدير مبني على أداء أجيال Mac Mini السابقة بشريحة Apple Silicon وتحسينات الأداء التي أعلنتها Apple؛ لم يُطرح Mac Mini M6/M5 Pro بعد، ولا توجد قياسات مستقلة متاحة.',
          'الكهرباء السنوية التقديرية: 35 دولارًا. خدمة سحابية مماثلة (Alexa Plus بـ 20 دولارًا/شهر): 240 دولارًا/سنة. وفّر أكثر من 200 دولار سنويًا مع إبقاء جميع بيانات الصوت خاصة.',
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
    "apiBase": "[macmini.local:11434](http://macmini.local:11434)"
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
        title: 'الاستهلاك الكهربائي والأداء الحراري (تقديري)',
        content: 'يُطرح Mac Mini M6/M5 Pro في 22 سبتمبر 2026 — ولم تختبر PromptQuorum هذا العتاد بعد. الأرقام أدناه تقديرية بناءً على مواصفات TDP التي نشرتها Apple، ومزاعم Apple نفسها بشأن الأداء (حتى 4× أداء ذكاء اصطناعي مقارنة بجيل M4)، وسلوك الاستهلاك/الحرارة الملاحَظ في أجيال Mac Mini السابقة بشريحة Apple Silicon تحت أحمال Ollama + Metal مماثلة. تُحسب تكلفة الكهرباء على أساس 0.15 دولار/كيلوواط ساعة.',
        tableFormat: true,
        columns: ['عبء العمل', 'الاستهلاك (تقديري)', 'التكلفة السنوية (24/7، 0.15 دولار/ك.و.س)'],
        rows: [
          { 'عبء العمل': 'خمول', 'الاستهلاك (تقديري)': '8 واط', 'التكلفة السنوية (24/7، 0.15 دولار/ك.و.س)': '~10 دولارات/سنة' },
          { 'عبء العمل': 'استدلال Llama 8B', 'الاستهلاك (تقديري)': '25–35 واط', 'التكلفة السنوية (24/7، 0.15 دولار/ك.و.س)': '~39 دولارًا/سنة' },
          { 'عبء العمل': 'استدلال Llama 34B', 'الاستهلاك (تقديري)': '40–55 واط', 'التكلفة السنوية (24/7، 0.15 دولار/ك.و.س)': '~63 دولارًا/سنة' },
          { 'عبء العمل': 'حمل مختلط معتاد', 'الاستهلاك (تقديري)': '15–25 واط', 'التكلفة السنوية (24/7، 0.15 دولار/ك.و.س)': '~26 دولارًا/سنة' },
        ],
        items: [
          'درجة حرارة السطح تحت الحمل (تقديرية): 35–42 °م (دافئ عند اللمس)',
          'درجة الحرارة الداخلية لـ CPU (تقديرية): 65–75 °م (أقل بكثير من عتبة الخفض)',
          'المروحة: يُتوقع ألا تعمل أبدًا في M6 عديم المروحة؛ تشغيل قصير متوقع بعدد دورات منخفض في M5 Pro أثناء الذروات',
          'لم تُظهر أجيال Mac Mini السابقة بشريحة Apple Silicon أي خفض حراري تحت أحمال LLM المتواصلة — من المتوقع أن يتبع جيل M6/M5 Pro التصميم الحراري نفسه، رهنًا باختبارات مستقلة بعد الطرح في 22 سبتمبر 2026',
          'التهوية: يُوصى بمساحة مفتوحة — لا تضعه في خزانة مغلقة',
          'متانة SSD: 600 TBW نموذجيًا = ~30 سنة بأنماط كتابة خادم الذكاء الاصطناعي',
        ],
        note: 'متوسط الكهرباء السنوية التقديري لحمل مختلط معتاد: 26–39 دولارًا. من المتوقع أن تكلّف سنة كاملة من التشغيل 24/7 أقل من شهر واحد من ChatGPT Plus. ستُحدَّث هذه الأرقام بقياسات فعلية بعد الطرح.',
        image: '/images/mac-mini-m5-local-ai-server-power-draw-by-workload-en.svg',
        imageCaption: 'استهلاك Mac Mini M5 Pro التقديري للطاقة حسب عبء العمل: 8 واط في الخمول، 25–35 واط عند استدلال Llama 8B، 40–55 واط عند استدلال Llama 34B — مقابل 200–300 واط لجهاز مكتبي بـ RTX 4070. تقديرات غير مقيسة بشكل مستقل — تاريخ الطرح 22 سبتمبر 2026.',
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
          { 'السنة': 'السنة 1', 'خادم الذكاء الاصطناعي Mac Mini': 'يبدأ من 1,699 دولارًا عتاد + 35 دولارًا كهرباء = 1,734 دولارًا', '4× ChatGPT Plus': '960 دولارًا', 'الفرق': '−774 دولارًا (Mac أغلى في السنة 1)' },
          { 'السنة': 'السنة 2', 'خادم الذكاء الاصطناعي Mac Mini': '35 دولارًا (كهرباء فقط)', '4× ChatGPT Plus': '960 دولارًا', 'الفرق': '+925 دولارًا تم ادخارها' },
          { 'السنة': 'السنة 3', 'خادم الذكاء الاصطناعي Mac Mini': '35 دولارًا', '4× ChatGPT Plus': '960 دولارًا', 'الفرق': '+925 دولارًا تم ادخارها' },
          { 'السنة': 'السنة 4', 'خادم الذكاء الاصطناعي Mac Mini': '35 دولارًا', '4× ChatGPT Plus': '960 دولارًا', 'الفرق': '+925 دولارًا تم ادخارها' },
          { 'السنة': 'السنة 5', 'خادم الذكاء الاصطناعي Mac Mini': '35 دولارًا', '4× ChatGPT Plus': '960 دولارًا', 'الفرق': '+925 دولارًا تم ادخارها' },
          { 'السنة': 'إجمالي 5 سنوات', 'خادم الذكاء الاصطناعي Mac Mini': 'يبدأ من 1,874 دولارًا', '4× ChatGPT Plus': '4,800 دولارًا', 'الفرق': '+2,926 دولارًا تم ادخارها' },
        ],
        items: [
          'فترة الاسترداد لعائلة من 4 تستبدل ChatGPT Plus (بسعر البداية 1,699 دولارًا): ~19 شهرًا',
          'وكيل برمجي (يستبدل Copilot بـ 10 دولارات/مستخدم/شهر) — مطوّر واحد: مُسترد خلال ~15 شهرًا',
          'وكيل برمجي — فريق من 4 مطوّرين: مُسترد خلال ~4 أشهر',
          'وكيل برمجي — فريق من 10 أشخاص: مُسترد خلال ~1.5 شهر',
        ],
        note: 'تفترض التكلفة الإجمالية 960 دولارًا/سنة (4× ChatGPT Plus بـ 20 دولارًا/شهر لكل منها) وسعر بداية M5 Pro البالغ 1,699 دولارًا. لم تنشر Apple بعد أسعار تهيئات الذاكرة فوق الفئة الأساسية، لذا فإن تهيئة 64 GB المستخدمة في هذا الدليل ستكلّف على الأرجح أكثر — راجع apple.com للسعر الدقيق حسب التهيئة. جميع البيانات خاصة، بلا تكلفة لكل استعلام، مع تضمين العمل دون اتصال.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'هل جهاز Mac Mini الجديد أكثر هدوءًا من البدائل؟', a: 'نعم، بحكم التصميم. الفئة الأساسية M6 بلا مروحة تمامًا. من المتوقع أن نادرًا ما تدور مروحة M5 Pro، وأن تكون هادئة جدًا عندما تدور — كما في أجيال Mac Mini السابقة بشريحة Apple Silicon. أجهزة PC مكتبية بـ GPU: ~50–70 ديسيبل. Mac Mini: يُتوقع اقترابه من 0 ديسيبل في الخمول، ومستويات منخفضة لفترة وجيزة تحت حمل مكثف بـ 34B+. لا توجد بعد قياسات ضجيج مستقلة؛ يُطرح العتاد في 22 سبتمبر 2026.' },
          { q: 'هل يمكنني الوصول إلى Mac Mini عن بُعد؟', a: 'نعم — عبر SSH من الطرفية، أو بمشاركة الشاشة (VNC) من إعدادات النظام ← المشاركة ← الإدارة عن بُعد. على الشبكة المحلية LAN: ssh user@macmini.local. للوصول عن بُعد: استخدم Tailscale أولًا ثم SSH عبر IP الخاص بـ Tailscale.' },
          { q: 'ماذا أفعل إذا احتجت أداءً أعلى؟', a: 'مسار الترقية: راجع تشكيلة Mac Studio الحالية من Apple للحصول على سقف ذاكرة موحدة أعلى ونوى GPU أكثر مما يوفره Mac Mini. لمزارع الخوادم، اربط عدة أجهزة Mac Mini في رف ووازِن الحمل بـ Nginx.' },
          { q: 'كم تدوم Mac Mini كخادم ذكاء اصطناعي 24/7؟', a: 'أجهزة Mac بشريحة Apple Silicon مصممة للتشغيل المتواصل. العمر المتوقع: 7–10 سنوات للاستخدام كخادم ذكاء اصطناعي. متانة SSD (600 TBW نموذجيًا) تغطي 25–30 سنة من أحمال الذكاء الاصطناعي. معدل فشل العتاد السنوي أقل من 0.5%.' },
          { q: 'هل يمكنني خدمة عدة مستخدمين في آنٍ واحد؟', a: 'نعم. اضبط OLLAMA_NUM_PARALLEL=2 (أو أكثر مع مزيد من الذاكرة) لإدارة الطلبات المتزامنة. من المتوقع أن يتعامل M5 Pro بسعة 64 GB بأريحية مع 2–3 مستخدمين متزامنين بنماذج 8B؛ أما M6 بسعة 32 GB فيوفّر هامشًا أقل لذلك.' },
          { q: 'ماذا يحدث إذا فقد Mac Mini التيار الكهربائي؟', a: 'بعد عودة التيار، يُقلع macOS تلقائيًا إذا فعّلت "البدء تلقائيًا بعد انقطاع التيار" في إعدادات النظام ← الطاقة. يُقلع Ollama كخدمة brew. تُعاد النماذج عند أول طلب (تأخير 5–15 ث في أول استجابة بعد إعادة التشغيل).' },
          { q: 'هل يمكنني إضافة GPU خارجي إلى Mac Mini لاستدلال أسرع؟', a: 'لا. لا تدعم Apple Silicon وحدات GPU خارجية لتسريع Metal/ML. بنية الذاكرة الموحدة هي التصميم — لا يمكن إضافة GPU منفصل. لمزيد من السرعة، راجع تشكيلة Mac Studio الحالية من Apple.' },
          { q: 'هل Mac Mini قوي جدًا أم غير كافٍ لخادم ذكاء اصطناعي؟', a: 'لمنازل من 1–4 أشخاص أو فرق صغيرة تشغّل نماذج 8B–34B: مناسب تمامًا، مع M5 Pro بسعة 64 GB. لنماذج 70B فأكبر: غير كافٍ — راجع تشكيلة Mac Studio من Apple لسقوف ذاكرة أعلى. لنماذج صغيرة بميزانية هواة: قوي جدًا (Raspberry Pi 5 يغطي فقط نماذج 1–3B، غير كافٍ لأي استخدام عملي في 2026). لتشغيل المنظومة الكاملة من أربع خدمات (LLM + Whisper + RAG + صوت) في آنٍ واحد: فئة M6 الأساسية المحدودة بـ 32 GB غير كافية — استخدم M5 Pro بسعة 64 GB.' },
          { q: 'هل يوجد جهاز Mac Mini بشريحة "M5" بسيطة؟', a: 'لا. يعتمد إعلان Apple في 25 أغسطس 2026 شريحة M6 للفئة الأساسية من Mac Mini وشريحة M5 Pro للفئة العليا — تجاوزت Apple تمامًا وجود شريحة "M5" بسيطة لخط إنتاج Mac Mini (ظهرت شريحة M5 في وقت سابق من 2026 في خط MacBook Air/Pro، وليس في Mac Mini).' },
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
      headline: 'Mac Mini M6 كخادم ذكاء اصطناعي محلي 2026: LLM وWhisper وRAG',
      description: 'خادم ذكاء اصطناعي محلي دائم التشغيل على جهاز Mac Mini M6 أو M5 Pro الجديد. 25–55 واط، صامت، LLM 24/7.',
      url: 'https://www.promptquorum.com/ar/local-llms/mac-mini-m5-local-ai-server',
      inLanguage: 'ar',
      datePublished: '2026-05-15',
      dateModified: '2026-08-26',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-15',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-pt.webp',
    title: 'Mac Mini M6 como Servidor de IA Local: LLM, Whisper, RAG e Assistente de Voz 24/7',
    seoTitle: 'Mac Mini M6/M5 Pro como servidor de IA local 24/7',
    intro: 'A Apple anunciou o novo Mac Mini em 25 de agosto de 2026: o chip M6 (a partir de $899, até 32 GB de memória unificada) e o chip M5 Pro (a partir de $1.699, até 64 GB de memória unificada). Ambos chegam às lojas em 22 de setembro de 2026. Qualquer uma das configurações é uma excelente opção de servidor de IA local silencioso e sempre ativo. Este guia cobre a configuração de hardware, estratégia de instalação e análise de custo-benefício para executar Ollama LLM, Whisper STT, pipeline RAG e stack de assistente de voz. Custo elétrico estimado: $26–39 por ano.',
    metaDescription: 'Um servidor de IA sempre ativo no novo Mac Mini M6 ou M5 Pro: 25–55 W, $26–39/ano de energia. Ollama, Whisper STT, RAG e assistente de voz. Silencioso e sem reinicializações.',
    twitterDescription: 'Mac Mini M5 Pro 64 GB: o servidor de IA local silencioso ideal. LLM + Whisper + RAG sempre ativo por $35/ano em energia. Guia completo de configuração.',
    publishDate: '2026-05-15',
    dateModified: '2026-08-26',
    ctaText: 'Já tem seu servidor de IA Mac Mini funcionando? Compare as respostas do seu Llama ou DeepSeek local com GPT-4, Claude, Gemini e outros 22 modelos em um único envio com o PromptQuorum — verifique se sua configuração autoalojada entrega respostas de qualidade nuvem para seus casos de uso.',
    current_models_mentioned: ['Llama 3.1 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: 'Usuários que querem um servidor de IA local sempre ativo para casa ou escritório. Usuários técnicos confortáveis com o terminal.',
    readTime: '12 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini servidor de IA local',
    targetKeywords: ['Mac Mini servidor IA', 'LLM sempre ativo', 'infraestrutura IA local', 'Ollama sempre ativo', 'Mac Mini M6 servidor', 'Mac Mini M5 Pro servidor'],
    leadAnswerBlock: '**O Mac Mini M5 Pro 64 GB (a partir de $1.699, chega às lojas em 22 de setembro de 2026) é a melhor opção de servidor de IA sempre ativo: silencioso (quase sem ventilador), 25–55 W de consumo, $26–39/ano em energia estimados. O limite de 64 GB de memória unificada é o que permite executar modelos Ollama 34B, Whisper STT, pipeline RAG e assistente de voz simultaneamente — o Mac Mini M6 básico (a partir de $899) tem um limite de 32 GB, insuficiente para os quatro serviços ao mesmo tempo. A Apple ainda não lançou este hardware, então os números de consumo e temperatura abaixo são estimativas, não benchmarks medidos pela PromptQuorum.**',
    nextStep: {
      text: 'Pronto para configurar o Ollama no seu Mac Mini M6 ou M5 Pro? Aqui está o guia completo de instalação.',
      label: 'Ollama no Mac — Guia de configuração 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      pt: {
        question: 'Por que o novo Mac Mini é um bom servidor de IA local?',
        answer: 'Silencioso (base sem ventilador, Pro quase silencioso), 25–55 W (vs 300 W+ de um PC com GPU), $26–39/ano em energia estimados (vs $263–394 de uma GPU). A configuração M5 Pro de 64 GB executa Ollama 34B LLM + Whisper + RAG + assistente de voz simultaneamente — o M6 básico tem limite de 32 GB e oferece menos margem para vários serviços ao mesmo tempo. Chega às lojas em 22 de setembro de 2026.',
        bullets: [
          'M5 Pro 64 GB: a partir de $1.699, disponível em 22 de setembro de 2026',
          'M6 com até 32 GB: a partir de $899, mesma data de lançamento',
          'Consumo: 25–55 W esperados (vs 300 W+ de um PC com GPU)',
          'Energia anual: estimada em $26–39 (vs $263–394 de uma GPU)',
          'Silencioso: sem ventilador (M6) a quase sem ventilador (M5 Pro) sob cargas LLM típicas',
          'API REST acessível de todos os dispositivos da LAN',
          'Análise de custo-benefício: veja a seção TCO abaixo',
        ],
        updatedDate: '2026-08-26',
      },
    },
    toc: [
      { label: 'Por que Mac Mini M6/M5 Pro', anchor: '#why' },
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
        title: 'Por que o novo Mac Mini (M6/M5 Pro) é um servidor de IA ideal',
        content: [
          'A Apple anunciou o novo Mac Mini em 25 de agosto de 2026: o M6 (a partir de $899, até 32 GB de memória unificada) e o M5 Pro (a partir de $1.699, até 64 GB de memória unificada). Ambos chegam às lojas em 22 de setembro de 2026. Para um servidor de IA local silencioso e sempre ativo, a configuração de 64 GB do M5 Pro é a melhor escolha: silêncio quase total (base sem ventilador, Pro com ventilador em RPM muito baixa), baixo consumo elétrico (25–55 W vs 300 W+ dos PCs com GPU) e memória unificada suficiente para executar um modelo de 34B parâmetros junto com Whisper, RAG e um assistente de voz simultaneamente.',
          'O custo elétrico anual estimado é de $26–39 vs $263–394 dos equivalentes com GPU de desktop — menos de dois meses de uma única assinatura do ChatGPT Plus, todo ano. Como o hardware só chega às lojas em 22 de setembro de 2026, ainda não existem benchmarks independentes; os números de consumo e desempenho deste guia são estimativas baseadas nas especificações publicadas pela Apple e em gerações anteriores do Mac Mini com Apple Silicon, não resultados medidos pela PromptQuorum.',
        ],
        tableFormat: true,
        columns: ['Propriedade', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'Propriedade': 'Custo de hardware', 'Mac Mini M5 Pro': 'A partir de $1.699', 'Desktop + RTX 4070': '$1.200+', 'Raspberry Pi 5': '$80' },
          { 'Propriedade': 'Consumo (repouso)', 'Mac Mini M5 Pro': '8 W (estimado)', 'Desktop + RTX 4070': '50 W', 'Raspberry Pi 5': '5 W' },
          { 'Propriedade': 'Consumo (carga LLM)', 'Mac Mini M5 Pro': '25–55 W (estimado)', 'Desktop + RTX 4070': '200–300 W', 'Raspberry Pi 5': 'N/A (muito pequeno)' },
          { 'Propriedade': 'Energia anual', 'Mac Mini M5 Pro': '$26–39 (estimado)', 'Desktop + RTX 4070': '$263–394', 'Raspberry Pi 5': '~$5' },
          { 'Propriedade': 'Nível de ruído', 'Mac Mini M5 Pro': 'Quase silencioso', 'Desktop + RTX 4070': 'Barulhento (3+ ventiladores)', 'Raspberry Pi 5': 'Silencioso' },
          { 'Propriedade': 'Tamanho máximo de modelo', 'Mac Mini M5 Pro': '34B (Q5)', 'Desktop + RTX 4070': '8B (12 GB VRAM)', 'Raspberry Pi 5': 'Apenas 1–3B' },
          { 'Propriedade': 'Confiabilidade sempre ativo', 'Mac Mini M5 Pro': 'Excelente', 'Desktop + RTX 4070': 'Boa', 'Raspberry Pi 5': 'Excelente' },
          { 'Propriedade': 'Pegada física', 'Mac Mini M5 Pro': '13×13 cm', 'Desktop + RTX 4070': 'Torre completa', 'Raspberry Pi 5': '8×8 cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Recomendação de configuração de hardware',
        content: 'O M5 Pro com 64 GB (a partir de $1.699) é a configuração a comprar para uma stack completa de servidor de IA sempre ativo: executa modelos de 34B, suporta os quatro serviços simultâneos deste guia (LLM + Whisper + RAG + assistente de voz) e tem margem para 2–3 anos de crescimento no tamanho dos modelos. O M6 básico tem limite de 32 GB de memória unificada — suficiente para um LLM mais um serviço leve, mas não para os quatro ao mesmo tempo. Nunca compre o nível M6 limitado a 32 GB se planeja executar a stack completa. Não existe um Mac Mini "M5 Max" — esse era o nome especulativo usado antes do anúncio real da Apple.',
        tableFormat: true,
        columns: ['Configuração', 'Preço (2026)', 'Memória máxima', 'Ideal para', 'Modelos compatíveis'],
        rows: [
          { 'Configuração': 'Mac Mini M6 (base)', 'Preço (2026)': 'A partir de $899', 'Memória máxima': 'até 32 GB', 'Ideal para': 'Um LLM + um serviço leve', 'Modelos compatíveis': '7B–13B Q4' },
          { 'Configuração': 'Mac Mini M5 Pro ★', 'Preço (2026)': 'A partir de $1.699', 'Memória máxima': 'até 64 GB', 'Ideal para': 'Stack completa sempre ativa (LLM+Whisper+RAG+voz)', 'Modelos compatíveis': '34B Q5, múltiplos 8B' },
        ],
        note: '★ Recomendado para este uso. O limite de 64 GB é o fator decisivo: executar LLM, Whisper STT, pipeline RAG e assistente de voz simultaneamente exige que os quatro modelos fiquem na memória ao mesmo tempo, algo que o M6 com limite de 32 GB não consegue oferecer. A Apple ainda não publicou preços para configurações de memória acima da base — consulte apple.com para o preço exato configurado.',
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
        title: 'Casos de uso: o que você pode fazer com um servidor Mac Mini M6/M5 Pro',
        items: [
          '**Assistente de chat sempre disponível:** Llama 3.1 8B ou Mistral Small via Open WebUI — acessível de qualquer dispositivo da sua rede local.',
          '**Transcrição de voz local (Whisper):** transcreva reuniões, podcasts ou notas de voz localmente. Nenhum áudio sai do seu Mac.',
          '**Pipeline RAG local:** responda perguntas sobre seus próprios documentos usando Chroma + nomic-embed-text + Ollama.',
          '**Assistente de código:** DeepSeek Coder V2 ou Qwen3-Coder para sugestões de código sem enviar seu código-fonte para a nuvem.',
          '**Assistente de voz 24/7:** Whisper STT + Ollama LLM + Piper TTS = assistente de voz completamente local e privado.',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: 'Monitorar consumo e desempenho térmico (estimado)',
        content: 'O Mac Mini M6/M5 Pro chega às lojas em 22 de setembro de 2026 — a PromptQuorum ainda não testou este hardware. Os números abaixo são estimativas baseadas nas especificações de TDP publicadas pela Apple e no comportamento de consumo/térmico observado em gerações anteriores do Mac Mini com Apple Silicon. Use o comando `powermetrics` do macOS para monitorar o consumo real assim que o hardware chegar:',
        codeBlock: 'sudo powermetrics --samplers smc,cpu_power -i 5000',
        codeLanguage: 'bash',
        items: [
          'Consumo em repouso (estimado): ~8 W',
          'Carga LLM 8B (estimado): ~25 W',
          'Carga LLM 34B (estimado): ~45–55 W',
          'Gerações anteriores do Mac Mini com Apple Silicon não mostraram limitação térmica sob carga LLM sustentada — espera-se o mesmo do M6/M5 Pro, mas isso ainda depende de testes independentes após o lançamento',
          'Ruído: espera-se inaudível em distâncias normais de trabalho sob cargas de 8B e 13B, com base no padrão de gerações anteriores',
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
          { 'Opção': 'Mac Mini M5 Pro 64 GB', 'Custo inicial': 'A partir de $1.699', 'Energia anual': '$32', 'Total 5 anos': 'A partir de $1.859' },
          { 'Opção': '4× ChatGPT Plus', 'Custo inicial': '$0', 'Energia anual': '$960', 'Total 5 anos': '$4.800' },
          { 'Opção': 'Desktop + RTX 4070', 'Custo inicial': '$1.200+', 'Energia anual': '$328', 'Total 5 anos': '$2.840+' },
          { 'Opção': 'VPS de nuvem (16 vCPU)', 'Custo inicial': '$0', 'Energia anual': '$1.440', 'Total 5 anos': '$7.200' },
        ],
        note: 'O Mac Mini M5 Pro 64 GB deve ser o vencedor de TCO em 5 anos para qualquer pessoa executando LLMs localmente de forma regular. O ponto de equilíbrio vs 4× assinaturas do ChatGPT Plus ocorre em ~19 meses, considerando o preço inicial de $1.699 — a configuração de 64 GB provavelmente custa mais, já que a Apple ainda não publicou preços por configuração de memória.',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'O novo Mac Mini pode ficar ligado 24/7?',
            a: 'Sim. É projetado para uso contínuo. Estima-se que o Mac Mini M5 Pro 64 GB consuma apenas ~8 W em repouso e ~25–55 W sob carga LLM. Gerações anteriores do Mac Mini com Apple Silicon não mostraram problemas térmicos em execução contínua, e o mesmo é esperado para o M6/M5 Pro.',
          },
          {
            q: 'Qual é o maior modelo LLM que o Mac Mini M5 Pro 64 GB consegue executar?',
            a: 'Llama 3.3 34B em Q5 ou equivalente (~22 GB). Para modelos 70B ou maiores, consulte a linha Mac Studio atual da Apple para um limite de memória mais alto.',
          },
          {
            q: 'Posso acessar o servidor de IA do Mac Mini de fora da minha rede doméstica?',
            a: 'Sim, via Tailscale (VPN de malha peer-to-peer gratuita) ou reencaminhamento de porta no seu roteador. O Tailscale é recomendado — configura acesso seguro sem expor portas à internet pública.',
          },
          {
            q: 'O Mac Mini consegue executar vários modelos simultaneamente?',
            a: 'Sim. Com 64 GB de memória unificada no M5 Pro, você pode executar dois modelos 8B simultaneamente ou um modelo 13B com um modelo de embedding (como nomic-embed-text para RAG) em paralelo. O M6 com 32 GB tem menos margem para isso.',
          },
          {
            q: 'Existe um Mac Mini com chip "M5" simples?',
            a: 'Não. O anúncio da Apple de 25 de agosto de 2026 usa o chip M6 para o Mac Mini básico e o chip M5 Pro para o nível superior — a Apple pulou completamente um "M5" simples para a linha Mac Mini (o chip M5 foi lançado antes em 2026 na linha MacBook Air/Pro, não no Mac Mini).',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Artigos relacionados',
        items: [
          '[Benchmarks LLM M5 Pro vs M5 Max 2026](/pt/local-llms/m5-pro-max-llm-benchmarks-2026) — Medições detalhadas de tok/s',
          '[MLX vs Ollama vs llama.cpp no Mac](/pt/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — Qual framework é mais rápido no Apple Silicon',
          '[RAG Local 2026](/pt/local-llms/local-rag-2026) — Construa um pipeline RAG no Mac Mini',
          '[IA Local Privada para Empresas](/pt/local-llms/private-local-ai-for-business) — Implantação empresarial além do caso doméstico',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mac Mini M6 como Servidor de IA Local 2026: LLM, Whisper, RAG',
      description: 'Servidor de IA local sempre ativo no novo Mac Mini M6 ou M5 Pro. 25–55 W, silencioso, LLM 24/7.',
      url: 'https://www.promptquorum.com/pt/local-llms/mac-mini-m5-local-ai-server',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-15',
      dateModified: '2026-08-26',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-15',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-ko.webp',
    title: 'Mac Mini M6를 로컬 AI 서버로 활용하기: 상시 구동 LLM, Whisper, RAG, 음성 어시스턴트',
    seoTitle: 'Mac Mini M6/M5 Pro 로컬 AI 서버: 24/7',
    intro: 'Apple은 2026년 8월 25일 새로운 Mac Mini를 발표했습니다. M6 칩(899달러부터, 통합 메모리 최대 32GB)과 M5 Pro 칩(1,699달러부터, 통합 메모리 최대 64GB)입니다. 두 모델 모두 2026년 9월 22일에 출시됩니다. 두 구성 모두 조용하고 항상 켜진 상태의 로컬 AI 서버로 뛰어난 선택입니다. 이 가이드는 하드웨어 구성, 설정 전략, Ollama LLM·Whisper STT·RAG 파이프라인·음성 어시스턴트 스택 운영을 위한 비용 분석을 다룹니다. 예상 연간 전기 요금은 약 $26–39입니다.',
    metaDescription: '새로운 Mac Mini M6 또는 M5 Pro에서 상시 구동 로컬 AI 서버를 실행하세요. 소비 전력 25–55W, 연간 전기 요금 $26–39. Ollama LLM, Whisper STT, RAG, 음성 어시스턴트. 조용하고 재부팅 불필요.',
    twitterDescription: 'Mac mini M5 Pro 64GB: 완벽한 무소음 로컬 AI 서버. 연간 전기 요금 $35로 상시 LLM + Whisper + RAG 운영. 전체 설정 가이드.',
    publishDate: '2026-05-15',
    dateModified: '2026-08-26',
    ctaText: 'Mac Mini AI 서버를 가동 중이신가요? PromptQuorum에서 로컬 Llama 또는 DeepSeek 출력 결과를 GPT-4, Claude, Gemini 및 22개 이상의 모델과 한 번에 비교해 보십시오. 자체 호스팅 설정이 특정 사용 사례에서 클라우드 수준의 답변을 제공하는지 검증하세요.',
    current_models_mentioned: ['Llama 3.1 8B', 'Mistral Small', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: '가정 또는 사무실에서 상시 구동 로컬 AI 서버를 원하는 사용자. 터미널 사용에 익숙한 기술 사용자.',
    readTime: '12분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac mini 로컬 AI 서버',
    targetKeywords: ['Mac mini AI 서버', '상시 구동 LLM', '홈 AI 인프라', 'Ollama 상시 구동', 'Mac mini M6 서버', 'Mac mini M5 Pro 서버'],
    leadAnswerBlock: '**Mac mini M5 Pro 64GB(1,699달러부터, 2026년 9월 22일 출시)는 가장 뛰어난 상시 구동 AI 서버 옵션입니다. 무소음(팬리스에 가까움), 소비 전력 25-55W, 예상 연간 전기 요금 $26-39. 64GB 통합 메모리 상한 덕분에 Ollama 34B 모델, Whisper STT, RAG 파이프라인, 음성 어시스턴트를 동시에 실행할 수 있습니다 — 기본형 Mac mini M6(899달러부터)는 32GB가 상한이라 네 가지 서비스를 동시에 실행하기에는 부족합니다. Apple은 아직 이 하드웨어를 출시하지 않았으므로, 아래의 소비 전력 및 열 관련 수치는 추정치이며 PromptQuorum이 실측한 벤치마크가 아닙니다.**',
    nextStep: {
      text: 'Mac Mini M6 또는 M5 Pro에 Ollama를 설정할 준비가 되셨습니까? 전체 설치 가이드를 확인하세요.',
      label: 'Mac용 Ollama — 설정 가이드 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      ko: {
        question: '새로운 Mac mini가 로컬 AI 서버로 적합한 이유는 무엇입니까?',
        answer: '무소음(기본형은 팬리스, Pro는 거의 무음), 소비 전력 25-55W(GPU 데스크톱의 300W+ 대비), 예상 연간 전기 요금 $26-39(GPU 대비 $263-394). 64GB M5 Pro 구성은 Ollama 34B LLM + Whisper + RAG + 음성 어시스턴트를 동시에 실행합니다 — 기본형 M6는 32GB가 상한이라 여러 서비스를 동시에 실행할 여유가 적습니다. 2026년 9월 22일 출시.',
        bullets: [
          'M5 Pro 64GB: 1,699달러부터, 2026년 9월 22일 출시',
          'M6 최대 32GB: 899달러부터, 동일한 출시일',
          '소비 전력: 25-55W (GPU 데스크톱 300W+ 대비)',
          '연간 전기 요금: 예상 $26-39 (GPU 대비 $263-394)',
          '무소음: 팬리스(M6)부터 거의 팬리스(M5 Pro)까지, 일반 LLM 부하 기준',
          'LAN의 모든 기기에서 REST API 접근 가능',
          'ChatGPT Plus 4개 구독 대비 약 19개월 만에 본전 회수',
        ],
        updatedDate: '2026-08-26',
      },
    },
    toc: [
      { label: 'Mac Mini M6/M5 Pro를 선택하는 이유', anchor: '#why' },
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
        title: '새로운 Mac Mini(M6/M5 Pro)가 이상적인 AI 서버인 이유',
        content: [
          'Apple은 2026년 8월 25일 새로운 Mac Mini를 발표했습니다. M6(899달러부터, 통합 메모리 최대 32GB)와 M5 Pro(1,699달러부터, 통합 메모리 최대 64GB)입니다. 두 모델 모두 2026년 9월 22일에 출시됩니다. 조용하고 상시 구동되는 로컬 AI 서버를 원한다면 64GB M5 Pro 구성이 더 나은 선택입니다. 거의 무음(기본형은 팬리스, Pro는 매우 낮은 RPM의 팬), 낮은 소비 전력(25-55W, GPU 데스크톱의 300W+ 대비), 그리고 34B 파라미터 모델과 Whisper, RAG, 음성 어시스턴트를 동시에 실행할 수 있는 충분한 통합 메모리를 갖추고 있습니다.',
          '예상 연간 전기 요금은 $26-39로, GPU 데스크톱 동급 제품의 $263-394에 비해 훨씬 저렴합니다. 이는 매년 ChatGPT Plus 구독 한 달 치보다도 적은 금액입니다. 이 하드웨어는 2026년 9월 22일에야 출시되므로 아직 독립적인 벤치마크가 존재하지 않습니다. 이 가이드의 소비 전력 및 성능 수치는 Apple이 공개한 사양과 이전 Apple Silicon Mac mini 세대의 성능을 기반으로 한 추정치이며, PromptQuorum이 실측한 결과가 아닙니다.',
        ],
        tableFormat: true,
        columns: ['항목', 'Mac Mini M5 Pro', '데스크톱 + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { '항목': '하드웨어 비용', 'Mac Mini M5 Pro': '1,699달러부터', '데스크톱 + RTX 4070': '$1,200+', 'Raspberry Pi 5': '$80' },
          { '항목': '대기 전력', 'Mac Mini M5 Pro': '8W (추정)', '데스크톱 + RTX 4070': '50W', 'Raspberry Pi 5': '5W' },
          { '항목': 'LLM 부하 전력', 'Mac Mini M5 Pro': '25-55W (추정)', '데스크톱 + RTX 4070': '200-300W', 'Raspberry Pi 5': '해당 없음 (성능 부족)' },
          { '항목': '연간 전기 요금', 'Mac Mini M5 Pro': '$26-39 (추정)', '데스크톱 + RTX 4070': '$263-394', 'Raspberry Pi 5': '~$5' },
          { '항목': '소음 수준', 'Mac Mini M5 Pro': '거의 무소음', '데스크톱 + RTX 4070': '소음 큼 (팬 3개 이상)', 'Raspberry Pi 5': '무소음' },
          { '항목': '최대 모델 크기', 'Mac Mini M5 Pro': '34B (Q5)', '데스크톱 + RTX 4070': '8B (12GB VRAM)', 'Raspberry Pi 5': '1-3B 전용' },
          { '항목': '상시 구동 안정성', 'Mac Mini M5 Pro': '우수', '데스크톱 + RTX 4070': '양호', 'Raspberry Pi 5': '우수' },
          { '항목': '크기', 'Mac Mini M5 Pro': '약 12.7×12.7cm', '데스크톱 + RTX 4070': '풀타워', 'Raspberry Pi 5': '약 7.6×7.6cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: '하드웨어 구성 권장 사항',
        content: '64GB M5 Pro(1,699달러부터)는 완전한 상시 구동 AI 서버 스택을 구축하기 위해 구매해야 할 구성입니다. 34B 모델을 실행하고, 이 가이드가 다루는 네 가지 동시 서비스(LLM+Whisper+RAG+음성 어시스턴트)를 지원하며, 향후 2-3년간의 모델 크기 성장에도 충분한 여유가 있습니다. 기본형 M6는 통합 메모리가 32GB로 제한되어 있어 — LLM 하나와 가벼운 서비스 하나에는 충분하지만 네 가지를 동시에 실행하기에는 부족합니다. 전체 스택을 운영할 계획이라면 32GB로 제한된 M6 등급은 절대 구매하지 마십시오.',
        tableFormat: true,
        columns: ['구성', '가격 (2026)', '최대 메모리', '적합 용도', '지원 모델'],
        rows: [
          { '구성': 'Mac Mini M6 (기본)', '가격 (2026)': '899달러부터', '최대 메모리': '최대 32 GB', '적합 용도': 'LLM 1개 + 가벼운 서비스 1개', '지원 모델': '7B–13B Q4' },
          { '구성': 'Mac Mini M5 Pro ★', '가격 (2026)': '1,699달러부터', '최대 메모리': '최대 64 GB', '적합 용도': '완전한 상시 구동 스택 (LLM+Whisper+RAG+음성)', '지원 모델': '34B 모델 여유 있게 실행' },
        ],
        note: '★ 이 용도에 권장. 64GB 메모리 상한이 결정적 요소입니다: LLM, Whisper STT, RAG 파이프라인, 음성 어시스턴트를 동시에 실행하려면 네 개 모델이 동시에 메모리에 상주해야 하며, 이는 32GB로 제한된 M6가 감당할 수 없습니다. 스토리지 계획: Llama 3.1 8B Q4 ~모델당 5 GB, Whisper large-v3 ~3 GB, 임베딩 모델 ~0.5 GB, 문서 10,000건의 ChromaDB ~2 GB. 일반적인 5모델 설정: 50-80 GB. 최소 512 GB SSD 권장, 고급 사용자는 1 TB. Apple은 기본형 이상의 메모리 구성 가격을 아직 공개하지 않았습니다 — 정확한 구성 가격은 apple.com에서 확인하십시오.',
        image: '/images/mac-mini-m5-local-ai-server-memory-tier-capacity-en.svg',
        imageCaption: 'Mac Mini M6(최대 32GB)와 M5 Pro(최대 64GB)의 메모리 상한 대비 최대 모델 용량: 32GB의 M6는 LLM 1개와 가벼운 서비스 1개에 적합하며, 64GB의 M5 Pro는 34B 모델을 Whisper, RAG, 음성 어시스턴트와 함께 여유 있게 동시 실행합니다.',
      },
      setup: {
        id: 'setup',
        title: '완전한 서버 설정 (개봉 후 30분 만에 구동)',
        content: '이 단계를 통해 Mac Mini M6 또는 M5 Pro를 지속적으로 네트워크에서 접근 가능한 AI 서버로 구성합니다. 모든 단계를 완료하면 LAN의 모든 기기가 포트 11434에서 Mac Mini의 Ollama API로 요청을 보낼 수 있습니다.',
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
        content: 'Mac Mini AI 서버는 네 가지 주요 사용 사례를 지원합니다. 각각은 독립적인 워크플로우이며, 64GB M5 Pro에서 네 가지를 동시에 실행할 수 있습니다 (32GB M6 기본형에서는 서비스 하나 또는 둘까지만 여유 있게 실행 가능).',
      },
      usecaseFamilyServer: {
        id: 'usecases-family',
        title: '사용 사례 1: 가정용 AI 서버',
        content: [
          'Mac Mini를 24/7 상시 구동 상태로 수납장에 보관합니다. 홈 네트워크의 모든 기기(스마트폰, 태블릿, 노트북)가 동일한 Ollama 인스턴스에 API 요청을 보냅니다. iPhone, iPad, MacBook을 보유한 4인 가족이 동시에 사용합니다.',
          'iPhone은 Shortcuts → macmini.local:11434로 POST 요청을 사용합니다. MacBook 사용자는 Continue.dev 또는 Raycast 확장 프로그램을 사용합니다. OLLAMA_NUM_PARALLEL=2로 설정하면 두 명의 가족 구성원이 Llama 3.1 8B에서 동시에 대화할 수 있습니다.',
          'ChatGPT Plus 4개 구독($80/월 = $960/년)을 대체합니다. Mac Mini 투자 회수 기간: 약 15개월. 2-5년차: 순수 절감.',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: '사용 사례 2: 개인 정보 보호 RAG 문서 Q&A 서버',
        content: '스택: Ollama (Llama 3.1 8B) + nomic-embed-text + ChromaDB. 모두 Mac Mini에서 실행되며 LAN을 통해 접근 가능합니다. 사용 사례: 가족 문서, 법률 계약서, 기술 매뉴얼, 레시피 라이브러리, 의료 기록, 연구 논문. 모두 비공개, 검색 가능, 오프라인.',
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
          'Mac Mini의 스택: STT를 위한 whisper.cpp(Metal 가속), 추론을 위한 Ollama Llama 3.1 8B, 음성 출력을 위한 Piper TTS, Home Assistant 통합을 위한 Wyoming 프로토콜.',
          '클라이언트 기기를 통한 웨이크워드 트리거(Apple HomePod via Home Assistant, 또는 각 방의 Raspberry Pi 마이크 어레이). M5 Pro의 예상 엔드투엔드 지연 시간: 약 1.2초 (STT+LLM+TTS 합산) — 이전 Apple Silicon Mac mini 세대의 성능과 Apple이 발표한 성능 향상치를 기반으로 한 추정치입니다. M6/M5 Pro Mac mini는 아직 출시되지 않았으며 독립적인 실측 데이터는 아직 없습니다.',
          '예상 연간 전기 요금: $35. 유사한 클라우드 서비스(Alexa Plus, 월 $20): $240/년. 모든 음성 데이터를 비공개로 유지하면서 연간 $200 이상 절감할 것으로 예상됩니다.',
        ],
        items: [
          '상세 설정 가이드: [로컬 음성 어시스턴트 구축](/ko/power-local-llm/build-local-voice-assistant-2026)',
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
    "apiBase": "[macmini.local:11434](http://macmini.local:11434)"
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
        title: '전력 소비 및 열 성능 (추정치)',
        content: 'M6/M5 Pro Mac Mini는 2026년 9월 22일에 출시되며, PromptQuorum은 아직 이 하드웨어를 테스트하지 않았습니다. 아래 수치는 Apple이 공개한 TDP 사양, Apple이 발표한 자체 성능 향상치(M4 세대 대비 최대 4배 AI 성능), 그리고 동등한 Ollama + Metal 워크로드에서 관찰된 이전 Apple Silicon Mac Mini 세대의 전력/열 동작을 기반으로 한 추정치입니다. 전기 요금은 $0.15/kWh 기준으로 계산됩니다.',
        tableFormat: true,
        columns: ['워크로드', '전력 (추정)', '연간 비용 (24/7, $0.15/kWh)'],
        rows: [
          { '워크로드': '대기', '전력 (추정)': '8W', '연간 비용 (24/7, $0.15/kWh)': '~$10/년' },
          { '워크로드': 'Llama 8B 추론', '전력 (추정)': '25-35W', '연간 비용 (24/7, $0.15/kWh)': '~$39/년' },
          { '워크로드': 'Llama 34B 추론', '전력 (추정)': '40-55W', '연간 비용 (24/7, $0.15/kWh)': '~$63/년' },
          { '워크로드': '일반적인 혼합 워크로드', '전력 (추정)': '15-25W', '연간 비용 (24/7, $0.15/kWh)': '~$26/년' },
        ],
        items: [
          '부하 시 표면 온도 (추정): 35-42°C (만지면 따뜻한 정도)',
          '내부 CPU 온도 (추정): 65-75°C (스로틀링 임계값 이하)',
          '팬: 팬리스 M6에서는 작동 없음으로 예상; M5 Pro에서 최대 부하 시 잠깐 낮은 RPM으로 작동할 것으로 예상',
          '이전 Apple Silicon Mac Mini 세대는 지속적인 LLM 부하에서 열 스로틀링을 보이지 않았습니다 — M6/M5 Pro 세대도 동일한 열 설계를 따를 것으로 예상되나, 2026년 9월 22일 출시 이후 독립적인 테스트로 확인이 필요합니다',
          '통풍: 개방된 공간 권장 — 밀폐된 캐비닛 내부 설치 지양',
          'SSD 내구성: 일반적인 600 TBW = AI 서버 쓰기 패턴 기준 약 30년',
        ],
        note: '일반적인 혼합 워크로드의 예상 연간 평균 전기 요금: $26-39. 1년 내내 상시 구동해도 ChatGPT Plus 한 달 구독료보다 저렴할 것으로 예상됩니다. 이 수치는 출시 후 실측 데이터로 업데이트될 예정입니다.',
        image: '/images/mac-mini-m5-local-ai-server-power-draw-by-workload-en.svg',
        imageCaption: 'Mac Mini M5 Pro의 워크로드별 예상 전력 소비: 대기 시 8W, Llama 8B 추론 시 25-35W, Llama 34B 추론 시 40-55W — 데스크톱 RTX 4070의 200-300W와 비교됩니다. 독립적으로 실측되지 않은 추정치이며, 출시일은 2026년 9월 22일입니다.',
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
          { '연도': '1년차', 'Mac Mini AI 서버': '1,699달러부터 하드웨어 + $35 전기 = $1,734부터', 'ChatGPT Plus 4개': '$960', '차이': '-$774 (1년차에는 Mac이 더 비쌈)' },
          { '연도': '2년차', 'Mac Mini AI 서버': '$35 (전기만)', 'ChatGPT Plus 4개': '$960', '차이': '+$925 절감' },
          { '연도': '3년차', 'Mac Mini AI 서버': '$35', 'ChatGPT Plus 4개': '$960', '차이': '+$925 절감' },
          { '연도': '4년차', 'Mac Mini AI 서버': '$35', 'ChatGPT Plus 4개': '$960', '차이': '+$925 절감' },
          { '연도': '5년차', 'Mac Mini AI 서버': '$35', 'ChatGPT Plus 4개': '$960', '차이': '+$925 절감' },
          { '연도': '5년 합계', 'Mac Mini AI 서버': '$1,874부터', 'ChatGPT Plus 4개': '$4,800', '차이': '+$2,926 절감' },
        ],
        items: [
          'ChatGPT Plus를 대체하는 4인 가족 기준 투자 회수 기간(1,699달러 시작 가격 기준): 약 19개월',
          '코딩 에이전트 (Copilot $10/사용자/월 대체) — 개발자 1명: 약 15개월 만에 투자 회수',
          '코딩 에이전트 — 4인 개발팀: 약 4개월 만에 투자 회수',
          '코딩 에이전트 — 10인 개발팀: 약 1.5개월 만에 투자 회수',
        ],
        note: 'TCO는 연간 $960 (ChatGPT Plus 4개, 각 $20/월)과 M5 Pro의 시작 가격 $1,699를 기준으로 합니다. Apple은 기본형 이상의 메모리 구성 가격을 아직 공개하지 않았으므로, 이 가이드에서 다루는 64GB 구성은 실제로는 더 비쌀 가능성이 높습니다 — 정확한 구성 가격은 apple.com에서 확인하십시오. 모든 데이터 비공개, 쿼리당 비용 없음, 오프라인 기능 포함.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '새로운 Mac Mini가 대안 제품보다 조용합니까?', a: '네, 설계상 그렇습니다. M6 기본형은 완전 팬리스입니다. M5 Pro의 팬은 거의 작동하지 않으며, 작동 시에도 매우 조용할 것으로 예상됩니다 — 이전 Apple Silicon Mac Mini 세대와 마찬가지입니다. RTX GPU 데스크톱: 약 50-70 dB. Mac Mini: 대기 시 0 dB에 가까울 것으로 예상되며, 34B+ 이상의 과부하 시 잠깐 낮은 dB 수준이 예상됩니다. 아직 독립적인 소음 측정 데이터는 없으며, 하드웨어는 2026년 9월 22일에 출시됩니다.' },
          { q: 'Mac Mini에 원격으로 접속할 수 있습니까?', a: '네. 터미널을 통한 SSH 또는 시스템 설정 → 공유 → 원격 관리를 통한 화면 공유(VNC). LAN에서는 ssh user@macmini.local을 사용합니다. 원격 접근의 경우 Tailscale을 먼저 설치한 후 Tailscale IP를 통해 SSH로 접속하십시오.' },
          { q: '더 높은 처리량이 필요한 경우 어떻게 합니까?', a: '업그레이드 경로: Apple의 현재 Mac Studio 라인업을 확인하십시오. Mac Mini보다 높은 통합 메모리 상한과 더 많은 GPU 코어를 제공합니다. 서버 팜의 경우 여러 Mac Mini를 랙에 연결하고 Nginx로 부하 분산을 구성하십시오.' },
          { q: 'Mac Mini는 24/7 AI 서버로 얼마나 오래 사용할 수 있습니까?', a: 'Apple Silicon Mac은 지속적인 작동을 위해 설계되었습니다. AI 서버 용도 예상 수명: 7-10년. SSD 내구성(일반적인 600 TBW)은 AI 워크로드 기준 25-30년을 커버합니다. 연간 하드웨어 고장률은 0.5% 미만입니다.' },
          { q: '여러 사용자가 동시에 사용할 수 있습니까?', a: '네. OLLAMA_NUM_PARALLEL=2(또는 메모리에 따라 더 높게)로 설정하면 동시 요청을 처리할 수 있습니다. 64GB M5 Pro는 8B 모델에서 2-3명의 동시 사용자를 처리할 것으로 예상됩니다. 32GB M6는 이에 대한 여유가 더 적습니다.' },
          { q: 'Mac Mini의 전원이 나가면 어떻게 됩니까?', a: '전원이 복구되면 시스템 설정 → 에너지에서 "전원 장애 후 자동으로 시작"을 설정한 경우 macOS가 자동으로 부팅됩니다. Ollama는 brew 서비스로 시작됩니다. 모델은 첫 번째 요청 시 다시 로드됩니다(재부팅 후 첫 응답에 5-15초 지연 발생).' },
          { q: 'Mac Mini에 외부 GPU를 추가하여 추론 속도를 높일 수 있습니까?', a: '아니요. Apple Silicon은 Metal/ML 가속을 위한 외부 GPU를 지원하지 않습니다. 통합 메모리 아키텍처가 설계 원칙입니다. 독립형 GPU를 추가할 수 없습니다. 속도 향상을 원한다면 Apple의 현재 Mac Studio 라인업을 확인하십시오.' },
          { q: 'Mac Mini가 AI 서버로 과잉 사양입니까, 아니면 부족합니까?', a: '8B-34B 모델을 실행하는 1-4인 가정 또는 소규모 팀의 경우: 64GB M5 Pro가 적합합니다. 70B 이상 모델의 경우: 부족합니다 — 더 높은 메모리 상한을 위해 Apple의 Mac Studio 라인업을 확인하십시오. 취미 예산으로 소형 모델을 원한다면: 과잉 사양입니다(Raspberry Pi 5는 1-3B 모델만 지원하지만, 2026년 기준 실용적인 용도에는 부족합니다). LLM+Whisper+RAG+음성의 네 가지 서비스를 완전한 스택으로 동시 실행하려면: 32GB로 제한된 M6 기본형은 부족하며, 64GB M5 Pro를 사용하십시오.' },
          { q: '단순한 "M5" Mac Mini가 존재합니까?', a: '아니요. Apple의 2026년 8월 25일 발표는 기본형 Mac Mini에 M6 칩을, 상위 등급에 M5 Pro 칩을 사용합니다 — Apple은 Mac Mini 라인업에서 단순한 "M5"를 완전히 건너뛰었습니다(M5 칩은 2026년 초 MacBook Air/Pro 라인업에 탑재되었으나 Mac Mini에는 탑재되지 않았습니다).' },
        ],
      },
      relatedArticles: {
        id: 'related',
        title: '관련 문서',
        items: [
          '[Apple Silicon 로컬 LLM 완전 가이드](/ko/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max 벤치마크 2026](/ko/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[Mac용 Ollama 설정 가이드](/ko/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[로컬 LLM에 필요한 통합 메모리 용량](/ko/local-llms/how-much-unified-memory-for-local-llm)',
          '[Apple Silicon 최적 LLM 모델](/ko/local-llms/best-models-apple-silicon-2026)',
          '[MLX vs Ollama vs llama.cpp 비교](/ko/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[로컬 음성 어시스턴트 구축](/ko/power-local-llm/build-local-voice-assistant-2026)',
          '[비공개 비즈니스 데이터를 위한 로컬 RAG](/ko/power-local-llm/local-rag-for-private-business-data)',
        ],
      },
    },
  },
}

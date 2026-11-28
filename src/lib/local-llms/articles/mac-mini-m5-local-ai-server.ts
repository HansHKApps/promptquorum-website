import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-15',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-en.webp',
    title: 'Mac Mini M6 as Local AI Server: Always-On LLM, Whisper, RAG, Voice Assistant',
    seoTitle: 'Mac Mini M6 / M5 Pro as Local AI Server: 24/7',
    intro: 'Apple announced the new Mac mini on August 25, 2026: the M6 chip (from $899, max 32GB unified memory) and the M5 Pro chip (from $1,699 with 24GB, up to 64GB; the cheapest 64GB model is $2,699). Both have been available since September 22, 2026. This guide covers hardware configuration, setup strategy, and cost-benefit analysis for running Ollama LLM, Whisper STT, a RAG pipeline, and a voice assistant stack as a quiet, always-on local AI server. Estimated power costs: $26-39/year electricity.',
    metaDescription: 'Run always-on local AI server on the new Mac mini M6 or M5 Pro. Estimated 25–55W, about $26–39/year electricity (estimates, not measured). Ollama LLM, Whisper STT, RAG, voice assistant. Designed for continuous operation.',
    twitterDescription: 'Mac mini M5 Pro 64GB: a quiet local AI server. Always-on LLM + Whisper + RAG, estimated ~$35/year electricity. Full setup guide.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    ctaText: 'Got your Mac Mini AI server running? Compare your local Llama or DeepSeek output against GPT-4, Claude, Gemini, and 22 other models in one dispatch with PromptQuorum — verify your self-hosted setup delivers cloud-quality answers for your specific use cases.',
    current_models_mentioned: ['Llama 3.1 8B', 'Ministral 3 8B', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: 'Users wanting always-on local AI server for home/office. Technical users comfortable with terminal.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac mini local AI server',
    targetKeywords: ['Mac mini AI server', 'always-on LLM', 'home AI infrastructure', 'Ollama always-on', 'Mac mini M6 server', 'Mac mini M5 Pro server'],
    leadAnswerBlock: '**A 64GB Mac mini M5 Pro starts at $2,699 (15-core CPU, 512GB SSD) and costs $3,199 with the 18-core CPU and 1TB (Apple US store, checked November 28, 2026, before tax); the $1,699 M5 Pro base has 24GB. Choose 64GB if you want to keep a 32B-class model loaded next to Whisper, RAG and a voice assistant. If an 8B model is enough, a 32GB Mac mini M6 ($1,499 with 512GB) costs $1,200 less and, by this guide\'s own size figures, should fit the same four services (an estimate, not tested). Power is estimated at 25-55W under LLM load and $26-39 a year. PromptQuorum has not measured this hardware.**',
    nextStep: {
      text: 'Ready to set up Ollama on your Mac Mini M6 or M5 Pro? Here\'s the full installation guide.',
      label: 'Ollama on Mac — Setup Guide 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      en: {
        question: 'Why is the new Mac mini a good local AI server?',
        answer: 'It is small, quiet at idle (Apple lists 5 dBA) and draws an estimated 25-55W under LLM load, about $26-39 a year in electricity. A 64GB M5 Pro (from $2,699) has room for a 32B-class model plus Whisper, RAG and a voice assistant. With an 8B model, a 32GB M6 ($1,499 with 512GB) should be enough for the same services (estimate). Available since September 22, 2026.',
        bullets: [
          'M5 Pro 64GB: from $2,699 (15-core, 512GB); $3,199 with 18-core and 1TB',
          'M6: from $899 (16GB); 32GB with 512GB is $1,499',
          'Power: 25-55W expected (vs 300W+ GPU desktop)',
          'Annual electricity: estimated $26-39 (vs $263-394 GPU)',
          'Noise: Apple lists 5 dBA at idle; it publishes no figure under load',
          'REST API accessible from all LAN devices',
          'Cost-benefit analysis: see TCO section below',
        ],
        updatedDate: '2026-11-28',
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
          'Apple announced the new Mac mini on August 25, 2026, with two chip options: the M6 (from $899, max 32GB unified memory) and the M5 Pro (from $1,699 with 24GB, up to 64GB). Both have been available since September 22, 2026. As a quiet, always-on local AI server, the 64GB M5 Pro (from $2,699) is the option if you want a 32B-class model loaded alongside Whisper, RAG, and a voice assistant. Estimated power draw under LLM load is 25-55W, against an assumed 200-300W for a desktop with an RTX 4070.',
          'Estimated annual electricity cost: $26-39 for the Mac mini in mixed to light 8B use, against $263-394 for a desktop GPU system running at full load around the clock. These are different duty cycles, so do not read the gap as a like-for-like saving; the cost section compares both under the same assumption. This guide uses no independent benchmark data; power and performance figures are estimates based on Apple\'s published specs and prior Apple Silicon Mac mini generations, not PromptQuorum-measured results.',
        ],
        tableFormat: true,
        columns: ['Property', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'Property': 'Hardware cost', 'Mac Mini M5 Pro': '64GB from $2,699', 'Desktop + RTX 4070': '$1,200+', 'Raspberry Pi 5': '$80' },
          { 'Property': 'Power (idle)', 'Mac Mini M5 Pro': '8W (est.)', 'Desktop + RTX 4070': '50W', 'Raspberry Pi 5': '5W' },
          { 'Property': 'Power (LLM load)', 'Mac Mini M5 Pro': '25-55W (est.)', 'Desktop + RTX 4070': '200-300W (assumed)', 'Raspberry Pi 5': 'N/A (too small)' },
          { 'Property': 'Annual electricity', 'Mac Mini M5 Pro': '$26-39 (est., typical use)', 'Desktop + RTX 4070': '$263-394 (24/7 full load)', 'Raspberry Pi 5': '~$7' },
          { 'Property': 'Noise level', 'Mac Mini M5 Pro': '5 dBA at idle (Apple)', 'Desktop + RTX 4070': 'Depends on the build', 'Raspberry Pi 5': 'Silent' },
          { 'Property': 'Max model size', 'Mac Mini M5 Pro': '32B; 70B Q4 only tightly', 'Desktop + RTX 4070': 'About 14B Q4 (12GB VRAM)', 'Raspberry Pi 5': '1-3B only' },
          { 'Property': 'Always-on reliability', 'Mac Mini M5 Pro': 'Not tested', 'Desktop + RTX 4070': 'Not tested', 'Raspberry Pi 5': 'Not tested' },
          { 'Property': 'Footprint', 'Mac Mini M5 Pro': '5×5 inches', 'Desktop + RTX 4070': 'Full tower', 'Raspberry Pi 5': '3×3 inches' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware Configuration Recommendation',
        content: 'Buy 64GB if you want a 32B-class model loaded next to the other services in this guide; the cheapest such Mac mini is $2,699. If your stack runs on Llama 3.1 8B, this guide\'s own size figures (about 5GB for the model, 3GB for Whisper large-v3, 0.5GB for embeddings, 2GB for the document database) add up to about 11GB before macOS, so a 32GB M6 ($1,499 with 512GB) should be enough. That is an estimate, not a test. Memory cannot be upgraded later.',
        tableFormat: true,
        columns: ['Config', 'Price (2026)', 'Max Memory', 'Best For', 'Models Supported'],
        rows: [
          { 'Config': 'Mac Mini M6 (base)', 'Price (2026)': 'From $899; 32GB + 512GB $1,499', 'Max Memory': 'Up to 32 GB', 'Best For': 'Four services with an 8B model (est.)', 'Models Supported': '7B-13B Q4' },
          { 'Config': 'Mac Mini M5 Pro ★', 'Price (2026)': '64GB from $2,699', 'Max Memory': 'Up to 64 GB', 'Best For': '32B-class model plus Whisper, RAG, voice', 'Models Supported': '32B models comfortably' },
        ],
        note: '★ The 64GB pick applies when you want a 32B-class model loaded together with Whisper, RAG and voice; for an 8B stack, 32GB should be enough (estimate). Storage planning: Llama 3.1 8B Q4 ~5 GB per model, Whisper large-v3 ~3 GB, embedding model ~0.5 GB, ChromaDB with 10K docs ~2 GB. Typical 5-model setup: 50-80 GB. Minimum 512 GB SSD; 1 TB for power users. 64GB prices on the Apple US store, checked November 28, 2026, before tax: $2,699 (15-core, 512GB), $2,999 (15-core, 1TB), $2,899 (18-core, 512GB), $3,199 (18-core, 1TB).',
        image: '',
        imageCaption: '',
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
          'Four ChatGPT Plus subscriptions cost about $80/month ($960/year). A shared local server can take over some of those tasks, but local 8B models are not equivalent to ChatGPT.',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: 'Use Case 2: Private RAG Document Q&A Server',
        content: 'Stack: Ollama (Llama 3.1 8B) + nomic-embed-text + ChromaDB. All running on Mac Mini, accessible via LAN. Use cases: family documents, legal contracts, technical manuals, recipe library, medical records, research papers. Inference and search run on the Mac mini on your own network; individual tools can still check for updates.',
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
          'Wake-word triggered via client devices (Apple HomePod via Home Assistant, or Raspberry Pi microphone arrays in each room). End-to-end latency has not been measured on this hardware; it depends on the models and settings you choose.',
          'Estimated annual electricity: about $26-39. Voice processing runs on your own Mac (individual tools can still make network calls, such as update checks). Do not expect the electricity difference to a cloud assistant to pay for the hardware.',
        ],
        items: [
          'See detailed setup: [Build a Local Voice Assistant](/power-local-llm/build-local-voice-assistant-2026)',
        ],
      },
      usecaseCoding: {
        id: 'usecases-coding',
        title: 'Use Case 4: Private Coding Agent (IDE Integration)',
        content: 'Configure Continue.dev to use the Mac Mini\'s API. DeepSeek Coder V2 at 16B runs through Ollama on the Mac mini, so model inference happens on your own hardware (extensions and editors can still send telemetry or check for updates; review their settings).',
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
          'No per-user model fee (GitHub Copilot Pro is listed at about $10/month per user); hardware and electricity still cost money',
          'Inference runs on your own hardware, not a cloud model service',
          'Can work without internet once models and extensions are installed and set up for offline use',
          'Works with Continue.dev through the local API',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: 'Power Consumption and Thermal Performance (Estimated)',
        content: 'PromptQuorum has not tested this hardware. The per-workload figures below are our estimates, not measurements. For reference, [Apple\'s power table](https://support.apple.com/en-us/103253) lists 4W idle and 70W maximum for an M6 Mac mini (16GB, 256GB), and 6W idle and 145W maximum for an M5 Pro Mac mini (64GB, 8TB) in a compute-intensive test, so heavy loads can draw more than our estimates. Electricity cost calculated at $0.15/kWh.',
        tableFormat: true,
        columns: ['Workload', 'Power (est.)', 'Annual Cost (24/7, $0.15/kWh)'],
        rows: [
          { 'Workload': 'Idle', 'Power (est.)': '8W', 'Annual Cost (24/7, $0.15/kWh)': '~$10/year' },
          { 'Workload': 'Llama 8B inference', 'Power (est.)': '25-35W', 'Annual Cost (24/7, $0.15/kWh)': '~$39/year' },
          { 'Workload': 'Qwen3 32B inference', 'Power (est.)': '40-55W', 'Annual Cost (24/7, $0.15/kWh)': '~$62/year' },
          { 'Workload': 'Mixed typical workload', 'Power (est.)': '15-25W', 'Annual Cost (24/7, $0.15/kWh)': '~$26/year' },
        ],
        items: [
          'Surface and chip temperatures: not measured by PromptQuorum',
          'Check temperatures on your own unit during a long workload',
          'Fan and noise: Apple lists 5 dBA at idle and no figure under load; PromptQuorum has not measured noise',
          'Sustained-load throttling: not tested by PromptQuorum; check independent tests of your exact configuration',
          'Ventilation: open space recommended — not an enclosed cabinet',
          'SSD endurance: check the endurance rating of your specific configuration; wear depends on your write volume',
        ],
        note: 'Estimated annual electricity for mixed to 8B use: $26-39. These figures are estimates, not measurements.',
        image: '',
        imageCaption: '',
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
          { 'Year': 'Year 1', 'Mac Mini AI Server': '$2,699 hardware + $35 power = $2,734', '4× ChatGPT Plus': '$960', 'Difference': '-$1,774 (Mac costs more in Y1)' },
          { 'Year': 'Year 2', 'Mac Mini AI Server': '$35 (power only)', '4× ChatGPT Plus': '$960', 'Difference': '+$925 saved' },
          { 'Year': 'Year 3', 'Mac Mini AI Server': '$35', '4× ChatGPT Plus': '$960', 'Difference': '+$925 saved' },
          { 'Year': 'Year 4', 'Mac Mini AI Server': '$35', '4× ChatGPT Plus': '$960', 'Difference': '+$925 saved' },
          { 'Year': 'Year 5', 'Mac Mini AI Server': '$35', '4× ChatGPT Plus': '$960', 'Difference': '+$925 saved' },
          { 'Year': '5-year total', 'Mac Mini AI Server': '$2,874', '4× ChatGPT Plus': '$4,800', 'Difference': '+$1,926 saved' },
        ],
        note: 'Assumptions: $960/year for 4× ChatGPT Plus ($20/month each; check current pricing), $35/year Mac power (estimate), and $2,699 for the cheapest 64GB Mac mini (15-core, 512GB; Apple US store, checked November 28, 2026, before tax). Cumulative break-even falls in year 3, after about 35 months. With the 18-core 1TB model ($3,199), the 5-year total is $3,374, the saving $1,426, and break-even about 42 months. This compares cost only: local 8B-32B models are not equivalent to ChatGPT Plus. Against a desktop with an RTX 4070 (assumed at $1,200 or more, not priced by us): with both at LLM load 24/7, 5-year totals are about $2,860-3,060 for the Mac and $2,520-3,170 or more for the desktop, so neither is clearly cheaper. If both mostly idle (8W vs 50W), they are about $2,750 vs $1,530, so the desktop is cheaper, but its 12GB of VRAM cannot hold a 32B model.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Is the new Mac mini quieter than alternatives?', a: 'Apple lists 5 dBA at idle for the Mac mini and publishes no noise figure under load. PromptQuorum has made no noise measurements and has not compared it with specific desktop PCs, whose noise depends on case, coolers and fan settings.' },
          { q: 'Can I remote into the Mac Mini?', a: 'Yes — SSH via terminal, or Screen Sharing (VNC) via System Settings → Sharing → Remote Management. For LAN: ssh user@macmini.local. For remote access: use Tailscale first, then SSH through the Tailscale IP.' },
          { q: 'What if I need higher throughput?', a: 'Upgrade path: check Apple\'s current Mac Studio lineup for a higher unified-memory ceiling and more GPU cores than the Mac mini offers. For server farms, rack multiple Mac Minis and load-balance with Nginx.' },
          { q: 'How long does the Mac Mini last as a 24/7 AI server?', a: 'Apple Silicon Macs are designed for sustained operation. Real-world lifespan and failure rates depend on the individual unit, workload and environment, and PromptQuorum has no measured data for this hardware, so we give no lifespan or failure-rate figure. Keep backups of your models, configuration and data.' },
          { q: 'Can I run multiple users simultaneously?', a: 'Yes. Set OLLAMA_NUM_PARALLEL=2 (or higher with more memory) to handle concurrent requests. The 64GB M5 Pro is expected to handle 2-3 simultaneous users on 8B models, or 1 user with multi-model stacks (LLM + vision + STT); the 32GB M6 has less headroom for this.' },
          { q: 'What happens if Mac Mini loses power?', a: 'After power restoration, macOS boots automatically if you set "Start up automatically after a power failure" in System Settings → Energy. Ollama starts as a brew service. Models reload on first request (5-15 sec delay for first response after reboot).' },
          { q: 'Can I add an external GPU to Mac Mini for faster inference?', a: 'No. Apple Silicon does not support external GPUs for Metal/ML acceleration. The unified memory architecture is the design — you cannot add discrete GPU. For more speed, check Apple\'s current Mac Studio options.' },
          { q: 'Is the Mac mini overkill for an AI server, or underkill?', a: 'It depends on the model size. For a stack built on 8B models, the 64GB M5 Pro is more than you need, and a 32GB M6 should be enough (estimate). For a 32B-class model alongside Whisper, RAG and voice, choose 64GB. A 70B Q4 model (43GB) fits in 64GB only tightly, at about 4-5 tok/s (estimate); see [cheapest ways to run a 70B model](/prompt-bites/cheapest-way-to-run-70b-model-locally). A Raspberry Pi 5 is limited to very small models.' },
          { q: 'Is there a plain "M5" Mac mini?', a: 'No. Apple\'s August 25, 2026 announcement uses the M6 chip for the base Mac mini and the M5 Pro chip for the upper tier — Apple skipped a plain "M5" for the Mac mini line entirely.' },
        ],
      },
      relatedArticles: {
        id: 'related',
        title: 'Related Articles',
        items: [
          '[Apple Silicon for Local LLMs: Complete Guide](/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max for Local LLMs: Specs and Speed Estimates](/local-llms/m5-pro-max-llm-benchmarks-2026)',
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
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-de.webp',
    title: 'Mac Mini M6 als lokaler KI-Server: Always-On LLM, Whisper, RAG, Sprachassistent',
    seoTitle: 'Mac Mini M6 / M5 Pro als KI-Server: 24/7',
    intro: 'Apple hat am 25. August 2026 den neuen Mac Mini vorgestellt: den M6-Chip (ab 1.049 €, max. 32 GB Unified Memory) und den M5-Pro-Chip (ab 1.999 € mit 24 GB, bis 64 GB; das günstigste 64-GB-Modell kostet 3.099 €). Beide sind seit dem 22. September 2026 erhältlich. Diese Anleitung behandelt Hardware-Konfiguration, Setup-Strategie und Kosten-Nutzen-Analyse für Ollama LLM, Whisper STT, RAG-Pipeline und Sprachassistent auf einem leisen, dauerhaft laufenden lokalen KI-Server. Geschätzte Stromkosten: ca. 53–79 €/Jahr.',
    metaDescription: 'Lokaler KI-Server auf dem neuen Mac Mini M6 oder M5 Pro. Geschätzt 25–55 W, ca. 53–79 €/Jahr Strom (Schätzwerte). Ollama, Whisper, RAG, Sprachassistent.',
    twitterDescription: 'Mac Mini M5 Pro 64 GB: ein leiser lokaler KI-Server. Always-On LLM + Whisper + RAG, geschätzt ca. 53–79 €/Jahr Strom. Vollständige Einrichtungsanleitung.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    ctaText: 'Mac Mini KI-Server läuft? Vergleichen Sie Ihre lokalen Llama- oder DeepSeek-Antworten mit GPT-4, Claude, Gemini und 22 weiteren Modellen in einem Dispatch mit PromptQuorum — prüfen Sie, ob Ihr selbst gehostetes Setup Cloud-Qualität liefert.',
    current_models_mentioned: ['Llama 3.1 8B', 'Ministral 3 8B', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: 'Nutzer, die einen dauerhaft laufenden lokalen KI-Server für Zuhause oder das Büro betreiben möchten.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini lokaler KI-Server',
    targetKeywords: ['Mac Mini KI-Server', 'Always-On LLM', 'lokale KI-Infrastruktur', 'Ollama dauerhaft', 'Mac Mini M6 Server', 'Mac Mini M5 Pro Server'],
    leadAnswerBlock: '**Ein Mac Mini M5 Pro mit 64 GB kostet ab 3.099 € (15-Core-CPU, 512 GB SSD) und mit 18-Core-CPU und 1 TB 3.649 € (Apple Store Deutschland, geprüft am 28. November 2026, inkl. MwSt.); die M5-Pro-Basis für 1.999 € hat 24 GB. Wählen Sie 64 GB, wenn ein Modell der 32B-Klasse neben Whisper, RAG und Sprachassistent geladen bleiben soll. Reicht ein 8B-Modell, kostet ein Mac Mini M6 mit 32 GB (1.709 € mit 512 GB) 1.390 € weniger und sollte nach den Größenangaben dieses Leitfadens dieselben vier Dienste fassen (Schätzung, nicht getestet). Geschätzt: 25–55 W unter LLM-Last, ca. 53–79 € Strom pro Jahr bei 0,30 €/kWh. PromptQuorum hat diese Hardware nicht gemessen.**',
    nextStep: {
      text: 'Bereit, Ollama auf Ihrem Mac Mini M6 oder M5 Pro einzurichten? Hier ist der vollständige Installationsleitfaden.',
      label: 'Ollama auf Mac — Einrichtungsanleitung 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      de: {
        question: 'Warum ist der neue Mac Mini ein guter lokaler KI-Server?',
        answer: 'Er ist klein, im Leerlauf leise (Apple nennt 5 dBA) und braucht unter LLM-Last geschätzt 25–55 W, also ca. 53–79 € Strom im Jahr. Ein M5 Pro mit 64 GB (ab 3.099 €) bietet Platz für ein Modell der 32B-Klasse plus Whisper, RAG und Sprachassistent. Mit einem 8B-Modell sollte ein M6 mit 32 GB (1.709 € mit 512 GB) für dieselben Dienste genügen (Schätzung). Erhältlich seit dem 22. September 2026.',
        bullets: [
          'M5 Pro 64 GB: ab 3.099 € (15 Kerne, 512 GB); 3.649 € mit 18 Kernen und 1 TB',
          'M6: ab 1.049 € (16 GB); 32 GB mit 512 GB: 1.709 €',
          'Stromverbrauch: 25–55 W erwartet (gegenüber 300 W+ GPU-Desktop)',
          'Jahresstrom: geschätzt ca. 53–79 € bei 0,30 €/kWh',
          'Lautstärke: Apple nennt 5 dBA im Leerlauf und keinen Wert unter Last',
          'REST-API für alle Geräte im Heimnetz',
          'Kosten-Nutzen-Analyse: siehe TCO-Abschnitt unten',
        ],
        updatedDate: '2026-11-28',
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
          'Apple hat am 25. August 2026 den neuen Mac Mini vorgestellt: den M6 (ab 1.049 €, max. 32 GB Unified Memory) und den M5 Pro (ab 1.999 € mit 24 GB, bis 64 GB). Beide sind seit dem 22. September 2026 erhältlich. Als leiser, dauerhaft laufender lokaler KI-Server ist der M5 Pro mit 64 GB (ab 3.099 €) die Wahl, wenn ein Modell der 32B-Klasse neben Whisper, RAG und Sprachassistent geladen bleiben soll. Geschätzte Leistungsaufnahme unter LLM-Last: 25–55 W, gegenüber angenommenen 200–300 W bei einem Desktop mit RTX 4070.',
          'Geschätzte jährliche Stromkosten: ca. 53–79 € für den Mac Mini bei gemischter bis leichter 8B-Nutzung, 526–788 € für ein Desktop-GPU-System, das rund um die Uhr unter Volllast läuft (jeweils 0,30 €/kWh). Das sind unterschiedliche Nutzungsprofile; die Differenz ist daher keine vergleichbare Ersparnis. Der Kostenabschnitt vergleicht beide unter derselben Annahme. Dieser Leitfaden nutzt keine unabhängigen Benchmarks; Strom- und Leistungsangaben sind Schätzungen auf Basis von Apples veröffentlichten Spezifikationen und früheren Apple-Silicon-Mac-Mini-Generationen, keine von PromptQuorum gemessenen Ergebnisse.',
        ],
        tableFormat: true,
        columns: ['Eigenschaft', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'Eigenschaft': 'Hardwarekosten', 'Mac Mini M5 Pro': '64 GB ab 3.099 €', 'Desktop + RTX 4070': 'ab 1.200 €', 'Raspberry Pi 5': 'ca. 80 €' },
          { 'Eigenschaft': 'Stromverbrauch (Leerlauf)', 'Mac Mini M5 Pro': '8 W (geschätzt)', 'Desktop + RTX 4070': '50 W', 'Raspberry Pi 5': '5 W' },
          { 'Eigenschaft': 'Stromverbrauch (LLM-Last)', 'Mac Mini M5 Pro': '25–55 W (geschätzt)', 'Desktop + RTX 4070': '200–300 W (Annahme)', 'Raspberry Pi 5': 'Nicht möglich' },
          { 'Eigenschaft': 'Jahresstrom (0,30 €/kWh)', 'Mac Mini M5 Pro': '53–79 € (geschätzt, typisch)', 'Desktop + RTX 4070': '526–788 € (24/7 Volllast)', 'Raspberry Pi 5': 'ca. 13 €' },
          { 'Eigenschaft': 'Lautstärke', 'Mac Mini M5 Pro': '5 dBA im Leerlauf (Apple)', 'Desktop + RTX 4070': 'Je nach Aufbau', 'Raspberry Pi 5': 'Geräuschlos' },
          { 'Eigenschaft': 'Max. Modellgröße', 'Mac Mini M5 Pro': '32B; 70B Q4 nur sehr knapp', 'Desktop + RTX 4070': 'ca. 14B Q4 (12 GB VRAM)', 'Raspberry Pi 5': 'Nur 1–3B' },
          { 'Eigenschaft': 'Dauerbetrieb-Zuverlässigkeit', 'Mac Mini M5 Pro': 'Nicht getestet', 'Desktop + RTX 4070': 'Nicht getestet', 'Raspberry Pi 5': 'Nicht getestet' },
          { 'Eigenschaft': 'Stellfläche', 'Mac Mini M5 Pro': '13×13 cm', 'Desktop + RTX 4070': 'Midi-Tower', 'Raspberry Pi 5': '8×8 cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware-Konfigurationsempfehlung',
        content: 'Kaufen Sie 64 GB, wenn ein Modell der 32B-Klasse neben den anderen Diensten dieses Leitfadens geladen bleiben soll; der günstigste Mac Mini dafür kostet 3.099 €. Läuft Ihr Stack mit Llama 3.1 8B, ergeben die Größenangaben dieses Leitfadens (ca. 5 GB für das Modell, 3 GB für Whisper large-v3, 0,5 GB für Embeddings, 2 GB für die Dokumentendatenbank) zusammen etwa 11 GB ohne macOS. Dann sollte ein M6 mit 32 GB (1.709 € mit 512 GB) genügen. Das ist eine Schätzung, kein Test. Der Speicher lässt sich später nicht erweitern.',
        tableFormat: true,
        columns: ['Konfiguration', 'Preis (2026)', 'Max. Speicher', 'Geeignet für', 'Unterstützte Modelle'],
        rows: [
          { 'Konfiguration': 'Mac Mini M6 (Basis)', 'Preis (2026)': 'ab 1.049 €; 32 GB + 512 GB: 1.709 €', 'Max. Speicher': 'bis 32 GB', 'Geeignet für': 'Vier Dienste mit 8B-Modell (geschätzt)', 'Unterstützte Modelle': '7B–13B Q4' },
          { 'Konfiguration': 'Mac Mini M5 Pro ★', 'Preis (2026)': '64 GB ab 3.099 €', 'Max. Speicher': 'bis 64 GB', 'Geeignet für': '32B-Klasse plus Whisper, RAG, Sprache', 'Unterstützte Modelle': '32B-Modelle komfortabel' },
        ],
        note: '★ Die 64-GB-Empfehlung gilt, wenn ein Modell der 32B-Klasse zusammen mit Whisper, RAG und Sprache geladen sein soll; für einen 8B-Stack sollten 32 GB genügen (Schätzung). Speicherplanung: Llama 3.1 8B Q4 ca. 5 GB pro Modell, Whisper large-v3 ca. 3 GB, Embedding-Modell ca. 0,5 GB, ChromaDB mit 10.000 Dokumenten ca. 2 GB. Typisches 5-Modell-Setup: 50–80 GB. Mindestens 512 GB SSD; 1 TB für Power-User. 64-GB-Preise im Apple Store Deutschland, geprüft am 28. November 2026: 3.099 € (15 Kerne, 512 GB), 3.429 € (15 Kerne, 1 TB), 3.319 € (18 Kerne, 512 GB), 3.649 € (18 Kerne, 1 TB).',
        image: '',
        imageCaption: '',
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
          'Vier ChatGPT-Plus-Abos kosten in dieser Rechnung rund 80 €/Monat (960 €/Jahr, Annahme). Ein gemeinsamer lokaler Server kann einen Teil dieser Aufgaben übernehmen, lokale 8B-Modelle sind ChatGPT aber nicht gleichwertig.',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: 'Anwendungsfall 2: Privater RAG-Dokumenten-Q&A-Server',
        content: 'Stack: Ollama (Llama 3.1 8B) + nomic-embed-text + ChromaDB. Alles auf dem Mac Mini, über das Heimnetz erreichbar. Anwendungsfälle: Familiendokumente, Verträge, technische Handbücher, Rezeptbibliothek, medizinische Unterlagen, wissenschaftliche Arbeiten. Inferenz und Suche laufen auf dem Mac Mini in Ihrem eigenen Netzwerk; einzelne Tools können weiterhin nach Updates suchen.',
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
          'Wake-Word-Aktivierung über Client-Geräte (Apple HomePod via Home Assistant oder Raspberry-Pi-Mikrofon-Arrays). Die End-to-End-Latenz wurde auf dieser Hardware nicht gemessen; sie hängt von den gewählten Modellen und Einstellungen ab.',
          'Geschätzter Jahresstrom: ca. 53–79 €. Die Sprachverarbeitung läuft auf Ihrem eigenen Mac (einzelne Tools können weiterhin Netzwerkzugriffe wie Update-Prüfungen ausführen). Rechnen Sie nicht damit, dass sich die Hardware gegenüber einem Cloud-Assistenten durch Einsparungen bezahlt macht.',
        ],
        items: [
          'Detaillierte Einrichtung: [Lokalen Sprachassistenten aufbauen](/de/power-local-llm/build-local-voice-assistant-2026)',
        ],
      },
      usecaseCoding: {
        id: 'usecases-coding',
        title: 'Anwendungsfall 4: Privater Coding-Agent (IDE-Integration)',
        content: 'Konfigurieren Sie Continue.dev für die API des Mac Mini. DeepSeek Coder V2 mit 16B läuft über Ollama auf dem Mac Mini, die Modell-Inferenz findet also auf Ihrer eigenen Hardware statt (Erweiterungen und Editoren können weiterhin Telemetrie senden oder nach Updates suchen; prüfen Sie deren Einstellungen).',
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
          'Keine Modellgebühr pro Nutzer (GitHub Copilot Pro ist mit ca. 10 US-Dollar pro Nutzer und Monat ausgeschrieben); Hardware und Strom kosten weiterhin Geld',
          'Inferenz läuft auf Ihrer eigenen Hardware, nicht bei einem Cloud-Modelldienst',
          'Kann ohne Internet funktionieren, sobald Modelle und Erweiterungen installiert und für den Offline-Betrieb eingerichtet sind',
          'Funktioniert mit Continue.dev über die lokale API',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: 'Stromverbrauch und Thermik (geschätzt)',
        content: 'PromptQuorum hat diese Hardware nicht getestet. Die folgenden Werte je Arbeitslast sind unsere Schätzungen, keine Messungen. Zum Vergleich: [Apples Verbrauchstabelle](https://support.apple.com/en-us/103253) nennt für einen M6-Mac-Mini (16 GB, 256 GB) 4 W im Leerlauf und maximal 70 W, für einen M5 Pro (64 GB, 8 TB) 6 W im Leerlauf und maximal 145 W in einem rechenintensiven Test. Hohe Last kann also mehr Leistung ziehen als unsere Schätzungen. Stromkosten bei 0,30 €/kWh (Annahme für Deutschland).',
        tableFormat: true,
        columns: ['Arbeitslast', 'Leistung (geschätzt)', 'Jahreskosten (24/7, 0,30 €/kWh)'],
        rows: [
          { 'Arbeitslast': 'Leerlauf', 'Leistung (geschätzt)': '8 W', 'Jahreskosten (24/7, 0,30 €/kWh)': 'ca. 21 €/Jahr' },
          { 'Arbeitslast': 'Llama 8B-Inferenz', 'Leistung (geschätzt)': '25–35 W', 'Jahreskosten (24/7, 0,30 €/kWh)': 'ca. 79 €/Jahr' },
          { 'Arbeitslast': 'Qwen3 32B-Inferenz', 'Leistung (geschätzt)': '40–55 W', 'Jahreskosten (24/7, 0,30 €/kWh)': 'ca. 125 €/Jahr' },
          { 'Arbeitslast': 'Gemischte typische Last', 'Leistung (geschätzt)': '15–25 W', 'Jahreskosten (24/7, 0,30 €/kWh)': 'ca. 53 €/Jahr' },
        ],
        items: [
          'Oberflächen- und Chiptemperaturen: von PromptQuorum nicht gemessen',
          'Prüfen Sie die Temperaturen an Ihrem Gerät während einer längeren Last',
          'Lüfter und Geräusch: Apple nennt 5 dBA im Leerlauf und keinen Wert unter Last; PromptQuorum hat die Lautstärke nicht gemessen',
          'Drosselung unter Dauerlast: von PromptQuorum nicht getestet; prüfen Sie unabhängige Tests Ihrer genauen Konfiguration',
          'Belüftung: offener Aufstellort empfohlen — kein geschlossener Schrank',
          'SSD-Haltbarkeit: die Haltbarkeitsangabe Ihrer konkreten Konfiguration prüfen; der Verschleiß hängt vom Schreibvolumen ab',
        ],
        note: 'Geschätzter Jahresstrom bei gemischter bis 8B-Nutzung: ca. 53–79 € (bei 0,30 €/kWh). Diese Werte sind Schätzungen, keine Messungen.',
        image: '',
        imageCaption: '',
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
          { 'Jahr': 'Jahr 1', 'Mac Mini KI-Server': '3.099 € Hardware + 53 € Strom = 3.152 €', '4× ChatGPT Plus': '960 €', 'Differenz': '–2.192 € (Mac teurer in J1)' },
          { 'Jahr': 'Jahr 2', 'Mac Mini KI-Server': '53 € (nur Strom)', '4× ChatGPT Plus': '960 €', 'Differenz': '+907 € gespart' },
          { 'Jahr': 'Jahr 3', 'Mac Mini KI-Server': '53 €', '4× ChatGPT Plus': '960 €', 'Differenz': '+907 € gespart' },
          { 'Jahr': 'Jahr 4', 'Mac Mini KI-Server': '53 €', '4× ChatGPT Plus': '960 €', 'Differenz': '+907 € gespart' },
          { 'Jahr': 'Jahr 5', 'Mac Mini KI-Server': '53 €', '4× ChatGPT Plus': '960 €', 'Differenz': '+907 € gespart' },
          { 'Jahr': '5-Jahres-Gesamt', 'Mac Mini KI-Server': '3.364 €', '4× ChatGPT Plus': '4.800 €', 'Differenz': '+1.436 € gespart' },
        ],
        note: 'Annahmen: 960 €/Jahr für 4× ChatGPT Plus (je 20 €/Monat; aktuelle Preise prüfen), 53 €/Jahr Mac-Strom (Schätzung, 0,30 €/kWh) und 3.099 € für den günstigsten Mac Mini mit 64 GB (15 Kerne, 512 GB; Apple Store Deutschland, geprüft am 28. November 2026). Kumuliert rechnet sich der Mac im 4. Jahr, nach rund 41 Monaten. Mit dem Modell mit 18 Kernen und 1 TB (3.649 €) betragen die 5-Jahres-Kosten 3.914 €, die Ersparnis 886 € und die Amortisation rund 49 Monate. Das vergleicht nur Kosten: lokale 8B–32B-Modelle sind ChatGPT Plus nicht gleichwertig. Gegenüber einem Desktop mit RTX 4070 (Annahme ab 1.200 €, nicht von uns recherchiert): Laufen beide 24/7 unter LLM-Last, liegen die 5-Jahres-Kosten bei ca. 3.430–3.820 € (Mac) und ca. 3.830–5.140 € oder mehr (Desktop), der Mac ist dann unter diesen Annahmen günstiger. Stehen beide überwiegend im Leerlauf (8 W bzw. 50 W), sind es ca. 3.200 € gegenüber 1.860 €; der Desktop ist dann günstiger, seine 12 GB VRAM fassen aber kein 32B-Modell.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Ist der neue Mac Mini leiser als Alternativen?', a: 'Apple nennt für den Mac Mini 5 dBA im Leerlauf und veröffentlicht keinen Geräuschwert unter Last. PromptQuorum hat die Lautstärke nicht gemessen und nicht mit bestimmten Desktop-PCs verglichen, deren Geräusch von Gehäuse, Kühlern und Lüftereinstellungen abhängt.' },
          { q: 'Kann ich remote auf den Mac Mini zugreifen?', a: 'Ja — SSH über Terminal oder Bildschirmfreigabe (VNC) über Systemeinstellungen → Freigabe → Remote-Verwaltung. Im Heimnetz: ssh nutzer@macmini.local. Für Fernzugriff: erst Tailscale, dann SSH über Tailscale-IP.' },
          { q: 'Was wenn ich höheren Durchsatz benötige?', a: 'Upgrade-Pfad: Apples aktuelles Mac-Studio-Lineup prüfen — höhere Unified-Memory-Obergrenze und mehr GPU-Kerne als der Mac Mini. Für Server-Farmen mehrere Mac Minis verkabeln und mit Nginx lastverteilen.' },
          { q: 'Wie lange hält Mac Mini als 24/7-KI-Server?', a: 'Apple Silicon Macs sind für Dauerbetrieb ausgelegt. Lebensdauer und Ausfallraten hängen im Alltag vom einzelnen Gerät, der Last und der Umgebung ab; PromptQuorum hat für diese Hardware keine Messdaten und nennt daher keine Lebensdauer- oder Ausfallraten-Zahl. Sichern Sie Modelle, Konfiguration und Daten regelmäßig.' },
          { q: 'Kann ich mehrere Nutzer gleichzeitig bedienen?', a: 'Ja. OLLAMA_NUM_PARALLEL=2 (oder höher bei mehr Speicher) setzen, um parallele Anfragen zu verarbeiten. Der 64-GB-M5-Pro dürfte komfortabel 2–3 gleichzeitige Nutzer mit 8B-Modellen bedienen; der 32-GB-M6 bietet weniger Spielraum dafür.' },
          { q: 'Was passiert bei Stromausfall?', a: 'Nach Wiederherstellung startet macOS automatisch, wenn „Nach Stromausfall automatisch starten" in Systemeinstellungen → Energie aktiviert ist. Ollama startet als brew-Dienst. Modelle laden beim ersten Aufruf (5–15 s Verzögerung).' },
          { q: 'Kann ich eine externe GPU hinzufügen?', a: 'Nein. Apple Silicon unterstützt keine externen GPUs für Metal/ML-Beschleunigung. Das Unified-Memory-Konzept ist das Design. Für mehr Leistung Apples aktuelles Mac-Studio-Lineup prüfen.' },
          { q: 'Ist der Mac Mini für den Einsatz über- oder unterdimensioniert?', a: 'Das hängt von der Modellgröße ab. Für einen Stack mit 8B-Modellen ist der M5 Pro mit 64 GB mehr als nötig; ein M6 mit 32 GB sollte genügen (Schätzung). Soll ein Modell der 32B-Klasse neben Whisper, RAG und Sprache laufen, wählen Sie 64 GB. Ein 70B-Q4-Modell (43 GB) passt nur sehr knapp in 64 GB, mit ca. 4–5 tok/s (Schätzung); siehe [die günstigsten Wege zum 70B-Modell](/de/prompt-bites/cheapest-way-to-run-70b-model-locally). Ein Raspberry Pi 5 ist auf sehr kleine Modelle beschränkt.' },
          { q: 'Gibt es einen einfachen "M5"-Mac-Mini?', a: 'Nein. Apples Ankündigung vom 25. August 2026 verwendet den M6-Chip für den Basis-Mac-Mini und den M5-Pro-Chip für die obere Stufe — Apple hat ein einfaches "M5" für die Mac-Mini-Reihe komplett übersprungen.' },
          { q: 'Ist der neue Mac Mini DSGVO-konform für den Betrieb als KI-Server?', a: 'Die lokale Verarbeitung auf dem Mac Mini ohne Cloud-Verbindung kann die Datenschutz-Anforderungen erleichtern, weil für die Inferenz keine Daten an einen externen Anbieter übertragen werden und sich damit die Frage nach einem Auftragsverarbeiter (Art. 28 DSGVO) für diese Ebene oft nicht stellt. Ob Ihr Betrieb insgesamt DSGVO-konform ist, hängt jedoch von Rechtsgrundlage, Zweck, technisch-organisatorischen Maßnahmen und weiteren Faktoren ab. Bei sensiblen Daten (z. B. Gesundheit, Finanzen) kann eine Datenschutz-Folgenabschätzung (Art. 35 DSGVO) erforderlich sein. Zur Absicherung des Servers kann das BSI-IT-Grundschutz-Kompendium als Orientierung dienen. Dies ist keine Rechtsberatung; klären Sie den Einsatz mit Ihrer bzw. Ihrem Datenschutzbeauftragten.' },
          { q: 'Eignet sich der neue Mac Mini als KI-Server für den deutschen Mittelstand?', a: 'Möglicherweise. Für KMU mit 10–200 Mitarbeitern kann der Mac Mini M5 Pro 64 GB (ab 3.099 €, Apple Store Deutschland, Stand 28. November 2026) eine kosteneffiziente Alternative zu Cloud-KI sein; ob der Einsatz datenschutzkonform ist, hängt vom konkreten Betrieb ab (keine Rechtsberatung, Datenschutzbeauftragte einbeziehen). Typische Mittelstandsanwendungen: Dokumentenanalyse (on-premise), interne Wissensdatenbank (RAG), Coding-Assistent für Entwicklungsteams. Die Sicherheitsfunktionen von macOS und Apple Silicon können eine Grundlage bieten, ersetzen aber keine eigene Prüfung gegen die für Ihr Unternehmen geltenden Sicherheitsanforderungen (z. B. BSI-Vorgaben).' },
        ],
      },
      relatedArticles: {
        id: 'related',
        title: 'Verwandte Artikel',
        items: [
          '[Apple Silicon für lokale LLMs: Vollständiger Leitfaden](/de/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs. M5 Max für lokale LLMs: Spezifikationen und Geschwindigkeitsschätzungen](/de/local-llms/m5-pro-max-llm-benchmarks-2026)',
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
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-fr.webp',
    title: 'Mac Mini M6 comme serveur IA local 2026 : LLM, Whisper, RAG, assistant vocal 24/7',
    seoTitle: 'Mac Mini M6 / M5 Pro Serveur IA Local : 24/7',
    intro: 'Apple a annoncé le nouveau Mac Mini le 25 août 2026 : la puce M6 (à partir de 1 049 €, 32 Go de mémoire unifiée max.) et la puce M5 Pro (à partir de 1 999 € avec 24 Go, jusqu\'à 64 Go ; le modèle 64 Go le moins cher coûte 3 099 €). Les deux sont disponibles depuis le 22 septembre 2026. Ce guide couvre la configuration matérielle, l\'installation et l\'analyse coût-bénéfice d\'Ollama, Whisper STT, d\'un pipeline RAG et d\'un assistant vocal sur un serveur IA local discret et permanent. Coût électrique estimé : env. 44–66 €/an.',
    metaDescription: 'Serveur IA local sur le nouveau Mac Mini M6 ou M5 Pro. Estimation : 25–55 W, env. 44–66 €/an d\'électricité. Ollama, Whisper, RAG et assistant vocal.',
    twitterDescription: 'Mac Mini M5 Pro 64 Go : un serveur IA local discret. LLM + Whisper + RAG, env. 44–66 €/an d\'électricité (estimation). Guide complet.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    ctaText: 'Votre serveur Mac Mini IA est opérationnel ? Comparez les réponses de votre Llama ou DeepSeek local avec GPT-4, Claude, Gemini et 22 autres modèles en un seul envoi avec PromptQuorum — vérifiez que votre configuration auto-hébergée délivre une qualité cloud.',
    current_models_mentioned: ['Llama 3.1 8B', 'Ministral 3 8B', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: 'Utilisateurs souhaitant un serveur IA local permanent pour la maison ou le bureau.',
    readTime: '12 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini serveur IA local',
    targetKeywords: ['Mac Mini serveur IA', 'LLM always-on', 'infrastructure IA locale', 'Ollama permanent', 'Mac Mini M6 serveur', 'Mac Mini M5 Pro serveur'],
    leadAnswerBlock: '**Un Mac Mini M5 Pro 64 Go coûte à partir de 3 099 € (CPU 15 cœurs, SSD 512 Go) et 3 649 € avec le CPU 18 cœurs et 1 To (Apple Store France, vérifié le 28 novembre 2026, TTC) ; la base M5 Pro à 1 999 € dispose de 24 Go. Choisissez 64 Go si un modèle de classe 32B doit rester chargé à côté de Whisper, du RAG et d\'un assistant vocal. Si un modèle 8B suffit, un Mac Mini M6 32 Go (1 709 € avec 512 Go) coûte 1 390 € de moins et, d\'après les tailles indiquées dans ce guide, devrait accueillir les mêmes quatre services (estimation non testée). Consommation estimée : 25–55 W en charge LLM, env. 44–66 € par an à 0,25 €/kWh. PromptQuorum n\'a pas mesuré ce matériel.**',
    nextStep: {
      text: 'Prêt à installer Ollama sur votre Mac Mini M6 ou M5 Pro ? Voici le guide d\'installation complet.',
      label: 'Ollama sur Mac — Guide d\'installation 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      fr: {
        question: 'Pourquoi le nouveau Mac Mini est-il un bon serveur IA local ?',
        answer: 'Il est compact, discret au repos (Apple indique 5 dBA) et consomme une puissance estimée à 25–55 W en charge LLM, soit env. 44–66 € d\'électricité par an. Un M5 Pro 64 Go (à partir de 3 099 €) laisse de la place pour un modèle de classe 32B avec Whisper, RAG et assistant vocal. Avec un modèle 8B, un M6 32 Go (1 709 € avec 512 Go) devrait suffire pour les mêmes services (estimation). Disponible depuis le 22 septembre 2026.',
        bullets: [
          'M5 Pro 64 Go : dès 3 099 € (15 cœurs, 512 Go) ; 3 649 € en 18 cœurs et 1 To',
          'M6 : dès 1 049 € (16 Go) ; 32 Go avec 512 Go : 1 709 €',
          'Consommation : 25–55 W attendue (contre 300 W+ PC avec GPU)',
          'Électricité annuelle : estimée à env. 44–66 € à 0,25 €/kWh',
          'Bruit : Apple indique 5 dBA au repos et aucune valeur en charge',
          'API REST accessible depuis tous les appareils du réseau local',
          'Analyse coût-bénéfice : voir la section TCO ci-dessous',
        ],
        updatedDate: '2026-11-28',
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
          'Apple a annoncé le nouveau Mac Mini le 25 août 2026 : le M6 (à partir de 1 049 €, 32 Go de mémoire unifiée max.) et le M5 Pro (à partir de 1 999 € avec 24 Go, jusqu\'à 64 Go). Les deux sont disponibles depuis le 22 septembre 2026. Pour un serveur IA local discret et permanent, le M5 Pro 64 Go (à partir de 3 099 €) est le choix si un modèle de classe 32B doit rester chargé à côté de Whisper, du RAG et d\'un assistant vocal. Consommation estimée en charge LLM : 25–55 W, contre 200–300 W supposés pour un PC avec RTX 4070.',
          'Coût électrique annuel estimé : env. 44–66 € pour le Mac Mini en usage mixte à 8B léger, contre 438–657 € pour un PC avec GPU en pleine charge 24 h/24 (à 0,25 €/kWh). Les profils d\'usage diffèrent : l\'écart n\'est donc pas une économie à conditions égales. La section coûts compare les deux avec la même hypothèse. Ce guide n\'utilise aucun benchmark indépendant ; les chiffres de consommation et de performance sont des estimations basées sur les spécifications publiées par Apple et les générations précédentes de Mac Mini Apple Silicon, pas des résultats mesurés par PromptQuorum.',
        ],
        tableFormat: true,
        columns: ['Propriété', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'Propriété': 'Coût matériel', 'Mac Mini M5 Pro': '64 Go dès 3 099 €', 'Desktop + RTX 4070': 'à partir de 1 200 €', 'Raspberry Pi 5': 'env. 80 €' },
          { 'Propriété': 'Consommation (repos)', 'Mac Mini M5 Pro': '8 W (estimé)', 'Desktop + RTX 4070': '50 W', 'Raspberry Pi 5': '5 W' },
          { 'Propriété': 'Consommation (LLM)', 'Mac Mini M5 Pro': '25–55 W (estimé)', 'Desktop + RTX 4070': '200–300 W (hypothèse)', 'Raspberry Pi 5': 'Impossible' },
          { 'Propriété': 'Électricité annuelle (0,25 €/kWh)', 'Mac Mini M5 Pro': 'env. 44–66 € (usage type, estimé)', 'Desktop + RTX 4070': '438–657 € (pleine charge 24/7)', 'Raspberry Pi 5': 'env. 11 €' },
          { 'Propriété': 'Niveau sonore', 'Mac Mini M5 Pro': '5 dBA au repos (Apple)', 'Desktop + RTX 4070': 'Selon la configuration', 'Raspberry Pi 5': 'Silencieux' },
          { 'Propriété': 'Taille de modèle max.', 'Mac Mini M5 Pro': '32B ; 70B Q4 de justesse', 'Desktop + RTX 4070': 'env. 14B Q4 (12 Go VRAM)', 'Raspberry Pi 5': '1–3B seulement' },
          { 'Propriété': 'Fiabilité 24/7', 'Mac Mini M5 Pro': 'Non testée', 'Desktop + RTX 4070': 'Non testée', 'Raspberry Pi 5': 'Non testée' },
          { 'Propriété': 'Encombrement', 'Mac Mini M5 Pro': '13×13 cm', 'Desktop + RTX 4070': 'Tour complète', 'Raspberry Pi 5': '8×8 cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Recommandation de configuration matérielle',
        content: 'Prenez 64 Go si un modèle de classe 32B doit rester chargé à côté des autres services de ce guide ; le Mac Mini le moins cher dans ce cas coûte 3 099 €. Si votre stack repose sur Llama 3.1 8B, les tailles indiquées dans ce guide (env. 5 Go pour le modèle, 3 Go pour Whisper large-v3, 0,5 Go pour les embeddings, 2 Go pour la base documentaire) totalisent environ 11 Go hors macOS : un M6 32 Go (1 709 € avec 512 Go) devrait suffire. C\'est une estimation, pas un test. La mémoire ne peut pas être augmentée ensuite.',
        tableFormat: true,
        columns: ['Configuration', 'Prix (2026)', 'Mémoire max.', 'Idéal pour', 'Modèles supportés'],
        rows: [
          { 'Configuration': 'Mac Mini M6 (base)', 'Prix (2026)': 'dès 1 049 € ; 32 Go + 512 Go : 1 709 €', 'Mémoire max.': 'jusqu\'à 32 Go', 'Idéal pour': 'Quatre services avec un 8B (estimé)', 'Modèles supportés': '7B–13B Q4' },
          { 'Configuration': 'Mac Mini M5 Pro ★', 'Prix (2026)': '64 Go dès 3 099 €', 'Mémoire max.': 'jusqu\'à 64 Go', 'Idéal pour': 'Classe 32B + Whisper, RAG, vocal', 'Modèles supportés': 'Modèles 32B confortablement' },
        ],
        note: '★ Le choix des 64 Go vaut si un modèle de classe 32B doit être chargé avec Whisper, RAG et la voix ; pour un stack 8B, 32 Go devraient suffire (estimation). Planification du stockage : Llama 3.1 8B Q4 env. 5 Go par modèle, Whisper large-v3 env. 3 Go, modèle d\'embedding env. 0,5 Go, ChromaDB avec 10 000 documents env. 2 Go. Setup 5 modèles typique : 50–80 Go. SSD 512 Go minimum ; 1 To pour les utilisateurs avancés. Prix des versions 64 Go sur l\'Apple Store France, vérifiés le 28 novembre 2026 : 3 099 € (15 cœurs, 512 Go), 3 429 € (15 cœurs, 1 To), 3 649 € (18 cœurs, 1 To).',
        image: '',
        imageCaption: '',
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
        note: 'Sécurité : ne jamais exposer Ollama directement sur internet sans authentification. Ollama n\'a pas d\'authentification intégrée. Utiliser Tailscale, Cloudflare Tunnel avec des règles d\'accès, ou WireGuard VPN.',
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
          'Quatre abonnements ChatGPT Plus représentent ici environ 80 €/mois (960 €/an, hypothèse). Un serveur local partagé peut prendre en charge une partie de ces tâches, mais les modèles 8B locaux n\'équivalent pas à ChatGPT.',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: 'Cas d\'usage 2 : Serveur RAG pour documents privés',
        content: 'Stack : Ollama (Llama 3.1 8B) + nomic-embed-text + ChromaDB. Tout fonctionne sur le Mac Mini, accessible via le réseau local. Cas d\'usage : documents familiaux, contrats, manuels techniques, recettes, dossiers médicaux, articles de recherche. L\'inférence et la recherche s\'exécutent sur le Mac Mini, dans votre propre réseau ; certains outils peuvent tout de même rechercher des mises à jour.',
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
          'Activation par mot de réveil via les appareils clients (Apple HomePod via Home Assistant, ou réseaux de micros sur Raspberry Pi). La latence de bout en bout n\'a pas été mesurée sur ce matériel ; elle dépend des modèles et réglages choisis.',
          'Électricité annuelle estimée : env. 44–66 €. Le traitement vocal s\'exécute sur votre propre Mac (certains outils peuvent tout de même faire des appels réseau, par exemple pour les mises à jour). Ne comptez pas sur des économies face à un assistant cloud pour amortir le matériel.',
        ],
        items: [
          'Configuration détaillée : [Créer un assistant vocal local](/fr/power-local-llm/build-local-voice-assistant-2026)',
        ],
      },
      usecaseCoding: {
        id: 'usecases-coding',
        title: 'Cas d\'usage 4 : Agent de code privé (intégration IDE)',
        content: 'Configurez Continue.dev pour utiliser l\'API du Mac Mini. DeepSeek Coder V2 (16B) tourne via Ollama sur le Mac Mini : l\'inférence du modèle a donc lieu sur votre propre matériel (extensions et éditeurs peuvent encore envoyer de la télémétrie ou chercher des mises à jour ; vérifiez leurs réglages).',
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
          'Pas de frais de modèle par utilisateur (GitHub Copilot Pro est affiché à env. 10 dollars par utilisateur et par mois) ; le matériel et l\'électricité restent payants',
          'L\'inférence s\'exécute sur votre propre matériel, pas sur un service de modèles cloud',
          'Peut fonctionner sans Internet une fois les modèles et extensions installés et configurés pour le hors-ligne',
          'Compatible avec Continue.dev via l\'API locale',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: 'Consommation électrique et performances thermiques (estimées)',
        content: 'PromptQuorum n\'a pas testé ce matériel. Les valeurs par charge ci-dessous sont nos estimations, pas des mesures. À titre de repère, [le tableau de consommation d\'Apple](https://support.apple.com/en-us/103253) indique 4 W au repos et 70 W au maximum pour un Mac Mini M6 (16 Go, 256 Go), et 6 W au repos et 145 W au maximum pour un M5 Pro (64 Go, 8 To) lors d\'un test de calcul intensif : de fortes charges peuvent donc dépasser nos estimations. Coûts calculés à 0,25 €/kWh (hypothèse pour la France).',
        tableFormat: true,
        columns: ['Charge', 'Consommation (estimée)', 'Coût annuel (24/7, 0,25 €/kWh)'],
        rows: [
          { 'Charge': 'Repos', 'Consommation (estimée)': '8 W', 'Coût annuel (24/7, 0,25 €/kWh)': 'env. 18 €/an' },
          { 'Charge': 'Inférence Llama 8B', 'Consommation (estimée)': '25–35 W', 'Coût annuel (24/7, 0,25 €/kWh)': 'env. 66 €/an' },
          { 'Charge': 'Inférence Qwen3 32B', 'Consommation (estimée)': '40–55 W', 'Coût annuel (24/7, 0,25 €/kWh)': 'env. 104 €/an' },
          { 'Charge': 'Charge mixte typique', 'Consommation (estimée)': '15–25 W', 'Coût annuel (24/7, 0,25 €/kWh)': 'env. 44 €/an' },
        ],
        items: [
          'Températures de surface et de puce : non mesurées par PromptQuorum',
          'Vérifiez les températures de votre machine pendant une charge prolongée',
          'Ventilateur et bruit : Apple indique 5 dBA au repos et aucune valeur en charge ; PromptQuorum n\'a pas mesuré le bruit',
          'Bridage thermique en charge prolongée : non testé par PromptQuorum ; consultez des tests indépendants de votre configuration exacte',
          'Ventilation : espace ouvert recommandé — pas dans une armoire fermée',
          'Endurance SSD : vérifiez la valeur d\'endurance de votre configuration ; l\'usure dépend du volume d\'écriture',
        ],
        note: 'Coût électrique annuel estimé en usage mixte à 8B : env. 44–66 €. Ces chiffres sont des estimations, pas des mesures.',
        image: '',
        imageCaption: '',
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
          { 'Année': 'Année 1', 'Mac Mini Serveur IA': '3 099 € matériel + 44 € électricité = 3 143 €', '4× ChatGPT Plus': '960 €', 'Différence': '–2 183 € (Mac plus cher en A1)' },
          { 'Année': 'Année 2', 'Mac Mini Serveur IA': '44 € (électricité seule)', '4× ChatGPT Plus': '960 €', 'Différence': '+916 € économisés' },
          { 'Année': 'Année 3', 'Mac Mini Serveur IA': '44 €', '4× ChatGPT Plus': '960 €', 'Différence': '+916 € économisés' },
          { 'Année': 'Année 4', 'Mac Mini Serveur IA': '44 €', '4× ChatGPT Plus': '960 €', 'Différence': '+916 € économisés' },
          { 'Année': 'Année 5', 'Mac Mini Serveur IA': '44 €', '4× ChatGPT Plus': '960 €', 'Différence': '+916 € économisés' },
          { 'Année': 'Total 5 ans', 'Mac Mini Serveur IA': '3 319 €', '4× ChatGPT Plus': '4 800 €', 'Différence': '+1 481 € économisés' },
        ],
        note: 'Hypothèses : 960 €/an pour 4× ChatGPT Plus (20 €/mois chacun ; vérifiez les tarifs actuels), 44 €/an d\'électricité pour le Mac (estimation à 0,25 €/kWh) et 3 099 € pour le Mac Mini 64 Go le moins cher (15 cœurs, 512 Go ; Apple Store France, vérifié le 28 novembre 2026). Le seuil de rentabilité cumulé tombe en année 4, après environ 41 mois. Avec le modèle 18 cœurs et 1 To (3 649 €), le total sur 5 ans est de 3 869 €, l\'économie de 931 € et la rentabilité vers 48 mois. Seuls les coûts sont comparés : les modèles locaux 8B–32B n\'équivalent pas à ChatGPT Plus. Face à un PC avec RTX 4070 (supposé à partir de 1 200 €, prix non vérifié par nous) : en charge LLM 24 h/24 pour les deux, les totaux sur 5 ans sont d\'env. 3 370–3 700 € (Mac) et 3 390–4 490 € ou plus (PC) ; ils se recoupent, avec un avantage possible au Mac. Si les deux restent surtout au repos (8 W contre 50 W), on obtient env. 3 190 € contre 1 750 € : le PC est alors moins cher, mais ses 12 Go de VRAM ne contiennent pas un modèle 32B.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Le nouveau Mac Mini est-il plus silencieux que les alternatives ?', a: 'Apple indique 5 dBA au repos pour le Mac Mini et ne publie aucune valeur de bruit en charge. PromptQuorum n\'a effectué aucune mesure et ne l\'a pas comparé à des PC précis, dont le bruit dépend du boîtier, des refroidisseurs et des réglages de ventilation.' },
          { q: 'Puis-je accéder au Mac Mini à distance ?', a: 'Oui — SSH via terminal, ou Partage d\'écran (VNC) via Réglages Système → Partage → Gestion à distance. Sur le réseau local : ssh utilisateur@macmini.local. Pour l\'accès distant : utiliser Tailscale d\'abord, puis SSH via l\'IP Tailscale.' },
          { q: 'Que faire si j\'ai besoin d\'un débit plus élevé ?', a: 'Chemin de montée en gamme : consulter la gamme Mac Studio actuelle d\'Apple pour une limite de mémoire unifiée plus élevée et plus de cœurs GPU que le Mac Mini. Pour des fermes de serveurs, mettre plusieurs Mac Mini en rack et répartir la charge avec Nginx.' },
          { q: 'Combien de temps dure le Mac Mini comme serveur IA 24/7 ?', a: 'Les Mac Apple Silicon sont conçus pour un fonctionnement continu. La durée de vie et les taux de défaillance réels dépendent de chaque appareil, de la charge et de l\'environnement ; PromptQuorum ne dispose d\'aucune mesure pour ce matériel et ne donne donc aucun chiffre de durée de vie ou de défaillance. Sauvegardez régulièrement vos modèles, votre configuration et vos données.' },
          { q: 'Puis-je servir plusieurs utilisateurs simultanément ?', a: 'Oui. Configurer OLLAMA_NUM_PARALLEL=2 (ou plus avec plus de mémoire) pour gérer les requêtes parallèles. Le M5 Pro 64 Go devrait gérer confortablement 2–3 utilisateurs simultanés sur des modèles 8B ; le M6 32 Go offre moins de marge pour cela.' },
          { q: 'Que se passe-t-il en cas de coupure de courant ?', a: 'Après le rétablissement, macOS démarre automatiquement si « Démarrer après une coupure de courant » est activé dans Réglages Système → Énergie. Ollama démarre en tant que service brew. Les modèles se rechargent à la première requête (délai de 5–15 s).' },
          { q: 'Peut-on ajouter un GPU externe ?', a: 'Non. Apple Silicon ne supporte pas les GPU externes pour l\'accélération Metal/ML. L\'architecture mémoire unifiée est la conception même de la puce. Pour plus de vitesse, consulter la gamme Mac Studio actuelle d\'Apple.' },
          { q: 'Le Mac Mini est-il surdimensionné ou sous-dimensionné pour un serveur IA ?', a: 'Cela dépend de la taille des modèles. Pour un stack à base de modèles 8B, le M5 Pro 64 Go dépasse le besoin ; un M6 32 Go devrait suffire (estimation). Pour un modèle de classe 32B avec Whisper, RAG et la voix, prenez 64 Go. Un modèle 70B Q4 (43 Go) ne tient que de justesse dans 64 Go, à environ 4–5 tok/s (estimation) ; voir [les moyens les moins chers de faire tourner un modèle 70B](/fr/prompt-bites/cheapest-way-to-run-70b-model-locally). Un Raspberry Pi 5 se limite à de très petits modèles.' },
          { q: 'Existe-t-il un simple Mac Mini "M5" ?', a: 'Non. L\'annonce d\'Apple du 25 août 2026 utilise la puce M6 pour le Mac Mini de base et la puce M5 Pro pour le palier supérieur — Apple a entièrement sauté un simple « M5 » pour la gamme Mac Mini.' },
        ],
      },
      relatedArticles: {
        id: 'related',
        title: 'Articles associés',
        items: [
          '[Apple Silicon pour les LLM locaux : guide complet](/fr/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max pour les LLM locaux : caractéristiques et vitesses estimées](/fr/local-llms/m5-pro-max-llm-benchmarks-2026)',
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
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-ja.webp',
    title: 'Mac Mini M6をローカルAIサーバーとして活用 2026：LLM・Whisper・RAG・音声アシスタント常時稼働',
    seoTitle: 'Mac Mini M6/M5 Pro：24/7 AIサーバー',
    intro: 'Appleは2026年8月25日、新型Mac Miniを発表しました。M6チップ（¥149,800から、最大32GBユニファイドメモリ）とM5 Proチップ（24GBで¥299,800から、最大64GB。64GBモデルは最安で¥479,800）です。どちらも2026年9月22日から発売されています。本ガイドでは、静かな常時稼働のローカルAIサーバーでOllama LLM・Whisper STT・RAGパイプライン・音声アシスタントを動かすためのハードウェア構成、セットアップ、費用対効果を解説します。推定電気代は年間約5,400〜8,100円です。',
    metaDescription: '新型Mac Mini M6・M5 ProでローカルAIサーバーを構築。推定25～55W、年間電気代は約5,400～8,100円（推定値）。Ollama、Whisper、RAG、音声アシスタントの設定と5年間の費用比較。',
    twitterDescription: 'Mac Mini M5 Pro 64GB：静かなローカルAIサーバー。LLM+Whisper+RAGを常時稼働、年間電気代は約5,400〜8,100円（推定）。完全ガイド。',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    ctaText: 'Mac Mini AIサーバーを構築しましたか？PromptQuorumで、ローカルのLlamaまたはDeepSeekの回答をGPT-4、Claude、Geminiなど22のモデルと一括比較して、自己ホスト環境がクラウド品質を実現しているか検証しましょう。',
    current_models_mentioned: ['Llama 3.1 8B', 'Ministral 3 8B', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: '家庭やオフィスで常時稼働のローカルAIサーバーを構築したいユーザー。',
    readTime: '12分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini ローカルAIサーバー',
    targetKeywords: ['Mac Mini AIサーバー', '常時稼働LLM', 'ローカルAIインフラ', 'Ollama常時稼働', 'Mac Mini M6 サーバー', 'Mac Mini M5 Pro サーバー'],
    leadAnswerBlock: '**64GBのMac Mini M5 Proは¥479,800から（15コアCPU・512GB SSD）、18コアCPU・1TBは¥569,800です（Apple日本のオンラインストア、2026年11月28日確認、税込）。¥299,800のM5 Pro基本構成は24GBです。32Bクラスのモデルを、Whisper・RAG・音声アシスタントと同時に常駐させたい場合は64GBを選んでください。8Bモデルで十分なら、32GBのMac Mini M6（512GBで¥257,800）は¥222,000安く、本ガイドのサイズ目安では同じ4サービスが収まる見込みです（推定、未テスト）。消費電力はLLM負荷時25〜55W、電気代は31円/kWhで年間約5,400〜8,100円と推定します。PromptQuorumはこのハードウェアを計測していません。**',
    nextStep: {
      text: 'Mac Mini M6またはM5 ProにOllamaをセットアップする準備はできましたか？完全インストールガイドをご紹介します。',
      label: 'Mac上のOllama — セットアップガイド2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      ja: {
        question: 'なぜ新型Mac Miniはローカルの AIサーバーに向いているのか？',
        answer: '小型で、アイドル時は静かです（Appleの公表値は5dBA）。LLM負荷時の消費電力は推定25〜55W、年間電気代は約5,400〜8,100円です。64GBのM5 Pro（¥479,800から）なら、32Bクラスのモデルに加えてWhisper・RAG・音声アシスタントを載せる余裕があります。8Bモデルなら、32GBのM6（512GBで¥257,800）で同じサービスが足りる見込みです（推定）。2026年9月22日から発売中。',
        bullets: [
          'M5 Pro 64GB：¥479,800から（15コア・512GB）。18コア・1TBは¥569,800',
          'M6：¥149,800から（16GB）。32GB・512GBは¥257,800',
          '消費電力：25〜55W見込み（GPU搭載デスクトップの300W以上に対して）',
          '年間電気代：推定約5,400〜8,100円（31円/kWh）',
          '騒音：Appleの公表値はアイドル時5dBA。負荷時の値は非公表',
          'REST APIでLAN内の全デバイスからアクセス可能',
          '費用対効果分析：下記TCOセクションを参照',
        ],
        updatedDate: '2026-11-28',
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
          'Appleは2026年8月25日、新型Mac Miniを発表しました。M6（¥149,800から、最大32GBユニファイドメモリ）とM5 Pro（24GBで¥299,800から、最大64GB）です。どちらも2026年9月22日から発売されています。静かな常時稼働のローカルAIサーバーで、32Bクラスのモデルを Whisper・RAG・音声アシスタントと一緒に常駐させたいなら、64GBのM5 Pro（¥479,800から）が選択肢です。LLM負荷時の消費電力は推定25〜55Wで、RTX 4070搭載デスクトップは200〜300Wと仮定しています。',
          '推定年間電気代は、混合利用から軽い8B利用のMac Miniで約5,400〜8,100円、24時間フル負荷のGPUデスクトップで約54,000〜81,000円です（31円/kWh）。使い方の前提が異なるため、この差を同条件の節約額と考えないでください。費用の章では同じ前提で比較します。本ガイドは独立したベンチマークを使用していません。消費電力・性能の数値は、Appleの公表仕様と過去のApple Silicon Mac Mini世代に基づく推定であり、PromptQuorumの計測結果ではありません。',
        ],
        tableFormat: true,
        columns: ['項目', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { '項目': 'ハードウェアコスト', 'Mac Mini M5 Pro': '64GBは¥479,800から', 'Desktop + RTX 4070': '¥180,000以上', 'Raspberry Pi 5': '約¥12,000' },
          { '項目': 'アイドル消費電力', 'Mac Mini M5 Pro': '8W（推定）', 'Desktop + RTX 4070': '50W', 'Raspberry Pi 5': '5W' },
          { '項目': 'LLM負荷時消費電力', 'Mac Mini M5 Pro': '25〜55W（推定）', 'Desktop + RTX 4070': '200〜300W（仮定）', 'Raspberry Pi 5': '不可能' },
          { '項目': '年間電気代（31円/kWh）', 'Mac Mini M5 Pro': '約5,400〜8,100円（通常利用・推定）', 'Desktop + RTX 4070': '約54,000〜81,000円（24時間フル負荷）', 'Raspberry Pi 5': '約1,400円' },
          { '項目': '騒音レベル', 'Mac Mini M5 Pro': 'アイドル時5dBA（Apple）', 'Desktop + RTX 4070': '構成による', 'Raspberry Pi 5': '静音' },
          { '項目': '最大モデルサイズ', 'Mac Mini M5 Pro': '32B。70B Q4はぎりぎり', 'Desktop + RTX 4070': '14B Q4程度（VRAM 12GB）', 'Raspberry Pi 5': '1〜3Bのみ' },
          { '項目': '常時稼働信頼性', 'Mac Mini M5 Pro': '未テスト', 'Desktop + RTX 4070': '未テスト', 'Raspberry Pi 5': '未テスト' },
          { '項目': '設置面積', 'Mac Mini M5 Pro': '13×13cm', 'Desktop + RTX 4070': 'フルタワー', 'Raspberry Pi 5': '8×8cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'ハードウェア構成の推奨',
        content: '32Bクラスのモデルを本ガイドの他のサービスと同時に常駐させるなら64GBを選んでください。その場合の最安のMac Miniは¥479,800です。Llama 3.1 8Bで構成する場合、本ガイドのサイズ目安（モデル約5GB、Whisper large-v3約3GB、埋め込み約0.5GB、文書データベース約2GB）はmacOSを除いて合計約11GBのため、32GBのM6（512GBで¥257,800）で足りる見込みです。これは推定であり、テスト結果ではありません。メモリは後から増設できません。',
        tableFormat: true,
        columns: ['構成', '価格（2026年）', '最大メモリ', '最適な用途', '対応モデル'],
        rows: [
          { '構成': 'Mac Mini M6（ベース）', '価格（2026年）': '¥149,800から。32GB・512GBは¥257,800', '最大メモリ': '最大32GB', '最適な用途': '8Bモデルで4サービス（推定）', '対応モデル': '7B〜13B Q4' },
          { '構成': 'Mac Mini M5 Pro ★', '価格（2026年）': '64GBは¥479,800から', '最大メモリ': '最大64GB', '最適な用途': '32Bクラス＋Whisper・RAG・音声', '対応モデル': '32Bモデルを快適に実行' },
        ],
        note: '★64GBの推奨は、32BクラスのモデルをWhisper・RAG・音声と同時に常駐させる場合のものです。8B構成なら32GBで足りる見込みです（推定）。ストレージ計画：Llama 3.1 8B Q4は約5GB/モデル、Whisper large-v3は約3GB、埋め込みモデルは約0.5GB、ChromaDB（1万文書）は約2GB。典型的な5モデル構成：50〜80GB使用。最低512GB SSD推奨、パワーユーザーには1TB。Apple日本の64GBモデル価格（2026年11月28日確認、税込）：¥479,800（15コア・512GB）、¥533,800（15コア・1TB）、¥569,800（18コア・1TB）。',
        image: '',
        imageCaption: '',
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
          'ChatGPT Plus 4名分は、本試算では月額約¥12,000（年額約¥144,000、仮定）です。共有のローカルサーバーはその一部の作業を引き受けられますが、ローカルの8BモデルはChatGPTと同等ではありません。',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: 'ユースケース2：プライベートRAGドキュメントQ&Aサーバー',
        content: 'スタック：Ollama（Llama 3.1 8B）+ nomic-embed-text + ChromaDB。すべてMac Mini上で動作し、LAN経由でアクセス可能。用途：家族の書類、法的契約書、技術マニュアル、レシピライブラリ、医療記録、研究論文。推論と検索はMac Mini上で自分のネットワーク内で実行されます。ただし、個々のツールがアップデートを確認する場合があります。',
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
          'クライアントデバイス（Home Assistant経由のApple HomePod、または各部屋のRaspberry Piマイクアレイ）からウェイクワードで起動します。このハードウェアでのエンドツーエンド遅延は計測していません。選ぶモデルと設定によって変わります。',
          '推定年間電気代：約5,400〜8,100円。音声処理は自分のMac上で実行されます（個々のツールがアップデート確認などのネットワーク通信を行う場合があります）。クラウドアシスタントとの差額でハードウェア代を回収できるとは考えないでください。',
        ],
        items: [
          '詳細なセットアップ：[ローカル音声アシスタントの構築](/ja/power-local-llm/build-local-voice-assistant-2026)',
        ],
      },
      usecaseCoding: {
        id: 'usecases-coding',
        title: 'ユースケース4：プライベートコーディングエージェント（IDE連携）',
        content: 'Continue.devをMac MiniのAPIを使うように設定します。DeepSeek Coder V2（16B）はMac Mini上のOllamaで動くため、モデルの推論は自分のハードウェア上で行われます（拡張機能やエディタがテレメトリ送信や更新確認を行う場合があるので、設定を確認してください）。',
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
          'ユーザーごとのモデル利用料は不要（GitHub Copilot Proの表示価格は1人あたり月約10米ドル）。ハードウェアと電気代はかかります',
          '推論はクラウドのモデルサービスではなく自分のハードウェア上で実行',
          'モデルと拡張機能をインストールしてオフライン用に設定すれば、インターネットなしでも動作できます',
          'ローカルAPI経由でContinue.devと連携可能',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: '消費電力と熱性能（推定）',
        content: 'PromptQuorumはこのハードウェアをテストしていません。以下のワークロード別の数値は推定であり、実測ではありません。参考として、[Appleの消費電力表](https://support.apple.com/en-us/103253)では、M6のMac Mini（16GB・256GB）がアイドル4W・最大70W、M5 Pro（64GB・8TB）がアイドル6W・計算負荷の高いテストで最大145Wです。高負荷時は推定より多く消費する可能性があります。電気代は31円/kWh（仮定）で計算しています。',
        tableFormat: true,
        columns: ['ワークロード', '消費電力（推定）', '年間電気代（24/7、31円/kWh）'],
        rows: [
          { 'ワークロード': 'アイドル', '消費電力（推定）': '8W', '年間電気代（24/7、31円/kWh）': '約2,200円/年' },
          { 'ワークロード': 'Llama 8B推論', '消費電力（推定）': '25〜35W', '年間電気代（24/7、31円/kWh）': '約8,100円/年' },
          { 'ワークロード': 'Qwen3 32B推論', '消費電力（推定）': '40〜55W', '年間電気代（24/7、31円/kWh）': '約12,900円/年' },
          { 'ワークロード': '混合典型ワークロード', '消費電力（推定）': '15〜25W', '年間電気代（24/7、31円/kWh）': '約5,400円/年' },
        ],
        items: [
          '表面とチップの温度：PromptQuorumは計測していません',
          '長時間の負荷をかけて、お使いの本体の温度を確認してください',
          'ファンと騒音：Appleの公表値はアイドル時5dBAで、負荷時の値はありません。PromptQuorumは騒音を測定していません',
          '持続負荷時のサーマルスロットリング：PromptQuorumは未テストです。お使いの構成の独立したテストを確認してください',
          'ベンチレーション：開放されたスペース推奨 — 閉じた収納は不可',
          'SSD耐久性：お使いの構成の耐久性定格を確認してください。摩耗は書き込み量に依存します',
        ],
        note: '混合利用から8B利用の推定年間電気代：約5,400〜8,100円。これらは推定値であり、実測値ではありません。',
        image: '',
        imageCaption: '',
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
          { '年': '1年目', 'Mac Mini AIサーバー': '¥479,800 ハードウェア + ¥5,400 電気 = ¥485,200', '4× ChatGPT Plus': '¥144,000', '差額': '−¥341,200（Macが高い）' },
          { '年': '2年目', 'Mac Mini AIサーバー': '¥5,400（電気のみ）', '4× ChatGPT Plus': '¥144,000', '差額': '+¥138,600 節約' },
          { '年': '3年目', 'Mac Mini AIサーバー': '¥5,400', '4× ChatGPT Plus': '¥144,000', '差額': '+¥138,600 節約' },
          { '年': '4年目', 'Mac Mini AIサーバー': '¥5,400', '4× ChatGPT Plus': '¥144,000', '差額': '+¥138,600 節約' },
          { '年': '5年目', 'Mac Mini AIサーバー': '¥5,400', '4× ChatGPT Plus': '¥144,000', '差額': '+¥138,600 節約' },
          { '年': '5年間合計', 'Mac Mini AIサーバー': '¥506,800', '4× ChatGPT Plus': '¥720,000', '差額': '+¥213,200 節約' },
        ],
        note: '前提：ChatGPT Plus 4名分で年間¥144,000（1人月額¥3,000と仮定。最新価格を確認してください）、Macの電気代は年間¥5,400（推定）、ハードウェアは64GBの最安モデル¥479,800（15コア・512GB、Apple日本、2026年11月28日確認、税込）。累計では4年目、約42か月で回収します。18コア・1TBモデル（¥569,800）では5年間の合計が¥596,800、節約額は¥123,200、回収は約50か月です。これは費用のみの比較で、ローカルの8B〜32BモデルはChatGPT Plusと同等ではありません。RTX 4070搭載デスクトップ（¥180,000以上と仮定。当サイトでは価格を調査していません）との比較：両方を24時間LLM負荷で動かすと、5年間の合計はMacが約51万〜55万円、デスクトップが約45万〜59万円以上で範囲が重なり、どちらが安いとは言えません。両方がほぼアイドル（8Wと50W）なら約49万円対約25万円でデスクトップが安くなりますが、VRAM 12GBには32Bモデルが収まりません。',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '新型Mac Miniは代替品より静かですか？', a: 'AppleはMac Miniのアイドル時の騒音を5dBAと公表していますが、負荷時の値は公表していません。PromptQuorumは騒音を測定しておらず、特定のデスクトップPCとの比較もしていません。PCの騒音はケース、冷却装置、ファン設定によって変わります。' },
          { q: 'Mac Miniにリモートアクセスできますか？', a: 'はい。SSH（ターミナル経由）またはシステム設定 → 共有 → リモートマネジメントでの画面共有（VNC）が使えます。LAN内：ssh ユーザー@macmini.local。リモートアクセス：まずTailscaleを設定し、Tailscale IP経由でSSH。' },
          { q: '高いスループットが必要な場合は？', a: 'アップグレード：Appleの現行Mac Studioラインナップを確認してください。Mac Miniより高いユニファイドメモリ上限とより多くのGPUコアを備えています。サーバーファームには複数のMac Miniをラックマウントし、Nginxで負荷分散してください。' },
          { q: 'Mac MiniはAIサーバーとして24/7稼働でどれくらい持ちますか？', a: 'Apple SiliconのMacは持続稼働向けに設計されています。実際の寿命や故障率は個々の機器、負荷、環境によって異なります。PromptQuorumにはこのハードウェアの計測データがないため、寿命や故障率の数値は示しません。モデル、設定、データは定期的にバックアップしてください。' },
          { q: '複数ユーザーを同時に対応できますか？', a: 'はい。OLLAMA_NUM_PARALLEL=2（またはメモリに応じてより高く）を設定して並行リクエストを処理します。64GBのM5 Proは8Bモデルで2〜3人の同時ユーザーを快適に処理できる見込みです。32GBのM6ではその余裕は少なくなります。' },
          { q: '停電が起きたらどうなりますか？', a: '電力回復後、システム設定 → エネルギーで「停電後に自動的に起動」を有効にしていればmacOSは自動起動します。Ollamaはbrewサービスとして起動。モデルは最初のリクエスト時に読み込まれます（再起動後の最初のレスポンスに5〜15秒の遅延）。' },
          { q: 'Mac Miniに外部GPUを追加できますか？', a: 'いいえ。Apple SiliconはMetal/ML加速用の外部GPUをサポートしていません。ユニファイドメモリアーキテクチャがその設計です。高速化にはAppleの現行Mac Studioラインナップを確認してください。' },
          { q: 'Mac MiniはAIサーバーとして過剰スペックですか、それとも不足していますか？', a: 'モデルの大きさによります。8Bモデル中心の構成なら64GBのM5 Proは余裕が大きすぎ、32GBのM6で足りる見込みです（推定）。32BクラスのモデルをWhisper・RAG・音声と併用するなら64GBを選んでください。70B Q4モデル（43GB）は64GBにぎりぎり収まる程度で、約4〜5 tok/s（推定）です。[70Bモデルを安く動かす方法](/ja/prompt-bites/cheapest-way-to-run-70b-model-locally)も参照してください。Raspberry Pi 5はごく小さいモデルに限られます。' },
          { q: '単なる「M5」搭載のMac Miniは存在しますか？', a: 'いいえ。Appleの2026年8月25日の発表では、ベースのMac MiniにM6チップ、上位モデルにM5 Proチップが採用されており、Mac MiniラインナップにはシンプルなM5チップは一切存在しません。' },
        ],
      },
      relatedArticles: {
        id: 'related',
        title: '関連記事',
        items: [
          '[Apple Siliconでのローカルモデル活用：完全ガイド](/ja/local-llms/apple-silicon-local-llm-guide-2026)',
          '[ローカルLLM向けM5 Pro対M5 Max：仕様と推定速度](/ja/local-llms/m5-pro-max-llm-benchmarks-2026)',
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
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-zh.webp',
    title: 'Mac Mini M6作为本地AI服务器 2026：全天候LLM、Whisper、RAG与语音助手',
    seoTitle: 'Mac Mini M6/M5 Pro：24/7 AI服务器',
    intro: 'Apple已于2026年8月25日发布新款Mac Mini：M6芯片（起售价$899，统一内存最高32GB）和M5 Pro芯片（24GB版起售价$1,699，最高64GB；最便宜的64GB机型为$2,699）。两者均已于2026年9月22日上市。本指南介绍如何在一台安静、全天候运行的本地AI服务器上运行Ollama LLM、Whisper STT、RAG管道与语音助手，包括硬件配置、设置方法和成本效益分析。预估年度电费：$26–39。',
    metaDescription: '在新款Mac Mini M6或M5 Pro上配置本地AI服务器。预估功耗25～55W，年电费约$26–39（估算值）。涵盖Ollama、Whisper、RAG、语音助手的设置与5年成本比较。',
    twitterDescription: 'Mac Mini M5 Pro 64GB：安静的本地AI服务器。LLM+Whisper+RAG全天候运行，预估年电费约$26–39（估算）。完整指南。',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    ctaText: 'Mac Mini AI服务器已搭建完成？用PromptQuorum将您本地Llama或DeepSeek的回答与GPT-4、Claude、Gemini等22个模型一键对比——验证您的自托管方案是否达到云服务品质。',
    current_models_mentioned: ['Llama 3.1 8B', 'Ministral 3 8B', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: '希望在家庭或办公室搭建全天候本地AI服务器的用户。',
    readTime: '阅读约12分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini本地AI服务器',
    targetKeywords: ['Mac Mini AI服务器', '全天候LLM', '本地AI基础设施', 'Ollama常驻', 'Mac Mini M6服务器', 'Mac Mini M5 Pro服务器'],
    leadAnswerBlock: '**64GB的Mac Mini M5 Pro起售价$2,699（15核CPU，512GB SSD），18核CPU加1TB版本为$3,199（Apple美国在线商店，2026年11月28日核对，不含税）；$1,699的M5 Pro基础版只有24GB。如果希望32B级模型与Whisper、RAG和语音助手同时常驻内存，请选64GB。如果8B模型就够用，32GB的Mac Mini M6（含512GB为$1,499）便宜$1,200，按本指南给出的模型大小估算，应能容纳同样的四项服务（估算，未经测试）。LLM负载下功耗估计25–55W，年电费约$26–39。PromptQuorum未实测过这款硬件。**',
    nextStep: {
      text: '准备好在Mac Mini M6或M5 Pro上设置Ollama了吗？这是完整的安装指南。',
      label: 'Mac上的Ollama — 设置指南2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      zh: {
        question: '为什么新款Mac Mini适合作为本地AI服务器？',
        answer: '它体积小，待机时安静（Apple标称5 dBA），LLM负载下功耗估计25–55W，年电费约$26–39。64GB的M5 Pro（$2,699起）可容纳32B级模型以及Whisper、RAG和语音助手。如果使用8B模型，32GB的M6（含512GB为$1,499）应足以运行同样的服务（估算）。2026年9月22日起已上市。',
        bullets: [
          'M5 Pro 64GB：$2,699起（15核，512GB）；18核加1TB为$3,199',
          'M6：$899起（16GB）；32GB加512GB为$1,499',
          '功耗：25–55W（相比GPU台式机300W以上）',
          '年电费：预估$26–39（相比GPU的$263–394，按$0.15/kWh）',
          '噪音：Apple标称待机5 dBA，未公布负载下数值',
          'REST API可供LAN内所有设备访问',
          '成本效益分析：见下方TCO部分',
        ],
        updatedDate: '2026-11-28',
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
          'Apple已于2026年8月25日发布新款Mac Mini：M6（起售价$899，统一内存最高32GB）和M5 Pro（24GB版起售价$1,699，最高64GB）。两者均已于2026年9月22日上市。作为安静的全天候本地AI服务器，如果希望32B级模型与Whisper、RAG和语音助手同时常驻，可选64GB的M5 Pro（$2,699起）。LLM负载下功耗估计25–55W；RTX 4070台式机按200–300W假设。',
          'Mac Mini在混合到轻度8B使用下，年电费约$26–39；GPU台式机全天24小时满载则为$263–394（按$0.15/kWh）。两者使用强度不同，因此不能把差额当作同等条件下的节省。成本章节按相同假设比较两者。本指南未使用独立基准测试数据；功耗与性能数据是基于Apple公布规格和以往Apple Silicon Mac Mini世代的估算，并非PromptQuorum实测结果。',
        ],
        tableFormat: true,
        columns: ['属性', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { '属性': '硬件成本', 'Mac Mini M5 Pro': '64GB版$2,699起', 'Desktop + RTX 4070': '$1,200起', 'Raspberry Pi 5': '$80' },
          { '属性': '待机功耗', 'Mac Mini M5 Pro': '8W（估算）', 'Desktop + RTX 4070': '50W', 'Raspberry Pi 5': '5W' },
          { '属性': 'LLM负载功耗', 'Mac Mini M5 Pro': '25–55W（估算）', 'Desktop + RTX 4070': '200–300W（假设）', 'Raspberry Pi 5': '无法运行' },
          { '属性': '年度电费（$0.15/kWh）', 'Mac Mini M5 Pro': '$26–39（常规使用，估算）', 'Desktop + RTX 4070': '$263–394（全天满载）', 'Raspberry Pi 5': '约$7' },
          { '属性': '噪音水平', 'Mac Mini M5 Pro': '待机5 dBA（Apple）', 'Desktop + RTX 4070': '取决于配置', 'Raspberry Pi 5': '静音' },
          { '属性': '最大模型尺寸', 'Mac Mini M5 Pro': '32B；70B Q4仅勉强', 'Desktop + RTX 4070': '约14B Q4（12GB显存）', 'Raspberry Pi 5': '仅1–3B' },
          { '属性': '全天候可靠性', 'Mac Mini M5 Pro': '未测试', 'Desktop + RTX 4070': '未测试', 'Raspberry Pi 5': '未测试' },
          { '属性': '占地面积', 'Mac Mini M5 Pro': '13×13cm', 'Desktop + RTX 4070': '全塔机箱', 'Raspberry Pi 5': '8×8cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: '硬件配置推荐',
        content: '如果要让32B级模型与本指南中的其他服务同时常驻，请选64GB；满足这一条件的最便宜Mac Mini为$2,699。如果整套服务基于Llama 3.1 8B，按本指南的大小数据（模型约5GB、Whisper large-v3约3GB、嵌入模型约0.5GB、文档数据库约2GB），不计macOS合计约11GB，因此32GB的M6（含512GB为$1,499）应该够用。这是估算，不是测试结果。内存之后无法升级。',
        tableFormat: true,
        columns: ['配置', '价格（2026年）', '内存上限', '适用场景', '支持模型'],
        rows: [
          { '配置': 'Mac Mini M6（基础版）', '价格（2026年）': '$899起；32GB加512GB为$1,499', '内存上限': '最高32GB', '适用场景': '8B模型运行四项服务（估算）', '支持模型': '7B–13B Q4' },
          { '配置': 'Mac Mini M5 Pro ★', '价格（2026年）': '64GB版$2,699起', '内存上限': '最高64GB', '适用场景': '32B级模型加Whisper、RAG、语音', '支持模型': '32B模型轻松运行' },
        ],
        note: '★选64GB的前提是需要32B级模型与Whisper、RAG和语音同时常驻；以8B为主的组合，32GB应该够用（估算）。存储规划：Llama 3.1 8B Q4约5GB/模型，Whisper large-v3约3GB，嵌入模型约0.5GB，含1万文档的ChromaDB约2GB。典型5模型配置：占用50–80GB。最低推荐512GB SSD；高级用户选1TB。Apple美国在线商店64GB机型价格（2026年11月28日核对，不含税）：$2,699（15核，512GB）、$2,999（15核，1TB）、$2,899（18核，512GB）、$3,199（18核，1TB）。',
        image: '',
        imageCaption: '',
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
          '四份ChatGPT Plus订阅约$80/月（$960/年）。共享的本地服务器可以分担其中部分任务，但本地8B模型并不等同于ChatGPT。',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: '场景二：私有RAG文档问答服务器',
        content: '技术栈：Ollama（Llama 3.1 8B）+ nomic-embed-text + ChromaDB。全部运行在Mac Mini上，通过LAN访问。用途：家庭文档、法律合同、技术手册、食谱库、医疗记录、研究论文。推理和搜索在你自己网络内的Mac Mini上运行；个别工具仍可能检查更新。',
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
          '通过客户端设备（经Home Assistant的Apple HomePod，或各房间的Raspberry Pi麦克风阵列）用唤醒词触发。本硬件的端到端延迟未经实测，取决于所选模型和设置。',
          '预估年电费约$26–39。语音处理在你自己的Mac上运行（个别工具仍可能进行联网请求，例如检查更新）。不要指望相对云端助手的电费差额能收回硬件成本。',
        ],
        items: [
          '详细设置指南：[构建本地语音助手](/zh/power-local-llm/build-local-voice-assistant-2026)',
        ],
      },
      usecaseCoding: {
        id: 'usecases-coding',
        title: '场景四：私有编程助手（IDE集成）',
        content: '将Continue.dev配置为使用Mac Mini的API。DeepSeek Coder V2（16B）通过Mac Mini上的Ollama运行，因此模型推理在你自己的硬件上进行（扩展和编辑器仍可能发送遥测或检查更新，请检查它们的设置）。',
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
          '无需按用户支付模型费用（GitHub Copilot Pro标价约每用户$10/月）；硬件和电费仍需支出',
          '推理在你自己的硬件上运行，而非云端模型服务',
          '在模型和扩展安装完毕并按离线方式设置后，可在无网络时使用',
          '可通过本地API与Continue.dev配合使用',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: '功耗与散热性能（估算值）',
        content: 'PromptQuorum未测试过这款硬件。下表各工作负载数值是我们的估算，并非实测。作为参考，[Apple的功耗表](https://support.apple.com/en-us/103253)显示：M6 Mac Mini（16GB、256GB）待机4W、最高70W；M5 Pro Mac Mini（64GB、8TB）待机6W，计算密集型测试下最高145W。因此高负载时功耗可能超过我们的估算。电费按$0.15/kWh计算。',
        tableFormat: true,
        columns: ['工作负载', '功耗（估算）', '年度成本（24/7，$0.15/kWh）'],
        rows: [
          { '工作负载': '待机', '功耗（估算）': '8W', '年度成本（24/7，$0.15/kWh）': '约$10/年' },
          { '工作负载': 'Llama 8B推理', '功耗（估算）': '25–35W', '年度成本（24/7，$0.15/kWh）': '约$39/年' },
          { '工作负载': 'Qwen3 32B推理', '功耗（估算）': '40–55W', '年度成本（24/7，$0.15/kWh）': '约$62/年' },
          { '工作负载': '混合典型负载', '功耗（估算）': '15–25W', '年度成本（24/7，$0.15/kWh）': '约$26/年' },
        ],
        items: [
          '表面与芯片温度：PromptQuorum未测量',
          '请在长时间负载下检查你自己机器的温度',
          '风扇与噪音：Apple标称待机5 dBA，没有给出负载下数值；PromptQuorum未测量过噪音',
          '持续负载下的热降频：PromptQuorum未测试；请查看针对你所选配置的独立测试',
          '通风：建议开放空间放置——不要放入密闭柜',
          'SSD耐久度：请查看你所选配置的耐久度额定值；磨损取决于写入量',
        ],
        note: '混合到8B使用的预估年电费：$26–39。这些数据为估算值，并非实测结果。',
        image: '',
        imageCaption: '',
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
          { '年份': '第1年', 'Mac Mini AI服务器': '$2,699硬件 + $35电费 = $2,734', '4× ChatGPT Plus': '$960', '差额': '−$1,774（Mac更贵）' },
          { '年份': '第2年', 'Mac Mini AI服务器': '$35（仅电费）', '4× ChatGPT Plus': '$960', '差额': '+$925节省' },
          { '年份': '第3年', 'Mac Mini AI服务器': '$35', '4× ChatGPT Plus': '$960', '差额': '+$925节省' },
          { '年份': '第4年', 'Mac Mini AI服务器': '$35', '4× ChatGPT Plus': '$960', '差额': '+$925节省' },
          { '年份': '第5年', 'Mac Mini AI服务器': '$35', '4× ChatGPT Plus': '$960', '差额': '+$925节省' },
          { '年份': '5年合计', 'Mac Mini AI服务器': '$2,874', '4× ChatGPT Plus': '$4,800', '差额': '+$1,926节省' },
        ],
        note: '假设：4份ChatGPT Plus每年$960（每份$20/月，请核对现价），Mac每年电费$35（估算），硬件为最便宜的64GB Mac Mini $2,699（15核、512GB；Apple美国在线商店，2026年11月28日核对，不含税）。累计回本出现在第3年，约35个月。若选18核加1TB机型（$3,199），5年总计$3,374，节省$1,426，约42个月回本。这里只比较成本：本地8B–32B模型并不等同于ChatGPT Plus。与RTX 4070台式机相比（假设$1,200以上，本站未核价）：两者都全天24小时处于LLM负载时，5年总计Mac约$2,860–3,060，台式机约$2,520–3,170或更高，没有明显的赢家；若两者大部分时间待机（8W对50W），则约$2,750对$1,530，台式机更便宜，但其12GB显存装不下32B模型。',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '新款Mac Mini比其他方案更安静吗？', a: 'Apple标称Mac Mini待机噪音为5 dBA，未公布负载下的数值。PromptQuorum没有做过噪音测量，也未与具体的台式机比较；台式机噪音取决于机箱、散热器和风扇设置。' },
          { q: '可以远程访问Mac Mini吗？', a: '可以——通过终端SSH，或系统设置 → 共享 → 远程管理进行屏幕共享（VNC）。LAN内：ssh 用户@macmini.local。远程访问：先安装Tailscale，再通过Tailscale IP进行SSH。' },
          { q: '需要更高吞吐量怎么办？', a: '升级路径：请查看Apple当前的Mac Studio产品线，其统一内存上限更高、GPU核心数也多于Mac Mini。对于服务器集群场景，可将多台Mac Mini组成机架并用Nginx做负载均衡。' },
          { q: 'Mac Mini作为24/7 AI服务器能用多久？', a: 'Apple Silicon Mac专为持续运行设计。实际寿命和故障率取决于单台设备、负载和环境；PromptQuorum没有这款硬件的实测数据，因此不给出寿命或故障率数字。请定期备份模型、配置和数据。' },
          { q: '能同时服务多个用户吗？', a: '可以。设置OLLAMA_NUM_PARALLEL=2（内存充足时可更高）以处理并发请求。预计64GB的M5 Pro可轻松支持2–3名用户在8B模型上同时使用；32GB的M6在这方面余量较小。' },
          { q: '断电了怎么办？', a: '恢复供电后，若在系统设置 → 能量中启用了"断电后自动启动"，macOS会自动启动。Ollama作为brew服务启动。模型在首次请求时加载（重启后首次响应延迟5–15秒）。' },
          { q: '可以为Mac Mini添加外部GPU吗？', a: '不可以。Apple Silicon不支持用于Metal/ML加速的外部GPU。统一内存架构就是其设计核心。如需更高速度，请查看Apple当前的Mac Studio产品线。' },
          { q: 'Mac Mini作为AI服务器是否过于强大或不够用？', a: '取决于模型大小。以8B模型为主的组合，64GB的M5 Pro超出需要，32GB的M6应该够用（估算）。若要让32B级模型与Whisper、RAG和语音同时运行，请选64GB。70B Q4模型（43GB）放进64GB非常勉强，速度约4–5 tok/s（估算）；参见[运行70B模型的最低成本方案](/zh/prompt-bites/cheapest-way-to-run-70b-model-locally)。Raspberry Pi 5只适合非常小的模型。' },
          { q: '是否存在单纯的"M5"款Mac Mini？', a: '没有。Apple在2026年8月25日的发布会上，基础款Mac Mini采用M6芯片，高配款采用M5 Pro芯片——Mac Mini产品线完全跳过了单纯的"M5"。' },
        ],
      },
      relatedArticles: {
        id: 'related',
        title: '相关文章',
        items: [
          '[Apple Silicon运行本地大模型：完整指南](/zh/local-llms/apple-silicon-local-llm-guide-2026)',
          '[本地 LLM：M5 Pro 与 M5 Max 规格和速度估算](/zh/local-llms/m5-pro-max-llm-benchmarks-2026)',
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
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-es.webp',
    title: 'Mac Mini M6 como servidor de IA local: LLM, Whisper, RAG y asistente de voz 24/7',
    seoTitle: 'Mac Mini M6/M5 Pro como servidor de IA 24/7',
    intro: 'Apple presentó el nuevo Mac Mini el 25 de agosto de 2026: el chip M6 (desde $899, hasta 32 GB de memoria unificada) y el chip M5 Pro (desde $1.699 con 24 GB, hasta 64 GB; el modelo de 64 GB más barato cuesta $2.699). Ambos están a la venta desde el 22 de septiembre de 2026. Esta guía repasa la configuración de hardware, la instalación y el análisis coste-beneficio para ejecutar Ollama LLM, Whisper STT, un pipeline RAG y un asistente de voz en un servidor de IA local silencioso y siempre activo. Coste eléctrico estimado: $26–39 al año.',
    metaDescription: 'Un servidor de IA siempre activo en el nuevo Mac Mini M6 o M5 Pro: Estimado: 25–55 W, unos $26–39/año de luz (estimaciones, no medidas). Ollama, Whisper STT, RAG y asistente de voz. Diseñado para operación continua.',
    twitterDescription: 'Mac Mini M5 Pro 64 GB: un servidor de IA local silencioso. LLM + Whisper + RAG siempre activo, unos $26–39/año estimados en electricidad. Guía completa.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    ctaText: '¿Ya tienes tu servidor de IA Mac Mini funcionando? Compara las respuestas de tu Llama o DeepSeek local con GPT-4, Claude, Gemini y otros 22 modelos en un solo envío con PromptQuorum — verifica que tu configuración autoalojada entrega respuestas de calidad cloud para tus casos de uso.',
    current_models_mentioned: ['Llama 3.1 8B', 'Ministral 3 8B', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: 'Usuarios que quieren un servidor de IA local siempre activo para el hogar o la oficina. Usuarios técnicos cómodos con la terminal.',
    readTime: '12 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini servidor de IA local',
    targetKeywords: ['Mac Mini servidor IA', 'LLM siempre activo', 'infraestructura IA local', 'Ollama siempre activo', 'Mac Mini M6 servidor', 'Mac Mini M5 Pro servidor'],
    leadAnswerBlock: '**Un Mac Mini M5 Pro de 64 GB cuesta desde $2.699 (CPU de 15 núcleos, SSD de 512 GB) y $3.199 con CPU de 18 núcleos y 1 TB (Apple Store de EE. UU., consultado el 28 de noviembre de 2026, sin impuestos); la base M5 Pro de $1.699 tiene 24 GB. Elige 64 GB si quieres tener cargado un modelo de clase 32B junto con Whisper, RAG y un asistente de voz. Si te basta un modelo 8B, un Mac Mini M6 de 32 GB ($1.499 con 512 GB) cuesta $1.200 menos y, según las cifras de tamaño de esta guía, debería dar cabida a los mismos cuatro servicios (estimación sin probar). El consumo con carga LLM se estima en 25–55 W y la electricidad en $26–39 al año. PromptQuorum no ha medido este hardware.**',
    nextStep: {
      text: '¿Listo para configurar Ollama en tu Mac Mini M6 o M5 Pro? Aquí tienes la guía completa de instalación.',
      label: 'Ollama en Mac — Guía de configuración 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      es: {
        question: '¿Por qué es el nuevo Mac Mini un buen servidor de IA local?',
        answer: 'Es pequeño, silencioso en reposo (Apple indica 5 dBA) y consume unos 25–55 W estimados con carga LLM, alrededor de $26–39 al año en electricidad. Un M5 Pro de 64 GB (desde $2.699) tiene sitio para un modelo de clase 32B más Whisper, RAG y asistente de voz. Con un modelo 8B, un M6 de 32 GB ($1.499 con 512 GB) debería bastar para los mismos servicios (estimación). A la venta desde el 22 de septiembre de 2026.',
        bullets: [
          'M5 Pro 64 GB: desde $2.699 (15 núcleos, 512 GB); $3.199 con 18 núcleos y 1 TB',
          'M6: desde $899 (16 GB); 32 GB con 512 GB cuesta $1.499',
          'Consumo: 25–55 W previstos (frente a 300 W+ de un PC con GPU)',
          'Electricidad anual: estimada en $26–39 (frente a $263–394 de una GPU)',
          'Ruido: Apple indica 5 dBA en reposo y no publica ningún dato con carga',
          'API REST accesible desde todos los dispositivos de la LAN',
          'Análisis coste-beneficio: ver la sección de TCO más abajo',
        ],
        updatedDate: '2026-11-28',
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
          'Apple presentó el nuevo Mac Mini el 25 de agosto de 2026: el M6 (desde $899, hasta 32 GB de memoria unificada) y el M5 Pro (desde $1.699 con 24 GB, hasta 64 GB). Ambos están a la venta desde el 22 de septiembre de 2026. Como servidor de IA local silencioso y siempre activo, el M5 Pro de 64 GB (desde $2.699) es la opción si quieres tener cargado un modelo de clase 32B junto con Whisper, RAG y un asistente de voz. El consumo estimado con carga LLM es de 25–55 W, frente a 200–300 W supuestos para un PC con RTX 4070.',
          'Coste eléctrico anual estimado: $26–39 para el Mac Mini en uso mixto o con un 8B ligero, frente a $263–394 de un equipo de sobremesa con GPU a plena carga las 24 horas (a $0,15/kWh). Son perfiles de uso distintos, así que la diferencia no es un ahorro en igualdad de condiciones; el apartado de costes compara ambos con el mismo supuesto. Esta guía no usa benchmarks independientes; las cifras de consumo y rendimiento son estimaciones basadas en las especificaciones publicadas por Apple y en generaciones anteriores del Mac Mini con Apple Silicon, no resultados medidos por PromptQuorum.',
        ],
        tableFormat: true,
        columns: ['Propiedad', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'Propiedad': 'Coste de hardware', 'Mac Mini M5 Pro': '64 GB desde $2.699', 'Desktop + RTX 4070': '$1.200+', 'Raspberry Pi 5': '$80' },
          { 'Propiedad': 'Consumo (reposo)', 'Mac Mini M5 Pro': '8 W (estimado)', 'Desktop + RTX 4070': '50 W', 'Raspberry Pi 5': '5 W' },
          { 'Propiedad': 'Consumo (carga LLM)', 'Mac Mini M5 Pro': '25–55 W (estimado)', 'Desktop + RTX 4070': '200–300 W (supuesto)', 'Raspberry Pi 5': 'N/A (demasiado pequeño)' },
          { 'Propiedad': 'Electricidad anual', 'Mac Mini M5 Pro': '$26–39 (uso típico, estimado)', 'Desktop + RTX 4070': '$263–394 (plena carga 24/7)', 'Raspberry Pi 5': '~$7' },
          { 'Propiedad': 'Nivel de ruido', 'Mac Mini M5 Pro': '5 dBA en reposo (Apple)', 'Desktop + RTX 4070': 'Según el montaje', 'Raspberry Pi 5': 'Silencioso' },
          { 'Propiedad': 'Tamaño máximo de modelo', 'Mac Mini M5 Pro': '32B; 70B Q4 muy justo', 'Desktop + RTX 4070': 'unos 14B Q4 (12 GB VRAM)', 'Raspberry Pi 5': 'Solo 1–3B' },
          { 'Propiedad': 'Fiabilidad siempre activo', 'Mac Mini M5 Pro': 'Sin probar', 'Desktop + RTX 4070': 'Sin probar', 'Raspberry Pi 5': 'Sin probar' },
          { 'Propiedad': 'Huella física', 'Mac Mini M5 Pro': '13×13 cm', 'Desktop + RTX 4070': 'Torre completa', 'Raspberry Pi 5': '8×8 cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Recomendación de configuración de hardware',
        content: 'Compra 64 GB si quieres tener cargado un modelo de clase 32B junto con los demás servicios de esta guía; el Mac Mini más barato para ello cuesta $2.699. Si tu pila usa Llama 3.1 8B, las cifras de tamaño de esta guía (unos 5 GB del modelo, 3 GB de Whisper large-v3, 0,5 GB de embeddings y 2 GB de la base de documentos) suman unos 11 GB sin contar macOS, así que un M6 de 32 GB ($1.499 con 512 GB) debería bastar. Es una estimación, no una prueba. La memoria no se puede ampliar después.',
        tableFormat: true,
        columns: ['Configuración', 'Precio (2026)', 'Memoria máxima', 'Ideal para', 'Modelos compatibles'],
        rows: [
          { 'Configuración': 'Mac Mini M6 (base)', 'Precio (2026)': 'Desde $899; 32 GB + 512 GB: $1.499', 'Memoria máxima': 'Hasta 32 GB', 'Ideal para': 'Cuatro servicios con un 8B (estimado)', 'Modelos compatibles': '7B–13B Q4' },
          { 'Configuración': 'Mac Mini M5 Pro ★', 'Precio (2026)': '64 GB desde $2.699', 'Memoria máxima': 'Hasta 64 GB', 'Ideal para': 'Clase 32B más Whisper, RAG y voz', 'Modelos compatibles': 'Modelos 32B con comodidad' },
        ],
        note: '★ La elección de 64 GB se aplica si quieres un modelo de clase 32B cargado junto con Whisper, RAG y voz; para una pila con 8B, 32 GB deberían bastar (estimación). Planificación de almacenamiento: Llama 3.1 8B Q4 ~5 GB por modelo, Whisper large-v3 ~3 GB, modelo de embeddings ~0,5 GB, ChromaDB con 10.000 documentos ~2 GB. Configuración típica de 5 modelos: 50–80 GB. Mínimo 512 GB SSD; 1 TB para usuarios avanzados. Precios de los modelos de 64 GB en la Apple Store de EE. UU., consultados el 28 de noviembre de 2026, sin impuestos (en tu país serán distintos): $2.699 (15 núcleos, 512 GB), $2.999 (15 núcleos, 1 TB), $2.899 (18 núcleos, 512 GB), $3.199 (18 núcleos, 1 TB).',
        image: '',
        imageCaption: '',
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
          'Cuatro suscripciones a ChatGPT Plus cuestan unos $80/mes ($960/año). Un servidor local compartido puede asumir parte de esas tareas, pero los modelos 8B locales no equivalen a ChatGPT.',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: 'Caso de uso 2: Servidor privado de preguntas y respuestas sobre documentos con RAG',
        content: 'Pila: Ollama (Llama 3.1 8B) + nomic-embed-text + ChromaDB. Todo ejecutándose en el Mac Mini, accesible desde la LAN. Casos de uso: documentos familiares, contratos legales, manuales técnicos, biblioteca de recetas, historial médico, artículos de investigación. La inferencia y la búsqueda se ejecutan en el Mac Mini dentro de tu propia red; algunas herramientas aún pueden buscar actualizaciones.',
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
          'Activado por palabra de activación desde dispositivos cliente (Apple HomePod vía Home Assistant, o matrices de micrófonos con Raspberry Pi). La latencia de extremo a extremo no se ha medido en este hardware; depende de los modelos y ajustes que elijas.',
          'Electricidad anual estimada: $26–39. El procesamiento de voz se ejecuta en tu propio Mac (algunas herramientas aún pueden hacer llamadas de red, por ejemplo para buscar actualizaciones). No cuentes con que la diferencia frente a un asistente en la nube pague el hardware.',
        ],
        items: [
          'Ver configuración detallada: [Crear un asistente de voz local](/es/power-local-llm/build-local-voice-assistant-2026)',
        ],
      },
      usecaseCoding: {
        id: 'usecases-coding',
        title: 'Caso de uso 4: Agente de código privado (integración con IDE)',
        content: 'Configura Continue.dev para usar la API del Mac Mini. DeepSeek Coder V2 de 16B se ejecuta con Ollama en el Mac Mini, así que la inferencia del modelo ocurre en tu propio hardware (las extensiones y los editores aún pueden enviar telemetría o buscar actualizaciones; revisa sus ajustes).',
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
          'Sin cuota de modelo por usuario (GitHub Copilot Pro figura a unos $10/mes por usuario); el hardware y la electricidad siguen costando dinero',
          'La inferencia se ejecuta en tu propio hardware, no en un servicio de modelos en la nube',
          'Puede funcionar sin internet una vez instalados los modelos y extensiones y configurados para uso sin conexión',
          'Funciona con Continue.dev mediante la API local',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: 'Consumo eléctrico y rendimiento térmico (estimados)',
        content: 'PromptQuorum no ha probado este hardware. Las cifras por carga de trabajo son estimaciones nuestras, no mediciones. Como referencia, [la tabla de consumo de Apple](https://support.apple.com/en-us/103253) indica 4 W en reposo y 70 W de máximo para un Mac Mini M6 (16 GB, 256 GB), y 6 W en reposo y 145 W de máximo para un M5 Pro (64 GB, 8 TB) en una prueba de cálculo intensivo, así que las cargas altas pueden superar nuestras estimaciones. Coste eléctrico calculado a $0,15/kWh.',
        tableFormat: true,
        columns: ['Carga de trabajo', 'Consumo (estimado)', 'Coste anual (24/7, $0,15/kWh)'],
        rows: [
          { 'Carga de trabajo': 'Reposo', 'Consumo (estimado)': '8 W', 'Coste anual (24/7, $0,15/kWh)': '~$10/año' },
          { 'Carga de trabajo': 'Inferencia Llama 8B', 'Consumo (estimado)': '25–35 W', 'Coste anual (24/7, $0,15/kWh)': '~$39/año' },
          { 'Carga de trabajo': 'Inferencia Qwen3 32B', 'Consumo (estimado)': '40–55 W', 'Coste anual (24/7, $0,15/kWh)': '~$62/año' },
          { 'Carga de trabajo': 'Carga mixta típica', 'Consumo (estimado)': '15–25 W', 'Coste anual (24/7, $0,15/kWh)': '~$26/año' },
        ],
        items: [
          'Temperaturas de superficie y del chip: PromptQuorum no las ha medido',
          'Comprueba las temperaturas de tu equipo durante una carga prolongada',
          'Ventilador y ruido: Apple indica 5 dBA en reposo y ningún dato con carga; PromptQuorum no ha medido el ruido',
          'Limitación térmica con carga sostenida: PromptQuorum no la ha probado; consulta pruebas independientes de tu configuración exacta',
          'Ventilación: se recomienda espacio abierto — no colocar en un armario cerrado',
          'Durabilidad del SSD: consulta la clasificación de resistencia de tu configuración; el desgaste depende del volumen de escritura',
        ],
        note: 'Electricidad anual estimada para uso mixto o con 8B: $26–39. Son estimaciones, no mediciones.',
        image: '',
        imageCaption: '',
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
          { 'Año': 'Año 1', 'Servidor de IA Mac Mini': '$2.699 hardware + $35 electricidad = $2.734', '4× ChatGPT Plus': '$960', 'Diferencia': '−$1.774 (Mac más caro en A1)' },
          { 'Año': 'Año 2', 'Servidor de IA Mac Mini': '$35 (solo electricidad)', '4× ChatGPT Plus': '$960', 'Diferencia': '+$925 ahorrado' },
          { 'Año': 'Año 3', 'Servidor de IA Mac Mini': '$35', '4× ChatGPT Plus': '$960', 'Diferencia': '+$925 ahorrado' },
          { 'Año': 'Año 4', 'Servidor de IA Mac Mini': '$35', '4× ChatGPT Plus': '$960', 'Diferencia': '+$925 ahorrado' },
          { 'Año': 'Año 5', 'Servidor de IA Mac Mini': '$35', '4× ChatGPT Plus': '$960', 'Diferencia': '+$925 ahorrado' },
          { 'Año': 'Total 5 años', 'Servidor de IA Mac Mini': '$2.874', '4× ChatGPT Plus': '$4.800', 'Diferencia': '+$1.926 ahorrado' },
        ],
        note: 'Supuestos: $960/año por 4× ChatGPT Plus ($20/mes cada uno; consulta el precio actual), $35/año de electricidad del Mac (estimación) y $2.699 por el Mac Mini de 64 GB más barato (15 núcleos, 512 GB; Apple Store de EE. UU., consultado el 28 de noviembre de 2026, sin impuestos). El ahorro acumulado compensa la compra en el año 3, tras unos 35 meses. Con el modelo de 18 núcleos y 1 TB ($3.199), el total a 5 años es $3.374, el ahorro $1.426 y la amortización unos 42 meses. Solo se comparan costes: los modelos locales de 8B–32B no equivalen a ChatGPT Plus. Frente a un PC con RTX 4070 (se supone desde $1.200; no hemos verificado el precio): con ambos bajo carga LLM las 24 horas, los totales a 5 años son de unos $2.860–3.060 (Mac) y $2.520–3.170 o más (PC), sin un ganador claro; si ambos están casi siempre en reposo (8 W frente a 50 W), son unos $2.750 frente a $1.530, así que el PC sale más barato, pero sus 12 GB de VRAM no admiten un modelo 32B.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '¿Es el nuevo Mac Mini más silencioso que las alternativas?', a: 'Apple indica 5 dBA en reposo para el Mac Mini y no publica ningún dato de ruido con carga. PromptQuorum no ha medido el ruido ni lo ha comparado con PCs concretos, cuyo ruido depende de la caja, los disipadores y los ajustes de ventiladores.' },
          { q: '¿Puedo acceder remotamente al Mac Mini?', a: 'Sí — por SSH desde el terminal, o con Compartir Pantalla (VNC) desde Ajustes del Sistema → Compartir → Gestión Remota. En la LAN: ssh usuario@macmini.local. Para acceso remoto: usa primero Tailscale y luego SSH a través de la IP de Tailscale.' },
          { q: '¿Qué hago si necesito mayor rendimiento?', a: 'Ruta de actualización: consulta la gama actual de Mac Studio de Apple para un límite de memoria unificada más alto y más núcleos de GPU que el Mac Mini. Para granjas de servidores, conecta varios Mac Mini en rack y balancea la carga con Nginx.' },
          { q: '¿Cuánto dura el Mac Mini como servidor de IA 24/7?', a: 'Los Mac con Apple Silicon están diseñados para operación sostenida. La vida útil y las tasas de fallo reales dependen de cada equipo, de la carga y del entorno; PromptQuorum no tiene datos medidos de este hardware, por lo que no ofrece cifras de vida útil ni de fallos. Haz copias de seguridad de tus modelos, configuración y datos.' },
          { q: '¿Puedo atender a varios usuarios simultáneamente?', a: 'Sí. Ajusta OLLAMA_NUM_PARALLEL=2 (o más con más memoria) para gestionar solicitudes concurrentes. Se espera que el M5 Pro de 64 GB maneje cómodamente a 2–3 usuarios simultáneos con modelos de 8B; el M6 de 32 GB ofrece menos margen para esto.' },
          { q: '¿Qué ocurre si el Mac Mini pierde la alimentación?', a: 'Tras la restauración de la alimentación, macOS arranca automáticamente si activaste "Iniciar automáticamente tras un fallo de alimentación" en Ajustes del Sistema → Energía. Ollama arranca como servicio de brew. Los modelos se recargan con la primera solicitud (retraso de 5–15 s en la primera respuesta tras el reinicio).' },
          { q: '¿Puedo añadir una GPU externa al Mac Mini para inferencia más rápida?', a: 'No. Apple Silicon no admite GPUs externas para aceleración Metal/ML. La arquitectura de memoria unificada es el diseño — no se puede añadir GPU discreta. Para más velocidad, consulta la gama actual de Mac Studio de Apple.' },
          { q: '¿Es el Mac Mini demasiado potente o insuficiente para un servidor de IA?', a: 'Depende del tamaño del modelo. Para una pila con modelos 8B, el M5 Pro de 64 GB es más de lo necesario y un M6 de 32 GB debería bastar (estimación). Para un modelo de clase 32B con Whisper, RAG y voz, elige 64 GB. Un modelo 70B Q4 (43 GB) solo cabe muy justo en 64 GB, a unos 4–5 tok/s (estimación); consulta [las formas más baratas de ejecutar un modelo 70B](/es/prompt-bites/cheapest-way-to-run-70b-model-locally). Una Raspberry Pi 5 se limita a modelos muy pequeños.' },
          { q: '¿Existe un Mac Mini simplemente "M5"?', a: 'No. El anuncio de Apple del 25 de agosto de 2026 usa el chip M6 para el Mac Mini base y el chip M5 Pro para el nivel superior — Apple omitió por completo un "M5" simple para la línea Mac Mini.' },
        ],
      },
      relatedArticles: {
        id: 'related',
        title: 'Artículos relacionados',
        items: [
          '[Apple Silicon para LLMs locales: guía completa](/es/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max para LLM locales: especificaciones y velocidades estimadas](/es/local-llms/m5-pro-max-llm-benchmarks-2026)',
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
      dateModified: '2026-11-28',
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
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-ar.webp',
    title: '⁨Mac Mini M6⁩ كخادم ذكاء اصطناعي محلي ⁨2026⁩: ⁨LLM⁩ و⁨Whisper⁩ و⁨RAG⁩ ومساعد صوتي ⁨24/7⁩',
    seoTitle: '⁨Mac Mini M6⁩/⁨M5 Pro⁩ خادم ذكاء محلي: ⁨24/7⁩',
    intro: 'أعلنت Apple عن جهاز Mac Mini الجديد في 25 أغسطس 2026: شريحة M6 (بسعر يبدأ من 899 دولارًا، ذاكرة موحدة حتى 32 GB) وشريحة M5 Pro (بسعر يبدأ من 1,699 دولارًا مع 24 GB، وحتى 64 GB؛ وأرخص طراز بسعة 64 GB سعره 2,699 دولارًا). يتوفر كلاهما منذ 22 سبتمبر 2026. يغطي هذا الدليل تهيئة العتاد والإعداد وتحليل التكاليف والفوائد لتشغيل Ollama LLM وWhisper STT وخط معالجة RAG ومساعد صوتي على خادم ذكاء اصطناعي محلي هادئ ودائم التشغيل. تكلفة الكهرباء المقدَّرة: 26–39 دولارًا سنويًا.',
    metaDescription: '⁨خادم ذكاء اصطناعي محلي دائم التشغيل على جهاز Mac Mini M6⁩ أو ⁨M5 Pro⁩ الجديد. ⁨25⁩–⁨55⁩ واط (تقديريًا)، نحو ⁨26⁩–⁨39⁩ دولارًا سنويًا (تقديرات وليست قياسات). ⁨Ollama⁩ و⁨Whisper STT⁩ و⁨RAG⁩ ومساعد صوتي. مصمم للتشغيل المتواصل.',
    twitterDescription: '⁨Mac Mini M5 Pro⁩ بسعة ⁨64 GB⁩: خادم ذكاء اصطناعي محلي هادئ. ⁨LLM + Whisper + RAG⁩ دائم التشغيل مقابل نحو ⁨35⁩ دولارًا سنويًا من الكهرباء (تقدير). دليل إعداد كامل.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    ctaText: 'هل لديك بالفعل خادم الذكاء الاصطناعي Mac Mini يعمل؟ قارن إجابات Llama أو DeepSeek المحلي لديك مع GPT-4 وClaude وGemini و22 نموذجًا آخر في إرسال واحد عبر PromptQuorum — تحقق من أن إعدادك المستضاف ذاتيًا يقدم إجابات بجودة السحابة لحالات استخدامك.',
    current_models_mentioned: ['Llama 3.1 8B', 'Ministral 3 8B', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: 'المستخدمون الذين يريدون خادم ذكاء اصطناعي محلي دائم التشغيل للمنزل أو المكتب. مستخدمون تقنيون مرتاحون مع الطرفية.',
    readTime: '12 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini خادم ذكاء اصطناعي محلي',
    targetKeywords: ['Mac Mini خادم ذكاء اصطناعي', 'LLM دائم التشغيل', 'بنية تحتية للذكاء الاصطناعي المحلي', 'Ollama دائم التشغيل', 'Mac Mini M6 خادم', 'Mac Mini M5 Pro خادم'],
    leadAnswerBlock: '**يبدأ سعر Mac Mini M5 Pro بسعة 64 GB من 2,699 دولارًا (CPU بـ 15 نواة، SSD بسعة 512 GB)، ويبلغ 3,199 دولارًا مع CPU بـ 18 نواة و1 TB (متجر Apple الأمريكي، تم التحقق في 28 نوفمبر 2026، قبل الضريبة)؛ أما فئة M5 Pro الأساسية بسعر 1,699 دولارًا فبذاكرة 24 GB. اختر 64 GB إذا أردت إبقاء نموذج من فئة 32B محمّلًا إلى جانب Whisper وRAG ومساعد صوتي. وإذا كان نموذج 8B يكفيك، فإن Mac Mini M6 بسعة 32 GB (1,499 دولارًا مع 512 GB) أرخص بـ 1,200 دولار، ووفق أرقام الأحجام في هذا الدليل يُفترض أن يستوعب الخدمات الأربع نفسها (تقدير غير مختبَر). يُقدَّر الاستهلاك تحت حمل LLM بين 25 و55 واط، والكهرباء بنحو 26–39 دولارًا سنويًا. لم تقِس PromptQuorum هذا العتاد.**',
    nextStep: {
      text: 'هل أنت مستعد لإعداد Ollama على Mac Mini M6 أو M5 Pro لديك؟ إليك دليل التثبيت الكامل.',
      label: 'Ollama على Mac — دليل الإعداد 2026 ←',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      ar: {
        question: 'لماذا يُعد جهاز Mac Mini الجديد خادم ذكاء اصطناعي محلي جيدًا؟',
        answer: 'الجهاز صغير وهادئ في الخمول (تذكر Apple ‏5 dBA)، ويُقدَّر استهلاكه تحت حمل LLM بين 25 و55 واط، أي نحو 26–39 دولارًا من الكهرباء سنويًا. يتسع M5 Pro بسعة 64 GB (بدءًا من 2,699 دولارًا) لنموذج من فئة 32B مع Whisper وRAG ومساعد صوتي. ومع نموذج 8B يُفترض أن يكفي M6 بسعة 32 GB (1,499 دولارًا مع 512 GB) للخدمات نفسها (تقدير). متوفر منذ 22 سبتمبر 2026.',
        bullets: [
          'M5 Pro بسعة 64 GB: من 2,699 دولارًا (15 نواة، 512 GB)؛ و3,199 دولارًا بـ 18 نواة و1 TB',
          'M6: من 899 دولارًا (16 GB)؛ و32 GB مع 512 GB بسعر 1,499 دولارًا',
          'الاستهلاك المتوقع: 25–55 واط (مقابل 300 واط+ لجهاز PC بـ GPU)',
          'الكهرباء السنوية التقديرية: 26–39 دولارًا (مقابل 263–394 دولارًا لـ GPU)',
          'الضجيج: تذكر Apple ‏5 dBA في الخمول ولا تنشر رقمًا تحت الحمل',
          'API REST يمكن الوصول إليه من جميع أجهزة الشبكة المحلية LAN',
          'تحليل التكاليف والفوائد: راجع قسم التكلفة الإجمالية أدناه',
        ],
        updatedDate: '2026-11-28',
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
          'أعلنت Apple عن جهاز Mac Mini الجديد في 25 أغسطس 2026: M6 (بسعر يبدأ من 899 دولارًا، ذاكرة موحدة حتى 32 GB) وM5 Pro (بسعر يبدأ من 1,699 دولارًا مع 24 GB، وحتى 64 GB). يتوفر كلاهما منذ 22 سبتمبر 2026. كخادم ذكاء اصطناعي محلي هادئ ودائم التشغيل، يكون M5 Pro بسعة 64 GB (بدءًا من 2,699 دولارًا) هو الخيار إذا أردت إبقاء نموذج من فئة 32B محمّلًا مع Whisper وRAG ومساعد صوتي. الاستهلاك المقدَّر تحت حمل LLM هو 25–55 واط، مقابل 200–300 واط مفترضة لجهاز مكتبي بـ RTX 4070.',
          'تكلفة الكهرباء السنوية المقدَّرة: 26–39 دولارًا لجهاز Mac Mini في الاستخدام المختلط حتى الخفيف بنموذج 8B، مقابل 263–394 دولارًا لجهاز مكتبي بـ GPU يعمل بكامل الحمل على مدار الساعة (بسعر 0.15 دولار/ك.و.س). نمطا الاستخدام مختلفان، لذا ليس الفرق توفيرًا في ظروف متماثلة؛ ويقارن قسم التكاليف بينهما على الافتراض نفسه. لا يعتمد هذا الدليل على اختبارات أداء مستقلة؛ أرقام الاستهلاك والأداء تقديرية استنادًا إلى مواصفات Apple المنشورة وأجيال Mac Mini السابقة بشريحة Apple Silicon، وليست نتائج قاستها PromptQuorum.',
        ],
        tableFormat: true,
        columns: ['الخاصية', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'الخاصية': 'تكلفة العتاد', 'Mac Mini M5 Pro': '64 GB من 2,699 دولارًا', 'Desktop + RTX 4070': '1,200 دولارًا+', 'Raspberry Pi 5': '80 دولارًا' },
          { 'الخاصية': 'الاستهلاك (خمول)', 'Mac Mini M5 Pro': '8 واط (تقديري)', 'Desktop + RTX 4070': '50 واط', 'Raspberry Pi 5': '5 واط' },
          { 'الخاصية': 'الاستهلاك (حمل LLM)', 'Mac Mini M5 Pro': '25–55 واط (تقديري)', 'Desktop + RTX 4070': '200–300 واط (مفترض)', 'Raspberry Pi 5': 'غير متاح (صغير جدًا)' },
          { 'الخاصية': 'الكهرباء السنوية', 'Mac Mini M5 Pro': '26–39 دولارًا (استخدام معتاد، تقدير)', 'Desktop + RTX 4070': '263–394 دولارًا (حمل كامل 24/7)', 'Raspberry Pi 5': '~7 دولارات' },
          { 'الخاصية': 'مستوى الضجيج', 'Mac Mini M5 Pro': '5 dBA في الخمول (Apple)', 'Desktop + RTX 4070': 'حسب التجميعة', 'Raspberry Pi 5': 'صامت' },
          { 'الخاصية': 'أقصى حجم نموذج', 'Mac Mini M5 Pro': '32B؛ و70B Q4 بالكاد', 'Desktop + RTX 4070': 'نحو 14B Q4 (12 GB VRAM)', 'Raspberry Pi 5': '1–3B فقط' },
          { 'الخاصية': 'موثوقية دائم التشغيل', 'Mac Mini M5 Pro': 'غير مختبَرة', 'Desktop + RTX 4070': 'غير مختبَرة', 'Raspberry Pi 5': 'غير مختبَرة' },
          { 'الخاصية': 'الحجم المادي', 'Mac Mini M5 Pro': '13×13 سم', 'Desktop + RTX 4070': 'برج كامل', 'Raspberry Pi 5': '8×8 سم' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'توصية إعداد العتاد',
        content: 'اشترِ 64 GB إذا أردت إبقاء نموذج من فئة 32B محمّلًا مع بقية خدمات هذا الدليل؛ وأرخص Mac Mini لذلك سعره 2,699 دولارًا. أما إذا كانت منظومتك تعتمد على Llama 3.1 8B، فإن أرقام الأحجام في هذا الدليل (نحو 5 GB للنموذج و3 GB لـ Whisper large-v3 و0.5 GB للـ embeddings و2 GB لقاعدة المستندات) تبلغ مجتمعة نحو 11 GB دون macOS، ولذا يُفترض أن يكفي M6 بسعة 32 GB (1,499 دولارًا مع 512 GB). هذا تقدير وليس اختبارًا. ولا يمكن ترقية الذاكرة لاحقًا.',
        tableFormat: true,
        columns: ['التهيئة', 'السعر (2026)', 'أقصى ذاكرة', 'مثالي لـ', 'النماذج المتوافقة'],
        rows: [
          { 'التهيئة': 'Mac Mini M6 (أساسي)', 'السعر (2026)': 'من 899 دولارًا؛ 32 GB + 512 GB: ‏1,499', 'أقصى ذاكرة': 'حتى 32 GB', 'مثالي لـ': 'الخدمات الأربع مع نموذج 8B (تقدير)', 'النماذج المتوافقة': '7B–13B Q4' },
          { 'التهيئة': 'Mac Mini M5 Pro ★', 'السعر (2026)': '64 GB من 2,699 دولارًا', 'أقصى ذاكرة': 'حتى 64 GB', 'مثالي لـ': 'فئة 32B مع Whisper وRAG والصوت', 'النماذج المتوافقة': 'نماذج 32B بأريحية' },
        ],
        note: '★ توصية 64 GB تنطبق إذا أردت تحميل نموذج من فئة 32B مع Whisper وRAG والصوت معًا؛ أما المنظومة المبنية على 8B فيُفترض أن تكفيها 32 GB (تقدير). تخطيط التخزين: Llama 3.1 8B Q4 ~5 GB لكل نموذج، Whisper large-v3 ~3 GB، نموذج embeddings ~0.5 GB، ChromaDB مع 10,000 مستند ~2 GB. تهيئة معتادة بـ 5 نماذج: 50–80 GB. الحد الأدنى 512 GB SSD؛ و1 TB للمستخدمين المتقدمين. أسعار طرازات 64 GB في متجر Apple الأمريكي، تم التحقق في 28 نوفمبر 2026، قبل الضريبة (تختلف الأسعار المحلية): 2,699 دولارًا (15 نواة، 512 GB)، و2,999 (15 نواة، 1 TB)، و2,899 (18 نواة، 512 GB)، و3,199 (18 نواة، 1 TB).',
        image: '',
        imageCaption: '',
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
          'تبلغ كلفة 4 اشتراكات ChatGPT Plus نحو 80 دولارًا/شهر (960 دولارًا/سنة). يمكن لخادم محلي مشترك تولّي جزء من هذه المهام، لكن نماذج 8B المحلية لا تعادل ChatGPT.',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: 'حالة الاستخدام 2: خادم خاص للأسئلة والأجوبة على المستندات باستخدام RAG',
        content: 'المنظومة: Ollama (Llama 3.1 8B) + nomic-embed-text + ChromaDB. كل شيء يعمل على Mac Mini، يمكن الوصول إليه من الشبكة المحلية LAN. حالات الاستخدام: مستندات عائلية، عقود قانونية، أدلة تقنية، مكتبة وصفات، سجلات طبية، أوراق بحثية. يعمل الاستدلال والبحث على Mac Mini داخل شبكتك الخاصة؛ وقد تتحقق بعض الأدوات من التحديثات مع ذلك.',
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
          'يُفعّل بكلمة تنشيط من أجهزة العميل (Apple HomePod عبر Home Assistant، أو مصفوفات ميكروفونات Raspberry Pi). لم يُقَس زمن الاستجابة من الطرف إلى الطرف على هذا العتاد؛ فهو يعتمد على النماذج والإعدادات التي تختارها.',
          'الكهرباء السنوية التقديرية: 26–39 دولارًا. تُعالَج الأصوات على جهاز Mac الخاص بك (وقد تُجري بعض الأدوات اتصالات شبكية مثل التحقق من التحديثات). لا تتوقع أن يغطي فرق التكلفة مقارنة بمساعد سحابي ثمن العتاد.',
        ],
        items: [
          'اطّلع على الإعداد التفصيلي: [إنشاء مساعد صوتي محلي](/ar/power-local-llm/build-local-voice-assistant-2026)',
        ],
      },
      usecaseCoding: {
        id: 'usecases-coding',
        title: 'حالة الاستخدام 4: وكيل برمجي خاص (التكامل مع IDE)',
        content: 'هيّئ Continue.dev لاستخدام API الخاص بـ Mac Mini. يعمل DeepSeek Coder V2 بحجم 16B عبر Ollama على Mac Mini، لذا يجري استدلال النموذج على عتادك الخاص (قد تظل الإضافات والمحررات ترسل بيانات قياس أو تتحقق من التحديثات؛ راجع إعداداتها).',
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
          'لا رسوم نماذج لكل مستخدم (يُعرض GitHub Copilot Pro بنحو 10 دولارات/شهر لكل مستخدم)؛ لكن العتاد والكهرباء ليسا مجانيين',
          'يعمل الاستدلال على عتادك الخاص وليس على خدمة نماذج سحابية',
          'يمكن أن يعمل دون إنترنت بعد تثبيت النماذج والإضافات وإعدادها للعمل دون اتصال',
          'يعمل مع Continue.dev عبر واجهة API المحلية',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: 'الاستهلاك الكهربائي والأداء الحراري (تقديري)',
        content: 'لم تختبر PromptQuorum هذا العتاد. أرقام أعباء العمل أدناه تقديراتنا وليست قياسات. للمقارنة، يذكر [جدول استهلاك الطاقة من Apple](https://support.apple.com/en-us/103253) لجهاز Mac Mini M6 ‏(16 GB، 256 GB) استهلاك 4 واط في الخمول و70 واط كحد أقصى، ولطراز M5 Pro ‏(64 GB، 8 TB) استهلاك 6 واط في الخمول و145 واط كحد أقصى في اختبار حسابي مكثف، لذا قد تتجاوز الأحمال الثقيلة تقديراتنا. تُحسب الكهرباء على أساس 0.15 دولار/كيلوواط ساعة.',
        tableFormat: true,
        columns: ['عبء العمل', 'الاستهلاك (تقديري)', 'التكلفة السنوية (24/7، 0.15 دولار/ك.و.س)'],
        rows: [
          { 'عبء العمل': 'خمول', 'الاستهلاك (تقديري)': '8 واط', 'التكلفة السنوية (24/7، 0.15 دولار/ك.و.س)': '~10 دولارات/سنة' },
          { 'عبء العمل': 'استدلال Llama 8B', 'الاستهلاك (تقديري)': '25–35 واط', 'التكلفة السنوية (24/7، 0.15 دولار/ك.و.س)': '~39 دولارًا/سنة' },
          { 'عبء العمل': 'استدلال Qwen3 32B', 'الاستهلاك (تقديري)': '40–55 واط', 'التكلفة السنوية (24/7، 0.15 دولار/ك.و.س)': '~62 دولارًا/سنة' },
          { 'عبء العمل': 'حمل مختلط معتاد', 'الاستهلاك (تقديري)': '15–25 واط', 'التكلفة السنوية (24/7، 0.15 دولار/ك.و.س)': '~26 دولارًا/سنة' },
        ],
        items: [
          'درجات حرارة السطح والشريحة: لم تقِسها PromptQuorum',
          'تحقق من درجات حرارة جهازك أثناء حمل طويل',
          'المروحة والضجيج: تذكر Apple ‏5 dBA في الخمول ولا تذكر رقمًا تحت الحمل؛ ولم تقِس PromptQuorum الضجيج',
          'خفض الأداء الحراري تحت الحمل المتواصل: لم تختبره PromptQuorum؛ راجع اختبارات مستقلة لتهيئتك بالضبط',
          'التهوية: يُوصى بمساحة مفتوحة — لا تضعه في خزانة مغلقة',
          'متانة SSD: راجع تصنيف التحمل لتكوينك المحدد؛ يعتمد البلى على حجم الكتابة',
        ],
        note: 'الكهرباء السنوية التقديرية للاستخدام المختلط حتى 8B: ‏26–39 دولارًا. هذه تقديرات وليست قياسات.',
        image: '',
        imageCaption: '',
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
          { 'السنة': 'السنة 1', 'خادم الذكاء الاصطناعي Mac Mini': '2,699 دولارًا عتاد + 35 دولارًا كهرباء = 2,734 دولارًا', '4× ChatGPT Plus': '960 دولارًا', 'الفرق': '−1,774 دولارًا (Mac أغلى في السنة 1)' },
          { 'السنة': 'السنة 2', 'خادم الذكاء الاصطناعي Mac Mini': '35 دولارًا (كهرباء فقط)', '4× ChatGPT Plus': '960 دولارًا', 'الفرق': '+925 دولارًا تم ادخارها' },
          { 'السنة': 'السنة 3', 'خادم الذكاء الاصطناعي Mac Mini': '35 دولارًا', '4× ChatGPT Plus': '960 دولارًا', 'الفرق': '+925 دولارًا تم ادخارها' },
          { 'السنة': 'السنة 4', 'خادم الذكاء الاصطناعي Mac Mini': '35 دولارًا', '4× ChatGPT Plus': '960 دولارًا', 'الفرق': '+925 دولارًا تم ادخارها' },
          { 'السنة': 'السنة 5', 'خادم الذكاء الاصطناعي Mac Mini': '35 دولارًا', '4× ChatGPT Plus': '960 دولارًا', 'الفرق': '+925 دولارًا تم ادخارها' },
          { 'السنة': 'إجمالي 5 سنوات', 'خادم الذكاء الاصطناعي Mac Mini': '2,874 دولارًا', '4× ChatGPT Plus': '4,800 دولارًا', 'الفرق': '+1,926 دولارًا تم ادخارها' },
        ],
        note: 'الافتراضات: 960 دولارًا/سنة لـ 4× ChatGPT Plus ‏(20 دولارًا/شهر لكل منها؛ تحقق من السعر الحالي)، و35 دولارًا/سنة لكهرباء Mac (تقدير)، و2,699 دولارًا لأرخص Mac Mini بسعة 64 GB ‏(15 نواة، 512 GB؛ متجر Apple الأمريكي، تم التحقق في 28 نوفمبر 2026، قبل الضريبة). تقع نقطة التعادل التراكمية في السنة 3، بعد نحو 35 شهرًا. ومع طراز 18 نواة و1 TB ‏(3,199 دولارًا) يبلغ إجمالي 5 سنوات 3,374 دولارًا والتوفير 1,426 دولارًا والتعادل نحو 42 شهرًا. هذه مقارنة تكلفة فقط: النماذج المحلية من 8B إلى 32B لا تعادل ChatGPT Plus. ومقارنة بجهاز مكتبي بـ RTX 4070 ‏(يُفترض أنه من 1,200 دولار فأكثر، ولم نتحقق من سعره): إذا عمل الاثنان تحت حمل LLM على مدار الساعة، يبلغ إجمالي 5 سنوات نحو 2,860–3,060 دولارًا لجهاز Mac و2,520–3,170 دولارًا أو أكثر للمكتبي، فلا فائز واضحًا؛ وإذا بقي الاثنان في الخمول غالبًا (8 واط مقابل 50 واط) فالأرقام نحو 2,750 مقابل 1,530 دولارًا، فيكون المكتبي أرخص، لكن ذاكرته VRAM البالغة 12 GB لا تتسع لنموذج 32B.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'هل جهاز Mac Mini الجديد أكثر هدوءًا من البدائل؟', a: 'تذكر Apple أن ضجيج Mac Mini في الخمول 5 dBA ولا تنشر رقمًا تحت الحمل. لم تُجرِ PromptQuorum قياسات للضجيج ولم تقارنه بأجهزة مكتبية محددة، يعتمد ضجيجها على الصندوق والمبرّدات وإعدادات المراوح.' },
          { q: 'هل يمكنني الوصول إلى Mac Mini عن بُعد؟', a: 'نعم — عبر SSH من الطرفية، أو بمشاركة الشاشة (VNC) من إعدادات النظام ← المشاركة ← الإدارة عن بُعد. على الشبكة المحلية LAN: ssh user@macmini.local. للوصول عن بُعد: استخدم Tailscale أولًا ثم SSH عبر IP الخاص بـ Tailscale.' },
          { q: 'ماذا أفعل إذا احتجت أداءً أعلى؟', a: 'مسار الترقية: راجع تشكيلة Mac Studio الحالية من Apple للحصول على سقف ذاكرة موحدة أعلى ونوى GPU أكثر مما يوفره Mac Mini. لمزارع الخوادم، اربط عدة أجهزة Mac Mini في رف ووازِن الحمل بـ Nginx.' },
          { q: 'كم تدوم Mac Mini كخادم ذكاء اصطناعي 24/7؟', a: 'أجهزة Mac بشريحة Apple Silicon مصممة للتشغيل المتواصل. يعتمد العمر الفعلي ومعدلات الأعطال على كل جهاز وعلى الحمل والبيئة؛ ولا تملك PromptQuorum بيانات قياس لهذا العتاد، لذلك لا نذكر رقمًا للعمر أو للأعطال. احتفظ بنسخ احتياطية من نماذجك وإعداداتك وبياناتك.' },
          { q: 'هل يمكنني خدمة عدة مستخدمين في آنٍ واحد؟', a: 'نعم. اضبط OLLAMA_NUM_PARALLEL=2 (أو أكثر مع مزيد من الذاكرة) لإدارة الطلبات المتزامنة. من المتوقع أن يتعامل M5 Pro بسعة 64 GB بأريحية مع 2–3 مستخدمين متزامنين بنماذج 8B؛ أما M6 بسعة 32 GB فيوفّر هامشًا أقل لذلك.' },
          { q: 'ماذا يحدث إذا فقد Mac Mini التيار الكهربائي؟', a: 'بعد عودة التيار، يُقلع macOS تلقائيًا إذا فعّلت "البدء تلقائيًا بعد انقطاع التيار" في إعدادات النظام ← الطاقة. يُقلع Ollama كخدمة brew. تُعاد النماذج عند أول طلب (تأخير 5–15 ث في أول استجابة بعد إعادة التشغيل).' },
          { q: 'هل يمكنني إضافة GPU خارجي إلى Mac Mini لاستدلال أسرع؟', a: 'لا. لا تدعم Apple Silicon وحدات GPU خارجية لتسريع Metal/ML. بنية الذاكرة الموحدة هي التصميم — لا يمكن إضافة GPU منفصل. لمزيد من السرعة، راجع تشكيلة Mac Studio الحالية من Apple.' },
          { q: 'هل Mac Mini قوي جدًا أم غير كافٍ لخادم ذكاء اصطناعي؟', a: 'يعتمد ذلك على حجم النموذج. للمنظومة المبنية على نماذج 8B يكون M5 Pro بسعة 64 GB أكثر من الحاجة، ويُفترض أن يكفي M6 بسعة 32 GB (تقدير). ولتشغيل نموذج من فئة 32B مع Whisper وRAG والصوت اختر 64 GB. أما نموذج 70B Q4 ‏(43 GB) فلا يتسع في 64 GB إلا بصعوبة، بنحو 4–5 tok/s (تقدير)؛ راجع [أرخص طرق تشغيل نموذج 70B](/ar/prompt-bites/cheapest-way-to-run-70b-model-locally). ويقتصر Raspberry Pi 5 على نماذج صغيرة جدًا.' },
          { q: 'هل يوجد جهاز Mac Mini بشريحة "M5" بسيطة؟', a: 'لا. يعتمد إعلان Apple في 25 أغسطس 2026 شريحة M6 للفئة الأساسية من Mac Mini وشريحة M5 Pro للفئة العليا — تجاوزت Apple تمامًا وجود شريحة "M5" بسيطة لخط إنتاج Mac Mini.' },
        ],
      },
      relatedArticles: {
        id: 'related',
        title: 'مقالات ذات صلة',
        items: [
          '[Apple Silicon لنماذج LLM المحلية: دليل شامل](/ar/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro مقابل M5 Max لنماذج LLM المحلية: المواصفات والسرعات التقديرية](/ar/local-llms/m5-pro-max-llm-benchmarks-2026)',
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
      dateModified: '2026-11-28',
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
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-pt.webp',
    title: 'Mac Mini M6 como Servidor de IA Local: LLM, Whisper, RAG e Assistente de Voz 24/7',
    seoTitle: 'Mac Mini M6/M5 Pro como servidor de IA local 24/7',
    intro: 'A Apple anunciou o novo Mac Mini em 25 de agosto de 2026: o chip M6 (a partir de $899, até 32 GB de memória unificada) e o chip M5 Pro (a partir de $1.699 com 24 GB, até 64 GB; o modelo de 64 GB mais barato custa $2.699). Ambos estão disponíveis desde 22 de setembro de 2026. Este guia cobre a configuração de hardware, a instalação e a análise de custo-benefício para executar Ollama LLM, Whisper STT, pipeline RAG e assistente de voz em um servidor de IA local silencioso e sempre ativo. Custo elétrico estimado: $26–39 por ano.',
    metaDescription: 'Um servidor de IA sempre ativo no novo Mac Mini M6 ou M5 Pro: 25–55 W, $26–39/ano de energia. Ollama, Whisper STT, RAG e assistente de voz. Projetado para operação contínua.',
    twitterDescription: 'Mac Mini M5 Pro 64 GB: um servidor de IA local silencioso. LLM + Whisper + RAG sempre ativo, cerca de $26–39/ano em energia (estimado). Guia completo.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    ctaText: 'Já tem seu servidor de IA Mac Mini funcionando? Compare as respostas do seu Llama ou DeepSeek local com GPT-4, Claude, Gemini e outros 22 modelos em um único envio com o PromptQuorum — verifique se sua configuração autoalojada entrega respostas de qualidade nuvem para seus casos de uso.',
    current_models_mentioned: ['Llama 3.1 8B', 'Ministral 3 8B', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: 'Usuários que querem um servidor de IA local sempre ativo para casa ou escritório. Usuários técnicos confortáveis com o terminal.',
    readTime: '12 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac Mini servidor de IA local',
    targetKeywords: ['Mac Mini servidor IA', 'LLM sempre ativo', 'infraestrutura IA local', 'Ollama sempre ativo', 'Mac Mini M6 servidor', 'Mac Mini M5 Pro servidor'],
    leadAnswerBlock: '**Um Mac Mini M5 Pro de 64 GB custa a partir de $2.699 (CPU de 15 núcleos, SSD de 512 GB) e $3.199 com CPU de 18 núcleos e 1 TB (Apple Store dos EUA, consultada em 28 de novembro de 2026, sem impostos; os preços no Brasil são diferentes); a base M5 Pro de $1.699 tem 24 GB. Escolha 64 GB se quiser manter um modelo da classe 32B carregado junto com Whisper, RAG e um assistente de voz. Se um modelo 8B for suficiente, um Mac Mini M6 de 32 GB ($1.499 com 512 GB) custa $1.200 a menos e, pelos tamanhos informados neste guia, deve comportar os mesmos quatro serviços (estimativa não testada). O consumo sob carga LLM é estimado em 25–55 W e a energia em $26–39 por ano. A PromptQuorum não mediu este hardware.**',
    nextStep: {
      text: 'Pronto para configurar o Ollama no seu Mac Mini M6 ou M5 Pro? Aqui está o guia completo de instalação.',
      label: 'Ollama no Mac — Guia de configuração 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      pt: {
        question: 'Por que o novo Mac Mini é um bom servidor de IA local?',
        answer: 'É pequeno, silencioso em repouso (a Apple informa 5 dBA) e consome, por estimativa, 25–55 W sob carga LLM, cerca de $26–39 por ano em energia. Um M5 Pro de 64 GB (a partir de $2.699) tem espaço para um modelo da classe 32B mais Whisper, RAG e assistente de voz. Com um modelo 8B, um M6 de 32 GB ($1.499 com 512 GB) deve bastar para os mesmos serviços (estimativa). Disponível desde 22 de setembro de 2026.',
        bullets: [
          'M5 Pro 64 GB: a partir de $2.699 (15 núcleos, 512 GB); $3.199 com 18 núcleos e 1 TB',
          'M6: a partir de $899 (16 GB); 32 GB com 512 GB custa $1.499',
          'Consumo: 25–55 W esperados (vs 300 W+ de um PC com GPU)',
          'Energia anual: estimada em $26–39 (vs $263–394 de uma GPU)',
          'Ruído: a Apple informa 5 dBA em repouso e não publica valor sob carga',
          'API REST acessível de todos os dispositivos da LAN',
          'Análise de custo-benefício: veja a seção TCO abaixo',
        ],
        updatedDate: '2026-11-28',
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
          'A Apple anunciou o novo Mac Mini em 25 de agosto de 2026: o M6 (a partir de $899, até 32 GB de memória unificada) e o M5 Pro (a partir de $1.699 com 24 GB, até 64 GB). Ambos estão disponíveis desde 22 de setembro de 2026. Como servidor de IA local silencioso e sempre ativo, o M5 Pro de 64 GB (a partir de $2.699) é a opção se você quiser manter um modelo da classe 32B carregado junto com Whisper, RAG e um assistente de voz. O consumo estimado sob carga LLM é de 25–55 W, contra 200–300 W supostos para um PC com RTX 4070.',
          'Custo elétrico anual estimado: $26–39 para o Mac Mini em uso misto até 8B leve, contra $263–394 de um desktop com GPU em carga total 24 horas por dia (a $0,15/kWh). São perfis de uso diferentes, então a diferença não é uma economia em condições iguais; a seção de custos compara os dois com a mesma premissa. Este guia não usa benchmarks independentes; os números de consumo e desempenho são estimativas baseadas nas especificações publicadas pela Apple e em gerações anteriores do Mac Mini com Apple Silicon, não resultados medidos pela PromptQuorum.',
        ],
        tableFormat: true,
        columns: ['Propriedade', 'Mac Mini M5 Pro', 'Desktop + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { 'Propriedade': 'Custo de hardware', 'Mac Mini M5 Pro': '64 GB a partir de $2.699', 'Desktop + RTX 4070': '$1.200+', 'Raspberry Pi 5': '$80' },
          { 'Propriedade': 'Consumo (repouso)', 'Mac Mini M5 Pro': '8 W (estimado)', 'Desktop + RTX 4070': '50 W', 'Raspberry Pi 5': '5 W' },
          { 'Propriedade': 'Consumo (carga LLM)', 'Mac Mini M5 Pro': '25–55 W (estimado)', 'Desktop + RTX 4070': '200–300 W (suposto)', 'Raspberry Pi 5': 'N/A (muito pequeno)' },
          { 'Propriedade': 'Energia anual', 'Mac Mini M5 Pro': '$26–39 (uso típico, estimado)', 'Desktop + RTX 4070': '$263–394 (carga total 24/7)', 'Raspberry Pi 5': '~$7' },
          { 'Propriedade': 'Nível de ruído', 'Mac Mini M5 Pro': '5 dBA em repouso (Apple)', 'Desktop + RTX 4070': 'Depende da montagem', 'Raspberry Pi 5': 'Silencioso' },
          { 'Propriedade': 'Tamanho máximo de modelo', 'Mac Mini M5 Pro': '32B; 70B Q4 muito justo', 'Desktop + RTX 4070': 'cerca de 14B Q4 (12 GB VRAM)', 'Raspberry Pi 5': 'Apenas 1–3B' },
          { 'Propriedade': 'Confiabilidade sempre ativo', 'Mac Mini M5 Pro': 'Não testada', 'Desktop + RTX 4070': 'Não testada', 'Raspberry Pi 5': 'Não testada' },
          { 'Propriedade': 'Pegada física', 'Mac Mini M5 Pro': '13×13 cm', 'Desktop + RTX 4070': 'Torre completa', 'Raspberry Pi 5': '8×8 cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Recomendação de configuração de hardware',
        content: 'Compre 64 GB se quiser manter um modelo da classe 32B carregado junto com os demais serviços deste guia; o Mac Mini mais barato para isso custa $2.699. Se a sua stack usa Llama 3.1 8B, os tamanhos informados neste guia (cerca de 5 GB do modelo, 3 GB do Whisper large-v3, 0,5 GB de embeddings e 2 GB da base de documentos) somam cerca de 11 GB sem contar o macOS, então um M6 de 32 GB ($1.499 com 512 GB) deve bastar. É uma estimativa, não um teste. A memória não pode ser ampliada depois. Não existe um Mac Mini "M5 Max": esse era o nome especulativo usado antes do anúncio da Apple.',
        tableFormat: true,
        columns: ['Configuração', 'Preço (2026)', 'Memória máxima', 'Ideal para', 'Modelos compatíveis'],
        rows: [
          { 'Configuração': 'Mac Mini M6 (base)', 'Preço (2026)': 'A partir de $899; 32 GB + 512 GB: $1.499', 'Memória máxima': 'até 32 GB', 'Ideal para': 'Quatro serviços com um 8B (estimado)', 'Modelos compatíveis': '7B–13B Q4' },
          { 'Configuração': 'Mac Mini M5 Pro ★', 'Preço (2026)': '64 GB a partir de $2.699', 'Memória máxima': 'até 64 GB', 'Ideal para': 'Classe 32B mais Whisper, RAG e voz', 'Modelos compatíveis': '32B Q4, múltiplos 8B' },
        ],
        note: '★ A escolha de 64 GB vale se você quiser um modelo da classe 32B carregado junto com Whisper, RAG e voz; para uma stack com 8B, 32 GB devem bastar (estimativa). Preços dos modelos de 64 GB na Apple Store dos EUA, consultados em 28 de novembro de 2026, sem impostos (os preços no Brasil são diferentes): $2.699 (15 núcleos, 512 GB), $2.999 (15 núcleos, 1 TB), $2.899 (18 núcleos, 512 GB), $3.199 (18 núcleos, 1 TB).',
      },
      setup: {
        id: 'setup',
        title: 'Configuração completa do servidor passo a passo',
        numberedItems: [
          '**Instale o Ollama:** `curl -fsSL https://ollama.ai/install.sh | sh`',
          '**Baixe um modelo:** `ollama pull llama3.1:8b` ou `ollama pull mistral:7b`',
          '**Inicie o servidor na inicialização:** `launchctl load -w ~/Library/LaunchAgents/com.ollama.server.plist`',
          '**Configure o Open WebUI:** `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main`',
          '**Configure o acesso remoto:** defina `OLLAMA_HOST=0.0.0.0` nas variáveis de ambiente do Ollama',
          '**Teste da rede local:** `curl http://[IP-DO-MAC-MINI]:11434/api/generate -d \'{"model": "llama3.1:8b", "prompt": "Olá!"}\'`',
        ],
      },
      remoteAccess: {
        id: 'remote-access',
        title: 'Configurar acesso remoto de outros dispositivos',
        content: [
          'Por padrão, o Ollama escuta apenas em localhost. Para acessar de outros dispositivos na sua rede local, defina a variável de ambiente `OLLAMA_HOST=0.0.0.0`. Reinicie o Ollama depois. Não exponha o Ollama diretamente à internet: ele não tem autenticação integrada. Use Tailscale, Cloudflare Tunnel com políticas de acesso ou WireGuard; não use encaminhamento de portas.',
          'Acesso de iPhone/iPad: use o endereço IP local do Mac Mini (ex: 192.168.1.100:11434). Apps iOS compatíveis com API Ollama incluem Enchanted.',
        ],
        codeBlock: '# macOS: defina OLLAMA_HOST para acesso na rede local\nlaunchctl setenv OLLAMA_HOST "0.0.0.0"\n# Reinicie o Ollama\nkillall ollama && ollama serve',
        codeLanguage: 'bash',
      },
      usecases: {
        id: 'usecases',
        title: 'Casos de uso: o que você pode fazer com um servidor Mac Mini M6/M5 Pro',
        items: [
          '**Assistente de chat sempre disponível:** Llama 3.1 8B ou Ministral 3 8B via Open WebUI — acessível de qualquer dispositivo da sua rede local.',
          '**Transcrição de voz local (Whisper):** transcreva reuniões, podcasts ou notas de voz localmente. O áudio é processado localmente no seu Mac; ferramentas individuais ainda podem fazer chamadas de rede, como verificações de atualização.',
          '**Pipeline RAG local:** responda perguntas sobre seus próprios documentos usando Chroma + nomic-embed-text + Ollama.',
          '**Assistente de código:** DeepSeek Coder V2 ou Qwen3-Coder para sugestões de código sem enviar seu código-fonte para a nuvem.',
          '**Assistente de voz 24/7:** Whisper STT + Ollama LLM + Piper TTS = assistente de voz que processa o áudio localmente no seu Mac; ferramentas individuais ainda podem fazer chamadas de rede, como verificações de atualização.',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: 'Monitorar consumo e desempenho térmico (estimado)',
        content: 'A PromptQuorum não testou este hardware. Os números abaixo são estimativas nossas, não medições. Como referência, [a tabela de consumo da Apple](https://support.apple.com/en-us/103253) indica 4 W em repouso e 70 W no máximo para um Mac Mini M6 (16 GB, 256 GB), e 6 W em repouso e 145 W no máximo para um M5 Pro (64 GB, 8 TB) em um teste de computação intensiva; cargas pesadas podem superar nossas estimativas. Use o comando `powermetrics` do macOS para acompanhar o consumo no seu próprio equipamento:',
        codeBlock: 'sudo powermetrics --samplers smc,cpu_power -i 5000',
        codeLanguage: 'bash',
        items: [
          'Consumo em repouso (estimado): ~8 W',
          'Carga LLM 8B (estimado): ~25 W',
          'Carga LLM 32B (estimado): ~45–55 W',
          'Limitação térmica sob carga contínua: não testada pela PromptQuorum; consulte testes independentes da sua configuração',
          'Ruído: a Apple informa 5 dBA em repouso e nenhum valor sob carga; a PromptQuorum não mediu o ruído',
        ],
      },
      maintenance: {
        id: 'maintenance',
        title: 'Monitoramento e manutenção do servidor',
        items: [
          '**Atualize modelos mensalmente:** `ollama pull llama3.1:8b` baixa automaticamente a versão mais recente.',
          '**Monitore o uso de disco:** os arquivos de modelo ficam em `~/.ollama/models`. Um modelo 32B Q4 usa ~20 GB. Remova modelos não utilizados com `ollama rm <modelo>`.',
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
          { 'Opção': 'Mac Mini M5 Pro 64 GB', 'Custo inicial': '$2.699', 'Energia anual': '$35', 'Total 5 anos': '$2.874' },
          { 'Opção': '4× ChatGPT Plus', 'Custo inicial': '$0', 'Energia anual': '$960', 'Total 5 anos': '$4.800' },
          { 'Opção': 'Desktop + RTX 4070', 'Custo inicial': '$1.200+', 'Energia anual': '$263–394 (24/7)', 'Total 5 anos': '$2.515–3.170+' },
        ],
        note: 'Premissas: $960/ano para 4× ChatGPT Plus ($20/mês cada; confira o preço atual), $35/ano de energia do Mac (estimativa) e $2.699 pelo Mac Mini de 64 GB mais barato (15 núcleos, 512 GB; Apple Store dos EUA, consultada em 28 de novembro de 2026, sem impostos). Frente às assinaturas, a economia em 5 anos é de $1.926, com retorno no ano 3, após cerca de 35 meses; no modelo de 18 núcleos e 1 TB ($3.199), o total é $3.374, a economia $1.426 e o retorno cerca de 42 meses. Compara-se apenas o custo: modelos locais de 8B–32B não equivalem ao ChatGPT Plus. A linha do desktop supõe hardware a partir de $1.200 (preço não verificado por nós) e carga total 24 horas por dia; sob carga LLM contínua o Mac ficaria em cerca de $2.860–3.060 em 5 anos, sem um vencedor claro. Se ambos ficarem quase sempre em repouso (8 W contra 50 W), são cerca de $2.750 contra $1.530: o PC sai mais barato, mas seus 12 GB de VRAM não comportam um modelo 32B.',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'O novo Mac Mini pode ficar ligado 24/7?',
            a: 'Sim. É projetado para uso contínuo. Estima-se que o Mac Mini M5 Pro 64 GB consuma apenas ~8 W em repouso e ~25–55 W sob carga LLM. A PromptQuorum não testou o comportamento térmico em execução contínua.',
          },
          {
            q: 'Qual é o maior modelo LLM que o Mac Mini M5 Pro 64 GB consegue executar?',
            a: 'Qwen3 32B em Q4 ou equivalente (~20 GB). Um modelo 70B Q4 (43 GB) só cabe muito justo em 64 GB, a cerca de 4–5 tok/s (estimativa; veja [as formas mais baratas de rodar um modelo 70B](/pt/prompt-bites/cheapest-way-to-run-70b-model-locally)). Para mais folga ou modelos maiores, consulte a linha Mac Studio atual da Apple para um limite de memória mais alto.',
          },
          {
            q: 'Posso acessar o servidor de IA do Mac Mini de fora da minha rede doméstica?',
            a: 'Sim, via Tailscale (VPN de malha peer-to-peer gratuita). Não exponha o Ollama diretamente à internet: ele não tem autenticação integrada. Use Tailscale, Cloudflare Tunnel com políticas de acesso ou WireGuard; não use encaminhamento de portas.',
          },
          {
            q: 'O Mac Mini consegue executar vários modelos simultaneamente?',
            a: 'Sim. Com 64 GB de memória unificada no M5 Pro, você pode executar dois modelos 8B simultaneamente ou um modelo 13B com um modelo de embedding (como nomic-embed-text para RAG) em paralelo. O M6 com 32 GB tem menos margem para isso.',
          },
          {
            q: 'Existe um Mac Mini com chip "M5" simples?',
            a: 'Não. O anúncio da Apple de 25 de agosto de 2026 usa o chip M6 para o Mac Mini básico e o chip M5 Pro para o nível superior — a Apple pulou completamente um "M5" simples para a linha Mac Mini.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Artigos relacionados',
        items: [
          '[M5 Pro vs M5 Max para LLMs locais: especificações e velocidades estimadas](/pt/local-llms/m5-pro-max-llm-benchmarks-2026) — tok/s estimados (não medidos) por tamanho de modelo, calculados a partir da largura de banda de memória e do tamanho do arquivo',
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
      dateModified: '2026-11-28',
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
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    heroImage: '/images/mac-mini-m5-local-ai-server-overview-hero-ko.webp',
    title: 'Mac Mini M6를 로컬 AI 서버로 활용하기: 상시 구동 LLM, Whisper, RAG, 음성 어시스턴트',
    seoTitle: 'Mac Mini M6/M5 Pro 로컬 AI 서버: 24/7',
    intro: 'Apple은 2026년 8월 25일 새로운 Mac Mini를 발표했습니다. M6 칩(899달러부터, 통합 메모리 최대 32GB)과 M5 Pro 칩(24GB 기준 1,699달러부터, 최대 64GB. 가장 저렴한 64GB 모델은 2,699달러)입니다. 두 모델 모두 2026년 9월 22일에 출시되었습니다. 이 가이드는 조용하고 상시 구동되는 로컬 AI 서버에서 Ollama LLM, Whisper STT, RAG 파이프라인, 음성 어시스턴트를 운영하기 위한 하드웨어 구성, 설정, 비용 분석을 다룹니다. 예상 연간 전기 요금은 약 $26–39입니다.',
    metaDescription: '새로운 Mac Mini M6 또는 M5 Pro에서 상시 구동 로컬 AI 서버를 실행하세요. 추정 소비 전력 25–55W, 연간 전기 요금 약 $26–39(추정치, 실측 아님). Ollama LLM, Whisper STT, RAG, 음성 어시스턴트. 상시 구동을 염두에 두고 설계되었습니다.',
    twitterDescription: 'Mac mini M5 Pro 64GB: 조용한 로컬 AI 서버. 연간 전기 요금 약 $35(추정)로 상시 LLM + Whisper + RAG 운영. 전체 설정 가이드.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    ctaText: 'Mac Mini AI 서버를 가동 중이신가요? PromptQuorum에서 로컬 Llama 또는 DeepSeek 출력 결과를 GPT-4, Claude, Gemini 및 22개 이상의 모델과 한 번에 비교해 보십시오. 자체 호스팅 설정이 특정 사용 사례에서 클라우드 수준의 답변을 제공하는지 검증하세요.',
    current_models_mentioned: ['Llama 3.1 8B', 'Ministral 3 8B', 'DeepSeek Coder V2', 'Whisper large-v3', 'Piper TTS'],
    current_hardware_mentioned: ['M6', 'M5 Pro', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    audience: '가정 또는 사무실에서 상시 구동 로컬 AI 서버를 원하는 사용자. 터미널 사용에 익숙한 기술 사용자.',
    readTime: '12분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac mini 로컬 AI 서버',
    targetKeywords: ['Mac mini AI 서버', '상시 구동 LLM', '홈 AI 인프라', 'Ollama 상시 구동', 'Mac mini M6 서버', 'Mac mini M5 Pro 서버'],
    leadAnswerBlock: '**64GB Mac mini M5 Pro는 2,699달러부터(15코어 CPU, 512GB SSD)이며 18코어 CPU와 1TB 구성은 3,199달러입니다(Apple 미국 스토어, 2026년 11월 28일 확인, 세전). 1,699달러의 M5 Pro 기본형은 24GB입니다. 32B급 모델을 Whisper, RAG, 음성 어시스턴트와 함께 계속 올려 두려면 64GB를 선택하십시오. 8B 모델로 충분하다면 32GB Mac mini M6(512GB 포함 1,499달러)가 1,200달러 저렴하며, 이 가이드의 용량 수치상 같은 네 가지 서비스를 담을 수 있을 것으로 보입니다(추정, 미검증). LLM 부하 시 소비 전력은 25-55W, 전기 요금은 연간 $26-39로 추정합니다. PromptQuorum은 이 하드웨어를 측정하지 않았습니다.**',
    nextStep: {
      text: 'Mac Mini M6 또는 M5 Pro에 Ollama를 설정할 준비가 되셨습니까? 전체 설치 가이드를 확인하세요.',
      label: 'Mac용 Ollama — 설정 가이드 2026 →',
      href: '/local-llms/ollama-on-mac-apple-silicon-setup-2026',
    },
    quickAnswerTop: {
      ko: {
        question: '새로운 Mac mini가 로컬 AI 서버로 적합한 이유는 무엇입니까?',
        answer: '크기가 작고 대기 시 조용하며(Apple 공개 수치 5 dBA), LLM 부하 시 소비 전력은 25-55W, 전기 요금은 연간 약 $26-39로 추정합니다. 64GB M5 Pro(2,699달러부터)는 32B급 모델과 Whisper, RAG, 음성 어시스턴트를 담을 여유가 있습니다. 8B 모델을 쓴다면 32GB M6(512GB 포함 1,499달러)로도 같은 서비스를 운영할 수 있을 것으로 보입니다(추정). 2026년 9월 22일부터 판매 중입니다.',
        bullets: [
          'M5 Pro 64GB: 2,699달러부터(15코어, 512GB), 18코어·1TB는 3,199달러',
          'M6: 899달러부터(16GB), 32GB·512GB는 1,499달러',
          '소비 전력: 25-55W (GPU 데스크톱 300W+ 대비)',
          '연간 전기 요금: 예상 $26-39 (GPU 대비 $263-394)',
          '소음: Apple 공개 수치는 대기 시 5 dBA이며 부하 시 수치는 없음',
          'LAN의 모든 기기에서 REST API 접근 가능',
          '비용 대비 효과 분석: 아래 TCO 섹션 참조',
        ],
        updatedDate: '2026-11-28',
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
          'Apple은 2026년 8월 25일 새로운 Mac Mini를 발표했습니다. M6(899달러부터, 통합 메모리 최대 32GB)와 M5 Pro(24GB 기준 1,699달러부터, 최대 64GB)입니다. 두 모델 모두 2026년 9월 22일에 출시되었습니다. 조용한 상시 구동 로컬 AI 서버에서 32B급 모델을 Whisper, RAG, 음성 어시스턴트와 함께 올려 두려면 64GB M5 Pro(2,699달러부터)가 선택지입니다. LLM 부하 시 추정 소비 전력은 25-55W이며, RTX 4070 데스크톱은 200-300W로 가정합니다.',
          '추정 연간 전기 요금은 혼합 사용부터 가벼운 8B 사용까지의 Mac Mini가 $26-39, 24시간 최대 부하의 GPU 데스크톱이 $263-394입니다($0.15/kWh). 사용 조건이 다르므로 이 차이를 같은 조건의 절감액으로 보면 안 됩니다. 비용 항목에서는 같은 가정으로 비교합니다. 이 가이드는 독립 벤치마크를 사용하지 않았습니다. 전력 및 성능 수치는 Apple이 공개한 사양과 이전 Apple Silicon Mac mini 세대를 바탕으로 한 추정치이며 PromptQuorum의 실측 결과가 아닙니다.',
        ],
        tableFormat: true,
        columns: ['항목', 'Mac Mini M5 Pro', '데스크톱 + RTX 4070', 'Raspberry Pi 5'],
        rows: [
          { '항목': '하드웨어 비용', 'Mac Mini M5 Pro': '64GB 2,699달러부터', '데스크톱 + RTX 4070': '$1,200+', 'Raspberry Pi 5': '$80' },
          { '항목': '대기 전력', 'Mac Mini M5 Pro': '8W (추정)', '데스크톱 + RTX 4070': '50W', 'Raspberry Pi 5': '5W' },
          { '항목': 'LLM 부하 전력', 'Mac Mini M5 Pro': '25-55W (추정)', '데스크톱 + RTX 4070': '200-300W (가정)', 'Raspberry Pi 5': '해당 없음 (성능 부족)' },
          { '항목': '연간 전기 요금', 'Mac Mini M5 Pro': '$26-39 (일반 사용, 추정)', '데스크톱 + RTX 4070': '$263-394 (24시간 최대 부하)', 'Raspberry Pi 5': '~$7' },
          { '항목': '소음 수준', 'Mac Mini M5 Pro': '대기 시 5 dBA (Apple)', '데스크톱 + RTX 4070': '구성에 따라 다름', 'Raspberry Pi 5': '무소음' },
          { '항목': '최대 모델 크기', 'Mac Mini M5 Pro': '32B, 70B Q4는 빠듯함', '데스크톱 + RTX 4070': '약 14B Q4 (12GB VRAM)', 'Raspberry Pi 5': '1-3B 전용' },
          { '항목': '상시 구동 안정성', 'Mac Mini M5 Pro': '미검증', '데스크톱 + RTX 4070': '미검증', 'Raspberry Pi 5': '미검증' },
          { '항목': '크기', 'Mac Mini M5 Pro': '약 12.7×12.7cm', '데스크톱 + RTX 4070': '풀타워', 'Raspberry Pi 5': '약 7.6×7.6cm' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: '하드웨어 구성 권장 사항',
        content: '32B급 모델을 이 가이드의 다른 서비스와 함께 계속 올려 두려면 64GB를 구매하십시오. 이를 위한 가장 저렴한 Mac Mini는 2,699달러입니다. Llama 3.1 8B 기반 구성이라면 이 가이드의 용량 수치(모델 약 5GB, Whisper large-v3 약 3GB, 임베딩 약 0.5GB, 문서 데이터베이스 약 2GB)는 macOS를 제외하고 합계 약 11GB이므로 32GB M6(512GB 포함 1,499달러)로 충분할 것으로 보입니다. 이는 추정이며 테스트 결과가 아닙니다. 메모리는 나중에 업그레이드할 수 없습니다.',
        tableFormat: true,
        columns: ['구성', '가격 (2026)', '최대 메모리', '적합 용도', '지원 모델'],
        rows: [
          { '구성': 'Mac Mini M6 (기본)', '가격 (2026)': '899달러부터, 32GB·512GB 1,499달러', '최대 메모리': '최대 32 GB', '적합 용도': '8B 모델로 네 가지 서비스 (추정)', '지원 모델': '7B–13B Q4' },
          { '구성': 'Mac Mini M5 Pro ★', '가격 (2026)': '64GB 2,699달러부터', '최대 메모리': '최대 64 GB', '적합 용도': '32B급 + Whisper, RAG, 음성', '지원 모델': '32B 모델 여유 있게 실행' },
        ],
        note: '★ 64GB 권장은 32B급 모델을 Whisper, RAG, 음성과 함께 올려 두는 경우에 해당합니다. 8B 기반 구성은 32GB로 충분할 것으로 보입니다(추정). 스토리지 계획: Llama 3.1 8B Q4 ~모델당 5 GB, Whisper large-v3 ~3 GB, 임베딩 모델 ~0.5 GB, 문서 10,000건의 ChromaDB ~2 GB. 일반적인 5모델 설정: 50-80 GB. 최소 512 GB SSD 권장, 고급 사용자는 1 TB. Apple 미국 스토어의 64GB 모델 가격(2026년 11월 28일 확인, 세전, 국내 가격은 다름): $2,699(15코어, 512GB), $2,999(15코어, 1TB), $2,899(18코어, 512GB), $3,199(18코어, 1TB).',
        image: '',
        imageCaption: '',
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
        content: 'Mac Mini AI 서버는 네 가지 주요 사용 사례를 지원합니다. 각각은 독립적인 워크플로우이며, 64GB M5 Pro에서 네 가지를 동시에 실행할 수 있습니다 (8B 모델 기반 구성은 32GB M6로도 가능할 것으로 보입니다 — 추정).',
      },
      usecaseFamilyServer: {
        id: 'usecases-family',
        title: '사용 사례 1: 가정용 AI 서버',
        content: [
          'Mac Mini를 24/7 상시 구동 상태로 수납장에 보관합니다. 홈 네트워크의 모든 기기(스마트폰, 태블릿, 노트북)가 동일한 Ollama 인스턴스에 API 요청을 보냅니다. iPhone, iPad, MacBook을 보유한 4인 가족이 동시에 사용합니다.',
          'iPhone은 Shortcuts → macmini.local:11434로 POST 요청을 사용합니다. MacBook 사용자는 Continue.dev 또는 Raycast 확장 프로그램을 사용합니다. OLLAMA_NUM_PARALLEL=2로 설정하면 두 명의 가족 구성원이 Llama 3.1 8B에서 동시에 대화할 수 있습니다.',
          'ChatGPT Plus 4개 구독은 약 $80/월($960/년)입니다. 공유 로컬 서버가 이 작업 일부를 맡을 수는 있지만 로컬 8B 모델은 ChatGPT와 동등하지 않습니다.',
        ],
      },
      usecaseRAG: {
        id: 'usecases-rag',
        title: '사용 사례 2: 개인 정보 보호 RAG 문서 Q&A 서버',
        content: '스택: Ollama (Llama 3.1 8B) + nomic-embed-text + ChromaDB. 모두 Mac Mini에서 실행되며 LAN을 통해 접근 가능합니다. 사용 사례: 가족 문서, 법률 계약서, 기술 매뉴얼, 레시피 라이브러리, 의료 기록, 연구 논문. 추론과 검색은 사용자의 네트워크 안에 있는 Mac Mini에서 실행되며, 일부 도구는 여전히 업데이트를 확인할 수 있습니다.',
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
          '클라이언트 기기의 웨이크워드로 실행됩니다(Home Assistant를 통한 Apple HomePod 또는 Raspberry Pi 마이크 어레이). 이 하드웨어에서 엔드투엔드 지연 시간은 측정하지 않았으며, 선택한 모델과 설정에 따라 달라집니다.',
          '예상 연간 전기 요금: $26-39. 음성 처리는 사용자의 Mac에서 실행됩니다(일부 도구는 업데이트 확인 같은 네트워크 호출을 할 수 있음). 클라우드 어시스턴트와의 비용 차이로 하드웨어 값을 회수할 것으로 기대하지 마십시오.',
        ],
        items: [
          '상세 설정 가이드: [로컬 음성 어시스턴트 구축](/ko/power-local-llm/build-local-voice-assistant-2026)',
        ],
      },
      usecaseCoding: {
        id: 'usecases-coding',
        title: '사용 사례 4: 개인 정보 보호 코딩 에이전트 (IDE 통합)',
        content: 'Continue.dev가 Mac Mini의 API를 사용하도록 구성합니다. 16B DeepSeek Coder V2는 Mac Mini의 Ollama에서 실행되므로 모델 추론은 사용자의 하드웨어에서 이루어집니다(확장 프로그램과 편집기는 여전히 원격 측정 데이터를 보내거나 업데이트를 확인할 수 있으므로 설정을 확인하십시오).',
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
          '사용자당 모델 요금 없음(GitHub Copilot Pro는 사용자당 약 $10/월로 표시됨). 하드웨어와 전기 비용은 듭니다',
          '추론은 클라우드 모델 서비스가 아닌 사용자의 하드웨어에서 실행',
          '모델과 확장 프로그램을 설치하고 오프라인용으로 설정하면 인터넷 없이도 작동할 수 있음',
          '로컬 API를 통해 Continue.dev와 함께 사용 가능',
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: '전력 소비 및 열 성능 (추정치)',
        content: 'PromptQuorum은 이 하드웨어를 테스트하지 않았습니다. 아래 워크로드별 수치는 실측이 아닌 추정치입니다. 참고로 [Apple의 소비 전력 표](https://support.apple.com/en-us/103253)에는 M6 Mac mini(16GB, 256GB)가 대기 4W·최대 70W, M5 Pro Mac mini(64GB, 8TB)가 대기 6W·연산 집약 테스트에서 최대 145W로 나와 있어, 고부하에서는 추정치보다 많이 소비할 수 있습니다. 전기 요금은 $0.15/kWh 기준입니다.',
        tableFormat: true,
        columns: ['워크로드', '전력 (추정)', '연간 비용 (24/7, $0.15/kWh)'],
        rows: [
          { '워크로드': '대기', '전력 (추정)': '8W', '연간 비용 (24/7, $0.15/kWh)': '~$10/년' },
          { '워크로드': 'Llama 8B 추론', '전력 (추정)': '25-35W', '연간 비용 (24/7, $0.15/kWh)': '~$39/년' },
          { '워크로드': 'Qwen3 32B 추론', '전력 (추정)': '40-55W', '연간 비용 (24/7, $0.15/kWh)': '~$62/년' },
          { '워크로드': '일반적인 혼합 워크로드', '전력 (추정)': '15-25W', '연간 비용 (24/7, $0.15/kWh)': '~$26/년' },
        ],
        items: [
          '표면 및 칩 온도: PromptQuorum은 측정하지 않았습니다',
          '긴 부하 중에 사용 중인 기기의 온도를 확인하십시오',
          '팬과 소음: Apple 공개 수치는 대기 시 5 dBA이며 부하 시 수치는 없습니다. PromptQuorum은 소음을 측정하지 않았습니다',
          '지속 부하 시 열 스로틀링: PromptQuorum은 테스트하지 않았습니다. 해당 구성의 독립 테스트를 확인하십시오',
          '통풍: 개방된 공간 권장 — 밀폐된 캐비닛 내부 설치 지양',
          'SSD 내구성: 사용 중인 구성의 내구성 등급을 확인하세요. 마모는 쓰기량에 따라 달라집니다',
        ],
        note: '혼합 사용부터 8B 사용까지의 예상 연간 전기 요금: $26-39. 추정치이며 실측 데이터가 아닙니다.',
        image: '',
        imageCaption: '',
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
          { '연도': '1년차', 'Mac Mini AI 서버': '$2,699 하드웨어 + $35 전기 = $2,734', 'ChatGPT Plus 4개': '$960', '차이': '-$1,774 (1년차에는 Mac이 더 비쌈)' },
          { '연도': '2년차', 'Mac Mini AI 서버': '$35 (전기만)', 'ChatGPT Plus 4개': '$960', '차이': '+$925 절감' },
          { '연도': '3년차', 'Mac Mini AI 서버': '$35', 'ChatGPT Plus 4개': '$960', '차이': '+$925 절감' },
          { '연도': '4년차', 'Mac Mini AI 서버': '$35', 'ChatGPT Plus 4개': '$960', '차이': '+$925 절감' },
          { '연도': '5년차', 'Mac Mini AI 서버': '$35', 'ChatGPT Plus 4개': '$960', '차이': '+$925 절감' },
          { '연도': '5년 합계', 'Mac Mini AI 서버': '$2,874', 'ChatGPT Plus 4개': '$4,800', '차이': '+$1,926 절감' },
        ],
        note: '가정: ChatGPT Plus 4개 연간 $960(각 $20/월, 현재 가격 확인 필요), Mac 전기 요금 연간 $35(추정), 가장 저렴한 64GB Mac Mini $2,699(15코어, 512GB, Apple 미국 스토어, 2026년 11월 28일 확인, 세전). 누적 손익분기점은 3년차, 약 35개월입니다. 18코어·1TB 모델($3,199)의 5년 합계는 $3,374, 절감액은 $1,426, 손익분기점은 약 42개월입니다. 비용만 비교한 것이며 로컬 8B-32B 모델은 ChatGPT Plus와 동등하지 않습니다. RTX 4070 데스크톱($1,200 이상으로 가정, 가격 미확인)과 비교하면, 둘 다 24시간 LLM 부하일 때 5년 합계는 Mac 약 $2,860-3,060, 데스크톱 약 $2,520-3,170 이상으로 뚜렷한 우위가 없습니다. 둘 다 대부분 대기 상태(8W 대 50W)라면 약 $2,750 대 $1,530으로 데스크톱이 더 저렴하지만, 12GB VRAM에는 32B 모델이 들어가지 않습니다.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '새로운 Mac Mini가 대안 제품보다 조용합니까?', a: 'Apple은 Mac Mini의 대기 시 소음을 5 dBA로 공개하며 부하 시 수치는 공개하지 않습니다. PromptQuorum은 소음을 측정하지 않았고 특정 데스크톱 PC와 비교하지도 않았습니다. PC 소음은 케이스, 쿨러, 팬 설정에 따라 달라집니다.' },
          { q: 'Mac Mini에 원격으로 접속할 수 있습니까?', a: '네. 터미널을 통한 SSH 또는 시스템 설정 → 공유 → 원격 관리를 통한 화면 공유(VNC). LAN에서는 ssh user@macmini.local을 사용합니다. 원격 접근의 경우 Tailscale을 먼저 설치한 후 Tailscale IP를 통해 SSH로 접속하십시오.' },
          { q: '더 높은 처리량이 필요한 경우 어떻게 합니까?', a: '업그레이드 경로: Apple의 현재 Mac Studio 라인업을 확인하십시오. Mac Mini보다 높은 통합 메모리 상한과 더 많은 GPU 코어를 제공합니다. 서버 팜의 경우 여러 Mac Mini를 랙에 연결하고 Nginx로 부하 분산을 구성하십시오.' },
          { q: 'Mac Mini는 24/7 AI 서버로 얼마나 오래 사용할 수 있습니까?', a: 'Apple Silicon Mac은 지속적인 작동을 위해 설계되었습니다. 실제 수명과 고장률은 개별 기기, 부하, 환경에 따라 다르며, PromptQuorum에는 이 하드웨어의 측정 데이터가 없으므로 수명이나 고장률 수치는 제시하지 않습니다. 모델, 설정, 데이터는 정기적으로 백업하세요.' },
          { q: '여러 사용자가 동시에 사용할 수 있습니까?', a: '네. OLLAMA_NUM_PARALLEL=2(또는 메모리에 따라 더 높게)로 설정하면 동시 요청을 처리할 수 있습니다. 64GB M5 Pro는 8B 모델에서 2-3명의 동시 사용자를 처리할 것으로 예상됩니다. 32GB M6는 이에 대한 여유가 더 적습니다.' },
          { q: 'Mac Mini의 전원이 나가면 어떻게 됩니까?', a: '전원이 복구되면 시스템 설정 → 에너지에서 "전원 장애 후 자동으로 시작"을 설정한 경우 macOS가 자동으로 부팅됩니다. Ollama는 brew 서비스로 시작됩니다. 모델은 첫 번째 요청 시 다시 로드됩니다(재부팅 후 첫 응답에 5-15초 지연 발생).' },
          { q: 'Mac Mini에 외부 GPU를 추가하여 추론 속도를 높일 수 있습니까?', a: '아니요. Apple Silicon은 Metal/ML 가속을 위한 외부 GPU를 지원하지 않습니다. 통합 메모리 아키텍처가 설계 원칙입니다. 독립형 GPU를 추가할 수 없습니다. 속도 향상을 원한다면 Apple의 현재 Mac Studio 라인업을 확인하십시오.' },
          { q: 'Mac Mini가 AI 서버로 과잉 사양입니까, 아니면 부족합니까?', a: '모델 크기에 따라 다릅니다. 8B 모델 중심 구성에는 64GB M5 Pro가 필요 이상이며 32GB M6로 충분할 것으로 보입니다(추정). 32B급 모델을 Whisper, RAG, 음성과 함께 쓰려면 64GB를 선택하십시오. 70B Q4 모델(43GB)은 64GB에 간신히 들어가며 약 4-5 tok/s(추정)입니다. [70B 모델을 가장 저렴하게 실행하는 방법](/ko/prompt-bites/cheapest-way-to-run-70b-model-locally)을 참고하십시오. Raspberry Pi 5는 매우 작은 모델에 한정됩니다.' },
          { q: '단순한 "M5" Mac Mini가 존재합니까?', a: '아니요. Apple의 2026년 8월 25일 발표는 기본형 Mac Mini에 M6 칩을, 상위 등급에 M5 Pro 칩을 사용합니다 — Apple은 Mac Mini 라인업에서 단순한 "M5"를 완전히 건너뛰었습니다.' },
        ],
      },
      relatedArticles: {
        id: 'related',
        title: '관련 문서',
        items: [
          '[Apple Silicon 로컬 LLM 완전 가이드](/ko/local-llms/apple-silicon-local-llm-guide-2026)',
          '[로컬 LLM용 M5 Pro vs M5 Max: 사양과 속도 추정치](/ko/local-llms/m5-pro-max-llm-benchmarks-2026)',
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

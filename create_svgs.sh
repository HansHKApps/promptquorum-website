#!/bin/bash

# Setup complexity comparison (3 panels)
cat > public/images/mac-vs-windows-vs-linux-local-llm-setup-en.svg << 'EOF'
<svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg"><metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:Description rdf:about=""><dc:creator>PromptQuorum</dc:creator><dc:rights>© 2025 PromptQuorum. All rights reserved.</dc:rights><dc:source>https://www.promptquorum.com</dc:source></rdf:Description></rdf:RDF></metadata>
  <rect width="800" height="350" fill="#FFFFFF"/>
  <text x="400" y="32" font-size="20" font-weight="700" fill="#1C1B1F" text-anchor="middle">Setup Time & Complexity</text>
  <rect x="28" y="50" width="230" height="260" fill="#F0F4FF" stroke="#34A853" stroke-width="2" rx="8"/>
  <text x="143" y="85" font-size="14" font-weight="700" fill="#1C1B1F" text-anchor="middle">macOS</text>
  <text x="143" y="130" font-size="32" font-weight="700" fill="#34A853" text-anchor="middle">6 min</text>
  <text x="143" y="165" font-size="11" font-weight="600" fill="#49454F" text-anchor="middle">Zero terminal</text>
  <text x="143" y="185" font-size="11" font-weight="600" fill="#49454F" text-anchor="middle">GUI only</text>
  <rect x="48" y="210" width="190" height="24" rx="3" fill="#34A853"/><text x="143" y="228" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">Simplest</text>
  <rect x="284" y="50" width="230" height="260" fill="#FFFDF5" stroke="#F4B400" stroke-width="2" rx="8"/>
  <text x="399" y="85" font-size="14" font-weight="700" fill="#1C1B1F" text-anchor="middle">Windows</text>
  <text x="399" y="130" font-size="32" font-weight="700" fill="#F4B400" text-anchor="middle">15–20 min</text>
  <text x="399" y="165" font-size="11" font-weight="600" fill="#49454F" text-anchor="middle">GUI + optional CLI</text>
  <text x="399" y="185" font-size="11" font-weight="600" fill="#49454F" text-anchor="middle">NVIDIA drivers</text>
  <rect x="304" y="210" width="190" height="24" rx="3" fill="#F4B400"/><text x="399" y="228" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">Moderate</text>
  <rect x="540" y="50" width="230" height="260" fill="#FFF1F0" stroke="#EA4335" stroke-width="2" rx="8"/>
  <text x="655" y="85" font-size="14" font-weight="700" fill="#1C1B1F" text-anchor="middle">Linux</text>
  <text x="655" y="130" font-size="32" font-weight="700" fill="#EA4335" text-anchor="middle">40–70 min</text>
  <text x="655" y="165" font-size="11" font-weight="600" fill="#49454F" text-anchor="middle">Terminal required</text>
  <text x="655" y="185" font-size="11" font-weight="600" fill="#49454F" text-anchor="middle">CUDA setup</text>
  <rect x="560" y="210" width="190" height="24" rx="3" fill="#EA4335"/><text x="655" y="228" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">Complex</text>
  <text x="792" y="345" font-family="system-ui,sans-serif" font-size="9" fill="#BBBBBB" text-anchor="end">promptquorum.com</text>
</svg>
EOF

# Performance table
cat > public/images/mac-vs-windows-vs-linux-local-llm-performance-en.svg << 'EOF'
<svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg"><metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:Description rdf:about=""><dc:creator>PromptQuorum</dc:creator><dc:rights>© 2025 PromptQuorum. All rights reserved.</dc:rights><dc:source>https://www.promptquorum.com</dc:source></rdf:Description></rdf:RDF></metadata>
  <rect width="800" height="350" fill="#FFFFFF"/>
  <text x="400" y="32" font-size="20" font-weight="700" fill="#1C1B1F" text-anchor="middle">Inference Speed: Model & Hardware</text>
  <line x1="18" y1="52" x2="782" y2="52" stroke="#E8DEF8" stroke-width="1.5"/>
  <text x="50" y="72" font-size="12" font-weight="700" fill="#79747E">Setup</text>
  <text x="280" y="72" font-size="12" font-weight="700" fill="#79747E">Model</text>
  <text x="450" y="72" font-size="12" font-weight="700" fill="#79747E">Speed</text>
  <text x="600" y="72" font-size="12" font-weight="700" fill="#79747E">Rating</text>
  <line x1="18" y1="80" x2="782" y2="80" stroke="#E8DEF8" stroke-width="1.5"/>
  <text x="50" y="108" font-size="11" font-weight="600" fill="#1C1B1F">M5 Pro 64GB</text>
  <text x="280" y="108" font-size="11" fill="#49454F">70B Q4</text>
  <text x="450" y="108" font-size="11" fill="#49454F">15–20 tok/s</text>
  <rect x="625" y="94" width="110" height="24" rx="3" fill="#F4B400"/><text x="680" y="108" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">Fair</text>
  <line x1="18" y1="118" x2="782" y2="118" stroke="#F7F2FA" stroke-width="1"/>
  <text x="50" y="146" font-size="11" font-weight="600" fill="#1C1B1F">M5 Max 128GB</text>
  <text x="280" y="146" font-size="11" fill="#49454F">70B Q8</text>
  <text x="450" y="146" font-size="11" fill="#49454F">25–35 tok/s</text>
  <rect x="625" y="132" width="110" height="24" rx="3" fill="#34A853"/><text x="680" y="146" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">Good</text>
  <line x1="18" y1="156" x2="782" y2="156" stroke="#F7F2FA" stroke-width="1"/>
  <text x="50" y="184" font-size="11" font-weight="600" fill="#1C1B1F">RTX 5090 Win</text>
  <text x="280" y="184" font-size="11" fill="#49454F">70B</text>
  <text x="450" y="184" font-size="11" fill="#49454F">40–50 tok/s</text>
  <rect x="625" y="170" width="110" height="24" rx="3" fill="#34A853"/><text x="680" y="184" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">Best</text>
  <line x1="18" y1="194" x2="782" y2="194" stroke="#F7F2FA" stroke-width="1"/>
  <text x="50" y="222" font-size="11" font-weight="600" fill="#1C1B1F">RTX 5090 Win</text>
  <text x="280" y="222" font-size="11" fill="#49454F">8B</text>
  <text x="450" y="222" font-size="11" fill="#49454F">180+ tok/s</text>
  <rect x="625" y="208" width="110" height="24" rx="3" fill="#34A853"/><text x="680" y="222" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">Best</text>
  <line x1="18" y1="232" x2="782" y2="232" stroke="#F7F2FA" stroke-width="1"/>
  <text x="50" y="260" font-size="11" font-weight="600" fill="#1C1B1F">RTX 5090 Linux</text>
  <text x="280" y="260" font-size="11" fill="#49454F">70B</text>
  <text x="450" y="260" font-size="11" fill="#49454F">42–53 tok/s</text>
  <rect x="625" y="246" width="110" height="24" rx="3" fill="#34A853"/><text x="680" y="260" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">Best</text>
  <line x1="18" y1="270" x2="782" y2="270" stroke="#F7F2FA" stroke-width="1"/>
  <text x="50" y="295" font-size="10" font-weight="600" fill="#6750A4">💡 RTX 5090: 40–50 tok/s at 70B. M5 Max: 25–35 tok/s. M5 Pro: 15–20 tok/s.</text>
  <text x="792" y="345" font-family="system-ui,sans-serif" font-size="9" fill="#BBBBBB" text-anchor="end">promptquorum.com</text>
</svg>
EOF

# Tool support matrix
cat > public/images/mac-vs-windows-vs-linux-local-llm-tool-support-en.svg << 'EOF'
<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg"><metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:Description rdf:about=""><dc:creator>PromptQuorum</dc:creator><dc:rights>© 2025 PromptQuorum. All rights reserved.</dc:rights><dc:source>https://www.promptquorum.com</dc:source></rdf:Description></rdf:RDF></metadata>
  <rect width="800" height="360" fill="#FFFFFF"/>
  <text x="400" y="32" font-size="20" font-weight="700" fill="#1C1B1F" text-anchor="middle">Tools & Framework Support by OS</text>
  <line x1="18" y1="52" x2="782" y2="52" stroke="#E8DEF8" stroke-width="1.5"/>
  <text x="50" y="72" font-size="12" font-weight="700" fill="#79747E">Tool</text>
  <text x="250" y="72" font-size="12" font-weight="700" fill="#79747E">macOS</text>
  <text x="450" y="72" font-size="12" font-weight="700" fill="#79747E">Windows</text>
  <text x="650" y="72" font-size="12" font-weight="700" fill="#79747E">Linux</text>
  <line x1="18" y1="80" x2="782" y2="80" stroke="#E8DEF8" stroke-width="1.5"/>
  <text x="50" y="108" font-size="11" font-weight="600" fill="#1C1B1F">Ollama</text>
  <rect x="220" y="92" width="60" height="20" rx="3" fill="#34A853"/><text x="250" y="107" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✓</text>
  <rect x="420" y="92" width="60" height="20" rx="3" fill="#34A853"/><text x="450" y="107" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✓</text>
  <rect x="620" y="92" width="60" height="20" rx="3" fill="#34A853"/><text x="650" y="107" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✓</text>
  <line x1="18" y1="118" x2="782" y2="118" stroke="#F7F2FA" stroke-width="1"/>
  <text x="50" y="146" font-size="11" font-weight="600" fill="#1C1B1F">LM Studio</text>
  <rect x="220" y="130" width="60" height="20" rx="3" fill="#34A853"/><text x="250" y="145" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✓</text>
  <rect x="420" y="130" width="60" height="20" rx="3" fill="#34A853"/><text x="450" y="145" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✓</text>
  <rect x="620" y="130" width="60" height="20" rx="3" fill="#F4B400"/><text x="650" y="145" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">🐳</text>
  <line x1="18" y1="156" x2="782" y2="156" stroke="#F7F2FA" stroke-width="1"/>
  <text x="50" y="184" font-size="11" font-weight="600" fill="#1C1B1F">vLLM</text>
  <rect x="220" y="168" width="60" height="20" rx="3" fill="#F4B400"/><text x="250" y="183" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">~</text>
  <rect x="420" y="168" width="60" height="20" rx="3" fill="#34A853"/><text x="450" y="183" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✓</text>
  <rect x="620" y="168" width="60" height="20" rx="3" fill="#34A853"/><text x="650" y="183" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✓✓</text>
  <line x1="18" y1="194" x2="782" y2="194" stroke="#F7F2FA" stroke-width="1"/>
  <text x="50" y="222" font-size="11" font-weight="600" fill="#1C1B1F">NVIDIA CUDA</text>
  <rect x="220" y="206" width="60" height="20" rx="3" fill="#EA4335"/><text x="250" y="221" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✗</text>
  <rect x="420" y="206" width="60" height="20" rx="3" fill="#34A853"/><text x="450" y="221" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✓</text>
  <rect x="620" y="206" width="60" height="20" rx="3" fill="#34A853"/><text x="650" y="221" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✓</text>
  <line x1="18" y1="232" x2="782" y2="232" stroke="#F7F2FA" stroke-width="1"/>
  <text x="50" y="260" font-size="11" font-weight="600" fill="#1C1B1F">Fine-tuning</text>
  <rect x="220" y="244" width="60" height="20" rx="3" fill="#EA4335"/><text x="250" y="259" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✗</text>
  <rect x="420" y="244" width="60" height="20" rx="3" fill="#34A853"/><text x="450" y="259" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✓</text>
  <rect x="620" y="244" width="60" height="20" rx="3" fill="#34A853"/><text x="650" y="259" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✓✓</text>
  <line x1="18" y1="270" x2="782" y2="270" stroke="#F7F2FA" stroke-width="1"/>
  <text x="50" y="298" font-size="10" font-weight="600" fill="#6750A4">✓=Full  🐳=Docker only  ~=Limited  ✗=No</text>
  <text x="792" y="355" font-family="system-ui,sans-serif" font-size="9" fill="#BBBBBB" text-anchor="end">promptquorum.com</text>
</svg>
EOF

# TCO table
cat > public/images/mac-vs-windows-vs-linux-local-llm-tco-en.svg << 'EOF'
<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg"><metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:Description rdf:about=""><dc:creator>PromptQuorum</dc:creator><dc:rights>© 2025 PromptQuorum. All rights reserved.</dc:rights><dc:source>https://www.promptquorum.com</dc:source></rdf:Description></rdf:RDF></metadata>
  <rect width="800" height="420" fill="#FFFFFF"/>
  <text x="400" y="32" font-size="20" font-weight="700" fill="#1C1B1F" text-anchor="middle">3-Year Total Cost of Ownership</text>
  <line x1="18" y1="52" x2="782" y2="52" stroke="#E8DEF8" stroke-width="1.5"/>
  <text x="50" y="72" font-size="11" font-weight="700" fill="#79747E">Config</text>
  <text x="280" y="72" font-size="11" font-weight="700" fill="#79747E">Year 1</text>
  <text x="440" y="72" font-size="11" font-weight="700" fill="#79747E">3-Year Total</text>
  <text x="620" y="72" font-size="11" font-weight="700" fill="#79747E">Best For</text>
  <line x1="18" y1="80" x2="782" y2="80" stroke="#E8DEF8" stroke-width="1.5"/>
  <text x="50" y="108" font-size="10" font-weight="600" fill="#1C1B1F">Mac mini M4 Pro 64GB</text>
  <text x="280" y="108" font-size="10" fill="#49454F">$2,299</text>
  <text x="440" y="108" font-size="10" font-weight="600" fill="#1C1B1F">$2,319</text>
  <rect x="657" y="90" width="116" height="24" rx="3" fill="#34A853"/><text x="715" y="108" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✓</text>
  <line x1="18" y1="118" x2="782" y2="118" stroke="#F7F2FA" stroke-width="1"/>
  <text x="50" y="146" font-size="10" font-weight="600" fill="#1C1B1F">MacBook Pro M5 Pro 64GB</text>
  <text x="280" y="146" font-size="10" fill="#49454F">$2,499</text>
  <text x="440" y="146" font-size="10" font-weight="600" fill="#1C1B1F">$2,529</text>
  <rect x="657" y="128" width="116" height="24" rx="3" fill="#34A853"/><text x="715" y="146" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✓</text>
  <line x1="18" y1="156" x2="782" y2="156" stroke="#F7F2FA" stroke-width="1"/>
  <text x="50" y="184" font-size="10" font-weight="600" fill="#1C1B1F">MacBook Pro M5 Max 128GB</text>
  <text x="280" y="184" font-size="10" fill="#49454F">$3,499</text>
  <text x="440" y="184" font-size="10" font-weight="600" fill="#1C1B1F">$3,529</text>
  <rect x="657" y="166" width="116" height="24" rx="3" fill="#34A853"/><text x="715" y="184" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✓</text>
  <line x1="18" y1="194" x2="782" y2="194" stroke="#F7F2FA" stroke-width="1"/>
  <text x="50" y="222" font-size="10" font-weight="600" fill="#1C1B1F">Windows + RTX 5090 32GB</text>
  <text x="280" y="222" font-size="10" fill="#49454F">$2,500</text>
  <text x="440" y="222" font-size="10" font-weight="600" fill="#1C1B1F">$2,620</text>
  <rect x="657" y="204" width="116" height="24" rx="3" fill="#34A853"/><text x="715" y="222" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✓</text>
  <line x1="18" y1="232" x2="782" y2="232" stroke="#F7F2FA" stroke-width="1"/>
  <text x="50" y="260" font-size="10" font-weight="600" fill="#1C1B1F">Windows + RTX 5060 Ti 16GB</text>
  <text x="280" y="260" font-size="10" fill="#49454F">$1,650</text>
  <text x="440" y="260" font-size="10" font-weight="600" fill="#1C1B1F">$1,730</text>
  <rect x="657" y="242" width="116" height="24" rx="3" fill="#34A853"/><text x="715" y="260" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✓</text>
  <line x1="18" y1="270" x2="782" y2="270" stroke="#F7F2FA" stroke-width="1"/>
  <rect x="28" y="283" width="752" height="44" fill="#E8DEF8" opacity="0.5" rx="4"/>
  <text x="50" y="308" font-size="10" font-weight="700" fill="#1C1B1F">Linux + RTX 5060 Ti 16GB</text>
  <text x="280" y="308" font-size="10" fill="#49454F">$750</text>
  <text x="440" y="308" font-size="10" font-weight="700" fill="#34A853">$810</text>
  <rect x="657" y="290" width="116" height="24" rx="3" fill="#34A853"/><text x="715" y="308" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">🏆</text>
  <text x="50" y="346" font-size="10" font-weight="600" fill="#1C1B1F">Linux + RTX 5090 32GB</text>
  <text x="280" y="346" font-size="10" fill="#49454F">$1,400</text>
  <text x="440" y="346" font-size="10" font-weight="600" fill="#1C1B1F">$1,500</text>
  <rect x="657" y="328" width="116" height="24" rx="3" fill="#34A853"/><text x="715" y="346" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">✓</text>
  <text x="50" y="385" font-size="11" font-weight="600" fill="#6750A4">💡 Cheapest: Linux + RTX 5060 Ti $810. Best value: Linux + RTX 5090 $1,500.</text>
  <text x="792" y="415" font-family="system-ui,sans-serif" font-size="9" fill="#BBBBBB" text-anchor="end">promptquorum.com</text>
</svg>
EOF

# OS summary
cat > public/images/mac-vs-windows-vs-linux-local-llm-os-summary-en.svg << 'EOF'
<svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg"><metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:Description rdf:about=""><dc:creator>PromptQuorum</dc:creator><dc:rights>© 2025 PromptQuorum. All rights reserved.</dc:rights><dc:source>https://www.promptquorum.com</dc:source></rdf:Description></rdf:RDF></metadata>
  <rect width="800" height="350" fill="#FFFFFF"/>
  <text x="400" y="32" font-size="20" font-weight="700" fill="#1C1B1F" text-anchor="middle">macOS vs Windows vs Linux for Local LLMs</text>
  <rect x="28" y="60" width="230" height="260" fill="#F0F4FF" stroke="#6750A4" stroke-width="2" rx="8"/>
  <text x="143" y="90" font-size="13" font-weight="700" fill="#6750A4">macOS</text>
  <text x="143" y="115" font-size="11" font-weight="700" fill="#1C1B1F">Best for:</text>
  <text x="143" y="135" font-size="10" fill="#49454F" text-anchor="middle">Privacy +</text>
  <text x="143" y="155" font-size="10" fill="#49454F" text-anchor="middle">Portability</text>
  <text x="143" y="180" font-size="11" font-weight="700" fill="#1C1B1F">Tradeoff:</text>
  <text x="143" y="200" font-size="10" fill="#49454F" text-anchor="middle">20–30% slower</text>
  <text x="143" y="220" font-size="10" fill="#49454F" text-anchor="middle">than NVIDIA</text>
  <text x="143" y="245" font-size="10" font-weight="600" fill="#6750A4">From $1,099</text>
  <rect x="284" y="60" width="230" height="260" fill="#FFFDF5" stroke="#F4B400" stroke-width="2" rx="8"/>
  <text x="399" y="90" font-size="13" font-weight="700" fill="#F4B400">Windows</text>
  <text x="399" y="115" font-size="11" font-weight="700" fill="#1C1B1F">Best for:</text>
  <text x="399" y="135" font-size="10" fill="#49454F" text-anchor="middle">Max GPU</text>
  <text x="399" y="155" font-size="10" fill="#49454F" text-anchor="middle">Performance</text>
  <text x="399" y="180" font-size="11" font-weight="700" fill="#1C1B1F">Tradeoff:</text>
  <text x="399" y="200" font-size="10" fill="#49454F" text-anchor="middle">Driver</text>
  <text x="399" y="220" font-size="10" fill="#49454F" text-anchor="middle">Complexity</text>
  <text x="399" y="245" font-size="10" font-weight="600" fill="#F4B400">GPU from $450</text>
  <rect x="540" y="60" width="230" height="260" fill="#F0FFF0" stroke="#34A853" stroke-width="2" rx="8"/>
  <text x="655" y="90" font-size="13" font-weight="700" fill="#34A853">Linux</text>
  <text x="655" y="115" font-size="11" font-weight="700" fill="#1C1B1F">Best for:</text>
  <text x="655" y="135" font-size="10" fill="#49454F" text-anchor="middle">Cost +</text>
  <text x="655" y="155" font-size="10" fill="#49454F" text-anchor="middle">Control</text>
  <text x="655" y="180" font-size="11" font-weight="700" fill="#1C1B1F">Tradeoff:</text>
  <text x="655" y="200" font-size="10" fill="#49454F" text-anchor="middle">40–70 min</text>
  <text x="655" y="220" font-size="10" fill="#49454F" text-anchor="middle">Setup</text>
  <text x="655" y="245" font-size="10" font-weight="600" fill="#34A853">$810 total</text>
  <text x="792" y="345" font-family="system-ui,sans-serif" font-size="9" fill="#BBBBBB" text-anchor="end">promptquorum.com</text>
</svg>
EOF

echo "✓ All 6 English SVG images created"

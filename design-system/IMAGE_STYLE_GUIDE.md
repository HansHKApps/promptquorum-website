# Image & SVG Style Guide

Guidelines for creating images and SVGs that match the PromptQuorum website design system.

## Brand Principles

### PromptQuorum Brand Identity

PromptQuorum is a **modern, sophisticated AI tool** focused on prompt dispatch and consensus. The visual identity should reflect:

- **Professional elegance** — Not playful or casual
- **Technical credibility** — Diagrams and explanations that technical users trust
- **Innovation & clarity** — Modern aesthetic, clear communication
- **Light & accessible** — Always prioritize readability and accessibility
- **Purpose-driven** — Every image serves the article's educational goal

### Voice in Imagery
- **Educational, not decorative** — Images teach, illustrate, and reinforce content
- **Accurate & truthful** — Reflect real-world constraints and capabilities
- **Inclusive** — Accessible to all users (color contrast, text size, alt text)
- **Premium quality** — Consistent with PromptQuorum's brand positioning

## Image Approval Process

**All images must follow this 5-step approval workflow:**

### Step 1: Create English Version
- Design the image following all guidelines in this document
- Use English labels, captions, and content
- Verify: Brand colors, text size (≥13px), readability, alignment
- File: Save as `{image-name}-en.svg`

### Step 2: Present for Review
- Show the English SVG to the reviewer/stakeholder
- **Always provide FULL file path link** — format: `file:///Users/hanskuepper/promptquorum-website/public/images/{filename}`
  - Example: `file:///Users/hanskuepper/promptquorum-website/public/images/quantization-levels-comparison-en.svg`
  - Make it clickable in markdown: `[Open Image](file:///...)`
- Include: Purpose (what concept it illustrates), placement in article, caption
- Display in browser or as preview to verify rendering

### Step 3: Get Approval or Request Changes
**Reviewer response options:**
- ✅ **"Approve"** → Proceed to Step 4
- 🔄 **"Changes needed"** → Specify what to adjust:
  - Text clarity, sizing, color, layout
  - Content accuracy, messaging
  - Alignment with article tone
  
**If changes requested:** Return to Step 1, update English version, repeat Step 2

### Step 4: Final Approval on English Version
- Incorporate all reviewer feedback
- Confirm final English version meets all guidelines
- Get sign-off: **"English approved for localization"**

### Step 5: Create Multi-Language Variants
- Create separate SVG files for each language: `-de.svg`, `-fr.svg`, `-ja.svg`, `-zh.svg`
- Follow language-specific text sizing rules (see Multi-Language Support section)
- Translate captions and labels using approved terminology
- Verify text layout fits for each language
- **Provide FULL file path links for each variant** when presenting:
  - `file:///Users/hanskuepper/promptquorum-website/public/images/image-name-de.svg`
  - `file:///Users/hanskuepper/promptquorum-website/public/images/image-name-fr.svg`
  - `file:///Users/hanskuepper/promptquorum-website/public/images/image-name-ja.svg`
  - `file:///Users/hanskuepper/promptquorum-website/public/images/image-name-zh.svg`
- No additional approval needed per language (if English approved)

**File naming pattern:**
```
image-name-en.svg    (English — approved baseline)
image-name-de.svg    (German)
image-name-fr.svg    (French)
image-name-ja.svg    (Japanese)
image-name-zh.svg    (Chinese Simplified)
```

## Color Palette

Always use colors from the website's design system:

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Deep Violet) | #6750A4 | Main accents, buttons, primary elements |
| Primary Light | #E8DEF8 | Backgrounds, borders, highlights |
| Tertiary (Rose) | #7D5260 | Secondary accents, alternative states |
| Text Primary | #1C1B1F | Main text, headings |
| Text Secondary | #49454F | Supporting text, labels |
| Text Muted | #79747E | Disabled, subtle text |
| Surface | #F7F2FA | Light backgrounds, cards |
| White | #FFFFFF | Main background |

## Design Rules

### Theme
- **Light theme only** — No dark backgrounds
- Light, airy, elegant aesthetic
- High contrast for readability
- Soft, warm color palette

### Backgrounds
- Primary background: **White (#FFFFFF)**
- Secondary background: **#F7F2FA** (light lavender)
- Highlight areas: **#E8DEF8** (very light lavender)
- **Never** use dark backgrounds (#0f172a, #1e293b, etc.)

### Text

#### Sizing Rules
- **Heading font size:** 18–22px, font-weight: 700
- **Body text:** 13–14px, font-weight: 500–600
- **Monospace text (code/terminal):** 14–16px
- **Labels & annotations:** 11–13px (never below 11px)
- **⚠️ CRITICAL: Minimum text size:** The smallest text in an image **must never be smaller than the article body text** (13px). All text, including labels and captions, must be readable at a glance.

#### Text Styling
- **Text color:** 
  - Primary text: #1C1B1F
  - Secondary text: #49454F
  - Muted text: #79747E
- **Letter spacing:** 0.3–0.5px for readability
- **Font weight:** Increase weight (600–700) for smaller text to maintain readability

### Borders & Strokes
- **Border color:** #E8DEF8 (light lavender)
- **Accent border:** #6750A4 (violet)
- **Stroke width:** 1.5–2px for main elements
- **Border radius:** 6–12px for rounded corners

### Accents & Highlights
- **Primary accent:** #6750A4 (violet) — use for buttons, active states, key highlights
- **Secondary accent:** #7D5260 (rose) — use for alternative info, warnings
- **Success/positive:** #34A853 (green)
- **Warning/attention:** #F4B400 (gold)
- **Error/negative:** #E67C73 (red)

### Shadows & Depth
- Use subtle shadows for floating elements
- `filter="url(#shadow)"` with `<feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.08"/>`
- Avoid harsh shadows

### Icons & Illustrations
- Use primary color (#6750A4) for main icons
- Use rose (#7D5260) for secondary/alternative icons
- Size: appropriate to context (12–24px for inline, 48–64px for prominent)
- Stroke width: 1.5–2px

## Content & Relevance Rules

### Article Connection (Critical)

**Every image must directly relate to the article content — never use generic symbols or decorations.**

#### Requirements:
1. **Show, don't abstract** — If explaining how thermal throttling works, show a *real scenario* (laptop with stand), not a generic thermometer icon
2. **Illustrate the exact concept** — The image should teach the same thing as the surrounding text
3. **Include contextual details** — Add labels, measurements, and real-world constraints that match the article
4. **Reinforce understanding** — Readers should gain new insight from the image beyond just seeing a pretty picture

#### Examples:

✅ **Good:** "Ollama Terminal" image shows actual terminal output with real command, model loading feedback, and speed metrics — readers see exactly what running a local LLM looks like

✅ **Good:** "Apple Silicon Unified Memory" diagram shows CPU/GPU cores, shared memory pool, and contrast with Windows discrete GPU — teaches the architectural difference that makes Apple faster

✅ **Good:** "Laptop Stand" shows side-by-side before/after with airflow arrows and throttling time measurements — explains *why* the stand helps and by how much

❌ **Bad:** A generic laptop icon with no context  
❌ **Bad:** Abstract memory visualization with no real-world numbers  
❌ **Bad:** Thermal image that doesn't connect to the article's throttling discussion

### Placement Rules

- **Image placement:** Appears *after* content paragraphs that introduce the concept (user understands context first)
- **Reinforcement:** Image solidifies understanding of what was just read
- **Caption:** One sentence that ties the image directly to the article topic (not generic description)

Example caption (from Picture 2):
> "Apple Silicon unified memory lets the GPU access the full RAM pool — a 13B model fits entirely in GPU memory on an 18 GB M3 Pro."

This caption directly reinforces the article's claim about why Apple Silicon is better for local LLMs.

## SVG-Specific Guidelines

### Structure
```xml
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <!-- White background -->
  <rect width="800" height="400" fill="#FFFFFF"/>
  
  <!-- Content here -->
</svg>
```

### Typography in SVG
```xml
<!-- Heading -->
<text x="400" y="35" 
  font-family="system-ui, -apple-system, sans-serif" 
  font-size="20" 
  font-weight="700" 
  fill="#1C1B1F" 
  text-anchor="middle">
  Title
</text>

<!-- Body text -->
<text x="60" y="100" 
  font-family="'SF Mono', 'Monaco', monospace" 
  font-size="14" 
  fill="#49454F" 
  letter-spacing="0.3"
  font-weight="500">
  Content
</text>
```

### Recommended Font Families
- **UI Text:** `system-ui, -apple-system, sans-serif`
- **Monospace/Code:** `'SF Mono', 'Monaco', monospace` or `'Jetbrains Mono'`

## Visual Examples

### Terminal/Code Window
- White background (#FFFFFF)
- Light lavender border (#E8DEF8)
- Violet accents (#6750A4) for highlights
- Monospace font, 14–16px
- Dark text (#1C1B1F) not green/bright colors

### Diagrams & Charts
- Light lavender (#E8DEF8) for background areas
- Violet (#6750A4) for primary elements
- Rose (#7D5260) for secondary elements
- Subtle shadows for depth
- White background container

### Comparison Layouts
- Use color differentiation (violet vs rose)
- Consistent sizing and alignment
- Clear labels in readable font
- Dividers in light lavender (#E8DEF8)

## File Format & Optimization

### SVG Files
- Keep in `public/images/` directory
- Filename: lowercase, kebab-case (e.g., `laptop-stand-airflow.svg`)
- Viewbox: typically `"0 0 800 400"` or `"0 0 800 350"`
- Always include `xmlns="http://www.w3.org/2000/svg"`

### File Size
- Keep SVGs under 10KB when possible
- Minimize precision in coordinates (2 decimal places)
- Remove unused elements and attributes

## Accessibility & SEO/GEO/AEO Optimization

### Alt Text & Captions (Critical for SEO/GEO/AEO)

All images MUST have descriptive captions in `content.ts` as `imageCaption`. This serves multiple purposes:

#### Purpose:
- **Accessibility (WCAG)** — Screen readers and visually impaired users
- **SEO** — Google Images, search results, indexing
- **GEO** — Geographic optimization for AI crawlers (Perplexity, ChatGPT Browse)
- **AEO** — AI Engine Optimization for LLM crawlers and embeddings

#### Alt Text Rules:
1. **Descriptive, not generic** — ❌ "image" or "diagram" | ✅ "Apple Silicon unified memory diagram showing M3 Pro with 18GB shared access to GPU"
2. **Include key metrics** — If the image shows numbers, include them: "50–80 tokens/sec", "18 GB memory", "10 minute improvement"
3. **Answer the "why"** — Explain what insight the reader gains: "why Apple Silicon is faster" not just "Apple chip"
4. **Technical accuracy** — Use correct terminology that matches the article
5. **Concise but complete** — One sentence (80–120 characters recommended)

#### Example Alt Texts (from current images):

✅ **Good:**
> "Apple Silicon unified memory diagram showing M3 Pro GPU accessing full 18GB pool versus Windows RTX 4060 limited to 8GB VRAM"

✅ **Good:**
> "Laptop stand thermal management showing 2–3cm elevation delaying throttling from 10 minutes to 20+ minutes with airflow visualization"

✅ **Good:**
> "Terminal window running Ollama with Mistral 7B model at 22.4 tokens/sec on CPU using Q4_K_M quantization"

❌ **Bad:**
> "Picture of Apple and Windows comparison"

❌ **Bad:**
> "Laptop diagram"

#### Implementation in content.ts:
```typescript
canYouRun: {
  title: '...',
  content: [...],
  image: '/images/ollama-terminal.svg',
  // This caption serves as both visible caption AND alt text for SEO/AEO
  imageCaption: 'Ollama running Mistral 7B on a MacBook — 22 tokens/sec on CPU at Q4_K_M quantization.',
},
```

### Color Contrast & Accessibility

- Use sufficient color contrast (WCAG AA minimum: 4.5:1 for text)
- Don't rely on color alone to convey information (use labels, patterns, text)
- Include text labels for all key elements
- Test contrast with tools: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### SEO/GEO Keywords in Alt Text

When writing `imageCaption` (which serves as alt text):
- Include **primary keyword** from article title (e.g., "local LLM", "thermal throttling")
- Include **secondary keywords** relevant to the section (e.g., "Apple Silicon", "M3 Pro", "tokens/sec")
- Use **natural language**, not keyword stuffing
- Example: "Apple Silicon M3 Pro unified memory architecture showing GPU access to full 18GB for running local LLM models"

### Structured Data for Images

The website uses JSON-LD schema markup. For proper AEO:
- Images are referenced in article `schema` metadata
- Alt text is picked up by AI crawlers (Perplexity, ChatGPT, Claude, etc.)
- Ensure `imageCaption` is semantic and accurate for AI understanding

### Multi-Language & AEO Considerations

**Current approach:** Images are language-agnostic; captions are English only.

**For future translation:**
- If articles are translated to de/fr/ja/zh, consider translating image captions too
- SVGs themselves (visual, no text) work across all languages
- Alt text translation improves GEO/AEO for non-English markets

## Multi-Language Support (5 Languages)

PromptQuorum supports **5 languages:** en, de, fr, ja, zh

### Language Requirements for Images

#### Current State
- Images: **Shared across all languages** (language-agnostic)
- Image captions: **English only** (in content.ts `imageCaption`)
- Text in SVGs: **English only**

#### Future Target
- **Images should be translated/localized** where text appears in the SVG
- **Separate SVG files per language** for text-heavy diagrams
- **Captions translated** to all 5 languages
- **Ensure text fits** within image bounds for each language

### When to Create Language-Specific Images

#### Keep One Version (No Translation Needed)
- ✅ Purely visual diagrams without text (architectural blocks, arrows, shapes)
- ✅ Numbers and metrics (these are universal: "18 GB", "50–80 tok/s")
- ✅ Code/terminal output (code is language-independent)
- ✅ Icons and symbols with clear meaning

#### Create Language-Specific Versions
- ❌ Terminal windows with English commands → Create separate versions
- ❌ Labels and annotations → Localize for each language
- ❌ UI mockups with English text → Create localized variants
- ❌ Instructions or explanatory text in images

### File Naming for Localized Images

**Pattern:** `{name}-{language}.svg`

Examples:
```
ollama-terminal-en.svg    → English version
ollama-terminal-de.svg    → German version
ollama-terminal-fr.svg    → French version
ollama-terminal-ja.svg    → Japanese version
ollama-terminal-zh.svg    → Chinese (Simplified) version

apple-silicon-unified-memory.svg  → Keep single version (visual only)
laptop-stand-airflow.svg           → Keep single version (visual only)
```

### Text Sizing for Different Languages

Different languages have different space requirements:

| Language | Average Word Length | Text Width | Font Size | Notes |
|----------|-------------------|-----------|-----------|-------|
| **en** | 4.7 chars | Standard | 14–16px | Baseline |
| **de** | 5.8 chars | +20–30% wider | 13–15px | Longer words (Thermal-Drosseln) |
| **fr** | 5.1 chars | +10–15% wider | 14–15px | Moderate |
| **ja** | 2–3 chars per word | Compact | 12–14px | Vertical space needed, each character is wider |
| **zh** | 2–3 chars per word | Compact | 12–14px | Similar to Japanese, dense writing |

**Rule:** Always test text layout in each language. German will need wider bounds, Japanese/Chinese may need smaller font or adjusted spacing.

### Implementation: Localized Images in content.ts

```typescript
// For language-agnostic images (one version)
canYouRun: {
  title: '...',
  content: [...],
  image: '/images/ollama-terminal.svg',  // Single file for all languages
  imageCaption: 'Ollama running Mistral...',  // English caption
},

// For localized images (separate files per language)
// Future: If translated, use logic like:
// image: `/images/ollama-terminal-${lang}.svg`
// imageCaption: imageCaption[lang]  // Translated captions
```

### Translated Caption Examples

**Picture 1 (Ollama Terminal):**
- **en:** "Ollama running Mistral 7B on a MacBook — 22 tokens/sec on CPU at Q4_K_M quantization."
- **de:** "Ollama führt Mistral 7B auf einem MacBook aus — 22 Token/Sekunde auf CPU bei Q4_K_M-Quantisierung."
- **fr:** "Ollama exécutant Mistral 7B sur un MacBook — 22 tokens/sec sur CPU avec quantification Q4_K_M."
- **ja:** "MacBookでOllamaがMistral 7Bを実行中 — Q4_K_M量子化でCPUの場合は22トークン/秒。"
- **zh:** "在MacBook上运行Ollama和Mistral 7B — CPU下Q4_K_M量化时为22个令牌/秒。"

### Checklist for Multilingual Images

When creating or updating images for multi-language support:

- [ ] **English version created** with readable text (baseline)
- [ ] **German text tested** — Does it fit? May need 20–30% more width
- [ ] **French text tested** — Similar width to English
- [ ] **Japanese/Chinese tested** — Does vertical space fit? Font size appropriate?
- [ ] **Captions translated** to all 5 languages in content.ts
- [ ] **SVG files named** with language code: `{name}-{lang}.svg`
- [ ] **content.ts updated** with language-specific image paths (if needed)
- [ ] **Tested on mobile** — Ensure text is readable on smaller screens
- [ ] **Alt text translated** — Captions serve as alt text, so translation is critical for AEO

### Best Practices

1. **Start with English** — Design image with en, then adapt for other languages
2. **Extra space** — Leave 30–40% margin for German text expansion
3. **Font weight** — Increase for smaller languages (ja/zh) to maintain readability
4. **Number consistency** — Keep numbers (GB, tok/s) in English, don't translate
5. **Test early** — Create prototypes in all 5 languages before finalizing
6. **Consistent styling** — All language versions should have same colors, layout, branding

### Tools for Translation

- Use professional translation service or bilingual team members
- **NOT** Google Translate (can produce inaccurate technical terms)
- Verify with native speakers for accuracy and naturalness
- Keep technical terms consistent with article translation

## Data Accuracy & Sourcing

### For Technical Diagrams & Numbers
- **Verify all metrics** — Any speed numbers, RAM requirements, or technical specs must be accurate as of the article date
- **Source real data** — Base diagrams on actual benchmarks, not assumptions
- **Include measurement units** — Always label: "GB", "tokens/s", "°C", "min", etc.
- **Be precise** — If an article says "50–80 tok/s", show that range, not a generic representation

### Examples in Current Images:
- Picture 1: "22.4 tokens/sec" — specific, measurable
- Picture 2: "18 GB" unified memory on M3 Pro — accurate specification
- Picture 4: "10 min → 20+ min" — quantified improvement from using a stand

## Performance & Optimization

### File Size Guidelines
- Target: **Under 8KB per SVG**
- Max: **15KB** (compress if exceeding)
- Check file size: `ls -lh public/images/your-image.svg`

### Optimization Tips
- Use 2 decimal places for coordinates (not 10)
- Remove unused `<defs>` and filters
- Combine similar styled elements
- Minimize text node repetition
- Use CSS classes instead of inline styles for repeated patterns

### Rendering Performance
- Avoid complex filters on large elements
- Keep shadow effects subtle (low `flood-opacity`)
- Limit number of nested groups
- Test zoom/scale responsiveness in browser

## Localization Considerations

### For Multi-Language Support
- **Text in SVGs:** Currently **not translated** — use English only, or plan for separate SVG versions per language
- **Numbers & units:** Use universal conventions (not locale-specific)
- **Icons & symbols:** Avoid culture-specific imagery that won't translate
- **Future note:** If SVGs are translated, content.ts will need language-specific image paths

Current approach: Images are language-agnostic and reused across all language versions of articles.

## Creation & Tools

### Recommended Tools
- **Figma** — Best for designing + exporting clean SVG
- **Adobe Illustrator** — Professional option, good SVG export
- **Affinity Designer** — Lightweight alternative
- **Sketch** — Good for UI-style diagrams
- **Code editor** — For manual SVG refinement (VS Code with SVG preview extension)

### Best Practices for Exporting SVG
1. Use "Save as SVG" (not "Export")
2. Remove unnecessary metadata and groups
3. Disable automatic ID generation (causes bloat)
4. Export with default settings, then manually clean up in code editor
5. Test in browser before committing

### Manual SVG Cleanup
After exporting, review:
- Remove `<metadata>`, `<defs>` clutter
- Consolidate similar styled elements
- Use meaningful element IDs (not auto-generated)
- Keep `viewBox` consistent
- Verify colors match brand palette

## Common Mistakes to Avoid

❌ **Dark backgrounds** — Use light (#FFFFFF or #F7F2FA)  
❌ **Bright neon colors** — Use the defined palette  
❌ **Small text** — Minimum 13px, preferably 14–16px  
❌ **Low contrast** — Ensure text is readable against background  
❌ **Inconsistent colors** — Reference the palette above  
❌ **Heavy shadows** — Use subtle depth only  
❌ **Serif fonts** — Stick to system UI fonts and monospace  

## Example Implementation

See these files for reference:
- `public/images/ollama-terminal.svg` — Terminal window example
- `public/images/apple-silicon-unified-memory.svg` — Diagram example
- `public/images/laptop-stand-airflow.svg` — Comparison layout example

All three follow the light theme, use the color palette, and have readable text sizes.

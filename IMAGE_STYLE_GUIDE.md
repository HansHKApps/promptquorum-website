# SVG Image Style Guide

**Version:** 1.0  
**Updated:** 2026-04-16  
**Author:** PromptQuorum Design System  

---

## Overview

This guide documents the design system for SVG images embedded in PromptQuorum articles. All SVGs follow a consistent visual language: clean typography, Material Design 3 color palette, readable at 800×350px (default), and accessibility-compliant for all 5 languages.

---

## Canvas & Layout

| Property | Value |
|---|---|
| **Default viewBox** | `0 0 800 350` (landscape) |
| **Alt viewBox** | `0 0 800 420` (tall tables) or `0 0 800 360` (5-step flows) |
| **Background** | `#FFFFFF` (white) |
| **Drop shadow** | `feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.08"` (optional, for depth) |
| **Padding** | 18px left/right, variable top/bottom |

---

## Color Palette

**Semantic colors** (Material Design 3):

| Use | Color | Hex |
|---|---|---|
| Primary accent (Ollama, UI interactive) | Purple | `#6750A4` |
| Heading / dark text | Charcoal | `#1C1B1F` |
| Body text | Gray | `#49454F` |
| Label / muted text | Light Gray | `#79747E` |
| Dividers (prominent) | Light Purple | `#E8DEF8` |
| Dividers (subtle, row separators) | Very Light Purple | `#F7F2FA` |
| Success / positive | Green | `#34A853` |
| Warning / caution | Amber | `#F4B400` |
| Error / problem | Red | `#EA4335` |

**Secondary accent colors** (for tool/platform distinction):

| Platform | Color | Use |
|---|---|---|
| vLLM | `#1C1B1F` | Dark title text |
| LM Studio | `#7D5260` | Rose accent |

---

## Typography

### Font Stack

```
body: "system-ui, -apple-system, sans-serif"
code: "'SF Mono', Monaco, monospace"
```

### Sizes & Weights

| Element | Size | Weight | Fill |
|---|---|---|---|
| **Main title** | `20px` | `700` | `#1C1B1F` |
| **Subtitle / column header** | `16px` | `700` | `#6750A4` (accent) or `#1C1B1F` (dark) |
| **Row labels** | `12px` | `700` | `#79747E` (muted) |
| **Body text (cell content)** | `12px` | `400` | `#49454F` or `#1C1B1F` |
| **Code in cells** | `11px` | `700` (for monospace) | `#49454F` or `#1C1B1F` |
| **Code labels** | `11px` | `600` | `#49454F` |
| **Footer note** | `12px` | `600` | `#49454F` |
| **Step circles** | `11px` | `700` | `#FFFFFF` (on purple) |

---

## Components

### 1. Tables

**Structure:**
- Header row: bold, `#79747E` labels, `#E8DEF8` divider line below
- Data rows: standard weight, with `#F7F2FA` subtle divider between rows
- Optional highlight column: `#E8DEF8` light fill, `#6750A4` accent label

**Example:**
```svg
<!-- Header -->
<text x="50" y="65" font-size="12" font-weight="700" fill="#79747E">Model</text>
<line x1="18" y1="72" x2="782" y2="72" stroke="#E8DEF8" stroke-width="1.5"/>

<!-- Data row -->
<text x="50" y="98" font-size="12" fill="#1C1B1F">llama3.2:1b</text>
<text x="150" y="98" font-size="11" fill="#49454F">1B</text>
<line x1="18" y1="108" x2="782" y2="108" stroke="#F7F2FA" stroke-width="1"/>
```

### 2. Status Badges

**Colored circles** for system states:

```svg
<!-- Success -->
<circle cx="650" cy="92" r="14" fill="#34A853"/>
<text x="650" y="98" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">8 GB</text>

<!-- Warning -->
<circle cx="650" cy="212" r="14" fill="#F4B400"/>
<text x="650" y="218" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">32 GB</text>

<!-- Error -->
<circle cx="650" cy="248" r="14" fill="#EA4335"/>
<text x="650" y="254" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">64 GB</text>
```

### 3. Two-Panel Comparisons

**Structure:**
- Left panel: `stroke="#EA4335"` (error/problem), `fill="#FFFFFF"`
- Right panel: `stroke="#34A853"` (success/goal), `fill="#FFFFFF"`
- Both: `rx="6"` (rounded corners), `stroke-width="2"`
- Top accent bar: `height="4"`, same color as border, `rx="0"`

```svg
<rect x="28" y="55" width="340" height="280" rx="6" fill="#FFFFFF" stroke="#EA4335" stroke-width="2"/>
<rect x="28" y="55" width="340" height="4" rx="0" fill="#EA4335"/>
<text x="198" y="80" font-size="16" font-weight="700" fill="#EA4335" text-anchor="middle">CPU Only (Problem)</text>
```

### 4. Numbered Step Flows

**Structure:**
- Circles: `r="22"`, `fill="#6750A4"` (purple)
- Numbers inside: `24px` text, `font-weight="700"`, `fill="#FFFFFF"`
- Arrows between circles: `"→"` text, `font-size="20"`, `fill="#6750A4"`
- Step label: below circle, bold, `text-anchor="middle"`
- Subtext (commands): small code, `fill="#49454F"`, 2–3 lines below label

```svg
<circle cx="80" cy="100" r="22" fill="#6750A4"/>
<text x="80" y="108" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="middle">1</text>

<text x="80" y="145" font-size="13" font-weight="700" fill="#1C1B1F" text-anchor="middle">Check RAM</text>
<text x="80" y="165" font-family="'SF Mono', Monaco, monospace" font-size="10" fill="#49454F" text-anchor="middle">free -h</text>
<text x="80" y="178" font-family="'SF Mono', Monaco, monospace" font-size="10" fill="#49454F" text-anchor="middle">Activity Monitor</text>

<!-- Arrow -->
<text x="140" y="108" font-size="20" fill="#6750A4">→</text>
```

### 5. Error Reference Tables

**4-column layout** (Error # | Error Name | Symptom | Fix):
- Error # in purple badge circle
- Error name: bold, dark text
- Symptom: monospace, gray text
- Fix: purple text (accent color)
- Rows separated by `#F7F2FA` subtle lines

---

## Naming Convention

All SVG filenames follow this pattern:

```
{article-slug}-{concept}-{lang}.svg
```

**Examples:**
- `troubleshooting-error-symptoms-quick-ref-en.svg` — English error reference table
- `troubleshooting-ram-by-model-size-de.svg` — German RAM requirements chart
- `troubleshooting-gpu-detection-ja.svg` — Japanese GPU vs CPU comparison
- `troubleshooting-debug-steps-zh.svg` — Chinese 5-step debug flow

**Rules:**
1. Use **kebab-case** for all parts (no underscores, no spaces)
2. **Language suffix** (`-en`, `-de`, `-fr`, `-ja`, `-zh`) is **mandatory**
3. **Concept** describes the visual type: `error-symptoms`, `ram-by-model`, `gpu-detection`, `debug-steps`, etc.
4. Place all files in `public/images/`

---

## Usage in Articles

### Adding an Image to a Section

In `src/lib/local-llms/content.ts` (or equivalent article file):

```ts
sections: {
  sectionKey: {
    id: 'section-id',
    title: 'Section Title',
    content: '...',
    items: [...]

    // ADD THESE TWO FIELDS:
    image: '/images/troubleshooting-error-symptoms-quick-ref-en.svg',
    imageCaption: 'Brief description of what the image shows — include key numbers or keywords for GEO.',
  },
},
```

### Captions

**Captions must:**
1. Start with a noun or subject (not "The image shows...")
2. Include **specific numbers** or **key metrics** (e.g., "8 GB", "2–8 tok/s", "10 errors")
3. Mention the **tools/platforms** covered (Ollama, LM Studio, vLLM, GPU, CPU, etc.)
4. Be **1–2 sentences max**
5. End with a period

**Example (good):**
```
Local LLM RAM requirements by model size: llama3.2 1B–3B fits in 8 GB, 7B–8B models need 16 GB, 70B models require 64 GB at Q4_K_M quantization.
```

**Example (bad):**
```
This image shows how much RAM you need.
```

---

## Responsive & Accessibility

### Rendering

- **Component:** `LocalLLMsPostClient.tsx:329-353`
- **HTML:** `<img src={section.image} alt={section.imageCaption} className="... max-w-2xl ...">`
- **Display:** Full width up to 672px max-width (2xl breakpoint)
- **Border:** `border border-primary/20 shadow-sm rounded-lg`

### Alt Text

The `imageCaption` is used as the `alt` attribute. Ensure captions:
1. Describe the image content (for screen readers)
2. Are **not redundant** with the section text
3. Include **quantitative details** (numbers, colors, labels)

### Keyboard & Screen Readers

- SVG is rendered as a standard `<img>` (not embedded)
- Caption text is semantic `<figcaption>` (WCAG compliant)
- No complex interactions (SVGs are static)

---

## GEO / SEO Considerations

1. **File size:** Keep SVGs under 50 KB (compress with SVGO if needed)
2. **Descriptive filenames:** Include article slug + concept (improves image search)
3. **Alt text (captions):** Must include primary keywords (e.g., "RAM", "GPU", "quantization", model names)
4. **Image placement:** Early in article (after intro) for better GEO visibility
5. **Language variants:** Ensure every article has SVGs in all 5 languages (same file path, language suffix)

---

## Troubleshooting

### Image Won't Render

1. Check file path: `/images/filename-{lang}.svg` (no extra slashes, correct language suffix)
2. Verify language suffix matches article language (`-en`, `-de`, `-fr`, `-ja`, `-zh`)
3. Ensure `image` and `imageCaption` fields are on the same section object
4. Run `npm run build` to check for TypeScript errors

### Text Overflows or Cuts Off

1. SVG canvas has `overflow: hidden` — content beyond slide height is clipped
2. Keep list items to **1–2 lines max** (break longer text into multiple bullets)
3. Keep numbered lists to **≤6 items**
4. Test in browser at all 5 language URLs before committing

### Color / Contrast Issues

1. Use only colors from the **Color Palette** section
2. All text should contrast with background: WCAG AA minimum (4.5:1 for body text)
3. White text on purple: `#FFFFFF` on `#6750A4` ✓ (passes WCAG AA)
4. Dark text on white: `#1C1B1F` on `#FFFFFF` ✓ (passes WCAG AAA)

---

## Examples

### Example 1: Error Reference Table (troubleshooting-error-symptoms-quick-ref-en.svg)

```svg
<text x="400" y="28" font-size="20" font-weight="700" fill="#1C1B1F" text-anchor="middle">
  10 Most Common Local LLM Errors — Quick Reference
</text>

<!-- Header Row -->
<text x="40" y="65" font-weight="700" fill="#79747E">#</text>
<text x="90" y="65" font-weight="700" fill="#79747E">Error</text>
<text x="280" y="65" font-weight="700" fill="#79747E">Key Symptom</text>
<text x="550" y="65" font-weight="700" fill="#79747E">Quick Fix</text>
<line x1="18" y1="72" x2="782" y2="72" stroke="#E8DEF8" stroke-width="1.5"/>

<!-- Data Row 1 -->
<circle cx="40" cy="95" r="12" fill="#6750A4"/>
<text x="40" y="99" font-weight="700" fill="#FFFFFF" text-anchor="middle">1</text>
<text x="90" y="99" font-weight="600" fill="#1C1B1F">Out of Memory</text>
<text x="280" y="99" font-family="'SF Mono'" font-size="11" fill="#49454F">"GGML_ASSERT" crash</text>
<text x="550" y="99" font-size="11" fill="#6750A4">Use smaller model or Q4_K_M</text>
<line x1="18" y1="108" x2="782" y2="108" stroke="#F7F2FA" stroke-width="1"/>

<!-- ... more rows ... -->
```

### Example 2: GPU Detection Comparison (troubleshooting-gpu-detection-en.svg)

```svg
<!-- Left Panel: CPU Only -->
<rect x="28" y="55" width="340" height="280" rx="6" fill="#FFFFFF" stroke="#EA4335" stroke-width="2"/>
<rect x="28" y="55" width="340" height="4" rx="0" fill="#EA4335"/>

<text x="198" y="80" font-size="16" font-weight="700" fill="#EA4335" text-anchor="middle">CPU Only (Problem)</text>

<text x="48" y="110" font-weight="700" fill="#1C1B1F">Speed:</text>
<text x="48" y="128" font-family="'SF Mono'" font-size="13" font-weight="600" fill="#EA4335">2–8 tokens/sec</text>

<!-- ... more content ... -->

<!-- Right Panel: GPU Active -->
<rect x="432" y="55" width="340" height="280" rx="6" fill="#FFFFFF" stroke="#34A853" stroke-width="2"/>
<rect x="432" y="55" width="340" height="4" rx="0" fill="#34A853"/>

<text x="602" y="80" font-size="16" font-weight="700" fill="#34A853" text-anchor="middle">GPU Active (Goal)</text>

<!-- ... mirror structure with green accent ... -->
```

---

## Changelog

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-04-16 | Initial style guide. Covers 4 image types: error tables, RAM charts, GPU comparisons, debug flows. |

---

## Questions?

Contact the PromptQuorum design team or refer to existing SVGs in `/public/images/` as visual reference.

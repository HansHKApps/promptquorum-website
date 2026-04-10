# Image & SVG Style Guide

Guidelines for creating images and SVGs that match the PromptQuorum website design system.

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
- **Heading font size:** 18–22px, font-weight: 700
- **Body text:** 13–14px, font-weight: 500–600
- **Monospace text:** 14–16px for code/terminal
- **Text color:** 
  - Primary text: #1C1B1F
  - Secondary text: #49454F
  - Muted text: #79747E
- **Letter spacing:** 0.3–0.5px for readability

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

## Accessibility

- Always include descriptive `alt` text in `content.ts` as `imageCaption`
- Use sufficient color contrast (WCAG AA minimum)
- Don't rely on color alone to convey information (use labels, patterns)
- Include text labels for all key elements

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

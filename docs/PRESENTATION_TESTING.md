# Presentation Testing & Quality Checks

This document outlines the quality checks and testing procedures for presentations.

## The Issue We Fixed

**Date:** April 12, 2026  
**Problem:** Presentation slides were not rendering in the iframe, showing blank white content despite navigation showing "1/14".  
**Root Cause:** Unescaped apostrophe in a JavaScript string caused a syntax error in the presentation's `<script>` block.

**Example:**
```javascript
// ❌ BROKEN — apostrophe breaks string:
'<strong>Context window ≠ quality</strong> — 200k tokens doesn't mean...'

// ✅ FIXED — properly escaped:
'<strong>Context window ≠ quality</strong> — 200k tokens doesn\'t mean...'
```

When JavaScript syntax is broken (like an unescaped apostrophe), the entire script fails to parse, and no JavaScript code runs—meaning slide content never gets injected into the DOM.

---

## Prevention: Automated Validation

The project now includes an automated validation script that catches these issues **before** deployment.

### Running Validation

```bash
# Manual run:
node scripts/validate-presentations.js

# Automatic (runs before every build):
npm run build
```

### What Gets Checked

✅ **JavaScript Syntax** — Validates each presentation's `<script>` block for syntax errors  
✅ **Required Elements** — Ensures header, containers, and controls are present  
✅ **Content Structure** — Verifies CONTENT object and renderSlide function exist  
✅ **Language Blocks** — Confirms all 5 languages (en, de, fr, ja, zh) are present  
✅ **Critical Slide Types** — Ensures title and list slides are handled by renderSlide  

If validation fails, the build will not complete. Fix the errors in the HTML file before retrying.

---

## Common Issues & Fixes

### Issue 1: Unescaped Apostrophes

**Symptom:** Build fails with "Unexpected identifier" error on a specific line  
**Cause:** String wrapped in single quotes contains an unescaped apostrophe  
**Fix:** Escape the apostrophe with a backslash:

```javascript
// ❌ Breaks
'Text with doesn't apostrophe'

// ✅ Fixed
'Text with doesn\'t apostrophe'
```

### Issue 2: Unescaped Double Quotes

**Symptom:** Similar syntax error  
**Cause:** If using template literals, unescaped quotes inside `${...}` expressions  
**Fix:** Use backslash escape or switch quote style:

```javascript
// ❌ Breaks
`Text with "quoted part" inside`

// ✅ Fixed (escape)
`Text with \"quoted part\" inside`

// ✅ Or use single quotes
'Text with "quoted part" inside'
```

### Issue 3: Regex Special Characters

**Symptom:** Build fails with "Unexpected token" or similar  
**Cause:** Special regex characters (like `?`, `*`, `+`) outside regex literals  
**Fix:** Escape them if in strings:

```javascript
// ❌ Might break
const text = 'Cost: 1.5x*';

// ✅ Escape if needed
const text = 'Cost: 1.5x\\*';
```

---

## Manual Testing Checklist

After making changes to a presentation HTML file:

1. **Verify syntax:**
   ```bash
   node scripts/validate-presentations.js
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Test in browser:**
   - Visit `http://localhost:3000/prompt-engineering/[article-slug]`
   - Verify presentation section appears with slides visible
   - Click through slides with Prev/Next buttons
   - Test arrow key navigation
   - Test all languages: `?lang=de`, `?lang=fr`, `?lang=ja`, `?lang=zh`
   - Test PDF: Click "Save as PDF" and verify print preview shows all 14 slides

4. **Check console for errors:**
   - Open browser DevTools (F12)
   - Check Console tab for JavaScript errors
   - Check Network tab to ensure `/presentations/[slug]-static.html` loads with 200 status

---

## Testing Framework

The validation script (`scripts/validate-presentations.js`) performs these checks:

### Check 1: JavaScript Syntax Validation
Extracts the `<script>` block and validates it with Node.js `--check` flag.  
Catches syntax errors immediately.

### Check 2: HTML Structure
Verifies critical elements exist:
- `id="header-title"` — header element
- `id="slides-container"` — slide injection point
- `id="prevBtn"` and `id="nextBtn"` — navigation buttons

### Check 3: Content Object
Ensures the CONTENT object is properly defined with all 5 language blocks (en, de, fr, ja, zh).

### Check 4: Slide Rendering Function
Verifies `renderSlide()` function exists and handles at least `title` and `list` slide types.

### Check 5: Language Coverage
Confirms each language block has at least 2 slides.

---

## Adding New Presentations

When creating a new presentation HTML file using `/gamma`:

1. File **must** be named `[slug]-static.html`
2. Place in `public/presentations/`
3. Include CONTENT object with all 5 languages
4. Include renderSlide function with all slide types
5. Run `npm run build` — validation runs automatically
6. Fix any errors before pushing

---

## Debugging Guide

If validation fails:

1. **Read the error message** — it tells you exactly what's wrong
2. **Check the specified file and line** (if provided)
3. **Look for unescaped quotes** — most common issue
4. **Verify CONTENT object syntax** — JSON-like objects need proper commas
5. **Run a smaller test** — extract just the `<script>` block to isolate issues

Example debugging:
```bash
# Extract and test just the JavaScript
sed -n '350,1227p' public/presentations/[slug]-static.html | node --check
```

---

## References

- **gamma.md** — Guidelines for creating presentations
- **CLAUDE.md** — Project-wide rules and conventions
- **scripts/validate-presentations.js** — The validation script source code

# SEO/GEO Quality Checks

## The Bug That Happened

**Critical Issue**: All `?lang=XX` URLs served English HTML to crawlers (Google, Perplexity, ChatGPT) even though translations existed.

**Root Cause**: Architecture pattern where client components defaulted to English before hydration, and the server wasn't passing the correct language down.

```
❌ Before (Bug):
Server reads ?lang=de
  ↓
Client component calls useLang() without prop
  ↓
useState('en') ← DEFAULT BEFORE HYDRATION
  ↓
HTML renders as English
  ↓
useEffect runs (too late, crawler indexed English)

✅ After (Fix):
Server reads ?lang=de  
  ↓
Server passes initialLang={selectedLang} prop
  ↓
Client component uses useLang(initialLang)
  ↓
useState('de') ← CORRECT LANGUAGE
  ↓
HTML renders as German from first byte
  ↓
useEffect hydrates seamlessly
```

## Pre-Commit Checks

Run before pushing:

```bash
npm run validate-seo
```

This validates:
1. ✅ `<html lang>` is dynamic, not hardcoded
2. ✅ Middleware extracts `?lang=` and sets header
3. ✅ All multilingual client components accept `initialLang`
4. ✅ All server pages read `searchParams` and pass `initialLang`
5. ✅ hreflang alternates include `x-default`
6. ✅ Internal links have `?lang=` params in translated content

## For New Multilingual Pages

When adding a new page with language support:

### 1. Server Component (page.tsx)
```typescript
interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function MyPage({ searchParams }: PageProps) {
  // Extract language
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = (validLangs.includes(lang) ? lang : 'en') as Language

  // Pass to client
  return <MyPageClient initialLang={selectedLang as any} />
}
```

### 2. Client Component (MyPageClient.tsx)
```typescript
interface MyPageClientProps {
  initialLang?: Language
}

export function MyPageClientContent({ initialLang }: MyPageClientProps) {
  // CRITICAL: Pass initialLang to useLang()
  const lang = useLang(initialLang) as Language
  
  // Now lang is correct from first render
  return ...
}

export function MyPageClient(props: MyPageClientProps) {
  return <MyPageClientContent {...props} />
}
```

### 3. Metadata (same file as server)
```typescript
export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const selectedLang = (validLangs.includes(lang) ? lang : 'en') as Language
  
  // Use language-correct content for schema
  const post = blogContent[postId][selectedLang] || blogContent[postId]['en']
  
  return {
    title: post.title,
    description: post.intro,
    alternates: generateAlternates('/my-page'),
    // ... rest of metadata
  }
}
```

### 4. hreflang Alternates
```typescript
import { generateAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'My Page | PromptQuorum',
  description: '...',
  alternates: generateAlternates('/my-page'),  // ✅ Adds all language variants + x-default
}
```

## Testing

### Manual Testing
```bash
# Start dev server
npm run dev

# Visit each language variant and check:
1. Browser DevTools > inspect <html> element → lang="de" (not hardcoded to "en")
2. Right-click > View Page Source → look for German text in first 500 lines (not English)
3. Check meta tags for correct language descriptions
```

### Automated Testing (CI/CD)
```bash
# Run validation before every merge
npm run validate-seo

# Must pass with 0 errors
```

## The Critical Pattern

**This pattern is non-negotiable for multilingual pages:**

```typescript
// ❌ WRONG — Component will render English initially
const lang = useLang()

// ✅ CORRECT — Component uses server-resolved language
const lang = useLang(initialLang)
```

This ensures:
- Crawlers see correct language HTML (before JavaScript runs)
- Users see correct language after hydration (smooth experience)
- SEO ranking accounts for translations (hreflang + content match)

## If You See "English on All Language URLs"

Check:
1. Is the server page passing `initialLang` to the client component? (grep `initialLang={`)
2. Is the client component accepting it? (grep `initialLang?: Language`)
3. Is `useLang()` called with the prop? (grep `useLang(initialLang)`)
4. Is there middleware to set the `x-selected-lang` header? (check `src/middleware.ts`)
5. Does layout.tsx read it? (grep `headers()` in `layout.tsx`)

## References

- [TRANSLATION_SPEC.md](TRANSLATION_SPEC.md) — Section 9: Server-Side Language Rendering
- [CLAUDE.md](../CLAUDE.md) — Critical: Server-to-Client Language Handoff
- `scripts/validate-seo.mjs` — Automated validation script

# CLAUDE.md — PromptQuorum Website

## MANDATORY: Read Before Any Content Work

Before writing or editing any user-facing text on this website, read and apply the full GEO writing guidelines:

**`docs/GEO_WRITING_GUIDELINES.md`** — mandatory for all content (pages, blog posts, FAQ entries, feature descriptions, meta tags, headings, CTAs)

Summary of non-negotiable rules:
- **Answer-first:** Lead every section with the direct answer or key fact. Explanation follows.
- **Structure:** Use H2/H3 headings, bullet lists, short paragraphs (≤3 sentences each).
- **Facts only:** Every claim must be verifiable. No vague superlatives ("leading", "best", "powerful", "revolutionary").
- **Entity names:** Use full product/company names on first mention (e.g., "PromptQuorum", "OpenAI GPT-4o", "Ollama"). Be consistent throughout.
- **Schema markup:** Every page needs relevant JSON-LD (Article, FAQPage, HowTo, BreadcrumbList, etc.).
- **No marketing fluff:** Every sentence must add information. Delete anything decorative.

---

## Project Summary

PromptQuorum Website is the marketing site for PromptQuorum — a multi-model AI prompt dispatch and consensus tool. The site showcases features, explains how the product works, hosts a blog, and collects waitlist signups. It deploys automatically to Vercel on every push to `main`.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + custom design tokens |
| UI components | Radix UI primitives |
| Language | TypeScript (strict mode) |
| Package manager | npm |
| Deployment | Vercel (auto-deploy on push to main) |
| OG Images | Next.js `next/og` ImageResponse (built-in, free) |
| Dev server | `http://localhost:3000` |

## Environment Setup

```bash
npm install
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Preview production build
```

## File Structure

```
src/
  app/               # Next.js App Router pages
    api/
      og/[slug]/     # Dynamic og:image generation route for all articles (all 5 languages)
    page.tsx         # Home page
    blog/            # Blog listing + individual posts
    compare/         # Model comparison page
    features/        # Features page
    how-it-works/    # How it works page
    faq/             # FAQ page
    waitlist/        # Waitlist page (auto-opens modal)
    about/           # About page
    not-found.tsx    # Custom 404 page
    layout.tsx       # Root layout with shared header/footer
  components/        # Reusable UI components
    HeaderClient.tsx # Navigation with language switcher
    Footer.tsx       # Site footer
    LanguageSwitcherWrapper.tsx
  context/           # React context providers
    WaitlistContext.tsx
  hooks/
    useLang.ts       # Reads ?lang= query param for language routing
  lib/
    blog/
      blogContent.ts # All blog post content (5000+ lines)
  locales/           # Translation strings per language
public/
  logo.svg
  llms.txt           # GEO: machine-readable site description for AI crawlers
docs/
  GEO_WRITING_GUIDELINES.md  # Full GEO content rules (read before writing anything)
```

## Code Conventions

- Components: `PascalCase` filenames (`HeaderClient.tsx`)
- Folders: `kebab-case` (`src/components/`)
- Functions/variables: `camelCase`
- Styling: Tailwind CSS `className` prop only — no separate CSS files
- Exports: Named exports (not default)
- TypeScript: Strict mode — no `any`

## Language / i18n

The site supports 5 languages: `en`, `de`, `fr`, `ja`, `zh`.

- Language is set via `?lang=XX` query param (e.g., `/?lang=fr`)
- `useLang()` hook reads `window.location.search`
- All nav links must include `?lang=XX` via the `navHref(path, lang)` helper in `HeaderClient.tsx`
- Translations live in `src/locales/[lang].ts`

### Critical: Server-to-Client Language Handoff

**`useLang()` defaults to `'en'` on first render.** Any client component that renders article body content must receive the server-resolved language as a prop — otherwise crawlers (Google, Perplexity, ChatGPT Browse) see English HTML on all `?lang=XX` URLs, making translations invisible to search engines.

**Rule:** Always pass `initialLang={selectedLang}` from the server page to `PromptEngineeringPostClient`:

```tsx
// page.tsx — correct ✅
<PromptEngineeringPostClient slug={slug} initialLang={selectedLang} />

// Wrong ❌ — all language URLs serve English to crawlers
<PromptEngineeringPostClient slug={slug} />
```

If you add a new client component that renders multilingual content, follow the same pattern: accept `initialLang?: Language` as a prop and use it as the initial value before `useLang()` hydrates. Full details in `docs/TRANSLATION_SPEC.md` section 9.

## OG Image Generation

All Prompt Engineering articles automatically generate language-specific Open Graph images for social sharing.

- Route: `src/app/api/og/[slug]/route.tsx` — uses Next.js built-in `next/og` (free, no dependencies)
- **Automatic:** Images are generated on-demand with article title, intro, and PromptQuorum branding
- **Multi-language:** Each image includes the selected language (`?lang=XX` param)
- **No manual work:** Just write the article content — og:image is automatically created for all languages
- **Cache:** Generated images are cached for 24 hours (immutable)
- **GEO-compliant:** Ensures all articles have unique, professional social sharing previews

Writers do not need to create or manage og:images; they are handled automatically by the system.

## Git Workflow

- Branch: `feature/[name]` for all new work, `fix/` for bugs
- Commits: conventional format (`feat:`, `fix:`, `docs:`, `refactor:`)
- `main` is always stable and auto-deploys to Vercel

## Do NOT

- Mention, imply, or disclose that content was written or assisted by AI — in copy, commit messages, meta tags, or anywhere user-facing. All content publishes as PromptQuorum editorial.

- Write content without applying GEO guidelines
- Use vague marketing language ("powerful", "seamless", "revolutionary", "cutting-edge")
- Add hardcoded strings without adding translation keys for all 5 languages
- Use CSS files or `<style>` tags — Tailwind only
- Use default exports — named exports only
- Omit JSON-LD schema markup on new pages
- Add a client component that renders multilingual content without passing `initialLang` from the server page (see Language / i18n section above)
- **Use `export const metadata` (static) on any page that supports `?lang=` parameter** — always use `export async function generateMetadata({ searchParams })` instead, so crawlers see correct language metadata on all language URLs. This rule prevents the systematic English-only metadata issue (see commit 1d685040).

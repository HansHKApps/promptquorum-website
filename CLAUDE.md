# CLAUDE.md — PromptQuorum Website

## Project Summary

PromptQuorum Website is a modern marketing landing page for PromptQuorum. It showcases features, includes a waitlist form, multi-language support (5 languages), and deploys to Vercel.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript |
| Styling | Tailwind CSS |
| Build tool | Vite |
| Package manager | npm |
| Deployment | Vercel (auto-deploy on push to main) |

## Environment Setup

```bash
npm install
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Production build
npm run preview      # Preview production build locally

---

**Your turn:** 
1. Create `CLAUDE.md` in your project root
2. Paste that content into it
3. Save it
4. Let me know when done ✅

Then we'll reorganize the folder # CLAUDE.md — PromptQuorum Website

## Project Summary

PromptQuorum Website is a modern marketing landing page for PromptQuorum. It showcases features, includes a waitlist form, multi-language support (5 languages), and deploys to Vercel.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript |
| Styling | Tailwind CSS |
| Build tool | Vite |
| Package manager | npm |
| Deployment | Vercel (auto-deploy on push to main) |

## Environment Setup

```bash
npm install
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Production build
npm run preview      # Preview production build locally

Code Conventions
Components: PascalCase filenames (e.g., Header.tsx)
Folders: kebab-case (e.g., src/components/)
Functions/variables: camelCase
Styling: Tailwind CSS in className prop only — no separate CSS files
Exports: Named exports (not default)
TypeScript: Strict mode required
File Structure

src/
  components/      # Reusable UI components
  App.tsx          # Main app component
  main.tsx         # Entry point
  index.css        # Global Tailwind styles
public/
  logo.svg         # Logo asset
Git Workflow
Branch: Work on feature branches (feature/[name])
Commits: Conventional format (feat:, fix:, refactor:)
Main: Always stable, auto-deploys to Vercel
Working on This Project
Make changes locally
Test on npm run dev
Commit with clear message
Push to GitHub → Vercel auto-deploys
All user-facing strings use translations (see translations.ts)
Dependency Notes
react-i18next for multi-language support
Formspree for waitlist email collection
No external UI library — using Tailwind + custom components


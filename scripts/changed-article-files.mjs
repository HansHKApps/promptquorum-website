/**
 * Article files changed relative to a git ref — used by the "strict on changed files only"
 * modes of validate-meta-budgets.mjs and check-page-seo-gate.mjs.
 *
 * Changed = differs from the merge-base with <ref> (committed, staged or unstaged) plus
 * untracked files. Default ref: origin/main, else HEAD~1, else HEAD.
 *
 * Only src/lib/<cluster>/articles/<slug>.ts files are returned. prompt-engineering articles
 * live in one big content.ts and are not covered (reported by the callers).
 */
import { execFileSync } from 'node:child_process'

const git = (args) => execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim()
const ok = (args) => { try { git(args); return true } catch { return false } }

export function resolveRef(ref) {
  if (ref && ok(['rev-parse', '--verify', `${ref}^{commit}`])) return ref
  for (const r of ['origin/main', 'HEAD~1', 'HEAD']) if (ok(['rev-parse', '--verify', `${r}^{commit}`])) return r
  return 'HEAD'
}

export function changedArticleFiles(ref) {
  const r = resolveRef(ref)
  let base = r
  try { base = git(['merge-base', r, 'HEAD']) } catch { /* shallow clone or unrelated: diff against the ref itself */ }
  const tracked = git(['diff', '--name-only', '--diff-filter=ACMR', base]).split('\n')
  const untracked = git(['ls-files', '--others', '--exclude-standard']).split('\n')
  const files = [...new Set([...tracked, ...untracked])]
    .filter((f) => /^src\/lib\/[^/]+\/articles\/[^/]+\.ts$/.test(f) && !/-barrel\.ts$/.test(f))
    .sort()
  return { ref: r, base, files }
}

/** src/lib/<cluster>/articles/<slug>.ts -> /<cluster>/<slug> (clusters share their URL segment). */
export function articleUrlPath(file) {
  const m = file.match(/^src\/lib\/([^/]+)\/articles\/([^/]+)\.ts$/)
  return m ? `/${m[1]}/${m[2]}` : null
}

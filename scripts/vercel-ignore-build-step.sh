#!/usr/bin/env bash
# Vercel "Ignored Build Step" — exit 0 skips the build, exit 1 proceeds.
#
# Two independent gates, checked in order:
#
#   1. Docs-only skip (existing behavior, unchanged): commits touching only
#      *.md files or docs/ can't affect the deployed app — skip.
#
#   2. Production build throttle (token-free): the live production site
#      serves /build-info.json, written at build time by
#      scripts/write-build-info.mjs (npm "prebuild"). If the live build is
#      younger than THROTTLE_HOURS, skip this build. Commits keep landing on
#      main; the first push after the window expires builds and picks up
#      everything accumulated since. Rationale: every production build
#      rewrites the ISR cache for all prerendered URLs (ISR write costs).
#
# The throttle applies ONLY to production (VERCEL_ENV=production). Preview
# deployments keep today's behavior. Escape hatch: put [force-deploy]
# anywhere in the commit message.
#
# No secrets required. On ANY error (endpoint missing, network, bad JSON)
# the script FAILS OPEN and builds — the throttle can never block a deploy.
set -uo pipefail

THROTTLE_HOURS="${THROTTLE_HOURS:-3}"
PROD_HOST="${VERCEL_PROJECT_PRODUCTION_URL:-www.promptquorum.com}"
BUILD_INFO_URL="https://${PROD_HOST}/build-info.json"

# ---------------------------------------------------------------------------
# Gate 1: docs-only skip (unchanged from the original script)
# ---------------------------------------------------------------------------
docs_only_check() {
  if [ -z "${VERCEL_GIT_PREVIOUS_SHA:-}" ]; then
    echo "No previous SHA available; docs-only check inconclusive."
    return 1
  fi

  if ! git cat-file -e "${VERCEL_GIT_PREVIOUS_SHA}^{commit}" 2>/dev/null; then
    echo "Previous SHA ${VERCEL_GIT_PREVIOUS_SHA} not found in history (likely a rebase/force-push); docs-only check inconclusive."
    return 1
  fi

  local changed_files
  changed_files=$(git diff --name-only "$VERCEL_GIT_PREVIOUS_SHA" "$VERCEL_GIT_COMMIT_SHA")

  if [ -z "$changed_files" ]; then
    echo "No changed files detected; docs-only check inconclusive."
    return 1
  fi

  if echo "$changed_files" | grep -qvE '(^|/)[^/]+\.md$|^docs/'; then
    return 1
  fi

  return 0
}

if docs_only_check; then
  echo "Only .md/docs/ files changed; skipping build."
  exit 0
fi

# ---------------------------------------------------------------------------
# Gate 2: production build throttle (token-free)
# ---------------------------------------------------------------------------
# Preview deployments are not used here — every pushed branch was producing a
# preview build nobody looked at, burning build minutes and cluttering the
# Vercel dashboard. Skip them by default. Opt in per-commit with [preview].
if [ "${VERCEL_ENV:-}" != "production" ]; then
  case "${VERCEL_GIT_COMMIT_MESSAGE:-}" in
    *"[preview]"*)
      echo "[preview] flag found; building this preview deployment."
      exit 1
      ;;
  esac
  echo "Preview deployment (VERCEL_ENV=${VERCEL_ENV:-unset}); previews are disabled — add [preview] to the commit message to build one. Skipping."
  exit 0
fi

case "${VERCEL_GIT_COMMIT_MESSAGE:-}" in
  *"[force-deploy]"*)
    echo "[force-deploy] flag found in commit message; bypassing throttle. Proceeding."
    exit 1
    ;;
esac

# Age (ms) of the live production build; prints -1 on any problem.
AGE_MS=$(
  BUILD_INFO_URL="$BUILD_INFO_URL" node --input-type=module -e '
    try {
      const url = `${process.env.BUILD_INFO_URL}?cb=${Date.now()}`;
      const res = await fetch(url, {
        cache: "no-store",
        signal: AbortSignal.timeout(10_000),
      });
      if (!res.ok) { console.log(-1); process.exit(0); }
      const body = await res.json();
      const ts = body?.buildStartedAt;
      console.log(typeof ts === "number" ? Date.now() - ts : -1);
    } catch {
      console.log(-1);
    }
  ' 2>/dev/null
)

if ! [[ "$AGE_MS" =~ ^[0-9]+$ ]]; then
  echo "Could not read ${BUILD_INFO_URL} (got: '${AGE_MS:-empty}'); fail-open. Proceeding with build."
  exit 1
fi

THROTTLE_MS=$(( THROTTLE_HOURS * 3600 * 1000 ))
AGE_MIN=$(( AGE_MS / 60000 ))

if [ "$AGE_MS" -lt "$THROTTLE_MS" ]; then
  echo "Live production build is ${AGE_MIN} min old (< ${THROTTLE_HOURS}h throttle); skipping build. Commits accumulate until the window expires."
  exit 0
fi

echo "Live production build is ${AGE_MIN} min old (>= ${THROTTLE_HOURS}h); proceeding with build."
exit 1

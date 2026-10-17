#!/usr/bin/env bash
# Vercel "Ignored Build Step" — exit 0 skips the build, exit 1 proceeds.
#
# Two independent gates, checked in order:
#
#   1. Docs-only skip (existing behavior, unchanged): commits touching only
#      *.md files or docs/ can't affect the deployed app — skip.
#
#   2. (OBSOLETE, replaced by on-demand deploys — see bottom of file.)
#      Former throttle: the live production site
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

# Production builds are ON DEMAND ONLY. Pushes to main just collect work;
# nothing deploys until someone ships with scripts/deploy.sh (which pushes an
# empty commit carrying [force-deploy], handled above). This replaces the old
# 3-hour throttle so a batch of merged work always becomes ONE build.
echo "Production build skipped: deploys are on demand. Run scripts/deploy.sh (or put [force-deploy] in the commit message) to ship everything on main."
exit 0

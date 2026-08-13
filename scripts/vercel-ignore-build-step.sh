#!/usr/bin/env bash
# Vercel "Ignored Build Step" — exit 0 skips the build, exit 1 proceeds.
# Skips builds that only touch *.md files or anything under docs/, since those
# can't affect the deployed app but still trigger a full prerender otherwise.
set -euo pipefail

if [ -z "${VERCEL_GIT_PREVIOUS_SHA:-}" ]; then
  echo "No previous SHA available; proceeding with build."
  exit 1
fi

CHANGED_FILES=$(git diff --name-only "$VERCEL_GIT_PREVIOUS_SHA" "$VERCEL_GIT_COMMIT_SHA")

if [ -z "$CHANGED_FILES" ]; then
  echo "No changed files detected; proceeding with build."
  exit 1
fi

if echo "$CHANGED_FILES" | grep -qvE '(^|/)[^/]+\.md$|^docs/'; then
  echo "Non-doc files changed; proceeding with build."
  exit 1
fi

echo "Only .md/docs/ files changed; skipping build."
exit 0

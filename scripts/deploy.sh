#!/usr/bin/env bash
# Ship everything currently on origin/main as ONE production build.
# Pushes never deploy by themselves (see scripts/vercel-ignore-build-step.sh);
# this pushes an empty commit tagged [force-deploy], which Vercel builds.
# Usage: scripts/deploy.sh ["optional note"]
set -euo pipefail
REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP="/tmp/pq-deploy-$$"
git -C "$REPO" fetch -q origin main
git -C "$REPO" worktree add -q -b "tmp/deploy-$$" "$TMP" origin/main
trap 'git -C "$REPO" worktree remove --force "$TMP" >/dev/null 2>&1; git -C "$REPO" branch -D "tmp/deploy-$$" >/dev/null 2>&1' EXIT
git -C "$TMP" commit -q --allow-empty --no-verify -m "chore: [force-deploy] ship ${1:-all merged work}"
git -C "$TMP" push -q origin "HEAD:main"
echo "Deploy triggered for $(git -C "$TMP" rev-parse --short HEAD). One production build will run."

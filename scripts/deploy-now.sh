#!/usr/bin/env bash
# Force a production build immediately, bypassing the 3h throttle in
# scripts/vercel-ignore-build-step.sh.
#
# The throttle's escape hatch reads VERCEL_GIT_COMMIT_MESSAGE, so the only
# thing needed is a new commit on main carrying [force-deploy]. An empty
# commit stages nothing, so this is safe to run with a dirty tree and
# alongside other sessions working in the same repo.
set -euo pipefail

BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [ "$BRANCH" != "main" ]; then
  echo "On '$BRANCH', not main — the throttle only applies to production builds." >&2
  echo "Push this branch normally for a preview deploy, or switch to main." >&2
  exit 1
fi

REASON="${1:-manual}"

git pull --rebase --autostash
git commit --allow-empty -m "chore: force production deploy ($REASON) [force-deploy]"
git push

echo
echo "Pushed. Vercel will build this commit (throttle bypassed)."
echo "Watch: https://vercel.com/hans-kueppers-projects/promptquorum-website"

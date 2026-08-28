// Writes public/build-info.json at build time (wired as npm "prebuild").
// Served by production at /build-info.json; read by
// scripts/vercel-ignore-build-step.sh to throttle production builds.
import { writeFileSync, mkdirSync } from 'node:fs';

mkdirSync('public', { recursive: true });

const info = {
  buildStartedAt: Date.now(), // ms epoch, UTC
  commit: process.env.VERCEL_GIT_COMMIT_SHA ?? null,
  env: process.env.VERCEL_ENV ?? 'local',
};

writeFileSync('public/build-info.json', JSON.stringify(info) + '\n');
console.log('[write-build-info] wrote public/build-info.json:', JSON.stringify(info));

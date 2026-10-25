// Playwright config for the cookie-dialog test (tests/consent.spec.ts).
// Targets an already-running production server (`npm run dev` is broken):
//   scripts/with-build-lock.sh npm run build && npx next start --port 3000
//   npm run test:consent
// Other port: PQ_BASE_URL=http://localhost:3433 npm run test:consent

import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  testMatch: /consent\.spec\.ts/,
  fullyParallel: true,
  retries: 0,
  reporter: 'list',
  timeout: 60_000,
  use: {
    baseURL: process.env.PQ_BASE_URL ?? 'http://localhost:3000',
    ...devices['Desktop Chrome'],
    launchOptions: process.env.PQ_CHROMIUM_PATH ? { executablePath: process.env.PQ_CHROMIUM_PATH } : {},
  },
})

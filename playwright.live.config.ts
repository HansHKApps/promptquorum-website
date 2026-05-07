import { defineConfig, devices } from '@playwright/test'

// One-off config for verifying the live language switcher behaviour against
// production. No webServer (we hit https://www.promptquorum.com directly).
export default defineConfig({
  testDir: './tests-live',
  testMatch: 'power-local-llm-lang-switch.spec.ts',
  fullyParallel: false,
  workers: 1,
  retries: 1,
  reporter: [['list']],
  use: {
    baseURL: 'https://www.promptquorum.com',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})

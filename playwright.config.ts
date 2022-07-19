// playwright.config.ts
import type { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    headless: true
  },
  globalSetup: require.resolve('./global-setup.ts'),
};

export default config;

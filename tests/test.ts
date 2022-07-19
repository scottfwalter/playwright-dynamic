import { test, expect } from '@playwright/test';

const runTestsPerColor = (fn: Function) => {
  console.log('runTestsPerColor', process.env.backgroundColors);

  if (!process.env.backgroundColors) {
    console.log('colors not set so I won\'t be dynamically adding the tests');
    return;
  }

  const colorsToProcess = JSON.parse(process.env.backgroundColors);

  for (const color in colorsToProcess) {
    fn(colorsToProcess[color]);
  }
};

test.describe('All Tests', () => {

  test('basic test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
  });

  runTestsPerColor(() => {
    test.describe('Dynamic1', () => {
      test('Test1', () => {
        console.log('Test1');
      });

      test('Test2', () => {
        console.log('Test2');
      });
    })
  });
});
import { playwrightRollup, expectSuccess } from '@~local/playwright-tooling';
import { test } from '@playwright/test';

playwrightRollup();

test.describe('DOMObserver', () => {
  test('test', async ({ page }) => {
    await page.click('#start');
    await expectSuccess(page);
  });
});

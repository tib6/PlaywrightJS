import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.locator("//div[contains(text(), 'Accept')]").last().click();
  await page.close();
});
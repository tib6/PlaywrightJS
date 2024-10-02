import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  try{
    await page.locator("//div[contains(text(), 'Accept')]").last().click();
  }catch(error){}
  await page.close();
});
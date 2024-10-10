import { test, expect } from '@playwright/test';

test.describe('Mock data using Playwright - Abort', () =>{
  test.beforeEach(async ({ context }) => {
    await context.route(/.css$/, (route) => route.abort())
  })

  test('test', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
  })
});





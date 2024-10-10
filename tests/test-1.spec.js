import { test, expect } from '@playwright/test';


const text = "test"

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
});

test('test', async ({ page }) => {

  test.info().annotations.push({
    type: "issue",
    description: "http://link/to/your/issue"
  })

  const toDo = await page.locator('.new-todo');
  await toDo.fill(text);
  await toDo.press("Enter");

  const tableView = await page.locator('.view label');
  await expect(tableView).toHaveText(text+"fail");
});

test('Install any Browser', async ({page}) => {
  //Install VSCode Extention
  //Ctrl + Shift + P
  //Type Playwright and select "Test: Install Playwright Browsers"

  // Or just: npx playwright install chromium firefox webkit
});

test('Debug Options', async ({page}) => {
  //Run npx playwright test [file-name] --headed --debug --project=firefox
  const toDo = await page.locator('.new-todo');
  await toDo.fill(text);
  await toDo.press("Enter");

  const tableView = await page.locator('.view label');
  await expect(tableView).toHaveText(text);
});

test('Soft Assertions ', async ({page})=> {
  const toDo = await page.locator('.new-todo');
  await toDo.fill(text);
  await toDo.press("Enter");

  const tableView = await page.locator('.view label');
  await expect.soft(tableView).toHaveText(text);

  await new Promise(resolve => setTimeout(resolve, 1000));
  await toDo.fill(text + "2");
  await toDo.press("Enter");

  await expect.soft(tableView).toHaveText([text, text + "3"]);
});
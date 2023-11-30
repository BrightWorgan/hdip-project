import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://45.77.59.59/');

  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
  // import { test, expect } from '@playwright/test';

test('first test', async ({ page }) => {
  await page.goto('http://45.77.59.59/');
  await page.getByPlaceholder('Email Addresss').click();
  await page.getByPlaceholder('Email Addresss').click();
  await page.getByPlaceholder('Email Addresss').fill('x00192313@mytudublin.ie');
  await page.getByPlaceholder('Password...').click();
  await page.getByPlaceholder('Password...').fill('nRWRx8IMu5');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('img', { name: 'logo' }).click();
  await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.locator('#root div').filter({ hasText: 'HomeProjectTeamUser' }).locator('h2').click();
  await page.getByText('©2023 Sheet Scribe').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '' }).click();
  const page2 = await page2Promise;
  await page.getByRole('link', { name: 'Project' }).click();
  await page.getByRole('button', { name: 'Menu ' }).click();
  await page.getByRole('button', { name: 'Add Project ' }).click();
  await page.getByRole('heading', { name: 'Add a new Project' }).click();
  await page.getByText('Project Name').click();
  await page.getByText('Site ID', { exact: true }).click();
  await page.getByText('Location', { exact: true }).click();
  await page.getByText('Start Date').click();
  await page.getByText('Primary Director Name').click();
  await page.getByText('Contract Type').click();
  await page.getByText('licence #:', { exact: true }).click();
  await page.getByText('Description', { exact: true }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByLabel('Close').click();
});
});



import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('http://45.77.59.59/');
// });

  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
  // import { test, expect } from '@playwright/test';

  test.describe('Login and basic UI structure', () => {
    test.skip('Invalid login test', async ({ page }) => {
        // TO DO
    });

    test('Sucessful login test', async ({ page }) => {
      await test.step('load page', async () => {
        await page.goto('http://45.77.59.59/');
      });

      await test.step('login with correct email', async () => {
        const emailInput = await page.getByPlaceholder('Email Addresss');
        await expect(emailInput).toBeEmpty();
        await emailInput.click();
        await emailInput.type('edwardtest@test.com');
      });

      await test.step('type in the correct password', async () => {
        const passwordInput = await page.getByPlaceholder('Password...');
        await expect(passwordInput).toBeEmpty();
        await passwordInput.hover();
        await passwordInput.click();
        await passwordInput.type('Yc(bLS*od+iX');

      });

      await test.step('click the login button', async () => {
        const loginBtn = await page.getByRole('button', { name: 'Login' });
        await loginBtn.hover();
        await loginBtn.click();
      });
  
      // toast message confrim test
    
      });
  });

  test('Home Page UI structure', async ({ page }) => {
    await test.step('load page', async () => {
      await page.goto('http://45.77.59.59/');
    });

    await test.step('login with correct email and password', async () => {
      await page.getByPlaceholder('Email Addresss').click();
      await page.getByPlaceholder('Email Addresss').type('edwardtest@test.com');
      await page.getByPlaceholder('Password...').click();
      await page.getByPlaceholder('Password...').type('Yc(bLS*od+iX');
      await page.getByRole('button', { name: 'Login' }).click();
    });

    await test.step('', async () => {
     

    });

    await test.step('', async () => {
  
     
    });

  
    });


//await test.step('', async () => {

// });
// await page.getByRole('img', { name: 'logo' }).click();
//   await page.getByRole('link', { name: 'Settings' }).click();
//   await page.getByRole('link', { name: 'Home' }).click();
//   await page.locator('#root div').filter({ hasText: 'HomeProjectTeamUser' }).locator('h2').click();
//   await page.getByText('©2023 Sheet Scribe').click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: '' }).click();
//   const page1 = await page1Promise;
//   const page2Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: '' }).click();
//   const page2 = await page2Promise;
//   await page.getByRole('link', { name: 'Project' }).click();
//   await page.getByRole('button', { name: 'Menu ' }).click();
//   await page.getByRole('button', { name: 'Add Project ' }).click();
//   await page.getByRole('heading', { name: 'Add a new Project' }).click();
//   await page.getByText('Project Name').click();
//   await page.getByText('Site ID', { exact: true }).click();
//   await page.getByText('Location', { exact: true }).click();
//   await page.getByText('Start Date').click();
//   await page.getByText('Primary Director Name').click();
//   await page.getByText('Contract Type').click();
//   await page.getByText('licence #:', { exact: true }).click();
//   await page.getByText('Description', { exact: true }).click();
//   await page.getByRole('button', { name: 'Cancel' }).click();
//   await page.getByLabel('Close').click();



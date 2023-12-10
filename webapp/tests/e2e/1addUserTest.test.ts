import { test, expect } from '@playwright/test';

  test.describe('Login and basic UI structure', () => {
    test('Invalid login test', async ({ page }) => {
        await test.step('load page', async () => {
          await page.goto('http://45.77.59.59/');
        });        
      await test.step('login with incorrect email', async () => {
        const emailInput = await page.getByPlaceholder('Email Addresss');
        await expect(emailInput).toBeEmpty();
        await emailInput.click();
        await emailInput.type('edward@t.com');
      });

      await test.step('type in the incorrect password', async () => {
        const passwordInput = await page.getByPlaceholder('Password...');
        await expect(passwordInput).toBeEmpty();
        await passwordInput.hover();
        await passwordInput.click();
        await passwordInput.type('FAKEPASSWORD');

      });

      await test.step('click the login button', async () => {
        const loginBtn = await page.getByRole('button', { name: 'Login' });
        await loginBtn.hover();
        await loginBtn.click();
      });

        await test.step('confim toast message', async () => {
          const loginToast = await page.getByText('Invalid Login')
          await expect(loginToast).toBeVisible()
          await expect(loginToast).toHaveText('Invalid Login')
          
        });

    });
});

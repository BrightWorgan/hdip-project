import { test, expect } from '@playwright/test';

  test.describe('Login and add a new user', () => {
    test('Base UI structure', async ({ page }) => {
      await test.step('load page', async () => {
        await page.goto('baseURL' );
      });
  
      await test.step('login with correct email and password', async () => {
        await page.getByPlaceholder('Email Addresss').click();
        await page.getByPlaceholder('Email Addresss').type('edwardtest@test.com');
        await page.getByPlaceholder('Password...').click();
        await page.getByPlaceholder('Password...').type('Yc(bLS*od+iX');
        await page.getByRole('button', { name: 'Login' }).click();
      });
  
    
    });
  });

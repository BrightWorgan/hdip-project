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

      await test.step('confim toast message', async () => {
        const loginToast = await page.getByText('Logged In')
        await expect(loginToast).toBeVisible()
        await expect(loginToast).toHaveText('Logged In')
      });

      });
  });

  test('Base UI structure', async ({ page }) => {
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

    await test.step('Check Header text and logo', async () => {
      // logo
      const sheetScribeLogo = await page.getByRole('img', { name: 'logo' })
      await sheetScribeLogo.hover();
      await expect( sheetScribeLogo).toBeVisible();
      // header text
      const headerTitle = await page.getByRole('heading', { name: 'Welcome to Sheet Scribe' });
      const headerSubtitle = await page.getByRole('heading', { name: 'For all of your Traceable Archaeology and Heritage needs' });
      await expect(headerTitle).toBeVisible();
      await expect(headerTitle).toHaveCSS('color', 'rgb(33, 37, 41)' );
      await expect(headerSubtitle).toBeVisible();
      await expect(headerSubtitle).toHaveCSS('color', 'rgb(33, 37, 41)' );
  
    });

    await test.step('Confrim Navbar Structure', async () => {
      const homeTab = await page.getByRole('link', { name: 'Home' })
      await homeTab.hover();
      await expect(homeTab).toHaveCSS('color', 'rgb(35, 35, 43)');
  
      const projectTab = await page.getByRole('link', { name: 'Project' })
      await projectTab.hover();
      await expect(projectTab).toHaveCSS('color', 'rgb(214, 210, 185)');
      
      const teamTab = await page.getByRole('link', { name: 'Team' })
      await teamTab.hover();
      await expect(teamTab).toHaveCSS('color', 'rgb(214, 210, 185)');

      const profileTab = await page.getByRole('link', { name: 'User Profile' })
      await profileTab.hover();
      await expect(profileTab).toHaveCSS('color', 'rgb(214, 210, 185)');
      
      const settingsTab = await page.getByRole('link', { name: 'Settings' })
      await settingsTab.hover();
      await expect(settingsTab).toHaveCSS('color', 'rgb(214, 210, 185)');


    });

    await test.step('Confrim Footer Structure', async () => {
      const footerContainer = await page.getByRole('contentinfo');
      await expect (footerContainer).toHaveCSS('color', 'rgb(35, 35, 43)');
      await expect (footerContainer).toHaveCSS('background-color', 'rgb(214, 210, 185)');
      await footerContainer.click();
      await page.getByText('©2023 Sheet Scribe').click();
     
    });
  });

  
  test('Home Page structure', async ({ page }) => {
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

    await test.step('Check Carosol has visable buttons', async () => {
      const prevBtn = await page.getByRole('button', { name: 'Previous' })
      await expect(prevBtn).toBeVisible()
      await prevBtn.hover();
     

      const nextBtn = await page.getByRole('button', { name: 'Previous' })
      await expect(nextBtn).toBeVisible()
      await nextBtn.hover();
      
      await nextBtn.click();
      await prevBtn.click();
    });
    
  });

  test('Project Page structure', async ({ page }) => {
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

    await test.step('Check Carosol has visable buttons', async () => {
      const prevBtn = await page.getByRole('button', { name: 'Previous' })
      await expect(prevBtn).toBeVisible()
      await prevBtn.hover();
     

    });
    
  });



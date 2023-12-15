import { test, expect } from '@playwright/test';

  test.describe('Login and basic UI structure', () => {
    test('Invalid login test', async ({ page }) => {
        await test.step('load page', async () => {
          await page.goto('baseURL' );
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
        await page.goto('baseURL' );
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
        await page.goto('baseURL' );
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
        await page.goto('baseURL' );
      });

      await test.step('login with correct email and password', async () => {
        await page.getByPlaceholder('Email Addresss').click();
        await page.getByPlaceholder('Email Addresss').type('test@test.com');
        await page.getByPlaceholder('Password...').click();
        await page.getByPlaceholder('Password...').type('Test');
        await page.getByRole('button', { name: 'Login' }).click();
      });

      await test.step('Navigate to Project Page', async () => {
        await page.getByRole('link', { name: 'Project' }).click();
      });

      await test.step('Project Page FAB UI', async () => {
        const fabMenu = await page.getByRole('button', { name: 'Menu ' });
        await expect(fabMenu).toBeVisible();
        await fabMenu.hover();
        await fabMenu.click();
        await page.getByRole('button', { name: 'Add Project ' }).hover();
        await page.getByRole('button', { name: 'Edit Project ' }).hover();
        await page.getByRole('button', { name: 'Delete Project ' }).hover();
      });

      await test.step('Confirm Add Project Form layout', async () =>{
        const fabMenu = await page.getByRole('button', { name: 'Menu ' });
        await fabMenu.hover();
        await fabMenu.click();
        await page.getByRole('button', { name: 'Add Project ' }).click();
        await page.getByRole('heading', { name: 'Add a new Project' }).hover();
        await page.getByText('Project Name').hover();
        await page.getByPlaceholder('Project Name').hover();
        await page.getByText('Location', { exact: true }).hover();
        await page.getByText('Start Date').hover();
        await page.getByText('Primary Director Name').hover();
        await page.getByText('Contract TypePrivatePublicField SchoolResearch').hover();
        await page.getByLabel('Contract Type').selectOption('Public');
        await page.getByLabel('Contract Type').selectOption('Field School');
        await page.getByLabel('Contract Type').selectOption('Research');
        await page.getByText('licence #:', { exact: true }).hover();
        await page.getByText('Description', { exact: true }).hover();
        await page.getByRole('button', { name: 'Cancel' }).hover();
        await page.getByRole('button', { name: 'Submit' }).hover();
        await page.getByRole('button', { name: 'Cancel' }).click();
      })

        
    });

    test('Team Page structure', async ({ page }) => {
      await test.step('load page', async () => {
        await page.goto('baseURL' );
      });

      await test.step('login with correct email and password', async () => {
        await page.getByPlaceholder('Email Addresss').click();
        await page.getByPlaceholder('Email Addresss').type('test@test.com');
        await page.getByPlaceholder('Password...').click();
        await page.getByPlaceholder('Password...').type('Test');
        await page.getByRole('button', { name: 'Login' }).click();
      });

      await test.step('Navigate to Team Page', async () => {
        await page.getByRole('link', { name: 'Team' }).click();
      });

      await test.step('Team Page Table Confirm Column names and FAB UI', async () => {
        
        // Team Table column names
        await page.getByRole('cell', { name: 'First Name' }).hover();
        await page.getByRole('cell', { name: 'Last Name' }).hover();
        await page.getByRole('cell', { name: 'Mobile Number' }).hover();
        await page.getByRole('cell', { name: 'Email Address' }).hover();
        await page.getByRole('cell', { name: 'Home Address' }).hover();
        await page.getByRole('cell', { name: 'Experience' }).hover();
        await page.getByRole('cell', { name: 'Education' }).hover();
        await page.getByRole('cell', { name: 'Training Certs' }).hover();
        await page.getByRole('cell', { name: 'Drive' }).hover();
        await page.getByRole('cell', { name: 'Company Position' }).hover();
        await page.getByRole('cell', { name: 'Current Site' }).hover();

        // FAB
        const fabMenu = await page.getByRole('button', { name: 'Menu ' });
        await expect(fabMenu).toBeVisible();
        await fabMenu.hover();
        await fabMenu.click();
        await page.getByRole('button', { name: 'Add Team ' }).hover();
        await page.getByRole('button', { name: 'Edit Team ' }).hover();
        await page.getByRole('button', { name: 'Delete Team ' }).hover();
      });
    });
    
    test('Profile Page structure', async ({ page }) => {
      await test.step('load page', async () => {
        await page.goto('baseURL' );
      });

      await test.step('login with correct email and password', async () => {
        await page.getByPlaceholder('Email Addresss').click();
        await page.getByPlaceholder('Email Addresss').type('test@test.com');
        await page.getByPlaceholder('Password...').click();
        await page.getByPlaceholder('Password...').type('Test');
        await page.getByRole('button', { name: 'Login' }).click();
      });

      await test.step('navigate to User Profile Page structure', async () => {
        // navigate to user profile page
        await page.getByRole('link', { name: 'User Profile' }).hover();
        await page.getByRole('link', { name: 'User Profile' }).click();

      });

      await test.step('confirm User Profile Page structure', async () => {
        
        // user profile picture
        await page.getByRole('img', { name: 'user profile image' }).click();

        // user details card
        await page.getByRole('heading', { name: 'Test Test' }).hover();
        await page.getByRole('heading', { name: 'Name: Test T.' }).hover();
        await page.getByRole('heading', { name: 'Position: Director' }).hover();
        await page.getByText('Education: PHD / Level').hover();
        await page.getByText('Experience: Director').hover();
        await page.getByText('Adddress:').hover();
        await page.getByText('Training: Safe Pass').hover();
        await page.getByText('Drive:').hover();
        await page.getByText('Company Position: Director').hover();
        await expect(page.getByRole('link', { name: 'LinkedIn' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Twitter' })).toBeVisible()
        
        // finds table
        const tableHeader =  await page.getByRole('heading', { name: 'Finds Register:' });
        await expect(tableHeader).toBeVisible();
        await tableHeader.hover();

        const findNum =   await page.getByRole('cell', { name: 'Finds Number' });
        await expect(findNum).toBeVisible();
        await findNum.hover();

        const contextNum =  await page.getByRole('cell', { name: 'Context Number' });
        await expect(contextNum).toBeVisible();
        await contextNum.hover();

        const fillNum =  await page.getByRole('cell', { name: 'Fill Number' });
        await expect(fillNum).toBeVisible();
        await fillNum.hover();

        const des =  await page.getByRole('cell', { name: 'Description' });
        await expect(des).toBeVisible();
        await des.hover();

        const material =   await page.getByRole('cell', { name: 'Material' });
        await expect(material).toBeVisible();
        await material.hover();

        const photo =  await page.getByRole('cell', { name: 'Photograph' });
        await expect(photo).toBeVisible();
        await photo.hover();

        const bag =  await page.getByRole('cell', { name: 'Bagged' });
        await expect(bag).toBeVisible();
        await bag.hover();
    
        
        const date =  await page.getByRole('cell', { name: 'Date' });
        await expect(date).toBeVisible();
        await date.hover();

        const person =  await page.getByRole('cell', { name: 'Found by' });
        await expect(person).toBeVisible();
        await person.hover();
  
      });
      
    })

});

    



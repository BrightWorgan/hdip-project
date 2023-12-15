import { test, expect } from '@playwright/test';

  test.describe('Login and add a new user, and then delete the user ', () => {
    test('Login and add a new user', async ({ page }) => {
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
        await page.getByRole('link', { name: 'Team' }).hover();
        await page.getByRole('link', { name: 'Team' }).click();
      });
  
      await test.step('Open FAB and the Add Team Form', async () => {
        const fabMenu = await page.getByRole('button', { name: 'Menu ' });
        await fabMenu.hover();
        await fabMenu.click();
        await page.getByRole('button', { name: 'Add Team ' }).hover();
        await page.getByRole('button', { name: 'Add Team ' }).click();
      });

      await test.step('Confirm add form structure / UI', async () => {
        // await page.getByRole('button', { name: 'Add Team ' }).click();
        const formHeader = await page.getByRole('heading', { name: 'Add / Edit a new Team Member' })
        await expect(formHeader).toBeVisible();
        await formHeader.hover();        
        await formHeader.click();

        // confirm all imputs are present
        await page.getByText('Forename').hover();
        await page.getByText('Surname').hover();
        await page.getByText('Contact Number').hover();
        await page.getByText('Email Addresss').hover();
        await page.getByText('Primary Address Line').hover();
        await page.getByText('Town/City').hover();
        await page.getByText('County').hover();
        await page.getByText('Eircode').hover();
        await page.getByText('Driving').hover();
        await page.getByRole('dialog').getByText('Education').hover();
        await page.getByRole('dialog').getByText('Experience').hover();
        await page.getByText('Training', { exact: true }).hover();
        await page.getByText('Current Site / None / etc.').hover();
        await page.getByText('Current Position').hover();
        await page.getByPlaceholder('Temporary Password.').hover();
        await page.getByRole('button', { name: 'Cancel' }).hover();
        await page.getByRole('button', { name: 'Submit' }).hover();
      });

      await test.step('Empty form validation', async () => {
        // empty form
      await page.getByRole('button', { name: 'Submit' }).hover();
      await page.getByRole('button', { name: 'Submit' }).click();
      await page.getByText('eircode must be at least 2').hover();
      });

      await test.step('Incorrect data', async () => {
        // testing validation / error message display one input at a time
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByText('eircode must be at least 2').hover();
        await page.getByPlaceholder('W91VA07').click();
        await page.getByPlaceholder('W91VA07').fill('T00E1S2T');
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByText('county is a required field').hover();
        await page.getByPlaceholder('Dublin').click();
        await page.getByPlaceholder('Dublin').fill('Dublin');
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByText('townCity must be at least 2').hover();
        await page.getByPlaceholder('Clontarf').click();
        await page.getByPlaceholder('Clontarf').fill('Test');
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByText('address must be at least 2').click();
        await page.getByPlaceholder('Apt 23, The Farmhouse').click();
        await page.getByPlaceholder('Apt 23, The Farmhouse').fill('Test');
        await page.getByText('address must be at least 2').click();
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByPlaceholder('Email Addresss').click();
        await page.getByPlaceholder('Email Addresss').fill('testemail@test.com');
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByText('number must be at least 10').hover();
        await page.getByPlaceholder('+353 80 000 00').click();
        await page.getByPlaceholder('+353 80 000 00').fill('1234567890');
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByText('surname must be at least 2').hover();
        await page.getByPlaceholder('Surname').click();
        await page.getByPlaceholder('Surname').fill('Test');
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByText('name must be at least 2').hover();
        await page.getByPlaceholder('Forename').click();
        await page.getByPlaceholder('Forename').fill('Tester');
        await page.getByRole('button', { name: 'Cancel' }).hover();
        await page.getByRole('button', { name: 'Cancel' }).click();
      });

      await test.step('Incorrect data', async () => {
        // 
        await page.getByPlaceholder('Forename').click();
        await page.getByPlaceholder('Forename').type('Playwright');
        await page.getByPlaceholder('Surname').click();
        await page.getByPlaceholder('Forename').click();
        await page.getByPlaceholder('Surname').click();
        await page.getByPlaceholder('Surname').fill('Endtoend');
        await page.getByPlaceholder('+353 80 000 00').click();
        await page.getByPlaceholder('+353 80 000 00').fill('0830000009');
        await page.getByPlaceholder('Email Addresss').click();
        await page.getByPlaceholder('Email Addresss').fill('test@playwright.ie');
        await page.getByPlaceholder('Apt 23, The Farmhouse').click();
        await page.getByPlaceholder('Apt 23, The Farmhouse').fill('The Stage');
        await page.getByPlaceholder('Clontarf').click();
        await page.getByPlaceholder('Clontarf').fill('Dublin ');
        await page.getByPlaceholder('Dublin').click();
        await page.getByPlaceholder('Dublin').fill('Dublin');
        await page.getByPlaceholder('W91VA07').click();
        await page.getByPlaceholder('W91VA07').fill('D20Test');
        await page.getByLabel('Driving').selectOption('No');
        await page.getByLabel('Education').selectOption('PHD / Level 10');
        await page.getByLabel('Experience').selectOption('Supervisor');
        await page.getByLabel('Training').selectOption('First Aid');
        await page.getByLabel('Current Position').selectOption('Director');
        await page.getByPlaceholder('Current Site').click();
        await page.getByPlaceholder('Current Site').fill('Test');
        await page.getByPlaceholder('Temporary Password.').click();
        await page.getByPlaceholder('Temporary Password.').click();
        await page.getByPlaceholder('Temporary Password.').fill('Playwright');
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('row', { name: 'Playwright Endtoend' }).getByRole('checkbox').check();
        await page.getByRole('row', { name: 'Playwright Endtoend' }).getByRole('checkbox').uncheck();
        await page.getByRole('cell', { name: 'Playwright' }).nth(1).click();
        await page.getByRole('cell', { name: 'Endtoend' }).click();
        await page.getByRole('cell', { name: '0830000009' }).click();
        await page.getByRole('cell', { name: 'test@playwright.ie' }).click();
        await page.getByRole('cell', { name: 'The Stage' }).click();
        await page.getByRole('cell', { name: 'Supervisor' }).click();
        await page.getByRole('cell', { name: 'PHD / Level' }).nth(4).click();
        await page.getByRole('cell', { name: 'First Aid' }).nth(1).click();
        await page.getByRole('cell', { name: 'Test', exact: true }).nth(3).click();
        await page.getByRole('button', { name: 'Submit' }).hover();
        await page.getByRole('button', { name: 'Submit' }).click();
      });

      await test.step('Confirm new user has been added to the table', async () => {
        await page.getByRole('row', { name: 'Tester Test 1234567890' }).getByRole('checkbox').hover();
        await page.getByRole('row', { name: 'Tester Test 1234567890' }).getByRole('checkbox').check();
        await page.getByRole('row', { name: 'Tester Test 1234567890' }).getByRole('checkbox').uncheck();
      });

    });

    test('Login as that new user', async ({ page }) => {
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
        await page.getByRole('link', { name: 'Team' }).hover();
        await page.getByRole('link', { name: 'Team' }).click();
      });
      
      await test.step('Navigate to User Profile Page', async () => {
        await page.getByRole('link', { name: 'User Profile' }).hover();
        await page.getByRole('link', { name: 'User Profile' }).click();
      });

      await test.step('Confirm User profile structure / UI', async ( )=>{
        // user profile picture
        await page.getByRole('img', { name: 'user profile image' }).click();

        // user card details
        await page.getByRole('heading', { name: 'Test Test' }).click();
        await page.getByRole('heading', { name: 'Name: Test T.' }).click();
        await page.getByRole('heading', { name: 'Position: Director' }).click();
        await page.getByText('Education: PHD / Level').click();
        await page.getByText('Experience: Director').click();
        await page.getByText('Adddress:').click();
        await page.getByText('Training: Safe Pass').click();
        await page.getByText('Drive:').click();
        await page.getByText('Company Position: Director').click();
        await page.getByRole('link', { name: 'LinkedIn' }).click();
        await page.getByRole('link', { name: 'Twitter' }).click();

        // Finds table Header and column names
        await page.getByRole('heading', { name: 'Finds Register:' }).click();
        await page.getByRole('cell', { name: 'Finds Number' }).click();
        await page.getByRole('cell', { name: 'Context Number' }).click();
        await page.getByRole('cell', { name: 'Fill Number' }).click();
        await page.getByRole('cell', { name: 'Description' }).click();
        await page.getByRole('cell', { name: 'Material' }).click();
        await page.getByRole('cell', { name: 'Photograph' }).click();
        await page.getByRole('cell', { name: 'Bagged' }).click();
        await page.getByRole('cell', { name: 'Date' }).click();
        await page.getByRole('cell', { name: 'Found by' }).click();
      });
    });
  });

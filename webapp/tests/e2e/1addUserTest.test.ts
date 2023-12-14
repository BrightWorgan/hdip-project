import { test, expect } from '@playwright/test';

  test.describe('Login and add a new user', () => {
    test('Base UI structure', async ({ page }) => {
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
        await page.getByRole('button', { name: 'Submit' }).hover();
        await page.getByRole('button', { name: 'Submit' }).click();
      });

      await test.step('Confirm new user has been added to the table', async () => {
        await page.getByRole('row', { name: 'Tester Test 1234567890' }).getByRole('checkbox').hover();
        await page.getByRole('row', { name: 'Tester Test 1234567890' }).getByRole('checkbox').check();
        await page.getByRole('row', { name: 'Tester Test 1234567890' }).getByRole('checkbox').uncheck();
      });

    });
  });

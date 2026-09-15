import { expect } from '@playwright/test';
import test from '../lib/baseTest.ts';
import { users } from '../support/users.ts';

test.describe('Products page', () => {
  test('standard user can view products and open the cart', async ({
    loginPage,
    productsPage,
  }) => {
    await test.step('Log in as the standard user', async () => {
      await loginPage.visit();
      await loginPage.submitLogin(
        users.standard.username,
        users.standard.password,
      );
    });

    await test.step('Verify the Products page title', async () => {
      await expect(productsPage.title).toHaveText('Products');
    });

    await test.step('Open the cart', async () => {
      await productsPage.openCart();
    });

    await test.step('Verify the cart is open', async () => {
      await expect(productsPage.page).toHaveURL(/cart\.html$/);
    });
  });
});

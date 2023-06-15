const { test, expect } = require('@playwright/test');

test('Demo Login Test 1', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Paul Collings' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.close();
})
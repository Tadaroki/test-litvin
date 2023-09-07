const { test, expect } = require("@playwright/test");

test("hCare Login Test", async ({ page }) => {
  await page.goto("https://utility2.intrahealth.com/1004/hcare/#/login");
  await expect(page.locator('.logo')).toBeVisible();
  await expect(page.locator('text = Welcome to Aero HCare provider')).toBeVisible();
  await expect(page.getByText('Forgot password?')).toBeEnabled
  await expect(page.locator('text = Log In')).toBeEnabled(); 
  await expect(page.getByRole('link', { name: 'Privacy Notice' })).toBeVisible();
  await page.getByLabel('userId').click();
  await page.getByLabel("userId").fill("lit");
  await page.getByLabel('password').click();
  await page.getByLabel("password").fill("Zaxscd123a!");
  await page.getByText("Log In").click();
  await expect(page).toHaveURL('https://utility2.intrahealth.com/1004/hcare/#/provider/patients/recent');
  await page.pause();
});

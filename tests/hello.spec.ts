import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="username"]').press("Tab");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.getByRole("button", { name: "Close Menu" }).click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator("a").filter({ hasText: "1" }).click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await page.locator('[data-test="continue-shopping"]').click();
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.getByRole("link", { name: "Logout" }).click();
});



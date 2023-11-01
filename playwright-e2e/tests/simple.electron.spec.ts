import { expect } from "@playwright/test";
import { test } from "../src/electron-test";

test("startup page", async ({ page }, testInfo) => {
  await expect(page).toHaveScreenshot(`${testInfo.title}.png`);
});

test("click on links does not change page", async ({ page }, testInfo) => {
  await page.getByRole("link", { name: "Documentation" }).click();
  await expect(page).toHaveScreenshot(`${testInfo.title}.png`);
});

import { expect } from "@playwright/test";
import { test } from "../src/electron-test";

test("startup page", async ({ page }, testInfo) => {
  await expect(page).toHaveScreenshot(`${testInfo.title}.png`);
});

test("click on links does not change page", async ({ page }, testInfo) => {
  await page.getByRole("link", { name: "Documentation" }).click();
  await expect(page).toHaveScreenshot(`${testInfo.title}.png`);
});

test("click on contact form and fill out form", async ({ page }, testInfo) => {
  await page.getByText("Getting Help").click();

  const emailField = page.getByLabel("Email");
  const subscribeField = page.locator("#contact-email-subscribe");
  const questionField = page.getByLabel("Question");

  await emailField.click();
  await emailField.fill("contact@form.email");

  await subscribeField.check();

  await questionField.click();
  await questionField.fill("Does it work?");

  await expect(emailField).toHaveValue("contact@form.email");
  await expect(subscribeField).toBeChecked();
  await expect(questionField).toHaveValue("Does it work?");

  // Submit
  await page.getByRole("button", { name: "Get Help!" }).click();

  await expect(emailField).toBeEmpty();
  await expect(subscribeField).not.toBeChecked();
  await expect(questionField).toBeEmpty();
});

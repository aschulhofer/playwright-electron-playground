import { expect } from "@playwright/test";
import { test } from "../src/electron-test";

test("startup page", async ({ electronApp }, testInfo) => {
  const window = await electronApp.firstWindow();

  await expect(window).toHaveScreenshot(`${testInfo.title}.png`);
});

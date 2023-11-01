import {
  ElectronApplication,
  Page,
  test as base,
  _electron as electron,
} from "@playwright/test";

export type TestOptions = {
  executablePath: string;
};

export type TestFixture = {
  electronApp: ElectronApplication;
  window: Page;
  launchElectronApp: (executablePath: string) => Promise<ElectronApplication>;
};

export const test = base
  .extend<TestOptions>({
    // Define an option and provide a default value.
    // We can later override it in the config.
    executablePath: ["not-set", { option: true }],
  })
  .extend<TestFixture>({
    launchElectronApp: async ({}, use) => {
      const apps: ElectronApplication[] = [];

      await use(async (executablePath: string) => {
        console.log("Launch electron app", {
          executablePath,
        });
        process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
        const electronApp = await electron.launch({
          executablePath,
        });

        apps.push(electronApp);

        return electronApp;
      });

      for (const app of apps) {
        await app.close();
      }
    },

    electronApp: async ({ launchElectronApp, executablePath }, use) => {
      await use(await launchElectronApp(executablePath));
    },

    window: async ({ electronApp }, use) => {
      await use(await electronApp.firstWindow());
    },

    page: async ({ window }, use) => {
      await use(window);
    },
  });

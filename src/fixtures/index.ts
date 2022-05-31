import { Page, test as base } from "@playwright/test";

interface Fixtures {
  basePage: Page;
  page1: Page;
  page2: Page;
  page3: Page;
  page4: Page;
}

export const myTest = base.extend<Fixtures>({
  basePage: async ({ context }, use, info) => {
    const page = await context.newPage();
    await use(page);
    await page.close();
  },

  page1: async ({ basePage }, use) => {
    await basePage.waitForTimeout(1000);
    await use(basePage);
  },

  page2: async ({ basePage }, use) => {
    await basePage.waitForTimeout(1000);
    await use(basePage);
  },

  page3: async ({ basePage }, use) => {
    await basePage.waitForTimeout(1000);
    await use(basePage);
  },

  page4: async ({ basePage }, use) => {
    await basePage.waitForTimeout(1000);
    await use(basePage);
  },
});

const DefaultUseConfig: Parameters<typeof myTest.use>[0] = {
  viewport: { width: 1920, height: 1080 },
  trace: { mode: "on", snapshots: true },
  video: { mode: "on", size: { width: 1920, height: 1080 } },
};

myTest.use(DefaultUseConfig);

import { myTest } from "../fixtures";

myTest.describe("Dummy page2", () => {
  myTest("dummy 1", async ({ page2 }) => {
    await page2.goto(process.env.URL);
    await page2.waitForTimeout(2000);
  });

  myTest("dummy 2", async ({ page2 }) => {
    await page2.goto(process.env.URL);
    await page2.waitForTimeout(2000);
  });

  myTest("dummy 3", async ({ page2 }) => {
    await page2.goto(process.env.URL);
    await page2.waitForTimeout(2000);
  });

  myTest("dummy 4", async ({ page2 }) => {
    await page2.goto(process.env.URL);
    await page2.waitForTimeout(2000);
  });
});

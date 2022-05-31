import { myTest } from "../fixtures";

myTest.describe("Dummy page1", () => {
  myTest("dummy 1", async ({ page1 }) => {
    await page1.goto(process.env.URL);
    await page1.waitForTimeout(2000);
  });

  myTest("dummy 2", async ({ page1 }) => {
    await page1.goto(process.env.URL);
    await page1.waitForTimeout(2000);
  });

  myTest("dummy 3", async ({ page1 }) => {
    await page1.goto(process.env.URL);
    await page1.waitForTimeout(2000);
  });

  myTest("dummy 4", async ({ page1 }) => {
    await page1.goto(process.env.URL);
    await page1.waitForTimeout(2000);
  });
});

import { myTest } from "../fixtures";

myTest.describe("Dummy page3", () => {
  myTest("dummy 1", async ({ page3 }) => {
    await page3.goto(process.env.URL);
    await page3.waitForTimeout(2000);
  });

  myTest("dummy 2", async ({ page3 }) => {
    await page3.goto(process.env.URL);
    await page3.waitForTimeout(2000);
  });

  myTest("dummy 3", async ({ page3 }) => {
    await page3.goto(process.env.URL);
    await page3.waitForTimeout(2000);
  });

  myTest("dummy 4", async ({ page3 }) => {
    await page3.goto(process.env.URL);
    await page3.waitForTimeout(2000);
  });
});

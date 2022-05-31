import { myTest } from "../fixtures";

myTest.describe("Dummy page4", () => {
  myTest("dummy 1", async ({ page4 }) => {
    await page4.goto(process.env.URL);
    await page4.waitForTimeout(2000);
  });

  myTest("dummy 2", async ({ page4 }) => {
    await page4.goto(process.env.URL);
    await page4.waitForTimeout(2000);
  });

  myTest("dummy 3", async ({ page4 }) => {
    await page4.goto(process.env.URL);
    await page4.waitForTimeout(2000);
  });

  myTest("dummy 4", async ({ page4 }) => {
    await page4.goto(process.env.URL);
    await page4.waitForTimeout(2000);
  });
});

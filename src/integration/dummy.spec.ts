import { myTest } from "../fixtures";

myTest.describe("Dummy base 1", () => {
  myTest("dummy 1", async ({ basePage }) => {
    await basePage.goto(process.env.URL);
    await basePage.waitForTimeout(2000);
  });

  myTest("dummy 2", async ({ basePage }) => {
    await basePage.goto(process.env.URL);
    await basePage.waitForTimeout(2000);
  });

  myTest("dummy 3", async ({ basePage }) => {
    await basePage.goto(process.env.URL);
    await basePage.waitForTimeout(2000);
  });

  myTest("dummy 4", async ({ basePage }) => {
    await basePage.goto(process.env.URL);
    await basePage.waitForTimeout(2000);
  });
});

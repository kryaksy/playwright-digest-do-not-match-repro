// playwright.config.ts
import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  reporter: [
    ["html", { open: "never" }],
    ["list"],
    ["junit", { outputFile: "playwright-report/results.xml" }],
  ],
  timeout: 120000,
};

export default config;

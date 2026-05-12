import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e-tests",
  webServer: {
    command: "npm run start",
    url: "http://localhost:8080",
  },
  use: {
    baseURL: "http://localhost:8080/",
  },
});

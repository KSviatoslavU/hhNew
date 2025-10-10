import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    alias: {
      "\\.svg(\\?react)?$": "./src/__mocks__/svgMock.ts",
    },
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    typecheck: {
      tsconfig: "./tsconfig.vitest.json",
    },
  },
});

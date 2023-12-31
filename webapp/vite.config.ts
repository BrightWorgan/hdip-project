import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    global: true,
    setupFiles: "./tests/setup.ts",
    include: ["**/*.test.tsx"],
    environment: "jsdom",
    coverage: {
      provider: "istanbul",
    },
  },
});

import stylex from "@stylexjs/unplugin";
import react from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite-plus";

const isTestMode = !!process.env.VITEST;

export default defineConfig({
  // vite-plus hooks
  staged: {
    "src/**/*.{js,ts,tsx,css,md}": ["vp fmt"],
    "**/*.json": ["vp fmt"],
  },
  lint: {
    plugins: ["oxc", "typescript", "unicorn", "react"],
    jsPlugins: ["@stylexjs/eslint-plugin"],
    categories: {
      correctness: "warn",
    },
    env: {
      builtin: true,
    },
    ignorePatterns: ["dist", "coverage"],
    rules: {
      "@stylexjs/valid-styles": "error",
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    printWidth: 80,
    sortPackageJson: false,
    ignorePatterns: [],
  },
  plugins: [
    react(),
    isTestMode
      ? babel({
          plugins: [
            [
              "@stylexjs/babel-plugin",
              {
                dev: true,
                unstable_moduleResolution: {
                  type: "commonJS",
                  rootDir: process.cwd(),
                },
                importSources: ["@stylexjs/stylex"],
                runtimeInjection: true,
              },
            ],
          ],
        })
      : stylex.vite({ useCSSLayers: true }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
});

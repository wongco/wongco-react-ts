import babel from "@rolldown/plugin-babel";
import stylex from "@stylexjs/unplugin";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

const isTestMode = !!process.env.VITEST;

const styleXBabelTestPlugin = [
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
];

export default defineConfig({
  // vite-plus hooks
  staged: {
    "*.{js,ts,tsx,css,md,json}": "vp check --fix",
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
    sortPackageJson: true,
    sortImports: true,
    ignorePatterns: [],
    singleQuote: false,
  },
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
      plugins: isTestMode ? [styleXBabelTestPlugin] : [],
    }),
    isTestMode ? undefined : stylex.vite({ useCSSLayers: true }),
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

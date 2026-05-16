import stylex from "@stylexjs/unplugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "src/**/*.{js,ts,tsx,css,md}": [
      "vp fmt"
    ],
    "**/*.json": [
      "vp fmt"
    ]
  },
  lint: {
    "plugins": [
      "oxc",
      "typescript",
      "unicorn",
      "react"
    ],
    "jsPlugins": [
      "@stylexjs/eslint-plugin"
    ],
    "categories": {
      "correctness": "warn"
    },
    "env": {
      "builtin": true
    },
    "ignorePatterns": [
      "dist",
      "coverage",
    ],
    "rules": {
      "@stylexjs/valid-styles": "error"
    },
    "options": {
      "typeAware": true,
      "typeCheck": true
    }
  },
  fmt: {
    printWidth: 80,
    sortPackageJson: false,
    ignorePatterns: [],
  },
  plugins: [
    stylex.vite({
      useCSSLayers: true,
    }),
    react(),
  ],
});

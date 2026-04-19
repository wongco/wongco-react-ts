import stylexPlugin from "@stylexjs/eslint-plugin";

export default [
  {
    ignores: ["dist", "coverage", "vite-stylex-plugin.mjs"],
  },
  {
    plugins: {
      "@stylexjs": stylexPlugin,
    },
    rules: {
      "@stylexjs/valid-styles": "error",
    },
  },
];

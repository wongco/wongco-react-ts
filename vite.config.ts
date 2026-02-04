import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import styleX from "./vite-stylex-plugin.mjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    styleX(),
  ],
});

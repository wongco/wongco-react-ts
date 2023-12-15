import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import styleX from "./vite-stylex-plugin/index.mjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), styleX()],
});

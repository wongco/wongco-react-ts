import stylexBabelPlugin from '@stylexjs/babel-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite-plus';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            stylexBabelPlugin,
            {
              dev: true,
              unstable_moduleResolution: { type: 'commonJS', rootDir: process.cwd() },
              importSources: ['@stylexjs/stylex'],
              runtimeInjection: true,
            },
          ],
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
});

import react from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { defineConfig } from 'vite-plus';

export default defineConfig({
  plugins: [
    react(),
    babel({
      plugins: [
        [
          '@stylexjs/babel-plugin',
          {
            dev: true,
            unstable_moduleResolution: { type: 'commonJS', rootDir: process.cwd() },
            importSources: ['@stylexjs/stylex'],
            runtimeInjection: true,
          },
        ],
      ],
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

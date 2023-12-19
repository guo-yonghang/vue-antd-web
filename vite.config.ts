import { defineConfig } from 'vite';
import { resolve } from 'path';
import { createVitePlugins } from './build/plugins';

export default defineConfig({
  plugins: createVitePlugins(),
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
});

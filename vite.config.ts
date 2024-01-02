import { defineConfig } from 'vite';
import { resolve } from 'path';
import { createVitePlugins } from './build/plugins';
import { createViteBuild } from './build/build';

export default defineConfig({
  base: './',
  plugins: createVitePlugins(),
  build: createViteBuild(),
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});

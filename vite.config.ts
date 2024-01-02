import { defineConfig } from 'vite';
import { resolve } from 'path';
import { createVitePlugins } from './build/plugins';
import { createViteBuild } from './build/build';

export default defineConfig({
  plugins: createVitePlugins(),
  build: createViteBuild(),
  resolve: {
    alias: {
      '@': resolve('src'),
    },
    dedupe: ['vue'],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});

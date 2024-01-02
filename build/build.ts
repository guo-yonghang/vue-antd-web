import { BuildOptions } from 'vite';

export const createViteBuild = (): BuildOptions => {
  return {
    rollupOptions: {
      output: {
        entryFileNames: `assets/entry-[name]-[hash].js`,
        chunkFileNames: `assets/chunk-[name]-[hash].js`,
        assetFileNames: `assets/assets-[name]-[hash].[ext]`,
      },
    },
  };
};

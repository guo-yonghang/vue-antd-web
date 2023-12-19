import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { PluginOption } from 'vite';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import { vitePluginForArco } from '@arco-plugins/vite-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite';

export const createVitePlugins = (): (PluginOption | PluginOption[])[] => {
  return [
    vue(),
    vueJsx(),
    vueSetupExtend({}),
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
    vitePluginForArco({
      style: 'css',
    }),
    //使用自定义svg图标/assets/svgs目录下
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/svgs')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ];
};

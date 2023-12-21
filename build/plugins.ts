import { resolve } from 'path';
import { PluginOption } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite';

export const createVitePlugins = (): (PluginOption | PluginOption[])[] => {
  return [
    vue(),
    //使用tsx
    vueJsx(),
    //script标签上声明组件名
    vueSetupExtend({}),
    //打包分析
    visualizer(),
    Components({
      dts: true,
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        }),
      ],
    }),
    //使用自定义svg图标/assets/svgs目录下
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/svgs')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ];
};

// vite.config.ts
import { defineConfig } from "file:///C:/Users/19512/Desktop/vue-study/node_modules/vite/dist/node/index.js";
import { resolve as resolve2 } from "path";

// build/plugins.ts
import { resolve } from "path";
import { visualizer } from "file:///C:/Users/19512/Desktop/vue-study/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { ArcoResolver } from "file:///C:/Users/19512/Desktop/vue-study/node_modules/unplugin-vue-components/dist/resolvers.js";
import { vitePluginForArco } from "file:///C:/Users/19512/Desktop/vue-study/node_modules/@arco-plugins/vite-vue/lib/index.js";
import { createSvgIconsPlugin } from "file:///C:/Users/19512/Desktop/vue-study/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import vue from "file:///C:/Users/19512/Desktop/vue-study/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/19512/Desktop/vue-study/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import AutoImport from "file:///C:/Users/19512/Desktop/vue-study/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/19512/Desktop/vue-study/node_modules/unplugin-vue-components/dist/vite.js";
import vueSetupExtend from "file:///C:/Users/19512/Desktop/vue-study/node_modules/unplugin-vue-setup-extend-plus/dist/vite.js";
var createVitePlugins = () => {
  return [
    vue(),
    //使用tsx
    vueJsx(),
    //script标签上声明组件名
    vueSetupExtend({}),
    //打包分析
    visualizer(),
    AutoImport({
      resolvers: [ArcoResolver()]
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true
        })
      ]
    }),
    vitePluginForArco({
      style: "css"
    }),
    //使用自定义svg图标/assets/svgs目录下
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/svgs")],
      symbolId: "icon-[dir]-[name]"
    })
  ];
};

// vite.config.ts
var vite_config_default = defineConfig({
  plugins: createVitePlugins(),
  resolve: {
    alias: {
      "@": resolve2("src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvcGx1Z2lucy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDE5NTEyXFxcXERlc2t0b3BcXFxcdnVlLXN0dWR5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxOTUxMlxcXFxEZXNrdG9wXFxcXHZ1ZS1zdHVkeVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvMTk1MTIvRGVza3RvcC92dWUtc3R1ZHkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBjcmVhdGVWaXRlUGx1Z2lucyB9IGZyb20gJy4vYnVpbGQvcGx1Z2lucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IGNyZWF0ZVZpdGVQbHVnaW5zKCksXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiByZXNvbHZlKCdzcmMnKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMTk1MTJcXFxcRGVza3RvcFxcXFx2dWUtc3R1ZHlcXFxcYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDE5NTEyXFxcXERlc2t0b3BcXFxcdnVlLXN0dWR5XFxcXGJ1aWxkXFxcXHBsdWdpbnMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzE5NTEyL0Rlc2t0b3AvdnVlLXN0dWR5L2J1aWxkL3BsdWdpbnMudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJztcclxuaW1wb3J0IHsgQXJjb1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJztcclxuaW1wb3J0IHsgdml0ZVBsdWdpbkZvckFyY28gfSBmcm9tICdAYXJjby1wbHVnaW5zL3ZpdGUtdnVlJztcclxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnO1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XHJcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCc7XHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnO1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcclxuaW1wb3J0IHZ1ZVNldHVwRXh0ZW5kIGZyb20gJ3VucGx1Z2luLXZ1ZS1zZXR1cC1leHRlbmQtcGx1cy92aXRlJztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVWaXRlUGx1Z2lucyA9ICgpOiAoUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10pW10gPT4ge1xyXG4gIHJldHVybiBbXHJcbiAgICB2dWUoKSxcclxuICAgIC8vXHU0RjdGXHU3NTI4dHN4XHJcbiAgICB2dWVKc3goKSxcclxuICAgIC8vc2NyaXB0XHU2ODA3XHU3QjdFXHU0RTBBXHU1OEYwXHU2NjBFXHU3RUM0XHU0RUY2XHU1NDBEXHJcbiAgICB2dWVTZXR1cEV4dGVuZCh7fSksXHJcbiAgICAvL1x1NjI1M1x1NTMwNVx1NTIwNlx1Njc5MFxyXG4gICAgdmlzdWFsaXplcigpLFxyXG4gICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgIHJlc29sdmVyczogW0FyY29SZXNvbHZlcigpXSxcclxuICAgIH0pLFxyXG4gICAgQ29tcG9uZW50cyh7XHJcbiAgICAgIHJlc29sdmVyczogW1xyXG4gICAgICAgIEFyY29SZXNvbHZlcih7XHJcbiAgICAgICAgICBzaWRlRWZmZWN0OiB0cnVlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICBdLFxyXG4gICAgfSksXHJcbiAgICB2aXRlUGx1Z2luRm9yQXJjbyh7XHJcbiAgICAgIHN0eWxlOiAnY3NzJyxcclxuICAgIH0pLFxyXG4gICAgLy9cdTRGN0ZcdTc1MjhcdTgxRUFcdTVCOUFcdTRFNDlzdmdcdTU2RkVcdTY4MDcvYXNzZXRzL3N2Z3NcdTc2RUVcdTVGNTVcdTRFMEJcclxuICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcclxuICAgICAgaWNvbkRpcnM6IFtyZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL3N2Z3MnKV0sXHJcbiAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nLFxyXG4gICAgfSksXHJcbiAgXTtcclxufTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0UixTQUFTLG9CQUFvQjtBQUN6VCxTQUFTLFdBQUFBLGdCQUFlOzs7QUNEZ1IsU0FBUyxlQUFlO0FBRWhVLFNBQVMsa0JBQWtCO0FBQzNCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMseUJBQXlCO0FBQ2xDLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxvQkFBb0I7QUFFcEIsSUFBTSxvQkFBb0IsTUFBeUM7QUFDeEUsU0FBTztBQUFBLElBQ0wsSUFBSTtBQUFBO0FBQUEsSUFFSixPQUFPO0FBQUE7QUFBQSxJQUVQLGVBQWUsQ0FBQyxDQUFDO0FBQUE7QUFBQSxJQUVqQixXQUFXO0FBQUEsSUFDWCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsYUFBYSxDQUFDO0FBQUEsSUFDNUIsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVztBQUFBLFFBQ1QsYUFBYTtBQUFBLFVBQ1gsWUFBWTtBQUFBLFFBQ2QsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGtCQUFrQjtBQUFBLE1BQ2hCLE9BQU87QUFBQSxJQUNULENBQUM7QUFBQTtBQUFBLElBRUQscUJBQXFCO0FBQUEsTUFDbkIsVUFBVSxDQUFDLFFBQVEsUUFBUSxJQUFJLEdBQUcsaUJBQWlCLENBQUM7QUFBQSxNQUNwRCxVQUFVO0FBQUEsSUFDWixDQUFDO0FBQUEsRUFDSDtBQUNGOzs7QURwQ0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxrQkFBa0I7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLQyxTQUFRLEtBQUs7QUFBQSxJQUNwQjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJyZXNvbHZlIiwgInJlc29sdmUiXQp9Cg==

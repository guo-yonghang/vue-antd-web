// vite.config.ts
import { defineConfig } from "file:///C:/Users/19512/Desktop/vue-study/node_modules/vite/dist/node/index.js";
import { resolve as resolve2 } from "path";

// build/plugins.ts
import vue from "file:///C:/Users/19512/Desktop/vue-study/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/19512/Desktop/vue-study/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { resolve } from "path";
import AutoImport from "file:///C:/Users/19512/Desktop/vue-study/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/19512/Desktop/vue-study/node_modules/unplugin-vue-components/dist/vite.js";
import { ArcoResolver } from "file:///C:/Users/19512/Desktop/vue-study/node_modules/unplugin-vue-components/dist/resolvers.js";
import { vitePluginForArco } from "file:///C:/Users/19512/Desktop/vue-study/node_modules/@arco-plugins/vite-vue/lib/index.js";
import { createSvgIconsPlugin } from "file:///C:/Users/19512/Desktop/vue-study/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import vueSetupExtend from "file:///C:/Users/19512/Desktop/vue-study/node_modules/unplugin-vue-setup-extend-plus/dist/vite.js";
var createVitePlugins = () => {
  return [
    vue(),
    vueJsx(),
    vueSetupExtend({}),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvcGx1Z2lucy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDE5NTEyXFxcXERlc2t0b3BcXFxcdnVlLXN0dWR5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxOTUxMlxcXFxEZXNrdG9wXFxcXHZ1ZS1zdHVkeVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvMTk1MTIvRGVza3RvcC92dWUtc3R1ZHkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBjcmVhdGVWaXRlUGx1Z2lucyB9IGZyb20gJy4vYnVpbGQvcGx1Z2lucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IGNyZWF0ZVZpdGVQbHVnaW5zKCksXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiByZXNvbHZlKCdzcmMnKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMTk1MTJcXFxcRGVza3RvcFxcXFx2dWUtc3R1ZHlcXFxcYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDE5NTEyXFxcXERlc2t0b3BcXFxcdnVlLXN0dWR5XFxcXGJ1aWxkXFxcXHBsdWdpbnMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzE5NTEyL0Rlc2t0b3AvdnVlLXN0dWR5L2J1aWxkL3BsdWdpbnMudHNcIjtpbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XHJcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCc7XHJcbmltcG9ydCB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnO1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcclxuaW1wb3J0IHsgQXJjb1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJztcclxuaW1wb3J0IHsgdml0ZVBsdWdpbkZvckFyY28gfSBmcm9tICdAYXJjby1wbHVnaW5zL3ZpdGUtdnVlJztcclxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnO1xyXG5pbXBvcnQgdnVlU2V0dXBFeHRlbmQgZnJvbSAndW5wbHVnaW4tdnVlLXNldHVwLWV4dGVuZC1wbHVzL3ZpdGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVZpdGVQbHVnaW5zID0gKCk6IChQbHVnaW5PcHRpb24gfCBQbHVnaW5PcHRpb25bXSlbXSA9PiB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgdnVlSnN4KCksXHJcbiAgICB2dWVTZXR1cEV4dGVuZCh7fSksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgcmVzb2x2ZXJzOiBbQXJjb1Jlc29sdmVyKCldLFxyXG4gICAgfSksXHJcbiAgICBDb21wb25lbnRzKHtcclxuICAgICAgcmVzb2x2ZXJzOiBbXHJcbiAgICAgICAgQXJjb1Jlc29sdmVyKHtcclxuICAgICAgICAgIHNpZGVFZmZlY3Q6IHRydWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIF0sXHJcbiAgICB9KSxcclxuICAgIHZpdGVQbHVnaW5Gb3JBcmNvKHtcclxuICAgICAgc3R5bGU6ICdjc3MnLFxyXG4gICAgfSksXHJcbiAgICAvL1x1NEY3Rlx1NzUyOFx1ODFFQVx1NUI5QVx1NEU0OXN2Z1x1NTZGRVx1NjgwNy9hc3NldHMvc3Znc1x1NzZFRVx1NUY1NVx1NEUwQlxyXG4gICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xyXG4gICAgICBpY29uRGlyczogW3Jlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hc3NldHMvc3ZncycpXSxcclxuICAgICAgc3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXScsXHJcbiAgICB9KSxcclxuICBdO1xyXG59O1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRSLFNBQVMsb0JBQW9CO0FBQ3pULFNBQVMsV0FBQUEsZ0JBQWU7OztBQ0RnUixPQUFPLFNBQVM7QUFDeFQsT0FBTyxZQUFZO0FBRW5CLFNBQVMsZUFBZTtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLHlCQUF5QjtBQUNsQyxTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLG9CQUFvQjtBQUVwQixJQUFNLG9CQUFvQixNQUF5QztBQUN4RSxTQUFPO0FBQUEsSUFDTCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxlQUFlLENBQUMsQ0FBQztBQUFBLElBQ2pCLFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxhQUFhLENBQUM7QUFBQSxJQUM1QixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXO0FBQUEsUUFDVCxhQUFhO0FBQUEsVUFDWCxZQUFZO0FBQUEsUUFDZCxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0Qsa0JBQWtCO0FBQUEsTUFDaEIsT0FBTztBQUFBLElBQ1QsQ0FBQztBQUFBO0FBQUEsSUFFRCxxQkFBcUI7QUFBQSxNQUNuQixVQUFVLENBQUMsUUFBUSxRQUFRLElBQUksR0FBRyxpQkFBaUIsQ0FBQztBQUFBLE1BQ3BELFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxFQUNIO0FBQ0Y7OztBRC9CQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLGtCQUFrQjtBQUFBLEVBQzNCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUtDLFNBQVEsS0FBSztBQUFBLElBQ3BCO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInJlc29sdmUiLCAicmVzb2x2ZSJdCn0K

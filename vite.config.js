import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, VantResolver } from 'unplugin-vue-components/resolvers'
import { createStyleImportPlugin, ElementPlusResolve } from "vite-plugin-style-import"
import eslint from 'vite-plugin-eslint'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    /** 此插件按需导入element-plus组件及主题样式 */
    AutoImport({
      resolvers: [
        ElementPlusResolver({ importStyle: 'sass' })
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({ importStyle: 'sass' }),
        VantResolver()
      ],
    }),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: name => {
            return `element-plus/theme-chalk/${name}.css`;
          },
        },
      ],
    }),
    // eslint
    eslint(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
})

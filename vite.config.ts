import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [vue(), visualizer()],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue';"
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // @指向src
    }
  },
  base: './', //打包路径
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/css/common.scss";`
      }
    }
  },
  optimizeDeps: {
    include: ["dayjs"]
  },
  build: {
    minify: false
  },
  server: {
    port: 9000,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'https://www.fastmock.site/mock/742291c8c6d8aafe2a6181609c417d1e/v3',
        changeOrigin: true,
        secure: true,
        rewrite: path => path.replace('/api/', '')
      },
      // '/api': {
      //   target: 'http://localhost:3000/v3',
      //   changeOrigin: true,
      //   secure: true,
      //   rewrite: path => path.replace('/api/', '')
      // }
    }
  }
})

import { fileURLToPath, URL } from 'node:url'
import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  base: '/',
  esbuild: {
    drop: ['console', 'debugger'],
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: '/',
  productionSourceMap: false, 
  css: {
    sourceMap: false, 
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true,
    port: 'auto',
  }
})

// const { defineConfig } = require('@vue/cli-service')
// var path = require('path')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,
//   publicPath: '/',
//   productionSourceMap: false, 
//   css: {
//     sourceMap: false, 
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'public'),
//     },
//     historyApiFallback: true,
//     port: 'auto',
//   }

// })


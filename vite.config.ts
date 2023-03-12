/*
 * @Author: 洛圣都马头人
 * @Date: 2023-03-12 16:03:30
 * @LastEditTime: 2023-03-12 19:57:11
 * @LastEditors: 洛圣都马头人
 * @Description: 
 * @FilePath: \NewChess\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'

import electron from "vite-plugin-electron";

export default defineConfig({
  server: {
    hmr: true,
    port: 3000,
  },
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue\??/,
      ]
    }),
    electron({
      entry: "electron-main/index.ts", // 主进程文件,
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  build: {
    emptyOutDir: false, // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录
  }
})

/*
 * @Author: 洛圣都马头人
 * @Date: 2023-03-19 16:32:22
 * @LastEditTime: 2023-03-19 16:51:28
 * @LastEditors: 洛圣都马头人
 * @Description: 
 * @FilePath: \new-chess\src\main.ts
 */
import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
const electron = require('electron')

// 全局挂载electron
const app = createApp(App)
app.use(router).mount('#app')
app.provide('$electron', electron)

/*
 * @Author: 洛圣都马头人
 * @Date: 2022-08-12 17:42:25
 * @LastEditTime: 2023-03-19 15:22:50
 * @LastEditors: 洛圣都马头人
 * @Description: 
 * @FilePath: \NewChess\src\router\index.ts
 */
// 路由文件
import { createRouter, createWebHashHistory } from 'vue-router'
import index from '@/views/index.vue'
const routes = [
  {
    path: '/',
    name: '',
    redirect: '/index'
  },
  {
    path: '/index',
    component: index
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})

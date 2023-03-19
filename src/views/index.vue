<!--
 * @Author: 洛圣都马头人
 * @Date: 2023-03-19 15:22:06
 * @LastEditTime: 2023-03-19 17:07:32
 * @LastEditors: 洛圣都马头人
 * @Description: 首页
 * @FilePath: \new-chess\src\views\index.vue
-->
<template>
  <div @click="close">首页</div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const electron = inject('$electron') as any;

const close = () => {
  electron.ipcRenderer.send('window-close')
}
</script>

<style lang="less" scoped></style>

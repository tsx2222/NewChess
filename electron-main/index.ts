/*
 * @Author: 洛圣都马头人
 * @Date: 2023-03-12 19:24:05
 * @LastEditTime: 2023-03-12 19:33:36
 * @LastEditors: 洛圣都马头人
 * @Description: electron主进程文件
 * @FilePath: \NewChess\electron-main\index.ts
 */
import { app, BrowserWindow } from 'electron'
import path from 'path';

const createWindow = () => {
  // 浏览器实例
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      // 渲染进程是否使用Node API
      nodeIntegration: true,
      // 是否开启隔离上下文
      contextIsolation: false,
      preload: path.join(__dirname, "../electron-preload/index.js"),
    },
  });

  // 如果打包了，渲染index.html
  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, "../index.html"));
  } else {
    // 开发环境
    let url = "http://localhost:3000"; // 本地启动的vue项目路径
    win.loadURL(url);
  }
}

app.whenReady().then(() => {
  // 创建窗口
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
})

// 关闭窗口
app.on("window-all-closed", () => {
  // 不是在MacOS上关闭窗口
  if (process.platform !== 'darwin') {
    app.quit();
  }
})
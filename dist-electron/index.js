"use strict";const e=require("electron"),o=require("path"),t=()=>{const n=new e.BrowserWindow({width:1920,height:1080,webPreferences:{nodeIntegration:!0,contextIsolation:!1,preload:o.join(__dirname,"../electron-preload/index.js")}});if(e.app.isPackaged)n.loadFile(o.join(__dirname,"../index.html"));else{let i="http://localhost:3000";n.loadURL(i)}};e.app.whenReady().then(()=>{t(),e.app.on("activate",()=>{e.BrowserWindow.getAllWindows().length===0&&t()})});e.app.on("window-all-closed",()=>{process.platform!=="darwin"&&e.app.quit()});

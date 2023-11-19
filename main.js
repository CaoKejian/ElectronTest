const { app, BrowserWindow } = require('electron')

function createWindow() {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 加载 index.html 文件
  win.loadFile('index.html')
}

// 在 Electron 应用程序准备就绪时创建窗口
app.whenReady().then(createWindow)

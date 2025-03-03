import http from 'http'
import https from 'https'
import os from 'os'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 检查是否存在SSL证书
const sslExists = () => {
  try {
    // 使用项目目录下的软链接路径
    const keyPath = '/www/wwwroot/47.103.44.190/ssl/privkey.pem'
    const certPath = '/www/wwwroot/47.103.44.190/ssl/fullchain.pem'
    return fs.existsSync(keyPath) && fs.existsSync(certPath)
  } catch (error) {
    return false
  }
}

// 获取SSL配置
const getSSLOptions = () => {
  if (!sslExists()) return null
  try {
    return {
      // 读取宝塔面板的SSL证书
      key: fs.readFileSync('/www/server/panel/vhost/cert/47.103.44.190/privkey.pem'),
      cert: fs.readFileSync('/www/server/panel/vhost/cert/47.103.44.190/fullchain.pem'),
    }
  } catch (error) {
    console.error('SSL证书读取失败:', error)
    return null
  }
}

// 用于记录CPU时间相关信息，便于计算CPU使用率
let prevTotalTime = 0
let prevIdleTime = 0

// 自定义函数用于获取CPU使用率（兼容Windows和Linux的简单估算方式）
const getCpuUsage = () => {
  return new Promise((resolve, reject) => {
    const cpus = os.cpus()
    let totalTime = 0
    let idleTime = 0
    for (const cpu of cpus) {
      for (const type in cpu.times) {
        totalTime += cpu.times[type]
        if (type === 'idle') {
          idleTime += cpu.times[type]
        }
      }
    }

    const diffTotalTime = totalTime - prevTotalTime
    const diffIdleTime = idleTime - prevIdleTime
    const usage = 100 - (diffIdleTime / diffTotalTime) * 100

    // 对CPU使用率取整
    const roundedUsage = Math.round(usage)

    prevTotalTime = totalTime
    prevIdleTime = idleTime

    resolve(roundedUsage)
  })
}

// 处理请求的函数
const handleRequest = async (req, res) => {
  if (req.url === '/server-status') {
    try {
      const cpuUsage = await getCpuUsage()
      const totalMemory = os.totalmem()
      const freeMemory = os.freemem()
      const usedMemory = totalMemory - freeMemory

      // 计算内存使用率百分比（取整）
      const memoryUsagePercent = Math.round((usedMemory / totalMemory) * 100)
      const freeMemoryPercent = Math.round((freeMemory / totalMemory) * 100)

      const serverStatus = {
        cpuUsage,
        usedMemory,
        freeMemory,
        memoryUsagePercent,
        freeMemoryPercent,
      }

      // 设置跨域相关的响应头
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(serverStatus))
    } catch (error) {
      console.error('获取系统信息出错', error)
      res.writeHead(500)
      res.end('Internal Server Error')
    }
  } else {
    res.writeHead(404)
    res.end('Not Found')
  }
}

const port = 10223
const sslOptions = getSSLOptions()

if (sslOptions) {
  // 如果有SSL证书，创建HTTPS服务器
  const httpsServer = https.createServer(sslOptions, handleRequest)
  httpsServer.listen(port, () => {
    console.log(`HTTPS Server running on port ${port}`)
  })

  // 移除 HTTP 重定向服务器，让宝塔面板处理重定向
} else {
  // 如果没有SSL证书，创建HTTP服务器
  const httpServer = http.createServer(handleRequest)
  httpServer.listen(port, () => {
    console.log(`HTTP Server running on port ${port}`)
  })
}

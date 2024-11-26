import http from 'http';
import os from 'os';

// 用于记录CPU时间相关信息，便于计算CPU使用率
let prevTotalTime = 0;
let prevIdleTime = 0;

// 自定义函数用于获取CPU使用率（兼容Windows和Linux的简单估算方式）
const getCpuUsage = () => {
  return new Promise((resolve, reject) => {
    const cpus = os.cpus();
    let totalTime = 0;
    let idleTime = 0;
    for (const cpu of cpus) {
      for (const type in cpu.times) {
        totalTime += cpu.times[type];
        if (type === 'idle') {
          idleTime += cpu.times[type];
        }
      }
    }

    const diffTotalTime = totalTime - prevTotalTime;
    const diffIdleTime = idleTime - prevIdleTime;
    const usage = 100 - ((diffIdleTime / diffTotalTime) * 100);

    // 对CPU使用率取整
    const roundedUsage = Math.round(usage);

    prevTotalTime = totalTime;
    prevIdleTime = idleTime;

    resolve(roundedUsage);
  });
};

const server = http.createServer(async (req, res) => {
  if (req.url === '/server-status') {
    try {
      const cpuUsage = await getCpuUsage();
      const totalMemory = os.totalmem();
      const freeMemory = os.freemem();
      const usedMemory = totalMemory - freeMemory;

      // 计算内存使用率百分比（取整）
      const memoryUsagePercent = Math.round((usedMemory / totalMemory) * 100);
      const freeMemoryPercent = Math.round((freeMemory / totalMemory) * 100);

      const serverStatus = {
        cpuUsage,
        usedMemory,
        freeMemory,
        memoryUsagePercent,
        freeMemoryPercent
      };

      // 设置跨域相关的响应头
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(serverStatus));
    } catch (error) {
      console.error('获取系统信息出错', error);
      res.writeHead(500);
      res.end('Internal Server Error');
    }
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

const port = 10223;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

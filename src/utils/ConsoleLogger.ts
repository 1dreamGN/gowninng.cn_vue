// 判断当前环境是否为浏览器环境，用于后续更严谨地决定是否执行控制台相关操作
const isBrowser = typeof window!== 'undefined';

// 定义consolelog函数，用于输出带样式的控制台日志
export const consolelog = (title: string, msg: string): void => {
  if (isBrowser && window.console) {
    console.log('\n' + ' %c ' + title + ' %c '+ msg +' ' + '\n', 'color: #fff; background-image: linear-gradient(to right, black , grey); padding:5px 0;border-radius:.5rem 0 0 .5rem;', 'background-image: linear-gradient(to right, grey , black); padding:5px 0;border-radius:0 .5rem .5rem 0;color: #fff;text-decoration: none;');
  }
};

// 定义consoleInfo函数，用于输出特定的页面加载时间日志信息（调用consolelog函数来实现带样式输出）
export const consoleInfo = (): void => {
  if (isBrowser && window.console) {
    consolelog(
      '/1dreamGN/Index',
      `页面加载消耗了 ${(Math.round(100 * performance.now()) / 100 / 1e3).toFixed(2)}s`,
    );
  }
};
